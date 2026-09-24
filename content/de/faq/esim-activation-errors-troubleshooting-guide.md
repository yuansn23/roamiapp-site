---
title: "eSIM funktioniert nicht? Kompatibilitätsfehler 2026 beheben"
h1_title: "So beheben Sie „eSIM funktioniert nicht“: Kompatibilitätsfehler 2026"
description: "Festgefahren mit eSIM-Fehlern? Erfahren Sie, wie Sie Aktivierungsfehler, Übertragungsprobleme und Bootloops auf iPhone & Android beheben. Diagnostizieren Sie Ihr Handy in 2 Minuten."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["eSIM funktioniert nicht", "eSIM wird nicht unterstützt", "eSIM nicht kompatibel iPhone", "eSIM kann nicht aktiviert werden", "eSIM Netzwerk nicht verfügbar", "eSIM wird nicht aufs neue iPhone übertragen", "eSIM versehentlich gelöscht", "eSIM Profil abgelaufen", "eSIM QR-Code ungültig", "eSIM auf iPhone reparieren", "eSIM Übertragungsfehler", "eSIM kein Dienst"]
date: 2026-09-20T00:00:00Z
lastmod: 2026-09-20T00:00:00Z
tags: ["eSIM", "Fehlerbehebung", "Aktivierungsfehler", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

ui_text:
  updated_on: "Aktualisiert am"
  min_read: "Min. Lesezeit"
  toc: "Inhaltsverzeichnis"

breadcrumbs:
  home:
    text: "Startseite"
    url: "/"
  parent:
    text: "Hilfe-Center"
    url: "/faq/"

# Sidebar: Popular eSIMs
sidebar_popular:
  title: "Beliebte eSIMs"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Deutschland eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Türkei eSIM"
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
  title: "Kostenlose eSIM sichern"
  icon: "🎁"
  item_suffix: "Kostenlose eSIM"
  item_subtitle: "Kostenlose eSIM"
  items:
    - name: "UK eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Deutschland"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thailand"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hongkong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

sidebar_questions:
  title: "Beliebte Fragen"
  items:
    - question: "Was ist eine eSIM-Aktivierung und wie funktioniert sie?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Wie aktiviert man eine eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Wie aktiviert man eSIM auf dem iPhone (alle Modelle)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Aktuelle eSIM-Kompatibilitätsliste"
      url: "/compatibility/"
---


> **Hinweis der Redaktion:** Ein Großteil der Probleme nach dem Motto „meine eSIM funktioniert nicht" erweist sich als Handyproblem, nicht als Tarifproblem. Dieser Leitfaden beantwortet die Frage, die Sie vor allem anderen stellen sollten: *Ist mein Handy überhaupt eSIM-fähig?* Wir führen Sie durch den 2-Minuten-Hardware-Check, die China-/Hongkong-Modell-Ausnahmen und Netzbetreiber-Sperren – damit Sie keine Stunde mit Aktivierungsschritten verschwenden, die auf Ihrem Gerät niemals funktionieren können.

> **Suchen Sie eine Lösung für einen Fehlercode?** Wenn Ihr Handy den Hardware-Check unten besteht, Sie aber eine bestimmte Meldung sehen („Aktivierung fehlgeschlagen", „Kein Dienst", „QR ungültig", Wiederherstellungsfehler 4013/4014), ist das ein anderes Problem. Springen Sie zu unserem [eSIM-Deep-Troubleshooting-Guide](/faq/esim-deep-troubleshooting-guide-2026/) für die Fehler-für-Fehler-Referenz.

## Ist mein Handy überhaupt eSIM-fähig?

Bevor Sie die Einstellungen öffnen, einen einzigen QR-Code scannen oder den Support kontaktieren, vergewissern Sie sich, dass Ihr Handy tatsächlich die erforderliche eingebettete SIM-Hardware besitzt. Diese eine Prüfung schließt sofort etwa die Hälfte aller Fälle von „eSIM funktioniert nicht" aus.

### Der universelle EID-Check

Öffnen Sie die Telefon-App Ihres Handys und geben Sie ein:

> **`*#06#`**

- Wenn ein Bildschirm mit einer **32-stelligen EID** (eUICC-Identifier) erscheint, hat Ihr Handy den eingebetteten Chip, der für die digitale SIM-Aktivierung nötig ist. ✅
- Wenn der Bildschirm nur **IMEI**-Nummern zeigt und keine EID, ist die Hardware nicht vorhanden. ❌

**Was tun, wenn keine EID erscheint:** Hören Sie hier auf. Kein Software-Update, kein Hack und keine „Erzwingungs"-Methode kann den fehlenden Chip hinzufügen – es fehlt physisch an der Hardware. Verwenden Sie stattdessen eine physische SIM, oder prüfen Sie Lösung #4 für Handys, die *aussehen*, als sollten sie eSIM unterstützen, es aber nicht tun.

### EID vs. IMEI vs. ICCID erklärt

| Kennung | Was es ist | Was es Ihnen sagt |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 Ziffern) | Identifiziert Ihr Handy-Modell – jedes Handy hat eine |
| **EID** | eUICC-Identifier (32 Ziffern) | Bestätigt, dass der eingebettete SIM-Chip vorhanden ist – nur eSIM-fähige Handys haben eine |
| **ICCID** | Integrated Circuit Card Identifier (19–20 Ziffern) | Identifiziert ein bestimmtes eSIM-Profil nach der Installation |

> **Wichtig zu wissen:** EID = Hardware vorhanden. Wenn Sie eine EID sehen, ist Ihr Handy physisch eSIM-fähig. Wenn nicht, ändert nichts, was Sie installieren, daran etwas.

### Wo Sie jede Nummer finden

Alle drei Nummern liegen offen zutage, sobald Sie das Menü kennen. Hier der kürzeste Weg zu jeder:

| Kennung | Schnellster Weg | Alternativer Speicherort |
| :--- | :--- | :--- |
| **IMEI (15 Ziffern)** | `*#06#` wählen – es ist die zuerst angezeigte Nummer | iPhone: **Einstellungen > Allgemein > Info**. Android: **Einstellungen > Telefoninfo** |
| **EID (32 Ziffern)** | `*#06#` wählen und scrollen – es ist die lange Nummer, die mit **8904** beginnt | iPhone: **Einstellungen > Allgemein > Info > EID**. Samsung: **Einstellungen > Telefoninfo > Status** |
| **ICCID (19–20 Ziffern)** | Erscheint erst, nachdem ein Profil installiert wurde | iPhone: **Einstellungen > Allgemein > Info**. Android: **Einstellungen > Telefoninfo > SIM-Karten-Status** |

> **Praktischer Fakt:** Jede EID beginnt mit **„8904"** – dieses Präfix kennzeichnet sie als eUICC-Identifier. Wenn die lange Nummer auf dem Bildschirm mit etwas anderem beginnt, lesen Sie den falschen Wert ab.

### Der „eSIM hinzufügen"-Button-Test

Wenn `*#06#` eine EID zeigt, Sie aber trotzdem „eSIM wird nicht unterstützt" sehen, öffnen Sie **Einstellungen > Mobilfunk** und suchen Sie nach **„eSIM hinzufügen"** oder **„Mobilfunktarif hinzufügen"**. Wenn die Option vorhanden ist, aber beim Scannen fehlschlägt, haben Sie höchstwahrscheinlich eine **Netzbetreiber-Sperre** oder eine **Regionseinschränkung** – beide werden unten behandelt.

### Die Einstellungs-Suchmethode

Keine Telefon-App zur Hand (manche Tablets und Foldables verstecken sie), oder `*#06#` hat einen verwirrenden Bildschirm geliefert? Die Suchleiste Ihres Handys ist die zweitschnellste Prüfung.

- **iPhone:** Öffnen Sie **Einstellungen**, wischen Sie vom oberen Rand der Liste nach unten, um das Suchfeld einzublenden, und geben Sie **„eSIM"** ein. Ein Ergebnis wie **„eSIM hinzufügen"** oder **„Mobilfunktarif hinzufügen"** bedeutet, dass die Funktion vorhanden ist.
- **Samsung:** Öffnen Sie **Einstellungen**, tippen Sie oben auf das **Lupensymbol** und geben Sie **„eSIM"** ein. Wenn **„SIM-Karten-Manager"** (oder „Mobilfunktarif hinzufügen") erscheint, hat Ihre Variante den Chip.
- **Pixel:** Öffnen Sie **Einstellungen > Netzwerk & Internet > SIMs**. Wenn Sie **„Stattdessen SIM herunterladen?"** sehen, sind Sie startklar. Ein Bildschirm, der nur Ihre physische SIM auflistet – ohne Download-Option – bedeutet: kein eUICC-Chip.

> **Kein Suchergebnis = keine Hardware.** Liefert ein nach etwa 2018 verkauftes Handy bei der Suche nach „eSIM" in den Einstellungen nichts, halten Sie fast sicher eine Regional- oder Budget-Variante ohne den Chip in der Hand.

### Die Modellnummer-Nachschlage-Methode

Gebrauchtgerät gekauft oder ein Handy geprüft, das Sie nicht einschalten können? Die Modellnummer entscheidet es in Sekunden.

- **iPhone:** **Einstellungen > Allgemein > Info > Modellnummer**, dann auf die Nummer tippen, um sie auf den **A-Präfix-Identifier** umzuschalten (z. B. **A2111**). Die Buchstaben vor **/A** in der Teilenummer verschlüsseln die Verkaufsregion – die vollständige Suffix-Tabelle finden Sie in Abschnitt 2.
- **Samsung:** **Einstellungen > Telefoninfo > Modellnummer** (z. B. **SM-S921U1**). Das letzte Zeichen verrät es: **U** = US-Netzbetreiber, **U1** = US ohne Sperre, **B** = Europa/global, **0** = China/Hongkong (Snapdragon).
- **Pixel:** **Einstellungen > Telefoninfo > Modell**. Pixel-Modellstrings unterscheiden sich je nach Region und Netzbetreiber – japanische und einige US-Carrier-Varianten beschränken eSIM, prüfen Sie also den jeweiligen Code nach oder wählen Sie `*#06#`.

> **Faustregel:** Endet die Modellnummer auf ein China-/Regionssuffix (oder ein US-Carrier-Suffix bei Samsung), prüfen Sie mit `*#06#` nach, bevor Sie davon ausgehen, dass eSIM funktioniert. Modellnummer plus EID zusammen geben Ihnen eine 100-%-Antwort.

### Warum ein Handy eine EID zeigen kann, aber trotzdem eSIM verweigert

| Szenario | EID vorhanden? | eSIM funktioniert? | Warum? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR und neuer (global) | ✅ Ja | ✅ Ja | Volle Unterstützung für digitale SIM-Profile |
| iPhone XS/XR (China-Modell) | ❌ Nein | ❌ Nein | Hardware für Dual-physische SIM entfernt |
| Samsung S20 FE (US-Carrier) | ✅ Ja | ❌ Nein | Netzbetreiber hat die Funktion per Software deaktiviert |
| Google Pixel 4a (Japan) | ✅ Ja | ❌ Nein | Netzbetreiber hat die Funktionalität gesperrt |
| iPhone mit Netzbetreiber-Sperre (AT&T/T-Mobile) | ✅ Ja | ❌ Nein (für andere Netzbetreiber) | Netzsperre blockiert die Profile anderer Anbieter |
| Entsperrtes iPhone (jede Region) | ✅ Ja | ✅ Ja | Volle Unterstützung |


## eSIM nicht unterstützt oder nicht kompatibel auf dem iPhone

Wenn Sie **„eSIM nicht unterstützt"**, **„diese eSIM ist nicht mit diesem iPhone kompatibel"** oder schlicht **„eSIM nicht kompatibel iPhone"** sehen, ist die Ursache fast immer eine von fünf Sachen – und jede betrifft Ihr *Gerät*, nicht den Tarif.

### Ihr iPhone-Modell ist älter als die eSIM-Hardware

Nur iPhones ab **XR, XS, XS Max (2018) und neuer** haben den eingebetteten Chip. Das iPhone 8, 8 Plus und iPhone X nicht – sie liefern deshalb **„eSIM nicht unterstützt"**, egal was Sie versuchen. Der eUICC-Chip ist auf diesen Boards schlicht nicht vorhanden – das ist eine Hardware-Einschränkung, kein Einstellungsproblem.

**Schnellcheck:** Wählen Sie `*#06#`. Eine 32-stellige EID bedeutet: alles gut; nur IMEI bedeutet: nicht kompatibel.

**Was tun:** Verwenden Sie eine physische SIM oder wechseln Sie zu einem iPhone XR oder neuer. Die offizielle Liste finden Sie unter [Apple Support — eSIM auf dem iPhone einrichten](https://support.apple.com/en-us/118670).

### Ihr iPhone ist ein Festlandchina-Modell

In Festlandchina verkaufte iPhones kommen mit **zwei physischen SIM-Slots und ohne eSIM-Hardware**. Chinesische Vorschriften drängen heimische Smartphones zur Dual-physischen SIM, weshalb Apple den eingebetteten Chip bei diesen Geräten entfernt hat. Selbst wenn die Option „Mobilfunktarif hinzufügen" erscheint, wird sie nicht abgeschlossen – dies ist der mit Abstand häufigste Grund für „eSIM nicht kompatibel mit diesem iPhone" bei Käufern, die ihr Gerät in China oder über bestimmte Händler erworben haben.

**So identifizieren Sie es:** **Einstellungen > Allgemein > Info > Modellnummer**. Endet sie auf **„CH/A"**, ist es ein Festlandchina-Modell. (Vollständige Suffix-Tabelle in Abschnitt 2 unten.)

**Was tun:** Es gibt keine Möglichkeit, eSIM auf einem CH/A-Gerät zu aktivieren. Verwenden Sie eine physische Reise-SIM oder verkaufen Sie das Handy und kaufen Sie eine globale Version.

### Ihr iPhone ist netzwerkgesperrt

Manche Netzbetreiber – vor allem in den USA – sperren iPhones auf ihr eigenes Netz. Der Versuch, ein Profil eines anderen Anbieters zu aktivieren (z. B. einer Reise-eSIM), liefert dann „eSIM nicht unterstützt" oder eine Meldung wie „Netzbetreiber unterstützt dies nicht". Beachten Sie, dass manche Netzbetreiber nur den physischen SIM-Slot sperren und den eSIM-Slot offenlassen, aber viele sperren beides.

**So prüfen Sie es:** **Einstellungen > Allgemein > Info > Netzbetreiber-Sperre**. Dort sollte **„Keine SIM-Beschränkungen"** stehen. Wenn dort „SIM gesperrt" steht, brauchen Sie eine Entsperrung. Den vollständigen Ablauf zur Netzbetreiber-Sperre finden Sie in Abschnitt 3.

### Ihre iOS-Version ist veraltet

Die Unterstützung digitaler SIMs hat sich ab iOS 16 stark verbessert. Unter iOS 12 oder 13 lassen sich manche moderne Netzbetreiber-Profile schlicht nicht installieren.

**So prüfen Sie es:** **Einstellungen > Allgemein > Softwareupdate**.

**Was tun:** Auf die neueste iOS-Version aktualisieren, alle halb installierten Profile löschen und den QR-Code erneut scannen.

### Dieses iPhone unterstützt keine eSIM auf einem iPhone 14

Ein iPhone 14 (US-Version) sollte immer eSIM unterstützen – das US-Modell hat gar keinen physischen SIM-Slot. Wenn es trotzdem diesen Fehler liefert, liegt ein seltener **eUICC-Hardwarefehler** vor. Kontaktieren Sie den Apple-Support für eine Hardware-Diagnose, statt Einstellungen zu durchforsten.

Die vollständige iPhone-Liste Modell für Modell finden Sie in unserem [iPhone-eSIM-Kompatibilitätsleitfaden](/faq/iphone-11-esim-compatible/).

Samsung-Besitzer sollten den [Samsung Galaxy eSIM-Leitfaden](/faq/samsung-s20-esim-compatible/) prüfen, Pixel-Besitzer den [Google Pixel eSIM-Leitfaden](/faq/google-pixel-6-esim-compatible/).


### eSIM nicht unterstützt: Hardware, Software oder Netzbetreiber

Jeder Fall von „eSIM nicht unterstützt" – auf jedem Handy, bei jedem Netzbetreiber – fällt in eine von drei Kategorien. Die Kategorie zu benennen sagt Ihnen sofort, ob das Problem behebbar ist.

| Kategorie | Wie es aussieht | Behebbar? | Ihr nächster Schritt |
| :--- | :--- | :--- | :--- |
| **Hardware** | Keine EID bei `*#06#`; iPhone vor 2018; China-Modell (CH/A); Budget-Android ohne eUICC | ❌ Nein | Physische SIM oder Handy-Upgrade |
| **Software** | EID vorhanden, aber die Funktion ist versteckt oder das OS ist alt (vom Netzbetreiber deaktiviertes Samsung S20 FE, veraltetes iOS) | ✅ Meistens | OS aktualisieren oder Netzbetreiber-Beschränkung entfernen |
| **Netzbetreiber** | EID vorhanden, Menü sichtbar, aber die Aktivierung des Tarifs eines anderen Anbieters schlägt fehl | ✅ Ja | Gerät entsperren (Abschnitt 3), dann neu scannen |

**Der 30-Sekunden-Routing-Test:** `*#06#` wählen.
- **Keine EID** → Hardware. Hören Sie hier auf – nichts, was Sie installieren, ändert das.
- **EID vorhanden, aber der „eSIM hinzufügen"-Ablauf schlägt fehl** → Software oder Netzbetreiber. Beides ist behebbar, lesen Sie also weiter.

Dieses eine Ergebnis führt Sie bei etwa 9 von 10 „nicht unterstützt"-Meldungen, die wir bei Roami sehen, zur richtigen Lösung.


## Der Leitfaden für China-, Hongkong- und Macau-Modelle

Wo Ihr Handy verkauft wurde, bestimmt, welche Hardware es hat. Dies ist der schnellste Weg, eine regionale Keine-eSIM-Situation auszuschließen oder zu bestätigen.

### China-Modell-Kurzreferenz

| Ende der Modellnummer | Region | eSIM-Unterstützung |
| :--- | :--- | :--- |
| **CH/A** | Festlandchina | ❌ Nein (Dual-physische SIM) |
| **HK/A** | Hongkong | ⚠️ Unterschiedlich (manche Modelle unterstützen physische + digitale SIM) |
| **LL/A** | USA | ✅ Ja |
| **ZA/A** | Kanada | ✅ Ja |
| **J/A** | Japan | ✅ Ja (außer manchen Netzbetreiber-Modellen) |
| **B/A** | UK/Europa | ✅ Ja |
| **X/A** | Australien/Neuseeland | ✅ Ja |

### eSIM-Status von iPhones aus Festlandchina

- **Alle in Festlandchina verkauften iPhones** (außer der iPhone-16-Serie) haben eine Dual-physische SIM und keine eSIM.
- **Chinesische Android-Handys** – Xiaomi, Oppo, Vivo, Huawei – die im Inland verkauft werden, haben den eSIM-Chip typischerweise ebenfalls nicht.
- **Wenn Sie ein internationales Handy nach China mitbringen:** Es funktioniert mit internationalen Reise-eSIMs, aber die lokalen chinesischen Netzbetreiber bieten Touristen keine eSIM an – Sie brauchen also weiterhin einen Reisetarif von einem Anbieter wie Roami.

### eSIM-Status von iPhones aus Hongkong

- **iPhone-Modelle:** Hongkong-iPhones unterstützen in der Regel **eSIM + physische SIM** (je eines) oder je nach genaurem Modell eine Dual-physische SIM. Prüfen Sie Ihr Modell-Suffix.
- **Netzbetreiber:** Manche Hongkonger Netzbetreiber (CMHK, 1010, SmarTone) bieten eSIM für Postpaid-Kunden an, aber Prepaid-eSIM ist selten.
- **Reisende:** Eine internationale Reise-eSIM ist einfacher und zuverlässiger, als zu versuchen, eine lokale Hongkonger eSIM zu bekommen.

### eSIM-Status von iPhones aus Macau

- **Ähnlich wie Hongkong:** Die meisten Macau-iPhones werden aus Hongkong importiert und unterstützen eSIM + physische SIM.
- **CTM** (Macaus wichtigster Netzbetreiber) bietet eSIM für Postpaid-Kunden an, aber nicht für Touristen.

### Warum chinesische Modelle auf eSIM verzichten

Es ist keine Kostensparmaßnahme von Apple oder den Android-Marken – es ist die Regulierung. Festlandchina verlangt, dass dort verkaufte Handys für Dual-physische SIM zertifiziert sind, und ein umschreibbares eSIM-Profil passt nicht in diesen Inlandsrahmen. Das praktische Ergebnis:

- **Apple** liefert Festlandchina-iPhones mit **zwei physischen Nano-SIM-Slots** und ohne eUICC-Chip aus.
- **Xiaomi, Oppo, Vivo, Honor und Huawei** streichen eSIM aus ihren China-Inlandsversionen, selbst wenn die globale Version desselben Handys sie hat.
- **Ein China-Handy, das ins Ausland mitgenommen wird, bekommt eSIM trotzdem nicht zurück** – es fehlt die Hardware, es ist keine Software-Sperre. Umgekehrt gilt: Ein internationales Handy, das nach China kommt, funktioniert mit Reise-eSIMs, aber die drei großen chinesischen Netzbetreiber (China Mobile, China Unicom, China Telecom) verkaufen Touristen keine eSIM.

**Die Lösung:** Wenn Sie das Handy in Festlandchina gekauft haben, planen Sie eine physische Reise-SIM ein – oder kaufen Sie ein Global-Modell. Es gibt keine Entsperrung, keinen Jailbreak und keine App, die den fehlenden Chip hinzufügt.

### Ihr Modell anhand der A-Nummer identifizieren

Das Suffix der Teilenummer (CH/A, LL/A usw.) ist der Schnellfilter, aber die **A-Nummer** ist die präzise ID. Nehmen Sie das iPhone 11 als Muster, dem jede Generation folgt:

| iPhone-11-Modell | Region | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Vereinigte Staaten | ✅ Ja |
| **A2221** | Festlandchina | ❌ Nein (Dual-physische SIM) |
| **A2223** | Hongkong / Macau | ✅ Ja (eSIM + physische SIM) |

**So verwenden Sie es:** Finden Sie Ihre A-Nummer (**Einstellungen > Allgemein > Info > Modellnummer**, dann auf die Nummer tippen, um den A-Präfix-Code anzuzeigen) und gleichen Sie sie mit Apples Modellliste ab. Hat ein Verkäufer ein „entsperrtes globales eSIM-iPhone" beworben, aber die A-Nummer ist ein China-Code, war das Inserat falsch – gehen Sie weiter oder planen Sie eine physische SIM ein.


## Netzbetreiber-Sperre und wie Sie sie entfernen

Eine Netzbetreiber-Sperre ist der zweithäufigste Grund, warum ein völlig fähiges Handy eine eSIM verweigert. Es ist eine Software-Einschränkung, die Ihr Netzbetreiber auf dem Gerät hinterlegt – kein Hardware-Limit.

### Was eine Netzbetreiber-Sperre bewirkt

Wenn ein Handy „SIM-gesperrt" ist, akzeptiert es nur SIMs und eSIM-Profile des Netzbetreibers, der es verkauft hat. Der Versuch, eine Reise-eSIM eines anderen Anbieters hinzuzufügen, löst „eSIM nicht unterstützt" oder „SIM nicht unterstützt" aus. Der eingebettete Chip ist vorhanden und funktioniert – der Netzbetreiber blockiert nur den Zugriff darauf.

### So prüfen Sie Ihren Sperrstatus

1. Auf dem iPhone: **Einstellungen > Allgemein > Info > Netzbetreiber-Sperre**. Dort sollte **„Keine SIM-Beschränkungen"** stehen.
2. Auf Android (Samsung): **Einstellungen > Telefoninfo > Status** und nach dem SIM-Sperren-Feld suchen.
3. Auf Android (Pixel): **Einstellungen > Telefoninfo > SIM-Status**.

### Entsperrrichtlinien der US-Netzbetreiber

| Netzbetreiber | Entsperrvoraussetzung |
| :--- | :--- |
| **AT&T** | Gerät vollständig bezahlt und 60 Tage aktiv, bevor es entsperrt wird |
| **T-Mobile** | Gerät bezahlt und 40 Tage aktiv; Anfrage über die T-Mobile-App |
| **Verizon** | Die meisten Handys entsperren sich 60 Tage nach dem Kauf automatisch |

### So entsperren Sie Ihr Gerät

1. **Entsperrung bei Ihrem Netzbetreiber anfordern** – sie ist in der Regel kostenlos, sobald das Handy bezahlt ist, und die meisten US-Netzbetreiber lassen Sie die Anfrage über die App oder ein Webformular stellen.
2. **Auf Bestätigung warten** – der Netzbetreiber überträgt die Entsperrung; möglicherweise müssen Sie das Handy neu starten.
3. **Verifizieren** – das Feld „Netzbetreiber-Sperre" erneut prüfen, bis dort „Keine SIM-Beschränkungen" steht.
4. **Dann aktivieren** – sobald entsperrt, den QR-Code Ihrer Reise-eSIM erneut scannen.

> **Hinweis:** Eine Netzbetreiber-Sperre ist eine Einschränkung auf Handye-, nicht auf Tarifebene. Die Entsperrung Ihres Geräts kündigt Ihren Vertrag nicht – sie gibt dem Gerät nur die Freiheit, SIMs und eSIMs anderer Anbieter zu nutzen.

### Weitere US-Netzbetreiber und MVNO-Entsperrrichtlinien

Die großen drei sind nicht die einzigen, auf die man trifft. Prepaid- und MVNO-Handys sind oft länger gesperrt, und das kann der hinterhältige Grund sein, warum sich ein „Schnäppchen"-Reise-eSIM nicht installieren lässt.

| Netzbetreiber | Entsperrvoraussetzung |
| :--- | :--- |
| **Cricket Wireless** | 6 Monate bezahlter Dienst (außer zum vollen Vollpreis gekauft) |
| **Metro by T-Mobile** | 180 Tage bezahlter Dienst |
| **Boost Mobile** | 12 Monate bezahlter Dienst |
| **Spectrum Mobile** | 60 Tage |
| **Xfinity Mobile** | 60 Tage aktiven Dienstes |
| **US Cellular** | 120 Tage |
| **Visible (Verizon Prepaid)** | 60 Tage bezahlten Dienstes |

### Was Sie für eine Entsperranfrage benötigen

Entsperrungen sind kostenlos, sobald Sie berechtigt sind, aber die Anfrage erfordert ein paar Dinge:

1. **Ihre IMEI** – `*#06#` wählen und die 15-stellige Nummer notieren (nicht die EID).
2. **Ihre Kontonummer und Kontopin/Passwort** – finden Sie diese in der Netzbetreiber-App oder auf einer aktuellen Rechnung.
3. **Das Handy vollständig bezahlt** – Netzbetreiber entsperren kein Gerät mit offener Ratenzahlung.
4. **Voraussetzungen erfüllt** – jeder Netzbetreiber hat ein Mindestfenster aktiver Tage (siehe die Tabellen oben).

**Wo Sie anfragen:** AT&T und T-Mobile haben Online-Entsperrportale und In-App-Formulare; Verizon entsperren die meisten Handys nach 60 Tagen automatisch, ohne dass eine Anfrage nötig ist. Bei MVNOs (Cricket, Metro, Boost) nutzen Sie deren App oder rufen Sie den Support direkt an.

**Zu Drittanbieter-„Sofort-Entsperr"-Diensten:** Sie sind ein Glücksspiel. Viele nutzen geleakte Netzbetreiber-Tools, die das Handy wieder sperren, und einige sind schlicht Betrug. Wenn Ihr Netzbetreiber sagt, Sie seien noch nicht berechtigt, warten Sie es ab – zahlen Sie keinen Fremden $20 dafür, es „für" Sie zu erledigen.


### Die drei verschiedenen Sperren

Leute sagen „mein Handy ist gesperrt" und meinen drei völlig verschiedene Dinge. Jede braucht eine andere Lösung, deshalb lohnt es sich, sie zu trennen.

| Sperrtyp | Was es ist | Wo Sie es sehen | Lösung |
| :--- | :--- | :--- | :--- |
| **Handysperre (Aktivierungssperre)** | Diebstahlschutz: iCloud-Aktivierungssperre (iPhone) oder Google FRP (Android), verknüpft mit dem Konto des Vorbesitzers | „Aktivierungssperre" / „Dieses iPhone ist mit einer Apple-ID verknüpft" bei der Einrichtung, oder eine Google-Konto-Abfrage auf Android | Nur der Originalbesitzer kann sie entfernen – kaufen Sie niemals ein Handy, das sie noch anzeigt |
| **Regionssperre** | Ein Hardwareunterschied je nach Verkaufsregion (China-Modelle haben keinen eUICC-Chip) | Keine EID bei `*#06#`; Modellnummer endet auf CH/A | Kann nicht entfernt werden – physische SIM oder ein anderes Handy verwenden |
| **Netzbetreiber-Sperre** | Eine Software-Einschränkung des Netzbetreibers, die das Handy auf sein Netz beschränkt | **Einstellungen > Allgemein > Info > Netzbetreiber-Sperre** zeigt „SIM gesperrt" | Entsperrung beim Netzbetreiber anfordern (Abschnitt 3) |

**Die schnelle Unterscheidung:**
- Eine **Apple-ID- oder Google-Konto-Abfrage** erscheint = Handy-/Aktivierungssperre (ein Besitzerproblem).
- **Gar keine EID** = Regionssperre (ein Hardwareproblem).
- **EID vorhanden + „SIM gesperrt"** = Netzbetreiber-Sperre (behebbar, kostenlos sobald berechtigt).

Die meisten „eSIM funktioniert nicht"-Beschwerden, die den 2-Minuten-Check überstehen, sind vom Typ Netzbetreiber-Sperre – und die ist fast immer lösbar.


## Mein Handy unterstützt eSIM nicht, sollte es aber

Manche Geräte werden mit eSIM beworben, doch bestimmte Regional- oder Netzbetreiber-Varianten streichen die Funktion stillschweigend. Das sind die üblichen Verdächtigen:

- **Samsung Galaxy S20 FE** – US-Carrier-gesperrte Versionen haben die Funktion per Software deaktiviert, um Kosten zu sparen, obwohl das globale Modell sie unterstützt.
- **Google Pixel 4a (Japan-Versionen)** – Docomo und SoftBank deaktivieren eSIM auf ihren Geräten wegen lokaler Netzbetreiber-Vereinbarungen.
- **Xiaomi Redmi Note Serie** – keine hat den eUICC-Chip, trotz Online-Gerüchten. Xiaomi reserviert eSIM für seine Flaggschiffe.
- **iPhone 8 / 8 Plus / X** – Hardware vor dem eUICC-Zeitalter; Apple fügte den Chip erst ab der XS/XR-Generation hinzu.
- **Samsung Galaxy A Serie** – nur ausgewählte Modelle (A54, A53) haben den Chip; die meisten A-Serien nicht.

### Handys, die eSIM-kompatibel aussehen, es aber nicht sind

| Handy-Modell | eSIM-Unterstützung | Warum? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Nein | Hardware vor eUICC |
| **iPhone XS/XR (China)** | ❌ Nein | Dual-physische-SIM-Hardware |
| **Samsung Galaxy S20 FE (US-Carrier)** | ❌ Nein | Vom Netzbetreiber deaktiviert |
| **Samsung Galaxy A13 / A23** | ❌ Nein | Einsteigermodell, kein eUICC |
| **Google Pixel 4a (Japan)** | ❌ Nein | Vom Netzbetreiber deaktiviert (Docomo/SoftBank) |
| **Google Pixel 3 (manche Modelle)** | ⚠️ Unterschiedlich | Region prüfen; manche haben es, manche nicht |
| **Xiaomi Redmi Note Serie** | ❌ Nein | Keine eUICC-Hardware |
| **Xiaomi 12/13 (China)** | ❌ Nein | China-Inlandsversionen haben die Hardware nicht |
| **OnePlus Nord (China-Version)** | ❌ Nein | China-Region hat die Hardware nicht |
| **Huawei (alle China-Inlandsgeräte)** | ❌ Nein | Keine Google-Dienste, keine eSIM-Hardware |
| **Motorola G Serie (die meisten)** | ❌ Nein | Budget-Modelle ohne eUICC |

**Was tun:** Bevor Sie irgendein Handy kaufen, wählen Sie darauf `*#06#` (wenn Sie es in der Hand haben), um die EID zu bestätigen, oder prüfen Sie die IMEI über einen Online-eSIM-Kompatibilitätschecker. Die **[vollständige Liste der eSIM-kompatiblen Handys (2026)](/compatibility/)** ist Ihre beste Ressource, um jedes Modell zu verifizieren.


## Android-eSIM-Kompatibilität nach Marke

Wenn Sie Android nutzen, ist die größte Variable nicht das Betriebssystem – sondern ob *Ihre konkrete Variante* mit dem Chip ausgeliefert wurde. Hier das Bild Modell für Modell.

### Samsung Galaxy eSIM-Kompatibilität

| Modell | eSIM-Unterstützung | Hinweise |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Ja | Alle globalen Varianten |
| **Galaxy S20 FE** | ❌ Nein (US-Carrier) / ✅ Ja (global) | Modellnummer prüfen |
| **Galaxy A54 / A53** | ✅ Ja | Nur ausgewählte A-Serien |
| **Galaxy A13 / A23 / A33** | ❌ Nein | Budget-Modelle |
| **Galaxy Z Fold / Flip** | ✅ Ja | Alle Modelle |
| **Galaxy Note 20** | ✅ Ja | Alle Modelle |

**So prüfen Sie es bei Samsung:** `*#06#` wählen und nach einer EID suchen, oder **Einstellungen > Verbindungen > SIM-Karten-Manager** öffnen und nach „eSIM hinzufügen" / „Mobilfunktarif hinzufügen" suchen. Ist beides nicht vorhanden, hat Ihre Variante die Funktion nicht. Mehr dazu in unserem [Samsung-eSIM-Kompatibilitätsleitfaden](/faq/samsung-s20-esim-compatible/) und beim [Samsung-Support](https://www.samsung.com/us/support/).

### Google Pixel eSIM-Kompatibilität

| Modell | eSIM-Unterstützung | Hinweise |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Ja | Erster Pixel mit der Funktion |
| **Pixel 3a / 3a XL** | ✅ Ja | – |
| **Pixel 4 / 4 XL** | ✅ Ja | – |
| **Pixel 4a** | ⚠️ Unterschiedlich | Japan-Netzbetreiber-Versionen = NEIN |
| **Pixel 5 / 5a** | ✅ Ja | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Ja | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Ja | – |
| **Pixel 8 / 8 Pro** | ✅ Ja | – |

**So prüfen Sie es beim Pixel:** `*#06#` für die EID wählen, oder **Einstellungen > Netzwerk & Internet > SIMs** öffnen und nach „Stattdessen SIM herunterladen?" suchen. Fehlt es, ist die Variante gesperrt oder hat keinen Chip. Mehr dazu in unserem [Pixel-eSIM-Kompatibilitätsleitfaden](/faq/google-pixel-6-esim-compatible/) und auf der Seite [Google-Support — eSIM auf dem Pixel](https://support.google.com/pixelphone/answer/7086887).

### OnePlus eSIM-Kompatibilität

OnePlus hat eSIM erst ab dem **OnePlus 12** hinzugefügt. Das OnePlus 11, 10, 9 und die Nord-Serie haben die Hardware nicht.

| Modell | eSIM-Unterstützung |
| :--- | :--- |
| **OnePlus 12** | ✅ Ja |
| **OnePlus 11** | ❌ Nein |
| **OnePlus 10** | ❌ Nein |
| **OnePlus 9** | ❌ Nein |
| **OnePlus Nord Serie** | ❌ Nein (außer manche EU-Varianten) |

### Xiaomi, Huawei, Motorola und andere eSIM-Marken

- **Xiaomi** – Flaggschiff-Modelle (Xiaomi 12/13 globale Versionen) unterstützen möglicherweise eSIM, aber China-Inlandsgeräte nicht. Die Redmi-Note-Linie hat gar kein eUICC.
- **Huawei** – Die Unterstützung ist auf wenige Modelle beschränkt (P40, Mate 40 und neuer); viele Handys nach 2020 haben wegen US-Sanktionen keine eSIM. Prüfen Sie **Einstellungen > Mobilfunknetz > eSIM** – fehlt die Option, wird sie nicht unterstützt.
- **Motorola** – Die meisten G-Serien-Budgetmodelle haben keinen Chip; die Moto G Power und Edge-Linien variieren je nach Region.

Der universelle Test für alle diese Geräte ist derselbe: `*#06#` wählen und nach der EID suchen.


## Android vs. iPhone: eSIM-Fähigkeitscheck

Derselbe 2-Minuten-Check, zwei verschiedene Menüs. Geben Sie diese Tabelle einem Freund auf der anderen Plattform.

| Prüfung | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | `*#06#` wählen | `*#06#` wählen | `*#06#` wählen |
| **eSIM-hinzufügen-Menü** | **Einstellungen > Mobilfunk > eSIM hinzufügen** | **Einstellungen > Verbindungen > SIM-Karten-Manager > eSIM hinzufügen** | **Einstellungen > Netzwerk & Internet > SIMs > Stattdessen SIM herunterladen?** |
| **Modellnummer** | **Einstellungen > Allgemein > Info > Modellnummer** | **Einstellungen > Telefoninfo > Modellnummer** | **Einstellungen > Telefoninfo > Modell** |
| **Sperrstatus** | **Einstellungen > Allgemein > Info > Netzbetreiber-Sperre** | **Einstellungen > Telefoninfo > Status** | **Einstellungen > Telefoninfo > SIM-Status** |

**Der eine entscheidende Unterschied:** Beim iPhone ist eSIM-Unterstützung alles oder nichts, je nach Generation und Region – leicht vorhersagbar. Bei Android ist es abhängig von der Variante, sodass zwei „gleiche" Galaxy- oder Pixel-Handys sich unterschiedlich verhalten können. Im Zweifel bei Android: Verlassen Sie sich auf die `*#06#`-EID statt auf das Datenblatt.


## Ihr Handy unterstützt eSIM, aber die Aktivierung schlägt fehl

Wenn Ihr Handy den Hardware-Check oben bestanden hat und Sie trotzdem eine bestimmte Fehlermeldung sehen, ist das Problem nicht mehr die Kompatibilität – es ist ein Aktivierungs- oder Netzwerkproblem. Dafür gibt es eine eigene Referenz:

- **„Aktivierung fehlgeschlagen", „Kein Dienst", „QR ungültig", „Mobilfunktarif kann nicht hinzugefügt werden", Wiederherstellungsfehler 4013/4014 und alle anderen Bildschirmfehler** → siehe den [eSIM-Deep-Troubleshooting-Guide 2026](/faq/esim-deep-troubleshooting-guide-2026/), der jede Meldung einer Lösung zuordnet.
- **APN-Einstellungen und die vollständige Anbieter-APN-Tabelle** → die maßgebliche APN-Referenz findet sich ebenfalls im [eSIM-Deep-Troubleshooting-Guide 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Schritt-für-Schritt-Aktivierung (QR / manuell / Netzbetreiber-App)** → siehe [Wie man eine eSIM aktiviert](/faq/how-to-activate-an-esim/).
- **Ein Profil auf ein neues Handy übertragen** → siehe [So übertragen Sie eine eSIM zwischen iPhone und Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **iPad- und Apple-Watch-Einrichtung** → siehe den [iPad- und Apple-Watch-eSIM-Leitfaden](/faq/ipad-apple-watch-esim-support-guide/).


## Häufig gestellte Fragen

**Warum sagt mein iPhone XR „eSIM nicht unterstützt", obwohl es funktionieren sollte?**
Wenn Ihre Modellnummer auf CH/A endet, ist es ein Festlandchina-Gerät ohne eSIM-Chip. Andernfalls prüfen Sie den Netzbetreiber-Sperrstatus – ein gesperrtes XR lehnt die Profile anderer Anbieter ab.

**Kann ich eSIM auf ein iPhone 7 erzwingen?**
Nein. Das iPhone 7 (ebenso 6s, 8 und X) stammt aus der Zeit vor dem eUICC-Chip. Kein Software-Hack kann Hardware hinzufügen, die nicht existiert.

**Was ist der Unterschied zwischen EID und IMEI?**
Die IMEI (15 Ziffern) identifiziert Ihr Handy-Modell – jedes Handy hat eine. Die EID (32 Ziffern) identifiziert den eingebetteten SIM-Chip – nur eSIM-fähige Handys haben eine. Zeigt `*#06#` keine EID, kann Ihr Handy keine eSIM nutzen.

**Was bedeutet „EID nicht gefunden", wenn ich `*#06#` wähle?**
Es bedeutet, dass Ihrem Handy der eUICC-Hardware-Chip für digitale SIM-Profile fehlt. Es ist eine Hardware-Einschränkung, die kein Software-Update beheben kann.

**Mein Handy unterstützt keine eSIM – kann ich trotzdem eine Reise-eSIM nutzen?**
Nein. Sie brauchen den eingebetteten Chip, also ist eine physische SIM Ihre einzige Option. Viele Anbieter (auch Roami) verkaufen zusätzlich physische SIM-Karten.

**Woher weiß ich, ob mein Samsung Galaxy eSIM hat?**
`*#06#` wählen – erscheint eine EID, wird es unterstützt. Sie können auch unter Einstellungen > Verbindungen > SIM-Karten-Manager nach einer Option „eSIM hinzufügen" suchen. Manche US-Carrier- und A-Serien-Varianten verstecken sie.

**Unterstützt das OnePlus 11 eSIM?**
Nein. OnePlus hat eSIM erst ab dem OnePlus 12 hinzugefügt. Das 11, 10, 9 und die Nord-Serie haben die Hardware nicht.

**Wie prüfe ich, ob mein iPhone netzwerkgesperrt ist?**
Einstellungen > Allgemein > Info > Netzbetreiber-Sperre. „Keine SIM-Beschränkungen" bedeutet entsperrt. Alles andere bedeutet, dass es auf diesen Netzbetreiber gesperrt ist.

**Welche iPad-Modelle unterstützen eSIM?**
iPad Pro (3. Generation und neuer), iPad Air (3. Generation und neuer), iPad (10. Generation und neuer) und iPad mini (6. Generation und neuer) – nur Mobilfunk-Modelle. Nur-WLAN-iPads haben keine eSIM-Hardware.

**Wo finde ich eine Liste eSIM-kompatibler Handys?**
Die [vollständige Liste der eSIM-kompatiblen Handys (2026)](/compatibility/) umfasst iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi und mehr.

**Was ist der Unterschied zwischen einer Handysperre und einer Netzbetreiber-Sperre?**
Eine Handysperre (Aktivierungssperre) ist Diebstahlschutz – iCloud auf dem iPhone, Google FRP auf Android – und nur der Originalbesitzer kann sie entfernen. Eine Netzbetreiber-Sperre ist eine Netzbeschränkung, die Ihr Netzbetreiber kostenlos aufhebt, sobald das Handy bezahlt und berechtigt ist.

**Warum haben chinesische Handys keine eSIM?**
Festlandchina verlangt, dass Inlands-Handys für Dual-physische SIM zertifiziert sind, deshalb liefern Apple und Android-Marken China-Geräte mit zwei Nano-SIM-Slots und ohne eUICC-Chip aus. Es ist Hardware – sie lässt sich nicht nachträglich aktivieren.

**Kann ich eSIM zu einem Handy ohne EID hinzufügen?**
Nein. Der eUICC-Chip ist auf das Mainboard gelötet. Es gibt keinen Adapter, keine App, keinen Jailbreak und kein Software-Update, das nie installierte Hardware hinzufügt.

**Behebt ein Werksreset „eSIM nicht unterstützt"?**
Nein. Ein Reset ändert keine Hardware und entfernt keine Netzbetreiber-Sperre. Er kann allerdings ein beschädigtes, halb installiertes Profil beseitigen – einen Versuch ist es also bei Softwareproblemen wert, nach einer Sicherung.

**Wofür wird die EID verwendet, wenn ein Anbieter danach fragt?**
Mit der EID kann Ihr Anbieter ein bestimmtes eSIM-Profil an den Chip Ihres Handys binden, bevor Sie scannen. So wissen sie, dass der Tarif für genau Ihr Gerät bestimmt ist – sehen Sie es als die „Adresse" der eSIM.

**Woher weiß ich, ob mein Handy entsperrt ist, ohne eine SIM einzusetzen?**
iPhone: Einstellungen > Allgemein > Info > Netzbetreiber-Sperre – „Keine SIM-Beschränkungen" bedeutet entsperrt. Android: Einstellungen > Telefoninfo > Status (oder SIM-Status) und nach Formulierungen wie „SIM gesperrt" oder „SIM nicht gesperrt" suchen.

👉 **Bestätigt, dass Ihr Handy fähig ist?** Holen Sie sich eine [eSIM für die USA](/united-states-esim/) oder eine [eSIM für Japan](/japan-esim/), um online zu gehen.


## Testen Sie Ihre Kompatibilität mit einer kostenlosen eSIM

Der schnellste Weg zu bestätigen, dass Ihr Handy eSIM wirklich nutzen kann, ist die Installation einer **kostenlosen Test-eSIM**. Sie kostet nichts, dauert 2 Minuten, und wenn sie sich installiert und verbindet, ist Ihre Hardware einsatzbereit.

👉 [**Jetzt Ihre kostenlose Roami-eSIM holen**](/free-esim/)

---

*Falls Ihr spezifisches Gerät oder Ihr Fehler hier nicht behandelt wird, kontaktieren Sie uns – wir helfen Ihnen zu bestätigen, ob Ihr Handy eSIM-fähig ist.*
## Quellen

- [GSMA — eSIM-Spezifikation (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM auf dem iPhone einrichten](https://support.apple.com/en-us/HT212780)
- [Google-Support — Eine eSIM einrichten](https://support.google.com/pixelphone/answer/14853135)
- [Google-Support — Android eSIM](https://support.google.com/android/answer/11241215)
