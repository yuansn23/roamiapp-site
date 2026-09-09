---
title: "eSIM nie działa? Napraw błędy kompatybilności w 2026"
h1_title: "Jak naprawić eSIM nie działa: błędy kompatybilności w 2026"
description: "Masz problemy z błędami eSIM? Dowiedz się, jak naprawić błędy aktywacji, problemy z przenoszeniem i pętle rozruchowe na iPhonie i Androidzie. Zdiagnozuj swój telefon w 2 minuty."
image: "/img/esim/esim-troubleshooting-guide.jpg"
keywords: ["esim nie działa", "esim nieobsługiwany", "esim niekompatybilny iphone", "nie można aktywować esim", "sieć esim niedostępna", "esim nie przenosi się na nowy iphone", "przypadkowo usunięto esim", "profil esim wygasł", "kod QR esim nieprawidłowy", "jak naprawić esim na iphone", "błąd przenoszenia esim", "esim brak usługi"]
date: 2026-09-08T10:00:00Z
lastmod: 2026-09-08T00:00:00Z
tags: ["eSIM", "Rozwiązywanie problemów", "Błędy aktywacji", "iPhone", "Android"]
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


> **Nota redakcyjna:** Roami co miesiąc obsługuje tysiące zgłoszeń "moja eSIM nie działa", a znaczna ich część okazuje się być problemem z telefonem, a nie z planem. Ten przewodnik odpowiada na pytanie, które powinieneś zadać przed wszystkim innym: *czy mój telefon w ogóle jest w stanie korzystać z eSIM?* Przeprowadzimy Cię przez 2-minutową kontrolę sprzętu, wyjątki dla modeli chińsko-hongkońskich oraz blokady operatora — abyś nie tracił godziny na kroki aktywacji, które nigdy nie zadziałają na Twoim urządzeniu.

> **Szukasz poprawki dla konkretnego kodu błędu?** Jeśli Twój telefon przejdzie poniższą kontrolę sprzętu, ale widzisz konkretny komunikat ("Aktywacja nie powiodła się", "Brak usługi", "Nieprawidłowy kod QR", błąd przywracania 4013/4014), to inny problem. Przejdź do naszego [Przewodnika zaawansowanego rozwiązywania problemów z eSIM](/faq/esim-deep-troubleshooting-guide-2026/) dla odniesienia błąd po błędzie.

## Zacznij tutaj: 2-minutowe sprawdzenie "Czy mój telefon w ogóle jest w stanie?"

Zanim otworzysz Ustawienia, zeskanujesz kod QR lub skontaktujesz się z pomocą, potwierdź, że Twój telefon faktycznie ma wymagany sprzęt do wbudowanej karty SIM. To jedno sprawdzenie eliminuje natychmiast około połowy przypadków "eSIM nie działa".

### Uniwersalne sprawdzenie EID (działa na każdym telefonie)

Otwórz wybierak numeru w telefonie i wpisz:

> **`*#06#`**

- Jeśli pojawi się ekran z **32-cyfrowym EID** (identyfikatorem eUICC), Twój telefon ma wbudowany układ potrzebny do aktywacji cyfrowej karty SIM. ✅
- Jeśli ekran pokazuje tylko numery **IMEI** i brak EID, sprzęt nie jest obecny. ❌

**Co zrobić, jeśli nie pojawi się EID:** Zatrzymaj się tutaj. Żadna aktualizacja oprogramowania, hack ani metoda "na siłę" nie może dodać brakującego układu — to fizyczny brak sprzętu. Użyj fizycznej karty SIM lub sprawdź Poprawkę #4 dla telefonów, które *wyglądają*, jakby powinny obsługiwać eSIM, ale nie obsługują.

### EID vs IMEI vs ICCID – co oznacza każdy numer

| Identyfikator | Co to jest | Co mówi |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 cyfr) | Identyfikuje model telefonu — każdy telefon ma jeden |
| **EID** | eUICC Identifier (32 cyfry) | Potwierdza obecność układu wbudowanej karty SIM — tylko telefony z eSIM mają go |
| **ICCID** | Integrated Circuit Card Identifier (19–20 cyfr) | Identyfikuje konkretny profil eSIM po instalacji |

> **Kluczowa wskazówka:** EID = obecność sprzętu. Jeśli widzisz EID, Twój telefon jest fizycznie zdolny do eSIM. Jeśli nie, nic, co zainstalujesz, tego nie zmieni.

### Gdzie znaleźć każdy numer (szybkie ścieżki)

Wszystkie trzy numery są widoczne, gdy znasz menu. Oto najkrótsza droga do każdego:

| Identyfikator | Najszybszy sposób | Lokalizacja zapasowa |
| :--- | :--- | :--- |
| **IMEI (15 cyfr)** | Wybierz `*#06#` — to pierwszy pokazany numer | iPhone: **Ustawienia > Ogólne > Informacje**. Android: **Ustawienia > Informacje o telefonie** |
| **EID (32 cyfry)** | Wybierz `*#06#` i przewiń — to długi zaczynający się od **8904** | iPhone: **Ustawienia > Ogólne > Informacje > EID**. Samsung: **Ustawienia > Informacje o telefonie > Status** |
| **ICCID (19–20 cyfr)** | Pojawia się dopiero po instalacji profilu | iPhone: **Ustawienia > Ogólne > Informacje**. Android: **Ustawienia > Informacje o telefonie > Status karty SIM** |

