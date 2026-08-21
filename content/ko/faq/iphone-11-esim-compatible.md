---
title: "iPhone eSIM: 전체 호환성 및 설정 가이드"
h1_title: "iPhone eSIM 호환성 및 설정 완전 가이드"
description: "iPhone eSIM 호환성(EID 방법) 및 설정 단계를 확인하세요. 듀얼 SIM, iPhone 13+ 기능 및 중국/미국 모델 차이점을 다룹니다. 표 포함."
keywords: ["iphone esim", "esim iphone", "which iphones support esim", "iphone esim compatible", "does iphone 11 have esim", "iphone esim only", "iphone dual esim", "first iphone with esim", "iphones with esim", "iphone esim setup", "iphone 16e esim", "iphone 17 esim", "how to transfer esim to new iphone"]
date: 2026-06-23T10:00:00Z
lastmod: 2026-08-20T00:00:00Z
tags: ["iPhone", "eSIM", "듀얼 SIM", "활성화", "호환성"]
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
    text: "eSIM 호환성"
    url: "/compatibility/"

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
  title: "무료 eSIM 받기"
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
    - question: "iPhone(모든 모델)에서 eSIM을 활성화하는 방법은?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "최신 eSIM 호환성 목록"
      url: "/compatibility/"
    - question: "iPhone에서 듀얼 SIM(물리적 + eSIM)을 사용하는 방법은?"
      url: "/faq/dual-esim-not-working-12-fixes-for-iphone/"
---


> **편집자 주:** Roami는 500,000명 이상의 여행객에게 서비스를 제공한 미국 기반 eSIM 제공업체입니다. 이 가이드는 Apple의 공식 문서, GSMA 표준 및 당사 지원 팀의 실제 활성화 데이터를 기반으로 합니다. 모든 호환성 정보는 2026년 8월 기준으로 확인되었습니다.


## 10초 빠른 eSIM 진단 – iPhone 모델 찾기, 답변 얻기

**iPhone이 eSIM을 지원하는지 확실하지 않나요? 아래에서 모델을 찾고 즉시 답변을 확인하세요.**

