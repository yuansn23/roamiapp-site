---
title: "什麼是 eSIM？向遺失的 SIM 卡說再見"
h1_title: "什麼是 eSIM，以及它為何讓實體 SIM 卡不再必要"
description: "厭倦了小小的 SIM 卡？瞭解 eSIM 如何在 iPhone 與 Android 上運作，以及它為何更安全、更簡單，是旅行連線的未來。"
image: "/img/faq/what-is-esim.webp"
image-1: "/img/faq/what-is-esim-1.jpg"
keywords: ["什麼是 eSIM", "eSIM 如何運作", "eSIM vs 實體 SIM 卡", "eSIM 定義", "eSIM 優點", "嵌入式 SIM 卡", "eSIM 初學者指南", "雙 eSIM", "全球 eSIM", "旅行用 eSIM", "eSIM 優缺點", "esim 初學者", "eSIM 技術說明"]
date: 2026-09-22T00:00:00Z
lastmod: 2026-09-22T00:00:00Z
tags: ["eSIM", "iOS", "Android", "疑難排解", "旅行設定", "iPhone 16"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "更新於"
  min_read: "分鐘閱讀"
  toc: "目錄"

breadcrumbs:
  home:
    text: "首頁"
    url: "/"
  parent:
    text: "幫助中心"
    url: "/faq/"

# Sidebar: Popular eSIMs
sidebar_popular:
  title: "熱門 eSIM"
  item_suffix: "eSIM"
  items:
    - name: "美國 eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "德國 eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "歐洲 eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "土耳其 eSIM"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "日本 eSIM"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "中國 eSIM"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "領取免費 eSIM"
  icon: "🎁"
  item_suffix: "免費 eSIM"
  item_subtitle: "免費 eSIM"
  items:
    - name: "英國 eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "德國"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "泰國"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "香港"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "熱門問題"
  items:
    - question: "什麼是 eSIM 啟用，它如何運作？"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "如何啟用 eSIM？"
      url: "/faq/how-to-activate-an-esim/"
    - question: "如何在 iPhone 上啟用 eSIM（全機型）？"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "最新 eSIM 相容性清單"
      url: "/compatibility/"
---



> **編者按：** eSIM 是一種內嵌在手機中的數位 SIM，用來取代可移除的塑膠卡片——它將您的電信業者設定檔以軟體形式儲存，讓您無需更換卡片即可切換方案。本說明遵循 Apple 官方文件與 GSMA 的 eSIM 規格（SGP.22），為完全的初學者而寫。讀完後您將精確知道什麼是 eSIM，以及您是否需要它。

**eSIM**（嵌入式 SIM）是一種存在於手機內部、而非塑膠卡托盤中的數位 SIM。如果您近來買過新的 iPhone，或正計劃出國旅行，您幾乎肯定遇過這個詞——而且它是比聽起來簡單得多的升級。

## 什麼是 eSIM？

eSIM 中的「e」代表 **embedded（嵌入式）**。它執行與您使用多年的塑膠 SIM 卡相同的工作——向電信業者的網路識別您的裝置，使您能通話、傳簡訊與使用數據——只是沒有需要插入、取出或遺失的卡片。SIM 純粹以軟體形式存在，儲存於焊接在手機主機板上、防篡改的微小晶片。

該晶片稱為 **eUICC**（嵌入式通用積體電路卡）。可將其想成一個安全的數位保險庫：它不像實體卡片只容納一張，而是能儲存多個可下載的電信業者設定檔，並隨需切換。

人們以數種名稱稱呼同一項技術——「eSIM」、「e-SIM」、「e-sim」、「e.sim」、「virtual SIM」、「digital SIM card」，或只是小寫的「esim」。它們全都指相同的嵌入式 SIM；只有拼法不同。有些人出於習慣說「eSIM card」，但這有點誤導，因為沒有實體卡片交給您——只有下載到晶片上的數位設定檔。

一個有用的類比：eSIM 之於 SIM 卡，猶如 Apple Pay 之於塑膠信用卡。號碼仍是您的，服務仍正常運作——只是不再依賴一塊塑膠。

就物理而言，兩者差異再大不過。nano-SIM——廣泛使用的最小實體卡片——約 12.3 mm × 8.8 mm，存在於需要插槽、彈簧機構與退卡針的卡托中。取代它的 eUICC 晶片（最常見的 MFF2 封裝）約 6 mm × 5 mm，在工廠便直接焊接在手機電路板上。沒有卡托、沒有工具，手機掉落時也沒有東西會掉出來。這顆晶片是僅 eSIM 手機能比有卡托的同類略薄、防水性略佳的原因之一。

## eSIM 術語

人們以至少十幾種不同方式書寫這個名稱，還會拋出幾個相關詞彙。以下是每個詞的實際意義：

| 術語 | 含意 |
|---|---|
| **eSIM** | Apple、Google、Samsung 與 GSMA 使用的官方、偏好拼法。 |
| **e-SIM / e.sim / e-sim** | 相同技術，帶連字號或標點。意義無差異。 |
| **embedded SIM** | 字面翻譯——「嵌入式」是因為 SIM 在工廠便內建於手機。 |
| **digital SIM / virtual SIM** | 強調沒有實體卡片的行銷術語。它們皆指 eSIM。 |
| **eUICC** | 實際儲存設定檔的晶片（嵌入式通用積體電路卡）。eSIM 是*概念*；eUICC 是運行它的*硬體*。 |
| **SIM profile** | 可下載的電信業者身分——您的號碼、方案與安全金鑰——儲存於 eUICC 上。一顆晶片，多個設定檔。 |
| **「eSIM card」** | 塑膠 SIM 時代遺留的習慣。略有誤導，因為沒有實體交給您。 |

值得記住的一個區別：**eUICC** 是實體晶片，而 **eSIM** 是存在其上的數位 SIM。不過在日常對話中，每個人都只說「eSIM」。

## eSIM 從何而來？

塑膠 SIM 尺寸縮小已超過 30 年，eSIM 是這股趨勢合理的終點。原始的信用卡大小 SIM 隨 1991 年首款 GSM 手機問世；1990 年代中期隨之而來的 mini-SIM 是大多數人想到 SIM 卡時腦中的畫面。以下是卡片如何持續變小、直到完全消失在手機內的過程：

| 世代 | 約略尺寸 | 年代 |
|---|---|---|
| Standard SIM | 85.6 × 54 mm（信用卡大小） | 1991 |
| Mini-SIM | 25 × 15 mm | 1996 |
| Micro-SIM | 15 × 12 mm | 2010 |
| Nano-SIM | 12.3 × 8.8 mm | 2012 |
| eSIM（eUICC） | 約 6 × 5 mm，焊接於內 | 2016 年起 |

eSIM 作為消費性標準首見於 2016 年，當時 GSMA 發布了遠端 SIM 佈建規格（SGP.22）。Samsung Gear S2 智慧手錶是最早使用它的裝置之一，而 Apple 在 2018 年透過 iPhone XS 與 XR 將其推向主流。不到十年，它已從小眾走向近乎預設。

## eSIM 如何運作？

在幕後，eSIM 遵循由 **GSMA** 維護的全球標準，GSMA 是代表全球行動業者的產業機構。其機制可歸納為幾個組成部分：

- 電信業者（或像 Roami 這樣的 eSIM 業者）建立一個包含您方案身分與加密金鑰的 **數位設定檔**。
- 該設定檔透過網際網路傳送至您的手機——通常由 QR Code 或 App 點擊觸發。
- 設定檔安裝到手機的 eUICC 晶片上，無法被移除或複製。
- 從那時起，您的手機使用該設定檔與網路通訊，完全如同使用實體 SIM 卡。

設定檔不會做的其中一件事是：當您更換手機時自己移動——請見 [如何在 iPhone 與 Android 之間轉移 eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/) 實際如何運作。

技術框架是 GSMA 的 **SGP.22 規格**——正式名稱為「消費性裝置遠端 SIM 佈建」。它標準化了整個交接過程，使 iPhone 與 Samsung Galaxy 都能以相同方式與任何電信業者的伺服器通訊。三個元件承擔重責：

- **SM-DP+**（Subscription Manager – Data Preparation Plus）是電信業者的安全伺服器。它將您的方案打包成設定檔、加密、透過網際網路傳送至您的裝置，並驗證電信業者附加在方案上的任何確認碼。
- **LPA**（Local Profile Assistant）是手機內建軟體。它接收加密設定檔、將其寫入 eUICC 晶片，並提供您用來開啟/關閉設定檔的選單。
- **eUICC 晶片** 是安全儲存空間。它是防篡改的安全元件——與支付卡相同等級的安全認證——使每個設定檔彼此隔離。

切換電信業者正是「軟體」部分真正發揮效益之處。在實體 SIM 手機上，更換網路通常意味著取得郵寄給您的新卡片或在店面排隊。在 eSIM 手機上，您只需下載新設定檔——舊的仍儲存在晶片上，您可在設定中切換，無需碰觸卡托。

綜合來看，一個設定檔的生命週期如下：它會被 **下載** 一次（透過 Wi-Fi 或行動數據），在您想使用時 **啟用**，在您更換方案時 **切換** 為另一個設定檔，並僅在您不再需要時 **刪除**。啟用與停用是即時的，這也是為何您能在幾次點擊間在本國門號與旅行門號間切換。

因為設定檔是軟體，一個裝置可同時儲存數個。現代 iPhone 可容納八個以上 eSIM 設定檔，且多數手機能讓兩個門號 **同時啟用**——例如一個本國號碼加一個旅行數據方案。

*啟用——設定檔被下載並開啟的實際時刻——是個快速的過程，但確切步驟因裝置而異。逐步教學請見我們的 [如何啟用 eSIM](/faq/how-to-activate-an-esim/) 指南（或 [iPhone 版本](/faq/how-to-activate-esim-on-iphone/)）。*

*若您想在開始前確切瞭解「啟用」的意義，我們的 [什麼是 eSIM 啟用？](/faq/what-is-esim-activation-and-how-does-it-work/) 說明以白話解釋此概念。*

## eSIM vs 實體 SIM 卡

以下是嵌入式標準與您熟知塑膠卡片的比較。（正在規劃特定行程？我們的 [英國 eSIM vs 實體 SIM 卡分析](/faq/2026-uk-travel-connectivity-esim-vs-physical-sim-guide/) 為真實行程列出了數字。）

| 面向 | 實體 SIM 卡 | eSIM |
|---|---|---|
| 形式 | 可移除的塑膠卡片 | 內建 eUICC 晶片上的軟體 |
| 物理尺寸 | Nano-SIM：12.3 × 8.8 mm，需要卡托 + 退卡針 | eUICC 晶片：約 6 × 5 mm，已焊接，無外部元件 |
| 設定 | 插入卡托；部分電信業者需要額外佈建 | 透過 QR 或 App 經 Wi-Fi 下載設定檔 |
| 更換電信業者 | 取得並更換新卡片 | 在設定中安裝新設定檔 |
| 每支手機設定檔數 | 每個卡槽一個 | 八個以上，隨需切換 |
| 兩個啟用門號 | 需要雙 SIM 卡槽 | iPhone 13+ 與多數 Android 的雙 eSIM |
| 耐用性 | 卡托與接點可能彎曲、氧化或積塵 | 無活動部件；晶片密封於手機內 |
| 遺失或遭竊 | 卡片可被取出重複使用 | 無法移除；裝置保持可追蹤 |
| 複製／SIM 轉移 | 便宜工具即可做到 | 受 GSMA SGP.22 標準阻擋 |
| 旅行 | 抵達時購買當地 SIM 卡 | 登機前購買，降落即連線 |
| 廢棄物 | 塑膠、包裝、運送 | 無 |

**簡短版：** eSIM 更方便、更安全、更具彈性。唯一的真正缺點是部分較舊手機與少數電信業者尚不支援。

一個未受足夠關注的角度是耐用性與廢棄物。實體 SIM 卡托是機械零件——卡托可能彎曲、金手指可能氧化，灰塵或水可能滲入。eSIM 沒有活動部件且密封於手機內，這也是為何僅 eSIM 裝置能達到更佳的防水等級。環保差異也是真實的：每年約製造 40 到 50 億張實體 SIM 卡，每一張都是塑膠加包裝與運送。eSIM 完全從等式中移除了卡片、卡托、包裝與送貨卡車。

### eSIM 優缺點

| 優點 | 取捨 |
|---|---|
| 即時啟用——無須等待郵寄 | 不是每支手機都支援 |
| 沒有可遺失或損壞的實體物 | 不是每家電信業者都提供 |
| 單一裝置多個設定檔 | 多數旅行 eSIM 為純數據 |
| 無需工具即可切換電信業者 | 首次設定需要 Wi-Fi 連線 |
| 更難被竊取或複製 | 旅行 eSIM 不總能移至新手機 |
| 零塑膠廢棄 | 部分裝置需解除電信業者鎖定 |
| 多數近期手機支援雙 SIM | 部分中國大陸手機缺乏 eSIM 硬體 |

## eSIM 生態系

eSIM 不屬於單一公司。三個群體合作使其運作：

1. **裝置製造商**（Apple、Samsung、Google 等）將 eUICC 晶片內建於手機，並隨附讓您掃描代碼與管理設定檔的軟體。
2. **行動網路業者**（AT&T、Vodafone、EE 等）建立數位設定檔並營運將其傳送至您手機的安全 SM-DP+ 伺服器。
3. **eSIM 業者**（Roami、Airalo 等）不是電信業者——他們從許多網路批發購買數據，並重新包裝成簡單的旅行方案。這就是為何即使您的本國電信業者完全不支援 eSIM，您仍能使用 Roami 旅行 eSIM。

## eSIM 普及程度如何？

這項技術擴展迅速。截至 2026 年，**80+ 國家、超過 350 家電信業者** 支援 eSIM（GSMA），且此數字自 2022 年以來已翻倍有餘。支援現在已成為美國主要網路與多數大型歐洲、亞洲業者的標準。若您的電信業者今日不提供 eSIM，很有可能在未來一兩年內就會提供。

在裝置端，硬體現在已是主流。Apple 自 **2018 年的 iPhone XS 與 XR** 起在每款 iPhone 內建 eSIM，而美國機型自 **iPhone 14** 起為僅 eSIM——完全沒有 SIM 卡托。Google 的 Pixel 系列自 **Pixel 3** 起支援 eSIM，Samsung 自 **S20** 世代起將其內建於 Galaxy S、Note 與 Z Fold/Flip 旗艦。Motorola 與 Huawei 旗艦跟進，數十款中階 Android 現在也隨附。

在電信業者端，eSIM 已由美國、加拿大、英國、多數西歐、澳洲、日本、南韓與大部分東南亞的主要網路提供——且清單每季成長。確切的手機機型與完整逐家電信業者清單，請見我們的 [eSIM 相容性清單](/compatibility/)——該頁面持續更新。

## eSIM 安全嗎？

安全性是 eSIM 最強的賣點之一：

- **無法被移除。** 竊賊可從被偷的手機取出實體 SIM 卡，用來攔截雙因素驗證碼；eSIM 仍焊接在原位，且「尋找我的」持續運作。
- **無法被複製。** GSMA 的 SGP.22 規格旨在防止設定檔從一部裝置複製到另一部——不同於較舊的 SIM 卡，後者可用廉價硬體複製。
- **企業可鎖定。** 透過裝置管理（MDM），公司可阻止員工新增或移除 eSIM，使企業門號保持在原處。

在底層，SGP.22 標準從一開始就將安全性融入。設定檔透過加密通道傳送至您的手機，且 eUICC 晶片本身是防篡改的安全元件——與銀行卡、護照相同家族的硬體認證。每個設定檔在密碼學上彼此隔離，因此旅行數據方案與您本國電信業者的門號無法互相讀取。對一般使用者的實際好處很簡單：SIM 轉移詐欺——罪犯欺騙您的業者將您的號碼移到 *他們* 持有的卡片——變得困難許多，因為您的門號綁定在 *您* 裝置內的晶片，而非可插入另一支手機的塑膠片。

## 為何旅客紛紛轉換

對跨越國境的人而言，好處立即可見：

- **降落前先連線。** 不必在機場尋找 SIM 販賣機，提前為您的目的地購買數據 eSIM，它會在您抵達的那一刻運作。Roami 販售涵蓋 190+ 國家的方案。
- **保留本國號碼。** 有兩個啟用門號，您的常用號碼保持可接聽通話與簡訊，同時由便宜的旅行 eSIM 承載數據。
- **沒有漫遊驚喜。** 旅行 eSIM 標明清楚的前端價格——沒有每日漫遊費或隱藏的公平使用降速。

好奇您的目的最實際費用是多少？從 [旅行 eSIM 指南](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) 或 [美國 eSIM 方案比較](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) 開始。

除了顯眼的優點，還有旅客在路上注意到的安靜優勢：

- **多個目的地，一支裝置。** 不必為每個國家忙著處理卡片，一次載入歐洲方案、亞洲方案與本國門號，並在跨境時切換。
- **沒有機場加價。** 機場的當地 SIM 販賣機雖方便但價格偏高；登機前線上購買旅行 eSIM 可去除這項加價。
- **即使本國業者落後也有效。** 因為全球 eSIM 業者營運自己的基礎設施，您能在自己業者尚未推出 eSIM 的國家取得 eSIM 服務。
- **在沙發上規劃。** 在家中研究、比較並購買方案，無需在長途飛行後找店面。

> 🎁 **免費試用：** Roami 提供新使用者免費 eSIM，讓您在花任何錢之前確認手機相容。[領取您的免費 eSIM](/free-esim/)。

## 常見問題

**「eSIM」與「eSIM card」有差別嗎？**
沒有——它們是相同技術。「eSIM card」是從實體 SIM 時代延續的習慣；因為它完全數位化，沒有涉及卡片，只有手機晶片上的軟體。

**我可以在一支手機上保留多個 eSIM 嗎？**
可以。您可下載數個設定檔——本國、工作與旅行門號——並在設定中切換。

**eSIM 比實體 SIM 卡更耗電嗎？**
不會。它實際上耗電略少，因為沒有實體讀卡機；差異微乎其微（約 1–2%）。

**我可以同時在多個裝置上使用一個 eSIM 嗎？**
不行。一個設定檔綁定單一裝置。在另一個裝置（例如 iPad）上使用相同號碼需要像「Number Share」這樣的獨立業者功能。

**「雙 eSIM」是什麼意思？**
它表示手機可同時保持兩個 eSIM 門號啟用——例如一個本國號碼與一個旅行數據方案。它支援於 iPhone 13 及之後，加上多數 Android 旗艦。更深入瞭解雙 SIM 設定如何運作，請見我們的 [iPhone eSIM 相容性指南](/faq/iphone-11-esim-compatible/)。

**我的國家有 eSIM 嗎？**
很有可能。全球數百家電信業者支援，即使您的本國業者沒有，您仍可使用像 Roami 這類全球業者的旅行 eSIM。請查看 [相容性清單](/compatibility/) 以確認。

**「eSIM」代表什麼？**
「Embedded SIM（嵌入式 SIM）。」「e」代表嵌入式，意思是它內建於手機，而非插入卡托。有些人猜「electronic（電子）」，但官方術語是嵌入式 SIM。

**eSIM 與 eUICC 是同一回事嗎？**
它們是一體兩面。eUICC 是焊接在手機內的實體晶片；eSIM 是儲存在該晶片上的數位 SIM 設定檔。可將 eUICC 想成保險庫，而 eSIM 是保存在其中的東西。

**eSIM 會給我電話號碼嗎？**
視方案而定。來自傳統電信業者的 eSIM 通常包含用於通話與簡訊的電話號碼，完全如同實體 SIM 卡。多數旅行 eSIM 為純數據——適合地圖、通訊 App 與瀏覽，但不會給您用於語音通話的當地號碼。

**我可以同時使用實體 SIM 卡與 eSIM 嗎？**
可以，在多數現代手機上。具雙 SIM 支援的裝置可同時運行實體 SIM 卡與 eSIM（通常稱為雙 SIM 雙待），且較新機型甚至能同時運行兩個 eSIM。這就是旅客如何在本國號碼保持啟用的同時，由旅行 eSIM 承載數據。

**eSIM 會完全取代實體 SIM 卡嗎？**
幾乎肯定，且已正在發生。Apple 自 iPhone 14 起在美國販售僅 eSIM 的 iPhone，且每年都有更多電信業者與手機製造商轉向。實體 SIM 卡不會一夜消失——較舊手機與部分市場仍依賴它們——但方向很明確。

**eSIM 比實體 SIM 卡更好嗎？**
對多數人而言，是的。它更方便、更難遺失、更安全，且更易切換電信業者。堅持使用實體 SIM 卡的主因是您的手機不支援 eSIM，或您的業者尚未提供。

**eSIM 何時推出？**
GSMA 於 2016 年發布消費性 eSIM 標準（SGP.22）。Samsung Gear S2 智慧手錶是最早使用它的裝置之一，而 Apple 在 2018 年透過 iPhone XS 與 XR 將其推向主流。已經約十年，但真正主流化是最近幾年。

**我的手機能儲存多少 eSIM 設定檔？**
視機型而定。近期 iPhone 可儲存八個以上 eSIM 設定檔，多數 Android 旗艦亦類似。這不代表全部同時啟用——多數手機保持一或兩個門號同時啟用，其餘在您開關之間切換。

**eSIM 只供旅行使用嗎？**
不是。eSIM 用於一般本國方案、次要門號、智慧手錶、平板，甚至部分汽車與筆電。旅行只是一般使用者最先注意到它的地方，因為它免除了在每個目的地購買當地卡片的需要。

---

*依據 Apple 與 GSMA 文件編寫。eSIM 相容性可能因電信業者與地區而異。*

## 資料來源

- [GSMA — eSIM (SGP.22) 規格](https://www.gsma.com/esim/)
- [Apple 支援 — 在 iPhone 上設定 eSIM](https://support.apple.com/en-us/HT212780)
- [Google 支援 — 設定 eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google 支援 — Android eSIM](https://support.google.com/android/answer/11241215)
