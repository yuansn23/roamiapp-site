---
title: "Jak przenieść eSIM między iPhone a Android"
h1_title: "Jak przenieść eSIM między iPhone a Android"
description: "Przenieś swój eSIM między iPhone a Android za pomocą aplikacji operatora lub ponownie wydanego kodu QR. Krok po kroku w obu kierunkach, plus poprawki typowych błędów przenoszenia."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["międzyplatformowe przenoszenie eSIM", "błąd przenoszenia eSIM", "iOS 18 eSIM", "blokada operatora eSIM", "kod potwierdzenia eSIM", "eSIM brak usługi", "ustawienia APN eSIM", "rozwiązywanie problemów eSIM", "aktywacja eSIM nie powiodła się", "przenieś eSIM między iPhone a Android", "nie można przenieść eSIM do nowego iPhone", "Orange eSIM transfer"]
date: 2026-09-18T00:00:00Z
lastmod: 2026-09-18T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Rozwiązywanie problemów", "Konfiguracja podróży"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
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
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "Popularne eSIM"
  item_suffix: "eSIM"
  items:
    - name: "eSIM USA"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Niemcy eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turcja eSIM"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japonia eSIM"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "Chiny eSIM"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Odbierz darmowe eSIM"
  icon: "🎁"
  item_suffix: "Darmowe eSIM"
  item_subtitle: "Darmowe eSIM"
  items:
    - name: "eSIM UK"
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

# Sidebar: Popular questions
sidebar_questions:
  title: "Popularne pytania"
  items:
    - question: "Czym jest aktywacja eSIM i jak działa?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Jak aktywować eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Jak aktywować eSIM na iPhone (wszystkie modele)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Najnowsza lista zgodności eSIM"
      url: "/compatibility/"
---


> **Uwaga redaktora:** Możesz przenieść eSIM między iPhone a Android tylko wtedy, gdy Twój operator obsługuje międzyplatformowe przenoszenie, a większości travel eSIMów nie można przenieść wcale. Poniższe metody są zgodne z oficjalną dokumentacją operatorów i skupiają się na przenoszeniu, które faktycznie działa dzisiaj. Najpierw sprawdź sekcję obsługiwanych operatorów, aby zobaczyć, czy Twój plan się kwalifikuje.

Oto rzeczywistość od razu: eSIM generalnie nie może być przeniesiony bezpośrednio między iPhone a Android, ponieważ obie platformy nie dzielą protokołu przenoszenia. Obejścia są jednak proste — poproś operatora o ponowne wydanie profilu jako kod QR lub przenieś przez aplikację operatora, tam gdzie jest obsługiwane. Oba kierunki, plus wyjątki travel eSIM, są opisane poniżej.

## Czym jest przenoszenie eSIM?

**Znajdź swój scenariusz poniżej i przejdź od razu do właściwej metody.**

