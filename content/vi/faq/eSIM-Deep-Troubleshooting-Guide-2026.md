---
title: "Hướng dẫn Xử lý sự cố eSIM Chuyên sâu 2026"
h1_title: "Hướng dẫn Đầy đủ về Xử lý sự cố eSIM vào năm 2026 – 18 Cách khắc phục Thực tế"
description: "Khắc phục sự cố kích hoạt eSIM, lỗi chuyển, không có dịch vụ và lỗi quét QR trên iPhone và Android với hướng dẫn xử lý sự cố năm 2026 này."
image: "/img/esim/esim-troubleshooting-guide.jpg"
keywords: ["eSIM troubleshooting", "eSIM activation failed", "eSIM no service", "eSIM transfer error", "eSIM cross-platform transfer", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "eSIM carrier lock", "eSIM stuck on activating"]
date: 2026-09-06T10:00:00Z
lastmod: 2026-09-06T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Xử lý sự cố", "Thiết lập du lịch"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Cập nhật ngày"
  min_read: "phút đọc"
  toc: "Mục lục"

breadcrumbs:
  home:
    text: "Trang chủ"
    url: "/"
  parent:
    text: "Trung tâm trợ giúp"
    url: "/faq/"
    
# Thanh bên: eSIM phổ biến
sidebar_popular:
  title: "eSIM phổ biến"
  item_suffix: "eSIM"
  items:
    - name: "eSIM Hoa Kỳ"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM Đức"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Châu Âu"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Thổ Nhĩ Kỳ"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Nhật Bản"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM Trung Quốc"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Thanh bên: Ưu đãi eSIM miễn phí
sidebar_free:
  title: "Nhận eSIM Miễn phí"
  icon: "🎁"
  item_suffix: "Free eSIM"
  item_subtitle: "Free eSIM"
  items:
    - name: "eSIM Anh"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Đức"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thái Lan"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hồng Kông"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Thanh bên: Câu hỏi phổ biến
sidebar_questions:
  title: "Câu hỏi phổ biến"
  items:
    - question: "Kích hoạt eSIM là gì và nó hoạt động như thế nào?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Làm thế nào để kích hoạt eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Làm thế nào để kích hoạt eSIM trên iPhone (Tất cả các mẫu)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Danh sách tương thích eSIM mới nhất"
      url: "/compatibility/"
---


> **Lời biên tập:** Roami vận hành bộ phận hỗ trợ đằng sau tài liệu tham khảo này. Khi một du khách gặp lỗi cụ thể trên màn hình — "Activation failed," "No Service," "Cellular Plan Cannot Be Added," lỗi khôi phục 4013/4014 — đây là trang nhóm của chúng tôi mở ra để giải mã. Mỗi mục dưới đây ánh xạ một thông báo lỗi chính xác đến nguyên nhân thực sự và cách khắc phục cụ thể, đã được kiểm tra trên iOS 18 và Android 14/15 tính đến tháng 8 năm 2026.

