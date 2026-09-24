---
title: "Cách kích hoạt eSIM trên iOS và Android"
h1_title: "Cách kích hoạt eSIM trên iOS và Android (từng bước)"
description: "Hướng dẫn từng bước kích hoạt eSIM trên iPhone và Android: mã QR, nhập tay hoặc ứng dụng nhà mạng, cùng các cách sửa khi kích hoạt thất bại."
keywords: ["eSIM activation", "how to activate eSIM", "activate eSIM iPhone", "Android eSIM", "eSIM QR code", "eSIM manual entry", "eSIM troubleshooting", "travel eSIM", "eSIM setup iPhone", "add eSIM to iPhone"]
date: 2026-09-14T00:00:00Z
lastmod: 2026-09-14T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true
image: "/img/faq/how-to-activate-esim.webp"
image-1: "/img/faq/how-to-activate-esim-1.jpg"
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
  title: "Nhận eSIM miễn phí"
  icon: "🎁"
  item_suffix: "eSIM miễn phí"
  item_subtitle: "eSIM miễn phí"
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
    - question: "Cách kích hoạt eSIM trên iPhone (mọi dòng máy)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Danh sách tương thích eSIM mới nhất"
      url: "/compatibility/"
---


> **Lưu ý của biên tập viên:** Kích hoạt một eSIM mất khoảng năm phút — bạn quét mã QR hoặc nhập địa chỉ SM-DP+ rồi để hồ sơ tải xuống. Các bước dưới đây chính là những bước đội hỗ trợ của chúng tôi sử dụng, đã được kiểm tra trên iOS 17/18 và Android 13/14/15. Hãy làm theo đường đi phù hợp với điện thoại của bạn và bạn sẽ lên mạng trước khi cất cánh.

**Tóm tắt ngay từ đầu:** Kích hoạt eSIM nghĩa là tải một hồ sơ nhà mạng kỹ thuật số về điện thoại của bạn. Dù bạn dùng hãng nào, công thức đều giống nhau: một chiếc điện thoại đã mở khóa, kết nối Wi-Fi ổn định, và một mã QR (hoặc thông tin nhập tay) từ nhà cung cấp. Mở cài đặt di động, chạm "Add eSIM", quét hoặc gõ, rồi chờ khoảng hai phút.

Nếu đây là lần đầu tiên của bạn, hướng dẫn [eSIM là gì?](/faq/what-is-esim/) của chúng tôi giải thích công nghệ này, còn [Kích hoạt eSIM là gì?](/faq/what-is-esim-activation-and-how-does-it-work/) giải thích những gì thực sự diễn ra hậu trường khi bạn quét mã.

> **Đang dùng iPhone?** Trang này bao gồm cả hai nền tảng, nhưng hướng dẫn dành cho iOS đi sâu hơn. Để xem khác biệt giữa các phiên bản iOS, Quick Transfer và việc đăng ký lại iMessage/FaceTime, hãy đọc [Cách kích hoạt eSIM trên iPhone](/faq/how-to-activate-esim-on-iphone/). Dùng iPhone 16 và gặp lỗi "Unable to Activate"? Xem [hướng dẫn eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/).

## Điện thoại của bạn có hỗ trợ eSIM không?

Một phép kiểm tra 10 giây: gọi `*#06#` và tìm một **EID** 32 chữ số. Nếu có, bạn đã sẵn sàng. Để xem danh sách đầy đủ theo từng thiết bị — mọi hãng Android và các iPhone cũ — hãy xem [danh sách tương thích eSIM đầy đủ](/compatibility/).

## Danh sách kiểm tra trước khi kích hoạt eSIM

Hầu hết các lỗi kích hoạt đều có thể phòng ngừa trước khi bạn quét bất cứ thứ gì. Hãy chạy sáu phép kiểm tra này trước.

| Kiểm tra | Đạt khi |
|---|---|
| Điện thoại đã mở khóa | iPhone: Settings > General > About > Carrier Lock ghi "No SIM restrictions" |
| Wi-Fi ổn định | Đã kết nối Wi-Fi ở nhà hoặc văn phòng, không phải sân bay hay khách sạn |
| Biết mã khóa màn hình | Bạn có thể gõ mã khóa màn hình khi được yêu cầu |
| Mã QR trong tầm tay | Email đã mở trên laptop, máy tính bảng, hoặc bản in |
| Màn hình đủ sáng | Thiết bị hiển thị mã QR đang ở độ sáng 100% |
| Có EID | `*#06#` trả về một EID |

