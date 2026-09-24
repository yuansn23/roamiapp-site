---
title: "eSIM Çalışmıyor mu? 2026'da Uyumluluk Hatalarını Düzeltin"
h1_title: "eSIM Çalışmıyor Nasıl Düzeltilir: 2026'da Uyumluluk Hataları"
description: "eSIM hatalarına mı takıldınız? iPhone ve Android'de aktivasyon başarısızlıklarını, aktarım sorunlarını ve açılış döngülerini düzeltmeyi öğrenin. Telefonunuzu 2 dakikada teşhis edin."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["esim çalışmıyor", "esim desteklenmiyor", "esim uyumlu değil iphone", "esim etkinleştirilemiyor", "esim şebeke kullanılamıyor", "esim yeni iphone'a aktarılmıyor", "esim yanlışlıkla silindi", "esim profil süresi doldu", "esim qr kodu geçersiz", "iphone'da esim nasıl düzeltilir", "esim aktarım hatası", "esim servis yok"]
date: 2026-09-23T00:00:00Z
lastmod: 2026-09-23T00:00:00Z
tags: ["eSIM", "Sorun Giderme", "Aktivasyon Hataları", "iPhone", "Android"]
toc: true

# Site ve SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

ui_text:
  updated_on: "Son güncelleme"
  min_read: "dk okuma"
  toc: "İçindekiler"

breadcrumbs:
  home:
    text: "Ana Sayfa"
    url: "/"
  parent:
    text: "Yardım Merkezi"
    url: "/faq/"

# Sidebar: Popüler eSIM'ler
sidebar_popular:
  title: "Popüler eSIM'ler"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Germany eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkey eSIM"
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

sidebar_free:
  title: "Ücretsiz eSIM Talep Et"
  icon: "🎁"
  item_suffix: "Ücretsiz eSIM"
  item_subtitle: "Ücretsiz eSIM"
  items:
    - name: "UK eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Germany"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thailand"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

sidebar_questions:
  title: "Popüler Sorular"
  items:
    - question: "eSIM aktivasyonu nedir ve nasıl çalışır?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "eSIM nasıl etkinleştirilir?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "iPhone'da eSIM nasıl etkinleştirilir (Tüm Modeller)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Güncel eSIM Uyumluluk Listesi"
      url: "/compatibility/"
---


> **Editör Notu:** "eSIM'im çalışmıyor" sorunlarının büyük bir kısmı bir telefon sorunu çıkar, plan sorunu değil. Bu rehber her şeyden önce sormanız gereken soruyu yanıtlar: *telefonum eSIM kullanmaya gerçekten uygun mu?* 2 dakikalık donanım kontrolünü, Çin/Hong Kong model istisnalarını ve operatör kilitlerini adım adım anlatacağız — böylece cihazınızda asla işe yaramayacak aktivasyon adımlarına bir saat harcamazsınız.

> **Bir hata kodu çözümü mü arıyorsunuz?** Telefonunuz aşağıdaki donanım kontrolünden geçiyorsa ama belirli bir mesaja bakıyorsanız ("Aktivasyon başarısız", "Servis Yok", "QR geçersiz", kurtarma hatası 4013/4014) bu farklı bir sorundur. Hata bazlı referans için [eSIM Derin Sorun Giderme Rehberimize](/faq/esim-deep-troubleshooting-guide-2026/) atlayın.

## Telefonum eSIM Kullanmaya Uygun mu?

Ayarları açmadan, tek bir QR kodu okutmadan veya destekle iletişime geçmeden önce telefonunuzun gereken yerleşik SIM donanımına gerçekten sahip olduğunu doğrulayın. Bu tek kontrol, tüm "eSIM çalışmıyor" vakalarının kabaca yarısını anında eler.

### Evrensel EID Kontrolü

Telefonunuzun çeviricisini açın ve şunu yazın:

> **`*#06#`**

- 32 haneli bir **EID** (eUICC Tanımlayıcısı) içeren bir ekran görünürse telefonunuzda dijital SIM aktivasyonu için gereken yerleşik çip vardır. ✅
- Ekranda yalnızca **IMEI** numaraları görünüyor ve EID yoksa donanım mevcut değildir. ❌

**EID görünmüyorsa ne yapmalı:** Burada durun. Eksik çipi hiçbir yazılım güncellemesi, hile veya "zorlama" yöntemi ekleyemez — bu fiziksel bir donanım yokluğudur. Bunun yerine fiziksel SIM kullanın ya da *eSIM'i desteklemesi gerektiği gibi görünen* ancak desteklemeyen telefonlar için Çözüm #4'e bakın.

### EID, IMEI ve ICCID Açıklandı

| Tanımlayıcı | Nedir | Size Ne Söyler |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 hane) | Telefonunuzun modelini tanımlar — her telefonun bir tane vardır |
| **EID** | eUICC Tanımlayıcısı (32 hane) | Yerleşik SIM çipinin mevcut olduğunu doğrular — yalnızca eSIM destekli telefonlarda vardır |
| **ICCID** | Integrated Circuit Card Identifier (19–20 hane) | Kurulduktan sonra belirli bir eSIM profilini tanımlar |

> **Kilit bilgi:** EID = donanım mevcut. EID görüyorsanız telefonunuz fiziksel olarak eSIM'e uygundur. Görmüyorsanız kurduğunuz hiçbir şey bunu değiştirmez.

### Her Numarayı Nerede Bulursunuz

Menüyü bilirseniz üç numara da açıkta durur. Her biri için en kısa yol:

| Tanımlayıcı | En Hızlı Yol | Yedek Konum |
| :--- | :--- | :--- |
| **IMEI (15 hane)** | `*#06#` tuşlayın — gösterilen ilk numaradır | iPhone: **Ayarlar > Genel > Hakkında**. Android: **Ayarlar > Telefon hakkında** |
| **EID (32 hane)** | `*#06#` tuşlayıp kaydırın — **8904** ile başlayan uzun numaradır | iPhone: **Ayarlar > Genel > Hakkında > EID**. Samsung: **Ayarlar > Telefon hakkında > Durum** |
| **ICCID (19–20 hane)** | Yalnızca bir profil kurulduktan sonra görünür | iPhone: **Ayarlar > Genel > Hakkında**. Android: **Ayarlar > Telefon hakkında > SIM kart durumu** |

> **Faydalı bilgi:** her EID **"8904"** ile başlar — bu önek onu bir eUICC tanımlayıcısı olarak işaretler. Ekrandaki uzun numara başka bir şeyle başlıyorsa yanlış değeri okuyorsunuzdur.

### "eSIM Ekle" Düğmesi Testi

`*#06#` bir EID gösteriyorsa ama hâlâ "eSIM desteklenmiyor" görüyorsanız **Ayarlar > Hücresel**'i açın ve **"eSIM Ekle"** ya da **"Hücresel Plan Ekle"** arayın. Seçenek oradaysa ama okuttuğunuzda başarısız oluyorsa büyük olasılıkla bir **operatör kilidi** veya **bölge kısıtlamasıyla** karşı karşıyasınızdır — ikisi de aşağıda ele alınır.

### Ayarlar Arama Yöntemi

Elinizde çevirici yoksa (bazı tabletler ve katlanabilirler gizler) veya `*#06#` kafa karıştırıcı bir ekran verdiyse telefonunuzun kendi arama çubuğu ikinci en hızlı kontroldür.

- **iPhone:** **Ayarlar**'ı açın, listenin en üstünden aşağı kaydırarak arama kutusunu açın ve **"eSIM"** yazın. **"eSIM Ekle"** veya **"Hücresel Plan Ekle"** sonucu özelliğin aktif olduğu anlamına gelir.
- **Samsung:** **Ayarlar**'ı açın, üstteki **büyüteç simgesine** dokunun ve **"eSIM"** yazın. **"SIM Kart Yöneticisi"** (veya "Mobil plan ekle") görünüyorsa varyantınızda çip vardır.
- **Pixel:** **Ayarlar > Ağ ve internet > SIM'ler** yolunu açın. **"Bunun yerine SIM indirilsin mi?"** görüyorsanız hazırsınız. Yalnızca fiziksel SIM'inizi listeleyen, indirme seçeneği olmayan bir ekran, eUICC çipi olmadığı anlamına gelir.

> **Arama sonucu yok = donanım yok.** Yaklaşık 2018'den sonra satılan bir telefon Ayarlar aramasında "eSIM" için hiçbir şey döndürmüyorsa, elinizde çipsiz gönderilen bir bölge veya bütçe varyantı vardır.

### Model Numarası Araması

İkinci el alıyorsunuz ya da açamadığınız bir telefonu kontrol ediyorsunuz? Model numarası saniyeler içinde kesinleştirir.

- **iPhone:** **Ayarlar > Genel > Hakkında > Model Numarası**, sonra **A önekli tanımlayıcıya** (örn. **A2111**) çevirmek için numaraya dokunun. Parça numarasında **/A** öncesindeki harfler satış bölgesini kodlar — tam sonek haritası Bölüm 2'dedir.
- **Samsung:** **Ayarlar > Telefon hakkında > Model numarası** (örn. **SM-S921U1**). Son karakter ipucudur: **U** = ABD operatörü, **U1** = ABD kilitsiz, **B** = Avrupa/global, **0** = Çin/Hong Kong (Snapdragon).
- **Pixel:** **Ayarlar > Telefon hakkında > Model**. Pixel model dizileri bölgeye ve operatöre göre değişir — Japonya ve bazı ABD operatör varyantları eSIM'i kısıtlar; bu yüzden belirli kodu çapraz kontrol edin veya `*#06#` tuşlayın.

