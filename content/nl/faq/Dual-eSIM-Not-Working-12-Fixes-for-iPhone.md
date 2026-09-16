---
title: "Dual eSIM werkt niet? 12 iPhone-oplossingen"
h1_title: "Hoe je dual eSIM op iPhone oplost die niet werkt: 12 oplossingen"
description: "Dual eSIM werkt niet? Los 12 iPhone-problemen op: gespreksroutering, VoLTE-instelling, batterijverbruik en providervergrendelingscontroles voor iPhone 16 en iOS 18."
image: "/img/esim/usa/usa-esim-dual-sim-setup.jpg"
keywords: ["dual eSIM werkt niet", "iPhone dual SIM geen service", "dual eSIM signaalprobleem", "eSIM providervergrendeling", "dual eSIM probleemoplossing", "dual eSIM activering mislukt", "iOS 18 eSIM", "eSIM APN-instellingen", "eSIM bevestigingscode", "dual eSIM geen service"]
date: 2026-09-16T10:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Probleemoplossing", "Reisinstelling"]
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

# Sidebar: Gratis eSIM-tilbud
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
    - name: "Hong Kong"
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


> **Redacteursnoot:** Roami is het merk achter deze gids. Alle probleemoplossingsstappen zijn gebaseerd op Apple's officiële documentatie, GSMA-standaarden en de tests van ons team op iOS 18. We richten ons op praktische oplossingen die echt werken – niet op theoretische oplossingen.
> 
> **Belangrijkste punten:** VoLTE of abonnementslimieten zijn de meest voorkomende reden waarom een lijn geen gesprekken kan voeren of ontvangen. Problemen met inkomende gespreksroutering worden vaak opgelost door Wi‑Fi Calling uit en weer aan te zetten. iPhones zijn dual standby, niet dual active – "Geen service" op de andere lijn tijdens gesprekken is normaal. Controleer Providervergrendeling in Instellingen (`Geen SIM-beperkingen`) als je geen tweede eSIM kunt toevoegen. Dual eSIM-batterijverbruik kan worden verminderd door 5G uit te schakelen op de lijn met het zwakste signaal.


## Dual eSIM werkt niet? 10-seconden snelle diagnose

**Je telefoon heeft dual eSIM-problemen. Welke is het?**

