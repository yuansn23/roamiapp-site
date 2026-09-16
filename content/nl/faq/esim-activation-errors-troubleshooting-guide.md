---
title: "eSIM werkt niet? Los compatibiliteitsfouten op"
h1_title: "Hoe je eSIM werkt niet oplost: Compatibiliteitsfouten in 2026"
description: "Vastgelopen met eSIM-fouten? Leer activeringsfouten, overdrachtsproblemen en boot-loops op iPhone & Android op te lossen. Diagnosticeer je telefoon in 2 minuten."
image: "/img/esim/esim-troubleshooting-guide.jpg"
keywords: ["esim werkt niet", "esim niet ondersteund", "esim niet compatibel iphone", "kan esim niet activeren", "esim netwerk niet beschikbaar", "esim wordt niet overgedragen naar nieuwe iphone", "esim per ongeluk verwijderd", "esim profiel verlopen", "esim qr-code ongeldig", "hoe esim op iphone repareren", "esim overdrachtsfout", "esim geen service"]
date: 2026-09-16T10:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "Probleemoplossing", "Activeringsfouten", "iPhone", "Android"]
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
    - question: "Nieuwste eSIM-compatibiliteitslijst"
      url: "/compatibility/"
---


> **Redactienoot:** Roami verwerkt elke maand duizenden "mijn eSIM werkt niet"-tickets, en een groot deel blijkt een telefoonprobleem te zijn, niet een abonnementsprobleem. Deze gids beantwoordt de vraag die je vóór alles zou moeten stellen: *is mijn telefoon überhaupt in staat om een eSIM te gebruiken?* We leiden je door de hardwarecheck van 2 minuten, uitzonderingen voor China/Hongkong-modellen en providerlocks — zodat je geen uur verspilt aan activeringsstappen die nooit op jouw apparaat kunnen werken.

> **Zoek je een foutcode-oplossing?** Als je telefoon de onderstaande hardwarecheck doorstaat maar je staart naar een specifiek bericht ("Activering mislukt", "Geen Service", "QR ongeldig", herstelfout 4013/4014), is dat een ander probleem. Ga naar onze [eSIM Diepgaande Probleemoplossingsgids](/faq/esim-deep-troubleshooting-guide-2026/) voor de fout-per-fout referentie.

## Begin hier: de 2-minuten "Is mijn telefoon überhaupt in staat?"-check

Voordat je Instellingen opent, een QR-code scant of contact opneemt met support, bevestig dat je telefoon daadwerkelijk de vereiste embedded-SIM hardware heeft. Deze ene check sluit ongeveer de helft van alle "eSIM werkt niet"-gevallen onmiddellijk uit.

### De universele EID-check (werkt op elke telefoon)

Open de kiezer van je telefoon en typ:

> **`*#06#`**

- Als een scherm verschijnt met een **32-cijferige EID** (eUICC Identifier), heeft je telefoon de embedded chip die nodig is voor digitale SIM-activering. ✅
- Als het scherm alleen **IMEI**-nummers toont en geen EID, is de hardware er niet. ❌

**Wat te doen als er geen EID verschijnt:** Stop hier. Geen software-update, hack of "forceer"-methode kan de ontbrekende chip toevoegen — het is een fysieke hardware-afwezigheid. Gebruik in plaats daarvan een fysieke SIM, of bekijk Oplossing #4 voor telefoons die *lijken* op eSIM-ondersteuning maar het niet hebben.

### EID vs IMEI vs ICCID – Wat elk nummer betekent

| Identificatie | Wat het is | Wat het je vertelt |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 cijfers) | Identificeert je telefoonmodel — elke telefoon heeft er een |
| **EID** | eUICC Identifier (32 cijfers) | Bevestigt dat de embedded-SIM chip aanwezig is — alleen eSIM-capabele telefoons hebben er een |
| **ICCID** | Integrated Circuit Card Identifier (19–20 cijfers) | Identificeert een specifiek eSIM-profiel nadat het is geïnstalleerd |

> **Belangrijk inzicht:** EID = hardware aanwezig. Als je een EID ziet, is je telefoon fysiek in staat tot eSIM. Als je die niet ziet, verandert niets wat je installeert dat.

### Waar je elk nummer vindt (snelle routes)

Alle drie nummers liggen in het zicht zodra je het menu kent. Hier is de kortste route naar elk:

| Identificatie | Snelste manier | Back-uplocatie |
| :--- | :--- | :--- |
| **IMEI (15 cijfers)** | Bel `*#06#` — het is het eerste nummer dat wordt getoond | iPhone: **Instellingen > Algemeen > Over**. Android: **Instellingen > Over telefoon** |
| **EID (32 cijfers)** | Bel `*#06#` en scroll — het is het lange dat begint met **8904** | iPhone: **Instellingen > Algemeen > Over > EID**. Samsung: **Instellingen > Over telefoon > Status** |
| **ICCID (19–20 cijfers)** | Verschijnt alleen nadat een profiel is geïnstalleerd | iPhone: **Instellingen > Algemeen > Over**. Android: **Instellingen > Over telefoon > SIM-kaartstatus** |

