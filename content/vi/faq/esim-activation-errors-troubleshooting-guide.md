---
title: "eSIM không hoạt động? Sửa lỗi tương thích năm 2026"
h1_title: "Cách sửa lỗi eSIM không hoạt động: Lỗi tương thích năm 2026"
description: "Gặp lỗi eSIM? Tìm hiểu cách khắc phục lỗi kích hoạt, lỗi chuyển đổi và vòng lặp khởi động trên iPhone & Android. Chẩn đoán điện thoại của bạn trong 2 phút."
image: "/img/esim/esim-troubleshooting-guide.jpg"
keywords: ["esim không hoạt động", "esim không được hỗ trợ", "esim không tương thích iphone", "không thể kích hoạt esim", "mạng esim không khả dụng", "esim không chuyển sang iphone mới", "vô tình xóa esim", "hồ sơ esim hết hạn", "mã qr esim không hợp lệ", "cách sửa esim trên iphone", "lỗi chuyển esim", "esim không có dịch vụ"]
date: 2026-09-06T10:00:00Z
lastmod: 2026-09-06T00:00:00Z
tags: ["eSIM", "Khắc phục sự cố", "Lỗi kích hoạt", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

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


> **Lưu ý của biên tập viên:** Roami nhận hàng nghìn yêu cầu "eSIM của tôi không hoạt động" mỗi tháng, và một phần lớn hóa ra là vấn đề về điện thoại, không phải vấn đề về gói cước. Hướng dẫn này trả lời câu hỏi bạn nên đặt ra trước bất kỳ điều gì khác: *điện thoại của tôi thậm chí có khả năng sử dụng eSIM không?* Chúng tôi sẽ hướng dẫn bạn qua kiểm tra phần cứng 2 phút, các ngoại lệ của model Trung Quốc/Hồng Kông và khóa nhà mạng — để bạn không lãng phí một giờ vào các bước kích hoạt không bao giờ hoạt động trên thiết bị của mình.

> **Đang tìm cách sửa lỗi mã lỗi?** Nếu điện thoại của bạn vượt qua kiểm tra phần cứng bên dưới nhưng bạn đang nhìn vào một thông báo cụ thể ("Kích hoạt thất bại", "Không có dịch vụ", "QR không hợp lệ", lỗi khôi phục 4013/4014), đó là một vấn đề khác. Chuyển đến [Hướng dẫn khắc phục sự cố chuyên sâu eSIM](/faq/esim-deep-troubleshooting-guide-2026/) để tham khảo từng lỗi.

## Bắt đầu tại đây: Kiểm tra 2 phút "Điện thoại của tôi có khả năng không?"

Trước khi mở Cài đặt, quét một mã QR hoặc liên hệ hỗ trợ, hãy xác nhận rằng điện thoại của bạn thực sự có phần cứng SIM nhúng cần thiết. Kiểm tra này loại bỏ ngay khoảng một nửa các trường hợp "eSIM không hoạt động".

### Kiểm tra EID phổ quát (Hoạt động trên mọi điện thoại)

Mở bàn phím quay số của điện thoại và nhập:

> **`*#06#`**

- Nếu màn hình xuất hiện với **EID 32 chữ số** (eUICC Identifier), điện thoại của bạn có chip nhúng cần thiết để kích hoạt SIM kỹ thuật số. ✅
- Nếu màn hình chỉ hiển thị số **IMEI** và không có EID, phần cứng không có. ❌

**Phải làm gì nếu không có EID:** Dừng lại ở đây. Không có bản cập nhật phần mềm, hack hay phương pháp "ép buộc" nào có thể thêm chip bị thiếu — đó là sự thiếu hụt phần cứng vật lý. Thay vào đó hãy sử dụng SIM vật lý, hoặc kiểm tra Mục #4 dành cho những điện thoại *có vẻ* nên hỗ trợ eSIM nhưng thực tế không.

### EID so với IMEI so với ICCID – Ý nghĩa của từng số

| Định danh | Nó là gì | Nó cho bạn biết điều gì |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 chữ số) | Xác định model điện thoại — mọi điện thoại đều có |
| **EID** | eUICC Identifier (32 chữ số) | Xác nhận chip SIM nhúng có mặt — chỉ điện thoại hỗ trợ eSIM mới có |
| **ICCID** | Integrated Circuit Card Identifier (19–20 chữ số) | Xác định một hồ sơ eSIM cụ thể sau khi cài đặt |

> **Điểm chính:** EID = phần cứng có mặt. Nếu bạn thấy EID, điện thoại của bạn có khả năng eSIM. Nếu không, không có gì bạn cài đặt có thể thay đổi điều đó.

### Nơi tìm từng số (Đường dẫn nhanh)

Cả ba số đều hiển thị rõ ràng khi bạn biết menu. Đây là đường dẫn ngắn nhất đến từng số:

| Định danh | Cách nhanh nhất | Vị trí dự phòng |
| :--- | :--- | :--- |
| **IMEI (15 chữ số)** | Quay `*#06#` — đó là số đầu tiên hiển thị | iPhone: **Cài đặt > Cài đặt chung > Giới thiệu**. Android: **Cài đặt > Giới thiệu điện thoại** |
| **EID (32 chữ số)** | Quay `*#06#` và cuộn — đó là số dài bắt đầu bằng **8904** | iPhone: **Cài đặt > Cài đặt chung > Giới thiệu > EID**. Samsung: **Cài đặt > Giới thiệu điện thoại > Trạng thái** |
| **ICCID (19–20 chữ số)** | Chỉ xuất hiện sau khi cài đặt hồ sơ | iPhone: **Cài đặt > Cài đặt chung > Giới thiệu**. Android: **Cài đặt > Giới thiệu điện thoại > Trạng thái thẻ SIM** |

