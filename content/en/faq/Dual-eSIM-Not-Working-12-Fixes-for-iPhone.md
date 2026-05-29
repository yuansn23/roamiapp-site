---
title: "Dual eSIM Not Working? 12 iPhone Fixes"
description: "Dual eSIM not working? Fix 12 iPhone issues: CDMA limits, T-ADS cache errors, battery drain, and carrier lock checks. Step-by-step guide for iPhone 17, 16."
keywords: ["eSIM troubleshooting", "eSIM activation failed", "eSIM no service", "eSIM transfer error", "Apple eSIM", "iOS 26 eSIM", "iPad eSIM not working", "eSIM APN settings", "eSIM confirmation code", "eSIM profile expired", "eSIM bound to another device", "dual eSIM signal issue", "eSIM DFU error 53", "eSIM carrier lock", "eSIM cross-platform transfer", "dual eSIM not working", "iPhone dual SIM no service"]
date: 2026-05-28T10:00:00Z
lastmod: 2026-05-28T10:00:00Z
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

> **Key Takeaways  **  
> - **CDMA carriers** (Verizon, US Cellular) may prevent dual eSIM voice functionality – switch to a GSM plan.  
> - **T-ADS cache errors** cause incoming call failures – toggle Wi‑Fi Calling off/on to fix.  
> - iPhones are **dual standby, not dual active** – “No Service” on the other line during calls is normal.  
> - Check **Carrier Lock** in Settings (`No SIM restrictions`) if you can’t add a second eSIM.  
> - **Dual eSIM** battery drain can be reduced by disabling 5G on the weaker signal line.

<!-- NEW FEATURED SNIPPET: Question #1 - How to fix dual eSIM not working on iPhone? -->
> **❓ How to fix dual eSIM not working on iPhone?**  
> Fix dual eSIM issues by checking carrier lock status, toggling Wi-Fi Calling to clear T-ADS cache, and switching CDMA plans to GSM/5G-only. If one line shows “No Service,” it may be normal dual standby behavior during calls.