Bỏ qua bất kỳ mục nào trong số này, khả năng cao bạn sẽ rơi vào hàng chờ xử lý sự cố. Ba nguyên nhân thất bại phổ biến nhất, theo thứ tự: điện thoại bị khóa nhà mạng, Wi-Fi yếu giữa chừng khi tải, và quét bằng ứng dụng Camera thay vì qua phần Cài đặt.

### Những việc chuẩn bị đáng làm trước khi quét

Bảng phía trên nói về các *phép kiểm tra*. Danh sách này nói về các *hành động* — những việc đáng làm trước khi bạn chạm "Add eSIM" để không bao giờ phải lúng túng giữa chừng khi cài đặt.

1. **Lưu mã QR vào Photos.** Chụp màn hình hoặc tải ảnh về, để bạn có thể dùng "Choose Photo" thay vì phải hướng camera vào một màn hình khác. Nếu mã nằm trong email, điều này cũng có nghĩa bạn không phải mở lại hộp thư ngay tại chỗ.
2. **Chụp màn hình địa chỉ SM-DP+ và mã kích hoạt.** Hai chuỗi ký tự này là phương án dự phòng offline của bạn. Khi đã lưu chúng, một mã QR hỏng cũng không thể cản bạn.
3. **Tải ứng dụng của nhà cung cấp và đăng nhập.** Roami, Airalo và Holafly đều cho phép cài đặt một chạm ngay trong ứng dụng — nhưng chỉ khi bạn đã đăng nhập trước khi rời khỏi một đường Wi-Fi tử tế.
4. **Sạc điện thoại trên 50%.** Việc tải hồ sơ rất nhỏ, nhưng một chiếc máy cạn pin giữa chừng khi cài có thể để lại một hồ sơ ghi dở, mà bạn phải xóa rồi cài lại.
5. **Nhớ mã khóa màn hình của mình.** Cả iOS lẫn Android đều yêu cầu mã để cho phép cài đặt. Nếu bạn đã bao lâu chỉ dùng Face ID hay vân tay, hãy gõ thử mã một lần để chắc chắn bạn còn nhớ.
6. **Xác nhận điện thoại đã mở khóa.** Trên iPhone: Settings > General > About > Carrier Lock. Trên Android: hỏi nhà mạng, hoặc thử SIM của bạn bè từ mạng khác.
7. **Cài trên Wi-Fi nhà, không phải Wi-Fi sân bay.** Bạn có thể cài từ nhiều tuần trước chuyến đi; gói cước sẽ ở trạng thái chưa hoạt động cho đến khi điện thoại của bạn kết nối mạng tại điểm đến.
8. **Quyết định đường nào làm việc gì.** Nếu bạn giữ SIM ở nhà, hãy lên kế hoạch ngay: eSIM du lịch lo dữ liệu, SIM ở nhà lo cuộc gọi và tin nhắn. Chúng tôi đề cập điều này bên dưới.

## Cách kích hoạt eSIM trên iPhone

Mọi iPhone kể từ XS đều đi theo một đường duy nhất. Vào **Settings > Cellular**, chạm **Add eSIM** (hoặc **Add Data Plan**), chọn **Use QR Code**, và giữ điện thoại chắc tay cách mã khoảng 15 cm. Khi "Cellular Setup Complete" hiện ra, bạn đã xong — việc tải xuống thường mất 30–60 giây.

Không có camera? Chạm **Enter Details Manually** và dán địa chỉ SM-DP+ cùng mã kích hoạt từ email của nhà cung cấp.

Để xem quy trình được thiết kế lại của iOS 18, Quick Transfer giữa các iPhone, và việc đăng ký lại iMessage/FaceTime sau khi đổi đường truyền, hãy xem [Cách kích hoạt eSIM trên iPhone](/faq/how-to-activate-esim-on-iphone/).

