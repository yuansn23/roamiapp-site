---
title: "eSIM Etkinleştirme Nedir ve Nasıl Çalışır?"
h1_title: "eSIM Etkinleştirme Nedir ve Nasıl Çalışır?"
description: "eSIM etkinleştirme nedir? iPhone ve Android'de uyumluluk kontrollerini, QR okutmayı ve yaygın hataları adım adım anlatan rehber."
keywords: ["eSIM etkinleştirme nedir", "eSIM etkinleştirme nasıl çalışır", "eSIM etkinleştirme süreci", "esim uyumluluğu nasıl kontrol edilir", "telefonum esim destekliyor mu", "eSIM uyumluluk kontrolü", "eSIM etkinleştirme anlamı", "Android eSIM", "eSIM QR kodu", "seyahat eSIM"]
date: 2026-09-24T00:00:00Z
lastmod: 2026-09-24T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Sorun Giderme", "Seyahat Kurulumu", "Uyumluluk"]
toc: true
image: "/img/faq/esim-activation-how-it-works.webp"
image-1: "/img/faq/esim-activation-how-it-works-1.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Güncellenme tarihi"
  min_read: "dk okuma"
  toc: "İçindekiler"

breadcrumbs:
  home:
    text: "Ana Sayfa"
    url: "/"
  parent:
    text: "Yardım Merkezi"
    url: "/faq/" 

# Sidebar: Popular eSIMs
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

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Ücretsiz eSIM Talep Et"
  icon: "🎁"
  item_suffix: "Ücretsiz eSIM"
  item_subtitle: "Ücretsiz eSIM"
  items:
    - name: "UK eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Almanya"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Tayland"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "Popüler Sorular"
  items:
    - question: "eSIM etkinleştirme nedir ve nasıl çalışır?"
      url: "faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "eSIM nasıl etkinleştirilir?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "iPhone'da (Tüm Modeller) eSIM nasıl etkinleştirilir?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Güncel eSIM Uyumluluk Listesi"
      url: "/compatibility/"
---


> **Editör Notu:** eSIM etkinleştirme, fiziksel SIM takmak yerine operatör profilini internet üzerinden — QR kodu, operatör uygulaması veya manuel SM-DP+ girişi yoluyla — telefonunuza indirmek demektir. Bu rehber Apple ve Android resmi dokümantasyonunu ve GSMA standartlarını izler. Sonunda telefonunuzun hangi etkinleştirme yöntemini kullandığını ve bunu nasıl tamamlayacağınızı bileceksiniz.

eSIM etkinleştirme, telefonunuzun gömülü SIM çipine bir operatör profili indirme sürecidir — operatörün SM-DP+ sunucusundan; genellikle QR kodu okutarak, bilgileri elle girerek veya operatörün uygulaması üzerinden yükleyerek. İki ile beş dakika sürer, Wi-Fi bağlantısı gerektirir ve bu sayfa her yöntemi ve süreci kesintiye uğratabilecek hataları açıklar.

## eSIM Etkinleştirme Ne Demektir?

**Nedir?** Telefonunuzu 2 dakikanın altında mobil ağa sokan dijital SIM indirmesi – plastik karta gerek yok.

**Süreç nasıl çalışır?**
- Bir QR kodu okutursunuz (veya bir operatör uygulaması kullanırsınız)
- Telefonunuz, operatörün güvenli sunucusundan dijital bir profil indirir
- Telefonunuz yerel ağa anında bağlanır

**Telefonunuz bunu destekliyor mu?** `*#06#` tuşlayın – 32 haneli bir EID görüyorsanız evet. Yalnızca IMEI numaraları görünüorsa hayır.

**Neye ihtiyacınız var?** Kararlı bir Wi‑Fi bağlantısı + bir eSIM paketi (QR kodu veya uygulama)

**Tüm süreç ne kadar sürer?** QR okutma: ~1-2 dakika. İlk ağ bağlantısı: 10-15 dakikaya kadar.

> 💡 **Temel gereksinim:** Kurulumu tamamlamak için aktif bir internet bağlantınız (Wi‑Fi) OLMALI. Çevrimdışı yapılamaz. Bu zorunlu bir gerekliliktir – profil operatörün sunucusundan indirilmelidir.

**Telefonunuzun uyumlu olduğundan emin değil misiniz?** Dijital SIM'lerle çalışan cihazların tam listesi için **[tam uyumluluk listemize](/compatibility/)** bakın.

**Ödemeden önce süreci test etmek mi istiyorsunuz?** Bir **[ücretsiz deneme Roami eSIM](/free-esim/)** alın – 2 dakika sürer ve her şeyin telefonunuzda çalıştığını doğrular.


## Hangi eSIM Etkinleştirme Yöntemini Kullanmalısınız?

Her etkinleştirme aynı değildir. Doğru yaklaşımı bulmak için senaryonuzu seçin.

| Durumunuz | En İyi Yöntem | Neye İhtiyacınız Olacak |
| :--- | :--- | :--- |
| **Çevrimiçi bir seyahat paketi satın aldınız** (Roami, Airalo, Holafly vb.) | QR kodu okutma | Size e-postayla gelen QR kodu + Wi‑Fi bağlantısı |
| **Operatörünüz size QR kodu gönderdi** | QR kodu okutma | Operatörden gelen QR kodu + Wi‑Fi bağlantısı |
| **Operatörünüzün bir uygulaması var** (T‑Mobile, Verizon, Orange vb.) | Operatör uygulaması gönderimi | Kurulu operatör uygulaması + hesap girişi |
| **Kameranız bozuk veya okutamıyorsunuz** | Manuel giriş | SM‑DP+ adresi + etkinleştirme kodu (e-postadan) + onay kodu (gerekliyse) |
| **Eski telefondan geçiyorsunuz** | Yakındaki cihazdan aktarım | Her iki telefon da yakında + Bluetooth AÇIK + Wi‑Fi AÇIK |
| **Abonelikli bir operatör paketi kullanıyorsunuz** | Operatör uygulaması veya mağaza ziyareti | Hesap bilgileri + bazen mağazada kimlik doğrulama |


