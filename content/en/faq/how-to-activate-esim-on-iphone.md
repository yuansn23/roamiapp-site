---
title: "How to Activate eSIM on iPhone (2026)"
h1_title: "How to Activate eSIM on iPhone in 2026 – Complete Step-by-Step Guide"
description: "Complete iOS eSIM activation guide 2026. No need to call your carrier. Follow simple instructions for QR code, Settings app, or carrier app. Fast & free."
keywords: ["eSIM activation", "how to activate eSIM iPhone", "iPhone eSIM setup", "add eSIM to iPhone", "eSIM QR code iPhone", "travel eSIM iPhone", "iPhone eSIM troubleshooting", "transfer eSIM to new iPhone", "eSIM activation failed iPhone", "eSIM no service iPhone", "eSIM stuck on activating"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-26T00:00:00Z
tags: ["eSIM", "iOS", "Troubleshooting", "Travel Setup"]
toc: true
image: "/img/esim/esim-travel.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Updated on"
  min_read: "min read"
  toc: "Table of Contents"

# Breadcrumbs
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


> **Editor's Note:** Roami is the brand behind this guide. We set up digital SIMs on iPhones every day across 20+ carriers and 40+ countries, and every step here has been tested on real hardware running iOS 17 and 18.

**The Short Answer:** On an iPhone, you activate an eSIM from the Settings app — no call to your carrier, no physical card. This page walks the iOS-specific path in depth: the exact menus, the differences between iOS 17 and 18, moving a profile to a new iPhone, and the iMessage/FaceTime cleanup that most guides skip.

For the concept behind it, see [What is eSIM activation?](/faq/what-is-esim-activation-and-how-does-it-work/). On Android instead? Use the [general activation guide](/faq/how-to-activate-an-esim/). Using an iPhone 16? There's a [dedicated iPhone 16 eSIM guide](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/).

## Is your iPhone eSIM-ready?

A fast check: dial `*#06#` — if a 32-digit **EID** appears, your iPhone has eSIM. For the complete iPhone model list (XS through the 16/17 line, SE 2nd/3rd gen) and how many profiles each holds, see the [iPhone eSIM compatibility hub](/faq/iphone-11-esim-compatible/).

## Before you start: four prerequisites

1. **Unlocked** — Settings > General > About > Carrier Lock should read "No SIM restrictions." A locked iPhone can't install a second provider's eSIM.
2. **Wi-Fi** — the profile downloads from your carrier's secure server, so you need a connection (cellular data won't do the initial pull).
3. **Passcode** — iOS asks for your lock-screen passcode to authorize the install.
4. **The QR code** — have it open on another device, or save the image to Photos and use "Choose Photo" later.

## Two different jobs: your main line vs a travel eSIM

Before you open Settings, name what you're actually doing — the flow differs slightly, and knowing which one you're on prevents most confusion.

**Scenario A: activating your main line (replacing a carrier or a new phone).** This is a carrier relationship. Your carrier either hands you a QR code, pushes the eSIM through their app (Verizon, T-Mobile, AT&T, Visible, Mint all do this), or uses "eSIM Carrier Activation" where the profile appears automatically once you sign in with your carrier account. You'll want to check that iMessage and FaceTime re-register on the new number afterward.

**Scenario B: adding a travel eSIM (keeping your home number).** This is a second, separate line for data abroad. You keep your physical SIM or home eSIM untouched, install the travel eSIM alongside it, then point Cellular Data at the travel line. The travel eSIM is usually data-only, so calls and texts stay on your home number.

Everything below applies to both, but the "convert," "Quick Transfer," and "re-register iMessage" sections are Scenario A territory, while the dual-line setup is Scenario B.

## The three ways to install an eSIM on iPhone

### 1. QR code (most common)

1. Settings > Cellular (or Mobile Data).
2. Tap **Add eSIM** (older iOS: **Add Cellular Plan**).
3. Tap **Use QR Code**.
4. Hold the phone about 15 cm from the code, with the displaying screen at full brightness.
5. When the plan appears, tap **Continue** and enter your passcode if prompted.

If it won't scan after a couple of tries, choose **Enter Details Manually** at the bottom of the camera screen.

### 2. Manual entry

Go to Settings > Cellular > Add eSIM > Use QR Code > **Enter Details Manually**, then type the SM-DP+ address and activation code from your provider's email. This is the reliable fallback when the code is damaged or sitting on the same phone you're activating.

### 3. Carrier app

Providers like Roami, Airalo, and Holafly install in one tap from their app — open your plan and tap **Install** or **Activate**, then allow the prompt. Fastest route, no camera involved.

## Convert your physical SIM to eSIM on iPhone

