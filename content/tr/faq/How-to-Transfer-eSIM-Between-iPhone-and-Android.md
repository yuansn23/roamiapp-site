---
title: "eSIM iPhone ile Android Arasında Nasıl Aktarılır"
h1_title: "iPhone ile Android Arasında eSIM Nasıl Aktarılır"
description: "eSIM'inizi operatör uygulaması veya yeniden verilmiş QR koduyla iPhone ile Android arasında taşıyın. Her iki yön için adım adım rehber ve yaygın aktarım hatalarına çözümler."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM platformlar arası aktarım", "eSIM aktarım hatası", "iOS 18 eSIM", "eSIM operatör kilidi", "eSIM onay kodu", "eSIM hizmet yok", "eSIM APN ayarları", "eSIM sorun giderme", "eSIM etkinleştirme başarısız", "eSIM'i iPhone ile Android arasında aktarma", "eSIM yeni iPhone'a aktarılamıyor", "Orange eSIM aktarımı"]
date: 2026-09-24T00:00:00Z
lastmod: 2026-09-24T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

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
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "eSIM nasıl etkinleştirilir?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "iPhone'da eSIM nasıl etkinleştirilir (Tüm Modeller)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Güncel eSIM Uyumluluk Listesi"
      url: "/compatibility/"
---


> **Editör Notu:** eSIM'i yalnızca operatörünüz platformlar arası aktarımı desteklediğinde iPhone ile Android arasında taşıyabilirsiniz ve çoğu seyahat eSIM'i hiçbir şekilde taşınamaz. Aşağıdaki yöntemler resmî operatör dokümantasyonunu takip eder ve bugün gerçekten çalışan aktarımlara odaklanır. Planınızın uygun olup olmadığını görmek için önce desteklenen operatörler bölümüne göz atın.

Gerçek şu: bir eSIM genellikle iPhone ile Android arasında doğrudan taşınamaz, çünkü iki platform ortak bir aktarım protokolüne sahip değildir. Ancak çözümler basittir — operatörünüzün profili QR kod olarak yeniden vermesini sağlayabilir veya destekleniyorsa operatörün uygulaması üzerinden aktarım yapabilirsiniz. Her iki yön de ve seyahat eSIM istisnaları aşağıda açıklanmıştır.

## eSIM Aktarımı Nedir?

**Aşağıda senaryonuzu bulun ve doğru yönteme doğrudan geçin.**

