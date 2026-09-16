---
title: "Hoe activeer je eSIM op iPhone (2026)"
h1_title: "Hoe je eSIM activeert op iPhone in 2026 – Complete stap-voor-stap gids"
description: "Complete iOS eSIM-activeringsgids 2026. Je hoeft je provider niet te bellen. Volg eenvoudige instructies voor QR-code, Instellingen-app of provider-app. Snel & gratis."
keywords: ["eSIM activering", "hoe activeer je eSIM iPhone", "iPhone eSIM installatie", "eSIM toevoegen aan iPhone", "eSIM QR-code iPhone", "reis eSIM iPhone", "iPhone eSIM probleemoplossing", "eSIM overdragen naar nieuwe iPhone", "eSIM activering mislukt iPhone", "eSIM geen service iPhone", "eSIM vast op activeren"]
date: 2026-09-16T10:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "iOS", "Probleemoplossing", "Reisinstallatie"]
toc: true
image: "/img/esim/esim-travel.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Bijgewerkt op"
  min_read: "min leestijd"
  toc: "Inhoudsopgave"

# Breadcrumbs
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

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Claim Gratis eSIM"
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
  title: "Populaire Vragen"
  items:
    - question: "Wat is eSIM-activering en hoe werkt het?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Hoe activeer ik een eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Hoe activeer ik eSIM op iPhone (alle modellen)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Nieuwste eSIM-compatibiliteitslijst"
      url: "/compatibility/"
---


> **Redacteurennoot:** Roami is het merk achter deze gids. We installeren dagelijks digitale SIMs op iPhones bij 20+ providers en 40+ landen, en elke stap hier is getest op echte hardware met iOS 17 en 18.

**Het korte antwoord:** Op een iPhone activeer je een eSIM vanuit de Instellingen-app — geen telefoontje naar je provider, geen fysieke kaart. Deze pagina behandelt het iOS-specifieke pad in detail: de exacte menu's, de verschillen tussen iOS 17 en 18, het verplaatsen van een profiel naar een nieuwe iPhone, en de iMessage/FaceTime-opruiming die de meeste gidsen overslaan.

Voor het concept erachter, zie [Wat is eSIM-activering?](/faq/what-is-esim-activation-and-how-does-it-work/). In plaats daarvan op Android? Gebruik de [algemene activeringsgids](/faq/how-to-activate-an-esim/). Gebruik je een iPhone 16? Er is een [speciale iPhone 16 eSIM-gids](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/).

## Is jouw iPhone eSIM-klaar?

Een snelle controle: kies `*#06#` — als een 32-cijferige **EID** verschijnt, heeft je iPhone eSIM. Voor de complete iPhone-modellenlijst (XS tot de 16/17-lijn, SE 2e/3e gen) en hoeveel profielen elk kan bevatten, zie de [iPhone eSIM-compatibiliteitshub](/faq/iphone-11-esim-compatible/).

## Voordat je begint: vier voorwaarden

1. **Ontgrendeld** — Instellingen > Algemeen > Over > Provider-lock moet "Geen SIM-beperkingen" aangeven. Een vergrendelde iPhone kan geen eSIM van een tweede provider installeren.
2. **Wi-Fi** — het profiel wordt gedownload van de beveiligde server van je provider, dus je hebt een verbinding nodig (mobiele data is niet voldoende voor de eerste download).
3. **Toegangscode** — iOS vraagt om je vergrendelscherm-toegangscode om de installatie te autoriseren.
4. **De QR-code** — houd deze open op een ander apparaat, of sla de afbeelding op in Foto's en gebruik later "Foto kiezen".

## Twee verschillende taken: je hoofdlijn vs een reis-eSIM

Voordat je Instellingen opent, benoem wat je eigenlijk doet — de flow verschilt enigszins, en weten welke je volgt voorkomt de meeste verwarring.

**Scenario A: je hoofdlijn activeren (provider vervangen of nieuwe telefoon).** Dit is een providerrelatie. Je provider geeft je ofwel een QR-code, pusht de eSIM via hun app (Verizon, T-Mobile, AT&T, Visible, Mint doen dit allemaal), of gebruikt "eSIM Provider-activering" waarbij het profiel automatisch verschijnt zodra je inlogt met je provideraccount. Je wilt daarna controleren of iMessage en FaceTime opnieuw registreren op het nieuwe nummer.

