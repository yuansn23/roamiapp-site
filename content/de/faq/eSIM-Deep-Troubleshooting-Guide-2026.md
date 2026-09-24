---
title: "eSIM Deep-Troubleshooting-Guide 2026"
h1_title: "Der komplette Leitfaden zur eSIM-Fehlerbehebung 2026 – 18 Lösungen aus der Praxis"
description: "Beheben Sie eSIM-Aktivierungsfehler, Übertragungsfehler, keinen Dienst und QR-Scan-Probleme auf iPhone und Android mit diesem Fehlerbehebungsleitfaden 2026."
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["eSIM Fehlerbehebung", "eSIM Aktivierung fehlgeschlagen", "eSIM kein Dienst", "eSIM Übertragungsfehler", "eSIM plattformübergreifende Übertragung", "iOS 18 eSIM", "eSIM APN-Einstellungen", "eSIM Bestätigungscode", "eSIM Netzbetreiber-Sperre", "eSIM hängt bei Aktivieren fest"]
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
    - question: "Wie aktiviert man eine eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Wie aktiviert man eSIM auf dem iPhone (alle Modelle)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Aktuelle eSIM-Kompatibilitätsliste"
      url: "/compatibility/"
---


> **Hinweis der Redaktion:** Roami betreibt den Support hinter dieser Referenz. Wenn ein Reisender auf einen bestimmten Bildschirmfehler trifft – „Aktivierung fehlgeschlagen", „Kein Dienst", „Mobilfunktarif kann nicht hinzugefügt werden", Wiederherstellungsfehler 4013/4014 – ist dies die Seite, die unser eigenes Team öffnet, um ihn zu entschlüsseln. Jeder Eintrag unten ordnet eine exakte Fehlermeldung seiner tatsächlichen Ursache und einer konkreten Lösung zu, getestet auf iOS 18 und Android 14/15 Stand September 2026.

> **Falsche Seite?** Wenn Ihre Frage lautet „unterstützt mein Handy überhaupt eSIM" – China-/Hongkong-Modell, Netzbetreiber-Sperre, fehlende EID –, ist das eine Hardwarefrage, kein Fehler. Gehen Sie stattdessen zu unserem [eSIM-Hardware- & Fehlercode-Leitfaden](/faq/esim-activation-errors-troubleshooting-guide/). Diese Seite setzt voraus, dass Ihr Handy eSIM nutzen kann und das Problem eine bestimmte Fehlermeldung ist.

## Schneller eSIM-Diagnoseablauf

Nutzen Sie diese Entscheidungslandkarte, um direkt zur Lösung für die genaue Meldung auf Ihrem Bildschirm zu springen.

