---
title: "如何在 iPhone 與 Android 之間移轉 eSIM"
h1_title: "如何在 iPhone 與 Android 之間移轉 eSIM"
description: "透過電信業者 App 或重新發行的 QR Code，在 iPhone 與 Android 之間移動你的 eSIM。兩個方向的逐步教學，並附常見移轉錯誤的修復方法。"
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM 跨平台移轉", "eSIM 移轉錯誤", "iOS 18 eSIM", "eSIM 電信業者鎖定", "eSIM 確認碼", "eSIM 無服務", "eSIM APN 設定", "eSIM 疑難排解", "eSIM 啟用失敗", "在 iPhone 與 Android 之間移轉 eSIM", "無法將 eSIM 移轉到新 iPhone", "Orange eSIM 移轉"]
date: 2026-09-22T00:00:00Z
lastmod: 2026-09-22T00:00:00Z
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
  title: "常見問題"
  items:
    - question: "什麼是 eSIM 啟用？它是如何運作的？"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "如何啟用 eSIM？"
      url: "/faq/how-to-activate-an-esim/"
    - question: "如何在 iPhone（全系列機型）上啟用 eSIM？"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "最新 eSIM 相容性清單"
      url: "/compatibility/"
---


> **編者按：** 只有當你的電信業者支援跨平台移轉時，你才能在 iPhone 與 Android 之間移轉 eSIM，而且多數旅行 eSIM 完全無法移動。以下方法遵循電信業者官方文件，並聚焦於現今確實可行的移轉方式。請先查看支援業者的章節，確認你的方案是否符合資格。

先說現實：eSIM 一般無法直接在 iPhone 與 Android 之間移動，因為兩個平台沒有共用的移轉協定。不過變通方法很簡單——請你的電信業者以 QR Code 重新發行設定檔，或在支援的情況下透過電信業者的 App 移轉。兩個方向的流程，加上旅行 eSIM 的例外情況，都在下方說明。

## 什麼是 eSIM 移轉？

**在下方找到你的情境，直接跳到正確的方法。**