**Scenario B: een reis-eSIM toevoegen (je thuisnummer behouden).** Dit is een tweede, aparte lijn voor data in het buitenland. Je houdt je fysieke SIM of thuis-eSIM onaangeroerd, installeert de reis-eSIM ernaast, en richt dan Mobiele data op de reislijn. De reis-eSIM is meestal data-only, dus oproepen en sms blijven op je thuisnummer.

Alles hieronder geldt voor beide, maar de secties "converteren", "Quick Transfer" en "iMessage opnieuw registreren" zijn Scenario A-territorium, terwijl de dual-line installatie Scenario B is.

## De drie manieren om een eSIM op iPhone te installeren

### 1. QR-code (meest voorkomend)

1. Instellingen > Mobiel netwerk (of Mobiele data).
2. Tik op **eSIM toevoegen** (oudere iOS: **Mobiel abonnement toevoegen**).
3. Tik op **QR-code gebruiken**.
4. Houd de telefoon ongeveer 15 cm van de code, met het weergevende scherm op volledige helderheid.
5. Wanneer het abonnement verschijnt, tik op **Doorgaan** en voer je toegangscode in als daarom wordt gevraagd.

Als het na een paar pogingen niet scant, kies **Gegevens handmatig invoeren** onderaan het camerascherm.

### 2. Handmatige invoer

Ga naar Instellingen > Mobiel netwerk > eSIM toevoegen > QR-code gebruiken > **Gegevens handmatig invoeren**, en typ dan het SM-DP+-adres en de activeringscode uit de e-mail van je provider. Dit is de betrouwbare fallback wanneer de code beschadigd is of op dezelfde telefoon staat die je aan het activeren bent.

### 3. Provider-app

Providers zoals Roami, Airalo en Holafly installeren met één tik vanuit hun app — open je abonnement en tik op **Installeren** of **Activeren**, en sta de prompt toe. Snelste route, geen camera nodig.

## Je fysieke SIM converteren naar eSIM op iPhone

Als je provider het ondersteunt, kan iOS je fysieke SIM omzetten naar een eSIM direct op de telefoon — geen rit naar een winkel, geen nieuwe SIM-kaart, geen QR-code. Dit is de schoonste manier om het fysieke SIM-slot vrij te maken (bijvoorbeeld voor een lokale SIM in het buitenland) of om volledig digitaal te gaan voordat je je telefoon verkoopt.

1. Instellingen > Mobiel netwerk.
2. Tik op de lijn die momenteel op je fysieke SIM staat.
3. Tik op **Converteren naar eSIM** (bij sommige providers staat er **Fysieke SIM converteren naar eSIM**).
4. Tik op **Mobiel abonnement converteren**, dan **Converteren naar eSIM**.
5. Wacht op de conversie — meestal minder dan een minuut — en verwijder dan de fysieke SIM-kaart wanneer iOS daarom vraagt.

Een paar valkuilen die het kennen waard zijn. **Providerondersteuning varieert** — de grote drie (AT&T, Verizon, T-Mobile) ondersteunen het, maar veel MVNO's en prepaid providers tonen de optie niet. **Je iPhone moet op het netwerk van die provider zitten** om te converteren (het verifieert de lijn tijdens de conversie). **Je kunt geen buitenlandse of reis-SIM converteren** — deze functie converteert alleen de SIM voor de provider waarbij je telefoon momenteel is aangemeld. En eenmaal geconverteerd is de fysieke kaart dood — gooi hem weg, geef hem niet aan iemand anders.

Zie je geen "Converteren naar eSIM"? Je provider heeft het niet ingeschakeld. Je kunt nog steeds digitaal gaan op de oude manier: vraag hen om een eSIM QR-code en volg de standaardinstallatie hierboven.

## iOS 17 vs iOS 18: wat is er veranderd

| Functie | iOS 17 | iOS 18 |
|---|---|---|
| eSIM-toevoegen pad | Instellingen > Mobiel netwerk > eSIM toevoegen | Zelfde pad |
| Knoplabel | "Mobiel abonnement toevoegen" op sommige apparaten | "eSIM toevoegen" overal |
| Handmatige invoer | Onderaan scan-scherm | Prominenter, opnieuw ontworpen |
| Quick Transfer | Beschikbaar sinds iOS 16 | Betrouwbaarder, betere voortgangsindicator |
| Provider-updates | Sommige vereisen een herstart | Achtergrondupdates |

