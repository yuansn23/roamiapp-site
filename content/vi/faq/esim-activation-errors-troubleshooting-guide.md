---
title: "eSIM không hoạt động? Cách khắc phục lỗi tương thích trong năm 2026"
h1_title: "Cách khắc phục lỗi eSIM không hoạt động: Lỗi tương thích trong năm 2026"
description: "Đang gặp lỗi eSIM? Tìm hiểu cách khắc phục lỗi kích hoạt, lỗi chuyển đổi và vòng lặp khởi động trên iPhone & Android. Chẩn đoán điện thoại của bạn trong 2 phút."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["esim not working", "esim not supported", "esim not compatible iphone", "unable to activate esim", "esim network not available", "esim not transferring to new iphone", "accidentally deleted esim", "esim profile expired", "esim qr code invalid", "how to fix esim on iphone", "esim transfer error", "esim no service"]
date: 2026-09-14T00:00:00Z
lastmod: 2026-09-14T00:00:00Z
tags: ["eSIM", "Troubleshooting", "Activation Errors", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

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


> **Lưu ý của biên tập viên:** Phần lớn các trường hợp "eSIM của tôi không hoạt động" hóa ra là vấn đề của điện thoại chứ không phải của gói cước. Hướng dẫn này trả lời câu hỏi bạn nên đặt ra trước tiên: *liệu điện thoại của tôi có thực sự hỗ trợ eSIM không?* Chúng tôi sẽ hướng dẫn bạn kiểm tra phần cứng trong 2 phút, các ngoại lệ trên máy Trung Quốc/Hồng Kông và khóa nhà mạng — để bạn không lãng phí một giờ vào các bước kích hoạt vốn không bao giờ có thể hoạt động trên thiết bị của mình.

> **Bạn đang tìm cách khắc phục theo mã lỗi?** Nếu điện thoại của bạn vượt qua bài kiểm tra phần cứng dưới đây nhưng bạn đang nhìn thấy một thông báo cụ thể ("Activation failed", "No Service", "QR invalid", lỗi khôi phục 4013/4014), đó là một vấn đề khác. Hãy chuyển đến [Hướng dẫn khắc phục sự cố eSIM chuyên sâu](/faq/esim-deep-troubleshooting-guide-2026/) để tra cứu từng loại lỗi.

## Điện thoại của tôi có thực sự hỗ trợ eSIM không?

Trước khi mở Cài đặt, quét bất kỳ mã QR nào hoặc liên hệ bộ phận hỗ trợ, hãy xác nhận rằng điện thoại của bạn thực sự có phần cứng SIM nhúng cần thiết. Chỉ một bước kiểm tra này sẽ loại bỏ ngay khoảng một nửa số trường hợp "eSIM không hoạt động".

### Kiểm tra EID phổ quát

Mở ứng dụng gọi điện trên điện thoại và nhập:

> **`*#06#`**

- Nếu xuất hiện màn hình hiển thị **EID 32 chữ số** (eUICC Identifier), điện thoại của bạn có chip nhúng cần thiết để kích hoạt SIM kỹ thuật số. ✅
- Nếu màn hình chỉ hiển thị các số **IMEI** mà không có EID, phần cứng không có sẵn. ❌

**Cần làm gì nếu không có EID xuất hiện:** Dừng lại ở đây. Không có bản cập nhật phần mềm, mẹo hack hay phương pháp "ép buộc" nào có thể bổ sung chip còn thiếu — đây là sự vắng mặt vật lý của phần cứng. Hãy dùng SIM vật lý thay thế, hoặc xem Fix #4 cho những điện thoại *trông có vẻ* hỗ trợ eSIM nhưng thực tế thì không.

### Giải thích EID vs IMEI vs ICCID

| Mã định danh | Đó là gì | Nó cho bạn biết điều gì |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 chữ số) | Xác định dòng điện thoại của bạn — mọi điện thoại đều có |
| **EID** | eUICC Identifier (32 chữ số) | Xác nhận có chip SIM nhúng — chỉ điện thoại hỗ trợ eSIM mới có |
| **ICCID** | Integrated Circuit Card Identifier (19–20 chữ số) | Xác định một hồ sơ eSIM cụ thể sau khi đã cài đặt |

> **Điểm mấu chốt:** EID = phần cứng tồn tại. Nếu bạn thấy EID, điện thoại của bạn có khả năng sử dụng eSIM về mặt vật lý. Nếu không, mọi thứ bạn cài đặt cũng không thể thay đổi điều đó.

### Nơi tìm thấy từng con số

Cả ba con số đều nằm trong tầm mắt một khi bạn biết đường vào menu. Đây là đường ngắn nhất đến từng mục:

| Mã định danh | Cách nhanh nhất | Vị trí dự phòng |
| :--- | :--- | :--- |
| **IMEI (15 chữ số)** | Nhập `*#06#` — đó là số hiển thị đầu tiên | iPhone: **Settings > General > About**. Android: **Settings > About phone** |
| **EID (32 chữ số)** | Nhập `*#06#` và cuộn xuống — đó là dãy số dài bắt đầu bằng **8904** | iPhone: **Settings > General > About > EID**. Samsung: **Settings > About phone > Status** |
| **ICCID (19–20 chữ số)** | Chỉ xuất hiện sau khi cài đặt hồ sơ | iPhone: **Settings > General > About**. Android: **Settings > About phone > SIM card status** |

> **Sự thật hữu ích:** mọi EID đều bắt đầu bằng **"8904"** — tiền tố này đánh dấu nó là mã định danh eUICC. Nếu dãy số dài trên màn hình bắt đầu bằng bất kỳ thứ gì khác, bạn đang đọc nhầm giá trị.

