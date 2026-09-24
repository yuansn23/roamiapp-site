---
title: "Samsung Galaxy eSIM：S/A/Z 系列指南"
h1_title: "Samsung Galaxy S、A 與 Z 系列 eSIM 完整指南"
description: "Samsung eSIM 完整支援說明：S21–S25（是）、S20（僅全球版）、A54/A55/A35（是）、A15/A16/A32（否）、Z 系列（是）。驗證、啟用與電信業者清單。"
image: "/img/faq/samsung-s20-esim.webp"
image-1: "/img/faq/samsung-s20-esim-1.jpg"
keywords: ["samsung esim", "支援 esim 的 samsung 手機", "samsung 相容 esim 的手機", "samsung galaxy esim", "samsung 有 esim 嗎", "samsung s21 esim", "samsung esim 啟用", "samsung a 系列 esim", "samsung 雙 esim", "samsung esim 手機清單", "samsung esim 無法使用", "samsung esim qr code", "samsung esim 美國", "samsung s20 esim"]
date: 2026-09-22T00:00:00Z
lastmod: 2026-09-22T00:00:00Z
tags: ["Samsung", "eSIM", "相容性", "Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy S24", "Galaxy S25", "Galaxy A series", "Galaxy Z series"]
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
    text: "eSIM 相容性"
    url: "/compatibility/"

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
  item_suffix: "Free eSIM"
  item_subtitle: "Free eSIM"
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
  title: "常見問題"
  items:
    - question: "什麼是 eSIM 啟用，它是如何運作的？"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "如何啟用 eSIM？"
      url: "/faq/how-to-activate-an-esim/"
    - question: "如何在 iPhone（所有機型）上啟用 eSIM？"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "最新 eSIM 相容性清單"
      url: "/compatibility/"
---


> **編者按：** Samsung Galaxy S20 在多數變體上支援 eSIM，但部分地區與電信業者版本會停用它。本指南遵循 Samsung 官方文件與 GSMA 標準。請查看下方的確切型號編號，以確認你的 S20 能否使用 eSIM。

對 Samsung 來說，簡短版是這樣：Galaxy S21 及更新的機型在所有地區都支援 eSIM，國際版 Exynos S20 也一樣，但美國 S20、多數 Galaxy A 系列手機，以及中國/香港機型則不支援。撥打 *#06# 並檢查是否有 EID 即可確認你的手機。逐系列的分析從下方開始。

## 你的 Samsung Galaxy 是否支援 eSIM？

**簡短回答：** 如果你擁有 Galaxy S21 或更新的機型（S21、S22、S23、S24、S25），**是**——你的手機在所有地區都支援 eSIM，包括美國。較舊與較便宜的機型則需視情況而定。

**為何這很重要：** eSIM 讓你無須實體 SIM 卡即可加入方案，因此旅客可以在出發前購買本地數據方案，並在落地瞬間啟用。

**仍不確定？** 取得一個 **[免費試用 eSIM](/free-esim/)**——只需 2 分鐘，不花一毛錢即可確認你的手機已準備好。

## 如何辨識你的 Samsung 型號編號

Samsung 是 eSIM 方面最棘手的 Android 品牌，因為同一個手機名稱會因地區而表現不同。決定你的 Galaxy 是否具備 eSIM 的有三件事：**型號編號字尾**、**CSC 代碼**，以及 **晶片組（Exynos 與 Snapdragon 的差異）**。

### 找到你的型號編號

前往 **設定 > 關於手機 > 型號編號**。你會看到類似 `SM-S918B` 或 `SM-S918U` 的內容。

### 解碼型號編號字尾