| Senaryonuz | Aktarım Mümkün mü? | En İyi Yöntem | Nereye Bakmalı |
| :--- | :--- | :--- | :--- |
| **iPhone → yeni iPhone** | ✅ Evet (her zaman) | Apple Hızlı Aktarım | [Platform İçi Aktarım](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → yeni Samsung** | ✅ Evet (genellikle) | Samsung Smart Switch | [Platform İçi Aktarım](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (operatör uygulama aktarımını destekliyor)** | ✅ Evet | Operatör Uygulaması | [Yöntem A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (operatör uygulamayı desteklemiyor)** | ✅ Evet | QR Kodu Alternatifi | [Yöntem B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (operatör destekliyor)** | ✅ Evet | Operatör Uygulaması veya QR Kodu | [Yöntem B](#esim-transfer-from-iphone-to-android) |
| **Seyahat eSIM (Roami, Airalo, Holafly)** | ❌ Hayır | Yeni cihazda yeni bir plan satın alın | [Seyahat eSIM'leri neden taşınamaz](#why-cant-travel-esims-be-transferred) |
| **Operatör aktarımı desteklemiyor** | ✅ Evet (alternatif) | QR kodu için operatörle iletişime geçin | [Alternatif Yöntemler](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Temel kural:** iPhone'dan iPhone'a olduğu gibi **yerleşik bir iOS'tan Android'e eSIM aktarım düğmesi yoktur**. Platformlar arası aktarım her zaman **operatörünüz üzerinden** gerçekleşir – ya uygulaması aracılığıyla ya da yeni bir QR kodu talep ederek. Seyahat eSIM'leri **yalnızca tek cihaz içindir** – yeni telefonunuzda yenisini satın alın.

**Aktarılamıyor mu?** Çoğu seyahat eSIM'i (Roami, Airalo, Holafly) **yalnızca tek cihaz içindir** – yeni telefonunuzda yeni bir plan satın almanız gerekir. Yerel operatör eSIM'leri için QR kodu alternatifi her zaman çalışır.

> **Temel sınırlama:** **Yerleşik bir iOS'tan Android'e eSIM aktarımı yoktur** – operatörünüzden geçmeniz gerekir. Bu rehber desteklenen her yöntemi adım adım anlatır.

eSIM kurulumuna daha yeni mi başlıyorsunuz? [eSIM etkinleştirme rehberimiz](/faq/how-to-activate-an-esim/) kurulumu sıfırdan anlatır. Aktarım yarıda başarısız olursa [eSIM Derin Sorun Giderme Rehberi](/faq/esim-deep-troubleshooting-guide-2026/) her hata mesajını bir çözüme eşler.


## Hangi eSIM Aktarım Yöntemini Kullanmalısınız?

| Durumunuz | En İyi Yöntem | Süre | Operatör Gerekli mi? |
| :--- | :--- | :--- | :--- |
| **iPhone ↔ iPhone geçişi** | Apple Hızlı Aktarım (Ayarlar > Hücresel > eSIM Ekle > Aktar) | 2 dk | Hayır (Apple halleder) |
| **Android ↔ Android geçişi (Samsung'dan Samsung'a vb.)** | Markaya özgü aktarım (Samsung: SIM Yöneticisi > eSIM Ekle > Aktar) | 2 dk | Hayır (marka halleder) |
| **iPhone ↔ Android geçişi (iOS 18 / Android 16+)** | Operatör uygulamasıyla aktarım | 3-5 dk | Evet |
| **iPhone ↔ Android geçişi (daha eski işletim sistemi)** | Operatörün yeniden verdiği QR kodu | 5-10 dk | Evet |
| **Seyahat eSIM (Roami, Airalo, Holafly)** | ❌ Taşınamaz – yeni cihazda yeni bir plan satın alın | Yok | Hayır – sağlayıcı izin vermiyor |
| **Operatörünüz aktarımı desteklemiyor** | QR kodu alternatifi (operatörü arayın) | 10-20 dk | Evet |


## Eksiksiz eSIM Aktarım Rehberi

İşte eSIM'ini yeni bir cihaza taşıyan herkesin izlediği adım adım yol haritası.

| Adım | Aklınızdan Geçen | Yapmanız Gereken | Nerede Bulunur |
| :--- | :--- | :--- | :--- |
| **1. Senaryonuzu belirleyin** | "Nasıl bir geçiş yapıyorum?" | Aynı ekosistem mi (iOS→iOS / Android→Android) yoksa platformlar arası mı (iOS↔Android) belirleyin. | [Yukarıdaki Hızlı Karar Akışı](#which-esim-transfer-method-should-you-use) |
| **2. İşletim sistemi sürümlerini kontrol edin** | "Telefonlarım yeterince güncel mi?" | Yerel platformlar arası aktarım için iPhone iOS 18+, Android Android 16+ olmalı. | Değilse önce güncelleyin. |
| **3. Operatör kilidini kontrol edin** | "Telefonum operatöre kilitli mi?" | Ayarlar > Genel > Hakkında > Operatör Kilidi "SIM kısıtlaması yok" demeli. | [Aşağıdaki Ön Koşullar](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Operatör desteğini kontrol edin** | "Operatörüm buna izin veriyor mu?" | Operatör uygulamasını açın ve eSIM aktarım seçeneğini arayın. Ya da arayıp sorun. | [Aşağıdaki desteklenen operatörler bölümü](#carriers-that-support-cross-platform-esim-transfer) |
| **5. Aktarımı gerçekleştirin** | "Numarayı taşıma zamanı." | Senaryonuza özel adımları izleyin. | [Yöntem A](#esim-transfer-from-android-to-iphone) veya [Yöntem B](#esim-transfer-from-iphone-to-android) |
| **6. Aktarım sonrası kurulum** | "Numaram yeni telefonda – şimdi ne olacak?" | WhatsApp, iMessage, 2FA uygulamalarını yeniden etkinleştirin ve SMS'i test edin. | [Aşağıdaki eSIM Aktarımı Sonrası bölümü](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. Başarısızsa sorunu giderin** | "Olmadı – şimdi ne yapmalıyım?" | Hatayı kontrol edin, eski profili silin, yeniden deneyin veya QR kodu alternatifini kullanın. | [Aşağıdaki sorun giderme tablosu](#why-did-my-esim-transfer-fail) |


## eSIM Aktarımına Başlamadan Before Neye İhtiyacınız Var

**Her iki yön için de:**
- Her iki cihaz da **kilitli olmamalıdır** (**operatör kilidi** olmamalı). iPhone'da kontrol etmek için: `Ayarlar > Genel > Hakkında` → `Operatör Kilidi` "SIM kısıtlaması yok" demeli. **Aktarımların başarısız olmasının 1 numaralı nedeni budur** – telefonunuz kilitliyse eSIM'i başka bir operatörün ağına aktaramazsınız.
- Her iki cihazda **Bluetooth açık** olmalıdır.
- Her iki cihaz **Wi‑Fi**a bağlı olmalıdır (veya en az biri çalışan bir hücresel veri bağlantısına sahip olmalıdır).
- Aktarmak istediğiniz eSIM kaynak cihazda **etkin** olmalıdır (henüz silinmemiş olmalı).
- Operatörünüz **platformlar arası aktarımı destekliyor** olmalıdır (aşağıdaki listeye bakın). Desteklemiyorsa alternatif yöntemler bölümüne atlayın.

Profiller ve SM‑DP+ sunucularına yeni misiniz? [eSIM etkinleştirme açıklaması](/faq/what-is-esim-activation-and-how-does-it-work/) bir profil cihazlar arasında taşınırken gerçekte ne olduğunu anlatır.
- **eSIM profiliniz** **süresi dolmuş** olmamalıdır – bazı profillerin sınırlı geçerlilik tarihleri vardır.

**Android → iPhone için:**
- iPhone **iOS 18 veya üzeri** olmalıdır.
- Android **Android 16 veya üzeri** olmalıdır.

**iPhone → Android için:**
- iPhone **iOS 18 veya üzeri** olmalıdır.
- Android **Android 16 veya üzeri** olmalıdır.

> 🚨 **Kritik Uyarı – Aktarımdan Önce Silmeyin:**
> **Aktarıma başlamadan önce eSIM'i eski cihazınızdan SİLMEYİN.** Kaynak eSIM'i önce silerseniz profil cihazınızdan kaybolur ve operatörünüz onu yeni cihaza aktaramayabilir. Tamamen yeni bir QR kodu için operatörünüzle iletişime geçmeniz gerekebilir – bu da 24‑48 saat sürebilir. Aktarımı her zaman önce yeni cihazdan başlatın veya yeni eSIM'in çalıştığı onaylanana kadar eski eSIM'i etkin tutun.

> 🚨 Cihazınız daha eski bir işletim sistemindeyse menü seçeneği hiç görünmeyecektir. Önce güncelleyin. **Süresi dolmuş bir eSIM profiliyle** uğraşıyorsanız aktarıma başlamadan önce operatörünüzden yeni bir QR kodu isteyin.

[Google Destek – Pixel'de eSIM](https://support.google.com/pixelphone/answer/7086887) sayfası, eSIM'ini aktarmaya hazırlanan Android kullanıcıları için ek ayrıntılar sunar.


## Seyahat eSIM'leri Neden Taşınamaz?

Bu, bize en çok gelen sorudur. İşte nedeni:

| Neden | Açıklama |
| :--- | :--- |
| **EID Bağlama** | Her eSIM profili, etkinleştirildiği cihazın **EID**'sine (eUICC Tanımlayıcısı) şifreli olarak bağlıdır. Telefonunuzun EID'si benzersizdir – eSIM donanımınız için bir seri numarası gibidir. (EID'nizi çoğu telefonda `*#06#` tuşlayarak görebilirsiniz.) |
| **Tek Kullanımlık QR Kodları** | Seyahat eSIM QR kodları **tek kullanımlık** olacak şekilde tasarlanmıştır. Tarandıktan sonra QR kod, operatörün sunucusunda geçersiz hale gelir. Bu, dolandırıcılığı önlemek için bir güvenlik özelliğidir. |
| **Operatör Hesabı Yok** | Seyahat eSIM'leri bağımsız ürünler olarak satın alınır – sürekli hizmet sunan bir "operatör hesabınız" olmaz. Giriş yapıp aktarım talep edebileceğiniz bir hesap yoktur. |
| **Kolaylık İçin Tasarlanmış** | Seyahat eSIM'leri taşınabilirlik yerine kolaylık sunar. Kimlik doğrulaması olmadan anında etkinleştirme alırsınız, ancak karşılığında profil tek cihaza kilitlenir. |

**Özetle:** Seyahat eSIM'i kullanıyorsanız (Roami, Airalo, Holafly, Nomad vb.) **taşımaya zaman harcamayın**. Çalışmaz. Yeni cihazınızda kolayca yeni bir plan satın alın. Yeni bir seyahat eSIM'inin maliyeti genellikle taşınamayan bir profili aktarmaya çalışarak harcayacağınız zamandan daha azdır.

**Peki operatör eSIM'leri (faturalı/ön ödemeli) ne olacak?**
Operatör eSIM'leri farklıdır. Operatörde bir hesabınız vardır ve operatör, profilleri kendi sunucularında kontrol ettiği için eSIM'inizi yeni bir cihaza yeniden verebilir. Operatör eSIM'lerinin taşınabilmesinin, seyahat eSIM'lerinin taşınamamasının nedeni budur.


## Hangi eSIM Aktarım Yöntemi Size Uygun?

| Özellik | Operatör Uygulamasıyla Aktarım | Operatör QR Kodu | Yerel Aktarım (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Platformlar arası çalışır mı?** | ✅ Evet | ✅ Evet | ❌ Hayır (yalnızca aynı ekosistem) |
| **Gerekli süre** | 3-5 dk | 5-10 dk | 1-2 dk |
| **Operatör katılımı** | Uygulama üzerinden self servis | Operatörle iletişime geçmek gerekir | Yok |
| **Seyahat sırasında çalışır mı?** | ✅ Evet (Wi‑Fi ile) | ✅ Evet (Wi‑Fi ile) | ✅ Evet |
| **Başarı oranı** | Yüksek (destekleniyorsa) | Çok Yüksek (her zaman çalışır) | Çok Yüksek |
| **En uygun olduğu durum** | Hızlı aktarım, uygulamayı destekleyen operatörler | Her operatör, uygulama başarısız olduğunda alternatif | Aynı ekosistemde cihaz yükseltmeleri |
| **Maliyet** | Genellikle ücretsiz | QR kodu yenileme 0‑25 $ tutabilir | Ücretsiz |


## Android'den iPhone'a eSIM Aktarımı

Bu en yaygın senaryodur – Samsung, Pixel veya başka bir Android cihazdan yeni bir iPhone'a geçiş. Numaranızı taşımanın en güvenilir yolu operatörünüzün uygulamasıdır.

### Adım Adım

**Başlamadan önce:**
- Yeni iPhone'unuzda operatörünüzün uygulamasının yüklü olduğundan emin olun (veya operatörün web sitesinde oturum açmaya hazır olun).
- Hesap PIN'inizi veya oturum açma bilgilerinizi bilin.
- **eSIM'i henüz Android cihazınızdan SİLMEYİN.**

**iPhone'unuzda (hedef):**
1. Operatörünüzün uygulamasını yükleyin ve açın (örneğin T‑Mobile, Verizon veya AT&T uygulaması).
2. Oturum açın ve "eSIM'i Etkinleştir", "Cihazı Değiştir" veya "Yeni cihaza aktar" gibi bir seçenek arayın.
3. Yeni iPhone'unuzun **EID** ve **IMEI** bilgilerini girmek için yönergeleri izleyin (`Ayarlar` → `Genel` → `Hakkında` altında gösterilir).
4. Operatör, eSIM profilinizi yeni iPhone'a gönderir veya tarayacağınız bir QR kodu oluşturur.
5. iPhone'da `Ayarlar` → `Hücresel` → `eSIM Ekle` bölümüne gidin ve oluşturulduysa QR kodunu tarayın.
6. "Etkinleştirme tamamlandı" mesajını bekleyin. Numaranız artık iPhone'da etkin.
7. **Artık** eSIM'i Android cihazınızdan silebilirsiniz (Ayarlar > Bağlantılar > SIM Yöneticisi > eSIM'e dokunun > Kaldır).

**iOS 18 ipucu:** iOS 18'de "eSIM Ekle" akışı, daha belirgin bir QR tarayıcı ve daha iyi hata yönetimiyle yeniden tasarlandı. Profil indirmesi sırasında bir ilerleme göstergesi göreceksiniz.

✅ **Tamamlandı.** Numaranız artık iPhone'da etkin. Operatörünüz uygulama sunmuyorsa, eSIM'inizi yeni bir QR kodu olarak yeniden vermesi için onlarla iletişime geçin (aşağıdaki alternatif yöntemlere bakın).

### Uygulama aktarımı çalışmazsa ne yapmalı?

**Operatör QR kodu alternatifini** kullanın:

- Operatörünüzle iletişime geçin (sohbet, telefon veya web sitesi).
- Cihaz değiştirdiğinizi söyleyin ve **eSIM'inizi yeni bir QR kodu olarak yeniden vermelerini** isteyin.
- Yeni QR kodunu iPhone'da tarayın: `Ayarlar` → `Hücresel` → `eSIM Ekle`.
- Etkinleştirmeyi tamamlayın.

Bu süreçte **"esim etkinleştirilemiyor"** hatası görürseniz Wi‑Fi bağlantınızı kontrol edin ve yeniden deneyin.


## iPhone'dan Android'e eSIM Aktarımı

iPhone'da yerleşik bir "Android'e Aktar" seçeneği yoktur. Güvenilir yöntem, operatörünüzün eSIM'inizi yeniden vermesini sağlamaktır.

### Ön Koşullar
- Yeni Android telefonunuz **kilitli olmamalıdır**.
- Operatörünüzle iletişime geçebiliyor (veya uygulamasına/web sitesine oturum açabiliyor) olmalısınız.
- Android cihazınız **Android 16 veya üzeri** olmalıdır.
- **eSIM'i henüz iPhone'unuzdan SİLMEYİN.**

### Adımlar

**Operatörünüzle iletişime geçin (veya uygulamalarını kullanın):**
1. eSIM'inizi bir iPhone'dan bir Android telefona taşıdığınızı söyleyin.
2. Yeni Android cihazın **EID** ve **IMEI** bilgilerini iletin (`Ayarlar` → `Telefon hakkında` altında).
3. Operatörünüz eSIM'inizi yeni bir QR kodu olarak yeniden verir (veya uygulamaları üzerinden gönderir).

**Android cihazınızda (hedef):**
1. `Ayarlar` → `Ağ ve internet` → `SIM'ler` → `eSIM Ekle` bölümüne gidin (ifade markaya göre değişir).
2. Operatörün sağladığı QR kodunu tarayın.
3. Profili indirmek ve etkinleştirmek için yönergeleri izleyin.
4. Etkinleştirmenin tamamlanmasını bekleyin.
5. **Artık** eSIM'i iPhone'unuzdan silebilirsiniz (Ayarlar > Hücresel > eSIM'e dokunun > Cep Hattını Kaldır).

✅ Tamamlandı. Numaranız artık Android telefonda yaşıyor.

> ⚠️ **Önemli**: Aktarım tamamlandıktan sonra eSIM, iPhone'dan **kalıcı olarak kaldırılır**. Operatörünüz olmadan geri dönemezsiniz. Aktarmadan önce başka bir etkin hatınız veya Wi‑Fi bağlantınız olduğundan emin olun.


## eSIM'i Yeni Bir iPhone veya Samsung'a Aktarma

Bu rehber platformlar arası aktarıma odaklansa da, birçok kullanıcı eSIM'i aynı ekosistem içinde taşımak ister. İşte nasıl yapılır. (Yalnızca eSIM destekleyen bir ABD iPhone 16'ya mı geçiyorsunuz? [iPhone 16 etkinleştirme rehberi](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) kurulum sırasında aktarım ayrıntılarını ele alır.)

### iPhone'dan iPhone'a eSIM Aktarma

Apple'ın yerleşik **Hızlı Aktarım** özelliği en kolay yöntemdir:

1. Yeni iPhone'unuzun kurulumu sırasında sorulduğunda "Yakındaki iPhone'dan eSIM aktar" seçeneğini seçin.
2. Bluetooth ve Wi‑Fi açıkken her iki telefonu birbirine yakın tutun.
3. Eski iPhone'unuzda aktarımı onaylayın.
4. Yeni cihazda **eSIM profili indirmesinin** tamamlanması için 1‑2 dakika bekleyin.

**Hızlı Aktarım çalışmıyorsa:** Yeni iPhone'unuzda Ayarlar > Hücresel > eSIM Ekle > Yakındaki iPhone'dan aktar bölümüne gidin.

**O da başarısız olursa:** Operatör QR kodu yöntemini kullanın – yeni bir QR kodu için operatörünüzle iletişime geçin.

### Android'den Android'e eSIM Aktarma

Android aktarım yöntemleri markaya göre değişir:

**Samsung:** Ayarlar > Bağlantılar > SIM Yöneticisi > eSIM Ekle > Eski cihazdan eSIM aktar (ekrandaki yönergeleri izleyin). Samsung Galaxy S21 ve yenisi ile Z Flip/Z Fold serilerinde çalışır.

**Google Pixel:** Kurulum sırasında eSIM'inizi aktarmanız istenebilir. Alternatif olarak operatör uygulamasını kullanın veya yeni bir QR kodu isteyin.

**Genel Android:** Markanız yerleşik aktarım sunmuyorsa operatör QR kodu alternatif yöntemini kullanın.

### Platformlar Arası ve Platform İçi eSIM Aktarımı Karşılaştırması

| Özellik | Platformlar Arası | Platform İçi |
|---------|----------------|----------------|
| **iOS ↔ iOS** | Yok | ✅ Hızlı Aktarım çalışır |
| **Android ↔ Android** | Yok | ✅ Markaya özgü yöntemler |
| **iOS ↔ Android** | ✅ Bu rehberde ele alınıyor | ❌ Doğrudan desteklenmiyor |
| **Operatör bağımlılığı** | Daha yüksek | Daha düşük (Apple/Google halleder) |
| **Gerekli süre** | 3-10 dk | 1-2 dk |
| **Başarı oranı** | Operatöre göre değişir | Genellikle yüksek |

eSIM davranışının iPhone nesilleri arasında nasıl farklılaştığı hakkında (depolama sınırları, çift SIM kuralları, bölgesel varyantlar) [iPhone eSIM uyumluluk merkezimize](/faq/iphone-11-esim-compatible/) bakabilirsiniz.


## Platformlar Arası eSIM Aktarımını Destekleyen Operatörler

Platformlar arası eSIM aktarımı hâlâ yenidir ve operatör desteği kademeli olarak yaygınlaşıyor. Destekleyen her operatörün eksiksiz bir herkese açık listesi yoktur ve kullanılabilirlik sık sık değişir; bu yüzden güncel durum için operatörünüzün web sitesine veya uygulamasına bakın.

### Onaylanmış Desteklenen Operatörler

| Operatör | Bölge | Aktarım Yöntemi | Aktarım Sınırı | Maliyet |
|---------|--------|-----------------|----------------|------|
| **Orange** | Fransa, Avrupa | Orange uygulaması → "eSIM alanım" → "Yeni cihaza aktar" | Yılda 3 kez | Ücretsiz |
| **SFR** | Fransa | SFR & Moi uygulaması → "SIM'imi yönet" → "eSIM aktar" | Yılda 5 kez | Ücretsiz |
| **T-Mobile** | ABD | T-Mobile uygulaması → "eSIM'i yönet" → "Yeni cihaza aktar" | Sınırsız | Ücretsiz |
| **Verizon** | ABD | My Verizon uygulaması → "Cihazı etkinleştir veya değiştir" | Sınırsız | Ücretsiz |
| **AT&T** | ABD | AT&T uygulaması → "eSIM'i etkinleştir" | Plana göre değişir | Ücretsiz (faturalı) |
| **EE** | Birleşik Krallık | EE uygulaması → "Plan" → "eSIM aktarımı" | Yılda 3 kez | Ücretsiz |
| **Deutsche Telekom** | Almanya | Telekom uygulaması → "eSIM aktarımı" | Sınırsız | Ücretsiz |
| **Swisscom** | İsviçre | Swisscom uygulaması → "eSIM aktarımı" | Yılda 3 kez | Ücretsiz |
| **Bouygues** | Fransa | QR kodu yenileme (müşteri portalı üzerinden) | Yılda 3 kez | Ücretsiz |
| **Free** | Fransa | QR kodu yenileme (müşteri portalı üzerinden) | Yılda 2 kez | Ücretsiz |
| **Vodafone** | Birleşik Krallık, Avrupa | Vodafone uygulaması → "eSIM aktarımı" | Ülkeye göre değişir | Ücretsiz (faturalı) |
| **Google Fi** | ABD, Global | Google Fi uygulaması → "Bu cihazda etkinleştir" | Sınırsız | Ücretsiz |

### Seyahat eSIM'leri Taşınamaz

| Sağlayıcı | Taşınabilir mi? | Bunun Yerine Ne Yapmalı |
|----------|---------------|-------------------|
| **Roami** | ❌ Hayır | Yeni cihazınızda yeni bir plan satın alın |
| **Airalo** | ❌ Hayır | Yeni cihazınızda yeni bir plan satın alın |
| **Holafly** | ❌ Hayır | Yeni cihazınızda yeni bir plan satın alın |
| **Nomad** | ❌ Hayır | Yeni cihazınızda yeni bir plan satın alın |

**Operatörümün bunu destekleyip desteklemediğini nasıl anlarım?** A veya B yöntemindeki adımları deneyin. Operatörünüz uygulama tabanlı aktarım veya yeni bir QR kodu sunmuyorsa aşağıdaki alternatif yöntemleri kullanın.


## Platformlar Arası eSIM Aktarımı Desteklenmediğinde Kullanılabilecek Alternatif Yöntemler

Operatörünüz listede yoksa veya bir **eSIM aktarım hatası** görüyorsanız şu alternatiflerden birini kullanın:

### Operatör Tarafından Verilen QR Kodu
1. Operatörünüzü arayın veya sohbet açın.
2. Şunu söyleyin: "Android'den iPhone'a (veya tersi) geçiyorum. Lütfen eSIM'imi yeni bir QR kodu olarak yeniden verin."
3. Size e-postayla bir QR kodu veya etkinleştirme bağlantısı göndereceklerdir.
4. Yeni cihazda `Ayarlar` → `Hücresel` → `eSIM Ekle` → `QR kodu kullan` bölümüne gidin ve tarayın.
5. Eski cihazın eSIM'i yenisi etkinleştikten sonra çalışmayı durduracaktır.

**İpucu:** Bazı operatörler eSIM yenileme için küçük bir ücret alır (0‑25 $). İşlemi yaptırmadan önce sorun.

### El ile SM-DP+ Girişi
Operatörünüz size bir **etkinleştirme kodu** ve **SM‑DP+ adresi** (eSIM profilini telefonunuza teslim eden sunucu adresi) veriyorsa, eSIM'i yeni cihaza el ile ekleyebilirsiniz:
1. `Ayarlar` → `Hücresel` → `eSIM Ekle` → `Ayrıntıları El ile Gir`.
2. SM‑DP+ adresini ve etkinleştirme kodunu yapıştırın.
3. `İleri`ye dokunun. Bu hem iPhone hem Android'de çalışır.

### Yeni Bir Plan Satın Alın
Seyahat eSIM'i kullanıyorsanız (Roami, Airalo, Holafly), taşımayı denemekle zaman kaybetmeyin – çalışmaz. Yeni cihazınızda kolayca yeni bir plan satın alın — [seyahat eSIM planları karşılaştırmamız](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) yeniden yüklemeye değer sağlayıcıları sıralar.

> **Geçiş ipucu:** QR kodu alternatifi, uygulama tabanlı aktarımı destekleyip desteklemediklerinden bağımsız olarak her operatör için en güvenilir yöntemdir. Bir telefon görüşmesi gerektirebilir ama her zaman çalışır.


## eSIM Aktarımı mı, Yeni Etkinleştirme mi?

Bazen yeni bir eSIM satın almak aktarmaktan daha hızlıdır. Hangisini ne zaman seçeceğiniz aşağıda:

| Faktör | Aktarım | Yeni Etkinleştirme | Hangisi Daha İyi? |
|--------|----------|----------------|------------------|
| **Aynı telefon numarasını koruyorsanız** | ✅ Numara korunur | ❌ Yeni numara alırsınız | Aktarım kazanır |
| **Numaranıza bağlı 2FA varsa** | ✅ Erişim korunur | ❌ Erişimi kaybetme riski | Aktarım kazanır |
| **Operatörünüz aktarım için ücret alıyorsa** | 0‑25 $ tutabilir | 0 $ (zaten yeniyi satın alıyorsunuz) | Ücrete bağlı |
| **Seyahat eSIM** | ❌ İmkânsız | ✅ Kolay | Yeni etkinleştirme kazanır |
| **Aceleniz varsa (5 dakikanın altında)** | ⚠️ 5‑10 dk sürebilir | ✅ 2 dk QR tarama | Yeni etkinleştirme kazanır |
| **Mevcut planınızı/verinizi korumak istiyorsanız** | ✅ Kullanılmayan veri korunur | ❌ Kullanılmayan veri kaybolur | Aktarım kazanır |

**Öneri:** Aynı operatör planında kalmaya devam edecek ve telefon numaranızı korumak istiyorsanız aktarım yapın. Seyahat eSIM kullanıyorsanız veya aceleyse yeni cihazınızda direkt yeni bir plan satın alın.


## eSIM Aktarımım Neden Başarısız Oldu?

| Hata / Belirti | En Olası Neden | Çözüm |
|----------------|-------------------|-----|
| "Aktarım kullanılamıyor – operatör desteklenmiyor" | Operatörünüz platformlar arası aktarımı desteklemiyor. | Yukarıdaki alternatif yöntemleri kullanın. |
| QR kodu taranıyor ama ardından "oturum süresi doldu" diyor | QR kodunu oluşturduktan sonra çok uzun beklediniz (süresi doldu). | Süreci tekrarlayın ve hemen tarayın. |
| Android "Eşleştirme başarısız" diyor | Bluetooth veya yerel ağ izinleri engellenmiş. | iPhone'da: `Ayarlar > Gizlilik ve Güvenlik > Yerel Ağ` – `Ayarlar`ın açık olduğundan emin olun. Android'de: "Wi‑Fi güvenlik taraması"nı kapatın (genellikle Wi‑Fi gelişmiş ayarlarında). |
| Aktarım başlıyor ama %50'de duruyor | Zayıf Wi‑Fi veya hücresel sinyal. | Her iki telefonu da yönlendiriciye yaklaştırın. Her iki cihazda da VPN'i kapatın. |
| **"eSIM başka bir cihaza bağlı"** | Profil eski cihazdan düzgün serbest bırakılmamış. | Eski cihazda `Ayarlar > Hücresel`e gidin ve (hâlâ görünüyorsa) el ile `eSIM'i Sil`in. Ardından 5 dakika bekleyip tekrar deneyin. Hâlâ başarısız olursa profil serbest bırakma için operatörle iletişime geçin. |
| iPhone taramadan sonra **onay kodu** istiyor | eSIM profilinin zorunlu bir **eSIM onay kodu** var (nadir). | Kodu operatör e-postasında arayın (genellikle 4–8 haneli). Bulunamazsa operatöre sorun. |
| Yan düğmeye çift dokunmak işe yaramıyor (iPhone → Android) | Biyometrik kimlik doğrulama kurulu değil veya devre dışı. | Face ID / Touch ID kurun veya Face ID için "Dikkat Gerektir"i geçici olarak devre dışı bırakın. |
| Aktarımdan sonra **eSIM hizmet yok** | APN ayarları yapılmamış. | APN'yi el ile yapılandırın (aşağıdaki tabloya bakın). |
| **eSIM profilinin süresi dolmuş** | Profilin sınırlı bir geçerlilik tarihi var. | Yeni bir QR kodu için operatörünüzle iletişime geçin. |
| iPhone'da **"eSIM Ekle seçeneği yok"** | iPhone operatör kilitli veya daha eski bir iOS'ta. | Ayarlar > Genel > Hakkında'dan operatör kilidini kontrol edin. iOS 18'e güncelleyin. |
| Yeni cihazda **"SIM desteklenmiyor"** | Yeni cihaz başka bir operatöre kilitli. | Operatör Kilidi'ni kontrol edin – "SIM kısıtlaması yok" demeli. |
| **Aktarım sınırı aşıldı** | Bu eSIM'i çok fazla kez aktardınız (bazı operatörler yılda 3‑5 ile sınırlar). | Sınırı sıfırlamak veya yeni bir eSIM almak için operatör desteğiyle iletişime geçin. |
| Samsung'da **"eSIM aktarımı başarısız"** | Samsung Smart Switch belirli operatör profilini desteklemiyor olabilir. | Bunun yerine operatör QR kodu alternatifini kullanın. |

### El ile APN Yapılandırması

**eSIM aktarımından** sonra **eSIM hizmet yok** sorunu yaşarsanız APN'yi el ile yapılandırın:

| Operatör | APN | Kullanıcı Adı | Şifre |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (boş) | (boş) |
| **SFR** | sl2sfr | (boş) | (boş) |
| **Free** | free | (boş) | (boş) |
| **Bouygues** | ebouygtel.com | (boş) | (boş) |
| **T-Mobile (ABD)** | fast.t-mobile.com | (boş) | (boş) |
| **AT&T (ABD)** | nxgen | (boş) | (boş) |
| **Verizon (ABD)** | vzwinternet | (boş) | (boş) |
| **Telekom (DE)** | internet.telekom | (boş) | (boş) |

### Hâlâ takıldınız mı?
Desteği aramadan önce şunları hazırlayın:
- Kaynak cihazın IMEI ve EID bilgileri
- Hedef cihazın IMEI ve EID bilgileri
- Tam hata mesajı (ekran görüntüsü alın)
- Hesap numaranız veya telefon numaranız


## Aktarımdan Sonra Eski eSIM'e Ne Olur?

**Anında devre dışı bırakılır.**

Eski eSIM profili eski cihazda kısa bir süre görünmeye devam edebilir. El ile silebilirsiniz:
`Ayarlar > Hücresel > eski eSIM'e dokunun > eSIM'i Sil`.

> 💰 **Faturalandırma**: Operatörünüz plan için sizi faturalandırmaya devam edecek. Aktarım planı iptal etmez – yalnızca SIM'i taşır. İptal için operatörle ayrıca iletişime geçmeniz gerekir.

**eSIM başka bir cihaza bağlı** hatalarından endişe ediyorsanız, aktarım başarıyla tamamlandıktan sonra eski profili kaynak cihazdan her zaman silin.

### Aktarım ve Silme Zaman Çizelgesi

| Eylem | Ne Olur | Ne Zaman Yapılmalı |
| :--- | :--- | :--- |
| **Aktarım başlatıldı** | Operatör profili yeni cihaza gönderir | Eski eSIM'i silmeden önce |
| **Yeni eSIM etkinleştirildi** | Yeni cihaz ağa bağlanır | Etkinleştirme tamamlandıktan sonra |
| **Eski eSIM devre dışı bırakıldı** | Operatör eski profili devre dışı bırakır | Otomatik – 1‑5 dakika sürebilir |
| **Eski eSIM silindi** | Etkin olmayan profili eski cihazdan kaldırır | Yeni cihazın çalıştığını onayladıktan sonra |


## eSIM Aktarımından Sonra WhatsApp, iMessage ve 2FA Taşıma

eSIM'inizi başarıyla aktardıktan sonra mesajlaşma uygulamalarınızı ve kimlik doğrulama servislerinizi yeni cihazda kurmanız gerekir.

### WhatsApp

WhatsApp hesabınızı tanımlamak için telefon numaranızı kullanır. **eSIM aktarımından** sonra:

1. Yeni cihazınızda WhatsApp'ı açın.
2. Telefon numaranızı girin (aktardığınız numara).
3. Numaranıza SMS veya otomatik arama yoluyla bir doğrulama kodu alacaksınız.
4. Kodu girin – daha önce yedekleme yaptıysanız sohbetleriniz yeniden görünür.

**İpucu:** Aktarıma başlamadan önce sohbetlerinizi yedekleyin. iPhone'da: WhatsApp > Ayarlar > Sohbetler > Sohbet Yedekleme. Android'de: WhatsApp > Ayarlar > Sohbetler > Yedekleme.

**Yaygın WhatsApp sorunu:** SMS doğrulama kodu gelmiyorsa "Beni ara" seçeneğini deneyin – WhatsApp numaranızı arar ve kodu okur. O da başarısız olursa 5 dakika bekleyip tekrar deneyin (operatör ağı hâlâ yerleşiyor olabilir).

### iMessage ve FaceTime

1. `Ayarlar` → `Mesajlar` bölümüne gidin ve `iMessage`ı açın.
2. `Ayarlar` → `FaceTime` bölümüne gidin ve `FaceTime`ı açın.
3. Etkinleştirme için 1‑2 dakika bekleyin. "Etkinleştirme bekleniyor" diyorsa kapatıp tekrar açın.
4. Numaranızın seçili olduğunu kontrol edin: Ayarlar > Mesajlar > Al ve Gönder → eSIM numaranızı seçin.

### İki Faktörlü Kimlik Doğrulama ve SMS Doğrulaması

Telefon numaranız değişmediği için SMS tabanlı 2FA kodları normal şekilde çalışacaktır. Ancak uygulama tabanlı kimlik doğrulayıcılar (Google Authenticator, Microsoft Authenticator, Authy) yeniden kurulum gerektirebilir:

- **Authy:** Tokenlarınız şifrelenir ve buluta yedeklenir – yeni cihazda sadece oturum açın.
- **Google Authenticator:** Hesaplarınızı tek tek aktarmanız veya "Hesapları aktar" özelliğini kullanmanız gerekir.
- **Microsoft Authenticator:** Yeni cihazda geri yüklemek için yedekleme özelliğini kullanın.
- **SMS 2FA:** SMS teslimatının çalıştığını doğrulamak için bankanızdan veya e-posta sağlayıcınızdan bir doğrulama kodu isteyerek test edin.

### Banka Uygulamaları ve Finansal Servisler

Çoğu banka cihaz değişikliğini algılar ve yeniden kimlik doğrulaması ister. Oturum açma bilgilerinizi ve varsa fiziksel token cihazlarınızı hazır bulundurun.

**eSIM aktarımından** sonra uygulama geçişi hakkında daha fazla yardım için [eSIM kurulum rehberimize](/faq/how-to-activate-an-esim/) bakın.


## eSIM Aktarım Sıkıntılarından Kaçınmak için En İyi Uygulamalar

✅ **Aktarımdan önce:**
- Operatör desteğini kontrol edin (menüye bakın – oradaysa destekleniyor demektir).
- Her iki telefonu da en son işletim sistemine güncelleyin (iOS 18 / Android 16).
- Her iki telefonu da %30'un üzerinde şarj edin.
- VPN'i ve reklam engelleyicileri geçici olarak devre dışı bırakın.
- **eSIM profilinizin** **süresinin dolmadığını** doğrulayın.
- WhatsApp'ı ve diğer mesajlaşma uygulamalarını yedekleyin.
- **eSIM'i henüz eski cihazdan SİLMEYİN.**

✅ **Aktarım sırasında:**
- Telefonları birbirine 10 cm (4 inç) yakında tutun.
- Uygulama değiştirmeyin veya ekranı kilitlemeyin.
- Bluetooth'u veya Wi‑Fi'yi kapatmayın.
- Onay mesajını bekleyin – bittiğini varsaymayın.

✅ **Aktarımdan sonra:**
- Yeni cihazda aramaları ve veriyi test edin.
- Karışıklığı önlemek için eski eSIM'i kaynak cihazdan silin.
- Eski cihazın Wi‑Fi'sini en az bir saat açık tutun – bazı operatörlerin son bir el sıkışmaya ihtiyacı olur.
- WhatsApp, iMessage ve 2FA uygulamalarını yeniden etkinleştirin.
- Bankanızdan gelen SMS doğrulama kodlarını test edin.
- Operatörünüzü tamamen değiştiriyorsanız eski planı iptal etmek için bir hatırlatıcı kurun.


## Seyahat Sırasında eSIM Aktarma

Yurt dışına seyahat ediyorsanız ve eSIM'inizi aktarmanız gerekiyorsa işte bazı önemli noktalar. Ve aktarım yolculuk ortasında kurtarılamazsa en hızlı çıkış genellikle yerel bir plan satın almaktır — varış noktanıza bağlı olarak [ABD eSIM plan rehberine](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) veya [İngiltere eSIM satın alma rehberine](/faq/how-to-buy-a-uk-esim/) bakın:

### Seyahat Sırasında eSIM Aktarma
- Operatörünüz desteklediği sürece platformlar arası aktarım **dünya genelinde** çalışır.
- Başlamadan önce istikrarlı bir Wi‑Fi bağlantınız (otel, kafe) olduğundan emin olun.
- Aktarım başarısız olursa en iyi seçeneğiniz operatör QR kodu alternatifidir.
- Aktarımdan sonra **eSIM APN ayarlarını** kontrol edin – bazı operatörler el ile yapılandırma gerektirir.

### Fransız Operatörler ve Seyahat
- **Orange** ve **SFR**, nerede olursanız olun platformlar arası aktarıma izin verir.
- **Free** ve **Bouygues** QR kodu yenilemesi gerektirir – yola çıkmadan önce bunu yapın.
- **Seyahat eSIM'leri** için genellikle **taşınamadıklarını** unutmayın – yeni cihazınızda yeni bir plan satın alın.

### Yurt Dışındayken Operatörlerle Nasıl İletişime Geçilir

| Operatör | Destek İletişim Yöntemi | Notlar |
|---------|------------------------|-------|
| **Orange** | Orange uygulama sohbeti, WhatsApp desteği veya telefon | Çoğu bölgede 7/24 |
| **SFR** | SFR & Moi uygulama sohbeti, telefon | Sınırlı saatler |
| **T-Mobile** | T‑Mobile uygulama sohbeti, iMessage, telefon | ABD'de 7/24 destek |
| **Verizon** | My Verizon uygulama sohbeti, telefon | 7/24 destek |
| **AT&T** | AT&T uygulama sohbeti, telefon | Yurt dışında sınırlı saatler |
| **EE** | EE uygulama sohbeti, telefon | Birleşik Krallık'ta 7/24 destek |

**İpucu:** Seyahate çıkmadan önce operatörünüzün uygulamasını indirin ve destek iletişim bilgilerini kaydedin. Bazı operatörler oturum açmak için SMS doğrulaması ister – aktarımın ortasındaysanız bu çalışmayabilir.

### Aktarım Yolculuk Ortasında Başarısız Olursa Ne Yapmalı

1. En yakın ücretsiz Wi‑Fi'ye bağlanın (havalimanları, oteller, kafeler).
2. Operatörünüzün desteğine e-posta veya mesajlaşma uygulaması üzerinden ulaşın.
3. eSIM'inizi QR kodu olarak yeniden vermelerini isteyin.
4. QR kodunu yeni cihazınızda tarayın.

### Dünya Gezginleri için İpuçları
- eSIM QR kodlarınızın her zaman bir yedeğini saklayın.
- Yolculuk ortasında telefon değiştirirseniz mümkün olduğunda QR kodu yerine yerel aktarımı tercih edin.
- Birden çok destinasyon için çok ülkeleri kapsayan küresel bir eSIM planı düşünün.
- Seyahate çıkmadan önce operatörünüzün destek iletişim bilgilerini kaydedin.

Seyahat sırasında eSIM kullanımı hakkında daha fazla bilgi için [Seyahat eSIM 2026 rehberimize](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) bakın.


## Sıkça Sorulan Sorular

**S1: Yalnızca veri içeren bir eSIM'i (örneğin seyahat eSIM'i) aktarabilir miyim?**
Hayır. Çoğu seyahat eSIM'i (Roami, Airalo, Holafly, Nomad vb.) platformlar arası aktarımı desteklemez. Cihaz başına bir kez yüklenecek şekilde tasarlanmıştır. Yeni telefonunuzda yeni bir plan satın almanız gerekir. Teknik açıklama için yukarıdaki "Seyahat eSIM'leri Neden Taşınamaz?" bölümüne bakın.

**S2: Aktarım iPhone 11 ile Samsung S24 arasında çalışır mı?**
Evet – her ikisi de işletim sistemi gereksinimlerini karşılıyorsa. iPhone 11, iOS 18'i (iOS 18'e kadar çalışır) destekler. Samsung S24, Android 16'yı destekler. Donanım nesli önemli değildir; yalnızca işletim sistemi sürümü önemlidir.

**S3: Operatörümün uygulaması eSIM aktarımı sunmuyor. Bu nasıl olur?**
Her operatör uygulama tabanlı eSIM aktarımını desteklemez. Operatörünüz sunmuyorsa operatör QR kodu alternatifini kullanın: operatörünüzle iletişime geçin ve eSIM'inizi yeni bir QR kodu olarak yeniden vermelerini isteyin. Bazı operatörler bunun için küçük bir ücret alır (0‑25 $).

**S4: Aktarımdan sonra WhatsApp / iMessage / 2FA kodlarım hâlâ çalışır mı?**
WhatsApp telefon numaranızı kullanır – SIM değişikliğini algılar ve yeniden doğrulama isteyebilir (genellikle otomatik). iPhone'daki iMessage eSIM numarasını kullanır ve bir dakika içinde yeniden etkinleşmelidir. 2FA için numaranıza SMS gönderen servisler normal çalışacaktır – numara değişmedi. Ayrıntılı geçiş adımları için 10. bölüme bakın.

**S5: Aynı eSIM'i birden fazla kez ileri geri aktarabilir miyim?**
Evet, ancak her aktarım aynı süreci gerektirir. Bazı operatörler bir eSIM'in yılda kaç kez aktarılabileceğini sınırlar (örneğin 3‑5 kez). Sınıra ulaşırsanız yardım için operatörünüze başvurun.

**S6: eSIM + fiziksel SIM çift SIM kurulumları ne olacak?**
Aktarım yalnızca eSIM'i taşır. Fiziksel SIM kaynak cihazda kalır. Her ikisini de taşımak istiyorsanız eSIM'i (bu rehberi kullanarak) aktarmanız ve nano‑SIM kartı yeni cihaza fiziksel olarak taşımanız gerekir. Aktarımdan sonra çift SIM deneyimini optimize etmek için **[Çift eSIM Çalışmıyor mu? iPhone için 12 Çözüm](/faq/dual-esim-not-working-12-fixes-for-iphone/)** makalemize göz atın.

**S7: Aktarım sırasında "eSIM profilinin süresi doldu" hatası alırsam ne yapmalıyım?**
Yeni bir QR kodu almak için operatörünüzle iletişime geçin – yenileme genellikle ücretsizdir. Yeniden süresinin dolmasını önlemek için yeni QR kodunu hemen (30 dakika içinde) etkinleştirdiğinizden emin olun.

**S8: Operatör kilidim neden aktarımı engelliyor?**
Telefonunuz **operatör kilidi** altındaysa eSIM'i yalnızca aynı operatörün bir cihazına aktarabilirsiniz. Aktarımdan önce cihazın kilidini açması için operatörünüzle iletişime geçin. iPhone'da: Ayarlar > Genel > Hakkında > Operatör Kilidi "SIM kısıtlaması yok" demeli.

**S9: Bir Orange eSIM'i Orange olmayan bir cihaza aktarabilir miyim?**
Evet, cihazınız kilitli değilse ve Orange planınız buna izin veriyorsa. **Orange eSIM aktarımı**, Orange uygulaması veya yerel aktarım yoluyla desteklenir. Orange yılda en fazla 3 aktarıma izin verir.

**S10: Aktarım bir Free eSIM ile çalışır mı?**
Hayır – Free platformlar arası aktarımı desteklemez. Free müşteri portalından QR kodu alternatif yöntemini kullanın. Free yılda en fazla 2 aktarıma izin verir.

**S11: eSIM onay kodu nedir ve nerede bulabilirim?**
Bazı eSIM profillerinin zorunlu bir **eSIM onay kodu** vardır – genellikle 4‑8 haneli. Operatörün e-postasında veya etkinleştirme talimatlarında arayın. Bulunamazsa operatörünüze sorun.

**S12: "eSIM yeni telefona aktarılmıyor" ne anlama gelir?**
Bu genellikle operatörünüzün aktarımı desteklemediği, QR kodunun süresinin dolduğu, eski eSIM'in hâlâ etkin olduğu veya yeni cihazın operatör kilitli olduğu anlamına gelir. Önce eski eSIM'i silin (hâlâ görünüyorsa), sonra tekrar deneyin. Tam sorun giderme tablosu için 7. bölüme bakın.

**S13: Aktarımdan sonra "eSIM etkinleştirme başarısız" hatasını nasıl düzeltirim?**
Wi‑Fi bağlantınızı kontrol edin, her iki cihazı da yeniden başlatın ve tekrar deneyin. Hâlâ başarısız olursa operatör e-postanızdaki SM‑DP+ adresiyle el ile giriş yöntemini kullanın.

**S14: eSIM'imi aktarmak planımı iptal eder mi?**
Hayır – eSIM'i aktarmak yalnızca SIM profilini yeni bir cihaza taşır. Planınız (ve faturalandırma) önceki gibi devam eder. Planınızı iptal etmek için operatörünüzle ayrıca iletişime geçmeniz gerekir.

**S15: eSIM'i eski telefondan çoktan sildiysem aktarabilir miyim?**
Evet, ancak daha karmaşıktır. Aktarıma başlamadan önce eSIM'i sildiyseniz operatörünüzle iletişime geçin ve eSIM'inizi yeni bir QR kodu olarak yeniden vermelerini isteyin. Profiliniz sunucularında hâlâ var olduğu için bunu yapabilirler.

**S16: Bir eSIM QR kodunu yenilemenin maliyeti nedir?**
Çoğu operatör eSIM'leri ücretsiz yeniler (özellikle faturalı planlarda). Bazı ön ödemeli operatörler veya MVNO'lar küçük bir ücret alabilir (5‑25 $). Yenileme talebinde bulunmadan önce sorun.

**S17: Bir Vodafone eSIM'i Vodafone olmayan bir cihaza aktarabilir miyim?**
Evet, cihazınız kilitli olduğu ve Vodafone planınız eSIM aktarımına izin verdiği sürece. Vodafone çoğu ülkede uygulamaları üzerinden aktarımı destekler. Vodafone uygulamasında "eSIM aktarımı" seçeneğini kontrol edin.

**S18: Operatörümün aktarım sınırına ulaşırsam ne olur?**
Bazı operatörler aktarımları yılda 3‑5 ile sınırlar. Sınıra ulaşırsanız operatör desteğiyle iletişime geçin – genellikle sınırı sıfırlayabilir veya (aktarım sistemini atlayarak) el ile yeni bir eSIM QR kodu verebilirler.

**S19: İki eSIM'i aynı anda aktarabilir miyim (çift eSIM)?**
Evet, ancak bunları **tek tek** aktarmanız gerekir. Her eSIM profili bağımsızdır ve aynı süreç kullanılarak ayrı ayrı aktarılmalıdır. Eski cihazınızda iki etkin eSIM varsa önce birincil eSIM'i, sonra ikincilini aktarın.

**S20: eSIM aktarımı ile eSIM yenileme arasındaki fark nedir?**
Aktarım, mevcut profilinizi yeni bir cihaza taşır (numaranızı ve planınızı koruyarak). Yenileme, aynı numara için tamamen yeni bir eSIM profili oluşturur – eski profil kalıcı olarak devre dışı bırakılır. Yenileme, operatörünüz aktarımı desteklemediğinde kullanılan alternatif yöntemdir.

---

## Sonuç

eSIM'lerin operatör müdahalesi olmadan iPhone ile Android arasında aktarılabilmesi **2026'nın çığır açan** özelliğidir. Ekosistem değiştirmenin son büyük sürtünme noktasını ortadan kaldırır. Operatörünüz desteklenen listede olduğu ve her iki telefon da güncel olduğu sürece numaranızı bir dakikanın altında taşıyabilirsiniz.

**Unutmayın**:
- Operatörünüz desteklenmiyorsa QR kodu alternatifi hâlâ çalışır – sadece bir telefon görüşmesi gerekir.
- Seyahat eSIM'lerini tek kullanımlık düşünün; her cihazda yenisini satın alın.
- **Aktarıma başlamadan önce asla eski eSIM'i silmeyin** – en yaygın hata budur.
- Başlamadan önce operatör kilidini kontrol edin – "SIM kısıtlaması yok" gerekli.
- Bazı operatörler yıllık aktarım sınırı koyar – başlamadan önce kontrol edin.

Sürekli **eSIM aktarım hatası** mesajlarıyla karşılaşırsanız, **[eSIM Derin Sorun Giderme Rehberimiz (16 gerçek vaka)](/faq/esim-deep-troubleshooting-guide-2026/)** gelişmiş çözümleri ele alır.

👉 **Seyahat planına mı geçiyorsunuz?** Aktarımınız tamamlandıktan sonra [ABD için eSIM](/united-states-esim/) veya [Avrupa için eSIM](/europe-esim/) sayfalarına bakın.

👉 **Yeni telefonunuzun eSIM desteklediğinden emin değil misiniz?** Başlamadan önce **[eksiksiz uyumluluk listemize](/compatibility/)** göz atın.

👉 **Yeni cihazınızda bir seyahat eSIM'i mi test ediyorsunuz?** Her şeyin çalıştığını doğrulamak için **[ücretsiz Roami eSIM denemesini](/free-esim/)** alın.

---

*Bilgiler, Eylül 2026 itibarıyla Apple ve Android resmî dokümantasyonu, GSMA standartları ve operatör rehberliğine dayanmaktadır. Özellikler ve operatör desteği değişikliğe tabidir.*
## Kaynaklar

- [GSMA — eSIM (SGP.22) spesifikasyonu](https://www.gsma.com/esim/)
- [Apple Destek — iPhone'da eSIM kurulumu](https://support.apple.com/en-us/HT212780)
- [Google Destek — eSIM kurulumu](https://support.google.com/pixelphone/answer/14853135)
- [Google Destek — Android eSIM](https://support.google.com/android/answer/11241215)