## Cách kích hoạt eSIM trên Android

Tên menu thay đổi theo hãng, nhưng mọi đường đi eSIM trên Android đều là "mở cài đặt, tìm Add eSIM, quét hoặc gõ".

| Hãng | Đường đến "Add eSIM" |
|---|---|
| Samsung Galaxy (One UI 5–7) | Settings > Connections > SIM Manager > Add eSIM |
| Google Pixel (Android 13–15) | Settings > Network & internet > dấu + cạnh SIMs > Download a SIM instead? |
| OnePlus (OxygenOS 13–14) | Settings > Wi-Fi & Network > SIM & Network > Add eSIM |
| Xiaomi (MIUI/HyperOS) | Settings > SIM Cards & Mobile Networks > Add eSIM |
| Motorola | Settings > Network & Internet > Mobile Network > Add Carrier |
| Hãng khác | Tìm "eSIM" trong Settings |

Nếu không thấy tùy chọn này, mẫu máy của bạn nhiều khả năng thiếu phần cứng eSIM — hãy xác nhận với [danh sách tương thích thiết bị](/compatibility/).

### Nhập tay trên Android

Khi mã QR không quét được, hãy tìm "Enter activation code manually" hoặc "Need help?" trên màn hình Add eSIM, rồi gõ địa chỉ SM-DP+ và mã kích hoạt. Cách này hoạt động trên mọi điện thoại Android có eSIM và là phương án dự phòng đáng tin cậy nhất.

### Đường đi menu Android, từng hãng một

Bảng phía trên đưa bạn đến đích; đây là chi tiết bên dưới nó. Mỗi hãng gọi cùng một tính năng bằng tên hơi khác nhau, và đường đi cũng dịch chuyển đôi chút giữa các phiên bản phần mềm.

| Hãng & phần mềm | Đường đi chính xác | Ghi chú |
|---|---|---|
| Samsung (One UI 7) | Settings > Connections > SIM Manager > **Add eSIM** | One UI 6.0 đổi "SIM card manager" thành "SIM Manager"; các bản One UI 5.x cũ hơn vẫn ghi "SIM card manager". |
| Samsung (One UI 5) | Settings > Connections > **SIM card manager** > Add mobile plan | Nhãn đổi thành "Add mobile plan" thay vì "Add eSIM". |
| Google Pixel (Android 15) | Settings > Network & internet > **SIMs** > Add SIM > Download a SIM instead? > Next | Pixel là hãng nhất quán nhất — đường đi gần như không đổi từ Android 12. |
| Google Pixel (Android 12) | Settings > Network & internet > Mobile network > **Add eSIM** | Các Pixel cũ dùng nhãn đơn giản "Add eSIM" trước khi màn hình SIMs ra đời. |
| Xiaomi / Redmi / POCO (HyperOS) | Settings > **SIM cards & mobile networks** > eSIM > Add eSIM | eSIM chỉ có trên một số mẫu bản quốc tế (Xiaomi 13/13T, 14/14T, 15); đa số Redmi/POCO bỏ phần cứng eSIM. |
| OnePlus (OxygenOS 14) | Settings > Mobile network > **SIM & network** > Add eSIM | OxygenOS 13 giấu nó dưới "Wi-Fi & network"; 14 dọn gọn thành "Mobile network". |
| Motorola | Settings > Network & internet > Mobile network > **Add carrier** | Chỉ một số mẫu nhất định (razr và vài máy Edge) có eSIM; nhiều mẫu Moto G thì không. |
| Honor / Oppo / Vivo / Realme | Tìm "eSIM" trong Settings | Hỗ trợ rải rác và tùy mẫu — kiểm tra [danh sách tương thích eSIM](/compatibility/) trước khi giả định máy có. |

Nếu bạn không thấy mục nào trong số này, hãy tìm "eSIM" trong thanh tìm kiếm của Settings. Nếu chẳng hiện gì cả, điện thoại gần như chắc chắn thiếu phần cứng eSIM — chi tiết đầy đủ ở cấp mẫu máy nằm trong [hướng dẫn các hãng Android có eSIM](/faq/android-esim-other-brands-deep-guide/) và [danh sách thiết bị đầy đủ](/compatibility/).