## Tam eSIM Etkinleştirme Rehberi

Bu süreci ilk kez yaşayan herkes için adım adım yol burada.

| Adım | Aklınızdan Geçen | Ne Yapmalı | Tahmini Süre |
| :--- | :--- | :--- | :--- |
| **1. Anlamak** | "Bu gerçekte nedir ve neden önemsemeliyim?" | Temelleri öğrenin – fiziksel kart olmadan çevrimiçi kurduğunuz dijital bir SIM. | 5 dakika |
| **2. Uyumluluğu kontrol etmek** | "Telefonum bunu destekliyor mu hiç?" | EID numarası için `*#06#` tuşlayın. Veya test için ücretsiz bir deneme alın. | 1 dakika |
| **3. Paket satın almak** | "Hangi paketi almalıyım ve nereden satın alırım?" | Bir seyahat paketi (geziler için) veya yerel operatör paketi (uzun süreli konaklama için) seçin. | 5-10 dakika |
| **4. Etkinleştirmek** | "QR kodum elimde – şimdi ne yapacağım?" | Ayarlar > Hücresel > eSIM Ekle bölümüne gidin, QR kodunu okutun ve bekleyin. | 2 dakika |
| **5. İlk bağlantı** | "Etkinleştirildi diyor ama sinyalim yok – bir sorun mu var?" | Telefonun yerel kuleleri bulması için 10-15 dakikaya kadar bekleyin. Veri Dolaşımı'nı açın. | 15 dakikaya kadar |
| **6. Sorun giderme** | "Hâlâ çalışmıyor – ne yapmalıyım?" | Wi‑Fi, Veri Dolaşımı, APN ayarları veya operatör kilidi durumunu kontrol edin. | 5-10 dakika |
| **7. Paketinizi kullanmak** | "Bağlandım – şimdi veriyi ve ayarları nasıl yönetirim?" | Yeni hattınızı veri için varsayılan yapın, aramalar için fiziksel SIM'inizi tutun (çift SIM). | Uygulanmaz |

**Baştan bağlantıya toplam süre:** Genellikle 10-15 dakika. Sorun yaşarsanız 30 dakika ayırın.


## eSIM Nedir?

eSIM (Embedded Subscriber Identity Module), üretim sırasında telefonunuzun ana kartına kalıcı olarak lehimlenmiş küçük, programlanabilir bir çiptir. Geleneksel plastik SIM kartla tamamen aynı işi yapar – bir mobil ağa kimliğinizi kanıtlar – ancak %100 dijiteldir.

