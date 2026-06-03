---
title: "Switch Android to iPhone? Transfer eSIM in 60s"
description: "Transfer eSIM between iPhone (iOS 26) and Android (Android 16) in under 60 seconds. Step‑by‑step, supported carriers, QR scan, and fixes for “transfer failed” errors. No carrier call needed"
keywords: ["eSIM troubleshooting", "eSIM activation failed", "eSIM no service", "eSIM transfer error", "Apple eSIM", "iOS 26 eSIM", "iPad eSIM not working", "eSIM APN settings", "eSIM confirmation code", "eSIM profile expired", "eSIM bound to another device", "dual eSIM signal issue", "eSIM DFU error 53", "eSIM carrier lock", "eSIM cross-platform transfer"]
date: 2026-06-01T10:00:00Z
lastmod: 2026-06-01T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# 站点 & SEO 基础硬编码配置
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI 文本翻译/硬编码配置 (支持多语言化)
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
    
# 右侧：热门 eSIM 配置 (6个国家，1.99美金) - 严格保留原始配置
sidebar_popular:
  title: "Popular eSIMs"
  item_suffix: "eSIM"
  items:
    - name: "United States"
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

# 右侧：免费 eSIM 配置 (4个国家) - 严格保留原始配置
sidebar_free:
  title: "Claim Free eSIM"
  icon: "🎁"
  item_suffix: "Free eSIM"
  item_subtitle: "Free eSIM"
  items:
    - name: "United Kingdom"
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

# 右侧：热门问题配置 (5个问题) - 严格保留原始配置
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