> **Handig weetje:** elke EID begint met **"8904"** — dat voorvoegsel markeert het als een eUICC-identificatie. Als het lange nummer op het scherm met iets anders begint, lees je de verkeerde waarde.

### De "eSIM toevoegen"-knoptest (iPhone)

Als `*#06#` een EID toont maar je ziet nog steeds "eSIM niet ondersteund", open **Instellingen > Mobiel netwerk** en zoek naar **"eSIM toevoegen"** of **"Mobiel abonnement toevoegen"**. Als de optie er is maar faalt wanneer je scant, heb je hoogstwaarschijnlijk te maken met een **providerlock** of een **regiobeperking** — beide hieronder behandeld.

### De Instellingen-zoekmethode (iPhone & Android)

Geen kiezer bij de hand (sommige tablets en foldables begraven die), of gaf `*#06#` je een verwarrend scherm? De zoekbalk van je telefoon is de op één na snelste check.

- **iPhone:** Open **Instellingen**, veeg vanaf de bovenkant van de lijst naar beneden om het zoekvak te tonen, en typ **"eSIM"**. Een resultaat van **"eSIM toevoegen"** of **"Mobiel abonnement toevoegen"** betekent dat de functie actief is.
- **Samsung:** Open **Instellingen**, tik op het **vergrootglas-pictogram** bovenaan en typ **"eSIM"**. Als **"SIM-kaartbeheer"** (of "Mobiel abonnement toevoegen") opduikt, heeft jouw variant de chip.
- **Pixel:** Open **Instellingen > Netwerk & internet > SIM's**. Als je **"Een SIM downloaden in plaats daarvan?"** ziet, ben je goed. Een scherm dat alleen je fysieke SIM vermeldt — zonder downloadoptie — betekent geen eUICC-chip.

> **Geen zoekresultaat = geen hardware.** Als een telefoon die na ongeveer 2018 is verkocht niets retourneert voor "eSIM" in Instellingen-zoeken, heb je bijna zeker een regio- of budgetvariant die zonder de chip is geleverd.

### De modelnummer-opzoeking (snelste bevestiging)

Koop je tweedehands, of controleer je een telefoon die je niet kunt aanzetten? Het modelnummer beslecht het in seconden.

- **iPhone:** **Instellingen > Algemeen > Over > Modelnummer**, tik dan op het nummer om het naar de **A-voorvoegsel identificatie** te schakelen (bijv. **A2111**). De letters vóór **/A** in het onderdeelnummer coderen de verkoopregio — de volledige suffixkaart staat in Sectie 2.
- **Samsung:** **Instellingen > Over telefoon > Modelnummer** (bijv. **SM-S921U1**). Het laatste teken is de verklikker: **U** = VS-provider, **U1** = VS unlocked, **B** = Europa/globaal, **0** = China/Hongkong (Snapdragon).
- **Pixel:** **Instellingen > Over telefoon > Model**. Pixel-modelstrings verschillen per regio en provider — Japan en sommige VS-provider varianten beperken eSIM, dus kruiscontroleer de specifieke code of bel `*#06#`.

> **Vuistregel:** als het modelnummer eindigt op een China/regio-suffix (of een VS-provider suffix op een Samsung), verifieer met `*#06#` voordat je aanneemt dat eSIM werkt. Modelnummer plus EID samen geven je een 100% antwoord.

### Waarom een telefoon EID kan tonen maar toch eSIM weigert

| Scenario | EID aanwezig? | eSIM werkt? | Waarom? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR en nieuwer (globaal) | ✅ Ja | ✅ Ja | Volledige ondersteuning voor digitale SIM-profielen |
| iPhone XS/XR (China-model) | ❌ Nee | ❌ Nee | Hardware verwijderd voor dubbele fysieke SIM |
| Samsung S20 FE (VS-provider) | ✅ Ja | ❌ Nee | Provider heeft de functie in software uitgeschakeld |
| Google Pixel 4a (Japan) | ✅ Ja | ❌ Nee | Provider heeft de functionaliteit buitengesloten |
| Provider-locked iPhone (AT&T/T-Mobile) | ✅ Ja | ❌ Nee (voor andere providers) | Netwerk lock blokkeert profielen van andere providers |
| Unlocked iPhone (elke regio) | ✅ Ja | ✅ Ja | Volledige ondersteuning |


## 1. "eSIM niet ondersteund" / "Niet compatibel" op iPhone

Als je **"eSIM niet ondersteund"**, **"deze eSIM is niet compatibel met deze iPhone"**, of simpelweg **"eSIM niet compatibel iPhone"** ziet, is de oorzaak bijna altijd een van vijf dingen — en elk gaat over je *apparaat*, niet over het abonnement.

### A. Je iPhone-model is ouder dan eSIM-hardware

Alleen iPhones vanaf de **XR, XS, XS Max (2018) en nieuwer** hebben de embedded chip. De iPhone 8, 8 Plus en iPhone X niet, dus die retourneren **"eSIM niet ondersteund"** wat je ook probeert. De eUICC-chip is simpelweg niet aanwezig op die borden — dit is een hardwarebeperking, geen instellingsprobleem.

**Snelle check:** Bel `*#06#`. Een 32-cijferige EID betekent dat je goed zit; alleen IMEI betekent dat je dat niet bent.