> **Praktyczna wskazówka:** każdy EID zaczyna się od **"8904"** — ten prefiks oznacza go jako identyfikator eUICC. Jeśli długi numer na ekranie zaczyna się od czegoś innego, czytasz niewłaściwą wartość.

### Test przycisku "Dodaj eSIM" (iPhone)

Jeśli `*#06#` pokazuje EID, ale nadal widzisz "eSIM nieobsługiwane", otwórz **Ustawienia > Komórkowe** i poszukaj **"Dodaj eSIM"** lub **"Dodaj plan komórkowy"**. Jeśli opcja jest dostępna, ale nie działa podczas skanowania, najprawdopodobniej masz do czynienia z **blokadą operatora** lub **ograniczeniem regionalnym** — oba opisane poniżej.

### Metoda wyszukiwania w Ustawieniach (iPhone i Android)

Nie masz pod ręką wybieraka (niektóre tablety i składane urządzenia go chowają), albo `*#06#` pokazał mylący ekran? Pasek wyszukiwania w telefonie to drugie najszybsze sprawdzenie.

- **iPhone:** Otwórz **Ustawienia**, przeciągnij w dół od góry listy, aby wyświetlić pole wyszukiwania, i wpisz **"eSIM"**. Wynik **"Dodaj eSIM"** lub **"Dodaj plan komórkowy"** oznacza, że funkcja jest aktywna.
- **Samsung:** Otwórz **Ustawienia**, kliknij ikonę **lupy** u góry i wpisz **"eSIM"**. Jeśli pojawi się **"Menedżer kart SIM"** (lub "Dodaj plan mobilny"), Twój wariant ma układ.
- **Pixel:** Otwórz **Ustawienia > Sieć i internet > Karty SIM**. Jeśli widzisz **"Pobierz kartę SIM zamiast?"**, jest dobrze. Ekran pokazujący tylko fizyczną kartę SIM — bez opcji pobierania — oznacza brak układu eUICC.

> **Brak wyniku wyszukiwania = brak sprzętu.** Jeśli telefon sprzedany po około 2018 roku nie zwraca nic dla "eSIM" w wyszukiwaniu Ustawień, prawie na pewno masz wariant regionalny lub budżetowy, który został sprzedany bez układu.

### Sprawdzenie numeru modelu (najszybsze potwierdzenie)

Kupujesz używany telefon lub sprawdzasz telefon, którego nie można włączyć? Numer modelu rozstrzyga to w kilka sekund.

- **iPhone:** **Ustawienia > Ogólne > Informacje > Numer modelu**, następnie kliknij numer, aby wyświetlić **identyfikator z prefiksem A** (np. **A2111**). Litery przed **/A** w numerze części kodują region sprzedaży — pełna mapa sufiksów znajduje się w Sekcji 2.
- **Samsung:** **Ustawienia > Informacje o telefonie > Numer modelu** (np. **SM-S921U1**). Ostatni znak jest kluczowy: **U** = amerykański operator, **U1** = amerykański odblokowany, **B** = Europa/globalny, **0** = Chiny/Hongkong (Snapdragon).
- **Pixel:** **Ustawienia > Informacje o telefonie > Model**. Ciągi modeli Pixel różnią się w zależności od regionu i operatora — Japonia i niektóre amerykańskie warianty operatorskie ograniczają eSIM, więc sprawdź dokładny kod lub wybierz `*#06#`.

> **Zasada:** jeśli numer modelu kończy się sufiksem chińskim/regionalnym (lub sufiksem amerykańskiego operatora na Samsungu), zweryfikuj za pomocą `*#06#`, zanim założysz, że eSIM działa. Numer modelu plus EID razem dają 100% odpowiedź.

### Dlaczego telefon może pokazywać EID, ale nadal odmawiać eSIM

| Scenariusz | EID obecny? | eSIM działa? | Dlaczego? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR i nowsze (globalne) | ✅ Tak | ✅ Tak | Pełne wsparcie dla profili cyfrowych SIM |
| iPhone XS/XR (model chiński) | ❌ Nie | ❌ Nie | Sprzęt usunięty na rzecz podwójnej fizycznej SIM |
| Samsung S20 FE (amerykański operator) | ✅ Tak | ❌ Nie | Operator wyłączył funkcję w oprogramowaniu |
| Google Pixel 4a (Japonia) | ✅ Tak | ❌ Nie | Operator zablokował funkcjonalność |
| iPhone z blokadą operatora (AT&T/T-Mobile) | ✅ Tak | ❌ Nie (dla innych operatorów) | Blokada sieci blokuje profile innych dostawców |
| iPhone odblokowany (dowolny region) | ✅ Tak | ✅ Tak | Pełne wsparcie |


## 1. "eSIM nieobsługiwane" / "Niekompatybilne" na iPhonie

Jeśli widzisz **"eSIM nieobsługiwane"**, **"ta eSIM nie jest kompatybilna z tym iPhonem"** lub po prostu **"eSIM niekompatybilna iPhone"**, przyczyną jest prawie zawsze jedna z pięciu rzeczy — i każda z nich dotyczy Twojego *urządzenia*, a nie planu.

### A. Twój model iPhone'a poprzedza sprzęt eSIM

Tylko iPhone'y od **XR, XS, XS Max (2018) i nowsze** mają wbudowany układ. iPhone 8, 8 Plus i iPhone X nie mają go, więc zwracają **"eSIM nieobsługiwane"** bez względu na to, co spróbujesz. Układ eUICC po prostu nie jest obecny na tych płytkach — to ograniczenie sprzętowe, a nie problem z ustawieniami.