| 字尾 | 含義 | eSIM 支援 |
|--------|---------|--------------|
| **SM-S9xxB、SM-S9xxE** | 國際 / 全球（Exynos） | ✅ 是（S20 及更新） |
| **SM-S9xxU、SM-S9xxU1** | 美國（Snapdragon） | ⚠️ S20 否，S21+ 是 |
| **SM-S9xxW** | 加拿大 | ⚠️ 混合——請用 `*#06#` 檢查 |
| **SM-S9xx0** | 中國 / 香港 | ❌ 無 eSIM（中國機型） |
| **SM-S9xxN** | 韓國 | ✅ 是（多數機型） |
| **SC-xx** | 日本（Docomo） | ❌ 經常停用 |
| **SM-AxxE、SM-AxxB** | 國際 A 系列 | ⚠️ 僅 A54/A55/A35 具備 eSIM |
| **SM-AxxU** | 美國 A 系列 | ❌ 任何美國 A 系列都無 eSIM |

### 檢查你的 CSC 代碼

CSC（Customer Service Code，客戶服務代碼）告訴你手機執行的是哪個地區的韌體：

1. 前往 **設定 > 關於手機 > 軟體資訊**。
2. 向下捲動至 **服務供應商 SW 版本**。
3. 讀取 CSC 的最後三個字母：

| CSC 代碼 | 地區 | eSIM 支援 |
|----------|--------|--------------|
| **XAA、XAR** | 美國（已解鎖） | ✅ 是（S21+） |
| **TMB、VZW、ATT、SPR** | 美國電信業者 | ⚠️ S21+ 在 T-Mobile/Verizon 上為是；AT&T 可能限制 |
| **EUX、EUY、BTU、DBT** | 歐洲 / 英國 / 德國 | ✅ 是 |
| **INS、INU** | 印度 | ✅ 是 |
| **CHC、CHN** | 中國 | ❌ 無 eSIM |
| **KOO、KTC、SKC** | 韓國 | ✅ 是 |
| **DCM、SBM、KDI** | 日本 | ❌ 經常停用 |

### Galaxy S20 上的 Exynos 與 Snapdragon

在較舊的旗艦機上，晶片組是單一最大的因素：

- **Exynos（國際版）S20、S20+、S20 Ultra 與 Note 20 Ultra**——具備 eSIM，由 One UI 3.1 更新啟用。
- **Snapdragon（美國版）S20 與 Note 20 Ultra**——無 eSIM，且無法修復：Samsung 在韌體中停用了它，因此即使是「已解鎖」的美國機型也缺少它。
- **S21 及更新**——Exynos 與 Snapdragon 版本都支援 eSIM，因此晶片組不再重要。

**重點：** S20 上結尾為 `U`（美國）的機型 = 無 eSIM。結尾為 `B` 或 `E`（國際版）的機型 = 有數位 SIM。中國機型（`0` 或 CSC `CHC`）= 無 eSIM，無法修復。

若想找可比較的 Android 替代方案，請見我們的 **[Google Pixel eSIM 相容性指南](/faq/google-pixel-6-esim-compatible/)**。

## 哪些 Samsung 系列支援 eSIM

| 你的 Samsung 機型 | eSIM 支援 | 接下來該做什麼 |
| :--- | :--- | :--- |
| **Galaxy S21、S22、S23、S24 或 S25（任何變體）** | ✅ 是 | 直接啟用——請見下方的啟用說明。 |
| **Galaxy S20（國際版/Exynos）** | ✅ 是（One UI 3.1 之後） | 更新軟體，然後撥打 `*#06#`。 |
| **Galaxy S20（美國版/Snapdragon）** | ❌ 否 | 僅實體 SIM 卡。 |
| **Galaxy A54、A55 或 A35** | ✅ 是 | 少數具備 eSIM 的 A 系列機型。 |
| **Galaxy A15、A16、A32、A53 或更舊的 A 系列** | ❌ 否 | 僅實體 SIM 卡。 |
| **Galaxy Z Fold2+ / Z Flip3+** | ✅ 是（多數地區） | 仔細檢查電信業者鎖定版本。 |
| **Galaxy Note 20 Ultra（Exynos）** | ✅ 是 | One UI 3.1 之後。 |
| **Galaxy Note 20 Ultra（美國版）** | ❌ 否 | 無 eSIM。 |
| **Galaxy S10 或更舊 / Note 10 或更舊** | ❌ 否 | 太舊了。 |

