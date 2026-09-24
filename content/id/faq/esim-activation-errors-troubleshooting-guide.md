---
title: "eSIM Tidak Berfungsi? Perbaiki Kesalahan Kompatibilitas di 2026"
h1_title: "Cara Memperbaiki eSIM Tidak Berfungsi: Kesalahan Kompatibilitas di 2026"
description: "Terjebak dengan kesalahan eSIM? Pelajari cara memperbaiki kegagalan aktivasi, masalah transfer, dan boot loop di iPhone & Android. Diagnosis ponsel Anda dalam 2 menit."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["esim tidak berfungsi", "esim tidak didukung", "esim tidak kompatibel iphone", "tidak dapat mengaktifkan esim", "jaringan esim tidak tersedia", "esim tidak berpindah ke iphone baru", "tidak sengaja menghapus esim", "profil esim kedaluwarsa", "kode qr esim tidak valid", "cara memperbaiki esim di iphone", "kesalahan transfer esim", "esim tanpa layanan"]
date: 22026-09-15T00:00:00Z
lastmod: 22026-09-15T00:00:00Z
tags: ["eSIM", "Pemecahan Masalah", "Kesalahan Aktivasi", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

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


> **Catatan Editor:** Sebagian besar masalah "eSIM saya tidak berfungsi" ternyata adalah masalah ponsel, bukan masalah paket. Panduan ini menjawab pertanyaan yang harus Anda ajukan sebelum apa pun: *apakah ponsel saya bahkan mampu menggunakan eSIM?* Kami akan memandu Anda melalui pemeriksaan perangkat keras 2 menit, pengecualian model Tiongkok/Hong Kong, dan kunci operator — sehingga Anda tidak membuang satu jam untuk langkah aktivasi yang tidak akan pernah berfungsi di perangkat Anda.

> **Mencari perbaikan kode kesalahan?** Jika ponsel Anda lolos pemeriksaan perangkat keras di bawah tetapi Anda sedang menatap pesan tertentu ("Aktivasi gagal", "Tidak Ada Layanan", "QR tidak valid", kesalahan pemulihan 4013/4014), itu adalah masalah yang berbeda. Buka [Panduan Pemecahan Masalah eSIM Mendalam](/faq/esim-deep-troubleshooting-guide-2026/) kami untuk referensi kesalahan demi kesalahan.

## Apakah Ponsel Saya Bahkan Mampu Menggunakan eSIM?

Sebelum Anda membuka Pengaturan, memindai satu pun kode QR, atau menghubungi dukungan, pastikan bahwa ponsel Anda benar-benar memiliki perangkat keras embedded-SIM yang diperlukan. Satu pemeriksaan ini langsung mengeliminasi sekitar separuh dari semua kasus "eSIM tidak berfungsi".

### Pemeriksaan EID Universal

Buka aplikasi telepon di ponsel Anda dan ketik:

> **`*#06#`**

- Jika layar muncul dengan **EID 32 digit** (eUICC Identifier), ponsel Anda memiliki chip tertanam yang diperlukan untuk aktivasi SIM digital. ✅
- Jika layar hanya menampilkan nomor **IMEI** dan tidak ada EID, perangkat kerasnya tidak ada. ❌

**Apa yang harus dilakukan jika tidak ada EID yang muncul:** Berhenti di sini. Tidak ada pembaruan perangkat lunak, hack, atau metode "paksa" yang dapat menambahkan chip yang hilang — ini adalah absennya perangkat keras fisik. Gunakan SIM fisik sebagai gantinya, atau periksa Perbaikan #4 untuk ponsel yang *kelihatannya* seharusnya mendukung eSIM tetapi tidak.

### EID vs IMEI vs ICCID Dijelaskan

| Pengenal | Apa Itu | Apa yang Diberitahukannya kepada Anda |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 digit) | Mengidentifikasi model ponsel Anda — setiap ponsel memilikinya |
| **EID** | eUICC Identifier (32 digit) | Mengonfirmasi keberadaan chip embedded-SIM — hanya ponsel yang mampu eSIM yang memilikinya |
| **ICCID** | Integrated Circuit Card Identifier (19–20 digit) | Mengidentifikasi profil eSIM tertentu setelah terinstal |

> **Wawasan utama:** EID = perangkat keras ada. Jika Anda melihat EID, ponsel Anda secara fisik mampu menggunakan eSIM. Jika tidak, apa pun yang Anda instal tidak akan mengubahnya.

### Di Mana Menemukan Setiap Nomor

Ketiga nomor tersebut berada di tempat yang terlihat jelas begitu Anda mengetahui menunya. Berikut jalur tercepat ke masing-masing:

| Pengenal | Cara Tercepat | Lokasi Cadangan |
| :--- | :--- | :--- |
| **IMEI (15 digit)** | Panggil `*#06#` — nomor pertama yang ditampilkan | iPhone: **Pengaturan > Umum > Tentang**. Android: **Pengaturan > Tentang ponsel** |
| **EID (32 digit)** | Panggil `*#06#` dan gulir — nomor panjangnya yang dimulai dengan **8904** | iPhone: **Pengaturan > Umum > Tentang > EID**. Samsung: **Pengaturan > Tentang ponsel > Status** |
| **ICCID (19–20 digit)** | Hanya muncul setelah profil terinstal | iPhone: **Pengaturan > Umum > Tentang**. Android: **Pengaturan > Tentang ponsel > Status kartu SIM** |

