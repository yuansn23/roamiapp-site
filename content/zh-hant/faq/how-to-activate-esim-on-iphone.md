---
title: "如何在 iPhone 上啟用 eSIM（2026）"
h1_title: "2026 年如何在 iPhone 上啟用 eSIM – 完整逐步指南"
description: "完整的 iOS eSIM 啟用指南 2026。無需致電你的電信業者。遵循 QR Code、設定應用程式或電信業者應用程式的簡單指示。快速又免費。"
keywords: ["eSIM 啟用", "如何在 iphone 上啟用 esim", "iphone esim 設定", "在 iphone 上加入 esim", "iphone esim qr code", "iphone 旅行 esim", "iphone esim 疑難排解", "將 esim 轉移到新 iphone", "iphone esim 啟用失敗", "iphone esim 無服務", "iphone esim 卡在啟用中"]
date: 2026-09-24T00:00:00Z
lastmod: 2026-09-24T00:00:00Z
tags: ["eSIM", "iOS", "疑難排解", "旅行設定"]
toc: true
image: "/img/faq/activate-esim-iphone.webp"
image-1: "/img/faq/activate-esim-iphone-1.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "更新於"
  min_read: "分鐘閱讀"
  toc: "目錄"

# Breadcrumbs
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
    - question: "什麼是 eSIM 啟用，它是如何運作的？"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "如何啟用 eSIM？"
      url: "/faq/how-to-activate-an-esim/"
    - question: "如何在 iPhone 上啟用 eSIM（全機型）？"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "最新 eSIM 相容性清單"
      url: "/compatibility/"
---

> **編者按：** 在 iPhone 上啟用 eSIM 約需五分鐘——掃描 QR Code、通過設定點選，設定檔就會下載。這裡的每個步驟都已經在執行 iOS 17 和 18 的真實硬體上測試過。跟著你的 iOS 版本步驟操作，你會在起飛前就連上線。

**簡短答案：** 在 iPhone 上，你從設定應用程式啟用 eSIM——無需致電電信業者，也無需實體卡片。本頁深入探討 iOS 專屬路徑：確切的選單、iOS 17 與 18 之間的差異、將設定檔轉移到新 iPhone，以及大多數指南會跳過的 iMessage/FaceTime 清理。

關於其背後的概念，請見 [什麼是 eSIM 啟用？](/faq/what-is-esim-activation-and-how-does-it-work/)。使用的是 Android？請使用 [一般啟用指南](/faq/how-to-activate-an-esim/)。

正在使用 iPhone 16？有一份專屬的 [iPhone 16 eSIM 指南](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)。

## 你的 iPhone 準備好 eSIM 了嗎？

快速檢查：撥打 `*#06#`——如果出現 32 位數的 **EID**，你的 iPhone 就具備 eSIM。完整的 iPhone 機型清單（XS 到 16/17 系列、SE 第 2/3 代）以及每款能容納多少設定檔，請見 [iPhone eSIM 相容性中心](/faq/iphone-11-esim-compatible/)。

## 在開始啟用 eSIM 之前

1. **已解鎖**——設定 > 一般 > 關於 > 電信業者鎖定 應顯示「無 SIM 限制」。被鎖定的 iPhone 無法安裝第二家供應商的 eSIM。
2. **Wi-Fi**——設定檔從你的電信業者安全伺服器下載，因此你需要連線（行動數據無法進行初始下載）。
3. **密碼**——iOS 會要求你的鎖定畫面密碼以授權安裝。
4. **QR Code**——在另一台裝置上開啟它，或將圖片儲存到相簿並稍後使用「選擇照片」。

## 你的主要線路 vs 旅行 eSIM

在打開設定之前，先確認你實際在做什麼——流程略有不同，知道你處於哪一種情況可避免大多數混淆。

**情境 A：啟用你的主要線路（更換電信業者或更換手機）。** 這是一種電信業者關係。你的電信業者會給你 QR Code、透過他們的應用程式推送 eSIM（Verizon、T-Mobile、AT&T、Visible、Mint 都這樣做），或使用「eSIM 電信業者啟用」——當你用電信業者帳號登入後，設定檔會自動出現。你會想檢查 iMessage 和 FaceTime 是否在新號碼上重新註冊。

**情境 B：加入旅行 eSIM（保留你的家用號碼）。** 這是出國數據用的第二條獨立線路。你讓實體 SIM 或家用 eSIM 保持不動，將旅行 eSIM 與它並存，然後將行動數據指向旅行線路。旅行 eSIM 通常僅限數據，因此通話和簡訊留在你的家用號碼上。