**Szybkie sprawdzenie:** Wybierz `*#06#`. 32-cyfrowy EID oznacza, że jest dobrze; tylko IMEI oznacza, że nie jest.

**Co zrobić:** Użyj fizycznej karty SIM lub uaktualnij do iPhone'a XR lub nowszego. Oficjalna lista znajduje się na [Apple Support — eSIM na iPhonie](https://support.apple.com/en-us/118670).

### B. Twój iPhone to model z Chin kontynentalnych

iPhone'y sprzedawane w Chinach kontynentalnych są wyposażone w **dwa fizyczne gniazda SIM i brak sprzętu eSIM**. Chińskie przepisy promują w smartfonach podwójną fizyczną SIM, więc Apple usunął wbudowany układ w tych egzemplarzach. Nawet jeśli pojawi się opcja "Dodaj plan komórkowy", nie zostanie ukończona — to najczęstsza przyczyna "eSIM niekompatybilna z tym iPhonem" wśród kupujących, którzy nabyli urządzenie w Chinach lub przez niektórych sprzedawców.

**Jak zidentyfikować:** **Ustawienia > Ogólne > Informacje > Numer modelu**. Jeśli kończy się na **"CH/A"**, to model z Chin kontynentalnych. (Pełna tabela sufiksów w Sekcji 2 poniżej.)

**Co zrobić:** Nie ma sposobu na włączenie eSIM na urządzeniu CH/A. Użyj fizycznej karty SIM podróżnej lub sprzedaj telefon i kup wersję globalną.

### C. Twój iPhone jest zablokowany przez operatora

Niektórzy operatorzy — zwłaszcza amerykańscy — blokują iPhone'y do własnej sieci. Próba aktywacji profilu od innego dostawcy (np. eSIM podróżnej) zwraca wtedy "eSIM nieobsługiwane" lub komunikat "operator nie obsługuje". Pamiętaj, że niektórzy operatorzy blokują tylko fizyczne gniazdo SIM, pozostawiając eSIM otwarte, ale wielu blokuje oba.

**Jak sprawdzić:** **Ustawienia > Ogólne > Informacje > Blokada operatora**. Powinno być **"Brak ograniczeń SIM"**. Jeśli jest "SIM zablokowana", potrzebujesz odblokowania. Zobacz Sekcję 3 dla pełnego przewodnika po blokadzie operatora.

### D. Nieaktualna wersja iOS

Wsparcie dla cyfrowych SIM znacznie poprawiło się w iOS 16 i nowszych. Na iOS 12 lub 13 niektóre nowoczesne profile operatorów po prostu się nie zainstalują.

**Jak sprawdzić:** **Ustawienia > Ogólne > Aktualizacja oprogramowania**.

**Co zrobić:** Zaktualizuj do najnowszego iOS, usuń wszelkie częściowo zainstalowane profile, a następnie ponownie zeskanuj kod QR.

### E. "Ten iPhone nie obsługuje eSIM" – na iPhonie 14?

iPhone 14 (wersja amerykańska) zawsze powinien obsługiwać eSIM — model amerykański nie ma w ogóle fizycznej tacki SIM. Jeśli mimo to zwraca ten błąd, masz do czynienia z rzadką **awarią sprzętu eUICC**. Skontaktuj się z Apple Support w celu diagnozy sprzętowej, zamiast szukać ustawień.

Pełną listę modeli iPhone'a znajdziesz w naszym [przewodniku kompatybilności eSIM dla iPhone'a](/faq/iphone-11-esim-compatible/). Dla Samsunga zobacz [przewodnik Samsung Galaxy eSIM](/faq/samsung-s20-esim-compatible/), a dla Pixela [przewodnik Google Pixel eSIM](/faq/google-pixel-6-esim-compatible/).


## "eSIM nieobsługiwane" – sprzęt vs oprogramowanie vs operator

Każdy przypadek "eSIM nieobsługiwane" — na dowolnym telefonie, dowolnym operatorze — należy do jednego z trzech koszyków. Nazwanie koszyka natychmiast mówi, czy problem można naprawić.

| Koszyk | Jak wygląda | Do naprawienia? | Twoje działanie |
| :--- | :--- | :--- | :--- |
| **Sprzęt** | Brak EID na `*#06#`; iPhone sprzed 2018; model chiński (CH/A); budżetowy Android bez eUICC | ❌ Nie | Fizyczna SIM lub uaktualnienie telefonu |
| **Oprogramowanie** | EID obecny, ale funkcja ukryta lub system stary (wyłączony przez operatora Samsung S20 FE, nieaktualny iOS) | ✅ Zazwyczaj | Zaktualizuj system lub usuń ograniczenie operatora |
| **Operator** | EID obecny, menu widoczne, ale aktywacja planu innego dostawcy kończy się niepowodzeniem | ✅ Tak | Odblokuj urządzenie (Sekcja 3), następnie zeskanuj ponownie |

**30-sekundowy test routingu:** wybierz `*#06#`.
- **Brak EID** → sprzęt. Zatrzymaj się tutaj — nic, co zainstalujesz, tego nie zmieni.
- **EID obecny, ale proces "Dodaj eSIM" kończy się niepowodzeniem** → oprogramowanie lub operator. Oba są do naprawienia, więc czytaj dalej.

Ten pojedynczy wynik kieruje Cię do właściwej poprawki w około 9 na 10 zgłoszeń "nieobsługiwane", które widzimy w Roami.


