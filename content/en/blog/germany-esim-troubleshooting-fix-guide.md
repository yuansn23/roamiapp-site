---
title: "Germany eSIM Not Working? Fixes for Common Issues"
description: "No signal after landing? QR code won't scan? APN not working? This guide fixes common Germany eSIM problems. Roami support available 24/7."
keywords: ["Germany eSIM troubleshooting"]
date: 2026-07-07T10:00:00Z
lastmod: 2026-07-07T10:00:00Z
author: "Roami Team"
authorBio: "Roami helps travelers stay connected globally with reliable eSIM plans featuring auto carrier switching across local networks."
image: "/img/esim/germany/germany-esim-troubleshooting-fix-guide.jpg"
categories: ["Germany", "eSIM", "Travel"]
tags: ["Germany eSIM", "Travel eSIM"]
readingTime: 20
draft: false
authorAvatar: "/img/logo.png"
authorPostsLink: "/blog/"
h1title: "Germany eSIM Not Working? A Complete Troubleshooting Guide"
productsTitle: "Popular eSIM Plans"
hotPostsTitle: "Hot Articles"
recentPostsTitle: "Recent Posts"
products:
  - name: "Europe eSIM"
    flag: "/img/flags/eu.svg"
    price: "From $1.99"
    is_highlight: false
    slug: "europe"
  - name: "USA eSIM"
    flag: "/img/flags/us.svg"
    price: "From $1.99"
    is_highlight: false
    slug: "united-states"
  - name: "Japan eSIM"
    flag: "/img/flags/jp.svg"
    price: "From $1.99"
    is_highlight: false
    slug: "japan"
# Recent posts (sidebar)
recentPosts:
  - title: "eSIM Compatible Devices List"
    permalink: "/compatibility/"
    date: "2026-05-26"
  - title: "2026 Cross-Platform eSIM Transfer"
    permalink: "/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/"
    date: "2026-05-25"
  - title: "Dual eSIM Not Working? 12 Fixes for iPhone"
    permalink: "/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/"
    date: "2026-05-24"
  - title: "Smartwatch eSIM Compatibility Complete List"
    permalink: "/faq/smartwatch-esim-compatibility-list-2026/"
    date: "2026-05-23"
  - title: "iPhone SE eSIM Compatibility Guide"
    permalink: "/faq/iphone-se-esim-compatible/"
    date: "2026-05-22"
  - title: "iPhone 11 eSIM Complete Setup Guide"
    permalink: "/faq/iphone-11-esim-compatible/"
    date: "2026-05-21"
  - title: "2026 Ultimate Guide: iPhone 17 eSIM Activation Solutions"
    permalink: "/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/"
    date: "2026-05-20"
---
One in five first-time eSIM users in Germany encounters an activation or connectivity issue, according to complaints logged with the Bundesnetzagentur and consumer forums like heise.de. The most common problems — "No Service" after landing, activation failures, blank screens, and QR codes that will not scan — all trace back to a small set of root causes, each with a known fix that takes under five minutes. Your Germany eSIM shows no signal and you need it fixed now; this guide covers exactly how.

This guide covers every common Germany eSIM failure mode in detail. Use the lookup table below to map your specific symptom to the right section, then follow the deep dives for each problem category. By the end you will have a systematic approach to diagnosing and fixing the issue yourself, plus a clear understanding of when to contact support and what information to have ready.

If you have not yet chosen an eSIM provider for your trip, our complete [germany esim](/germany-esim/) guide compares all the major options across network coverage, pricing, and ease of setup. This article assumes you already have an eSIM and need it working now.

## Quick Reference: Problem to Fix Lookup Table

The table below lets you jump directly to the fix for your specific situation. Each row matches a common symptom to the section of this guide that addresses it.

| Symptom | Most Likely Cause | Go To Section |
|---|---|---|
| No signal at all after landing in Germany | Airplane mode still on, or data roaming disabled | No Service After Arrival |
| eSIM shows "Activation Failed" or "Unable to Activate" | Weak network at installation location, or provider timeout | Activation Failures |
| Mobile data icon appears but nothing loads | APN settings missing or incorrect | APN Settings |
| Internet works but is very slow | Network congestion, wrong network selected, or throttled plan | Slow Data Speeds |
| QR code will not scan or says invalid | Screen brightness too low, or code expired | QR Code Problems |
| Home SIM works but eSIM shows no data | Dual SIM conflict, wrong line set for data | Dual SIM Conflicts |
| Phone shows "Emergency Calls Only" | Network registration failure, or phone carrier-locked | Emergency Calls Only |
| Provider demands passport but verification fails | Document photo blurry, or name mismatch | Passport Registration Failures |
| eSIM stuck on "Activating" for hours | Backend provisioning delay, or manual network selection needed | Activation Failures |
| Signal drops every few minutes | Network switching instability, or VoLTE configuration issue | Signal Drops Frequently |

Bookmark this table or take a screenshot before you travel. The most common scenario -- arriving in Germany and seeing zero signal -- has a fix that takes about thirty seconds, and knowing which section to read can save you the first hour of your trip.

## No Service After Arrival: The Most Common Germany eSIM Problem

The single most frequent support request from eSIM users arriving in Germany is some variation of "I landed two hours ago and my eSIM still shows No Service." The frustration is understandable. You installed the eSIM profile before you left home, the confirmation email said everything was ready, and yet the phone displays the same empty signal indicator it would show in the middle of the Atlantic.

