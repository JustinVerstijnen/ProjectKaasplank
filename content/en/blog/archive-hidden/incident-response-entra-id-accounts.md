---
title: "Incident Response for Entra ID accounts"
slug: "incident-response-entra-id-accounts"
date: 2026-07-01
tags:
- Tools and Scripts
categories:
- Microsoft Entra ID
hidden: true
build:
  render: always
  list: never
description: "This page explains the steps required to recover from an account compromise. The focus of this guide is on Microsoft 365 accounts, but the same framework can also be applied to other accounts such as 3CX, personal Microsoft accounts, or other SaaS platforms."
---

This guide focuses on activity from the last 14 days, starting from the date of the first detected compromise.

The reader/executor is encouraged to actively think along with the situation, as every hack or compromise is different.
This guide is based on my prior experience and industry best practices.

---

## Overview

For account compromise incidents, we work with the following five steps:

1. Detection phase
2. Blocking actions
3. Recovery actions
4. Investigation phase
5. Closure and reporting

---

## 1. Detection Phase

An account compromise is never pleasant and can be detected in several ways:

- A customer reports seeing strange messages in Outlook
- A customer account has been blocked from signing in
- Contacts of the customer receive spam or phishing emails
- Other signals indicating a possible compromise

Before taking blocking or recovery actions, we must first **verify that the account is actually compromised**.
Otherwise, further steps are unnecessary.

In short, during this phase we:

- Review the last **30 days** of sign-in activity
- Look for sign-ins from **unknown or unusual locations**
- Check whether **multiple users** are affected

Do not spend too much time in this phase.
We must move from detection to blocking as quickly as possible.
**Every second counts.**

---

### 1.1 Review Sign-in Attempts from the Last 30 Days

Review unusual sign-ins in **Entra ID** for the past 30 days.

Steps:

- Set the time range to **1 month / 30 days**
- Add an extra filter:
  - Filter: **Username**
  - Value: the user’s email address / UPN
- Sort by **IP address** and then by **Location**

Evaluate the sign-in behavior:

Healthy sign-in behavior:
- All sign-ins consistently originate from 1–3 expected and explainable IP addresses in the Netherlands  
  (e.g. AVD or Windows 365)

Unhealthy sign-in behavior:
- Successful or failed sign-ins from unexpected countries or IP addresses

Check whether the user has had **successful fraudulent sign-ins** in the last 30 days.

- If not: change the password as a precaution and stop following this guide
- If yes: continue with step 1.2 and follow the rest of this guide

---

### 1.2 Review Risky Users

Check whether the user appears in the **Risky Users** list in Entra ID.

This list shows all users that Microsoft has identified as potentially compromised.
Also verify whether **multiple users** appear in this list.

All users that have posed a risk within the last **14 days** must be included in the recovery steps described below.

---

## 2. Blocking Actions

For each detected user, perform the following actions.

### 2.1 Disable the User Account

Immediately disable the user account to prevent further malicious activity.

During a compromise, attackers often attempt to pivot to more sensitive accounts
such as administrators or executives.

Disabling the account immediately cuts off access and buys time to perform further actions.

This can be done via:
- Microsoft 365 Admin Center, or
- Entra ID Admin Center  
  (Block sign-in)

---

### 2.2 Revoke All Sessions

Revoke all active sessions to invalidate all issued Entra ID tokens.

This ensures that:
- All current sessions become invalid immediately
- Any navigation or refresh attempt will fail

Perform this action in the **Entra ID Admin Center**.

This is an additional safeguard on top of blocking the user,
as token expiration may otherwise take time.

---

### 2.3 Reset the Password

Once the attacker has been fully blocked, reset the user’s password.

Requirements:
- Minimum of **12 characters**
- No dictionary words
- Must not be the same as the previous password

---

## 3. Recovery Actions

Now proceed with recovery actions to limit and repair any further damage.

At this stage, **do not allow the user to log in yet**.

---

### 3.1 Unblock the User Account

After resetting the password, unblock the account so that recovery actions can be performed.

- Unblock the account
- Sign in as the user

---

### 3.2 Check Mailbox Rules

Attackers often create mailbox rules to forward or delete emails.

- Open the mailbox in **Exchange Online Webmail**
- Review all inbox rules
- Remove suspicious rules, such as rules moving all mail to Deleted Items

---

### 3.3 Check Forwarding Rules

Verify whether any email forwarding rules are active.
Remove all unauthorized forwarding rules.

---

### 3.4 Check Automatic Replies

Verify whether automatic replies are enabled.
Disable any unintended or malicious auto-replies.

---

### 3.5 Check MFA Methods

Attackers sometimes register an MFA method as a backdoor.

While still logged in as the user:
- Open the MFA methods page
- Remove all non-relevant methods

---

### 3.6 App Passwords

App passwords can be abused as a backdoor without MFA.

Approach: **Zero Trust — remove everything.**

Steps:

- As administrator, check in Entra ID whether app passwords are enabled
- Open **Service settings**

If the setting is:
- “Do not allow…” → app passwords are disabled; skip this step
- “Allow users…” → continue with cleanup

Investigate whether app passwords were used in the last 30 days.
Disabling app passwords invalidates all existing app passwords immediately.

---

### 3.7 Check Windows 365 / Azure Virtual Desktop Access

If the customer uses **Windows 365** or **Azure Virtual Desktop**, verify:

- Whether sign-ins occurred
- Whether malware is present
- General environment health

Account compromise gives easy access to these environments.

---

### 3.8 Restore User Access

Contact the user **only by phone or in person**.
Restore access to the account so the user can resume work in a cleaned environment.

---

## 4. Investigation Phase (MSP Customers Only)

After containment, both we and the customer want to understand **how this happened**.

### 4.1 Retrieve Audit Logs from Purview

If audit logging was enabled in advance:

- Open **Microsoft Purview**
- Set the time range to the last **14 days**
- Select the affected users under **Users**
- Click **Search**

This will generate a report containing all user activities for further analysis.

---

### 4.2 Further Investigate Entra ID Sign-in Logs

Revisit Entra ID sign-in logs to determine:

- From which countries sign-ins originated
- Whether certain countries should be blocked
- Whether Conditional Access policies can prevent similar attacks

Blocking IPs alone is insufficient, as IP addresses are easily spoofed.

---

### 4.3 Review Users and Roles

Investigate whether current roles or permissions contributed to the incident.

Open PowerShell and run the following:

# Step 1: Sign in to Azure AD
Connect-AzureAD

# Step 2: Retrieve administrative roles
Get-AzureADDirectoryRole | ForEach-Object {
    $role = $_
    Get-AzureADDirectoryRoleMember -ObjectId $role.ObjectId | ForEach-Object {
        @{
            DisplayName = $_.DisplayName
            UserPrincipalName = $_.UserPrincipalName
            RoleName = $role.DisplayName
        }
    }
}

Each line represents a role assignment.

Remove unintended role assignments.
In principle, only Skreprtech and break-glass accounts should have administrator rights.

---

### 4.4 Check Exchange Connectors

Compromised admin accounts may create Exchange connectors for abuse.

Steps:

- Open **Exchange Admin Center**
- Go to **Mail flow**
- Open **Connectors**
- Remove any unauthorized connectors immediately

---

### 4.5 Investigate Backdoors in Enterprise Applications

Backdoors may be created via Enterprise Applications with high privileges.

Use Microsoft Graph PowerShell:

# Step 1: Authenticate
Connect-MgGraph -Scopes "Application.Read.All", "Directory.Read.All" -NoWelcome

# Step 2: Retrieve applications and service principals
$applications = Get-MgApplication -All
$servicePrincipals = Get-MgServicePrincipal -All

# Step 3: Build lookup tables
$spLookup = @{}
$permissionsLookup = @{}

foreach ($sp in $servicePrincipals) {
    if ($sp.AppId) {
        $spLookup[$sp.AppId] = $sp.DisplayName
        foreach ($res in @($sp.Oauth2PermissionScopes + $sp.AppRoles)) {
            $permissionsLookup["$($sp.AppId)|$($res.Id)"] = $res.Value
        }
    }
}

# Step 4: Create result set
$appDetails = @()

foreach ($app in $applications) {
    $hasSecret = ($app.PasswordCredentials | Where-Object { $_.EndDateTime -gt (Get-Date) }).Count -gt 0
    $hasCert = ($app.KeyCredentials | Where-Object { $_.EndDateTime -gt (Get-Date) }).Count -gt 0

    foreach ($resourceAccess in $app.RequiredResourceAccess) {
        foreach ($access in $resourceAccess.ResourceAccess) {
            $permType = if ($access.Type -eq "Role") { "Application" } else { "Delegated" }
            $permName = $permissionsLookup["$($resourceAccess.ResourceAppId)|$($access.Id)"]

            $appDetails += @{
                ApplicationId   = $app.AppId
                DisplayName     = $app.DisplayName
                PermissionType  = $permType
                PermissionName  = $permName
                HasClientSecret = $hasSecret
                HasCertificate  = $hasCert
            }
        }
    }
}

# Step 5: Export results
$appDetails | Export-Csv "EntraID_AppPermissions_WithNames.csv" -NoTypeInformation -Encoding UTF8 -Delimiter ";"

After analysis, this step is complete.

---

## 5. Closure and Reporting

After completing the investigation, share the findings with the customer.

This improves awareness and helps prevent future incidents.
Consider advising the customer to internally share lessons learned.

There is currently no fixed template for reporting.
All collected data from the investigation phase can be shared directly or demonstrated in the portals.
``

---

## Summary

Short summary of the post and what the organization wins using the information of the post

### Sources

- Some links of documentation from official sources


{{< ads >}}

{{< article-footer >}}