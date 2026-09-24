---
title: "Apa Itu Aktivasi eSIM dan Bagaimana Cara Kerjanya?"
h1_title: "Apa Itu Aktivasi eSIM dan Bagaimana Cara Kerjanya?"
description: "Apa itu aktivasi eSIM? Penjelasan langkah demi langkah yang mencakup pemeriksaan kompatibilitas, pemindaian QR, dan kesalahan umum di iPhone dan Android."
keywords: ["apa itu aktivasi eSIM", "bagaimana cara kerja aktivasi eSIM", "proses aktivasi eSIM", "cara memeriksa kompatibilitas esim", "apakah ponsel saya mendukung esim", "pemeriksaan kompatibilitas eSIM", "arti aktivasi eSIM", "eSIM Android", "kode QR eSIM", "eSIM perjalanan"]
date: 2026-09-13T00:00:00Z
lastmod: 2026-09-13T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Pemecahan Masalah", "Pengaturan Perjalanan", "Kompatibilitas"]
toc: true
image: "/img/faq/esim-activation-how-it-works.webp"
image-1: "/img/faq/esim-activation-how-it-works-1.jpg"
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
    - name: "eSIM Tiongkok"
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
      url: "faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Bagaimana cara mengaktifkan eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Cara mengaktifkan eSIM di iPhone (Semua Model)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Daftar Kompatibilitas eSIM Terbaru"
      url: "/compatibility/"
---


> **Catatan Editor:** Aktivasi eSIM berarti mengunduh profil operator ke ponsel Anda melalui internet — melalui kode QR, aplikasi operator, atau entri manual SM-DP+ — alih-alih memasukkan SIM fisik. Panduan ini mengikuti dokumentasi resmi Apple dan Android serta standar GSMA. Di akhir, Anda akan tahu metode aktivasi mana yang digunakan ponsel Anda dan cara menyelesaikannya.

Aktivasi eSIM adalah proses mengunduh profil operator ke chip SIM tertanam ponsel Anda — dari server SM-DP+ operator, biasanya dengan memindai kode QR, memasukkan detail secara manual, atau menginstal melalui aplikasi operator. Prosesnya memakan waktu dua hingga lima menit, membutuhkan koneksi Wi-Fi, dan halaman ini menjelaskan setiap metode beserta kesalahan yang dapat menghambatnya.

## Apa Arti Aktivasi eSIM?

**Apa itu?** Unduhan SIM digital yang menghubungkan ponsel Anda ke jaringan seluler dalam waktu kurang dari 2 menit – tanpa kartu plastik.

**Bagaimana prosesnya bekerja?**
- Anda memindai kode QR (atau menggunakan aplikasi operator)
- Ponsel Anda mengunduh profil digital dari server aman operator
- Ponsel Anda langsung terhubung ke jaringan lokal

**Apakah ponsel Anda mendukungnya?** Panggil `*#06#` – jika Anda melihat EID 32 digit, ya. Jika hanya nomor IMEI yang muncul, tidak.

**Apa yang Anda butuhkan?** Koneksi Wi-Fi yang stabil + paket eSIM (kode QR atau aplikasi)

**Berapa lama keseluruhan prosesnya?** Pindai QR: ~1-2 menit. Koneksi jaringan pertama: hingga 10-15 menit.

> 💡 **Persyaratan utama:** Anda HARUS memiliki koneksi internet aktif (Wi-Fi) untuk menyelesaikan pengaturan. Ini tidak dapat dilakukan secara offline. Ini adalah persyaratan mutlak – profil harus diunduh dari server operator.

**Belum yakin apakah ponsel Anda kompatibel?** Untuk daftar lengkap perangkat yang mendukung SIM digital, lihat **[daftar kompatibilitas lengkap](/compatibility/)** kami.

**Ingin menguji prosesnya tanpa membayar?** Ambil **[eSIM Roami uji coba gratis](/free-esim/)** – hanya butuh 2 menit dan memastikan semuanya berfungsi di ponsel Anda.


## Metode Aktivasi eSIM Mana yang Harus Anda Gunakan?

Tidak semua aktivasi sama. Pilih skenario Anda di bawah untuk menemukan pendekatan yang tepat.

| Situasi Anda | Metode Terbaik | Yang Anda Butuhkan |
| :--- | :--- | :--- |
| **Anda membeli paket perjalanan secara online** (Roami, Airalo, Holafly, dll.) | Pindai kode QR | Kode QR dikirim via email + koneksi Wi-Fi |
| **Operator Anda mengirim kode QR** | Pindai kode QR | Kode QR dari operator + koneksi Wi-Fi |
| **Operator Anda menyediakan aplikasi** (T-Mobile, Verizon, Orange, dll.) | Push aplikasi operator | Aplikasi operator terinstal + login akun |
| **Kamera Anda rusak atau tidak bisa memindai** | Entri manual | Alamat SM-DP+ + kode aktivasi (dari email) + kode konfirmasi (jika diperlukan) |
| **Anda berpindah dari ponsel lama** | Transfer dari perangkat terdekat | Kedua ponsel berdekatan + Bluetooth NYALA + Wi-Fi NYALA |
| **Anda menggunakan paket pascabayar operator** | Aplikasi operator atau kunjungan toko | Kredensial akun + kadang verifikasi ID di toko |


## Panduan Aktivasi eSIM Lengkap

Berikut adalah jalur langkah demi langkah bagi siapa pun yang menjalani proses ini untuk pertama kalinya.