The cause in roughly 80 percent of these cases is not a broken eSIM. It is a combination of two settings that behave differently once your phone connects to a foreign network for the first time. Understanding how network registration works on German networks, as documented by [heise.de](https://www.heise.de), a German technology publication that has extensively tested eSIM roaming across Telekom, Vodafone, and O2, helps clarify why these settings matter.

### Verifying Data Roaming and Line Assignment

**Step one: verify data roaming is enabled for the eSIM line.**

Every modern smartphone requires data roaming to be turned on line by line. This is a security design, not a bug: the phone cannot assume that you want data charges on every line you have installed, and the [EU roaming regulations](https://europa.eu/youreurope/citizens/travel/transport/roaming/) require carriers to prevent accidental roaming charges. When you land in Germany and the phone searches for a local network, it will refuse to establish a data connection on the eSIM unless roaming is explicitly permitted for that line. This catches more travelers than any other single issue.

On an iPhone, go to **Settings > Mobile Service** (or Cellular), tap the eSIM line, and make sure "Data Roaming" is toggled on. On Android, the path is **Settings > Connections > SIM Manager**, then select the eSIM and enable "Data Roaming" or "Roaming" depending on your manufacturer's labels. Samsung devices sometimes place this under **Settings > Connections > Mobile Networks > Roaming**. Google Pixel phones put it under **Settings > Network & Internet > SIMs > [eSIM name] > Roaming**.

**Step two: confirm the eSIM is set as the primary data line.**

Dual SIM configurations are the norm for international travelers, and a common mistake is leaving your home physical SIM as the default for mobile data. Your home carrier will not grant a data connection in Germany unless you have an active international roaming plan on that line, and most travelers switch to eSIM specifically to avoid those charges. The phone's data selector may still point to the home line after you land.

On an iPhone, go to **Settings > Mobile Service > Cellular Data** and choose the eSIM line. On Android, go to **Settings > Connections > SIM Manager** and under "Preferred SIM for" select the eSIM for mobile data. Samsung phones call this "Mobile data" in the SIM manager; Pixel phones label it "Preferred SIM for data."

### Using Airplane Mode and Manual Network Selection

**Step three: toggle airplane mode for sixty seconds.**

When a phone has been in airplane mode during a flight and then reconnects to a network in a different country, the network registration process can stall. The phone may have cached the last known home network and keeps trying to reach it. Turning airplane mode on, waiting a full sixty seconds, and turning it off forces the modem to initiate a fresh network scan in Germany. This single action resolves the Germany eSIM not working after arrival problem more often than any other troubleshooting step.

**Step four: manually select a German network.**

If you still see No Service after enabling roaming, setting the data line correctly, and cycling airplane mode, the phone may be stuck trying to authenticate with a network that does not have a roaming agreement with your provider. Manual network selection bypasses this entirely.

Disable automatic network selection and pick one of the three German national networks manually. On iPhone, go to **Settings > Mobile Service > Network Selection**, turn off "Automatic," and wait for the list of available networks to appear. Select either Telekom, Vodafone, or O2. On Android, go to **Settings > Connections > Mobile Networks > Network Operators**, tap "Search networks," and select one. If the first network you try does not connect, repeat with the other two.

One of these three will work if the eSIM profile is valid and your phone is unlocked. If none of them connects, proceed to the activation failures section below.

### Understanding Network Handover on Arrival

**Why this happens on arrival: the network handover problem.**

When you fly into Germany, your phone attempts to register on a German network using the international roaming credentials stored in the eSIM profile. This process, called Location Update, involves:

1. Your phone sending its International Mobile Subscriber Identity (IMSI) to the German network.
2. The German network querying your eSIM provider's home network to verify that you are allowed to roam.

The entire exchange takes one to three seconds under normal conditions, but several factors can cause it to fail.

Three factors commonly cause the Location Update to fail:

**1. Timing / activation window.** If you installed the eSIM profile before your trip but the provider sets the activation start time to your arrival date, the roaming credentials may not yet be active on the provider's side. The profile is present on your phone, but the backend systems consider it inactive. The fix is usually to wait thirty to sixty minutes or to trigger a manual reconnection by toggling airplane mode.

**2. Network preference caching.** Your phone remembers which network it last used, and if it was connected to a home network before the flight, it may keep trying that network even when it is unreachable from Germany. The phone eventually times out and falls back to automatic selection, but the timeout period varies by manufacturer:

- Apple devices tend to recover within two to three minutes.
- Some Android models, particularly older Samsung and Xiaomi devices, can remain stuck for up to fifteen minutes.
- Cycling airplane mode bypasses this cache immediately.

**3. O2 network compatibility.** O2 relies more heavily on Band 20 (800 MHz) for rural coverage and Band 3 (1800 MHz) for urban capacity. Some phones, particularly those sold in Asian markets, lack Band 20 support entirely. If you manually select O2 and get no signal, your phone may simply lack the radio hardware for that network's primary frequency. Switch to Telekom or Vodafone instead.

If you are traveling with an iPhone 14 or later that was purchased in the United States, those models have no physical SIM tray and rely on eSIM exclusively. The troubleshooting process is identical, but the stakes are higher because you have no fallback option. Make sure your eSIM is working before you leave the airport, and consider carrying a secondary eSIM profile from a different provider as a backup.

## Activation Failures: Provider-Specific Issues and Fixes

An activation failure presents itself differently depending on the provider and the phone model. Some users see a pop-up that says "Unable to Activate eSIM" immediately after scanning the QR code. Others see the eSIM profile appear in the phone's settings but remain stuck on "Activating" for hours. A third group receives the QR code by email, scans it successfully, but the provider's backend never completes the provisioning.

### QR Code Scanning and Installation Issues

**QR code scanning failures during initial installation.**

When a QR code fails to scan, the cause is almost never a faulty code. eSIM QR codes use a standardized GSMA format that encodes the SM-DP+ server address and the activation code. The data is checked by a checksum. If the QR code is damaged on the screen or on paper, the phone simply refuses to register it.

The most effective fix is to increase screen brightness to maximum before scanning. Many travelers scan from a laptop or tablet screen with the brightness turned down to conserve battery. The phone's camera struggles to resolve the fine black-and-white modules at low brightness, particularly on OLED screens where the contrast ratio shifts with brightness levels. Turning brightness to 100 percent resolves roughly half of all QR scanning failures.

If the QR code came as an email attachment in PDF format, open the PDF on a laptop, zoom to fill the screen, and scan from the laptop display rather than the phone screen. Some email apps compress images in their preview pane, which degrades QR code resolution. Opening the PDF separately bypasses this compression.

For providers that support manual entry, you can skip the QR code entirely. The activation information includes a numeric SM-DP+ address and an activation code. On an iPhone, tap "Enter Details Manually" at the bottom of the QR code scanning screen and type in the address and code. On Android, the option appears as "Enter activation code instead" or similar wording during the Add eSIM wizard. This bypasses every scanning-related failure.

### When Activation Gets Stuck

**When the eSIM profile installs but stays stuck on Activating.**

This is the second most common activation failure pattern, and it usually indicates a backend provisioning delay rather than a phone issue. The eSIM profile has been downloaded onto the device's embedded SIM chip, but the provider's server has not yet signaled the German network to accept your IMSI for data traffic.

The first thing to try is a phone restart. Not a quick power cycle that some phones treat as a sleep-wake event, but a full shut down, a thirty-second wait, and a fresh boot. This triggers the phone to re-register on the network with the newly installed eSIM profile.

If a restart does not activate within five minutes, delete the eSIM profile and reinstall from scratch. You can reinstall a Germany eSIM if you delete it, provided the original QR code or activation code is still accessible. On iPhone, go to **Settings > Mobile Service**, tap the eSIM line, and scroll to the bottom to select "Remove Mobile Service Plan." On Android, go to **Settings > Connections > SIM Manager**, tap the eSIM, and choose "Remove" or "Delete." After removal, go through the installation process again with the original QR code or manual entry details. Some providers limit the number of reinstallations, so check the provider's terms before deleting. Most international eSIM providers permit at least three reinstalls per plan.

### Provider-Specific Activation Notes

**Provider-specific activation notes.**

Telekom eSIM activation requires the passport verification process to be fully completed before the eSIM profile becomes active:

- If you ordered a Telekom eSIM with a German phone number, the provider runs a background check against the Bundesnetzagentur's database that can take **five minutes to two hours**.
- The eSIM profile may install immediately, but data and voice will not work until the verification clears.
- During this window, the phone may show "E" or "G" (EDGE or GPRS) rather than "4G" or "5G," or alternate between "No Service" and "Emergency Calls Only."
- This is normal for Telekom -- it indicates the backend registration is pending, not that anything is broken.
- For travelers who prefer to skip this verification, a [germany esim](/germany-esim/) from an international provider requires no passport and activates instantly.

Vodafone Germany eSIM activation similarly depends on the completion of the Video-Ident or Post-Ident process:

- Vodafone's system typically activates within **fifteen minutes** of a successful video identification session.
- During peak periods (Monday mornings, start of major city centers week), the activation queue can extend to **two hours**.
- If you have completed identification and the eSIM remains inactive after two hours, contact Vodafone support with your order number and the Video-Ident reference code.

O2 Germany eSIM activation is the fastest of the three domestic carriers:

- Often completes within **five minutes** of passport verification.
- Known issue: the system occasionally flags foreign passports for manual review, which can delay activation by **24 to 48 hours**.
- O2 customer service can escalate flagged cases, but resolution time depends on the review team's workload.

International eSIM providers that do not require passport verification avoid all the TKG-related delays entirely. The eSIM profile is pre-provisioned on the provider's side before the QR code is generated, so scanning and activation typically complete within seconds. If an international eSIM remains stuck on activating, the issue is almost always related to the phone's network registration rather than the provider's backend, and the manual network selection fix described in the No Service section will usually resolve it.

## APN Settings Not Working: Step-by-Step Fix for Each Network

APN stands for Access Point Name. It is the gateway that tells your phone which server to use for internet traffic. Every mobile network operator has its own APN, and eSIM profiles rarely configure this automatically. The profile includes the basic network credentials, but the APN field is left blank on many international eSIMs because the provider cannot know which German network you will be roaming on at any given moment.

When the APN is missing or incorrect, your phone shows the mobile data icon (LTE, 4G, 5G) with full signal bars, but nothing loads. Browsers time out. WhatsApp messages fail to send. Speed tests show zero throughput. The phone is registered on the network and has an IP address assigned, but the data pathway through the APN gateway is blocked.

### How to Check If APN Is the Problem

**How to check whether your APN is the problem.**

The single most reliable test is to open a web browser and try to load any page. If the page starts loading after a few seconds, APN is not your problem. If the page times out or shows a proxy error while the signal indicator shows a data connection, APN is the likely culprit.

A second test is to check the APN settings currently configured on your phone. On iPhone, go to **Settings > Mobile Service > [eSIM name] > Mobile Data Network**. If the APN field is blank, or if it contains a generic string like "internet" or "data" that does not match your provider's requirements, you need to update it. On Android, go to **Settings > Connections > Mobile Networks > Access Point Names**, select the APN associated with your eSIM, and check the fields.

### APN Settings for Each German Network

**APN settings for each German network.**

The APN for any German network when using an international eSIM is almost always `roami` or the provider's own APN string. However, it is worth knowing the native APN for each German carrier in case your provider instructs you to use the local network APN instead.

For Telekom (Deutsche Telekom) native SIMs and some MVNOs: `telekom.de` or `internet.telekom`

For Vodafone Germany: `web.vodafone.de`

For O2 Germany (Telefonica): `pin2.internet` or `o2.internet`

For international eSIM providers: the APN string is typically provided in your setup instructions.

### Step-by-Step APN Entry for iPhone and Android

**Step-by-step APN entry for iPhone.**

Open **Settings > Mobile Service** and tap the eSIM line that is having problems. Tap **Mobile Data Network**. If you see pre-populated fields, do not delete them unless instructed by your provider. Scroll to the APN field. Enter the correct APN string exactly as provided by your eSIM provider. For international eSIMs that use multiple German networks, the provider will specify a universal APN and may also require a username and password. Most international eSIMs leave username and password blank. Tap the back arrow to save. Turn mobile data off and on again, or restart the phone.

**Step-by-step APN entry for Android.**

Open **Settings > Connections > Mobile Networks > Access Point Names**. Tap the **Add** button or the plus icon in the top right. Enter the APN name (this is a label, can be anything) and the APN field with the string from your provider. Leave username and password blank unless specified. Tap the three-dot menu and select **Save**. Tap the radio button next to the new APN entry to select it as active. Restart the phone.

**Why APN settings sometimes reset.**

A less common but infuriating APN problem occurs when the settings you entered disappear after a phone restart or after switching networks. This happens because some eSIM profiles include a hidden carrier bundle that overwrites user-entered APN fields on each network registration event. iPhone carrier bundles, which are small configuration files pushed by the network, can reset APN values during a network update.

The fix is to check your APN settings after every network change and after every phone restart until you have confirmed they are stable. Some international providers send an over-the-air configuration profile that sets the APN automatically and prevents carrier bundle overwrites. If your provider offers this, install the configuration profile from the link in your confirmation email.

**APN and MMS: a note for German phone numbers.**

If your eSIM includes a German phone number (common with Telekom, Vodafone, and O2 domestic eSIMs), you may also need MMS proxy and MMS port settings to send picture messages. For Telekom: MMS proxy is `010.128.051.046`, MMS port is `8080` or `9201`. For Vodafone: MMS proxy is `010.128.052.017` or `web.vodafone.de`, MMS port is `8080` or `80`. For O2: MMS proxy is `082.113.005.008`, MMS port is `8080`. International data-only eSIMs do not support SMS or MMS, so these fields are irrelevant.

| Issue | Symptom | Most Likely Cause | Fix | Time to Fix |
|-------|---------|------------------|-----|-------------|
| No signal after landing | "No Service" on eSIM line | Data roaming disabled | Enable data roaming for eSIM line | 30 seconds |
| Data icon but nothing loads | 4G/5G shows but apps fail | APN missing or incorrect | Enter correct APN for network | 2 minutes |
| Activation stuck | "Activating" for hours | Backend provisioning delay | Restart phone; if persists, reinstall eSIM | 5 minutes |
| Slow speeds | <5 Mbps in city center | Network congestion | Switch networks manually or use auto-switch | 1 minute |
| QR code won't scan | Camera can't read code | Low brightness or reflections | Max brightness, flat surface, clean camera | 30 seconds |
| Dual SIM no data | Home SIM works, eSIM doesn't | Wrong default data line | Set eSIM as default data line | 30 seconds |
| Emergency calls only | Can't register on network | Carrier-locked phone or provisioning error | Verify unlock status; reinstall eSIM | 5 minutes |
| Passport verification fails | Upload rejected | Blurry photo or name mismatch | Retake in good lighting; match name exactly | 10 minutes |
| Signal drops frequently | Disconnects every few minutes | Network switching instability | Manual network selection to one carrier | 1 minute |

## Slow Data Speeds: Diagnosing and Resolving Network Congestion

A Germany eSIM slow data speed fix depends entirely on which network you are connected to and where you are using it. Germany's mobile infrastructure is generally excellent in cities and along major transport corridors but varies significantly by region and by network operator. The Telekom network consistently ranks first in independent speed tests conducted by the Bundesnetzagentur and by organizations like heise.de, with average download speeds around 120 Mbps in urban areas and 40 Mbps in rural regions. Vodafone averages 85 Mbps urban and 25 Mbps rural. O2 trails at 55 Mbps urban and 12 Mbps rural. These averages mask substantial variation at specific locations and times of day.

### Network Congestion and How to Route Around It

**Network congestion is the most common cause of slow data.**

Like every mobile market globally, Germany's networks experience peak congestion at predictable times:

- In major cities like Berlin, Munich, Hamburg, and Frankfurt, the busy hour runs from roughly 5:00 PM to 8:00 PM local time on weekdays, when commuters are using their phones on public transport and at transit hubs.
- During large events, major city center grounds see a 400 to 500 percent increase in data demand compared to a normal week, according to Telekom's own network reports.
- Shopping districts in December produce similar spikes across city centers.

If you are experiencing slow speeds during these periods, the most effective fix is to switch networks. Services that support automatic network switching between Telekom, Vodafone, and O2 can route around congestion by selecting whichever network is least loaded at your current location. This is a feature worth checking for when you choose a [germany esim](/germany-esim/) provider.

If your eSIM is locked to a single network, try manual network selection to switch to a different one. Here is how the three networks compare:

- **Telekom**: usually the fastest but also the most congested because it has the largest subscriber base.
- **Vodafone**: offers a middle ground with generally good speeds and moderate congestion.
- **O2**: the slowest on average but is often the least congested, which means it can be faster than the other two at peak times in specific locations.

### Signal Strength and Building Penetration

**Signal strength and building penetration.** German building construction affects mobile signals substantially:

- Many older buildings in Berlin and other cities have thick stone walls and windows with metallic coatings that attenuate radio signals.
- If you are inside a hotel, restaurant, or museum and seeing slow speeds, step outside or move near a window and test again.
- If the speed improves significantly, you are dealing with a building penetration issue rather than a network problem.

A related issue affects ICE trains. The Deutsche Bahn high-speed rail network passes through frequent tunnels:

- The Cologne-Frankfurt line has 30 tunnels in 180 kilometers.
- The new Stuttgart-Ulm line also has extensive tunnel sections.
- Inside tunnels, signal drops entirely for 30 to 120 seconds. When the train exits, your phone needs to re-establish a connection, which can take another 10 to 30 seconds.
- This is not a fix that any eSIM can address -- it is a physical limitation of tunnel coverage. However, Telekom has invested most heavily in tunnel coverage and holds a meaningful advantage on ICE routes, as shown on their [coverage map](https://www.telekom.de/netz/coverage).

### Data Throttling and Fair Use Policies

**Data throttling and fair use policies.**

If your eSIM plan has a "fair use" data cap, your speeds may be throttled after you exceed a certain threshold. Many travel eSIMs advertise "unlimited" data but include fine print:

- Fair use policies typically reduce speeds after 1 GB, 3 GB, or 5 GB per day, depending on the plan.
- A plan marked as unlimited at full speed may actually throttle to 128 kbps or 256 kbps after the fair use threshold.
- At throttled speeds, web browsing becomes frustrating and video streaming becomes impossible.

Check your plan's fair use policy before blaming the network or your settings. If you are throttled, the only fix is to purchase a top-up or a new plan with a higher threshold.

Check your plan's fair use policy before blaming the network or your settings. If you are throttled, the only fix is to purchase a top-up or a new plan with a higher threshold. Some providers show your current data usage in their app or via an online dashboard. Others require you to track usage manually.

**APN-induced speed reduction.**

A misconfigured APN can also reduce speeds. If the APN is set to a generic proxy rather than the direct data gateway, all your traffic routes through an intermediate server that adds latency and reduces throughput. This is more common with MVNOs and international providers than with direct network operators. If your speeds are consistently slow regardless of location and time, double-check the APN settings and compare them against your provider's official documentation.

A misconfigured APN can also reduce speeds. If the APN is set to a generic proxy rather than the direct data gateway, all your traffic routes through an intermediate server that adds latency and reduces throughput. This is more common with MVNOs and international providers than with direct network operators.

## QR Code Problems: When Your eSIM Won't Scan

QR code scanning failures account for roughly fifteen percent of all eSIM support contacts. The failure modes vary, but the underlying causes are consistent and almost always fixable without contacting support.

### QR Code Generation and Scanning Issues

**QR code generated incorrectly.**

The first possibility is that the QR code itself was generated with errors:

- eSIM QR codes use the GSMA's SP-48 standard, which encodes the SM-DP+ server address, the activation code, and optionally a confirmation code.
- The data is protected by a CRC32 checksum. If the checksum is invalid, the phone rejects the code with a generic "Invalid QR Code" or "Unable to Activate eSIM" error.
- This is rare -- the GSMA standard handles error detection at multiple levels -- but it does happen when providers use custom QR generation tools rather than the standard libraries.

If the QR code in your email or on your provider's website appears pixelated, blurry, or distorted, request a new one. Most providers regenerate QR codes on demand from their customer dashboard or by contacting support. Do not attempt to scan a pixelated QR code repeatedly; each failed scan attempt can temporarily lock the activation code on the server side to prevent brute-force attacks.

**Phone camera issues with QR scanning.**

The phone camera needs to focus on the QR code as a flat surface. Follow these tips:

- Hold the phone steady at a distance of 10 to 15 centimeters from the code.
- If the code is on a phone screen, turn the brightness to maximum and reduce the display's auto-dim timeout so it does not dim during scanning.
- If the code is curved (wrapped around a slightly bent paper) or the screen has reflections, try flattening the surface or changing the angle.

Some phone cases interfere with QR scanning, particularly cases with a thick rim around the camera lens or cases made of material that causes the phone to rest at an angle. Remove the case if scanning continues to fail.

### Expired QR Codes and Manual Entry

**QR code expired.**

Some providers include a time window in the eSM-DP+ activation code. If the QR code is not scanned within the window -- typically 24 to 72 hours from generation -- the activation code expires and cannot be used. This catches travelers who buy their eSIM weeks before a trip, download the PDF with the QR code, and then attempt to scan it at the airport on departure day.

If your QR code has expired, contact the provider to request a new one. Most international eSIM providers regenerate codes without charge. Some German domestic providers treat this as a new purchase, so if you are ordering your [germany esim](/germany-esim/) well in advance of your trip, confirm the QR code validity period at checkout.

**Manual entry as a QR alternative.**

As noted in the Activation Failures section, manual entry bypasses all scanning issues. The SM-DP+ address and activation code needed for manual entry are typically included in the same email that contains the QR code. If they are not explicitly listed, check the provider's help pages or contact support. Some providers hide the activation code behind a "Show details" link on their order confirmation page.

On iPhone, from the "Set Up Mobile Service" screen, tap "Enter Details Manually" at the bottom. Paste or type the SM-DP+ address and activation code. On Android, during the "Add eSIM" process, tap "Enter activation code instead" or the equivalent option.

### Fixing PDF and Cropped QR Code Issues

**Germany eSIM QR code not scanning fix for PDF issues.**

If your QR code was sent as a PDF attachment and the PDF opens with the QR code partially cropped or scaled incorrectly, the issue is with the PDF viewer, not the QR code. Try opening the same PDF in a different application. On a Mac, Preview typically renders QR codes correctly. On Windows, the built-in PDF reader in Edge works reliably. If the viewer continues to crop the code, take a screenshot of the PDF and scan from the screenshot image saved in your photo library.

## Dual SIM Conflicts: Resolving Line Switching Issues

Running a home SIM alongside a Germany eSIM creates a configuration challenge that many travelers do not anticipate. The phone has two active lines, but only one default line for data, one for voice, and one for SMS. If these defaults are not set correctly, you can end up in a situation where your home SIM is trying to handle data in Germany (incurring roaming charges or failing entirely) while your eSIM sits unused.

### Data Line Conflicts

**Data line conflict.**

This is the most common dual SIM conflict. You installed the eSIM, enabled data roaming, and the phone shows full signal -- but nothing loads. The likely cause is that the phone's default data line is still set to your home SIM. The home SIM is registered on a German network through international roaming, so it shows signal bars, but your home carrier's roaming data is either not activated or subject to restrictions that prevent a connection.

On iPhone, go to **Settings > Mobile Service > Cellular Data** and tap the eSIM line to make it the default. A checkmark appears next to the selected line. On Android, go to **Settings > Connections > SIM Manager** and under "Mobile data" select the eSIM.

### iMessage, FaceTime, and SMS Routing

**iMessage and FaceTime line assignment.**

A subtle conflict arises with iMessage and FaceTime on iPhone:

- Apple allows you to select which line iMessage uses for sending and receiving messages.
- If iMessage is set to use your home SIM's number but your home SIM has lost data connectivity because you switched the data line to the eSIM, iMessage may fail to send or receive messages.

To fix this, go to **Settings > Messages > Send & Receive** and ensure your Apple ID and at least one reachable number are selected. You can also set iMessage to use the eSIM line temporarily.

To fix this, go to **Settings > Messages > Send & Receive** and ensure your Apple ID and at least one reachable number are selected. You can also set iMessage to use the eSIM line temporarily. For FaceTime, go to **Settings > FaceTime** and check the line assignment.

**SMS verification code routing.** Banking verification codes, two-factor authentication messages, and travel booking confirmations often arrive via SMS to your home number:

- On **iPhone**: SMS arrives on both lines regardless of settings.
- On **Android**: go to **Settings > Connections > SIM Manager** and check which SIM is set as "Preferred SIM for SMS."

If you need to receive SMS on your home number while using eSIM data, set the home SIM as the default for SMS and the eSIM as the default for data. This configuration works because SMS uses negligible bandwidth.

On iPhone, SMS arrives on both lines regardless of settings. On Android, go to **Settings > Connections > SIM Manager** and check which SIM is set as "Preferred SIM for SMS." If you need to receive SMS on your home number while using eSIM data, set the home SIM as the default for SMS and the eSIM as the default for data. This configuration works because SMS uses negligible bandwidth and does not interfere with the eSIM's data connection.

### Carrier-Locked Phone Issues

**Germany eSIM dual SIM conflict with carrier-locked phones.** If your phone is locked to a specific carrier from your home country, the eSIM may not work at all:

- Carrier locks apply to all SIMs -- physical and embedded -- and prevent the phone from registering on any network other than the locking carrier's partners.
- An AT&T-locked phone, for example, will not connect to Telekom or Vodafone Germany regardless of which eSIM profile you install.
- The fix: request an unlock from your home carrier before traveling. In the US, major carriers are required by FCC rules to unlock upon request once the device is paid off. In the EU, carriers must unlock phones free of charge after any lock-in period expires.

The fix for a carrier-locked phone is to request an unlock from your home carrier before traveling. In the United States, the major carriers are required by FCC rules to unlock phones upon request once the device is paid off and any contract obligations are met. In the EU, carriers must unlock phones free of charge after any lock-in period expires. In other markets, unlock policies vary. If an unlock is not possible before your trip, your only option is a portable Wi-Fi hotspot device or a physical German SIM purchased on arrival.

If your phone is unlocked and you still see dual SIM conflicts after configuring the data line, our [dual SIM guide](/blog/germany-esim-dual-sim-multi-device/) covers the complete configuration for iPhone and Android, including per-app data routing and hotspot sharing across multiple devices.

## Emergency Calls Only: Fixing Network Registration Errors

An "Emergency Calls Only" message means the phone is unable to register on any mobile network for normal service. It has found a network and can place an emergency call (112 in Germany and across the EU), but the network has rejected the phone's request for full registration. This is different from "No Service," which means the phone has not found any network at all.

### Understanding Why Emergency Calls Only Appears

**Why eSIMs show "Emergency Calls Only" in Germany.**

The most common reason is that the eSIM profile's IMSI has been rejected by all available German networks. This happens when:

- The provider's roaming agreement with German carriers has a technical fault.
- The eSIM has not been activated on the provider's side.
- The phone's SIM slot configuration causes a registration conflict.

For international eSIMs, the rejection usually means the provider's home network (wherever it is based) cannot confirm to the German network that your IMSI is authorized for roaming. This can be a temporary glitch -- the provider's authentication servers may be unreachable from Germany for a few minutes -- or a provisioning error where your eSIM was never fully activated.

For German domestic eSIMs from Telekom, Vodafone, or O2, "Emergency Calls Only" during the activation window is normal and indicates that the passport verification process has not yet completed. The phone has the eSIM profile installed, the German network recognizes the IMSI, but the verification system has not released the subscriber for full service. Wait for the verification confirmation email and restart the phone.

### How to Fix Network Registration Errors

**Fix: refresh network registration.**

The quickest fix for an "Emergency Calls Only" state is to force the phone to reattempt network registration. Turn on airplane mode for thirty seconds, then turn it off. If the phone remains in emergency-only mode after the reconnection, try manual network selection as described in the No Service section above. Select each of the three German networks one at a time. If a network accepts the IMSI, the phone will switch to normal service.

**Fix: remove and reinstall the eSIM.**

If manual network selection does not resolve the emergency-only state, delete the eSIM profile and reinstall it. The reinstallation triggers a fresh activation request to the provider's servers, which often clears whatever registration flag was blocking the connection. As noted earlier, ensure you still have access to the original QR code or activation information before deleting.

**Carrier lock verification.**

An "Emergency Calls Only" message on multiple networks is a strong indicator that the phone is carrier-locked. A locked phone can place emergency calls on any network (this is required by law in virtually all jurisdictions) but rejects normal service on any network that is not authorized by the locking carrier. If your phone is locked and you did not realize it, this is the symptom you will see. Check with your home carrier for unlock eligibility before your trip.

## Passport Registration Failures: What to Do When Verification Fails

Germany's TKG law requires that all SIM activations by German-licensed carriers include identity verification. For international visitors, this means the passport verification step is mandatory when buying a domestic German eSIM from Telekom, Vodafone, O2, or their MVNO partners. About one in twelve verification attempts fails on the first try, based on data reported in German technology forums, usually for reasons that are straightforward to correct.

### Common Reasons for Verification Failure

**Why passport verification fails.**

The most common failure reasons are:

1. **Blurry or poorly lit photo** of the passport data page. Video-Ident agents need to read the machine-readable zone (MRZ) at the bottom of the page. If the photo is blurry, shadowed, or taken at an angle, the agent cannot read these characters.

2. **Name mismatch** between the eSIM order and the passport. If you ordered with a shortened name (e.g., "Mike" instead of "Michael") or omitted a middle name, the agent may flag it as inconsistent. The name used on the order must match the passport exactly.

3. **Expired or soon-to-expire passport**. German carriers generally follow a six-month passport validity rule for non-EU nationals. If your passport expires within six months, the verification may be rejected.

### How to Retry a Failed Verification

**How to retry a failed verification.**

If your Telekom, Vodafone, or O2 verification failed, the carrier will typically send an email with instructions for retrying. Do not simply upload the same photo again -- address the specific issue first:

**For photo quality:**
- Use a well-lit room with ambient daylight if possible.
- Place the passport on a flat surface and hold the camera directly above it.
- Ensure no fingers or objects cast shadows on the data page.
- The full page must be visible, including the MRZ at the bottom.

**For name matching:**
- If the order name does not match the passport, cancel the existing order and place a new one with the exact name as printed on your passport.
- Carriers cannot edit order names after submission because the verification audit trail must match TKG compliance records.

**For expired passports:**
- If your passport has less than six months validity, some carriers accept a national ID card from EU countries.
- For non-EU travelers, the only option is to purchase an international eSIM that does not require passport verification.

### Bypassing Registration with an International eSIM

**International eSIMs bypass the passport problem entirely.** International eSIM providers operate outside the TKG's verification requirements because their licensed jurisdiction is outside Germany:

- No passport upload, no Video-Ident session, and no verification delay.
- The eSIM works from the moment the QR code is scanned.
- For travelers who find the German passport registration process burdensome or who have had verification failures, an international eSIM is the practical alternative.
- Note: international data-only eSIMs do not include a German number -- pair them with VoIP services like Skype or Sipgate for outbound calling if needed.

If you need a German phone number for local calls and reservations, note that international data-only eSIMs do not include a German number. You can pair them with VoIP services like Skype or Sipgate for outbound calling. If you specifically need a German mobile number, our [passport registration guide](/blog/germany-esim-passport-registration-requirements/) explains the full legal framework and lists which providers accept which document types.

Skipping the domestic registration process in favor of an international eSIM is a practical choice for many travelers. The savings in time and frustration are substantial, particularly if you are arriving late at night or over a weekend when Video-Ident agents may have limited availability.

## When to Contact Support: Provider Contact Information

Most eSIM issues can be resolved with the steps in this guide, but some problems require provider intervention. Knowing when to escalate and having the right information ready can reduce resolution time from hours to minutes.

### When to Escalate to Support

**When to contact support.**

You should contact your eSIM provider's support team in these situations:

1. The eSIM profile cannot be installed after three attempts with a fresh QR code or activation code. If three separate installation attempts fail, the issue is likely on the provider's side and requires a new eSIM profile to be generated.

2. You have completed all troubleshooting steps in this guide -- roaming enabled, correct data line selected, APN configured, manual network selection tried on all three German networks -- and still have no service. This indicates a persistent provisioning or roaming agreement issue that only the provider can resolve.

3. The eSIM profile was working and suddenly stopped working without any settings changes. This can indicate a carrier-side suspension or a technical fault with the provider's authentication servers.

4. Your passport verification failed twice and you need assistance identifying the cause or requesting an exception.

### What Information to Have Ready

**What information to have ready.**

When you contact support, provide these details in your first message to avoid back-and-forth:

1. **Your order number or purchase receipt** -- include the email confirmation or transaction ID.
2. **The exact phone model and OS version** -- for iPhone: **Settings > General > About > Software Version**. For Android: **Settings > About Phone > Software Information**.
3. **The exact error message displayed** -- screenshots help significantly. Include the full screen, not just the error pop-up, so support can see the signal indicator, network name, and mobile data icon status.
4. **Which troubleshooting steps you have already tried** -- list each one briefly so support does not ask you to repeat them.
5. **Whether the eSIM has ever worked on this trip** -- if it worked and then stopped, that is a different diagnostic path from one that never worked at all.

### Provider Contact Information

**Provider contact information for Germany eSIM.**

**Roami**: 24/7 real human support via live chat and the mobile app. Response time is typically under two minutes during daylight hours across all time zones. Roami also maintains a help center with setup guides for each country and offers a [germany esim](/germany-esim/) plan with automatic multi-network switching.

**Deutsche Telekom**: Customer service for eSIM issues can be reached at 0800 330 1000 (toll-free within Germany) or +49 561 100 1000 from abroad. Telekom's English-language support is available during business hours. For technical eSIM issues, Telekom recommends using the "Mein Telekom" app's in-app chat, which logs session details automatically and reduces the need for back-and-forth information gathering.

**Vodafone Germany**: Customer service at 0800 172 1212 (toll-free within Germany) or +49 172 121 1212 from abroad. Vodafone offers English support during extended business hours and has a dedicated eSIM team reachable through the "Mein Vodafone" app.

**O2 Germany (Telefonica)**: Customer service at 0172 172 4172 (within Germany) or +49 172 172 4172 from abroad. O2's English-language support availability is more limited than Telekom or Vodafone, and non-German speakers may find faster resolution through the O2 community forums.

**Bundesnetzagentur**: If you have a complaint about a German carrier's eSIM practices that cannot be resolved through customer service, you can file a formal complaint with Germany's Federal Network Agency at [bundesnetzagentur.de](https://www.bundesnetzagentur.de). The agency handles consumer complaints about telecommunications services and can mediate disputes between subscribers and carriers.

**GSMA eSIM standards**: For understanding the technical standards behind eSIM profiles, the GSMA provides documentation at [gsma.com/esim](https://www.gsma.com/esim). This is more useful for understanding how eSIMs work than for resolving specific activation problems, but it can help when dealing with provider support representatives who may not be fully familiar with eSIM technical details.

| Provider | Support Channels | English Support | Average Response Time | Best Way to Contact |
|----------|-----------------|----------------|----------------------|-------------------|
| Roami | Live chat, app, help center | Yes (24/7) | Under 2 minutes | In-app live chat |
| Deutsche Telekom | Phone, in-app chat, in-store | Business hours only | 5-15 minutes (phone) | "Mein Telekom" app chat |
| Vodafone Germany | Phone, in-app chat, in-store | Extended business hours | 5-10 minutes (phone) | "Mein Vodafone" app |
| O2 Germany | Phone, community forums | Limited English | 10-20 minutes (phone) | Phone (German recommended) |
| Airalo | Live chat, email | Yes (24/7) | 5-10 minutes (chat) | In-app chat |
| Holafly | Live chat | Yes (24/7) | 2-5 minutes (chat) | Website live chat |
| Ubigi | Email, ticket system | Yes | 4-24 hours (email) | Web ticket |

---

Troubleshooting a Germany eSIM does not require technical expertise. The problems that travelers experience are almost always limited to a handful of known failure modes -- roaming disabled, wrong data line selected, missing APN, network congestion, or passport verification delays -- each of which has a documented fix. The approach that saves the most time is systematic: confirm the basics (roaming on, correct data line, APN set), then escalate to network selection, then to profile reinstallation, and finally to provider support.

If you are planning a trip to Germany and want to avoid these issues entirely, services like Roami offer a simpler approach. Roami's international eSIM requires no passport verification, activates in seconds, and automatically switches between Telekom, Vodafone, and O2 networks to maintain the best available signal. You can try the service free on a UK eSIM at [/free-esim/](/free-esim/) before your Germany trip to confirm compatibility with your device. Use code **web20** for 20 percent off your first order.

For more Germany travel planning resources, start with the complete [Germany eSIM travel guide](/blog/germany-esim-complete-travel-guide/), which covers network selection, coverage expectations, and plan recommendations. Our [installation and activation guide](/blog/germany-esim-installation-activation-setup/) walks through the full setup process for iPhone and Android, and the [dual SIM guide](/blog/germany-esim-dual-sim-multi-device/) explains how to keep your home number active alongside your Germany eSIM. Between these resources and this troubleshooting guide, you have everything needed to arrive in Germany with working connectivity from the moment you step off the plane.