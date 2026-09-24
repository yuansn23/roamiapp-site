---
title: "Panduan Pemecahan Masalah eSIM Mendalam 2026"
h1_title: "Panduan Lengkap Pemecahan Masalah eSIM di 2026 – 18 Perbaikan Dunia Nyata"
description: "Atasi kegagalan aktivasi eSIM, error transfer, tanpa sinyal, dan masalah pemindaian QR di iPhone dan Android dengan panduan pemecahan masalah 2026 ini."
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["pemecahan masalah eSIM", "aktivasi eSIM gagal", "eSIM tanpa sinyal", "error transfer eSIM", "transfer eSIM lintas platform", "iOS 18 eSIM", "pengaturan APN eSIM", "kode konfirmasi eSIM", "kunci operator eSIM", "eSIM macet saat mengaktifkan"]
date: 22026-09-15T00:00:00Z
lastmod: 22026-09-15T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Pemecahan Masalah", "Travel Setup"]
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
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Bagaimana cara mengaktifkan eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Cara mengaktifkan eSIM di iPhone (Semua Model)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Daftar Kompatibilitas eSIM Terbaru"
      url: "/compatibility/"
---


> **Catatan Editor:** Roami mengoperasikan meja dukungan di balik referensi ini. Ketika seorang pelancong menemukan error spesifik di layar — "Activation failed," "No Service," "Cellular Plan Cannot Be Added," error restore 4013/4014 — halaman inilah yang dibuka tim kami sendiri untuk menguraikannya. Setiap entri di bawah memetakan satu pesan error yang persis ke penyebab nyatanya dan perbaikan konkret, diuji di iOS 18 dan Android 14/15 per September 2026.

> **Salah halaman?** Jika pertanyaan Anda adalah "apakah ponsel saya bahkan mendukung eSIM" — model Tiongkok/Hong Kong, kunci operator, EID tidak ada — itu pertanyaan perangkat keras, bukan error. Buka [panduan perangkat keras & kode error eSIM](/faq/esim-activation-errors-troubleshooting-guide/) kami sebagai gantinya. Halaman ini mengasumsikan ponsel Anda dapat menggunakan eSIM dan masalahnya adalah pesan error tertentu.

## Alur Diagnostik eSIM Cepat

Gunakan peta keputusan ini untuk melompat langsung ke perbaikan pesan yang persis ada di layar Anda.