### Bài kiểm tra nút Add eSIM

Nếu `*#06#` hiển thị EID nhưng bạn vẫn thấy "eSIM not supported", hãy mở **Settings > Cellular** và tìm **"Add eSIM"** hoặc **"Add Cellular Plan"**. Nếu tùy chọn có đó nhưng thất bại khi quét, nhiều khả năng bạn đang gặp **khóa nhà mạng** hoặc **hạn chế theo khu vực** — cả hai đều được đề cập bên dưới.

### Phương pháp tìm kiếm trong Cài đặt

Không có ứng dụng gọi điện trong tay (một số máy tính bảng và điện thoại gập chôn nó sâu), hoặc `*#06#` cho bạn một màn hình khó hiểu? Thanh tìm kiếm của chính điện thoại là bước kiểm tra nhanh thứ hai.

- **iPhone:** Mở **Settings**, vuốt xuống từ đầu danh sách để hiện hộp tìm kiếm, và nhập **"eSIM"**. Kết quả **"Add eSIM"** hoặc **"Add Cellular Plan"** nghĩa là tính năng đang hoạt động.
- **Samsung:** Mở **Settings**, chạm vào **biểu tượng kính lúp** ở trên cùng, và nhập **"eSIM"**. Nếu **"SIM Card Manager"** (hoặc "Add mobile plan") xuất hiện, phiên bản máy của bạn có chip.
- **Pixel:** Mở **Settings > Network & internet > SIMs**. Nếu bạn thấy **"Download a SIM instead?"**, máy của bạn ổn. Một màn hình chỉ liệt kê SIM vật lý — không có tùy chọn tải xuống — nghĩa là không có chip eUICC.

> **Không có kết quả tìm kiếm = không có phần cứng.** Nếu một chiếc điện thoại bán sau khoảng năm 2018 không trả về kết quả nào cho "eSIM" trong tìm kiếm Cài đặt, gần như chắc chắn bạn đang cầm một phiên bản khu vực hoặc phiên bản giá rẻ không có chip.

### Tra cứu số model

Đang mua máy cũ, hoặc kiểm tra một chiếc điện thoại không thể bật nguồn? Số model sẽ giải quyết trong vài giây.

- **iPhone:** **Settings > General > About > Model Number**, sau đó chạm vào số để chuyển sang **mã định danh bắt đầu bằng A** (ví dụ: **A2111**). Các chữ cái trước **/A** trong số linh kiện mã hóa khu vực bán hàng — bảng đầy đủ các hậu tố ở Mục 2.
- **Samsung:** **Settings > About phone > Model number** (ví dụ: **SM-S921U1**). Ký tự cuối cùng là manh mối: **U** = nhà mạng Mỹ, **U1** = máy Mỹ không khóa, **B** = châu Âu/toàn cầu, **0** = Trung Quốc/Hồng Kông (Snapdragon).
- **Pixel:** **Settings > About phone > Model**. Chuỗi model Pixel khác nhau theo khu vực và nhà mạng — các bản Nhật Bản và một số bản của nhà mạng Mỹ hạn chế eSIM, vì vậy hãy đối chiếu mã cụ thể hoặc nhập `*#06#`.

> **Nguyên tắc thực hành:** nếu số model kết thúc bằng hậu tố Trung Quốc/khu vực (hoặc hậu tố nhà mạng Mỹ trên Samsung), hãy xác minh bằng `*#06#` trước khi giả định eSIM hoạt động. Số model cộng với EID cùng nhau cho bạn câu trả lời 100% chính xác.

### Tại sao điện thoại có thể hiển thị EID nhưng vẫn từ chối eSIM

| Kịch bản | Có EID? | eSIM hoạt động? | Tại sao? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR trở lên (toàn cầu) | ✅ Có | ✅ Có | Hỗ trợ đầy đủ hồ sơ SIM kỹ thuật số |
| iPhone XS/XR (bản Trung Quốc) | ❌ Không | ❌ Không | Phần cứng bị loại bỏ để dùng 2 SIM vật lý |
| Samsung S20 FE (nhà mạng Mỹ) | ✅ Có | ❌ Không | Nhà mạng vô hiệu hóa tính năng bằng phần mềm |
| Google Pixel 4a (Nhật Bản) | ✅ Có | ❌ Không | Nhà mạng khóa chức năng |
| iPhone khóa nhà mạng (AT&T/T-Mobile) | ✅ Có | ❌ Không (với nhà mạng khác) | Khóa mạng chặn hồ sơ của các nhà cung cấp khác |
| iPhone không khóa (mọi khu vực) | ✅ Có | ✅ Có | Hỗ trợ đầy đủ |


## eSIM Không Được Hỗ Trợ Hoặc Không Tương Thích trên iPhone

Nếu bạn thấy **"eSIM not supported"**, **"this eSIM is not compatible with this iPhone"**, hoặc đơn giản là **"eSIM not compatible iPhone"**, nguyên nhân gần như luôn nằm trong một trong năm điều sau — và tất cả đều liên quan đến *thiết bị*, không phải gói cước.

### Model iPhone của bạn cũ hơn phần cứng eSIM

Chỉ những iPhone từ **XR, XS, XS Max (2018) trở lên** mới có chip nhúng. iPhone 8, 8 Plus và iPhone X không có, vì vậy chúng luôn báo **"eSIM not supported"** bất kể bạn thử gì. Chip eUICC đơn giản là không có trên các bo mạch đó — đây là giới hạn phần cứng, không phải vấn đề cài đặt.

**Kiểm tra nhanh:** Nhập `*#06#`. EID 32 chữ số nghĩa là bạn ổn; chỉ có IMEI nghĩa là không.

