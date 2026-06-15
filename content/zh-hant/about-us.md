---
title: "關於 Roami | 連接全球旅客的 eSIM 專家"
description: "了解更多關於 Roami，您全球旅客的一站式網路解決方案。總部位於美國，在全球設有辦事處，提供高性價比的 eSIM 方案。"
layout: "about"
date: '2026-06-14T00:00:00+00:00'
type: "page"

# SEO
seo:
  title: "關於 Roami | 全球超過 100 萬旅客選擇"
  description: "Roami 為全球超過 100 萬旅客提供 eSIM 上網服務。致力於讓每一位旅人都能享有簡單、快速且實惠的海外連線體驗，輕鬆保持與世界的連結。"
  image: "/img/og-about.jpg"

# JSON-LD Schema
schema: |-
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Roami",
    "url": "https://www.roamiapp.com",
    "logo": "https://www.roamiapp.com/images/logo.png",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hong Kong",
      "addressCountry": "HK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "roamiesim@roamiapp.com",
      "contactType": "customer support"]
    },
    "sameAs": [
      "https://apps.apple.com/app/id6747127122",
      "https://play.google.com/store/apps/details?id=com.usphonesimgo.app"
    ]
  }

# Hero 区域
hero:
  subtitle: "我們的故事"
  title_main: "連接您的世界，<br>"
  title_highlight: "無縫無界。"
  description: "Roami 致力於成為您的全球連線專家。我們為全球跨境旅客提供一站式網路解決方案，消除國界與漫遊焦慮。"
  bg_image: "img/about-bg.png"
  overlay_class: "bg-white/60 backdrop-blur-[1px]"
  subtitle_class: "text-blue-600 text-sm font-bold uppercase tracking-widest mb-4"
  title_class: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
  highlight_class: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"
  description_class: "text-lg md:text-xl text-slate-700 leading-relaxed mb-10 max-w-2xl mx-auto"
  trust_badges:
    - emoji: "✅"
      label: "2021 年成立"
      class: "bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium shadow-sm border border-slate-200"
    - emoji: "🌍"
      label: "200+ 個國家"
      class: "bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium shadow-sm border border-slate-200"
    - emoji: "📱"
      label: "100萬+ 旅客"
      class: "bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium shadow-sm border border-slate-200"
    - emoji: "⭐"
      label: "App Store 評分 4.8"
      class: "bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium shadow-sm border border-slate-200"

# 信任数据看板
trustStats:
  - value: "200+"
    label: "國家與地區"
    sub: "包含歐洲、美國、日本"
  - value: "1M+"
    label: "滿意旅客"
    sub: "平均評分 4.8"
  - value: "50+"
    label: "全球合作電信商"
    sub: "Orange、Telekom、Vodafone 等"
  - value: "24/7"
    label: "客戶支援"
    sub: "10 種語言 • <2分鐘回覆"

# Mission 区域
mission:
  title: "重新定義全球旅行連線體驗"
  paragraphs:
    - "在 Roami，我們認為旅行時保持連線應該和帶上護照一樣簡單。我們秉持著打破數位國界的願景而成立，為現代全球旅客提供量身打造的綜合型<strong>一站式網路解決方案</strong>。"
    - "我們以提供<strong>高性價比的 eSIM 方案</strong>而自豪，且絕不妥協於品質。透過與 200 多個國家和地區的頂尖當地電信商合作，我們確保您以無與倫比的價格獲得優質的 5G/4G 高速網路。沒有隱藏費用，無需實體 SIM 卡，無論降落何處，都能享受即時、可靠的連線。"
  features:
    - icon: "zap"
      title: "一站式解決方案"
      desc: "從購買到即時啟用，在一個強大的 App 中管理您所有的全球數據需求。"
      color: "blue"
    - icon: "piggy-bank"
      title: "高性價比"
      desc: "以傳統漫遊費用的一小部分享受優質本地網路。無與倫比的價值。"
      color: "emerald"
  image: "img/about-5.png"
  stats_title: "100萬+ 滿意旅客"
  stats_desc: "深受全球商務人士與遊客的信賴。"