Yeniden yazılabilir olduğu için, operatör değiştirebilir veya veri paketi ekleyebilirsiniz; SIM tepsisini açmanıza veya fiziksel kartın postayla gelmesini beklemenize hiç gerek yoktur. Teknoloji, cihazlar ve operatörler genelinde küresel birlikte çalışabilirliği garanti eden [GSMA standardı SGP.22](https://www.gsma.com/esim/) tarafından yönetilir. [eSIM için resmi Apple destek sayfası](https://support.apple.com/en-us/HT212780) uyumlu iPhone modelleri hakkında ayrıntılı bilgi verir; [Android'in resmi eSIM destek sayfası](https://support.google.com/android/answer/11241215) ise Android cihazları kapsar.

**Şöyle düşünün:** Fiziksel SIM, yanınızda taşıdığınız plastik bir anahtar gibidir. eSIM, telefonunuzda yaşayan dijital bir anahtar gibidir – anahtarınızı elektronik olarak teslim alabilirsiniz, çilingire gitmenize hiç gerek yoktur.


## eSIM Etkinleştirme Nasıl Çalışır?

Fiziksel bir SIM satın aldığınızda ağ verisi zaten çipe gömülüdür. eSIM'de telefonunuzdaki çip başlangıçta boştur. Etkinleştirme süreci, bu boş çipi operatörünüzün verisiyle doldurmaktan ibarettir.

Perde arkasında olanlar:

- **SM-DP+ Sunucusu:** Operatörünüz, size özgü dijital profilinizi SM-DP+ (Subscription Manager Data Preparation) adlı güvenli bir sunucuda depolar. Onu, indirmeye hazır olana kadar profilinizin beklediği dijital bir depo olarak düşünün.

- **El Sıkışma:** QR kodunu okuttuğunuzda telefonunuz onu okur, internete bağlanır ve o belirli sunucuya ulaşır.

- **İndirme:** Telefonunuz profili güvenli biçimde indirir ve gömülü çipe yükler. Yüklendikten sonra, fiziksel bir SIM gibi yerel baz istasyonlarına bağlanabilir.

### eSIM Onay Kodu Nedir?

Bazı operatörler kurulum sürecinde bir **onay kodu** (etkinleştirme kodu veya doğrulama kodu da denir) ister. Bu, QR kodunu okuttuktan sonra veya manuel giriş sırasında girdiğiniz 4–8 haneli bir koddur.

**Nerede bulunur:** Onay kodu genellikle QR kodunuzla aynı e-postada yer alır. "Onay Kodu", "Etkinleştirme Kodu", "Doğrulama Kodu" veya "SM-DP+ Kodu" başlıklı bir bölüm arayın.

**Bazı operatörler neden ister:** Ek bir güvenlik katmanı ekler – biri QR kodunuzu çalsa bile, onay kodu olmadan profili etkinleştiremez.

**Bulamazsanız ne yapmalısınız:** Spam klasörünüzü kontrol edin. Orada yoksa, sipariş numaranızla sağlayıcınızın desteğine başvurun.

> 💡 **Profesyonel İpucu:** Profil bir sunucudan indirilmek zorunda olduğu için, kurulumu tamamlamak için mutlaka aktif bir internet bağlantınız (Wi‑Fi) olmalıdır. Çevrimdışı yapılamaz. Seyahattesiniz ve Wi‑Fi'niz yoksa havalimanının ücretsiz Wi‑Fi'sini veya bir arkadaşınızın telefonundan mobil hotspot kullanın.

### Wi‑Fi Olmadan Etkinleştirebilir misiniz?

**Hayır. Bu mümkün değildir.**

Profil, operatörün SM‑DP+ sunucusundan internet üzerinden indirilmek zorundadır. İnternet bağlantısı olmadan telefonunuzun sunucuya ulaşıp profili indirmesinin bir yolu yoktur.

**Wi‑Fi'niz yoksa ne yapmalısınız:**
- Havalimanının ücretsiz Wi‑Fi'sini kullanın (çoğu uluslararası havalimanı sunar)
- Bir arkadaşınızın mobil hotspot'unu kullanın
- Bir kafe veya otel Wi‑Fi'sini kullanın
- Önce bir fiziksel SIM satın alın (yedek olarak) ve dijital olanı kurmak için onun veri bağlantısını kullanın

**Önemli:** Paketinizi, ev Wi‑Fi'nizdeyken **evden çıkmadan önce** kurun. Bu, gezginler için en önemli tek ipucudur.

### eSIM Etkinleştirme ve eSIM İndirme Arasındaki Fark

İnsanlar bu terimleri birbirinin yerine kullanır ama aralarında küçük bir fark vardır:

| Terim | Gerçekte Anlamı |
|------|----------------------|
| **İndirme** | Profilin operatörün sunucusundan telefonunuza aktarılması teknik eylemi (10‑60 saniye sürer) |
| **Etkinleştirme** | Tüm süreç – uyumluluğu kontrol etme, paket satın alma, QR kodunu okutma, profili indirme ve ağa bağlanma |

**Uygulamada:** Biri "eSIM'imi etkinleştiriyorum" dediğinde genellikle tüm süreçten bahseder. Bir operatör "profil başarıyla indirildi" dediğinde teknik aktarımın tamamlandığını kasteder. Çoğu kullanıcı için ayrım önemli değildir – sadece adımları izleyin, bağlanacaksınız.


## eSIM Etkinleştirme Kontrol Listesi

**Dijital paketinizi kurmayı denemeden ÖNCE bu kontrol listesini tamamlayın:**

| Adım | Kontrol | Nasıl Doğrulanır |
| :--- | :--- | :--- |
| **1** | Telefonunuz bunu destekliyor | `*#06#` tuşlayın – EID arayın. EID yoksa durun – fiziksel SIM'e ihtiyacınız var. |
| **2** | Telefonunuz operatör kilitsiz | Ayarlar > Genel > Hakkında > Operatör Kilidi – "SIM kısıtlaması yok" yazmalı. |
| **3** | Kararlı bir Wi‑Fi bağlantınız var | Bir web sitesi yükleyerek test edin. Kamu Wi‑Fi'leri operatör sunucularını engelleyebilir – kurulum başarısız olursa farklı bir ağ deneyin. |
| **4** | QR kodunuz VEYA etkinleştirme kodunuz + SM‑DP+ adresiniz var | QR kodların süresi 30‑90 gün içinde dolar – son kullanma tarihi için e-postanızı kontrol edin. |
| **5** | Onay kodunuz var (gerekliyse) | E-postanızda 4‑8 haneli bir kod arayın. Bazı operatörler bunu ister. |
| **6** | iOS veya Android'iniz güncel | Ayarlar > Yazılım Güncelleme bölümüne gidin. Eski işletim sistemi sürümlerinde hatalar olabilir. |

> ⚠️ **Uyarı:** Profil "Etkinleştiriliyor" durumundayken veya sinyal alamıyorsanız profili asla silmeyin. Profili silmek genellikle QR kodunu bir daha okutamayacağınız anlamına gelir ve yedeği için müşteri desteğine başvurmanız gerekir.


## Fiziksel SIM ve Dijital SIM Karşılaştırması

| Özellik | Geleneksel Fiziksel SIM | Dijital eSIM |
| :--- | :--- | :--- |
| **Biçim** | Çıkarılabilir plastik çip | Gömülü dijital çip |
| **Etkinleştirme Süresi** | Günler (postayı beklemek) veya mağazada | Anında (internet üzerinden) – 2 dakika |
| **Operatör Değiştirme** | Kartları fiziksel olarak değiştirmek gerekir | Telefon Ayarları üzerinden yapılır |
| **Birden Fazla Profil** | Genellikle 1‑2 yuva ile sınırlı | 5‑8 profil depolayabilir (telefona bağlı) |
| **Güvenlik** | Kaybedilebilir, çalınabilir veya zarar görebilir | Telefon çalınsa bile fiziksel olarak çıkarılamaz |
| **Seyahatten önce satın alma** | ❌ Teslimat beklenmeli veya varış noktasında alınmalı | ✅ Her an, her yerden çevrimiçi satın alınabilir |
| **Telefonlar arasında geçiş** | Kolay – sadece kartı taşıyın | Seyahat profilleri tek seferlik kurulum; operatör profilleri aktarılabilir |
| **İkisi de aktif olabilir mi?** | Uygulanmaz – her yuvada yalnızca bir fiziksel SIM | ✅ Evet – dijital + fiziksel aynı anda aktif olabilir (çift SIM) |

### Dijital Bir Paket Eklediğinizde Fiziksel SIM'inize Ne Olur?

**Kesinlikle hiçbir şey.** Fiziksel SIM'iniz tamamen aktif ve bağımsız kalır.

Dijital bir paket kurduğunuzda:
- Fiziksel SIM'iniz arama, mesaj ve veri için (veri hattı olarak ayarladıysanız) normal şekilde çalışmaya devam eder.
- Dijital paket, telefonunuza ikinci bir hat ekler.
- Veri, arama ve mesajlar için hangi hattı kullanacağınızı seçebilirsiniz.
- Her iki hat aynı anda aktif olabilir (çift SIM çift bekleme).

**Şöyle düşünün:** Fiziksel SIM'iniz birincil telefon numaranızdır. Dijital paket, ihtiyacınıza göre açıp kapatabileceğiniz ek bir hattır (ikinci bir SIM kartı gibi).

### Tek Profil Birden Fazla Cihazda Kullanılabilir mi?

**Hayır. Bu mümkün değildir.**

Her profil, etkinleştirildiği cihazın **EID**'sine (eUICC Identifier) kriptografik olarak bağlıdır. Telefonunuzun EID'si benzersizdir – eSIM donanımınız için bir seri numarası gibidir.

Aynı QR kodunu iki telefonda okutmaya çalışırsanız ikinci telefon bir hata alır: "QR kodu zaten kullanıldı" veya "Etkinleştirme başarısız."

**Bunun yerine yapabilecekleriniz:**
- Her cihaz için ayrı bir paket satın alın
- Tablet veya laptopunuzla veri paylaşmak için telefonunuzdan Kişisel Hotspot kullanın
- Operatör tabanlı bir paketiniz varsa (seyahat değil), bazı operatörler cihazlar arasında aktarıma izin verir ([eSIM aktarım rehberimize](/faq/how-to-transfer-esim-between-iphone-and-android/) bakın)

**İstisna:** Bazı operatörler, aynı hesapta birden fazla profilin bulunabildiği "çok cihazlı" paketler sunar – ancak her cihaz yine de kendi benzersiz profilini alır. Paket cihazlar arasında paylaşılır ama profiller cihaza özeldir.


## eSIM Nasıl Etkinleştirilir

Operatörünüze ve cihazınıza bağlı olarak kurulumu başlatmanın üç temel yolu vardır. Tüm telefon modelleri genelinde tam adım adım anlatım için **[genel eSIM etkinleştirme rehberimize](/faq/how-to-activate-an-esim/)** bakın.

### QR Kodu Okutma
Çoğu **seyahat paketi** için standart yaklaşım budur.

1. **Ayarlar > Hücresel** (veya Mobil Veri) bölümüne gidin.
2. **eSIM Ekle** veya **Veri Planı Ekle** seçeneğine dokunun.
3. **QR Kodu Kullan**'ı seçin.
4. Operatörünüzün sağladığı QR kodunu okutun ve ekrandaki yönergeleri izleyin.
5. İstenirse **onay kodunuzu** (e-postanızdaki 4‑8 haneli kod) girin.
6. Profilin inmesini bekleyin (10‑60 saniye sürer).
7. Paketinizi etiketleyin (örneğin "Japonya Gezisi" veya "ABD Veri").

### Manuel Giriş
Kameranız bozuksa veya QR kodunu okutamıyorsanız (örneğin kod, kurmaya çalıştığınız telefonun ekranındaysa) bilgileri elle girebilirsiniz.

1. QR kodu okutma ekranında, alttaki **Bilgileri Manuel Girin** seçeneğine dokunun.
2. Onay e-postanızda sağlanan **SM-DP+ Adresi** ve **Etkinleştirme Kodu**'nu girin.
3. Operatörünüz bir **onay kodu** gerektiriyorsa istendiğinde girin.
4. Profilin inmesini ve etkinleşmesini bekleyin.

### Operatör Uygulaması Gönderimi
Birçok modern operatör, tek düğmeyle uygulaması üzerinden doğrudan kurulum yapmanıza izin verir. Uygulama, QR koduna gerek kalmadan profili yüklemek için telefonunuzun ayarlarıyla otomatik olarak iletişim kurar.

**Nasıl çalışır:**
1. Operatörünüzün uygulamasını indirin (örneğin T‑Mobile, Verizon, Orange, EE).
2. Hesabınıza giriş yapın.
3. Uygulamada "eSIM Etkinleştir" veya "eSIM Al" seçeneğini arayın.
4. Düğmeye dokunun – uygulama profili otomatik olarak telefonunuza gönderir.
5. Kurulumu tamamlamak için ekrandaki yönergeleri izleyin.

> 💡 **Profesyonel İpucu:** Uygulama tabanlı kurulum genellikle en hızlı yöntemdir (1 dakikanın altında) ve QR kodu okutmayı gerektirmez. Ayrıca "QR kodu geçersiz" gibi hatalara daha az açıktır.


## Telefonunuzun eSIM Desteklediğini Nasıl Kontrol Edersiniz

Dijital bir paket kurmayı denemeden önce, telefonunuzda gerçekten gerekli donanımın olduğunu doğrulamanız gerekir. İstemediğiniz son şey, bir seyahat paketi satın alıp telefonunuzun bunu desteklemediğini keşfetmektir.

### Evrensel EID Kontrolü

Bu, **"telefonumda eSIM var mı"** veya **"telefonum eSIM destekliyor mu"** sorusuna en hızlı ve en güvenilir cevabı verir.

1. Telefonunuzun **tuşlama ekranını** (arama yapmak için kullandığınız uygulama) açın.
2. `*#06#` tuşlayın (telefon numarası gibi) ve arama tuşuna basın.
3. Cihazınızın tanımlayıcılarını gösteren bir ekran çıkar. **EID** (Embedded Identity Document) etiketli bir numara arayın – 32 haneli bir kod olmalıdır.
   - **EID görüyorsanız:** Tebrikler – telefonunuzda donanım var. Kuruluma devam edebilirsiniz.
   - **Yalnızca IMEI numaraları (IMEI1, IMEI2) görüyorsanız ve EID yoksa:** Telefonunuz dijital SIM **desteklemiyor**. Fiziksel SIM kullanmalısınız.

Bu yöntem iPhone'larda (eSIM'li tüm modeller) ve Samsung, Google Pixel, OnePlus, Motorola ve Xiaomi dahil neredeyse her Android telefonda çalışır.