以下內容適用於兩者，但「轉換」、「快速轉移」和「重新註冊 iMessage」章節屬於情境 A 的範疇，而雙線設定屬於情境 B。

## 如何在 iPhone 上安裝 eSIM

### 掃描 QR Code

1. 設定 > 行動服務（或行動數據）。
2. 點擊 **加入 eSIM**（較舊的 iOS：**加入行動方案**）。
3. 點擊 **使用 QR Code**。
4. 將手機拿在距離 QR Code 約 15 公分處，顯示螢幕亮度調到最大。
5. 當方案出現時，點擊 **繼續** 並在提示時輸入你的密碼。

如果試了幾次仍無法掃描，請在相機畫面底部選擇 **手動輸入詳細資料**。

### 手動輸入

前往 設定 > 行動服務 > 加入 eSIM > 使用 QR Code > **手動輸入詳細資料**，然後輸入供應商電子郵件中的 SM-DP+ 位址和啟用碼。當 QR Code 受損或位於你正在啟用的同一支手機上時，這是可靠的備用方式。

### 電信業者應用程式

像 Roami、Airalo 和 Holafly 這樣的供應商可以從他們的應用程式一鍵安裝——開啟你的方案並點擊 **安裝** 或 **啟用**，然後允許提示。最快的路徑，不涉及相機。

## 在 iPhone 上將你的實體 SIM 轉換為 eSIM

如果你的電信業者支援，iOS 可以直接在手機上將你的實體 SIM 轉換為 eSIM——無需前往門市、無需新的 SIM 卡、無需 QR Code。這是釋放實體 SIM 卡槽（例如用於國外的本地 SIM）或在出售手機前轉為全數位的最乾淨方式。

1. 設定 > 行動服務。
2. 點擊目前位於你實體 SIM 上的線路。
3. 點擊 **轉換為 eSIM**（在某些電信業者上顯示為 **將實體 SIM 轉換為 eSIM**）。
4. 點擊 **轉換行動方案**，然後 **轉換為 eSIM**。
5. 等待轉換——通常不到一分鐘——然後在 iOS 提示時移除實體 SIM 卡。

有幾個值得知道的注意事項。**電信業者支援各異**——三大業者（AT&T、Verizon、T-Mobile）支援它，但許多 MVNO 和預付電信業者不顯示該選項。**你的 iPhone 必須在該電信業者的網路上**才能轉換（它在轉換期間驗證線路）。**你無法轉換外國或旅行 SIM**——此功能只轉換你手機目前登入的電信業者的 SIM。一旦轉換，實體卡片就失效了——丟棄它，不要交給別人。

沒有看到「轉換為 eSIM」？你的電信業者尚未啟用它。你仍然可以用舊方式轉為數位：向他們索取 eSIM QR Code 並遵循上述的標準安裝。

## iOS 17 與 iOS 18 eSIM 的變更

| 功能 | iOS 17 | iOS 18 |
|---|---|---|
| 加入 eSIM 路徑 | 設定 > 行動服務 > 加入 eSIM | 相同路徑 |
| 按鈕標籤 | 某些裝置上為「加入行動方案」 | 全面為「加入 eSIM」 |
| 手動輸入 | 掃描畫面底部 | 更顯眼，重新設計 |
| 快速轉移 | 自 iOS 16 起可用 | 更可靠，更好的進度指示器 |
| 電信業者更新 | 有些需要重新啟動 | 背景更新 |

如果你看到「加入行動方案」，它與「加入 eSIM」是相同功能。

## iOS eSIM 版本演進

標籤的變動比人們意識到的更多。以下是完整的演變過程，因此你兩年前手機上三年前的教學仍然合理。

| iOS 版本 | 選單標籤 | eSIM 的變更 |
|---|---|---|
| iOS 15 | 「加入行動方案」 | eSIM 在 XS/XR 及更新機型上可用；雙 SIM 在大多數機型上是一張 eSIM + 一張實體 |
| iOS 16 | 「加入行動方案」 | **快速轉移**（從附近的 iPhone 轉移 eSIM）登場；部分電信業者的轉換為 eSIM |
| iOS 17 | 「加入 eSIM」/「加入行動方案」（混合） | 轉換為 eSIM 擴展到更多電信業者；iPhone 13 及之後的雙*活躍* eSIM |
| iOS 18 | 全面「加入 eSIM」 | 重新設計的加入畫面、背景電信業者更新、更清晰的雙 eSIM 檢視 |

簡短版本：iOS 16 之後的一切都能快速轉移，iOS 17 標準化了雙 eSIM，而 iOS 18 主要是標籤和可靠性的打磨。