## Tìm địa chỉ SM-DP+ và mã kích hoạt ở đâu

Nhập tay cần hai chuỗi ký tự nằm trong email xác nhận hoặc ứng dụng của nhà cung cấp.

| Nhà cung cấp | Tìm ở đâu |
|---|---|
| Roami | Email xác nhận — "Manual installation details" / "SM-DP+ Address" |
| Airalo | Ứng dụng: gói cước > Details > Manual installation |
| Holafly | Email xác nhận — "Manual installation" |
| Nomad | Ứng dụng: eSIM details > Manual install |
| Google Fi | Không hỗ trợ nhập tay — dùng ứng dụng Fi |
| US Mobile | Ứng dụng: Account > eSIM > Manual activation code |
| T-Mobile (Mỹ) | Email xác nhận hoặc ứng dụng T-Mobile |

Hãy chụp màn hình những thông tin này trước khi bay — nếu hạ cánh mà không có Wi-Fi, bạn sẽ không thể tra cứu.

## Mỗi nhà cung cấp lớn gửi eSIM cho bạn như thế nào

"Kích hoạt" mang ý nghĩa hơi khác nhau tùy người bán gói cước cho bạn. Đây là điều bạn nên mong đợi từ năm nhà cung cấp eSIM du lịch phổ biến nhất, để bạn biết chính xác hộp thư của mình sẽ nhận được gì và cách bạn sẽ cài đặt.

| Nhà cung cấp | Phương thức cài | Email sẽ có gì | Thời gian gửi điển hình |
|---|---|---|---|
| Roami | Một chạm qua ứng dụng **hoặc** mã QR / nhập tay | Mã QR cộng khối "manual installation" (địa chỉ SM-DP+ + mã kích hoạt) | Tức thì — thường dưới 2 phút |
| Airalo | Một chạm qua ứng dụng **hoặc** mã QR ngay trong ứng dụng | Biên nhận đơn hàng + hướng dẫn cài; bản thân mã QR nằm trong ứng dụng dưới My eSIMs > Details | Tức thì (mã QR được tạo ngay trên màn hình gói cước) |
| Holafly | Một chạm qua ứng dụng **hoặc** mã QR trong email | Mã QR cộng chi tiết gói không giới hạn dữ liệu của bạn | Tức thì; nhiều gói tự kích hoạt ngay khi bạn kết nối mạng đối tác |
| Nomad | Một chạm qua ứng dụng **hoặc** mã QR / nhập tay | Mã QR + mã kích hoạt | Tức thì, với một số gói chỉ bắt đầu tính thời hạn từ lần dùng đầu tiên |
| Saily | Chỉ cài qua ứng dụng (ứng dụng Saily) | Biên nhận + một liên kết để mở ứng dụng Saily | Tức thì — hồ sơ được đẩy qua ứng dụng, không phải mã QR |

Quy luật chung: cả năm đều gửi mã QR hoặc hồ sơ gần như ngay lập tức, và cách cài nhanh nhất luôn là ứng dụng riêng của nhà cung cấp. Điểm khác biệt nằm ở việc mã QR *nằm ở đâu* (email hay ứng dụng) và *khi nào* đồng hồ của gói bắt đầu chạy (lúc cài hay lúc kết nối đầu tiên). Nếu bạn đang phân vân, email của Roami bao gồm cả mã QR lẫn chuỗi nhập tay — đây là bộ cài "bao dung" nhất cho người mới.

## Kích hoạt qua ứng dụng nhà mạng

Các nhà cung cấp như Roami, Airalo và Holafly cho phép bạn bỏ qua mã QR hoàn toàn. Tải ứng dụng, mở gói cước đã mua, chạm **Install** hoặc **Activate**, và cho phép điện thoại thêm gói di động. Thao tác giống hệt trên iPhone lẫn Android, và đây là con đường sạch sẽ nhất cho người mới, vì ứng dụng không thể quét chính màn hình của nó.

## Bạn nên dùng phương pháp kích hoạt eSIM nào?

Bạn có ba lối vào, và chúng không thể thay thế nhau trong mọi tình huống. Hãy chọn theo bối cảnh.