> For years, eSIM transfers were locked inside the same ecosystem – you could move from iPhone to iPhone, or between some Android phones, but crossing the iOS‑Android divide required a trip to your carrier. **iOS 26 and Android 16 change that completely.** This guide walks you through every supported method, carrier requirement, and troubleshooting step to transfer your eSIM seamlessly. For general activation help, see our **[iPhone 17 eSIM Complete Guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**.

---

## 📌 Quick Summary 

| From | To | Minimum OS | Method |
|------|-----|------------|--------|
| iPhone (iOS 26) | Android (16+) | iOS 26.3 / Android 16 | QR code + manual pairing |
| Android (16+) | iPhone (iOS 26) | iOS 26 / Android 16 | QR code scan (iPhone generates) |
| iPhone (iOS 18–25) | Any | – | Not directly supported – use carrier QR code |
| Android (15 or older) | Any | – | Not supported – upgrade OS or contact carrier |

**Supported carriers** (as of April 2026):  
🇺🇸 AT&T, T‑Mobile, Verizon, FirstNet  
🇨🇦 Bell, Koodo, Lucky Mobile, Telus  
🇫🇷 Orange, SFR  
🇩🇪 Telekom  
🇯🇵 au, UQ  
🇲🇽 AT&T  
🇨🇭 Swisscom  
🇬🇧 EE  

*If your carrier is not listed, the transfer will fail. Use the QR code method provided by your carrier instead.*

---

## 1. Why This Changes Everything

Before iOS 26, moving an eSIM from an Android phone to an iPhone meant:
- Calling your carrier (often waiting on hold)
- Providing the new device’s EID and IMEI
- Waiting minutes or hours for a new QR code

Now, with **native cross‑platform eSIM transfer**, the process is fully self‑service and takes less than 60 seconds.

### What makes it possible?
- **iOS 26** introduced the `Transfer from Android` feature inside Settings.
- **Android 16** added a reciprocal `Pair with iPhone or iPad` menu under Google Services.
- Both OS versions implement the GSMA’s **consumer eSIM transfer specification (SGP.22 v2.5+)**, allowing secure peer‑to‑peer profile migration.

> 🔒 Security note: The transfer is encrypted end‑to‑end and requires both devices to be in close proximity with Bluetooth enabled. The old eSIM is automatically deactivated the moment the new device activates it. If you later need to fix any dual‑SIM quirks after transfer, our **[Dual eSIM Not Working? 12 Fixes for iPhone](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)** is a helpful resource.

---

## 2. What You Need Before You Start

**For both directions:**
- Both devices must be **unlocked** (no carrier lock). To check on iPhone: `Settings > General > About` → `Carrier Lock` must say “No SIM restrictions”.
- Both devices have **Bluetooth turned on**.
- Both devices are connected to **Wi‑Fi** (or at least one has a working cellular data connection).
- The eSIM you want to transfer is **active** on the source device (not already deleted).
- Your carrier **supports cross‑platform transfer** (see list above). If not, skip to Section 6 – fallback methods.

**For Android → iPhone:**
- iPhone must be on **iOS 26 or later**.
- Android must be on **Android 16 or later** (check under `Settings > About phone > Software information`).

**For iPhone → Android:**
- iPhone must be on **iOS 26.3 or later** (the Android‑directed transfer feature arrived in 26.3).
- Android must be on **Android 16 or later**.

> 🚨 If your device is on an older OS, the menu option will simply not appear. Update first.

---

## 3. Method A: Transfer eSIM from Android to iPhone (iOS 26)

This is the most common scenario – switching from a Samsung, Pixel, or other Android to a new iPhone 17.

### Step‑by‑step

**On your Android (source device):**
1. Unlock the phone and enable Bluetooth.
2. Keep it next to the iPhone (within 10 cm).

**On your iPhone (target):**
1. Go to `Settings` → `Cellular` → `Add eSIM`.
2. Tap `Transfer from Android`. A QR code will appear on the iPhone screen.
   - *If you don’t see this option, update to iOS 26.*
3. On your Android phone, open the **camera** app.
4. Scan the QR code shown on the iPhone.
5. A notification will appear: “eSIM transfer detected”. Tap it.
6. Select the phone number (eSIM profile) you want to transfer.
7. Tap `Transfer`. The Android will show “Preparing transfer…”
8. On the iPhone, a confirmation popup appears – tap `Continue`.
9. Wait 10–30 seconds. The iPhone will say “Activation complete”.
10. The Android will show “eSIM removed” – this is normal.

✅ **Done.** Your number is now active on the iPhone. The Android’s eSIM is automatically deactivated and cannot be used again.

### What if the camera scan doesn’t work?
Use the **manual pairing fallback**:

- On the iPhone, after tapping `Transfer from Android`, choose `Other options` below the QR code.
- The iPhone shows a **session ID** and a **6‑digit pairing code**.
- On the Android: `Settings` → `Google services` → `All services` → `Pair with iPhone or iPad` → `Transfer eSIM`.
- Enter the session ID and pairing code manually.
- Proceed with the transfer.

---

## 4. Method B: Transfer eSIM from iPhone to Android (iOS 26.3+)

Apple added this capability in **iOS 26.3** (released early 2026). The process is similar but initiated from the iPhone.

### Pre‑requisites
- iPhone on **iOS 26.3 or later**
- Android on **Android 16 or later**
- Both devices on same Wi‑Fi or Bluetooth on

### Steps

**On your iPhone (source):**
1. Go to `Settings` → `Cellular`.
2. Tap the eSIM you want to transfer.
3. Scroll down and tap `Transfer to Android` (or `Transfer eSIM` under a new “Transfer to Android” section – exact wording varies by carrier).
   - *If you don’t see this, either your carrier doesn’t support it or you need iOS 26.3.*
4. A QR code appears. Keep this screen on.

**On your Android (target):**
1. Go to `Settings` → `Google services` → `All services` → `Pair with iPhone or iPad`.
2. Tap `Transfer eSIM`.
3. Scan the QR code displayed on the iPhone.
4. Select the number (if multiple eSIMs are present on the iPhone).
5. Tap `Transfer`.
6. On the iPhone, double‑click the side button to confirm the transfer (biometric authentication required).
7. Wait for activation on Android. The iPhone will show “eSIM removed” after completion.

✅ Done. Your number now lives on the Android phone.

> ⚠️ **Important**: Once the transfer completes, the eSIM is **permanently removed** from the iPhone. You cannot revert without your carrier. Make sure you have another active line or Wi‑Fi before transferring.

---

## 5. Supported Carriers (Detailed Table – April 2026)

| Country | Carriers Confirmed |
|---------|--------------------|
| USA | AT&T, FirstNet, T‑Mobile, Verizon |
| Canada | Bell, Koodo, Lucky Mobile, Telus |
| France | Orange, SFR |
| Germany | Deutsche Telekom (Telekom) |
| Japan | au, UQ (UQ Mobile) |
| Mexico | AT&T |
| Switzerland | Swisscom |
| United Kingdom | EE |

**Not supported (as of April 2026):**
- Vodafone (any country) – they use a proprietary transfer system
- Three (UK and other markets)
- Google Fi (requires re‑issuing QR code)
- Most prepaid / MVNO eSIMs (e.g., Airalo, Holafly, Nomad) – these are data‑only and cannot be transferred; you’ll need to buy a new plan on the new device.

👉 **How to check if your carrier supports it on iPhone?**  
Try the steps in Section 3 or 4. If the “Transfer from Android” or “Transfer to Android” option is missing, your carrier does not support it.

---

## 6. Fallback Methods (When Cross‑Platform Transfer Is Not Supported)

If your carrier is not on the list, or you see an error, use one of these alternatives:

### Option 1: Carrier‑issued QR code (works always)
1. Call or chat with your carrier.
2. Tell them: “I’m switching from Android to iPhone (or vice versa). Please re‑issue my eSIM as a new QR code.”
3. They will email you a QR code or an activation link.
4. On the new device, go to `Settings` → `Cellular` → `Add eSIM` → `Use QR code` and scan.
5. Old device’s eSIM will stop working after the new one activates.

**Tip**: Some carriers charge a small fee (e.g., $2–$5) for re‑issuing an eSIM.

### Option 2: Carrier app transfer
- **T‑Mobile (US)**: Use the T‑Mobile app → “Manage eSIM” → “Transfer to new device”. Works cross‑platform even without iOS 26.
- **Verizon**: “My Verizon” app → “Activate or switch device” → follow prompts. Works for Android ↔ iPhone.
- **EE UK**: EE app → “Plan” → “eSIM transfer” – supports cross‑OS but only for postpaid plans.

### Option 3: Manual SM‑DP+ entry (advanced)
If your carrier gives you an **activation code** and **SM‑DP+ address**, you can manually add the eSIM on the new device:
1. `Settings` → `Cellular` → `Add eSIM` → `Enter Details Manually`.
2. Paste the SM‑DP+ address and activation code. Leave confirmation code blank unless provided.
3. Tap `Next`. This works on both iPhone and Android (for Android, go to `Settings` → `Network & internet` → `SIMs` → `Add eSIM` → `Enter manually`).

---

## 7. Troubleshooting: Why Did My Transfer Fail?

Based on real user cases and Apple’s internal documentation, here are the most common failure reasons and fixes:

| Error / Symptom | Most Likely Cause | Fix |
|----------------|-------------------|-----|
| “Transfer not available – carrier not supported” | Your carrier doesn’t support cross‑platform transfer. | Use fallback methods (Section 6). |
| QR code scans but then says “session expired” | You took too long (>3 minutes) after generating the QR. | Repeat the process and scan immediately. |
| Android says “Pairing failed” | Bluetooth or local network permissions blocked. | On iPhone: `Settings > Privacy & Security > Local Network` – ensure `Settings` is toggled ON. On Android: turn off “Wi‑Fi security scan” (usually under Wi‑Fi advanced settings). |
| Transfer starts but stops at 50% | Weak Wi‑Fi or cellular signal. | Move both phones closer to the router. Turn off VPN on both devices. |
| “eSIM already bound to another device” | The profile was not properly released from the old device. | On the old device, go to `Settings > Cellular` and manually `Delete eSIM` (if still visible). Then wait 5 minutes and try again. If still fails, contact carrier for a profile release. For more such edge cases, check our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)**. |
| iPhone asks for confirmation code after scanning | The eSIM profile has a mandatory confirmation code (rare). | Look for the code in the carrier email (often 4–8 digits). If not found, ask carrier. |
| Double‑click side button does nothing (iPhone → Android) | Biometric authentication not set up or disabled. | Set up Face ID / Touch ID, or temporarily disable “Require Attention” for Face ID. |