## 安裝 eSIM 後重新註冊 iMessage 和 FaceTime

大多數指南在「行動設定完成」就停下，但有一個值得處理的 iOS 怪癖：如果你切換了預設語音線路，iMessage 和 FaceTime 可能仍綁定在舊線路——或顯示「等待啟用」。

1. 設定 > 訊息 > 傳送與接收，並確認你的號碼已被選取。
2. 設定 > FaceTime，並確認正確的號碼或 Apple ID 為活躍。
3. 如果任一項顯示「等待啟用」，請在連接 Wi-Fi 時將 iMessage 關閉再開啟。

這在雙線設定上很重要，其中旅行 eSIM 僅限數據，而你希望將訊息保留在家用號碼上。

## 如何將 eSIM 轉移到新 iPhone

在舊 iPhone 附近設定新 iPhone 時，選擇 **「從附近的 iPhone 轉移 eSIM」** 並讓兩台裝置靠近，保持藍牙和 Wi-Fi 開啟。設定檔在一兩分鐘內無線移動。

如果提示未出現，請在新的手機上前往 設定 > 行動服務 > 加入 eSIM > **從附近的 iPhone 轉移**。如果設定檔已就位但顯示「無服務」，請先從舊 iPhone 刪除它——某些電信業者要求先釋放舊設定檔。

若要將 eSIM 轉移到 Android、電信業者重新發行，或你已出售或重置的手機，請見 [eSIM 轉移指南](/faq/how-to-transfer-esim-between-iphone-and-android/)。

## 快速轉移的邊緣情況

當兩支 iPhone 都在房間裡時，快速轉移非常棒。當它們不在時，會發生以下情況。

- **你出售、遺失或重置了舊 iPhone。** 快速轉移不可能——它需要來源裝置開機且解鎖。改為聯絡你的電信業者，請他們重新發行 eSIM（通常免費，只需幾分鐘），然後在新的手機上安裝全新的 QR。詳細的重新發行步驟在 [轉移指南](/faq/how-to-transfer-esim-between-iphone-and-android/) 中。
- **「從附近的 iPhone 轉移」缺失。** 它只出現在執行 iOS 16 或更新版本的裝置上。在較舊的 iPhone 上，或者來源裝置不在附近時，請改用電信業者 QR 重新發行。
- **轉移在中途停住。** 將兩支手機放在同一個 Wi-Fi 上，讓它們相距幾公分，並在兩者上停用低電量模式。藍牙必須保持開啟——快速轉移先透過藍牙配對，再透過 Wi-Fi 交接。
- **你正從 Android 轉移。** 快速轉移僅限 iPhone 對 iPhone。Android 到 iPhone 的轉移是透過你的電信業者，而非設定應用程式。
- **eSIM 移動了但實體 SIM 沒有。** 快速轉移只移動 *eSIM* 設定檔——實體 SIM 卡仍然必須實體更換（除非你先將它轉換為 eSIM，見上方）。

## 在保留家用號碼的同時加入旅行 eSIM

這是最常見的真實世界設定：你的家用線路維持在原處，而旅行 eSIM 隨行提供數據。請依此順序操作。

1. **讓你的家用線路保持不動。** 無論它是實體 SIM 還是 eSIM，都留在其位置。不要刪除它，不要轉換它。
2. **安裝旅行 eSIM** 透過 QR、手動輸入或供應商應用程式（Roami、Airalo、Holafly）。
3. **為線路標籤命名。** 設定 > 行動服務，點擊每條線路，並使用「行動方案標籤」重新命名它們——「家用」和「Roami 旅行」——以便稍後區分。
4. **將行動數據設為旅行 eSIM。** 設定 > 行動服務 > 行動數據，並選擇旅行線路。
5. **將預設語音線路設為你的家用號碼。** 這讓通話、iMessage 和 FaceTime 保留在你的常規號碼上。
6. **對旅行 eSIM 開啟數據漫遊，對家用關閉。** 旅行線路需要漫遊才能連上合作夥伴網路；家用線路不需要，保持關閉可防止意外的每日費用。
7. **讓「允許行動數據切換」保持關閉。** 開啟時，短暫的訊號下跌可能會將數據切換到你的家用線路並觸發漫遊費用。

現在你有一條來自旅行 eSIM 的數據管道，以及一個每個人仍能聯絡的號碼——無需更換 SIM、無需第二支手機。

## 為旅行設定你的兩條線路

- **預設語音線路：** 保留你的家用 SIM，讓通話和 iMessage 留在你的常規號碼上。
- **行動數據：** 將它指向旅行 eSIM。
- **允許行動數據切換：** 保持 **關閉**。開啟時，短暫的訊號下跌可能會將數據切換到你的家用線路並觸發每日漫遊費用。
- **數據漫遊：** 家用 SIM 關閉，旅行 eSIM 開啟（旅行 eSIM 需要它才能連上合作夥伴網路）。

