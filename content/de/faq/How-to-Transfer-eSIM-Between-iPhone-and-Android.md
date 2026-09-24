---
title: "So überträgst du ein eSIM zwischen iPhone und Android"
h1_title: "So überträgst du ein eSIM zwischen iPhone und Android"
description: "Verschiebe dein eSIM mit einer Anbieter-App oder einem neu ausgestellten QR-Code zwischen iPhone und Android. Schritt-für-Schritt-Anleitungen für beide Richtungen sowie Lösungen für häufige Übertragungsfehler."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM plattformübergreifende Übertragung", "eSIM Übertragungsfehler", "iOS 18 eSIM", "eSIM Anbietersperre", "eSIM Bestätigungscode", "eSIM kein Dienst", "eSIM APN-Einstellungen", "eSIM Fehlerbehebung", "eSIM Aktivierung fehlgeschlagen", "eSIM zwischen iPhone und Android übertragen", "eSIM lässt sich nicht auf neues iPhone übertragen", "Orange eSIM Übertragung"]
date: 2026-09-20T00:00:00Z
lastmod: 2026-09-20T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Fehlerbehebung", "Reise-Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
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

# Sidebar: Free eSIM offers
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

# Sidebar: Popular questions
sidebar_questions:
  title: "Beliebte Fragen"
  items:
    - question: "Was ist eine eSIM-Aktivierung und wie funktioniert sie?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Wie aktiviert man ein eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Wie aktiviert man eSIM auf dem iPhone (alle Modelle)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Aktuelle eSIM-Kompatibilitätsliste"
      url: "/compatibility/"
---


> **Hinweis der Redaktion:** Ein eSIM lässt sich nur dann zwischen iPhone und Android übertragen, wenn dein Anbieter plattformübergreifende Übertragung unterstützt – und die meisten Reise-eSIMs lassen sich gar nicht verschieben. Die folgenden Methoden basieren auf offiziellen Anbieterdokumentationen und konzentrieren sich auf Übertragungen, die heute tatsächlich funktionieren. Prüfe zuerst den Abschnitt zu unterstützten Anbietern, um zu sehen, ob dein Tarif infrage kommt.

Hier vorab die Realität: Ein eSIM lässt sich in der Regel nicht direkt zwischen iPhone und Android verschieben, da die beiden Plattformen kein gemeinsames Übertragungsprotokoll teilen. Die Workarounds sind aber einfach – lass deinen Anbieter das Profil als QR-Code neu ausstellen oder nutze die Anbieter-App, sofern unterstützt. Beide Richtungen sowie die Ausnahmen bei Reise-eSIMs findest du unten.

## Was ist eine eSIM-Übertragung?

**Finde unten dein Szenario und springe direkt zur passenden Methode.**

