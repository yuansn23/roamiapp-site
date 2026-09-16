---
title: "Een eSIM overzetten tussen iPhone en Android"
h1_title: "Een eSIM overzetten tussen iPhone en Android"
description: "Verplaats je eSIM tussen iPhone en Android met een provider-app of een opnieuw uitgegeven QR-code. Stap voor stap in beide richtingen, plus oplossingen voor veelvoorkomende overdrachtsfouten."
image: "/img/esim/esim-travel.jpg"
keywords: ["eSIM platformoverstijgende overdracht", "eSIM overdrachtsfout", "iOS 18 eSIM", "eSIM providerlock", "eSIM bevestigingscode", "eSIM geen service", "eSIM APN-instellingen", "eSIM probleemoplossing", "eSIM activering mislukt", "eSIM overzetten tussen iPhone en Android", "kan eSIM niet overzetten naar nieuwe iPhone", "Orange eSIM overdracht"]
date: 2026-09-16T10:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Probleemoplossing", "Reisinstellingen"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI tekstvertalingen
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
    
# Sidebar: Populaire eSIMs
sidebar_popular:
  title: "Populaire eSIMs"
  item_suffix: "eSIM"
  items:
    - name: "VS eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Duitsland eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkije eSIM"
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

# Sidebar: Gratis eSIM-aanbiedingen
sidebar_free:
  title: "Claim gratis eSIM"
  icon: "🎁"
  item_suffix: "Gratis eSIM"
  item_subtitle: "Gratis eSIM"
  items:
    - name: "VK eSIM"
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

# Sidebar: Populaire vragen
sidebar_questions:
  title: "Populaire vragen"
  items:
    - question: "Wat is eSIM-activering en hoe werkt het?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Hoe activeer je een eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Hoe activeer je eSIM op iPhone (alle modellen)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Nieuwste eSIM-compatibiliteitslijst"
      url: "/compatibility/"
---


> **Redactienoot:** Roami is het merk achter deze gids. Alle informatie over provideroverdracht is gebaseerd op officiële providerdocumentatie en onze apparaattests in 2026. Platformoverstijgende eSIM-overdracht wordt nog wereldwijd uitgerold – we richten ons op methoden die vandaag daadwerkelijk werken.

## eSIM-overdracht – 10-seconden snel antwoord

**Vind hieronder je scenario en spring direct naar de juiste methode.**

