---
title: "Sync SharePoing Sites automatically using Intune"
date: 2026-04-04
slug: "syncing-sharepoint-sites-automatically-intune"
categories:
  - Networking
draft: true
---

# Automatically Sync SharePoint Sites with Intune

With Microsoft Intune, you can automatically add SharePoint sites to users.
This is useful because it prevents the need to manually connect multiple SharePoint sites for each user.

---

## Step 1: Prepare SharePoint Site Information

First, copy the **Library ID** of the desired SharePoint site.

Steps:

- Open the SharePoint site as a **Global Administrator** or **SharePoint Administrator**
- Click **Sync** on the document library
- Click **Copy Library ID** to copy the hard link to the library

Next, convert the copied string from Unicode to ASCII.

Steps:

- Open **PowerShell**
- Run the following command and paste the copied string:

[uri]::UnescapeDataString("PASTE THE COPIED STRING HERE")

- Copy the output from PowerShell  
  This output will be used in the Intune configuration profile.

---

## Step 2: Create the Configuration Profile

To create a configuration profile, open the **Intune Admin Center**.

Steps:

- Go to **Devices**
- Select **Windows**
- Go to **Configuration profiles**
- Click **Create profile**
- Set **Platform** to *Windows 10 and later*
- Set **Profile type** to *Settings catalog*
- Click **Create**

Provide a clear **name** and **description** for the profile.

---

## Configuration Settings

- Go to the **Configuration settings** tab
- Click **Add settings**
- Search for **OneDrive**
- Configure the following settings:

### Required settings

- Configure team site libraries to sync automatically (User)  
  Name: SharePoint site name  
  Value: Output from Step 1

- Silently sign in users to the OneDrive sync app with their Windows credentials

- Disable animation that appears during OneDrive Setup (User)

### Optional setting

- Convert synced team site files to online-only files

---

## Assign the Profile

- Assign the configuration profile to the desired **users or groups**

For each SharePoint site, a **separate configuration profile** must be created,
or you can decide per group which SharePoint sites should be synced for all users in that group.