> **Sự thật hữu ích:** mọi EID đều bắt đầu bằng **"8904"** — tiền tố đó đánh dấu nó là mã định danh eUICC. Nếu số dài trên màn hình bắt đầu bằng bất kỳ thứ gì khác, bạn đang đọc sai giá trị.

### Kiểm tra nút "Thêm eSIM" (iPhone)

Nếu `*#06#` hiển thị EID nhưng bạn vẫn thấy "eSIM không được hỗ trợ", hãy mở **Cài đặt > Di động** và tìm **"Thêm eSIM"** hoặc **"Thêm gói di động"**. Nếu tùy chọn ở đó nhưng thất bại khi quét, rất có thể bạn đang gặp **khóa nhà mạng** hoặc **hạn chế khu vực** — cả hai đều được đề cập bên dưới.

### Phương pháp Tìm kiếm trong Cài đặt (iPhone & Android)

Không có bàn phím quay số tiện lợi (một số máy tính bảng và điện thoại gập giấu nó), hoặc `*#06#` cho bạn màn hình khó hiểu? Thanh tìm kiếm của chính điện thoại là cách kiểm tra nhanh thứ hai.

- **iPhone:** Mở **Cài đặt**, vuốt xuống từ đầu danh sách để hiện ô tìm kiếm và nhập **"eSIM"**. Kết quả **"Thêm eSIM"** hoặc **"Thêm gói di động"** có nghĩa là tính năng đang hoạt động.
- **Samsung:** Mở **Cài đặt**, nhấn vào **biểu tượng kính lúp** ở trên cùng và nhập **"eSIM"**. Nếu **"Trình quản lý thẻ SIM"** (hoặc "Thêm gói di động") xuất hiện, biến thể của bạn có chip.
- **Pixel:** Mở **Cài đặt > Mạng & internet > SIM**. Nếu bạn thấy **"Tải xuống SIM thay thế?"**, bạn ổn. Màn hình chỉ liệt kê SIM vật lý — không có tùy chọn tải xuống — có nghĩa là không có chip eUICC.

> **Không có kết quả tìm kiếm = không có phần cứng.** Nếu một điện thoại được bán sau khoảng năm 2018 không trả về gì cho "eSIM" trong tìm kiếm Cài đặt, gần như chắc chắn bạn đang cầm một biến thể khu vực hoặc giá rẻ không có chip.

### Tra cứu Số model (Xác nhận nhanh nhất)

Mua máy cũ, hoặc kiểm tra điện thoại không bật nguồn được? Số model giải quyết vấn đề trong vài giây.

- **iPhone:** **Cài đặt > Cài đặt chung > Giới thiệu > Số model**, sau đó nhấn vào số để chuyển sang mã nhận dạng bắt đầu bằng **A** (ví dụ: **A2111**). Các chữ cái trước **/A** trong số bộ phận mã hóa khu vực bán hàng — bản đồ hậu tố đầy đủ có trong Phần 2.
- **Samsung:** **Cài đặt > Giới thiệu điện thoại > Số model** (ví dụ: **SM-S921U1**). Ký tự cuối là manh mối: **U** = nhà mạng Mỹ, **U1** = mở khóa Mỹ, **B** = Châu Âu/toàn cầu, **0** = Trung Quốc/Hồng Kông (Snapdragon).
- **Pixel:** **Cài đặt > Giới thiệu điện thoại > Model**. Chuỗi model Pixel khác nhau theo khu vực và nhà mạng — Nhật Bản và một số biến thể nhà mạng Mỹ hạn chế eSIM, vì vậy hãy kiểm tra chéo mã cụ thể hoặc quay `*#06#`.

> **Quy tắc chung:** nếu số model kết thúc bằng hậu tố Trung Quốc/khu vực (hoặc hậu tố nhà mạng Mỹ trên Samsung), hãy xác minh bằng `*#06#` trước khi cho rằng eSIM hoạt động. Số model cộng với EID cùng nhau cho bạn câu trả lời 100%.

### Tại sao điện thoại có thể hiển thị EID nhưng vẫn từ chối eSIM

| Kịch bản | Có EID? | eSIM hoạt động? | Tại sao? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR và mới hơn (toàn cầu) | ✅ Có | ✅ Có | Hỗ trợ đầy đủ cho hồ sơ SIM kỹ thuật số |
| iPhone XS/XR (model Trung Quốc) | ❌ Không | ❌ Không | Loại bỏ phần cứng để có hai SIM vật lý |
| Samsung S20 FE (nhà mạng Mỹ) | ✅ Có | ❌ Không | Nhà mạng vô hiệu hóa tính năng trong phần mềm |
| Google Pixel 4a (Nhật Bản) | ✅ Có | ❌ Không | Nhà mạng khóa chức năng |
| iPhone bị khóa nhà mạng (AT&T/T-Mobile) | ✅ Có | ❌ Không (cho nhà mạng khác) | Khóa mạng chặn hồ sơ của nhà cung cấp khác |
| iPhone mở khóa (bất kỳ khu vực nào) | ✅ Có | ✅ Có | Hỗ trợ đầy đủ |


## 1. "eSIM không được hỗ trợ" / "Không tương thích" trên iPhone

Nếu bạn thấy **"eSIM không được hỗ trợ"**, **"eSIM này không tương thích với iPhone này"**, hoặc đơn giản là **"eSIM không tương thích iPhone"**, nguyên nhân gần như luôn là một trong năm điều — và mỗi điều đều liên quan đến *thiết bị* của bạn, không phải gói cước.

### A. Model iPhone của bạn ra đời trước phần cứng eSIM

Chỉ những iPhone từ **XR, XS, XS Max (2018) trở lên** mới có chip nhúng. iPhone 8, 8 Plus và iPhone X không có, vì vậy chúng trả về **"eSIM không được hỗ trợ"** bất kể bạn thử gì. Chip eUICC đơn giản không có trên các bo mạch đó — đây là giới hạn phần cứng, không phải vấn đề cài đặt.

