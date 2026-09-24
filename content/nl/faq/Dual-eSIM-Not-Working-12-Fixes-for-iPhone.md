---
title: "Dual eSIM werkt niet? 12 iPhone-oplossingen"
h1_title: "Hoe los je dual eSIM die niet werkt op iPhone op: 12 oplossingen"
description: "Dual eSIM werkt niet? Los 12 iPhone-problemen op: gespreksroutering, VoLTE-setup, batterijverbruik en carrier-lock-controles voor iPhone 16 en iOS 18."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["dual eSIM werkt niet", "iPhone dual SIM geen service", "dual eSIM signaalprobleem", "eSIM carrier lock", "dual eSIM troubleshooting", "dual eSIM activering mislukt", "iOS 18 eSIM", "eSIM APN-instellingen", "eSIM bevestigingscode", "dual eSIM geen service"]
date: 2026-09-20T00:00:00Z
lastmod: 2026-09-20T00:00:00Z
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
  title: "Populaire eSIM's"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Duitsland"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkije"
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


> **Redactionele noot:** Een dual eSIM waarbij één lijn uitvalt is bijna altijd een carrier-lock, een verkeerd geconfigureerde APN of een dual-SIM-instelling — geen dood abonnement. Elke oplossing hieronder volgt de officiële Apple-documentatie en GSMA-standaarden en richt zich op een specifiek symptoom. Doorloop de diagnostische tabel om de exacte oplossing voor jouw fout te vinden.
> 
> **Belangrijkste punten:** VoLTE of abonnementslimieten zijn de meest voorkomende reden dat een lijn niet kan bellen of ontvangen. Problemen met de routering van inkomende gesprekken worden vaak opgelost door Wi‑Fi Calling uit en weer aan te zetten. iPhones zijn dual standby, niet dual active – "No Service" op de andere lijn tijdens gesprekken is normaal. Controleer Carrier Lock in Settings (`No SIM restrictions`) als je geen tweede eSIM kunt toevoegen. Batterijverbruik van dual eSIM kan worden verminderd door 5G uit te schakelen op de lijn met zwakker signaal.

De meeste dual eSIM-problemen op de iPhone komen terug op vijf oorzaken: een carrier-lock, een abonnements- of VoLTE-limiet, Data Roaming- of standaardlijn-instellingen, gewoonlijk dual-standby gedrag dat slechts op een storing lijkt, of een iOS-glitch die een instellingen-reset verhelpt. Match je symptoom in de index hieronder en pas de bijpassende oplossing toe — de meeste kosten minder dan vijf minuten.


## Zo los je dual eSIM die niet werkt op

**Je telefoon heeft dual eSIM-problemen. Welke is het?**