> 💡 **Profesyonel İpucu:** Bir iPhone'unuz varsa ve **iPhone'da eSIM nasıl kontrol edilir** diye merak ediyorsanız, kod tamamen aynıdır. iPhone'larda EID'yi **Ayarlar > Genel > Hakkında** bölümünde de bulabilirsiniz – **Dijital SIM** veya **Kullanılabilir SIM** bölümüne kaydırın.

### Ayarlar Üzerinden Kontrol

Kod tuşlamak istemiyorsanız veya `*#06#` cihazınızda çalışmıyorsa (nadir, ancak bazı operatör kilitli telefonlarda olur) EID'yi veya eSIM menüsünü telefonunuzun ayarlarından bulabilirsiniz.

**iPhone'da (iOS):**
- **Ayarlar > Genel > Hakkında** bölümüne gidin.
- **Dijital SIM** veya **Kullanılabilir SIM** görene kadar aşağı kaydırın.
- **EID**'nizin orada listelendiğini göreceksiniz.
- Ayrıca **Ayarlar > Hücresel** bölümüne gidip **eSIM Ekle** veya **Hücresel Plan Ekle** seçeneğini arayabilirsiniz. Grileşmiş veya eksikse iPhone'unuz ana kara Çin modeli olabilir (eSIM yoktur) veya operatör kilitli olabilir.

