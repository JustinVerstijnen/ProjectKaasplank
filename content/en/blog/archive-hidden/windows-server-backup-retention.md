---
title: "Windows Server Backup Retention"
date: 2024-04-04
slug: "windows-server-backup-retention"
categories:
  - Windows Server
draft: true
---

# Removing Old Backups in Windows Server Backup

This page explains how to easily remove old backups in Windows Server Backup.
Windows Server Backup is a solid solution, but it is fairly limited in functionality.
For example, the GUI does not provide any option to configure how long backups should be retained.
That is why we use the workaround described below.

For more information about the wbadmin tool, see:
https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/wbadmin

---

## The Script

We created a small script based on wbadmin that removes old backups while keeping the last 30 backups.
The script itself consists of the following command:

wbadmin delete backup -keepVersions:30 -quiet

### Explanation of the command

- wbadmin  
  The command-line tool that makes this solution possible. It is part of Windows Server Backup.

- delete  
  Indicates that a delete operation should be performed.

- backup  
  Specifies what should be deleted: backups.

- -keepVersions:30  
  Keeps the 30 most recent backups and deletes all older backups.

- -quiet  
  Prevents confirmation prompts (Y/N) and avoids showing a command window to interactive users.

---

## Script Location

We store scripts for local machines in C:\Scripts.
In this case, the full path to the script is:

C:\Scripts\Delete_Old_Backups.bat

---

## Scheduled Task

Using this script, you can create a scheduled task that runs the cleanup automatically at a fixed interval.

For the ******** servers, a scheduled task was created that runs every Sunday night at 02:00.

Make sure the task runs outside the regular backup window,
as running it during an active backup may cause issues.

### Opening Task Scheduler

To open the Windows Task Scheduler:
- Type “Task Scheduler” in the Start menu, or
- Run taskschd.msc

### Task configuration

- Configure the task schedule according to your maintenance window
- Configure the task action to run the batch file located in C:\Scripts

---