**Wat te doen:** Gebruik een fysieke SIM, of upgrade naar een iPhone XR of nieuwer. De officiële lijst staat op [Apple Support — eSIM op iPhone](https://support.apple.com/en-us/118670).

### B. Je iPhone is een vasteland-China model

iPhones die in het vasteland van China worden verkocht, worden geleverd met **twee fysieke SIM-sleuven en geen eSIM-hardware**. Chinese regelgeving duwt binnenlandse smartphones naar dubbele fysieke SIM, dus Apple verwijderde de embedded chip op deze eenheden. Zelfs als de optie "Mobiel abonnement toevoegen" verschijnt, wordt deze niet voltooid — dit is de meest voorkomende reden voor "eSIM niet compatibel met deze iPhone" onder kopers die hun apparaat in China of via bepaalde verkopers hebben gekocht.

**Hoe te identificeren:** **Instellingen > Algemeen > Over > Modelnummer**. Als het eindigt op **"CH/A"**, is het een vasteland-China model. (Volledige suffix-tabel in Sectie 2 hieronder.)

**Wat te doen:** Er is geen manier om eSIM in te schakelen op een CH/A-apparaat. Gebruik een fysieke reis-SIM, of verkoop de telefoon en koop een wereldwijde versie.

### C. Je iPhone is provider-locked

Sommige providers — vooral Amerikaanse — vergrendelen iPhones aan hun eigen netwerk. Proberen een profiel van een andere aanbieder te activeren (zoals een reis-eSIM) retourneert dan "eSIM niet ondersteund" of een "provider ondersteunt niet"-bericht. Merk op dat sommige providers alleen de fysieke SIM-sleuf vergrendelen terwijl de eSIM-sleuf open blijft, maar velen vergrendelen beide.

**Hoe te controleren:** **Instellingen > Algemeen > Over > Providerlock**. Het moet **"Geen SIM-beperkingen"** zeggen. Als het "SIM vergrendeld" zegt, heb je een unlock nodig. Zie Sectie 3 voor de volledige providerlock-uitleg.

### D. Verouderde iOS-versie

Digitale SIM-ondersteuning is sterk verbeterd in iOS 16 en later. Op iOS 12 of 13 zullen sommige moderne providerprofielen simpelweg niet installeren.

**Hoe te controleren:** **Instellingen > Algemeen > Software-update**.

**Wat te doen:** Werk bij naar de nieuwste iOS, verwijder elk half-geïnstalleerd profiel en scan de QR-code opnieuw.

### E. "Deze iPhone ondersteunt geen eSIM" – op een iPhone 14?

Een iPhone 14 (VS-versie) zou altijd eSIM moeten ondersteunen — het Amerikaanse model heeft helemaal geen fysieke SIM-lade. Als deze toch deze fout retourneert, kijk je naar een zeldzame **eUICC-hardwarestoring**. Neem contact op met Apple Support voor een hardwarediagnose in plaats van instellingen na te jagen.

Voor de volledige model-per-model iPhone-lijst, zie onze [iPhone eSIM-compatibiliteitsgids](/faq/iphone-11-esim-compatible/). Voor Samsung, zie de [Samsung Galaxy eSIM-gids](/faq/samsung-s20-esim-compatible/), en voor Pixel de [Google Pixel eSIM-gids](/faq/google-pixel-6-esim-compatible/).


## "eSIM niet ondersteund" – Hardware vs Software vs Provider

Elk "eSIM niet ondersteund"-geval — op elke telefoon, elke provider — valt in een van drie emmers. De emmer benoemen vertelt je onmiddellijk of het probleem oplosbaar is.

| Emmer | Hoe het eruitziet | Oplosbaar? | Jouw zet |
| :--- | :--- | :--- | :--- |
| **Hardware** | Geen EID op `*#06#`; iPhone van vóór 2018; China-model (CH/A); budget-Android zonder eUICC | ❌ Nee | Fysieke SIM, of upgrade de telefoon |
| **Software** | EID aanwezig, maar de functie is verborgen of het OS is oud (provider-uitgeschakelde Samsung S20 FE, verouderde iOS) | ✅ Meestal | Werk het OS bij, of verwijder de providerbeperking |
| **Provider** | EID aanwezig, menu zichtbaar, maar activering van een abonnement van een andere aanbieder mislukt | ✅ Ja | Ontgrendel het apparaat (Sectie 3) en scan opnieuw |

**De 30-seconden routingtest:** bel `*#06#`.
- **Geen EID** → hardware. Stop hier — niets wat je installeert verandert dat.
- **EID aanwezig, maar de "eSIM toevoegen"-flow mislukt** → software of provider. Beide zijn oplosbaar, dus lees verder.

Dat ene resultaat verwijst je naar de juiste oplossing voor ongeveer 9 van de 10 "niet ondersteund"-meldingen die we bij Roami zien.


## 2. De China / Hongkong / Macau modelgids

Waar je telefoon werd verkocht bepaalt welke hardware deze heeft. Dit is de snelste manier om een regionale geen-eSIM-situatie in of uit te sluiten.

### China model snelreferentie (per modelnummer-suffix)

| Modelnummer eindigt op | Regio | eSIM-ondersteuning |
| :--- | :--- | :--- |
| **CH/A** | Vasteland van China | ❌ Nee (dubbele fysieke SIM) |
| **HK/A** | Hongkong | ⚠️ Varieert (sommige modellen ondersteunen fysieke + digitale SIM) |
| **LL/A** | VS | ✅ Ja |
| **ZA/A** | Canada | ✅ Ja |
| **J/A** | Japan | ✅ Ja (behalve sommige provider-modellen) |
| **B/A** | VK/Europa | ✅ Ja |
| **X/A** | Australië/Nieuw-Zeeland | ✅ Ja |

### Vasteland van China

- **Alle iPhones die in het vasteland van China worden verkocht** (behalve de iPhone 16-serie) hebben dubbele fysieke SIM en geen eSIM.
- **Chinese Android-telefoons** — Xiaomi, Oppo, Vivo, Huawei — die binnenlands worden verkocht, missen ook meestal de eSIM-chip.
- **Als je een internationale telefoon mee naar China neemt:** deze werkt met internationale reis-eSIM's, maar lokale Chinese providers bieden geen eSIM aan toeristen, dus je hebt nog steeds een reisabonnement nodig van een aanbieder zoals Roami.

### Hongkong

- **iPhone-modellen:** Hongkong iPhones ondersteunen meestal **eSIM + fysieke SIM** (één van elk) of dubbele fysieke SIM, afhankelijk van het exacte model. Controleer je model-suffix.
- **Providers:** sommige Hongkong-providers (CMHK, 1010, SmarTone) bieden eSIM aan postpaid-klanten, maar prepaid eSIM is zeldzaam.
- **Reizigers:** een internationale reis-eSIM is eenvoudiger en betrouwbaarder dan proberen een lokale Hongkong eSIM te verkrijgen.

### Macau

- **Vergelijkbaar met Hongkong:** de meeste Macau iPhones worden geïmporteerd uit Hongkong en ondersteunen eSIM + fysieke SIM.
- **CTM** (Macau's belangrijkste provider) biedt eSIM aan postpaid-klanten maar niet aan toeristen.

### Waarom Chinese modellen eSIM laten vallen (de "waarom" achter de CH/A-regel)

Het is geen kostenbesparende zet van Apple of de Android-merken — het is regelgeving. Het vasteland van China vereist dat telefoons die daar worden verkocht gecertificeerd zijn voor dubbele fysieke SIM, en een herschrijfbaar eSIM-profiel past niet in dat binnenlandse kader. Het praktische resultaat:

- **Apple** levert vasteland-China iPhones met **twee fysieke nano-SIM-sleuven** en geen eUICC-chip.
- **Xiaomi, Oppo, Vivo, Honor en Huawei** strippen eSIM uit hun binnenlandse China-builds, zelfs wanneer de wereldwijde versie van dezelfde telefoon het heeft.
- **Een China-telefoon die naar het buitenland wordt gebracht kan eSIM nog steeds niet terugkrijgen** — het is een hardware-afwezigheid, geen softwareblokkade. Het omgekeerde is ook waar: een internationale telefoon die China binnenkomt werkt met reis-eSIM's, maar de drie grote Chinese providers (China Mobile, China Unicom, China Telecom) verkopen geen eSIM aan toeristen.

**De oplossing:** als je de telefoon in het vasteland van China hebt gekocht, reken op een fysieke reis-SIM — of koop een wereldwijd model. Er is geen unlock, jailbreak of app die de ontbrekende chip toevoegt.

### Je model identificeren via A-nummer (voorbeelden)

De onderdeelnummer-suffix (CH/A, LL/A, enzovoort) is het snelle filter, maar het **A-nummer** is de precieze ID. Neem de iPhone 11 als het patroon dat elke generatie volgt:

| iPhone 11-model | Regio | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Verenigde Staten | ✅ Ja |
| **A2221** | Vasteland van China | ❌ Nee (dubbele fysieke SIM) |
| **A2223** | Hongkong / Macau | ✅ Ja (eSIM + fysieke) |

**Hoe het te gebruiken:** vind je A-nummer (**Instellingen > Algemeen > Over > Modelnummer**, tik dan op het nummer om de A-voorvoegsel code te tonen), en vergelijk het met Apple's modellijst. Als een verkoper adverteerde met een "unlocked global eSIM iPhone" maar het A-nummer is een China-code, dan was de advertentie fout — loop weg of reken op een fysieke SIM.


## 3. Providerlock – Wat het is en hoe je het verwijdert

Een providerlock is de op één na meest voorkomende reden waarom een perfect capabele telefoon een eSIM weigert. Het is een softwarebeperking die je provider op het apparaat plaatst, geen hardwarelimiet.

### Wat een providerlock doet

Wanneer een telefoon "SIM vergrendeld" is, accepteert deze alleen SIM's en eSIM-profielen van de provider die hem heeft verkocht. Proberen een reis-eSIM van een andere aanbieder toe te voegen, triggert "eSIM niet ondersteund" of "SIM niet ondersteund". De embedded chip is aanwezig en werkt — de provider blokkeert alleen de toegang ertoe.

### Hoe je je lockstatus controleert

1. Op iPhone: **Instellingen > Algemeen > Over > Providerlock**. Het moet **"Geen SIM-beperkingen"** zeggen.
2. Op Android (Samsung): **Instellingen > Over telefoon > Status** en zoek naar het SIM-lockveld.
3. Op Android (Pixel): **Instellingen > Over telefoon > SIM-status**.

### Amerikaanse provider unlock-beleid

| Provider | Unlock-vereiste |
| :--- | :--- |
| **AT&T** | Apparaat volledig afbetaald en 60 dagen actief voor ontgrendeling |
| **T-Mobile** | Apparaat afbetaald en 40 dagen actief; aanvragen via de T-Mobile-app |
| **Verizon** | De meeste telefoons ontgrendelen automatisch 60 dagen na aankoop |

### Hoe je je apparaat ontgrendelt

1. **Vraag de unlock aan bij je provider** — het is meestal gratis zodra de telefoon is afbetaald, en de meeste Amerikaanse providers laten je het aanvragen via de app of een webformulier.
2. **Wacht op bevestiging** — de provider pusht de unlock; je moet de telefoon mogelijk opnieuw opstarten.
3. **Verifieer** — controleer het Providerlock-veld opnieuw tot het "Geen SIM-beperkingen" zegt.
4. **Activeer dan** — zodra ontgrendeld, scan je reis-eSIM QR-code opnieuw.

> **Opmerking:** een providerlock is een beperking op telefoonniveau, niet op abonnementsniveau. Het ontgrendelen van je apparaat annuleert je contract niet — het maakt het apparaat alleen vrij om SIM's en eSIM's van andere providers te gebruiken.

### Meer Amerikaanse providers & prepaid (MVNO) unlock-beleid

De grote drie zijn niet de enige die mensen tegenkomen. Prepaid- en MVNO-telefoons zijn vaak langer vergrendeld, en dat kan de sluipende reden zijn waarom een "geweldige deal" reis-eSIM niet installeert.

| Provider | Unlock-vereiste |
| :--- | :--- |
| **Cricket Wireless** | 6 maanden betaalde service (tenzij gekocht tegen volledige retailprijs) |
| **Metro by T-Mobile** | 180 dagen betaalde service |
| **Boost Mobile** | 12 maanden betaalde service |
| **Spectrum Mobile** | 60 dagen |
| **Xfinity Mobile** | 60 dagen actieve service |
| **US Cellular** | 120 dagen |
| **Visible (Verizon prepaid)** | 60 dagen betaalde service |

### Wat je nodig hebt om een unlock aan te vragen

Unlocks zijn gratis zodra je in aanmerking komt, maar de aanvraag heeft een paar dingen klaar nodig:

1. **Je IMEI** — bel `*#06#` en pak het 15-cijferige nummer (niet de EID).
2. **Je accountnummer en account-PIN/wachtwoord** — vind deze in je provider-app of op een recente factuur.
3. **De telefoon volledig afbetaald** — providers ontgrendelen geen apparaat met een openstaand termijnsaldo.
4. **In aanmerking komend** — elke provider heeft een minimum aantal actieve dagen (zie de tabellen hierboven).

**Waar aan te vragen:** AT&T en T-Mobile hebben online unlock-portalen en in-app formulieren; Verizon ontgrendelt de meeste telefoons automatisch na 60 dagen zonder aanvraag. Voor MVNO's (Cricket, Metro, Boost), gebruik hun app of bel direct support.

**Over diensten van derden voor "directe unlock":** het is een gok. Velen gebruiken gelekte provider-tools waardoor de telefoon opnieuw wordt vergrendeld, en sommige zijn ronduit oplichting. Als je provider zegt dat je nog niet in aanmerking komt, wacht het af — betaal geen vreemde $20 om het "voor" je te doen.


## De drie verschillende "locks" (en waarom ze belangrijk zijn)

Mensen zeggen "mijn telefoon is vergrendeld" en bedoelen drie compleet verschillende dingen. Elk heeft een andere oplossing nodig, dus het is de moeite waard ze te scheiden.

| Lock-type | Wat het is | Waar je het ziet | Oplossing |
| :--- | :--- | :--- | :--- |
| **Telefoonlock (activeringslock)** | Anti-diefstal: iCloud Activation Lock (iPhone) of Google FRP (Android), gekoppeld aan het account van de vorige eigenaar | "Activation Lock" / "Deze iPhone was gekoppeld aan een Apple ID" bij installatie, of een Google-accountprompt op Android | Alleen de oorspronkelijke eigenaar kan het verwijderen — koop nooit een telefoon die het nog toont |
| **Regiolock** | Een hardwareverschil van waar de telefoon werd verkocht (China-modellen missen de eUICC-chip) | Geen EID op `*#06#`; modelnummer eindigt op CH/A | Kan niet worden verwijderd — gebruik een fysieke SIM of een andere telefoon |
| **Providerlock** | Een softwarebeperking van je provider die de telefoon beperkt tot hun netwerk | **Instellingen > Algemeen > Over > Providerlock** toont "SIM vergrendeld" | Vraag een unlock aan bij de provider (Sectie 3) |

**De snelle disambiguatie:**
- Een **Apple ID- of Google-accountprompt** zien = telefoon/activeringslock (een eigenaarsprobleem).
- **Helemaal geen EID** = regiolock (een hardwareprobleem).
- **EID aanwezig + "SIM vergrendeld"** = providerlock (oplosbaar, gratis zodra in aanmerking komend).

De meeste "eSIM werkt niet"-klachten die de 2-minuten check overleven, zijn van het providerlock-type — en dat is bijna altijd oplosbaar.


## 4. "Mijn telefoon ondersteunt geen eSIM" – Maar dat zou wel moeten

Sommige apparaten worden geadverteerd met eSIM, maar specifieke regionale of provider-varianten laten de functie stil vallen. Dit zijn de gebruikelijke boosdoeners:

- **Samsung Galaxy S20 FE** – Amerikaanse provider-locked versies hebben de functie in software uitgeschakeld om kosten te besparen, zelfs hoewel het wereldwijde model het ondersteunt.
- **Google Pixel 4a (Japanse versies)** – Docomo en SoftBank schakelen eSIM uit op hun eenheden vanwege lokale providerovereenkomsten.
- **Xiaomi Redmi Note-serie** – geen enkele heeft de eUICC-chip, ondanks online geruchten. Xiaomi reserveert eSIM voor zijn flagships.
- **iPhone 8 / 8 Plus / X** – pre-eUICC hardware; Apple voegde de chip pas toe vanaf de XS/XR-generatie.
- **Samsung Galaxy A-serie** – alleen geselecteerde modellen (A54, A53) hebben de chip; de meeste A-series niet.

### "Ziet eruit alsof het eSIM zou moeten ondersteunen maar doet het eigenlijk niet" – volledige lijst

| Telefoonmodel | eSIM-ondersteuning | Waarom? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Nee | Pre-eUICC hardware |
| **iPhone XS/XR (China)** | ❌ Nee | Dubbele fysieke SIM-hardware |
| **Samsung Galaxy S20 FE (VS-provider)** | ❌ Nee | Provider-uitgeschakeld |
| **Samsung Galaxy A13 / A23** | ❌ Nee | Entry-level model, geen eUICC |
| **Google Pixel 4a (Japan)** | ❌ Nee | Provider-uitgeschakeld (Docomo/SoftBank) |
| **Google Pixel 3 (sommige modellen)** | ⚠️ Varieert | Controleer regio; sommige hebben het, sommige niet |
| **Xiaomi Redmi Note-serie** | ❌ Nee | Geen eUICC-hardware |
| **Xiaomi 12/13 (China)** | ❌ Nee | Chinese binnenlandse versies missen de hardware |
| **OnePlus Nord (China-versie)** | ❌ Nee | China-regio mist de hardware |
| **Huawei (alle Chinese binnenlandse)** | ❌ Nee | Geen Google-services, geen eSIM-hardware |
| **Motorola G-serie (de meeste)** | ❌ Nee | Budgetmodellen missen eUICC |

**Wat te doen:** Voordat je een telefoon koopt, bel `*#06#` erop (als je hem in de hand hebt) om de EID te bevestigen, of voer de IMEI door een online eSIM-compatibiliteitschecker. De **[volledige lijst van eSIM-compatibele telefoons (2026)](/compatibility/)** is je beste bron voor het verifiëren van elk model.


## 5. Android-hardwarecompatibiliteit per merk

Als je op Android zit, is de grootste variabele niet het OS — het is of *jouw specifieke variant* met de chip is geleverd. Hier is het beeld model per model.

### Samsung Galaxy

| Model | eSIM-ondersteuning | Opmerkingen |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Ja | Alle wereldwijde varianten |
| **Galaxy S20 FE** | ❌ Nee (VS-provider) / ✅ Ja (globaal) | Controleer modelnummer |
| **Galaxy A54 / A53** | ✅ Ja | Alleen geselecteerde A-series |
| **Galaxy A13 / A23 / A33** | ❌ Nee | Budgetmodellen |
| **Galaxy Z Fold / Flip** | ✅ Ja | Alle modellen |
| **Galaxy Note 20** | ✅ Ja | Alle modellen |

**Hoe te controleren op Samsung:** Bel `*#06#` en zoek naar een EID, of open **Instellingen > Verbindingen > SIM-kaartbeheer** en zoek naar "eSIM toevoegen" / "Mobiel abonnement toevoegen". Als geen van beide aanwezig is, mist je variant de functie. Voor meer, zie onze [Samsung eSIM-compatibiliteitsgids](/faq/samsung-s20-esim-compatible/) en [Samsung Support](https://www.samsung.com/us/support/).

### Google Pixel

| Model | eSIM-ondersteuning | Opmerkingen |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Ja | Eerste Pixel met de functie |
| **Pixel 3a / 3a XL** | ✅ Ja | – |
| **Pixel 4 / 4 XL** | ✅ Ja | – |
| **Pixel 4a** | ⚠️ Varieert | Japanse provider-versies = NEE |
| **Pixel 5 / 5a** | ✅ Ja | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Ja | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Ja | – |
| **Pixel 8 / 8 Pro** | ✅ Ja | – |

**Hoe te controleren op Pixel:** Bel `*#06#` voor de EID, of open **Instellingen > Netwerk & internet > SIM's** en zoek naar "Een SIM downloaden in plaats daarvan?". Als het ontbreekt, is de variant vergrendeld of mist de chip. Voor meer, zie onze [Pixel eSIM-compatibiliteitsgids](/faq/google-pixel-6-esim-compatible/) en de [Google Support — eSIM op Pixel](https://support.google.com/pixelphone/answer/7086887) pagina.

### OnePlus

OnePlus voegde eSIM pas toe vanaf de **OnePlus 12**. De OnePlus 11, 10, 9 en Nord-serie missen de hardware.

| Model | eSIM-ondersteuning |
| :--- | :--- |
| **OnePlus 12** | ✅ Ja |
| **OnePlus 11** | ❌ Nee |
| **OnePlus 10** | ❌ Nee |
| **OnePlus 9** | ❌ Nee |
| **OnePlus Nord-serie** | ❌ Nee (behalve sommige EU-varianten) |

### Xiaomi, Huawei, Motorola en anderen

- **Xiaomi** – flagshipmodellen (Xiaomi 12/13 wereldwijde versies) ondersteunen mogelijk eSIM, maar binnenlandse China-eenheden niet. De Redmi Note-lijn heeft helemaal geen eUICC.
- **Huawei** – ondersteuning is beperkt tot een paar modellen (P40, Mate 40 en nieuwer); veel telefoons van na 2020 missen eSIM vanwege Amerikaanse sancties. Controleer **Instellingen > Mobiel netwerk > eSIM** — als de optie ontbreekt, wordt het niet ondersteund.
- **Motorola** – de meeste G-serie budgetmodellen missen de chip; de Moto G Power en Edge-lijn variëren per regio.

De universele test voor elk van deze is hetzelfde: bel `*#06#` en zoek naar de EID.


## Android vs iPhone: de capaciteitscheck, zij aan zij

Dezelfde 2-minuten check, twee verschillende menu's. Geef deze tabel aan een vriend op het andere platform.

| Check | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Bel `*#06#` | Bel `*#06#` | Bel `*#06#` |
| **eSIM toevoegen-menu** | **Instellingen > Mobiel netwerk > eSIM toevoegen** | **Instellingen > Verbindingen > SIM-kaartbeheer > eSIM toevoegen** | **Instellingen > Netwerk & internet > SIM's > Een SIM downloaden in plaats daarvan?** |
| **Modelnummer** | **Instellingen > Algemeen > Over > Modelnummer** | **Instellingen > Over telefoon > Modelnummer** | **Instellingen > Over telefoon > Model** |
| **Lockstatus** | **Instellingen > Algemeen > Over > Providerlock** | **Instellingen > Over telefoon > Status** | **Instellingen > Over telefoon > SIM-status** |

**Het ene verschil dat belangrijk is:** op iPhone is eSIM-ondersteuning alles-of-niets per generatie en regio — gemakkelijk te voorspellen. Op Android is het per variant, dus twee "dezelfde" Galaxy- of Pixel-telefoons kunnen zich anders gedragen. Bij twijfel op Android, vertrouw de `*#06#` EID boven het specblad.


## 6. Je telefoon is capabel — wat nu? (Foutcode-oplossingen)

Als je telefoon de bovenstaande hardwarecheck heeft doorstaan en je ziet nog steeds een specifiek foutbericht, is het probleem niet langer compatibiliteit — het is een activerings- of netwerkprobleem. Die hebben hun eigen speciale referentie:

- **"Activering mislukt", "Geen Service", "QR ongeldig", "Mobiel abonnement kan niet worden toegevoegd", herstelfout 4013/4014, en elke andere fout op het scherm** → zie de [eSIM Diepgaande Probleemoplossingsgids 2026](/faq/esim-deep-troubleshooting-guide-2026/), die elk bericht aan een oplossing koppelt.
- **APN-instellingen en de volledige provider APN-tabel** → de canonieke APN-referentie staat ook in de [eSIM Diepgaande Probleemoplossingsgids 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Stapsgewijze activering (QR / handmatig / provider-app)** → zie [Hoe een eSIM te activeren](/faq/how-to-activate-an-esim/).
- **Een profiel naar een nieuwe telefoon verplaatsen** → zie [Hoe eSIM over te dragen tussen iPhone en Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **iPad en Apple Watch installatie** → zie de [iPad en Apple Watch eSIM-gids](/faq/ipad-apple-watch-esim-support-guide/).


## Veelgestelde vragen

**Waarom zegt mijn iPhone XR "eSIM niet ondersteund" terwijl het zou moeten werken?**
Als je modelnummer eindigt op CH/A, is het een vasteland-China eenheid zonder eSIM-chip. Controleer anders de providerlock-status — een vergrendelde XR weigert profielen van andere providers.

**Kan ik eSIM forceren op een iPhone 7?**
Nee. De iPhone 7 (en 6s, 8 en X) zijn van vóór de eUICC-chip. Geen softwarehack kan hardware toevoegen die er niet is.

**Wat is het verschil tussen EID en IMEI?**
IMEI (15 cijfers) identificeert je telefoonmodel — elke telefoon heeft er een. EID (32 cijfers) identificeert de embedded-SIM chip — alleen eSIM-capabele telefoons hebben er een. Als `*#06#` geen EID toont, kan je telefoon geen eSIM gebruiken.

**Wat betekent "EID niet gevonden" wanneer ik `*#06#` bel?**
Het betekent dat je telefoon de eUICC-hardwarechip mist die nodig is voor digitale SIM-profielen. Het is een hardwarebeperking, niet iets wat een software-update kan oplossen.

**Mijn telefoon ondersteunt geen eSIM — kan ik nog steeds een reis-eSIM gebruiken?**
Nee. Je hebt de embedded chip nodig, dus een fysieke SIM is je enige optie. Veel aanbieders (inclusief Roami) verkopen ook fysieke SIM-kaarten.

**Hoe weet ik of mijn Samsung Galaxy eSIM heeft?**
Bel `*#06#` — als een EID verschijnt, wordt het ondersteund. Je kunt ook Instellingen > Verbindingen > SIM-kaartbeheer controleren op een "eSIM toevoegen"-optie. Sommige Amerikaanse provider- en A-serie varianten verbergen het.

**Ondersteunt de OnePlus 11 eSIM?**
Nee. OnePlus voegde eSIM toe vanaf de OnePlus 12. De 11, 10, 9 en Nord-serie missen de hardware.

**Hoe controleer ik of mijn iPhone provider-locked is?**
Instellingen > Algemeen > Over > Providerlock. "Geen SIM-beperkingen" betekent dat het ontgrendeld is. Al het andere betekent dat het aan die provider is vergrendeld.

**Welke iPad-modellen ondersteunen eSIM?**
iPad Pro (3e gen en nieuwer), iPad Air (3e gen en nieuwer), iPad (10e gen en nieuwer), en iPad mini (6e gen en nieuwer) — alleen cellular-modellen. Wi-Fi-only iPads hebben geen eSIM-hardware.

**Waar kan ik een lijst vinden van eSIM-compatibele telefoons?**
De [volledige lijst van eSIM-compatibele telefoons (2026)](/compatibility/) behandelt iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi en meer.

**Wat is het verschil tussen een telefoonlock en een providerlock?**
Een telefoon(activerings)lock is anti-diefstal — iCloud op iPhone, Google FRP op Android — en alleen de oorspronkelijke eigenaar kan het verwijderen. Een providerlock is een netwerkbeperking die je provider gratis opheft zodra de telefoon is afbetaald en in aanmerking komt.

**Waarom hebben Chinese telefoons geen eSIM?**
Het vasteland van China vereist dat binnenlandse telefoons gecertificeerd zijn voor dubbele fysieke SIM, dus Apple en Android-merken leveren China-eenheden met twee nano-SIM-sleuven en geen eUICC-chip. Het is hardware — het kan later niet worden ingeschakeld.

**Kan ik eSIM toevoegen aan een telefoon die geen EID heeft?**
Nee. De eUICC-chip is op het moederbord gesoldeerd. Er is geen adapter, app, jailbreak of software-update die hardware toevoegt die nooit is geïnstalleerd.

**Lost een fabrieksreset "eSIM niet ondersteund" op?**
Nee. Een reset verandert de hardware niet en verwijdert geen providerlock. Het kan echter wel een beschadigd half-geïnstalleerd profiel wissen, dus het is de moeite waard om te proberen voor softwareglitches — na back-up.

**Waarvoor wordt de EID gebruikt wanneer een aanbieder erom vraagt?**
De EID laat je aanbieder een specifiek eSIM-profiel aan de chip van je telefoon binden voordat je scant. Het is hoe ze weten dat het abonnement voor jouw exacte apparaat bestemd is — zie het als het "adres" van de eSIM.

**Hoe weet ik of mijn telefoon ontgrendeld is zonder een SIM in te voeren?**
iPhone: Instellingen > Algemeen > Over > Providerlock — "Geen SIM-beperkingen" betekent ontgrendeld. Android: Instellingen > Over telefoon > Status (of SIM-status) en zoek naar de formulering "SIM vergrendeld" of "SIM niet vergrendeld".

👉 **Bevestigd dat je telefoon capabel is?** Pak een [eSIM voor de VS](/united-states-esim/) of [eSIM voor Japan](/japan-esim/) om verbonden te raken.


## Test je compatibiliteit met een gratis eSIM

De snelste manier om te bevestigen dat je telefoon daadwerkelijk eSIM kan gebruiken, is een **gratis proef-eSIM** installeren. Het kost niets, duurt 2 minuten, en als het installeert en verbindt, is je hardware klaar.

👉 [**Ontvang nu je gratis Roami eSIM**](/free-esim/)

---

*Als je specifieke apparaat of fout hier niet wordt behandeld, neem contact met ons op en we helpen je bevestigen of je telefoon eSIM-capabel is.*
## Bronnen

- [GSMA — eSIM (SGP.22)-specificatie](https://www.gsma.com/esim/)
- [Apple Support — eSIM op iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Een eSIM instellen](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)