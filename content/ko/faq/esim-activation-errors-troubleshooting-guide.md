---
title: "eSIM이 작동하지 않나요? 2026년 호환성 오류 수정 방법"
h1_title: "eSIM이 작동하지 않을 때 해결 방법: 2026년 호환성 오류"
description: "eSIM 오류로 막혔나요? iPhone 및 Android에서 활성화 실패, 전송 문제, 부트 루프를 해결하는 방법을 알아보세요. 2분 만에 휴대폰을 진단하세요."
keywords: ["esim not working", "esim not supported", "esim not compatible iphone", "unable to activate esim", "esim network not available", "esim not transferring to new iphone", "accidentally deleted esim", "esim profile expired", "esim qr code invalid", "how to fix esim on iphone", "esim transfer error", "esim no service"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-20T00:00:00Z
tags: ["eSIM", "문제 해결", "활성화 오류", "iPhone", "Android"]
toc: true

# 사이트 및 SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

ui_text:
  updated_on: "업데이트 날짜"
  min_read: "분 읽기"
  toc: "목차"

breadcrumbs:
  home:
    text: "홈"
    url: "/"
  parent:
    text: "도움말 센터"
    url: "/faq/"

# 사이드바: 인기 eSIM
sidebar_popular:
  title: "인기 eSIM"
  item_suffix: "eSIM"
  items:
    - name: "미국 eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "독일 eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "유럽 eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "터키 eSIM"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "일본 eSIM"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "중국 eSIM"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

sidebar_free:
  title: "무료 eSIM 신청"
  icon: "🎁"
  item_suffix: "무료 eSIM"
  item_subtitle: "무료 eSIM"
  items:
    - name: "영국 eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "독일"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "태국"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "홍콩"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

sidebar_questions:
  title: "자주 묻는 질문"
  items:
    - question: "eSIM 활성화란 무엇이며 어떻게 작동하나요?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "eSIM을 활성화하는 방법은?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "iPhone에서 eSIM을 활성화하는 방법은? (모든 모델)"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "최신 eSIM 호환성 목록"
      url: "/compatibility/"
---


> **편집자 주:** Roami는 전 세계 50만 명 이상의 여행객이 eSIM을 활성화하도록 도운 미국 기반 eSIM 제공업체입니다. 이 가이드는 당사 지원팀의 실제 문제 해결 데이터를 기반으로 합니다 – 어떤 오류가 가장 흔하고 어떤 수정 방법이 실제로 효과가 있는지 추적합니다. 모든 솔루션은 2026년 8월 기준 iOS 18 및 Android 14에서 테스트되었습니다. 당사 지원팀은 매월 2,000건 이상의 eSIM 문제 해결 사례를 처리하므로 실제로 작동하는 방법을 알고 있습니다.

## 10초 오류 진단 – 오류를 확인하고 수정 방법으로 바로 이동

**화면에 오류 메시지가 표시되나요? 여기에서 찾아 바로 수정 방법으로 이동하세요.**

| 표시되는 오류 메시지 | 수정 방법으로 이동 |
| :--- | :--- |
| **"eSIM not supported"** / **"this eSIM is not compatible with this iPhone"** | [수정 방법 #1](#1-esim-not-supported-또는-not-compatible-on-iphone) |
| **"Unable to activate eSIM"** / "Activating…"에서 멈춤 | [수정 방법 #2](#2-esim이-활성화되지-않는-이유-unable-to-activate-esim-수정) |
| **"eSIM network not available"** / 설치 후 신호 없음 | [수정 방법 #3](#3-설치-후-esim-network-not-available) |
| **"Your SIM is not supported eSIM transfer"** | [수정 방법 #4](#4-your-sim-is-not-supported-esim-transfer--전송-실패) |
| **"Can't transfer eSIM to new iPhone"** | [수정 방법 #4](#4-your-sim-is-not-supported-esim-transfer--전송-실패) + [수정 방법 #7](#7-esim-not-transferring-to-new-iphone--일반적인-원인) |
| **"eSIM profile expired"** / **"QR code invalid"** | [수정 방법 #11](#11-esim-profile-expired-또는-qr-code-invalid--해결-방법) |
| **"eSIM not compatible iPhone"** (일반) | [수정 방법 #1](#1-esim-not-supported-또는-not-compatible-on-iphone) |
| eSIM 설치 후 Apple 로고에서 멈춤 | [수정 방법 #6](#6-iphone이-호환되지-않는-esim으로-전환됨--부트-루프-고정) |
| **"Accidentally deleted eSIM"** / 실수로 삭제함 | [수정 방법 #5](#5-실수로-esim-삭제--재활성화-방법) |
| **"Samsung eSIM not working"** | [수정 방법 #10](#10-android-esim-문제-해결-samsung-pixel-및-기타-기기) |
| **"Pixel eSIM not supported"** | [수정 방법 #10](#10-android-esim-문제-해결-samsung-pixel-및-기타-기기) |
| **"eSIM not working on iPad"** | [수정 방법 #12](#12-ipad-또는-apple-watch에서-esim이-작동하지-않음--기기별-수정-방법) |
| 핫스팟 / iMessage / Wi‑Fi 통화 작동하지 않음 | [수정 방법 #13](#13-esim에서-데이터-로밍-핫스팟-및-imessage가-작동하지-않음) |
| **"My phone doesn't support eSIM"** (하지만 지원할 줄 알았음) | [수정 방법 #9](#9-내-휴대폰이-esim을-지원하지-않음--하지만-지원할-줄-알았음) |
| 무엇이 잘못되었는지 확실하지 않음 – 내 휴대폰만 진단 | [10초 오류 진단](#10초-오류-진단--오류를-확인하고-수정-방법으로-바로-이동) → EID 확인 |

> 💡 **전문가 팁:** 오류 메시지가 없지만 eSIM이 작동하지 않는 경우, 수정 방법 #1의 **EID 확인**부터 시작하여 휴대폰에 필요한 내장 SIM 하드웨어가 있는지 확인하세요. 이는 가장 흔한 단일 근본 원인입니다.


## 전체 eSIM 문제 해결 여정 – 오류부터 수정까지

다음은 eSIM 연결 문제를 해결할 때 대부분의 사용자가 따르는 경로입니다. 현재 위치를 추적하는 데 사용하세요.

| 단계 | 상황 | 해야 할 일 | 찾을 위치 |
| :--- | :--- | :--- | :--- |
| **1. 오류 확인** | 휴대폰에 특정 오류 메시지가 표시됩니다. | 위의 10초 오류 진단 표에서 일치시키세요. | [10초 오류 진단](#10초-오류-진단--오류를-확인하고-수정-방법으로-바로-이동) |
| **2. 하드웨어 호환성 확인** | "eSIM not supported" – 내 휴대폰이 지원하나요? | `*#06#` 다이얼 – EID 확인. | [수정 방법 #1A](#a-iphone-모델에-esim-하드웨어가-없음) |
| **3. 지역 잠금 배제** | 중국 모델? 통신사 잠금? | 모델 번호 및 통신사 잠금 확인. | [수정 방법 #1B](#b-iphone이-중국-본토-모델인-경우) + [수정 방법 #1C](#c-iphone이-통신사-잠금-상태인-경우) |
| **4. 수정 방법 적용** | 오류에 맞는 특정 수정 방법을 따르세요. | 아래 15가지 수정 방법 중 하나가 문제를 해결할 것입니다. | [수정 방법 #1–#15](#1-esim-not-supported-또는-not-compatible-on-iphone) |
| **5. 여전히 작동하지 않음?** | 어떤 수정 방법도 작동하지 않았습니다. | 최종 체크리스트를 사용하거나 제공업체 지원에 문의하세요. | [수정 방법 #15](#15-여전히-막혔나요-더-깊은-도움이-필요한가요) + [FAQ](#자주-묻는-질문) |


## 2분 하드웨어 확인 – 다른 작업 전에 먼저 하세요

어떤 수정 방법을 시도하기 전에 휴대폰에 실제로 필요한 내장 SIM 하드웨어가 있는지 확인하세요. 이 한 번의 확인으로 모든 "eSIM이 작동하지 않음" 사례의 50%가 즉시 해결됩니다.

### 보편적 EID 확인 (모든 휴대폰에서 작동)

휴대폰 다이얼러를 열고 다음을 입력하세요:

> **`*#06#`**

**32자리 EID**(eUICC 식별자)를 보여주는 화면이 나타나면 휴대폰에 디지털 SIM 활성화를 위한 하드웨어가 있는 것입니다. ✅

화면에 **IMEI** 번호만 표시되고 EID가 없으면 휴대폰에 **필요한 하드웨어가 없는** 것입니다. ❌

### EID vs IMEI – 차이점은 무엇인가요?

| 식별자 | 정의 | 의미 |
| :--- | :--- | :--- |
| **IMEI** | 국제 모바일 장비 식별 번호 (15자리) | 휴대폰 모델 식별 – 모든 휴대폰에 있음 |
| **EID** | eUICC 식별자 (32자리) | 휴대폰에 내장 SIM 칩이 있음을 확인 – 디지털 SIM 휴대폰만 있음 |
| **ICCID** | 집적 회로 카드 식별자 (19–20자리) | 설치 후 특정 eSIM 프로필 식별 |

> **핵심 통찰:** EID가 보이면 휴대폰이 디지털 SIM 기술을 물리적으로 지원하는 것입니다. 보이지 않으면 소프트웨어 업데이트, 해킹 또는 "강제" 방법으로 추가할 수 없습니다 – 하드웨어가 단순히 없기 때문입니다.

**EID가 나타나지 않으면:** 다른 모든 수정 방법을 건너뛰세요. 휴대폰에서 이 기술을 사용할 수 없습니다. 대신 물리적 SIM을 사용하세요. 지원할 것 같지만 지원하지 않는 휴대폰 목록은 수정 방법 #9를 참조하세요.

### "Add eSIM" 버튼 테스트 (iPhone 사용자용)

`*#06#`에서 EID가 표시되지만 여전히 **"eSIM not supported"**가 표시되는 경우:

1. **설정 > 셀룰러**로 이동합니다.
2. **"eSIM 추가"** 또는 **"셀룰러 요금제 추가"**를 찾습니다.
3. 이 옵션이 표시되지만 스캔 시 실패하면 **통신사 잠금** 또는 **지역 제한**이 있을 수 있습니다 – 아래 수정 방법 #1B 및 #1C를 참조하세요.

### 휴대폰에 EID가 있지만 여전히 eSIM을 지원하지 않을 수 있는 이유

| 시나리오 | EID 있음? | eSIM 작동? | 이유 |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR 이상 (글로벌) | ✅ 예 | ✅ 예 | 디지털 SIM 프로필 완전 지원 |
| iPhone XS/XR (중국 모델) | ❌ 아니요 | ❌ 아니요 | 듀얼 물리적 SIM을 위한 하드웨어 제거 |
| Samsung S20 FE (미국 통신사) | ✅ 예 | ❌ 아니요 | 통신사가 소프트웨어에서 기능 비활성화 |
| Google Pixel 4a (일본) | ✅ 예 | ❌ 아니요 | 통신사가 기능 차단 |
| 통신사 잠금 iPhone (AT&T/T‑Mobile) | ✅ 예 | ❌ 아니요 (다른 통신사) | 네트워크 잠금으로 통신사 프로필 활성화 차단 |
| 잠금 해제된 iPhone (모든 지역) | ✅ 예 | ✅ 예 | 완전 지원 |


## 1. "eSIM Not Supported" 또는 "Not Compatible" on iPhone

**"eSIM not supported"**, **"this eSIM is not compatible with this iPhone"**, 또는 단순히 **"eSIM not compatible iPhone"**이 표시되면 근본 원인은 거의 항상 다음 세 가지 중 하나입니다:

### A. iPhone 모델에 eSIM 하드웨어가 없음

**XR, XS, XS Max(2018) 및 이후** 모델부터 iPhone만 디지털 SIM 프로필을 지원합니다. 이전 모델(iPhone 8, 8 Plus, iPhone X)은 지원하지 않습니다. 구형 기기를 사용하는 경우 아무리 시도해도 **"esim not supported iphone"**이 표시됩니다.

**왜 이런가요?** 디지털 SIM 기술에는 **eUICC**(내장 범용 집적 회로 카드)라는 전용 하드웨어 칩이 필요합니다. 2018년 이전의 iPhone에는 이 칩이 없습니다 – 소프트웨어 제한이 아니라 하드웨어 제한입니다.

**빠른 확인 방법:** `*#06#`을 다이얼하세요. 32자리 EID가 보이면 휴대폰이 디지털 SIM 프로필을 지원하는 것입니다. IMEI만 나타나면 지원하지 않는 것입니다.

**해결 방법:** 대신 물리적 SIM을 사용하거나 최신 iPhone으로 업그레이드하세요. [Apple Support – eSIM on iPhone](https://support.apple.com/en-us/118670) 페이지에 공식 호환성 목록이 제공됩니다.

### B. iPhone이 중국 본토 모델인 경우

중국 본토에서 판매되는 iPhone은 **eSIM 하드웨어가 없습니다**(대신 듀얼 물리적 SIM). 이는 중국 규정이 국내 스마트폰에 듀얼 물리적 SIM 카드를 지원하도록 요구하기 때문입니다. "셀룰러 요금제 추가" 옵션이 보여도 작동하지 않습니다. 중국이나 특정 리셀러에서 구매한 사용자들 사이에서 **"esim not compatible with this iphone"**이 발생하는 가장 흔한 이유입니다.

**확인 방법:** **설정 > 일반 > 정보 > 모델 번호**로 이동합니다. "CH/A"로 끝나면 중국 모델입니다.

**해결 방법:** 디지털 SIM 기능을 활성화할 수 없습니다. 물리적 여행 SIM을 사용하거나 휴대폰을 판매하고 글로벌 버전을 구매하세요.

**중국 모델 빠른 참조:**

| 모델 번호 끝자리 | 지역 | eSIM 지원 |
| :--- | :--- | :--- |
| **CH/A** | 중국 본토 | ❌ 아니요 (듀얼 물리적 SIM) |
| **HK/A** | 홍콩 | ⚠️ 다양함 (일부 모델은 물리적 + 디지털 SIM 지원) |
| **LL/A** | 미국 | ✅ 예 |
| **ZA/A** | 캐나다 | ✅ 예 |
| **J/A** | 일본 | ✅ 예 (일부 통신사 모델 제외) |
| **B/A** | 영국/유럽 | ✅ 예 |
| **X/A** | 호주/뉴질랜드 | ✅ 예 |

### C. iPhone이 통신사 잠금 상태인 경우

일부 통신사(특히 미국)는 iPhone을 자사 네트워크에 잠급니다. 다른 제공업체(예: 여행 eSIM)의 디지털 SIM 프로필을 활성화하려고 하면 **"eSIM not supported"** 또는 통신사가 지원하지 않는다는 오류 메시지가 표시됩니다. 일부 통신사는 물리적 SIM 슬롯만 잠그고 디지털 SIM 슬롯은 잠금 해제된 상태로 두지만 – 많은 경우 둘 다 잠급니다.

**확인 방법:** **설정 > 일반 > 정보 > 통신사 잠금**을 확인하세요. "SIM 제한 없음"이라고 표시되어야 합니다. "SIM 잠금"이라고 표시되면 통신사에 연락하여 잠금 해제를 요청하세요.

**해결 방법:** 잠금 해제 후(일반적으로 기기 할부 완납 시 무료), 휴대폰을 다시 시작하고 다시 시도하세요.

### D. 오래된 iOS 버전

디지털 SIM 프로필 지원은 iOS 16 이상에서 크게 개선되었습니다. 여전히 iOS 12 또는 13을 사용 중인 경우 일부 최신 통신사 프로필이 작동하지 않습니다.

**확인 방법:** **설정 > 일반 > 소프트웨어 업데이트**.

**해결 방법:** 최신 iOS로 업데이트하세요. 그런 다음 실패한 프로필(있는 경우)을 삭제하고 QR 코드를 다시 스캔하세요.

### E. "This iPhone Does Not Support eSIM" – 하지만 iPhone 14인가요?

iPhone 14(미국 버전)이고 이 오류가 표시되면 **하드웨어 오류**일 가능성이 높습니다 – eUICC 칩이 손상되었을 수 있습니다. 드물지만 가능합니다. Apple Support에 연락하여 하드웨어 진단을 받으세요.

더 자세한 기기별 호환성 정보는 [iPhone eSIM 호환성 가이드](/faq/iphone-11-esim-compatible/) 및 [Samsung Galaxy eSIM 호환성 가이드](/faq/samsung-s20-esim-compatible/)를 참조하세요. Google Pixel 사용자를 위한 [Pixel eSIM 호환성 가이드](/faq/google-pixel-6-esim-compatible/)도 있습니다.


## 2. eSIM이 활성화되지 않는 이유 – "Unable to Activate eSIM" 수정

디지털 SIM 프로필을 추가하려고 할 때 10분 이상 "Activating…"에서 멈추거나 **"unable to activate esim"**이 표시되면 일반적으로 인터넷 연결 또는 통신사 활성화 서버에 문제가 있는 것입니다.

### 왜 이런가요?

활성화하려면 휴대폰이 통신사의 **SM‑DP+ 서버**(구독 관리자 데이터 준비)에 연결해야 합니다. 이 서버는 통신사 프로필을 기기에 안전하게 전달합니다. Wi‑Fi가 불안정하거나 서버가 바쁘거나 QR 코드에 잘못된 정보가 포함된 경우 프로세스가 중단될 수 있습니다.

### 로컬 문제인가요 서버 문제인가요?

| 증상 | 가능한 원인 | 조치 |
| :--- | :--- | :--- |
| 활성화가 즉시 중단됨, 진행 없음 | 로컬 네트워크 문제 | Wi‑Fi 확인, 네트워크 전환, 휴대폰 다시 시작 |
| 활성화가 80‑90%까지 진행된 후 중단됨 | 통신사 SM‑DP+ 서버 바쁨 | 10‑15분 대기, 삭제하지 마세요 |
| 활성화 실패 및 오류 코드 표시 | QR 코드 만료 또는 유효하지 않음 | 제공업체에 새 QR 코드 요청 |
| 여러 사람이 동시에 시도(예: 단체 여행) | 통신사 서버 과부하 | 대기 후 다시 시도(비수기 시간) |

### "Why is my esim not activating?" 단계별 수정 방법

1. **Wi‑Fi를 확인하세요.** 프로필은 인터넷을 통해 다운로드되어야 합니다. 다른 Wi‑Fi 네트워크로 전환하거나(공공 핫스팟 피하기) 다른 SIM의 모바일 데이터를 사용하세요.
2. **휴대폰을 다시 시작하세요.** 간단한 재시작으로 일시적인 오류가 해결됩니다.
3. **에어플레인 모드를 토글하세요.** 에어플레인 모드를 30초 동안 켠 후 끄세요. 네트워크 스택이 재설정됩니다.
4. **기다리세요 – 삭제하지 마세요.** 통신사의 SM‑DP+ 서버가 바쁘기 때문에 프로세스에 5‑10분이 걸릴 수 있습니다. 활성화 중에 프로필을 삭제하면 영구적으로 손실될 수 있습니다.
5. **수동 입력을 시도하세요.** QR 코드를 사용 중이라면 "수동으로 세부 정보 입력"을 탭하고 이메일의 SM‑DP+ 주소와 활성화 코드를 입력하세요.
6. **eSIM 제공업체의 상태 페이지를 확인하세요.** 일부 제공업체는 서버 가동 시간을 보여주는 상태 대시보드가 있습니다.

이것으로 해결되지 않으면 eSIM 제공업체에 문의하세요 – QR 코드를 다시 생성해야 할 수 있습니다. 고급 활성화 디버깅은 **[eSIM 심층 문제 해결 가이드 2026](/faq/esim-deep-troubleshooting-guide-2026/)**를 확인하세요.

[GSMA](https://www.gsma.com/esim/)는 활성화 프로세스가 의존하는 기술 표준을 제공합니다 – 통신사와 기기 제조업체는 원활한 연결을 위해 이러한 사양을 따라야 합니다.


## 3. 설치 후 "eSIM Network Not Available"

디지털 SIM 프로필을 성공적으로 설치했지만 상태 표시줄에 **"eSIM network not available"**이 나타나거나 신호가 없습니다. 이는 여행객 사이에서 매우 흔합니다.

### 왜 이런가요?

- **데이터 로밍이 꺼져 있음** – 대부분의 여행 eSIM은 파트너 네트워크를 통해 연결되므로 데이터 로밍을 활성화해야 합니다. 이는 기술적 요구사항이며 실제 로밍 요금이 아닙니다.
- **APN 설정이 누락됨** – 일부 제공업체는 데이터를 올바르게 라우팅하기 위해 APN(액세스 포인트 이름)을 수동으로 입력해야 합니다.
- **커버리지 밖에 있음** – 제공업체와 파트너십을 맺은 현지 통신사가 현재 위치에 신호가 없습니다.
- **통신사 측에서 요금제가 활성화되지 않음** – 일부 여행 요금제는 두 번째 단계(예: 문자 발송 또는 포털 로그인)가 필요합니다.

### "eSIM Network Not Available" 수정 방법

1. **데이터 로밍 켜기:** **설정 > 셀룰러 > [eSIM]** > **데이터 로밍** 토글 ON. 이는 **"esim network not available verizon"** 및 유사한 오류에 대한 #1 수정 방법입니다.
2. **APN 설정 확인:** **설정 > 셀룰러 > [eSIM] > 셀룰러 데이터 네트워크**로 이동합니다. 제공업체에서 제공한 APN(보통 "internet" 또는 "globaldata")을 입력합니다. 사용자 이름/비밀번호는 지정되지 않은 경우 비워 둡니다.
3. **수동으로 네트워크 선택:** **설정 > 셀룰러 > [eSIM] > 네트워크 선택**에서 "자동"을 끄고 다른 파트너 네트워크를 선택합니다.
4. **변경 후 휴대폰 다시 시작**합니다.
5. **에어플레인 모드 확인:** 방금 착륙한 경우 에어플레인 모드를 켰다 끄면 휴대폰이 현지 타워에 다시 등록됩니다.

**Verizon** 고객이 Verizon이 아닌 요금제를 사용하려는 경우 일부 기기에서 Verizon이 디지털 SIM 슬롯을 자체 프로필로 잠그기 때문에 **"eSIM network not available verizon"**이 표시될 수도 있습니다. 먼저 기기 잠금을 해제하세요.

전체 호환 기기 목록은 [eSIM 호환 휴대폰 전체 목록(2026)](/compatibility/)을 참조하세요.

### 신호 막대 표시기 – 실제 의미

| 표시기 | 의미 | 해야 할 일 |
| :--- | :--- | :--- |
| **막대 없음 / 서비스 없음** | 휴대폰이 어떤 네트워크에도 연결되지 않음 | 데이터 로밍 확인, 다시 시작, 수동 네트워크 선택 |
| **막대 있지만 LTE/5G 레이블 없음** | 네트워크에 연결되었지만 데이터 세션 없음 | APN 설정 누락 가능성 높음 |
| **"SOS" 또는 "SOS Only"** | 긴급 통화만 가능 | 호환 네트워크 없음 – 커버리지 확인 또는 수동 선택 |
| **"검색 중…"** | 휴대폰이 네트워크 스캔 중 | 1‑2분 대기; 지속되면 다시 시작 또는 에어플레인 모드 토글 |
| **"5G" / "LTE" 및 막대** | ✅ 정상 작동 중 | 연결됨 |


## 4. "Your SIM Is Not Supported eSIM Transfer" – 전송 실패

디지털 SIM 프로필을 이전 휴대폰에서 새 휴대폰으로 이동할 때 **"your sim is not supported esim transfer"** 또는 **"can't transfer esim to new iphone"**이 표시될 수 있습니다. 이는 일부 통신사가 전송을 허용하지 않기 때문에 발생합니다 – 프로필이 원래 기기의 EID에 영구적으로 바인딩됩니다.

### 왜 이런가요?

프로필을 활성화하면 통신사가 휴대폰의 **EID**(eUICC 식별자)에 바인딩합니다. 일부 통신사는 이 바인딩을 새 기기로 전송할 수 있도록 허용하고, 다른 통신사는 그렇지 않습니다. 여행 eSIM은 거의 항상 설계상 전송이 불가능합니다.

**iPhone과 Android를 모두 포함한 단계별 지침(플랫폼 간 이동 포함)은 [iPhone과 Android 간 eSIM 전송 방법](/faq/how-to-transfer-esim-between-iphone-and-android/)을 참조하세요.**

### Verizon 고객 특별 참고

Verizon 사용자는 새 휴대폰으로 프로필을 이동할 때 종종 **"your sim is not supported esim transfer verizon"**이 표시됩니다. Verizon 시스템은 새 기기에서 활성화하기 전에 **이전 기기에서 프로필을 해제**해야 합니다.

**Verizon 수정 방법:**
- 이전 휴대폰에서: **설정 > 셀룰러 > Verizon eSIM 탭 > 셀룰러 요금제 제거**로 이동합니다(Verizon 서버에서 해제됨).
- 그런 다음 새 휴대폰에서: **My Verizon 앱**을 열고 로그인한 후 **계정 > 기기 > eSIM 활성화**로 이동합니다. 지시에 따라 새 프로필을 다운로드합니다.

### T‑Mobile 고객 특별 참고

T‑Mobile 사용자는 T‑Mobile 앱을 통해 프로필을 전송할 수 있습니다:
1. 새 휴대폰에서 **T‑Mobile 앱**을 엽니다.
2. **계정 > 회선 세부정보 > 데이터 및 애드온 관리 > SIM 카드**로 이동합니다.
3. **"eSIM으로 전환"**을 선택하고 지시를 따릅니다.

### "Cannot Transfer eSIM" 일반 수정 방법

1. **내장 전송 옵션 시도:** 새 iPhone 설정 중 "근처 iPhone에서 eSIM 전송"을 선택합니다. 두 휴대폰을 가까이 두고 iOS 16+에서 실행합니다.
2. **통신사 앱 사용:** 대부분의 주요 통신사(T‑Mobile, AT&T, Google Fi, US Mobile)는 온라인 계정에서 새 QR 코드를 요청할 수 있습니다. 새 휴대폰에서 해당 코드를 스캔합니다.
3. **지원팀에 문의:** 프로필이 여행 제공업체(예: Airalo, Holafly, Roami)에서 온 경우 일반적으로 전송을 지원하지 않습니다 – 새 요금제를 구매해야 합니다.

### "Force eSIM iPhone 7"은요?

지원되지 않는 휴대폰에 디지털 SIM을 강제할 수 없습니다. **이는 불가능합니다.** iPhone 7에는 필요한 하드웨어가 없습니다. 어떤 소프트웨어 해킹도 추가할 수 없습니다. iPhone 6s, 8 및 iPhone X에도 동일하게 적용됩니다. "강제"하는 유일한 방법은 iPhone XR 이상으로 업그레이드하는 것입니다.

**"esim not transferring to new iphone"**이 문제이고 통신사가 전송을 지원한다면 내장 iOS 전송 옵션이 일반적으로 작동합니다. 자세한 내용은 [플랫폼 간 전송 가이드](/faq/how-to-transfer-esim-between-iphone-and-android/)를 참조하세요.


## 5. 실수로 eSIM 삭제 – 재활성화 방법

**실수로 eSIM을 삭제**하거나 **실수로 eSIM을 지운** 경우, 당황하지 마세요. 복구는 사용 중인 디지털 SIM 프로필 유형에 따라 다릅니다.

### 복구 타임라인 – 즉시 해야 할 일

| 삭제 후 시간 | 해야 할 일 |
| :--- | :--- |
| **5분 이내** | 프로필이 여전히 "사용 가능한 SIM"에 있는지 확인합니다(설정 > 셀룰러 > 셀룰러 요금제 추가). 일부 휴대폰은 프로필을 짧은 시간 동안 보관합니다. |
| **24시간 이내** | 주문 번호와 함께 제공업체에 문의하세요 – 대부분 24‑48시간 내에 QR 코드를 다시 생성할 수 있습니다. |
| **24시간 후** | 여행 요금제는 복구가 더 어려울 수 있습니다. 제공업체의 정책을 확인하세요. 통신사 프로필은 일반적으로 앱을 통해 다시 다운로드할 수 있습니다. |
| **7일 이상** | 일부 제공업체는 재발급을 위한 "유예 기간"이 있습니다. 제공업체의 약관을 확인하세요. 그렇지 않으면 새 요금제를 구매하세요. |

### 여행 eSIM(일회성 설치)의 경우

대부분의 여행 요금제는 단일 설치용으로 설계되었습니다. 프로필을 삭제하면 동일한 QR 코드를 다시 스캔할 수 없습니다 – "이미 사용됨" 또는 "유효하지 않음"이라고 표시됩니다.

**해결 방법:** 
- 이메일 확인: 일부 제공업체는 새 QR 코드를 요청할 수 있습니다(예: Roami 지원팀이 다시 생성할 수 있음).
- 그렇지 않으면 새 요금제를 구매해야 합니다.

### 통신사 eSIM(Verizon, T‑Mobile, AT&T)의 경우

일반적으로 복구 가능합니다. 통신사 앱을 열거나 온라인 계정에 로그인하여 "eSIM 다시 다운로드" 또는 "새 QR 코드 받기"를 찾으세요. 신원 확인이 필요할 수 있습니다.

**Verizon:** My Verizon 앱 > 계정 > 기기 > eSIM 활성화.
**T‑Mobile:** T‑Mobile 앱 > 계정 > 회선 세부정보 > SIM 카드 > eSIM으로 전환.
**AT&T:** AT&T 앱 > 계정 > 무선 > 기기 관리 > 새 eSIM 받기.

### 제공업체 유형별 복구 – 빠른 참조

| 제공업체 유형 | 복구 방법 | 성공률 |
| :--- | :--- | :--- |
| **Roami / Airalo / Holafly** | 주문 번호와 함께 지원팀에 QR 재발급 요청 | ⭐⭐⭐⭐ (보통 24시간 이내) |
| **Verizon / T‑Mobile / AT&T** | 통신사 앱 → 새 eSIM 다운로드 | ⭐⭐⭐⭐⭐ (즉시) |
| **Google Fi** | Fi 앱 → 요금제 관리 → 새 eSIM 받기 | ⭐⭐⭐⭐⭐ (즉시) |
| **US Mobile** | US Mobile 앱 → eSIM → 새 QR 받기 | ⭐⭐⭐⭐⭐ (즉시) |
| **기타 여행 eSIM 대부분** | 이메일에서 "재다운로드" 링크 확인 | ⭐⭐⭐ (제공업체에 따라 다름) |

### 공장 초기화 후 eSIM 재활성화 방법

디지털 SIM 프로필을 먼저 제거하지 않고 휴대폰을 초기화한 경우 프로필이 여전히 저장되어 있지만 비활성화될 수 있습니다. **설정 > 셀룰러 > 셀룰러 요금제 추가**로 이동하세요 – 때때로 이전 요금제가 "사용 가능"으로 나타납니다. 탭하여 재활성화하세요.

그렇지 않으면 위와 동일한 복구 단계를 따르세요.

다양한 통신사에서 **"how to reactivate esim"**에 대한 일반적인 지침은 보편적인 답변입니다: **주문 번호와 함께 제공업체에 연락하여 새 QR 코드 또는 재활성화를 요청하세요.**

프로필을 다시 실수로 삭제할까 걱정된다면 QR 코드나 활성화 세부 정보를 안전한 장소(예: 비밀번호 관리자 또는 클라우드 스토리지)에 백업해 두는 것이 좋습니다. 단계별 복구 지침은 [eSIM 문제 해결 가이드](/faq/esim-deep-troubleshooting-guide-2026/)를 참조하세요.


## 6. iPhone이 호환되지 않는 eSIM으로 전환됨 – 부트 루프 고정

드물지만 심각한 오류입니다: **"iphone switched to incompatible esim stuck boot loop"**. 손상되었거나 기기 펌웨어를 지원하지 않는 통신사의 프로필을 설치하려고 할 때 일반적으로 발생합니다. 휴대폰이 Apple 로고에서 멈추거나 계속 다시 시작됩니다.

### 왜 이런가요?

디지털 SIM 프로필을 설치하면 프로필이 기기의 셀룰러 베이스밴드 펌웨어에 저수준 변경을 수행합니다. 프로필이 호환되지 않는 경우(예: 기기 모델이나 지역을 지원하지 않는 통신사에서 온 경우) 베이스밴드가 제대로 초기화되지 않아 부트 루프가 발생할 수 있습니다.

### 수정 방법

1. **iPhone 강제 재시작:** 
   - **볼륨 업**을 눌렀다가 빠르게 놓습니다.
   - **볼륨 다운**을 눌렀다가 빠르게 놓습니다.
   - 복구 모드 화면이 보일 때까지 **측면 버튼**을 길게 누릅니다(더 일찍 놓지 마세요).
2. **컴퓨터에 연결** – Finder(macOS) 또는 iTunes(Windows).
3. **"업데이트"** 선택( "복원" 아님) – iOS를 다시 설치하면서 데이터를 지우지 않습니다. 손상된 프로필이 제거될 수 있습니다.
4. 그래도 실패하면 **"복원"**이 필요할 수 있으며 휴대폰이 완전히 초기화됩니다. 복원 후 새로 설정하세요(잘못된 프로필이 포함된 백업에서 복원하지 마세요).

### 예방

항상 신뢰할 수 있는 제공업체의 통신사 프로필을 다운로드하세요. 온라인에서 발견한 임의의 QR 코드를 설치하려고 시도하지 마세요.

iPhone에서 두 개의 디지털 SIM을 사용하고 충돌이 발생하면 **[iPhone 듀얼 eSIM이 작동하지 않나요? 12가지 수정 방법](/faq/dual-esim-not-working-12-fixes-for-iphone/)** 가이드에서 특정 듀얼 SIM 문제 해결 단계를 다룹니다.

iPad 및 Apple Watch 문제는 [iPad 및 Apple Watch eSIM 가이드](/faq/ipad-apple-watch-esim-support-guide/)를 참조하세요.


## 7. "eSIM Not Transferring to New iPhone" – 일반적인 원인

새 iPhone이 있고 디지털 SIM 프로필을 이동하려고 하지만 **"esim not transferring to new iphone"**이 발생합니다. 그 이유는:

- **이전 iPhone이 여전히 활성화되어 있음** – 프로필은 두 기기에서 동시에 활성화될 수 없습니다. 먼저 이전 휴대폰에서 삭제하세요(설정 > 셀룰러 > eSIM 탭 > 셀룰러 요금제 제거).
- **통신사가 전송을 지원하지 않음** – 일부 통신사(특히 선불 여행 요금제)는 일회성입니다.
- **QR 코드 만료** – 이전 QR 코드를 재사용하는 경우 만료 날짜를 확인하세요(보통 30–90일).
- **다른 Apple ID** – 두 기기가 내장 전송이 작동하려면 동일한 Apple ID에 로그인되어 있어야 합니다.
- **두 휴대폰이 iOS 16+가 아님** – "근처 iPhone에서 eSIM 전송" 기능은 iOS 16 이상이 필요합니다.

**수정 방법:** 위의 "cannot transfer eSIM" 섹션을 따르세요. iPhone에서 Android로(또는 그 반대로) 이동하는 경우 거의 확실히 새 프로필이 필요합니다 – 플랫폼 간 전송은 거의 지원되지 않습니다. 자세한 단계는 **[iPhone과 Android 간 eSIM 전송 방법](/faq/how-to-transfer-esim-between-iphone-and-android/)**을 참조하세요.

**Verizon** 고객인 경우 섹션 4의 단계가 **"your sim is not supported esim transfer verizon"** 오류에 특별히 적용됩니다. T‑Mobile 사용자의 경우 앱에서 기기 간 프로필을 쉽게 전송할 수 있는 방법을 제공합니다.

### 통신사별 전송 비교

| 통신사 | 전송 방법 | 소요 시간 |
| :--- | :--- | :--- |
| **Verizon** | My Verizon 앱 → 새 기기에서 eSIM 활성화 | 5‑10분 |
| **T‑Mobile** | T‑Mobile 앱 → 새 기기에서 eSIM으로 전환 | 5‑10분 |
| **AT&T** | AT&T 앱 → 새 eSIM 받기 | 5‑10분 |
| **Google Fi** | Fi 앱 → 요금제 관리 → 새 eSIM 받기 | 2‑5분 |
| **US Mobile** | US Mobile 앱 → eSIM → 새 QR 다운로드 | 2‑5분 |
| **여행 eSIM** | 재발급을 위해 지원팀에 문의 | 24‑48시간 (또는 새로 구매) |


## 8. 일반 문제 해결: iPhone에서 eSIM 수정 방법 (단계별)

디지털 SIM 프로필이 여전히 작동하지 않는 경우 다음 보편적인 체크리스트를 따르세요:

1. **기기 호환성 확인** – `*#06#`을 다이얼하여 EID를 확인합니다. EID가 나타나지 않으면 휴대폰이 이 기술을 **지원하지 않는** 것입니다. 이는 **"my phone doesn't support esim"**에 대한 결정적인 확인입니다.
2. **중국 모델이 아닌지 확인** – 모델 번호가 CH/A로 끝나면 디지털 SIM 기능이 없습니다.
3. **iOS 업데이트** – 설정 > 일반 > 소프트웨어 업데이트.
4. **통신사 잠금 확인** – 설정 > 일반 > 정보 > 통신사 잠금에 "SIM 제한 없음"이라고 표시되어야 합니다.
5. **네트워크 설정 재설정** – 설정 > 일반 > iPhone 전송 또는 재설정 > 재설정 > 네트워크 설정 재설정(프로필은 삭제되지 않지만 Wi‑Fi 비밀번호가 지워질 수 있음).
6. **오래된 프로필 삭제** – 너무 많은 저장된 프로필이 오류를 일으킬 수 있습니다. 설정 > 셀룰러로 이동하여 사용하지 않는 프로필을 제거하세요.
7. **재설치** – 이전 QR 코드가 만료된 경우 제공업체에 새 QR 코드를 요청하세요.
8. 디지털 SIM 회선에 대해 **데이터 로밍 켜기**.

위의 모든 작업을 수행했지만 여전히 **"unable to activate esim"**이 표시되면 주문 세부 정보와 오류 스크린샷과 함께 제공업체 지원팀에 문의하세요.

**eSIM not compatible iphone** 오류에 대한 추가 도움말은 [iPhone eSIM 호환성 가이드](/faq/iphone-11-esim-compatible/)를 참조하세요. **Android 사용자**의 경우 대부분의 경우 동일한 단계가 적용됩니다 – Android 설정 메뉴를 통해 이동하세요.


## 9. "내 휴대폰이 eSIM을 지원하지 않음" – 하지만 지원할 줄 알았음

때로는 휴대폰이 그렇지 않음에도 eSIM 기술을 지원한다고 광고되는 경우가 있습니다. 이는 다음과 같은 경우에 자주 발생합니다:

- **Samsung Galaxy S20 FE** – 많은 지역 변형에 필요한 하드웨어가 없습니다. Samsung은 비용 절감을 위해 미국 통신사 잠금 S20 FE 버전에서 이 기능을 비활성화했습니다. 자세한 내용은 [Samsung eSIM 호환성 가이드](/faq/samsung-s20-esim-compatible/)를 참조하세요.
- **Google Pixel 4a (일본 버전)** – 일본 통신사 모델은 현지 통신사 계약으로 인해 기능을 비활성화합니다. 자세한 내용은 [Pixel eSIM 호환성 가이드](/faq/google-pixel-6-esim-compatible/)를 참조하세요.
- **Xiaomi Redmi Note 시리즈** – 온라인 루머에도 불구하고 필요한 하드웨어가 없습니다. Xiaomi는 이 기능을 플래그십 모델에만 예약합니다.
- **iPhone 8 / X** – 오래된 하드웨어. Apple은 XS/XR 세대부터 eUICC 칩을 추가했습니다.
- **Samsung Galaxy A 시리즈** – 특정 모델(A54, A53 등)만 하드웨어가 있습니다; 대부분의 A 시리즈는 지원하지 않습니다.

### "eSIM을 지원할 것 같지만 실제로는 지원하지 않는" – 전체 목록

| 휴대폰 모델 | eSIM 지원 | 이유 |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ 아니요 | eUICC 이전 하드웨어 |
| **iPhone XS/XR (중국)** | ❌ 아니요 | 듀얼 물리적 SIM 하드웨어 |
| **Samsung Galaxy S20 FE (미국 통신사)** | ❌ 아니요 | 통신사 비활성화 |
| **Samsung Galaxy A13 / A23** | ❌ 아니요 | 보급형 모델, eUICC 없음 |
| **Google Pixel 4a (일본)** | ❌ 아니요 | 통신사 비활성화 (Docomo/SoftBank) |
| **Google Pixel 3 (일부 모델)** | ⚠️ 다양함 | 지역 확인; 일부는 있고 일부는 없음 |
| **Xiaomi Redmi Note 시리즈** | ❌ 아니요 | eUICC 하드웨어 없음 |
| **Xiaomi 12/13 (중국)** | ❌ 아니요 | 중국 내수 버전은 하드웨어 없음 |
| **OnePlus Nord (중국 버전)** | ❌ 아니요 | 중국 지역은 하드웨어 없음 |
| **Huawei (중국 내수 전체)** | ❌ 아니요 | Google 서비스 없음, eSIM 하드웨어 없음 |
| **Motorola G 시리즈 (대부분)** | ❌ 아니요 | 보급형 모델은 eUICC 없음 |

**해결 방법:** 휴대폰을 구매하기 전에 공식 사양을 확인하세요. (휴대폰이 있는 경우) 기기에서 `*#06#`을 다이얼하여 EID를 확인하세요. IMEI 번호로 온라인 **eSIM 호환성 확인**을 사용하세요. **[eSIM 호환 휴대폰 전체 목록(2026)](/compatibility/)**은 모든 모델을 확인할 수 있는 최고의 자료입니다.

이미 디지털 SIM 기술을 지원하지 않는 휴대폰이 있는 경우 물리적 여행 SIM을 계속 사용할 수 있습니다. 많은 제공업체가 주소로 배송되는 물리적 SIM 카드도 판매합니다.


## 10. Android eSIM 문제 해결: Samsung, Pixel 및 기타 기기

**eSIM not working android** 문제가 발생하는 경우 문제 해결 단계는 브랜드에 따라 다르는 경우가 많습니다. 다음은 확인해야 할 사항입니다:

### Samsung Galaxy eSIM 문제

Samsung 사용자는 특히 통신사 잠금 또는 지역별 모델에서 **samsung eSIM not working** 오류를 자주 겪습니다.

**일반적인 Samsung 문제:**

- **S20 FE 및 A 시리즈** – 많은 지역 변형에 필요한 하드웨어가 전혀 없습니다. S20 FE에서 **"samsung esim not working"**이 표시되면 모델 번호를 확인하세요. 미국 통신사 버전은 종종 기능이 비활성화되어 있습니다.
- **통신사 잠금 Samsung 휴대폰** – 하드웨어가 지원하더라도 AT&T 및 T‑Mobile은 종종 자사 브랜드 Samsung 기기에서 이를 비활성화합니다. SIM 잠금 해제를 요청해야 합니다.
- **Android 버전** – OneUI 4.0(Android 12)에서 지원이 개선되었습니다. 이전 버전을 사용 중인 경우 먼저 업데이트하세요.

**Samsung에서 확인 방법:**
- **설정 > 연결 > SIM 카드 관리자** – "eSIM 추가" 또는 "모바일 요금제"를 찾으세요. 없으면 사용할 수 없는 것입니다.
- `*#06#` 다이얼 – EID가 나타나지 않으면 Samsung이 이 기술을 지원하지 않는 것입니다.

**Samsung 특정 수정 방법:** Samsung이 지원하지만 작동하지 않는 경우:
1. **캐시 파티션 지우기** – 휴대폰 끄기 > 볼륨 업 + 전원 > 복구 모드 > 캐시 파티션 지우기.
2. **네트워크 설정 재설정** – 설정 > 일반 관리 > 재설정 > 네트워크 설정 재설정.
3. **수동으로 통신사 선택** – 설정 > 연결 > 모바일 네트워크 > 네트워크 운영자 > 수동 선택.

**활성화 후 첫 연결 시간:** 지원되는 Samsung 모델에서 디지털 SIM은 일반적으로 2-5분 내에 네트워크에 연결됩니다. 10분 이상 걸리면 에어플레인 모드를 켰다 꺼보세요.

**Samsung 모델별 호환성:**

| 모델 | eSIM 지원 | 비고 |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ 예 | 모든 글로벌 변형 |
| **Galaxy S20 FE** | ❌ 아니요 (미국 통신사) / ✅ 예 (글로벌) | 모델 번호 확인 |
| **Galaxy A54 / A53** | ✅ 예 | 선택된 A 시리즈만 |
| **Galaxy A13 / A23 / A33** | ❌ 아니요 | 보급형 모델 |
| **Galaxy Z Fold / Flip** | ✅ 예 | 모든 모델 |
| **Galaxy Note 20** | ✅ 예 | 모든 모델 |

자세한 Samsung 관련 지침은 [Samsung eSIM 호환성 가이드](/faq/samsung-s20-esim-compatible/) 및 [Samsung Support – eSIM](https://www.samsung.com/us/support/) 페이지를 참조하세요.

### Google Pixel eSIM 문제

Pixel 사용자는 지역 또는 통신사 제한으로 인해 **pixel eSIM not supported** 메시지가 표시되는 경우가 있습니다.

**일반적인 Pixel 문제:**

- **Pixel 4a (일본 통신사 버전)** – Docomo와 SoftBank는 Pixel 4a 모델에서 이 기능을 비활성화합니다. [Google Support – eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887) 페이지에서 어떤 모델이 지원하는지 확인할 수 있습니다.
- **통신사 잠금 Pixel** – Verizon 및 AT&T 버전은 자체 네트워크로 비활성화되거나 제한될 수 있습니다.
- **Android 12 이하** – 이 기능은 Android 13 이상에서 가장 잘 작동합니다.

**Pixel에서 확인 방법:**
- **설정 > 네트워크 및 인터넷 > SIM** – "대신 SIM 다운로드?" 또는 "eSIM 추가"를 찾으세요. 없으면 사용할 수 없는 것입니다.
- `*#06#` 다이얼 – EID가 나타나지 않으면 Pixel이 이 기술을 지원하지 않는 것입니다.

**Pixel 특정 수정 방법:** Pixel이 지원하지만 활성화가 실패하는 경우:
1. **"자동 네트워크 선택" 끄기** – 설정 > 네트워크 및 인터넷 > 인터넷 > 톱니바퀴 아이콘 탭 > 네트워크 선택 > 자동 끄기 > 통신사 수동 선택.
2. **모바일 네트워크 설정 재설정** – 설정 > 시스템 > 재설정 옵션 > Wi‑Fi, 모바일 및 Bluetooth 재설정.

**활성화 후 첫 연결 시간:** Pixel 기기는 일반적으로 2-3분 내에 연결됩니다. 네트워크 커버리지가 강한 지역에서는 연결이 일반적으로 즉시 이루어집니다.

**Pixel 모델별 호환성:**

| 모델 | eSIM 지원 | 비고 |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ 예 | 이 기능을 갖춘 최초의 Pixel |
| **Pixel 3a / 3a XL** | ✅ 예 | – |
| **Pixel 4 / 4 XL** | ✅ 예 | – |
| **Pixel 4a** | ⚠️ 다양함 | 일본 통신사 버전 = 아니요 |
| **Pixel 5 / 5a** | ✅ 예 | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ 예 | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ 예 | – |
| **Pixel 8 / 8 Pro** | ✅ 예 | – |

자세한 Pixel 관련 지침은 [Pixel eSIM 호환성 가이드](/faq/google-pixel-6-esim-compatible/)를 참조하세요.

### OnePlus eSIM 문제

OnePlus는 **OnePlus 12**부터 지원을 추가했습니다. 이전 모델(OnePlus 11, 10, 9)에는 필요한 하드웨어가 없습니다.

**활성화 후 첫 연결 시간:** OnePlus 기기는 일반적으로 2-3분 내에 연결됩니다. 5분 이상 "네트워크 검색 중"이 표시되면 휴대폰을 다시 시작하고 데이터 로밍을 켜세요.

**OnePlus 호환성:**

| 모델 | eSIM 지원 |
| :--- | :--- |
| **OnePlus 12** | ✅ 예 |
| **OnePlus 11** | ❌ 아니요 |
| **OnePlus 10** | ❌ 아니요 |
| **OnePlus 9** | ❌ 아니요 |
| **OnePlus Nord 시리즈** | ❌ 아니요 (일부 EU 변형 제외) |

**OnePlus 특정 수정 방법:** OnePlus 12가 있고 작동하지 않는 경우:
1. **설정 > 모바일 네트워크 > SIM 관리자 > eSIM 추가**.
2. **OxygenOS가 최신 버전으로 업데이트**되었는지 확인하세요.
3. **통신사 잠금 확인** – 잠긴 경우 통신사에 문의하세요.

### 기타 Android 기기

Motorola, Xiaomi 및 기타 브랜드의 경우 이 가이드의 보편적인 문제 해결 단계가 적용됩니다. `*#06#`을 다이얼했을 때 EID가 표시되지 않으면 필요한 하드웨어가 없는 것입니다.


## 11. eSIM 프로필 만료 또는 QR 코드 유효하지 않음 – 해결 방법

**"esim profile expired"** 또는 **"esim qr code invalid"**이 표시되면 활성화 코드를 더 이상 사용할 수 없는 것입니다.

### 왜 이런가요?

- QR 코드는 일반적으로 발급 후 **30–90일** 후에 만료됩니다. 이는 무단 활성화를 방지하기 위한 보안 조치입니다.
- 일부 제공업체는 프로모션 또는 평가판 요금제에 대해 더 짧은 만료 기간을 설정합니다.
- 이미 코드를 한 번 스캔한 경우 보안상 유효하지 않게 됩니다 – QR 코드는 일회용으로 설계되었습니다.

### eSIM이 만료되었을 때 해야 할 일

1. **제공업체에 문의** – 새 QR 코드를 생성할 수 있습니다. 일부 제공업체는 앱이나 웹사이트를 통해 새 코드를 요청할 수 있습니다.
2. **이메일 확인** – 원래 활성화 이메일에 QR 코드를 다시 생성할 수 있는 링크가 포함되어 있을 수 있습니다.
3. **새 요금제 구매** – 제공업체가 코드를 다시 생성할 수 없는 경우 새 요금제를 구매해야 합니다.
4. **통신사에 확인** – 후불 통신사 프로필(Verizon, T‑Mobile, AT&T)의 경우 일반적으로 앱이나 고객 서비스를 통해 새 것을 요청할 수 있습니다.

### eSIM 만료 방지 방법

- 구매 후 **30일 이내**에 항상 요금제를 설치하세요.
- 미래 여행을 위해 요금제를 구매하는 경우 구매 전 제공업체의 만료 정책을 확인하세요.
- QR 코드를 여러 곳(이메일, 클라우드 스토리지, 인쇄본)에 저장하여 원본이 만료되더라도 접근할 수 있도록 하세요.

### 제공업체별 QR 코드 만료 (일반적)

| 제공업체 | 일반적인 QR 코드 만료 |
| :--- | :--- |
| **Roami** | 30일 |
| **Airalo** | 30일 |
| **Holafly** | 90일 |
| **Verizon** | 7–14일 (앱 기반, 재생성) |
| **T‑Mobile** | 7일 (앱 기반, 재생성) |
| **AT&T** | 7–14일 (앱 기반, 재생성) |
| **Google Fi** | 30일 |
| **US Mobile** | 30일 |

만료된 프로필에 대한 추가 도움말은 [eSIM 문제 해결 가이드](/faq/esim-deep-troubleshooting-guide-2026/)를 참조하세요.


## 12. iPad 또는 Apple Watch에서 eSIM이 작동하지 않음 – 기기별 수정 방법

**eSIM not working ipad** 또는 **ipad eSIM not working** 문제가 발생하는 경우 수정 방법은 iPhone 문제 해결과 다릅니다.

### iPad eSIM 문제

**일반적인 iPad 문제:**

- **iPad 모델이 지원해야 함** – iPad Pro(3세대 이상), iPad Air(3세대 이상), iPad(10세대 이상), iPad mini(6세대 이상)만 이 기술을 지원합니다.
- **셀룰러 모델만** – Wi‑Fi 전용 iPad는 필요한 하드웨어가 없습니다.
- **통신사 잠금** – 일부 통신사에서 판매하는 iPad는 특정 네트워크에 잠겨 있습니다.

**iPad 모델별 호환성:**

| iPad 모델 | eSIM 지원 |
| :--- | :--- |
| **iPad Pro 3세대 이상** | ✅ 예 |
| **iPad Air 3세대 이상** | ✅ 예 |
| **iPad 10세대 이상** | ✅ 예 |
| **iPad mini 6세대 이상** | ✅ 예 |
| **모든 구형 iPad 모델** | ❌ 아니요 |

**iPad 활성화 문제 수정 방법:**

1. **통신사 잠금 확인** – 설정 > 일반 > 정보 > 통신사 잠금에 "SIM 제한 없음"이라고 표시되어야 합니다.
2. **iPad 다시 시작** – 간단한 재시작으로 활성화 지연이 해결되는 경우가 많습니다.
3. **네트워크 설정 재설정** – 설정 > 일반 > iPad 전송 또는 재설정 > 재설정 > 네트워크 설정 재설정.
4. **QR 코드로 설치** – 설정 > 셀룰러 데이터 > 셀룰러 요금제 추가 > QR 코드 스캔으로 이동합니다.

### Apple Watch eSIM 문제

**일반적인 Apple Watch 문제:**

- **Apple Watch는 셀룰러 모델이어야 함** – GPS 전용 워치는 이 기능을 지원하지 않습니다.
- **통신사가 Apple Watch를 지원해야 함** – 모든 통신사가 Apple Watch 요금제를 지원하는 것은 아닙니다. 제공업체에 확인하세요.
- **Watch는 iPhone과 페어링되어야 함** – iPhone의 Watch 앱을 통해 요금제를 설정합니다.

**Apple Watch 호환성:**

| Apple Watch 모델 | eSIM 지원 |
| :--- | :--- |
| **Apple Watch Series 3 (셀룰러)** | ✅ 예 |
| **Apple Watch Series 4–9 (셀룰러)** | ✅ 예 |
| **Apple Watch SE (셀룰러)** | ✅ 예 |
| **Apple Watch Ultra / Ultra 2** | ✅ 예 |
| **Apple Watch GPS 전용 모델** | ❌ 아니요 |

**Apple Watch 활성화 문제 수정 방법:**

1. **iPhone에서 Watch 앱 열기** > 내 Watch > 셀룰러 > 셀룰러 설정.
2. **통신사 지원 확인** – 통신사가 나열되지 않으면 Apple Watch 요금제를 추가하기 위해 연락하세요.
3. **두 기기 다시 시작** – iPhone과 Apple Watch를 모두 다시 시작한 후 다시 시도하세요.

자세한 iPad 및 Apple Watch 지침은 [iPad 및 Apple Watch eSIM 가이드](/faq/ipad-apple-watch-esim-support-guide/)를 참조하세요.


## 13. eSIM에서 데이터 로밍, 핫스팟 및 iMessage가 작동하지 않음

성공적인 활성화 후에도 특정 기능에 문제가 발생할 수 있습니다. **eSIM hotspot not working**, **eSIM iMessage not working** 및 **eSIM data roaming not working**을 수정하는 방법은 다음과 같습니다.

### 데이터 로밍이 작동하지 않음

**eSIM data roaming not working**이 있는 경우:

1. **데이터 로밍 켜기** – 설정 > 셀룰러 > [eSIM] > 데이터 로밍 (ON). 대부분의 여행 요금제에 필요합니다.
2. **APN 설정 확인** – 설정 > 셀룰러 > [eSIM] > 셀룰러 데이터 네트워크 > APN 입력.
3. **에어플레인 모드 토글** – 30초 동안 켰다 꺼서 네트워크 재등록을 강제합니다.
4. **수동 네트워크 선택** – 설정 > 셀룰러 > [eSIM] > 네트워크 선택 > 자동 끄기 > 통신사 선택.

### 핫스팟이 작동하지 않음

**eSIM hotspot not working**이 있는 경우:

1. **요금제 확인** – 일부 요금제는 핫스팟 사용을 허용하지 않습니다(특히 일부 제공업체의 "무제한" 요금제). 공정 사용 정책을 확인하세요.
2. **핫스팟 활성화** – 설정 > 개인용 핫스팟 > 다른 사람 허용 (ON).
3. **APN 확인** – 일부 통신사는 핫스팟 기능을 위해 특정 APN이 필요합니다. 제공업체에 문의하세요.
4. **변경 후 휴대폰 다시 시작**합니다.
5. **기기 이름 변경 시도** – 일부 사용자는 기기 이름 변경이 연결 문제를 해결한다고 보고합니다.

**핫스팟 문제 해결 빠른 참조:**

| 문제 | 해결 방법 |
| :--- | :--- |
| 핫스팟 옵션 없음 | 요금제가 핫스팟을 허용하지 않음 – 제공업체 확인 |
| 핫스팟 연결되지만 인터넷 없음 | APN 설정 누락 – APN 구성 |
| 핫스팟 자주 연결 끊김 | 기기 이름 변경, 두 기기 다시 시작 시도 |
| "무제한" 요금제 핫스팟 제한됨 | FUP 확인 – 일일 한도 후 자주 제한됨 |

### iMessage가 eSIM에서 작동하지 않음

**eSIM iMessage not working**이 있는 경우:

1. **iMessage 활성화 확인** – 설정 > 메시지 > iMessage (ON). "활성화 대기 중"이라고 표시되면 끄고 다시 켜보세요.
2. **전화번호 확인** – 설정 > 메시지 > 보내기 및 받기 > 번호가 선택되었는지 확인하세요.
3. **로그아웃 후 다시 로그인** – 설정 > Apple ID > 로그아웃한 후 다시 로그인하세요.
4. **휴대폰 다시 시작**합니다.
5. **Apple ID 확인** – 모든 기기에서 동일한 Apple ID에 로그인되어 있는지 확인하세요.

### Wi‑Fi 통화가 eSIM에서 작동하지 않음

요금제에서 Wi‑Fi 통화가 작동하지 않는 경우:

1. **Wi‑Fi 통화 활성화** – 설정 > 셀룰러 > [eSIM] > Wi‑Fi 통화 (ON).
2. **긴급 주소 추가** – 일부 통신사는 긴급 주소 등록을 요구합니다.
3. **통신사 지원 확인** – 모든 통신사가 디지털 SIM 프로필에서 Wi‑Fi 통화를 지원하는 것은 아닙니다.

**Wi‑Fi 통화 지원 통신사 (미국):**

| 통신사 | eSIM에서 Wi‑Fi 통화 |
| :--- | :--- |
| **Verizon** | ✅ 예 |
| **T‑Mobile** | ✅ 예 |
| **AT&T** | ✅ 예 |
| **Google Fi** | ✅ 예 |
| **US Mobile** | ✅ 예 |
| **대부분의 여행 eSIM** | ❌ 아니요 (데이터 전용) |

이러한 기능 중 하나에 지속적인 문제가 있는 경우 특정 오류 메시지와 기기 세부 정보를 제공업체 지원팀에 문의하세요. 고급 디버깅 단계는 [eSIM 문제 해결 가이드](/faq/esim-deep-troubleshooting-guide-2026/)를 참조하세요.


## 14. 빠른 참조: 오류 메시지 및 해결 방법

| 오류 메시지 | 가능한 원인 | 해결 방법 |
|---------------|--------------|----------|
| **"eSIM not supported"** / **"this eSIM is not compatible with this iPhone"** | 휴대폰에 필요한 하드웨어 없음 (중국 모델, iPhone 8/X, 또는 구형) | 물리적 SIM 사용 또는 업그레이드. [호환성 목록](/compatibility/) 확인 |
| **"eSIM not compatible iPhone"** | 위와 동일 | `*#06#` 다이얼 – EID가 없으면 하드웨어 없음 |
| **"eSIM network not available"** | 데이터 로밍 꺼짐 또는 APN 누락 | 데이터 로밍 켜기; APN 입력 |
| **"unable to activate eSIM"** | Wi‑Fi 문제 또는 서버 문제 | 다시 시작, Wi‑Fi 확인, 대기, 재시도 |
| **"your sim is not supported esim transfer"** | 통신사가 전송 허용하지 않음 | 통신사 앱으로 새 QR 코드 사용 |
| **"your sim is not supported esim transfer verizon"** | Verizon 특정 잠금 | 먼저 이전 기기에서 제거 |
| **"eSIM not transferring to new iphone"** | 이전 프로필이 여전히 활성화됨 또는 일회성 사용 | 이전 휴대폰에서 삭제; 새 QR 요청 |
| **"accidentally deleted eSIM"** | 사용자 실수 | 교체를 위해 제공업체에 문의. [문제 해결 가이드](/faq/esim-deep-troubleshooting-guide-2026/) 참조 |
| **"iphone switched to incompatible eSIM stuck boot loop"** | 손상된 프로필 | 강제 재시작 > 컴퓨터를 통한 업데이트 |
| **"esim profile expired"** | QR 코드 만료 | 새 QR 코드를 위해 제공업체에 문의 |
| **"esim qr code invalid"** | 코드 이미 사용됨 또는 만료됨 | 새 QR 코드 요청 |
| **"samsung esim not working"** | 통신사 잠금 또는 지역 변형 | 호환성 확인. [Samsung 가이드](/faq/samsung-s20-esim-compatible/) 참조 |
| **"pixel esim not supported"** | 일본 버전 또는 통신사 잠금 | 호환성 확인. [Pixel 가이드](/faq/google-pixel-6-esim-compatible/) 참조 |
| **"eSIM hotspot not working"** | 요금제 제한 또는 APN 누락 | 요금제가 핫스팟 허용하는지 확인; APN 확인 |
| **"eSIM iMessage not working"** | 활성화 대기 중 | iMessage 껐다 켜기; 보내기 및 받기 확인 |


## 15. 여전히 막혔나요? 더 깊은 도움이 필요한가요?

이 가이드는 가장 일반적인 eSIM 문제를 다룹니다. 더 고급 문제 해결(듀얼 SIM 문제, APN 디버깅, 통신사별 수정 포함)은 다음을 참조하세요:

- **[eSIM 심층 문제 해결 가이드 2026](/faq/esim-deep-troubleshooting-guide-2026/)** – 지속적인 활성화 오류 및 네트워크 디버깅용.
- **[iPhone 듀얼 eSIM이 작동하지 않나요? 12가지 수정 방법](/faq/dual-esim-not-working-12-fixes-for-iphone/)** – iPhone에서 두 개의 디지털 SIM을 동시에 사용하는 경우.
- **[iPhone과 Android 간 eSIM 전송 방법](/faq/how-to-transfer-esim-between-iphone-and-android/)** – 플랫폼 간 전송을 위한 단계별 안내.

그리고 이 기술과 호환되는 휴대폰의 전체 참조는 **[eSIM 호환 휴대폰 전체 목록(2026)](/compatibility/)**을 방문하세요.

### "모든 것을 시도했음" 최종 체크리스트

지원팀에 연락하기 전에 이 내용을 인쇄/스크린샷하세요:

| 단계 | 완료? |
| :--- | :--- |
| ✅ `*#06#`을 다이얼하고 EID가 나타나는지 확인함 | ☐ |
| ✅ 모델 번호 확인 – 중국 모델 아님 (CH/A) | ☐ |
| ✅ 통신사 잠금 확인 – "SIM 제한 없음"으로 표시됨 | ☐ |
| ✅ 최신 iOS/Android 버전으로 업데이트함 | ☐ |
| ✅ 네트워크 설정 재설정함 | ☐ |
| ✅ eSIM 회선에 대해 데이터 로밍 켜기 | ☐ |
| ✅ 수동으로 네트워크 선택함 (자동 끄기) | ☐ |
| ✅ 제공업체와 APN 설정 확인함 | ☐ |
| ✅ 다른 Wi‑Fi 네트워크에서 설치 시도함 | ☐ |
| ✅ 휴대폰을 최소 두 번 다시 시작함 | ☐ |


## 자주 묻는 질문

**iPhone XR이 작동해야 하는데 "eSIM not supported"라고 표시되는 이유는 무엇인가요?**
중국 본토 모델(모델 번호가 CH/A로 끝남)인 경우 iPhone XR에 eSIM 하드웨어가 없습니다. 또한 통신사 잠금 상태도 확인하세요.

**iPhone 7에 eSIM을 강제로 설치할 수 있나요?**
아니요. **Force eSIM iphone 7**은 불가능합니다 – eSIM 하드웨어가 없습니다. iPhone 6s, 8 및 iPhone X에도 동일하게 적용됩니다.

**실수로 eSIM을 삭제했습니다 – 어떻게 복구하나요?**
제공업체에 문의하세요. 여행 요금제는 종종 재발급 가능합니다; 통신사 요금제는 해당 앱에서 다시 다운로드할 수 있습니다. 제공업체별 복구 단계는 수정 방법 #5를 참조하세요.

**eSIM이 몇 시간 동안 "Activating"에서 멈춰 있는 이유는 무엇인가요?**
에어플레인 모드를 토글하고, 휴대폰을 다시 시작하거나, Wi‑Fi 네트워크를 전환해 보세요. 그래도 멈춰 있으면 프로필을 삭제하고(최후의 수단으로) 새 QR 코드를 요청하세요.

**"your sim is not supported esim transfer verizon"은 무엇을 의미하나요?**
Verizon은 새 기기로 전송하기 전에 이전 기기에서 프로필을 제거해야 합니다. 섹션 4의 Verizon 특정 단계를 따르세요.

**내 휴대폰이 eSIM을 지원하지 않습니다 – 그래도 여행 eSIM을 사용할 수 있나요?**
아니요 – 물리적 SIM이 필요합니다. 많은 제공업체가 물리적 SIM 카드도 판매합니다.

**eSIM 호환 휴대폰 목록은 어디에서 찾을 수 있나요?**
**[eSIM 호환 휴대폰 전체 목록(2026)](/compatibility/)**을 참조하세요 – iPhones, Samsung, Pixel, OnePlus, Motorola, Xiaomi 등을 다룹니다.

**"esim network not available verizon"이 표시되면 어떻게 해야 하나요?**
일반적으로 로밍 설정 문제입니다. 해당 회선에 대해 데이터 로밍을 켜고 다른 네트워크를 수동으로 선택해 보세요.

**iPhone에서 "esim qr code invalid"를 어떻게 수정하나요?**
제공업체에 새 QR 코드를 요청하세요. QR 코드는 30-90일 후에 만료되며 한 번 스캔하면 재사용할 수 없습니다.

**활성화 후 "esim hotspot not working"이 발생하는 이유는 무엇인가요?**
요금제가 핫스팟 사용을 허용하는지 확인하세요. 일부 여행 요금제는 핫스팟 공유를 제한합니다. 또한 APN 설정을 확인하고 휴대폰을 다시 시작하세요.

**Samsung 기기에서 "esim not working android"가 발생하는 원인은 무엇인가요?**
일반적인 원인으로는 통신사 잠금 기기, 지역 변형(미국 통신사 버전 등) 또는 오래된 Android 버전이 있습니다. EID 존재 여부를 `*#06#`으로 확인하세요.

**활성화 후 "esim iMessage not working"이 발생하는 이유는 무엇인가요?**
iMessage를 다시 활성화해야 할 수 있습니다. 설정 > 메시지로 이동하여 iMessage를 껐다 켜세요. 또한 보내기 및 받기에서 전화번호가 선택되었는지 확인하세요.

**"esim profile expired"는 무엇을 의미하며 어떻게 수정하나요?**
QR 코드의 유효 기간(보통 30-90일)이 지났습니다. 새 QR 코드를 요청하려면 제공업체에 문의하세요.

**셀룰러 iPad에서 "esim not working ipad"가 발생하면 어떻게 해야 하나요?**
통신사 잠금 상태를 확인하고 iPad를 다시 시작하며 셀룰러 모델인지 확인하세요. Wi‑Fi 전용 iPad는 이 기술을 지원하지 않습니다.

**iPhone에서 "esim data roaming not working"을 어떻게 수정하나요?**
데이터 로밍이 켜져 있고, APN 설정이 올바르며, 자동 선택이 실패할 경우 수동으로 네트워크를 선택했는지 확인하세요.

**EID와 IMEI의 차이점은 무엇인가요?**
IMEI는 휴대폰 모델을 식별합니다(모든 휴대폰에 있음). EID는 eSIM 하드웨어를 식별합니다(eSIM 휴대폰만 있음). `*#06#`을 다이얼했을 때 EID가 보이지 않으면 휴대폰이 eSIM을 지원하지 않는 것입니다.

**Samsung Galaxy에 eSIM이 있는지 어떻게 알 수 있나요?**
`*#06#`을 다이얼하세요 – EID가 나타나면 Samsung이 지원하는 것입니다. 또한 설정 > 연결 > SIM 카드 관리자에서 "eSIM 추가" 옵션을 확인하세요.

**"SM‑DP+ 주소"란 무엇이며 왜 필요한가요?**
SM‑DP+(구독 관리자 데이터 준비) 주소는 통신사 프로필을 전달하는 서버입니다. 대부분의 사용자는 이를 알 필요가 없습니다 – QR 코드를 스캔하면 자동으로 입력됩니다. 수동으로 세부 정보를 입력하는 경우 제공업체의 SM‑DP+ 주소와 활성화 코드가 필요합니다.

**어떤 iPad 모델이 eSIM을 지원하나요?**
iPad Pro(3세대 이상), iPad Air(3세대 이상), iPad(10세대 이상), iPad mini(6세대 이상). 셀룰러 모델만 – Wi‑Fi 전용 iPad에는 필요한 하드웨어가 없습니다.

**OnePlus 11이 eSIM을 지원하나요?**
아니요. OnePlus는 OnePlus 12부터 지원을 추가했습니다. 이전 모델(OnePlus 11, 10, 9, Nord 시리즈)에는 필요한 하드웨어가 없습니다.

**`*#06#`을 다이얼했을 때 "EID not found"는 무엇을 의미하나요?**
휴대폰에 디지털 SIM 프로필에 필요한 eUICC 하드웨어 칩이 없다는 의미입니다. 어떤 소프트웨어 업데이트도 이를 수정할 수 없습니다 – 하드웨어 제한입니다.

**활성화 후 eSIM이 연결될 때까지 얼마나 기다려야 하나요?**
대부분의 휴대폰은 2-5분 내에 연결됩니다. 15분 이상 걸리면 데이터 로밍, APN 설정을 확인하고 수동 네트워크 선택을 시도하세요. 자세한 문제 해결은 수정 방법 #3을 참조하세요.


## 무료 eSIM으로 수정 방법 테스트하기

eSIM 문제가 해결되었는지 확인하는 가장 좋은 방법은 **무료 평가판 eSIM**을 설치하는 것입니다. 비용이 들지 않고 2분이 소요되며, 성공적으로 활성화되면 휴대폰이 모든 eSIM에 대해 준비된 것입니다.

👉 [**지금 무료 Roami eSIM 받기**](/free-esim/)

---

*우리는 실제 문제 해결에 집중합니다. 특정 오류가 다루어지지 않은 경우 저희에게 연락하시면 도와드리겠습니다.*

## 출처

- [GSMA — eSIM (SGP.22) 사양](https://www.gsma.com/esim/)
- [Apple Support — iPhone의 eSIM](https://support.apple.com/en-us/108072)
- [Google Support — eSIM 설정하기](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)