---
title: "eSIM werkt niet? Los compatibiliteitsfouten op in 2026"
h1_title: "Hoe los je eSIM die niet werkt op: compatibiliteitsfouten in 2026"
description: "Vastgelopen met eSIM-fouten? Leer hoe je activeringsstoringen, overdrachtsproblemen en bootloops oplost op iPhone & Android. Diagnoseer je telefoon in 2 minuten."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["esim werkt niet", "esim niet ondersteund", "esim niet compatibel iphone", "kan esim niet activeren", "esim netwerk niet beschikbaar", "esim niet overzetten naar nieuwe iphone", "per ongeluk esim verwijderd", "esim profiel verlopen", "esim qr code ongeldig", "hoe esim op iphone te fixen", "esim overdrachtsfout", "esim geen service"]
date: 2026-09-20T00:00:00Z
lastmod: 2026-09-20T00:00:00Z
tags: ["eSIM", "Troubleshooting", "Activation Errors", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

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


> **Redactionele noot:** Een groot deel van de klachten "mijn eSIM werkt niet" blijkt een telefoonprobleem, geen abonnementsprobleem. Deze gids beantwoordt de vraag die je vóór alles moet stellen: *is mijn telefoon überhaupt geschikt voor een eSIM?* We leiden je door de 2-minuten hardwarecheck, China/Hongkong-modeluitzonderingen en carrier-locks — zodat je geen uur verspilt aan activeringsstappen die nooit kunnen werken op je apparaat.

> **Op zoek naar een foutcode-oplossing?** Als je telefoon de hardwarecheck hieronder doorstaat maar je kijkt naar een specifieke melding ("Activation failed", "No Service", "QR invalid", herstelfout 4013/4014), is dat een ander probleem. Ga naar onze [eSIM Deep Troubleshooting Guide](/faq/esim-deep-troubleshooting-guide-2026/) voor de fout-voor-fout naslag.

## Is mijn telefoon überhaupt geschikt voor eSIM?

Voordat je Settings opent, een enkele QR code scant of contact opneemt met support, bevestig dat je telefoon daadwerkelijk de vereiste embedded-SIM-hardware heeft. Deze ene controle sluit direct ongeveer de helft van alle "eSIM werkt niet"-gevallen uit.

### De universele EID-check

Open de belapp van je telefoon en toets:

> **`*#06#`**

- Verschijnt er een scherm met een **32-cijferige EID** (eUICC Identifier), dan heeft je telefoon de ingebouwde chip die nodig is voor digitale SIM-activering. ✅
- Toont het scherm alleen **IMEI**-nummers en geen EID, dan is de hardware er niet. ❌

**Wat te doen als er geen EID verschijnt:** Stop hier. Geen enkele software-update, hack of "force"-methode kan de ontbrekende chip toevoegen — het is een fysieke afwezigheid van hardware. Gebruik een fysieke SIM, of bekijk oplossing #4 voor telefoons die *lijken* alsof ze eSIM zouden moeten ondersteunen maar dat niet doen.

### EID vs IMEI vs ICCID uitgelegd

| Identifier | Wat het is | Wat het je vertelt |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 cijfers) | Identificeert je telefoonmodel — elke telefoon heeft er een |
| **EID** | eUICC Identifier (32 cijfers) | Bevestigt dat de embedded-SIM-chip aanwezig is — alleen eSIM-geschikte telefoons hebben er een |
| **ICCID** | Integrated Circuit Card Identifier (19–20 cijfers) | Identificeert een specifiek eSIM-profiel nadat het is geïnstalleerd |

> **Kerninzicht:** EID = hardware aanwezig. Zie je een EID, dan is je telefoon fysiek geschikt voor eSIM. Zie je er geen, dan verandert niets wat je installeert dat.

### Waar vind je elk nummer

Alle drie de nummers zitten in het zicht zodra je het menu kent. Hier is de kortste route naar elk:

| Identifier | Snelste weg | Back-uplocatie |
| :--- | :--- | :--- |
| **IMEI (15 cijfers)** | Toets `*#06#` — het is het eerste getoonde nummer | iPhone: **Settings > General > About**. Android: **Settings > About phone** |
| **EID (32 cijfers)** | Toets `*#06#` en scroll — het is het lange nummer dat begint met **8904** | iPhone: **Settings > General > About > EID**. Samsung: **Settings > About phone > Status** |
| **ICCID (19–20 cijfers)** | Verschijnt pas nadat een profiel is geïnstalleerd | iPhone: **Settings > General > About**. Android: **Settings > About phone > SIM card status** |

> **Handig weetje:** elke EID begint met **"8904"** — dat prefix markeert hem als eUICC-identifier. Begint het lange nummer op het scherm met iets anders, dan lees je de verkeerde waarde.

### De Add eSIM-knop test

