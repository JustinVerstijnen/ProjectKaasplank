---
title: "Disable Active Directory synchronization in Microsoft Entra ID (company-wide)"
slug: "disable-active-directory-synchronization-in-microsoft-entra-id"
date: 2024-09-23
tags:
- Step by Step guides
categories:
- Microsoft Azure
description: "This guide describes on how to disable Entra ID synchronization company-wide without restoring users from the recycle bin. Therefore instructiong you further on how to phase out Entra Connect Sync."
---

## How to uninstall Microsoft Entra Connect Sync
The correct way to disable Active Directory synchronization with Microsoft Entra ID is to follow the steps in the Microsoft Entra Connect article Uninstall Microsoft Entra Connect.

That supported process will:
- Turn off directory synchronization in on-premises AD
- Turn off directory synchronization in Microsoft Entra ID
- Uninstall Microsoft Entra Connect Sync from the server

If your on-premises AD environment is already offline, then you cannot do the uninstall step there. In that case, you can disable the sync setting only in Microsoft Entra ID.

---

## Step 1. Install Microsoft Graph PowerShell module
Start Windows PowerShell as Administrator, then run:

{{< card code=true header="**POWERSHELL**" lang="powershell" >}}
Install-Module Microsoft.Graph -Force
{{< /card >}}

**Important:** Before you run commands, update to the latest Microsoft Graph PowerShell module version to avoid errors and wrong results.

## Step 2. Connect to Microsoft Graph PowerShell
I connect to Microsoft Graph PowerShell using the required scope (permission):

{{< card code=true header="**POWERSHELL**" lang="powershell" >}}
Connect-MgGraph -Scopes "Organization.ReadWrite.All"
{{< /card >}}

## Step 3. Check current on-premises sync status
I check the current sync status in Microsoft Entra ID:

{{< card code=true header="**POWERSHELL**" lang="powershell" >}}
Get-MgOrganization | Select-Object DisplayName, OnPremisesSyncEnabled
{{< /card >}}

**What I look for:**
- `True` = sync is enabled
- `null/empty` = sync is disabled

Example from the guide:
- `DisplayName` = EXOIP
- `OnPremisesSyncEnabled` = `True`

## Step 4. Disable on-premises directory synchronization
Now I disable sync in Microsoft Entra ID and move the users to cloud-only.

{{< card code=true header="**POWERSHELL**" lang="powershell" >}}
$OrgID = (Get-MgOrganization).Id

$params = @{
    onPremisesSyncEnabled = $false
}

Update-MgOrganization -OrganizationId $OrgID -BodyParameter $params
{{< /card >}}


- It can take up to 72 hours to finish after you disable sync.
- You cannot cancel the disable action.
- Wait until it is finished before you do other actions (including turning it back on).
- If you later re-enable on-premises directory synchronization, a full synchronization will happen again (time depends on how many objects you have).

## Step 5. Verify on-premises synchronization status
Finally, I check again if the on-premises sync is disabled:

{{< card code=true header="**POWERSHELL**" lang="powershell" >}}
Get-MgOrganization | Select-Object DisplayName, OnPremisesSyncEnabled
{{< /card >}}

After disabling, `OnPremisesSyncEnabled` should show as null/empty.

Example from the guide:
- `DisplayName` = EXOIP
- `OnPremisesSyncEnabled` = empty

I also confirmed the status in the Microsoft 365 admin center (before vs after turning it off), as shown in the guide.

---

## Conclusion (and Summary)
In this post, I showed how to disable Active Directory synchronization in Microsoft Entra ID.

- Best option: disable sync on both sides (on-premises AD + Microsoft Entra ID), then uninstall Microsoft Entra Connect.
- Only-cloud option: if the on-premises environment is already down, disable sync only in Microsoft Entra ID.

Thank you for reading this post and I hope it was helpful!

### Sources
1. https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-uninstall-entra-connect
2. https://learn.microsoft.com/powershell/module/microsoft.graph.identity.directorymanagement/update-mgorganization

{{< ads >}}

{{< article-footer >}}