| Jouw symptoom | Spring naar oplossing |
|--------------|-------------|
| **Tweede eSIM toont "No Service"** maar de eerste werkt | [Oplossing #2](#why-one-dual-esim-line-shows-no-service) |
| **Kan uitbellen maar kan GEEN gesprekken ontvangen** | [Oplossing #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Tijdens een gesprek zegt de andere lijn "No Service"** | [Oplossing #4](#one-line-showing-no-service-during-a-call-is-normal) – dit is normaal! |
| **Kan tweede eSIM niet toevoegen – "carrier lock"-fout** | [Oplossing #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **Batterij raakt sneller leeg met twee lijnen** | [Oplossing #6](#how-to-reduce-dual-esim-battery-drain) |
| **Fysieke SIM wordt niet herkend** | [Oplossing #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **iPhone uit China – helemaal geen eSIM-optie** | [Oplossing #8](#dual-esim-in-china-hong-kong-and-macau) – hardwarebeperking |
| **Data werkt maar geen internet (APN-probleem)** | [Oplossing #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – APN-configuratie |
| **eSIM per ongeluk verwijderd** | [FAQ #9](#frequently-asked-questions) – hangt af van de aanbieder |
| **Niet zeker – iets anders** | [Volledige troubleshooting-tabel](#dual-esim-troubleshooting-table) |

> 💡 **Kerninzicht:** Gebruik je **twee lijnen op één iPhone**, iPhones zijn **dual standby, niet dual active** – als je belt, zegt de andere lijn tijdelijk "No Service". Dit is **normaal gedrag** (zie oplossing #4). Verspil geen tijd aan het proberen te "repareren".

Als je dual-SIM-problemen teruggaan op een mislukte installatie, begin dan met de [algemene eSIM-activeringsgids](/faq/how-to-activate-an-esim/), en doorloop daarna de oplossingen hieronder — en voor elke foutmelding die deze pagina niet noemt, behandelt de [eSIM Deep Troubleshooting Guide](/faq/esim-deep-troubleshooting-guide-2026/) elk geval in diepte.


## Complete dual eSIM troubleshooting-gids

Dit is het pad dat de meeste iPhone-gebruikers volgen wanneer dual eSIM niet werkt. Gebruik dit om bij te houden waar je bent.

| Stap | Wat er gebeurt | Wat te doen | Waar je het vindt |
| :--- | :--- | :--- | :--- |
| **1. Identificeer het symptoom** | "Mijn tweede eSIM heeft geen signaal." / "Ik kan geen gesprekken ontvangen." / "De batterij raakt snel leeg." | Match je symptoom met de Snelle diagnose-tabel hierboven. | [10-seconden snelle diagnose](#dual-esim-quick-diagnostic-index) |
| **2. Controleer of het normaal gedrag is** | "Tijdens een gesprek toont mijn andere lijn No Service." | Dit is **normaal** voor dual standby iPhones. Ga naar oplossing #4. | [Oplossing #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Sluit carrier-lock uit** | "Ik kan helemaal geen tweede eSIM toevoegen." | Controleer Carrier Lock in Settings. Moet "No SIM restrictions" zeggen. | [Oplossing #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Pas de oplossing toe** | Volg de specifieke oplossing voor jouw symptoom. | Een van de 12 oplossingen hieronder lost je probleem op. | [Oplossingen #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. Werkt het nog niet?** | "Geen enkele oplossing werkte." | Gebruik de fallback-opties in de troubleshooting-tabel. | [Troubleshooting-tabel](#dual-esim-troubleshooting-table) |


## Snelle diagnostische index dual eSIM

| Symptoom | Meest waarschijnlijke oorzaak | Oplossingssectie |
|---------|-------------------|--------------|
| Tweede eSIM toont "No Service" maar de eerste werkt | VoLTE of probleem met lijnvolgorde | [#2](#why-one-dual-esim-line-shows-no-service) |
| Eén nummer kan uitbellen maar geen gesprekken ontvangen | Onjuiste routering van inkomende gesprekken | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Tijdens een gesprek zegt de andere lijn "No Service" | iPhone gebruikt één datanetwerk tegelijk (normaal) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| Kan tweede eSIM niet toevoegen – "carrier lock"-fout | Apparaat gelockt op eerste carrier | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| Dual eSIM werkt maar battery raakt sneller leeg | Beide lijnen zoeken actief | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + fysieke SIM: fysieke SIM niet herkend | SIM-sleufprobleem of incompatibele kaart | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| Data toont signaalstrepen maar geen internet | APN-instellingen ontbreken of onjuist | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## Welke dual eSIM-opties heb je op iPhone?

Vanaf iPhone XS, XR en alle nieuwere modellen (inclusief iPhone 16) ondersteunt Apple dual eSIM (twee eSIM's tegelijk actief) op iPhone 13 en later. Niet-Amerikaanse modellen ondersteunen ook één eSIM plus één fysieke nano-SIM. Vasteland-China dual-fysieke-SIM modellen hebben geen eSIM-ondersteuning, behalve de iPhone 16.

Je **dual eSIM**-configuratie hangt af van je iPhone-model en regio:

| Configuratie | Ondersteunde modellen | Max actieve lijnen |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 en nieuwer (inclusief alle iPhone 16-modellen) | 2 |
| **1 eSIM + 1 fysieke nano-SIM** | Alle iPhones met SIM-sleuf (niet-Amerikaanse modellen, en Amerikaanse modellen vóór iPhone 14) | 2 |
| **Alleen 1 fysieke SIM** | Oudere iPhones (vóór XS) | 1 |
| **2 fysieke SIM's** | Vasteland-China-, Hongkong-, Macau-specifieke dual-SIM-sleuf modellen (bijv. iPhone 16 China-versie) | 2 |

Voor een complete lijst met compatibele iPhones, [controleer de dual eSIM-compatibiliteit van je iPhone](/compatibility/).


## Waarom één dual eSIM-lijn No Service toont

Als één van je dual eSIM-lijnen data kan gebruiken maar niet kan bellen of ontvangen — **of volledig "No Service" toont** — zijn de meest voorkomende oorzaken in 2026:

- **VoLTE / VoNR is niet ingeschakeld** voor die lijn. Sommige carriers schakelen voice-over-data roaming uit op eSIM-abonnementen, waardoor de lijn data-only blijft. (Eenvoudige controle: kun je data gebruiken maar niet uitbellen, dan is dit waarschijnlijk het probleem.)
- **Lijnvolgorde**. iOS routeert spraak naar je *standaard spraaklijn*; een secundaire lijn die als data-only is ingesteld, kan niet bellen of ontvangen.
- **Het abonnement bevat geen bellen**. Sommige travel eSIM's zijn ontworpen als data-only en hebben helemaal geen spraakdienst. In dat geval zie je signaalstrepen maar het bellen mislukt.

> **Notitie:** Legacy 3G/CDMA-netwerken zijn buiten gebruik gesteld in de VS en Japan. Verizon en US Cellular schakelden CDMA uit in 2022-2024, en au/KDDI beëindigde 3G in 2022. In 2026 is een lijn met "geen spraakdienst" bijna altijd een VoLTE-, abonnements- of lijnvolgorde-probleem - niet CDMA.

### Oplossingen
- **Stel de getroffen lijn in als je standaard spraaklijn**: `Settings > Cellular > Default Voice Line`.
- **Zet VoLTE aan**: `Settings > Cellular > [lijn] > Voice & Data`, selecteer dan LTE of 5G (VoLTE/VoNR).
- **Bevestig dat het abonnement bellen bevat**. Is het een data-only travel eSIM, houd dan je thuislijn als spraaklijn en gebruik de eSIM alleen voor data.
- **Neem contact op met je carrier** om te verifiëren dat voice-over-LTE/5G is ingeschakeld voor je nummer tijdens roaming.

Voor een diepere vergelijking van Amerikaanse carriernetwerken, zie onze **US carrier netwerkvergelijking** in de [US eSIM abonnementsgids](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/).


## Een dual eSIM-lijn die geen gesprekken kan ontvangen

**Symptoom**: Lijn A werkt prima. Lijn B kan uitbellen, maar inkomende gesprekken naar B gaan direct naar voicemail of klinken als "niet beschikbaar".

**Hoofdoorzaak**: een mismatch in de gespreksroutering van het netwerk. Wanneer lijn B onlangs heeft gewisseld tussen 5G en LTE, of Wi-Fi Calling heeft gebruikt, kan het netwerk van de carrier nog steeds proberen inkomende gesprekken via het verkeerde pad te routeren.

**Analogie:** Stel je voor dat de carrier een oud adresboek heeft waarin je telefoon nog op je vorige huis staat. Als iemand belt, gaan ze naar de verkeerde plek. Het uit- en aanzetten van Wi‑Fi Calling werkt het adresboek bij.

### Snelle oplossing op je telefoon
1. Zet **Wi‑Fi Calling** tijdelijk uit: `Settings > Cellular > Lijn B > Wi‑Fi Calling` → UIT.
2. Herstart de iPhone.
3. Zet Wi‑Fi Calling weer aan.

### Carrier-oplossing door support te bellen
Vraag je carrier om de **gespreksroutering te resetten** of de **lijn te verversen** voor dit nummer. Dit werkt meestal kort nadat de carrier de lijn opnieuw provisioneert. Voor meer gespreksrouterings- en andere belgerelateerde problemen, zie **[oplossing 3 hierboven](#a-dual-esim-line-that-cannot-receive-calls)**.

### Voorkom herhaling
- Vermijd het snel wisselen tussen 5G/LTE (houd één modus aan voor minstens een paar uur).
- Reis je vaak, houd dan **Data Roaming** UIT voor de lijn die geen data nodig heeft.


## Eén lijn toont No Service tijdens een gesprek, dat is normaal

**Symptoom**: Je belt via lijn A. Als je kijkt, toont lijn B "No Service".

**Uitleg**: iPhones zijn **dual standby, niet dual active** (ook bekend als DSDS – Dual SIM Dual Standby). Slechts één lijn kan tegelijk een mobiele verbinding behouden. Tijdens een gesprek is de andere lijn tijdelijk onbereikbaar. Zodra het gesprek eindigt, verbinden beide lijnen zich opnieuw. Dit is **geen dual eSIM-storing** – het is zo ontworpen.

### Wat je kunt doen
- **Zet Wi‑Fi Calling op beide lijnen aan** – dan kan de inactieve lijn mogelijk wifi gebruiken om gesprekken te ontvangen terwijl je op de andere lijn belt. Apple's [dual standby-documentatie](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) legt dit in meer detail uit.
- **Zet "Allow Cellular Data Switching" aan** – onder `Settings > Cellular > Cellular Data`. Hierdoor kan de niet-data-lijn de verbinding van de datalijn gebruiken voor Wi‑Fi Calling.

> 📌 Notitie: Sommige carriers ondersteunen Wi‑Fi Calling niet tegelijk op beide lijnen. Check dit bij je carrier.


## Dual eSIM werkt niet op een telefoon met carrier-lock

Als je geen tweede eSIM of fysieke SIM kunt toevoegen:
- Je iPhone is mogelijk **carrier-gelockt** op de eerste carrier.
- Controleer: `Settings > General > About` → scroll naar **Carrier Lock**. Hij moet "No SIM restrictions" zeggen.

### Wat te doen als je telefoon gelockt is
- Neem contact op met je carrier om een ontgrendeling aan te vragen. Amerikaanse carriers moeten ontgrendelen nadat het apparaat is afbetaald.
- Is hij ontgrendeld maar werkt het nog niet, dan moet je mogelijk netwerkinstellingen resetten: `Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings`. (Waarschuwing: hierdoor vergeet hij wifi-wachtwoorden.)

Eenmaal ontgrendeld, kun je je eSIM ook verplaatsen tussen iPhone en Android – zie onze **[eSIM Cross‑Platform Transfer 2026-gids](/faq/how-to-transfer-esim-between-iphone-and-android/)** voor stapsgewijze instructies.


## Zo verminder je dual eSIM-batterijverbruik

Het draaien van **dual eSIM** of zelfs eSIM + fysieke SIM kan het batterijverbruik verhogen omdat beide lijnen actief verbonden blijven met het netwerk. Zo minimaliseer je verbruik terwijl beide lijnen actief blijven:

| Strategie | Effect |
|----------|--------|
| Stel de lijn met zwakker signaal in op **alleen LTE** (niet 5G) | Gemiddelde besparing |
| Zet **Data Roaming** uit op de lijn die niet voor data wordt gebruikt | Bespaart scannen |
| Schakel **5G Standalone** uit (als je carrier het toestaat) | Helpt veel |
| Gebruik **Low Data Mode** voor achtergrond-apps op de secundaire lijn | Kleine besparing |
| In gebieden met zeer zwak signaal, schakel de secundaire lijn tijdelijk uit | Aanzienlijke besparing |

Om een lijn uit te schakelen: `Settings > Cellular` → tik op de lijn → schakel **Turn On This Line** uit. Reis je vaak internationaal, [probeer Roami's gratis eSIM-proefversie](/free-esim/) als batterij-efficiënt alternatief.


## eSIM- en fysieke SIM-conflicten en sleufproblemen

**Symptoom**: Je nano‑SIM werkt in een andere telefoon maar niet in je iPhone. Of je eSIM werkt prima, maar de fysieke SIM wordt niet herkend wanneer beide geïnstalleerd zijn.

**Veelvoorkomende oorzaken**:
- De iPhone is **carrier-gelockt** op een ander netwerk.
- SIM-sleuf niet volledig ingeschoven of beschadigd.
- SIM-kaart is **te oud** (vóór 4G) of verbogen.
- **Fysiek SIM-conflict**: bij sommige iPhones kan het invoegen van een fysieke SIM de eSIM-sleuf tijdelijk uitschakelen als het apparaat carrier-gelockt is.

**Oplossingen**:
1. Verwijder de sleuf, maak de contacten schoon met een zachte doek.
2. Schuif stevig terug tot een klik.
3. Herstart de iPhone.
4. Wordt hij nog steeds niet herkend, probeer de SIM dan in een andere telefoon – werkt hij daar, dan kan de SIM-lezer van je iPhone defect zijn.
5. Vervang de SIM-kaart bij de carrier-winkel (gratis bij de meeste postpaid-abonnementen).

> **Als je eSIM verdwijnt na het invoegen van een fysieke SIM:** Sommige carrier-gelockte iPhones schakelen de eSIM-sleuf uit wanneer een fysieke SIM van een andere carrier wordt ingevoegd. Verwijder de fysieke SIM, herstart, en je eSIM zou weer moeten verschijnen. Neem daarna contact op met je carrier om het apparaat te ontgrendelen.

Wil je volledig overschakelen naar eSIM, raadpleeg dan onze **[iPhone 16 eSIM-gids](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** voor activeringsmethoden.


## Dual eSIM in China, Hongkong en Macau

Vasteland-China iPhones (behalve iPhone 16) hebben twee fysieke nano‑SIM-sleuven en **helemaal geen eSIM-ondersteuning**. Hongkong- en Macau-modellen ondersteunen doorgaans eSIM + fysieke SIM. Koop je een vasteland-China dual-fysieke-SIM iPhone, dan kun je geen enkele eSIM installeren, inclusief internationale travel eSIM's – dit is een hardwarebeperking.

Apple verkoopt specifieke dual-fysieke-SIM modellen in **vasteland-China**:
- iPhone 16, 17 Pro, 17 Pro Max: **twee fysieke nano‑SIM-sleuven** (geen eSIM behalve Air).
- iPhone 16: **alleen eSIM** (globaal, inclusief China).

**Hongkong- en Macau**-modellen:
- Ondersteunen **eSIM + fysieke SIM** (zoals internationale modellen) of dubbele fysieke SIM, afhankelijk van het model.
- Verifieer altijd vóór aankoop als je van plan bent eSIM-reisabonnementen te gebruiken.

> ⚠️ **Belangrijk**: Koop je een vasteland-China dual-fysieke-SIM iPhone, dan kun je **geen enkele eSIM installeren** (inclusief internationale travel eSIM's) – behalve de iPhone 16. Dit is een hardwarebeperking, geen softwareblokkade.


## Dual eSIM voor werk- en persoonlijke lijnen

Veel gebruikers hebben een **werknummer** (eSIM) en **persoonlijk nummer** (tweede eSIM of fysieke SIM). Zo stel je je **dual eSIM**-configuratie netjes in:

### Label lijnen duidelijk
`Settings > Cellular` → tik op een lijn → `Cellular Plan Label` → kies "Business" of "Personal", of maak een eigen label.

### Kies standaard spraak & data
- **Default Voice Line**: welke lijn te gebruiken wanneer je belt vanuit de native Phone-app (je kunt nog steeds per gesprek kiezen).
- **Cellular Data**: welke lijn mobiele data gebruikt. Zet **Allow Cellular Data Switching** aan zodat de telefoon tijdelijk de data van de andere lijn kan gebruiken als de primaire het signaal verliest.

### Scheid contacten
- Wijs contacten toe aan een specifieke lijn: bewerk contact → `Preferred Line` → selecteer zakelijk of persoonlijk.

### Voorkom onbedoeld roamen
- Zet **Data Roaming** uit voor de werklijn als die dure internationale tarieven heeft.


## Dual eSIM troubleshooting-tabel

| Probleem | Onmiddellijke stap | Langetermijnoplossing | Als het nog steeds niet werkt |
|---------|----------------|----------------|----------------------|
| Tweede eSIM krijgt nooit signaal | Herstart de iPhone, schakel de lijn dan uit/aan | Bevestig dat het abonnement actief is en de lijn is ingeschakeld | Neem contact op met de carrier om de eSIM opnieuw te provisioneren |
| Gesprekken gaan direct naar voicemail (geen overgang) | Schakel "Silence Unknown Callers" en gespreksdoorschakeling uit | Neem contact op met de carrier om de gespreksroutering te resetten | Reset netwerkinstellingen |
| Kan geen SMS ontvangen op tweede lijn | Stuur een test-SMS vanaf die lijn naar elk nummer | Zorg dat de lijn niet data-only is; carrier moet mogelijk SMS inschakelen | Gebruik de carrier-app om de lijn te resynchroniseren |
| Twee eSIM's maar beide tonen "No Service" | Airplane mode aan/uit > controleer carrier-lock | Herstel netwerkinstellingen | Controleer of de carrier een storing heeft in jouw gebied |
| Lijnen gewisseld en nu activeert FaceTime/iMessage niet | Ga naar `Settings > Messages > Send & Receive` – selecteer handmatig nummers | Meld je af bij Apple ID en weer aan | Neem contact op met Apple Support |
| Data toont signaal maar geen internet | Controleer APN-instellingen (zie oplossing #11) | Configureer APN handmatig | Neem contact op met de eSIM-aanbieder voor de juiste APN |
| eSIM per ongeluk verwijderd | Controleer of de aanbieder herdownload toestaat | Neem contact op met de carrier voor een nieuwe QR code | Travel eSIM's: koop een nieuw abonnement |
| Fysieke SIM ingevoegd, eSIM verdwijnt | Carrier-gelockte telefoon schakelt eSIM uit bij vreemde SIM | Verwijder de fysieke SIM, herstart, eSIM verschijnt weer | Neem contact op met de carrier om het apparaat te ontgrendelen |


## Zo configureer je APN-instellingen als je eSIM geen data heeft

**Symptoom**: Je eSIM toont volledige signaalstrepen (of "No Service") maar je hebt geen internetverbinding – websites laden niet, apps zeggen "geen verbinding".

**Hoofdoorzaak**: Het eSIM-profiel is correct geïnstalleerd, maar de Access Point Name (APN)-instellingen ontbreken of zijn onjuist. Sommige eSIM-aanbieders configureren de APN automatisch; anderen vereisen handmatige invoer.

### Zo configureer je APN op iPhone

1. Ga naar **Settings > Cellular**.
2. Tik op de eSIM-lijn zonder data.
3. Tik op **Cellular Data Network** (zie je deze optie niet, dan is de APN automatisch geconfigureerd door je carrier – sla deze oplossing over).
4. Onder de sectie **Cellular Data**, vul het veld **APN** in.
5. Laat **Username** en **Password** leeg tenzij je aanbieder anders aangeeft.
6. Ga terug, schakel Airplane Mode aan/uit en test de data.

### Veelvoorkomende APN-waarden voor travel eSIM's

| Aanbieder | APN | Username | Password |
|----------|-----|----------|----------|
| **Roami** | internet | (leeg) | (leeg) |
| **Airalo** | globaldata | (leeg) | (leeg) |
| **Holafly** | hola | (leeg) | (leeg) |
| **Nomad** | nbdata | (leeg) | (leeg) |
| **T‑Mobile (VS)** | fast.t-mobile.com | (leeg) | (leeg) |
| **AT&T (VS)** | nxgen | (leeg) | (leeg) |
| **Verizon (VS)** | vzwinternet | (leeg) | (leeg) |
| **EE (VK)** | everywhere | (leeg) | (leeg) |
| **O2 (VK)** | mobile.o2.co.uk | web | web |
| **Vodafone (VK)** | internet | (leeg) | (leeg) |
| **Three (VK)** | three.co.uk | (leeg) | (leeg) |
| **Orange (Frankrijk)** | orange.fr | (leeg) | (leeg) |

> **Als het APN-veld grijs is:** Je carrier heeft de APN-instellingen vergrendeld. Dit komt vaak voor bij postpaid carrier-eSIM's (Verizon, T‑Mobile, AT&T). Neem contact op met je carrier voor hulp – je kunt het niet handmatig wijzigen.

> **Als de APN correct is maar nog steeds geen data:** Herstart je iPhone, schakel Airplane Mode, of controleer of Data Roaming is ingeschakeld (Settings > Cellular > [lijn] > Data Roaming AAN).


## Laatste pro-tips voor dual eSIM-gebruikers

- **Label je lijnen** direct na de installatie – dat bespaart eindeloze verwarring.
- **Stel verschillende beltonen in** voor elke lijn: `Settings > Sounds & Haptics > Ringtone` → scroll omlaag, je kunt per lijn toewijzen.
- **Gebruik Shortcuts-automatisering** om de standaard spraaklijn te wijzigen op basis van tijd (bijv. werktijden = zakelijke lijn; avonden = persoonlijk).
- **Voordat je je apparaat verkoopt**: Ga naar `Settings > Cellular`, verwijder **alle** eSIM's en verwijder de fysieke SIM. Wis daarna alle inhoud en instellingen. Voor een gedetailleerde uitleg over het verwijderen van eSIM's en het opzeggen van abonnementen, raadpleeg **[oplossing #15 in onze troubleshooting-gids](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)**.


## Veelgestelde vragen

**V1: Kan ik twee eSIM's van dezelfde carrier gebruiken?**  
Ja, zolang je carrier meerdere eSIM-profielen op één account toestaat. Bijvoorbeeld, T‑Mobile US ondersteunt tot twee eSIM's op dezelfde iPhone.

**V2: Ondersteunen beide lijnen 5G tegelijk?**  
Ja, op iPhone 13 en nieuwer (inclusief iPhone 16) kunnen beide lijnen op 5G staan (dual 5G standby). Slechts één lijn kan echter tegelijk 5G-data gebruiken; de andere gebruikt 5G voor spraak-fallback (VoNR).

**V3: Mijn tweede lijn werkt maar de eerste stopte met werken nadat ik hem toevoegde – wat is er gebeurd?**  
Mogelijk heb je per ongeluk de instellingen van de primaire lijn omgewisseld. Ga naar `Settings > Cellular > Default Voice Line` en stel hem terug in.

**V4: Verbruikt dual eSIM meer batterij dan eSIM + fysieke SIM?**  
Over het algemeen verbruikt dual eSIM iets minder stroom omdat er geen fysieke kaartlezer is. Maar het verschil is verwaarloosbaar (binnen 2‑3%).

**V5: Ik reis – kan ik een lokale eSIM gebruiken voor data en mijn thuis-eSIM voor bellen houden?**  
Ja, beste praktijk:  
- Stel de lokale eSIM in als **Cellular Data**-lijn.  
- Houd de thuis-eSIM als **Default Voice Line**.  
- Zet **Data Roaming** uit op de thuis-eSIM om enorme kosten te vermijden.  
- Zet **Allow Cellular Data Switching** aan zodat je thuislijn de data van de lokale eSIM kan gebruiken voor Wi‑Fi Calling & MMS.

Wissel je vaak tussen apparaten tijdens het reizen, dan helpt de **[eSIM cross-platform transfer-gids](/faq/how-to-transfer-esim-between-iphone-and-android/)** je om je nummer naadloos te verplaatsen.

**V6: Waarom verdwijnt de tweede eSIM soms na een iOS-update?**  
Zeldzame bug. Ga naar `Settings > Cellular` → ontbreekt de lijn maar toont hij nog steeds onder "Available SIMs", tik er dan op en activeer opnieuw. Zo niet, neem dan contact op met de carrier om het profiel opnieuw te pushen.

**V7: Kan ik een dual-SIM setup gebruiken met een Apple Watch?**  
Ja. De Apple Watch kan **één** van de lijnen van de iPhone spiegelen. Kies welke lijn je op het horloge wilt tijdens de setup. Let op: het horloge kan niet beide lijnen tegelijk gebruiken – het spiegelt alleen de geselecteerde lijn.

**V8: Waar vind ik de officiële Apple-documentatie voor dual eSIM?**  
Apple biedt twee belangrijke bronnen: [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) en [Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086). Deze behandelen basiscompatibiliteit en setup.

**V9: Hoe herstel ik een verwijderde eSIM?**  
Als je een eSIM-profiel hebt verwijderd, hangt herstel af van je carrier. Voor travel eSIM's (Roami, Airalo, enz.) is verwijdering meestal permanent – je moet een nieuw abonnement kopen. Voor postpaid carrier-eSIM's (zoals Verizon, T‑Mobile, AT&T), neem contact op met je carrier – zij kunnen vaak een nieuwe QR code opnieuw uitgeven. Bewaar altijd een backup van je oorspronkelijke activeringsmail en QR code.

**V10: Waarom heeft mijn eSIM signaalstrepen maar geen dataverbinding?**  
Dit is bijna altijd een APN-probleem. Zie oplossing #11 hierboven voor stapsgewijze configuratie.

**V11: Wat betekent "eSIM bevestigingscode" en waar vind ik die?**  
Sommige eSIM-profielen vereisen een bevestigingscode (4‑8 cijfers) tijdens activering. Zoek ernaar in de e-mail of activeringsinstructies van je carrier. Niet gevonden? Neem contact op met je carrier.

**V12: Kan ik twee actieve eSIM's plus een fysieke SIM hebben op iPhone?**  
Nee. De iPhone ondersteunt maximaal **twee actieve lijnen** tegelijk – ofwel twee eSIM's OF één eSIM + één fysieke SIM. Je kunt niet drie actieve lijnen tegelijk hebben.

**V13: Mijn dual eSIM 5G werkt op één lijn niet – wat moet ik controleren?**  
Zorg eerst dat 5G is ingeschakeld voor beide lijnen: Settings > Cellular > [lijn] > Voice & Data > selecteer 5G Auto of 5G On. Toont één lijn nog steeds alleen LTE, check dan bij je carrier – sommige carriers beperken 5G tot alleen de primaire datalijn.

**V14: Ik heb een fysieke SIM ingevoegd en mijn eSIM verdween – hoe krijg ik hem terug?**  
Dit is bekend gedrag op carrier-gelockte iPhones. Verwijder de fysieke SIM, herstart je iPhone, en de eSIM zou weer moeten verschijnen in Settings > Cellular. Neem daarna contact op met je carrier om je apparaat te ontgrendelen zodat beide tegelijk kunnen werken.

👉 **Dual eSIM instellen om te reizen?** Bekijk [eSIM abonnementen voor de VS](/united-states-esim/) of [eSIM voor Japan](/japan-esim/) — beide ondersteunen dual eSIM op moderne iPhones.

---

*Gebaseerd op officiële Apple-documentatie, GSMA-standaarden en carrier-testen per september 2026.*
## Bronnen

- [GSMA — eSIM (SGP.22) specificatie](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Apple Support — About eSIM on iPhone](https://support.apple.com/en-us/HT209044)