| Je symptoom | Ga naar oplossing |
|--------------|-------------|
| **Tweede eSIM toont "Geen service"** maar eerste werkt | [Oplossing #2](#2-dual-esim-waarom-toont-één-lijn-geen-service-terwijl-de-andere-werkt) |
| **Kan uitbellen maar KAN GEEN gesprekken ontvangen** | [Oplossing #3](#3-dual-esim-één-nummer-kan-uitbellen-maar-kan-geen-inkomende-gesprekken-ontvangen) |
| **Tijdens een gesprek toont de andere lijn "Geen service"** | [Oplossing #4](#4-dual-esim-tijdens-een-gesprek-toont-de-andere-lijn-geen-service--dit-is-normaal) – dit is normaal! |
| **Kan geen tweede eSIM toevoegen – "Providervergrendeling"-fout** | [Oplossing #5](#5-dual-esim-werkt-niet-controleer-eerst-providervergrendeling) |
| **Batterij raakt sneller leeg met twee lijnen** | [Oplossing #6](#6-dual-esim-batterijverbruik-hoe-je-het-verminderen) |
| **Fysieke SIM niet herkend** | [Oplossing #7](#7-esim--fysieke-sim-conflicten-en-ladeproblemen) |
| **iPhone uit China – helemaal geen eSIM-optie** | [Oplossing #8](#8-speciale-regionale-gevallen-china-hong-kong-macau) – hardwarebeperking |
| **Data werkt maar geen internet (APN-probleem)** | [Oplossing #11](#11-hoe-je-apn-instellingen-configureert-als-je-esim-geen-data-heeft) – APN-configuratie |
| **eSIM per ongeluk verwijderd** | [FAQ #9](#q9-hoe-herstel-ik-een-verwijderde-esim) – afhankelijk van aanbieder |
| **Niet zeker – iets anders** | [Volledige probleemoplossingstabel](#10-probleemoplossingstabel--dual-esim-scenario's) |

> 💡 **Belangrijk inzicht:** Als je **twee lijnen op één iPhone** gebruikt, zijn iPhones **dual standby, niet dual active** – wanneer je in gesprek bent, toont de andere lijn tijdelijk "Geen service". Dit is **normaal gedrag** (zie Oplossing #4). Verspil geen tijd aan het proberen te "fixen".

Voor een complete walkthrough van de basis eSIM-installatie, zie onze **[iPhone 16 eSIM Complete Gids](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. Voor geavanceerde problemen die hier niet worden behandeld, heeft onze **[eSIM Diepgaande Probleemoplossingsgids (16 echte gevallen)](/faq/esim-deep-troubleshooting-guide-2026/)** meer oplossingen.


## Complete dual eSIM-probleemoplossingsreis – van symptoom tot oplossing

Hier is het pad dat de meeste iPhone-gebruikers volgen wanneer dual eSIM niet werkt. Gebruik dit om bij te houden waar je bent.

| Stap | Wat er gebeurt | Wat je moet doen | Waar je het vindt |
| :--- | :--- | :--- | :--- |
| **1. Identificeer het symptoom** | "Mijn tweede eSIM heeft geen signaal." / "Ik kan geen gesprekken ontvangen." / "Batterij raakt snel leeg." | Match je symptoom met de snelle diagnose-tabel hierboven. | [10-seconden snelle diagnose](#dual-esim-werkt-niet-10-seconden-snelle-diagnose) |
| **2. Controleer of het normaal gedrag is** | "Tijdens een gesprek toont mijn andere lijn Geen service." | Dit is **normaal** voor dual standby iPhones. Ga naar Oplossing #4. | [Oplossing #4](#4-dual-esim-tijdens-een-gesprek-toont-de-andere-lijn-geen-service--dit-is-normaal) |
| **3. Sluit providervergrendeling uit** | "Ik kan helemaal geen tweede eSIM toevoegen." | Controleer Providervergrendeling in Instellingen. Moet "Geen SIM-beperkingen" zeggen. | [Oplossing #5](#5-dual-esim-werkt-niet-controleer-eerst-providervergrendeling) |
| **4. Pas de oplossing toe** | Volg de specifieke oplossing voor je symptoom. | Een van de 12 oplossingen hieronder zal je probleem oplossen. | [Oplossingen #1‑#12](#1-wat-zijn-je-dual-esim-opties-op-iphone) |
| **5. Werkt het nog steeds niet?** | "Geen van de oplossingen werkte." | Gebruik de fallback-opties in de probleemoplossingstabel. | [Probleemoplossingstabel](#10-probleemoplossingstabel--dual-esim-scenario's) |


## Snelle diagnostische index (dual eSIM-specifiek)

| Symptoom | Meest waarschijnlijke oorzaak | Oplossingssectie |
|---------|-------------------|--------------|
| Tweede eSIM toont "Geen service" maar eerste werkt | VoLTE- of lijnvolgordeprobleem | [#2](#2-dual-esim-waarom-toont-één-lijn-geen-service-terwijl-de-andere-werkt) |
| Één nummer kan uitbellen maar kan geen gesprekken ontvangen | Inkomende gespreksroutering komt niet overeen | [#3](#3-dual-esim-één-nummer-kan-uitbellen-maar-kan-geen-inkomende-gesprekken-ontvangen) |
| Tijdens een gesprek toont de andere lijn "Geen service" | iPhone gebruikt één datanetwerk tegelijk (normaal) | [#4](#4-dual-esim-tijdens-een-gesprek-toont-de-andere-lijn-geen-service--dit-is-normaal) |
| Kan geen tweede eSIM toevoegen – "Providervergrendeling"-fout | Apparaat vergrendeld op eerste provider | [#5](#5-dual-esim-werkt-niet-controleer-eerst-providervergrendeling) |
| Dual eSIM werkt maar batterij raakt sneller leeg | Beide lijnen zoeken actief | [#6](#6-dual-esim-batterijverbruik-hoe-je-het-verminderen) |
| eSIM + fysieke SIM: fysieke SIM niet herkend | SIM-ladeprobleem of incompatibele kaart | [#7](#7-esim--fysieke-sim-conflicten-en-ladeproblemen) |
| Data toont signaalbalken maar geen internet | APN-instellingen ontbreken of zijn onjuist | [#11](#11-hoe-je-apn-instellingen-configureert-als-je-esim-geen-data-heeft) |


## 1. Wat zijn je dual eSIM-opties op iPhone?

Vanaf iPhone XS, XR en alle nieuwere modellen (inclusief iPhone 16) ondersteunt Apple dual eSIM (twee eSIMs tegelijk actief) op iPhone 13 en nieuwer. Niet-Amerikaanse modellen ondersteunen ook één eSIM plus één fysieke nano‑SIM. Dual‑fysieke‑SIM-modellen voor het vasteland van China hebben geen eSIM-ondersteuning, behalve de iPhone 16.

Je **dual eSIM**-configuratie hangt af van je iPhone-model en regio:

| Configuratie | Ondersteunde modellen | Max. actieve lijnen |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 en nieuwer (inclusief alle iPhone 16-modellen) | 2 |
| **1 eSIM + 1 fysieke nano‑SIM** | Alle iPhones met SIM-lade (niet-Amerikaanse modellen, en Amerikaanse modellen vóór iPhone 14) | 2 |
| **Alleen 1 fysieke SIM** | Oudere iPhones (vóór XS) | 1 |
| **2 fysieke SIMs** | Specifieke dual‑SIM-lademodellen voor vasteland China, Hong Kong, Macau (bijv. iPhone 16 China-versie) | 2 |

Voor een complete lijst van compatibele iPhones, [controleer de dual eSIM-compatibiliteit van je iPhone](/compatibility/).


## 2. Dual eSIM: Waarom toont één lijn "Geen service" terwijl de andere werkt

Als één van je dual eSIM-lijnen data kan gebruiken maar geen gesprekken kan voeren of ontvangen — **of helemaal "Geen service" toont** — zijn de meest voorkomende oorzaken in 2026:

- **VoLTE / VoNR is niet ingeschakeld** voor die lijn. Sommige providers schakelen voice-over-data roaming uit op eSIM-abonnementen, waardoor de lijn alleen-data wordt. (Eenvoudige controle: als je data kunt gebruiken maar niet kunt uitbellen, is dit waarschijnlijk het probleem.)
- **Lijnvolgorde**. iOS routeert spraak naar je *standaard spraaklijn*; een secundaire lijn die op alleen-data is ingesteld, kan geen gesprekken voeren of ontvangen.
- **Het abonnement bevat geen spraak**. Sommige reis-eSIMs zijn ontworpen als alleen-data en hebben helemaal geen spraakdienst. In dat geval zie je signaalbalken, maar een poging om te bellen zal mislukken.

> **Opmerking:** Legacy 3G/CDMA-netwerken zijn uitgefaseerd in de VS en Japan. Verizon en US Cellular hebben CDMA in 2022-2024 afgesloten, en au/KDDI beëindigde 3G in 2022. In 2026 is een lijn met "geen service voor spraak" bijna altijd een VoLTE-, abonnement- of lijnvolgordeprobleem - niet CDMA.

### Oplossingen
- **Stel de getroffen lijn in als je standaard spraaklijn**: `Instellingen > Mobiel netwerk > Standaard spraaklijn`.
- **Schakel VoLTE in**: `Instellingen > Mobiel netwerk > [lijn] > Spraak & data`, selecteer dan LTE of 5G (VoLTE/VoNR).
- **Bevestig dat het abonnement spraak bevat**. Als het een alleen-data reis-eSIM is, houd dan je thuislijn als spraaklijn en gebruik de eSIM alleen voor data.
- **Neem contact op met je provider** om te verifiëren dat voice-over-LTE/5G is ingeschakeld voor je nummer tijdens roaming.

Voor een diepere vergelijking van Amerikaanse providernetwerken, zie onze **[vergelijking van Amerikaanse providernetwerken](/carriers/united-states-esim-carrier-guide/)**.


## 3. Dual eSIM: Één nummer kan uitbellen maar kan geen inkomende gesprekken ontvangen

**Symptoom**: Lijn A werkt prima. Lijn B kan uitgaande gesprekken voeren, maar inkomende gesprekken naar B gaan direct naar voicemail of klinken als "niet beschikbaar".

**Grondoorzaak**: Een netwerkgespreksrouteringsfout. Wanneer Lijn B onlangs wisselde tussen 5G en LTE, of Wi-Fi Calling gebruikte, kan het netwerk van de provider nog steeds proberen inkomende gesprekken via het verkeerde pad te routeren.

**Analogie:** Stel je voor dat de provider een oud adresboek heeft dat je telefoon nog steeds op je vorige huis vermeldt. Wanneer iemand belt, gaan ze naar de verkeerde plek. Wi‑Fi Calling aan/uit zetten werkt het adresboek bij.

### Snelle oplossing (gebruikerskant)
1. Schakel **Wi‑Fi Calling** tijdelijk uit: `Instellingen > Mobiel netwerk > Lijn B > Wi‑Fi Calling` → UIT.
2. Herstart iPhone.
3. Schakel Wi‑Fi Calling weer in.

### Provider-oplossing (bel support)
Vraag je provider om **gespreksroutering te resetten** of **de lijn te vernieuwen** voor dit nummer. Dit werkt meestal kort nadat de provider de lijn opnieuw heeft ingericht. Voor meer gespreksrouterings- en andere gespreksgerelateerde problemen, zie **[Oplossing 14 in onze probleemoplossingsgids](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Voorkom herhaling
- Vermijd snel wisselen tussen 5G/LTE (houd één modus minstens een paar uur aan).
- Als je vaak reist, houd **Data Roaming** UIT voor de lijn die geen data nodig heeft.


## 4. Dual eSIM: Tijdens een gesprek toont de andere lijn "Geen service" – dit is normaal

**Symptoom**: Je bent in gesprek via Lijn A. Als je controleert, toont Lijn B "Geen service".

**Uitleg**: iPhones zijn **dual standby, niet dual active** (dit staat ook bekend als DSDS – Dual SIM Dual Standby). Slechts één lijn kan tegelijk een mobiele verbinding onderhouden. Tijdens een gesprek is de andere lijn tijdelijk onbereikbaar. Zodra het gesprek eindigt, verbinden beide lijnen opnieuw. Dit is **geen dual eSIM-fout** – het is by design.

### Wat je kunt doen:
- **Schakel Wi‑Fi Calling in op beide lijnen** – dan kan de inactieve lijn mogelijk Wi‑Fi gebruiken om gesprekken te ontvangen terwijl je op de andere lijn bent. Apple's [dual standby-documentatie](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) legt dit in meer detail uit.
- **Schakel "Schakelen van mobiele data toestaan" in** – onder `Instellingen > Mobiel netwerk > Mobiele data`. Dit laat de niet-data-lijn de verbinding van de data-lijn gebruiken voor Wi‑Fi Calling.

> 📌 Opmerking: Sommige providers ondersteunen Wi‑Fi Calling niet gelijktijdig op beide lijnen. Controleer dit bij je provider.


## 5. Dual eSIM werkt niet? Controleer eerst providervergrendeling

Als je geen tweede eSIM of fysieke SIM kunt toevoegen:
- Je iPhone is mogelijk **providervergrendeld** op de eerste provider.
- Om te controleren: `Instellingen > Algemeen > Over` → scroll naar **Providervergrendeling**. Er moet "Geen SIM-beperkingen" staan.

### Wat te doen als het vergrendeld is:
- Neem contact op met je provider om een ontgrendeling aan te vragen. Amerikaanse providers moeten ontgrendelen nadat het apparaat is afbetaald.
- Als het ontgrendeld is maar nog steeds niet werkt, moet je mogelijk netwerkinstellingen resetten: `Instellingen > Algemeen > iPhone overdragen of resetten > Reset > Netwerkinstellingen resetten`. (Waarschuwing: dit vergeet Wi‑Fi-wachtwoorden.)

Eenmaal ontgrendeld kun je je eSIM ook verplaatsen tussen iPhone en Android – zie onze **[eSIM Cross-Platform Overdracht 2026-gids](/faq/how-to-transfer-esim-between-iphone-and-android/)** voor stapsgewijze instructies.


## 6. Dual eSIM-batterijverbruik: Hoe je het vermindert

Het uitvoeren van **dual eSIM** of zelfs eSIM + fysieke SIM kan het batterijverbruik verhogen omdat beide lijnen actief verbonden blijven met het netwerk. Hier is hoe je het verbruik minimaliseert terwijl beide lijnen actief blijven:

| Strategie | Effect |
|----------|--------|
| Stel de lijn met zwakker signaal in op **alleen LTE** (niet 5G) | Matige besparing |
| Schakel **Data Roaming** uit op de lijn die niet voor data wordt gebruikt | Bespaart scannen |
| Schakel **5G Standalone** uit (als je provider het toestaat) | Helpt veel |
| Gebruik **Lage datamodus** voor achtergrondapps op de secundaire lijn | Kleine besparing |
| In gebieden met zeer zwak signaal, schakel de secundaire lijn tijdelijk uit | Aanzienlijke besparing |

Om een lijn uit te schakelen: `Instellingen > Mobiel netwerk` → tik op de lijn → schakel **Deze lijn inschakelen** uit. Als je vaak internationaal reist, [probeer Roami's gratis eSIM-proef](/free-esim/) als een batterij-efficiënt alternatief.


## 7. eSIM + fysieke SIM-conflicten en ladeproblemen

**Symptoom**: Je nano‑SIM werkt in een andere telefoon maar niet in je iPhone. Of je eSIM werkt prima, maar de fysieke SIM wordt niet herkend wanneer beide zijn geïnstalleerd.

**Veelvoorkomende oorzaken**:
- De iPhone is **providervergrendeld** op een ander netwerk.
- SIM-lade niet volledig ingestoken of beschadigd.
- SIM-kaart is **te oud** (vóór 4G) of verbogen.
- **Fysieke SIM-conflict**: Op sommige iPhones kan het plaatsen van een fysieke SIM de eSIM-sleuf tijdelijk uitschakelen als het apparaat providervergrendeld is.

**Oplossingen**:
1. Verwijder lade, maak contacten schoon met een zachte doek.
2. Plaats stevig terug tot klik.
3. Herstart iPhone.
4. Als het nog steeds niet wordt herkend, probeer de SIM in een andere telefoon – als het werkt, kan de SIM-lezer van je iPhone defect zijn.
5. Vervang SIM-kaart bij providerwinkel (gratis voor de meeste postpaid abonnementen).

> **Als je eSIM verdwijnt na het plaatsen van een fysieke SIM:** Sommige providervergrendelde iPhones schakelen de eSIM-sleuf uit wanneer een fysieke SIM van een andere provider wordt geplaatst. Verwijder de fysieke SIM, herstart, en je eSIM zou weer moeten verschijnen. Neem dan contact op met je provider om het apparaat te ontgrendelen.

Als je van plan bent volledig over te stappen op eSIM, raadpleeg onze **[iPhone 16 eSIM-gids](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** voor activeringsmethoden.


## 8. Speciale regionale gevallen: China, Hong Kong, Macau

iPhones voor het vasteland van China (behalve iPhone 16) hebben twee fysieke nano‑SIM-sleuven en **helemaal geen eSIM-ondersteuning**. Hong Kong- en Macau-modellen ondersteunen meestal eSIM + fysieke SIM. Als je een dual‑fysieke‑SIM iPhone voor het vasteland van China koopt, kun je geen eSIM installeren, inclusief internationale reis-eSIMs – dit is een hardwarebeperking.

Apple verkoopt specifieke dual‑fysieke‑SIM-modellen in **het vasteland van China**:
- iPhone 16, 17 Pro, 17 Pro Max: **twee fysieke nano‑SIM-sleuven** (geen eSIM behalve Air).
- iPhone 16: **alleen eSIM** (globaal, inclusief China).

**Hong Kong- en Macau**-modellen:
- Ondersteunen **eSIM + fysieke SIM** (zoals internationale modellen) of dual fysieke SIM afhankelijk van het model.
- Verifieer altijd voor aankoop als je van plan bent eSIM-reisabonnementen te gebruiken.

> ⚠️ **Belangrijk**: Als je een dual‑fysieke‑SIM iPhone voor het vasteland van China koopt, **kun je geen eSIM installeren** (inclusief internationale reis-eSIMs) – behalve de iPhone 16. Dit is een hardwarebeperking, geen softwareblokkering.


## 9. Dual eSIM voor werk & privé: Best practices

Veel gebruikers hebben een **werknummer** (eSIM) en **persoonlijk nummer** (tweede eSIM of fysieke SIM). Hier is hoe je je **dual eSIM**-configuratie netjes instelt:

### Label lijnen duidelijk
`Instellingen > Mobiel netwerk` → tik op een lijn → `Label mobiel abonnement` → kies "Zakelijk" of "Persoonlijk", of maak een aangepast label.

### Kies standaard spraak & data
- **Standaard spraaklijn**: Welke lijn te gebruiken wanneer je belt vanuit de native Telefoon-app (je kunt nog steeds per gesprek kiezen).
- **Mobiele data**: Welke lijn mobiele data gebruikt. Schakel **Schakelen van mobiele data toestaan** in zodat de telefoon tijdelijk de data van de andere lijn kan gebruiken als de primaire het signaal verliest.

### Scheid contacten
- Wijs contacten toe aan een specifieke lijn: Bewerk contact → `Voorkeurslijn` → selecteer zakelijk of persoonlijk.

### Voorkom onbedoelde roaming
- Schakel **Data Roaming** uit voor de werklijn als deze dure internationale tarieven heeft.


## 10. Probleemoplossingstabel – dual eSIM-scenario's

| Probleem | Onmiddellijke stap | Langetermijnoplossing | Als het nog steeds niet werkt |
|---------|----------------|----------------|----------------------|
| Tweede eSIM krijgt nooit signaal | Herstart iPhone, schakel dan lijn uit/aan | Bevestig dat het abonnement actief is en de lijn is ingeschakeld | Neem contact op met provider om eSIM opnieuw in te richten |
| Gesprekken gaan direct naar voicemail (geen ringen) | Schakel "Onbekende bellers stilzetten" en gespreksdoorschakeling uit | Neem contact op met provider om gespreksroutering te resetten | Reset netwerkinstellingen |
| Kan geen sms ontvangen op tweede lijn | Stuur een test-sms van die lijn naar een willekeurig nummer | Zorg dat de lijn niet alleen-data is; provider moet mogelijk sms inschakelen | Gebruik provider-app om lijn opnieuw te synchroniseren |
| Twee eSIMs maar beide tonen "Geen service" | Vliegtuigmodus aan/uit > controleer providervergrendeling | Herstel netwerkinstellingen | Controleer of provider een storing heeft in jouw gebied |
| Lijnen gewisseld en nu kan FaceTime/iMessage niet activeren | Ga naar `Instellingen > Berichten > Verzenden & ontvangen` – selecteer nummers handmatig | Log uit bij Apple ID en weer in | Neem contact op met Apple Support |
| Data toont signaal maar geen internet | Controleer APN-instellingen (zie Oplossing #11) | Configureer APN handmatig | Neem contact op met eSIM-aanbieder voor correcte APN |
| eSIM per ongeluk verwijderd | Controleer of aanbieder opnieuw downloaden toestaat | Neem contact op met provider voor nieuwe QR-code | Reis-eSIMs: koop een nieuw abonnement |
| Fysieke SIM geplaatst, eSIM verdwijnt | Providervergrendelde telefoon schakelt eSIM uit met buitenlandse SIM | Verwijder fysieke SIM, herstart, eSIM verschijnt weer | Neem contact op met provider om apparaat te ontgrendelen |


## 11. Hoe je APN-instellingen configureert als je eSIM geen data heeft

**Symptoom**: Je eSIM toont volle signaalbalken (of "Geen service") maar je hebt geen internetverbinding – websites laden niet, apps zeggen "geen verbinding".

**Grondoorzaak**: Het eSIM-profiel is correct geïnstalleerd, maar de Access Point Name (APN)-instellingen ontbreken of zijn onjuist. Sommige eSIM-aanbieders configureren APN automatisch; andere vereisen handmatige invoer.

### Hoe je APN configureert op iPhone

1. Ga naar **Instellingen > Mobiel netwerk**.
2. Tik op de eSIM-lijn die geen data heeft.
3. Tik op **Mobiel datanetwerk** (als je deze optie niet ziet, wordt de APN automatisch geconfigureerd door je provider – sla deze oplossing over).
4. Onder het gedeelte **Mobiele data**, vul het **APN**-veld in.
5. Laat **Gebruikersnaam** en **Wachtwoord** leeg tenzij je provider anders aangeeft.
6. Ga terug, schakel Vliegtuigmodus aan/uit, en test data.

### Veelvoorkomende APN-waarden voor reis-eSIMs

| Aanbieder | APN | Gebruikersnaam | Wachtwoord |
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

> **Als het APN-veld grijs is:** Je provider heeft de APN-instellingen vergrendeld. Dit is gebruikelijk bij postpaid provider-eSIMs (Verizon, T‑Mobile, AT&T). Neem contact op met je provider voor hulp – je kunt het niet handmatig wijzigen.

> **Als APN correct is maar nog steeds geen data:** Herstart je iPhone, schakel Vliegtuigmodus in/uit, of controleer of Data Roaming is ingeschakeld (Instellingen > Mobiel netwerk > [lijn] > Data Roaming AAN).


## 12. Laatste pro-tips voor dual eSIM-gebruikers

- **Label je lijnen** onmiddellijk na het instellen – het bespaart eindeloze verwarring.
- **Stel verschillende beltonen in** voor elke lijn: `Instellingen > Geluiden en trillingen > Beltoon` → scroll naar beneden, je kunt per lijn toewijzen.
- **Gebruik Opdrachten-automatisering** om de standaard spraaklijn te wijzigen op basis van tijd (bijv. werktijden = zakelijke lijn; avonden = persoonlijk).
- **Voordat je je apparaat verkoopt**: Ga naar `Instellingen > Mobiel netwerk`, verwijder **alle** eSIMs, en verwijder de fysieke SIM. Wis dan alle inhoud en instellingen. Voor een gedetailleerde walkthrough van het verwijderen van eSIMs en het annuleren van abonnementen, raadpleeg **[Oplossing #9 in onze probleemoplossingsgids](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.


## Veelgestelde vragen

**Q1: Kan ik twee eSIMs van dezelfde provider gebruiken?**  
Ja, zolang je provider meerdere eSIM-profielen op één account toestaat. T‑Mobile VS ondersteunt bijvoorbeeld tot twee eSIMs op dezelfde iPhone.

**Q2: Ondersteunen beide lijnen gelijktijdig 5G?**  
Ja, op iPhone 13 en nieuwer (inclusief iPhone 16) kunnen beide lijnen op 5G staan (dual 5G standby). Echter, slechts één lijn kan tegelijk 5G-data gebruiken; de andere gebruikt 5G voor spraak-fallback (VoNR).

**Q3: Mijn tweede lijn werkt maar de eerste stopte met werken na het toevoegen ervan – wat is er gebeurd?**  
Je hebt mogelijk per ongeluk de primaire lijninstellingen verwisseld. Ga naar `Instellingen > Mobiel netwerk > Standaard spraaklijn` en zet het terug.

**Q4: Verbruikt dual eSIM meer batterij dan eSIM + fysieke SIM?**  
Over het algemeen verbruikt dual eSIM iets minder stroom omdat er geen fysieke kaartlezer is. Maar het verschil is verwaarloosbaar (binnen 2‑3%).

**Q5: Ik ben op reis – kan ik een lokale eSIM voor data gebruiken en mijn thuis-eSIM voor gesprekken behouden?**  
Ja, best practice:  
- Stel lokale eSIM in als **Mobiele data**-lijn.  
- Houd thuis-eSIM als **Standaard spraaklijn**.  
- Schakel **Data Roaming** uit op thuis-eSIM om enorme kosten te voorkomen.  
- Schakel **Schakelen van mobiele data toestaan** in zodat je thuislijn de data van de lokale eSIM kan gebruiken voor Wi‑Fi Calling & MMS.

Als je vaak tussen apparaten wisselt tijdens het reizen, helpt de **[eSIM cross-platform overdrachtsgids](/faq/how-to-transfer-esim-between-iphone-and-android/)** je om je nummer naadloos over te zetten.

**Q6: Waarom verdwijnt het tweede eSIM soms na een iOS-update?**  
Zeldzame bug. Ga naar `Instellingen > Mobiel netwerk` → als de lijn ontbreekt maar nog steeds onder "Beschikbare SIMs" staat, tik erop en activeer opnieuw. Zo niet, neem contact op met provider om het profiel opnieuw te pushen.

**Q7: Kan ik een dual‑SIM-opstelling gebruiken met een Apple Watch?**  
Ja. Apple Watch kan **één** van de lijnen van de iPhone spiegelen. Kies welke lijn je op het horloge wilt tijdens de installatie. Let op dat het horloge niet beide lijnen tegelijk kan gebruiken – het spiegelt alleen de geselecteerde lijn.

**Q8: Waar kan ik officiële Apple-documentatie voor dual eSIM vinden?**  
Apple biedt twee belangrijke bronnen: [Over eSIM op iPhone](https://support.apple.com/en-us/HT209044) en [Dual SIM gebruiken met een eSIM](https://support.apple.com/en-us/HT209086). Deze behandelen basiscompatibiliteit en installatie.

**Q9: Hoe herstel ik een verwijderde eSIM?**  
Als je een eSIM-profiel hebt verwijderd, hangt herstel af van je provider. Voor reis-eSIMs (Roami, Airalo, enz.) is verwijdering meestal permanent – je moet een nieuw abonnement kopen. Voor postpaid provider-eSIMs (zoals Verizon, T‑Mobile, AT&T), neem contact op met je provider – zij kunnen vaak een nieuwe QR-code uitgeven. Bewaar altijd een back-up van je oorspronkelijke activeringsmail en QR-code.

**Q10: Waarom heeft mijn eSIM signaalbalken maar geen dataverbinding?**  
Dit is bijna altijd een APN-probleem. Zie Oplossing #11 hierboven voor stapsgewijze configuratie.

**Q11: Wat betekent "eSIM bevestigingscode" en waar vind ik het?**  
Sommige eSIM-profielen vereisen een bevestigingscode (4‑8 cijfers) tijdens activering. Zoek het in de e-mail of activeringsinstructies van je provider. Als je het niet kunt vinden, neem contact op met je provider.

**Q12: Kan ik twee actieve eSIMs plus een fysieke SIM op iPhone hebben?**  
Nee. iPhone ondersteunt maximaal **twee actieve lijnen** tegelijk – ofwel twee eSIMs OF één eSIM + één fysieke SIM. Je kunt niet drie actieve lijnen tegelijk hebben.

**Q13: Mijn dual eSIM 5G werkt niet op één lijn – wat moet ik controleren?**  
Zorg eerst dat 5G is ingeschakeld voor beide lijnen: Instellingen > Mobiel netwerk > [lijn] > Spraak & data > selecteer 5G Auto of 5G Aan. Als één lijn nog steeds alleen LTE toont, controleer bij je provider – sommige providers beperken 5G tot alleen de primaire datalijn.

**Q14: Ik heb een fysieke SIM geplaatst en mijn eSIM is verdwenen – hoe krijg ik het terug?**  
Dit is bekend gedrag op providervergrendelde iPhones. Verwijder de fysieke SIM, herstart je iPhone, en de eSIM zou weer moeten verschijnen in Instellingen > Mobiel netwerk. Neem dan contact op met je provider om je apparaat te ontgrendelen zodat beide gelijktijdig kunnen werken.

👉 **Dual eSIM instellen voor reizen?** Bekijk [eSIM-abonnementen voor de VS](/united-states-esim/) of [eSIM voor Japan](/japan-esim/) — beide ondersteunen dual eSIM op moderne iPhones.

---

*Gebaseerd op Apple's officiële documentatie, GSMA-standaarden en providertests per augustus 2026.*
## Bronnen

- [GSMA — eSIM (SGP.22)-specificatie](https://www.gsma.com/esim/)
- [Apple Support — eSIM op iPhone](https://support.apple.com/en-us/108072)
- [Apple Support — Over eSIM op iPhone](https://support.apple.com/en-us/HT209044)