## 2. Przewodnik po modelach Chiny / Hongkong / Makau

Miejsce sprzedaży telefonu określa, jaki ma sprzęt. To najszybszy sposób, aby wykluczyć lub potwierdzić regionalną sytuację braku eSIM.

### Szybkie odniesienie do modeli chińskich (według sufiksu numeru modelu)

| Zakończenie numeru modelu | Region | Obsługa eSIM |
| :--- | :--- | :--- |
| **CH/A** | Chiny kontynentalne | ❌ Nie (podwójna fizyczna SIM) |
| **HK/A** | Hongkong | ⚠️ Różnie (niektóre modele obsługują fizyczną + cyfrową SIM) |
| **LL/A** | USA | ✅ Tak |
| **ZA/A** | Kanada | ✅ Tak |
| **J/A** | Japonia | ✅ Tak (z wyjątkiem niektórych modeli operatorskich) |
| **B/A** | Wielka Brytania/Europa | ✅ Tak |
| **X/A** | Australia/Nowa Zelandia | ✅ Tak |

### Chiny kontynentalne

- **Wszystkie iPhone'y sprzedawane w Chinach kontynentalnych** (z wyjątkiem serii iPhone 16) mają podwójną fizyczną SIM i brak eSIM.
- **Chińskie telefony z Androidem** — Xiaomi, Oppo, Vivo, Huawei — sprzedawane lokalnie również zazwyczaj nie mają układu eSIM.
- **Jeśli wwozisz międzynarodowy telefon do Chin:** będzie działać z międzynarodowymi eSIM podróżnymi, ale lokalni chińscy operatorzy nie oferują eSIM turystom, więc nadal będziesz potrzebować planu podróżnego od dostawcy takiego jak Roami.

### Hongkong

- **Modele iPhone:** Hongkońskie iPhone'y zazwyczaj obsługują **eSIM + fizyczną SIM** (jedną z każdego) lub podwójną fizyczną SIM w zależności od dokładnego modelu. Sprawdź swój sufiks modelu.
- **Operatorzy:** niektórzy hongkońscy operatorzy (CMHK, 1010, SmarTone) oferują eSIM klientom postpaid, ale eSIM prepaid jest rzadka.
- **Podróżni:** międzynarodowa eSIM podróżna jest prostsza i bardziej niezawodna niż próba uzyskania lokalnej hongkońskiej eSIM.

### Makau

- **Podobnie jak Hongkong:** większość iPhone'ów w Makau jest importowana z Hongkongu i obsługuje eSIM + fizyczną SIM.
- **CTM** (główny operator Makau) oferuje eSIM klientom postpaid, ale nie turystom.

### Dlaczego modele chińskie pomijają eSIM (powód stojący za zasadą CH/A)

To nie jest cięcie kosztów przez Apple lub marki Android — to regulacje. Chiny kontynentalne wymagają, aby telefony sprzedawane tam były certyfikowane dla podwójnej fizycznej SIM, a profil eSIM wielokrotnego zapisu nie pasuje do tego krajowego frameworku. Praktyczny wynik:

- **Apple** wysyła iPhone'y z Chin kontynentalnych z **dwoma fizycznymi gniazdami nano-SIM** i bez układu eUICC.
- **Xiaomi, Oppo, Vivo, Honor i Huawei** usuwają eSIM z wersji dla Chin kontynentalnych, nawet gdy globalna wersja tego samego telefonu ma ją.
- **Chiński telefon wywieziony za granicę nadal nie odzyska eSIM** — to brak sprzętu, a nie blokada oprogramowania. Odwrotna sytuacja jest również prawdziwa: międzynarodowy telefon wjeżdżający do Chin działa z eSIM podróżnymi, ale trzej główni chińscy operatorzy (China Mobile, China Unicom, China Telecom) nie sprzedają eSIM turystom.

**Poprawka:** jeśli kupiłeś telefon w Chinach kontynentalnych, zaplanuj fizyczną kartę SIM podróżną — lub kup telefon w wersji globalnej. Nie ma odblokowania, jailbreak'a ani aplikacji, która doda brakujący układ.

### Identyfikacja modelu według numeru A (przykłady)

Sufiks numeru części (CH/A, LL/A itd.) to szybki filtr, ale **numer A** to precyzyjny identyfikator. Weź iPhone'a 11 jako wzór, który każda generacja podąża:

| Model iPhone 11 | Region | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Stany Zjednoczone | ✅ Tak |
| **A2221** | Chiny kontynentalne | ❌ Nie (podwójna fizyczna SIM) |
| **A2223** | Hongkong / Makau | ✅ Tak (eSIM + fizyczna) |

**Jak użyć:** znajdź swój numer A (**Ustawienia > Ogólne > Informacje > Numer modelu**, następnie kliknij numer, aby wyświetlić kod z prefiksem A) i dopasuj go do listy modeli Apple. Jeśli sprzedawca zareklamował "odblokowany globalny iPhone z eSIM", ale numer A jest kodem chińskim, oferta była błędna — zrezygnuj lub zaplanuj fizyczną SIM.


## 3. Blokada operatora – co to jest i jak ją usunąć

Blokada operatora to drugi najczęstszy powód, dla którego w pełni sprawny telefon odmawia eSIM. To ograniczenie oprogramowania nałożone przez operatora, a nie limit sprzętowy.

### Co robi blokada operatora