If your carrier supports it, iOS can turn your physical SIM into an eSIM right on the phone — no trip to a store, no new SIM card, no QR code. This is the cleanest way to free up the physical SIM slot (say, for a local SIM abroad) or to go all-digital before selling your phone.

1. Settings > Cellular.
2. Tap the line that's currently on your physical SIM.
3. Tap **Convert to eSIM** (on some carriers it reads **Convert Physical SIM to eSIM**).
4. Tap **Convert Cellular Plan**, then **Convert to eSIM**.
5. Wait for the conversion — usually under a minute — then remove the physical SIM card when iOS prompts.

A few catches worth knowing. **Carrier support varies** — the big three (AT&T, Verizon, T-Mobile) support it, but many MVNOs and prepaid carriers don't show the option. **Your iPhone must be on that carrier's network** to convert (it verifies the line during conversion). **You can't convert a foreign or travel SIM** — this feature only converts the SIM for the carrier your phone is currently signed in with. And once converted, the physical card is dead — throw it away, don't hand it to someone else.

Don't see "Convert to eSIM"? Your carrier hasn't enabled it. You can still go digital the old way: ask them for an eSIM QR code and follow the standard install above.

## iOS 17 vs iOS 18: what changed

| Feature | iOS 17 | iOS 18 |
|---|---|---|
| Add-eSIM path | Settings > Cellular > Add eSIM | Same path |
| Button label | "Add Cellular Plan" on some devices | "Add eSIM" throughout |
| Manual entry | Bottom of scan screen | More prominent, redesigned |
| Quick Transfer | Available since iOS 16 | More reliable, better progress indicator |
| Carrier updates | Some need a restart | Background updates |

If you see "Add Cellular Plan," it's the same function as "Add eSIM."

## iOS version history for eSIM (15 through 18)

The labels have drifted more than people realize. Here's the full arc, so a three-year-old tutorial on your two-year-old phone still makes sense.

| iOS version | Menu label | What changed for eSIM |
|---|---|---|
| iOS 15 | "Add Cellular Plan" | eSIM available on XS/XR and newer; dual SIM is one eSIM + one physical on most models |
| iOS 16 | "Add Cellular Plan" | **Quick Transfer** (move an eSIM from a nearby iPhone) arrives; convert-to-eSIM for select carriers |
| iOS 17 | "Add eSIM" / "Add Cellular Plan" (mixed) | Convert-to-eSIM expands to more carriers; dual *active* eSIM on iPhone 13 and later |
| iOS 18 | "Add eSIM" throughout | Redesigned add screen, background carrier updates, clearer dual-eSIM view |

The short version: everything from iOS 16 onward can do Quick Transfer, iOS 17 standardized dual eSIM, and iOS 18 is mostly a polish pass on labeling and reliability.

## After the profile installs: re-register iMessage and FaceTime

Most guides stop at "Cellular Setup Complete," but there's one iOS quirk worth handling: if you switched your default voice line, iMessage and FaceTime may still be tied to the old line — or show "Waiting for activation."

1. Settings > Messages > Send & Receive, and confirm your number is selected.
2. Settings > FaceTime, and confirm the right number or Apple ID is active.
3. If either shows "Waiting for activation," toggle iMessage off and on while connected to Wi-Fi.

This matters on dual-line setups where the travel eSIM is data-only and you want to keep messaging on your home number.

## Quick Transfer: moving an eSIM to a new iPhone

When setting up a new iPhone near your old one, choose **"Transfer eSIM from nearby iPhone"** and keep both devices close with Bluetooth and Wi-Fi on. The profile moves wirelessly in a minute or two.

If the prompt doesn't appear, go to Settings > Cellular > Add eSIM > **Transfer from Nearby iPhone** on the new phone. If the profile lands but shows "No Service," delete it from the old iPhone first — some carriers require the old profile to be released.

For moving an eSIM to Android, carrier re-issues, or a phone you already sold or reset, see the [eSIM transfer guide](/faq/how-to-transfer-esim-between-iphone-and-android/).

## Quick Transfer edge cases

Quick Transfer is brilliant when both iPhones are in the room. When they aren't, here's what happens.