### Still stuck?
Collect these before calling support:
- Source device IMEI and EID
- Target device IMEI and EID
- The exact error message (take a screenshot)

---

## 8. What Happens to the Old eSIM After Transfer?

**It is immediately deactivated.**  

The old device will show “No Service” for that line. The eSIM profile remains visible on the old device for 24–48 hours (as a “ghost” entry). You can manually delete it:  
`Settings > Cellular > tap the old eSIM > Delete eSIM`.

> 💰 **Billing**: Your carrier will continue charging you for the plan. Transferring does not cancel the plan – it just moves the SIM. To cancel, you must contact the carrier separately.

---

## 9. Best Practices to Avoid Transfer Headaches

✅ **Before transferring:**
- Check carrier support (try the menu – if it’s there, it’s supported).
- Update both phones to the latest OS (iOS 26 / Android 16).
- Charge both phones above 30%.
- Disable VPN and ad‑blockers temporarily.

✅ **During transfer:**
- Keep phones within 10 cm (4 inches) of each other.
- Do not switch apps or lock the screen.
- Do not turn off Bluetooth or Wi‑Fi.

✅ **After transfer:**
- Test calls and data on the new device.
- Delete the old eSIM from the source device to avoid confusion.
- Keep the old device’s Wi‑Fi on for at least an hour – some carriers need a final handshake.

