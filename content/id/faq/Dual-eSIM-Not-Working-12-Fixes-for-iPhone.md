---
title: "Dual eSIM Tidak Berfungsi? 12 Perbaikan untuk iPhone"
h1_title: "Cara Memperbaiki Dual eSIM Tidak Berfungsi di iPhone: 12 Solusi"
description: "Dual eSIM tidak berfungsi? Perbaiki 12 masalah iPhone: routing panggilan masuk, pengaturan VoLTE, baterai boros, dan pemeriksaan kunci operator. Panduan langkah demi langkah untuk iPhone 16."
keywords: ["dual eSIM tidak berfungsi", "iPhone dual SIM tidak ada layanan", "masalah sinyal dual eSIM", "kunci operator eSIM", "pemecahan masalah eSIM", "aktivasi eSIM gagal", "iOS 18 eSIM", "pengaturan APN eSIM", "kode konfirmasi eSIM", "eSIM tidak ada layanan"]
date: '2026-08-24T00:00:00+00:00'
lastmod: 2026-08-24T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Pemecahan Masalah", "Pengaturan Perjalanan"]
toc: true

# Situs & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Terjemahan teks UI
ui_text:
  updated_on: "Diperbarui pada"
  min_read: "menit membaca"
  toc: "Daftar Isi"

breadcrumbs:
  home:
    text: "Beranda"
    url: "/"
  parent:
    text: "Pusat Bantuan"
    url: "/faq/"
    
# Sidebar: eSIM Populer
sidebar_popular:
  title: "eSIM Populer"
  item_suffix: "eSIM"
  items:
    - name: "eSIM AS"
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
    - name: "Cina"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Penawaran eSIM Gratis
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

# Sidebar: Pertanyaan Populer
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


> **Catatan Editor:** Roami adalah merek di balik panduan ini. Semua langkah pemecahan masalah didasarkan pada dokumentasi resmi Apple, standar GSMA, dan pengujian tim kami pada iOS 18. Kami fokus pada perbaikan dunia nyata yang benar-benar berhasil – bukan solusi teoretis.
> 
> **Kesimpulan Utama:** VoLTE atau batasan paket adalah alasan paling umum mengapa sebuah jalur tidak dapat melakukan atau menerima panggilan. Masalah routing panggilan masuk sering diperbaiki dengan mematikan dan menyalakan kembali Wi‑Fi Calling. iPhone adalah dual standby, bukan dual active – "Tidak Ada Layanan" pada jalur lain selama panggilan adalah hal yang normal. Periksa Kunci Operator di Pengaturan (`Tidak ada batasan SIM`) jika Anda tidak dapat menambahkan eSIM kedua. Baterai boros dual eSIM dapat dikurangi dengan menonaktifkan 5G pada jalur sinyal yang lebih lemah.


## Dual eSIM Tidak Berfungsi? Diagnosa Cepat 10 Detik

**Ponsel Anda memiliki masalah dual eSIM. Mana yang terjadi?**