**想在不購買的情況下測試？** 先試用一個 **[免費試用 eSIM](/free-esim/)**。

## 完整 Samsung eSIM 相容性表格

| 系列 | 機型 | eSIM 支援 | 備註 |
|--------|-------|--------------|-------|
| **S25** | S25、S25+、S25 Ultra | ✅ 是（所有地區） | 完整支援 |
| **S24** | S24、S24+、S24 Ultra、S24 FE | ✅ 是（所有地區） | 完整支援；**Samsung Galaxy S24 Ultra eSIM 支援** 已確認 |
| **S23** | S23、S23+、S23 Ultra、S23 FE | ✅ 是（所有地區） | 完整支援 |
| **S22** | S22、S22+、S22 Ultra | ✅ 是（所有地區） | **Samsung S22 Ultra eSIM** 全球可用 |
| **S21** | S21、S21+、S21 Ultra、S21 FE | ✅ 是（所有地區） | 首批具備完整 eSIM 的美國機型 |
| **S20** | S20、S20+、S20 Ultra（Exynos） | ✅ 是（僅全球版） | 需要 One UI 3.1+ |
| **S20** | S20、S20+、S20 Ultra（美國 Snapdragon） | ❌ 否 | 由 Samsung 停用 |
| **S20 FE** | S20 FE（所有地區） | ❌ 否 | 無 eSIM 硬體 |
| **S10** | S10、S10+、S10e、S10 5G | ⚠️ 有限 | 罕見的國際 Exynos 機型 |
| **S9 / Note 9** | S9、S9+、Note 9 | ❌ 否 | 無 eSIM 硬體 |
| **A 系列（較新）** | A54、A55、A35 | ✅ 是 | 支援 **Samsung A35 eSIM** 與 **Samsung A54 eSIM** |
| **A 系列（較舊）** | A15、A16、A32、A33、A51、A52、A52s、A53、A71、A72、A73 | ❌ 否 | 缺少 eSIM 硬體 |
| **Z Fold** | Z Fold2–Fold7 | ✅ 是（多數） | 國際與美國已解鎖 |
| **Z Flip** | Z Flip3–Flip7 | ✅ 是（多數） | 與 Fold 系列相同 |
| **Note 20** | Note 20、Note 20 Ultra（Exynos） | ✅ 是 | 僅國際版 |
| **Note 20** | Note 20、Note 20 Ultra（美國版） | ❌ 否 | Snapdragon 機型缺少 eSIM |

## S 系列、A 系列與 Z 系列詳細說明

### Galaxy S21 至 S25 完整支援

從 S21 世代開始的每一款旗艦機在兩種晶片組上都支援 eSIM——S21、S21+、S21 Ultra、S21 FE；S22、S22+、S22 Ultra；S23、S23+、S23 Ultra、S23 FE；S24、S24+、S24 Ultra、S24 FE；以及 S25 系列。尤其是 Ultra 機型（S22 Ultra、S23 Ultra 與 S24 Ultra）在全球皆可運作，並適用於各大旅行 eSIM 服務商（Roami、Airalo、Holafly，以及 Verizon、T-Mobile、Google Fi 等美國電信業者）。

### Galaxy S20 部分支援

S20 系列是首款具備 eSIM 硬體的 Galaxy，但只有國際版 Exynos 機型取得了軟體。將國際版 S20 更新至 One UI 3.1（Android 11）或更新版本，然後撥打 `*#06#` 確認 EID。美國 Snapdragon 機型與 S20 FE 完全沒有 eSIM。

### Galaxy A 系列大多無 eSIM

A 系列是最令人困惑的：幾乎所有機型都缺少 eSIM，但 Samsung 從 2024 年開始將它加入少數高階機型。**Galaxy A54**、**A55** 與 **A35** 支援 eSIM；A15、A16、A32、A33、A51、A52、A52s、A53、A71、A72、A73、A12、A22 與 A13 則不支援。請注意 5G 並不代表 eSIM——A15 5G 與 A16 5G 具備 5G，但沒有嵌入式 SIM。

### Galaxy Z 系列折疊機