Using two phone numbers on one iPhone is incredibly convenient – but it comes with hidden pitfalls. From CDMA vs GSM conflicts to incoming call routing failures (T‑ADS), this guide covers everything you need to know to run **dual eSIM** or **eSIM + physical SIM** flawlessly on iPhone 17, 16, and earlier models with iOS 26. For a complete walkthrough of basic eSIM setup, see our **[iPhone 17 eSIM Complete Guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**. This dual eSIM troubleshooting guide follows the latest [GSMA eSIM specifications](https://www.gsma.com/esim/) and has been tested on iOS 26.

---

## 📌 Quick Diagnostic Index (Dual eSIM Specific)

| Symptom | Most Likely Cause | Fix Section |
|---------|-------------------|--------------|
| Second eSIM shows “No Service” but first works | CDMA voice fallback incompatibility | #2 |
| One number can call out but cannot receive calls | Carrier T‑ADS cache stale | #3 |
| During a call, the other line says “No Service” | iPhone uses one data network at a time | #4 |
| Can’t add second eSIM – “Carrier lock” error | Device locked to first carrier | #5 |
| Dual eSIM works but drains battery faster | Both lines actively searching | #6 |
| eSIM + physical SIM: physical SIM not recognized | SIM tray issue or incompatible card | #7 |

<!-- NEW FEATURED SNIPPET: Question #3 - Common dual eSIM problems and solutions (list) -->
> **❓ Common dual eSIM problems and solutions**  
> 1. CDMA voice incompatibility – Switch to GSM/5G-only plan  
> 2. T-ADS cache error – Toggle Wi-Fi Calling on/off  
> 3. “No Service” during calls – Normal dual standby behavior  
> 4. Carrier lock – Request unlock from carrier  
> 5. Battery drain – Disable secondary line in low-signal areas  
> 6. Physical SIM not recognized – Clean tray, restart iPhone

---

## 1. What Are Your Dual eSIM Options on iPhone?

**Direct answer:** Starting with iPhone XS, XR and all newer models (including iPhone 17), Apple supports dual eSIM (two eSIMs active simultaneously) on iPhone 13 and later. Non‑US models also support one eSIM plus one physical nano‑SIM. Mainland China dual‑physical‑SIM models have no eSIM support except the iPhone 17 Air.

Your **dual eSIM** configuration depends on your iPhone model and region. Apple provides the following options:

| Configuration | Supported Models | Max Active Lines |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 and newer (including all iPhone 17 models) | 2 |
| **1 eSIM + 1 physical nano‑SIM** | All iPhones with SIM tray (non‑US models, and US models before iPhone 14) | 2 |
| **1 physical SIM only** | Older iPhones (pre‑XS) | 1 |
| **2 physical SIMs** | Mainland China, Hong Kong, Macau specific dual‑SIM tray models (e.g., iPhone 17 China version) | 2 |

For a complete list of compatible iPhones, [check your iPhone's dual eSIM compatibility](/compatibility/).

> 📱 **iPhone 17 Air & US iPhone 17 series**: No physical SIM tray – only dual eSIM. If you run into activation problems on these models, check our **[eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)** for advanced fixes. Apple’s official documentation on [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) also provides basic setup steps.

---

## 2. Critical Limitation: CDMA Carriers Break Dual eSIM

**Direct answer:** If your primary line uses a CDMA carrier like Verizon or US Cellular, the iPhone’s baseband can only handle one CDMA voice channel at a time. Adding a second eSIM will cause that second line to show “No Service” for voice calls, though data may still work. The only full fix is switching to a GSM/5G‑only plan.

<!-- NEW FEATURED SNIPPET: Question #2 - Why does my second eSIM show No Service? -->
> **❓ Why does my second eSIM show No Service?**  
> If your primary line uses CDMA voice technology (Verizon, US Cellular), your second eSIM may show “No Service.” CDMA networks use one voice channel, preventing the second line from making calls while still allowing data usage.

If your primary line is on a **CDMA carrier** (Verizon, Sprint legacy, or some regional US carriers), adding a second eSIM may fail or the second line will show “No Service”. This is a well-known **dual eSIM** limitation.

### Why does this happen?
CDMA networks use a different voice fallback technology (1xRTT). The iPhone’s baseband can only handle **one CDMA voice channel** at a time. When the first eSIM is CDMA, it locks the baseband into CDMA mode, leaving no resources for the second line’s voice. The second line may still get LTE/5G data, but **cannot make or receive calls**.

**In plain English:** Think of your iPhone’s cellular modem as a single road. A CDMA line is a large truck that blocks the entire road. No other line’s voice can pass until the truck leaves.

### Which carriers are CDMA?
- **United States**: Verizon (older plans), US Cellular, some MVNOs. For detailed [US eSIM carrier details](/united-states-esim/), see our carrier guide.
- **Japan**: au (KDDI) (CDMA phased out, but legacy plans exist)
- **Others**: Most of the world uses GSM/UMTS/LTE (no issue)

### Fixes for dual eSIM with CDMA
- ✅ **Switch your primary line to a GSM/5G‑only plan** – e.g., [Verizon’s 5G-only plans](https://www.verizon.com/plans/unlimited-plan) or T‑Mobile.
- ✅ **Use the CDMA line as data‑only** – turn off “Voice” for that line (not possible in iOS; you’d need to disable VoLTE, which may not work).
- ⚠️ **Workaround**: Swap which line is primary. If you must keep CDMA, place it as the second eSIM – but then the first eSIM may lose voice.
- ❌ **No complete fix** – you may need to keep one physical SIM for CDMA voice and use eSIM only for data.

For a deeper comparison of US carrier networks, see our **[US carrier network comparison](/carriers/united-states-esim-carrier-guide/)**.

---

## 3. One Number Can Call Out but Not Receive – T‑ADS Cache Error

**Direct answer:** This happens when your carrier’s T‑ADS (Terminating Access Domain Selection) cache becomes outdated, trying to route incoming calls to a network mode (like 5G) that your phone is no longer using. The quick fix: turn off Wi‑Fi Calling for that line, restart your iPhone, then turn Wi‑Fi Calling back on. If that fails, ask your carrier to “clear the T‑ADS cache” for your number.

**Symptom**: Line A works fine. Line B can make outgoing calls, but incoming calls to B go straight to voicemail or ring as “unavailable”.

**Root cause**: The carrier’s **T‑ADS (Terminating Access Domain Selection)** cache is outdated. When Line B recently switched from 5G to LTE, or used Wi‑Fi Calling, the network still tries to route incoming calls to the old domain.

**Analogy:** Imagine the carrier has an old address book that still lists your phone at your previous house. When someone calls, they go to the wrong place. Toggling Wi‑Fi Calling updates the address book.

### Quick fix (user‑side)
1. Turn off **Wi‑Fi Calling** temporarily: `Settings > Cellular > Line B > Wi‑Fi Calling` → OFF.
2. Restart iPhone.
3. Turn Wi‑Fi Calling back on.

### Carrier‑side fix (call support)
Ask your carrier to “**clear the T‑ADS cache for this number**” or “**reset the domain selection record**”. This usually takes effect within 30 minutes. For more T‑ADS and other call‑related issues, see **[Fix 14 in our troubleshooting guide](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Prevent recurrence
- Avoid rapidly switching between 5G/LTE (keep one mode for at least a few hours).
- If you travel frequently, keep **Data Roaming** OFF for the line that doesn’t need data.

---

## 4. During a Call, the Other Line Says “No Service” – Normal Behavior

**Direct answer:** iPhones are dual standby, not dual active. Only one line can maintain a cellular connection at a time. While you’re on a call using Line A, Line B is temporarily unreachable and shows “No Service”. When the call ends, both lines reconnect automatically. Enable Wi‑Fi Calling on both lines to allow the idle line to receive calls via Wi‑Fi during an active call.

**Symptom**: You’re on a call using Line A. When you check, Line B shows “No Service”.

**Explanation**: iPhones are **dual standby, not dual active**. Only one line can maintain a cellular connection at a time. While on a call, the other line is temporarily unreachable. As soon as the call ends, both lines reconnect. This is **not a dual eSIM failure** – it’s by design.

### What you can do:
- **Enable Wi‑Fi Calling on both lines** – then the idle line may use Wi‑Fi to receive calls while you’re on the other line. Apple’s [dual standby documentation](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) explains this in more detail.
- **Enable “Allow Cellular Data Switching”** – under `Settings > Cellular > Cellular Data`. This lets the non‑data line use the data line’s connection for Wi‑Fi Calling.

> 📌 Note: Some carriers do not support Wi‑Fi Calling simultaneously on both lines. Check with your carrier.

---

## 5. Dual eSIM Not Working? Check Carrier Lock First

**Direct answer:** If you cannot add a second eSIM or physical SIM, go to `Settings > General > About` and scroll to **Carrier Lock**. It must say “No SIM restrictions”. If it shows “SIM locked” or a carrier name, your iPhone is locked to that carrier. Contact them to request an unlock – US carriers must unlock fully paid devices.

If you cannot add a second eSIM or physical SIM:
- Your iPhone might be **carrier‑locked** to the first carrier.
- To check: `Settings > General > About` → scroll to **Carrier Lock**. It must say “No SIM restrictions”.

### What to do if locked:
- Contact your carrier to request an unlock. US carriers must unlock after device paid off.
- If unlocked but still not working, you may need to reset network settings: `Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings`. (Warning: this forgets Wi‑Fi passwords.)

Once unlocked, you can also move your eSIM between iPhone and Android – see our **[eSIM Cross‑Platform Transfer 2026 guide](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** for step‑by‑step instructions.

---

## 6. Dual eSIM Battery Drain: How to Reduce

**Direct answer:** Running two active lines increases battery consumption by 5–15%. Reduce drain by setting the line with weaker signal to LTE only (not 5G), turning off Data Roaming on the line not used for data, and disabling 5G Standalone if supported. In very low signal areas, temporarily disable the secondary line.

Running **dual eSIM** or even eSIM + physical SIM increases battery consumption by 5–15%. Here’s how to minimize drain while keeping both lines active:

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

**Direct answer:** If your nano‑SIM works in another phone but not in your iPhone, remove the SIM tray, clean the gold contacts with a soft cloth, reinsert firmly until it clicks, then restart your iPhone. If still not recognized, try a new SIM card from your carrier – most postpaid plans offer free replacements.

**Symptom**: Your nano‑SIM works in another phone but not in your iPhone.

**Common causes**:
- SIM card is **CDMA** and iPhone is set to eSIM‑only mode? (rare)
- SIM tray not fully inserted or damaged.
- SIM card is **too old** (pre‑4G) or bent.

**Fixes**:
1. Remove tray, clean contacts with a soft cloth.
2. Reinsert firmly until click.
3. Restart iPhone.
4. If still not recognized, try the SIM in another phone – if it works, your iPhone’s SIM reader may be faulty.
5. Replace SIM card at carrier store (free for most postpaid plans).

If you plan to switch entirely to eSIM, refer to our **[iPhone 17 eSIM guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)** for activation methods.

---

## 8. Special Regional Cases: China, Hong Kong, Macau

**Direct answer:** Mainland China iPhones (except iPhone 17 Air) have two physical nano‑SIM slots and **no eSIM support at all**. Hong Kong and Macau models typically support eSIM + physical SIM. If you buy a mainland China dual‑physical‑SIM iPhone, you cannot install any eSIM, including international travel eSIMs – this is a hardware limitation.

Apple sells specific dual‑physical‑SIM models in **mainland China**:
- iPhone 17, 17 Pro, 17 Pro Max: **two physical nano‑SIM slots** (no eSIM except Air).
- iPhone 17 Air: **eSIM only** (global, including China).

**Hong Kong and Macau** models:
- Support **eSIM + physical SIM** (like international models) or dual physical SIM depending on model.
- Always verify before buying if you plan to use eSIM travel plans.

> ⚠️ **Important**: If you buy a mainland China dual‑physical‑SIM iPhone, you **cannot install any eSIM** (including international travel eSIMs) – except the iPhone 17 Air. This is a hardware limitation, not a software block.

---

## 9. Dual eSIM for Work & Personal: Best Practices

Many users keep a **work number** (eSIM) and **personal number** (second eSIM or physical SIM). Here’s how to set up your **dual eSIM** configuration cleanly:

### Label lines clearly
`Settings > Cellular` → tap a line → `Cellular Plan Label` → choose “Business” or “Personal”, or create custom label.

### Choose default voice & data
- **Default Voice Line**: Which line to use when you dial from the native Phone app (you can still choose per call).
- **Cellular Data**: Which line uses mobile data. Turn on **Allow Cellular Data Switching** so the phone can temporarily use the other line’s data if the primary loses signal.

### Separate contacts
- Assign contacts to a specific line: Edit contact → `Preferred Line` → select business or personal.

### Prevent accidental roaming
- Turn off **Data Roaming** for the work line if it has expensive international rates.

---

## 10. Troubleshooting Table – Dual eSIM Scenarios

| Problem | Immediate Step | Long‑Term Fix |
|---------|----------------|----------------|
| Second eSIM never gets signal | Restart iPhone, then toggle off/on line | If CDMA carrier, switch to GSM plan |
| Calls go straight to voicemail (no ring) | Disable “Silence Unknown Callers” and call forwarding | Contact carrier to reset T‑ADS |
| Can’t receive SMS on second line | Send a test SMS from that line to any number | Ensure line is not data‑only; carrier may need to enable SMS |
| Two eSIMs but both show “No Service” | Airplane mode on/off > check carrier lock | Restore network settings |
| Switched lines and now FaceTime/iMessage won’t activate | Go to `Settings > Messages > Send & Receive` – manually select numbers | Sign out of Apple ID and back in |

For additional problems like “eSIM bound to another device” or “DFU restore error 53”, see our **[full 16‑case troubleshooting library](/faq/esim-deep-troubleshooting-guide-2026/)** .

---

## 11. Frequently Asked Questions

**Q1: Can I use two eSIMs from the same carrier?**  
A: Yes, as long as your carrier allows multiple eSIM profiles on one account. For example, T‑Mobile US supports up to two eSIMs on the same iPhone. For a full list of compatible iPhone models, check the **[iPhone 17 compatibility table](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/#2-global-iphone-17-models--esim-compatibility-table)**.

**Q2: Will both lines support 5G simultaneously?**  
A: Yes, on iPhone 13 and newer (including iPhone 17), both lines can be on 5G (dual 5G standby). However, only one line can use 5G data at a time; the other uses 5G for voice fallback (VoNR).

**Q3: My second line works but the first one stopped working after adding it – what happened?**  
A: You may have accidentally swapped the primary line settings. Go to `Settings > Cellular > Default Voice Line` and set it back.

**Q4: Does dual eSIM drain battery more than eSIM + physical SIM?**  
A: Generally, dual eSIM consumes slightly less power because there’s no physical card reader. But the difference is negligible (within 2‑3%).

**Q5: I’m traveling – can I use a local eSIM for data and keep my home eSIM for calls?**  
A: Yes, best practice:  
- Set local eSIM as **Cellular Data** line.  
- Keep home eSIM as **Default Voice Line**.  
- Turn off **Data Roaming** on home eSIM to avoid massive charges.  
- Turn on **Allow Cellular Data Switching** so your home line can use the local eSIM’s data for Wi‑Fi Calling & MMS.

If you frequently switch between devices while traveling, the **[eSIM cross‑platform transfer guide](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** will help you move your number seamlessly.

**Q6: Why does the second eSIM sometimes disappear after an iOS update?**  
A: Rare bug. Go to `Settings > Cellular` → if the line is missing but still shows under “Available SIMs”, tap it and re‑activate. If not, contact carrier to re‑push the profile.

**Q7: Can I use a dual‑SIM setup with an Apple Watch?**  
A: Yes. Apple Watch can mirror **one** of the iPhone’s lines. Choose which line you want on the watch during setup.

**Q8: Where can I find official Apple documentation for dual eSIM?**  
A: Apple provides two key resources: [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) and [Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086). These cover basic compatibility and setup.

---

## 12. Final Pro Tips for Dual eSIM Users

- **Label your lines** immediately after setting up – it saves endless confusion.
- **Set different ringtones** for each line: `Settings > Sounds & Haptics > Ringtone` → scroll down, you can assign per line.
- **Use Shortcuts automation** to change default voice line based on time (e.g., work hours = business line; evenings = personal).
- **Before selling your device**: Go to `Settings > Cellular`, delete **all** eSIMs, and remove the physical SIM. Then erase all content and settings. For a detailed walkthrough of deleting eSIMs and canceling plans, refer to **[Fix #9 in our troubleshooting guide](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.

> 📎 **Related guides on this site:**
> - [eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/)
> - [iPhone 17 eSIM Complete Guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)
> - [eSIM Cross‑Platform Transfer 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)

---
