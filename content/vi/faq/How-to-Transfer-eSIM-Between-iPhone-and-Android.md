---
title: "Cách chuyển eSIM giữa iPhone và Android"
h1_title: "Cách chuyển eSIM giữa iPhone và Android"
description: "Chuyển eSIM của bạn giữa iPhone và Android bằng ứng dụng nhà mạng hoặc mã QR cấp lại. Hướng dẫn từng bước cho cả hai chiều, cùng cách khắc phục các lỗi chuyển đổi phổ biến."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM cross-platform transfer", "eSIM transfer error", "iOS 18 eSIM", "eSIM carrier lock", "eSIM confirmation code", "eSIM no service", "eSIM APN settings", "eSIM troubleshooting", "eSIM activation failed", "transfer eSIM between iPhone and Android", "can't transfer eSIM to new iPhone", "Orange eSIM transfer"]
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
    - question: "Kích hoạt eSIM là gì và hoạt động như thế nào?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Cách kích hoạt eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Cách kích hoạt eSIM trên iPhone (mọi dòng máy)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Danh sách tương thích eSIM mới nhất"
      url: "/compatibility/"
---


> **Lưu ý của biên tập viên:** Bạn chỉ có thể chuyển eSIM giữa iPhone và Android khi nhà mạng của bạn hỗ trợ chuyển đổi đa nền tảng, và hầu hết eSIM du lịch không thể chuyển đi đâu cả. Các phương pháp dưới đây dựa trên tài liệu chính thức của nhà mạng và tập trung vào những cách chuyển thực sự hoạt động hiện nay. Hãy kiểm tra phần nhà mạng được hỗ trợ trước để biết gói của bạn có đủ điều kiện không.

Đây là thực tế thẳng thắn: về nguyên tắc, eSIM không thể di chuyển trực tiếp giữa iPhone và Android, vì hai nền tảng không dùng chung giao thức chuyển đổi. Tuy nhiên, các cách giải quyết khá đơn giản — nhờ nhà mạng cấp lại hồ sơ dưới dạng mã QR, hoặc chuyển qua ứng dụng của nhà mạng ở những nơi được hỗ trợ. Cả hai chiều chuyển cùng các ngoại lệ của eSIM du lịch đều được trình bày bên dưới.

## Chuyển eSIM là gì?

**Tìm tình huống của bạn bên dưới và đi thẳng đến phương pháp phù hợp.**

