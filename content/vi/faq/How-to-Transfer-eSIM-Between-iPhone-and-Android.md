---
title: "Cách chuyển eSIM giữa iPhone và Android"
h1_title: "Cách chuyển eSIM giữa iPhone và Android"
description: "Di chuyển eSIM của bạn giữa iPhone và Android bằng ứng dụng nhà mạng hoặc mã QR được cấp lại. Hướng dẫn từng bước cho cả hai chiều, cùng các cách khắc phục lỗi chuyển đổi thường gặp."
image: "/img/esim/esim-travel.jpg"
keywords: ["chuyển eSIM đa nền tảng", "lỗi chuyển eSIM", "iOS 18 eSIM", "khóa nhà mạng eSIM", "mã xác nhận eSIM", "eSIM không có dịch vụ", "cài đặt APN eSIM", "khắc phục sự cố eSIM", "kích hoạt eSIM thất bại", "chuyển eSIM giữa iPhone và Android", "không thể chuyển eSIM sang iPhone mới", "chuyển eSIM Orange"]
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


> **Lưu ý của biên tập viên:** Roami là thương hiệu đứng sau hướng dẫn này. Tất cả thông tin chuyển đổi nhà mạng đều dựa trên tài liệu chính thức của nhà mạng và thử nghiệm thiết bị của nhóm chúng tôi vào năm 2026. Chuyển eSIM đa nền tảng vẫn đang được triển khai trên toàn cầu – chúng tôi tập trung vào các phương pháp thực sự hoạt động hiện nay.

## Chuyển eSIM – Câu trả lời nhanh 10 giây

**Tìm kịch bản của bạn bên dưới và chuyển ngay đến phương pháp đúng.**

