---
title: "Android zu iPhone: eSIM in 60 Sekunden übertragen"
h1_title: "So übertragen Sie Ihre eSIM in 60 Sekunden von Android auf iPhone"
description: "Smartphone-Wechsel? Übertragen Sie Ihre eSIM in 60 Sekunden zwischen iPhone (iOS 18–20) und Android (Android 15–17). Schritt-für-Schritt, unterstützte Anbieter, QR-Code & Lösungen für Fehler. Kein Anruf nötig."
keywords: ["eSIM Fehlerbehebung", "eSIM Aktivierung fehlgeschlagen", "eSIM kein Netz", "eSIM Übertragungsfehler", "Apple eSIM", "iOS 20 eSIM", "eSIM APN Einstellungen", "eSIM plattformübergreifende Übertragung", "eSIM von Android auf iPhone", "eSIM von iPhone auf Android", "Telekom eSIM übertragen", "eSIM übertragen samsung zu iphone", "eSIM transfer android iphone funktioniert nicht", "eSIM nach update verschwunden iphone", "eSIM qr code abgelaufen was tun"]
date: 2026-06-22T10:00:00Z
lastmod: 2026-06-22T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Fehlerbehebung", "Reise-Setup"]
toc: true

# 站点 & SEO 基础硬编码配置
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI 文本翻译/硬编码配置 (支持多语言化)
ui_text:
  updated_on: "Aktualisiert am"
  min_read: "Min. Lesedauer"
  toc: "Inhaltsverzeichnis"

breadcrumbs:
  home:
    text: "Startseite"
    url: "/"
  parent:
    text: "Hilfecenter"
    url: "/faq/"
    
# 右侧：热门 eSIM 配置 (6个国家，1.99美金)
sidebar_popular:
  title: "Beliebte eSIMs"
  item_suffix: "eSIM"
  items:
    - name: "Vereinigte Staaten"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Deutschland"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Türkei"
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

# 右侧：免费 eSIM 配置 (4个国家)
sidebar_free:
  title: "Gratis eSIM sichern"
  icon: "🎁"
  item_suffix: "Gratis eSIM"
  item_subtitle: "Kostenlose eSIM"
  items:
    - name: "Großbritannien"
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

# 右侧：热门问题配置 (5个问题)
sidebar_questions:
  title: "Häufige Fragen"
  items:
    - question: "Was ist eine eSIM-Aktivierung und wie funktioniert sie?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Wie aktiviere ich eine eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Wie aktiviere ich eine eSIM auf dem iPhone (Alle Modelle)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Aktuelle eSIM-Kompatibilitätsliste"
      url: "/compatibility/"
---

> Jahrelang waren eSIM-Übertragungen innerhalb desselben Ökosystems gefangen – man konnte von iPhone zu iPhone oder zwischen einigen Android-Geräten wechseln, aber der Sprung über die iOS-Android-Grenze erforderte meist einen Kontakt zum Anbieter. Mit **iOS 18** führte Apple erstmals die Möglichkeit ein, eine eSIM auf ein Android-Gerät zu übertragen – eine Funktion, die mit **iOS 19** und **iOS 20** kontinuierlich ausgebaut wurde. Auf der Android-Seite ermöglicht **Android 15** den Empfang von eSIMs vom iPhone, und **Android 16/17** verbessern die plattformübergreifende Kopplung. Dieser Leitfaden führt Sie durch alle unterstützten Methoden, die Anforderungen der Anbieter und Schritte zur Fehlerbehebung für eine nahtlose Übertragung.

Für eine grundlegende Einführung in die eSIM-Technologie besuchen Sie unseren [Einsteiger-Guide zur eSIM](/faq/what-is-esim-activation-and-how-does-it-work/). Für allgemeine Hilfe zur Aktivierung auf dem neuesten iPhone finden Sie in unserem **[iPhone 17 eSIM Komplett-Guide](/faq/2026-ultimate-guide-iphone-17-esim-activation-solutions/)** alle Details.


## 📌 Kurz-Zusammenfassung

| Von | Nach | Mindest-OS | Methode |
|------|-----|------------|--------|
| iPhone (iOS 18+) | Android (15+) | iOS 18 / Android 15 | QR-Code + manuelle Kopplung über Google-Dienste |
| Android (15+) | iPhone (iOS 18+) | iOS 18 / Android 15 | QR-Code Scan (iPhone generiert diesen) |
| iPhone (iOS 17 oder älter) | Beliebig | – | Nicht direkt unterstützt – Anbieter-QR-Code nutzen |
| Android (14 oder älter) | Beliebig | – | Nicht unterstützt – OS aktualisieren oder Anbieter kontaktieren |

