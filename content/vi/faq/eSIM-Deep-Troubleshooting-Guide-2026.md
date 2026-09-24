---
title: "Hướng dẫn khắc phục sự cố eSIM chuyên sâu 2026"
h1_title: "Cẩm nang toàn diện về khắc phục sự cố eSIM năm 2026 – 18 giải pháp thực tế"
description: "Khắc phục lỗi kích hoạt eSIM, lỗi chuyển đổi, mất sóng và sự cố quét mã QR trên iPhone và Android với hướng dẫn khắc phục sự cố năm 2026 này."
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["eSIM troubleshooting", "eSIM activation failed", "eSIM no service", "eSIM transfer error", "eSIM cross-platform transfer", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "eSIM carrier lock", "eSIM stuck on activating"]
date: 2026-09-14T00:00:00Z
lastmod: 2026-09-14T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Cập nhật vào"
  min_read: "phút đọc"
  toc: "Mục lục"

breadcrumbs:
  home:
    text: "Trang chủ"
    url: "/"
  parent:
    text: "Trung tâm trợ giúp"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIM phổ biến"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Germany eSIM"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe eSIM"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkey eSIM"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japan eSIM"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "China eSIM"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Nhận eSIM miễn phí"
  icon: "🎁"
  item_suffix: "eSIM miễn phí"
  item_subtitle: "eSIM miễn phí"
  items:
    - name: "UK eSIM"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Germany"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thailand"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "Câu hỏi phổ biến"
  items:
    - question: "Kích hoạt eSIM là gì và nó hoạt động như thế nào?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Cách kích hoạt eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Cách kích hoạt eSIM trên iPhone (mọi dòng máy)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Danh sách tương thích eSIM mới nhất"
      url: "/compatibility/"
---


> **Lưu ý của biên tập viên:** Roami vận hành bộ phận hỗ trợ đằng sau tài liệu tham khảo này. Khi một khách du lịch gặp phải lỗi cụ thể trên màn hình — "Activation failed," "No Service," "Cellular Plan Cannot Be Added," lỗi khôi phục 4013/4014 — đây chính là trang mà đội ngũ của chúng tôi mở ra để giải mã. Mỗi mục dưới đây ánh xạ một thông báo lỗi chính xác đến nguyên nhân thực sự và một giải pháp cụ thể, đã được kiểm thử trên iOS 18 và Android 14/15 tính đến tháng 9 năm 2026.

