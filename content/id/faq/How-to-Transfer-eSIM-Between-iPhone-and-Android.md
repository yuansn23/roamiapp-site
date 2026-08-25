---
title: "Cara Transfer eSIM Antara iPhone dan Android (QR)"
h1_title: "Cara Mentransfer eSIM Antara iPhone dan Android"
description: "Pindahkan eSIM Anda antara iPhone dan Android dengan aplikasi operator atau kode QR yang diterbitkan ulang. Panduan langkah demi langkah untuk kedua arah, plus perbaikan untuk kesalahan transfer umum."
keywords: ["transfer eSIM lintas platform", "kesalahan transfer eSIM", "eSIM iOS 18", "kunci operator eSIM", "kode konfirmasi eSIM", "eSIM tidak ada layanan", "pengaturan APN eSIM", "pemecahan masalah eSIM", "aktivasi eSIM gagal", "transfer eSIM antara iPhone dan Android", "tidak bisa transfer eSIM ke iPhone baru", "transfer eSIM Orange"]
date: '2026-08-24T00:00:00+00:00'
lastmod: 2026-08-24T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Pemecahan Masalah", "Pengaturan Perjalanan"]
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
    - name: "eSIM AS"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM Jerman"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Eropa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Turki"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Jepang"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM Cina"
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
    - name: "eSIM Inggris"
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
    - question: "Bagaimana cara mengaktifkan eSIM di iPhone (Semua Model)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Daftar Kompatibilitas eSIM Terbaru"
      url: "/compatibility/"
---


> **Catatan Editor:** Roami adalah merek di balik panduan ini. Semua informasi transfer operator didasarkan pada dokumentasi resmi operator dan pengujian perangkat tim kami pada tahun 2026. Transfer eSIM lintas platform masih diluncurkan secara global – kami fokus pada metode yang benar-benar berfungsi saat ini.

## Transfer eSIM – Jawaban Cepat 10 Detik

**Temukan skenario Anda di bawah dan langsung ke metode yang tepat.**

