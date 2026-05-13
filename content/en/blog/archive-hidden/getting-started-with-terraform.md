---
title: "Getting started with Terraform"
slug: "getting-started-with-terraform"
date: 2026-07-13
tags:
- Step by Step guides
categories:
- Microsoft Azure
---


## Terraform described

[![jv-media-8507-99d18c372f66.png](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-99d18c372f66.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-99d18c372f66.png)



## Requirements

- Around 30 minutes of your time
- Moderate knowledge of Azure and PowerShell
- Basic knowledge of Terraform and Infrastructure as Code
- Visual Studio Code
- Terraform
- Azure CLI

## Step 1: Installation of Terraform

Installation of the Binary version of Terraform which I placed in C:\Tools\Terraform


https://developer.hashicorp.com/terraform/install

{{< card code=true header="**PowerShell**" lang="powershell" >}}
$terraformlocation = "C:\Tools\Terraform"
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($userPath -notlike "*$terraformlocation*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$terraformlocation", "User")
}
{{< /card >}}



![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-02474ea7de4e.png)

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform -version
{{< /card >}}

## Step 2: Installation of Azure CLI

{{< card code=true header="**PowerShell**" lang="powershell" >}}
winget install --exact --id Microsoft.AzureCLI
{{< /card >}}

This installation can take up to 15 minutes so please have a little patience.

After the installation is completed, restart all PowerShell and Visual Studio Code windows to load the new environmental variables and be able to use the newly installed packages.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az version
{{< /card >}}

## Step 3: Downloading my Single Server Terraform setup

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/getting-started-with-terraform/jv-media-8507-753081aad9ac.png)

Download the ZIP file and place it on your computer on a known place.

---

## Step 4: Changing the project variables

In the file terraform.tfvars, we can change the project's variables, stating the settings of the project like names, IP addresses and such. Review those before saving and deploying to fully customize the settings to your needs.





---

## Step 5: Applying the Terraform project

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az login
{{< /card >}}

Now the correct SUbscription ID is in your screen. Copy the ID where the whole deployment must be created and paste it between the quotes on line 4 of the terraform.tfvars file.

Now let's navigate to our Terraform folder on our local computer and let's initialize the project.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform init
{{< /card >}}

Now we can validate our project using the built-in validation rules in the project. This checks if certain variables are filled in correctly before deploying complete nonsense.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform validate
{{< /card >}}

After validating and receiving zero errors, we can proceed by letting Terraform build a plan, we do this with this command, where you can change the filename main.tfplan.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
{{< /card >}}

And finally, let's deploy our new environment with this command:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform apply main.tfplan
{{< /card >}}

This will kick-off the complete deployment according to your Terraform variables and plan and builds the Azure resources according to plan.

If the deployment went not according to plan or you need to change some things, you can easily remove all just deployed resources with this command:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform destroy
{{< /card >}}

## Step 6: The results

Let's take a look at the results built by the Terraform setup.



## Step 7: Changes to Terraform project (optional)

If changing anything to your setup after deploying, run these two commands again to revise the plan and then apply it again to your Azure environment:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
terraform apply main.tfplan
{{< /card >}}

Make sure the resources are deleted prior to making a new Terraform plan and deployment.

---

## Summary

Short summary of the post and what the organization wins using the information of the post

### Sources

1. https://developer.hashicorp.com/terraform/install


{{< ads >}}

{{< article-footer >}}