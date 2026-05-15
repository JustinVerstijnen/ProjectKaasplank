---
title: "Getting started with Terraform"
slug: "getting-started-with-terraform"
date: 2026-07-13
tags:
- Step by Step guides
categories:
- Microsoft Azure
description: "In this guide, I show the path from installation to deployment: I install Terraform, prepare my Azure login using Azure CLI, and then run a “single server” Terraform setup so you can see the process end-to-end."
---

## Terraform described

Terraform is a framework built by HashiCorp that lets you manage cloud infrastructure for Azure and Amazon Web Services using only text files. It does this by talking to the Azure Resource Manager API, the underlying system that manages Azure environments, Azure CLI, and Azure PowerShell.

Terraform uses declarative code, where you tell the system what end result you want, instead of using PowerShell scripts that describe everything step by step.

**In simple words:**

1. You write what you want, for example: “make a server, with an IP linked and an NSG”.
2. Terraform creates a “plan” to show what it will do before touching your cloud environment.
3. Then Terraform applies the plan using Azure CLI to build or change the Azure resources according to your plan.

[![jv-media-8507-99d18c372f66.png](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-99d18c372f66.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-99d18c372f66.png)

The topology of the resources we will deploy in this guide is:

| Resource type | Resource name |
| --- | --- |
| Resource group | rg-jv-<project> |
| OS disk | osdisk-jv-<project> |
| VNET | vnet-jv-<project> |
| NIC | nic-jv-<project> |
| Public IP | pip-jv-<project> |
| NSG | nsg-jv-<project> |
| VM | vm-jv-<project> |

After the resources are deployed, a PowerShell script is executed in the VM to install the Active Directory role and configure it.

In this guide, I will show how to install Terraform, prepare your Azure login, start using Terraform, and run a single-server Terraform setup I made with the needed dependencies and security.

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

In this step, I will install Terraform on my local computer. First, go to the official Terraform installation page.

[https://developer.hashicorp.com/terraform/install](https://developer.hashicorp.com/terraform/install)

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-9691e43b1ac8.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-9691e43b1ac8.png)

On this Terraform installation page, download the Windows version of Terraform.

After downloading the ZIP file, extract it. Inside the ZIP file, you will find the *terraform.exe* file. For this guide, I place the Terraform binary in the folder below. Create the folder below if it does not already exist.

- C:\Tools\Terraform

Then place *terraform.exe* inside this folder.

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-02474ea7de4e.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-02474ea7de4e.png)

Terraform is now installed on the computer, but Windows still needs to know where it can find _terraform.exe_.

To make this work from every PowerShell window, I add the Terraform folder to the Windows user Path. If you have another location, change the location.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
$terraformlocation = "C:\Tools\Terraform"
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($userPath -notlike "*$terraformlocation*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$terraformlocation", "User")
}
{{< /card >}}

This action sets the variable in the Windows environment variables. This is similar to this GUI option.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ae1a5f665475.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ae1a5f665475.png)

After changing the *Path*, close all open PowerShell and Visual Studio Code windows. Then open a new PowerShell window and check if Terraform is working:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform -version
{{< /card >}}

If Terraform is installed correctly, the Terraform version will be shown in the terminal.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
PS C:\Users\InfoJustinVerstijnen> terraform -version
Terraform v1.15.2
on windows_amd64
{{< /card >}}

Terraform is now installed and ready to use.

---

## Step 2: Installation of Azure CLI

We can now install Azure CLI if it is not already installed, as Terraform needs a way to authenticate to Microsoft Azure. The easiest way to install Azure CLI is with `winget`.

Open PowerShell as Administrator and run the command below:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
winget install --exact --id Microsoft.AzureCLI
{{< /card >}}

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-30279654acd2.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-30279654acd2.png)

The installation can take some time, so please have a little patience. This process can take up to 15 minutes.

After the installation is completed, close all open PowerShell and Visual Studio Code windows. This is needed so Windows can reload the new environment variables and initialize the required commands.

Then open a new PowerShell window and check if Azure CLI is working:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az version
{{< /card >}}

If Azure CLI is installed correctly, the Azure CLI version information will be shown in the terminal.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
PS C:\Users\InfoJustinVerstijnen> az version
{
  "azure-cli": "2.86.0",
  "azure-cli-core": "2.86.0",
  "azure-cli-telemetry": "1.1.0",
  "extensions": {
    "account": "0.2.5",
    "logic": "1.1.0"
  }
}
{{< /card >}}

Azure CLI is now also installed and ready to use.

---

## Step 3: Downloading my Single Server Terraform setup

For ease of this guide, I have a full template available that deploys the resources as stated in the description at the top of the page. We only need to change some variables to your liking.

Go to my GitHub repository to download the simple one-server setup:

