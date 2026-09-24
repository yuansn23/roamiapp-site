---
title: "eSIM 深度疑難排解指南 2026"
h1_title: "2026 年 eSIM 疑難排解完整指南 – 18 個真實修復方法"
description: "使用這份 2026 年疑難排解指南，修復 iPhone 與 Android 上的 eSIM 啟用失敗、轉移錯誤、無服務與 QR 掃描問題。"
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["eSIM 疑難排解", "eSIM 啟用失敗", "eSIM 無服務", "eSIM 轉移錯誤", "eSIM 跨平台轉移", "iOS 18 eSIM", "eSIM APN 設定", "eSIM 確認碼", "eSIM 電信業者鎖定", "eSIM 卡在啟用中"]
date: 2026-09-24T00:00:00Z
lastmod: 2026-09-24T00:00:00Z
tags: ["eSIM", "iOS", "Android", "疑難排解", "旅行設定"]
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

> **編者按：** Roami 在這份參考資料背後經營支援服務台。當旅客遇到特定的螢幕錯誤——「啟用失敗」、「無服務」、「無法新增行動方案」、還原錯誤 4013/4014——這就是我們自己團隊打開來解碼的頁面。以下每個條目都將一個確切的錯誤訊息對應到其真正原因與具體修復，並於 2026 年 9 月跨 iOS 18 與 Android 14/15 測試過。

> **找錯頁面了？** 若您的問題是「我的手機到底支不支援 eSIM」——中國/香港機型、電信業者鎖定、缺少 EID——那是硬體問題，而非錯誤。請改前往我們的 [eSIM 硬體與錯誤代碼指南](/faq/esim-activation-errors-troubleshooting-guide/)。本頁假設您的手機可以使用 eSIM，且問題是特定的錯誤訊息。

## eSIM 快速診斷流程

使用這張決策地圖，直接跳到您螢幕上確切訊息的修復方法。

