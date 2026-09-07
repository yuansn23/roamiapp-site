---
title: "Dual eSIM không hoạt động? 12 cách khắc phục cho iPhone"
h1_title: "Cách sửa lỗi Dual eSIM không hoạt động trên iPhone: 12 giải pháp"
description: "Dual eSIM không hoạt động? Sửa 12 sự cố trên iPhone: định tuyến cuộc gọi, thiết lập VoLTE, hao pin và kiểm tra khóa nhà mạng cho iPhone 16 và iOS 18."
image: "/img/esim/usa/usa-esim-dual-sim-setup.jpg"
keywords: ["dual eSIM không hoạt động", "iPhone dual SIM không có dịch vụ", "sự cố tín hiệu dual eSIM", "khóa nhà mạng eSIM", "khắc phục sự cố dual eSIM", "kích hoạt dual eSIM thất bại", "iOS 18 eSIM", "cài đặt APN eSIM", "mã xác nhận eSIM", "dual eSIM không có dịch vụ"]
date: 2026-09-06T10:00:00Z
lastmod: 2026-09-06T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Khắc phục sự cố", "Thiết lập du lịch"]
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
    text: "Trung tâm Trợ giúp"
    url: "/faq/"

# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIM phổ biến"
  item_suffix: "eSIM"
  items:
    - name: "eSIM Mỹ"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Đức"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Châu Âu"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Thổ Nhĩ Kỳ"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Nhật Bản"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "Trung Quốc"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Nhận eSIM Miễn phí"
  icon: "🎁"
  item_suffix: "eSIM Miễn phí"
  item_subtitle: "eSIM Miễn phí"
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

# Sidebar: Popular questions
sidebar_questions:
  title: "Câu hỏi phổ biến"
  items:
    - question: "Kích hoạt eSIM là gì và nó hoạt động như thế nào?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Cách kích hoạt eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Cách kích hoạt eSIM trên iPhone (Tất cả các model)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Danh sách tương thích eSIM mới nhất"
      url: "/compatibility/"
---


> **Lưu ý của biên tập viên:** Roami là thương hiệu đứng sau hướng dẫn này. Tất cả các bước khắc phục sự cố dựa trên tài liệu chính thức của Apple, tiêu chuẩn GSMA và thử nghiệm của nhóm chúng tôi trên iOS 18. Chúng tôi tập trung vào các bản sửa lỗi thực tế thực sự hoạt động – không phải giải pháp lý thuyết.
>
> **Điểm chính:** VoLTE hoặc giới hạn gói là lý do phổ biến nhất khiến một đường truyền không thể thực hiện hoặc nhận cuộc gọi. Sự cố định tuyến cuộc gọi đến thường được khắc phục bằng cách bật/tắt Wi‑Fi Calling. iPhone là dual standby, không phải dual active – "Không có dịch vụ" trên đường truyền kia trong khi gọi là bình thường. Kiểm tra Khóa nhà mạng trong Cài đặt (`Không có hạn chế SIM`) nếu bạn không thể thêm eSIM thứ hai. Có thể giảm hao pin dual eSIM bằng cách tắt 5G trên đường truyền có tín hiệu yếu hơn.


## Dual eSIM không hoạt động? Chẩn đoán nhanh 10 giây

**Điện thoại của bạn gặp sự cố dual eSIM. Đó là vấn đề nào?**

