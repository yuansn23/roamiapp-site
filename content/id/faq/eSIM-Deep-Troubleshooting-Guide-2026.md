---
title: "Panduan Lengkap Pemecahan Masalah eSIM: 18 Perbaikan"
h1_title: "Panduan Lengkap Pemecahan Masalah eSIM di 2026 – 18 Perbaikan Dunia Nyata"
description: "Panduan pemecahan masalah mendalam eSIM 2026. Perbaiki kegagalan aktivasi, error transfer, tidak ada layanan, dan masalah pemindaian kode QR di iPhone & Android. Solusi langkah demi langkah."
keywords: ["pemecahan masalah eSIM", "aktivasi eSIM gagal", "eSIM tidak ada layanan", "error transfer eSIM", "transfer lintas platform eSIM", "iOS 18 eSIM", "pengaturan APN eSIM", "kode konfirmasi eSIM", "kunci operator eSIM", "masalah sinyal dual eSIM"]
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


> **Catatan Editor:** Roami adalah merek di balik panduan ini. Kami telah mendiagnosis dan menyelesaikan ribuan masalah eSIM di 40+ negara dan setiap merek perangkat utama. Panduan ini didasarkan pada pemecahan masalah dunia nyata — bukan teori. Jika Anda telah mencoba perbaikan cepat dan masih memiliki masalah, di sinilah Anda menemukan solusi nyata.

## Alur Diagnostik Cepat – Temukan Masalah Anda dalam 10 Detik

Gunakan peta keputusan ini untuk langsung melompat ke perbaikan yang tepat. Tidak perlu membaca semuanya.