Gdy telefon jest "zablokowany SIM", akceptuje tylko karty SIM i profile eSIM od operatora, który go sprzedał. Próba dodania eSIM podróżnej od innego dostawcy wywołuje "eSIM nieobsługiwane" lub "SIM nieobsługiwana". Wbudowany układ jest obecny i działa — operator po prostu blokuje do niego dostęp.

### Jak sprawdzić status blokady

1. Na iPhonie: **Ustawienia > Ogólne > Informacje > Blokada operatora**. Powinno być **"Brak ograniczeń SIM"**.
2. Na Androidzie (Samsung): **Ustawienia > Informacje o telefonie > Status** i poszukaj pola blokady SIM.
3. Na Androidzie (Pixel): **Ustawienia > Informacje o telefonie > Status SIM**.

### Zasady odblokowywania amerykańskich operatorów

| Operator | Wymaganie odblokowania |
| :--- | :--- |
| **AT&T** | Urządzenie w pełni opłacone i aktywne przez 60 dni przed odblokowaniem |
| **T-Mobile** | Urządzenie opłacone i aktywne przez 40 dni; wniosek przez aplikację T-Mobile |
| **Verizon** | Większość telefonów odblokowuje się automatycznie 60 dni po zakupie |

### Jak odblokować urządzenie

1. **Poproś o odblokowanie u swojego operatora** — zazwyczaj jest bezpłatne, gdy telefon jest opłacony, a większość amerykańskich operatorów pozwala na złożenie wniosku przez aplikację lub formularz internetowy.
2. **Poczekaj na potwierdzenie** — operator wysyła odblokowanie; może być potrzebny restart telefonu.
3. **Zweryfikuj** — ponownie sprawdź pole Blokada operatora, aż będzie "Brak ograniczeń SIM".
4. **Następnie aktywuj** — po odblokowaniu ponownie zeskanuj kod QR eSIM podróżnej.

> **Uwaga:** blokada operatora to ograniczenie na poziomie telefonu, a nie planu. Odblokowanie urządzenia nie anuluje umowy — po prostu uwalnia urządzenie do korzystania z kart SIM i eSIM innych dostawców.

### Więcej amerykańskich operatorów i polityk odblokowywania MVNO

Wielka trójka to nie jedyni, na których ludzie trafiają. Telefony prepaid i MVNO są często blokowane dłużej, co może być podstępnym powodem, dla którego "świetna oferta" eSIM podróżnej nie chce się zainstalować.

| Operator | Wymaganie odblokowania |
| :--- | :--- |
| **Cricket Wireless** | 6 miesięcy płatnej usługi (chyba że zakupiony w pełnej cenie detalicznej) |
| **Metro by T-Mobile** | 180 dni płatnej usługi |
| **Boost Mobile** | 12 miesięcy płatnej usługi |
| **Spectrum Mobile** | 60 dni |
| **Xfinity Mobile** | 60 dni aktywnej usługi |
| **US Cellular** | 120 dni |
| **Visible (Verizon prepaid)** | 60 dni płatnej usługi |

### Co jest potrzebne do wniosku o odblokowanie

Odblokowania są bezpłatne, gdy spełniasz warunki, ale wniosek wymaga kilku rzeczy:

1. **Twój IMEI** — wybierz `*#06#` i pobierz 15-cyfrowy numer (nie EID).
2. **Numer konta i PIN/hasło konta** — znajdź je w aplikacji operatora lub na ostatnim rachunku.
3. **Telefon w pełni opłacony** — operatorzy nie odblokują urządzenia z otwartym saldem ratalnym.
4. **Spełnione warunki** — każdy operator ma minimalny okres aktywnych dni (patrz tabele powyżej).

**Gdzie złożyć wniosek:** AT&T i T-Mobile mają internetowe portale odblokowywania i formularze w aplikacjach; Verizon automatycznie odblokowuje większość telefonów po 60 dniach bez potrzeby wniosku. Dla MVNO (Cricket, Metro, Boost) użyj ich aplikacji lub skontaktuj się bezpośrednio z pomocą.

**W kwestii usług "natychmiastowego odblokowania" firm trzecich:** to ryzyko. Wiele z nich używa wyciekłych narzędzi operatorskich, które powodują ponowne zablokowanie telefonu, a niektóre to zwykłe oszustwa. Jeśli operator mówi, że nie spełniasz jeszcze warunków, poczekaj — nie płac obcemu 20 $, aby zrobił to "za Ciebie".


## Trzy różne "blokady" (i dlaczego mają znaczenie)

Ludzie mówią "mój telefon jest zablokowany" i mają na myśli trzy zupełnie różne rzeczy. Każda wymaga innej poprawki, więc warto je rozróżnić.

| Rodzaj blokady | Co to jest | Gdzie to widzisz | Poprawka |
| :--- | :--- | :--- | :--- |
| **Blokada telefonu (blokada aktywacji)** | Zabezpieczenie antykradzieżowe: iCloud Activation Lock (iPhone) lub Google FRP (Android), powiązane z kontem poprzedniego właściciela | "Blokada aktywacji" / "Ten iPhone był powiązany z Apple ID" podczas konfiguracji lub monit o konto Google na Androidzie | Tylko oryginalny właściciel może ją usunąć — nigdy nie kupuj telefonu, który nadal ją pokazuje |
| **Blokada regionalna** | Różnica sprzętowa wynikająca z miejsca sprzedaży telefonu (modele chińskie nie mają układu eUICC) | Brak EID na `*#06#`; numer modelu kończy się na CH/A | Nie można usunąć — użyj fizycznej SIM lub innego telefonu |
| **Blokada operatora** | Ograniczenie oprogramowania od operatora ograniczające telefon do jego sieci | **Ustawienia > Ogólne > Informacje > Blokada operatora** pokazuje "SIM zablokowana" | Poproś o odblokowanie u operatora (Sekcja 3) |

