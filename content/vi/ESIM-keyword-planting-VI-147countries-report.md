# 越南语（vi-VN）国别页集群 · 优化与关键词植入报告

- **目录**：`C:\Users\27197\Desktop\country\`
- **范围**：147 个 `*-eSIM.md` 国别页（另有 16 个非国别页：区域 / 工具 / 法务页，另行跳过）
- **语种**：越南语（vi-VN）
- **日期**：2026-10-15
- **结论**：**门禁三件套全绿**，价格口径、不限量合规、语言/政治卫生、H2 去同构、关键词均已完成。

---

## 1. 基线现扫（开工实测，非套用上批）

| 项 | 实测 |
|---|---|
| 国别页数 | 147（判据 `stem.endswith('-eSIM')`） |
| 行尾 | **全部 LF**（本批为首次非 CRLF 批），UTF-8 无 BOM |
| `date` | 全部统一为 `2026-10-15T00:00:00+00:00` |
| 语言污染 | 0 西里尔 / 0 中文 / 0 CJK / 0 英文模板残留 |
| 关键词 | 现 12±（目标 16） |
| title/description 超限 | title 72 页 > 60；desc 121 页 > 158 |
| `seo.low/high_price` | **147 页三重复损坏**（如 `11.9911.9911.99`） |
| 无限量档 | **125/147 页有真实不限量档** |
| citation | 109 页 `mobileconnectivityindex`（GSMA），38 页无（因其无 `market_analysis`） |

---

## 2. 门禁结果（三件套）

| 门禁 | 关键指标 | 结果 |
|---|---|---|
| `price_guard.py` | `seo_ok=294` `claim_ok=533` | **P0=0 / P1=0 → PASS** |
| `check_spec_claims.py` | `scanned=147`（跳过无套餐表页 16） | **unsupported_claims=0 → exit 0** |
| `verify_yaml_pages.py --eol lf --only-suffix -eSIM --sensitive all` | A 编码/行尾 **PASS**；B YAML 可解析 **PASS**；C 禁用词/占位符 **PASS** | 见下 |

`verify` 明细：

- **D 表外价格**＝49 条，全部为竞品价 / 国际漫游价 / 税费信息项（非自家口径，合规保留）
- **E related_products**：完全相同列表组数 = **0**
- **F H2 去同构（掩码国名）**：`plans_title` / `activation_steps.title` / `reminders.title` / `faq.cat0.title` / `faq.desc` 五字段均 **21 变体 × 最高重复 7 页**
- **G citation**：`mobileconnectivityindex` ×109 / MISSING ×38（38 页原生无 `market_analysis`，按红线不新建）
- **H 敏感词全簇审计**：**TOTAL = 全 0**

---

## 3. 本批关键修复

### 3.1 价格 SSOT（P0 239 → 0，P1 276 → 0）

- **R2** `$X/GB` 归一为套餐最低单价（28 处）；`EC$` 等外币前置字母已排除
- **R4** `bắt đầu từ` 归一为 min（12 处）；2 处合法保留：竞品 Metfone、Seychelles 具体 5GB 档（$27.99）
- **R1** 子句重建（Brunei / Zambia）、**R3** `chỉ từ`、**R7/R8** 标题式、**Maldives** 特例（`$3.99/7天/300MB` → `$14.99/7天/1GB`）
- **正文具体套餐价校验**（23 处修正：14 改价 / 7 改时长 / 2 改规格），跨句误配已用 `[^$.]` 收紧
- **`seo.low_price` / `high_price` 修复**：147 页三重复损坏按 `plans_data` min/max 重写并还原缩进 → `seo_ok` 由 0 恢复至 294
  > 教训：`verify B`（YAML 可解析）**发现不了「字段移出层级」类损坏**，已补顶层键白名单扫描。

### 3.2 不限量两层合规

- 125/147 页有真实不限量档 → 宣称面正常保留
- 22 页（无真不限量档）宣称面 `không giới hạn` → `tốc độ cao` / `Nhiều mức dữ liệu`（41 处）
- **修复 `check_spec_claims.py` 适配 bug**：① `ev_unlimited()` 漏越南语词根；② `VI_UNL` 漏 `re.I` → 此前所有 `Không giới hạn` 被误判无据（`unsupported_claims=185`）；修复后 **=0**

### 3.3 语言 / 政治卫生

- 清除「翻墙 / 防火墙（Tường lửa）」叙事框架（China 红线），并处理 Turkey / 东南亚 / Sweden / PH 的审查-政治化表述（5 页 21 处）
- 全站 `fandom` citation 残留 **= 0**
- 品牌口径保持：正文 `Roami`、`modal.text_default=PhoneSIMGo`、`text_android=PhoneSIM`（按既定「忽略」处理，未改动）

### 3.4 H2 / 描述去同构

- 五字段各建 **21 变体池**，按页轮换 → 掩码国名后各字段最高重复 **≤7 页**
- 采用**引号感知替换**：识别单引号 / 双引号 / 纯标量三种体例，按原体例重发（内层转义或补引号），避免 `: ` 破坏 YAML
- **修复覆盖不全 bug**：步长与池长不互质（`gcd(7,21)=7`）导致 `activation_steps.title` 只有 3 个变体（49 页重复）；改为互质步长后恢复 21 变体，并加 `gcd` 断言防回归

### 3.5 关键词槽位收紧（依 vi-VN 真实采集）

- **16 词/页**，共 2352 条；**页内零重复**；跨页最高复用 3（仅城市名长尾）
- 依据真实自动补全，把每页低信号的 `… trực tuyến` 槽替换为高频词 **`sim du lịch <国名>`**（147/147 成功）

---

## 4. 关键词研究方法与采集结果

- 取词：Bing 自动补全 `osjson.aspx?market=vi-VN&setlang=vi`
- 模板 7 类 × ~150 国 ≈ 1070 seeds → **成功返回 655 seeds / 2361 条建议**
- 建议按国别相关性分层：**本国相关 own 413 / 泛化 generic 156 / 别国目的地 other 125**

**真实高频特征**：

1. `sim du lịch <国名>`——最高频（singapore 11 / thái lan 9 / nhật bản 7 次），且用 **`sim`** 词头而非 `eSIM`
2. 核心式 `<C> eSIM` / `eSIM <C>`——已全覆盖
3. FAQ 型问句——`hướng dẫn sử dụng esim`、`cách cài đặt esim`、`dùng esim có ổn định không`、`esim có tác dụng gì`（属 FAQ/H2 承接，非关键词层）
4. VN 本地运营商词（`vinaphone` / `fpt` / `vina`）——vi-VN locale 偏置，与外语国别页无关

> 结论：越南语的**国别交易词（mua / giá rẻ）真实搜索量低**，模板为主即可；唯一需补植的高频缺口是 **`sim du lịch <国名>`**，已完成。

---

## 5. 覆盖对账（关键词矩阵）

产物：`ESIM-keyword-matrix-VI-147countries.csv`（3046 行，utf-8-sig）

| 指标 | 数值 |
|---|---|
| 有采集建议的页 | 90 / 147 |
| 有「本国相关」建议的页 | 78 / 147 |
| 本国相关建议条数 | 413 |
| 语义覆盖：本国建议**全覆盖**页 | 28 |
| 语义覆盖：存在**长尾缺口**页 | 50 |

**缺口性质**（均为可解释项，非缺陷）：

- 泛化 FAQ 型问句 → 已由 FAQ（+3/页）与 H2 层承接
- VN 本地运营商词（vinaphone / fpt）→ 与外语国别页无关，不植
- 少量种子噪声（`congo-kinshasa` / `burkina faso simpsons`）→ 已用「别国目的地」列标出

矩阵列：`country_vi, stem, core_keyword, intent, keyword, source, relevance, in_planted`
- `intent`：核心 / 交易 / 比较 / 规格 / 信息 / 品牌 / 城市 / 其他
- `relevance`：own（本国）/ generic（泛化）/ other（别国目的地）/ planted（已植词）

---

## 6. 遗留与说明

- **Iceland-eSIM**：原文即缺 `activation_steps` / `faq_section` / `market_analysis`（属原生页面变体，同类于「原生无 market_analysis 页不新建」红线）→ **不新建**
- **FAQ 原生模板化**：本批新增句已保证掩码后唯一（最高重复 ≤3）；H2 用 21 变体池（≤7）
- **`hero.flag_image`**：原生首字母两码错配，仅在 `related_products` 内规避
- **related_products**：逐页签名唯一（唯一国旗池 + 轮换步长，0 自链）

---

## 7. 交付物

| 文件 | 说明 |
|---|---|
| `ESIM-keyword-matrix-VI-147countries.csv` | 越南语关键词矩阵（意图分层 + 相关性 + 覆盖标记） |
| `ESIM-keyword-planting-VI-147countries-report.md` | 本报告 |
