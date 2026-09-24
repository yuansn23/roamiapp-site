---
title: "eSIM overzetten tussen iPhone en Android"
h1_title: "Hoe je een eSIM overzet tussen iPhone en Android"
description: "Verplaats je eSIM tussen iPhone en Android met een provider-app of opnieuw uitgegeven QR code. Stap voor stap voor beide richtingen, plus oplossingen voor veelvoorkomende overzettingsfouten."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM cross-platform transfer", "eSIM transfer error", "iOS 18 eSIM", "eSIM carrier lock", "eSIM confirmation code", "eSIM no service", "eSIM APN settings", "eSIM troubleshooting", "eSIM activation failed", "transfer eSIM between iPhone and Android", "can't transfer eSIM to new iPhone", "Orange eSIM transfer"]
date: 2026-09-22T00:00:00Z
lastmod: 2026-09-22T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Bijgewerkt op"
  min_read: "min leestijd"
  toc: "Inhoudsopgave"

breadcrumbs:
  home:
    text: "Home"
    url: "/"
  parent:
    text: "Helpcentrum"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "Populaire eSIMs"
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
  title: "Claim gratis eSIM"
  icon: "🎁"
  item_suffix: "Gratis eSIM"
  item_subtitle: "Gratis eSIM"
  items:
    - name: "UK eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Duitsland"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thailand"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hongkong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "Populaire vragen"
  items:
    - question: "Wat is eSIM-activering en hoe werkt het?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Hoe activeer je een eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Hoe activeer je eSIM op iPhone (alle modellen)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Actueelste eSIM-compatibiliteitslijst"
      url: "/compatibility/"
---


> **Redactionele opmerking:** Je kunt een eSIM alleen tussen iPhone en Android overzetten als je provider cross-platform overzetten ondersteunt, en de meeste reis-eSIMs kunnen helemaal niet verplaatst worden. De methoden hieronder volgen de officiële providerdocumentatie en richten zich op overzetten die vandaag daadwerkelijk werken. Bekijk eerst de sectie ondersteunde providers om te zien of jouw abonnement in aanmerking komt.

Vooraf de realiteit: een eSIM kan over het algemeen niet direct tussen iPhone en Android worden verplaatst, omdat de twee platforms geen overzettingsprotocol delen. De oplossingen zijn wel eenvoudig — laat je provider het profiel opnieuw uitgeven als QR code, of zet het over via de app van de provider waar dat wordt ondersteund. Beide richtingen, plus de uitzonderingen voor reis-eSIMs, staan hieronder uitgelegd.

## Wat is eSIM-overzetten?

**Zoek hieronder jouw scenario en spring direct naar de juiste methode.**

