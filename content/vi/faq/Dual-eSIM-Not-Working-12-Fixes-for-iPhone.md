---
title: "Dual eSIM không hoạt động? 12 cách khắc phục cho iPhone"
h1_title: "Cách khắc phục Dual eSIM không hoạt động trên iPhone: 12 giải pháp"
description: "Dual eSIM không hoạt động? Khắc phục 12 sự cố iPhone: định tuyến cuộc gọi, thiết lập VoLTE, tụt pin và kiểm tra khóa nhà mạng cho iPhone 16 và iOS 18."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["dual eSIM not working", "iPhone dual SIM no service", "dual eSIM signal issue", "eSIM carrier lock", "dual eSIM troubleshooting", "dual eSIM activation failed", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "dual eSIM no service"]
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
    - name: "Germany"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turkey"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japan"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "China"
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


> **Lưu ý của biên tập viên:** Một dual eSIM làm rớt một đường gần như luôn do khóa nhà mạng, APN cấu hình sai, hoặc một cài đặt dual-SIM — không phải gói cước chết. Mọi giải pháp dưới đây đều dựa trên tài liệu chính thức của Apple và tiêu chuẩn GSMA, nhắm vào một triệu chứng cụ thể. Hãy làm theo bảng chẩn đoán để tìm chính xác giải pháp cho lỗi của bạn.
> 
> **Điểm mấu chốt:** Giới hạn VoLTE hoặc gói cước là nguyên nhân phổ biến nhất khiến một đường không thể gọi hay nhận cuộc gọi. Sự cố định tuyến cuộc gọi đến thường được sửa bằng cách bật/tắt lại Wi‑Fi Calling. iPhone là dual standby chứ không phải dual active – "No Service" trên đường còn lại trong lúc gọi là hiện tượng bình thường. Kiểm tra Carrier Lock trong Settings (`No SIM restrictions`) nếu bạn không thể thêm eSIM thứ hai. Tụt pin do dual eSIM có thể giảm bằng cách tắt 5G trên đường có sóng yếu hơn.

Hầu hết sự cố dual eSIM trên iPhone bắt nguồn từ năm nguyên nhân: khóa nhà mạng, giới hạn gói cước hoặc VoLTE, cài đặt Data Roaming hoặc đường mặc định, hành vi dual-standby thông thường chỉ trông giống lỗi, hoặc một trục trặc iOS mà việc reset cài đặt sẽ xóa được. Hãy đối chiếu triệu chứng của bạn trong mục lục dưới đây và áp dụng giải pháp tương ứng — phần lớn chỉ mất chưa đến năm phút.


## Cách Khắc Phục Dual eSIM Không Hoạt Động

**Điện thoại của bạn gặp sự cố dual eSIM. Là sự cố nào?**