| Triệu chứng của bạn | Chuyển đến bản sửa |
|--------------|-------------|
| **eSIM thứ hai hiển thị "Không có dịch vụ"** nhưng eSIM thứ nhất hoạt động | [Sửa #2](#2-dual-esim-tai-sao-mot-duong-hien-thi-khong-co-dich-vu-trong-khi-duong-kia-hoat-dong) |
| **Có thể gọi ra nhưng KHÔNG thể nhận cuộc gọi** | [Sửa #3](#3-dual-esim-mot-so-co-the-goi-ra-nhung-khong-the-nhan-cuoc-goi-den) |
| **Trong khi gọi, đường truyền kia hiển thị "Không có dịch vụ"** | [Sửa #4](#4-dual-esim-trong-khi-goi-duong-truyen-kia-hien-thi-khong-co-dich-vu--dieu-nay-binh-thuong) – điều này bình thường! |
| **Không thể thêm eSIM thứ hai – lỗi "Khóa nhà mạng"** | [Sửa #5](#5-dual-esim-khong-hoat-dong-kiem-tra-khoa-nha-mang-truoc) |
| **Pin hao nhanh hơn với hai đường truyền** | [Sửa #6](#6-dual-esim-hao-pin-cach-giam) |
| **SIM vật lý không được nhận dạng** | [Sửa #7](#7-xung-dot-esim--sim-vat-ly-va-su-co-khay-sim) |
| **iPhone từ Trung Quốc – không có tùy chọn eSIM nào cả** | [Sửa #8](#8-truong-hop-dac-biet-theo-khu-vuc-trung-quoc-hong-kong-macao) – giới hạn phần cứng |
| **Dữ liệu hoạt động nhưng không có internet (vấn đề APN)** | [Sửa #11](#11-cach-cau-hinh-cai-dat-apn-neu-esim-cua-ban-khong-co-du-lieu) – cấu hình APN |
| **Vô tình xóa eSIM** | [Câu hỏi FAQ #9](#q9-lam-the-nao-de-phuc-hoi-esim-da-xoa) – tùy thuộc vào nhà cung cấp |
| **Không chắc chắn – vấn đề khác** | [Bảng khắc phục sự cố đầy đủ](#10-bang-khac-phuc-su-co--cac-tinh-huong-dual-esim) |

> 💡 **Điểm chính:** Nếu bạn đang sử dụng **hai đường truyền trên một iPhone**, iPhone là **dual standby, không phải dual active** – khi bạn đang thực hiện cuộc gọi, đường truyền kia sẽ tạm thời hiển thị "Không có dịch vụ". Đây là **hành vi bình thường** (xem Sửa #4). Đừng lãng phí thời gian cố gắng "khắc phục" nó.

Để có hướng dẫn đầy đủ về thiết lập eSIM cơ bản, xem **[Hướng dẫn đầy đủ về eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. Đối với các vấn đề nâng cao không được đề cập ở đây, **[Hướng dẫn khắc phục sự cố chuyên sâu eSIM (16 trường hợp thực tế)](/faq/esim-deep-troubleshooting-guide-2026/)** có thêm giải pháp.


## Hành trình khắc phục sự cố Dual eSIM hoàn chỉnh – Từ triệu chứng đến bản sửa

Đây là con đường hầu hết người dùng iPhone đi theo khi dual eSIM không hoạt động. Sử dụng điều này để theo dõi vị trí của bạn.

| Bước | Đang xảy ra điều gì | Phải làm gì | Tìm ở đâu |
| :--- | :--- | :--- | :--- |
| **1. Xác định triệu chứng** | "eSIM thứ hai của tôi không có tín hiệu." / "Tôi không thể nhận cuộc gọi." / "Pin đang hao nhanh." | Khớp triệu chứng của bạn với bảng Chẩn đoán nhanh ở trên. | [Chẩn đoán nhanh 10 giây](#dual-esim-khong-hoat-dong-chan-doan-nhanh-10-giay) |
| **2. Kiểm tra xem đó có phải hành vi bình thường không** | "Trong khi gọi, đường truyền kia của tôi hiển thị Không có dịch vụ." | Điều này **bình thường** đối với iPhone dual standby. Chuyển đến Sửa #4. | [Sửa #4](#4-dual-esim-trong-khi-goi-duong-truyen-kia-hien-thi-khong-co-dich-vu--dieu-nay-binh-thuong) |
| **3. Loại trừ khóa nhà mạng** | "Tôi không thể thêm eSIM thứ hai nào cả." | Kiểm tra Khóa nhà mạng trong Cài đặt. Phải hiển thị "Không có hạn chế SIM." | [Sửa #5](#5-dual-esim-khong-hoat-dong-kiem-tra-khoa-nha-mang-truoc) |
| **4. Áp dụng bản sửa** | Làm theo bản sửa cụ thể cho triệu chứng của bạn. | Một trong 12 bản sửa bên dưới sẽ giải quyết vấn đề của bạn. | [Sửa #1‑#12](#1-cac-tuy-chon-dual-esim-cua-ban-tren-iphone-la-gi) |
| **5. Vẫn không hoạt động?** | "Không có bản sửa nào hoạt động." | Sử dụng các tùy chọn dự phòng trong bảng khắc phục sự cố. | [Bảng khắc phục sự cố](#10-bang-khac-phuc-su-co--cac-tinh-huong-dual-esim) |


## Chỉ số chẩn đoán nhanh (Dual eSIM cụ thể)

| Triệu chứng | Nguyên nhân có khả năng nhất | Phần sửa |
|---------|-------------------|--------------|
| eSIM thứ hai hiển thị "Không có dịch vụ" nhưng eSIM thứ nhất hoạt động | Vấn đề VoLTE hoặc thứ tự đường truyền | [#2](#2-dual-esim-tai-sao-mot-duong-hien-thi-khong-co-dich-vu-trong-khi-duong-kia-hoat-dong) |
| Một số có thể gọi ra nhưng không thể nhận cuộc gọi | Không khớp định tuyến cuộc gọi đến | [#3](#3-dual-esim-mot-so-co-the-goi-ra-nhung-khong-the-nhan-cuoc-goi-den) |
| Trong khi gọi, đường truyền kia hiển thị "Không có dịch vụ" | iPhone chỉ sử dụng một mạng dữ liệu tại một thời điểm (bình thường) | [#4](#4-dual-esim-trong-khi-goi-duong-truyen-kia-hien-thi-khong-co-dich-vu--dieu-nay-binh-thuong) |
| Không thể thêm eSIM thứ hai – lỗi "Khóa nhà mạng" | Thiết bị bị khóa với nhà mạng đầu tiên | [#5](#5-dual-esim-khong-hoat-dong-kiem-tra-khoa-nha-mang-truoc) |
| Dual eSIM hoạt động nhưng hao pin nhanh hơn | Cả hai đường truyền đều đang tìm kiếm tích cực | [#6](#6-dual-esim-hao-pin-cach-giam) |
| eSIM + SIM vật lý: SIM vật lý không được nhận dạng | Vấn đề khay SIM hoặc thẻ không tương thích | [#7](#7-xung-dot-esim--sim-vat-ly-va-su-co-khay-sim) |
| Dữ liệu hiển thị thanh tín hiệu nhưng không có internet | Cài đặt APN bị thiếu hoặc sai | [#11](#11-cach-cau-hinh-cai-dat-apn-neu-esim-cua-ban-khong-co-du-lieu) |


## 1. Các tùy chọn Dual eSIM của bạn trên iPhone là gì?

Bắt đầu từ iPhone XS, XR và tất cả các model mới hơn (bao gồm iPhone 16), Apple hỗ trợ dual eSIM (hai eSIM hoạt động đồng thời) trên iPhone 13 trở lên. Các model không phải Mỹ cũng hỗ trợ một eSIM cộng với một nano‑SIM vật lý. Các model Trung Quốc đại lục hai SIM vật lý không có hỗ trợ eSIM ngoại trừ iPhone 16.

Cấu hình **dual eSIM** của bạn phụ thuộc vào model iPhone và khu vực của bạn:

| Cấu hình | Model hỗ trợ | Số đường truyền tối đa |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 trở lên (bao gồm tất cả model iPhone 16) | 2 |
| **1 eSIM + 1 nano‑SIM vật lý** | Tất cả iPhone có khay SIM (model không phải Mỹ và model Mỹ trước iPhone 14) | 2 |
| **Chỉ 1 SIM vật lý** | iPhone cũ hơn (trước XS) | 1 |
| **2 SIM vật lý** | Các model khay SIM đặc biệt Trung Quốc đại lục, Hồng Kông, Ma Cao (ví dụ: phiên bản iPhone 16 Trung Quốc) | 2 |

Để có danh sách đầy đủ các iPhone tương thích, [kiểm tra khả năng tương thích dual eSIM iPhone của bạn](/compatibility/).


## 2. Dual eSIM: Tại sao một đường hiển thị "Không có dịch vụ" trong khi đường kia hoạt động

Nếu một trong các đường truyền dual eSIM của bạn có thể sử dụng dữ liệu nhưng không thể thực hiện hoặc nhận cuộc gọi — **hoặc hoàn toàn hiển thị "Không có dịch vụ"** — nguyên nhân phổ biến nhất vào năm 2026 là:

- **VoLTE / VoNR chưa được bật** cho đường truyền đó. Một số nhà mạng vô hiệu hóa thoại qua dữ liệu chuyển vùng trên các gói eSIM, khiến đường truyền đó chỉ có dữ liệu. (Cách kiểm tra đơn giản: nếu bạn có thể sử dụng dữ liệu nhưng không thể gọi ra, rất có thể đây là vấn đề.)
- **Thứ tự đường truyền**. iOS định tuyến cuộc gọi đến *đường truyền thoại mặc định* của bạn; một đường truyền thứ cấp được đặt chỉ dữ liệu không thể thực hiện hoặc nhận cuộc gọi.
- **Gói không bao gồm thoại**. Một số eSIM du lịch chỉ có dữ liệu theo thiết kế và không có dịch vụ thoại nào cả. Nếu đây là trường hợp, bạn sẽ thấy thanh tín hiệu nhưng cố gắng gọi sẽ thất bại.

> **Lưu ý:** Mạng 3G/CDMA cũ đã được ngừng sử dụng tại Mỹ và Nhật Bản. Verizon và US Cellular ngừng CDMA vào 2022-2024, và au/KDDI kết thúc 3G vào 2022. Vào năm 2026, một đường truyền "không có dịch vụ cho thoại" hầu như luôn là vấn đề VoLTE, gói cước hoặc thứ tự đường truyền — không phải CDMA.

### Cách khắc phục
- **Đặt đường truyền bị ảnh hưởng làm đường thoại mặc định**: `Cài đặt > Di động > Đường thoại mặc định`.
- **Bật VoLTE**: `Cài đặt > Di động > [đường truyền] > Giọng nói & Dữ liệu`, sau đó chọn LTE hoặc 5G (VoLTE/VoNR).
- **Xác nhận gói bao gồm thoại**. Nếu đó là eSIM du lịch chỉ dữ liệu, hãy giữ đường truyền nhà của bạn làm đường thoại và sử dụng eSIM chỉ cho dữ liệu.
- **Liên hệ với nhà mạng** để xác minh thoại qua LTE/5G được bật cho số của bạn khi chuyển vùng.

Để so sánh sâu hơn về mạng nhà mạng Mỹ, xem **[so sánh mạng nhà mạng Mỹ của chúng tôi](/carriers/united-states-esim-carrier-guide/)**.


## 3. Dual eSIM: Một số có thể gọi ra nhưng không thể nhận cuộc gọi đến

**Triệu chứng**: Đường A hoạt động bình thường. Đường B có thể thực hiện cuộc gọi đi, nhưng cuộc gọi đến B chuyển thẳng đến hộp thư thoại hoặc đổ chuông báo "không khả dụng".

**Nguyên nhân gốc**: Không khớp định tuyến cuộc gọi mạng. Khi Đường B gần đây chuyển đổi giữa 5G và LTE, hoặc sử dụng Wi‑Fi Calling, mạng của nhà mạng vẫn có thể cố gắng định tuyến cuộc gọi đến qua đường dẫn sai.

**Phép tương tự:** Hãy tưởng tượng nhà mạng có một cuốn sổ địa chỉ cũ vẫn ghi số điện thoại của bạn tại ngôi nhà trước đây. Khi ai đó gọi, họ đến sai địa điểm. Bật/tắt Wi‑Fi Calling sẽ cập nhật cuốn sổ địa chỉ.

### Cách khắc phục nhanh (phía người dùng)
1. Tạm thời tắt **Wi‑Fi Calling**: `Cài đặt > Di động > Đường B > Wi‑Fi Calling` → TẮT.
2. Khởi động lại iPhone.
3. Bật Wi‑Fi Calling lại.

### Cách khắc phục phía nhà mạng (gọi hỗ trợ)
Yêu cầu nhà mạng **đặt lại định tuyến cuộc gọi** hoặc **làm mới đường truyền** cho số này. Điều này thường có hiệu lực ngay sau khi nhà mạng cấp lại đường truyền. Để biết thêm về định tuyến cuộc gọi và các vấn đề liên quan đến cuộc gọi khác, xem **[Sửa 14 trong hướng dẫn khắc phục sự cố của chúng tôi](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Ngăn tái diễn
- Tránh chuyển đổi nhanh giữa 5G/LTE (giữ một chế độ ít nhất vài giờ).
- Nếu bạn đi du lịch thường xuyên, hãy giữ **Chuyển vùng dữ liệu** TẮT cho đường truyền không cần dữ liệu.


## 4. Dual eSIM: Trong khi gọi, đường truyền kia hiển thị "Không có dịch vụ" – Điều này bình thường

**Triệu chứng**: Bạn đang thực hiện cuộc gọi bằng Đường A. Khi bạn kiểm tra, Đường B hiển thị "Không có dịch vụ".

**Giải thích**: iPhone là **dual standby, không phải dual active** (còn được gọi là DSDS – Dual SIM Dual Standby). Chỉ một đường truyền có thể duy trì kết nối di động tại một thời điểm. Trong khi đang gọi, đường truyền kia tạm thời không liên lạc được. Ngay khi cuộc gọi kết thúc, cả hai đường truyền kết nối lại. Đây **không phải là lỗi dual eSIM** – đó là do thiết kế.

### Những gì bạn có thể làm:
- **Bật Wi‑Fi Calling trên cả hai đường truyền** – sau đó đường truyền nhàn rỗi có thể sử dụng Wi‑Fi để nhận cuộc gọi trong khi bạn đang ở trên đường truyền kia. Tài liệu [dual standby của Apple](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) giải thích điều này chi tiết hơn.
- **Bật "Cho phép chuyển đổi dữ liệu di động"** – trong `Cài đặt > Di động > Dữ liệu di động`. Điều này cho phép đường truyền không dữ liệu sử dụng kết nối của đường truyền dữ liệu cho Wi‑Fi Calling.

> 📌 Lưu ý: Một số nhà mạng không hỗ trợ Wi‑Fi Calling đồng thời trên cả hai đường truyền. Kiểm tra với nhà mạng của bạn.


## 5. Dual eSIM không hoạt động? Kiểm tra khóa nhà mạng trước

Nếu bạn không thể thêm eSIM thứ hai hoặc SIM vật lý:
- iPhone của bạn có thể bị **khóa nhà mạng** với nhà mạng đầu tiên.
- Để kiểm tra: `Cài đặt > Cài đặt chung > Giới thiệu` → cuộn đến **Khóa nhà mạng**. Nó phải hiển thị "Không có hạn chế SIM".

### Phải làm gì nếu bị khóa:
- Liên hệ với nhà mạng để yêu cầu mở khóa. Các nhà mạng Mỹ phải mở khóa sau khi thiết bị đã thanh toán hết.
- Nếu đã mở khóa nhưng vẫn không hoạt động, bạn có thể cần đặt lại cài đặt mạng: `Cài đặt > Cài đặt chung > Chuyển hoặc Đặt lại iPhone > Đặt lại > Đặt lại cài đặt mạng`. (Cảnh báo: thao tác này sẽ xóa mật khẩu Wi‑Fi.)

Sau khi mở khóa, bạn cũng có thể di chuyển eSIM giữa iPhone và Android – xem **[hướng dẫn Chuyển eSIM Đa nền tảng 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** của chúng tôi để biết hướng dẫn từng bước.


## 6. Dual eSIM hao pin: Cách giảm

Chạy **dual eSIM** hoặc thậm chí eSIM + SIM vật lý có thể làm tăng mức tiêu thụ pin vì cả hai đường truyền đều duy trì kết nối tích cực với mạng. Đây là cách giảm thiểu hao pin trong khi vẫn giữ cả hai đường truyền hoạt động:

| Chiến lược | Hiệu quả |
|----------|--------|
| Đặt đường truyền có tín hiệu yếu hơn **chỉ sử dụng LTE** (không phải 5G) | Tiết kiệm vừa phải |
| Tắt **Chuyển vùng dữ liệu** trên đường truyền không dùng cho dữ liệu | Tiết kiệm quét |
| Tắt **5G Standalone** (nếu nhà mạng của bạn cho phép) | Giúp ích rất nhiều |
| Sử dụng **Chế độ dữ liệu thấp** cho ứng dụng nền trên đường truyền thứ cấp | Tiết kiệm nhỏ |
| Ở khu vực tín hiệu rất yếu, tạm thời tắt đường truyền thứ cấp | Tiết kiệm đáng kể |

Để tắt một đường truyền: `Cài đặt > Di động` → nhấn vào đường truyền → chuyển đổi tắt **Bật đường truyền này**. Nếu bạn thường xuyên đi du lịch quốc tế, [hãy thử dùng thử eSIM miễn phí của Roami](/free-esim/) như một giải pháp thay thế tiết kiệm pin.


## 7. Xung đột eSIM + SIM vật lý và sự cố khay

**Triệu chứng**: nano‑SIM của bạn hoạt động trong điện thoại khác nhưng không hoạt động trong iPhone của bạn. Hoặc, eSIM của bạn hoạt động tốt nhưng SIM vật lý không được nhận dạng khi cả hai được cài đặt.

**Nguyên nhân phổ biến**:
- iPhone bị **khóa nhà mạng** với một mạng khác.
- Khay SIM không được đẩy vào hoàn toàn hoặc bị hỏng.
- Thẻ SIM **quá cũ** (trước 4G) hoặc bị cong.
- **Xung đột SIM vật lý**: Trên một số iPhone, việc lắp SIM vật lý có thể tạm thời vô hiệu hóa khe eSIM nếu thiết bị bị khóa nhà mạng.

**Cách khắc phục**:
1. Tháo khay, lau sạch các tiếp điểm bằng vải mềm.
2. Đẩy lại chắc chắn cho đến khi nghe thấy tiếng click.
3. Khởi động lại iPhone.
4. Nếu vẫn không được nhận dạng, hãy thử SIM trong điện thoại khác – nếu hoạt động, đầu đọc SIM của iPhone bạn có thể bị hỏng.
5. Thay thẻ SIM tại cửa hàng nhà mạng (miễn phí cho hầu hết các gói trả sau).

> **Nếu eSIM của bạn biến mất sau khi lắp SIM vật lý:** Một số iPhone bị khóa nhà mạng vô hiệu hóa khe eSIM khi lắp SIM vật lý từ nhà mạng khác. Tháo SIM vật lý, khởi động lại và eSIM của bạn sẽ xuất hiện lại. Sau đó liên hệ với nhà mạng để mở khóa thiết bị.

Nếu bạn có kế hoạch chuyển hoàn toàn sang eSIM, hãy tham khảo **[hướng dẫn eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** của chúng tôi để biết các phương pháp kích hoạt.


## 8. Trường hợp đặc biệt theo khu vực: Trung Quốc, Hồng Kông, Ma Cao

iPhone Trung Quốc đại lục (trừ iPhone 16) có hai khe nano‑SIM vật lý và **không có hỗ trợ eSIM nào cả**. Các model Hồng Kông và Ma Cao thường hỗ trợ eSIM + SIM vật lý. Nếu bạn mua iPhone hai SIM vật lý Trung Quốc đại lục, bạn không thể cài đặt bất kỳ eSIM nào, bao gồm cả eSIM du lịch quốc tế – đây là giới hạn phần cứng.

Apple bán các model hai SIM vật lý cụ thể tại **Trung Quốc đại lục**:
- iPhone 16, 17 Pro, 17 Pro Max: **hai khe nano‑SIM vật lý** (không có eSIM trừ Air).
- iPhone 16: **chỉ eSIM** (toàn cầu, bao gồm Trung Quốc).

**Các model Hồng Kông và Ma Cao**:
- Hỗ trợ **eSIM + SIM vật lý** (giống như model quốc tế) hoặc hai SIM vật lý tùy theo model.
- Luôn xác minh trước khi mua nếu bạn có kế hoạch sử dụng gói eSIM du lịch.

> ⚠️ **Quan trọng**: Nếu bạn mua iPhone hai SIM vật lý Trung Quốc đại lục, bạn **không thể cài đặt bất kỳ eSIM nào** (bao gồm cả eSIM du lịch quốc tế) – trừ iPhone 16. Đây là giới hạn phần cứng, không phải chặn phần mềm.


## 9. Dual eSIM cho công việc & cá nhân: Các phương pháp tốt nhất

Nhiều người dùng giữ **số công việc** (eSIM) và **số cá nhân** (eSIM thứ hai hoặc SIM vật lý). Đây là cách thiết lập cấu hình **dual eSIM** của bạn một cách sạch sẽ:

### Dán nhãn đường truyền rõ ràng
`Cài đặt > Di động` → nhấn vào một đường truyền → `Nhãn gói di động` → chọn "Công việc" hoặc "Cá nhân", hoặc tạo nhãn tùy chỉnh.

### Chọn thoại & dữ liệu mặc định
- **Đường thoại mặc định**: Đường truyền nào được sử dụng khi bạn quay số từ ứng dụng Điện thoại gốc (bạn vẫn có thể chọn cho từng cuộc gọi).
- **Dữ liệu di động**: Đường truyền nào sử dụng dữ liệu di động. Bật **Cho phép chuyển đổi dữ liệu di động** để điện thoại có thể tạm thời sử dụng dữ liệu của đường truyền kia nếu đường truyền chính mất tín hiệu.

### Tách biệt danh bạ
- Gán danh bạ cho một đường truyền cụ thể: Chỉnh sửa danh bạ → `Đường truyền ưa thích` → chọn công việc hoặc cá nhân.

### Ngăn chặn chuyển vùng ngoài ý muốn
- Tắt **Chuyển vùng dữ liệu** cho đường truyền công việc nếu nó có giá quốc tế đắt đỏ.


## 10. Bảng khắc phục sự cố – Các tình huống Dual eSIM

| Vấn đề | Bước ngay lập tức | Sửa lâu dài | Nếu vẫn không hoạt động |
|---------|----------------|----------------|----------------------|
| eSIM thứ hai không bao giờ có tín hiệu | Khởi động lại iPhone, sau đó tắt/bật đường truyền | Xác nhận gói đang hoạt động và đường truyền được bật | Liên hệ nhà mạng để cấp lại eSIM |
| Cuộc gọi chuyển thẳng đến hộp thư thoại (không đổ chuông) | Tắt "Làm im lặng người gọi không xác định" và chuyển tiếp cuộc gọi | Liên hệ nhà mạng để đặt lại định tuyến cuộc gọi | Đặt lại cài đặt mạng |
| Không thể nhận SMS trên đường truyền thứ hai | Gửi một SMS thử nghiệm từ đường truyền đó đến bất kỳ số nào | Đảm bảo đường truyền không chỉ dữ liệu; nhà mạng có thể cần bật SMS | Sử dụng ứng dụng nhà mạng để đồng bộ lại đường truyền |
| Hai eSIM nhưng cả hai đều hiển thị "Không có dịch vụ" | Bật/tắt chế độ Máy bay > kiểm tra khóa nhà mạng | Đặt lại cài đặt mạng | Kiểm tra xem nhà mạng có sự cố mất mạng trong khu vực của bạn không |
| Chuyển đổi đường truyền và FaceTime/iMessage không kích hoạt | Vào `Cài đặt > Tin nhắn > Gửi & Nhận` – chọn số thủ công | Đăng xuất Apple ID và đăng nhập lại | Liên hệ Apple Support |
| Dữ liệu hiển thị tín hiệu nhưng không có internet | Kiểm tra cài đặt APN (xem Sửa #11) | Cấu hình APN thủ công | Liên hệ nhà cung cấp eSIM để có APN chính xác |
| Vô tình xóa eSIM | Kiểm tra xem nhà cung cấp có cho phép tải lại không | Liên hệ nhà mạng để có mã QR mới | eSIM du lịch: mua gói mới |
| Lắp SIM vật lý, eSIM biến mất | Điện thoại bị khóa nhà mạng vô hiệu hóa eSIM với SIM nước ngoài | Tháo SIM vật lý, khởi động lại, eSIM xuất hiện lại | Liên hệ nhà mạng để mở khóa thiết bị |


## 11. Cách cấu hình cài đặt APN nếu eSIM của bạn không có dữ liệu

**Triệu chứng**: eSIM của bạn hiển thị đầy đủ thanh tín hiệu (hoặc "Không có dịch vụ") nhưng bạn không có kết nối internet – trang web không tải, ứng dụng báo "không có kết nối".

**Nguyên nhân gốc**: Hồ sơ eSIM được cài đặt chính xác, nhưng cài đặt Tên điểm truy cập (APN) bị thiếu hoặc sai. Một số nhà cung cấp eSIM tự động cấu hình APN; các nhà cung cấp khác yêu cầu nhập thủ công.

### Cách cấu hình APN trên iPhone

1. Vào **Cài đặt > Di động**.
2. Nhấn vào đường truyền eSIM không có dữ liệu.
3. Nhấn **Mạng dữ liệu di động** (nếu bạn không thấy tùy chọn này, APN được nhà mạng tự động cấu hình – bỏ qua bản sửa này).
4. Trong phần **Dữ liệu di động**, điền vào trường **APN**.
5. Để trống **Tên người dùng** và **Mật khẩu** trừ khi nhà cung cấp của bạn chỉ định khác.
6. Quay lại, bật/tắt Chế độ Máy bay và kiểm tra dữ liệu.

### Giá trị APN phổ biến cho eSIM du lịch

| Nhà cung cấp | APN | Tên người dùng | Mật khẩu |
|----------|-----|----------|----------|
| **Roami** | internet | (để trống) | (để trống) |
| **Airalo** | globaldata | (để trống) | (để trống) |
| **Holafly** | hola | (để trống) | (để trống) |
| **Nomad** | nbdata | (để trống) | (để trống) |
| **T‑Mobile (Mỹ)** | fast.t-mobile.com | (để trống) | (để trống) |
| **AT&T (Mỹ)** | nxgen | (để trống) | (để trống) |
| **Verizon (Mỹ)** | vzwinternet | (để trống) | (để trống) |
| **EE (Anh)** | everywhere | (để trống) | (để trống) |
| **O2 (Anh)** | mobile.o2.co.uk | web | web |
| **Vodafone (Anh)** | internet | (để trống) | (để trống) |
| **Three (Anh)** | three.co.uk | (để trống) | (để trống) |
| **Orange (Pháp)** | orange.fr | (để trống) | (để trống) |

> **Nếu trường APN bị mờ:** Nhà mạng của bạn đã khóa cài đặt APN. Điều này phổ biến với eSIM nhà mạng trả sau (Verizon, T‑Mobile, AT&T). Liên hệ với nhà mạng để được hỗ trợ – bạn không thể thay đổi thủ công.

> **Nếu APN đúng nhưng vẫn không có dữ liệu:** Khởi động lại iPhone, bật/tắt Chế độ Máy bay hoặc kiểm tra xem Chuyển vùng dữ liệu đã được bật chưa (Cài đặt > Di động > [đường truyền] > Chuyển vùng dữ liệu BẬT).


## 12. Mẹo chuyên nghiệp cuối cùng cho người dùng Dual eSIM

- **Dán nhãn đường truyền** ngay sau khi thiết lập – nó giúp tránh nhầm lẫn vô tận.
- **Đặt nhạc chuông khác nhau** cho mỗi đường truyền: `Cài đặt > Âm thanh & Cảm ứng > Nhạc chuông` → cuộn xuống, bạn có thể chỉ định cho từng đường truyền.
- **Sử dụng tự động hóa Phím tắt** để thay đổi đường thoại mặc định theo thời gian (ví dụ: giờ làm việc = đường công việc; buổi tối = đường cá nhân).
- **Trước khi bán thiết bị**: Vào `Cài đặt > Di động`, xóa **tất cả** eSIM và tháo SIM vật lý. Sau đó xóa tất cả nội dung và cài đặt. Để có hướng dẫn chi tiết về cách xóa eSIM và hủy gói, hãy tham khảo **[Sửa #9 trong hướng dẫn khắc phục sự cố của chúng tôi](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.


## Câu hỏi thường gặp

**Q1: Tôi có thể sử dụng hai eSIM từ cùng một nhà mạng không?**
Có, miễn là nhà mạng của bạn cho phép nhiều hồ sơ eSIM trên một tài khoản. Ví dụ: T‑Mobile US hỗ trợ tối đa hai eSIM trên cùng một iPhone.

**Q2: Cả hai đường truyền có hỗ trợ 5G đồng thời không?**
Có, trên iPhone 13 trở lên (bao gồm iPhone 16), cả hai đường truyền đều có thể ở 5G (dual 5G standby). Tuy nhiên, chỉ một đường truyền có thể sử dụng dữ liệu 5G tại một thời điểm; đường kia sử dụng 5G cho dự phòng thoại (VoNR).

**Q3: Đường truyền thứ hai của tôi hoạt động nhưng đường truyền đầu tiên ngừng hoạt động sau khi thêm nó – điều gì đã xảy ra?**
Bạn có thể vô tình hoán đổi cài đặt đường truyền chính. Vào `Cài đặt > Di động > Đường thoại mặc định` và đặt lại.

**Q4: Dual eSIM có hao pin nhiều hơn eSIM + SIM vật lý không?**
Nói chung, dual eSIM tiêu thụ ít năng lượng hơn một chút vì không có đầu đọc thẻ vật lý. Nhưng sự khác biệt là không đáng kể (trong vòng 2‑3%).

**Q5: Tôi đang đi du lịch – tôi có thể sử dụng eSIM địa phương cho dữ liệu và giữ eSIM nhà để gọi không?**
Có, phương pháp tốt nhất:
- Đặt eSIM địa phương làm đường **Dữ liệu di động**.
- Giữ eSIM nhà làm **Đường thoại mặc định**.
- Tắt **Chuyển vùng dữ liệu** trên eSIM nhà để tránh phí lớn.
- Bật **Cho phép chuyển đổi dữ liệu di động** để đường truyền nhà có thể sử dụng dữ liệu của eSIM địa phương cho Wi‑Fi Calling & MMS.

Nếu bạn thường xuyên chuyển đổi giữa các thiết bị khi đi du lịch, **[hướng dẫn chuyển eSIM đa nền tảng](/faq/how-to-transfer-esim-between-iphone-and-android/)** sẽ giúp bạn di chuyển số của mình một cách liền mạch.

**Q6: Tại sao eSIM thứ hai đôi khi biến mất sau khi cập nhật iOS?**
Lỗi hiếm gặp. Vào `Cài đặt > Di động` → nếu đường truyền bị thiếu nhưng vẫn hiển thị trong "SIM có sẵn", hãy nhấn vào đó và kích hoạt lại. Nếu không, hãy liên hệ với nhà mạng để đẩy lại hồ sơ.

**Q7: Tôi có thể sử dụng thiết lập dual‑SIM với Apple Watch không?**
Có. Apple Watch có thể phản chiếu **một** trong các đường truyền của iPhone. Chọn đường truyền bạn muốn trên đồng hồ trong quá trình thiết lập. Lưu ý rằng đồng hồ không thể sử dụng cả hai đường truyền đồng thời – nó chỉ phản chiếu đường truyền đã chọn.

**Q8: Tôi có thể tìm tài liệu chính thức của Apple về dual eSIM ở đâu?**
Apple cung cấp hai tài nguyên chính: [Giới thiệu về eSIM trên iPhone](https://support.apple.com/en-us/HT209044) và [Sử dụng Dual SIM với eSIM](https://support.apple.com/en-us/HT209086). Các tài liệu này bao gồm khả năng tương thích và thiết lập cơ bản.

**Q9: Làm thế nào để phục hồi eSIM đã xóa?**
Nếu bạn đã xóa một hồ sơ eSIM, việc phục hồi phụ thuộc vào nhà mạng của bạn. Đối với eSIM du lịch (Roami, Airalo, v.v.), việc xóa thường là vĩnh viễn – bạn sẽ cần mua một gói mới. Đối với eSIM nhà mạng trả sau (như Verizon, T‑Mobile, AT&T), hãy liên hệ với nhà mạng của bạn – họ thường có thể cấp lại mã QR mới. Luôn giữ bản sao lưu email kích hoạt và mã QR gốc của bạn.

**Q10: Tại sao eSIM của tôi có thanh tín hiệu nhưng không có kết nối dữ liệu?**
Đây hầu như luôn là vấn đề APN. Xem Sửa #11 ở trên để biết hướng dẫn cấu hình từng bước.

**Q11: "Mã xác nhận eSIM" có nghĩa là gì và tôi tìm nó ở đâu?**
Một số hồ sơ eSIM yêu cầu mã xác nhận (4‑8 chữ số) trong quá trình kích hoạt. Tìm nó trong email hoặc hướng dẫn kích hoạt của nhà mạng. Nếu không tìm thấy, hãy liên hệ với nhà mạng của bạn.

**Q12: Tôi có thể có hai eSIM đang hoạt động cộng với một SIM vật lý trên iPhone không?**
Không. iPhone hỗ trợ tối đa **hai đường truyền đang hoạt động** tại bất kỳ thời điểm nào – hoặc hai eSIM HOẶC một eSIM + một SIM vật lý. Bạn không thể có ba đường truyền đang hoạt động đồng thời.

**Q13: Dual eSIM 5G của tôi không hoạt động trên một đường truyền – tôi nên kiểm tra điều gì?**
Đầu tiên, đảm bảo 5G được bật cho cả hai đường truyền: Cài đặt > Di động > [đường truyền] > Giọng nói & Dữ liệu > chọn 5G Tự động hoặc 5G Bật. Nếu một đường truyền vẫn chỉ hiển thị LTE, hãy kiểm tra với nhà mạng – một số nhà mạng chỉ giới hạn 5G cho đường truyền dữ liệu chính.

**Q14: Tôi lắp SIM vật lý và eSIM của tôi biến mất – làm thế nào để lấy lại?**
Đây là hành vi đã biết trên các iPhone bị khóa nhà mạng. Tháo SIM vật lý, khởi động lại iPhone và eSIM sẽ xuất hiện lại trong Cài đặt > Di động. Sau đó liên hệ với nhà mạng để mở khóa thiết bị của bạn để cả hai có thể hoạt động đồng thời.

👉 **Đang thiết lập dual eSIM cho du lịch?** Duyệt [gói eSIM cho Mỹ](/united-states-esim/) hoặc [eSIM cho Nhật Bản](/japan-esim/) — cả hai đều hỗ trợ dual eSIM trên các iPhone hiện đại.

---

*Dựa trên tài liệu chính thức của Apple, tiêu chuẩn GSMA và thử nghiệm nhà mạng tính đến tháng 8 năm 2026.*
## Nguồn

- [GSMA — thông số kỹ thuật eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM trên iPhone](https://support.apple.com/en-us/108072)
- [Apple Support — Giới thiệu về eSIM trên iPhone](https://support.apple.com/en-us/HT209044)