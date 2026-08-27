---
title: "Dual-eSIM nicht verfügbar? 12 iPhone Fixes"
h1_title: "Dual-eSIM nicht verfügbar? 12 iPhone-Lösungen, die helfen"
description: "Zweite eSIM ohne Netz? Anrufe zur Mailbox? Lösungen für CDMA-Fallback, T-ADS-Cache, Akku & Carrier-Lock. Für iPhone 17, 16, iOS 18–20."
keywords: ["eSIM Fehlerbehebung", "eSIM Aktivierung fehlgeschlagen", "eSIM kein Netz", "eSIM Übertragungsfehler", "Apple eSIM", "iOS 20 eSIM", "iPad eSIM funktioniert nicht", "eSIM APN Einstellungen", "eSIM Bestätigungscode", "eSIM Profil abgelaufen", "eSIM an anderes Gerät gebunden", "Dual eSIM Signalproblem", "eSIM DFU Fehler 53", "eSIM Carrier Lock", "eSIM plattformübergreifende Übertragung"]
date: 2026-06-22T10:00:00Z
lastmod: 2026-06-22T10:00:00Z
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
    
# 右侧：热门 eSIM 配置 (6个国家)
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

# 右侧：热门问题配置
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

Die Nutzung von zwei Telefonnummern auf einem iPhone ist praktisch – birgt aber versteckte Tücken. Von CDMA-GSM-Konflikten bis hin zu Fehlern bei der Weiterleitung eingehender Anrufe (T-ADS) deckt dieser Leitfaden alles ab, was Sie wissen müssen, um **Dual-eSIM** oder **eSIM + physische SIM** auf dem iPhone 17, iPhone 16 und älteren Modellen mit iOS 18–20 fehlerfrei zu betreiben.

Für eine grundlegende Einführung in die **eSIM Einrichtung** besuchen Sie unseren [iPhone 17 eSIM Komplett-Guide](/faq/2026-ultimate-guide-iphone-17-esim-activation-solutions/). Wer sich fragt, [wie eSIM überhaupt funktioniert](/faq/what-is-esim-activation-and-how-does-it-work/), findet in unserem separaten Grundlagen-Artikel eine ausführliche Erklärung der Technologie.


## 📌 Schneller Diagnose-Index (speziell für Dual-SIM)

| Symptom | Wahrscheinlichste Ursache | Lösung (Abschnitt) |
|---------|---------------------------|-------------------|
| Zweite eSIM zeigt „Kein Netz“, die erste funktioniert | Inkompatibilität mit CDMA-Sprach-Fallback | #2 |
| Eine Nummer kann anrufen, aber keine Anrufe empfangen | Veralteter T-ADS-Cache beim Anbieter | #3 |
| Während eines Anrufs zeigt die andere Leitung „Kein Netz“ | iPhone nutzt jeweils nur ein Datennetzwerk | #4 |
| Zweite eSIM kann nicht hinzugefügt werden – „Carrier Lock“ | Gerät an den ersten Anbieter gebunden | #5 |
| Dual-SIM funktioniert, verbraucht aber viel Akku | Beide Leitungen suchen aktiv nach Signal | #6 |
| eSIM + physische SIM: SIM wird nicht erkannt | Problem mit dem SIM-Fach oder inkompatible Karte | #7 |


## 1. Welche Dual-SIM-Kombinationen unterstützt Ihr iPhone?

Ab dem **iPhone XS, XR** und allen späteren Modellen (einschließlich **iPhone 17**) unterstützt Apple:

| Konfiguration | Unterstützte Modelle | Max. aktive Leitungen |
|---------------|----------------------|-----------------------|
| Dual-eSIM | iPhone 13 und neuer (einschließlich aller iPhone 17 Modelle) | 2 |
| 1 eSIM + 1 physische Nano-SIM | Alle iPhones mit SIM-Fach (internationale Modelle & US-Modelle vor iPhone 14) | 2 |
| 1 nur physische SIM | Ältere iPhones (vor XS) | 1 |
| 2 physische SIMs | Spezielle Modelle für China, Hongkong, Macau (z. B. iPhone 17 China-Version) | 2 |

