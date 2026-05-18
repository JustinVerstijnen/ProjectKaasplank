---
title: "Remove Universal Print Devices/Connectors"
slug: "remove-universal-print-devices-connector"
date: 2025-10-25
tags:
- Step by Step guides
categories:
- Microsoft Entra
description: "In this guide I will show how to remove Universal Print Devices and Connectors as this is not possible through the graphical interfaces but must be done through PowerShell."
---

## Heading A

Paragraph text

---

## Heading B


{{< card code=true header="**PowerShell**" lang="powershell" >}}Install-Module UniversalPrintManagement -Scope CurrentUser{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}Connect-UPService{{< /card >}}

{{< card code=true header="**PowerShell**" lang="powershell" >}}Remove-UPConnector -ConnectorId c9af1827-e34a-4292-9614-8a892c332e54{{< /card >}}



---

## Summary

Short summary of the post and what the organization wins using the information of the post








### Sources

1. https://learn.microsoft.com/en-us/universal-print/fundamentals/universal-print-remove-connector-howto

{{< ads >}}

{{< article-footer >}}