# eSIM 站点死链接分析报告（多语言内容 content/{de,ru,fr,zh-hant,it,es,ja,pt,tr,ko,id}）

> 生成日期：2026-08-28（已按正确模型修订）
> 扫描范围：`content/` 下 11 个非英语语言（de / ru / fr / zh-hant / it / es / ja / pt / tr / ko / id）

---

## 零、死链接判定模型（重要）

**内链前缀规则**：站内内链写成无前缀形式 `/blog/xxx/`、`/faq/xxx/` 是**正确**的——Hugo 渲染时会**自动为当前语言补上语言前缀**。

- 例：俄语正文里写 `/blog/europe-esim-provider-comparison/`，渲染后实际输出为 `/ru/blog/europe-esim-provider-comparison/`，**不是**死链。
- 因此，「漏写 `/lang/` 前缀」**不是问题**，**不需要补前缀**，也不构成死链。

**真正的死链只有一种**：语言 L 的正文里，链接指向的目标文章在 `content/L/` 下**根本不存在**（该语言没有这篇文章）。此时渲染器补前缀后仍指向一个不存在的页面 → 404。

本报告只统计并处理这一类。

---

## 一、结果总览

| 语言 | B 类死链目标（目标文章在该语言不存在） | 处理结果 |
|---|---|---|
| de | smartwatch | 已删除 ✓ |
| fr | smartwatch | 已删除 ✓ |
| it | smartwatch + samsung-galaxy | 已删除 ✓ |
| es | smartwatch + best-travel-esim + xiaomi + how-to-activar | 已删除 ✓ |
| pt | best-travel-esim + best-esa + samsung-galaxy | 已删除 ✓ |
| id | best-travel-esim + best-esa | 已删除 ✓ |
| tr | samsung-galaxy + uyumluluk + best-esa | 已删除 / 重指向 ✓ |
| ru / ja / ko / zh-hant | 无 B 类死链 | 无需处理 |

---

## 二、B 类死链清单（目标文章不存在）

| 死链目标 | 影响语言 | 说明 | 处理 |
|---|---|---|---|
| `/faq/smartwatch-esim-compatibility-list-2026/` | de(84) · es(85) · fr(5) · it(5) | 此文**仅**存在于 zh-hant，de/es/fr/it 无此文 → 404 | 删除（zh-hant 的 10 处合法引用保留） |
| `/best-travel-esim/` | de(1) · es(1) · pt(7) · id(7) | 全站不存在此文 → 404 | 删除 |
| `/faq/samsung-galaxy-esim-compatible/` | it(2) · pt(2) · tr(2) | 全站不存在此文 → 404 | 删除 |
| `/faq/xiaomi-esim-compatible/` | es(1) | 全站不存在此文 → 404 | 删除 |
| `/faq/how-to-activar-an-esim/` | es(1) | 全站不存在此文 → 404 | 删除 |
| `/faq/2026-best-esim-options-for-the-usa/` | pt(2) · id(2) · tr(3) | 此文**仅**存在于 de/es/fr/it/ru/zh-hant，pt/id/tr 无此文 → 404 | 删除（6 个有文语言的引用保留） |
| `/tr/uyumluluk/` | tr(1) | 带前缀但无此文 → 404 | 重指向 `/compatibility/` |

**合计约 200 处 B 类死链引用，已全部清除。**

---

## 三、修复结果（已核验）

最终 grep 核验（只统计「目标文章存在」的语言里应有的引用）：

| 目标 | 核验结果 |
|---|---|
| smartwatch | 仅 zh-hant（10 处，该语言有文）✓ |
| best-travel-esim | 全站清零 ✓ |
| samsung-galaxy-esim-compatible | 全站清零 ✓ |
| xiaomi-esim-compatible / how-to-activar-an-esim | 全站清零 ✓ |
| 2026-best-esim-options-for-the-usa | 仅 de(1)/es(2)/fr(6)/it(1)/ru(1)/zh-hant(1)（均**有**此文）✓ |
| uyumluluk | 死 slug `/tr/uyumluluk/` 已重指向 `/compatibility/` ✓ |

修改文件分布（含早前英文会话的 en=86）：

| 语言 | 文件数 |
|---|---|
| de | 85 |
| en | 86 |
| es | 87 |
| fr | 5 |
| id | 8 |
| it | 7 |
| pt | 12 |
| tr | 6 |

---

## 四、结论

1. **无前缀内链一律正确**（渲染器自动补语言前缀），未做任何改动。
2. **仅 B 类死链**（目标文章在该语言不存在）需要处理，已全部删除或重指向，并逐条核验通过。
3. 未执行 hugo 构建。

*本报告与 `dead-links-report-en.md`（英文）合并即构成全站死链接扫描的完整结果。*