> **Pratik kural:** model numarası bir Çin/bölge sonekiyle bitiyorsa (veya Samsung'da bir ABD operatör sonekiyle), eSIM'in çalıştığını varsaymadan önce `*#06#` ile doğrulayın. Model numarası artı EID birlikte %100 cevap verir.

### Bir Telefon EID Gösterirken eSIM'i Neden Yine Reddeder

| Senaryo | EID Var mı? | eSIM Çalışır mı? | Neden? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR ve yenileri (global) | ✅ Evet | ✅ Evet | Dijital SIM profillerine tam destek |
| iPhone XS/XR (Çin modeli) | ❌ Hayır | ❌ Hayır | Çift fiziksel SIM için donanım kaldırıldı |
| Samsung S20 FE (ABD operatörü) | ✅ Evet | ❌ Hayır | Operatör özelliği yazılımda kapattı |
| Google Pixel 4a (Japonya) | ✅ Evet | ❌ Hayır | Operatör işlevi kilitledi |
| Operatör kilitli iPhone (AT&T/T-Mobile) | ✅ Evet | ❌ Hayır (diğer operatörler için) | Şebeke kilidi diğer sağlayıcıların profillerini bloke eder |
| Kilitsiz iPhone (her bölge) | ✅ Evet | ✅ Evet | Tam destek |


## iPhone'da eSIM Desteklenmiyor veya Uyumlu Değil

**"eSIM desteklenmiyor"**, **"bu eSIM bu iPhone ile uyumlu değil"** veya kısaca **"eSIM uyumlu değil iPhone"** görüyorsanız neden neredeyse her zaman şu beş şeyden biridir — ve her biri *planınızla* değil, *cihazınızla* ilgilidir.

### iPhone Modeliniz eSIM Donanımından Önceye Ait

Yalnızca **XR, XS, XS Max (2018) ve yenisi** iPhone'lar yerleşik çipe sahiptir. iPhone 8, 8 Plus ve iPhone X'te yoktur; bu yüzden ne denersek deneyelim **"eSIM desteklenmiyor"** döner. eUICC çipi o kartlarda basitçe mevcut değildir — bu bir donanım sınırlamasıdır, ayar sorunu değil.

**Hızlı kontrol:** `*#06#` tuşlayın. 32 haneli EID demek hazırsınız demektir; yalnızca IMEI demek değilsiniz demektir.

**Ne yapmalı:** Fiziksel SIM kullanın veya iPhone XR ya da yenisine yükseltin. Resmi liste [Apple Destek — iPhone'da eSIM kurulumu](https://support.apple.com/en-us/118670) sayfasındadır.

### iPhone'unuz Çin Anakarası Modeli

Çin anakarasında satılan iPhone'lar **iki fiziksel SIM yuvası ve eSIM donanımı olmadan** gelir. Çin düzenlemeleri yerli akıllı telefonları çift fiziksel SIM'e iter; Apple bu cihazlarda yerleşik çipi kaldırmıştır. "Hücresel Plan Ekle" seçeneği görünse bile tamamlanmaz — Çin'de veya belirli satıcılardan cihaz alan alıcılar arasında "bu eSIM bu iPhone ile uyumlu değil" mesajının tek en yaygın nedeni budur.

**Nasıl tanımlanır:** **Ayarlar > Genel > Hakkında > Model Numarası**. **"CH/A"** ile bitiyorsa Çin anakarası modelidir. (Tam sonek tablosu aşağıdaki Bölüm 2'de.)

**Ne yapmalı:** CH/A bir cihazda eSIM'i etkinleştirmenin bir yolu yoktur. Fiziksel bir seyahat SIM'i kullanın ya da telefonu satıp global bir sürüm alın.

### iPhone'unuz Operatör Kilitli

Bazı operatörler — özellikle ABD'li olanlar — iPhone'ları kendi şebekelerine kilitler. Farklı bir sağlayıcıdan (seyahat eSIM'i gibi) profil etkinleştirmeye çalışmak o zaman "eSIM desteklenmiyor" veya "operatör desteklemiyor" mesajı döndürür. Bazı operatörlerin yalnızca fiziksel SIM yuvasını kilitleyip eSIM yuvasını açık bıraktığını, çoğunun ise ikisini de kilitlediğini unutmayın.

**Nasıl kontrol edilir:** **Ayarlar > Genel > Hakkında > Operatör Kilidi**. **"SIM kısıtlaması yok"** yazmalıdır. "SIM kilitli" yazıyorsa kilidin açılması gerekir. Tam operatör kilidi rehberi için Bölüm 3'e bakın.

### iOS Sürümünüz Güncel Değil

Dijital SIM desteği iOS 16 ve sonrasında çok iyileşti. iOS 12 veya 13'te bazı modern operatör profilleri hiç kurulmaz.

**Nasıl kontrol edilir:** **Ayarlar > Genel > Yazılım Güncelleme**.

**Ne yapmalı:** En son iOS'a güncelleyin, yarı kurulmuş herhangi bir profili silin, sonra QR kodunu yeniden okutun.

### Bu iPhone iPhone 14'te eSIM'i Desteklemiyor

Bir iPhone 14 (ABD sürümü) her zaman eSIM'i desteklemelidir — ABD modelinde hiç fiziksel SIM tepsisi yoktur. Yine de bu hatayı döndürüyorsa nadir bir **eUICC donanım arızasıyla** karşı karşıyasınızdır. Ayarları kurcalamak yerine donanım teşhisi için Apple Destek'e başvurun.

Model model tam iPhone listesi için [iPhone eSIM uyumluluk rehberimize](/faq/iphone-11-esim-compatible/) bakın.

Samsung sahipleri [Samsung Galaxy eSIM rehberine](/faq/samsung-s20-esim-compatible/), Pixel sahipleri [Google Pixel eSIM rehberine](/faq/google-pixel-6-esim-compatible/) bakmalıdır.


### eSIM Desteklenmiyor: Donanım Yazılım mı Operatör mü

Her "eSIM desteklenmiyor" vakası — her telefonda, her operatörde — üç kovadan birine düşer. Kova adını söylemek, sorunun düzeltilebilir olup olmadığını anında bildirir.

| Kova | Görünümü | Düzeltilebilir mi? | Hamleniz |
| :--- | :--- | :--- | :--- |
| **Donanım** | `*#06#`'da EID yok; 2018 öncesi iPhone; Çin modeli (CH/A); eUICC'siz bütçe Android | ❌ Hayır | Fiziksel SIM veya telefonu yükseltin |
| **Yazılım** | EID mevcut ama özellik gizli veya OS eski (operatör kapalı Samsung S20 FE, eski iOS) | ✅ Genellikle | OS'u güncelleyin veya operatör kısıtlamasını kaldırın |
| **Operatör** | EID mevcut, menü görünüyor ama başka sağlayıcının planı etkinleşmiyor | ✅ Evet | Cihazın kilidini açın (Bölüm 3), sonra yeniden okutun |

**30 saniyelik yönlendirme testi:** `*#06#` tuşlayın.
- **EID yok** → donanım. Burada durun — kurduğunuz hiçbir şey bunu değiştirmez.
- **EID var ama "eSIM Ekle" akışı başarısız** → yazılım veya operatör. İkisi de düzeltilebilir; okumaya devam edin.

Bu tek sonuç, Roami'de gördüğümüz "desteklenmiyor" bildirimlerinin yaklaşık 10'da 9'u için doğru çözüme yönlendirir.


## Çin Hong Kong ve Makao Model Rehberi

Telefonunuzun nerede satıldığı hangi donanıma sahip olduğunu belirler. Bu, bölgesel eSIM'sizlik durumunu en hızlı dahil etme/dışlama yoludur.

### Çin Modeli Hızlı Referansı

| Model Numarası Sonu | Bölge | eSIM Desteği |
| :--- | :--- | :--- |
| **CH/A** | Çin anakarası | ❌ Hayır (çift fiziksel SIM) |
| **HK/A** | Hong Kong | ⚠️ Değişken (bazı modeller fiziksel + dijital SIM destekler) |
| **LL/A** | ABD | ✅ Evet |
| **ZA/A** | Kanada | ✅ Evet |
| **J/A** | Japonya | ✅ Evet (bazı operatör modelleri hariç) |
| **B/A** | İngiltere/Avrupa | ✅ Evet |
| **X/A** | Avustralya/Yeni Zelanda | ✅ Evet |

### Çin Anakarası iPhone eSIM Durumu

- **Çin anakarasında satılan tüm iPhone'lar** (iPhone 16 serisi hariç) çift fiziksel SIM'e sahiptir ve eSIM yoktur.
- **Çinli Android telefonlar** — Xiaomi, Oppo, Vivo, Huawei — yerli satılanlar da tipik olarak eSIM çipinden yoksundur.
- **Uluslararası bir telefonla Çin'e girerseniz:** uluslararası seyahat eSIM'leriyle çalışır, ama yerel Çin operatörleri turistlere eSIM sunmaz; bu yüzden yine de Roami gibi bir sağlayıcıdan seyahat planı gerekir.

### Hong Kong iPhone eSIM Durumu

- **iPhone modelleri:** Hong Kong iPhone'ları genellikle **eSIM + fiziksel SIM** (her birinden bir tane) veya modele göre çift fiziksel SIM destekler. Model sonekinizi kontrol edin.
- **Operatörler:** bazı Hong Kong operatörleri (CMHK, 1010, SmarTone) abonelere eSIM sunar ama ön ödemeli eSIM nadirdir.
- **Gezginler için:** uluslararası bir seyahat eSIM'i, yerel Hong Kong eSIM'i edinmeye çalışmaktan daha basit ve güvenilirdir.

### Makao iPhone eSIM Durumu

- **Hong Kong'ya benzer:** çoğu Makao iPhone'u Hong Kong'dan ithal edilir ve eSIM + fiziksel SIM destekler.
- **CTM** (Makao'nun ana operatörü) abonelere eSIM sunar ama turistlere sunmaz.

### Çin Modelleri eSIM'i Neden Bırakır

Bu Apple veya Android markalarının maliyet kısması değildir — düzenlemedir. Çin anakarası, orada satılan telefonların çift fiziksel SIM için sertifikalandırılmasını şart koşar ve yeniden yazılabilir bir eSIM profili bu yerli çerçeveye uymaz. Pratik sonuç:

- **Apple**, Çin anakarası iPhone'ları **iki fiziksel nano-SIM yuvası** ve eUICC çipi olmadan gönderir.
- **Xiaomi, Oppo, Vivo, Honor ve Huawei**, aynı telefonun global sürümünde olsa bile Çin yerli derlemelerinden eSIM'i söker.
- **Yurt dışına götürülen bir Çin telefonu eSIM'i geri alamaz** — bu donanım yokluğudur, yazılım engeli değil. Tersi de geçerlidir: Çin'e giren bir uluslararası telefon seyahat eSIM'leriyle çalışır ama üç büyük Çin operatörü (China Mobile, China Unicom, China Telecom) turistlere eSIM satmaz.

**Çözüm:** telefonu Çin anakarasında aldıysanız fiziksel bir seyahat SIM'i planlayın — ya da global model bir telefon alın. Eksik çipi ekleyen bir kilit açma, jailbreak veya uygulama yoktur.

### A-Numarasıyla Modelinizi Tanımlama

Parça numarası soneki (CH/A, LL/A vb.) hızlı filtredir ama **A-numarası** kesin kimliktir. Her neslin izlediği deseni iPhone 11 üzerinden alın:

| iPhone 11 Model | Bölge | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Amerika Birleşik Devletleri | ✅ Evet |
| **A2221** | Çin anakarası | ❌ Hayır (çift fiziksel SIM) |
| **A2223** | Hong Kong / Makao | ✅ Evet (eSIM + fiziksel) |

**Nasıl kullanılır:** A-numaranızı bulun (**Ayarlar > Genel > Hakkında > Model Numarası**, sonra A önekli kodu görmek için numaraya dokunun) ve Apple'ın model listesiyle eşleştirin. Bir satıcı "kilitsiz küresel eSIM iPhone" ilan ettiyse ama A-numarası bir Çin koduysa ilan yanlıştı — uzaklaşın ya da fiziksel SIM planlayın.


## Operatör Kilidi ve Nasıl Kaldırılır

Operatör kilidi, tamamen yetenekli bir telefonun eSIM'i reddetmesinin ikinci en yaygın nedenidir. Bu, operatörünüzün cihaza koyduğu bir yazılım kısıtlamasıdır, donanım sınırı değil.

### Operatör Kilidi Ne Yapar

Bir telefon "SIM kilitli" olduğunda yalnızca onu satan operatörün SIM'lerini ve eSIM profillerini kabul eder. Başka bir sağlayıcıdan seyahat eSIM'i eklemeye çalışmak "eSIM desteklenmiyor" veya "SIM desteklenmiyor" tetikler. Yerleşik çip mevcuttur ve çalışır — operatör yalnızca ona erişimi bloke etmektedir.

### Kilit Durumunuzu Nasıl Kontrol Edersiniz

1. iPhone'da: **Ayarlar > Genel > Hakkında > Operatör Kilidi**. **"SIM kısıtlaması yok"** yazmalıdır.
2. Android'de (Samsung): **Ayarlar > Telefon hakkında > Durum** yoluna gidin ve SIM kilidi alanına bakın.
3. Android'de (Pixel): **Ayarlar > Telefon hakkında > SIM durumu**.

### ABD Operatör Kilit Açma Politikaları

| Operatör | Kilit Açma Şartı |
| :--- | :--- |
| **AT&T** | Kilit açılmadan önce cihaz tamamen ödenmiş ve 60 gün aktif olmalı |
| **T-Mobile** | Cihaz ödenmiş ve 40 gün aktif; T-Mobile uygulamasından talep edilir |
| **Verizon** | Çoğu telefon satın alımdan 60 gün sonra otomatik kilidi açılır |

### Cihazınızın Kilidini Nasıl Açarsınız

1. **Operatörünüzden kilidi açmasını isteyin** — telefon ödendikten sonra genellikle ücretsizdir ve çoğu ABD operatörü uygulamadan veya web formundan talebe izin verir.
2. **Onayı bekleyin** — operatör kilit açmayı gönderir; telefonu yeniden başlatmanız gerekebilir.
3. **Doğrulayın** — Operatör Kilidi alanı "SIM kısıtlaması yok" okuyana kadar yeniden kontrol edin.
4. **Sonra etkinleştirin** — kilit açıldıktan sonra seyahat eSIM QR kodunuzu yeniden okutun.

> **Not:** operatör kilidi telefon düzeyinde bir kısıtlamadır, plan düzeyinde değil. Cihazınızın kilidini açmak sözleşmenizi iptal etmez — yalnızca cihazı diğer sağlayıcıların SIM'lerini ve eSIM'lerini kullanmaya serbest bırakır.

### Daha Fazla ABD Operatörü ve MVNO Kilit Açma Politikaları

Üç büyük, insanların karşılaştığı tek değildir. Ön ödemeli ve MVNO telefonlar genellikle daha uzun süre kilitli kalır; bu da "harika fiyatlı" bir seyahat eSIM'inin kurulmamasının sinsi nedeni olabilir.

| Operatör | Kilit Açma Şartı |
| :--- | :--- |
| **Cricket Wireless** | 6 ay ödenmiş hizmet (tam perakende fiyata alınmadıysa) |
| **Metro by T-Mobile** | 180 gün ödenmiş hizmet |
| **Boost Mobile** | 12 ay ödenmiş hizmet |
| **Spectrum Mobile** | 60 gün |
| **Xfinity Mobile** | 60 gün aktif hizmet |
| **US Cellular** | 120 gün |
| **Visible (Verizon ön ödemeli)** | 60 gün ödenmiş hizmet |

### Kilit Açma Talebi için Gerekenler

Kilitsiz açmalar hak kazandığınızda ücretsizdir ama talep birkaç şeye hazır olmayı gerektirir:

1. **IMEI'niz** — `*#06#` tuşlayın ve 15 haneli numarayı alın (EID'yi değil).
2. **Hesap numaranız ve hesap PIN/şifreniz** — operatör uygulamanızda veya son bir faturada bulun.
3. **Telefon tamamen ödenmiş** — operatörler açık taksit bakiyesi olan cihazın kilidini açmaz.
4. **Uygunluk karşılanmış** — her operatörün minimum aktif gün penceresi vardır (yukarıdaki tablolara bakın).

**Nereden talep edilir:** AT&T ve T-Mobile'ın çevrimiçi kilit açma portalları ve uygulama içi formları vardır; Verizon çoğu telefonu 60 gün sonra talep gerekmeden otomatik açar. MVNO'lar için (Cricket, Metro, Boost) uygulamalarını kullanın veya desteği doğrudan arayın.

**Üçüncü taraf "anında kilit açma" hizmetleri hakkında:** bunlar kumardır. Birçoğu telefonu yeniden kilitleyen sızdırılmış operatör araçları kullanır ve bazıları açık dolandırıcılıktır. Operatörünüz henüz uygun olmadığınızı söylüyorsa bekleyin — bir yabancıya sizin "yerinize" yapsın diye 20 $ ödemeyin.


### Üç Farklı Kilit

İnsanlar "telefonum kilitli" derken üç tamamen farklı şeyi kastedebilir. Her biri farklı bir çözüm gerektirir; bu yüzden ayırmaya değer.

| Kilit Türü | Nedir | Nerede Görürsünüz | Çözüm |
| :--- | :--- | :--- | :--- |
| **Telefon kilidi (aktivasyon kilidi)** | Hırsızlığa karşı: iCloud Aktivasyon Kilidi (iPhone) veya Google FRP (Android), önceki sahibin hesabına bağlı | Kurulumda "Aktivasyon Kilidi" / "Bu iPhone bir Apple ID'ye bağlıydı" veya Android'de Google hesap sorusu | Yalnızca orijinal sahip kaldırabilir — hâlâ gösteren bir telefonu asla almayın |
| **Bölge kilidi** | Telefonun satıldığı yerden kaynaklanan bir donanım farkı (Çin modellerinde eUICC çipi yok) | `*#06#`'da EID yok; model numarası CH/A ile bitiyor | Kaldırılamaz — fiziksel SIM veya farklı bir telefon kullanın |
| **Operatör kilidi** | Telefonu operatörün şebekesiyle sınırlayan, operatörden gelen bir yazılım kısıtlaması | **Ayarlar > Genel > Hakkında > Operatör Kilidi** "SIM kilitli" gösteriyor | Operatörden kilit açma talep edin (Bölüm 3) |

**Hızlı ayrıştırma:**
- **Apple ID veya Google hesap sorusu** görüyorsanız = telefon/aktivasyon kilidi (bir sahip sorunu).
- **Hiç EID yok** = bölge kilidi (bir donanım sorunu).
- **EID var + "SIM kilitli"** = operatör kilidi (düzeltilebilir; uygun olunca ücretsiz).

2 dakikalık kontrolü atlatan "eSIM çalışmıyor" şikayetlerinin çoğu operatör kilidi türündedir — ve bu neredeyse her zaman çözülebilir.


## Telefonum eSIM'i Desteklemiyor Ama Desteklemeli

Bazı cihazlar eSIM'le tanıtılır ama belirli bölgesel veya operatör varyantları özelliği sessizce düşürür. Klasik suçlular şunlar:

- **Samsung Galaxy S20 FE** – ABD operatör kilitli sürümler maliyeti düşürmek için özelliği yazılımda kapatır; global model desteklese bile.
- **Google Pixel 4a (Japonya sürümleri)** – Docomo ve SoftBank yerli operatör anlaşmaları nedeniyle kendi cihazlarında eSIM'i kapatır.
- **Xiaomi Redmi Note serisi** – çevrimiçi söylentilere rağmen hiçbirinde eUICC çipi yoktur. Xiaomi eSIM'i amiral gemileri için saklar.
- **iPhone 8 / 8 Plus / X** – eUICC öncesi donanım; Apple çipi yalnızca XS/XR neslinden itibaren ekledi.
- **Samsung Galaxy A serisi** – yalnızca seçili modellerde (A54, A53) çip vardır; çoğu A-serisinde yoktur.

### eSIM Uyumlu Görünen Ama Olmayan Telefonlar

| Telefon Modeli | eSIM Desteği | Neden? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Hayır | eUICC öncesi donanım |
| **iPhone XS/XR (Çin)** | ❌ Hayır | Çift fiziksel SIM donanımı |
| **Samsung Galaxy S20 FE (ABD operatörü)** | ❌ Hayır | Operatör kapalı |
| **Samsung Galaxy A13 / A23** | ❌ Hayır | Giriş seviyesi model, eUICC yok |
| **Google Pixel 4a (Japonya)** | ❌ Hayır | Operatör kapalı (Docomo/SoftBank) |
| **Google Pixel 3 (bazı modeller)** | ⚠️ Değişken | Bölgeyi kontrol edin; bazılarında var, bazılarında yok |
| **Xiaomi Redmi Note serisi** | ❌ Hayır | eUICC donanımı yok |
| **Xiaomi 12/13 (Çin)** | ❌ Hayır | Çin yerli sürümlerinde donanım yok |
| **OnePlus Nord (Çin sürümü)** | ❌ Hayır | Çin bölgesinde donanım yok |
| **Huawei (tüm Çin yerli)** | ❌ Hayır | Google hizmetleri yok, eSIM donanımı yok |
| **Motorola G serisi (çoğu)** | ❌ Hayır | Bütçe modellerinde eUICC yok |

**Ne yapmalı:** Herhangi bir telefon almadan önce üzerine (elınızdeyse) `*#06#` tuşlayarak EID'yi doğrulayın veya IMEI'yi çevrimiçi bir eSIM uyumluluk denetleyicisinden geçirin. **[eSIM uyumlu telefonların tam listesi (2026)](/compatibility/)** herhangi bir modeli doğrulamak için en iyi kaynağınızdır.


## Markaya Göre Android eSIM Uyumluluğu

Android'de en büyük değişken işletim sistemi değildir — *sizin belirli varyantınızın* çiple gelip gelmediğidir. Model model tablo şöyle:

### Samsung Galaxy eSIM Uyumluluğu

| Model | eSIM Desteği | Notlar |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Evet | Tüm küresel varyantlar |
| **Galaxy S20 FE** | ❌ Hayır (ABD operatörü) / ✅ Evet (global) | Model numarasını kontrol edin |
| **Galaxy A54 / A53** | ✅ Evet | Yalnızca seçili A-serisi |
| **Galaxy A13 / A23 / A33** | ❌ Hayır | Bütçe modeller |
| **Galaxy Z Fold / Flip** | ✅ Evet | Tüm modeller |
| **Galaxy Note 20** | ✅ Evet | Tüm modeller |

Samsung'da nasıl kontrol edilir: `*#06#` tuşlayın ve bir EID arayın, ya da **Ayarlar > Bağlantılar > SIM Kart Yöneticisi**'ni açın ve "eSIM Ekle" / "Mobil plan ekle" arayın. İkisi de yoksa varyantınızda özellik yoktur. Daha fazlası için [Samsung eSIM uyumluluk rehberimize](/faq/samsung-s20-esim-compatible/) ve [Samsung Destek](https://www.samsung.com/us/support/) sayfasına bakın.

### Google Pixel eSIM Uyumluluğu

| Model | eSIM Desteği | Notlar |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Evet | Özelliğe sahip ilk Pixel |
| **Pixel 3a / 3a XL** | ✅ Evet | – |
| **Pixel 4 / 4 XL** | ✅ Evet | – |
| **Pixel 4a** | ⚠️ Değişken | Japonya operatör sürümleri = HAYIR |
| **Pixel 5 / 5a** | ✅ Evet | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Evet | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Evet | – |
| **Pixel 8 / 8 Pro** | ✅ Evet | – |

Pixel'de nasıl kontrol edilir: EID için `*#06#` tuşlayın, ya da **Ayarlar > Ağ ve İnternet > SIM'ler** yolunu açın ve "Bunun yerine SIM indirilsin mi?" arayın. Yoksa varyant kilitli veya çipsizdir. Daha fazlası için [Pixel eSIM uyumluluk rehberimize](/faq/google-pixel-6-esim-compatible/) ve [Google Destek — Pixel'de eSIM](https://support.google.com/pixelphone/answer/7086887) sayfasına bakın.

### OnePlus eSIM Uyumluluğu

OnePlus, eSIM'i **OnePlus 12** ile başlayarak ekledi. OnePlus 11, 10, 9 ve Nord serisi donanımdan yoksundur.

| Model | eSIM Desteği |
| :--- | :--- |
| **OnePlus 12** | ✅ Evet |
| **OnePlus 11** | ❌ Hayır |
| **OnePlus 10** | ❌ Hayır |
| **OnePlus 9** | ❌ Hayır |
| **OnePlus Nord serisi** | ❌ Hayır (bazı AB varyantları hariç) |

### Xiaomi, Huawei, Motorola ve Diğer eSIM Markaları

- **Xiaomi** – amiral gemi modelleri (küresel sürümleriyle Xiaomi 12/13) eSIM'i destekleyebilir ama Çin yerli cihazları desteklemez. Redmi Note hattında hiç eUICC yoktur.
- **Huawei** – destek birkaç modelle (P40, Mate 40 ve yenileri) sınırlıdır; 2020 sonrası telefonların çoğu ABD yaptırımları nedeniyle eSIM'den yoksundur. **Ayarlar > Mobil Ağ > eSIM** yolunu kontrol edin — seçenek yoksa desteklenmiyordur.
- **Motorola** – çoğu G serisi bütçe modelinde çip yoktur; Moto G Power ve Edge hattı bölgeye göre değişir.

Hepsi için evrensel test aynıdır: `*#06#` tuşlayın ve EID'yi arayın.


## Android vs iPhone eSIM Yetenek Kontrolü

Aynı 2 dakikalık kontrol, iki farklı menü. Bu tabloyu diğer platformdaki bir arkadaşınıza verin.

| Kontrol | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | `*#06#` tuşlayın | `*#06#` tuşlayın | `*#06#` tuşlayın |
| **eSIM Ekle menüsü** | **Ayarlar > Hücresel > eSIM Ekle** | **Ayarlar > Bağlantılar > SIM Kart Yöneticisi > eSIM Ekle** | **Ayarlar > Ağ ve internet > SIM'ler > Bunun yerine SIM indirilsin mi?** |
| **Model numarası** | **Ayarlar > Genel > Hakkında > Model Numarası** | **Ayarlar > Telefon hakkında > Model numarası** | **Ayarlar > Telefon hakkında > Model** |
| **Kilit durumu** | **Ayarlar > Genel > Hakkında > Operatör Kilidi** | **Ayarlar > Telefon hakkında > Durum** | **Ayarlar > Telefon hakkında > SIM durumu** |

**Önemli olan tek fark:** iPhone'da eSIM desteği nesne ve bölge bazında ya hep ya hiçtir — tahmin etmesi kolaydır. Android'de ise varyant bazındadır; yani iki "aynı" Galaxy veya Pixel telefonu farklı davranabilir. Android'de şüphede kalırsanız veri sayfasına değil `*#06#` EID'sine güvenin.


## Telefonunuz eSIM'i Destekliyor Ama Aktivasyon Başarısız

Telefonunuz yukarıdaki donanım kontrolünü geçtiyse ama hâlâ belirli bir hata mesajı görüyorsanız sorun artık uyumluluk değildir — bir aktivasyon veya şebeke sorunudur. Bunların kendi özel referansları vardır:

- **"Aktivasyon başarısız", "Servis Yok", "QR geçersiz", "Hücresel Plan Eklenemiyor", kurtarma hatası 4013/4014 ve diğer tüm ekran hataları** → her mesajı bir çözüme eşleyen [eSIM Derin Sorun Giderme Rehberi 2026](/faq/esim-deep-troubleshooting-guide-2026/) sayfasına bakın.
- **APN ayarları ve tam sağlayıcı APN tablosu** → asıl APN referansı da [eSIM Derin Sorun Giderme Rehberi 2026](/faq/esim-deep-troubleshooting-guide-2026/) içindedir.
- **Adım adım aktivasyon (QR / manuel / operatör uygulaması)** → [eSIM Nasıl Etkinleştirilir](/faq/how-to-activate-an-esim/) sayfasına bakın.
- **Profili yeni bir telefona taşıma** → [eSIM iPhone ve Android Arasında Nasıl Aktarılır](/faq/how-to-transfer-esim-between-iphone-and-android/) sayfasına bakın.
- **iPad ve Apple Watch kurulumu** → [iPad ve Apple Watch eSIM rehberine](/faq/ipad-apple-watch-esim-support-guide/) bakın.


## Sıkça Sorulan Sorular

**iPhone XR'ım neden çalışması gerekirken "eSIM desteklenmiyor" diyor?**
Model numaranız CH/A ile bitiyorsa eSIM çipi olmayan bir Çin anakarası cihazdır. Aksi halde operatör kilit durumunu kontrol edin — kilitli bir XR diğer sağlayıcıların profillerini reddeder.

**iPhone 7'ye eSIM'i zorla ekleyebilir miyim?**
Hayır. iPhone 7 (ve 6s, 8, X) eUICC çipinden tamamen önceye aittir. Olmayan donanımı hiçbir yazılım hilesi ekleyemez.

**EID ile IMEI arasındaki fark nedir?**
IMEI (15 hane) telefonunuzun modelini tanımlar — her telefonun bir tane vardır. EID (32 hane) yerleşik SIM çipini tanımlar — yalnızca eSIM destekli telefonlarda vardır. `*#06#` EID göstermiyorsa telefonunuz eSIM kullanamaz.

**`*#06#` tuşladığımda "EID bulunamadı" ne demektir?**
Telefonunuzun dijital SIM profilleri için gereken eUICC donanım çipinin olmadığı anlamına gelir. Bu bir donanım sınırlamasıdır; bir yazılım güncellemesinin düzeltebileceği bir şey değildir.

**Telefonum eSIM'i desteklemiyor — yine de bir seyahat eSIM'i kullanabilir miyim?**
Hayır. Yerleşik çip gerekir; bu yüzden tek seçeneğiniz fiziksel SIM'dir. Birçok sağlayıcı (Roami dahil) ayrıca fiziksel SIM kart da satar.

**Samsung Galaxy'mde eSIM olup olmadığını nasıl bilirim?**
`*#06#` tuşlayın — EID görünüyorsa destekleniyordur. Ayrıca Ayarlar > Bağlantılar > SIM Kart Yöneticisi altında "eSIM Ekle" seçeneğini kontrol edebilirsiniz. Bazı ABD operatör ve A-serisi varyantları onu gizler.

**OnePlus 11 eSIM'i destekliyor mu?**
Hayır. OnePlus eSIM'i OnePlus 12 ile başlayarak ekledi. 11, 10, 9 ve Nord serisi donanımdan yoksundur.

**iPhone'umun operatör kilitli olup olmadığını nasıl kontrol ederim?**
Ayarlar > Genel > Hakkında > Operatör Kilidi. "SIM kısıtlaması yok" kilitsiz demektir. Başka bir şey o operatöre kilitli demektir.

**Hangi iPad modelleri eSIM'i destekler?**
iPad Pro (3. nesil ve yenisi), iPad Air (3. nesil ve yenisi), iPad (10. nesil ve yenisi) ve iPad mini (6. nesil ve yenisi) — yalnızca hücresel modeller. Yalnızca Wi-Fi'lı iPad'lerde eSIM donanımı yoktur.

**eSIM uyumlu telefonların listesini nerede bulabilirim?**
[eSIM uyumlu telefonların tam listesi (2026)](/compatibility/) iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi ve daha fazlasını kapsar.

**Telefon kilidi ile operatör kilidi arasındaki fark nedir?**
Telefon (aktivasyon) kilidi hırsızlığa karşıdır — iPhone'da iCloud, Android'de Google FRP — ve yalnızca orijinal sahip kaldırabilir. Operatör kilidi, telefonunuz ödendikten ve uygun hale geldikten sonra operatörünüzün ücretsiz kaldırdığı bir şebeke kısıtlamasıdır.

**Çin telefonlarında neden eSIM yok?**
Çin anakarası, yerli telefonların çift fiziksel SIM için sertifikalandırılmasını şart koşar; bu yüzden Apple ve Android markaları Çin cihazlarını iki nano-SIM yuvasıyla ve eUICC çipi olmadan gönderir. Bu donanımdır — sonradan etkinleştirilemez.

**EID'si olmayan bir telefona eSIM ekleyebilir miyim?**
Hayır. eUICC çipi anakarta lehimlidir. Hiç kurulmamış donanımı ekleyen bir adaptör, uygulama, jailbreak veya yazılım güncellemesi yoktur.

**Fabrika ayarlarına sıfırlama "eSIM desteklenmiyor"u düzeltir mi?**
Hayır. Sıfırlama donanımı değiştirmez veya operatör kilidini kaldırmaz. Ancak bozuk yarı kurulmuş bir profili temizleyebilir; bu yüzden yazılım aksaklıkları için denemeye değer — yedek aldıktan sonra.

**Bir sağlayıcı EID'yi istediğinde ne için kullanılır?**
EID, sağlayıcınızın belirli bir eSIM profilini okutmadan önce telefonunuzun çipine bağlamasını sağlar. Planın tam olarak sizin cihazınıza gittiğini bu şekilde bilirler — bunu eSIM'in "adresi" olarak düşünün.

**SIM takmadan telefonumun kilitsiz olduğunu nasıl bilirim?**
iPhone: Ayarlar > Genel > Hakkında > Operatör Kilidi — "SIM kısıtlaması yok" kilitsiz demektir. Android: Ayarlar > Telefon hakkında > Durum (veya SIM durumu) yoluna gidin ve "SIM kilitli" veya "SIM kilitli değil" ifadesine bakın.

👉 **Telefonunuzun uygun olduğunu doğruladınız mı?** Bağlanmak için [ABD için bir eSIM](/united-states-esim/) veya [Japonya için eSIM](/japan-esim/) alın.


## Ücretsiz eSIM ile Uyumluluğunuzu Test Edin

Telefonunuzun eSIM'i gerçekten kullanabildiğini doğrulamanın en hızlı yolu bir **ücretsiz deneme eSIM'i** kurmaktır. Hiçbir maliyeti yoktur, 2 dakika sürer ve kurulup bağlanırsa donanımınız hazırdır.

👉 [**Ücretsiz Roami eSIM'inizi hemen alın**](/free-esim/)

---

*Belirli cihazınız veya hatanız burada kapsanmıyorsa bize ulaşın; telefonunuzun eSIM'e uygun olup olmadığını doğrulamanıza yardımcı olalım.*
## Kaynaklar

- [GSMA — eSIM (SGP.22) spesifikasyonu](https://www.gsma.com/esim/)
- [Apple Destek — iPhone'da eSIM kurulumu](https://support.apple.com/en-us/HT212780)
- [Google Destek — eSIM kurulumu](https://support.google.com/pixelphone/answer/14853135)
- [Google Destek — Android eSIM](https://support.google.com/android/answer/11241215)
