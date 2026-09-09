---
title: "Jak przenieść eSIM między iPhonem a Androidem"
h1_title: "Jak przenieść eSIM między iPhonem a Androidem"
description: "Przenieś swoją eSIM między iPhonem a Androidem za pomocą aplikacji operatora lub ponownie wygenerowanego kodu QR. Instrukcje krok po kroku dla obu kierunków oraz poprawki dla typowych błędów przenoszenia."
image: "/img/esim/esim-travel.jpg"
keywords: ["eSIM przenoszenie międzyplatformowe", "błąd przenoszenia eSIM", "iOS 18 eSIM", "blokada operatora eSIM", "kod potwierdzenia eSIM", "eSIM brak usługi", "ustawienia APN eSIM", "rozwiązywanie problemów eSIM", "aktywacja eSIM nie powiodła się", "przenieś eSIM między iPhonem a Androidem", "nie można przenieść eSIM na nowy iPhone", "Orange eSIM przenoszenie"]
date: 2026-09-08T10:00:00Z
lastmod: 2026-09-08T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Rozwiązywanie problemów", "Konfiguracja podróży"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Tłumaczenia tekstów interfejsu
ui_text:
  updated_on: "Zaktualizowano"
  min_read: "min czytania"
  toc: "Spis treści"

breadcrumbs:
  home:
    text: "Strona główna"
    url: "/"
  parent:
    text: "Centrum pomocy"
    url: "/faq/"
    
# Sidebar: Popularne eSIM
sidebar_popular:
  title: "Popularne eSIM"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "1,99 $"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Niemcy eSIM"
      flag: "/img/flags/de.svg"
      price: "1,99 $"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa eSIM"
      flag: "/img/flags/eu.svg"
      price: "1,99 $"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turcja eSIM"
      flag: "/img/flags/tr.svg"
      price: "1,99 $"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japonia eSIM"
      flag: "/img/flags/jp.svg"
      price: "1,99 $"
      url: "/japan-esim/"
      badge: "5G"
    - name: "Chiny eSIM"
      flag: "/img/flags/cn.svg"
      price: "1,99 $"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Darmowe oferty eSIM
sidebar_free:
  title: "Odbierz darmową eSIM"
  icon: "🎁"
  item_suffix: "Darmowa eSIM"
  item_subtitle: "Darmowa eSIM"
  items:
    - name: "Wielka Brytania eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Niemcy"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Tajlandia"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hongkong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popularne pytania
sidebar_questions:
  title: "Popularne pytania"
  items:
    - question: "Czym jest aktywacja eSIM i jak działa?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Jak aktywować eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Jak aktywować eSIM na iPhonie (wszystkie modele)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Najnowsza lista kompatybilności eSIM"
      url: "/compatibility/"
---


> **Nota redakcyjna:** Roami jest marką stojącą za tym przewodnikiem. Wszystkie informacje o przenoszeniu między operatorami opierają się na oficjalnej dokumentacji operatorów i testach urządzeń przeprowadzonych przez nasz zespół w 2026 roku. Międzyplatformowe przenoszenie eSIM jest wciąż wdrażane na całym świecie – skupiamy się na metodach, które faktycznie działają dzisiaj.

## Przenoszenie eSIM – 10-sekundowa szybka odpowiedź

**Znajdź swój scenariusz poniżej i przejdź bezpośrednio do właściwej metody.**