**Szybkie rozróżnienie:**
- Widzisz **monit o Apple ID lub konto Google** = blokada telefonu/aktywacji (problem właściciela).
- **Brak EID** = blokada regionalna (problem sprzętowy).
- **EID obecny + "SIM zablokowana"** = blokada operatora (do naprawienia, bezpłatnie po spełnieniu warunków).

Większość zgłoszeń "eSIM nie działa", które przetrwają 2-minutowe sprawdzenie, jest typu blokady operatora — i ta jest prawie zawsze do rozwiązania.


## 4. "Mój telefon nie obsługuje eSIM" – ale powinien

Niektóre urządzenia są reklamowane z eSIM, ale konkretne warianty regionalne lub operatorskie po cichu pomijają tę funkcję. Oto zwykli winowajcy:

- **Samsung Galaxy S20 FE** – amerykańskie wersje zablokowane przez operatora mają funkcję wyłączoną w oprogramowaniu w celu cięcia kosztów, mimo że model globalny ją obsługuje.
- **Google Pixel 4a (wersje japońskie)** – Docomo i SoftBank wyłączają eSIM na swoich egzemplarzach z powodu lokalnych umów operatorskich.
- **Xiaomi Redmi Note series** – żaden nie ma układu eUICC, mimo plotek w internecie. Xiaomi zastrzega eSIM dla swoich flagowców.
- **iPhone 8 / 8 Plus / X** – sprzęt przed eUICC; Apple dodał układ dopiero od generacji XS/XR.
- **Samsung Galaxy A series** – tylko wybrane modele (A54, A53) mają układ; większość serii A nie ma.

### "Wygląda, jakby powinien obsługiwać eSIM, ale faktycznie nie" – pełna lista

| Model telefonu | Obsługa eSIM | Dlaczego? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Nie | Sprzęt przed eUICC |
| **iPhone XS/XR (Chiny)** | ❌ Nie | Sprzęt z podwójną fizyczną SIM |
| **Samsung Galaxy S20 FE (amerykański operator)** | ❌ Nie | Wyłączony przez operatora |
| **Samsung Galaxy A13 / A23** | ❌ Nie | Model podstawowy, brak eUICC |
| **Google Pixel 4a (Japonia)** | ❌ Nie | Wyłączony przez operatora (Docomo/SoftBank) |
| **Google Pixel 3 (niektóre modele)** | ⚠️ Różnie | Sprawdź region; niektóre mają, inne nie |
| **Xiaomi Redmi Note series** | ❌ Nie | Brak sprzętu eUICC |
| **Xiaomi 12/13 (Chiny)** | ❌ Nie | Wersje chińskie nie mają sprzętu |
| **OnePlus Nord (wersja chińska)** | ❌ Nie | Region chiński nie ma sprzętu |
| **Huawei (wszystkie wersje chińskie)** | ❌ Nie | Brak usług Google, brak sprzętu eSIM |
| **Motorola G series (większość)** | ❌ Nie | Modele budżetowe nie mają eUICC |

**Co zrobić:** Przed zakupem telefonu wybierz na nim `*#06#` (jeśli masz go w ręku), aby potwierdzić EID, lub przepuść IMEI przez internetowy sprawdzacz kompatybilności eSIM. **[Pełna lista telefonów kompatybilnych z eSIM (2026)](/compatibility/)** jest najlepszym źródłem do weryfikacji każdego modelu.


## 5. Kompatybilność sprzętowa Androida według marek

Jeśli jesteś na Androidzie, największą zmienną nie jest system operacyjny — ale czy *Twój konkretny wariant* został dostarczony z układem. Oto obraz model po modelu.

### Samsung Galaxy

| Model | Obsługa eSIM | Uwagi |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Tak | Wszystkie warianty globalne |
| **Galaxy S20 FE** | ❌ Nie (amerykański operator) / ✅ Tak (globalny) | Sprawdź numer modelu |
| **Galaxy A54 / A53** | ✅ Tak | Tylko wybrane modele serii A |
| **Galaxy A13 / A23 / A33** | ❌ Nie | Modele budżetowe |
| **Galaxy Z Fold / Flip** | ✅ Tak | Wszystkie modele |
| **Galaxy Note 20** | ✅ Tak | Wszystkie modele |