- **You sold, lost, or reset the old iPhone.** Quick Transfer is off the table — it needs the source device powered on and unlocked. Instead, contact your carrier and ask them to re-issue the eSIM (usually free, takes minutes), then install the fresh QR on the new phone. Detailed re-issue steps are in the [transfer guide](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **"Transfer from Nearby iPhone" is missing.** It only appears on devices running iOS 16 or later. On an older iPhone, or if the source is out of reach, fall back to a carrier QR re-issue.
- **The transfer stalls mid-way.** Put both phones on the same Wi-Fi, keep them within a few centimeters, and disable Low Power Mode on both. Bluetooth must stay on — Quick Transfer pairs over Bluetooth before handing off over Wi-Fi.
- **You're moving from Android.** Quick Transfer is iPhone-to-iPhone only. Android-to-iPhone transfers go through your carrier, not the Settings app.
- **The eSIM moved but a physical SIM didn't.** Quick Transfer only moves *eSIM* profiles — a physical SIM card still has to be physically swapped (unless you convert it to eSIM first, above).

## Adding a second (travel) eSIM while keeping your home number

This is the most common real-world setup: your home line stays exactly where it is, and a travel eSIM rides along for data. Do it in this order.

1. **Keep your home line untouched.** Whether it's a physical SIM or an eSIM, leave it in place. Don't delete it, don't convert it.
2. **Install the travel eSIM** via QR, manual entry, or the provider app (Roami, Airalo, Holafly).
3. **Label the lines.** Settings > Cellular, tap each line, and use "Cellular Plan Label" to rename them — "Home" and "Roami Travel" — so you can tell them apart later.
4. **Set Cellular Data to the travel eSIM.** Settings > Cellular > Cellular Data, and select the travel line.
5. **Set Default Voice Line to your home number.** This keeps calls, iMessage, and FaceTime on your regular number.
6. **Turn Data Roaming ON for the travel eSIM, OFF for home.** The travel line needs roaming to reach partner networks; the home line doesn't, and keeping it off prevents accidental daily fees.
7. **Leave "Allow Cellular Data Switching" OFF.** With it on, a brief signal dip could flip data to your home line and trigger a roaming charge.

Now you have a data pipe from your travel eSIM and a number everyone can still reach — no SIM swapping, no second phone.

## Configure your two lines for travel

- **Default Voice Line:** keep your home SIM so calls and iMessages stay on your regular number.
- **Cellular Data:** point this at the travel eSIM.
- **Allow Cellular Data Switching:** leave it **OFF**. With it on, a brief signal dip could flip data to your home line and trigger a daily roaming charge.
- **Data Roaming:** OFF on the home SIM, ON for the travel eSIM (travel eSIMs need it to reach partner networks).

If signal bars show but pages won't load, it's usually an APN issue — the full APN table lives in the [deep troubleshooting guide](/faq/esim-deep-troubleshooting-guide-2026/).

## "Add eSIM" greyed out, or "Add Cellular Plan" missing

If the option is greyed out or simply not there, something upstream is blocking it. Here are the causes, most common first.

| Cause | How to tell | Fix |
|---|---|---|
| Carrier-locked iPhone | Settings > General > About > Carrier Lock doesn't say "No SIM restrictions" | Unlock via your carrier, or use the locked carrier's own eSIM |
| Carrier doesn't offer eSIM | Your carrier only issues physical SIMs | Switch carriers, or use a travel eSIM for data |
| eSIM slots already full | iPhone 13+ holds two active eSIMs; XS–12 hold one | Turn off or remove an existing line to free a slot |
| MDM / corporate profile | A work phone with a management profile installed | The `AllowESIMModification` restriction blocks changes — contact IT |
| China / Hong Kong model | Model number ends in the China-specific suffix, no eSIM hardware | eSIM isn't available on China-mainland iPhones |
| Software glitch | A recent iOS update left the menu stale | Restart, then check again |

The single biggest cause is a carrier lock — it accounts for the majority of "why can't I add an eSIM" tickets. The second is trying to add a third line on a phone that only allows two active.

## What about Apple Watch and iPad?

An Apple Watch mirrors one of your iPhone's lines — it can't use a travel eSIM on its own — and cellular iPads use their own Settings > Cellular Data path. Full details are in the [iPad & Apple Watch eSIM guide](/faq/ipad-apple-watch-esim-support-guide/).

## Managing multiple eSIMs on your iPhone

Once you've got two or three profiles installed, a little housekeeping keeps them from becoming a confusing pile.

- **Label every line.** Settings > Cellular > a line > Cellular Plan Label. "Home," "Roami Travel," and "Spain eSIM" beat the defaults ("Primary," "Secondary," "Travel").
- **Turn lines on or off.** Settings > Cellular > a line > Turn On This Line. Off means it stops trying to register — handy for a dormant travel eSIM you plan to reuse next trip.
- **Switch the data line instantly.** Settings > Cellular > Cellular Data lets you move data between lines with no reboot.
- **Watch the active-line limit.** iPhone 13 and later allow two active lines at once; a third profile can be *stored* but not active until you turn one off.
- **Delete when done.** After a trip, remove the expired travel eSIM (Settings > Cellular > the line > Delete eSIM) so it stops cluttering the list — but only once the plan is expired, since QR codes are single-use.

## eSIM, iCloud backups, and erasing your iPhone

One thing most people learn the hard way: **eSIMs are not part of your iCloud backup.** A restore from backup brings back your apps, settings, and photos — but not your cellular profiles. The profiles live on the phone's eUICC chip, and only three things move them: Quick Transfer, a carrier re-issue, or re-downloading from your provider.

Practical consequences:

- **"Erase All Content and Settings" removes your eSIMs.** Before you erase (to sell, trade in, or fix a problem), know that you'll need to re-download each eSIM afterward — and travel eSIMs with single-use QR codes may require a whole new plan.
- **A normal iCloud restore won't wipe or restore eSIMs.** Restoring to the *same* phone leaves your eSIMs untouched; restoring to a *new* phone still requires Quick Transfer or a carrier re-issue for the lines.
- **Backup won't rescue a lost eSIM.** If you erase or break the phone, the profile is gone until the carrier re-issues it. Save your provider's manual-entry strings (SM-DP+ address + activation code) somewhere separate from the phone.

## Common iPhone errors (and where to fix them)

The most frequent failures — "Cellular Plan Cannot Be Added," stuck "Activating," "No Service" after install — are covered error-by-error, with APN values, in the [eSIM Deep Troubleshooting Guide](/faq/esim-deep-troubleshooting-guide-2026/). The single biggest cause is a carrier-locked phone; the second is Data Roaming left off on the travel eSIM.

## Frequently Asked Questions

**How many eSIMs can I store on my iPhone?**
Eight or more profiles, though only two can be active at once (iPhone 13 and newer). Older models (XS–12) keep one active eSIM plus a physical SIM.

**Can I delete my eSIM after the trip?**
Yes — Settings > Cellular > the eSIM > Delete eSIM once the plan is expired. Never delete mid-trip: QR codes are single-use, so you'd need a new plan.

**Does an eSIM drain my iPhone battery?**
Not meaningfully. Two active lines in a weak-signal area can add a percent or two a day, but an eSIM alone draws about the same as a physical SIM.

**Do I need Data Roaming on for a travel eSIM on iPhone?**
Yes — it's required for the eSIM to register on partner networks, and it doesn't add roaming charges. Missing this is the #1 cause of "No Service."

**Can I use a physical SIM and eSIM together on iPhone?**
Yes — dual SIM works out of the box. (US iPhone 14 and newer are eSIM-only, so you'd pair two eSIMs instead.) See the [iPhone compatibility hub](/faq/iphone-11-esim-compatible/) for how dual SIM works.

**What's the difference between eSIM and a physical SIM?**
The short version: an eSIM is a digital profile you can't remove, and it switches carriers instantly. The full comparison is in [What is eSIM?](/faq/what-is-esim/).

**Can I convert my physical SIM to eSIM on my iPhone?**
If your carrier supports it, yes — Settings > Cellular > your line > Convert to eSIM. The big three US carriers support it; many MVNOs don't. Your phone needs to be on that carrier's network to convert.

**Why is "Add eSIM" greyed out on my iPhone?**
Usually a carrier lock, a full eSIM slot, or a corporate MDM profile blocking changes. Check Settings > General > About > Carrier Lock first — if it doesn't say "No SIM restrictions," that's your answer.

**What happens to my eSIM if I erase my iPhone?**
"Erase All Content and Settings" removes eSIM profiles. You'll need to re-download them from your carrier afterward. Travel eSIMs with single-use QR codes may need a new plan, so erase only when you're ready to set everything up again.

**Does Quick Transfer work if I no longer have my old iPhone?**
No — it needs both phones present and powered on. If your old iPhone is sold, lost, or reset, ask your carrier to re-issue the eSIM instead. See the [transfer guide](/faq/how-to-transfer-esim-between-iphone-and-android/).

**Can I pause my travel eSIM on iPhone between trips?**
You can't pause the plan's validity clock, but you can turn the line OFF (Settings > Cellular > the line > Turn On This Line) so it stops registering and stops using battery. It stays stored and ready to flip back on next trip — as long as the plan's validity window hasn't ended.

---

## Ready for your next adventure?

👉 **Try it free first** — grab a [free eSIM](/free-esim/) and run this walkthrough end to end. Then pick your destination: [eSIM for the USA](/united-states-esim/), [Japan](/japan-esim/), [Europe](/europe-esim/), or the [UK](/united-kingdom-esim/).

*Based on Apple official documentation, GSMA standards, and carrier testing. Updated: August 2026.*

## Sources

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Apple Support — About eSIM on iPhone](https://support.apple.com/en-us/HT209044)