> **Fakta berguna:** setiap EID dimulai dengan **"8904"** — awalan itu menandainya sebagai pengenal eUICC. Jika nomor panjang di layar dimulai dengan yang lain, Anda membaca nilai yang salah.

### Tes Tombol Tambahkan eSIM

Jika `*#06#` menampilkan EID tetapi Anda masih melihat "eSIM tidak didukung", buka **Pengaturan > Seluler** dan cari **"Tambahkan eSIM"** atau **"Tambahkan Paket Seluler"**. Jika opsinya ada tetapi gagal saat Anda memindai, kemungkinan besar Anda menghadapi **kunci operator** atau **pembatasan wilayah** — keduanya dibahas di bawah.

### Metode Pencarian di Pengaturan

Tidak ada aplikasi telepon yang mudah dijangkau (beberapa tablet dan perangkat lipat menyembunyikannya), atau `*#06#` memberi Anda layar yang membingungkan? Bilah pencarian ponsel Anda sendiri adalah pemeriksaan tercepat kedua.

- **iPhone:** Buka **Pengaturan**, geser ke bawah dari atas daftar untuk menampilkan kotak pencarian, dan ketik **"eSIM"**. Hasil **"Tambahkan eSIM"** atau **"Tambahkan Paket Seluler"** berarti fiturnya aktif.
- **Samsung:** Buka **Pengaturan**, ketuk **ikon kaca pembesar** di bagian atas, dan ketik **"eSIM"**. Jika **"Pengelola Kartu SIM"** (atau "Tambahkan paket seluler") muncul, varian Anda memiliki chipnya.
- **Pixel:** Buka **Pengaturan > Jaringan & internet > SIM**. Jika Anda melihat **"Unduh SIM sebagai gantinya?"**, Anda siap. Layar yang hanya mencantumkan SIM fisik Anda — tanpa opsi unduhan — berarti tidak ada chip eUICC.

> **Tidak ada hasil pencarian = tidak ada perangkat keras.** Jika ponsel yang dijual setelah sekitar 2018 tidak menampilkan apa pun untuk "eSIM" di pencarian Pengaturan, Anda hampir pasti memegang varian wilayah atau varian murah yang dikirim tanpa chip.

### Pencarian Nomor Model

Membeli perangkat bekas, atau memeriksa ponsel yang tidak dapat Anda nyalakan? Nomor model menyelesaikannya dalam hitungan detik.

- **iPhone:** **Pengaturan > Umum > Tentang > Nomor Model**, lalu ketuk nomornya untuk mengubahnya menjadi **pengenal berawalan A** (misalnya, **A2111**). Huruf-huruf sebelum **/A** pada nomor bagian mengkodekan wilayah penjualannya — peta sufiks lengkap ada di Bagian 2.
- **Samsung:** **Pengaturan > Tentang ponsel > Nomor model** (misalnya, **SM-S921U1**). Karakter terakhir adalah petunjuknya: **U** = operator AS, **U1** = AS tanpa kunci, **B** = Eropa/global, **0** = Tiongkok/Hong Kong (Snapdragon).
- **Pixel:** **Pengaturan > Tentang ponsel > Model**. String model Pixel berbeda per wilayah dan operator — varian Jepang dan beberapa varian operator AS membatasi eSIM, jadi silang periksa kode spesifiknya atau panggil `*#06#`.

> **Panduan praktis:** jika nomor model berakhir dengan sufiks Tiongkok/wilayah (atau sufiks operator AS pada Samsung), verifikasi dengan `*#06#` sebelum mengasumsikan eSIM berfungsi. Nomor model ditambah EID bersama-sama memberi Anda jawaban 100%.

### Mengapa Ponsel Bisa Menampilkan EID Tetapi Tetap Menolak eSIM

| Skenario | EID Ada? | eSIM Berfungsi? | Mengapa? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR dan lebih baru (global) | ✅ Ya | ✅ Ya | Dukungan penuh untuk profil SIM digital |
| iPhone XS/XR (model Tiongkok) | ❌ Tidak | ❌ Tidak | Perangkat keras dihilangkan untuk dual SIM fisik |
| Samsung S20 FE (operator AS) | ✅ Ya | ❌ Tidak | Operator menonaktifkan fitur ini di perangkat lunak |
| Google Pixel 4a (Jepang) | ✅ Ya | ❌ Tidak | Operator mengunci fungsionalitas ini |
| iPhone terkunci operator (AT&T/T-Mobile) | ✅ Ya | ❌ Tidak (untuk operator lain) | Kunci jaringan memblokir profil penyedia lain |
| iPhone tanpa kunci (wilayah mana pun) | ✅ Ya | ✅ Ya | Dukungan penuh |


## eSIM Tidak Didukung atau Tidak Kompatibel di iPhone

Jika Anda melihat **"eSIM not supported"**, **"this eSIM is not compatible with this iPhone"**, atau sekadar **"eSIM not compatible iPhone"**, penyebabnya hampir selalu salah satu dari lima hal ini — dan semuanya berkaitan dengan *perangkat* Anda, bukan paketnya.

### Model iPhone Anda Lebih Lama dari Perangkat Keras eSIM

Hanya iPhone dari **XR, XS, XS Max (2018) dan lebih baru** yang memiliki chip tertanam. iPhone 8, 8 Plus, dan iPhone X tidak, sehingga mereka selalu menampilkan **"eSIM not supported"** apa pun yang Anda coba. Chip eUICC memang tidak ada di papan-papan itu — ini adalah keterbatasan perangkat keras, bukan masalah pengaturan.

**Pemeriksaan cepat:** Panggil `*#06#`. EID 32 digit berarti Anda aman; hanya IMEI berarti tidak.