**Samsung'da (One UI):**
- **Ayarlar > Bağlantılar > SIM Kart Yöneticisi** bölümüne gidin.
- **eSIM Ekle** veya **eSIM İndir** gibi bir seçenek görüyorsanız telefonunuz destekliyordur.
- EID'yi bulmak için **Ayarlar > Telefon Hakkında > Durum Bilgisi** bölümüne gidin – **EID** arayın.

**Google Pixel ve Stok Android'de:**
- **Ayarlar > Ağ ve İnternet > Mobil Ağ** bölümüne gidin.
- **Operatör Ekle** veya **Bunun yerine SIM indirilsin mi?** seçeneklerini arayın.
- EID'yi bulmak için: **Ayarlar > Telefon Hakkında > SIM Durumu** – varsa EID görünecektir.

**OnePlus, Xiaomi, Motorola'da (Android):**
- Yol biraz değişir ancak genellikle: **Ayarlar > Ağ ve İnternet > Mobil Ağ > Gelişmiş > eSIM Ekle**.
- Android'de kontrol için `*#06#` tuşlayın – evrenseldir.

### Uyumluluğu IMEI ile Kontrol Etme

Telefonunuza erişiminiz yoksa (örneğin çevrimiçi ikinci el bir cihaz satın alıyorsunuz), desteği kontrol etmek için telefonun IMEI numarasını kullanabilirsiniz:

1. IMEI numarasını bulun – cihazda `*#06#` tuşlayın veya **Ayarlar > Telefon Hakkında** altına bakın.
2. Çevrimiçi bir **eSIM uyumluluk denetleyicisine** gidin (birçok sağlayıcı ücretsiz IMEI sorgulama aracı sunar).
3. IMEI'yi girin. Araç, o cihaz modelinin dijital SIM destekleyip desteklemediğini söyleyecektir.

> Önemli: IMEI tek başına eSIM bilgisi içermez ancak tam telefon modelinizi tanımlar. Araçlar IMEI'yi üretici veritabanlarıyla çapraz kontrol eder.

### Ücretsiz Deneme

Gerçek bir testin yerini hiçbir şey tutmaz. Bir **[Roami ücretsiz deneme eSIM](/free-esim/)** 2 dakikada kurulur ve tam pakete para harcamadan önce telefonunuzun hazır olduğunu doğrular.

### Bölgesel Model Farklılıkları

Telefon modelinizin dijital SIM'leri "desteklemesi" gerekiyor olsa bile, bölgesel varyantlarda devre dışı bırakılmış olabilir:

| Bölge/Model | Destek | Neden? |
| :--- | :--- | :--- |
| **iPhone (ana kara Çin)** | ❌ Hayır | Çift fiziksel SIM donanımı – dijital çip kaldırılmış |
| **Samsung S20 FE (ABD operatörü)** | ❌ Hayır | Maliyeti düşürmek için operatör tarafından devre dışı |
| **Google Pixel 4a (Japonya)** | ❌ Hayır | Operatör tarafından devre dışı (Docomo/SoftBank) |
| **Samsung Galaxy A serisi (ABD)** | ⚠️ Değişken | Bazı modellerde var, bazılarında yok |
| **Xiaomi (Çin ROM)** | ❌ Hayır | Çin içi modellerde donanım yok |
| **Huawei (Çin içi)** | ❌ Hayır | Google hizmeti yok, dijital SIM yok |

**Ne yapmalı:** EID'yi her zaman `*#06#` ile kontrol edin – bu kesin testtir. Telefonunuzun desteklediğini bir forum yazısı söylüyor diye varsaymayın.

### Telefonunuz Uyumlu Değilse Ne Yapmalısınız?

Tüm bu adımları uyguladıktan sonra EID veya eSIM menüsü bulamadıysanız, telefonunuz dijital SIM kullanamaz. Üç seçeneğiniz var:

- **Fiziksel bir seyahat SIM'i kullanın** – birçok sağlayıcı fiziksel SIM kartlar da gönderir.
- **Varış noktanızda yerel bir SIM satın alın** – her telefonda hâlâ çalışır.
- **Daha yeni bir telefona geçin** – bir Google Pixel 6a, Samsung Galaxy S21 veya sonrası, ya da bir iPhone XR veya sonrası (ana kara Çin modelleri hariç) düşünün.


## Telefon Markasına Göre Etkinleştirme Yolu

