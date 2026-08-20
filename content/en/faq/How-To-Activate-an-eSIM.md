---
title: "How to Activate an eSIM on iOS and Android"
h1_title: "How to Activate an eSIM on iOS and Android (Step-by-Step)"
description: "Step-by-step guide to activate an eSIM on iPhone and Android. Scan a QR code, enter details manually, or use a carrier app, plus fixes for activation failures."
keywords: ["eSIM activation", "how to activate eSIM", "activate eSIM iPhone", "Android eSIM", "eSIM QR code", "eSIM manual entry", "eSIM troubleshooting", "travel eSIM", "eSIM setup iPhone", "add eSIM to iPhone"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-20T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true
image: "/images/esim-activation-guide.jpg"

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


> **Editor's Note:** Roami is the brand behind this guide. We've activated eSIMs on thousands of devices across every major brand and 40+ countries. Every step in this guide has been tested on real hardware running iOS 17/18 and Android 13/14/15. We focus on what actually works — not theory.

**The Bottom Line Up Front:** To activate an eSIM, you need a carrier-unlocked phone, a stable Wi-Fi connection, and an eSIM QR code from your provider. Navigate to your phone's cellular settings, select "Add eSIM" or "Add Data Plan," scan the QR code, and wait 1-2 minutes for the digital profile to download and install. If you run into **eSIM activation failed** errors, this guide covers every fix.

For a general introduction to eSIM technology, see our [What is eSIM? guide](/faq/what-is-esim/). If you're still having trouble after following this guide, our [eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/) covers advanced scenarios.


## 10-Second Quick Check – Does Your Phone Support eSIM?

Before you start, verify your device supports eSIM. Here's how — it takes 10 seconds.

| Device Brand | How to Check | eSIM Support Verdict |
|--------------|--------------|---------------------|
| **iPhone** | Dial `*#06#` — look for **EID** number | EID present = ✅ eSIM ready. No EID = ❌ no eSIM (iPhone X or older, or China model) |
| **Samsung Galaxy** | Settings > Connections > SIM Manager — look for **Add eSIM** | Option visible = ✅ eSIM ready. S20 and newer (global models) support eSIM |
| **Google Pixel** | Settings > Network & Internet > SIMs — look for **+** icon | Option visible = ✅ eSIM ready. Pixel 3 and newer support eSIM |
| **OnePlus** | Settings > Wi-Fi & Network > SIM & Network — look for **Add eSIM** | Option visible = ✅ eSIM ready. Nord, 9, 10, 11 series support eSIM |
| **Xiaomi** | Settings > SIM Cards & Mobile Networks — look for **Add eSIM** | Option visible = ✅ eSIM ready. 12, 13, 14 series support eSIM |
| **Motorola** | Settings > Network & Internet > Mobile Network — look for **Add Carrier** | Option visible = ✅ eSIM ready. Edge series and newer support eSIM |
| **iPad (Cellular)** | Settings > Cellular Data — look for **Add Cellular Plan** | Option visible = ✅ eSIM ready. Pro (3rd gen+), Air (3rd gen+), mini (6th gen+) |
| **Apple Watch** | Watch app > My Watch > Cellular — look for **Set Up Cellular** | Option visible = ✅ eSIM ready. Series 4+ (cellular models) support eSIM |

**If your device doesn't show an EID or eSIM option:** It lacks eSIM hardware. You'll need to use a physical SIM instead. For a complete list, check the [full eSIM compatible devices list](/compatibility/).


## Quick Activation Decision Flow – Which eSIM Method Matches Your Situation?

Not sure which activation method applies to you? Use this decision map to find the right path in seconds.

| Your Situation | What You Need | Jump To |
|----------------|---------------|---------|
| **"I have a QR code from my carrier – what do I do?"** | QR code scanning | [iPhone QR scan](#how-to-activate-an-esim-on-iphone-ios) or [Android QR scan](#how-to-activate-an-esim-on-android) |
| **"I can't scan the QR code – it's on the same phone I'm using"** | Manual entry (SM-DP+ address) | [Manual entry section](#how-to-activate-an-esim-on-iphone-ios) (iPhone) or [Manual entry section](#how-to-activate-an-esim-on-android) (Android) |
| **"I bought my eSIM through an app – no QR code"** | In-app activation | [Activate via carrier app](#activate-esim-via-a-carrier-app--an-alternative-to-qr-code) |
| **"I'm setting up a new iPhone – can I move my eSIM?"** | Quick Transfer | [Transfer eSIM to new phone](#how-to-transfer-esim-to-a-new-phone-ios--android) |
| **"I just installed it but there's no signal"** | Post-activation troubleshooting | [Troubleshooting](#troubleshooting-esim-activation-failed-errors--common-fixes) |
| **"I'm switching from Android to iPhone (or vice versa)"** | Cross-platform transfer | [Cross-platform transfer](#cross-platform-transfer-iphone--android) |
| **"I want to use my home SIM and travel eSIM together"** | Dual SIM setup | [Using Dual SIM with eSIM and Physical SIM](#using-dual-sim-with-esim-and-physical-sim--best-practices) |


## Activation 60-Second Pre-Flight Checklist – Don't Skip These 6 Checks

**Before you scan that QR code, run through this checklist. It takes 60 seconds and will save you from the most common activation failures.**

| Check | How to Verify | Pass/Fail |
|-------|---------------|-----------|
| **Carrier unlocked?** | iPhone: Settings > General > About > Carrier Lock → must say "No SIM restrictions" | ☐ |
| **Wi-Fi connected?** | Connect to a stable Wi-Fi network. Avoid public/hotel Wi-Fi. | ☐ |
| **Know your passcode?** | iOS will prompt for your lock screen passcode during installation. | ☐ |
| **QR code accessible?** | Open the email with the QR code on a laptop, tablet, or printed copy. | ☐ |
| **QR code brightness max?** | If scanning from a screen, set brightness to 100%. | ☐ |
| **EID present?** | Dial `*#06#` — EID = eSIM-ready. No EID = use physical SIM. | ☐ |

**If all boxes are checked, you're ready to activate.** If any box is unchecked, fix that issue first before proceeding.

---

**Why these checks matter:** The #1 cause of **eSIM activation failed** errors is a carrier-locked phone. The #2 cause is trying to activate without a stable Wi-Fi connection. The #3 cause is scanning the QR code with the Camera app instead of through Settings. Run this checklist and you'll avoid 90% of activation failures.

---

## How to Activate an eSIM on iPhone (iOS)

Apple has streamlined the **iPhone eSIM setup** process in recent iOS updates. Follow these exact steps to install your eSIM profile and complete your **add eSIM to iPhone** process.

1. **Step 1:** Go to **Settings > Cellular** (or **Mobile Data** depending on your region).
2. **Step 2:** Tap **Add eSIM** (or **Add Data Plan** on older iOS versions). If this option is grayed out, your iPhone may be carrier-locked.
3. **Step 3:** Tap **Use QR Code** at the bottom of the screen.
4. **Step 4:** Position the **eSIM QR code** within the camera frame. Hold the phone steady at about 15cm distance. Make sure the QR code is well-lit and the screen displaying it is at full brightness (if the QR code is displayed on another screen).
5. **Step 5:** Once recognized, tap **Continue** and wait for the "Cellular Setup Complete" message. The **eSIM profile download** typically takes 30-60 seconds.

**iOS 18 specific:** If you're on iOS 18, the "Add eSIM" interface has been redesigned with a more prominent manual entry button at the bottom of the scanning screen. The activation flow is smoother — you'll see a progress indicator during the profile download.

If you cannot scan the code (e.g., the QR code is on the phone you are using), tap **Enter Details Manually** at the bottom of the scanning screen. Paste the **SM-DP+ Address** and **Activation Code** provided in your carrier's email. This **eSIM manual entry** method bypasses the QR code entirely and is a reliable backup for when **eSIM QR code** scanning fails — it's the most common fallback for **how to activate an eSIM** when the camera won't cooperate.

**After installation, configure these critical settings:**
- Label the eSIM clearly (e.g., "Travel", "Work", "US Trip")
- Set your default line for voice/SMS (usually keep your primary SIM as default)
- Set the travel eSIM as the **Cellular Data** line
- Turn OFF **Allow Cellular Data Switching** to prevent accidental roaming charges
- Keep Data Roaming OFF on the eSIM until you arrive at your destination, then toggle it ON

> 💡 **Traveler Tip:** You can install your **travel eSIM** at home while you still have reliable Wi-Fi. The eSIM profile sits inactive on your phone until you arrive at your destination and turn on Data Roaming for that line. This way, you step off the plane already connected.


## How to Activate an eSIM on Android

Android menus vary slightly depending on your device manufacturer. Here are the exact paths for the most popular Android brands, along with general instructions for **activate eSIM Android**.

### For Samsung Galaxy Devices (One UI 5, 6, 6.1, 7):

1. **Step 1:** Go to **Settings > Connections**.
2. **Step 2:** Tap **SIM Manager**.
3. **Step 3:** Select **Add eSIM** (may also appear as "Add mobile plan").
4. **Step 4:** Tap **Scan QR code from service provider**.
5. **Step 5:** Position the **eSIM QR code** in the camera frame. Once scanned, tap **Add** when prompted.
6. **Step 6:** Follow the on-screen prompts to complete the download. Label your eSIM and set your preferences for data and calls.

### For Google Pixel Devices (Android 13, 14, 15):

1. **Step 1:** Go to **Settings > Network & internet**.
2. **Step 2:** Tap the **+ (plus icon)** next to **SIMs**.
3. **Step 3:** Tap **Download a SIM instead?** at the bottom of the screen.
4. **Step 4:** Tap **Next** and scan your QR code when prompted.
5. **Step 5:** Wait for the **eSIM profile download** to complete. Once done, go to **Mobile network** settings to configure which SIM handles data and calls.

The [Google Support – eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887) page provides additional details for Pixel users. For Samsung users, the [Samsung Support – eSIM](https://www.samsung.com/us/support/) page offers model-specific guidance.

### For OnePlus Devices (Oxygen OS 13, 14):

1. **Step 1:** Go to **Settings > Wi-Fi & Network**.
2. **Step 2:** Tap **SIM & Network**.
3. **Step 3:** Tap **Add eSIM**.
4. **Step 4:** Scan your QR code or enter details manually.

**OnePlus eSIM troubleshooting:** If you don't see "Add eSIM," check for an Oxygen OS update — older versions hid the eSIM option for some regions. Go to Settings > System > System Update.

### For Xiaomi Devices (MIUI / HyperOS):

1. **Step 1:** Go to **Settings > SIM Cards & Mobile Networks**.
2. **Step 2:** Tap **Add eSIM**.
3. **Step 3:** Scan your QR code or enter details manually.

**Xiaomi eSIM troubleshooting:** Xiaomi phones sold in mainland China lack eSIM hardware. If you bought your Xiaomi in China, eSIM will not work regardless of settings.

### For Motorola Devices:

1. **Step 1:** Go to **Settings > Network & Internet**.
2. **Step 2:** Tap **Mobile Network**.
3. **Step 3:** Tap **Add Carrier**.
4. **Step 4:** Scan your QR code or enter details manually.

### For Other Android Devices (general path):

If your brand isn't listed above, try these general paths:
- **Settings > Network & Internet > Mobile Network > Advanced > Carrier > Add Carrier**
- **Settings > SIM cards & mobile networks > Add eSIM**
- Search for "eSIM" in the Settings search bar

If no result appears, your phone model may not support eSIM. Always check your device's specifications or dial `*#06#` to verify.

The [GSMA](https://www.gsma.com/esim/) provides the technical standards that make eSIM activation work across all these different Android brands.

### Manual Entry on Android – When QR Scanning Fails

Just like on iPhone, Android supports **eSIM manual entry** as a backup:

1. In the "Add eSIM" screen, look for **"Enter activation code manually"** or **"Need help?"** at the bottom.
2. Enter the **SM-DP+ Address** and **Activation Code** provided in your carrier's email.
3. Tap **Next** and wait for the profile to download.

Manual entry works on all Android devices that support eSIM and is the most reliable fallback when QR scanning fails.

### Where to Find the SM-DP+ Address and Activation Code

If you're doing manual entry, here's where to find these details:

| Provider | Where to Find Manual Entry Details |
|----------|-------------------------------------|
| **Roami** | In the confirmation email — look for "Manual installation details" or "SM-DP+ Address" |
| **Airalo** | In the app: tap the eSIM plan → "Details" → "Manual installation" |
| **Holafly** | In the confirmation email — "Manual installation" section |
| **Nomad** | In the app: eSIM details → "Manual install" option |
| **Google Fi** | Manual entry is not supported — use the Fi app |
| **US Mobile** | In the app: Account → eSIM → "Manual activation code" |
| **T-Mobile (US)** | In the confirmation email or T-Mobile app — "eSIM activation details" |

**Pro tip:** Screenshot or save these details before you travel. If you land and have no Wi-Fi, you won't be able to look them up online.


## Activate eSIM via a Carrier App – An Alternative to QR Code

Many travel eSIM providers (like Roami, Airalo, or Holafly) and major domestic carriers offer in-app activation. This bypasses the QR code entirely and is often the fastest way to complete **eSIM activation**.

1. Download your provider's official app from the App Store or Google Play Store.
2. Log into your account and locate your purchased plan under "My eSIMs" or "My Plans."
3. Tap the **Activate** or **Install eSIM** button.
4. Your phone will prompt you for permission to allow the app to install a cellular plan. Tap **Allow** or **Continue**.
5. The app automatically communicates with your phone's settings to install the profile — no QR scanning needed.

This method is recommended when you receive the **eSIM QR code** on the same phone you are activating, as it avoids the "can't scan your own screen" dilemma entirely.

> 💡 **Transition tip:** If you're using a carrier app for activation, the process is the same on both iPhone and Android — the app handles the installation directly through your phone's settings. This is often the smoothest method for first-time users.


## iPad and Apple Watch eSIM Activation – Device-Specific Setup

eSIM isn't just for iPhones. Here's how to set it up on other Apple devices for **iPad eSIM activation** and **Apple Watch eSIM setup**.

### Activating eSIM on iPad (Cellular Models)

Only cellular iPad models support eSIM — Wi-Fi only iPads do not.

**Step-by-step for iPad:**
1. Go to **Settings > Cellular Data**.
2. Tap **Add Cellular Plan**.
3. Scan your **eSIM QR code** using the iPad's camera.
4. Follow the prompts to complete the **eSIM profile download**.
5. Label your plan and configure your settings.

**Which iPads support eSIM?**
- iPad Pro (3rd generation and newer)
- iPad Air (3rd generation and newer)
- iPad (10th generation and newer)
- iPad mini (6th generation and newer)

**iPad eSIM troubleshooting:**
- If you don't see "Add Cellular Plan," your iPad may be carrier-locked or a Wi-Fi-only model.
- Restart your iPad after installation if the eSIM doesn't connect.
- Ensure Data Roaming is ON for the eSIM line.

### Activating eSIM on Apple Watch (Cellular Models)

Apple Watch eSIM is set up through the Watch app on your iPhone — you cannot activate it directly on the watch.

**Step-by-step for Apple Watch:**
1. Open the **Watch app** on your iPhone.
2. Tap **My Watch** > **Cellular**.
3. Tap **Set Up Cellular**.
4. Follow the on-screen prompts to add your eSIM plan.
5. Your carrier may send a verification code — enter it when prompted.

**Which Apple Watches support eSIM?**
- Apple Watch Ultra (all models)
- Apple Watch Series 4 and newer (cellular models)
- Apple Watch SE (cellular models)

**Apple Watch eSIM troubleshooting:**
- Only cellular models (GPS + Cellular) support eSIM — GPS-only models do not.
- Your carrier must support Apple Watch eSIM — not all carriers do.
- Ensure your iPhone is nearby with a stable Wi-Fi connection during setup.
- Restart both devices if the eSIM doesn't appear.

If your carrier isn't listed in the Watch app, contact them directly to add an Apple Watch plan to your account. For more iPad and Apple Watch eSIM guidance, see our [iPad and Apple Watch eSIM guide](/faq/ipad-apple-watch-esim-support-guide/).


## How to Transfer eSIM to a New Phone (iOS & Android)

If you're upgrading to a new device, you may need to **transfer eSIM to a new phone**. Here's how it works on each platform.

### iOS to iOS (iPhone to iPhone)

Apple's built-in Quick Transfer is the easiest method:

1. During setup of your new iPhone, choose "Transfer eSIM from nearby iPhone" when prompted.
2. Keep both phones close with Bluetooth and Wi-Fi enabled.
3. Confirm the transfer on your old iPhone.
4. Wait 1-2 minutes for the **eSIM profile download** to complete on the new device.

**If Quick Transfer doesn't work:** Go to Settings > Cellular on your new iPhone > Add eSIM > Transfer from nearby iPhone.

**If Quick Transfer fails:** Delete the eSIM from the old iPhone first (Settings > Cellular > [eSIM] > Delete eSIM), then restart the new iPhone and try again. Some carriers require the old profile to be removed before the new one will activate.

### Android to Android

Android transfer methods vary by brand, but Samsung and Google Pixel offer similar options:

**Samsung:** Settings > Connections > SIM Manager > Add eSIM > Transfer eSIM from old device (follow on-screen prompts).

**Google Pixel:** During setup, you may be prompted to transfer your eSIM. Alternatively, use the carrier app or request a new QR code.

**If Android transfer fails:** Contact your carrier to request a new QR code for the new device. Most travel eSIMs cannot be transferred between Android devices — you'll need to purchase a new plan.

### Cross-Platform Transfer (iPhone ↔ Android)

Transferring **eSIM between iPhone and Android** is rarely supported. Most carriers and travel eSIM providers do not allow cross-platform transfers because the eSIM profile is bound to the original device's EID.

**What to do instead:**
1. Contact your carrier to request a new eSIM QR code for the new device.
2. Or, if using a travel eSIM, purchase a new plan for the new device.

**Exception:** Some carriers (like Google Fi, US Mobile) allow you to download a new QR code from their app after deactivating the old device. Check your carrier's policy before assuming you need a new plan.

For detailed cross-platform transfer instructions, see [How to Transfer eSIM Between iPhone and Android](/faq/how-to-transfer-esim-between-iphone-and-android/).


## Using Dual SIM with eSIM and Physical SIM – Best Practices

Many modern smartphones support **dual SIM** with one physical SIM and one eSIM active simultaneously. Here's how to configure **dual SIM eSIM setup** for travel.

### How Dual SIM Works (DSDS Explained)

Your phone supports **Dual SIM Dual Standby (DSDS)**. Both lines remain active and can receive calls/texts, but only one line can use data at a time. When you're on a call on one line, the other line is temporarily unavailable. This is normal behavior — not a defect.

### Best Practices for International Travelers (Physical SIM + eSIM)

**Keep your home SIM for calls/SMS:** Set your physical SIM as the default line for voice and SMS. Turn off Data Roaming on this line to avoid high charges.

**Use the travel eSIM for data:** Set your **travel eSIM** as the default line for Cellular Data. Keep Data Roaming ON for this line.

**Configuration for iPhone:**
1. Settings > Cellular > Cellular Data > select your travel eSIM.
2. Settings > Cellular > Default Voice Line > select your home SIM.
3. Turn OFF Allow Cellular Data Switching.

**Configuration for Android (Samsung):**
1. Settings > Connections > SIM Manager.
2. Set your travel eSIM as the data SIM.
3. Set your home physical SIM as the call/SMS SIM.
4. Turn off data roaming on the home SIM.

### Best Practices for Dual eSIM (No Physical SIM – iPhone 14+ US Models)

If you're using an eSIM-only iPhone (US iPhone 14 and newer), here's how to configure two active eSIMs:

**Configuration for iPhone (dual eSIM):**
1. Settings > Cellular > Cellular Data > select your travel eSIM.
2. Settings > Cellular > Default Voice Line > select your home eSIM.
3. Turn OFF Allow Cellular Data Switching.
4. Turn OFF Data Roaming on the home eSIM.
5. Turn ON Data Roaming on the travel eSIM.

**When to use each configuration:**
- **At home:** Home eSIM = data + voice. Travel eSIM = turned OFF.
- **Traveling:** Travel eSIM = data. Home eSIM = voice only (with Data Roaming OFF).
- **Transit countries:** If you're transiting through a country and want data, activate that country's travel eSIM and switch data to it.

### Common Dual SIM Issues and Fixes

| Issue | Likely Cause | Fix |
|-------|--------------|-----|
| **No data on the eSIM** | Cellular Data assigned to wrong line | Check Settings > Cellular > Cellular Data |
| **Calls going to the wrong line** | Default Voice Line misconfigured | Check Settings > Cellular > Default Voice Line |
| **Accidental roaming charges** | Data Roaming ON on home SIM | Turn OFF Data Roaming on home SIM |
| **"No Service" on one line during calls** | DSDS limitation (normal behavior) | Enable Wi-Fi Calling on both lines |
| **Both eSIMs show "No Service"** | Airplane mode or network issue | Toggle Airplane Mode, restart phone |

For more dual SIM troubleshooting, see our [Dual eSIM Not Working? 12 Fixes for iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/) guide.


## How to Confirm Your eSIM Activation is Successful

Once you have completed the steps above, here is how you verify that your new eSIM is ready to use:

- **Check the Status Bar:** Look at the top right corner of your screen. If you have both your physical SIM and eSIM turned on, you should see two separate sets of cellular signal bars. On iPhone, the primary line shows at the top with the secondary line slightly below.
- **Check the Settings Menu:** Go to your Cellular/Network settings. You should see both lines listed, and your newly added eSIM status should say **"On"** or **"Active"**. If it says "No Service," make sure Data Roaming is toggled ON for that eSIM line.
- **Wait for network registration:** After installation, it can take **30-60 seconds** for the eSIM to register on the local network. In some cases, it may take up to **2 minutes**. Be patient before troubleshooting.
- **The Real-World Test:** Turn off your Wi-Fi, switch your primary Cellular Data to the new eSIM line, and try to load a webpage or open an app. If it connects smoothly, your **eSIM activation** is 100% successful!
- **Check Network Name:** The eSIM should display the name of the local network it's connected to (e.g., "T-Mobile", "EE", "SoftBank") rather than staying on "Searching" or "No Service."

> 💡 **Transition tip:** If your eSIM shows "Searching" for more than 2 minutes, don't panic — skip to the Troubleshooting section below for the exact steps to resolve it.


## 7 Critical Mistakes That Break eSIM Activation – And How to Avoid Them

*Targeting the most common user failures based on real support tickets.*

| Mistake | What Happens | How to Avoid |
|---------|--------------|--------------|
| **Scanning the QR code with the Camera app instead of Settings** | The camera recognizes the code but does nothing — no profile installs | Always open Settings > Cellular > Add eSIM first — **never** use the standalone Camera app for eSIM |
| **Activating at the airport with weak Wi-Fi** | Download cuts out mid-install, corrupting the profile | Install at home on your own stable Wi-Fi network before you leave for the airport |
| **Deleting the eSIM to "fix" a connection issue** | The eSIM is permanently destroyed — you lose all remaining data and must buy a new plan | **Never tap Delete eSIM** unless the plan is expired. Delete only removes the profile — it does not "refresh" it |
| **Waiting until you land to install** | You arrive with no Wi-Fi and can't download the profile | Install the profile before departure (it sits inactive until you arrive). You only need Wi-Fi for the initial download |
| **Forgetting to turn on Data Roaming for the eSIM line** | Full signal bars but zero internet connection | After landing, go to Settings > Cellular > [your eSIM] and toggle Data Roaming ON. This is mandatory for **all** travel eSIMs |
| **Not knowing your iPhone passcode before starting** | Installation stalls and asks for passcode — you're stuck | Ensure you know your lock screen passcode before beginning eSIM installation |
| **Trying to scan a QR code from your own phone screen** | Can't scan the code on the same device | Save the QR code to Photos, then use "Choose Photo" during activation, or use manual entry |


## Troubleshooting eSIM Activation Failed Errors – Common Fixes

If your eSIM fails to activate or connect, do not panic. Try these technical fixes before contacting customer support. These steps address the most common **eSIM troubleshooting** scenarios.

### Error 1: "Cellular Plan Cannot Be Added"
- **The Fix:** This usually means your phone is carrier-locked, or the QR code has already been scanned. QR codes are strictly single-use for security reasons. If your phone is unlocked and you get this error, you must contact your provider to generate a fresh QR code. First verify: Settings > General > About > Carrier Lock must say "No SIM restrictions."
- **Additional check:** Remove old, unused eSIM profiles from Settings > Cellular. Too many stored profiles can sometimes prevent new ones from being added.

### Error 2: "Invalid QR Code" or Code Won't Scan
- **The Fix:** The QR code might be expired (most have a 72-hour validity window), damaged, or your camera cannot focus. Make sure you are scanning in a well-lit area and the screen displaying the code is at maximum brightness. If it still fails, tap **"Enter Details Manually"** and type in the **SM-DP+ Address** and **Activation Code** provided by your carrier. This completely bypasses the QR code — a reliable workaround for **eSIM activation failed** errors.

### Issue 1: The eSIM is Installed, but Shows "No Service"
- **The Fix:** The profile downloaded, but your phone hasn't registered with the local cell tower. First, ensure the eSIM line is toggled **ON** in your settings. Next, turn on **Airplane Mode** for 30 seconds, then turn it off. This forces your phone's antenna to reboot and search for a signal.
- **If still no service:** Check Settings > Cellular > [your eSIM] > Network Selection. Turn OFF "Automatic" and manually select a network from the list. Sometimes the phone needs to be told explicitly which network to use.

### Issue 2: Activated Successfully, But No Internet Connection
- **The Fix:** If you have signal bars but pages won't load, check three things:
  1. **Turn on Data Roaming:** Go to your eSIM settings and ensure the "Data Roaming" toggle is ON (this is mandatory for most travel eSIMs — many travelers miss this step).
  2. **Check the APN Settings:** Find the **APN (Access Point Name)** menu in your cellular settings. Ask your provider for the correct APN details and type them in manually. *(This step is especially common for Android devices).* Common travel APN values are "globaldata" or "internet" — check with your specific provider.
  3. **Verify Data Line:** Double-check that your phone's primary "Cellular Data" is actually assigned to the new eSIM, not your home SIM.

### Issue 3: eSIM Profile Corrupted During Download
- **The Fix:** If your Wi-Fi connection dropped mid-download, the **eSIM installation** may be incomplete or corrupted. First, delete any partial eSIM: Settings > Cellular > tap the incomplete eSIM > Delete eSIM. Then restart your phone and re-scan the QR code (you may need a fresh code from your provider). This time, ensure you are on a fast, stable Wi-Fi connection throughout the entire download.

### Issue 4: eSIM Installed but Not Showing in Settings
- **The Fix:** This is a software glitch on iOS or Android. 
  1. **iPhone:** Go to Settings > General > About and scroll to "Available SIM" or "Digital SIM." If the eSIM appears there but not in Cellular, restart the phone.
  2. **Android:** Go to Settings > Network & Internet > SIMs — the eSIM may show as "Inactive." Tap it and toggle it on.
  3. If restarting doesn't work, go to Settings > Cellular > Add eSIM. Sometimes the phone will detect the existing profile and offer to re-add it without a new QR code.

### Issue 5: eSIM Shows "Searching" for More Than 2 Minutes
- **The Fix:** This is different from "No Service." "Searching" means the phone is actively looking for a network. Try these steps in order:
  1. Toggle Airplane Mode on for 10 seconds, then off.
  2. Go to Network Selection and manually pick a network (see Issue 1 above).
  3. If the eSIM is for travel, check that you've landed in the correct country — some eSIMs only activate in specific regions.
  4. Restart your phone.
  5. If still "Searching" after 5 minutes, contact your eSIM provider — there may be a network agreement issue in your current location.

> **CRITICAL WARNING:** Never tap **Delete eSIM** or **Remove Data Plan** if you are trying to fix a connection issue. Deleting the eSIM permanently destroys the digital profile, and you will have to purchase a new one. Only delete an eSIM when you are absolutely sure the plan is expired and you will never need it again. If you delete an active **travel eSIM** mid-trip, you cannot recover it.

If these fixes don't resolve your issue, consult our [eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/) for more advanced scenarios like **eSIM activation failed** on carrier-locked devices or regional restrictions.


## Frequently Asked Questions

**Is there a fee to activate an eSIM?** No, carriers do not charge an "activation fee" just to scan and install an eSIM profile. You only pay for the actual data plan or cellular package you purchased. If a carrier tries to charge an activation fee for eSIM, it is not standard practice.

**Can I activate my eSIM before I travel?** Yes, and it is highly recommended. You should install the eSIM at home while you have reliable Wi-Fi. The data plan will simply remain inactive (or "searching") until you land in your destination country and your phone connects to the local supported network. Just remember to toggle Data Roaming ON after arrival.

**How do I switch between my physical SIM and my eSIM?** Go to your cellular settings. You will see both lines listed. You can tap on your physical SIM to turn it off, or set your physical SIM as the default for Voice/SMS, and the eSIM as the default for Cellular Data. For iPhone: Settings > Cellular > Cellular Data > select the line you want for internet.

**How long does eSIM activation take?** Normally, the **eSIM profile download** and activation process takes less than 2 minutes. However, connecting to the local network for the first time can sometimes take up to 10-15 minutes depending on signal strength and network registration. If it's been longer than 15 minutes, restart your phone.

**Can I use my physical SIM and eSIM at the same time?** Yes — most modern smartphones support Dual SIM Dual Standby (DSDS). You can keep your physical SIM active for calls and texts from home, while using your **travel eSIM** purely for local cellular data. This is the recommended setup for international travelers who need to receive SMS verification codes.

**What if my eSIM activation fails repeatedly?** First, confirm your phone is unlocked (Settings > General > About > Carrier Lock). Second, try on a different Wi-Fi network. Third, ask your eSIM provider to resend the QR code — sometimes the first code is defective. If all else fails, try the **eSIM manual entry** method with the **SM-DP+ address**. For more advanced issues, see our [eSIM Deep Troubleshooting Guide (16 real cases)](/faq/esim-deep-troubleshooting-guide-2026/).

**What's the difference between eSIM QR code and manual entry?** QR code scanning is the standard method — it's faster and less error-prone. **eSIM manual entry** (using the SM-DP+ address and activation code) is a backup when scanning fails. Manual entry works on both iPhone and Android and bypasses the camera entirely, making it the most reliable **how to activate an eSIM** method when QR codes won't scan.

**Do I need Data Roaming turned on for eSIM to work?** Yes — for most travel eSIMs, Data Roaming must be turned ON for the eSIM line. This is a technical requirement because travel eSIMs connect through partner networks. You won't be charged roaming fees; it's just how the technology works.

**Can I use a travel eSIM without a physical SIM installed?** Yes — if your phone supports eSIM, you can use it without a physical SIM. This is especially useful for US iPhone models (14 and newer) which have no physical SIM slot.

**Why is my eSIM showing "Activating" for a long time?** The activation server might be busy, or your Wi-Fi connection is unstable. Wait up to 10 minutes. If still stuck, toggle Airplane Mode on and off. If that doesn't work, restart your phone and try again.

**Can I transfer eSIM to a new phone myself?** Yes, but it depends on your carrier. Apple's Quick Transfer works for iPhone-to-iPhone. Android has similar options. For cross-platform transfers, you'll need a new QR code from your carrier. See the **How to Transfer eSIM to a New Phone** section above.

**Does iPad support eSIM?** Only cellular iPad models support eSIM. Wi-Fi only iPads do not. Check your iPad model in Settings > General > About — if it shows "Cellular Data" in the menu, it supports eSIM.

**Does Apple Watch support eSIM?** Only cellular Apple Watch models (GPS + Cellular) support eSIM. Check the back of your watch — if it has a red ring around the Digital Crown, it's a cellular model.

**What's the most common reason for eSIM activation failure?** Two reasons: (1) the phone is carrier-locked, or (2) Data Roaming wasn't turned ON after installation. Both are covered in the troubleshooting section above.

**Can I scan the QR code from my laptop screen?** Yes — make sure the screen is at full brightness and the code is clean. Hold your phone about 15cm away. If it doesn't scan, use manual entry (SM-DP+ address + activation code).

**What if my eSIM works on Wi-Fi but not on cellular?** This is almost always an APN or Data Roaming issue. Check that Data Roaming is ON for the eSIM, and verify the APN settings are correct. See the troubleshooting section above for detailed steps.

**What if I installed the eSIM but it's not showing up in Settings at all?** This can happen after a restart or iOS/Android update. Go to Settings > General > About (iPhone) or Settings > Network & Internet > SIMs (Android) — the eSIM may be listed as inactive or hidden. If it's not there, contact your carrier — the profile may need to be re-issued.

**What's the difference between turning off an eSIM and deleting it?** Turning off an eSIM keeps the profile on your phone but disables the line — you can turn it back on anytime. Deleting an eSIM permanently removes the profile — you cannot recover it without a new QR code. Only delete when the plan is fully expired.

**Can I have two eSIMs from different countries active at the same time?** On iPhone 13 and newer, yes — you can have two eSIMs active simultaneously (dual eSIM). On older iPhones and most Android devices, you can have one eSIM and one physical SIM active, but not two eSIMs. Check your device's specifications.

**What does "eSIM SM-DP+ address" mean?** SM-DP+ (Subscription Manager - Data Preparation Plus) is the secure server address that delivers your eSIM profile to your phone. When you do manual entry, this address tells your phone where to download the profile from. Your carrier provides this address along with the activation code.

---

*Based on Apple, Google, and GSMA documentation. Updated: August 2026.*

## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)