Toont `*#06#` een EID maar je ziet nog steeds "eSIM not supported", open dan **Settings > Cellular** en zoek naar **"Add eSIM"** of **"Add Cellular Plan"**. Staat de optie er maar mislukt hij bij het scannen, dan heb je hoogstwaarschijnlijk te maken met een **carrier lock** of een **regiobeperking** — beide hieronder behandeld.

### De Settings-zoekmethode

Geen belapp bij de hand (sommige tablets en klaptelefoons verbergen hem), of gaf `*#06#` een verwarrend scherm? De eigen zoekbalk van je telefoon is de op één na snelste controle.

- **iPhone:** Open **Settings**, swipe omlaag vanaf de bovenkant van de lijst om het zoekvak te tonen, en typ **"eSIM"**. Een resultaat van **"Add eSIM"** of **"Add Cellular Plan"** betekent dat de functie actief is.
- **Samsung:** Open **Settings**, tik op het **vergrootglas-icoon** bovenaan en typ **"eSIM"**. Verschijnt **"SIM Card Manager"** (of "Add mobile plan"), dan heeft jouw variant de chip.
- **Pixel:** Open **Settings > Network & internet > SIMs**. Zie je **"Download a SIM instead?"**, dan zit je goed. Een scherm dat alleen je fysieke SIM toont — zonder downloadoptie — betekent geen eUICC-chip.

> **Geen zoekresultaat = geen hardware.** Geeft een telefoon die na ongeveer 2018 is verkocht niets terug op "eSIM" in Settings-zoeken, dan houd je vrijwel zeker een regio- of budgetvariant vast die zonder de chip is verscheept.

### Het modelnummer opzoeken

Gebruikt kopen, of een telefoon controleren die je niet aan kunt zetten? Het modelnummer beslist het in seconden.

- **iPhone:** **Settings > General > About > Model Number**, tik daarna op het nummer om het om te schakelen naar de **met A-beginnende identifier** (bijv. **A2111**). De letters vóór **/A** in het partnummer coderen de verkoopregio — de volledige suffixkaart staat in Sectie 2.
- **Samsung:** **Settings > About phone > Model number** (bijv. **SM-S921U1**). Het laatste teken is de giveaway: **U** = VS-carrier, **U1** = VS simlockvrij, **B** = Europa/globaal, **0** = China/Hongkong (Snapdragon).
- **Pixel:** **Settings > About phone > Model**. Pixel-modelstrings verschillen per regio en carrier — Japan en sommige VS-carriervarianten beperken eSIM, dus check de specifieke code of toets `*#06#`.

> **Vuistregel:** eindigt het modelnummer op een China-/regiosuffix (of een VS-carriersuffix bij Samsung), verifieer dan met `*#06#` voordat je aanneemt dat eSIM werkt. Modelnummer plus EID samen geven je een 100% antwoord.

### Waarom een telefoon een EID kan tonen maar eSIM toch weigert

| Scenario | EID aanwezig? | Werkt eSIM? | Waarom? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR en nieuwer (globaal) | ✅ Ja | ✅ Ja | Volledige ondersteuning voor digitale SIM-profielen |
| iPhone XS/XR (China-model) | ❌ Nee | ❌ Nee | Hardware verwijderd voor dubbele fysieke SIM |
| Samsung S20 FE (VS-carrier) | ✅ Ja | ❌ Nee | Carrier heeft de functie in software uitgeschakeld |
| Google Pixel 4a (Japan) | ✅ Ja | ❌ Nee | Carrier heeft de functionaliteit geblokkeerd |
| Carrier-gelockte iPhone (AT&T/T-Mobile) | ✅ Ja | ❌ Nee (voor andere carriers) | Netwerklock blokkeert profielen van andere aanbieders |
| Simlockvrije iPhone (elke regio) | ✅ Ja | ✅ Ja | Volledige ondersteuning |


## eSIM niet ondersteund of niet compatibel op iPhone

Zie je **"eSIM not supported"**, **"this eSIM is not compatible with this iPhone"**, of simpelweg **"eSIM not compatible iPhone"**, dan is de oorzaak bijna altijd een van vijf dingen — en elk gaat over je *apparaat*, niet het abonnement.

### Je iPhone-model is ouder dan eSIM-hardware

Alleen iPhones vanaf de **XR, XS, XS Max (2018) en nieuwer** hebben de ingebouwde chip. De iPhone 8, 8 Plus en iPhone X niet, dus die geven **"eSIM not supported"** terug wat je ook probeert. De eUICC-chip is simpelweg niet aanwezig op die borden — dit is een hardwarebeperking, geen instellingenprobleem.

**Snelle controle:** Toets `*#06#`. Een 32-cijferige EID betekent dat je goed zit; alleen IMEI betekent dat je niet goed zit.

**Wat te doen:** Gebruik een fysieke SIM, of upgrade naar een iPhone XR of nieuwer. De officiële lijst staat op [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/118670).

### Je iPhone is een vasteland-China model