| Triệu chứng của bạn | Chuyển đến giải pháp |
|--------------|-------------|
| **eSIM thứ hai hiển thị "No Service"** nhưng đường đầu tiên hoạt động | [Fix #2](#why-one-dual-esim-line-shows-no-service) |
| **Gọi ra được nhưng KHÔNG nhận được cuộc gọi đến** | [Fix #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Trong lúc gọi, đường còn lại báo "No Service"** | [Fix #4](#one-line-showing-no-service-during-a-call-is-normal) – đây là hiện tượng bình thường! |
| **Không thể thêm eSIM thứ hai – lỗi "Carrier lock"** | [Fix #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **Pin tụt nhanh hơn khi dùng hai đường** | [Fix #6](#how-to-reduce-dual-esim-battery-drain) |
| **SIM vật lý không được nhận diện** | [Fix #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **iPhone từ Trung Quốc – không có tùy chọn eSIM** | [Fix #8](#dual-esim-in-china-hong-kong-and-macau) – giới hạn phần cứng |
| **Dữ liệu hoạt động nhưng không có internet (vấn đề APN)** | [Fix #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – cấu hình APN |
| **eSIM bị xóa nhầm** | [FAQ #9](#frequently-asked-questions) – tùy nhà cung cấp |
| **Không chắc – nguyên nhân khác** | [Bảng khắc phục sự cố đầy đủ](#dual-esim-troubleshooting-table) |

> 💡 **Thông tin quan trọng:** Nếu bạn đang dùng **hai đường trên một chiếc iPhone**, iPhone là **dual standby chứ không phải dual active** – khi bạn đang gọi, đường còn lại sẽ tạm thời báo "No Service". Đây là **hành vi bình thường** (xem Fix #4). Đừng lãng phí thời gian để "sửa" nó.

Nếu sự cố dual-SIM của bạn bắt nguồn từ việc cài đặt sai, hãy bắt đầu với [hướng dẫn kích hoạt eSIM chung](/faq/how-to-activate-an-esim/), rồi làm tiếp các giải pháp dưới đây — và với mọi thông báo lỗi mà trang này không nêu, [Hướng dẫn khắc phục sự cố eSIM chuyên sâu](/faq/esim-deep-troubleshooting-guide-2026/) sẽ xử lý mọi trường hợp một cách chi tiết.


## Hướng Dẫn Khắc Phục Sự Cố Dual eSIM Toàn Diện

Đây là con đường mà hầu hết người dùng iPhone đi qua khi dual eSIM không hoạt động. Dùng nó để theo dõi bạn đang ở đâu.

| Bước | Điều đang xảy ra | Việc cần làm | Nơi tìm thấy |
| :--- | :--- | :--- | :--- |
| **1. Xác định triệu chứng** | "eSIM thứ hai của tôi không có sóng." / "Tôi không nhận được cuộc gọi." / "Pin tụt nhanh." | Đối chiếu triệu chứng của bạn với bảng Chẩn đoán nhanh ở trên. | [Chẩn Đoán Nhanh 10 Giây](#dual-esim-quick-diagnostic-index) |
| **2. Kiểm tra xem có phải hành vi bình thường không** | "Trong lúc gọi, đường còn lại của tôi báo No Service." | Đây là hiện tượng **bình thường** với iPhone dual standby. Nhảy đến Fix #4. | [Fix #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Loại trừ khóa nhà mạng** | "Tôi hoàn toàn không thể thêm eSIM thứ hai." | Kiểm tra Carrier Lock trong Settings. Phải hiển thị "No SIM restrictions." | [Fix #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Áp dụng giải pháp** | Làm theo giải pháp cụ thể cho triệu chứng của bạn. | Một trong 12 giải pháp dưới đây sẽ giải quyết vấn đề của bạn. | [Các Fix #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. Vẫn không được?** | "Không giải pháp nào hiệu quả." | Dùng các phương án dự phòng trong bảng khắc phục sự cố. | [Bảng khắc phục sự cố](#dual-esim-troubleshooting-table) |


## Mục Lục Chẩn Đoán Nhanh Dual eSIM

| Triệu chứng | Nguyên nhân khả dĩ nhất | Mục khắc phục |
|---------|-------------------|--------------|
| eSIM thứ hai hiển thị "No Service" nhưng đường đầu tiên hoạt động | Vấn đề VoLTE hoặc thứ tự đường | [#2](#why-one-dual-esim-line-shows-no-service) |
| Một số gọi ra được nhưng không nhận được cuộc gọi đến | Mismatch định tuyến cuộc gọi đến | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Trong lúc gọi, đường còn lại báo "No Service" | iPhone chỉ dùng một mạng dữ liệu tại một thời điểm (bình thường) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| Không thể thêm eSIM thứ hai – lỗi "Carrier lock" | Thiết bị bị khóa vào nhà mạng đầu tiên | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| Dual eSIM hoạt động nhưng tụt pin nhanh | Cả hai đường đều chủ động tìm mạng | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + SIM vật lý: SIM vật lý không được nhận diện | Vấn đề khay SIM hoặc thẻ không tương thích | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| Dữ liệu có sóng nhưng không có internet | Cài đặt APN bị thiếu hoặc sai | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## Những Tùy Chọn Dual eSIM Trên iPhone Của Bạn

Bắt đầu từ iPhone XS, XR và mọi model mới hơn (bao gồm iPhone 16), Apple hỗ trợ dual eSIM (hai eSIM hoạt động đồng thời) trên iPhone 13 trở lên. Các model không phải bản Mỹ cũng hỗ trợ một eSIM cộng một nano‑SIM vật lý. Các model dual‑SIM‑vật‑lý của Trung Quốc đại lục không hỗ trợ eSIM, trừ iPhone 16.

Cấu hình **dual eSIM** của bạn phụ thuộc vào model iPhone và khu vực:

| Cấu hình | Model được hỗ trợ | Số đường hoạt động tối đa |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 trở lên (bao gồm mọi model iPhone 16) | 2 |
| **1 eSIM + 1 nano‑SIM vật lý** | Mọi iPhone có khay SIM (bản không phải Mỹ, và bản Mỹ trước iPhone 14) | 2 |
| **Chỉ 1 SIM vật lý** | iPhone cũ hơn (trước XS) | 1 |
| **2 SIM vật lý** | Các model dual‑SIM khay vật lý riêng của Trung Quốc đại lục, Hồng Kông, Ma Cao (ví dụ, iPhone 16 bản Trung Quốc) | 2 |

Xem danh sách đầy đủ các iPhone tương thích tại [kiểm tra khả năng dual eSIM của iPhone của bạn](/compatibility/).


## Tại Sao Một Đường Dual eSIM Báo No Service

Nếu một trong hai đường dual eSIM của bạn dùng được dữ liệu nhưng không thể gọi hay nhận cuộc gọi — **hoặc hiển thị "No Service" hoàn toàn** — những nguyên nhân phổ biến nhất năm 2026 là:

- **VoLTE / VoNR chưa được bật** cho đường đó. Một số nhà mạng vô hiệu hóa voice-over-data roaming trên các gói eSIM, khiến đường đó chỉ còn dữ liệu. (Cách kiểm tra đơn giản: nếu bạn dùng được dữ liệu nhưng không gọi ra được, đây có thể là vấn đề.)
- **Thứ tự đường**. iOS định tuyến thoại đến *đường thoại mặc định* của bạn; một đường phụ được đặt chỉ dữ liệu không thể gọi hay nhận cuộc gọi.
- **Gói cước không bao gồm thoại**. Một số eSIM du lịch vốn chỉ có dữ liệu và không có dịch vụ thoại. Nếu đúng vậy, bạn sẽ thấy sóng nhưng cố gọi sẽ thất bại.

> **Lưu ý:** Các mạng 3G/CDMA đời cũ đã ngừng hoạt động ở Mỹ và Nhật Bản. Verizon và US Cellular tắt CDMA trong giai đoạn 2022-2024, và au/KDDI kết thúc 3G năm 2022. Năm 2026, một đường báo "không có dịch vụ thoại" gần như luôn là vấn đề VoLTE, gói cước hoặc thứ tự đường — không phải CDMA.

### Các giải pháp
- **Đặt đường gặp vấn đề làm đường thoại mặc định**: `Settings > Cellular > Default Voice Line`.
- **Bật VoLTE**: `Settings > Cellular > [đường] > Voice & Data`, rồi chọn LTE hoặc 5G (VoLTE/VoNR).
- **Xác nhận gói cước bao gồm thoại**. Nếu đó là eSIM du lịch chỉ dữ liệu, hãy giữ đường nhà mạng gốc làm đường thoại và chỉ dùng eSIM cho dữ liệu.
- **Liên hệ nhà mạng** để xác minh voice-over-LTE/5G được bật cho số của bạn khi roaming.

Xem so sánh sâu hơn về các mạng nhà mạng Mỹ tại **so sánh mạng nhà mạng Mỹ** trong [hướng dẫn gói eSIM Mỹ](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/).


## Đường Dual eSIM Không Nhận Được Cuộc Gọi

**Triệu chứng**: Đường A hoạt động bình thường. Đường B gọi ra được, nhưng cuộc gọi đến đường B đi thẳng vào hộp thư thoại hoặc đổ chuông báo "không khả dụng".

**Nguyên nhân gốc**: Mismatch định tuyến cuộc gọi của mạng. Khi Đường B gần đây chuyển đổi giữa 5G và LTE, hoặc dùng Wi-Fi Calling, mạng nhà mạng vẫn có thể cố định tuyến cuộc gọi đến qua đường sai.

**Ví dụ minh họa:** Hãy tưởng tượng nhà mạng có một cuốn sổ địa chỉ cũ vẫn ghi điện thoại của bạn ở ngôi nhà trước. Khi có người gọi, họ đến nhầm chỗ. Việc bật/tắt Wi‑Fi Calling cập nhật cuốn sổ địa chỉ đó.

### Khắc phục nhanh trên điện thoại
1. Tạm tắt **Wi‑Fi Calling**: `Settings > Cellular > Đường B > Wi‑Fi Calling` → OFF.
2. Khởi động lại iPhone.
3. Bật lại Wi‑Fi Calling.

### Khắc phục qua nhà mạng bằng cách gọi bộ phận hỗ trợ
Yêu cầu nhà mạng **reset định tuyến cuộc gọi** hoặc **làm mới đường** cho số này. Điều này thường có hiệu lực ngay sau khi nhà mạng cấp phát lại đường. Xem thêm các vấn đề định tuyến cuộc gọi và các vấn đề liên quan đến cuộc gọi khác tại **[Fix 3 phía trên](#a-dual-esim-line-that-cannot-receive-calls)**.

### Phòng ngừa tái diễn
- Tránh chuyển đổi nhanh giữa 5G/LTE (giữ một chế độ ít nhất vài giờ).
- Nếu bạn thường xuyên đi du lịch, hãy giữ **Data Roaming** OFF cho đường không cần dữ liệu.


## Một Đường Báo No Service Trong Lúc Gọi Là Hiện Tượng Bình Thường

**Triệu chứng**: Bạn đang gọi bằng Đường A. Khi kiểm tra, Đường B hiển thị "No Service".

**Giải thích**: iPhone là **dual standby chứ không phải dual active** (còn gọi là DSDS – Dual SIM Dual Standby). Chỉ một đường có thể duy trì kết nối di động tại một thời điểm. Trong lúc gọi, đường còn lại tạm thời không liên lạc được. Ngay khi cuộc gọi kết thúc, cả hai đường kết nối lại. Đây **không phải lỗi dual eSIM** – nó là thiết kế có chủ đích.

### Bạn Có Thể Làm Gì
- **Bật Wi‑Fi Calling trên cả hai đường** – khi đó đường rảnh có thể dùng Wi-Fi để nhận cuộc gọi trong khi bạn đang gọi trên đường kia. Tài liệu [dual standby của Apple](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) giải thích điều này chi tiết hơn.
- **Bật "Allow Cellular Data Switching"** – trong `Settings > Cellular > Cellular Data`. Điều này cho phép đường không dùng dữ liệu dùng kết nối của đường dữ liệu cho Wi-Fi Calling.

> 📌 Lưu ý: Một số nhà mạng không hỗ trợ Wi‑Fi Calling đồng thời trên cả hai đường. Hãy kiểm tra với nhà mạng của bạn.


## Dual eSIM Không Hoạt Động Trên Điện Thoại Bị Khóa Nhà Mạng

Nếu bạn không thể thêm eSIM thứ hai hoặc SIM vật lý:
- iPhone của bạn có thể bị **khóa nhà mạng** vào nhà mạng đầu tiên.
- Cách kiểm tra: `Settings > General > About` → cuộn xuống **Carrier Lock**. Nó phải hiển thị "No SIM restrictions".

### Cần Làm Gì Nếu Điện Thoại Bị Khóa
- Liên hệ nhà mạng để yêu cầu mở khóa. Các nhà mạng Mỹ phải mở khóa sau khi thiết bị được trả hết tiền.
- Nếu đã mở khóa nhưng vẫn không hoạt động, bạn có thể cần reset cài đặt mạng: `Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings`. (Cảnh báo: việc này sẽ xóa mật khẩu Wi‑Fi đã lưu.)

Sau khi mở khóa, bạn cũng có thể chuyển eSIM giữa iPhone và Android – xem **[hướng dẫn chuyển eSIM đa nền tảng 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** của chúng tôi để có hướng dẫn từng bước.


## Cách Giảm Tụt Pin Do Dual eSIM

Chạy **dual eSIM** hoặc thậm chí eSIM + SIM vật lý có thể làm tăng mức tiêu thụ pin vì cả hai đường đều duy trì kết nối chủ động với mạng. Đây là cách giảm tụt pin mà vẫn giữ cả hai đường hoạt động:

| Chiến lược | Hiệu quả |
|----------|--------|
| Đặt đường có sóng yếu hơn **chỉ dùng LTE** (không dùng 5G) | Tiết kiệm vừa phải |
| Tắt **Data Roaming** trên đường không dùng dữ liệu | Tiết kiệm việc quét mạng |
| Tắt **5G Standalone** (nếu nhà mạng cho phép) | Giúp ích nhiều |
| Dùng **Low Data Mode** cho ứng dụng chạy nền trên đường phụ | Tiết kiệm nhẹ |
| Ở vùng sóng rất yếu, tạm thời vô hiệu hóa đường phụ | Tiết kiệm đáng kể |

Để vô hiệu hóa một đường: `Settings > Cellular` → chạm vào đường → tắt **Turn On This Line**. Nếu bạn thường xuyên du lịch quốc tế, [hãy thử gói dùng thử eSIM miễn phí của Roami](/free-esim/) như một phương án tiết kiệm pin.


## Xung Đột Giữa eSIM và SIM Vật Lý cùng Sự Cố Khay SIM

**Triệu chứng**: nano‑SIM của bạn hoạt động trên điện thoại khác nhưng không hoạt động trên iPhone. Hoặc, eSIM của bạn hoạt động bình thường nhưng SIM vật lý không được nhận diện khi cả hai cùng được cài.

**Nguyên nhân phổ biến**:
- iPhone bị **khóa nhà mạng** vào mạng khác.
- Khay SIM chưa cắm sát hoặc bị hỏng.
- Thẻ SIM **quá cũ** (trước 4G) hoặc bị cong.
- **Xung đột SIM vật lý**: Trên một số iPhone, việc cắm SIM vật lý có thể tạm thời vô hiệu hóa khe eSIM nếu thiết bị bị khóa nhà mạng.

**Các giải pháp**:
1. Tháo khay, lau tiếp điểm bằng vải mềm.
2. Cắm lại chặt tay cho đến khi nghe tiếng lách.
3. Khởi động lại iPhone.
4. Nếu vẫn không được nhận diện, thử SIM trên điện thoại khác – nếu hoạt động, đầu đọc SIM của iPhone bạn có thể bị lỗi.
5. Đổi thẻ SIM tại cửa hàng nhà mạng (miễn phí cho hầu hết gói trả sau).

> **Nếu eSIM của bạn biến mất sau khi cắm SIM vật lý:** Một số iPhone bị khóa nhà mạng sẽ vô hiệu hóa khe eSIM khi một SIM vật lý từ nhà mạng khác được cắm vào. Tháo SIM vật lý, khởi động lại, và eSIM của bạn sẽ xuất hiện lại. Sau đó liên hệ nhà mạng để mở khóa thiết bị.

Nếu bạn dự định chuyển hoàn toàn sang eSIM, hãy tham khảo **[hướng dẫn eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** của chúng tôi để biết các phương pháp kích hoạt.


## Dual eSIM Ở Trung Quốc, Hồng Kông và Ma Cao

Các iPhone Trung Quốc đại lục (trừ iPhone 16) có hai khe nano‑SIM vật lý và **hoàn toàn không hỗ trợ eSIM**. Các model Hồng Kông và Ma Cao thường hỗ trợ eSIM + SIM vật lý. Nếu bạn mua một iPhone dual‑SIM‑vật‑lý của Trung Quốc đại lục, bạn không thể cài bất kỳ eSIM nào, kể cả eSIM du lịch quốc tế – đây là giới hạn phần cứng.

Apple bán các model dual‑SIM‑vật‑lý cụ thể tại **Trung Quốc đại lục**:
- iPhone 16, 17 Pro, 17 Pro Max: **hai khe nano‑SIM vật lý** (không có eSIM trừ bản Air).
- iPhone 16: **chỉ có eSIM** (toàn cầu, kể cả Trung Quốc).

Các model **Hồng Kông và Ma Cao**:
- Hỗ trợ **eSIM + SIM vật lý** (như model quốc tế) hoặc dual SIM vật lý tùy model.
- Luôn xác minh trước khi mua nếu bạn định dùng các gói eSIM du lịch.

> ⚠️ **Quan trọng**: Nếu bạn mua một iPhone dual‑SIM‑vật‑lý của Trung Quốc đại lục, bạn **không thể cài bất kỳ eSIM nào** (kể cả eSIM du lịch quốc tế) – trừ iPhone 16. Đây là giới hạn phần cứng, không phải chặn bằng phần mềm.


## Dual eSIM Cho Đường Công Việc và Cá Nhân

Nhiều người dùng giữ một **số công việc** (eSIM) và **số cá nhân** (eSIM thứ hai hoặc SIM vật lý). Đây là cách thiết lập cấu hình **dual eSIM** của bạn một cách gọn gàng:

### Gắn nhãn các đường rõ ràng
`Settings > Cellular` → chạm vào một đường → `Cellular Plan Label` → chọn "Business" hoặc "Personal", hoặc tạo nhãn tùy chỉnh.

### Chọn đường thoại và dữ liệu mặc định
- **Default Voice Line**: Đường nào được dùng khi bạn gọi từ ứng dụng Phone gốc (bạn vẫn có thể chọn theo từng cuộc gọi).
- **Cellular Data**: Đường nào dùng dữ liệu di động. Bật **Allow Cellular Data Switching** để điện thoại có thể tạm dùng dữ liệu của đường kia nếu đường chính mất sóng.

### Phân tách danh bạ
- Gán liên hệ vào một đường cụ thể: Sửa liên hệ → `Preferred Line` → chọn công việc hoặc cá nhân.

### Phòng ngừa roaming ngoài ý muốn
- Tắt **Data Roaming** cho đường công việc nếu nó có mức giá quốc tế đắt đỏ.


## Bảng Khắc Phục Sự Cố Dual eSIM

| Vấn đề | Bước tức thì | Giải pháp lâu dài | Nếu Vẫn Không Được |
|---------|----------------|----------------|----------------------|
| eSIM thứ hai không bao giờ có sóng | Khởi động lại iPhone, rồi bật/tắt đường | Xác nhận gói cước đang hoạt động và đường đã được bật | Liên hệ nhà mạng để cấp phát lại eSIM |
| Cuộc gọi đi thẳng vào hộp thư thoại (không đổ chuông) | Tắt "Silence Unknown Callers" và chuyển hướng cuộc gọi | Liên hệ nhà mạng để reset định tuyến cuộc gọi | Reset cài đặt mạng |
| Không nhận được SMS trên đường thứ hai | Gửi SMS thử nghiệm từ đường đó đến bất kỳ số nào | Đảm bảo đường không chỉ có dữ liệu; nhà mạng có thể cần bật SMS | Dùng ứng dụng nhà mạng để đồng bộ lại đường |
| Hai eSIM nhưng cả hai đều "No Service" | Bật/tắt chế độ máy bay > kiểm tra khóa nhà mạng | Khôi phục cài đặt mạng | Kiểm tra xem nhà mạng có sự cố tại khu vực của bạn không |
| Đổi đường xong thì FaceTime/iMessage không kích hoạt được | Vào `Settings > Messages > Send & Receive` – chọn số thủ công | Đăng xuất Apple ID và đăng nhập lại | Liên hệ Apple Support |
| Dữ liệu có sóng nhưng không có internet | Kiểm tra cài đặt APN (xem Fix #11) | Cấu hình APN thủ công | Liên hệ nhà cung cấp eSIM để lấy APN đúng |
| eSIM bị xóa nhầm | Kiểm tra xem nhà cung cấp có cho tải lại không | Liên hệ nhà mạng để lấy mã QR mới | eSIM du lịch: mua gói mới |
| Cài SIM vật lý, eSIM biến mất | Điện thoại khóa nhà mạng vô hiệu hóa eSIM khi có SIM nước ngoài | Tháo SIM vật lý, khởi động lại, eSIM xuất hiện lại | Liên hệ nhà mạng để mở khóa thiết bị |


## Cách Cấu Hình Cài Đặt APN Nếu eSIM Của Bạn Không Có Dữ Liệu

**Triệu chứng**: eSIM của bạn hiển thị sóng đầy vạch (hoặc "No Service") nhưng không có kết nối internet – website không tải được, ứng dụng báo "không có kết nối".

**Nguyên nhân gốc**: Hồ sơ eSIM đã được cài đặt đúng, nhưng cài đặt Access Point Name (APN) bị thiếu hoặc sai. Một số nhà cung cấp eSIM tự cấu hình APN; số khác yêu cầu nhập thủ công.

### Cách cấu hình APN trên iPhone

1. Vào **Settings > Cellular**.
2. Chạm vào đường eSIM không có dữ liệu.
3. Chạm **Cellular Data Network** (nếu bạn không thấy tùy chọn này, APN được cấu hình tự động bởi nhà mạng – bỏ qua giải pháp này).
4. Trong mục **Cellular Data**, điền vào trường **APN**.
5. Để trống **Username** và **Password** trừ khi nhà cung cấp chỉ định khác.
6. Quay lại, bật/tắt Airplane Mode, rồi kiểm tra dữ liệu.

### Giá trị APN phổ biến cho eSIM du lịch

| Nhà cung cấp | APN | Tên người dùng | Mật khẩu |
|----------|-----|----------|----------|
| **Roami** | internet | (để trống) | (để trống) |
| **Airalo** | globaldata | (để trống) | (để trống) |
| **Holafly** | hola | (để trống) | (để trống) |
| **Nomad** | nbdata | (để trống) | (để trống) |
| **T‑Mobile (US)** | fast.t-mobile.com | (để trống) | (để trống) |
| **AT&T (US)** | nxgen | (để trống) | (để trống) |
| **Verizon (US)** | vzwinternet | (để trống) | (để trống) |
| **EE (UK)** | everywhere | (để trống) | (để trống) |
| **O2 (UK)** | mobile.o2.co.uk | web | web |
| **Vodafone (UK)** | internet | (để trống) | (để trống) |
| **Three (UK)** | three.co.uk | (để trống) | (để trống) |
| **Orange (France)** | orange.fr | (để trống) | (để trống) |

> **Nếu trường APN chuyển xám:** Nhà mạng của bạn đã khóa cài đặt APN. Điều này phổ biến với các eSIM trả sau của nhà mạng (Verizon, T‑Mobile, AT&T). Hãy liên hệ nhà mạng để được hỗ trợ – bạn không thể tự thay đổi thủ công.

> **Nếu APN đúng nhưng vẫn không có dữ liệu:** Khởi động lại iPhone, bật/tắt Airplane Mode, hoặc kiểm tra xem Data Roaming đã bật chưa (Settings > Cellular > [đường] > Data Roaming ON).


## Mẹo Chuyên Gia Cuối Cùng Cho Người Dùng Dual eSIM

- **Gắn nhãn các đường** ngay sau khi thiết lập – điều này tránh vô số nhầm lẫn.
- **Đặt nhạc chuông khác nhau** cho từng đường: `Settings > Sounds & Haptics > Ringtone` → cuộn xuống, bạn có thể gán theo từng đường.
- **Dùng tự động hóa Shortcuts** để đổi đường thoại mặc định theo thời gian (ví dụ: giờ làm việc = đường công việc; buổi tối = cá nhân).
- **Trước khi bán thiết bị**: Vào `Settings > Cellular`, xóa **tất cả** eSIM, và tháo SIM vật lý. Sau đó xóa toàn bộ nội dung và cài đặt. Để có hướng dẫn chi tiết về xóa eSIM và hủy gói cước, tham khảo **[Fix #15 trong hướng dẫn khắc phục sự cố của chúng tôi](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)**.


## Câu Hỏi Thường Gặp

**Câu 1: Tôi có thể dùng hai eSIM từ cùng một nhà mạng không?**  
Có, miễn là nhà mạng của bạn cho phép nhiều hồ sơ eSIM trên một tài khoản. Ví dụ, T‑Mobile US hỗ trợ tối đa hai eSIM trên cùng một iPhone.

**Câu 2: Cả hai đường có hỗ trợ 5G đồng thời không?**  
Có, trên iPhone 13 trở lên (bao gồm iPhone 16), cả hai đường đều có thể dùng 5G (dual 5G standby). Tuy nhiên, chỉ một đường có thể dùng dữ liệu 5G tại một thời điểm; đường kia dùng 5G để dự phòng thoại (VoNR).

**Câu 3: Đường thứ hai của tôi hoạt động nhưng đường đầu tiên ngừng hoạt động sau khi thêm – chuyện gì đã xảy ra?**  
Bạn có thể đã vô tình tráo đổi cài đặt đường chính. Vào `Settings > Cellular > Default Voice Line` và đặt lại.

**Câu 4: Dual eSIM có tụt pin nhiều hơn eSIM + SIM vật lý không?**  
Nhìn chung, dual eSIM tiêu thụ ít điện hơn một chút vì không có đầu đọc thẻ vật lý. Nhưng sự khác biệt không đáng kể (trong khoảng 2‑3%).

**Câu 5: Tôi đang đi du lịch – có thể dùng eSIM địa phương cho dữ liệu và giữ eSIM nhà mạng gốc cho cuộc gọi không?**  
Có, cách tốt nhất:  
- Đặt eSIM địa phương làm đường **Cellular Data**.  
- Giữ eSIM nhà mạng gốc làm **Default Voice Line**.  
- Tắt **Data Roaming** trên eSIM nhà mạng gốc để tránh cước phí khủng.  
- Bật **Allow Cellular Data Switching** để đường nhà mạng gốc có thể dùng dữ liệu của eSIM địa phương cho Wi‑Fi Calling & MMS.

Nếu bạn thường xuyên chuyển đổi giữa các thiết bị khi đi du lịch, **[hướng dẫn chuyển eSIM đa nền tảng](/faq/how-to-transfer-esim-between-iphone-and-android/)** sẽ giúp bạn chuyển số một cách liền mạch.

**Câu 6: Tại sao eSIM thứ hai đôi khi biến mất sau khi cập nhật iOS?**  
Lỗi hiếm gặp. Vào `Settings > Cellular` → nếu đường bị thiếu nhưng vẫn hiển thị trong "Available SIMs", chạm vào nó và kích hoạt lại. Nếu không, liên hệ nhà mạng để đẩy lại hồ sơ.

**Câu 7: Tôi có thể dùng cấu hình dual‑SIM với Apple Watch không?**  
Có. Apple Watch có thể phản chiếu **một** đường của iPhone. Chọn đường bạn muốn trên đồng hồ trong quá trình thiết lập. Lưu ý rằng đồng hồ không thể dùng cả hai đường đồng thời – nó chỉ phản chiếu đường được chọn.

**Câu 8: Tôi có thể tìm tài liệu chính thức của Apple về dual eSIM ở đâu?**  
Apple cung cấp hai nguồn tài nguyên chính: [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) và [Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086). Những tài liệu này bao gồm tính tương thích cơ bản và thiết lập.

**Câu 9: Làm sao khôi phục eSIM đã xóa?**  
Nếu bạn đã xóa một hồ sơ eSIM, việc khôi phục phụ thuộc vào nhà mạng của bạn. Với eSIM du lịch (Roami, Airalo, v.v.), việc xóa thường là vĩnh viễn – bạn sẽ cần mua gói mới. Với eSIM trả sau của nhà mạng (như Verizon, T‑Mobile, AT&T), hãy liên hệ nhà mạng – họ thường có thể cấp lại mã QR mới. Luôn giữ bản sao lưu email kích hoạt và mã QR gốc.

**Câu 10: Tại sao eSIM của tôi có sóng nhưng không có kết nối dữ liệu?**  
Điều này gần như luôn là vấn đề APN. Xem Fix #11 phía trên để cấu hình từng bước.

**Câu 11: "Mã xác nhận eSIM" nghĩa là gì và tôi tìm nó ở đâu?**  
Một số hồ sơ eSIM yêu cầu mã xác nhận (4‑8 chữ số) trong quá trình kích hoạt. Hãy tìm trong email hoặc hướng dẫn kích hoạt của nhà mạng. Nếu không tìm thấy, hãy liên hệ nhà mạng.

**Câu 12: Tôi có thể có hai eSIM hoạt động cộng thêm một SIM vật lý trên iPhone không?**  
Không. iPhone hỗ trợ tối đa **hai đường hoạt động** tại bất kỳ thời điểm nào – hoặc hai eSIM HOẶC một eSIM + một SIM vật lý. Bạn không thể có ba đường hoạt động đồng thời.

**Câu 13: Dual eSIM 5G của tôi không hoạt động trên một đường – tôi nên kiểm tra gì?**  
Trước tiên, đảm bảo 5G được bật cho cả hai đường: Settings > Cellular > [đường] > Voice & Data > chọn 5G Auto hoặc 5G On. Nếu một đường vẫn chỉ hiển thị LTE, hãy kiểm tra với nhà mạng – một số nhà mạng giới hạn 5G chỉ cho đường dữ liệu chính.

**Câu 14: Tôi cắm SIM vật lý và eSIM của tôi biến mất – làm sao lấy lại?**  
Đây là hành vi đã biết trên các iPhone bị khóa nhà mạng. Tháo SIM vật lý, khởi động lại iPhone, và eSIM sẽ xuất hiện lại trong Settings > Cellular. Sau đó liên hệ nhà mạng để mở khóa thiết bị để cả hai có thể hoạt động đồng thời.

👉 **Đang thiết lập dual eSIM để du lịch?** Xem [gói eSIM cho Hoa Kỳ](/united-states-esim/) hoặc [eSIM cho Nhật Bản](/japan-esim/) — cả hai đều hỗ trợ dual eSIM trên các iPhone hiện đại.

---

*Dựa trên tài liệu chính thức của Apple, tiêu chuẩn GSMA và kiểm thử nhà mạng tính đến tháng 9 năm 2026.*
## Nguồn tham khảo

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Apple Support — About eSIM on iPhone](https://support.apple.com/en-us/HT209044)