從 Z Fold2 與 Z Flip3 開始的大多數折疊機都支援 eSIM——Fold2 至 Fold7 與 Flip3 至 Flip7。國際版與美國已解鎖機型都很可靠；電信業者鎖定的美國機型可能已停用。折疊機也支援雙卡（一張實體卡 + 一個 eSIM，或較新機型的雙 eSIM）。

### Galaxy Note 系列

國際版 Exynos 形式的 Note 20 Ultra 在 One UI 3.1 之後支援 eSIM；美國 Snapdragon 版本與 Note 10/Note 9 則不支援。

## Galaxy S 系列 eSIM 與雙卡

上方的 S 系列表格告訴你手機 *是否* 具備 eSIM。這張則補上人們實際會問的第二個問題：**它能否同時運作兩個號碼？** Samsung 上的「雙卡」依機型不同，是指以下三者中的兩項。

| 世代 | eSIM | eSIM + 實體 SIM（DSDS） | 同時使用兩個 eSIM |
|-----------|------|---------------------------|-------------------|
| Galaxy S25 / S25+ / S25 Ultra | ✅ | ✅ | ✅ |
| Galaxy S24 / S24+ / S24 Ultra / S24 FE | ✅ | ✅ | ✅ |
| Galaxy S23 / S23+ / S23 Ultra / S23 FE | ✅ | ✅ | ✅（S23 及之後） |
| Galaxy S22 / S22+ / S22 Ultra | ✅ | ✅ | ❌ 僅 eSIM + 一張實體卡 |
| Galaxy S21 / S21+ / S21 Ultra / S21 FE | ✅ | ✅ | ❌ 僅 eSIM + 一張實體卡 |
| Galaxy S20（Exynos，全球版） | ✅ | ✅ | ❌ |
| Galaxy S20（美國 Snapdragon） | ❌ | ❌ | ❌ |
| Galaxy S20 FE | ❌ | ❌ | ❌ |
| Galaxy Note 20 Ultra（Exynos） | ✅ | ✅ | ❌ |
| Galaxy Note 20 Ultra（美國版） | ❌ | ❌ | ❌ |

實際結果：在 S21 或 S22 上，你可以保留家用實體 SIM 卡並加入一個旅行 eSIM。從 S23 開始你可以更進一步——保留兩個 eSIM 而完全不使用實體 SIM 卡，如果你的家用電信業者已經是純數位，這會很方便。

## Galaxy A 系列 eSIM 清單

Samsung 的 A 系列是銷量最大的產品，因此也是我們被問得最多的系列。以下是完整的說明，從最新到最舊，讓你不再猜測：

| 機型 | eSIM | 備註 |
|-------|------|-------|
| Galaxy A56 / A36（2025） | ✅ 是 | 較新的 A 系列機型，具備 eSIM |
| Galaxy A55（2024） | ✅ 是 | 國際版機型 |
| Galaxy A54（2023） | ✅ 是 | 國際版機型 |
| Galaxy A35（2024） | ✅ 是 | 國際版機型 |
| Galaxy A34（2023） | ❌ 否 | 無 eSIM 硬體 |
| Galaxy A53 / A52 / A52s | ❌ 否 | 無 eSIM 硬體 |
| Galaxy A33 / A32 | ❌ 否 | 無 eSIM 硬體 |
| Galaxy A26 / A25 / A16 / A15 | ❌ 否 | 無 eSIM（5G 沒有用） |
| Galaxy A73 / A72 / A71 | ❌ 否 | 無 eSIM 硬體 |
| Galaxy A14 / A13 / A12 | ❌ 否 | 無 eSIM 硬體 |

有兩件事要記住。第一，**5G 不代表 eSIM**——A15 5G、A16 5G 與 A25 是具備 5G 但沒有嵌入式 SIM 的手機。第二，即使是 *有* eSIM 的 A 系列機型，也只在 **國際** 版上支援；A54 與 A55 的美國版本可能會被鎖定。購買前務必撥打 `*#06#`。

## Galaxy Z Fold 與 Flip eSIM