| Tình huống của bạn | Có thể chuyển không? | Phương pháp tốt nhất | Đi đến đâu |
| :--- | :--- | :--- | :--- |
| **iPhone → iPhone mới** | ✅ Có (luôn luôn) | Apple Quick Transfer | [Chuyển trong cùng nền tảng](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → Samsung mới** | ✅ Có (thường là vậy) | Samsung Smart Switch | [Chuyển trong cùng nền tảng](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (nhà mạng hỗ trợ chuyển qua ứng dụng)** | ✅ Có | Ứng dụng nhà mạng | [Phương pháp A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (nhà mạng không hỗ trợ ứng dụng)** | ✅ Có | Phương án dự phòng mã QR | [Phương pháp B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (nhà mạng hỗ trợ)** | ✅ Có | Ứng dụng nhà mạng hoặc mã QR | [Phương pháp B](#esim-transfer-from-iphone-to-android) |
| **eSIM du lịch (Roami, Airalo, Holafly)** | ❌ Không | Mua gói mới trên thiết bị mới | [Vì sao eSIM du lịch không thể chuyển](#why-cant-travel-esims-be-transferred) |
| **Nhà mạng không hỗ trợ chuyển** | ✅ Có (phương án dự phòng) | Liên hệ nhà mạng để lấy mã QR | [Phương án dự phòng](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Quy tắc quan trọng:** Không có **nút chuyển eSIM tích hợp sẵn từ iOS sang Android** như iPhone sang iPhone. Chuyển đổi đa nền tảng luôn phải **thông qua nhà mạng** – hoặc qua ứng dụng của họ, hoặc bằng cách yêu cầu mã QR mới. eSIM du lịch **chỉ dùng cho một thiết bị** – hãy mua gói mới trên điện thoại mới của bạn.

**Không chuyển được?** Hầu hết eSIM du lịch (Roami, Airalo, Holafly) **chỉ dùng cho một thiết bị** – bạn sẽ cần mua gói mới trên điện thoại mới. Với eSIM của nhà mạng địa phương, phương án mã QR dự phòng luôn hoạt động.

> **Giới hạn quan trọng:** Không có **chuyển eSIM tích hợp sẵn từ iOS sang Android** – bạn phải đi qua nhà mạng. Hướng dẫn này sẽ chỉ bạn từng phương pháp được hỗ trợ.

Bạn mới bắt đầu với việc thiết lập eSIM? [Hướng dẫn kích hoạt eSIM](/faq/how-to-activate-an-esim/) của chúng tôi bao gồm cách cài đặt từ đầu. Nếu quá trình chuyển bị lỗi giữa chừng, [Hướng dẫn xử lý sự cố eSIM chuyên sâu](/faq/esim-deep-troubleshooting-guide-2026/) sẽ ánh xạ từng thông báo lỗi với cách khắc phục.


## Bạn nên dùng phương pháp chuyển eSIM nào?

| Tình huống của bạn | Phương pháp tốt nhất | Thời gian | Cần nhà mạng? |
| :--- | :--- | :--- | :--- |
| **Chuyển iPhone ↔ iPhone** | Apple Quick Transfer (Settings > Cellular > Add eSIM > Transfer) | 2 phút | Không (Apple tự xử lý) |
| **Chuyển Android ↔ Android (Samsung sang Samsung, v.v.)** | Chuyển theo thương hiệu (Samsung: SIM Manager > Add eSIM > Transfer) | 2 phút | Không (thương hiệu tự xử lý) |
| **Chuyển iPhone ↔ Android (iOS 18 / Android 16+)** | Chuyển qua ứng dụng nhà mạng | 3-5 phút | Có |
| **Chuyển iPhone ↔ Android (hệ điều hành cũ hơn)** | Mã QR nhà mạng cấp lại | 5-10 phút | Có |
| **eSIM du lịch (Roami, Airalo, Holafly)** | ❌ Không thể chuyển – mua gói mới trên thiết bị mới | N/A | Không – nhà cung cấp không cho phép |
| **Nhà mạng của bạn không hỗ trợ chuyển** | Phương án mã QR dự phòng (gọi nhà mạng) | 10-20 phút | Có |


## Hướng dẫn chuyển eSIM đầy đủ

Đây là bản đồ lộ trình từng bước cho bất kỳ ai cần chuyển eSIM sang thiết bị mới.

| Bước | Bạn đang nghĩ gì | Cần làm gì | Tìm ở đâu |
| :--- | :--- | :--- | :--- |
| **1. Xác định tình huống của bạn** | "Tôi đang chuyển kiểu gì?" | Xác định: cùng hệ sinh thái (iOS→iOS / Android→Android) hay đa nền tảng (iOS↔Android)? | [Sơ đồ quyết định nhanh ở trên](#which-esim-transfer-method-should-you-use) |
| **2. Kiểm tra phiên bản hệ điều hành** | "Điện thoại của tôi đã đủ mới chưa?" | iPhone phải là iOS 18+, Android phải là Android 16+ để chuyển đa nền tảng gốc. | Cập nhật trước nếu chưa. |
| **3. Kiểm tra khóa nhà mạng** | "Điện thoại của tôi có bị khóa nhà mạng không?" | Settings > General > About > Carrier Lock phải ghi "No SIM restrictions." | [Điều kiện cần bên dưới](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Kiểm tra hỗ trợ nhà mạng** | "Nhà mạng của tôi có cho phép không?" | Mở ứng dụng nhà mạng và tìm tùy chọn chuyển eSIM. Hoặc gọi điện hỏi. | [Phần nhà mạng được hỗ trợ bên dưới](#carriers-that-support-cross-platform-esim-transfer) |
| **5. Thực hiện chuyển đổi** | "Đến lúc chuyển số rồi." | Làm theo các bước cụ thể cho tình huống của bạn. | [Phương pháp A](#esim-transfer-from-android-to-iphone) hoặc [Phương pháp B](#esim-transfer-from-iphone-to-android) |
| **6. Thiết lập sau chuyển đổi** | "Số của tôi đã trên máy mới – giờ làm gì tiếp?" | Kích hoạt lại WhatsApp, iMessage, ứng dụng 2FA và thử nhắn SMS. | [Phần sau khi chuyển eSIM bên dưới](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. Xử lý sự cố nếu thất bại** | "Không được – giờ sao?" | Kiểm tra lỗi, xóa hồ sơ cũ, thử lại, hoặc dùng phương án mã QR dự phòng. | [Bảng xử lý sự cố bên dưới](#why-did-my-esim-transfer-fail) |


## Điều bạn cần trước khi bắt đầu chuyển eSIM

**Cho cả hai chiều:**
- Cả hai thiết bị phải **bị mở khóa** (không có **khóa nhà mạng**). Để kiểm tra trên iPhone: `Settings > General > About` → `Carrier Lock` phải ghi "No SIM restrictions". **Đây là lý do số 1 khiến chuyển đổi thất bại** – nếu điện thoại bị khóa, bạn không thể chuyển eSIM sang mạng của nhà mạng khác.
- Cả hai thiết bị đều **bật Bluetooth**.
- Cả hai thiết bị đều kết nối **Wi‑Fi** (hoặc ít nhất một thiết bị có kết nối dữ liệu di động hoạt động).
- eSIM bạn muốn chuyển đang ở trạng thái **kích hoạt** trên thiết bị nguồn (chưa bị xóa).
- Nhà mạng của bạn **hỗ trợ chuyển đa nền tảng** (xem danh sách bên dưới). Nếu không, chuyển đến phần phương án dự phòng.

Bạn chưa quen với hồ sơ và máy chủ SM‑DP+? [Bài giải thích về kích hoạt eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) sẽ cho biết điều gì thực sự xảy ra khi một hồ sơ di chuyển giữa các thiết bị.
- **Hồ sơ eSIM** của bạn chưa **hết hạn** – một số hồ sơ có thời hạn hiệu lực giới hạn.

**Cho Android → iPhone:**
- iPhone phải chạy **iOS 18 trở lên**.
- Android phải chạy **Android 16 trở lên**.

**Cho iPhone → Android:**
- iPhone phải chạy **iOS 18 trở lên**.
- Android phải chạy **Android 16 trở lên**.

> 🚨 **Cảnh báo quan trọng – Đừng xóa trước khi chuyển:**
> **TUYỆT ĐỐI không xóa eSIM khỏi thiết bị cũ trước khi bắt đầu chuyển.** Nếu bạn xóa eSIM nguồn trước, hồ sơ sẽ biến mất khỏi thiết bị và nhà mạng có thể không thể chuyển nó sang thiết bị mới. Bạn sẽ phải liên hệ nhà mạng để lấy mã QR hoàn toàn mới – điều này có thể mất 24‑48 giờ. Luôn bắt đầu chuyển từ thiết bị mới trước, hoặc giữ eSIM cũ hoạt động cho đến khi eSIM mới được xác nhận hoạt động.

> 🚨 Nếu thiết bị của bạn chạy hệ điều hành cũ hơn, tùy chọn menu sẽ đơn giản là không xuất hiện. Hãy cập nhật trước. Nếu bạn đang gặp **hồ sơ eSIM hết hạn**, hãy liên hệ nhà mạng để lấy mã QR mới trước khi bắt đầu chuyển.

Trang [Google Support – eSIM trên Pixel](https://support.google.com/pixelphone/answer/7086887) cung cấp thêm chi tiết cho người dùng Android chuẩn bị chuyển eSIM.


## Vì sao eSIM du lịch không thể chuyển?

Đây là câu hỏi số 1 mà chúng tôi nhận được. Lý do như sau:

| Lý do | Giải thích |
| :--- | :--- |
| **Liên kết EID** | Mỗi hồ sơ eSIM được liên kết bằng mật mã với **EID** (eUICC Identifier) của thiết bị mà nó được kích hoạt. EID của điện thoại bạn là duy nhất – giống như số serial cho phần cứng eSIM của bạn. (Bạn có thể xem EID bằng cách quay số `*#06#` trên hầu hết điện thoại.) |
| **Mã QR dùng một lần** | Mã QR eSIM du lịch được thiết kế để **dùng một lần**. Sau khi quét, mã QR sẽ bị vô hiệu hóa trên máy chủ của nhà cung cấp. Đây là tính năng bảo mật nhằm ngăn chặn gian lận. |
| **Không có tài khoản nhà mạng** | eSIM du lịch được mua như sản phẩm độc lập – bạn không có "tài khoản nhà mạng" với dịch vụ liên tục. Không có nơi nào để đăng nhập và yêu cầu chuyển đổi. |
| **Thiết kế hướng đến sự tiện lợi** | eSIM du lịch đánh đổi khả năng chuyển đổi lấy sự tiện lợi. Bạn được kích hoạt tức thì mà không cần xác minh danh tính, nhưng cái giá là hồ sơ bị khóa vào một thiết bị. |

**Kết luận:** Nếu bạn đang dùng eSIM du lịch (Roami, Airalo, Holafly, Nomad, v.v.), **đừng lãng phí thời gian cố chuyển nó**. Sẽ không được đâu. Đơn giản là mua gói mới trên thiết bị mới của bạn. Chi phí một eSIM du lịch mới thường thấp hơn thời gian bạn bỏ ra để cố chuyển một hồ sơ không thể chuyển.

**Còn eSIM nhà mạng (trả sau/trả trước) thì sao?**
eSIM nhà mạng thì khác. Bạn có tài khoản với nhà mạng, và họ có thể cấp lại eSIM cho thiết bị mới vì họ kiểm soát hồ sơ trên máy chủ của mình. Đó là lý do eSIM nhà mạng có thể chuyển được, còn eSIM du lịch thì không.


## Phương pháp chuyển eSIM nào phù hợp với bạn?

| Tính năng | Chuyển qua ứng dụng nhà mạng | Mã QR nhà mạng | Chuyển gốc (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Chuyển đa nền tảng được không?** | ✅ Có | ✅ Có | ❌ Không (chỉ cùng hệ sinh thái) |
| **Thời gian cần** | 3-5 phút | 5-10 phút | 1-2 phút |
| **Sự tham gia của nhà mạng** | Tự phục vụ qua ứng dụng | Phải liên hệ nhà mạng | Không cần |
| **Dùng được khi đi du lịch?** | ✅ Có (cần Wi‑Fi) | ✅ Có (cần Wi‑Fi) | ✅ Có |
| **Tỷ lệ thành công** | Cao (nếu được hỗ trợ) | Rất cao (luôn hoạt động) | Rất cao |
| **Phù hợp nhất cho** | Chuyển nhanh, nhà mạng hỗ trợ ứng dụng | Bất kỳ nhà mạng nào, phương án dự phòng khi ứng dụng thất bại | Nâng cấp thiết bị trong cùng hệ sinh thái |
| **Chi phí** | Thường miễn phí | Có thể mất $0‑25 để cấp lại mã QR | Miễn phí |


## Chuyển eSIM từ Android sang iPhone

Đây là tình huống phổ biến nhất – chuyển từ Samsung, Pixel hoặc Android khác sang iPhone mới. Cách đáng tin cậy nhất để di chuyển số của bạn là qua ứng dụng của nhà mạng.

### Từng bước một

**Trước khi bắt đầu:**
- Đã cài ứng dụng nhà mạng trên iPhone mới (hoặc sẵn sàng đăng nhập trên website nhà mạng).
- Biết mã PIN tài khoản hoặc thông tin đăng nhập của bạn.
- **CHƯA xóa eSIM khỏi Android của bạn.**

**Trên iPhone của bạn (đích đến):**
1. Cài đặt và mở ứng dụng nhà mạng (ví dụ: ứng dụng T‑Mobile, Verizon hoặc AT&T).
2. Đăng nhập và tìm tùy chọn như "Activate eSIM", "Change device" hoặc "Transfer to new device".
3. Làm theo hướng dẫn để nhập **EID** và **IMEI** của iPhone mới (hiển thị trong `Settings` → `General` → `About`).
4. Nhà mạng sẽ đẩy hồ sơ eSIM sang iPhone mới của bạn, hoặc tạo mã QR để bạn quét.
5. Trên iPhone, vào `Settings` → `Cellular` → `Add eSIM` và quét mã QR nếu có được tạo.
6. Chờ "Activation complete". Số của bạn giờ đã hoạt động trên iPhone.
7. **Bây giờ** bạn có thể xóa eSIM khỏi Android (Settings > Connections > SIM Manager > nhấn vào eSIM > Remove).

**Mẹo cho iOS 18:** Nếu bạn dùng iOS 18, luồng "Add eSIM" đã được thiết kế lại với máy quét QR nổi bật hơn và xử lý lỗi tốt hơn. Bạn sẽ thấy chỉ báo tiến trình trong quá trình tải hồ sơ.

✅ **Hoàn tất.** Số của bạn giờ đã hoạt động trên iPhone. Nếu nhà mạng không có ứng dụng, hãy liên hệ họ để cấp lại eSIM dưới dạng mã QR mới (xem phương án dự phòng bên dưới).

### Nếu chuyển qua ứng dụng không được thì sao?

Dùng **phương án dự phòng mã QR của nhà mạng**:

- Liên hệ nhà mạng (chat, điện thoại hoặc website).
- Nói với họ rằng bạn đang đổi thiết bị và nhờ họ **cấp lại eSIM dưới dạng mã QR mới**.
- Quét mã QR mới trên iPhone: `Settings` → `Cellular` → `Add eSIM`.
- Hoàn tất kích hoạt.

Nếu bạn thấy lỗi **"unable to activate esim"** trong quá trình này, hãy kiểm tra kết nối Wi‑Fi và thử lại.


## Chuyển eSIM từ iPhone sang Android

iPhone không có tùy chọn "Transfer to Android" tích hợp sẵn. Phương pháp đáng tin cậy là nhờ nhà mạng cấp lại eSIM của bạn.

### Điều kiện cần
- Điện thoại Android mới của bạn đã **mở khóa**.
- Bạn có thể liên hệ nhà mạng (hoặc đăng nhập ứng dụng/website của họ).
- Android của bạn chạy **Android 16 trở lên**.
- **CHƯA xóa eSIM khỏi iPhone của bạn.**

### Các bước

**Liên hệ nhà mạng (hoặc dùng ứng dụng của họ):**
1. Cho họ biết bạn đang chuyển eSIM từ iPhone sang điện thoại Android.
2. Cung cấp **EID** và **IMEI** của thiết bị Android mới (trong `Settings` → `About phone`).
3. Nhà mạng sẽ cấp lại eSIM của bạn dưới dạng mã QR mới (hoặc đẩy qua ứng dụng của họ).

**Trên Android của bạn (đích đến):**
1. Vào `Settings` → `Network & internet` → `SIMs` → `Add eSIM` (cách gọi có thể khác nhau theo thương hiệu).
2. Quét mã QR mà nhà mạng cung cấp.
3. Làm theo hướng dẫn để tải xuống và kích hoạt hồ sơ.
4. Chờ kích hoạt hoàn tất.
5. **Bây giờ** bạn có thể xóa eSIM khỏi iPhone (Settings > Cellular > nhấn vào eSIM > Remove Cellular Plan).

✅ Xong. Số của bạn giờ đã nằm trên điện thoại Android.

> ⚠️ **Quan trọng**: Sau khi chuyển hoàn tất, eSIM bị **gỡ bỏ vĩnh viễn** khỏi iPhone. Bạn không thể quay lại nếu không có nhà mạng. Đảm bảo bạn có một đường truyền đang hoạt động khác hoặc Wi‑Fi trước khi chuyển.


## Chuyển eSIM sang iPhone hoặc Samsung mới

Mặc dù chuyển đa nền tảng là trọng tâm của hướng dẫn này, nhiều người dùng chỉ đơn giản muốn chuyển eSIM trong cùng hệ sinh thái. Đây là cách làm. (Chuyển sang iPhone 16 Mỹ chỉ dùng eSIM? [Hướng dẫn kích hoạt iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) có chi tiết về chuyển trong quá trình thiết lập.)

### Chuyển eSIM từ iPhone sang iPhone

**Quick Transfer** tích hợp sẵn của Apple là phương pháp dễ nhất:

1. Trong quá trình thiết lập iPhone mới, chọn "Transfer eSIM from nearby iPhone" khi được nhắc.
2. Giữ cả hai điện thoại gần nhau với Bluetooth và Wi‑Fi được bật.
3. Xác nhận chuyển đổi trên iPhone cũ của bạn.
4. Chờ 1‑2 phút để **tải hồ sơ eSIM** hoàn tất trên thiết bị mới.

**Nếu Quick Transfer không hoạt động:** Vào Settings > Cellular trên iPhone mới > Add eSIM > Transfer from nearby iPhone.

**Nếu vẫn thất bại:** Dùng phương pháp mã QR nhà mạng – liên hệ nhà mạng để lấy mã QR mới.

### Chuyển eSIM từ Android sang Android

Phương pháp chuyển trên Android khác nhau theo từng thương hiệu:

**Samsung:** Settings > Connections > SIM Manager > Add eSIM > Transfer eSIM from old device (làm theo hướng dẫn trên màn hình). Hoạt động trên Samsung Galaxy S21 trở lên, dòng Z Flip/Z Fold.

**Google Pixel:** Trong quá trình thiết lập, bạn có thể được nhắc chuyển eSIM. Ngoài ra, dùng ứng dụng nhà mạng hoặc yêu cầu mã QR mới.

**Android chung:** Nếu thương hiệu của bạn không có chuyển đổi tích hợp sẵn, dùng phương án mã QR dự phòng của nhà mạng.

### So sánh chuyển eSIM đa nền tảng vs. cùng nền tảng

| Tính năng | Đa nền tảng | Cùng nền tảng |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Quick Transfer hoạt động |
| **Android ↔ Android** | N/A | ✅ Phương pháp theo thương hiệu |
| **iOS ↔ Android** | ✅ Có trong hướng dẫn này | ❌ Không hỗ trợ trực tiếp |
| **Phụ thuộc nhà mạng** | Cao hơn | Thấp hơn (Apple/Google tự xử lý) |
| **Thời gian cần** | 3-10 phút | 1-2 phút |
| **Tỷ lệ thành công** | Tùy nhà mạng | Thường cao |

Để biết hành vi eSIM khác nhau thế nào giữa các thế hệ iPhone (giới hạn lưu trữ, quy tắc SIM kép, phiên bản theo khu vực), xem [trung tâm tương thích eSIM iPhone](/faq/iphone-11-esim-compatible/) của chúng tôi.


## Các nhà mạng hỗ trợ chuyển eSIM đa nền tảng

Chuyển eSIM đa nền tảng còn khá mới, và sự hỗ trợ của nhà mạng đang dần được triển khai. Không có danh sách công khai đầy đủ của mọi nhà mạng được hỗ trợ, và tình trạng khả dụng thay đổi thường xuyên, nên hãy kiểm tra website hoặc ứng dụng nhà mạng của bạn để biết thông tin mới nhất.

### Các nhà mạng được xác nhận hỗ trợ

| Nhà mạng | Khu vực | Phương pháp chuyển | Giới hạn chuyển | Chi phí |
|---------|--------|-----------------|----------------|------|
| **Orange** | Pháp, châu Âu | Ứng dụng Orange → "My eSIM space" → "Transfer to new device" | 3 lần/năm | Miễn phí |
| **SFR** | Pháp | Ứng dụng SFR & Moi → "Manage my SIM" → "Transfer eSIM" | 5 lần/năm | Miễn phí |
| **T-Mobile** | Mỹ | Ứng dụng T-Mobile → "Manage eSIM" → "Transfer to new device" | Không giới hạn | Miễn phí |
| **Verizon** | Mỹ | Ứng dụng My Verizon → "Activate or switch device" | Không giới hạn | Miễn phí |
| **AT&T** | Mỹ | Ứng dụng AT&T → "Activate eSIM" | Tùy gói | Miễn phí (trả sau) |
| **EE** | Anh | Ứng dụng EE → "Plan" → "eSIM transfer" | 3 lần/năm | Miễn phí |
| **Deutsche Telekom** | Đức | Ứng dụng Telekom → "eSIM transfer" | Không giới hạn | Miễn phí |
| **Swisscom** | Thụy Sĩ | Ứng dụng Swisscom → "eSIM transfer" | 3 lần/năm | Miễn phí |
| **Bouygues** | Pháp | Cấp lại mã QR (qua cổng khách hàng) | 3 lần/năm | Miễn phí |
| **Free** | Pháp | Cấp lại mã QR (qua cổng khách hàng) | 2 lần/năm | Miễn phí |
| **Vodafone** | Anh, châu Âu | Ứng dụng Vodafone → "eSIM transfer" | Tùy quốc gia | Miễn phí (trả sau) |
| **Google Fi** | Mỹ, toàn cầu | Ứng dụng Google Fi → "Activate on this device" | Không giới hạn | Miễn phí |

### eSIM du lịch không thể chuyển

| Nhà cung cấp | Có thể chuyển? | Nên làm gì thay thế |
|----------|---------------|-------------------|
| **Roami** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |
| **Airalo** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |
| **Holafly** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |
| **Nomad** | ❌ Không | Mua gói mới trên thiết bị mới của bạn |

**Làm sao kiểm tra nhà mạng của bạn có hỗ trợ không?** Thử các bước trong Phương pháp A hoặc B. Nếu nhà mạng không cung cấp chuyển qua ứng dụng hoặc mã QR mới, dùng các phương án dự phòng bên dưới.


## Phương án dự phòng khi không hỗ trợ chuyển eSIM đa nền tảng

Nếu nhà mạng của bạn không có trong danh sách, hoặc bạn gặp **lỗi chuyển eSIM**, hãy dùng một trong các phương án thay thế sau:

### Mã QR do nhà mạng cấp
1. Gọi điện hoặc chat với nhà mạng.
2. Nói với họ: "Tôi đang chuyển từ Android sang iPhone (hoặc ngược lại). Vui lòng cấp lại eSIM của tôi dưới dạng mã QR mới."
3. Họ sẽ gửi qua email một mã QR hoặc liên kết kích hoạt.
4. Trên thiết bị mới, vào `Settings` → `Cellular` → `Add eSIM` → `Use QR code` và quét.
5. eSIM của thiết bị cũ sẽ ngừng hoạt động sau khi eSIM mới được kích hoạt.

**Mẹo:** Một số nhà mạng thu một khoản phí nhỏ để cấp lại eSIM ($0‑25). Hỏi trước khi họ thực hiện.

### Nhập SM-DP+ thủ công
Nếu nhà mạng cung cấp cho bạn **mã kích hoạt** và **địa chỉ SM‑DP+** (địa chỉ máy chủ tải hồ sơ eSIM về điện thoại của bạn), bạn có thể thêm eSIM thủ công trên thiết bị mới:
1. `Settings` → `Cellular` → `Add eSIM` → `Enter Details Manually`.
2. Dán địa chỉ SM‑DP+ và mã kích hoạt.
3. Nhấn `Next`. Cách này hoạt động trên cả iPhone và Android.

### Mua gói mới
Nếu bạn đang dùng eSIM du lịch (Roami, Airalo, Holafly), đừng lãng phí thời gian cố chuyển – sẽ không được đâu. Đơn giản là mua gói mới trên thiết bị mới của bạn — [bảng so sánh gói eSIM du lịch](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) của chúng tôi xếp hạng các nhà cung cấp đáng cài lại.

> **Mẹo chuyển tiếp:** Phương án mã QR dự phòng là phương pháp đáng tin cậy nhất cho bất kỳ nhà mạng nào, bất kể họ có hỗ trợ chuyển qua ứng dụng hay không. Có thể phải gọi một cuộc điện thoại, nhưng nó luôn hoạt động.


## Chuyển eSIM hay kích hoạt mới?

Đôi khi mua eSIM mới lại nhanh hơn chuyển đổi. Đây là lúc nào nên chọn cái nào:

| Yếu tố | Chuyển đổi | Kích hoạt mới | Cái nào tốt hơn? |
|--------|----------|----------------|------------------|
| **Bạn giữ nguyên số điện thoại** | ✅ Giữ số | ❌ Nhận số mới | Chuyển đổi thắng |
| **Bạn có 2FA gắn với số của mình** | ✅ Giữ quyền truy cập | ❌ Nguy cơ mất quyền truy cập | Chuyển đổi thắng |
| **Nhà mạng thu phí chuyển** | Có thể mất $0‑25 | $0 (bạn vốn đã mua mới) | Tùy mức phí |
| **eSIM du lịch** | ❌ Không thể | ✅ Dễ dàng | Kích hoạt mới thắng |
| **Bạn đang vội (dưới 5 phút)** | ⚠️ Có thể mất 5‑10 phút | ✅ 2 phút quét QR | Kích hoạt mới thắng |
| **Bạn muốn giữ gói/dữ liệu hiện có** | ✅ Giữ dữ liệu chưa dùng | ❌ Mất dữ liệu chưa dùng | Chuyển đổi thắng |

**Khuyến nghị:** Nếu bạn giữ nguyên gói nhà mạng và muốn giữ số điện thoại, hãy chuyển đổi. Nếu bạn dùng eSIM du lịch hoặc đang vội, cứ mua gói mới trên thiết bị mới của bạn.


## Vì sao chuyển eSIM của tôi thất bại?

| Lỗi / Triệu chứng | Nguyên nhân nhiều nhất | Cách khắc phục |
|----------------|-------------------|-----|
| "Transfer not available – carrier not supported" | Nhà mạng của bạn không hỗ trợ chuyển đa nền tảng. | Dùng các phương án dự phòng ở trên. |
| Quét mã QR xong lại báo "session expired" | Bạn mất quá lâu sau khi tạo mã QR (nó đã hết hạn). | Lặp lại quy trình và quét ngay lập tức. |
| Android báo "Pairing failed" | Quyền Bluetooth hoặc mạng cục bộ bị chặn. | Trên iPhone: `Settings > Privacy & Security > Local Network` – đảm bảo `Settings` đang bật ON. Trên Android: tắt "Wi‑Fi security scan" (thường trong cài đặt nâng cao của Wi‑Fi). |
| Chuyển bắt đầu nhưng dừng ở 50% | Wi‑Fi hoặc sóng di động yếu. | Đưa cả hai điện thoại lại gần bộ định tuyến. Tắt VPN trên cả hai thiết bị. |
| **"eSIM already bound to another device"** | Hồ sơ chưa được giải phóng đúng cách khỏi thiết bị cũ. | Trên thiết bị cũ, vào `Settings > Cellular` và `Delete eSIM` thủ công (nếu vẫn hiển thị). Sau đó chờ 5 phút và thử lại. Nếu vẫn thất bại, liên hệ nhà mạng để giải phóng hồ sơ. |
| iPhone yêu cầu **confirmation code** sau khi quét | Hồ sơ eSIM có bắt buộc **mã xác nhận eSIM** (hiếm). | Tìm mã trong email nhà mạng (thường 4–8 chữ số). Nếu không thấy, hỏi nhà mạng. |
| Nhấn đúp nút bên không có tác dụng (iPhone → Android) | Xác thực sinh trắc học chưa thiết lập hoặc bị tắt. | Thiết lập Face ID / Touch ID, hoặc tạm tắt "Require Attention" cho Face ID. |
| **eSIM no service** sau khi chuyển | Cài đặt APN chưa được cấu hình. | Cấu hình APN thủ công (xem bảng bên dưới). |
| **Hồ sơ eSIM hết hạn** | Hồ sơ có thời hạn hiệu lực giới hạn. | Liên hệ nhà mạng để lấy mã QR mới. |
| **"Không có tùy chọn Add eSIM" trên iPhone** | iPhone bị khóa nhà mạng hoặc chạy iOS cũ hơn. | Kiểm tra khóa nhà mạng trong Settings > General > About. Cập nhật lên iOS 18. |
| **"SIM not supported" trên thiết bị mới** | Thiết bị mới bị khóa nhà mạng vào nhà mạng khác. | Kiểm tra Carrier Lock – phải ghi "No SIM restrictions." |
| **Vượt giới hạn chuyển** | Bạn đã chuyển eSIM này quá nhiều lần (một số nhà mạng giới hạn 3‑5 lần/năm). | Liên hệ hỗ trợ nhà mạng để đặt lại giới hạn hoặc lấy eSIM mới. |
| **"eSIM transfer failed" trên Samsung** | Samsung Smart Switch có thể không hỗ trợ hồ sơ nhà mạng cụ thể. | Dùng phương án mã QR dự phòng của nhà mạng thay thế. |

### Cấu hình APN thủ công

Nếu sau khi **chuyển eSIM** bạn gặp **eSIM no service**, hãy cấu hình APN thủ công:

| Nhà mạng | APN | Tên người dùng | Mật khẩu |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (để trống) | (để trống) |
| **SFR** | sl2sfr | (để trống) | (để trống) |
| **Free** | free | (để trống) | (để trống) |
| **Bouygues** | ebouygtel.com | (để trống) | (để trống) |
| **T-Mobile (US)** | fast.t-mobile.com | (để trống) | (để trống) |
| **AT&T (US)** | nxgen | (để trống) | (để trống) |
| **Verizon (US)** | vzwinternet | (để trống) | (để trống) |
| **Telekom (DE)** | internet.telekom | (để trống) | (để trống) |

### Vẫn bị kẹt?
Thu thập các thông tin này trước khi gọi hỗ trợ:
- IMEI và EID của thiết bị nguồn
- IMEI và EID của thiết bị đích
- Thông báo lỗi chính xác (chụp màn hình)
- Số tài khoản hoặc số điện thoại của bạn


## Điều gì xảy ra với eSIM cũ sau khi chuyển?

**Nó bị vô hiệu hóa ngay lập tức.**

Hồ sơ eSIM cũ có thể vẫn hiển thị trên thiết bị cũ trong một thời gian ngắn. Bạn có thể xóa thủ công:
`Settings > Cellular > nhấn vào eSIM cũ > Delete eSIM`.

> 💰 **Thanh toán**: Nhà mạng sẽ tiếp tục tính phí gói của bạn. Việc chuyển đổi không hủy gói – nó chỉ di chuyển SIM. Để hủy gói, bạn phải liên hệ nhà mạng riêng.

Nếu bạn lo lắng về lỗi **eSIM bound to another device**, luôn xóa hồ sơ cũ khỏi thiết bị nguồn sau khi quá trình chuyển hoàn tất thành công.

### Dòng thời gian chuyển vs. xóa

| Hành động | Điều gì xảy ra | Khi nào nên làm |
| :--- | :--- | :--- |
| **Bắt đầu chuyển** | Nhà mạng gửi hồ sơ sang thiết bị mới | Trước khi xóa eSIM cũ |
| **eSIM mới được kích hoạt** | Thiết bị mới kết nối vào mạng | Sau khi kích hoạt hoàn tất |
| **eSIM cũ bị vô hiệu hóa** | Nhà mạng vô hiệu hóa hồ sơ cũ | Tự động – có thể mất 1‑5 phút |
| **Xóa eSIM cũ** | Gỡ hồ sơ không hoạt động khỏi thiết bị cũ | Sau khi xác nhận thiết bị mới hoạt động |


## Chuyển WhatsApp, iMessage và 2FA sau khi chuyển eSIM

Sau khi chuyển eSIM thành công, bạn cần thiết lập ứng dụng nhắn tin và dịch vụ xác thực trên thiết bị mới.

### WhatsApp

WhatsApp dùng số điện thoại của bạn để nhận diện tài khoản. Sau khi **chuyển eSIM**:

1. Mở WhatsApp trên thiết bị mới của bạn.
2. Nhập số điện thoại của bạn (số bạn vừa chuyển).
3. Bạn sẽ nhận mã xác minh qua SMS hoặc cuộc gọi tự động đến số của bạn.
4. Nhập mã – các cuộc trò chuyện của bạn sẽ xuất hiện lại nếu bạn đã sao lưu trước đó.

**Mẹo:** Sao lưu các cuộc trò chuyện trước khi bắt đầu chuyển. Trên iPhone: WhatsApp > Settings > Chats > Chat Backup. Trên Android: WhatsApp > Settings > Chats > Backup.

**Vấn đề WhatsApp thường gặp:** Nếu bạn không nhận được mã xác minh SMS, hãy thử tùy chọn "Call me" – WhatsApp sẽ gọi đến số của bạn và đọc mã. Nếu vẫn thất bại, chờ 5 phút rồi thử lại (mạng nhà mạng có thể chưa ổn định).

### iMessage và FaceTime

1. Vào `Settings` → `Messages` và bật `iMessage` ON.
2. Vào `Settings` → `FaceTime` và bật `FaceTime` ON.
3. Chờ 1‑2 phút để kích hoạt. Nếu báo "Waiting for activation", tắt rồi bật lại.
4. Kiểm tra số của bạn đã được chọn: Settings > Messages > Send & Receive → chọn số eSIM của bạn.

### Xác thực hai yếu tố và xác minh SMS

Vì số điện thoại của bạn không đổi, các mã 2FA qua SMS sẽ hoạt động bình thường. Tuy nhiên, ứng dụng xác thực (Google Authenticator, Microsoft Authenticator, Authy) có thể yêu cầu thiết lập lại:

- **Authy:** Token của bạn được mã hóa và sao lưu lên đám mây – chỉ cần đăng nhập trên thiết bị mới.
- **Google Authenticator:** Bạn cần chuyển từng tài khoản hoặc dùng tính năng "Transfer accounts".
- **Microsoft Authenticator:** Dùng tính năng sao lưu để khôi phục trên thiết bị mới.
- **SMS 2FA:** Kiểm tra bằng cách yêu cầu mã xác minh từ ngân hàng hoặc nhà cung cấp email để xác nhận việc gửi SMS hoạt động.

### Ứng dụng ngân hàng và dịch vụ tài chính

Hầu hết ngân hàng sẽ phát hiện thay đổi thiết bị và yêu cầu xác thực lại. Hãy chuẩn bị sẵn thông tin đăng nhập và các thiết bị token vật lý nếu có.

Để được trợ giúp thêm về chuyển ứng dụng sau khi **chuyển eSIM**, xem [hướng dẫn thiết lập eSIM](/faq/how-to-activate-an-esim/) của chúng tôi.


## Thực hành tốt để tránh rắc rối khi chuyển eSIM

✅ **Trước khi chuyển:**
- Kiểm tra hỗ trợ nhà mạng (thử menu – nếu có thì được hỗ trợ).
- Cập nhật cả hai điện thoại lên hệ điều hành mới nhất (iOS 18 / Android 16).
- Sạc cả hai điện thoại trên 30%.
- Tạm tắt VPN và trình chặn quảng cáo.
- Xác minh **hồ sơ eSIM** của bạn chưa **hết hạn**.
- Sao lưu WhatsApp và các ứng dụng nhắn tin khác.
- **CHƯA xóa eSIM khỏi thiết bị cũ.**

✅ **Trong khi chuyển:**
- Giữ các điện thoại cách nhau trong 10 cm (4 inch).
- Không chuyển ứng dụng hay khóa màn hình.
- Không tắt Bluetooth hay Wi‑Fi.
- Chờ thông báo xác nhận – đừng tự cho là đã xong.

✅ **Sau khi chuyển:**
- Thử gọi và dùng dữ liệu trên thiết bị mới.
- Xóa eSIM cũ khỏi thiết bị nguồn để tránh nhầm lẫn.
- Giữ Wi‑Fi của thiết bị cũ bật ít nhất một giờ – một số nhà mạng cần một lần bắt tay cuối.
- Kích hoạt lại WhatsApp, iMessage và các ứng dụng 2FA.
- Thử mã xác minh SMS từ ngân hàng của bạn.
- Đặt lời nhắc hủy gói cũ nếu bạn chuyển hẳn sang nhà mạng khác.


## Du lịch và chuyển eSIM

Nếu bạn đang đi du lịch nước ngoài và cần chuyển eSIM, đây là một số điểm quan trọng. Và nếu quá trình chuyển không thể cứu vãn giữa chuyến đi, lối thoát nhanh nhất thường là mua gói địa phương — xem [hướng dẫn gói eSIM Mỹ](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) hoặc [hướng dẫn mua eSIM Anh](/faq/how-to-buy-a-uk-esim/) tùy theo điểm đến của bạn:

### Chuyển eSIM khi đang du lịch
- Chuyển đa nền tảng hoạt động **toàn cầu** miễn là nhà mạng của bạn hỗ trợ.
- Đảm bảo bạn có kết nối Wi‑Fi ổn định (khách sạn, quán cà phê) trước khi bắt đầu.
- Nếu chuyển thất bại, phương án mã QR dự phòng của nhà mạng là lựa chọn tốt nhất.
- Kiểm tra **cài đặt APN của eSIM** sau khi chuyển – một số nhà mạng yêu cầu cấu hình thủ công.

### Nhà mạng Pháp và du lịch
- **Orange** và **SFR** cho phép chuyển đa nền tảng ở bất kỳ đâu.
- **Free** và **Bouygues** yêu cầu cấp lại mã QR – hãy làm việc này trước khi đi.
- Với **eSIM du lịch**, hãy nhớ chúng thường **không thể chuyển** – mua gói mới trên thiết bị mới của bạn.

### Cách liên hệ nhà mạng khi ở nước ngoài

| Nhà mạng | Phương thức liên hệ hỗ trợ | Ghi chú |
|---------|------------------------|-------|
| **Orange** | Chat ứng dụng Orange, hỗ trợ WhatsApp, hoặc điện thoại | 24/7 ở hầu hết các khu vực |
| **SFR** | Chat ứng dụng SFR & Moi, điện thoại | Giờ giới hạn |
| **T-Mobile** | Chat ứng dụng T‑Mobile, iMessage, điện thoại | Hỗ trợ 24/7 tại Mỹ |
| **Verizon** | Chat ứng dụng My Verizon, điện thoại | Hỗ trợ 24/7 |
| **AT&T** | Chat ứng dụng AT&T, điện thoại | Giờ giới hạn ở quốc tế |
| **EE** | Chat ứng dụng EE, điện thoại | Hỗ trợ 24/7 tại Anh |

**Mẹo:** Tải ứng dụng nhà mạng và lưu thông tin liên hệ hỗ trợ trước khi đi du lịch. Một số nhà mạng yêu cầu xác minh SMS để đăng nhập – nếu bạn đang giữa chừng chuyển đổi, điều này có thể không hoạt động.

### Nên làm gì nếu chuyển thất bại giữa chuyến đi

1. Kết nối Wi‑Fi miễn phí gần nhất (sân bay, khách sạn, quán cà phê).
2. Liên hệ hỗ trợ nhà mạng qua email hoặc ứng dụng nhắn tin.
3. Nhờ họ cấp lại eSIM của bạn dưới dạng mã QR.
4. Quét mã QR trên thiết bị mới của bạn.

### Mẹo cho dân du lịch khắp nơi
- Luôn giữ bản sao lưu các mã QR eSIM của bạn.
- Nếu bạn đổi điện thoại giữa chuyến đi, ưu tiên chuyển gốc thay vì mã QR khi có thể.
- Cho nhiều điểm đến, cân nhắc gói eSIM toàn cầu phủ nhiều quốc gia.
- Lưu thông tin liên hệ hỗ trợ nhà mạng trước khi đi du lịch.

Để biết thêm về dùng eSIM khi du lịch, xem [hướng dẫn eSIM du lịch 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) của chúng tôi.


## Câu hỏi thường gặp

**Câu 1: Tôi có thể chuyển eSIM chỉ dữ liệu (như eSIM du lịch) không?**
Không. Hầu hết eSIM du lịch (Roami, Airalo, Holafly, Nomad, v.v.) không hỗ trợ chuyển đa nền tảng. Chúng được thiết kế để cài đặt một lần trên mỗi thiết bị. Bạn sẽ cần mua gói mới trên điện thoại mới. Xem phần "Vì sao eSIM du lịch không thể chuyển?" ở trên để biết giải thích kỹ thuật.

**Câu 2: Chuyển có hoạt động giữa iPhone 11 và Samsung S24 không?**
Có – miễn là cả hai đáp ứng yêu cầu hệ điều hành. iPhone 11 hỗ trợ iOS 18 (chạy được tới iOS 18). Samsung S24 hỗ trợ Android 16. Thế hệ phần cứng không quan trọng; chỉ phiên bản hệ điều hành mới quan trọng.

**Câu 3: Ứng dụng nhà mạng của tôi không có tùy chọn chuyển eSIM. Sao lại vậy?**
Không phải nhà mạng nào cũng hỗ trợ chuyển eSIM qua ứng dụng. Nếu nhà mạng của bạn không cung cấp, dùng phương án mã QR dự phòng: liên hệ nhà mạng và nhờ họ cấp lại eSIM dưới dạng mã QR mới. Một số nhà mạng thu phí nhỏ cho việc này ($0‑25).

**Câu 4: WhatsApp / iMessage / mã 2FA của tôi có còn hoạt động sau khi chuyển không?**
WhatsApp dùng số điện thoại của bạn – nó sẽ phát hiện thay đổi SIM và có thể yêu cầu xác minh lại (thường tự động). iMessage trên iPhone dùng số eSIM và nên kích hoạt lại trong vòng một phút. Với 2FA, các dịch vụ gửi SMS đến số của bạn sẽ hoạt động bình thường – số chưa đổi. Xem Phần 10 cho các bước chuyển chi tiết.

**Câu 5: Tôi có thể chuyển cùng một eSIM qua lại nhiều lần không?**
Có, nhưng mỗi lần chuyển đều phải thực hiện cùng quy trình. Một số nhà mạng giới hạn số lần chuyển eSIM mỗi năm (ví dụ: 3‑5 lần). Nếu bạn chạm giới hạn, liên hệ nhà mạng để được hỗ trợ.

**Câu 6: Còn thiết lập SIM kép eSIM + SIM vật lý thì sao?**
Việc chuyển chỉ di chuyển eSIM. SIM vật lý vẫn nằm trong thiết bị nguồn. Nếu bạn muốn di chuyển cả hai, bạn sẽ cần chuyển eSIM (dùng hướng dẫn này) và tháo thẻ nano‑SIM vật lý sang thiết bị mới. Để tối ưu trải nghiệm SIM kép sau khi chuyển, xem **[Dual eSIM không hoạt động? 12 cách khắc phục cho iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**Câu 7: Nếu tôi gặp lỗi "expired eSIM profile" trong khi chuyển thì sao?**
Liên hệ nhà mạng để lấy mã QR mới – việc cấp lại thường miễn phí. Nhớ kích hoạt mã QR mới ngay lập tức (trong vòng 30 phút) để tránh nó lại hết hạn.

**Câu 8: Vì sao khóa nhà mạng khiến tôi không thể chuyển?**
Nếu điện thoại của bạn đang bị **khóa nhà mạng**, bạn chỉ có thể chuyển eSIM sang thiết bị của cùng nhà mạng. Liên hệ nhà mạng để mở khóa thiết bị trước khi chuyển. Trên iPhone: Settings > General > About > Carrier Lock phải ghi "No SIM restrictions."

**Câu 9: Tôi có thể chuyển eSIM Orange sang thiết bị không phải Orange không?**
Có, nếu thiết bị của bạn đã mở khóa và gói Orange của bạn cho phép. **Chuyển eSIM Orange** được hỗ trợ qua ứng dụng Orange hoặc chuyển gốc. Orange cho phép tối đa 3 lần chuyển mỗi năm.

**Câu 10: Chuyển có hoạt động với eSIM của Free không?**
Không – Free không hỗ trợ chuyển đa nền tảng. Dùng phương án mã QR dự phòng từ cổng khách hàng của Free. Free cho phép tối đa 2 lần chuyển mỗi năm.

**Câu 11: Mã xác nhận eSIM là gì và tìm ở đâu?**
Một số hồ sơ eSIM có **mã xác nhận eSIM** bắt buộc – thường 4‑8 chữ số. Tìm trong email nhà mạng hoặc hướng dẫn kích hoạt. Nếu không thấy, hỏi nhà mạng của bạn.

**Câu 12: "eSIM not transferring to new phone" nghĩa là gì?**
Điều này thường có nghĩa là nhà mạng của bạn không hỗ trợ chuyển, mã QR đã hết hạn, eSIM cũ vẫn đang hoạt động, hoặc thiết bị mới bị khóa nhà mạng. Xóa eSIM cũ trước (nếu vẫn hiển thị), rồi thử lại. Xem Phần 7 cho bảng xử lý sự cố đầy đủ.

**Câu 13: Làm sao sửa lỗi "eSIM activation failed" sau khi chuyển?**
Kiểm tra kết nối Wi‑Fi, khởi động lại cả hai thiết bị, rồi thử lại. Nếu vẫn thất bại, dùng phương pháp nhập thủ công với địa chỉ SM‑DP+ từ email nhà mạng.

**Câu 14: Chuyển eSIM có hủy gói của tôi không?**
Không – chuyển eSIM chỉ di chuyển hồ sơ SIM sang thiết bị mới. Gói (và việc thanh toán) của bạn tiếp tục như trước. Để hủy gói, bạn phải liên hệ nhà mạng riêng.

**Câu 15: Tôi có thể chuyển eSIM nếu đã xóa nó khỏi điện thoại cũ không?**
Có, nhưng phức tạp hơn. Nếu bạn đã xóa eSIM trước khi bắt đầu chuyển, liên hệ nhà mạng và nhờ họ cấp lại eSIM dưới dạng mã QR mới. Họ có thể làm được điều này vì hồ sơ của bạn vẫn tồn tại trên máy chủ của họ.

**Câu 16: Cấp lại mã QR eSIM mất bao nhiêu tiền?**
Hầu hết nhà mạng cấp lại eSIM miễn phí (đặc biệt là gói trả sau). Một số nhà mạng trả trước hoặc MVNO có thể thu phí nhỏ ($5‑25). Hỏi trước khi yêu cầu cấp lại.

**Câu 17: Tôi có thể chuyển eSIM Vodafone sang thiết bị không phải Vodafone không?**
Có, miễn là thiết bị của bạn đã mở khóa và gói Vodafone của bạn cho phép chuyển eSIM. Vodafone hỗ trợ chuyển qua ứng dụng của họ ở hầu hết các quốc gia. Kiểm tra tùy chọn "eSIM transfer" trong ứng dụng Vodafone.

**Câu 18: Nếu tôi chạm giới hạn chuyển của nhà mạng thì sao?**
Một số nhà mạng giới hạn 3‑5 lần chuyển mỗi năm. Nếu bạn chạm giới hạn, liên hệ hỗ trợ nhà mạng – họ thường có thể đặt lại giới hạn hoặc cấp thủ công mã QR eSIM mới (bỏ qua hệ thống chuyển đổi).

**Câu 19: Tôi có thể chuyển hai eSIM cùng lúc (SIM kép) không?**
Có, nhưng bạn phải chuyển chúng **từng cái một**. Mỗi hồ sơ eSIM độc lập và phải được chuyển riêng bằng cùng quy trình. Nếu bạn có hai eSIM đang hoạt động trên thiết bị cũ, chuyển eSIM chính trước, rồi đến eSIM phụ.

**Câu 20: Chuyển eSIM và cấp lại eSIM khác nhau thế nào?**
Chuyển di chuyển hồ sơ hiện có của bạn sang thiết bị mới (giữ nguyên số và gói). Cấp lại tạo hồ sơ eSIM hoàn toàn mới cho cùng số điện thoại – hồ sơ cũ bị vô hiệu hóa vĩnh viễn. Cấp lại là phương án dự phòng khi nhà mạng không hỗ trợ chuyển.

---

## Kết luận

Khả năng chuyển eSIM giữa iPhone và Android mà không cần nhà mạng can thiệp là một **bước ngoặt của năm 2026**. Nó xóa bỏ điểm ma sát lớn cuối cùng khi đổi hệ sinh thái. Miễn là nhà mạng của bạn có trong danh sách được hỗ trợ và cả hai điện thoại đã cập nhật, bạn có thể chuyển số của mình trong chưa đầy một phút.

**Hãy nhớ**:
- Nếu nhà mạng của bạn không được hỗ trợ, phương án mã QR dự phòng vẫn hoạt động – chỉ cần một cuộc gọi điện thoại.
- Với eSIM du lịch, hãy xem chúng là dùng một lần; mua mới trên từng thiết bị.
- **Tuyệt đối không xóa eSIM cũ trước khi bắt đầu chuyển** – đây là sai lầm phổ biến nhất.
- Kiểm tra khóa nhà mạng trước khi bắt đầu – bắt buộc phải ghi "No SIM restrictions".
- Một số nhà mạng giới hạn số lần chuyển mỗi năm – kiểm tra trước khi bắt đầu.

Nếu bạn liên tục gặp **thông báo lỗi chuyển eSIM**, **[Hướng dẫn xử lý sự cố eSIM chuyên sâu (16 ca thực tế)](/faq/esim-deep-troubleshooting-guide-2026/)** của chúng tôi có các giải pháp nâng cao.

👉 **Chuyển sang gói du lịch?** Xem [eSIM cho Mỹ](/united-states-esim/) hoặc [eSIM cho châu Âu](/europe-esim/) khi quá trình chuyển hoàn tất.

👉 **Chưa chắc điện thoại mới của bạn có hỗ trợ eSIM không?** Kiểm tra **[danh sách tương thích đầy đủ](/compatibility/)** của chúng tôi trước khi bắt đầu.

👉 **Đang thử eSIM du lịch trên thiết bị mới?** Lấy **[eSIM dùng thử miễn phí của Roami](/free-esim/)** để xác nhận mọi thứ hoạt động.

---

*Thông tin dựa trên tài liệu chính thức của Apple và Android, tiêu chuẩn GSMA và hướng dẫn nhà mạng tính đến tháng 9 năm 2026. Tính năng và sự hỗ trợ của nhà mạng có thể thay đổi.*
## Nguồn tham khảo

- [GSMA — Đặc tả eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Thiết lập eSIM trên iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Thiết lập eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
