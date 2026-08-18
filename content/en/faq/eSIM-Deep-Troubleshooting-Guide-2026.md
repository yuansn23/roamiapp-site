---
title: "eSIM Deep Troubleshooting Guide 2026"
h1_title: "The Complete Guide to eSIM Troubleshooting in 2026"
description: "Deep eSIM troubleshooting guide 2026. Fix activation failures, transfer errors, no service, and QR code scan issues on iPhone & Android. Step-by-step solutions."
keywords: ["eSIM troubleshooting", "eSIM activation failed", "eSIM no service", "eSIM transfer error", "eSIM cross-platform transfer", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "eSIM carrier lock", "dual eSIM signal issue"]
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


This guide is a deep-dive troubleshooting reference for eSIM problems that a quick fix will not resolve. It covers the most common failure modes — activation failures, "No Service", QR and profile errors, dual-SIM conflicts, and restore errors — with the likely root cause and the exact fix for each.

If you are trying to move an eSIM from one phone to another, see our dedicated **[eSIM transfer guide](/faq/how-to-transfer-esim-between-iphone-and-android/)** instead. This page focuses on diagnosis.

---

## Quick Summary

| Symptom | Most likely cause | Fix |
|---------|-------------------|-----|
| "Unable to Activate" / "Activation failed" | Unstable Wi-Fi or carrier server error | Stable network + retry, then re-install (Section 1) |
| "No Service" after install | Data roaming off / APN missing | Enable roaming, check APN (Section 2) |
| QR code "Invalid" / "Expired" | QR code expired or already used | Request a fresh QR code (Section 3) |
| "eSIM already in use" | Profile not released from old device | Delete from old device or carrier release (Section 4) |
| "Cellular Plan Cannot Be Added" | Too many stored eSIMs | Remove unused eSIMs (Section 5) |
| Confirmation code required | Profile has a mandatory code | Find the 4–8 digit code in carrier email (Section 6) |
| "SIM not supported" | Device is carrier-locked | Unlock device or contact carrier (Section 7) |
| No data after activation | APN not configured | Enter APN manually (Section 8) |
| Stuck on "Activating" | Profile download stalled | Toggle Airplane Mode, re-install (Section 9) |
| One dual-SIM line "No Service" | Call/data routing conflict | Check line routing and toggles (Section 10) |
| eSIM transfer failed | Carrier doesn't support transfer | Use carrier QR code fallback (Section 11) |
| Restore error 4013 / 4014 | Hardware/firmware during restore | Different cable, update computer (Section 12) |
| "Profile expired" | QR code time-limited | Request a new QR code (Section 13) |
| Data roaming not working | Roaming off for the eSIM line | Enable Data Roaming (Section 14) |
| Deleted an eSIM by mistake | Profile removed locally | Contact carrier / buy a new plan (Section 15) |
| MDM blocks eSIM changes | Enterprise restriction | Contact your IT admin (Section 16) |

---

## 1. "Unable to Activate eSIM" or "Activation failed"

**Cause:** Almost always an unstable Wi-Fi connection or a temporary carrier (SM-DP+) server error, not a problem with your phone.

**Fix:**
1. Move to a stable Wi-Fi or cellular data connection.
2. Toggle Airplane Mode on and off to refresh the baseband.
3. If the error repeats, delete the pending eSIM under `Settings > Cellular`, restart, and scan the QR code again.

---

## 2. eSIM shows "No Service" after installation

**Cause:** The profile installed but the phone has not registered with a local network — usually because Data Roaming is off or the APN is missing.

**Fix:**
1. Turn **Data Roaming ON** for the eSIM line.
2. Under `Settings > Cellular > [your eSIM] > Network Selection`, turn off "Automatic", manually select a carrier, wait for it to fail, then switch back to "Automatic" to force re-registration.
3. If there is still no data, check the APN (Section 8).

---

## 3. QR code "Invalid" or "Expired"

**Cause:** eSIM QR codes are single-use and time-limited. The code was either already used or has expired.

**Fix:** Contact your eSIM provider and ask them to re-issue a new QR code, then scan it immediately.

---

## 4. "eSIM already in use" or "bound to another device"

**Cause:** The profile was never released from the old device, so the carrier still associates it with that phone.

**Fix:**
1. On the old device, delete the eSIM under `Settings > Cellular`.
2. Wait about five minutes and try again on the new device.
3. If the old device is lost or broken, contact your carrier and ask them to force-release the profile from their side.

---

## 5. "Cellular Plan Cannot Be Added"

**Cause:** The phone has reached its limit of stored eSIM profiles (typically 8–10, depending on the model), or the device is a mainland-China model without eSIM hardware.