Samsung 的折疊機是可靠性最高的非 S 系列 eSIM 手機。完整情況如下：

| 機型 | eSIM | 雙卡 |
|-------|------|----------|
| Z Fold7 / Z Flip7（2025） | ✅ | ✅ 雙 eSIM |
| Z Fold6 / Z Flip6（2024） | ✅ | ✅ 雙 eSIM |
| Z Fold5 / Z Flip5（2023） | ✅ | ✅ 雙 eSIM |
| Z Fold4 / Z Flip4（2022） | ✅ | ✅ eSIM + 實體卡 |
| Z Fold3 / Z Flip3（2021） | ✅ | ✅ eSIM + 實體卡 |
| Z Fold2（2020） | ✅ | ✅ eSIM + 實體卡 |
| 初代 Fold（2019）/ 第一代 Z Flip | ⚠️ | 不可靠——別指望它 |

國際版與美國已解鎖的折疊機都很可靠；主要的陷阱是 **電信業者鎖定** 的美國機型，其中 AT&T 特別以移除或隱藏 eSIM 選單而聞名。如果你要購買二手 Fold 或 Flip 用於旅行，原廠已解鎖是安全的選擇。

## Exynos 與 Snapdragon 的 eSIM 支援

如果你讀過「只有 Exynos 的 Samsung 手機支援 eSIM」，那說對了一半——而且只適用於 2020 年的手機。完整的歷史如下：

- **Galaxy S20 與 Note 20 Ultra（2020）：** 這是唯一由晶片組決定的世代。國際版 Exynos 機型透過 One UI 3.1（Android 11）更新取得了 eSIM；美國 Snapdragon 機型從未取得，且無法修復——硬體存在，但 Samsung 在韌體中停用了它。
- **Galaxy S21 與 S22（2021–2022）：** 兩種晶片組都支援 eSIM。美國使用 Snapdragon，歐洲使用 Exynos，兩者都運作良好。
- **Galaxy S23（2023）：** Samsung 將整個 S23 系列在全球轉為 Snapdragon——每一款 S23 都有 eSIM，無須擔心 Exynos 變體。
- **Galaxy S24（2024）：** 分裂再現——歐洲的 S24 與 S24+ 採用 Exynos 2400，美國與 S24 Ultra 採用 Snapdragon——而兩者再次都支援 eSIM。
- **Galaxy S25（2025）：** 全球皆為 Snapdragon 8 Elite，全部具備 eSIM。

**經驗法則：** 晶片組只對 S20 與 Note 20 Ultra 重要。對於任何更新的機型，完全忽略 Exynos 與 Snapdragon 之爭，改看型號編號字尾與 CSC 代碼。

## CSC 代碼說明

### CSC 究竟是什麼

CSC（Customer Service Code，客戶服務代碼）是內建於 Samsung 韌體中的三個字母標籤，告訴手機它是為哪個地區和電信業者打造的。它控制的遠不止 eSIM——它也決定啟用哪些頻段、預載哪些臃腫軟體，以及出現哪些電信業者功能。對 eSIM 而言，CSC 是隱藏或顯示「加入 eSIM」選單的開關。

### 如何找到你的 CSC

1. **透過設定：** 開啟 **設定 > 關於手機 > 軟體資訊**，然後查看 **服務供應商 SW 版本** 那一行。它通常顯示類似 `XAA/XAA/XAA`——最後三個字母就是你的 CSC。
2. **透過撥號器：** 輸入 `*#1234#` 並讀取「CSC」那一行（這顯示的是韌體版本而非現用地區，但它是很有用的交叉檢查）。

### 常見 CSC 及其對 eSIM 的含義