**Apa yang harus dilakukan:** Gunakan SIM fisik, atau upgrade ke iPhone XR atau lebih baru. Daftar resminya ada di [Apple Support — Mengatur eSIM di iPhone](https://support.apple.com/en-us/118670).

### iPhone Anda adalah Model Tiongkok Daratan

iPhone yang dijual di Tiongkok Daratan dikirim dengan **dua slot SIM fisik dan tanpa perangkat keras eSIM**. Regulasi Tiongkok mendorong ponsel pintar domestik ke arah dual SIM fisik, sehingga Apple menghilangkan chip tertanam pada unit-unit ini. Bahkan jika opsi "Tambahkan Paket Seluler" muncul, prosesnya tidak akan selesai — ini adalah satu-satunya alasan paling umum "eSIM tidak kompatibel dengan iPhone ini" di kalangan pembeli yang mendapatkan perangkatnya di Tiongkok atau melalui reseller tertentu.

**Cara mengidentifikasi:** **Pengaturan > Umum > Tentang > Nomor Model**. Jika berakhir dengan **"CH/A"**, itu adalah model Tiongkok Daratan. (Tabel sufiks lengkap ada di Bagian 2 di bawah.)

**Apa yang harus dilakukan:** Tidak ada cara untuk mengaktifkan eSIM pada perangkat CH/A. Gunakan SIM perjalanan fisik, atau jual ponselnya dan beli versi global.

### iPhone Anda Terkunci Operator

Beberapa operator — terutama di AS — mengunci iPhone ke jaringan mereka sendiri. Mencoba mengaktifkan profil dari penyedia lain (seperti eSIM perjalanan) kemudian menghasilkan "eSIM not supported" atau pesan "operator tidak mendukung". Perhatikan bahwa beberapa operator hanya mengunci slot SIM fisik sambil membiarkan slot eSIM terbuka, tetapi banyak yang mengunci keduanya.

**Cara memeriksa:** **Pengaturan > Umum > Tentang > Carrier Lock**. Seharusnya tertulis **"No SIM restrictions"**. Jika tertulis "SIM locked", Anda membutuhkan pembukaan kunci. Lihat Bagian 3 untuk panduan lengkap kunci operator.

### Versi iOS Anda Ketinggalan Zaman

Dukungan SIM digital meningkat pesat di iOS 16 dan seterusnya. Pada iOS 12 atau 13, beberapa profil operator modern tidak akan terinstal.

**Cara memeriksa:** **Pengaturan > Umum > Pembaruan Perangkat Lunak**.

**Apa yang harus dilakukan:** Perbarui ke iOS terbaru, hapus profil yang setengah terinstal, lalu pindai ulang kode QR.

### iPhone Ini Tidak Mendukung eSIM pada iPhone 14

iPhone 14 (versi AS) seharusnya selalu mendukung eSIM — model AS sama sekali tidak memiliki baki SIM fisik. Jika tetap muncul kesalahan ini, Anda sedang menghadapi **kegagalan perangkat keras eUICC** yang jarang terjadi. Hubungi Apple Support untuk diagnosis perangkat keras alih-alih mengejar pengaturan.

Untuk daftar iPhone lengkap per model, lihat [panduan kompatibilitas eSIM iPhone](/faq/iphone-11-esim-compatible/) kami.

Pengguna Samsung sebaiknya memeriksa [panduan eSIM Samsung Galaxy](/faq/samsung-s20-esim-compatible/), dan pengguna Pixel [panduan eSIM Google Pixel](/faq/google-pixel-6-esim-compatible/).


### eSIM Tidak Didukung: Perangkat Keras, Perangkat Lunak, atau Operator

Setiap kasus "eSIM not supported" — di ponsel mana pun, operator mana pun — masuk ke salah satu dari tiga kategori. Menamai kategorinya langsung memberi tahu Anda apakah masalahnya bisa diperbaiki.

| Kategori | Penampakannya | Bisa Diperbaiki? | Langkah Anda |
| :--- | :--- | :--- | :--- |
| **Perangkat keras** | Tidak ada EID di `*#06#`; iPhone pra-2018; model Tiongkok (CH/A); Android murah tanpa eUICC | ❌ Tidak | SIM fisik, atau upgrade ponsel |
| **Perangkat lunak** | EID ada, tetapi fiturnya tersembunyi atau OS-nya lama (Samsung S20 FE dinonaktifkan operator, iOS usang) | ✅ Biasanya | Perbarui OS, atau hapus pembatasan operator |
| **Operator** | EID ada, menu terlihat, tetapi aktivasi paket penyedia lain gagal | ✅ Ya | Buka kunci perangkat (Bagian 3), lalu pindai ulang |

**Tes routing 30 detik:** panggil `*#06#`.
- **Tidak ada EID** → perangkat keras. Berhenti di sini — apa pun yang Anda instal tidak akan mengubahnya.
- **EID ada, tetapi alur "Tambahkan eSIM" gagal** → perangkat lunak atau operator. Keduanya bisa diperbaiki, jadi teruslah membaca.

Satu hasil tunggal itu mengarahkan Anda ke perbaikan yang benar untuk sekitar 9 dari 10 laporan "tidak didukung" yang kami lihat di Roami.


## Panduan Model Tiongkok, Hong Kong, dan Makau

Di mana ponsel Anda dijual menentukan perangkat keras yang dimilikinya. Ini adalah cara tercepat untuk memastikan atau mengeliminasi situasi tanpa-eSIM regional.

### Referensi Cepat Model Tiongkok

| Akhiran Nomor Model | Wilayah | Dukungan eSIM |
| :--- | :--- | :--- |
| **CH/A** | Tiongkok Daratan | ❌ Tidak (dual SIM fisik) |
| **HK/A** | Hong Kong | ⚠️ Bervariasi (beberapa model mendukung SIM fisik + digital) |
| **LL/A** | AS | ✅ Ya |
| **ZA/A** | Kanada | ✅ Ya |
| **J/A** | Jepang | ✅ Ya (kecuali beberapa model operator) |
| **B/A** | Inggris/Eropa | ✅ Ya |
| **X/A** | Australia/Selandia Baru | ✅ Ya |

### Status eSIM iPhone Tiongkok Daratan

- **Semua iPhone yang dijual di Tiongkok Daratan** (kecuali seri iPhone 16) memiliki dual SIM fisik dan tanpa eSIM.
- **Ponsel Android Tiongkok** — Xiaomi, Oppo, Vivo, Huawei — yang dijual di dalam negeri juga biasanya tidak memiliki chip eSIM.
- **Jika Anda membawa ponsel internasional ke Tiongkok:** ia akan berfungsi dengan eSIM perjalanan internasional, tetapi operator lokal Tiongkok tidak menawarkan eSIM kepada turis, jadi Anda tetap membutuhkan paket perjalanan dari penyedia seperti Roami.

### Status eSIM iPhone Hong Kong

- **Model iPhone:** iPhone Hong Kong biasanya mendukung **eSIM + SIM fisik** (satu dari masing-masing) atau dual SIM fisik tergantung model tepatnya. Periksa sufiks model Anda.
- **Operator:** beberapa operator Hong Kong (CMHK, 1010, SmarTone) menawarkan eSIM kepada pelanggan pascabayar, tetapi eSIM prabayar jarang.
- **Traveler:** eSIM perjalanan internasional lebih sederhana dan lebih andal daripada mencoba mendapatkan eSIM lokal Hong Kong.

### Status eSIM iPhone Makau

- **Mirip dengan Hong Kong:** kebanyakan iPhone Makau diimpor dari Hong Kong dan mendukung eSIM + SIM fisik.
- **CTM** (operator utama Makau) menawarkan eSIM kepada pelanggan pascabayar tetapi tidak kepada turis.

### Mengapa Model Tiongkok Menghilangkan eSIM

Ini bukan langkah pemangkasan biaya oleh Apple atau merek Android — ini adalah regulasi. Tiongkok Daratan mewajibkan ponsel yang dijual di sana disertifikasi untuk dual SIM fisik, dan profil eSIM yang dapat ditulis ulang tidak sesuai dengan kerangka domestik tersebut. Hasil praktisnya:

- **Apple** mengirim iPhone Tiongkok Daratan dengan **dua slot nano-SIM fisik** dan tanpa chip eUICC.
- **Xiaomi, Oppo, Vivo, Honor, dan Huawei** menghilangkan eSIM dari versi domestik Tiongkok mereka bahkan ketika versi global ponsel yang sama memilikinya.
- **Ponsel Tiongkok yang dibawa ke luar negeri tetap tidak bisa mendapatkan eSIM kembali** — itu absennya perangkat keras, bukan blokir perangkat lunak. Sebaliknya juga berlaku: ponsel internasional yang masuk ke Tiongkok berfungsi dengan eSIM perjalanan, tetapi tiga operator besar Tiongkok (China Mobile, China Unicom, China Telecom) tidak menjual eSIM kepada turis.

**Solusinya:** jika Anda membeli ponsel di Tiongkok Daratan, siapkan SIM perjalanan fisik — atau beli ponsel model global. Tidak ada pembukaan kunci, jailbreak, atau aplikasi yang dapat menambahkan chip yang hilang.

### Mengidentifikasi Model Anda Melalui Nomor A

Sufiks nomor bagian (CH/A, LL/A, dan seterusnya) adalah filter cepatnya, tetapi **nomor A** adalah ID yang presisi. Ambil iPhone 11 sebagai pola yang diikuti setiap generasi:

| Model iPhone 11 | Wilayah | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Amerika Serikat | ✅ Ya |
| **A2221** | Tiongkok Daratan | ❌ Tidak (dual SIM fisik) |
| **A2223** | Hong Kong / Makau | ✅ Ya (eSIM + fisik) |

**Cara menggunakannya:** temukan nomor A Anda (**Pengaturan > Umum > Tentang > Nomor Model**, lalu ketuk nomornya untuk menampilkan kode berawalan A), dan cocokkan dengan daftar model Apple. Jika penjual mengiklankan "iPhone eSIM global tanpa kunci" tetapi nomor A-nya adalah kode Tiongkok, iklannya salah — tinggalkan atau siapkan SIM fisik.


## Kunci Operator dan Cara Menghapusnya

Kunci operator adalah penyebab terbesar kedua ponsel yang sepenuhnya mampu menolak eSIM. Ini adalah pembatasan perangkat lunak yang ditempatkan operator Anda pada perangkat, bukan batasan perangkat keras.

### Apa yang Dilakukan Kunci Operator

Ketika ponsel "terkunci SIM", ia hanya akan menerima SIM dan profil eSIM dari operator yang menjualnya. Mencoba menambahkan eSIM perjalanan dari penyedia lain memicu "eSIM not supported" atau "SIM not supported". Chip tertanamnya ada dan berfungsi — operator hanya memblokir akses ke sana.

### Cara Memeriksa Status Kunci Anda

1. Di iPhone: **Pengaturan > Umum > Tentang > Carrier Lock**. Seharusnya tertulis **"No SIM restrictions"**.
2. Di Android (Samsung): **Pengaturan > Tentang ponsel > Status** dan cari kolom kunci SIM.
3. Di Android (Pixel): **Pengaturan > Tentang ponsel > Status SIM**.

### Kebijakan Pembukaan Kunci Operator AS

| Operator | Persyaratan Pembukaan Kunci |
| :--- | :--- |
| **AT&T** | Perangkat lunas dibayar penuh dan aktif selama 60 hari sebelum pembukaan kunci |
| **T-Mobile** | Perangkat lunas dibayar dan aktif selama 40 hari; ajukan melalui aplikasi T-Mobile |
| **Verizon** | Kebanyakan ponsel terbuka kunci otomatis 60 hari setelah pembelian |

### Cara Membuka Kunci Perangkat Anda

1. **Ajukan permintaan pembukaan kunci ke operator Anda** — biasanya gratis begitu ponsel lunas dibayar, dan kebanyakan operator AS memungkinkan Anda mengajukannya dari aplikasi atau formulir web.
2. **Tunggu konfirmasi** — operator mendorong pembukaan kunci; Anda mungkin perlu me-restart ponsel.
3. **Verifikasi** — periksa kembali kolom Carrier Lock hingga tertulis "No SIM restrictions".
4. **Lalu aktifkan** — setelah terbuka kuncinya, pindai ulang kode QR eSIM perjalanan Anda.

> **Catatan:** kunci operator adalah pembatasan tingkat ponsel, bukan tingkat paket. Membuka kunci perangkat Anda tidak membatalkan kontrak Anda — hanya membebaskan perangkat untuk menggunakan SIM dan eSIM penyedia lain.

### Operator AS Lainnya dan Kebijakan Pembukaan Kunci MVNO

Tiga raksasa bukan satu-satunya yang sering dihadapi orang. Ponsel prabayar dan MVNO sering kali terkunci lebih lama, dan itu bisa menjadi alasan tersembunyi mengapa eSIM perjalanan yang "sangat menguntungkan" tidak bisa diinstal.

| Operator | Persyaratan Pembukaan Kunci |
| :--- | :--- |
| **Cricket Wireless** | 6 bulan layanan berbayar (kecuali dibeli dengan harga ritel penuh) |
| **Metro by T-Mobile** | 180 hari layanan berbayar |
| **Boost Mobile** | 12 bulan layanan berbayar |
| **Spectrum Mobile** | 60 hari |
| **Xfinity Mobile** | 60 hari layanan aktif |
| **US Cellular** | 120 hari |
| **Visible (prabayar Verizon)** | 60 hari layanan berbayar |

### Apa yang Anda Butuhkan untuk Mengajukan Pembukaan Kunci

Pembukaan kunci gratis begitu Anda memenuhi syarat, tetapi pengajuannya memerlukan beberapa hal yang siap:

1. **IMEI Anda** — panggil `*#06#` dan ambil nomor 15 digitnya (bukan EID).
2. **Nomor akun dan PIN/kata sandi akun Anda** — temukan keduanya di aplikasi operator Anda atau pada tagihan terbaru.
3. **Ponsel lunas dibayar penuh** — operator tidak akan membuka kunci perangkat dengan saldo cicilan yang belum lunas.
4. **Kelayakan terpenuhi** — setiap operator memiliki jendela hari aktif minimum (lihat tabel di atas).

**Tempat mengajukan:** AT&T dan T-Mobile memiliki portal pembukaan kunci online dan formulir dalam aplikasi; Verizon membuka kunci sebagian besar ponsel secara otomatis setelah 60 hari tanpa perlu permintaan. Untuk MVNO (Cricket, Metro, Boost), gunakan aplikasi mereka atau hubungi dukungan langsung.

**Tentang layanan "pembukaan kunci instan" pihak ketiga:** itu sebuah perjudian. Banyak yang menggunakan alat operator yang bocor yang membuat ponsel terkunci kembali, dan beberapa adalah penipuan terang-terangan. Jika operator Anda mengatakan Anda belum memenuhi syarat, tunggu saja — jangan bayar orang asing $20 untuk melakukannya "untuk" Anda.


### Tiga Jenis Kunci yang Berbeda

Orang mengatakan "ponsel saya terkunci" dan bermaksud tiga hal yang sama sekali berbeda. Masing-masing membutuhkan perbaikan yang berbeda, jadi penting untuk memisahkannya.

| Jenis Kunci | Apa Itu | Di Mana Anda Melihatnya | Solusi |
| :--- | :--- | :--- | :--- |
| **Kunci ponsel (kunci aktivasi)** | Anti-pencurian: iCloud Activation Lock (iPhone) atau Google FRP (Android), terikat pada akun pemilik sebelumnya | "Activation Lock" / "iPhone ini terhubung ke Apple ID" saat pengaturan, atau permintaan akun Google di Android | Hanya pemilik asli yang dapat menghapusnya — jangan pernah membeli ponsel yang masih menampilkannya |
| **Kunci wilayah** | Perbedaan perangkat keras tergantung di mana ponsel dijual (model Tiongkok tidak memiliki chip eUICC) | Tidak ada EID di `*#06#`; nomor model berakhir dengan CH/A | Tidak dapat dihapus — gunakan SIM fisik atau ponsel lain |
| **Kunci operator** | Pembatasan perangkat lunak dari operator Anda yang membatasi ponsel ke jaringan mereka | **Pengaturan > Umum > Tentang > Carrier Lock** menampilkan "SIM locked" | Ajukan permintaan pembukaan kunci ke operator (Bagian 3) |

**Disambiguasi cepat:**
- Melihat **permintaan Apple ID atau akun Google** = kunci ponsel/aktivasi (masalah pemilik).
- **Tidak ada EID sama sekali** = kunci wilayah (masalah perangkat keras).
- **EID ada + "SIM locked"** = kunci operator (bisa diperbaiki, gratis begitu memenuhi syarat).

Sebagian besar keluhan "eSIM tidak berfungsi" yang lolos pemeriksaan 2 menit adalah jenis kunci operator — dan yang itu hampir selalu dapat diselesaikan.


## Ponsel Saya Tidak Mendukung eSIM Padahal Seharusnya Mendukung

Beberapa perangkat diiklankan dengan eSIM, namun varian regional atau operator tertentu diam-diam menghilangkan fitur tersebut. Ini adalah para tersangka utamanya:

- **Samsung Galaxy S20 FE** – versi terkunci operator AS memiliki fitur yang dinonaktifkan di perangkat lunak untuk memangkas biaya, meskipun model globalnya mendukungnya.
- **Google Pixel 4a (versi Jepang)** – Docomo dan SoftBank menonaktifkan eSIM pada unit-unit mereka karena perjanjian operator lokal.
- **Seri Xiaomi Redmi Note** – tidak satu pun memiliki chip eUICC, terlepas dari rumor online. Xiaomi menyediakan eSIM hanya untuk flagship-nya.
- **iPhone 8 / 8 Plus / X** – perangkat keras pra-eUICC; Apple baru menambahkan chip mulai generasi XS/XR.
- **Seri Samsung Galaxy A** – hanya model tertentu (A54, A53) yang memiliki chip; kebanyakan seri A tidak.

### Ponsel yang Kelihatan Kompatibel eSIM tetapi Tidak

| Model Ponsel | Dukungan eSIM | Mengapa? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Tidak | Perangkat keras pra-eUICC |
| **iPhone XS/XR (Tiongkok)** | ❌ Tidak | Perangkat keras dual SIM fisik |
| **Samsung Galaxy S20 FE (operator AS)** | ❌ Tidak | Dinonaktifkan operator |
| **Samsung Galaxy A13 / A23** | ❌ Tidak | Model kelas awal, tanpa eUICC |
| **Google Pixel 4a (Jepang)** | ❌ Tidak | Dinonaktifkan operator (Docomo/SoftBank) |
| **Google Pixel 3 (beberapa model)** | ⚠️ Bervariasi | Periksa wilayahnya; beberapa punya, beberapa tidak |
| **Seri Xiaomi Redmi Note** | ❌ Tidak | Tanpa perangkat keras eUICC |
| **Xiaomi 12/13 (Tiongkok)** | ❌ Tidak | Versi domestik Tiongkok tidak memiliki perangkat kerasnya |
| **OnePlus Nord (versi Tiongkok)** | ❌ Tidak | Wilayah Tiongkok tidak memiliki perangkat kerasnya |
| **Huawei (semua domestik Tiongkok)** | ❌ Tidak | Tanpa layanan Google, tanpa perangkat keras eSIM |
| **Seri Motorola G (kebanyakan)** | ❌ Tidak | Model murah tidak memiliki eUICC |

**Apa yang harus dilakukan:** Sebelum membeli ponsel apa pun, panggil `*#06#` padanya (jika ponsel ada di tangan Anda) untuk mengonfirmasi EID, atau jalankan IMEI melalui pemeriksa kompatibilitas eSIM online. **[Daftar lengkap ponsel yang kompatibel dengan eSIM (2026)](/compatibility/)** adalah sumber terbaik Anda untuk memverifikasi model apa pun.


## Kompatibilitas eSIM Android Berdasarkan Merek

Jika Anda pengguna Android, variabel terbesar bukanlah OS-nya — melainkan apakah *varian spesifik Anda* dikirim dengan chipnya. Berikut gambaran model demi model.

### Kompatibilitas eSIM Samsung Galaxy

| Model | Dukungan eSIM | Catatan |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Ya | Semua varian global |
| **Galaxy S20 FE** | ❌ Tidak (operator AS) / ✅ Ya (global) | Periksa nomor model |
| **Galaxy A54 / A53** | ✅ Ya | Hanya seri A tertentu |
| **Galaxy A13 / A23 / A33** | ❌ Tidak | Model murah |
| **Galaxy Z Fold / Flip** | ✅ Ya | Semua model |
| **Galaxy Note 20** | ✅ Ya | Semua model |

**Cara memeriksa di Samsung:** Panggil `*#06#` dan cari EID, atau buka **Pengaturan > Koneksi > Pengelola Kartu SIM** dan cari "Tambahkan eSIM" / "Tambahkan paket seluler". Jika tidak ada keduanya, varian Anda tidak memiliki fiturnya. Untuk lebih lanjut, lihat [panduan kompatibilitas eSIM Samsung](/faq/samsung-s20-esim-compatible/) dan [Samsung Support](https://www.samsung.com/us/support/) kami.

### Kompatibilitas eSIM Google Pixel

| Model | Dukungan eSIM | Catatan |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Ya | Pixel pertama dengan fitur ini |
| **Pixel 3a / 3a XL** | ✅ Ya | – |
| **Pixel 4 / 4 XL** | ✅ Ya | – |
| **Pixel 4a** | ⚠️ Bervariasi | Versi operator Jepang = TIDAK |
| **Pixel 5 / 5a** | ✅ Ya | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Ya | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Ya | – |
| **Pixel 8 / 8 Pro** | ✅ Ya | – |

**Cara memeriksa di Pixel:** Panggil `*#06#` untuk EID, atau buka **Pengaturan > Jaringan & Internet > SIM** dan cari "Unduh SIM sebagai gantinya?". Jika hilang, variannya terkunci atau tidak memiliki chipnya. Untuk lebih lanjut, lihat [panduan kompatibilitas eSIM Pixel](/faq/google-pixel-6-esim-compatible/) dan halaman [Google Support — eSIM di Pixel](https://support.google.com/pixelphone/answer/7086887) kami.

### Kompatibilitas eSIM OnePlus

OnePlus baru menambahkan eSIM mulai dari **OnePlus 12**. OnePlus 11, 10, 9, dan seri Nord tidak memiliki perangkat kerasnya.

| Model | Dukungan eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Ya |
| **OnePlus 11** | ❌ Tidak |
| **OnePlus 10** | ❌ Tidak |
| **OnePlus 9** | ❌ Tidak |
| **Seri OnePlus Nord** | ❌ Tidak (kecuali beberapa varian EU) |

### Xiaomi, Huawei, Motorola, dan Merek eSIM Lainnya

- **Xiaomi** – model flagship (Xiaomi 12/13 versi global) mungkin mendukung eSIM, tetapi unit domestik Tiongkok tidak. Lini Redmi Note tidak memiliki eUICC sama sekali.
- **Huawei** – dukungan terbatas pada beberapa model (P40, Mate 40, dan lebih baru); banyak ponsel pasca-2020 tidak memiliki eSIM karena sanksi AS. Periksa **Pengaturan > Jaringan Seluler > eSIM** — jika opsinya hilang, tidak didukung.
- **Motorola** – kebanyakan model murah seri G tidak memiliki chipnya; Moto G Power dan lini Edge bervariasi per wilayah.

Tes universal untuk semuanya adalah sama: panggil `*#06#` dan cari EID.


## Pemeriksaan Kemampuan eSIM Android vs iPhone

Pemeriksaan 2 menit yang sama, dua menu yang berbeda. Berikan tabel ini kepada teman di platform lain.

| Pemeriksaan | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Panggil `*#06#` | Panggil `*#06#` | Panggil `*#06#` |
| **Menu Tambahkan eSIM** | **Pengaturan > Seluler > Tambahkan eSIM** | **Pengaturan > Koneksi > Pengelola Kartu SIM > Tambahkan eSIM** | **Pengaturan > Jaringan & internet > SIM > Unduh SIM sebagai gantinya?** |
| **Nomor model** | **Pengaturan > Umum > Tentang > Nomor Model** | **Pengaturan > Tentang ponsel > Nomor model** | **Pengaturan > Tentang ponsel > Model** |
| **Status kunci** | **Pengaturan > Umum > Tentang > Carrier Lock** | **Pengaturan > Tentang ponsel > Status** | **Pengaturan > Tentang ponsel > Status SIM** |

**Satu perbedaan yang penting:** di iPhone, dukungan eSIM bersifat seluruhnya atau tidak sama sekali berdasarkan generasi dan wilayah — mudah diprediksi. Di Android, sifatnya per-varian, sehingga dua ponsel Galaxy atau Pixel yang "sama" bisa berperilaku berbeda. Jika ragu di Android, percayai EID dari `*#06#` daripada lembar spesifikasi.


## Ponsel Anda Mendukung eSIM tetapi Aktivasi Gagal

Jika ponsel Anda lolos pemeriksaan perangkat keras di atas dan Anda masih melihat pesan kesalahan tertentu, masalahnya bukan lagi kompatibilitas — melainkan masalah aktivasi atau jaringan. Masalah-masalah itu memiliki referensi khusus masing-masing:

- **"Aktivasi gagal", "Tidak Ada Layanan", "QR tidak valid", "Cellular Plan Cannot Be Added", kesalahan pemulihan 4013/4014, dan setiap kesalahan lain di layar** → lihat [Panduan Pemecahan Masalah eSIM Mendalam 2026](/faq/esim-deep-troubleshooting-guide-2026/), yang memetakan setiap pesan ke solusinya.
- **Pengaturan APN dan tabel APN penyedia lengkap** → referensi APN kanonik juga ada di [Panduan Pemecahan Masalah eSIM Mendalam 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Aktivasi langkah demi langkah (QR / manual / aplikasi operator)** → lihat [Cara Mengaktifkan eSIM](/faq/how-to-activate-an-esim/).
- **Memindahkan profil ke ponsel baru** → lihat [Cara Memindahkan eSIM Antara iPhone dan Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Pengaturan iPad dan Apple Watch** → lihat [panduan eSIM iPad dan Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Pertanyaan Umum

**Mengapa iPhone XR saya mengatakan "eSIM not supported" padahal seharusnya berfungsi?**
Jika nomor model Anda berakhir dengan CH/A, itu adalah unit Tiongkok Daratan tanpa chip eSIM. Jika tidak, periksa status kunci operator — XR yang terkunci akan menolak profil dari penyedia lain.

**Bisakah saya memaksakan eSIM pada iPhone 7?**
Tidak. iPhone 7 (dan 6s, 8, serta X) mendahului chip eUICC sepenuhnya. Tidak ada hack perangkat lunak yang dapat menambahkan perangkat keras yang tidak ada.

**Apa perbedaan antara EID dan IMEI?**
IMEI (15 digit) mengidentifikasi model ponsel Anda — setiap ponsel memilikinya. EID (32 digit) mengidentifikasi chip embedded-SIM — hanya ponsel yang mampu eSIM yang memilikinya. Jika `*#06#` tidak menampilkan EID, ponsel Anda tidak dapat menggunakan eSIM.

**Apa arti "EID not found" ketika saya memanggil `*#06#`?**
Berarti ponsel Anda tidak memiliki chip perangkat keras eUICC yang diperlukan untuk profil SIM digital. Ini adalah keterbatasan perangkat keras, bukan sesuatu yang dapat diperbaiki oleh pembaruan perangkat lunak.

**Ponsel saya tidak mendukung eSIM — bisakah saya tetap menggunakan eSIM perjalanan?**
Tidak. Anda membutuhkan chip tertanamnya, jadi SIM fisik adalah satu-satunya pilihan Anda. Banyak penyedia (termasuk Roami) juga menjual kartu SIM fisik.

**Bagaimana saya tahu apakah Samsung Galaxy saya memiliki eSIM?**
Panggil `*#06#` — jika EID muncul, didukung. Anda juga dapat memeriksa Pengaturan > Koneksi > Pengelola Kartu SIM untuk opsi "Tambahkan eSIM". Beberapa varian operator AS dan seri A menyembunyikannya.

**Apakah OnePlus 11 mendukung eSIM?**
Tidak. OnePlus baru menambahkan eSIM mulai dari OnePlus 12. Seri 11, 10, 9, dan Nord tidak memiliki perangkat kerasnya.

**Bagaimana saya memeriksa apakah iPhone saya terkunci operator?**
Pengaturan > Umum > Tentang > Carrier Lock. "No SIM restrictions" berarti tidak terkunci. Apa pun selain itu berarti terkunci ke operator tersebut.

**Model iPad mana yang mendukung eSIM?**
iPad Pro (generasi ke-3 dan lebih baru), iPad Air (generasi ke-3 dan lebih baru), iPad (generasi ke-10 dan lebih baru), dan iPad mini (generasi ke-6 dan lebih baru) — hanya model seluler. iPad yang hanya Wi-Fi tidak memiliki perangkat keras eSIM.

**Di mana saya bisa menemukan daftar ponsel yang kompatibel dengan eSIM?**
[Daftar lengkap ponsel yang kompatibel dengan eSIM (2026)](/compatibility/) mencakup iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi, dan lainnya.

**Apa perbedaan antara kunci ponsel dan kunci operator?**
Kunci ponsel (aktivasi) bersifat anti-pencurian — iCloud di iPhone, Google FRP di Android — dan hanya pemilik asli yang dapat menghapusnya. Kunci operator adalah pembatasan jaringan yang dihapus operator Anda secara gratis begitu ponsel lunas dibayar dan memenuhi syarat.

**Mengapa ponsel Tiongkok tidak memiliki eSIM?**
Tiongkok Daratan mewajibkan ponsel domestik disertifikasi untuk dual SIM fisik, sehingga Apple dan merek Android mengirim unit Tiongkok dengan dua slot nano-SIM dan tanpa chip eUICC. Itu perangkat keras — tidak dapat diaktifkan kemudian.

**Bisakah saya menambahkan eSIM ke ponsel yang tidak memiliki EID?**
Tidak. Chip eUICC disolder ke motherboard. Tidak ada adaptor, aplikasi, jailbreak, atau pembaruan perangkat lunak yang dapat menambahkan perangkat keras yang tidak pernah terinstal.

**Apakah reset pabrik memperbaiki "eSIM not supported"?**
Tidak. Reset tidak mengubah perangkat keras atau menghapus kunci operator. Namun, reset dapat menghapus profil yang setengah terinstal dan rusak, jadi layak dicoba untuk gangguan perangkat lunak — setelah mencadangkan data.

**Untuk apa EID digunakan saat penyedia memintanya?**
EID memungkinkan penyedia Anda mengikat profil eSIM tertentu ke chip ponsel Anda sebelum Anda memindai. Begitulah mereka tahu paket itu ditujukan untuk perangkat tepat Anda — anggap sebagai "alamat" eSIM-nya.

**Bagaimana saya tahu ponsel saya tidak terkunci tanpa memasukkan SIM?**
iPhone: Pengaturan > Umum > Tentang > Carrier Lock — "No SIM restrictions" berarti tidak terkunci. Android: Pengaturan > Tentang ponsel > Status (atau Status SIM) dan cari redaksi "SIM locked" atau "SIM not locked".

👉 **Sudah memastikan ponsel Anda mampu?** Ambil [eSIM untuk AS](/united-states-esim/) atau [eSIM untuk Jepang](/japan-esim/) untuk terhubung.


## Uji Kompatibilitas Anda dengan eSIM Gratis

Cara tercepat untuk memastikan ponsel Anda benar-benar dapat menggunakan eSIM adalah dengan menginstal **eSIM uji coba gratis**. Tidak ada biaya, hanya butuh 2 menit, dan jika terinstal dan terhubung, perangkat keras Anda siap digunakan.

👉 [**Dapatkan eSIM Roami gratis Anda sekarang**](/free-esim/)

---

*Jika perangkat atau kesalahan spesifik Anda tidak tercakup di sini, hubungi kami dan kami akan membantu Anda memastikan apakah ponsel Anda mampu menggunakan eSIM.*
## Sumber

- [GSMA — spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Mengatur eSIM di iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Mengatur eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — eSIM Android](https://support.google.com/android/answer/11241215)