| Dein Szenario | Übertragbar? | Beste Methode | Wohin gehen |
| :--- | :--- | :--- | :--- |
| **iPhone → neues iPhone** | ✅ Ja (immer) | Apple Schnellübertragung | [Plattforminterne Übertragung](#esim-auf-ein-neues-iphone-oder-samsung-uebertragen) |
| **Samsung → neues Samsung** | ✅ Ja (meistens) | Samsung Smart Switch | [Plattforminterne Übertragung](#esim-auf-ein-neues-iphone-oder-samsung-uebertragen) |
| **Android → iPhone (Anbieter unterstützt App-Übertragung)** | ✅ Ja | Anbieter-App | [Methode A](#esim-uebertragung-von-android-auf-iphone) |
| **Android → iPhone (Anbieter unterstützt keine App)** | ✅ Ja | QR-Code als Rückfallebene | [Methode B](#esim-uebertragung-von-iphone-auf-android) |
| **iPhone → Android (Anbieter unterstützt)** | ✅ Ja | Anbieter-App oder QR-Code | [Methode B](#esim-uebertragung-von-iphone-auf-android) |
| **Reise-eSIM (Roami, Airalo, Holafly)** | ❌ Nein | Neuen Tarif auf dem neuen Gerät kaufen | [Warum Reise-eSIMs nicht übertragbar sind](#warum-reise-esims-nicht-uebertragen-werden-koennen) |
| **Anbieter unterstützt keine Übertragung** | ✅ Ja (Rückfallebene) | Anbieter für QR-Code kontaktieren | [Rückfallebenen-Methoden](#rueckfallebenen-wenn-plattformuebergreifende-esim-uebertragung-nicht-unterstuetzt-wird) |

> **Grundregel:** Es gibt **keinen integrierten iOS-zu-Android-eSIM-Übertragungsbutton** wie bei iPhone zu iPhone. Die plattformübergreifende Übertragung läuft immer **über deinen Anbieter** – entweder über dessen App oder durch Anfordern eines neuen QR-Codes. Reise-eSIMs funktionieren **nur auf einem einzigen Gerät** – kaufe auf deinem neuen Telefon eine neue.

**Übertragung nicht möglich?** Die meisten Reise-eSIMs (Roami, Airalo, Holafly) funktionieren **nur auf einem einzigen Gerät** – du musst auf deinem neuen Telefon einen neuen Tarif kaufen. Bei eSIMs lokaler Anbieter funktioniert die QR-Code-Rückfallebene immer.

> **Wesentliche Einschränkung:** Es gibt **keine integrierte iOS-zu-Android-eSIM-Übertragung** – du musst über deinen Anbieter gehen. Diese Anleitung führt dich durch jede unterstützte Methode.

Neu beim Thema eSIM-Einrichtung? Unser [Leitfaden zur eSIM-Aktivierung](/faq/how-to-activate-an-esim/) erklärt die Installation von Grund auf. Wenn die Übertragung mittendrin fehlschlägt, ordnet der [eSIM-Deep-Dive zur Fehlerbehebung](/faq/esim-deep-troubleshooting-guide-2026/) jede Fehlermeldung einer Lösung zu.


## Welche eSIM-Übertragungsmethode solltest du verwenden?

| Deine Situation | Beste Methode | Zeit | Anbieter nötig? |
| :--- | :--- | :--- | :--- |
| **Wechsel iPhone ↔ iPhone** | Apple Schnellübertragung (Einstellungen > Mobilfunk > eSIM hinzufügen > Übertragen) | 2 Min. | Nein (Apple übernimmt es) |
| **Wechsel Android ↔ Android (Samsung zu Samsung usw.)** | Markenspezifische Übertragung (Samsung: SIM-Manager > eSIM hinzufügen > Übertragen) | 2 Min. | Nein (Marke übernimmt es) |
| **Wechsel iPhone ↔ Android (iOS 18 / Android 16+)** | Übertragung über Anbieter-App | 3–5 Min. | Ja |
| **Wechsel iPhone ↔ Android (älteres Betriebssystem)** | Vom Anbieter neu ausgestellter QR-Code | 5–10 Min. | Ja |
| **Reise-eSIM (Roami, Airalo, Holafly)** | ❌ Nicht übertragbar – neuen Tarif auf dem neuen Gerät kaufen | – | Nein – Anbieter erlaubt es nicht |
| **Dein Anbieter unterstützt keine Übertragung** | QR-Code-Rückfallebene (Anbieter anrufen) | 10–20 Min. | Ja |


## Kompletter eSIM-Übertragungsleitfaden

Hier ist die Schritt-für-Schritt-Fahrkarte für alle, die ein eSIM auf ein neues Gerät verschieben wollen.

| Schritt | Was du denkst | Was zu tun ist | Wo du es findest |
| :--- | :--- | :--- | :--- |
| **1. Szenario bestimmen** | „Welche Art von Wechsel mache ich?" | Klären: gleiches Ökosystem (iOS→iOS / Android→Android) oder plattformübergreifend (iOS↔Android)? | [Schnelle Entscheidungsübersicht oben](#welche-esim-uebertragungsmethode-solltest-du-verwenden) |
| **2. Betriebssystemversionen prüfen** | „Sind meine Telefone aktuell genug?" | iPhone muss iOS 18+ sein, Android muss Android 16+ sein für native plattformübergreifende Übertragung. | Falls nicht, zuerst aktualisieren. |
| **3. Anbietersperre prüfen** | „Ist mein Telefon an einen Anbieter gesperrt?" | Einstellungen > Allgemein > Info > Anbietersperre muss „Keine SIM-Beschränkungen" anzeigen. | [Voraussetzungen unten](#was-du-brauchst-bevor-du-eine-esim-uebertragung-startest) |
| **4. Anbieter-Support prüfen** | „Erlaubt mein Anbieter das?" | Anbieter-App öffnen und nach eSIM-Übertragungsoption suchen. Oder anrufen und fragen. | [Abschnitt zu unterstützten Anbietern unten](#anbieter-die-plattformuebergreifende-esim-uebertragung-unterstuetzen) |
| **5. Übertragung durchführen** | „Zeit, die Nummer zu verschieben." | Folge den konkreten Schritten für dein Szenario. | [Methode A](#esim-uebertragung-von-android-auf-iphone) oder [Methode B](#esim-uebertragung-von-iphone-auf-android) |
| **6. Einrichtung nach der Übertragung** | „Meine Nummer ist auf dem neuen Telefon – was jetzt?" | WhatsApp, iMessage, 2FA-Apps reaktivieren und SMS testen. | [Abschnitt nach der eSIM-Übertragung unten](#whatsapp-imessage-und-2fa-nach-einer-esim-uebertragung-einrichten) |
| **7. Bei Fehlern Probleme beheben** | „Es hat nicht geklappt – was nun?" | Fehler prüfen, altes Profil löschen, erneut versuchen oder QR-Code-Rückfallebene nutzen. | [Tabelle zur Fehlerbehebung unten](#warum-ist-meine-esim-uebertragung-gescheitert) |


## Was du brauchst, bevor du eine eSIM-Übertragung startest

**Für beide Richtungen:**
- Beide Geräte müssen ** entsperrt** sein (keine **Anbietersperre**). Prüfung auf dem iPhone: `Einstellungen > Allgemein > Info` → `Anbietersperre` muss „Keine SIM-Beschränkungen" anzeigen. **Das ist der häufigste Grund für fehlgeschlagene Übertragungen** – wenn dein Telefon gesperrt ist, kannst du das eSIM nicht auf das Netz eines anderen Anbieters übertragen.
- Auf beiden Geräten ist **Bluetooth aktiviert**.
- Beide Geräte sind mit **WLAN** verbunden (oder mindestens eines hat eine funktionierende Mobilfunkdatenverbindung).
- Das zu übertragende eSIM ist auf dem Quellgerät **aktiv** (noch nicht gelöscht).
- Dein Anbieter **unterstützt plattformübergreifende Übertragung** (siehe Liste unten). Falls nicht, springe zum Abschnitt Rückfallebenen-Methoden.

Neu bei Profilen und SM-DP+-Servern? Der [eSIM-Aktivierungserklärer](/faq/what-is-esim-activation-and-how-does-it-work/) beschreibt, was tatsächlich passiert, wenn ein Profil zwischen Geräte wandert.
- Dein **eSIM-Profil** ist nicht **abgelaufen** – manche Profile haben begrenzte Gültigkeitszeiträume.

**Für Android → iPhone:**
- iPhone muss auf **iOS 18 oder neuer** sein.
- Android muss auf **Android 16 oder neuer** sein.

**Für iPhone → Android:**
- iPhone muss auf **iOS 18 oder neuer** sein.
- Android muss auf **Android 16 oder neuer** sein.

> 🚨 **Kritische Warnung – nicht vor der Übertragung löschen:**
> **Lösche das eSIM NICHT vom alten Gerät, bevor du die Übertragung startest.** Wenn du das Quell-eSIM zuerst löschst, ist das Profil vom Gerät entfernt, und dein Anbieter kann es möglicherweise nicht mehr auf das neue Gerät übertragen. Dann musst du deinen Anbieter um einen völlig neuen QR-Code bitten – das kann 24–48 Stunden dauern. Starte die Übertragung immer zuerst vom neuen Gerät aus oder lasse das alte eSIM aktiv, bis das neue als funktionierend bestätigt ist.

> 🚨 Wenn dein Gerät ein älteres Betriebssystem hat, erscheint der Menüpunkt einfach nicht. Erst aktualisieren. Falls du es mit einem **abgelaufenen eSIM-Profil** zu tun hast, fordere vor der Übertragung einen neuen QR-Code von deinem Anbieter an.

Die Seite [Google-Support – eSIM auf Pixel](https://support.google.com/pixelphone/answer/7086887) bietet Android-Nutzern, die sich auf die eSIM-Übertragung vorbereiten, weitere Details.


## Warum können Reise-eSIMs nicht übertragen werden?

Das ist die häufigste Frage, die wir bekommen. Hier der Grund:

| Grund | Erklärung |
| :--- | :--- |
| **EID-Bindung** | Jedes eSIM-Profil ist kryptografisch an die **EID** (eUICC Identifier) des Geräts gebunden, auf dem es aktiviert wurde. Die EID deines Telefons ist einzigartig – wie eine Seriennummer für deine eSIM-Hardware. (Die EID siehst du, wenn du auf den meisten Telefonen `*#06#` wählst.) |
| **Einmal-QR-Codes** | Reise-eSIM-QR-Codes sind für **einmalige Nutzung** ausgelegt. Nach dem Scannen wird der QR-Code auf dem Server des Anbieters ungültig. Das ist eine Sicherheitsfunktion gegen Betrug. |
| **Kein Anbieterkonto** | Reise-eSIMs werden als eigenständige Produkte gekauft – du hast kein „Anbieterkonto" mit laufendem Vertrag. Es gibt niemanden, bei dem man sich einloggen und eine Übertragung anfordern könnte. |
| **Für Bequemlichkeit ausgelegt** | Reise-eSIMs tauschen Übertragbarkeit gegen Bequemlichkeit. Du bekommst sofortige Aktivierung ohne Identitätsprüfung, aber der Preis dafür ist, dass das Profil an ein Gerät gebunden ist. |

**Das Fazit:** Wenn du eine Reise-eSIM nutzt (Roami, Airalo, Holafly, Nomad usw.), **verschwende keine Zeit mit Übertragungsversuchen**. Es funktioniert nicht. Kaufe einfach einen neuen Tarif auf deinem neuen Gerät. Die Kosten für ein neues Reise-eSIM sind meist geringer als die Zeit, die du mit dem Versuch verbringen würdest, ein nicht übertragbares Profil zu verschieben.

**Und was ist mit eSIMs von Anbietern (Postpaid/Prepaid)?**
eSIMs von Anbietern sind anders. Du hast ein Konto beim Anbieter, und er kann dein eSIM auf ein neues Gerät neu ausstellen, weil er das Profil auf seinen Servern kontrolliert. Deshalb lassen sich Anbieter-eSIMs übertragen und Reise-eSIMs nicht.


## Welche eSIM-Übertragungsmethode ist die richtige für dich?

| Merkmal | Übertragung per Anbieter-App | Anbieter-QR-Code | Native Übertragung (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Funktioniert plattformübergreifend?** | ✅ Ja | ✅ Ja | ❌ Nein (nur gleiches Ökosystem) |
| **Zeitaufwand** | 3–5 Min. | 5–10 Min. | 1–2 Min. |
| **Einbindung des Anbieters** | Selbstbedienung per App | Anbieter kontaktieren nötig | Keine |
| **Funktioniert auf Reisen?** | ✅ Ja (mit WLAN) | ✅ Ja (mit WLAN) | ✅ Ja |
| **Erfolgsquote** | Hoch (falls unterstützt) | Sehr hoch (funktioniert immer) | Sehr hoch |
| **Am besten für** | Schnelle Übertragung, App-unterstützte Anbieter | Jeder Anbieter, Rückfallebene wenn App versagt | Geräte-Upgrades im selben Ökosystem |
| **Kosten** | Meist kostenlos | Kann $0–25 für die Neuausstellung des QR-Codes kosten | Kostenlos |


## eSIM-Übertragung von Android auf iPhone

Das ist das häufigste Szenario – der Wechsel von einem Samsung, Pixel oder anderem Android auf ein neues iPhone. Der zuverlässigste Weg, deine Nummer zu verschieben, führt über die App deines Anbieters.

### Schritt für Schritt

**Bevor du beginnst:**
- Die App deines Anbieters auf dem neuen iPhone installiert haben (oder bereit sein, dich auf der Anbieter-Website anzumelden).
- Deine Konto-PIN oder Zugangsdaten kennen.
- **Das eSIM noch NICHT vom Android löschen.**

**Auf deinem iPhone (Ziel):**
1. Installiere und öffne die App deines Anbieters (z. B. die T-Mobile-, Verizon- oder AT&T-App).
2. Melde dich an und suche nach einer Option wie „eSIM aktivieren", „Gerät wechseln" oder „Auf neues Gerät übertragen".
3. Folge den Anweisungen und gib die **EID** und **IMEI** deines neuen iPhones ein (zu finden unter `Einstellungen` → `Allgemein` → `Info`).
4. Der Anbieter pusht dein eSIM-Profil auf das neue iPhone oder generiert einen QR-Code zum Scannen.
5. Gehe auf dem iPhone zu `Einstellungen` → `Mobilfunk` → `eSIM hinzufügen` und scanne den generierten QR-Code, falls vorhanden.
6. Warte auf „Aktivierung abgeschlossen". Deine Nummer ist jetzt auf dem iPhone aktiv.
7. **Jetzt** kannst du das eSIM von deinem Android löschen (Einstellungen > Verbindungen > SIM-Manager > eSIM antippen > Entfernen).

**iOS 18 Tipp:** Unter iOS 18 wurde der „eSIM hinzufügen"-Ablauf überarbeitet – mit prominenterem QR-Scanner und besserer Fehlerbehandlung. Während des Profil-Downloads siehst du einen Fortschrittsindikator.

✅ **Fertig.** Deine Nummer ist jetzt auf dem iPhone aktiv. Wenn dein Anbieter keine App anbietet, kontaktiere ihn, um dein eSIM als neuen QR-Code neu ausstellen zu lassen (siehe die Rückfallebenen-Methoden unten).

### Was tun, wenn die App-Übertragung nicht funktioniert?

Nutze die **Anbieter-QR-Code-Rückfallebene**:

- Kontaktiere deinen Anbieter (Chat, Telefon oder Website).
- Teile mit, dass du das Gerät wechselst, und bitte ihn, **dein eSIM als neuen QR-Code neu auszustellen**.
- Scanne den neuen QR-Code auf dem iPhone: `Einstellungen` → `Mobilfunk` → `eSIM hinzufügen`.
- Aktivierung abschließen.

Wenn du dabei die Meldung **„eSIM kann nicht aktiviert werden"** siehst, prüfe deine WLAN-Verbindung und versuche es erneut.


## eSIM-Übertragung von iPhone auf Android

Auf dem iPhone gibt es keine integrierte Option „Auf Android übertragen". Der zuverlässige Weg ist, deinen Anbieter das eSIM neu ausstellen zu lassen.

### Voraussetzungen
- Dein neues Android-Telefon ist ** entsperrt**.
- Du kannst deinen Anbieter kontaktieren (oder dich in dessen App/Website anmelden).
- Dein Android läuft auf **Android 16 oder neuer**.
- **Das eSIM noch NICHT vom iPhone löschen.**

### Schritte

**Kontaktiere deinen Anbieter (oder nutze dessen App):**
1. Teile mit, dass du dein eSIM von einem iPhone auf ein Android-Telefon verschiebst.
2. Nenne die **EID** und **IMEI** des neuen Android-Geräts (unter `Einstellungen` → `Telefoninfo`).
3. Dein Anbieter stellt dein eSIM als neuen QR-Code neu aus (oder pusht es über seine App).

**Auf deinem Android (Ziel):**
1. Gehe zu `Einstellungen` → `Netzwerk & Internet` → `SIMs` → `eSIM hinzufügen` (Formulierung variiert je nach Marke).
2. Scanne den vom Anbieter bereitgestellten QR-Code.
3. Folge den Anweisungen, um das Profil herunterzuladen und zu aktivieren.
4. Warte, bis die Aktivierung abgeschlossen ist.
5. **Jetzt** kannst du das eSIM vom iPhone löschen (Einstellungen > Mobilfunk > eSIM antippen > Mobilfunktarif entfernen).

✅ Fertig. Deine Nummer lebt jetzt auf dem Android-Telefon.

> ⚠️ **Wichtig**: Nach Abschluss der Übertragung wird das eSIM **dauerhaft vom iPhone entfernt**. Ohne deinen Anbieter gibt es kein Zurück. Stelle vor der Übertragung sicher, dass du eine andere aktive Leitung oder WLAN hast.


## eSIM auf ein neues iPhone oder Samsung übertragen

Auch wenn die plattformübergreifende Übertragung im Mittelpunkt dieses Leitfadens steht, wollen viele Nutzer ein eSIM einfach nur innerhalb desselben Ökosystems verschieben. So geht's. (Wechsel zu einem eSIM-only iPhone 16 in den USA? Der [iPhone 16 Aktivierungsleitfaden](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) behandelt die Besonderheiten der Übertragung während der Einrichtung.)

### eSIM von iPhone auf iPhone übertragen

Apples integrierte **Schnellübertragung** ist die einfachste Methode:

1. Wähle während der Einrichtung deines neuen iPhones „eSIM von iPhone in der Nähe übertragen", wenn du dazu aufgefordert wirst.
2. Halte beide Telefone nah beieinander, mit aktiviertem Bluetooth und WLAN.
3. Bestätige die Übertragung auf deinem alten iPhone.
4. Warte 1–2 Minuten, bis der **eSIM-Profil-Download** auf dem neuen Gerät abgeschlossen ist.

**Wenn die Schnellübertragung nicht funktioniert:** Gehe auf deinem neuen iPhone zu Einstellungen > Mobilfunk > eSIM hinzufügen > Von iPhone in der Nähe übertragen.

**Wenn auch das fehlschlägt:** Nutze die Anbieter-QR-Code-Methode – kontaktiere deinen Anbieter für einen neuen QR-Code.

### eSIM von Android auf Android übertragen

Android-Übertragungsmethoden variieren je nach Marke:

**Samsung:** Einstellungen > Verbindungen > SIM-Manager > eSIM hinzufügen > eSIM vom alten Gerät übertragen (Bildschirmanweisungen folgen). Funktioniert auf Samsung Galaxy S21 und neuer sowie der Z Flip-/Z Fold-Serie.

**Google Pixel:** Während der Einrichtung wirst du möglicherweise aufgefordert, dein eSIM zu übertragen. Alternativ: Anbieter-App nutzen oder einen neuen QR-Code anfordern.

**Allgemeines Android:** Wenn deine Marke keine integrierte Übertragung anbietet, nutze die Anbieter-QR-Code-Rückfallebene.

### Vergleich: Plattformübergreifende vs. plattforminterne eSIM-Übertragung

| Merkmal | Plattformübergreifend | Plattformintern |
|---------|----------------|----------------|
| **iOS ↔ iOS** | – | ✅ Schnellübertragung funktioniert |
| **Android ↔ Android** | – | ✅ Markenspezifische Methoden |
| **iOS ↔ Android** | ✅ In diesem Leitfaden behandelt | ❌ Nicht direkt unterstützt |
| **Anbieterabhängigkeit** | Höher | Geringer (Apple/Google übernehmen es) |
| **Zeitaufwand** | 3–10 Min. | 1–2 Min. |
| **Erfolgsquote** | Je nach Anbieter unterschiedlich | Allgemein hoch |

Wie sich das eSIM-Verhalten zwischen iPhone-Generationen unterscheidet (Speicherlimits, Dual-SIM-Regeln, regionale Varianten), erfährst du in unserem [iPhone eSIM-Kompatibilitäts-Hub](/faq/iphone-11-esim-compatible/).


## Anbieter, die plattformübergreifende eSIM-Übertragung unterstützen

Die plattformübergreifende eSIM-Übertragung ist noch neu, und die Anbieterunterstützung wird schrittweise ausgerollt. Es gibt keine vollständige öffentliche Liste aller unterstützten Anbieter, und die Verfügbarkeit ändert sich häufig – prüfe daher den aktuellen Stand auf der Website oder in der App deines Anbieters.

### Bestätigte unterstützte Anbieter

| Anbieter | Region | Übertragungsmethode | Übertragungslimit | Kosten |
|---------|--------|-----------------|----------------|------|
| **Orange** | Frankreich, Europa | Orange-App → „Mein eSIM-Bereich" → „Auf neues Gerät übertragen" | 3x pro Jahr | Kostenlos |
| **SFR** | Frankreich | SFR & Moi App → „Meine SIM verwalten" → „eSIM übertragen" | 5x pro Jahr | Kostenlos |
| **T-Mobile** | USA | T-Mobile-App → „eSIM verwalten" → „Auf neues Gerät übertragen" | Unbegrenzt | Kostenlos |
| **Verizon** | USA | My Verizon App → „Gerät aktivieren oder wechseln" | Unbegrenzt | Kostenlos |
| **AT&T** | USA | AT&T-App → „eSIM aktivieren" | Je nach Tarif | Kostenlos (Postpaid) |
| **EE** | UK | EE-App → „Tarif" → „eSIM-Übertragung" | 3x pro Jahr | Kostenlos |
| **Deutsche Telekom** | Deutschland | Telekom-App → „eSIM-Übertragung" | Unbegrenzt | Kostenlos |
| **Swisscom** | Schweiz | Swisscom-App → „eSIM-Übertragung" | 3x pro Jahr | Kostenlos |
| **Bouygues** | Frankreich | QR-Code-Neuausstellung (über Kundenportal) | 3x pro Jahr | Kostenlos |
| **Free** | Frankreich | QR-Code-Neuausstellung (über Kundenportal) | 2x pro Jahr | Kostenlos |
| **Vodafone** | UK, Europa | Vodafone-App → „eSIM-Übertragung" | Je nach Land | Kostenlos (Postpaid) |
| **Google Fi** | USA, weltweit | Google Fi App → „Auf diesem Gerät aktivieren" | Unbegrenzt | Kostenlos |

### Reise-eSIMs sind nicht übertragbar

| Anbieter | Übertragbar? | Was stattdessen tun |
|----------|---------------|-------------------|
| **Roami** | ❌ Nein | Neuen Tarif auf dem neuen Gerät kaufen |
| **Airalo** | ❌ Nein | Neuen Tarif auf dem neuen Gerät kaufen |
| **Holafly** | ❌ Nein | Neuen Tarif auf dem neuen Gerät kaufen |
| **Nomad** | ❌ Nein | Neuen Tarif auf dem neuen Gerät kaufen |

**Wie prüft man, ob der eigene Anbieter es unterstützt?** Probiere die Schritte aus Methode A oder B. Wenn dein Anbieter weder eine App-basierte Übertragung noch einen neuen QR-Code anbietet, nutze die Rückfallebenen-Methoden unten.


## Rückfallebenen, wenn plattformübergreifende eSIM-Übertragung nicht unterstützt wird

Wenn dein Anbieter nicht auf der Liste steht oder du einen **eSIM-Übertragungsfehler** siehst, nutze eine dieser Alternativen:

### Vom Anbieter ausgestellter QR-Code
1. Rufe deinen Anbieter an oder chatte mit ihm.
2. Sage: „Ich wechsle von Android zu iPhone (oder umgekehrt). Bitte stellen Sie mein eSIM als neuen QR-Code neu aus."
3. Du erhältst per E-Mail einen QR-Code oder einen Aktivierungslink.
4. Gehe auf dem neuen Gerät zu `Einstellungen` → `Mobilfunk` → `eSIM hinzufügen` → `QR-Code verwenden` und scanne.
5. Das eSIM des alten Geräts funktioniert nach der Aktivierung des neuen nicht mehr.

**Tipp:** Manche Anbieter verlangen eine kleine Gebühr für die Neuausstellung eines eSIM ($0–25). Frag vorher nach.

### Manuelle SM-DP+-Eingabe
Wenn dein Anbieter dir einen **Aktivierungscode** und eine **SM-DP+-Adresse** gibt (die Serveradresse, die das eSIM-Profil an dein Telefon ausliefert), kannst du das eSIM auf dem neuen Gerät manuell hinzufügen:
1. `Einstellungen` → `Mobilfunk` → `eSIM hinzufügen` → `Details manuell eingeben`.
2. SM-DP+-Adresse und Aktivierungscode einfügen.
3. `Weiter` antippen. Das funktioniert auf iPhone und Android.

### Neuen Tarif kaufen
Wenn du eine Reise-eSIM nutzt (Roami, Airalo, Holafly), verschwende keine Zeit mit Übertragungsversuchen – es funktioniert nicht. Kaufe einfach einen neuen Tarif auf deinem neuen Gerät — unser [Reise-eSIM-Tarifvergleich](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) rangiert die Anbieter, die sich lohnen.

> **Übergangstipp:** Die QR-Code-Rückfallebene ist die zuverlässigste Methode für jeden Anbieter, unabhängig davon, ob er App-basierte Übertragung unterstützt. Sie kostet vielleicht einen Anruf, funktioniert aber immer.


## eSIM-Übertragung oder neue Aktivierung?

Manchmal ist der Kauf eines neuen eSIM schneller als die Übertragung. Hier, wann du was wählen solltest:

| Faktor | Übertragung | Neue Aktivierung | Was ist besser? |
|--------|----------|----------------|------------------|
| **Du behältst dieselbe Telefonnummer** | ✅ Nummer behalten | ❌ Neue Nummer bekommen | Übertragung gewinnt |
| **2FA ist an deine Nummer gebunden** | ✅ Zugang behalten | ❌ Risiko, den Zugang zu verlieren | Übertragung gewinnt |
| **Dein Anbieter berechnet Gebühren für die Übertragung** | Kann $0–25 kosten | $0 (du kaufst ohnehin neu) | Kommt auf die Gebühr an |
| **Reise-eSIM** | ❌ Unmöglich | ✅ Einfach | Neue Aktivierung gewinnt |
| **Du hast es eilig (unter 5 Minuten)** | ⚠️ Kann 5–10 Min. dauern | ✅ 2 Min. QR-Code scannen | Neue Aktivierung gewinnt |
| **Du willst deinen bestehenden Tarif/Daten behalten** | ✅ Ungenutzte Daten behalten | ❌ Ungenutzte Daten verlieren | Übertragung gewinnt |

**Empfehlung:** Wenn du deinen bestehenden Anbietertarif behältst und deine Telefonnummer behalten willst, übertrage. Wenn du auf einer Reise-eSIM bist oder es eilig hast, kaufe einfach einen neuen Tarif auf deinem neuen Gerät.


## Warum ist meine eSIM-Übertragung gescheitert?

| Fehler / Symptom | Wahrscheinlichste Ursache | Lösung |
|----------------|-------------------|-----|
| „Übertragung nicht verfügbar – Anbieter nicht unterstützt" | Dein Anbieter unterstützt keine plattformübergreifende Übertragung. | Nutze die Rückfallebenen-Methoden oben. |
| QR-Code scannt, dann erscheint „Sitzung abgelaufen" | Du hast nach dem Generieren des QR-Codes zu lange gebraucht (er ist abgelaufen). | Vorgang wiederholen und sofort scannen. |
| Android meldet „Kopplung fehlgeschlagen" | Bluetooth- oder lokale Netzwerkberechtigungen blockiert. | Auf dem iPhone: `Einstellungen > Datenschutz & Sicherheit > Lokales Netzwerk` – sicherstellen, dass `Einstellungen` aktiviert ist. Auf Android: „WLAN-Sicherheitsscan" deaktivieren (meist in den erweiterten WLAN-Einstellungen). |
| Übertragung startet, bricht bei 50 % ab | Schwaches WLAN- oder Mobilfunksignal. | Beide Telefone näher an den Router bringen. VPN auf beiden Geräten deaktivieren. |
| **„eSIM bereits an anderes Gerät gebunden"** | Das Profil wurde vom alten Gerät nicht ordnungsgemäß freigegeben. | Auf dem alten Gerät zu `Einstellungen > Mobilfunk` gehen und manuell `eSIM löschen` (falls noch sichtbar). Dann 5 Minuten warten und erneut versuchen. Falls weiterhin fehlschlagend, Anbieter wegen Profilfreigabe kontaktieren. |
| iPhone fragt nach dem Scannen nach einem **Bestätigungscode** | Das eSIM-Profil hat einen Pflicht-**eSIM-Bestätigungscode** (selten). | Code in der Anbieter-E-Mail suchen (meist 4–8 Ziffern). Falls nicht gefunden, beim Anbieter nachfragen. |
| Doppelklick auf Seitentaste bewirkt nichts (iPhone → Android) | Biometrische Authentifizierung nicht eingerichtet oder deaktiviert. | Face ID / Touch ID einrichten oder „Aufmerksamkeit erforderlich" für Face ID vorübergehend deaktivieren. |
| **eSIM kein Dienst** nach der Übertragung | APN-Einstellungen nicht konfiguriert. | APN manuell konfigurieren (siehe Tabelle unten). |
| **eSIM-Profil abgelaufen** | Das Profil hat ein begrenztes Gültigkeitsdatum. | Anbieter für neuen QR-Code kontaktieren. |
| **„Keine Option eSIM hinzufügen" auf dem iPhone** | iPhone ist anbietergesperrt oder hat älteres iOS. | Anbietersperre unter Einstellungen > Allgemein > Info prüfen. Auf iOS 18 aktualisieren. |
| **„SIM wird nicht unterstützt" auf dem neuen Gerät** | Das neue Gerät ist an einen anderen Anbieter gesperrt. | Anbietersperre prüfen – muss „Keine SIM-Beschränkungen" anzeigen. |
| **Übertragungslimit überschritten** | Du hast dieses eSIM zu oft übertragen (manche Anbieter begrenzen auf 3–5 pro Jahr). | Anbietersupport kontaktieren, um das Limit zurückzusetzen oder ein neues eSIM zu erhalten. |
| **„eSIM-Übertragung fehlgeschlagen" auf Samsung** | Samsung Smart Switch unterstützt das spezifische Anbieterprofil möglicherweise nicht. | Stattdessen die Anbieter-QR-Code-Rückfallebene nutzen. |

### Manuelle APN-Konfiguration

Wenn nach der **eSIM-Übertragung** **„eSIM kein Dienst"** auftritt, konfiguriere APN manuell:

| Anbieter | APN | Benutzername | Passwort |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (leer) | (leer) |
| **SFR** | sl2sfr | (leer) | (leer) |
| **Free** | free | (leer) | (leer) |
| **Bouygues** | ebouygtel.com | (leer) | (leer) |
| **T-Mobile (US)** | fast.t-mobile.com | (leer) | (leer) |
| **AT&T (US)** | nxgen | (leer) | (leer) |
| **Verizon (US)** | vzwinternet | (leer) | (leer) |
| **Telekom (DE)** | internet.telekom | (leer) | (leer) |

### Immer noch nicht weiter?
Sammle diese Informationen, bevor du den Support anrufst:
- IMEI und EID des Quellgeräts
- IMEI und EID des Zielgeräts
- Die genaue Fehlermeldung (Screenshot machen)
- Deine Kontonummer oder Telefonnummer


## Was passiert nach der Übertragung mit dem alten eSIM?

**Es wird sofort deaktiviert.**

Das alte eSIM-Profil bleibt möglicherweise noch kurz auf dem alten Gerät sichtbar. Du kannst es manuell löschen:
`Einstellungen > Mobilfunk > altes eSIM antippen > eSIM löschen`.

> 💰 **Abrechnung**: Dein Anbieter berechnet dir den Tarif weiter. Die Übertragung kündigt den Tarif nicht – sie verschiebt nur die SIM. Zum Kündigen musst du den Anbieter separat kontaktieren.

Wenn du Bedenken wegen **„eSIM an anderes Gerät gebunden"**-Fehlern hast, lösche das alte Profil nach erfolgreich abgeschlossener Übertragung immer vom Quellgerät.

### Zeitplan: Übertragung vs. Löschung

| Aktion | Was passiert | Wann tun |
| :--- | :--- | :--- |
| **Übertragung eingeleitet** | Anbieter sendet Profil an das neue Gerät | Vor dem Löschen des alten eSIM |
| **Neues eSIM aktiviert** | Neues Gerät verbindet sich mit dem Netz | Nach Abschluss der Aktivierung |
| **Altes eSIM deaktiviert** | Anbieter deaktiviert das alte Profil | Automatisch – kann 1–5 Minuten dauern |
| **Altes eSIM löschen** | Entfernt das inaktive Profil vom alten Gerät | Nach Bestätigung, dass das neue Gerät funktioniert |


## WhatsApp, iMessage und 2FA nach einer eSIM-Übertragung einrichten

Nach erfolgreicher eSIM-Übertragung musst du deine Messaging-Apps und Authentifizierungsdienste auf dem neuen Gerät einrichten.

### WhatsApp

WhatsApp identifiziert dein Konto über deine Telefonnummer. Nach der **eSIM-Übertragung**:

1. Öffne WhatsApp auf deinem neuen Gerät.
2. Gib deine Telefonnummer ein (die übertragene).
3. Du erhältst einen Bestätigungscode per SMS oder automatischem Anruf auf deine Nummer.
4. Code eingeben – deine Chats erscheinen wieder, wenn du vorher ein Backup erstellt hast.

**Tipp:** Erstelle vor der Übertragung ein Backup deiner Chats. Auf dem iPhone: WhatsApp > Einstellungen > Chats > Chat-Backup. Auf Android: WhatsApp > Einstellungen > Chats > Backup.

**Häufiges WhatsApp-Problem:** Wenn du den SMS-Bestätigungscode nicht erhältst, nutze die Option „Ruf mich an" – WhatsApp ruft deine Nummer an und liest den Code vor. Falls das fehlschlägt, warte 5 Minuten und versuche es erneut (das Anbieternetz braucht evtl. noch Zeit zum Stabilisieren).

### iMessage und FaceTime

1. Gehe zu `Einstellungen` → `Nachrichten` und aktiviere `iMessage`.
2. Gehe zu `Einstellungen` → `FaceTime` und aktiviere `FaceTime`.
3. Warte 1–2 Minuten auf die Aktivierung. Wenn „Warten auf Aktivierung" erscheint, schalte es aus und wieder ein.
4. Prüfe, ob deine Nummer ausgewählt ist: Einstellungen > Nachrichten > Senden & Empfangen → deine eSIM-Nummer auswählen.

### Zwei-Faktor-Authentifizierung und SMS-Bestätigung

Da sich deine Telefonnummer nicht geändert hat, funktionieren SMS-basierte 2FA-Codes normal. App-basierte Authenticator-Apps (Google Authenticator, Microsoft Authenticator, Authy) müssen jedoch möglicherweise neu eingerichtet werden:

- **Authy:** Deine Tokens sind verschlüsselt und in der Cloud gesichert – einfach auf dem neuen Gerät anmelden.
- **Google Authenticator:** Du musst deine Konten einzeln übertragen oder die Funktion „Konten übertragen" nutzen.
- **Microsoft Authenticator:** Nutze die Backup-Funktion, um auf dem neuen Gerät wiederherzustellen.
- **SMS-2FA:** Teste, indem du von deiner Bank oder deinem E-Mail-Anbieter einen Bestätigungscode anforderst, um den SMS-Versand zu prüfen.

### Bank-Apps und Finanzdienste

Die meisten Banken erkennen den Gerätewechsel und verlangen eine erneute Authentifizierung. Halte deine Zugangsdaten und ggf. physische Token-Geräte bereit.

Weitere Hilfe zur App-Migration nach der **eSIM-Übertragung** findest du in unserem [eSIM-Einrichtungsleitfaden](/faq/how-to-activate-an-esim/).


## Best Practices, um eSIM-Übertragungsprobleme zu vermeiden

✅ **Vor der Übertragung:**
- Anbieter-Support prüfen (Menü durchsehen – wenn der Punkt da ist, wird er unterstützt).
- Beide Telefone auf die neueste Betriebssystemversion aktualisieren (iOS 18 / Android 16).
- Beide Telefone über 30 % laden.
- VPN und Werbeblocker vorübergehend deaktivieren.
- Prüfen, ob dein **eSIM-Profil** nicht **abgelaufen** ist.
- WhatsApp und andere Messaging-Apps sichern.
- **Das eSIM noch NICHT vom alten Gerät löschen.**

✅ **Während der Übertragung:**
- Telefone im Umkreis von 10 cm (4 Zoll) halten.
- Keine Apps wechseln oder den Bildschirm sperren.
- Bluetooth oder WLAN nicht ausschalten.
- Auf die Bestätigungsmeldung warten – nicht davon ausgehen, dass es fertig ist.

✅ **Nach der Übertragung:**
- Anrufe und Daten auf dem neuen Gerät testen.
- Altes eSIM vom Quellgerät löschen, um Verwirrung zu vermeiden.
- WLAN des alten Geräts mindestens eine Stunde eingeschaltet lassen – manche Anbieter benötigen einen finalen Handshake.
- WhatsApp, iMessage und 2FA-Apps reaktivieren.
- SMS-Bestätigungscodes von deiner Bank testen.
- Erinnerung setzen, den alten Tarif zu kündigen, falls du den Anbieter komplett wechselst.


## Reisen und eSIM-Übertragung

Wenn du im Ausland unterwegs bist und dein eSIM übertragen musst, sind hier einige wichtige Punkte. Und wenn sich die Übertragung auf der Reise nicht mehr retten lässt, ist der schnellste Ausweg meist der Kauf eines lokalen Tarifs — siehe den [US eSIM-Tarifleitfaden](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) oder den [UK eSIM-Kaufleitfaden](/faq/how-to-buy-a-uk-esim/), je nach Ziel:

### eSIM-Übertragung auf Reisen
- Plattformübergreifende Übertragung funktioniert **weltweit**, sofern dein Anbieter sie unterstützt.
- Stelle vor dem Start eine stabile WLAN-Verbindung sicher (Hotel, Café).
- Wenn die Übertragung fehlschlägt, ist die Anbieter-QR-Code-Rückfallebene deine beste Option.
- Prüfe nach der Übertragung die **eSIM-APN-Einstellungen** – manche Anbieter verlangen eine manuelle Konfiguration.

### Französische Anbieter und Reisen
- **Orange** und **SFR** erlauben plattformübergreifende Übertragung, wo immer du bist.
- **Free** und **Bouygues** verlangen die Neuausstellung eines QR-Codes – erledige das vor der Abreise.
- Bei **Reise-eSIMs** gilt: Sie sind in der Regel **nicht übertragbar** – kaufe auf deinem neuen Gerät einen neuen Tarif.

### Anbieter im Ausland kontaktieren

| Anbieter | Support-Kontaktmethode | Hinweise |
|---------|------------------------|-------|
| **Orange** | Orange-App-Chat, WhatsApp-Support oder Telefon | 24/7 in den meisten Regionen |
| **SFR** | SFR & Moi App-Chat, Telefon | Eingeschränkte Zeiten |
| **T-Mobile** | T-Mobile-App-Chat, iMessage, Telefon | 24/7 Support in den USA |
| **Verizon** | My Verizon App-Chat, Telefon | 24/7 Support |
| **AT&T** | AT&T-App-Chat, Telefon | Eingeschränkte Zeiten international |
| **EE** | EE-App-Chat, Telefon | 24/7 Support im UK |

**Tipp:** Lade vor der Reise die App deines Anbieters herunter und speichere die Support-Kontaktdaten. Manche Anbieter verlangen zur Anmeldung eine SMS-Bestätigung – mitten in einer Übertragung funktioniert das möglicherweise nicht.

### Was tun, wenn die Übertragung auf der Reise fehlschlägt?

1. Mit dem nächsten freien WLAN verbinden (Flughäfen, Hotels, Cafés).
2. Den Support deines Anbieters per E-Mail oder Messaging-App kontaktieren.
3. Bitten, dein eSIM als QR-Code neu auszustellen.
4. Den QR-Code auf deinem neuen Gerät scannen.

### Tipps für Weltenbummler
- Bewahre immer eine Sicherungskopie deiner eSIM-QR-Codes auf.
- Wenn du auf der Reise das Telefon wechselst, ziehe wenn möglich die native Übertragung dem QR-Code vor.
- Für mehrere Ziele: überlege einen globalen eSIM-Tarif, der mehrere Länder abdeckt.
- Speichere die Support-Kontaktdaten deines Anbieters, bevor du reist.

Mehr zur Nutzung von eSIMs auf Reisen findest du in unserem [Reise-eSIM-2026-Leitfaden](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Häufig gestellte Fragen

**F1: Kann ich ein Daten-eSIM übertragen (z. B. eine Reise-eSIM)?**
Nein. Die meisten Reise-eSIMs (Roami, Airalo, Holafly, Nomad usw.) unterstützen keine plattformübergreifende Übertragung. Sie sind für eine einmalige Installation pro Gerät ausgelegt. Du musst auf deinem neuen Telefon einen neuen Tarif kaufen. Siehe oben „Warum können Reise-eSIMs nicht übertragen werden?" für die technische Erklärung.

**F2: Funktioniert die Übertragung zwischen iPhone 11 und einem Samsung S24?**
Ja – solange beide die Betriebssystemanforderungen erfüllen. Das iPhone 11 unterstützt iOS 18 (es läuft bis iOS 18). Das Samsung S24 unterstützt Android 16. Die Hardware-Generation spielt keine Rolle; nur die Betriebssystemversion zählt.

**F3: Die App meines Anbieters bietet keine eSIM-Übertragung an. Woran liegt das?**
Nicht jeder Anbieter unterstützt App-basierte eSIM-Übertragung. Wenn dein Anbieter sie nicht anbietet, nutze die Anbieter-QR-Code-Rückfallebene: Kontaktiere deinen Anbieter und bitte ihn, dein eSIM als neuen QR-Code neu auszustellen. Manche Anbieter berechnen dafür eine kleine Gebühr ($0–25).

**F4: Funktionieren meine WhatsApp-/iMessage-/2FA-Codes nach der Übertragung weiter?**
WhatsApp nutzt deine Telefonnummer – es erkennt den SIM-Wechsel und verlangt möglicherweise eine erneute Bestätigung (meist automatisch). iMessage auf dem iPhone nutzt die eSIM-Nummer und sollte sich innerhalb einer Minute reaktivieren. Bei 2FA funktionieren Dienste, die SMS an deine Nummer senden, normal – die Nummer hat sich nicht geändert. Siehe Abschnitt 10 für ausführliche Migrationsschritte.

**F5: Kann ich dasselbe eSIM mehrfach hin- und herübertragen?**
Ja, aber jede Übertragung erfordert denselben Vorgang. Manche Anbieter begrenzen, wie oft ein eSIM pro Jahr übertragen werden kann (z. B. 3–5 Mal). Wenn du das Limit erreichst, wende dich an deinen Anbieter.

**F6: Wie steht es um eSIM + physische SIM Dual-SIM-Setups?**
Die Übertragung verschiebt nur das eSIM. Die physische SIM bleibt im Quellgerät. Wenn du beide verschieben willst, musst du das eSIM übertragen (mit dieser Anleitung) und die nano-SIM-Karte physisch in das neue Gerät umsetzen. Zur Optimierung von Dual-SIM nach der Übertragung: Lies unseren Artikel **[Dual eSIM funktioniert nicht? 12 Lösungen für das iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**F7: Was tun bei einem Fehler „eSIM-Profil abgelaufen" während der Übertragung?**
Kontaktiere deinen Anbieter, um einen neuen QR-Code zu erhalten – die Neuausstellung ist meist kostenlos. Aktiviere den neuen QR-Code unbedingt sofort (innerhalb von 30 Minuten), damit er nicht erneut abläuft.

**F8: Warum verhindert meine Anbietersperre die Übertragung?**
Wenn dein Telefon unter einer **Anbietersperre** steht, kannst du ein eSIM nur auf ein Gerät desselben Anbieters übertragen. Kontaktiere deinen Anbieter, um das Gerät vor der Übertragung zu entsperren. Auf dem iPhone: Einstellungen > Allgemein > Info > Anbietersperre muss „Keine SIM-Beschränkungen" anzeigen.

**F9: Kann ich ein Orange-eSIM auf ein Nicht-Orange-Gerät übertragen?**
Ja, wenn dein Gerät entsperrt ist und dein Orange-Tarif es erlaubt. Die **Orange eSIM-Übertragung** wird über die Orange-App oder native Übertragung unterstützt. Orange erlaubt bis zu 3 Übertragungen pro Jahr.

**F10: Funktioniert die Übertragung mit einem Free-eSIM?**
Nein – Free unterstützt keine plattformübergreifende Übertragung. Nutze die QR-Code-Rückfallebene über das Free-Kundenportal. Free erlaubt bis zu 2 Übertragungen pro Jahr.

**F11: Was ist ein eSIM-Bestätigungscode und wo finde ich ihn?**
Manche eSIM-Profile haben einen Pflicht-**eSIM-Bestätigungscode** – typischerweise 4–8 Ziffern. Suche in der E-Mail oder den Aktivierungsanweisungen des Anbieters. Falls nicht gefunden, frage deinen Anbieter.

**F12: Was bedeutet „eSIM lässt sich nicht auf das neue Telefon übertragen"?**
Das bedeutet meist, dass dein Anbieter die Übertragung nicht unterstützt, der QR-Code abgelaufen ist, das alte eSIM noch aktiv ist oder das neue Gerät anbietergesperrt ist. Lösche zuerst das alte eSIM (falls noch sichtbar) und versuche es erneut. Siehe Abschnitt 7 für die vollständige Tabelle zur Fehlerbehebung.

**F13: Wie behebe ich „eSIM-Aktivierung fehlgeschlagen" nach der Übertragung?**
Prüfe deine WLAN-Verbindung, starte beide Geräte neu und versuche es erneut. Falls es weiterhin fehlschlägt, nutze die manuelle Eingabemethode mit der SM-DP+-Adresse aus der Anbieter-E-Mail.

**F14: Kündigt die Übertragung meines eSIM meinen Tarif?**
Nein – die Übertragung des eSIM verschiebt nur das SIM-Profil auf ein neues Gerät. Dein Tarif (und die Abrechnung) läuft weiter wie bisher. Zum Kündigen musst du deinen Anbieter separat kontaktieren.

**F15: Kann ich ein eSIM übertragen, wenn ich es bereits vom alten Telefon gelöscht habe?**
Ja, aber es ist komplizierter. Wenn du das eSIM vor der Übertragung gelöscht hast, kontaktiere deinen Anbieter und bitte ihn, dein eSIM als neuen QR-Code neu auszustellen. Das kann er, weil dein Profil noch auf seinen Servern existiert.

**F16: Was kostet die Neuausstellung eines eSIM-QR-Codes?**
Die meisten Anbieter stellen eSIMs kostenlos neu aus (besonders bei Postpaid-Tarifen). Manche Prepaid-Anbieter oder MVNOs berechnen eine kleine Gebühr ($5–25). Frag vorher nach.

**F17: Kann ich ein Vodafone-eSIM auf ein Nicht-Vodafone-Gerät übertragen?**
Ja, solange dein Gerät entsperrt ist und dein Vodafone-Tarif eSIM-Übertragung erlaubt. Vodafone unterstützt die Übertragung über die App in den meisten Ländern. Prüfe in der Vodafone-App die Option „eSIM-Übertragung".

**F18: Was tun, wenn ich das Übertragungslimit meines Anbieters erreiche?**
Manche Anbieter begrenzen Übertragungen auf 3–5 pro Jahr. Wenn du das Limit erreichst, kontaktiere den Anbietersupport – er kann das Limit oft zurücksetzen oder manuell einen neuen eSIM-QR-Code ausstellen (unter Umgehung des Übertragungssystems).

**F19: Kann ich zwei eSIMs gleichzeitig übertragen (Dual eSIM)?**
Ja, aber du musst sie **einzeln nacheinander** übertragen. Jedes eSIM-Profil ist unabhängig und muss separat mit demselben Vorgang übertragen werden. Wenn auf deinem alten Gerät zwei aktive eSIMs sind, übertrage zuerst das primäre, dann das sekundäre.

**F20: Was ist der Unterschied zwischen eSIM-Übertragung und eSIM-Neuausstellung?**
Die Übertragung verschiebt dein bestehendes Profil auf ein neues Gerät (Nummer und Tarif bleiben). Die Neuausstellung erstellt ein völlig neues eSIM-Profil für dieselbe Nummer – das alte Profil wird dauerhaft deaktiviert. Die Neuausstellung ist die Rückfallebene, wenn dein Anbieter die Übertragung nicht unterstützt.

---

## Wichtigste Erkenntnis

Die Möglichkeit, eSIMs ohne Zutun des Anbieters zwischen iPhone und Android zu übertragen, ist ein **Gamechanger 2026**. Sie beseitigt den letzten großen Reibungspunkt beim Ökosystem-Wechsel. Solange dein Anbieter auf der Unterstützten-Liste steht und beide Telefone aktualisiert sind, verschiebst du deine Nummer in unter einer Minute.

**Denk dran**:
- Wenn dein Anbieter nicht unterstützt wird, funktioniert die QR-Code-Rückfallebene trotzdem – sie kostet nur einen Anruf.
- Behandle Reise-eSIMs als einmal verwendbar; kaufe auf jedem Gerät neu.
- **Lösche niemals das alte eSIM, bevor du die Übertragung startest** – das ist der häufigste Fehler.
- Prüfe die Anbietersperre vor dem Start – „Keine SIM-Beschränkungen" ist erforderlich.
- Manche Anbieter begrenzen Übertragungen pro Jahr – prüfe vor dem Start.

Bei hartnäckigen **eSIM-Übertragungsfehlern** hilft unser **[eSIM-Deep-Dive zur Fehlerbehebung (16 echte Fälle)](/faq/esim-deep-troubleshooting-guide-2026/)** mit fortgeschrittenen Lösungen weiter.

👉 **Wechselst du zu einem Reise-Tarif?** Sieh dir [eSIM für die USA](/united-states-esim/) oder [eSIM für Europa](/europe-esim/) an, sobald deine Übertragung abgeschlossen ist.

👉 **Nicht sicher, ob dein neues Telefon eSIM unterstützt?** Prüfe vor dem Start unsere **[vollständige Kompatibilitätsliste](/compatibility/)**.

👉 **Testest du ein Reise-eSIM auf deinem neuen Gerät?** Sichere dir eine **[kostenlose Roami eSIM-Testversion](/free-esim/)**, um zu bestätigen, dass alles funktioniert.

---

*Basierend auf offizieller Apple- und Android-Dokumentation, GSMA-Standards und Anbieterangaben Stand September 2026. Funktionen und Anbieterunterstützung können sich ändern.*
## Quellen

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)