**Jak sprawdzić na Samsungu:** Wybierz `*#06#` i poszukaj EID, lub otwórz **Ustawienia > Połączenia > Menedżer kart SIM** i poszukaj "Dodaj eSIM" / "Dodaj plan mobilny". Jeśli żadne nie jest obecne, Twój wariant nie ma tej funkcji. Więcej informacji znajdziesz w naszym [przewodniku kompatybilności eSIM dla Samsunga](/faq/samsung-s20-esim-compatible/) i na [Samsung Support](https://www.samsung.com/us/support/).

### Google Pixel

| Model | Obsługa eSIM | Uwagi |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Tak | Pierwszy Pixel z tą funkcją |
| **Pixel 3a / 3a XL** | ✅ Tak | – |
| **Pixel 4 / 4 XL** | ✅ Tak | – |
| **Pixel 4a** | ⚠️ Różnie | Wersje japońskie = NIE |
| **Pixel 5 / 5a** | ✅ Tak | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Tak | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Tak | – |
| **Pixel 8 / 8 Pro** | ✅ Tak | – |

**Jak sprawdzić na Pixelu:** Wybierz `*#06#` dla EID lub otwórz **Ustawienia > Sieć i internet > Karty SIM** i poszukaj "Pobierz kartę SIM zamiast?". Jeśli brakuje, wariant jest zablokowany lub nie ma układu. Więcej informacji znajdziesz w naszym [przewodniku kompatybilności eSIM dla Pixela](/faq/google-pixel-6-esim-compatible/) i na stronie [Google Support — eSIM na Pixelu](https://support.google.com/pixelphone/answer/7086887).

### OnePlus

OnePlus dodał eSIM dopiero od **OnePlus 12**. OnePlus 11, 10, 9 i seria Nord nie mają sprzętu.

| Model | Obsługa eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Tak |
| **OnePlus 11** | ❌ Nie |
| **OnePlus 10** | ❌ Nie |
| **OnePlus 9** | ❌ Nie |
| **OnePlus Nord series** | ❌ Nie (z wyjątkiem niektórych wariantów UE) |

### Xiaomi, Huawei, Motorola i inne

- **Xiaomi** – modele flagowe (Xiaomi 12/13 wersje globalne) mogą obsługiwać eSIM, ale jednostki krajowe z Chin nie. Linia Redmi Note nie ma w ogóle eUICC.
- **Huawei** – obsługa ograniczona do kilku modeli (P40, Mate 40 i nowsze); wiele telefonów po 2020 roku nie ma eSIM z powodu sankcji USA. Sprawdź **Ustawienia > Sieć mobilna > eSIM** — jeśli brakuje opcji, nie jest obsługiwana.
- **Motorola** – większość modeli z serii G nie ma układu; Moto G Power i Edge różnią się w zależności od regionu.

Uniwersalny test dla każdego z nich jest taki sam: wybierz `*#06#` i poszukaj EID.


## Android vs iPhone: sprawdzenie możliwości obok siebie

To samo 2-minutowe sprawdzenie, dwa różne menu. Przekaż tę tabelę znajomemu na drugiej platformie.

| Sprawdzenie | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Wybierz `*#06#` | Wybierz `*#06#` | Wybierz `*#06#` |
| **Menu Dodaj eSIM** | **Ustawienia > Komórkowe > Dodaj eSIM** | **Ustawienia > Połączenia > Menedżer kart SIM > Dodaj eSIM** | **Ustawienia > Sieć i internet > Karty SIM > Pobierz kartę SIM zamiast?** |
| **Numer modelu** | **Ustawienia > Ogólne > Informacje > Numer modelu** | **Ustawienia > Informacje o telefonie > Numer modelu** | **Ustawienia > Informacje o telefonie > Model** |
| **Status blokady** | **Ustawienia > Ogólne > Informacje > Blokada operatora** | **Ustawienia > Informacje o telefonie > Status** | **Ustawienia > Informacje o telefonie > Status SIM** |

**Jedna różnica, która ma znaczenie:** na iPhonie obsługa eSIM jest albo-wszystko-albo-nic według generacji i regionu — łatwa do przewidzenia. Na Androidzie zależy od wariantu, więc dwa "takie same" Galaxy lub Pixele mogą zachowywać się inaczej. W razie wątpliwości na Androidzie ufaj EID z `*#06#` bardziej niż specyfikacji.


## 6. Twój telefon jest zdolny — co teraz? (Poprawki dla kodów błędów)

Jeśli Twój telefon przeszedł powyższą kontrolę sprzętu i nadal widzisz konkretny komunikat błędu, problemem nie jest już kompatybilność — to problem z aktywacją lub siecią. Te mają własne dedykowane odniesienie:

- **"Aktywacja nie powiodła się", "Brak usługi", "Nieprawidłowy kod QR", "Nie można dodać planu komórkowego", błąd przywracania 4013/4014 i każdy inny błąd na ekranie** → zobacz [Przewodnik zaawansowanego rozwiązywania problemów z eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/), który mapuje każdy komunikat do poprawki.
- **Ustawienia APN i pełna tabela APN dostawców** → kanoniczne odniesienie APN również znajduje się w [Przewodniku zaawansowanego rozwiązywania problemów z eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Aktywacja krok po kroku (QR / ręczna / aplikacja operatora)** → zobacz [Jak aktywować eSIM](/faq/how-to-activate-an-esim/).
- **Przenoszenie profilu na nowy telefon** → zobacz [Jak przenieść eSIM między iPhonem a Androidem](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Konfiguracja iPada i Apple Watch** → zobacz [przewodnik eSIM dla iPada i Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Często zadawane pytania

**Dlaczego mój iPhone XR mówi "eSIM nieobsługiwane", mimo że powinien działać?**
Jeśli numer modelu kończy się na CH/A, to egzemplarz z Chin kontynentalnych bez układu eSIM. W przeciwnym razie sprawdź status blokady operatora — zablokowany XR odrzuci profile innych dostawców.

**Czy mogę wymusić eSIM na iPhonie 7?**
Nie. iPhone 7 (i 6s, 8 i X) poprzedzają w ogóle układ eUICC. Żaden hack oprogramowania nie może dodać sprzętu, którego nie ma.

**Jaka jest różnica między EID a IMEI?**
IMEI (15 cyfr) identyfikuje model telefonu — każdy telefon ma jeden. EID (32 cyfry) identyfikuje układ wbudowanej karty SIM — tylko telefony z eSIM mają jeden. Jeśli `*#06#` nie pokazuje EID, Twój telefon nie może używać eSIM.

**Co oznacza "EID nie znaleziono", gdy wybieram `*#06#`?**
Oznacza to, że Twój telefon nie ma układu eUICC wymaganego dla profili cyfrowych SIM. To ograniczenie sprzętowe, a nie coś, co aktualizacja oprogramowania może naprawić.

**Mój telefon nie obsługuje eSIM — czy nadal mogę używać eSIM podróżnej?**
Nie. Potrzebujesz wbudowanego układu, więc fizyczna karta SIM to jedyna opcja. Wielu dostawców (w tym Roami) sprzedaje również fizyczne karty SIM.

**Skąd mam wiedzieć, czy mój Samsung Galaxy ma eSIM?**
Wybierz `*#06#` — jeśli pojawi się EID, jest obsługiwany. Możesz również sprawdzić Ustawienia > Połączenia > Menedżer kart SIM dla opcji "Dodaj eSIM". Niektóre warianty amerykańskich operatorów i serii A ją ukrywają.

**Czy OnePlus 11 obsługuje eSIM?**
Nie. OnePlus dodał eSIM od OnePlus 12. 11, 10, 9 i seria Nord nie mają sprzętu.

**Jak sprawdzić, czy mój iPhone jest zablokowany przez operatora?**
Ustawienia > Ogólne > Informacje > Blokada operatora. "Brak ograniczeń SIM" oznacza odblokowany. Cokolwiek innego oznacza zablokowany dla tego operatora.

**Które modele iPada obsługują eSIM?**
iPad Pro (3. generacji i nowsze), iPad Air (3. generacji i nowsze), iPad (10. generacji i nowsze) i iPad mini (6. generacji i nowsze) — tylko modele komórkowe. iPady tylko z Wi-Fi nie mają sprzętu eSIM.

**Gdzie mogę znaleźć listę telefonów kompatybilnych z eSIM?**
[Pełna lista telefonów kompatybilnych z eSIM (2026)](/compatibility/) obejmuje iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi i inne.

**Jaka jest różnica między blokadą telefonu a blokadą operatora?**
Blokada telefonu (aktywacji) to zabezpieczenie antykradzieżowe — iCloud na iPhonie, Google FRP na Androidzie — i tylko oryginalny właściciel może ją usunąć. Blokada operatora to ograniczenie sieciowe, które operator usuwa za darmo, gdy telefon jest opłacony i spełnia warunki.

**Dlaczego chińskie telefony nie mają eSIM?**
Chiny kontynentalne wymagają, aby telefony krajowe były certyfikowane dla podwójnej fizycznej SIM, więc Apple i marki Android wysyłają chińskie egzemplarze z dwoma gniazdami nano-SIM i bez układu eUICC. To sprzęt — nie można go później włączyć.

**Czy mogę dodać eSIM do telefonu, który nie ma EID?**
Nie. Układ eUICC jest przylutowany do płyty głównej. Nie ma adaptera, aplikacji, jailbreak'a ani aktualizacji oprogramowania, która doda sprzęt, który nigdy nie został zainstalowany.

**Czy przywrócenie ustawień fabrycznych naprawia "eSIM nieobsługiwane"?**
Nie. Resetowanie nie zmienia sprzętu ani nie usuwa blokady operatora. Może jednak wyczyścić uszkodzony, częściowo zainstalowany profil, więc warto spróbować w przypadku usterek oprogramowania — po wykonaniu kopii zapasowej.

**Do czego służy EID, gdy dostawca o niego pyta?**
EID pozwala dostawcy powiązać konkretny profil eSIM z układem Twojego telefonu przed skanowaniem. W ten sposób wiedzą, że plan jest przeznaczony dla Twojego dokładnego urządzenia — myśl o tym jako o "adresie" eSIM.

**Skąd mam wiedzieć, czy mój telefon jest odblokowany bez wkładania SIM?**
iPhone: Ustawienia > Ogólne > Informacje > Blokada operatora — "Brak ograniczeń SIM" oznacza odblokowany. Android: Ustawienia > Informacje o telefonie > Status (lub status SIM) i poszukaj sformułowań "SIM zablokowana" lub "SIM niezablokowana".

👉 **Potwierdziłeś, że Twój telefon jest zdolny?** Zdobądź [eSIM dla USA](/united-states-esim/) lub [eSIM dla Japonii](/japan-esim/), aby się połączyć.


## Przetestuj swoją kompatybilność z darmową eSIM

Najszybszym sposobem na potwierdzenie, że Twój telefon faktycznie może używać eSIM, jest instalacja **darmowej próbnej eSIM**. Nic nie kosztuje, zajmuje 2 minuty, a jeśli się zainstaluje i połączy, Twój sprzęt jest gotowy.

👉 [**Zdobądź swoją darmową Roami eSIM teraz**](/free-esim/)

---

*Jeśli Twoje konkretne urządzenie lub błąd nie został tutaj omówiony, skontaktuj się z nami, a pomożemy Ci potwierdzić, czy Twój telefon jest kompatybilny z eSIM.*
## Źródła

- [GSMA — specyfikacja eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM na iPhonie](https://support.apple.com/en-us/108072)
- [Google Support — Skonfiguruj eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)