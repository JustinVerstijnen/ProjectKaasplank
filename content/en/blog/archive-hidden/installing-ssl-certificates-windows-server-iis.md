---
title: "Installing IIS certificates on Windows Server/IIS"
date: 2026-04-04
slug: "installing-ssl-certificates-windows-server-iis"
categories:
  - Networking
draft: true
---

# Installing and Renewing SSL Certificates on Windows Server (IIS)

This guide explains how to install SSL certificates on Windows Server and how to renew them when they are about to expire.
The guide can be used for different types of certificate installations, but the focus is on **Windows Server in combination with Internet Information Services (IIS)**.

---

## Step 1: Create a CSR on the Server

On the server where the SSL certificate will be installed, a **Certificate Signing Request (CSR)** must be created.
This process generates a private key on the server, using specific information that the SSL provider uses to create a public key.

Steps:

- Log in to the server
- Open **Internet Information Services (IIS) Manager**
- Click on the server name
- Open **Server Certificates**

You will now see a list of installed certificates.

- Click **Create Certificate Request…** under *Actions*  
  or  
- Select an existing certificate if this is a renewal

### CSR Information

Fill in the following information in the next window:

- Common Name: The FQDN of the SSL certificate
- Organization: Company name
- Organizational Unit: IT
- City / Locality: City of the company
- State / Province: Province of the company
- Country / Region: *Country in shortcode

Click **Next**.

In the following window, choose a **bit length of 2048**, as this is the minimum required for modern Windows Server versions.

Click **Next** again and save the CSR file.
A convenient location is, for example, the desktop.

Once the CSR has been created, continue to the next step.

---

## Step 2: Request the SSL Certificate

Using the newly created CSR, you can now request a new SSL certificate or renew an existing one.

- Open the CSR file
- Copy the entire contents (CTRL+A, CTRL+C)


---

## Domain Validation

To prove domain ownership, a validation step is required. Xolphin offers several validation methods:

- Validation via email (admin, administrator, webmaster)
- Validation via a file on the website
- Validation via a DNS CNAME record

The preferred method is **DNS validation using a CNAME record**, as it is usually the fastest if the DNS is under our control.

Select this option and click **Continue**, then complete the Xolphin wizard.

---

## Step 4: Download the SSL Certificate

After successful validation, download the certificate from Xolphin.

- Select the option for **Windows Servers**
- Download the certificate package
- Place it on the server

---

## Step 5a: Install the Certificate (New Certificate)

Use this step when installing a certificate that is **new to the server**.
For renewals, use step 5b.

Steps:

- Open **IIS Manager**
- Open the server node
- Open **Server Certificates**
- Click **Complete Certificate Request…** under *Actions*
- Select the downloaded certificate file
- Assign a clear name to the certificate  
  (Including the validity years is recommended)

Click **OK** to import the certificate.

Next, update the **HTTPS bindings** and select the correct certificate for each application.

Once configured, the certificate is active.

The final step is registering the certificate in TOPdesk.

---

## Step 5b: Install the Certificate (Renewal)

Use this step when **renewing an existing certificate**.

Steps:

- Place the downloaded certificate file on the server
- Open **IIS Manager**
- Click on the server and open **Server Certificates**
- Select the certificate for which the CSR was created
- Right-click it and choose **Complete Certificate Request…**
- Select the downloaded certificate
- Assign a clear name, preferably including the validity period
- Click **OK**

Update all IIS bindings to ensure the new certificate is actively used.

---

## Step 6: Register the Certificates

To ensure SSL certificates are renewed on time, they must be registered