| 地區 | 常見 CSC 代碼 | eSIM |
|--------|------------------|------|
| 美國（已解鎖） | XAA、XAR | ✅ 是（S21+） |
| 美國（電信業者） | TMB（T-Mobile）、VZW（Verizon）、ATT（AT&T）、SPR（Sprint）、TMK（Metro） | ⚠️ T-Mobile/Verizon 在 S21+ 上為是；AT&T 最嚴格 |
| 英國 | BTU（已解鎖）、EVR（EE）、O2U（O2）、VOD（Vodafone）、H3G（Three） | ✅ 是 |
| 歐洲 | EUX、EUY、DBT（德國）、ITV（義大利）、XEF（法國）、PHE（西班牙）、NEE（北歐） | ✅ 是 |
| 印度 | INS、INU | ✅ 是 |
| 韓國 | KOO、KTC、SKC、LUC | ✅ 是 |
| 中國 / 香港 | CHC、CHN（大陸）、TGY（香港） | ❌ 大陸否；香港通常為是 |
| 日本 | DCM（Docomo）、SBM（SoftBank）、KDI（au） | ❌ 經常停用 |
| 澳洲 / 新加坡 / 台灣 | XSA、XSP、BRI | ✅ 是 |

一句警告：沒有任何安全、受支援的方法可以更改你的 CSC 來「解鎖」中國或美國電信業者機型上的 eSIM。那些告訴你刷入不同 CSC 的指南，有觸發 Samsung 的 Knox 安全機制並讓手機變磚的風險。如果你的 CSC 不支援 eSIM，實體 SIM 卡才是現實的替代方案。

## Samsung 上的雙卡

大多數具備 eSIM 能力的 Galaxy 執行 **DSDS（雙卡雙待）**——一張實體 nano-SIM 卡加一個 eSIM 同時使用，由你選擇哪個號碼負責通話、簡訊和數據。較新的機型（S23 及之後）也支援雙 eSIM。完整的設定教學在 **[雙卡說明](/faq/iphone-11-esim-compatible/)**——其原理在各平台皆相同。在嵌入式與實體之間猶豫？請見我們的 **[eSIM 與實體 SIM 卡比較](/faq/what-is-esim/)**。

### Samsung 上 eSIM 加實體卡 vs 雙 eSIM

- **eSIM + 一張實體 SIM 卡（DSDS）：** 從 S20 開始的每一款具備 eSIM 能力的 Galaxy。這是旅客的甜點區——將你的家用號碼保留在實體 SIM 卡上，並加入旅行 eSIM 用於數據。
- **同時使用兩個 eSIM（雙 eSIM）：** S23 及更新的機型，加上 Fold5/Flip5 及之後。完全不需要實體卡。
- **每個號碼對應一條線路：** Samsung 不允許你將一個號碼複製到兩張 SIM 卡上。每條線路都需要自己的號碼。

若要選擇哪張 SIM 卡負責數據、通話和簡訊，請開啟 **設定 > 連接 > SIM 卡管理員** 並為每項功能設定「主要 SIM 卡」。

## 在你的 Samsung 上啟用 eSIM

確認支援後，開啟 **設定 > 連接 > SIM 卡管理員 > 加入 eSIM**，掃描來自你業者的 QR Code，並在旅行時開啟數據漫遊。選單路徑在最近的 One UI 版本中都相同：

| One UI 版本 | 「加入 eSIM」路徑 |
|----------------|-------------------|
| **One UI 6.0+（Android 14+）** | 設定 > 連接 > SIM 卡管理員 > 加入 eSIM |
| **One UI 5.0–5.1（Android 13）** | 設定 > 連接 > SIM 卡管理員 > 加入 eSIM |
| **One UI 4.0–4.1（Android 12）** | 設定 > 連接 > SIM 卡管理員 > 加入 eSIM（可能位於「行動網路」下） |
| **One UI 3.1（Android 11）** | 設定 > 連接 > SIM 卡管理員 > 加入 eSIM（僅限 S20 國際版） |

完整的逐步教學（QR、手動輸入與電信業者 App），請見我們的 **[如何啟用 eSIM 指南](/faq/how-to-activate-an-esim/)**。

**專業提示：** 在出發前於穩定的 Wi-Fi 上安裝你的 eSIM——設定檔會保持在未啟用狀態，直到你抵達時開啟數據漫遊。