**Fix:** Remove unused eSIMs under `Settings > Cellular`, then add the new one. If your device was bought in mainland China, it uses two physical SIM slots and cannot add an eSIM.

---

## 6. A confirmation code is required

**Cause:** Some eSIM profiles have a mandatory confirmation code that is required before the profile downloads.

**Fix:** Look for a 4–8 digit code in the email your carrier sent with the QR code. If you cannot find it, contact the carrier.

---

## 7. "SIM not supported" — carrier-locked device

**Cause:** The phone is locked to another carrier and cannot accept a profile from a different provider.

**Fix:** Check `Settings > General > About > Carrier Lock`. If it does not say "No SIM restrictions", contact your home carrier to request an unlock.

---

## 8. No data connection after activation (APN)

**Cause:** The Access Point Name (APN) was not configured automatically, so the phone has no route to the data network.

**Fix:**
1. Go to `Settings > Cellular > Cellular Data Network`.
2. Enter the APN value from your eSIM provider's website (for example, `globaldata` for Airalo).
3. Most travel eSIMs auto-configure the APN, so confirm the correct value with your provider.

---

## 9. eSIM stuck on "Activating"

**Cause:** The profile download stalled, often due to a weak signal or a busy activation server.

**Fix:**
1. Ensure you are on a stable network.
2. Toggle Airplane Mode on and off.
3. If it stays stuck for more than 10 minutes, delete the eSIM and re-install it from the QR code.

---

## 10. Dual eSIM: one line shows "No Service"

**Cause:** With two active eSIMs, incoming-call and data routing can conflict, leaving one line without service.

**Fix:**
1. Under `Settings > Cellular`, confirm which line is set for **Cellular Data** and which for **Default Voice Line**.
2. Toggle each line off and back on.
3. For a deeper fix, see our **[Dual eSIM not working? 12 fixes for iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** guide.

---

## 11. eSIM transfer failed

**Cause:** There is no built-in cross-platform eSIM transfer, and your carrier may not support app-based transfer.

**Fix:** Ask your carrier to re-issue the eSIM as a new QR code and scan it on the new device. After the transfer, WhatsApp, iMessage, and SMS two-factor codes keep working because your number has not changed. For full step-by-step instructions, see our **[eSIM transfer guide](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## 12. Restore error 4013 or 4014

**Cause:** These errors indicate a hardware or firmware problem during a software restore, not an eSIM issue.

**Fix:** Try a different cable and USB port, update your computer's operating system, then attempt the restore again. Contact Apple Support if the error persists.

---

## 13. "Profile expired"

**Cause:** The eSIM QR code or activation code was time-limited and has expired.

**Fix:** Contact your eSIM provider and ask for a new QR code, then activate it promptly.

---

## 14. Data roaming not working

**Cause:** Data Roaming is turned off for the travel eSIM line, so it cannot connect to the local network.

**Fix:** Go to `Settings > Cellular > [your eSIM]` and turn **Data Roaming ON**. This is required for most travel eSIMs to work abroad.

---

## 15. Deleted an eSIM by mistake

**Cause:** Deleting an eSIM removes the profile from the phone but does not cancel the plan.

**Fix:**
- For postpaid carrier eSIMs, contact the carrier — they can usually re-issue the QR code.
- For travel eSIMs (Roami, Airalo, and similar), deletion is usually permanent, so you will need to buy a new plan.
- Always keep a backup of your original activation email and QR code.

---

## 16. MDM or enterprise restrictions block eSIM

**Cause:** On a managed (work) device, a Mobile Device Management policy such as `AllowESIMModification` can block adding or removing eSIMs.

**Fix:** Contact your IT administrator to enable eSIM changes, or use an unmanaged device.

---

## Frequently Asked Questions

**Q1: How do I know if my phone supports eSIM?**
Dial `*#06#`. If an **EID** number appears, your phone supports eSIM. If no EID appears, it does not.

**Q2: Will deleting an eSIM cancel my plan?**
No. Deleting the eSIM only removes the profile from the phone. You must contact the carrier separately to cancel the plan.

**Q3: Can I recover a deleted eSIM?**
For postpaid carrier eSIMs, yes — the carrier can re-issue the profile. For travel eSIMs, deletion is usually permanent and requires a new purchase.

**Q4: Why does my eSIM work on Wi-Fi but not on cellular?**
This is almost always an APN or Data Roaming issue. Follow Section 8 and Section 14.

**Q5: Does an eSIM drain my battery faster?**
No. Running two active lines at once can use slightly more power, but a single eSIM does not drain the battery.

---

## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