In vasteland-China verkochte iPhones worden geleverd met **twee fysieke SIM-sleuven en geen eSIM-hardware**. Chinese regelgeving duwt binnenlandse smartphones richting dubbele fysieke SIM, dus Apple heeft de ingebouwde chip op deze toestellen verwijderd. Zelfs als de optie "Add Cellular Plan" verschijnt, wordt hij niet voltooid — dit is de allerbelangrijkste reden voor "eSIM not compatible with this iPhone" bij kopers die hun apparaat in China of via bepaalde wederverkopers hebben gekocht.

**Hoe te herkennen:** **Settings > General > About > Model Number**. Eindigt hij op **"CH/A"**, dan is het een vasteland-China model. (Volledige suffixtabel in Sectie 2 hieronder.)

**Wat te doen:** Er is geen manier om eSIM op een CH/A-apparaat in te schakelen. Gebruik een fysieke travel SIM, of verkoop de telefoon en koop een globale versie.

### Je iPhone heeft een carrier-lock

Sommige carriers — vooral Amerikaanse — locken iPhones op hun eigen netwerk. Het activeren van een profiel van een andere aanbieder (zoals een travel eSIM) geeft dan "eSIM not supported" of een "carrier does not support"-melding. Let op: sommige carriers locken alleen de fysieke SIM-sleuf en laten de eSIM-sleuf open, maar velen locken beide.

**Hoe te controleren:** **Settings > General > About > Carrier Lock**. Hij zou **"No SIM restrictions"** moeten zeggen. Staat er "SIM locked", dan heb je een ontgrendeling nodig. Zie Sectie 3 voor de volledige carrier-lock-uitleg.

### Je iOS-versie is verouderd

Digitale SIM-ondersteuning verbeterde sterk in iOS 16 en later. Op iOS 12 of 13 worden sommige moderne carrier-profielen simpelweg niet geïnstalleerd.

**Hoe te controleren:** **Settings > General > Software Update**.

**Wat te doen:** Werk bij naar de nieuwste iOS, verwijder een eventueel half-geïnstalleerd profiel en scan de QR code opnieuw.

### Deze iPhone ondersteunt geen eSIM op een iPhone 14

Een iPhone 14 (VS-versie) zou altijd eSIM moeten ondersteunen — het Amerikaanse model heeft helemaal geen fysieke SIM-sleuf. Geeft hij desondanks deze fout, dan kijk je naar een zeldzame **eUICC-hardwarestoring**. Neem contact op met Apple Support voor een hardware-diagnose in plaats van instellingen achterna te zitten.

Voor de volledige model-voor-model iPhone-lijst, zie onze [iPhone eSIM-compatibiliteitsgids](/faq/iphone-11-esim-compatible/).

Samsung-eigenaren moeten de [Samsung Galaxy eSIM-gids](/faq/samsung-s20-esim-compatible/) checken, en Pixel-eigenaren de [Google Pixel eSIM-gids](/faq/google-pixel-6-esim-compatible/).


### eSIM niet ondersteund: hardware, software of carrier

Elk "eSIM not supported"-geval — op elke telefoon, elke carrier — valt in een van drie categorieën. De categorie benoemen vertelt je direct of het probleem oplosbaar is.

| Categorie | Hoe het eruitziet | Oplosbaar? | Jouw zet |
| :--- | :--- | :--- | :--- |
| **Hardware** | Geen EID op `*#06#`; iPhone vóór 2018; China-model (CH/A); budget Android zonder eUICC | ❌ Nee | Fysieke SIM, of upgrade de telefoon |
| **Software** | EID aanwezig, maar de functie is verborgen of het OS is oud (carrier-uitgeschakelde Samsung S20 FE, verouderde iOS) | ✅ Meestal | Werk het OS bij, of verwijder de carrierbeperking |
| **Carrier** | EID aanwezig, menu zichtbaar, maar activering van het abonnement van een andere aanbieder mislukt | ✅ Ja | Ontgrendel het apparaat (Sectie 3), scan dan opnieuw |

**De 30-seconden routeringstest:** toets `*#06#`.
- **Geen EID** → hardware. Stop hier — niets wat je installeert verandert dat.
- **EID aanwezig, maar de "Add eSIM"-stroom mislukt** → software of carrier. Beide zijn oplosbaar, dus blijf lezen.

Dat ene resultaat stuurt je naar de juiste oplossing voor ongeveer 9 van de 10 "not supported"-meldingen die we bij Roami zien.


## De China-, Hongkong- en Macau-modelgids

Waar je telefoon is verkocht bepaalt welke hardware hij heeft. Dit is de snelste manier om een regionale no-eSIM-situatie uit te sluiten of te bevestigen.

### China-model snelle naslag

| Eindigt modelnummer op | Regio | eSIM-ondersteuning |
| :--- | :--- | :--- |
| **CH/A** | Vasteland-China | ❌ Nee (dubbele fysieke SIM) |
| **HK/A** | Hongkong | ⚠️ Varieert (sommige modellen ondersteunen fysieke + digitale SIM) |
| **LL/A** | VS | ✅ Ja |
| **ZA/A** | Canada | ✅ Ja |
| **J/A** | Japan | ✅ Ja (behalve sommige carrier-modellen) |
| **B/A** | VK/Europa | ✅ Ja |
| **X/A** | Australië/Nieuw-Zeeland | ✅ Ja |

