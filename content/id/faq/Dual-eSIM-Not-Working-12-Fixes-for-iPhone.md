---
title: "Dual eSIM Tidak Berfungsi? 12 Perbaikan iPhone"
h1_title: "Cara Memperbaiki Dual eSIM Tidak Berfungsi di iPhone: 12 Solusi"
description: "Dual eSIM tidak berfungsi? Perbaiki 12 masalah iPhone: routing panggilan, pengaturan VoLTE, boros baterai, dan pemeriksaan carrier lock untuk iPhone 16 dan iOS 18."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["dual eSIM not working", "iPhone dual SIM no service", "dual eSIM signal issue", "eSIM carrier lock", "dual eSIM troubleshooting", "dual eSIM activation failed", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "dual eSIM no service"]
date: 22026-09-15T00:00:00Z
lastmod: 22026-09-15T00:00:00Z
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
    - name: "Jerman"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Eropa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turki"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Jepang"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "Tiongkok"
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


> **Catatan Editor:** Dual eSIM yang menjatuhkan satu saluran hampir selalu karena carrier lock, APN yang salah konfigurasi, atau pengaturan dual-SIM — bukan paket yang mati. Setiap perbaikan di bawah mengikuti dokumentasi resmi Apple dan standar GSMA serta menyasar gejala tertentu. Kerjakan tabel diagnostik untuk menemukan perbaikan persis untuk error Anda.
> 
> **Poin Kunci:** VoLTE atau batasan paket adalah alasan paling umum sebuah saluran tidak bisa menelepon atau menerima panggilan. Masalah routing panggilan masuk sering diperbaiki dengan mematikan lalu menyalakan kembali Wi‑Fi Calling. iPhone bersifat dual standby, bukan dual active – "No Service" pada saluran lain saat menelepon adalah normal. Periksa Carrier Lock di Pengaturan (`No SIM restrictions`) jika Anda tidak bisa menambahkan eSIM kedua. Borosnya baterai dual eSIM dapat dikurangi dengan menonaktifkan 5G pada saluran bersinyal lebih lemah.

Sebagian besar masalah dual eSIM di iPhone bermula dari lima penyebab: carrier lock, batasan paket atau VoLTE, pengaturan Data Roaming atau saluran default, perilaku dual-standby biasa yang sekadar tampak seperti kerusakan, atau glitch iOS yang hilang dengan reset pengaturan. Cocokkan gejala Anda pada indeks di bawah dan terapkan perbaikan yang sesuai — sebagian besar selesai dalam waktu kurang dari lima menit.


## Cara Memperbaiki Dual eSIM yang Tidak Berfungsi

**Ponsel Anda punya masalah dual eSIM. Masalah yang mana?**

