---
title: "Cara Memindahkan eSIM Antara iPhone dan Android"
h1_title: "Cara Memindahkan eSIM Antara iPhone dan Android"
description: "Pindahkan eSIM Anda antara iPhone dan Android dengan aplikasi operator atau kode QR yang diterbitkan ulang. Langkah demi langkah untuk kedua arah, plus perbaikan error transfer umum."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM cross-platform transfer", "eSIM transfer error", "iOS 18 eSIM", "eSIM carrier lock", "eSIM confirmation code", "eSIM no service", "eSIM APN settings", "eSIM troubleshooting", "eSIM activation failed", "transfer eSIM between iPhone and Android", "can't transfer eSIM to new iPhone", "Orange eSIM transfer"]
date: 2026-09-13T00:00:00Z
lastmod: 2026-09-13T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Diperbarui pada"
  min_read: "menit baca"
  toc: "Daftar Isi"

breadcrumbs:
  home:
    text: "Beranda"
    url: "/"
  parent:
    text: "Pusat Bantuan"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIM Populer"
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
  title: "Klaim eSIM Gratis"
  icon: "🎁"
  item_suffix: "eSIM Gratis"
  item_subtitle: "eSIM Gratis"
  items:
    - name: "UK eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Jerman"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thailand"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "Pertanyaan Populer"
  items:
    - question: "Apa itu aktivasi eSIM dan bagaimana cara kerjanya?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Bagaimana cara mengaktifkan eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Cara mengaktifkan eSIM di iPhone (Semua Model)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Daftar Kompatibilitas eSIM Terbaru"
      url: "/compatibility/"
---


> **Catatan Editor:** Anda hanya bisa memindahkan eSIM antara iPhone dan Android jika operator Anda mendukung transfer lintas platform, dan sebagian besar eSIM perjalanan sama sekali tidak bisa dipindahkan. Metode di bawah mengikuti dokumentasi resmi operator dan fokus pada transfer yang benar-benar bekerja hari ini. Periksa bagian operator yang didukung terlebih dahulu untuk melihat apakah paket Anda memenuhi syarat.

Inilah kenyataannya di muka: eSIM umumnya tidak bisa dipindahkan langsung antara iPhone dan Android, karena kedua platform tidak berbagi protokol transfer. Namun solusinya sederhana — minta operator Anda menerbitkan ulang profilnya sebagai kode QR, atau transfer lewat aplikasi operator di mana didukung. Kedua arah, plus pengecualian eSIM perjalanan, diuraikan di bawah.

## Apa Itu Transfer eSIM?

**Temukan skenario Anda di bawah dan langsung lompat ke metode yang tepat.**