如果訊號格顯示但頁面無法載入，通常是 APN 問題——完整的 APN 表格位於 [深度疑難排解指南](/faq/esim-deep-troubleshooting-guide-2026/)。

## 「加入 eSIM」變灰，或「加入行動方案」缺失

如果該選項變灰或根本不存在，表示上游有東西在封鎖它。以下是原因，最常見的在前。

| 原因 | 如何判斷 | 修復 |
|---|---|---|
| 電信業者鎖定的 iPhone | 設定 > 一般 > 關於 > 電信業者鎖定 未顯示「無 SIM 限制」 | 透過你的電信業者解鎖，或使用該鎖定電信業者自己的 eSIM |
| 電信業者不提供 eSIM | 你的電信業者只發行實體 SIM | 更換電信業者，或使用旅行 eSIM 作為數據 |
| eSIM 卡槽已滿 | iPhone 13+ 容納兩個活躍 eSIM；XS–12 容納一個 | 關閉或移除現有線路以釋出卡槽 |
| MDM / 企業設定檔 | 安裝了管理設定檔的工作手機 | `AllowESIMModification` 限制封鎖變更——聯絡 IT |
| 中國 / 香港機型 | 機型號碼以中國專屬後綴結尾，無 eSIM 硬體 | eSIM 在中國大陸 iPhone 上不可用 |
| 軟體故障 | 最近的 iOS 更新讓選單過時 | 重新啟動，然後再次檢查 |

單一最大的原因是電信業者鎖定——它占了「為什麼我無法加入 eSIM」工單的大部分。第二大原因是試圖在只允許兩個活躍線路的手機上加入第三條線。

## Apple Watch 和 iPad 呢？

Apple Watch 會鏡像你 iPhone 的其中一條線路——它無法單獨使用旅行 eSIM——而 cellular iPad 使用它們自己的 設定 > 行動數據 路徑。完整細節在 [iPad 與 Apple Watch eSIM 指南](/faq/ipad-apple-watch-esim-support-guide/) 中。

## 在 iPhone 上管理多個 eSIM

一旦你安裝了兩三個設定檔，一點整理可避免它們變成一團混亂。

- **為每條線路標籤命名。** 設定 > 行動服務 > 一條線路 > 行動方案標籤。「家用」、「Roami 旅行」和「西班牙 eSIM」勝過預設值（「主要」、「次要」、「旅行」）。
- **開啟或關閉線路。** 設定 > 行動服務 > 一條線路 > 開啟此線路。關閉表示它停止嘗試註冊——對於你計劃下次旅行重複使用的休眠旅行 eSIM 很方便。
- **即時切換數據線路。** 設定 > 行動服務 > 行動數據 讓你無需重新啟動即可在線路之間移動數據。
- **注意活躍線路上限。** iPhone 13 及之後允許一次兩條活躍線路；第三個設定檔可以被*儲存*，但在你關閉一個之前無法活躍。
- **完成後刪除。** 旅行後，移除過期的旅行 eSIM（設定 > 行動服務 > 該線路 > 刪除 eSIM），讓它停止塞滿清單——但只能在方案過期後刪除，因為 QR Code 是單次使用。

## eSIM、iCloud 備份與抹除你的 iPhone

大多數人透過慘痛教訓學到的一件事：**eSIM 不是你 iCloud 備份的一部分。** 從備份還原會帶回你的應用程式、設定和照片——但不會帶回你的行動設定檔。設定檔位於手機的 eUICC 晶片上，只有三件事能移動它們：快速轉移、電信業者重新發行，或從你的供應商重新下載。

實際後果：

- **「清除所有內容和設定」會移除你的 eSIM。** 在你抹除之前（出售、以舊換新或修復問題），要知道你稍後需要重新下載每個 eSIM——而具有單次使用 QR Code 的旅行 eSIM 可能需要一整個新方案。
- **正常的 iCloud 還原不會清除或還原 eSIM。** 還原到*同一支*手機會讓你的 eSIM 保持不動；還原到*新*手機仍然需要快速轉移或電信業者重新發行才能取得線路。
- **備份無法挽救遺失的 eSIM。** 如果你抹除或弄壞手機，在電信業者重新發行之前，設定檔就消失了。將你的供應商手動輸入字串（SM-DP+ 位址 + 啟用碼）儲存在手機以外的地方。

## iPhone 常見 eSIM 錯誤