| Langkah | Apa yang Anda Pikirkan | Apa yang Harus Dilakukan | Perkiraan Waktu |
| :--- | :--- | :--- | :--- |
| **1. Memahami** | "Sebenarnya apa ini, dan mengapa saya harus peduli?" | Pelajari dasar-dasarnya – SIM digital yang Anda atur secara online tanpa kartu fisik. | 5 menit |
| **2. Memeriksa kompatibilitas** | "Apakah ponsel saya mendukung ini?" | Panggil `*#06#` untuk memeriksa nomor EID. Atau ambil uji coba gratis untuk menguji. | 1 menit |
| **3. Membeli paket** | "Paket mana yang harus saya ambil, dan di mana membelinya?" | Pilih paket perjalanan (untuk liburan) atau paket operator lokal (untuk tinggal jangka panjang). | 5-10 menit |
| **4. Mengaktifkan** | "Saya sudah punya kode QR – lalu apa?" | Buka Pengaturan > Seluler > Tambahkan eSIM, pindai kode QR, dan tunggu. | 2 menit |
| **5. Koneksi pertama** | "Katanya sudah aktif tapi tidak ada sinyal – ada yang salah?" | Tunggu hingga 10-15 menit agar ponsel menemukan menara lokal. Nyalakan Data Roaming. | Hingga 15 menit |
| **6. Pemecahan masalah** | "Masih tidak berfungsi – apa yang harus saya lakukan?" | Periksa Wi-Fi, Data Roaming, pengaturan APN, atau status kunci operator. | 5-10 menit |
| **7. Menggunakan paket Anda** | "Sudah terhubung – sekarang bagaimana mengelola data dan pengaturan?" | Jadikan lini baru Anda sebagai default untuk data, pertahankan SIM fisik untuk panggilan (dual SIM). | N/A |

**Total waktu dari mulai hingga terhubung:** Biasanya 10-15 menit. Sediakan hingga 30 menit jika Anda mengalami masalah.


## Apa Itu eSIM?

eSIM (Embedded Subscriber Identity Module) adalah chip kecil yang dapat diprogram dan disolder permanen ke motherboard ponsel Anda selama proses manufaktur. Ia menjalankan fungsi yang sama persis dengan kartu SIM plastik tradisional – membuktikan identitas Anda ke jaringan seluler – tetapi 100% digital.