| Yang Anda lihat / alami | Kemungkinan yang rusak | Urgensi | Lompat ke perbaikan |
|---------------------------|----------------------|---------|-------------|
| **Kode QR tidak bisa dipindai / dikatakan tidak valid** | Kode QR kedaluwarsa atau rusak | Rendah | [Bagian 3](#esim-qr-code-invalid-or-expired) |
| **"Unable to Activate" atau "Activation failed"** | Timeout jaringan atau error server | Sedang | [Bagian 1](#esim-activation-failed-or-unable-to-activate) |
| **"No Service" setelah instalasi** | Data Roaming mati atau APN tidak ada | Tinggi | [Bagian 2](#esim-no-service-after-installation) |
| **Batang sinyal penuh tetapi tanpa internet** | APN salah konfigurasi | Tinggi | [Bagian 8](#esim-no-data-connection-after-activation) |
| **"Cellular Plan Cannot Be Added"** | Terlalu banyak eSIM tersimpan atau pembatasan perangkat keras | Sedang | [Bagian 5](#esim-cellular-plan-cannot-be-added) |
| **"eSIM already in use"** | Profil masih terikat ke perangkat lama | Tinggi | [Bagian 4](#esim-already-in-use-or-bound-to-another-device) |
| **Popup kode konfirmasi** | Profil membutuhkan PIN | Rendah | [Bagian 6](#esim-confirmation-code-required) |
| **"SIM not supported"** | Ponsel terkunci operator | Tinggi | [Bagian 7](#esim-sim-not-supported-on-a-carrier-locked-device) |
| **Macet di "Activating" lebih dari 10 menit** | Unduhan terhenti | Sedang | [Bagian 9](#esim-stuck-on-activating) |
| **Dual SIM: satu lini tanpa sinyal** | Konflik perutean | Sedang | [Bagian 10](#dual-esim-with-one-line-showing-no-service) |
| **eSIM dipindah ke ponsel baru, gagal** | Transfer lintas platform tidak didukung | Tinggi | [Bagian 11](#esim-transfer-failed) |
| **Error restore iPhone 4013/4014** | Masalah perangkat keras/firmware, bukan eSIM | Tinggi | [Bagian 12](#iphone-esim-restore-error-4013-or-4014) |
| **"Profile expired"** | Kode QR kehabisan waktu | Rendah | [Bagian 13](#esim-profile-expired) |
| **Roaming tidak berfungsi di luar negeri** | Sakelar Data Roaming mati | Tinggi | [Bagian 14](#esim-data-roaming-not-working) |
| **Tidak sengaja menghapus eSIM** | Kesalahan pengguna | Tinggi | [Bagian 15](#esim-deleted-by-mistake) |
| **MDM memblokir perubahan eSIM** | Kebijakan perangkat kerja | Sedang | [Bagian 16](#mdm-or-enterprise-restrictions-block-esim) |
| **eSIM hilang setelah restart** | Glitch perangkat lunak iOS/Android | Tinggi | [Bagian 17](#esim-disappeared-after-restart) |
| **Wi-Fi Calling berfungsi tetapi data eSIM tidak** | Konflik perutean antara Wi-Fi dan seluler | Sedang | [Bagian 18](#wi-fi-calling-works-but-esim-data-does-not) |
| **SIM fisik dimasukkan, eSIM tidak berfungsi** | Konflik baki SIM | Tinggi | [Bagian 19](#esim-vs-physical-sim-conflict) |
| **eSIM Apple Watch tidak terhubung** | Masalah pemasangan watch atau operator | Sedang | [Bagian 20](#apple-watch-esim-not-working) |


## Tabel Referensi Cepat

| Gejala | Penyebab paling mungkin | Perbaikan |
|---------|-------------------|-----|
| "Unable to Activate" / "Activation failed" | Wi-Fi tidak stabil atau error server operator | Jaringan stabil + coba lagi, lalu instal ulang (Bagian 1) |
| "No Service" setelah instalasi | Data roaming mati / APN tidak ada | Aktifkan roaming, cek APN (Bagian 2) |
| Kode QR "Invalid" / "Expired" | Kode QR kedaluwarsa atau sudah dipakai | Minta kode QR baru (Bagian 3) |
| "eSIM already in use" | Profil tidak dilepas dari perangkat lama | Hapus dari perangkat lama atau pelepasan oleh operator (Bagian 4) |
| "Cellular Plan Cannot Be Added" | Terlalu banyak eSIM tersimpan | Hapus eSIM yang tidak terpakai (Bagian 5) |
| Kode konfirmasi diperlukan | Profil memiliki kode wajib | Cari kode 4–8 digit di email operator (Bagian 6) |
| "SIM not supported" | Perangkat terkunci operator | Buka kunci perangkat atau hubungi operator (Bagian 7) |
| Tanpa data setelah aktivasi | APN tidak dikonfigurasi | Masukkan APN secara manual (Bagian 8) |
| Macet di "Activating" | Unduhan profil terhenti | Nyalakan-matikan Mode Pesawat, instal ulang (Bagian 9) |
| Satu lini dual-SIM "No Service" | Konflik perutean panggilan/data | Periksa perutean lini dan sakelar (Bagian 10) |
| Transfer eSIM gagal | Operator tidak mendukung transfer | Gunakan fallback kode QR operator (Bagian 11) |
| Error restore 4013 / 4014 | Perangkat keras/firmware saat restore | Kabel berbeda, perbarui komputer (Bagian 12) |
| "Profile expired" | Kode QR terbatas waktu | Minta kode QR baru (Bagian 13) |
| Data roaming tidak berfungsi | Roaming mati untuk lini eSIM | Aktifkan Data Roaming (Bagian 14) |
| Tidak sengaja menghapus eSIM | Profil dihapus secara lokal | Hubungi operator / beli paket baru (Bagian 15) |
| MDM memblokir perubahan eSIM | Pembatasan perusahaan | Hubungi admin IT Anda (Bagian 16) |
| eSIM hilang setelah restart | Glitch perangkat lunak iOS/Android | Cek pengaturan, tambah ulang profil (Bagian 17) |
| Wi-Fi Calling berfungsi tetapi data tidak | Konflik perutean | Nonaktifkan Wi-Fi Calling sementara (Bagian 18) |
| SIM fisik dimasukkan, eSIM berhenti berfungsi | Konflik baki/pembaca | Lepas SIM fisik, restart (Bagian 19) |
| eSIM Apple Watch tidak terhubung | Masalah pemasangan atau operator | Pasang ulang watch, hubungi operator (Bagian 20) |


## Aktivasi eSIM Gagal atau Unable to Activate

**Penyebab:** Hampir selalu koneksi Wi-Fi yang tidak stabil atau error sementara server operator (SM-DP+), bukan masalah pada ponsel Anda. SM-DP+ (Subscription Manager - Data Preparation Plus) adalah server aman yang mengirimkan profil eSIM Anda ke perangkat Anda — jika tidak dapat dijangkau, aktivasi gagal.

**Perbaikan:**
1. Pindah ke koneksi Wi-Fi atau data seluler yang stabil.
2. Nyalakan-matikan Mode Pesawat untuk menyegarkan baseband.
3. Jika error berulang, hapus eSIM yang tertunda di `Settings > Cellular`, restart, dan pindai kode QR lagi.

**Khusus iOS 18:** Di iOS 18 pesannya mungkin berbunyi "Unable to Complete Activation" dengan tombol Retry. Ketuk Retry terlebih dahulu — alur aktivasi iOS 18 yang ditingkatkan sering menyelesaikan masalah tanpa instalasi ulang penuh.

---

## eSIM Tanpa Sinyal Setelah Instalasi

**Penyebab:** Profil terinstal tetapi ponsel belum terdaftar ke jaringan lokal — biasanya karena Data Roaming mati atau APN tidak ada.

**Perbaikan:**
1. Nyalakan **Data Roaming ON** untuk lini eSIM.
2. Di `Settings > Cellular > [eSIM Anda] > Network Selection`, matikan "Automatic", pilih operator secara manual, tunggu hingga gagal, lalu kembalikan ke "Automatic" untuk memaksa pendaftaran ulang.
3. Jika masih tidak ada data, periksa APN (Bagian 8).

---

## Kode QR eSIM Tidak Valid atau Kedaluwarsa

**Penyebab:** Kode QR eSIM hanya sekali pakai dan terbatas waktu. Kode itu baik sudah dipakai atau telah kedaluwarsa.

**Perbaikan:** Hubungi penyedia eSIM Anda dan minta mereka menerbitkan ulang kode QR baru, lalu pindai segera.

**Jika Anda memindai dari layar ponsel Anda sendiri:** Simpan gambar kode QR ke Foto terlebih dahulu, lalu di Settings > Cellular > Add eSIM, pilih "Use QR Code" dan ketuk "Choose Photo" untuk memilih gambar yang tersimpan. Ini menghindari masalah "tidak bisa memindai layar sendiri".

---

## eSIM Sudah Dipakai atau Terikat ke Perangkat Lain

**Penyebab:** Profil tidak pernah dilepas dari perangkat lama, sehingga operator masih mengaitkannya dengan ponsel itu.

**Perbaikan:**
1. Di perangkat lama, hapus eSIM di `Settings > Cellular`.
2. Tunggu sekitar lima menit dan coba lagi di perangkat baru.
3. Jika perangkat lama hilang atau rusak, hubungi operator Anda dan minta mereka melepas paksa profil dari sisi mereka.

---

## Cellular Plan eSIM Tidak Bisa Ditambahkan

**Penyebab:** Ponsel telah mencapai batas profil eSIM tersimpannya (biasanya 8–10, tergantung model), atau perangkatnya adalah model Tiongkok daratan tanpa perangkat keras eSIM.

**Perbaikan:** Hapus eSIM yang tidak terpakai di `Settings > Cellular`, lalu tambahkan yang baru. Jika perangkat Anda dibeli di Tiongkok daratan, perangkat itu menggunakan dua slot SIM fisik dan tidak bisa menambahkan eSIM — untuk cara mengidentifikasi model Tiongkok atau Hong Kong dan memastikan ponsel Anda memiliki perangkat kerasnya, lihat [panduan pemeriksaan perangkat keras & error](/faq/esim-activation-errors-troubleshooting-guide/) kami.

---

## Kode Konfirmasi eSIM Diperlukan

**Penyebab:** Beberapa profil eSIM memiliki kode konfirmasi wajib yang diperlukan sebelum profil diunduh. Ini adalah PIN 4-8 digit yang memverifikasi identitas Anda.

**Perbaikan:** Cari kode 4–8 digit di email yang dikirim operator Anda bersama kode QR. Jika tidak menemukannya, hubungi operator.

**Tempat umum menemukan kode konfirmasi:**
- Baris subjek email aktivasi
- Di dekat bagian bawah email, di bawah "Activation Details"
- Di aplikasi operator di bawah "My Plans" > "Details"

---

## eSIM SIM Not Supported pada Perangkat Terkunci Operator

**Penyebab:** Ponsel terkunci ke operator lain dan tidak dapat menerima profil dari penyedia berbeda.

**Perbaikan:** Periksa `Settings > General > About > Carrier Lock`. Jika tidak tertulis "No SIM restrictions", hubungi operator rumah Anda untuk meminta pembukaan kunci. Untuk panduan lengkap kunci operator — cara memeriksa status, kebijakan pembukaan kunci operator AS, dan cara membuka kunci perangkat — lihat [panduan perangkat keras & kunci operator](/faq/esim-activation-errors-troubleshooting-guide/) kami.

---

## eSIM Tanpa Koneksi Data Setelah Aktivasi

**Penyebab:** Access Point Name (APN) tidak dikonfigurasi secara otomatis, sehingga ponsel tidak punya jalur ke jaringan data.

**Perbaikan:**
1. Buka `Settings > Cellular > Cellular Data Network`.
2. Masukkan nilai APN dari situs web penyedia eSIM Anda (misalnya, `globaldata` untuk Airalo).
3. Sebagian besar eSIM perjalanan mengonfigurasi APN secara otomatis, jadi pastikan nilai yang benar dengan penyedia Anda.

**Nilai APN umum berdasarkan penyedia (jika konfigurasi otomatis gagal):**

| Penyedia | APN | Nama pengguna | Kata sandi |
|----------|-----|----------|----------|
| Roami | internet | (kosong) | (kosong) |
| Airalo | globaldata | (kosong) | (kosong) |
| Holafly | hola | (kosong) | (kosong) |
| Nomad | nbdata | (kosong) | (kosong) |
| Ubigi | ubigi | (kosong) | (kosong) |
| Google Fi | h2g2 | (kosong) | (kosong) |
| T-Mobile (US) | fast.t-mobile.com | (kosong) | (kosong) |
| AT&T (US) | nxgen | (kosong) | (kosong) |
| Verizon (US) | vzwinternet | (kosong) | (kosong) |
| EE (UK) | everywhere | (kosong) | (kosong) |
| O2 (UK) | mobile.o2.co.uk | web | web |
| Vodafone (UK) | internet | (kosong) | (kosong) |
| Three (UK) | three.co.uk | (kosong) | (kosong) |

---

## eSIM Macet di Activating

**Penyebab:** Unduhan profil terhenti, sering karena sinyal lemah atau server aktivasi yang sibuk.

**Perbaikan:**
1. Pastikan Anda berada di jaringan yang stabil.
2. Nyalakan-matikan Mode Pesawat.
3. Jika tetap macet lebih dari 10 menit, hapus eSIM dan instal ulang dari kode QR.

---

## Dual eSIM dengan Satu Lini Menampilkan Tanpa Sinyal

**Penyebab:** Dengan dua eSIM aktif, perutean panggilan masuk dan data bisa berkonflik, menyisakan satu lini tanpa sinyal. Ini adalah **masalah sinyal dual eSIM** yang umum dan memengaruhi pengguna dengan dua lini aktif.

**Perbaikan:**
1. Di `Settings > Cellular`, pastikan lini mana yang diatur untuk **Cellular Data** dan mana untuk **Default Voice Line**.
2. Matikan lalu nyalakan kembali setiap lini.
3. Untuk perbaikan lebih mendalam, lihat panduan kami **[Dual eSIM tidak berfungsi? 12 perbaikan untuk iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## Transfer eSIM Gagal

**Penyebab:** Tidak ada transfer eSIM lintas platform bawaan, dan operator Anda mungkin tidak mendukung transfer berbasis aplikasi.

**Perbaikan:** Minta operator Anda menerbitkan ulang eSIM sebagai kode QR baru dan pindai di perangkat baru. Setelah transfer, WhatsApp, iMessage, dan kode dua faktor SMS tetap berfungsi karena nomor Anda tidak berubah. Untuk instruksi langkah demi langkah lengkap, lihat **[panduan transfer eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)** kami.

---

## Error Restore iPhone eSIM 4013 atau 4014

**Penyebab:** Error-error ini menunjukkan masalah perangkat keras atau firmware selama restore perangkat lunak, bukan masalah eSIM. Sering disebabkan kabel USB rusak atau perangkat lunak komputer yang usang.

**Perbaikan:** Coba kabel dan port USB yang berbeda, perbarui sistem operasi komputer Anda, lalu coba restore lagi. Hubungi Apple Support jika error berlanjut.

---

## Profil eSIM Kedaluwarsa

**Penyebab:** Kode QR eSIM atau kode aktivasi terbatas waktu dan telah kedaluwarsa.

**Perbaikan:** Hubungi penyedia eSIM Anda dan minta kode QR baru, lalu aktifkan segera.

---

## Data Roaming eSIM Tidak Berfungsi

**Penyebab:** Data Roaming dimatikan untuk lini eSIM perjalanan, sehingga tidak dapat terhubung ke jaringan lokal.

**Perbaikan:** Buka `Settings > Cellular > [eSIM Anda]` dan nyalakan **Data Roaming ON**. Ini diperlukan agar sebagian besar eSIM perjalanan berfungsi di luar negeri.

---

## eSIM Terhapus Tidak Sengaja

**Penyebab:** Menghapus eSIM menghapus profil dari ponsel tetapi tidak membatalkan paket.

**Perbaikan:**
- Untuk eSIM operator pascabayar, hubungi operator — mereka biasanya dapat menerbitkan ulang kode QR.
- Untuk eSIM perjalanan (Roami, Airalo, dan sejenisnya), penghapusan biasanya permanen, jadi Anda perlu membeli paket baru.
- Selalu simpan cadangan email aktivasi asli dan kode QR Anda.

---

## MDM atau Pembatasan Perusahaan Memblokir eSIM

**Penyebab:** Pada perangkat terkelola (kerja), kebijakan Mobile Device Management seperti `AllowESIMModification` dapat memblokir penambahan atau penghapusan eSIM.

**Perbaikan:** Hubungi administrator IT Anda untuk mengaktifkan perubahan eSIM, atau gunakan perangkat yang tidak dikelola.

---

## eSIM Hilang Setelah Restart

**Gejala:** Anda me-restart ponsel dan eSIM tidak lagi terdaftar di Settings > Cellular. Hilang.

**Penyebab:** Glitch perangkat lunak di iOS atau Android kadang dapat menyebabkan profil eSIM tersembunyi atau tidak terbaca setelah restart, terutama setelah pembaruan OS. Profil masih ada di perangkat, tetapi sistem gagal memuatnya.

**Perbaikan:**
1. **iPhone:** Buka Settings > General > About dan gulir ke bawah ke "Available SIM" atau "Digital SIM". Jika eSIM muncul di sana tetapi tidak di Cellular, restart ponsel lagi.
2. **iPhone:** Jika restart tidak berhasil, buka Settings > Cellular > Add eSIM. Kadang ponsel akan mendeteksi profil yang ada dan menawarkan untuk menambahkannya kembali tanpa kode QR baru.
3. **Android (Samsung):** Buka Settings > Connections > SIM Manager. eSIM mungkin tampil sebagai "Inactive". Ketuk dan nyalakan.
4. **Android (Pixel):** Buka Settings > Network & Internet > SIMs. Jika eSIM hilang, ketuk "Add Carrier" — ponsel mungkin mendeteksi profil yang ada.
5. Jika tidak ada yang berhasil, hubungi operator Anda dan minta kode QR baru. Profil lama mungkin rusak.

**Pencegahan:** Sebelum restart, pastikan semua lini eSIM dimatikan (OFF), lalu restart, lalu nyalakan kembali (ON). Ini mengurangi kemungkinan sistem kehilangan jejak profil.

---

## Wi-Fi Calling Berfungsi tetapi Data eSIM Tidak

**Gejala:** Anda memiliki Wi-Fi Calling aktif di lini rumah Anda, tetapi eSIM perjalanan Anda tidak punya koneksi data. Atau, eSIM berfungsi di Wi-Fi tetapi tidak di seluler.

**Penyebab:** Konflik perutean antara Wi-Fi Calling dan data seluler. Saat Wi-Fi Calling aktif, ponsel mungkin memprioritaskan jaringan Wi-Fi untuk semua komunikasi, termasuk data, dan gagal merutekan data seluler dengan benar melalui eSIM.

**Perbaikan:**
1. Sementara matikan Wi-Fi Calling di lini rumah Anda: Settings > Cellular > [lini rumah] > Wi-Fi Calling > matikan (OFF).
2. Nyalakan-matikan Mode Pesawat untuk memaksa ponsel mendaftar ulang di jaringan seluler.
3. Uji koneksi data eSIM. Jika berfungsi, Anda bisa menyalakan kembali Wi-Fi Calling — peruteannya seharusnya sudah benar.
4. Jika masalah berulang, pastikan lini rumah Anda memiliki **Data Roaming OFF** dan eSIM perjalanan memiliki **Data Roaming ON**.

**Alternatif:** Di iPhone, buka Settings > Cellular > Cellular Data dan pastikan eSIM perjalanan terpilih. Lalu aktifkan "Allow Cellular Data Switching" — ini memungkinkan ponsel menggunakan eSIM perjalanan untuk data Wi-Fi Calling bahkan jika lini rumah adalah lini suara.

---

## Konflik eSIM vs SIM Fisik

**Gejala:** Anda memasukkan kartu SIM fisik ke ponsel Anda, dan eSIM Anda yang sebelumnya berfungsi tiba-tiba menampilkan "No Service" atau menghilang sepenuhnya dari Settings.

**Penyebab:** Ini perilaku yang diketahui pada perangkat terkunci operator. Ketika iPhone terkunci mendeteksi SIM fisik dari operator berbeda, ia mungkin menonaktifkan slot eSIM untuk mencegah penggunaan tanpa izin. Pada beberapa perangkat Android, memasukkan SIM fisik juga dapat menyebabkan sistem memprioritaskan SIM fisik daripada eSIM untuk semua fungsi. Baru mengenal campuran dua format ini? [Perbandingan eSIM vs SIM fisik](/faq/what-is-esim/) menjelaskan bagaimana keduanya hidup berdampingan.

**Perbaikan:**
1. Lepas kartu SIM fisik dari baki.
2. Restart ponsel Anda.
3. eSIM seharusnya muncul kembali di Settings > Cellular (iPhone) atau Settings > Connections > SIM Manager (Android).
4. Jika eSIM muncul kembali tetapi masih menampilkan "No Service", nyalakan Data Roaming untuk lini eSIM.
5. Jika Anda membutuhkan SIM fisik dan eSIM berfungsi bersamaan, hubungi operator Anda untuk membuka kunci perangkat Anda.

> **Alternatif:** Beberapa pengguna melaporkan bahwa mematikan lini eSIM lalu menyalakannya kembali (tanpa melepas SIM fisik) menyelesaikan konflik. Coba ini lebih dulu sebelum melepas SIM fisik.

---

## eSIM Apple Watch Tidak Berfungsi

**Gejala:** Anda telah menyiapkan seluler di Apple Watch Anda, tetapi menampilkan "No Service" atau "Searching" — atau paket eSIM tidak muncul sama sekali di aplikasi Watch.

**Penyebab:** Aktivasi eSIM Apple Watch membutuhkan dukungan operator untuk jenis paket watch yang spesifik, dan penyiapan membutuhkan iPhone Anda berada di dekatnya dengan koneksi internet yang stabil.

**Perbaikan:** Pastikan operator Anda mendukung eSIM Apple Watch, lalu unpair dan pasang ulang watch, dengan iPhone Anda tetap di dekatnya sepanjang proses. Jika tetap tidak bisa diaktifkan, hubungi operator Anda dengan **EID** dan **IMEI** watch agar mereka dapat menyediakannya secara manual. Untuk panduan lengkap — termasuk model iPad dan Apple Watch mana yang mendukung eSIM — lihat [panduan eSIM iPad dan Apple Watch](/faq/ipad-apple-watch-esim-support-guide/) kami.

---

## Referensi Kode Error eSIM

| Kode Error | Platform | Makna | Perbaikan |
|------------|----------|---------|-----|
| **4013** | iPhone (restore) | Kegagalan perangkat keras/firmware saat restore | Ganti kabel, port USB, perbarui macOS/iTunes |
| **4014** | iPhone (restore) | Mirip 4013; biasanya masalah komunikasi USB | Sama seperti di atas |
| **-8** | Android (aktivasi) | Timeout jaringan | Tunggu dan coba lagi, atau ganti Wi‑Fi |
| **-100** | Android (pindai QR) | Format kode QR tidak didukung | Gunakan entri manual |
| **0xE8000001** | iPhone (aktivasi) | Server operator tidak terjangkau | Coba lagi setelah 5 menit atau gunakan entri manual |
| **"eSIM configuration not supported"** | Android (Samsung) | Operator tidak mendukung eSIM pada model itu | Konfirmasi dengan operator |
| **"Invalid SM‑DP+ address"** | Keduanya | Alamat entri manual salah | Periksa kembali alamat dari penyedia Anda |
| **"LPA error -1"** | Android | Error LPA (Local Profile Assistant) umum | Restart ponsel, coba lagi. Jika berlanjut, gunakan aplikasi eSIM lain. |
| **"EID mismatch"** | Keduanya | Profil terikat ke perangkat berbeda | Hubungi operator untuk melepas profil (Bagian 4) |
| **"No EID" saat menghubungi `*#06#`** | Keduanya | Perangkat tidak mendukung eSIM | Ponsel Anda tidak punya perangkat keras eSIM — lihat [panduan pemeriksaan perangkat keras](/faq/esim-activation-errors-troubleshooting-guide/) kami |
| **"eSIM management not available"** | Android (OnePlus) | Bug Oxygen OS | Perbarui ke versi Oxygen OS terbaru |
| **"Profile cannot be deleted"** | iPhone | eSIM macet dalam status tertunda | Restart iPhone, lalu coba hapus lagi. Jika tetap macet, hubungi operator. |
| **-1** | Keduanya | Kegagalan aktivasi umum | Restart ponsel, pastikan konektivitas jaringan, coba lagi |
| **-2** | Android | Kode aktivasi tidak valid | Masukkan ulang kode atau minta yang baru dari operator |


## Kesalahan yang Merusak eSIM Anda

Ini adalah kesalahan pengguna paling umum yang mengubah eSIM yang berfungsi menjadi bata. Hindari dengan segala cara — sebagian besar bermuara pada bagaimana aktivasi sebenarnya bekerja, yang dibahas [penjelas aktivasi eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) langkah demi langkah.

| Kesalahan | Apa yang Terjadi | Cara Menghindari |
|---------|--------------|--------------|
| **Menghapus eSIM untuk "memperbaiki" masalah koneksi** | Profil dihapus permanen — Anda kehilangan semua data tersisa dan harus membeli paket baru | Jangan pernah mengetuk "Delete eSIM" kecuali paket sudah sepenuhnya kedaluwarsa. Menghapus tidak "menyegarkan" — itu menghancurkan. |
| **Memindai kode QR dengan aplikasi Kamera** | Kamera mengenali kode tetapi tidak melakukan apa pun — tidak ada profil yang terinstal | Selalu buka Settings > Cellular > Add eSIM terlebih dahulu — jangan pernah gunakan aplikasi Kamera mandiri. |
| **Menginstal di bandara dengan Wi-Fi lemah** | Unduhan terputus di tengah instalasi, merusak profil | Instal di rumah dengan Wi-Fi stabil Anda sendiri sebelum berangkat. |
| **Menunggu sampai mendarat untuk menginstal** | Anda tiba tanpa Wi-Fi dan tidak bisa mengunduh profil | Instal profil sebelum keberangkatan (profil tetap tidak aktif sampai Anda menyalakan Data Roaming). |
| **Lupa menyalakan Data Roaming untuk eSIM** | Batang sinyal penuh tetapi nol internet | Setelah mendarat, buka Settings > Cellular > [eSIM Anda] dan nyalakan Data Roaming. |
| **Me-reset pengaturan jaringan dengan mengira itu akan "menyegarkan" eSIM** | Reset jaringan tidak menghapus eSIM, tetapi menghapus kata sandi Wi-Fi dan pemasangan Bluetooth — Anda kehilangan semua jaringan tersimpan | Hanya reset pengaturan jaringan sebagai upaya terakhir, dan ketahui itu tidak akan memperbaiki masalah aktivasi eSIM. |
| **Mematikan lini eSIM alih-alih hanya menonaktifkan Data Roaming** | eSIM dinonaktifkan sepenuhnya dan tidak akan mendaftar saat Anda mengaktifkannya kembali | Matikan Data Roaming, bukan seluruh lini. Biarkan lini ON tetapi roaming OFF saat tidak digunakan. |


## Beberapa Masalah eSIM Sekaligus

Kadang Anda tidak hanya memiliki satu masalah — Anda memiliki dua atau tiga sekaligus. Berikut cara mendiagnosis gejala kombinasi:

| Kombinasi Gejala | Apa yang Sebenarnya Terjadi | Urutan Perbaikan |
|---------------------|---------------------------|-----------|
| **Kode QR terpindai tetapi kemudian "Activation failed"** | Kode QR valid, tetapi server unduhan tidak terjangkau | Perbaiki jaringan dulu (Bagian 1), lalu pindai ulang |
| **eSIM menampilkan batang sinyal tetapi tanpa data DAN "No Service" di lini rumah** | APN tidak ada DAN Anda punya konflik perutean dual-SIM | Perbaiki APN dulu (Bagian 8), lalu perbaiki perutean dual-SIM (Bagian 10) |
| **Transfer berhasil tetapi ponsel baru "No Service"** | Profil berpindah tetapi tidak mendaftar di jaringan baru | Hapus eSIM dari ponsel lama, lalu restart ponsel baru (Bagian 4 + Bagian 2) |
| **Wi-Fi Calling berfungsi tetapi eSIM tanpa data DAN lini rumah kena biaya roaming** | Beberapa konflik perutean ditambah Data Roaming dibiarkan ON di lini rumah | Matikan Data Roaming lini rumah, perbaiki konflik Wi-Fi Calling (Bagian 18), lalu cek APN |
| **eSIM hilang setelah restart DAN "Cellular Plan Cannot Be Added"** | Profil rusak DAN penyimpanan penuh | Hapus eSIM yang tidak terpakai dulu (Bagian 5), lalu coba tambah ulang (Bagian 17) |

**Aturan umum:** Perbaiki **masalah jaringan dulu** (Wi-Fi, Data Roaming, APN), lalu **masalah profil** (kode QR, aktivasi), lalu **masalah spesifik perangkat** (kunci operator, MDM). Jangan mencoba memperbaiki semuanya sekaligus — kerjakan gejalanya satu per satu.


## Di Mana Menemukan Add eSIM di Setiap Ponsel

Perbaikan untuk sebagian besar error sama, tetapi jalur menu untuk mencapai kontrol eSIM berbeda antar merek. Berikut jalur yang persis ditambah keunikan error yang hanya muncul di perangkat tertentu. (Untuk metode instalasi lengkap di balik menu-menu ini, [panduan aktivasi umum](/faq/how-to-activate-an-esim/) memiliki setiap langkah.)

### Jalur Menu eSIM iPhone
- **"Add eSIM" berwarna abu-abu** – iPhone Anda mungkin terkunci operator. Periksa Settings > General > About > Carrier Lock; untuk perbaikan kunci operator lengkap, lihat [panduan kunci operator & perangkat keras](/faq/esim-activation-errors-troubleshooting-guide/) kami.
- **Quick Transfer gagal** – pastikan kedua ponsel menggunakan Apple ID yang sama, Bluetooth aktif, dan berjarak dalam 10 cm satu sama lain.
- **Setelah pembaruan iOS, eSIM menampilkan "No Service"** – buka Settings > Cellular > ketuk eSIM > matikan lalu nyalakan kembali "Turn On This Line". Juga periksa bahwa Data Roaming masih ON.
- **eSIM menghilang setelah pembaruan iOS** – lihat Bagian 17. Ini lebih umum di iOS daripada Android setelah pembaruan besar.
- **Khusus iOS 18:** Alur "Add eSIM" telah didesain ulang dengan opsi entri manual yang lebih menonjol. Jika Anda di iOS 18 dan kode QR tidak bisa dipindai, tombol entri manual kini lebih mudah ditemukan di bagian bawah layar.

### Jalur Menu eSIM Samsung Galaxy
- **Jalur menu bervariasi menurut versi One UI:**
  - **One UI 5 (Android 13):** Settings > Connections > SIM Manager > Add eSIM
  - **One UI 6/6.1 (Android 14):** Settings > Connections > SIM Manager > Add eSIM (jalur sama)
  - **One UI 7 (Android 15):** Settings > Connections > SIM Manager > Add Mobile Plan
- **Pemindaian kode QR gagal** – coba entri manual (ketuk "Enter activation code manually"). Samsung sering membutuhkan alamat SM‑DP+ dan kode aktivasi secara terpisah.
- **Konflik Dual SIM** – jika Anda memiliki SIM fisik dan eSIM, pastikan eSIM diatur sebagai SIM data di SIM Manager.

### Jalur Menu eSIM Google Pixel
- **"Download a SIM instead?"** – opsi ini muncul di bagian bawah layar pengaturan SIM. Jika tidak melihatnya, Pixel Anda mungkin terkunci operator.
- **eSIM tidak muncul setelah pemindaian** – restart ponsel. Pixel kadang perlu reboot setelah unduhan profil.
- **Pengaturan APN tidak tersimpan** – di Pixel, pengaturan APN ada di Network & Internet > SIMs > [eSIM Anda] > Access Point Names. Jika tidak tersimpan:
  1. Tambahkan APN baru dengan **nama berbeda** (mis., "Airalo 2" alih-alih "Airalo").
  2. Simpan, lalu pilih secara manual.
  3. Nyalakan-matikan Mode Pesawat untuk memaksa APN baru berlaku.
- **eSIM menghilang setelah restart di Pixel** – lihat Bagian 17. Pengguna Pixel melaporkan ini lebih sering daripada pengguna Samsung.

### Jalur Menu eSIM OnePlus
- **Jalur menu:** Settings > Wi-Fi & Network > SIM & Network > Add eSIM
- **Masalah umum:** Perangkat OnePlus kadang menampilkan "eSIM not available" setelah pembaruan Oxygen OS. Perbaikan: Buka Settings > System > System Update dan instal patch terbaru.
- **Pengaturan APN:** Terletak di Settings > Wi-Fi & Network > SIM & Network > [eSIM] > Access Point Names.

### Jalur Menu eSIM Xiaomi
- **Jalur menu:** Settings > SIM Cards & Mobile Networks > Add eSIM
- **Pengaturan APN:** Terletak di Settings > SIM Cards & Mobile Networks > [eSIM] > Access Point Names.

### Jalur Menu eSIM Oppo dan Realme
- **Jalur menu:** Settings > Mobile Network > Add eSIM

**Tidak yakin apakah model persis Anda memiliki perangkat keras eSIM sama sekali** (Xiaomi pasar Tiongkok, Huawei, Samsung seri A yang dimatikan operatornya)? Itu pertanyaan kompatibilitas — lihat [panduan perangkat keras & dukungan model](/faq/esim-activation-errors-troubleshooting-guide/) kami, yang mencakup dukungan model demi model.


## eSIM Berfungsi di Rumah tetapi Tidak di Luar Negeri

**Gejala:** Anda menginstal eSIM di rumah, menampilkan batang sinyal, tetapi ketika Anda mendarat di tujuan, tidak ada sinyal. Keunikan spesifik tujuan — jaringan mitra, kunci regional, daftar periksa kedatangan — dikumpulkan di [panduan eSIM perjalanan](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) kami.

**Akar penyebab:** Profil eSIM diaktifkan saat Anda berada di jaringan rumah Anda, dan belum mendaftar ke jaringan tujuan.

**Perbaikan:**
1. Matikan lini eSIM (`Settings > Cellular > matikan`).
2. Tunggu 10 detik, lalu nyalakan kembali.
3. Buka Network Selection, matikan "Automatic", pilih secara manual jaringan yang bermitra dengan penyedia Anda (minta daftar mitra dari penyedia Anda).
4. Jika gagal, matikan lalu nyalakan kembali Data Roaming.
5. Restart ponsel.

Jika ini masih tidak berhasil, hubungi penyedia Anda — paket eSIM Anda mungkin sebenarnya tidak mencakup negara tempat Anda berada, atau mungkin ada masalah perjanjian roaming.


## eSIM Berfungsi di Satu Operator tetapi Tidak di Operator Lain

**Gejala:** Anda memiliki satu eSIM yang berfungsi baik, tetapi ketika Anda mencoba menambahkan eSIM kedua dari operator berbeda, gagal atau menampilkan "No Service."

**Akar penyebab:** Beberapa model ponsel (terutama yang lebih lama) memiliki keterbatasan pada profil operator mana yang bisa hidup berdampingan. Ini lebih umum pada perangkat Android dengan firmware modem yang lebih lama.

**Perbaikan:**
1. Pastikan ponsel Anda mendukung dual eSIM (iPhone 13 dan lebih baru, Pixel 7 dan lebih baru, Samsung S23 dan lebih baru).
2. Jika Anda memiliki SIM fisik terpasang, coba lepas — beberapa ponsel membatasi jumlah profil aktif saat SIM fisik ada.
3. Perbarui firmware ponsel Anda (pembaruan pengaturan operator sering memperbaiki ini).
4. Hubungi operator kedua dan tanyakan apakah profil eSIM mereka mendukung koeksistensi dual-SIM.


## Kapan Menghubungi Penyedia eSIM Anda vs. Pabrikan Ponsel Anda

| Masalah | Hubungi |
|---------|---------|
| Kode QR kedaluwarsa / tidak valid | Penyedia eSIM |
| "Activation failed" berulang kali | Penyedia eSIM |
| Tanpa data setelah konfigurasi APN | Penyedia eSIM |
| Perangkat menampilkan "No Service" setelah mendarat | Penyedia eSIM (periksa perjanjian roaming) |
| eSIM tidak muncul di pengaturan | Pabrikan ponsel (jika bug perangkat lunak) atau masalah kunci operator |
| Masalah perangkat keras (kamera, layar, baterai) | Pabrikan ponsel |
| Kunci operator / pembukaan kunci | Operator rumah Anda |
| Pembatasan MDM | Departemen IT Anda |
| eSIM menghilang setelah restart | Keduanya — coba perbaikan di Bagian 17, lalu hubungi penyedia |
| "eSIM already in use" | Penyedia eSIM (untuk melepas profil secara paksa) |
| eSIM Apple Watch tidak terhubung | Operator (untuk penyediaan) atau Apple Support (untuk masalah pemasangan) |


## Pertanyaan yang Sering Diajukan

**Q1: Apakah menghapus eSIM membatalkan paket saya?**
Tidak. Menghapus eSIM hanya menghapus profil dari ponsel. Anda harus menghubungi operator secara terpisah untuk membatalkan paket.

**Q2: Bisakah saya memulihkan eSIM yang terhapus?**
Untuk eSIM operator pascabayar, ya — operator dapat menerbitkan ulang profil. Untuk eSIM perjalanan, penghapusan biasanya permanen dan membutuhkan pembelian baru.

**Q3: Mengapa eSIM saya berfungsi di Wi-Fi tetapi tidak di seluler?**
Ini hampir selalu masalah APN atau Data Roaming. Ikuti Bagian 8 dan Bagian 14.

**Q4: Apakah eSIM menguras baterai saya lebih cepat?**
Tidak. Menjalankan dua lini aktif sekaligus bisa menggunakan daya sedikit lebih banyak, tetapi satu eSIM tidak menguras baterai.

**Q5: Berapa banyak eSIM yang bisa saya simpan di ponsel saya?**
Biasanya 8–10 profil di iPhone dan sebagian besar perangkat Android. Anda bisa menyimpan jauh lebih banyak tetapi hanya memiliki dua aktif pada satu waktu (dual‑SIM).

**Q6: Mengapa eSIM saya terus kehilangan sinyal?**
Ini bisa karena kepadatan jaringan, cakupan lemah, atau glitch perangkat lunak. Coba nyalakan-matikan Mode Pesawat, restart, atau pilih jaringan secara manual.

**Q7: Saya melihat "Activation Required" di eSIM saya setelah restart – apa artinya?**
Ponsel kehilangan koneksi ke server aktivasi operator. Reboot ponsel dan pastikan Anda memiliki koneksi jaringan. Jika berlanjut, hapus dan instal ulang eSIM.

**Q8: Bagaimana jika operator saya bilang mereka tidak mendukung eSIM?**
Anda tetap bisa menggunakan penyedia eSIM perjalanan seperti Roami, Airalo, atau Holafly — mereka bekerja independen dari operator rumah Anda dan tidak membutuhkan dukungan operator.

**Q9: eSIM saya berpindah ke iPhone baru saya tetapi saya tidak bisa menelepon – hanya data yang berfungsi.**
Periksa bahwa eSIM diatur sebagai Default Voice Line. Juga pastikan operator Anda mendukung VoLTE untuk lini itu.

**Q10: Pemindaian kode QR berhasil tetapi unduhannya lama sekali – apakah itu normal?**
Tidak. Seharusnya memakan 1–2 menit. Jika lebih lama, Wi‑Fi Anda terlalu lambat. Ganti jaringan atau gunakan entri manual.

**Q11: eSIM saya aktif tetapi saya tidak bisa mengirim atau menerima SMS.**
Beberapa eSIM perjalanan hanya data dan tidak mendukung SMS. Jika Anda membutuhkan SMS, beli paket yang secara eksplisit menyertakan nomor telepon.

**Q12: Saya tidak sengaja me-reset pengaturan jaringan saya – sekarang eSIM saya hilang.**
Reset pengaturan jaringan tidak menghapus profil eSIM. eSIM Anda seharusnya masih ada. Buka Settings > Cellular dan aktifkan kembali lini tersebut. Jika hilang, Anda mungkin tidak sengaja menghapusnya — jika demikian lihat Bagian 15.

**Q13: Apa bedanya menghapus eSIM dengan mematikannya?**
Mematikan eSIM menyimpan profil di ponsel tetapi menonaktifkan lini. Anda bisa menyalakannya kembali kapan saja. Menghapus eSIM menghapus profil secara permanen — Anda tidak bisa memulihkannya tanpa kode QR baru. Hanya hapus ketika paket sudah sepenuhnya kedaluwarsa.

**Q14: Bisakah VPN mengganggu aktivasi eSIM?**
Ya — VPN dapat mengganggu koneksi server aktivasi. Matikan VPN Anda sebelum mengaktifkan eSIM.

**Q15: Paket eSIM saya tertulis "unlimited" tetapi saya tidak punya data setelah menggunakan 5GB.**
Banyak paket "unlimited" memiliki Fair Usage Policy (FUP) yang membatasi kecepatan setelah ambang data tertentu. Periksa syarat penyedia Anda — Anda mungkin perlu membeli paket top-up untuk lebih banyak data kecepatan tinggi.

👉 **Pemecahan masalah selesai?** Pilih [paket eSIM AS](/united-states-esim/) atau [paket eSIM Eropa](/europe-esim/) untuk kembali daring.

---

## Sumber

- [GSMA — spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Menyiapkan eSIM di iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Menyiapkan eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