| Gejala Anda | Langsung ke Perbaikan |
|--------------|-------------|
| **eSIM kedua menunjukkan "Tidak Ada Layanan"** tetapi yang pertama berfungsi | [Perbaikan #2](#2-dual-esim-why-one-line-shows-no-service-while-the-other-works) |
| **Dapat menelepon tetapi TIDAK dapat menerima panggilan** | [Perbaikan #3](#3-dual-esim-one-number-can-call-out-but-cannot-receive-incoming-calls) |
| **Selama panggilan, jalur lain mengatakan "Tidak Ada Layanan"** | [Perbaikan #4](#4-dual-esim-during-a-call-the-other-line-shows-no-service--this-is-normal) – ini normal! |
| **Tidak dapat menambahkan eSIM kedua – error "Kunci operator"** | [Perbaikan #5](#5-dual-esim-not-working-check-carrier-lock-first) |
| **Baterai lebih boros dengan dua jalur** | [Perbaikan #6](#6-dual-esim-battery-drain-how-to-reduce) |
| **SIM fisik tidak dikenali** | [Perbaikan #7](#7-esim--physical-sim-conflicts-and-tray-issues) |
| **iPhone dari China – tidak ada opsi eSIM sama sekali** | [Perbaikan #8](#8-special-regional-cases-china-hong-kong-macau) – keterbatasan perangkat keras |
| **Data berfungsi tetapi tidak ada internet (masalah APN)** | [Perbaikan #11](#11-how-to-configure-apn-settings-if-your-esim-has-no-data) – konfigurasi APN |
| **eSIM terhapus secara tidak sengaja** | [FAQ #9](#q9-how-do-i-recover-a-deleted-esim) – tergantung penyedia |
| **Tidak yakin – sesuatu yang lain** | [Tabel pemecahan masalah lengkap](#10-troubleshooting-table--dual-esim-scenarios) |

> 💡 **Wawasan Utama:** Jika Anda menggunakan **dua jalur di satu iPhone**, iPhone adalah **dual standby, bukan dual active** – saat Anda sedang menelepon, jalur lain akan sementara mengatakan "Tidak Ada Layanan". Ini adalah **perilaku normal** (lihat Perbaikan #4). Jangan buang waktu mencoba "memperbaikinya".

Untuk panduan lengkap tentang pengaturan eSIM dasar, lihat **[Panduan Lengkap iPhone 16 eSIM](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. Untuk masalah lanjutan yang tidak tercakup di sini, **[Panduan Pemecahan Masalah Mendalam eSIM (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/)** memiliki lebih banyak solusi.


## Perjalanan Pemecahan Masalah Dual eSIM Lengkap – Dari Gejala ke Perbaikan

Berikut jalur yang diikuti sebagian besar pengguna iPhone saat dual eSIM tidak berfungsi. Gunakan ini untuk melacak posisi Anda.

| Langkah | Apa yang Terjadi | Apa yang Harus Dilakukan | Di Mana Menemukannya |
| :--- | :--- | :--- | :--- |
| **1. Identifikasi gejala** | "eSIM kedua saya tidak ada sinyal." / "Saya tidak dapat menerima panggilan." / "Baterai cepat habis." | Cocokkan gejala Anda dengan tabel Diagnosa Cepat di atas. | [Diagnosa Cepat 10 Detik](#dual-esim-not-working-10second-quick-diagnosis) |
| **2. Periksa apakah itu perilaku normal** | "Selama panggilan, jalur lain saya menunjukkan Tidak Ada Layanan." | Ini **normal** untuk iPhone dual standby. Lewati ke Perbaikan #4. | [Perbaikan #4](#4-dual-esim-during-a-call-the-other-line-shows-no-service--this-is-normal) |
| **3. Singkirkan kunci operator** | "Saya tidak dapat menambahkan eSIM kedua sama sekali." | Periksa Kunci Operator di Pengaturan. Harus bertuliskan "Tidak ada batasan SIM." | [Perbaikan #5](#5-dual-esim-not-working-check-carrier-lock-first) |
| **4. Terapkan perbaikan** | Ikuti perbaikan khusus untuk gejala Anda. | Salah satu dari 12 perbaikan di bawah akan menyelesaikan masalah Anda. | [Perbaikan #1‑#12](#1-what-are-your-dual-esim-options-on-iphone) |
| **5. Masih tidak berfungsi?** | "Tidak ada perbaikan yang berhasil." | Gunakan opsi cadangan dalam tabel pemecahan masalah. | [Tabel pemecahan masalah](#10-troubleshooting-table--dual-esim-scenarios) |


## Indeks Diagnostik Cepat (Khusus Dual eSIM)

| Gejala | Kemungkinan Penyebab | Bagian Perbaikan |
|---------|-------------------|--------------|
| eSIM kedua menunjukkan "Tidak Ada Layanan" tetapi yang pertama berfungsi | VoLTE atau masalah urutan jalur | [#2](#2-dual-esim-why-one-line-shows-no-service-while-the-other-works) |
| Satu nomor dapat menelepon tetapi tidak dapat menerima panggilan | Ketidakcocokan routing panggilan masuk | [#3](#3-dual-esim-one-number-can-call-out-but-cannot-receive-incoming-calls) |
| Selama panggilan, jalur lain mengatakan "Tidak Ada Layanan" | iPhone hanya menggunakan satu jaringan data pada satu waktu (normal) | [#4](#4-dual-esim-during-a-call-the-other-line-shows-no-service--this-is-normal) |
| Tidak dapat menambahkan eSIM kedua – error "Kunci operator" | Perangkat terkunci ke operator pertama | [#5](#5-dual-esim-not-working-check-carrier-lock-first) |
| Dual eSIM berfungsi tetapi baterai lebih boros | Kedua jalur aktif mencari sinyal | [#6](#6-dual-esim-battery-drain-how-to-reduce) |
| eSIM + SIM fisik: SIM fisik tidak dikenali | Masalah baki SIM atau kartu tidak kompatibel | [#7](#7-esim--physical-sim-conflicts-and-tray-issues) |
| Data menunjukkan bilah sinyal tetapi tidak ada internet | Pengaturan APN hilang atau salah | [#11](#11-how-to-configure-apn-settings-if-your-esim-has-no-data) |


## 1. Apa Opsi Dual eSIM Anda di iPhone?

Mulai dari iPhone XS, XR dan semua model yang lebih baru (termasuk iPhone 16), Apple mendukung dual eSIM (dua eSIM aktif secara bersamaan) pada iPhone 13 dan yang lebih baru. Model non‑AS juga mendukung satu eSIM ditambah satu nano‑SIM fisik. Model dual‑physical‑SIM China daratan tidak memiliki dukungan eSIM kecuali iPhone 16.

Konfigurasi **dual eSIM** Anda tergantung pada model iPhone dan wilayah Anda:

| Konfigurasi | Model yang Didukung | Maks. Jalur Aktif |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 dan yang lebih baru (termasuk semua model iPhone 16) | 2 |
| **1 eSIM + 1 nano‑SIM fisik** | Semua iPhone dengan baki SIM (model non‑AS, dan model AS sebelum iPhone 14) | 2 |
| **Hanya 1 SIM fisik** | iPhone yang lebih lama (pra‑XS) | 1 |
| **2 SIM fisik** | Model baki dual‑SIM khusus China Daratan, Hong Kong, Makau (mis., versi China iPhone 16) | 2 |

Untuk daftar lengkap iPhone yang kompatibel, [periksa kompatibilitas dual eSIM iPhone Anda](/compatibility/).

> 📱 **iPhone 16 & seri iPhone 16 AS**: Tidak ada baki SIM fisik – hanya dual eSIM. Jika Anda mengalami masalah aktivasi pada model ini, periksa **[Panduan Pemecahan Masalah Mendalam eSIM (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/)** untuk perbaikan lanjutan.


## 2. Dual eSIM: Mengapa Satu Jalur Menunjukkan "Tidak Ada Layanan" Sementara Yang Lain Berfungsi

Jika salah satu jalur dual eSIM Anda dapat menggunakan data tetapi tidak dapat melakukan atau menerima panggilan — **atau menunjukkan "Tidak Ada Layanan" sepenuhnya** — penyebab paling umum di tahun 2026 adalah:

- **VoLTE / VoNR tidak diaktifkan** untuk jalur itu. Beberapa operator menonaktifkan voice-over-data roaming pada paket eSIM, yang membuat jalur tersebut hanya data. (Cara sederhana untuk memeriksa: jika Anda dapat menggunakan data tetapi tidak dapat menelepon, ini kemungkinan masalahnya.)
- **Urutan jalur**. iOS mengarahkan suara ke *jalur suara default* Anda; jalur sekunder yang diatur ke data-only tidak dapat melakukan atau menerima panggilan.
- **Paket tidak termasuk panggilan**. Beberapa eSIM perjalanan dirancang sebagai data-only dan tidak memiliki layanan suara sama sekali. Jika ini masalahnya, Anda akan melihat bilah sinyal tetapi upaya menelepon akan gagal.

> **Catatan:** Jaringan 3G/CDMA lama telah dinonaktifkan di AS dan Jepang. Verizon dan US Cellular menutup CDMA pada 2022-2024, dan au/KDDI mengakhiri 3G pada 2022. Pada tahun 2026, jalur dengan "tidak ada layanan untuk suara" hampir selalu merupakan masalah VoLTE, paket, atau urutan jalur - bukan CDMA.

### Perbaikan
- **Atur jalur yang terkena sebagai jalur suara default Anda**: `Pengaturan > Seluler > Jalur Suara Default`.
- **Nyalakan VoLTE**: `Pengaturan > Seluler > [jalur] > Suara & Data`, lalu pilih LTE atau 5G (VoLTE/VoNR).
- **Konfirmasi paket termasuk panggilan**. Jika itu adalah eSIM perjalanan data-only, pertahankan jalur rumah Anda sebagai jalur suara dan gunakan eSIM untuk data saja.
- **Hubungi operator Anda** untuk memverifikasi voice-over-LTE/5G diaktifkan untuk nomor Anda saat roaming.

Untuk perbandingan lebih dalam tentang jaringan operator AS, lihat **[perbandingan jaringan operator AS](/carriers/united-states-esim-carrier-guide/)** kami.


## 3. Dual eSIM: Satu Nomor Dapat Menelepon tetapi Tidak Dapat Menerima Panggilan Masuk

**Gejala**: Jalur A berfungsi dengan baik. Jalur B dapat melakukan panggilan keluar, tetapi panggilan masuk ke B langsung menuju kotak suara atau berdering sebagai "tidak tersedia".

**Penyebab**: Ketidakcocokan routing panggilan jaringan. Saat Jalur B baru saja beralih antara 5G dan LTE, atau menggunakan Wi‑Fi Calling, jaringan operator masih dapat mencoba merutekan panggilan masuk melalui jalur yang salah.

**Analogi:** Bayangkan operator memiliki buku alamat lama yang masih mencantumkan ponsel Anda di rumah sebelumnya. Saat seseorang menelepon, mereka pergi ke tempat yang salah. Mengaktifkan Wi‑Fi Calling memperbarui buku alamat.

### Perbaikan cepat (sisi pengguna)
1. Matikan **Wi‑Fi Calling** sementara: `Pengaturan > Seluler > Jalur B > Wi‑Fi Calling` → MATI.
2. Restart iPhone.
3. Nyalakan Wi‑Fi Calling kembali.

### Perbaikan sisi operator (hubungi dukungan)
Minta operator Anda untuk **mereset routing panggilan** atau **menyegarkan jalur** untuk nomor ini. Ini biasanya berlaku segera setelah operator memprovisikan ulang jalur. Untuk masalah routing panggilan dan masalah terkait panggilan lainnya, lihat **[Perbaikan 14 dalam panduan pemecahan masalah kami](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Mencegah terulang
- Hindari beralih dengan cepat antara 5G/LTE (pertahankan satu mode setidaknya selama beberapa jam).
- Jika Anda sering bepergian, pertahankan **Data Roaming** MATI untuk jalur yang tidak memerlukan data.


## 4. Dual eSIM: Selama Panggilan, Jalur Lain Menunjukkan "Tidak Ada Layanan" – Ini Normal

**Gejala**: Anda sedang menelepon menggunakan Jalur A. Saat Anda memeriksa, Jalur B menunjukkan "Tidak Ada Layanan".

**Penjelasan**: iPhone adalah **dual standby, bukan dual active** (ini juga dikenal sebagai DSDS – Dual SIM Dual Standby). Hanya satu jalur yang dapat mempertahankan koneksi seluler pada satu waktu. Saat sedang menelepon, jalur lain untuk sementara tidak dapat dihubungi. Segera setelah panggilan berakhir, kedua jalur terhubung kembali. Ini **bukan kegagalan dual eSIM** – ini memang dirancang seperti itu.

### Apa yang dapat Anda lakukan:
- **Aktifkan Wi‑Fi Calling pada kedua jalur** – maka jalur yang menganggur dapat menggunakan Wi‑Fi untuk menerima panggilan saat Anda sedang menggunakan jalur lain. Dokumentasi [dual standby Apple](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) menjelaskan ini lebih rinci.
- **Aktifkan "Izinkan Peralihan Data Seluler"** – di bawah `Pengaturan > Seluler > Data Seluler`. Ini memungkinkan jalur non-data menggunakan koneksi jalur data untuk Wi‑Fi Calling.

> 📌 Catatan: Beberapa operator tidak mendukung Wi‑Fi Calling secara bersamaan pada kedua jalur. Periksa dengan operator Anda.


## 5. Dual eSIM Tidak Berfungsi? Periksa Kunci Operator Terlebih Dahulu

Jika Anda tidak dapat menambahkan eSIM kedua atau SIM fisik:
- iPhone Anda mungkin **terkunci operator** ke operator pertama.
- Untuk memeriksa: `Pengaturan > Umum > Tentang` → gulir ke **Kunci Operator**. Harus bertuliskan "Tidak ada batasan SIM".

### Apa yang harus dilakukan jika terkunci:
- Hubungi operator Anda untuk meminta buka kunci. Operator AS harus membuka kunci setelah perangkat lunas.
- Jika sudah tidak terkunci tetapi masih tidak berfungsi, Anda mungkin perlu mereset pengaturan jaringan: `Pengaturan > Umum > Transfer atau Reset iPhone > Reset > Atur Ulang Pengaturan Jaringan`. (Peringatan: ini akan menghapus kata sandi Wi‑Fi.)

Setelah tidak terkunci, Anda juga dapat memindahkan eSIM antara iPhone dan Android – lihat panduan **[Transfer Lintas Platform eSIM 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** kami untuk petunjuk langkah demi langkah.


## 6. Baterai Boros Dual eSIM: Cara Mengurangi

Menjalankan **dual eSIM** atau bahkan eSIM + SIM fisik dapat meningkatkan konsumsi baterai karena kedua jalur tetap terhubung secara aktif ke jaringan. Berikut cara meminimalkan pemborosan sambil menjaga kedua jalur tetap aktif:

| Strategi | Efek |
|----------|--------|
| Atur jalur dengan sinyal lebih lemah ke **hanya LTE** (bukan 5G) | Penghematan sedang |
| Matikan **Data Roaming** pada jalur yang tidak digunakan untuk data | Menghemat pemindaian |
| Nonaktifkan **5G Standalone** (jika operator Anda mengizinkan) | Sangat membantu |
| Gunakan **Mode Data Rendah** untuk aplikasi latar belakang pada jalur sekunder | Penghematan kecil |
| Di area sinyal sangat rendah, nonaktifkan sementara jalur sekunder | Penghematan signifikan |

Untuk menonaktifkan jalur: `Pengaturan > Seluler` → ketuk jalur → matikan **Aktifkan Jalur Ini**. Jika Anda sering bepergian ke luar negeri, [coba uji coba gratis eSIM Roami](/free-esim/) sebagai alternatif hemat baterai.


## 7. Konflik eSIM + SIM Fisik dan Masalah Baki

**Gejala**: nano‑SIM Anda berfungsi di ponsel lain tetapi tidak di iPhone Anda. Atau, eSIM Anda berfungsi dengan baik tetapi SIM fisik tidak dikenali saat keduanya terpasang.

**Penyebab umum**:
- iPhone **terkunci operator** ke jaringan yang berbeda.
- Baki SIM tidak terpasang sepenuhnya atau rusak.
- Kartu SIM **terlalu tua** (pra‑4G) atau bengkok.
- **Konflik SIM fisik**: Pada beberapa iPhone, memasukkan SIM fisik dapat menonaktifkan sementara slot eSIM jika perangkat terkunci operator.

**Perbaikan**:
1. Lepaskan baki, bersihkan kontak dengan kain lembut.
2. Masukkan kembali dengan kuat hingga terdengar klik.
3. Restart iPhone.
4. Jika masih tidak dikenali, coba SIM di ponsel lain – jika berfungsi, pembaca SIM iPhone Anda mungkin rusak.
5. Ganti kartu SIM di toko operator (gratis untuk sebagian besar paket pascabayar).

> **Jika eSIM Anda menghilang setelah memasukkan SIM fisik:** Beberapa iPhone terkunci operator menonaktifkan slot eSIM saat SIM fisik dari operator yang berbeda dimasukkan. Lepaskan SIM fisik, restart, dan eSIM Anda akan muncul kembali. Kemudian hubungi operator Anda untuk membuka kunci perangkat.

Jika Anda berencana untuk beralih sepenuhnya ke eSIM, lihat **[panduan iPhone 16 eSIM](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** untuk metode aktivasi.


## 8. Kasus Regional Khusus: China, Hong Kong, Makau

iPhone China Daratan (kecuali iPhone 16) memiliki dua slot nano‑SIM fisik dan **tidak ada dukungan eSIM sama sekali**. Model Hong Kong dan Makau biasanya mendukung eSIM + SIM fisik. Jika Anda membeli iPhone dual‑physical‑SIM China daratan, Anda tidak dapat menginstal eSIM apa pun, termasuk eSIM perjalanan internasional – ini adalah keterbatasan perangkat keras.

Apple menjual model dual‑physical‑SIM khusus di **China Daratan**:
- iPhone 16, 17 Pro, 17 Pro Max: **dua slot nano‑SIM fisik** (tidak ada eSIM kecuali Air).
- iPhone 16: **hanya eSIM** (global, termasuk China).

**Model Hong Kong dan Makau**:
- Mendukung **eSIM + SIM fisik** (seperti model internasional) atau dual SIM fisik tergantung model.
- Selalu verifikasi sebelum membeli jika Anda berencana menggunakan paket eSIM perjalanan.

> ⚠️ **Penting**: Jika Anda membeli iPhone dual‑physical‑SIM China daratan, Anda **tidak dapat menginstal eSIM apa pun** (termasuk eSIM perjalanan internasional) – kecuali iPhone 16. Ini adalah keterbatasan perangkat keras, bukan blokir perangkat lunak.


## 9. Dual eSIM untuk Kerja & Pribadi: Praktik Terbaik

Banyak pengguna menyimpan **nomor kerja** (eSIM) dan **nomor pribadi** (eSIM kedua atau SIM fisik). Berikut cara mengatur konfigurasi **dual eSIM** Anda dengan rapi:

### Beri label jalur dengan jelas
`Pengaturan > Seluler` → ketuk jalur → `Label Paket Seluler` → pilih "Bisnis" atau "Pribadi", atau buat label khusus.

### Pilih suara & data default
- **Jalur Suara Default**: Jalur mana yang akan digunakan saat Anda menelepon dari aplikasi Telepon asli (Anda masih dapat memilih per panggilan).
- **Data Seluler**: Jalur mana yang menggunakan data seluler. Nyalakan **Izinkan Peralihan Data Seluler** sehingga ponsel dapat sementara menggunakan data jalur lain jika jalur utama kehilangan sinyal.

### Pisahkan kontak
- Tetapkan kontak ke jalur tertentu: Edit kontak → `Jalur Pilihan` → pilih bisnis atau pribadi.

### Cegah roaming yang tidak disengaja
- Matikan **Data Roaming** untuk jalur kerja jika memiliki tarif internasional yang mahal.


## 10. Tabel Pemecahan Masalah – Skenario Dual eSIM

| Masalah | Langkah Segera | Perbaikan Jangka Panjang | Jika Masih Tidak Berfungsi |
|---------|----------------|----------------|----------------------|
| eSIM kedua tidak pernah mendapatkan sinyal | Restart iPhone, lalu matikan/nyalakan jalur | Konfirmasi paket aktif dan jalur diaktifkan | Hubungi operator untuk memprovisikan ulang eSIM |
| Panggilan langsung ke kotak suara (tidak berdering) | Nonaktifkan "Diamkan Penelepon Tidak Dikenal" dan penerusan panggilan | Hubungi operator untuk mereset routing panggilan | Atur ulang pengaturan jaringan |
| Tidak dapat menerima SMS di jalur kedua | Kirim SMS uji dari jalur itu ke nomor mana pun | Pastikan jalur tidak data-only; operator mungkin perlu mengaktifkan SMS | Gunakan aplikasi operator untuk menyinkronkan ulang jalur |
| Dua eSIM tetapi keduanya menunjukkan "Tidak Ada Layanan" | Mode Pesawat on/off > periksa kunci operator | Pulihkan pengaturan jaringan | Periksa apakah ada pemadaman operator di area Anda |
| Beralih jalur dan sekarang FaceTime/iMessage tidak mau aktif | Buka `Pengaturan > Pesan > Kirim & Terima` – pilih nomor secara manual | Keluar dari Apple ID dan masuk kembali | Hubungi Apple Support |
| Data menunjukkan sinyal tetapi tidak ada internet | Periksa pengaturan APN (lihat Perbaikan #11) | Konfigurasi APN secara manual | Hubungi penyedia eSIM untuk APN yang benar |
| eSIM terhapus secara tidak sengaja | Periksa apakah penyedia mengizinkan unduh ulang | Hubungi operator untuk kode QR baru | eSIM perjalanan: beli paket baru |
| SIM fisik dimasukkan, eSIM menghilang | Ponsel terkunci operator menonaktifkan eSIM dengan SIM asing | Lepaskan SIM fisik, restart, eSIM muncul kembali | Hubungi operator untuk membuka kunci perangkat |

Untuk masalah tambahan seperti "eSIM terikat ke perangkat lain" atau "error pemulihan 4013", lihat **[perpustakaan pemecahan masalah 16 kasus lengkap](/faq/esim-deep-troubleshooting-guide-2026/)** kami.


## 11. Cara Mengonfigurasi Pengaturan APN Jika eSIM Anda Tidak Memiliki Data

**Gejala**: eSIM Anda menunjukkan bilah sinyal penuh (atau "Tidak Ada Layanan") tetapi Anda tidak memiliki koneksi internet – situs web tidak mau dimuat, aplikasi mengatakan "tidak ada koneksi".

**Penyebab**: Profil eSIM terinstal dengan benar, tetapi pengaturan Access Point Name (APN) hilang atau salah. Beberapa penyedia eSIM mengonfigurasi APN secara otomatis; yang lain memerlukan entri manual.

### Cara mengonfigurasi APN di iPhone

1. Buka **Pengaturan > Seluler**.
2. Ketuk pada jalur eSIM yang tidak memiliki data.
3. Ketuk **Jaringan Data Seluler** (jika Anda tidak melihat opsi ini, APN dikonfigurasi otomatis oleh operator Anda – lewati perbaikan ini).
4. Di bagian **Data Seluler**, isi kolom **APN**.
5. Biarkan **Nama Pengguna** dan **Kata Sandi** kosong kecuali penyedia Anda menentukan lain.
6. Kembali, alihkan Mode Pesawat on/off, dan uji data.

### Nilai APN umum untuk eSIM perjalanan

| Penyedia | APN | Nama Pengguna | Kata Sandi |
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

> **Jika kolom APN berwarna abu-abu:** Operator Anda telah mengunci pengaturan APN. Ini umum terjadi pada eSIM operator pascabayar (Verizon, T‑Mobile, AT&T). Hubungi operator Anda untuk bantuan – Anda tidak dapat mengubahnya secara manual.

> **Jika APN benar tetapi masih tidak ada data:** Restart iPhone Anda, alihkan Mode Pesawat, atau periksa apakah Data Roaming diaktifkan (Pengaturan > Seluler > [jalur] > Data Roaming NYALA).


## 12. Tip Pro Akhir untuk Pengguna Dual eSIM

- **Beri label jalur Anda** segera setelah pengaturan – ini menghemat kebingungan yang tak berujung.
- **Atur nada dering berbeda** untuk setiap jalur: `Pengaturan > Suara & Haptik > Nada Dering` → gulir ke bawah, Anda dapat menetapkan per jalur.
- **Gunakan otomatisasi Pintasan** untuk mengubah jalur suara default berdasarkan waktu (mis., jam kerja = jalur bisnis; malam = jalur pribadi).
- **Sebelum menjual perangkat Anda**: Buka `Pengaturan > Seluler`, hapus **semua** eSIM, dan lepaskan SIM fisik. Kemudian hapus semua konten dan pengaturan. Untuk panduan terperinci tentang menghapus eSIM dan membatalkan paket, lihat **[Perbaikan #9 dalam panduan pemecahan masalah kami](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.


## Pertanyaan yang Sering Diajukan

**T1: Bisakah saya menggunakan dua eSIM dari operator yang sama?**  
Ya, selama operator Anda mengizinkan beberapa profil eSIM dalam satu akun. Misalnya, T‑Mobile AS mendukung hingga dua eSIM di iPhone yang sama. Untuk daftar lengkap model iPhone yang kompatibel, periksa **[tabel kompatibilitas iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**.

**T2: Akankah kedua jalur mendukung 5G secara bersamaan?**  
Ya, pada iPhone 13 dan yang lebih baru (termasuk iPhone 16), kedua jalur dapat berada di 5G (dual 5G standby). Namun, hanya satu jalur yang dapat menggunakan data 5G pada satu waktu; yang lain menggunakan 5G untuk fallback suara (VoNR).

**T3: Jalur kedua saya berfungsi tetapi yang pertama berhenti berfungsi setelah menambahkannya – apa yang terjadi?**  
Anda mungkin secara tidak sengaja menukar pengaturan jalur utama. Buka `Pengaturan > Seluler > Jalur Suara Default` dan atur kembali.

**T4: Apakah dual eSIM menguras baterai lebih banyak daripada eSIM + SIM fisik?**  
Umumnya, dual eSIM mengonsumsi daya sedikit lebih rendah karena tidak ada pembaca kartu fisik. Tetapi perbedaannya dapat diabaikan (dalam 2‑3%).

**T5: Saya bepergian – dapatkah saya menggunakan eSIM lokal untuk data dan tetap menggunakan eSIM rumah untuk panggilan?**  
Ya, praktik terbaik:  
- Atur eSIM lokal sebagai jalur **Data Seluler**.  
- Pertahankan eSIM rumah sebagai **Jalur Suara Default**.  
- Matikan **Data Roaming** pada eSIM rumah untuk menghindari biaya besar.  
- Nyalakan **Izinkan Peralihan Data Seluler** sehingga jalur rumah Anda dapat menggunakan data eSIM lokal untuk Wi‑Fi Calling & MMS.

Jika Anda sering berpindah antar perangkat saat bepergian, **[panduan transfer lintas platform eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)** akan membantu Anda memindahkan nomor dengan mulus.

**T6: Mengapa eSIM kedua terkadang menghilang setelah pembaruan iOS?**  
Bug langka. Buka `Pengaturan > Seluler` → jika jalur hilang tetapi masih muncul di bawah "SIM Tersedia", ketuk dan aktifkan ulang. Jika tidak, hubungi operator untuk mengirim ulang profil.

**T7: Bisakah saya menggunakan pengaturan dual‑SIM dengan Apple Watch?**  
Ya. Apple Watch dapat mencerminkan **satu** dari jalur iPhone. Pilih jalur mana yang Anda inginkan di jam tangan selama pengaturan. Perhatikan bahwa jam tangan tidak dapat menggunakan kedua jalur secara bersamaan – ini hanya mencerminkan jalur yang dipilih.

**T8: Di mana saya dapat menemukan dokumentasi resmi Apple untuk dual eSIM?**  
Apple menyediakan dua sumber utama: [Tentang eSIM di iPhone](https://support.apple.com/en-us/HT209044) dan [Gunakan Dual SIM dengan eSIM](https://support.apple.com/en-us/HT209086). Ini mencakup kompatibilitas dasar dan pengaturan.

**T9: Bagaimana cara memulihkan eSIM yang terhapus?**  
Jika Anda telah menghapus profil eSIM, pemulihan tergantung pada operator Anda. Untuk eSIM perjalanan (Roami, Airalo, dll.), penghapusan biasanya permanen – Anda perlu membeli paket baru. Untuk eSIM operator pascabayar (seperti Verizon, T‑Mobile, AT&T), hubungi operator Anda – mereka sering dapat menerbitkan ulang kode QR baru. Selalu simpan cadangan email aktivasi asli dan kode QR Anda.

**T10: Mengapa eSIM saya memiliki bilah sinyal tetapi tidak ada koneksi data?**  
Ini hampir selalu merupakan masalah APN. Lihat Perbaikan #11 di atas untuk konfigurasi langkah demi langkah.

**T11: Apa arti "kode konfirmasi eSIM" dan di mana saya menemukannya?**  
Beberapa profil eSIM memerlukan kode konfirmasi (4‑8 digit) selama aktivasi. Cari di email atau instruksi aktivasi operator Anda. Jika tidak ditemukan, hubungi operator Anda.

**T12: Bisakah saya memiliki dua eSIM aktif ditambah SIM fisik di iPhone?**  
Tidak. iPhone mendukung maksimum **dua jalur aktif** setiap saat – baik dua eSIM ATAU satu eSIM + satu SIM fisik. Anda tidak dapat memiliki tiga jalur aktif secara bersamaan.

**T13: Dual eSIM 5G saya tidak berfungsi pada satu jalur – apa yang harus saya periksa?**  
Pertama, pastikan 5G diaktifkan untuk kedua jalur: Pengaturan > Seluler > [jalur] > Suara & Data > pilih 5G Otomatis atau 5G Nyala. Jika satu jalur masih hanya menunjukkan LTE, periksa dengan operator Anda – beberapa operator membatasi 5G hanya pada jalur data utama.

**T14: Saya memasukkan SIM fisik dan eSIM saya menghilang – bagaimana cara mendapatkannya kembali?**  
Ini adalah perilaku yang diketahui pada iPhone terkunci operator. Lepaskan SIM fisik, restart iPhone Anda, dan eSIM akan muncul kembali di Pengaturan > Seluler. Kemudian hubungi operator Anda untuk membuka kunci perangkat Anda sehingga keduanya dapat berfungsi secara bersamaan.

---

*Berdasarkan dokumentasi resmi Apple, standar GSMA, dan pengujian operator hingga Agustus 2026.*
## Sumber

- [GSMA — Spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM di iPhone](https://support.apple.com/en-us/108072)
- [Apple Support — Tentang eSIM di iPhone](https://support.apple.com/en-us/HT209044)