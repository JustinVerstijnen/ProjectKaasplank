---
title: "Remove Roaming Profile folders with PowerShell (force)"
slug: "remove-roaming-profile-folders-powershell"
date: 2025-04-11
tags:
- Tools and Scripts
categories:
- PowerShell
- Windows Server
description: "This guide uses and describes a PowerShell script that removes a roaming profile folder by taking ownership, fixing permissions and attributes, and using a robocopy fallback if delete fails due to several possible reasons."
---

This guide explains the script in a step-by-step way, like the post template uses headings, steps, and a short final summary. [[1]]

## What this script does (simple explanation)

This script tries to **clean and delete a folder** (the folder you set in `$fullPath`). It does it more forcefully than a normal delete, because it also:
- changes ownership (`takeown`)
- changes permissions (`icacls`)
- removes protected file attributes (`attrib`)
- and if normal delete fails, it uses a **robocopy fallback** to make the folder empty

## What you need before you start

- Run PowerShell as **Administrator**
- Update these variables before running:
  - `$fullPath` = the folder you want to clean/remove
  - `$emptydir` = where the script creates a temporary empty folder
- Be sure you are pointing to the correct folder (this script deletes contents)

## Step by step: how to use it

### Step 1: Edit the script paths
Change this line:
- `$fullPath = "D:\Path\To\Profiles"`

And this line:
- `$emptydir = "C:\JVEmptyDir"`

### Step 2: Start PowerShell as Administrator
Right-click PowerShell → **Run as administrator**.

### Step 3: Run the script
Run the `.ps1` file, for example:
- `.\YourScriptName.ps1`

### Step 4: Watch the messages
You may see:
- a message when `$emptydir` is created
- warning messages if the script has to use the robocopy fallback
- a message about removing the temporary empty directory

### Step 5: Check the result
After the script finishes, check that the target folder (based on `$fullPath`) is cleaned/removed as expected.

## Summary + Important Notes (combined)

- The script is designed to **remove a folder and its contents**, even when permissions or attributes make deletion hard.
- It first tries a normal delete (`Remove-Item`), then:
  - if the folder still exists, it uses a robocopy fallback to mirror an empty folder over the target (so the target becomes empty)
  - if an error happens, it also uses the robocopy fallback and then tries again to remove what is left
- The script makes changes to permissions and ownership of the target folder (because of `takeown` and `icacls`).
- Because this is destructive, only run it when you are sure `$fullPath` is correct.

Thank you for reading this post and I hope it was helpful!

## Sources

1. https://learn.microsoft.com/powershell/module/microsoft.powershell.management/remove-item  
2. https://learn.microsoft.com/windows-server/administration/windows-commands/takeown  
3. https://learn.microsoft.com/windows-server/administration/windows-commands/icacls  
4. https://learn.microsoft.com/windows-server/administration/windows-commands/attrib  
5. https://learn.microsoft.com/windows-server/administration/windows-commands/robocopy  

{{< ads >}}

{{< article-footer >}}