**Cần làm gì:** Dùng SIM vật lý, hoặc nâng cấp lên iPhone XR hoặc mới hơn. Danh sách chính thức nằm tại [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/118670).

### iPhone của bạn là bản Trung Quốc đại lục

Các iPhone bán ở Trung Quốc đại lục có **hai khe SIM vật lý và không có phần cứng eSIM**. Các quy định của Trung Quốc thúc đẩy điện thoại nội địa dùng hai SIM vật lý, nên Apple đã loại bỏ chip nhúng trên các máy này. Ngay cả khi tùy chọn "Add Cellular Plan" xuất hiện, nó cũng không thể hoàn tất — đây là nguyên nhân phổ biến nhất của lỗi "eSIM not compatible with this iPhone" đối với những người mua máy ở Trung Quốc hoặc qua một số nhà bán lại nhất định.

**Cách nhận biết:** **Settings > General > About > Model Number**. Nếu kết thúc bằng **"CH/A"**, đó là bản Trung Quốc đại lục. (Bảng hậu tố đầy đủ ở Mục 2 bên dưới.)

**Cần làm gì:** Không có cách nào bật eSIM trên thiết bị CH/A. Hãy dùng SIM du lịch vật lý, hoặc bán máy và mua bản toàn cầu.

### iPhone của bạn bị khóa nhà mạng

Một số nhà mạng — đặc biệt là ở Mỹ — khóa iPhone vào mạng của riêng họ. Việc cố kích hoạt hồ sơ từ nhà cung cấp khác (như eSIM du lịch) khi đó sẽ trả về "eSIM not supported" hoặc thông báo "carrier does not support". Lưu ý rằng một số nhà mạng chỉ khóa khe SIM vật lý trong khi để trống khe eSIM, nhưng nhiều nhà mạng khóa cả hai.

**Cách kiểm tra:** **Settings > General > About > Carrier Lock**. Nó phải hiển thị **"No SIM restrictions"**. Nếu hiển thị "SIM locked", bạn cần mở khóa. Xem Mục 3 để có hướng dẫn chi tiết về khóa nhà mạng.

### Phiên bản iOS của bạn đã lỗi thời

Hỗ trợ SIM kỹ thuật số được cải thiện nhiều trong iOS 16 trở lên. Trên iOS 12 hoặc 13, một số hồ sơ nhà mạng hiện đại đơn giản là không thể cài đặt.

**Cách kiểm tra:** **Settings > General > Software Update**.

**Cần làm gì:** Cập nhật lên iOS mới nhất, xóa mọi hồ sơ cài đặt dở, rồi quét lại mã QR.

### iPhone 14 Không Hỗ Trợ eSIM

Một chiếc iPhone 14 (bản Mỹ) lẽ ra luôn hỗ trợ eSIM — bản Mỹ không có khe SIM vật lý nào cả. Nếu nó vẫn báo lỗi này, bạn đang gặp trường hợp hiếm gặp: **lỗi phần cứng eUICC**. Hãy liên hệ Apple Support để chẩn đoán phần cứng thay vì mò mẫm trong cài đặt.

Xem danh sách iPhone đầy đủ theo từng model tại [hướng dẫn tương thích eSIM iPhone](/faq/iphone-11-esim-compatible/) của chúng tôi.

Người dùng Samsung nên xem [hướng dẫn eSIM Samsung Galaxy](/faq/samsung-s20-esim-compatible/), còn người dùng Pixel xem [hướng dẫn eSIM Google Pixel](/faq/google-pixel-6-esim-compatible/).


### eSIM Not Supported: Phần cứng, phần mềm hay nhà mạng

Mọi trường hợp "eSIM not supported" — trên bất kỳ điện thoại nào, bất kỳ nhà mạng nào — đều rơi vào một trong ba nhóm. Việc xác định nhóm sẽ cho bạn biết ngay vấn đề có thể sửa được hay không.

| Nhóm | Biểu hiện | Sửa được? | Việc cần làm |
| :--- | :--- | :--- | :--- |
| **Phần cứng** | Không có EID khi nhập `*#06#`; iPhone trước 2018; bản Trung Quốc (CH/A); Android giá rẻ không có eUICC | ❌ Không | SIM vật lý, hoặc nâng cấp điện thoại |
| **Phần mềm** | Có EID, nhưng tính năng bị ẩn hoặc hệ điều hành cũ (Samsung S20 FE bị nhà mạng vô hiệu hóa, iOS lỗi thời) | ✅ Thường là có | Cập nhật hệ điều hành, hoặc gỡ bỏ hạn chế của nhà mạng |
| **Nhà mạng** | Có EID, menu hiển thị, nhưng kích hoạt gói của nhà cung cấp khác thất bại | ✅ Có | Mở khóa thiết bị (Mục 3), rồi quét lại |

**Bài kiểm tra định tuyến 30 giây:** nhập `*#06#`.
- **Không có EID** → phần cứng. Dừng ở đây — mọi thứ bạn cài đặt cũng không thể thay đổi.
- **Có EID, nhưng quy trình "Add eSIM" thất bại** → phần mềm hoặc nhà mạng. Cả hai đều sửa được, nên hãy đọc tiếp.

Kết quả duy nhất này định tuyến bạn đến cách khắc phục đúng cho khoảng 9 trên 10 báo cáo "not supported" mà chúng tôi nhận được tại Roami.


## Hướng Dẫn Bản Trung Quốc, Hồng Kông và Ma Cao

Nơi bán điện thoại quyết định phần cứng của nó. Đây là cách nhanh nhất để loại trừ hoặc xác nhận tình huống không có eSIM theo khu vực.

