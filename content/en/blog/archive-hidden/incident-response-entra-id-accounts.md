---
title: "Incident Response for Entra ID Accounts"
slug: "incident-response-entra-id-accounts"
date: 2026-07-01
tags:
- Tools and Scripts
categories:
- Microsoft Entra
description: "Learn how to respond to a suspected Entra ID account compromise and recover Microsoft 365 accounts securely."
hidden: false
---

### Overview

In this guide, I will explain the steps you can follow when an Entra ID account is suspected to be compromised.

This guide can also be used as a checklist during investigations to verify whether an account is healthy and to identify what actions an attacker may have performed.

For suspected Entra ID account compromise incidents, we work with the following five phases:

1. Detection phase
2. Blocking actions
3. Remediation actions
4. Investigation phase
5. Closure and reporting

The goal is simple:

- Detect suspicious activity quickly
- Block the attacker as soon as possible
- Recover the account safely without major chances of another breach
- Investigate what happened
- Prevent it from happening again by analyzing the cause and possible changes in policies

---

## 1. Detection Phase

{{% alert title="Info" color="info" %}}
- 1.1 Review sign-in attempts from the last 30 days
- 1.2 Review Risky Users
{{% /alert %}}

An Entra ID account compromise can be detected in several ways. Common examples are:

- A user reports strange Outlook behavior
- The account is blocked automatically
- Contacts receive spam or phishing emails
- Succesful sign-ins appear in the logs or SIEM from unusual countries
- Microsoft flags the account as risky

Before taking recovery actions, we want to first confirm whether the account is actually compromised. This is the main goal of this phase, so focus on:

- Reviewing the last 30 days of sign-in logs
- Looking for succesful sign-in attempts from unusual locations or IP addresses
- Checking whether multiple users are affected

Do not spend too much time in this phase. If compromise is confirmed, move to blocking actions immediately. If you already know by certain behaviour that an account is possibly breached, skip the detection phase and instead directly head to blocking.

### 1.1 Review Sign-in Attempts from the Last 30 Days

Open the Entra ID sign-in logs and review the last 30 days.

Use the following filters:

- Time range: 30 days
- Username: affected user account

Sort the results by:

- IP address
- Location

Healthy sign-in behavior usually shows:

- Consistent locations
- Expected IP addresses
- Trusted environments such as AVD or Windows 365

Unhealthy sign-in behavior may include:

- Sign-ins from unexpected countries
- Impossible travel activity
- Failed sign-ins followed by successful sign-ins

If no successful malicious sign-ins are found:

- Reset the password as precaution
- Monitor the account
- No further actions may be required

If malicious sign-ins are confirmed, continue with the next steps.

### 1.2 Review Risky Users

Open the Risky Users page in Entra ID.

This page shows accounts Microsoft identified as potentially compromised.

Verify:

- Whether the affected account appears in the list
- Whether multiple users are affected

Any user that appeared as risky in the last 14 days should be included in the recovery actions.

---

## 2. Blocking Actions

{{% alert title="Info" color="info" %}}
2.1 Disable the User Account
2.2 Revoke All Sessions

2.3 Reset the Password
{{% /alert %}}

After compromise is confirmed, block the attacker as quickly as possible. The goal in this phase is to stop all active access immediately by revoking the current session and the possibility to the attacker to obtain new tokens. Only blocking access or only changing the password will not stop active sessions for the attacker.

### 2.1 Disable the User Account

Disable the affected account directly.

This prevents the attacker from continuing activity inside the environment.

Attackers often attempt to move toward:

- Administrator accounts
- Executive accounts
- Sensitive mailboxes

Disabling the account immediately limits further damage.

This can be done in:

- Microsoft 365 Admin Center
- Entra ID Admin Center

Use the option:

- Block sign-in

### 2.2 Revoke All Sessions

Revoke all active sessions in Entra ID.

This invalidates all existing authentication tokens.

This ensures:

- Existing sessions stop working
- Browser refreshes fail
- Mobile applications reconnect with new authentication

This step is important because some sessions may remain active for a period of time even after blocking sign-in.

### 2.3 Reset the Password

Reset the password after the attacker is blocked.

Use a strong password:

- Minimum 12 characters
- No dictionary words
- Different from previous passwords

Store the temporary password securely until the recovery phase is completed.

---

## 3. Recovery Actions

{{% alert title="Info" color="info" %}}
3.1 Unblock the User Account
3.2 Check Mailbox Rules

3.3 Check Forwarding Rules

3.4 Check Automatic Replies

3.5 Check MFA Methods

3.6 App Passwords
3.7 Check 3rd-party application sign-ins
3.8 Restore User Access
{{% /alert %}}

At this stage, the attacker should no longer have access. We will now verify whether persistence or backdoors were left behind. Do not allow the user to continue working yet during this phase as possible backdoors or other manipulations can be possibly active.

### 3.1 Unblock the User Account

Unblock the account temporarily for recovery actions.

Then sign in as the user to inspect the environment.

### 3.2 Check Mailbox Rules

Attackers often create mailbox rules to hide activity.

Open Outlook on the Web and review all inbox rules.

Look for suspicious rules such as:

