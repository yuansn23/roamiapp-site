---
title: "Przewodnik rozwiązywania problemów z eSIM 2026"
h1_title: "Kompletny przewodnik rozwiązywania problemów z eSIM w 2026 – 18 rzeczywistych poprawek"
description: "Napraw problemy z aktywacją eSIM, błędami transferu, brakiem usługi i problemami ze skanowaniem QR na iPhone i Android dzięki temu przewodnikowi rozwiązywania problemów na 2026 rok."
image: "/img/esim/esim-troubleshooting-guide.jpg"
keywords: ["rozwiązywanie problemów z eSIM", "aktywacja eSIM nie powiodła się", "eSIM brak usługi", "błąd transferu eSIM", "transfer eSIM między platformami", "iOS 18 eSIM", "ustawienia APN eSIM", "kod potwierdzający eSIM", "blokada operatora eSIM", "eSIM zablokowany na aktywacji"]
date: 2026-09-08T10:00:00Z
lastmod: 2026-09-08T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Rozwiązywanie problemów", "Konfiguracja podróży"]
toc: true

# Strona i SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Tłumaczenia tekstu interfejsu
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

# Panel boczny: Popularne eSIM
sidebar_popular:
  title: "Popularne eSIM"
  item_suffix: "eSIM"
  items:
    - name: "eSIM USA"
      flag: "/img/flags/us.svg"
      price: "1,99 $"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM Niemcy"
      flag: "/img/flags/de.svg"
      price: "1,99 $"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Europa"
      flag: "/img/flags/eu.svg"
      price: "1,99 $"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Turcja"
      flag: "/img/flags/tr.svg"
      price: "1,99 $"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Japonia"
      flag: "/img/flags/jp.svg"
      price: "1,99 $"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM Chiny"
      flag: "/img/flags/cn.svg"
      price: "1,99 $"
      url: "/china-esim/"
      badge: "5G"

# Panel boczny: Darmowe oferty eSIM
sidebar_free:
  title: "Odbierz darmowy eSIM"
  icon: "🎁"
  item_suffix: "Darmowy eSIM"
  item_subtitle: "Darmowy eSIM"
  items:
    - name: "eSIM Wielka Brytania"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Niemcy"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Tajlandia"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Panel boczny: Popularne pytania
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

> **Uwaga redakcji:** Roami prowadzi centrum pomocy stojące za tym przewodnikiem. Gdy podróżny napotka konkretny błąd na ekranie — „Aktywacja nie powiodła się”, „Brak usługi”, „Nie można dodać planu komórkowego”, błąd przywracania 4013/4014 — to ta strona, którą nasz własny zespół otwiera, aby go odszyfrować. Każdy wpis poniżej mapuje jeden dokładny komunikat błędu na jego rzeczywistą przyczynę i konkretną poprawkę, przetestowaną na iOS 18 i Androidzie 14/15 od sierpnia 2026.

> **Zła strona?** Jeśli Twoje pytanie brzmi „czy mój telefon w ogóle obsługuje eSIM” — model chiński/hongkoński, blokada operatora, brak EID — to pytanie sprzętowe, a nie błąd. Zamiast tego przejdź do naszego [przewodnika po błędach kompatybilności eSIM](/faq/esim-activation-errors-troubleshooting-guide/). Ta strona zakłada, że Twój telefon może korzystać z eSIM, a problemem jest konkretny komunikat błędu.

## Szybki schemat diagnostyczny – znajdź swój błąd w 10 sekund

Użyj tej mapy decyzyjnej, aby przejść bezpośrednio do poprawki dla dokładnego komunikatu na ekranie.