Das **iPhone 17 Air** und die **US iPhone 17 Serie** haben kein physisches SIM-Fach – sie unterstützen ausschließlich **Dual-eSIM**. Auch das **iPhone SE** unterstützt eSIM – Details zur [iPhone SE eSIM-Kompatibilität](/faq/iphone-se-esim-compatible/) finden Sie in unserer speziellen Übersicht.

Die genauen technischen Spezifikationen und Voraussetzungen für die Dual-SIM-Nutzung mit eSIM sind in der offiziellen [Apple Support-Dokumentation zu Dual-SIM mit eSIM](https://support.apple.com/en-us/109317) beschrieben[reference:9]. Dort wird auch erläutert, welche iPhone-Modelle Dual-SIM mit zwei eSIMs unterstützen und welche Konfigurationen für internationale Reisen empfohlen werden[reference:10].

Die technische Grundlage für die gleichzeitige Nutzung von zwei eSIM-Profilen wird durch den GSMA-Standard SGP.22 V3.1 definiert[reference:11]. Dieser Standard beschreibt das MEP-Verfahren (Multiple Enabled Profiles), das es einem Gerät ermöglicht, zwei eSIM-Profile parallel zu aktivieren – ähnlich wie bei herkömmlichen Dual-SIM-Geräten, aber vollständig digital und ohne physische SIM-Karten[reference:12]. Die [GSMA](https://www.gsma.com/get-involved/gsma-membership/cn/gsma_resources/what-is-mep-comprion/) als internationaler Standardisierungsverband für die Mobilfunkbranche stellt sicher, dass diese Technologie weltweit interoperabel ist.

Falls Sie Aktivierungsprobleme bei diesen Modellen haben, finden Sie in unserem [eSIM Deep Troubleshooting Guide (16 reale Fälle)](/faq/esim-deep-troubleshooting-guide-2026/) fortgeschrittene Lösungen.


## 2. Kritische Einschränkung: CDMA-Anbieter stören Dual-eSIM

Wenn Ihre Hauptleitung bei einem **CDMA-Anbieter** (Verizon, Sprint Legacy oder einige regionale US-Anbieter) liegt, kann das Hinzufügen einer zweiten eSIM fehlschlagen oder die zweite Leitung zeigt „Kein Netz“.

Warum passiert das?
**CDMA**-Netzwerke verwenden eine andere Technologie für den Sprach-Fallback (1xRTT). Das Baseband des iPhones kann nur einen CDMA-Sprachkanal gleichzeitig verarbeiten. Wenn die erste eSIM CDMA nutzt, wird das Baseband im CDMA-Modus blockiert, sodass keine Ressourcen für die Sprachfunktion der zweiten Leitung übrig bleiben. Die zweite Leitung erhält zwar oft LTE/5G-Daten, kann aber keine Anrufe tätigen oder empfangen.

Welche Anbieter nutzen CDMA?
- USA: Verizon (ältere Tarife), US Cellular, einige MVNOs
- Japan: au (KDDI) – CDMA wird schrittweise abgeschaltet, Alt-Tarife existieren noch
- Rest der Welt: Nutzt meist GSM/UMTS/LTE – hier gibt es keine Probleme

Lösungsansätze:
- Wechseln Sie die Hauptleitung zu einem GSM/nur-5G-Tarif – z. B. Verizons „5G Start“ oder T‑Mobile.
- Nutzen Sie die CDMA-Leitung nur für Daten – schalten Sie „Sprache“ für diese Leitung aus (in iOS oft nur durch Deaktivieren von VoLTE möglich).
- Tauschen Sie, welche Leitung primär ist. Falls Sie CDMA behalten müssen, legen Sie es auf die zweite eSIM – aber dann verliert die erste eSIM eventuell die Sprachfunktion.

Apple selbst weist in seiner [Support-Dokumentation zu Dual-SIM-Problemen](https://support.apple.com/en-us/109322) darauf hin: Wenn ein CDMA-Anbieter die erste SIM-Karte bereitstellt, unterstützt die zweite SIM-Karte kein CDMA[reference:13]. Die offizielle Fehlerhebungsanleitung von Apple empfiehlt in diesem Fall, den Anbieter zu kontaktieren und die Kompatibilität der Tarife zu prüfen[reference:14].

Der internationale [GSMA-Standard](https://www.gsma.com/esim/) definiert die technischen Grundlagen für eSIM und wird von den meisten Mobilfunkanbietern weltweit umgesetzt – doch CDMA-basierte Netze stellen eine Ausnahme dar, die Apple nicht vollständig umgehen kann.


## 3. Eine Nummer kann anrufen, aber nicht empfangen – T-ADS-Cache-Fehler

Symptom: Leitung A funktioniert einwandfrei. Leitung B kann ausgehende Anrufe tätigen, aber eingehende Anrufe an B gehen direkt auf die Mailbox oder werden als „nicht erreichbar“ gemeldet.

Ursache: Der **T-ADS (Terminating Access Domain Selection)** Cache des Anbieters ist veraltet. Wenn Leitung B kürzlich von 5G auf LTE gewechselt ist oder **WLAN-Anrufe** genutzt hat, versucht das Netzwerk immer noch, Anrufe über die alte Domäne zu routen.

Schnelle Lösung (Nutzer-Seite):
1. Deaktivieren Sie vorübergehend WLAN-Anrufe: Einstellungen > Mobilfunk > Leitung B > WLAN-Anrufe → AUS.
2. Starten Sie das iPhone neu.
3. Schalten Sie WLAN-Anrufe wieder ein.

Lösung durch den Anbieter: Bitten Sie Ihren Anbieter, den T-ADS-Cache für diese Nummer zu löschen oder den Domain Selection Record zurückzusetzen. Dies wird normalerweise innerhalb von 30 Minuten wirksam.

Detaillierte Schritt-für-Schritt-Anleitungen für dieses und weitere Szenarien finden Sie in [Fix 14 unseres Troubleshooting-Guides](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls) – dort sind auch die spezifischen Gesprächsleitfäden für verschiedene Anbieter hinterlegt.


## 4. Während eines Anrufs zeigt die andere Leitung „Kein Netz“ – und wie Sie es testen

Symptom: Sie telefonieren über Leitung A. Wenn Sie nachsehen, zeigt Leitung B „Kein Netz“.

Die entscheidende Erkenntnis: iPhones unterstützen **Dual Standby, nicht Dual Active**. Nur eine Leitung kann gleichzeitig eine aktive Mobilfunkverbindung aufrechterhalten. Während eines Gesprächs ist die andere Leitung vorübergehend nicht erreichbar. Sobald das Gespräch beendet ist, verbinden sich beide Leitungen wieder.

So testen Sie es selbst:
1. Rufen Sie mit Leitung A eine beliebige Nummer an (z. B. Ihre Mailbox).
2. Lassen Sie sich während des Gesprächs von einem anderen Telefon auf Leitung B anrufen.
3. Wenn der Anruf auf die Mailbox geht oder „nicht erreichbar“ ist, ist dies das erwartete Verhalten.

Was Sie tun können:
- Aktivieren Sie WLAN-Anrufe auf beiden Leitungen – dann kann die inaktive Leitung das WLAN nutzen, um Anrufe zu empfangen, während Sie auf der anderen Leitung sprechen.
- Aktivieren Sie „Wechseln mobiler Daten erlauben“ – unter Einstellungen > Mobilfunk > Mobile Daten. Dies erlaubt der Leitung ohne Datenverbindung, die Verbindung der anderen Leitung für WLAN-Anrufe zu nutzen.


## 5. Dual-SIM funktioniert nicht? Prüfen Sie zuerst den Carrier-Lock

Wenn Sie keine zweite eSIM oder physische SIM hinzufügen können: Ihr iPhone könnte an den ersten Anbieter gebunden (**Carrier-Lock** oder **SIM-Lock**) sein.

Prüfung: Einstellungen > Allgemein > Info → scrollen Sie zu Provider-Sperre. Dort muss „Keine SIM-Einschränkungen“ stehen.

Was tun bei einer Sperre?
- Kontaktieren Sie Ihren Anbieter, um eine Entsperrung zu beantragen. US-Anbieter müssen Geräte nach vollständiger Bezahlung entsperren.
- Falls entsperrt, aber es immer noch nicht geht: Einstellungen > Allgemein > iPhone übertragen oder zurücksetzen > Zurücksetzen > Netzwerkeinstellungen. (Achtung: WLAN-Passwörter werden gelöscht.)

Sobald es entsperrt ist, können Sie Ihre eSIM auch zwischen iPhone und Android verschieben – siehe unseren [eSIM Cross-Platform Transfer 2026 Guide](/faq/how-to-transfer-esim-between-iphone-and-android/) für die **plattformübergreifende eSIM-Übertragung**. Dabei spielt es keine Rolle, ob Sie von einem **Samsung**, **Google Pixel** oder einem anderen **Android-Gerät** wechseln – die Kompatibilität ist breit gefasst. Für Nutzer älterer Modelle wie des **Samsung S20** oder **Google Pixel 6** empfehlen wir einen Blick in die spezifischen Kompatibilitätsübersichten: [Samsung S20 eSIM-Kompatibilität](/faq/samsung-s20-esim-compatible/) und [Google Pixel 6 eSIM-Kompatibilität](/faq/google-pixel-6-esim-compatible/).

Die offizielle [Apple Support-Anleitung zur Übertragung einer eSIM vom iPhone auf ein Android-Gerät](https://support.apple.com/en-us/126058) beschreibt die genauen Schritte für diesen Vorgang[reference:15]. Voraussetzung ist ein unterstützter Anbieter – in Deutschland ist dies die Telekom[reference:16]. Die Übertragung kann entweder über die Kamera zum Scannen eines QR-Codes oder manuell über die Eingabe einer Session-ID und eines Pairing-Codes erfolgen[reference:17].

Auch wenn Ihr Gerät entsperrt ist, kann es vorkommen, dass eine eSIM an ein anderes Gerät gebunden ist – dann hilft nur ein neuer **Aktivierungs-QR-Code** vom Anbieter. Eine [vollständige Liste eSIM-kompatibler Telefone (2026)](/compatibility/) finden Sie in unserer zentralen Übersicht.


## 6. Dual-SIM Akkuverbrauch: So reduzieren Sie ihn

Der Betrieb von zwei Leitungen erhöht den Stromverbrauch um etwa 5–15 %. So minimieren Sie den Effekt:

| Strategie | Effekt |
|----------|--------|
| Leitung mit schwachem Signal auf nur LTE stellen (nicht 5G) | Moderate Ersparnis |
| Datenroaming auf der Leitung ausschalten, die nicht für Daten genutzt wird | Weniger Netzsuche |
| 5G Standalone deaktivieren (falls vom Anbieter erlaubt) | Deutliche Ersparnis |
| Datensparmodus für Hintergrund-Apps auf der Zweitleitung nutzen | Geringe Ersparnis |

Um eine Leitung vorübergehend auszuschalten: Einstellungen > Mobilfunk → Leitung wählen → Diese Leitung aktivieren ausschalten.


## 7. Physische SIM wird nicht erkannt (Probleme mit dem SIM-Fach)

Symptom: Ihre Nano-SIM funktioniert in einem anderen Handy, aber nicht im iPhone.

Lösungen:
1. Fach entnehmen, Kontakte mit einem weichen Tuch reinigen.
2. Fest einschieben, bis es klickt.
3. iPhone neu starten.
4. Falls immer noch nicht erkannt, Karte beim Anbieter tauschen (oft kostenlos).


## 8. Regionale Besonderheiten: eSIM in China, Hongkong und Macau

Apple verkauft spezielle Dual-Physisch-SIM-Modelle in Festlandchina:
- iPhone 17, 17 Pro, 17 Pro Max: zwei physische Nano-SIM-Slots (keine eSIM, außer beim Air).
- iPhone 17 Air: Nur eSIM (global einheitlich).

Hongkong- und Macau-Modelle unterstützen oft eSIM + physische SIM oder Dual-Physisch-SIM je nach Modell.

Was das für Reisende bedeutet: Wenn Sie ein iPhone aus Festlandchina besitzen und eine Reise-eSIM nutzen möchten – etwa während einer Geschäftsreise – prüfen Sie vor dem Kauf genau, ob Ihr Modell eSIM-fähig ist. Die chinesischen iPhone 17-Modelle (Pro und Pro Max) haben keinen eSIM-Support, während das iPhone 17 Air weltweit nur eSIM unterstützt.

Für Hongkong und Macau gilt: Die meisten aktuellen Modelle unterstützen eSIM + physische SIM. Prüfen Sie dennoch vor Reiseantritt die genauen technischen Spezifikationen Ihres Geräts, da Apple die Konfiguration von Modell zu Modell variieren kann.


## 9. Dual-SIM für Beruf & Privat: Best Practices

Leitungen klar beschriften: Einstellungen > Mobilfunk → Leitung wählen → Etikett für Mobilfunktarif → „Geschäftlich“ oder „Privat“ wählen.

Standard für Sprache & Daten wählen:
- Standardleitung für Sprache: Welche Nummer wird standardmäßig beim Wählen genutzt? (Kann pro Anruf geändert werden).
- Mobile Daten: Welche Leitung nutzt das Internet? Aktivieren Sie „Wechseln mobiler Daten erlauben“, damit das Handy bei Signalverlust auf die andere Leitung ausweichen kann.


## 10. Fehlerbehebungstabelle – Dual-SIM-Szenarien

| Problem | Erster Schritt | Langfristige Lösung |
|---------|----------------|--------------------|
| Zweite eSIM bekommt nie Signal | Flugmodus an/aus | Falls CDMA-Anbieter, zu GSM-Tarif wechseln |
| Anrufe gehen direkt auf Mailbox | „Unbekannte Anrufer stumm“ deaktivieren | Anbieter bitten, T-ADS zurückzusetzen |
| Keine SMS auf der zweiten Leitung | Test-SMS von dieser Leitung senden | Sicherstellen, dass der Tarif SMS inkludiert |
| FaceTime/iMessage lässt sich nicht aktivieren | In den Nachrichten-Einstellungen Nummern manuell wählen | Von Apple-ID ab- und wieder anmelden |
| eSIM Aktivierung benötigt einen Bestätigungscode | Prüfen Sie Ihr Kundenportal oder die App Ihres Anbieters | Der Bestätigungscode wird meist per SMS oder E-Mail gesendet – falls er nicht ankommt, kontaktieren Sie den Support |


## 11. Häufige Fragen zu Dual-eSIM – klar beantwortet

F1: Kann ich zwei eSIMs vom selben Anbieter nutzen?
Ja, sofern Ihr Anbieter mehrere eSIM-Profile pro Konto erlaubt. T‑Mobile US unterstützt beispielsweise zwei eSIMs auf demselben iPhone. In Deutschland ist dies bei der **Telekom eSIM** und der **Vodafone eSIM** ebenfalls möglich – prüfen Sie die genauen Bedingungen in Ihrem Kundenportal.

F2: Unterstützen beide Leitungen gleichzeitig 5G?
Ja, ab dem iPhone 13 (inklusive iPhone 17) ist Dual-5G-Standby möglich. Daten fließen jedoch immer nur über eine Leitung.

F3: Ich reise – kann ich eine lokale eSIM für Daten und meine Heim-eSIM für Anrufe nutzen?
Ja, das ist die ideale Konfiguration für Auslandsreisen. Wenn Sie beispielsweise für ein paar Wochen verreisen, können Sie vor Ort eine **Reise-eSIM** von Anbietern wie Airalo oder Holafly buchen, um hohe Roaming-Kosten zu vermeiden:
- Lokale Reise-eSIM als Mobile Daten einrichten.
- Heim-eSIM als Standardleitung für Sprache.
- Datenroaming für die Heim-eSIM ausschalten.
- „Wechseln mobiler Daten erlauben“ einschalten, damit die Heim-Leitung die Daten der lokalen eSIM für WLAN-Anrufe nutzen kann.

Diese Konfiguration ist unabhängig vom Reiseziel – sie funktioniert in Europa genauso wie in Asien oder Nordamerika.

F4: Kann ich eine eSIM von iPhone auf Android übertragen, wenn ich Dual-SIM nutze?
Ja, ab **iOS 18** und **Android 15** ist die **plattformübergreifende eSIM-Übertragung** möglich – auch wenn Sie aktuell zwei eSIMs nutzen. Beachten Sie, dass Sie nur die aktive eSIM übertragen können; die andere bleibt auf dem Quellgerät. Die [offizielle Apple Support-Dokumentation](https://support.apple.com/en-us/126058) beschreibt den genauen Vorgang. Eine detaillierte Schritt-für-Schritt-Anleitung finden Sie in unserem [eSIM Cross-Platform Transfer 2026 Guide](/faq/how-to-transfer-esim-between-iphone-and-android/).

F5: Was ist der Unterschied zwischen eSIM und physischer SIM im Dual-SIM-Betrieb?
Beide bieten die gleiche Funktionalität – der Unterschied liegt in der Flexibilität. Mit einer eSIM können Sie Profile **aktivieren**, **deaktivieren** oder **löschen**, ohne eine physische Karte wechseln zu müssen. Das ist besonders nützlich, wenn Sie häufiger zwischen Ländern reisen – Sie können eine lokale Reise-eSIM hinzufügen, nutzen und nach der Reise wieder löschen, während Ihre heimische eSIM weiterhin aktiv bleibt.


## 12. Abschließende Profi-Tipps für Dual-eSIM

Eigene Klingeltöne: Sie können jeder Leitung einen eigenen Klingelton zuweisen: Einstellungen > Töne & Haptik > Klingelton → nach unten scrollen und pro Leitung festlegen.

Kurzbefehle: Nutzen Sie die Kurzbefehle-App, um die Standard-Sprachleitung zeitgesteuert zu wechseln (z. B. während der Arbeitszeit).

Vor dem Verkauf: Löschen Sie alle eSIMs unter Einstellungen > Mobilfunk, bevor Sie das Gerät zurücksetzen. Siehe [Fix #9 in unserem Guide](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate).

APN-Einstellungen: Falls nach der Einrichtung einer zweiten eSIM kein Netz verfügbar ist, müssen oft die **APN-Einstellungen** manuell angepasst werden:
1. Gehen Sie zu Einstellungen > Mobilfunk > Mobilfunkdaten-Netzwerk (oder bei Android: Einstellungen > Verbindungen > Mobilfunknetze > APN).
2. Geben Sie die APN-Daten Ihres Anbieters ein – diese finden Sie im Kundenportal oder durch eine kurze Suche nach „[Anbietername] APN Einstellungen“.
3. Speichern Sie die Einstellungen und starten Sie das iPhone neu.

DFU Fehler 53: Falls Sie beim eSIM-Setup auf einen **DFU Fehler 53** stoßen, handelt es sich um ein Hardware-Problem mit dem Baseband – wenden Sie sich an den Apple Support. Diese Fehler sind selten und betreffen meist Geräte, die zuvor repariert wurden.

---
Basierend auf Apple Support-Dokumenten, iOS 18–20 Verhalten und Anbieter-Tests Stand Juni 2026. Tatsächliche Erfahrungen können je nach Anbieter und Region variieren.