**之後要換手機？** 大多數旅行 eSIM 都是一次性安裝——請見我們的 **[轉移 eSIM 指南](/faq/how-to-transfer-esim-between-iphone-and-android/)**。

### 從購買到首次訊號的 Samsung eSIM 啟用

以下是 Samsung 專屬的流程，逐步說明：

1. **先確認支援。** 撥打 `*#06#` 並尋找 32 位數的 EID。無 EID = 在此停下；你的手機無法使用 eSIM。
2. **購買方案並找到 QR Code。** 先從一個 **[免費 Roami eSIM 試用](/free-esim/)** 開始，這樣測試不花任何費用。你的業者會透過電子郵件寄送 QR Code（通常還有 SM-DP+ 位址與啟用碼供手動輸入）。
3. **連線到 Wi-Fi。** eSIM 設定檔透過網際網路下載，因此請在出發前或飯店 Wi-Fi 上完成——不要在飛機上。
4. **開啟選單。** 前往 **設定 > 連接 > SIM 卡管理員 > 加入 eSIM**。
5. **掃描 QR Code。** 將相機對準代碼。如果掃描失敗，請選擇「手動輸入詳細資料」並輸入來自電子郵件的 SM-DP+ 位址與啟用碼。
6. **命名並設定方案。** 將它命名為類似「Roami Europe」，然後確認哪張 SIM 卡負責數據。如果你希望繼續接收，請將通話/簡訊的 **主要 SIM 卡** 設為你的家用號碼。
7. **為旅行號碼開啟數據漫遊**，位於 **SIM 卡管理員 > [你的 eSIM] > 數據漫遊** 下——這是大多數人會忘記的步驟，也是抵達時出現「無訊號」的原因。
8. **測試它。** 開啟再關閉飛航模式，然後開啟瀏覽器。大多數 Samsung 手機會在 1–3 分鐘內連線。

如果「加入 eSIM」按鈕遺失或呈灰色，請跳至下方的疑難排解表格。

## Samsung 上的 5G 與 eSIM

從 S21 開始，每一款 Galaxy（以及國際版 Exynos S20）都在 eSIM 上支援 5G，與實體 SIM 卡相比沒有效能差異。如果 5G 無法連線，請檢查 **設定 > 連接 > 行動網路 > 網路模式** 是否設為 5G/LTE/3G/2G 自動，確認你的方案包含 5G（部分旅行 eSIM 僅限 LTE），並重新啟動。請記住：5G 不代表 eSIM——A15 5G 與 A16 5G 就是證明。

## Samsung eSIM 疑難排解

| 問題 | 可能原因 | 解決方法 |
|---------|--------------|-----|
| **沒有「加入 eSIM」選項** | 美國 S20、電信業者鎖定，或中國 CSC | 檢查 **設定 > 關於手機 > 狀態 > SIM 鎖定狀態**；如果是美國 S20 或中國機型，則無法修復。 |
| **「您的電信業者不支援此功能」** | 電信業者鎖定的手機、美國 S20，或中國 CSC | 如上確認型號編號與鎖定狀態。 |
| **「加入 eSIM」呈灰色** | 電信業者韌體限制（AT&T 通常是罪魁禍首） | 聯絡你的電信業者，或購買已解鎖的手機。 |
| **沒有 EID，但你確定機型支援** | 軟體更新或 CSC 不符 | 安裝更新，然後重新檢查 CSC 代碼。 |
| **eSIM 設定檔已下載但無訊號** | 數據漫遊已關閉，或 APN 遺失 | 開啟數據漫遊；向你的業者確認 APN。 |

完整的逐錯誤參考（包含完整的 APN 表格），請見 **[eSIM 深度疑難排解指南 2026](/faq/esim-deep-troubleshooting-guide-2026/)**。

## 關於 Samsung eSIM 的常見問題

**Galaxy S21 系列支援 eSIM 嗎？**
是——S21、S21+、S21 Ultra 與 S21 FE 在所有地區都支援 eSIM。

**Galaxy S22 Ultra 支援 eSIM 嗎？**
是，全球皆然，包括美國電信業者版本。