| Co widzisz / doświadczasz | Co jest prawdopodobnie uszkodzone | Pilność | Skocz do poprawki |
|---------------------------|----------------------------------|---------|-------------------|
| **Kod QR nie skanuje się / mówi nieprawidłowy** | Wygasły lub uszkodzony kod QR | Niska | [Sekcja 3](#3-kod-qr-esim-nieprawidłowy-lub-wygasły) |
| **"Nie można aktywować" lub "Aktywacja nie powiodła się"** | Przekroczenie limitu czasu sieci lub błąd serwera | Średnia | [Sekcja 1](#1-aktywacja-esim-nie-powiodła-sie-lub-nie-mozna-aktywowac) |
| **"Brak usługi" po instalacji** | Wyłączony Data Roaming lub brak APN | Wysoka | [Sekcja 2](#2-esim-brak-usługi-po-instalacji) |
| **Pełne paski sygnału, ale brak internetu** | Nieprawidłowo skonfigurowane APN | Wysoka | [Sekcja 8](#8-esim-brak-polaczenia-danych-po-aktywacji-apn) |
| **"Nie można dodać planu komórkowego"** | Zbyt wiele zapisanych eSIM lub ograniczenie sprzętowe | Średnia | [Sekcja 5](#5-esim-nie-mozna-dodac-planu-komorkowego) |
| **"eSIM już w użyciu"** | Profil nadal powiązany ze starym urządzeniem | Wysoka | [Sekcja 4](#4-esim-juz-w-uzyciu-lub-powiazany-z-innym-urzadzeniem) |
| **Wyskakujące okno kodu potwierdzającego** | Profil wymaga kodu PIN | Niska | [Sekcja 6](#6-wymagany-kod-potwierdzajacy-esim) |
| **"SIM nieobsługiwana"** | Telefon jest zablokowany przez operatora | Wysoka | [Sekcja 7](#7-esim-sim-nieobslugiwana-urzadzenie-zablokowane-przez-operatora) |
| **Zablokowany na "Aktywacja" >10 minut** | Pobieranie utknęło | Średnia | [Sekcja 9](#9-esim-zablokowany-na-aktywacji) |
| **Dual SIM: jedna linia nie ma sygnału** | Konflikt routingu | Średnia | [Sekcja 10](#10-dual-esim-jedna-linia-pokazuje-brak-usługi) |
| **Przeniesiono eSIM na nowy telefon, nie działa** | Transfer między platformami nieobsługiwany | Wysoka | [Sekcja 11](#11-transfer-esim-nie-powiodl-sie) |
| **Błąd przywracania iPhone 4013/4014** | Problem sprzętowy/układowy, nie eSIM | Wysoka | [Sekcja 12](#12-blad-przywracania-esim-iphone-4013-lub-4014) |
| **"Profil wygasł"** | Kod QR stracił ważność | Niska | [Sekcja 13](#13-profil-esim-wygasl) |
| **Roaming nie działa za granicą** | Przełącznik Data Roaming wyłączony | Wysoka | [Sekcja 14](#14-roaming-danych-esim-nie-dziala) |
| **Przypadkowo usunięto eSIM** | Błąd użytkownika | Wysoka | [Sekcja 15](#15-esim-usuniety-przez-przypadek) |
| **MDM blokuje zmiany eSIM** | Polityka urządzenia służbowego | Średnia | [Sekcja 16](#16-mdm-lub-ograniczenia-firmowe-blokuja-esim) |
| **eSIM zniknął po restarcie** | Błąd oprogramowania iOS/Android | Wysoka | [Sekcja 17](#17-esim-zginal-po-restarcie) |
| **Wi-Fi Calling działa, ale dane eSIM nie** | Konflikt routingu między Wi-Fi a komórką | Średnia | [Sekcja 18](#18-wi-fi-calling-dziala-ale-dane-esim-nie) |
| **Fizyczna SIM włożona, eSIM nie działa** | Konflikt tacki SIM | Wysoka | [Sekcja 19](#19-konflikt-esim-vs-fizyczna-sim) |
| **Apple Watch eSIM nie łączy się** | Problem z parowaniem lub operatorem | Średnia | [Sekcja 20](#20-apple-watch-esim-nie-dziala) |

## Szybkie podsumowanie – tabela referencyjna na pierwszy rzut oka

| Objaw | Najbardziej prawdopodobna przyczyna | Poprawka |
|-------|-----------------------------------|----------|
| "Nie można aktywować" / "Aktywacja nie powiodła się" | Niestabilne Wi-Fi lub błąd serwera operatora | Stabilna sieć + ponów, a następnie reinstaluj (Sekcja 1) |
| "Brak usługi" po instalacji | Wyłączony Data Roaming / brak APN | Włącz roaming, sprawdź APN (Sekcja 2) |
| Kod QR "Nieprawidłowy" / "Wygasły" | Kod QR wygasł lub już użyty | Poproś o nowy kod QR (Sekcja 3) |
| "eSIM już w użyciu" | Profil nie został zwolniony ze starego urządzenia | Usuń ze starego urządzenia lub zwolnij u operatora (Sekcja 4) |
| "Nie można dodać planu komórkowego" | Zbyt wiele zapisanych eSIM | Usuń nieużywane eSIM (Sekcja 5) |
| Wymagany kod potwierdzający | Profil ma obowiązkowy kod | Znajdź 4–8-cyfrowy kod w e-mailu operatora (Sekcja 6) |
| "SIM nieobsługiwana" | Urządzenie zablokowane przez operatora | Odblokuj urządzenie lub skontaktuj się z operatorem (Sekcja 7) |
| Brak danych po aktywacji | APN nie skonfigurowane | Wprowadź APN ręcznie (Sekcja 8) |
| Zablokowany na "Aktywacja" | Pobieranie profilu utknęło | Przełącz tryb samolotowy, reinstaluj (Sekcja 9) |
| Jedna linia dual-SIM "Brak usługi" | Konflikt routingu połączeń/danych | Sprawdź routing linii i przełączniki (Sekcja 10) |
| Transfer eSIM nie powiódł się | Operator nie obsługuje transferu | Użyj awaryjnego kodu QR operatora (Sekcja 11) |
| Błąd przywracania 4013 / 4014 | Problem sprzętowy/układowy podczas przywracania | Inny kabel, zaktualizuj komputer (Sekcja 12) |
| "Profil wygasł" | Kod QR ograniczony czasowo | Poproś o nowy kod QR (Sekcja 13) |
| Roaming danych nie działa | Roaming wyłączony dla linii eSIM | Włącz Data Roaming (Sekcja 14) |
| Usunięto eSIM przez przypadek | Profil usunięty lokalnie | Skontaktuj się z operatorem / kup nowy plan (Sekcja 15) |
| MDM blokuje zmiany eSIM | Ograniczenie firmowe | Skontaktuj się z administratorem IT (Sekcja 16) |
| eSIM zniknął po restarcie | Błąd oprogramowania iOS/Android | Sprawdź ustawienia, dodaj ponownie profil (Sekcja 17) |
| Wi-Fi Calling działa, ale dane nie | Konflikt routingu | Tymczasowo wyłącz Wi-Fi Calling (Sekcja 18) |
| Włożono fizyczną SIM, eSIM przestaje działać | Konflikt tacki/czytnika | Wyjmij fizyczną SIM, zrestartuj (Sekcja 19) |
| Apple Watch eSIM nie łączy się | Problem z parowaniem lub operatorem | Ponownie sparuj zegarek, skontaktuj się z operatorem (Sekcja 20) |

## 1. Aktywacja eSIM nie powiodła się lub "Nie można aktywować"

**Przyczyna:** Prawie zawsze niestabilne połączenie Wi-Fi lub tymczasowy błąd serwera operatora (SM-DP+), a nie problem z telefonem. SM-DP+ (Subscription Manager - Data Preparation Plus) to bezpieczny serwer, który dostarcza profil eSIM na Twoje urządzenie — jeśli jest nieosiągalny, aktywacja kończy się niepowodzeniem.

**Poprawka:**
1. Przejdź do stabilnego połączenia Wi-Fi lub danych komórkowych.
2. Włącz i wyłącz tryb samolotowy, aby odświeżyć pasmo podstawowe.
3. Jeśli błąd się powtarza, usuń oczekujący eSIM w `Ustawienia > Komórkowe`, zrestartuj i zeskanuj ponownie kod QR.

**Specyficzne dla iOS 18:** Na iOS 18 komunikat może brzmieć "Nie można dokończyć aktywacji" z przyciskiem Ponów. Najpierw dotknij Ponów — ulepszony przepływ aktywacji w iOS 18 często rozwiązuje problem bez pełnej reinstalacji.

---

## 2. eSIM "Brak usługi" po instalacji

**Przyczyna:** Profil został zainstalowany, ale telefon nie zarejestrował się w sieci lokalnej — zwykle ponieważ Data Roaming jest wyłączony lub brakuje APN.

**Poprawka:**
1. Włącz **Data Roaming** dla linii eSIM.
2. W `Ustawienia > Komórkowe > [Twój eSIM] > Wybór sieci` wyłącz "Automatyczny", ręcznie wybierz operatora, poczekaj, aż się nie uda, a następnie wróć do "Automatyczny", aby wymusić ponowną rejestrację.
3. Jeśli nadal nie ma danych, sprawdź APN (Sekcja 8).

---

## 3. Kod QR eSIM "Nieprawidłowy" lub "Wygasły"

**Przyczyna:** Kody QR eSIM są jednorazowe i ograniczone czasowo. Kod został już użyty lub wygasł.

**Poprawka:** Skontaktuj się z dostawcą eSIM i poproś o ponowne wydanie nowego kodu QR, a następnie zeskanuj go natychmiast.

**Jeśli skanujesz z ekranu telefonu:** Zapisz obraz kodu QR w Zdjęciach, a następnie w Ustawienia > Komórkowe > Dodaj eSIM wybierz "Użyj kodu QR" i dotknij "Wybierz zdjęcie", aby wybrać zapisany obraz. To rozwiązuje problem "nie można zeskanować własnego ekranu".

---

## 4. "eSIM już w użyciu" lub "Powiązany z innym urządzeniem"

**Przyczyna:** Profil nigdy nie został zwolniony ze starego urządzenia, więc operator nadal kojarzy go z tym telefonem.

**Poprawka:**
1. Na starym urządzeniu usuń eSIM w `Ustawienia > Komórkowe`.
2. Odczekaj około pięciu minut i spróbuj ponownie na nowym urządzeniu.
3. Jeśli stare urządzenie jest zgubione lub uszkodzone, skontaktuj się z operatorem i poproś o wymuszone zwolnienie profilu z ich strony.

---

## 5. eSIM "Nie można dodać planu komórkowego"

**Przyczyna:** Telefon osiągnął limit zapisanych profili eSIM (zazwyczaj 8–10, w zależności od modelu) lub urządzenie jest modelem z Chin kontynentalnych bez sprzętu eSIM.

**Poprawka:** Usuń nieużywane eSIM w `Ustawienia > Komórkowe`, a następnie dodaj nowy. Jeśli Twoje urządzenie zostało kupione w Chinach kontynentalnych, używa dwóch fizycznych gniazd SIM i nie może dodać eSIM — aby dowiedzieć się, jak zidentyfikować model chiński lub hongkoński i potwierdzić, że Twój telefon ma sprzęt, zobacz nasz [przewodnik po błędach kompatybilności eSIM](/faq/esim-activation-errors-troubleshooting-guide/).

---

## 6. Wymagany kod potwierdzający eSIM

**Przyczyna:** Niektóre profile eSIM mają obowiązkowy kod potwierdzający, który jest wymagany przed pobraniem profilu. Jest to 4–8-cyfrowy PIN weryfikujący Twoją tożsamość.

**Poprawka:** Poszukaj 4–8-cyfrowego kodu w e-mailu, który operator wysłał z kodem QR. Jeśli nie możesz go znaleźć, skontaktuj się z operatorem.

**Typowe miejsca, w których znajdziesz kod potwierdzający:**
- Wiersz tematu e-maila aktywacyjnego
- Blisko dolnej części e-maila, w sekcji "Szczegóły aktywacji"
- W aplikacji operatora w "Moje plany" > "Szczegóły"

---

## 7. eSIM "SIM nieobsługiwana" — urządzenie zablokowane przez operatora

**Przyczyna:** Telefon jest zablokowany na innego operatora i nie może przyjąć profilu od innego dostawcy.

**Poprawka:** Sprawdź `Ustawienia > Ogólne > Informacje > Blokada operatora`. Jeśli nie ma napisu "Brak ograniczeń SIM", skontaktuj się z operatorem domowym, aby poprosić o odblokowanie. Pełny przewodnik po blokadach operatora — jak sprawdzić status, polityki odblokowywania operatorów w USA i jak odblokować urządzenie — znajdziesz w naszym [przewodniku sprzętowym i kompatybilności](/faq/esim-activation-errors-troubleshooting-guide/).

---

## 8. eSIM brak połączenia danych po aktywacji (APN)

**Przyczyna:** Nazwa punktu dostępowego (APN) nie została skonfigurowana automatycznie, więc telefon nie ma trasy do sieci danych.

**Poprawka:**
1. Przejdź do `Ustawienia > Komórkowe > Sieć danych komórkowych`.
2. Wprowadź wartość APN ze strony internetowej dostawcy eSIM (np. `globaldata` dla Airalo).
3. Większość podróżnych eSIM automatycznie konfiguruje APN, więc potwierdź poprawną wartość z dostawcą.

**Typowe wartości APN według dostawcy (jeśli autokonfiguracja zawodzi):**

| Dostawca | APN | Nazwa użytkownika | Hasło |
|----------|-----|-------------------|-------|
| Roami | internet | (puste) | (puste) |
| Airalo | globaldata | (puste) | (puste) |
| Holafly | hola | (puste) | (puste) |
| Nomad | nbdata | (puste) | (puste) |
| Ubigi | ubigi | (puste) | (puste) |
| Google Fi | h2g2 | (puste) | (puste) |
| T-Mobile (USA) | fast.t-mobile.com | (puste) | (puste) |
| AT&T (USA) | nxgen | (puste) | (puste) |
| Verizon (USA) | vzwinternet | (puste) | (puste) |
| EE (Wielka Brytania) | everywhere | (puste) | (puste) |
| O2 (Wielka Brytania) | mobile.o2.co.uk | web | web |
| Vodafone (Wielka Brytania) | internet | (puste) | (puste) |
| Three (Wielka Brytania) | three.co.uk | (puste) | (puste) |

---

## 9. eSIM zablokowany na "Aktywacja"

**Przyczyna:** Pobieranie profilu utknęło, często z powodu słabego sygnału lub przeciążonego serwera aktywacyjnego.

**Poprawka:**
1. Upewnij się, że jesteś w stabilnej sieci.
2. Włącz i wyłącz tryb samolotowy.
3. Jeśli pozostaje zablokowany dłużej niż 10 minut, usuń eSIM i zainstaluj go ponownie z kodu QR.

---

## 10. Dual eSIM: jedna linia pokazuje "Brak usługi"

**Przyczyna:** Przy dwóch aktywnych eSIM routing połączeń przychodzących i danych może powodować konflikt, pozostawiając jedną linię bez usługi. To częsty **problem sygnału dual eSIM**, który dotyka użytkowników z dwiema aktywnymi liniami.

**Poprawka:**
1. W `Ustawienia > Komórkowe` potwierdź, która linia jest ustawiona dla **Danych komórkowych**, a która dla **Domyślnej linii głosowej**.
2. Wyłącz i włącz każdą linię.
3. Aby uzyskać bardziej zaawansowaną poprawkę, zobacz nasz przewodnik **[Dual eSIM nie działa? 12 poprawek dla iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## 11. Transfer eSIM nie powiódł się

**Przyczyna:** Nie ma wbudowanego transferu eSIM między platformami, a Twój operator może nie obsługiwać transferu przez aplikację.

**Poprawka:** Poproś operatora o ponowne wydanie eSIM jako nowego kodu QR i zeskanuj go na nowym urządzeniu. Po transferze WhatsApp, iMessage i dwuetapowe kody SMS nadal działają, ponieważ Twój numer się nie zmienił. Pełne instrukcje krok po kroku znajdziesz w naszym **[przewodniku transferu eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## 12. Błąd przywracania eSIM iPhone 4013 lub 4014

**Przyczyna:** Te błędy wskazują na problem sprzętowy lub układowy podczas przywracania oprogramowania, a nie problem z eSIM. Są one często spowodowane uszkodzonym kablem USB lub nieaktualnym oprogramowaniem komputera.

**Poprawka:** Wypróbuj inny kabel i port USB, zaktualizuj system operacyjny komputera, a następnie spróbuj ponownie przywrócić. Skontaktuj się z Apple Support, jeśli błąd się utrzymuje.

---

## 13. Profil eSIM wygasł

**Przyczyna:** Kod QR eSIM lub kod aktywacyjny był ograniczony czasowo i wygasł.

**Poprawka:** Skontaktuj się z dostawcą eSIM i poproś o nowy kod QR, a następnie aktywuj go niezwłocznie.

---

## 14. Roaming danych eSIM nie działa

**Przyczyna:** Data Roaming jest wyłączony dla linii podróżnej eSIM, więc nie może połączyć się z siecią lokalną.

**Poprawka:** Przejdź do `Ustawienia > Komórkowe > [Twój eSIM]` i włącz **Data Roaming**. Jest to wymagane dla większości podróżnych eSIM, aby działały za granicą.

---

## 15. eSIM usunięty przez przypadek

**Przyczyna:** Usunięcie eSIM usuwa profil z telefonu, ale nie anuluje planu.

**Poprawka:**
- Dla eSIM operatora postpaid, skontaktuj się z operatorem — zwykle mogą ponownie wydać kod QR.
- Dla podróżnych eSIM (Roami, Airalo i podobne) usunięcie jest zwykle trwałe, więc będziesz musiał kupić nowy plan.
- Zawsze przechowuj kopię zapasową oryginalnego e-maila aktywacyjnego i kodu QR.

---

## 16. MDM lub ograniczenia firmowe blokują eSIM

**Przyczyna:** Na zarządzanym (służbowym) urządzeniu polityka Mobile Device Management, taka jak `AllowESIMModification`, może blokować dodawanie lub usuwanie eSIM.

**Poprawka:** Skontaktuj się z administratorem IT, aby włączyć zmiany eSIM, lub użyj niezarządzanego urządzenia.

---

## 17. eSIM zniknął po restarcie

**Objaw:** Zrestartowałeś telefon, a eSIM nie jest już wymieniony w Ustawienia > Komórkowe. Zniknął.

**Przyczyna:** Błąd oprogramowania na iOS lub Androidzie może czasami spowodować, że profile eSIM staną się ukryte lub nieczytelne po restarcie, zwłaszcza po aktualizacji systemu. Profil nadal jest na urządzeniu, ale system nie mógł go zamontować.

**Poprawka:**
1. **iPhone:** Przejdź do Ustawienia > Ogólne > Informacje i przewiń w dół do "Dostępna SIM" lub "Cyfrowa SIM". Jeśli eSIM pojawia się tam, ale nie w Komórkowe, zrestartuj telefon ponownie.
2. **iPhone:** Jeśli restart nie działa, przejdź do Ustawienia > Komórkowe > Dodaj eSIM. Czasami telefon wykryje istniejący profil i zaproponuje ponowne dodanie go bez nowego kodu QR.
3. **Android (Samsung):** Przejdź do Ustawienia > Połączenia > Menedżer SIM. eSIM może być oznaczony jako "Nieaktywny". Dotknij go i włącz.
4. **Android (Pixel):** Przejdź do Ustawienia > Sieć i Internet > SIM. Jeśli brakuje eSIM, dotknij "Dodaj operatora" — telefon może wykryć istniejący profil.
5. Jeśli żadne z nich nie działa, skontaktuj się z operatorem i poproś o nowy kod QR. Stary profil mógł zostać uszkodzony.

**Zapobieganie:** Przed restartem upewnij się, że wszystkie linie eSIM są wyłączone, następnie zrestartuj, a następnie włącz je ponownie. Zmniejsza to ryzyko, że system straci profil.

---

## 18. Wi-Fi Calling działa, ale dane eSIM nie

**Objaw:** Masz aktywne Wi-Fi Calling na linii domowej, ale Twój podróżny eSIM nie ma połączenia danych. Lub eSIM działa na Wi-Fi, ale nie na komórce.

**Przyczyna:** Konflikt routingu między Wi-Fi Calling a danymi komórkowymi. Gdy Wi-Fi Calling jest aktywne, telefon może priorytetyzować sieć Wi-Fi dla wszystkich komunikacji, w tym danych, i nie kierować poprawnie danych komórkowych przez eSIM.

**Poprawka:**
1. Tymczasowo wyłącz Wi-Fi Calling na linii domowej: Ustawienia > Komórkowe > [linia domowa] > Wi-Fi Calling > wyłącz.
2. Włącz i wyłącz tryb samolotowy, aby wymusić ponowną rejestrację telefonu w sieci komórkowej.
3. Przetestuj połączenie danych eSIM. Jeśli działa, możesz włączyć Wi-Fi Calling ponownie — routing powinien być teraz poprawny.
4. Jeśli problem się powtarza, sprawdź, czy linia domowa ma **Data Roaming WYŁĄCZONY**, a podróżny eSIM ma **Data Roaming WŁĄCZONY**.

**Alternatywa:** Na iPhonie przejdź do Ustawienia > Komórkowe > Dane komórkowe i upewnij się, że wybrany jest podróżny eSIM. Następnie włącz "Zezwalaj na przełączanie danych komórkowych" — pozwala to telefonowi używać podróżnego eSIM dla danych Wi-Fi Calling, nawet jeśli linia domowa jest linią głosową.

---

## 19. Konflikt eSIM vs fizyczna SIM

**Objaw:** Wkładasz fizyczną kartę SIM do telefonu, a wcześniej działający eSIM nagle pokazuje "Brak usługi" lub całkowicie znika z Ustawień.

**Przyczyna:** To znane zachowanie na urządzeniach zablokowanych przez operatora. Gdy zablokowany iPhone wykryje fizyczną SIM od innego operatora, może wyłączyć gniazdo eSIM, aby zapobiec nieautoryzowanemu użyciu. Na niektórych urządzeniach z Androidem włożenie fizycznej SIM może również spowodować, że system będzie priorytetyzował fizyczną SIM nad eSIM dla wszystkich funkcji.

**Poprawka:**
1. Wyjmij fizyczną kartę SIM z tacki.
2. Zrestartuj telefon.
3. eSIM powinien pojawić się ponownie w Ustawienia > Komórkowe (iPhone) lub Ustawienia > Połączenia > Menedżer SIM (Android).
4. Jeśli eSIM pojawi się ponownie, ale nadal pokazuje "Brak usługi", włącz Data Roaming dla linii eSIM.
5. Jeśli potrzebujesz, aby zarówno fizyczna SIM, jak i eSIM działały jednocześnie, skontaktuj się z operatorem, aby odblokować urządzenie.

> **Alternatywa:** Niektórzy użytkownicy zgłaszają, że wyłączenie i włączenie linii eSIM (bez wyjmowania fizycznej SIM) rozwiązuje konflikt. Wypróbuj to najpierw, zanim wyjmiesz fizyczną SIM.

---

## 20. Apple Watch eSIM nie działa

**Objaw:** Skonfigurowałeś sieć komórkową na Apple Watch, ale pokazuje "Brak usługi" lub "Wyszukiwanie" — lub plan eSIM w ogóle nie pojawia się w aplikacji Watch.

**Przyczyna:** Aktywacja eSIM Apple Watch wymaga wsparcia operatora dla konkretnego typu planu zegarka, a konfiguracja wymaga, aby iPhone był w pobliżu ze stabilnym połączeniem internetowym.

**Poprawka:** Sprawdź, czy Twój operator obsługuje eSIM Apple Watch, a następnie odparuj i ponownie sparuj zegarek, trzymając iPhone w pobliżu przez cały czas. Jeśli nadal nie chce się aktywować, skontaktuj się z operatorem z **EID** i **IMEI** zegarka, aby mogli go ręcznie skonfigurować. Pełny przewodnik — w tym które modele iPad i Apple Watch obsługują eSIM — znajdziesz w naszym [przewodniku po eSIM dla iPad i Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

---

## Tabela referencyjna kodów błędów – co oznaczają te liczby?

| Kod błędu | Platforma | Znaczenie | Poprawka |
|-----------|-----------|-----------|----------|
| **4013** | iPhone (przywracanie) | Błąd sprzętu/układu podczas przywracania | Zmień kabel, port USB, zaktualizuj macOS/iTunes |
| **4014** | iPhone (przywracanie) | Podobny do 4013; zwykle problem z komunikacją USB | Jak wyżej |
| **-8** | Android (aktywacja) | Przekroczenie limitu czasu sieci | Poczekaj i ponów lub zmień Wi-Fi |
| **-100** | Android (skanowanie QR) | Niewspierany format kodu QR | Użyj ręcznego wprowadzania |
| **0xE8000001** | iPhone (aktywacja) | Serwer operatora nieosiągalny | Ponów po 5 minutach lub użyj ręcznego wprowadzania |
| **"konfiguracja eSIM nieobsługiwana"** | Android (Samsung) | Operator nie obsługuje eSIM na tym modelu | Sprawdź u operatora |
| **"Nieprawidłowy adres SM‑DP+"** | Oba | Ręcznie wprowadzony adres jest błędny | Sprawdź adres u dostawcy |
| **"LPA error -1"** | Android | Ogólny błąd LPA (Local Profile Assistant) | Zrestartuj telefon, ponów. Jeśli się utrzymuje, użyj innej aplikacji eSIM. |
| **"Niezgodność EID"** | Oba | Profil jest powiązany z innym urządzeniem | Skontaktuj się z operatorem, aby zwolnić profil (Sekcja 4) |
| **"Brak EID" podczas wybierania `*#06#`** | Oba | Urządzenie nie obsługuje eSIM | Twój telefon nie ma sprzętu eSIM — zobacz nasz [przewodnik kompatybilności](/faq/esim-activation-errors-troubleshooting-guide/) |
| **"Zarządzanie eSIM niedostępne"** | Android (OnePlus) | Błąd Oxygen OS | Zaktualizuj do najnowszej wersji Oxygen OS |
| **"Nie można usunąć profilu"** | iPhone | eSIM zablokowany w stanie oczekującym | Zrestartuj iPhone, a następnie spróbuj ponownie usunąć. Jeśli zablokowany, skontaktuj się z operatorem. |
| **-1** | Oba | Ogólny błąd aktywacji | Zrestartuj telefon, zapewnij łączność sieciową, spróbuj ponownie |
| **-2** | Android | Nieprawidłowy kod aktywacyjny | Wprowadź ponownie kod lub poproś o nowy od operatora |

## 7 śmiertelnych błędów, które psują Twój eSIM – i jak ich uniknąć

To najczęstsze błędy użytkowników, które zamieniają działający eSIM w cegłę. Unikaj ich za wszelką cenę.

| Błąd | Co się dzieje | Jak uniknąć |
|------|---------------|-------------|
| **Usunięcie eSIM, aby "naprawić" problem z połączeniem** | Profil jest trwale usuwany — tracisz wszystkie pozostałe dane i musisz kupić nowy plan | Nigdy nie dotykaj "Usuń eSIM", chyba że plan jest w pełni wygasły. Usunięcie nie "odświeża" — niszczy. |
| **Skanowanie kodu QR aplikacją Aparat** | Aparat rozpoznaje kod, ale nic nie robi — żaden profil nie jest instalowany | Zawsze najpierw otwieraj Ustawienia > Komórkowe > Dodaj eSIM — nigdy nie używaj samodzielnej aplikacji Aparat. |
| **Instalacja na lotnisku ze słabym Wi-Fi** | Pobieranie przerywa się w trakcie instalacji, uszkadzając profil | Zainstaluj w domu na własnym stabilnym Wi-Fi przed wyjazdem. |
| **Czekanie z instalacją do lądowania** | Przyjeżdżasz bez Wi-Fi i nie możesz pobrać profilu | Zainstaluj profil przed wyjazdem (pozostaje nieaktywny do czasu włączenia Data Roaming). |
| **Zapomnienie o włączeniu Data Roaming dla eSIM** | Pełne paski sygnału, ale zerowy internet | Po wylądowaniu przejdź do Ustawienia > Komórkowe > [Twój eSIM] i włącz Data Roaming. |
| **Resetowanie ustawień sieciowych w myśli, że "odświeży" eSIM** | Reset sieci nie usuwa eSIM, ale usuwa hasła Wi-Fi i parowania Bluetooth — tracisz wszystkie zapisane sieci | Resetuj ustawienia sieciowe tylko w ostateczności i wiedz, że nie naprawi to problemów z aktywacją eSIM. |
| **Wyłączanie linii eSIM zamiast tylko wyłączania Data Roaming** | eSIM jest całkowicie wyłączony i nie zarejestruje się po ponownym włączeniu | Wyłącz Data Roaming, a nie całą linię. Trzymaj linię WŁĄCZONĄ, ale roaming WYŁĄCZONY, gdy nie jest używany. |

## Objawy kombinowane – gdy masz wiele problemów

Czasami nie masz tylko jednego problemu — masz dwa lub trzy naraz. Oto jak diagnozować objawy kombinowane:

| Kombinacja objawów | Co się faktycznie dzieje | Kolejność naprawy |
|---------------------|--------------------------|-------------------|
| **Kod QR skanuje się, ale potem "Aktywacja nie powiodła się"** | Kod QR jest ważny, ale serwer pobierania jest nieosiągalny | Najpierw napraw sieć (Sekcja 1), a następnie zeskanuj ponownie |
| **eSIM pokazuje paski sygnału, ale brak danych ORAZ "Brak usługi" na linii domowej** | Brakuje APN ORAZ masz konflikt routingu dual-SIM | Najpierw napraw APN (Sekcja 8), a następnie napraw routing dual-SIM (Sekcja 10) |
| **Transfer zadziałał, ale nowy telefon ma "Brak usługi"** | Profil został przeniesiony, ale nie zarejestrował się w nowej sieci | Usuń eSIM ze starego telefonu, a następnie zrestartuj nowy telefon (Sekcja 4 + Sekcja 2) |
| **Wi-Fi Calling działa, ale eSIM nie ma danych ORAZ linia domowa ma opłaty roamingowe** | Wiele konfliktów routingu plus Data Roaming pozostawiony WŁĄCZONY na linii domowej | Wyłącz Data Roaming na linii domowej, napraw konflikt Wi-Fi Calling (Sekcja 18), a następnie sprawdź APN |
| **eSIM zniknął po restarcie ORAZ "Nie można dodać planu komórkowego"** | Profil jest uszkodzony ORAZ pamięć jest pełna | Najpierw usuń nieużywane eSIM (Sekcja 5), a następnie spróbuj ponownie dodać (Sekcja 17) |

**Ogólna zasada:** Napraw najpierw **problemy sieciowe** (Wi-Fi, Data Roaming, APN), następnie **problemy z profilem** (kod QR, aktywacja), a na końcu **problemy specyficzne dla urządzenia** (blokada operatora, MDM). Nie próbuj naprawiać wszystkiego naraz — pracuj przez objawy jeden po drugim.

## Ścieżki menu specyficzne dla urządzenia – gdzie "Dodaj eSIM" znajduje się na każdym telefonie

Poprawka dla większości błędów jest taka sama, ale ścieżka menu do sterowania eSIM różni się w zależności od marki. Oto dokładne ścieżki plus osobliwości błędów, które pojawiają się tylko na konkretnych urządzeniach.

### iPhone (iOS 16–18)
- **"Dodaj eSIM" wyszarzone** – Twój iPhone może być zablokowany przez operatora. Sprawdź Ustawienia > Ogólne > Informacje > Blokada operatora; pełną poprawkę blokady operatora znajdziesz w naszym [przewodniku kompatybilności](/faq/esim-activation-errors-troubleshooting-guide/).
- **Szybki transfer nie działa** – upewnij się, że oba telefony są na tym samym Apple ID, mają włączony Bluetooth i znajdują się w odległości do 10 cm od siebie.
- **Po aktualizacji iOS eSIM pokazuje "Brak usługi"** – przejdź do Ustawienia > Komórkowe > dotknij eSIM > wyłącz i włącz "Włącz tę linię". Sprawdź również, czy Data Roaming nadal jest WŁĄCZONY.
- **eSIM zniknął po aktualizacji iOS** – zobacz Sekcję 17. Jest to częstsze na iOS niż na Androidzie po większych aktualizacjach.
- **Specyficzne dla iOS 18:** Przepływ "Dodaj eSIM" został przeprojektowany z bardziej widoczną opcją ręcznego wprowadzania. Jeśli jesteś na iOS 18 i kod QR nie chce się skanować, przycisk ręcznego wprowadzania jest teraz łatwiejszy do znalezienia na dole ekranu.

### Samsung Galaxy (One UI 5, 6, 6.1, 7)
- **Ścieżka menu różni się w zależności od wersji One UI:**
  - **One UI 5 (Android 13):** Ustawienia > Połączenia > Menedżer SIM > Dodaj eSIM
  - **One UI 6/6.1 (Android 14):** Ustawienia > Połączenia > Menedżer SIM > Dodaj eSIM (ta sama ścieżka)
  - **One UI 7 (Android 15):** Ustawienia > Połączenia > Menedżer SIM > Dodaj plan mobilny
- **Skanowanie kodu QR nie działa** – spróbuj ręcznego wprowadzania (dotknij "Wprowadź kod aktywacyjny ręcznie"). Samsung często wymaga adresu SM‑DP+ i kodu aktywacyjnego osobno.
- **Konflikt dual SIM** – jeśli masz fizyczną SIM i eSIM, sprawdź, czy eSIM jest ustawiony jako SIM danych w Menedżerze SIM.

### Google Pixel (Android 13/14/15)
- **"Pobierz SIM zamiast?"** – ta opcja pojawia się na dole ekranu ustawień SIM. Jeśli jej nie widzisz, Twój Pixel może być zablokowany przez operatora.
- **eSIM nie pojawia się po skanowaniu** – zrestartuj telefon. Pixel czasami potrzebuje restartu po pobraniu profilu.
- **Ustawienia APN nie zapisują się** – na Pixelu ustawienia APN znajdują się w Sieć i Internet > SIM > [Twój eSIM] > Nazwy punktów dostępowych. Jeśli się nie zapisują:
  1. Dodaj nowe APN z **inną nazwą** (np. "Airalo 2" zamiast "Airalo").
  2. Zapisz je, a następnie wybierz ręcznie.
  3. Włącz i wyłącz tryb samolotowy, aby wymusić zastosowanie nowego APN.
- **eSIM znika po restarcie na Pixelu** – zobacz Sekcję 17. Użytkownicy Pixela zgłaszają to częściej niż użytkownicy Samsunga.

### OnePlus (Oxygen OS 13/14)
- **Ścieżka menu:** Ustawienia > Wi-Fi i sieć > SIM i sieć > Dodaj eSIM
- **Częsty problem:** Urządzenia OnePlus czasami pokazują "eSIM niedostępny" po aktualizacji Oxygen OS. Poprawka: przejdź do Ustawienia > System > Aktualizacja systemu i zainstaluj najnowszą łatkę.
- **Ustawienia APN:** Znajdują się w Ustawienia > Wi-Fi i sieć > SIM i sieć > [eSIM] > Nazwy punktów dostępowych.

### Xiaomi (MIUI/HyperOS)
- **Ścieżka menu:** Ustawienia > Karty SIM i sieci komórkowe > Dodaj eSIM
- **Ustawienia APN:** Znajdują się w Ustawienia > Karty SIM i sieci komórkowe > [eSIM] > Nazwy punktów dostępowych.

### Oppo/Realme (ColorOS)
- **Ścieżka menu:** Ustawienia > Sieć komórkowa > Dodaj eSIM

**Nie wiesz, czy Twój dokładny model w ogóle ma sprzęt eSIM** (Xiaomi z rynku chińskiego, Huawei, Samsung A-series z wyłączoną eSIM przez operatora)? To pytanie o kompatybilność — zobacz nasz [przewodnik sprzętowy i kompatybilności](/faq/esim-activation-errors-troubleshooting-guide/), który obejmuje wsparcie model po modelu.

## Zaawansowany scenariusz: eSIM działa w domu, ale nie za granicą

**Objaw:** Zainstalowałeś eSIM w domu, pokazuje paski sygnału, ale gdy lądujesz w miejscu docelowym, nie ma usługi.

**Główna przyczyna:** Profil eSIM został aktywowany, gdy byłeś w swojej sieci domowej i nie zarejestrował się w sieci docelowej.

**Poprawka:**
1. Wyłącz linię eSIM (`Ustawienia > Komórkowe > wyłącz`).
2. Odczekaj 10 sekund, a następnie włącz ją ponownie.
3. Przejdź do Wybór sieci, wyłącz "Automatyczny", ręcznie wybierz sieć, z którą współpracuje Twój dostawca (zapytaj dostawcę o listę partnerów).
4. Jeśli to nie zadziała, wyłącz i włącz Data Roaming ponownie.
5. Zrestartuj telefon.

Jeśli to nadal nie działa, skontaktuj się z dostawcą — Twój plan eSIM może nie obejmować kraju, w którym się znajdujesz, lub może wystąpić problem z umową roamingową.

## Zaawansowany scenariusz: eSIM działa na jednym operatorze, ale nie na innym

**Objaw:** Masz jeden eSIM, który działa dobrze, ale gdy próbujesz dodać drugi eSIM od innego operatora, nie działa lub pokazuje "Brak usługi".

**Główna przyczyna:** Niektóre modele telefonów (zwłaszcza starsze) mają ograniczenia dotyczące tego, które profile operatorów mogą współistnieć. Jest to częstsze na urządzeniach z Androidem ze starszym oprogramowaniem modemowym.

**Poprawka:**
1. Sprawdź, czy Twój telefon obsługuje dual eSIM (iPhone 13 i nowsze, Pixel 7 i nowsze, Samsung S23 i nowsze).
2. Jeśli masz włożoną fizyczną SIM, spróbuj ją wyjąć — niektóre telefony ograniczają liczbę aktywnych profili, gdy fizyczna SIM jest obecna.
3. Zaktualizuj oprogramowanie telefonu (aktualizacje ustawień operatora często to naprawiają).
4. Skontaktuj się z drugim operatorem i zapytaj, czy ich profil eSIM obsługuje współistnienie dual-SIM.

## Kiedy skontaktować się z dostawcą eSIM, a kiedy z producentem telefonu

| Problem | Kontakt |
|---------|---------|
| Kod QR wygasł / nieprawidłowy | Dostawca eSIM |
| "Aktywacja nie powiodła się" wielokrotnie | Dostawca eSIM |
| Brak danych po konfiguracji APN | Dostawca eSIM |
| Urządzenie pokazuje "Brak usługi" po lądowaniu | Dostawca eSIM (sprawdź umowę roamingową) |
| eSIM nie pojawia się w ustawieniach | Producent telefonu (jeśli błąd oprogramowania) lub problem z blokadą operatora |
| Problemy sprzętowe (aparat, ekran, bateria) | Producent telefonu |
| Blokada / odblokowanie operatora | Twój operator domowy |
| Ograniczenie MDM | Twój dział IT |
| eSIM zniknął po restarcie | Obaj — wypróbuj poprawki z Sekcji 17, a następnie skontaktuj się z dostawcą |
| "eSIM już w użyciu" | Dostawca eSIM (aby wymusić zwolnienie profilu) |
| Apple Watch eSIM nie łączy się | Operator (dla konfiguracji) lub Apple Support (dla problemów z parowaniem) |

## Często zadawane pytania

**P1: Czy usunięcie eSIM anuluje mój plan?**
Nie. Usunięcie eSIM tylko usuwa profil z telefonu. Musisz skontaktować się z operatorem osobno, aby anulować plan.

**P2: Czy mogę odzyskać usunięty eSIM?**
Dla eSIM operatora postpaid — tak, operator może ponownie wydać profil. Dla podróżnych eSIM usunięcie jest zwykle trwałe i wymaga nowego zakupu.

**P3: Dlaczego mój eSIM działa na Wi-Fi, ale nie na komórce?**
To prawie zawsze problem z APN lub Data Roaming. Postępuj zgodnie z Sekcją 8 i Sekcją 14.

**P4: Czy eSIM szybciej rozładowuje baterię?**
Nie. Posiadanie dwóch aktywnych linii jednocześnie może zużywać nieco więcej energii, ale pojedynczy eSIM nie rozładowuje baterii.

**P5: Ile eSIM mogę przechowywać na telefonie?**
Zazwyczaj 8–10 profili na iPhonie i większości urządzeń z Androidem. Możesz przechowywać znacznie więcej, ale tylko dwa mogą być aktywne jednocześnie (dual‑SIM).

**P6: Dlaczego mój eSIM ciągle traci sygnał?**
Może to być spowodowane przeciążeniem sieci, słabym zasięgiem lub błędem oprogramowania. Spróbuj przełączyć tryb samolotowy, zrestartować lub ręcznie wybrać sieć.

**P7: Widzę "Wymagana aktywacja" na moim eSIM po restarcie – co to oznacza?**
Telefon stracił połączenie z serwerem aktywacyjnym operatora. Zrestartuj telefon i upewnij się, że masz połączenie sieciowe. Jeśli problem się utrzymuje, usuń i zainstaluj ponownie eSIM.

**P8: Co jeśli mój operator mówi, że nie obsługuje eSIM?**
Nadal możesz korzystać z dostawców podróżnych eSIM, takich jak Roami, Airalo czy Holafly — działają one niezależnie od Twojego operatora domowego i nie wymagają wsparcia operatora.

**P9: Mój eSIM przeniósł się na nowego iPhone'a, ale nie mogę wykonywać połączeń – działa tylko data.**
Sprawdź, czy eSIM jest ustawiony jako Domyślna linia głosowa. Upewnij się również, że Twój operator obsługuje VoLTE dla tej linii.

**P10: Skanowanie kodu QR działa, ale pobieranie trwa wiecznie – czy to normalne?**
Nie. Powinno trwać 1–2 minuty. Jeśli trwa dłużej, Twoje Wi‑Fi jest zbyt wolne. Zmień sieć lub użyj ręcznego wprowadzania.

**P11: Mój eSIM jest aktywny, ale nie mogę wysyłać ani odbierać SMS-ów.**
Niektóre podróżne eSIM są tylko do danych i nie obsługują SMS. Jeśli potrzebujesz SMS, kup plan, który wyraźnie zawiera numer telefonu.

**P12: Przypadkowo zresetowałem ustawienia sieciowe – teraz mój eSIM zniknął.**
Reset ustawień sieciowych nie usuwa profili eSIM. Twój eSIM nadal powinien być dostępny. Przejdź do Ustawienia > Komórkowe i włącz linię ponownie. Jeśli zniknął, mogłeś przypadkowo go usunąć — wtedy zobacz Sekcję 15.

**P13: Jaka jest różnica między usunięciem eSIM a jego wyłączeniem?**
Wyłączenie eSIM zachowuje profil na telefonie, ale wyłącza linię. Możesz ją włączyć ponownie w dowolnym momencie. Usunięcie eSIM trwale usuwa profil — nie możesz go odzyskać bez nowego kodu QR. Usuwaj tylko wtedy, gdy plan jest w pełni wygasły.

**P14: Czy VPN może zakłócać aktywację eSIM?**
Tak — VPN mogą zakłócać połączenie z serwerem aktywacyjnym. Wyłącz VPN przed aktywacją eSIM.

**P15: Mój plan eSIM mówi "nielimitowany", ale po użyciu 5 GB nie mam danych.**
Wiele planów "nielimitowanych" ma politykę uczciwego użytkowania (FUP), która ogranicza prędkość po przekroczeniu pewnego progu danych. Sprawdź warunki dostawcy — możesz potrzebować zakupu planu doładowania dla większej ilości szybkich danych.

👉 **Rozwiązywanie problemów zakończone?** Wybierz [plan eSIM USA](/united-states-esim/) lub [plan eSIM Europa](/europe-esim/), aby wrócić online.

---

## Źródła

- [GSMA — specyfikacja eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM na iPhonie](https://support.apple.com/en-us/108072)
- [Google Support — Konfiguracja eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — eSIM na Androidzie](https://support.google.com/android/answer/11241215)