最頻繁的失敗——「無法加入行動方案」、卡在「啟用中」、安裝後的「無服務」——在 [eSIM 深度疑難排解指南](/faq/esim-deep-troubleshooting-guide-2026/) 中逐錯誤說明，並附有 APN 值。單一最大的原因是電信業者鎖定的手機；第二大原因是旅行 eSIM 上的數據漫遊被關閉。

## 常見問題

**我的 iPhone 可以儲存多少個 eSIM？**
八個或更多設定檔，但一次只有兩個可以活躍（iPhone 13 及更新）。較舊機型（XS–12）保留一個活躍 eSIM 加一張實體 SIM。

**我可以在旅行後刪除我的 eSIM 嗎？**
可以——設定 > 行動服務 > 該 eSIM > 在方案過期後刪除 eSIM。絕對不要在旅行中途刪除：QR Code 是單次使用，因此你需要一個新方案。

**eSIM 會消耗我的 iPhone 電池嗎？**
不顯著。在訊號微弱區域的兩條活躍線路每天可能多耗百分之一二，但單獨的 eSIM 耗電量約與實體 SIM 相同。

**在 iPhone 上我需要為旅行 eSIM 開啟數據漫遊嗎？**
需要——這是 eSIM 在合作夥伴網路上註冊所需的，且不會增加漫遊費用。漏掉這點是「無服務」的第一大原因。

**我可以在 iPhone 上同時使用實體 SIM 和 eSIM 嗎？**
可以——雙 SIM 開箱即用。（美國 iPhone 14 及更新僅限 eSIM，因此你會改為配對兩個 eSIM。）雙 SIM 如何運作請見 [iPhone 相容性中心](/faq/iphone-11-esim-compatible/)。

**eSIM 和實體 SIM 的差別是什麼？**
簡短版本：eSIM 是一個你無法移除的數位設定檔，且能即時切換電信業者。完整比較在 [什麼是 eSIM？](/faq/what-is-esim/)。

**我可以在 iPhone 上將實體 SIM 轉換為 eSIM 嗎？**
如果你的電信業者支援，可以——設定 > 行動服務 > 你的線路 > 轉換為 eSIM。三大美國電信業者支援它；許多 MVNO 不支援。你的手機需要位於該電信業者的網路上才能轉換。

**為什麼我的 iPhone 上「加入 eSIM」變灰？**
通常是電信業者鎖定、eSIM 卡槽已滿，或企業 MDM 設定檔封鎖變更。先檢查 設定 > 一般 > 關於 > 電信業者鎖定——如果它沒有顯示「無 SIM 限制」，那就是你的答案。

**如果我抹除 iPhone，我的 eSIM 會發生什麼？**
「清除所有內容和設定」會移除 eSIM 設定檔。你稍後需要從你的電信業者重新下載它們。具有單次使用 QR Code 的旅行 eSIM 可能需要新方案，因此只有在準備好重新設定一切時才抹除。

**如果我的舊 iPhone 已經不在，快速轉移還有效嗎？**
無效——它需要兩支手機都在場且開機。如果你的舊 iPhone 已出售、遺失或重置，請改為請你的電信業者重新發行 eSIM。請見 [轉移指南](/faq/how-to-transfer-esim-between-iphone-and-android/)。

**我可以在兩次旅行之間暫停我的 iPhone 旅行 eSIM 嗎？**
你無法暫停方案的有效期限時鐘，但你可以將線路**關閉**（設定 > 行動服務 > 該線路 > 開啟此線路），讓它停止註冊並停止耗電。它保持儲存並準備在下次旅行時重新開啟——只要方案的有效期限尚未結束。

---

## 準備好迎接你的下一次冒險了嗎？

👉 **先免費試用**——取得一張 [免費 eSIM](/free-esim/) 並完整跑完這份逐步指南。

然後挑選你的目的地：

- [美國 eSIM](/united-states-esim/)
- [日本 eSIM](/japan-esim/)
- [歐洲 eSIM](/europe-esim/)
- [英國 eSIM](/united-kingdom-esim/)

*基於 Apple 官方文件、GSMA 標準和電信業者測試。更新：2026 年 9 月。*

## 資料來源

- [GSMA — eSIM（SGP.22）規格](https://www.gsma.com/esim/)
- [Apple 支援 — 在 iPhone 上設定 eSIM](https://support.apple.com/en-us/HT212780)
- [Apple 支援 — 關於 iPhone 上的 eSIM](https://support.apple.com/en-us/HT209044)
- [Apple 支援 — 在 iPhone 上使用雙 SIM 與 eSIM](https://support.apple.com/en-us/HT209086)