| Phương pháp | Tốt nhất khi | Lưu ý |
|---|---|---|
| Ứng dụng nhà mạng (một chạm) | Bạn là người mới muốn không phải vọc gì cả | Cần cài ứng dụng và đăng nhập trước khi rời khỏi Wi-Fi tốt |
| Mã QR | Mã nằm trên thiết bị khác hoặc bản in | Không thể quét mã hiển thị trên chính màn hình máy; thiếu sáng rất bất lợi |
| Nhập tay | Mã QR bị hỏng, hoặc mã đang hiển thị trên chính máy bạn đang kích hoạt | Chuỗi SM-DP+ dài và phân biệt chữ hoa/thường — dán vào, đừng gõ lại |

Lời khuyên của chúng tôi: dùng đường một chạm qua ứng dụng của nhà cung cấp cho eSIM đầu tiên của bạn, và giữ ảnh chụp màn hình của *cả* mã QR lẫn chuỗi nhập tay làm dự phòng. Ứng dụng là nhanh nhất, nhưng chuỗi nhập tay là thứ duy nhất không thể làm bạn thất vọng khi mọi thứ khác đổ bể.

## Cách xác nhận kích hoạt đã thành công

Đừng tin riêng thông báo "Cellular Setup Complete". Hãy xác minh ba thứ:

1. **Thanh trạng thái** — bạn thấy cột sóng (và bộ thứ hai nếu cả hai đường đều bật).
2. **Cài đặt** — đường eSIM hiển thị "On" hoặc "Active", không phải "No Service".
3. **Thử nghiệm thực tế** — tắt Wi-Fi, đặt eSIM làm đường dữ liệu, và mở một trang web.

Hãy cho máy đến hai phút để đăng ký lên mạng địa phương. Nếu vẫn hiển thị "Searching", xem phần chỉ dẫn xử lý sự cố bên dưới.

## Kích hoạt thực tế mất bao lâu?

Ngắn gọn: việc *tải xuống* mất dưới hai phút, nhưng *kết nối lần đầu* có thể mất đến 15 phút sau khi bạn hạ cánh. Đây là hai việc khác nhau, và nhiều người hay nhầm lẫn.

| Giai đoạn | Chuyện gì đang xảy ra | Thời gian điển hình |
|---|---|---|
| Gửi mã QR / hồ sơ | Hệ thống của nhà cung cấp tạo eSIM của bạn và gửi qua email | Vài giây đến ~15 phút khi hệ thống quá tải |
| Tải hồ sơ | Điện thoại của bạn kéo hồ sơ từ máy chủ SM-DP+ | 30–60 giây, tối đa 2 phút |
| Đăng ký mạng lần đầu | Khi đến nơi, điện thoại quét các mạng địa phương và bắt tay với nhà mạng đối tác | 2–15 phút, thường dưới 5 |
| Dữ liệu chạy | Bạn mở một trang web với Data Roaming đang BẬT | Ngay lập tức sau khi đăng ký |

Vì sao một số nhà mạng đăng ký chậm hơn những hãng khác? Ba lý do. **Các nhà mạng nhỏ cấp phép theo lô** — hồ sơ của bạn về mặt kỹ thuật ở trạng thái "pending" cho đến khi hệ thống của họ xử lý nó ở phía backend. **Mạng đối tác bị nghẽn** — hạ cánh ở một sân bay nhộn nhịp lúc 6 giờ chiều nghĩa là điện thoại của bạn là một trong hàng nghìn máy đăng ký cùng lúc. Và **một số gói chỉ bắt đầu tính giờ từ kết nối đầu tiên**, nên cuộc bắt tay mạng được cố ý trì hoãn đến phiên dữ liệu đầu tiên. Không điều nào trong số này là lỗi — chỉ là sự khác biệt giữa "đã cài" và "đã hoạt động".

## Những sai lầm phá hỏng việc kích hoạt eSIM

