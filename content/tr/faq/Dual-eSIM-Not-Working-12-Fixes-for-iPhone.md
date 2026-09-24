---
title: "Çift eSIM Çalışmıyor mu? 12 iPhone Çözümü"
h1_title: "iPhone'da Çalışmayan Çift eSIM Nasıl Düzeltilir: 12 Çözüm"
description: "Çift eSIM çalışmıyor mu? 12 iPhone sorununu düzeltin: arama yönlendirme, VoLTE kurulumu, pil tüketimi ve iPhone 16 ile iOS 18 için operatör kilidi kontrolleri."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["çift eSIM çalışmıyor", "iPhone çift SIM servis yok", "çift eSIM sinyal sorunu", "eSIM operatör kilidi", "çift eSIM sorun giderme", "çift eSIM aktivasyon başarısız", "iOS 18 eSIM", "eSIM APN ayarları", "eSIM onay kodu", "çift eSIM servis yok"]
date: 2026-09-23T00:00:00Z
lastmod: 2026-09-23T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Sorun Giderme", "Seyahat Kurulumu"]
toc: true

# Site ve SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI metin çevirileri
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
    - name: "Germany"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkey"
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

# Sidebar: Ücretsiz eSIM teklifleri
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

# Sidebar: Popüler sorular
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


> **Editör Notu:** Bir hattı düşüren çift eSIM neredeyse her zaman bir operatör kilidi, yanlış yapılandırılmış bir APN veya bir çift-SIM ayarıdır — ölü bir plan değil. Aşağıdaki her çözüm Apple'ın resmi dokümantasyonunu ve GSMA standartlarını izler ve belirli bir belirtiyi hedefler. Hatanız için tam çözümü bulmak üzere teşhis tablosunu inceleyin.
> 
> **Önemli Çıkarımlar:** Bir hattın arama yapıp alamamasının en yaygın nedeni VoLTE veya plan sınırlarıdır. Gelen arama yönlendirme sorunları çoğu zaman Wi‑Fi Arama'yı kapatıp geri açmakla çözülür. iPhone'lar çift beklemedir, çift aktif değil – arama sırasında diğer hattın "Servis Yok" göstermesi normaldir. İkinci bir eSIM ekleyemiyorsanız Ayarlar'dan Operatör Kilidi'ni kontrol edin (`SIM kısıtlaması yok`). Çift eSIM pil tüketimi, zayıf sinyalli hatta 5G devre dışı bırakılarak azaltılabilir.

iPhone'daki çift eSIM sorunlarının çoğu beş nedene dayanır: bir operatör kilidi, bir plan veya VoLTE sınırı, Veri Dolaşımı veya varsayılan hat ayarları, bir arıza gibi görünen sıradan çift bekleme davranışı ya da ayar sıfırlamasının temizlediği bir iOS aksaklığı. Aşağıdaki dizinden belirtinizi eşleştirin ve karşılık gelen çözümü uygulayın — çoğu beş dakikadan az sürer.


## Çalışmayan Çift eSIM Nasıl Düzeltilir

**Telefonunuzda çift eSIM sorunları var. Hangisi?**

