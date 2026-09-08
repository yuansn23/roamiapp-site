---
title: "How to Transfer eSIM Between iPhone and Android"
h1_title: "How to Transfer an eSIM Between iPhone and Android"
description: "Move your eSIM between iPhone and Android with a carrier app or re-issued QR code. Step-by-step for both directions, plus fixes for common transfer errors."
image: "/img/esim/esim-travel.jpg"
keywords: ["eSIM cross-platform transfer", "eSIM transfer error", "iOS 18 eSIM", "eSIM carrier lock", "eSIM confirmation code", "eSIM no service", "eSIM APN settings", "eSIM troubleshooting", "eSIM activation failed", "transfer eSIM between iPhone and Android", "can't transfer eSIM to new iPhone", "Orange eSIM transfer"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-23T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
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

# Sidebar: Free eSIM offers
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

# Sidebar: Popular questions
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


> **Editor's Note:** Roami is the brand behind this guide. All carrier transfer information is based on official carrier documentation and our team's device testing in 2026. Cross-platform eSIM transfer is still rolling out globally – we focus on methods that actually work today.

## eSIM Transfer – 10‑Second Quick Answer

**Find your scenario below and jump straight to the right method.**

| Your Scenario | Can You Transfer? | Best Method | Where to Go |
| :--- | :--- | :--- | :--- |
| **iPhone → new iPhone** | ✅ Yes (always) | Apple Quick Transfer | [Intra-Platform Transfer](#transfer-esim-to-new-iphone-or-samsung--intra-platform-esim-transfers) |
| **Samsung → new Samsung** | ✅ Yes (usually) | Samsung Smart Switch | [Intra-Platform Transfer](#transfer-esim-to-new-iphone-or-samsung--intra-platform-esim-transfers) |
| **Android → iPhone (carrier supports app transfer)** | ✅ Yes | Carrier App | [Method A](#method-a-esim-transfer-from-android-to-iphone-carrier-app) |
| **Android → iPhone (carrier doesn't support app)** | ✅ Yes | QR Code Fallback | [Method B](#method-b-esim-transfer-from-iphone-to-android-carrier-qr-code) |
| **iPhone → Android (carrier supports)** | ✅ Yes | Carrier App or QR Code | [Method B](#method-b-esim-transfer-from-iphone-to-android-carrier-qr-code) |
| **Travel eSIM (Roami, Airalo, Holafly)** | ❌ No | Buy a new plan on the new device | [Why travel eSIMs can't transfer](#why-cant-travel-esims-be-transferred) |
| **Carrier doesn't support transfer** | ✅ Yes (fallback) | Contact carrier for QR code | [Fallback Methods](#fallback-methods-when-cross-platform-esim-transfer-isnt-supported) |

> **Key rule:** There is **no built-in iOS-to-Android eSIM transfer button** like there is for iPhone-to-iPhone. Cross-platform transfer always goes **through your carrier** – either via their app or by requesting a new QR code. Travel eSIMs are **single-device only** – buy a new one on your new phone.

**Can't transfer?** Most travel eSIMs (Roami, Airalo, Holafly) are **single-device only** – you'll need to buy a new plan on your new phone. For local carrier eSIMs, the QR code fallback always works.

> **Key limitation:** There is **no built-in iOS-to-Android eSIM transfer** – you must go through your carrier. This guide walks you through every supported method.

For a complete walkthrough of basic eSIM setup, see our **[iPhone 16 eSIM Complete Guide](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. For advanced issues not covered here, our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)** has more solutions.


## Quick Decision Flow – Which eSIM Transfer Method Should You Use?

| Your Situation | Best Method | Time | Carrier Needed? |
| :--- | :--- | :--- | :--- |
| **Switching iPhone ↔ iPhone** | Apple Quick Transfer (Settings > Cellular > Add eSIM > Transfer) | 2 min | No (Apple handles it) |
| **Switching Android ↔ Android (Samsung to Samsung, etc.)** | Brand-specific transfer (Samsung: SIM Manager > Add eSIM > Transfer) | 2 min | No (brand handles it) |
| **Switching iPhone ↔ Android (iOS 18 / Android 16+)** | Carrier app transfer | 3-5 min | Yes |
| **Switching iPhone ↔ Android (older OS)** | Carrier re-issued QR code | 5-10 min | Yes |
| **Travel eSIM (Roami, Airalo, Holafly)** | ❌ Cannot transfer – buy a new plan on the new device | N/A | No – provider doesn't allow |
| **Your carrier doesn't support transfer** | QR code fallback (call carrier) | 10-20 min | Yes |


## Complete eSIM Transfer Journey – From "I'm Switching Phones" to "It Works"

Here's the step-by-step journey map for anyone moving an eSIM to a new device.

| Step | What You're Thinking | What to Do | Where to Find It |
| :--- | :--- | :--- | :--- |
| **1. Determine your scenario** | "What kind of switch am I making?" | Identify: same ecosystem (iOS→iOS / Android→Android) or cross-platform (iOS↔Android)? | [Quick Decision Flow above](#quick-decision-flow--which-esim-transfer-method-should-you-use) |
| **2. Check OS versions** | "Are my phones updated enough?" | iPhone must be iOS 18+, Android must be Android 16+ for native cross-platform transfer. | Update first if not. |
| **3. Check carrier lock** | "Is my phone locked to a carrier?" | Settings > General > About > Carrier Lock must say "No SIM restrictions." | [Prerequisites below](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Check carrier support** | "Does my carrier allow this?" | Open carrier app and look for eSIM transfer option. Or call and ask. | [Supported carriers section below](#supported-carriers-for-cross-platform-esim-transfer-detailed) |
| **5. Execute transfer** | "Time to move the number." | Follow the specific steps for your scenario. | [Method A](#method-a-esim-transfer-from-android-to-iphone-carrier-app) or [Method B](#method-b-esim-transfer-from-iphone-to-android-carrier-qr-code) |
| **6. Post-transfer setup** | "My number is on the new phone – now what?" | Reactivate WhatsApp, iMessage, 2FA apps, and test SMS. | [After eSIM Transfer section below](#after-esim-transfer--whatsapp-imessage-and-2fa-migration) |
| **7. Troubleshoot if failed** | "It didn't work – what now?" | Check the error, delete old profile, retry, or use QR code fallback. | [Troubleshooting table below](#troubleshooting-why-did-my-esim-transfer-fail) |


## What You Need Before You Start an eSIM Transfer

**For both directions:**
- Both devices must be **unlocked** (no **carrier lock**). To check on iPhone: `Settings > General > About` → `Carrier Lock` must say "No SIM restrictions". **This is the #1 reason transfers fail** – if your phone is locked, you cannot transfer the eSIM to a different carrier's network.
- Both devices have **Bluetooth turned on**.
- Both devices are connected to **Wi‑Fi** (or at least one has a working cellular data connection).
- The eSIM you want to transfer is **active** on the source device (not already deleted).
- Your carrier **supports cross‑platform transfer** (see list below). If not, skip to the fallback methods section.
- Your **eSIM profile** is not **expired** – some profiles have limited validity dates.

**For Android → iPhone:**
- iPhone must be on **iOS 18 or later**.
- Android must be on **Android 16 or later**.

**For iPhone → Android:**
- iPhone must be on **iOS 18 or later**.
- Android must be on **Android 16 or later**.

> 🚨 **Critical Warning – Don't Delete Before Transfer:**
> **Do NOT delete the eSIM from your old device before starting the transfer.** If you delete the source eSIM first, the profile is gone from your device and your carrier may not be able to transfer it to the new device. You'll have to contact your carrier for a completely new QR code – which may take 24‑48 hours. Always initiate the transfer from the new device first, or keep the old eSIM active until the new one is confirmed working.

> 🚨 If your device is on an older OS, the menu option will simply not appear. Update first. If you're dealing with an **expired eSIM profile**, contact your carrier for a new QR code before starting the transfer.

The [Google Support – eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887) page provides additional details for Android users preparing to transfer their eSIM.


## Why Can't Travel eSIMs Be Transferred?

This is the #1 question we get. Here's why:

| Reason | Explanation |
| :--- | :--- |
| **EID Binding** | Each eSIM profile is cryptographically bound to the **EID** (eUICC Identifier) of the device it was activated on. Your phone's EID is unique – like a serial number for your eSIM hardware. (You can see your EID by dialing `*#06#` on most phones.) |
| **One‑Time QR Codes** | Travel eSIM QR codes are designed for **single use**. Once scanned, the QR code is invalidated on the carrier's server. This is a security feature to prevent fraud. |
| **No Carrier Account** | Travel eSIMs are purchased as standalone products – you don't have a "carrier account" with ongoing service. There's no one to log in to and request a transfer. |
| **Designed for Convenience** | Travel eSIMs trade transferability for convenience. You get instant activation without ID verification, but the trade‑off is that the profile is locked to one device. |

**The bottom line:** If you're using a travel eSIM (Roami, Airalo, Holafly, Nomad, etc.), **don't waste time trying to transfer it**. It won't work. Simply buy a new plan on your new device. The cost of a new travel eSIM is usually less than the time you'd spend trying to transfer an untransferable profile.

**What about carrier eSIMs (postpaid/prepaid)?**
Carrier eSIMs are different. You have an account with the carrier, and they can re‑issue your eSIM to a new device because they control the profile on their servers. That's why carrier eSIMs can be transferred, and travel eSIMs can't.


## eSIM Transfer Method Comparison – Which One Is Right for You?

| Feature | Carrier App Transfer | Carrier QR Code | Native Transfer (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Works cross-platform?** | ✅ Yes | ✅ Yes | ❌ No (same ecosystem only) |
| **Time required** | 3-5 min | 5-10 min | 1-2 min |
| **Carrier involvement** | Self-service via app | Must contact carrier | None |
| **Works while traveling?** | ✅ Yes (with Wi-Fi) | ✅ Yes (with Wi-Fi) | ✅ Yes |
| **Success rate** | High (if supported) | Very High (always works) | Very High |
| **Best for** | Quick transfer, app-supported carriers | Any carrier, fallback when app fails | Same-ecosystem device upgrades |
| **Cost** | Usually free | May cost $0‑25 for QR code re‑issue | Free |


## Method A: eSIM Transfer from Android to iPhone (Carrier App)

This is the most common scenario – switching from a Samsung, Pixel, or other Android to a new iPhone. The most reliable way to move your number is through your carrier's app.

### Step-by-Step

**Before you start:**
- Have your carrier's app installed on the new iPhone (or be ready to sign in on the carrier's website).
- Know your account PIN or login credentials.
- **Do NOT delete the eSIM from your Android yet.**

**On your iPhone (target):**
1. Install and open your carrier's app (for example, the T‑Mobile, Verizon, or AT&T app).
2. Sign in and look for an option such as "Activate eSIM", "Change device", or "Transfer to new device".
3. Follow the prompts to enter your new iPhone's **EID** and **IMEI** (shown under `Settings` → `General` → `About`).
4. The carrier pushes your eSIM profile to the new iPhone, or generates a QR code for you to scan.
5. On the iPhone, go to `Settings` → `Cellular` → `Add eSIM` and scan the QR code if one was generated.
6. Wait for "Activation complete". Your number is now active on the iPhone.
7. **Now** you can delete the eSIM from your Android (Settings > Connections > SIM Manager > tap the eSIM > Remove).

**iOS 18 tip:** If you're on iOS 18, the "Add eSIM" flow has been redesigned with a more prominent QR scanner and better error handling. You'll see a progress indicator during the profile download.

✅ **Done.** Your number is now active on the iPhone. If your carrier doesn't offer an app, contact them to re‑issue your eSIM as a new QR code (see the fallback methods below).

### What if the app transfer doesn't work?

Use the **carrier QR code fallback**:

- Contact your carrier (chat, phone, or website).
- Tell them you're switching devices and ask them to **re‑issue your eSIM as a new QR code**.
- Scan the new QR code on the iPhone: `Settings` → `Cellular` → `Add eSIM`.
- Complete activation.

If you see an **"unable to activate esim"** error during this process, check your Wi‑Fi connection and try again.


## Method B: eSIM Transfer from iPhone to Android (Carrier QR Code)

There is no built‑in "Transfer to Android" option on iPhone. The reliable method is to have your carrier re‑issue your eSIM.

### Pre-requisites
- Your new Android phone is **unlocked**.
- You can contact your carrier (or sign in to their app/website).
- Your Android is on **Android 16 or later**.
- **Do NOT delete the eSIM from your iPhone yet.**

### Steps

**Contact your carrier (or use their app):**
1. Tell them you're moving your eSIM from an iPhone to an Android phone.
2. Provide the new Android device's **EID** and **IMEI** (under `Settings` → `About phone`).
3. Your carrier re‑issues your eSIM as a new QR code (or pushes it through their app).

**On your Android (target):**
1. Go to `Settings` → `Network & internet` → `SIMs` → `Add eSIM` (wording varies by brand).
2. Scan the QR code the carrier provided.
3. Follow the prompts to download and activate the profile.
4. Wait for activation to complete.
5. **Now** you can delete the eSIM from your iPhone (Settings > Cellular > tap the eSIM > Remove Cellular Plan).

✅ Done. Your number now lives on the Android phone.

> ⚠️ **Important**: Once the transfer completes, the eSIM is **permanently removed** from the iPhone. You cannot revert without your carrier. Make sure you have another active line or Wi‑Fi before transferring.


## Transfer eSIM to New iPhone or Samsung – Intra-Platform eSIM Transfers

While cross‑platform transfer is the focus of this guide, many users simply want to move an eSIM within the same ecosystem. Here's how:

### iOS → iOS (iPhone to iPhone)

Apple's built‑in **Quick Transfer** is the easiest method:

1. During setup of your new iPhone, choose "Transfer eSIM from nearby iPhone" when prompted.
2. Keep both phones close with Bluetooth and Wi‑Fi enabled.
3. Confirm the transfer on your old iPhone.
4. Wait 1‑2 minutes for the **eSIM profile download** to complete on the new device.

**If Quick Transfer doesn't work:** Go to Settings > Cellular on your new iPhone > Add eSIM > Transfer from nearby iPhone.

**If that fails:** Use the carrier QR code method – contact your carrier for a new QR code.

### Android → Android (Samsung, Pixel, etc.)

Android transfer methods vary by brand:

**Samsung:** Settings > Connections > SIM Manager > Add eSIM > Transfer eSIM from old device (follow on‑screen prompts). Works on Samsung Galaxy S21 and newer, Z Flip/Z Fold series.

**Google Pixel:** During setup, you may be prompted to transfer your eSIM. Alternatively, use the carrier app or request a new QR code.

**General Android:** If your brand doesn't offer built‑in transfer, use the carrier QR code fallback method.

### Cross-Platform vs. Intra-Platform eSIM Transfer Comparison

| Feature | Cross‑Platform | Intra‑Platform |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Quick Transfer works |
| **Android ↔ Android** | N/A | ✅ Brand‑specific methods |
| **iOS ↔ Android** | ✅ Covered in this guide | ❌ Not supported directly |
| **Carrier dependence** | Higher | Lower (Apple/Google handle it) |
| **Time required** | 3-10 min | 1-2 min |
| **Success rate** | Varies by carrier | Generally high |

For a deeper dive into device‑specific eSIM behavior, see our **[iPhone 16 eSIM Complete Guide](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**.


## Supported Carriers for Cross-Platform eSIM Transfer (Detailed)

Cross-platform eSIM transfer is still new, and carrier support is rolling out gradually. There is no complete public list of every supported carrier, and availability changes often, so check your carrier's website or app for the current status.

### Confirmed Supported Carriers (As of August 2026)

| Carrier | Region | Transfer Method | Transfer Limit | Cost |
|---------|--------|-----------------|----------------|------|
| **Orange** | France, Europe | Orange app → "My eSIM space" → "Transfer to new device" | 3x per year | Free |
| **SFR** | France | SFR & Moi app → "Manage my SIM" → "Transfer eSIM" | 5x per year | Free |
| **T-Mobile** | USA | T-Mobile app → "Manage eSIM" → "Transfer to new device" | Unlimited | Free |
| **Verizon** | USA | My Verizon app → "Activate or switch device" | Unlimited | Free |
| **AT&T** | USA | AT&T app → "Activate eSIM" | Varies by plan | Free (postpaid) |
| **EE** | UK | EE app → "Plan" → "eSIM transfer" | 3x per year | Free |
| **Deutsche Telekom** | Germany | Telekom app → "eSIM transfer" | Unlimited | Free |
| **Swisscom** | Switzerland | Swisscom app → "eSIM transfer" | 3x per year | Free |
| **Bouygues** | France | QR code re-issue (via customer portal) | 3x per year | Free |
| **Free** | France | QR code re-issue (via customer portal) | 2x per year | Free |
| **Vodafone** | UK, Europe | Vodafone app → "eSIM transfer" | Varies by country | Free (postpaid) |
| **Google Fi** | USA, Global | Google Fi app → "Activate on this device" | Unlimited | Free |

### Travel eSIMs (NOT Transferable)

| Provider | Transferable? | What to Do Instead |
|----------|---------------|-------------------|
| **Roami** | ❌ No | Buy a new plan on your new device |
| **Airalo** | ❌ No | Buy a new plan on your new device |
| **Holafly** | ❌ No | Buy a new plan on your new device |
| **Nomad** | ❌ No | Buy a new plan on your new device |

**How to check if your carrier supports it?** Try the steps in Method A or B. If your carrier doesn't offer app‑based transfer or a new QR code, use the fallback methods below.


## Fallback Methods When Cross‑Platform eSIM Transfer Isn't Supported

If your carrier is not on the list, or you see an **eSIM transfer error**, use one of these alternatives:

### Option 1: Carrier-Issued QR Code (Works Always)
1. Call or chat with your carrier.
2. Tell them: "I'm switching from Android to iPhone (or vice versa). Please re‑issue my eSIM as a new QR code."
3. They will email you a QR code or an activation link.
4. On the new device, go to `Settings` → `Cellular` → `Add eSIM` → `Use QR code` and scan.
5. Old device's eSIM will stop working after the new one activates.

**Tip:** Some carriers charge a small fee for re‑issuing an eSIM ($0‑25). Ask before they do it.

### Option 2: Manual SM-DP+ Entry (Advanced)
If your carrier gives you an **activation code** and **SM‑DP+ address** (the server address that delivers the eSIM profile to your phone), you can manually add the eSIM on the new device:
1. `Settings` → `Cellular` → `Add eSIM` → `Enter Details Manually`.
2. Paste the SM‑DP+ address and activation code.
3. Tap `Next`. This works on both iPhone and Android.

### Option 3: Buy a New Plan (For Travel eSIMs)
If you're using a travel eSIM (Roami, Airalo, Holafly), don't waste time trying to transfer – it won't work. Simply buy a new plan on your new device.

> **Transition tip:** The QR code fallback is the most reliable method for any carrier, regardless of whether they support app‑based transfer. It may take a phone call, but it always works.


## eSIM Transfer or New Activation? – Decision Matrix

Sometimes buying a new eSIM is faster than transferring. Here's when to choose which:

| Factor | Transfer | New Activation | Which Is Better? |
|--------|----------|----------------|------------------|
| **You're keeping the same phone number** | ✅ Keep number | ❌ Get new number | Transfer wins |
| **You have 2FA tied to your number** | ✅ Keep access | ❌ Risk losing access | Transfer wins |
| **Your carrier charges for transfer** | Might cost $0‑25 | $0 (you're already buying new) | Depends on fee |
| **Travel eSIM** | ❌ Impossible | ✅ Easy | New activation wins |
| **You're in a rush (under 5 minutes)** | ⚠️ May take 5‑10 min | ✅ 2 min scan QR | New activation wins |
| **You want to keep your existing plan/data** | ✅ Keep unused data | ❌ Lose unused data | Transfer wins |

**Recommendation:** If you're keeping the same carrier plan and want to keep your phone number, transfer. If you're on a travel eSIM or in a rush, just buy a new plan on your new device.


## Troubleshooting: Why Did My eSIM Transfer Fail?

| Error / Symptom | Most Likely Cause | Fix |
|----------------|-------------------|-----|
| "Transfer not available – carrier not supported" | Your carrier doesn't support cross‑platform transfer. | Use fallback methods above. |
| QR code scans but then says "session expired" | You took too long after generating the QR code (it expired). | Repeat the process and scan immediately. |
| Android says "Pairing failed" | Bluetooth or local network permissions blocked. | On iPhone: `Settings > Privacy & Security > Local Network` – ensure `Settings` is toggled ON. On Android: turn off "Wi‑Fi security scan" (usually under Wi‑Fi advanced settings). |
| Transfer starts but stops at 50% | Weak Wi‑Fi or cellular signal. | Move both phones closer to the router. Turn off VPN on both devices. |
| **"eSIM already bound to another device"** | The profile was not properly released from the old device. | On the old device, go to `Settings > Cellular` and manually `Delete eSIM` (if still visible). Then wait 5 minutes and try again. If still fails, contact carrier for a profile release. |
| iPhone asks for **confirmation code** after scanning | The eSIM profile has a mandatory **eSIM confirmation code** (rare). | Look for the code in the carrier email (often 4–8 digits). If not found, ask carrier. |
| Double‑click side button does nothing (iPhone → Android) | Biometric authentication not set up or disabled. | Set up Face ID / Touch ID, or temporarily disable "Require Attention" for Face ID. |
| **eSIM no service** after transfer | APN settings not configured. | Configure APN manually (see table below). |
| **eSIM profile expired** | The profile has a limited validity date. | Contact your carrier for a new QR code. |
| **"No Add eSIM option" on iPhone** | iPhone is carrier‑locked or on older iOS. | Check carrier lock in Settings > General > About. Update to iOS 18. |
| **"SIM not supported" on new device** | The new device is carrier‑locked to a different carrier. | Check Carrier Lock – must say "No SIM restrictions." |
| **Transfer limit exceeded** | You've transferred this eSIM too many times (some carriers limit to 3‑5 per year). | Contact carrier support to reset the limit or get a new eSIM. |
| **"eSIM transfer failed" on Samsung** | Samsung Smart Switch may not support the specific carrier profile. | Use the carrier QR code fallback instead. |

### Manual APN Configuration

If after the **eSIM transfer** you experience **eSIM no service**, configure APN manually:

| Carrier | APN | Username | Password |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (blank) | (blank) |
| **SFR** | sl2sfr | (blank) | (blank) |
| **Free** | free | (blank) | (blank) |
| **Bouygues** | ebouygtel.com | (blank) | (blank) |
| **T-Mobile (US)** | fast.t-mobile.com | (blank) | (blank) |
| **AT&T (US)** | nxgen | (blank) | (blank) |
| **Verizon (US)** | vzwinternet | (blank) | (blank) |
| **Telekom (DE)** | internet.telekom | (blank) | (blank) |

### Still stuck?
Collect these before calling support:
- Source device IMEI and EID
- Target device IMEI and EID
- The exact error message (take a screenshot)
- Your account number or phone number


## What Happens to the Old eSIM After Transfer?

**It is immediately deactivated.**

The old eSIM profile may remain visible on the old device briefly. You can manually delete it:
`Settings > Cellular > tap the old eSIM > Delete eSIM`.

> 💰 **Billing**: Your carrier will continue charging you for the plan. Transferring does not cancel the plan – it just moves the SIM. To cancel, you must contact the carrier separately.

If you're worried about **eSIM bound to another device** errors, always delete the old profile from the source device after the transfer completes successfully.

### Transfer vs. Deletion Timeline

| Action | What Happens | When to Do It |
| :--- | :--- | :--- |
| **Transfer initiated** | Carrier sends profile to new device | Before deleting old eSIM |
| **New eSIM activated** | New device connects to network | After activation completes |
| **Old eSIM deactivated** | Carrier deactivates the old profile | Automatically – may take 1‑5 minutes |
| **Delete old eSIM** | Removes the inactive profile from old device | After confirming new device works |


## After eSIM Transfer – WhatsApp, iMessage, and 2FA Migration

After successfully transferring your eSIM, you need to set up your messaging apps and authentication services on the new device.

### WhatsApp (iPhone and Android)

WhatsApp uses your phone number to identify your account. After the **eSIM transfer**:

1. Open WhatsApp on your new device.
2. Enter your phone number (the one you transferred).
3. You'll receive a verification code via SMS or automated call to your number.
4. Enter the code – your chats will reappear if you backed up previously.

**Tip:** Backup your chats before starting the transfer. On iPhone: WhatsApp > Settings > Chats > Chat Backup. On Android: WhatsApp > Settings > Chats > Backup.

**Common WhatsApp issue:** If you don't receive the SMS verification code, try the "Call me" option – WhatsApp will call your number and read out the code. If that fails, wait 5 minutes and try again (carrier network may still be settling).

### iMessage and FaceTime (iPhone only)

1. Go to `Settings` → `Messages` and toggle `iMessage` ON.
2. Go to `Settings` → `FaceTime` and toggle `FaceTime` ON.
3. Wait 1‑2 minutes for activation. If it says "Waiting for activation", turn it off and on again.
4. Check your number is selected: Settings > Messages > Send & Receive → select your eSIM number.

### Two-Factor Authentication (2FA) and SMS Verification

Since your phone number hasn't changed, SMS‑based 2FA codes will work normally. However, app‑based authenticators (Google Authenticator, Microsoft Authenticator, Authy) may require re‑setup:

- **Authy:** Your tokens are encrypted and backed up to the cloud – just sign in on the new device.
- **Google Authenticator:** You'll need to transfer your accounts individually or use the "Transfer accounts" feature.
- **Microsoft Authenticator:** Use the backup feature to restore on the new device.
- **SMS 2FA:** Test by requesting a verification code from your bank or email provider to confirm SMS delivery works.

### Bank Apps and Financial Services

Most banks will detect the device change and require re‑authentication. Have your login credentials and any physical token devices ready.

For more help with app migration after **eSIM transfer**, see our [eSIM setup guide](/faq/how-to-activate-an-esim/).


## Best Practices to Avoid eSIM Transfer Headaches

✅ **Before transferring:**
- Check carrier support (try the menu – if it's there, it's supported).
- Update both phones to the latest OS (iOS 18 / Android 16).
- Charge both phones above 30%.
- Disable VPN and ad‑blockers temporarily.
- Verify your **eSIM profile** is not **expired**.
- Backup WhatsApp and other messaging apps.
- **Do NOT delete the eSIM from the old device yet.**

✅ **During transfer:**
- Keep phones within 10 cm (4 inches) of each other.
- Do not switch apps or lock the screen.
- Do not turn off Bluetooth or Wi‑Fi.
- Wait for the confirmation message – don't assume it's done.

✅ **After transfer:**
- Test calls and data on the new device.
- Delete the old eSIM from the source device to avoid confusion.
- Keep the old device's Wi‑Fi on for at least an hour – some carriers need a final handshake.
- Re‑activate WhatsApp, iMessage, and 2FA apps.
- Test SMS verification codes from your bank.
- Set a reminder to cancel the old plan if you're switching carriers entirely.


## Traveling and Transferring eSIM – What You Need to Know

If you're traveling abroad and need to transfer your eSIM, here are some important points:

### Transferring an eSIM While Traveling
- Cross‑platform transfer works **worldwide** as long as your carrier supports it.
- Make sure you have a stable Wi‑Fi connection (hotel, café) before starting.
- If the transfer fails, the carrier QR code fallback is your best option.
- Check **eSIM APN settings** after transfer – some carriers require manual configuration.

### French Carriers and Travel
- **Orange** and **SFR** allow cross‑platform transfer wherever you are.
- **Free** and **Bouygues** require re‑issuing a QR code – do this before you leave.
- For **travel eSIMs**, remember they are generally **not transferable** – buy a new plan on your new device.

### How to Contact Carriers While Abroad

| Carrier | Support Contact Method | Notes |
|---------|------------------------|-------|
| **Orange** | Orange app chat, WhatsApp support, or phone | 24/7 in most regions |
| **SFR** | SFR & Moi app chat, phone | Limited hours |
| **T-Mobile** | T‑Mobile app chat, iMessage, phone | 24/7 support in the US |
| **Verizon** | My Verizon app chat, phone | 24/7 support |
| **AT&T** | AT&T app chat, phone | Limited hours internationally |
| **EE** | EE app chat, phone | 24/7 support in the UK |

**Tip:** Download your carrier's app and save support contact info before you travel. Some carriers require SMS verification to log in – if you're mid‑transfer, this may not work.

### What to Do If Your Transfer Fails Mid-Trip

1. Connect to the nearest free Wi‑Fi (airports, hotels, cafes).
2. Contact your carrier's support via email or messaging app.
3. Ask them to re‑issue your eSIM as a QR code.
4. Scan the QR code on your new device.

### Tips for Globetrotters
- Always keep a backup copy of your eSIM QR codes.
- If you change phones mid‑trip, prefer native transfer over QR code when possible.
- For multiple destinations, consider a global eSIM plan that covers multiple countries.
- Save your carrier's support contact information before you travel.

For more on using eSIMs while traveling, see our [Travel eSIM 2026 guide](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Frequently Asked Questions

**Q1: Can I transfer a data‑only eSIM (like a travel eSIM)?**
No. Most travel eSIMs (Roami, Airalo, Holafly, Nomad, etc.) do not support cross‑platform transfer. They are designed to be installed once per device. You'll need to buy a new plan on your new phone. See "Why Can't Travel eSIMs Be Transferred?" above for the technical explanation.

**Q2: Does the transfer work between iPhone 11 and a Samsung S24?**
Yes – as long as both meet the OS requirements. iPhone 11 supports iOS 18 (it runs up to iOS 18). Samsung S24 supports Android 16. Hardware generation does not matter; only OS version matters.

**Q3: My carrier's app doesn't offer an eSIM transfer. What gives?**
Not every carrier supports app‑based eSIM transfer. If your carrier doesn't offer it, use the carrier QR code fallback: contact your carrier and ask them to re‑issue your eSIM as a new QR code. Some carriers charge a small fee for this ($0‑25).

**Q4: Will my WhatsApp / iMessage / 2FA codes still work after transfer?**
WhatsApp uses your phone number – it will detect the SIM change and may ask to re‑verify (usually automatic). iMessage on iPhone uses the eSIM number and should reactivate within a minute. For 2FA, services that send SMS to your number will work normally – the number hasn't changed. See Section 10 for detailed migration steps.

**Q5: Can I transfer the same eSIM back and forth multiple times?**
Yes, but each transfer requires the same process. Some carriers limit how many times an eSIM can be transferred each year (e.g., 3‑5 times). If you hit the limit, contact your carrier for help.

**Q6: What about eSIM + physical SIM dual‑SIM setups?**
The transfer only moves the eSIM. The physical SIM stays in the source device. If you want to move both, you'll need to transfer the eSIM (using this guide) and physically move the nano‑SIM card to the new device. For optimizing dual‑SIM experiences after transfer, check out our **[Dual eSIM Not Working? 12 Fixes for iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**Q7: What if I get an "expired eSIM profile" error during transfer?**
Contact your carrier to get a new QR code – re‑issuing is usually free. Make sure to activate the new QR code immediately (within 30 minutes) to avoid it expiring again.

**Q8: Why does my carrier lock prevent me from transferring?**
If your phone is under **carrier lock**, you can only transfer an eSIM to a device from the same carrier. Contact your carrier to unlock the device before the transfer. On iPhone: Settings > General > About > Carrier Lock must say "No SIM restrictions."

**Q9: Can I transfer an Orange eSIM to a non‑Orange device?**
Yes, if your device is unlocked and your Orange plan allows it. **Orange eSIM transfer** is supported via the Orange app or native transfer. Orange allows up to 3 transfers per year.

**Q10: Does the transfer work with a Free eSIM?**
No – Free does not support cross‑platform transfer. Use the QR code fallback method from the Free customer portal. Free allows up to 2 transfers per year.

**Q11: What is an eSIM confirmation code and where do I find it?**
Some eSIM profiles have a mandatory **eSIM confirmation code** – typically 4‑8 digits. Look for it in the carrier's email or activation instructions. If not found, ask your carrier.

**Q12: What does "eSIM not transferring to new phone" mean?**
This usually means your carrier doesn't support transfer, the QR code expired, the old eSIM is still active, or the new device is carrier‑locked. Delete the old eSIM first (if still visible), then try again. See Section 7 for the full troubleshooting table.

**Q13: How do I fix "eSIM activation failed" after transfer?**
Check your Wi‑Fi connection, restart both devices, and try again. If it still fails, use the manual entry method with the SM‑DP+ address from your carrier email.

**Q14: Does transferring my eSIM cancel my plan?**
No – transferring the eSIM just moves the SIM profile to a new device. Your plan (and billing) continues as before. To cancel your plan, you must contact your carrier separately.

**Q15: Can I transfer an eSIM if I've already deleted it from the old phone?**
Yes, but it's more complicated. If you deleted the eSIM before starting the transfer, contact your carrier and ask them to re‑issue your eSIM as a new QR code. They can do this because your profile still exists on their servers.

**Q16: How much does it cost to re‑issue an eSIM QR code?**
Most carriers re‑issue eSIMs for free (especially postpaid plans). Some prepaid carriers or MVNOs may charge a small fee ($5‑25). Ask before you request the re‑issue.

**Q17: Can I transfer a Vodafone eSIM to a non‑Vodafone device?**
Yes, as long as your device is unlocked and your Vodafone plan allows eSIM transfer. Vodafone supports transfer via their app in most countries. Check the Vodafone app for the "eSIM transfer" option.

**Q18: What if I hit my carrier's transfer limit?**
Some carriers limit transfers to 3‑5 per year. If you hit the limit, contact carrier support – they can often reset the limit or issue a new eSIM QR code manually (bypassing the transfer system).

**Q19: Can I transfer two eSIMs at the same time (dual eSIM)?**
Yes, but you must transfer them **one at a time**. Each eSIM profile is independent and must be transferred separately using the same process. If you have two active eSIMs on your old device, transfer the primary eSIM first, then the secondary.

**Q20: What's the difference between eSIM transfer and eSIM re‑issue?**
Transfer moves your existing profile to a new device (keeping your number and plan). Re‑issue creates a completely new eSIM profile for the same number – the old profile is permanently deactivated. Re‑issue is the fallback method when transfer isn't supported by your carrier.

---

## Final Takeaway

The ability to transfer eSIMs between iPhone and Android without carrier intervention is a **2026 game‑changer**. It removes the last major friction point for switching ecosystems. As long as your carrier is on the supported list and both phones are updated, you can move your number in under a minute.

**Remember**:
- If your carrier isn't supported, the QR code fallback still works – it just takes a phone call.
- For travel eSIMs, treat them as single‑use; buy fresh on each device.
- **Never delete the old eSIM before starting the transfer** – this is the most common mistake.
- Check carrier lock before you start – "No SIM restrictions" is required.
- Some carriers limit transfers per year – check before you start.

If you encounter persistent **eSIM transfer error** messages, our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)** covers advanced solutions.

👉 **Transferring to a travel plan?** See [eSIM for the USA](/united-states-esim/) or [eSIM for Europe](/europe-esim/) once your transfer completes.

👉 **Not sure if your new phone supports eSIM?** Check our **[complete compatibility list](/compatibility/)** before you start.

👉 **Testing a travel eSIM on your new device?** Grab a **[free Roami eSIM trial](/free-esim/)** to confirm everything works.

---

*Information based on Apple and Android official documentation, GSMA standards, and carrier guidance as of August 2026. Features and carrier support are subject to change.*
## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)