| Sai lầm | Vì sao gây hỏng | Cách sửa |
|---|---|---|
| Quét bằng ứng dụng Camera | Nhận ra mã nhưng không cài gì cả | Hãy đi qua Settings > Add eSIM trước |
| Kích hoạt trên Wi-Fi yếu | Tải xuống bị ngắt và làm hỏng hồ sơ | Cài ở nhà trước khi đến sân bay |
| Xóa eSIM để "làm mới" | Phá hỏng vĩnh viễn hồ sơ và toàn bộ dữ liệu còn lại | Tuyệt đối không xóa trừ khi gói đã hết hạn |
| Chờ đến khi hạ cánh mới cài | Không có Wi-Fi để tải hồ sơ | Cài trước khi khởi hành; nó giữ trạng thái chưa hoạt động đến khi bạn đến nơi |
| Để Data Roaming tắt | Sóng đầy cột, internet bằng không | Bật Data Roaming cho eSIM du lịch sau khi hạ cánh |
| Quên mã khóa màn hình | Cài đặt bị treo giữa chừng | Xác nhận mã khóa trước khi bắt đầu |
| Quét mã trên chính màn hình máy | Không thể hướng camera vào chính nó | Lưu vào Photos rồi dùng "Choose Photo", hoặc dùng nhập tay |

## Làm gì khi kích hoạt eSIM bị kẹt

Nếu bạn đang ngồi nhìn "Activating…" hoặc "Searching", hãy làm theo thang bậc này từ trên xuống dưới — nó xử lý được phần lớn các trường hợp kẹt mà không cần nhờ bộ hỗ trợ.

1. **Khởi động lại điện thoại.** Nghe có vẻ đơn giản quá, nhưng một lần khởi động sạch sẽ kích hoạt lại cuộc bắt tay mạng và giải thoát hồ sơ bị kẹt trong một nửa số trường hợp.
2. **Bật Airplane Mode trong 30 giây rồi tắt.** Điều này buộc điện thoại quét lại các mạng địa phương từ đầu.
3. **Quét lại mã QR.** Xóa hồ sơ đang *chờ* (chưa hoạt động) và thêm lại trên một mạng mạnh hơn. Tuyệt đối không xóa gói đang hoạt động bình thường.
4. **Gõ lại địa chỉ SM-DP+ thật chính xác.** Nhập tay phân biệt chữ hoa/thường và cả khoảng trắng — chỉ một ký tự thừa cũng đưa điện thoại đến một máy server chết. Dán vào, đừng gõ lại.
5. **Bật Data Roaming cho eSIM du lịch.** "No Service" dù sóng đầy cột gần như luôn là lỗi này.
6. **Chuyển sang Wi-Fi ổn định.** Nếu việc tải xuống cứ bị ngưng giữa chừng, bạn có thể đang có một hồ sơ ghi dở, và chỉ cài lại sạch sẽ được trên một kết nối tốt.

Nếu lỗi là một mã cụ thể — "Invalid QR code," "Cellular Plan Cannot Be Added," vấn đề APN — đó là lãnh địa cần xử lý từng lỗi một, và các cách sửa (kèm giá trị APN) nằm trong [Hướng dẫn xử lý sự cố eSIM chuyên sâu](/faq/esim-deep-troubleshooting-guide-2026/).

## Kích hoạt trên máy tính bảng Android hoặc bộ phát sóng di động

eSIM không chỉ dành cho điện thoại. **Máy tính bảng Android có LTE** — như Samsung Galaxy Tab dòng S hay Lenovo bản cellular — dùng đúng đường đi như các "anh em" điện thoại: Settings > Connections (hoặc Network & internet) > SIM Manager > Add eSIM. Nếu máy tính bảng của bạn có EID khi gọi `*#06#`, nó có thể nhận eSIM.

**Bộ phát sóng di động (MiFi)** thì hỗn hợp hơn. Đa số bộ phát du lịch vẫn dùng thẻ SIM vật lý, nhưng một số mẫu cao cấp — như dòng Netgear Nighthawk M6 và vài mẫu ZTE, GlocalMe — hỗ trợ eSIM. Nếu bạn đang gắn mạng cho cả gia đình, một eSIM cho bộ phát có thể là giải pháp gọn gàng, dù thường bạn sẽ có nhiều linh hoạt hơn (và gói rẻ hơn) nếu đặt eSIM lên một chiếc điện thoại rồi chia sẻ điểm phát sóng của nó.