| Belirtiniz | Çözüme Atla |
|--------------|-------------|
| **İkinci eSIM "Servis Yok" gösteriyor** ama ilki çalışıyor | [Çözüm #2](#why-one-dual-esim-line-shows-no-service) |
| **Arama yapabiliyor ama gelen aramaları ALAMIYOR** | [Çözüm #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Arama sırasında diğer hat "Servis Yok" diyor** | [Çözüm #4](#one-line-showing-no-service-during-a-call-is-normal) – bu normaldir! |
| **İkinci eSIM eklenemiyor – "Operatör kilidi" hatası** | [Çözüm #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **İki hatla pil daha hızlı tükeniyor** | [Çözüm #6](#how-to-reduce-dual-esim-battery-drain) |
| **Fiziksel SIM tanınmıyor** | [Çözüm #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **Çin'den iPhone – hiç eSIM seçeneği yok** | [Çözüm #8](#dual-esim-in-china-hong-kong-and-macau) – donanım sınırlaması |
| **Veri çalışıyor ama internet yok (APN sorunu)** | [Çözüm #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – APN yapılandırması |
| **eSIM yanlışlıkla silindi** | [SSS #9](#frequently-asked-questions) – sağlayıcıya bağlı |
| **Emin değilim – başka bir şey** | [Tam sorun giderme tablosu](#dual-esim-troubleshooting-table) |

> 💡 **Önemli Bilgi:** Bir iPhone'da **iki hat** kullanıyorsanız, iPhone'lar **çift beklemedir, çift aktif değil** – arama sırasında diğer hat geçici olarak "Servis Yok" gösterebilir. Bu **normal davranıştır** (bkz. Çözüm #4). Onu "düzeltmeye" vakit harcamayın.

Çift SIM sorunlarınız hatalı bir kurulumdan kaynaklanıyorsa [genel eSIM aktivasyon rehberiyle](/faq/how-to-activate-an-esim/) başlayın, sonra aşağıdaki çözümleri izleyin — ve bu sayfanın adlandırmadığı her hata mesajı için [eSIM Derin Sorun Giderme Rehberi](/faq/esim-deep-troubleshooting-guide-2026/) her vakayı derinlemesine kapsar.


## Eksiksiz Çift eSIM Sorun Giderme Rehberi

Çift eSIM çalışmadığında çoğu iPhone kullanıcısının izlediği yol budur. Nerede olduğunuzu takip etmek için kullanın.

| Adım | Ne Oluyor | Ne Yapmalı | Nerede Bulunur |
| :--- | :--- | :--- | :--- |
| **1. Belirtileri tanımlayın** | "İkinci eSIM'imin sinyali yok." / "Arama alamıyorum." / "Pil hızla tükeniyor." | Belirtinizi yukarıdaki Hızlı Teşhis tablosuyla eşleştirin. | [10 Saniyelik Hızlı Teşhis](#dual-esim-quick-diagnostic-index) |
| **2. Normal davranış mı bakın** | "Arama sırasında diğer hattım Servis Yok gösteriyor." | Bu, çift bekleme iPhone'lar için **normaldir**. Çözüm #4'e atlayın. | [Çözüm #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Operatör kilidini elemeyin** | "İkinci bir eSIM hiç ekleyemiyorum." | Ayarlar'dan Operatör Kilidi'ni kontrol edin. "SIM kısıtlaması yok" demelidir. | [Çözüm #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Çözümü uygulayın** | Belirtinize özel çözümü izleyin. | Aşağıdaki 12 çözümden biri sorununuzu çözecektir. | [Çözümler #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. Hâlâ çalışmıyor mu?** | "Hiçbir çözüm işe yaramadı." | Sorun giderme tablosundaki yedek seçenekleri kullanın. | [Sorun giderme tablosu](#dual-esim-troubleshooting-table) |


## Çift eSIM Hızlı Teşhis Dizini

| Belirti | En Olası Neden | Çözüm Bölümü |
|---------|-------------------|--------------|
| İkinci eSIM "Servis Yok" gösteriyor ama ilki çalışıyor | VoLTE veya hat sıralama sorunu | [#2](#why-one-dual-esim-line-shows-no-service) |
| Bir numara arama yapıyor ama gelen aramaları alamıyor | Gelen arama yönlendirme uyuşmazlığı | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Arama sırasında diğer hat "Servis Yok" diyor | iPhone aynı anda tek veri şebekesi kullanır (normal) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| İkinci eSIM eklenemiyor – "Operatör kilidi" hatası | Cihaz ilk operatöre kilitli | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| Çift eSIM çalışıyor ama pili daha hızlı tüketiyor | Her iki hat da aktif olarak arama yapıyor | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + fiziksel SIM: fiziksel SIM tanınmıyor | SIM tepsi sorunu veya uyumsuz kart | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| Veri sinyal çubukları gösteriyor ama internet yok | APN ayarları eksik veya yanlış | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## iPhone'da Çift eSIM Seçenekleriniz Nelerdir?

iPhone XS, XR ve tüm daha yeni modellerden (iPhone 16 dahil) itibaren Apple, iPhone 13 ve sonrasında çift eSIM'i (iki eSIM'in eşzamanlı aktivitesi) destekler. ABD dışı modeller ayrıca bir eSIM artı bir fiziksel nano‑SIM destekler. Çin anakarası çift fiziksel SIM modellerinde iPhone 16 dışında eSIM desteği yoktur.

**Çift eSIM** yapılandırmanız iPhone modelinize ve bölgenize bağlıdır:

| Yapılandırma | Desteklenen Modeller | Maks. Aktif Hat |
|---------------|------------------|------------------|
| **Çift eSIM** | iPhone 13 ve yenileri (tüm iPhone 16 modelleri dahil) | 2 |
| **1 eSIM + 1 fiziksel nano‑SIM** | SIM tepsisi olan tüm iPhone'lar (ABD dışı modeller ve iPhone 14 öncesi ABD modelleri) | 2 |
| **Yalnızca 1 fiziksel SIM** | Eski iPhone'lar (XS öncesi) | 1 |
| **2 fiziksel SIM** | Çin anakarası, Hong Kong, Makao'ya özel çift SIM tepsi modelleri (örn. iPhone 16 Çin sürümü) | 2 |

Uyumlu iPhone'ların tam listesi için [iPhone'unuzun çift eSIM uyumluluğunu kontrol edin](/compatibility/).


## Bir Çift eSIM Hattı Neden Servis Yok Gösterir

Çift eSIM hatlarınızdan biri veri kullanabiliyor ama arama yapıp alamıyorsa — **veya tamamen "Servis Yok" gösteriyorsa** — 2026'da en yaygın nedenler şunlardır:

- **VoLTE / VoNR o hat için etkin değil.** Bazı operatörler eSIM planlarında veri üzerinden ses dolaşımını kapatır; bu, hattı sadece veriye bırakır. (Basit kontrol: veri kullanabiliyorsanız ama arama yapamıyorsanız sorun büyük olasılıkla budur.)
- **Hat sıralaması.** iOS sesi *varsayılan ses hattınıza* yönlendirir; sadece veriye ayarlanmış ikincil bir hat arama yapıp alamaz.
- **Plan görüşme içermiyor.** Bazı seyahat eSIM'leri tasarım gereği sadece veridir ve hiç ses hizmeti yoktur. Böyleyse sinyal çubukları görürsünüz ama arama denemesi başarısız olur.

> **Not:** Eski 3G/CDMA şebekeler ABD ve Japonya'da emekliye ayrıldı. Verizon ve US Cellular 2022-2024 arasında CDMA'yı kapattı; au/KDDI 3G'yi 2022'de bitirdi. 2026'da "ses için servis yok" olan bir hat neredeyse her zaman bir VoLTE, plan veya hat sıralama sorunudur - CDMA değil.

### Çözümler
- **Etkilenen hattı varsayılan ses hattı yapın**: `Ayarlar > Hücresel > Varsayılan Ses Hattı`.
- **VoLTE'yi açın**: `Ayarlar > Hücresel > [hat] > Ses ve Veri`, sonra LTE veya 5G (VoLTE/VoNR) seçin.
- **Planın görüşme içerdiğini doğrulayın**. Sadece veri bir seyahat eSIM'i ise ana hattınızı ses hattı olarak tutun ve eSIM'i yalnızca veri için kullanın.
- **Operatörünüze başvurun** ve dolaşımda numaranız için veri-üzerinden-ses/5G'nin etkin olduğunu doğrulayın.

ABD operatör şebekelerinin daha derin karşılaştırması için [ABD eSIM plan rehberindeki](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) **ABD operatör şebeke karşılaştırmasına** bakın.


## Gelen Aramaları Alamayan Çift eSIM Hattı

**Belirti**: A hattı sorunsuz çalışıyor. B hattı giden aramaları yapabiliyor ama B'ye gelen aramalar doğrudan sesli mesaja gidiyor veya "ulaşılamıyor" olarak çalıyor.

**Kök neden**: Şebeke arama yönlendirme uyuşmazlığı. B hattı kısa süre önce 5G ile LTE arasında geçiş yaptıysa veya Wi-Fi Arama kullandıysa, operatörün şebekesi gelen aramaları hâlâ yanlış yoldan yönlendirmeye çalışabilir.

**Benzetme:** Operatörün, telefonunuzu eski evinizde listeleyen eski bir adres defteri tuttuğunu hayal edin. Birisi aradığında yanlış yere gider. Wi‑Fi Arama'yı kapatıp açmak adres defterini günceller.

### Telefonunuzda Hızlı Çözüm
1. **Wi‑Fi Arama'yı** geçici olarak kapatın: `Ayarlar > Hücresel > B hattı > Wi‑Fi Arama` → KAPALI.
2. iPhone'u yeniden başlatın.
3. Wi‑Fi Arama'yı geri açın.

### Desteği Arayarak Operatör Çözümü
Operatörünüzden bu numara için **arama yönlendirmesini sıfırlamasını** veya **hattı yenilemesini** isteyin. Bu genellikle operatör hattı yeniden sağladıktan kısa süre sonra etkili olur. Daha fazla arama yönlendirme ve aramayla ilgili sorun için bkz. **[yukarıdaki Çözüm 3](#a-dual-esim-line-that-cannot-receive-calls)**.

### Tekrarını önleme
- 5G/LTE arasında hızlı geçişten kaçının (en az birkaç saat tek modu koruyun).
- Sık seyahat ediyorsanız veri gerektirmeyen hat için **Veri Dolaşımı**'nı KAPALI tutun.


## Arama Sırasında Bir Hattın Servis Yok Göstermesi Normaldir

**Belirti**: A hattıyla aramadasınız. Kontrol ettiğinizde B hattı "Servis Yok" gösteriyor.

**Açıklama**: iPhone'lar **çift beklemedir, çift aktif değil** (DSDS – Dual SIM Dual Standby olarak da bilinir). Aynı anda yalnızca bir hat hücresel bağlantı kurabilir. Arama sırasında diğer hat geçici olarak ulaşılamazdır. Arama biter bitmez iki hat da yeniden bağlanır. Bu bir **çift eSIM arızası değildir** – tasarım gereğidir.

### Ne Yapabilirsiniz
- **Her iki hatta da Wi‑Fi Arama'yı etkinleştirin** – böylece boştaki hat, diğer hatta konuşurken Wi-Fi üzerinden arama alabilir. Apple'ın [çift bekleme dokümantasyonu](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) bunu ayrıntılı açıklar.
- **"Hücresel Veri Değiştirmeye İzin Ver"i etkinleştirin** – `Ayarlar > Hücresel > Hücresel Veri` altında. Bu, veri olmayan hattın Wi‑Fi Arama için veri hattının bağlantısını kullanmasına izin verir.

> 📌 Not: Bazı operatörler Wi‑Fi Arama'yı her iki hatta eşzamanlı desteklemez. Operatörünüze danışın.


## Operatör Kilitli Telefonda Çalışmayan Çift eSIM

İkinci bir eSIM veya fiziksel SIM ekleyemiyorsanız:
- iPhone'unuz ilk operatöre **operatör kilitli** olabilir.
- Kontrol etmek için: `Ayarlar > Genel > Hakkında` → **Operatör Kilidi**'ne ilerleyin. "SIM kısıtlaması yok" demelidir.

### Telefonunuz Kilitliyse Ne Yapmalı
- Kilidi açmasını istemek için operatörünüzle iletişime geçin. ABD operatörleri cihaz ödendikten sonra kilidi açmak zorundadır.
- Kilit açıldıysa ama hâlâ çalışmıyorsa ağ ayarlarını sıfırlamanız gerekebilir: `Ayarlar > Genel > iPhone'u Aktar veya Sıfırla > Sıfırla > Ağ Ayarlarını Sıfırla`. (Uyarı: bu, Wi‑Fi şifrelerini unutturur.)

Kilit açıldıktan sonra eSIM'inizi iPhone ile Android arasında da taşıyabilirsiniz – adım adım talimatlar için **[eSIM Platformlar Arası Aktarım 2026 rehberimize](/faq/how-to-transfer-esim-between-iphone-and-android/)** bakın.


## Çift eSIM Pil Tüketimi Nasıl Azaltılır

**Çift eSIM** veya hatta eSIM + fiziksel SIM çalıştırmak pil tüketimini artırabilir; çünkü her iki hat da şebekeye aktif bağlı kalır. İki hattı aktif tutarken tüketimi en aza indirmenin yolu:

| Strateji | Etki |
|----------|--------|
| Zayıf sinyalli hattı **yalnızca LTE** kullanacak ayarlayın (5G değil) | Orta düzey tasarruf |
| Veri için kullanılmayan hatta **Veri Dolaşımı**'nı kapatın | Taramayı tasarruf eder |
| **5G Standalone**'u devre dışı bırakın (operatörünüz izin veriyorsa) | Çok yardımcı olur |
| İkincil hatta arka plan uygulamaları için **Düşük Veri Modu** kullanın | Küçük tasarruf |
| Çok düşük sinyal bölgelerinde ikincil hattı geçici olarak devre dışı bırakın | Önemli tasarruf |

Bir hattı devre dışı bırakmak için: `Ayarlar > Hücresel` → hatta dokunun → **Bu Hattı Etkinleştir**'i kapatın. Sık uluslararası seyahat ediyorsanız, pil dostu bir alternatif olarak [Roami'nin ücretsiz eSIM denemesini deneyin](/free-esim/).


## eSIM ve Fiziksel SIM Çakışmaları ile Tepsi Sorunları

**Belirti**: nano‑SIM'iniz başka telefonda çalışıyor ama iPhone'unuzda değil. Ya da eSIM'iniz sorunsuz çalışıyor ama ikisi takılıyken fiziksel SIM tanınmıyor.

**Yaygın nedenler**:
- iPhone farklı bir şebekeye **operatör kilitli**.
- SIM tepsisi tam oturmamış veya hasarlı.
- SIM kart **çok eski** (4G öncesi) veya bükülmüş.
- **Fiziksel SIM çakışması**: Bazı iPhone'larda, cihaz operatör kilitliyse fiziksel SIM takmak eSIM yuvasını geçici olarak devre dışı bırakabilir.

**Çözümler**:
1. Tepsiyi çıkarın, kontakları yumuşak bir bezle temizleyin.
2. Tık sesi gelene kadar sıkıca geri yerleştirin.
3. iPhone'u yeniden başlatın.
4. Hâlâ tanınmıyorsa SIM'i başka telefonda deneyin – çalışıyorsa iPhone'unuzun SIM okuyucusu arızalı olabilir.
5. SIM kartı operatör mağazasında değiştirin (çoğu abonelik planı için ücretsizdir).

> **Fiziksel SIM taktıktan sonra eSIM'iniz kaybolursa:** Bazı operatör kilitli iPhone'lar, farklı bir operatörden fiziksel SIM takıldığında eSIM yuvasını devre dışı bırakır. Fiziksel SIM'i çıkarın, yeniden başlatın; eSIM'iniz geri gelmelidir. Sonra cihazın kilidini açması için operatörünüzle iletişime geçin.

Tamamen eSIM'e geçmeyi planlıyorsanız, aktivasyon yöntemleri için **[iPhone 16 eSIM rehberimize](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** bakın.


## Çin Hong Kong ve Makao'da Çift eSIM

Çin anakarası iPhone'ları (iPhone 16 hariç) iki fiziksel nano‑SIM yuvasına sahiptir ve **hiç eSIM desteği yoktur**. Hong Kong ve Makao modelleri tipik olarak eSIM + fiziksel SIM destekler. Çin anakarası çift fiziksel SIM bir iPhone alırsanız, uluslararası seyahat eSIM'leri dahil hiçbir eSIM kuramazsınız – bu bir donanım sınırlamasıdır.

Apple, **Çin anakarasında** özel çift fiziksel SIM modelleri satar:
- iPhone 16, 17 Pro, 17 Pro Max: **iki fiziksel nano‑SIM yuvası** (Air hariç eSIM yok).
- iPhone 16: **yalnızca eSIM** (global, Çin dahil).

**Hong Kong ve Makao** modelleri:
- Modele göre **eSIM + fiziksel SIM** (uluslararası modeller gibi) veya çift fiziksel SIM destekler.
- eSIM seyahat planları kullanmayı planlıyorsanız satın almadan önce mutlaka doğrulayın.

> ⚠️ **Önemli**: Çin anakarası çift fiziksel SIM bir iPhone alırsanız (iPhone 16 hariç) **hiçbir eSIM kuramazsınız** (uluslararası seyahat eSIM'leri dahil) – bu bir donanım sınırlamasıdır, yazılım engeli değil.


## İş ve Kişisel Hatlar için Çift eSIM

Birçok kullanıcı bir **iş numarası** (eSIM) ve **kişisel numara** (ikinci eSIM veya fiziksel SIM) tutar. **Çift eSIM** yapılandırmanızı temizce kurmanın yolu:

### Hatları net biçimde etiketleyin
`Ayarlar > Hücresel` → bir hatta dokunun → `Hücresel Plan Etiketi` → "İş" veya "Kişisel" seçin ya da özel etiket oluşturun.

### Varsayılan ses ve veriyi seçin
- **Varsayılan Ses Hattı**: Yerli Telefon uygulamasından arama yaptığınızda hangi hattın kullanılacağı (arama başına yine de seçebilirsiniz).
- **Hücresel Veri**: Hangi hat mobil veri kullanır. Birincil sinyal kaybederse telefonun diğer hattın verisini geçici kullanabilmesi için **Hücresel Veri Değiştirmeye İzin Ver**'i açın.

### Kişileri ayırın
- Kişileri belirli bir hata atayın: Kişiyi düzenle → `Tercih Edilen Hat` → iş veya kişisel seçin.

### İstem dışı dolaşımı önleyin
- İş hattının uluslararası oranları pahalıysa o hat için **Veri Dolaşımı**'nı kapatın.


## Çift eSIM Sorun Giderme Tablosu

| Sorun | Acil Adım | Uzun Vadeli Çözüm | Hâlâ Çalışmıyorsa |
|---------|----------------|----------------|----------------------|
| İkinci eSIM hiç sinyal almıyor | iPhone'u yeniden başlatın, sonra hattı kapatıp açın | Planın aktif olduğunu ve hattın etkin olduğunu doğrulayın | eSIM'i yeniden sağlaması için operatöre başvurun |
| Aramalar doğrudan sesli mesaja gidiyor (çalma yok) | "Bilinmeyen Arayanları Sessize Al" ve arama yönlendirmeyi kapatın | Arama yönlendirmesini sıfırlaması için operatöre başvurun | Ağ ayarlarını sıfırlayın |
| İkinci hatta SMS alınamıyor | O hattan herhangi bir numaraya test SMS'i gönderin | Hattın sadece veri olmadığından emin olun; operatörün SMS'i açması gerekebilir | Hattı yeniden eşitlemek için operatör uygulamasını kullanın |
| İki eSIM ama ikisi de "Servis Yok" gösteriyor | Uçak modu aç/kapat > operatör kilidini kontrol edin | Ağ ayarlarını geri yükle | Operatörün bölgenizde kesinti olup olmadığını kontrol edin |
| Hat değiştirdim ve artık FaceTime/iMessage etkinleşmiyor | `Ayarlar > Mesajlar > Gönder ve Al` yoluna gidin – numaraları elle seçin | Apple ID'den çıkıp tekrar girin | Apple Destek'e başvurun |
| Veri sinyal gösteriyor ama internet yok | APN ayarlarını kontrol edin (bkz. Çözüm #11) | APN'yi elle yapılandırın | Doğru APN için eSIM sağlayıcıya başvurun |
| eSIM yanlışlıkla silindi | Sağlayıcının yeniden indirmeye izin verip vermediğini kontrol edin | Yeni QR kodu için operatöre başvurun | Seyahat eSIM'leri: yeni plan satın alın |
| Fiziksel SIM takıldı, eSIM kayboldu | Operatör kilitli telefon yabancı SIM'le eSIM'i kapatır | Fiziksel SIM'i çıkarın, yeniden başlatın; eSIM geri gelir | Cihazın kilidini açması için operatöre başvurun |


## eSIM'inizde Veri Yoksa APN Ayarları Nasıl Yapılandırılır

**Belirti**: eSIM'iniz tam sinyal çubukları gösteriyor (veya "Servis Yok") ama internet bağlantınız yok – siteler açılmıyor, uygulamalar "bağlantı yok" diyor.

**Kök neden**: eSIM profili doğru kuruldu ama Erişim Noktası Adı (APN) ayarları eksik veya yanlış. Bazı eSIM sağlayıcıları APN'yi otomatik yapılandırır; diğerleri elle giriş ister.

### iPhone'da APN nasıl yapılandırılır

1. **Ayarlar > Hücresel** yoluna gidin.
2. Verisi olmayan eSIM hattına dokunun.
3. **Hücresel Veri Ağı**'na dokunun (bu seçenek yoksa APN operatörünüz tarafından otomatik yapılandırılıyor – bu çözümü atlayın).
4. **Hücresel Veri** bölümü altında **APN** alanını doldurun.
5. Sağlayıcınız başka bir şey belirtmedikçe **Kullanıcı Adı** ve **Şifre** alanlarını boş bırakın.
6. Geri dönün, Uçak Modu'nu açıp kapatın ve veriyi test edin.

### Seyahat eSIM'leri için yaygın APN değerleri

| Sağlayıcı | APN | Kullanıcı Adı | Şifre |
|----------|-----|----------|----------|
| **Roami** | internet | (boş) | (boş) |
| **Airalo** | globaldata | (boş) | (boş) |
| **Holafly** | hola | (boş) | (boş) |
| **Nomad** | nbdata | (boş) | (boş) |
| **T‑Mobile (ABD)** | fast.t-mobile.com | (boş) | (boş) |
| **AT&T (ABD)** | nxgen | (boş) | (boş) |
| **Verizon (ABD)** | vzwinternet | (boş) | (boş) |
| **EE (İngiltere)** | everywhere | (boş) | (boş) |
| **O2 (İngiltere)** | mobile.o2.co.uk | web | web |
| **Vodafone (İngiltere)** | internet | (boş) | (boş) |
| **Three (İngiltere)** | three.co.uk | (boş) | (boş) |
| **Orange (Fransa)** | orange.fr | (boş) | (boş) |

> **APN alanı griyse:** Operatörünüz APN ayarlarını kilitlemiştir. Bu, abonelik operatör eSIM'lerinde (Verizon, T‑Mobile, AT&T) yaygındır. Yardım için operatörünüze başvurun – onu elle değiştiremezsiniz.

> **APN doğruysa ama hâlâ veri yoksa:** iPhone'unuzu yeniden başlatın, Uçak Modu'nu değiştirin veya Veri Dolaşımı'nın açık olup olmadığını kontrol edin (Ayarlar > Hücresel > [hat] > Veri Dolaşımı AÇIK).


## Çift eSIM Kullanıcıları için Son Profesyonel İpuçları

- Hatlarınızı kurar kurmaz **etiketleyin** – sonsuz karışıklıktan kurtarır.
- Her hat için **farklı zil sesleri** ayarlayın: `Ayarlar > Sesler ve Dokunuşlar > Zil Sesi` → aşağı kaydırın, hat başına atayabilirsiniz.
- Varsayılan ses hattını zamana göre değiştirmek için **Shortcuts otomasyonu** kullanın (örn. iş saatleri = iş hattı; akşamları = kişisel).
- **Cihazınızı satmadan önce**: `Ayarlar > Hücresel` yoluna gidin, **tüm** eSIM'leri silin ve fiziksel SIM'i çıkarın. Sonra tüm içerik ve ayarları silin. eSIM silme ve plan iptal etmenin ayrıntılı rehberi için **[sorun giderme rehberimizdeki Çözüm #15'e](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)** bakın.


## Sıkça Sorulan Sorular

**S1: Aynı operatörden iki eSIM kullanabilir miyim?**  
Evet, operatörünüz tek hesapta birden çok eSIM profiline izin verdiği sürece. Örneğin T‑Mobile US aynı iPhone'da iki eSIM'e kadar destekler.

**S2: Her iki hat 5G'yi eşzamanlı destekler mi?**  
Evet, iPhone 13 ve yenilerinde (iPhone 16 dahil) her iki hat 5G'de olabilir (çift 5G bekleme). Ancak aynı anda yalnızca bir hat 5G veri kullanabilir; diğeri ses yedeği (VoNR) için 5G kullanır.

**S3: İkinci hattım çalışıyor ama ekledikten sonra ilki çalışmayı bıraktı – ne oldu?**  
Birincil hat ayarlarını yanlışlıkla değiştirmiş olabilirsiniz. `Ayarlar > Hücresel > Varsayılan Ses Hattı` yoluna gidin ve geri ayarlayın.

**S4: Çift eSIM, eSIM + fiziksel SIM'den daha mı çok pil tüketir?**  
Genel olarak çift eSIM biraz daha az güç tüketir; çünkü fiziksel kart okuyucusu yoktur. Ama fark ihmal edilebilir düzeydedir (%2‑3 içinde).

**S5: Seyahatteyim – veri için yerel eSIM kullanıp aramalar için ana eSIM'imi tutabilir miyim?**  
Evet, en iyi pratik:  
- Yerel eSIM'i **Hücresel Veri** hattı yapın.  
- Ana eSIM'i **Varsayılan Ses Hattı** olarak tutun.  
- Devasa ücretlerden kaçınmak için ana eSIM'de **Veri Dolaşımı**'nı kapatın.  
- Ana hattınızın Wi‑Fi Arama ve MMS için yerel eSIM'in verisini kullanabilmesi için **Hücresel Veri Değiştirmeye İzin Ver**'i açın.

Seyahat sırasında cihazlar arasında sık geçiş yapıyorsanız **[eSIM platformlar arası aktarım rehberi](/faq/how-to-transfer-esim-between-iphone-and-android/)** numaranızı sorunsuz taşımanıza yardımcı olur.

**S6: İkinci eSIM neden bir iOS güncellemesinden sonra bazen kayboluyor?**  
Nadir bir hata. `Ayarlar > Hücresel` yoluna gidin → hat yoksa ama "Kullanılabilir SIM'ler" altında görünüyorsa dokunun ve yeniden etkinleştirin. Değilse profilin yeniden gönderilmesi için operatöre başvurun.

**S7: Apple Watch ile çift SIM kurulumu kullanabilir miyim?**  
Evet. Apple Watch, iPhone'un **bir** hattını yansıtabilir. Kurulum sırasında saatte hangi hattı istediğinizi seçin. Saatin her iki hattı eşzamanlı kullanamayacağını unutmayın – yalnızca seçili hattı yansıtır.

**S8: Çift eSIM için resmi Apple dokümantasyonunu nerede bulabilirim?**  
Apple iki temel kaynak sunar: [iPhone'da eSIM hakkında](https://support.apple.com/en-us/HT209044) ve [eSIM ile Çift SIM kullanma](https://support.apple.com/en-us/HT209086). Bunlar temel uyumluluk ve kurulumu kapsar.

**S9: Silinen bir eSIM'i nasıl kurtarırım?**  
Bir eSIM profilini sildiyseniz, kurtarma operatörünüze bağlıdır. Seyahat eSIM'lerinde (Roami, Airalo vb.) silme genellikle kalıcıdır – yeni bir plan satın almanız gerekir. Abonelik operatör eSIM'lerinde (Verizon, T‑Mobile, AT&T gibi) operatörünüze başvurun – genellikle yeni bir QR kodu verebilirler. Orijinal aktivasyon e-postanızın ve QR kodunuzun bir yedeğini her zaman saklayın.

**S10: eSIM'imin sinyal çubukları var ama veri bağlantısı neden yok?**  
Bu neredeyse her zaman bir APN sorunudur. Adım adım yapılandırma için yukarıdaki Çözüm #11'e bakın.

**S11: "eSIM onay kodu" ne demektir ve nerede bulurum?**  
Bazı eSIM profilleri aktivasyon sırasında bir onay kodu (4‑8 hane) gerektirir. Operatörünüzün e-postasında veya aktivasyon talimatlarında arayın. Bulamazsanız operatörünüze başvurun.

**S12: iPhone'da iki aktif eSIM artı bir fiziksel SIM olabilir mi?**  
Hayır. iPhone herhangi bir anda en fazla **iki aktif hattı** destekler – ya iki eSIM YA DA bir eSIM + bir fiziksel SIM. Üç aktif hattı eşzamanlı bulunduramazsınız.

**S13: Çift eSIM 5G'm bir hatta çalışmıyor – neyi kontrol etmeliyim?**  
Önce her iki hat için 5G'nin açık olduğundan emin olun: Ayarlar > Hücresel > [hat] > Ses ve Veri > 5G Otomatik veya 5G Açık seçin. Bir hat hâlâ yalnızca LTE gösteriyorsa operatörünüze sorun – bazı operatörler 5G'yi yalnızca birincil veri hattıyla sınırlar.

**S14: Fiziksel SIM taktım ve eSIM'im kayboldu – nasıl geri alırım?**  
Bu, operatör kilitli iPhone'larda bilinen bir davranıştır. Fiziksel SIM'i çıkarın, iPhone'unuzu yeniden başlatın; eSIM Ayarlar > Hücresel altında geri gelmelidir. Sonra ikisinin de eşzamanlı çalışabilmesi için cihazın kilidini açması için operatörünüze başvurun.

👉 **Seyahat için çift eSIM mi kuruyorsunuz?** [ABD için eSIM planlarına](/united-states-esim/) veya [Japonya için eSIM'e](/japan-esim/) göz atın — her ikisi de modern iPhone'larda çift eSIM'i destekler.

---

*Apple resmi dokümantasyonu, GSMA standartları ve Eylül 2026 itibarıyla operatör testlerine dayanmaktadır.*
## Kaynaklar

- [GSMA — eSIM (SGP.22) spesifikasyonu](https://www.gsma.com/esim/)
- [Apple Destek — iPhone'da eSIM kurulumu](https://support.apple.com/en-us/HT212780)
- [Apple Destek — iPhone'da eSIM hakkında](https://support.apple.com/en-us/HT209044)