| Apa yang Anda lihat / alami | Apa yang kemungkinan rusak | Urgensi | Langsung ke perbaikan |
|---------------------------|----------------------|---------|-------------|
| **Kode QR tidak mau dipindai / mengatakan tidak valid** | Kode QR kedaluwarsa atau rusak | Rendah | [Bagian 3](#3-esim-qr-code-invalid-or-expired) |
| **"Tidak dapat Mengaktifkan" atau "Aktivasi gagal"** | Timeout jaringan atau error server | Sedang | [Bagian 1](#1-esim-activation-failed-or-unable-to-activate) |
| **"Tidak Ada Layanan" setelah instalasi** | Data Roaming mati atau APN hilang | Tinggi | [Bagian 2](#2-esim-no-service-after-installation) |
| **Bilah sinyal penuh tetapi tidak ada internet** | APN salah konfigurasi | Tinggi | [Bagian 8](#8-esim-no-data-connection-after-activation-apn) |
| **"Paket Seluler Tidak Dapat Ditambahkan"** | Terlalu banyak eSIM tersimpan atau batasan perangkat keras | Sedang | [Bagian 5](#5-esim-cellular-plan-cannot-be-added) |
| **"eSIM sudah digunakan"** | Profil masih terikat ke perangkat lama | Tinggi | [Bagian 4](#4-esim-already-in-use-or-bound-to-another-device) |
| **Popup kode konfirmasi** | Profil memerlukan PIN | Rendah | [Bagian 6](#6-esim-confirmation-code-required) |
| **"SIM tidak didukung"** | Ponsel terkunci operator | Tinggi | [Bagian 7](#7-esim-sim-not-supported-carrier-locked-device) |
| **Macet di "Mengaktifkan" >10 menit** | Unduhan terhenti | Sedang | [Bagian 9](#9-esim-stuck-on-activating) |
| **Dual SIM: satu jalur tidak ada sinyal** | Konflik routing | Sedang | [Bagian 10](#10-dual-esim-one-line-shows-no-service) |
| **Transfer eSIM ke ponsel baru gagal** | Transfer lintas platform tidak didukung | Tinggi | [Bagian 11](#11-esim-transfer-failed) |
| **Error pemulihan iPhone 4013/4014** | Masalah perangkat keras/firmware, bukan eSIM | Tinggi | [Bagian 12](#12-iphone-esim-restore-error-4013-or-4014) |
| **"Profil kedaluwarsa"** | Kode QR habis waktu | Rendah | [Bagian 13](#13-esim-profile-expired) |
| **Roaming tidak berfungsi di luar negeri** | Sakelar Data Roaming mati | Tinggi | [Bagian 14](#14-esim-data-roaming-not-working) |
| **Secara tidak sengaja menghapus eSIM** | Kesalahan pengguna | Tinggi | [Bagian 15](#15-esim-deleted-by-mistake) |
| **MDM memblokir perubahan eSIM** | Kebijakan perangkat kerja | Sedang | [Bagian 16](#16-mdm-or-enterprise-restrictions-block-esim) |
| **eSIM menghilang setelah restart** | Gangguan perangkat lunak iOS/Android | Tinggi | [Bagian 17](#17-esim-disappeared-after-restart) |
| **Wi-Fi Calling berfungsi tetapi data eSIM tidak** | Konflik routing antara Wi-Fi dan seluler | Sedang | [Bagian 18](#18-wi-fi-calling-works-but-esim-data-doesnt) |
| **SIM fisik dimasukkan, eSIM tidak berfungsi** | Konflik baki SIM | Tinggi | [Bagian 19](#19-esim-vs-physical-sim-conflict) |
| **eSIM Apple Watch tidak terhubung** | Masalah pemasangan atau operator | Sedang | [Bagian 20](#20-apple-watch-esim-not-working) |


## Ringkasan Cepat – Tabel Referensi Sepintas

| Gejala | Kemungkinan penyebab | Perbaikan |
|---------|-------------------|-----|
| "Tidak dapat Mengaktifkan" / "Aktivasi gagal" | Wi-Fi tidak stabil atau error server operator | Jaringan stabil + coba lagi, lalu instal ulang (Bagian 1) |
| "Tidak Ada Layanan" setelah instalasi | Data roaming mati / APN hilang | Aktifkan roaming, periksa APN (Bagian 2) |
| Kode QR "Tidak valid" / "Kedaluwarsa" | Kode QR kedaluwarsa atau sudah digunakan | Minta kode QR baru (Bagian 3) |
| "eSIM sudah digunakan" | Profil tidak dilepaskan dari perangkat lama | Hapus dari perangkat lama atau rilis operator (Bagian 4) |
| "Paket Seluler Tidak Dapat Ditambahkan" | Terlalu banyak eSIM tersimpan | Hapus eSIM yang tidak digunakan (Bagian 5) |
| Kode konfirmasi diperlukan | Profil memiliki kode wajib | Temukan kode 4–8 digit di email operator (Bagian 6) |
| "SIM tidak didukung" | Perangkat terkunci operator | Buka kunci perangkat atau hubungi operator (Bagian 7) |
| Tidak ada data setelah aktivasi | APN tidak dikonfigurasi | Masukkan APN secara manual (Bagian 8) |
| Macet di "Mengaktifkan" | Unduhan profil terhenti | Alihkan Mode Pesawat, instal ulang (Bagian 9) |
| Satu jalur dual-SIM "Tidak Ada Layanan" | Konflik routing panggilan/data | Periksa routing jalur dan sakelar (Bagian 10) |
| Transfer eSIM gagal | Operator tidak mendukung transfer | Gunakan cadangan kode QR operator (Bagian 11) |
| Error pemulihan 4013 / 4014 | Perangkat keras/firmware selama pemulihan | Kabel berbeda, perbarui komputer (Bagian 12) |
| "Profil kedaluwarsa" | Kode QR terbatas waktu | Minta kode QR baru (Bagian 13) |
| Data roaming tidak berfungsi | Roaming mati untuk jalur eSIM | Aktifkan Data Roaming (Bagian 14) |
| Menghapus eSIM secara tidak sengaja | Profil dihapus secara lokal | Hubungi operator / beli paket baru (Bagian 15) |
| MDM memblokir perubahan eSIM | Batasan perusahaan | Hubungi admin TI Anda (Bagian 16) |
| eSIM menghilang setelah restart | Gangguan perangkat lunak iOS/Android | Periksa pengaturan, tambahkan ulang profil (Bagian 17) |
| Wi-Fi Calling berfungsi tetapi data tidak | Konflik routing | Nonaktifkan Wi-Fi Calling sementara (Bagian 18) |
| SIM fisik dimasukkan, eSIM berhenti berfungsi | Konflik baki/pembaca | Lepaskan SIM fisik, restart (Bagian 19) |
| eSIM Apple Watch tidak terhubung | Masalah pemasangan atau operator | Pasang ulang jam, hubungi operator (Bagian 20) |


## 1. Aktivasi eSIM Gagal atau "Tidak Dapat Mengaktifkan"

**Penyebab:** Hampir selalu koneksi Wi-Fi yang tidak stabil atau error server operator (SM-DP+) sementara, bukan masalah dengan ponsel Anda. SM-DP+ (Subscription Manager - Data Preparation Plus) adalah server aman yang mengirimkan profil eSIM Anda ke perangkat — jika tidak dapat dijangkau, aktivasi gagal.

**Perbaikan:**
1. Pindah ke koneksi Wi-Fi atau data seluler yang stabil.
2. Alihkan Mode Pesawat on/off untuk menyegarkan baseband.
3. Jika error berulang, hapus eSIM yang tertunda di bawah `Pengaturan > Seluler`, restart, dan pindai ulang kode QR.

**Khusus iOS 18:** Jika Anda menggunakan iOS 18, pesan error mungkin muncul sebagai "Tidak Dapat Menyelesaikan Aktivasi" dengan tombol Coba Lagi. Ketuk Coba Lagi terlebih dahulu — alur aktivasi iOS 18 yang ditingkatkan sering menyelesaikan masalah tanpa instalasi ulang penuh.

---

## 2. eSIM "Tidak Ada Layanan" Setelah Instalasi

**Penyebab:** Profil terinstal tetapi ponsel belum mendaftar ke jaringan lokal — biasanya karena Data Roaming mati atau APN hilang.

**Perbaikan:**
1. Nyalakan **Data Roaming** untuk jalur eSIM.
2. Di bawah `Pengaturan > Seluler > [eSIM Anda] > Pilihan Jaringan`, matikan "Otomatis", pilih operator secara manual, tunggu sampai gagal, lalu kembali ke "Otomatis" untuk memaksa registrasi ulang.
3. Jika masih tidak ada data, periksa APN (Bagian 8).

---

## 3. Kode QR eSIM "Tidak Valid" atau "Kedaluwarsa"

**Penyebab:** Kode QR eSIM sekali pakai dan terbatas waktu. Kode tersebut sudah digunakan atau telah kedaluwarsa.

**Perbaikan:** Hubungi penyedia eSIM Anda dan minta mereka menerbitkan ulang kode QR baru, lalu pindai segera.

**Jika Anda memindai dari layar ponsel:** Simpan gambar kode QR ke Foto terlebih dahulu, lalu di Pengaturan > Seluler > Tambahkan eSIM, pilih "Gunakan Kode QR" dan ketuk "Pilih Foto" untuk memilih gambar yang disimpan. Ini menghindari masalah "tidak bisa memindai layar sendiri".

---

## 4. "eSIM Sudah Digunakan" atau "Terikat ke Perangkat Lain"

**Penyebab:** Profil tidak pernah dilepaskan dari perangkat lama, sehingga operator masih mengaitkannya dengan ponsel itu.

**Perbaikan:**
1. Di perangkat lama, hapus eSIM di bawah `Pengaturan > Seluler`.
2. Tunggu sekitar lima menit dan coba lagi di perangkat baru.
3. Jika perangkat lama hilang atau rusak, hubungi operator Anda dan minta mereka untuk melepaskan profil secara paksa dari sisi mereka.

---

## 5. eSIM "Paket Seluler Tidak Dapat Ditambahkan"

**Penyebab:** Ponsel telah mencapai batas profil eSIM yang tersimpan (biasanya 8–10, tergantung model), atau perangkat adalah model China daratan tanpa perangkat keras eSIM.

**Perbaikan:** Hapus eSIM yang tidak digunakan di bawah `Pengaturan > Seluler`, lalu tambahkan yang baru. Jika perangkat Anda dibeli di China daratan, ia menggunakan dua slot SIM fisik dan tidak dapat menambahkan eSIM.

---

## 6. Kode Konfirmasi eSIM Diperlukan

**Penyebab:** Beberapa profil eSIM memiliki kode konfirmasi wajib yang diperlukan sebelum profil diunduh. Ini adalah PIN 4-8 digit yang memverifikasi identitas Anda.

**Perbaikan:** Cari kode 4–8 digit di email yang dikirim operator Anda bersama kode QR. Jika tidak dapat menemukannya, hubungi operator.

**Tempat umum menemukan kode konfirmasi:**
- Baris subjek email aktivasi
- Dekat bagian bawah email, di bawah "Detail Aktivasi"
- Di aplikasi operator di bawah "Paket Saya" > "Detail"

---

## 7. eSIM "SIM Tidak Didukung" — Perangkat Terkunci Operator

**Penyebab:** Ponsel terkunci ke operator lain dan tidak dapat menerima profil dari penyedia yang berbeda.

**Perbaikan:** Periksa `Pengaturan > Umum > Tentang > Kunci Operator`. Jika tidak bertuliskan "Tidak ada batasan SIM", hubungi operator rumah Anda untuk meminta buka kunci.

---

## 8. eSIM Tidak Ada Koneksi Data Setelah Aktivasi (APN)

**Penyebab:** Access Point Name (APN) tidak dikonfigurasi secara otomatis, sehingga ponsel tidak memiliki rute ke jaringan data.

**Perbaikan:**
1. Buka `Pengaturan > Seluler > Jaringan Data Seluler`.
2. Masukkan nilai APN dari situs web penyedia eSIM Anda (misalnya, `globaldata` untuk Airalo).
3. Sebagian besar eSIM perjalanan mengonfigurasi APN secara otomatis, jadi konfirmasikan nilai yang benar dengan penyedia Anda.

**Nilai APN umum berdasarkan penyedia (jika konfigurasi otomatis gagal):**

| Penyedia | APN | Nama Pengguna | Kata Sandi |
|----------|-----|----------|----------|
| Roami | internet | (kosong) | (kosong) |
| Airalo | globaldata | (kosong) | (kosong) |
| Holafly | holafly | (kosong) | (kosong) |
| Nomad | nomad | (kosong) | (kosong) |
| Ubigi | ubigi | (kosong) | (kosong) |
| Google Fi | h2g2 | (kosong) | (kosong) |
| T-Mobile (AS) | fast.t-mobile.com | (kosong) | (kosong) |
| AT&T (AS) | nxgen | (kosong) | (kosong) |
| Verizon (AS) | vzwinternet | (kosong) | (kosong) |
| EE (Inggris) | everywhere | (kosong) | (kosong) |
| O2 (Inggris) | mobile.o2.co.uk | web | web |
| Vodafone (Inggris) | internet | (kosong) | (kosong) |
| Three (Inggris) | three.co.uk | (kosong) | (kosong) |

---

## 9. eSIM Macet di "Mengaktifkan"

**Penyebab:** Unduhan profil terhenti, sering karena sinyal lemah atau server aktivasi yang sibuk.

**Perbaikan:**
1. Pastikan Anda berada di jaringan yang stabil.
2. Alihkan Mode Pesawat on/off.
3. Jika tetap macet selama lebih dari 10 menit, hapus eSIM dan instal ulang dari kode QR.

---

## 10. Dual eSIM: Satu Jalur Menunjukkan "Tidak Ada Layanan"

**Penyebab:** Dengan dua eSIM aktif, routing panggilan masuk dan data dapat bertentangan, meninggalkan satu jalur tanpa layanan. Ini adalah **masalah sinyal dual eSIM** umum yang mempengaruhi pengguna dengan dua jalur aktif.

**Perbaikan:**
1. Di bawah `Pengaturan > Seluler`, konfirmasikan jalur mana yang diatur untuk **Data Seluler** dan mana untuk **Jalur Suara Default**.
2. Alihkan setiap jalur mati dan nyalakan kembali.
3. Untuk perbaikan lebih dalam, lihat panduan **[Dual eSIM tidak berfungsi? 12 perbaikan untuk iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** .

---

## 11. Transfer eSIM Gagal

**Penyebab:** Tidak ada transfer eSIM lintas platform bawaan, dan operator Anda mungkin tidak mendukung transfer berbasis aplikasi.

**Perbaikan:** Minta operator Anda untuk menerbitkan ulang eSIM sebagai kode QR baru dan pindai di perangkat baru. Setelah transfer, WhatsApp, iMessage, dan kode dua faktor SMS tetap berfungsi karena nomor Anda tidak berubah. Untuk petunjuk langkah demi langkah lengkap, lihat **[panduan transfer eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## 12. iPhone eSIM Error Pemulihan 4013 atau 4014

**Penyebab:** Error ini menunjukkan masalah perangkat keras atau firmware selama pemulihan perangkat lunak, bukan masalah eSIM. Sering disebabkan oleh kabel USB yang rusak atau perangkat lunak komputer yang kedaluwarsa.

**Perbaikan:** Coba kabel dan port USB yang berbeda, perbarui sistem operasi komputer Anda, lalu coba pemulihan lagi. Hubungi Apple Support jika error terus berlanjut.

---

## 13. eSIM "Profil Kedaluwarsa"

**Penyebab:** Kode QR atau kode aktivasi eSIM terbatas waktu dan telah kedaluwarsa.

**Perbaikan:** Hubungi penyedia eSIM Anda dan minta kode QR baru, lalu aktifkan segera.

---

## 14. Data Roaming eSIM Tidak Berfungsi

**Penyebab:** Data Roaming dimatikan untuk jalur eSIM perjalanan, sehingga tidak dapat terhubung ke jaringan lokal.

**Perbaikan:** Buka `Pengaturan > Seluler > [eSIM Anda]` dan nyalakan **Data Roaming**. Ini diperlukan untuk sebagian besar eSIM perjalanan agar berfungsi di luar negeri.

---

## 15. eSIM Terhapus Secara Tidak Sengaja

**Penyebab:** Menghapus eSIM menghapus profil dari ponsel tetapi tidak membatalkan paket.

**Perbaikan:**
- Untuk eSIM operator pascabayar, hubungi operator — mereka biasanya dapat menerbitkan ulang kode QR.
- Untuk eSIM perjalanan (Roami, Airalo, dan sejenisnya), penghapusan biasanya permanen, jadi Anda perlu membeli paket baru.
- Selalu simpan cadangan email aktivasi asli dan kode QR Anda.

---

## 16. MDM atau Batasan Perusahaan Memblokir eSIM

**Penyebab:** Pada perangkat yang dikelola (kerja), kebijakan Mobile Device Management seperti `AllowESIMModification` dapat memblokir penambahan atau penghapusan eSIM.

**Perbaikan:** Hubungi administrator TI Anda untuk mengaktifkan perubahan eSIM, atau gunakan perangkat yang tidak dikelola.

---

## 17. eSIM Menghilang Setelah Restart

**Gejala:** Anda merestart ponsel dan eSIM tidak lagi tercantum di bawah Pengaturan > Seluler. Itu hilang.

**Penyebab:** Gangguan perangkat lunak pada iOS atau Android terkadang dapat menyebabkan profil eSIM menjadi tersembunyi atau tidak terbaca setelah restart, terutama setelah pembaruan OS. Profil masih ada di perangkat, tetapi sistem gagal memasangnya.

**Perbaikan:**
1. **iPhone:** Buka Pengaturan > Umum > Tentang dan gulir ke bawah ke "SIM Tersedia" atau "SIM Digital". Jika eSIM muncul di sana tetapi tidak di Seluler, restart ponsel lagi.
2. **iPhone:** Jika restart tidak berhasil, buka Pengaturan > Seluler > Tambahkan eSIM. Terkadang ponsel akan mendeteksi profil yang ada dan menawarkan untuk menambahkannya kembali tanpa kode QR baru.
3. **Android (Samsung):** Buka Pengaturan > Koneksi > Manajer SIM. eSIM mungkin menunjukkan "Tidak Aktif". Ketuk dan aktifkan.
4. **Android (Pixel):** Buka Pengaturan > Jaringan & Internet > SIM. Jika eSIM hilang, ketuk "Tambahkan Operator" — ponsel dapat mendeteksi profil yang ada.
5. Jika tidak ada yang berhasil, hubungi operator Anda dan minta kode QR baru. Profil lama mungkin rusak.

**Pencegahan:** Sebelum restart, pastikan semua jalur eSIM dimatikan, lalu restart, lalu nyalakan kembali. Ini mengurangi kemungkinan sistem kehilangan jejak profil.

---

## 18. Wi-Fi Calling Berfungsi tetapi Data eSIM Tidak

**Gejala:** Anda memiliki Wi-Fi Calling aktif di jalur rumah Anda, tetapi eSIM perjalanan Anda tidak memiliki koneksi data. Atau, eSIM berfungsi di Wi-Fi tetapi tidak di seluler.

**Penyebab:** Konflik routing antara Wi-Fi Calling dan data seluler. Saat Wi-Fi Calling aktif, ponsel dapat memprioritaskan jaringan Wi-Fi untuk semua komunikasi, termasuk data, dan gagal merutekan data seluler dengan benar melalui eSIM.

**Perbaikan:**
1. Matikan sementara Wi-Fi Calling di jalur rumah Anda: Pengaturan > Seluler > [jalur rumah] > Wi-Fi Calling > matikan.
2. Alihkan Mode Pesawat on/off untuk memaksa ponsel mendaftar ulang ke jaringan seluler.
3. Uji koneksi data eSIM. Jika berfungsi, Anda dapat menyalakan Wi-Fi Calling kembali — routing sekarang seharusnya benar.
4. Jika masalah terulang, periksa bahwa jalur rumah Anda memiliki **Data Roaming MATI** dan eSIM perjalanan memiliki **Data Roaming NYALA**.

**Alternatif:** Di iPhone, buka Pengaturan > Seluler > Data Seluler dan pastikan eSIM perjalanan dipilih. Kemudian aktifkan "Izinkan Peralihan Data Seluler" — ini memungkinkan ponsel menggunakan eSIM perjalanan untuk data Wi-Fi Calling bahkan jika jalur rumah adalah jalur suara.

---

## 19. Konflik eSIM vs SIM Fisik

**Gejala:** Anda memasukkan kartu SIM fisik ke dalam ponsel, dan eSIM Anda yang sebelumnya berfungsi tiba-tiba menunjukkan "Tidak Ada Layanan" atau menghilang sepenuhnya dari Pengaturan.

**Penyebab:** Ini adalah perilaku yang diketahui pada perangkat terkunci operator. Ketika iPhone terkunci mendeteksi SIM fisik dari operator yang berbeda, ia dapat menonaktifkan slot eSIM untuk mencegah penggunaan yang tidak sah. Pada beberapa perangkat Android, memasukkan SIM fisik juga dapat menyebabkan sistem memprioritaskan SIM fisik daripada eSIM untuk semua fungsi.

**Perbaikan:**
1. Lepaskan kartu SIM fisik dari baki.
2. Restart ponsel Anda.
3. eSIM akan muncul kembali di Pengaturan > Seluler (iPhone) atau Pengaturan > Koneksi > Manajer SIM (Android).
4. Jika eSIM muncul kembali tetapi masih menunjukkan "Tidak Ada Layanan", aktifkan Data Roaming untuk jalur eSIM.
5. Jika Anda memerlukan SIM fisik dan eSIM untuk bekerja secara bersamaan, hubungi operator Anda untuk membuka kunci perangkat.

> **Alternatif:** Beberapa pengguna melaporkan bahwa mengaktifkan dan menonaktifkan jalur eSIM (tanpa melepas SIM fisik) menyelesaikan konflik. Coba ini terlebih dahulu sebelum melepas SIM fisik.

---

## 20. eSIM Apple Watch Tidak Berfungsi

**Gejala:** Anda telah mengatur seluler di Apple Watch, tetapi menunjukkan "Tidak Ada Layanan" atau "Mencari" — atau paket eSIM tidak muncul di aplikasi Watch sama sekali.

**Penyebab:** Aktivasi eSIM Apple Watch memerlukan dukungan operator untuk jenis paket khusus jam tangan. Tidak semua operator mendukung Apple Watch eSIM, dan proses pengaturan memerlukan iPhone Anda di dekatnya dengan koneksi internet yang stabil.

**Perbaikan:**
1. **Periksa dukungan operator:** Pastikan operator Anda secara khusus mendukung Apple Watch eSIM — tidak semua operator melakukannya. Periksa situs web operator Anda atau hubungi mereka.
2. **Pasang ulang jam:** Lepas pasangan Apple Watch dari iPhone Anda (ini mencadangkan jam), lalu pasang kembali. Selama pengaturan, Anda akan diminta untuk mengatur seluler lagi.
3. **Periksa jarak iPhone:** Jaga iPhone Anda tetap di dekatnya dengan koneksi Wi-Fi atau seluler yang stabil selama seluruh proses pengaturan.
4. **Restart kedua perangkat:** Restart iPhone dan Apple Watch, lalu coba lagi.
5. **Hubungi operator:** Jika eSIM masih tidak aktif, hubungi operator Anda dan berikan mereka **EID** dan **IMEI** jam tangan — mereka mungkin perlu menyediakan eSIM secara manual dari sisi mereka.

**Keterbatasan khusus Apple Watch:**
- Hanya satu jalur yang dapat aktif di jam tangan pada satu waktu — Anda tidak dapat menggunakan kedua jalur iPhone di jam tangan.
- Jam tangan mencerminkan jalur yang Anda pilih selama pengaturan. Untuk mengubahnya, Anda perlu melepas pasangan dan memasang kembali jam.

---

## 7 Kesalahan Mematikan yang Merusak eSIM Anda – Dan Cara Menghindarinya

Ini adalah error pengguna paling umum yang mengubah eSIM yang berfungsi menjadi batu bata. Hindari dengan segala cara.

| Kesalahan | Apa yang Terjadi | Cara Menghindari |
|---------|--------------|--------------|
| **Menghapus eSIM untuk "memperbaiki" masalah koneksi** | Profil dihapus secara permanen — Anda kehilangan semua data yang tersisa dan harus membeli paket baru | Jangan pernah mengetuk "Hapus eSIM" kecuali paket sudah habis masa berlakunya. Menghapus tidak "menyegarkan" — itu menghancurkan. |
| **Memindai kode QR dengan aplikasi Kamera** | Kamera mengenali kode tetapi tidak melakukan apa pun — tidak ada profil yang terinstal | Selalu buka Pengaturan > Seluler > Tambahkan eSIM terlebih dahulu — jangan pernah menggunakan aplikasi Kamera mandiri. |
| **Menginstal di bandara dengan Wi-Fi lemah** | Unduhan terputus di tengah instalasi, merusak profil | Instal di rumah dengan Wi-Fi stabil Anda sendiri sebelum berangkat. |
| **Menunggu sampai Anda mendarat untuk menginstal** | Anda tiba tanpa Wi-Fi dan tidak dapat mengunduh profil | Instal profil sebelum keberangkatan (profil tetap tidak aktif sampai Anda menyalakan Data Roaming). |
| **Lupa menyalakan Data Roaming untuk eSIM** | Bilah sinyal penuh tetapi nol internet | Setelah mendarat, buka Pengaturan > Seluler > [eSIM Anda] dan aktifkan Data Roaming. |
| **Mereset pengaturan jaringan dengan berpikir itu akan "menyegarkan" eSIM** | Reset jaringan tidak menghapus eSIM, tetapi menghapus kata sandi Wi-Fi dan pemasangan Bluetooth — Anda kehilangan semua jaringan yang tersimpan | Hanya reset pengaturan jaringan sebagai upaya terakhir, dan ketahuilah bahwa itu tidak akan memperbaiki masalah aktivasi eSIM. |
| **Mematikan jalur eSIM alih-alih hanya menonaktifkan Data Roaming** | eSIM dinonaktifkan sepenuhnya dan tidak akan mendaftar saat Anda mengaktifkannya kembali | Matikan Data Roaming, bukan seluruh jalur. Pertahankan jalur NYALA tetapi roam MATI saat tidak digunakan. |


## Gejala Kombinasi – Ketika Anda Memiliki Banyak Masalah

Terkadang Anda tidak hanya memiliki satu masalah — Anda memiliki dua atau tiga sekaligus. Berikut cara mendiagnosis gejala kombinasi:

| Kombinasi Gejala | Apa yang Sebenarnya Terjadi | Urutan Perbaikan |
|---------------------|---------------------------|-----------|
| **Kode QR dipindai tetapi kemudian "Aktivasi gagal"** | Kode QR valid, tetapi server unduhan tidak dapat dijangkau | Perbaiki jaringan terlebih dahulu (Bagian 1), lalu pindai ulang |
| **eSIM menunjukkan bilah sinyal tetapi tidak ada data DAN "Tidak Ada Layanan" di jalur rumah** | APN hilang DAN Anda memiliki konflik routing dual-SIM | Perbaiki APN terlebih dahulu (Bagian 8), lalu perbaiki routing dual-SIM (Bagian 10) |
| **Transfer berhasil tetapi ponsel baru memiliki "Tidak Ada Layanan"** | Profil ditransfer tetapi tidak mendaftar di jaringan baru | Hapus eSIM dari ponsel lama, lalu restart ponsel baru (Bagian 4 + Bagian 2) |
| **Wi-Fi Calling berfungsi tetapi eSIM tidak memiliki data DAN jalur rumah memiliki biaya roaming** | Banyak konflik routing plus Data Roaming dibiarkan NYALA di jalur rumah | Matikan Data Roaming jalur rumah, perbaiki konflik Wi-Fi Calling (Bagian 18), lalu periksa APN |
| **eSIM menghilang setelah restart DAN "Paket Seluler Tidak Dapat Ditambahkan"** | Profil rusak DAN penyimpanan penuh | Hapus eSIM yang tidak digunakan terlebih dahulu (Bagian 5), lalu coba tambahkan ulang (Bagian 17) |

**Aturan umum:** Perbaiki **masalah jaringan terlebih dahulu** (Wi-Fi, Data Roaming, APN), lalu **masalah profil** (kode QR, aktivasi), lalu **masalah khusus perangkat** (kunci operator, MDM). Jangan mencoba memperbaiki semuanya sekaligus — kerjakan gejala satu per satu.


## Keanehan Khusus Perangkat – iPhone vs. Samsung vs. Pixel

Tidak semua ponsel berperilaku sama. Berikut adalah masalah khusus perangkat yang umum.

### iPhone (iOS 16–18)
- **"Tambahkan eSIM" berwarna abu-abu** – iPhone Anda mungkin terkunci operator. Periksa Pengaturan > Umum > Tentang > Kunci Operator.
- **Transfer Cepat gagal** – pastikan kedua ponsel menggunakan Apple ID yang sama, Bluetooth menyala, dan berada dalam jarak 10cm satu sama lain.
- **Setelah pembaruan iOS, eSIM menunjukkan "Tidak Ada Layanan"** – buka Pengaturan > Seluler > ketuk eSIM > alihkan "Aktifkan Jalur Ini" mati dan nyalakan kembali. Juga periksa bahwa Data Roaming masih NYALA.
- **eSIM menghilang setelah pembaruan iOS** – lihat Bagian 17. Ini lebih umum terjadi di iOS daripada Android setelah pembaruan besar.
- **Khusus iOS 18:** Alur "Tambahkan eSIM" telah didesain ulang dengan opsi entri manual yang lebih menonjol. Jika Anda menggunakan iOS 18 dan kode QR tidak mau dipindai, tombol entri manual sekarang lebih mudah ditemukan di bagian bawah layar.

### Samsung Galaxy (One UI 5, 6, 6.1, 7)
- **Jalur menu bervariasi berdasarkan versi One UI:**
  - **One UI 5 (Android 13):** Pengaturan > Koneksi > Manajer SIM > Tambahkan eSIM
  - **One UI 6/6.1 (Android 14):** Pengaturan > Koneksi > Manajer SIM > Tambahkan eSIM (jalur yang sama)
  - **One UI 7 (Android 15):** Pengaturan > Koneksi > Manajer SIM > Tambahkan Paket Seluler
- **Pemindaian kode QR gagal** – coba entri manual (ketuk "Masukkan kode aktivasi secara manual"). Samsung sering memerlukan alamat SM‑DP+ dan kode aktivasi secara terpisah.
- **Konflik dual SIM** – jika Anda memiliki SIM fisik dan eSIM, periksa bahwa eSIM diatur sebagai SIM data di Manajer SIM.
- **"eSIM tidak didukung" pada Samsung seri A** – ponsel seri A (A23, A33, A53, dll.) tidak mendukung eSIM di semua wilayah. Periksa model spesifik Anda sebelum membeli eSIM perjalanan.

### Google Pixel (Android 13/14/15)
- **"Unduh SIM sebagai gantinya?"** – opsi ini muncul di bagian bawah layar pengaturan SIM. Jika Anda tidak melihatnya, Pixel Anda mungkin terkunci operator.
- **eSIM tidak muncul setelah pemindaian** – restart ponsel. Pixel terkadang memerlukan reboot setelah unduhan profil.
- **Pengaturan APN tidak tersimpan** – di Pixel, pengaturan APN berada di bawah Jaringan & Internet > SIM > [eSIM Anda] > Nama Titik Akses. Jika tidak tersimpan:
  1. Tambahkan APN baru dengan **nama yang berbeda** (mis., "Airalo 2" alih-alih "Airalo").
  2. Simpan, lalu pilih secara manual.
  3. Alihkan Mode Pesawat on/off untuk memaksa APN baru berlaku.
- **eSIM menghilang setelah restart di Pixel** – lihat Bagian 17. Pengguna Pixel melaporkan ini lebih sering daripada pengguna Samsung.

### OnePlus (Oxygen OS 13/14)
- **Jalur menu:** Pengaturan > Wi-Fi & Jaringan > SIM & Jaringan > Tambahkan eSIM
- **Masalah umum:** Perangkat OnePlus terkadang menunjukkan "eSIM tidak tersedia" setelah pembaruan Oxygen OS. Perbaikan: Buka Pengaturan > Sistem > Pembaruan Sistem dan instal tambalan terbaru.
- **Pengaturan APN:** Terletak di bawah Pengaturan > Wi-Fi & Jaringan > SIM & Jaringan > [eSIM] > Nama Titik Akses.

### Xiaomi (MIUI/HyperOS)
- **Jalur menu:** Pengaturan > Kartu SIM & Jaringan Seluler > Tambahkan eSIM
- **Masalah umum:** Ponsel Xiaomi yang dijual di China kekurangan perangkat keras eSIM. Jika dibeli di China, eSIM tidak akan berfungsi.
- **Pengaturan APN:** Terletak di bawah Pengaturan > Kartu SIM & Jaringan Seluler > [eSIM] > Nama Titik Akses.

### Oppo/Realme (ColorOS)
- **Jalur menu:** Pengaturan > Jaringan Seluler > Tambahkan eSIM
- **Masalah umum:** Beberapa versi ColorOS menyembunyikan opsi eSIM jika perangkat terkunci operator.

### Huawei (HarmonyOS)
- **Dukungan eSIM:** Terbatas pada model tertentu (P40, Mate 40, dan yang lebih baru). Banyak ponsel Huawei yang dijual setelah 2020 tidak mendukung eSIM karena sanksi AS.
- **Periksa:** Buka Pengaturan > Jaringan Seluler > eSIM. Jika opsi hilang, eSIM tidak didukung.


## Kasus Regional Khusus – China, Hong Kong, Makau

### China Daratan
- **Semua iPhone yang dijual di China** (kecuali seri iPhone 16) memiliki dual SIM fisik dan tidak ada eSIM.
- **Ponsel Android China** (Xiaomi, Oppo, Vivo, Huawei) yang dijual di China biasanya juga kekurangan perangkat keras eSIM.
- **Jika Anda memiliki ponsel internasional di China:** Ini akan berfungsi dengan eSIM perjalanan internasional, tetapi operator lokal China tidak menawarkan eSIM kepada turis.

### Hong Kong
- **Model iPhone:** iPhone Hong Kong biasanya mendukung **eSIM + SIM fisik** (satu masing-masing) ATAU dual SIM fisik tergantung model. Periksa model spesifik Anda.
- **Beberapa operator Hong Kong** (CMHK, 1010, Smartone) menawarkan eSIM kepada pelanggan pascabayar, tetapi eSIM prabayar jarang.
- **Wisatawan:** eSIM perjalanan internasional lebih mudah dan lebih andal daripada mencoba mendapatkan eSIM Hong Kong lokal.

### Makau
- **Mirip dengan Hong Kong:** Sebagian besar iPhone Makau diimpor dari Hong Kong dan mendukung eSIM + SIM fisik.
- **CTM** (operator utama Makau) menawarkan eSIM kepada pelanggan pascabayar tetapi tidak kepada turis.


## Masalah Khusus Operator (AS, Inggris, EU)

### AT&T (AS)
- **eSIM Prabayar** – AT&T prabayar tidak mendukung eSIM pada semua paket. Pascabayar diperlukan. Jika Anda memiliki prabayar, pertimbangkan eSIM perjalanan sebagai gantinya.
- **Kebijakan buka kunci** – AT&T mengharuskan perangkat lunas penuh dan aktif selama 60 hari sebelum dibuka. Hubungi mereka untuk membuka kunci.

### Verizon (AS)
- **Aktivasi eSIM** – Verizon mendukung eSIM pada sebagian besar paket pascabayar dan prabayar. Gunakan aplikasi Verizon untuk pengaturan termudah.
- **Kompatibilitas perangkat** – beberapa ponsel Android bermerek Verizon memiliki eSIM dinonaktifkan di tingkat perangkat lunak meskipun perangkat keras mendukungnya. Anda mungkin perlu mem-flash firmware yang tidak terkunci.

### T‑Mobile (AS)
- **Transfer eSIM** – T‑Mobile mengizinkan transfer eSIM melalui aplikasi T‑Mobile di bawah pengaturan "kartu SIM".
- **eSIM Prabayar** – T‑Mobile prabayar mendukung eSIM pada sebagian besar paket. Anda dapat mengaktifkannya secara online.

### EE, O2, Vodafone, Three (Inggris)
- **EE** – menawarkan eSIM prabayar melalui aplikasi EE. Memerlukan alamat Inggris untuk prabayar.
- **O2** – eSIM prabayar tersedia melalui aplikasi O2. Berfungsi dengan baik di dalam ruangan.
- **Vodafone** – eSIM prabayar tidak tersedia; hanya kontrak pascabayar.
- **Three** – eSIM prabayar tersedia tetapi terbatas pada cakupan kota.

### Orange, Vodafone, dll. (Eropa)
- **Roaming EU** – eSIM lokal sering mencakup roaming EU secara hukum, tetapi periksa cetakan kecil untuk batasan FUP (Fair Usage Policy).
- **Persyaratan KTP** – banyak operator Eropa memerlukan alamat lokal dan KTP untuk menerbitkan eSIM pascabayar. eSIM perjalanan lebih mudah untuk kunjungan singkat.


## Referensi Kode Error – Apa Arti Angka-angka Ini?

| Kode Error | Platform | Arti | Perbaikan |
|------------|----------|---------|-----|
| **4013** | iPhone (pemulihan) | Kegagalan perangkat keras/firmware selama pemulihan | Ganti kabel, port USB, perbarui macOS/iTunes |
| **4014** | iPhone (pemulihan) | Mirip dengan 4013; biasanya masalah komunikasi USB | Sama seperti di atas |
| **-8** | Android (aktivasi) | Timeout jaringan | Tunggu dan coba lagi, atau ganti Wi‑Fi |
| **-100** | Android (pemindaian QR) | Format kode QR tidak didukung | Gunakan entri manual |
| **0xE8000001** | iPhone (aktivasi) | Server operator tidak dapat dijangkau | Coba lagi setelah 5 menit atau gunakan entri manual |
| **"Konfigurasi eSIM tidak didukung"** | Android (Samsung) | Operator tidak mendukung eSIM pada model itu | Periksa dengan operator |
| **"Alamat SM‑DP+ tidak valid"** | Keduanya | Alamat entri manual salah | Periksa ulang alamat dari penyedia Anda |
| **"Error LPA -1"** | Android | Error LPA (Local Profile Assistant) umum | Restart ponsel, coba lagi. Jika terus berlanjut, gunakan aplikasi eSIM yang berbeda. |
| **"EID tidak cocok"** | Keduanya | Profil terikat ke perangkat yang berbeda | Hubungi operator untuk melepaskan profil (Bagian 4) |
| **"Tidak ada EID" saat menekan `*#06#`** | Keduanya | Perangkat tidak mendukung eSIM | Ponsel Anda kekurangan perangkat keras eSIM — gunakan SIM fisik |
| **"Manajemen eSIM tidak tersedia"** | Android (OnePlus) | Bug Oxygen OS | Perbarui ke versi Oxygen OS terbaru |
| **"Profil tidak dapat dihapus"** | iPhone | eSIM macet dalam status tertunda | Restart iPhone, lalu coba hapus lagi. Jika macet, hubungi operator. |
| **-1** | Keduanya | Kegagalan aktivasi umum | Restart ponsel, pastikan konektivitas jaringan, coba lagi |
| **-2** | Android | Kode aktivasi tidak valid | Masukkan ulang kode atau minta yang baru dari operator |


## Skenario Lanjutan: eSIM Berfungsi di Rumah tetapi Tidak di Luar Negeri

**Gejala:** Anda menginstal eSIM di rumah, menunjukkan bilah sinyal, tetapi ketika Anda mendarat di tujuan, tidak ada layanan.

**Penyebab:** Profil eSIM diaktifkan saat Anda berada di jaringan rumah, dan belum terdaftar di jaringan tujuan.

**Perbaikan:**
1. Matikan jalur eSIM (`Pengaturan > Seluler > matikan`).
2. Tunggu 10 detik, lalu nyalakan kembali.
3. Buka Pilihan Jaringan, matikan "Otomatis", pilih secara manual jaringan yang bermitra dengan penyedia Anda (tanyakan kepada penyedia Anda untuk daftar mitra).
4. Jika gagal, alihkan Data Roaming mati dan nyalakan lagi.
5. Restart ponsel.

Jika ini masih tidak berhasil, hubungi penyedia Anda — paket eSIM Anda mungkin tidak benar-benar mencakup negara tempat Anda berada, atau mungkin ada masalah perjanjian roaming.


## Skenario Lanjutan: eSIM Berfungsi di Satu Operator tetapi Tidak di Operator Lain

**Gejala:** Anda memiliki satu eSIM yang berfungsi dengan baik, tetapi ketika Anda mencoba menambahkan eSIM kedua dari operator yang berbeda, itu gagal atau menunjukkan "Tidak Ada Layanan."

**Penyebab:** Beberapa model ponsel (terutama yang lebih tua) memiliki keterbatasan pada profil operator mana yang dapat hidup berdampingan. Ini lebih umum terjadi pada perangkat Android dengan firmware modem yang lebih lama.

**Perbaikan:**
1. Periksa bahwa ponsel Anda mendukung dual eSIM (iPhone 13 dan yang lebih baru, Pixel 7 dan yang lebih baru, Samsung S23 dan yang lebih baru).
2. Jika Anda memiliki SIM fisik yang dimasukkan, coba lepaskan — beberapa ponsel membatasi jumlah profil aktif ketika SIM fisik ada.
3. Perbarui firmware ponsel Anda (pembaruan pengaturan operator sering memperbaiki ini).
4. Hubungi operator kedua dan tanyakan apakah profil eSIM mereka mendukung koeksistensi dual-SIM.


## Kapan Menghubungi Penyedia eSIM vs. Pabrikan Ponsel Anda

| Masalah | Hubungi |
|---------|---------|
| Kode QR kedaluwarsa / tidak valid | Penyedia eSIM |
| "Aktivasi gagal" berulang kali | Penyedia eSIM |
| Tidak ada data setelah konfigurasi APN | Penyedia eSIM |
| Perangkat menunjukkan "Tidak Ada Layanan" setelah mendarat | Penyedia eSIM (periksa perjanjian roaming) |
| eSIM tidak muncul di pengaturan | Pabrikan ponsel (jika bug perangkat lunak) atau masalah kunci operator |
| Masalah perangkat keras (kamera, layar, baterai) | Pabrikan ponsel |
| Kunci / buka kunci operator | Operator rumah Anda |
| Batasan MDM | Departemen TI Anda |
| eSIM menghilang setelah restart | Keduanya — coba perbaikan di Bagian 17, lalu hubungi penyedia |
| "eSIM sudah digunakan" | Penyedia eSIM (untuk melepaskan profil secara paksa) |
| eSIM Apple Watch tidak terhubung | Operator (untuk penyediaan) atau Apple Support (untuk masalah pemasangan) |


## Pertanyaan yang Sering Diajukan (Diperluas)

**T1: Bagaimana saya tahu jika ponsel saya mendukung eSIM?**
Tekan `*#06#`. Jika nomor **EID** muncul, ponsel Anda mendukung eSIM. Jika tidak ada EID yang muncul, itu tidak mendukung.

**T2: Apakah menghapus eSIM akan membatalkan paket saya?**
Tidak. Menghapus eSIM hanya menghapus profil dari ponsel. Anda harus menghubungi operator secara terpisah untuk membatalkan paket.

**T3: Bisakah saya memulihkan eSIM yang terhapus?**
Untuk eSIM operator pascabayar, ya — operator dapat menerbitkan ulang profil. Untuk eSIM perjalanan, penghapusan biasanya permanen dan memerlukan pembelian baru.

**T4: Mengapa eSIM saya berfungsi di Wi-Fi tetapi tidak di seluler?**
Ini hampir selalu masalah APN atau Data Roaming. Ikuti Bagian 8 dan Bagian 14.

**T5: Apakah eSIM menguras baterai lebih cepat?**
Tidak. Menjalankan dua jalur aktif sekaligus dapat menggunakan sedikit lebih banyak daya, tetapi satu eSIM tidak menguras baterai.

**T6: Berapa banyak eSIM yang dapat saya simpan di ponsel saya?**
Biasanya 8–10 profil di iPhone dan sebagian besar perangkat Android. Anda dapat menyimpan lebih banyak tetapi hanya memiliki dua yang aktif pada satu waktu (dual‑SIM).

**T7: Mengapa eSIM saya terus kehilangan sinyal?**
Ini dapat disebabkan oleh kemacetan jaringan, cakupan lemah, atau gangguan perangkat lunak. Coba alihkan Mode Pesawat, restart, atau pilih jaringan secara manual.

**T8: Bisakah saya menggunakan eSIM dari satu operator sementara SIM fisik saya dari operator lain?**
Ya — itulah inti dari dual‑SIM. Atur eSIM untuk data dan SIM fisik untuk panggilan/SMS.

**T9: Saya melihat "Aktivasi Diperlukan" pada eSIM saya setelah restart – apa artinya itu?**
Ponsel kehilangan koneksi ke server aktivasi operator. Reboot ponsel dan pastikan Anda memiliki koneksi jaringan. Jika terus berlanjut, hapus dan instal ulang eSIM.

**T10: Bagaimana jika operator saya mengatakan mereka tidak mendukung eSIM?**
Anda masih dapat menggunakan penyedia eSIM perjalanan seperti Roami, Airalo, atau Holafly — mereka bekerja secara independen dari operator rumah Anda dan tidak memerlukan dukungan operator.

**T11: eSIM saya ditransfer ke iPhone baru tetapi saya tidak dapat melakukan panggilan – hanya data yang berfungsi.**
Periksa bahwa eSIM diatur sebagai Jalur Suara Default. Juga, pastikan operator Anda mendukung VoLTE untuk jalur itu.

**T12: Pemindaian kode QR berhasil tetapi unduhan memakan waktu lama – apakah itu normal?**
Tidak. Seharusnya memakan waktu 1–2 menit. Jika memakan waktu lebih lama, Wi‑Fi Anda terlalu lambat. Ganti jaringan atau gunakan entri manual.

**T13: Saya menggunakan ponsel Samsung dan opsi eSIM hilang sama sekali.**
Samsung terkadang menyembunyikan menu eSIM jika perangkat terkunci operator atau jika firmware adalah varian regional yang tidak mendukung eSIM. Periksa dengan operator Anda dan pertimbangkan untuk mem-flash firmware yang tidak terkunci.

**T14: eSIM saya aktif tetapi saya tidak dapat mengirim atau menerima SMS.**
Beberapa eSIM perjalanan hanya data dan tidak mendukung SMS. Jika Anda memerlukan SMS, beli paket yang secara eksplisit menyertakan nomor telepon.

**T15: Saya secara tidak sengaja mereset pengaturan jaringan saya – sekarang eSIM saya hilang.**
Reset pengaturan jaringan tidak menghapus profil eSIM. eSIM Anda seharusnya masih ada. Buka Pengaturan > Seluler dan aktifkan ulang jalur. Jika hilang, Anda mungkin secara tidak sengaja menghapusnya — maka lihat Bagian 15.

**T16: Apa perbedaan antara menghapus eSIM dan mematikannya?**
Memadamkan eSIM menjaga profil tetap di ponsel tetapi menonaktifkan jalur. Anda dapat menyalakannya kembali kapan saja. Menghapus eSIM secara permanen menghapus profil — Anda tidak dapat memulihkannya tanpa kode QR baru. Hanya hapus ketika paket sudah habis masa berlakunya.

**T17: Bisakah VPN mengganggu aktivasi eSIM?**
Ya — VPN dapat mengganggu koneksi server aktivasi. Matikan VPN Anda sebelum mengaktifkan eSIM.

**T18: Paket eSIM saya mengatakan "tak terbatas" tetapi saya tidak memiliki data setelah menggunakan 5GB.**
Banyak paket "tak terbatas" memiliki Kebijakan Penggunaan Wajar (FUP) yang membatasi kecepatan setelah ambang data tertentu. Periksa ketentuan penyedia Anda — Anda mungkin perlu membeli paket isi ulang untuk data kecepatan tinggi lebih lanjut.

**T19: Saya memasukkan SIM fisik dan eSIM saya berhenti berfungsi – apa yang harus saya lakukan?**
Ini adalah masalah kunci operator yang diketahui pada beberapa perangkat. Lepaskan SIM fisik, restart ponsel, dan eSIM akan muncul kembali. Kemudian hubungi operator Anda untuk membuka kunci perangkat. Lihat Bagian 19 untuk detail lengkap.

**T20: eSIM Apple Watch saya tidak terhubung – apakah ini masalah ponsel atau masalah operator?**
Bisa jadi keduanya. Pertama, periksa bahwa operator Anda mendukung Apple Watch eSIM. Kemudian, lepas pasangan dan pasang kembali jam. Jika masih tidak berfungsi, hubungi operator Anda dan berikan mereka EID dan IMEI jam. Lihat Bagian 20 untuk panduan lengkap.

---

## Sumber

- [GSMA — Spesifikasi eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM di iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Menyiapkan eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — eSIM Android](https://support.google.com/android/answer/11241215)