### Tra cứu nhanh bản Trung Quốc

| Hậu tố số model | Khu vực | Hỗ trợ eSIM |
| :--- | :--- | :--- |
| **CH/A** | Trung Quốc đại lục | ❌ Không (2 SIM vật lý) |
| **HK/A** | Hồng Kông | ⚠️ Tùy máy (một số model hỗ trợ SIM vật lý + kỹ thuật số) |
| **LL/A** | Hoa Kỳ | ✅ Có |
| **ZA/A** | Canada | ✅ Có |
| **J/A** | Nhật Bản | ✅ Có (trừ một số bản nhà mạng) |
| **B/A** | Anh/châu Âu | ✅ Có |
| **X/A** | Úc/New Zealand | ✅ Có |

### Tình trạng eSIM trên iPhone Trung Quốc đại lục

- **Tất cả iPhone bán ở Trung Quốc đại lục** (trừ dòng iPhone 16) đều dùng 2 SIM vật lý và không có eSIM.
- **Điện thoại Android Trung Quốc** — Xiaomi, Oppo, Vivo, Huawei — bán nội địa cũng thường không có chip eSIM.
- **Nếu bạn mang điện thoại quốc tế vào Trung Quốc:** nó sẽ hoạt động với các eSIM du lịch quốc tế, nhưng các nhà mạng Trung Quốc nội địa không cung cấp eSIM cho khách du lịch, nên bạn vẫn cần một gói du lịch từ nhà cung cấp như Roami.

### Tình trạng eSIM trên iPhone Hồng Kông

- **Các model iPhone:** iPhone Hồng Kông thường hỗ trợ **eSIM + SIM vật lý** (mỗi loại một) hoặc 2 SIM vật lý tùy model cụ thể. Hãy kiểm tra hậu tố model của bạn.
- **Nhà mạng:** một số nhà mạng Hồng Kông (CMHK, 1010, SmarTone) cung cấp eSIM cho khách trả sau, nhưng eSIM trả trước rất hiếm.
- **Khách du lịch:** một eSIM du lịch quốc tế đơn giản và đáng tin cậy hơn là cố lấy một eSIM Hồng Kông nội địa.

### Tình trạng eSIM trên iPhone Ma Cao

- **Tương tự Hồng Kông:** hầu hết iPhone tại Ma Cao được nhập từ Hồng Kông và hỗ trợ eSIM + SIM vật lý.
- **CTM** (nhà mạng chính của Ma Cao) cung cấp eSIM cho khách trả sau nhưng không dành cho khách du lịch.

### Tại sao máy Trung Quốc bỏ eSIM

Đây không phải là biện pháp cắt giảm chi phí của Apple hay các thương hiệu Android — mà là quy định. Trung Quốc đại lục yêu cầu điện thoại bán tại đó phải được chứng nhận cho 2 SIM vật lý, và một hồ sơ eSIM có thể ghi lại không phù hợp với khung nội địa đó. Kết quả thực tế:

- **Apple** xuất xưởng iPhone Trung Quốc đại lục với **hai khe nano-SIM vật lý** và không có chip eUICC.
- **Xiaomi, Oppo, Vivo, Honor và Huawei** loại bỏ eSIM khỏi các bản nội địa Trung Quốc ngay cả khi bản toàn cầu của cùng máy có nó.
- **Điện thoại Trung Quốc mang ra nước ngoài vẫn không thể dùng eSIM** — đây là sự vắng mặt của phần cứng, không phải chặn bằng phần mềm. Điều ngược lại cũng đúng: điện thoại quốc tế vào Trung Quốc hoạt động với eSIM du lịch, nhưng ba nhà mạng lớn của Trung Quốc (China Mobile, China Unicom, China Telecom) không bán eSIM cho khách du lịch.

**Cách giải quyết:** nếu bạn mua máy ở Trung Quốc đại lục, hãy tính đến một SIM du lịch vật lý — hoặc mua máy bản toàn cầu. Không có mở khóa, jailbreak hay ứng dụng nào bổ sung được chip còn thiếu.

### Xác định model của bạn qua số A

Hậu tố số linh kiện (CH/A, LL/A, v.v.) là bộ lọc nhanh, nhưng **số A** mới là mã định danh chính xác. Hãy lấy iPhone 11 làm mẫu mà mọi thế hệ đều theo:

| Model iPhone 11 | Khu vực | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Hoa Kỳ | ✅ Có |
| **A2221** | Trung Quốc đại lục | ❌ Không (2 SIM vật lý) |
| **A2223** | Hồng Kông / Ma Cao | ✅ Có (eSIM + vật lý) |

**Cách sử dụng:** tìm số A của bạn (**Settings > General > About > Model Number**, rồi chạm vào số để hiện mã bắt đầu bằng A), và đối chiếu với danh sách model của Apple. Nếu người bán quảng cáo "iPhone eSIM toàn cầu không khóa" nhưng số A lại là mã Trung Quốc, tin đăng đã sai — hãy rời đi hoặc tính đến SIM vật lý.


## Khóa Nhà Mạng và Cách Gỡ Bỏ

Khóa nhà mạng là lý do phổ biến thứ hai khiến một chiếc điện thoại hoàn toàn có khả năng vẫn từ chối eSIM. Đây là hạn chế phần mềm mà nhà mạng đặt lên thiết bị, không phải giới hạn phần cứng.

### Khóa nhà mạng hoạt động như thế nào

Khi một điện thoại bị "SIM locked", nó chỉ chấp nhận SIM và hồ sơ eSIM từ nhà mạng đã bán nó. Việc cố thêm eSIM du lịch từ nhà cung cấp khác sẽ kích hoạt "eSIM not supported" hoặc "SIM not supported". Chip nhúng vẫn hiện diện và hoạt động — nhà mạng chỉ đang chặn quyền truy cập vào nó.