Karena dapat ditulis ulang, Anda dapat berganti operator atau menambahkan paket data tanpa perlu mengeluarkan baki SIM atau menunggu kartu fisik tiba lewat pos. Teknologi ini diatur oleh [standar GSMA SGP.22](https://www.gsma.com/esim/), yang menjamin interoperabilitas global antar perangkat dan operator. [Halaman dukungan resmi Apple untuk eSIM](https://support.apple.com/en-us/HT212780) menyediakan informasi terperinci tentang model iPhone yang kompatibel, dan [halaman dukungan eSIM resmi Android](https://support.google.com/android/answer/11241215) mencakup perangkat Android.

**Bayangkan seperti ini:** SIM fisik seperti kunci plastik yang Anda bawa-bawa. eSIM seperti kunci digital yang berada di ponsel Anda – Anda bisa mendapatkan kunci baru yang dikirim secara elektronik tanpa pernah mengunjungi tukang kunci.


## Bagaimana Aktivasi eSIM Bekerja?

Saat Anda membeli SIM fisik, data jaringan sudah tertanam di chip. Dengan eSIM, chip di ponsel Anda awalnya kosong. Proses aktivasi hanyalah mengisi chip kosong itu dengan data operator Anda.

Berikut yang terjadi di balik layar:

- **Server SM-DP+:** Operator Anda menyimpan profil digital unik Anda di server aman bernama SM-DP+ (Subscription Manager Data Preparation). Anggap sebagai gudang digital tempat profil Anda menunggu hingga Anda siap mengunduhnya.

- **Jabat Tangan (Handshake):** Saat Anda memindai kode QR, ponsel Anda membacanya, terhubung ke internet, dan menghubungi server spesifik tersebut.

- **Unduhan:** Ponsel Anda mengunduh profil secara aman dan menginstalnya ke chip tertanam. Setelah terinstal, ia dapat terhubung ke menara seluler lokal persis seperti SIM fisik.

### Apa Itu Kode Konfirmasi eSIM?

Beberapa operator memerlukan **kode konfirmasi** (juga disebut kode aktivasi atau kode verifikasi) selama proses pengaturan. Ini adalah kode 4 hingga 8 digit yang Anda masukkan setelah memindai kode QR atau saat entri manual.

**Di mana menemukannya:** Kode konfirmasi biasanya ada di email yang sama dengan kode QR Anda. Cari bagian berlabel "Confirmation Code," "Activation Code," "Verification Code," atau "SM-DP+ Code."

**Mengapa beberapa operator memintanya:** Ini menambah lapisan keamanan ekstra – bahkan jika seseorang mencuri kode QR Anda, mereka tidak dapat mengaktifkan profil tanpa kode konfirmasi.

**Bagaimana jika Anda tidak menemukannya:** Periksa folder spam Anda. Jika tidak ada di sana, hubungi dukungan penyedia Anda dengan nomor pesanan Anda.

> 💡 **Tips Pro:** Karena profil harus diunduh dari server, Anda benar-benar harus memiliki koneksi internet aktif (Wi-Fi) untuk menyelesaikan pengaturan. Ini tidak dapat dilakukan secara offline. Jika Anda sedang bepergian dan tidak memiliki Wi-Fi, gunakan Wi-Fi gratis bandara atau hotspot seluler dari ponsel teman.

### Bisakah Mengaktifkan Tanpa Wi-Fi?

**Tidak. Ini mustahil.**

Profil harus diunduh dari server SM-DP+ operator melalui internet. Tanpa koneksi internet, ponsel Anda tidak punya cara untuk menjangkau server dan mengunduh profil.

**Apa yang harus dilakukan jika Anda tidak punya Wi-Fi:**
- Gunakan Wi-Fi gratis bandara (sebagian besar bandara internasional menyediakannya)
- Gunakan hotspot seluler milik teman
- Gunakan Wi-Fi kafe atau hotel
- Beli SIM fisik terlebih dahulu (sebagai cadangan) dan gunakan koneksi datanya untuk mengatur yang digital

**Penting:** Instal paket Anda **sebelum meninggalkan rumah** saat masih di Wi-Fi rumah Anda. Ini adalah tips terpenting bagi para traveler.

### Aktivasi eSIM vs Unduhan eSIM

Orang sering menggunakan kedua istilah ini secara bergantian, tetapi keduanya sedikit berbeda:

| Istilah | Arti Sebenarnya |
|------|----------------------|
| **Unduhan** | Tindakan teknis memindahkan profil dari server operator ke ponsel Anda (berlangsung 10–60 detik) |
| **Aktivasi** | Keseluruhan proses – memeriksa kompatibilitas, membeli paket, memindai kode QR, mengunduh profil, dan terhubung ke jaringan |

**Dalam praktiknya:** Ketika seseorang berkata "Saya sedang mengaktifkan eSIM saya," mereka biasanya bermaksud keseluruhan proses. Ketika operator berkata "profil berhasil diunduh," maksudnya transfer teknis telah selesai. Bagi kebanyakan pengguna, perbedaannya tidak penting – cukup ikuti langkah-langkahnya dan Anda akan terhubung.


## Daftar Periksa Aktivasi eSIM

**Selesaikan daftar periksa ini SEBELUM Anda mencoba mengatur paket digital Anda:**

| Langkah | Pemeriksaan | Cara Verifikasi |
| :--- | :--- | :--- |
| **1** | Ponsel Anda mendukungnya | Panggil `*#06#` – cari EID. Jika tidak ada EID, berhenti – Anda butuh SIM fisik. |
| **2** | Ponsel Anda bebas kunci operator | Pengaturan > Umum > Tentang > Carrier Lock – harus tertulis "No SIM restrictions." |
| **3** | Anda memiliki koneksi Wi-Fi yang stabil | Uji dengan memuat sebuah situs web. Wi-Fi publik mungkin memblokir server operator – coba jaringan lain jika pengaturan gagal. |
| **4** | Anda memiliki kode QR ATAU kode aktivasi + alamat SM-DP+ | Kode QR kedaluwarsa setelah 30–90 hari – periksa email Anda untuk tanggal kedaluwarsa. |
| **5** | Anda memiliki kode konfirmasi (jika diperlukan) | Periksa email Anda untuk kode 4–8 digit. Beberapa operator memerlukannya. |
| **6** | iOS atau Android Anda sudah yang terbaru | Buka Pengaturan > Pembaruan Perangkat Lunak. Versi OS lama mungkin memiliki bug. |

> ⚠️ **Peringatan:** Jangan pernah menghapus profil saat statusnya "Mengaktifkan" atau jika Anda tidak mendapatkan sinyal. Menghapus profil biasanya berarti Anda tidak dapat memindai kode QR lagi, dan Anda harus menghubungi dukungan pelanggan untuk penggantian.


## SIM Fisik vs SIM Digital

| Fitur | SIM Fisik Tradisional | eSIM Digital |
| :--- | :--- | :--- |
| **Format** | Chip plastik yang dapat dilepas | Chip digital tertanam |
| **Waktu Aktivasi** | Berhari-hari (menunggu kiriman) atau di toko | Instan (via internet) – 2 menit |
| **Berganti Operator** | Perlu mengganti kartu secara fisik | Dilakukan melalui Pengaturan ponsel |
| **Beberapa Profil** | Biasanya terbatas 1–2 slot | Dapat menyimpan 5–8 profil (tergantung ponsel) |
| **Keamanan** | Bisa hilang, dicuri, atau rusak | Tidak dapat dilepas secara fisik jika ponsel dicuri |
| **Membeli sebelum perjalanan** | ❌ Harus menunggu kiriman atau membeli di tujuan | ✅ Beli online kapan saja, di mana saja |
| **Berpindah antar ponsel** | Mudah – cukup pindahkan kartu | Profil perjalanan hanya sekali instal; profil operator mungkin dapat dipindahkan |
| **Bisakah keduanya aktif?** | N/A – hanya satu SIM fisik per slot | ✅ Ya – digital + fisik dapat aktif bersamaan (dual SIM) |

### Apa yang Terjadi pada SIM Fisik Anda Saat Menambahkan Paket Digital?

**Tidak sama sekali.** SIM fisik Anda tetap sepenuhnya aktif dan independen.

Saat Anda mengatur paket digital:
- SIM fisik Anda terus berfungsi normal untuk panggilan, pesan, dan data (jika Anda menjadikannya lini data).
- Paket digital menambahkan lini kedua ke ponsel Anda.
- Anda dapat memilih lini mana yang digunakan untuk data, panggilan, dan pesan.
- Kedua lini dapat aktif pada saat yang sama (dual SIM dual standby).

**Bayangkan seperti ini:** SIM fisik Anda adalah nomor telepon utama Anda. Paket digital adalah lini tambahan (seperti kartu SIM kedua) yang dapat Anda nyalakan dan matikan sesuai kebutuhan.

### Bisakah Satu Profil Digunakan di Beberapa Perangkat?

**Tidak. Ini mustahil.**

Setiap profil terikat secara kriptografis pada **EID** (eUICC Identifier) dari perangkat tempat ia diaktifkan. EID ponsel Anda bersifat unik – seperti nomor seri untuk perangkat keras eSIM Anda.

Jika Anda mencoba memindai kode QR yang sama di dua ponsel, ponsel kedua akan menerima kesalahan: "Kode QR sudah digunakan" atau "Aktivasi gagal."

**Apa yang bisa Anda lakukan sebagai gantinya:**
- Beli paket terpisah untuk setiap perangkat
- Gunakan Personal Hotspot dari ponsel Anda untuk membagikan data ke tablet atau laptop Anda
- Jika Anda memiliki paket berbasis operator (bukan perjalanan), beberapa operator mengizinkan transfer antar perangkat (lihat [panduan transfer eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/) kami)

**Pengecualian:** Beberapa operator menawarkan paket "multi-perangkat" di mana Anda dapat memiliki beberapa profil dalam akun yang sama – tetapi setiap perangkat tetap mendapatkan profil uniknya sendiri. Paket dibagikan antar perangkat, tetapi profilnya spesifik per perangkat.


## Cara Mengaktifkan eSIM

Tergantung operator dan perangkat Anda, ada tiga cara utama untuk memicu pengaturan. Untuk panduan lengkap di semua model ponsel, lihat **[panduan aktivasi eSIM umum](/faq/how-to-activate-an-esim/)** kami.

### Memindai Kode QR
Ini adalah pendekatan standar untuk kebanyakan **paket perjalanan**.

1. Buka **Pengaturan > Seluler** (atau Data Seluler).
2. Ketuk **Tambahkan eSIM** atau **Tambahkan Paket Data**.
3. Pilih **Gunakan Kode QR**.
4. Pindai kode QR yang diberikan operator Anda dan ikuti petunjuk di layar.
5. Jika diminta, masukkan **kode konfirmasi** Anda (4–8 digit dari email Anda).
6. Tunggu profil diunduh (berlangsung 10–60 detik).
7. Beri label pada paket Anda (misalnya, "Perjalanan Jepang" atau "Data AS").

### Entri Manual
Jika kamera Anda rusak atau Anda tidak dapat memindai kode QR (misalnya, kodenya ada di ponsel yang sedang Anda atur), Anda dapat memasukkan detailnya secara manual.

1. Di layar pemindaian kode QR, ketuk **Masukkan Detail Secara Manual** di bagian bawah.
2. Masukkan **Alamat SM-DP+** dan **Kode Aktivasi** yang diberikan di email konfirmasi Anda.
3. Jika operator Anda memerlukan **kode konfirmasi**, masukkan saat diminta.
4. Tunggu profil diunduh dan diaktifkan.

### Push Aplikasi Operator
Banyak operator modern memungkinkan Anda mengatur langsung melalui aplikasi mereka hanya dengan satu tekanan tombol. Aplikasi secara otomatis berkomunikasi dengan pengaturan ponsel Anda untuk menginstal profil tanpa perlu kode QR.

**Cara kerjanya:**
1. Unduh aplikasi operator Anda (misalnya, T-Mobile, Verizon, Orange, EE).
2. Masuk ke akun Anda.
3. Cari "Aktifkan eSIM" atau "Dapatkan eSIM" di aplikasi.
4. Ketuk tombolnya – aplikasi secara otomatis mengirim profil ke ponsel Anda.
5. Ikuti petunjuk di layar untuk menyelesaikan pengaturan.

> 💡 **Tips Pro:** Pengaturan berbasis aplikasi biasanya adalah metode tercepat (di bawah 1 menit) dan tidak memerlukan pemindaian kode QR. Ini juga lebih kecil kemungkinannya mengalami kesalahan seperti "kode QR tidak valid."


## Cara Memeriksa Apakah Ponsel Anda Mendukung eSIM

Sebelum Anda bahkan mencoba mengatur paket digital, Anda perlu memastikan bahwa ponsel Anda benar-benar memiliki perangkat keras yang diperlukan. Hal terakhir yang Anda inginkan adalah membeli paket perjalanan hanya untuk mengetahui bahwa ponsel Anda tidak mendukungnya.

### Pemeriksaan EID Universal

Ini adalah cara tercepat dan paling andal untuk menjawab **"apakah ponsel saya punya eSIM"** atau **"apakah ponsel saya mendukung eSIM"**.

1. Buka **aplikasi telepon** di ponsel Anda (aplikasi yang Anda gunakan untuk menelepon).
2. Panggil `*#06#` (seperti nomor telepon biasa) dan tekan panggil.
3. Layar akan muncul dengan pengenal perangkat Anda. Cari nomor berlabel **EID** (Embedded Identity Document) – seharusnya berupa kode 32 digit.
   - **Jika Anda melihat EID:** Selamat – ponsel Anda memiliki perangkat kerasnya. Anda dapat melanjutkan pengaturan.
   - **Jika Anda hanya melihat nomor IMEI (IMEI1, IMEI2) dan tidak ada EID:** Ponsel Anda **tidak** mendukung SIM digital. Anda harus menggunakan SIM fisik.

Metode ini bekerja di iPhone (semua model dengan eSIM) dan hampir semua ponsel Android, termasuk Samsung, Google Pixel, OnePlus, Motorola, dan Xiaomi.

> 💡 **Tips Pro:** Jika Anda memiliki iPhone dan ingin tahu **cara memeriksa eSIM di iPhone**, ini adalah kode yang sama persis. Di iPhone, Anda juga dapat menemukan EID di **Pengaturan > Umum > Tentang** – gulir ke bagian **Digital SIM** atau **Available SIM**.

### Memeriksa melalui Pengaturan

Jika Anda lebih memilih tidak memanggil kode, atau jika `*#06#` tidak berfungsi di perangkat Anda (jarang, tetapi terjadi pada beberapa ponsel yang terkunci operator), Anda dapat menemukan EID atau menu eSIM melalui pengaturan ponsel Anda.

**Di iPhone (iOS):**
- Buka **Pengaturan > Umum > Tentang**.
- Gulir ke bawah hingga Anda melihat **Digital SIM** atau **Available SIM**.
- Anda akan menemukan **EID** Anda tercantum di sana.
- Selain itu, Anda dapat membuka **Pengaturan > Seluler** dan mencari opsi **Tambahkan eSIM** atau **Tambahkan Paket Seluler**. Jika abu-abu atau hilang, iPhone Anda mungkin model Tiongkok Daratan (yang tidak memiliki eSIM) atau terkunci operator.

**Di Samsung (One UI):**
- Buka **Pengaturan > Koneksi > Pengelola Kartu SIM**.
- Jika Anda melihat opsi seperti **Tambahkan eSIM** atau **Unduh eSIM**, ponsel Anda mendukungnya.
- Untuk menemukan EID, buka **Pengaturan > Tentang Ponsel > Informasi Status** – cari **EID**.

**Di Google Pixel dan Android Murni:**
- Buka **Pengaturan > Jaringan & Internet > Jaringan Seluler**.
- Cari **Tambahkan Operator** atau **Unduh SIM sebagai gantinya?**.
- Untuk menemukan EID: **Pengaturan > Tentang Ponsel > Status SIM** – EID akan muncul jika ada.

**Di OnePlus, Xiaomi, Motorola (Android):**
- Jalurnya sedikit berbeda, tetapi umumnya: **Pengaturan > Jaringan & Internet > Jaringan Seluler > Lanjutan > Tambahkan eSIM**.
- Untuk memeriksa di Android, panggil `*#06#` – berlaku secara universal.

### Menggunakan IMEI untuk Memeriksa Kompatibilitas

Jika Anda tidak memiliki akses ke ponsel Anda (misalnya, Anda membeli perangkat bekas secara online), Anda dapat menggunakan nomor IMEI ponsel untuk memeriksa dukungan:

1. Temukan nomor IMEI – panggil `*#06#` di perangkat, atau lihat di **Pengaturan > Tentang Ponsel**.
2. Buka **pemeriksa kompatibilitas eSIM** online (banyak penyedia menyediakan alat pencarian IMEI gratis).
3. Masukkan IMEI. Alat tersebut akan memberi tahu Anda apakah model perangkat spesifik tersebut mendukung SIM digital.

> Penting: IMEI saja tidak berisi info eSIM, tetapi mengidentifikasi model ponsel Anda secara tepat. Alat-alat tersebut mencocokkan IMEI dengan database produsen.

### Uji Coba Gratis

Tidak ada yang mengalahkan uji nyata. **[eSIM uji coba gratis Roami](/free-esim/)** hanya butuh 2 menit untuk diinstal dan memastikan ponsel Anda siap sebelum Anda mengeluarkan uang untuk paket lengkap.

### Perbedaan Model Regional

Bahkan jika model ponsel Anda "seharusnya" mendukung SIM digital, varian regional bisa menonaktifkannya:

| Wilayah/Model | Dukungan | Mengapa? |
| :--- | :--- | :--- |
| **iPhone (Tiongkok Daratan)** | ❌ Tidak | Perangkat keras dual SIM fisik – chip digital dihilangkan |
| **Samsung S20 FE (operator AS)** | ❌ Tidak | Dinonaktifkan operator untuk mengurangi biaya |
| **Google Pixel 4a (Jepang)** | ❌ Tidak | Dinonaktifkan operator (Docomo/SoftBank) |
| **Samsung Galaxy seri A (AS)** | ⚠️ Bervariasi | Beberapa model punya, beberapa tidak |
| **Xiaomi (ROM Tiongkok)** | ❌ Tidak | Model domestik Tiongkok tidak memiliki perangkat kerasnya |
| **Huawei (domestik Tiongkok)** | ❌ Tidak | Tanpa layanan Google, tanpa SIM digital |

**Yang harus dilakukan:** Selalu periksa EID menggunakan `*#06#` – ini adalah tes yang paling menentukan. Jangan berasumsi ponsel Anda mendukungnya hanya karena Anda melihat postingan forum yang mengatakannya.

### Bagaimana Jika Ponsel Anda Tidak Kompatibel?

Jika Anda sudah melalui semua langkah ini dan tidak menemukan EID atau menu eSIM, ponsel Anda tidak dapat menggunakan SIM digital. Anda memiliki tiga opsi:

- **Gunakan SIM perjalanan fisik** – banyak penyedia juga mengirimkan kartu SIM fisik.
- **Beli SIM lokal di tujuan Anda** – tetap berfungsi di ponsel mana pun.
- **Upgrade ke ponsel yang lebih baru** – pertimbangkan Google Pixel 6a, Samsung Galaxy S21 atau lebih baru, atau iPhone XR atau lebih baru (kecuali model Tiongkok Daratan).


## Jalur Aktivasi Berdasarkan Merek Ponsel

| Merek Ponsel | Jalur ke "Tambahkan eSIM" | Catatan |
|-------------|-----------------|-------|
| **iPhone** | Pengaturan > Seluler > Tambahkan eSIM > Pindai Kode QR | Juga bisa melalui Pengaturan > Umum > Tentang > Tambahkan eSIM |
| **Samsung** | Pengaturan > Koneksi > Pengelola Kartu SIM > Tambahkan eSIM | Memerlukan One UI 4.0+ |
| **Google Pixel** | Pengaturan > Jaringan & Internet > Jaringan Seluler > Tambahkan Operator | Jalur Android murni |
| **OnePlus** | Pengaturan > Wi-Fi & Jaringan > SIM & Jaringan > Tambahkan eSIM | OxygenOS 13+ |
| **Motorola** | Pengaturan > Jaringan & Internet > Jaringan Seluler > Lanjutan > Operator > Tambahkan eSIM | Android 12+ |
| **Xiaomi (global)** | Pengaturan > Jaringan Seluler > Kartu SIM > Tambahkan eSIM | ROM Tiongkok tidak memiliki eSIM |
| **Huawei (global)** | Pengaturan > Jaringan Seluler > eSIM > Tambahkan profil eSIM | Hanya versi global |


## Kesalahan Aktivasi eSIM Umum & Cara Memperbaikinya

| Kesalahan / Gejala | Penyebab Paling Mungkin | Solusi |
|----------------|-------------------|-----|
| **"Cellular Plan Cannot Be Added"** | Ponsel terkunci operator, atau kode QR sudah digunakan (sekali pakai). | Verifikasi ponsel tidak terkunci: Pengaturan > Umum > Tentang > Carrier Lock harus tertulis "No SIM restrictions." Jika tidak terkunci, minta kode QR baru. |
| **Membeku di "Mengaktifkan..."** | Koneksi Wi-Fi terputus, atau server operator sibuk. | JANGAN hapus profilnya. Nyalakan Mode Pesawat selama 30 detik, lalu matikan. Restart ponsel jika masih membeku. |
| **"Kode QR Tidak Valid"** | Kode QR kedaluwarsa atau rusak. | Minta kode QR baru dari penyedia Anda. Coba entri manual sebagai gantinya. |
| **Tidak ada sinyal setelah selesai** | Data Roaming tidak diaktifkan, atau pengaturan APN hilang. | Nyalakan Data Roaming. Konfigurasikan APN secara manual (lihat tabel di bawah). |
| **Profil muncul tetapi tidak ada data** | Lini data default diatur ke SIM fisik. | Buka Pengaturan > Seluler > Data Seluler – pilih lini baru Anda sebagai lini data. |
| **"eSIM Tidak Didukung" di iPhone** | iPhone dari Tiongkok Daratan (dual SIM fisik) atau lebih lama dari XR/SE2. | Periksa model di Pengaturan > Umum > Tentang. Model Tiongkok tidak memiliki eSIM. |
| **Pemindaian kode QR tidak berfungsi** | Izin kamera ditolak, atau layar rusak. | Berikan izin kamera, atau gunakan metode entri manual. |
| **"Aktivasi gagal – server tidak dapat dijangkau"** | Wi-Fi memblokir koneksi (jaringan korporat, VPN). | Nonaktifkan VPN. Beralih ke jaringan Wi-Fi lain atau gunakan hotspot seluler. |
| **"Kode konfirmasi diperlukan"** | Operator Anda memerlukan kode verifikasi 4–8 digit. | Periksa email Anda untuk kodenya. Jika tidak ditemukan, hubungi dukungan. |
| **"Kode QR sudah digunakan"** | Kode QR telah dipindai di perangkat lain. | Paket perjalanan hanya sekali pakai – Anda membutuhkan kode QR baru dari penyedia Anda. |
| **Butuh lebih dari 15 menit untuk terhubung** | Ponsel kesulitan menemukan jaringan lokal. | Nyalakan/matikan Mode Pesawat. Pilih jaringan secara manual (Pengaturan > Seluler > [lini] > Pemilihan Jaringan). |
| **"Unduhan profil gagal"** | Koneksi Wi-Fi tidak stabil. | Dekati router. Coba jaringan Wi-Fi lain. Ulangi prosesnya. |
| **"Aktivasi gagal" setelah memindai** | Kode QR untuk wilayah atau operator yang berbeda. | Pastikan kode QR cocok dengan paket yang Anda beli. Hubungi penyedia untuk kode yang benar. |

### Konfigurasi APN Manual

Jika setelah pengaturan Anda mengalami **tidak ada koneksi data**, konfigurasikan APN secara manual:

| Penyedia | APN | Nama Pengguna | Kata Sandi |
|----------|-----|----------|----------|
| **Roami** | internet | (kosong) | (kosong) |
| **Airalo** | globaldata | (kosong) | (kosong) |
| **Holafly** | hola | (kosong) | (kosong) |
| **Nomad** | nbdata | (kosong) | (kosong) |
| **Orange** | orange.fr | (kosong) | (kosong) |
| **SFR** | sl2sfr | (kosong) | (kosong) |
| **T-Mobile (AS)** | fast.t-mobile.com | (kosong) | (kosong) |
| **AT&T (AS)** | nxgen | (kosong) | (kosong) |
| **Verizon (AS)** | vzwinternet | (kosong) | (kosong) |
| **EE (Inggris)** | everywhere | (kosong) | (kosong) |
| **O2 (Inggris)** | mobile.o2.co.uk | web | web |
| **Vodafone (Inggris)** | internet | (kosong) | (kosong) |
| **Three (Inggris)** | three.co.uk | (kosong) | (kosong) |
| **Google Fi** | h2g2 | (kosong) | (kosong) |

**Cara mengonfigurasi APN:**
- **iPhone:** Pengaturan > Seluler > Jaringan Data Seluler > isi kolom APN.
- **Android:** Pengaturan > Koneksi > Jaringan Seluler > Nama Titik Akses > buat APN baru.

Untuk pemecahan masalah tingkat lanjut, lihat **[Panduan Pemecahan Masalah eSIM Mendalam 2026](/faq/esim-deep-troubleshooting-guide-2026/)** dan **[Dual eSIM Tidak Berfungsi? 12 Solusi untuk iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** kami – banyak solusi berlaku di berbagai perangkat.


## Kesalahan Aktivasi Umum

Berdasarkan data dukungan kami, berikut adalah tiga kesalahan teratas yang paling sering menyandera orang:

### Mencoba Mengaktifkan Tanpa Wi-Fi

Ini adalah alasan nomor satu kegagalan aktivasi — profil hanya dapat diunduh dari server SM-DP+ operator melalui internet, seperti dijelaskan di bagian *Bisakah Mengaktifkan Tanpa Wi-Fi?* di atas.

**Cara menghindarinya:** Instal paket Anda sebelum meninggalkan rumah di Wi-Fi rumah Anda. Jika Anda sudah dalam perjalanan, cari Wi-Fi gratis bandara atau hotel sebelum mencoba.

### Tidak Menyalakan Data Roaming

Profil Anda terunduh dengan benar, tetapi Anda tidak mendapatkan sinyal. Masalahnya? Data Roaming masih dalam keadaan mati.

**Cara menghindarinya:** Setelah instalasi, buka Pengaturan > Seluler > [lini baru Anda] dan nyalakan Data Roaming. Ini diperlukan agar paket perjalanan berfungsi.

### Menghapus Profil di Tengah Aktivasi

Anda melihat "Mengaktifkan..." selama beberapa menit, panik, lalu menghapus profilnya. Sekarang Anda tidak bisa memindai ulang kode QR.

**Cara menghindarinya:** Bersabarlah. Tunggu hingga 15 menit. Jika masih membeku, restart ponsel Anda – jangan hapus profilnya. Jika Anda menghapusnya, Anda membutuhkan kode QR baru dari penyedia Anda.


## Pertanyaan Umum

**Bisakah saya menggunakan SIM fisik dan paket digital saya secara bersamaan?**
Ya! Kebanyakan ponsel pintar modern mendukung fungsi Dual SIM. Anda dapat menjaga SIM fisik Anda tetap aktif untuk panggilan dan pesan dari rumah, sambil menggunakan paket digital Anda murni untuk data lokal. Kedua lini aktif bersamaan (dual standby).

**Apakah mengatur paket digital menguras baterai saya lebih cepat?**
Menggunakan paket digital itu sendiri tidak menguras baterai. Namun, menjalankan dua lini aktif (Dual SIM) secara bersamaan dapat menyebabkan sedikit pengurasan baterai karena ponsel Anda terus-menerus mencari dua sinyal jaringan yang berbeda. Perbedaannya biasanya 2–5% per hari.

**Berapa lama keseluruhan prosesnya?**
Unduhan dan pengaturan biasanya memakan waktu kurang dari 2 menit. Namun, terhubung ke jaringan lokal untuk pertama kalinya terkadang bisa memakan waktu hingga 10-15 menit tergantung kekuatan sinyal. Jika lebih dari 15 menit, lihat tabel pemecahan masalah di atas.

**Bagaimana cara menemukan EID saya jika saya sudah memiliki paket yang terinstal?**
Di iPhone, buka **Pengaturan > Umum > Tentang** dan gulir ke bagian **Digital SIM**. Di Android, panggil `*#06#` – EID akan muncul di samping nomor IMEI.

**Bisakah saya memeriksa kompatibilitas menggunakan IMEI sebelum membeli ponsel bekas?**
Ya. Banyak alat **pemeriksa kompatibilitas eSIM** online menerima nomor IMEI. Anda juga dapat memeriksa spesifikasi resmi produsen untuk model tersebut. Ini sangat berguna saat membeli ponsel dari eBay atau marketplace barang bekas.

**Bisakah saya memindahkan paket saya dari ponsel lama ke yang baru?**
Ya – tetapi metodenya tergantung pada operator dan model ponsel Anda. Untuk instruksi langkah demi langkah yang mencakup kedua platform, lihat **[Cara Memindahkan eSIM Antara iPhone dan Android](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

**Apa perbedaan antara paket perjalanan dan paket operator lokal?**
Paket perjalanan hanya data, dibeli online sebelum perjalanan, dan aktif seketika melalui kode QR. Ia tidak memiliki nomor telepon. Paket operator lokal mencakup nomor telepon, memerlukan verifikasi ID, dan lebih cocok untuk tinggal jangka panjang. Lihat **[panduan eSIM Inggris](/united-kingdom-esim/)** kami untuk perbandingan terperinci.

**Bagaimana jika data saya pada paket perjalanan habis?**
Anda dapat mengisi ulang secara online melalui aplikasi atau situs web penyedia Anda – data baru ditambahkan secara otomatis tanpa memindai kode QR baru. Beberapa penyedia menawarkan isi ulang satu klik.

**Mengapa paket saya menampilkan "Tidak Ada Layanan" setelah pengaturan?**
Paling sering, Data Roaming tidak dinyalakan, atau ponsel Anda masih menggunakan SIM rumah untuk data. Periksa kembali kedua pengaturan tersebut. Pastikan juga ponsel Anda diatur untuk memilih jaringan secara otomatis. Lihat tabel pemecahan masalah di atas untuk solusi lainnya.

**Bisakah saya menggunakan paket Inggris di negara-negara Eropa lainnya?**
Hanya jika paket Anda mencakup roaming EU. Paket perjalanan sering mencakup roaming EU, sementara sebagian besar paket operator lokal Inggris (EE, Vodafone, Three) mengenakan sekitar £2–2.50/hari untuk penggunaan EU — paket prabayar bulanan O2 adalah pengecualian utama, mencakup roaming EU hingga batas 25GB. Periksa detail paket Anda sebelum bepergian.

**Apa itu kode konfirmasi dan mengapa saya membutuhkannya?**
Kode konfirmasi adalah kode 4–8 digit yang diperlukan oleh beberapa operator selama pengaturan. Ia menambah lapisan keamanan ekstra – bahkan jika seseorang mencuri kode QR Anda, mereka tidak dapat mengaktifkan profil tanpa kode konfirmasi. Temukan di email penyedia Anda.

**Bagaimana jika saya tidak memiliki Wi-Fi untuk mengaktifkan paket saya?**
Anda harus memiliki Wi-Fi – mustahil mengaktifkan tanpa koneksi internet. Gunakan Wi-Fi gratis bandara, hotspot seluler teman, atau Wi-Fi kafe/hotel. Praktik terbaik: instal sebelum meninggalkan rumah di Wi-Fi Anda sendiri.

**Bisakah saya menggunakan profil yang sama di ponsel dan tablet saya?**
Tidak – setiap profil terikat pada EID satu perangkat. Anda membutuhkan paket terpisah untuk setiap perangkat. Profil ponsel Anda tidak dapat digunakan di tablet atau jam tangan Anda.

**Apa cara termurah untuk menguji apakah ini berfungsi di ponsel saya?**
Ambil **[uji coba eSIM gratis dari Roami](/free-esim/)** – hanya butuh 2 menit, tanpa biaya, dan memastikan ponsel Anda siap sebelum Anda membeli paket berbayar.

**Berapa banyak profil yang dapat disimpan ponsel saya?**
Kebanyakan ponsel modern dapat menyimpan 5–8 profil, tetapi hanya satu atau dua yang dapat aktif pada satu waktu (tergantung model). iPhone 13 dan lebih baru mendukung dua aktif. iPhone lama (XR/11/12/SE) mendukung satu aktif ditambah satu SIM fisik.

**Apakah ponsel saya perlu dibuka kuncinya untuk menggunakan paket perjalanan?**
Ya – jika ponsel Anda terkunci operator, ia akan menolak profil dari jaringan lain. Periksa Pengaturan > Umum > Tentang > Carrier Lock – harus tertulis "No SIM restrictions." Hubungi operator Anda untuk meminta pembukaan kunci.

**Apa arti "aktivasi eSIM gagal"?**
Berarti profil tidak dapat diunduh atau diinstal dengan benar. Penyebab umum: tidak ada koneksi Wi-Fi, kode QR kedaluwarsa, masalah server operator, atau ponsel tidak kompatibel. Periksa tabel pemecahan masalah di atas untuk solusi spesifik.

**Bisakah saya mengaktifkan paket untuk ponsel orang lain?**
Ya – Anda dapat membeli paket dan meneruskan kode QR ke mereka. Namun, mereka harus memiliki ponsel yang kompatibel dan koneksi Wi-Fi yang stabil. Kode QR hanya dapat dipindai sekali, jadi pastikan mereka siap menginstalnya.


## Kesimpulan

Teknologi SIM digital telah sepenuhnya mengubah cara kita terhubung ke jaringan seluler – tidak ada lagi kartu plastik, penjepit kertas, atau antrean di toko operator. Dengan memahami prosesnya – mengunduh profil digital melalui server aman – Anda dapat dengan mudah memecahkan gangguan kecil mana pun. Dan bahkan sebelum memulai, mengetahui **cara memeriksa apakah ponsel saya kompatibel dengan eSIM** menggunakan `*#06#` atau pengaturan Anda akan menghemat waktu dan frustrasi Anda.

**3 hal terpenting untuk diingat:**
1. **Periksa EID terlebih dahulu** – panggil `*#06#`. Jika tidak ada EID, berhenti dan beli SIM fisik.
2. **Instal sebelum bepergian** – Anda membutuhkan Wi-Fi untuk mengaktifkan. Wi-Fi bandara mungkin memerlukan verifikasi SMS.
3. **Nyalakan Data Roaming** – ini diperlukan agar paket perjalanan berfungsi.

Jika Anda merencanakan perjalanan internasional dan ingin merasakan konektivitas instan, **eSIM Roami** menawarkan paket data kecepatan tinggi yang mulus di 190+ negara. Lewati biaya roaming, unduh profil Anda dalam hitungan detik, dan tetap terhubung begitu pesawat Anda mendarat.

👉 **Mencari paket?** Lihat [eSIM untuk AS](/united-states-esim/) atau [eSIM untuk Eropa](/europe-esim/) untuk menerapkan aktivasi ke praktik.

👉 **Belum yakin apakah ponsel Anda mendukungnya?** Periksa **[daftar kompatibilitas lengkap](/compatibility/)** kami.

👉 **Siap mencobanya?** Klaim [uji coba eSIM gratis](/free-esim/) – hanya butuh 2 menit dan memastikan semuanya berfungsi.

---

*Berdasarkan dokumentasi resmi Apple, standar GSMA, dan halaman dukungan Android per September 2026.*
## Sumber

- [GSMA — spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Mengatur eSIM di iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Mengatur eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — eSIM Android](https://support.google.com/android/answer/11241215)