| 你的情境 | 可以移轉嗎？ | 最佳方法 | 前往位置 |
| :--- | :--- | :--- | :--- |
| **iPhone → 新 iPhone** | ✅ 可以（永遠可以） | Apple 快速移轉 | [同平台移轉](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → 新 Samsung** | ✅ 可以（通常可以） | Samsung Smart Switch | [同平台移轉](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone（業者支援 App 移轉）** | ✅ 可以 | 電信業者 App | [方法 A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone（業者不支援 App）** | ✅ 可以 | QR Code 備援 | [方法 B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android（業者支援）** | ✅ 可以 | 電信業者 App 或 QR Code | [方法 B](#esim-transfer-from-iphone-to-android) |
| **旅行 eSIM（Roami、Airalo、Holafly）** | ❌ 不行 | 在新裝置上購買新方案 | [為什麼旅行 eSIM 無法移轉](#why-cant-travel-esims-be-transferred) |
| **業者不支援移轉** | ✅ 可以（備援方式） | 聯絡業者取得 QR Code | [備援方法](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **關鍵規則：** 不像 iPhone 對 iPhone 有內建移轉功能，**iOS 對 Android 沒有內建的 eSIM 移轉按鈕**。跨平台移轉永遠要**透過你的電信業者**——透過他們的 App 或申請新的 QR Code。旅行 eSIM **僅限單一裝置**——在你的新手機上購買新的。

**無法移轉？** 多數旅行 eSIM（Roami、Airalo、Holafly）**僅限單一裝置**——你需要在新的手機上購買新方案。至於本地電信業者的 eSIM，QR Code 備援方式永遠可行。

> **關鍵限制：** **沒有內建的 iOS 對 Android eSIM 移轉**——你必須透過電信業者。本指南會帶你走完每個支援的方法。

對 eSIM 設定完全陌生？我們的 [如何啟用 eSIM 指南](/faq/how-to-activate-an-esim/) 從零開始說明安裝。如果移轉在中途失敗，[eSIM 深度疑難排解指南](/faq/esim-deep-troubleshooting-guide-2026/) 把每則錯誤訊息對應到修復方式。


## 你該使用哪種 eSIM 移轉方式？

| 你的情況 | 最佳方法 | 時間 | 需要電信業者嗎？ |
| :--- | :--- | :--- | :--- |
| **在 iPhone ↔ iPhone 之間切換** | Apple 快速移轉（設定 > 行動數據 > 加入 eSIM > 移轉） | 2 分鐘 | 否（Apple 處理） |
| **在 Android ↔ Android 之間切換（Samsung 對 Samsung 等）** | 品牌專屬移轉（Samsung：SIM 卡管理員 > 加入 eSIM > 移轉） | 2 分鐘 | 否（品牌處理） |
| **在 iPhone ↔ Android 之間切換（iOS 18 / Android 16+）** | 電信業者 App 移轉 | 3–5 分鐘 | 是 |
| **在 iPhone ↔ Android 之間切換（較舊系統）** | 電信業者重新發行的 QR Code | 5–10 分鐘 | 是 |
| **旅行 eSIM（Roami、Airalo、Holafly）** | ❌ 無法移轉——在新裝置上購買新方案 | 不適用 | 否——業者不允許 |
| **你的業者不支援移轉** | QR Code 備援（致電業者） | 10–20 分鐘 | 是 |


## 完整 eSIM 移轉指南

以下是把 eSIM 移到新裝置的逐步旅程圖。

| 步驟 | 你在想什麼 | 該怎麼做 | 在哪裡找到 |
| :--- | :--- | :--- | :--- |
| **1. 判斷你的情境** | 「我在做哪種切換？」 | 判別：同一生態系（iOS→iOS / Android→Android）還是跨平台（iOS↔Android）？ | [上方的快速決策流程](#which-esim-transfer-method-should-you-use) |
| **2. 檢查 OS 版本** | 「我的手機更新得夠新嗎？」 | 若要原生跨平台移轉，iPhone 必須是 iOS 18+，Android 必須是 Android 16+。 | 若不足請先更新。 |
| **3. 檢查電信業者鎖定** | 「我的手機被鎖定在某家業者嗎？」 | 設定 > 一般 > 關於 > 電信業者鎖定 必須顯示「無 SIM 限制」。 | [下方的前提條件](#what-you-need-before-you-start-an-esim-transfer) |
| **4. 檢查業者支援** | 「我的業者允許這麼做嗎？」 | 開啟業者 App，尋找 eSIM 移轉選項。或致電詢問。 | [下方支援業者章節](#carriers-that-support-cross-platform-esim-transfer) |
| **5. 執行移轉** | 「該移動門號了。」 | 依你的情境遵循特定步驟。 | [方法 A](#esim-transfer-from-android-to-iphone) 或 [方法 B](#esim-transfer-from-iphone-to-android) |
| **6. 移轉後設定** | 「我的門號已在新手機上——接下來呢？」 | 重新啟用 WhatsApp、iMessage、2FA 應用程式，並測試 SMS。 | [下方 eSIM 移轉之後章節](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. 失敗則疑難排解** | 「沒成功——現在怎麼辦？」 | 檢查錯誤、刪除舊設定檔、重試，或使用 QR Code 備援。 | [下方疑難排解表](#why-did-my-esim-transfer-fail) |


## 開始 eSIM 移轉前你需要準備的事

**兩個方向皆需：**
- 兩台裝置都必須**已解鎖**（沒有**電信業者鎖定**）。iPhone 檢查方式：`設定 > 一般 > 關於` → `電信業者鎖定` 必須顯示「無 SIM 限制」。**這是移轉失敗的第一大原因**——如果你的手機被鎖定，你無法把 eSIM 移轉到不同業者的網路。
- 兩台裝置都已開啟**藍牙**。
- 兩台裝置都已連上 **Wi‑Fi**（或至少一台有可用的行動數據連線）。
- 你要移轉的 eSIM 在來源裝置上處於**生效**狀態（尚未被刪除）。
- 你的電信業者**支援跨平台移轉**（見下方清單）。若否，請跳到備援方法章節。

對設定檔與 SM‑DP+ 伺服器還很陌生？[eSIM 啟用解說](/faq/what-is-esim-activation-and-how-does-it-work/) 說明了設定檔在裝置之間移動時實際發生的事。
- 你的 **eSIM 設定檔**尚未**過期**——有些設定檔的有效日期有限。

**Android → iPhone：**
- iPhone 必須是 **iOS 18 或更新**。
- Android 必須是 **Android 16 或更新**。

**iPhone → Android：**
- iPhone 必須是 **iOS 18 或更新**。
- Android 必須是 **Android 16 或更新**。

> 🚨 **重要警告——移轉前不要刪除：**
> **在開始移轉之前，絕對不要從舊裝置刪除 eSIM。** 如果你先刪除來源 eSIM，設定檔就會從你的裝置上消失，你的電信業者可能無法將它移轉到新裝置。你必須聯絡電信業者取得全新的 QR Code——這可能需要 24‑48 小時。永遠先從新裝置啟動移轉，或在新的 eSIM 確認可用之前保持舊的 eSIM 生效。

> 🚨 如果你的裝置系統較舊，選單選項根本不會出現。請先更新。如果你遇到**已過期的 eSIM 設定檔**，請在開始移轉前聯絡電信業者取得新的 QR Code。

[Google Support – Pixel 上的 eSIM](https://support.google.com/pixelphone/answer/7086887) 頁面為準備移轉 eSIM 的 Android 使用者提供更多細節。


## 為什麼旅行 eSIM 無法移轉？

這是我們被問到的第一名問題。原因如下：

| 原因 | 說明 |
| :--- | :--- |
| **EID 綁定** | 每份 eSIM 設定檔都以密碼學方式綁定到它啟用時所在裝置的 **EID**（eUICC 識別碼）。你手機的 EID 是唯一的——就像你 eSIM 硬體的序號。（在多數手機上撥打 `*#06#` 即可看到你的 EID。） |
| **一次性 QR Code** | 旅行 eSIM 的 QR Code 專為**單次使用**而設計。掃描後，該 QR Code 即在業者的伺服器上作廢。這是防止詐騙的安全機制。 |
| **沒有電信業者帳戶** | 旅行 eSIM 是作為獨立產品購買的——你沒有持續服務的「電信業者帳戶」。沒有帳戶可以登入並申請移轉。 |
| **為便利性而設計** | 旅行 eSIM 以可移轉性換取便利性。你獲得免驗證身分的即時啟用，但代價是設定檔被鎖定在單一裝置上。 |

**結論：** 如果你在使用旅行 eSIM（Roami、Airalo、Holafly、Nomad 等），**不要浪費時間嘗試移轉**。它不會成功。直接在你的新裝置上購買新方案。一組新旅行 eSIM 的成本，通常低於你嘗試移轉一份無法移轉的設定檔所花的時間。

**那電信業者 eSIM（後付/預付）呢？**
電信業者 eSIM 不同。你擁有該業者的帳戶，他們可以將你的 eSIM 重新發行到新裝置，因為設定檔由他們的伺服器掌控。這就是為什麼電信業者 eSIM 可以移轉，而旅行 eSIM 不行。


## 哪種 eSIM 移轉方式適合你？

| 功能 | 電信業者 App 移轉 | 電信業者 QR Code | 原生移轉（iOS→iOS / Android→Android） |
|---------|---------------------|----------------|---------------------------------------------|
| **支援跨平台嗎？** | ✅ 是 | ✅ 是 | ❌ 否（僅限同一生態系） |
| **所需時間** | 3–5 分鐘 | 5–10 分鐘 | 1–2 分鐘 |
| **業者介入程度** | 透過 App 自助 | 必須聯絡業者 | 無 |
| **旅行中可用嗎？** | ✅ 是（需 Wi-Fi） | ✅ 是（需 Wi-Fi） | ✅ 是 |
| **成功率** | 高（若有支援） | 非常高（永遠可行） | 非常高 |
| **最適合** | 快速移轉、支援 App 的業者 | 任何業者、App 失靈時的備援 | 同生態系的裝置升級 |
| **費用** | 通常免費 | 重新發行 QR Code 可能收費 $0‑25 | 免費 |


## 從 Android 移轉 eSIM 到 iPhone

這是最常見的情境——從 Samsung、Pixel 或其他 Android 換到新 iPhone。最可靠的移號方式是透過你電信業者的 App。

### 逐步教學

**開始之前：**
- 在新 iPhone 上安裝你業者的 App（或準備好在業者網站上登入）。
- 知道你的帳戶 PIN 或登入憑證。
- **先不要從你的 Android 刪除 eSIM。**

**在你的 iPhone（目標裝置）上：**
1. 安裝並開啟你業者的 App（例如 T‑Mobile、Verizon 或 AT&T 的 App）。
2. 登入並尋找「啟用 eSIM」、「更換裝置」或「移轉到新裝置」之類的選項。
3. 依照提示輸入新 iPhone 的 **EID** 與 **IMEI**（顯示於 `設定` → `一般` → `關於`）。
4. 業者會將你的 eSIM 設定檔推送到新 iPhone，或產生一組 QR Code 供你掃描。
5. 在 iPhone 上，前往 `設定` → `行動數據` → `加入 eSIM`，若產生了 QR Code 則掃描它。
6. 等待「啟用完成」。你的門號現在已在 iPhone 上生效。
7. **現在**你可以從 Android 刪除 eSIM（設定 > 連接 > SIM 卡管理員 > 點擊該 eSIM > 移除）。

**iOS 18 小提示：** 如果你使用 iOS 18，「加入 eSIM」流程已重新設計，QR 掃描器更醒目，錯誤處理也更好。設定檔下載期間你會看到進度指示器。

✅ **完成。** 你的門號現在已在 iPhone 上生效。如果你的業者沒有提供 App，請聯絡他們將你的 eSIM 重新發行為新的 QR Code（見下方備援方法）。

### 如果 App 移轉不可用怎麼辦？

使用**電信業者 QR Code 備援**：

- 聯絡你的電信業者（線上客服、電話或網站）。
- 告訴他們你正在更換裝置，請他們**將你的 eSIM 重新發行為新的 QR Code**。
- 在 iPhone 上掃描新的 QR Code：`設定` → `行動數據` → `加入 eSIM`。
- 完成啟用。

如果在此過程中看到 **「無法啟用 eSIM」** 錯誤，請檢查你的 Wi‑Fi 連線並重試。


## 從 iPhone 移轉 eSIM 到 Android

iPhone 上沒有內建的「移轉到 Android」選項。可靠的方法是請你的電信業者重新發行你的 eSIM。

### 前提條件
- 你的新 Android 手機已**解鎖**。
- 你能聯絡你的電信業者（或登入其 App/網站）。
- 你的 Android 為 **Android 16 或更新**。
- **先不要從你的 iPhone 刪除 eSIM。**

### 步驟

**聯絡你的電信業者（或使用其 App）：**
1. 告訴他們你正在把 eSIM 從 iPhone 移到 Android 手機。
2. 提供新 Android 裝置的 **EID** 與 **IMEI**（位於 `設定` → `關於手機`）。
3. 你的電信業者會將你的 eSIM 重新發行為新的 QR Code（或透過其 App 推送）。

**在你的 Android（目標裝置）上：**
1. 前往 `設定` → `網路與網際網路` → `SIM` → `加入 eSIM`（名稱依品牌而異）。
2. 掃描業者提供的 QR Code。
3. 依照提示下載並啟用設定檔。
4. 等待啟用完成。
5. **現在**你可以從 iPhone 刪除 eSIM（設定 > 行動數據 > 點擊該 eSIM > 移除行動數據方案）。

✅ 完成。你的門號現在就在 Android 手機上。

> ⚠️ **重要**：移轉完成後，eSIM 會從 iPhone 上**永久移除**。沒有電信業者的協助你無法回復。移轉前請確認你還有另一條生效線路或 Wi‑Fi 可用。


## 將 eSIM 移轉到新 iPhone 或 Samsung

雖然本指南聚焦於跨平台移轉，但許多使用者只是想在同一生態系內移動 eSIM。以下是做法。（要移轉到僅 eSIM 的美版 iPhone 16？[iPhone 16 啟用指南](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) 說明了設定過程中移轉的細節。）

### 從 iPhone 移轉 eSIM 到 iPhone

Apple 內建的**快速移轉**是最簡單的方法：

1. 在設定新 iPhone 的過程中，出現提示時選擇「從附近的 iPhone 移轉 eSIM」。
2. 保持兩支手機靠近，並開啟藍牙與 Wi‑Fi。
3. 在舊 iPhone 上確認移轉。
4. 等待 **eSIM 設定檔下載**在新裝置上完成，約需 1‑2 分鐘。

**如果快速移轉無法運作：** 在新 iPhone 上前往設定 > 行動數據 > 加入 eSIM > 從附近的 iPhone 移轉。

**如果仍然失敗：** 使用電信業者 QR Code 方法——聯絡你的業者取得新的 QR Code。

### 從 Android 移轉 eSIM 到 Android

Android 的移轉方法因品牌而異：

**Samsung：** 設定 > 連接 > SIM 卡管理員 > 加入 eSIM > 從舊裝置移轉 eSIM（依螢幕提示操作）。適用於 Samsung Galaxy S21 與更新機型、Z Flip/Z Fold 系列。

**Google Pixel：** 在設定過程中，系統可能會提示你移轉 eSIM。或者，使用電信業者的 App 或申請新的 QR Code。

**一般 Android：** 如果你的品牌沒有內建移轉，請使用電信業者 QR Code 備援方法。

### 跨平台與同平台 eSIM 移轉比較

| 功能 | 跨平台 | 同平台 |
|---------|----------------|----------------|
| **iOS ↔ iOS** | 不適用 | ✅ 快速移轉可用 |
| **Android ↔ Android** | 不適用 | ✅ 品牌專屬方法 |
| **iOS ↔ Android** | ✅ 本指南涵蓋 | ❌ 不直接支援 |
| **對業者的依賴** | 較高 | 較低（Apple/Google 處理） |
| **所需時間** | 3–10 分鐘 | 1–2 分鐘 |
| **成功率** | 依業者而異 | 通常很高 |

關於 eSIM 行為在不同 iPhone 世代之間的差異（儲存空間限制、雙 SIM 規則、地區變體），請見我們的 [iPhone eSIM 相容性中心](/faq/iphone-11-esim-compatible/)。


## 支援跨平台 eSIM 移轉的電信業者

跨平台 eSIM 移轉仍屬新興功能，業者的支援正在逐步推出。沒有列出所有支援業者的完整公開清單，可用性也經常變動，因此請查看你業者網站或 App 的最新狀態。

### 已確認支援的電信業者

| 電信業者 | 地區 | 移轉方法 | 移轉次數限制 | 費用 |
|---------|--------|-----------------|----------------|------|
| **Orange** | 法國、歐洲 | Orange App → 「我的 eSIM 空間」→「移轉到新裝置」 | 每年 3 次 | 免費 |
| **SFR** | 法國 | SFR & Moi App → 「管理我的 SIM」→「移轉 eSIM」 | 每年 5 次 | 免費 |
| **T-Mobile** | 美國 | T-Mobile App → 「管理 eSIM」→「移轉到新裝置」 | 無限制 | 免費 |
| **Verizon** | 美國 | My Verizon App → 「啟用或更換裝置」 | 無限制 | 免費 |
| **AT&T** | 美國 | AT&T App → 「啟用 eSIM」 | 依方案而異 | 免費（後付） |
| **EE** | 英國 | EE App → 「方案」→「eSIM 移轉」 | 每年 3 次 | 免費 |
| **Deutsche Telekom** | 德國 | Telekom App → 「eSIM 移轉」 | 無限制 | 免費 |
| **Swisscom** | 瑞士 | Swisscom App → 「eSIM 移轉」 | 每年 3 次 | 免費 |
| **Bouygues** | 法國 | 重新發行 QR Code（透過客戶入口網站） | 每年 3 次 | 免費 |
| **Free** | 法國 | 重新發行 QR Code（透過客戶入口網站） | 每年 2 次 | 免費 |
| **Vodafone** | 英國、歐洲 | Vodafone App → 「eSIM 移轉」 | 依國家而異 | 免費（後付） |
| **Google Fi** | 美國、全球 | Google Fi App → 「在此裝置上啟用」 | 無限制 | 免費 |

### 旅行 eSIM 無法移轉

| 業者 | 可以移轉嗎？ | 替代做法 |
|----------|---------------|-------------------|
| **Roami** | ❌ 不行 | 在你的新裝置上購買新方案 |
| **Airalo** | ❌ 不行 | 在你的新裝置上購買新方案 |
| **Holafly** | ❌ 不行 | 在你的新裝置上購買新方案 |
| **Nomad** | ❌ 不行 | 在你的新裝置上購買新方案 |

**如何確認你的業者是否支援？** 嘗試方法 A 或 B 的步驟。如果你的業者不提供 App 移轉或新的 QR Code，請使用下方的備援方法。


## 跨平台 eSIM 移轉不支援時的備援方法

如果你的業者不在清單上，或你看到 **eSIM 移轉錯誤**，請使用以下替代方案之一：

### 電信業者發行的 QR Code
1. 致電或在線上客服聯絡你的電信業者。
2. 告訴他們：「我要從 Android 換到 iPhone（或反過來）。請將我的 eSIM 重新發行為新的 QR Code。」
3. 他們會寄給你一組 QR Code 或啟用連結。
4. 在新裝置上，前往 `設定` → `行動數據` → `加入 eSIM` → `使用 QR Code` 並掃描。
5. 舊裝置的 eSIM 會在新 eSIM 啟用後停止運作。

**提示：** 有些業者重新發行 eSIM 會收取小額費用（$0‑25）。在他們處理前先詢問。

### 手動輸入 SM-DP+
如果你的業者給你**啟用碼**與 **SM‑DP+ 位址**（將 eSIM 設定檔交付到你手機的伺服器位址），你可以在新裝置上手動加入 eSIM：
1. `設定` → `行動數據` → `加入 eSIM` → `手動輸入詳細資訊`。
2. 貼上 SM‑DP+ 位址與啟用碼。
3. 點擊 `下一步`。這在 iPhone 與 Android 上都可行。

### 購買新方案
如果你使用的是旅行 eSIM（Roami、Airalo、Holafly），不要浪費時間嘗試移轉——它不會成功。直接在你的新裝置上購買新方案——我們的 [旅行 eSIM 方案比較](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) 排名了值得重新安裝的業者。

> **過渡提示：** 對任何業者而言，QR Code 備援都是最可靠的方法，無論他們是否支援 App 移轉。可能需要打一通電話，但它永遠可行。


## eSIM 移轉還是重新啟用？

有時購買新的 eSIM 比移轉更快。以下是何時該選擇哪個：

| 考量因素 | 移轉 | 重新啟用 | 哪個更好？ |
|--------|----------|----------------|------------------|
| **你要保留同一個門號** | ✅ 保留門號 | ❌ 取得新門號 | 移轉勝出 |
| **你的門號綁定了 2FA** | ✅ 保留存取權 | ❌ 有失去存取權的風險 | 移轉勝出 |
| **你的業者對移轉收費** | 可能花費 $0‑25 | $0（你本來就在買新的） | 取決於費用 |
| **旅行 eSIM** | ❌ 不可能 | ✅ 簡單 | 重新啟用勝出 |
| **你在趕時間（5 分鐘內）** | ⚠️ 可能需要 5‑10 分鐘 | ✅ 2 分鐘掃描 QR Code | 重新啟用勝出 |
| **你想保留現有方案/數據** | ✅ 保留未用完的數據 | ❌ 失去未用完的數據 | 移轉勝出 |

**建議：** 如果你要保留同一個業者方案並想保留門號，就移轉。如果你在使用旅行 eSIM 或在趕時間，直接在新裝置上購買新方案。


## 為什麼我的 eSIM 移轉失敗？

| 錯誤 / 症狀 | 最可能的原因 | 修復方式 |
|----------------|-------------------|-----|
| 「無法移轉——業者不支援」 | 你的業者不支援跨平台移轉。 | 使用上方的備援方法。 |
| QR Code 掃描後顯示「工作階段已過期」 | 你在產生 QR Code 後花了太久時間（它過期了）。 | 重做流程並立即掃描。 |
| Android 顯示「配對失敗」 | 藍牙或區域網路權限被封鎖。 | iPhone：`設定 > 隱私權與安全性 > 區域網路`——確保 `設定` 已開啟。Android：關閉「Wi‑Fi 安全掃描」（通常在 Wi-Fi 進階設定中）。 |
| 移轉開始卻停在 50% | Wi‑Fi 或行動訊號微弱。 | 讓兩支手機靠近路由器。在兩台裝置上關閉 VPN。 |
| **「eSIM 已綁定到另一台裝置」** | 設定檔未從舊裝置正確釋放。 | 在舊裝置上前往 `設定 > 行動數據` 並手動 `刪除 eSIM`（若仍可見）。然後等待 5 分鐘再試一次。若仍失敗，聯絡業者釋放設定檔。 |
| 掃描後 iPhone 要求輸入**確認碼** | 該 eSIM 設定檔有強制的 **eSIM 確認碼**（罕見）。 | 在業者的 email 中尋找該碼（通常為 4–8 位數）。若找不到，詢問業者。 |
| 連按兩下側邊按鈕沒有反應（iPhone → Android） | 生物辨識驗證未設定或已停用。 | 設定 Face ID / Touch ID，或暫時停用 Face ID 的「需要注視螢幕」。 |
| 移轉後 **eSIM 無服務** | APN 設定未配置。 | 手動配置 APN（見下方表格）。 |
| **eSIM 設定檔已過期** | 設定檔的有效日期有限。 | 聯絡你的業者取得新的 QR Code。 |
| **iPhone 上沒有「加入 eSIM」選項** | iPhone 被電信業者鎖定或系統較舊。 | 在設定 > 一般 > 關於檢查電信業者鎖定。更新至 iOS 18。 |
| **新裝置顯示「SIM 不受支援」** | 新裝置被鎖定於另一家電信業者。 | 檢查電信業者鎖定——必須顯示「無 SIM 限制」。 |
| **超過移轉次數限制** | 你移轉這組 eSIM 的次數太多（有些業者每年限 3‑5 次）。 | 聯絡業者支援重設限制或取得新的 eSIM。 |
| **Samsung 上顯示「eSIM 移轉失敗」** | Samsung Smart Switch 可能不支援該特定業者設定檔。 | 改用電信業者 QR Code 備援。 |

### 手動配置 APN

如果 **eSIM 移轉**之後出現 **eSIM 無服務**，請手動配置 APN：

| 電信業者 | APN | 使用者名稱 | 密碼 |
|---------|-----|----------|----------|
| **Orange** | orange.fr | （空白） | （空白） |
| **SFR** | sl2sfr | （空白） | （空白） |
| **Free** | free | （空白） | （空白） |
| **Bouygues** | ebouygtel.com | （空白） | （空白） |
| **T-Mobile（美國）** | fast.t-mobile.com | （空白） | （空白） |
| **AT&T（美國）** | nxgen | （空白） | （空白） |
| **Verizon（美國）** | vzwinternet | （空白） | （空白） |
| **Telekom（德國）** | internet.telekom | （空白） | （空白） |

### 還是卡住了？
聯絡支援之前先備齊這些資訊：
- 來源裝置的 IMEI 與 EID
- 目標裝置的 IMEI 與 EID
- 確切的錯誤訊息（截圖）
- 你的帳戶號碼或門號


## 移轉後舊的 eSIM 會怎樣？

**它會立即被停用。**

舊的 eSIM 設定檔可能會短暫留在舊裝置上。你可以手動刪除它：
`設定 > 行動數據 > 點擊舊的 eSIM > 刪除 eSIM`。

> 💰 **計費**：你的電信業者會繼續為該方案向你收費。移轉不會取消方案——它只是移動 SIM。要取消，你必須另外聯絡電信業者。

如果你擔心 **eSIM 綁定到另一台裝置** 的錯誤，請在移轉成功完成後，一律從來源裝置刪除舊設定檔。

### 移轉與刪除的時間軸

| 動作 | 會發生什麼事 | 何時執行 |
| :--- | :--- | :--- |
| **啟動移轉** | 業者將設定檔傳送到新裝置 | 在刪除舊 eSIM 之前 |
| **新 eSIM 啟用** | 新裝置連上網路 | 啟用完成之後 |
| **舊 eSIM 停用** | 業者停用舊設定檔 | 自動——可能需要 1‑5 分鐘 |
| **刪除舊 eSIM** | 從舊裝置移除已停用的設定檔 | 確認新裝置可用之後 |


## eSIM 移轉後，處理 WhatsApp、iMessage 與 2FA

成功移轉 eSIM 後，你需要在新的裝置上設定你的通訊應用程式與驗證服務。

### WhatsApp

WhatsApp 使用你的門號來識別你的帳戶。**eSIM 移轉**之後：

1. 在新裝置上開啟 WhatsApp。
2. 輸入你的門號（你移轉過去的那個）。
3. 你會透過 SMS 或自動語音電話收到傳送到你門號的驗證碼。
4. 輸入驗證碼——如果你先前有備份，聊天紀錄會重新出現。

**提示：** 在開始移轉前先備份你的聊天紀錄。iPhone 上：WhatsApp > 設定 > 聊天 > 聊天備份。Android 上：WhatsApp > 設定 > 聊天 > 備份。

**常見的 WhatsApp 問題：** 如果你沒有收到 SMS 驗證碼，試試「致電給我」選項——WhatsApp 會撥打你的門號並唸出驗證碼。如果仍然失敗，等 5 分鐘再試一次（業者的網路可能還在收斂）。

### iMessage 與 FaceTime

1. 前往 `設定` → `訊息`，並開啟 `iMessage`。
2. 前往 `設定` → `FaceTime`，並開啟 `FaceTime`。
3. 等待 1‑2 分鐘讓它啟用。如果顯示「正在等待啟用」，將它關閉再開啟。
4. 確認已選取你的門號：設定 > 訊息 > 傳送與接收 → 選擇你的 eSIM 門號。

### 雙因素驗證與 SMS 驗證

由於你的門號沒有改變，以 SMS 為基礎的 2FA 驗證碼會正常運作。不過，以應用程式為基礎的驗證器（Google Authenticator、Microsoft Authenticator、Authy）可能需要重新設定：

- **Authy：** 你的權杖已加密並備份到雲端——只要在新裝置上登入即可。
- **Google Authenticator：** 你需要逐一移轉帳戶，或使用「移轉帳戶」功能。
- **Microsoft Authenticator：** 使用備份功能在新裝置上還原。
- **SMS 2FA：** 向你的銀行或 email 供應商申請一組驗證碼，確認 SMS 能正常送達。

### 銀行 App 與金融服務

多數銀行會偵測到裝置變更，並要求重新驗證。準備好你的登入憑證與任何實體權杖裝置。

關於 **eSIM 移轉**後應用程式遷移的更多協助，請見我們的 [eSIM 設定指南](/faq/how-to-activate-an-esim/)。


## 避免 eSIM 移轉麻煩的最佳實務

✅ **移轉之前：**
- 檢查業者支援（試試選單——若有該選項，就是支援）。
- 將兩支手機都更新到最新的 OS（iOS 18 / Android 16）。
- 將兩支手機都充電到 30% 以上。
- 暫時停用 VPN 與廣告封鎖器。
- 確認你的 **eSIM 設定檔**尚未**過期**。
- 備份 WhatsApp 與其他通訊應用程式。
- **先不要從舊裝置刪除 eSIM。**

✅ **移轉期間：**
- 讓手機保持在彼此 10 公分（4 英吋）內。
- 不要切換應用程式或鎖定螢幕。
- 不要關閉藍牙或 Wi‑Fi。
- 等待確認訊息——不要自行假設已完成。

✅ **移轉之後：**
- 在新裝置上測試通話與數據。
- 從來源裝置刪除舊 eSIM，以免混淆。
- 舊裝置的 Wi‑Fi 至少保持開啟一小時——有些業者需要最後一次交握。
- 重新啟用 WhatsApp、iMessage 與 2FA 應用程式。
- 測試來自銀行的 SMS 驗證碼。
- 若你要徹底更換電信業者，設定提醒以取消舊方案。


## 旅行時的 eSIM 移轉

如果你在國外旅行並需要移轉 eSIM，以下是幾個重點。如果移轉在旅程中途救不回來，最快的出路通常是購買本地方案——依你的目的地，請見 [美國 eSIM 方案指南](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) 或 [英國 eSIM 購買指南](/faq/how-to-buy-a-uk-esim/)：

### 旅行途中移轉 eSIM
- 只要你的業者支援，跨平台移轉在**全球**都可行。
- 開始前，確認你有穩定的 Wi‑Fi 連線（飯店、咖啡廳）。
- 如果移轉失敗，電信業者的 QR Code 備援是你的最佳選項。
- 移轉後檢查 **eSIM APN 設定**——有些業者需要手動配置。

### 法國電信業者與旅行
- **Orange** 與 **SFR** 允許你在任何地方進行跨平台移轉。
- **Free** 與 **Bouygues** 需要重新發行 QR Code——出發前先完成。
- 至於**旅行 eSIM**，請記得它們通常**無法移轉**——在你的新裝置上購買新方案。

### 在國外聯絡電信業者的方式

| 電信業者 | 支援聯絡方式 | 備註 |
|---------|------------------------|-------|
| **Orange** | Orange App 線上客服、WhatsApp 支援，或電話 | 多數地區 24/7 |
| **SFR** | SFR & Moi App 線上客服、電話 | 服務時間有限 |
| **T-Mobile** | T‑Mobile App 線上客服、iMessage、電話 | 美國 24/7 支援 |
| **Verizon** | My Verizon App 線上客服、電話 | 24/7 支援 |
| **AT&T** | AT&T App 線上客服、電話 | 國際服務時間有限 |
| **EE** | EE App 線上客服、電話 | 英國 24/7 支援 |

**提示：** 出發前下載你業者的 App 並保存支援聯絡資訊。有些業者登入時需要 SMS 驗證——如果你正在移轉途中，這可能無法運作。

### 如果移轉在旅程中途失敗該怎麼辦

1. 連上最近的免費 Wi‑Fi（機場、飯店、咖啡廳）。
2. 透過 email 或通訊應用程式聯絡你業者的支援。
3. 請他們將你的 eSIM 重新發行為 QR Code。
4. 在你的新裝置上掃描該 QR Code。

### 給環球旅行者的提示
- 隨時保存 eSIM QR Code 的備份副本。
- 如果你在旅程中途更換手機，盡可能優先使用原生移轉而非 QR Code。
- 若有多個目的地，考慮涵蓋多國的全球 eSIM 方案。
- 出發前保存你業者的支援聯絡資訊。

關於旅行時使用 eSIM 的更多資訊，請見我們的 [Travel eSIM 2026 指南](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/)。


## 常見問題

**Q1：我可以移轉僅數據的 eSIM（例如旅行 eSIM）嗎？**
不行。多數旅行 eSIM（Roami、Airalo、Holafly、Nomad 等）不支援跨平台移轉。它們的設計是每台裝置安裝一次。你需要在新的手機上購買新方案。技術解釋請見上方的「為什麼旅行 eSIM 無法移轉？」。

**Q2：移轉可以在 iPhone 11 與 Samsung S24 之間進行嗎？**
可以——只要兩者都符合 OS 要求。iPhone 11 支援 iOS 18（它最高可執行 iOS 18）。Samsung S24 支援 Android 16。硬體世代不重要；只有 OS 版本重要。

**Q3：我業者的 App 沒有提供 eSIM 移轉。這是怎麼回事？**
並非每家業者都支援以 App 為基礎的 eSIM 移轉。如果你的業者不提供，請使用電信業者 QR Code 備援：聯絡你的業者，請他們將你的 eSIM 重新發行為新的 QR Code。有些業者會為此收取小額費用（$0‑25）。

**Q4：移轉後我的 WhatsApp / iMessage / 2FA 驗證碼還能運作嗎？**
WhatsApp 使用你的門號——它會偵測到 SIM 變更，並可能要求重新驗證（通常會自動完成）。iPhone 上的 iMessage 使用 eSIM 門號，應該會在一分鐘內重新啟用。至於 2FA，傳送 SMS 到你門號的服務會正常運作——門號沒有變。詳細遷移步驟請見第 10 節。

**Q5：我可以把同一組 eSIM 來回移轉多次嗎？**
可以，但每次移轉都需要相同的流程。有些業者會限制 eSIM 每年可移轉的次數（例如 3‑5 次）。如果達到上限，請聯絡你的業者尋求協助。

**Q6：eSIM + 實體 SIM 的雙 SIM 設定呢？**
移轉只會移動 eSIM。實體 SIM 會留在來源裝置中。如果你想兩者都移動，你需要移轉 eSIM（使用本指南），並將 nano‑SIM 卡實體移到新裝置。關於移轉後最佳化雙 SIM 體驗，請看我們的 **[雙 eSIM 無法運作？12 個 iPhone 修復方法](/faq/dual-esim-not-working-12-fixes-for-iphone/)**。

**Q7：如果移轉時出現「eSIM 設定檔已過期」錯誤怎麼辦？**
聯絡你的業者取得新的 QR Code——重新發行通常是免費的。請務必立即（30 分鐘內）啟用新的 QR Code，避免它再次過期。

**Q8：為什麼電信業者鎖定會讓我無法移轉？**
如果你的手機處於**電信業者鎖定**狀態，你只能將 eSIM 移轉到同一家業者的裝置。移轉前請聯絡你的業者解鎖裝置。iPhone 上：設定 > 一般 > 關於 > 電信業者鎖定 必須顯示「無 SIM 限制」。

**Q9：我可以把 Orange eSIM 移轉到非 Orange 的裝置嗎？**
可以，只要你的裝置已解鎖且你的 Orange 方案允許。**Orange eSIM 移轉**可透過 Orange App 或原生移轉進行。Orange 每年最多允許 3 次移轉。

**Q10：移轉可以搭配 Free eSIM 嗎？**
不行——Free 不支援跨平台移轉。請使用 Free 客戶入口網站的 QR Code 備援方法。Free 每年最多允許 2 次移轉。

**Q11：什麼是 eSIM 確認碼？我在哪裡可以找到它？**
有些 eSIM 設定檔有強制的 **eSIM 確認碼**——通常為 4‑8 位數。請在業者的 email 或啟用說明中尋找。若找不到，請詢問你的業者。

**Q12：「eSIM 無法移轉到新手機」是什麼意思？**
這通常表示你的業者不支援移轉、QR Code 已過期、舊的 eSIM 仍處於生效狀態，或新裝置被電信業者鎖定。先刪除舊的 eSIM（若仍可見），然後重試。完整的疑難排解表請見第 7 節。

**Q13：移轉後「eSIM 啟用失敗」如何修復？**
檢查你的 Wi‑Fi 連線、重新啟動兩台裝置，再試一次。如果仍然失敗，使用手動輸入方式，輸入業者 email 中的 SM‑DP+ 位址。

**Q14：移轉我的 eSIM 會取消我的方案嗎？**
不會——移轉 eSIM 只是把 SIM 設定檔移到新裝置。你的方案（與計費）會照舊繼續。要取消方案，你必須另外聯絡電信業者。

**Q15：如果我已經從舊手機刪除了 eSIM，還能移轉嗎？**
可以，但會更複雜。如果你在開始移轉前就刪除了 eSIM，請聯絡你的業者，請他們將你的 eSIM 重新發行為新的 QR Code。他們辦得到，因為你的設定檔仍存在於他們的伺服器上。

**Q16：重新發行 eSIM QR Code 要多少錢？**
多數業者免費重新發行 eSIM（尤其是後付方案）。有些預付業者或 MVNO 可能收取小額費用（$5‑25）。申請重新發行前先詢問。

**Q17：我可以把 Vodafone eSIM 移轉到非 Vodafone 的裝置嗎？**
可以，只要你的裝置已解鎖且你的 Vodafone 方案允許 eSIM 移轉。Vodafone 在多數國家支援透過其 App 移轉。請在 Vodafone App 中查看「eSIM 移轉」選項。

**Q18：如果達到業者的移轉次數上限怎麼辦？**
有些業者每年限制 3‑5 次移轉。如果達到上限，請聯絡業者支援——他們通常可以重設限制，或手動發行新的 eSIM QR Code（繞過移轉系統）。

**Q19：我可以同時移轉兩組 eSIM（雙 eSIM）嗎？**
可以，但你必須**逐一**移轉。每份 eSIM 設定檔都是獨立的，必須使用相同的流程分開移轉。如果你的舊裝置上有兩組生效的 eSIM，先移轉主要的 eSIM，再移轉次要的。

**Q20：eSIM 移轉與 eSIM 重新發行有什麼差別？**
移轉是把現有設定檔移到新裝置（保留門號與方案）。重新發行則是為同一門號建立全新的 eSIM 設定檔——舊設定檔會被永久停用。當業者不支援移轉時，重新發行就是備援方法。

---

## 最後總結

在不需要電信業者介入的情況下，於 iPhone 與 Android 之間移轉 eSIM 的能力是 **2026 年的重大變革**。它消除了更換生態系的最後一個主要摩擦點。只要你的業者在支援清單上，且兩支手機都已更新，你就能在一分鐘內移動你的門號。

**請記住**：
- 如果你的業者不受支援，QR Code 備援仍然可行——只是需要打一通電話。
- 對旅行 eSIM，把它們視為一次性產品；在每台裝置上重新購買。
- **在開始移轉之前絕不刪除舊的 eSIM**——這是最常見的錯誤。
- 開始前檢查電信業者鎖定——必須顯示「無 SIM 限制」。
- 有些業者限制每年的移轉次數——開始前先確認。

如果你持續遇到 **eSIM 移轉錯誤**訊息，我們的 **[eSIM 深度疑難排解指南（16 個真實案例）](/faq/esim-deep-troubleshooting-guide-2026/)** 涵蓋進階解法。

👉 **要移轉到旅行方案嗎？** 移轉完成後，請見 [美國 eSIM](/united-states-esim/) 或 [歐洲 eSIM](/europe-esim/)。

👉 **不確定你的新手機支援 eSIM 嗎？** 開始前請查看我們的 **[完整相容性清單](/compatibility/)**。

👉 **要在新裝置上測試旅行 eSIM 嗎？** 領取 **[免費 Roami eSIM 試用](/free-esim/)** 確認一切正常。

---

*資訊依據 Apple 與 Android 官方文件、GSMA 標準與電信業者指引，截至 2026 年 9 月。功能與業者支援可能變動。*
## 資料來源

- [GSMA — eSIM（SGP.22）規範](https://www.gsma.com/esim/)
- [Apple Support — 在 iPhone 上設定 eSIM](https://support.apple.com/en-us/HT212780)
- [Google Support — 設定 eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