### Cách kiểm tra trạng thái khóa của bạn

1. Trên iPhone: **Settings > General > About > Carrier Lock**. Nó phải hiển thị **"No SIM restrictions"**.
2. Trên Android (Samsung): **Settings > About phone > Status** và tìm trường SIM lock.
3. Trên Android (Pixel): **Settings > About phone > SIM status**.

### Chính sách mở khóa của các nhà mạng Mỹ

| Nhà mạng | Yêu cầu mở khóa |
| :--- | :--- |
| **AT&T** | Thiết bị đã trả hết tiền và hoạt động 60 ngày trước khi mở khóa |
| **T-Mobile** | Thiết bị đã trả hết tiền và hoạt động 40 ngày; yêu cầu qua ứng dụng T-Mobile |
| **Verizon** | Hầu hết điện thoại tự động mở khóa sau 60 ngày kể từ khi mua |

### Cách mở khóa thiết bị của bạn

1. **Yêu cầu nhà mạng mở khóa** — thường miễn phí một khi điện thoại đã trả hết tiền, và hầu hết nhà mạng Mỹ cho bạn yêu cầu qua ứng dụng hoặc biểu mẫu web.
2. **Chờ xác nhận** — nhà mạng đẩy lệnh mở khóa; bạn có thể cần khởi động lại điện thoại.
3. **Xác minh** — kiểm tra lại trường Carrier Lock cho đến khi hiển thị "No SIM restrictions".
4. **Sau đó kích hoạt** — một khi đã mở khóa, quét lại mã QR của eSIM du lịch.

> **Lưu ý:** khóa nhà mạng là hạn chế cấp điện thoại, không phải cấp gói cước. Mở khóa thiết bị không hủy hợp đồng của bạn — nó chỉ giải phóng thiết bị để dùng SIM và eSIM của các nhà cung cấp khác.

### Chính sách mở khóa của nhiều nhà mạng Mỹ và MVNO khác

Ba ông lớn không phải là những nhà mạng duy nhất mọi người gặp phải. Điện thoại trả trước và MVNO thường bị khóa lâu hơn, và đó có thể là lý do ngấm ngầm khiến một eSIM du lịch "giá hời" không cài đặt được.

| Nhà mạng | Yêu cầu mở khóa |
| :--- | :--- |
| **Cricket Wireless** | 6 tháng dịch vụ đã trả phí (trừ khi mua giá bán lẻ trọn vẹn) |
| **Metro by T-Mobile** | 180 ngày dịch vụ đã trả phí |
| **Boost Mobile** | 12 tháng dịch vụ đã trả phí |
| **Spectrum Mobile** | 60 ngày |
| **Xfinity Mobile** | 60 ngày dịch vụ hoạt động |
| **US Cellular** | 120 ngày |
| **Visible (trả trước của Verizon)** | 60 ngày dịch vụ đã trả phí |

### Bạn cần gì để yêu cầu mở khóa

Mở khóa miễn phí một khi bạn đủ điều kiện, nhưng yêu cầu cần vài thứ sẵn sàng:

1. **IMEI của bạn** — nhập `*#06#` và lấy dãy 15 chữ số (không phải EID).
2. **Số tài khoản và mã PIN/mật khẩu tài khoản** — tìm trong ứng dụng nhà mạng hoặc trên hóa đơn gần đây.
3. **Điện thoại đã trả hết tiền** — nhà mạng sẽ không mở khóa thiết bị còn dư nợ trả góp.
4. **Đủ điều kiện** — mỗi nhà mạng có khoảng thời gian hoạt động tối thiểu riêng (xem các bảng trên).

**Nơi gửi yêu cầu:** AT&T và T-Mobile có cổng mở khóa trực tuyến và biểu mẫu trong ứng dụng; Verizon tự động mở khóa hầu hết điện thoại sau 60 ngày mà không cần yêu cầu. Với MVNO (Cricket, Metro, Boost), hãy dùng ứng dụng của họ hoặc gọi trực tiếp bộ phận hỗ trợ.

**Về các dịch vụ "mở khóa tức thì" của bên thứ ba:** đó là canh bạc. Nhiều dịch vụ dùng công cụ nhà mạng bị rò rỉ khiến máy bị khóa lại, và một số là lừa đảo trắng trợn. Nếu nhà mạng nói bạn chưa đủ điều kiện, hãy chờ — đừng trả 20 đô la cho người lạ để họ làm "giúp" bạn.


### Ba loại khóa khác nhau

Mọi người nói "điện thoại của tôi bị khóa" nhưng ý họ là ba điều hoàn toàn khác nhau. Mỗi loại cần một cách khắc phục khác nhau, nên đáng để phân biệt.

| Loại khóa | Đó là gì | Bạn thấy nó ở đâu | Cách khắc phục |
| :--- | :--- | :--- | :--- |
| **Khóa máy (activation lock)** | Chống trộm: iCloud Activation Lock (iPhone) hoặc Google FRP (Android), gắn với tài khoản của chủ cũ | "Activation Lock" / "This iPhone was linked to an Apple ID" khi thiết lập, hoặc yêu cầu tài khoản Google trên Android | Chỉ chủ ban đầu mới có thể gỡ bỏ — đừng bao giờ mua máy vẫn còn hiện khóa này |
| **Khóa khu vực** | Sự khác biệt phần cứng theo nơi bán máy (máy Trung Quốc thiếu chip eUICC) | Không có EID khi nhập `*#06#`; số model kết thúc bằng CH/A | Không thể gỡ bỏ — dùng SIM vật lý hoặc máy khác |
| **Khóa nhà mạng** | Hạn chế phần mềm từ nhà mạng giới hạn điện thoại vào mạng của họ | **Settings > General > About > Carrier Lock** hiển thị "SIM locked" | Yêu cầu nhà mạng mở khóa (Mục 3) |

