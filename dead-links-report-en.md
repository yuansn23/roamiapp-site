# eSIM 站点死链接分析报告（英文内容 content/en）

> 生成日期：2026-08-28
> 扫描范围：`content/en/`（全部 393 个 Markdown 文件）
> 扫描方式：按 Hugo 默认 URL 规则（文件名 urlize 小写化、`_index.md`→分区首页）重建全部有效 URL，再逐一比对内容中的内链（Markdown 链接、HTML `<a href>`、frontmatter `permalink:`/`link:` 字段），并单独核验静态资源（`static/`）与大小写。

---

## 一、结果总览

| 项 | 数量 |
|---|---|
| 有效内容 URL | 635 |
| **死链接目标（无对应页面）** | **3** |
| 大小写不匹配链接 | 0 |
| 缺失静态资源（图片/CSS/JS） | 0 |

**结论：英文内容共发现 3 个死链接目标，其中 2 个被大量文章引用（合计约 173 处），影响面较大。**

---

## 二、死链接详情

### 🔴 1. `/faq/2026-ultimate-guide-iphone-17-esim-activation-solutions/`（影响最大）

- **死因**：实际 FAQ 文件名为 `faq/2026-Ultimate-Guide-iPhone-16-eSIM-Activation-Solutions.md`，正确 slug 是 **`/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/`**（iPhone **16**，不是 17）。该文件的 `aliases:` 为空，没有任何重定向覆盖 `iphone-17` 这个地址，所以指向 iPhone-17 的链接全部 404。
- **引用数量**：88 处 / 86 个文件。
  - 85 处为各博客文章 frontmatter `recentPosts` 侧栏里的 `permalink:` 字段（站点内几乎所有「按国家分类」的博客文章都复用了同一套侧栏模板）。
  - 3 处为**正文/HTML 内联链接**（更紧急，用户可见）：
    - `blog/buy-germany-esim-guide.md:270` — 正文 `[iPhone 17 eSIM Complete Guide](...)`
    - `blog/buy-uk-esim-guide.md:289` — 正文 `[iPhone 17 eSIM Complete Guide](...)`
    - `compatibility.md:160` — 兼容性页 `description` 里的 `<a href="...">Set up eSIM on iPhone</a>`
- **修复建议**：
  - 首选（最快）：将所有 `2026-ultimate-guide-iphone-17-esim-activation-solutions` 批量替换为 `2026-ultimate-guide-iphone-16-esim-activation-solutions`；同时把 2 处正文锚文本「iPhone 17 eSIM Complete Guide」改为「iPhone 16 eSIM Complete Guide」。
  - 附带提醒：站点在 `compatibility.md` 等多处文案里大量提到「iPhone 17 / iPhone 17 Pro Max」，但现有 FAQ 文章主题是 iPhone 16，存在**命名不一致**，需单独决定是否补一篇 iPhone 17 文章。

### 🔴 2. `/faq/smartwatch-esim-compatibility-list-2026/`

- **死因**：`content/en/faq/` 下**根本不存在**这个文件，也没有任何 alias。链接指向空地址。
- **引用数量**：85 处 / 85 个文件，全部为博客文章 frontmatter `recentPosts` 侧栏 `permalink:` 字段（无正文内联引用）。
- **修复建议**：
  - 方案 A（推荐、零成本）：把该侧栏条目的 `permalink` 指向**已存在**的相关文章 `/faq/ipad-apple-watch-esim-support-guide/`（该文正好覆盖 Apple Watch eSIM）。
  - 方案 B：补写一篇 `smartwatch-esim-compatibility-list-2026` 文章。

### 🟡 3. `/best-travel-esim/`

- **死因**：`content/en/` 下没有 `best-travel-esim` 这个页面，也没有 alias。
- **引用数量**：1 处 — `blog/japan-esim-ultimate-guide.md:750`，正文链接 `[Best Travel eSIM Plans](/best-travel-esim/)`。
- **修复建议**：
  - 方案 A（推荐）：把链接改指向现有对比文章 `/blog/best-esim-for-international-travel-providers-compared/`（本次会话已创建）。
  - 方案 B：新建一个 `best-travel-esim` 落地页。

---

## 三、修复优先级建议

1. **立即修复**：死链接 1 和 2 的侧栏 `permalink`（共 170 处），用一条批量替换即可覆盖绝大多数文件。
2. **顺手修复**：3 处正文/HTML 内联死链接（`buy-germany`、`buy-uk`、`compatibility`）+ 死链接 3（`japan-esim-ultimate-guide`）。
3. **待决策**：iPhone-16 vs iPhone-17 的命名统一、smartwatch 文章是否需要补写。

---

## 四、已排查确认「无问题」的部分

- **大小写**：全部内链均已小写，无大小写不匹配（符合之前「链接必须小写」的要求）。
- **静态资源**：`/img/uk-esim/1.jpg`、`/img/us-esim/2.jpg`、`/img/us-esim/3.jpg` 等均真实存在于 `static/`，非死链。
- **导航/页脚/面包屑 URL**：`/plans/`、`/compatibility/`、`/free-esim/`、`/app/`、`/faq/`、`/blog/`、`/carriers/`、`/asia-esim/`、`/europe-esim/`、`/africa-esim/`、`/north-america-esim/`、`/south-america-esim/`、`/middle-east-esim/`、`/about-us/`、`/refund/`、`/contact/`、`/privacy/`、`/terms/` 全部映射到已存在的内容文件，无死链。

---

*本报告仅覆盖英文 `content/en`。如需继续扫描其他语言（`pt`/`de`/`fr`/`es`/`it`/`ja`/`zh-hant`/`ru`/`tr`/`ko`/`id`），可继续。
