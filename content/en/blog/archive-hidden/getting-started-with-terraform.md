---
title: "Getting started with Terraform"
slug: "getting-started-with-terraform"
date: 2026-07-13
tags:
- Step by Step guides
categories:
- Microsoft Azure
---

## Heading A

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
$ProgressPreference = 'SilentlyContinue'
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindowsx64 -OutFile .\AzureCLI.msi
Start-Process msiexec.exe -Wait -ArgumentList '/I', 'AzureCLI.msi', '/quiet'
Remove-Item .\AzureCLI.msi
{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}
az version
{{< /card >}}

---

## Heading B

Paragraph text

<a class="btn btn-primary" href="/blog/" target="_blank" rel="noreferrer">This is a button</a>

{{< card code=true header="**POWERSHELL**" lang="powershell" >}}
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

## Heading C



---

## Summary

Short summary of the post and what the organization wins using the information of the post

### Sources

- Some links of documentation from official sources


{{< ads >}}

{{< article-footer >}}