| Skenario Anda | Bisakah Dipindahkan? | Metode Terbaik | Ke Mana Pergi |
| :--- | :--- | :--- | :--- |
| **iPhone → iPhone baru** | ✅ Ya (selalu) | Apple Quick Transfer | [Transfer Dalam Platform](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → Samsung baru** | ✅ Ya (biasanya) | Samsung Smart Switch | [Transfer Dalam Platform](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (operator mendukung transfer aplikasi)** | ✅ Ya | Aplikasi Operator | [Metode A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (operator tidak mendukung aplikasi)** | ✅ Ya | Cadangan Kode QR | [Metode B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (operator mendukung)** | ✅ Ya | Aplikasi Operator atau Kode QR | [Metode B](#esim-transfer-from-iphone-to-android) |
| **eSIM perjalanan (Roami, Airalo, Holafly)** | ❌ Tidak | Beli paket baru di perangkat baru | [Mengapa eSIM perjalanan tidak bisa dipindahkan](#why-cant-travel-esims-be-transferred) |
| **Operator tidak mendukung transfer** | ✅ Ya (cadangan) | Hubungi operator untuk kode QR | [Metode Cadangan](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Aturan kunci:** Tidak ada **tombol transfer eSIM bawaan iOS-ke-Android** seperti yang ada untuk iPhone-ke-iPhone. Transfer lintas platform selalu **melalui operator Anda** – baik lewat aplikasi mereka atau dengan meminta kode QR baru. eSIM perjalanan **hanya satu perangkat** – beli yang baru di ponsel baru Anda.

**Tidak bisa dipindahkan?** Sebagian besar eSIM perjalanan (Roami, Airalo, Holafly) **hanya satu perangkat** – Anda perlu membeli paket baru di ponsel baru Anda. Untuk eSIM operator lokal, cadangan kode QR selalu bekerja.

> **Keterbatasan kunci:** Tidak ada **transfer eSIM bawaan iOS-ke-Android** – Anda harus melalui operator Anda. Panduan ini memandu Anda melalui setiap metode yang didukung.

Baru pertama kali menyiapkan eSIM? [Panduan cara mengaktifkan eSIM](/faq/how-to-activate-an-esim/) kami mencakup instalasi dari nol. Jika transfer gagal di tengah jalan, [Panduan Penanganan Masalah eSIM Mendalam](/faq/esim-deep-troubleshooting-guide-2026/) memetakan setiap pesan error ke perbaikannya.


## Metode Transfer eSIM Mana yang Harus Anda Gunakan?

| Situasi Anda | Metode Terbaik | Waktu | Butuh Operator? |
| :--- | :--- | :--- | :--- |
| **Beralih iPhone ↔ iPhone** | Apple Quick Transfer (Pengaturan > Seluler > Tambah eSIM > Transfer) | 2 mnt | Tidak (Apple menanganinya) |
| **Beralih Android ↔ Android (Samsung ke Samsung, dll.)** | Transfer khusus merek (Samsung: SIM Manager > Tambah eSIM > Transfer) | 2 mnt | Tidak (merek menanganinya) |
| **Beralih iPhone ↔ Android (iOS 18 / Android 16+)** | Transfer aplikasi operator | 3-5 mnt | Ya |
| **Beralih iPhone ↔ Android (OS lama)** | Kode QR diterbitkan ulang operator | 5-10 mnt | Ya |
| **eSIM perjalanan (Roami, Airalo, Holafly)** | ❌ Tidak bisa dipindahkan – beli paket baru di perangkat baru | N/A | Tidak – penyedia tidak mengizinkan |
| **Operator Anda tidak mendukung transfer** | Cadangan kode QR (telepon operator) | 10-20 mnt | Ya |


## Panduan Transfer eSIM Lengkap

Inilah peta perjalanan langkah demi langkah bagi siapa pun yang memindahkan eSIM ke perangkat baru.

| Langkah | Apa yang Anda Pikirkan | Yang Harus Dilakukan | Di Mana Menemukannya |
| :--- | :--- | :--- | :--- |
| **1. Tentukan skenario Anda** | "Jenis perpindahan apa yang saya lakukan?" | Identifikasi: ekosistem yang sama (iOS→iOS / Android→Android) atau lintas platform (iOS↔Android)? | [Alur Keputusan Cepat di atas](#which-esim-transfer-method-should-you-use) |
| **2. Periksa versi OS** | "Apakah ponsel saya cukup mutakhir?" | iPhone harus iOS 18+, Android harus Android 16+ untuk transfer lintas platform native. | Perbarui dulu jika belum. |
| **3. Periksa carrier lock** | "Apakah ponsel saya terkunci operator?" | Pengaturan > Umum > Tentang > Carrier Lock harus tertulis "No SIM restrictions." | [Prasyarat di bawah](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Periksa dukungan operator** | "Apakah operator saya mengizinkan ini?" | Buka aplikasi operator dan cari opsi transfer eSIM. Atau telepon dan tanyakan. | [Bagian operator yang didukung di bawah](#carriers-that-support-cross-platform-esim-transfer) |
| **5. Jalankan transfer** | "Saatnya memindahkan nomornya." | Ikuti langkah spesifik untuk skenario Anda. | [Metode A](#esim-transfer-from-android-to-iphone) atau [Metode B](#esim-transfer-from-iphone-to-android) |
| **6. Penyiapan pasca-transfer** | "Nomor saya sudah di ponsel baru – lalu apa?" | Aktifkan kembali WhatsApp, iMessage, aplikasi 2FA, dan uji SMS. | [Bagian Setelah Transfer eSIM di bawah](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. Tangani masalah jika gagal** | "Tidak berhasil – bagaimana sekarang?" | Periksa errornya, hapus profil lama, coba lagi, atau pakai cadangan kode QR. | [Tabel penanganan masalah di bawah](#why-did-my-esim-transfer-fail) |


## Apa yang Anda Butuhkan Sebelum Memulai Transfer eSIM

**Untuk kedua arah:**
- Kedua perangkat harus **tidak terkunci** (tanpa **carrier lock**). Untuk memeriksa di iPhone: `Pengaturan > Umum > Tentang` → `Carrier Lock` harus tertulis "No SIM restrictions". **Ini alasan #1 kegagalan transfer** – jika ponsel Anda terkunci, Anda tidak bisa memindahkan eSIM ke jaringan operator yang berbeda.
- Kedua perangkat memiliki **Bluetooth menyala**.
- Kedua perangkat tersambung ke **Wi‑Fi** (atau setidaknya satu pun punya koneksi data seluler yang berfungsi).
- eSIM yang ingin dipindahkan **aktif** di perangkat sumber (belum terhapus).
- Operator Anda **mendukung transfer lintas platform** (lihat daftar di bawah). Jika tidak, lompat ke bagian metode cadangan.

Baru mengenal profil dan server SM‑DP+? [Penjelas aktivasi eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) membahas apa yang sebenarnya terjadi saat profil berpindah antar perangkat.
- **Profil eSIM** Anda tidak **kedaluwarsa** – sebagian profil memiliki tanggal masa berlaku terbatas.

**Untuk Android → iPhone:**
- iPhone harus berada di **iOS 18 atau lebih baru**.
- Android harus berada di **Android 16 atau lebih baru**.

**Untuk iPhone → Android:**
- iPhone harus berada di **iOS 18 atau lebih baru**.
- Android harus berada di **Android 16 atau lebih baru**.

> 🚨 **Peringatan Penting – Jangan Hapus Sebelum Transfer:**
> **JANGAN menghapus eSIM dari perangkat lama Anda sebelum memulai transfer.** Jika Anda menghapus eSIM sumbernya lebih dulu, profilnya hilang dari perangkat Anda dan operator mungkin tidak bisa memindahkannya ke perangkat baru. Anda harus menghubungi operator untuk kode QR yang benar-benar baru – yang bisa memakan 24‑48 jam. Selalu mulai transfer dari perangkat baru terlebih dahulu, atau pertahankan eSIM lama tetap aktif sampai yang baru terkonfirmasi bekerja.

> 🚨 Jika perangkat Anda memakai OS lebih lama, opsi menunya tidak akan muncul sama sekali. Perbarui dulu. Jika Anda berhadapan dengan **profil eSIM kedaluwarsa**, hubungi operator Anda untuk kode QR baru sebelum memulai transfer.

Halaman [Google Support – eSIM di Pixel](https://support.google.com/pixelphone/answer/7086887) memberikan detail tambahan bagi pengguna Android yang bersiap memindahkan eSIM mereka.


## Mengapa eSIM Perjalanan Tidak Bisa Dipindahkan?

Ini pertanyaan #1 yang kami terima. Inilah alasannya:

| Alasan | Penjelasan |
| :--- | :--- |
| **Pengikatan EID** | Setiap profil eSIM terikat secara kriptografis pada **EID** (eUICC Identifier) perangkat tempat ia diaktifkan. EID ponsel Anda unik – seperti nomor seri untuk perangkat keras eSIM Anda. (Anda bisa melihat EID dengan memanggil `*#06#` di kebanyakan ponsel.) |
| **Kode QR Sekali Pakai** | Kode QR eSIM perjalanan dirancang untuk **sekali pakai**. Setelah dipindai, kode QR itu dinonaktifkan di server operator. Ini fitur keamanan untuk mencegah penipuan. |
| **Tanpa Akun Operator** | eSIM perjalanan dibeli sebagai produk mandiri – Anda tidak memiliki "akun operator" dengan layanan berjalan. Tidak ada tempat untuk masuk dan meminta transfer. |
| **Dirancang untuk Kenyamanan** | eSIM perjalanan menukar kemampuan transfer dengan kenyamanan. Anda mendapat aktivasi seketika tanpa verifikasi ID, tetapi konsekuensinya profil terkunci pada satu perangkat. |

**Kesimpulannya:** Jika Anda memakai eSIM perjalanan (Roami, Airalo, Holafly, Nomad, dll.), **jangan buang waktu mencoba memindahkannya**. Itu tidak akan berhasil. Cukup beli paket baru di perangkat baru Anda. Biaya eSIM perjalanan baru biasanya lebih kecil daripada waktu yang Anda habiskan mencoba memindahkan profil yang tidak bisa dipindahkan.

**Bagaimana dengan eSIM operator (pascabayar/prabayar)?**
eSIM operator berbeda. Anda punya akun dengan operator, dan mereka bisa menerbitkan ulang eSIM Anda ke perangkat baru karena mereka mengendalikan profilnya di server mereka. Itulah mengapa eSIM operator bisa dipindahkan, dan eSIM perjalanan tidak.


## Metode Transfer eSIM Mana yang Tepat untuk Anda?

| Fitur | Transfer Aplikasi Operator | Kode QR Operator | Transfer Native (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Bekerja lintas platform?** | ✅ Ya | ✅ Ya | ❌ Tidak (ekosistem sama saja) |
| **Waktu yang dibutuhkan** | 3-5 mnt | 5-10 mnt | 1-2 mnt |
| **Keterlibatan operator** | Mandiri lewat aplikasi | Harus menghubungi operator | Tidak ada |
| **Bekerja saat bepergian?** | ✅ Ya (dengan Wi-Fi) | ✅ Ya (dengan Wi-Fi) | ✅ Ya |
| **Tingkat keberhasilan** | Tinggi (jika didukung) | Sangat Tinggi (selalu bekerja) | Sangat Tinggi |
| **Terbaik untuk** | Transfer cepat, operator yang mendukung aplikasi | Operator mana pun, cadangan saat aplikasi gagal | Upgrade perangkat dalam ekosistem yang sama |
| **Biaya** | Biasanya gratis | Bisa berbiaya $0‑25 untuk penerbitan ulang QR | Gratis |


## Transfer eSIM dari Android ke iPhone

Ini skenario paling umum – beralih dari Samsung, Pixel, atau Android lain ke iPhone baru. Cara paling andal memindahkan nomor Anda adalah lewat aplikasi operator Anda.

### Langkah demi Langkah

**Sebelum mulai:**
- Pastikan aplikasi operator Anda terpasang di iPhone baru (atau bersiap masuk di situs web operator).
- Ketahui PIN akun atau kredensial login Anda.
- **JANGAN menghapus eSIM dari Android Anda dulu.**

**Di iPhone Anda (target):**
1. Pasang dan buka aplikasi operator Anda (misalnya, aplikasi T‑Mobile, Verizon, atau AT&T).
2. Masuk dan cari opsi seperti "Activate eSIM", "Change device", atau "Transfer to new device".
3. Ikuti prompt untuk memasukkan **EID** dan **IMEI** iPhone baru Anda (ditampilkan di `Pengaturan` → `Umum` → `Tentang`).
4. Operator mendorong profil eSIM Anda ke iPhone baru, atau membuat kode QR untuk Anda pindai.
5. Di iPhone, buka `Pengaturan` → `Seluler` → `Tambah eSIM` dan pindai kode QR jika ada yang dibuat.
6. Tunggu "Activation complete". Nomor Anda kini aktif di iPhone.
7. **Sekarang** Anda bisa menghapus eSIM dari Android Anda (Pengaturan > Koneksi > SIM Manager > ketuk eSIM > Hapus).

**Tips iOS 18:** Jika Anda di iOS 18, alur "Tambah eSIM" didesain ulang dengan pemindai QR lebih menonjol dan penanganan error lebih baik. Anda akan melihat indikator progres selama pengunduhan profil.

✅ **Selesai.** Nomor Anda kini aktif di iPhone. Jika operator Anda tidak menyediakan aplikasi, hubungi mereka untuk menerbitkan ulang eSIM Anda sebagai kode QR baru (lihat metode cadangan di bawah).

### Bagaimana jika transfer aplikasi tidak berhasil?

Gunakan **cadangan kode QR operator**:

- Hubungi operator Anda (chat, telepon, atau situs web).
- Beri tahu bahwa Anda berganti perangkat dan minta mereka **menerbitkan ulang eSIM Anda sebagai kode QR baru**.
- Pindai kode QR baru di iPhone: `Pengaturan` → `Seluler` → `Tambah eSIM`.
- Selesaikan aktivasi.

Jika Anda melihat error **"unable to activate esim"** selama proses ini, periksa koneksi Wi‑Fi Anda dan coba lagi.


## Transfer eSIM dari iPhone ke Android

Tidak ada opsi bawaan "Transfer ke Android" di iPhone. Metode andalnya adalah meminta operator Anda menerbitkan ulang eSIM Anda.

### Prasyarat
- Ponsel Android baru Anda **tidak terkunci**.
- Anda bisa menghubungi operator Anda (atau masuk ke aplikasi/situs webnya).
- Android Anda berada di **Android 16 atau lebih baru**.
- **JANGAN menghapus eSIM dari iPhone Anda dulu.**

### Langkah-langkah

**Hubungi operator Anda (atau gunakan aplikasinya):**
1. Beri tahu bahwa Anda memindahkan eSIM Anda dari iPhone ke ponsel Android.
2. Sediakan **EID** dan **IMEI** perangkat Android baru (di `Pengaturan` → `Tentang ponsel`).
3. Operator Anda menerbitkan ulang eSIM Anda sebagai kode QR baru (atau mendorongnya lewat aplikasi mereka).

**Di Android Anda (target):**
1. Buka `Pengaturan` → `Jaringan & internet` → `SIM` → `Tambah eSIM` (redaksinya bervariasi antar merek).
2. Pindai kode QR yang diberikan operator.
3. Ikuti prompt untuk mengunduh dan mengaktifkan profilnya.
4. Tunggu aktivasi selesai.
5. **Sekarang** Anda bisa menghapus eSIM dari iPhone Anda (Pengaturan > Seluler > ketuk eSIM > Hapus Paket Seluler).

✅ Selesai. Nomor Anda kini berada di ponsel Android.

> ⚠️ **Penting**: Begitu transfer selesai, eSIM **dihapus permanen** dari iPhone. Anda tidak bisa kembali tanpa operator Anda. Pastikan Anda punya saluran aktif lain atau Wi‑Fi sebelum memindahkan.


## Memindahkan eSIM ke iPhone atau Samsung Baru

Meskipun transfer lintas platform adalah fokus panduan ini, banyak pengguna sekadar ingin memindahkan eSIM dalam ekosistem yang sama. Berikut caranya. (Pindah ke iPhone 16 AS hanya eSIM? [Panduan aktivasi iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) mencakup detail transfer-saat-penyiapan.)

### Transfer eSIM dari iPhone ke iPhone

**Quick Transfer** bawaan Apple adalah metode termudah:

1. Saat penyiapan iPhone baru Anda, pilih "Transfer eSIM from nearby iPhone" saat diminta.
2. Jaga kedua ponsel tetap dekat dengan Bluetooth dan Wi‑Fi menyala.
3. Konfirmasikan transfer di iPhone lama Anda.
4. Tunggu 1‑2 menit hingga **pengunduhan profil eSIM** selesai di perangkat baru.

**Jika Quick Transfer tidak bekerja:** Buka Pengaturan > Seluler di iPhone baru Anda > Tambah eSIM > Transfer from nearby iPhone.

**Jika itu gagal:** Gunakan metode kode QR operator – hubungi operator Anda untuk kode QR baru.

### Transfer eSIM dari Android ke Android

Metode transfer Android bervariasi antar merek:

**Samsung:** Pengaturan > Koneksi > SIM Manager > Tambah eSIM > Transfer eSIM dari perangkat lama (ikuti prompt di layar). Bekerja di Samsung Galaxy S21 dan lebih baru, seri Z Flip/Z Fold.

**Google Pixel:** Saat penyiapan, Anda mungkin diminta memindahkan eSIM Anda. Alternatifnya, gunakan aplikasi operator atau minta kode QR baru.

**Android umum:** Jika merek Anda tidak menawarkan transfer bawaan, gunakan metode cadangan kode QR operator.

### Perbandingan Transfer eSIM Lintas Platform vs. Dalam Platform

| Fitur | Lintas Platform | Dalam Platform |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Quick Transfer bekerja |
| **Android ↔ Android** | N/A | ✅ Metode khusus merek |
| **iOS ↔ Android** | ✅ Dibahas di panduan ini | ❌ Tidak didukung langsung |
| **Ketergantungan operator** | Lebih tinggi | Lebih rendah (Apple/Google menanganinya) |
| **Waktu yang dibutuhkan** | 3-10 mnt | 1-2 mnt |
| **Tingkat keberhasilan** | Bervariasi antar operator | Umumnya tinggi |

Untuk bagaimana perilaku eSIM berbeda antar generasi iPhone (batas penyimpanan, aturan dual-SIM, varian regional), lihat [pusat kompatibilitas eSIM iPhone](/faq/iphone-11-esim-compatible/) kami.


## Operator yang Mendukung Transfer eSIM Lintas Platform

Transfer eSIM lintas platform masih baru, dan dukungan operator digulirkan secara bertahap. Tidak ada daftar publik lengkap setiap operator yang didukung, dan ketersediaan sering berubah, jadi periksa situs web atau aplikasi operator Anda untuk status terkini.

### Operator yang Dikonfirmasi Mendukung

| Operator | Wilayah | Metode Transfer | Batas Transfer | Biaya |
|---------|--------|-----------------|----------------|------|
| **Orange** | Prancis, Eropa | Aplikasi Orange → "My eSIM space" → "Transfer to new device" | 3x per tahun | Gratis |
| **SFR** | Prancis | Aplikasi SFR & Moi → "Manage my SIM" → "Transfer eSIM" | 5x per tahun | Gratis |
| **T-Mobile** | AS | Aplikasi T-Mobile → "Manage eSIM" → "Transfer to new device" | Tanpa batas | Gratis |
| **Verizon** | AS | Aplikasi My Verizon → "Activate or switch device" | Tanpa batas | Gratis |
| **AT&T** | AS | Aplikasi AT&T → "Activate eSIM" | Bervariasi per paket | Gratis (pascabayar) |
| **EE** | Inggris | Aplikasi EE → "Plan" → "eSIM transfer" | 3x per tahun | Gratis |
| **Deutsche Telekom** | Jerman | Aplikasi Telekom → "eSIM transfer" | Tanpa batas | Gratis |
| **Swisscom** | Swiss | Aplikasi Swisscom → "eSIM transfer" | 3x per tahun | Gratis |
| **Bouygues** | Prancis | Penerbitan ulang kode QR (via portal pelanggan) | 3x per tahun | Gratis |
| **Free** | Prancis | Penerbitan ulang kode QR (via portal pelanggan) | 2x per tahun | Gratis |
| **Vodafone** | Inggris, Eropa | Aplikasi Vodafone → "eSIM transfer" | Bervariasi per negara | Gratis (pascabayar) |
| **Google Fi** | AS, Global | Aplikasi Google Fi → "Activate on this device" | Tanpa batas | Gratis |

### eSIM Perjalanan Tidak Bisa Dipindahkan

| Penyedia | Bisa Dipindahkan? | Yang Harus Dilakukan Sebagai Gantinya |
|----------|---------------|-------------------|
| **Roami** | ❌ Tidak | Beli paket baru di perangkat baru Anda |
| **Airalo** | ❌ Tidak | Beli paket baru di perangkat baru Anda |
| **Holafly** | ❌ Tidak | Beli paket baru di perangkat baru Anda |
| **Nomad** | ❌ Tidak | Beli paket baru di perangkat baru Anda |

**Bagaimana memeriksa apakah operator Anda mendukungnya?** Coba langkah di Metode A atau B. Jika operator Anda tidak menawarkan transfer berbasis aplikasi atau kode QR baru, gunakan metode cadangan di bawah.


## Metode Cadangan Saat Transfer eSIM Lintas Platform Tidak Didukung

Jika operator Anda tidak ada di daftar, atau Anda melihat **error transfer eSIM**, gunakan salah satu alternatif ini:

### Kode QR yang Diterbitkan Operator
1. Telepon atau chat dengan operator Anda.
2. Katakan: "Saya beralih dari Android ke iPhone (atau sebaliknya). Tolong terbitkan ulang eSIM saya sebagai kode QR baru."
3. Mereka akan mengirimkan kode QR atau tautan aktivasi via email.
4. Di perangkat baru, buka `Pengaturan` → `Seluler` → `Tambah eSIM` → `Gunakan kode QR` dan pindai.
5. eSIM perangkat lama akan berhenti bekerja setelah yang baru aktif.

**Tips:** Sebagian operator mengenakan biaya kecil untuk penerbitan ulang eSIM ($0-25). Tanyakan sebelum mereka melakukannya.

### Entri Manual SM-DP+
Jika operator Anda memberi Anda **kode aktivasi** dan **alamat SM‑DP+** (alamat server yang mengirimkan profil eSIM ke ponsel Anda), Anda bisa menambahkan eSIM secara manual di perangkat baru:
1. `Pengaturan` → `Seluler` → `Tambah eSIM` → `Enter Details Manually`.
2. Tempel alamat SM‑DP+ dan kode aktivasi.
3. Ketuk `Berikutnya`. Ini bekerja di iPhone maupun Android.

### Beli Paket Baru
Jika Anda memakai eSIM perjalanan (Roami, Airalo, Holafly), jangan buang waktu mencoba memindahkan – itu tidak akan berhasil. Cukup beli paket baru di perangkat baru Anda — [perbandingan paket eSIM perjalanan](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) kami menperingkat penyedia yang layak dipasang ulang.

> **Tips transisi:** Cadangan kode QR adalah metode paling andal untuk operator mana pun, terlepas dari apakah mereka mendukung transfer berbasis aplikasi. Mungkin butuh satu telepon, tetapi itu selalu bekerja.


## Transfer eSIM atau Aktivasi Baru?

Kadang membeli eSIM baru lebih cepat daripada memindahkan. Inilah kapan memilih yang mana:

| Faktor | Transfer | Aktivasi Baru | Mana yang Lebih Baik? |
|--------|----------|----------------|------------------|
| **Anda mempertahankan nomor telepon yang sama** | ✅ Pertahankan nomor | ❌ Dapat nomor baru | Transfer menang |
| **Anda punya 2FA terikat pada nomor Anda** | ✅ Pertahankan akses | ❌ Berisiko kehilangan akses | Transfer menang |
| **Operator Anda mengenakan biaya transfer** | Bisa berbiaya $0‑25 | $0 (Anda memang sedang membeli baru) | Tergantung biayanya |
| **eSIM perjalanan** | ❌ Mustahil | ✅ Mudah | Aktivasi baru menang |
| **Anda sedang tergesa (di bawah 5 menit)** | ⚠️ Bisa 5‑10 mnt | ✅ 2 mnt pindai QR | Aktivasi baru menang |
| **Anda ingin mempertahankan paket/data yang ada** | ✅ Pertahankan data tak terpakai | ❌ Kehilangan data tak terpakai | Transfer menang |

**Rekomendasi:** Jika Anda mempertahankan paket operator yang sama dan ingin mempertahankan nomor telepon Anda, transfer. Jika Anda di eSIM perjalanan atau sedang tergesa, cukup beli paket baru di perangkat baru Anda.


## Mengapa Transfer eSIM Saya Gagal?

| Error / Gejala | Penyebab Paling Mungkin | Perbaikan |
|----------------|-------------------|-----|
| "Transfer not available – carrier not supported" | Operator Anda tidak mendukung transfer lintas platform. | Gunakan metode cadangan di atas. |
| Kode QR terpindai lalu bilang "session expired" | Anda terlalu lama setelah membuat kode QR (kedaluwarsa). | Ulangi prosesnya dan pindai segera. |
| Android bilang "Pairing failed" | Izin Bluetooth atau jaringan lokal diblokir. | Di iPhone: `Pengaturan > Privasi & Keamanan > Jaringan Lokal` – pastikan `Pengaturan` diaktifkan. Di Android: matikan "Pemindaian keamanan Wi‑Fi" (biasanya di pengaturan lanjutan Wi‑Fi). |
| Transfer dimulai tapi berhenti di 50% | Wi-Fi atau sinyal seluler lemah. | Dekatkan kedua ponsel ke router. Matikan VPN di kedua perangkat. |
| **"eSIM already bound to another device"** | Profil tidak dilepaskan dengan benar dari perangkat lama. | Di perangkat lama, buka `Pengaturan > Seluler` dan `Hapus eSIM` secara manual (jika masih terlihat). Lalu tunggu 5 menit dan coba lagi. Jika tetap gagal, hubungi operator untuk pelepasan profil. |
| iPhone meminta **kode konfirmasi** setelah memindai | Profil eSIM punya **kode konfirmasi eSIM** wajib (jarang). | Cari kodenya di email operator (biasanya 4–8 digit). Jika tidak ditemukan, tanyakan ke operator. |
| Klik dua kali tombol samping tidak bereaksi (iPhone → Android) | Autentikasi biometrik belum disetel atau dinonaktifkan. | Setel Face ID / Touch ID, atau sementara nonaktifkan "Require Attention" untuk Face ID. |
| **eSIM no service** setelah transfer | Pengaturan APN tidak dikonfigurasi. | Konfigurasikan APN secara manual (lihat tabel di bawah). |
| **Profil eSIM kedaluwarsa** | Profilnya punya tanggal masa berlaku terbatas. | Hubungi operator Anda untuk kode QR baru. |
| **"Tidak ada opsi Tambah eSIM" di iPhone** | iPhone terkunci operator atau iOS lama. | Periksa carrier lock di Pengaturan > Umum > Tentang. Perbarui ke iOS 18. |
| **"SIM not supported" di perangkat baru** | Perangkat baru terkunci operator ke operator berbeda. | Periksa Carrier Lock – harus tertulis "No SIM restrictions." |
| **Batas transfer terlampaui** | Anda telah memindahkan eSIM ini terlalu sering (sebagian operator membatasi 3‑5 per tahun). | Hubungi dukungan operator untuk mereset batas atau mendapatkan eSIM baru. |
| **"eSIM transfer failed" di Samsung** | Samsung Smart Switch mungkin tidak mendukung profil operator tertentu. | Gunakan cadangan kode QR operator sebagai gantinya. |

### Konfigurasi APN Manual

Jika setelah **transfer eSIM** Anda mengalami **eSIM no service**, konfigurasikan APN secara manual:

| Operator | APN | Username | Password |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (kosong) | (kosong) |
| **SFR** | sl2sfr | (kosong) | (kosong) |
| **Free** | free | (kosong) | (kosong) |
| **Bouygues** | ebouygtel.com | (kosong) | (kosong) |
| **T-Mobile (AS)** | fast.t-mobile.com | (kosong) | (kosong) |
| **AT&T (AS)** | nxgen | (kosong) | (kosong) |
| **Verizon (AS)** | vzwinternet | (kosong) | (kosong) |
| **Telekom (DE)** | internet.telekom | (kosong) | (kosong) |

### Masih macet?
Kumpulkan ini sebelum menelepon dukungan:
- IMEI dan EID perangkat sumber
- IMEI dan EID perangkat target
- Pesan error persisnya (ambil screenshot)
- Nomor akun atau nomor telepon Anda


## Apa yang Terjadi pada eSIM Lama Setelah Transfer?

**Ia langsung dinonaktifkan.**

Profil eSIM lama mungkin masih terlihat sesaat di perangkat lama. Anda bisa menghapusnya secara manual:
`Pengaturan > Seluler > ketuk eSIM lama > Hapus eSIM`.

> 💰 **Penagihan**: Operator Anda akan terus menagih Anda untuk paketnya. Memindahkan tidak membatalkan paket – hanya memindahkan SIM-nya. Untuk membatalkan, Anda harus menghubungi operator secara terpisah.

Jika Anda khawatir soal error **eSIM terikat ke perangkat lain**, selalu hapus profil lama dari perangkat sumber setelah transfer selesai dengan sukses.

### Linimasa Transfer vs. Penghapusan

| Tindakan | Apa yang Terjadi | Kapan Melakukannya |
| :--- | :--- | :--- |
| **Transfer dimulai** | Operator mengirim profil ke perangkat baru | Sebelum menghapus eSIM lama |
| **eSIM baru diaktifkan** | Perangkat baru tersambung ke jaringan | Setelah aktivasi selesai |
| **eSIM lama dinonaktifkan** | Operator menonaktifkan profil lama | Otomatis – bisa 1‑5 menit |
| **Hapus eSIM lama** | Menghapus profil tidak aktif dari perangkat lama | Setelah memastikan perangkat baru bekerja |


## Memindahkan WhatsApp, iMessage, dan 2FA Setelah Transfer eSIM

Setelah berhasil memindahkan eSIM Anda, Anda perlu menyiapkan aplikasi pesan dan layanan autentikasi di perangkat baru.

### WhatsApp

WhatsApp memakai nomor telepon Anda untuk mengidentifikasi akun Anda. Setelah **transfer eSIM**:

1. Buka WhatsApp di perangkat baru Anda.
2. Masukkan nomor telepon Anda (yang Anda pindahkan).
3. Anda akan menerima kode verifikasi via SMS atau panggilan otomatis ke nomor Anda.
4. Masukkan kodenya – obrolan Anda akan muncul kembali jika Anda pernah mencadangkannya.

**Tips:** Cadangkan obrolan Anda sebelum memulai transfer. Di iPhone: WhatsApp > Pengaturan > Obrolan > Cadangan Obrolan. Di Android: WhatsApp > Pengaturan > Obrolan > Cadangan.

**Masalah WhatsApp umum:** Jika Anda tidak menerima kode verifikasi SMS, coba opsi "Telepon saya" – WhatsApp akan menelepon nomor Anda dan membacakan kodenya. Jika itu gagal, tunggu 5 menit dan coba lagi (jaringan operator mungkin masih menstabilkan).

### iMessage dan FaceTime

1. Buka `Pengaturan` → `Pesan` dan nyalakan `iMessage`.
2. Buka `Pengaturan` → `FaceTime` dan nyalakan `FaceTime`.
3. Tunggu 1‑2 menit untuk aktivasi. Jika tertulis "Menunggu aktivasi", matikan lalu nyalakan lagi.
4. Periksa nomor Anda terpilih: Pengaturan > Pesan > Kirim & Terima → pilih nomor eSIM Anda.

### Autentikasi Dua Faktor dan Verifikasi SMS

Karena nomor telepon Anda tidak berubah, kode 2FA berbasis SMS akan bekerja normal. Namun, autentikator berbasis aplikasi (Google Authenticator, Microsoft Authenticator, Authy) mungkin memerlukan penyetelan ulang:

- **Authy:** Token Anda dienkripsi dan dicadangkan ke awan – cukup masuk di perangkat baru.
- **Google Authenticator:** Anda perlu memindahkan akun satu per satu atau memakai fitur "Transfer akun".
- **Microsoft Authenticator:** Gunakan fitur cadangan untuk memulihkan di perangkat baru.
- **SMS 2FA:** Uji dengan meminta kode verifikasi dari bank atau penyedia email Anda untuk memastikan pengiriman SMS bekerja.

### Aplikasi Bank dan Layanan Keuangan

Sebagian besar bank akan mendeteksi pergantian perangkat dan meminta autentikasi ulang. Siapkan kredensial login dan perangkat token fisik apa pun.

Untuk bantuan lebih lanjut soal migrasi aplikasi setelah **transfer eSIM**, lihat [panduan penyiapan eSIM](/faq/how-to-activate-an-esim/) kami.


## Praktik Terbaik untuk Menghindari Pusingnya Transfer eSIM

✅ **Sebelum memindahkan:**
- Periksa dukungan operator (coba menunya – jika ada, berarti didukung).
- Perbarui kedua ponsel ke OS terbaru (iOS 18 / Android 16).
- Isi daya kedua ponsel di atas 30%.
- Nonaktifkan VPN dan pemblokir iklan untuk sementara.
- Pastikan **profil eSIM** Anda tidak **kedaluwarsa**.
- Cadangkan WhatsApp dan aplikasi pesan lainnya.
- **JANGAN menghapus eSIM dari perangkat lama dulu.**

✅ **Saat transfer:**
- Jaga ponsel dalam jarak 10 cm (4 inci) satu sama lain.
- Jangan beralih aplikasi atau mengunci layar.
- Jangan mematikan Bluetooth atau Wi‑Fi.
- Tunggu pesan konfirmasinya – jangan berasumsi sudah selesai.

✅ **Setelah transfer:**
- Uji panggilan dan data di perangkat baru.
- Hapus eSIM lama dari perangkat sumber untuk menghindari kebingungan.
- Biarkan Wi‑Fi perangkat lama menyala setidaknya satu jam – sebagian operator butuh jabat tangan terakhir.
- Aktifkan kembali WhatsApp, iMessage, dan aplikasi 2FA.
- Uji kode verifikasi SMS dari bank Anda.
- Setel pengingat untuk membatalkan paket lama jika Anda benar-benar berganti operator.


## Bepergian dan Memindahkan eSIM

Jika Anda bepergian ke luar negeri dan perlu memindahkan eSIM Anda, berikut beberapa poin penting. Dan jika transfer tidak bisa diselamatkan di tengah perjalanan, jalan keluar tercepat biasanya membeli paket lokal — lihat [panduan paket eSIM AS](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) atau [panduan membeli eSIM Inggris](/faq/how-to-buy-a-uk-esim/) tergantung tujuan Anda:

### Memindahkan eSIM Saat Bepergian
- Transfer lintas platform bekerja **di seluruh dunia** selama operator Anda mendukungnya.
- Pastikan Anda punya koneksi Wi‑Fi stabil (hotel, kafe) sebelum memulai.
- Jika transfernya gagal, cadangan kode QR operator adalah pilihan terbaik Anda.
- Periksa **pengaturan APN eSIM** setelah transfer – sebagian operator memerlukan konfigurasi manual.

### Operator Prancis dan Perjalanan
- **Orange** dan **SFR** mengizinkan transfer lintas platform di mana pun Anda berada.
- **Free** dan **Bouygues** memerlukan penerbitan ulang kode QR – lakukan ini sebelum Anda berangkat.
- Untuk **eSIM perjalanan**, ingat mereka umumnya **tidak bisa dipindahkan** – beli paket baru di perangkat baru Anda.

### Cara Menghubungi Operator Saat di Luar Negeri

| Operator | Metode Kontak Dukungan | Catatan |
|---------|------------------------|-------|
| **Orange** | Chat aplikasi Orange, dukungan WhatsApp, atau telepon | 24/7 di sebagian besar wilayah |
| **SFR** | Chat aplikasi SFR & Moi, telepon | Jam terbatas |
| **T-Mobile** | Chat aplikasi T‑Mobile, iMessage, telepon | Dukungan 24/7 di AS |
| **Verizon** | Chat aplikasi My Verizon, telepon | Dukungan 24/7 |
| **AT&T** | Chat aplikasi AT&T, telepon | Jam terbatas secara internasional |
| **EE** | Chat aplikasi EE, telepon | Dukungan 24/7 di Inggris |

**Tips:** Unduh aplikasi operator Anda dan simpan info kontak dukungan sebelum bepergian. Sebagian operator memerlukan verifikasi SMS untuk masuk – jika Anda di tengah transfer, ini mungkin tidak bekerja.

### Apa yang Harus Dilakukan Jika Transfer Anda Gagal di Tengah Perjalanan

1. Sambungkan ke Wi‑Fi gratis terdekat (bandara, hotel, kafe).
2. Hubungi dukungan operator Anda lewat email atau aplikasi pesan.
3. Minta mereka menerbitkan ulang eSIM Anda sebagai kode QR.
4. Pindai kode QR di perangkat baru Anda.

### Tips untuk Globetrotter
- Selalu simpan salinan cadangan kode QR eSIM Anda.
- Jika Anda mengganti ponsel di tengah perjalanan, utamakan transfer native daripada kode QR bila memungkinkan.
- Untuk beberapa tujuan, pertimbangkan paket eSIM global yang mencakup banyak negara.
- Simpan info kontak dukungan operator Anda sebelum bepergian.

Untuk lebih lanjut tentang memakai eSIM saat bepergian, lihat [panduan eSIM Perjalanan 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) kami.


## Pertanyaan yang Sering Diajukan

**Q1: Bisakah saya memindahkan eSIM data saja (seperti eSIM perjalanan)?**
Tidak. Sebagian besar eSIM perjalanan (Roami, Airalo, Holafly, Nomad, dll.) tidak mendukung transfer lintas platform. Mereka dirancang dipasang sekali per perangkat. Anda perlu membeli paket baru di ponsel baru Anda. Lihat "Mengapa eSIM Perjalanan Tidak Bisa Dipindahkan?" di atas untuk penjelasan teknisnya.

**Q2: Apakah transfer bekerja antara iPhone 11 dan Samsung S24?**
Ya – selama keduanya memenuhi persyaratan OS. iPhone 11 mendukung iOS 18 (menjalankan hingga iOS 18). Samsung S24 mendukung Android 16. Generasi perangkat keras tidak penting; hanya versi OS yang penting.

**Q3: Aplikasi operator saya tidak menawarkan transfer eSIM. Kenapa?**
Tidak setiap operator mendukung transfer eSIM berbasis aplikasi. Jika operator Anda tidak menawarkannya, gunakan cadangan kode QR operator: hubungi operator dan minta mereka menerbitkan ulang eSIM Anda sebagai kode QR baru. Sebagian operator mengenakan biaya kecil untuk ini ($0-25).

**Q4: Apakah WhatsApp / iMessage / kode 2FA saya tetap bekerja setelah transfer?**
WhatsApp memakai nomor telepon Anda – ia akan mendeteksi pergantian SIM dan mungkin meminta verifikasi ulang (biasanya otomatis). iMessage di iPhone memakai nomor eSIM dan seharusnya aktif kembali dalam satu menit. Untuk 2FA, layanan yang mengirim SMS ke nomor Anda akan bekerja normal – nomornya tidak berubah. Lihat Bagian 10 untuk langkah migrasi terperinci.

**Q5: Bisakah saya memindahkan eSIM yang sama bolak-balik berkali-kali?**
Ya, tetapi setiap transfer memerlukan proses yang sama. Sebagian operator membatasi berapa kali eSIM bisa dipindahkan setiap tahun (misalnya, 3‑5 kali). Jika Anda mencapai batas, hubungi operator untuk bantuan.

**Q6: Bagaimana dengan pengaturan dual‑SIM eSIM + SIM fisik?**
Transfer hanya memindahkan eSIM. SIM fisik tetap di perangkat sumber. Jika Anda ingin memindahkan keduanya, Anda perlu memindahkan eSIM (memakai panduan ini) dan memindahkan kartu nano‑SIM secara fisik ke perangkat baru. Untuk mengoptimalkan pengalaman dual‑SIM setelah transfer, lihat **[Dual eSIM Tidak Berfungsi? 12 Perbaikan untuk iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**Q7: Bagaimana jika saya mendapat error "profil eSIM kedaluwarsa" saat transfer?**
Hubungi operator Anda untuk mendapatkan kode QR baru – penerbitan ulang biasanya gratis. Pastikan mengaktifkan kode QR baru segera (dalam 30 menit) agar tidak kedaluwarsa lagi.

**Q8: Mengapa carrier lock mencegah saya memindahkan?**
Jika ponsel Anda berada di bawah **carrier lock**, Anda hanya bisa memindahkan eSIM ke perangkat dari operator yang sama. Hubungi operator Anda untuk membuka perangkat sebelum transfer. Di iPhone: Pengaturan > Umum > Tentang > Carrier Lock harus tertulis "No SIM restrictions."

**Q9: Bisakah saya memindahkan eSIM Orange ke perangkat non‑Orange?**
Ya, jika perangkat Anda tidak terkunci dan paket Orange Anda mengizinkannya. **Transfer eSIM Orange** didukung lewat aplikasi Orange atau transfer native. Orange mengizinkan hingga 3 transfer per tahun.

**Q10: Apakah transfer bekerja dengan eSIM Free?**
Tidak – Free tidak mendukung transfer lintas platform. Gunakan metode cadangan kode QR dari portal pelanggan Free. Free mengizinkan hingga 2 transfer per tahun.

**Q11: Apa itu kode konfirmasi eSIM dan di mana saya menemukannya?**
Sebagian profil eSIM memiliki **kode konfirmasi eSIM** wajib – biasanya 4‑8 digit. Cari di email operator atau instruksi aktivasi. Jika tidak ditemukan, tanyakan ke operator Anda.

**Q12: Apa arti "eSIM tidak bisa dipindahkan ke ponsel baru"?**
Ini biasanya berarti operator Anda tidak mendukung transfer, kode QR kedaluwarsa, eSIM lama masih aktif, atau perangkat baru terkunci operator. Hapus dulu eSIM lamanya (jika masih terlihat), lalu coba lagi. Lihat Bagian 7 untuk tabel penanganan masalah lengkap.

**Q13: Bagaimana memperbaiki "eSIM activation failed" setelah transfer?**
Periksa koneksi Wi‑Fi Anda, restart kedua perangkat, dan coba lagi. Jika tetap gagal, gunakan metode entri manual dengan alamat SM‑DP+ dari email operator Anda.

**Q14: Apakah memindahkan eSIM saya membatalkan paket saya?**
Tidak – memindahkan eSIM hanya memindahkan profil SIM ke perangkat baru. Paket (dan penagihan) Anda berlanjut seperti sebelumnya. Untuk membatalkan paket, Anda harus menghubungi operator secara terpisah.

**Q15: Bisakah saya memindahkan eSIM jika saya sudah menghapusnya dari ponsel lama?**
Ya, tetapi lebih rumit. Jika Anda menghapus eSIM sebelum memulai transfer, hubungi operator dan minta mereka menerbitkan ulang eSIM Anda sebagai kode QR baru. Mereka bisa melakukannya karena profil Anda masih ada di server mereka.

**Q16: Berapa biaya menerbitkan ulang kode QR eSIM?**
Sebagian besar operator menerbitkan ulang eSIM secara gratis (terutama paket pascabayar). Sebagian operator prabayar atau MVNO mungkin mengenakan biaya kecil ($5-25). Tanyakan sebelum meminta penerbitan ulang.

**Q17: Bisakah saya memindahkan eSIM Vodafone ke perangkat non‑Vodafone?**
Ya, selama perangkat Anda tidak terkunci dan paket Vodafone Anda mengizinkan transfer eSIM. Vodafone mendukung transfer lewat aplikasinya di sebagian besar negara. Periksa opsi "eSIM transfer" di aplikasi Vodafone.

**Q18: Bagaimana jika saya mencapai batas transfer operator saya?**
Sebagian operator membatasi transfer 3‑5 per tahun. Jika Anda mencapai batas, hubungi dukungan operator – mereka sering bisa mereset batas atau menerbitkan kode QR eSIM baru secara manual (melewati sistem transfer).

**Q19: Bisakah saya memindahkan dua eSIM sekaligus (dual eSIM)?**
Ya, tetapi Anda harus memindahkannya **satu per satu**. Setiap profil eSIM independen dan harus dipindahkan terpisah dengan proses yang sama. Jika Anda punya dua eSIM aktif di perangkat lama, pindahkan eSIM utama dulu, lalu sekundernya.

**Q20: Apa bedanya transfer eSIM dan penerbitan ulang eSIM?**
Transfer memindahkan profil yang ada ke perangkat baru (mempertahankan nomor dan paket Anda). Penerbitan ulang membuat profil eSIM yang benar-benar baru untuk nomor yang sama – profil lama dinonaktifkan permanen. Penerbitan ulang adalah metode cadangan saat transfer tidak didukung operator Anda.

---

## Kesimpulan Akhir

Kemampuan memindahkan eSIM antara iPhone dan Android tanpa campur tangan operator adalah **pengubah permainan 2026**. Ia menghilangkan titik gesekan besar terakhir untuk berganti ekosistem. Selama operator Anda ada di daftar yang didukung dan kedua ponsel mutakhir, Anda bisa memindahkan nomor Anda dalam waktu kurang dari satu menit.

**Ingat**:
- Jika operator Anda tidak didukung, cadangan kode QR tetap bekerja – hanya butuh satu telepon.
- Untuk eSIM perjalanan, perlakukan mereka sekali pakai; beli baru di setiap perangkat.
- **Jangan pernah menghapus eSIM lama sebelum memulai transfer** – ini kesalahan paling umum.
- Periksa carrier lock sebelum mulai – "No SIM restrictions" wajib.
- Sebagian operator membatasi transfer per tahun – periksa sebelum mulai.

Jika Anda menghadapi pesan **error transfer eSIM** yang menetap, **[Panduan Penanganan Masalah eSIM Kami (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/)** mencakup solusi lanjutan.

👉 **Berpindah ke paket perjalanan?** Lihat [eSIM untuk Amerika Serikat](/united-states-esim/) atau [eSIM untuk Eropa](/europe-esim/) begitu transfer Anda selesai.

👉 **Tidak yakin ponsel baru Anda mendukung eSIM?** Periksa **[daftar kompatibilitas lengkap](/compatibility/)** kami sebelum mulai.

👉 **Menguji eSIM perjalanan di perangkat baru Anda?** Ambil **[uji coba eSIM Roami gratis](/free-esim/)** untuk memastikan semuanya bekerja.

---

*Informasi berdasarkan dokumentasi resmi Apple dan Android, standar GSMA, dan panduan operator per September 2026. Fitur dan dukungan operator dapat berubah.*
## Sumber

- [GSMA — spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
