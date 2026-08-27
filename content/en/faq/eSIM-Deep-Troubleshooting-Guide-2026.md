---
title: "eSIM Deep Troubleshooting Guide 2026"
h1_title: "The Complete Guide to eSIM Troubleshooting in 2026 – 18 Real-World Fixes"
description: "Fix eSIM activation failures, transfer errors, no service, and QR scan issues on iPhone and Android with this 2026 troubleshooting guide."
image: "/img/esim/esim-troubleshooting-guide.jpg"
keywords: ["eSIM troubleshooting", "eSIM activation failed", "eSIM no service", "eSIM transfer error", "eSIM cross-platform transfer", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "eSIM carrier lock", "eSIM stuck on activating"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-26T00:00:00Z
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


> **Editor's Note:** Roami runs the support desk behind this reference. When a traveler hits a specific on-screen error — "Activation failed," "No Service," "Cellular Plan Cannot Be Added," restore error 4013/4014 — this is the page our own team opens to decode it. Every entry below maps one exact error message to its real cause and a concrete fix, tested across iOS 18 and Android 14/15 as of August 2026.

> **Wrong page?** If your question is "does my phone even support eSIM" — China/Hong Kong model, carrier lock, missing EID — that's a hardware question, not an error. Head to our [eSIM compatibility error guide](/faq/esim-activation-errors-troubleshooting-guide/) instead. This page assumes your phone can use eSIM and the problem is a specific error message.

## Quick Diagnostic Flow – Find Your Error in 10 Seconds

Use this decision map to jump straight to the fix for the exact message on your screen.

| What you see / experience | What's likely broken | Urgency | Jump to fix |
|---------------------------|----------------------|---------|-------------|
| **QR code won't scan / says invalid** | Expired or damaged QR code | Low | [Section 3](#3-esim-qr-code-invalid-or-expired) |
| **"Unable to Activate" or "Activation failed"** | Network timeout or server error | Medium | [Section 1](#1-esim-activation-failed-or-unable-to-activate) |
| **"No Service" after install** | Data Roaming off or APN missing | High | [Section 2](#2-esim-no-service-after-installation) |
| **Full signal bars but no internet** | APN misconfigured | High | [Section 8](#8-esim-no-data-connection-after-activation-apn) |
| **"Cellular Plan Cannot Be Added"** | Too many stored eSIMs or hardware restriction | Medium | [Section 5](#5-esim-cellular-plan-cannot-be-added) |
| **"eSIM already in use"** | Profile still bound to old device | High | [Section 4](#4-esim-already-in-use-or-bound-to-another-device) |
| **Confirmation code popup** | Profile requires a PIN | Low | [Section 6](#6-esim-confirmation-code-required) |
| **"SIM not supported"** | Phone is carrier-locked | High | [Section 7](#7-esim-sim-not-supported-carrier-locked-device) |
| **Stuck on "Activating" for >10 minutes** | Download stalled | Medium | [Section 9](#9-esim-stuck-on-activating) |
| **Dual SIM: one line has no signal** | Routing conflict | Medium | [Section 10](#10-dual-esim-one-line-shows-no-service) |
| **Transferred eSIM to new phone, it fails** | Cross-platform transfer not supported | High | [Section 11](#11-esim-transfer-failed) |
| **iPhone restore error 4013/4014** | Hardware/firmware issue, not eSIM | High | [Section 12](#12-iphone-esim-restore-error-4013-or-4014) |
| **"Profile expired"** | QR code timed out | Low | [Section 13](#13-esim-profile-expired) |
| **Roaming not working abroad** | Data Roaming toggle off | High | [Section 14](#14-esim-data-roaming-not-working) |
| **Accidentally deleted the eSIM** | User error | High | [Section 15](#15-esim-deleted-by-mistake) |
| **MDM blocks eSIM changes** | Work device policy | Medium | [Section 16](#16-mdm-or-enterprise-restrictions-block-esim) |
| **eSIM disappeared after restart** | iOS/Android software glitch | High | [Section 17](#17-esim-disappeared-after-restart) |
| **Wi-Fi Calling works but eSIM data doesn't** | Routing conflict between Wi-Fi and cellular | Medium | [Section 18](#18-wi-fi-calling-works-but-esim-data-doesnt) |
| **Physical SIM inserted, eSIM not working** | SIM tray conflict | High | [Section 19](#19-esim-vs-physical-sim-conflict) |
| **Apple Watch eSIM not connecting** | Watch pairing or carrier issue | Medium | [Section 20](#20-apple-watch-esim-not-working) |


## Quick Summary – At-a-Glance Reference Table

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
| eSIM disappeared after restart | iOS/Android software glitch | Check settings, re-add profile (Section 17) |
| Wi-Fi Calling works but data doesn't | Routing conflict | Disable Wi-Fi Calling temporarily (Section 18) |
| Physical SIM inserted, eSIM stops working | Tray/reader conflict | Remove physical SIM, restart (Section 19) |
| Apple Watch eSIM not connecting | Pairing or carrier issue | Re-pair watch, contact carrier (Section 20) |


## 1. eSIM Activation Failed or "Unable to Activate"

**Cause:** Almost always an unstable Wi-Fi connection or a temporary carrier (SM-DP+) server error, not a problem with your phone. The SM-DP+ (Subscription Manager - Data Preparation Plus) is the secure server that delivers your eSIM profile to your device — if it's unreachable, activation fails.

**Fix:**
1. Move to a stable Wi-Fi or cellular data connection.
2. Toggle Airplane Mode on and off to refresh the baseband.
3. If the error repeats, delete the pending eSIM under `Settings > Cellular`, restart, and scan the QR code again.

**iOS 18 specific:** On iOS 18 the message may read "Unable to Complete Activation" with a Retry button. Tap Retry first — iOS 18's improved activation flow often resolves the issue without a full reinstall.

---

## 2. eSIM "No Service" After Installation

**Cause:** The profile installed but the phone has not registered with a local network — usually because Data Roaming is off or the APN is missing.

**Fix:**
1. Turn **Data Roaming ON** for the eSIM line.
2. Under `Settings > Cellular > [your eSIM] > Network Selection`, turn off "Automatic", manually select a carrier, wait for it to fail, then switch back to "Automatic" to force re-registration.
3. If there is still no data, check the APN (Section 8).

---

## 3. eSIM QR Code "Invalid" or "Expired"

**Cause:** eSIM QR codes are single-use and time-limited. The code was either already used or has expired.

**Fix:** Contact your eSIM provider and ask them to re-issue a new QR code, then scan it immediately.

**If you're scanning from your phone screen:** Save the QR code image to Photos first, then in Settings > Cellular > Add eSIM, choose "Use QR Code" and tap "Choose Photo" to select the saved image. This avoids the "can't scan your own screen" problem.

---

## 4. "eSIM Already in Use" or "Bound to Another Device"

**Cause:** The profile was never released from the old device, so the carrier still associates it with that phone.

**Fix:**
1. On the old device, delete the eSIM under `Settings > Cellular`.
2. Wait about five minutes and try again on the new device.
3. If the old device is lost or broken, contact your carrier and ask them to force-release the profile from their side.

---

## 5. eSIM "Cellular Plan Cannot Be Added"

**Cause:** The phone has reached its limit of stored eSIM profiles (typically 8–10, depending on the model), or the device is a mainland-China model without eSIM hardware.

**Fix:** Remove unused eSIMs under `Settings > Cellular`, then add the new one. If your device was bought in mainland China, it uses two physical SIM slots and cannot add an eSIM — for how to identify a China or Hong Kong model and confirm your phone has the hardware, see our [eSIM compatibility error guide](/faq/esim-activation-errors-troubleshooting-guide/).

---

## 6. eSIM Confirmation Code Required

**Cause:** Some eSIM profiles have a mandatory confirmation code that is required before the profile downloads. This is a 4-8 digit PIN that verifies your identity.

**Fix:** Look for a 4–8 digit code in the email your carrier sent with the QR code. If you cannot find it, contact the carrier.

**Common places to find the confirmation code:**
- Subject line of the activation email
- Near the bottom of the email, under "Activation Details"
- In the carrier app under "My Plans" > "Details"

---

## 7. eSIM "SIM Not Supported" — Carrier-Locked Device

**Cause:** The phone is locked to another carrier and cannot accept a profile from a different provider.

**Fix:** Check `Settings > General > About > Carrier Lock`. If it does not say "No SIM restrictions", contact your home carrier to request an unlock. For a full walkthrough of carrier locks — how to check status, US carrier unlock policies, and how to get the device unlocked — see our [hardware & compatibility guide](/faq/esim-activation-errors-troubleshooting-guide/).

---

## 8. eSIM No Data Connection After Activation (APN)

**Cause:** The Access Point Name (APN) was not configured automatically, so the phone has no route to the data network.

**Fix:**
1. Go to `Settings > Cellular > Cellular Data Network`.
2. Enter the APN value from your eSIM provider's website (for example, `globaldata` for Airalo).
3. Most travel eSIMs auto-configure the APN, so confirm the correct value with your provider.

**Common APN values by provider (if auto-config fails):**

| Provider | APN | Username | Password |
|----------|-----|----------|----------|
| Roami | internet | (blank) | (blank) |
| Airalo | globaldata | (blank) | (blank) |
| Holafly | hola | (blank) | (blank) |
| Nomad | nbdata | (blank) | (blank) |
| Ubigi | ubigi | (blank) | (blank) |
| Google Fi | h2g2 | (blank) | (blank) |
| T-Mobile (US) | fast.t-mobile.com | (blank) | (blank) |
| AT&T (US) | nxgen | (blank) | (blank) |
| Verizon (US) | vzwinternet | (blank) | (blank) |
| EE (UK) | everywhere | (blank) | (blank) |
| O2 (UK) | mobile.o2.co.uk | web | web |
| Vodafone (UK) | internet | (blank) | (blank) |
| Three (UK) | three.co.uk | (blank) | (blank) |

---

## 9. eSIM Stuck on "Activating"

**Cause:** The profile download stalled, often due to a weak signal or a busy activation server.

**Fix:**
1. Ensure you are on a stable network.
2. Toggle Airplane Mode on and off.
3. If it stays stuck for more than 10 minutes, delete the eSIM and re-install it from the QR code.

---

## 10. Dual eSIM: One Line Shows "No Service"

**Cause:** With two active eSIMs, incoming-call and data routing can conflict, leaving one line without service. This is a common **dual eSIM signal issue** that affects users with two active lines.

**Fix:**
1. Under `Settings > Cellular`, confirm which line is set for **Cellular Data** and which for **Default Voice Line**.
2. Toggle each line off and back on.
3. For a deeper fix, see our **[Dual eSIM not working? 12 fixes for iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** guide.

---

## 11. eSIM Transfer Failed

**Cause:** There is no built-in cross-platform eSIM transfer, and your carrier may not support app-based transfer.

**Fix:** Ask your carrier to re-issue the eSIM as a new QR code and scan it on the new device. After the transfer, WhatsApp, iMessage, and SMS two-factor codes keep working because your number has not changed. For full step-by-step instructions, see our **[eSIM transfer guide](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## 12. iPhone eSIM Restore Error 4013 or 4014

**Cause:** These errors indicate a hardware or firmware problem during a software restore, not an eSIM issue. They are often caused by a faulty USB cable or outdated computer software.

**Fix:** Try a different cable and USB port, update your computer's operating system, then attempt the restore again. Contact Apple Support if the error persists.

---

## 13. eSIM "Profile Expired"

**Cause:** The eSIM QR code or activation code was time-limited and has expired.

**Fix:** Contact your eSIM provider and ask for a new QR code, then activate it promptly.

---

## 14. eSIM Data Roaming Not Working

**Cause:** Data Roaming is turned off for the travel eSIM line, so it cannot connect to the local network.

**Fix:** Go to `Settings > Cellular > [your eSIM]` and turn **Data Roaming ON**. This is required for most travel eSIMs to work abroad.

---

## 15. eSIM Deleted by Mistake

**Cause:** Deleting an eSIM removes the profile from the phone but does not cancel the plan.

**Fix:**
- For postpaid carrier eSIMs, contact the carrier — they can usually re-issue the QR code.
- For travel eSIMs (Roami, Airalo, and similar), deletion is usually permanent, so you will need to buy a new plan.
- Always keep a backup of your original activation email and QR code.

---

## 16. MDM or Enterprise Restrictions Block eSIM

**Cause:** On a managed (work) device, a Mobile Device Management policy such as `AllowESIMModification` can block adding or removing eSIMs.

**Fix:** Contact your IT administrator to enable eSIM changes, or use an unmanaged device.

---

## 17. eSIM Disappeared After Restart

**Symptom:** You restarted your phone and the eSIM is no longer listed under Settings > Cellular. It's gone.

**Cause:** A software glitch on iOS or Android can sometimes cause eSIM profiles to become hidden or unreadable after a restart, especially after an OS update. The profile is still on the device, but the system failed to mount it.

**Fix:**
1. **iPhone:** Go to Settings > General > About and scroll down to "Available SIM" or "Digital SIM". If the eSIM appears there but not in Cellular, restart the phone again.
2. **iPhone:** If restarting doesn't work, go to Settings > Cellular > Add eSIM. Sometimes the phone will detect the existing profile and offer to re-add it without a new QR code.
3. **Android (Samsung):** Go to Settings > Connections > SIM Manager. The eSIM may show as "Inactive". Tap it and toggle it on.
4. **Android (Pixel):** Go to Settings > Network & Internet > SIMs. If the eSIM is missing, tap "Add Carrier" — the phone may detect the existing profile.
5. If none of these work, contact your carrier and request a new QR code. The old profile may be corrupted.

**Prevention:** Before restarting, ensure all eSIM lines are toggled OFF, then restart, then toggle them back ON. This reduces the chance of the system losing track of the profile.

---

## 18. Wi-Fi Calling Works but eSIM Data Doesn't

**Symptom:** You have Wi-Fi Calling active on your home line, but your travel eSIM has no data connection. Or, the eSIM works on Wi-Fi but not on cellular.

**Cause:** A routing conflict between Wi-Fi Calling and cellular data. When Wi-Fi Calling is active, the phone may prioritize the Wi-Fi network for all communications, including data, and fail to route cellular data correctly through the eSIM.

**Fix:**
1. Temporarily turn off Wi-Fi Calling on your home line: Settings > Cellular > [home line] > Wi-Fi Calling > toggle OFF.
2. Toggle Airplane Mode on and off to force the phone to re-register on the cellular network.
3. Test the eSIM data connection. If it works, you can turn Wi-Fi Calling back ON — the routing should now be correct.
4. If the problem recurs, check that your home line has **Data Roaming OFF** and the travel eSIM has **Data Roaming ON**.

**Alternative:** On iPhone, go to Settings > Cellular > Cellular Data and ensure the travel eSIM is selected. Then enable "Allow Cellular Data Switching" — this allows the phone to use the travel eSIM for Wi-Fi Calling data even if the home line is the voice line.

---

## 19. eSIM vs Physical SIM Conflict

**Symptom:** You insert a physical SIM card into your phone, and your previously working eSIM suddenly shows "No Service" or disappears entirely from Settings.

**Cause:** This is a known behavior on carrier-locked devices. When a locked iPhone detects a physical SIM from a different carrier, it may disable the eSIM slot to prevent unauthorized use. On some Android devices, inserting a physical SIM can also cause the system to prioritize the physical SIM over the eSIM for all functions.

**Fix:**
1. Remove the physical SIM card from the tray.
2. Restart your phone.
3. The eSIM should reappear in Settings > Cellular (iPhone) or Settings > Connections > SIM Manager (Android).
4. If the eSIM reappears but still shows "No Service", toggle Data Roaming ON for the eSIM line.
5. If you need both the physical SIM and eSIM to work simultaneously, contact your carrier to unlock your device.

> **Alternative:** Some users report that toggling the eSIM line off and back on (without removing the physical SIM) resolves the conflict. Try this first before removing the physical SIM.

---

## 20. Apple Watch eSIM Not Working

**Symptom:** You've set up cellular on your Apple Watch, but it shows "No Service" or "Searching" — or the eSIM plan isn't appearing in the Watch app at all.

**Cause:** Apple Watch eSIM activation requires carrier support for the watch's specific plan type, and setup requires your iPhone to be nearby with a stable internet connection.

**Fix:** Check that your carrier supports Apple Watch eSIM, then unpair and re-pair the watch, keeping your iPhone nearby throughout. If it still won't activate, contact your carrier with the watch's **EID** and **IMEI** so they can provision it manually. For a full walkthrough — including which iPad and Apple Watch models support eSIM — see our [iPad and Apple Watch eSIM guide](/faq/ipad-apple-watch-esim-support-guide/).

---

## Error Code Reference – What Do These Numbers Mean?

| Error Code | Platform | Meaning | Fix |
|------------|----------|---------|-----|
| **4013** | iPhone (restore) | Hardware/firmware failure during restore | Change cable, USB port, update macOS/iTunes |
| **4014** | iPhone (restore) | Similar to 4013; usually a USB communication issue | Same as above |
| **-8** | Android (activation) | Network timeout | Wait and retry, or switch Wi‑Fi |
| **-100** | Android (QR scan) | QR code format unsupported | Use manual entry |
| **0xE8000001** | iPhone (activation) | Carrier server unreachable | Retry after 5 minutes or use manual entry |
| **"eSIM configuration not supported"** | Android (Samsung) | Carrier does not support eSIM on that model | Check with carrier |
| **"Invalid SM‑DP+ address"** | Both | Manual entry address is wrong | Double‑check the address from your provider |
| **"LPA error -1"** | Android | Generic LPA (Local Profile Assistant) error | Restart phone, retry. If persists, use a different eSIM app. |
| **"EID mismatch"** | Both | The profile is tied to a different device | Contact carrier to release the profile (Section 4) |
| **"No EID" when dialing `*#06#`** | Both | Device doesn't support eSIM | Your phone lacks eSIM hardware — see our [compatibility guide](/faq/esim-activation-errors-troubleshooting-guide/) |
| **"eSIM management not available"** | Android (OnePlus) | Oxygen OS bug | Update to latest Oxygen OS version |
| **"Profile cannot be deleted"** | iPhone | eSIM stuck in pending state | Restart iPhone, then try deleting again. If stuck, contact carrier. |
| **-1** | Both | Generic activation failure | Restart phone, ensure network connectivity, try again |
| **-2** | Android | Invalid activation code | Re-enter the code or request a new one from carrier |


## 7 Deadly Mistakes That Break Your eSIM – And How to Avoid Them

These are the most common user errors that turn a working eSIM into a brick. Avoid them at all costs.

| Mistake | What Happens | How to Avoid |
|---------|--------------|--------------|
| **Deleting the eSIM to "fix" a connection issue** | The profile is permanently removed — you lose all remaining data and must buy a new plan | Never tap "Delete eSIM" unless the plan is fully expired. Deleting does not "refresh" — it destroys. |
| **Scanning the QR code with the Camera app** | The camera recognizes the code but does nothing — no profile installs | Always open Settings > Cellular > Add eSIM first — never use the standalone Camera app. |
| **Installing at the airport with weak Wi-Fi** | Download cuts out mid-install, corrupting the profile | Install at home on your own stable Wi-Fi before you leave. |
| **Waiting until you land to install** | You arrive with no Wi-Fi and can't download the profile | Install the profile before departure (it sits inactive until you turn on Data Roaming). |
| **Forgetting to turn on Data Roaming for the eSIM** | Full signal bars but zero internet | After landing, go to Settings > Cellular > [your eSIM] and toggle Data Roaming ON. |
| **Resetting network settings thinking it will "refresh" the eSIM** | Network reset does not delete eSIMs, but it removes Wi-Fi passwords and Bluetooth pairings — you lose all saved networks | Only reset network settings as a last resort, and know that it won't fix eSIM activation issues. |
| **Turning off the eSIM line instead of just disabling Data Roaming** | The eSIM is disabled entirely and won't register when you re-enable it | Toggle off Data Roaming, not the entire line. Keep the line ON but roam OFF when not in use. |


## Combination Symptoms – When You Have Multiple Problems

Sometimes you don't have just one issue — you have two or three at once. Here's how to diagnose combination symptoms:

| Symptom Combination | What's Actually Happening | Fix Order |
|---------------------|---------------------------|-----------|
| **QR code scans but then "Activation failed"** | QR code is valid, but the download server is unreachable | Fix the network first (Section 1), then re-scan |
| **eSIM shows signal bars but no data AND "No Service" on home line** | APN is missing AND you have a dual-SIM routing conflict | Fix APN first (Section 8), then fix dual-SIM routing (Section 10) |
| **Transfer worked but new phone has "No Service"** | Profile transferred but didn't register on the new network | Delete the eSIM from the old phone, then restart the new phone (Section 4 + Section 2) |
| **Wi-Fi Calling works but eSIM has no data AND home line has roaming charges** | Multiple routing conflicts plus Data Roaming left ON on home line | Turn off home line Data Roaming, fix Wi-Fi Calling conflict (Section 18), then check APN |
| **eSIM disappeared after restart AND "Cellular Plan Cannot Be Added"** | Profile is corrupted AND storage is full | Remove unused eSIMs first (Section 5), then try re-adding (Section 17) |

**General rule:** Fix **network issues first** (Wi-Fi, Data Roaming, APN), then **profile issues** (QR code, activation), then **device-specific issues** (carrier lock, MDM). Don't try to fix everything at once — work through the symptoms one at a time.


## Device‑Specific Menu Paths – Where "Add eSIM" Lives on Each Phone

The fix for most errors is the same, but the menu path to reach the eSIM controls varies by brand. Here are the exact paths plus the error quirks that only show up on specific devices.

### iPhone (iOS 16–18)
- **"Add eSIM" grayed out** – your iPhone may be carrier‑locked. Check Settings > General > About > Carrier Lock; for the full carrier-lock fix, see our [compatibility guide](/faq/esim-activation-errors-troubleshooting-guide/).
- **Quick Transfer fails** – make sure both phones are on the same Apple ID, have Bluetooth on, and are within 10cm of each other.
- **After iOS update, eSIM shows "No Service"** – go to Settings > Cellular > tap the eSIM > toggle "Turn On This Line" off and back on. Also check that Data Roaming is still ON.
- **eSIM disappeared after iOS update** – see Section 17. This is more common on iOS than Android after major updates.
- **iOS 18 specific:** The "Add eSIM" flow has been redesigned with a more prominent manual entry option. If you're on iOS 18 and the QR code won't scan, the manual entry button is now easier to find at the bottom of the screen.

### Samsung Galaxy (One UI 5, 6, 6.1, 7)
- **Menu path varies by One UI version:**
  - **One UI 5 (Android 13):** Settings > Connections > SIM Manager > Add eSIM
  - **One UI 6/6.1 (Android 14):** Settings > Connections > SIM Manager > Add eSIM (same path)
  - **One UI 7 (Android 15):** Settings > Connections > SIM Manager > Add Mobile Plan
- **QR code scan fails** – try manual entry (tap "Enter activation code manually"). Samsung often requires the SM‑DP+ address and activation code separately.
- **Dual SIM conflict** – if you have a physical SIM and eSIM, check that the eSIM is set as the data SIM in SIM Manager.

### Google Pixel (Android 13/14/15)
- **"Download a SIM instead?"** – this option appears at the bottom of the SIM settings screen. If you don't see it, your Pixel may be carrier‑locked.
- **eSIM not appearing after scan** – restart the phone. Pixel sometimes needs a reboot after profile download.
- **APN settings not saving** – on Pixel, APN settings are under Network & Internet > SIMs > [your eSIM] > Access Point Names. If they don't save:
  1. Add a new APN with a **different name** (e.g., "Airalo 2" instead of "Airalo").
  2. Save it, then select it manually.
  3. Toggle Airplane Mode on and off to force the new APN to take effect.
- **eSIM disappears after restart on Pixel** – see Section 17. Pixel users report this more frequently than Samsung users.

### OnePlus (Oxygen OS 13/14)
- **Menu path:** Settings > Wi-Fi & Network > SIM & Network > Add eSIM
- **Common issue:** OnePlus devices sometimes show "eSIM not available" after an Oxygen OS update. Fix: Go to Settings > System > System Update and install the latest patch.
- **APN settings:** Located under Settings > Wi-Fi & Network > SIM & Network > [eSIM] > Access Point Names.

### Xiaomi (MIUI/HyperOS)
- **Menu path:** Settings > SIM Cards & Mobile Networks > Add eSIM
- **APN settings:** Located under Settings > SIM Cards & Mobile Networks > [eSIM] > Access Point Names.

### Oppo/Realme (ColorOS)
- **Menu path:** Settings > Mobile Network > Add eSIM

**Not sure whether your exact model has eSIM hardware at all** (China-market Xiaomi, Huawei, carrier-disabled Samsung A-series)? That's a compatibility question — see our [hardware & compatibility guide](/faq/esim-activation-errors-troubleshooting-guide/), which covers model-by-model support.


## Advanced Scenario: eSIM Works at Home but Not Abroad

**Symptom:** You installed the eSIM at home, it shows signal bars, but when you land at your destination, there's no service.

**Root cause:** The eSIM profile was activated while you were on your home network, and it hasn't registered with the destination network.

**Fix:**
1. Turn off the eSIM line (`Settings > Cellular > toggle off`).
2. Wait 10 seconds, then turn it back on.
3. Go to Network Selection, turn off "Automatic", manually select a network that your provider partners with (ask your provider for the partner list).
4. If it fails, toggle Data Roaming off and on again.
5. Restart the phone.

If this still doesn't work, contact your provider — your eSIM plan may not actually include the country you're in, or there may be a roaming agreement issue.


## Advanced Scenario: eSIM Works on One Carrier but Not Another

**Symptom:** You have one eSIM that works fine, but when you try to add a second eSIM from a different carrier, it fails or shows "No Service."

**Root cause:** Some phone models (especially older ones) have limitations on which carrier profiles can coexist. This is more common on Android devices with older modem firmware.

**Fix:**
1. Check that your phone supports dual eSIM (iPhone 13 and newer, Pixel 7 and newer, Samsung S23 and newer).
2. If you have a physical SIM inserted, try removing it — some phones limit the number of active profiles when a physical SIM is present.
3. Update your phone's firmware (carrier settings updates often fix this).
4. Contact the second carrier and ask if their eSIM profile supports dual-SIM coexistence.


## When to Contact Your eSIM Provider vs. Your Phone Manufacturer

| Problem | Contact |
|---------|---------|
| QR code expired / invalid | eSIM provider |
| "Activation failed" repeatedly | eSIM provider |
| No data after APN configuration | eSIM provider |
| Device shows "No Service" after landing | eSIM provider (check roaming agreement) |
| eSIM not showing up in settings | Phone manufacturer (if software bug) or carrier lock issue |
| Hardware issues (camera, screen, battery) | Phone manufacturer |
| Carrier lock / unlock | Your home carrier |
| MDM restriction | Your IT department |
| eSIM disappeared after restart | Both — try the fixes in Section 17, then contact provider |
| "eSIM already in use" | eSIM provider (to force-release the profile) |
| Apple Watch eSIM not connecting | Carrier (for provisioning) or Apple Support (for pairing issues) |


## Frequently Asked Questions

**Q1: Will deleting an eSIM cancel my plan?**
No. Deleting the eSIM only removes the profile from the phone. You must contact the carrier separately to cancel the plan.

**Q2: Can I recover a deleted eSIM?**
For postpaid carrier eSIMs, yes — the carrier can re-issue the profile. For travel eSIMs, deletion is usually permanent and requires a new purchase.

**Q3: Why does my eSIM work on Wi-Fi but not on cellular?**
This is almost always an APN or Data Roaming issue. Follow Section 8 and Section 14.

**Q4: Does an eSIM drain my battery faster?**
No. Running two active lines at once can use slightly more power, but a single eSIM does not drain the battery.

**Q5: How many eSIMs can I store on my phone?**
Typically 8–10 profiles on iPhone and most Android devices. You can store many more but only have two active at a time (dual‑SIM).

**Q6: Why does my eSIM keep losing signal?**
This can be due to network congestion, weak coverage, or a software glitch. Try toggling Airplane Mode, restarting, or manually selecting a network.

**Q7: I see "Activation Required" on my eSIM after a restart – what does that mean?**
The phone lost the connection to the carrier's activation server. Reboot the phone and ensure you have a network connection. If it persists, delete and re‑install the eSIM.

**Q8: What if my carrier says they don't support eSIM?**
You can still use travel eSIM providers like Roami, Airalo, or Holafly — they work independently of your home carrier and don't require carrier support.

**Q9: My eSIM transferred to my new iPhone but I can't make calls – only data works.**
Check that the eSIM is set as the Default Voice Line. Also, ensure your carrier supports VoLTE for that line.

**Q10: The QR code scan works but the download takes forever – is that normal?**
No. It should take 1–2 minutes. If it takes longer, your Wi‑Fi is too slow. Switch networks or use manual entry.

**Q11: My eSIM is active but I can't send or receive SMS.**
Some travel eSIMs are data‑only and do not support SMS. If you need SMS, buy a plan that explicitly includes a phone number.

**Q12: I accidentally reset my network settings – now my eSIM is gone.**
Network settings reset does not delete eSIM profiles. Your eSIM should still be there. Go to Settings > Cellular and re‑enable the line. If it's gone, you may have accidentally deleted it — then see Section 15.

**Q13: What's the difference between deleting an eSIM and turning it off?**
Turning off an eSIM keeps the profile on the phone but disables the line. You can turn it back on anytime. Deleting an eSIM permanently removes the profile — you cannot recover it without a new QR code. Only delete when the plan is fully expired.

**Q14: Can a VPN interfere with eSIM activation?**
Yes — VPNs can interfere with the activation server connection. Turn off your VPN before activating an eSIM.

**Q15: My eSIM plan says "unlimited" but I have no data after using 5GB.**
Many "unlimited" plans have a Fair Usage Policy (FUP) that throttles speeds after a certain data threshold. Check your provider's terms — you may need to buy a top-up plan for more high-speed data.

👉 **Troubleshooting done?** Pick a [USA eSIM plan](/united-states-esim/) or [Europe eSIM plan](/europe-esim/) to get back online.

---

## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
