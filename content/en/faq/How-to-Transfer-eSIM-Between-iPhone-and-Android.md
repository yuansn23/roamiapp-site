---
title: "How to Transfer eSIM Between iPhone and Android"
h1_title: "How to Transfer an eSIM Between iPhone and Android"
description: "Move your eSIM between iPhone and Android with a carrier app or re-issued QR code. Step-by-step for both directions, plus fixes for common transfer errors."
keywords: ["eSIM cross-platform transfer", "eSIM transfer error", "iOS 18 eSIM", "eSIM carrier lock", "eSIM confirmation code", "eSIM no service", "eSIM APN settings", "eSIM troubleshooting", "eSIM activation failed", "transfer eSIM between iPhone and Android"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-18T10:00:00Z
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
    - name: "Germany"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkey"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japan"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "China"
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


For years, **eSIM transfers** were locked inside the same ecosystem – you could move from iPhone to iPhone, or between some Android phones, but crossing the iOS‑Android divide required a trip to your carrier. **There is no built‑in iOS‑to‑Android eSIM transfer, so this guide focuses on the methods that actually work: your carrier's app and a carrier‑issued QR code.** This guide walks you through every supported method, carrier requirement, and troubleshooting step to complete a **cross‑platform eSIM transfer** seamlessly.

If you're new to eSIM technology, our [What is eSIM? guide](/faq/what-is-esim/) covers the basics. For more advanced **eSIM troubleshooting** scenarios, check our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)**. For general activation help, see our **[iPhone 16 eSIM Complete Guide](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**.


## Quick Summary: eSIM Transfer Between iPhone and Android

| From | To | Minimum OS | Method |
|------|-----|------------|--------|
| iPhone | Android | iOS 18 / Android 16 | Carrier app or carrier‑issued QR code |
| Android | iPhone | iOS 18 / Android 16 | Carrier app or carrier‑issued QR code |
| Any | Any | – | No native cross‑platform transfer – use your carrier |

**Supported carriers** for **cross-platform eSIM transfer** vary by carrier and country. Most major carriers such as AT&T, T-Mobile, Verizon, Orange, SFR, Deutsche Telekom, EE, and Swisscom let you move an eSIM between devices through their app or by re‑issuing a QR code. Check your carrier's website or app for the current status.

*If your carrier doesn't offer app‑based transfer, use the QR code method provided by your carrier instead. For a complete reference of supported devices, see our [eSIM compatibility list](/compatibility/).*


## Why Cross‑Platform eSIM Transfer Works the Way It Does

Moving an eSIM from an Android phone to an iPhone (or the other way) means:
- Calling or messaging your carrier (or using their app)
- Providing the new device's EID and IMEI
- Waiting minutes or hours for a new QR code

There is no built‑in iOS‑to‑Android eSIM transfer, so the process is handled by your carrier. Some carriers let you complete it yourself through their app; others re‑issue a QR code you scan on the new device.

### What makes it possible?

- Your **carrier** controls the transfer through its app or website, or by re‑issuing your eSIM as a new QR code.
- Both iOS and Android store the eSIM profile on a secure chip that implements the GSMA's **consumer eSIM specification (SGP.22)**.
- The new device downloads the profile from the carrier's SM‑DP+ server after the carrier approves the transfer.

The [GSMA](https://www.gsma.com/esim/) defines the technical standards that make **eSIM activation and profile download** work securely across devices. The [Apple Support – eSIM on iPhone](https://support.apple.com/en-us/118670) page confirms the compatibility requirements for iOS devices.

> 🔒 Security note: The transfer is encrypted end‑to‑end and requires both devices to be in close proximity with Bluetooth enabled. The old eSIM is automatically deactivated the moment the new device activates it. If you later need to fix any dual‑SIM quirks after **eSIM transfer**, our **[Dual eSIM Not Working? 12 Fixes for iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** is a helpful resource.


## What You Need Before You Start an eSIM Transfer

**For both directions:**
- Both devices must be **unlocked** (no **carrier lock**). To check on iPhone: `Settings > General > About` → `Carrier Lock` must say "No SIM restrictions".
- Both devices have **Bluetooth turned on**.
- Both devices are connected to **Wi‑Fi** (or at least one has a working cellular data connection).
- The eSIM you want to transfer is **active** on the source device (not already deleted).
- Your carrier **supports cross‑platform transfer** (see list above). If not, skip to the fallback methods section.
- Your **eSIM profile** is not **expired** – some profiles have limited validity dates.

**For Android → iPhone:**
- iPhone must be on **iOS 18 or later**.
- Android must be on **Android 16 or later**.

**For iPhone → Android:**
- iPhone must be on **iOS 18 or later**.
- Android must be on **Android 16 or later**.

> 🚨 If your device is on an older OS, the menu option will simply not appear. Update first. If you're dealing with an **expired eSIM profile**, contact your carrier for a new QR code before starting the transfer.

The [Google Support – eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887) page provides additional details for Android users preparing to transfer their eSIM.


## What Is eSIM Transfer? How SM‑DP+ Server Technology Works

Understanding the technology behind eSIM transfer helps you troubleshoot problems when things go wrong.

### The Role of the SM‑DP+ Server

When you transfer an eSIM, the process doesn't happen directly between the two phones. Here's what actually happens:

1. **The source device** generates an encrypted transfer request.
2. **The carrier's SM‑DP+ server** (Subscription Manager Data Preparation) receives this request.
3. **The server verifies** that the profile is eligible for transfer (profile active, carrier supports transfer, etc.).
4. **The server generates** a new security token and transmits it to the target device.
5. **The target device** downloads the profile and activates it.
6. **The server deactivates** the profile on the source device.

This process is fully automated and requires no human intervention from the carrier – provided the carrier has enabled this feature.

### Why the "Session Expired" Error Happens

The QR code generated during transfer contains a time‑sensitive security token. If you don't complete the scan within a short time, the code may expire for security reasons. If you see this error, simply restart the process and scan immediately.

### Why Bluetooth and Wi‑Fi Are Required

- **Bluetooth** enables device discovery and secure pairing between the two phones.
- **Wi‑Fi** allows the target device to download the eSIM profile from the carrier's SM‑DP+ server.

Both are essential – the transfer won't work without either one.

The [GSMA](https://www.gsma.com/esim/) defines these technical standards that ensure **eSIM activation** and **eSIM profile download** work securely across devices and carriers worldwide.


## Method A: eSIM Transfer from Android to iPhone (Carrier App)

This is the most common scenario – switching from a Samsung, Pixel, or other Android to a new iPhone. The most reliable way to move your number is through your carrier's app. Here's how:

### Step‑by‑step

**Before you start:**
- Have your carrier's app installed on the new iPhone (or be ready to sign in on the carrier's website).
- Know your account PIN or login credentials.

**On your iPhone (target):**
1. Install and open your carrier's app (for example, the T‑Mobile, Verizon, or AT&T app).
2. Sign in and look for an option such as "Activate eSIM", "Change device", or "Transfer to new device".
3. Follow the prompts to enter your new iPhone's **EID** and **IMEI** (shown under `Settings` → `General` → `About`).
4. The carrier pushes your eSIM profile to the new iPhone, or generates a QR code for you to scan.
5. On the iPhone, go to `Settings` → `Cellular` → `Add eSIM` and scan the QR code if one was generated.
6. Wait for "Activation complete". Your number is now active on the iPhone.

✅ **Done.** Your number is now active on the iPhone. If your carrier doesn't offer an app, contact them to re‑issue your eSIM as a new QR code (see the fallback methods below).

### What if the app transfer doesn't work?

Use the **carrier QR code fallback**:

- Contact your carrier (chat, phone, or website).
- Tell them you're switching devices and ask them to **re‑issue your eSIM as a new QR code**.
- Scan the new QR code on the iPhone: `Settings` → `Cellular` → `Add eSIM`.
- Complete activation.

If you see an **"unable to activate esim"** error during this process, check your Wi‑Fi connection and try again. For more help, see our [eSIM troubleshooting guide](/faq/esim-deep-troubleshooting-guide-2026/).


## Method B: eSIM Transfer from iPhone to Android (Carrier QR Code)

There is no built‑in "Transfer to Android" option on iPhone. The reliable method is to have your carrier re‑issue your eSIM. Here's how:

### Pre‑requisites
- Your new Android phone is **unlocked**.
- You can contact your carrier (or sign in to their app/website).
- Your Android is on **Android 16 or later**.

### Steps

**Contact your carrier (or use their app):**
1. Tell them you're moving your eSIM from an iPhone to an Android phone.
2. Provide the new Android device's **EID** and **IMEI** (under `Settings` → `About phone`).
3. Your carrier re‑issues your eSIM as a new QR code (or pushes it through their app).

**On your Android (target):**
1. Go to `Settings` → `Network & internet` → `SIMs` → `Add eSIM` (wording varies by brand).
2. Scan the QR code the carrier provided.
3. Follow the prompts to download and activate the profile.
4. Wait for activation to complete. Your old iPhone's eSIM is deactivated once the number moves over.

✅ Done. Your number now lives on the Android phone. This completes the **eSIM from iPhone to Android** transfer.

> ⚠️ **Important**: Once the transfer completes, the eSIM is **permanently removed** from the iPhone. You cannot revert without your carrier. Make sure you have another active line or Wi‑Fi before transferring.

For deeper troubleshooting after a transfer, see our **[eSIM Deep Troubleshooting Guide](/faq/esim-deep-troubleshooting-guide-2026/)**.


## Transfer eSIM to New iPhone or Samsung – Intra‑Platform Transfers

While cross‑platform transfer is the focus of this guide, many users simply want to move an eSIM within the same ecosystem. Here's how:

### iOS → iOS (iPhone to iPhone)

Apple's built‑in **Quick Transfer** is the easiest method:

1. During setup of your new iPhone, choose "Transfer eSIM from nearby iPhone" when prompted.
2. Keep both phones close with Bluetooth and Wi‑Fi enabled.
3. Confirm the transfer on your old iPhone.
4. Wait 1‑2 minutes for the **eSIM profile download** to complete on the new device.

**If Quick Transfer doesn't work:** Go to Settings > Cellular on your new iPhone > Add eSIM > Transfer from nearby iPhone. This method handles **transfer eSIM to new iPhone** seamlessly.

### Android → Android (Samsung, Pixel, etc.)

Android transfer methods vary by brand:

**Samsung:** Settings > Connections > SIM Manager > Add eSIM > Transfer eSIM from old device (follow on‑screen prompts). This works for **transfer eSIM Samsung to Samsung**.

**Google Pixel:** During setup, you may be prompted to transfer your eSIM. Alternatively, use the carrier app or request a new QR code.

**General Android:** If your brand doesn't offer built‑in transfer, use the carrier QR code fallback method.

### Cross‑Platform vs. Intra‑Platform Differences

| Feature | Cross‑Platform | Intra‑Platform |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Quick Transfer works |
| **Android ↔ Android** | N/A | ✅ Brand‑specific methods |
| **iOS ↔ Android** | ✅ Covered in this guide | ❌ Not supported directly |
| **Carrier dependence** | Higher | Lower (Apple/Google handle it) |
| **Success rate** | Varies by carrier | Generally high |

For a deeper dive into device‑specific eSIM behavior, see our **[iPhone 16 eSIM Complete Guide](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** (also applicable to many older models).


## Supported Carriers for Cross-Platform eSIM Transfer (Detailed)

Cross-platform eSIM transfer is still new, and carrier support is rolling out gradually. There is no complete public list of every supported carrier, and availability changes often, so check your carrier's website or app for the current status. A few things to keep in mind:

- Major carriers are generally the first to support cross-platform transfer.
- Prepaid and data-only travel eSIMs (such as Airalo, Holafly, and Nomad) are typically tied to a single device and cannot be transferred - you buy a new plan on the new device.
- Some carriers use their own transfer tools instead of the cross-platform standard.

👉 **How to check if your carrier supports it?**
Try the steps in Method A or B. If your carrier doesn’t offer app‑based transfer or a new QR code, use the fallback methods below.


## Fallback Methods When Cross‑Platform eSIM Transfer Isn't Supported

If your carrier is not on the list, or you see an **eSIM transfer error**, use one of these alternatives:

### Option 1: Carrier‑issued QR code (works always)
1. Call or chat with your carrier.
2. Tell them: "I'm switching from Android to iPhone (or vice versa). Please re‑issue my eSIM as a new QR code."
3. They will email you a QR code or an activation link.
4. On the new device, go to `Settings` → `Cellular` → `Add eSIM` → `Use QR code` and scan.
5. Old device's eSIM will stop working after the new one activates.

**Tip**: Some carriers charge a small fee for re‑issuing an eSIM.

### Option 2: Carrier app transfer
- **Orange France**: Orange app → "My eSIM space" → "Transfer to new device".
- **SFR France**: SFR & Moi app → "Manage my SIM" → "Transfer eSIM".
- **T‑Mobile (US)**: T‑Mobile app → "Manage eSIM" → "Transfer to new device".
- **Verizon**: "My Verizon" app → "Activate or switch device" → follow prompts.
- **EE UK**: EE app → "Plan" → "eSIM transfer".

### Option 3: Manual SM‑DP+ entry (advanced)
If your carrier gives you an **activation code** and **SM‑DP+ address**, you can manually add the eSIM on the new device:
1. `Settings` → `Cellular` → `Add eSIM` → `Enter Details Manually`.
2. Paste the SM‑DP+ address and activation code.
3. Tap `Next`. This works on both iPhone and Android.


## Troubleshooting: Why Did My eSIM Transfer Fail?

Here are the most common failure reasons and fixes for **eSIM troubleshooting**:

| Error / Symptom | Most Likely Cause | Fix |
|----------------|-------------------|-----|
| "Transfer not available – carrier not supported" | Your carrier doesn't support cross‑platform transfer. | Use fallback methods above. |
| QR code scans but then says "session expired" | You took too long after generating the QR code (it expired). | Repeat the process and scan immediately. |
| Android says "Pairing failed" | Bluetooth or local network permissions blocked. | On iPhone: `Settings > Privacy & Security > Local Network` – ensure `Settings` is toggled ON. On Android: turn off "Wi‑Fi security scan" (usually under Wi‑Fi advanced settings). |
| Transfer starts but stops at 50% | Weak Wi‑Fi or cellular signal. | Move both phones closer to the router. Turn off VPN on both devices. |
| **"eSIM already bound to another device"** | The profile was not properly released from the old device. | On the old device, go to `Settings > Cellular` and manually `Delete eSIM` (if still visible). Then wait 5 minutes and try again. If still fails, contact carrier for a profile release. For more such edge cases, check our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)**. |
| iPhone asks for **confirmation code** after scanning | The eSIM profile has a mandatory **eSIM confirmation code** (rare). | Look for the code in the carrier email (often 4–8 digits). If not found, ask carrier. |
| Double‑click side button does nothing (iPhone → Android) | Biometric authentication not set up or disabled. | Set up Face ID / Touch ID, or temporarily disable "Require Attention" for Face ID. |
| **eSIM no service** after transfer | APN settings not configured. | Configure APN manually (see table below). |
| **eSIM profile expired** | The profile has a limited validity date. | Contact your carrier for a new QR code. |
| **Restore error 4013** | Hardware/baseband issue (rare). | Contact Apple Support – this usually indicates a hardware component problem. |

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


## What Happens to the Old eSIM After Transfer?

**It is immediately deactivated.**  

The old eSIM profile may remain visible on the old device briefly. You can manually delete it:
`Settings > Cellular > tap the old eSIM > Delete eSIM`.

> 💰 **Billing**: Your carrier will continue charging you for the plan. Transferring does not cancel the plan – it just moves the SIM. To cancel, you must contact the carrier separately.

If you're worried about **eSIM bound to another device** errors, always delete the old profile from the source device after the transfer completes successfully.


## After eSIM Transfer – WhatsApp, iMessage, and 2FA Migration

After successfully transferring your eSIM, you need to set up your messaging apps and authentication services on the new device.

### WhatsApp (iPhone and Android)

WhatsApp uses your phone number to identify your account. After the **eSIM transfer**:

1. Open WhatsApp on your new device.
2. Enter your phone number (the one you transferred).
3. You'll receive a verification code via SMS or automated call to your number.
4. Enter the code – your chats will reappear if you backed up previously.

**Tip:** Backup your chats before starting the transfer. On iPhone: WhatsApp > Settings > Chats > Chat Backup. On Android: WhatsApp > Settings > Chats > Backup.

### iMessage and FaceTime (iPhone only)

1. Go to `Settings` → `Messages` and toggle `iMessage` ON.
2. Go to `Settings` → `FaceTime` and toggle `FaceTime` ON.
3. Wait 1‑2 minutes for activation. If it says "Waiting for activation", turn it off and on again.
4. Check your number is selected: Settings > Messages > Send & Receive → select your eSIM number.

### Two‑Factor Authentication (2FA) and SMS Verification

Since your phone number hasn't changed, SMS‑based 2FA codes will work normally. However, app‑based authenticators (Google Authenticator, Microsoft Authenticator, Authy) may require re‑setup:

- **Authy:** Your tokens are encrypted and backed up to the cloud – just sign in on the new device.
- **Google Authenticator:** You'll need to transfer your accounts individually or use the "Transfer accounts" feature.
- **Microsoft Authenticator:** Use the backup feature to restore on the new device.

### Bank Apps and Financial Services

Most banks will detect the device change and require re‑authentication. Have your login credentials and any physical token devices ready.

For more help with app migration after **eSIM transfer**, see our [eSIM setup guide](/faq/how-to-activate-an-esim/).


## Best Practices to Avoid Transfer Headaches

✅ **Before transferring:**
- Check carrier support (try the menu – if it's there, it's supported).
- Update both phones to the latest OS (iOS 18 / Android 16).
- Charge both phones above 30%.
- Disable VPN and ad‑blockers temporarily.
- Verify your **eSIM profile** is not **expired**.
- Backup WhatsApp and other messaging apps.

✅ **During transfer:**
- Keep phones within 10 cm (4 inches) of each other.
- Do not switch apps or lock the screen.
- Do not turn off Bluetooth or Wi‑Fi.

✅ **After transfer:**
- Test calls and data on the new device.
- Delete the old eSIM from the source device to avoid confusion.
- Keep the old device's Wi‑Fi on for at least an hour – some carriers need a final handshake.
- Re‑activate WhatsApp, iMessage, and 2FA apps.
- Test SMS verification codes from your bank.


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

### What to Do If Your Transfer Fails Mid‑Trip

1. Connect to the nearest free Wi‑Fi (airports, hotels, cafes).
2. Contact your carrier's support via email or messaging app.
3. Ask them to re‑issue your eSIM as a QR code.
4. Scan the QR code on your new device.

### Tips for Globetrotters
- Always keep a backup copy of your eSIM QR codes.
- If you change phones mid‑trip, prefer native transfer over QR code when possible.
- For multiple destinations, consider a [global eSIM plan](/plans/) that covers multiple countries.
- Save your carrier's support contact information before you travel.

For more on using eSIMs while traveling, see our [Travel eSIM 2026 guide](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Frequently Asked Questions

**Q1: Can I transfer a data‑only eSIM (like a travel eSIM)?**  
No. Most travel eSIMs (Airalo, Holafly, Nomad, etc.) do not support cross‑platform transfer. They are designed to be installed once per device. You'll need to buy a new plan on your new phone.

**Q2: Does the transfer work between iPhone 11 and a Samsung S24?**  
Yes – as long as both meet the OS requirements. iPhone 11 supports iOS 18 (it runs up to iOS 18). Samsung S24 supports Android 16. Hardware generation does not matter; only OS version matters.

**Q3: My carrier's app doesn't offer an eSIM transfer. What gives?**  
Not every carrier supports app‑based eSIM transfer. If your carrier doesn't offer it, use the carrier QR code fallback: contact your carrier and ask them to re‑issue your eSIM as a new QR code.

**Q4: Will my WhatsApp / iMessage / 2FA codes still work after transfer?**  
WhatsApp uses your phone number – it will detect the SIM change and may ask to re‑verify (usually automatic). iMessage on iPhone uses the eSIM number and should reactivate within a minute. For 2FA, services that send SMS to your number will work normally – the number hasn't changed. See Section 10 for detailed migration steps.

**Q5: Can I transfer the same eSIM back and forth multiple times?**  
Yes, but each transfer requires the same process. Some carriers limit how many times an eSIM can be transferred each year. If you hit the limit, contact your carrier for help.

**Q6: What about eSIM + physical SIM dual‑SIM setups?**  
The transfer only moves the eSIM. The physical SIM stays in the source device. If you want to move both, you'll need to transfer the eSIM (using this guide) and physically move the nano‑SIM card to the new device. For optimizing dual‑SIM experiences after transfer, check out our **[Dual eSIM Not Working? 12 Fixes for iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**Q7: What if I get an "expired eSIM profile" error during transfer?**  
Contact your carrier to get a new QR code – re‑issuing is usually free.

**Q8: Why does my carrier lock prevent me from transferring?**  
If your phone is under **carrier lock**, you can only transfer an eSIM to a device from the same carrier. Contact your carrier (Orange, SFR, Free, Bouygues) to unlock the device before the transfer.

**Q9: Can I transfer an Orange eSIM to a non‑Orange device?**  
Yes, if your device is unlocked and your Orange plan allows it. **Orange eSIM transfer** is supported via the Orange app or native transfer.

**Q10: Does the transfer work with a Free eSIM?**  
No – Free does not support cross‑platform transfer. Use the QR code fallback method from the Free customer portal.

**Q11: What is an eSIM confirmation code and where do I find it?**  
Some eSIM profiles have a mandatory **eSIM confirmation code** – typically 4‑8 digits. Look for it in the carrier's email or activation instructions. If not found, ask your carrier.

**Q12: What does "eSIM not transferring to new phone" mean?**  
This usually means your carrier doesn't support transfer, the QR code expired, or the old eSIM is still active. Delete the old eSIM first, then try again. See Section 7 for the full troubleshooting table.

**Q13: How do I fix "eSIM activation failed" after transfer?**  
Check your Wi‑Fi connection, restart both devices, and try again. If it still fails, use the manual entry method with the SM‑DP+ address from your carrier email. For more help, see our [eSIM Deep Troubleshooting Guide](/faq/esim-deep-troubleshooting-guide-2026/).


## Final Takeaway

The ability to transfer eSIMs between iPhone and Android without carrier intervention is a **2026 game‑changer**. It removes the last major friction point for switching ecosystems. As long as your carrier is on the supported list (Orange or SFR in France) and both phones are updated, you can move your number in under a minute.

**Remember**: If your carrier isn't supported, the QR code fallback still works – it just takes a phone call. And for travel eSIMs, treat them as single‑use; buy fresh on each device. If you encounter persistent **eSIM transfer error** messages, our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)** covers advanced solutions.

---

*Information based on Apple and Android official documentation, GSMA standards, and carrier guidance as of June 2026. Features and carrier support are subject to change.*
## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
