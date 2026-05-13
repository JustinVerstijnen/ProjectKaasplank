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




## Installation of Terraform

Paragraph text


https://developer.hashicorp.com/terraform/install

{{< card code=true header="**PowerShell**" lang="powershell" >}}
$terraformlocation = "C:\Tools\Terraform"
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($userPath -notlike "*$terraformlocation*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$terraformlocation", "User")
}
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform -version
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
winget install --exact --id Microsoft.AzureCLI
{{< /card >}}

This installation can take up to 15 minutes so please have a little patience.

After the installation is completed, restart all PowerShell and Visual Studio Code windows to load the new environmental variables and be able to use the newly installed packages.

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az version
{{< /card >}}

---

## Heading B

Paragraph text

<a class="btn btn-primary" href="/blog/" target="_blank" rel="noreferrer">This is a button</a>

{{< card code=true header="**PowerShell**" lang="powershell" >}}
This is a code block.
{{< /card >}}

{{% alert title="Info" color="info" %}}
This is an alert block.
{{% /alert %}}

{{% alert title="Warning" color="warning" %}}
This is a warning block.
{{% /alert %}}

{{% alert title="Failure" color="danger" %}}
This is a failure block.
{{% /alert %}}

{{% alert title="Success" color="success" %}}
This is a success block.
{{% /alert %}}

---

## Applying your first Terraform project

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az login
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform init
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform validate
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform apply main.tfplan
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform destroy
{{< /card >}}

## Changes to Terraform project

If changing anything to your setup, run these two commands again to revise the plan and then apply it to your Azure environment:

{{< card code=true header="**PowerShell**" lang="powershell" >}}
terraform plan -out main.tfplan
terraform apply main.tfplan
{{< /card >}}

---

## Summary

Short summary of the post and what the organization wins using the information of the post

### Sources

- Some links of documentation from official sources


{{< ads >}}

{{< article-footer >}}