| Telefon Markası | "eSIM Ekle" Yolu | Notlar |
|-------------|-----------------|-------|
| **iPhone** | Ayarlar > Hücresel > eSIM Ekle > QR Kodu Okut | Ayarlar > Genel > Hakkında > eSIM Ekle üzerinden de çalışır |
| **Samsung** | Ayarlar > Bağlantılar > SIM Kart Yöneticisi > eSIM Ekle | One UI 4.0+ gerekli |
| **Google Pixel** | Ayarlar > Ağ ve İnternet > Mobil Ağ > Operatör Ekle | Stok Android yolu |
| **OnePlus** | Ayarlar > Wi‑Fi ve Ağ > SIM ve Ağ > eSIM Ekle | OxygenOS 13+ |
| **Motorola** | Ayarlar > Ağ ve İnternet > Mobil Ağ > Gelişmiş > Operatör > eSIM Ekle | Android 12+ |
| **Xiaomi (global)** | Ayarlar > Mobil Ağ > SIM kartlar > eSIM Ekle | Çin ROM'da eSIM yok |
| **Huawei (global)** | Ayarlar > Mobil Ağ > eSIM > eSIM profili ekle | Yalnızca global versiyonlar |


## Yaygın eSIM Etkinleştirme Hataları ve Çözümleri

| Hata / Belirti | En Olası Neden | Çözüm |
|----------------|-------------------|-----|
| **"Hücresel Plan Eklenemiyor"** | Telefon operatör kilitli veya QR kodu zaten kullanılmış (tek kullanımlık). | Telefonun kilitli olmadığını doğrulayın: Ayarlar > Genel > Hakkında > Operatör Kilidi "SIM kısıtlaması yok" demeli. Kilitsizse yeni bir QR kodu isteyin. |
| **"Etkinleştiriliyor..." aşamasında takılı** | Wi‑Fi bağlantısı koptu veya operatör sunucusu meşgul. | Profili SİLMEYİN. Uçak Modu'nu 30 saniye açın, sonra kapatın. Hâlâ takılıysa telefonu yeniden başlatın. |
| **"Geçersiz QR Kodu"** | QR kodunun süresi dolmuş veya bozulmuş. | Sağlayıcınızdan yeni bir QR kodu isteyin. Bunun yerine manuel girişi deneyin. |
| **Tamamlandıktan sonra sinyal yok** | Veri Dolaşımı etkin değil veya APN ayarları eksik. | Veri Dolaşımı'nı AÇIK konuma getirin. APN'yi elle yapılandırın (aşağıdaki tabloya bakın). |
| **Profil görünüyor ama veri yok** | Varsayılan veri hattı fiziksel SIM'e ayarlı. | Ayarlar > Hücresel > Hücresel Veri bölümüne gidin – yeni hattınızı veri hattı olarak seçin. |
| **iPhone'da "eSIM Desteklenmiyor"** | iPhone ana kara Çin'den (çift fiziksel SIM) veya XR/SE2'den eski. | Ayarlar > Genel > Hakkında bölümünde modeli kontrol edin. Çin modellerinde eSIM yoktur. |
| **QR kodu okutma çalışmıyor** | Kamera izinleri reddedilmiş veya ekran hasarlı. | Kamera izinlerini verin veya manuel giriş yöntemini kullanın. |
| **"Etkinleştirme başarısız – sunucuya ulaşılamıyor"** | Wi‑Fi bağlantıyı engelliyor (kurumsal ağ, VPN). | VPN'i devre dışı bırakın. Farklı bir Wi‑Fi ağına geçin veya mobil hotspot kullanın. |
| **"Onay kodu gerekli"** | Operatörünüz 4‑8 haneli bir doğrulama kodu istiyor. | Kod için e-postanızı kontrol edin. Bulamazsanız desteğe başvurun. |
| **"QR kodu zaten kullanıldı"** | QR kodu başka bir cihazda okutulmuş. | Seyahat paketleri tek kullanımlıktır – sağlayıcınızdan yeni bir QR koduna ihtiyacınız var. |
| **Bağlanmak 15 dakikadan uzun sürüyor** | Telefon yerel ağı bulmakta zorlanıyor. | Uçak Modu'nu açıp kapatın. Bir ağı elle seçin (Ayarlar > Hücresel > [hat] > Ağ Seçimi). |
| **"Profil indirme başarısız"** | Kesintili Wi‑Fi bağlantısı. | Yönlendiriciye yaklaşın. Farklı bir Wi‑Fi ağı deneyin. Süreci yeniden başlatın. |
| **Okuttuktan sonra "Etkinleştirme başarısız"** | QR kodu farklı bir bölge veya operatör için. | QR kodunun satın aldığınız paketle eşleştiğini doğrulayın. Doğru kod için sağlayıcıyla iletişime geçin. |

### Manuel APN Yapılandırması

Kurulumdan sonra **veri bağlantısı yok** yaşıyorsanız APN'yi elle yapılandırın:

| Sağlayıcı | APN | Kullanıcı Adı | Şifre |
|----------|-----|----------|----------|
| **Roami** | internet | (boş) | (boş) |
| **Airalo** | globaldata | (boş) | (boş) |
| **Holafly** | hola | (boş) | (boş) |
| **Nomad** | nbdata | (boş) | (boş) |
| **Orange** | orange.fr | (boş) | (boş) |
| **SFR** | sl2sfr | (boş) | (boş) |
| **T‑Mobile (ABD)** | fast.t-mobile.com | (boş) | (boş) |
| **AT&T (ABD)** | nxgen | (boş) | (boş) |
| **Verizon (ABD)** | vzwinternet | (boş) | (boş) |
| **EE (İngiltere)** | everywhere | (boş) | (boş) |
| **O2 (İngiltere)** | mobile.o2.co.uk | web | web |
| **Vodafone (İngiltere)** | internet | (boş) | (boş) |
| **Three (İngiltere)** | three.co.uk | (boş) | (boş) |
| **Google Fi** | h2g2 | (boş) | (boş) |

**APN nasıl yapılandırılır:**
- **iPhone:** Ayarlar > Hücresel > Hücresel Veri Ağı > APN alanlarını doldurun.
- **Android:** Ayarlar > Bağlantılar > Mobil Ağlar > Erişim Noktası Adları > yeni APN oluşturun.