| Kịch bản của bạn | Có thể chuyển không? | Phương pháp tốt nhất | Đi đến đâu |
| :--- | :--- | :--- | :--- |
| **iPhone → iPhone mới** | ✅ Có (luôn luôn) | Apple Quick Transfer | [Chuyển đổi cùng nền tảng](#chuyen-esim-sang-iphone-hoac-samsung-moi--chuyen-esim-cung-nen-tang) |
| **Samsung → Samsung mới** | ✅ Có (thường) | Samsung Smart Switch | [Chuyển đổi cùng nền tảng](#chuyen-esim-sang-iphone-hoac-samsung-moi--chuyen-esim-cung-nen-tang) |
| **Android → iPhone (nhà mạng hỗ trợ chuyển qua ứng dụng)** | ✅ Có | Ứng dụng Nhà mạng | [Phương pháp A](#phuong-phap-a-chuyen-esim-tu-android-sang-iphone-ung-dung-nha-mang) |
| **Android → iPhone (nhà mạng không hỗ trợ ứng dụng)** | ✅ Có | Dự phòng QR Code | [Phương pháp B](#phuong-phap-b-chuyen-esim-tu-iphone-sang-android-mang-qr-code-cua-nha-mang) |
| **iPhone → Android (nhà mạng hỗ trợ)** | ✅ Có | Ứng dụng Nhà mạng hoặc QR Code | [Phương pháp B](#phuong-phap-b-chuyen-esim-tu-iphone-sang-android-mang-qr-code-cua-nha-mang) |
| **eSIM du lịch (Roami, Airalo, Holafly)** | ❌ Không | Mua gói mới trên thiết bị mới | [Tại sao eSIM du lịch không thể chuyển](#tai-sao-esim-du-lich-khong-the-chuyen-duoc) |
| **Nhà mạng không hỗ trợ chuyển đổi** | ✅ Có (dự phòng) | Liên hệ nhà mạng để lấy mã QR | [Phương pháp dự phòng](#phuong-phap-du-phong-khi-chuyen-esim-da-nen-tang-khong-duoc-ho-tro) |

> **Quy tắc chính:** Không có **nút chuyển eSIM tích hợp iOS sang Android** như iPhone-to-iPhone. Chuyển đổi đa nền tảng luôn luôn thông qua **nhà mạng của bạn** – hoặc qua ứng dụng của họ hoặc bằng cách yêu cầu mã QR mới. eSIM du lịch **chỉ dùng một thiết bị** – hãy mua gói mới trên điện thoại mới của bạn.

**Không thể chuyển?** Hầu hết eSIM du lịch (Roami, Airalo, Holafly) **chỉ dùng một thiết bị** – bạn sẽ cần mua gói mới trên điện thoại mới. Đối với eSIM nhà mạng địa phương, phương án dự phòng mã QR luôn hoạt động.

> **Hạn chế chính:** Không có **chuyển eSIM tích hợp iOS sang Android** – bạn phải thông qua nhà mạng của mình. Hướng dẫn này hướng dẫn bạn qua mọi phương pháp được hỗ trợ.

Để có hướng dẫn đầy đủ về thiết lập eSIM cơ bản, xem **[Hướng dẫn đầy đủ về eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)**. Đối với các vấn đề nâng cao không được đề cập ở đây, **[Hướng dẫn khắc phục sự cố chuyên sâu eSIM (16 trường hợp thực tế)](/faq/esim-deep-troubleshooting-guide-2026/)** có thêm giải pháp.


## Luồng quyết định nhanh – Bạn nên sử dụng phương pháp chuyển eSIM nào?

| Tình huống của bạn | Phương pháp tốt nhất | Thời gian | Cần nhà mạng? |
| :--- | :--- | :--- | :--- |
| **Chuyển iPhone ↔ iPhone** | Apple Quick Transfer (Cài đặt > Di động > Thêm eSIM > Chuyển) | 2 phút | Không (Apple xử lý) |
| **Chuyển Android ↔ Android (Samsung sang Samsung, v.v.)** | Chuyển đặc thù thương hiệu (Samsung: Trình quản lý SIM > Thêm eSIM > Chuyển) | 2 phút | Không (thương hiệu xử lý) |
| **Chuyển iPhone ↔ Android (iOS 18 / Android 16+)** | Chuyển qua ứng dụng nhà mạng | 3-5 phút | Có |
| **Chuyển iPhone ↔ Android (OS cũ hơn)** | Mã QR do nhà mạng cấp lại | 5-10 phút | Có |
| **eSIM du lịch (Roami, Airalo, Holafly)** | ❌ Không thể chuyển – mua gói mới trên thiết bị mới | Không áp dụng | Không – nhà cung cấp không cho phép |
| **Nhà mạng của bạn không hỗ trợ chuyển đổi** | Dự phòng mã QR (gọi nhà mạng) | 10-20 phút | Có |


## Hành trình chuyển eSIM hoàn chỉnh – Từ "Tôi đang đổi điện thoại" đến "Nó hoạt động"

Đây là bản đồ hành trình từng bước cho bất kỳ ai đang chuyển eSIM sang thiết bị mới.

| Bước | Bạn đang nghĩ gì | Cần làm gì | Tìm ở đâu |
| :--- | :--- | :--- | :--- |
| **1. Xác định kịch bản của bạn** | "Tôi đang thực hiện loại chuyển đổi nào?" | Xác định: cùng hệ sinh thái (iOS→iOS / Android→Android) hay đa nền tảng (iOS↔Android)? | [Luồng quyết định nhanh ở trên](#luong-quyet-dinh-nhanh--ban-nen-su-dung-phuong-phap-chuyen-esim-nao) |
| **2. Kiểm tra phiên bản OS** | "Điện thoại của tôi đã được cập nhật đủ chưa?" | iPhone phải là iOS 18+, Android phải là Android 16+ để chuyển đa nền tảng gốc. | Cập nhật trước nếu chưa. |
| **3. Kiểm tra khóa nhà mạng** | "Điện thoại của tôi có bị khóa nhà mạng không?" | Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng phải hiển thị "Không có hạn chế SIM." | [Điều kiện tiên quyết bên dưới](#nhung-gi-ban-can-truoc-khi-bat-dau-chuyen-esim) |
| **4. Kiểm tra hỗ trợ nhà mạng** | "Nhà mạng của tôi có cho phép điều này không?" | Mở ứng dụng nhà mạng và tìm tùy chọn chuyển eSIM. Hoặc gọi và hỏi. | [Phần nhà mạng được hỗ trợ bên dưới](#cac-nha-mang-duoc-ho-tro-cho-chuyen-esim-da-nen-tang-chi-tiet) |
| **5. Thực hiện chuyển đổi** | "Đến lúc di chuyển số." | Làm theo các bước cụ thể cho kịch bản của bạn. | [Phương pháp A](#phuong-phap-a-chuyen-esim-tu-android-sang-iphone-ung-dung-nha-mang) hoặc [Phương pháp B](#phuong-phap-b-chuyen-esim-tu-iphone-sang-android-mang-qr-code-cua-nha-mang) |
| **6. Thiết lập sau chuyển đổi** | "Số của tôi đã ở trên điện thoại mới – giờ thì sao?" | Kích hoạt lại WhatsApp, iMessage, ứng dụng 2FA và kiểm tra SMS. | [Phần Sau khi chuyển eSIM bên dưới](#sau-khi-chuyen-esim--di-chuyen-whatsapp-imessage-va-2fa) |
| **7. Khắc phục sự cố nếu thất bại** | "Nó không hoạt động – giờ thì sao?" | Kiểm tra lỗi, xóa hồ sơ cũ, thử lại hoặc sử dụng dự phòng mã QR. | [Bảng khắc phục sự cố bên dưới](#khac-phuc-su-co-tai-sao-chuyen-esim-cua-toi-that-bai) |


## Những gì bạn cần trước khi bắt đầu chuyển eSIM

**Cho cả hai chiều:**
- Cả hai thiết bị phải **đã mở khóa** (không có **khóa nhà mạng**). Để kiểm tra trên iPhone: `Cài đặt > Cài đặt chung > Giới thiệu` → `Khóa nhà mạng` phải hiển thị "Không có hạn chế SIM". **Đây là nguyên nhân số 1 khiến chuyển đổi thất bại** – nếu điện thoại của bạn bị khóa, bạn không thể chuyển eSIM sang mạng của nhà mạng khác.
- Cả hai thiết bị đều đã **bật Bluetooth**.
- Cả hai thiết bị đều được kết nối với **Wi‑Fi** (hoặc ít nhất một thiết bị có kết nối dữ liệu di động đang hoạt động).
- eSIM bạn muốn chuyển đang **hoạt động** trên thiết bị nguồn (chưa bị xóa).
- Nhà mạng của bạn **hỗ trợ chuyển đổi đa nền tảng** (xem danh sách bên dưới). Nếu không, hãy chuyển đến phần phương pháp dự phòng.
- **Hồ sơ eSIM** của bạn chưa **hết hạn** – một số hồ sơ có ngày hết hạn giới hạn.

**Đối với Android → iPhone:**
- iPhone phải chạy **iOS 18 trở lên**.
- Android phải chạy **Android 16 trở lên**.

**Đối với iPhone → Android:**
- iPhone phải chạy **iOS 18 trở lên**.
- Android phải chạy **Android 16 trở lên**.

> 🚨 **Cảnh báo quan trọng – Đừng xóa trước khi chuyển:**
> **KHÔNG xóa eSIM khỏi thiết bị cũ trước khi bắt đầu chuyển.** Nếu bạn xóa eSIM nguồn trước, hồ sơ sẽ biến mất khỏi thiết bị và nhà mạng của bạn có thể không thể chuyển nó sang thiết bị mới. Bạn sẽ phải liên hệ với nhà mạng để có mã QR hoàn toàn mới – có thể mất 24‑48 giờ. Luôn bắt đầu chuyển từ thiết bị mới trước hoặc giữ eSIM cũ hoạt động cho đến khi xác nhận eSIM mới hoạt động.

> 🚨 Nếu thiết bị của bạn đang chạy OS cũ hơn, tùy chọn menu sẽ không xuất hiện. Hãy cập nhật trước. Nếu bạn đang xử lý **hồ sơ eSIM đã hết hạn**, hãy liên hệ với nhà mạng để có mã QR mới trước khi bắt đầu chuyển.

Trang [Google Support – eSIM trên Pixel](https://support.google.com/pixelphone/answer/7086887) cung cấp thêm chi tiết cho người dùng Android đang chuẩn bị chuyển eSIM.


## Tại sao eSIM du lịch không thể chuyển được?

Đây là câu hỏi số 1 chúng tôi nhận được. Đây là lý do:

| Lý do | Giải thích |
| :--- | :--- |
| **Liên kết EID** | Mỗi hồ sơ eSIM được liên kết mật mã với **EID** (eUICC Identifier) của thiết bị mà nó đã được kích hoạt. EID của điện thoại bạn là duy nhất – giống như số serial cho phần cứng eSIM của bạn. (Bạn có thể xem EID của mình bằng cách quay `*#06#` trên hầu hết điện thoại.) |
| **Mã QR dùng một lần** | Mã QR eSIM du lịch được thiết kế để **sử dụng một lần**. Sau khi được quét, mã QR bị vô hiệu hóa trên máy chủ của nhà mạng. Đây là tính năng bảo mật để ngăn chặn gian lận. |
| **Không có tài khoản nhà mạng** | eSIM du lịch được mua dưới dạng sản phẩm độc lập – bạn không có "tài khoản nhà mạng" với dịch vụ liên tục. Không có ai để đăng nhập và yêu cầu chuyển đổi. |
| **Được thiết kế cho sự tiện lợi** | eSIM du lịch đánh đổi khả năng chuyển đổi để lấy sự tiện lợi. Bạn có kích hoạt tức thì mà không cần xác minh danh tính, nhưng đổi lại hồ sơ bị khóa trên một thiết bị. |

**Điểm mấu chốt:** Nếu bạn đang sử dụng eSIM du lịch (Roami, Airalo, Holafly, Nomad, v.v.), **đừng lãng phí thời gian cố gắng chuyển nó**. Nó sẽ không hoạt động. Đơn giản chỉ cần mua gói mới trên thiết bị mới của bạn. Chi phí của một eSIM du lịch mới thường thấp hơn thời gian bạn dành để cố gắng chuyển một hồ sơ không thể chuyển.

**Còn eSIM nhà mạng (trả sau/trả trước) thì sao?**
eSIM nhà mạng khác. Bạn có một tài khoản với nhà mạng và họ có thể cấp lại eSIM của bạn cho thiết bị mới vì họ kiểm soát hồ sơ trên máy chủ của họ. Đó là lý do tại sao eSIM nhà mạng có thể chuyển được và eSIM du lịch thì không.


## So sánh phương pháp chuyển eSIM – Phương pháp nào phù hợp với bạn?

| Tính năng | Chuyển qua ứng dụng nhà mạng | Mã QR nhà mạng | Chuyển gốc (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Hoạt động đa nền tảng?** | ✅ Có | ✅ Có | ❌ Không (chỉ cùng hệ sinh thái) |
| **Thời gian cần** | 3-5 phút | 5-10 phút | 1-2 phút |
| **Sự tham gia của nhà mạng** | Tự phục vụ qua ứng dụng | Phải liên hệ nhà mạng | Không cần |
| **Hoạt động khi đang đi du lịch?** | ✅ Có (với Wi-Fi) | ✅ Có (với Wi-Fi) | ✅ Có |
| **Tỷ lệ thành công** | Cao (nếu được hỗ trợ) | Rất Cao (luôn hoạt động) | Rất Cao |
| **Tốt nhất cho** | Chuyển nhanh, nhà mạng hỗ trợ ứng dụng | Bất kỳ nhà mạng nào, dự phòng khi ứng dụng thất bại | Nâng cấp thiết bị cùng hệ sinh thái |
| **Chi phí** | Thường miễn phí | Có thể mất $0‑25 cho cấp lại mã QR | Miễn phí |


## Phương pháp A: Chuyển eSIM từ Android sang iPhone (Ứng dụng nhà mạng)

Đây là kịch bản phổ biến nhất – chuyển từ Samsung, Pixel hoặc Android khác sang iPhone mới. Cách đáng tin cậy nhất để di chuyển số của bạn là thông qua ứng dụng của nhà mạng.

### Hướng dẫn từng bước

**Trước khi bắt đầu:**
- Cài đặt ứng dụng của nhà mạng trên iPhone mới (hoặc sẵn sàng đăng nhập trên trang web của nhà mạng).
- Biết mã PIN tài khoản hoặc thông tin đăng nhập.
- **KHÔNG xóa eSIM khỏi Android của bạn ngay bây giờ.**

**Trên iPhone (mục tiêu):**
1. Cài đặt và mở ứng dụng của nhà mạng (ví dụ: ứng dụng T‑Mobile, Verizon hoặc AT&T).
2. Đăng nhập và tìm tùy chọn như "Kích hoạt eSIM", "Đổi thiết bị" hoặc "Chuyển sang thiết bị mới".
3. Làm theo hướng dẫn để nhập **EID** và **IMEI** của iPhone mới (hiển thị trong `Cài đặt` → `Cài đặt chung` → `Giới thiệu`).
4. Nhà mạng đẩy hồ sơ eSIM của bạn sang iPhone mới hoặc tạo mã QR để bạn quét.
5. Trên iPhone, vào `Cài đặt` → `Di động` → `Thêm eSIM` và quét mã QR nếu được tạo.
6. Đợi "Kích hoạt hoàn tất". Số của bạn hiện đã hoạt động trên iPhone.
7. **Bây giờ** bạn có thể xóa eSIM khỏi Android (Cài đặt > Kết nối > Trình quản lý SIM > nhấn vào eSIM > Gỡ bỏ).

**Mẹo iOS 18:** Nếu bạn đang dùng iOS 18, luồng "Thêm eSIM" đã được thiết kế lại với trình quét QR nổi bật hơn và xử lý lỗi tốt hơn. Bạn sẽ thấy chỉ báo tiến trình trong quá trình tải xuống hồ sơ.

✅ **Xong.** Số của bạn hiện đã hoạt động trên iPhone. Nếu nhà mạng của bạn không cung cấp ứng dụng, hãy liên hệ với họ để cấp lại eSIM của bạn dưới dạng mã QR mới (xem phương pháp dự phòng bên dưới).

### Điều gì xảy ra nếu chuyển ứng dụng không hoạt động?

Sử dụng **dự phòng mã QR của nhà mạng**:

- Liên hệ với nhà mạng (trò chuyện, điện thoại hoặc trang web).
- Nói với họ bạn đang đổi thiết bị và yêu cầu họ **cấp lại eSIM của bạn dưới dạng mã QR mới**.
- Quét mã QR mới trên iPhone: `Cài đặt` → `Di động` → `Thêm eSIM`.
- Hoàn tất kích hoạt.

Nếu bạn thấy lỗi **"không thể kích hoạt eSIM"** trong quá trình này, hãy kiểm tra kết nối Wi‑Fi và thử lại.


## Phương pháp B: Chuyển eSIM từ iPhone sang Android (Mã QR của nhà mạng)

Không có tùy chọn "Chuyển sang Android" tích hợp trên iPhone. Phương pháp đáng tin cậy là yêu cầu nhà mạng cấp lại eSIM của bạn.

### Điều kiện tiên quyết
- Điện thoại Android mới của bạn đã **mở khóa**.
- Bạn có thể liên hệ với nhà mạng (hoặc đăng nhập vào ứng dụng/trang web của họ).
- Android của bạn đang chạy **Android 16 trở lên**.
- **KHÔNG xóa eSIM khỏi iPhone của bạn ngay bây giờ.**

### Các bước

**Liên hệ với nhà mạng (hoặc sử dụng ứng dụng của họ):**
1. Nói với họ bạn đang di chuyển eSIM từ iPhone sang điện thoại Android.
2. Cung cấp **EID** và **IMEI** của thiết bị Android mới (trong `Cài đặt` → `Giới thiệu điện thoại`).
3. Nhà mạng của bạn cấp lại eSIM của bạn dưới dạng mã QR mới (hoặc đẩy qua ứng dụng của họ).

**Trên Android (mục tiêu):**
1. Vào `Cài đặt` → `Mạng & internet` → `SIM` → `Thêm eSIM` (từ ngữ thay đổi theo thương hiệu).
2. Quét mã QR mà nhà mạng cung cấp.
3. Làm theo hướng dẫn để tải xuống và kích hoạt hồ sơ.
4. Đợi kích hoạt hoàn tất.
5. **Bây giờ** bạn có thể xóa eSIM khỏi iPhone (Cài đặt > Di động > nhấn vào eSIM > Xóa gói di động).

✅ Xong. Số của bạn hiện nằm trên điện thoại Android.

> ⚠️ **Quan trọng**: Khi quá trình chuyển hoàn tất, eSIM sẽ bị **xóa vĩnh viễn** khỏi iPhone. Bạn không thể hoàn tác nếu không có nhà mạng. Hãy đảm bảo bạn có đường truyền hoạt động khác hoặc Wi‑Fi trước khi chuyển.


## Chuyển eSIM sang iPhone hoặc Samsung mới – Chuyển eSIM cùng nền tảng

Trong khi chuyển đa nền tảng là trọng tâm của hướng dẫn này, nhiều người dùng chỉ muốn di chuyển eSIM trong cùng một hệ sinh thái. Đây là cách:

### iOS → iOS (iPhone sang iPhone)

**Quick Transfer** tích hợp của Apple là phương pháp dễ nhất:

1. Trong quá trình thiết lập iPhone mới của bạn, chọn "Chuyển eSIM từ iPhone lân cận" khi được nhắc.
2. Giữ cả hai điện thoại ở gần nhau với Bluetooth và Wi‑Fi được bật.
3. Xác nhận chuyển trên iPhone cũ của bạn.
4. Đợi 1‑2 phút để quá trình **tải xuống hồ sơ eSIM** hoàn tất trên thiết bị mới.

**Nếu Quick Transfer không hoạt động:** Vào Cài đặt > Di động trên iPhone mới của bạn > Thêm eSIM > Chuyển từ iPhone lân cận.

**Nếu điều đó thất bại:** Sử dụng phương pháp mã QR của nhà mạng – liên hệ với nhà mạng để có mã QR mới.

### Android → Android (Samsung, Pixel, v.v.)

Các phương pháp chuyển Android khác nhau theo thương hiệu:

**Samsung:** Cài đặt > Kết nối > Trình quản lý SIM > Thêm eSIM > Chuyển eSIM từ thiết bị cũ (làm theo hướng dẫn trên màn hình). Hoạt động trên Samsung Galaxy S21 trở lên, dòng Z Flip/Z Fold.

**Google Pixel:** Trong quá trình thiết lập, bạn có thể được nhắc chuyển eSIM. Ngoài ra, hãy sử dụng ứng dụng nhà mạng hoặc yêu cầu mã QR mới.

**Android chung:** Nếu thương hiệu của bạn không cung cấp chuyển tích hợp, hãy sử dụng phương pháp dự phòng mã QR của nhà mạng.

### So sánh chuyển eSIM Đa nền tảng vs. Cùng nền tảng

| Tính năng | Đa nền tảng | Cùng nền tảng |
|---------|----------------|----------------|
| **iOS ↔ iOS** | Không áp dụng | ✅ Quick Transfer hoạt động |
| **Android ↔ Android** | Không áp dụng | ✅ Phương pháp đặc thù thương hiệu |
| **iOS ↔ Android** | ✅ Được đề cập trong hướng dẫn này | ❌ Không hỗ trợ trực tiếp |
| **Phụ thuộc vào nhà mạng** | Cao hơn | Thấp hơn (Apple/Google xử lý) |
| **Thời gian cần** | 3-10 phút | 1-2 phút |
| **Tỷ lệ thành công** | Thay đổi theo nhà mạng | Nhìn chung cao |

Để tìm hiểu sâu hơn về hành vi eSIM theo thiết bị cụ thể, xem **[Hướng dẫn đầy đủ về eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** của chúng tôi.


## Các nhà mạng được hỗ trợ cho chuyển eSIM đa nền tảng (Chi tiết)

Chuyển eSIM đa nền tảng vẫn còn mới và hỗ trợ nhà mạng đang được triển khai dần. Không có danh sách công khai đầy đủ về mọi nhà mạng được hỗ trợ và tính khả dụng thường thay đổi, vì vậy hãy kiểm tra trang web hoặc ứng dụng của nhà mạng bạn để biết trạng thái hiện tại.

### Các nhà mạng được xác nhận hỗ trợ (Tính đến tháng 8 năm 2026)

| Nhà mạng | Khu vực | Phương thức chuyển | Giới hạn chuyển | Chi phí |
|---------|--------|-----------------|----------------|------|
| **Orange** | Pháp, Châu Âu | Ứng dụng Orange → "Không gian eSIM của tôi" → "Chuyển sang thiết bị mới" | 3 lần/năm | Miễn phí |
| **SFR** | Pháp | Ứng dụng SFR & Moi → "Quản lý SIM của tôi" → "Chuyển eSIM" | 5 lần/năm | Miễn phí |
| **T-Mobile** | Mỹ | Ứng dụng T-Mobile → "Quản lý eSIM" → "Chuyển sang thiết bị mới" | Không giới hạn | Miễn phí |
| **Verizon** | Mỹ | Ứng dụng My Verizon → "Kích hoạt hoặc đổi thiết bị" | Không giới hạn | Miễn phí |
| **AT&T** | Mỹ | Ứng dụng AT&T → "Kích hoạt eSIM" | Thay đổi theo gói | Miễn phí (trả sau) |
| **EE** | Anh | Ứng dụng EE → "Gói" → "Chuyển eSIM" | 3 lần/năm | Miễn phí |
| **Deutsche Telekom** | Đức | Ứng dụng Telekom → "Chuyển eSIM" | Không giới hạn | Miễn phí |
| **Swisscom** | Thụy Sĩ | Ứng dụng Swisscom → "Chuyển eSIM" | 3 lần/năm | Miễn phí |
| **Bouygues** | Pháp | Cấp lại mã QR (qua cổng thông tin khách hàng) | 3 lần/năm | Miễn phí |
| **Free** | Pháp | Cấp lại mã QR (qua cổng thông tin khách hàng) | 2 lần/năm | Miễn phí |
| **Vodafone** | Anh, Châu Âu | Ứng dụng Vodafone → "Chuyển eSIM" | Thay đổi theo quốc gia | Miễn phí (trả sau) |
| **Google Fi** | Mỹ, Toàn cầu | Ứng dụng Google Fi → "Kích hoạt trên thiết bị này" | Không giới hạn | Miễn phí |

### eSIM du lịch (KHÔNG thể chuyển)

| Nhà cung cấp | Có thể chuyển? | Giải pháp thay thế |
|----------|---------------|-------------------|
| **Roami** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |
| **Airalo** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |
| **Holafly** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |
| **Nomad** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |

**Cách kiểm tra nhà mạng của bạn có hỗ trợ không?** Thử các bước trong Phương pháp A hoặc B. Nếu nhà mạng của bạn không cung cấp chuyển qua ứng dụng hoặc mã QR mới, hãy sử dụng phương pháp dự phòng bên dưới.


## Phương pháp dự phòng khi chuyển eSIM đa nền tảng không được hỗ trợ

Nếu nhà mạng của bạn không có trong danh sách hoặc bạn thấy **lỗi chuyển eSIM**, hãy sử dụng một trong các giải pháp thay thế sau:

### Tùy chọn 1: Mã QR do nhà mạng cấp (Luôn hoạt động)
1. Gọi hoặc trò chuyện với nhà mạng của bạn.
2. Nói với họ: "Tôi đang chuyển từ Android sang iPhone (hoặc ngược lại). Vui lòng cấp lại eSIM của tôi dưới dạng mã QR mới."
3. Họ sẽ gửi cho bạn mã QR hoặc liên kết kích hoạt qua email.
4. Trên thiết bị mới, vào `Cài đặt` → `Di động` → `Thêm eSIM` → `Sử dụng mã QR` và quét.
5. eSIM trên thiết bị cũ sẽ ngừng hoạt động sau khi cái mới kích hoạt.

**Mẹo:** Một số nhà mạng tính phí nhỏ cho việc cấp lại eSIM ($0‑25). Hãy hỏi trước khi họ thực hiện.

### Tùy chọn 2: Nhập SM-DP+ thủ công (Nâng cao)
Nếu nhà mạng của bạn cung cấp cho bạn **mã kích hoạt** và **địa chỉ SM‑DP+** (địa chỉ máy chủ cung cấp hồ sơ eSIM cho điện thoại của bạn), bạn có thể thêm eSIM thủ công trên thiết bị mới:
1. `Cài đặt` → `Di động` → `Thêm eSIM` → `Nhập chi tiết thủ công`.
2. Dán địa chỉ SM‑DP+ và mã kích hoạt.
3. Nhấn `Tiếp theo`. Cách này hoạt động trên cả iPhone và Android.

### Tùy chọn 3: Mua gói mới (Đối với eSIM du lịch)
Nếu bạn đang sử dụng eSIM du lịch (Roami, Airalo, Holafly), đừng lãng phí thời gian cố gắng chuyển – nó sẽ không hoạt động. Đơn giản chỉ cần mua gói mới trên thiết bị mới của bạn.

> **Mẹo chuyển đổi:** Phương án dự phòng mã QR là phương pháp đáng tin cậy nhất cho bất kỳ nhà mạng nào, bất kể họ có hỗ trợ chuyển qua ứng dụng hay không. Có thể mất một cuộc gọi điện thoại, nhưng nó luôn hoạt động.


## Chuyển eSIM hay Kích hoạt mới? – Ma trận quyết định

Đôi khi mua eSIM mới nhanh hơn chuyển. Đây là khi nào nên chọn loại nào:

| Yếu tố | Chuyển | Kích hoạt mới | Cái nào tốt hơn? |
|--------|----------|----------------|------------------|
| **Bạn giữ nguyên số điện thoại** | ✅ Giữ số | ❌ Có số mới | Chuyển thắng |
| **Bạn có 2FA liên kết với số của mình** | ✅ Giữ quyền truy cập | ❌ Rủi ro mất quyền truy cập | Chuyển thắng |
| **Nhà mạng của bạn tính phí chuyển** | Có thể tốn $0‑25 | $0 (bạn đã mua mới) | Phụ thuộc vào phí |
| **eSIM du lịch** | ❌ Không thể | ✅ Dễ dàng | Kích hoạt mới thắng |
| **Bạn đang vội (dưới 5 phút)** | ⚠️ Có thể mất 5‑10 phút | ✅ 2 phút quét QR | Kích hoạt mới thắng |
| **Bạn muốn giữ gói/dữ liệu hiện tại** | ✅ Giữ dữ liệu chưa dùng | ❌ Mất dữ liệu chưa dùng | Chuyển thắng |

**Khuyến nghị:** Nếu bạn giữ cùng gói nhà mạng và muốn giữ số điện thoại, hãy chuyển. Nếu bạn đang dùng eSIM du lịch hoặc đang vội, chỉ cần mua gói mới trên thiết bị mới.


## Khắc phục sự cố: Tại sao chuyển eSIM của tôi thất bại?

| Lỗi / Triệu chứng | Nguyên nhân có khả năng nhất | Cách khắc phục |
|----------------|-------------------|-----|
| "Chuyển không khả dụng – nhà mạng không hỗ trợ" | Nhà mạng của bạn không hỗ trợ chuyển đa nền tảng. | Sử dụng phương pháp dự phòng ở trên. |
| Mã QR quét xong nhưng báo "phiên đã hết hạn" | Bạn mất quá nhiều thời gian sau khi tạo mã QR (nó đã hết hạn). | Lặp lại quy trình và quét ngay lập tức. |
| Android báo "Ghép nối thất bại" | Quyền Bluetooth hoặc mạng cục bộ bị chặn. | Trên iPhone: `Cài đặt > Quyền riêng tư & Bảo mật > Mạng cục bộ` – đảm bảo `Cài đặt` được bật. Trên Android: tắt "Quét bảo mật Wi‑Fi" (thường nằm trong cài đặt nâng cao Wi‑Fi). |
| Chuyển bắt đầu nhưng dừng ở 50% | Wi‑Fi hoặc tín hiệu di động yếu. | Di chuyển cả hai điện thoại gần bộ định tuyến hơn. Tắt VPN trên cả hai thiết bị. |
| **"eSIM đã bị ràng buộc với thiết bị khác"** | Hồ sơ không được giải phóng đúng cách khỏi thiết bị cũ. | Trên thiết bị cũ, vào `Cài đặt > Di động` và thủ công `Xóa eSIM` (nếu vẫn hiển thị). Sau đó đợi 5 phút và thử lại. Nếu vẫn thất bại, hãy liên hệ nhà mạng để giải phóng hồ sơ. |
| iPhone hỏi **mã xác nhận** sau khi quét | Hồ sơ eSIM có **mã xác nhận eSIM** bắt buộc (hiếm). | Tìm mã trong email nhà mạng (thường 4–8 chữ số). Nếu không tìm thấy, hãy hỏi nhà mạng. |
| Nhấn đúp nút bên cạnh không làm gì (iPhone → Android) | Xác thực sinh trắc học chưa được thiết lập hoặc bị vô hiệu hóa. | Thiết lập Face ID / Touch ID hoặc tạm thời tắt "Yêu cầu chú ý" cho Face ID. |
| **eSIM không có dịch vụ** sau khi chuyển | Cài đặt APN chưa được cấu hình. | Cấu hình APN thủ công (xem bảng bên dưới). |
| **Hồ sơ eSIM đã hết hạn** | Hồ sơ có ngày hết hạn giới hạn. | Liên hệ nhà mạng để có mã QR mới. |
| **Không có tùy chọn Thêm eSIM** trên iPhone | iPhone bị khóa nhà mạng hoặc đang chạy iOS cũ hơn. | Kiểm tra khóa nhà mạng trong Cài đặt > Cài đặt chung > Giới thiệu. Cập nhật lên iOS 18. |
| **"SIM không được hỗ trợ" trên thiết bị mới** | Thiết bị mới bị khóa nhà mạng với một nhà mạng khác. | Kiểm tra Khóa nhà mạng – phải hiển thị "Không có hạn chế SIM." |
| **Vượt quá giới hạn chuyển đổi** | Bạn đã chuyển eSIM này quá nhiều lần (một số nhà mạng giới hạn 3‑5 lần/năm). | Liên hệ hỗ trợ nhà mạng để đặt lại giới hạn hoặc lấy eSIM mới. |
| **"Chuyển eSIM thất bại" trên Samsung** | Samsung Smart Switch có thể không hỗ trợ hồ sơ nhà mạng cụ thể. | Sử dụng dự phòng mã QR của nhà mạng thay thế. |

### Cấu hình APN thủ công

Nếu sau **chuyển eSIM** bạn gặp **eSIM không có dịch vụ**, hãy cấu hình APN thủ công:

| Nhà mạng | APN | Tên người dùng | Mật khẩu |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (để trống) | (để trống) |
| **SFR** | sl2sfr | (để trống) | (để trống) |
| **Free** | free | (để trống) | (để trống) |
| **Bouygues** | ebouygtel.com | (để trống) | (để trống) |
| **T-Mobile (Mỹ)** | fast.t-mobile.com | (để trống) | (để trống) |
| **AT&T (Mỹ)** | nxgen | (để trống) | (để trống) |
| **Verizon (Mỹ)** | vzwinternet | (để trống) | (để trống) |
| **Telekom (Đức)** | internet.telekom | (để trống) | (để trống) |

### Vẫn bị kẹt?
Thu thập những thông tin này trước khi gọi hỗ trợ:
- IMEI và EID của thiết bị nguồn
- IMEI và EID của thiết bị đích
- Thông báo lỗi chính xác (chụp ảnh màn hình)
- Số tài khoản hoặc số điện thoại của bạn


## Điều gì xảy ra với eSIM cũ sau khi chuyển?

**Nó bị vô hiệu hóa ngay lập tức.**

Hồ sơ eSIM cũ có thể vẫn hiển thị trên thiết bị cũ một thời gian ngắn. Bạn có thể thủ công xóa nó:
`Cài đặt > Di động > nhấn vào eSIM cũ > Xóa eSIM`.

> 💰 **Thanh toán**: Nhà mạng của bạn sẽ tiếp tục tính phí cho gói. Chuyển không hủy gói – nó chỉ di chuyển SIM. Để hủy, bạn phải liên hệ với nhà mạng riêng.

Nếu bạn lo lắng về lỗi **eSIM bị ràng buộc với thiết bị khác**, luôn xóa hồ sơ cũ khỏi thiết bị nguồn sau khi quá trình chuyển hoàn tất thành công.

### Dòng thời gian Chuyển đổi vs. Xóa

| Hành động | Điều gì xảy ra | Khi nào thực hiện |
| :--- | :--- | :--- |
| **Bắt đầu chuyển** | Nhà mạng gửi hồ sơ sang thiết bị mới | Trước khi xóa eSIM cũ |
| **eSIM mới được kích hoạt** | Thiết bị mới kết nối với mạng | Sau khi kích hoạt hoàn tất |
| **eSIM cũ bị vô hiệu hóa** | Nhà mạng vô hiệu hóa hồ sơ cũ | Tự động – có thể mất 1‑5 phút |
| **Xóa eSIM cũ** | Xóa hồ sơ không hoạt động khỏi thiết bị cũ | Sau khi xác nhận thiết bị mới hoạt động |


## Sau khi chuyển eSIM – Di chuyển WhatsApp, iMessage và 2FA

Sau khi chuyển eSIM thành công, bạn cần thiết lập các ứng dụng nhắn tin và dịch vụ xác thực trên thiết bị mới.

### WhatsApp (iPhone và Android)

WhatsApp sử dụng số điện thoại của bạn để xác định tài khoản. Sau **chuyển eSIM**:

1. Mở WhatsApp trên thiết bị mới của bạn.
2. Nhập số điện thoại của bạn (số bạn đã chuyển).
3. Bạn sẽ nhận được mã xác minh qua SMS hoặc cuộc gọi tự động đến số của bạn.
4. Nhập mã – các cuộc trò chuyện của bạn sẽ xuất hiện lại nếu bạn đã sao lưu trước đó.

**Mẹo:** Sao lưu các cuộc trò chuyện trước khi bắt đầu chuyển. Trên iPhone: WhatsApp > Cài đặt > Trò chuyện > Sao lưu trò chuyện. Trên Android: WhatsApp > Cài đặt > Trò chuyện > Sao lưu.

**Sự cố WhatsApp thường gặp:** Nếu bạn không nhận được mã xác minh SMS, hãy thử tùy chọn "Gọi cho tôi" – WhatsApp sẽ gọi đến số của bạn và đọc mã. Nếu điều đó thất bại, hãy đợi 5 phút và thử lại (mạng nhà mạng có thể vẫn đang ổn định).

### iMessage và FaceTime (chỉ iPhone)

1. Vào `Cài đặt` → `Tin nhắn` và bật `iMessage` BẬT.
2. Vào `Cài đặt` → `FaceTime` và bật `FaceTime` BẬT.
3. Đợi 1‑2 phút để kích hoạt. Nếu nó hiển thị "Đang chờ kích hoạt", hãy tắt và bật lại.
4. Kiểm tra số của bạn đã được chọn: Cài đặt > Tin nhắn > Gửi & Nhận → chọn số eSIM của bạn.

### Xác thực hai yếu tố (2FA) và Xác minh SMS

Vì số điện thoại của bạn không thay đổi, mã 2FA dựa trên SMS sẽ hoạt động bình thường. Tuy nhiên, các ứng dụng xác thực dựa trên ứng dụng (Google Authenticator, Microsoft Authenticator, Authy) có thể yêu cầu thiết lập lại:

- **Authy:** Các mã thông báo của bạn được mã hóa và sao lưu lên đám mây – chỉ cần đăng nhập trên thiết bị mới.
- **Google Authenticator:** Bạn sẽ cần chuyển các tài khoản của mình riêng lẻ hoặc sử dụng tính năng "Chuyển tài khoản".
- **Microsoft Authenticator:** Sử dụng tính năng sao lưu để khôi phục trên thiết bị mới.
- **SMS 2FA:** Kiểm tra bằng cách yêu cầu mã xác minh từ ngân hàng hoặc nhà cung cấp email của bạn để xác nhận SMS gửi đến hoạt động.

### Ứng dụng Ngân hàng và Dịch vụ Tài chính

Hầu hết các ngân hàng sẽ phát hiện thay đổi thiết bị và yêu cầu xác thực lại. Hãy chuẩn bị sẵn thông tin đăng nhập và bất kỳ thiết bị mã thông báo vật lý nào.

Để được trợ giúp thêm về di chuyển ứng dụng sau **chuyển eSIM**, xem [hướng dẫn thiết lập eSIM](/faq/how-to-activate-an-esim/) của chúng tôi.


## Các phương pháp tốt nhất để tránh đau đầu khi chuyển eSIM

✅ **Trước khi chuyển:**
- Kiểm tra hỗ trợ nhà mạng (thử menu – nếu có, nó được hỗ trợ).
- Cập nhật cả hai điện thoại lên OS mới nhất (iOS 18 / Android 16).
- Sạc cả hai điện thoại trên 30%.
- Tạm thời tắt VPN và trình chặn quảng cáo.
- Xác minh **hồ sơ eSIM** của bạn chưa **hết hạn**.
- Sao lưu WhatsApp và các ứng dụng nhắn tin khác.
- **KHÔNG xóa eSIM khỏi thiết bị cũ ngay bây giờ.**

✅ **Trong khi chuyển:**
- Giữ điện thoại cách nhau trong vòng 10 cm (4 inch).
- Không chuyển ứng dụng hoặc khóa màn hình.
- Không tắt Bluetooth hoặc Wi‑Fi.
- Đợi thông báo xác nhận – đừng cho rằng nó đã hoàn tất.

✅ **Sau khi chuyển:**
- Kiểm tra cuộc gọi và dữ liệu trên thiết bị mới.
- Xóa eSIM cũ khỏi thiết bị nguồn để tránh nhầm lẫn.
- Giữ Wi‑Fi trên thiết bị cũ bật ít nhất một giờ – một số nhà mạng cần bắt tay cuối cùng.
- Kích hoạt lại WhatsApp, iMessage và ứng dụng 2FA.
- Kiểm tra mã xác minh SMS từ ngân hàng.
- Đặt lời nhắc hủy gói cũ nếu bạn đang chuyển hoàn toàn sang nhà mạng khác.


## Đang đi du lịch và chuyển eSIM – Những điều bạn cần biết

Nếu bạn đang đi du lịch nước ngoài và cần chuyển eSIM, đây là một số điểm quan trọng:

### Chuyển eSIM khi đang đi du lịch
- Chuyển đa nền tảng hoạt động **trên toàn thế giới** miễn là nhà mạng của bạn hỗ trợ.
- Đảm bảo bạn có kết nối Wi‑Fi ổn định (khách sạn, quán cà phê) trước khi bắt đầu.
- Nếu chuyển thất bại, dự phòng mã QR của nhà mạng là lựa chọn tốt nhất của bạn.
- Kiểm tra **cài đặt APN eSIM** sau khi chuyển – một số nhà mạng yêu cầu cấu hình thủ công.

### Các nhà mạng Pháp và Du lịch
- **Orange** và **SFR** cho phép chuyển đa nền tảng bất kể bạn ở đâu.
- **Free** và **Bouygues** yêu cầu cấp lại mã QR – hãy làm điều này trước khi bạn đi.
- Đối với **eSIM du lịch**, hãy nhớ rằng chúng thường **không thể chuyển** – mua gói mới trên thiết bị mới của bạn.

### Cách liên hệ với nhà mạng khi ở nước ngoài

| Nhà mạng | Phương thức liên hệ hỗ trợ | Ghi chú |
|---------|------------------------|-------|
| **Orange** | Trò chuyện ứng dụng Orange, hỗ trợ WhatsApp hoặc điện thoại | 24/7 ở hầu hết các khu vực |
| **SFR** | Trò chuyện ứng dụng SFR & Moi, điện thoại | Giờ giới hạn |
| **T-Mobile** | Trò chuyện ứng dụng T‑Mobile, iMessage, điện thoại | Hỗ trợ 24/7 tại Mỹ |
| **Verizon** | Trò chuyện ứng dụng My Verizon, điện thoại | Hỗ trợ 24/7 |
| **AT&T** | Trò chuyện ứng dụng AT&T, điện thoại | Giờ giới hạn quốc tế |
| **EE** | Trò chuyện ứng dụng EE, điện thoại | Hỗ trợ 24/7 tại Anh |

**Mẹo:** Tải xuống ứng dụng của nhà mạng và lưu thông tin liên hệ hỗ trợ trước khi bạn đi du lịch. Một số nhà mạng yêu cầu xác minh SMS để đăng nhập – nếu bạn đang trong quá trình chuyển, điều này có thể không hoạt động.

### Phải làm gì nếu chuyển đổi thất bại giữa chuyến đi

1. Kết nối với Wi‑Fi miễn phí gần nhất (sân bay, khách sạn, quán cà phê).
2. Liên hệ với hỗ trợ nhà mạng qua email hoặc ứng dụng nhắn tin.
3. Yêu cầu họ cấp lại eSIM của bạn dưới dạng mã QR.
4. Quét mã QR trên thiết bị mới của bạn.

### Mẹo cho du khách toàn cầu
- Luôn giữ bản sao lưu mã QR eSIM của bạn.
- Nếu bạn đổi điện thoại giữa chuyến đi, hãy ưu tiên chuyển gốc hơn mã QR khi có thể.
- Đối với nhiều điểm đến, hãy cân nhắc gói eSIM toàn cầu bao phủ nhiều quốc gia.
- Lưu thông tin liên hệ hỗ trợ của nhà mạng trước khi bạn đi du lịch.

Để biết thêm về việc sử dụng eSIM khi đi du lịch, xem hướng dẫn [eSIM du lịch 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) của chúng tôi.


## Câu hỏi thường gặp

**Q1: Tôi có thể chuyển eSIM chỉ dữ liệu (như eSIM du lịch) không?**
Không. Hầu hết eSIM du lịch (Roami, Airalo, Holafly, Nomad, v.v.) không hỗ trợ chuyển đa nền tảng. Chúng được thiết kế để cài đặt một lần trên mỗi thiết bị. Bạn sẽ cần mua gói mới trên điện thoại mới. Xem "Tại sao eSIM du lịch không thể chuyển được?" ở trên để biết giải thích kỹ thuật.

**Q2: Chuyển có hoạt động giữa iPhone 11 và Samsung S24 không?**
Có – miễn là cả hai đáp ứng yêu cầu OS. iPhone 11 hỗ trợ iOS 18 (nó chạy lên đến iOS 18). Samsung S24 hỗ trợ Android 16. Thế hệ phần cứng không quan trọng; chỉ có phiên bản OS mới quan trọng.

**Q3: Ứng dụng nhà mạng của tôi không cung cấp chuyển eSIM. Tại sao?**
Không phải mọi nhà mạng đều hỗ trợ chuyển eSIM qua ứng dụng. Nếu nhà mạng của bạn không cung cấp, hãy sử dụng dự phòng mã QR của nhà mạng: liên hệ với nhà mạng và yêu cầu họ cấp lại eSIM của bạn dưới dạng mã QR mới. Một số nhà mạng tính phí nhỏ cho việc này ($0‑25).

**Q4: WhatsApp / iMessage / mã 2FA của tôi có vẫn hoạt động sau khi chuyển không?**
WhatsApp sử dụng số điện thoại của bạn – nó sẽ phát hiện thay đổi SIM và có thể yêu cầu xác minh lại (thường tự động). iMessage trên iPhone sử dụng số eSIM và sẽ kích hoạt lại trong vòng một phút. Đối với 2FA, các dịch vụ gửi SMS đến số của bạn sẽ hoạt động bình thường – số không thay đổi. Xem Phần 10 để biết các bước di chuyển chi tiết.

**Q5: Tôi có thể chuyển cùng một eSIM qua lại nhiều lần không?**
Có, nhưng mỗi lần chuyển đều yêu cầu cùng một quy trình. Một số nhà mạng giới hạn số lần eSIM có thể được chuyển mỗi năm (ví dụ: 3‑5 lần). Nếu bạn đạt đến giới hạn, hãy liên hệ với nhà mạng để được trợ giúp.

**Q6: Còn thiết lập dual‑SIM eSIM + SIM vật lý thì sao?**
Chuyển chỉ di chuyển eSIM. SIM vật lý vẫn nằm trong thiết bị nguồn. Nếu bạn muốn di chuyển cả hai, bạn sẽ cần chuyển eSIM (sử dụng hướng dẫn này) và di chuyển thẻ nano‑SIM vật lý sang thiết bị mới. Để tối ưu hóa trải nghiệm dual‑SIM sau khi chuyển, hãy xem **[Dual eSIM không hoạt động? 12 Cách khắc phục cho iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** của chúng tôi.

**Q7: Điều gì xảy ra nếu tôi gặp lỗi "hồ sơ eSIM đã hết hạn" trong khi chuyển?**
Liên hệ với nhà mạng để có mã QR mới – việc cấp lại thường miễn phí. Đảm bảo kích hoạt mã QR mới ngay lập tức (trong vòng 30 phút) để tránh nó hết hạn lần nữa.

**Q8: Tại sao khóa nhà mạng ngăn tôi chuyển?**
Nếu điện thoại của bạn đang bị **khóa nhà mạng**, bạn chỉ có thể chuyển eSIM sang thiết bị từ cùng nhà mạng. Liên hệ với nhà mạng để mở khóa thiết bị trước khi chuyển. Trên iPhone: Cài đặt > Cài đặt chung > Giới thiệu > Khóa nhà mạng phải hiển thị "Không có hạn chế SIM."

**Q9: Tôi có thể chuyển Orange eSIM sang thiết bị không phải Orange không?**
Có, nếu thiết bị của bạn đã mở khóa và gói Orange của bạn cho phép. **Chuyển Orange eSIM** được hỗ trợ qua ứng dụng Orange hoặc chuyển gốc. Orange cho phép tối đa 3 lần chuyển mỗi năm.

**Q10: Chuyển có hoạt động với Free eSIM không?**
Không – Free không hỗ trợ chuyển đa nền tảng. Sử dụng phương pháp dự phòng mã QR từ cổng thông tin khách hàng của Free. Free cho phép tối đa 2 lần chuyển mỗi năm.

**Q11: Mã xác nhận eSIM là gì và tôi tìm nó ở đâu?**
Một số hồ sơ eSIM có **mã xác nhận eSIM** bắt buộc – thường là 4‑8 chữ số. Tìm nó trong email hoặc hướng dẫn kích hoạt của nhà mạng. Nếu không tìm thấy, hãy hỏi nhà mạng của bạn.

**Q12: "eSIM không chuyển sang điện thoại mới" có nghĩa là gì?**
Điều này thường có nghĩa là nhà mạng của bạn không hỗ trợ chuyển, mã QR đã hết hạn, eSIM cũ vẫn đang hoạt động hoặc thiết bị mới bị khóa nhà mạng. Xóa eSIM cũ trước (nếu vẫn hiển thị), sau đó thử lại. Xem Phần 7 để có bảng khắc phục sự cố đầy đủ.

**Q13: Làm cách nào để sửa "kích hoạt eSIM thất bại" sau khi chuyển?**
Kiểm tra kết nối Wi‑Fi của bạn, khởi động lại cả hai thiết bị và thử lại. Nếu vẫn thất bại, hãy sử dụng phương pháp nhập thủ công với địa chỉ SM‑DP+ từ email nhà mạng của bạn.

**Q14: Chuyển eSIM có hủy gói của tôi không?**
Không – chuyển eSIM chỉ di chuyển hồ sơ SIM sang thiết bị mới. Gói của bạn (và thanh toán) tiếp tục như trước. Để hủy gói, bạn phải liên hệ với nhà mạng riêng.

**Q15: Tôi có thể chuyển eSIM nếu tôi đã xóa nó khỏi điện thoại cũ không?**
Có, nhưng phức tạp hơn. Nếu bạn đã xóa eSIM trước khi bắt đầu chuyển, hãy liên hệ với nhà mạng và yêu cầu họ cấp lại eSIM của bạn dưới dạng mã QR mới. Họ có thể làm điều này vì hồ sơ của bạn vẫn tồn tại trên máy chủ của họ.

**Q16: Chi phí cấp lại mã QR eSIM là bao nhiêu?**
Hầu hết các nhà mạng cấp lại eSIM miễn phí (đặc biệt là gói trả sau). Một số nhà mạng trả trước hoặc MVNO có thể tính phí nhỏ ($5‑25). Hãy hỏi trước khi bạn yêu cầu cấp lại.

**Q17: Tôi có thể chuyển Vodafone eSIM sang thiết bị không phải Vodafone không?**
Có, miễn là thiết bị của bạn đã mở khóa và gói Vodafone của bạn cho phép chuyển eSIM. Vodafone hỗ trợ chuyển qua ứng dụng của họ ở hầu hết các quốc gia. Kiểm tra ứng dụng Vodafone để tìm tùy chọn "chuyển eSIM".

**Q18: Điều gì xảy ra nếu tôi đạt đến giới hạn chuyển của nhà mạng?**
Một số nhà mạng giới hạn chuyển 3‑5 lần mỗi năm. Nếu bạn đạt đến giới hạn, hãy liên hệ hỗ trợ nhà mạng – họ thường có thể đặt lại giới hạn hoặc cấp mã QR eSIM mới thủ công (bỏ qua hệ thống chuyển).

**Q19: Tôi có thể chuyển hai eSIM cùng một lúc (dual eSIM) không?**
Có, nhưng bạn phải chuyển chúng **từng cái một**. Mỗi hồ sơ eSIM độc lập và phải được chuyển riêng biệt bằng cùng một quy trình. Nếu bạn có hai eSIM đang hoạt động trên thiết bị cũ, hãy chuyển eSIM chính trước, sau đó đến eSIM phụ.

**Q20: Sự khác biệt giữa chuyển eSIM và cấp lại eSIM là gì?**
Chuyển di chuyển hồ sơ hiện tại của bạn sang thiết bị mới (giữ nguyên số và gói của bạn). Cấp lại tạo một hồ sơ eSIM hoàn toàn mới cho cùng số – hồ sơ cũ bị vô hiệu hóa vĩnh viễn. Cấp lại là phương pháp dự phòng khi nhà mạng của bạn không hỗ trợ chuyển.

---

## Kết luận cuối cùng

Khả năng chuyển eSIM giữa iPhone và Android mà không cần can thiệp của nhà mạng là một **bước đột phá năm 2026**. Nó loại bỏ điểm ma sát lớn cuối cùng cho việc chuyển đổi hệ sinh thái. Miễn là nhà mạng của bạn nằm trong danh sách được hỗ trợ và cả hai điện thoại đều được cập nhật, bạn có thể di chuyển số của mình trong vòng chưa đầy một phút.

**Hãy nhớ**:
- Nếu nhà mạng của bạn không được hỗ trợ, dự phòng mã QR vẫn hoạt động – chỉ cần một cuộc gọi điện thoại.
- Đối với eSIM du lịch, hãy coi chúng như dùng một lần; mua mới trên mỗi thiết bị.
- **Không bao giờ xóa eSIM cũ trước khi bắt đầu chuyển** – đây là sai lầm phổ biến nhất.
- Kiểm tra khóa nhà mạng trước khi bắt đầu – "Không có hạn chế SIM" là bắt buộc.
- Một số nhà mạng giới hạn chuyển mỗi năm – hãy kiểm tra trước khi bắt đầu.

Nếu bạn gặp thông báo **lỗi chuyển eSIM** kéo dài, **[Hướng dẫn khắc phục sự cố chuyên sâu eSIM (16 trường hợp thực tế)](/faq/esim-deep-troubleshooting-guide-2026/)** của chúng tôi bao gồm các giải pháp nâng cao.

👉 **Đang chuyển sang gói du lịch?** Xem [eSIM cho Mỹ](/united-states-esim/) hoặc [eSIM cho Châu Âu](/europe-esim/) sau khi quá trình chuyển của bạn hoàn tất.

👉 **Không chắc điện thoại mới của bạn có hỗ trợ eSIM không?** Kiểm tra **[danh sách tương thích đầy đủ](/compatibility/)** của chúng tôi trước khi bắt đầu.

👉 **Đang thử eSIM du lịch trên thiết bị mới của bạn?** Nhận **[dùng thử eSIM Roami miễn phí](/free-esim/)** để xác nhận mọi thứ hoạt động.

---

*Thông tin dựa trên tài liệu chính thức của Apple và Android, tiêu chuẩn GSMA và hướng dẫn nhà mạng tính đến tháng 8 năm 2026. Các tính năng và hỗ trợ nhà mạng có thể thay đổi.*
## Nguồn

- [GSMA — thông số kỹ thuật eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — eSIM trên iPhone](https://support.apple.com/en-us/108072)
- [Google Support — Thiết lập eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)