Als je "Mobiel abonnement toevoegen" ziet, is dat dezelfde functie als "eSIM toevoegen."

## iOS-versiegeschiedenis voor eSIM (15 tot en met 18)

De labels zijn meer verschoven dan mensen zich realiseren. Hier is de volledige boog, zodat een drie jaar oude tutorial op je twee jaar oude telefoon nog steeds logisch is.

| iOS-versie | Menulabel | Wat veranderde voor eSIM |
|---|---|---|
| iOS 15 | "Mobiel abonnement toevoegen" | eSIM beschikbaar op XS/XR en nieuwer; dual SIM is één eSIM + één fysieke op de meeste modellen |
| iOS 16 | "Mobiel abonnement toevoegen" | **Quick Transfer** (een eSIM verplaatsen van een nabijgelegen iPhone) arriveert; converteren-naar-eSIM voor geselecteerde providers |
| iOS 17 | "eSIM toevoegen" / "Mobiel abonnement toevoegen" (gemengd) | Converteren-naar-eSIM breidt uit naar meer providers; dual *actieve* eSIM op iPhone 13 en later |
| iOS 18 | "eSIM toevoegen" overal | Opnieuw ontworpen toevoegscherm, achtergrondprovider-updates, duidelijkere dual-eSIM-weergave |

De korte versie: alles vanaf iOS 16 kan Quick Transfer, iOS 17 standaardiseerde dual eSIM, en iOS 18 is vooral een polijstronde op labeling en betrouwbaarheid.

## Na installatie van het profiel: iMessage en FaceTime opnieuw registreren

De meeste gidsen stoppen bij "Mobiele installatie voltooid", maar er is één iOS-eigenaardigheid die het behandelen waard is: als je je standaard spraaklijn hebt gewisseld, kunnen iMessage en FaceTime nog steeds aan de oude lijn gekoppeld zijn — of "Wachten op activering" tonen.

1. Instellingen > Berichten > Verzenden & ontvangen, en bevestig dat je nummer is geselecteerd.
2. Instellingen > FaceTime, en bevestig dat het juiste nummer of Apple ID actief is.
3. Als een van beide "Wachten op activering" toont, schakel iMessage uit en weer aan terwijl je verbonden bent met Wi-Fi.

Dit is belangrijk bij dual-line installaties waarbij de reis-eSIM data-only is en je berichten op je thuisnummer wilt houden.

## Quick Transfer: een eSIM verplaatsen naar een nieuwe iPhone

Bij het instellen van een nieuwe iPhone in de buurt van je oude, kies **"eSIM overdragen van nabijgelegen iPhone"** en houd beide apparaten dichtbij met Bluetooth en Wi-Fi aan. Het profiel wordt draadloos verplaatst in een minuut of twee.

Als de prompt niet verschijnt, ga naar Instellingen > Mobiel netwerk > eSIM toevoegen > **Overdragen van nabijgelegen iPhone** op de nieuwe telefoon. Als het profiel aankomt maar "Geen Service" toont, verwijder het dan eerst van de oude iPhone — sommige providers vereisen dat het oude profiel wordt vrijgegeven.

Voor het verplaatsen van een eSIM naar Android, provider-heruitgiftes, of een telefoon die je al hebt verkocht of gereset, zie de [eSIM-overdrachtsgids](/faq/how-to-transfer-esim-between-iphone-and-android/).

## Quick Transfer randgevallen

Quick Transfer is briljant wanneer beide iPhones in de kamer zijn. Wanneer ze dat niet zijn, is dit wat er gebeurt.