Daha gelişmiş sorun giderme için **[eSIM Derin Sorun Giderme Rehberi 2026](/faq/esim-deep-troubleshooting-guide-2026/)** ve **[Çift eSIM Çalışmıyor mu? iPhone İçin 12 Çözüm](/faq/dual-esim-not-working-12-fixes-for-iphone/)** makalelerimize bakın – birçok çözüm cihazlar arasında geçerlidir.


## Yaygın Etkinleştirme Hataları

Destek verilerimize göre, insanları en çok zorlayan ilk üç hata şunlar:

### Wi‑Fi Olmadan Etkinleştirmeye Çalışmak

Bu, etkinleştirmenin başarısız olmasının 1 numaralı nedenidir — yukarıda *Wi‑Fi Olmadan Etkinleştirebilir misiniz?* bölümünde açıklandığı gibi, profil yalnızca operatörün SM‑DP+ sunucusundan internet üzerinden indirilebilir.

**Nasıl kaçınılır:** Paketinizi ev Wi‑Fi'nizdeyken evden çıkmadan önce kurun. Hâlâ seyahatteyseniz denemeden önce ücretsiz havalimanı veya otel Wi‑Fi'si bulun.

### Veri Dolaşımını Açmamak

Profiliniz doğru şekilde inmiştir ama sinyaliniz yoktur. Sorun ne? Veri Dolaşımı hâlâ kapalıdır.

**Nasıl kaçınılır:** Kurulumdan sonra Ayarlar > Hücresel > [yeni hattınız] bölümüne gidin ve Veri Dolaşımı'nı AÇIK konuma getirin. Seyahat paketlerinin çalışması için bu gereklidir.

### Etkinleştirme Ortasında Profili Silmek

Birkaç dakika boyunca "Etkinleştiriliyor..." görürsünüz, panik yapar ve profili silersiniz. Artık QR kodunu yeniden okutamazsınız.

**Nasıl kaçınılır:** Sabırlı olun. 15 dakikaya kadar bekleyin. Hâlâ takılıysa telefonunuzu yeniden başlatın – profili silmeyin. Silerseniz sağlayıcınızdan yeni bir QR koduna ihtiyacınız olur.


## Sıkça Sorulan Sorular

**Fiziksel SIM'imi ve dijital bir paketi aynı anda kullanabilir miyim?**
Evet! Modern akıllı telefonların çoğu Çift SIM işlevini destekler. Evden gelen arama ve mesajlar için fiziksel SIM'inizi aktif tutarken dijital paketinizi tamamen yerel veri için kullanabilirsiniz. Her iki hat da aynı anda aktiftir (çift bekleme).

**Dijital bir paket kurmak pilimi daha hızlı tüketir mi?**
Dijital bir paket kullanmak pil tüketimini artırmaz. Ancak iki aktif hattı (Çift SIM) aynı anda çalıştırmak, telefonunuz sürekli iki farklı ağ sinyali aradığı için hafif pil tüketimine neden olabilir. Fark genellikle günde %2‑5'tir.

**Tüm süreç ne kadar sürer?**
İndirme ve kurulum normalde 2 dakikadan az sürer. Ancak yerel ağa ilk kez bağlanmak, sinyal gücüne bağlı olarak bazen 10-15 dakika sürebilir. 15 dakikadan uzun sürerse yukarıdaki sorun giderme tablosuna bakın.

**Zaten kurulu bir paketim varsa EID'mi nasıl bulurum?**
iPhone'da **Ayarlar > Genel > Hakkında** bölümüne gidin ve **Dijital SIM** bölümüne kaydırın. Android'de `*#06#` tuşlayın – EID, IMEI numaralarının yanında görünür.

**İkinci el bir telefon satın almadan önce uyumluluğu IMEI ile kontrol edebilir miyim?**
Evet. Birçok çevrimiçi **eSIM uyumluluk denetleyicisi** aracı bir IMEI numarası kabul eder. O model için üreticinin resmi teknik özelliklerini de kontrol edebilirsiniz. Bu, özellikle eBay veya ikinci el bir pazardan telefon alırken kullanışlıdır.

**Paketimi eski telefonumdan yenisine aktarabilir miyim?**
Evet – ancak yöntem operatörünüze ve telefon modellerinize bağlıdır. Her iki platformu da kapsayan adım adım talimatlar için **[eSIM Nasıl iPhone ve Android Arasında Aktarılır](/faq/how-to-transfer-esim-between-iphone-and-android/)** makalemize bakın.

**Seyahat paketi ile yerel operatör paketi arasındaki fark nedir?**
Seyahat paketi yalnızca veridir, geziden önce çevrimiçi satın alınır ve QR koduyla anında etkinleşir. Telefon numarası yoktur. Yerel operatör paketi telefon numarası içerir, kimlik doğrulaması gerektirir ve uzun süreli konaklamalar için daha uygundur. Ayrıntılı karşılaştırma için **[İngiltere eSIM rehberimize](/united-kingdom-esim/)** bakın.

**Seyahat paketimde verim biterse ne olur?**
Sağlayıcınızın uygulaması veya web sitesi üzerinden çevrimiçi yükleme yapabilirsiniz – yeni veri, yeni bir QR kodu okutmaya gerek olmadan otomatik eklenir. Bazı sağlayıcılar tek dokunuşla yükleme sunar.

**Kurulumdan sonra paketim "Hizmet Yok" gösteriyor, neden?**
En yaygın olarak, Veri Dolaşımı AÇIK değildir veya telefonunuz hâlâ ev SIM'inizi veri için kullanıyor. Her iki ayarı da iki kez kontrol edin. Ayrıca telefonunuzun ağı otomatik seçecek şekilde ayarlandığından emin olun. Daha fazla çözüm için yukarıdaki sorun giderme tablosuna bakın.