**Cách phân biệt nhanh:**
- Thấy **yêu cầu tài khoản Apple ID hoặc Google** = khóa máy/activation lock (vấn đề chủ sở hữu).
- **Hoàn toàn không có EID** = khóa khu vực (vấn đề phần cứng).
- **Có EID + "SIM locked"** = khóa nhà mạng (sửa được, miễn phí một khi đủ điều kiện).

Hầu hết các khiếu nại "eSIM không hoạt động" vượt qua bài kiểm tra 2 phút đều thuộc loại khóa nhà mạng — và loại này gần như luôn giải quyết được.


## Điện Thoại Của Tôi Không Hỗ Trợ eSIM Nhưng Về Lý Thuyết Phải Hỗ Trợ

Một số thiết bị được quảng cáo có eSIM, nhưng các phiên bản khu vực hoặc nhà mạng cụ thể lại âm thầm bỏ tính năng. Đây là những "thủ phạm" thường gặp:

- **Samsung Galaxy S20 FE** – các bản khóa nhà mạng Mỹ bị vô hiệu hóa tính năng bằng phần mềm để cắt giảm chi phí, mặc dù bản toàn cầu hỗ trợ nó.
- **Google Pixel 4a (bản Nhật Bản)** – Docomo và SoftBank vô hiệu hóa eSIM trên máy của họ do thỏa thuận với nhà mạng nội địa.
- **Xiaomi Redmi Note series** – không model nào có chip eUICC, bất chấp tin đồn trực tuyến. Xiaomi chỉ dành eSIM cho các dòng flagship.
- **iPhone 8 / 8 Plus / X** – phần cứng trước thời eUICC; Apple chỉ bắt đầu trang bị chip từ thế hệ XS/XR.
- **Samsung Galaxy A series** – chỉ một số model chọn lọc (A54, A53) có chip; hầu hết dòng A không có.

### Những điện thoại trông giống hỗ trợ eSIM nhưng thực tế không

| Model điện thoại | Hỗ trợ eSIM | Tại sao? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Không | Phần cứng trước thời eUICC |
| **iPhone XS/XR (Trung Quốc)** | ❌ Không | Phần cứng 2 SIM vật lý |
| **Samsung Galaxy S20 FE (nhà mạng Mỹ)** | ❌ Không | Bị nhà mạng vô hiệu hóa |
| **Samsung Galaxy A13 / A23** | ❌ Không | Model giá rẻ, không có eUICC |
| **Google Pixel 4a (Nhật Bản)** | ❌ Không | Bị nhà mạng vô hiệu hóa (Docomo/SoftBank) |
| **Google Pixel 3 (một số bản)** | ⚠️ Tùy máy | Kiểm tra khu vực; có bản có, có bản không |
| **Xiaomi Redmi Note series** | ❌ Không | Không có phần cứng eUICC |
| **Xiaomi 12/13 (Trung Quốc)** | ❌ Không | Bản nội địa Trung Quốc thiếu phần cứng |
| **OnePlus Nord (bản Trung Quốc)** | ❌ Không | Bản Trung Quốc thiếu phần cứng |
| **Huawei (tất cả bản nội địa Trung Quốc)** | ❌ Không | Không có dịch vụ Google, không có phần cứng eSIM |
| **Motorola G series (đa số)** | ❌ Không | Model giá rẻ thiếu eUICC |

**Cần làm gì:** Trước khi mua bất kỳ điện thoại nào, hãy nhập `*#06#` trên máy (nếu máy trong tay bạn) để xác nhận EID, hoặc tra IMEI qua công cụ kiểm tra tương thích eSIM trực tuyến. **[Danh sách đầy đủ các điện thoại tương thích eSIM (2026)](/compatibility/)** là nguồn tài nguyên tốt nhất để xác minh bất kỳ model nào.


## Tương Thích eSIM trên Android Theo Từng Thương Hiệu

Nếu bạn dùng Android, biến số lớn nhất không phải hệ điều hành — mà là việc *phiên bản cụ thể của bạn* có được xuất xưởng với chip hay không. Đây là bức tranh theo từng model.

### Tương thích eSIM Samsung Galaxy

| Model | Hỗ trợ eSIM | Ghi chú |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Có | Mọi bản toàn cầu |
| **Galaxy S20 FE** | ❌ Không (nhà mạng Mỹ) / ✅ Có (toàn cầu) | Kiểm tra số model |
| **Galaxy A54 / A53** | ✅ Có | Chỉ một số model dòng A |
| **Galaxy A13 / A23 / A33** | ❌ Không | Model giá rẻ |
| **Galaxy Z Fold / Flip** | ✅ Có | Mọi model |
| **Galaxy Note 20** | ✅ Có | Mọi model |