> **Trang sai rồi?** Nếu câu hỏi của bạn là "điện thoại của tôi có hỗ trợ eSIM không" — bản Trung Quốc/Hồng Kông, khóa nhà mạng, thiếu EID — đó là câu hỏi về phần cứng, không phải lỗi. Hãy chuyển đến [hướng dẫn phần cứng & mã lỗi eSIM](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi. Trang này giả định điện thoại của bạn có thể dùng eSIM và vấn đề là một thông báo lỗi cụ thể.

## Sơ đồ chẩn đoán eSIM nhanh

Sử dụng bản đồ quyết định này để chuyển thẳng đến giải pháp cho chính xác thông báo trên màn hình của bạn.

| Những gì bạn thấy / trải nghiệm | Điều gì có thể bị hỏng | Mức độ khẩn cấp | Chuyển đến giải pháp |
|---------------------------|----------------------|---------|-------------|
| **Mã QR không quét được / báo invalid** | Mã QR hết hạn hoặc hỏng | Thấp | [Mục 3](#esim-qr-code-invalid-or-expired) |
| **"Unable to Activate" hoặc "Activation failed"** | Mạng timeout hoặc lỗi máy chủ | Trung bình | [Mục 1](#esim-activation-failed-or-unable-to-activate) |
| **"No Service" sau khi cài đặt** | Data Roaming tắt hoặc thiếu APN | Cao | [Mục 2](#esim-no-service-after-installation) |
| **Sóng đầy vạch nhưng không có internet** | APN cấu hình sai | Cao | [Mục 8](#esim-no-data-connection-after-activation) |
| **"Cellular Plan Cannot Be Added"** | Quá nhiều eSIM đã lưu hoặc hạn chế phần cứng | Trung bình | [Mục 5](#esim-cellular-plan-cannot-be-added) |
| **"eSIM already in use"** | Hồ sơ vẫn gắn với thiết bị cũ | Cao | [Mục 4](#esim-already-in-use-or-bound-to-another-device) |
| **Bảng nhập mã xác nhận** | Hồ sơ yêu cầu mã PIN | Thấp | [Mục 6](#esim-confirmation-code-required) |
| **"SIM not supported"** | Điện thoại bị khóa nhà mạng | Cao | [Mục 7](#esim-sim-not-supported-on-a-carrier-locked-device) |
| **Kẹt ở "Activating" hơn 10 phút** | Tải xuống bị treo | Trung bình | [Mục 9](#esim-stuck-on-activating) |
| **Dual SIM: một đường mất sóng** | Xung đột định tuyến | Trung bình | [Mục 10](#dual-esim-with-one-line-showing-no-service) |
| **Chuyển eSIM sang máy mới nhưng thất bại** | Chuyển đổi đa nền tảng không được hỗ trợ | Cao | [Mục 11](#esim-transfer-failed) |
| **Lỗi khôi phục iPhone 4013/4014** | Vấn đề phần cứng/firmware, không phải eSIM | Cao | [Mục 12](#iphone-esim-restore-error-4013-or-4014) |
| **"Profile expired"** | Mã QR hết thời hạn | Thấp | [Mục 13](#esim-profile-expired) |
| **Roaming không hoạt động ở nước ngoài** | Công tắc Data Roaming đang tắt | Cao | [Mục 14](#esim-data-roaming-not-working) |
| **Vô tình xóa eSIM** | Lỗi người dùng | Cao | [Mục 15](#esim-deleted-by-mistake) |
| **MDM chặn thay đổi eSIM** | Chính sách thiết bị công ty | Trung bình | [Mục 16](#mdm-or-enterprise-restrictions-block-esim) |
| **eSIM biến mất sau khi khởi động lại** | Lỗi phần mềm iOS/Android | Cao | [Mục 17](#esim-disappeared-after-restart) |
| **Wi-Fi Calling hoạt động nhưng dữ liệu eSIM thì không** | Xung đột định tuyến giữa Wi-Fi và mạng di động | Trung bình | [Mục 18](#wi-fi-calling-works-but-esim-data-does-not) |
| **Cài SIM vật lý, eSIM không hoạt động** | Xung đột khay SIM | Cao | [Mục 19](#esim-vs-physical-sim-conflict) |
| **Apple Watch eSIM không kết nối** | Vấn đề ghép đôi đồng hồ hoặc nhà mạng | Trung bình | [Mục 20](#apple-watch-esim-not-working) |


## Bảng tham khảo nhanh

| Triệu chứng | Nguyên nhân khả dĩ nhất | Giải pháp |
|---------|-------------------|-----|
| "Unable to Activate" / "Activation failed" | Wi-Fi không ổn định hoặc lỗi máy chủ nhà mạng | Mạng ổn định + thử lại, sau đó cài lại (Mục 1) |
| "No Service" sau khi cài đặt | Roaming tắt / thiếu APN | Bật roaming, kiểm tra APN (Mục 2) |
| Mã QR "Invalid" / "Expired" | Mã QR hết hạn hoặc đã dùng | Yêu cầu mã QR mới (Mục 3) |
| "eSIM already in use" | Hồ sơ chưa được giải phóng khỏi thiết bị cũ | Xóa khỏi thiết bị cũ hoặc nhà mạng giải phóng (Mục 4) |
| "Cellular Plan Cannot Be Added" | Quá nhiều eSIM đã lưu | Xóa các eSIM không dùng (Mục 5) |
| Yêu cầu mã xác nhận | Hồ sơ có mã bắt buộc | Tìm mã 4–8 chữ số trong email nhà mạng (Mục 6) |
| "SIM not supported" | Thiết bị bị khóa nhà mạng | Mở khóa thiết bị hoặc liên hệ nhà mạng (Mục 7) |
| Không có dữ liệu sau kích hoạt | APN chưa cấu hình | Nhập APN thủ công (Mục 8) |
| Kẹt ở "Activating" | Tải hồ sơ bị treo | Bật/tắt Airplane Mode, cài lại (Mục 9) |
| Một đường dual-SIM "No Service" | Xung đột định tuyến cuộc gọi/dữ liệu | Kiểm tra định tuyến đường và các công tắc (Mục 10) |
| Chuyển eSIM thất bại | Nhà mạng không hỗ trợ chuyển đổi | Dùng mã QR dự phòng từ nhà mạng (Mục 11) |
| Lỗi khôi phục 4013 / 4014 | Phần cứng/firmware trong lúc khôi phục | Đổi cáp, cập nhật máy tính (Mục 12) |
| "Profile expired" | Mã QR giới hạn thời gian | Yêu cầu mã QR mới (Mục 13) |
| Data roaming không hoạt động | Roaming tắt cho đường eSIM | Bật Data Roaming (Mục 14) |
| Xóa nhầm eSIM | Hồ sơ bị xóa cục bộ | Liên hệ nhà mạng / mua gói mới (Mục 15) |
| MDM chặn thay đổi eSIM | Hạn chế doanh nghiệp | Liên hệ quản trị viên IT (Mục 16) |
| eSIM biến mất sau khi khởi động lại | Lỗi phần mềm iOS/Android | Kiểm tra cài đặt, thêm lại hồ sơ (Mục 17) |
| Wi-Fi Calling hoạt động nhưng dữ liệu thì không | Xung đột định tuyến | Tắt Wi-Fi Calling tạm thời (Mục 18) |
| Cài SIM vật lý, eSIM ngừng hoạt động | Xung đột khay/đầu đọc | Tháo SIM vật lý, khởi động lại (Mục 19) |
| Apple Watch eSIM không kết nối | Vấn đề ghép đôi hoặc nhà mạng | Ghép đôi lại đồng hồ, liên hệ nhà mạng (Mục 20) |


## eSIM Activation Failed Hoặc Unable to Activate

**Nguyên nhân:** Gần như luôn là kết nối Wi-Fi không ổn định hoặc lỗi tạm thời từ máy chủ nhà mạng (SM-DP+), không phải vấn đề của điện thoại bạn. SM-DP+ (Subscription Manager - Data Preparation Plus) là máy chủ bảo mật giao hồ sơ eSIM cho thiết bị của bạn — nếu không truy cập được, việc kích hoạt sẽ thất bại.

**Giải pháp:**
1. Chuyển sang kết nối Wi-Fi hoặc dữ liệu di động ổn định.
2. Bật rồi tắt Airplane Mode để làm mới baseband.
3. Nếu lỗi lặp lại, xóa eSIM đang chờ trong `Settings > Cellular`, khởi động lại, rồi quét lại mã QR.

**Đặc thù iOS 18:** Trên iOS 18, thông báo có thể hiển thị "Unable to Complete Activation" với nút Retry. Hãy chạm Retry trước — quy trình kích hoạt cải tiến của iOS 18 thường giải quyết được vấn đề mà không cần cài lại hoàn toàn.

---

## eSIM Không Có Sóng Sau Khi Cài Đặt

**Nguyên nhân:** Hồ sơ đã cài đặt nhưng điện thoại chưa đăng ký với mạng nội địa — thường do Data Roaming tắt hoặc thiếu APN.

**Giải pháp:**
1. Bật **Data Roaming** cho đường eSIM.
2. Trong `Settings > Cellular > [eSIM của bạn] > Network Selection`, tắt "Automatic", chọn thủ công một nhà mạng, chờ nó thất bại, rồi chuyển lại "Automatic" để buộc đăng ký lại.
3. Nếu vẫn không có dữ liệu, kiểm tra APN (Mục 8).

---

## Mã QR eSIM Invalid Hoặc Expired

**Nguyên nhân:** Mã QR eSIM chỉ dùng một lần và giới hạn thời gian. Mã đã được dùng hoặc đã hết hạn.

**Giải pháp:** Liên hệ nhà cung cấp eSIM và yêu cầu cấp lại mã QR mới, rồi quét ngay lập tức.

**Nếu bạn quét từ màn hình điện thoại:** Lưu ảnh mã QR vào Photos trước, rồi trong Settings > Cellular > Add eSIM, chọn "Use QR Code" và chạm "Choose Photo" để chọn ảnh đã lưu. Điều này tránh vấn đề "không thể quét màn hình của chính mình".

---

## eSIM Already in Use Hoặc Bị Gắn Với Thiết Bị Khác

**Nguyên nhân:** Hồ sơ chưa bao giờ được giải phóng khỏi thiết bị cũ, nên nhà mạng vẫn liên kết nó với điện thoại đó.

**Giải pháp:**
1. Trên thiết bị cũ, xóa eSIM trong `Settings > Cellular`.
2. Chờ khoảng năm phút rồi thử lại trên thiết bị mới.
3. Nếu thiết bị cũ bị mất hoặc hỏng, liên hệ nhà mạng và nhờ họ giải phóng hồ sơ từ phía họ.

---

## eSIM Cellular Plan Cannot Be Added

**Nguyên nhân:** Điện thoại đã đạt giới hạn số hồ sơ eSIM được lưu (thường 8–10, tùy model), hoặc thiết bị là bản Trung Quốc đại lục không có phần cứng eSIM.

**Giải pháp:** Xóa các eSIM không dùng trong `Settings > Cellular`, rồi thêm eSIM mới. Nếu thiết bị của bạn được mua ở Trung Quốc đại lục, nó dùng hai khe SIM vật lý và không thể thêm eSIM — để biết cách nhận diện bản Trung Quốc hoặc Hồng Kông và xác nhận điện thoại của bạn có phần cứng, xem [hướng dẫn kiểm tra phần cứng & lỗi](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi.

---

## eSIM Yêu Cầu Mã Xác Nhận

**Nguyên nhân:** Một số hồ sơ eSIM có mã xác nhận bắt buộc phải nhập trước khi hồ sơ tải xuống. Đây là mã PIN 4-8 chữ số xác minh danh tính của bạn.

**Giải pháp:** Tìm mã 4–8 chữ số trong email nhà mạng gửi kèm mã QR. Nếu không tìm thấy, hãy liên hệ nhà mạng.

**Những nơi thường tìm thấy mã xác nhận:**
- Dòng tiêu đề của email kích hoạt
- Gần cuối email, dưới mục "Activation Details"
- Trong ứng dụng nhà mạng, tại "My Plans" > "Details"

---

## eSIM SIM Not Supported trên Thiết Bị Bị Khóa Nhà Mạng

**Nguyên nhân:** Điện thoại bị khóa vào nhà mạng khác và không thể chấp nhận hồ sơ từ nhà cung cấp khác.

**Giải pháp:** Kiểm tra `Settings > General > About > Carrier Lock`. Nếu không hiển thị "No SIM restrictions", hãy liên hệ nhà mạng gốc để yêu cầu mở khóa. Xem hướng dẫn đầy đủ về khóa nhà mạng — cách kiểm tra trạng thái, chính sách mở khóa của các nhà mạng Mỹ, và cách mở khóa thiết bị — tại [hướng dẫn phần cứng & khóa nhà mạng](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi.

---

## eSIM Không Có Kết Nối Dữ Liệu Sau Khi Kích Hoạt

**Nguyên nhân:** Access Point Name (APN) chưa được cấu hình tự động, nên điện thoại không có đường đến mạng dữ liệu.

**Giải pháp:**
1. Vào `Settings > Cellular > Cellular Data Network`.
2. Nhập giá trị APN từ website của nhà cung cấp eSIM (ví dụ, `globaldata` cho Airalo).
3. Hầu hết eSIM du lịch tự cấu hình APN, vì vậy hãy xác nhận giá trị đúng với nhà cung cấp của bạn.

**Giá trị APN phổ biến theo nhà cung cấp (nếu cấu hình tự động thất bại):**

| Nhà cung cấp | APN | Tên người dùng | Mật khẩu |
|----------|-----|----------|----------|
| Roami | internet | (để trống) | (để trống) |
| Airalo | globaldata | (để trống) | (để trống) |
| Holafly | hola | (để trống) | (để trống) |
| Nomad | nbdata | (để trống) | (để trống) |
| Ubigi | ubigi | (để trống) | (để trống) |
| Google Fi | h2g2 | (để trống) | (để trống) |
| T-Mobile (US) | fast.t-mobile.com | (để trống) | (để trống) |
| AT&T (US) | nxgen | (để trống) | (để trống) |
| Verizon (US) | vzwinternet | (để trống) | (để trống) |
| EE (UK) | everywhere | (để trống) | (để trống) |
| O2 (UK) | mobile.o2.co.uk | web | web |
| Vodafone (UK) | internet | (để trống) | (để trống) |
| Three (UK) | three.co.uk | (để trống) | (để trống) |

---

## eSIM Kẹt Ở Trạng Thái Activating

**Nguyên nhân:** Tải hồ sơ bị treo, thường do tín hiệu yếu hoặc máy chủ kích hoạt quá tải.

**Giải pháp:**
1. Đảm bảo bạn đang dùng mạng ổn định.
2. Bật rồi tắt Airplane Mode.
3. Nếu vẫn kẹt quá 10 phút, xóa eSIM và cài đặt lại từ mã QR.

---

## Dual eSIM Với Một Đường Hiển Thị No Service

**Nguyên nhân:** Khi có hai eSIM đang hoạt động, định tuyến cuộc gọi đến và dữ liệu có thể xung đột, khiến một đường mất sóng. Đây là **sự cố sóng dual eSIM** phổ biến ảnh hưởng đến người dùng có hai đường đang hoạt động.

**Giải pháp:**
1. Trong `Settings > Cellular`, xác nhận đường nào được đặt cho **Cellular Data** và đường nào cho **Default Voice Line**.
2. Bật/tắt từng đường.
3. Để có giải pháp chuyên sâu hơn, xem hướng dẫn **[Dual eSIM không hoạt động? 12 cách khắc phục cho iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** của chúng tôi.

---

## eSIM Chuyển Đổi Thất Bại

**Nguyên nhân:** Không có cơ chế chuyển eSIM đa nền tảng tích hợp sẵn, và nhà mạng của bạn có thể không hỗ trợ chuyển qua ứng dụng.

**Giải pháp:** Yêu cầu nhà mạng cấp lại eSIM dưới dạng mã QR mới và quét trên thiết bị mới. Sau khi chuyển đổi, WhatsApp, iMessage và mã xác minh hai yếu tố qua SMS vẫn hoạt động vì số của bạn không thay đổi. Xem hướng dẫn từng bước đầy đủ tại **[hướng dẫn chuyển eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)** của chúng tôi.

---

## Lỗi Khôi Phục iPhone eSIM 4013 Hoặc 4014

**Nguyên nhân:** Các lỗi này cho thấy vấn đề phần cứng hoặc firmware trong quá trình khôi phục phần mềm, không phải vấn đề eSIM. Chúng thường do cáp USB hỏng hoặc phần mềm máy tính lỗi thời.

**Giải pháp:** Thử cáp và cổng USB khác, cập nhật hệ điều hành máy tính, rồi thử khôi phục lại. Liên hệ Apple Support nếu lỗi vẫn tiếp diễn.

---

## Hồ Sơ eSIM Đã Hết Hạn

**Nguyên nhân:** Mã QR hoặc mã kích hoạt eSIM bị giới hạn thời gian và đã hết hạn.

**Giải pháp:** Liên hệ nhà cung cấp eSIM và yêu cầu mã QR mới, rồi kích hoạt ngay.

---

## eSIM Data Roaming Không Hoạt Động

**Nguyên nhân:** Data Roaming bị tắt cho đường eSIM du lịch, nên nó không thể kết nối mạng nội địa.

**Giải pháp:** Vào `Settings > Cellular > [eSIM của bạn]` và bật **Data Roaming**. Điều này là bắt buộc để hầu hết eSIM du lịch hoạt động ở nước ngoài.

---

## eSIM Bị Xóa Nhầm

**Nguyên nhân:** Xóa eSIM chỉ gỡ hồ sơ khỏi điện thoại nhưng không hủy gói cước.

**Giải pháp:**
- Với eSIM trả sau của nhà mạng, liên hệ nhà mạng — họ thường có thể cấp lại mã QR.
- Với eSIM du lịch (Roami, Airalo và tương tự), việc xóa thường là vĩnh viễn, nên bạn sẽ cần mua gói mới.
- Luôn giữ bản sao lưu email kích hoạt và mã QR gốc.

---

## MDM Hoặc Hạn Chế Doanh Nghiệp Chặn eSIM

**Nguyên nhân:** Trên thiết bị được quản lý (công ty), chính sách Mobile Device Management như `AllowESIMModification` có thể chặn việc thêm hoặc xóa eSIM.

**Giải pháp:** Liên hệ quản trị viên IT để cho phép thay đổi eSIM, hoặc dùng thiết bị không được quản lý.

---

## eSIM Biến Mất Sau Khi Khởi Động Lại

**Triệu chứng:** Bạn khởi động lại điện thoại và eSIM không còn hiển thị trong Settings > Cellular. Nó đã biến mất.

**Nguyên nhân:** Một lỗi phần mềm trên iOS hoặc Android đôi khi có thể khiến hồ sơ eSIM bị ẩn hoặc không đọc được sau khi khởi động lại, đặc biệt sau khi cập nhật hệ điều hành. Hồ sơ vẫn còn trên thiết bị, nhưng hệ thống không gắn được nó.

**Giải pháp:**
1. **iPhone:** Vào Settings > General > About và cuộn xuống "Available SIM" hoặc "Digital SIM". Nếu eSIM xuất hiện ở đó nhưng không có trong Cellular, hãy khởi động lại điện thoại một lần nữa.
2. **iPhone:** Nếu khởi động lại không được, vào Settings > Cellular > Add eSIM. Đôi khi điện thoại sẽ phát hiện hồ sơ hiện có và đề nghị thêm lại mà không cần mã QR mới.
3. **Android (Samsung):** Vào Settings > Connections > SIM Manager. eSIM có thể hiển thị là "Inactive". Chạm vào nó và bật lên.
4. **Android (Pixel):** Vào Settings > Network & Internet > SIMs. Nếu eSIM bị thiếu, chạm "Add Carrier" — điện thoại có thể phát hiện hồ sơ hiện có.
5. Nếu không cách nào hoạt động, liên hệ nhà mạng và yêu cầu mã QR mới. Hồ sơ cũ có thể đã hỏng.

**Phòng ngừa:** Trước khi khởi động lại, đảm bảo tất cả các đường eSIM đều được tắt, rồi khởi động lại, sau đó bật lại. Điều này giảm khả năng hệ thống mất dấu hồ sơ.

---

## Wi-Fi Calling Hoạt Động Nhưng Dữ Liệu eSIM Thì Không

**Triệu chứng:** Bạn có Wi-Fi Calling đang hoạt động trên đường của nhà mạng gốc, nhưng eSIM du lịch của bạn không có kết nối dữ liệu. Hoặc, eSIM hoạt động trên Wi-Fi nhưng không hoạt động trên mạng di động.

**Nguyên nhân:** Xung đột định tuyến giữa Wi-Fi Calling và dữ liệu di động. Khi Wi-Fi Calling đang hoạt động, điện thoại có thể ưu tiên mạng Wi-Fi cho mọi liên lạc, bao gồm cả dữ liệu, và không định tuyến đúng dữ liệu di động qua eSIM.

**Giải pháp:**
1. Tạm thời tắt Wi-Fi Calling trên đường nhà mạng gốc: Settings > Cellular > [đường nhà mạng gốc] > Wi-Fi Calling > chuyển OFF.
2. Bật/tắt Airplane Mode để buộc điện thoại đăng ký lại trên mạng di động.
3. Kiểm tra kết nối dữ liệu eSIM. Nếu hoạt động, bạn có thể bật lại Wi-Fi Calling — định tuyến bây giờ đã đúng.
4. Nếu vấn đề tái diễn, kiểm tra rằng đường nhà mạng gốc có **Data Roaming OFF** và eSIM du lịch có **Data Roaming ON**.

**Phương án thay thế:** Trên iPhone, vào Settings > Cellular > Cellular Data và đảm bảo eSIM du lịch được chọn. Sau đó bật "Allow Cellular Data Switching" — điều này cho phép điện thoại dùng eSIM du lịch cho dữ liệu Wi-Fi Calling ngay cả khi đường nhà mạng gốc là đường thoại.

---

## Xung Đột Giữa eSIM và SIM Vật Lý

**Triệu chứng:** Bạn cắm SIM vật lý vào điện thoại, và eSIM vốn hoạt động bình thường đột nhiên hiển thị "No Service" hoặc biến mất hoàn toàn khỏi Settings.

**Nguyên nhân:** Đây là hành vi đã biết trên các thiết bị bị khóa nhà mạng. Khi một iPhone bị khóa phát hiện SIM vật lý từ nhà mạng khác, nó có thể vô hiệu hóa khe eSIM để ngăn sử dụng trái phép. Trên một số thiết bị Android, việc cắm SIM vật lý cũng có thể khiến hệ thống ưu tiên SIM vật lý hơn eSIM cho mọi chức năng. Mới làm quen với việc dùng chung hai định dạng? [So sánh eSIM và SIM vật lý](/faq/what-is-esim/) giải thích cách chúng cùng tồn tại.

**Giải pháp:**
1. Tháo SIM vật lý khỏi khay.
2. Khởi động lại điện thoại.
3. eSIM sẽ xuất hiện lại trong Settings > Cellular (iPhone) hoặc Settings > Connections > SIM Manager (Android).
4. Nếu eSIM xuất hiện lại nhưng vẫn hiển thị "No Service", hãy bật Data Roaming cho đường eSIM.
5. Nếu bạn cần cả SIM vật lý và eSIM hoạt động đồng thời, hãy liên hệ nhà mạng để mở khóa thiết bị.

> **Phương án thay thế:** Một số người dùng báo cáo rằng việc bật/tắt đường eSIM (mà không tháo SIM vật lý) giải quyết được xung đột. Hãy thử cách này trước khi tháo SIM vật lý.

---

## Apple Watch eSIM Không Hoạt Động

**Triệu chứng:** Bạn đã thiết lập cellular trên Apple Watch, nhưng nó hiển thị "No Service" hoặc "Searching" — hoặc gói eSIM không xuất hiện trong ứng dụng Watch.

**Nguyên nhân:** Kích hoạt Apple Watch eSIM đòi hỏi nhà mạng hỗ trợ loại gói cụ thể của đồng hồ, và việc thiết lập cần iPhone ở gần với kết nối internet ổn định.

**Giải pháp:** Kiểm tra rằng nhà mạng của bạn hỗ trợ Apple Watch eSIM, sau đó bỏ ghép đôi và ghép đôi lại đồng hồ, giữ iPhone ở gần trong suốt quá trình. Nếu vẫn không kích hoạt được, hãy liên hệ nhà mạng với **EID** và **IMEI** của đồng hồ để họ cấp phát thủ công. Xem hướng dẫn đầy đủ — bao gồm những model iPad và Apple Watch nào hỗ trợ eSIM — tại [hướng dẫn eSIM iPad và Apple Watch](/faq/ipad-apple-watch-esim-support-guide/) của chúng tôi.

---

## Bảng Tham Khảo Mã Lỗi eSIM

| Mã lỗi | Nền tảng | Ý nghĩa | Giải pháp |
|------------|----------|---------|-----|
| **4013** | iPhone (khôi phục) | Lỗi phần cứng/firmware trong quá trình khôi phục | Đổi cáp, cổng USB, cập nhật macOS/iTunes |
| **4014** | iPhone (khôi phục) | Tương tự 4013; thường là vấn đề giao tiếp USB | Như trên |
| **-8** | Android (kích hoạt) | Mạng timeout | Chờ và thử lại, hoặc đổi Wi‑Fi |
| **-100** | Android (quét QR) | Định dạng mã QR không được hỗ trợ | Dùng nhập thủ công |
| **0xE8000001** | iPhone (kích hoạt) | Không truy cập được máy chủ nhà mạng | Thử lại sau 5 phút hoặc dùng nhập thủ công |
| **"eSIM configuration not supported"** | Android (Samsung) | Nhà mạng không hỗ trợ eSIM trên model đó | Kiểm tra với nhà mạng |
| **"Invalid SM‑DP+ address"** | Cả hai | Địa chỉ nhập thủ công sai | Kiểm tra lại địa chỉ từ nhà cung cấp |
| **"LPA error -1"** | Android | Lỗi LPA (Local Profile Assistant) chung chung | Khởi động lại điện thoại, thử lại. Nếu vẫn còn, dùng ứng dụng eSIM khác. |
| **"EID mismatch"** | Cả hai | Hồ sơ gắn với thiết bị khác | Liên hệ nhà mạng để giải phóng hồ sơ (Mục 4) |
| **"No EID" khi nhập `*#06#`** | Cả hai | Thiết bị không hỗ trợ eSIM | Điện thoại của bạn thiếu phần cứng eSIM — xem [hướng dẫn kiểm tra phần cứng](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi |
| **"eSIM management not available"** | Android (OnePlus) | Lỗi Oxygen OS | Cập nhật lên phiên bản Oxygen OS mới nhất |
| **"Profile cannot be deleted"** | iPhone | eSIM kẹt ở trạng thái chờ | Khởi động lại iPhone, rồi thử xóa lại. Nếu vẫn kẹt, liên hệ nhà mạng. |
| **-1** | Cả hai | Lỗi kích hoạt chung chung | Khởi động lại điện thoại, đảm bảo có kết nối mạng, thử lại |
| **-2** | Android | Mã kích hoạt không hợp lệ | Nhập lại mã hoặc yêu cầu mã mới từ nhà mạng |


## Những Lỗi Thường Gặp Làm Hỏng eSIM Của Bạn

Đây là những lỗi người dùng phổ biến nhất biến một eSIM đang hoạt động thành "viên gạch". Tránh chúng bằng mọi giá — phần lớn bắt nguồn từ cách kích hoạt thực sự hoạt động, mà [bài giải thích kích hoạt eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) đã trình bày từng bước.

| Lỗi | Điều gì xảy ra | Cách tránh |
|---------|--------------|--------------|
| **Xóa eSIM để "sửa" sự cố kết nối** | Hồ sơ bị xóa vĩnh viễn — bạn mất toàn bộ dữ liệu còn lại và phải mua gói mới | Không bao giờ chạm "Delete eSIM" trừ khi gói đã hết hạn hoàn toàn. Xóa không "làm mới" — nó hủy diệt. |
| **Quét mã QR bằng ứng dụng Camera** | Máy ảnh nhận diện mã nhưng không làm gì — không có hồ sơ nào được cài | Luôn mở Settings > Cellular > Add eSIM trước — không bao giờ dùng ứng dụng Camera riêng lẻ. |
| **Cài đặt tại sân bay với Wi-Fi yếu** | Tải xuống bị ngắt giữa chừng, làm hỏng hồ sơ | Cài đặt tại nhà trên Wi-Fi ổn định của bạn trước khi đi. |
| **Chờ đến khi hạ cánh mới cài** | Bạn đến nơi không có Wi-Fi và không thể tải hồ sơ | Cài hồ sơ trước khi khởi hành (nó nằm không hoạt động cho đến khi bạn bật Data Roaming). |
| **Quên bật Data Roaming cho eSIM** | Sóng đầy vạch nhưng không có internet | Sau khi hạ cánh, vào Settings > Cellular > [eSIM của bạn] và bật Data Roaming. |
| **Reset cài đặt mạng nghĩ rằng sẽ "làm mới" eSIM** | Reset mạng không xóa eSIM, nhưng nó xóa mật khẩu Wi-Fi và cặp ghép Bluetooth — bạn mất tất cả mạng đã lưu | Chỉ reset cài đặt mạng như giải pháp cuối cùng, và biết rằng nó không sửa được sự cố kích hoạt eSIM. |
| **Tắt đường eSIM thay vì chỉ tắt Data Roaming** | eSIM bị vô hiệu hóa hoàn toàn và không đăng ký được khi bạn bật lại | Chuyển tắt Data Roaming, không phải cả đường. Giữ đường ON nhưng roaming OFF khi không dùng. |


## Nhiều Sự Cố eSIM Cùng Lúc

Đôi khi bạn không chỉ có một vấn đề — mà có hai hoặc ba vấn đề cùng lúc. Đây là cách chẩn đoán các triệu chứng kết hợp:

| Kết hợp triệu chứng | Điều thực sự đang xảy ra | Thứ tự khắc phục |
|---------------------|---------------------------|-----------|
| **Quét được mã QR nhưng sau đó "Activation failed"** | Mã QR hợp lệ, nhưng máy chủ tải xuống không truy cập được | Sửa mạng trước (Mục 1), rồi quét lại |
| **eSIM có sóng nhưng không có dữ liệu VÀ "No Service" trên đường nhà mạng gốc** | Thiếu APN VÀ bạn có xung đột định tuyến dual-SIM | Sửa APN trước (Mục 8), rồi sửa định tuyến dual-SIM (Mục 10) |
| **Chuyển đổi thành công nhưng máy mới "No Service"** | Hồ sơ đã chuyển nhưng chưa đăng ký trên mạng mới | Xóa eSIM khỏi máy cũ, rồi khởi động lại máy mới (Mục 4 + Mục 2) |
| **Wi-Fi Calling hoạt động nhưng eSIM không có dữ liệu VÀ đường nhà mạng gốc bị tính phí roaming** | Nhiều xung đột định tuyến cộng với Data Roaming để BẬT trên đường nhà mạng gốc | Tắt Data Roaming của đường nhà mạng gốc, sửa xung đột Wi-Fi Calling (Mục 18), rồi kiểm tra APN |
| **eSIM biến mất sau khởi động lại VÀ "Cellular Plan Cannot Be Added"** | Hồ sơ bị hỏng VÀ bộ nhớ đã đầy | Xóa các eSIM không dùng trước (Mục 5), rồi thử thêm lại (Mục 17) |

**Nguyên tắc chung:** Sửa **vấn đề mạng trước** (Wi-Fi, Data Roaming, APN), rồi **vấn đề hồ sơ** (mã QR, kích hoạt), rồi **vấn đề riêng của thiết bị** (khóa nhà mạng, MDM). Đừng cố sửa tất cả cùng lúc — xử lý từng triệu chứng một.


## Nơi Tìm Thấy Add eSIM Trên Từng Điện Thoại

Giải pháp cho hầu hết lỗi đều giống nhau, nhưng đường dẫn menu để đến các điều khiển eSIM khác nhau tùy thương hiệu. Đây là các đường dẫn chính xác cùng những đặc thù lỗi chỉ xuất hiện trên thiết bị cụ thể. (Về các phương pháp cài đặt đầy đủ đằng sau các menu này, [hướng dẫn kích hoạt chung](/faq/how-to-activate-an-esim/) có mọi bước.)

### Đường dẫn menu eSIM trên iPhone
- **"Add eSIM" chuyển xám** – iPhone của bạn có thể bị khóa nhà mạng. Kiểm tra Settings > General > About > Carrier Lock; để có giải pháp khóa nhà mạng đầy đủ, xem [hướng dẫn khóa nhà mạng & phần cứng](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi.
- **Quick Transfer thất bại** – đảm bảo cả hai điện thoại dùng chung Apple ID, bật Bluetooth, và cách nhau trong khoảng 10cm.
- **Sau khi cập nhật iOS, eSIM hiển thị "No Service"** – vào Settings > Cellular > chạm eSIM > bật/tắt "Turn On This Line". Cũng kiểm tra rằng Data Roaming vẫn đang BẬT.
- **eSIM biến mất sau khi cập nhật iOS** – xem Mục 17. Điều này phổ biến hơn trên iOS so với Android sau các bản cập nhật lớn.
- **Đặc thù iOS 18:** Quy trình "Add eSIM" đã được thiết kế lại với tùy chọn nhập thủ công nổi bật hơn. Nếu bạn dùng iOS 18 và mã QR không quét được, nút nhập thủ công giờ dễ tìm hơn ở dưới cùng màn hình.

### Đường dẫn menu eSIM trên Samsung Galaxy
- **Đường dẫn menu khác nhau tùy phiên bản One UI:**
  - **One UI 5 (Android 13):** Settings > Connections > SIM Manager > Add eSIM
  - **One UI 6/6.1 (Android 14):** Settings > Connections > SIM Manager > Add eSIM (cùng đường dẫn)
  - **One UI 7 (Android 15):** Settings > Connections > SIM Manager > Add Mobile Plan
- **Quét mã QR thất bại** – thử nhập thủ công (chạm "Enter activation code manually"). Samsung thường yêu cầu địa chỉ SM‑DP+ và mã kích hoạt riêng biệt.
- **Xung đột Dual SIM** – nếu bạn có SIM vật lý và eSIM, kiểm tra rằng eSIM được đặt làm SIM dữ liệu trong SIM Manager.

### Đường dẫn menu eSIM trên Google Pixel
- **"Download a SIM instead?"** – tùy chọn này xuất hiện ở dưới cùng màn hình cài đặt SIM. Nếu bạn không thấy, Pixel của bạn có thể bị khóa nhà mạng.
- **eSIM không xuất hiện sau khi quét** – khởi động lại điện thoại. Pixel đôi khi cần khởi động lại sau khi tải hồ sơ.
- **Cài đặt APN không lưu được** – trên Pixel, cài đặt APN nằm trong Network & Internet > SIMs > [eSIM của bạn] > Access Point Names. Nếu không lưu được:
  1. Thêm APN mới với **tên khác** (ví dụ, "Airalo 2" thay vì "Airalo").
  2. Lưu nó, rồi chọn thủ công.
  3. Bật/tắt Airplane Mode để buộc APN mới có hiệu lực.
- **eSIM biến mất sau khởi động lại trên Pixel** – xem Mục 17. Người dùng Pixel báo cáo điều này thường xuyên hơn người dùng Samsung.

### Đường dẫn menu eSIM trên OnePlus
- **Đường dẫn menu:** Settings > Wi-Fi & Network > SIM & Network > Add eSIM
- **Vấn đề phổ biến:** Thiết bị OnePlus đôi khi hiển thị "eSIM not available" sau khi cập nhật Oxygen OS. Cách sửa: Vào Settings > System > System Update và cài bản vá mới nhất.
- **Cài đặt APN:** Nằm trong Settings > Wi-Fi & Network > SIM & Network > [eSIM] > Access Point Names.

### Đường dẫn menu eSIM trên Xiaomi
- **Đường dẫn menu:** Settings > SIM Cards & Mobile Networks > Add eSIM
- **Cài đặt APN:** Nằm trong Settings > SIM Cards & Mobile Networks > [eSIM] > Access Point Names.

### Đường dẫn menu eSIM trên Oppo và Realme
- **Đường dẫn menu:** Settings > Mobile Network > Add eSIM

**Không chắc model cụ thể của bạn có phần cứng eSIM hay không** (Xiaomi thị trường Trung Quốc, Huawei, Samsung dòng A bị nhà mạng vô hiệu hóa)? Đó là câu hỏi tương thích — xem [hướng dẫn phần cứng & hỗ trợ model](/faq/esim-activation-errors-troubleshooting-guide/) của chúng tôi, tài liệu bao gồm hỗ trợ theo từng model.


## eSIM Hoạt Động Ở Nhà Nhưng Không Ở Nước Ngoài

**Triệu chứng:** Bạn cài eSIM ở nhà, nó hiển thị sóng, nhưng khi hạ cánh đến điểm đến thì không có sóng. Những đặc thù riêng theo điểm đến — mạng đối tác, khóa khu vực, danh sách việc cần làm khi đến — được tổng hợp trong [hướng dẫn eSIM du lịch](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) của chúng tôi.

**Nguyên nhân gốc:** Hồ sơ eSIM được kích hoạt khi bạn còn trên mạng nhà mạng gốc, và nó chưa đăng ký với mạng điểm đến.

**Giải pháp:**
1. Tắt đường eSIM (`Settings > Cellular > tắt`).
2. Chờ 10 giây, rồi bật lại.
3. Vào Network Selection, tắt "Automatic", chọn thủ công một mạng mà nhà cung cấp của bạn hợp tác (hỏi nhà cung cấp về danh sách đối tác).
4. Nếu thất bại, bật/tắt lại Data Roaming.
5. Khởi động lại điện thoại.

Nếu vẫn không được, hãy liên hệ nhà cung cấp — gói eSIM của bạn có thể thực tế không bao gồm quốc gia bạn đang ở, hoặc có thể có vấn đề về thỏa thuận roaming.


## eSIM Hoạt Động Với Nhà Mạng Này Nhưng Không Với Nhà Mạng Khác

**Triệu chứng:** Bạn có một eSIM hoạt động tốt, nhưng khi cố thêm eSIM thứ hai từ nhà mạng khác, nó thất bại hoặc hiển thị "No Service."

**Nguyên nhân gốc:** Một số model điện thoại (đặc biệt là các máy cũ) có giới hạn về những hồ sơ nhà mạng nào có thể cùng tồn tại. Điều này phổ biến hơn trên các thiết bị Android với firmware modem cũ.

**Giải pháp:**
1. Kiểm tra rằng điện thoại của bạn hỗ trợ dual eSIM (iPhone 13 trở lên, Pixel 7 trở lên, Samsung S23 trở lên).
2. Nếu bạn có SIM vật lý được cắm, thử tháo nó ra — một số điện thoại giới hạn số hồ sơ hoạt động khi có SIM vật lý.
3. Cập nhật firmware điện thoại (các bản cập nhật cài đặt nhà mạng thường sửa được điều này).
4. Liên hệ nhà mạng thứ hai và hỏi liệu hồ sơ eSIM của họ có hỗ trợ cùng tồn tại dual-SIM không.


## Khi Nào Liên Hệ Nhà Cung Cấp eSIM và Khi Nào Liên Hệ Nhà Sản Xuất Điện Thoại

| Vấn đề | Liên hệ |
|---------|---------|
| Mã QR hết hạn / không hợp lệ | Nhà cung cấp eSIM |
| "Activation failed" lặp lại liên tục | Nhà cung cấp eSIM |
| Không có dữ liệu sau khi cấu hình APN | Nhà cung cấp eSIM |
| Thiết bị hiển thị "No Service" sau khi hạ cánh | Nhà cung cấp eSIM (kiểm tra thỏa thuận roaming) |
| eSIM không xuất hiện trong cài đặt | Nhà sản xuất điện thoại (nếu là lỗi phần mềm) hoặc vấn đề khóa nhà mạng |
| Sự cố phần cứng (máy ảnh, màn hình, pin) | Nhà sản xuất điện thoại |
| Khóa nhà mạng / mở khóa | Nhà mạng gốc của bạn |
| Hạn chế MDM | Bộ phận IT của bạn |
| eSIM biến mất sau khởi động lại | Cả hai — thử các giải pháp trong Mục 17, rồi liên hệ nhà cung cấp |
| "eSIM already in use" | Nhà cung cấp eSIM (để giải phóng hồ sơ) |
| Apple Watch eSIM không kết nối | Nhà mạng (về cấp phát) hoặc Apple Support (về vấn đề ghép đôi) |


## Câu Hỏi Thường Gặp

**Câu 1: Xóa eSIM có hủy gói cước của tôi không?**
Không. Xóa eSIM chỉ gỡ hồ sơ khỏi điện thoại. Bạn phải liên hệ nhà mạng riêng để hủy gói cước.

**Câu 2: Tôi có thể khôi phục eSIM đã xóa không?**
Với eSIM trả sau của nhà mạng, có — nhà mạng có thể cấp lại hồ sơ. Với eSIM du lịch, việc xóa thường là vĩnh viễn và đòi hỏi mua mới.

**Câu 3: Tại sao eSIM của tôi hoạt động trên Wi-Fi nhưng không hoạt động trên mạng di động?**
Điều này gần như luôn là vấn đề APN hoặc Data Roaming. Hãy làm theo Mục 8 và Mục 14.

**Câu 4: eSIM có làm pin tụt nhanh hơn không?**
Không. Chạy hai đường hoạt động cùng lúc có thể tốn điện hơn một chút, nhưng một eSIM đơn lẻ không làm tụt pin.

**Câu 5: Tôi có thể lưu bao nhiêu eSIM trên điện thoại?**
Thường 8–10 hồ sơ trên iPhone và hầu hết thiết bị Android. Bạn có thể lưu nhiều hơn nhưng chỉ có hai đường hoạt động cùng lúc (dual‑SIM).

**Câu 6: Tại sao eSIM của tôi liên tục mất sóng?**
Điều này có thể do tắc nghẽn mạng, vùng phủ sóng yếu, hoặc lỗi phần mềm. Hãy thử bật/tắt Airplane Mode, khởi động lại, hoặc chọn mạng thủ công.

**Câu 7: Tôi thấy "Activation Required" trên eSIM sau khi khởi động lại – điều đó nghĩa là gì?**
Điện thoại đã mất kết nối với máy chủ kích hoạt của nhà mạng. Khởi động lại điện thoại và đảm bảo bạn có kết nối mạng. Nếu vẫn còn, hãy xóa và cài lại eSIM.

**Câu 8: Nếu nhà mạng của tôi nói không hỗ trợ eSIM thì sao?**
Bạn vẫn có thể dùng các nhà cung cấp eSIM du lịch như Roami, Airalo hoặc Holafly — chúng hoạt động độc lập với nhà mạng gốc của bạn và không đòi hỏi nhà mạng hỗ trợ.

**Câu 9: eSIM của tôi đã chuyển sang iPhone mới nhưng không gọi được – chỉ có dữ liệu hoạt động.**
Kiểm tra rằng eSIM được đặt làm Default Voice Line. Ngoài ra, đảm bảo nhà mạng của bạn hỗ trợ VoLTE cho đường đó.

**Câu 10: Quét mã QR xong nhưng tải xuống mãi mãi – điều đó có bình thường không?**
Không. Nó chỉ nên mất 1–2 phút. Nếu lâu hơn, Wi‑Fi của bạn quá chậm. Đổi mạng hoặc dùng nhập thủ công.

**Câu 11: eSIM của tôi đang hoạt động nhưng không gửi hay nhận được SMS.**
Một số eSIM du lịch chỉ có dữ liệu và không hỗ trợ SMS. Nếu bạn cần SMS, hãy mua gói có số điện thoại rõ ràng.

**Câu 12: Tôi vô tình reset cài đặt mạng – giờ eSIM của tôi biến mất.**
Reset cài đặt mạng không xóa hồ sơ eSIM. eSIM của bạn vẫn nên còn đó. Vào Settings > Cellular và bật lại đường. Nếu nó biến mất, bạn có thể đã xóa nhầm — khi đó xem Mục 15.

**Câu 13: Sự khác biệt giữa xóa eSIM và tắt eSIM là gì?**
Tắt eSIM giữ hồ sơ trên điện thoại nhưng vô hiệu hóa đường. Bạn có thể bật lại bất cứ lúc nào. Xóa eSIM gỡ hồ sơ vĩnh viễn — bạn không thể khôi phục nếu không có mã QR mới. Chỉ xóa khi gói đã hết hạn hoàn toàn.

**Câu 14: VPN có thể cản trở việc kích hoạt eSIM không?**
Có — VPN có thể cản trở kết nối với máy chủ kích hoạt. Hãy tắt VPN trước khi kích hoạt eSIM.

**Câu 15: Gói eSIM của tôi ghi "không giới hạn" nhưng không còn dữ liệu sau khi dùng 5GB.**
Nhiều gói "không giới hạn" có Chính sách Sử dụng Hợp lý (FUP) giảm tốc độ sau một ngưỡng dữ liệu nhất định. Kiểm tra điều khoản của nhà cung cấp — bạn có thể cần mua gói nạp thêm để có thêm dữ liệu tốc độ cao.

👉 **Đã khắc phục xong sự cố?** Chọn một [gói eSIM Hoa Kỳ](/united-states-esim/) hoặc [gói eSIM châu Âu](/europe-esim/) để kết nối lại.

---

## Nguồn tham khảo

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
