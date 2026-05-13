---
title: "Getting started with Terraform"
slug: "getting-started-with-terraform"
date: 2026-07-13
tags:
- Step by Step guides
categories:
- Microsoft Azure
description: "In this guide, I show the path from install to deployment: I install Terraform, I prepare my Azure login using Azure CLI, and then I run a “single server” Terraform setup so you can see the process end-to-end."
hidden: false
---

## Terraform described

Terraform is a framework built by Hashicorp that lets you manage cloud infrastructure for Azure and Amazon Web Services using text files only. Terraform is a declarative code, where you tell the system on how to get the end results, instead of PowerShell scripts that need to describe everything step by step.

**In simple words:**

1. You write what you want (for example: “make a server, with a IP linked and a NSG”).
2. Terraform creates a “plan” to show what it will do before touching your cloud environment
3. Then Terraform applies the plan to build (or change) the Azure resources according to your plan

[![jv-media-8507-99d18c372f66.png](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-99d18c372f66.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-99d18c372f66.png)

In this guide, I will show how to install Terraform, prepare your Azure login, start using Terraform and run a single server Terraform setup I have made with the needed dependencies and security.

---

## Requirements

- Around 30 minutes of your time
- Moderate knowledge of Azure and PowerShell
- Basic knowledge of Terraform and Infrastructure as Code
- Visual Studio Code
- Terraform
- Azure CLI

---

## Step 1: Installation of Terraform

In this step, I will install Terraform on my local computer.

For this guide, I place the Terraform binary in this folder:

`C:\Tools\Terraform`

First, go to the official Terraform installation page:

https://developer.hashicorp.com/terraform/install

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-db0e2386126d.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-db0e2386126d.png)

On the Terraform installation page, download the Windows version of Terraform.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ca4810099bc.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ca4810099bc.png)

After downloading the ZIP file, extract the file. Inside the ZIP file you will find the `terraform.exe` file.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-e27a35758b51.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-e27a35758b51.png)

Create the folder below if it does not already exist:

`C:\Tools\Terraform`

Then place `terraform.exe` inside this folder.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ff6446803ae9.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ff6446803ae9.png)

Now Terraform is on the computer, but Windows still needs to know where it can find `terraform.exe`.

To make this work from every PowerShell window, I add the Terraform folder to the Windows user `Path`.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
$terraformlocation = "C:\Tools\Terraform"
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($userPath -notlike "*$terraformlocation*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$terraformlocation", "User")
}
{{< /card >}}

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ae1a5f665475.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ae1a5f665475.png)

After changing the `Path`, close all open PowerShell and Visual Studio Code windows.

Then open a new PowerShell window and check if Terraform is working:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform -version
{{< /card >}}

If Terraform is installed correctly, the Terraform version will be shown in the terminal.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-02474ea7de4e.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-02474ea7de4e.png)

Terraform is now installed and ready to use.

---

## Step 2: Installation of Azure CLI

Terraform is now installed, but Terraform also needs a way to authenticate to Microsoft Azure.

For this guide, I use Azure CLI for the Azure login.

I install Azure CLI with `winget`.

Open PowerShell as Administrator and run the command below:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
winget install --exact --id Microsoft.AzureCLI
{{< /card >}}

The installation can take some time, so please have a little patience.

After the installation is completed, close all open PowerShell and Visual Studio Code windows. This is needed so Windows can reload the new environment variables.

Then open a new PowerShell window and check if Azure CLI is working:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az version
{{< /card >}}

If Azure CLI is installed correctly, the Azure CLI version information will be shown in the terminal.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-9d5a69b3bbf3.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-9d5a69b3bbf3.png)

Azure CLI is now installed and ready to use.

In the next steps, I will use Azure CLI to sign in to Azure, so Terraform can deploy the Azure resources.

## Step 3: Downloading my Single Server Terraform setup

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-753081aad9ac.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-753081aad9ac.png)

Download the ZIP file and place it on your computer on a known place.

## Step 4: Changing the project variables

In the file `terraform.tfvars`, you can change the project variables.

This file is where you set values like names, IP addresses, and other settings for your deployment. Review everything before saving.

(Reason: these values control what Terraform will create in Azure.)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-30279654acd2.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-30279654acd2.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ca6540d0a4cc.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ca6540d0a4cc.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-6c649b895949.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-6c649b895949.png)

---

## Step 5: Applying the Terraform project

First, sign in to Azure:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az login
{{< /card >}}

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-90fd4b3f4213.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-90fd4b3f4213.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-78e67cf80990.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-78e67cf80990.png)

Now the correct subscription ID should be shown in your screen. Copy the ID and paste it between the quotes on line 4 of the `terraform.tfvars` file.

Next, open PowerShell and go to your Terraform folder on your local computer, then initialize the project:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform init
{{< /card >}}

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ad7642e5dc79.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ad7642e5dc79.png)

Then validate the configuration:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform validate
{{< /card >}}

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-0444f67a21f6.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-0444f67a21f6.png)

After validation with **zero errors**, create a plan.

Terraform plan creates a file that shows what will be changed:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
{{< /card >}}

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-056e180e1730.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-056e180e1730.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-75a613a3d311.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-75a613a3d311.png)

Finally, apply the plan:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform apply main.tfplan
{{< /card >}}

Terraform will now start the full deployment based on your Terraform variables and plan.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-6b15fe5afc1b.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-6b15fe5afc1b.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-bfd6c870bf8e.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-bfd6c870bf8e.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-5ccd23f24a48.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-5ccd23f24a48.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-211b908415a8.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-211b908415a8.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-146a9a4df81a.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-146a9a4df81a.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-7435cd091c23.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-7435cd091c23.png)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ee155ad50186.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ee155ad50186.png)

If you need to remove the resources Terraform created, you can run:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform destroy
{{< /card >}}

> Tip: `terraform destroy` removes the resources. Only run it when you really want to clean everything up.

## Step 6: The results

After `terraform apply` finishes, Terraform has built the resources defined in the Terraform setup.

To see the results:

- check the output shown by Terraform in your terminal, and
- check the Azure resources in the Azure Portal for the resource group that was created/used by this Terraform setup.

## Step 7: Changes to Terraform project (optional)

If you change something in the Terraform setup (for example in `terraform.tfvars`), you can update Azure again by running these commands:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
terraform apply main.tfplan
{{< /card >}}

Terraform will compare what it wants (new plan) with what already exists, and then apply the changes.

If you want to remove everything completely, use the terraform destroy command first.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform destroy
{{< /card >}}

---

## Summary

Terraform helps you deploy Azure resources in a repeatable way using Infrastructure as Code. With the steps above, you installed Terraform and Azure CLI, prepared your settings in `terraform.tfvars`, then used `terraform init`, `terraform validate`, `terraform plan`, and `terraform apply` to deploy your single server setup. This structured format follows the same blog layout pattern from my post template [[1]].

Thank you for reading this post and I hope it was helpful!

### Sources

These sources helped me by writing and research for this post;

1. https://developer.hashicorp.com/terraform/install

{{< ads >}}

{{< article-footer >}}