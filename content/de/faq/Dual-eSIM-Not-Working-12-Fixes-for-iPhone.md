---
title: "Dual-eSIM nicht verfügbar? 12 iPhone Fixes"
description: "Zweite eSIM ohne Netz? Anrufe zur Mailbox? Lösungen für CDMA-Fallback, T-ADS-Cache, Akku & Carrier-Lock. Für iPhone 17, 16, iOS 26."
keywords: ["eSIM Fehlerbehebung", "eSIM Aktivierung fehlgeschlagen", "eSIM kein Netz", "eSIM Übertragungsfehler", "Apple eSIM", "iOS 26 eSIM", "iPad eSIM funktioniert nicht", "eSIM APN Einstellungen", "eSIM Bestätigungscode", "eSIM Profil abgelaufen", "eSIM an anderes Gerät gebunden", "Dual eSIM Signalproblem", "eSIM DFU Fehler 53", "eSIM Carrier Lock", "eSIM plattformübergreifende Übertragung"]
date: 2026-06-01T10:00:00Z
lastmod: 2026-06-01T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Fehlerbehebung", "Reise-Setup"]
toc: true

# 站点 & SEO 基础硬编码配置
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI 文本翻译/硬编码配置
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
    - question: "Wie aktiviert man eine eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Wie aktiviere ich eine eSIM auf dem iPhone (Alle Modelle)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Aktuelle eSIM-Kompatibilitätsliste"
      url: "/compatibility/"
---