| Skenario Anda | Bisakah Anda Transfer? | Metode Terbaik | Ke Mana Pergi |
| :--- | :--- | :--- | :--- |
| **iPhone → iPhone baru** | ✅ Ya (selalu) | Transfer Cepat Apple | [Transfer Intra-Platform](#transfer-esim-ke-iphone-atau-samsung-baru--transfer-esim-intra-platform) |
| **Samsung → Samsung baru** | ✅ Ya (biasanya) | Samsung Smart Switch | [Transfer Intra-Platform](#transfer-esim-ke-iphone-atau-samsung-baru--transfer-esim-intra-platform) |
| **Android → iPhone (operator mendukung transfer aplikasi)** | ✅ Ya | Aplikasi Operator | [Metode A](#metode-a-transfer-esim-dari-android-ke-iphone-aplikasi-operator) |
| **Android → iPhone (operator tidak mendukung aplikasi)** | ✅ Ya | Cadangan Kode QR | [Metode B](#metode-b-transfer-esim-dari-iphone-ke-android-kode-qr-operator) |
| **iPhone → Android (operator mendukung)** | ✅ Ya | Aplikasi Operator atau Kode QR | [Metode B](#metode-b-transfer-esim-dari-iphone-ke-android-kode-qr-operator) |
| **eSIM Perjalanan (Roami, Airalo, Holafly)** | ❌ Tidak | Beli paket baru di perangkat baru | [Mengapa eSIM perjalanan tidak bisa ditransfer](#mengapa-esim-perjalanan-tidak-bisa-ditransfer) |
| **Operator tidak mendukung transfer** | ✅ Ya (cadangan) | Hubungi operator untuk kode QR | [Metode Cadangan](#metode-cadangan-ketika-transfer-esim-lintas-platform-tidak-didukung) |

> **Aturan kunci:** Tidak ada **tombol transfer bawaan iOS-ke-Android** seperti yang ada untuk iPhone-ke-iPhone. Transfer lintas platform selalu **melalui operator Anda** – baik melalui aplikasi mereka atau dengan meminta kode QR baru. eSIM perjalanan **hanya untuk satu perangkat** – beli yang baru di ponsel baru Anda.

**Tidak bisa transfer?** Sebagian besar eSIM perjalanan (Roami, Airalo, Holafly) **hanya untuk satu perangkat** – Anda perlu membeli paket baru di ponsel baru Anda. Untuk eSIM operator lokal, cadangan kode QR selalu berfungsi.

> **Keterbatasan utama:** Tidak ada **transfer eSIM bawaan iOS-ke-Android** – Anda harus melalui operator Anda. Panduan ini memandu Anda melalui setiap metode yang didukung.

Untuk panduan lengkap pengaturan eSIM dasar, lihat **[Panduan Lengkap eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** kami. Untuk masalah lanjutan yang tidak tercakup di sini, **[Panduan Pemecahan Masalah Mendalam eSIM (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/)** kami memiliki lebih banyak solusi.


## Alur Keputusan Cepat – Metode Transfer eSIM Mana yang Harus Anda Gunakan?

| Situasi Anda | Metode Terbaik | Waktu | Butuh Operator? |
| :--- | :--- | :--- | :--- |
| **Beralih iPhone ↔ iPhone** | Transfer Cepat Apple (Pengaturan > Seluler > Tambah eSIM > Transfer) | 2 menit | Tidak (Apple yang menangani) |
| **Beralih Android ↔ Android (Samsung ke Samsung, dll.)** | Transfer khusus merek (Samsung: Manajer SIM > Tambah eSIM > Transfer) | 2 menit | Tidak (merek yang menangani) |
| **Beralih iPhone ↔ Android (iOS 18 / Android 16+)** | Transfer aplikasi operator | 3-5 menit | Ya |
| **Beralih iPhone ↔ Android (OS lebih lama)** | Kode QR yang diterbitkan ulang oleh operator | 5-10 menit | Ya |
| **eSIM Perjalanan (Roami, Airalo, Holafly)** | ❌ Tidak bisa transfer – beli paket baru di perangkat baru | N/A | Tidak – penyedia tidak mengizinkan |
| **Operator Anda tidak mendukung transfer** | Cadangan kode QR (hubungi operator) | 10-20 menit | Ya |


## Perjalanan Transfer eSIM Lengkap – Dari "Saya Beralih Ponsel" hingga "Ini Berfungsi"

Berikut peta perjalanan langkah demi langkah untuk siapa pun yang memindahkan eSIM ke perangkat baru.

| Langkah | Apa yang Anda Pikirkan | Apa yang Harus Dilakukan | Di Mana Menemukannya |
| :--- | :--- | :--- | :--- |
| **1. Tentukan skenario Anda** | "Perpindahan jenis apa yang saya lakukan?" | Identifikasi: ekosistem yang sama (iOS→iOS / Android→Android) atau lintas platform (iOS↔Android)? | [Alur Keputusan Cepat di atas](#alur-keputusan-cepat--metode-transfer-esim-mana-yang-harus-anda-gunakan) |
| **2. Periksa versi OS** | "Apakah ponsel saya cukup diperbarui?" | iPhone harus iOS 18+, Android harus Android 16+ untuk transfer lintas platform asli. | Perbarui dulu jika tidak. |
| **3. Periksa kunci operator** | "Apakah ponsel saya terkunci ke operator?" | Pengaturan > Umum > Tentang > Kunci Operator harus mengatakan "Tidak ada batasan SIM." | [Prasyarat di bawah](#apa-yang-anda-perlukan-sebelum-memulai-transfer-esim) |
| **4. Periksa dukungan operator** | "Apakah operator saya mengizinkan ini?" | Buka aplikasi operator dan cari opsi transfer eSIM. Atau hubungi dan tanyakan. | [Bagian operator yang didukung di bawah](#operator-yang-didukung-untuk-transfer-esim-lintas-platform-terperinci) |
| **5. Lakukan transfer** | "Saatnya memindahkan nomor." | Ikuti langkah-langkah spesifik untuk skenario Anda. | [Metode A](#metode-a-transfer-esim-dari-android-ke-iphone-aplikasi-operator) atau [Metode B](#metode-b-transfer-esim-dari-iphone-ke-android-kode-qr-operator) |
| **6. Pengaturan pasca-transfer** | "Nomor saya sudah di ponsel baru – sekarang apa?" | Aktifkan ulang WhatsApp, iMessage, aplikasi 2FA, dan uji SMS. | [Bagian Setelah Transfer eSIM di bawah](#setelah-transfer-esim--migrasi-whatsapp-imessage-dan-2fa) |
| **7. Pemecahan masalah jika gagal** | "Tidak berhasil – sekarang apa?" | Periksa kesalahan, hapus profil lama, coba ulang, atau gunakan cadangan kode QR. | [Tabel pemecahan masalah di bawah](#pemecahan-masalah-mengapa-transfer-esim-saya-gagal) |


## Apa yang Anda Perlukan Sebelum Memulai Transfer eSIM

**Untuk kedua arah:**
- Kedua perangkat harus **tidak terkunci** (tanpa **kunci operator**). Untuk memeriksa di iPhone: `Pengaturan > Umum > Tentang` → `Kunci Operator` harus mengatakan "Tidak ada batasan SIM". **Ini adalah alasan #1 transfer gagal** – jika ponsel Anda terkunci, Anda tidak dapat mentransfer eSIM ke jaringan operator yang berbeda.
- Kedua perangkat memiliki **Bluetooth menyala**.
- Kedua perangkat terhubung ke **Wi‑Fi** (atau setidaknya satu memiliki koneksi data seluler yang berfungsi).
- eSIM yang ingin Anda transfer **aktif** di perangkat sumber (belum dihapus).
- Operator Anda **mendukung transfer lintas‑platform** (lihat daftar di bawah). Jika tidak, langsung ke bagian metode cadangan.
- **Profil eSIM** Anda tidak **kedaluwarsa** – beberapa profil memiliki tanggal berlaku terbatas.

**Untuk Android → iPhone:**
- iPhone harus pada **iOS 18 atau lebih baru**.
- Android harus pada **Android 16 atau lebih baru**.

**Untuk iPhone → Android:**
- iPhone harus pada **iOS 18 atau lebih baru**.
- Android harus pada **Android 16 atau lebih baru**.

> 🚨 **Peringatan Kritis – Jangan Hapus Sebelum Transfer:**
> **Jangan HAPUS eSIM dari perangkat lama Anda sebelum memulai transfer.** Jika Anda menghapus eSIM sumber terlebih dahulu, profil hilang dari perangkat Anda dan operator Anda mungkin tidak dapat mentransfernya ke perangkat baru. Anda harus menghubungi operator Anda untuk kode QR yang sepenuhnya baru – yang mungkin memakan waktu 24‑48 jam. Selalu inisiasi transfer dari perangkat baru terlebih dahulu, atau pertahankan eSIM lama tetap aktif sampai yang baru dikonfirmasi berfungsi.

> 🚨 Jika perangkat Anda pada OS yang lebih lama, opsi menu tidak akan muncul. Perbarui dulu. Jika Anda berurusan dengan **profil eSIM yang kedaluwarsa**, hubungi operator Anda untuk kode QR baru sebelum memulai transfer.

Halaman [Google Support – eSIM di Pixel](https://support.google.com/pixelphone/answer/7086887) menyediakan detail tambahan untuk pengguna Android yang bersiap mentransfer eSIM mereka.


## Mengapa eSIM Perjalanan Tidak Bisa Ditransfer?

Ini adalah pertanyaan #1 yang kami terima. Berikut alasannya:

| Alasan | Penjelasan |
| :--- | :--- |
| **Pengikatan EID** | Setiap profil eSIM terikat secara kriptografis ke **EID** (Pengidentifikasi eUICC) dari perangkat tempat ia diaktifkan. EID ponsel Anda unik – seperti nomor seri untuk perangkat keras eSIM Anda. (Anda dapat melihat EID Anda dengan menekan `*#06#` di sebagian besar ponsel.) |
| **Kode QR Sekali Pakai** | Kode QR eSIM perjalanan dirancang untuk **sekali pakai**. Setelah dipindai, kode QR dinonaktifkan di server operator. Ini adalah fitur keamanan untuk mencegah penipuan. |
| **Tidak Ada Akun Operator** | eSIM perjalanan dibeli sebagai produk mandiri – Anda tidak memiliki "akun operator" dengan layanan berkelanjutan. Tidak ada siapa pun untuk masuk dan meminta transfer. |
| **Dirancang untuk Kemudahan** | eSIM perjalanan mengorbankan kemampuan transfer demi kemudahan. Anda mendapatkan aktivasi instan tanpa verifikasi ID, tetapi konsekuensinya adalah profil terkunci ke satu perangkat. |

**Intinya:** Jika Anda menggunakan eSIM perjalanan (Roami, Airalo, Holafly, Nomad, dll.), **jangan buang waktu mencoba mentransfernya**. Itu tidak akan berhasil. Cukup beli paket baru di perangkat baru Anda. Biaya eSIM perjalanan baru biasanya lebih murah daripada waktu yang akan Anda habiskan untuk mencoba mentransfer profil yang tidak dapat ditransfer.

**Bagaimana dengan eSIM operator (pascabayar/prabayar)?**
eSIM operator berbeda. Anda memiliki akun dengan operator, dan mereka dapat menerbitkan ulang eSIM Anda ke perangkat baru karena mereka mengontrol profil di server mereka. Itu sebabnya eSIM operator dapat ditransfer, dan eSIM perjalanan tidak bisa.


## Perbandingan Metode Transfer eSIM – Mana yang Tepat untuk Anda?

| Fitur | Transfer Aplikasi Operator | Kode QR Operator | Transfer Asli (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Berfungsi lintas platform?** | ✅ Ya | ✅ Ya | ❌ Tidak (hanya ekosistem yang sama) |
| **Waktu yang dibutuhkan** | 3-5 menit | 5-10 menit | 1-2 menit |
| **Keterlibatan operator** | Swadaya melalui aplikasi | Harus menghubungi operator | Tidak ada |
| **Berfungsi saat bepergian?** | ✅ Ya (dengan Wi-Fi) | ✅ Ya (dengan Wi-Fi) | ✅ Ya |
| **Tingkat keberhasilan** | Tinggi (jika didukung) | Sangat Tinggi (selalu berhasil) | Sangat Tinggi |
| **Terbaik untuk** | Transfer cepat, operator yang didukung aplikasi | Operator apa pun, cadangan saat aplikasi gagal | Peningkatan perangkat ekosistem yang sama |
| **Biaya** | Biasanya gratis | Mungkin dikenakan biaya $0‑25 untuk penerbitan ulang kode QR | Gratis |


## Metode A: Transfer eSIM dari Android ke iPhone (Aplikasi Operator)

Ini adalah skenario paling umum – beralih dari Samsung, Pixel, atau Android lainnya ke iPhone baru. Cara paling andal untuk memindahkan nomor Anda adalah melalui aplikasi operator Anda.

### Langkah demi Langkah

**Sebelum memulai:**
- Instal aplikasi operator Anda di iPhone baru (atau siap untuk masuk di situs web operator).
- Ketahui PIN akun atau kredensial login Anda.
- **Jangan HAPUS eSIM dari Android Anda dulu.**

**Di iPhone Anda (target):**
1. Instal dan buka aplikasi operator Anda (misalnya, aplikasi T‑Mobile, Verizon, atau AT&T).
2. Masuk dan cari opsi seperti "Aktifkan eSIM", "Ubah perangkat", atau "Transfer ke perangkat baru".
3. Ikuti petunjuk untuk memasukkan **EID** dan **IMEI** iPhone baru Anda (ditampilkan di bawah `Pengaturan` → `Umum` → `Tentang`).
4. Operator mengirimkan profil eSIM Anda ke iPhone baru, atau membuat kode QR untuk Anda pindai.
5. Di iPhone, buka `Pengaturan` → `Seluler` → `Tambah eSIM` dan pindai kode QR jika ada yang dibuat.
6. Tunggu "Aktivasi selesai". Nomor Anda sekarang aktif di iPhone.
7. **Sekarang** Anda dapat menghapus eSIM dari Android Anda (Pengaturan > Koneksi > Manajer SIM > ketuk eSIM > Hapus).

**Tips iOS 18:** Jika Anda menggunakan iOS 18, alur "Tambah eSIM" telah didesain ulang dengan pemindai QR yang lebih menonjol dan penanganan kesalahan yang lebih baik. Anda akan melihat indikator kemajuan selama unduhan profil.

✅ **Selesai.** Nomor Anda sekarang aktif di iPhone. Jika operator Anda tidak menawarkan aplikasi, hubungi mereka untuk menerbitkan ulang eSIM Anda sebagai kode QR baru (lihat metode cadangan di bawah).

### Bagaimana jika transfer aplikasi tidak berhasil?

Gunakan **cadangan kode QR operator**:

- Hubungi operator Anda (chat, telepon, atau situs web).
- Beri tahu mereka bahwa Anda mengganti perangkat dan minta mereka untuk **menerbitkan ulang eSIM Anda sebagai kode QR baru**.
- Pindai kode QR baru di iPhone: `Pengaturan` → `Seluler` → `Tambah eSIM`.
- Selesaikan aktivasi.

Jika Anda melihat kesalahan **"unable to activate esim"** selama proses ini, periksa koneksi Wi‑Fi Anda dan coba lagi. Untuk bantuan lebih lanjut, lihat [panduan pemecahan masalah eSIM](/faq/esim-deep-troubleshooting-guide-2026/) kami.


## Metode B: Transfer eSIM dari iPhone ke Android (Kode QR Operator)

Tidak ada opsi "Transfer ke Android" bawaan di iPhone. Metode yang andal adalah meminta operator menerbitkan ulang eSIM Anda.

### Prasyarat
- Ponsel Android baru Anda **tidak terkunci**.
- Anda dapat menghubungi operator Anda (atau masuk ke aplikasi/situs web mereka).
- Android Anda pada **Android 16 atau lebih baru**.
- **Jangan HAPUS eSIM dari iPhone Anda dulu.**

### Langkah-langkah

**Hubungi operator Anda (atau gunakan aplikasi mereka):**
1. Beri tahu mereka bahwa Anda memindahkan eSIM dari iPhone ke ponsel Android.
2. Berikan **EID** dan **IMEI** perangkat Android baru (di bawah `Pengaturan` → `Tentang ponsel`).
3. Operator Anda menerbitkan ulang eSIM Anda sebagai kode QR baru (atau mendorongnya melalui aplikasi mereka).

**Di Android Anda (target):**
1. Buka `Pengaturan` → `Jaringan & internet` → `SIM` → `Tambah eSIM` (penyebutan bervariasi menurut merek).
2. Pindai kode QR yang diberikan operator.
3. Ikuti petunjuk untuk mengunduh dan mengaktifkan profil.
4. Tunggu aktivasi selesai.
5. **Sekarang** Anda dapat menghapus eSIM dari iPhone Anda (Pengaturan > Seluler > ketuk eSIM > Hapus Paket Seluler).

✅ Selesai. Nomor Anda sekarang berada di ponsel Android.

> ⚠️ **Penting**: Setelah transfer selesai, eSIM **dihapus secara permanen** dari iPhone. Anda tidak dapat mengembalikannya tanpa operator Anda. Pastikan Anda memiliki jalur aktif lain atau Wi‑Fi sebelum mentransfer.

Untuk pemecahan masalah lebih dalam setelah transfer, lihat **[Panduan Pemecahan Masalah Mendalam eSIM](/faq/esim-deep-troubleshooting-guide-2026/)** kami.


## Transfer eSIM ke iPhone atau Samsung Baru – Transfer eSIM Intra-Platform

Meskipun transfer lintas platform adalah fokus panduan ini, banyak pengguna hanya ingin memindahkan eSIM dalam ekosistem yang sama. Begini caranya:

### iOS → iOS (iPhone ke iPhone)

**Transfer Cepat** bawaan Apple adalah metode termudah:

1. Selama pengaturan iPhone baru Anda, pilih "Transfer eSIM dari iPhone terdekat" saat diminta.
2. Jaga kedua ponsel tetap dekat dengan Bluetooth dan Wi‑Fi diaktifkan.
3. Konfirmasi transfer di iPhone lama Anda.
4. Tunggu 1‑2 menit hingga **unduhan profil eSIM** selesai di perangkat baru.

**Jika Transfer Cepat tidak berfungsi:** Buka Pengaturan > Seluler di iPhone baru Anda > Tambah eSIM > Transfer dari iPhone terdekat.

**Jika itu gagal:** Gunakan metode kode QR operator – hubungi operator Anda untuk kode QR baru.

### Android → Android (Samsung, Pixel, dll.)

Metode transfer Android bervariasi menurut merek:

**Samsung:** Pengaturan > Koneksi > Manajer SIM > Tambah eSIM > Transfer eSIM dari perangkat lama (ikuti petunjuk di layar). Berfungsi di Samsung Galaxy S21 dan lebih baru, seri Z Flip/Z Fold.

**Google Pixel:** Selama pengaturan, Anda mungkin diminta untuk mentransfer eSIM Anda. Atau, gunakan aplikasi operator atau minta kode QR baru.

**Android Umum:** Jika merek Anda tidak menawarkan transfer bawaan, gunakan metode cadangan kode QR operator.

### Perbandingan Transfer eSIM Lintas Platform vs. Intra-Platform

| Fitur | Lintas Platform | Intra-Platform |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Transfer Cepat berfungsi |
| **Android ↔ Android** | N/A | ✅ Metode khusus merek |
| **iOS ↔ Android** | ✅ Tercakup dalam panduan ini | ❌ Tidak didukung langsung |
| **Ketergantungan operator** | Lebih tinggi | Lebih rendah (Apple/Google yang menangani) |
| **Waktu yang dibutuhkan** | 3-10 menit | 1-2 menit |
| **Tingkat keberhasilan** | Bervariasi menurut operator | Umumnya tinggi |

Untuk pembahasan lebih dalam tentang perilaku eSIM khusus perangkat, lihat **[Panduan Lengkap eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** kami.


## Operator yang Didukung untuk Transfer eSIM Lintas Platform (Terperinci)

Transfer eSIM lintas platform masih baru, dan dukungan operator diluncurkan secara bertahap. Tidak ada daftar publik lengkap dari setiap operator yang didukung, dan ketersediaan sering berubah, jadi periksa situs web atau aplikasi operator Anda untuk status terkini.

### Operator yang Dikonfirmasi Mendukung (Per Agustus 2026)

| Operator | Wilayah | Metode Transfer | Batas Transfer | Biaya |
|---------|--------|-----------------|----------------|------|
| **Orange** | Prancis, Eropa | Aplikasi Orange → "Ruang eSIM Saya" → "Transfer ke perangkat baru" | 3x per tahun | Gratis |
| **SFR** | Prancis | Aplikasi SFR & Moi → "Kelola SIM saya" → "Transfer eSIM" | 5x per tahun | Gratis |
| **T-Mobile** | AS | Aplikasi T-Mobile → "Kelola eSIM" → "Transfer ke perangkat baru" | Tidak terbatas | Gratis |
| **Verizon** | AS | Aplikasi My Verizon → "Aktifkan atau ganti perangkat" | Tidak terbatas | Gratis |
| **AT&T** | AS | Aplikasi AT&T → "Aktifkan eSIM" | Bervariasi menurut paket | Gratis (pascabayar) |
| **EE** | Inggris | Aplikasi EE → "Paket" → "Transfer eSIM" | 3x per tahun | Gratis |
| **Deutsche Telekom** | Jerman | Aplikasi Telekom → "Transfer eSIM" | Tidak terbatas | Gratis |
| **Swisscom** | Swiss | Aplikasi Swisscom → "Transfer eSIM" | 3x per tahun | Gratis |
| **Bouygues** | Prancis | Penerbitan ulang kode QR (via portal pelanggan) | 3x per tahun | Gratis |
| **Free** | Prancis | Penerbitan ulang kode QR (via portal pelanggan) | 2x per tahun | Gratis |
| **Vodafone** | Inggris, Eropa | Aplikasi Vodafone → "Transfer eSIM" | Bervariasi menurut negara | Gratis (pascabayar) |
| **Google Fi** | AS, Global | Aplikasi Google Fi → "Aktifkan di perangkat ini" | Tidak terbatas | Gratis |

### eSIM Perjalanan (TIDAK Dapat Ditransfer)

| Penyedia | Dapat Ditransfer? | Yang Harus Dilakukan Sebagai Gantinya |
|----------|---------------|-------------------|
| **Roami** | ❌ Tidak | Beli paket baru di perangkat baru Anda |
| **Airalo** | ❌ Tidak | Beli paket baru di perangkat baru Anda |
| **Holafly** | ❌ Tidak | Beli paket baru di perangkat baru Anda |
| **Nomad** | ❌ Tidak | Beli paket baru di perangkat baru Anda |

**Bagaimana cara memeriksa apakah operator Anda mendukungnya?** Coba langkah-langkah di Metode A atau B. Jika operator Anda tidak menawarkan transfer berbasis aplikasi atau kode QR baru, gunakan metode cadangan di bawah.


## Metode Cadangan Ketika Transfer eSIM Lintas Platform Tidak Didukung

Jika operator Anda tidak ada dalam daftar, atau Anda melihat **kesalahan transfer eSIM**, gunakan salah satu alternatif ini:

### Opsi 1: Kode QR yang Diterbitkan Operator (Selalu Berfungsi)
1. Hubungi atau chat dengan operator Anda.
2. Beri tahu mereka: "Saya beralih dari Android ke iPhone (atau sebaliknya). Tolong terbitkan ulang eSIM saya sebagai kode QR baru."
3. Mereka akan mengirimkan kode QR atau tautan aktivasi melalui email.
4. Di perangkat baru, buka `Pengaturan` → `Seluler` → `Tambah eSIM` → `Gunakan kode QR` dan pindai.
5. eSIM perangkat lama akan berhenti berfungsi setelah yang baru aktif.

**Tips:** Beberapa operator mengenakan biaya kecil untuk penerbitan ulang eSIM ($0‑25). Tanyakan sebelum mereka melakukannya.

### Opsi 2: Masukan Manual SM-DP+ (Lanjutan)
Jika operator Anda memberi Anda **kode aktivasi** dan **alamat SM‑DP+** (alamat server yang mengirimkan profil eSIM ke ponsel Anda), Anda dapat menambahkan eSIM secara manual di perangkat baru:
1. `Pengaturan` → `Seluler` → `Tambah eSIM` → `Masukkan Detail Secara Manual`.
2. Tempelkan alamat SM‑DP+ dan kode aktivasi.
3. Ketuk `Berikutnya`. Ini berfungsi di iPhone dan Android.

### Opsi 3: Beli Paket Baru (Untuk eSIM Perjalanan)
Jika Anda menggunakan eSIM perjalanan (Roami, Airalo, Holafly), jangan buang waktu mencoba transfer – itu tidak akan berhasil. Cukup beli paket baru di perangkat baru Anda.

> **Tips transisi:** Cadangan kode QR adalah metode paling andal untuk operator apa pun, terlepas dari apakah mereka mendukung transfer berbasis aplikasi. Mungkin perlu panggilan telepon, tetapi selalu berhasil.


## Transfer eSIM atau Aktivasi Baru? – Matriks Keputusan

Terkadang membeli eSIM baru lebih cepat daripada mentransfer. Berikut kapan harus memilih yang mana:

| Faktor | Transfer | Aktivasi Baru | Mana yang Lebih Baik? |
|--------|----------|----------------|------------------|
| **Anda mempertahankan nomor ponsel yang sama** | ✅ Pertahankan nomor | ❌ Dapatkan nomor baru | Transfer menang |
| **Anda memiliki 2FA yang terikat ke nomor Anda** | ✅ Pertahankan akses | ❌ Risiko kehilangan akses | Transfer menang |
| **Operator Anda mengenakan biaya transfer** | Mungkin dikenakan biaya $0‑25 | $0 (Anda sudah membeli baru) | Tergantung biaya |
| **eSIM Perjalanan** | ❌ Tidak mungkin | ✅ Mudah | Aktivasi baru menang |
| **Anda terburu-buru (kurang dari 5 menit)** | ⚠️ Mungkin memakan 5‑10 menit | ✅ 2 menit pindai QR | Aktivasi baru menang |
| **Anda ingin mempertahankan paket/data yang ada** | ✅ Pertahankan data yang tidak terpakai | ❌ Kehilangan data yang tidak terpakai | Transfer menang |

**Rekomendasi:** Jika Anda mempertahankan paket operator yang sama dan ingin mempertahankan nomor ponsel Anda, transfer. Jika Anda menggunakan eSIM perjalanan atau terburu-buru, beli paket baru di perangkat baru Anda.


## Pemecahan Masalah: Mengapa Transfer eSIM Saya Gagal?

| Kesalahan / Gejala | Kemungkinan Penyebab | Perbaikan |
|----------------|-------------------|-----|
| "Transfer tidak tersedia – operator tidak didukung" | Operator Anda tidak mendukung transfer lintas platform. | Gunakan metode cadangan di atas. |
| Kode QR dipindai tetapi mengatakan "sesi kedaluwarsa" | Anda terlalu lama setelah membuat kode QR (kedaluwarsa). | Ulangi proses dan pindai segera. |
| Android mengatakan "Pemasangan gagal" | Izin Bluetooth atau jaringan lokal diblokir. | Di iPhone: `Pengaturan > Privasi & Keamanan > Jaringan Lokal` – pastikan `Pengaturan` diaktifkan. Di Android: matikan "Pemindaian keamanan Wi‑Fi" (biasanya di bawah pengaturan lanjutan Wi‑Fi). |
| Transfer dimulai tetapi berhenti di 50% | Sinyal Wi‑Fi atau seluler lemah. | Pindahkan kedua ponsel lebih dekat ke router. Matikan VPN di kedua perangkat. |
| **"eSIM sudah terikat ke perangkat lain"** | Profil tidak dirilis dengan benar dari perangkat lama. | Di perangkat lama, buka `Pengaturan > Seluler` dan hapus `Hapus eSIM` secara manual (jika masih terlihat). Kemudian tunggu 5 menit dan coba lagi. Jika masih gagal, hubungi operator untuk rilis profil. |
| iPhone meminta **kode konfirmasi** setelah pemindaian | Profil eSIM memiliki **kode konfirmasi eSIM** wajib (jarang). | Cari kode di email operator (sering 4–8 digit). Jika tidak ditemukan, tanyakan pada operator. |
| Tombol samping klik dua kali tidak melakukan apa pun (iPhone → Android) | Otentikasi biometrik tidak diatur atau dinonaktifkan. | Atur Face ID / Touch ID, atau nonaktifkan sementara "Perlu Perhatian" untuk Face ID. |
| **eSIM tidak ada layanan** setelah transfer | Pengaturan APN tidak dikonfigurasi. | Konfigurasi APN secara manual (lihat tabel di bawah). |
| **Profil eSIM kedaluwarsa** | Profil memiliki tanggal berlaku terbatas. | Hubungi operator Anda untuk kode QR baru. |
| **Tidak ada opsi "Tambah eSIM" di iPhone** | iPhone terkunci operator atau pada iOS lebih lama. | Periksa kunci operator di Pengaturan > Umum > Tentang. Perbarui ke iOS 18. |
| **"SIM tidak didukung" di perangkat baru** | Perangkat baru terkunci operator ke operator yang berbeda. | Periksa Kunci Operator – harus mengatakan "Tidak ada batasan SIM." |
| **Batas transfer terlampaui** | Anda telah mentransfer eSIM ini terlalu sering (beberapa operator membatasi 3‑5 per tahun). | Hubungi dukungan operator untuk mengatur ulang batas atau mendapatkan eSIM baru. |
| **"Transfer eSIM gagal" di Samsung** | Samsung Smart Switch mungkin tidak mendukung profil operator tertentu. | Gunakan cadangan kode QR operator sebagai gantinya. |

### Konfigurasi APN Manual

Jika setelah **transfer eSIM** Anda mengalami **eSIM tidak ada layanan**, konfigurasi APN secara manual:

| Operator | APN | Nama Pengguna | Kata Sandi |
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
Kumpulkan ini sebelum menghubungi dukungan:
- IMEI dan EID perangkat sumber
- IMEI dan EID perangkat target
- Pesan kesalahan yang tepat (ambil tangkapan layar)
- Nomor akun atau nomor ponsel Anda


## Apa yang Terjadi pada eSIM Lama Setelah Transfer?

**Itu segera dinonaktifkan.**

Profil eSIM lama mungkin tetap terlihat di perangkat lama untuk sementara waktu. Anda dapat menghapusnya secara manual:
`Pengaturan > Seluler > ketuk eSIM lama > Hapus eSIM`.

> 💰 **Penagihan**: Operator Anda akan terus menagih Anda untuk paket tersebut. Transfer tidak membatalkan paket – itu hanya memindahkan SIM. Untuk membatalkan, Anda harus menghubungi operator secara terpisah.

Jika Anda khawatir tentang kesalahan **eSIM terikat ke perangkat lain**, selalu hapus profil lama dari perangkat sumber setelah transfer berhasil diselesaikan.

### Garis Waktu Transfer vs. Penghapusan

| Tindakan | Apa yang Terjadi | Kapan Melakukannya |
| :--- | :--- | :--- |
| **Transfer dimulai** | Operator mengirimkan profil ke perangkat baru | Sebelum menghapus eSIM lama |
| **eSIM baru diaktifkan** | Perangkat baru terhubung ke jaringan | Setelah aktivasi selesai |
| **eSIM lama dinonaktifkan** | Operator menonaktifkan profil lama | Otomatis – mungkin memakan waktu 1‑5 menit |
| **Hapus eSIM lama** | Menghapus profil tidak aktif dari perangkat lama | Setelah mengonfirmasi perangkat baru berfungsi |


## Setelah Transfer eSIM – Migrasi WhatsApp, iMessage, dan 2FA

Setelah berhasil mentransfer eSIM Anda, Anda perlu mengatur aplikasi perpesanan dan layanan otentikasi Anda di perangkat baru.

### WhatsApp (iPhone dan Android)

WhatsApp menggunakan nomor ponsel Anda untuk mengidentifikasi akun Anda. Setelah **transfer eSIM**:

1. Buka WhatsApp di perangkat baru Anda.
2. Masukkan nomor ponsel Anda (yang Anda transfer).
3. Anda akan menerima kode verifikasi melalui SMS atau panggilan otomatis ke nomor Anda.
4. Masukkan kode – obrolan Anda akan muncul kembali jika Anda mencadangkan sebelumnya.

**Tips:** Cadangkan obrolan Anda sebelum memulai transfer. Di iPhone: WhatsApp > Pengaturan > Obrolan > Cadangan Obrolan. Di Android: WhatsApp > Pengaturan > Obrolan > Cadangan.

**Masalah WhatsApp umum:** Jika Anda tidak menerima kode verifikasi SMS, coba opsi "Hubungi saya" – WhatsApp akan menelepon nomor Anda dan membacakan kode. Jika itu gagal, tunggu 5 menit dan coba lagi (jaringan operator mungkin masih menyesuaikan).

### iMessage dan FaceTime (khusus iPhone)

1. Buka `Pengaturan` → `Pesan` dan aktifkan `iMessage`.
2. Buka `Pengaturan` → `FaceTime` dan aktifkan `FaceTime`.
3. Tunggu 1‑2 menit untuk aktivasi. Jika mengatakan "Menunggu aktivasi", matikan dan nyalakan lagi.
4. Periksa nomor Anda dipilih: Pengaturan > Pesan > Kirim & Terima → pilih nomor eSIM Anda.

### Otentikasi Dua Faktor (2FA) dan Verifikasi SMS

Karena nomor ponsel Anda tidak berubah, kode 2FA berbasis SMS akan berfungsi normal. Namun, aplikasi autentikator berbasis aplikasi (Google Authenticator, Microsoft Authenticator, Authy) mungkin memerlukan pengaturan ulang:

- **Authy:** Token Anda dienkripsi dan dicadangkan ke cloud – cukup masuk di perangkat baru.
- **Google Authenticator:** Anda perlu mentransfer akun Anda secara individual atau menggunakan fitur "Transfer akun".
- **Microsoft Authenticator:** Gunakan fitur pencadangan untuk memulihkan di perangkat baru.
- **SMS 2FA:** Uji dengan meminta kode verifikasi dari bank atau penyedia email Anda untuk mengonfirmasi pengiriman SMS berfungsi.

### Aplikasi Bank dan Layanan Keuangan

Sebagian besar bank akan mendeteksi perubahan perangkat dan memerlukan otentikasi ulang. Siapkan kredensial login Anda dan perangkat token fisik apa pun.

Untuk bantuan lebih lanjut dengan migrasi aplikasi setelah **transfer eSIM**, lihat [panduan pengaturan eSIM](/faq/how-to-activate-an-esim/) kami.


## Praktik Terbaik untuk Menghindari Sakit Kepala Transfer eSIM

✅ **Sebelum mentransfer:**
- Periksa dukungan operator (coba menu – jika ada, itu didukung).
- Perbarui kedua ponsel ke OS terbaru (iOS 18 / Android 16).
- Isi daya kedua ponsel di atas 30%.
- Nonaktifkan VPN dan pemblokir iklan sementara.
- Verifikasi **profil eSIM** Anda tidak **kedaluwarsa**.
- Cadangkan WhatsApp dan aplikasi perpesanan lainnya.
- **Jangan HAPUS eSIM dari perangkat lama dulu.**

✅ **Selama transfer:**
- Jaga ponsel dalam jarak 10 cm (4 inci) satu sama lain.
- Jangan beralih aplikasi atau mengunci layar.
- Jangan matikan Bluetooth atau Wi‑Fi.
- Tunggu pesan konfirmasi – jangan anggap selesai.

✅ **Setelah transfer:**
- Uji panggilan dan data di perangkat baru.
- Hapus eSIM lama dari perangkat sumber untuk menghindari kebingungan.
- Biarkan Wi‑Fi perangkat lama menyala setidaknya selama satu jam – beberapa operator memerlukan jabat tangan terakhir.
- Aktifkan ulang WhatsApp, iMessage, dan aplikasi 2FA.
- Uji kode verifikasi SMS dari bank Anda.
- Atur pengingat untuk membatalkan paket lama jika Anda beralih operator sepenuhnya.


## Bepergian dan Mentransfer eSIM – Yang Perlu Anda Ketahui

Jika Anda bepergian ke luar negeri dan perlu mentransfer eSIM, berikut beberapa poin penting:

### Mentransfer eSIM Saat Bepergian
- Transfer lintas platform berfungsi **di seluruh dunia** selama operator Anda mendukungnya.
- Pastikan Anda memiliki koneksi Wi‑Fi yang stabil (hotel, kafe) sebelum memulai.
- Jika transfer gagal, cadangan kode QR operator adalah pilihan terbaik Anda.
- Periksa **pengaturan APN eSIM** setelah transfer – beberapa operator memerlukan konfigurasi manual.

### Operator Prancis dan Perjalanan
- **Orange** dan **SFR** mengizinkan transfer lintas platform di mana pun Anda berada.
- **Free** dan **Bouygues** memerlukan penerbitan ulang kode QR – lakukan ini sebelum Anda pergi.
- Untuk **eSIM perjalanan**, ingat bahwa mereka umumnya **tidak dapat ditransfer** – beli paket baru di perangkat baru Anda.

### Cara Menghubungi Operator Saat di Luar Negeri

| Operator | Metode Kontak Dukungan | Catatan |
|---------|------------------------|-------|
| **Orange** | Chat aplikasi Orange, dukungan WhatsApp, atau telepon | 24/7 di sebagian besar wilayah |
| **SFR** | Chat aplikasi SFR & Moi, telepon | Jam terbatas |
| **T-Mobile** | Chat aplikasi T‑Mobile, iMessage, telepon | Dukungan 24/7 di AS |
| **Verizon** | Chat aplikasi My Verizon, telepon | Dukungan 24/7 |
| **AT&T** | Chat aplikasi AT&T, telepon | Jam terbatas secara internasional |
| **EE** | Chat aplikasi EE, telepon | Dukungan 24/7 di Inggris |

**Tips:** Unduh aplikasi operator Anda dan simpan info kontak dukungan sebelum Anda bepergian. Beberapa operator memerlukan verifikasi SMS untuk masuk – jika Anda sedang dalam proses transfer, ini mungkin tidak berfungsi.

### Apa yang Harus Dilakukan Jika Transfer Gagal di Tengah Perjalanan

1. Hubungkan ke Wi‑Fi gratis terdekat (bandara, hotel, kafe).
2. Hubungi dukungan operator Anda melalui email atau aplikasi perpesanan.
3. Minta mereka untuk menerbitkan ulang eSIM Anda sebagai kode QR.
4. Pindai kode QR di perangkat baru Anda.

### Tips untuk Pelancong Global
- Selalu simpan salinan cadangan kode QR eSIM Anda.
- Jika Anda mengganti ponsel di tengah perjalanan, lebih suka transfer asli daripada kode QR jika memungkinkan.
- Untuk beberapa tujuan, pertimbangkan paket eSIM global yang mencakup beberapa negara.
- Simpan informasi kontak dukungan operator Anda sebelum Anda bepergian.

Untuk informasi lebih lanjut tentang menggunakan eSIM saat bepergian, lihat panduan [eSIM Perjalanan 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) kami.


## Pertanyaan yang Sering Diajukan

**Q1: Dapatkah saya mentransfer eSIM khusus data (seperti eSIM perjalanan)?**
Tidak. Sebagian besar eSIM perjalanan (Roami, Airalo, Holafly, Nomad, dll.) tidak mendukung transfer lintas platform. Mereka dirancang untuk diinstal sekali per perangkat. Anda perlu membeli paket baru di ponsel baru Anda. Lihat "Mengapa eSIM Perjalanan Tidak Bisa Ditransfer?" di atas untuk penjelasan teknis.

**Q2: Apakah transfer berfungsi antara iPhone 11 dan Samsung S24?**
Ya – selama keduanya memenuhi persyaratan OS. iPhone 11 mendukung iOS 18 (berjalan hingga iOS 18). Samsung S24 mendukung Android 16. Generasi perangkat keras tidak masalah; hanya versi OS yang penting.

**Q3: Aplikasi operator saya tidak menawarkan transfer eSIM. Kenapa?**
Tidak setiap operator mendukung transfer eSIM berbasis aplikasi. Jika operator Anda tidak menawarkannya, gunakan cadangan kode QR operator: hubungi operator Anda dan minta mereka menerbitkan ulang eSIM Anda sebagai kode QR baru. Beberapa operator mengenakan biaya kecil untuk ini ($0‑25).

**Q4: Apakah WhatsApp / iMessage / kode 2FA saya masih berfungsi setelah transfer?**
WhatsApp menggunakan nomor ponsel Anda – ia akan mendeteksi perubahan SIM dan mungkin meminta verifikasi ulang (biasanya otomatis). iMessage di iPhone menggunakan nomor eSIM dan harus aktif kembali dalam satu menit. Untuk 2FA, layanan yang mengirim SMS ke nomor Anda akan berfungsi normal – nomor tidak berubah. Lihat Bagian 10 untuk langkah migrasi mendetail.

**Q5: Dapatkah saya mentransfer eSIM yang sama bolak-balik beberapa kali?**
Ya, tetapi setiap transfer memerlukan proses yang sama. Beberapa operator membatasi berapa kali eSIM dapat ditransfer setiap tahun (misalnya, 3‑5 kali). Jika Anda mencapai batas, hubungi operator Anda untuk bantuan.

**Q6: Bagaimana dengan pengaturan dual‑SIM eSIM + SIM fisik?**
Transfer hanya memindahkan eSIM. SIM fisik tetap di perangkat sumber. Jika Anda ingin memindahkan keduanya, Anda perlu mentransfer eSIM (menggunakan panduan ini) dan secara fisik memindahkan kartu nano‑SIM ke perangkat baru. Untuk mengoptimalkan pengalaman dual‑SIM setelah transfer, lihat **[Dual eSIM Tidak Berfungsi? 12 Perbaikan untuk iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** kami.

**Q7: Bagaimana jika saya mendapatkan kesalahan "profil eSIM kedaluwarsa" selama transfer?**
Hubungi operator Anda untuk mendapatkan kode QR baru – penerbitan ulang biasanya gratis. Pastikan untuk mengaktifkan kode QR baru segera (dalam waktu 30 menit) untuk menghindari kedaluwarsa lagi.

**Q8: Mengapa kunci operator saya mencegah saya mentransfer?**
Jika ponsel Anda dalam **kunci operator**, Anda hanya dapat mentransfer eSIM ke perangkat dari operator yang sama. Hubungi operator Anda untuk membuka kunci perangkat sebelum transfer. Di iPhone: Pengaturan > Umum > Tentang > Kunci Operator harus mengatakan "Tidak ada batasan SIM."

**Q9: Dapatkah saya mentransfer eSIM Orange ke perangkat non-Orange?**
Ya, jika perangkat Anda tidak terkunci dan paket Orange Anda mengizinkannya. **Transfer eSIM Orange** didukung melalui aplikasi Orange atau transfer asli. Orange mengizinkan hingga 3 transfer per tahun.

**Q10: Apakah transfer berfungsi dengan eSIM Free?**
Tidak – Free tidak mendukung transfer lintas platform. Gunakan metode cadangan kode QR dari portal pelanggan Free. Free mengizinkan hingga 2 transfer per tahun.

**Q11: Apa itu kode konfirmasi eSIM dan di mana saya menemukannya?**
Beberapa profil eSIM memiliki **kode konfirmasi eSIM** wajib – biasanya 4‑8 digit. Cari di email operator atau instruksi aktivasi. Jika tidak ditemukan, tanyakan pada operator Anda.

**Q12: Apa arti "eSIM tidak mentransfer ke ponsel baru"?**
Ini biasanya berarti operator Anda tidak mendukung transfer, kode QR kedaluwarsa, eSIM lama masih aktif, atau perangkat baru terkunci operator. Hapus eSIM lama terlebih dahulu (jika masih terlihat), lalu coba lagi. Lihat Bagian 7 untuk tabel pemecahan masalah lengkap.

**Q13: Bagaimana cara memperbaiki "aktivasi eSIM gagal" setelah transfer?**
Periksa koneksi Wi‑Fi Anda, mulai ulang kedua perangkat, dan coba lagi. Jika masih gagal, gunakan metode masukan manual dengan alamat SM‑DP+ dari email operator Anda. Untuk bantuan lebih lanjut, lihat [Panduan Pemecahan Masalah Mendalam eSIM](/faq/esim-deep-troubleshooting-guide-2026/) kami.

**Q14: Apakah mentransfer eSIM saya membatalkan paket saya?**
Tidak – mentransfer eSIM hanya memindahkan profil SIM ke perangkat baru. Paket Anda (dan penagihan) berlanjut seperti sebelumnya. Untuk membatalkan paket Anda, Anda harus menghubungi operator Anda secara terpisah.

**Q15: Dapatkah saya mentransfer eSIM jika saya sudah menghapusnya dari ponsel lama?**
Ya, tetapi lebih rumit. Jika Anda menghapus eSIM sebelum memulai transfer, hubungi operator Anda dan minta mereka menerbitkan ulang eSIM Anda sebagai kode QR baru. Mereka dapat melakukannya karena profil Anda masih ada di server mereka.

**Q16: Berapa biaya untuk menerbitkan ulang kode QR eSIM?**
Sebagian besar operator menerbitkan ulang eSIM secara gratis (terutama paket pascabayar). Beberapa operator prabayar atau MVNO mungkin mengenakan biaya kecil ($5‑25). Tanyakan sebelum Anda meminta penerbitan ulang.

**Q17: Dapatkah saya mentransfer eSIM Vodafone ke perangkat non-Vodafone?**
Ya, selama perangkat Anda tidak terkunci dan paket Vodafone Anda mengizinkan transfer eSIM. Vodafone mendukung transfer melalui aplikasi mereka di sebagian besar negara. Periksa aplikasi Vodafone untuk opsi "Transfer eSIM".

**Q18: Bagaimana jika saya mencapai batas transfer operator saya?**
Beberapa operator membatasi transfer hingga 3‑5 per tahun. Jika Anda mencapai batas, hubungi dukungan operator – mereka sering dapat mengatur ulang batas atau menerbitkan kode QR eSIM baru secara manual (melewati sistem transfer).

**Q19: Dapatkah saya mentransfer dua eSIM secara bersamaan (dual eSIM)?**
Ya, tetapi Anda harus mentransfernya **satu per satu**. Setiap profil eSIM independen dan harus ditransfer secara terpisah menggunakan proses yang sama. Jika Anda memiliki dua eSIM aktif di perangkat lama, transfer eSIM utama terlebih dahulu, lalu yang sekunder.

**Q20: Apa perbedaan antara transfer eSIM dan penerbitan ulang eSIM?**
Transfer memindahkan profil yang ada ke perangkat baru (mempertahankan nomor dan paket Anda). Penerbitan ulang membuat profil eSIM yang sepenuhnya baru untuk nomor yang sama – profil lama dinonaktifkan secara permanen. Penerbitan ulang adalah metode cadangan ketika transfer tidak didukung oleh operator Anda.

---

## Kesimpulan Akhir

Kemampuan untuk mentransfer eSIM antara iPhone dan Android tanpa campur tangan operator adalah **pengubah permainan tahun 2026**. Ini menghilangkan titik gesekan utama terakhir untuk beralih ekosistem. Selama operator Anda ada dalam daftar yang didukung dan kedua ponsel diperbarui, Anda dapat memindahkan nomor Anda dalam waktu kurang dari satu menit.

**Ingat**:
- Jika operator Anda tidak didukung, cadangan kode QR masih berfungsi – hanya perlu panggilan telepon.
- Untuk eSIM perjalanan, anggap sebagai sekali pakai; beli yang baru di setiap perangkat.
- **Jangan pernah menghapus eSIM lama sebelum memulai transfer** – ini adalah kesalahan paling umum.
- Periksa kunci operator sebelum memulai – "Tidak ada batasan SIM" diperlukan.
- Beberapa operator membatasi transfer per tahun – periksa sebelum memulai.

Jika Anda menemukan pesan **kesalahan transfer eSIM** yang persisten, **[Panduan Pemecahan Masalah Mendalam eSIM (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/)** kami mencakup solusi lanjutan.

👉 **Tidak yakin apakah ponsel baru Anda mendukung eSIM?** Periksa **[daftar kompatibilitas lengkap](/compatibility/)** kami sebelum memulai.

👉 **Menguji eSIM perjalanan di perangkat baru Anda?** Dapatkan **[uji coba eSIM Roami gratis](/free-esim/)** untuk mengonfirmasi semuanya berfungsi.

---

*Informasi berdasarkan dokumentasi resmi Apple dan Android, standar GSMA, dan panduan operator per Agustus 2026. Fitur dan dukungan operator dapat berubah.*
## Sumber

- [GSMA — Spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Dukungan Apple — eSIM di iPhone](https://support.apple.com/en-us/108072)
- [Dukungan Google — Atur eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Dukungan Google — eSIM Android](https://support.google.com/android/answer/11241215)