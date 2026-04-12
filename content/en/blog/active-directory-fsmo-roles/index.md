---
title: "Active Directory FSMO roles"
date: 2025-02-04 12:05:19
slug: "active-directory-fsmo-roles"
wordpress_post_id: 5732
wordpress_post_type: "post"
categories:
  - "Powershell"
  - "Windows Server"
tags:
  - "Concepts"
  - "Step by Step guides"
original_url: "https://justinverstijnen.nl/active-directory-fsmo-roles/"
---

Active Directory Domain Controllers are assigned 5 different FSMO roles, which all have their own function. We can separate them over multiple servers to create more redundancy, but make sure to handle those all as servers. All roles neeed a 24/7 uptime for your environment to work properly.

In this guide, I will give a brief explaination of the roles, what their function is and how to move them to different servers to enhance availability and redundancy.

## What are the FSMO roles of Active Directory?

FSMO stands for Flexible Single Master Operations. Active Directory is normally multi-master, meaning changes can be made on any domain controller. However, some operations must be handled by one specific domain controller at a time to avoid conflicts. These special responsibilities are called the FSMO roles.

There are five FSMO roles:

- Two forest-wide roles

- Three domain-wide roles

Let's look at them all and explain what their function is:

FSMO RoleScopePrimary Responsibilities**Schema Master**ForestManages Schema updates**Domain Naming Master**ForestAdds/removes domains**PDC Emulator**DomainTime service, password updates, Group Policy**RID Master**DomainAssigns RID pools for unique SIDs**Infrastructure Master**DomainMaintains cross-domain references

For more information about the specifics of the roles, check out the official Microsoft page: [https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/fsmo-roles](https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/fsmo-roles)

Depending on your environment, these roles can run on one or multiple domain controllers. If having an environment with a single domain controller, all roles will be done by that single server. As you might already guess, this is a single point of failure.

## An effective distribution of FSMO roles

In my environment, I have 3 domain controllers. This means we can separate all roles over the 3 servers. I also use Microsoft Azure to run them, and so placed the 3 servers into 3 availability zones.

**Server****Roles****Availability Zone**JV-DC01.justinverstijnen.nlPrimary Domain Controller (PDC)
Infrastructure masterZone 1JV-DC02.justinverstijnen.nlDomain naming master
RID MasterZone 2JV-DC03.justinverstijnen.nlSchema Master
Entra Connect SyncZone 3

Because Entra Connect Sync is also a critical function of my domain, I placed this on my third server to give all 3 servers 2 dedicated roles.

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/active-directory-fsmo-roles-5732/jv-media-5732-95408e56dc1d.png)

## Get the actual separation of roles

To view how the roles are separated at this time, run this command at one of your AD management servers (or domain controllers):

PowerShellnetdom query fsmo`netdom query fsmo`

You will get an output like this:

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/active-directory-fsmo-roles-5732/jv-media-5732-9faa4c6b46b6.png)

Here I have separated the roles onto 3 different servers. In Microsoft Azure, I have the servers set-up in different availability zones to also defend my environment to datacenter-outages.

## Move FSMO roles with PowerShell (one by one)

We can move those roles with PowerShell by using those commands:

PowerShellMove-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole PDCEmulator -Confirm:$false`Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole PDCEmulator -Confirm:$false`

Make sure to change the *server* placeholder to your server name.

## Move FSMO roles with PowerShell (bulk)

To move all roles to predetermined servers, you can also run all commands at once:

PowerShellMove-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole PDCEmulator -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole InfrastructureMaster -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole RIDMaster -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole DomainNamingMaster -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole SchemaMaster -Confirm:$false`Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole PDCEmulator -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole InfrastructureMaster -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole RIDMaster -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole DomainNamingMaster -Confirm:$false
Move-ADDirectoryServerOperationMasterRole -Identity *server* -OperationMasterRole SchemaMaster -Confirm:$false`

Make sure to change the *server* placeholder to your server names.

## Summary

Every now and then, we need to move some FSMO roles to other servers or we need this when setting up. Dividing the roles onto multiple servers ensure not the whole domain is interrupted with one server failing and so creates redundancy and availability for your users.

- [https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/fsmo-roles](https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/fsmo-roles)