> Die Nutzung von zwei Telefonnummern auf einem iPhone ist unglaublich praktisch – birgt aber versteckte Tücken. Von CDMA-GSM-Konflikten bis hin zu Fehlern bei der Weiterleitung eingehender Anrufe (T-ADS) deckt dieser Leitfaden alles ab, was Sie wissen müssen, um **Dual-eSIM** oder **eSIM + physische SIM** auf dem iPhone 17, 16 und älteren Modellen mit iOS 26 fehlerfrei zu betreiben. Für eine grundlegende Einführung in die eSIM-Einrichtung besuchen Sie unseren **[iPhone 17 eSIM Komplett-Guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**.

---

## 📌 Schneller Diagnose-Index (speziell für Dual-SIM)

| Symptom | Wahrscheinlichste Ursache | Lösung (Abschnitt) |
|---------|---------------------------|-------------------|
| Zweite eSIM zeigt „Kein Netz“, die erste funktioniert | Inkompatibilität mit CDMA-Sprach-Fallback | #2 |
| Eine Nummer kann anrufen, aber keine Anrufe empfangen | Veralteter T-ADS-Cache beim Anbieter | #3 |
| Während eines Anrufs zeigt die andere Leitung „Kein Netz“ | iPhone nutzt jeweils nur ein Datennetzwerk | #4 |
| Zweite eSIM kann nicht hinzugefügt werden – „Carrier Lock“ | Gerät an den ersten Anbieter gebunden | #5 |
| Dual-SIM funktioniert, verbraucht aber viel Akku | Beide Leitungen suchen aktiv nach Signal | #6 |
| eSIM + physische SIM: SIM wird nicht erkannt | Problem mit dem SIM-Fach oder inkompatible Karte | #7 |

---

## 1. Welche Dual-SIM-Optionen haben Sie beim iPhone?

Ab dem iPhone XS, XR und allen späteren Modellen (einschließlich iPhone 17) unterstützt Apple:

| Konfiguration | Unterstützte Modelle | Max. aktive Leitungen |
|---------------|----------------------|-----------------------|
| **Dual-eSIM** | iPhone 13 und neuer (einschließlich aller iPhone 17 Modelle) | 2 |
| **1 eSIM + 1 physische Nano-SIM** | Alle iPhones mit SIM-Fach (internationale Modelle & US-Modelle vor iPhone 14) | 2 |
| **1 nur physische SIM** | Ältere iPhones (vor XS) | 1 |
| **2 physische SIMs** | Spezielle Modelle für China, Hongkong, Macau (z. B. iPhone 17 China-Version) | 2 |

> 📱 **iPhone 17 Air & US iPhone 17 Serie**: Kein physisches SIM-Fach – nur Dual-eSIM. Falls Sie Aktivierungsprobleme bei diesen Modellen haben, schauen Sie in unseren **[eSIM Deep Troubleshooting Guide (16 reale Fälle)](/faq/esim-deep-troubleshooting-guide-2026/)** für fortgeschrittene Lösungen.

---

## 2. Kritische Einschränkung: CDMA-Anbieter stören Dual-eSIM

Wenn Ihre Hauptleitung bei einem **CDMA-Anbieter** (Verizon, Sprint Legacy oder einige regionale US-Anbieter) liegt, kann das Hinzufügen einer zweiten eSIM fehlschlagen oder die zweite Leitung zeigt „Kein Netz“.

### Warum passiert das?
CDMA-Netzwerke verwenden eine andere Technologie für den Sprach-Fallback (1xRTT). Das Baseband des iPhones kann nur **einen CDMA-Sprachkanal** gleichzeitig verarbeiten. Wenn die erste eSIM CDMA nutzt, wird das Baseband im CDMA-Modus blockiert, sodass keine Ressourcen für die Sprachfunktion der zweiten Leitung übrig bleiben. Die zweite Leitung erhält zwar oft LTE/5G-Daten, kann aber **keine Anrufe tätigen oder empfangen**.

### Welche Anbieter nutzen CDMA?
- **USA**: Verizon (ältere Tarife), US Cellular, einige MVNOs.
- **Japan**: au (KDDI) (CDMA wird schrittweise abgeschaltet, Alt-Tarife existieren noch).
- **Rest der Welt**: Nutzt meist GSM/UMTS/LTE (hier gibt es keine Probleme).

### Lösungen
- ✅ **Wechseln Sie die Hauptleitung zu einem GSM/nur-5G-Tarif** – z. B. Verizons „5G Start“ oder T-Mobile.
- ✅ **Nutzen Sie die CDMA-Leitung nur für Daten** – schalten Sie „Sprache“ für diese Leitung aus (in iOS oft nur durch Deaktivieren von VoLTE möglich).
- ⚠️ **Workaround**: Tauschen Sie, welche Leitung primär ist. Falls Sie CDMA behalten müssen, legen Sie es auf die zweite eSIM – aber dann verliert die erste eSIM eventuell die Sprachfunktion.

---

## 3. Eine Nummer kann anrufen, aber nicht empfangen – T-ADS-Cache-Fehler

**Symptom**: Leitung A funktioniert einwandfrei. Leitung B kann ausgehende Anrufe tätigen, aber eingehende Anrufe an B gehen direkt auf die Mailbox oder werden als „nicht erreichbar“ gemeldet.

**Ursache**: Der **T-ADS (Terminating Access Domain Selection)** Cache des Anbieters ist veraltet. Wenn Leitung B kürzlich von 5G auf LTE gewechselt ist oder WLAN-Anrufe genutzt hat, versucht das Netzwerk immer noch, Anrufe über die alte Domäne zu routen.

### Schnelle Lösung (Nutzer-Seite)
1. Deaktivieren Sie vorübergehend **WLAN-Anrufe**: `Einstellungen > Mobilfunk > Leitung B > WLAN-Anrufe` → AUS.
2. Starten Sie das iPhone neu.
3. Schalten Sie WLAN-Anrufe wieder ein.

### Lösung durch den Anbieter (Support anrufen)
Bitten Sie Ihren Anbieter, den „**T-ADS-Cache für diese Nummer zu löschen**“ oder den „**Domain Selection Record zurückzusetzen**“. Dies wird normalerweise innerhalb von 30 Minuten wirksam. Mehr dazu in **[Fix 14 unseres Troubleshooting-Guides](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

---

## 4. Während eines Anrufs zeigt die andere Leitung „Kein Netz“ – Normales Verhalten

**Symptom**: Sie telefonieren über Leitung A. Wenn Sie nachsehen, zeigt Leitung B „Kein Netz“.

**Erklärung**: iPhones unterstützen **Dual Standby, nicht Dual Active**. Nur eine Leitung kann gleichzeitig eine aktive Mobilfunkverbindung aufrechterhalten. Während eines Gesprächs ist die andere Leitung vorübergehend nicht erreichbar. Sobald das Gespräch beendet ist, verbinden sich beide Leitungen wieder.

### Was Sie tun können:
- **Aktivieren Sie WLAN-Anrufe auf beiden Leitungen** – dann kann die inaktive Leitung das WLAN nutzen, um Anrufe zu empfangen, während Sie auf der anderen Leitung sprechen.
- **Aktivieren Sie „Wechseln mobiler Daten erlauben“** – unter `Einstellungen > Mobilfunk > Mobile Daten`. Dies erlaubt der Leitung ohne Datenverbindung, die Verbindung der anderen Leitung für WLAN-Anrufe zu nutzen.

---

## 5. Dual-SIM funktioniert nicht? Prüfen Sie zuerst den Carrier-Lock

Wenn Sie keine zweite eSIM oder physische SIM hinzufügen können:
- Ihr iPhone könnte an den ersten Anbieter **gebunden (SIM-Lock)** sein.
- Prüfung: `Einstellungen > Allgemein > Info` → scrollen Sie zu **Provider-Sperre**. Dort muss „Keine SIM-Einschränkungen“ stehen.

### Was tun bei einer Sperre?
- Kontaktieren Sie Ihren Anbieter, um eine Entsperrung zu beantragen. US-Anbieter müssen Geräte nach vollständiger Bezahlung entsperren.
- Falls entsperrt, aber es immer noch nicht geht: `Einstellungen > Allgemein > iPhone übertragen oder zurücksetzen > Zurücksetzen > Netzwerkeinstellungen`. (Achtung: WLAN-Passwörter werden gelöscht.)

Sobald es entsperrt ist, können Sie Ihre eSIM auch zwischen iPhone und Android verschieben – siehe unseren **[eSIM Cross-Platform Transfer 2026 Guide](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)**.

---

## 6. Dual-SIM Akkuverbrauch: So reduzieren Sie ihn

Der Betrieb von zwei Leitungen erhöht den Stromverbrauch um etwa 5–15 %. So minimieren Sie den Effekt:

| Strategie | Effekt |
|----------|--------|
| Leitung mit schwachem Signal auf **nur LTE** stellen (nicht 5G) | Moderate Ersparnis |
| **Datenroaming** auf der Leitung ausschalten, die nicht für Daten genutzt wird | Weniger Netzsuche |
| **5G Standalone** deaktivieren (falls vom Anbieter erlaubt) | Deutliche Ersparnis |
| **Datensparmodus** für Hintergrund-Apps auf der Zweitleitung nutzen | Geringe Ersparnis |

Um eine Leitung vorübergehend auszuschalten: `Einstellungen > Mobilfunk` → Leitung wählen → **Diese Leitung aktivieren** ausschalten.

---

## 7. Physische SIM wird nicht erkannt (Probleme mit dem SIM-Fach)

**Symptom**: Ihre Nano-SIM funktioniert in einem anderen Handy, aber nicht im iPhone.

**Lösungen**:
1. Fach entnehmen, Kontakte mit einem weichen Tuch reinigen.
2. Fest einschieben, bis es klickt.
3. iPhone neu starten.
4. Falls immer noch nicht erkannt, Karte beim Anbieter tauschen (oft kostenlos).

---

## 8. Besondere regionale Fälle: China, Hongkong, Macau

Apple verkauft spezielle Dual-Physisch-SIM-Modelle in **Festlandchina**:
- iPhone 17, 17 Pro, 17 Pro Max: **zwei physische Nano-SIM-Slots** (keine eSIM, außer beim Air).
- iPhone 17 Air: **Nur eSIM** (global einheitlich).

**Hongkong- und Macau-Modelle**:
- Unterstützen oft **eSIM + physische SIM** oder Dual-Physisch-SIM je nach Modell. Prüfen Sie dies vor dem Kauf genau, wenn Sie Reise-eSIMs nutzen möchten.

---

## 9. Dual-SIM für Beruf & Privat: Best Practices

### Leitungen klar beschriften
`Einstellungen > Mobilfunk` → Leitung wählen → **Etikett für Mobilfunktarif** → „Geschäftlich“ oder „Privat“ wählen.

### Standard für Sprache & Daten wählen
- **Standardleitung für Sprache**: Welche Nummer wird standardmäßig beim Wählen genutzt? (Kann pro Anruf geändert werden).
- **Mobile Daten**: Welche Leitung nutzt das Internet? Aktivieren Sie **„Wechseln mobiler Daten erlauben“**, damit das Handy bei Signalverlust auf die andere Leitung ausweichen kann.

---

## 10. Fehlerbehebungstabelle – Dual-SIM-Szenarien

| Problem | Erster Schritt | Langfristige Lösung |
|---------|----------------|--------------------|
| Zweite eSIM bekommt nie Signal | Flugmodus an/aus | Falls CDMA-Anbieter, zu GSM-Tarif wechseln |
| Anrufe gehen direkt auf Mailbox | „Unbekannte Anrufer stumm“ deaktivieren | Anbieter bitten, T-ADS zurückzusetzen |
| Keine SMS auf der zweiten Leitung | Test-SMS von dieser Leitung senden | Sicherstellen, dass der Tarif SMS inkludiert |
| FaceTime/iMessage lässt sich nicht aktivieren | In den Nachrichten-Einstellungen Nummern manuell wählen | Von Apple-ID ab- und wieder anmelden |

---

## 11. Häufig gestellte Fragen

**F1: Kann ich zwei eSIMs vom selben Anbieter nutzen?**  
Ja, sofern Ihr Anbieter mehrere eSIM-Profile pro Konto erlaubt. T-Mobile US unterstützt beispielsweise zwei eSIMs auf demselben iPhone.

**F2: Unterstützen beide Leitungen gleichzeitig 5G?**  
Ja, ab dem iPhone 13 (inklusive iPhone 17) ist Dual-5G-Standby möglich. Daten fließen jedoch immer nur über eine Leitung.

**F3: Ich reise – kann ich eine lokale eSIM für Daten und meine Heim-eSIM für Anrufe nutzen?**  
Ja, das ist die ideale Konfiguration:
- Lokale eSIM als **Mobile Daten**.
- Heim-eSIM als **Standardleitung für Sprache**.
- **Datenroaming** für die Heim-eSIM AUSschalten (teuer!).
- **Wechseln mobiler Daten erlauben** EINschalten, damit die Heim-Leitung die Daten der lokalen eSIM für WLAN-Anrufe nutzen kann.

---

## 12. Abschließende Profi-Tipps

- **Eigene Klingeltöne**: Sie können jeder Leitung einen eigenen Klingelton zuweisen: `Einstellungen > Töne & Haptik > Klingelton` → nach unten scrollen und pro Leitung festlegen.
- **Kurzbefehle**: Nutzen Sie die Kurzbefehle-App, um die Standard-Sprachleitung zeitgesteuert zu wechseln (z. B. während der Arbeitszeit).
- **Vor dem Verkauf**: Löschen Sie **alle** eSIMs unter `Einstellungen > Mobilfunk`, bevor Sie das Gerät zurücksetzen. Siehe **[Fix #9 in unserem Guide](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.

> 📎 **Verwandte Anleitungen:**
> - [eSIM Deep Troubleshooting Guide (16 reale Fälle)](/faq/esim-deep-troubleshooting-guide-2026/)
> - [iPhone 17 eSIM Komplett-Guide](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)
> - [eSIM plattformübergreifender Transfer 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)

---
*Basierend auf Apple Support-Dokumenten, iOS 26 Verhalten und Anbieter-Tests Stand April 2026. Tatsächliche Erfahrungen können je nach Anbieter und Region variieren.*
---