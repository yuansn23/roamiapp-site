---
title: "Dual eSIM Not Working? 12 iPhone Fixes"
h1_title: "How to Fix Dual eSIM Not Working on iPhone: 12 Solutions"
description: "Dual eSIM not working? Fix 12 iPhone issues: incoming call routing, VoLTE setup, battery drain, and carrier lock checks. Step-by-step guide for iPhone 16, 16."
keywords: ["dual eSIM not working", "iPhone dual SIM no service", "dual eSIM signal issue", "eSIM carrier lock", "eSIM troubleshooting", "eSIM activation failed", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "eSIM no service"]
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

> **Key Takeaways**  
> - **VoLTE or plan limits** are the most common reason a line can't make or receive calls in 2026.  
> - **Incoming call routing issues** are often fixed by toggling Wi‑Fi Calling off and back on.  
> - iPhones are **dual standby, not dual active** – “No Service” on the other line during calls is normal.  
> - Check **Carrier Lock** in Settings (`No SIM restrictions`) if you can’t add a second eSIM.  
> - **Dual eSIM** battery drain can be reduced by disabling 5G on the weaker signal line.

Using two phone numbers on one iPhone is incredibly convenient – but it comes with hidden pitfalls. From VoLTE and line-ordering issues to incoming call routing failures, this guide covers everything you need to know to run **dual eSIM** or **eSIM + physical SIM** flawlessly on iPhone 16 and earlier models with iOS 18. For a complete walkthrough of basic eSIM setup, see our **[iPhone 16 eSIM Complete Guide](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. This dual eSIM troubleshooting guide follows the latest [GSMA eSIM specifications](https://www.gsma.com/esim/) and has been tested on iOS 18. Apple's official [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) documentation provides additional background on compatibility.

---

## Quick Diagnostic Index (Dual eSIM Specific)

| Symptom | Most Likely Cause | Fix Section |
|---------|-------------------|--------------|
| Second eSIM shows “No Service” but first works | VoLTE or line-ordering issue | #2 |
| One number can call out but cannot receive calls | Incoming call routing mismatch | #3 |
| During a call, the other line says “No Service” | iPhone uses one data network at a time | #4 |
| Can’t add second eSIM – “Carrier lock” error | Device locked to first carrier | #5 |
| Dual eSIM works but drains battery faster | Both lines actively searching | #6 |
| eSIM + physical SIM: physical SIM not recognized | SIM tray issue or incompatible card | #7 |

---

## 1. What Are Your Dual eSIM Options on iPhone?

Starting with iPhone XS, XR and all newer models (including iPhone 16), Apple supports dual eSIM (two eSIMs active simultaneously) on iPhone 13 and later. Non‑US models also support one eSIM plus one physical nano‑SIM. Mainland China dual‑physical‑SIM models have no eSIM support except the iPhone 16.

Your **dual eSIM** configuration depends on your iPhone model and region:

| Configuration | Supported Models | Max Active Lines |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 and newer (including all iPhone 16 models) | 2 |
| **1 eSIM + 1 physical nano‑SIM** | All iPhones with SIM tray (non‑US models, and US models before iPhone 14) | 2 |
| **1 physical SIM only** | Older iPhones (pre‑XS) | 1 |
| **2 physical SIMs** | Mainland China, Hong Kong, Macau specific dual‑SIM tray models (e.g., iPhone 16 China version) | 2 |

For a complete list of compatible iPhones, [check your iPhone's dual eSIM compatibility](/compatibility/).

> 📱 **iPhone 16 & US iPhone 16 series**: No physical SIM tray – only dual eSIM. If you run into activation problems on these models, check our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)** for advanced fixes.

---

## 2. Why One eSIM Line Shows "No Service" for Calls

If one of your dual eSIM lines can use data but cannot make or receive calls, the most common causes in 2026 are:

- **VoLTE / VoNR is not enabled** for that line. Some carriers disable voice-over-data roaming on eSIM plans, which leaves the line data-only.
- **Line ordering**. iOS routes voice to your *default voice line*; a secondary line set to data-only cannot place or receive calls.
- **The plan does not include talk**. Some travel eSIMs are data-only by design and have no voice service at all.

> **Note:** Legacy 3G/CDMA networks have been retired in the US and Japan. Verizon and US Cellular shut down CDMA in 2022-2024, and au/KDDI ended 3G in 2022. In 2026, a line with "no service for voice" is almost always a VoLTE, plan, or line-ordering issue - not CDMA.

### Fixes
- **Set the affected line as your default voice line**: `Settings > Cellular > Default Voice Line`.
- **Turn on VoLTE**: `Settings > Cellular > [line] > Voice & Data`, then select LTE or 5G (VoLTE/VoNR).
- **Confirm the plan includes talk**. If it is a data-only travel eSIM, keep your home line as the voice line and use the eSIM for data only.
- **Contact your carrier** to verify voice-over-LTE/5G is enabled for your number while roaming.

For a deeper comparison of US carrier networks, see our **[US carrier network comparison](/carriers/united-states-esim-carrier-guide/)**.

---

## 3. One Number Can Call Out but Not Receive – Call Routing Issue

**Symptom**: Line A works fine. Line B can make outgoing calls, but incoming calls to B go straight to voicemail or ring as “unavailable”.

**Root cause**: A network call-routing mismatch. When Line B recently switched between 5G and LTE, or used Wi-Fi Calling, the carrier's network can still try to route incoming calls through the wrong path.

**Analogy:** Imagine the carrier has an old address book that still lists your phone at your previous house. When someone calls, they go to the wrong place. Toggling Wi‑Fi Calling updates the address book.

### Quick fix (user‑side)
1. Turn off **Wi‑Fi Calling** temporarily: `Settings > Cellular > Line B > Wi‑Fi Calling` → OFF.
2. Restart iPhone.
3. Turn Wi‑Fi Calling back on.

### Carrier‑side fix (call support)
Ask your carrier to **reset call routing** or **refresh the line** for this number. This usually takes effect shortly after the carrier reprovisions the line. For more call-routing and other call-related issues, see **[Fix 14 in our troubleshooting guide](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Prevent recurrence
- Avoid rapidly switching between 5G/LTE (keep one mode for at least a few hours).
- If you travel frequently, keep **Data Roaming** OFF for the line that doesn't need data.

---

## 4. During a Call, the Other Line Says “No Service” – Normal Behavior

**Symptom**: You're on a call using Line A. When you check, Line B shows “No Service”.

**Explanation**: iPhones are **dual standby, not dual active**. Only one line can maintain a cellular connection at a time. While on a call, the other line is temporarily unreachable. As soon as the call ends, both lines reconnect. This is **not a dual eSIM failure** – it's by design.

### What you can do:
- **Enable Wi‑Fi Calling on both lines** – then the idle line may use Wi‑Fi to receive calls while you're on the other line. Apple's [dual standby documentation](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) explains this in more detail.
- **Enable “Allow Cellular Data Switching”** – under `Settings > Cellular > Cellular Data`. This lets the non‑data line use the data line's connection for Wi‑Fi Calling.

> 📌 Note: Some carriers do not support Wi‑Fi Calling simultaneously on both lines. Check with your carrier.

---

## 5. Dual eSIM Not Working? Check Carrier Lock First

If you cannot add a second eSIM or physical SIM:
- Your iPhone might be **carrier‑locked** to the first carrier.
- To check: `Settings > General > About` → scroll to **Carrier Lock**. It must say “No SIM restrictions”.

### What to do if locked:
- Contact your carrier to request an unlock. US carriers must unlock after device paid off.
- If unlocked but still not working, you may need to reset network settings: `Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings`. (Warning: this forgets Wi‑Fi passwords.)

Once unlocked, you can also move your eSIM between iPhone and Android – see our **[eSIM Cross‑Platform Transfer 2026 guide](/faq/how-to-transfer-esim-between-iphone-and-android/)** for step‑by‑step instructions.

---

## 6. Dual eSIM Battery Drain: How to Reduce

Running **dual eSIM** or even eSIM + physical SIM can increase battery consumption because both lines stay actively connected to the network. Here's how to minimize drain while keeping both lines active:

| Strategy | Effect |
|----------|--------|
| Set the line with weaker signal to **use LTE only** (not 5G) | Moderate saving |
| Turn off **Data Roaming** on the line not used for data | Saves scanning |
| Disable **5G Standalone** (if your carrier allows) | Helps a lot |
| Use **Low Data Mode** for background apps on the secondary line | Minor saving |
| In very low signal areas, temporarily disable the secondary line | Significant saving |

To disable a line: `Settings > Cellular` → tap the line → toggle off **Turn On This Line**. If you frequently travel internationally, [try Roami's free eSIM trial](/free-esim/) as a battery‑efficient alternative.

---

## 7. Physical SIM Not Recognized (Tray Issues)

**Symptom**: Your nano‑SIM works in another phone but not in your iPhone.

**Common causes**:
- The iPhone is **carrier‑locked** to a different network.
- SIM tray not fully inserted or damaged.
- SIM card is **too old** (pre‑4G) or bent.

**Fixes**:
1. Remove tray, clean contacts with a soft cloth.
2. Reinsert firmly until click.
3. Restart iPhone.
4. If still not recognized, try the SIM in another phone – if it works, your iPhone's SIM reader may be faulty.
5. Replace SIM card at carrier store (free for most postpaid plans).

If you plan to switch entirely to eSIM, refer to our **[iPhone 16 eSIM guide](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** for activation methods.

---

## 8. Special Regional Cases: China, Hong Kong, Macau

Mainland China iPhones (except iPhone 16) have two physical nano‑SIM slots and **no eSIM support at all**. Hong Kong and Macau models typically support eSIM + physical SIM. If you buy a mainland China dual‑physical‑SIM iPhone, you cannot install any eSIM, including international travel eSIMs – this is a hardware limitation.

Apple sells specific dual‑physical‑SIM models in **mainland China**:
- iPhone 16, 17 Pro, 17 Pro Max: **two physical nano‑SIM slots** (no eSIM except Air).
- iPhone 16: **eSIM only** (global, including China).

**Hong Kong and Macau** models:
- Support **eSIM + physical SIM** (like international models) or dual physical SIM depending on model.
- Always verify before buying if you plan to use eSIM travel plans.

> ⚠️ **Important**: If you buy a mainland China dual‑physical‑SIM iPhone, you **cannot install any eSIM** (including international travel eSIMs) – except the iPhone 16. This is a hardware limitation, not a software block.

---

## 9. Dual eSIM for Work & Personal: Best Practices

Many users keep a **work number** (eSIM) and **personal number** (second eSIM or physical SIM). Here's how to set up your **dual eSIM** configuration cleanly:

### Label lines clearly
`Settings > Cellular` → tap a line → `Cellular Plan Label` → choose “Business” or “Personal”, or create custom label.

### Choose default voice & data
- **Default Voice Line**: Which line to use when you dial from the native Phone app (you can still choose per call).
- **Cellular Data**: Which line uses mobile data. Turn on **Allow Cellular Data Switching** so the phone can temporarily use the other line's data if the primary loses signal.

### Separate contacts
- Assign contacts to a specific line: Edit contact → `Preferred Line` → select business or personal.

### Prevent accidental roaming
- Turn off **Data Roaming** for the work line if it has expensive international rates.

---

## 10. Troubleshooting Table – Dual eSIM Scenarios

| Problem | Immediate Step | Long‑Term Fix |
|---------|----------------|----------------|
| Second eSIM never gets signal | Restart iPhone, then toggle off/on line | Confirm the plan is active and the line is enabled |
| Calls go straight to voicemail (no ring) | Disable “Silence Unknown Callers” and call forwarding | Contact carrier to reset call routing |
| Can't receive SMS on second line | Send a test SMS from that line to any number | Ensure line is not data‑only; carrier may need to enable SMS |
| Two eSIMs but both show “No Service” | Airplane mode on/off > check carrier lock | Restore network settings |
| Switched lines and now FaceTime/iMessage won't activate | Go to `Settings > Messages > Send & Receive` – manually select numbers | Sign out of Apple ID and back in |

For additional problems like “eSIM bound to another device” or “restore error 4013”, see our **[full 16‑case troubleshooting library](/faq/esim-deep-troubleshooting-guide-2026/)** .

---

## 11. Frequently Asked Questions

**Q1: Can I use two eSIMs from the same carrier?**  
Yes, as long as your carrier allows multiple eSIM profiles on one account. For example, T‑Mobile US supports up to two eSIMs on the same iPhone. For a full list of compatible iPhone models, check the **[iPhone 16 compatibility table](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**.

**Q2: Will both lines support 5G simultaneously?**  
Yes, on iPhone 13 and newer (including iPhone 16), both lines can be on 5G (dual 5G standby). However, only one line can use 5G data at a time; the other uses 5G for voice fallback (VoNR).

**Q3: My second line works but the first one stopped working after adding it – what happened?**  
You may have accidentally swapped the primary line settings. Go to `Settings > Cellular > Default Voice Line` and set it back.

**Q4: Does dual eSIM drain battery more than eSIM + physical SIM?**  
Generally, dual eSIM consumes slightly less power because there's no physical card reader. But the difference is negligible (within 2‑3%).

**Q5: I'm traveling – can I use a local eSIM for data and keep my home eSIM for calls?**  
Yes, best practice:  
- Set local eSIM as **Cellular Data** line.  
- Keep home eSIM as **Default Voice Line**.  
- Turn off **Data Roaming** on home eSIM to avoid massive charges.  
- Turn on **Allow Cellular Data Switching** so your home line can use the local eSIM's data for Wi‑Fi Calling & MMS.

If you frequently switch between devices while traveling, the **[eSIM cross‑platform transfer guide](/faq/how-to-transfer-esim-between-iphone-and-android/)** will help you move your number seamlessly.

**Q6: Why does the second eSIM sometimes disappear after an iOS update?**  
Rare bug. Go to `Settings > Cellular` → if the line is missing but still shows under “Available SIMs”, tap it and re‑activate. If not, contact carrier to re‑push the profile.

**Q7: Can I use a dual‑SIM setup with an Apple Watch?**  
Yes. Apple Watch can mirror **one** of the iPhone's lines. Choose which line you want on the watch during setup.

**Q8: Where can I find official Apple documentation for dual eSIM?**  
Apple provides two key resources: [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) and [Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086). These cover basic compatibility and setup.

**Q9: How do I recover a deleted eSIM?**  
If you've deleted an eSIM profile, recovery depends on your carrier. For travel eSIMs (Roami, Airalo, etc.), deletion is usually permanent – you'll need to purchase a new plan. For postpaid carrier eSIMs (like Verizon, T‑Mobile, AT&T), contact your carrier – they can often re‑issue a new QR code. Always keep a backup of your original activation email and QR code.

**Q10: How do I configure APN settings if my eSIM has no data?**  
If your eSIM shows signal bars but no data connection, APN settings may need adjustment:
1. Go to **Settings > Cellular > Cellular Data Network**.
2. Fill in the APN fields – check your eSIM provider's website for correct values.
3. Common APN values: `globaldata` (Airalo). Most travel eSIMs auto-configure the APN, so check your provider's website for the exact value.
4. Save and restart your iPhone.

---

## 12. Final Pro Tips for Dual eSIM Users

- **Label your lines** immediately after setting up – it saves endless confusion.
- **Set different ringtones** for each line: `Settings > Sounds & Haptics > Ringtone` → scroll down, you can assign per line.
- **Use Shortcuts automation** to change default voice line based on time (e.g., work hours = business line; evenings = personal).
- **Before selling your device**: Go to `Settings > Cellular`, delete **all** eSIMs, and remove the physical SIM. Then erase all content and settings. For a detailed walkthrough of deleting eSIMs and canceling plans, refer to **[Fix #9 in our troubleshooting guide](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.

---
*Based on Apple official documentation, GSMA standards, and carrier testing. Updated: June 2026.*
## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Apple Support — About eSIM on iPhone](https://support.apple.com/en-us/HT209044)
