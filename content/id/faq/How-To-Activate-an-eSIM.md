---
title: "Cara Mengaktifkan eSIM di iOS dan Android (Panduan)"
h1_title: "Cara Mengaktifkan eSIM di iOS dan Android (Langkah demi Langkah)"
description: "Panduan langkah demi langkah untuk mengaktifkan eSIM di iPhone dan Android. Pindai kode QR, masukkan detail secara manual, atau gunakan aplikasi operator, serta perbaikan untuk kegagalan aktivasi."
keywords: ["aktivasi eSIM", "cara mengaktifkan eSIM", "aktifkan eSIM iPhone", "Android eSIM", "kode QR eSIM", "masukan manual eSIM", "pemecahan masalah eSIM", "eSIM perjalanan", "pengaturan eSIM iPhone", "tambah eSIM ke iPhone"]
date: '2026-08-24T00:00:00+00:00'
lastmod: 2026-08-24T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Pemecahan Masalah", "Pengaturan Perjalanan"]
toc: true
image: "/images/esim-activation-guide.jpg"

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


> **Catatan Editor:** Roami adalah merek di balik panduan ini. Kami telah mengaktifkan eSIM pada ribuan perangkat di berbagai merek besar dan lebih dari 40 negara. Setiap langkah dalam panduan ini telah diuji pada perangkat keras nyata yang menjalankan iOS 17/18 dan Android 13/14/15. Kami fokus pada apa yang benar-benar berhasil — bukan teori.

**Intinya:** Untuk mengaktifkan eSIM, Anda memerlukan ponsel yang tidak terkunci operator, koneksi Wi-Fi yang stabil, dan kode QR eSIM dari penyedia Anda. Navigasikan ke pengaturan seluler ponsel Anda, pilih "Tambah eSIM" atau "Tambah Paket Data", pindai kode QR, dan tunggu 1-2 menit hingga profil digital diunduh dan diinstal. Jika Anda mengalami kesalahan **aktivasi eSIM gagal**, panduan ini mencakup semua perbaikannya.