### eSIM-status vasteland-China iPhone

- **Alle iPhones verkocht in vasteland-China** (behalve de iPhone 16-serie) hebben dubbele fysieke SIM en geen eSIM.
- **Chinese Android-telefoons** — Xiaomi, Oppo, Vivo, Huawei — die nationaal worden verkocht, missen doorgaans ook de eSIM-chip.
- **Als je een internationale telefoon meeneemt naar China:** hij werkt met internationale travel eSIM's, maar lokale Chinese carriers bieden geen eSIM aan toeristen aan, dus je hebt nog steeds een reisabonnement nodig van een aanbieder zoals Roami.

### eSIM-status Hongkong iPhone

- **iPhone-modellen:** Hongkong-iPhones ondersteunen meestal **eSIM + fysieke SIM** (één van elk) of dubbele fysieke SIM, afhankelijk van het exacte model. Controleer je modelsuffix.
- **Carriers:** sommige Hongkong-carriers (CMHK, 1010, SmarTone) bieden eSIM aan postpaid-klanten aan, maar prepaid eSIM is zeldzaam.
- **Reizigers:** een internationale travel eSIM is eenvoudiger en betrouwbaarder dan het proberen te bemachtigen van een lokale Hongkong-eSIM.

### eSIM-status Macau iPhone