| Je scenario | Kun je overzetten? | Beste methode | Waar te gaan |
| :--- | :--- | :--- | :--- |
| **iPhone → nieuwe iPhone** | ✅ Ja (altijd) | Apple Snelle overdracht | [Overdracht binnen hetzelfde platform](#overdracht-van-esim-naar-nieuwe-iphone-of-samsung--overdrachten-binnen-hetzelfde-platform) |
| **Samsung → nieuwe Samsung** | ✅ Ja (meestal) | Samsung Smart Switch | [Overdracht binnen hetzelfde platform](#overdracht-van-esim-naar-nieuwe-iphone-of-samsung--overdrachten-binnen-hetzelfde-platform) |
| **Android → iPhone (provider ondersteunt app-overdracht)** | ✅ Ja | Provider-app | [Methode A](#methode-a-esim-overdracht-van-android-naar-iphone-provider-app) |
| **Android → iPhone (provider ondersteunt geen app)** | ✅ Ja | QR-code fallback | [Methode B](#methode-b-esim-overdracht-van-iphone-naar-android-provider-qr-code) |
| **iPhone → Android (provider ondersteunt)** | ✅ Ja | Provider-app of QR-code | [Methode B](#methode-b-esim-overdracht-van-iphone-naar-android-provider-qr-code) |
| **Reis-eSIM (Roami, Airalo, Holafly)** | ❌ Nee | Koop een nieuw abonnement op het nieuwe apparaat | [Waarom reis-eSIM's niet kunnen worden overgezet](#waarom-kunnen-reis-esims-niet-worden-overgezet) |
| **Provider ondersteunt geen overdracht** | ✅ Ja (fallback) | Neem contact op met provider voor QR-code | [Fallback-methoden](#fallback-methoden-als-platformoverstijgende-esim-overdracht-niet-wordt-ondersteund) |

> **Hoofdregel:** Er is **geen ingebouwde iOS-naar-Android eSIM-overdrachtsknop** zoals bij iPhone-naar-iPhone. Platformoverstijgende overdracht gaat altijd **via je provider** – via hun app of door een nieuwe QR-code aan te vragen. Reis-eSIM's zijn **alleen voor één apparaat** – koop een nieuwe op je nieuwe telefoon.

**Kun je niet overzetten?** De meeste reis-eSIM's (Roami, Airalo, Holafly) zijn **alleen voor één apparaat** – je moet een nieuw abonnement kopen op je nieuwe telefoon. Voor lokale provider-eSIM's werkt de QR-code fallback altijd.

> **Belangrijke beperking:** Er is **geen ingebouwde iOS-naar-Android eSIM-overdracht** – je moet via je provider gaan. Deze gids leidt je door elke ondersteunde methode.

Voor een volledige uitleg van de basis eSIM-installatie, zie onze **[iPhone 16 eSIM Complete Gids](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. Voor geavanceerde problemen die hier niet worden behandeld, heeft onze **[eSIM Diepgaande Probleemoplossingsgids (16 echte gevallen)](/faq/esim-deep-troubleshooting-guide-2026/)** meer oplossingen.


## Snelle beslisflow – welke eSIM-overdrachtsmethode moet je gebruiken?

| Je situatie | Beste methode | Tijd | Provider nodig? |
| :--- | :--- | :--- | :--- |
| **Wisselen iPhone ↔ iPhone** | Apple Snelle overdracht (Instellingen > Mobiel netwerk > eSIM toevoegen > Overzetten) | 2 min | Nee (Apple regelt het) |
| **Wisselen Android ↔ Android (Samsung naar Samsung, enz.)** | Merkspecifieke overdracht (Samsung: SIM-beheer > eSIM toevoegen > Overzetten) | 2 min | Nee (merk regelt het) |
| **Wisselen iPhone ↔ Android (iOS 18 / Android 16+)** | Provider-app overdracht | 3-5 min | Ja |
| **Wisselen iPhone ↔ Android (ouder OS)** | Door provider opnieuw uitgegeven QR-code | 5-10 min | Ja |
| **Reis-eSIM (Roami, Airalo, Holafly)** | ❌ Kan niet worden overgezet – koop een nieuw abonnement op het nieuwe apparaat | N.v.t. | Nee – aanbieder staat het niet toe |
| **Je provider ondersteunt geen overdracht** | QR-code fallback (bel provider) | 10-20 min | Ja |


## De complete eSIM-overdrachtsreis – van "Ik wissel van telefoon" tot "Het werkt"

Hier is de stap-voor-stap routekaart voor iedereen die een eSIM naar een nieuw apparaat verplaatst.

| Stap | Wat je denkt | Wat te doen | Waar te vinden |
| :--- | :--- | :--- | :--- |
| **1. Bepaal je scenario** | "Wat voor wissel maak ik?" | Identificeer:zelfde ecosysteem (iOS→iOS / Android→Android) of platformoverstijgend (iOS↔Android)? | [Snelle beslisflow hierboven](#snelle-beslisflow--welke-esim-overdrachtsmethode-moet-je-gebruiken) |
| **2. Controleer OS-versies** | "Zijn mijn telefoons up-to-date genoeg?" | iPhone moet iOS 18+ zijn, Android moet Android 16+ zijn voor native platformoverstijgende overdracht. | Werk eerst bij als dat niet zo is. |
| **3. Controleer providerlock** | "Is mijn telefoon aan een provider vergrendeld?" | Instellingen > Algemeen > Over > Providerlock moet "Geen SIM-beperkingen" zeggen. | [Vereisten hieronder](#wat-je-nodig-hebt-voordat-je-een-esim-overdracht-start) |
| **4. Controleer providerondersteuning** | "Staat mijn provider dit toe?" | Open provider-app en zoek naar eSIM-overdrachtsoptie. Of bel en vraag het. | [Sectie ondersteunde providers hieronder](#ondersteunde-providers-voor-platformoverstijgende-esim-overdracht-detail) |
| **5. Voer overdracht uit** | "Tijd om het nummer te verplaatsen." | Volg de specifieke stappen voor jouw scenario. | [Methode A](#methode-a-esim-overdracht-van-android-naar-iphone-provider-app) of [Methode B](#methode-b-esim-overdracht-van-iphone-naar-android-provider-qr-code) |
| **6. Installatie na overdracht** | "Mijn nummer staat op de nieuwe telefoon – wat nu?" | Reactiveer WhatsApp, iMessage, 2FA-apps en test sms. | [Sectie na eSIM-overdracht hieronder](#na-esim-overdracht--whatsapp-imessage-en-2fa-migratie) |
| **7. Probleemoplossing bij mislukking** | "Het werkte niet – wat nu?" | Controleer de fout, verwijder oud profiel, probeer opnieuw of gebruik QR-code fallback. | [Probleemoplossingstabel hieronder](#probleemoplossing-waarom-is-mijn-esim-overdracht-mislukt) |


## Wat je nodig hebt voordat je een eSIM-overdracht start

**Voor beide richtingen:**
- Beide apparaten moeten **ontgrendeld** zijn (geen **providerlock**). Op iPhone: `Instellingen > Algemeen > Over` → `Providerlock` moet "Geen SIM-beperkingen" zeggen. **Dit is de #1 reden waarom overdrachten mislukken** – als je telefoon vergrendeld is, kun je de eSIM niet naar een ander providernetwerk overzetten.
- Beide apparaten hebben **Bluetooth ingeschakeld**.
- Beide apparaten zijn verbonden met **Wi-Fi** (of minstens één heeft een werkende mobiele dataverbinding).
- De eSIM die je wilt overzetten is **actief** op het bronapparaat (nog niet verwijderd).
- Je provider **ondersteunt platformoverstijgende overdracht** (zie lijst hieronder). Zo niet, ga naar de fallback-methoden.
- Je **eSIM-profiel** is niet **verlopen** – sommige profielen hebben beperkte geldigheidsdata.

**Voor Android → iPhone:**
- iPhone moet **iOS 18 of later** draaien.
- Android moet **Android 16 of later** draaien.

**Voor iPhone → Android:**
- iPhone moet **iOS 18 of later** draaien.
- Android moet **Android 16 of later** draaien.

> 🚨 **Kritieke waarschuwing – Verwijder niet vóór overdracht:**
> **Verwijder de eSIM NIET van je oude apparaat voordat je de overdracht start.** Als je de bron-eSIM eerst verwijdert, is het profiel weg van je apparaat en kan je provider het mogelijk niet naar het nieuwe apparaat overzetten. Je moet contact opnemen met je provider voor een volledig nieuwe QR-code – wat 24-48 uur kan duren. Start de overdracht altijd vanaf het nieuwe apparaat eerst, of houd de oude eSIM actief tot de nieuwe bevestigd werkt.

> 🚨 Als je apparaat een ouder OS draait, verschijnt de menuoptie simpelweg niet. Werk eerst bij. Als je te maken hebt met een **verlopen eSIM-profiel**, neem contact op met je provider voor een nieuwe QR-code voordat je de overdracht start.

De [Google Support – eSIM op Pixel](https://support.google.com/pixelphone/answer/7086887) pagina biedt extra details voor Android-gebruikers die hun eSIM willen overzetten.


## Waarom kunnen reis-eSIM's niet worden overgezet?

Dit is de #1 vraag die we krijgen. Hier is waarom:

| Reden | Uitleg |
| :--- | :--- |
| **EID-binding** | Elk eSIM-profiel is cryptografisch gebonden aan de **EID** (eUICC Identifier) van het apparaat waarop het is geactiveerd. De EID van je telefoon is uniek – als een serienummer voor je eSIM-hardware. (Je kunt je EID zien door `*#06#` te bellen op de meeste telefoons.) |
| **Eenmalige QR-codes** | Reis-eSIM QR-codes zijn ontworpen voor **eenmalig gebruik**. Eenmaal gescand, wordt de QR-code ongeldig op de server van de provider. Dit is een beveiligingsfunctie om fraude te voorkomen. |
| **Geen provideraccount** | Reis-eSIM's worden gekocht als zelfstandige producten – je hebt geen "provideraccount" met doorlopende service. Er is niemand om in te loggen en een overdracht aan te vragen. |
| **Ontworpen voor gemak** | Reis-eSIM's ruilen overdraagbaarheid in voor gemak. Je krijgt directe activering zonder ID-verificatie, maar de keerzijde is dat het profiel aan één apparaat is gekoppeld. |

**De bodemregel:** Als je een reis-eSIM gebruikt (Roami, Airalo, Holafly, Nomad, enz.), **verspil geen tijd met proberen het over te zetten**. Het zal niet werken. Koop gewoon een nieuw abonnement op je nieuwe apparaat. De kosten van een nieuwe reis-eSIM zijn meestal minder dan de tijd die je zou besteden aan het proberen over te zetten van een niet-overdraagbaar profiel.

**Wat dacht je van provider-eSIM's (postpaid/prepaid)?**
Provider-eSIM's zijn anders. Je hebt een account bij de provider, en zij kunnen je eSIM opnieuw uitgeven aan een nieuw apparaat omdat zij het profiel op hun servers beheren. Daarom kunnen provider-eSIM's worden overgezet, en reis-eSIM's niet.


## Vergelijking van eSIM-overdrachtsmethoden – welke is de juiste voor jou?

| Functie | Provider-app overdracht | Provider QR-code | Native overdracht (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Werkt platformoverstijgend?** | ✅ Ja | ✅ Ja | ❌ Nee (alleen hetzelfde ecosysteem) |
| **Benodigde tijd** | 3-5 min | 5-10 min | 1-2 min |
| **Providerbetrokkenheid** | Selfservice via app | Moet provider contacteren | Geen |
| **Werkt tijdens reizen?** | ✅ Ja (met Wi-Fi) | ✅ Ja (met Wi-Fi) | ✅ Ja |
| **Slagingskans** | Hoog (indien ondersteund) | Zeer hoog (werkt altijd) | Zeer hoog |
| **Beste voor** | Snelle overdracht, app-ondersteunde providers | Elke provider, fallback wanneer app faalt | Apparaatupgrades in hetzelfde ecosysteem |
| **Kosten** | Meestal gratis | Kan $0-25 kosten voor opnieuw uitgeven QR-code | Gratis |


## Methode A: eSIM-overdracht van Android naar iPhone (provider-app)

Dit is het meest voorkomende scenario – overstappen van een Samsung, Pixel of andere Android naar een nieuwe iPhone. De meest betrouwbare manier om je nummer te verplaatsen is via de app van je provider.

### Stap voor stap

**Voordat je begint:**
- Heb de app van je provider geïnstalleerd op de nieuwe iPhone (of wees klaar om in te loggen op de website van de provider).
- Ken je account-PIN of inloggegevens.
- **Verwijder de eSIM nog NIET van je Android.**

**Op je iPhone (doel):**
1. Installeer en open de app van je provider (bijvoorbeeld de T-Mobile, Verizon of AT&T app).
2. Log in en zoek naar een optie zoals "eSIM activeren", "Apparaat wijzigen" of "Overzetten naar nieuw apparaat".
3. Volg de aanwijzingen om de **EID** en **IMEI** van je nieuwe iPhone in te voeren (weergegeven onder `Instellingen` → `Algemeen` → `Over`).
4. De provider pusht je eSIM-profiel naar de nieuwe iPhone of genereert een QR-code die je kunt scannen.
5. Op de iPhone, ga naar `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen` en scan de QR-code als er een is gegenereerd.
6. Wacht op "Activering voltooid". Je nummer is nu actief op de iPhone.
7. **Nu** kun je de eSIM van je Android verwijderen (Instellingen > Verbindingen > SIM-beheer > tik op de eSIM > Verwijderen).

**iOS 18-tip:** Als je iOS 18 gebruikt, is de "eSIM toevoegen"-flow opnieuw ontworpen met een prominentere QR-scanner en betere foutafhandeling. Je ziet een voortgangsindicator tijdens het downloaden van het profiel.

✅ **Klaar.** Je nummer is nu actief op de iPhone. Als je provider geen app biedt, neem contact op om je eSIM opnieuw uit te geven als een nieuwe QR-code (zie de fallback-methoden hieronder).

### Wat als de app-overdracht niet werkt?

Gebruik de **provider QR-code fallback**:

- Neem contact op met je provider (chat, telefoon of website).
- Vertel dat je van apparaat wisselt en vraag hen om **je eSIM opnieuw uit te geven als een nieuwe QR-code**.
- Scan de nieuwe QR-code op de iPhone: `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen`.
- Voltooi de activering.

Als je een **"kan eSIM niet activeren"**-fout ziet tijdens dit proces, controleer je Wi-Fi-verbinding en probeer opnieuw.


## Methode B: eSIM-overdracht van iPhone naar Android (provider QR-code)

Er is geen ingebouwde "Overzetten naar Android"-optie op iPhone. De betrouwbare methode is je provider je eSIM opnieuw laten uitgeven.

### Vereisten
- Je nieuwe Android-telefoon is **ontgrendeld**.
- Je kunt contact opnemen met je provider (of inloggen op hun app/website).
- Je Android draait **Android 16 of later**.
- **Verwijder de eSIM nog NIET van je iPhone.**

### Stappen

**Neem contact op met je provider (of gebruik hun app):**
1. Vertel dat je je eSIM van een iPhone naar een Android-telefoon verplaatst.
2. Geef de **EID** en **IMEI** van het nieuwe Android-apparaat op (onder `Instellingen` → `Over telefoon`).
3. Je provider geeft je eSIM opnieuw uit als een nieuwe QR-code (of pusht het via hun app).

**Op je Android (doel):**
1. Ga naar `Instellingen` → `Netwerk & internet` → `SIM's` → `eSIM toevoegen` (formulering varieert per merk).
2. Scan de QR-code die de provider heeft gegeven.
3. Volg de aanwijzingen om het profiel te downloaden en te activeren.
4. Wacht tot de activering is voltooid.
5. **Nu** kun je de eSIM van je iPhone verwijderen (Instellingen > Mobiel netwerk > tik op de eSIM > Mobiel abonnement verwijderen).

✅ Klaar. Je nummer leeft nu op de Android-telefoon.

> ⚠️ **Belangrijk**: Zodra de overdracht is voltooid, wordt de eSIM **permanent verwijderd** van de iPhone. Je kunt niet terug zonder je provider. Zorg dat je een andere actieve lijn of Wi-Fi hebt voordat je overzet.


## eSIM overzetten naar nieuwe iPhone of Samsung – overdrachten binnen hetzelfde platform

Hoewel platformoverstijgende overdracht de focus van deze gids is, willen veel gebruikers een eSIM eenvoudig binnen hetzelfde ecosysteem verplaatsen. Hier is hoe:

### iOS → iOS (iPhone naar iPhone)

Apple's ingebouwde **Snelle overdracht** is de gemakkelijkste methode:

1. Kies tijdens de installatie van je nieuwe iPhone "eSIM overzetten vanaf iPhone in de buurt" wanneer daarom wordt gevraagd.
2. Houd beide telefoons dicht bij elkaar met Bluetooth en Wi-Fi ingeschakeld.
3. Bevestig de overdracht op je oude iPhone.
4. Wacht 1-2 minuten tot de **eSIM-profieldownload** op het nieuwe apparaat is voltooid.

**Als Snelle overdracht niet werkt:** Ga naar Instellingen > Mobiel netwerk op je nieuwe iPhone > eSIM toevoegen > Overzetten vanaf iPhone in de buurt.

**Als dat mislukt:** Gebruik de provider QR-code methode – neem contact op met je provider voor een nieuwe QR-code.

### Android → Android (Samsung, Pixel, enz.)

Android-overdrachtsmethoden variëren per merk:

**Samsung:** Instellingen > Verbindingen > SIM-beheer > eSIM toevoegen > eSIM overzetten vanaf oud apparaat (volg de aanwijzingen op het scherm). Werkt op Samsung Galaxy S21 en nieuwer, Z Flip/Z Fold-serie.

**Google Pixel:** Tijdens de installatie word je mogelijk gevraagd je eSIM over te zetten. Gebruik anders de provider-app of vraag een nieuwe QR-code aan.

**Algemeen Android:** Als je merk geen ingebouwde overdracht biedt, gebruik de provider QR-code fallback-methode.

### Vergelijking platformoverstijgend vs. binnen hetzelfde platform

| Functie | Platformoverstijgend | Binnen hetzelfde platform |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N.v.t. | ✅ Snelle overdracht werkt |
| **Android ↔ Android** | N.v.t. | ✅ Merkspecifieke methoden |
| **iOS ↔ Android** | ✅ Behandeld in deze gids | ❌ Niet direct ondersteund |
| **Providerafhankelijkheid** | Hoger | Lager (Apple/Google regelen het) |
| **Benodigde tijd** | 3-10 min | 1-2 min |
| **Slagingskans** | Varieert per provider | Over het algemeen hoog |

Voor een diepere duik in apparaatspecifiek eSIM-gedrag, zie onze **[iPhone 16 eSIM Complete Gids](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**.


## Ondersteunde providers voor platformoverstijgende eSIM-overdracht (detail)

Platformoverstijgende eSIM-overdracht is nog nieuw, en providerondersteuning wordt geleidelijk uitgerold. Er is geen volledige openbare lijst van elke ondersteunde provider, en beschikbaarheid verandert vaak, dus controleer de website of app van je provider voor de huidige status.

### Bevestigde ondersteunde providers (per augustus 2026)

| Provider | Regio | Overdrachtsmethode | Overdrachtslimiet | Kosten |
|---------|--------|-----------------|----------------|------|
| **Orange** | Frankrijk, Europa | Orange-app → "Mijn eSIM-ruimte" → "Overzetten naar nieuw apparaat" | 3x per jaar | Gratis |
| **SFR** | Frankrijk | SFR & Moi-app → "Mijn SIM beheren" → "eSIM overzetten" | 5x per jaar | Gratis |
| **T-Mobile** | VS | T-Mobile-app → "eSIM beheren" → "Overzetten naar nieuw apparaat" | Onbeperkt | Gratis |
| **Verizon** | VS | My Verizon-app → "Apparaat activeren of wisselen" | Onbeperkt | Gratis |
| **AT&T** | VS | AT&T-app → "eSIM activeren" | Varieert per abonnement | Gratis (postpaid) |
| **EE** | VK | EE-app → "Abonnement" → "eSIM-overdracht" | 3x per jaar | Gratis |
| **Deutsche Telekom** | Duitsland | Telekom-app → "eSIM-overdracht" | Onbeperkt | Gratis |
| **Swisscom** | Zwitserland | Swisscom-app → "eSIM-overdracht" | 3x per jaar | Gratis |
| **Bouygues** | Frankrijk | QR-code opnieuw uitgeven (via klantenportaal) | 3x per jaar | Gratis |
| **Free** | Frankrijk | QR-code opnieuw uitgeven (via klantenportaal) | 2x per jaar | Gratis |
| **Vodafone** | VK, Europa | Vodafone-app → "eSIM-overdracht" | Varieert per land | Gratis (postpaid) |
| **Google Fi** | VS, wereldwijd | Google Fi-app → "Activeren op dit apparaat" | Onbeperkt | Gratis |

### Reis-eSIM's (NIET overdraagbaar)

| Aanbieder | Overdraagbaar? | Wat in plaats daarvan te doen |
|----------|---------------|-------------------|
| **Roami** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |
| **Airalo** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |
| **Holafly** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |
| **Nomad** | ❌ Nee | Koop een nieuw abonnement op je nieuwe apparaat |

**Hoe controleer je of je provider het ondersteunt?** Probeer de stappen in Methode A of B. Als je provider geen app-gebaseerde overdracht of een nieuwe QR-code biedt, gebruik de fallback-methoden hieronder.


## Fallback-methoden als platformoverstijgende eSIM-overdracht niet wordt ondersteund

Als je provider niet op de lijst staat, of je ziet een **eSIM-overdrachtsfout**, gebruik een van deze alternatieven:

### Optie 1: Door provider uitgegeven QR-code (werkt altijd)
1. Bel of chat met je provider.
2. Zeg: "Ik schakel over van Android naar iPhone (of omgekeerd). Geef mijn eSIM opnieuw uit als een nieuwe QR-code."
3. Ze e-mailen je een QR-code of een activeringslink.
4. Op het nieuwe apparaat, ga naar `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen` → `QR-code gebruiken` en scan.
5. De eSIM van het oude apparaat stopt met werken nadat de nieuwe activeert.

**Tip:** Sommige providers rekenen een kleine vergoeding voor het opnieuw uitgeven van een eSIM ($0-25). Vraag het voordat ze het doen.

### Optie 2: Handmatige SM-DP+-invoer (geavanceerd)
Als je provider je een **activeringscode** en **SM-DP+-adres** geeft (het serveradres dat het eSIM-profiel naar je telefoon levert), kun je de eSIM handmatig toevoegen op het nieuwe apparaat:
1. `Instellingen` → `Mobiel netwerk` → `eSIM toevoegen` → `Gegevens handmatig invoeren`.
2. Plak het SM-DP+-adres en de activeringscode.
3. Tik op `Volgende`. Dit werkt op zowel iPhone als Android.

### Optie 3: Koop een nieuw abonnement (voor reis-eSIM's)
Als je een reis-eSIM gebruikt (Roami, Airalo, Holafly), verspil geen tijd met proberen over te zetten – het zal niet werken. Koop gewoon een nieuw abonnement op je nieuwe apparaat.

> **Overgangstip:** De QR-code fallback is de meest betrouwbare methode voor elke provider, ongeacht of ze app-gebaseerde overdracht ondersteunen. Het kan een telefoontje kosten, maar het werkt altijd.


## eSIM-overdracht of nieuwe activering? – Beslissingsmatrix

Soms is een nieuwe eSIM kopen sneller dan overzetten. Hier is wanneer je wat kiest:

| Factor | Overdracht | Nieuwe activering | Wat is beter? |
|--------|----------|----------------|------------------|
| **Je behoudt hetzelfde telefoonnummer** | ✅ Nummer behouden | ❌ Nieuw nummer krijgen | Overdracht wint |
| **Je hebt 2FA aan je nummer gekoppeld** | ✅ Toegang behouden | ❌ Risico toegang te verliezen | Overdracht wint |
| **Je provider rekent voor overdracht** | Kan $0-25 kosten | $0 (je koopt al nieuw) | Hangt af van kosten |
| **Reis-eSIM** | ❌ Onmogelijk | ✅ Gemakkelijk | Nieuwe activering wint |
| **Je hebt haast (onder 5 minuten)** | ⚠️ Kan 5-10 min duren | ✅ 2 min QR scannen | Nieuwe activering wint |
| **Je wilt je bestaande abonnement/data behouden** | ✅ Ongebruikte data behouden | ❌ Ongebruikte data verliezen | Overdracht wint |

**Aanbeveling:** Als je hetzelfde providerabonnement behoudt en je telefoonnummer wilt behouden, zet over. Als je op een reis-eSIM zit of haast hebt, koop gewoon een nieuw abonnement op je nieuwe apparaat.


## Probleemoplossing: waarom is mijn eSIM-overdracht mislukt?

| Fout / symptoom | Meest waarschijnlijke oorzaak | Oplossing |
|----------------|-------------------|-----|
| "Overdracht niet beschikbaar – provider niet ondersteund" | Je provider ondersteunt geen platformoverstijgende overdracht. | Gebruik fallback-methoden hierboven. |
| QR-code scant maar zegt dan "sessie verlopen" | Je hebt te lang gewacht na het genereren van de QR-code (deze is verlopen). | Herhaal het proces en scan onmiddellijk. |
| Android zegt "Koppelen mislukt" | Bluetooth- of lokale netwerkmachtigingen geblokkeerd. | Op iPhone: `Instellingen > Privacy & beveiliging > Lokaal netwerk` – zorg dat `Instellingen` AAN staat. Op Android: schakel "Wi-Fi-beveiligingsscan" uit (meestal onder geavanceerde Wi-Fi-instellingen). |
| Overdracht start maar stopt bij 50% | Zwak Wi-Fi- of mobiel signaal. | Verplaats beide telefoons dichter bij de router. Schakel VPN uit op beide apparaten. |
| **"eSIM al aan een ander apparaat gebonden"** | Het profiel is niet correct vrijgegeven van het oude apparaat. | Op het oude apparaat, ga naar `Instellingen > Mobiel netwerk` en verwijder handmatig `eSIM` (indien nog zichtbaar). Wacht dan 5 minuten en probeer opnieuw. Als het nog steeds mislukt, neem contact op met provider voor een profielvrijgave. |
| iPhone vraagt om **bevestigingscode** na scannen | Het eSIM-profiel heeft een verplichte **eSIM-bevestigingscode** (zeldzaam). | Zoek de code in de provider-e-mail (vaak 4-8 cijfers). Als je die niet vindt, vraag de provider. |
| Dubbelklik op zijknop doet niets (iPhone → Android) | Biometrische authenticatie niet ingesteld of uitgeschakeld. | Stel Face ID / Touch ID in, of schakel tijdelijk "Aandacht vereisen" voor Face ID uit. |
| **eSIM geen service** na overdracht | APN-instellingen niet geconfigureerd. | Configureer APN handmatig (zie tabel hieronder). |
| **eSIM-profiel verlopen** | Het profiel heeft een beperkte geldigheidsdatum. | Neem contact op met je provider voor een nieuwe QR-code. |
| **"Geen eSIM toevoegen-optie" op iPhone** | iPhone is provider-locked of draait oudere iOS. | Controleer providerlock in Instellingen > Algemeen > Over. Werk bij naar iOS 18. |
| **"SIM niet ondersteund" op nieuw apparaat** | Het nieuwe apparaat is provider-locked aan een andere provider. | Controleer Providerlock – moet "Geen SIM-beperkingen" zeggen. |
| **Overdrachtslimiet overschreden** | Je hebt deze eSIM te vaak overgezet (sommige providers limiteren tot 3-5 per jaar). | Neem contact op met providerondersteuning om de limiet te resetten of een nieuwe eSIM te krijgen. |
| **"eSIM-overdracht mislukt" op Samsung** | Samsung Smart Switch ondersteunt mogelijk het specifieke providerprofiel niet. | Gebruik de provider QR-code fallback in plaats daarvan. |

### Handmatige APN-configuratie

Als je na de **eSIM-overdracht** **eSIM geen service** ervaart, configureer APN handmatig:

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

### Nog steeds vastgelopen?
Verzamel deze voordat je support belt:
- IMEI en EID van bronapparaat
- IMEI en EID van doelapparaat
- De exacte foutmelding (maak een screenshot)
- Je accountnummer of telefoonnummer


## Wat gebeurt er met de oude eSIM na overdracht?

**Deze wordt onmiddellijk gedeactiveerd.**

Het oude eSIM-profiel kan kort zichtbaar blijven op het oude apparaat. Je kunt het handmatig verwijderen:
`Instellingen > Mobiel netwerk > tik op de oude eSIM > eSIM verwijderen`.

> 💰 **Facturering**: Je provider blijft je voor het abonnement factureren. Overdracht annuleert het abonnement niet – het verplaatst alleen de SIM. Om te annuleren moet je apart contact opnemen met de provider.

Als je je zorgen maakt over **eSIM gebonden aan een ander apparaat**-fouten, verwijder dan altijd het oude profiel van het bronapparaat nadat de overdracht succesvol is voltooid.

### Tijdlijn overdracht vs. verwijdering

| Actie | Wat gebeurt er | Wanneer te doen |
| :--- | :--- | :--- |
| **Overdracht gestart** | Provider stuurt profiel naar nieuw apparaat | Voordat je oude eSIM verwijdert |
| **Nieuwe eSIM geactiveerd** | Nieuw apparaat verbindt met netwerk | Nadat activering is voltooid |
| **Oude eSIM gedeactiveerd** | Provider deactiveert het oude profiel | Automatisch – kan 1-5 minuten duren |
| **Oude eSIM verwijderen** | Verwijdert het inactieve profiel van oud apparaat | Nadat je hebt bevestigd dat nieuw apparaat werkt |


## Na eSIM-overdracht – WhatsApp, iMessage en 2FA-migratie

Na het succesvol overzetten van je eSIM, moet je je berichtenapps en authenticatiediensten op het nieuwe apparaat instellen.

### WhatsApp (iPhone en Android)

WhatsApp gebruikt je telefoonnummer om je account te identificeren. Na de **eSIM-overdracht**:

1. Open WhatsApp op je nieuwe apparaat.
2. Voer je telefoonnummer in (het nummer dat je hebt overgezet).
3. Je ontvangt een verificatiecode via sms of automatische oproep naar je nummer.
4. Voer de code in – je chats verschijnen weer als je eerder een back-up hebt gemaakt.

**Tip:** Maak een back-up van je chats voordat je de overdracht start. Op iPhone: WhatsApp > Instellingen > Chats > Chatback-up. Op Android: WhatsApp > Instellingen > Chats > Back-up.

**Veelvoorkomend WhatsApp-probleem:** Als je de sms-verificatiecode niet ontvangt, probeer de "Bel mij"-optie – WhatsApp belt je nummer en leest de code voor. Als dat mislukt, wacht 5 minuten en probeer opnieuw (het providernetwerk is misschien nog aan het stabiliseren).

### iMessage en FaceTime (alleen iPhone)

1. Ga naar `Instellingen` → `Berichten` en zet `iMessage` AAN.
2. Ga naar `Instellingen` → `FaceTime` en zet `FaceTime` AAN.
3. Wacht 1-2 minuten op activering. Als er "Wachten op activering" staat, zet het uit en weer aan.
4. Controleer of je nummer is geselecteerd: Instellingen > Berichten > Verzenden & ontvangen → selecteer je eSIM-nummer.

### Tweefactorauthenticatie (2FA) en sms-verificatie

Omdat je telefoonnummer niet is veranderd, werken op sms gebaseerde 2FA-codes normaal. App-gebaseerde authenticators (Google Authenticator, Microsoft Authenticator, Authy) kunnen echter opnieuw moeten worden ingesteld:

- **Authy:** Je tokens zijn versleuteld en back-up gemaakt naar de cloud – log gewoon in op het nieuwe apparaat.
- **Google Authenticator:** Je moet je accounts afzonderlijk overdragen of de functie "Accounts overdragen" gebruiken.
- **Microsoft Authenticator:** Gebruik de back-upfunctie om te herstellen op het nieuwe apparaat.
- **SMS 2FA:** Test door een verificatiecode aan te vragen bij je bank of e-mailprovider om te bevestigen dat sms-bezorging werkt.

### Bankapps en financiële diensten

De meeste banken detecteren de apparaatswijziging en vereisen opnieuw authenticatie. Houd je inloggegevens en eventuele fysieke tokentoestellen gereed.

Voor meer hulp bij app-migratie na **eSIM-overdracht**, zie onze [eSIM-installatiegids](/faq/how-to-activate-an-esim/).


## Best practices om eSIM-overdrachtsproblemen te voorkomen

✅ **Voor overdracht:**
- Controleer providerondersteuning (probeer het menu – als het er is, wordt het ondersteund).
- Werk beide telefoons bij naar de nieuwste OS (iOS 18 / Android 16).
- Laad beide telefoons op boven 30%.
- Schakel VPN en ad-blockers tijdelijk uit.
- Verifieer dat je **eSIM-profiel** niet **verlopen** is.
- Maak een back-up van WhatsApp en andere berichtenapps.
- **Verwijder de eSIM nog NIET van het oude apparaat.**

✅ **Tijdens overdracht:**
- Houd telefoons binnen 10 cm van elkaar.
- Schakel niet van app en vergrendel het scherm niet.
- Schakel Bluetooth of Wi-Fi niet uit.
- Wacht op het bevestigingsbericht – ga er niet van uit dat het klaar is.

✅ **Na overdracht:**
- Test oproepen en data op het nieuwe apparaat.
- Verwijder de oude eSIM van het bronapparaat om verwarring te voorkomen.
- Houd de Wi-Fi van het oude apparaat minstens een uur aan – sommige providers hebben een laatste handshake nodig.
- Reactiveer WhatsApp, iMessage en 2FA-apps.
- Test sms-verificatiecodes van je bank.
- Stel een herinnering in om het oude abonnement op te zeggen als je volledig van provider wisselt.


## Reizen en eSIM overzetten – wat je moet weten

Als je in het buitenland reist en je eSIM moet overzetten, zijn hier enkele belangrijke punten:

### Een eSIM overzetten tijdens het reizen
- Platformoverstijgende overdracht werkt **wereldwijd** zolang je provider het ondersteunt.
- Zorg dat je een stabiele Wi-Fi-verbinding hebt (hotel, café) voordat je begint.
- Als de overdracht mislukt, is de provider QR-code fallback je beste optie.
- Controleer **eSIM APN-instellingen** na overdracht – sommige providers vereisen handmatige configuratie.

### Franse providers en reizen
- **Orange** en **SFR** staan platformoverstijgende overdracht toe waar je ook bent.
- **Free** en **Bouygues** vereisen het opnieuw uitgeven van een QR-code – doe dit voordat je vertrekt.
- Voor **reis-eSIM's**, onthoud dat ze over het algemeen **niet overdraagbaar** zijn – koop een nieuw abonnement op je nieuwe apparaat.

### Hoe je providers in het buitenland contacteert

| Provider | Contactmethode support | Opmerkingen |
|---------|------------------------|-------|
| **Orange** | Orange-app chat, WhatsApp-support of telefoon | 24/7 in de meeste regio's |
| **SFR** | SFR & Moi-app chat, telefoon | Beperkte uren |
| **T-Mobile** | T-Mobile-app chat, iMessage, telefoon | 24/7 support in de VS |
| **Verizon** | My Verizon-app chat, telefoon | 24/7 support |
| **AT&T** | AT&T-app chat, telefoon | Beperkte uren internationaal |
| **EE** | EE-app chat, telefoon | 24/7 support in het VK |

**Tip:** Download de app van je provider en sla supportcontactgegevens op voordat je reist. Sommige providers vereisen sms-verificatie om in te loggen – als je midden in een overdracht zit, werkt dit mogelijk niet.

### Wat te doen als je overdracht midden op reis mislukt

1. Verbind met de dichtstbijzijnde gratis Wi-Fi (luchthavens, hotels, cafés).
2. Neem contact op met de support van je provider via e-mail of berichtenapp.
3. Vraag hen je eSIM opnieuw uit te geven als een QR-code.
4. Scan de QR-code op je nieuwe apparaat.

### Tips voor globetrotters
- Bewaar altijd een back-upkopie van je eSIM QR-codes.
- Als je midden op reis van telefoon wisselt, geef dan de voorkeur aan native overdracht boven QR-code wanneer mogelijk.
- Voor meerdere bestemmingen, overweeg een wereldwijd eSIM-abonnement dat meerdere landen dekt.
- Sla de supportcontactgegevens van je provider op voordat je reist.

Voor meer over het gebruik van eSIM's tijdens het reizen, zie onze [Reis-eSIM 2026-gids](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Veelgestelde vragen

**V1: Kan ik een alleen-data eSIM (zoals een reis-eSIM) overzetten?**
Nee. De meeste reis-eSIM's (Roami, Airalo, Holafly, Nomad, enz.) ondersteunen geen platformoverstijgende overdracht. Ze zijn ontworpen om één keer per apparaat te worden geïnstalleerd. Je moet een nieuw abonnement kopen op je nieuwe telefoon. Zie "Waarom kunnen reis-eSIM's niet worden overgezet?" hierboven voor de technische uitleg.

**V2: Werkt de overdracht tussen iPhone 11 en een Samsung S24?**
Ja – zolang beide aan de OS-vereisten voldoen. iPhone 11 ondersteunt iOS 18 (hij draait tot iOS 18). Samsung S24 ondersteunt Android 16. Hardwaregeneratie maakt niet uit; alleen OS-versie maakt uit.

**V3: De app van mijn provider biedt geen eSIM-overdracht. Hoe zit dat?**
Niet elke provider ondersteunt app-gebaseerde eSIM-overdracht. Als je provider het niet biedt, gebruik de provider QR-code fallback: neem contact op met je provider en vraag hen je eSIM opnieuw uit te geven als een nieuwe QR-code. Sommige providers rekenen hier een kleine vergoeding voor ($0-25).

**V4: Werken mijn WhatsApp / iMessage / 2FA-codes nog na overdracht?**
WhatsApp gebruikt je telefoonnummer – het detecteert de SIM-wijziging en vraagt mogelijk om opnieuw te verifiëren (meestal automatisch). iMessage op iPhone gebruikt het eSIM-nummer en zou binnen een minuut opnieuw moeten activeren. Voor 2FA werken diensten die sms naar je nummer sturen normaal – het nummer is niet veranderd. Zie Sectie 10 voor gedetailleerde migratiestappen.

**V5: Kan ik dezelfde eSIM meerdere keren heen en weer overzetten?**
Ja, maar elke overdracht vereist hetzelfde proces. Sommige providers beperken hoe vaak een eSIM per jaar kan worden overgezet (bijv. 3-5 keer). Als je de limiet bereikt, neem contact op met je provider voor hulp.

**V6: Hoe zit het met eSIM + fysieke SIM dual-SIM-opstellingen?**
De overdracht verplaatst alleen de eSIM. De fysieke SIM blijft in het bronapparaat. Als je beide wilt verplaatsen, moet je de eSIM overzetten (met deze gids) en de nano-SIM-kaart fysiek naar het nieuwe apparaat verplaatsen. Voor het optimaliseren van dual-SIM-ervaringen na overdracht, bekijk onze **[Dubbele eSIM werkt niet? 12 oplossingen voor iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**V7: Wat als ik een "verlopen eSIM-profiel"-fout krijg tijdens overdracht?**
Neem contact op met je provider voor een nieuwe QR-code – opnieuw uitgeven is meestal gratis. Zorg dat je de nieuwe QR-code onmiddellijk activeert (binnen 30 minuten) om te voorkomen dat deze weer verloopt.

**V8: Waarom verhindert mijn providerlock dat ik kan overzetten?**
Als je telefoon onder **providerlock** valt, kun je een eSIM alleen overzetten naar een apparaat van dezelfde provider. Neem contact op met je provider om het apparaat te ontgrendelen vóór de overdracht. Op iPhone: Instellingen > Algemeen > Over > Providerlock moet "Geen SIM-beperkingen" zeggen.

**V9: Kan ik een Orange eSIM overzetten naar een niet-Orange apparaat?**
Ja, als je apparaat ontgrendeld is en je Orange-abonnement het toestaat. **Orange eSIM-overdracht** wordt ondersteund via de Orange-app of native overdracht. Orange staat tot 3 overdrachten per jaar toe.

**V10: Werkt de overdracht met een Free eSIM?**
Nee – Free ondersteunt geen platformoverstijgende overdracht. Gebruik de QR-code fallback-methode vanuit het Free-klantenportaal. Free staat tot 2 overdrachten per jaar toe.

**V11: Wat is een eSIM-bevestigingscode en waar vind ik die?**
Sommige eSIM-profielen hebben een verplichte **eSIM-bevestigingscode** – meestal 4-8 cijfers. Zoek deze in de e-mail van de provider of activeringsinstructies. Als je die niet vindt, vraag je provider.

**V12: Wat betekent "eSIM wordt niet overgezet naar nieuwe telefoon"?**
Dit betekent meestal dat je provider geen overdracht ondersteunt, de QR-code is verlopen, de oude eSIM nog actief is, of het nieuwe apparaat provider-locked is. Verwijder eerst de oude eSIM (indien nog zichtbaar) en probeer opnieuw. Zie Sectie 7 voor de volledige probleemoplossingstabel.

**V13: Hoe los ik "eSIM-activering mislukt" op na overdracht?**
Controleer je Wi-Fi-verbinding, herstart beide apparaten en probeer opnieuw. Als het nog steeds mislukt, gebruik de handmatige invoermethode met het SM-DP+-adres uit de e-mail van je provider.

**V14: Annuleert het overzetten van mijn eSIM mijn abonnement?**
Nee – het overzetten van de eSIM verplaatst alleen het SIM-profiel naar een nieuw apparaat. Je abonnement (en facturering) loopt door zoals voorheen. Om je abonnement op te zeggen, moet je apart contact opnemen met je provider.

**V15: Kan ik een eSIM overzetten als ik deze al van de oude telefoon heb verwijderd?**
Ja, maar het is ingewikkelder. Als je de eSIM hebt verwijderd voordat je de overdracht startte, neem contact op met je provider en vraag hen je eSIM opnieuw uit te geven als een nieuwe QR-code. Ze kunnen dit doen omdat je profiel nog op hun servers bestaat.

**V16: Hoeveel kost het om een eSIM QR-code opnieuw uit te geven?**
De meeste providers geven eSIM's gratis opnieuw uit (vooral postpaid-abonnementen). Sommige prepaid-providers of MVNO's kunnen een kleine vergoeding rekenen ($5-25). Vraag het voordat je de nieuwe uitgifte aanvraagt.

**V17: Kan ik een Vodafone eSIM overzetten naar een niet-Vodafone apparaat?**
Ja, zolang je apparaat ontgrendeld is en je Vodafone-abonnement eSIM-overdracht toestaat. Vodafone ondersteunt overdracht via hun app in de meeste landen. Controleer de Vodafone-app voor de "eSIM-overdracht"-optie.

**V18: Wat als ik de overdrachtslimiet van mijn provider bereik?**
Sommige providers limiteren overdrachten tot 3-5 per jaar. Als je de limiet bereikt, neem contact op met providerondersteuning – ze kunnen de limiet vaak resetten of handmatig een nieuwe eSIM QR-code uitgeven (het overdrachtssysteem omzeilen).

**V19: Kan ik twee eSIM's tegelijk overzetten (dubbele eSIM)?**
Ja, maar je moet ze **één voor één** overzetten. Elk eSIM-profiel is onafhankelijk en moet apart worden overgezet met hetzelfde proces. Als je twee actieve eSIM's op je oude apparaat hebt, zet eerst de primaire eSIM over en dan de secundaire.

**V20: Wat is het verschil tussen eSIM-overdracht en eSIM-opnieuw-uitgifte?**
Overdracht verplaatst je bestaande profiel naar een nieuw apparaat (met behoud van je nummer en abonnement). Opnieuw uitgeven creëert een volledig nieuw eSIM-profiel voor hetzelfde nummer – het oude profiel wordt permanent gedeactiveerd. Opnieuw uitgeven is de fallback-methode wanneer overdracht niet wordt ondersteund door je provider.

---

## Eindoordeel

De mogelijkheid om eSIM's tussen iPhone en Android over te zetten zonder providerinterventie is een **gamechanger in 2026**. Het verwijdert het laatste grote knelpunt voor het wisselen van ecosysteem. Zolang je provider op de ondersteunde lijst staat en beide telefoons zijn bijgewerkt, kun je je nummer binnen een minuut verplaatsen.

**Onthoud**:
- Als je provider niet wordt ondersteund, werkt de QR-code fallback nog steeds – het kost alleen een telefoontje.
- Behandel reis-eSIM's als eenmalig; koop nieuw op elk apparaat.
- **Verwijder nooit de oude eSIM voordat je de overdracht start** – dit is de meest voorkomende fout.
- Controleer providerlock voordat je begint – "Geen SIM-beperkingen" is vereist.
- Sommige providers limiteren overdrachten per jaar – controleer voordat je begint.

Als je aanhoudende **eSIM-overdrachtsfout**-meldingen tegenkomt, behandelt onze **[eSIM Diepgaande Probleemoplossingsgids (16 echte gevallen)](/faq/esim-deep-troubleshooting-guide-2026/)** geavanceerde oplossingen.

👉 **Overzetten naar een reisabonnement?** Zie [eSIM voor de VS](/united-states-esim/) of [eSIM voor Europa](/europe-esim/) zodra je overdracht is voltooid.

👉 **Niet zeker of je nieuwe telefoon eSIM ondersteunt?** Controleer onze **[volledige compatibiliteitslijst](/compatibility/)** voordat je begint.

👉 **Een reis-eSIM testen op je nieuwe apparaat?** Pak een **[gratis Roami eSIM-proefperiode](/free-esim/)** om te bevestigen dat alles werkt.

---

*Informatie gebaseerd op Apple en Android officiële documentatie, GSMA-standaarden en providerrichtlijnen per augustus 2026. Functies en providerondersteuning kunnen veranderen.*
## Bronnen

- [GSMA — eSIM (SGP.22)-specificatie](https://www.gsma.com/esim/)
- [Apple Support — eSIM op iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Een eSIM instellen](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)