**Cách kiểm tra trên Samsung:** Nhập `*#06#` và tìm EID, hoặc mở **Settings > Connections > SIM Card Manager** và tìm "Add eSIM" / "Add mobile plan". Nếu không có mục nào, phiên bản máy của bạn thiếu tính năng. Xem thêm [hướng dẫn tương thích eSIM Samsung](/faq/samsung-s20-esim-compatible/) và [Samsung Support](https://www.samsung.com/us/support/) của chúng tôi.

### Tương thích eSIM Google Pixel

| Model | Hỗ trợ eSIM | Ghi chú |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Có | Pixel đầu tiên có tính năng này |
| **Pixel 3a / 3a XL** | ✅ Có | – |
| **Pixel 4 / 4 XL** | ✅ Có | – |
| **Pixel 4a** | ⚠️ Tùy máy | Bản nhà mạng Nhật = KHÔNG |
| **Pixel 5 / 5a** | ✅ Có | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Có | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Có | – |
| **Pixel 8 / 8 Pro** | ✅ Có | – |

**Cách kiểm tra trên Pixel:** Nhập `*#06#` để xem EID, hoặc mở **Settings > Network & Internet > SIMs** và tìm "Download a SIM instead?". Nếu không có, máy bị khóa hoặc thiếu chip. Xem thêm [hướng dẫn tương thích eSIM Pixel](/faq/google-pixel-6-esim-compatible/) và trang [Google Support — eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887).

### Tương thích eSIM OnePlus

OnePlus chỉ bắt đầu trang bị eSIM từ **OnePlus 12**. OnePlus 11, 10, 9 và dòng Nord thiếu phần cứng.

| Model | Hỗ trợ eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Có |
| **OnePlus 11** | ❌ Không |
| **OnePlus 10** | ❌ Không |
| **OnePlus 9** | ❌ Không |
| **OnePlus Nord series** | ❌ Không (trừ một số bản EU) |

### Tương thích eSIM Xiaomi, Huawei, Motorola và các thương hiệu khác

- **Xiaomi** – các model flagship (Xiaomi 12/13 bản toàn cầu) có thể hỗ trợ eSIM, nhưng bản nội địa Trung Quốc thì không. Dòng Redmi Note hoàn toàn không có eUICC.
- **Huawei** – hỗ trợ giới hạn ở một vài model (P40, Mate 40 và mới hơn); nhiều điện thoại sau 2020 thiếu eSIM do các lệnh trừng phạt của Mỹ. Kiểm tra **Settings > Mobile Network > eSIM** — nếu không có tùy chọn, tức là không được hỗ trợ.
- **Motorola** – hầu hết model giá rẻ dòng G thiếu chip; Moto G Power và dòng Edge tùy khu vực.

Bài kiểm tra phổ quát cho tất cả các máy này đều giống nhau: nhập `*#06#` và tìm EID.


## Kiểm Tra Khả Năng eSIM: Android vs iPhone

Cùng bài kiểm tra 2 phút, nhưng hai menu khác nhau. Gửi bảng này cho bạn bè dùng hệ điều hành còn lại.

| Bước kiểm tra | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Nhập `*#06#` | Nhập `*#06#` | Nhập `*#06#` |
| **Menu Add eSIM** | **Settings > Cellular > Add eSIM** | **Settings > Connections > SIM Card Manager > Add eSIM** | **Settings > Network & internet > SIMs > Download a SIM instead?** |
| **Số model** | **Settings > General > About > Model Number** | **Settings > About phone > Model number** | **Settings > About phone > Model** |
| **Trạng thái khóa** | **Settings > General > About > Carrier Lock** | **Settings > About phone > Status** | **Settings > About phone > SIM status** |

**Sự khác biệt quan trọng nhất:** trên iPhone, hỗ trợ eSIM là có hoặc không theo thế hệ và khu vực — dễ dự đoán. Trên Android, nó tùy từng phiên bản, nên hai chiếc Galaxy hay Pixel "giống nhau" có thể hành xử khác nhau. Khi nghi ngờ trên Android, hãy tin EID từ `*#06#` hơn bảng thông số.


## Điện Thoại Hỗ Trợ eSIM Nhưng Kích Hoạt Thất Bại

Nếu điện thoại của bạn đã vượt qua bài kiểm tra phần cứng ở trên mà vẫn thấy thông báo lỗi cụ thể, vấn đề không còn là tính tương thích — mà là lỗi kích hoạt hoặc mạng. Những vấn đề đó có tài nguyên tham khảo riêng:

- **"Activation failed", "No Service", "QR invalid", "Cellular Plan Cannot Be Added", lỗi khôi phục 4013/4014, và mọi lỗi khác trên màn hình** → xem [Hướng dẫn khắc phục sự cố eSIM chuyên sâu 2026](/faq/esim-deep-troubleshooting-guide-2026/), tài liệu này ánh xạ từng thông báo đến cách khắc phục.
- **Cài đặt APN và bảng APN đầy đủ của các nhà cung cấp** → tài liệu tham khảo APN chuẩn cũng nằm trong [Hướng dẫn khắc phục sự cố eSIM chuyên sâu 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Kích hoạt từng bước (QR / thủ công / ứng dụng nhà mạng)** → xem [Cách kích hoạt eSIM](/faq/how-to-activate-an-esim/).
- **Chuyển hồ sơ sang điện thoại mới** → xem [Cách chuyển eSIM giữa iPhone và Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Thiết lập iPad và Apple Watch** → xem [hướng dẫn eSIM iPad và Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Câu Hỏi Thường Gặp

**Tại sao iPhone XR của tôi báo "eSIM not supported" dù lẽ ra phải hoạt động?**
Nếu số model của bạn kết thúc bằng CH/A, đó là máy bản Trung Quốc đại lục không có chip eSIM. Nếu không, hãy kiểm tra trạng thái khóa nhà mạng — một chiếc XR bị khóa sẽ từ chối hồ sơ của các nhà cung cấp khác.

**Tôi có thể ép eSIM lên iPhone 7 không?**
Không. iPhone 7 (cùng 6s, 8 và X) ra đời trước hẳn chip eUICC. Không có cách hack phần mềm nào bổ sung được phần cứng vốn không tồn tại.

**Sự khác biệt giữa EID và IMEI là gì?**
IMEI (15 chữ số) xác định dòng điện thoại của bạn — mọi điện thoại đều có. EID (32 chữ số) xác định chip SIM nhúng — chỉ điện thoại hỗ trợ eSIM mới có. Nếu `*#06#` không hiển thị EID, điện thoại của bạn không thể dùng eSIM.

**"EID not found" khi tôi nhập `*#06#` nghĩa là gì?**
Nghĩa là điện thoại của bạn thiếu chip phần cứng eUICC cần thiết cho các hồ sơ SIM kỹ thuật số. Đây là giới hạn phần cứng, không phải thứ mà bản cập nhật phần mềm có thể sửa.

**Điện thoại của tôi không hỗ trợ eSIM — tôi vẫn có thể dùng eSIM du lịch không?**
Không. Bạn cần chip nhúng, nên SIM vật lý là lựa chọn duy nhất. Nhiều nhà cung cấp (bao gồm Roami) cũng bán SIM vật lý.

**Làm sao biết Samsung Galaxy của tôi có eSIM?**
Nhập `*#06#` — nếu EID xuất hiện, máy được hỗ trợ. Bạn cũng có thể kiểm tra Settings > Connections > SIM Card Manager để tìm tùy chọn "Add eSIM". Một số bản nhà mạng Mỹ và dòng A ẩn tùy chọn này.

**OnePlus 11 có hỗ trợ eSIM không?**
Không. OnePlus chỉ thêm eSIM bắt đầu từ OnePlus 12. Các dòng 11, 10, 9 và Nord thiếu phần cứng.

**Làm sao kiểm tra iPhone của tôi có bị khóa nhà mạng không?**
Settings > General > About > Carrier Lock. "No SIM restrictions" nghĩa là máy không khóa. Bất kỳ nội dung nào khác nghĩa là máy bị khóa vào nhà mạng đó.

**Những model iPad nào hỗ trợ eSIM?**
iPad Pro (thế hệ 3 trở lên), iPad Air (thế hệ 3 trở lên), iPad (thế hệ 10 trở lên) và iPad mini (thế hệ 6 trở lên) — chỉ các bản cellular. iPad chỉ Wi-Fi không có phần cứng eSIM.

**Tôi có thể tìm danh sách điện thoại tương thích eSIM ở đâu?**
[Danh sách đầy đủ các điện thoại tương thích eSIM (2026)](/compatibility/) bao gồm iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi và nhiều hãng khác.

**Sự khác biệt giữa khóa máy và khóa nhà mạng là gì?**
Khóa máy (activation lock) là chống trộm — iCloud trên iPhone, Google FRP trên Android — và chỉ chủ ban đầu mới có thể gỡ bỏ. Khóa nhà mạng là hạn chế mạng mà nhà mạng gỡ bỏ miễn phí một khi điện thoại đã trả hết tiền và đủ điều kiện.

**Tại sao điện thoại Trung Quốc không có eSIM?**
Trung Quốc đại lục yêu cầu điện thoại nội địa phải được chứng nhận cho 2 SIM vật lý, nên Apple và các thương hiệu Android xuất xưởng máy Trung Quốc với hai khe nano-SIM và không có chip eUICC. Đó là phần cứng — không thể bật sau này.

**Tôi có thể thêm eSIM cho điện thoại không có EID không?**
Không. Chip eUICC được hàn cố định trên bo mạch chủ. Không có adapter, ứng dụng, jailbreak hay bản cập nhật phần mềm nào bổ sung được phần cứng chưa bao giờ được lắp.

**Khôi phục cài đặt gốc có sửa được "eSIM not supported" không?**
Không. Việc reset không thay đổi phần cứng hay gỡ khóa nhà mạng. Tuy nhiên, nó có thể xóa một hồ sơ cài đặt dở bị hỏng, nên đáng thử với các trục trặc phần mềm — sau khi sao lưu.

**EID được dùng để làm gì khi nhà cung cấp yêu cầu nó?**
EID cho phép nhà cung cấp gắn một hồ sơ eSIM cụ thể với chip điện thoại của bạn trước khi bạn quét. Đó là cách họ biết gói cước dành cho đúng thiết bị của bạn — hãy nghĩ đến nó như "địa chỉ" của eSIM.

**Làm sao biết điện thoại của tôi đã mở khóa mà không cần cài SIM?**
iPhone: Settings > General > About > Carrier Lock — "No SIM restrictions" nghĩa là đã mở khóa. Android: Settings > About phone > Status (hoặc SIM status) và tìm cụm "SIM locked" hoặc "SIM not locked".

👉 **Đã xác nhận điện thoại của bạn hỗ trợ eSIM?** Hãy lấy một [eSIM cho Hoa Kỳ](/united-states-esim/) hoặc [eSIM cho Nhật Bản](/japan-esim/) để kết nối.


## Kiểm Tra Tương Thích Với Một eSIM Miễn Phí

Cách nhanh nhất để xác nhận điện thoại của bạn thực sự dùng được eSIM là cài đặt một **eSIM dùng thử miễn phí**. Không tốn kém, chỉ mất 2 phút, và nếu nó cài đặt và kết nối thành công, phần cứng của bạn sẵn sàng hoạt động.

👉 [**Nhận eSIM Roami miễn phí ngay bây giờ**](/free-esim/)

---

*Nếu thiết bị hoặc lỗi cụ thể của bạn chưa được đề cập ở đây, hãy liên hệ với chúng tôi và chúng tôi sẽ giúp bạn xác nhận điện thoại của bạn có hỗ trợ eSIM hay không.*
## Nguồn tham khảo

- [GSMA — eSIM (SGP.22) specification](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
