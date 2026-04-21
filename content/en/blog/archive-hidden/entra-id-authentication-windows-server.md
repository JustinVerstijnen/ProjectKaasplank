---
title: "Entra ID Authentication on Windows Server"
date: 2026-04-04
slug: "entra-id-authentication-windows-server"
categories:
  - Windows Server
draft: true
---

# Joining an Azure Server to Azure AD

This guide explains how to join an Azure virtual machine to **Azure Active Directory (Azure AD)**.
Please note that this process has several prerequisites that must be met before configuration.

---

## Prerequisites

Before starting, ensure the following requirements are met:

- The **AADLoginForWindows** VM extension is installed
- Security settings are properly configured
- A **System Assigned Managed Identity** is enabled
- A whitelist is configured according to  
  https://skrepr.atlassian.net/wiki/spaces/TECH/pages/24446528
- A **public DNS A record** exists pointing to the public IP address of the server
- The **full FQDN** is configured on the server
- **Internet login** is enabled in the RDP file

---

## 1. Install the AADLoginForWindows Extension

The required extension can be installed via the Azure Portal.

Steps:

- Go to **Virtual Machines** and select the desired virtual machine
- Start the virtual machine if it is not running and wait approximately 5 minutes
- Under **Settings**, go to **Extensions + Applications**
- Click **Add**
- Search for **AADLoginForWindows**
- Install the extension

At this point, the Azure VM should have the extension installed.

---

## 2. Configure Security Settings

In the Azure Portal, you can define which users are allowed to log in to the server.
This can be done for regular users or administrators.

Steps:

- Go to **Virtual Machines** and select the desired virtual machine
- Open **Access Control (IAM)**
- Add a new **role assignment**
- Search for the role **Virtual Machine Administrator Login**
- Add the customer’s general administrator account as the **Principal**

This completes the role assignment.

---

## 3. Enable System Assigned Managed Identity

To allow the server to authenticate against Azure AD, a **System Assigned Managed Identity** must be enabled.
This identity allows Azure resources to receive permissions and access Azure AD-related services.

Steps:

- Go to **Virtual Machines** and select the desired virtual machine
- Under **Settings**, open **Identity**
- On the **System assigned** tab, set the status to **On**

---

## 4. Configure the Whitelist

To ensure that only authorized users can access the server and to secure the RDP ports,
a whitelist must be configured.

Steps:

- Go to **Virtual Machines** and select the desired virtual machine
- Under **Settings**, go to **Networking**
- Configure an inbound security rule based on the whitelist defined at  
  https://skrepr.atlassian.net/wiki/spaces/TECH/pages/24446528

---

## 5. Create a Public A Record

A public DNS **A record** must be created on the customer’s domain,
using **exactly the same hostname as the server**.

Example:

- Azure VM name: `XXX-APP-SRV01`
- DNS record: `xxx-app-srv01.customer.com`
- This record must point to the **public IP address** assigned to the Azure VM

Create this record at the DNS provider of the domain and verify it resolves correctly using `ping`.

---

## 6. Configure the Full FQDN on the Server

Steps:

- Log in to the virtual machine
- Open **sysdm.cpl**
- On the **Computer Name** tab, click **Change**
- Click **More**
- Add the customer domain to **Primary DNS Suffix**
- Apply the changes and restart the server

After this, the full FQDN of the server will be set.
Example: `ORO-APP-SRV01.oromar.nl`

---

## 7. Enable Internet Login in the RDP File

In the RDP file used to connect to the server, internet account login must be enabled.
In the classic MSTSC client, this option can be configured in the connection settings.

Additional requirements:

- Connect using the **full FQDN** of the server  
  (hostname.domain, e.g. `xxx-app-srv01.customer.com`)
- Append a custom port if required

After connecting, you will be presented with a **Microsoft 365 / Azure AD login prompt**.
Log in using the customer’s administrator account.

If all steps are completed correctly, you should now be able to log in to the server using Azure AD.