**Unterstützte Anbieter** für die plattformübergreifende eSIM-Übertragung (Stand Juni 2026):
🇩🇪 Telekom (als erster Anbieter in Europa)
🇨🇭 Swisscom
🇺🇸 AT&T, T-Mobile, Verizon
🇬🇧 EE
🇫🇷 Orange, SFR
🇯🇵 au, UQ

Falls Ihr Anbieter nicht aufgeführt ist, wird die direkte Übertragung fehlschlagen. Nutzen Sie in diesem Fall die QR-Code-Methode Ihres Anbieters. Eine vollständige Übersicht aller eSIM-fähigen Geräte und unterstützten Anbieter finden Sie in unserer **[eSIM-Kompatibilitätsliste](/compatibility/)**.


## Warum die plattformübergreifende eSIM-Übertragung ein Game-Changer ist

Vor der Einführung dieser Funktion bedeutete der Wechsel einer eSIM von Android zu iPhone:
- Den Kundenservice anrufen (oft mit langer Warteschleife)
- EID und IMEI des neuen Geräts durchgeben
- Minuten oder Stunden auf einen neuen QR-Code warten

Jetzt, mit der nativen **plattformübergreifenden eSIM-Übertragung**, ist der Prozess weitgehend automatisiert und dauert in der Regel weniger als 60 Sekunden. Sie müssen keinen Anbieter mehr kontaktieren – die Übertragung erfolgt direkt zwischen den Geräten.