**iPad và Apple Watch** bản cellular của Apple đi theo luật riêng — Watch nhân bản một đường truyền của iPhone thay vì nhận eSIM du lịch trực tiếp. Điều này được đề cập trong [hướng dẫn eSIM cho iPad & Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

## Những lầm tưởng phổ biến về kích hoạt eSIM

Vài điều mọi người tin về việc kích hoạt nhưng hoàn toàn không đúng:

- **"Tôi cần gọi cho nhà mạng để kích hoạt."** Không — cài một hồ sơ không cần cuộc gọi nào. Bạn chỉ cần liên hệ nhà mạng để *cấp lại* hồ sơ sau khi xóa nó hoặc đổi máy.
- **"Tôi phải ở điểm đến mới kích hoạt được."** Bạn cài ngay ở nhà; gói chỉ trở nên hoạt động khi điện thoại của bạn kết nối mạng tại điểm đến.
- **"Xóa eSIM sẽ đặt lại gói cước của tôi."** Xóa sẽ phá hủy hồ sơ vĩnh viễn — và mã QR chỉ dùng một lần, nên bạn sẽ cần một gói hoàn toàn mới.
- **"Tôi có thể chia sẻ một eSIM cho hai điện thoại."** Không — một hồ sơ chỉ sống trên một thiết bị tại một thời điểm. Bạn thường có thể *di chuyển* nó giữa các máy, nhưng không thể chạy cùng một hồ sơ trên hai máy cùng lúc.
- **"eSIM chậm hơn SIM vật lý."** Thông tin xác thực là như nhau; không có khác biệt tốc độ nào cả. Tốc độ dữ liệu của bạn đến từ mạng và gói cước, không phải từ định dạng SIM.

## Mọi thứ khác nằm trên trang riêng của nó

Để hướng dẫn này tập trung, các chủ đề liên quan có các bài hướng dẫn riêng:

- **Xử lý các lỗi cụ thể** ("Invalid QR code," kẹt "Activating," "No Service," cài đặt APN) → [Hướng dẫn xử lý sự cố eSIM chuyên sâu](/faq/esim-deep-troubleshooting-guide-2026/)
- **Chuyển eSIM sang máy mới** (iOS sang iOS, Android sang Android, chéo nền tảng) → [Chuyển eSIM giữa iPhone và Android](/faq/how-to-transfer-esim-between-iphone-and-android/)
- **Dùng hai đường cùng lúc** (dual SIM / DSDS) → [Trung tâm tương thích eSIM iPhone](/faq/iphone-11-esim-compatible/)
- **eSIM cho iPad và Apple Watch** → [Hướng dẫn eSIM iPad & Apple Watch](/faq/ipad-apple-watch-esim-support-guide/)
- **Nhà mạng và thiết bị nào hỗ trợ eSIM** → [danh sách tương thích đầy đủ](/compatibility/)

## Câu hỏi thường gặp

**Kích hoạt eSIM có mất phí không?**
Không. Nhà mạng không thu phí để quét và cài một hồ sơ — bạn chỉ trả tiền cho gói dữ liệu. Bất kỳ ai thu "phí kích hoạt" đều là ngoài thông lệ bình thường.

**Tôi có thể kích hoạt eSIM trước chuyến đi không?**
Được, và bạn nên làm vậy. Cài ở nhà trên Wi-Fi tin cậy; gói giữ trạng thái chưa hoạt động cho đến khi điện thoại của bạn kết nối mạng tại điểm đến. Chỉ nhớ bật Data Roaming sau khi hạ cánh.

**Kích hoạt eSIM mất bao lâu?**
Việc tải hồ sơ mất dưới hai phút. Kết nối mạng địa phương lần đầu có thể mất đến 10–15 phút tùy sóng. Vượt quá vậy thì khởi động lại điện thoại.

**Tôi có cần Wi-Fi để kích hoạt eSIM không?**
Cho lần tải hồ sơ đầu tiên thì có — hồ sơ đến từ máy chủ SM-DP+ bảo mật của nhà cung cấp, và tín hiệu di động yếu sẽ không tải được một cách đáng tin cậy. Cài trên Wi-Fi nhà trước khi rời đi, và gói sẽ "ngủ" cho đến khi bạn hạ cánh.

**Tôi có thể giữ bao nhiêu eSIM trên điện thoại, và có thể chuyển đổi giữa chúng không?**
Hầu hết điện thoại hiện đại lưu được tám hồ sơ eSIM trở lên, dù chỉ một hoặc hai có thể *hoạt động* cùng lúc. Bạn có thể đổi hồ sơ nào đang hoạt động ngay trên cùng màn hình Cài đặt mà bạn dùng để thêm chúng — rất tiện cho chuyến đi nhiều quốc gia.

**Quét mã QR và nhập tay khác nhau thế nào?**
Quét mã QR là đường chuẩn — nhanh hơn và khó gõ sai hơn. Nhập tay (địa chỉ SM-DP+ + mã kích hoạt) là phương án dự phòng hiệu quả khi camera hoặc mã gặp trục trặc.

**Tôi có thể gọi điện và nhắn tin với eSIM chỉ dữ liệu không?**
Một eSIM du lịch chỉ dữ liệu mang internet nhưng không có số điện thoại, nên nó không thể gọi thoại hay gửi SMS truyền thống. Bạn vẫn giữ khả năng liên lạc trên số ở nhà (qua Wi-Fi Calling) trong khi eSIM du lịch lo dữ liệu — đa số du khách đều dùng cách này.

**eSIM của tôi kẹt ở "Activating" — tôi nên chờ bao lâu?**
Tối đa 10–15 phút khi đến nơi, đặc biệt ở sân bay đông đúc. Nếu sau đó vẫn kẹt, khởi động lại điện thoại, bật Airplane Mode trong 30 giây, hoặc xóa hồ sơ đang chờ rồi quét lại trên Wi-Fi mạnh hơn.

**Tôi có cần bật Data Roaming cho eSIM du lịch không?**
Có — eSIM du lịch kết nối mạng qua các nhà mạng đối tác, nên Data Roaming phải BẬT cho đường đó. Điều này không phát sinh phí roaming; đó chỉ đơn giản là cách kết nối vận hành.

**Địa chỉ SM-DP+ nghĩa là gì?**
SM-DP+ (Subscription Manager – Data Preparation Plus) là máy chủ bảo mật gửi hồ sơ eSIM của bạn. Trong nhập tay, nó báo cho điện thoại biết cần tải hồ sơ từ đâu.

**Tôi có thể dùng eSIM du lịch với Wi-Fi Calling không?**
Có — Wi-Fi Calling thuộc về đường *ở nhà* của bạn, không phải eSIM du lịch. Hãy giữ Wi-Fi Calling bật cho số ở nhà và nó sẽ hoạt động qua dữ liệu của eSIM du lịch (hoặc bất kỳ Wi-Fi nào), nhờ vậy bạn vẫn giữ khả năng liên lạc mà không tốn phí roaming.

**Nếu sau khi kích hoạt tôi không có chút sóng nào thì sao?**
Không có cột sóng nào cả thường nghĩa là bạn nằm ngoài vùng phủ sóng của mạng đối tác, hoặc điện thoại chưa đăng ký xong. Bật Airplane Mode trong 30 giây, xác nhận Data Roaming đang BẬT cho eSIM du lịch, và ra ngoài nếu bạn đang ở trong nhà. "No Service" dai dẳng là vấn đề APN hoặc cấp phép — xem [hướng dẫn xử lý sự cố chuyên sâu](/faq/esim-deep-troubleshooting-guide-2026/).

👉 **Sẵn sàng tự trải nghiệm?** Hãy lấy một [eSIM miễn phí](/free-esim/) và chạy qua các bước này hoàn toàn không rủi ro.

Sau đó khám phá những điểm đến phổ biến nhất của chúng tôi:

- [eSIM cho nước Mỹ](/united-states-esim/)
- [eSIM cho Nhật Bản](/japan-esim/)
- [eSIM cho châu Âu](/europe-esim/)

---

*Dựa trên tài liệu của Apple, Google và GSMA. Cập nhật: tháng 9 năm 2026.*

## Nguồn tham khảo

- [GSMA — đặc tả eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)