- Automatically deleting emails
- Forwarding emails
- Moving emails to RSS or Deleted Items folders

Remove all suspicious rules immediately.

### 3.3 Check Forwarding Rules

Check whether mailbox forwarding is enabled.

Unauthorized forwarding can allow attackers to continue receiving emails silently.

Remove all unauthorized forwarding settings.

### 3.4 Check Automatic Replies

Verify whether automatic replies are enabled.

Attackers sometimes configure malicious replies to redirect contacts.

Disable all suspicious automatic replies.

### 3.5 Check MFA Methods

Attackers may register their own MFA method as persistence.

Open the user MFA methods page and verify all registered methods.

Remove:

- Unknown devices
- Unknown phone numbers
- Unknown authenticator applications

Only trusted MFA methods should remain.

### 3.6 App Passwords

App passwords can bypass MFA in older applications.

Follow a Zero Trust approach and remove anything unnecessary.

Verify whether app passwords are enabled in Entra ID.

Possible situations:

- “Do not allow users to create app passwords”
- “Allow users to create app passwords”

If app passwords are enabled:

- Review usage
- Remove unnecessary app passwords
- Disable the feature if possible

Disabling app passwords invalidates all existing app passwords immediately.

### 3.7 Check 3rd-party application sign-ins

Verify:

- User sign-ins
- Suspicious activity
- Malware presence
- General environment health

A compromised account can provide direct access to these systems.

### 3.8 Restore User Access

After all recovery actions are completed, restore access to the user.

Only communicate the new credentials:

- By phone
- In person

Avoid sending passwords through email.

---

## 4. Investigation Phase

{{% alert title="Info" color="info" %}}
4.1 Retrieve Audit Logs from Purview
4.2 Further Investigate Entra ID Sign-in Logs

4.3 Review Users and Roles

4.4 Check Exchange Connectors

4.5 Investigate Backdoors in Enterprise Applications
{{% /alert %}}

After containment and recovery, investigate how the compromise happened.

This helps improve security and reduce future incidents.

### 4.1 Retrieve Audit Logs from Purview

If auditing was enabled beforehand:

- Open Microsoft Purview
- Search the last 14 days
- Filter on affected users

Review:

- Mailbox activity
- File activity
- Sign-ins
- Permission changes

Export the logs if needed for documentation.

### 4.2 Further Investigate Entra ID Sign-in Logs

Revisit the sign-in logs for deeper analysis.

Investigate:

- Source countries
- IP addresses
- Authentication methods
- Conditional Access gaps

Consider whether Conditional Access policies could prevent similar attacks in the future.

Examples include:

- Blocking risky countries
- Requiring compliant devices
- Blocking legacy authentication

Blocking only IP addresses is usually insufficient because attackers can change IP addresses easily.

### 4.3 Review Users and Roles

Review all privileged role assignments.

Use PowerShell to retrieve all administrative role assignments.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
# Sign in to Azure AD
Connect-AzureAD

# Retrieve administrative roles
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
{{< /card >}}

Review the results carefully and remove unauthorized role assignments.

Only approved administrative accounts should have elevated permissions.

### 4.4 Check Exchange Connectors

Compromised administrator accounts may create Exchange connectors for abuse.

Open:

- Exchange Admin Center
- Mail flow
- Connectors

Review all configured connectors and remove anything suspicious.

### 4.5 Investigate Backdoors in Enterprise Applications

Attackers sometimes create malicious Enterprise Applications or Service Principals with permissions inside the tenant.

Use Microsoft Graph PowerShell to review application permissions.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
# Authenticate
Connect-MgGraph -Scopes "Application.Read.All", "Directory.Read.All" -NoWelcome

# Retrieve applications and service principals
$applications = Get-MgApplication -All
$servicePrincipals = Get-MgServicePrincipal -All

# Build lookup tables
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

# Create result set
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

# Export results
$appDetails | Export-Csv "EntraID_AppPermissions_WithNames.csv" -NoTypeInformation -Encoding UTF8 -Delimiter ";"
{{< /card >}}

Review all applications carefully and remove anything suspicious or unnecessary.

---

## 5. Closure and Reporting

After the investigation is completed, share the findings with the customer or internal organization.

The report should explain:

- What happened
- What was affected
- What actions were taken
- What improvements are recommended

This phase is important for awareness and future prevention.

Use the collected information from:

- Sign-in logs
- Audit logs
- Exchange investigation
- MFA review
- Enterprise Application review

---

## Summary

In this guide, we reviewed a complete incident response process for compromised Entra ID accounts.

The most important parts are:

- Detect suspicious activity quickly
- Block attacker access immediately
- Remove persistence methods
- Investigate how the compromise happened
- Improve security controls afterward

Following a structured response process helps reduce damage and improves recovery time during security incidents.

### Sources

These sources helped me by writing and research for this post;

1. https://learn.microsoft.com/en-us/entra/identity/
2. https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access
3. https://learn.microsoft.com/en-us/purview/audit-search
4. https://learn.microsoft.com/en-us/exchange/monitoring/mail-flow-insights/connectors-report
5. https://learn.microsoft.com/en-us/graph/powershell/get-started

{{< ads >}}

{{< article-footer >}}