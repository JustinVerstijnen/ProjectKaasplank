---
title: "How I bumped up Microsoft Secure Score towards 100%"
date: 2026-04-30
slug: "how-i-bumped-up-microsoft-secure-score-towards-100"
categories:
  - Secure Score
tags:
  - Step by Step guides
description: >
  In this post series, I will demonstrate how I bumped up the Microsoft Secure Score of my tenant up to 100%. This can be used to change the...
draft: true
---
In this post series, I will demonstrate how I bumped up the Microsoft Secure Score of my tenant up to 100% (98,78% to be exact). This can be used to change the settings of your own tenant and have a better security posture.

However, 100% secure score will definitely not mean that you are not hackable. It only means you use 100% of the Microsoft toolbox to defend your digital fortress. Spending more resources on awareness training for employees is a good approach on top of these settings. They are often the weakest factor.

This pages and the subpages describe how I got my secure score up, and describing the settings I have done. For Intune Device pillar, I shared my Configuration Profile for fast import and reviewing the settings to use on your side.

---

---

## Microsoft Secure Score subpages

These subpages contains the different pillars to address:

[1. Identity](https://justinverstijnen.nl/microsoft-secure-score-identity/)
[2. Devices](https://justinverstijnen.nl/microsoft-secure-score-devices/)
[3. Apps](https://justinverstijnen.nl/microsoft-secure-score-apps/)
[4. Data](https://justinverstijnen.nl/microsoft-secure-score-data/)

On these pages I did the recommendations step-by-step and added some non-counting advices of myself and some things I found out in my work.

---

## What is the Microsoft Secure Score?

The Microsoft Secure Score is a dynamic index number on scale of 0% to 100% that automatically scans your Microsoft tenant for possible enhancements on the security area. It gives several recommendations for us administrators to strengthen the security, based on zero trust, and based on those 4 pillars:

- Identity
- Data
- Devices/Endpoints
- Apps

The recommendations Microsoft gives are based on years of experience, cybersecurity trends and industry accepted benchmarks ([like CIS](https://www.cisecurity.org/cis-benchmarks)). Some of the recommendations arrived from the older Active Directory era, but also from modern solutions and 3rd party community benchmarks like CIS and ISO 27001. The recommendations will dive into several different attack vectors:

- Protection against insider risks
- Protection against attackers
- Disabling unsafe protocols or features
- Blocking unsafe logins
- Classify your sensitive data

By getting your Secure Score to 100% means you are using 100% of the Microsoft Security toolbox. This doesn't mean that you are unhackable, which you technically would never be able to achieve.

---

## Starting point

When started out, my tenant contained around 8 users and 2 devices and have Business Premium licenses assigned to the users with Entra P1 included. My total secure score was 31,65% and the Identity pillar was 42,42%:

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/how-i-bumped-up-microsoft-secure-score-towards-100-5293/jv-media-5293-cf5c9fb82ed1.png)

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/how-i-bumped-up-microsoft-secure-score-towards-100-5293/jv-media-5293-a44012a62c4d.png)

While I mostly use the Secure Score of the security.microsoft.com portal, as this contains every pillar we also have the secure score from the Entra portal. As you can see, they are a bit inconsistent. For Zero Trust to work, we have to defend ourselves on every pillar.

---

## Licensing requirements

All the stuff we do on this pages needs the following licenses:

- Microsoft 365 Business Premium
- Windows 11 Enterprise / Education licenses
- Microsoft Defender for Endpoint P2
- Microsoft Entra ID P2
- Microsoft 365 E5 for the Apps recommendations (optional)

We can do most of the stuff with Business Premium licenses, which most small and bigger business should use. For the guides I ordered some standalone licenses to gain access to every setting available.

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/how-i-bumped-up-microsoft-secure-score-towards-100-5293/jv-media-5293-dca97b71a997.png)

And for optimal Identity security, we need Entra ID Premium Plan 2 licenses assigned to every user:

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/how-i-bumped-up-microsoft-secure-score-towards-100-5293/jv-media-5293-dcb05c94b2bc.png)

It is not essentially required to have those licenses, but it will drastically expand our toolbox to secure all Zero Trust pillars.

---

## My final Microsoft Secure Score (after the guides)

As I did not implement every single setting, my Secure Score was hanging at 98,7% which is still a great score. In my environment, I did not have any Windows Enterprise or Education devices, so some of the recommendations were not achievable.

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/how-i-bumped-up-microsoft-secure-score-towards-100-5293/jv-media-5293-0f017efcd3d5.png)

![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/how-i-bumped-up-microsoft-secure-score-towards-100-5293/jv-media-5293-637f95350ee6.png)

---

## Summary

Getting the Secure Score of my tenant was a very fun and interesting experience. Still I found out some settings I have never heard about before and did understand some admin centers a bit better.

Altough, some settings feel more like a compliance thing than actually getting your security level up, but nevertheless it was very fun.

Thank you for visiting this page and I hope it was helpful.

---

## End of the page 🎉

You have reached the end of the page. You can select a category, share this post on X, LinkedIn and Reddit or return to the blog posts collection page. Thank you for visiting this post.

If you think something is wrong with this post or you want to know more, you can send me a message to one of my social profiles at: <https://justinverstijnen.nl/about/>

[Go back to Blog](https://justinverstijnen.nl/blog/)

If you find this page and blog very useful and you want to leave a donation, you can use the button below to buy me a beer. Thank you in advance and cheers :)

[![](https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=justinverstijnen&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/justinverstijnen)

[![](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/about-66/jv-media-66-36a3c69c96cb.png)](https://buymeacoffee.com/justinverstijnen)

The [terms and conditions](https://justinverstijnen.nl/terms-conditions/) apply to this post.

Page visitors:
No page-counter data available yet.