**Galaxy S23 支援 eSIM 嗎？**
是——整個 S23 系列都有完整的 eSIM 支援。

**Galaxy S24 Ultra 支援 eSIM 嗎？**
是——撥打 `*#06#` 查看它的 EID。

**Galaxy S20 FE 支援 eSIM 嗎？**
否。與 S20 家族的其他成員不同，S20 FE 在任何地區都沒有 eSIM 硬體。

**Galaxy A15 / A16 / A32 支援 eSIM 嗎？**
否。這些機型缺少 eSIM 硬體，且僅支援實體 SIM 卡——即使是 5G 版本亦然。

**Galaxy A35 / A54 支援 eSIM 嗎？**
是。A35 與 A54 是少數具備 eSIM 的 A 系列機型（在國際版上）。

**Galaxy Z Fold 或 Z Flip 裝置支援 eSIM 嗎？**
從 Z Fold2 與 Z Flip3 開始的大多數機型都支援——請用 `*#06#` 確認。

**Note 20 Ultra 支援 eSIM 嗎？**
僅國際版 Exynos 版本；美國 Snapdragon 機型不支援。

**哪些 Samsung 手機確定與 eSIM 相容？**
所有 S21/S22/S23/S24/S25 機型（包含 FE 與 Ultra）、國際版 Exynos S20、A54/A55/A35、Z Fold2+/Flip3+，以及國際版 Note 20 Ultra。

**我該如何檢查我的 Samsung 是否已電信業者鎖定？**
**設定 > 關於手機 > 狀態 > SIM 鎖定狀態**——「Network Locked（網路已鎖定）」表示已電信業者鎖定；請向你的電信業者申請解鎖。

**「eSIM 在你的國家不支援」是什麼意思？**
你的 CSC（地區代碼）不支援 eSIM——在中國與美國電信業者機型上很常見。沒有簡單的修復方法。

**我可以同時使用 eSIM 與實體 SIM 卡嗎？**
是，在每一款具備 eSIM 能力的 Galaxy 上皆可（DSDS）。將你的家用號碼保留在實體 SIM 卡上，並使用 eSIM 作為旅行數據。

**我可以在 Samsung 上同時使用兩個 eSIM 嗎？**
是，在 S23 及更新的機型，以及 Fold5/Flip5 及之後。較舊的機型僅為 eSIM + 一張實體 SIM 卡。

**我可以儲存多少個 eSIM 設定檔？**
大多數 Samsung 手機可以儲存數個 eSIM 設定檔（通常 5 個或更多），但一次只能有一或兩個處於啟用狀態，視機型而定。

**為何我的 S20 在設定中顯示 eSIM 但呈灰色？**
你幾乎肯定是擁有美國 Snapdragon S20。Samsung 在這些機型的韌體中停用了 eSIM，且任何更新或設定都無法重新啟用。

**我可以更改 CSC 來啟用 eSIM 嗎？**
不安全。更改 CSC 需要刷入韌體，這會觸發 Knox 並可能讓手機變磚。如果你的 CSC 不支援 eSIM，請使用實體 SIM 卡。

👉 **計畫帶著你的 Samsung 旅行？** 請見 [美國 eSIM](/united-states-esim/) 或 [日本 eSIM](/japan-esim/)。

## 用免費 eSIM 測試

如果你的 Samsung 在撥打 `*#06#` 後顯示 EID，請嘗試一個 **免費試用 eSIM**，以便在購買付費方案前確認一切運作正常。

👉 [**領取你的免費 eSIM**](/free-esim/)

---

*根據 Samsung 官方文件、GSMA 標準與電信業者資訊。更新日期：2026 年 9 月。*

## 資料來源

- [GSMA — eSIM（SGP.22）規格](https://www.gsma.com/esim/)
- [Samsung 支援 — eSIM](https://www.samsung.com/us/support/)
- [Apple 支援 — 在 iPhone 上設定 eSIM](https://support.apple.com/en-us/HT212780)
- [Google 支援 — Android eSIM](https://support.google.com/android/answer/11241215)