| Twój scenariusz | Czy możesz przenieść? | Najlepsza metoda | Gdzie iść |
| :--- | :--- | :--- | :--- |
| **iPhone → nowy iPhone** | ✅ Tak (zawsze) | Apple Quick Transfer | [Przenoszenie w obrębie platformy](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → nowy Samsung** | ✅ Tak (zwykle) | Samsung Smart Switch | [Przenoszenie w obrębie platformy](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (operator obsługuje aplikację)** | ✅ Tak | Aplikacja operatora | [Metoda A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (operator nie obsługuje aplikacji)** | ✅ Tak | Kod QR jako rozwiązanie awaryjne | [Metoda B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (operator obsługuje)** | ✅ Tak | Aplikacja operatora lub kod QR | [Metoda B](#esim-transfer-from-iphone-to-android) |
| **Travel eSIM (Roami, Airalo, Holafly)** | ❌ Nie | Kup nowy plan na nowym urządzeniu | [Dlaczego travel eSIMy nie mogą być przenoszone](#why-cant-travel-esims-be-transferred) |
| **Operator nie obsługuje przenoszenia** | ✅ Tak (awaryjnie) | Skontaktuj się z operatorem po kod QR | [Metody awaryjne](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Kluczowa zasada:** Nie ma **wbudowanego przycisku przenoszenia eSIM iOS-do-Android**, jakiego jest dla iPhone-do-iPhone. Międzyplatformowe przenoszenie zawsze przechodzi **przez Twojego operatora** – albo przez jego aplikację, albo przez poproszenie o nowy kod QR. Travel eSIMy są **tylko dla jednego urządzenia** – kup nowy na nowym telefonie.

**Nie możesz przenieść?** Większość travel eSIMów (Roami, Airalo, Holafly) jest **tylko dla jednego urządzenia** – będziesz musiał kupić nowy plan na nowym telefonie. W przypadku lokalnych eSIMów operatorów awaryjne rozwiązanie z kodem QR zawsze działa.

> **Kluczowe ograniczenie:** Nie ma **wbudowanego przenoszenia eSIM iOS-do-Android** – musisz przejść przez swojego operatora. Ten przewodnik przeprowadza przez każdą obsługiwaną metodę.

Nowy w konfiguracji eSIM? Nasz [przewodnik jak aktywować eSIM](/faq/how-to-activate-an-esim/) obejmuje instalację od zera. Jeśli przenoszenie zawiedzie w połowie, [Szczegółowy przewodnik rozwiązywania problemów z eSIM](/faq/esim-deep-troubleshooting-guide-2026/) mapuje każdy komunikat błędu na poprawkę.


## Której metody przenoszenia eSIM powinieneś użyć?

| Twoja sytuacja | Najlepsza metoda | Czas | Potrzebny operator? |
| :--- | :--- | :--- | :--- |
| **Zmiana iPhone ↔ iPhone** | Apple Quick Transfer (Ustawienia > Komórka > Dodaj eSIM > Przenieś) | 2 min | Nie (Apple to obsługuje) |
| **Zmiana Android ↔ Android (Samsung do Samsung, itp.)** | Przenoszenie specyficzne dla marki (Samsung: Menedżer SIM > Dodaj eSIM > Przenieś) | 2 min | Nie (marka to obsługuje) |
| **Zmiana iPhone ↔ Android (iOS 18 / Android 16+)** | Przenoszenie przez aplikację operatora | 3-5 min | Tak |
| **Zmiana iPhone ↔ Android (starszy OS)** | Kod QR ponownie wydany przez operatora | 5-10 min | Tak |
| **Travel eSIM (Roami, Airalo, Holafly)** | ❌ Nie można przenieść – kup nowy plan na nowym urządzeniu | Nie dotyczy | Nie – dostawca nie pozwala |
| **Twój operator nie obsługuje przenoszenia** | Awaryjnie kod QR (zadzwoń do operatora) | 10-20 min | Tak |


## Kompletny przewodnik po przenoszeniu eSIM

Oto mapa podróży krok po kroku dla każdego, kto przenosi eSIM na nowe urządzenie.

| Krok | Co myślisz | Co zrobić | Gdzie to znaleźć |
| :--- | :--- | :--- | :--- |
| **1. Określ swój scenariusz** | „Jakiego rodzaju zmianę robię?" | Zidentyfikuj: ten sam ekosystem (iOS→iOS / Android→Android) czy międzyplatformowy (iOS↔Android)? | [Szybki przepływ decyzyjny powyżej](#which-esim-transfer-method-should-you-use) |
| **2. Sprawdź wersje OS** | „Czy moje telefony są wystarczająco zaktualizowane?" | iPhone musi mieć iOS 18+, Android musi mieć Android 16+ dla natywnego międzyplatformowego przenoszenia. | Zaktualizuj najpierw, jeśli nie. |
| **3. Sprawdź blokadę operatora** | „Czy mój telefon jest zablokowany na operatora?" | Ustawienia > Ogólne > Informacje > Blokada operatora musi mówić „Brak ograniczeń SIM." | [Wymagania wstępne poniżej](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Sprawdź obsługę operatora** | „Czy mój operator na to pozwala?" | Otwórz aplikację operatora i poszukaj opcji przenoszenia eSIM. Lub zadzwoń i zapytaj. | [Sekcja obsługiwanych operatorów poniżej](#carriers-that-support-cross-platform-esim-transfer) |
| **5. Wykonaj przenoszenie** | „Czas przenieść numer." | Postępuj zgodnie z konkretnymi krokami dla swojego scenariusza. | [Metoda A](#esim-transfer-from-android-to-iphone) lub [Metoda B](#esim-transfer-from-iphone-to-android) |
| **6. Konfiguracja po przenoszeniu** | „Mój numer jest na nowym telefonie – co teraz?" | Ponownie aktywuj WhatsApp, iMessage, aplikacje 2FA i przetestuj SMS. | [Sekcja Po przenoszeniu eSIM poniżej](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. Rozwiąż problemy, jeśli się nie powiodło** | „Nie zadziałało – co teraz?" | Sprawdź błąd, usuń stary profil, spróbuj ponownie lub użyj awaryjnego kodu QR. | [Tabela rozwiązywania problemów poniżej](#why-did-my-esim-transfer-fail) |


## Czego potrzebujesz przed rozpoczęciem przenoszenia eSIM

**Dla obu kierunków:**
- Oba urządzenia muszą być **odblokowane** (brak **blokady operatora**). Aby sprawdzić na iPhone: `Ustawienia > Ogólne > Informacje` → `Blokada operatora` musi mówić „Brak ograniczeń SIM". **To jest przyczyna nr 1 niepowodzeń przenoszenia** – jeśli Twój telefon jest zablokowany, nie możesz przenieść eSIM do sieci innego operatora.
- Oba urządzenia mają **włączony Bluetooth**.
- Oba urządzenia są połączone z **Wi‑Fi** (lub przynajmniej jedno ma działające połączenie danych komórkowych).
- eSIM, który chcesz przenieść, jest **aktywny** na urządzeniu źródłowym (nie został już usunięty).
- Twój operator **obsługuje międzyplatformowe przenoszenie** (patrz lista poniżej). Jeśli nie, przejdź do sekcji metod awaryjnych.

Nowy w profilach i serwerach SM‑DP+? [Objaśnienie aktywacji eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) obejmuje, co faktycznie dzieje się, gdy profil przenosi się między urządzeniami.
- Twój **profil eSIM** nie jest **wygasły** – niektóre profile mają ograniczone daty ważności.

**Dla Android → iPhone:**
- iPhone musi mieć **iOS 18 lub nowszy**.
- Android musi mieć **Android 16 lub nowszy**.

**Dla iPhone → Android:**
- iPhone musi mieć **iOS 18 lub nowszy**.
- Android musi mieć **Android 16 lub nowszy**.

> 🚨 **Krytyczne ostrzeżenie – Nie usuwaj przed przenoszeniem:**
> **NIE usuwaj eSIM ze starego urządzenia przed rozpoczęciem przenoszenia.** Jeśli najpierw usuniesz źródłowy eSIM, profil zniknie z Twojego urządzenia i Twój operator może nie być w stanie przenieść go na nowe urządzenie. Będziesz musiał skontaktować się z operatorem po zupełnie nowy kod QR – co może zająć 24‑48 godzin. Zawsze inicjuj przenoszenie z nowego urządzenia najpierw lub pozostaw stary eSIM aktywny, dopóki nowy nie zostanie potwierdzony jako działający.

> 🚨 Jeśli Twoje urządzenie ma starszy OS, opcja menu po prostu się nie pojawi. Zaktualizuj najpierw. Jeśli masz do czynienia z **wygasłym profilem eSIM**, skontaktuj się z operatorem po nowy kod QR przed rozpoczęciem przenoszenia.

Strona [Google Support – eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887) zawiera dodatkowe szczegóły dla użytkowników Android przygotowujących się do przeniesienia eSIM.


## Dlaczego travel eSIMy nie mogą być przenoszone?

To pytanie nr 1, które dostajemy. Oto dlaczego:

| Powód | Wyjaśnienie |
| :--- | :--- |
| **Powiązanie z EID** | Każdy profil eSIM jest kryptograficznie powiązany z **EID** (eUICC Identifier) urządzenia, na którym został aktywowany. EID Twojego telefonu jest unikalny – jak numer seryjny Twojego sprzętu eSIM. (Możesz zobaczyć swój EID, wybierając `*#06#` na większości telefonów.) |
| **Jednorazowe kody QR** | Kody QR travel eSIM są zaprojektowane do **jednorazowego użytku**. Po zeskanowaniu kod QR jest unieważniany na serwerze operatora. To funkcja bezpieczeństwa zapobiegająca oszustwom. |
| **Brak konta operatora** | Travel eSIMy są kupowane jako samodzielne produkty – nie masz „konta operatora" z ciągłą usługą. Nie ma nikogo, do kogo można się zalogować i poprosić o przeniesienie. |
| **Zaprojektowane dla wygody** | Travel eSIMy wymieniają przenośność na wygodę. Otrzymujesz natychmiastową aktywację bez weryfikacji tożsamości, ale kompromisem jest to, że profil jest zablokowany na jednym urządzeniu. |

**Konkluzja:** Jeśli używasz travel eSIM (Roami, Airalo, Holafly, Nomad, itp.), **nie marnuj czasu na próby przeniesienia go**. To nie zadziała. Po prostu kup nowy plan na nowym urządzeniu. Koszt nowego travel eSIM jest zwykle mniejszy niż czas, który spędziłbyś próbując przenieść nieprzenośny profil.

**A co z eSIMami operatorów (postpaid/prepaid)?**
eSIMy operatorów są inne. Masz konto u operatora, a on może ponownie wydać Twój eSIM na nowe urządzenie, ponieważ kontroluje profil na swoich serwerach. Dlatego eSIMy operatorów mogą być przenoszone, a travel eSIMy nie.


## Która metoda przenoszenia eSIM jest dla Ciebie odpowiednia?

| Funkcja | Przenoszenie przez aplikację operatora | Kod QR operatora | Natywne przenoszenie (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Działa międzyplatformowo?** | ✅ Tak | ✅ Tak | ❌ Nie (tylko ten sam ekosystem) |
| **Wymagany czas** | 3-5 min | 5-10 min | 1-2 min |
| **Zaangażowanie operatora** | Samoobsługa przez aplikację | Trzeba skontaktować się z operatorem | Brak |
| **Działa w podróży?** | ✅ Tak (z Wi-Fi) | ✅ Tak (z Wi-Fi) | ✅ Tak |
| **Wskaźnik sukcesu** | Wysoki (jeśli obsługiwane) | Bardzo wysoki (zawsze działa) | Bardzo wysoki |
| **Najlepsze dla** | Szybkie przenoszenie, operatorzy obsługujący aplikacje | Każdy operator, awaryjnie gdy aplikacja zawiedzie | Ulepszenia urządzeń w tym samym ekosystemie |
| **Koszt** | Zwykle bezpłatne | Może kosztować $0‑25 za ponowne wydanie QR | Bezpłatne |


## Przenoszenie eSIM z Android na iPhone

To najczęstszy scenariusz – zmiana z Samsung, Pixel lub innego Android na nowy iPhone. Najbardziej niezawodny sposób przeniesienia numeru to przez aplikację operatora.

### Krok po kroku

**Przed rozpoczęciem:**
- Zainstaluj aplikację operatora na nowym iPhonie (lub bądź gotowy zalogować się na stronie operatora).
- Znaj swój PIN konta lub dane logowania.
- **NIE usuwaj eSIM z Androida jeszcze.**

**Na iPhonie (cel):**
1. Zainstaluj i otwórz aplikację operatora (na przykład aplikację T‑Mobile, Verizon lub AT&T).
2. Zaloguj się i poszukaj opcji takiej jak „Activate eSIM", „Change device" lub „Transfer to new device".
3. Postępuj zgodnie z monitami, aby wprowadzić **EID** i **IMEI** nowego iPhone (pokazane w `Ustawienia` → `Ogólne` → `Informacje`).
4. Operator wysyła profil eSIM na nowy iPhone lub generuje kod QR do zeskanowania.
5. Na iPhonie przejdź do `Ustawienia` → `Komórka` → `Dodaj eSIM` i zeskanuj kod QR, jeśli został wygenerowany.
6. Poczekaj na „Aktywacja zakończona". Twój numer jest teraz aktywny na iPhonie.
7. **Teraz** możesz usunąć eSIM z Androida (Ustawienia > Połączenia > Menedżer SIM > dotknij eSIM > Usuń).

**Wskazówka iOS 18:** Jeśli masz iOS 18, proces „Dodaj eSIM" został przeprojektowany z bardziej widocznym skanerem QR i lepszą obsługą błędów. Zobaczysz wskaźnik postępu podczas pobierania profilu.

✅ **Gotowe.** Twój numer jest teraz aktywny na iPhonie. Jeśli Twój operator nie oferuje aplikacji, skontaktuj się z nim, aby ponownie wydał eSIM jako nowy kod QR (patrz metody awaryjne poniżej).

### Co jeśli przenoszenie przez aplikację nie działa?

Użyj **awaryjnego kodu QR operatora**:

- Skontaktuj się z operatorem (czat, telefon lub strona internetowa).
- Powiedz, że zmieniasz urządzenia i poproś o **ponowne wydanie eSIM jako nowy kod QR**.
- Zeskanuj nowy kod QR na iPhonie: `Ustawienia` → `Komórka` → `Dodaj eSIM`.
- Zakończ aktywację.

Jeśli zobaczysz błąd **„unable to activate esim"** podczas tego procesu, sprawdź połączenie Wi‑Fi i spróbuj ponownie.


## Przenoszenie eSIM z iPhone na Android

Na iPhonie nie ma wbudowanej opcji „Transfer to Android". Niezawodną metodą jest poproszenie operatora o ponowne wydanie eSIM.

### Wymagania wstępne
- Twój nowy telefon Android jest **odblokowany**.
- Możesz skontaktować się z operatorem (lub zalogować się do jego aplikacji/strony).
- Twój Android ma **Android 16 lub nowszy**.
- **NIE usuwaj eSIM z iPhone jeszcze.**

### Kroki

**Skontaktuj się z operatorem (lub użyj jego aplikacji):**
1. Powiedz, że przenosisz eSIM z iPhone na telefon Android.
2. Podaj **EID** i **IMEI** nowego urządzenia Android (w `Ustawienia` → `O telefonie`).
3. Twój operator ponownie wydaje eSIM jako nowy kod QR (lub wysyła go przez aplikację).

**Na Androidzie (cel):**
1. Przejdź do `Ustawienia` → `Sieć i internet` → `SIMy` → `Dodaj eSIM` (sformułowanie różni się w zależności od marki).
2. Zeskanuj kod QR dostarczony przez operatora.
3. Postępuj zgodnie z monitami, aby pobrać i aktywować profil.
4. Poczekaj na zakończenie aktywacji.
5. **Teraz** możesz usunąć eSIM z iPhone (Ustawienia > Komórka > dotknij eSIM > Usuń plan komórkowy).

✅ Gotowe. Twój numer żyje teraz na telefonie Android.

> ⚠️ **Ważne**: Po zakończeniu przenoszenia eSIM jest **trwale usuwany** z iPhone. Nie możesz wrócić bez operatora. Upewnij się, że masz inną aktywną linię lub Wi‑Fi przed przenoszeniem.


## Przenoszenie eSIM na nowy iPhone lub Samsung

Podczas gdy międzyplatformowe przenoszenie jest tematem tego przewodnika, wielu użytkowników chce po prostu przenieść eSIM w obrębie tego samego ekosystemu. Oto jak. (Przenosisz na iPhone 16 tylko z eSIM w USA? [Przewodnik aktywacji iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) obejmuje szczegóły przenoszenia podczas konfiguracji.)

### Przenoszenie eSIM z iPhone na iPhone

Wbudowany **Quick Transfer** Apple to najłatwiejsza metoda:

1. Podczas konfiguracji nowego iPhone wybierz „Przenieś eSIM z pobliskiego iPhone", gdy zostaniesz poproszony.
2. Trzymaj oba telefony blisko z włączonym Bluetooth i Wi‑Fi.
3. Potwierdź przenoszenie na starym iPhonie.
4. Poczekaj 1‑2 minuty na zakończenie **pobierania profilu eSIM** na nowym urządzeniu.

**Jeśli Quick Transfer nie działa:** Przejdź do Ustawienia > Komórka na nowym iPhonie > Dodaj eSIM > Przenieś z pobliskiego iPhone.

**Jeśli to zawiedzie:** Użyj metody kodu QR operatora – skontaktuj się z operatorem po nowy kod QR.

### Przenoszenie eSIM z Android na Android

Metody przenoszenia Android różnią się w zależności od marki:

**Samsung:** Ustawienia > Połączenia > Menedżer SIM > Dodaj eSIM > Przenieś eSIM ze starego urządzenia (postępuj zgodnie z monitami na ekranie). Działa na Samsung Galaxy S21 i nowszych, Z Flip/Z Fold series.

**Google Pixel:** Podczas konfiguracji możesz zostać poproszony o przeniesienie eSIM. Alternatywnie użyj aplikacji operatora lub poproś o nowy kod QR.

**Ogólny Android:** Jeśli Twoja marka nie oferuje wbudowanego przenoszenia, użyj metody awaryjnej z kodem QR operatora.

### Porównanie międzyplatformowego i wewnątrzplatformowego przenoszenia eSIM

| Funkcja | Międzyplatformowe | Wewnątrzplatformowe |
|---------|----------------|----------------|
| **iOS ↔ iOS** | Nie dotyczy | ✅ Quick Transfer działa |
| **Android ↔ Android** | Nie dotyczy | ✅ Metody specyficzne dla marki |
| **iOS ↔ Android** | ✅ Omówione w tym przewodniku | ❌ Nieobsługiwane bezpośrednio |
| **Zależność od operatora** | Wyższa | Niższa (Apple/Google to obsługują) |
| **Wymagany czas** | 3-10 min | 1-2 min |
| **Wskaźnik sukcesu** | Różni się w zależności od operatora | Ogólnie wysoki |

Aby dowiedzieć się, jak zachowanie eSIM różni się między generacjami iPhone (limity przechowywania, zasady dual-SIM, warianty regionalne), zobacz nasze [centrum zgodności eSIM dla iPhone](/faq/iphone-11-esim-compatible/).


## Operatorzy obsługujący międzyplatformowe przenoszenie eSIM

Międzyplatformowe przenoszenie eSIM jest jeszcze nowe, a obsługa przez operatorów jest wprowadzana stopniowo. Nie ma kompletnej publicznej listy wszystkich obsługiwanych operatorów, a dostępność często się zmienia, więc sprawdź stronę lub aplikację swojego operatora pod kątem aktualnego statusu.

### Potwierdzeni obsługiwani operatorzy

| Operator | Region | Metoda przenoszenia | Limit przenoszenia | Koszt |
|---------|--------|-----------------|----------------|------|
| **Orange** | Francja, Europa | Aplikacja Orange → „My eSIM space" → „Transfer to new device" | 3x rocznie | Bezpłatne |
| **SFR** | Francja | Aplikacja SFR & Moi → „Manage my SIM" → „Transfer eSIM" | 5x rocznie | Bezpłatne |
| **T-Mobile** | USA | Aplikacja T-Mobile → „Manage eSIM" → „Transfer to new device" | Bez limitu | Bezpłatne |
| **Verizon** | USA | Aplikacja My Verizon → „Activate or switch device" | Bez limitu | Bezpłatne |
| **AT&T** | USA | Aplikacja AT&T → „Activate eSIM" | Różni się w zależności od planu | Bezpłatne (postpaid) |
| **EE** | UK | Aplikacja EE → „Plan" → „eSIM transfer" | 3x rocznie | Bezpłatne |
| **Deutsche Telekom** | Niemcy | Aplikacja Telekom → „eSIM transfer" | Bez limitu | Bezpłatne |
| **Swisscom** | Szwajcaria | Aplikacja Swisscom → „eSIM transfer" | 3x rocznie | Bezpłatne |
| **Bouygues** | Francja | Ponowne wydanie kodu QR (przez portal klienta) | 3x rocznie | Bezpłatne |
| **Free** | Francja | Ponowne wydanie kodu QR (przez portal klienta) | 2x rocznie | Bezpłatne |
| **Vodafone** | UK, Europa | Aplikacja Vodafone → „eSIM transfer" | Różni się w zależności od kraju | Bezpłatne (postpaid) |
| **Google Fi** | USA, globalnie | Aplikacja Google Fi → „Activate on this device" | Bez limitu | Bezpłatne |

### Travel eSIMy nie są przenośne

| Dostawca | Przenośny? | Co zrobić zamiast tego |
|----------|---------------|-------------------|
| **Roami** | ❌ Nie | Kup nowy plan na nowym urządzeniu |
| **Airalo** | ❌ Nie | Kup nowy plan na nowym urządzeniu |
| **Holafly** | ❌ Nie | Kup nowy plan na nowym urządzeniu |
| **Nomad** | ❌ Nie | Kup nowy plan na nowym urządzeniu |

**Jak sprawdzić, czy Twój operator to obsługuje?** Wypróbuj kroki z Metody A lub B. Jeśli Twój operator nie oferuje przenoszenia przez aplikację ani nowego kodu QR, użyj metod awaryjnych poniżej.


## Metody awaryjne, gdy międzyplatformowe przenoszenie eSIM nie jest obsługiwane

Jeśli Twojego operatora nie ma na liście lub widzisz **błąd przenoszenia eSIM**, użyj jednej z tych alternatyw:

### Kod QR wydany przez operatora
1. Zadzwoń lub porozmawiaj z operatorem.
2. Powiedz: „Przechodzę z Android na iPhone (lub odwrotnie). Proszę o ponowne wydanie mojego eSIM jako nowy kod QR."
3. Wyślą Ci kod QR lub link aktywacyjny e-mailem.
4. Na nowym urządzeniu przejdź do `Ustawienia` → `Komórka` → `Dodaj eSIM` → `Użyj kodu QR` i zeskanuj.
5. eSIM starego urządzenia przestanie działać po aktywacji nowego.

**Wskazówka:** Niektórzy operatorzy pobierają niewielką opłatę za ponowne wydanie eSIM ($0‑25). Zapytaj, zanim to zrobią.

### Ręczne wprowadzanie SM-DP+
Jeśli Twój operator poda Ci **kod aktywacyjny** i **adres SM‑DP+** (adres serwera, który dostarcza profil eSIM do Twojego telefonu), możesz ręcznie dodać eSIM na nowym urządzeniu:
1. `Ustawienia` → `Komórka` → `Dodaj eSIM` → `Wprowadź szczegóły ręcznie`.
2. Wklej adres SM‑DP+ i kod aktywacyjny.
3. Dotknij `Dalej`. To działa zarówno na iPhone, jak i Android.

### Kup nowy plan
Jeśli używasz travel eSIM (Roami, Airalo, Holafly), nie marnuj czasu na próby przeniesienia – to nie zadziała. Po prostu kup nowy plan na nowym urządzeniu — nasze [porównanie planów travel eSIM](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) rankinguje dostawców wartych ponownej instalacji.

> **Wskazówka dotycząca przejścia:** Awaryjny kod QR to najbardziej niezawodna metoda dla każdego operatora, niezależnie od tego, czy obsługuje przenoszenie przez aplikację. Może wymagać telefonu, ale zawsze działa.


## Przenoszenie eSIM czy nowa aktywacja?

Czasami kupno nowego eSIM jest szybsze niż przenoszenie. Oto kiedy wybrać które:

| Czynnik | Przenoszenie | Nowa aktywacja | Co jest lepsze? |
|--------|----------|----------------|------------------|
| **Zachowujesz ten sam numer telefonu** | ✅ Zachowaj numer | ❌ Zdobądź nowy numer | Przenoszenie wygrywa |
| **Masz 2FA powiązane z numerem** | ✅ Zachowaj dostęp | ❌ Ryzyko utraty dostępu | Przenoszenie wygrywa |
| **Twój operator pobiera opłatę za przenoszenie** | Może kosztować $0‑25 | $0 (już kupujesz nowy) | Zależy od opłaty |
| **Travel eSIM** | ❌ Niemożliwe | ✅ Łatwe | Nowa aktywacja wygrywa |
| **Spieszysz się (poniżej 5 minut)** | ⚠️ Może zająć 5‑10 min | ✅ 2 min skanowania QR | Nowa aktywacja wygrywa |
| **Chcesz zachować istniejący plan/dane** | ✅ Zachowaj niewykorzystane dane | ❌ Tracisz niewykorzystane dane | Przenoszenie wygrywa |

**Zalecenie:** Jeśli zachowujesz ten sam plan operatora i chcesz zachować numer telefonu, przenieś. Jeśli używasz travel eSIM lub spieszysz się, po prostu kup nowy plan na nowym urządzeniu.


## Dlaczego moje przenoszenie eSIM się nie powiodło?

| Błąd / objaw | Najbardziej prawdopodobna przyczyna | Poprawka |
|----------------|-------------------|-----|
| „Transfer not available – carrier not supported" | Twój operator nie obsługuje międzyplatformowego przenoszenia. | Użyj metod awaryjnych powyżej. |
| Kod QR skanuje się, ale potem mówi „session expired" | Zbyt długo zwlekałeś po wygenerowaniu kodu QR (wygasł). | Powtórz proces i zeskanuj natychmiast. |
| Android mówi „Pairing failed" | Uprawnienia Bluetooth lub sieci lokalnej zablokowane. | Na iPhonie: `Ustawienia > Prywatność i bezpieczeństwo > Sieć lokalna` – upewnij się, że `Ustawienia` jest włączone. Na Androidzie: wyłącz „Wi‑Fi security scan" (zwykle w zaawansowanych ustawieniach Wi‑Fi). |
| Przenoszenie zaczyna się, ale zatrzymuje na 50% | Słaby sygnał Wi‑Fi lub komórkowy. | Przenieś oba telefony bliżej routera. Wyłącz VPN na obu urządzeniach. |
| **„eSIM already bound to another device"** | Profil nie został prawidłowo zwolniony ze starego urządzenia. | Na starym urządzeniu przejdź do `Ustawienia > Komórka` i ręcznie `Usuń eSIM` (jeśli nadal widoczny). Następnie poczekaj 5 minut i spróbuj ponownie. Jeśli nadal zawodzi, skontaktuj się z operatorem po zwolnienie profilu. |
| iPhone pyta o **kod potwierdzenia** po zeskanowaniu | Profil eSIM ma obowiązkowy **kod potwierdzenia eSIM** (rzadko). | Poszukaj kodu w e-mailu operatora (często 4‑8 cyfr). Jeśli nie znaleziono, zapytaj operatora. |
| Dwukrotne kliknięcie przycisku bocznego nic nie robi (iPhone → Android) | Uwierzytelnianie biometryczne nie skonfigurowane lub wyłączone. | Skonfiguruj Face ID / Touch ID lub tymczasowo wyłącz „Require Attention" dla Face ID. |
| **eSIM brak usługi** po przenoszeniu | Ustawienia APN nie skonfigurowane. | Skonfiguruj APN ręcznie (patrz tabela poniżej). |
| **Profil eSIM wygasł** | Profil ma ograniczoną datę ważności. | Skontaktuj się z operatorem po nowy kod QR. |
| **„No Add eSIM option" na iPhonie** | iPhone jest zablokowany na operatora lub ma starszy iOS. | Sprawdź blokadę operatora w Ustawienia > Ogólne > Informacje. Zaktualizuj do iOS 18. |
| **„SIM not supported" na nowym urządzeniu** | Nowe urządzenie jest zablokowane na innego operatora. | Sprawdź Blokadę operatora – musi mówić „Brak ograniczeń SIM." |
| **Limit przenoszenia przekroczony** | Przeniosłeś ten eSIM zbyt wiele razy (niektórzy operatorzy ograniczają do 3‑5 rocznie). | Skontaktuj się z pomocą operatora, aby zresetować limit lub uzyskać nowy eSIM. |
| **„eSIM transfer failed" na Samsung** | Samsung Smart Switch może nie obsługiwać konkretnego profilu operatora. | Użyj awaryjnego kodu QR operatora zamiast tego. |

### Ręczna konfiguracja APN

Jeśli po **przenoszeniu eSIM** doświadczasz **eSIM brak usługi**, skonfiguruj APN ręcznie:

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
Zbierz to przed dzwonieniem do pomocy technicznej:
- IMEI i EID urządzenia źródłowego
- IMEI i EID urządzenia docelowego
- Dokładny komunikat błędu (zrób zrzut ekranu)
- Numer konta lub numer telefonu


## Co dzieje się ze starym eSIM po przenoszeniu?

**Jest natychmiast dezaktywowany.**

Stary profil eSIM może pozostać widoczny na starym urządzeniu przez krótki czas. Możesz go ręcznie usunąć:
`Ustawienia > Komórka > dotknij starego eSIM > Usuń eSIM`.

> 💰 **Rozliczenia**: Twój operator będzie nadal pobierał opłaty za plan. Przenoszenie nie anuluje planu – po prostu przenosi SIM. Aby anulować, musisz skontaktować się z operatorem osobno.

Jeśli martwisz się o błędy **eSIM bound to another device**, zawsze usuwaj stary profil z urządzenia źródłowego po pomyślnym zakończeniu przenoszenia.

### Oś czasu przenoszenia vs usuwania

| Działanie | Co się dzieje | Kiedy to zrobić |
| :--- | :--- | :--- |
| **Przenoszenie zainicjowane** | Operator wysyła profil na nowe urządzenie | Przed usunięciem starego eSIM |
| **Nowy eSIM aktywowany** | Nowe urządzenie łączy się z siecią | Po zakończeniu aktywacji |
| **Stary eSIM dezaktywowany** | Operator dezaktywuje stary profil | Automatycznie – może zająć 1‑5 minut |
| **Usuń stary eSIM** | Usuwa nieaktywny profil ze starego urządzenia | Po potwierdzeniu, że nowe urządzenie działa |


## Przenoszenie WhatsApp, iMessage i 2FA po przenoszeniu eSIM

Po pomyślnym przeniesieniu eSIM musisz skonfigurować aplikacje do wiadomości i usługi uwierzytelniania na nowym urządzeniu.

### WhatsApp

WhatsApp używa Twojego numeru telefonu do identyfikacji konta. Po **przenoszeniu eSIM**:

1. Otwórz WhatsApp na nowym urządzeniu.
2. Wprowadź swój numer telefonu (ten, który przeniosłeś).
3. Otrzymasz kod weryfikacyjny przez SMS lub automatyczne połączenie na swój numer.
4. Wprowadź kod – Twoje czaty pojawią się ponownie, jeśli wcześniej zrobiłeś kopię zapasową.

**Wskazówka:** Zrób kopię zapasową czatów przed rozpoczęciem przenoszenia. Na iPhonie: WhatsApp > Ustawienia > Czaty > Kopia zapasowa czatów. Na Androidzie: WhatsApp > Ustawienia > Czaty > Kopia zapasowa.

**Typowy problem z WhatsApp:** Jeśli nie otrzymasz kodu weryfikacyjnego SMS, wypróbuj opcję „Zadzwoń do mnie" – WhatsApp zadzwoni na Twój numer i odczyta kod. Jeśli to zawiedzie, poczekaj 5 minut i spróbuj ponownie (sieć operatora może jeszcze się stabilizować).

### iMessage i FaceTime

1. Przejdź do `Ustawienia` → `Wiadomości` i włącz `iMessage`.
2. Przejdź do `Ustawienia` → `FaceTime` i włącz `FaceTime`.
3. Poczekaj 1‑2 minuty na aktywację. Jeśli mówi „Oczekiwanie na aktywację", wyłącz i włącz ponownie.
4. Sprawdź, czy Twój numer jest wybrany: Ustawienia > Wiadomości > Wyślij i odbierz → wybierz swój numer eSIM.

### Uwierzytelnianie dwuskładnikowe i weryfikacja SMS

Ponieważ Twój numer telefonu się nie zmienił, kody 2FA oparte na SMS będą działać normalnie. Jednak aplikacje uwierzytelniające (Google Authenticator, Microsoft Authenticator, Authy) mogą wymagać ponownej konfiguracji:

- **Authy:** Twoje tokeny są szyfrowane i kopiowane do chmury – po prostu zaloguj się na nowym urządzeniu.
- **Google Authenticator:** Będziesz musiał przenieść swoje konta indywidualnie lub użyć funkcji „Transfer accounts".
- **Microsoft Authenticator:** Użyj funkcji kopii zapasowej, aby przywrócić na nowym urządzeniu.
- **SMS 2FA:** Przetestuj, prosząc o kod weryfikacyjny od banku lub dostawcy e-mail, aby potwierdzić, że dostarczanie SMS działa.

### Aplikacje bankowe i usługi finansowe

Większość banków wykryje zmianę urządzenia i będzie wymagać ponownego uwierzytelnienia. Miej przygotowane dane logowania i wszelkie fizyczne urządzenia tokenowe.

Aby uzyskać więcej pomocy dotyczącej migracji aplikacji po **przenoszeniu eSIM**, zobacz nasz [przewodnik po konfiguracji eSIM](/faq/how-to-activate-an-esim/).


## Najlepsze praktyki, aby uniknąć problemów z przenoszeniem eSIM

✅ **Przed przenoszeniem:**
- Sprawdź obsługę operatora (wypróbuj menu – jeśli tam jest, jest obsługiwane).
- Zaktualizuj oba telefony do najnowszego OS (iOS 18 / Android 16).
- Naładuj oba telefony powyżej 30%.
- Tymczasowo wyłącz VPN i blokery reklam.
- Zweryfikuj, że Twój **profil eSIM** nie jest **wygasły**.
- Zrób kopię zapasową WhatsApp i innych aplikacji do wiadomości.
- **NIE usuwaj eSIM ze starego urządzenia jeszcze.**

✅ **Podczas przenoszenia:**
- Trzymaj telefony w odległości do 10 cm od siebie.
- Nie przełączaj aplikacji ani nie blokuj ekranu.
- Nie wyłączaj Bluetooth ani Wi‑Fi.
- Poczekaj na komunikat potwierdzający – nie zakładaj, że gotowe.

✅ **Po przenoszeniu:**
- Przetestuj połączenia i dane na nowym urządzeniu.
- Usuń stary eSIM z urządzenia źródłowego, aby uniknąć zamieszania.
- Pozostaw Wi‑Fi starego urządzenia włączone przez co najmniej godzinę – niektórzy operatorzy potrzebują ostatniego uścisku dłoni.
- Ponownie aktywuj WhatsApp, iMessage i aplikacje 2FA.
- Przetestuj kody weryfikacyjne SMS od swojego banku.
- Ustaw przypomnienie, aby anulować stary plan, jeśli całkowicie zmieniasz operatora.


## Podróżowanie i przenoszenie eSIM

Jeśli podróżujesz za granicę i musisz przenieść eSIM, oto kilka ważnych punktów. A jeśli przenoszenia nie można uratować w połowie podróży, najszybszym wyjściem jest zwykle kupno lokalnego planu — zobacz [przewodnik po planach eSIM USA](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) lub [przewodnik po zakupie UK eSIM](/faq/how-to-buy-a-uk-esim/) w zależności od miejsca docelowego:

### Przenoszenie eSIM w podróży
- Międzyplatformowe przenoszenie działa **na całym świecie**, o ile Twój operator je obsługuje.
- Upewnij się, że masz stabilne połączenie Wi‑Fi (hotel, kawiarnia) przed rozpoczęciem.
- Jeśli przenoszenie zawiedzie, awaryjny kod QR operatora to Twoja najlepsza opcja.
- Sprawdź **ustawienia APN eSIM** po przenoszeniu – niektórzy operatorzy wymagają ręcznej konfiguracji.

### Francuscy operatorzy i podróże
- **Orange** i **SFR** pozwalają na międzyplatformowe przenoszenie, gdziekolwiek jesteś.
- **Free** i **Bouygues** wymagają ponownego wydania kodu QR – zrób to przed wyjazdem.
- Dla **travel eSIMów** pamiętaj, że generalnie **nie są przenośne** – kup nowy plan na nowym urządzeniu.

### Jak kontaktować się z operatorami za granicą

| Operator | Metoda kontaktu z pomocą | Uwagi |
|---------|------------------------|-------|
| **Orange** | Czat w aplikacji Orange, wsparcie WhatsApp lub telefon | 24/7 w większości regionów |
| **SFR** | Czat w aplikacji SFR & Moi, telefon | Ograniczone godziny |
| **T-Mobile** | Czat w aplikacji T‑Mobile, iMessage, telefon | Wsparcie 24/7 w USA |
| **Verizon** | Czat w aplikacji My Verizon, telefon | Wsparcie 24/7 |
| **AT&T** | Czat w aplikacji AT&T, telefon | Ograniczone godziny międzynarodowo |
| **EE** | Czat w aplikacji EE, telefon | Wsparcie 24/7 w UK |

**Wskazówka:** Pobierz aplikację swojego operatora i zapisz dane kontaktowe pomocy przed podróżą. Niektórzy operatorzy wymagają weryfikacji SMS do logowania – jeśli jesteś w trakcie przenoszenia, to może nie działać.

### Co zrobić, jeśli przenoszenie zawiedzie w połowie podróży

1. Połącz się z najbliższym darmowym Wi‑Fi (lotniska, hotele, kawiarnie).
2. Skontaktuj się z pomocą operatora przez e-mail lub aplikację do wiadomości.
3. Poproś o ponowne wydanie eSIM jako kod QR.
4. Zeskanuj kod QR na nowym urządzeniu.

### Wskazówki dla obieżyświatów
- Zawsze przechowuj kopię zapasową kodów QR eSIM.
- Jeśli zmieniasz telefony w połowie podróży, preferuj natywne przenoszenie zamiast kodu QR, gdy to możliwe.
- Dla wielu miejsc docelowych rozważ globalny plan eSIM obejmujący wiele krajów.
- Zapisz dane kontaktowe pomocy operatora przed podróżą.

Aby uzyskać więcej informacji o używaniu eSIM w podróży, zobacz nasz [przewodnik Travel eSIM 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Często zadawane pytania

**P1: Czy mogę przenieść eSIM tylko do danych (jak travel eSIM)?**
Nie. Większość travel eSIMów (Roami, Airalo, Holafly, Nomad, itp.) nie obsługuje międzyplatformowego przenoszenia. Są zaprojektowane do jednorazowej instalacji na urządzenie. Będziesz musiał kupić nowy plan na nowym telefonie. Zobacz „Dlaczego travel eSIMy nie mogą być przenoszone?" powyżej, aby uzyskać techniczne wyjaśnienie.

**P2: Czy przenoszenie działa między iPhone 11 a Samsung S24?**
Tak – o ile oba spełniają wymagania OS. iPhone 11 obsługuje iOS 18 (działa do iOS 18). Samsung S24 obsługuje Android 16. Generacja sprzętu nie ma znaczenia; liczy się tylko wersja OS.

**P3: Aplikacja mojego operatora nie oferuje przenoszenia eSIM. O co chodzi?**
Nie każdy operator obsługuje przenoszenie eSIM przez aplikację. Jeśli Twój operator tego nie oferuje, użyj awaryjnego kodu QR operatora: skontaktuj się z operatorem i poproś o ponowne wydanie eSIM jako nowy kod QR. Niektórzy operatorzy pobierają za to niewielką opłatę ($0‑25).

**P4: Czy moje kody WhatsApp / iMessage / 2FA będą nadal działać po przenoszeniu?**
WhatsApp używa Twojego numeru telefonu – wykryje zmianę SIM i może poprosić o ponowną weryfikację (zwykle automatyczną). iMessage na iPhonie używa numeru eSIM i powinien ponownie się aktywować w ciągu minuty. Dla 2FA usługi, które wysyłają SMS na Twój numer, będą działać normalnie – numer się nie zmienił. Zobacz Sekcję 10, aby poznać szczegółowe kroki migracji.

**P5: Czy mogę przenosić ten sam eSIM tam i z powrotem wiele razy?**
Tak, ale każde przenoszenie wymaga tego samego procesu. Niektórzy operatorzy ograniczają, ile razy eSIM może być przenoszony rocznie (np. 3‑5 razy). Jeśli osiągniesz limit, skontaktuj się z operatorem po pomoc.

**P6: A co z konfiguracjami dual-SIM eSIM + fizyczna SIM?**
Przenoszenie przenosi tylko eSIM. Fizyczna SIM pozostaje w urządzeniu źródłowym. Jeśli chcesz przenieść oba, będziesz musiał przenieść eSIM (używając tego przewodnika) i fizycznie przenieść kartę nano‑SIM na nowe urządzenie. Aby zoptymalizować doświadczenia dual-SIM po przenoszeniu, sprawdź nasz **[Podwójny eSIM nie działa? 12 poprawek dla iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**P7: Co jeśli podczas przenoszenia otrzymam błąd „expired eSIM profile"?**
Skontaktuj się z operatorem po nowy kod QR – ponowne wydanie jest zwykle bezpłatne. Upewnij się, że aktywujesz nowy kod QR natychmiast (w ciągu 30 minut), aby uniknąć ponownego wygaśnięcia.

**P8: Dlaczego blokada operatora uniemożliwia mi przenoszenie?**
Jeśli Twój telefon jest objęty **blokadą operatora**, możesz przenieść eSIM tylko na urządzenie tego samego operatora. Skontaktuj się z operatorem, aby odblokować urządzenie przed przenoszeniem. Na iPhonie: Ustawienia > Ogólne > Informacje > Blokada operatora musi mówić „Brak ograniczeń SIM."

**P9: Czy mogę przenieść eSIM Orange na urządzenie nie-Orange?**
Tak, jeśli Twoje urządzenie jest odblokowane i Twój plan Orange na to pozwala. **Orange eSIM transfer** jest obsługiwany przez aplikację Orange lub natywne przenoszenie. Orange pozwala na do 3 przeniesień rocznie.

**P10: Czy przenoszenie działa z eSIM Free?**
Nie – Free nie obsługuje międzyplatformowego przenoszenia. Użyj metody awaryjnej z kodem QR z portalu klienta Free. Free pozwala na do 2 przeniesień rocznie.

**P11: Czym jest kod potwierdzenia eSIM i gdzie go znaleźć?**
Niektóre profile eSIM mają obowiązkowy **kod potwierdzenia eSIM** – zazwyczaj 4‑8 cyfr. Poszukaj go w e-mailu operatora lub instrukcjach aktywacji. Jeśli nie znaleziono, zapytaj operatora.

**P12: Co oznacza „eSIM not transferring to new phone"?**
To zwykle oznacza, że Twój operator nie obsługuje przenoszenia, kod QR wygasł, stary eSIM jest nadal aktywny lub nowe urządzenie jest zablokowane na operatora. Usuń najpierw stary eSIM (jeśli nadal widoczny), następnie spróbuj ponownie. Zobacz Sekcję 7, aby poznać pełną tabelę rozwiązywania problemów.

**P13: Jak naprawić „eSIM activation failed" po przenoszeniu?**
Sprawdź połączenie Wi‑Fi, uruchom ponownie oba urządzenia i spróbuj ponownie. Jeśli nadal zawodzi, użyj metody ręcznego wprowadzania z adresem SM‑DP+ z e-maila operatora.

**P14: Czy przenoszenie eSIM anuluje mój plan?**
Nie – przenoszenie eSIM po prostu przenosi profil SIM na nowe urządzenie. Twój plan (i rozliczenia) trwa jak wcześniej. Aby anulować plan, musisz skontaktować się z operatorem osobno.

**P15: Czy mogę przenieść eSIM, jeśli już go usunąłem ze starego telefonu?**
Tak, ale jest to bardziej skomplikowane. Jeśli usunąłeś eSIM przed rozpoczęciem przenoszenia, skontaktuj się z operatorem i poproś o ponowne wydanie eSIM jako nowy kod QR. Mogą to zrobić, ponieważ Twój profil nadal istnieje na ich serwerach.

**P16: Ile kosztuje ponowne wydanie kodu QR eSIM?**
Większość operatorów ponownie wydaje eSIMy bezpłatnie (zwłaszcza plany postpaid). Niektórzy operatorzy prepaid lub MVNO mogą pobierać niewielką opłatę ($5‑25). Zapytaj, zanim poprosisz o ponowne wydanie.

**P17: Czy mogę przenieść eSIM Vodafone na urządzenie nie-Vodafone?**
Tak, o ile Twoje urządzenie jest odblokowane i Twój plan Vodafone pozwala na przenoszenie eSIM. Vodafone obsługuje przenoszenie przez swoją aplikację w większości krajów. Sprawdź w aplikacji Vodafone opcję „eSIM transfer".

**P18: Co jeśli osiągnę limit przenoszenia mojego operatora?**
Niektórzy operatorzy ograniczają przenoszenia do 3‑5 rocznie. Jeśli osiągniesz limit, skontaktuj się z pomocą operatora – często mogą zresetować limit lub wydać nowy kod QR eSIM ręcznie (omijając system przenoszenia).

**P19: Czy mogę przenieść dwa eSIMy jednocześnie (podwójny eSIM)?**
Tak, ale musisz je przenosić **pojedynczo**. Każdy profil eSIM jest niezależny i musi być przeniesiony osobno tym samym procesem. Jeśli masz dwa aktywne eSIMy na starym urządzeniu, przenieś najpierw główny eSIM, a następnie dodatkowy.

**P20: Jaka jest różnica między przenoszeniem eSIM a ponownym wydaniem eSIM?**
Przenoszenie przenosi Twój istniejący profil na nowe urządzenie (zachowując numer i plan). Ponowne wydanie tworzy zupełnie nowy profil eSIM dla tego samego numeru – stary profil jest trwale dezaktywowany. Ponowne wydanie to metoda awaryjna, gdy przenoszenie nie jest obsługiwane przez Twojego operatora.

---

## Ostateczny wniosek

Możliwość przenoszenia eSIM między iPhone a Android bez interwencji operatora to **przełom 2026 roku**. Usuwa ostatni główny punkt tarcia przy zmianie ekosystemów. O ile Twój operator jest na liście obsługiwanych, a oba telefony są zaktualizowane, możesz przenieść swój numer w mniej niż minutę.

**Pamiętaj**:
- Jeśli Twój operator nie jest obsługiwany, awaryjny kod QR nadal działa – wymaga tylko telefonu.
- Dla travel eSIMów traktuj je jako jednorazowe; kupuj świeże na każdym urządzeniu.
- **Nigdy nie usuwaj starego eSIM przed rozpoczęciem przenoszenia** – to najczęstszy błąd.
- Sprawdź blokadę operatora przed rozpoczęciem – „Brak ograniczeń SIM" jest wymagane.
- Niektórzy operatorzy ograniczają przenoszenia rocznie – sprawdź przed rozpoczęciem.

Jeśli napotkasz uporczywe komunikaty **eSIM transfer error**, nasz **[Szczegółowy przewodnik rozwiązywania problemów z eSIM (16 prawdziwych przypadków)](/faq/esim-deep-troubleshooting-guide-2026/)** obejmuje zaawansowane rozwiązania.

👉 **Przenosisz na plan travel?** Zobacz [eSIM dla USA](/united-states-esim/) lub [eSIM dla Europy](/europe-esim/) po zakończeniu przenoszenia.

👉 **Nie jesteś pewien, czy Twój nowy telefon obsługuje eSIM?** Sprawdź naszą **[kompletną listę zgodności](/compatibility/)** przed rozpoczęciem.

👉 **Testujesz travel eSIM na nowym urządzeniu?** Zgarnij **[darmowy trial Roami eSIM](/free-esim/)**, aby potwierdzić, że wszystko działa.

---

*Informacje na podstawie oficjalnej dokumentacji Apple i Android, standardów GSMA i wytycznych operatorów na wrzesień 2026. Funkcje i obsługa operatorów mogą się zmieniać.*
## Źródła

- [GSMA — specyfikacja eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)