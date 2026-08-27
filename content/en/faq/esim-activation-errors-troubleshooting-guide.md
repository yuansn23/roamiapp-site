---
title: "eSIM Not Working? Fix Compatibility Errors in 2026"
h1_title: "How to Fix eSIM Not Working: Compatibility Errors in 2026"
description: "Stuck with eSIM errors? Learn how to fix activation failures, transfer issues, and boot loops on iPhone & Android. Diagnose your phone in 2 minutes."
image: "/img/esim/esim-troubleshooting-guide.jpg"
keywords: ["esim not working", "esim not supported", "esim not compatible iphone", "unable to activate esim", "esim network not available", "esim not transferring to new iphone", "accidentally deleted esim", "esim profile expired", "esim qr code invalid", "how to fix esim on iphone", "esim transfer error", "esim no service"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-26T00:00:00Z
tags: ["eSIM", "Troubleshooting", "Activation Errors", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

ui_text:
  updated_on: "Updated on"
  min_read: "min read"
  toc: "Table of Contents"

breadcrumbs:
  home:
    text: "Home"
    url: "/"
  parent:
    text: "Help Center"
    url: "/faq/"

# Sidebar: Popular eSIMs
sidebar_popular:
  title: "Popular eSIMs"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Germany eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkey eSIM"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japan eSIM"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "China eSIM"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

sidebar_free:
  title: "Claim Free eSIM"
  icon: "🎁"
  item_suffix: "Free eSIM"
  item_subtitle: "Free eSIM"
  items:
    - name: "UK eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Germany"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thailand"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

sidebar_questions:
  title: "Popular Questions"
  items:
    - question: "What is eSIM activation and how does it work?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "How to activate an eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "How to activate eSIM on iPhone (All Models)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Latest eSIM Compatibility List"
      url: "/compatibility/"
---


> **Editor's Note:** Roami fields thousands of "my eSIM won't work" tickets every month, and a large share turn out to be a phone problem, not a plan problem. This guide answers the question you should ask before anything else: *is my phone even capable of using an eSIM?* We'll walk you through the 2-minute hardware check, China/Hong Kong model exceptions, and carrier locks — so you don't waste an hour on activation steps that can never work on your device.

> **Looking for an error-code fix?** If your phone passes the hardware check below but you're staring at a specific message ("Activation failed", "No Service", "QR invalid", restore error 4013/4014), that's a different problem. Jump to our [eSIM Deep Troubleshooting Guide](/faq/esim-deep-troubleshooting-guide-2026/) for the error-by-error reference.

## Start Here: The 2-Minute "Is My Phone Even Capable?" Check

Before you open Settings, scan a single QR code, or contact support, confirm that your phone actually has the embedded-SIM hardware required. This one check rules out roughly half of all "eSIM not working" cases instantly.

### The Universal EID Check (Works on Every Phone)

Open your phone's dialer and type:

> **`*#06#`**

- If a screen appears with a **32-digit EID** (eUICC Identifier), your phone has the embedded chip needed for digital SIM activation. ✅
- If the screen only shows **IMEI** numbers and no EID, the hardware isn't there. ❌

**What to do if no EID appears:** Stop here. No software update, hack, or "force" method can add the missing chip — it's a physical hardware absence. Use a physical SIM instead, or check Fix #4 for phones that *look* like they should support eSIM but don't.

### EID vs IMEI vs ICCID – What Each Number Means

| Identifier | What It Is | What It Tells You |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 digits) | Identifies your phone model — every phone has one |
| **EID** | eUICC Identifier (32 digits) | Confirms the embedded-SIM chip is present — only eSIM-capable phones have one |
| **ICCID** | Integrated Circuit Card Identifier (19–20 digits) | Identifies a specific eSIM profile after it's installed |

> **Key insight:** EID = hardware present. If you see an EID, your phone is physically capable of eSIM. If you don't, nothing you install will change that.

### Where to Find Each Number (Fast Paths)

All three numbers live in plain sight once you know the menu. Here's the shortest route to each:

| Identifier | Fastest Way | Backup Location |
| :--- | :--- | :--- |
| **IMEI (15 digits)** | Dial `*#06#` — it's the first number shown | iPhone: **Settings > General > About**. Android: **Settings > About phone** |
| **EID (32 digits)** | Dial `*#06#` and scroll — it's the long one starting with **8904** | iPhone: **Settings > General > About > EID**. Samsung: **Settings > About phone > Status** |
| **ICCID (19–20 digits)** | Only appears after a profile installs | iPhone: **Settings > General > About**. Android: **Settings > About phone > SIM card status** |

> **Handy fact:** every EID begins with **"8904"** — that prefix marks it as an eUICC identifier. If the long number on screen starts with anything else, you're reading the wrong value.

### The "Add eSIM" Button Test (iPhone)

If `*#06#` shows an EID but you still see "eSIM not supported", open **Settings > Cellular** and look for **"Add eSIM"** or **"Add Cellular Plan"**. If the option is there but fails when you scan, you're most likely dealing with a **carrier lock** or a **region restriction** — both covered below.

### The Settings Search Method (iPhone & Android)

No dialer handy (some tablets and foldables bury it), or `*#06#` gave you a confusing screen? Your phone's own search bar is the second-fastest check.

- **iPhone:** Open **Settings**, swipe down from the top of the list to reveal the search box, and type **"eSIM"**. A result of **"Add eSIM"** or **"Add Cellular Plan"** means the feature is live.
- **Samsung:** Open **Settings**, tap the **magnifying-glass icon** at the top, and type **"eSIM"**. If **"SIM Card Manager"** (or "Add mobile plan") surfaces, your variant has the chip.
- **Pixel:** Open **Settings > Network & internet > SIMs**. If you see **"Download a SIM instead?"**, you're good. A screen that only lists your physical SIM — with no download option — means no eUICC chip.

> **No search result = no hardware.** If a phone sold after roughly 2018 returns nothing for "eSIM" in Settings search, you're almost certainly holding a region or budget variant that shipped without the chip.

### The Model-Number Lookup (Fastest Confirmation)

Buying used, or checking a phone you can't power on? The model number settles it in seconds.

- **iPhone:** **Settings > General > About > Model Number**, then tap the number to flip it to the **A-prefixed identifier** (e.g., **A2111**). The letters before **/A** in the part number encode the sales region — the full suffix map is in Section 2.
- **Samsung:** **Settings > About phone > Model number** (e.g., **SM-S921U1**). The last character is the giveaway: **U** = US carrier, **U1** = US unlocked, **B** = Europe/global, **0** = China/Hong Kong (Snapdragon).
- **Pixel:** **Settings > About phone > Model**. Pixel model strings differ by region and carrier — Japan and some US carrier variants restrict eSIM, so cross-check the specific code or dial `*#06#`.

> **Rule of thumb:** if the model number ends in a China/region suffix (or a US-carrier suffix on a Samsung), verify with `*#06#` before assuming eSIM works. Model number plus EID together give you a 100% answer.

### Why a Phone Can Show EID But Still Refuse eSIM

| Scenario | EID Present? | eSIM Works? | Why? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR and newer (global) | ✅ Yes | ✅ Yes | Full support for digital SIM profiles |
| iPhone XS/XR (China model) | ❌ No | ❌ No | Hardware removed for dual physical SIM |
| Samsung S20 FE (US carrier) | ✅ Yes | ❌ No | Carrier disabled the feature in software |
| Google Pixel 4a (Japan) | ✅ Yes | ❌ No | Carrier locked out the functionality |
| Carrier-locked iPhone (AT&T/T-Mobile) | ✅ Yes | ❌ No (for other carriers) | Network lock blocks other providers' profiles |
| Unlocked iPhone (any region) | ✅ Yes | ✅ Yes | Full support |


## 1. "eSIM Not Supported" / "Not Compatible" on iPhone

If you see **"eSIM not supported"**, **"this eSIM is not compatible with this iPhone"**, or simply **"eSIM not compatible iPhone"**, the cause is almost always one of five things — and every one is about your *device*, not the plan.

### A. Your iPhone Model Predates eSIM Hardware

Only iPhones from the **XR, XS, XS Max (2018) and newer** have the embedded chip. The iPhone 8, 8 Plus, and iPhone X do not, so they return **"eSIM not supported"** no matter what you try. The eUICC chip simply isn't present on those boards — this is a hardware limitation, not a settings issue.

**Quick check:** Dial `*#06#`. A 32-digit EID means you're good; only IMEI means you're not.

**What to do:** Use a physical SIM, or upgrade to an iPhone XR or newer. The official list is on [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/118670).

### B. Your iPhone Is a Mainland-China Model

iPhones sold in mainland China ship with **two physical SIM slots and no eSIM hardware**. Chinese regulations push domestic smartphones toward dual physical SIM, so Apple removed the embedded chip on these units. Even if the "Add Cellular Plan" option appears, it won't complete — this is the single most common reason for "eSIM not compatible with this iPhone" among buyers who picked up their device in China or through certain resellers.

**How to identify:** **Settings > General > About > Model Number**. If it ends in **"CH/A"**, it's a mainland-China model. (Full suffix table in Section 2 below.)

**What to do:** There's no way to enable eSIM on a CH/A device. Use a physical travel SIM, or sell the phone and buy a global version.

### C. Your iPhone Is Carrier-Locked

Some carriers — especially US ones — lock iPhones to their own network. Trying to activate a profile from a different provider (like a travel eSIM) then returns "eSIM not supported" or a "carrier does not support" message. Note that some carriers lock only the physical SIM slot while leaving the eSIM slot open, but many lock both.

**How to check:** **Settings > General > About > Carrier Lock**. It should read **"No SIM restrictions"**. If it says "SIM locked", you need an unlock. See Section 3 for the full carrier-lock walkthrough.

### D. Outdated iOS Version

Digital SIM support improved a lot in iOS 16 and later. On iOS 12 or 13, some modern carrier profiles simply won't install.

**How to check:** **Settings > General > Software Update**.

**What to do:** Update to the latest iOS, delete any half-installed profile, then rescan the QR code.

### E. "This iPhone Does Not Support eSIM" – On an iPhone 14?

An iPhone 14 (US version) should always support eSIM — the US model has no physical SIM tray at all. If it returns this error anyway, you're looking at a rare **eUICC hardware failure**. Contact Apple Support for a hardware diagnostic rather than chasing settings.

For the full model-by-model iPhone list, see our [iPhone eSIM compatibility guide](/faq/iphone-11-esim-compatible/). For Samsung, see the [Samsung Galaxy eSIM guide](/faq/samsung-s20-esim-compatible/), and for Pixel the [Google Pixel eSIM guide](/faq/google-pixel-6-esim-compatible/).


## "eSIM Not Supported" – Hardware vs Software vs Carrier

Every "eSIM not supported" case — on any phone, any carrier — lands in one of three buckets. Naming the bucket tells you instantly whether the problem is fixable.

| Bucket | What It Looks Like | Fixable? | Your Move |
| :--- | :--- | :--- | :--- |
| **Hardware** | No EID on `*#06#`; pre-2018 iPhone; China model (CH/A); budget Android with no eUICC | ❌ No | Physical SIM, or upgrade the phone |
| **Software** | EID present, but the feature is hidden or the OS is old (carrier-disabled Samsung S20 FE, outdated iOS) | ✅ Usually | Update the OS, or remove the carrier restriction |
| **Carrier** | EID present, menu visible, but activation of another provider's plan fails | ✅ Yes | Unlock the device (Section 3), then rescan |

**The 30-second routing test:** dial `*#06#`.
- **No EID** → hardware. Stop here — nothing you install will change it.
- **EID present, but the "Add eSIM" flow fails** → software or carrier. Both are fixable, so keep reading.

That single result routes you to the correct fix for about 9 out of 10 "not supported" reports we see at Roami.


## 2. The China / Hong Kong / Macau Model Guide

Where your phone was sold determines what hardware it has. This is the fastest way to rule in or out a regional no-eSIM situation.

### China Model Quick Reference (by Model Number Suffix)

| Model Number Ending | Region | eSIM Support |
| :--- | :--- | :--- |
| **CH/A** | Mainland China | ❌ No (dual physical SIM) |
| **HK/A** | Hong Kong | ⚠️ Varies (some models support physical + digital SIM) |
| **LL/A** | USA | ✅ Yes |
| **ZA/A** | Canada | ✅ Yes |
| **J/A** | Japan | ✅ Yes (except some carrier models) |
| **B/A** | UK/Europe | ✅ Yes |
| **X/A** | Australia/New Zealand | ✅ Yes |

### Mainland China

- **All iPhones sold in mainland China** (except the iPhone 16 series) have dual physical SIM and no eSIM.
- **Chinese Android phones** — Xiaomi, Oppo, Vivo, Huawei — sold domestically also typically lack the eSIM chip.
- **If you carry an international phone into China:** it will work with international travel eSIMs, but local Chinese carriers do not offer eSIM to tourists, so you'll still need a travel plan from a provider like Roami.

### Hong Kong

- **iPhone models:** Hong Kong iPhones usually support **eSIM + physical SIM** (one of each) or dual physical SIM depending on the exact model. Check your model suffix.
- **Carriers:** some Hong Kong carriers (CMHK, 1010, SmarTone) offer eSIM to postpaid customers, but prepaid eSIM is rare.
- **Travelers:** an international travel eSIM is simpler and more reliable than trying to obtain a local Hong Kong eSIM.

### Macau

- **Similar to Hong Kong:** most Macau iPhones are imported from Hong Kong and support eSIM + physical SIM.
- **CTM** (Macau's main carrier) offers eSIM to postpaid customers but not to tourists.

### Why Chinese Models Drop eSIM (The "Why" Behind the CH/A Rule)

It isn't a cost-cutting move by Apple or the Android brands — it's regulation. Mainland China requires phones sold there to be certified for dual physical SIM, and a rewritable eSIM profile doesn't fit that domestic framework. The practical result:

- **Apple** ships mainland-China iPhones with **two physical nano-SIM slots** and no eUICC chip.
- **Xiaomi, Oppo, Vivo, Honor, and Huawei** strip eSIM from their domestic China builds even when the global version of the same phone has it.
- **A China phone taken abroad still can't get eSIM back** — it's a hardware absence, not a software block. The reverse is also true: an international phone entering China works with travel eSIMs, but the big three Chinese carriers (China Mobile, China Unicom, China Telecom) don't sell eSIM to tourists.

**The fix:** if you bought the phone in mainland China, plan on a physical travel SIM — or buy a global-model phone. There is no unlock, jailbreak, or app that adds the missing chip.

### Identifying Your Model by A-Number (Examples)

The part-number suffix (CH/A, LL/A, and so on) is the quick filter, but the **A-number** is the precise ID. Take the iPhone 11 as the pattern every generation follows:

| iPhone 11 Model | Region | eSIM? |
| :--- | :--- | :--- |
| **A2111** | United States | ✅ Yes |
| **A2221** | Mainland China | ❌ No (dual physical SIM) |
| **A2223** | Hong Kong / Macau | ✅ Yes (eSIM + physical) |

**How to use it:** find your A-number (**Settings > General > About > Model Number**, then tap the number to reveal the A-prefixed code), and match it against Apple's model list. If a seller advertised an "unlocked global eSIM iPhone" but the A-number is a China code, the listing was wrong — walk away or plan on a physical SIM.


## 3. Carrier Lock – What It Is and How to Remove It

A carrier lock is the second most common reason a perfectly capable phone refuses an eSIM. It's a software restriction your carrier places on the device, not a hardware limit.

### What a Carrier Lock Does

When a phone is "SIM locked", it will only accept SIMs and eSIM profiles from the carrier that sold it. Trying to add a travel eSIM from another provider triggers "eSIM not supported" or "SIM not supported". The embedded chip is present and working — the carrier is just blocking access to it.

### How to Check Your Lock Status

1. On iPhone: **Settings > General > About > Carrier Lock**. It should say **"No SIM restrictions"**.
2. On Android (Samsung): **Settings > About phone > Status** and look for the SIM lock field.
3. On Android (Pixel): **Settings > About phone > SIM status**.

### US Carrier Unlock Policies

| Carrier | Unlock Requirement |
| :--- | :--- |
| **AT&T** | Device fully paid off and active for 60 days before unlocking |
| **T-Mobile** | Device paid off and active for 40 days; request via the T-Mobile app |
| **Verizon** | Most phones auto-unlock 60 days after purchase |

### How to Unlock Your Device

1. **Request the unlock from your carrier** — it's usually free once the phone is paid off, and most US carriers let you request it from the app or a web form.
2. **Wait for confirmation** — the carrier pushes the unlock; you may need to restart the phone.
3. **Verify** — re-check the Carrier Lock field until it reads "No SIM restrictions".
4. **Then activate** — once unlocked, rescan your travel eSIM QR code.

> **Note:** a carrier lock is a phone-level restriction, not a plan-level one. Unlocking your device does not cancel your contract — it just frees the device to use other providers' SIMs and eSIMs.

### More US Carriers & Prepaid (MVNO) Unlock Policies

The big three aren't the only ones people run into. Prepaid and MVNO phones are often locked longer, and that can be the sneaky reason a "great deal" travel eSIM won't install.

| Carrier | Unlock Requirement |
| :--- | :--- |
| **Cricket Wireless** | 6 months of paid service (unless bought at full retail price) |
| **Metro by T-Mobile** | 180 days of paid service |
| **Boost Mobile** | 12 months of paid service |
| **Spectrum Mobile** | 60 days |
| **Xfinity Mobile** | 60 days of active service |
| **US Cellular** | 120 days |
| **Visible (Verizon prepaid)** | 60 days of paid service |

### What You Need to Request an Unlock

Unlocks are free once you're eligible, but the request needs a few things ready:

1. **Your IMEI** — dial `*#06#` and grab the 15-digit number (not the EID).
2. **Your account number and account PIN/passcode** — find these in your carrier app or on a recent bill.
3. **The phone fully paid off** — carriers won't unlock a device with an open installment balance.
4. **Eligibility met** — each carrier has a minimum active-days window (see the tables above).

**Where to request:** AT&T and T-Mobile have online unlock portals and in-app forms; Verizon auto-unlocks most phones after 60 days with no request needed. For MVNOs (Cricket, Metro, Boost), use their app or call support directly.

**On third-party "instant unlock" services:** they're a gamble. Many use leaked carrier tools that get the phone re-locked, and some are outright scams. If your carrier says you're not eligible yet, wait it out — don't pay a stranger $20 to do it "for" you.


## The Three Different "Locks" (and Why They Matter)

People say "my phone is locked" and mean three completely different things. Each one needs a different fix, so it's worth separating them.

| Lock Type | What It Is | Where You See It | Fix |
| :--- | :--- | :--- | :--- |
| **Phone lock (activation lock)** | Anti-theft: iCloud Activation Lock (iPhone) or Google FRP (Android), tied to the previous owner's account | "Activation Lock" / "This iPhone was linked to an Apple ID" at setup, or a Google account prompt on Android | Only the original owner can remove it — never buy a phone that still shows it |
| **Region lock** | A hardware difference from where the phone was sold (China models lack the eUICC chip) | No EID on `*#06#`; model number ends in CH/A | Can't be removed — use a physical SIM or a different phone |
| **Carrier lock** | A software restriction from your carrier limiting the phone to their network | **Settings > General > About > Carrier Lock** shows "SIM locked" | Request an unlock from the carrier (Section 3) |

**The quick disambiguation:**
- Seeing an **Apple ID or Google account prompt** = phone/activation lock (an owner problem).
- **No EID at all** = region lock (a hardware problem).
- **EID present + "SIM locked"** = carrier lock (fixable, free once eligible).

Most "eSIM not working" complaints that survive the 2-minute check are the carrier-lock kind — and that one is almost always solvable.


## 4. "My Phone Doesn't Support eSIM" – But It Should

Some devices are advertised with eSIM, yet specific regional or carrier variants silently drop the feature. These are the usual culprits:

- **Samsung Galaxy S20 FE** – US carrier-locked versions have the feature disabled in software to cut costs, even though the global model supports it.
- **Google Pixel 4a (Japan versions)** – Docomo and SoftBank disable eSIM on their units due to local carrier agreements.
- **Xiaomi Redmi Note series** – none have the eUICC chip, despite online rumors. Xiaomi reserves eSIM for its flagships.
- **iPhone 8 / 8 Plus / X** – pre-eUICC hardware; Apple only added the chip starting with the XS/XR generation.
- **Samsung Galaxy A series** – only select models (A54, A53) have the chip; most A-series do not.

### "Looks Like It Should Support eSIM But Actually Doesn't" – Full List

| Phone Model | eSIM Support | Why? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ No | Pre-eUICC hardware |
| **iPhone XS/XR (China)** | ❌ No | Dual physical SIM hardware |
| **Samsung Galaxy S20 FE (US carrier)** | ❌ No | Carrier-disabled |
| **Samsung Galaxy A13 / A23** | ❌ No | Entry-level model, no eUICC |
| **Google Pixel 4a (Japan)** | ❌ No | Carrier-disabled (Docomo/SoftBank) |
| **Google Pixel 3 (some models)** | ⚠️ Varies | Check region; some have it, some don't |
| **Xiaomi Redmi Note series** | ❌ No | No eUICC hardware |
| **Xiaomi 12/13 (China)** | ❌ No | China domestic versions lack the hardware |
| **OnePlus Nord (China version)** | ❌ No | China region lacks the hardware |
| **Huawei (all China domestic)** | ❌ No | No Google services, no eSIM hardware |
| **Motorola G series (most)** | ❌ No | Budget models lack eUICC |

**What to do:** Before buying any phone, dial `*#06#` on it (if you have it in hand) to confirm the EID, or run the IMEI through an online eSIM compatibility checker. The **[full list of eSIM compatible phones (2026)](/compatibility/)** is your best resource for verifying any model.


## 5. Android Hardware Compatibility by Brand

If you're on Android, the biggest variable isn't the OS — it's whether *your specific variant* shipped with the chip. Here's the model-by-model picture.

### Samsung Galaxy

| Model | eSIM Support | Notes |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Yes | All global variants |
| **Galaxy S20 FE** | ❌ No (US carrier) / ✅ Yes (global) | Check model number |
| **Galaxy A54 / A53** | ✅ Yes | Selected A-series only |
| **Galaxy A13 / A23 / A33** | ❌ No | Budget models |
| **Galaxy Z Fold / Flip** | ✅ Yes | All models |
| **Galaxy Note 20** | ✅ Yes | All models |

**How to check on Samsung:** Dial `*#06#` and look for an EID, or open **Settings > Connections > SIM Card Manager** and look for "Add eSIM" / "Add mobile plan". If neither is present, your variant lacks the feature. For more, see our [Samsung eSIM compatibility guide](/faq/samsung-s20-esim-compatible/) and [Samsung Support](https://www.samsung.com/us/support/).

### Google Pixel

| Model | eSIM Support | Notes |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Yes | First Pixel with the feature |
| **Pixel 3a / 3a XL** | ✅ Yes | – |
| **Pixel 4 / 4 XL** | ✅ Yes | – |
| **Pixel 4a** | ⚠️ Varies | Japan carrier versions = NO |
| **Pixel 5 / 5a** | ✅ Yes | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Yes | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Yes | – |
| **Pixel 8 / 8 Pro** | ✅ Yes | – |

**How to check on Pixel:** Dial `*#06#` for the EID, or open **Settings > Network & Internet > SIMs** and look for "Download a SIM instead?". If it's missing, the variant is locked or lacks the chip. For more, see our [Pixel eSIM compatibility guide](/faq/google-pixel-6-esim-compatible/) and the [Google Support — eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887) page.

### OnePlus

OnePlus only added eSIM starting with the **OnePlus 12**. The OnePlus 11, 10, 9, and Nord series lack the hardware.

| Model | eSIM Support |
| :--- | :--- |
| **OnePlus 12** | ✅ Yes |
| **OnePlus 11** | ❌ No |
| **OnePlus 10** | ❌ No |
| **OnePlus 9** | ❌ No |
| **OnePlus Nord series** | ❌ No (except some EU variants) |

### Xiaomi, Huawei, Motorola, and Others

- **Xiaomi** – flagship models (Xiaomi 12/13 global versions) may support eSIM, but domestic China units do not. The Redmi Note line has no eUICC at all.
- **Huawei** – support is limited to a few models (P40, Mate 40, and newer); many post-2020 phones lack eSIM due to US sanctions. Check **Settings > Mobile Network > eSIM** — if the option is missing, it isn't supported.
- **Motorola** – most G-series budget models lack the chip; the Moto G Power and Edge line vary by region.

The universal test for every one of these is the same: dial `*#06#` and look for the EID.


## Android vs iPhone: The Capability Check, Side by Side

Same 2-minute check, two different menus. Hand this table to a friend on the other platform.

| Check | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Dial `*#06#` | Dial `*#06#` | Dial `*#06#` |
| **Add eSIM menu** | **Settings > Cellular > Add eSIM** | **Settings > Connections > SIM Card Manager > Add eSIM** | **Settings > Network & internet > SIMs > Download a SIM instead?** |
| **Model number** | **Settings > General > About > Model Number** | **Settings > About phone > Model number** | **Settings > About phone > Model** |
| **Lock status** | **Settings > General > About > Carrier Lock** | **Settings > About phone > Status** | **Settings > About phone > SIM status** |

**The one difference that matters:** on iPhone, eSIM support is all-or-nothing by generation and region — easy to predict. On Android, it's per-variant, so two "same" Galaxy or Pixel phones can behave differently. When in doubt on Android, trust the `*#06#` EID over the spec sheet.


## 6. Your Phone Is Capable — Now What? (Error-Code Fixes)

If your phone passed the hardware check above and you're still seeing a specific error message, the problem is no longer compatibility — it's an activation or network issue. Those have their own dedicated reference:

- **"Activation failed", "No Service", "QR invalid", "Cellular Plan Cannot Be Added", restore error 4013/4014, and every other on-screen error** → see the [eSIM Deep Troubleshooting Guide 2026](/faq/esim-deep-troubleshooting-guide-2026/), which maps each message to a fix.
- **APN settings and the full provider APN table** → the canonical APN reference also lives in the [eSIM Deep Troubleshooting Guide 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Step-by-step activation (QR / manual / carrier app)** → see [How to Activate an eSIM](/faq/how-to-activate-an-esim/).
- **Moving a profile to a new phone** → see [How to Transfer eSIM Between iPhone and Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **iPad and Apple Watch setup** → see the [iPad and Apple Watch eSIM guide](/faq/ipad-apple-watch-esim-support-guide/).


## Frequently Asked Questions

**Why does my iPhone XR say "eSIM not supported" even though it should work?**
If your model number ends in CH/A, it's a mainland-China unit with no eSIM chip. Otherwise, check carrier lock status — a locked XR will reject other providers' profiles.

**Can I force eSIM onto an iPhone 7?**
No. The iPhone 7 (and 6s, 8, and X) predate the eUICC chip entirely. No software hack can add hardware that isn't there.

**What's the difference between EID and IMEI?**
IMEI (15 digits) identifies your phone model — every phone has one. EID (32 digits) identifies the embedded-SIM chip — only eSIM-capable phones have one. If `*#06#` shows no EID, your phone can't use eSIM.

**What does "EID not found" mean when I dial `*#06#`?**
It means your phone lacks the eUICC hardware chip required for digital SIM profiles. It's a hardware limitation, not something a software update can fix.

**My phone doesn't support eSIM — can I still use a travel eSIM?**
No. You need the embedded chip, so a physical SIM is your only option. Many providers (including Roami) also sell physical SIM cards.

**How do I know if my Samsung Galaxy has eSIM?**
Dial `*#06#` — if an EID appears, it's supported. You can also check Settings > Connections > SIM Card Manager for an "Add eSIM" option. Some US carrier and A-series variants hide it.

**Does the OnePlus 11 support eSIM?**
No. OnePlus added eSIM starting with the OnePlus 12. The 11, 10, 9, and Nord series lack the hardware.

**How do I check if my iPhone is carrier-locked?**
Settings > General > About > Carrier Lock. "No SIM restrictions" means it's unlocked. Anything else means it's locked to that carrier.

**Which iPad models support eSIM?**
iPad Pro (3rd gen and newer), iPad Air (3rd gen and newer), iPad (10th gen and newer), and iPad mini (6th gen and newer) — cellular models only. Wi-Fi-only iPads have no eSIM hardware.

**Where can I find a list of eSIM-compatible phones?**
The [full list of eSIM compatible phones (2026)](/compatibility/) covers iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi, and more.

**What's the difference between a phone lock and a carrier lock?**
A phone (activation) lock is anti-theft — iCloud on iPhone, Google FRP on Android — and only the original owner can remove it. A carrier lock is a network restriction your carrier lifts for free once the phone is paid off and eligible.

**Why do Chinese phones have no eSIM?**
Mainland China requires domestic phones to be certified for dual physical SIM, so Apple and Android brands ship China units with two nano-SIM slots and no eUICC chip. It's hardware — it can't be enabled later.

**Can I add eSIM to a phone that doesn't have an EID?**
No. The eUICC chip is soldered onto the motherboard. There's no adapter, app, jailbreak, or software update that adds hardware that was never installed.

**Does a factory reset fix "eSIM not supported"?**
No. A reset doesn't change hardware or remove a carrier lock. It can, however, clear a corrupted half-installed profile, so it's worth trying for software glitches — after backing up.

**What's the EID used for when a provider asks for it?**
The EID lets your provider bind a specific eSIM profile to your phone's chip before you scan. It's how they know the plan is destined for your exact device — think of it as the eSIM's "address".

**How do I know if my phone is unlocked without inserting a SIM?**
iPhone: Settings > General > About > Carrier Lock — "No SIM restrictions" means unlocked. Android: Settings > About phone > Status (or SIM status) and look for "SIM locked" or "SIM not locked" wording.

👉 **Confirmed your phone is capable?** Grab an [eSIM for the USA](/united-states-esim/) or [eSIM for Japan](/japan-esim/) to get connected.


## Test Your Compatibility with a Free eSIM

The fastest way to confirm your phone can actually use eSIM is to install a **free trial eSIM**. It costs nothing, takes 2 minutes, and if it installs and connects, your hardware is good to go.

👉 [**Get your free Roami eSIM now**](/free-esim/)

---

*If your specific device or error isn't covered here, contact us and we'll help you confirm whether your phone is eSIM-capable.*
## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