| Was Sie sehen / erleben | Was wahrscheinlich kaputt ist | Dringlichkeit | Direkt zur Lösung |
|---------------------------|----------------------|---------|-------------|
| **QR-Code lässt sich nicht scannen / wird als ungültig gemeldet** | Abgelaufener oder beschädigter QR-Code | Niedrig | [Abschnitt 3](#esim-qr-code-ungueltig-oder-abgelaufen) |
| **„Aktivierung nicht möglich" oder „Aktivierung fehlgeschlagen"** | Netzwerk-Timeout oder Serverfehler | Mittel | [Abschnitt 1](#esim-aktivierung-fehlgeschlagen-oder-aktivierung-nicht-moeglich) |
| **„Kein Dienst" nach der Installation** | Roaming aus oder APN fehlt | Hoch | [Abschnitt 2](#esim-zeigt-nach-der-installation-kein-dienst) |
| **Volle Signalbalken, aber kein Internet** | APN falsch konfiguriert | Hoch | [Abschnitt 8](#keine-datenverbindung-nach-der-esim-aktivierung) |
| **„Mobilfunktarif kann nicht hinzugefügt werden"** | Zu viele gespeicherte eSIMs oder Hardware-Einschränkung | Mittel | [Abschnitt 5](#mobilfunktarif-kann-nicht-hinzugefuegt-werden) |
| **„eSIM wird bereits verwendet"** | Profil noch an das alte Gerät gebunden | Hoch | [Abschnitt 4](#esim-bereits-in-gebrauch-oder-an-ein-anderes-geraet-gebunden) |
| **Popup mit Bestätigungscode** | Profil erfordert eine PIN | Niedrig | [Abschnitt 6](#bestaetigungscode-fuer-die-esim-erforderlich) |
| **„SIM wird nicht unterstützt"** | Handy ist netzwerkgesperrt | Hoch | [Abschnitt 7](#esim-sim-nicht-unterstuetzt-auf-einem-netzwerkgesperrten-geraet) |
| **Hängt länger als 10 Minuten bei „Aktivieren" fest** | Download steckengeblieben | Mittel | [Abschnitt 9](#esim-haengt-bei-aktivieren-fest) |
| **Dual-SIM: eine Leitung hat kein Signal** | Routing-Konflikt | Mittel | [Abschnitt 10](#dual-esim-mit-einer-leitung-ohne-dienst) |
| **eSIM aufs neue Handy übertragen, sie schlägt fehl** | Plattformübergreifende Übertragung nicht unterstützt | Hoch | [Abschnitt 11](#esim-uebertragung-fehlgeschlagen) |
| **iPhone-Wiederherstellungsfehler 4013/4014** | Hardware-/Firmware-Problem, nicht eSIM | Hoch | [Abschnitt 12](#iphone-esim-wiederherstellungsfehler-4013-oder-4014) |
| **„Profil abgelaufen"** | QR-Code abgelaufen | Niedrig | [Abschnitt 13](#esim-profil-abgelaufen) |
| **Roaming im Ausland funktioniert nicht** | Roaming-Schalter aus | Hoch | [Abschnitt 14](#esim-datenroaming-funktioniert-nicht) |
| **eSIM versehentlich gelöscht** | Anwenderfehler | Hoch | [Abschnitt 15](#esim-versehentlich-geloescht) |
| **MDM blockiert eSIM-Änderungen** | Firmen-Geräterichtlinie | Mittel | [Abschnitt 16](#mdm-oder-unternehmensbeschraenkungen-blockieren-die-esim) |
| **eSIM nach Neustart verschwunden** | iOS/Android-Softwarefehler | Hoch | [Abschnitt 17](#esim-nach-neustart-verschwunden) |
| **WLAN-Anrufe funktionieren, aber eSIM-Daten nicht** | Routing-Konflikt zwischen WLAN und Mobilfunk | Mittel | [Abschnitt 18](#wlan-anrufe-funktionieren-aber-esim-daten-nicht) |
| **Physische SIM eingesetzt, eSIM funktioniert nicht** | SIM-Slot-Konflikt | Hoch | [Abschnitt 19](#esim-im-konflikt-mit-physischer-sim) |
| **Apple-Watch-eSIM verbindet nicht** | Kopplungs- oder Netzbetreiberproblem | Mittel | [Abschnitt 20](#apple-watch-esim-verbindet-nicht) |


## Schnellübersicht

| Symptom | Wahrscheinlichste Ursache | Lösung |
|---------|-------------------|-----|
| „Aktivierung nicht möglich" / „Aktivierung fehlgeschlagen" | Instabiles WLAN oder Serverfehler des Netzbetreibers | Stabiles Netz + Wiederholung, dann Neuinstallation (Abschnitt 1) |
| „Kein Dienst" nach der Installation | Datenroaming aus / APN fehlt | Roaming aktivieren, APN prüfen (Abschnitt 2) |
| QR-Code „Ungültig" / „Abgelaufen" | QR-Code abgelaufen oder bereits verwendet | Neuen QR-Code anfordern (Abschnitt 3) |
| „eSIM wird bereits verwendet" | Profil nicht vom alten Gerät freigegeben | Auf dem alten Gerät löschen oder Freigabe durch den Netzbetreiber (Abschnitt 4) |
| „Mobilfunktarif kann nicht hinzugefügt werden" | Zu viele gespeicherte eSIMs | Unbenutzte eSIMs entfernen (Abschnitt 5) |
| Bestätigungscode erforderlich | Profil hat einen Pflichtcode | Den 4–8-stelligen Code in der Netzbetreiber-E-Mail finden (Abschnitt 6) |
| „SIM wird nicht unterstützt" | Gerät ist netzwerkgesperrt | Gerät entsperren oder Netzbetreiber kontaktieren (Abschnitt 7) |
| Keine Daten nach der Aktivierung | APN nicht konfiguriert | APN manuell eingeben (Abschnitt 8) |
| Hängt bei „Aktivieren" fest | Profil-Download steckengeblieben | Flugmodus umschalten, neu installieren (Abschnitt 9) |
| Eine Dual-SIM-Leitung „Kein Dienst" | Anruf-/Daten-Routing-Konflikt | Leitungs-Routing und Schalter prüfen (Abschnitt 10) |
| eSIM-Übertragung fehlgeschlagen | Netzbetreiber unterstützt keine Übertragung | Netzbetreiber-QR-Code als Fallback nutzen (Abschnitt 11) |
| Wiederherstellungsfehler 4013 / 4014 | Hardware/Firmware bei der Wiederherstellung | Anderes Kabel, Computer aktualisieren (Abschnitt 12) |
| „Profil abgelaufen" | QR-Code zeitlich begrenzt | Neuen QR-Code anfordern (Abschnitt 13) |
| Datenroaming funktioniert nicht | Roaming für die eSIM-Leitung aus | Roaming aktivieren (Abschnitt 14) |
| eSIM versehentlich gelöscht | Profil lokal entfernt | Netzbetreiber kontaktieren / neuen Tarif kaufen (Abschnitt 15) |
| MDM blockiert eSIM-Änderungen | Unternehmensbeschränkung | IT-Administrator kontaktieren (Abschnitt 16) |
| eSIM nach Neustart verschwunden | iOS/Android-Softwarefehler | Einstellungen prüfen, Profil neu hinzufügen (Abschnitt 17) |
| WLAN-Anrufe funktionieren, aber Daten nicht | Routing-Konflikt | WLAN-Anrufe vorübergehend deaktivieren (Abschnitt 18) |
| Physische SIM eingesetzt, eSIM funktioniert nicht mehr | Slot-/Reader-Konflikt | Physische SIM entfernen, neu starten (Abschnitt 19) |
| Apple-Watch-eSIM verbindet nicht | Kopplungs- oder Netzbetreiberproblem | Watch neu koppeln, Netzbetreiber kontaktieren (Abschnitt 20) |


## eSIM-Aktivierung fehlgeschlagen oder Aktivierung nicht möglich

**Ursache:** Fast immer eine instabile WLAN-Verbindung oder ein temporärer Serverfehler des Netzbetreibers (SM-DP+), kein Problem Ihres Handys. Das SM-DP+ (Subscription Manager - Data Preparation Plus) ist der sichere Server, der Ihr eSIM-Profil an Ihr Gerät ausliefert – ist er nicht erreichbar, schlägt die Aktivierung fehl.

**Lösung:**
1. Wechseln Sie zu einer stabilen WLAN- oder Mobilfunkdatenverbindung.
2. Schalten Sie den Flugmodus ein und aus, um das Baseband zu aktualisieren.
3. Wiederholt sich der Fehler, löschen Sie die ausstehende eSIM unter `Einstellungen > Mobilfunk`, starten Sie neu und scannen Sie den QR-Code erneut.

**Speziell für iOS 18:** Unter iOS 18 kann die Meldung „Aktivierung konnte nicht abgeschlossen werden" mit einem Wiederholen-Button erscheinen. Tippen Sie zuerst auf Wiederholen – der verbesserte Aktivierungsablauf von iOS 18 behebt das Problem oft ohne vollständige Neuinstallation.

---

## eSIM zeigt nach der Installation kein Dienst an

**Ursache:** Das Profil wurde installiert, aber das Handy hat sich nicht bei einem lokalen Netz registriert – in der Regel, weil Roaming ausgeschaltet ist oder das APN fehlt.

**Lösung:**
1. Aktivieren Sie **Roaming** für die eSIM-Leitung.
2. Unter `Einstellungen > Mobilfunk > [Ihre eSIM] > Netzwerkauswahl` schalten Sie „Automatisch" aus, wählen manuell einen Netzbetreiber, warten, bis es fehlschlägt, und schalten dann auf „Automatisch" zurück, um eine Neuregistrierung zu erzwingen.
3. Kommen weiterhin keine Daten an, prüfen Sie das APN (Abschnitt 8).

---

## eSIM-QR-Code ungültig oder abgelaufen

**Ursache:** eSIM-QR-Codes sind einmalig und zeitlich begrenzt. Der Code wurde entweder bereits verwendet oder ist abgelaufen.

**Lösung:** Kontaktieren Sie Ihren eSIM-Anbieter und bitten Sie um einen neuen QR-Code, und scannen Sie ihn dann sofort.

**Wenn Sie vom Bildschirm Ihres Handys scannen:** Speichern Sie das QR-Code-Bild zuerst in der Fotos-App, wählen Sie dann in Einstellungen > Mobilfunk > eSIM hinzufügen „QR-Code verwenden" und tippen Sie auf „Foto auswählen", um das gespeicherte Bild auszuwählen. So umgehen Sie das Problem „den eigenen Bildschirm nicht scannen können".

---

## eSIM bereits in Gebrauch oder an ein anderes Gerät gebunden

**Ursache:** Das Profil wurde nie vom alten Gerät freigegeben, sodass der Netzbetreiber es weiterhin mit diesem Handy verknüpft.

**Lösung:**
1. Löschen Sie auf dem alten Gerät die eSIM unter `Einstellungen > Mobilfunk`.
2. Warten Sie etwa fünf Minuten und versuchen Sie es auf dem neuen Gerät erneut.
3. Ist das alte Gerät verloren oder defekt, kontaktieren Sie Ihren Netzbetreiber und bitten Sie ihn, das Profil von seiner Seite aus zwangsweise freizugeben.

---

## Mobilfunktarif kann nicht hinzugefügt werden

**Ursache:** Das Handy hat sein Limit gespeicherter eSIM-Profile erreicht (typischerweise 8–10, je nach Modell), oder das Gerät ist ein Festlandchina-Modell ohne eSIM-Hardware.

**Lösung:** Entfernen Sie unbenutzte eSIMs unter `Einstellungen > Mobilfunk` und fügen Sie dann die neue hinzu. Wurde Ihr Gerät in Festlandchina gekauft, verwendet es zwei physische SIM-Slots und kann keine eSIM hinzufügen – wie Sie ein China- oder Hongkong-Modell identifizieren und bestätigen, dass Ihr Handy die Hardware hat, erfahren Sie in unserem [Hardware-Check- & Fehlerleitfaden](/faq/esim-activation-errors-troubleshooting-guide/).

---

## Bestätigungscode für die eSIM erforderlich

**Ursache:** Manche eSIM-Profile haben einen verpflichtenden Bestätigungscode, der vor dem Herunterladen des Profils erforderlich ist. Dies ist eine 4–8-stellige PIN, die Ihre Identität verifiziert.

**Lösung:** Suchen Sie in der E-Mail, die Ihr Netzbetreiber zusammen mit dem QR-Code gesendet hat, nach einem 4–8-stelligen Code. Finden Sie ihn nicht, kontaktieren Sie den Netzbetreiber.

**Häufige Orte, an denen Sie den Bestätigungscode finden:**
- Betreffzeile der Aktivierungs-E-Mail
- Nahe dem Ende der E-Mail, unter „Aktivierungsdetails"
- In der Netzbetreiber-App unter „Meine Tarife" > „Details"

---

## eSIM „SIM nicht unterstützt" auf einem netzwerkgesperrten Gerät

**Ursache:** Das Handy ist auf einen anderen Netzbetreiber gesperrt und kann kein Profil eines anderen Anbieters annehmen.

**Lösung:** Prüfen Sie `Einstellungen > Allgemein > Info > Netzbetreiber-Sperre`. Steht dort nicht „Keine SIM-Beschränkungen", kontaktieren Sie Ihren Heimatnetzbetreiber und fordern Sie eine Entsperrung an. Eine vollständige Anleitung zu Netzbetreiber-Sperren – Status prüfen, Entsperrrichtlinien der US-Netzbetreiber und wie Sie das Gerät entsperren – finden Sie in unserem [Hardware- & Netzbetreiber-Sperren-Leitfaden](/faq/esim-activation-errors-troubleshooting-guide/).

---

## Keine Datenverbindung nach der eSIM-Aktivierung

**Ursache:** Der Access Point Name (APN) wurde nicht automatisch konfiguriert, sodass das Handy keinen Weg ins Datennetz hat.

**Lösung:**
1. Gehen Sie zu `Einstellungen > Mobilfunk > Mobilfunkdatennetzwerk`.
2. Geben Sie den APN-Wert von der Website Ihres eSIM-Anbieters ein (zum Beispiel `globaldata` bei Airalo).
3. Die meisten Reise-eSIMs konfigurieren das APN automatisch – bestätigen Sie also den richtigen Wert bei Ihrem Anbieter.

**Häufige APN-Werte nach Anbieter (falls die automatische Konfiguration fehlschlägt):**

| Anbieter | APN | Benutzername | Passwort |
|----------|-----|----------|----------|
| Roami | internet | (leer) | (leer) |
| Airalo | globaldata | (leer) | (leer) |
| Holafly | hola | (leer) | (leer) |
| Nomad | nbdata | (leer) | (leer) |
| Ubigi | ubigi | (leer) | (leer) |
| Google Fi | h2g2 | (leer) | (leer) |
| T-Mobile (US) | fast.t-mobile.com | (leer) | (leer) |
| AT&T (US) | nxgen | (leer) | (leer) |
| Verizon (US) | vzwinternet | (leer) | (leer) |
| EE (UK) | everywhere | (leer) | (leer) |
| O2 (UK) | mobile.o2.co.uk | web | web |
| Vodafone (UK) | internet | (leer) | (leer) |
| Three (UK) | three.co.uk | (leer) | (leer) |

---

## eSIM hängt bei Aktivieren fest

**Ursache:** Der Profil-Download ist steckengeblieben, oft wegen eines schwachen Signals oder eines ausgelasteten Aktivierungsservers.

**Lösung:**
1. Stellen Sie sicher, dass Sie in einem stabilen Netz sind.
2. Schalten Sie den Flugmodus ein und aus.
3. Bleibt es länger als 10 Minuten hängen, löschen Sie die eSIM und installieren Sie sie über den QR-Code neu.

---

## Dual-eSIM mit einer Leitung ohne Dienst

**Ursache:** Bei zwei aktiven eSIMs können sich die Weiterleitung eingehender Anrufe und die Daten-Routing in die Quere kommen, sodass eine Leitung ohne Dienst bleibt. Dies ist ein häufiges **Dual-eSIM-Signalproblem**, das Nutzer mit zwei aktiven Leitungen betrifft.

**Lösung:**
1. Prüfen Sie unter `Einstellungen > Mobilfunk`, welche Leitung für **Mobilfunkdaten** und welche für die **Standard-Leitung für Sprachanrufe** festgelegt ist.
2. Schalten Sie jede Leitung aus und wieder ein.
3. Für eine tiefergehende Lösung siehe unseren Leitfaden **[Funktioniert die Dual-eSIM nicht? 12 Lösungen für das iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## eSIM-Übertragung fehlgeschlagen

**Ursache:** Es gibt keine integrierte plattformübergreifende eSIM-Übertragung, und Ihr Netzbetreiber unterstützt möglicherweise keine App-basierte Übertragung.

**Lösung:** Bitten Sie Ihren Netzbetreiber, die eSIM als neuen QR-Code neu auszustellen, und scannen Sie sie auf dem neuen Gerät. Nach der Übertragung funktionieren WhatsApp, iMessage und SMS-Zweifaktor-Codes weiter, weil sich Ihre Nummer nicht geändert hat. Vollständige Schritt-für-Schritt-Anleitungen finden Sie in unserem **[eSIM-Übertragungsleitfaden](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## iPhone-eSIM-Wiederherstellungsfehler 4013 oder 4014

**Ursache:** Diese Fehler deuten auf ein Hardware- oder Firmware-Problem während einer Software-Wiederherstellung hin, nicht auf ein eSIM-Problem. Sie werden oft durch ein defektes USB-Kabel oder veraltete Computer-Software verursacht.

**Lösung:** Probieren Sie ein anderes Kabel und einen anderen USB-Anschluss, aktualisieren Sie das Betriebssystem Ihres Computers und versuchen Sie die Wiederherstellung erneut. Bleibt der Fehler bestehen, kontaktieren Sie den Apple-Support.

---

## eSIM-Profil abgelaufen

**Ursache:** Der eSIM-QR-Code oder Aktivierungscode war zeitlich begrenzt und ist abgelaufen.

**Lösung:** Kontaktieren Sie Ihren eSIM-Anbieter, fordern Sie einen neuen QR-Code an und aktivieren Sie ihn umgehend.

---

## eSIM-Datenroaming funktioniert nicht

**Ursache:** Roaming ist für die Reise-eSIM-Leitung ausgeschaltet, sodass sie sich nicht mit dem lokalen Netz verbinden kann.

**Lösung:** Gehen Sie zu `Einstellungen > Mobilfunk > [Ihre eSIM]` und aktivieren Sie **Roaming**. Dies ist für die meisten Reise-eSIMs im Ausland erforderlich.

---

## eSIM versehentlich gelöscht

**Ursache:** Das Löschen einer eSIM entfernt das Profil vom Handy, kündigt aber nicht den Tarif.

**Lösung:**
- Bei Postpaid-Netzbetreiber-eSIMs: Kontaktieren Sie den Netzbetreiber – er kann den QR-Code in der Regel neu ausstellen.
- Bei Reise-eSIMs (Roami, Airalo und ähnliche) ist die Löschung meist endgültig, Sie müssen also einen neuen Tarif kaufen.
- Bewahren Sie immer eine Sicherung Ihrer ursprünglichen Aktivierungs-E-Mail und des QR-Codes auf.

---

## MDM- oder Unternehmensbeschränkungen blockieren die eSIM

**Ursache:** Auf einem verwalteten (geschäftlichen) Gerät kann eine Mobile-Device-Management-Richtlinie wie `AllowESIMModification` das Hinzufügen oder Entfernen von eSIMs blockieren.

**Lösung:** Kontaktieren Sie Ihren IT-Administrator, um eSIM-Änderungen zu ermöglichen, oder verwenden Sie ein nicht verwaltetes Gerät.

---

## eSIM nach Neustart verschwunden

**Symptom:** Sie haben Ihr Handy neu gestartet, und die eSIM wird unter Einstellungen > Mobilfunk nicht mehr aufgelistet. Sie ist weg.

**Ursache:** Ein Softwarefehler auf iOS oder Android kann manchmal dazu führen, dass eSIM-Profile nach einem Neustart versteckt oder unlesbar werden, besonders nach einem OS-Update. Das Profil ist noch auf dem Gerät, aber das System konnte es nicht einbinden.

**Lösung:**
1. **iPhone:** Gehen Sie zu Einstellungen > Allgemein > Info und scrollen Sie nach unten zu „Verfügbare SIM" oder „Digitale SIM". Erscheint die eSIM dort, aber nicht unter Mobilfunk, starten Sie das Handy erneut.
2. **iPhone:** Hilft der Neustart nicht, gehen Sie zu Einstellungen > Mobilfunk > eSIM hinzufügen. Manchmal erkennt das Handy das vorhandene Profil und bietet an, es ohne neuen QR-Code wieder hinzuzufügen.
3. **Android (Samsung):** Gehen Sie zu Einstellungen > Verbindungen > SIM-Manager. Die eSIM wird möglicherweise als „Inaktiv" angezeigt. Tippen Sie darauf und schalten Sie sie ein.
4. **Android (Pixel):** Gehen Sie zu Einstellungen > Netzwerk & Internet > SIMs. Fehlt die eSIM, tippen Sie auf „Netzbetreiber hinzufügen" – das Handy erkennt möglicherweise das vorhandene Profil.
5. Hilft nichts davon, kontaktieren Sie Ihren Netzbetreiber und fordern Sie einen neuen QR-Code an. Das alte Profil ist möglicherweise beschädigt.

**Vorbeugung:** Schalten Sie vor dem Neustart alle eSIM-Leitungen AUS, starten Sie dann neu und schalten Sie sie wieder EIN. Das verringert die Wahrscheinlichkeit, dass das System den Überblick über das Profil verliert.

---

## WLAN-Anrufe funktionieren, aber eSIM-Daten nicht

**Symptom:** WLAN-Anrufe sind auf Ihrer Heimatleitung aktiv, aber Ihre Reise-eSIM hat keine Datenverbindung. Oder: Die eSIM funktioniert über WLAN, aber nicht über Mobilfunk.

**Ursache:** Ein Routing-Konflikt zwischen WLAN-Anrufen und Mobilfunkdaten. Wenn WLAN-Anrufe aktiv sind, priorisiert das Handy möglicherweise das WLAN-Netz für die gesamte Kommunikation, einschließlich Daten, und leitet die Mobilfunkdaten nicht korrekt über die eSIM.

**Lösung:**
1. Deaktivieren Sie WLAN-Anrufe vorübergehend auf Ihrer Heimatleitung: Einstellungen > Mobilfunk > [Heimatleitung] > WLAN-Anrufe > AUS.
2. Schalten Sie den Flugmodus ein und aus, um das Handy zu zwingen, sich im Mobilfunknetz neu zu registrieren.
3. Testen Sie die eSIM-Datenverbindung. Funktioniert sie, können Sie WLAN-Anrufe wieder einschalten – das Routing sollte jetzt korrekt sein.
4. Tritt das Problem erneut auf, prüfen Sie, dass Ihre Heimatleitung **Roaming AUS** und die Reise-eSIM **Roaming EIN** hat.

**Alternative:** Gehen Sie auf dem iPhone zu Einstellungen > Mobilfunk > Mobilfunkdaten und stellen Sie sicher, dass die Reise-eSIM ausgewählt ist. Aktivieren Sie dann „Mobilfunkdatenwechsel erlauben" – so kann das Handy die Reise-eSIM für WLAN-Anruf-Daten nutzen, selbst wenn die Heimatleitung die Sprachleitung ist.

---

## eSIM im Konflikt mit physischer SIM

**Symptom:** Sie setzen eine physische SIM-Karte in Ihr Handy ein, und Ihre zuvor funktionierende eSIM zeigt plötzlich „Kein Dienst" an oder verschwindet komplett aus den Einstellungen.

**Ursache:** Dies ist ein bekanntes Verhalten bei Geräten mit Netzbetreiber-Sperre. Erkennt ein gesperrtes iPhone eine physische SIM eines anderen Netzbetreibers, deaktiviert es möglicherweise den eSIM-Slot, um unbefugte Nutzung zu verhindern. Bei manchen Android-Geräten kann das Einsetzen einer physischen SIM auch dazu führen, dass das System die physische SIM für alle Funktionen gegenüber der eSIM priorisiert. Neu beim Mischen beider Formate? Der [eSIM vs. physische SIM Vergleich](/faq/what-is-esim/) erklärt, wie sie koexistieren.

**Lösung:**
1. Entfernen Sie die physische SIM-Karte aus dem Slot.
2. Starten Sie Ihr Handy neu.
3. Die eSIM sollte unter Einstellungen > Mobilfunk (iPhone) bzw. Einstellungen > Verbindungen > SIM-Manager (Android) wieder erscheinen.
4. Erscheint die eSIM, zeigt aber weiterhin „Kein Dienst", schalten Sie Roaming für die eSIM-Leitung EIN.
5. Benötigen Sie sowohl die physische SIM als auch die eSIM gleichzeitig, kontaktieren Sie Ihren Netzbetreiber, um Ihr Gerät entsperren zu lassen.

> **Alternative:** Manche Nutzer berichten, dass das Aus- und Wiedereinschalten der eSIM-Leitung (ohne Entfernen der physischen SIM) den Konflikt behebt. Versuchen Sie dies zuerst, bevor Sie die physische SIM entfernen.

---

## Apple Watch eSIM verbindet nicht

**Symptom:** Sie haben Mobilfunk auf Ihrer Apple Watch eingerichtet, aber sie zeigt „Kein Dienst" oder „Suchen" – oder der eSIM-Tarif erscheint gar nicht in der Watch-App.

**Ursache:** Die Apple-Watch-eSIM-Aktivierung erfordert Netzbetreiber-Unterstützung für den spezifischen Tariftyp der Watch, und die Einrichtung erfordert, dass Ihr iPhone in der Nähe mit einer stabilen Internetverbindung ist.

**Lösung:** Prüfen Sie, dass Ihr Netzbetreiber Apple-Watch-eSIM unterstützt, entkoppeln Sie die Watch und koppeln Sie sie neu, wobei Ihr iPhone während des gesamten Vorgangs in der Nähe bleibt. Aktiviert sie sich weiterhin nicht, kontaktieren Sie Ihren Netzbetreiber mit der **EID** und der **IMEI** der Watch, damit er sie manuell provisionieren kann. Eine vollständige Anleitung – einschließlich der Frage, welche iPad- und Apple-Watch-Modelle eSIM unterstützen – finden Sie in unserem [iPad- und Apple-Watch-eSIM-Leitfaden](/faq/ipad-apple-watch-esim-support-guide/).

---

## Referenz der eSIM-Fehlercodes

| Fehlercode | Plattform | Bedeutung | Lösung |
|------------|----------|---------|-----|
| **4013** | iPhone (Wiederherstellung) | Hardware-/Firmware-Fehler bei der Wiederherstellung | Kabel, USB-Anschluss wechseln, macOS/iTunes aktualisieren |
| **4014** | iPhone (Wiederherstellung) | Ähnlich wie 4013; meist ein USB-Kommunikationsproblem | Wie oben |
| **-8** | Android (Aktivierung) | Netzwerk-Timeout | Warten und wiederholen oder WLAN wechseln |
| **-100** | Android (QR-Scan) | QR-Code-Format nicht unterstützt | Manuelle Eingabe verwenden |
| **0xE8000001** | iPhone (Aktivierung) | Netzbetreiber-Server nicht erreichbar | Nach 5 Minuten erneut versuchen oder manuelle Eingabe nutzen |
| **„eSIM-Konfiguration wird nicht unterstützt"** | Android (Samsung) | Netzbetreiber unterstützt keine eSIM auf diesem Modell | Beim Netzbetreiber nachfragen |
| **„Ungültige SM‑DP+ Adresse"** | Beide | Manuell eingegebene Adresse ist falsch | Adresse Ihres Anbieters nochmals prüfen |
| **„LPA-Fehler -1"** | Android | Generischer LPA-Fehler (Local Profile Assistant) | Handy neu starten, erneut versuchen. Bestehen bleibend: andere eSIM-App verwenden. |
| **„EID-Abweichung"** | Beide | Das Profil ist an ein anderes Gerät gebunden | Netzbetreiber kontaktieren, um das Profil freizugeben (Abschnitt 4) |
| **„Keine EID" beim Wählen von `*#06#`** | Beide | Gerät unterstützt keine eSIM | Ihrem Handy fehlt die eSIM-Hardware – siehe unseren [Hardware-Check-Leitfaden](/faq/esim-activation-errors-troubleshooting-guide/) |
| **„eSIM-Verwaltung nicht verfügbar"** | Android (OnePlus) | Oxygen-OS-Bug | Auf die neueste Oxygen-OS-Version aktualisieren |
| **„Profil kann nicht gelöscht werden"** | iPhone | eSIM steckt im ausstehenden Zustand fest | iPhone neu starten, dann erneut löschen versuchen. Bleibt es hängen: Netzbetreiber kontaktieren. |
| **-1** | Beide | Generischer Aktivierungsfehler | Handy neu starten, Netzwerkverbindung sicherstellen, erneut versuchen |
| **-2** | Android | Ungültiger Aktivierungscode | Code erneut eingeben oder beim Netzbetreiber einen neuen anfordern |


## Fehler, die Ihre eSIM ruinieren

Dies sind die häufigsten Anwenderfehler, die aus einer funktionierenden eSIM einen Ziegelstein machen. Vermeiden Sie sie um jeden Preis – die meisten lassen sich darauf zurückführen, wie die Aktivierung tatsächlich funktioniert, was der [eSIM-Aktivierungs-Erklärer](/faq/what-is-esim-activation-and-how-does-it-work/) Schritt für Schritt behandelt.

| Fehler | Was passiert | So vermeiden Sie ihn |
|---------|--------------|--------------|
| **Die eSIM löschen, um ein Verbindungsproblem zu „reparieren"** | Das Profil wird dauerhaft entfernt – Sie verlieren alle verbleibenden Daten und müssen einen neuen Tarif kaufen | Tippen Sie niemals auf „eSIM löschen", es sei denn, der Tarif ist vollständig abgelaufen. Löschen „aktualisiert" nicht – es zerstört. |
| **Den QR-Code mit der Kamera-App scannen** | Die Kamera erkennt den Code, tut aber nichts – es wird kein Profil installiert | Öffnen Sie immer zuerst Einstellungen > Mobilfunk > eSIM hinzufügen – niemals die eigenständige Kamera-App. |
| **Am Flughafen mit schwachem WLAN installieren** | Der Download bricht mittendrin ab und beschädigt das Profil | Installieren Sie zu Hause über Ihr eigenes stabiles WLAN, bevor Sie losfahren. |
| **Warten, bis Sie gelandet sind, um zu installieren** | Sie kommen ohne WLAN an und können das Profil nicht herunterladen | Installieren Sie das Profil vor der Abreise (es bleibt inaktiv, bis Sie Roaming einschalten). |
| **Vergessen, Roaming für die eSIM einzuschalten** | Volle Signalbalken, aber null Internet | Gehen Sie nach der Landung zu Einstellungen > Mobilfunk > [Ihre eSIM] und schalten Sie Roaming EIN. |
| **Netzwerkeinstellungen zurücksetzen in der Annahme, es „aktualisiere" die eSIM** | Der Netzwerk-Reset löscht keine eSIMs, entfernt aber WLAN-Passwörter und Bluetooth-Kopplungen – Sie verlieren alle gespeicherten Netze | Setzen Sie die Netzwerkeinstellungen nur als letzten Ausweg zurück, und wissen Sie, dass es eSIM-Aktivierungsprobleme nicht behebt. |
| **Die eSIM-Leitung ausschalten statt nur Roaming zu deaktivieren** | Die eSIM ist vollständig deaktiviert und registriert sich beim Wiederaktivieren nicht | Schalten Sie Roaming aus, nicht die gesamte Leitung. Lassen Sie die Leitung EIN, aber Roaming AUS, wenn sie nicht genutzt wird. |


## Mehrere eSIM-Probleme gleichzeitig

Manchmal haben Sie nicht nur ein Problem – Sie haben zwei oder drei gleichzeitig. So diagnostizieren Sie Kombinationssymptome:

| Symptomkombination | Was tatsächlich passiert | Reihenfolge der Lösung |
|---------------------|---------------------------|-----------|
| **QR-Code scannt, dann „Aktivierung fehlgeschlagen"** | QR-Code ist gültig, aber der Download-Server ist nicht erreichbar | Zuerst das Netz reparieren (Abschnitt 1), dann neu scannen |
| **eSIM zeigt Signalbalken, aber keine Daten UND „Kein Dienst" auf der Heimatleitung** | APN fehlt UND Sie haben einen Dual-SIM-Routing-Konflikt | Zuerst das APN reparieren (Abschnitt 8), dann das Dual-SIM-Routing (Abschnitt 10) |
| **Übertragung erfolgreich, aber neues Handy zeigt „Kein Dienst"** | Profil übertragen, aber nicht im neuen Netz registriert | Die eSIM vom alten Handy löschen, dann das neue Handy neu starten (Abschnitt 4 + Abschnitt 2) |
| **WLAN-Anrufe funktionieren, aber eSIM hat keine Daten UND Heimatleitung hat Roaming-Gebühren** | Mehrere Routing-Konflikte plus Roaming auf der Heimatleitung eingeschaltet gelassen | Roaming der Heimatleitung ausschalten, WLAN-Anruf-Konflikt beheben (Abschnitt 18), dann das APN prüfen |
| **eSIM nach Neustart verschwunden UND „Mobilfunktarif kann nicht hinzugefügt werden"** | Profil ist beschädigt UND der Speicher ist voll | Zuerst unbenutzte eSIMs entfernen (Abschnitt 5), dann neu hinzufügen versuchen (Abschnitt 17) |

**Allgemeine Regel:** Beheben Sie zuerst **Netzwerkprobleme** (WLAN, Roaming, APN), dann **Profilprobleme** (QR-Code, Aktivierung), dann **gerätespezifische Probleme** (Netzbetreiber-Sperre, MDM). Versuchen Sie nicht, alles gleichzeitig zu reparieren – arbeiten Sie die Symptome einzeln ab.


## Wo Sie „eSIM hinzufügen" auf jedem Handy finden

Die Lösung für die meisten Fehler ist dieselbe, aber der Menüpfad zu den eSIM-Einstellungen variiert je nach Marke. Hier sind die genauen Pfade plus die Fehler-Eigenheiten, die nur bei bestimmten Geräten auftreten. (Für die vollständigen Installationsmethoden hinter diesen Menüs enthält der [allgemeine Aktivierungsleitfaden](/faq/how-to-activate-an-esim/) jeden Schritt.)

### iPhone-eSIM-Menüpfad
- **„eSIM hinzufügen" ausgegraut** – Ihr iPhone ist möglicherweise netzwerkgesperrt. Prüfen Sie Einstellungen > Allgemein > Info > Netzbetreiber-Sperre; die vollständige Lösung zur Netzbetreiber-Sperre finden Sie in unserem [Netzbetreiber-Sperren- & Hardware-Leitfaden](/faq/esim-activation-errors-troubleshooting-guide/).
- **Schnellübertragung schlägt fehl** – stellen Sie sicher, dass beide Handys dieselbe Apple-ID haben, Bluetooth eingeschaltet ist und sie sich innerhalb von 10 cm voneinander befinden.
- **Nach iOS-Update zeigt die eSIM „Kein Dienst"** – gehen Sie zu Einstellungen > Mobilfunk > die eSIM antippen > „Diese Leitung aktivieren" aus- und wieder einschalten. Prüfen Sie außerdem, dass Roaming noch EIN ist.
- **eSIM nach iOS-Update verschwunden** – siehe Abschnitt 17. Das kommt bei iOS nach großen Updates häufiger vor als bei Android.
- **Speziell für iOS 18:** Der „eSIM hinzufügen"-Ablauf wurde neu gestaltet, mit einer prominenteren Option für die manuelle Eingabe. Wenn Sie unter iOS 18 den QR-Code nicht scannen können, finden Sie den Button für die manuelle Eingabe jetzt leichter am unteren Bildschirmrand.

### Samsung-Galaxy-eSIM-Menüpfad
- **Der Menüpfad variiert je nach One-UI-Version:**
  - **One UI 5 (Android 13):** Einstellungen > Verbindungen > SIM-Manager > eSIM hinzufügen
  - **One UI 6/6.1 (Android 14):** Einstellungen > Verbindungen > SIM-Manager > eSIM hinzufügen (gleicher Pfad)
  - **One UI 7 (Android 15):** Einstellungen > Verbindungen > SIM-Manager > Mobilfunktarif hinzufügen
- **QR-Code-Scan schlägt fehl** – versuchen Sie die manuelle Eingabe (auf „Aktivierungscode manuell eingeben" tippen). Samsung verlangt die SM‑DP+ Adresse und den Aktivierungscode oft separat.
- **Dual-SIM-Konflikt** – wenn Sie eine physische SIM und eine eSIM haben, prüfen Sie, dass die eSIM im SIM-Manager als Daten-SIM festgelegt ist.

### Google-Pixel-eSIM-Menüpfad
- **„Stattdessen SIM herunterladen?"** – diese Option erscheint am unteren Rand des SIM-Einstellungsbildschirms. Sehen Sie sie nicht, ist Ihr Pixel möglicherweise netzwerkgesperrt.
- **eSIM erscheint nach dem Scan nicht** – starten Sie das Handy neu. Pixel benötigt manchmal einen Neustart nach dem Profil-Download.
- **APN-Einstellungen werden nicht gespeichert** – beim Pixel finden sich die APN-Einstellungen unter Netzwerk & Internet > SIMs > [Ihre eSIM] > Zugangspunkte. Werden sie nicht gespeichert:
  1. Fügen Sie einen neuen APN mit einem **anderen Namen** hinzu (z. B. „Airalo 2" statt „Airalo").
  2. Speichern Sie ihn und wählen Sie ihn dann manuell aus.
  3. Schalten Sie den Flugmodus ein und aus, damit der neue APN wirksam wird.
- **eSIM verschwindet nach Neustart beim Pixel** – siehe Abschnitt 17. Pixel-Nutzer berichten dies häufiger als Samsung-Nutzer.

### OnePlus-eSIM-Menüpfad
- **Menüpfad:** Einstellungen > WLAN & Netzwerk > SIM & Netzwerk > eSIM hinzufügen
- **Häufiges Problem:** OnePlus-Geräte zeigen nach einem Oxygen-OS-Update manchmal „eSIM nicht verfügbar". Lösung: Gehen Sie zu Einstellungen > System > Systemupdate und installieren Sie den neuesten Patch.
- **APN-Einstellungen:** Zu finden unter Einstellungen > WLAN & Netzwerk > SIM & Netzwerk > [eSIM] > Zugangspunkte.

### Xiaomi-eSIM-Menüpfad
- **Menüpfad:** Einstellungen > SIM-Karten & mobile Netzwerke > eSIM hinzufügen
- **APN-Einstellungen:** Zu finden unter Einstellungen > SIM-Karten & mobile Netzwerke > [eSIM] > Zugangspunkte.

### Oppo- und Realme-eSIM-Menüpfad
- **Menüpfad:** Einstellungen > Mobilfunknetz > eSIM hinzufügen

**Nicht sicher, ob Ihr genaues Modell überhaupt eSIM-Hardware hat** (China-Markt-Xiaomi, Huawei, vom Netzbetreiber deaktivierte Samsung-A-Serie)? Das ist eine Kompatibilitätsfrage – siehe unseren [Hardware- & Modellunterstützungs-Leitfaden](/faq/esim-activation-errors-troubleshooting-guide/), der die Unterstützung Modell für Modell abdeckt.


## eSIM funktioniert zu Hause, aber nicht im Ausland

**Symptom:** Sie haben die eSIM zu Hause installiert, sie zeigt Signalbalken, aber wenn Sie an Ihrem Zielort landen, gibt es keinen Dienst. Zielortspezifische Eigenheiten – Partnernetze, regionale Sperren, Ankunft-Checklisten – sind in unserem [Reise-eSIM-Leitfaden](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) gesammelt.

**Grundursache:** Das eSIM-Profil wurde aktiviert, während Sie in Ihrem Heimnetz waren, und hat sich nicht beim Zielnetz registriert.

**Lösung:**
1. Schalten Sie die eSIM-Leitung aus (`Einstellungen > Mobilfunk > ausschalten`).
2. Warten Sie 10 Sekunden, dann schalten Sie sie wieder ein.
3. Gehen Sie zur Netzwerkauswahl, schalten Sie „Automatisch" aus und wählen Sie manuell ein Netz, mit dem Ihr Anbieter zusammenarbeitet (fragen Sie Ihren Anbieter nach der Partnerliste).
4. Schlägt es fehl, schalten Sie Roaming aus und wieder ein.
5. Starten Sie das Handy neu.

Funktioniert es weiterhin nicht, kontaktieren Sie Ihren Anbieter – Ihr eSIM-Tarif enthält möglicherweise gar nicht das Land, in dem Sie sind, oder es gibt ein Problem mit der Roaming-Vereinbarung.


## eSIM funktioniert bei einem Netzbetreiber, aber nicht bei einem anderen

**Symptom:** Sie haben eine eSIM, die einwandfrei funktioniert, aber wenn Sie eine zweite eSIM eines anderen Netzbetreibers hinzufügen möchten, schlägt es fehl oder zeigt „Kein Dienst" an.

**Grundursache:** Manche Handy-Modelle (besonders ältere) haben Einschränkungen, welche Netzbetreiber-Profile koexistieren können. Das ist häufiger bei Android-Geräten mit älterer Modem-Firmware.

**Lösung:**
1. Prüfen Sie, dass Ihr Handy Dual-eSIM unterstützt (iPhone 13 und neuer, Pixel 7 und neuer, Samsung S23 und neuer).
2. Haben Sie eine physische SIM eingesetzt, versuchen Sie, sie zu entfernen – manche Handys begrenzen die Anzahl aktiver Profile, wenn eine physische SIM vorhanden ist.
3. Aktualisieren Sie die Firmware Ihres Handys (Netzbetreiber-Settings-Updates beheben das oft).
4. Kontaktieren Sie den zweiten Netzbetreiber und fragen Sie, ob sein eSIM-Profil die Dual-SIM-Koexistenz unterstützt.


## Wann Sie Ihren eSIM-Anbieter kontaktieren sollten und wann den Handyhersteller

| Problem | Kontakt |
|---------|---------|
| QR-Code abgelaufen / ungültig | eSIM-Anbieter |
| „Aktivierung fehlgeschlagen" wiederholt | eSIM-Anbieter |
| Keine Daten nach der APN-Konfiguration | eSIM-Anbieter |
| Gerät zeigt nach der Landung „Kein Dienst" | eSIM-Anbieter (Roaming-Vereinbarung prüfen) |
| eSIM erscheint nicht in den Einstellungen | Handyhersteller (bei Softwarefehler) oder Netzbetreiber-Sperren-Problem |
| Hardwareprobleme (Kamera, Bildschirm, Akku) | Handyhersteller |
| Netzbetreiber-Sperre / Entsperrung | Ihr Heimatnetzbetreiber |
| MDM-Beschränkung | Ihre IT-Abteilung |
| eSIM nach Neustart verschwunden | Beide – die Lösungen in Abschnitt 17 versuchen, dann den Anbieter kontaktieren |
| „eSIM wird bereits verwendet" | eSIM-Anbieter (um das Profil zwangsweise freizugeben) |
| Apple-Watch-eSIM verbindet nicht | Netzbetreiber (für die Provisionierung) oder Apple-Support (bei Kopplungsproblemen) |


## Häufig gestellte Fragen

**F1: Kündigt das Löschen einer eSIM meinen Tarif?**
Nein. Das Löschen der eSIM entfernt nur das Profil vom Handy. Sie müssen den Netzbetreiber separat kontaktieren, um den Tarif zu kündigen.

**F2: Kann ich eine gelöschte eSIM wiederherstellen?**
Bei Postpaid-Netzbetreiber-eSIMs ja – der Netzbetreiber kann das Profil neu ausstellen. Bei Reise-eSIMs ist die Löschung meist endgültig und erfordert einen Neukauf.

**F3: Warum funktioniert meine eSIM über WLAN, aber nicht über Mobilfunk?**
Das ist fast immer ein APN- oder Roaming-Problem. Folgen Sie Abschnitt 8 und Abschnitt 14.

**F4: Verbraucht eine eSIM meinen Akku schneller?**
Nein. Zwei aktive Leitungen gleichzeitig zu betreiben kann etwas mehr Strom verbrauchen, aber eine einzelne eSIM verbraucht den Akku nicht.

**F5: Wie viele eSIMs kann ich auf meinem Handy speichern?**
Typischerweise 8–10 Profile auf dem iPhone und den meisten Android-Geräten. Sie können viele mehr speichern, aber nur zwei sind gleichzeitig aktiv (Dual-SIM).

**F6: Warum verliert meine eSIM ständig das Signal?**
Das kann an Netzüberlastung, schwacher Abdeckung oder einem Softwarefehler liegen. Versuchen Sie, den Flugmodus umzuschalten, neu zu starten oder ein Netz manuell auszuwählen.

**F7: Ich sehe „Aktivierung erforderlich" auf meiner eSIM nach einem Neustart – was bedeutet das?**
Das Handy hat die Verbindung zum Aktivierungsserver des Netzbetreibers verloren. Starten Sie das Handy neu und stellen Sie sicher, dass Sie eine Netzwerkverbindung haben. Bleibt es bestehen, löschen Sie die eSIM und installieren Sie sie neu.

**F8: Was, wenn mein Netzbetreiber sagt, er unterstütze keine eSIM?**
Sie können weiterhin Reise-eSIM-Anbieter wie Roami, Airalo oder Holafly nutzen – sie funktionieren unabhängig von Ihrem Heimatnetzbetreiber und benötigen keine Netzbetreiber-Unterstützung.

**F9: Meine eSIM wurde auf mein neues iPhone übertragen, aber ich kann nicht telefonieren – nur Daten funktionieren.**
Prüfen Sie, dass die eSIM als Standard-Leitung für Sprachanrufe festgelegt ist. Stellen Sie außerdem sicher, dass Ihr Netzbetreiber VoLTE für diese Leitung unterstützt.

**F10: Der QR-Code-Scan funktioniert, aber der Download dauert ewig – ist das normal?**
Nein. Es sollte 1–2 Minuten dauern. Dauert es länger, ist Ihr WLAN zu langsam. Wechseln Sie das Netz oder nutzen Sie die manuelle Eingabe.

**F11: Meine eSIM ist aktiv, aber ich kann keine SMS senden oder empfangen.**
Manche Reise-eSIMs sind nur für Daten und unterstützen kein SMS. Wenn Sie SMS brauchen, kaufen Sie einen Tarif, der ausdrücklich eine Telefonnummer enthält.

**F12: Ich habe versehentlich meine Netzwerkeinstellungen zurückgesetzt – jetzt ist meine eSIM weg.**
Der Netzwerkeinstellungen-Reset löscht keine eSIM-Profile. Ihre eSIM sollte noch da sein. Gehen Sie zu Einstellungen > Mobilfunk und aktivieren Sie die Leitung wieder. Ist sie weg, haben Sie sie möglicherweise versehentlich gelöscht – dann siehe Abschnitt 15.

**F13: Was ist der Unterschied zwischen dem Löschen und dem Ausschalten einer eSIM?**
Das Ausschalten einer eSIM behält das Profil auf dem Handy, deaktiviert aber die Leitung. Sie können sie jederzeit wieder einschalten. Das Löschen einer eSIM entfernt das Profil dauerhaft – Sie können sie nicht wiederherstellen, ohne einen neuen QR-Code. Löschen Sie nur, wenn der Tarif vollständig abgelaufen ist.

**F14: Kann ein VPN die eSIM-Aktivierung stören?**
Ja – VPNs können die Verbindung zum Aktivierungsserver stören. Schalten Sie Ihr VPN aus, bevor Sie eine eSIM aktivieren.

**F15: Mein eSIM-Tarif sagt „unbegrenzt", aber ich habe nach 5 GB keine Daten mehr.**
Viele „unbegrenzte" Tarife haben eine Fair-Use-Policy (FUP), die die Geschwindigkeit nach einem bestimmten Datenvolumen drosselt. Prüfen Sie die Bedingungen Ihres Anbieters – eventuell müssen Sie ein Top-up für mehr Hochgeschwindigkeitsdaten kaufen.

👉 **Fehlerbehebung abgeschlossen?** Wählen Sie einen [USA-eSIM-Tarif](/united-states-esim/) oder einen [Europa-eSIM-Tarif](/europe-esim/), um wieder online zu gehen.

---

## Quellen

- [GSMA — eSIM-Spezifikation (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM auf dem iPhone einrichten](https://support.apple.com/en-us/HT212780)
- [Google-Support — Eine eSIM einrichten](https://support.google.com/pixelphone/answer/14853135)
- [Google-Support — Android eSIM](https://support.google.com/android/answer/11241215)