---

## 10. FAQ – Cross‑Platform eSIM Transfer

**Q1: Can I transfer a data‑only eSIM (like a travel eSIM)?**  
A: No. Most travel eSIMs (Airalo, Holafly, Roami data plans, etc.) do not support cross‑platform transfer. They are designed to be installed once per device. You’ll need to buy a new plan on your new phone.

**Q2: Does the transfer work between iPhone 11 and a Samsung S24?**  
A: Yes – as long as both meet the OS requirements. iPhone 11 supports iOS 26 (it runs up to iOS 26). Samsung S24 supports Android 16. Hardware generation does not matter; only OS version matters. For a deep dive into device‑specific eSIM behavior, see our **[iPhone 17 eSIM Complete Guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)** (also applicable to many older models).

**Q3: I tried the steps but my Android doesn’t have “Pair with iPhone or iPad”. What gives?**  
A: That menu is part of Google Services and only appears on Android 16+ with Google Play Services updated. Go to `Settings > About phone > Android version`. If it’s 15 or older, upgrade your phone or use the fallback method (carrier QR code).

**Q4: Will my WhatsApp / iMessage / 2FA codes still work after transfer?**  
A: WhatsApp uses your phone number – it will detect the SIM change and may ask to re‑verify (usually automatic). iMessage on iPhone uses the eSIM number and should reactivate within a minute. For 2FA, services that send SMS to your number will work normally – the number hasn’t changed.

**Q5: Can I transfer the same eSIM back and forth multiple times?**  
A: Yes, but each transfer requires the same process. Some carriers limit transfers to 3–5 times per year to prevent abuse. If you hit the limit, they will ask you to come to a store or call support.

**Q6: What about eSIM + physical SIM dual‑SIM setups?**  
A: The transfer only moves the eSIM. The physical SIM stays in the source device. If you want to move both, you’ll need to transfer the eSIM (using this guide) and physically move the nano‑SIM card to the new device. For optimizing dual‑SIM experiences after transfer, check out our **[Dual eSIM Not Working? 12 Fixes for iPhone](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)**.

---

## 11. Final Takeaway

The ability to transfer eSIMs between iPhone and Android without carrier intervention is a **2026 game‑changer**. It removes the last major friction point for switching ecosystems. As long as your carrier is on the supported list and both phones are updated, you can move your number in under a minute.

**Remember**: If your carrier isn’t supported, the QR code fallback still works – it just takes a phone call. And for travel eSIMs, treat them as single‑use; buy fresh on each device.

> 📎 **Related resources on this site:**
> - [eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)
> - [iPhone 17 eSIM Complete Guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)
> - [eSIM Cross‑Platform Transfer 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)
> - [Dual eSIM Not Working? 12 Fixes for iPhone](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)

---

*Information based on Apple iOS 26 & Android 16 official documentation, carrier testing as of April 2026. Features and carrier support are subject to change.*