Untuk pengenalan umum tentang teknologi eSIM, lihat panduan [Apa itu eSIM?](/faq/what-is-esim/) kami. Jika Anda masih mengalami masalah setelah mengikuti panduan ini, [Panduan Pemecahan Masalah Mendalam eSIM (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/) kami mencakup skenario lanjutan.


## Pemeriksaan Cepat 10 Detik – Apakah Ponsel Anda Mendukung eSIM?

Sebelum memulai, verifikasi perangkat Anda mendukung eSIM. Begini caranya — hanya butuh 10 detik.

| Merek Perangkat | Cara Memeriksa | Putusan Dukungan eSIM |
|--------------|--------------|---------------------|
| **iPhone** | Tekan `*#06#` — cari nomor **EID** | EID ada = ✅ siap eSIM. Tidak ada EID = ❌ tidak ada eSIM (iPhone X atau lebih lama, atau model China) |
| **Samsung Galaxy** | Pengaturan > Koneksi > Manajer SIM — cari **Tambah eSIM** | Opsi terlihat = ✅ siap eSIM. S20 dan lebih baru (model global) mendukung eSIM |
| **Google Pixel** | Pengaturan > Jaringan & Internet > SIM — cari ikon **+** | Opsi terlihat = ✅ siap eSIM. Pixel 3 dan lebih baru mendukung eSIM |
| **OnePlus** | Pengaturan > Wi-Fi & Jaringan > SIM & Jaringan — cari **Tambah eSIM** | Opsi terlihat = ✅ siap eSIM. Seri Nord, 9, 10, 11 mendukung eSIM |
| **Xiaomi** | Pengaturan > Kartu SIM & Jaringan Seluler — cari **Tambah eSIM** | Opsi terlihat = ✅ siap eSIM. Seri 12, 13, 14 mendukung eSIM |
| **Motorola** | Pengaturan > Jaringan & Internet > Jaringan Seluler — cari **Tambah Operator** | Opsi terlihat = ✅ siap eSIM. Seri Edge dan yang lebih baru mendukung eSIM |
| **iPad (Seluler)** | Pengaturan > Data Seluler — cari **Tambah Paket Seluler** | Opsi terlihat = ✅ siap eSIM. Pro (gen ke-3+), Air (gen ke-3+), mini (gen ke-6+) |
| **Apple Watch** | Aplikasi Watch > Watch Saya > Seluler — cari **Atur Seluler** | Opsi terlihat = ✅ siap eSIM. Seri 4+ (model seluler) mendukung eSIM |

**Jika perangkat Anda tidak menampilkan EID atau opsi eSIM:** Perangkat tersebut tidak memiliki perangkat keras eSIM. Anda perlu menggunakan SIM fisik sebagai gantinya. Untuk daftar lengkap, periksa [daftar perangkat yang kompatibel dengan eSIM lengkap](/compatibility/).


## Alur Keputusan Aktivasi Cepat – Metode eSIM Mana yang Sesuai dengan Situasi Anda?

Tidak yakin metode aktivasi mana yang berlaku untuk Anda? Gunakan peta keputusan ini untuk menemukan jalur yang tepat dalam hitungan detik.

| Situasi Anda | Yang Anda Butuhkan | Lompat Ke |
|----------------|---------------|---------|
| **"Saya punya kode QR dari operator saya – apa yang harus saya lakukan?"** | Pemindaian kode QR | [Pindai QR iPhone](#cara-mengaktifkan-esim-di-iphone-ios) atau [Pindai QR Android](#cara-mengaktifkan-esim-di-android) |
| **"Saya tidak bisa memindai kode QR – kode itu ada di ponsel yang sama yang saya gunakan"** | Masukan manual (alamat SM-DP+) | [Bagian masukan manual](#cara-mengaktifkan-esim-di-iphone-ios) (iPhone) atau [Bagian masukan manual](#cara-mengaktifkan-esim-di-android) (Android) |
| **"Saya membeli eSIM melalui aplikasi – tidak ada kode QR"** | Aktivasi dalam aplikasi | [Aktivasi melalui aplikasi operator](#aktifkan-esim-melalui-aplikasi-operator--alternatif-selain-kode-qr) |
| **"Saya menyiapkan iPhone baru – dapatkah saya memindahkan eSIM saya?"** | Transfer Cepat | [Transfer eSIM ke ponsel baru](#cara-mentransfer-esim-ke-ponsel-baru-ios--android) |
| **"Saya baru saja menginstalnya tetapi tidak ada sinyal"** | Pemecahan masalah pasca-aktivasi | [Pemecahan Masalah](#pemecahan-masalah-kesalahan-aktivasi-esim-gagal--perbaikan-umum) |
| **"Saya beralih dari Android ke iPhone (atau sebaliknya)"** | Transfer lintas platform | [Transfer lintas platform](#transfer-lintas-platform-iphone--android) |
| **"Saya ingin menggunakan SIM rumah dan eSIM perjalanan bersama-sama"** | Pengaturan Dual SIM | [Menggunakan Dual SIM dengan eSIM dan SIM Fisik](#menggunakan-dual-sim-dengan-esim-dan-sim-fisik--praktik-terbaik) |


## Daftar Periksa Pra-Penerbangan 60 Detik Aktivasi – Jangan Lewatkan 6 Pemeriksaan Ini

**Sebelum Anda memindai kode QR itu, jalankan daftar periksa ini. Hanya butuh 60 detik dan akan menyelamatkan Anda dari kegagalan aktivasi yang paling umum.**

| Pemeriksaan | Cara Memverifikasi | Lulus/Gagal |
|-------|---------------|-----------|
| **Tidak terkunci operator?** | iPhone: Pengaturan > Umum > Tentang > Kunci Operator → harus mengatakan "Tidak ada batasan SIM" | ☐ |
| **Wi-Fi terhubung?** | Hubungkan ke jaringan Wi-Fi yang stabil. Hindari Wi-Fi publik/hotel. | ☐ |
| **Tahu kode sandi Anda?** | iOS akan meminta kode sandi layar kunci Anda selama instalasi. | ☐ |
| **Kode QR dapat diakses?** | Buka email dengan kode QR di laptop, tablet, atau salinan cetak. | ☐ |
| **Kecerahan kode QR maksimal?** | Jika memindai dari layar, atur kecerahan ke 100%. | ☐ |
| **EID ada?** | Tekan `*#06#` — EID = siap eSIM. Tidak ada EID = gunakan SIM fisik. | ☐ |

**Jika semua kotak dicentang, Anda siap untuk mengaktifkan.** Jika ada kotak yang tidak dicentang, perbaiki masalah itu terlebih dahulu sebelum melanjutkan.

---

**Mengapa pemeriksaan ini penting:** Penyebab #1 dari kesalahan **aktivasi eSIM gagal** adalah ponsel yang terkunci operator. Penyebab #2 adalah mencoba mengaktifkan tanpa koneksi Wi-Fi yang stabil. Penyebab #3 adalah memindai kode QR dengan aplikasi Kamera alih-alih melalui Pengaturan. Jalankan daftar periksa ini dan Anda akan menghindari 90% kegagalan aktivasi.

---

## Cara Mengaktifkan eSIM di iPhone (iOS)

Apple telah menyederhanakan proses **pengaturan eSIM iPhone** dalam pembaruan iOS terbaru. Ikuti langkah-langkah tepat ini untuk menginstal profil eSIM Anda dan menyelesaikan proses **tambah eSIM ke iPhone** Anda.

1. **Langkah 1:** Buka **Pengaturan > Seluler** (atau **Data Seluler** tergantung wilayah Anda).
2. **Langkah 2:** Ketuk **Tambah eSIM** (atau **Tambah Paket Data** pada versi iOS lama). Jika opsi ini berwarna abu-abu, iPhone Anda mungkin terkunci operator.
3. **Langkah 3:** Ketuk **Gunakan Kode QR** di bagian bawah layar.
4. **Langkah 4:** Posisikan **kode QR eSIM** dalam bingkai kamera. Pegang ponsel dengan stabil pada jarak sekitar 15cm. Pastikan kode QR cukup terang dan layar yang menampilkannya pada kecerahan penuh (jika kode QR ditampilkan di layar lain).
5. **Langkah 5:** Setelah dikenali, ketuk **Lanjutkan** dan tunggu pesan "Pengaturan Seluler Selesai". **Unduhan profil eSIM** biasanya memakan waktu 30-60 detik.

**Khusus iOS 18:** Jika Anda menggunakan iOS 18, antarmuka "Tambah eSIM" telah didesain ulang dengan tombol masukan manual yang lebih menonjol di bagian bawah layar pemindaian. Alur aktivasi lebih lancar — Anda akan melihat indikator kemajuan selama unduhan profil.

Jika Anda tidak dapat memindai kode (misalnya, kode QR ada di ponsel yang Anda gunakan), ketuk **Masukkan Detail Secara Manual** di bagian bawah layar pemindaian. Tempelkan **Alamat SM-DP+** dan **Kode Aktivasi** yang disediakan dalam email operator Anda. Metode **masukan manual eSIM** ini menghindari kode QR sepenuhnya dan merupakan cadangan yang andal ketika pemindaian **kode QR eSIM** gagal — ini adalah cara paling umum untuk **cara mengaktifkan eSIM** ketika kamera tidak mau bekerja sama.

**Setelah instalasi, konfigurasikan pengaturan penting ini:**
- Beri label eSIM dengan jelas (misalnya, "Perjalanan", "Kerja", "Perjalanan AS")
- Tetapkan jalur default untuk panggilan/SMS (biasanya pertahankan SIM utama sebagai default)
- Tetapkan eSIM perjalanan sebagai jalur **Data Seluler**
- MATIKAN **Izinkan Peralihan Data Seluler** untuk mencegah biaya roaming yang tidak disengaja
- Biarkan Data Roaming MATI pada eSIM sampai Anda tiba di tujuan, lalu aktifkan

> 💡 **Tips Pelancong:** Anda dapat menginstal **eSIM perjalanan** di rumah saat Anda masih memiliki Wi-Fi yang andal. Profil eSIM tetap tidak aktif di ponsel Anda sampai Anda tiba di tujuan dan menyalakan Data Roaming untuk jalur tersebut. Dengan cara ini, Anda turun dari pesawat sudah terhubung.


## Cara Mengaktifkan eSIM di Android

Menu Android sedikit bervariasi tergantung pada pabrikan perangkat Anda. Berikut adalah jalur yang tepat untuk merek Android paling populer, bersama dengan instruksi umum untuk **aktifkan eSIM Android**.

### Untuk Perangkat Samsung Galaxy (One UI 5, 6, 6.1, 7):

1. **Langkah 1:** Buka **Pengaturan > Koneksi**.
2. **Langkah 2:** Ketuk **Manajer SIM**.
3. **Langkah 3:** Pilih **Tambah eSIM** (mungkin juga muncul sebagai "Tambah paket seluler").
4. **Langkah 4:** Ketuk **Pindai kode QR dari penyedia layanan**.
5. **Langkah 5:** Posisikan **kode QR eSIM** dalam bingkai kamera. Setelah dipindai, ketuk **Tambah** saat diminta.
6. **Langkah 6:** Ikuti petunjuk di layar untuk menyelesaikan unduhan. Beri label eSIM Anda dan atur preferensi Anda untuk data dan panggilan.

### Untuk Perangkat Google Pixel (Android 13, 14, 15):

1. **Langkah 1:** Buka **Pengaturan > Jaringan & internet**.
2. **Langkah 2:** Ketuk ikon **+ (tambah)** di samping **SIM**.
3. **Langkah 3:** Ketuk **Unduh SIM sebagai gantinya?** di bagian bawah layar.
4. **Langkah 4:** Ketuk **Berikutnya** dan pindai kode QR Anda saat diminta.
5. **Langkah 5:** Tunggu hingga **unduhan profil eSIM** selesai. Setelah selesai, buka pengaturan **Jaringan seluler** untuk mengkonfigurasi SIM mana yang menangani data dan panggilan.

Halaman [Google Support – eSIM di Pixel](https://support.google.com/pixelphone/answer/7086887) menyediakan detail tambahan untuk pengguna Pixel. Untuk pengguna Samsung, halaman [Samsung Support – eSIM](https://www.samsung.com/us/support/) menawarkan panduan khusus model.

### Untuk Perangkat OnePlus (Oxygen OS 13, 14):

1. **Langkah 1:** Buka **Pengaturan > Wi-Fi & Jaringan**.
2. **Langkah 2:** Ketuk **SIM & Jaringan**.
3. **Langkah 3:** Ketuk **Tambah eSIM**.
4. **Langkah 4:** Pindai kode QR Anda atau masukkan detail secara manual.

**Pemecahan masalah OnePlus eSIM:** Jika Anda tidak melihat "Tambah eSIM," periksa pembaruan Oxygen OS — versi lama menyembunyikan opsi eSIM untuk beberapa wilayah. Buka Pengaturan > Sistem > Pembaruan Sistem.

### Untuk Perangkat Xiaomi (MIUI / HyperOS):

1. **Langkah 1:** Buka **Pengaturan > Kartu SIM & Jaringan Seluler**.
2. **Langkah 2:** Ketuk **Tambah eSIM**.
3. **Langkah 3:** Pindai kode QR Anda atau masukkan detail secara manual.

**Pemecahan masalah Xiaomi eSIM:** Ponsel Xiaomi yang dijual di Cina daratan tidak memiliki perangkat keras eSIM. Jika Anda membeli Xiaomi di Cina, eSIM tidak akan berfungsi terlepas dari pengaturannya.

### Untuk Perangkat Motorola:

1. **Langkah 1:** Buka **Pengaturan > Jaringan & Internet**.
2. **Langkah 2:** Ketuk **Jaringan Seluler**.
3. **Langkah 3:** Ketuk **Tambah Operator**.
4. **Langkah 4:** Pindai kode QR Anda atau masukkan detail secara manual.

### Untuk Perangkat Android Lainnya (jalur umum):

Jika merek Anda tidak tercantum di atas, coba jalur umum ini:
- **Pengaturan > Jaringan & Internet > Jaringan Seluler > Lanjutan > Operator > Tambah Operator**
- **Pengaturan > Kartu SIM & jaringan seluler > Tambah eSIM**
- Cari "eSIM" di bilah pencarian Pengaturan

Jika tidak ada hasil yang muncul, model ponsel Anda mungkin tidak mendukung eSIM. Selalu periksa spesifikasi perangkat Anda atau tekan `*#06#` untuk memverifikasi.

[GSMA](https://www.gsma.com/esim/) menyediakan standar teknis yang membuat aktivasi eSIM berfungsi di semua merek Android yang berbeda ini.

### Masukan Manual di Android – Saat Pemindaian QR Gagal

Sama seperti di iPhone, Android mendukung **masukan manual eSIM** sebagai cadangan:

1. Di layar "Tambah eSIM", cari **"Masukkan kode aktivasi secara manual"** atau **"Perlu bantuan?"** di bagian bawah.
2. Masukkan **Alamat SM-DP+** dan **Kode Aktivasi** yang disediakan dalam email operator Anda.
3. Ketuk **Berikutnya** dan tunggu profil diunduh.

Masukan manual berfungsi di semua perangkat Android yang mendukung eSIM dan merupakan cadangan paling andal ketika pemindaian QR gagal.

### Di Mana Menemukan Alamat SM-DP+ dan Kode Aktivasi

Jika Anda melakukan masukan manual, berikut adalah tempat menemukan detail ini:

| Penyedia | Di Mana Menemukan Detail Masukan Manual |
|----------|-------------------------------------|
| **Roami** | Di email konfirmasi — cari "Detail instalasi manual" atau "Alamat SM-DP+" |
| **Airalo** | Di aplikasi: ketuk paket eSIM → "Detail" → "Instalasi manual" |
| **Holafly** | Di email konfirmasi — bagian "Instalasi manual" |
| **Nomad** | Di aplikasi: detail eSIM → opsi "Instal manual" |
| **Google Fi** | Masukan manual tidak didukung — gunakan aplikasi Fi |
| **US Mobile** | Di aplikasi: Akun → eSIM → "Kode aktivasi manual" |
| **T-Mobile (AS)** | Di email konfirmasi atau aplikasi T-Mobile — "Detail aktivasi eSIM" |

**Tips pro:** Ambil tangkapan layar atau simpan detail ini sebelum Anda bepergian. Jika Anda mendarat dan tidak memiliki Wi-Fi, Anda tidak akan dapat mencarinya secara online.


## Aktifkan eSIM Melalui Aplikasi Operator – Alternatif Selain Kode QR

Banyak penyedia eSIM perjalanan (seperti Roami, Airalo, atau Holafly) dan operator domestik besar menawarkan aktivasi dalam aplikasi. Ini menghindari kode QR sepenuhnya dan sering kali merupakan cara tercepat untuk menyelesaikan **aktivasi eSIM**.

1. Unduh aplikasi resmi penyedia Anda dari App Store atau Google Play Store.
2. Masuk ke akun Anda dan temukan paket yang Anda beli di bawah "eSIM Saya" atau "Paket Saya".
3. Ketuk tombol **Aktifkan** atau **Instal eSIM**.
4. Ponsel Anda akan meminta izin untuk mengizinkan aplikasi menginstal paket seluler. Ketuk **Izinkan** atau **Lanjutkan**.
5. Aplikasi secara otomatis berkomunikasi dengan pengaturan ponsel Anda untuk menginstal profil — tidak perlu pemindaian QR.

Metode ini direkomendasikan ketika Anda menerima **kode QR eSIM** di ponsel yang sama yang Anda aktifkan, karena menghindari dilema "tidak bisa memindai layar sendiri" sepenuhnya.

> 💡 **Tips transisi:** Jika Anda menggunakan aplikasi operator untuk aktivasi, prosesnya sama di iPhone dan Android — aplikasi menangani instalasi langsung melalui pengaturan ponsel Anda. Ini sering kali merupakan metode paling lancar untuk pengguna pertama kali.


## Aktivasi eSIM iPad dan Apple Watch – Pengaturan Khusus Perangkat

eSIM tidak hanya untuk iPhone. Berikut cara mengaturnya di perangkat Apple lainnya untuk **aktivasi eSIM iPad** dan **pengaturan eSIM Apple Watch**.

### Mengaktifkan eSIM di iPad (Model Seluler)

Hanya model iPad seluler yang mendukung eSIM — iPad Wi-Fi saja tidak.

**Langkah demi langkah untuk iPad:**
1. Buka **Pengaturan > Data Seluler**.
2. Ketuk **Tambah Paket Seluler**.
3. Pindai **kode QR eSIM** menggunakan kamera iPad.
4. Ikuti petunjuk untuk menyelesaikan **unduhan profil eSIM**.
5. Beri label paket Anda dan konfigurasikan pengaturan Anda.

**iPad mana yang mendukung eSIM?**
- iPad Pro (generasi ke-3 dan lebih baru)
- iPad Air (generasi ke-3 dan lebih baru)
- iPad (generasi ke-10 dan lebih baru)
- iPad mini (generasi ke-6 dan lebih baru)

**Pemecahan masalah iPad eSIM:**
- Jika Anda tidak melihat "Tambah Paket Seluler," iPad Anda mungkin terkunci operator atau model Wi-Fi saja.
- Mulai ulang iPad Anda setelah instalasi jika eSIM tidak terhubung.
- Pastikan Data Roaming AKTIF untuk jalur eSIM.

### Mengaktifkan eSIM di Apple Watch (Model Seluler)

eSIM Apple Watch diatur melalui aplikasi Watch di iPhone Anda — Anda tidak dapat mengaktifkannya langsung di jam tangan.

**Langkah demi langkah untuk Apple Watch:**
1. Buka aplikasi **Watch** di iPhone Anda.
2. Ketuk **Watch Saya** > **Seluler**.
3. Ketuk **Atur Seluler**.
4. Ikuti petunjuk di layar untuk menambahkan paket eSIM Anda.
5. Operator Anda mungkin mengirimkan kode verifikasi — masukkan saat diminta.

**Apple Watch mana yang mendukung eSIM?**
- Apple Watch Ultra (semua model)
- Apple Watch Seri 4 dan lebih baru (model seluler)
- Apple Watch SE (model seluler)

**Pemecahan masalah Apple Watch eSIM:**
- Hanya model seluler (GPS + Seluler) yang mendukung eSIM — model GPS saja tidak.
- Operator Anda harus mendukung eSIM Apple Watch — tidak semua operator mendukung.
- Pastikan iPhone Anda di dekatnya dengan koneksi Wi-Fi yang stabil selama pengaturan.
- Mulai ulang kedua perangkat jika eSIM tidak muncul.

Jika operator Anda tidak tercantum di aplikasi Watch, hubungi mereka langsung untuk menambahkan paket Apple Watch ke akun Anda. Untuk panduan eSIM iPad dan Apple Watch lebih lanjut, lihat [panduan eSIM iPad dan Apple Watch](/faq/ipad-apple-watch-esim-support-guide/) kami.


## Cara Mentransfer eSIM ke Ponsel Baru (iOS & Android)

Jika Anda meningkatkan ke perangkat baru, Anda mungkin perlu **mentransfer eSIM ke ponsel baru**. Begini cara kerjanya di setiap platform.

### iOS ke iOS (iPhone ke iPhone)

Transfer Cepat bawaan Apple adalah metode termudah:

1. Selama pengaturan iPhone baru Anda, pilih "Transfer eSIM dari iPhone terdekat" saat diminta.
2. Jaga kedua ponsel tetap dekat dengan Bluetooth dan Wi-Fi diaktifkan.
3. Konfirmasi transfer di iPhone lama Anda.
4. Tunggu 1-2 menit hingga **unduhan profil eSIM** selesai di perangkat baru.

**Jika Transfer Cepat tidak berfungsi:** Buka Pengaturan > Seluler di iPhone baru Anda > Tambah eSIM > Transfer dari iPhone terdekat.

**Jika Transfer Cepat gagal:** Hapus eSIM dari iPhone lama terlebih dahulu (Pengaturan > Seluler > [eSIM] > Hapus eSIM), lalu mulai ulang iPhone baru dan coba lagi. Beberapa operator mengharuskan profil lama dihapus sebelum profil baru akan aktif.

### Android ke Android

Metode transfer Android bervariasi menurut merek, tetapi Samsung dan Google Pixel menawarkan opsi serupa:

**Samsung:** Pengaturan > Koneksi > Manajer SIM > Tambah eSIM > Transfer eSIM dari perangkat lama (ikuti petunjuk di layar).

**Google Pixel:** Selama pengaturan, Anda mungkin diminta untuk mentransfer eSIM Anda. Atau, gunakan aplikasi operator atau minta kode QR baru.

**Jika transfer Android gagal:** Hubungi operator Anda untuk meminta kode QR baru untuk perangkat baru. Sebagian besar eSIM perjalanan tidak dapat ditransfer antar perangkat Android — Anda perlu membeli paket baru.

### Transfer Lintas Platform (iPhone ↔ Android)

Mentransfer **eSIM antara iPhone dan Android** jarang didukung. Sebagian besar operator dan penyedia eSIM perjalanan tidak mengizinkan transfer lintas platform karena profil eSIM terikat pada EID perangkat asli.

**Apa yang harus dilakukan sebagai gantinya:**
1. Hubungi operator Anda untuk meminta kode QR eSIM baru untuk perangkat baru.
2. Atau, jika menggunakan eSIM perjalanan, beli paket baru untuk perangkat baru.

**Pengecualian:** Beberapa operator (seperti Google Fi, US Mobile) mengizinkan Anda mengunduh kode QR baru dari aplikasi mereka setelah menonaktifkan perangkat lama. Periksa kebijakan operator Anda sebelum berasumsi Anda perlu paket baru.

Untuk instruksi transfer lintas platform yang mendetail, lihat [Cara Mentransfer eSIM Antara iPhone dan Android](/faq/how-to-transfer-esim-between-iphone-and-android/).


## Menggunakan Dual SIM dengan eSIM dan SIM Fisik – Praktik Terbaik

Banyak ponsel pintar modern mendukung **dual SIM** dengan satu SIM fisik dan satu eSIM aktif secara bersamaan. Berikut cara mengkonfigurasi **pengaturan dual SIM eSIM** untuk perjalanan.

### Cara Kerja Dual SIM (DSDS Dijelaskan)

Ponsel Anda mendukung **Dual SIM Dual Standby (DSDS)**. Kedua jalur tetap aktif dan dapat menerima panggilan/SMS, tetapi hanya satu jalur yang dapat menggunakan data pada satu waktu. Saat Anda melakukan panggilan di satu jalur, jalur lainnya untuk sementara tidak tersedia. Ini adalah perilaku normal — bukan cacat.

### Praktik Terbaik untuk Pelancong Internasional (SIM Fisik + eSIM)

**Pertahankan SIM rumah untuk panggilan/SMS:** Tetapkan SIM fisik Anda sebagai jalur default untuk panggilan suara dan SMS. Matikan Data Roaming di jalur ini untuk menghindari biaya tinggi.

**Gunakan eSIM perjalanan untuk data:** Tetapkan **eSIM perjalanan** Anda sebagai jalur default untuk Data Seluler. Biarkan Data Roaming AKTIF untuk jalur ini.

**Konfigurasi untuk iPhone:**
1. Pengaturan > Seluler > Data Seluler > pilih eSIM perjalanan Anda.
2. Pengaturan > Seluler > Jalur Suara Default > pilih SIM rumah Anda.
3. MATIKAN Izinkan Peralihan Data Seluler.

**Konfigurasi untuk Android (Samsung):**
1. Pengaturan > Koneksi > Manajer SIM.
2. Tetapkan eSIM perjalanan Anda sebagai SIM data.
3. Tetapkan SIM fisik rumah Anda sebagai SIM panggilan/SMS.
4. Matikan data roaming di SIM rumah.

### Praktik Terbaik untuk Dual eSIM (Tanpa SIM Fisik – iPhone 14+ Model AS)

Jika Anda menggunakan iPhone khusus eSIM (iPhone AS 14 dan lebih baru), berikut cara mengkonfigurasi dua eSIM aktif:

**Konfigurasi untuk iPhone (dual eSIM):**
1. Pengaturan > Seluler > Data Seluler > pilih eSIM perjalanan Anda.
2. Pengaturan > Seluler > Jalur Suara Default > pilih eSIM rumah Anda.
3. MATIKAN Izinkan Peralihan Data Seluler.
4. MATIKAN Data Roaming di eSIM rumah.
5. AKTIFKAN Data Roaming di eSIM perjalanan.

**Kapan menggunakan setiap konfigurasi:**
- **Di rumah:** eSIM rumah = data + suara. eSIM perjalanan = MATI.
- **Bepergian:** eSIM perjalanan = data. eSIM rumah = suara saja (dengan Data Roaming MATI).
- **Negara transit:** Jika Anda transit melalui suatu negara dan menginginkan data, aktifkan eSIM perjalanan negara itu dan alihkan data ke sana.

### Masalah Dual SIM Umum dan Perbaikannya

| Masalah | Kemungkinan Penyebab | Perbaikan |
|-------|--------------|-----|
| **Tidak ada data di eSIM** | Data Seluler ditetapkan ke jalur yang salah | Periksa Pengaturan > Seluler > Data Seluler |
| **Panggilan masuk ke jalur yang salah** | Jalur Suara Default salah konfigurasi | Periksa Pengaturan > Seluler > Jalur Suara Default |
| **Biaya roaming tidak disengaja** | Data Roaming AKTIF di SIM rumah | MATIKAN Data Roaming di SIM rumah |
| **"Tidak Ada Layanan" di satu jalur selama panggilan** | Batasan DSDS (perilaku normal) | Aktifkan Wi-Fi Calling di kedua jalur |
| **Kedua eSIM menunjukkan "Tidak Ada Layanan"** | Mode Pesawat atau masalah jaringan | Alihkan Mode Pesawat, mulai ulang ponsel |

Untuk pemecahan masalah dual SIM lebih lanjut, lihat panduan [Dual eSIM Tidak Berfungsi? 12 Perbaikan untuk iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/) kami.


## Cara Mengonfirmasi Aktivasi eSIM Anda Berhasil

Setelah Anda menyelesaikan langkah-langkah di atas, berikut cara memverifikasi bahwa eSIM baru Anda siap digunakan:

- **Periksa Status Bar:** Lihat sudut kanan atas layar Anda. Jika Anda memiliki SIM fisik dan eSIM yang aktif, Anda akan melihat dua set batang sinyal seluler yang terpisah. Di iPhone, jalur utama ditampilkan di atas dengan jalur sekunder sedikit di bawahnya.
- **Periksa Menu Pengaturan:** Buka pengaturan Seluler/Jaringan Anda. Anda akan melihat kedua jalur tercantum, dan status eSIM yang baru ditambahkan harus mengatakan **"Aktif"** atau **"Aktif"**. Jika mengatakan "Tidak Ada Layanan," pastikan Data Roaming diaktifkan untuk jalur eSIM tersebut.
- **Tunggu registrasi jaringan:** Setelah instalasi, dibutuhkan **30-60 detik** untuk eSIM mendaftar di jaringan lokal. Dalam beberapa kasus, mungkin memakan waktu hingga **2 menit**. Bersabarlah sebelum melakukan pemecahan masalah.
- **Tes Dunia Nyata:** Matikan Wi-Fi Anda, alihkan Data Seluler utama Anda ke jalur eSIM baru, dan coba muat halaman web atau buka aplikasi. Jika terhubung dengan lancar, **aktivasi eSIM** Anda 100% berhasil!
- **Periksa Nama Jaringan:** eSIM harus menampilkan nama jaringan lokal yang terhubung (misalnya, "T-Mobile", "EE", "SoftBank") daripada tetap pada "Mencari" atau "Tidak Ada Layanan."

> 💡 **Tips transisi:** Jika eSIM Anda menunjukkan "Mencari" selama lebih dari 2 menit, jangan panik — langsung ke bagian Pemecahan Masalah di bawah untuk langkah-langkah tepat untuk mengatasinya.


## 7 Kesalahan Kritis yang Merusak Aktivasi eSIM – Dan Cara Menghindarinya

*Menargetkan kegagalan pengguna paling umum berdasarkan tiket dukungan nyata.*

| Kesalahan | Apa yang Terjadi | Cara Menghindari |
|---------|--------------|---------|
| **Memindai kode QR dengan aplikasi Kamera alih-alih Pengaturan** | Kamera mengenali kode tetapi tidak melakukan apa-apa — tidak ada profil yang terinstal | Selalu buka Pengaturan > Seluler > Tambah eSIM terlebih dahulu — **jangan pernah** menggunakan aplikasi Kamera standalone untuk eSIM |
| **Mengaktifkan di bandara dengan Wi-Fi lemah** | Unduhan terputus di tengah instalasi, merusak profil | Instal di rumah di jaringan Wi-Fi stabil Anda sendiri sebelum berangkat ke bandara |
| **Menghapus eSIM untuk "memperbaiki" masalah koneksi** | eSIM hancur secara permanen — Anda kehilangan semua sisa data dan harus membeli paket baru | **Jangan pernah mengetuk Hapus eSIM** kecuali paket sudah kedaluwarsa. Hapus hanya menghapus profil — tidak "menyegarkannya" |
| **Menunggu sampai mendarat untuk menginstal** | Anda tiba tanpa Wi-Fi dan tidak dapat mengunduh profil | Instal profil sebelum keberangkatan (tetap tidak aktif sampai Anda tiba). Anda hanya perlu Wi-Fi untuk unduhan awal |
| **Lupa menyalakan Data Roaming untuk jalur eSIM** | Batang sinyal penuh tetapi tidak ada koneksi internet | Setelah mendarat, buka Pengaturan > Seluler > [eSIM Anda] dan aktifkan Data Roaming. Ini wajib untuk **semua** eSIM perjalanan |
| **Tidak mengetahui kode sandi iPhone sebelum memulai** | Instalasi terhenti dan meminta kode sandi — Anda terjebak | Pastikan Anda mengetahui kode sandi layar kunci sebelum memulai instalasi eSIM |
| **Mencoba memindai kode QR dari layar ponsel sendiri** | Tidak dapat memindai kode di perangkat yang sama | Simpan kode QR ke Foto, lalu gunakan "Pilih Foto" selama aktivasi, atau gunakan masukan manual |


## Pemecahan Masalah Kesalahan Aktivasi eSIM Gagal – Perbaikan Umum

Jika eSIM Anda gagal diaktifkan atau terhubung, jangan panik. Coba perbaikan teknis ini sebelum menghubungi dukungan pelanggan. Langkah-langkah ini membahas skenario **pemecahan masalah eSIM** yang paling umum.

### Kesalahan 1: "Paket Seluler Tidak Dapat Ditambahkan"
- **Perbaikannya:** Ini biasanya berarti ponsel Anda terkunci operator, atau kode QR telah dipindai. Kode QR bersifat sekali pakai untuk alasan keamanan. Jika ponsel Anda tidak terkunci dan Anda mendapatkan kesalahan ini, Anda harus menghubungi penyedia Anda untuk membuat kode QR baru. Pertama verifikasi: Pengaturan > Umum > Tentang > Kunci Operator harus mengatakan "Tidak ada batasan SIM."
- **Pemeriksaan tambahan:** Hapus profil eSIM lama yang tidak digunakan dari Pengaturan > Seluler. Terlalu banyak profil yang tersimpan terkadang dapat mencegah profil baru ditambahkan.

### Kesalahan 2: "Kode QR Tidak Valid" atau Kode Tidak Dapat Dipindai
- **Perbaikannya:** Kode QR mungkin sudah kedaluwarsa (sebagian besar memiliki masa berlaku 72 jam), rusak, atau kamera Anda tidak dapat fokus. Pastikan Anda memindai di area yang cukup terang dan layar yang menampilkan kode pada kecerahan maksimum. Jika masih gagal, ketuk **"Masukkan Detail Secara Manual"** dan ketik **Alamat SM-DP+** dan **Kode Aktivasi** yang disediakan oleh operator Anda. Ini sepenuhnya menghindari kode QR — solusi yang andal untuk kesalahan **aktivasi eSIM gagal**.

### Masalah 1: eSIM Terinstal, tetapi Menunjukkan "Tidak Ada Layanan"
- **Perbaikannya:** Profil berhasil diunduh, tetapi ponsel Anda belum mendaftar ke menara seluler lokal. Pertama, pastikan jalur eSIM diaktifkan **AKTIF** di pengaturan Anda. Selanjutnya, aktifkan **Mode Pesawat** selama 30 detik, lalu matikan. Ini memaksa antena ponsel Anda untuk memulai ulang dan mencari sinyal.
- **Jika masih tidak ada layanan:** Periksa Pengaturan > Seluler > [eSIM Anda] > Pilihan Jaringan. MATIKAN "Otomatis" dan pilih secara manual jaringan dari daftar. Terkadang ponsel perlu diberi tahu secara eksplisit jaringan mana yang akan digunakan.

### Masalah 2: Berhasil Diaktifkan, Tetapi Tidak Ada Koneksi Internet
- **Perbaikannya:** Jika Anda memiliki batang sinyal tetapi halaman tidak mau dimuat, periksa tiga hal:
  1. **Nyalakan Data Roaming:** Buka pengaturan eSIM Anda dan pastikan sakelar "Data Roaming" AKTIF (ini wajib untuk sebagian besar eSIM perjalanan — banyak pelancong melewatkan langkah ini).
  2. **Periksa Pengaturan APN:** Temukan menu **APN (Nama Titik Akses)** di pengaturan seluler Anda. Tanyakan kepada penyedia Anda untuk detail APN yang benar dan ketik secara manual. *(Langkah ini terutama umum untuk perangkat Android).* Nilai APN perjalanan umum adalah "globaldata" atau "internet" — periksa dengan penyedia spesifik Anda.
  3. **Verifikasi Jalur Data:** Periksa kembali bahwa "Data Seluler" utama ponsel Anda benar-benar ditetapkan ke eSIM baru, bukan SIM rumah Anda.

### Masalah 3: Profil eSIM Rusak Selama Pengunduhan
- **Perbaikannya:** Jika koneksi Wi-Fi Anda terputus di tengah pengunduhan, **instalasi eSIM** mungkin tidak lengkap atau rusak. Pertama, hapus eSIM yang tidak lengkap: Pengaturan > Seluler > ketuk eSIM yang tidak lengkap > Hapus eSIM. Kemudian mulai ulang ponsel Anda dan pindai ulang kode QR (Anda mungkin memerlukan kode baru dari penyedia Anda). Kali ini, pastikan Anda berada di koneksi Wi-Fi yang cepat dan stabil selama seluruh proses pengunduhan.

### Masalah 4: eSIM Terinstal tetapi Tidak Muncul di Pengaturan
- **Perbaikannya:** Ini adalah gangguan perangkat lunak di iOS atau Android.
  1. **iPhone:** Buka Pengaturan > Umum > Tentang dan gulir ke "SIM Tersedia" atau "SIM Digital." Jika eSIM muncul di sana tetapi tidak di Seluler, mulai ulang ponsel.
  2. **Android:** Buka Pengaturan > Jaringan & Internet > SIM — eSIM mungkin muncul sebagai "Tidak Aktif." Ketuk dan aktifkan.
  3. Jika memulai ulang tidak berhasil, buka Pengaturan > Seluler > Tambah eSIM. Terkadang ponsel akan mendeteksi profil yang ada dan menawarkan untuk menambahkannya kembali tanpa kode QR baru.

### Masalah 5: eSIM Menunjukkan "Mencari" Selama Lebih dari 2 Menit
- **Perbaikannya:** Ini berbeda dengan "Tidak Ada Layanan." "Mencari" berarti ponsel secara aktif mencari jaringan. Coba langkah-langkah ini secara berurutan:
  1. Aktifkan Mode Pesawat selama 10 detik, lalu matikan.
  2. Buka Pilihan Jaringan dan pilih secara manual jaringan (lihat Masalah 1 di atas).
  3. Jika eSIM untuk perjalanan, periksa apakah Anda telah mendarat di negara yang benar — beberapa eSIM hanya aktif di wilayah tertentu.
  4. Mulai ulang ponsel Anda.
  5. Jika masih "Mencari" setelah 5 menit, hubungi penyedia eSIM Anda — mungkin ada masalah perjanjian jaringan di lokasi Anda saat ini.

> **PERINGATAN KRITIS:** Jangan pernah mengetuk **Hapus eSIM** atau **Hapus Paket Data** jika Anda mencoba memperbaiki masalah koneksi. Menghapus eSIM secara permanen menghancurkan profil digital, dan Anda harus membeli yang baru. Hanya hapus eSIM ketika Anda benar-benar yakin paket sudah kedaluwarsa dan Anda tidak akan pernah membutuhkannya lagi. Jika Anda menghapus **eSIM perjalanan** yang aktif di tengah perjalanan, Anda tidak dapat memulihkannya.

Jika perbaikan ini tidak menyelesaikan masalah Anda, konsultasikan [Panduan Pemecahan Masalah Mendalam eSIM (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/) kami untuk skenario yang lebih lanjut seperti **aktivasi eSIM gagal** pada perangkat yang terkunci operator atau pembatasan regional.


## Pertanyaan yang Sering Diajukan

**Apakah ada biaya untuk mengaktifkan eSIM?** Tidak, operator tidak mengenakan "biaya aktivasi" hanya untuk memindai dan menginstal profil eSIM. Anda hanya membayar paket data atau paket seluler yang sebenarnya Anda beli. Jika operator mencoba mengenakan biaya aktivasi untuk eSIM, itu bukan praktik standar.

**Dapatkah saya mengaktifkan eSIM sebelum bepergian?** Ya, dan sangat disarankan. Anda harus menginstal eSIM di rumah saat Anda memiliki Wi-Fi yang andal. Paket data hanya akan tetap tidak aktif (atau "mencari") sampai Anda tiba di negara tujuan dan ponsel Anda terhubung ke jaringan lokal yang didukung. Ingatlah untuk mengaktifkan Data Roaming setelah tiba.

**Bagaimana cara beralih antara SIM fisik dan eSIM saya?** Buka pengaturan seluler Anda. Anda akan melihat kedua jalur tercantum. Anda dapat mengetuk SIM fisik untuk mematikannya, atau menetapkan SIM fisik sebagai default untuk Suara/SMS, dan eSIM sebagai default untuk Data Seluler. Untuk iPhone: Pengaturan > Seluler > Data Seluler > pilih jalur yang Anda inginkan untuk internet.

**Berapa lama waktu yang dibutuhkan untuk aktivasi eSIM?** Biasanya, **unduhan profil eSIM** dan proses aktivasi memakan waktu kurang dari 2 menit. Namun, terhubung ke jaringan lokal untuk pertama kalinya terkadang dapat memakan waktu hingga 10-15 menit tergantung pada kekuatan sinyal dan registrasi jaringan. Jika sudah lebih dari 15 menit, mulai ulang ponsel Anda.

**Dapatkah saya menggunakan SIM fisik dan eSIM secara bersamaan?** Ya — sebagian besar ponsel pintar modern mendukung Dual SIM Dual Standby (DSDS). Anda dapat menjaga SIM fisik tetap aktif untuk panggilan dan SMS dari rumah, sambil menggunakan **eSIM perjalanan** murni untuk data seluler lokal. Ini adalah pengaturan yang direkomendasikan untuk pelancong internasional yang perlu menerima kode verifikasi SMS.

**Bagaimana jika aktivasi eSIM saya berulang kali gagal?** Pertama, konfirmasikan ponsel Anda tidak terkunci (Pengaturan > Umum > Tentang > Kunci Operator). Kedua, coba di jaringan Wi-Fi yang berbeda. Ketiga, minta penyedia eSIM Anda untuk mengirim ulang kode QR — terkadang kode pertama rusak. Jika semua gagal, coba metode **masukan manual eSIM** dengan **alamat SM-DP+**. Untuk masalah yang lebih lanjut, lihat [Panduan Pemecahan Masalah Mendalam eSIM (16 kasus nyata)](/faq/esim-deep-troubleshooting-guide-2026/) kami.

**Apa perbedaan antara kode QR eSIM dan masukan manual?** Pemindaian kode QR adalah metode standar — lebih cepat dan tidak rentan kesalahan. **Masukan manual eSIM** (menggunakan alamat SM-DP+ dan kode aktivasi) adalah cadangan ketika pemindaian gagal. Masukan manual berfungsi di iPhone dan Android dan menghindari kamera sepenuhnya, menjadikannya metode **cara mengaktifkan eSIM** yang paling andal ketika kode QR tidak mau dipindai.

**Apakah saya perlu menyalakan Data Roaming agar eSIM berfungsi?** Ya — untuk sebagian besar eSIM perjalanan, Data Roaming harus AKTIF untuk jalur eSIM. Ini adalah persyaratan teknis karena eSIM perjalanan terhubung melalui jaringan mitra. Anda tidak akan dikenakan biaya roaming; ini hanya cara kerja teknologi.

**Dapatkah saya menggunakan eSIM perjalanan tanpa SIM fisik terpasang?** Ya — jika ponsel Anda mendukung eSIM, Anda dapat menggunakannya tanpa SIM fisik. Ini sangat berguna untuk model iPhone AS (14 dan lebih baru) yang tidak memiliki slot SIM fisik.

**Mengapa eSIM saya menunjukkan "Mengaktifkan" untuk waktu yang lama?** Server aktivasi mungkin sibuk, atau koneksi Wi-Fi Anda tidak stabil. Tunggu hingga 10 menit. Jika masih macet, aktifkan dan matikan Mode Pesawat. Jika itu tidak berhasil, mulai ulang ponsel Anda dan coba lagi.

**Dapatkah saya mentransfer eSIM ke ponsel baru sendiri?** Ya, tetapi tergantung pada operator Anda. Transfer Cepat Apple berfungsi untuk iPhone ke iPhone. Android memiliki opsi serupa. Untuk transfer lintas platform, Anda memerlukan kode QR baru dari operator Anda. Lihat bagian **Cara Mentransfer eSIM ke Ponsel Baru** di atas.

**Apakah iPad mendukung eSIM?** Hanya model iPad seluler yang mendukung eSIM. iPad Wi-Fi saja tidak. Periksa model iPad Anda di Pengaturan > Umum > Tentang — jika menunjukkan "Data Seluler" di menu, itu mendukung eSIM.

**Apakah Apple Watch mendukung eSIM?** Hanya model Apple Watch seluler (GPS + Seluler) yang mendukung eSIM. Periksa bagian belakang jam tangan Anda — jika memiliki cincin merah di sekitar Digital Crown, itu adalah model seluler.

**Apa alasan paling umum untuk kegagalan aktivasi eSIM?** Dua alasan: (1) ponsel terkunci operator, atau (2) Data Roaming tidak diaktifkan setelah instalasi. Keduanya tercakup dalam bagian pemecahan masalah di atas.

**Dapatkah saya memindai kode QR dari layar laptop?** Ya — pastikan layar pada kecerahan penuh dan kode bersih. Pegang ponsel Anda sekitar 15cm. Jika tidak dapat dipindai, gunakan masukan manual (alamat SM-DP+ + kode aktivasi).

**Bagaimana jika eSIM saya berfungsi di Wi-Fi tetapi tidak di seluler?** Ini hampir selalu masalah APN atau Data Roaming. Periksa bahwa Data Roaming AKTIF untuk eSIM, dan verifikasi pengaturan APN sudah benar. Lihat bagian pemecahan masalah di atas untuk langkah-langkah mendetail.

**Bagaimana jika saya menginstal eSIM tetapi tidak muncul di Pengaturan sama sekali?** Ini dapat terjadi setelah restart atau pembaruan iOS/Android. Buka Pengaturan > Umum > Tentang (iPhone) atau Pengaturan > Jaringan & Internet > SIM (Android) — eSIM mungkin terdaftar sebagai tidak aktif atau tersembunyi. Jika tidak ada, hubungi operator Anda — profil mungkin perlu diterbitkan ulang.

**Apa perbedaan antara mematikan eSIM dan menghapusnya?** Mematikan eSIM menjaga profil tetap di ponsel Anda tetapi menonaktifkan jalur — Anda dapat menyalakannya kembali kapan saja. Menghapus eSIM secara permanen menghapus profil — Anda tidak dapat memulihkannya tanpa kode QR baru. Hanya hapus ketika paket benar-benar kedaluwarsa.

**Dapatkah saya memiliki dua eSIM dari negara yang berbeda aktif secara bersamaan?** Di iPhone 13 dan lebih baru, ya — Anda dapat memiliki dua eSIM aktif secara bersamaan (dual eSIM). Di iPhone lama dan sebagian besar perangkat Android, Anda dapat memiliki satu eSIM dan satu SIM fisik aktif, tetapi tidak dua eSIM. Periksa spesifikasi perangkat Anda.

**Apa arti "alamat SM-DP+ eSIM"?** SM-DP+ (Subscription Manager - Data Preparation Plus) adalah alamat server aman yang mengirimkan profil eSIM Anda ke ponsel Anda. Saat Anda melakukan masukan manual, alamat ini memberi tahu ponsel Anda di mana mengunduh profil. Penyedia Anda memberikan alamat ini bersama dengan kode aktivasi.

---

*Berdasarkan dokumentasi Apple, Google, dan GSMA. Diperbarui: Agustus 2026.*

## Sumber

- [GSMA — Spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Dukungan Apple — eSIM di iPhone](https://support.apple.com/en-us/108072)
- [Dukungan Google — Atur eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Dukungan Google — eSIM Android](https://support.google.com/android/answer/11241215)