| Twój scenariusz | Czy możesz przenieść? | Najlepsza metoda | Gdzie przejść |
| :--- | :--- | :--- | :--- |
| **iPhone → nowy iPhone** | ✅ Tak (zawsze) | Szybkie przenoszenie Apple | [Transfer wewnątrzplatformowy](#transfer-esim-to-new-iphone-or-samsung--intra-platform-esim-transfers) |
| **Samsung → nowy Samsung** | ✅ Tak (zazwyczaj) | Samsung Smart Switch | [Transfer wewnątrzplatformowy](#transfer-esim-to-new-iphone-or-samsung--intra-platform-esim-transfers) |
| **Android → iPhone (operator obsługuje transfer przez aplikację)** | ✅ Tak | Aplikacja operatora | [Metoda A](#method-a-esim-transfer-from-android-to-iphone-carrier-app) |
| **Android → iPhone (operator nie obsługuje aplikacji)** | ✅ Tak | Kod QR jako awaryjne rozwiązanie | [Metoda B](#method-b-esim-transfer-from-iphone-to-android-carrier-qr-code) |
| **iPhone → Android (operator obsługuje)** | ✅ Tak | Aplikacja operatora lub kod QR | [Metoda B](#method-b-esim-transfer-from-iphone-to-android-carrier-qr-code) |
| **eSIM podróżna (Roami, Airalo, Holafly)** | ❌ Nie | Kup nowy plan na nowym urządzeniu | [Dlaczego eSIM podróżne nie mogą być przenoszone](#why-cant-travel-esims-be-transferred) |
| **Operator nie obsługuje przenoszenia** | ✅ Tak (awaryjne) | Skontaktuj się z operatorem po kod QR | [Metody awaryjne](#fallback-methods-when-cross-platform-esim-transfer-isnt-supported) |

> **Kluczowa zasada:** Nie ma **wbudowanego przycisku przenoszenia eSIM z iOS na Androida** jak w przypadku iPhone-na-iPhone. Transfer międzyplatformowy zawsze odbywa się **przez operatora** – albo przez jego aplikację, albo przez poproszenie o nowy kod QR. eSIM podróżne są **tylko na jedno urządzenie** – kup nową na nowym telefonie.

**Nie możesz przenieść?** Większość eSIM podróżnych (Roami, Airalo, Holafly) jest **tylko na jedno urządzenie** – musisz kupić nowy plan na nowym telefonie. W przypadku eSIM lokalnych operatorów, awaryjne rozwiązanie z kodem QR zawsze działa.

> **Kluczowe ograniczenie:** Nie ma **wbudowanego przenoszenia eSIM z iOS na Androida** – musisz przejść przez operatora. Ten przewodnik przeprowadza Cię przez każdą obsługiwaną metodę.

Pełny przewodnik po podstawowej konfiguracji eSIM znajdziesz w naszym **[Kompletnym przewodniku eSIM dla iPhone'a 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. Dla zaawansowanych problemów nieomówionych tutaj, nasz **[Przewodnik zaawansowanego rozwiązywania problemów z eSIM (16 rzeczywistych przypadków)](/faq/esim-deep-troubleshooting-guide-2026/)** zawiera więcej rozwiązań.


## Szybki schemat decyzyjny – której metody przenoszenia eSIM użyć?

| Twoja sytuacja | Najlepsza metoda | Czas | Czy potrzebny operator? |
| :--- | :--- | :--- | :--- |
| **Zmiana iPhone ↔ iPhone** | Szybkie przenoszenie Apple (Ustawienia > Komórkowe > Dodaj eSIM > Przenieś) | 2 min | Nie (Apple to obsługuje) |
| **Zmiana Android ↔ Android (Samsung na Samsung itp.)** | Przenoszenie specyficzne dla marki (Samsung: Menedżer SIM > Dodaj eSIM > Przenieś) | 2 min | Nie (marka to obsługuje) |
| **Zmiana iPhone ↔ Android (iOS 18 / Android 16+)** | Transfer przez aplikację operatora | 3-5 min | Tak |
| **Zmiana iPhone ↔ Android (starszy system)** | Ponownie wygenerowany kod QR od operatora | 5-10 min | Tak |
| **eSIM podróżna (Roami, Airalo, Holafly)** | ❌ Nie można przenieść – kup nowy plan na nowym urządzeniu | Nie dotyczy | Nie – dostawca nie zezwala |
| **Twój operator nie obsługuje transferu** | Awaryjne rozwiązanie z kodem QR (zadzwoń do operatora) | 10-20 min | Tak |


## Kompletna ścieżka przenoszenia eSIM – od "Zmieniam telefon" do "Działa"

Oto mapa kroków dla każdego, kto przenosi eSIM na nowe urządzenie.

| Krok | Co myślisz | Co zrobić | Gdzie znaleźć |
| :--- | :--- | :--- | :--- |
| **1. Określ swój scenariusz** | "Jaki rodzaj zmiany robię?" | Zidentyfikuj: ten sam ekosystem (iOS→iOS / Android→Android) czy międzyplatformowy (iOS↔Android)? | [Szybki schemat decyzyjny powyżej](#quick-decision-flow--which-esim-transfer-method-should-you-use) |
| **2. Sprawdź wersje systemu** | "Czy moje telefony są wystarczająco zaktualizowane?" | iPhone musi mieć iOS 18+, Android musi mieć Android 16+ dla natywnego transferu międzyplatformowego. | Zaktualizuj najpierw, jeśli nie. |
| **3. Sprawdź blokadę operatora** | "Czy mój telefon jest zablokowany dla operatora?" | Ustawienia > Ogólne > Informacje > Blokada operatora musi mówić "Brak ograniczeń SIM." | [Wymagania wstępne poniżej](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Sprawdź wsparcie operatora** | "Czy mój operator na to pozwala?" | Otwórz aplikację operatora i poszukaj opcji przenoszenia eSIM. Lub zadzwoń i zapytaj. | [Sekcja obsługiwanych operatorów poniżej](#supported-carriers-for-cross-platform-esim-transfer-detailed) |
| **5. Wykonaj transfer** | "Czas przenieść numer." | Postępuj zgodnie z konkretnymi krokami dla swojego scenariusza. | [Metoda A](#method-a-esim-transfer-from-android-to-iphone-carrier-app) lub [Metoda B](#method-b-esim-transfer-from-iphone-to-android-carrier-qr-code) |
| **6. Konfiguracja po transferze** | "Mój numer jest na nowym telefonie – co teraz?" | Ponownie aktywuj WhatsApp, iMessage, aplikacje 2FA i przetestuj SMS. | [Sekcja Po przeniesieniu eSIM poniżej](#after-esim-transfer--whatsapp-imessage-and-2fa-migration) |
| **7. Rozwiąż problemy, jeśli się nie udało** | "Nie zadziałało – co teraz?" | Sprawdź błąd, usuń stary profil, spróbuj ponownie lub użyj awaryjnego kodu QR. | [Tabela rozwiązywania problemów poniżej](#troubleshooting-why-did-my-esim-transfer-fail) |


## Czego potrzebujesz przed rozpoczęciem przenoszenia eSIM

**Dla obu kierunków:**
- Oba urządzenia muszą być **odblokowane** (brak **blokady operatora**). Aby sprawdzić na iPhonie: `Ustawienia > Ogólne > Informacje` → `Blokada operatora` musi mówić "Brak ograniczeń SIM". **To powód #1 niepowodzeń transferów** – jeśli Twój telefon jest zablokowany, nie możesz przenieść eSIM do sieci innego operatora.
- Oba urządzenia mają **włączony Bluetooth**.
- Oba urządzenia są połączone z **Wi‑Fi** (lub przynajmniej jedno ma działające połączenie danych komórkowych).
- eSIM, którą chcesz przenieść, jest **aktywna** na urządzeniu źródłowym (jeszcze nie usunięta).
- Twój operator **obsługuje transfer międzyplatformowy** (zobacz listę poniżej). Jeśli nie, przejdź do sekcji metod awaryjnych.
- Twój **profil eSIM** nie jest **wygasły** – niektóre profile mają ograniczony okres ważności.

**Dla Android → iPhone:**
- iPhone musi mieć **iOS 18 lub nowszy**.
- Android musi mieć **Android 16 lub nowszy**.

**Dla iPhone → Android:**
- iPhone musi mieć **iOS 18 lub nowszy**.
- Android musi mieć **Android 16 lub nowszy**.

> 🚨 **Krytyczne ostrzeżenie – Nie usuwaj przed przeniesieniem:**
> **NIE usuwaj eSIM ze starego urządzenia przed rozpoczęciem przenoszenia.** Jeśli najpierw usuniesz źródłową eSIM, profil znika z urządzenia i Twój operator może nie być w stanie przenieść go na nowe urządzenie. Będziesz musiał skontaktować się z operatorem po zupełnie nowy kod QR – co może zająć 24‑48 godzin. Zawsze inicjuj transfer z nowego urządzenia najpierw lub pozostaw starą eSIM aktywną, aż nowa zostanie potwierdzona jako działająca.

> 🚨 Jeśli Twoje urządzenie ma starszy system operacyjny, opcja menu po prostu się nie pojawi. Zaktualizuj najpierw. Jeśli masz do czynienia z **wygasłym profilem eSIM**, skontaktuj się z operatorem po nowy kod QR przed rozpoczęciem przenoszenia.

Strona [Google Support – eSIM na Pixelu](https://support.google.com/pixelphone/answer/7086887) zawiera dodatkowe szczegóły dla użytkowników Androida przygotowujących się do przeniesienia eSIM.


## Dlaczego eSIM podróżne nie mogą być przenoszone?

To pytanie #1, które otrzymujemy. Oto dlaczego:

| Powód | Wyjaśnienie |
| :--- | :--- |
| **Powiązanie z EID** | Każdy profil eSIM jest kryptograficznie powiązany z **EID** (identyfikatorem eUICC) urządzenia, na którym został aktywowany. EID Twojego telefonu jest unikalny – jak numer seryjny sprzętu eSIM. (Możesz zobaczyć swój EID, wybierając `*#06#` na większości telefonów.) |
| **Kody QR jednorazowego użytku** | Kody QR eSIM podróżnych są zaprojektowane do **jednorazowego użycia**. Po zeskanowaniu kod QR jest unieważniany na serwerze operatora. To funkcja bezpieczeństwa zapobiegająca oszustwom. |
| **Brak konta operatora** | eSIM podróżne są kupowane jako produkty samodzielne – nie masz "konta operatora" z ciągłą usługą. Nie ma nikogo, do kogo można się zalogować i poprosić o przeniesienie. |
| **Zaprojektowane dla wygody** | eSIM podróżne wymieniają możliwość przenoszenia na wygodę. Otrzymujesz natychmiastową aktywację bez weryfikacji tożsamości, ale ceną jest to, że profil jest zablokowany na jednym urządzeniu. |

**Konkluzja:** Jeśli używasz eSIM podróżnej (Roami, Airalo, Holafly, Nomad itp.), **nie trać czasu na próby przeniesienia jej**. To nie zadziała. Po prostu kup nowy plan na nowym urządzeniu. Koszt nowej eSIM podróżnej jest zwykle niższy niż czas, który spędziłbyś na próbie przeniesienia nieprzenoszalnego profilu.

**A co z eSIM operatorów (postpaid/prepaid)?**
eSIM operatorów są inne. Masz konto u operatora, a on może ponownie wydać Twoją eSIM na nowe urządzenie, ponieważ kontroluje profil na swoich serwerach. Dlatego eSIM operatorów mogą być przenoszone, a eSIM podróżne nie.


## Porównanie metod przenoszenia eSIM – która jest dla Ciebie odpowiednia?

| Cecha | Transfer przez aplikację operatora | Kod QR operatora | Transfer natywny (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Działa międzyplatformowo?** | ✅ Tak | ✅ Tak | ❌ Nie (tylko ten sam ekosystem) |
| **Wymagany czas** | 3-5 min | 5-10 min | 1-2 min |
| **Zaangażowanie operatora** | Samoobsługa przez aplikację | Musisz skontaktować się z operatorem | Brak |
| **Działa w podróży?** | ✅ Tak (z Wi-Fi) | ✅ Tak (z Wi-Fi) | ✅ Tak |
| **Skuteczność** | Wysoka (jeśli obsługiwane) | Bardzo wysoka (zawsze działa) | Bardzo wysoka |
| **Najlepsze dla** | Szybki transfer, operatorzy obsługujący aplikacje | Każdy operator, awaryjne, gdy aplikacja zawiedzie | Uaktualnienia urządzeń w tym samym ekosystemie |
| **Koszt** | Zazwyczaj bezpłatny | Może kosztować 0‑25 $ za ponowne wydanie kodu QR | Bezpłatny |


## Metoda A: Przenoszenie eSIM z Androida na iPhone (aplikacja operatora)

To najczęstszy scenariusz – przejście z Samsunga, Pixela lub innego Androida na nowego iPhone'a. Najbardziej niezawodnym sposobem przeniesienia numeru jest aplikacja operatora.

### Instrukcja krok po kroku

**Przed rozpoczęciem:**
- Miej zainstalowaną aplikację operatora na nowym iPhonie (lub bądź gotowy zalogować się na stronie operatora).
- Znaj swój PIN konta lub dane logowania.
- **NIE usuwaj eSIM z Androida jeszcze.**

**Na iPhonie (docelowym):**
1. Zainstaluj i otwórz aplikację swojego operatora (np. T‑Mobile, Verizon lub AT&T).
2. Zaloguj się i poszukaj opcji takiej jak "Aktywuj eSIM", "Zmień urządzenie" lub "Przenieś na nowe urządzenie".
3. Postępuj zgodnie z instrukcjami, aby wprowadzić **EID** i **IMEI** nowego iPhone'a (pokazane w `Ustawienia` → `Ogólne` → `Informacje`).
4. Operator przesyła profil eSIM na nowego iPhone'a lub generuje kod QR do zeskanowania.
5. Na iPhonie przejdź do `Ustawienia` → `Komórkowe` → `Dodaj eSIM` i zeskanuj kod QR, jeśli został wygenerowany.
6. Poczekaj na "Aktywacja zakończona". Twój numer jest teraz aktywny na iPhonie.
7. **Teraz** możesz usunąć eSIM z Androida (Ustawienia > Połączenia > Menedżer SIM > kliknij eSIM > Usuń).

**Wskazówka dla iOS 18:** Jeśli masz iOS 18, przepływ "Dodaj eSIM" został przeprojektowany z bardziej widocznym skanerem QR i lepszą obsługą błędów. Zobaczysz wskaźnik postępu podczas pobierania profilu.

✅ **Gotowe.** Twój numer jest teraz aktywny na iPhonie. Jeśli Twój operator nie oferuje aplikacji, skontaktuj się z nim, aby ponownie wydać eSIM jako nowy kod QR (zobacz metody awaryjne poniżej).

### Co jeśli transfer przez aplikację nie działa?

Użyj **awaryjnego kodu QR od operatora**:

- Skontaktuj się z operatorem (czat, telefon lub strona internetowa).
- Powiedz im, że zmieniasz urządzenie i poproś o **ponowne wydanie eSIM jako nowego kodu QR**.
- Zeskanuj nowy kod QR na iPhonie: `Ustawienia` → `Komórkowe` → `Dodaj eSIM`.
- Ukończ aktywację.

Jeśli podczas tego procesu pojawi się błąd **"unable to activate esim"**, sprawdź połączenie Wi-Fi i spróbuj ponownie.


## Metoda B: Przenoszenie eSIM z iPhone na Android (kod QR od operatora)

Na iPhonie nie ma wbudowanej opcji "Przenieś na Androida". Niezawodną metodą jest poproszenie operatora o ponowne wydanie eSIM.

### Wymagania wstępne
- Twój nowy telefon z Androidem jest **odblokowany**.
- Możesz skontaktować się z operatorem (lub zalogować się do jego aplikacji/strony).
- Twój Android ma **Android 16 lub nowszy**.
- **NIE usuwaj eSIM z iPhone'a jeszcze.**

### Kroki

**Skontaktuj się z operatorem (lub użyj jego aplikacji):**
1. Powiedz im, że przenosisz eSIM z iPhone'a na telefon z Androidem.
2. Podaj **EID** i **IMEI** nowego urządzenia z Androidem (w `Ustawienia` → `Informacje o telefonie`).
3. Twój operator ponownie wydaje eSIM jako nowy kod QR (lub przesyła przez swoją aplikację).

**Na Androidzie (docelowym):**
1. Przejdź do `Ustawienia` → `Sieć i internet` → `Karty SIM` → `Dodaj eSIM` (nazewnictwo różni się w zależności od marki).
2. Zeskanuj kod QR dostarczony przez operatora.
3. Postępuj zgodnie z instrukcjami, aby pobrać i aktywować profil.
4. Poczekaj na zakończenie aktywacji.
5. **Teraz** możesz usunąć eSIM z iPhone'a (Ustawienia > Komórkowe > kliknij eSIM > Usuń plan komórkowy).

✅ Gotowe. Twój numer znajduje się teraz na telefonie z Androidem.

> ⚠️ **Ważne**: Po zakończeniu transferu eSIM jest **trwale usuwana** z iPhone'a. Nie możesz tego cofnąć bez swojego operatora. Upewnij się, że masz inną aktywną linię lub Wi‑Fi przed przeniesieniem.


## Przenoszenie eSIM na nowego iPhone'a lub Samsunga – transfery wewnątrzplatformowe

Chociaż transfer międzyplatformowy jest głównym tematem tego przewodnika, wielu użytkowników chce po prostu przenieść eSIM w ramach tego samego ekosystemu. Oto jak:

### iOS → iOS (iPhone na iPhone)

Wbudowane **Szybkie przenoszenie** Apple to najprostsza metoda:

1. Podczas konfiguracji nowego iPhone'a wybierz "Przenieś eSIM z pobliskiego iPhone'a", gdy zostaniesz poproszony.
2. Trzymaj oba telefony blisko siebie z włączonym Bluetooth i Wi‑Fi.
3. Potwierdź transfer na starym iPhonie.
4. Poczekaj 1‑2 minuty na zakończenie **pobierania profilu eSIM** na nowym urządzeniu.

**Jeśli Szybkie przenoszenie nie działa:** Przejdź do Ustawienia > Komórkowe na nowym iPhonie > Dodaj eSIM > Przenieś z pobliskiego iPhone'a.

**Jeśli to zawiedzie:** Użyj metody kodu QR od operatora – skontaktuj się z operatorem po nowy kod QR.

### Android → Android (Samsung, Pixel itp.)

Metody przenoszenia na Androidzie różnią się w zależności od marki:

**Samsung:** Ustawienia > Połączenia > Menedżer SIM > Dodaj eSIM > Przenieś eSIM ze starego urządzenia (postępuj zgodnie z instrukcjami na ekranie). Działa na Samsung Galaxy S21 i nowszych, seriach Z Flip/Z Fold.

**Google Pixel:** Podczas konfiguracji możesz zostać poproszony o przeniesienie eSIM. Alternatywnie użyj aplikacji operatora lub poproś o nowy kod QR.

**Ogólny Android:** Jeśli Twoja marka nie oferuje wbudowanego przenoszenia, użyj awaryjnej metody kodu QR od operatora.

### Porównanie transferu międzyplatformowego i wewnątrzplatformowego eSIM

| Cecha | Międzyplatformowy | Wewnątrzplatformowy |
|---------|----------------|----------------|
| **iOS ↔ iOS** | Nie dotyczy | ✅ Szybkie przenoszenie działa |
| **Android ↔ Android** | Nie dotyczy | ✅ Metody specyficzne dla marki |
| **iOS ↔ Android** | ✅ Omówione w tym przewodniku | ❌ Nieobsługiwane bezpośrednio |
| **Zależność od operatora** | Wyższa | Niższa (Apple/Google to obsługują) |
| **Wymagany czas** | 3-10 min | 1-2 min |
| **Skuteczność** | Różni się w zależności od operatora | Zazwyczaj wysoka |

Aby uzyskać bardziej szczegółowe informacje na temat zachowania eSIM specyficznego dla urządzenia, zobacz nasz **[Kompletny przewodnik eSIM dla iPhone'a 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**.


## Obsługiwani operatorzy dla międzyplatformowego przenoszenia eSIM (szczegółowo)

Międzyplatformowe przenoszenie eSIM jest wciąż nowe, a wsparcie operatorów jest wdrażane stopniowo. Nie ma kompletnej publicznej listy każdego obsługiwanego operatora, a dostępność często się zmienia, więc sprawdź stronę internetową lub aplikację swojego operatora dla aktualnego statusu.

### Potwierdzeni obsługiwani operatorzy (stan na sierpień 2026)

| Operator | Region | Metoda przenoszenia | Limit transferów | Koszt |
|---------|--------|-----------------|----------------|------|
| **Orange** | Francja, Europa | Aplikacja Orange → "Moja przestrzeń eSIM" → "Przenieś na nowe urządzenie" | 3 razy w roku | Bezpłatny |
| **SFR** | Francja | Aplikacja SFR & Moi → "Zarządzaj moją SIM" → "Przenieś eSIM" | 5 razy w roku | Bezpłatny |
| **T-Mobile** | USA | Aplikacja T-Mobile → "Zarządzaj eSIM" → "Przenieś na nowe urządzenie" | Nieograniczony | Bezpłatny |
| **Verizon** | USA | Aplikacja My Verizon → "Aktywuj lub zmień urządzenie" | Nieograniczony | Bezpłatny |
| **AT&T** | USA | Aplikacja AT&T → "Aktywuj eSIM" | Różni się w zależności od planu | Bezpłatny (postpaid) |
| **EE** | Wielka Brytania | Aplikacja EE → "Plan" → "Przenoszenie eSIM" | 3 razy w roku | Bezpłatny |
| **Deutsche Telekom** | Niemcy | Aplikacja Telekom → "Przenoszenie eSIM" | Nieograniczony | Bezpłatny |
| **Swisscom** | Szwajcaria | Aplikacja Swisscom → "Przenoszenie eSIM" | 3 razy w roku | Bezpłatny |
| **Bouygues** | Francja | Ponowne wydanie kodu QR (przez portal klienta) | 3 razy w roku | Bezpłatny |
| **Free** | Francja | Ponowne wydanie kodu QR (przez portal klienta) | 2 razy w roku | Bezpłatny |
| **Vodafone** | Wielka Brytania, Europa | Aplikacja Vodafone → "Przenoszenie eSIM" | Różni się w zależności od kraju | Bezpłatny (postpaid) |
| **Google Fi** | USA, Globalny | Aplikacja Google Fi → "Aktywuj na tym urządzeniu" | Nieograniczony | Bezpłatny |

### eSIM podróżne (NIE przenoszalne)

| Dostawca | Przenoszalne? | Co zrobić zamiast |
|----------|---------------|-------------------|
| **Roami** | ❌ Nie | Kup nowy plan na nowym urządzeniu |
| **Airalo** | ❌ Nie | Kup nowy plan na nowym urządzeniu |
| **Holafly** | ❌ Nie | Kup nowy plan na nowym urządzeniu |
| **Nomad** | ❌ Nie | Kup nowy plan na nowym urządzeniu |

**Jak sprawdzić, czy Twój operator to obsługuje?** Wypróbuj kroki z Metody A lub B. Jeśli Twój operator nie oferuje transferu przez aplikację ani nowego kodu QR, użyj metod awaryjnych poniżej.


## Metody awaryjne, gdy międzyplatformowe przenoszenie eSIM nie jest obsługiwane

Jeśli Twojego operatora nie ma na liście lub widzisz **błąd przenoszenia eSIM**, użyj jednej z tych alternatyw:

### Opcja 1: Kod QR wydany przez operatora (zawsze działa)
1. Zadzwoń lub napisz na czacie do swojego operatora.
2. Powiedz: "Zmieniam z Androida na iPhone'a (lub odwrotnie). Proszę ponownie wydać moją eSIM jako nowy kod QR."
3. Wyślą Ci kod QR e-mailem lub link aktywacyjny.
4. Na nowym urządzeniu przejdź do `Ustawienia` → `Komórkowe` → `Dodaj eSIM` → `Użyj kodu QR` i zeskanuj.
5. eSIM na starym urządzeniu przestanie działać po aktywacji nowej.

**Wskazówka:** Niektórzy operatorzy pobierają niewielką opłatę za ponowne wydanie eSIM (0‑25 $). Zapytaj przed wykonaniem.

### Opcja 2: Ręczne wprowadzanie SM-DP+ (zaawansowane)
Jeśli operator poda Ci **kod aktywacyjny** i **adres SM‑DP+** (adres serwera, który dostarcza profil eSIM do telefonu), możesz ręcznie dodać eSIM na nowym urządzeniu:
1. `Ustawienia` → `Komórkowe` → `Dodaj eSIM` → `Wprowadź szczegóły ręcznie`.
2. Wklej adres SM‑DP+ i kod aktywacyjny.
3. Kliknij `Dalej`. Działa to zarówno na iPhonie, jak i Androidzie.

### Opcja 3: Kup nowy plan (dla eSIM podróżnych)
Jeśli używasz eSIM podróżnej (Roami, Airalo, Holafly), nie trać czasu na próby przeniesienia – to nie zadziała. Po prostu kup nowy plan na nowym urządzeniu.

> **Wskazówka dotycząca przejścia:** Awaryjne rozwiązanie z kodem QR jest najbardziej niezawodną metodą dla każdego operatora, niezależnie od tego, czy obsługuje transfer przez aplikację. Może wymagać rozmowy telefonicznej, ale zawsze działa.


## Przenoszenie eSIM czy nowa aktywacja? – Macierz decyzyjna

Czasami kupno nowej eSIM jest szybsze niż przenoszenie. Oto kiedy wybrać co:

| Czynnik | Przenoszenie | Nowa aktywacja | Co lepsze? |
|--------|----------|----------------|------------------|
| **Zachowujesz ten sam numer telefonu** | ✅ Zachowaj numer | ❌ Uzyskaj nowy numer | Przenoszenie wygrywa |
| **Masz 2FA powiązane z numerem** | ✅ Zachowaj dostęp | ❌ Ryzyko utraty dostępu | Przenoszenie wygrywa |
| **Twój operator pobiera opłatę za przeniesienie** | Może kosztować 0‑25 $ | 0 $ (i tak kupujesz nowy) | Zależy od opłaty |
| **eSIM podróżna** | ❌ Niemożliwe | ✅ Łatwe | Nowa aktywacja wygrywa |
| **Jesteś w pośpiechu (poniżej 5 minut)** | ⚠️ Może zająć 5‑10 min | ✅ 2 min zeskanuj kod QR | Nowa aktywacja wygrywa |
| **Chcesz zachować istniejący plan/dane** | ✅ Zachowaj niewykorzystane dane | ❌ Strać niewykorzystane dane | Przenoszenie wygrywa |

**Zalecenie:** Jeśli zachowujesz ten sam plan operatora i chcesz zachować numer telefonu, przenieś. Jeśli masz eSIM podróżną lub się spieszysz, po prostu kup nowy plan na nowym urządzeniu.


## Rozwiązywanie problemów: Dlaczego moje przenoszenie eSIM nie powiodło się?

| Błąd / Objaw | Najprawdopodobniejsza przyczyna | Poprawka |
|----------------|-------------------|-----|
| "Transfer niedostępny – operator nieobsługiwany" | Twój operator nie obsługuje transferu międzyplatformowego. | Użyj metod awaryjnych powyżej. |
| Kod QR skanuje się, ale potem mówi "sesja wygasła" | Zajęło Ci zbyt dużo czasu po wygenerowaniu kodu QR (wygasł). | Powtórz proces i zeskanuj natychmiast. |
| Android mówi "Parowanie nie powiodło się" | Bluetooth lub uprawnienia sieci lokalnej zablokowane. | Na iPhonie: `Ustawienia > Prywatność i bezpieczeństwo > Sieć lokalna` – upewnij się, że `Ustawienia` są WŁĄCZONE. Na Androidzie: wyłącz "skanowanie zabezpieczeń Wi‑Fi" (zwykle w zaawansowanych ustawieniach Wi‑Fi). |
| Transfer zaczyna się, ale zatrzymuje na 50% | Słabe Wi‑Fi lub sygnał komórkowy. | Zbliż oba telefony do routera. Wyłącz VPN na obu urządzeniach. |
| **"eSIM już powiązana z innym urządzeniem"** | Profil nie został prawidłowo zwolniony ze starego urządzenia. | Na starym urządzeniu przejdź do `Ustawienia > Komórkowe` i ręcznie `Usuń eSIM` (jeśli nadal widoczna). Następnie poczekaj 5 minut i spróbuj ponownie. Jeśli nadal nie działa, skontaktuj się z operatorem w celu zwolnienia profilu. |
| iPhone prosi o **kod potwierdzenia** po skanowaniu | Profil eSIM ma obowiązkowy **kod potwierdzenia eSIM** (rzadkie). | Poszukaj kodu w e-mailu operatora (często 4–8 cyfr). Jeśli nie znaleziono, zapytaj operatora. |
| Dwukrotne kliknięcie przycisku bocznego nic nie robi (iPhone → Android) | Uwierzytelnianie biometryczne nie skonfigurowane lub wyłączone. | Skonfiguruj Face ID / Touch ID lub tymczasowo wyłącz "Wymagaj uwagi" dla Face ID. |
| **eSIM brak usługi** po przeniesieniu | Ustawienia APN nie skonfigurowane. | Skonfiguruj APN ręcznie (zobacz tabelę poniżej). |
| **Profil eSIM wygasł** | Profil ma ograniczoną datę ważności. | Skontaktuj się z operatorem po nowy kod QR. |
| **Brak opcji "Dodaj eSIM" na iPhonie** | iPhone zablokowany przez operatora lub starszy iOS. | Sprawdź blokadę operatora w Ustawienia > Ogólne > Informacje. Zaktualizuj do iOS 18. |
| **"SIM nieobsługiwana" na nowym urządzeniu** | Nowe urządzenie jest zablokowane przez innego operatora. | Sprawdź Blokadę operatora – musi być "Brak ograniczeń SIM." |
| **Przekroczono limit transferów** | Przeniosłeś tę eSIM zbyt wiele razy (niektórzy operatorzy ograniczają do 3‑5 rocznie). | Skontaktuj się z pomocą operatora, aby zresetować limit lub uzyskać nową eSIM. |
| **"Przenoszenie eSIM nie powiodło się" na Samsungu** | Samsung Smart Switch może nie obsługiwać konkretnego profilu operatora. | Zamiast tego użyj awaryjnego kodu QR od operatora. |

### Ręczna konfiguracja APN

Jeśli po **przeniesieniu eSIM** doświadczasz **eSIM brak usługi**, skonfiguruj APN ręcznie:

| Operator | APN | Nazwa użytkownika | Hasło |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (puste) | (puste) |
| **SFR** | sl2sfr | (puste) | (puste) |
| **Free** | free | (puste) | (puste) |
| **Bouygues** | ebouygtel.com | (puste) | (puste) |
| **T-Mobile (US)** | fast.t-mobile.com | (puste) | (puste) |
| **AT&T (US)** | nxgen | (puste) | (puste) |
| **Verizon (US)** | vzwinternet | (puste) | (puste) |
| **Telekom (DE)** | internet.telekom | (puste) | (puste) |

### Nadal utknąłeś?
Zbierz te informacje przed skontaktowaniem się z pomocą:
- IMEI i EID urządzenia źródłowego
- IMEI i EID urządzenia docelowego
- Dokładny komunikat błędu (zrób zrzut ekranu)
- Numer konta lub numer telefonu


## Co dzieje się ze starą eSIM po przeniesieniu?

**Jest natychmiast dezaktywowana.**

Stary profil eSIM może pozostać widoczny na starym urządzeniu przez krótki czas. Możesz go ręcznie usunąć:
`Ustawienia > Komórkowe > kliknij starą eSIM > Usuń eSIM`.

> 💰 **Rozliczenia:** Twój operator będzie nadal obciążać Cię za plan. Przeniesienie nie anuluje planu – tylko przenosi kartę SIM. Aby anulować, musisz skontaktować się z operatorem osobno.

Jeśli martwisz się błędami **eSIM powiązana z innym urządzeniem**, zawsze usuń stary profil z urządzenia źródłowego po pomyślnym zakończeniu przenoszenia.

### Oś czasu przenoszenia vs. usuwania

| Akcja | Co się dzieje | Kiedy to zrobić |
| :--- | :--- | :--- |
| **Rozpoczęto przenoszenie** | Operator wysyła profil na nowe urządzenie | Przed usunięciem starej eSIM |
| **Nowa eSIM aktywowana** | Nowe urządzenie łączy się z siecią | Po zakończeniu aktywacji |
| **Stara eSIM dezaktywowana** | Operator dezaktywuje stary profil | Automatycznie – może zająć 1‑5 minut |
| **Usuń starą eSIM** | Usuwa nieaktywny profil ze starego urządzenia | Po potwierdzeniu, że nowe urządzenie działa |


## Po przeniesieniu eSIM – migracja WhatsApp, iMessage i 2FA

Po pomyślnym przeniesieniu eSIM musisz skonfigurować aplikacje do przesyłania wiadomości i usługi uwierzytelniania na nowym urządzeniu.

### WhatsApp (iPhone i Android)

WhatsApp używa Twojego numeru telefonu do identyfikacji konta. Po **przeniesieniu eSIM**:

1. Otwórz WhatsApp na nowym urządzeniu.
2. Wprowadź swój numer telefonu (ten, który przeniosłeś).
3. Otrzymasz kod weryfikacyjny przez SMS lub automatyczne połączenie na Twój numer.
4. Wprowadź kod – Twoje czaty pojawią się ponownie, jeśli wcześniej wykonałeś kopię zapasową.

**Wskazówka:** Wykonaj kopię zapasową czatów przed rozpoczęciem przenoszenia. Na iPhonie: WhatsApp > Ustawienia > Czaty > Kopia zapasowa czatów. Na Androidzie: WhatsApp > Ustawienia > Czaty > Kopia zapasowa.

**Typowy problem z WhatsApp:** Jeśli nie otrzymasz kodu weryfikacyjnego SMS, spróbuj opcji "Zadzwoń do mnie" – WhatsApp zadzwoni na Twój numer i odczyta kod. Jeśli to nie zadziała, poczekaj 5 minut i spróbuj ponownie (sieć operatora może się jeszcze stabilizować).

### iMessage i FaceTime (tylko iPhone)

1. Przejdź do `Ustawienia` → `Wiadomości` i włącz `iMessage` NA.
2. Przejdź do `Ustawienia` → `FaceTime` i włącz `FaceTime` NA.
3. Poczekaj 1‑2 minuty na aktywację. Jeśli pojawi się "Oczekiwanie na aktywację", wyłącz i włącz ponownie.
4. Sprawdź, czy Twój numer jest wybrany: Ustawienia > Wiadomości > Wyślij i odbierz → wybierz swój numer eSIM.

### Uwierzytelnianie dwuskładnikowe (2FA) i weryfikacja SMS

Ponieważ Twój numer telefonu się nie zmienił, kody 2FA oparte na SMS będą działać normalnie. Jednak aplikacje uwierzytelniające (Google Authenticator, Microsoft Authenticator, Authy) mogą wymagać ponownej konfiguracji:

- **Authy:** Twoje tokeny są zaszyfrowane i tworzona jest ich kopia zapasowa w chmurze – wystarczy zalogować się na nowym urządzeniu.
- **Google Authenticator:** Będziesz musiał przenieść swoje konta pojedynczo lub użyć funkcji "Przenieś konta".
- **Microsoft Authenticator:** Użyj funkcji kopii zapasowej, aby przywrócić na nowym urządzeniu.
- **SMS 2FA:** Przetestuj, prosząc o kod weryfikacyjny od swojego banku lub dostawcy e-mail, aby potwierdzić dostarczanie SMS.

### Aplikacje bankowe i usługi finansowe

Większość banków wykryje zmianę urządzenia i będzie wymagać ponownego uwierzytelnienia. Miej przygotowane dane logowania i wszelkie fizyczne urządzenia tokenowe.

Więcej pomocy dotyczącej migracji aplikacji po **przeniesieniu eSIM** znajdziesz w naszym [przewodniku konfiguracji eSIM](/faq/how-to-activate-an-esim/).


## Najlepsze praktyki, aby uniknąć problemów z przenoszeniem eSIM

✅ **Przed przeniesieniem:**
- Sprawdź wsparcie operatora (spróbuj w menu – jeśli jest, jest obsługiwane).
- Zaktualizuj oba telefony do najnowszego systemu (iOS 18 / Android 16).
- Naładuj oba telefony powyżej 30%.
- Tymczasowo wyłącz VPN i ad-blockery.
- Zweryfikuj, czy Twój **profil eSIM** nie jest **wygasły**.
- Wykonaj kopię zapasową WhatsApp i innych aplikacji do przesyłania wiadomości.
- **NIE usuwaj eSIM ze starego urządzenia jeszcze.**

✅ **Podczas przenoszenia:**
- Trzymaj telefony w odległości 10 cm od siebie.
- Nie przełączaj aplikacji ani nie blokuj ekranu.
- Nie wyłączaj Bluetooth ani Wi‑Fi.
- Poczekaj na komunikat potwierdzający – nie zakładaj, że jest gotowe.

✅ **Po przeniesieniu:**
- Przetestuj połączenia i dane na nowym urządzeniu.
- Usuń starą eSIM z urządzenia źródłowego, aby uniknąć nieporozumień.
- Pozostaw Wi‑Fi na starym urządzeniu włączone na co najmniej godzinę – niektórzy operatorzy potrzebują końcowego uścisku.
- Ponownie aktywuj WhatsApp, iMessage i aplikacje 2FA.
- Przetestuj kody weryfikacyjne SMS od swojego banku.
- Ustaw przypomnienie o anulowaniu starego planu, jeśli całkowicie zmieniasz operatora.


## Podróżowanie i przenoszenie eSIM – co musisz wiedzieć

Jeśli podróżujesz za granicę i musisz przenieść eSIM, oto kilka ważnych punktów:

### Przenoszenie eSIM podczas podróży
- Transfer międzyplatformowy działa **na całym świecie**, o ile Twój operator go obsługuje.
- Upewnij się, że masz stabilne połączenie Wi‑Fi (hotel, kawiarnia) przed rozpoczęciem.
- Jeśli transfer się nie powiedzie, awaryjny kod QR od operatora jest Twoją najlepszą opcją.
- Sprawdź **ustawienia APN eSIM** po przeniesieniu – niektórzy operatorzy wymagają ręcznej konfiguracji.

### Operatorzy francuscy i podróżowanie
- **Orange** i **SFR** umożliwiają transfer międzyplatformowy gdziekolwiek jesteś.
- **Free** i **Bouygues** wymagają ponownego wydania kodu QR – zrób to przed wyjazdem.
- W przypadku **eSIM podróżnych** pamiętaj, że są one zazwyczaj **nieprzenoszalne** – kup nowy plan na nowym urządzeniu.

### Jak skontaktować się z operatorami za granicą

| Operator | Metoda kontaktu z pomocą | Uwagi |
|---------|------------------------|-------|
| **Orange** | Czat w aplikacji Orange, wsparcie WhatsApp lub telefon | 24/7 w większości regionów |
| **SFR** | Czat w aplikacji SFR & Moi, telefon | Ograniczone godziny |
| **T-Mobile** | Czat w aplikacji T‑Mobile, iMessage, telefon | Całodobowe wsparcie w USA |
| **Verizon** | Czat w aplikacji My Verizon, telefon | Całodobowe wsparcie |
| **AT&T** | Czat w aplikacji AT&T, telefon | Ograniczone godziny za granicą |
| **EE** | Czat w aplikacji EE, telefon | Całodobowe wsparcie w Wielkiej Brytanii |

**Wskazówka:** Pobierz aplikację swojego operatora i zapisz dane kontaktowe pomocy przed podróżą. Niektórzy operatorzy wymagają weryfikacji SMS, aby się zalogować – jeśli jesteś w trakcie przenoszenia, może to nie działać.

### Co zrobić, jeśli transfer nie powiedzie się w trakcie podróży

1. Połącz się z najbliższym darmowym Wi‑Fi (lotniska, hotele, kawiarnie).
2. Skontaktuj się z pomocą operatora przez e-mail lub aplikację do przesyłania wiadomości.
3. Poproś ich o ponowne wydanie eSIM jako kodu QR.
4. Zeskanuj kod QR na nowym urządzeniu.

### Wskazówki dla globtroterów
- Zawsze przechowuj kopię zapasową kodów QR eSIM.
- Jeśli zmieniasz telefon w trakcie podróży, preferuj transfer natywny zamiast kodu QR, gdy to możliwe.
- W przypadku wielu destynacji rozważ globalny plan eSIM obejmujący wiele krajów.
- Zapisz dane kontaktowe pomocy swojego operatora przed podróżą.

Więcej informacji o korzystaniu z eSIM podczas podróży znajdziesz w naszym [Przewodniku eSIM podróżnych 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Często zadawane pytania

**P1: Czy mogę przenieść eSIM tylko z danymi (np. eSIM podróżną)?**
Nie. Większość eSIM podróżnych (Roami, Airalo, Holafly, Nomad itp.) nie obsługuje transferu międzyplatformowego. Są zaprojektowane do jednorazowej instalacji na urządzenie. Będziesz musiał kupić nowy plan na nowym telefonie. Zobacz "Dlaczego eSIM podróżne nie mogą być przenoszone?" powyżej dla technicznego wyjaśnienia.

**P2: Czy transfer działa między iPhonem 11 a Samsungiem S24?**
Tak – o ile oba spełniają wymagania systemowe. iPhone 11 obsługuje iOS 18 (działa do iOS 18). Samsung S24 obsługuje Android 16. Generacja sprzętu nie ma znaczenia; liczy się tylko wersja systemu.

**P3: Aplikacja mojego operatora nie oferuje przenoszenia eSIM. Co się dzieje?**
Nie każdy operator obsługuje przenoszenie eSIM przez aplikację. Jeśli Twój operator nie oferuje tego, użyj awaryjnego kodu QR od operatora: skontaktuj się z operatorem i poproś o ponowne wydanie eSIM jako nowego kodu QR. Niektórzy operatorzy pobierają za to niewielką opłatę (0‑25 $).

**P4: Czy mój WhatsApp / iMessage / kody 2FA będą nadal działać po przeniesieniu?**
WhatsApp używa Twojego numeru telefonu – wykryje zmianę SIM i może poprosić o ponowną weryfikację (zwykle automatycznie). iMessage na iPhonie używa numeru eSIM i powinien ponownie aktywować się w ciągu minuty. W przypadku 2FA usługi wysyłające SMS na Twój numer będą działać normalnie – numer się nie zmienił. Zobacz Sekcję 10 dla szczegółowych kroków migracji.

**P5: Czy mogę przenosić tę samą eSIM tam i z powrotem wiele razy?**
Tak, ale każde przeniesienie wymaga tego samego procesu. Niektórzy operatorzy ograniczają liczbę przeniesień eSIM rocznie (np. 3‑5 razy). Jeśli osiągniesz limit, skontaktuj się z operatorem po pomoc.

**P6: Co z konfiguracjami dual‑SIM eSIM + fizyczna SIM?**
Przenoszenie dotyczy tylko eSIM. Fizyczna SIM pozostaje w urządzeniu źródłowym. Jeśli chcesz przenieść obie, musisz przenieść eSIM (korzystając z tego przewodnika) i fizycznie przenieść kartę nano‑SIM na nowe urządzenie. Aby zoptymalizować doświadczenia dual‑SIM po przeniesieniu, sprawdź nasz **[Dual eSIM nie działa? 12 poprawek dla iPhone'a](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**P7: Co jeśli podczas przenoszenia pojawi się błąd "wygasły profil eSIM"?**
Skontaktuj się z operatorem, aby uzyskać nowy kod QR – ponowne wydanie jest zwykle bezpłatne. Upewnij się, że aktywujesz nowy kod QR natychmiast (w ciągu 30 minut), aby uniknąć ponownego wygaśnięcia.

**P8: Dlaczego blokada operatora uniemożliwia mi przeniesienie?**
Jeśli Twój telefon ma **blokadę operatora**, możesz przenieść eSIM tylko na urządzenie tego samego operatora. Skontaktuj się z operatorem, aby odblokować urządzenie przed przeniesieniem. Na iPhonie: Ustawienia > Ogólne > Informacje > Blokada operatora musi mówić "Brak ograniczeń SIM."

**P9: Czy mogę przenieść eSIM Orange na urządzenie nie-Orange?**
Tak, jeśli Twoje urządzenie jest odblokowane, a Twój plan Orange na to pozwala. **Przenoszenie eSIM Orange** jest obsługiwane przez aplikację Orange lub transfer natywny. Orange pozwala na do 3 przeniesień rocznie.

**P10: Czy transfer działa z eSIM Free?**
Nie – Free nie obsługuje transferu międzyplatformowego. Użyj awaryjnej metody kodu QR z portalu klienta Free. Free pozwala na do 2 przeniesień rocznie.

**P11: Co to jest kod potwierdzenia eSIM i gdzie go znaleźć?**
Niektóre profile eSIM mają obowiązkowy **kod potwierdzenia eSIM** – zazwyczaj 4‑8 cyfr. Poszukaj go w e-mailu operatora lub instrukcjach aktywacji. Jeśli nie znaleziono, zapytaj operatora.

**P12: Co oznacza "eSIM nie przenosi się na nowy telefon"?**
To zazwyczaj oznacza, że Twój operator nie obsługuje transferu, kod QR wygasł, stara eSIM jest nadal aktywna lub nowe urządzenie jest zablokowane przez operatora. Usuń najpierw starą eSIM (jeśli nadal widoczna), a następnie spróbuj ponownie. Zobacz Sekcję 7 dla pełnej tabeli rozwiązywania problemów.

**P13: Jak naprawić "aktywacja eSIM nie powiodła się" po przeniesieniu?**
Sprawdź połączenie Wi‑Fi, zrestartuj oba urządzenia i spróbuj ponownie. Jeśli nadal nie działa, użyj metody ręcznego wprowadzania z adresem SM‑DP+ z e-maila operatora.

**P14: Czy przeniesienie eSIM anuluje mój plan?**
Nie – przeniesienie eSIM tylko przenosi profil SIM na nowe urządzenie. Twój plan (i rozliczenia) trwa nadal. Aby anulować plan, musisz skontaktować się z operatorem osobno.

**P15: Czy mogę przenieść eSIM, jeśli już usunąłem ją ze starego telefonu?**
Tak, ale to bardziej skomplikowane. Jeśli usunąłeś eSIM przed rozpoczęciem przenoszenia, skontaktuj się z operatorem i poproś o ponowne wydanie eSIM jako nowego kodu QR. Mogą to zrobić, ponieważ Twój profil nadal istnieje na ich serwerach.

**P16: Ile kosztuje ponowne wydanie kodu QR eSIM?**
Większość operatorów ponownie wydaje eSIM za darmo (zwłaszcza plany postpaid). Niektórzy operatorzy prepaid lub MVNO mogą pobierać niewielką opłatę (5‑25 $). Zapytaj przed poproszeniem o ponowne wydanie.

**P17: Czy mogę przenieść eSIM Vodafone na urządzenie nie-Vodafone?**
Tak, o ile Twoje urządzenie jest odblokowane, a Twój plan Vodafone pozwala na przenoszenie eSIM. Vodafone obsługuje transfer przez swoją aplikację w większości krajów. Sprawdź w aplikacji Vodafone opcję "Przenoszenie eSIM".

**P18: Co jeśli osiągnę limit transferów mojego operatora?**
Niektórzy operatorzy ograniczają przenoszenia do 3‑5 rocznie. Jeśli osiągniesz limit, skontaktuj się z pomocą operatora – często mogą zresetować limit lub wydać nowy kod QR eSIM ręcznie (omijając system przenoszenia).

**P19: Czy mogę przenieść dwie eSIM jednocześnie (dual eSIM)?**
Tak, ale musisz je przenieść **pojedynczo**. Każdy profil eSIM jest niezależny i musi być przeniesiony osobno przy użyciu tego samego procesu. Jeśli masz dwie aktywne eSIM na starym urządzeniu, przenieś najpierw główną eSIM, a następnie drugą.

**P20: Jaka jest różnica między przenoszeniem eSIM a ponownym wydaniem eSIM?**
Przenoszenie przenosi istniejący profil na nowe urządzenie (zachowując numer i plan). Ponowne wydanie tworzy zupełnie nowy profil eSIM dla tego samego numeru – stary profil jest trwale dezaktywowany. Ponowne wydanie jest metodą awaryjną, gdy transfer nie jest obsługiwany przez operatora.

---

## Podsumowanie końcowe

Możliwość przenoszenia eSIM między iPhonem a Androidem bez interwencji operatora to **przełom w 2026 roku**. Usuwa to ostatnią główną barierę w zmianie ekosystemów. O ile Twój operator jest na liście obsługiwanych, a oba telefony są zaktualizowane, możesz przenieść swój numer w mniej niż minutę.

**Zapamiętaj**:
- Jeśli Twój operator nie jest obsługiwany, awaryjne rozwiązanie z kodem QR nadal działa – wymaga tylko rozmowy telefonicznej.
- W przypadku eSIM podróżnych traktuj je jako jednorazowe; kup świeże na każdym urządzeniu.
- **Nigdy nie usuwaj starej eSIM przed rozpoczęciem przenoszenia** – to najczęstszy błąd.
- Sprawdź blokadę operatora przed rozpoczęciem – wymagane jest "Brak ograniczeń SIM".
- Niektórzy operatorzy ograniczają liczbę przeniesień rocznie – sprawdź przed rozpoczęciem.

Jeśli napotkasz uporczywe komunikaty **błędu przenoszenia eSIM**, nasz **[Przewodnik zaawansowanego rozwiązywania problemów z eSIM (16 rzeczywistych przypadków)](/faq/esim-deep-troubleshooting-guide-2026/)** zawiera zaawansowane rozwiązania.

👉 **Przenosisz na plan podróżny?** Zobacz [eSIM dla USA](/united-states-esim/) lub [eSIM dla Europy](/europe-esim/) po zakończeniu przenoszenia.

👉 **Nie wiesz, czy Twój nowy telefon obsługuje eSIM?** Sprawdź naszą **[pełną listę kompatybilności](/compatibility/)** przed rozpoczęciem.

👉 **Testujesz eSIM podróżną na nowym urządzeniu?** Zdobądź **[darmową próbną eSIM Roami](/free-esim/)** aby potwierdzić, że wszystko działa.

---

*Informacje oparte na oficjalnej dokumentacji Apple i Androida, standardach GSMA i wytycznych operatorów według stanu na sierpień 2026. Funkcje i wsparcie operatorów mogą ulec zmianie.*
## Źródła

- [GSMA — specyfikacja eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM na iPhonie](https://support.apple.com/en-us/108072)
- [Google Support — Skonfiguruj eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)