| 您看到／經歷的狀況 | 可能壞掉的地方 | 急迫性 | 跳至修復 |
|---------------------------|----------------------|---------|-------------|
| **QR Code 無法掃描／顯示無效** | QR Code 過期或損壞 | 低 | [第 3 節](#esim-qr-code-invalid-or-expired) |
| **「無法啟用」或「啟用失敗」** | 網路逾時或伺服器錯誤 | 中 | [第 1 節](#esim-activation-failed-or-unable-to-activate) |
| **安裝後「無服務」** | 數據漫遊關閉或缺少 APN | 高 | [第 2 節](#esim-no-service-after-installation) |
| **滿格訊號但無網路** | APN 設定錯誤 | 高 | [第 8 節](#esim-no-data-connection-after-activation) |
| **「無法新增行動方案」** | 儲存的 eSIM 過多或硬體限制 | 中 | [第 5 節](#esim-cellular-plan-cannot-be-added) |
| **「eSIM 已在使用中」** | 設定檔仍綁定舊裝置 | 高 | [第 4 節](#esim-already-in-use-or-bound-to-another-device) |
| **確認碼彈窗** | 設定檔需要 PIN | 低 | [第 6 節](#esim-confirmation-code-required) |
| **「不支援此 SIM 卡」** | 手機被電信業者鎖定 | 高 | [第 7 節](#esim-sim-not-supported-on-a-carrier-locked-device) |
| **卡在「啟用中」超過 10 分鐘** | 下載停滯 | 中 | [第 9 節](#esim-stuck-on-activating) |
| **雙 eSIM：其中一個門號無訊號** | 路由衝突 | 中 | [第 10 節](#dual-esim-with-one-line-showing-no-service) |
| **轉移 eSIM 到新手機，失敗** | 不支援跨平台轉移 | 高 | [第 11 節](#esim-transfer-failed) |
| **iPhone 還原錯誤 4013/4014** | 硬體/韌體問題，非 eSIM | 高 | [第 12 節](#iphone-esim-restore-error-4013-or-4014) |
| **「設定檔已過期」** | QR Code 逾時 | 低 | [第 13 節](#esim-profile-expired) |
| **國外漫遊無法運作** | 數據漫遊開關關閉 | 高 | [第 14 節](#esim-data-roaming-not-working) |
| **不小心刪除 eSIM** | 使用者錯誤 | 高 | [第 15 節](#esim-deleted-by-mistake) |
| **MDM 封鎖 eSIM 變更** | 工作裝置政策 | 中 | [第 16 節](#mdm-or-enterprise-restrictions-block-esim) |
| **重新啟動後 eSIM 消失** | iOS/Android 軟體故障 | 高 | [第 17 節](#esim-disappeared-after-restart) |
| **Wi-Fi 通話可用但 eSIM 數據不行** | Wi-Fi 與行動網路間的路由衝突 | 中 | [第 18 節](#wi-fi-calling-works-but-esim-data-does-not) |
| **插入實體 SIM 卡，eSIM 無法運作** | SIM 卡托衝突 | 高 | [第 19 節](#esim-vs-physical-sim-conflict) |
| **Apple Watch eSIM 無法連線** | 手錶配對或電信業者問題 | 中 | [第 20 節](#apple-watch-esim-not-working) |


## 快速參考表

| 症狀 | 最可能原因 | 修復 |
|---------|-------------------|-----|
| 「無法啟用」／「啟用失敗」 | Wi-Fi 不穩或電信業者伺服器錯誤 | 穩定網路 + 重試，再重新安裝（第 1 節） |
| 安裝後「無服務」 | 數據漫遊關閉／缺少 APN | 開啟漫遊、檢查 APN（第 2 節） |
| QR Code「無效」／「已過期」 | QR Code 已過期或已使用 | 申請新的 QR Code（第 3 節） |
| 「eSIM 已在使用中」 | 設定檔未從舊裝置釋放 | 從舊裝置刪除或請業者釋放（第 4 節） |
| 「無法新增行動方案」 | 儲存的 eSIM 過多 | 移除未使用的 eSIM（第 5 節） |
| 需要確認碼 | 設定檔有強制性代碼 | 在業者電子郵件中尋找 4–8 位數代碼（第 6 節） |
| 「不支援此 SIM 卡」 | 裝置被電信業者鎖定 | 解鎖裝置或聯絡業者（第 7 節） |
| 啟用後無數據 | APN 未設定 | 手動輸入 APN（第 8 節） |
| 卡在「啟用中」 | 設定檔下載停滯 | 切換飛航模式、重新安裝（第 9 節） |
| 雙 SIM 一個門號「無服務」 | 通話/數據路由衝突 | 檢查門號路由與開關（第 10 節） |
| eSIM 轉移失敗 | 業者不支援轉移 | 使用業者 QR Code 備援（第 11 節） |
| 還原錯誤 4013 / 4014 | 還原時的硬體/韌體問題 | 更換傳輸線、更新電腦（第 12 節） |
| 「設定檔已過期」 | QR Code 有時間限制 | 申請新的 QR Code（第 13 節） |
| 數據漫遊無法運作 | eSIM 門號的漫遊關閉 | 開啟數據漫遊（第 14 節） |
| 誤刪 eSIM | 設定檔於本地移除 | 聯絡業者／購買新方案（第 15 節） |
| MDM 封鎖 eSIM 變更 | 企業限制 | 聯絡您的 IT 管理員（第 16 節） |
| 重新啟動後 eSIM 消失 | iOS/Android 軟體故障 | 檢查設定、重新新增設定檔（第 17 節） |
| Wi-Fi 通話可用但數據不行 | 路由衝突 | 暫時停用 Wi-Fi 通話（第 18 節） |
| 插入實體 SIM 卡，eSIM 停止運作 | 卡托/讀卡機衝突 | 移除實體 SIM 卡、重新啟動（第 19 節） |
| Apple Watch eSIM 無法連線 | 配對或業者問題 | 重新配對手錶、聯絡業者（第 20 節） |


## eSIM 啟用失敗或無法啟用

**原因：** 幾乎總是不穩定的 Wi-Fi 連線或暫時的電信業者（SM-DP+）伺服器錯誤，而非您的手機有問題。SM-DP+（Subscription Manager - Data Preparation Plus）是將您的 eSIM 設定檔傳送至裝置的安全伺服器——若它無法連達，啟用就會失敗。

**修復：**
1. 移動到穩定的 Wi-Fi 或行動數據連線。
2. 切換飛航模式開與關，以重新整理基頻。
3. 若錯誤重複出現，請在 `設定 > 行動數據` 下刪除待處理的 eSIM，重新啟動，再掃描 QR Code。

**iOS 18 專屬：** 在 iOS 18 上，訊息可能顯示「無法完成啟用」並帶有重試按鈕。請先點選重試——iOS 18 改進的啟用流程常能在不重新安裝的情況下解決問題。

---

## eSIM 安裝後無服務

**原因：** 設定檔已安裝，但手機尚未向當地網路註冊——通常是因為數據漫遊關閉或缺少 APN。

**修復：**
1. 為 eSIM 門號開啟 **數據漫遊**。
2. 在 `設定 > 行動數據 > [您的 eSIM] > 網路選取` 下，關閉「自動」，手動選取一個電信業者，等待它失敗，再切回「自動」以強制重新註冊。
3. 若仍無數據，請檢查 APN（第 8 節）。

---

## eSIM QR Code 無效或已過期

**原因：** eSIM 的 QR Code 是單次使用且有時間限制的。該代碼可能已被使用或已過期。

**修復：** 聯絡您的 eSIM 業者，請他們重新發出新的 QR Code，然後立即掃描。

**若您從手機螢幕掃描：** 先將 QR Code 圖片存入照片，再於設定 > 行動數據 > 新增 eSIM 中，選擇「使用 QR Code」並點選「選擇照片」來選取已儲存的圖片。這可避免「無法掃描自己的螢幕」的問題。

---

## eSIM 已在使用中或綁定其他裝置

**原因：** 設定檔從未從舊裝置釋放，因此業者仍將它與該手機關聯。

**修復：**
1. 在舊裝置上，於 `設定 > 行動數據` 下刪除 eSIM。
2. 等待約五分鐘，再於新裝置上重試。
3. 若舊裝置遺失或損壞，請聯絡您的業者，請他們從業者端強制釋放設定檔。

---

## eSIM 無法新增行動方案

**原因：** 手機已達到儲存 eSIM 設定檔的上限（通常 8–10 個，依機型而異），或該裝置是中國大陸機型且無 eSIM 硬體。

**修復：** 在 `設定 > 行動數據` 下移除未使用的 eSIM，再新增新的。若您的裝置是在中國大陸購買，它使用兩個實體 SIM 卡槽，無法新增 eSIM——關於如何辨識中國或香港機型並確認您的手機有硬體，請見我們的 [硬體檢查與錯誤指南](/faq/esim-activation-errors-troubleshooting-guide/)。

---

## eSIM 需要確認碼

**原因：** 部分 eSIM 設定檔有強制性的確認碼，在下載設定檔前需要提供。這是用於驗證身分的 4–8 位數 PIN。

**修復：** 在業者隨 QR Code 寄出的電子郵件中尋找 4–8 位數的代碼。若找不到，請聯絡業者。

**尋找確認碼的常見位置：**
- 啟用電子郵件的標題行
- 電子郵件底部，於「啟用詳細資訊」下方
- 在業者 App 中的「我的方案」>「詳細資訊」

---

## eSIM 在不支援的電信業者鎖定裝置上顯示不支援此 SIM 卡

**原因：** 手機被鎖定在另一家電信業者，無法接受來自不同業者的設定檔。

**修復：** 檢查 `設定 > 一般 > 關於 > 電信業者鎖定`。若未顯示「無 SIM 卡限制」，請聯絡您的本國電信業者申請解鎖。關於電信業者鎖定的完整教學——如何檢查狀態、美國電信業者解鎖政策，以及如何解鎖裝置——請見我們的 [硬體與電信業者鎖定指南](/faq/esim-activation-errors-troubleshooting-guide/)。

---

## eSIM 啟用後無數據連線

**原因：** 存取點名稱（APN）未自動設定，因此手機沒有通往數據網路的路由。

**修復：**
1. 前往 `設定 > 行動數據 > 行動數據網路`。
2. 輸入您 eSIM 業者官網上的 APN 值（例如 Airalo 為 `globaldata`）。
3. 多數旅行 eSIM 會自動設定 APN，因此請向您的業者確認正確數值。

**各業者常見 APN 值（若自動設定失敗）：**

| 業者 | APN | 使用者名稱 | 密碼 |
|----------|-----|----------|----------|
| Roami | internet | （空白） | （空白） |
| Airalo | globaldata | （空白） | （空白） |
| Holafly | hola | （空白） | （空白） |
| Nomad | nbdata | （空白） | （空白） |
| Ubigi | ubigi | （空白） | （空白） |
| Google Fi | h2g2 | （空白） | （空白） |
| T-Mobile（美國） | fast.t-mobile.com | （空白） | （空白） |
| AT&T（美國） | nxgen | （空白） | （空白） |
| Verizon（美國） | vzwinternet | （空白） | （空白） |
| EE（英國） | everywhere | （空白） | （空白） |
| O2（英國） | mobile.o2.co.uk | web | web |
| Vodafone（英國） | internet | （空白） | （空白） |
| Three（英國） | three.co.uk | （空白） | （空白） |

---

## eSIM 卡在啟用中

**原因：** 設定檔下載停滯，通常是因為訊號微弱或啟用伺服器繁忙。

**修復：**
1. 確保您處於穩定的網路。
2. 切換飛航模式開與關。
3. 若卡住超過 10 分鐘，請刪除 eSIM 並從 QR Code 重新安裝。

---

## 雙 eSIM 其中一個門號無服務

**原因：** 有兩個啟用的 eSIM 時，來電與數據路由可能衝突，導致一個門號沒有服務。這是影響有兩個啟用門號使用者的常見 **雙 eSIM 訊號問題**。

**修復：**
1. 在 `設定 > 行動數據` 下，確認哪個門號設為 **行動數據**、哪個設為 **預設語音門號**。
2. 將每個門號切換關閉再開啟。
3. 更深入的修復，請見我們的 **[雙 eSIM 無法運作？iPhone 12 種修復](/faq/dual-esim-not-working-12-fixes-for-iphone/)** 指南。

---

## eSIM 轉移失敗

**原因：** 沒有內建的跨平台 eSIM 轉移，且您的業者可能不支援基於 App 的轉移。

**修復：** 請您的業者將 eSIM 重新發行為新的 QR Code，並在新裝置上掃描。轉移後，WhatsApp、iMessage 與簡訊雙因素驗證碼仍會運作，因為您的號碼沒有改變。完整的逐步說明，請見我們的 **[eSIM 轉移指南](/faq/how-to-transfer-esim-between-iphone-and-android/)**。

---

## iPhone eSIM 還原錯誤 4013 或 4014

**原因：** 這些錯誤表示軟體還原期間的硬體或韌體問題，而非 eSIM 問題。它們常由故障的 USB 傳輸線或過時的電腦軟體引起。

**修復：** 嘗試不同的傳輸線與 USB 埠，更新您電腦的作業系統，再嘗試還原。若錯誤持續，請聯絡 Apple 支援。

---

## eSIM 設定檔已過期

**原因：** eSIM 的 QR Code 或啟用碼有時間限制，已經過期。

**修復：** 聯絡您的 eSIM 業者，索取新的 QR Code，然後盡快啟用。

---

## eSIM 數據漫遊無法運作

**原因：** 旅行 eSIM 門號的數據漫遊已關閉，因此無法連上當地網路。

**修復：** 前往 `設定 > 行動數據 > [您的 eSIM]`，並將 **數據漫遊** 開啟。這是多數旅行 eSIM 在國外運作所需。

---

## eSIM 被誤刪

**原因：** 刪除 eSIM 會從手機移除設定檔，但不會取消方案。

**修復：**
- 對於月付電信業者 eSIM，請聯絡業者——他們通常能重新發出 QR Code。
- 對於旅行 eSIM（Roami、Airalo 等），刪除通常是永久的，因此您需要購買新方案。
- 務必備份您原始的啟用電子郵件與 QR Code。

---

## MDM 或企業限制封鎖 eSIM

**原因：** 在受管理的（工作）裝置上，行動裝置管理政策如 `AllowESIMModification` 可封鎖新增或移除 eSIM。

**修復：** 聯絡您的 IT 管理員以啟用 eSIM 變更，或使用未受管理的裝置。

---

## 重新啟動後 eSIM 消失

**症狀：** 您重新啟動手機，eSIM 不再列於設定 > 行動數據中。它不見了。

**原因：** iOS 或 Android 上的軟體故障有時會導致 eSIM 設定檔在重新啟動後變成隱藏或無法讀取，尤其是在作業系統更新之後。設定檔仍在裝置上，但系統未能掛載它。

**修復：**
1. **iPhone：** 前往設定 > 一般 > 關於，向下捲動至「可用 SIM」或「數位 SIM」。若 eSIM 出現在那裡但不在行動數據中，請再次重新啟動手機。
2. **iPhone：** 若重新啟動無效，請前往設定 > 行動數據 > 新增 eSIM。有時手機會偵測到現有設定檔，並提供在無新 QR Code 下重新新增。
3. **Android（Samsung）：** 前往設定 > 連線 > SIM 管理員。eSIM 可能顯示為「未啟用」。點選它並切換開啟。
4. **Android（Pixel）：** 前往設定 > 網路與網際網路 > SIM 卡。若 eSIM 遺失，請點選「新增電信業者」——手機可能會偵測到現有設定檔。
5. 若以上皆無效，請聯絡您的業者並申請新的 QR Code。舊設定檔可能已損毀。

**預防：** 重新啟動前，確保所有 eSIM 門號都已切換關閉，再重新啟動，然後切換回開啟。這能降低系統跟丟設定檔的機會。

---

## Wi-Fi 通話可用但 eSIM 數據不行

**症狀：** 您的本國門號已啟用 Wi-Fi 通話，但您的旅行 eSIM 沒有數據連線。或者，eSIM 在 Wi-Fi 上可用，但在行動網路上不行。

**原因：** Wi-Fi 通話與行動數據之間的路由衝突。當 Wi-Fi 通話啟用時，手機可能優先使用 Wi-Fi 網路進行所有通訊（包含數據），而未能透過 eSIM 正確路由行動數據。

**修復：**
1. 暫時關閉本國門號的 Wi-Fi 通話：設定 > 行動數據 > [本國門號] > Wi-Fi 通話 > 切換關閉。
2. 切換飛航模式開與關，強制手機重新註冊行動網路。
3. 測試 eSIM 數據連線。若可用，您可以將 Wi-Fi 通話重新開啟——路由現在應該正確。
4. 若問題復發，請檢查本國門號的 **數據漫遊為關閉**，且旅行 eSIM 的 **數據漫遊為開啟**。

**替代方案：** 在 iPhone 上，前往設定 > 行動數據 > 行動數據，確保選取了旅行 eSIM。然後啟用「允許行動數據切換」——這讓手機即使在語音門號是本國門號的情況下，也能使用旅行 eSIM 作為 Wi-Fi 通話的數據。

---

## eSIM 與實體 SIM 卡衝突

**症狀：** 您將實體 SIM 卡插入手機，原本正常的 eSIM 突然顯示「無服務」，或完全從設定中消失。

**原因：** 這是電信業者鎖定裝置上已知的行為。當鎖定的 iPhone 偵測到來自不同電信業者的實體 SIM 卡時，它可能會停用 eSIM 卡槽以防止未授權使用。在某些 Android 裝置上，插入實體 SIM 卡也會導致系統在所有功能上優先使用實體 SIM 卡而非 eSIM。初次混用兩種格式？[eSIM vs 實體 SIM 卡比較](/faq/what-is-esim/) 說明了它們如何共存。

**修復：**
1. 從卡托取出實體 SIM 卡。
2. 重新啟動手機。
3. eSIM 應會重新出現在設定 > 行動數據（iPhone）或設定 > 連線 > SIM 管理員（Android）。
4. 若 eSIM 重新出現但仍顯示「無服務」，請為 eSIM 門號開啟數據漫遊。
5. 若您需要實體 SIM 卡與 eSIM 同時運作，請聯絡您的業者解鎖裝置。

> **替代方案：** 部分使用者回報，將 eSIM 門號切換關閉再開啟（無須移除實體 SIM 卡）即可解決衝突。在移除實體 SIM 卡前，請先嘗試此法。

---

## Apple Watch eSIM 無法運作

**症狀：** 您已在 Apple Watch 上設定行動網路，但它顯示「無服務」或「搜尋中」——或 eSIM 方案根本沒有出現在 Watch App 中。

**原因：** Apple Watch 的 eSIM 啟用需要業者支援手錶的特定方案類型，且設定需要您的 iPhone 在附近並有穩定的網路連線。

**修復：** 確認您的業者支援 Apple Watch eSIM，然後取消配對並重新配對手錶，過程中讓 iPhone 保持在附近。若仍無法啟用，請帶著手錶的 **EID** 與 **IMEI** 聯絡您的業者，以便他們手動佈建。完整的逐步教學——包含哪些 iPad 與 Apple Watch 機型支援 eSIM——請見我們的 [iPad 與 Apple Watch eSIM 指南](/faq/ipad-apple-watch-esim-support-guide/)。

---

## eSIM 錯誤代碼參考

| 錯誤代碼 | 平台 | 意義 | 修復 |
|------------|----------|---------|-----|
| **4013** | iPhone（還原） | 還原期間的硬體/韌體故障 | 更換傳輸線、USB 埠、更新 macOS/iTunes |
| **4014** | iPhone（還原） | 類似 4013；通常是 USB 通訊問題 | 同上 |
| **-8** | Android（啟用） | 網路逾時 | 等待後重試，或切換 Wi‑Fi |
| **-100** | Android（QR 掃描） | 不支援的 QR Code 格式 | 使用手動輸入 |
| **0xE8000001** | iPhone（啟用） | 電信業者伺服器無法連達 | 5 分鐘後重試或使用手動輸入 |
| **「不支援 eSIM 設定」** | Android（Samsung） | 電信業者不支援該機型的 eSIM | 向業者確認 |
| **「無效的 SM‑DP+ 位址」** | 兩者 | 手動輸入的位址錯誤 | 再次核對業者提供的位址 |
| **「LPA error -1」** | Android | 一般 LPA（Local Profile Assistant）錯誤 | 重新啟動手機、重試。若持續，請改用不同的 eSIM App。 |
| **「EID 不符」** | 兩者 | 設定檔綁定到不同的裝置 | 聯絡業者釋放設定檔（第 4 節） |
| **撥打 `*#06#` 時「無 EID」** | 兩者 | 裝置不支援 eSIM | 您的手機缺乏 eSIM 硬體——請見我們的 [硬體檢查指南](/faq/esim-activation-errors-troubleshooting-guide/) |
| **「eSIM 管理不可用」** | Android（OnePlus） | Oxygen OS 錯誤 | 更新至最新 Oxygen OS 版本 |
| **「無法刪除設定檔」** | iPhone | eSIM 卡在待處理狀態 | 重新啟動 iPhone，再嘗試刪除。若卡住，請聯絡業者。 |
| **-1** | 兩者 | 一般啟用失敗 | 重新啟動手機、確保網路連線、再試一次 |
| **-2** | Android | 無效的啟用碼 | 重新輸入代碼或向業者申請新的 |

## 會毀掉您 eSIM 的錯誤

這些是最常導致正常的 eSIM 變成磚塊的使用者錯誤。請務必避免——多數可追溯到啟用實際如何運作，這點 [eSIM 啟用說明](/faq/what-is-esim-activation-and-how-does-it-work/) 有逐步說明。

| 錯誤 | 發生情況 | 如何避免 |
|---------|--------------|--------------|
| **刪除 eSIM 來「修復」連線問題** | 設定檔被永久移除——您失去所有剩餘數據，且必須購買新方案 | 除非方案完全到期，否則絕不點「刪除 eSIM」。刪除不會「刷新」——它會銷毀。 |
| **用相機 App 掃描 QR Code** | 相機辨識到代碼但什麼都不會發生——沒有設定檔安裝 | 始終先開啟設定 > 行動數據 > 新增 eSIM——絕不使用獨立的相機 App。 |
| **在機場用微弱 Wi-Fi 安裝** | 下載在中途切斷，損毀設定檔 | 在出發前於家中穩定的 Wi-Fi 上安裝。 |
| **等到降落才安裝** | 您抵達時沒有 Wi-Fi，無法下載設定檔 | 在出發前安裝設定檔（它會保持未啟用，直到您開啟數據漫遊）。 |
| **忘記為 eSIM 開啟數據漫遊** | 滿格訊號但零網路 | 降落后，前往設定 > 行動數據 > [您的 eSIM] 並將數據漫遊切換開啟。 |
| **重置網路設定以為能「刷新」eSIM** | 網路重置不會刪除 eSIM，但它會移除 Wi-Fi 密碼與藍牙配對——您失去所有已存網路 | 僅在最後手段才重置網路設定，並知道它無法修復 eSIM 啟用問題。 |
| **關閉 eSIM 門號而非僅停用數據漫遊** | eSIM 完全停用，重新啟用時無法註冊 | 切換關閉數據漫遊，而非整個門號。不使用时保持門號開啟但漫遊關閉。 |

## 同時出現多個 eSIM 問題

有時您不是只有一個問題——而是同時有兩三個。以下是如何診斷組合症狀：

| 症狀組合 | 實際發生的事 | 修復順序 |
|---------------------|---------------------------|-----------|
| **QR Code 掃描後卻「啟用失敗」** | QR Code 有效，但下載伺服器無法連達 | 先修復網路（第 1 節），再重新掃描 |
| **eSIM 有訊號格但無數據，且本國門號「無服務」** | 缺少 APN，且您有雙 SIM 路由衝突 | 先修復 APN（第 8 節），再修復雙 SIM 路由（第 10 節） |
| **轉移成功但新手機「無服務」** | 設定檔已轉移但未在新網路註冊 | 從舊手機刪除 eSIM，再重新啟動新手機（第 4 節 + 第 2 節） |
| **Wi-Fi 通話可用但 eSIM 無數據，且本國門號有漫遊費用** | 多個路由衝突加上本國門號數據漫遊未關 | 關閉本國門號數據漫遊，修復 Wi-Fi 通話衝突（第 18 節），再檢查 APN |
| **重新啟動後 eSIM 消失，且「無法新增行動方案」** | 設定檔損毀且儲存已滿 | 先移除未使用的 eSIM（第 5 節），再嘗試重新新增（第 17 節） |

**一般規則：** 先修復 **網路問題**（Wi-Fi、數據漫遊、APN），再修復 **設定檔問題**（QR Code、啟用），最後是 **裝置特定問題**（電信業者鎖定、MDM）。不要試圖一次修復所有問題——逐一處理症狀。

## 各手機在哪裡找到新增 eSIM

多數錯誤的修復相同，但通往 eSIM 控制的選單路徑因品牌而異。以下是確切路徑，加上僅在特定裝置上出現的錯誤怪癖。（這些選單背後的完整安裝方法，[一般啟用指南](/faq/how-to-activate-an-esim/) 有每個步驟。）

### iPhone eSIM 選單路徑
- **「新增 eSIM」變灰** – 您的 iPhone 可能遭電信業者鎖定。檢查設定 > 一般 > 關於 > 電信業者鎖定；完整的電信業者鎖定修復，請見我們的 [電信業者鎖定與硬體指南](/faq/esim-activation-errors-troubleshooting-guide/)。
- **快速轉移失敗** – 確保兩支手機使用相同的 Apple ID、藍牙開啟，且彼此距離在 10 公分內。
- **iOS 更新後，eSIM 顯示「無服務」** – 前往設定 > 行動數據 > 點選 eSIM > 將「開啟此門號」切換關閉再開啟。也請檢查數據漫遊仍為開啟。
- **iOS 更新後 eSIM 消失** – 見第 17 節。這在重大更新後的 iOS 上比 Android 更常見。
- **iOS 18 專屬：** 「新增 eSIM」流程已重新設計，具有更顯眼的手動輸入選項。若您使用 iOS 18 且 QR Code 無法掃描，手動輸入按鈕現在更容易在螢幕底部找到。

### Samsung Galaxy eSIM 選單路徑
- **選單路徑因 One UI 版本而異：**
  - **One UI 5（Android 13）：** 設定 > 連線 > SIM 管理員 > 新增 eSIM
  - **One UI 6/6.1（Android 14）：** 設定 > 連線 > SIM 管理員 > 新增 eSIM（相同路徑）
  - **One UI 7（Android 15）：** 設定 > 連線 > SIM 管理員 > 新增行動方案
- **QR Code 掃描失敗** – 嘗試手動輸入（點選「手動輸入啟用碼」）。Samsung 經常需要分開的 SM‑DP+ 位址與啟用碼。
- **雙 SIM 衝突** – 若您有實體 SIM 卡與 eSIM，請檢查 eSIM 是否在 SIM 管理員中設為數據 SIM。

### Google Pixel eSIM 選單路徑
- **「改以下載 SIM 卡？」** – 此選項出現在 SIM 設定畫面底部。若您看不到，您的 Pixel 可能遭電信業者鎖定。
- **掃描後 eSIM 未出現** – 重新啟動手機。Pixel 在下載設定檔後有時需要重新開機。
- **APN 設定未儲存** – 在 Pixel 上，APN 設定位於網路與網際網路 > SIM 卡 > [您的 eSIM] > 存取點名稱。若它們未儲存：
  1. 新增一個 **不同名稱** 的新 APN（例如「Airalo 2」而非「Airalo」）。
  2. 儲存它，再手動選取。
  3. 切換飛航模式開與關，強制新 APN 生效。
- **Pixel 上重新啟動後 eSIM 消失** – 見第 17 節。Pixel 使用者回報此情況比 Samsung 使用者頻繁。

### OnePlus eSIM 選單路徑
- **選單路徑：** 設定 > Wi-Fi 與網路 > SIM 與網路 > 新增 eSIM
- **常見問題：** OnePlus 裝置有時在 Oxygen OS 更新後顯示「eSIM 不可用」。修復：前往設定 > 系統 > 系統更新並安裝最新修補程式。
- **APN 設定：** 位於設定 > Wi-Fi 與網路 > SIM 與網路 > [eSIM] > 存取點名稱。

### Xiaomi eSIM 選單路徑
- **選單路徑：** 設定 > SIM 卡與行動網路 > 新增 eSIM
- **APN 設定：** 位於設定 > SIM 卡與行動網路 > [eSIM] > 存取點名稱。

### Oppo 與 Realme eSIM 選單路徑
- **選單路徑：** 設定 > 行動網路 > 新增 eSIM

**不確定您的確切機型到底有沒有 eSIM 硬體**（中國市場 Xiaomi、Huawei、電信業者停用的 Samsung A 系列）？那是相容性問題——請見我們的 [硬體與機型支援指南](/faq/esim-activation-errors-troubleshooting-guide/)，其中包含逐機型支援。

## eSIM 在家可用但在國外不行

**症狀：** 您在家安裝了 eSIM，它顯示訊號格，但當您降落在目的地時，卻沒有服務。目的地特定的怪癖——合作夥伴網路、區域鎖定、抵達清單——收錄於我們的 [旅行 eSIM 指南](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/)。

**根本原因：** eSIM 設定檔在您位於本國網路時啟用，且尚未向目的地網路註冊。

**修復：**
1. 關閉 eSIM 門號（`設定 > 行動數據 > 切換關閉`）。
2. 等待 10 秒，再重新開啟。
3. 前往網路選取，關閉「自動」，手動選取您的業者合作夥伴網路（向業者索取合作夥伴清單）。
4. 若失敗，將數據漫遊切換關閉再開啟。
5. 重新啟動手機。

若仍無效，請聯絡您的業者——您的 eSIM 方案可能實際上不包含您所在的國家，或可能有漫遊協議問題。

## eSIM 在一家電信業者可用但在另一家不行

**症狀：** 您有一個運作正常的 eSIM，但當您嘗試新增第二個來自不同電信業者的 eSIM 時，它失敗或顯示「無服務」。

**根本原因：** 部分手機機型（尤其是較舊的）對於哪些電信業者設定檔能共存有限制。在具有較舊數據機韌體的 Android 裝置上更常見。

**修復：**
1. 檢查您的手機是否支援雙 eSIM（iPhone 13 及更新、Pixel 7 及更新、Samsung S23 及更新）。
2. 若您插入了實體 SIM 卡，請嘗試移除它——部分手機在插入實體 SIM 卡時會限制啟用設定檔的數量。
3. 更新您手機的韌體（電信業者設定更新常能修復此問題）。
4. 聯絡第二家電信業者，詢問其 eSIM 設定檔是否支援雙 SIM 共存。

## 何時聯絡 eSIM 業者 vs. 手機製造商

| 問題 | 聯絡 |
|---------|---------|
| QR Code 過期／無效 | eSIM 業者 |
| 反覆「啟用失敗」 | eSIM 業者 |
| 設定 APN 後無數據 | eSIM 業者 |
| 降落后裝置顯示「無服務」 | eSIM 業者（檢查漫遊協議） |
| eSIM 未出現在設定中 | 手機製造商（若為軟體錯誤）或電信業者鎖定問題 |
| 硬體問題（相機、螢幕、電池） | 手機製造商 |
| 電信業者鎖定／解鎖 | 您的本國電信業者 |
| MDM 限制 | 您的 IT 部門 |
| 重新啟動後 eSIM 消失 | 兩者——先嘗試第 17 節的修復，再聯絡業者 |
| 「eSIM 已在使用中」 | eSIM 業者（以強制釋放設定檔） |
| Apple Watch eSIM 無法連線 | 電信業者（用於佈建）或 Apple 支援（用於配對問題） |

## 常見問題

**Q1：刪除 eSIM 會取消我的方案嗎？**
不會。刪除 eSIM 只會從手機移除設定檔。您必須分別聯絡業者取消方案。

**Q2：我可以復原已刪除的 eSIM 嗎？**
對於月付電信業者 eSIM，可以——業者能重新發出設定檔。對於旅行 eSIM，刪除通常是永久的，需要重新購買。

**Q3：為何我的 eSIM 在 Wi-Fi 上可用但在行動網路上不行？**
這幾乎總是 APN 或數據漫遊問題。請遵循第 8 節與第 14 節。

**Q4：eSIM 會更快耗盡電池嗎？**
不會。同時運行兩個啟用門號可能稍微多用電，但單一 eSIM 不會耗盡電池。

**Q5：我的手機能儲存多少 eSIM？**
通常 iPhone 與多數 Android 裝置為 8–10 個設定檔。您可以儲存更多，但同時只能有兩個啟用（雙 SIM）。

**Q6：為何我的 eSIM 一直掉訊號？**
這可能由網路壅塞、涵蓋微弱或軟體故障引起。請嘗試切換飛航模式、重新啟動，或手動選取網路。

**Q7：重新啟動後我的 eSIM 出現「需要啟用」– 這是什麼意思？**
手機失去了與業者啟用伺服器的連線。重新開機並確保您有網路連線。若持續，請刪除並重新安裝 eSIM。

**Q8：若我的業者說他們不支援 eSIM 怎麼辦？**
您仍可使用像 Roami、Airalo 或 Holafly 這類旅行 eSIM 業者——它們獨立於您的本國業者運作，不需要業者支援。

**Q9：我的 eSIM 轉移到新 iPhone 但無法通話——只有數據可用。**
檢查 eSIM 是否設為預設語音門號。也請確保您的業者支援該門號的 VoLTE。

**Q10：QR Code 掃描成功但下載要很久——這正常嗎？**
不正常。應該只需 1–2 分鐘。若更久，您的 Wi‑Fi 太慢。請切換網路或使用手動輸入。

**Q11：我的 eSIM 已啟用但我無法傳送或接收簡訊。**
部分旅行 eSIM 為純數據，不支援簡訊。若您需要簡訊，請購買明確包含電話號碼的方案。

**Q12：我不小心重置了網路設定——現在我的 eSIM 不見了。**
網路設定重置不會刪除 eSIM 設定檔。您的 eSIM 應該還在。前往設定 > 行動數據並重新啟用該門號。若它不見了，您可能不小心刪除了它——那麼請見第 15 節。

**Q13：刪除 eSIM 與關閉 eSIM 有什麼差別？**
關閉 eSIM 會將設定檔保留在手機上，但停用該門號。您可以隨時重新開啟。刪除 eSIM 會永久移除設定檔——沒有新的 QR Code 您無法復原。僅在方案完全到期時刪除。

**Q14：VPN 會干擾 eSIM 啟用嗎？**
會——VPN 可能干擾與啟用伺服器的連線。在啟用 eSIM 前請關閉您的 VPN。

**Q15：我的 eSIM 方案寫「無限」但用了 5GB 後就沒有數據。**
許多「無限」方案有公平使用政策（FUP），會在特定數據門檻後降速。請檢查您業者的條款——您可能需要購買加值方案以取得更多高速數據。

👉 **疑難排解完成了？** 挑選一個 [美國 eSIM 方案](/united-states-esim/) 或 [歐洲 eSIM 方案](/europe-esim/) 重新連線。

---

## 資料來源

- [GSMA — eSIM (SGP.22) 規格](https://www.gsma.com/esim/)
- [Apple 支援 — 在 iPhone 上設定 eSIM](https://support.apple.com/en-us/HT212780)
- [Google 支援 — 設定 eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google 支援 — Android eSIM](https://support.google.com/android/answer/11241215)