Die **Telekom eSIM** war in Deutschland der erste Anbieter, der diese Funktion für iOS und Android freigab – [laut offizieller Telekom-Mitteilung](https://www.telekom.com/en/media/media-information/archive/esim-transfer-1097076) können Telekom-Kunden ihre eSIM nun ohne zusätzliche App nahtlos zwischen den Betriebssystemen übertragen. Die **Vodafone eSIM** und die **O2 eSIM** werden ebenfalls häufig genutzt, unterstützen die direkte plattformübergreifende Übertragung jedoch derzeit noch nicht flächendeckend.


## Welche Voraussetzungen müssen Sie für die eSIM-Übertragung erfüllen?

**Für beide Richtungen:**
- Beide Geräte müssen **entsperrt** sein (kein SIM-Lock). Prüfung beim iPhone: `Einstellungen > Allgemein > Info` → `Provider-Sperre` muss „Keine SIM-Einschränkungen“ anzeigen.
- Auf beiden Geräten ist **Bluetooth aktiviert**.
- Beide Geräte sind mit dem **WLAN** verbunden.
- Die zu übertragende eSIM ist auf dem Quellgerät **aktiv** (nicht bereits gelöscht oder deaktiviert).
- Ihr Anbieter **unterstützt die plattformübergreifende Übertragung** (siehe Liste oben).

**Für Android → iPhone:**
- iPhone benötigt **iOS 18 oder neuer** (für die beste Erfahrung wird iOS 20 empfohlen).
- Android benötigt **Android 15 oder neuer** – bei älteren Versionen kann die Übertragung fehlschlagen.

**Für iPhone → Android:**
- iPhone benötigt **iOS 18 oder neuer**.
- Android benötigt **Android 15 oder neuer**.

Die [offizielle Apple Support-Dokumentation](https://support.apple.com/en-us/126058) beschreibt die genauen Voraussetzungen für die eSIM-Übertragung vom iPhone auf ein Android-Gerät. Apple empfiehlt, vor der Übertragung sicherzustellen, dass beide Geräte über die aktuellste Software verfügen.


## eSIM von Android auf iPhone übertragen – Schritt für Schritt

Dies ist das häufigste Szenario – der Wechsel von einem **Samsung**, **Pixel** oder anderen **Android-Gerät** auf ein neues **iPhone**. Die Übertragung wird auf dem iPhone gestartet, unterstützt durch die Google-Dienste auf der Android-Seite.

### Schritt-für-Schritt

**Auf Ihrem Android (Quellgerät):**
1. Entsperren Sie das Telefon und aktivieren Sie Bluetooth.
2. Legen Sie es direkt neben das iPhone (Abstand unter 10 cm).

**Auf Ihrem iPhone (Zielgerät):**
1. Gehen Sie zu `Einstellungen` → `Mobilfunk` → `eSIM hinzufügen`.
2. Tippen Sie auf `Von Android übertragen`. Ein QR-Code erscheint auf dem iPhone-Display.
3. Öffnen Sie auf Ihrem Android-Gerät die **Einstellungen** → `Google-Dienste` → `Alle Dienste` → `Mit iPhone oder iPad koppeln`.
4. Tippen Sie auf `eSIM übertragen`.
5. Scannen Sie den QR-Code auf dem iPhone mit der Kamera Ihres Android-Geräts.
6. Eine Benachrichtigung erscheint: „eSIM-Übertragung erkannt“. Tippen Sie darauf.
7. Wählen Sie die Telefonnummer (das eSIM-Profil) aus, die Sie übertragen möchten.
8. Tippen Sie auf `Übertragen`. Das Android-Gerät zeigt „Übertragung wird vorbereitet…“ an.
9. Auf dem iPhone erscheint ein Bestätigungs-Pop-up – tippen Sie auf `Fortfahren`.
10. Warten Sie 10–30 Sekunden. Das iPhone meldet „Aktivierung abgeschlossen“.

✅ **Fertig.** Ihre Nummer ist nun auf dem iPhone aktiv. Die eSIM auf dem Android-Gerät wird automatisch deaktiviert.

Die [Apple Support-Dokumentation zur eSIM-Übertragung von Android auf iPhone](https://support.apple.com/118670) bietet weitere Details zu diesem Prozess.

> 💡 **Tipp für Samsung-Nutzer:** Die **eSIM übertragen samsung zu iphone** funktioniert genauso wie auf anderen Android-Geräten – der Menüpfad kann je nach OneUI-Version leicht variieren. Suchen Sie in den Einstellungen nach „Google-Dienste“ oder „Geräte koppeln“. Für **Pixel**-Nutzer ist der Pfad identisch – die **eSIM übertragen pixel zu iphone** ist ebenfalls über die Google-Dienste möglich.


## eSIM von iPhone auf Android übertragen – Schritt für Schritt

Ab **iOS 18** können Sie Ihre eSIM direkt auf ein Android-Gerät übertragen. Apple hat diese Funktion in iOS 19 und iOS 20 weiter verbessert. Der Prozess wird vom iPhone aus gestartet.

**Auf Ihrem iPhone (Quellgerät):**
1. Gehen Sie zu `Einstellungen` → `Mobilfunk`.
2. Tippen Sie auf die eSIM, die Sie übertragen möchten.
3. Tippen Sie auf `Auf Android übertragen`. Ein QR-Code erscheint.
4. Lassen Sie diesen Bildschirm geöffnet.

**Auf Ihrem Android (Zielgerät):**
1. Gehen Sie zu `Einstellungen` → `Google-Dienste` → `Alle Dienste` → `Mit iPhone oder iPad koppeln`.
2. Tippen Sie auf `eSIM übertragen`.
3. Scannen Sie den QR-Code auf dem iPhone.
4. Bestätigen Sie die Übertragung auf dem iPhone per Face ID / Touch ID.

✅ **Fertig.** Die Nummer ist nun auf das Android-Gerät umgezogen.

Die [offizielle Apple Support-Dokumentation zur eSIM-Übertragung vom iPhone auf Android](https://support.apple.com/en-us/126058) beschreibt die genauen Schritte für diesen Vorgang.

> 💡 **Hinweis für Smartwatch-Nutzer:** Die **Apple Watch eSIM** ist fest an das iPhone gebunden – eine separate Übertragung der Apple Watch eSIM auf ein Android-Gerät ist nicht möglich. Die eSIM auf der Apple Watch muss über die Apple Watch-App und den Anbieter neu eingerichtet werden.


## Technischer Hintergrund – Warum die eSIM-Übertragung funktioniert

Damit Sie verstehen, warum die plattformübergreifende eSIM-Übertragung überhaupt möglich ist, hier ein kurzer technischer Einblick.

Die eSIM-Technologie basiert auf dem **eUICC** (embedded Universal Integrated Circuit Card) – einem Chip, der fest auf der Hauptplatine Ihres Geräts verlötet ist. Dieser Chip kann mehrere eSIM-Profile speichern, aber nur ein Profil gleichzeitig aktiv haben.

Die Übertragung erfolgt nach dem **GSMA-Standard SGP.22 v2.5+** (Consumer eSIM Transfer). Dieser Standard definiert einen sicheren Peer-to-Peer-Transfer, bei dem:

1. **Das Quellgerät** generiert einen verschlüsselten Transfer-Code (QR-Code).
2. **Das Zielgerät** liest den Code und kontaktiert den SM-DP+ Server des Anbieters.
3. **Der SM-DP+ Server** verifiziert die Berechtigung und überträgt das Profil sicher auf das neue Gerät.
4. **Das Quellgerät** deaktiviert das Profil automatisch.

Die [GSMA](https://www.gsma.com/esim/) als internationale Standardisierungsorganisation für die Mobilfunkbranche stellt sicher, dass diese Technologie weltweit interoperabel ist – unabhängig davon, ob Sie ein **iPhone**, **Samsung**, **Google Pixel** oder ein anderes **Android-Gerät** verwenden.


## eSIM-Übertragung auf verschiedenen Android-Marken – Samsung, Pixel, Xiaomi

Die plattformübergreifende eSIM-Übertragung funktioniert auf den meisten aktuellen Android-Geräten, aber es gibt Unterschiede:

| Marke | eSIM-Übertragung unterstützt? | Besonderheit |
|-------|-------------------------------|--------------|
| **Samsung Galaxy S21–S25** | Ja (ab Android 15) | Menü unter `Einstellungen > Google-Dienste > Mit iPhone koppeln` – bei OneUI 6.1+ |
| **Google Pixel 6–9** | Ja (ab Android 15) | Menü unter `Einstellungen > Google-Dienste > Alle Dienste > Mit iPhone koppeln` |
| **Xiaomi 14T / 15** | Eingeschränkt | eSIM-Übertragung wird nur in bestimmten Regionen unterstützt – nicht global verfügbar |
| **OnePlus 12 / 13** | Ja (ab Android 15) | Volle Unterstützung über Google-Dienste |
| **Nothing Phone (2) / (3a)** | Ja (ab Android 15) | Volle Unterstützung |
| **Huawei (ohne Google-Dienste)** | Nein | Fehlende Google-Dienste verhindern die Kopplung – nur über Anbieter-QR-Code möglich |

Wenn Sie ein **Samsung**-Gerät besitzen und eine **eSIM übertragen samsung zu iphone** möchten, stellen Sie sicher, dass Ihr Gerät auf Android 15 oder neuer aktualisiert ist. Für **Pixel**-Nutzer gilt das Gleiche – die **eSIM übertragen pixel zu iphone** ist ab Android 15 nahtlos möglich.

Eine vollständige Übersicht aller eSIM-fähigen Geräte finden Sie in unserer **[eSIM-Kompatibilitätsliste](/compatibility/)**.


## Fehlerbehebung – Warum schlägt die eSIM-Übertragung fehl?

Hier sind die häufigsten Probleme beim **eSIM-Transfer zwischen iPhone und Android** – und wie Sie sie lösen:

| Fehler / Symptom | Wahrscheinliche Ursache | Lösung |
|----------------|-------------------|-----|
| **„Übertragung nicht verfügbar“** | Anbieter unterstützt die Funktion (noch) nicht. | Nutzen Sie die manuelle QR-Code-Methode des Anbieters (siehe Fallback unten). |
| **QR-Code gescannt, aber „Sitzung abgelaufen“** | Der Scan dauerte zu lange (>3 Min.). | Prozess neu starten und sofort scannen. |
| **Android meldet „Kopplung fehlgeschlagen“** | Bluetooth- oder Netzwerkberechtigungen blockiert. | iPhone: `Einstellungen > Datenschutz & Sicherheit > Lokales Netzwerk` prüfen. |
| **Übertragung stoppt bei 50 %** | Schwaches WLAN-Signal oder aktives VPN. | VPN auf beiden Geräten ausschalten; näher zum Router gehen. |
| **„eSIM bereits an anderes Gerät gebunden“** | Profil wurde nicht korrekt freigegeben. | Anbieter kontaktieren, um das Profil „manuell freizugeben“. |
| **„QR-Code ungültig“** | Der QR-Code wurde für ein anderes Gerät generiert oder ist abgelaufen. | Fordern Sie einen **neuen QR-Code** bei Ihrem Anbieter an – das geht meist über die App oder das Kundenportal. |
| **Kein Netz nach der Übertragung** | APN-Einstellungen wurden nicht automatisch übernommen. | APN-Einstellungen manuell konfigurieren (siehe unten). |
| **eSIM nach Systemupdate verschwunden** | Ein iOS- oder Android-Update hat die eSIM-Konfiguration zurückgesetzt. | Starten Sie das Gerät neu. Falls das nicht hilft: eSIM über den QR-Code Ihres Anbieters erneut aktivieren. – das ist eine häufige Ursache, warum **eSIM nach update verschwunden iphone** auftritt. |

### APN-Einstellungen manuell konfigurieren

Falls nach der Übertragung kein Netz verfügbar ist – also **eSIM kein Netz** angezeigt wird – müssen oft die APN-Einstellungen (Access Point Name) manuell angepasst werden:

1. **iPhone**: `Einstellungen > Mobilfunk > Mobilfunkdaten-Netzwerk` → APN-Felder ausfüllen
2. **Android**: `Einstellungen > Verbindungen > Mobilfunknetze > APN`

Die APN-Daten Ihres Anbieters finden Sie im Kundenportal oder durch eine kurze Suche nach „[Anbietername] APN Einstellungen“.

| Netz | APN | Benutzername | Passwort |
|------|-----|--------------|----------|
| Telekom (DE) | internet.telekom | (leer) | (leer) |
| Vodafone (DE) | web.vodafone.de | (leer) | (leer) |
| O2 (DE) | internet | (leer) | (leer) |
| T-Mobile (US) | fast.t-mobile.com | (leer) | (leer) |
| AT&T (US) | nxgen | (leer) | (leer) |

Falls weiterhin Probleme auftreten – etwa wenn die **eSIM Aktivierung fehlgeschlagen** ist – finden Sie in unserem **[eSIM Deep Troubleshooting Guide (16 reale Fälle)](/faq/esim-deep-troubleshooting-guide-2026/)** erweiterte Lösungen für komplexere Szenarien.


## Was tun, wenn die direkte eSIM-Übertragung nicht funktioniert?

Wenn die direkte plattformübergreifende Übertragung scheitert (weil Ihr Anbieter sie nicht unterstützt oder die Geräte nicht kompatibel sind), gibt es drei zuverlässige Alternativen:

### Option 1: Anbieter-QR-Code (funktioniert immer)
Fordern Sie über die App oder den Kundenservice Ihres Anbieters einen neuen Aktivierungs-QR-Code an. Scannen Sie diesen einfach auf dem neuen Gerät unter `eSIM hinzufügen`.

- **Telekom**: In der Telekom-App oder im Kundenportal → „eSIM neu ausstellen“
- **Vodafone**: Über die Vodafone-App oder die offizielle [Vodafone eSIM](https://www.vodafone.de/esim/)-Seite
- **O2**: Im O2-Kundenportal unter „SIM-Karte verwalten“ → „eSIM“

### Option 2: Manuelle Eingabe der SM-DP+ Adresse
Falls der QR-Code nicht scanbar ist – etwa wenn der **eSIM qr code abgelaufen was tun** der Grund ist – können Sie die Daten manuell eingeben. Diese finden Sie meist im Kundenportal Ihres Mobilfunkanbieters unter den eSIM-Details – dort werden oft die SM-DP+ Adresse und der Aktivierungscode angezeigt.

### Option 3: Von eSIM auf physische SIM wechseln (Notfall-Lösung)
Einige Anbieter (wie Vodafone und O2) ermöglichen es, die eSIM zurück in eine physische SIM-Karte umzuwandeln – das kann eine Notfall-Lösung sein, wenn die eSIM-Übertragung wiederholt fehlschlägt. Dieser Weg ist jedoch oft mit zusätzlichen Kosten (bis zu 10–20 €) verbunden und dauert in der Regel 1–3 Werktage.


## Besonderheiten bei Reise-eSIMs – was Sie bei der Übertragung beachten sollten

Ein entscheidender Unterschied: **Reise-eSIMs** (wie Airalo, Holafly, Nomad oder Saily) sind in der Regel **Einwegprodukte** und können **nicht** auf ein anderes Gerät übertragen werden. Sie sind an das Gerät gebunden, auf dem sie erstmals aktiviert wurden.

| Typ | Übertragbar? | Beispiele |
|-----|--------------|-----------|
| **Heimische eSIM** (Vertrag, Deutschland) | Ja (bei unterstützten Anbietern) | Telekom, Vodafone, O2 |
| **Prepaid eSIM** (Deutschland) | Nur über QR-Code-Neuausstellung | Aldi Talk, Congstar, Lidl Connect |
| **Reise-eSIM** (Datenpakete) | Nein | Airalo, Holafly, Nomad, Saily |

Der technische Grund: Reise-eSIMs werden oft mit einem Einmal-Aktivierungscode ausgestellt, der nach der Installation auf einem Gerät ungültig wird. Sie sind nicht für die plattformübergreifende Übertragung konzipiert.

Wenn Sie eine **Reise-eSIM** für die **Türkei**, die **USA**, **Ägypten**, **Thailand** oder **Japan** nutzen, kaufen Sie für ein neues Gerät einfach ein neues Paket. Die meisten Reise-eSIM-Anbieter wie Airalo oder Holafly bieten sofortige Aktivierung per QR-Code – Sie müssen keine Übertragung versuchen. Das [Airalo Hilfe-Center](https://help.airalo.com) und die [Holafly FAQ](https://holafly.com/faq/) bieten dazu detaillierte Anleitungen zur Installation und Aktivierung.

Wer nach der Übertragung seiner heimischen eSIM auf das neue Gerät weiterreisen möchte, kann auf spezialisierte Anbieter für [Europa-eSIM](/europe-esim/), [Türkei eSIM](/turkey-esim/) oder [USA eSIM](/united-states-esim/) zurückgreifen – jede Region hat ihre eigenen Netzwerk-Besonderheiten.


## Nach der Übertragung – WhatsApp, iMessage & Co. richtig einrichten

Nach erfolgreicher eSIM-Übertragung auf Ihr neues Gerät müssen Sie einige Apps und Dienste neu aktivieren. Hier ist die Checkliste:

### WhatsApp
Da sich Ihre Telefonnummer nicht ändert, erkennt WhatsApp den Wechsel automatisch. Sie müssen jedoch Ihre Nummer erneut verifizieren:
1. Öffnen Sie WhatsApp auf dem neuen Gerät.
2. Geben Sie Ihre Telefonnummer ein.
3. Sie erhalten einen SMS- oder Anruf-Bestätigungscode – geben Sie diesen ein.
4. Ihre Chats bleiben erhalten, wenn Sie vorher ein Backup erstellt haben (iCloud oder Google Drive).

### iMessage & FaceTime (iPhone)
Wenn Sie auf ein neues iPhone gewechselt haben:
1. Gehen Sie zu `Einstellungen > Nachrichten > iMessage` und aktivieren Sie es.
2. Gehen Sie zu `Einstellungen > FaceTime` und aktivieren Sie es.
3. Vergewissern Sie sich, dass Ihre Telefonnummer unter „Sie können erreicht werden unter“ ausgewählt ist.

### Bank-Apps & 2FA
Die meisten Bank-Apps erkennen den Gerätewechsel und verlangen eine erneute Authentifizierung. Halten Sie Ihre Zugangsdaten und ggf. Ihr Kartenlesegerät bereit.

### Google-Dienste (Android)
Wenn Sie auf ein neues Android-Gerät gewechselt haben, melden Sie sich mit Ihrem Google-Konto an – Ihre Apps und Einstellungen werden automatisch synchronisiert.


## Prepaid-eSIM und die Übertragung – was gilt?

In Deutschland nutzen viele Nutzer **Prepaid**-Tarife. Hier ein Überblick, ob und wie Sie Ihre Prepaid-eSIM auf ein anderes Gerät übertragen können:

| Anbieter | eSIM verfügbar? | Plattformübergreifend übertragbar? | Vorgehen |
|----------|----------------|-----------------------------------|----------|
| **Aldi Talk eSIM** | Ja | Nein | Die Aldi Talk eSIM ist gerätegebunden. Für einen Gerätewechsel musst du im Kundenportal einen neuen QR-Code beantragen. |
| **Congstar eSIM** | Ja | Nein | Congstar stellt die eSIM nur über die App aus – ein Gerätewechsel erfordert immer einen neuen QR-Code. |
| **Lidl Connect eSIM** | Ja | Nein | Die Lidl Connect eSIM wird ebenfalls gerätegebunden aktiviert – du benötigst bei jedem Wechsel einen neuen QR-Code. |
| **Fraenk eSIM** | Ja | Nein | Fraenk ist ein reiner Digitalanbieter – die eSIM ist fest mit dem Gerät verknüpft. Kontaktiere den Support für eine Neuausstellung. |
| **Telekom Prepaid eSIM** | Ja | Eingeschränkt | Nur über Telekom-App mit neuem QR-Code |
| **Vodafone Prepaid eSIM** | Ja | Eingeschränkt | Nur über Vodafone-App mit neuem QR-Code |

> **Fazit für Prepaid-Nutzer:** Wenn Sie eine Prepaid-eSIM besitzen und von iPhone auf Android (oder umgekehrt) wechseln möchten, ist der sicherste Weg: Beantragen Sie einen neuen QR-Code bei Ihrem Anbieter. Das ist in der Regel kostenlos und innerhalb weniger Minuten erledigt. Die direkte plattformübergreifende Übertragung funktioniert in Deutschland derzeit nur bei Telekom-Vertragskunden.


## Häufige Fragen zur eSIM-Übertragung zwischen iPhone und Android

**F1: Kann ich eine reine Daten-eSIM (z. B. Reise-eSIM) übertragen?**
Meistens nein. Die meisten Reise-eSIMs (Airalo, Holafly, Nomad, Saily) sind für die einmalige Installation konzipiert und unterstützen keine plattformübergreifende Migration. Reine Daten-eSIMs sind in der Regel Einwegprodukte.

**F2: Was passiert mit der alten eSIM nach der Übertragung?**
Sie wird sofort deaktiviert und zeigt „Kein Netz“ an. Sie können das Profil dann manuell aus den Einstellungen des alten Geräts löschen. Die Deaktivierung erfolgt automatisch, sobald die Übertragung abgeschlossen ist. Die **eSIM wechsel android iphone ohne anbieter** ist damit vollständig abgeschlossen.

**F3: Bleiben meine WhatsApp-Chats erhalten?**
Ja. Da sich Ihre Telefonnummer nicht ändert, erkennt WhatsApp den Wechsel. Stellen Sie lediglich sicher, dass Sie vorher ein Backup (iCloud oder Google Drive) erstellt haben, wenn Sie auch die Hardware wechseln.

**F4: Kann ich eine eSIM übertragen, wenn ich Dual-SIM nutze?**
Ja – Sie können eine der beiden aktiven eSIMs übertragen. Die andere bleibt auf dem Quellgerät aktiv. Bei Problemen mit zwei aktiven eSIMs hilft unser **[Dual-eSIM Guide](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**F5: Was ist der Unterschied zwischen eSIM und physischer SIM bei der Übertragung?**
Bei einer physischen SIM müssen Sie die Karte physisch umstecken – bei der eSIM erfolgt die Übertragung digital und ist damit deutlich komfortabler, besonders wenn Sie häufig zwischen Geräten wechseln.

**F6: Kann ich eine eSIM vom iPhone auf ein Android-Gerät übertragen, wenn beide Geräte unterschiedliche Anbieter haben?**
Ja – die Übertragung ist unabhängig vom Anbieter des Zielgeräts, solange der Anbieter der eSIM die plattformübergreifende Übertragung unterstützt. Die Netzwerkverbindung stellt sich automatisch her, sobald die eSIM auf dem neuen Gerät aktiviert ist.

**F7: Was kostet die eSIM-Übertragung?**
Die Übertragung selbst ist in der Regel kostenlos. Einige Anbieter können jedoch eine Gebühr für die Neuausstellung einer eSIM erheben, wenn die direkte Übertragung nicht unterstützt wird und ein neuer QR-Code ausgestellt werden muss.

**F8: Kann ich die eSIM-Übertragung abbrechen, wenn sie einmal gestartet wurde?**
Nein – einmal gestartet, kann die Übertragung nicht mehr abgebrochen werden. Die eSIM wird auf dem Quellgerät deaktiviert und auf dem Zielgerät aktiviert. Stellen Sie daher vor dem Start sicher, dass Sie das richtige Zielgerät ausgewählt haben.

**F9: Was passiert, wenn die Übertragung unterbrochen wird (z. B. durch Akku-Leer)?**
In seltenen Fällen kann die eSIM auf beiden Geräten deaktiviert sein. In diesem Fall kontaktieren Sie Ihren Anbieter – die meisten können das Profil manuell neu ausstellen.

---
*Informationen basierend auf offiziellen Dokumentationen von Apple iOS 18–20, Android 15–17 und GSMA-Standards. Stand: Juni 2026. Funktionen und Anbieterunterstützung können je nach Region variieren.*