| Jouw scenario | Kun je overzetten? | Beste methode | Waar heen |
| :--- | :--- | :--- | :--- |
| **iPhone → nieuwe iPhone** | ✅ Ja (altijd) | Apple Quick Transfer | [Overzetten binnen één platform](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → nieuwe Samsung** | ✅ Ja (meestal) | Samsung Smart Switch | [Overzetten binnen één platform](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (provider ondersteunt app-overzetten)** | ✅ Ja | Provider-app | [Methode A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (provider ondersteunt app niet)** | ✅ Ja | QR code als terugval | [Methode B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (provider ondersteunt)** | ✅ Ja | Provider-app of QR code | [Methode B](#esim-transfer-from-iphone-to-android) |
| **Reis-eSIM (Roami, Airalo, Holafly)** | ❌ Nee | Koop een nieuw abonnement op het nieuwe apparaat | [Waarom reis-eSIMs niet kunnen worden overgezet](#why-cant-travel-esims-be-transferred) |
| **Provider ondersteunt overzetten niet** | ✅ Ja (terugval) | Neem contact op met de provider voor een QR code | [Terugvalmethoden](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Belangrijkste regel:** Er is **geen ingebouwde iOS-naar-Android eSIM-overzetknop** zoals die er wel is voor iPhone-naar-iPhone. Cross-platform overzetten loopt altijd **via je provider** — via hun app of door een nieuwe QR code aan te vragen. Reis-eSIMs zijn **alleen voor één apparaat** — koop een nieuwe op je nieuwe telefoon.

**Lukt overzetten niet?** De meeste reis-eSIMs (Roami, Airalo, Holafly) zijn **alleen voor één apparaat** — je moet een nieuw abonnement kopen op je nieuwe telefoon. Voor eSIMs van lokale providers werkt de QR-code-terugval altijd.

> **Belangrijkste beperking:** Er is **geen ingebouwd iOS-naar-Android eSIM-overzetten** — je moet via je provider gaan. Deze gids loopt je door elke ondersteunde methode heen.

Nieuw met eSIM-installatie? Onze [gids voor het activeren van een eSIM](/faq/how-to-activate-an-esim/) behandelt de installatie vanaf nul. Als de overdracht halverwege mislukt, koppelt de [eSIM Deep Troubleshooting Guide](/faq/esim-deep-troubleshooting-guide-2026/) elke foutmelding aan een oplossing.


## Welke eSIM-overzettingsmethode moet je gebruiken?

| Jouw situatie | Beste methode | Tijd | Provider nodig? |
| :--- | :--- | :--- | :--- |
| **Wisselen iPhone ↔ iPhone** | Apple Quick Transfer (Instellingen > Mobiel netwerk > eSIM toevoegen > Overzetten) | 2 min | Nee (Apple regelt het) |
| **Wisselen Android ↔ Android (Samsung naar Samsung, enz.)** | Merkspecifiek overzetten (Samsung: SIM Manager > eSIM toevoegen > Overzetten) | 2 min | Nee (merk regelt het) |
| **Wisselen iPhone ↔ Android (iOS 18 / Android 16+)** | Overzetten via provider-app | 3-5 min | Ja |
| **Wisselen iPhone ↔ Android (ouder besturingssysteem)** | Opnieuw uitgegeven QR code van provider | 5-10 min | Ja |
| **Reis-eSIM (Roami, Airalo, Holafly)** | ❌ Kan niet worden overgezet – koop een nieuw abonnement op het nieuwe apparaat | N.v.t. | Nee – provider staat het niet toe |
| **Je provider ondersteunt overzetten niet** | QR-code-terugval (bel de provider) | 10-20 min | Ja |


## Complete gids voor eSIM-overzetten

Hier is het stapsgewijze routekaart voor iedereen die een eSIM naar een nieuw apparaat verplaatst.

| Stap | Waar je aan denkt | Wat je moet doen | Waar je het vindt |
| :--- | :--- | :--- | :--- |
| **1. Bepaal je scenario** | "Wat voor wissel maak ik?" | Bepaal: zelfde ecosysteem (iOS→iOS / Android→Android) of cross-platform (iOS↔Android)? | [Snelle beslisboom hierboven](#which-esim-transfer-method-should-you-use) |
| **2. Controleer OS-versies** | "Zijn mijn telefoons bijgewerkt genoeg?" | iPhone moet iOS 18+ zijn, Android moet Android 16+ zijn voor native cross-platform overzetten. | Werk eerst bij als dat niet zo is. |
| **3. Controleer carrier lock** | "Is mijn telefoon vergrendeld aan een provider?" | Instellingen > Algemeen > Info > Carrier Lock moet "No SIM restrictions" zeggen. | [Voorwaarden hieronder](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Controleer providerondersteuning** | "Staat mijn provider dit toe?" | Open de provider-app en zoek de eSIM-overzetoptie. Of bel en vraag het. | [Sectie ondersteunde providers hieronder](#carriers-that-support-cross-platform-esim-transfer) |
| **5. Voer de overdracht uit** | "Tijd om het nummer te verplaatsen." | Volg de specifieke stappen voor jouw scenario. | [Methode A](#esim-transfer-from-android-to-iphone) of [Methode B](#esim-transfer-from-iphone-to-android) |
| **6. Instellingen na overdracht** | "Mijn nummer staat op de nieuwe telefoon – wat nu?" | Activeer WhatsApp, iMessage, 2FA-apps opnieuw en test SMS. | [Sectie na eSIM-overdracht hieronder](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. Los problemen op als het mislukt** | "Het werkte niet – wat nu?" | Controleer de foutmelding, verwijder het oude profiel, probeer opnieuw, of gebruik de QR-code-terugval. | [Foutopsporingstabel hieronder](#why-did-my-esim-transfer-fail) |


## Wat je nodig hebt voordat je een eSIM-overdracht start

**Voor beide richtingen:**
- Beide apparaten moeten **ontgrendeld** zijn (geen **carrier lock**). Om dit te controleren op iPhone: `Instellingen > Algemeen > Info` → `Carrier Lock` moet "No SIM restrictions" zeggen. **Dit is de nummer één reden dat overdrachten mislukken** – als je telefoon vergrendeld is, kun je de eSIM niet overzetten naar het netwerk van een andere provider.
- Beide apparaten hebben **Bluetooth ingeschakeld**.
- Beide apparaten zijn verbonden met **wifi** (of ten minste één heeft een werkende mobiele dataverbinding).
- De eSIM die je wilt overzetten is **actief** op het bronapparaat (niet al verwijderd).
- Je provider **ondersteunt cross-platform overzetten** (zie lijst hieronder). Zo niet, ga dan naar de sectie terugvalmethoden.

Nieuw met profielen en SM-DP+-servers? De [uitleg over eSIM-activering](/faq/what-is-esim-activation-and-how-does-it-work/) behandelt wat er werkelijk gebeurt wanneer een profiel tussen apparaten verhuist.
- Je **eSIM-profiel** is niet **verlopen** – sommige profielen hebben beperkte geldigheidsdata.

**Voor Android → iPhone:**
- iPhone moet op **iOS 18 of later** zijn.
- Android moet op **Android 16 of later** zijn.

**Voor iPhone → Android:**
- iPhone moet op **iOS 18 of later** zijn.
- Android moet op **Android 16 of later** zijn.

> 🚨 **Kritieke waarschuwing – verwijder niet vóór de overdracht:**
> **Verwijder de eSIM NIET van je oude apparaat voordat je met de overdracht begint.** Als je eerst de bron-eSIM verwijdert, is het profiel weg van je apparaat en kan je provider het mogelijk niet naar het nieuwe apparaat overzetten. Je moet contact opnemen met je provider voor een compleet nieuwe QR code – wat 24-48 uur kan duren. Start de overdracht altijd eerst vanaf het nieuwe apparaat, of houd de oude eSIM actief tot de nieuwe bevestigd werkend is.

> 🚨 Als je apparaat op een ouder besturingssysteem zit, verschijnt de menuoptie gewoon niet. Werk eerst bij. Als je te maken hebt met een **verlopen eSIM-profiel**, neem dan contact op met je provider voor een nieuwe QR code voordat je met de overdracht begint.

De pagina [Google Support – eSIM op Pixel](https://support.google.com/pixelphone/answer/7086887) biedt extra details voor Android-gebruikers die hun eSIM willen overzetten.


## Waarom kunnen reis-eSIMs niet worden overgezet?

Dit is de nummer één vraag die we krijgen. Dit is de reden:

| Reden | Uitleg |
| :--- | :--- |
| **EID-koppeling** | Elk eSIM-profiel is cryptografisch gekoppeld aan de **EID** (eUICC Identifier) van het apparaat waarop het is geactiveerd. De EID van je telefoon is uniek – als een serienummer voor je eSIM-hardware. (Je kunt je EID zien door `*#06#` te toetsen op de meeste telefoons.) |
| **Eenmalige QR codes** | Reis-eSIM QR codes zijn ontworpen voor **eenmalig gebruik**. Na het scannen wordt de QR code ongeldig gemaakt op de server van de provider. Dit is een beveiligingsfunctie om fraude te voorkomen. |
| **Geen provideraccount** | Reis-eSIMs worden gekocht als zelfstandige producten – je hebt geen "provideraccount" met doorlopende dienstverlening. Er is niemand bij in te loggen om een overdracht aan te vragen. |
| **Ontworpen voor gemak** | Reis-eSIMs ruilen overdraagbaarheid in voor gemak. Je krijgt directe activering zonder identiteitsverificatie, maar de keerzijde is dat het profiel aan één apparaat is gekoppeld. |

**De kern:** Als je een reis-eSIM gebruikt (Roami, Airalo, Holafly, Nomad, enz.), **verspil geen tijd aan het proberen over te zetten**. Het werkt niet. Koop gewoon een nieuw abonnement op je nieuwe apparaat. De kosten van een nieuwe reis-eSIM zijn meestal lager dan de tijd die je zou besteden aan het proberen overzetten van een niet-overdraagbaar profiel.

**Wat met provider-eSIMs (postpaid/prepaid)?**
Provider-eSIMs zijn anders. Je hebt een account bij de provider, en zij kunnen je eSIM opnieuw uitgeven aan een nieuw apparaat omdat zij het profiel op hun servers beheren. Daarom kunnen provider-eSIMs worden overgezet, en reis-eSIMs niet.


## Welke eSIM-overzettingsmethode past bij jou?

| Kenmerk | Overzetten via provider-app | Provider QR code | Native overzetten (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Werkt cross-platform?** | ✅ Ja | ✅ Ja | ❌ Nee (alleen zelfde ecosysteem) |
| **Benodigde tijd** | 3-5 min | 5-10 min | 1-2 min |
| **Involvement provider** | Zelfservice via app | Provider contacteren nodig | Geen |
| **Werkt tijdens reizen?** | ✅ Ja (met wifi) | ✅ Ja (met wifi) | ✅ Ja |
| **Succespercentage** | Hoog (indien ondersteund) | Zeer hoog (werkt altijd) | Zeer hoog |
| **Beste voor** | Snel overzetten, providers met app-ondersteuning | Elke provider, terugval als de app faalt | Apparaatupgrades binnen hetzelfde ecosysteem |
| **Kosten** | Meestal gratis | Kan $0‑25 kosten voor opnieuw uitgeven van QR code | Gratis |


## eSIM overzetten van Android naar iPhone

Dit is het meest voorkomende scenario – wisselen van een Samsung, Pixel of andere Android naar een nieuwe iPhone. De betrouwbaarste manier om je nummer te verplaatsen is via de app van je provider.

### Stap voor stap

**Voordat je begint:**
- Zorg dat de app van je provider op de nieuwe iPhone is geïnstalleerd (of dat je klaar bent om in te loggen op de website van de provider).
- Ken je account-PIN of inloggegevens.
- **Verwijder de eSIM NOG NIET van je Android.**

**Op je iPhone (doel):**
1. Installeer en open de app van je provider (bijvoorbeeld de T‑Mobile-, Verizon- of AT&T-app).
2. Log in en zoek naar een optie zoals "Activeer eSIM", "Wijzig apparaat" of "Overzetten naar nieuw apparaat".
3. Volg de instructies om de **EID** en **IMEI** van je nieuwe iPhone in te voeren (te vinden onder `Instellingen` → `Algemeen` → `Info`).
4. De provider pusht je eSIM-profiel naar de nieuwe iPhone, of genereert een QR code om te scannen.
5. Ga op de iPhone naar `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen` en scan de QR code als er een is gegenereerd.
6. Wacht op "Activering voltooid". Je nummer is nu actief op de iPhone.
7. **Nu** kun je de eSIM van je Android verwijderen (Instellingen > Verbindingen > SIM Manager > tik op de eSIM > Verwijderen).

**iOS 18-tip:** Als je op iOS 18 zit, is de "eSIM toevoegen"-flow opnieuw ontworpen met een prominentere QR-scanner en betere foutafhandeling. Je ziet een voortgangsindicator tijdens het downloaden van het profiel.

✅ **Klaar.** Je nummer is nu actief op de iPhone. Als je provider geen app aanbiedt, neem dan contact op om je eSIM opnieuw uit te laten geven als nieuwe QR code (zie de terugvalmethoden hieronder).

### Wat als het overzetten via de app niet werkt?

Gebruik de **QR-code-terugval van de provider**:

- Neem contact op met je provider (chat, telefoon of website).
- Vertel dat je van apparaat wisselt en vraag om **je eSIM opnieuw uit te geven als nieuwe QR code**.
- Scan de nieuwe QR code op de iPhone: `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen`.
- Voltooi de activering.

Als je tijdens dit proces een **"unable to activate esim"**-fout ziet, controleer je wifi-verbinding en probeer het opnieuw.


## eSIM overzetten van iPhone naar Android

Er is geen ingebouwde optie "Overzetten naar Android" op iPhone. De betrouwbare methode is om je provider je eSIM opnieuw te laten uitgeven.

### Voorwaarden
- Je nieuwe Android-telefoon is **ontgrendeld**.
- Je kunt contact opnemen met je provider (of inloggen op hun app/website).
- Je Android zit op **Android 16 of later**.
- **Verwijder de eSIM NOG NIET van je iPhone.**

### Stappen

**Neem contact op met je provider (of gebruik hun app):**
1. Vertel dat je je eSIM verplaatst van een iPhone naar een Android-telefoon.
2. Geef de **EID** en **IMEI** van het nieuwe Android-apparaat (onder `Instellingen` → `Over de telefoon`).
3. Je provider geeft je eSIM opnieuw uit als nieuwe QR code (of pusht hem via hun app).

**Op je Android (doel):**
1. Ga naar `Instellingen` → `Netwerk en internet` → `SIMs` → `eSIM toevoegen` (formulering verschilt per merk).
2. Scan de QR code die de provider heeft verstrekt.
3. Volg de instructies om het profiel te downloaden en te activeren.
4. Wacht tot de activering is voltooid.
5. **Nu** kun je de eSIM van je iPhone verwijderen (Instellingen > Mobiel netwerk > tik op de eSIM > Verwijder mobiel abonnement).

✅ Klaar. Je nummer woont nu op de Android-telefoon.

> ⚠️ **Belangrijk**: Zodra de overdracht is voltooid, is de eSIM **permanent verwijderd** van de iPhone. Je kunt niet terugdraaien zonder je provider. Zorg dat je een andere actieve lijn of wifi hebt voordat je overzet.


## eSIM overzetten naar een nieuwe iPhone of Samsung

Hoewel cross-platform overzetten de focus van deze gids is, willen veel gebruikers gewoon een eSIM binnen hetzelfde ecosysteem verplaatsen. Dit is hoe. (Verhuizen naar een eSIM-only iPhone 16 uit de VS? De [iPhone 16-activeringsgids](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) behandelt de specifieke punten van overzetten tijdens de installatie.)

### eSIM overzetten van iPhone naar iPhone

De ingebouwde **Quick Transfer** van Apple is de eenvoudigste methode:

1. Kies tijdens de installatie van je nieuwe iPhone voor "eSIM overzetten van nabijgelegen iPhone" wanneer daarom wordt gevraagd.
2. Houd beide telefoons dicht bij elkaar met Bluetooth en wifi ingeschakeld.
3. Bevestig de overdracht op je oude iPhone.
4. Wacht 1-2 minuten tot de **eSIM-profieldownload** op het nieuwe apparaat is voltooid.

**Als Quick Transfer niet werkt:** Ga naar Instellingen > Mobiel netwerk op je nieuwe iPhone > eSIM toevoegen > Overzetten van nabijgelegen iPhone.

**Als dat mislukt:** Gebruik de QR-codemethode van de provider – neem contact op met je provider voor een nieuwe QR code.

### eSIM overzetten van Android naar Android

Android-overzettingsmethoden verschillen per merk:

**Samsung:** Instellingen > Verbindingen > SIM Manager > eSIM toevoegen > eSIM overzetten van oud apparaat (volg de instructies op het scherm). Werkt op Samsung Galaxy S21 en nieuwer, Z Flip/Z Fold-serie.

**Google Pixel:** Tijdens de installatie wordt je mogelijk gevraagd je eSIM over te zetten. Gebruik anders de provider-app of vraag een nieuwe QR code aan.

**Algemene Android:** Als je merk geen ingebouwd overzetten biedt, gebruik dan de QR-code-terugvalmethode van de provider.

### Vergelijking cross-platform vs. intra-platform eSIM-overzetten

| Kenmerk | Cross-platform | Intra-platform |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N.v.t. | ✅ Quick Transfer werkt |
| **Android ↔ Android** | N.v.t. | ✅ Merkspecifieke methoden |
| **iOS ↔ Android** | ✅ Behandeld in deze gids | ❌ Niet direct ondersteund |
| **Afhankelijkheid van provider** | Hoger | Lager (Apple/Google regelen het) |
| **Benodigde tijd** | 3-10 min | 1-2 min |
| **Succespercentage** | Verschilt per provider | Over het algemeen hoog |

Voor hoe eSIM-gedrag verschilt tussen iPhone-generaties (opslaglimieten, dual-SIM-regels, regionale varianten), zie onze [iPhone eSIM-compatibiliteitshub](/faq/iphone-11-esim-compatible/).


## Providers die cross-platform eSIM-overzetten ondersteunen

Cross-platform eSIM-overzetten is nog nieuw, en providerondersteuning wordt geleidelijk uitgerold. Er is geen volledige openbare lijst van elke ondersteunde provider, en beschikbaarheid verandert vaak, dus controleer de website of app van je provider voor de actuele status.

### Bevestigde ondersteunde providers

| Provider | Regio | Overzetmethode | Overzetlimiet | Kosten |
|---------|--------|-----------------|----------------|------|
| **Orange** | Frankrijk, Europa | Orange app → "My eSIM space" → "Transfer to new device" | 3x per jaar | Gratis |
| **SFR** | Frankrijk | SFR & Moi app → "Manage my SIM" → "Transfer eSIM" | 5x per jaar | Gratis |
| **T-Mobile** | VS | T-Mobile app → "Manage eSIM" → "Transfer to new device" | Onbeperkt | Gratis |
| **Verizon** | VS | My Verizon app → "Activate or switch device" | Onbeperkt | Gratis |
| **AT&T** | VS | AT&T app → "Activate eSIM" | Verschilt per abonnement | Gratis (postpaid) |
| **EE** | VK | EE app → "Plan" → "eSIM transfer" | 3x per jaar | Gratis |
| **Deutsche Telekom** | Duitsland | Telekom app → "eSIM transfer" | Onbeperkt | Gratis |
| **Swisscom** | Zwitserland | Swisscom app → "eSIM transfer" | 3x per jaar | Gratis |
| **Bouygues** | Frankrijk | QR code opnieuw uitgeven (via klantportaal) | 3x per jaar | Gratis |
| **Free** | Frankrijk | QR code opnieuw uitgeven (via klantportaal) | 2x per jaar | Gratis |
| **Vodafone** | VK, Europa | Vodafone app → "eSIM transfer" | Verschilt per land | Gratis (postpaid) |
| **Google Fi** | VS, wereldwijd | Google Fi app → "Activate on this device" | Onbeperkt | Gratis |

### Reis-eSIMs zijn niet overdraagbaar

| Provider | Overdraagbaar? | Wat je in plaats daarvan doet |
|----------|---------------|-------------------|
| **Roami** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |
| **Airalo** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |
| **Holafly** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |
| **Nomad** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |

**Hoe controleer je of je provider het ondersteunt?** Probeer de stappen in Methode A of B. Als je provider geen overzetten via app of een nieuwe QR code aanbiedt, gebruik dan de terugvalmethoden hieronder.


## Terugvalmethoden wanneer cross-platform eSIM-overzetten niet wordt ondersteund

Als je provider niet op de lijst staat, of je ziet een **eSIM-overzettingsfout**, gebruik dan een van deze alternatieven:

### Door provider uitgegeven QR code
1. Bel of chat met je provider.
2. Vertel: "Ik wissel van Android naar iPhone (of omgekeerd). Geef mijn eSIM alstublieft opnieuw uit als nieuwe QR code."
3. Ze e-mailen je een QR code of een activeringslink.
4. Ga op het nieuwe apparaat naar `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen` → `Gebruik QR code` en scan.
5. De eSIM van het oude apparaat stopt met werken nadat de nieuwe is geactiveerd.

**Tip:** Sommige providers rekenen een kleine vergoeding voor het opnieuw uitgeven van een eSIM ($0-25). Vraag het voordat ze het doen.

### Handmatige SM-DP+-invoer
Als je provider je een **activeringscode** en een **SM-DP+ adres** geeft (het serveradres dat het eSIM-profiel aan je telefoon levert), kun je de eSIM handmatig toevoegen op het nieuwe apparaat:
1. `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen` → `Details handmatig invoeren`.
2. Plak het SM-DP+ adres en de activeringscode.
3. Tik op `Volgende`. Dit werkt op zowel iPhone als Android.

### Koop een nieuw abonnement
Als je een reis-eSIM gebruikt (Roami, Airalo, Holafly), verspil geen tijd aan het proberen over te zetten – het werkt niet. Koop gewoon een nieuw abonnement op je nieuwe apparaat — onze [vergelijking van reis-eSIM-abonnementen](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) rangschikt de providers die de moeite waard zijn om opnieuw te installeren.

> **Overgangstip:** De QR-code-terugval is de betrouwbaarste methode voor elke provider, ongeacht of ze overzetten via app ondersteunen. Het kan een telefoontje kosten, maar het werkt altijd.


## eSIM overzetten of nieuw activeren?

Soms is het kopen van een nieuwe eSIM sneller dan overzetten. Dit is wanneer je wat kiest:

| Factor | Overzetten | Nieuwe activering | Wat is beter? |
|--------|----------|----------------|------------------|
| **Je houdt hetzelfde telefoonnummer** | ✅ Nummer behouden | ❌ Nieuw nummer krijgen | Overzetten wint |
| **Je hebt 2FA gekoppeld aan je nummer** | ✅ Toegang behouden | ❌ Risico toegang te verliezen | Overzetten wint |
| **Je provider rekent kosten voor overzetten** | Kan $0-25 kosten | $0 (je koopt toch al nieuw) | Hangt af van de vergoeding |
| **Reis-eSIM** | ❌ Onmogelijk | ✅ Eenvoudig | Nieuwe activering wint |
| **Je hebt haast (minder dan 5 minuten)** | ⚠️ Kan 5-10 min duren | ✅ 2 min QR scannen | Nieuwe activering wint |
| **Je wilt je bestaande abonnement/data behouden** | ✅ Ongebruikte data behouden | ❌ Ongebruikte data verliezen | Overzetten wint |

**Aanbeveling:** Als je hetzelfde providerabonnement houdt en je telefoonnummer wilt behouden, zet dan over. Als je op een reis-eSIM zit of haast hebt, koop dan gewoon een nieuw abonnement op je nieuwe apparaat.


## Waarom is mijn eSIM-overdracht mislukt?

| Fout / Symptoom | Meest waarschijnlijke oorzaak | Oplossing |
|----------------|-------------------|-----|
| "Transfer not available – carrier not supported" | Je provider ondersteunt cross-platform overzetten niet. | Gebruik de terugvalmethoden hierboven. |
| QR code scant maar zegt daarna "session expired" | Je deed te lang na het genereren van de QR code (die is verlopen). | Herhaal het proces en scan onmiddellijk. |
| Android zegt "Pairing failed" | Bluetooth- of lokale netwerktoestemmingen geblokkeerd. | Op iPhone: `Instellingen > Privacy & Beveiliging > Lokaal netwerk` – zorg dat `Instellingen` op AAN staat. Op Android: zet "Wi‑Fi security scan" uit (meestal onder geavanceerde wifi-instellingen). |
| Overdracht start maar stopt bij 50% | Zwak wifi- of mobiel signaal. | Breng beide telefoons dichter bij de router. Zet VPN uit op beide apparaten. |
| **"eSIM already bound to another device"** | Het profiel is niet goed vrijgegeven van het oude apparaat. | Ga op het oude apparaat naar `Instellingen > Mobiel netwerk` en verwijder de eSIM handmatig (`Delete eSIM`, als nog zichtbaar). Wacht daarna 5 minuten en probeer opnieuw. Als het nog steeds faalt, neem contact op met de provider voor het vrijgeven van het profiel. |
| iPhone vraagt om **bevestigingscode** na het scannen | Het eSIM-profiel heeft een verplichte **eSIM-bevestigingscode** (zeldzaam). | Zoek de code in de e-mail van de provider (meestal 4-8 cijfers). Niet gevonden? Vraag het de provider. |
| Dubbelklikken op zijknop doet niets (iPhone → Android) | Biometrische authenticatie niet ingesteld of uitgeschakeld. | Stel Face ID / Touch ID in, of schakel "Vereis aandacht" voor Face ID tijdelijk uit. |
| **eSIM geen service** na overdracht | APN-instellingen niet geconfigureerd. | Configureer APN handmatig (zie tabel hieronder). |
| **eSIM-profiel verlopen** | Het profiel heeft een beperkte geldigheidsdatum. | Neem contact op met je provider voor een nieuwe QR code. |
| **"Geen optie eSIM toevoegen" op iPhone** | iPhone is carrier-locked of op ouder iOS. | Controleer carrier lock in Instellingen > Algemeen > Info. Werk bij naar iOS 18. |
| **"SIM niet ondersteund" op nieuw apparaat** | Het nieuwe apparaat is carrier-locked aan een andere provider. | Controleer Carrier Lock – moet "No SIM restrictions" zeggen. |
| **Overzetlimiet overschreden** | Je hebt deze eSIM te vaak overgezet (sommige providers beperken tot 3-5 per jaar). | Neem contact op met de providersupport om de limiet te resetten of een nieuwe eSIM te krijgen. |
| **"eSIM transfer failed" op Samsung** | Samsung Smart Switch ondersteunt het specifieke providerprofiel mogelijk niet. | Gebruik in plaats daarvan de QR-code-terugval van de provider. |

### Handmatige APN-configuratie

Als je na de **eSIM-overdracht** **eSIM geen service** ervaart, configureer APN dan handmatig:

| Provider | APN | Gebruikersnaam | Wachtwoord |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (leeg) | (leeg) |
| **SFR** | sl2sfr | (leeg) | (leeg) |
| **Free** | free | (leeg) | (leeg) |
| **Bouygues** | ebouygtel.com | (leeg) | (leeg) |
| **T-Mobile (VS)** | fast.t-mobile.com | (leeg) | (leeg) |
| **AT&T (VS)** | nxgen | (leeg) | (leeg) |
| **Verizon (VS)** | vzwinternet | (leeg) | (leeg) |
| **Telekom (DE)** | internet.telekom | (leeg) | (leeg) |

### Toch nog vastgelopen?
Verzamel deze zaken voordat je de support belt:
- IMEI en EID van het bronapparaat
- IMEI en EID van het doelapparaat
- De exacte foutmelding (maak een screenshot)
- Je accountnummer of telefoonnummer


## Wat gebeurt er met de oude eSIM na de overdracht?

**Hij wordt onmiddellijk gedeactiveerd.**

Het oude eSIM-profiel kan nog kort zichtbaar blijven op het oude apparaat. Je kunt het handmatig verwijderen:
`Instellingen > Mobiel netwerk > tik op de oude eSIM > Verwijder eSIM`.

> 💰 **Facturatie**: Je provider blijft je factureren voor het abonnement. Overzetten annuleert het abonnement niet – het verplaatst alleen de SIM. Om te annuleren moet je apart contact opnemen met de provider.

Als je je zorgen maakt over **eSIM gekoppeld aan een ander apparaat**-fouten, verwijder dan altijd het oude profiel van het bronapparaat nadat de overdracht succesvol is voltooid.

### Tijdlijn overzetten vs. verwijderen

| Actie | Wat er gebeurt | Wanneer te doen |
| :--- | :--- | :--- |
| **Overdracht gestart** | Provider stuurt profiel naar nieuw apparaat | Voordat je de oude eSIM verwijdert |
| **Nieuwe eSIM geactiveerd** | Nieuw apparaat verbindt met netwerk | Nadat de activering is voltooid |
| **Oude eSIM gedeactiveerd** | Provider deactiveert het oude profiel | Automatisch – kan 1-5 minuten duren |
| **Oude eSIM verwijderen** | Verwijdert het inactieve profiel van het oude apparaat | Nadat je hebt bevestigd dat het nieuwe apparaat werkt |


## WhatsApp, iMessage en 2FA verplaatsen na een eSIM-overdracht

Na het succesvol overzetten van je eSIM moet je je berichten-apps en authenticatiediensten op het nieuwe apparaat instellen.

### WhatsApp

WhatsApp gebruikt je telefoonnummer om je account te identificeren. Na de **eSIM-overdracht**:

1. Open WhatsApp op je nieuwe apparaat.
2. Voer je telefoonnummer in (het nummer dat je hebt overgezet).
3. Je ontvangt een verificatiecode via SMS of een geautomatiseerd gesprek op je nummer.
4. Voer de code in – je chats verschijnen opnieuw als je eerder een back-up hebt gemaakt.

**Tip:** Maak een back-up van je chats voordat je met de overdracht begint. Op iPhone: WhatsApp > Instellingen > Chats > Chat-back-up. Op Android: WhatsApp > Instellingen > Chats > Back-up.

**Veelvoorkomend WhatsApp-probleem:** Als je de SMS-verificatiecode niet ontvangt, probeer dan de optie "Bel mij" – WhatsApp belt je nummer en leest de code voor. Als dat faalt, wacht 5 minuten en probeer opnieuw (het providernetwerk kan nog aan het stabiliseren zijn).

### iMessage en FaceTime

1. Ga naar `Instellingen` → `Berichten` en zet `iMessage` AAN.
2. Ga naar `Instellingen` → `FaceTime` en zet `FaceTime` AAN.
3. Wacht 1-2 minuten op de activering. Als er "Wachten op activering" staat, zet het dan uit en weer aan.
4. Controleer of je nummer is geselecteerd: Instellingen > Berichten > Verzenden & ontvangen → selecteer je eSIM-nummer.

### Tweefactorauthenticatie en SMS-verificatie

Omdat je telefoonnummer niet is veranderd, werken op SMS gebaseerde 2FA-codes normaal. App-gebaseerde authenticators (Google Authenticator, Microsoft Authenticator, Authy) kunnen echter opnieuw ingesteld moeten worden:

- **Authy:** Je tokens zijn versleuteld en naar de cloud geback-upt – log gewoon in op het nieuwe apparaat.
- **Google Authenticator:** Je moet je accounts afzonderlijk overzetten of de functie "Accounts overzetten" gebruiken.
- **Microsoft Authenticator:** Gebruik de back-upfunctie om te herstellen op het nieuwe apparaat.
- **SMS 2FA:** Test door een verificatiecode aan te vragen bij je bank of e-mailprovider om te bevestigen dat SMS-aflevering werkt.

### Bank-apps en financiële diensten

De meeste banken detecteren de apparaatwijziging en vragen om herauthenticatie. Houd je inloggegevens en eventuele fysieke token-apparaten klaar.

Voor meer hulp met app-migratie na **eSIM-overdracht**, zie onze [eSIM-installatiegids](/faq/how-to-activate-an-esim/).


## Beste praktijken om eSIM-overzettingsgedoe te voorkomen

✅ **Vóór het overzetten:**
- Controleer providerondersteuning (probeer het menu – als het er staat, wordt het ondersteund).
- Werk beide telefoons bij naar het nieuwste besturingssysteem (iOS 18 / Android 16).
- Laad beide telefoons tot boven 30%.
- Schakel VPN en ad-blockers tijdelijk uit.
- Controleer of je **eSIM-profiel** niet **verlopen** is.
- Maak een back-up van WhatsApp en andere berichten-apps.
- **Verwijder de eSIM NOG NIET van het oude apparaat.**

✅ **Tijdens het overzetten:**
- Houd telefoons binnen 10 cm van elkaar.
- Wissel geen apps en vergrendel het scherm niet.
- Zet Bluetooth of wifi niet uit.
- Wacht op het bevestigingsbericht – ga er niet vanuit dat het klaar is.

✅ **Na het overzetten:**
- Test oproepen en data op het nieuwe apparaat.
- Verwijder de oude eSIM van het bronapparaat om verwarring te voorkomen.
- Houd de wifi van het oude apparaat minstens een uur aan – sommige providers hebben een laatste handshake nodig.
- Activeer WhatsApp, iMessage en 2FA-apps opnieuw.
- Test SMS-verificatiecodes van je bank.
- Stel een herinnering in om het oude abonnement op te zeggen als je volledig van provider wisselt.


## Reizen en eSIM overzetten

Als je naar het buitenland reist en je eSIM moet overzetten, zijn dit enkele belangrijke punten. En als de overdracht midden in de reis niet meer te redden is, is de snelste uitweg meestal het kopen van een lokaal abonnement — zie de [gids voor US eSIM-abonnementen](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) of de [koopgids voor UK eSIM](/faq/how-to-buy-a-uk-esim/) afhankelijk van je bestemming:

### Een eSIM overzetten tijdens het reizen
- Cross-platform overzetten werkt **wereldwijd** zolang je provider het ondersteunt.
- Zorg voor een stabiele wifi-verbinding (hotel, café) voordat je begint.
- Als de overdracht mislukt, is de QR-code-terugval van de provider je beste optie.
- Controleer de **eSIM APN-instellingen** na de overdracht – sommige providers vereisen handmatige configuratie.

### Franse providers en reizen
- **Orange** en **SFR** staan cross-platform overzetten toe waar je ook bent.
- **Free** en **Bouygues** vereisen het opnieuw uitgeven van een QR code – doe dit voordat je vertrekt.
- Voor **reis-eSIMs**: bedenk dat ze over het algemeen **niet overdraagbaar** zijn – koop een nieuw abonnement op je nieuwe apparaat.

### Providers contacteren in het buitenland

| Provider | Ondersteuningscontact | Opmerkingen |
|---------|------------------------|-------|
| **Orange** | Orange app-chat, WhatsApp-support, of telefoon | 24/7 in de meeste regio's |
| **SFR** | SFR & Moi app-chat, telefoon | Beperkte uren |
| **T-Mobile** | T‑Mobile app-chat, iMessage, telefoon | 24/7 support in de VS |
| **Verizon** | My Verizon app-chat, telefoon | 24/7 support |
| **AT&T** | AT&T app-chat, telefoon | Beperkte uren internationaal |
| **EE** | EE app-chat, telefoon | 24/7 support in het VK |

**Tip:** Download de app van je provider en sla de supportcontactgegevens op voordat je reist. Sommige providers vereisen SMS-verificatie om in te loggen – als je midden in een overdracht zit, werkt dat mogelijk niet.

### Wat te doen als je overdracht midden in de reis mislukt

1. Verbind met het dichtstbijzijnde gratis wifi (vliegvelden, hotels, cafés).
2. Neem contact op met de support van je provider via e-mail of een berichten-app.
3. Vraag hen je eSIM opnieuw uit te geven als QR code.
4. Scan de QR code op je nieuwe apparaat.

### Tips voor wereldreizigers
- Bewaar altijd een back-upkopie van je eSIM QR codes.
- Als je midden in de reis van telefoon wisselt, geef dan de voorkeur aan native overzetten boven QR code waar mogelijk.
- Voor meerdere bestemmingen: overweeg een wereldwijde eSIM dat meerdere landen dekt.
- Sla de supportcontactgegevens van je provider op voordat je reist.

Voor meer over het gebruik van eSIMs tijdens het reizen, zie onze [Travel eSIM 2026-gids](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Veelgestelde vragen

**V1: Kan ik een data-only eSIM overzetten (zoals een reis-eSIM)?**
Nee. De meeste reis-eSIMs (Roami, Airalo, Holafly, Nomad, enz.) ondersteunen geen cross-platform overzetten. Ze zijn ontworpen om eenmaal per apparaat geïnstalleerd te worden. Je moet een nieuw abonnement kopen op je nieuwe telefoon. Zie hierboven "Waarom kunnen reis-eSIMs niet worden overgezet?" voor de technische uitleg.

**V2: Werkt de overdracht tussen een iPhone 11 en een Samsung S24?**
Ja – zolang beide aan de OS-vereisten voldoen. iPhone 11 ondersteunt iOS 18 (het draait tot iOS 18). Samsung S24 ondersteunt Android 16. Hardwaregeneratie maakt niet uit; alleen de OS-versie telt.

**V3: De app van mijn provider biedt geen eSIM-overzetten aan. Hoezo?**
Niet elke provider ondersteunt eSIM-overzetten via app. Als je provider het niet aanbiedt, gebruik dan de QR-code-terugval van de provider: neem contact op met je provider en vraag om je eSIM opnieuw uit te geven als nieuwe QR code. Sommige providers rekenen hiervoor een kleine vergoeding ($0-25).

**V4: Werken mijn WhatsApp / iMessage / 2FA-codes nog na de overdracht?**
WhatsApp gebruikt je telefoonnummer – het detecteert de SIM-wijziging en kan om herverificatie vragen (meestal automatisch). iMessage op iPhone gebruikt het eSIM-nummer en zou binnen een minuut opnieuw activeren. Voor 2FA werken diensten die SMS naar je nummer sturen normaal – het nummer is niet veranderd. Zie sectie 10 voor gedetailleerde migratiestappen.

**V5: Kan ik dezelfde eSIM meerdere keren heen en weer overzetten?**
Ja, maar elke overdracht vereist hetzelfde proces. Sommige providers beperken hoe vaak een eSIM per jaar kan worden overgezet (bijv. 3-5 keer). Als je de limiet bereikt, neem contact op met je provider voor hulp.

**V6: Wat met dual-SIM-setup met eSIM + fysieke SIM?**
De overdracht verplaatst alleen de eSIM. De fysieke SIM blijft in het bronapparaat. Als je beide wilt verplaatsen, moet je de eSIM overzetten (met deze gids) en de nano-SIM-kaart fysiek naar het nieuwe apparaat verplaatsen. Voor het optimaliseren van dual-SIM-ervaringen na de overdracht, bekijk onze **[Dual eSIM Not Working? 12 Fixes for iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**V7: Wat als ik een "expired eSIM profile"-fout krijg tijdens de overdracht?**
Neem contact op met je provider voor een nieuwe QR code – opnieuw uitgeven is meestal gratis. Activeer de nieuwe QR code onmiddellijk (binnen 30 minuten) om te voorkomen dat hij opnieuw verloopt.

**V8: Waarom verhindert mijn carrier lock het overzetten?**
Als je telefoon onder **carrier lock** staat, kun je een eSIM alleen overzetten naar een apparaat van dezelfde provider. Neem contact op met je provider om het apparaat te ontgrendelen vóór de overdracht. Op iPhone: Instellingen > Algemeen > Info > Carrier Lock moet "No SIM restrictions" zeggen.

**V9: Kan ik een Orange eSIM overzetten naar een niet-Orange apparaat?**
Ja, als je apparaat ontgrendeld is en je Orange-abonnement het toestaat. **Orange eSIM-overzetten** wordt ondersteund via de Orange-app of native overzetten. Orange staat maximaal 3 overdrachten per jaar toe.

**V10: Werkt de overdracht met een Free eSIM?**
Nee – Free ondersteunt geen cross-platform overzetten. Gebruik de QR-code-terugvalmethode vanuit het Free-klantportaal. Free staat maximaal 2 overdrachten per jaar toe.

**V11: Wat is een eSIM-bevestigingscode en waar vind ik die?**
Sommige eSIM-profielen hebben een verplichte **eSIM-bevestigingscode** – meestal 4-8 cijfers. Zoek deze in de e-mail of activeringsinstructies van de provider. Niet gevonden? Vraag het je provider.

**V12: Wat betekent "eSIM not transferring to new phone"?**
Dit betekent meestal dat je provider geen overzetten ondersteunt, de QR code is verlopen, de oude eSIM nog actief is, of het nieuwe apparaat carrier-locked is. Verwijder eerst de oude eSIM (als nog zichtbaar) en probeer opnieuw. Zie sectie 7 voor de volledige foutopsporingstabel.

**V13: Hoe los ik "eSIM activation failed" op na de overdracht?**
Controleer je wifi-verbinding, herstart beide apparaten en probeer opnieuw. Als het nog steeds faalt, gebruik dan de handmatige invoermethode met het SM-DP+ adres uit de e-mail van je provider.

**V14: Annuleert het overzetten van mijn eSIM mijn abonnement?**
Nee – het overzetten van de eSIM verplaatst alleen het SIM-profiel naar een nieuw apparaat. Je abonnement (en facturatie) loopt door zoals voorheen. Om je abonnement op te zeggen, moet je apart contact opnemen met je provider.

**V15: Kan ik een eSIM overzetten als ik hem al van de oude telefoon heb verwijderd?**
Ja, maar het is ingewikkelder. Als je de eSIM hebt verwijderd voordat je met de overdracht begon, neem dan contact op met je provider en vraag om je eSIM opnieuw uit te geven als nieuwe QR code. Dat kunnen ze, omdat je profiel nog op hun servers bestaat.

**V16: Hoeveel kost het opnieuw uitgeven van een eSIM QR code?**
De meeste providers geven eSIMs gratis opnieuw uit (vooral postpaid-abonnementen). Sommige prepaid-providers of MVNO's kunnen een kleine vergoeding rekenen ($5-25). Vraag het voordat je de hernieuwing aanvraagt.

**V17: Kan ik een Vodafone eSIM overzetten naar een niet-Vodafone apparaat?**
Ja, zolang je apparaat ontgrendeld is en je Vodafone-abonnement eSIM-overzetten toestaat. Vodafone ondersteunt overzetten via hun app in de meeste landen. Controleer de Vodafone-app op de optie "eSIM transfer".

**V18: Wat als ik de overzetlimiet van mijn provider bereik?**
Sommige providers beperken overdrachten tot 3-5 per jaar. Als je de limiet bereikt, neem contact op met de providersupport – zij kunnen de limiet vaak resetten of handmatig een nieuwe eSIM QR code uitgeven (waarbij het overzettingsysteem wordt omzeild).

**V19: Kan ik twee eSIMs tegelijk overzetten (dual eSIM)?**
Ja, maar je moet ze **een voor een** overzetten. Elk eSIM-profiel is onafhankelijk en moet afzonderlijk worden overgezet met hetzelfde proces. Als je twee actieve eSIMs op je oude apparaat hebt, zet dan eerst de primaire eSIM over, daarna de secundaire.

**V20: Wat is het verschil tussen eSIM-overzetten en eSIM-hernieuwen?**
Overzetten verplaatst je bestaande profiel naar een nieuw apparaat (met behoud van je nummer en abonnement). Hernieuwen creëert een compleet nieuw eSIM-profiel voor hetzelfde nummer – het oude profiel wordt permanent gedeactiveerd. Hernieuwen is de terugvalmethode wanneer overzetten niet door je provider wordt ondersteund.

---

## Eindconclusie

De mogelijkheid om eSIMs over te zetten tussen iPhone en Android zonder tussenkomst van de provider is een **doorbraak in 2026**. Het verwijdert het laatste grote wrijvingspunt voor het wisselen van ecosysteem. Zolang je provider op de ondersteunde lijst staat en beide telefoons zijn bijgewerkt, kun je je nummer in minder dan een minuut verplaatsen.

**Onthoud**:
- Als je provider niet wordt ondersteund, werkt de QR-code-terugval nog steeds – het kost alleen een telefoontje.
- Behandel reis-eSIMs als eenmalig gebruik; koop vers op elk apparaat.
- **Verwijder nooit de oude eSIM voordat je met de overdracht begint** – dit is de meest voorkomende fout.
- Controleer de carrier lock voordat je begint – "No SIM restrictions" is vereist.
- Sommige providers beperken overdrachten per jaar – controleer dit voordat je begint.

Als je aanhoudende **eSIM-overzettingsfouten** tegenkomt, behandelt onze **[eSIM Deep Troubleshooting Guide (16 echte gevallen)](/faq/esim-deep-troubleshooting-guide-2026/)** geavanceerde oplossingen.

👉 **Overzetten naar een reisabonnement?** Bekijk [eSIM voor de VS](/united-states-esim/) of [eSIM voor Europa](/europe-esim/) zodra je overdracht is voltooid.

👉 **Niet zeker of je nieuwe telefoon eSIM ondersteunt?** Bekijk onze **[volledige compatibiliteitslijst](/compatibility/)** voordat je begint.

👉 **Een reis-eSIM testen op je nieuwe apparaat?** Pak een **[gratis Roami eSIM-proefabonnement](/free-esim/)** om te bevestigen dat alles werkt.

---

*Informatie gebaseerd op officiële documentatie van Apple en Android, GSMA-standaarden en providerrichtlijnen per september 2026. Functies en providerondersteuning kunnen veranderen.*
## Bronnen

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