| iPhone 모델 | eSIM 지원 | 빠른 답변 |
| :--- | :--- | :--- |
| **iPhone 8, 8 Plus, iPhone X** | ❌ 아니요 | 물리적 SIM 전용 – eSIM 하드웨어 없음. [대안으로 건너뛰기](#어떤-iphone이-esim을-지원하나요--빠른-답변) |
| **iPhone XR, XS, XS Max** | ✅ 예 | eSIM이 탑재된 첫 번째 iPhone. 물리적 SIM + eSIM. |
| **iPhone 11, 11 Pro, 11 Pro Max** | ✅ 예 | 물리적 SIM + eSIM. ⚠️ 중국 모델 = eSIM 없음. |
| **iPhone SE(2세대 또는 3세대)** | ✅ 예 | 물리적 SIM + eSIM. 예산 eSIM 옵션. |
| **iPhone 12, 12 mini, 12 Pro, 12 Pro Max** | ✅ 예 | 물리적 SIM + eSIM. 최초 5G + eSIM. |
| **iPhone 13, 13 mini, 13 Pro, 13 Pro Max** | ✅ 예 | 물리적 SIM + eSIM 또는 듀얼 eSIM. 최초 듀얼 eSIM 지원. |
| **iPhone 14, 14 Plus, 14 Pro, 14 Pro Max** | ✅ 예 | 미국 = eSIM 전용. 글로벌 = 물리적 + eSIM. |
| **iPhone 15, 15 Plus, 15 Pro, 15 Pro Max** | ✅ 예 | 미국 = eSIM 전용. 글로벌 = 물리적 + eSIM. |
| **iPhone 16, 16 Plus, 16 Pro, 16 Pro Max** | ✅ 예 | 미국 = eSIM 전용. 글로벌 = 물리적 + eSIM. |
| **iPhone 16e** | ✅ 예 | 새 예산 모델 – eSIM 지원. 물리적 SIM은 지역 확인. |
| **iPhone 17, 17 Pro, 17 Pro Max, 17 Air** | ✅ 예 | 미국 = eSIM 전용. 글로벌 = 물리적 + eSIM(예상). |
| **확실하지 않음 – 휴대폰 확인만** | `*#06#` 누르기 – EID 찾기 | [iPhone 확인 방법](#iphone에-esim이-있는지-확인하는-방법-3가지-방법) |


## 전체 iPhone eSIM 여정 – "작동하나요?"에서 "연결되었습니다"까지

대부분의 사용자가 iPhone에서 eSIM을 설정할 때 따르는 경로입니다.

| 단계 | 작업 내용 | 찾을 위치 |
| :--- | :--- | :--- |
| **1. 기기 호환성 확인** | 특정 iPhone 모델에 eSIM 하드웨어가 있는지 확인. | [빠른 진단](#10초-빠른-esim-진단--iphone-모델-찾기-답변-얻기) |
| **2. 지역 및 통신사 잠금 확인** | 중국 모델? 통신사 잠금? | [지역별 차이](#지역별-차이-중국-홍콩-미국-및-글로벌--iphone-esim-변형) |
| **3. EID 찾기** | eSIM 하드웨어가 있는지 확인. | [확인 방법](#iphone에-esim이-있는지-확인하는-방법-3가지-방법) |
| **4. eSIM 활성화** | QR 코드 스캔 또는 통신사 앱 사용. | [활성화 단계](#iphone에서-esim-활성화-방법-단계별) |
| **5. 듀얼 SIM 설정** | 물리적 + eSIM 또는 듀얼 eSIM. | [물리적 SIM과 eSIM 함께 사용](#물리적-sim과-esim-함께-사용-듀얼-sim) |
| **6. 필요 시 문제 해결** | 신호 없음? 활성화 실패? | [문제 해결](#일반적인-iphone-esim-문제-해결) |


## 어떤 iPhone이 eSIM을 지원하나요? – 빠른 답변

**eSIM은 2018년 모델인 iPhone XR, XS 및 XS Max와 함께 iPhone에 도입되었습니다. 모든 이후 iPhone(11, 12, 13, 14, 15, 16, 17 및 SE 2/3세대)도 eSIM을 지원합니다 – 단 하나의 주요 지역 예외: 중국 본토 모델(일부 경우 홍콩 포함)은 eSIM이 없거나 듀얼 물리적 SIM 슬롯을 가지고 있습니다.**

- **iPhone XR, XS, XS Max (2018):** ✅ eSIM이 탑재된 첫 번째 iPhone
- **iPhone 11, 11 Pro, 11 Pro Max:** ✅ 완전한 eSIM 지원(중국 본토: 듀얼 물리적 SIM, eSIM 없음)
- **iPhone SE(2세대 2020, 3세대 2022):** ✅ eSIM 지원
- **iPhone 12, 12 mini, 12 Pro, 12 Pro Max:** ✅ eSIM + 최초 5G 지원
- **iPhone 13, 13 mini, 13 Pro, 13 Pro Max:** ✅ eSIM + 개선된 듀얼 eSIM 기능
- **iPhone 14, 14 Plus, 14 Pro, 14 Pro Max:** ✅ 미국 모델은 **eSIM 전용**(물리적 SIM 트레이 없음); 기타 지역은 물리적 SIM + eSIM
- **iPhone 15, 15 Plus, 15 Pro, 15 Pro Max:** ✅ iPhone 14와 동일 – 미국 eSIM 전용, 글로벌 물리적 SIM + eSIM
- **iPhone 16, 16 Plus, 16 Pro, 16 Pro Max:** ✅ eSIM 지원 계속; 미국은 eSIM 전용 유지
- **iPhone 16e:** ✅ 새 예산 모델 – eSIM 지원(물리적 SIM은 지역에 따라 다름)
- **iPhone 17, 17 Pro, 17 Pro Max, 17 Air:** ✅ 완전한 eSIM 지원 예상; 미국 모델은 eSIM 전용 가능성 높음

> **iPhone 8, 8 Plus 및 iPhone X(2017)은 eSIM을 지원하지 않습니다** – 물리적 SIM만 사용합니다. 이 중 하나를 소유한 경우 eSIM 서비스를 사용할 수 없습니다.

[공식 Apple eSIM 지원 페이지](https://support.apple.com/en-us/108072)는 호환 모델에 대한 추가 세부 정보를 제공합니다. eSIM의 배후 기술은 [GSMA 표준 SGP.22](https://www.gsma.com/esim/)에 의해 관리되어 기기와 통신사 간 글로벌 상호 운용성을 보장합니다.

모든 브랜드의 **eSIM 호환 휴대폰** 전체 목록은 **[전체 호환성 목록](/compatibility/)**을 참조하세요.


## 전체 iPhone eSIM 호환성 표 – iPhone 8에서 iPhone 17까지

| iPhone 모델 | eSIM 지원 | 듀얼 SIM 유형 | 물리적 SIM 슬롯 | 참고 |
| :--- | :--- | :--- | :--- | :--- |
| iPhone 8, 8 Plus, iPhone X | ❌ 아니요 | 물리적 SIM 전용 | ✅ 예 | eSIM 하드웨어 없음 |
| **iPhone XR, XS, XS Max** | ✅ 예 | 물리적 + eSIM | ✅ 예 | eSIM이 탑재된 첫 번째 iPhone |
| **iPhone 11, 11 Pro, 11 Pro Max** | ✅ 예 | 물리적 + eSIM | ✅ 예 | 중국 본토: 듀얼 물리적 SIM |
| **iPhone SE(2세대 및 3세대)** | ✅ 예 | 물리적 + eSIM | ✅ 예 | 예산 eSIM 옵션 |
| **iPhone 12, 12 mini, 12 Pro, 12 Pro Max** | ✅ 예 | 물리적 + eSIM | ✅ 예 | 최초 5G eSIM iPhone |
| **iPhone 13, 13 mini, 13 Pro, 13 Pro Max** | ✅ 예 | 물리적 + eSIM(또는 듀얼 eSIM) | ✅ 예 | **듀얼 eSIM**(두 개의 활성 eSIM) 지원 |
| **iPhone 14, 14 Plus, 14 Pro, 14 Pro Max** | ✅ 예 | 미국: eSIM 전용; 글로벌: 물리적 + eSIM | 미국: ❌ 아니요; 글로벌: ✅ 예 | 미국에서 **iPhone 14 eSIM 전용** |
| **iPhone 15, 15 Plus, 15 Pro, 15 Pro Max** | ✅ 예 | 미국: eSIM 전용; 글로벌: 물리적 + eSIM | 미국: ❌ 아니요; 글로벌: ✅ 예 | **iPhone 15 eSIM 또는 물리적 SIM**은 지역에 따라 다름 |
| **iPhone 16, 16 Plus, 16 Pro, 16 Pro Max** | ✅ 예 | 미국: eSIM 전용; 글로벌: 물리적 + eSIM | 미국: ❌ 아니요; 글로벌: ✅ 예 | 미국에서 **iPhone 16 eSIM 전용** |
| **iPhone 16e** | ✅ 예 | 미국: eSIM 전용; 글로벌: 물리적 + eSIM | 미국: ❌ 아니요; 글로벌: ✅ 예 | 새 예산 모델 – 완전한 eSIM 지원 |
| **iPhone 17, 17 Pro, 17 Pro Max, 17 Air** | ✅ 예 | 미국: eSIM 전용; 글로벌: 물리적 + eSIM(예상) | 미국: ❌ 아니요(예상); 글로벌: ✅ 예(예상) | **iPhone 17 eSIM** – 최신 세대 |


## iPhone은 언제부터 eSIM을 사용하기 시작했나요? – 연대표

- **2017년 및 이전(iPhone 8, X 등)** – eSIM 없음. 물리적 SIM 전용.
- **2018년(iPhone XR, XS, XS Max)** – 최초 eSIM iPhone. 듀얼 SIM: 하나의 물리적 nano-SIM + 하나의 eSIM.
- **2019년(iPhone 11 시리즈)** – 2018년 모델과 동일한 eSIM 기능; 중국 본토는 대신 듀얼 물리적 SIM.
- **2020년(iPhone SE 2세대, iPhone 12 시리즈)** – eSIM 계속; iPhone 12는 eSIM에 5G 추가.
- **2021년(iPhone 13 시리즈)** – 일부 통신사에서 **두 개의 활성 eSIM**(듀얼 eSIM) 최초 지원.
- **2022년(iPhone SE 3세대, iPhone 14 시리즈)** – 미국 모델이 **eSIM 전용**(물리적 SIM 트레이 없음) 됨.
- **2023년(iPhone 15 시리즈)** – 미국은 eSIM 전용 계속; 글로벌은 물리적 SIM + eSIM 유지.
- **2024년(iPhone 16 시리즈)** – iPhone 15와 동일; **iPhone 16e**가 예산 eSIM 모델로 도입됨.
- **2025년(iPhone 17 시리즈)** – 동일한 지역 구분을 계속할 것으로 예상.

따라서 **eSIM이 탑재된 최초의 iPhone**은 2018년 9월의 iPhone XR/XS입니다. **iPhone이 eSIM을 사용하기 시작한 시기**입니다.


## iPhone에 eSIM이 있는지 확인하는 방법(3가지 방법)

### 방법 1: `*#06#` 누르기(보편적, 설정 불필요)
1. 전화 앱을 엽니다.
2. `*#06#`을 누르고 통화 버튼을 누릅니다.
3. **32자리 EID**(Embedded Identity Document – 휴대폰의 eSIM 일련번호로 생각)를 찾으세요. 있으면 iPhone에 eSIM 하드웨어가 있는 것입니다.
4. IMEI 번호(IMEI1, IMEI2)만 보이고 EID가 없으면 기기에 eSIM이 없는 것입니다(중국 본토 모델 또는 XR보다 오래된 iPhone에서 일반적).

### 방법 2: 설정에서 확인
**설정 > 일반 > 정보**로 이동하세요. 아래로 스크롤하세요. **"사용 가능한 SIM"** 또는 **"디지털 SIM"**에 **EID** 번호가 보이면 eSIM이 있는 것입니다.

### 방법 3: 셀룰러 요금제 추가 시도
**설정 > 셀룰러 > 셀룰러 요금제 추가**로 이동하세요. 옵션이 보이고 탭할 수 있으면 휴대폰이 eSIM을 지원하는 것입니다. 회색으로 표시되거나 없으면 eSIM이 없는 것입니다.

### 찾아야 할 사항 – 빠른 참조

| 보이는 것 | 의미 |
| :--- | :--- |
| **EID(32자리) + IMEI** | ✅ iPhone에 eSIM 하드웨어가 있음 |
| **IMEI만( EID 없음)** | ❌ eSIM 없음 – 물리적 SIM 전용 |
| **"셀룰러 요금제 추가"가 보임** | ✅ eSIM을 사용할 수 있음 |
| **"셀룰러 요금제 추가"가 회색/없음** | ❌ eSIM 없음 또는 통신사 잠금 |


## iPhone 세대별 상세 분석

### iPhone 8, 8 Plus, iPhone X(2017)
이 모델들은 eSIM 하드웨어가 전혀 없습니다. **iPhone 8 또는 iPhone X**를 소유한 경우 eSIM을 사용할 수 없습니다 – 물리적 SIM 전용. **iPhone 7 이하**도 마찬가지입니다.

### iPhone XR, XS, XS Max(2018)
**iPhone XR, XS 및 XS Max**는 eSIM을 지원하는 최초의 iPhone입니다. 세 모델 모두 하나의 물리적 SIM과 하나의 eSIM을 동시에(듀얼 SIM 듀얼 스탠바이) 사용할 수 있습니다. 5G를 지원하지 않습니다.

### iPhone 11, 11 Pro, 11 Pro Max(2019)
**iPhone 11 시리즈**(Pro 및 Pro Max 포함)는 전 세계적으로 eSIM을 지원합니다. 그러나 중국 본토 버전은 듀얼 물리적 SIM 슬롯이 있고 eSIM이 없습니다. 글로벌 **iPhone 11**이 있으면 4G LTE 데이터에 eSIM을 사용할 수 있습니다.

### iPhone SE(2세대 2020, 3세대 2022)
**iPhone SE**의 두 세대 모두 eSIM을 지원합니다. 플래그십 모델과 동일한 eSIM 기능을 더 낮은 가격에 제공하는 eSIM 사용자에게 훌륭한 예산 옵션입니다.

### iPhone 12 시리즈(2020)
**iPhone 12, 12 mini, 12 Pro 및 12 Pro Max** 모두 eSIM을 지원합니다. eSIM에서 5G 연결을 제공한 최초의 iPhone이었습니다. 듀얼 SIM은 하나의 물리적 SIM + 하나의 eSIM으로 작동합니다.

### iPhone 13 시리즈(2021)
**iPhone 13 시리즈**(mini, Pro, Pro Max 포함)는 eSIM을 지원하고 **듀얼 eSIM** 기능을 도입합니다 – 두 개의 활성 eSIM을 동시에 가질 수 있습니다(물리적 SIM 불필요). **iPhone 13 듀얼 eSIM**이 표준 기능이 된 첫 번째 세대이기도 합니다.

### iPhone 14 시리즈(2022)
모든 **iPhone 14 모델**은 eSIM을 지원하지만 큰 변화가 있습니다: 미국 모델은 **eSIM 전용**입니다 – 물리적 SIM 트레이가 없습니다. 글로벌 모델은 여전히 물리적 SIM 슬롯과 eSIM을 제공합니다. **iPhone 14 eSIM 전용**은 미국 고객의 현실입니다.

### iPhone 15 시리즈(2023)
**iPhone 15 시리즈**는 동일한 지역 구분을 따릅니다: 미국 모델은 eSIM 전용; 글로벌 모델은 물리적 SIM + eSIM. 따라서 **iPhone 15 eSIM 또는 물리적 SIM**은 구매 위치에 전적으로 의존합니다.

### iPhone 16 시리즈(2024)
**iPhone 16 시리즈**는 동일한 패턴을 계속합니다. 미국 모델은 **iPhone 16 eSIM 전용**입니다; 국제 버전은 물리적 SIM 슬롯을 유지합니다. **iPhone 16 듀얼 eSIM**은 라인업 전체에 걸쳐 표준입니다.

### iPhone 16e(2025)
**iPhone 16e**는 기본 iPhone 16 라인업 아래에 위치한 Apple의 새 예산 모델입니다. 모든 모델에서 eSIM을 지원합니다 – 미국 버전은 eSIM 전용이며, 글로벌 버전은 eSIM과 함께 물리적 SIM 슬롯을 유지합니다.

### iPhone 17 시리즈(2025)
**iPhone 17 시리즈**(17, 17 Pro, 17 Pro Max 및 17 Air 포함)는 iPhone 14부터 확립된 동일한 지역 구분을 계속합니다. 미국 모델은 eSIM 전용일 것으로 예상되며, 글로벌 모델은 물리적 SIM + eSIM을 유지합니다.


## iPhone에서 eSIM 활성화 방법(단계별)

모든 iPhone 모델에 대한 완전한 활성화 세부 정보는 **[iPhone eSIM 활성화 가이드](/faq/how-to-activate-esim-on-iphone/)**를 참조하세요.

### 여행 eSIM 활성화(가장 일반적)
1. 여행 eSIM 요금제 구매 – 예: [Roami 무료 체험 eSIM](/free-esim/).
2. 여행 전에(Wi-Fi 연결 상태) **설정 > 셀룰러 > 셀룰러 요금제 추가**로 이동.
3. QR 코드를 스캔하거나 활성화 코드를 수동으로 입력하세요.
4. 요금제에 레이블 지정(예: "일본 5월").
5. 음성, 데이터 및 iMessage에 사용할 기본 회선을 선택하세요.
6. 목적지에서 **설정 > 셀룰러 > [eSIM 요금제]**로 이동하여 **데이터 로밍**을 켜기.

**iOS 18 팁:** iOS 18을 사용 중인 경우 "셀룰러 요금제 추가" 인터페이스가 더 눈에 띄는 QR 스캐너와 더 원활한 활성화 흐름으로 재설계되었습니다. 프로필 다운로드 중 진행 표시기가 표시됩니다.

### 통신사 eSIM 활성화(예: Verizon, T-Mobile, AT&T, Jio)

| 통신사 | 활성화 방법 |
| :--- | :--- |
| **Verizon** | My Verizon 앱 → 계정 → 기기 → eSIM 활성화 |
| **T-Mobile** | T-Mobile 앱 → 계정 → 회선 세부 정보 → eSIM으로 전환 |
| **AT&T** | AT&T 앱 → 계정 → 무선 → 기기 관리 → 새 eSIM 받기 |
| **Google Fi** | Fi 앱 → 요금제 관리 → 새 eSIM 받기 |
| **Jio(인도)** | Jio 매장 방문하여 대면 확인 및 QR 코드 받기 |
| **Airtel(인도)** | Airtel 앱 → eSIM 요청 → QR 코드 스캔 |
| **O2(영국)** | My O2 앱 → 기기 설정 → eSIM 받기 |
| **EE(영국)** | EE 앱 → 기기 관리 → eSIM |
| **Vodafone(글로벌)** | Vodafone 앱 → 계정 → eSIM → QR 코드 받기 |

> 다른 통신사의 eSIM을 사용하려면 iPhone이 **통신사 잠금 해제**되어 있어야 합니다. 설정 > 일반 > 정보 > 통신사 잠금 확인 – "SIM 제한 없음"이라고 표시되어야 합니다.

### 활성화 멈춤? 빠른 해결책

| 증상 | 빠른 해결책 |
| :--- | :--- |
| **QR 코드가 스캔되지 않음** | "세부 정보 수동 입력" 탭 – 이메일에서 SM-DP+ 주소와 활성화 코드 입력 |
| **5분 이상 "활성화 중…"으로 멈춤** | 비행기 모드 켜기/끄기 – 네트워크 스택 재시작 |
| **"셀룰러 요금제를 추가할 수 없음"** | 사용하지 않는 eSIM 프로필 삭제(설정 > 셀룰러) – 저장된 프로필이 너무 많음 |
| **QR 코드에 "유효하지 않음" 또는 "만료됨"** | 제공업체에 새 QR 코드 요청 – 코드는 30-90일 후 만료됨 |
| **"eSIM을 활성화할 수 없음"** | Wi-Fi 네트워크 전환 – 불안정한 Wi-Fi가 활성화 실패를 유발함 |


## iPhone은 몇 개의 eSIM 프로필을 저장할 수 있나요?

iPhone은 한 번에 **최대 8개의 eSIM 프로필**을 저장할 수 있지만, 정확한 수는 iPhone 모델 및 iOS 버전에 따라 다릅니다.

| iPhone 모델 | 최대 저장 eSIM 프로필 | 동시 활성 |
| :--- | :--- | :--- |
| **iPhone XR, XS, XS Max** | ~5 | 1(물리적 SIM 추가) |
| **iPhone 11 시리즈** | ~5 | 1(물리적 SIM 추가) |
| **iPhone SE(2/3세대)** | ~5 | 1(물리적 SIM 추가) |
| **iPhone 12 시리즈** | ~8 | 1(물리적 SIM 추가) |
| **iPhone 13 시리즈 이상** | ~8 | 2(듀얼 eSIM) |
| **iPhone 14–17(미국 eSIM 전용)** | ~8 | 2(듀얼 eSIM 전용 – 물리적 SIM 없음) |

### 여러 eSIM 프로필 관리 방법
- **사용하지 않는 프로필 삭제:** 설정 > 셀룰러 > 요금제 탭 > 셀룰러 요금제 제거. 이렇게 하면 새 프로필을 위한 저장 공간이 확보됩니다.
- **저장된 eSIM 간 전환:** 설정 > 셀룰러 > 원하는 요금제 탭 > 이 회선 켜기.
- **프로필 이름 변경:** 설정 > 셀룰러 > 요금제 탭 > 셀룰러 요금제 레이블 – 사용자 지정 이름 선택(예: "일본 여행").


## 물리적 SIM과 eSIM 함께 사용(듀얼 SIM)

XR부터 13까지의 모든 iPhone(및 글로벌 14-17)은 **하나의 물리적 SIM + 하나의 eSIM**을 동시에 활성화할 수 있습니다. 미국 eSIM 전용 모델(14-17)은 대신 **듀얼 eSIM**을 사용합니다.

### 듀얼 SIM 설정 방법
1. 물리적 SIM을 삽입하거나(또는 첫 번째 eSIM 활성화).
2. **설정 > 셀룰러 > 셀룰러 요금제 추가**를 통해 두 번째 eSIM 추가.
3. **설정 > 셀룰러**에서 할당:
   - **기본 음성 회선** – 통화를 거는 회선
   - **기본 데이터 회선** – 모바일 인터넷을 사용하는 회선
   - **셀룰러 데이터 전환 허용** – 기본 데이터 회선이 신호를 잃을 경우 자동 전환 허용(해외에서 로밍 요금을 피하기 위해 주의해서 사용)

### 듀얼 SIM 구성 – 여행용 권장 설정

| 설정 | 권장 값 | 이유 |
| :--- | :--- | :--- |
| **기본 음성 회선** | 홈 SIM(정기 번호) | 홈 번호로 계속 전화 받기 |
| **셀룰러 데이터** | 여행 eSIM | 비싼 로밍이 아닌 현지 데이터 요금제 사용 |
| **데이터 로밍(홈 SIM)** | 끄기 | 우발적 로밍 요금 방지 |
| **데이터 로밍(여행 eSIM)** | 켜기 | 여행 eSIM이 작동하는 데 필요 |
| **셀룰러 데이터 전환 허용** | 켜기 | Wi-Fi 통화를 위해 홈 SIM이 여행 eSIM 데이터를 사용하도록 허용 |

### 예: 미국에서 일본으로 여행
- 통화/SMS용 미국 물리적 SIM(또는 홈 eSIM) 유지.
- 데이터용 일본 여행 eSIM 구매.
- 일본 eSIM을 **기본 데이터 회선**으로 설정하고 해당 회선의 **데이터 로밍** 켜기.


## eSIM vs 물리적 SIM – iPhone에서 어떤 것이 더 좋을까요?

| 기능 | eSIM | 물리적 SIM |
| :--- | :--- | :--- |
| **통신사 전환** | 즉시 – QR 코드 스캔 | 물리적 카드 교체 필요 |
| **여행** | 도착 전 현지 요금제 구매 | 공항에서 물리적 SIM 구매 |
| **보안** | 물리적으로 도난 불가 | 제거/도난 가능 |
| **듀얼 SIM** | 두 개의 eSIM 활성(iPhone 13+) | 하나의 물리적 + 하나의 eSIM |
| **휴대폰 분실** | 통신사가 원격 비활성화 가능 | 누구나 제거하고 SIM 사용 가능 |
| **활성화 시간** | 2-5분 | 5-10분 + 매장 방문 |
| **기기 호환성** | eSIM 호환 iPhone 필요 | 모든 휴대폰에서 작동 |
| **통신사 잠금** | 하나의 통신사에 잠길 수 있음 | 하나의 통신사에 잠길 수 있음 |

**평결:** eSIM은 여행 및 일상 사용에 더 편리하고 안전합니다. 물리적 SIM은 호환되지 않는 기기 간 자주 교체하거나 eSIM 지원이 제한된 지역(중국 등)으로 여행할 때 백업이 필요한 경우에만 더 좋습니다.


## 지역별 차이: 중국, 홍콩, 미국 및 글로벌 – iPhone eSIM 변형

- **중국 본토 모델**(모델 번호가 CH/A로 끝남): eSIM 없음 – 대신 듀얼 물리적 SIM.
- **홍콩 및 마카오 모델**: 일반적으로 물리적 SIM + eSIM(글로벌과 동일).
- **미국 모델(iPhone 14–17)**: eSIM 전용 – 물리적 SIM 트레이 없음.
- **글로벌 모델(유럽, 아시아 비중국 등)**: 물리적 SIM + eSIM.

| 지역 | 모델 접미사 | 물리적 SIM | eSIM | 참고 |
| :--- | :--- | :--- | :--- | :--- |
| **중국 본토** | CH/A | 2개의 물리적 SIM | ❌ 아니요 | eSIM 하드웨어 전혀 없음 |
| **홍콩** | HK/A | 1개의 물리적 SIM | ✅ 예 | 글로벌과 동일 |
| **마카오** | ZP/A | 1개의 물리적 SIM | ✅ 예 | 글로벌과 동일 |
| **미국** | LL/A | ❌ 아니요(14+) | ✅ 예 | iPhone 14부터 eSIM 전용 |
| **캐나다** | VC/A | 1개의 물리적 SIM | ✅ 예 | 글로벌과 동일 |
| **영국/유럽** | B/A | 1개의 물리적 SIM | ✅ 예 | 글로벌과 동일 |
| **일본** | J/A | 1개의 물리적 SIM | ✅ 예 | 글로벌과 동일 |
| **호주/뉴질랜드** | X/A | 1개의 물리적 SIM | ✅ 예 | 글로벌과 동일 |

자주 여행하는 경우 **글로벌 버전**(물리적 + eSIM)이 미국 eSIM 전용 모델보다 더 많은 유연성을 제공합니다.


## 특수 사례: eSIM 전용 iPhone(미국 모델 14–17)

### "eSIM 전용"의 의미
- 물리적 SIM 슬롯 없음.
- 셀룰러를 사용하려면 최소 하나의 eSIM을 활성화해야 함.
- 듀얼 SIM은 두 개의 eSIM(듀얼 eSIM)으로 작동.

### eSIM 전용 iPhone 초기 설정
- 설정 중 이전 iPhone에서 eSIM 전송.
- 또는 통신사 앱을 통해 활성화.
- 또는 건너뛰고 나중에 **설정 > 셀룰러 > 셀룰러 요금제 추가**를 통해 추가.

### eSIM 전용 iPhone으로 여행
- 출발 전 여행 eSIM 설치(Wi-Fi 연결 상태).
- 목적지에서 여행 eSIM을 **기본 데이터 회선**으로 설정하고 **데이터 로밍** 켜기.
- 홈 eSIM을 통화용으로 활성 상태 유지(단, 수신 시 로밍 요금 주의).

### eSIM 전용 iPhone이 해외에서 고장 나면 어떻게 하나요?
백업으로 물리적 SIM을 삽입할 수 없습니다. 옵션:
- 온라인 구매를 지원하는 현지 통신사에서 새 eSIM 구매.
- Wi-Fi만 사용.
- 이메일에 백업 eSIM QR 코드 보관.
- 백업으로 물리적 SIM 슬롯이 있는 보조 기기(구형 휴대폰) 휴대.

### 이전 iPhone에서 새 iPhone으로 eSIM 전송 방법

**방법 1: 빠른 전송(iOS 16+)**
1. 새 iPhone 설정 중 **"근처 iPhone에서 eSIM 전송"** 선택.
2. 두 휴대폰을 가까이 두고 Wi-Fi에 연결하며 동일한 Apple ID에 로그인.
3. 화면의 지시를 따르기 – eSIM이 자동으로 전송됨.

**방법 2: 통신사 앱 전송**
1. 새 iPhone에서 통신사 앱 다운로드.
2. 로그인하고 "eSIM 활성화" 또는 "eSIM 전송" 찾기.
3. 통신사별 흐름 따르기.

**방법 3: 삭제 및 재설치(최후의 수단)**
1. 이전 휴대폰에서: 설정 > 셀룰러 > eSIM 탭 > 셀룰러 요금제 제거.
2. 새 휴대폰에서: 설정 > 셀룰러 > 셀룰러 요금제 추가 > 원본 QR 코드 스캔(또는 통신사 앱 사용).
3. ⚠️ 경고: 여행 eSIM은 일반적으로 재설치할 수 없음 – 먼저 제공업체에 문의.

**방법 4: 물리적 SIM 전환(물리적 SIM이 있는 경우)**
1. 새 휴대폰에서: 설정 > 셀룰러 > 셀룰러 요금제 추가 > **"물리적 SIM에서 전환"**.
2. 지시 따르기 – 이렇게 하면 물리적 SIM이 새 기기에서 eSIM으로 전환됨.
3. 물리적 SIM은 전환 후 비활성화됨.

> 💡 **프로 팁:** 원본 eSIM QR 코드 또는 활성화 이메일을 항상 안전한 곳(클라우드 저장소, 암호 관리자)에 보관하세요. 전송 중 문제가 발생하면 백업이 있습니다.


## eSIM 여행용 중고 iPhone 구매

| 모델 | 추천 이유 | 대략적인 중고 가격(USD) |
| :--- | :--- | :--- |
| **iPhone SE(3세대)** | 저렴, 5G, 완전한 eSIM | $200–280 |
| **iPhone 13** | 듀얼 eSIM, 배터리 좋음 | $350–450 |
| **iPhone 12** | 가장 저렴한 5G + eSIM | $250–350 |
| **iPhone 11** | 매우 저렴, 4G 전용 | $150–250 |
| **iPhone XR** | 가장 저렴한 eSIM iPhone | $100–150 |

### 피해야 할 것
- 중국 본토 모델(CH/A) – eSIM 없음.
- iPhone 8, X – eSIM 전혀 없음.
- 통신사 잠금 iPhone – 여행 eSIM에 위험.
- 백업 휴대폰으로 미국 eSIM 전용 모델(물리적 SIM 슬롯 없음).

### 구매 전 대면 확인 체크리스트

| 단계 | 확인할 사항 |
| :--- | :--- |
| **1** | `*#06#` 누르기 – **EID**가 나타나는지 확인(IMEI만이 아님) |
| **2** | 설정 > 일반 > 정보 – **모델 번호** 확인(CH/A 피하기) |
| **3** | 설정 > 일반 > 정보 – **통신사 잠금**이 "SIM 제한 없음"이라고 표시되어야 함 |
| **4** | 설정 > 셀룰러 – **"셀룰러 요금제 추가"** 찾기 – 탭 가능해야 함 |
| **5** | (선택 사항) Roami와 같은 무료 eSIM 설치 시도 – 작동하면 eSIM이 완전히 기능하는 것임 |

Android 대안은 **[Samsung Galaxy eSIM 호환성 가이드](/faq/samsung-s20-esim-compatible/)** 및 **[Google Pixel eSIM 호환성 가이드](/faq/google-pixel-6-esim-compatible/)**를 참조하세요.


## iPhone을 판매하거나 재설정할 때 eSIM은 어떻게 되나요?

### iPhone 판매 전 – 안전한 삭제 단계

| 단계 | 작업 |
| :--- | :--- |
| **1** | 설정 > 셀룰러 > 각 eSIM 탭 > **셀룰러 요금제 제거**(이렇게 하면 기기에서 프로필이 해제됨) |
| **2** | 물리적 SIM 카드 제거 |
| **3** | 설정 > 일반 > 전송 또는 iPhone 재설정 > **모든 콘텐츠 및 설정 지우기** |
| **4** | 이렇게 하면 모든 eSIM 프로필이 영구적으로 제거됨 – 다음 소유자는 eSIM에 액세스할 수 없음 |

### 재설정 전에 eSIM을 제거하지 않으면 어떻게 되나요?
- eSIM 프로필이 고아가 됨 – 여전히 통신사에 연결되어 있但 기기에서는 비활성화됨.
- 다음 소유자는 사용할 수 없음(여전히 계정에 연결되어 있음).
- 요금제가 활성화되어 있으면 계속 청구될 수 있음.

### 공장 초기화 후 eSIM을 재활성화할 수 있나요?
- **여행 eSIM:** 일반적으로 불가능 – 일회성 설치. 제공업체에 새 QR 코드 문의.
- **통신사 eSIM(Verizon, T-Mobile 등):** 네 – 통신사 앱을 사용하여 프로필 재다운로드.
- **원본 QR 코드를 보관한 경우:** 다시 스캔할 수 있을 수 있음(만료되지 않은 경우).

> ⚠️ **경고:** iPhone을 지우기 전에 항상 eSIM 프로필을 제거하세요. 고아 eSIM은 다음 소유자에게 활성화 문제와 사용자에게 청구 문제를 일으킬 수 있습니다.


## 문제 해결: 일반적인 iPhone eSIM 문제

| 문제 | 가능한 원인 | 해결책 |
| :--- | :--- | :--- |
| **"셀룰러 요금제를 추가할 수 없음"** | 저장된 eSIM이 너무 많거나 QR 만료 | 사용하지 않는 eSIM 삭제; 새 QR 요청 |
| **eSIM 설치但 데이터 없음** | 데이터 로밍 꺼짐 | 해당 회선의 데이터 로밍 켜기 |
| **"eSIM이 지원되지 않음"** | iOS 구버전 또는 호환되지 않는 프로필 | iOS 업데이트; 제공업체에 문의 |
| **활성화 후 "SIM 없음"** | 손상된 프로필 | 삭제 및 재설치 |
| **iPhone 12에서 작동但 iPhone 14에서 작동하지 않음** | 이전 프로필이 eSIM 전용과 호환되지 않음 | 새 프로필 요청 |
| **QR 코드에 "유효하지 않음"** | QR 만료 또는 이미 사용됨 | 제공업체에 새 QR 요청 |
| **"eSIM을 활성화할 수 없음"** | Wi-Fi 문제 또는 서버 문제 | 재시작, Wi-Fi 확인, 대기, 재시도 |
| **eSIM이 오랫동안 "검색 중" 표시** | 커버리지 범위 벗어남 | 수동 네트워크 선택 |
| **듀얼 eSIM – 통화 중 한 회선 끊김** | iPhone은 듀얼 액티브 아닌 듀얼 스탠바이 | 정상 동작 – [듀얼 eSIM 가이드](/faq/dual-esim-not-working-12-fixes-for-iphone/) 참조 |
| **iOS 업데이트 후 설정에 eSIM이 표시되지 않음** | 업데이트 후 소프트웨어 결함 | 설정 > 일반 > 정보로 이동 – EID가 나타나但 셀룰러 옵션이 없으면 휴대폰 재시작 |


## 자주 묻는 질문

**iPhone 11 시리즈가 eSIM을 지원하나요?**
네 – iPhone 11, 11 Pro 및 11 Pro Max 모두 eSIM을 지원합니다(중국 본토 버전이 아닌 글로벌 버전인 경우). `*#06#`을 눌러 확인할 수 있습니다 – EID가 나타나면 eSIM이 준비된 것입니다.

**iPhone 12가 물리적 SIM을 사용하면서 eSIM을 지원하나요?**
네. 모든 iPhone 12 모델(글로벌 버전)은 하나의 물리적 SIM과 하나의 eSIM을 동시에 활성화할 수 있습니다. 통화/SMS에 물리적 SIM을, 데이터에 eSIM을 설정할 수 있습니다.

**iPhone 13이 듀얼 eSIM 기능을 지원하나요?**
네. iPhone 13 시리즈(Pro 및 Pro Max 포함)는 두 개의 활성 eSIM을 동시에 지원합니다. 즉, 물리적 SIM 카드 없이 두 개의 여행 eSIM 또는 홈 eSIM과 여행 eSIM을 사용할 수 있습니다.

**iPhone 14(미국 모델)에 물리적 SIM 슬롯이 있나요?**
아니요. iPhone 14, 15, 16 및 17의 미국 모델은 **eSIM 전용**입니다. 물리적 SIM 트레이가 없습니다. 글로벌 모델은 여전히 eSIM과 함께 물리적 SIM 슬롯을 포함합니다.

**iPhone 16e가 eSIM을 지원하나요?**
네. iPhone 16e는 모든 모델에서 eSIM을 지원합니다. 미국 버전은 eSIM 전용입니다; 글로벌 버전은 eSIM과 물리적 SIM 슬롯을 가지고 있습니다.

**미국 eSIM 전용 iPhone으로 중국에 여행할 수 있나요?**
네, 하지만 중국 현지 통신사의 eSIM은 사용할 수 없습니다(관광객에게 eSIM을 제공하지 않음). 출국 전에 국제 여행 eSIM을 구매해야 합니다. Wi-Fi에서 설치한 후 도착 시 데이터 로밍을 켜세요 – China Unicom과 같은 로밍 파트너에서 작동합니다.

**eSIM이 탑재된 최초의 iPhone은 무엇인가요?**
iPhone XR, XS 및 XS Max(2018년 9월 출시)가 eSIM을 지원하는 최초의 iPhone입니다. iPhone 8 또는 iPhone X가 있으면 eSIM을 사용할 수 없습니다.

**이전 iPhone에서 새 iPhone으로 eSIM을 어떻게 전송하나요?**
새 iPhone 설정 중 **"근처 iPhone에서 eSIM 전송"** 옵션을 찾으세요. 두 휴대폰을 가까이 두세요. 작동하지 않으면 이전 기기에서 eSIM을 삭제하고(백업 확인 후) 원본 QR 코드 또는 통신사 앱을 사용하여 재설치하세요. 자세한 전송 섹션을 참조하세요.

**iPhone에 "셀룰러 요금제를 추가할 수 없음"이 표시되는 이유는 무엇인가요?**
저장된 eSIM 프로필이 너무 많을 수 있습니다(iPhone은 약 8개 저장 가능). **설정 > 셀룰러**로 이동하여 사용하지 않는 요금제를 삭제하고 휴대폰을 재시작한 후 다시 시도하세요. 또한 QR 코드가 만료되지 않았는지 확인하세요.

**미국 iPhone에서 "eSIM 전용"은 무엇을 의미하나요?
iPhone에 물리적 SIM 트레이가 없음을 의미합니다 – 셀룰러 서비스를 위해 하나 이상의 eSIM을 사용해야 합니다. 듀얼 SIM은 두 개의 eSIM(듀얼 eSIM)으로 작동합니다.

**iPhone에 몇 개의 eSIM 프로필을 저장할 수 있나요?**
iPhone은 **최대 8개의 eSIM 프로필**을 저장할 수 있지만, 모델에 따라 한 번에 하나 또는 두 개만 활성화할 수 있습니다. 위의 저장 제한 표를 참조하세요.

**iPhone을 재설정하면 eSIM은 어떻게 되나요?
먼저 eSIM을 제거하지 않고 모든 콘텐츠 및 설정을 지우면 프로필이 고아가 됩니다. 재설정 전에 항상 eSIM 프로필을 제거하세요(설정 > 셀룰러 > 셀룰러 요금제 제거).

**iPhone에서 물리적 SIM을 eSIM으로 전환할 수 있나요?**
네 – iPhone 13 이상에서 설정 > 셀룰러 > 셀룰러 요금제 추가 > **"물리적 SIM에서 전환"**으로 이동하세요. 이렇게 하면 물리적 SIM이 동일한 기기에서 eSIM으로 전환됩니다. 물리적 SIM은 전환 후 비활성화됩니다.

**iPhone 8이 eSIM을 지원하나요?**
아니요 – iPhone 8, 8 Plus 및 iPhone X는 eSIM 하드웨어가 없습니다. 물리적 SIM만 사용합니다.

**eSIM이 있는 가장 저렴한 iPhone은 무엇인가요?**
iPhone XR(중고)은 약 $100-150에 eSIM 지원 iPhone 중 가장 저렴합니다. iPhone SE(3세대)는 가장 저렴한 새 eSIM iPhone입니다.

**iPhone이 통신사 잠금인지 어떻게 확인하나요?**
설정 > 일반 > 정보 > 통신사 잠금. "SIM 제한 없음"이라고 표시되면 iPhone이 잠금 해제되어 모든 eSIM을 사용할 수 있습니다. "SIM 잠금"이라고 표시되면 통신사에 잠금 해제를 요청하세요.

**iPhone 13 듀얼 eSIM과 iPhone 12 듀얼 SIM의 차이점은 무엇인가요?**
iPhone 12는 하나의 물리적 SIM + 하나의 eSIM을 지원합니다. iPhone 13은 두 개의 활성 eSIM(물리적 SIM 불필요) 또는 하나의 물리적 SIM + 하나의 eSIM을 지원합니다. 이로 인해 iPhone 13이 진정한 듀얼 eSIM 기능을 갖춘 첫 번째 모델이 되었습니다.

**미국에서 구매한 iPhone 17에서 eSIM을 사용할 수 있나요?**
네 – 하지만 미국 iPhone 17 모델은 eSIM 전용입니다(물리적 SIM 슬롯 없음). 모든 셀룰러 서비스에 eSIM을 사용해야 합니다.

**iOS 업데이트 후 설정에 eSIM이 표시되지 않는 문제를 어떻게 해결하나요?**
이는 알려진 iOS 버그입니다. 설정 > 일반 > 정보로 이동 – EID 번호가 나타나但 셀룰러에 eSIM이 표시되지 않으면 iPhone을 재시작하세요. 그래도 안 되면 설정 > 셀룰러 > eSIM 추가로 이동 – 때때로 휴대폰이 기존 프로필을 감지하고 자동으로 다시 추가합니다.

---

## 여전히 확실하지 않나요? 무료 eSIM으로 테스트

iPhone의 eSIM 호환성을 확인하는 가장 신뢰할 수 있는 방법은 **무료 체험 eSIM**을 설치하는 것입니다. 2분이 소요되며 비용은 들지 않으며, 성공적으로 활성화되면 휴대폰이 100% 준비된 것입니다.

👉 [**무료 Roami eSIM 체험 받기**](/free-esim/)

---

*Apple 공식 문서, GSMA 표준 및 2026년 8월 기준 통신사 정보를 기반으로 합니다.*
## 출처

- [GSMA — eSIM(SGP.22) 사양](https://www.gsma.com/esim/)
- [Apple 지원 — iPhone의 eSIM](https://support.apple.com/en-us/108072)
- [Apple 지원 — iPhone의 eSIM 정보](https://support.apple.com/en-us/HT209044)