> **Nhầm trang?** Nếu câu hỏi của bạn là "điện thoại của tôi có hỗ trợ eSIM không" — mẫu Trung Quốc/Hồng Kông, khóa nhà mạng, thiếu EID — đó là câu hỏi về phần cứng, không phải lỗi. Hãy đến [hướng dẫn lỗi tương thích eSIM](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi. Trang này giả định điện thoại của bạn có thể sử dụng eSIM và vấn đề là một thông báo lỗi cụ thể.

## Luồng Chẩn đoán Nhanh – Tìm Lỗi của Bạn trong 10 Giây

Sử dụng sơ đồ quyết định này để nhảy thẳng đến cách khắc phục cho thông báo chính xác trên màn hình của bạn.

| Những gì bạn thấy / trải nghiệm | Có thể bị hỏng gì | Mức độ khẩn cấp | Nhảy đến cách khắc phục |
|---------------------------|----------------------|---------|-------------|
| **Mã QR không quét được / báo không hợp lệ** | Mã QR hết hạn hoặc bị hỏng | Thấp | [Phần 3](#3-esim-qr-code-invalid-or-expired) |
| **"Unable to Activate" hoặc "Activation failed"** | Hết thời gian chờ mạng hoặc lỗi máy chủ | Trung bình | [Phần 1](#1-esim-activation-failed-or-unable-to-activate) |
| **"No Service" sau khi cài đặt** | Tắt Chuyển vùng Dữ liệu hoặc thiếu APN | Cao | [Phần 2](#2-esim-no-service-after-installation) |
| **Đầy đủ vạch sóng nhưng không có internet** | Cấu hình APN sai | Cao | [Phần 8](#8-esim-no-data-connection-after-activation-apn) |
| **"Cellular Plan Cannot Be Added"** | Quá nhiều eSIM đã lưu trữ hoặc hạn chế phần cứng | Trung bình | [Phần 5](#5-esim-cellular-plan-cannot-be-added) |
| **"eSIM already in use"** | Hồ sơ vẫn bị ràng buộc với thiết bị cũ | Cao | [Phần 4](#4-esim-already-in-use-or-bound-to-another-device) |
| **Cửa sổ bật lên mã xác nhận** | Hồ sơ yêu cầu mã PIN | Thấp | [Phần 6](#6-esim-confirmation-code-required) |
| **"SIM not supported"** | Điện thoại bị khóa nhà mạng | Cao | [Phần 7](#7-esim-sim-not-supported-carrier-locked-device) |
| **Kẹt ở "Activating" >10 phút** | Tải xuống bị đình trệ | Trung bình | [Phần 9](#9-esim-stuck-on-activating) |
| **SIM kép: một đường truyền không có tín hiệu** | Xung đột định tuyến | Trung bình | [Phần 10](#10-dual-esim-one-line-shows-no-service) |
| **Chuyển eSIM sang điện thoại mới, thất bại** | Không hỗ trợ chuyển đa nền tảng | Cao | [Phần 11](#11-esim-transfer-failed) |
| **Lỗi khôi phục iPhone 4013/4014** | Vấn đề phần cứng/phần mềm, không phải eSIM | Cao | [Phần 12](#12-iphone-esim-restore-error-4013-or-4014) |
| **"Profile expired"** | Mã QR hết thời hạn | Thấp | [Phần 13](#13-esim-profile-expired) |
| **Chuyển vùng không hoạt động ở nước ngoài** | Tắt công tắc Chuyển vùng Dữ liệu | Cao | [Phần 14](#14-esim-data-roaming-not-working) |
| **Vô tình xóa eSIM** | Lỗi người dùng | Cao | [Phần 15](#15-esim-deleted-by-mistake) |
| **MDM chặn thay đổi eSIM** | Chính sách thiết bị công việc | Trung bình | [Phần 16](#16-mdm-or-enterprise-restrictions-block-esim) |
| **eSIM biến mất sau khi khởi động lại** | Lỗi phần mềm iOS/Android | Cao | [Phần 17](#17-esim-disappeared-after-restart) |
| **Cuộc gọi qua Wi-Fi hoạt động nhưng dữ liệu eSIM thì không** | Xung đột định tuyến giữa Wi-Fi và di động | Trung bình | [Phần 18](#18-wi-fi-calling-works-but-esim-data-doesnt) |
| **Cắm SIM vật lý, eSIM không hoạt động** | Xung đột khe SIM | Cao | [Phần 19](#19-esim-vs-physical-sim-conflict) |
| **Apple Watch eSIM không kết nối** | Sự cố ghép nối hoặc nhà mạng | Trung bình | [Phần 20](#20-apple-watch-esim-not-working) |


## Tóm tắt Nhanh – Bảng Tham khảo Tổng quan

| Triệu chứng | Nguyên nhân phổ biến nhất | Cách khắc phục |
|---------|-------------------|-----|
| "Unable to Activate" / "Activation failed" | Wi-Fi không ổn định hoặc lỗi máy chủ nhà mạng | Kết nối ổn định + thử lại, sau đó cài lại (Phần 1) |
| "No Service" sau khi cài đặt | Tắt chuyển vùng dữ liệu / thiếu APN | Bật chuyển vùng, kiểm tra APN (Phần 2) |
| Mã QR "Invalid" / "Expired" | Mã QR hết hạn hoặc đã được sử dụng | Yêu cầu mã QR mới (Phần 3) |
| "eSIM already in use" | Hồ sơ chưa được giải phóng khỏi thiết bị cũ | Xóa khỏi thiết bị cũ hoặc yêu cầu nhà mạng giải phóng (Phần 4) |
| "Cellular Plan Cannot Be Added" | Quá nhiều eSIM đã lưu trữ | Xóa các eSIM không sử dụng (Phần 5) |
| Yêu cầu mã xác nhận | Hồ sơ có mã bắt buộc | Tìm mã 4–8 chữ số trong email nhà mạng (Phần 6) |
| "SIM not supported" | Thiết bị bị khóa nhà mạng | Mở khóa thiết bị hoặc liên hệ nhà mạng (Phần 7) |
| Không có dữ liệu sau kích hoạt | APN chưa được cấu hình | Nhập APN thủ công (Phần 8) |
| Kẹt ở "Activating" | Tải xuống hồ sơ bị đình trệ | Bật/tắt Chế độ máy bay, cài lại (Phần 9) |
| Một đường SIM kép "No Service" | Xung đột định tuyến cuộc gọi/dữ liệu | Kiểm tra định tuyến đường truyền và công tắc (Phần 10) |
| Chuyển eSIM thất bại | Nhà mạng không hỗ trợ chuyển | Sử dụng dự phòng mã QR của nhà mạng (Phần 11) |
| Lỗi khôi phục 4013 / 4014 | Phần cứng/phần mềm trong quá trình khôi phục | Dùng cáp khác, cập nhật máy tính (Phần 12) |
| "Profile expired" | Mã QR có giới hạn thời gian | Yêu cầu mã QR mới (Phần 13) |
| Chuyển vùng dữ liệu không hoạt động | Tắt chuyển vùng cho đường eSIM | Bật Chuyển vùng Dữ liệu (Phần 14) |
| Vô tình xóa eSIM | Hồ sơ bị xóa cục bộ | Liên hệ nhà mạng / mua gói mới (Phần 15) |
| MDM chặn thay đổi eSIM | Hạn chế doanh nghiệp | Liên hệ quản trị IT (Phần 16) |
| eSIM biến mất sau khi khởi động lại | Lỗi phần mềm iOS/Android | Kiểm tra cài đặt, thêm lại hồ sơ (Phần 17) |
| Cuộc gọi qua Wi-Fi hoạt động nhưng dữ liệu thì không | Xung đột định tuyến | Tạm thời tắt Cuộc gọi qua Wi-Fi (Phần 18) |
| Cắm SIM vật lý, eSIM ngừng hoạt động | Xung đột khay/đầu đọc | Tháo SIM vật lý, khởi động lại (Phần 19) |
| Apple Watch eSIM không kết nối | Sự cố ghép nối hoặc nhà mạng | Ghép nối lại đồng hồ, liên hệ nhà mạng (Phần 20) |


## 1. Kích hoạt eSIM thất bại hoặc "Unable to Activate"

**Nguyên nhân:** Hầu như luôn là kết nối Wi-Fi không ổn định hoặc lỗi máy chủ nhà mạng (SM-DP+) tạm thời, không phải vấn đề với điện thoại của bạn. SM-DP+ (Subscription Manager - Data Preparation Plus) là máy chủ bảo mật cung cấp hồ sơ eSIM đến thiết bị của bạn — nếu nó không truy cập được, kích hoạt thất bại.

**Cách khắc phục:**
1. Di chuyển đến kết nối Wi-Fi hoặc dữ liệu di động ổn định.
2. Bật và tắt Chế độ máy bay để làm mới băng tần cơ sở.
3. Nếu lỗi lặp lại, hãy xóa eSIM đang chờ trong `Cài đặt > Di động`, khởi động lại và quét lại mã QR.

**iOS 18 cụ thể:** Trên iOS 18, thông báo có thể hiển thị "Unable to Complete Activation" với nút Retry. Nhấn Retry trước — luồng kích hoạt được cải thiện của iOS 18 thường giải quyết vấn đề mà không cần cài đặt lại hoàn toàn.

---

## 2. eSIM "No Service" Sau khi Cài đặt

**Nguyên nhân:** Hồ sơ đã được cài đặt nhưng điện thoại chưa đăng ký với mạng địa phương — thường là do Chuyển vùng Dữ liệu tắt hoặc thiếu APN.

**Cách khắc phục:**
1. Bật **Data Roaming ON** cho đường eSIM.
2. Trong `Cài đặt > Di động > [eSIM của bạn] > Chọn mạng`, tắt "Tự động", chọn thủ công một nhà mạng, đợi nó thất bại, sau đó chuyển lại "Tự động" để buộc đăng ký lại.
3. Nếu vẫn không có dữ liệu, hãy kiểm tra APN (Phần 8).

---

## 3. Mã QR eSIM "Invalid" hoặc "Expired"

**Nguyên nhân:** Mã QR eSIM chỉ sử dụng một lần và có giới hạn thời gian. Mã đã được sử dụng hoặc đã hết hạn.

**Cách khắc phục:** Liên hệ nhà cung cấp eSIM của bạn và yêu cầu họ cấp lại mã QR mới, sau đó quét ngay lập tức.

**Nếu bạn đang quét từ màn hình điện thoại:** Lưu ảnh mã QR vào Photos trước, sau đó trong Cài đặt > Di động > Thêm eSIM, chọn "Use QR Code" và nhấn "Choose Photo" để chọn ảnh đã lưu. Điều này tránh được vấn đề "không thể quét màn hình của chính mình".

---

## 4. "eSIM Already in Use" hoặc "Bound to Another Device"

**Nguyên nhân:** Hồ sơ chưa bao giờ được giải phóng khỏi thiết bị cũ, vì vậy nhà mạng vẫn liên kết nó với điện thoại đó.

**Cách khắc phục:**
1. Trên thiết bị cũ, xóa eSIM trong `Cài đặt > Di động`.
2. Đợi khoảng năm phút và thử lại trên thiết bị mới.
3. Nếu thiết bị cũ bị mất hoặc hỏng, hãy liên hệ nhà mạng và yêu cầu họ giải phóng hồ sơ từ phía họ.

---

## 5. eSIM "Cellular Plan Cannot Be Added"

**Nguyên nhân:** Điện thoại đã đạt đến giới hạn lưu trữ hồ sơ eSIM (thường 8–10, tùy kiểu máy), hoặc thiết bị là mẫu Trung Quốc đại lục không có phần cứng eSIM.

**Cách khắc phục:** Xóa các eSIM không sử dụng trong `Cài đặt > Di động`, sau đó thêm cái mới. Nếu thiết bị của bạn được mua ở Trung Quốc đại lục, nó sử dụng hai khe SIM vật lý và không thể thêm eSIM — để biết cách xác định mẫu Trung Quốc hoặc Hồng Kông và xác nhận điện thoại của bạn có phần cứng hay không, hãy xem [hướng dẫn lỗi tương thích eSIM](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi.

---

## 6. Yêu cầu Mã Xác nhận eSIM

**Nguyên nhân:** Một số hồ sơ eSIM có mã xác nhận bắt buộc cần thiết trước khi hồ sơ tải xuống. Đây là mã PIN 4-8 chữ số xác minh danh tính của bạn.

**Cách khắc phục:** Tìm mã 4–8 chữ số trong email nhà mạng gửi kèm mã QR. Nếu không tìm thấy, hãy liên hệ nhà mạng.

**Vị trí thường thấy mã xác nhận:**
- Dòng tiêu đề của email kích hoạt
- Gần cuối email, trong "Activation Details"
- Trong ứng dụng nhà mạng dưới "My Plans" > "Details"

---

## 7. eSIM "SIM Not Supported" — Thiết bị bị khóa Nhà mạng

**Nguyên nhân:** Điện thoại bị khóa với một nhà mạng khác và không thể chấp nhận hồ sơ từ nhà cung cấp khác.

**Cách khắc phục:** Kiểm tra `Cài đặt > Cài đặt chung > Giới thiệu > Carrier Lock`. Nếu nó không hiển thị "No SIM restrictions", hãy liên hệ nhà mạng trong nước của bạn để yêu cầu mở khóa. Để có hướng dẫn đầy đủ về khóa nhà mạng — cách kiểm tra trạng thái, chính sách mở khóa của nhà mạng Mỹ và cách mở khóa thiết bị — hãy xem [hướng dẫn phần cứng & tương thích](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi.

---

## 8. eSIM Không có Kết nối Dữ liệu Sau Khi Kích hoạt (APN)

**Nguyên nhân:** Tên điểm truy cập (APN) không được cấu hình tự động, vì vậy điện thoại không có đường dẫn đến mạng dữ liệu.

**Cách khắc phục:**
1. Đến `Cài đặt > Di động > Mạng dữ liệu di động`.
2. Nhập giá trị APN từ trang web nhà cung cấp eSIM của bạn (ví dụ: `globaldata` cho Airalo).
3. Hầu hết travel eSIM tự cấu hình APN, vì vậy hãy xác nhận giá trị chính xác với nhà cung cấp của bạn.

**Giá trị APN phổ biến theo nhà cung cấp (nếu tự động cấu hình thất bại):**

| Nhà cung cấp | APN | Tên người dùng | Mật khẩu |
|----------|-----|----------|----------|
| Roami | internet | (trống) | (trống) |
| Airalo | globaldata | (trống) | (trống) |
| Holafly | hola | (trống) | (trống) |
| Nomad | nbdata | (trống) | (trống) |
| Ubigi | ubigi | (trống) | (trống) |
| Google Fi | h2g2 | (trống) | (trống) |
| T-Mobile (Mỹ) | fast.t-mobile.com | (trống) | (trống) |
| AT&T (Mỹ) | nxgen | (trống) | (trống) |
| Verizon (Mỹ) | vzwinternet | (trống) | (trống) |
| EE (Anh) | everywhere | (trống) | (trống) |
| O2 (Anh) | mobile.o2.co.uk | web | web |
| Vodafone (Anh) | internet | (trống) | (trống) |
| Three (Anh) | three.co.uk | (trống) | (trống) |

---

## 9. eSIM Kẹt ở "Activating"

**Nguyên nhân:** Tải xuống hồ sơ bị đình trệ, thường do tín hiệu yếu hoặc máy chủ kích hoạt quá tải.

**Cách khắc phục:**
1. Đảm bảo bạn đang ở trên mạng ổn định.
2. Bật và tắt Chế độ máy bay.
3. Nếu nó vẫn kẹt hơn 10 phút, hãy xóa eSIM và cài đặt lại từ mã QR.

---

## 10. SIM Kép: Một Đường Truyền Hiển thị "No Service"

**Nguyên nhân:** Với hai eSIM hoạt động, định tuyến cuộc gọi đến và dữ liệu có thể xung đột, khiến một đường truyền không có dịch vụ. Đây là **sự cố tín hiệu eSIM kép** phổ biến ảnh hưởng đến người dùng có hai đường truyền hoạt động.

**Cách khắc phục:**
1. Trong `Cài đặt > Di động`, xác nhận đường nào được đặt cho **Cellular Data** và đường nào cho **Default Voice Line**.
2. Bật và tắt từng đường.
3. Để có cách khắc phục sâu hơn, hãy xem hướng dẫn **[SIM kép không hoạt động? 12 cách khắc phục cho iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** của chúng tôi.

---

## 11. Chuyển eSIM Thất bại

**Nguyên nhân:** Không có chuyển eSIM đa nền tảng tích hợp và nhà mạng của bạn có thể không hỗ trợ chuyển qua ứng dụng.

**Cách khắc phục:** Yêu cầu nhà mạng cấp lại eSIM dưới dạng mã QR mới và quét trên thiết bị mới. Sau khi chuyển, WhatsApp, iMessage và mã SMS hai yếu tố vẫn hoạt động vì số của bạn không thay đổi. Để có hướng dẫn từng bước đầy đủ, hãy xem **[hướng dẫn chuyển eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)** của chúng tôi.

---

## 12. Lỗi Khôi phục eSIM iPhone 4013 hoặc 4014

**Nguyên nhân:** Các lỗi này chỉ ra vấn đề phần cứng hoặc phần mềm trong quá trình khôi phục phần mềm, không phải sự cố eSIM. Chúng thường do cáp USB bị lỗi hoặc phần mềm máy tính lỗi thời.

**Cách khắc phục:** Thử cáp khác và cổng USB khác, cập nhật hệ điều hành máy tính, sau đó thử khôi phục lại. Liên hệ Apple Support nếu lỗi vẫn tiếp diễn.

---

## 13. eSIM "Profile Expired"

**Nguyên nhân:** Mã QR eSIM hoặc mã kích hoạt có giới hạn thời gian và đã hết hạn.

**Cách khắc phục:** Liên hệ nhà cung cấp eSIM của bạn và yêu cầu mã QR mới, sau đó kích hoạt kịp thời.

---

## 14. Chuyển vùng Dữ liệu eSIM Không Hoạt động

**Nguyên nhân:** Chuyển vùng Dữ liệu bị tắt cho đường eSIM du lịch, vì vậy nó không thể kết nối với mạng địa phương.

**Cách khắc phục:** Đến `Cài đặt > Di động > [eSIM của bạn]` và bật **Data Roaming ON**. Điều này được yêu cầu cho hầu hết travel eSIM hoạt động ở nước ngoài.

---

## 15. Vô tình Xóa eSIM

**Nguyên nhân:** Xóa eSIM sẽ xóa hồ sơ khỏi điện thoại nhưng không hủy gói.

**Cách khắc phục:**
- Đối với eSIM nhà mạng trả sau, hãy liên hệ nhà mạng — họ thường có thể cấp lại mã QR.
- Đối với travel eSIM (Roami, Airalo và tương tự), việc xóa thường là vĩnh viễn, vì vậy bạn sẽ cần mua gói mới.
- Luôn giữ bản sao lưu email kích hoạt gốc và mã QR.

---

## 16. MDM hoặc Hạn chế Doanh nghiệp Chặn eSIM

**Nguyên nhân:** Trên thiết bị được quản lý (công việc), chính sách Mobile Device Management như `AllowESIMModification` có thể chặn việc thêm hoặc xóa eSIM.

**Cách khắc phục:** Liên hệ quản trị IT của bạn để bật thay đổi eSIM hoặc sử dụng thiết bị không được quản lý.

---

## 17. eSIM Biến mất Sau Khi Khởi động Lại

**Triệu chứng:** Bạn khởi động lại điện thoại và eSIM không còn được liệt kê trong Cài đặt > Di động. Nó đã biến mất.

**Nguyên nhân:** Lỗi phần mềm trên iOS hoặc Android đôi khi có thể khiến hồ sơ eSIM bị ẩn hoặc không đọc được sau khi khởi động lại, đặc biệt là sau khi cập nhật hệ điều hành. Hồ sơ vẫn còn trên thiết bị, nhưng hệ thống không thể gắn kết nó.

**Cách khắc phục:**
1. **iPhone:** Đến Cài đặt > Cài đặt chung > Giới thiệu và cuộn xuống "Available SIM" hoặc "Digital SIM". Nếu eSIM xuất hiện ở đó nhưng không có trong Di động, hãy khởi động lại điện thoại một lần nữa.
2. **iPhone:** Nếu khởi động lại không hiệu quả, hãy đến Cài đặt > Di động > Thêm eSIM. Đôi khi điện thoại sẽ phát hiện hồ sơ hiện có và đề xuất thêm lại mà không cần mã QR mới.
3. **Android (Samsung):** Đến Cài đặt > Kết nối > Trình quản lý SIM. eSIM có thể hiển thị là "Inactive". Nhấn vào nó và bật nó lên.
4. **Android (Pixel):** Đến Cài đặt > Mạng & Internet > SIM. Nếu eSIM bị thiếu, nhấn "Add Carrier" — điện thoại có thể phát hiện hồ sơ hiện có.
5. Nếu không có cách nào hiệu quả, hãy liên hệ nhà mạng và yêu cầu mã QR mới. Hồ sơ cũ có thể bị hỏng.

**Phòng tránh:** Trước khi khởi động lại, đảm bảo tất cả các đường eSIM được tắt, sau đó khởi động lại, sau đó bật chúng lại. Điều này giảm khả năng hệ thống mất dấu hồ sơ.

---

## 18. Cuộc gọi qua Wi-Fi Hoạt động nhưng Dữ liệu eSIM Thì Không

**Triệu chứng:** Bạn có Cuộc gọi qua Wi-Fi hoạt động trên đường truyền nhà, nhưng travel eSIM của bạn không có kết nối dữ liệu. Hoặc eSIM hoạt động trên Wi-Fi nhưng không trên di động.

**Nguyên nhân:** Xung đột định tuyến giữa Cuộc gọi qua Wi-Fi và dữ liệu di động. Khi Cuộc gọi qua Wi-Fi đang hoạt động, điện thoại có thể ưu tiên mạng Wi-Fi cho tất cả các liên lạc, bao gồm dữ liệu, và không định tuyến dữ liệu di động chính xác qua eSIM.

**Cách khắc phục:**
1. Tạm thời tắt Cuộc gọi qua Wi-Fi trên đường truyền nhà: Cài đặt > Di động > [đường truyền nhà] > Cuộc gọi qua Wi-Fi > tắt.
2. Bật và tắt Chế độ máy bay để buộc điện thoại đăng ký lại trên mạng di động.
3. Kiểm tra kết nối dữ liệu eSIM. Nếu nó hoạt động, bạn có thể bật Cuộc gọi qua Wi-Fi lại — định tuyến sẽ đúng.
4. Nếu sự cố tái diễn, hãy kiểm tra rằng đường truyền nhà của bạn có **Data Roaming OFF** và travel eSIM có **Data Roaming ON**.

**Thay thế:** Trên iPhone, đến Cài đặt > Di động > Dữ liệu di động và đảm bảo travel eSIM được chọn. Sau đó bật "Allow Cellular Data Switching" — điều này cho phép điện thoại sử dụng travel eSIM cho dữ liệu Cuộc gọi qua Wi-Fi ngay cả khi đường truyền nhà là đường thoại.

---

## 19. Xung đột eSIM vs SIM Vật lý

**Triệu chứng:** Bạn cắm thẻ SIM vật lý vào điện thoại và eSIM đang hoạt động trước đó đột nhiên hiển thị "No Service" hoặc biến mất hoàn toàn khỏi Cài đặt.

**Nguyên nhân:** Đây là hành vi đã biết trên các thiết bị bị khóa nhà mạng. Khi một iPhone bị khóa phát hiện SIM vật lý từ nhà mạng khác, nó có thể vô hiệu hóa khe eSIM để ngăn sử dụng trái phép. Trên một số thiết bị Android, cắm SIM vật lý cũng có thể khiến hệ thống ưu tiên SIM vật lý hơn eSIM cho tất cả các chức năng.

**Cách khắc phục:**
1. Tháo thẻ SIM vật lý khỏi khay.
2. Khởi động lại điện thoại của bạn.
3. eSIM sẽ xuất hiện lại trong Cài đặt > Di động (iPhone) hoặc Cài đặt > Kết nối > Trình quản lý SIM (Android).
4. Nếu eSIM xuất hiện lại nhưng vẫn hiển thị "No Service", hãy bật Chuyển vùng Dữ liệu cho đường eSIM.
5. Nếu bạn cần cả SIM vật lý và eSIM hoạt động đồng thời, hãy liên hệ nhà mạng để mở khóa thiết bị của bạn.

> **Thay thế:** Một số người dùng báo cáo rằng việc bật/tắt đường eSIM (mà không tháo SIM vật lý) giải quyết được xung đột. Hãy thử cách này trước khi tháo SIM vật lý.

---

## 20. Apple Watch eSIM Không Hoạt động

**Triệu chứng:** Bạn đã thiết lập di động trên Apple Watch, nhưng nó hiển thị "No Service" hoặc "Searching" — hoặc gói eSIM không xuất hiện trong ứng dụng Watch.

**Nguyên nhân:** Kích hoạt eSIM Apple Watch yêu cầu nhà mạng hỗ trợ loại gói cụ thể của đồng hồ và thiết lập yêu cầu iPhone của bạn ở gần với kết nối internet ổn định.

**Cách khắc phục:** Kiểm tra nhà mạng của bạn có hỗ trợ Apple Watch eSIM không, sau đó hủy ghép nối và ghép nối lại đồng hồ, giữ iPhone gần trong suốt quá trình. Nếu vẫn không kích hoạt, hãy liên hệ nhà mạng với **EID** và **IMEI** của đồng hồ để họ cung cấp thủ công. Để có hướng dẫn đầy đủ — bao gồm các mẫu iPad và Apple Watch nào hỗ trợ eSIM — hãy xem [hướng dẫn eSIM iPad và Apple Watch](/faq/ipad-apple-watch-esim-support-guide/) của chúng tôi.

---

## Bảng Tham khảo Mã Lỗi – Những Con Số Này Có Nghĩa Là Gì?

| Mã lỗi | Nền tảng | Ý nghĩa | Cách khắc phục |
|------------|----------|---------|-----|
| **4013** | iPhone (khôi phục) | Lỗi phần cứng/phần mềm trong quá trình khôi phục | Đổi cáp, cổng USB, cập nhật macOS/iTunes |
| **4014** | iPhone (khôi phục) | Tương tự 4013; thường là sự cố giao tiếp USB | Giống như trên |
| **-8** | Android (kích hoạt) | Hết thời gian chờ mạng | Đợi và thử lại hoặc đổi Wi‑Fi |
| **-100** | Android (quét QR) | Định dạng mã QR không được hỗ trợ | Sử dụng nhập thủ công |
| **0xE8000001** | iPhone (kích hoạt) | Máy chủ nhà mạng không truy cập được | Thử lại sau 5 phút hoặc sử dụng nhập thủ công |
| **"eSIM configuration not supported"** | Android (Samsung) | Nhà mạng không hỗ trợ eSIM trên kiểu máy đó | Kiểm tra với nhà mạng |
| **"Invalid SM‑DP+ address"** | Cả hai | Địa chỉ nhập thủ công sai | Kiểm tra lại địa chỉ từ nhà cung cấp của bạn |
| **"LPA error -1"** | Android | Lỗi LPA (Local Profile Assistant) chung | Khởi động lại điện thoại, thử lại. Nếu vẫn, hãy sử dụng ứng dụng eSIM khác. |
| **"EID mismatch"** | Cả hai | Hồ sơ được liên kết với thiết bị khác | Liên hệ nhà mạng để giải phóng hồ sơ (Phần 4) |
| **"No EID" khi quay `*#06#`** | Cả hai | Thiết bị không hỗ trợ eSIM | Điện thoại của bạn thiếu phần cứng eSIM — xem [hướng dẫn tương thích](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi |
| **"eSIM management not available"** | Android (OnePlus) | Lỗi Oxygen OS | Cập nhật lên phiên bản Oxygen OS mới nhất |
| **"Profile cannot be deleted"** | iPhone | eSIM kẹt ở trạng thái đang chờ | Khởi động lại iPhone, sau đó thử xóa lại. Nếu kẹt, liên hệ nhà mạng. |
| **-1** | Cả hai | Lỗi kích hoạt chung | Khởi động lại điện thoại, đảm bảo kết nối mạng, thử lại |
| **-2** | Android | Mã kích hoạt không hợp lệ | Nhập lại mã hoặc yêu cầu mã mới từ nhà mạng |


## 7 Sai lầm Chết người Phá hỏng eSIM của Bạn – Và Cách Tránh

Đây là những lỗi người dùng phổ biến nhất biến một eSIM đang hoạt động thành một cục gạch. Tránh chúng bằng mọi giá.

| Sai lầm | Điều gì xảy ra | Cách Tránh |
|---------|--------------|---------|
| **Xóa eSIM để "sửa" sự cố kết nối** | Hồ sơ bị xóa vĩnh viễn — bạn mất tất cả dữ liệu còn lại và phải mua gói mới | Không bao giờ nhấn "Delete eSIM" trừ khi gói đã hết hạn hoàn toàn. Xóa không "làm mới" — nó phá hủy. |
| **Quét mã QR bằng ứng dụng Camera** | Camera nhận dạng mã nhưng không làm gì — không cài đặt hồ sơ | Luôn mở Cài đặt > Di động > Thêm eSIM trước — không bao giờ sử dụng ứng dụng Camera riêng lẻ. |
| **Cài đặt tại sân bay với Wi-Fi yếu** | Tải xuống bị ngắt giữa cài đặt, làm hỏng hồ sơ | Cài đặt tại nhà trên Wi-Fi ổn định của bạn trước khi bạn đi. |
| **Đợi đến khi hạ cánh để cài đặt** | Bạn đến nơi không có Wi-Fi và không thể tải hồ sơ | Cài đặt hồ sơ trước khi khởi hành (nó nằm không hoạt động cho đến khi bạn bật Chuyển vùng Dữ liệu). |
| **Quên bật Chuyển vùng Dữ liệu cho eSIM** | Đầy đủ vạch sóng nhưng không có internet | Sau khi hạ cánh, đến Cài đặt > Di động > [eSIM của bạn] và bật Chuyển vùng Dữ liệu. |
| **Đặt lại cài đặt mạng nghĩ rằng nó sẽ "làm mới" eSIM** | Đặt lại mạng không xóa eSIM, nhưng nó xóa mật khẩu Wi-Fi và kết nối Bluetooth — bạn mất tất cả mạng đã lưu | Chỉ đặt lại cài đặt mạng như là giải pháp cuối cùng và biết rằng nó sẽ không khắc phục sự cố kích hoạt eSIM. |
| **Tắt đường eSIM thay vì chỉ tắt Chuyển vùng Dữ liệu** | eSIM bị vô hiệu hóa hoàn toàn và sẽ không đăng ký khi bạn bật lại | Tắt Chuyển vùng Dữ liệu, không phải toàn bộ đường truyền. Giữ đường truyền BẬT nhưng chuyển vùng TẮT khi không sử dụng. |


## Triệu chứng Kết hợp – Khi Bạn Có Nhiều Vấn đề

Đôi khi bạn không chỉ có một vấn đề — bạn có hai hoặc ba cùng lúc. Đây là cách chẩn đoán các triệu chứng kết hợp:

| Kết hợp Triệu chứng | Điều gì thực sự đang xảy ra | Thứ tự Khắc phục |
|---------------------|---------------------------|-----------|
| **Mã QR quét được nhưng sau đó "Activation failed"** | Mã QR hợp lệ, nhưng máy chủ tải xuống không truy cập được | Sửa mạng trước (Phần 1), sau đó quét lại |
| **eSIM hiển thị vạch sóng nhưng không có dữ liệu VÀ "No Service" trên đường truyền nhà** | Thiếu APN VÀ bạn có xung đột định tuyến SIM kép | Sửa APN trước (Phần 8), sau đó sửa định tuyến SIM kép (Phần 10) |
| **Chuyển thành công nhưng điện thoại mới có "No Service"** | Hồ sơ được chuyển nhưng không đăng ký trên mạng mới | Xóa eSIM khỏi điện thoại cũ, sau đó khởi động lại điện thoại mới (Phần 4 + Phần 2) |
| **Cuộc gọi qua Wi-Fi hoạt động nhưng eSIM không có dữ liệu VÀ đường truyền nhà có phí chuyển vùng** | Nhiều xung đột định tuyến cộng với Chuyển vùng Dữ liệu vẫn bật trên đường truyền nhà | Tắt Chuyển vùng Dữ liệu đường truyền nhà, sửa xung đột Cuộc gọi qua Wi-Fi (Phần 18), sau đó kiểm tra APN |
| **eSIM biến mất sau khi khởi động lại VÀ "Cellular Plan Cannot Be Added"** | Hồ sơ bị hỏng VÀ bộ nhớ đầy | Xóa eSIM không sử dụng trước (Phần 5), sau đó thử thêm lại (Phần 17) |

**Quy tắc chung:** Sửa **vấn đề mạng trước** (Wi-Fi, Chuyển vùng Dữ liệu, APN), sau đó **vấn đề hồ sơ** (mã QR, kích hoạt), sau đó **vấn đề cụ thể thiết bị** (khóa nhà mạng, MDM). Đừng cố sửa mọi thứ cùng lúc — hãy làm từng triệu chứng một.


## Đường dẫn Menu Theo Thiết bị – Nơi "Add eSIM" Nằm Trên Mỗi Điện thoại

Cách khắc phục cho hầu hết lỗi là giống nhau, nhưng đường dẫn menu để đến điều khiển eSIM khác nhau theo thương hiệu. Dưới đây là các đường dẫn chính xác cộng với các lỗi chỉ xuất hiện trên các thiết bị cụ thể.

### iPhone (iOS 16–18)
- **"Add eSIM" bị mờ** – iPhone của bạn có thể bị khóa nhà mạng. Kiểm tra Cài đặt > Cài đặt chung > Giới thiệu > Carrier Lock; để biết cách khắc phục khóa nhà mạng đầy đủ, hãy xem [hướng dẫn tương thích](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi.
- **Chuyển nhanh thất bại** – đảm bảo cả hai điện thoại đều cùng Apple ID, bật Bluetooth và trong vòng 10cm của nhau.
- **Sau khi cập nhật iOS, eSIM hiển thị "No Service"** – đến Cài đặt > Di động > nhấn eSIM > bật/tắt "Turn On This Line". Cũng kiểm tra Chuyển vùng Dữ liệu vẫn BẬT.
- **eSIM biến mất sau khi cập nhật iOS** – xem Phần 17. Điều này phổ biến hơn trên iOS so với Android sau các bản cập nhật lớn.
- **iOS 18 cụ thể:** Luồng "Add eSIM" đã được thiết kế lại với tùy chọn nhập thủ công nổi bật hơn. Nếu bạn đang dùng iOS 18 và mã QR không quét được, nút nhập thủ công giờ dễ tìm hơn ở cuối màn hình.

### Samsung Galaxy (One UI 5, 6, 6.1, 7)
- **Đường dẫn menu khác nhau theo phiên bản One UI:**
  - **One UI 5 (Android 13):** Cài đặt > Kết nối > Trình quản lý SIM > Thêm eSIM
  - **One UI 6/6.1 (Android 14):** Cài đặt > Kết nối > Trình quản lý SIM > Thêm eSIM (cùng đường dẫn)
  - **One UI 7 (Android 15):** Cài đặt > Kết nối > Trình quản lý SIM > Thêm gói di động
- **Quét mã QR thất bại** – thử nhập thủ công (nhấn "Enter activation code manually"). Samsung thường yêu cầu địa chỉ SM‑DP+ và mã kích hoạt riêng.
- **Xung đột SIM kép** – nếu bạn có SIM vật lý và eSIM, kiểm tra eSIM được đặt làm SIM dữ liệu trong Trình quản lý SIM.

### Google Pixel (Android 13/14/15)
- **"Download a SIM instead?"** – tùy chọn này xuất hiện ở cuối màn hình cài đặt SIM. Nếu bạn không thấy nó, Pixel của bạn có thể bị khóa nhà mạng.
- **eSIM không xuất hiện sau khi quét** – khởi động lại điện thoại. Pixel đôi khi cần khởi động lại sau khi tải hồ sơ.
- **Cài đặt APN không lưu** – trên Pixel, cài đặt APN nằm trong Mạng & Internet > SIM > [eSIM của bạn] > Tên điểm truy cập. Nếu chúng không lưu:
  1. Thêm APN mới với **tên khác** (ví dụ: "Airalo 2" thay vì "Airalo").
  2. Lưu nó, sau đó chọn thủ công.
  3. Bật và tắt Chế độ máy bay để buộc APN mới có hiệu lực.
- **eSIM biến mất sau khi khởi động lại trên Pixel** – xem Phần 17. Người dùng Pixel báo cáo điều này thường xuyên hơn người dùng Samsung.

### OnePlus (Oxygen OS 13/14)
- **Đường dẫn menu:** Cài đặt > Wi-Fi & Mạng > SIM & Mạng > Thêm eSIM
- **Sự cố thường gặp:** Thiết bị OnePlus đôi khi hiển thị "eSIM not available" sau khi cập nhật Oxygen OS. Cách khắc phục: Đến Cài đặt > Hệ thống > Cập nhật hệ thống và cài đặt bản vá mới nhất.
- **Cài đặt APN:** Nằm trong Cài đặt > Wi-Fi & Mạng > SIM & Mạng > [eSIM] > Tên điểm truy cập.

### Xiaomi (MIUI/HyperOS)
- **Đường dẫn menu:** Cài đặt > Thẻ SIM & Mạng di động > Thêm eSIM
- **Cài đặt APN:** Nằm trong Cài đặt > Thẻ SIM & Mạng di động > [eSIM] > Tên điểm truy cập.

### Oppo/Realme (ColorOS)
- **Đường dẫn menu:** Cài đặt > Mạng di động > Thêm eSIM

**Không chắc kiểu máy chính xác của bạn có phần cứng eSIM không** (Xiaomi thị trường Trung Quốc, Huawei, Samsung A-series bị nhà mạng vô hiệu hóa)? Đó là câu hỏi tương thích — hãy xem [hướng dẫn phần cứng & tương thích](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi, bao gồm hỗ trợ theo từng kiểu máy.


## Tình huống Nâng cao: eSIM Hoạt động ở Nhà nhưng Không hoạt động ở Nước ngoài

**Triệu chứng:** Bạn đã cài đặt eSIM tại nhà, nó hiển thị vạch sóng, nhưng khi bạn hạ cánh tại điểm đến, không có dịch vụ.

**Nguyên nhân gốc:** Hồ sơ eSIM đã được kích hoạt khi bạn đang ở mạng nhà và nó chưa đăng ký với mạng đích.

**Cách khắc phục:**
1. Tắt đường eSIM (`Cài đặt > Di động > tắt`).
2. Đợi 10 giây, sau đó bật lại.
3. Đến Chọn mạng, tắt "Tự động", chọn thủ công mạng mà nhà cung cấp của bạn hợp tác (hỏi nhà cung cấp của bạn danh sách đối tác).
4. Nếu thất bại, bật và tắt Chuyển vùng Dữ liệu.
5. Khởi động lại điện thoại.

Nếu điều này vẫn không hiệu quả, hãy liên hệ nhà cung cấp của bạn — gói eSIM của bạn có thể không bao gồm quốc gia bạn đang ở hoặc có thể có vấn đề thỏa thuận chuyển vùng.


## Tình huống Nâng cao: eSIM Hoạt động trên Một Nhà mạng nhưng Không trên Nhà mạng Khác

**Triệu chứng:** Bạn có một eSIM hoạt động tốt, nhưng khi bạn thử thêm eSIM thứ hai từ nhà mạng khác, nó thất bại hoặc hiển thị "No Service."

**Nguyên nhân gốc:** Một số kiểu điện thoại (đặc biệt là cũ hơn) có giới hạn về việc hồ sơ nhà mạng nào có thể cùng tồn tại. Điều này phổ biến hơn trên thiết bị Android với phần sụn modem cũ hơn.

**Cách khắc phục:**
1. Kiểm tra điện thoại của bạn hỗ trợ eSIM kép (iPhone 13 trở lên, Pixel 7 trở lên, Samsung S23 trở lên).
2. Nếu bạn có SIM vật lý cắm vào, hãy thử tháo nó ra — một số điện thoại giới hạn số lượng hồ sơ hoạt động khi có SIM vật lý.
3. Cập nhật phần sụn điện thoại của bạn (cập nhật cài đặt nhà mạng thường khắc phục điều này).
4. Liên hệ nhà mạng thứ hai và hỏi xem hồ sơ eSIM của họ có hỗ trợ cùng tồn tại SIM kép không.


## Khi Nào Liên hệ Nhà cung cấp eSIM vs. Nhà sản xuất Điện thoại

| Vấn đề | Liên hệ |
|---------|---------|
| Mã QR hết hạn / không hợp lệ | Nhà cung cấp eSIM |
| "Activation failed" liên tục | Nhà cung cấp eSIM |
| Không có dữ liệu sau cấu hình APN | Nhà cung cấp eSIM |
| Thiết bị hiển thị "No Service" sau khi hạ cánh | Nhà cung cấp eSIM (kiểm tra thỏa thuận chuyển vùng) |
| eSIM không hiển thị trong cài đặt | Nhà sản xuất điện thoại (nếu lỗi phần mềm) hoặc vấn đề khóa nhà mạng |
| Vấn đề phần cứng (máy ảnh, màn hình, pin) | Nhà sản xuất điện thoại |
| Khóa nhà mạng / mở khóa | Nhà mạng trong nước của bạn |
| Hạn chế MDM | Bộ phận IT của bạn |
| eSIM biến mất sau khi khởi động lại | Cả hai — thử các cách khắc phục trong Phần 17, sau đó liên hệ nhà cung cấp |
| "eSIM already in use" | Nhà cung cấp eSIM (để giải phóng hồ sơ) |
| Apple Watch eSIM không kết nối | Nhà mạng (để cấp phát) hoặc Apple Support (cho sự cố ghép nối) |


## Câu hỏi thường gặp

**Q1: Xóa eSIM có hủy gói của tôi không?**
Không. Xóa eSIM chỉ xóa hồ sơ khỏi điện thoại. Bạn phải liên hệ riêng với nhà mạng để hủy gói.

**Q2: Tôi có thể khôi phục eSIM đã xóa không?**
Đối với eSIM nhà mạng trả sau, có — nhà mạng có thể cấp lại hồ sơ. Đối với travel eSIM, việc xóa thường là vĩnh viễn và yêu cầu mua mới.

**Q3: Tại sao eSIM của tôi hoạt động trên Wi-Fi nhưng không trên di động?**
Điều này hầu như luôn là vấn đề APN hoặc Chuyển vùng Dữ liệu. Làm theo Phần 8 và Phần 14.

**Q4: eSIM có làm hao pin nhanh hơn không?**
Không. Chạy hai đường truyền hoạt động cùng lúc có thể sử dụng nhiều pin hơn một chút, nhưng một eSIM đơn lẻ không làm hao pin.

**Q5: Tôi có thể lưu trữ bao nhiêu eSIM trên điện thoại?**
Thường 8–10 hồ sơ trên iPhone và hầu hết thiết bị Android. Bạn có thể lưu nhiều hơn nhưng chỉ có hai hoạt động cùng lúc (SIM kép).

**Q6: Tại sao eSIM của tôi liên tục mất tín hiệu?**
Điều này có thể do tắc nghẽn mạng, phủ sóng yếu hoặc lỗi phần mềm. Thử bật/tắt Chế độ máy bay, khởi động lại hoặc chọn mạng thủ công.

**Q7: Tôi thấy "Activation Required" trên eSIM sau khi khởi động lại – điều đó có nghĩa là gì?**
Điện thoại mất kết nối với máy chủ kích hoạt của nhà mạng. Khởi động lại điện thoại và đảm bảo bạn có kết nối mạng. Nếu vẫn, hãy xóa và cài đặt lại eSIM.

**Q8: Nếu nhà mạng của tôi nói họ không hỗ trợ eSIM thì sao?**
Bạn vẫn có thể sử dụng các nhà cung cấp travel eSIM như Roami, Airalo hoặc Holafly — chúng hoạt động độc lập với nhà mạng trong nước của bạn và không yêu cầu hỗ trợ nhà mạng.

**Q9: eSIM của tôi được chuyển sang iPhone mới nhưng tôi không thể gọi – chỉ dữ liệu hoạt động.**
Kiểm tra eSIM được đặt làm Đường thoại mặc định. Cũng đảm bảo nhà mạng của bạn hỗ trợ VoLTE cho đường đó.

**Q10: Quét mã QR hoạt động nhưng tải xuống mất quá lâu – điều đó có bình thường không?**
Không. Nó sẽ mất 1–2 phút. Nếu lâu hơn, Wi‑Fi của bạn quá chậm. Chuyển mạng hoặc sử dụng nhập thủ công.

**Q11: eSIM của tôi đang hoạt động nhưng tôi không thể gửi hoặc nhận SMS.**
Một số travel eSIM chỉ dữ liệu và không hỗ trợ SMS. Nếu bạn cần SMS, hãy mua gói bao gồm số điện thoại.

**Q12: Tôi vô tình đặt lại cài đặt mạng – bây giờ eSIM của tôi biến mất.**
Đặt lại cài đặt mạng không xóa hồ sơ eSIM. eSIM của bạn vẫn phải ở đó. Đến Cài đặt > Di động và bật lại đường truyền. Nếu biến mất, bạn có thể đã vô tình xóa nó — sau đó xem Phần 15.

**Q13: Sự khác biệt giữa xóa eSIM và tắt nó là gì?**
Tắt eSIM giữ hồ sơ trên điện thoại nhưng vô hiệu hóa đường truyền. Bạn có thể bật lại bất kỳ lúc nào. Xóa eSIM xóa vĩnh viễn hồ sơ — bạn không thể khôi phục nó nếu không có mã QR mới. Chỉ xóa khi gói đã hết hạn hoàn toàn.

**Q14: VPN có thể ảnh hưởng đến kích hoạt eSIM không?**
Có — VPN có thể ảnh hưởng đến kết nối máy chủ kích hoạt. Tắt VPN trước khi kích hoạt eSIM.

**Q15: Gói eSIM của tôi ghi "không giới hạn" nhưng tôi không có dữ liệu sau khi sử dụng 5GB.**
Nhiều gói "không giới hạn" có Chính sách sử dụng hợp lý (FUP) giới hạn tốc độ sau một ngưỡng dữ liệu nhất định. Kiểm tra điều khoản của nhà cung cấp — bạn có thể cần mua gói nạp thêm để có thêm dữ liệu tốc độ cao.

👉 **Đã xử lý sự cố?** Chọn [gói eSIM Mỹ](/united-states-esim/) hoặc [gói eSIM Châu Âu](/europe-esim/) để trực tuyến trở lại.

---

## Nguồn

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — eSIM on iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)