| Gejala Anda | Lompat ke Perbaikan |
|--------------|-------------|
| **eSIM kedua menampilkan "No Service"** tapi yang pertama berfungsi | [Perbaikan #2](#why-one-dual-esim-line-shows-no-service) |
| **Bisa menelepon tapi TIDAK BISA menerima panggilan** | [Perbaikan #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Saat menelepon, saluran lain tertulis "No Service"** | [Perbaikan #4](#one-line-showing-no-service-during-a-call-is-normal) – ini normal! |
| **Tidak bisa menambah eSIM kedua – error "Carrier lock"** | [Perbaikan #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **Baterai lebih cepat habis dengan dua saluran** | [Perbaikan #6](#how-to-reduce-dual-esim-battery-drain) |
| **SIM fisik tidak dikenali** | [Perbaikan #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **iPhone dari Tiongkok – tidak ada opsi eSIM sama sekali** | [Perbaikan #8](#dual-esim-in-china-hong-kong-and-macau) – keterbatasan perangkat keras |
| **Data jalan tapi tidak ada internet (masalah APN)** | [Perbaikan #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – konfigurasi APN |
| **eSIM terhapus tidak sengaja** | [FAQ #9](#frequently-asked-questions) – tergantung penyedia |
| **Tidak yakin – hal lain** | [Tabel penanganan masalah lengkap](#dual-esim-troubleshooting-table) |

> 💡 **Wawasan Kunci:** Jika Anda memakai **dua saluran dalam satu iPhone**, iPhone bersifat **dual standby, bukan dual active** – saat Anda menelepon, saluran lain akan sementara tertulis "No Service". Ini **perilaku normal** (lihat Perbaikan #4). Jangan buang waktu mencoba "memperbaikinya".

Jika masalah dual-SIM Anda bermula dari instalasi yang gagal, mulailah dengan [panduan aktivasi eSIM umum](/faq/how-to-activate-an-esim/), lalu kerjakan perbaikan di bawah — dan untuk pesan error apa pun yang tidak disebut halaman ini, [Panduan Penanganan Masalah eSIM Mendalam](/faq/esim-deep-troubleshooting-guide-2026/) membahas setiap kasus secara mendalam.


## Panduan Lengkap Penanganan Masalah Dual eSIM

Inilah jalur yang paling diikuti pengguna iPhone saat dual eSIM tidak berfungsi. Gunakan ini untuk melacak posisi Anda.

| Langkah | Apa yang Terjadi | Yang Harus Dilakukan | Di Mana Menemukannya |
| :--- | :--- | :--- | :--- |
| **1. Identifikasi gejala** | "eSIM kedua saya tanpa sinyal." / "Saya tidak bisa menerima panggilan." / "Baterai cepat habis." | Cocokkan gejala Anda dengan tabel Diagnosis Cepat di atas. | [Diagnosis Cepat 10 Detik](#dual-esim-quick-diagnostic-index) |
| **2. Periksa apakah ini perilaku normal** | "Saat menelepon, saluran lain saya menampilkan No Service." | Ini **normal** untuk iPhone dual standby. Langsung ke Perbaikan #4. | [Perbaikan #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Singkirkan carrier lock** | "Saya tidak bisa menambahkan eSIM kedua sama sekali." | Periksa Carrier Lock di Pengaturan. Harus tertulis "No SIM restrictions." | [Perbaikan #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Terapkan perbaikannya** | Ikuti perbaikan spesifik untuk gejala Anda. | Salah satu dari 12 perbaikan di bawah akan menyelesaikan masalah Anda. | [Perbaikan #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. Masih tidak berfungsi?** | "Tidak ada perbaikan yang berhasil." | Gunakan opsi cadangan di tabel penanganan masalah. | [Tabel penanganan masalah](#dual-esim-troubleshooting-table) |


## Indeks Diagnostik Cepat Dual eSIM

| Gejala | Penyebab Paling Mungkin | Bagian Perbaikan |
|---------|-------------------|--------------|
| eSIM kedua menampilkan "No Service" tapi yang pertama berfungsi | Masalah VoLTE atau urutan saluran | [#2](#why-one-dual-esim-line-shows-no-service) |
| Satu nomor bisa menelepon tapi tidak bisa menerima panggilan | Ketidakcocokan routing panggilan masuk | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Saat menelepon, saluran lain tertulis "No Service" | iPhone memakai satu jaringan data pada satu waktu (normal) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| Tidak bisa menambah eSIM kedua – error "Carrier lock" | Perangkat terkunci ke operator pertama | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| Dual eSIM berfungsi tapi baterai lebih cepat habis | Kedua saluran aktif mencari jaringan | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + SIM fisik: SIM fisik tidak dikenali | Masalah baki SIM atau kartu tidak kompatibel | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| Data menampilkan bar sinyal tapi tidak ada internet | Pengaturan APN hilang atau salah | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## Apa Saja Opsi Dual eSIM Anda di iPhone?

Mulai dari iPhone XS, XR dan semua model lebih baru (termasuk iPhone 16), Apple mendukung dual eSIM (dua eSIM aktif bersamaan) di iPhone 13 dan seterusnya. Model non‑AS juga mendukung satu eSIM plus satu nano‑SIM fisik. Model dual‑SIM‑fisik Tiongkok daratan tidak memiliki dukungan eSIM kecuali iPhone 16.

Konfigurasi **dual eSIM** Anda bergantung pada model dan wilayah iPhone:

| Konfigurasi | Model yang Didukung | Maks Saluran Aktif |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 dan lebih baru (termasuk semua model iPhone 16) | 2 |
| **1 eSIM + 1 nano‑SIM fisik** | Semua iPhone dengan slot SIM (model non‑AS, dan model AS sebelum iPhone 14) | 2 |
| **1 SIM fisik saja** | iPhone lebih lama (pra‑XS) | 1 |
| **2 SIM fisik** | Model dengan slot dual‑SIM khusus Tiongkok daratan, Hong Kong, Makau (misalnya iPhone 16 versi Tiongkok) | 2 |

Untuk daftar lengkap iPhone yang kompatibel, [periksa kompatibilitas dual eSIM iPhone Anda](/compatibility/).


## Mengapa Satu Saluran Dual eSIM Menampilkan No Service

Jika salah satu saluran dual eSIM Anda bisa memakai data tapi tidak bisa menelepon atau menerima panggilan — **atau sama sekali menampilkan "No Service"** — penyebab paling umum pada 2026 adalah:

- **VoLTE / VoNR tidak diaktifkan** untuk saluran itu. Sebagian operator menonaktifkan voice-over-data roaming pada paket eSIM, sehingga saluran itu hanya data. (Cara cek sederhana: jika Anda bisa memakai data tapi tidak bisa menelepon, kemungkinan besar ini masalahnya.)
- **Urutan saluran**. iOS merutekan suara ke *saluran suara default* Anda; saluran sekunder yang disetel data saja tidak bisa menelepon atau menerima panggilan.
- **Paketnya tidak menyertakan telepon**. Beberapa eSIM perjalanan memang data saja dan tidak punya layanan suara sama sekali. Jika begitu, Anda akan melihat bar sinyal tapi panggilan akan gagal.

> **Catatan:** Jaringan 3G/CDMA lama telah dipensiunkan di AS dan Jepang. Verizon dan US Cellular mematikan CDMA pada 2022-2024, dan au/KDDI mengakhiri 3G pada 2022. Pada 2026, saluran dengan "tanpa layanan suara" hampir selalu masalah VoLTE, paket, atau urutan saluran - bukan CDMA.

### Perbaikan
- **Setel saluran yang bermasalah sebagai saluran suara default Anda**: `Pengaturan > Seluler > Default Voice Line`.
- **Aktifkan VoLTE**: `Pengaturan > Seluler > [saluran] > Voice & Data`, lalu pilih LTE atau 5G (VoLTE/VoNR).
- **Pastikan paketnya menyertakan telepon**. Jika itu eSIM perjalanan data saja, pertahankan saluran rumah Anda sebagai saluran suara dan gunakan eSIM hanya untuk data.
- **Hubungi operator Anda** untuk memastikan voice-over-LTE/5G diaktifkan untuk nomor Anda saat roaming.

Untuk perbandingan lebih dalam jaringan operator AS, lihat **perbandingan jaringan operator AS** di [panduan paket eSIM AS](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/).


## Saluran Dual eSIM yang Tidak Bisa Menerima Panggilan

**Gejala**: Saluran A berfungsi baik. Saluran B bisa menelepon keluar, tapi panggilan masuk ke B langsung ke voicemail atau berbunyi sebagai "tidak tersedia".

**Penyebab utama**: Ketidakcocokan routing panggilan jaringan. Saat Saluran B baru saja beralih antara 5G dan LTE, atau memakai Wi-Fi Calling, jaringan operator masih bisa mencoba merutekan panggilan masuk melalui jalur yang salah.

**Analogi:** Bayangkan operator memiliki buku alamat lama yang masih mencantumkan ponsel Anda di rumah sebelumnya. Saat seseorang menelepon, mereka pergi ke tempat yang salah. Menyalakan-mematikan Wi‑Fi Calling memperbarui buku alamat itu.

### Perbaikan Cepat di Ponsel Anda
1. Matikan **Wi‑Fi Calling** sementara: `Pengaturan > Seluler > Saluran B > Wi‑Fi Calling` → MATI.
2. Restart iPhone.
3. Nyalakan kembali Wi‑Fi Calling.

### Perbaikan Operator dengan Menelepon Dukungan
Minta operator Anda **mereset routing panggilan** atau **menyegarkan saluran** untuk nomor ini. Ini biasanya berlaku segera setelah operator memprovisi ulang saluran. Untuk masalah routing panggilan dan lainnya terkait panggilan, lihat **[Perbaikan 3 di atas](#a-dual-esim-line-that-cannot-receive-calls)**.

### Mencegah terulangnya
- Hindari beralih cepat antara 5G/LTE (pertahankan satu mode setidaknya beberapa jam).
- Jika Anda sering bepergian, biarkan **Data Roaming** MATI untuk saluran yang tidak butuh data.


## Satu Saluran Menampilkan No Service Saat Menelepon Itu Normal

**Gejala**: Anda sedang menelepon menggunakan Saluran A. Saat Anda memeriksa, Saluran B menampilkan "No Service".

**Penjelasan**: iPhone bersifat **dual standby, bukan dual active** (ini juga dikenal sebagai DSDS – Dual SIM Dual Standby). Hanya satu saluran yang bisa mempertahankan koneksi seluler pada satu waktu. Saat menelepon, saluran lain sementara tidak terjangkau. Begitu panggilan berakhir, kedua saluran tersambung kembali. Ini **bukan kegagalan dual eSIM** – itu memang desainnya.

### Yang Bisa Anda Lakukan
- **Aktifkan Wi‑Fi Calling di kedua saluran** – dengan itu saluran yang menganggur bisa memakai Wi‑Fi untuk menerima panggilan saat Anda sedang menelepon di saluran lain. [Dokumentasi dual standby](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) Apple menjelaskan ini lebih detail.
- **Aktifkan "Allow Cellular Data Switching"** – di `Pengaturan > Seluler > Cellular Data`. Ini memungkinkan saluran non-data memakai koneksi saluran data untuk Wi‑Fi Calling.

> 📌 Catatan: Sebagian operator tidak mendukung Wi‑Fi Calling bersamaan di kedua saluran. Periksa dengan operator Anda.


## Dual eSIM Tidak Berfungsi di Ponsel Terkunci Operator

Jika Anda tidak bisa menambahkan eSIM kedua atau SIM fisik:
- iPhone Anda mungkin **terkunci operator** ke operator pertama.
- Untuk memeriksa: `Pengaturan > Umum > Tentang` → gulir ke **Carrier Lock**. Harus tertulis "No SIM restrictions".

### Apa yang Harus Dilakukan Jika Ponsel Anda Terkunci
- Hubungi operator Anda untuk meminta pembukaan. Operator AS wajib membuka setelah perangkat lunas dibayar.
- Jika sudah dibuka tapi masih tidak berfungsi, Anda mungkin perlu mereset pengaturan jaringan: `Pengaturan > Umum > Transfer atau Reset iPhone > Reset > Reset Pengaturan Jaringan`. (Peringatan: ini melupakan kata sandi Wi‑Fi.)

Setelah dibuka, Anda juga bisa memindahkan eSIM Anda antara iPhone dan Android – lihat **[panduan Transfer eSIM Lintas Platform 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** kami untuk instruksi langkah demi langkah.


## Cara Mengurangi Borosnya Baterai Dual eSIM

Menjalankan **dual eSIM** atau bahkan eSIM + SIM fisik dapat meningkatkan konsumsi baterai karena kedua saluran tetap aktif tersambung ke jaringan. Berikut cara meminimalkan pemborosan sambil menjaga kedua saluran tetap aktif:

| Strategi | Efek |
|----------|--------|
| Setel saluran bersinyal lebih lemah ke **hanya LTE** (bukan 5G) | Penghematan sedang |
| Matikan **Data Roaming** pada saluran yang tidak dipakai untuk data | Menghemat pemindaian |
| Nonaktifkan **5G Standalone** (jika operator mengizinkan) | Sangat membantu |
| Gunakan **Low Data Mode** untuk aplikasi latar belakang di saluran sekunder | Penghematan kecil |
| Di area sinyal sangat lemah, nonaktifkan sementara saluran sekunder | Penghematan signifikan |

Untuk menonaktifkan saluran: `Pengaturan > Seluler` → ketuk saluran → matikan **Turn On This Line**. Jika Anda sering bepergian internasional, [coba uji coba eSIM gratis Roami](/free-esim/) sebagai alternatif yang hemat baterai.


## Konflik eSIM dan SIM Fisik serta Masalah Baki

**Gejala**: nano‑SIM Anda bekerja di ponsel lain tapi tidak di iPhone Anda. Atau, eSIM Anda bekerja baik tapi SIM fisik tidak dikenali saat keduanya terpasang.

**Penyebab umum**:
- iPhone **terkunci operator** ke jaringan yang berbeda.
- Baki SIM tidak terpasang penuh atau rusak.
- Kartu SIM **terlalu tua** (pra‑4G) atau bengkok.
- **Konflik SIM fisik**: Pada sebagian iPhone, memasukkan SIM fisik dapat sementara menonaktifkan slot eSIM jika perangkat terkunci operator.

**Perbaikan**:
1. Keluarkan baki, bersihkan kontak dengan kain lembut.
2. Masukkan kembali dengan kuat sampai berbunyi klik.
3. Restart iPhone.
4. Jika masih tidak dikenali, coba SIM di ponsel lain – jika bekerja, pembaca SIM iPhone Anda mungkin rusak.
5. Ganti kartu SIM di toko operator (gratis untuk sebagian besar paket pascabayar).

> **Jika eSIM Anda menghilang setelah memasukkan SIM fisik:** Sebagian iPhone terkunci operator menonaktifkan slot eSIM saat SIM fisik dari operator berbeda dimasukkan. Keluarkan SIM fisik, restart, dan eSIM Anda akan muncul kembali. Lalu hubungi operator Anda untuk membuka perangkat.

Jika Anda berencana beralih sepenuhnya ke eSIM, lihat **[panduan eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** kami untuk metode aktivasi.


## Dual eSIM di Tiongkok, Hong Kong, dan Makau

iPhone Tiongkok daratan (kecuali iPhone 16) memiliki dua slot nano‑SIM fisik dan **tanpa dukungan eSIM sama sekali**. Model Hong Kong dan Makau biasanya mendukung eSIM + SIM fisik. Jika Anda membeli iPhone dual‑SIM‑fisik Tiongkok daratan, Anda tidak bisa memasang eSIM apa pun, termasuk eSIM perjalanan internasional – ini keterbatasan perangkat keras.

Apple menjual model dual‑SIM‑fisik tertentu di **Tiongkok daratan**:
- iPhone 16, 17 Pro, 17 Pro Max: **dua slot nano‑SIM fisik** (tanpa eSIM kecuali Air).
- iPhone 16: **hanya eSIM** (global, termasuk Tiongkok).

Model **Hong Kong dan Makau**:
- Mendukung **eSIM + SIM fisik** (seperti model internasional) atau dual SIM fisik tergantung model.
- Selalu verifikasi sebelum membeli jika Anda berencana memakai paket perjalanan eSIM.

> ⚠️ **Penting**: Jika Anda membeli iPhone dual‑SIM‑fisik Tiongkok daratan, Anda **tidak bisa memasang eSIM apa pun** (termasuk eSIM perjalanan internasional) – kecuali iPhone 16. Ini keterbatasan perangkat keras, bukan pemblokiran perangkat lunak.


## Dual eSIM untuk Saluran Kerja dan Pribadi

Banyak pengguna mempertahankan **nomor kerja** (eSIM) dan **nomor pribadi** (eSIM kedua atau SIM fisik). Berikut cara menyiapkan konfigurasi **dual eSIM** Anda dengan rapi:

### Beri label saluran dengan jelas
`Pengaturan > Seluler` → ketuk saluran → `Cellular Plan Label` → pilih "Business" atau "Personal", atau buat label kustom.

### Pilih default suara & data
- **Default Voice Line**: Saluran mana yang dipakai saat Anda menelepon dari aplikasi Phone bawaan (Anda tetap bisa memilih per panggilan).
- **Cellular Data**: Saluran mana yang memakai data seluler. Nyalakan **Allow Cellular Data Switching** agar ponsel bisa sementara memakai data saluran lain jika yang utama kehilangan sinyal.

### Pisahkan kontak
- Tetapkan kontak ke saluran tertentu: Edit kontak → `Preferred Line` → pilih bisnis atau pribadi.

### Cegah roaming tak disengaja
- Matikan **Data Roaming** untuk saluran kerja jika tarif internasionalnya mahal.


## Tabel Penanganan Masalah Dual eSIM

| Masalah | Langkah Segera | Perbaikan Jangka Panjang | Jika Masih Tidak Berfungsi |
|---------|----------------|----------------|----------------------|
| eSIM kedua tidak pernah mendapat sinyal | Restart iPhone, lalu matikan/nyalakan saluran | Pastikan paket aktif dan saluran diaktifkan | Hubungi operator untuk memprovisi ulang eSIM |
| Panggilan langsung ke voicemail (tanpa berbunyi) | Nonaktifkan "Silence Unknown Callers" dan panggilan terusan | Hubungi operator untuk mereset routing panggilan | Reset pengaturan jaringan |
| Tidak bisa menerima SMS di saluran kedua | Kirim SMS uji dari saluran itu ke nomor mana pun | Pastikan saluran bukan data saja; operator mungkin perlu mengaktifkan SMS | Gunakan aplikasi operator untuk menyinkronkan ulang saluran |
| Dua eSIM tapi keduanya menampilkan "No Service" | Mode pesawat nyala/mati > periksa carrier lock | Pulihkan pengaturan jaringan | Periksa apakah operator mengalami gangguan di area Anda |
| Beralih saluran dan sekarang FaceTime/iMessage tidak mau aktif | Buka `Pengaturan > Pesan > Kirim & Terima` – pilih nomor secara manual | Keluar dari Apple ID lalu masuk kembali | Hubungi Apple Support |
| Data menampilkan sinyal tapi tidak ada internet | Periksa pengaturan APN (lihat Perbaikan #11) | Konfigurasikan APN secara manual | Hubungi penyedia eSIM untuk APN yang benar |
| eSIM terhapus tidak sengaja | Periksa apakah penyedia mengizinkan unduhan ulang | Hubungi operator untuk kode QR baru | eSIM perjalanan: beli paket baru |
| SIM fisik dimasukkan, eSIM menghilang | Ponsel terkunci operator menonaktifkan eSIM dengan SIM asing | Keluarkan SIM fisik, restart, eSIM muncul kembali | Hubungi operator untuk membuka perangkat |


## Cara Mengonfigurasi Pengaturan APN Jika eSIM Anda Tidak Punya Data

**Gejala**: eSIM Anda menampilkan bar sinyal penuh (atau "No Service") tapi Anda tidak punya koneksi internet – situs web tidak termuat, aplikasi bilang "tidak ada koneksi".

**Penyebab utama**: Profil eSIM terpasang dengan benar, tetapi pengaturan Access Point Name (APN) hilang atau salah. Sebagian penyedia eSIM mengonfigurasi APN otomatis; sebagian lainnya memerlukan entri manual.

### Cara mengonfigurasi APN di iPhone

1. Buka **Pengaturan > Seluler**.
2. Ketuk saluran eSIM yang tidak punya data.
3. Ketuk **Cellular Data Network** (jika Anda tidak melihat opsi ini, APN dikonfigurasi otomatis oleh operator Anda – lewati perbaikan ini).
4. Di bagian **Cellular Data**, isi kolom **APN**.
5. Biarkan **Username** dan **Password** kosong kecuali penyedia Anda menentukan sebaliknya.
6. Kembali, nyalakan/matikan Mode Pesawat, dan uji datanya.

### Nilai APN umum untuk eSIM perjalanan

| Penyedia | APN | Username | Password |
|----------|-----|----------|----------|
| **Roami** | internet | (kosong) | (kosong) |
| **Airalo** | globaldata | (kosong) | (kosong) |
| **Holafly** | hola | (kosong) | (kosong) |
| **Nomad** | nbdata | (kosong) | (kosong) |
| **T‑Mobile (AS)** | fast.t-mobile.com | (kosong) | (kosong) |
| **AT&T (AS)** | nxgen | (kosong) | (kosong) |
| **Verizon (AS)** | vzwinternet | (kosong) | (kosong) |
| **EE (Inggris)** | everywhere | (kosong) | (kosong) |
| **O2 (Inggris)** | mobile.o2.co.uk | web | web |
| **Vodafone (Inggris)** | internet | (kosong) | (kosong) |
| **Three (Inggris)** | three.co.uk | (kosong) | (kosong) |
| **Orange (Prancis)** | orange.fr | (kosong) | (kosong) |

> **Jika kolom APN berwarna abu-abu:** Operator Anda telah mengunci pengaturan APN. Ini umum pada eSIM operator pascabayar (Verizon, T‑Mobile, AT&T). Hubungi operator Anda untuk bantuan – Anda tidak bisa mengubahnya secara manual.

> **Jika APN benar tapi tetap tanpa data:** Restart iPhone Anda, nyalakan/matikan Mode Pesawat, atau periksa apakah Data Roaming diaktifkan (Pengaturan > Seluler > [saluran] > Data Roaming NYALA).


## Tips Pro Terakhir untuk Pengguna Dual eSIM

- **Beri label saluran Anda** segera setelah penyiapan – ini menghemat kebingungan tanpa akhir.
- **Setel nada dering berbeda** untuk tiap saluran: `Pengaturan > Suara & Haptik > Nada Dering` → gulir ke bawah, Anda bisa menetapkan per saluran.
- **Gunakan otomatisasi Shortcuts** untuk mengubah saluran suara default berdasarkan waktu (misalnya, jam kerja = saluran bisnis; malam = pribadi).
- **Sebelum menjual perangkat Anda**: Buka `Pengaturan > Seluler`, hapus **semua** eSIM, dan keluarkan SIM fisiknya. Lalu hapus semua konten dan pengaturan. Untuk panduan detail menghapus eSIM dan membatalkan paket, lihat **[Perbaikan #15 di panduan penanganan masalah kami](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)**.


## Pertanyaan yang Sering Diajukan

**Q1: Bisakah saya memakai dua eSIM dari operator yang sama?**  
Ya, selama operator Anda mengizinkan beberapa profil eSIM dalam satu akun. Misalnya, T‑Mobile US mendukung hingga dua eSIM di iPhone yang sama.

**Q2: Apakah kedua saluran mendukung 5G bersamaan?**  
Ya, di iPhone 13 dan lebih baru (termasuk iPhone 16), kedua saluran bisa berada di 5G (dual 5G standby). Namun, hanya satu saluran yang bisa memakai data 5G pada satu waktu; yang lain memakai 5G untuk fallback suara (VoNR).

**Q3: Saluran kedua saya bekerja tapi yang pertama berhenti bekerja setelah menambahkannya – apa yang terjadi?**  
Anda mungkin tidak sengaja menukar pengaturan saluran utama. Buka `Pengaturan > Seluler > Default Voice Line` dan setel kembali.

**Q4: Apakah dual eSIM menguras baterai lebih banyak daripada eSIM + SIM fisik?**  
Umumnya, dual eSIM mengonsumsi daya sedikit lebih sedikit karena tidak ada pembaca kartu fisik. Tetapi perbedaannya dapat diabaikan (dalam rentang 2‑3%).

**Q5: Saya sedang bepergian – bisakah saya memakai eSIM lokal untuk data dan mempertahankan eSIM rumah untuk panggilan?**  
Ya, praktik terbaik:  
- Setel eSIM lokal sebagai saluran **Cellular Data**.  
- Pertahankan eSIM rumah sebagai **Default Voice Line**.  
- Matikan **Data Roaming** pada eSIM rumah untuk menghindari biaya besar.  
- Nyalakan **Allow Cellular Data Switching** agar saluran rumah bisa memakai data eSIM lokal untuk Wi‑Fi Calling & MMS.

Jika Anda sering beralih perangkat saat bepergian, **[panduan transfer eSIM lintas platform](/faq/how-to-transfer-esim-between-iphone-and-android/)** akan membantu Anda memindahkan nomor dengan mulus.

**Q6: Mengapa eSIM kedua kadang menghilang setelah pembaruan iOS?**  
Bug langka. Buka `Pengaturan > Seluler` → jika salurannya hilang tapi masih muncul di "Available SIMs", ketuk dan aktifkan kembali. Jika tidak, hubungi operator untuk mendorong ulang profilnya.

**Q7: Bisakah saya memakai pengaturan dual‑SIM dengan Apple Watch?**  
Ya. Apple Watch bisa mencerminkan **satu** saluran iPhone. Pilih saluran mana yang Anda inginkan di jam tangan saat penyiapan. Perlu diketahui jam tangan tidak bisa memakai kedua saluran sekaligus – hanya mencerminkan saluran yang dipilih.

**Q8: Di mana saya bisa menemukan dokumentasi resmi Apple untuk dual eSIM?**  
Apple menyediakan dua sumber utama: [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) dan [Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086). Keduanya mencakup kompatibilitas dasar dan penyiapan.

**Q9: Bagaimana cara memulihkan eSIM yang terhapus?**  
Jika Anda menghapus profil eSIM, pemulihannya tergantung operator Anda. Untuk eSIM perjalanan (Roami, Airalo, dll.), penghapusan biasanya permanen – Anda perlu membeli paket baru. Untuk eSIM operator pascabayar (seperti Verizon, T‑Mobile, AT&T), hubungi operator Anda – mereka sering bisa menerbitkan kode QR baru. Selalu simpan cadangan email aktivasi asli dan kode QR Anda.

**Q10: Mengapa eSIM saya punya bar sinyal tapi tidak ada koneksi data?**
Ini hampir selalu masalah APN. Lihat Perbaikan #11 di atas untuk konfigurasi langkah demi langkah.

**Q11: Apa arti "eSIM confirmation code" dan di mana saya menemukannya?**  
Sebagian profil eSIM memerlukan kode konfirmasi (4‑8 digit) saat aktivasi. Cari di email operator Anda atau instruksi aktivasi. Jika tidak ditemukan, hubungi operator Anda.

**Q12: Bisakah saya punya dua eSIM aktif plus SIM fisik di iPhone?**  
Tidak. iPhone mendukung maksimum **dua saluran aktif** pada satu waktu – baik dua eSIM ATAU satu eSIM + satu SIM fisik. Anda tidak bisa punya tiga saluran aktif bersamaan.

**Q13: Dual eSIM 5G saya tidak berfungsi di satu saluran – apa yang harus saya periksa?**  
Pertama, pastikan 5G diaktifkan untuk kedua saluran: Pengaturan > Seluler > [saluran] > Voice & Data > pilih 5G Auto atau 5G On. Jika satu saluran masih hanya menampilkan LTE, periksa dengan operator Anda – sebagian operator membatasi 5G hanya ke saluran data utama.

**Q14: Saya memasukkan SIM fisik dan eSIM saya menghilang – bagaimana cara mengembalikannya?**  
Ini perilaku yang dikenal pada iPhone terkunci operator. Keluarkan SIM fisik, restart iPhone Anda, dan eSIM akan muncul kembali di Pengaturan > Seluler. Lalu hubungi operator Anda untuk membuka perangkat sehingga keduanya bisa bekerja bersamaan.

👉 **Menyiapkan dual eSIM untuk perjalanan?** Jelajahi [paket eSIM untuk Amerika Serikat](/united-states-esim/) atau [eSIM untuk Jepang](/japan-esim/) — keduanya mendukung dual eSIM di iPhone modern.

---

*Berdasarkan dokumentasi resmi Apple, standar GSMA, dan pengujian operator per September 2026.*
## Sumber

- [GSMA — spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Apple Support — About eSIM on iPhone](https://support.apple.com/en-us/HT209044)