**İngiltere paketini diğer Avrupa ülkelerinde kullanabilir miyim?**
Yalnızca paketiniz AB dolaşımını içeriyorsa. Seyahat paketleri genellikle AB dolaşımı içerirken, çoğu yerel İngiltere operatörü paketi (EE, Vodafone, Three) AB kullanımı için günde yaklaşık £2–2,50 ücret alır — O2'nin aylık abonelik paketleri ana istisnadır ve 25GB limitine kadar AB dolaşımı içerir. Seyahat etmeden önce paket ayrıntılarınızı kontrol edin.

**Onay kodu nedir ve neden gerekli?**
Onay kodu, bazı operatörlerin kurulum sırasında istediği 4‑8 haneli bir koddur. Ek bir güvenlik katmanı ekler – biri QR kodunuzu çalsa bile, onay kodu olmadan profili etkinleştiremez. Sağlayıcınızın e-postasında bulun.

**Paketimi etkinleştirmek için Wi‑Fi'm yoksa ne yapmalıyım?**
Wi‑Fi'niz olmalı – internet bağlantısı olmadan etkinleştirmek imkânsızdır. Havalimanının ücretsiz Wi‑Fi'sini, bir arkadaşınızın mobil hotspot'unu veya bir kafe/otel Wi‑Fi'sini kullanın. En iyi uygulama: kendi Wi‑Fi'nizdeyken evden çıkmadan önce kurun.

**Aynı profili telefonumda ve tabletime kullanabilir miyim?**
Hayır – her profil tek bir cihazın EID'sine bağlıdır. Her cihaz için ayrı bir pakete ihtiyacınız var. Telefonunuzun profili tabletinizde veya saatinizde kullanılamaz.

**Bu işin telefonumda çalışıp çalışmadığını test etmenin en ucuz yolu nedir?**
Bir **[Roami'den ücretsiz eSIM denemesi](/free-esim/)** alın – 2 dakika sürer, hiçbir maliyeti yoktur ve ücretli bir paket satın almadan önce telefonunuzun hazır olduğunu doğrular.

**Telefonum kaç profil depolayabilir?**
Modern telefonların çoğu 5‑8 profil depolayabilir, ancak modele bağlı olarak aynı anda yalnızca bir veya ikisi aktif olabilir. iPhone 13 ve sonrası iki aktif hattı destekler. Daha eski iPhone'lar (XR/11/12/SE) bir aktif hat artı bir fiziksel SIM destekler.

**Seyahat paketi kullanmak için telefonumun kilitsiz olması gerekir mi?**
Evet – telefonunuz operatör kilitliyse diğer ağlardan gelen profilleri reddeder. Ayarlar > Genel > Hakkında > Operatör Kilidi bölümünü kontrol edin – "SIM kısıtlaması yok" yazmalıdır. Kilidin açılmasını istemek için operatörünüzle iletişime geçin.

**"eSIM etkinleştirme başarısız" ne demektir?**
Profilin doğru şekilde indirilemediği veya kurulamadığı anlamına gelir. Yaygın nedenler: Wi‑Fi bağlantısı yok, QR kodunun süresi dolmuş, operatör sunucusu sorunları veya telefon uyumsuz. Belirli çözümler için yukarıdaki sorun giderme tablosuna bakın.

**Başkasının telefonu için paket etkinleştirebilir miyim?**
Evet – bir paket satın alıp QR kodunu ona iletebilirsiniz. Ancak uyumlu bir telefonu ve kararlı bir Wi‑Fi bağlantısı olması gerekir. QR kodu yalnızca bir kez okutulabilir, bu yüzden kurulum için hazır olduğundan emin olun.


## Sonuç

Dijital SIM teknolojisi, mobil ağlara bağlanma biçimimizi tamamen değiştirdi – plastik kartlar, ataçlar veya operatör mağazalarındaki kuyruklar yok. Süreci anlayarak – güvenli bir sunucu üzerinden dijital profil indirme – her küçük aksaklığı kolayca giderabilirsiniz. Ve daha başlamadan, `*#06#` veya ayarlarınızı kullanarak **telefonumun eSIM uyumlu olup olmadığını nasıl kontrol edeceğimi** bilmek size zaman ve sinir kazandırır.

**Hatırlanması gereken 3 en önemli şey:**
1. **Önce EID'yi kontrol edin** – `*#06#` tuşlayın. EID yoksa durun ve fiziksel bir SIM satın alın.
2. **Seyahatten önce kurun** – etkinleştirmek için Wi‑Fi gerekir. Havalimanı Wi‑Fi'si SMS doğrulaması isteyebilir.
3. **Veri Dolaşımı'nı açın** – seyahat paketlerinin çalışması için bu gereklidir.

Uluslararası bir gezi planlıyorsanız ve anında bağlantı deneyimi istiyorsanız, **Roami eSIM** 190+ ülkede sorunsuz, yüksek hızlı veri paketleri sunar. Dolaşım ücretlerini atlayın, profilinizi saniyeler içinde indirin ve uçağınız indiği anda bağlantıda kalın.

👉 **Paket mi arıyorsunuz?** Etkinleştirmeyi uygulamaya geçirmek için [ABD için eSIM](/united-states-esim/) veya [Avrupa için eSIM](/europe-esim/) sayfalarına göz atın.

👉 **Telefonunuzun desteklediğinden emin değil misiniz?** **[Tam uyumluluk listemizi](/compatibility/)** kontrol edin.

👉 **Denemeye hazır mısınız?** Bir [ücretsiz eSIM denemesi](/free-esim/) talep edin – 2 dakika sürer ve her şeyin çalıştığını doğrular.

---

*Eylül 2026 itibarıyla Apple resmi dokümantasyonu, GSMA standartları ve Android destek sayfalarına dayanmaktadır.*
## Kaynaklar

- [GSMA — eSIM (SGP.22) spesifikasyonu](https://www.gsma.com/esim/)
- [Apple Destek — iPhone'da eSIM kurulumu](https://support.apple.com/en-us/HT212780)
- [Google Destek — eSIM kurulumu](https://support.google.com/pixelphone/answer/14853135)
- [Google Destek — Android eSIM](https://support.google.com/android/answer/11241215)