**Kiểm tra nhanh:** Quay `*#06#`. EID 32 chữ số có nghĩa là bạn ổn; chỉ IMEI có nghĩa là không.

**Phải làm gì:** Sử dụng SIM vật lý, hoặc nâng cấp lên iPhone XR hoặc mới hơn. Danh sách chính thức có trên [Apple Support — eSIM trên iPhone](https://support.apple.com/en-us/118670).

### B. iPhone của bạn là model Trung Quốc đại lục

iPhone bán tại Trung Quốc đại lục được trang bị **hai khe SIM vật lý và không có phần cứng eSIM**. Quy định của Trung Quốc thúc đẩy điện thoại nội địa hướng tới hai SIM vật lý, vì vậy Apple đã loại bỏ chip nhúng trên các đơn vị này. Ngay cả khi tùy chọn "Thêm gói di động" xuất hiện, nó sẽ không hoàn tất — đây là nguyên nhân phổ biến nhất cho "eSIM không tương thích với iPhone này" giữa những người mua thiết bị tại Trung Quốc hoặc qua một số nhà bán lại.

**Cách xác định:** **Cài đặt > Cài đặt chung > Giới thiệu > Số model**. Nếu kết thúc bằng **"CH/A"**, đó là model Trung Quốc đại lục. (Bảng hậu tố đầy đủ trong Phần 2 bên dưới.)

**Phải làm gì:** Không có cách nào để bật eSIM trên thiết bị CH/A. Sử dụng SIM du lịch vật lý, hoặc bán điện thoại và mua phiên bản toàn cầu.

### C. iPhone của bạn bị khóa nhà mạng

Một số nhà mạng — đặc biệt là ở Mỹ — khóa iPhone vào mạng của riêng họ. Cố gắng kích hoạt hồ sơ từ nhà cung cấp khác (như eSIM du lịch) sẽ trả về "eSIM không được hỗ trợ" hoặc thông báo "nhà mạng không hỗ trợ". Lưu ý rằng một số nhà mạng chỉ khóa khe SIM vật lý trong khi để mở khe eSIM, nhưng nhiều nhà mạng khóa cả hai.

**Cách kiểm tra:** **Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng**. Nó phải hiển thị **"Không có hạn chế SIM"**. Nếu nó ghi "SIM bị khóa", bạn cần mở khóa. Xem Phần 3 để biết hướng dẫn đầy đủ về khóa nhà mạng.

### D. Phiên bản iOS đã lỗi thời

Hỗ trợ SIM kỹ thuật số đã được cải thiện rất nhiều trong iOS 16 trở lên. Trên iOS 12 hoặc 13, một số hồ sơ nhà mạng hiện đại sẽ không cài đặt được.

**Cách kiểm tra:** **Cài đặt > Cài đặt chung > Cập nhật phần mềm**.

**Phải làm gì:** Cập nhật lên iOS mới nhất, xóa bất kỳ hồ sơ đã cài đặt một nửa, sau đó quét lại mã QR.

### E. "iPhone này không hỗ trợ eSIM" – Trên iPhone 14?

iPhone 14 (phiên bản Mỹ) luôn hỗ trợ eSIM — model Mỹ không có khay SIM vật lý nào. Nếu nó vẫn trả về lỗi này, bạn đang gặp **lỗi phần cứng eUICC hiếm gặp**. Liên hệ Apple Support để được chẩn đoán phần cứng thay vì tìm kiếm cài đặt.

Để biết danh sách đầy đủ từng model iPhone, xem [hướng dẫn tương thích eSIM iPhone](/faq/iphone-11-esim-compatible/). Đối với Samsung, xem [hướng dẫn eSIM Samsung Galaxy](/faq/samsung-s20-esim-compatible/), và cho Pixel xem [hướng dẫn eSIM Google Pixel](/faq/google-pixel-6-esim-compatible/).


## "eSIM không được hỗ trợ" – Phần cứng so với Phần mềm so với Nhà mạng

Mọi trường hợp "eSIM không được hỗ trợ" — trên bất kỳ điện thoại nào, bất kỳ nhà mạng nào — nằm trong một trong ba nhóm. Xác định nhóm cho bạn biết ngay lập tức vấn đề có thể khắc phục được hay không.

| Nhóm | Biểu hiện | Khắc phục? | Hành động của bạn |
| :--- | :--- | :--- | :--- |
| **Phần cứng** | Không có EID trên `*#06#`; iPhone trước 2018; model Trung Quốc (CH/A); Android giá rẻ không có eUICC | ❌ Không | SIM vật lý, hoặc nâng cấp điện thoại |
| **Phần mềm** | Có EID, nhưng tính năng bị ẩn hoặc hệ điều hành cũ (Samsung S20 FE bị nhà mạng vô hiệu hóa, iOS cũ) | ✅ Thường có | Cập nhật hệ điều hành, hoặc gỡ bỏ hạn chế nhà mạng |
| **Nhà mạng** | Có EID, menu hiển thị, nhưng kích hoạt gói của nhà cung cấp khác thất bại | ✅ Có | Mở khóa thiết bị (Phần 3), sau đó quét lại |

**Kiểm tra định tuyến 30 giây:** quay `*#06#`.
- **Không có EID** → phần cứng. Dừng lại ở đây — không có gì bạn cài đặt sẽ thay đổi điều đó.
- **Có EID, nhưng quá trình "Thêm eSIM" thất bại** → phần mềm hoặc nhà mạng. Cả hai đều có thể khắc phục, vì vậy hãy tiếp tục đọc.

Kết quả duy nhất đó định tuyến bạn đến cách khắc phục đúng cho khoảng 9 trên 10 báo cáo "không được hỗ trợ" mà chúng tôi thấy tại Roami.


## 2. Hướng dẫn về Model Trung Quốc / Hồng Kông / Ma Cao

Nơi điện thoại của bạn được bán xác định phần cứng của nó. Đây là cách nhanh nhất để xác nhận hoặc loại trừ tình huống không có eSIM theo khu vực.

### Tham khảo nhanh Trung Quốc (theo hậu tố số model)

| Kết thúc số model | Khu vực | Hỗ trợ eSIM |
| :--- | :--- | :--- |
| **CH/A** | Trung Quốc đại lục | ❌ Không (hai SIM vật lý) |
| **HK/A** | Hồng Kông | ⚠️ Khác nhau (một số model hỗ trợ vật lý + SIM kỹ thuật số) |
| **LL/A** | Mỹ | ✅ Có |
| **ZA/A** | Canada | ✅ Có |
| **J/A** | Nhật Bản | ✅ Có (trừ một số model nhà mạng) |
| **B/A** | Anh/Châu Âu | ✅ Có |
| **X/A** | Úc/New Zealand | ✅ Có |

### Trung Quốc đại lục

- **Tất cả iPhone bán tại Trung Quốc đại lục** (trừ dòng iPhone 16) có hai SIM vật lý và không có eSIM.
- **Điện thoại Android Trung Quốc** — Xiaomi, Oppo, Vivo, Huawei — bán trong nước cũng thường thiếu chip eSIM.
- **Nếu bạn mang điện thoại quốc tế vào Trung Quốc:** nó sẽ hoạt động với eSIM du lịch quốc tế, nhưng các nhà mạng Trung Quốc không cung cấp eSIM cho khách du lịch, vì vậy bạn vẫn sẽ cần một gói du lịch từ nhà cung cấp như Roami.

### Hồng Kông

- **Model iPhone:** iPhone Hồng Kông thường hỗ trợ **eSIM + SIM vật lý** (mỗi loại một cái) hoặc hai SIM vật lý tùy theo model chính xác. Kiểm tra hậu tố model của bạn.
- **Nhà mạng:** một số nhà mạng Hồng Kông (CMHK, 1010, SmarTone) cung cấp eSIM cho khách hàng trả sau, nhưng eSIM trả trước rất hiếm.
- **Du khách:** eSIM du lịch quốc tế đơn giản và đáng tin cậy hơn cố gắng lấy eSIM địa phương Hồng Kông.

### Ma Cao

- **Tương tự như Hồng Kông:** hầu hết iPhone Ma Cao được nhập từ Hồng Kông và hỗ trợ eSIM + SIM vật lý.
- **CTM** (nhà mạng chính của Ma Cao) cung cấp eSIM cho khách hàng trả sau nhưng không cho khách du lịch.

### Tại sao model Trung Quốc loại bỏ eSIM (Lý do đằng sau quy tắc CH/A)

Không phải là động thái cắt giảm chi phí của Apple hay các thương hiệu Android — đó là quy định. Trung Quốc đại lục yêu cầu điện thoại bán tại đó phải được chứng nhận có hai SIM vật lý và hồ sơ eSIM có thể ghi lại không phù hợp với khung pháp lý nội địa đó. Kết quả thực tế:

- **Apple** giao iPhone Trung Quốc đại lục với **hai khe nano-SIM vật lý** và không có chip eUICC.
- **Xiaomi, Oppo, Vivo, Honor và Huawei** loại bỏ eSIM khỏi bản dựng nội địa Trung Quốc ngay cả khi phiên bản toàn cầu của cùng điện thoại có nó.
- **Một điện thoại Trung Quốc mang ra nước ngoài vẫn không thể lấy lại eSIM** — đó là sự thiếu hụt phần cứng, không phải chặn phần mềm. Điều ngược lại cũng đúng: điện thoại quốc tế vào Trung Quốc hoạt động với eSIM du lịch, nhưng ba nhà mạng lớn Trung Quốc (China Mobile, China Unicom, China Telecom) không bán eSIM cho khách du lịch.

**Cách khắc phục:** nếu bạn mua điện thoại ở Trung Quốc đại lục, hãy lên kế hoạch sử dụng SIM du lịch vật lý — hoặc mua điện thoại model toàn cầu. Không có mở khóa, jailbreak hay ứng dụng nào thêm chip bị thiếu.

### Xác định model của bạn bằng A-number (Ví dụ)

Hậu tố số bộ phận (CH/A, LL/A, v.v.) là bộ lọc nhanh, nhưng **A-number** là ID chính xác. Lấy iPhone 11 làm mẫu mà mọi thế hệ đều theo:

| Model iPhone 11 | Khu vực | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Hoa Kỳ | ✅ Có |
| **A2221** | Trung Quốc đại lục | ❌ Không (hai SIM vật lý) |
| **A2223** | Hồng Kông / Ma Cao | ✅ Có (eSIM + vật lý) |

**Cách sử dụng:** tìm A-number của bạn (**Cài đặt > Cài đặt chung > Giới thiệu > Số model**, sau đó nhấn vào số để hiển thị mã bắt đầu bằng A), và so khớp với danh sách model của Apple. Nếu người bán quảng cáo "iPhone eSIM toàn cầu mở khóa" nhưng A-number là mã Trung Quốc, thì thông tin đăng là sai — hãy tránh xa hoặc lên kế hoạch dùng SIM vật lý.


## 3. Khóa nhà mạng – Nó là gì và cách loại bỏ

Khóa nhà mạng là lý do phổ biến thứ hai khiến một chiếc điện thoại hoàn toàn có khả năng từ chối eSIM. Đó là một hạn chế phần mềm mà nhà mạng đặt lên thiết bị, không phải giới hạn phần cứng.

### Khóa nhà mạng làm gì

Khi điện thoại bị "khóa SIM", nó sẽ chỉ chấp nhận SIM và hồ sơ eSIM từ nhà mạng đã bán nó. Cố gắng thêm eSIM du lịch từ nhà cung cấp khác sẽ kích hoạt "eSIM không được hỗ trợ" hoặc "SIM không được hỗ trợ". Chip nhúng có mặt và hoạt động — nhà mạng chỉ đang chặn quyền truy cập vào nó.

### Cách kiểm tra trạng thái khóa

1. Trên iPhone: **Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng**. Nó phải hiển thị **"Không có hạn chế SIM"**.
2. Trên Android (Samsung): **Cài đặt > Giới thiệu điện thoại > Trạng thái** và tìm trường khóa SIM.
3. Trên Android (Pixel): **Cài đặt > Giới thiệu điện thoại > Trạng thái SIM**.

### Chính sách mở khóa của nhà mạng Mỹ

| Nhà mạng | Yêu cầu mở khóa |
| :--- | :--- |
| **AT&T** | Thiết bị đã thanh toán đầy đủ và hoạt động 60 ngày trước khi mở khóa |
| **T-Mobile** | Thiết bị đã thanh toán và hoạt động 40 ngày; yêu cầu qua ứng dụng T-Mobile |
| **Verizon** | Hầu hết điện thoại tự động mở khóa 60 ngày sau khi mua |

### Cách mở khóa thiết bị của bạn

1. **Yêu cầu mở khóa từ nhà mạng** — thường miễn phí khi điện thoại đã thanh toán hết, và hầu hết nhà mạng Mỹ cho phép bạn yêu cầu từ ứng dụng hoặc biểu mẫu trực tuyến.
2. **Chờ xác nhận** — nhà mạng đẩy mở khóa; bạn có thể cần khởi động lại điện thoại.
3. **Xác minh** — kiểm tra lại trường Khóa nhà mạng cho đến khi nó hiển thị "Không có hạn chế SIM".
4. **Sau đó kích hoạt** — sau khi mở khóa, quét lại mã QR eSIM du lịch của bạn.

> **Lưu ý:** khóa nhà mạng là hạn chế ở cấp điện thoại, không phải ở cấp gói. Mở khóa thiết bị của bạn không hủy hợp đồng — nó chỉ giải phóng thiết bị để sử dụng SIM và eSIM của các nhà cung cấp khác.

### Thêm nhà mạng Mỹ và chính sách mở khóa của MVNO

Ba nhà mạng lớn không phải là những người duy nhất bạn gặp. Điện thoại trả trước và MVNO thường bị khóa lâu hơn, và đó có thể là lý do âm thầm khiến một eSIM du lịch "giá hời" không cài đặt được.

| Nhà mạng | Yêu cầu mở khóa |
| :--- | :--- |
| **Cricket Wireless** | 6 tháng dịch vụ trả tiền (trừ khi mua với giá bán lẻ đầy đủ) |
| **Metro by T-Mobile** | 180 ngày dịch vụ trả tiền |
| **Boost Mobile** | 12 tháng dịch vụ trả tiền |
| **Spectrum Mobile** | 60 ngày |
| **Xfinity Mobile** | 60 ngày dịch vụ hoạt động |
| **US Cellular** | 120 ngày |
| **Visible (Verizon trả trước)** | 60 ngày dịch vụ trả tiền |

### Những gì bạn cần để yêu cầu mở khóa

Mở khóa miễn phí khi bạn đủ điều kiện, nhưng yêu cầu cần một vài thứ:

1. **IMEI của bạn** — quay `*#06#` và lấy số 15 chữ số (không phải EID).
2. **Số tài khoản và mã PIN/mật khẩu tài khoản** — tìm trong ứng dụng nhà mạng hoặc trên hóa đơn gần đây.
3. **Điện thoại đã thanh toán đầy đủ** — nhà mạng sẽ không mở khóa thiết bị có số dư trả góp chưa thanh toán.
4. **Đáp ứng điều kiện** — mỗi nhà mạng có khoảng thời gian hoạt động tối thiểu (xem bảng trên).

**Nơi yêu cầu:** AT&T và T-Mobile có cổng mở khóa trực tuyến và biểu mẫu trong ứng dụng; Verizon tự động mở khóa hầu hết điện thoại sau 60 ngày mà không cần yêu cầu. Đối với MVNO (Cricket, Metro, Boost), sử dụng ứng dụng của họ hoặc gọi trực tiếp cho bộ phận hỗ trợ.

**Về các dịch vụ "mở khóa tức thì" của bên thứ ba:** chúng là một canh bạc. Nhiều dịch vụ sử dụng công cụ nhà mạng bị rò rỉ và có thể khiến điện thoại bị khóa lại, một số là lừa đảo thẳng. Nếu nhà mạng của bạn nói bạn chưa đủ điều kiện, hãy đợi — đừng trả một người lạ 20 đô để làm điều đó "cho" bạn.


## Ba loại "khóa" khác nhau (và tại sao chúng quan trọng)

Mọi người nói "điện thoại của tôi bị khóa" và có nghĩa là ba điều hoàn toàn khác nhau. Mỗi loại cần một cách khắc phục khác, vì vậy đáng để tách biệt chúng.

| Loại khóa | Nó là gì | Bạn thấy nó ở đâu | Cách khắc phục |
| :--- | :--- | :--- | :--- |
| **Khóa điện thoại (khóa kích hoạt)** | Chống trộm: iCloud Activation Lock (iPhone) hoặc Google FRP (Android), liên kết với tài khoản chủ sở hữu trước | "Activation Lock" / "iPhone này được liên kết với một Apple ID" khi thiết lập, hoặc lời nhắc tài khoản Google trên Android | Chỉ chủ sở hữu ban đầu mới có thể gỡ bỏ — đừng bao giờ mua điện thoại vẫn hiển thị nó |
| **Khóa khu vực** | Sự khác biệt phần cứng từ nơi điện thoại được bán (model Trung Quốc thiếu chip eUICC) | Không có EID trên `*#06#`; số model kết thúc bằng CH/A | Không thể gỡ bỏ — sử dụng SIM vật lý hoặc một điện thoại khác |
| **Khóa nhà mạng** | Hạn chế phần mềm từ nhà mạng giới hạn điện thoại vào mạng của họ | **Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng** hiển thị "SIM bị khóa" | Yêu cầu mở khóa từ nhà mạng (Phần 3) |

**Phân biệt nhanh:**
- Nhìn thấy **lời nhắc Apple ID hoặc tài khoản Google** = khóa điện thoại/kích hoạt (vấn đề chủ sở hữu).
- **Không có EID nào cả** = khóa khu vực (vấn đề phần cứng).
- **Có EID + "SIM bị khóa"** = khóa nhà mạng (có thể khắc phục, miễn phí khi đủ điều kiện).

Hầu hết các khiếu nại "eSIM không hoạt động" sống sót sau kiểm tra 2 phút là loại khóa nhà mạng — và loại đó gần như luôn có thể giải quyết được.


## 4. "Điện thoại của tôi không hỗ trợ eSIM" – Nhưng nó đáng lẽ phải có

Một số thiết bị được quảng cáo có eSIM, nhưng các biến thể khu vực hoặc nhà mạng cụ thể âm thầm loại bỏ tính năng. Đây là những thủ phạm thường gặp:

- **Samsung Galaxy S20 FE** – các phiên bản bị khóa nhà mạng Mỹ vô hiệu hóa tính năng trong phần mềm để cắt giảm chi phí, mặc dù model toàn cầu hỗ trợ.
- **Google Pixel 4a (phiên bản Nhật Bản)** – Docomo và SoftBank vô hiệu hóa eSIM trên thiết bị của họ do thỏa thuận nhà mạng địa phương.
- **Xiaomi Redmi Note series** – không có chip eUICC, bất chấp tin đồn trực tuyến. Xiaomi dành eSIM cho các flagship của mình.
- **iPhone 8 / 8 Plus / X** – phần cứng tiền eUICC; Apple chỉ thêm chip bắt đầu từ thế hệ XS/XR.
- **Samsung Galaxy A series** – chỉ một số model (A54, A53) có chip; hầu hết dòng A đều không.

### "Trông giống như nên hỗ trợ eSIM nhưng thực tế không" – Danh sách đầy đủ

| Model điện thoại | Hỗ trợ eSIM | Tại sao? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Không | Phần cứng tiền eUICC |
| **iPhone XS/XR (Trung Quốc)** | ❌ Không | Phần cứng hai SIM vật lý |
| **Samsung Galaxy S20 FE (nhà mạng Mỹ)** | ❌ Không | Bị nhà mạng vô hiệu hóa |
| **Samsung Galaxy A13 / A23** | ❌ Không | Model tầm thấp, không eUICC |
| **Google Pixel 4a (Nhật Bản)** | ❌ Không | Bị nhà mạng vô hiệu hóa (Docomo/SoftBank) |
| **Google Pixel 3 (một số model)** | ⚠️ Khác nhau | Kiểm tra khu vực; một số có, một số không |
| **Xiaomi Redmi Note series** | ❌ Không | Không có phần cứng eUICC |
| **Xiaomi 12/13 (Trung Quốc)** | ❌ Không | Phiên bản nội địa Trung Quốc thiếu phần cứng |
| **OnePlus Nord (phiên bản Trung Quốc)** | ❌ Không | Khu vực Trung Quốc thiếu phần cứng |
| **Huawei (tất cả nội địa Trung Quốc)** | ❌ Không | Không có dịch vụ Google, không có phần cứng eSIM |
| **Motorola G series (hầu hết)** | ❌ Không | Model giá rẻ thiếu eUICC |

**Phải làm gì:** Trước khi mua bất kỳ điện thoại nào, hãy quay `*#06#` trên đó (nếu bạn có trong tay) để xác nhận EID, hoặc chạy IMEI qua trình kiểm tra tương thích eSIM trực tuyến. **[Danh sách đầy đủ điện thoại tương thích eSIM (2026)](/compatibility/)** là nguồn tốt nhất để xác minh bất kỳ model nào.


## 5. Tương thích phần cứng Android theo thương hiệu

Nếu bạn dùng Android, biến số lớn nhất không phải là hệ điều hành — mà là *biến thể cụ thể* của bạn có được trang bị chip hay không. Đây là bức tranh theo từng model.

### Samsung Galaxy

| Model | Hỗ trợ eSIM | Ghi chú |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Có | Tất cả biến thể toàn cầu |
| **Galaxy S20 FE** | ❌ Không (nhà mạng Mỹ) / ✅ Có (toàn cầu) | Kiểm tra số model |
| **Galaxy A54 / A53** | ✅ Có | Chỉ một số dòng A chọn lọc |
| **Galaxy A13 / A23 / A33** | ❌ Không | Model giá rẻ |
| **Galaxy Z Fold / Flip** | ✅ Có | Tất cả model |
| **Galaxy Note 20** | ✅ Có | Tất cả model |

**Cách kiểm tra trên Samsung:** Quay `*#06#` và tìm EID, hoặc mở **Cài đặt > Kết nối > Trình quản lý thẻ SIM** và tìm "Thêm eSIM" / "Thêm gói di động". Nếu không có, biến thể của bạn thiếu tính năng. Để biết thêm, xem [hướng dẫn tương thích eSIM Samsung](/faq/samsung-s20-esim-compatible/) và [Samsung Support](https://www.samsung.com/us/support/).

### Google Pixel

| Model | Hỗ trợ eSIM | Ghi chú |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Có | Pixel đầu tiên có tính năng này |
| **Pixel 3a / 3a XL** | ✅ Có | – |
| **Pixel 4 / 4 XL** | ✅ Có | – |
| **Pixel 4a** | ⚠️ Khác nhau | Phiên bản nhà mạng Nhật Bản = KHÔNG |
| **Pixel 5 / 5a** | ✅ Có | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Có | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Có | – |
| **Pixel 8 / 8 Pro** | ✅ Có | – |

**Cách kiểm tra trên Pixel:** Quay `*#06#` để tìm EID, hoặc mở **Cài đặt > Mạng & Internet > SIM** và tìm "Tải xuống SIM thay thế?". Nếu thiếu, biến thể bị khóa hoặc thiếu chip. Để biết thêm, xem [hướng dẫn tương thích eSIM Pixel](/faq/google-pixel-6-esim-compatible/) và trang [Google Support — eSIM trên Pixel](https://support.google.com/pixelphone/answer/7086887).

### OnePlus

OnePlus chỉ thêm eSIM bắt đầu từ **OnePlus 12**. OnePlus 11, 10, 9 và dòng Nord thiếu phần cứng.

| Model | Hỗ trợ eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Có |
| **OnePlus 11** | ❌ Không |
| **OnePlus 10** | ❌ Không |
| **OnePlus 9** | ❌ Không |
| **OnePlus Nord series** | ❌ Không (trừ một số biến thể EU) |

### Xiaomi, Huawei, Motorola và các hãng khác

- **Xiaomi** – model flagship (Xiaomi 12/13 phiên bản toàn cầu) có thể hỗ trợ eSIM, nhưng đơn vị nội địa Trung Quốc thì không. Dòng Redmi Note không có eUICC.
- **Huawei** – hỗ trợ giới hạn ở một số model (P40, Mate 40 và mới hơn); nhiều điện thoại sau 2020 thiếu eSIM do lệnh trừng phạt của Mỹ. Kiểm tra **Cài đặt > Mạng di động > eSIM** — nếu tùy chọn thiếu, nó không được hỗ trợ.
- **Motorola** – hầu hết model G-series giá rẻ thiếu chip; dòng Moto G Power và Edge thay đổi theo khu vực.

Kiểm tra phổ quát cho mọi model này là như nhau: quay `*#06#` và tìm EID.


## Android so với iPhone: Kiểm tra khả năng, cạnh nhau

Cùng một kiểm tra 2 phút, hai menu khác nhau. Đưa bảng này cho người bạn trên nền tảng kia.

| Kiểm tra | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Quay `*#06#` | Quay `*#06#` | Quay `*#06#` |
| **Menu Thêm eSIM** | **Cài đặt > Di động > Thêm eSIM** | **Cài đặt > Kết nối > Trình quản lý thẻ SIM > Thêm eSIM** | **Cài đặt > Mạng & Internet > SIM > Tải xuống SIM thay thế?** |
| **Số model** | **Cài đặt > Cài đặt chung > Giới thiệu > Số model** | **Cài đặt > Giới thiệu điện thoại > Số model** | **Cài đặt > Giới thiệu điện thoại > Model** |
| **Trạng thái khóa** | **Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng** | **Cài đặt > Giới thiệu điện thoại > Trạng thái** | **Cài đặt > Giới thiệu điện thoại > Trạng thái SIM** |

**Một điểm khác biệt quan trọng:** trên iPhone, hỗ trợ eSIM là tất cả hoặc không có theo thế hệ và khu vực — dễ dự đoán. Trên Android, nó khác nhau theo biến thể, vì vậy hai điện thoại Galaxy hoặc Pixel "giống nhau" có thể hoạt động khác nhau. Khi nghi ngờ trên Android, hãy tin vào EID từ `*#06#` hơn là bảng thông số kỹ thuật.


## 6. Điện thoại của bạn có khả năng — Bây giờ làm gì? (Sửa lỗi theo mã lỗi)

Nếu điện thoại của bạn vượt qua kiểm tra phần cứng ở trên và bạn vẫn thấy thông báo lỗi cụ thể, vấn đề không còn là tương thích — mà là sự cố kích hoạt hoặc mạng. Những vấn đề đó có tài liệu tham khảo riêng:

- **"Kích hoạt thất bại", "Không có dịch vụ", "QR không hợp lệ", "Không thể thêm gói di động", lỗi khôi phục 4013/4014 và mọi lỗi trên màn hình khác** → xem [Hướng dẫn khắc phục sự cố chuyên sâu eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/), nơi ánh xạ từng thông báo với cách khắc phục.
- **Cài đặt APN và bảng APN nhà cung cấp đầy đủ** → tài liệu tham khảo APN chính thức cũng nằm trong [Hướng dẫn khắc phục sự cố chuyên sâu eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Kích hoạt từng bước (QR / thủ công / ứng dụng nhà mạng)** → xem [Cách kích hoạt eSIM](/faq/how-to-activate-an-esim/).
- **Di chuyển hồ sơ sang điện thoại mới** → xem [Cách chuyển eSIM giữa iPhone và Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Thiết lập iPad và Apple Watch** → xem [hướng dẫn eSIM iPad và Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Câu hỏi thường gặp

**Tại sao iPhone XR của tôi báo "eSIM không được hỗ trợ" mặc dù nó đáng lẽ phải hoạt động?**
Nếu số model của bạn kết thúc bằng CH/A, đó là thiết bị Trung Quốc đại lục không có chip eSIM. Nếu không, hãy kiểm tra trạng thái khóa nhà mạng — một chiếc XR bị khóa sẽ từ chối hồ sơ của nhà cung cấp khác.

**Tôi có thể ép eSIM lên iPhone 7 không?**
Không. iPhone 7 (và 6s, 8, X) ra đời trước chip eUICC hoàn toàn. Không có hack phần mềm nào có thể thêm phần cứng không có.

**Sự khác biệt giữa EID và IMEI là gì?**
IMEI (15 chữ số) xác định model điện thoại — mọi điện thoại đều có. EID (32 chữ số) xác định chip SIM nhúng — chỉ điện thoại hỗ trợ eSIM mới có. Nếu `*#06#` không hiển thị EID, điện thoại của bạn không thể sử dụng eSIM.

**"Không tìm thấy EID" có nghĩa là gì khi tôi quay `*#06#`?**
Nó có nghĩa là điện thoại của bạn thiếu chip phần cứng eUICC cần thiết cho hồ sơ SIM kỹ thuật số. Đó là giới hạn phần cứng, không phải thứ mà bản cập nhật phần mềm có thể khắc phục.

**Điện thoại của tôi không hỗ trợ eSIM — tôi vẫn có thể sử dụng eSIM du lịch không?**
Không. Bạn cần chip nhúng, vì vậy SIM vật lý là lựa chọn duy nhất. Nhiều nhà cung cấp (bao gồm Roami) cũng bán thẻ SIM vật lý.

**Làm thế nào để biết Samsung Galaxy của tôi có eSIM?**
Quay `*#06#` — nếu EID xuất hiện, nó được hỗ trợ. Bạn cũng có thể kiểm tra Cài đặt > Kết nối > Trình quản lý thẻ SIM để tìm tùy chọn "Thêm eSIM". Một số biến thể nhà mạng Mỹ và dòng A ẩn nó.

**OnePlus 11 có hỗ trợ eSIM không?**
Không. OnePlus thêm eSIM bắt đầu từ OnePlus 12. Các dòng 11, 10, 9 và Nord thiếu phần cứng.

**Làm cách nào để kiểm tra iPhone của tôi có bị khóa nhà mạng không?**
Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng. "Không có hạn chế SIM" có nghĩa là đã mở khóa. Bất kỳ thứ gì khác có nghĩa là bị khóa với nhà mạng đó.

**Model iPad nào hỗ trợ eSIM?**
iPad Pro (thế hệ 3 trở lên), iPad Air (thế hệ 3 trở lên), iPad (thế hệ 10 trở lên) và iPad mini (thế hệ 6 trở lên) — chỉ model cellular. iPad Wi-Fi-only không có phần cứng eSIM.

**Tôi có thể tìm danh sách điện thoại tương thích eSIM ở đâu?**
[Danh sách đầy đủ điện thoại tương thích eSIM (2026)](/compatibility/) bao gồm iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi và nhiều hơn nữa.

**Sự khác biệt giữa khóa điện thoại và khóa nhà mạng là gì?**
Khóa điện thoại (kích hoạt) là chống trộm — iCloud trên iPhone, Google FRP trên Android — và chỉ chủ sở hữu ban đầu mới có thể gỡ bỏ. Khóa nhà mạng là hạn chế mạng mà nhà mạng của bạn miễn phí mở khóa khi điện thoại đã thanh toán và đủ điều kiện.

**Tại sao điện thoại Trung Quốc không có eSIM?**
Trung Quốc đại lục yêu cầu điện thoại nội địa phải được chứng nhận có hai SIM vật lý, vì vậy Apple và các thương hiệu Android giao đơn vị Trung Quốc với hai khe nano-SIM và không có chip eUICC. Đó là phần cứng — không thể bật sau.

**Tôi có thể thêm eSIM vào điện thoại không có EID không?**
Không. Chip eUICC được hàn trên bo mạch chủ. Không có bộ chuyển đổi, ứng dụng, jailbreak hoặc cập nhật phần mềm nào có thể thêm phần cứng chưa từng được cài đặt.

**Khôi phục cài đặt gốc có khắc phục "eSIM không được hỗ trợ" không?**
Không. Khôi phục không thay đổi phần cứng hoặc xóa khóa nhà mạng. Tuy nhiên, nó có thể xóa một hồ sơ đã cài đặt nửa vời bị hỏng, vì vậy đáng thử cho các lỗi phần mềm — sau khi sao lưu.

**EID được sử dụng làm gì khi nhà cung cấp yêu cầu nó?**
EID cho phép nhà cung cấp liên kết một hồ sơ eSIM cụ thể với chip điện thoại của bạn trước khi bạn quét. Đó là cách họ biết gói được chỉ định cho thiết bị chính xác của bạn — hãy coi nó như "địa chỉ" của eSIM.

**Làm thế nào để biết điện thoại của tôi đã được mở khóa mà không cần lắp SIM?**
iPhone: Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng — "Không có hạn chế SIM" có nghĩa là đã mở khóa. Android: Cài đặt > Giới thiệu điện thoại > Trạng thái (hoặc Trạng thái SIM) và tìm từ "SIM bị khóa" hoặc "SIM không bị khóa".

👉 **Đã xác nhận điện thoại của bạn có khả năng?** Nhận [eSIM cho Mỹ](/united-states-esim/) hoặc [eSIM cho Nhật Bản](/japan-esim/) để kết nối.


## Kiểm tra tương thích của bạn với eSIM Miễn phí

Cách nhanh nhất để xác nhận điện thoại của bạn thực sự có thể sử dụng eSIM là cài đặt **eSIM dùng thử miễn phí**. Nó không tốn phí, mất 2 phút và nếu cài đặt và kết nối, phần cứng của bạn tốt.

👉 [**Nhận eSIM Roami miễn phí ngay bây giờ**](/free-esim/)

---

*Nếu thiết bị hoặc lỗi cụ thể của bạn không được đề cập ở đây, hãy liên hệ với chúng tôi và chúng tôi sẽ giúp bạn xác nhận liệu điện thoại của bạn có hỗ trợ eSIM hay không.*
## Nguồn

- [GSMA — thông số kỹ thuật eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM trên iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Thiết lập eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)