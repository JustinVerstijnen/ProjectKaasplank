---
title: "CWL Azure Red Team Certification - What I learned"
slug: "cwl-azure-red-team-what-i-learned"
date: 2026-07-01
tags:
- Try Outs
categories:
- Microsoft Azure
hidden: true
build:
  render: always
  list: never
description: "In the first half of 2026 I followed a paid course on cyberwarfare.live. Namely the CWL Certified Azure Red Team Specialist (AzRTS) course. On this page I will not dive deep into the stuff but in the notes I took and what I have learned from doing the course."
---

"If you don't test your infrastructure as an attacker, someone else will."

## Starting out

I started on the site cyberwarfare.live by purchasing the course. I found this very fun looking and interesting to use that information to further secure environments. Learn to attack environments also gains knowledge in how to defend yourself.

The full name of the course was: *CWL Certified Azure Red Team Specialist (AzRTS)*.

Cyberwarfare offers some courses which you can buy or do free and they take advantage of giving you lab assessments that you have to take. In different scenarios you need to find certain information like which IP or account did the attackers use to breach your environment and check your input. 

All of this must be done through a honeypot Azure environment they deliver for you. You only can proceed if you submit the right information which makes it really fun and helpful.

## Certification subjects

The objectives of the certification are:

- Develop a strong understanding of Microsoft Azure cloud architecture from an offensive security perspective
- Gain practical knowledge of how attackers target core cloud services such as Microsoft Entra ID, Azure Resource Manager, and Microsoft 365
- Understand the Azure attack lifecycle, including initial access, privilege escalation, persistence, and lateral movement
- Identify and analyze security misconfigurations and weak access controls within Azure environments
- Learn techniques to simulate real-world red team attack scenarios in cloud infrastructures
- Perform identity-based attack techniques against Microsoft cloud identity services
- Understand how attackers pivot between on-premises infrastructure and cloud environments in hybrid setups
- Map cloud attack techniques to frameworks such as the MITRE ATT&CK Cloud Matrix
- Develop the ability to conduct structured cloud threat research and adversary emulation
- Gain hands-on experience through practical lab exercises simulating Azure attack scenarios

---

## Key learning points

- When having a hybrid environment, apply hybrid security
- Read-only access is more deadly than it looks
- OAuth apps are very sensitive for hacks and backdoors and mostly hiding in plain sight


---

## Module 1: Introduction to Azure

Microsoft Azure and Entra ID are valuable resources for hackers as these are global services. This means they are available for you as user but also for attackers. By breaching one single login, they have access to everything an user also has access to.

### Access tokens

Microsoft Azure uses Microsoft Entra ID as Identity Provider. This identity provider is basically a system that checks the users' credentials and then assigns a token where the user can login to all authorized applications and resources. By default, this token is valid for 90 days.

An access token looks like this and can be further defined with [this tool](https://www.jwt.io/): 

*plaatje

This token is then saved into the cache of the browser so the user does not have to reauthenticate for every resource or application.

### Control plane and Data plane

Some resources in Azure needs security on both the control and data planes of the resource:

- Control plane: What users can access the resource, during what time windows and what are their privileges?
- Data plane: What users can access what data of the resources, during what time windows and what are their privileges? Dataplanes are also more vulnerable as secrets are a possibility, which are just longer passwords



---

## Summary

Short summary of the post and what the organization wins using the information of the post

### Sources

- Some links of documentation from official sources


{{< ads >}}

{{< article-footer >}}