- **Vergelijkbaar met Hongkong:** de meeste Macau-iPhones zijn geïmporteerd uit Hongkong en ondersteunen eSIM + fysieke SIM.
- **CTM** (Macau's grootste carrier) biedt eSIM aan postpaid-klanten aan, maar niet aan toeristen.

### Waarom Chinese modellen eSIM schrappen

Het is geen kostenbesparende zet van Apple of de Android-merken — het is regelgeving. Vasteland-China vereist dat daar verkochte telefoons worden gecertificeerd voor dubbele fysieke SIM, en een herschrijfbaar eSIM-profiel past niet in dat binnenlandse raamwerk. Het praktische resultaat:

- **Apple** levert vasteland-China iPhones met **twee fysieke nano-SIM-sleuven** en geen eUICC-chip.
- **Xiaomi, Oppo, Vivo, Honor en Huawei** schrappen eSIM uit hun nationale China-builds, zelfs wanneer de globale versie van dezelfde telefoon hem heeft.
- **Een Chinese telefoon die mee het buitenland in gaat, krijgt eSIM nog steeds niet terug** — het is een afwezigheid van hardware, geen softwareblokkade. Het omgekeerde geldt ook: een internationale telefoon die China binnenkomt, werkt met travel eSIM's, maar de grote drie Chinese carriers (China Mobile, China Unicom, China Telecom) verkopen geen eSIM aan toeristen.

**De oplossing:** heb je de telefoon in vasteland-China gekocht, reken dan op een fysieke travel SIM — of koop een telefoon met een globaal model. Er is geen unlock, jailbreak of app die de ontbrekende chip toevoegt.

### Je model identificeren via het A-nummer

Het partnummersuffix (CH/A, LL/A, enzovoort) is de snelle filter, maar het **A-nummer** is de precieze ID. Neem de iPhone 11 als het patroon dat elke generatie volgt:

| iPhone 11 model | Regio | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Verenigde Staten | ✅ Ja |
| **A2221** | Vasteland-China | ❌ Nee (dubbele fysieke SIM) |
| **A2223** | Hongkong / Macau | ✅ Ja (eSIM + fysiek) |

**Hoe te gebruiken:** vind je A-nummer (**Settings > General > About > Model Number**, tik daarna op het nummer om de met A-beginnende code te tonen) en match het met Apple's modellenlijst. Adverteerde een verkoper met een "simlockvrije globale eSIM iPhone" maar het A-nummer is een China-code, dan klopte de advertentie niet — loop weg of reken op een fysieke SIM.


## Carrier-lock en hoe je hem verwijdert

Een carrier-lock is de op één na meest voorkomende reden dat een volledig geschikte telefoon een eSIM weigert. Het is een softwarebeperking die je carrier op het apparaat plaatst, geen hardwarelimiet.

### Wat een carrier-lock doet

Wanneer een telefoon "SIM locked" is, accepteert hij alleen SIM's en eSIM-profielen van de carrier die hem verkocht heeft. Het toevoegen van een travel eSIM van een andere aanbieder activeert "eSIM not supported" of "SIM not supported". De ingebouwde chip is aanwezig en werkt — de carrier blokkeert alleen de toegang.

### Hoe controleer je je lockstatus

1. Op iPhone: **Settings > General > About > Carrier Lock**. Hij zou **"No SIM restrictions"** moeten zeggen.
2. Op Android (Samsung): **Settings > About phone > Status** en zoek naar het SIM lock-veld.
3. Op Android (Pixel): **Settings > About phone > SIM status**.

### Ontgrendelingsbeleid Amerikaanse carriers

| Carrier | Ontgrendelingsvereiste |
| :--- | :--- |
| **AT&T** | Apparaat volledig afbetaald en 60 dagen actief vóór ontgrendeling |
| **T-Mobile** | Apparaat afbetaald en 40 dagen actief; aanvragen via de T-Mobile-app |
| **Verizon** | De meeste telefoons ontgrendelen automatisch 60 dagen na aankoop |

### Zo ontgrendel je je apparaat

1. **Vraag de ontgrendeling aan bij je carrier** — het is meestal gratis zodra de telefoon is afbetaald, en de meeste Amerikaanse carriers laten je het via de app of een webformulier aanvragen.
2. **Wacht op bevestiging** — de carrier pusht de ontgrendeling; mogelijk moet je de telefoon herstarten.
3. **Verifieer** — controleer het Carrier Lock-veld opnieuw totdat het "No SIM restrictions" leest.
4. **Activeer dan** — eenmaal ontgrendeld, scan je je travel eSIM QR code opnieuw.

> **Notitie:** een carrier-lock is een beperking op telefoonniveau, niet op abonnementsniveau. Het ontgrendelen van je apparaat zegt je contract niet op — het geeft het apparaat alleen de vrijheid om SIM's en eSIM's van andere aanbieders te gebruiken.

### Meer Amerikaanse carriers en MVNO-ontgrendelingsbeleid

De grote drie zijn niet de enigen waar mensen tegenaan lopen. Prepaid- en MVNO-telefoons worden vaak langer gelockt, en dat kan de sluwe reden zijn dat een "topdeal" travel eSIM niet installeert.

| Carrier | Ontgrendelingsvereiste |
| :--- | :--- |
| **Cricket Wireless** | 6 maanden betaalde dienst (tenzij gekocht voor volledige winkelprijs) |
| **Metro by T-Mobile** | 180 dagen betaalde dienst |
| **Boost Mobile** | 12 maanden betaalde dienst |
| **Spectrum Mobile** | 60 dagen |
| **Xfinity Mobile** | 60 dagen actieve dienst |
| **US Cellular** | 120 dagen |
| **Visible (Verizon prepaid)** | 60 dagen betaalde dienst |

### Wat je nodig hebt om een ontgrendeling aan te vragen

Ontgrendelingen zijn gratis zodra je in aanmerking komt, maar het verzoek vereist een paar dingen klaar:

1. **Je IMEI** — toets `*#06#` en grijp het 15-cijferige nummer (niet de EID).
2. **Je accountnummer en account-PIN/wachtwoord** — vind deze in je carrier-app of op een recente rekening.
3. **De telefoon volledig afbetaald** — carriers ontgrendelen geen apparaat met een openstaand saldo op een afbetalingsregeling.
4. **Geschiktheid behaald** — elke carrier heeft een minimale venster van actieve dagen (zie de tabellen hierboven).

**Waar aan te vragen:** AT&T en T-Mobile hebben online ontgrendelingsportalen en formulieren in de app; Verizon ontgrendelt de meeste telefoons automatisch na 60 dagen zonder aanvraag. Voor MVNO's (Cricket, Metro, Boost), gebruik hun app of bel support direct.

**Over externe "instant unlock"-diensten:** het is een gok. Velen gebruiken gelekte carrier-tools waardoor de telefoon opnieuw wordt gelockt, en sommige zijn pure oplichting. Zegt je carrier dat je nog niet in aanmerking komt, wacht het dan uit — betaal geen vreemde $20 om het "voor" je te doen.


### De drie verschillende locktypes

Mensen zeggen "mijn telefoon is gelockt" en bedoelen drie compleet verschillende dingen. Elk heeft een andere oplossing nodig, dus het is de moeite waard ze te scheiden.

| Locktype | Wat het is | Waar je het ziet | Oplossing |
| :--- | :--- | :--- | :--- |
| **Telefoonlock (activation lock)** | Anti-diefstal: iCloud Activation Lock (iPhone) of Google FRP (Android), gekoppeld aan het account van de vorige eigenaar | "Activation Lock" / "This iPhone was linked to an Apple ID" bij setup, of een Google-accountprompt op Android | Alleen de oorspronkelijke eigenaar kan het verwijderen — koop nooit een telefoon die het nog toont |
| **Regiolock** | Een hardwareverschil met waar de telefoon is verkocht (China-modellen missen de eUICC-chip) | Geen EID op `*#06#`; modelnummer eindigt op CH/A | Kan niet worden verwijderd — gebruik een fysieke SIM of een andere telefoon |
| **Carrier lock** | Een softwarebeperking van je carrier die de telefoon beperkt tot hun netwerk | **Settings > General > About > Carrier Lock** toont "SIM locked" | Vraag een ontgrendeling aan bij de carrier (Sectie 3) |

**De snelle verduidelijking:**
- Een **Apple ID- of Google-accountprompt** zien = telefoon-/activation lock (een eigenaarsprobleem).
- **Helemaal geen EID** = regiolock (een hardwareprobleem).
- **EID aanwezig + "SIM locked"** = carrier lock (oplosbaar, gratis zodra je in aanmerking komt).

De meeste "eSIM werkt niet"-klachten die de 2-minutencontrole overleven, zijn het carrier-lock-type — en dat is bijna altijd oplosbaar.


## Mijn telefoon ondersteunt geen eSIM maar zou dat moeten

Sommige apparaten worden aangekondigd met eSIM, maar specifieke regionale of carriervarianten schrappen de functie stilletjes. Dit zijn de gebruikelijke boosdoeners:

- **Samsung Galaxy S20 FE** – VS-carrier-gelockte versies hebben de functie in software uitgeschakeld om kosten te besparen, zelfs al ondersteunt het globale model hem.
- **Google Pixel 4a (Japan-versies)** – Docomo en SoftBank schakelen eSIM uit op hun toestellen vanwege lokale carrier-afspraken.
- **Xiaomi Redmi Note-serie** – geen enkele heeft de eUICC-chip, ondanks online geruchten. Xiaomi reserveert eSIM voor zijn vlaggenschipmodellen.
- **iPhone 8 / 8 Plus / X** – pre-eUICC hardware; Apple voegde de chip pas toe vanaf de XS/XR-generatie.
- **Samsung Galaxy A-serie** – alleen geselecteerde modellen (A54, A53) hebben de chip; de meeste A-serie niet.

### Telefoons die er eSIM-compatibel uitzien maar het niet zijn

| Telefoonmodel | eSIM-ondersteuning | Waarom? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Nee | Pre-eUICC hardware |
| **iPhone XS/XR (China)** | ❌ Nee | Dubbele fysieke SIM hardware |
| **Samsung Galaxy S20 FE (VS-carrier)** | ❌ Nee | Door carrier uitgeschakeld |
| **Samsung Galaxy A13 / A23** | ❌ Nee | Instapmodel, geen eUICC |
| **Google Pixel 4a (Japan)** | ❌ Nee | Door carrier uitgeschakeld (Docomo/SoftBank) |
| **Google Pixel 3 (sommige modellen)** | ⚠️ Varieert | Controleer regio; sommigen hebben het, anderen niet |
| **Xiaomi Redmi Note-serie** | ❌ Nee | Geen eUICC hardware |
| **Xiaomi 12/13 (China)** | ❌ Nee | Nationale China-versies missen de hardware |
| **OnePlus Nord (China-versie)** | ❌ Nee | China-regio mist de hardware |
| **Huawei (alle nationaal China)** | ❌ Nee | Geen Google-diensten, geen eSIM-hardware |
| **Motorola G-serie (de meeste)** | ❌ Nee | Budgetmodellen missen eUICC |

**Wat te doen:** Voordat je een telefoon koopt, toets `*#06#` erop (als je hem in handen hebt) om de EID te bevestigen, of voer de IMEI door een online eSIM-compatibiliteitschecker. De **[volledige lijst met eSIM-compatibele telefoons (2026)](/compatibility/)** is je beste bron om elk model te verifiëren.


## Android eSIM-compatibiliteit per merk

Ben je op Android, dan is de grootste variabele niet het OS — maar of *jouw specifieke variant* met de chip is verscheept. Hier is het beeld per model.

### Samsung Galaxy eSIM-compatibiliteit

| Model | eSIM-ondersteuning | Opmerkingen |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Ja | Alle globale varianten |
| **Galaxy S20 FE** | ❌ Nee (VS-carrier) / ✅ Ja (globaal) | Controleer modelnummer |
| **Galaxy A54 / A53** | ✅ Ja | Alleen geselecteerde A-serie |
| **Galaxy A13 / A23 / A33** | ❌ Nee | Budgetmodellen |
| **Galaxy Z Fold / Flip** | ✅ Ja | Alle modellen |
| **Galaxy Note 20** | ✅ Ja | Alle modellen |

**Hoe te controleren op Samsung:** Toets `*#06#` en zoek naar een EID, of open **Settings > Connections > SIM Card Manager** en zoek naar "Add eSIM" / "Add mobile plan". Staat er geen van beide, dan mist jouw variant de functie. Voor meer, zie onze [Samsung eSIM-compatibiliteitsgids](/faq/samsung-s20-esim-compatible/) en [Samsung Support](https://www.samsung.com/us/support/).

### Google Pixel eSIM-compatibiliteit

| Model | eSIM-ondersteuning | Opmerkingen |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Ja | Eerste Pixel met de functie |
| **Pixel 3a / 3a XL** | ✅ Ja | – |
| **Pixel 4 / 4 XL** | ✅ Ja | – |
| **Pixel 4a** | ⚠️ Varieert | Japan-carrierversies = NEE |
| **Pixel 5 / 5a** | ✅ Ja | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Ja | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Ja | – |
| **Pixel 8 / 8 Pro** | ✅ Ja | – |

**Hoe te controleren op Pixel:** Toets `*#06#` voor de EID, of open **Settings > Network & Internet > SIMs** en zoek naar "Download a SIM instead?". Ontbreekt hij, dan is de variant gelockt of mist de chip. Voor meer, zie onze [Pixel eSIM-compatibiliteitsgids](/faq/google-pixel-6-esim-compatible/) en de [Google Support — eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887)-pagina.

### OnePlus eSIM-compatibiliteit

OnePlus voegde eSIM pas toe vanaf de **OnePlus 12**. De OnePlus 11, 10, 9 en Nord-serie missen de hardware.

| Model | eSIM-ondersteuning |
| :--- | :--- |
| **OnePlus 12** | ✅ Ja |
| **OnePlus 11** | ❌ Nee |
| **OnePlus 10** | ❌ Nee |
| **OnePlus 9** | ❌ Nee |
| **OnePlus Nord-serie** | ❌ Nee (behalve sommige EU-varianten) |

### Xiaomi, Huawei, Motorola en andere eSIM-merken

- **Xiaomi** – vlaggenschipmodellen (Xiaomi 12/13 globale versies) kunnen eSIM ondersteunen, maar nationale China-toestellen niet. De Redmi Note-lijn heeft helemaal geen eUICC.
- **Huawei** – ondersteuning is beperkt tot enkele modellen (P40, Mate 40 en nieuwer); veel telefoons na 2020 missen eSIM vanwege Amerikaanse sancties. Controleer **Settings > Mobile Network > eSIM** — ontbreekt de optie, dan wordt hij niet ondersteund.
- **Motorola** – de meeste G-serie budgetmodellen missen de chip; de Moto G Power en Edge-lijn variëren per regio.

De universele test voor elk van deze is hetzelfde: toets `*#06#` en zoek naar de EID.


## Android vs iPhone eSIM-geschiktheidscheck

Dezelfde 2-minutencontrole, twee verschillende menu's. Geef deze tabel aan een vriend op het andere platform.

| Controle | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Toets `*#06#` | Toets `*#06#` | Toets `*#06#` |
| **Add eSIM-menu** | **Settings > Cellular > Add eSIM** | **Settings > Connections > SIM Card Manager > Add eSIM** | **Settings > Network & internet > SIMs > Download a SIM instead?** |
| **Modelnummer** | **Settings > General > About > Model Number** | **Settings > About phone > Model number** | **Settings > About phone > Model** |
| **Lockstatus** | **Settings > General > About > Carrier Lock** | **Settings > About phone > Status** | **Settings > About phone > SIM status** |

**Het ene verschil dat ertoe doet:** op iPhone is eSIM-ondersteuning alles-of-niets per generatie en regio — makkelijk te voorspellen. Op Android is het per variant, dus twee "dezelfde" Galaxy- of Pixel-telefoons kunnen zich anders gedragen. Twijfel je op Android, vertrouw dan de `*#06#`-EID boven de specificatiepagina.


## Je telefoon ondersteunt eSIM maar de activering mislukt

Als je telefoon de hardwarecheck hierboven doorstond en je nog steeds een specifieke foutmelding ziet, is het probleem niet langer compatibiliteit — het is een activerings- of netwerkprobleem. Die hebben hun eigen speciale naslag:

- **"Activation failed", "No Service", "QR invalid", "Cellular Plan Cannot Be Added", herstelfout 4013/4014 en elke andere schermmelding** → zie de [eSIM Deep Troubleshooting Guide 2026](/faq/esim-deep-troubleshooting-guide-2026/), die elke melding aan een oplossing koppelt.
- **APN-instellingen en de volledige provider-APN-tabel** → de canonieke APN-naslag staat ook in de [eSIM Deep Troubleshooting Guide 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Stapsgewijze activering (QR / handmatig / carrier-app)** → zie [How to Activate an eSIM](/faq/how-to-activate-an-esim/).
- **Een profiel verplaatsen naar een nieuwe telefoon** → zie [How to Transfer eSIM Between iPhone and Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **iPad- en Apple Watch-setup** → zie de [iPad- en Apple Watch eSIM-gids](/faq/ipad-apple-watch-esim-support-guide/).


## Veelgestelde vragen

**Waarom zegt mijn iPhone XR "eSIM not supported" terwijl het zou moeten werken?**
Eindigt je modelnummer op CH/A, dan is het een vasteland-China toestel zonder eSIM-chip. Zo niet, controleer dan de carrier-lock-status — een gelockte XR weigert profielen van andere aanbieders.

**Kan ik eSIM forceren op een iPhone 7?**
Nee. De iPhone 7 (en 6s, 8 en X) dateren van vóór de eUICC-chip. Geen enkele softwarehack kan hardware toevoegen die er niet is.

**Wat is het verschil tussen EID en IMEI?**
IMEI (15 cijfers) identificeert je telefoonmodel — elke telefoon heeft er een. EID (32 cijfers) identificeert de embedded-SIM-chip — alleen eSIM-geschikte telefoons hebben er een. Toont `*#06#` geen EID, dan kan je telefoon geen eSIM gebruiken.

**Wat betekent "EID not found" wanneer ik `*#06#` intoets?**
Het betekent dat je telefoon de eUICC-hardwarechip mist die nodig is voor digitale SIM-profielen. Het is een hardwarebeperking, geen software-update kan dit fixen.

**Mijn telefoon ondersteunt geen eSIM — kan ik nog steeds een travel eSIM gebruiken?**
Nee. Je hebt de ingebouwde chip nodig, dus een fysieke SIM is je enige optie. Veel aanbieders (inclusief Roami) verkopen ook fysieke SIM-kaarten.

**Hoe weet ik of mijn Samsung Galaxy eSIM heeft?**
Toets `*#06#` — verschijnt een EID, dan wordt hij ondersteund. Je kunt ook controleren of Settings > Connections > SIM Card Manager een "Add eSIM"-optie heeft. Sommige VS-carrier- en A-serie-varianten verbergen hem.

**Ondersteunt de OnePlus 11 eSIM?**
Nee. OnePlus voegde eSIM toe vanaf de OnePlus 12. De 11, 10, 9 en Nord-serie missen de hardware.

**Hoe controleer ik of mijn iPhone een carrier-lock heeft?**
Settings > General > About > Carrier Lock. "No SIM restrictions" betekent simlockvrij. Alles anders betekent gelockt op die carrier.

**Welke iPad-modellen ondersteunen eSIM?**
iPad Pro (3e gen en nieuwer), iPad Air (3e gen en nieuwer), iPad (10e gen en nieuwer) en iPad mini (6e gen en nieuwer) — alleen cellulair modellen. Alleen-wifi iPads hebben geen eSIM-hardware.

**Waar vind ik een lijst met eSIM-compatibele telefoons?**
De [volledige lijst met eSIM-compatibele telefoons (2026)](/compatibility/) dekt iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi en meer.

**Wat is het verschil tussen een telefoonlock en een carrier-lock?**
Een telefoon- (activation) lock is anti-diefstal — iCloud op iPhone, Google FRP op Android — en alleen de oorspronkelijke eigenaar kan hem verwijderen. Een carrier-lock is een netwerkbeperking die je carrier gratis opheft zodra de telefoon is afbetaald en in aanmerking komt.

**Waarom hebben Chinese telefoons geen eSIM?**
Vasteland-China vereist dat nationale telefoons worden gecertificeerd voor dubbele fysieke SIM, dus Apple en Android-merken verschepen China-toestellen met twee nano-SIM-sleuven en geen eUICC-chip. Het is hardware — het kan niet later worden ingeschakeld.

**Kan ik eSIM toevoegen aan een telefoon zonder EID?**
Nee. De eUICC-chip is op het moederbord gesoldeerd. Er is geen adapter, app, jailbreak of software-update die hardware toevoegt die nooit is geïnstalleerd.

**Lost een factory reset "eSIM not supported" op?**
Nee. Een reset verandert geen hardware en verwijdert geen carrier-lock. Hij kan wel een beschadigd half-geïnstalleerd profiel wissen, dus het is een poging waard voor software-glitches — na een backup.

**Waarvoor wordt de EID gebruikt als een aanbieder erom vraagt?**
Met de EID kan je aanbieder een specifiek eSIM-profiel aan de chip van je telefoon binden voordat je scant. Zo weten ze dat het abonnement bestemd is voor jouw exacte apparaat — zie het als het "adres" van de eSIM.

**Hoe weet ik of mijn telefoon simlockvrij is zonder een SIM in te voegen?**
iPhone: Settings > General > About > Carrier Lock — "No SIM restrictions" betekent simlockvrij. Android: Settings > About phone > Status (of SIM status) en zoek naar de formulering "SIM locked" of "SIM not locked".

👉 **Bevestigd dat je telefoon geschikt is?** Pak een [eSIM voor de VS](/united-states-esim/) of [eSIM voor Japan](/japan-esim/) om verbonden te worden.


## Test je compatibiliteit met een gratis eSIM

De snelste manier om te bevestigen dat je telefoon eSIM daadwerkelijk kan gebruiken, is het installeren van een **gratis proefversie eSIM**. Het kost niets, duurt 2 minuten, en installeert en verbindt hij, dan is je hardware in orde.

👉 [**Pak nu je gratis Roami eSIM**](/free-esim/)

---

*Wordt jouw specifieke apparaat of fout hier niet behandeld, neem dan contact met ons op en wij helpen je bevestigen of je telefoon eSIM-geschikt is.*
## Bronnen

- [GSMA — eSIM (SGP.22) specificatie](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