- **Je hebt de oude iPhone verkocht, verloren of gereset.** Quick Transfer is van tafel — het heeft het bronapparaat nodig, ingeschakeld en ontgrendeld. Neem in plaats daarvan contact op met je provider en vraag hen de eSIM opnieuw uit te geven (meestal gratis, duurt enkele minuten), en installeer dan de nieuwe QR op de nieuwe telefoon. Gedetailleerde heruitgiftestappen staan in de [overdrachtsgids](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **"Overdragen van nabijgelegen iPhone" ontbreekt.** Het verschijnt alleen op apparaten met iOS 16 of later. Op een oudere iPhone, of als de bron buiten bereik is, val terug op een provider QR-heruitgifte.
- **De overdracht stokt halverwege.** Zet beide telefoons op dezelfde Wi-Fi, houd ze binnen een paar centimeter, en schakel Lage-energiemodus op beide uit. Bluetooth moet aan blijven — Quick Transfer koppelt via Bluetooth voordat het overdraagt via Wi-Fi.
- **Je komt van Android.** Quick Transfer is alleen iPhone-naar-iPhone. Android-naar-iPhone overdrachten gaan via je provider, niet via de Instellingen-app.
- **De eSIM is verplaatst maar een fysieke SIM niet.** Quick Transfer verplaatst alleen *eSIM*-profielen — een fysieke SIM-kaart moet nog steeds fysiek worden omgewisseld (tenzij je deze eerst naar eSIM converteert, hierboven).

## Een tweede (reis-)eSIM toevoegen terwijl je je thuisnummer behoudt

Dit is de meest voorkomende praktijkinstallatie: je thuislijn blijft precies waar die is, en een reis-eSIM rijdt mee voor data. Doe het in deze volgorde.

1. **Laat je thuislijn onaangeroerd.** Of het een fysieke SIM of een eSIM is, laat het op zijn plaats. Verwijder het niet, converteer het niet.
2. **Installeer de reis-eSIM** via QR, handmatige invoer, of de provider-app (Roami, Airalo, Holafly).
3. **Label de lijnen.** Instellingen > Mobiel netwerk, tik op elke lijn, en gebruik "Mobiel abonnement label" om ze te hernoemen — "Thuis" en "Roami Reis" — zodat je ze later uit elkaar kunt houden.
4. **Stel Mobiele data in op de reis-eSIM.** Instellingen > Mobiel netwerk > Mobiele data, en selecteer de reislijn.
5. **Stel Standaard spraaklijn in op je thuisnummer.** Dit houdt oproepen, iMessage en FaceTime op je gewone nummer.
6. **Zet Data Roaming AAN voor de reis-eSIM, UIT voor thuis.** De reislijn heeft roaming nodig om partnernetwerken te bereiken; de thuislijn niet, en het uit laten voorkomt onbedoelde dagelijkse kosten.
7. **Laat "Mobiele data wisselen toestaan" UIT.** Met het aan, kan een korte signaaldaling data naar je thuislijn verplaatsen en een roamingkosten triggeren.

Nu heb je een datapijp van je reis-eSIM en een nummer dat iedereen nog kan bereiken — geen SIM-omwisseling, geen tweede telefoon.

## Configureer je twee lijnen voor reizen

- **Standaard spraaklijn:** houd je thuis-SIM zodat oproepen en iMessages op je gewone nummer blijven.
- **Mobiele data:** richt dit op de reis-eSIM.
- **Mobiele data wisselen toestaan:** laat het **UIT**. Met het aan, kan een korte signaaldaling data naar je thuislijn verplaatsen en een dagelijkse roamingkosten triggeren.
- **Data Roaming:** UIT op de thuis-SIM, AAN voor de reis-eSIM (reis-eSIMs hebben het nodig om partnernetwerken te bereiken).

Als signaalbalken verschijnen maar pagina's niet laden, is het meestal een APN-probleem — de volledige APN-tabel staat in de [diepgaande probleemoplossingsgids](/faq/esim-deep-troubleshooting-guide-2026/).

## "eSIM toevoegen" grijs, of "Mobiel abonnement toevoegen" ontbreekt

Als de optie grijs is of er gewoon niet is, blokkeert iets stroomopwaarts het. Hier zijn de oorzaken, meest voorkomende eerst.

| Oorzaak | Hoe te herkennen | Oplossing |
|---|---|---|
| Provider-locked iPhone | Instellingen > Algemeen > Over > Provider-lock zegt niet "Geen SIM-beperkingen" | Ontgrendel via je provider, of gebruik het eSIM van de vergrendelde provider |
| Provider biedt geen eSIM | Je provider geeft alleen fysieke SIMs uit | Wissel van provider, of gebruik een reis-eSIM voor data |
| eSIM-slots al vol | iPhone 13+ bevat twee actieve eSIMs; XS-12 bevat één | Schakel een bestaande lijn uit of verwijder deze om een slot vrij te maken |
| MDM / bedrijfsprofiel | Een werktelefoon met een beheerprofiel geïnstalleerd | De `AllowESIMModification` restrictie blokkeert wijzigingen — neem contact op met IT |
| China / Hongkong model | Modelnummer eindigt op het China-specifieke achtervoegsel, geen eSIM-hardware | eSIM is niet beschikbaar op China-vasteland iPhones |
| Softwarefout | Een recente iOS-update liet het menu verouderd achter | Herstart, en controleer opnieuw |

De enkele grootste oorzaak is een provider-lock — het vertegenwoordigt de meerderheid van "waarom kan ik geen eSIM toevoegen" tickets. De tweede is proberen een derde lijn toe te voegen op een telefoon die slechts twee actieve toestaat.

## Hoe zit het met Apple Watch en iPad?

Een Apple Watch spiegelt een van de lijnen van je iPhone — het kan geen reis-eSIM op zichzelf gebruiken — en cellular iPads gebruiken hun eigen Instellingen > Mobiele data pad. Volledige details staan in de [iPad & Apple Watch eSIM-gids](/faq/ipad-apple-watch-esim-support-guide/).

## Meerdere eSIMs beheren op je iPhone

Zodra je twee of drie profielen hebt geïnstalleerd, voorkomt een beetje huishouding dat ze een verwarrende stapel worden.

- **Label elke lijn.** Instellingen > Mobiel netwerk > een lijn > Mobiel abonnement label. "Thuis", "Roami Reis" en "Spanje eSIM" verslaan de standaardwaarden ("Primair", "Secundair", "Reis").
- **Schakel lijnen in of uit.** Instellingen > Mobiel netwerk > een lijn > Deze lijn inschakelen. Uit betekent dat het stopt met proberen te registreren — handig voor een slapende reis-eSIM die je van plan bent volgend jaar opnieuw te gebruiken.
- **Wissel de datalijn direct.** Instellingen > Mobiel netwerk > Mobiele data laat je data tussen lijnen verplaatsen zonder herstart.
- **Let op de actieve-lijn limiet.** iPhone 13 en later staan twee actieve lijnen tegelijk toe; een derde profiel kan worden *opgeslagen* maar niet actief tot je er een uitschakelt.
- **Verwijder wanneer klaar.** Na een reis, verwijder de verlopen reis-eSIM (Instellingen > Mobiel netwerk > de lijn > eSIM verwijderen) zodat het stopt met het vervuilen van de lijst — maar alleen wanneer het abonnement is verlopen, aangezien QR-codes eenmalig gebruik zijn.

## eSIM, iCloud-back-ups en het wissen van je iPhone

Eén ding dat de meeste mensen op de harde manier leren: **eSIMs maken geen deel uit van je iCloud-back-up.** Een herstel van back-up brengt je apps, instellingen en foto's terug — maar niet je mobiele profielen. De profielen leven op de eUICC-chip van de telefoon, en slechts drie dingen verplaatsen ze: Quick Transfer, een provider-heruitgifte, of opnieuw downloaden van je provider.

Praktische gevolgen:

- **"Wis alle inhoud en instellingen" verwijdert je eSIMs.** Voordat je wist (om te verkopen, in te ruilen, of een probleem op te lossen), weet dat je daarna elke eSIM opnieuw moet downloaden — en reis-eSIMs met eenmalige QR-codes hebben mogelijk een heel nieuw abonnement nodig.
- **Een normale iCloud-herstel wist of herstelt geen eSIMs.** Herstellen naar *dezelfde* telefoon laat je eSIMs onaangeroerd; herstellen naar een *nieuwe* telefoon vereist nog steeds Quick Transfer of een provider-heruitgifte voor de lijnen.
- **Back-up redt een verloren eSIM niet.** Als je de telefoon wist of breekt, is het profiel weg tot de provider het opnieuw uitgeeft. Bewaar de handmatige invoerstrings van je provider (SM-DP+-adres + activeringscode) ergens apart van de telefoon.

## Veelvoorkomende iPhone-fouten (en waar ze op te lossen)

De meest voorkomende fouten — "Mobiel abonnement kan niet worden toegevoegd," vast "Activeren," "Geen Service" na installatie — worden fout-voor-fout behandeld, met APN-waarden, in de [eSIM Diepgaande Probleemoplossingsgids](/faq/esim-deep-troubleshooting-guide-2026/). De enkele grootste oorzaak is een provider-locked telefoon; de tweede is Data Roaming uitgelaten op de reis-eSIM.

## Veelgestelde Vragen

**Hoeveel eSIMs kan ik opslaan op mijn iPhone?**
Acht of meer profielen, maar slechts twee kunnen tegelijk actief zijn (iPhone 13 en nieuwer). Oudere modellen (XS-12) houden één actieve eSIM plus een fysieke SIM.

**Kan ik mijn eSIM verwijderen na de reis?**
Ja — Instellingen > Mobiel netwerk > de eSIM > eSIM verwijderen zodra het abonnement is verlopen. Verwijder nooit midden in een reis: QR-codes zijn eenmalig gebruik, dus je zou een nieuw abonnement nodig hebben.

**Verbruikt een eSIM mijn iPhone-batterij?**
Niet merkbaar. Twee actieve lijnen in een zwak signaalgebied kunnen een procent of twee per dag toevoegen, maar een eSIM alleen verbruikt ongeveer hetzelfde als een fysieke SIM.

**Heb ik Data Roaming nodig voor een reis-eSIM op iPhone?**
Ja — het is vereist voor de eSIM om te registreren op partnernetwerken, en het voegt geen roamingkosten toe. Dit missen is de #1 oorzaak van "Geen Service."

**Kan ik een fysieke SIM en eSIM samen gebruiken op iPhone?**
Ja — dual SIM werkt out of the box. (Amerikaanse iPhone 14 en nieuwer zijn eSIM-only, dus je zou in plaats daarvan twee eSIMs koppelen.) Zie de [iPhone-compatibiliteitshub](/faq/iphone-11-esim-compatible/) voor hoe dual SIM werkt.

**Wat is het verschil tussen eSIM en een fysieke SIM?**
De korte versie: een eSIM is een digitaal profiel dat je niet kunt verwijderen, en het wisselt direct van provider. De volledige vergelijking staat in [Wat is eSIM?](/faq/what-is-esim/).

**Kan ik mijn fysieke SIM converteren naar eSIM op mijn iPhone?**
Als je provider het ondersteunt, ja — Instellingen > Mobiel netwerk > je lijn > Converteren naar eSIM. De grote drie Amerikaanse providers ondersteunen het; veel MVNO's niet. Je telefoon moet op het netwerk van die provider zitten om te converteren.

**Waarom is "eSIM toevoegen" grijs op mijn iPhone?**
Meestal een provider-lock, een vol eSIM-slot, of een zakelijk MDM-profiel dat wijzigingen blokkeert. Controleer eerst Instellingen > Algemeen > Over > Provider-lock — als er niet "Geen SIM-beperkingen" staat, is dat je antwoord.

**Wat gebeurt er met mijn eSIM als ik mijn iPhone wis?**
"Wis alle inhoud en instellingen" verwijdert eSIM-profielen. Je moet ze daarna opnieuw downloaden van je provider. Reis-eSIMs met eenmalige QR-codes hebben mogelijk een nieuw abonnement nodig, dus wis alleen wanneer je klaar bent om alles opnieuw in te stellen.

**Werkt Quick Transfer als ik mijn oude iPhone niet meer heb?**
Nee — het heeft beide telefoons aanwezig en ingeschakeld nodig. Als je oude iPhone is verkocht, verloren of gereset, vraag je provider dan de eSIM opnieuw uit te geven. Zie de [overdrachtsgids](/faq/how-to-transfer-esim-between-iphone-and-android/).

**Kan ik mijn reis-eSIM op iPhone pauzeren tussen reizen?**
Je kunt de geldigheidsklok van het abonnement niet pauzeren, maar je kunt de lijn UITschakelen (Instellingen > Mobiel netwerk > de lijn > Deze lijn inschakelen) zodat het stopt met registreren en stopt met batterijgebruik. Het blijft opgeslagen en klaar om weer in te schakelen op de volgende reis — zolang het geldigheidsvenster van het abonnement niet is afgelopen.

---

## Klaar voor je volgende avontuur?

👉 **Probeer het eerst gratis** — pak een [gratis eSIM](/free-esim/) en doorloop deze uitleg van begin tot eind. Kies dan je bestemming: [eSIM voor de VS](/united-states-esim/), [Japan](/japan-esim/), [Europa](/europe-esim/), of het [VK](/united-kingdom-esim/).

*Gebaseerd op Apple officiële documentatie, GSMA-normen en providertests. Bijgewerkt: augustus 2026.*

## Bronnen

- [GSMA — eSIM (SGP.22) specificatie](https://www.gsma.com/esim/)
- [Apple Support — eSIM op iPhone](https://support.apple.com/en-us/108072)
- [Apple Support — Over eSIM op iPhone](https://support.apple.com/en-us/HT209044)