<a class="btn btn-primary" href="https://github.com/JustinVerstijnen/JV-TF-SingleWindowsServerActiveDirectory" target="_blank" rel="noreferrer">Download Terraform setup from GitHub</a>

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-753081aad9ac.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-753081aad9ac.png)

Click on "Code", click Download ZIP, and place it on your computer in a known location. This folder contains the Terraform setup, with some preconfigured files. For this guide, we only need to change information in the terraform.tfvars file.

---

## Step 4: Changing the project variables

In the file _terraform.tfvars_, you can change the project variables. This file is where you set values like names, IP addresses, and other settings for your deployment. Review everything before saving.

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-d32fe6d628b2.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-d32fe6d628b2.png)

Change the information to your liking. The required items to change are:

- Line 4: Subscription ID
- Line 5: Project name
- Line 13: Your IP address for whitelisting purposes
- Line 16, 17, 18, 19, 20: Your Active Directory details

After changing this information, save the file and we are now ready to go.

---

## Step 5: Deploying the Terraform project

Now we are finally ready to deploy our Terraform project to Azure. We will log in to Azure CLI and then prepare Terraform for the deployment. In my Azure environment, nothing is available using the project names:

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-78e67cf80990.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-78e67cf80990.png)

Let's sign in to Azure CLI using this command:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az login
{{< /card >}}

Then log in to your Azure account where you want to deploy the resources. Also be sure to perform the additional verification steps.

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ad7642e5dc79.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ad7642e5dc79.png)

After that, Azure CLI can ask for additional information, like the subscription you want to deploy the resources into. If you have not already done so, copy the Subscription ID and paste this into line 4 of the _terraform.tfvars_ file.

Now navigate to the folder of your Terraform project in the Visual Studio Code terminal.

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-0444f67a21f6.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-0444f67a21f6.png)

Then we can perform these commands:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform init
{{< /card >}}

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-056e180e1730.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-056e180e1730.png)

Terraform is now initialized, and some temporary files are created. Then validate the configuration:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform validate
{{< /card >}}

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-75a613a3d311.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-75a613a3d311.png)

After validation completes with zero errors, create a plan. This command, `terraform plan`, creates a file that shows what will be added to the Azure environment.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
{{< /card >}}

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-6b15fe5afc1b.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-6b15fe5afc1b.png)

Finally, apply the plan:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform apply main.tfplan
{{< /card >}}

Terraform will now start the full deployment based on your Terraform variables and plan.

[![Image](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-211b908415a8.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-211b908415a8.png)

Now the complete deployment will be executed and built in Azure. In the terminal window, you can review the status. The complete deployment will take around 5 minutes.

After a few seconds, while the deployment is still running, we can already see the resource group being created:

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-bfd6c870bf8e.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-bfd6c870bf8e.png)

After around 5 minutes, Terraform will inform us that the deployment is finished, giving us information about what has been done, such as the IP address to connect with RDP.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-146a9a4df81a.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-146a9a4df81a.png)

If you need to remove all the resources Terraform created, you can run:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform destroy
{{< /card >}}

This will destroy every resource created by the Terraform plan.

---

## Step 6: The results

After `terraform apply` finishes, Terraform has built the resources defined in the Terraform setup. Let's check the results:

- check the output shown by Terraform in your terminal, and
- check the Azure resources in the Azure Portal for the resource group that was created or used by this Terraform setup

This is the newly created resource group, for example. All dependent resources are created.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-7435cd091c23.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-7435cd091c23.png)

And in the VNET, the DNS server is also changed to get new servers into the DNS/Active Directory of the created servers.

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ee155ad50186.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-ee155ad50186.png)

---

## Step 7: Changes to Terraform project (optional)

If you change something in the Terraform setup, for example in `terraform.tfvars`, you can update Azure again by running these commands:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
terraform apply main.tfplan
{{< /card >}}

Terraform will compare what it wants, the new plan, with what already exists, and then apply the changes.

If you want to remove everything completely, use the `terraform destroy` command first.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform destroy
{{< /card >}}

---

## Summary

Terraform helps you deploy Azure resources in a repeatable way using Infrastructure as Code. With the steps above, you installed Terraform and Azure CLI, prepared your settings in `terraform.tfvars`, then used `terraform init`, `terraform validate`, `terraform plan`, and `terraform apply` to deploy your single-server setup. This structured format follows the same blog layout pattern as my post template.

The advantages of Terraform are fast deployment, modular setup in code, and easy scalable deployment.

Thank you for reading this post and I hope it was helpful!

### Sources

These sources helped me with writing and research for this post:

1. [https://developer.hashicorp.com/terraform/install](https://developer.hashicorp.com/terraform/install)

{{< ads >}}

{{< article-footer >}}