# 合作伙伴区域
partners:
  section_label: "全球電信商網路"
  title: "榮獲全球 <span class='text-blue-600'>50+ 家領先營運商</span> 信賴"
  view_all_link: "/carriers/"
  view_all_text: "查看全部 50+ 家合作夥伴"
  
  # 默认折扣码
  default_discount_code: "WEB20"
  
  # SEO 内链组（普通链接）
  seo_links:
    - emoji: "🇪🇺"
      text: "歐洲旅遊 eSIM"
      link: "/europe-esim/"
      discount_code: "WEB20"
      discount_badge_class: "bg-red-500 text-white"
    - emoji: "🇺🇸"
      text: "美國旅遊 eSIM"
      link: "/united-states-esim/"
      discount_code: "WEB20"
      discount_badge_class: "bg-red-500 text-white"
    - emoji: "🇯🇵"
      text: "日本旅遊 eSIM"
      link: "/japan-esim/"
      discount_code: "WEB20"
      discount_badge_class: "bg-red-500 text-white"
  
  # 高亮按钮（单独的 plans 链接）
  highlight_link: "/plans/"
  highlight_emoji: "📱"
  highlight_text: "實惠的 eSIM 數據方案"
  highlight_button_class: "bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50"
  highlight_discount_text: "節省 20%"
  highlight_badge_class: "bg-yellow-300 text-red-700"
  
  # 折扣码独立横幅
  discount_banner_class: "bg-gradient-to-r from-amber-100 to-yellow-200 rounded-full px-5 py-2 shadow-md border border-amber-300"
  discount_banner_emoji: "🎉"
  discount_banner_title: "新用戶優惠"
  discount_banner_title_class: "text-amber-800 text-sm font-bold"
  discount_banner_code_class: "bg-amber-800 text-amber-100 font-mono font-bold text-sm px-3 py-1 rounded-full tracking-wider shadow-inner"
  discount_banner_description: "20% 折扣 eSIM 優惠碼"
  discount_banner_desc_class: "text-amber-700 text-xs font-medium"
  
  # Logo 列表
  logos:
    - name: "Orange"
      image: "/img/frane-orange-esim.jpg"
    - name: "Telekom"
      image: "/img/europe-telekom.png"
    - name: "Vodafone"
      image: "/img/europe-vodafone.png"
    - name: "T-Mobile"
      image: "/img/usa-tmobile.png"
    - name: "Verizon"
      image: "/img/usa-verizon.png"
    - name: "AT&T"
      image: "/img/us-att.png"
    - name: "EE"
      image: "/img/uk-ee.png"
    - name: "O2"
      image: "/img/uk-o2.png"
    - name: "China Mobile"
      image: "/img/china-mobile.png"
    - name: "China Unicom"
      image: "/img/china-unicom.png"
    - name: "Chunghwa"
      image: "/img/taiwai-chuunghwa-telecom.png"
    - name: "SK Telecom"
      image: "/img/south-korea-sk-telecom.png"
    - name: "NTT Docomo"
      image: "/img/japan-ntt-docomo.png"
    - name: "SoftBank"
      image: "/img/japan-softbank.png"
  
  # 服务承诺标签
  service_tags:
    - "⚡ 5G/4G 網速"
    - "📲 即時啟用"
    - "🔒 安全可靠"

# 用户评价区域
testimonials:
  section_label: "用戶評價"
  title: "旅客對 Roami 的評價"
  cta_link: "https://apps.apple.com/app/id6747127122"
  cta_text: "在 App Store 查看所有評價 →"
  items:
    - quote: "Roami 在我的歐洲之旅幫我省了超過 150 美元。起飛前啟用，在 12 個國家完美運作。"
      stars: "★★★★★"
      country_emoji: "🇪🇺"
      traveler_label: "已驗證旅客"
      country: "英國"
      avatar_bg: "bg-blue-100 text-blue-600"
      verified_text: "App Store 已驗證用戶"
      purchased_label: "已購買"
    - quote: "亞洲旅行最好的 eSIM。實惠、快速，客服在凌晨 3 點幫助了我。強烈推薦。"
      stars: "★★★★★"
      country_emoji: "🇯🇵"
      traveler_label: "已驗證旅客"
      country: "日本"
      avatar_bg: "bg-emerald-100 text-emerald-600"
      verified_text: "Google Play 已驗證用戶"
      purchased_label: "已購買"
    - quote: "終於有一款名副其實的 eSIM 了。在加拿大、墨西哥和歐洲使用過 —— 每次連線都完美無瑕。"
      stars: "★★★★★"
      country_emoji: "🇺🇸"
      traveler_label: "已驗證旅客"
      country: "美國"
      avatar_bg: "bg-purple-100 text-purple-600"
      verified_text: "App Store 已驗證用戶"
      purchased_label: "已購買"

# 底部 CTA 区域
cta:
  gradient_from: "#0A2F44"
  gradient_to: "#06212E"
  title: "準備好更聰明地旅行了嗎？"
  title_color: "#FFD966"
  subtitle: "加入 1,000,000+ 名旅客的行列，從此告別漫遊費。"
  subtitle_color: "#FFFFFF"
  ios_link: "https://apps.apple.com/app/id6747127122"
  ios_text: "在 App Store 下載"
  android_link: "https://play.google.com/store/apps/details?id=com.usphonesimgo.app"
  android_text: "在 Google Play 獲取"
  contact_link: "/contact/"
  contact_text: "聯絡我們"
  contact_bg: "#FFD966"
  contact_color: "#0A2F44"
  company_name: "Hong Kong LinZe Co., Limited"
  company_address: "FLAT/RM A 12/F ZJ 300 300 LOCKHART RD WAN CHAI HONG KONG"
  company_email: "roamiesim@roamiapp.com"
---