---
title: "eSIM nie działa? Napraw błędy zgodności w 2026"
h1_title: "Jak naprawić eSIM nie działa: błędy zgodności w 2026"
description: "Utknąłeś z błędami eSIM? Dowiedz się, jak naprawić błędy aktywacji, problemy z transferem i pętle restartów na iPhone i Android. Zdiagnozuj swój telefon w 2 minuty."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["esim not working", "esim not supported", "esim not compatible iphone", "unable to activate esim", "esim network not available", "esim not transferring to new iphone", "accidentally deleted esim", "esim profile expired", "esim qr code invalid", "how to fix esim on iphone", "esim transfer error", "esim no service"]
date: 2026-09-22T00:00:00Z
lastmod: 2026-09-22T00:00:00Z
tags: ["eSIM", "Troubleshooting", "Activation Errors", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

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
    - name: "eSIM Niemcy"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Turcja"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Japonia"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM Chiny"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

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
    - name: "Hongkong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

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


> **Nota redaktora:** Duża część problemów „mój eSIM nie działa" okazuje się problemem telefonu, a nie planu. Ten przewodnik odpowiada na pytanie, które powinieneś zadać przede wszystkim: *czy mój telefon w ogóle obsługuje eSIM?* Przeprowadzimy Cię przez 2-minutowe sprawdzenie sprzętu, wyjątki dla modeli z Chin/Hongkongu i blokady operatorów — abyś nie tracił godziny na kroki aktywacji, które nigdy nie zadziałają na Twoim urządzeniu.

> **Szukasz poprawki kodu błędu?** Jeśli Twój telefon przejdzie poniższe sprawdzenie sprzętu, ale widzisz konkretny komunikat („Activation failed", „No Service", „QR invalid", błąd przywracania 4013/4014), to inny problem. Przejdź do naszego [Przewodnika głębokiego rozwiązywania problemów z eSIM](/faq/esim-deep-troubleshooting-guide-2026/), aby uzyskać odniesienie błąd po błędzie.

## Czy mój telefon w ogóle obsługuje eSIM?

Zanim otworzysz Ustawienia, zeskanujesz pojedynczy kod QR lub skontaktujesz się z pomocą techniczną, potwierdź, że Twój telefon rzeczywiście ma wymagany sprzęt wbudowanej karty SIM. To jedno sprawdzenie natychmiast wyklucza około połowę wszystkich przypadków „eSIM nie działa".

### Uniwersalne sprawdzenie EID

Otwórz dialer swojego telefonu i wpisz:

> **`*#06#`**

- Jeśli pojawi się ekran z **32-cyfrowym EID** (identyfikatorem eUICC), Twój telefon ma wbudowany chip potrzebny do aktywacji cyfrowej karty SIM. ✅
- Jeśli ekran pokazuje tylko numery **IMEI** i brak EID, sprzęt nie jest obecny. ❌

**Co zrobić, jeśli nie pojawi się EID:** Zatrzymaj się tutaj. Żadna aktualizacja oprogramowania, hack ani metoda „wymuszenia" nie może dodać brakującego chipu — to fizyczny brak sprzętu. Użyj fizycznej karty SIM zamiast tego lub sprawdź Poprawkę #4 dla telefonów, które *wyglądają*, jakby powinny obsługiwać eSIM, ale tego nie robią.

### Wyjaśnienie EID vs IMEI vs ICCID

| Identyfikator | Co to jest | Co Ci mówi |
| :--- | :--- | :--- |
| **IMEI** | Międzynarodowa Identyfikacja Sprzętu Mobilnego (15 cyfr) | Identyfikuje model Twojego telefonu — każdy telefon go ma |
| **EID** | Identyfikator eUICC (32 cyfry) | Potwierdza obecność wbudowanego chipu SIM — tylko telefony obsługujące eSIM go mają |
| **ICCID** | Identyfikator Karty Układu Scalonego (19–20 cyfr) | Identyfikuje konkretny profil eSIM po jego zainstalowaniu |

> **Kluczowa informacja:** EID = sprzęt obecny. Jeśli widzisz EID, Twój telefon jest fizycznie zdolny do eSIM. Jeśli nie, nic, co zainstalujesz, tego nie zmieni.

### Gdzie znaleźć każdy numer

Wszystkie trzy numery są widoczne, gdy znasz menu. Oto najkrótsza droga do każdego z nich:

| Identyfikator | Najszybszy sposób | Lokalizacja zapasowa |
| :--- | :--- | :--- |
| **IMEI (15 cyfr)** | Wybierz `*#06#` — to pierwszy wyświetlany numer | iPhone: **Ustawienia > Ogólne > Informacje**. Android: **Ustawienia > Informacje o telefonie** |
| **EID (32 cyfry)** | Wybierz `*#06#` i przewiń — to długi numer zaczynający się od **8904** | iPhone: **Ustawienia > Ogólne > Informacje > EID**. Samsung: **Ustawienia > Informacje o telefonie > Status** |
| **ICCID (19–20 cyfr)** | Pojawia się dopiero po zainstalowaniu profilu | iPhone: **Ustawienia > Ogólne > Informacje**. Android: **Ustawienia > Informacje o telefonie > Status karty SIM** |

> **Przydatna informacja:** każdy EID zaczyna się od **„8904"** — ten prefiks oznacza go jako identyfikator eUICC. Jeśli długi numer na ekranie zaczyna się od czegokolwiek innego, czytasz niewłaściwą wartość.

### Test przycisku Dodaj eSIM

Jeśli `*#06#` pokazuje EID, ale nadal widzisz „eSIM nie jest obsługiwany", otwórz **Ustawienia > Komórka** i poszukaj **„Dodaj eSIM"** lub **„Dodaj plan komórkowy"**. Jeśli opcja jest dostępna, ale zawodzi podczas skanowania, najprawdopodobniej masz do czynienia z **blokadą operatora** lub **ograniczeniem regionalnym** — oba opisane poniżej.

### Metoda wyszukiwania w Ustawieniach

Nie masz pod ręką dialera (niektóre tablety i składane telefony go ukrywają) lub `*#06#` dał Ci mylący ekran? Pasek wyszukiwania w telefonie to drugie najszybsze sprawdzenie.

- **iPhone:** Otwórz **Ustawienia**, przesuń w dół od góry listy, aby odsłonić pole wyszukiwania, i wpisz **„eSIM"**. Wynik **„Dodaj eSIM"** lub **„Dodaj plan komórkowy"** oznacza, że funkcja jest aktywna.
- **Samsung:** Otwórz **Ustawienia**, dotknij **ikony lupy** u góry i wpisz **„eSIM"**. Jeśli pojawi się **„Menedżer karty SIM"** (lub „Dodaj plan mobilny"), Twój wariant ma chip.
- **Pixel:** Otwórz **Ustawienia > Sieć i internet > SIM-y**. Jeśli widzisz **„Pobrać SIM zamiast tego?"**, jest dobrze. Ekran, który wyświetla tylko fizyczną kartę SIM — bez opcji pobierania — oznacza brak chipu eUICC.

> **Brak wyniku wyszukiwania = brak sprzętu.** Jeśli telefon sprzedany po około 2018 roku nie zwraca nic dla „eSIM" w wyszukiwaniu Ustawień, prawie na pewno masz wariant regionalny lub budżetowy, który został wysłany bez chipu.

### Sprawdzenie numeru modelu

Kupujesz używany lub sprawdzasz telefon, którego nie możesz włączyć? Numer modelu rozstrzyga to w kilka sekund.

- **iPhone:** **Ustawienia > Ogólne > Informacje > Numer modelu**, następnie dotknij numeru, aby przełączyć go na **identyfikator z prefiksem A** (np. **A2111**). Litery przed **/A** w numerze części kodują region sprzedaży — pełna mapa sufiksów znajduje się w Sekcji 2.
- **Samsung:** **Ustawienia > Informacje o telefonie > Numer modelu** (np. **SM-S921U1**). Ostatni znak jest wskazówką: **U** = operator USA, **U1** = USA odblokowany, **B** = Europa/globalny, **0** = Chiny/Hongkong (Snapdragon).
- **Pixel:** **Ustawienia > Informacje o telefonie > Model**. Ciągi modeli Pixel różnią się w zależności od regionu i operatora — Japonia i niektóre warianty operatorów USA ograniczają eSIM, więc sprawdź konkretny kod lub wybierz `*#06#`.

> **Zasada ogólna:** jeśli numer modelu kończy się na sufiks Chin/regionu (lub sufiks operatora USA w Samsungu), zweryfikuj za pomocą `*#06#`, zanim założysz, że eSIM działa. Numer modelu plus EID razem dają 100% odpowiedź.

### Dlaczego telefon może pokazywać EID, ale nadal odmawiać eSIM

| Scenariusz | EID obecny? | eSIM działa? | Dlaczego? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR i nowsze (globalne) | ✅ Tak | ✅ Tak | Pełne wsparcie dla profili cyfrowych SIM |
| iPhone XS/XR (model chiński) | ❌ Nie | ❌ Nie | Sprzęt usunięty na rzecz podwójnego fizycznego SIM |
| Samsung S20 FE (operator USA) | ✅ Tak | ❌ Nie | Operator wyłączył funkcję w oprogramowaniu |
| Google Pixel 4a (Japonia) | ✅ Tak | ❌ Nie | Operator zablokował funkcjonalność |
| iPhone zablokowany przez operatora (AT&T/T-Mobile) | ✅ Tak | ❌ Nie (dla innych operatorów) | Blokada sieci blokuje profile innych dostawców |
| iPhone odblokowany (dowolny region) | ✅ Tak | ✅ Tak | Pełne wsparcie |


## eSIM nie jest obsługiwany lub nie jest zgodny na iPhone

Jeśli widzisz **„eSIM nie jest obsługiwany"**, **„ten eSIM nie jest zgodny z tym iPhone"** lub po prostu **„eSIM niekompatybilny iPhone"**, przyczyna jest prawie zawsze jedną z pięciu rzeczy — i każda dotyczy Twojego *urządzenia*, a nie planu.

### Twój model iPhone jest starszy niż sprzęt eSIM

Tylko iPhone'y od **XR, XS, XS Max (2018) i nowsze** mają wbudowany chip. iPhone 8, 8 Plus i iPhone X go nie mają, więc zwracają **„eSIM nie jest obsługiwany"** niezależnie od tego, co próbujesz. Chip eUICC po prostu nie znajduje się na tych płytach — to ograniczenie sprzętowe, a nie problem z ustawieniami.

**Szybkie sprawdzenie:** Wybierz `*#06#`. 32-cyfrowy EID oznacza, że jest dobrze; tylko IMEI oznacza, że nie.

**Co zrobić:** Użyj fizycznej karty SIM lub przejdź na iPhone XR lub nowszy. Oficjalna lista znajduje się na [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/118670).

### Twój iPhone to model z Chin kontynentalnych

iPhone'y sprzedawane w Chinach kontynentalnych są dostarczane z **dwoma fizycznymi slotami na SIM i bez sprzętu eSIM**. Chińskie przepisy skłaniają krajowe smartfony w kierunku podwójnego fizycznego SIM, więc Apple usunął wbudowany chip w tych jednostkach. Nawet jeśli pojawi się opcja „Dodaj plan komórkowy", nie zakończy się — to najczęstsza przyczyna „eSIM niekompatybilny z tym iPhone" wśród kupujących, którzy nabyli urządzenie w Chinach lub przez niektórych sprzedawców.

**Jak zidentyfikować:** **Ustawienia > Ogólne > Informacje > Numer modelu**. Jeśli kończy się na **„CH/A"**, to model z Chin kontynentalnych. (Pełna tabela sufiksów w Sekcji 2 poniżej.)

**Co zrobić:** Nie ma sposobu, aby włączyć eSIM na urządzeniu CH/A. Użyj fizycznej karty SIM podróżnej lub sprzedaj telefon i kup wersję globalną.

### Twój iPhone jest zablokowany przez operatora

Niektórzy operatorzy — zwłaszcza amerykańscy — blokują iPhone'y na własnej sieci. Próba aktywacji profilu innego dostawcy (np. eSIM podróżnego) zwraca wtedy „eSIM nie jest obsługiwany" lub komunikat „operator nie obsługuje". Zauważ, że niektórzy operatorzy blokują tylko fizyczny slot SIM, pozostawiając slot eSIM otwarty, ale wielu blokuje oba.

**Jak sprawdzić:** **Ustawienia > Ogólne > Informacje > Blokada operatora**. Powinno być **„Brak ograniczeń SIM"**. Jeśli jest napisane „SIM zablokowany", potrzebujesz odblokowania. Zobacz Sekcję 3, aby zapoznać się z pełnym przewodnikiem po blokadzie operatora.

### Twoja wersja iOS jest przestarzała

Wsparcie dla cyfrowej karty SIM znacznie się poprawiło w iOS 16 i nowszych. W iOS 12 lub 13 niektóre nowoczesne profile operatorów po prostu się nie zainstalują.

**Jak sprawdzić:** **Ustawienia > Ogólne > Aktualizacja oprogramowania**.

**Co zrobić:** Zaktualizuj do najnowszego iOS, usuń wszelkie na wpół zainstalowane profile, a następnie ponownie zeskanuj kod QR.

### Ten iPhone nie obsługuje eSIM na iPhone 14

iPhone 14 (wersja amerykańska) powinien zawsze obsługiwać eSIM — model amerykański nie ma w ogóle fizycznej tacki na SIM. Jeśli mimo to zwraca ten błąd, masz do czynienia z rzadką **awarią sprzętu eUICC**. Skontaktuj się z Apple Support w celu diagnozy sprzętowej, zamiast ścigać ustawienia.

Pełną listę modeli iPhone znajdziesz w naszym [przewodniku zgodności eSIM iPhone](/faq/iphone-11-esim-compatible/).

Właściciele Samsung powinni sprawdzić [przewodnik eSIM Samsung Galaxy](/faq/samsung-s20-esim-compatible/), a właściciele Pixel — [przewodnik eSIM Google Pixel](/faq/google-pixel-6-esim-compatible/).


### eSIM nie jest obsługiwany: sprzęt, oprogramowanie czy operator

Każdy przypadek „eSIM nie jest obsługiwany" — na dowolnym telefonie, u dowolnego operatora — trafia do jednego z trzech koszyków. Nazwanie koszyka mówi Ci natychmiast, czy problem jest naprawialny.

| Kategoria | Jak to wygląda | Naprawialne? | Twoje działanie |
| :--- | :--- | :--- | :--- |
| **Sprzęt** | Brak EID na `*#06#`; iPhone przed 2018; model chiński (CH/A); budżetowy Android bez eUICC | ❌ Nie | Fizyczna karta SIM lub zmiana telefonu |
| **Oprogramowanie** | EID obecny, ale funkcja jest ukryta lub system jest stary (Samsung S20 FE wyłączony przez operatora, przestarzały iOS) | ✅ Zwykle | Zaktualizuj system lub usuń ograniczenie operatora |
| **Operator** | EID obecny, menu widoczne, ale aktywacja planu innego dostawcy zawodzi | ✅ Tak | Odblokuj urządzenie (Sekcja 3), a następnie zeskanuj ponownie |

**30-sekundowy test routingu:** wybierz `*#06#`.
- **Brak EID** → sprzęt. Zatrzymaj się tutaj — nic, co zainstalujesz, tego nie zmieni.
- **EID obecny, ale przepływ „Dodaj eSIM" zawodzi** → oprogramowanie lub operator. Oba są naprawialne, więc czytaj dalej.

Ten pojedynczy wynik kieruje Cię do właściwej poprawki w około 9 na 10 zgłoszeń „nieobsługiwane", które widzimy w Roami.


## Przewodnik po modelach z Chin, Hongkongu i Makau

Miejsce, w którym sprzedano Twój telefon, określa, jaki ma sprzęt. To najszybszy sposób, aby wykluczyć lub potwierdzić regionalną sytuację braku eSIM.

### Szybkie odniesienie dla modeli chińskich

| Zakończenie numeru modelu | Region | Obsługa eSIM |
| :--- | :--- | :--- |
| **CH/A** | Chiny kontynentalne | ❌ Nie (podwójny fizyczny SIM) |
| **HK/A** | Hongkong | ⚠️ Różnie (niektóre modele obsługują fizyczny + cyfrowy SIM) |
| **LL/A** | USA | ✅ Tak |
| **ZA/A** | Kanada | ✅ Tak |
| **J/A** | Japonia | ✅ Tak (z wyjątkiem niektórych modeli operatorów) |
| **B/A** | Wielka Brytania/Europa | ✅ Tak |
| **X/A** | Australia/Nowa Zelandia | ✅ Tak |

### Status eSIM na iPhone w Chinach kontynentalnych

- **Wszystkie iPhone'y sprzedawane w Chinach kontynentalnych** (z wyjątkiem serii iPhone 16) mają podwójny fizyczny SIM i brak eSIM.
- **Chińskie telefony Android** — Xiaomi, Oppo, Vivo, Huawei — sprzedawane na rynku krajowym również zwykle nie mają chipu eSIM.
- **Jeśli zabierzesz telefon międzynarodowy do Chin:** będzie działał z międzynarodowymi eSIM podróżnymi, ale lokalni chińscy operatorzy nie oferują eSIM turystom, więc nadal będziesz potrzebować planu podróżnego od dostawcy takiego jak Roami.

### Status eSIM na iPhone w Hongkongu

- **Modele iPhone:** iPhone'y z Hongkongu zwykle obsługują **eSIM + fizyczny SIM** (po jednym z każdego) lub podwójny fizyczny SIM, w zależności od dokładnego modelu. Sprawdź sufiks swojego modelu.
- **Operatorzy:** niektórzy operatorzy z Hongkongu (CMHK, 1010, SmarTone) oferują eSIM klientom abonamentowym, ale eSIM przedpłacony jest rzadkością.
- **Podróżni:** międzynarodowy eSIM podróżny jest prostszy i bardziej niezawodny niż próba uzyskania lokalnego eSIM w Hongkongu.

### Status eSIM na iPhone w Makau

- **Podobnie jak w Hongkongu:** większość iPhone'ów w Makau jest importowana z Hongkongu i obsługuje eSIM + fizyczny SIM.
- **CTM** (główny operator w Makau) oferuje eSIM klientom abonamentowym, ale nie turystom.

### Dlaczego modele chińskie rezygnują z eSIM

To nie jest ruch Apple ani marek Android mający na celu obniżenie kosztów — to regulacje. Chiny kontynentalne wymagają, aby telefony sprzedawane na ich terenie były certyfikowane na podwójny fizyczny SIM, a przepisywalny profil eSIM nie pasuje do tych krajowych ram. Praktyczny rezultat:

- **Apple** dostarcza iPhone'y z Chin kontynentalnych z **dwoma fizycznymi slotami nano-SIM** i bez chipu eUICC.
- **Xiaomi, Oppo, Vivo, Honor i Huawei** usuwają eSIM ze swoich krajowych chińskich wersji, nawet gdy globalna wersja tego samego telefonu go ma.
- **Chiński telefon zabrany za granicę nadal nie może odzyskać eSIM** — to brak sprzętu, a nie blokada oprogramowania. Odwrotnie również: telefon międzynarodowy wjeżdżający do Chin działa z eSIM podróżnymi, ale trzej wielcy chińscy operatorzy (China Mobile, China Unicom, China Telecom) nie sprzedają eSIM turystom.

**Rozwiązanie:** jeśli kupiłeś telefon w Chinach kontynentalnych, planuj fizyczną kartę SIM podróżną — lub kup telefon w wersji globalnej. Nie ma odblokowania, jailbreaka ani aplikacji, która doda brakujący chip.

### Identyfikacja modelu po numerze A

Sufiks numeru części (CH/A, LL/A itd.) to szybki filtr, ale **numer A** to precyzyjny identyfikator. Weź iPhone 11 jako wzór, który powtarza każda generacja:

| Model iPhone 11 | Region | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Stany Zjednoczone | ✅ Tak |
| **A2221** | Chiny kontynentalne | ❌ Nie (podwójny fizyczny SIM) |
| **A2223** | Hongkong / Makau | ✅ Tak (eSIM + fizyczny) |

**Jak go używać:** znajdź swój numer A (**Ustawienia > Ogólne > Informacje > Numer modelu**, następnie dotknij numeru, aby odsłonić kod z prefiksem A) i dopasuj go do listy modeli Apple. Jeśli sprzedawca reklamował „odblokowany globalny iPhone z eSIM", ale numer A to kod chiński, oferta była błędna — odejdź lub planuj fizyczną kartę SIM.


## Blokada operatora i jak ją usunąć

Blokada operatora to druga najczęstsza przyczyna, dla której doskonale zdolny telefon odmawia eSIM. To ograniczenie oprogramowania nakładane przez operatora na urządzenie, a nie limit sprzętowy.

### Co robi blokada operatora

Gdy telefon jest „zablokowany na SIM", akceptuje tylko karty SIM i profile eSIM od operatora, który go sprzedał. Próba dodania eSIM podróżnego od innego dostawcy wywołuje „eSIM nie jest obsługiwany" lub „SIM nie jest obsługiwany". Wbudowany chip jest obecny i działa — operator po prostu blokuje do niego dostęp.

### Jak sprawdzić status blokady

1. Na iPhone: **Ustawienia > Ogólne > Informacje > Blokada operatora**. Powinno być **„Brak ograniczeń SIM"**.
2. Na Android (Samsung): **Ustawienia > Informacje o telefonie > Status** i poszukaj pola blokady SIM.
3. Na Android (Pixel): **Ustawienia > Informacje o telefonie > Status SIM**.

### Polityki odblokowania operatorów USA

| Operator | Wymagania odblokowania |
| :--- | :--- |
| **AT&T** | Urządzenie w pełni spłacone i aktywne przez 60 dni przed odblokowaniem |
| **T-Mobile** | Urządzenie spłacone i aktywne przez 40 dni; złóż wniosek przez aplikację T-Mobile |
| **Verizon** | Większość telefonów automatycznie odblokowuje się 60 dni po zakupie |

### Jak odblokować urządzenie

1. **Poproś operatora o odblokowanie** — zwykle jest bezpłatne, gdy telefon jest spłacony, a większość operatorów USA pozwala złożyć wniosek z aplikacji lub formularza internetowego.
2. **Poczekaj na potwierdzenie** — operator wypycha odblokowanie; może być konieczne ponowne uruchomienie telefonu.
3. **Zweryfikuj** — ponownie sprawdź pole Blokada operatora, aż będzie „Brak ograniczeń SIM".
4. **Następnie aktywuj** — po odblokowaniu ponownie zeskanuj kod QR eSIM podróżnego.

> **Uwaga:** blokada operatora to ograniczenie na poziomie telefonu, a nie planu. Odblokowanie urządzenia nie anuluje umowy — po prostu uwalnia urządzenie do korzystania z kart SIM i eSIM innych dostawców.

### Więcej operatorów USA i polityki odblokowania MVNO

Trzej wielcy to nie jedyni, na których ludzie trafiają. Telefony przedpłacone i MVNO są często blokowane dłużej, co może być podstępną przyczyną, dla której „świetna okazja" eSIM podróżny nie chce się zainstalować.

| Operator | Wymagania odblokowania |
| :--- | :--- |
| **Cricket Wireless** | 6 miesięcy opłaconej usługi (chyba że kupiono w pełnej cenie detalicznej) |
| **Metro by T-Mobile** | 180 dni opłaconej usługi |
| **Boost Mobile** | 12 miesięcy opłaconej usługi |
| **Spectrum Mobile** | 60 dni |
| **Xfinity Mobile** | 60 dni aktywnej usługi |
| **US Cellular** | 120 dni |
| **Visible (Verizon prepaid)** | 60 dni opłaconej usługi |

### Czego potrzebujesz, aby poprosić o odblokowanie

Odblokowania są bezpłatne, gdy jesteś uprawniony, ale wniosek wymaga przygotowania kilku rzeczy:

1. **Twój IMEI** — wybierz `*#06#` i weź 15-cyfrowy numer (nie EID).
2. **Numer konta i PIN/hasło konta** — znajdź je w aplikacji operatora lub na ostatnim rachunku.
3. **Telefon w pełni spłacony** — operatorzy nie odblokują urządzenia z otwartym saldem ratalnym.
4. **Spełnione kryteria** — każdy operator ma minimalny okres aktywnych dni (patrz tabele powyżej).

**Gdzie złożyć wniosek:** AT&T i T-Mobile mają portale odblokowania online i formularze w aplikacji; Verizon automatycznie odblokowuje większość telefonów po 60 dniach bez potrzeby składania wniosku. W przypadku MVNO (Cricket, Metro, Boost) użyj ich aplikacji lub zadzwoń bezpośrednio do pomocy technicznej.

**O usługach „natychmiastowego odblokowania" firm trzecich:** to loteria. Wiele używa wyciekłych narzędzi operatorów, które powodują ponowne zablokowanie telefonu, a niektóre to zwykłe oszustwa. Jeśli operator mówi, że nie jesteś jeszcze uprawniony, poczekaj — nie płać obcemu 20 dolarów, aby zrobił to „za" Ciebie.


### Trzy różne blokady

Ludzie mówią „mój telefon jest zablokowany" i mają na myśli trzy zupełnie różne rzeczy. Każda wymaga innej poprawki, więc warto je rozdzielić.

| Typ blokady | Co to jest | Gdzie to widzisz | Poprawka |
| :--- | :--- | :--- | :--- |
| **Blokada telefonu (blokada aktywacji)** | Antykradzieżowa: iCloud Activation Lock (iPhone) lub Google FRP (Android), powiązana z kontem poprzedniego właściciela | „Blokada aktywacji" / „Ten iPhone był powiązany z Apple ID" podczas konfiguracji lub monit o konto Google na Androidzie | Tylko pierwotny właściciel może ją usunąć — nigdy nie kupuj telefonu, który nadal ją wyświetla |
| **Blokada regionu** | Różnica sprzętowa wynikająca z miejsca sprzedaży telefonu (modele chińskie nie mają chipu eUICC) | Brak EID na `*#06#`; numer modelu kończy się na CH/A | Nie można jej usunąć — użyj fizycznej karty SIM lub innego telefonu |
| **Blokada operatora** | Ograniczenie oprogramowania od operatora ograniczające telefon do jego sieci | **Ustawienia > Ogólne > Informacje > Blokada operatora** pokazuje „SIM zablokowany" | Poproś operatora o odblokowanie (Sekcja 3) |

**Szybkie rozróżnienie:**
- Widok **monitu o Apple ID lub konto Google** = blokada telefonu/aktywacji (problem właściciela).
- **Brak EID w ogóle** = blokada regionu (problem sprzętowy).
- **EID obecny + „SIM zablokowany"** = blokada operatora (naprawialna, bezpłatna po spełnieniu kryteriów).

Większość skarg „eSIM nie działa", które przechodzą 2-minutowe sprawdzenie, to przypadki blokady operatora — a ta jest prawie zawsze rozwiązywalna.


## Mój telefon nie obsługuje eSIM, ale powinien

Niektóre urządzenia są reklamowane z eSIM, ale konkretne warianty regionalne lub operatorskie po cichu usuwają tę funkcję. Oto zwykli sprawcy:

- **Samsung Galaxy S20 FE** – wersje zablokowane przez operatorów USA mają funkcję wyłączoną w oprogramowaniu w celu obniżenia kosztów, mimo że model globalny ją obsługuje.
- **Google Pixel 4a (wersje japońskie)** – Docomo i SoftBank wyłączają eSIM na swoich jednostkach z powodu lokalnych umów operatorskich.
- **Xiaomi Redmi Note series** – żaden nie ma chipu eUICC, mimo plotek w internecie. Xiaomi rezerwuje eSIM dla swoich flagowców.
- **iPhone 8 / 8 Plus / X** – sprzęt przed eUICC; Apple dodał chip dopiero od generacji XS/XR.
- **Samsung Galaxy A series** – tylko wybrane modele (A54, A53) mają chip; większość serii A nie ma.

### Telefony, które wyglądają na zgodne z eSIM, ale nie są

| Model telefonu | Obsługa eSIM | Dlaczego? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Nie | Sprzęt przed eUICC |
| **iPhone XS/XR (Chiny)** | ❌ Nie | Sprzęt podwójnego fizycznego SIM |
| **Samsung Galaxy S20 FE (operator USA)** | ❌ Nie | Wyłączony przez operatora |
| **Samsung Galaxy A13 / A23** | ❌ Nie | Model podstawowy, brak eUICC |
| **Google Pixel 4a (Japonia)** | ❌ Nie | Wyłączony przez operatora (Docomo/SoftBank) |
| **Google Pixel 3 (niektóre modele)** | ⚠️ Różnie | Sprawdź region; niektóre mają, niektóre nie |
| **Xiaomi Redmi Note series** | ❌ Nie | Brak sprzętu eUICC |
| **Xiaomi 12/13 (Chiny)** | ❌ Nie | Chińskie wersje krajowe nie mają sprzętu |
| **OnePlus Nord (wersja chińska)** | ❌ Nie | Region Chin nie ma sprzętu |
| **Huawei (wszystkie krajowe chińskie)** | ❌ Nie | Brak usług Google, brak sprzętu eSIM |
| **Motorola G series (większość)** | ❌ Nie | Modele budżetowe nie mają eUICC |

**Co zrobić:** Przed zakupem jakiegokolwiek telefonu wybierz na nim `*#06#` (jeśli masz go w ręku), aby potwierdzić EID, lub przepuść IMEI przez internetowy tester zgodności eSIM. **[Pełna lista telefonów zgodnych z eSIM (2026)](/compatibility/)** to Twoje najlepsze źródło do weryfikacji dowolnego modelu.


## Zgodność eSIM na Androidzie według marki

Jeśli korzystasz z Androida, największą zmienną nie jest system — ale to, czy *Twój konkretny wariant* został wysłany z chipem. Oto obraz model po modelu.

### Zgodność eSIM Samsung Galaxy

| Model | Obsługa eSIM | Uwagi |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Tak | Wszystkie warianty globalne |
| **Galaxy S20 FE** | ❌ Nie (operator USA) / ✅ Tak (globalny) | Sprawdź numer modelu |
| **Galaxy A54 / A53** | ✅ Tak | Tylko wybrane modele serii A |
| **Galaxy A13 / A23 / A33** | ❌ Nie | Modele budżetowe |
| **Galaxy Z Fold / Flip** | ✅ Tak | Wszystkie modele |
| **Galaxy Note 20** | ✅ Tak | Wszystkie modele |

**Jak sprawdzić na Samsungu:** Wybierz `*#06#` i poszukaj EID lub otwórz **Ustawienia > Połączenia > Menedżer karty SIM** i poszukaj „Dodaj eSIM" / „Dodaj plan mobilny". Jeśli żaden nie jest obecny, Twój wariant nie ma funkcji. Więcej informacji znajdziesz w naszym [przewodniku zgodności eSIM Samsung](/faq/samsung-s20-esim-compatible/) i [Samsung Support](https://www.samsung.com/us/support/).

### Zgodność eSIM Google Pixel

| Model | Obsługa eSIM | Uwagi |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Tak | Pierwszy Pixel z tą funkcją |
| **Pixel 3a / 3a XL** | ✅ Tak | – |
| **Pixel 4 / 4 XL** | ✅ Tak | – |
| **Pixel 4a** | ⚠️ Różnie | Wersje operatorów japońskich = NIE |
| **Pixel 5 / 5a** | ✅ Tak | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Tak | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Tak | – |
| **Pixel 8 / 8 Pro** | ✅ Tak | – |

**Jak sprawdzić na Pixelu:** Wybierz `*#06#`, aby uzyskać EID, lub otwórz **Ustawienia > Sieć i internet > SIM-y** i poszukaj „Pobrać SIM zamiast tego?". Jeśli brakuje, wariant jest zablokowany lub nie ma chipu. Więcej informacji znajdziesz w naszym [przewodniku zgodności eSIM Pixel](/faq/google-pixel-6-esim-compatible/) i na stronie [Google Support — eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887).

### Zgodność eSIM OnePlus

OnePlus dodał eSIM dopiero od **OnePlus 12**. OnePlus 11, 10, 9 i seria Nord nie mają sprzętu.

| Model | Obsługa eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Tak |
| **OnePlus 11** | ❌ Nie |
| **OnePlus 10** | ❌ Nie |
| **OnePlus 9** | ❌ Nie |
| **Seria OnePlus Nord** | ❌ Nie (z wyjątkiem niektórych wariantów UE) |

### Xiaomi, Huawei, Motorola i inne marki eSIM

- **Xiaomi** – modele flagowe (globalne wersje Xiaomi 12/13) mogą obsługiwać eSIM, ale krajowe jednostki chińskie nie. Linia Redmi Note nie ma w ogóle eUICC.
- **Huawei** – wsparcie ogranicza się do kilku modeli (P40, Mate 40 i nowsze); wiele telefonów po 2020 roku nie ma eSIM z powodu sankcji USA. Sprawdź **Ustawienia > Sieć komórkowa > eSIM** — jeśli opcja jest nieobecna, nie jest obsługiwana.
- **Motorola** – większość budżetowych modeli serii G nie ma chipu; Moto G Power i linia Edge różnią się w zależności od regionu.

Uniwersalny test dla każdego z nich jest taki sam: wybierz `*#06#` i poszukaj EID.


## Sprawdzenie możliwości eSIM: Android vs iPhone

To samo 2-minutowe sprawdzenie, dwa różne menu. Przekaż tę tabelę znajomemu na innej platformie.

| Sprawdzenie | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Wybierz `*#06#` | Wybierz `*#06#` | Wybierz `*#06#` |
| **Menu Dodaj eSIM** | **Ustawienia > Komórka > Dodaj eSIM** | **Ustawienia > Połączenia > Menedżer karty SIM > Dodaj eSIM** | **Ustawienia > Sieć i internet > SIM-y > Pobrać SIM zamiast tego?** |
| **Numer modelu** | **Ustawienia > Ogólne > Informacje > Numer modelu** | **Ustawienia > Informacje o telefonie > Numer modelu** | **Ustawienia > Informacje o telefonie > Model** |
| **Status blokady** | **Ustawienia > Ogólne > Informacje > Blokada operatora** | **Ustawienia > Informacje o telefonie > Status** | **Ustawienia > Informacje o telefonie > Status SIM** |

**Jedyna różnica, która ma znaczenie:** na iPhone wsparcie eSIM jest wszystko-albo-nic według generacji i regionu — łatwe do przewidzenia. Na Androidzie jest to zależne od wariantu, więc dwa „takie same" telefony Galaxy lub Pixel mogą zachowywać się różnie. W razie wątpliwości na Androidzie zaufaj EID z `*#06#` bardziej niż specyfikacji.


## Twój telefon obsługuje eSIM, ale aktywacja zawodzi

Jeśli Twój telefon przeszedł powyższe sprawdzenie sprzętu, a nadal widzisz konkretny komunikat o błędzie, problem nie dotyczy już zgodności — to problem aktywacji lub sieci. Mają one własne dedykowane źródło:

- **„Activation failed", „No Service", „QR invalid", „Cellular Plan Cannot Be Added", błąd przywracania 4013/4014 i każdy inny błąd na ekranie** → zobacz [Przewodnik głębokiego rozwiązywania problemów z eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/), który mapuje każdy komunikat na poprawkę.
- **Ustawienia APN i pełna tabela APN dostawców** → kanoniczne odniesienie APN znajduje się również w [Przewodniku głębokiego rozwiązywania problemów z eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Aktywacja krok po kroku (QR / ręczna / aplikacja operatora)** → zobacz [Jak aktywować eSIM](/faq/how-to-activate-an-esim/).
- **Przenoszenie profilu na nowy telefon** → zobacz [Jak przenieść eSIM między iPhone a Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Konfiguracja iPad i Apple Watch** → zobacz [przewodnik eSIM iPad i Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Często zadawane pytania

**Dlaczego mój iPhone XR mówi „eSIM nie jest obsługiwany", chociaż powinien działać?**
Jeśli numer modelu kończy się na CH/A, to jednostka z Chin kontynentalnych bez chipu eSIM. W przeciwnym razie sprawdź status blokady operatora — zablokowany XR odrzuci profile innych dostawców.

**Czy mogę wymusić eSIM na iPhone 7?**
Nie. iPhone 7 (oraz 6s, 8 i X) są starsze niż chip eUICC. Żaden hack oprogramowania nie doda sprzętu, którego nie ma.

**Jaka jest różnica między EID a IMEI?**
IMEI (15 cyfr) identyfikuje model telefonu — każdy telefon go ma. EID (32 cyfry) identyfikuje wbudowany chip SIM — tylko telefony obsługujące eSIM go mają. Jeśli `*#06#` nie pokazuje EID, Twój telefon nie może używać eSIM.

**Co oznacza „EID not found" przy wybieraniu `*#06#`?**
Oznacza, że Twój telefon nie ma sprzętowego chipu eUICC wymaganego dla cyfrowych profili SIM. To ograniczenie sprzętowe, którego nie naprawi aktualizacja oprogramowania.

**Mój telefon nie obsługuje eSIM — czy nadal mogę używać eSIM podróżnego?**
Nie. Potrzebujesz wbudowanego chipu, więc fizyczna karta SIM jest jedyną opcją. Wielu dostawców (w tym Roami) sprzedaje również fizyczne karty SIM.

**Skąd mam wiedzieć, czy mój Samsung Galaxy ma eSIM?**
Wybierz `*#06#` — jeśli pojawi się EID, jest obsługiwany. Możesz też sprawdzić Ustawienia > Połączenia > Menedżer karty SIM pod kątem opcji „Dodaj eSIM". Niektóre warianty operatorów USA i serii A ją ukrywają.

**Czy OnePlus 11 obsługuje eSIM?**
Nie. OnePlus dodał eSIM od OnePlus 12. Modele 11, 10, 9 i seria Nord nie mają sprzętu.

**Jak sprawdzić, czy mój iPhone jest zablokowany przez operatora?**
Ustawienia > Ogólne > Informacje > Blokada operatora. „Brak ograniczeń SIM" oznacza, że jest odblokowany. Cokolwiek innego oznacza, że jest zablokowany na tego operatora.

**Które modele iPad obsługują eSIM?**
iPad Pro (3. generacji i nowsze), iPad Air (3. generacji i nowsze), iPad (10. generacji i nowsze) i iPad mini (6. generacji i nowsze) — tylko modele komórkowe. iPady tylko z Wi-Fi nie mają sprzętu eSIM.

**Gdzie mogę znaleźć listę telefonów zgodnych z eSIM?**
[Pełna lista telefonów zgodnych z eSIM (2026)](/compatibility/) obejmuje iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi i inne.

**Jaka jest różnica między blokadą telefonu a blokadą operatora?**
Blokada telefonu (aktywacji) jest antykradzieżowa — iCloud na iPhone, Google FRP na Androidzie — i tylko pierwotny właściciel może ją usunąć. Blokada operatora to ograniczenie sieci, które operator usuwa bezpłatnie, gdy telefon jest spłacony i spełnia kryteria.

**Dlaczego chińskie telefony nie mają eSIM?**
Chiny kontynentalne wymagają, aby krajowe telefony były certyfikowane na podwójny fizyczny SIM, więc Apple i marki Android dostarczają jednostki chińskie z dwoma slotami nano-SIM i bez chipu eUICC. To sprzęt — nie można go włączyć później.

**Czy mogę dodać eSIM do telefonu, który nie ma EID?**
Nie. Chip eUICC jest przylutowany do płyty głównej. Nie ma adaptera, aplikacji, jailbreaka ani aktualizacji oprogramowania, które dodają sprzęt, który nigdy nie został zainstalowany.

**Czy przywrócenie ustawień fabrycznych naprawia „eSIM nie jest obsługiwany"?**
Nie. Reset nie zmienia sprzętu ani nie usuwa blokady operatora. Może jednak wyczyścić uszkodzony na wpół zainstalowany profil, więc warto spróbować w przypadku usterek oprogramowania — po wykonaniu kopii zapasowej.

**Do czego służy EID, gdy dostawca o niego prosi?**
EID pozwala dostawcy powiązać konkretny profil eSIM z chipem Twojego telefonu przed skanowaniem. Dzięki temu wiedzą, że plan jest przeznaczony dla Twojego dokładnego urządzenia — pomyśl o tym jako o „adresie" eSIM.

**Jak sprawdzić, czy mój telefon jest odblokowany, nie wkładając karty SIM?**
iPhone: Ustawienia > Ogólne > Informacje > Blokada operatora — „Brak ograniczeń SIM" oznacza odblokowany. Android: Ustawienia > Informacje o telefonie > Status (lub status SIM) i poszukaj sformułowania „SIM zablokowany" lub „SIM niezablokowany".

👉 **Potwierdziłeś, że Twój telefon jest zdolny?** Zdobądź [eSIM dla USA](/united-states-esim/) lub [eSIM dla Japonii](/japan-esim/), aby się połączyć.


## Przetestuj swoją zgodność z darmowym eSIM

Najszybszym sposobem, aby potwierdzić, że Twój telefon może faktycznie używać eSIM, jest zainstalowanie **darmowego eSIM próbnego**. Nic nie kosztuje, zajmuje 2 minuty, a jeśli się zainstaluje i połączy, Twój sprzęt jest gotowy.

👉 [**Zdobądź swój darmowy eSIM Roami teraz**](/free-esim/)

---

*Jeśli Twoje konkretne urządzenie lub błąd nie jest tutaj omówiony, skontaktuj się z nami, a pomożemy Ci potwierdzić, czy Twój telefon obsługuje eSIM.*
## Źródła

- [GSMA — specyfikacja eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Wsparcie Apple — konfiguracja eSIM na iPhone](https://support.apple.com/en-us/HT212780)
- [Wsparcie Google — konfiguracja eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Wsparcie Google — eSIM na Androidzie](https://support.google.com/android/answer/11241215)