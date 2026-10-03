# es/carriers 99 篇西语文章 H2/H3 标题审查报告

> 审查范围：`esim/content/es/carriers/` 全部 99 篇国家运营商指南（`_index.md` 无 H2/H3，不计入）。
> 只审查标题，未改动任何文章内容。审查日期：2026-09-28。

## 一、总览

| 指标 | 数值 |
|---|---|
| 检查文章 | 99 篇 |
| H2/H3 标题总数 | 4361 |
| **T1 必改**（看不懂 / 生成事故 / 英中残留 / 人称混乱 / 结构损坏） | **240** |
| T2 可选优化（冗长 / 文艺腔 / 翻译腔，能看懂但偏离用户意图） | 441 |
| 完全无问题的文件 | 1 篇（montenegro-esim-carrier-guide.md） |

### 问题类型分布

| 类型 | T1 | T2 | 小计 |
|---|---|---|---|
| AI事故/模板残留 | 66 | 34 | 100 |
| 英文残留/英西混杂 | 21 | 41 | 62 |
| 人称tú/usted混用 | 38 | 7 | 45 |
| 行话/技术术语 | 37 | 36 | 73 |
| 文不对题 | 11 | 4 | 15 |
| 晦涩/文艺/看不懂 | 60 | 162 | 222 |
| 冗长/填充词 | 1 | 105 | 106 |
| 语法/翻译腔/拼写 | 6 | 52 | 58 |
| **合计** | **240** | **441** | **681** |

### T1 最多的 10 篇（优先处理）

| 文件 | T1 | T2 |
|---|---|---|
| united-states-esim-carrier-guide.md | 13 | 4 |
| netherlands-esim-carrier-guide.md | 10 | 6 |
| united-kingdom-esim-carrier-guide.md | 10 | 0 |
| vietnam-esim-carrier-guide.md | 10 | 4 |
| russia-esim-carrier-guide.md | 7 | 5 |
| hungary-esim-carrier-guide.md | 7 | 10 |
| jordan-esim-carrier-guide.md | 6 | 9 |
| iraq-esim-carrier-guide.md | 5 | 8 |
| china-esim-carrier-guide.md | 5 | 6 |
| mauritius-esim-carrier-guide.md | 5 | 4 |

## 二、必改事故清单（最高优先级，共 19 组）

以下属于 AI 生成事故，不是"措辞风格"问题，必须在任何风格优化之前修复：

| 文件 | 位置 | 问题 | 处理 |
|---|---|---|---|
| hungary-esim-carrier-guide.md | L330 | AI 元话语整段泄漏成标题："No existe una traducción única y universal para esta pregunta…"（AI 翻译过程自述文字直接进了标题结构） | 改为：¿Qué ciudad de Hungría tiene los mejores datos móviles? |
| hungary-esim-carrier-guide.md | L258 / L266 / L310 / L350 | 4 个整行英文标题（"Does tethering work on a Hungary eSIM?"、"Does my EU SIM work in Hungary without extra charges?"、"Understanding Hungary data plans"、"Hungary eSIM picks, trip by trip"） | 全部重写为西班牙语（见明细表） |
| hungary-esim-carrier-guide.md | L254 | 模板占位符未替换："[0] vs Magyar [1] 5G: ¿cuál es mejor en Hungría?" | 改为：Yettel vs Magyar Telekom 5G: ¿cuál es mejor en Hungría? |
| finland-esim-carrier-guide.md | L245 | 模板占位符未替换："•0• vs •1•: cobertura comparada" | 改为：Elisa vs DNA: cobertura comparada |
| latvia-esim-carrier-guide.md | L154 | 结构损坏：整节多个标题被压扁进同一行（一行里混入多个 "## "），无法当标题用，需手动拆行还原结构，不只是改词 | 拆行后逐个重写为意图明确的西班牙语标题 |
| latvia-esim-carrier-guide.md | L142 | 整行英文标题 | 重写为西班牙语（见明细表） |
| belgium-esim-carrier-guide.md | L109 | AI 报错文字当了标题："No se puede traducir este texto…" | 按本节内容重写（见明细表） |
| russia-esim-carrier-guide.md | L278 | 模板残留："Common Common Russia carrier"（重复词 + 英文） | 按内容重写 |
| denmark-esim-carrier-guide.md | L601 | 中文字符泄漏："SIM de中心" | 改为规范西班牙语表述 |
| tunisia-esim-carrier-guide.md | L261 | 中文字符泄漏："面向" | 删除中文词，改用西班牙语介词 |
| pakistan-esim-carrier-guide.md | L382 | 中文字符泄漏："决定" | 重写该标题 |
| malaysia-esim-carrier-guide.md | L153 | Markdown 标记损坏："## ##"（重复井号，渲染异常） | 修复标记并重写标题 |
| netherlands-esim-carrier-guide.md | L117/L196/L226/L314/L322 | 荷兰语/乱码残留："Du" ×4、单词内 "tCH" 大写粘连 | 全部改为规范西班牙语 |
| united-states-esim-carrier-guide.md | 全文 11 处 | "United States" 英文写法贯穿全部对比标题（应作 "Estados Unidos"） | 全局替换为 Estados Unidos |
| united-kingdom-esim-carrier-guide.md | 4 处 | "UK vs EE" 把 UK 当成运营商名与 EE 并列对比，逻辑错误 | 改为国家 vs 运营商的正确对比表述 |
| vietnam-esim-carrier-guide.md | 多处 | 拼写错误："Viietnam" ×4、"Vietnamia" | 改为 Vietnam / vietnamita |
| czech-republic-esim-carrier-guide.md | L288 / L372 | 运营商 O2 被误译成 "Castillo de Praga"（布拉格城堡），事实错误 | 恢复 O2 并重写 |
| egypt-esim-carrier-guide.md | L653 / L733 | 品牌词残留："Países vecinos Roami"、"Roamide eSIM"（Roami 是本站品牌，不应在标题里当运营商） | 按语义重写 |
| uruguay-esim-carrier-guide.md | L381 | 把城市 Punta del Este 当运营商列入运营商对比 | 移除城市，保留真实运营商 |

## 三、判断标准（T1 vs T2）

- **T1 必改**：整行英文/中文/荷兰语残留、模板占位符（`[0]`、`•0•`）、AI 元文字泄漏、`## ##` 标记损坏、整节压扁一行、人称 tú/usted 混用、行话（dimensionar、modos de fallo）、metáfora 晦涩到看不出主题（"Economía del gigabyte"、"huella"）。
- **T2 可选**：标题能看懂、主题能定位，但偏长、偏文艺、带填充词（realmente / vale la pena / que se calla），或翻译腔（语序、calco）。这类不改也不影响用户理解，改了更贴用户搜索意图。
- 参考基准（用户提供的好标题风格）：`什么是数据漫游？` / `如何在 iPhone 上激活漫游功能` / `常见错误及避免方法` / `常见问题解答` / `结论` —— 即用户会搜索、会问出口的直白问句/操作句。

## 四、各文件明细（按文件名字母序，T1 在前）

格式：`行号 [级别 H2/H3] 现标题 → 建议标题 ｜原因`

### albania-esim-carrier-guide.md（T1: 2，T2: 3）

- L131 [**T1** H2] Lo que dicen sus cifras de eSIM en 2026 → **Velocidades de la eSIM en Albania en 2026** ｜vago; oculta tema velocidades
- L557 [**T1** H3] Cuándo necesita un perfil de viaje entrada manual → **Cuándo hace falta configurar el APN manualmente** ｜sintaxis rota, ilegible
- L345 [T2 H2] Costa versus montaña: dónde se le cae realmente el eSIM → **Costa versus montaña: dónde falla la cobertura** ｜coloquial + relleno "realmente"
- L411 [T2 H3] Cobertura en los Picos de los Balcanes: qué deben asumir los senderistas → **Cobertura en los Picos de los Balcanes para senderistas** ｜"asumir" vago, poco claro
- L637 [T2 H3] Qué fallos específicos de Albania tienen solución concreta → **Fallos de la eSIM en Albania con solución** ｜enrevesado, poco claro

### algeria-esim-carrier-guide.md（T1: 0，T2: 4）

- L545 [T2 H2] Tamaños de los planes eSIM de Argelia y lo que cuestan de verdad → **Tamaños y precios de los planes eSIM de Argelia** ｜relleno "de verdad"
- L571 [T2 H3] Planes de datos en Argelia, sin misterios → **Planes de datos en Argelia** ｜relleno "sin misterios"
- L717 [T2 H3] ¿Qué operador debería elegir mi eSIM para viajar más allá de la costa? → **¿Qué operador conviene más allá de la costa?** ｜redacción invertida confusa
- L737 [T2 H2] Cada cifra de Argelia aquí, y dónde se midió → **De dónde salen las cifras de Argelia** ｜redacción extraña para fuentes

### argentina-esim-carrier-guide.md（T1: 1，T2: 2）

- L411 [**T1** H2] Datos: cómo dimensionarlos bien → **Cómo elegir cuántos datos necesita en Argentina** ｜jerga técnica "dimensionar"
- L61 [T2 H2] Por qué la regla del DNI de Argentina moldeó el mercado de eSIM prepagas → **La regla del DNI para comprar una SIM en Argentina** ｜enfoque editorial, no intención
- L257 [T2 H2] Quién opera qué → **Quién opera las redes en Argentina** ｜demasiado telegráfico

### australia-esim-carrier-guide.md（T1: 2，T2: 2）

- L72 [**T1** H2] ¿Tu teléfono funcionará? → **¿Funcionará su teléfono en Australia?** ｜mezcla tú/usted
- L82 [**T1** H3] ¿Tu teléfono es compatible con las redes de Australia? → **¿Es su teléfono compatible con las redes de Australia?** ｜mezcla tú/usted
- L359 [T2 H3] Qué es realmente un eSIM, en un párrafo → **Qué es una eSIM** ｜metadato "en un párrafo"
- L375 [T2 H2] Asegure un eSIM para Australia que le acompañe al interior → **Asegure una eSIM que funcione en el interior de Australia** ｜metafórico "le acompañe"

### azerbaijan-esim-carrier-guide.md（T1: 0，T2: 3）

- L38 [T2 H3] Opciones de eSIM en Azerbaiyán, una al lado de la otra → **Opciones de eSIM en Azerbaiyán comparadas** ｜coletilla innecesaria
- L224 [T2 H2] Conectar su eSIM de Azerbaiyán: los fallos que sí son locales → **Problemas de conexión de su eSIM en Azerbaiyán** ｜críptico "que sí son locales"
- L333 [T2 H2] Su eSIM de Azerbaiyán, resuelta antes de llegar a la costa de Absherón → **Resuelva su eSIM de Azerbaiyán antes de llegar** ｜referencia geográfica oscura

### bahrain-esim-carrier-guide.md（T1: 0，T2: 5）

- L183 [T2 H3] Zain Bahréin — el retador en relación calidad-precio → **Zain Bahréin: buena relación calidad-precio** ｜término deportivo "retador"
- L223 [T2 H3] stc Baréin (antes Viva): la opción equilibrada y versátil → **stc Baréin (antes Viva): la opción equilibrada** ｜adjetivo de relleno "versátil"
- L439 [T2 H2] Problemas de la eSIM en Baréin: los que realmente genera esta isla → **Problemas de la eSIM en Baréin y sus soluciones** ｜literario "genera esta isla"
- L471 [T2 H3] Bloqueo del tethering en la eSIM prepago de stc Baréin: solución → **Por qué stc bloquea compartir conexión y cómo solucionarlo** ｜palabra inglesa "tethering"
- L609 [T2 H3] ¿Funciona el tethering con una eSIM de Baréin? → **¿Funciona compartir conexión con una eSIM de Baréin?** ｜palabra inglesa "tethering"

### bangladesh-esim-carrier-guide.md（T1: 1，T2: 4）

- L88 [**T1** H3] ¿Cuántos GB necesitas en Bangladesh? → **¿Cuántos GB necesita en Bangladesh?** ｜mezcla tú/usted
- L191 [T2 H3] La ruta de la eSIM de Grameenphone → **Cómo conseguir la eSIM de Grameenphone** ｜metáfora "ruta" ambigua
- L195 [T2 H3] La ruta de la eSIM de Robi → **Cómo conseguir la eSIM de Robi** ｜metáfora "ruta" ambigua
- L199 [T2 H3] La ruta de la eSIM de Banglalink → **Cómo conseguir la eSIM de Banglalink** ｜metáfora "ruta" ambigua
- L203 [T2 H3] La ruta de la eSIM de viaje en Bangladesh → **Cómo comprar una eSIM de viaje para Bangladesh** ｜metáfora "ruta" ambigua

### belarus-esim-carrier-guide.md（T1: 1，T2: 2）

- L26 [**T1** H2] Sus operadores de eSIM: tres redes, un problema en la caja → **Operadores de eSIM en Bielorrusia** ｜teaser "problema en caja"
- L237 [T2 H2] Lo que cuesta una eSIM de Bielorrusia: tres rutas para una semana o un mes → **Lo que cuesta una eSIM en Bielorrusia** ｜metáfora ambigua "tres rutas"
- L253 [T2 H3] El veredicto honesto: SIM local versus eSIM de viaje en Bielorrusia → **SIM local frente a eSIM de viaje en Bielorrusia** ｜relleno editorial "veredicto honesto"

### belgium-esim-carrier-guide.md（T1: 2，T2: 2）

- L109 [**T1** H3] No se puede traducir este texto. No contiene contenido lingüístico traducible; solo símbolos y números. → **Orange: la red 5G más rápida de Bélgica** ｜artefacto de traducción filtrado
- L133 [**T1** H2] Mejor operador de eSIM para tu viaje: Proximus vs Orange → **Mejor operador de eSIM para su viaje: Proximus vs Orange** ｜mezcla tú/usted
- L25 [T2 H2] ¿Qué operador de eSIM debería unirse a su teléfono? → **¿Qué operador de eSIM elegir en Bélgica?** ｜redacción antinatural "unirse"
- L370 [T2 H3] SIM local frente a eSIM de viaje: edición Bélgica → **SIM local frente a eSIM de viaje en Bélgica** ｜cliché "edición Bélgica"

### bolivia-esim-carrier-guide.md（T1: 2，T2: 5）

- L151 [**T1** H2] Bandas y dispositivos: lo que una eSIM de Bolivia necesita de tu teléfono → **Bandas y dispositivos: lo que su eSIM necesita** ｜mezcla tú/usted
- L358 [**T1** H3] Visitas brevemente o te quedas mucho tiempo en Bolivia → **Visita breve o estancia larga en Bolivia** ｜mezcla tú + gramática rota
- L90 [T2 H2] Comparación de Velocidad por Operador → **Comparación de velocidad por operador** ｜mayúsculas estilo inglés
- L270 [T2 H3] ¿Se permite hotspot en las eSIM de Bolivia? → **¿Se permite compartir conexión en las eSIM de Bolivia?** ｜palabra inglesa "hotspot"
- L318 [T2 H3] Reglas de tethering en los operadores bolivianos → **Reglas de compartir conexión en los operadores bolivianos** ｜palabra inglesa "tethering"
- L326 [T2 H3] ¿Qué operador debería preferir una eSIM en el altiplano? → **¿Qué operador conviene para el altiplano?** ｜sujeto invertido confuso
- L362 [T2 H2] De Dónde Salen Estas Cifras → **De dónde salen estas cifras** ｜mayúsculas estilo inglés

### bulgaria-esim-carrier-guide.md（T1: 0，T2: 1）

- L123 [T2 H2] Cómo las normas de la UE moldean el precio de una eSIM de Bulgaria → **Cómo la UE afecta el precio de su eSIM** ｜verbo literario "moldean"

### cambodia-esim-carrier-guide.md（T1: 0，T2: 7）

- L49 [T2 H2] 5G nacional: cobertura 5G de Smart Axiata, Cellcard y Metfone comparada → **Cobertura 5G de Smart Axiata, Cellcard y Metfone** ｜prefijo redundante "5G nacional"
- L169 [T2 H3] Donde el rendimiento del eSIM en Camboya se mantiene, ruta por ruta → **Dónde funciona bien la eSIM en Camboya, ruta por ruta** ｜inversión enrevesada
- L207 [T2 H2] Sus velocidades y precios de eSIM, clasificados y con fuentes → **Velocidades y precios de eSIM en Camboya** ｜metadatos "clasificados y fuentes"
- L261 [T2 H2] Bandas, teléfonos y la cuestión de la compatibilidad de la eSIM en Cambodia → **Bandas, teléfonos y compatibilidad de la eSIM en Camboya** ｜prolijo; "Cambodia" en inglés
- L283 [T2 H2] Si se requiere un APN → **Cuándo se requiere un APN en Camboya** ｜frase condicional telegráfica
- L401 [T2 H2] Los itinerarios de templos e islas de Camboya, conectados día a día → **Conectividad en templos e islas de Camboya** ｜redacción poética invertida
- L579 [T2 H3] Cómo se reparten los planes de datos en Camboya → **¿Cuántos datos necesita en Camboya?** ｜vago; habla de consumo

### canada-esim-carrier-guide.md（T1: 1，T2: 2）

- L345 [**T1** H3] Canadá: el lineup de operadores → **Cómo mantener un número local junto a su eSIM** ｜inglés "lineup"; no coincide contenido
- L26 [T2 H2] Su eSIM: operadores en el foco → **Operadores de eSIM en Canadá** ｜calco "en el foco"
- L353 [T2 H3] Qué hace un chip eSIM con un perfil de Bell o Rogers → **Cómo funciona el chip eSIM con un perfil de operador** ｜redacción confusa

### chile-esim-carrier-guide.md（T1: 4，T2: 4）

- L69 [**T1** H3] ¿Quién revisa tu identidad al comprar una SIM en Chile? → **¿Quién revisa su identidad al comprar una SIM en Chile?** ｜mezcla tú con registro usted
- L108 [**T1** H2] El dimensionamiento de datos de su eSIM: cuánto necesita realmente → **Cuántos datos consume al día en Chile** ｜jerga técnica, relleno
- L197 [**T1** H3] Cobertura en el Lago District y Chiloé → **Cobertura en la Región de los Lagos y Chiloé** ｜inglés sin traducir
- L332 [**T1** H2] El campo de operadores → **Una eSIM que usa Entel, Movistar y Claro** ｜metáfora deportiva críptica
- L189 [T2 H3] El extremo norte: pueblos con largos tramos vacíos entre ellos → **Cobertura en el extremo norte de Chile** ｜críptico, no menciona cobertura
- L230 [T2 H2] Cuando una eSIM de Chile falla: cuatro modos de fallo locales → **Errores comunes de la eSIM en Chile** ｜jerga de ingeniería
- L281 [T2 H3] La cuenta de eSIM local vs de viaje en Chile → **Compra directa frente a eSIM de viaje en Chile** ｜críptico, no refleja contenido
- L321 [T2 H2] Evidencia de operadores y lista de fuentes para eSIM en Chile → **Fuentes y datos de operadores para eSIM en Chile** ｜verboso, duplicativo

### china-esim-carrier-guide.md（T1: 5，T2: 6）

- L75 [**T1** H3] El campo de operadores en China → **Qué operadores chinos venden eSIM a visitantes** ｜metáfora deportiva críptica
- L163 [**T1** H3] Del código a la conexión en China → **Pasos antes de instalar su eSIM de China** ｜teaser críptico
- L171 [**T1** H2] Los operadores de eSIM en China: China Mobile, China Unicom y plug-and-play → **Las dos vías para conseguir una eSIM en China** ｜inglés, elemento confuso
- L212 [**T1** H2] Cobertura y velocidad de la eSIM en China en todo el mainland → **Cobertura y velocidad de la eSIM en China continental** ｜palabra inglesa mainland
- L357 [**T1** H3] Activación el **5/30** y plug-and-play → **¿Por qué no se descarga su eSIM dentro de China?** ｜artefacto, jerga interna
- L32 [T2 H2] Sus operadores eSIM: las redes detrás de cada perfil → **Los tres operadores móviles de China** ｜críptico, jerga de perfiles
- L51 [T2 H3] El despliegue del 5G en China: por qué la red rara vez es su cuello de botella → **5G en China: por qué la cobertura no es el problema** ｜verboso, metáfora
- L61 [T2 H2] Registro con nombre real: la norma que define cada eSIM → **Registro con nombre real: qué exige China** ｜cola críptica
- L110 [T2 H2] ¿Comprar directamente o usar una eSIM de viaje? La decisión que más importa en China → **¿Comprar en China o usar una eSIM de viaje?** ｜cola de relleno
- L197 [T2 H3] Su eSIM para China, a la medida del viaje → **Cómo recargar datos en su eSIM de China** ｜vago, no menciona recarga
- L288 [T2 H3] Resolución de problemas de eSIM en China: el orden ante una conexión muerta → **Solución de problemas de la eSIM en China** ｜cola críptica

### colombia-esim-carrier-guide.md（T1: 1，T2: 7）

- L181 [**T1** H2] El paso del APN → **Ajustes de APN para operadores de Colombia** ｜críptico, demasiado breve
- L199 [T2 H2] Qué cuestan las cosas: SIM local o eSIM de viaje → **SIM local o eSIM de viaje: comparación de precios** ｜coloquial vago
- L224 [T2 H2] Solución de problemas de la eSIM en Colombia, en el orden en que debería probarlos → **Solución de problemas de la eSIM en Colombia** ｜excesivamente largo
- L247 [T2 H2] Lo que cuesta el plan de datos móvil a los colombianos, y por qué los precios de las eSIM se diferencian → **Precios locales frente a precios de eSIM en Colombia** ｜excesivamente largo
- L265 [T2 H2] Banco de respuestas: eSIMs en Colombia → **Preguntas frecuentes sobre eSIM en Colombia** ｜metáfora innecesaria
- L338 [T2 H3] ¿Cuándo es el momento inteligente para activar el perfil de Colombia? → **¿Cuándo debe activar su eSIM de Colombia?** ｜relleno, jerga perfil
- L342 [T2 H3] Un vistazo dentro de los planes de datos en Colombia → **Cómo funcionan los planes de datos en Colombia** ｜relleno vago
- L346 [T2 H3] ¿Es mejor en valor una tarjeta prepago Claro que un perfil de viaje? → **¿Qué conviene más: prepago de Claro o eSIM de viaje?** ｜calco del inglés

### costa-rica-esim-carrier-guide.md（T1: 1，T2: 6）

- L211 [**T1** H2] ¿Debe comprar a un operador Rican de Costa o usar una eSIM de viaje? → **¿Operador local o eSIM de viaje en Costa Rica?** ｜texto corrupto
- L25 [T2 H2] Su viaje, su operador de eSIM → **El mejor operador de eSIM para su viaje** ｜vago, no informa contenido
- L51 [T2 H3] Kölbi: el número de torres que decide en una carretera de selva → **Kölbi: la mejor cobertura rural de Costa Rica** ｜metáfora confusa
- L71 [T2 H3] Todas las cifras de Ookla H1 2025 para Claro, Kölbi y Liberty → **Velocidades de Ookla para Claro, Kölbi y Liberty** ｜jerga H1
- L175 [T2 H3] Lo que la ruta "chip turista" de Kölbi puede y no puede hacer → **El chip turista de Kölbi: ventajas y límites** ｜verboso
- L286 [T2 H3] Cinco patrones de fallo en las redes costarricenses → **Cinco problemas comunes de las redes costarricenses** ｜jerga de ingeniería
- L341 [T2 H2] Preguntas sobre operadores y eSIM en Costa Rica que más nos hacen → **Preguntas frecuentes sobre operadores y eSIM en Costa Rica** ｜verboso

### croatia-esim-carrier-guide.md（T1: 4，T2: 6）

- L71 [**T1** H3] Los premios de red en Croacia no coinciden: qué métrica elegir para su eSIM → **Qué medición creer para su eSIM en Croacia** ｜jerga métrica, críptico
- L145 [**T1** H3] Congestión veraniega en Croacia: lo que ocultan las medianas de julio y agosto → **Congestión en verano: velocidades reales en Croacia** ｜jerga estadística críptica
- L252 [**T1** H2] Pasillos de ferry y congestión de agosto: velocidades de la eSIM croata explicadas → **Velocidades reales de la eSIM en Croacia en verano** ｜metáfora críptica
- L337 [**T1** H3] Por qué el terminal es la celda más difícil de Croacia → **Por qué el puerto tiene la peor señal** ｜jerga técnica celda
- L85 [T2 H2] Cobertura de eSIM en Croacia por costa: Zagreb, Istria, las islas y el sur → **Cobertura de la eSIM en Croacia por zonas** ｜por costa, confuso
- L176 [T2 H2] A1 Hrvatska y las ofertas de eSIM de Telemach que merece la pena comparar → **Ofertas de eSIM de A1 Hrvatska y Telemach** ｜verboso
- L224 [T2 H3] La ruta en tienda (HT y Telemach) → **Comprar en tienda: HT y Telemach** ｜ruta, críptico
- L242 [T2 H3] La ruta de la eSIM de viaje en Croacia → **Comprar una eSIM de viaje para Croacia** ｜ruta, críptico
- L341 [T2 H2] Su eSIM de Croacia: respuestas para tener a mano → **Preguntas frecuentes sobre la eSIM en Croacia** ｜verboso
- L371 [T2 H3] Uso de hotspot en las eSIM de Croacia → **Compartir conexión con su eSIM en Croacia** ｜anglicismo hotspot

### cyprus-esim-carrier-guide.md（T1: 3，T2: 5）

- L53 [**T1** H2] Dos redes, una línea: lo que cubre su eSIM → **Su eSIM cubre el sur, no el norte** ｜teaser críptico
- L415 [**T1** H2] Mejor operador de eSIM en Chipre para tu viaje: Cyta vs Epic Cyprus → **Mejor operador de eSIM en Chipre para su viaje: Cyta vs Epic Cyprus** ｜mezcla tú/usted
- L513 [**T1** H3] Saltos de región con una eSIM de Chipre → **Roaming en la UE: la norma de uso justo** ｜críptico, trata roaming
- L105 [T2 H2] Antes de comprar una eSIM local: documentos, euros y la realidad fronteriza → **Antes de comprar una eSIM local en Chipre** ｜cola vaga
- L221 [T2 H3] PrimeTel: la opción de valor urbano-costera → **PrimeTel: la opción económica en ciudades y costa** ｜lenguaje de marketing
- L263 [T2 H3] Cablenet — inclúyala en su paquete de banda ancha → **Cablenet: qué ofrece a los viajeros** ｜consejo ajeno al viajero
- L307 [T2 H2] La guía de la Línea Verde para su eSIM → **Su eSIM cerca de la Línea Verde: qué hacer** ｜vago, es cambio red
- L683 [T2 H2] One eSIM de Chipre para la República — para el norte, planifique de nuevo → **Una eSIM para Chipre; otra para el norte** ｜anglicismo One, verboso

### czech-republic-esim-carrier-guide.md（T1: 4，T2: 5）

- L56 [**T1** H2] Dentro de la capa de MVNO del mercado checo de eSIM → **Operadores virtuales de eSIM en Chequia** ｜jerga técnica
- L288 [**T1** H3] Valores de APN para eSIMs Vodafone, T-Mobile y del Castillo de Praga → **Valores de APN para Vodafone, T-Mobile y O2** ｜artefacto; O2 mal traducido
- L312 [**T1** H3] C. Conectado y luego va lento → **Conectado pero lento: revise su paquete** ｜etiqueta de lista filtrada
- L372 [**T1** H2] Los operadores de eSIM de la República Checa: Vodafone, T-Mobile y el Castillo de Praga → **Su eSIM de la República Checa: Vodafone, T-Mobile y O2** ｜artefacto Castillo Praga
- L26 [T2 H2] Sus operadores de eSIM y cómo está construido realmente el mercado → **Los operadores de eSIM en la República Checa** ｜verboso, vago
- L77 [T2 H3] Cobertura en Praga: lo que ofrece realmente la capital checa → **Cobertura de la eSIM en Praga** ｜relleno
- L101 [T2 H3] Mejor operador fuera de las ciudades en República Checa? → **¿Cuál es el mejor operador fuera de las ciudades?** ｜falta interrogación inicial
- L286 [T2 H2] Configuración de APN de eSIM para República Checa para los tres operadores → **Configuración del APN en la República Checa** ｜duplicación verbosa
- L362 [T2 H2] El rastro documental detrás de estos números de eSIM en la República Checa → **Fuentes de los datos de eSIM en la República Checa** ｜metáfora literaria

### denmark-esim-carrier-guide.md（T1: 4，T2: 4）

- L115 [**T1** H3] Lebara: la opción predilecta del turista sobre la huella Telia/Telenor → **Lebara: la opción más fácil para turistas** ｜metáfora técnica huella
- L139 [**T1** H3] Telia, Telenor y YouSee: donde empieza el muro del CPR → **Telia, Telenor y YouSee: solo para residentes** ｜metáfora críptica CPR
- L531 [**T1** H2] Cómo dimensionar su plan de datos → **Solución de problemas de la eSIM en Dinamarca** ｜jerga; título no coincide
- L601 [**T1** H3] Comparación entre SIM de中心 eSIM de viaje en Dinamarca → **SIM local frente a eSIM de viaje en Dinamarca** ｜caracteres chinos corruptos
- L73 [T2 H2] Estructura del mercado → **Las cuatro redes móviles de Dinamarca** ｜vago, sin intención viajero
- L313 [T2 H2] Llegada al aeropuerto de Copenhague: la cola de la SIM sin una eSIM de Dinamarca → **La cola de la SIM en el aeropuerto de Copenhague** ｜enrevesado
- L633 [T2 H3] Anatomía de un plan de datos en Dinamarca → **Cómo funciona un plan de datos en Dinamarca** ｜metáfora
- L681 [T2 H2] Olvídese del quiosco: Dinamarca, instalada antes de volar → **Instale su eSIM de Dinamarca antes de volar** ｜literario, enrevesado

### dominican-esim-carrier-guide.md（T1: 3，T2: 2）

- L38 [**T1** H3] Claro: el valor predeterminado nacional → **Claro: la red con mejor cobertura nacional** ｜jerga informática
- L253 [**T1** H2] El tablón de preguntas frecuentes sobre eSIM y operadores en República Dominicana → **Preguntas frecuentes sobre eSIM y operadores en República Dominicana** ｜metáfora tablón
- L317 [**T1** H3] Redes dominicanas, presentadas → **Latencia: por qué una red rápida se siente lenta** ｜críptico, no refleja contenido
- L36 [T2 H2] Claro, Altice y Viva: lo que muestran los números → **Claro, Altice y Viva: velocidades comparadas** ｜teaser vago
- L217 [T2 H2] Fallas de la eSIM en República Dominicana, y los arreglos de tres minutos → **Fallas comunes de la eSIM en República Dominicana** ｜verboso

### dominican-republic-esim-carrier-guide.md（T1: 2，T2: 8）

- L118 [**T1** H3] Claro, Altice y Viva: el cuadro de mando Ookla completo → **Claro, Altice y Viva: todas las cifras de Ookla** ｜jerga empresarial
- L311 [**T1** H2] Cómo dimensionar su plan de datos → **Cómo elegir cuántos datos necesita** ｜jerga técnica
- L104 [T2 H3] Altice: el especialista en corredores de resorts → **Altice: la mejor red en las zonas de resorts** ｜metáfora vaga
- L114 [T2 H3] Recortando la factura: los planes más baratos de República Dominicana → **Viva: el plan más barato que conviene evitar** ｜no refleja contenido
- L194 [T2 H3] La ruta directa frente a una eSIM de viaje → **SIM local frente a eSIM de viaje en República Dominicana** ｜ruta directa, críptico
- L212 [T2 H3] La ruta de la eSIM de viaje: sáltese el mostrador → **Cómo funciona la eSIM de viaje en República Dominicana** ｜críptico
- L276 [T2 H2] Cobertura en excursiones: donde termina la red del resort y empieza el barco → **Cobertura de la eSIM en las excursiones** ｜cola literaria
- L304 [T2 H3] Preparación de la eSIM para días de barco: qué hacer antes de que salga cualquier embarcación → **Cómo preparar su eSIM para los días de barco** ｜excesivamente largo
- L374 [T2 H2] Active su eSIM de República Dominicana sin contratiempos → **Cómo activar su eSIM de República Dominicana** ｜relleno
- L392 [T2 H3] República Dominicana eSIM: secuencia de activación → **Cómo activar su eSIM según el operador** ｜jerga, orden inglés

### ecuador-esim-carrier-guide.md（T1: 1，T2: 4）

- L23 [**T1** H2] Three mercados de conectividad, no uno → **Tres mercados de conectividad, no uno** ｜inglés corrupto Three
- L84 [T2 H3] Movistar/Tigo: ante todo consistencia, y la mejor cobertura urbana → **Movistar/Tigo: consistencia y cobertura urbana** ｜verboso
- L164 [T2 H2] Cobertura y velocidad del eSIM en Ecuador a través de las tres geografías → **Cobertura y velocidad de la eSIM por regiones** ｜tres geografías, críptico
- L195 [T2 H3] Mejor eSIM de Ecuador, ordenada por viaje → **La mejor eSIM de Ecuador según su viaje** ｜falta concordancia
- L329 [T2 H2] One eSIM para los Andes, la Amazonía y las Galápagos → **Una eSIM para los Andes, la Amazonía y Galápagos** ｜anglicismo One

### egypt-esim-carrier-guide.md（T1: 4，T2: 4）

- L653 [**T1** H2] Países vecinos Roami → **Su eSIM de Egipto en los países vecinos** ｜artefacto, orden corrupto
- L733 [**T1** H3] Roamide costes con las redes egipcias → **Costes de roaming con las redes egipcias** ｜palabra corrupta Roamide
- L779 [**T1** H3] Instalación en Egipto: descargar para datos → **Instalación de la eSIM de Egipto, paso a paso** ｜críptico, contenido distinto
- L949 [**T1** H3] Cómo dimensionar su paquete de datos en Egipto → **Cómo elegir cuántos datos necesita en Egipto** ｜jerga técnica
- L65 [T2 H3] ¿Su teléfono superará la verificación de eSIM en Egipto? → **¿Su teléfono es compatible con una eSIM de Egipto?** ｜jerga verificación
- L201 [T2 H3] WE (Telecom): el ganador en las mediciones con menor presencia en los resorts → **WE (Telecom): rápido en pruebas, débil en resorts** ｜enrevesado
- L221 [T2 H3] Vodafone, e&amp;, Orange y WE: cada métrica del segundo semestre de 2024 de Ookla → **Cifras de Ookla para Vodafone, e&amp;, Orange y WE** ｜jerga métrica
- L717 [T2 H3] La regla fronteriza que cubre toda salida de Egipto → **Al salir de Egipto: plan nacional o regional** ｜críptico

### estonia-esim-carrier-guide.md（T1: 2，T2: 2）

- L27 [**T1** H2] ¿A qué operador de Estonia debería conectarse tu eSIM? → **¿A qué operador debería conectarse su eSIM en Estonia?** ｜mezcla tú/usted
- L225 [**T1** H3] ¿Qué formatos vienen con una SIM de Estonia? → **Por qué su eSIM queda sin servicio** ｜no refleja contenido
- L194 [T2 H2] Registro de eSIM en Estonia: pasaporte, escaneo de la TTJA y pago antes del mostrador → **Registro de SIM en Estonia: qué le pedirán** ｜excesivamente largo
- L323 [T2 H2] One Estonia eSIM, tres redes, sin cola en el mostrador del pasaporte → **Una eSIM para Estonia, sin cola de pasaporte** ｜anglicismo One, verboso

### ethiopia-esim-carrier-guide.md（T1: 4，T2: 4）

- L83 [**T1** H3] Dónde conseguir tu eSIM de Etiopía → **Dónde conseguir su eSIM de Etiopía** ｜Registro tú; artículo usa usted
- L467 [**T1** H3] Cuando las guías de Etiopía no llegan automáticamente → **Cuando el APN no se configura solo en Etiopía** ｜Término errado, tema oculto
- L597 [**T1** H2] Qué saber: su edición eSIM del operador de Etiopía → **Preguntas frecuentes sobre la eSIM en Etiopía** ｜Calco artificial, criptico
- L665 [**T1** H3] Dimensionar un plan de datos para Etiopía → **Cuántos datos necesita en Etiopía** ｜Jerga técnica innecesaria
- L197 [T2 H3] Lo que la mayoría de los artículos sobre eSIM en Etiopía se calla: los apagones regionales → **Apagones regionales de internet: lo que casi nadie cuenta** ｜Largo y meta-referencial
- L205 [T2 H3] Cómo se vive un apagón desde el asiento del viajero → **Cómo afecta un apagón a su viaje por Etiopía** ｜Literario, poco directo
- L649 [T2 H3] Por tipo de viaje: qué eSIM de Etiopía → **Qué eSIM de Etiopía elegir según su viaje** ｜Frase truncada
- L681 [T2 H3] Etiopía: filtrado de IMEI y EID → **Comprobaciones de IMEI y EID en Etiopía** ｜"Filtrado" confuso al viajero

### europe-esim-carrier-guide.md（T1: 3，T2: 6）

- L99 [**T1** H2] Por qué esas protecciones nunca alcanzan a una eSIM de viaje → **Por qué la UE no protege su eSIM de viaje** ｜Referencia colgante, tema oculto
- L145 [**T1** H2] Economía del gigabyte → **Cuánto cuesta cada plan de datos en Europa** ｜Metafórico, tema invisible
- L251 [**T1** H2] Preguntas sobre eSIM en Europa que la página de decisión debería responder → **Preguntas frecuentes sobre eSIM en Europa** ｜Meta-texto de página filtrado
- L74 [T2 H3] El referente de la prepago alemana: Telekom, Vodafone y el tramo de descuento → **Precios del prepago alemán: Telekom, Vodafone y marcas económicas** ｜Recargado, frase oscura
- L131 [T2 H2] La ruta del mostrador de SIM en Europa, paso a paso, y cuándo sigue ganando → **Cómo comprar una SIM en Europa y cuándo conviene** ｜Excesivamente largo
- L176 [T2 H2] Cobertura en Europa tramo a tramo: donde de verdad se caen las barras → **Cobertura en Europa: dónde se caen las barras** ｜Recargado
- L237 [T2 H2] Cuando un eSIM de Europa se porta mal: arreglos para fronteras, topes y túneles → **Cuando su eSIM de Europa falla: cuatro soluciones** ｜Coloquial y recargado
- L273 [T2 H3] ¿Cómo sé cuánta datos comprar? → **¿Cómo sé cuántos datos comprar?** ｜Error gramatical
- L293 [T2 H3] ¿Cómo comienza realmente la validez de un perfil regional? → **¿Cuándo empieza la validez de un eSIM regional?** ｜Relleno y jerga

### fiji-esim-carrier-guide.md（T1: 0，T2: 5）

- L112 [T2 H2] Donde la cobertura se resiente → **Dónde falla la cobertura en Fiyi** ｜Literario, vago
- L232 [T2 H2] Cuando su eSIM de Fiyi se queda en silencio: cuatro soluciones isleñas → **Cuando su eSIM de Fiyi no tiene señal: cuatro soluciones** ｜Metafórico y recargado
- L254 [T2 H2] Preguntas sobre la eSIM de Fiyi que se hacen quienes saltan entre islas → **Preguntas frecuentes sobre la eSIM de Fiyi** ｜Excesivamente largo
- L300 [T2 H3] ¿El hotspot personal está incluido en las eSIM de Fiyi? → **¿Se puede compartir la conexión de la eSIM de Fiyi?** ｜Palabra inglesa
- L308 [T2 H3] ¿Qué pasa si un ciclón golpea realmente mientras estoy allí? → **¿Qué pasa si un ciclón golpea mientras estoy allí?** ｜Relleno: sobra "realmente"

### finland-esim-carrier-guide.md（T1: 3，T2: 5）

- L245 [**T1** H3] •0• vs •1•: cobertura comparada → **Elisa vs DNA: cobertura comparada** ｜Marcadores de plantilla sin reemplazar
- L375 [**T1** H3] Los actores en el móvil de Finlandia → **Telia en Finlandia: velocidad y prepago en tienda** ｜Sección trata Telia; jerga
- L383 [**T1** H3] Elisa — el norte, el este y el agua → **Elisa: la mejor cobertura fuera de las grandes ciudades** ｜Metafórico, criptico
- L53 [T2 H2] ¿Qué operador de eSIM en Finlandia debería elegir su teléfono? → **¿Qué operador de eSIM elegir en Finlandia?** ｜Gramática confusa
- L129 [T2 H3] Qué mide Traficom — y el apagado del 3G en Finlandia que usted hereda → **Qué mide Traficom y el apagado del 3G en Finlandia** ｜"Usted hereda" resulta criptico
- L363 [T2 H2] Los operadores sobre los que viaja su eSIM → **Qué operadores usa su eSIM en Finlandia** ｜Construcción literaria forzada
- L437 [T2 H3] Comprobación previa al vuelo de la eSIM de Finlandia, en formato de tabla → **Comprobaciones antes del vuelo para su eSIM de Finlandia** ｜Meta: "formato de tabla"
- L523 [T2 H3] Soluciones para eSIM en Finlandia sin servicio: tres comprobaciones por orden de probabilidad → **eSIM sin servicio en Finlandia: tres comprobaciones** ｜Excesivamente largo

### france-esim-carrier-guide.md（T1: 1，T2: 7）

- L454 [**T1** H3] ¿Quién tiene la mayor huella en Francia? → **¿Qué operador tiene la mayor cobertura en Francia?** ｜Metáfora oculta el tema
- L96 [T2 H3] Elegir según el viaje: edición eSIM Francia → **Orange: la red más rápida de Francia** ｜Calco de edición; tema oculto
- L120 [T2 H3] Bouygues Telecom: la mejor red fija y el mostrador de prepago más amable → **Bouygues Telecom: el prepago más fácil de comprar** ｜Recargado, fuera de tema
- L144 [T2 H2] ¿Qué eSIM puede comprar realmente un turista en Francia? → **¿Qué eSIM puede comprar un turista en Francia?** ｜Relleno: sobra "realmente"
- L265 [T2 H2] Córcega y los Alpes: donde la carga estacional francesa pasa factura → **Córcega y los Alpes: cobertura en temporada alta** ｜Metafórico, poco directo
- L328 [T2 H2] Primero, verifique su teléfono → **Verifique su teléfono antes de comprar una eSIM** ｜"Primero" suelto, truncado
- L334 [T2 H2] Configuración de APN que realmente funciona → **Configuración de APN en Francia** ｜Relleno: sobra "realmente"
- L375 [T2 H3] Cinco fallos de las eSIM en Francia con los que realmente se va a encontrar, y sus soluciones → **Cinco fallos comunes de las eSIM en Francia** ｜Excesivamente largo

### germany-esim-carrier-guide.md（T1: 1，T2: 2）

- L376 [**T1** H2] El apartado de operadores → **Fuentes consultadas sobre operadores en Alemania** ｜Texto de navegación filtrado
- L78 [T2 H3] ¿Un bloqueo de SIM impedirá su eSIM alemán → **¿Impedirá un bloqueo de SIM usar su eSIM en Alemania?** ｜Falta interrogación, gramática
- L324 [T2 H2] Preguntas frecuentes: eSIMs y operadores habituales en Alemania → **Preguntas frecuentes sobre eSIM y operadores en Alemania** ｜"Operadores habituales" confuso

### ghana-esim-carrier-guide.md（T1: 3，T2: 6）

- L51 [**T1** H2] Dónde encaja tu eSIM en una economía de dinero móvil → **Cómo encaja su eSIM con el dinero móvil en Ghana** ｜Registro tú; frase oscura
- L639 [**T1** H3] D. "SOS" o "Solo llamadas de emergencia" → **Si su eSIM muestra solo llamadas de emergencia** ｜Etiqueta de lista filtrada
- L679 [**T1** H3] ¿Cómo dimensionar un plan de datos de Ghana? → **¿Cuántos datos necesita en Ghana?** ｜Jerga técnica innecesaria
- L313 [T2 H2] Sus paquetes de datos eSIM: lo que cuesta realmente una línea prepago → **Lo que cuesta una línea prepago en Ghana** ｜Relleno y titular enredado
- L329 [T2 H3] Escalera de datos sin caducidad de Telecel Ghana → **Paquetes de datos sin caducidad de Telecel Ghana** ｜Metáfora innecesaria
- L337 [T2 H3] Escalera de paquetes de datos de AT Ghana → **Paquetes de datos escalonados de AT Ghana** ｜Metáfora innecesaria
- L425 [T2 H3] Filtrado de IMEI y EID para los eSIM de Ghana → **Comprobaciones de IMEI y EID para su eSIM de Ghana** ｜"Filtrado" confuso al viajero
- L695 [T2 H3] Planes de datos de Ghana, sin misterios → **Cómo funcionan los planes de datos en Ghana** ｜Relleno estilístico
- L751 [T2 H2] El rastro documental detrás de nuestros números de eSIM en Ghana → **Fuentes consultadas para esta guía de eSIM en Ghana** ｜Recargado, poco directo

### greece-esim-carrier-guide.md（T1: 2，T2: 3）

- L74 [**T1** H3] ¿Tu modelo está aprobado para eSIMs de Grecia? → **¿Su modelo está aprobado para las eSIM de Grecia?** ｜Registro tú; artículo usa usted
- L90 [**T1** H3] ¿Tu terminal es compatible con las redes de Grecia? → **¿Su teléfono es compatible con las redes de Grecia?** ｜Registro tú; artículo usa usted
- L27 [T2 H2] Opciones de operador bajo cualquier eSIM → **Los operadores que hay detrás de su eSIM de Grecia** ｜Construcción poco natural
- L314 [T2 H2] Respuestas sobre la eSIM de Grecia que vale la pena guardar → **Preguntas frecuentes sobre la eSIM de Grecia** ｜Recargado, relleno
- L316 [T2 H3] Cosmote planes eSIM para visitantes → **Planes eSIM de Cosmote para visitantes** ｜Orden calco del inglés

### guatemala-esim-carrier-guide.md（T1: 2，T2: 3）

- L673 [**T1** H3] ¿Tu teléfono admitirá una eSIM en Guatemala? → **¿Su teléfono admitirá una eSIM en Guatemala?** ｜Registro tú; artículo usa usted
- L721 [**T1** H3] ¿Puedes saltarte el requisito de identificación con una eSIM de viaje en Guatemala? → **¿Puede evitar el registro de identidad con una eSIM de viaje?** ｜Registro tú; artículo usa usted
- L233 [T2 H2] Cobertura en Guatemala: shuttles, camionetas extraurbanas y las carreteras entre destinos → **Cobertura en Guatemala: transporte y carreteras entre destinos** ｜Palabra inglesa
- L657 [T2 H3] ¿Cuánta datos debería cargar para Guatemala? → **¿Cuántos datos debería cargar para Guatemala?** ｜Error gramatical
- L777 [T2 H2] ¿Cuánta data es suficiente? → **¿Cuántos datos son suficientes para Guatemala?** ｜Anglicismo "data"

### hong-kong-esim-carrier-guide.md（T1: 1，T2: 3）

- L484 [**T1** H2] Cuatro modos de fallo locales con un eSIM de Hong Kong → **Cuatro fallos comunes con una eSIM de Hong Kong** ｜Jerga de ingeniería
- L144 [T2 H3] ¿Cuál es el punto óptimo de GB en Hong Kong? → **¿Cuántos gigas le convienen en Hong Kong?** ｜Expresión vaga, jerga
- L234 [T2 H3] 3. Umbrales de uso razonable y lo que significa "ilimitado" → **Umbrales de uso razonable y lo que significa "ilimitado"** ｜Numeración de lista filtrada
- L382 [T2 H2] eSIM de Hong Kong, China según el tipo de viaje: seis días, seis redes distintas → **La mejor eSIM de Hong Kong según el tipo de viaje** ｜Titular teaser innecesario

### hungary-esim-carrier-guide.md（T1: 7，T2: 10）

- L254 [**T1** H3] [0] vs Magyar [1] 5G: ¿cuál es mejor en Hungría? → **Yettel vs Magyar Telekom 5G: ¿cuál es mejor en Hungría?** ｜Marcadores de plantilla sin reemplazar
- L258 [**T1** H3] Does tethering work on a Hungary eSIM? → **¿Puede compartir la conexión de su eSIM de Hungría?** ｜Encabezado en inglés
- L266 [**T1** H3] Does my EU SIM work in Hungary without extra charges? → **¿Funciona mi SIM de la UE en Hungría sin coste extra?** ｜Encabezado en inglés
- L310 [**T1** H3] Understanding Hungary data plans → **¿Cuánto cuestan los datos en Hungría?** ｜Encabezado en inglés
- L318 [**T1** H3] Viajando hacia adelante con su eSIM de Hungría → **Continuar su viaje por Europa tras Hungría** ｜Criptico, tema invisible
- L330 [**T1** H3] No existe una traducción única y universal para esta pregunta, ya que es una pregunta completa, no una guía ni un texto informativo. Sin embargo, puedo traducirla si lo necesita: ¿Qué ciudad de Hungría... → **¿Qué ciudad de Hungría tiene los mejores datos móviles?** ｜Texto de IA filtrado
- L350 [**T1** H3] Hungary eSIM picks, trip by trip → **La mejor eSIM de Hungría según su viaje** ｜Encabezado en inglés
- L39 [T2 H2] Yettel, Magyar Telekom y One: lo que revelaron las mediciones del primer semestre de 2025 → **Yettel, Magyar Telekom y One: velocidades medidas en 2025** ｜Excesivamente largo
- L122 [T2 H2] Su precio de la eSIM comparado con las SIM locales → **Precio de la eSIM frente a las SIM locales** ｜Gramática enredada
- L142 [T2 H2] ¿Cuánto Datos Necesita? → **¿Cuántos datos necesita?** ｜Error gramatical y mayúsculas
- L250 [T2 H3] ¿Su dispositivo supera el proceso de selección de eSIM de Hungría? → **¿Es compatible su teléfono con las eSIM de Hungría?** ｜Frase confusa, jerga
- L270 [T2 H3] Hungary eSIM: la instalación → **Instalación de la eSIM de Hungría** ｜Inglés mezclado con español
- L278 [T2 H3] Compare a Magyar con otro operador para ver cuál se adapta mejor a sus necesidades en Hungría. → **Magyar Telekom frente a Yettel: ¿cuál elegir?** ｜Oración entera, recargado
- L322 [T2 H3] De qué tamaño de paquete de datos para Hungría necesita → **¿Qué tamaño de paquete de datos necesita?** ｜Gramática enredada
- L342 [T2 H3] ¿Mi número de casa seguirá sonando mientras se ejecutan los datos húngaros? → **¿Seguirá recibiendo llamadas en su número habitual en Hungría?** ｜Calco del inglés
- L346 [T2 H3] • ¿Un contrato o una tarjeta prepago de una tienda en Budapest? → **¿Contrato o tarjeta prepago en una tienda de Budapest?** ｜Viñeta filtrada en encabezado
- L358 [T2 H2] Fuentes de datos del eSIM en Hungría: rastreo de las cifras que citamos → **Fuentes de datos para esta guía de eSIM en Hungría** ｜Recargado, poco directo

### iceland-esim-carrier-guide.md（T1: 0，T2: 7）

- L160 [T2 H3] Iceland eSIM: dónde comprar → **eSIM de Islandia: dónde comprar** ｜Inglés mezclado con español
- L253 [T2 H3] Por qué la brecha del aeropuerto de Keflavík importa para su eSIM en Islandia → **Por qué el aeropuerto de Keflavík no resuelve su eSIM** ｜Recargado, "brecha" poco clara
- L640 [T2 H3] Detalles de activación en Islandia que vale la pena conocer → **Detalles de activación de la eSIM en Islandia** ｜Relleno innecesario
- L772 [T2 H2] Planificación de eSIM en Islandia: cuando el clima invernal cierra la carretera → **Viajar a Islandia en invierno: datos y carreteras cerradas** ｜Teaser recargado
- L817 [T2 H3] Una rutina de datos en invierno para Islandia: consulte road.is antes de dormir → **Su rutina de datos en invierno en Islandia** ｜URL inglesa; detalle sobrante
- L838 [T2 H2] Preguntas frecuentes: operadores en Islandia, eSIMs y todo lo demás → **Preguntas frecuentes sobre eSIM y operadores en Islandia** ｜Relleno innecesario
- L916 [T2 H3] Empareje un operador de Islandia con su viaje → **Qué operador de Islandia elegir según su viaje** ｜Verbo forzado, poco natural

### india-esim-carrier-guide.md（T1: 0，T2: 2）

- L42 [T2 H3] El sector: operadores móviles en India → **Operadores móviles en India: quién es quién** ｜Prefijo "sector" sobrante
- L321 [T2 H3] Jio planes eSIM para visitantes → **Planes eSIM de Jio para visitantes** ｜Orden calco del inglés

### indonesia-esim-carrier-guide.md（T1: 2，T2: 6）

- L215 [**T1** H2] Fundamentos de la eSIM en Indonesia: bandas, biometría y ventanas de paquetes → **Lo básico de la eSIM en Indonesia: bandas, biometría y paquetes** ｜"ventanas de paquetes" jerga incomprensible
- L425 [**T1** H3] Yakarta y su cinturón de commuters: 5G y congestión → **Yakarta y su área metropolitana: 5G y congestión** ｜"commuters" palabra inglesa
- L49 [T2 H2] Vaya directo a lo que necesita → **Resumen rápido: lo que necesita saber** ｜meta-navegación, contenido sin nombrar
- L133 [T2 H3] XL: la opción de consistencia y video → **XL: la opción estable para video** ｜"opción de consistencia" poco clara
- L227 [T2 H3] 2. Verificaciones de identidad, biometría y tope de tres números → **Verificaciones de identidad, biometría y límite de tres números** ｜numeración huérfana "2."
- L235 [T2 H3] 3. Umbrales de uso razonable y qué ocurre después → **Límites de uso razonable y qué pasa al superarlos** ｜numeración huérfana "3."
- L685 [T2 H2] Sus mitos sobre la eSIM, desmentidos → **Mitos sobre la eSIM en Indonesia, desmentidos** ｜"sus mitos" artificial
- L713 [T2 H2] Investigación y fuentes detrás de nuestra cobertura de eSIM en Indonesia → **Fuentes de esta guía de eSIM en Indonesia** ｜"cobertura" ambiguo, wordy

### iran-esim-carrier-guide.md（T1: 1，T2: 3）

- L250 [**T1** H3] Viaje a Irán: cómo mantener reachable su número de casa → **Viaje a Irán: cómo mantener su número de casa activo** ｜"reachable" palabra inglesa
- L104 [T2 H3] ¿Puede gestionar una línea turística iraní antes de volar → **¿Puede gestionar una línea turística iraní antes de volar?** ｜falta signo de cierre
- L217 [T2 H3] Cobertura en Irán: ¿quién lo hace mejor? → **Dónde hay señal y dónde no** ｜"quién lo hace" vago
- L348 [T2 H3] Su eSIM para Irán, a la medida del viaje → **¿Cuántos datos necesita para Irán?** ｜título no revela contenido

### iraq-esim-carrier-guide.md（T1: 5，T2: 8）

- L26 [**T1** H2] Sus nociones básicas sobre la eSIM: dos regímenes de licencias, un solo país → **Lo básico: Irak federal y Kurdistán funcionan distinto** ｜"regímenes de licencias" jerga
- L232 [**T1** H2] Iraq eSIM speeds: Asiacell vs Zain → **Velocidades de eSIM en Irak: Asiacell vs Zain** ｜título en inglés
- L305 [**T1** H3] Asiacell vs Zain: comparación de cobertura → **Ajustes de roaming y doble SIM antes de conectar** ｜texto no corresponde al título
- L309 [**T1** H3] C. Funciona en Bagdad, muere en Erbil — o al revés → **Si su eSIM funciona en Bagdad pero no en Erbil** ｜prefijo "C." artefacto
- L313 [**T1** H3] Operadores de Irak, en función de su ruta → **Las tres causas habituales de perder conexión** ｜texto no corresponde al título
- L43 [T2 H2] A qué se conecta realmente su eSIM: Asiacell vs. Zain vs. Korek → **A qué redes se conecta su eSIM en Irak** ｜sobra "realmente"
- L85 [T2 H3] Comportamiento de doble SIM en la eSIM de Irak que conviene conocer → **Cómo funciona la doble SIM con su eSIM de Irak** ｜"que conviene conocer" relleno
- L186 [T2 H3] Cómo recargar una eSIM de Iraq → **Cómo recargar una eSIM de Irak** ｜"Iraq" grafía inglesa
- L197 [T2 H2] Qué ciudades cubre un eSIM de Irak: nueve realidades urbanas → **Cobertura de eSIM en las ciudades de Irak** ｜"nueve realidades urbanas" literario
- L213 [T2 H3] Cobertura de la Irak en los corredores interurbanos → **Cobertura de Irak en las carreteras entre ciudades** ｜"la Irak" errata gramatical
- L224 [T2 H3] Cortes de internet en Irak y ritmos que vale la pena planificar → **Cortes de internet en Irak: fechas y horarios** ｜"ritmos que vale" críptico
- L244 [T2 H3] Velocidades de los operadores en Irak: leyendo los números geográficamente → **Velocidades de los operadores por región de Irak** ｜"leyendo los números" críptico
- L345 [T2 H3] Registro: registro de SIM en Irak → **Registro de SIM en Irak** ｜palabra duplicada artefacto

### ireland-esim-carrier-guide.md（T1: 2，T2: 3）

- L252 [**T1** H3] APN manual: cuándo lo necesita Ireland → **APN manual: cuándo lo necesita en Irlanda** ｜"Ireland" inglés, gramática rota
- L348 [**T1** H3] Irlanda: el elenco de operadores → **Los operadores de Irlanda, uno por uno** ｜"elenco" metáfora literaria
- L126 [T2 H3] SIM local frente a eSIM de viaje: edición Irlanda → **SIM local o eSIM de viaje en Irlanda** ｜"edición Irlanda" relleno
- L163 [T2 H2] ¿Cómo se comparan sus velocidades y cobertura de eSIM entre operadores? → **Velocidades y cobertura de eSIM por operador** ｜construcción torpe
- L322 [T2 H2] Qué preguntas sobre la eSIM de Irlanda hacen los viajeros con más frecuencia → **Preguntas frecuentes sobre la eSIM de Irlanda** ｜wordy

### israel-esim-carrier-guide.md（T1: 2，T2: 4）

- L149 [**T1** H2] 5G en Israel: comparación de la cobertura 5G de Cellcom, Partner y Mar Muerto → **Velocidades y cobertura 5G en Israel** ｜"Mar Muerto" no es operador
- L184 [**T1** H2] Calculando los planes → **Un plan por tramo: cruzar a Jordania o Egipto** ｜título críptico y desajustado
- L37 [T2 H2] Cuatro redes de eSIM en Israel y cómo las alcanza un visitante → **Las cuatro redes de eSIM en Israel** ｜"cómo las alcanza" confuso
- L78 [T2 H3] Partner, HOT Mobile y la referencia del mostrador del aeropuerto → **Partner y HOT Mobile frente al mostrador del aeropuerto** ｜"la referencia" vago
- L164 [T2 H2] Recargar su eSIM de Israel y la letra pequeña que vale la pena leer → **Recargar su eSIM de Israel: la letra pequeña** ｜cola wordy
- L206 [T2 H2] Cuatro modos de fallo específicos de Israel y sus soluciones → **Cuatro fallos típicos de la eSIM en Israel** ｜"modos de fallo" técnico

### italy-esim-carrier-guide.md（T1: 0，T2: 3）

- L53 [T2 H2] Qué operadores alojan su eSIM → **A qué redes se conecta su eSIM en Italia** ｜"alojan" poco natural
- L375 [T2 H3] Dónde la banda de 700 MHz de TIM supera a la de Vodafone, región por región → **Dónde TIM cubre mejor que Vodafone, región por región** ｜"banda de 700 MHz" jerga
- L665 [T2 H3] El chip eSIM dentro de su teléfono que guarda un perfil italiano → **Qué es el chip eSIM de su teléfono** ｜frase larga y críptica

### japan-esim-carrier-guide.md（T1: 3，T2: 4）

- L68 [**T1** H2] Comprobando la compatibilidad de tu eSIM → **Compruebe la compatibilidad de su eSIM** ｜"tu" mezcla registro, gerundio
- L208 [**T1** H3] El campo del operador en Japón → **Los operadores de Japón, comparados** ｜metáfora deportiva críptica
- L319 [**T1** H2] Su tablón de preguntas sobre eSIM y operadores en Japón → **Preguntas frecuentes sobre eSIM y operadores en Japón** ｜"tablón de preguntas" críptico
- L89 [T2 H3] Compatibilidad de terminales en Japón → **Compatibilidad de teléfonos en Japón** ｜"terminales" jerga
- L105 [T2 H3] Canales de venta de eSIM en Japón → **Dónde comprar una eSIM en Japón** ｜"canales de venta" marketing
- L259 [T2 H2] Activación del eSIM en Japón, sin complicaciones → **Activación del eSIM en Japón** ｜"sin complicaciones" relleno
- L364 [T2 H3] El chip que almacena un perfil de Docomo o au → **Qué es el chip eSIM de su teléfono** ｜frase críptica

### jordan-esim-carrier-guide.md（T1: 6，T2: 9）

- L142 [**T1** H2] Tus precios de eSIM: el escalón de planes prepago → **Precios de los planes prepago en Jordania** ｜"Tus" mezcla registro
- L150 [**T1** H3] -0- Niveles de visitantes en Jordania → **Planes para visitantes de Orange Jordania** ｜prefijo "-0-" artefacto
- L222 [**T1** H3] Jordan eSIM al aterrizar: activación y selección de red → **Activar la eSIM al aterrizar en Jordania** ｜"Jordan" inglés
- L244 [**T1** H3] Valores del APN para eSIM de Umniah, Petra y plug-and-play → **Valores del APN para eSIM de Umniah y Petra** ｜"plug-and-play" no es operador
- L260 [**T1** H3] Dimensionamiento de datos para itinerarios en Jordania → **Cuántos datos necesita según su itinerario en Jordania** ｜"dimensionamiento" jerga técnica
- L335 [**T1** H3] El shortlist de eSIM en Jordania, en una línea → **La mejor eSIM de Jordania, en una línea** ｜"shortlist" palabra inglesa
- L51 [T2 H2] Zain Jordan vs Orange Jordan vs Umniah: las fichas de velocidad de eSIM → **Zain, Orange y Umniah: velocidades de eSIM en Jordania** ｜"fichas de velocidad" jerga
- L63 [T2 H3] Cuadros de mando de los operadores de Jordania: Ookla y Opensignal comparados → **Mediciones de Ookla y Opensignal en Jordania** ｜"cuadros de mando" jerga
- L76 [T2 H3] Cómo interpretar las fichas de puntuación de los operadores de eSIM en Jordania → **Cómo interpretar las mediciones de velocidad en Jordania** ｜"fichas de puntuación" jerga
- L80 [T2 H3] Qué significan estas fichas para una eSIM en Jordania → **Qué significan estas cifras para su eSIM** ｜"fichas" jerga, vago
- L146 [T2 H3] Niveles de visitantes de Zain Jordania → **Planes para visitantes de Zain Jordania** ｜"niveles" poco natural
- L154 [T2 H3] Niveles de visitantes de Umniah → **Planes para visitantes de Umniah** ｜"niveles" poco natural
- L195 [T2 H3] El factor voz que la mayoría de las comparaciones de eSIM en Jordania pasan por alto → **Las llamadas: el factor que las comparaciones olvidan** ｜wordy
- L205 [T2 H3] ¿El hotspot personal está incluido en las eSIM de Jordania? → **¿Se puede compartir la conexión con las eSIM de Jordania?** ｜"hotspot" palabra inglesa
- L226 [T2 H3] Preparación sin conexión en Jordan: mapas de la ruta sur antes de salir del Wi-Fi → **Mapas sin conexión: prepare la ruta sur de Jordania** ｜"Jordan" inglés, wordy

### kazakhstan-esim-carrier-guide.md（T1: 1，T2: 3）

- L855 [**T1** H2] Quién opera qué → **Fuentes de esta guía de eSIM en Kazajistán** ｜título críptico; sección fuentes
- L303 [T2 H3] Para todo tipo de viaje a Kazajistán → **El mejor operador según su tipo de viaje** ｜frase vaga sin tema
- L335 [T2 H2] 5G nacional: cobertura 5G en Kazajistán, comparada entre Kcell y Activ → **Cobertura 5G en Kazajistán: Kcell vs Activ** ｜"5G" duplicado, wordy
- L521 [T2 H2] Moverse por Kazajistán con datos: Yandex Go y mapas offline → **Moverse por Kazajistán: Yandex Go y mapas sin conexión** ｜"offline" palabra inglesa

### kenya-esim-carrier-guide.md（T1: 2，T2: 4）

- L144 [**T1** H3] Kenya install: descarga para datos → **Ruta 1 — Comprar su eSIM de viaje en línea** ｜"Kenya install" inglés, serie rota
- L222 [**T1** H3] Perfil: peculiaridades de emisión en Kenia → **Por qué su eSIM no se conecta al aterrizar** ｜jerga críptica, contenido desajustado
- L40 [T2 H2] Operadores de eSIM en Kenia, sin rodeos → **Operadores de eSIM en Kenia** ｜"sin rodeos" relleno
- L94 [T2 H2] Airtel: la propuesta de valor que se queda en las ciudades → **Airtel: buena oferta, pero solo en ciudades** ｜"propuesta de valor" marketing
- L98 [T2 H2] Telkom y Faiba: vale la pena conocerlos, rara vez vale la pena elegirlos → **Telkom y Faiba: por qué casi nunca convienen** ｜wordy
- L316 [T2 H3] ¿Está incluido el hotspot personal con las eSIM de Kenia? → **¿Se puede compartir la conexión con las eSIM de Kenia?** ｜"hotspot" palabra inglesa

### kuwait-esim-carrier-guide.md（T1: 3，T2: 5）

- L97 [**T1** H2] Cómo conectarse en Kuwait: KYC y la ruta del visitante → **Cómo conectarse en Kuwait: registro e identificación** ｜"KYC" jerga desconocida
- L118 [**T1** H2] Cuando el mapa se queda a oscuras → **El mejor operador según la zona de Kuwait** ｜metáfora oscura esconde tema
- L204 [**T1** H2] Kuwait más allá de la avenida de circunvalación: dónde termina la ciudad de 500 Mbps → **Cobertura fuera de la ciudad de Kuwait** ｜metáfora + "ciudad de 500 Mbps"
- L105 [T2 H2] Sus planes de eSIM: las referencias detrás del precio → **Planes de eSIM en Kuwait y precios de referencia** ｜"referencias detrás" críptico
- L147 [T2 H2] Bandas de la eSIM en Kuwait, terminales y qué comprobar → **Bandas, teléfonos compatibles y qué comprobar en Kuwait** ｜"terminales" jerga, enum torpe
- L158 [T2 H2] Configuración del APN, realizada una sola vez → **Configuración del APN en Kuwait** ｜cola relleno
- L222 [T2 H3] Por tipo de viaje: qué eSIM de Kuwait → **Qué eSIM de Kuwait elegir para viajes de negocios** ｜frase truncada
- L228 [T2 H2] eSIM de operadores kuwaitíes y dudas sobre los operadores, aclaradas → **Dudas sobre los operadores kuwaitíes, aclaradas** ｜redundante, enredado

### latvia-esim-carrier-guide.md（T1: 4，T2: 0）

- L52 [**T1** H3] Dónde conseguir tu eSIM para Letonia → **Dónde conseguir su eSIM para Letonia** ｜"tu" mezcla registro
- L134 [**T1** H3] # Pasos de instalación de eSIM para Letonia → **Pasos para instalar su eSIM de Letonia** ｜prefijo "# " artefacto
- L142 [**T1** H3] Route 2 — Physical SIM at RIX or a city store → **Ruta 2 — Comprar una SIM física en Riga** ｜título entero en inglés
- L154 [**T1** H3] ### # Cómo activar una eSIM de Letonia ## Paso 1: … ## Paso 2: … ## Paso 3: … ## Paso 4: … ## Consejos útiles …（整节压扁成一行） → **Cómo activar su eSIM de Letonia, paso a paso（需把 Paso 1–4 与 Consejos útiles 拆回独立标题行）** ｜corrupción estructural, línea aplastada

### lithuania-esim-carrier-guide.md（T1: 1，T2: 5）

- L375 [**T1** H2] ¿Cuánta información necesitas? → **¿Cuántos datos necesita?** ｜"necesitas" tú, "información" impreciso
- L115 [T2 H2] ¿Qué cuesta menos: ¿eSIM local o de viaje? → **¿Qué cuesta menos: eSIM local o de viaje?** ｜doble signo de interrogación
- L197 [T2 H3] Antes de un mostrador de Vilnio: lo que Telia, Tele2 o Bitė le pedirá → **Antes de un mostrador de Vilnius: lo que le pedirán** ｜"Vilnio" errata
- L301 [T2 H2] Llegar al aeropuerto de Vilnio: ¿es una eSIM más fácil que el quiosco? → **Llegar al aeropuerto de Vilnius: ¿eSIM o quiosco?** ｜"Vilnio" errata
- L469 [T2 H2] Hotspot y tethering con una eSIM de Lituania → **Compartir conexión con una eSIM de Lituania** ｜"hotspot y tethering" inglés
- L535 [T2 H2] Preguntas frecuentes sobre la eSIM de Lituania para estancias cortas y viajes largos → **Preguntas frecuentes sobre la eSIM de Lituania** ｜cola wordy

### luxembourg-esim-carrier-guide.md（T1: 4，T2: 2）

- L35 [**T1** H2] El campo de operadores → **Los operadores de eSIM en Luxemburgo** ｜metáfora deportiva "campo"
- L271 [**T1** H3] Redes de Luxemburgo, presentación → **¿Está su teléfono liberado de operador?** ｜críptico; contenido es desbloqueo
- L275 [**T1** H3] Elegir por viaje: edición eSIM de Luxemburgo → **Su eSIM de Luxemburgo en Suiza** ｜críptico; contenido es roaming suizo
- L322 [**T1** H2] One eSIM que se comporta en cada frontera → **Una eSIM para las tres redes de Luxemburgo** ｜inglés "One"; teaser
- L179 [T2 H2] Antes del registro de 2017: lo que pedirán POST, Tango o Orange → **Registro de SIM: lo que pedirán POST, Tango u Orange** ｜referencia críptica "2017"
- L241 [T2 H2] eSIM de Luxemburgo: las preguntas que realmente envían los visitantes → **Preguntas frecuentes sobre la eSIM en Luxemburgo** ｜filler "realmente"; meta

### macau-esim-carrier-guide.md（T1: 3，T2: 1）

- L266 [**T1** H3] Antes del ferry: comprobaciones de la era CTM para una eSIM de Macao, China → **Qué comprobar antes de cruzar a Macao** ｜"era CTM" críptico artificial
- L279 [**T1** H3] Los cinco fallos del perfil en Macau que puedes encontrarte → **Cinco fallos de perfil que puede encontrar** ｜tú; artículo usa usted
- L293 [**T1** H3] Si tienes que escalar el caso en Macau: lo que el soporte necesita → **Cómo contactar con el soporte en Macao** ｜tú; jerga "escalar caso"
- L82 [T2 H3] Cada métrica publicada de Macao, una al lado de la otra → **Comparativa de velocidades en Macao** ｜wordy; frase incompleta

### malaysia-esim-carrier-guide.md（T1: 2，T2: 7）

- L153 [**T1** H2] ## ## Líneas de planes y precios → **Planes y precios de las eSIM en Malasia** ｜doble marcador ## corrupto
- L505 [**T1** H2] Entre quién está eligiendo → **Contactar al operador: qué tener preparado** ｜críptico; contenido es soporte
- L49 [T2 H2] Comprar una eSIM de Malaysia en KLIA: lo que realmente sucede → **Comprar una eSIM en el aeropuerto de KLIA** ｜filler; inglés "Malaysia"
- L87 [T2 H2] Los operadores de eSIM en Malaysia: Maxis, CelcomDigi y U Mobile → **Los operadores de eSIM en Malasia: Maxis, CelcomDigi y U Mobile** ｜inglés "Malaysia" por "Malasia"
- L245 [T2 H3] U Mobile — el retador urbano económico → **U Mobile: la opción económica para las ciudades** ｜metáfora deportiva "retador"
- L407 [T2 H2] Dónde se producen las compras → **Dónde comprar una eSIM en Malasia** ｜vago; redacción impersonal
- L457 [T2 H2] Fallas de la eSIM en Malasia que no encontrará en otros sitios → **Fallos comunes de la eSIM en Malasia** ｜teaser "otros sitios"
- L533 [T2 H2] Preguntas sobre la eSIM en Malasia, respondidas de forma clara → **Preguntas frecuentes sobre la eSIM en Malasia** ｜filler "de forma clara"
- L653 [T2 H2] One eSIM de Malasia para la Península y Borneo → **Una eSIM de Malasia para la Península y Borneo** ｜inglés "One" por "Una"

### maldives-esim-carrier-guide.md（T1: 0，T2: 2）

- L185 [T2 H2] Fallos específicos de la eSIM en las Maldivas: cuatro patrones → **Cuatro fallos comunes de la eSIM en Maldivas** ｜jerga "patrones"
- L306 [T2 H2] Días de traslado en Maldivas: brechas de cobertura en hidroavión y lancha rápida → **Cobertura durante los traslados en hidroavión y lancha** ｜jerga "brechas"; wordy

### malta-esim-carrier-guide.md（T1: 2，T2: 4）

- L377 [**T1** H3] El ferry Malta–Gozo: un detalle sobre la eSIM que conviene saber → **Su eSIM en el ferry entre Malta y Gozo** ｜teaser oculta el tema
- L441 [**T1** H3] Lo que realmente determina su experiencia en Malta → **Por qué la congestión importa más que la velocidad** ｜teaser; no nombra tema
- L105 [T2 H2] Los operadores que mueven el mercado → **Los operadores de eSIM en Malta** ｜metáfora de mercado
- L165 [T2 H3] GO, Epic y Melita: operadores de eSIM en Malta, uno al lado del otro → **GO, Epic y Melita comparados** ｜wordy "uno al lado"
- L613 [T2 H3] ¿Malta es compatible con la eSIM de su teléfono? → **¿Su teléfono admite una eSIM en Malta?** ｜redacción invertida confusa
- L1409 [T2 H2] La base de evidencia de esta guía de la eSIM en Malta → **Fuentes de esta guía sobre la eSIM en Malta** ｜jerga "base de evidencia"

### mauritius-esim-carrier-guide.md（T1: 5，T2: 4）

- L53 [**T1** H2] Cómo elegir tu operador → **Cómo elegir su operador en Mauricio** ｜tú; artículo usa usted
- L79 [**T1** H2] Operadores en juego → **Los operadores de eSIM en Mauricio** ｜imagen de juego deportivo
- L129 [**T1** H3] Por qué la regla de la SIM turística en Mauricio es el dato más útil de esta página → **Por qué importa la regla de la SIM turística** ｜meta "esta página"; wordy
- L335 [**T1** H3] Three comprobaciones rápidas antes de volar a Mauricio → **Tres comprobaciones rápidas antes de volar a Mauricio** ｜inglés "Three" por "Tres"
- L729 [**T1** H2] Dimensionar un plan de datos en Mauricio → **Prepare su eSIM de Mauricio antes de volar** ｜jerga "dimensionar"; es conclusión
- L109 [T2 H3] Reglas de la SIM turística en Mauricio: por qué no se aplican los precios para residentes → **Reglas de la SIM turística en Mauricio** ｜wordy; secundario en título
- L255 [T2 H3] ¿Cuánta datos móviles para Mauricio? → **¿Cuántos datos móviles necesita en Mauricio?** ｜error gramatical "cuánta"
- L449 [T2 H3] Lleve un eSIM de Mauricio de vuelta: cuatro movimientos → **Cuatro soluciones si su eSIM de Mauricio falla** ｜"cuatro movimientos" críptico
- L569 [T2 H2] Preguntas desde la carretera sobre los eSIM de las operadoras en Mauricio → **Preguntas frecuentes sobre las eSIM en Mauricio** ｜filler "desde la carretera"

### mexico-esim-carrier-guide.md（T1: 3，T2: 3）

- L80 [**T1** H3] ¿Es tu teléfono compatible con las redes de México? → **¿Es su teléfono compatible con las redes de México?** ｜tú; artículo usa usted
- L90 [**T1** H3] México: filtrado de IMEI y EID → **Problemas de dispositivo con la eSIM en México** ｜jerga; no describe contenido
- L343 [**T1** H3] La alineación de operadores en México → **¿Puedo usar mi SIM de casa y la eSIM?** ｜deportivo; contenido distinto
- L101 [T2 H2] Las formas de obtener realmente su eSIM → **Cómo conseguir su eSIM de México** ｜filler "realmente"
- L271 [T2 H3] Cuatro pasos para rescatar un eSIM de México → **Cuatro soluciones si su eSIM de México falla** ｜figurado "rescatar"
- L351 [T2 H3] ¿Qué hace realmente un eSIM dentro de un teléfono que visita México? → **¿Qué hace la eSIM dentro de su teléfono?** ｜fraseo extraño; filler

### mongolia-esim-carrier-guide.md（T1: 0，T2: 2）

- L387 [T2 H3] eSIM de Mongolia: secuencia de activación → **Cómo activar su eSIM de Mongolia** ｜jerga "secuencia"
- L649 [T2 H3] ¿Cómo funciona realmente la llegada al aeropuerto de UBN? → **¿Cómo funciona la llegada al aeropuerto de Ulán Bator?** ｜código UBN; filler

### morocco-esim-carrier-guide.md（T1: 5，T2: 7）

- L529 [**T1** H2] El mercado móvil, mapeado → **Cobertura en las rutas clásicas de Marruecos** ｜críptico; contenido es cobertura
- L723 [**T1** H3] ¿Qué operador de Marruecos deberías elegir: Maroc Telecom o inwi? → **¿Qué operador debería elegir: Maroc Telecom o inwi?** ｜tú "deberías"; artículo usa usted
- L913 [**T1** H3] ¿Necesitas registrar el IMEI de tu teléfono en Marruecos? → **¿Necesita registrar el IMEI de su teléfono?** ｜tú; artículo usa usted
- L961 [**T1** H3] Qué eSIM de Marruecos se adapta a tu viaje → **Qué eSIM de Marruecos se adapta a su viaje** ｜tú; artículo usa usted
- L1027 [**T1** H2] Prepárate antes de tu vuelo a Marruecos → **Prepárese antes de su vuelo a Marruecos** ｜tú; artículo usa usted
- L169 [T2 H2] Maroc Telecom vende la eSIM turística que realmente buscan los viajeros → **La eSIM turística de Maroc Telecom** ｜filler "realmente"
- L243 [T2 H3] Dónde flaquea la línea Essentiel de Orange → **Los puntos débiles de la línea Essentiel de Orange** ｜literario "flaquea"
- L257 [T2 H2] eSIMs de inwi y Orange: posibles, con más fricción → **eSIM de inwi y Orange: posibles pero complicadas** ｜jerga "fricción"
- L365 [T2 H3] La ANRT de Marruecos: sobre qué regula realmente → **La ANRT de Marruecos: qué regula** ｜redacción torpe; filler
- L557 [T2 H2] Marruecos por carretera y por rail: Al Boraq, taxis y mapas sin conexión → **Marruecos en tren y carretera: Al Boraq y taxis** ｜inglés "rail"
- L665 [T2 H2] Empiece por su teléfono → **Tres comprobaciones en su teléfono antes de comprar** ｜vago; son comprobaciones dispositivo
- L771 [T2 H3] Cinco patrones de fallo de la eSIM en Marruecos, en el orden en que los encontrará → **Cinco fallos comunes de la eSIM en Marruecos** ｜wordy; jerga "patrones"

### myanmar-esim-carrier-guide.md（T1: 0，T2: 4）

- L29 [T2 H2] Cómo las normas locales de eSIM condicionan cada compra → **Normas locales que afectan su compra de eSIM** ｜abstracto "condicionan cada compra"
- L82 [T2 H3] ATOM (antes Telenor) — el caballo de batalla del circuito turístico → **ATOM (antes Telenor): la red del circuito turístico** ｜metáfora "caballo de batalla"
- L203 [T2 H2] Solución de problemas con una eSIM de Myanmar: lo que realmente falla aquí → **Problemas comunes con una eSIM de Myanmar** ｜teaser; filler "realmente"
- L254 [T2 H2] Respuestas cortas, preguntas reales → **Preguntas frecuentes sobre la eSIM en Myanmar** ｜críptico

### namibia-esim-carrier-guide.md（T1: 3，T2: 5）

- L248 [**T1** H2] Mejor operador de eSIM en Namibia para tu viaje: MTC vs TN Mobile → **Mejor operador de eSIM en Namibia: MTC vs TN Mobile** ｜tú "tu"; artículo usa usted
- L302 [**T1** H3] Continuar el viaje con tu eSIM de Namibia → **Continuar el viaje con su eSIM de Namibia** ｜tú; artículo usa usted
- L324 [**T1** H2] Instala una eSIM de Namibia y llega a la puerta de Etosha aún conectado → **Instale su eSIM y llegue a Etosha conectado** ｜tú; artículo usa usted
- L27 [T2 H2] La trampa de la eSIM que nadie menciona → **Qué red usan las eSIM de viaje en Namibia** ｜hook no nombra tema
- L176 [T2 H2] Velocidad de la eSIM en Namibia y coste de los datos, juntos → **Velocidad y coste de los datos en Namibia** ｜filler "juntos"
- L183 [T2 H2] Configuración del APN, una sola vez → **Cómo configurar el APN en Namibia** ｜filler "una sola vez"
- L201 [T2 H2] Solución de problemas de una eSIM en Namibia: los fallos que en realidad son locales → **Fallos comunes de la eSIM en Namibia** ｜wordy; filler "en realidad"
- L260 [T2 H2] La versión corta, pregunta por pregunta → **Preguntas frecuentes, en breve** ｜críptico "la versión corta"

### nepal-esim-carrier-guide.md（T1: 1，T2: 4）

- L222 [**T1** H3] Los datos de la eSIM en Nepal mueren en un traspaso a gran altitud → **Por qué los datos se cortan al cambiar de red** ｜críptico; jerga "traspaso"
- L27 [T2 H2] ¿Pueden los visitantes realmente comprar un eSIM local? La realidad del registro → **¿Pueden los visitantes comprar un eSIM local en Nepal?** ｜doble teaser "realmente/realidad"
- L48 [T2 H3] Pago en los mostradores de SIM en Nepal: la realidad con tarjeta extranjera y efectivo → **Pago con tarjeta extranjera y efectivo en Nepal** ｜filler "la realidad"
- L87 [T2 H3] Los operadores que operan en Nepal → **Los operadores móviles de Nepal** ｜redundante "operadores que operan"
- L237 [T2 H3] Antes de volar: lo que Nepal realmente exige → **Antes de volar: requisitos para su viaje** ｜filler "realmente"

### netherlands-esim-carrier-guide.md（T1: 10，T2: 6）

- L25 [**T1** H2] Elegir tu eSIM para una escapada urbana o una estancia larga → **Elija su eSIM según el tipo de viaje** ｜register tú vs usted
- L42 [**T1** H3] KPN Mobile: el campeón de la consistencia → **KPN Mobile: la red más constante** ｜sports metaphor
- L117 [**T1** H2] Precio de su eSIM frente a las tarjetas prepago Du → **Precio de su eSIM frente al prepago local** ｜stray Du artifact
- L142 [**T1** H2] Duches, bicicletas y la capa de aplicaciones que su eSIM alimenta → **Las aplicaciones que más usará con su eSIM** ｜garbage word, cryptic
- L185 [**T1** H2] Cómo dimensionar los datos de un eSIM para los Países Bajos, estancia corta o larga → **Cuántos datos necesita para los Países Bajos** ｜jargon dimensionar
- L196 [**T1** H2] -0- Errores de eSIM de tCH y cómo solucionarlos → **Errores comunes de eSIM y cómo solucionarlos** ｜artifact tokens
- L226 [**T1** H3] Du fronteras en tren: cuando su eSIM cruza hacia Bélgica o Alemania → **Cruzar a Bélgica o Alemania en tren con su eSIM** ｜stray Du artifact
- L232 [**T1** H2] eSIM y operadores en Países Bajos: la mesa de preguntas → **Preguntas frecuentes sobre eSIM en Países Bajos** ｜literary metaphor
- L314 [**T1** H3] ¿Qué ciudad Du tiene los datos móviles más rápidos? → **¿Qué ciudad tiene los datos móviles más rápidos?** ｜stray Du artifact
- L322 [**T1** H3] ¿Funcionan bien los datos móviles Du en los trenes? → **¿Funcionan bien los datos móviles en los trenes?** ｜stray Du artifact
- L109 [T2 H2] Saltos de frontera con eSIM → **Cruces fronterizos con su eSIM** ｜cryptic phrasing
- L154 [T2 H2] Bandas de eSIM en los Países Bajos, teléfonos y lo que realmente importa aquí → **Bandas de eSIM y teléfonos compatibles en Países Bajos** ｜wordy filler tail
- L165 [T2 H2] Configuración de APN que realmente funciona → **Configuración de APN en los Países Bajos** ｜filler realmente
- L174 [T2 H2] Qué ruta resulta más económica → **SIM local o eSIM: qué conviene más** ｜vague word ruta
- L290 [T2 H3] ¿Duran 10 GB para Países Bajos? → **¿Le alcanzarán 10 GB para Países Bajos?** ｜odd verb choice
- L298 [T2 H3] Un vistazo dentro de los planes de datos en Países Bajos → **Planes de datos en Países Bajos de un vistazo** ｜calque, wordy

### new-zealand-esim-carrier-guide.md（T1: 1，T2: 13）

- L339 [**T1** H3] ¿Quién tiene la mayor huella en Nueva Zelanda? → **¿Dónde desaparece la señal en Nueva Zelanda?** ｜calque huella, mismatches content
- L31 [T2 H3] esim one nz vs spark: ¿cuál es mejor en Nueva Zelanda? → **One NZ o Spark: ¿cuál es mejor en Nueva Zelanda?** ｜lowercase brand names
- L89 [T2 H3] ¿Mi dispositivo puede ejecutar una eSIM de Nueva Zelanda? → **¿Puede mi dispositivo usar una eSIM de Nueva Zelanda?** ｜calque ejecutar
- L168 [T2 H2] Velocidades de su eSIM: one nz frente a spark → **Velocidades de su eSIM: One NZ frente a Spark** ｜lowercase brand names
- L172 [T2 H3] one nz frente a spark: ¿qué operador de Nueva Zelanda es más rápido? → **One NZ frente a Spark: ¿qué operador es más rápido?** ｜lowercase brand names
- L192 [T2 H3] Su eSIM de Nueva Zelanda, a la medida del viaje → **La mejor eSIM según su tipo de viaje** ｜tailoring metaphor
- L203 [T2 H3] comparación one nz vs spark: cobertura → **Comparación de cobertura: One NZ frente a Spark** ｜lowercase, awkward order
- L224 [T2 H3] Valores de APN para eSIM de one nz, spark y 2degrees → **Valores de APN para One NZ, Spark y 2degrees** ｜lowercase brand names
- L267 [T2 H3] eSIM de Nueva Zelanda, desde la instalación hasta en vivo → **Activación de la eSIM en cada operador** ｜calque en vivo
- L313 [T2 H2] Los operadores de eSIM en Nueva Zelanda: one nz, spark y 2degrees → **Los operadores de eSIM: One NZ, Spark y 2degrees** ｜lowercase brand names
- L315 [T2 H3] Planes eSIM de one nz para visitantes → **Planes eSIM de One NZ para visitantes** ｜lowercase brand names
- L335 [T2 H3] Cobertura rural en Nueva Zelanda: one nz vs spark → **Cobertura rural en Nueva Zelanda: One NZ frente a Spark** ｜lowercase brand names
- L355 [T2 H3] Activación en one nz, spark y 2degrees → **Activación en One NZ, Spark y 2degrees** ｜lowercase brand names
- L371 [T2 H3] ¿Cuál es la forma de contrastar las afirmaciones de cobertura con adónde voy? → **¿Cómo compruebo la cobertura en mis destinos?** ｜wordy, convoluted

### nicaragua-esim-carrier-guide.md（T1: 3，T2: 4）

- L228 [**T1** H2] Operadores en carrera → **Configuración de APN en Nicaragua** ｜sports metaphor, mismatches content
- L315 [**T1** H3] El terreno: operadores móviles en Nicaragua → **¿Necesita un número local en Nicaragua?** ｜cryptic, mismatches content
- L319 [**T1** H3] Del código a la conexión en Nicaragua → **Solución de problemas de su eSIM en Nicaragua** ｜cryptic, mismatches content
- L41 [T2 H2] Claro en la práctica: cómo se ve realmente la línea de un visitante → **Claro en la práctica: precios y paquetes para visitantes** ｜wordy, vague
- L72 [T2 H2] Lo que cuesta una eSIM de Nicaragua desde el lado del proveedor de viajes → **Cuánto cuesta una eSIM de viaje para Nicaragua** ｜wordy framing
- L160 [T2 H2] Día de llegada a Nicaragua: eSIM frente al mostrador del aeropuerto, hora por hora → **El día de llegada: eSIM o mostrador del aeropuerto** ｜filler hora por hora
- L170 [T2 H2] Cómo comprar una eSIM o SIM local en Nicaragua en Managua → **Cómo comprar una eSIM o SIM local en Managua** ｜duplicated place names

### nigeria-esim-carrier-guide.md（T1: 3，T2: 6）

- L215 [**T1** H2] Detrás de las marcas → **Las cuatro redes de Nigeria, comparadas** ｜cryptic teaser
- L577 [**T1** H3] ¿Qué operador nigeriano deberías elegir: MTN o Airtel? → **¿Qué operador nigeriano debería elegir: MTN o Airtel?** ｜register tú vs usted
- L601 [**T1** H2] ¿Cuántos gigabytes necesitas? → **¿Cuántos gigabytes necesita?** ｜register tú vs usted
- L113 [T2 H3] La tabla completa de medición de Nigeria → **Tabla completa de velocidades en Nigeria** ｜jargon medición
- L417 [T2 H3] El cronograma del registro NIN, en la práctica → **El registro NIN paso a paso** ｜jargon cronograma
- L729 [T2 H3] Dos patrones más de fallos de eSIM en Nigeria que sorprenden a los usuarios → **Dos fallos de eSIM comunes en Nigeria** ｜wordy
- L767 [T2 H2] SIM local vs eSIM de viaje: las cuentas → **SIM local o eSIM de viaje: comparación de costos** ｜cryptic las cuentas
- L839 [T2 H3] Los operadores móviles de Nigeria, en lista → **Lista de operadores móviles de Nigeria** ｜awkward phrasing
- L927 [T2 H3] ¿Una SIM nigeriana local es mejor para las apps de transporte? → **¿Una SIM local es mejor para las aplicaciones de transporte?** ｜English word apps

### north-macedonia-esim-carrier-guide.md（T1: 3，T2: 4）

- L157 [**T1** H3] A1 vs Telekom vs MTEL: el cuadro de mando de la eSIM de Macedonia del Norte → **A1, Telekom y MTEL: comparativa de eSIM** ｜jargon cuadro de mando
- L985 [**T1** H3] Macedonia del Norte: el lineup de operadores → **Problemas de eSIM y sus soluciones** ｜English lineup, mismatches content
- L1313 [**T1** H3] Anatomía de un plan de datos en Macedonia del Norte → **Su plan de datos al cruzar la frontera** ｜metaphor, mismatches content
- L97 [T2 H2] El mercado móvil, mapeado → **El mercado móvil de Macedonia del Norte** ｜calque mapeado
- L253 [T2 H3] Canales de venta de eSIM para Macedonia del Norte → **Dónde comprar una eSIM en Macedonia del Norte** ｜business jargon
- L385 [T2 H3] Compra de SIM en el aeropuerto de Skopje: por qué la respuesta honesta es la incertidumbre → **¿Dónde comprar una SIM en el aeropuerto de Skopje?** ｜literary, convoluted
- L901 [T2 H3] Lista de verificación previa al vuelo de la eSIM de Macedonia del Norte: seis comprobaciones que hacer en casa → **Seis comprobaciones antes de volar a Macedonia del Norte** ｜wordy

### norway-esim-carrier-guide.md（T1: 2，T2: 5）

- L43 [**T1** H3] Medidas de los operadores en Noruega: el ciclo 2025 en una sola tabla → **Comparativa de operadores en Noruega: tabla 2025** ｜jargon ciclo, medidas
- L284 [**T1** H3] ¿Cómo dimensionar un plan de datos para Noruega? → **¿Cuántos datos necesita para Noruega?** ｜jargon dimensionar
- L114 [T2 H2] Las zonas sin cobertura de Noruega: los túneles, ferries y puentes que hay detrás → **Las zonas sin cobertura de Noruega: túneles, ferries y puentes** ｜filler tail
- L170 [T2 H2] Cómo regula Nkom la telefonía móvil en Noruega — y por qué debería importarle a un visitante → **Regulación móvil en Noruega: lo que afecta al visitante** ｜unknown acronym, wordy
- L211 [T2 H2] Preparar el teléfono y la eSIM de Noruega para una ruta noruega → **Preparar su teléfono y su eSIM antes de la ruta** ｜redundant Noruega
- L260 [T2 H3] Atención al cliente de los operadores noruegos: qué necesita una escalación → **Atención al cliente en Noruega: qué preparar antes de llamar** ｜jargon escalación
- L274 [T2 H2] Preguntas frecuentes sobre eSIM de Noruega, sin rodeos → **Preguntas frecuentes sobre eSIM de Noruega** ｜filler sin rodeos

### oman-esim-carrier-guide.md（T1: 0，T2: 4）

- L271 [T2 H2] Sus puntos sin cobertura de eSIM: donde el mapa se queda en blanco → **Zonas sin cobertura de eSIM en Omán** ｜metaphor, wordy
- L411 [T2 H2] Fallas de la eSIM en Omán y las cuatro que son específicas de aquí → **Fallas de eSIM específicas de Omán y sus soluciones** ｜convoluted
- L435 [T2 H3] Paquete Hayyak (Omantel): barras pero sin sesión de datos → **Paquete Hayyak (Omantel): hay señal pero no datos** ｜jargon sesión de datos
- L465 [T2 H3] Antes de volar: lo que Omán realmente exige → **Antes de volar: preparativos para su eSIM en Omán** ｜vague, filler realmente

### pakistan-esim-carrier-guide.md（T1: 3，T2: 13）

- L382 [**T1** H2] Antes de comprar una eSIM para Pakistán: cinco cosas que决定 el resultado → **Antes de comprar su eSIM: cinco puntos clave** ｜Chinese characters leaked
- L959 [**T1** H3] Filtrado de IMEI y EID para eSIMs de Pakistán → **¿Pueden bloquear su teléfono por el IMEI en Pakistán?** ｜cryptic filtrado
- L983 [**T1** H3] El campo de operadores en Pakistán → **Los operadores móviles de Pakistán** ｜sports field metaphor
- L85 [T2 H2] Enlaces rápidos de su eSIM → **Enlaces rápidos de esta guía** ｜awkward possessive
- L166 [T2 H2] Jazz frente a Zong frente a PTCL Flash Fiber frente a Transworld: lo que descubrimos → **Jazz, Zong, PTCL y Transworld comparados** ｜wordy repetition
- L358 [T2 H3] Telenor: bueno en el norte, en transición → **Telenor: buena cobertura en el norte del país** ｜cryptic en transición
- L412 [T2 H3] 3. Lo que significa "ilimitado" en un paquete prepago pakistaní → **Qué significa ilimitado en un paquete prepago pakistaní** ｜leftover list numbering
- L511 [T2 H2] La factura de la conectividad en Pakistán: eSIM frente al resto → **Costos de conectividad en Pakistán: eSIM frente al resto** ｜metaphor factura
- L622 [T2 H2] Qué tan lejos y qué tan rápido: operadores en todo Pakistán → **Cobertura y velocidad de los operadores en Pakistán** ｜teaser title
- L784 [T2 H2] Hacer que su eSIM funcione: los fallos que realmente ocurren → **Cómo solucionar los fallos de su eSIM** ｜filler realmente
- L820 [T2 H3] Lo que un helpdesk de Jazz, Zong o Telenor necesita de usted → **Lo que el soporte de Jazz, Zong o Telenor necesita** ｜English word helpdesk
- L874 [T2 H2] Preguntas frecuentes sobre la eSIM en Pakistán (12 respondidas) → **Preguntas frecuentes sobre la eSIM en Pakistán** ｜meta numbering
- L904 [T2 H3] P: ¿Qué velocidades debo esperar realmente? → **¿Qué velocidades debo esperar?** ｜leaked Q prefix
- L935 [T2 H3] P: ¿Tengo que completar la verificación biométrica para usar una eSIM de Pakistán? → **¿Tengo que completar la verificación biométrica para mi eSIM?** ｜leaked Q prefix
- L1007 [T2 H3] P: ¿Qué ocurre con mi conexión cuando cruzo a India o Irán? → **¿Qué pasa al cruzar a India o Irán?** ｜leaked Q prefix
- L1025 [T2 H2] Afirmaciones sobre eSIM en Pakistán que vale la pena verificar → **Mitos sobre las eSIM en Pakistán** ｜meta framing

### panama-esim-carrier-guide.md（T1: 1，T2: 6）

- L148 [**T1** H3] ¿Qué capacidad de datos es adecuada para un viaje a Panamá? → **Ruta 1 — Instalar su eSIM de viaje antes de volar** ｜mismatches content, Ruta 1 missing
- L97 [T2 H3] Aritmética de precios de la SIM en Tocumen: quiosco frente a tienda en la ciudad → **Precios de la SIM en Tocumen: quiosco frente a tienda** ｜metaphor aritmética
- L129 [T2 H3] Lo que el mapa de Panamá no le revelará → **Lo que los mapas de cobertura no muestran** ｜teaser title
- L225 [T2 H3] Lista de verificación previa al eSIM en Panamá: los seis puntos antes del aterrizaje en Tocumen → **Seis comprobaciones antes de aterrizar en Tocumen** ｜wordy
- L282 [T2 H2] Pagar en Panamá: por qué su plan de datos importa → **Cómo pagar en Panamá: tarjetas, efectivo y datos** ｜teaser subtitle
- L295 [T2 H3] La cuenta de eSIM local vs. de viaje en Panamá → **eSIM local o eSIM de viaje en Panamá** ｜cryptic la cuenta
- L367 [T2 H2] Del código QR a conectado → **Active su eSIM: del código QR a la conexión** ｜fragment, ungrammatical

### peru-esim-carrier-guide.md（T1: 3，T2: 2）

- L47 [**T1** H3] eSIM de Movistar: el operador establecido de Perú con el alcance poblado más profundo → **eSIM de Movistar: la mejor cobertura en zonas pobladas** ｜jargon alcance poblado
- L102 [**T1** H3] Claro Perú prepago frente a una eSIM de viaje: la llamada → **Claro Perú prepago o eSIM de viaje: comparativa** ｜cryptic la llamada
- L330 [**T1** H3] Perú: activar tu eSIM → **Cómo activar su eSIM en Perú** ｜register tú vs usted
- L246 [T2 H3] SIM local frente a eSIM de viaje: las cuentas → **SIM local frente a eSIM de viaje: costos** ｜cryptic las cuentas
- L318 [T2 H3] ¿Cuándo comienza el reloj de validez? → **¿Cuándo empieza a contar la validez de mi eSIM?** ｜metaphor reloj

### philippines-esim-carrier-guide.md（T1: 1，T2: 6）

- L25 [**T1** H2] Operadores anfitriones para tu eSIM → **Los operadores de su eSIM en Filipinas** ｜register tú, jargon anfitriones
- L99 [T2 H2] Planes de datos: la matemática por GB → **Planes de datos y dónde comprarlos en Filipinas** ｜odd phrasing, mismatch
- L182 [T2 H3] Para todo tipo de viaje a Filipinas → **La mejor eSIM según su tipo de viaje** ｜vague fragment
- L246 [T2 H3] APN manual: cuándo Filipinas lo necesita → **APN manual: cuándo configurarlo en Filipinas** ｜odd personification
- L255 [T2 H2] Una eSIM en Filipinas: configuración y luego soluciones → **Configuración de su eSIM y solución de problemas** ｜clunky phrasing
- L283 [T2 H3] Una eSIM de Filipinas estancada: cuatro soluciones → **Su eSIM no se activa: cuatro soluciones** ｜metaphor estancada
- L321 [T2 H3] Globe planes de eSIM para visitantes → **Planes de eSIM de Globe para visitantes** ｜English word order

### portugal-esim-carrier-guide.md（T1: 1，T2: 4）

- L308 [**T1** H2] El campo competitivo → **Comprar una eSIM directamente a los operadores** ｜sports field metaphor
- L103 [T2 H2] Tamaños de planes y sus precios → **Planes de datos y precios en Portugal** ｜odd tamaños
- L152 [T2 H3] MEO planes eSIM para visitantes → **Planes eSIM de MEO para visitantes** ｜English word order
- L163 [T2 H2] Su cobertura eSIM, velocidad y qué operador gana → **Cobertura y velocidad de su eSIM en Portugal** ｜choppy structure
- L376 [T2 H3] ¿Cómo puedo poner a prueba estas afirmaciones de cobertura para mi itinerario? → **¿Cómo compruebo la cobertura en mi itinerario?** ｜wordy

### romania-esim-carrier-guide.md（T1: 1，T2: 9）

- L38 [**T1** H2] Romania eSIM velocidades del operador: Orange, DIGI y los datos completos por ciudad → **Velocidades de los operadores en Rumanía, ciudad por ciudad** ｜keyword mush, English order
- L27 [T2 H2] Elección de eSIM en Rumanía: escapada urbana, road trip o estancia larga → **Cómo elegir su eSIM en Rumanía según su viaje** ｜English road trip
- L54 [T2 H3] Descarga mediana móvil en Rumanía por ciudad → **Velocidad media de descarga por ciudad** ｜stats jargon order
- L71 [T2 H3] Mediana de descarga móvil en Rumanía por condado → **Velocidad media de descarga por condado** ｜stats jargon
- L135 [T2 H3] eSIM de Rumanía: las cinco comprobaciones que vale la pena hacer en casa → **Cinco comprobaciones antes de viajar a Rumanía** ｜wordy
- L254 [T2 H2] Las dos rutas donde la conectividad rumana realmente se debilita → **Las dos rutas con la señal más débil** ｜filler realmente
- L264 [T2 H3] Por tipo de viaje: qué eSIM para Rumanía → **¿Qué operador funciona en el delta del Danubio?** ｜fragment, mismatches content
- L272 [T2 H2] Preguntas frecuentes rápidas para compradores de eSIM en Rumanía → **Preguntas frecuentes sobre eSIM en Rumanía** ｜redundant rápidas
- L294 [T2 H3] Rumanía cara a cara: SIM local, eSIM de viaje → **SIM local o eSIM de viaje en Rumanía** ｜odd cara a cara
- L298 [T2 H3] Encaje un operador rumano a su viaje → **Elija el operador según su viaje** ｜odd imperative encaje

### russia-esim-carrier-guide.md（T1: 7，T2: 5）

- L51 [**T1** H2] Las tres cosas que se rompen primero en una conexión rusa → **Los tres fallos de conexión más comunes en Rusia** ｜teaser hides topic
- L64 [**T1** H3] 2. Wi‑Fi que no lo acepta → **2. Wi‑Fi público que rechaza su número extranjero** ｜cryptic pronoun
- L125 [**T1** H2] Cómo conectarse en Rusia: el árbol de decisiones realista → **Cómo conectarse en Rusia: sus opciones, comparadas** ｜decision-tree jargon
- L218 [**T1** H3] Particularidades de la emisión de perfiles en Rusia → **Cómo funciona la activación de la eSIM en Rusia** ｜profile-issuance jargon
- L278 [**T1** H2] Preguntas frecuentes del lector: eSIMs y operadores en Common Common Russia carrier → **Preguntas frecuentes sobre eSIM y operadores en Rusia** ｜leaked template artifact
- L284 [**T1** H3] ¿Cuántos GB necesitas en Rusia? → **¿Cuántos GB necesita en Rusia?** ｜tú/usted register mix
- L328 [**T1** H3] Dimensionar su paquete de datos en Rusia → **Cómo elegir cuántos datos necesita en Rusia** ｜technical jargon
- L27 [T2 H2] Los cambios normativos de 2025–2026, con fecha y claros → **Cambios normativos de 2025–2026 en Rusia** ｜filler tail
- L152 [T2 H2] Elegibilidad del teléfono para eSIM de roaming en Rusia → **¿Su teléfono admite eSIM para Rusia?** ｜jargon word
- L204 [T2 H3] La lista de verificación previa al embarque para una eSIM con destino a Rusia → **Lista de verificación antes de volar a Rusia** ｜wordy
- L226 [T2 H3] Cómo rescatar una eSIM de Rusia en cuatro pasos → **Cuatro fallos de eSIM en Rusia y su solución** ｜rescue metaphor
- L350 [T2 H2] Nota sobre las fuentes: datos y reglas fechadas sobre la eSIM de Rusia → **Fuentes y referencias sobre la eSIM en Rusia** ｜wordy, odd phrasing

### saudi-arabia-esim-carrier-guide.md（T1: 1，T2: 4）

- L64 [**T1** H3] Marcas sauditas de OMV económicas que se apoyan en las redes de los tres grandes → **Marcas económicas que usan las redes de los tres grandes** ｜jargon acronym OMV
- L112 [T2 H3] El eSIM Sawa Visitante de STC, nivel por nivel → **Planes del eSIM Sawa Visitante de STC** ｜odd phrasing
- L126 [T2 H3] Mobily paquetes de visitante, la opción con mejor relación calidad-precio → **Paquetes de visitante de Mobily: la mejor relación calidad-precio** ｜garbled word order
- L285 [T2 H2] Activación de su eSIM para Arabia Saudita y solución de problemas de lo que realmente falla → **Activación de su eSIM para Arabia Saudita y solución de problemas** ｜filler tail
- L324 [T2 H3] Dentro del registro de una SIM de Arabia Saudita → **Cómo es el registro de una SIM en Arabia Saudita** ｜vague phrasing

### singapore-esim-carrier-guide.md（T1: 1，T2: 2）

- L313 [**T1** H3] ¿Qué operador gana fuera de las capitales de Singapur? → **¿Qué operador gana en el resto de Singapur?** ｜plural-capitales artifact
- L27 [T2 H2] Los operadores detrás del mercado → **Los operadores móviles de Singapur** ｜cryptic teaser
- L205 [T2 H2] El paso del APN → **Configuración del APN en Singapur** ｜cryptic shorthand

### slovakia-esim-carrier-guide.md（T1: 2，T2: 9）

- L112 [**T1** H2] El mercado móvil, mapeado → **Los operadores móviles de Eslovaquia** ｜cryptic literary style
- L283 [**T1** H2] Roam like at home y la elección de su eSIM → **La itinerancia de la UE y su eSIM en Eslovaquia** ｜English phrase leaked
- L118 [T2 H3] Las redes de Eslovaquia, presentadas → **Qué redes móviles hay en Eslovaquia** ｜odd phrasing
- L193 [T2 H3] eSIM de Eslovaquia, elegida para su itinerario → **La eSIM recomendada según su itinerario** ｜cryptic phrasing
- L415 [T2 H2] Bandas de eSIM en Eslovaquia y terminales: las dos comprobaciones que lo deciden todo → **Bandas de eSIM y compatibilidad del teléfono en Eslovaquia** ｜dramatic filler, jargon
- L616 [T2 H3] eSIM en Eslovaquia: cinco comprobaciones que merece la pena hacer antes de partir → **Cinco comprobaciones antes de volar a Eslovaquia** ｜wordy
- L745 [T2 H3] Un eSIM de Eslovaquia para una semana de esquí en invierno → **Una eSIM de Eslovaquia para una semana de esquí** ｜gender error
- L763 [T2 H2] Su eSIM de Eslovaquia y minipreguntas frecuentes sobre el operador → **Preguntas frecuentes sobre operadores en Eslovaquia** ｜invented word
- L781 [T2 H3] ¿Dónde brilla cada red eslovaca? → **¿Dónde tiene mejor cobertura cada red eslovaca?** ｜metaphor
- L901 [T2 H3] ¿Funciona un eSIM de Eslovaquia en Vienna o Budapest? → **¿Funciona una eSIM de Eslovaquia en Viena o Budapest?** ｜gender and English name
- L1078 [T2 H2] Tenga su eSIM de Eslovaquia cargado antes de volar → **Tenga su eSIM de Eslovaquia lista antes de volar** ｜gender mismatch

### south-africa-esim-carrier-guide.md（T1: 2，T2: 6）

- L75 [**T1** H2] Vodacom, MTN y Cell C: los números detrás de la carrera → **Vodacom, MTN y Cell C: rendimiento comparado** ｜race metaphor
- L397 [**T1** H2] Three Rutas sudafricanas en coche de alquiler y cómo mantenerse conectado → **Tres rutas en coche y cómo mantenerse conectado** ｜leaked English word
- L297 [T2 H2] Configuraciones de APN que realmente funcionan → **Configuraciones de APN que funcionan** ｜filler word
- L443 [T2 H2] Preguntas frecuentes sobre eSIM de operadores en Sudáfrica: operadores, cobertura y configuración → **Preguntas frecuentes sobre eSIM en Sudáfrica** ｜redundant tail
- L508 [T2 H3] Planes de datos de Sudáfrica, sin misterios → **Planes de datos en Sudáfrica, explicados** ｜stylistic filler
- L596 [T2 H3] ¿Cómo mantengo los mapas offline al día durante un viaje largo por carretera? → **¿Cómo mantengo los mapas sin conexión al día?** ｜English word
- L684 [T2 H3] RICA suena a pesadilla — ¿qué tan complicado es realmente conseguir una SIM local? → **¿Qué tan complicado es el registro RICA en Sudáfrica?** ｜dramatic filler
- L726 [T2 H2] ¿Cuánta data es suficiente? → **¿Cuántos datos son suficientes para Sudáfrica?** ｜Spanglish word

### south-korea-esim-carrier-guide.md（T1: 3，T2: 3）

- L52 [**T1** H3] 5G mmWave en Corea del Sur: la nota al pie que no importa → **5G mmWave en Corea del Sur: ¿debe preocuparle?** ｜literary metaphor
- L212 [**T1** H2] El ecosistema de aplicaciones coreano que su eSIM tiene que alimentar → **Aplicaciones coreanas que debe descargar antes de volar** ｜cryptic metaphor
- L308 [**T1** H3] Dimensionar su paquete de datos en Corea del Sur → **Cómo elegir cuántos datos necesita en Corea del Sur** ｜technical jargon
- L38 [T2 H2] SK Telecom, KT y LG U+: la diferencia medida → **SK Telecom, KT y LG U+ comparados** ｜cryptic tail
- L109 [T2 H2] Reglas de documentación para SIMs → **Documentos necesarios para una SIM en Corea del Sur** ｜terse, vague
- L123 [T2 H2] SIM local vs eSIM de viaje: las cuentas → **SIM local frente a eSIM de viaje: los costes** ｜cryptic tail

### spain-esim-carrier-guide.md（T1: 2，T2: 3）

- L53 [**T1** H2] Detrás de su eSIM: el plantel de operadores → **Los operadores detrás de su eSIM en España** ｜sports-team metaphor
- L737 [**T1** H2] Cómo dimensionar su plan de datos → **Cómo elegir cuántos datos necesita** ｜technical jargon
- L373 [T2 H3] El mejor eSIM para España según cómo viaja usted → **La mejor eSIM para España según su viaje** ｜gender error
- L471 [T2 H3] España redes: detalles del APN → **Detalles del APN de las redes españolas** ｜garbled word order
- L499 [T2 H2] Cómo activar su eSIM en España y resolver problemas? → **Cómo activar su eSIM en España y resolver problemas** ｜stray question mark

### sweden-esim-carrier-guide.md（T1: 3，T2: 0）

- L141 [**T1** H2] Suecia de norte a sur: los lugares nombrados, con sus vacíos → **Cobertura de Suecia de norte a sur, lugar por lugar** ｜cryptic phrasing
- L214 [**T1** H2] 5G en Suecia: Telia, Tele2 y Telenor Comparativa de cobertura 5G en Suecia → **5G en Suecia: comparativa de cobertura de Telia, Tele2 y Telenor** ｜two headings merged
- L303 [**T1** H3] Three casos de eSIM en Suecia que parecen averías y no lo son → **Tres fallos aparentes de eSIM que no lo son** ｜leaked English word

### switzerland-esim-carrier-guide.md（T1: 0，T2: 4）

- L53 [T2 H2] Operadores en el punto de mira para su eSIM → **Los operadores de eSIM en Suiza, comparados** ｜metaphor
- L207 [T2 H2] Las formas de obtener realmente una eSIM suiza → **Cómo obtener una eSIM suiza** ｜filler word
- L645 [T2 H2] Su eSIM de Suiza: las preguntas que importan → **Preguntas frecuentes sobre la eSIM en Suiza** ｜vague tail
- L649 [T2 H3] Swisscom planes eSIM para visitantes → **Planes eSIM de Swisscom para visitantes** ｜garbled word order

### taiwan-esim-carrier-guide.md（T1: 4，T2: 3）

- L49 [**T1** H2] Datos: dimensionar bien → **Cómo elegir cuántos datos necesita** ｜technical jargon
- L113 [**T1** H3] Taiwan Mobile: el caballo de batalla urbano → **Taiwan Mobile: la mejor opción en la ciudad** ｜workhorse metaphor
- L459 [**T1** H2] Three modos de fallo únicos en viajes a Taiwán, China → **Tres modos de fallo únicos en viajes a Taiwán, China** ｜leaked English word
- L615 [**T1** H3] El lineup de operadores de Taiwán → **Los operadores móviles de Taiwán** ｜English word
- L323 [T2 H2] Qué plan de Taiwan se adapta a la forma de su viaje → **Qué plan de Taiwán se adapta a su viaje** ｜odd phrasing, missing accent
- L383 [T2 H2] Moverse por la isla: las aplicaciones que necesitan la línea de datos de su eSIM → **Las aplicaciones que necesitan datos móviles en Taiwán** ｜wordy
- L409 [T2 H2] La temporada de tifones en Taiwán y lo que hace a la conectividad móvil → **La temporada de tifones y la conectividad móvil en Taiwán** ｜garbled phrasing

### thailand-esim-carrier-guide.md（T1: 1，T2: 4）

- L38 [**T1** H3] NT y la capa de revendedores que viajan sobre AIS o TrueMove H → **NT y las marcas que alquilan las redes grandes** ｜cryptic jargon
- L235 [T2 H2] Desde la compra hasta los datos en funcionamiento: su guía de eSIM → **Cómo instalar y activar su eSIM en Tailandia** ｜wordy teaser
- L259 [T2 H3] Una verificación de solución de problemas de la eSIM de Tailandia en cuatro pasos → **Solución de problemas de la eSIM en cuatro pasos** ｜garbled, wordy
- L298 [T2 H3] AIS Planes eSIM para visitantes → **Planes eSIM de AIS para visitantes** ｜garbled word order
- L310 [T2 H3] ¿Quién presume de la cobertura más amplia en Tailandia? → **¿Quién tiene la cobertura más amplia en Tailandia?** ｜colloquial filler

### tunisia-esim-carrier-guide.md（T1: 2，T2: 5）

- L73 [**T1** H2] Una eSIM de Túnez tiene que funcionar para dos viajes diferentes → **Qué eSIM necesita según su viaje por Túnez** ｜cryptic teaser
- L261 [**T1** H3] Ooredoo Túnez: el producto más面向 visitantes → **Ooredoo Túnez: el producto más orientado a visitantes** ｜Chinese characters leaked
- L121 [T2 H2] Cobertura en la semana de costa en Túnez: Túnez, Sidi Bou Said y Djerba → **Cobertura en la costa de Túnez: Túnez, Sidi Bou Said y Djerba** ｜odd phrasing
- L179 [T2 H2] Cobertura del sur de Túnez: Tozeur, Douz y el sur → **Cobertura del sur de Túnez: Tozeur, Douz y Kebili** ｜redundant tail
- L621 [T2 H3] Configuración en diez minutos de la eSIM de Túnez para un aterrizaje conectado → **Configure su eSIM de Túnez en diez minutos** ｜wordy
- L671 [T2 H2] El listado de preguntas → **Preguntas frecuentes sobre la eSIM en Túnez** ｜vague label
- L807 [T2 H2] Pruebe Túnez gratis y luego elija su plan → **Pruebe gratis la eSIM de Túnez y elija su plan** ｜ambiguous phrasing

### turkey-esim-carrier-guide.md（T1: 1，T2: 3）

- L53 [**T1** H2] El plantel de operadores bajo su eSIM → **Los operadores detrás de su eSIM en Turquía** ｜sports-team metaphor
- L525 [T2 H3] eSIM de Turquía: secuencia de activación → **eSIM de Turquía: activación paso a paso** ｜jargon word
- L615 [T2 H2] Respuestas bajo demanda: eSIMs de operadores en Turquía → **Preguntas frecuentes sobre eSIM en Turquía** ｜odd label
- L619 [T2 H3] Turkcell planes eSIM para visitantes → **Planes eSIM de Turkcell para visitantes** ｜garbled word order

### uganda-esim-carrier-guide.md（T1: 1，T2: 8）

- L637 [**T1** H2] eSIM de Uganda, activa antes de llegar a la sala de llegadas de Entebbe → **Active su eSIM de Uganda antes de aterrizar en Entebbe** ｜tú form, wordy
- L93 [T2 H2] Los dos operadores uno al lado del otro: MTN vs Airtel → **MTN frente a Airtel: comparativa directa** ｜wordy filler phrase
- L255 [T2 H3] Registro de SIM en Uganda en Entebbe: qué exigen los mostradores de la UCC → **Registro de SIM en Entebbe: qué exige la UCC** ｜repetitive double place name
- L291 [T2 H3] Por qué es importante un número de eSIM en Uganda: dinero móvil (MoMo y Airtel Money) → **Por qué un número local importa: MoMo y Airtel Money** ｜overlong, buries point
- L365 [T2 H3] Su eSIM para Uganda, ajustada al viaje → **Cuántos datos necesita según su viaje** ｜vague, hides data sizing
- L413 [T2 H2] Fallos de la eSIM en Uganda, y los que solo ocurren aquí → **Problemas habituales de la eSIM en Uganda** ｜wordy stylistic tail
- L437 [T2 H3] Zonas sin cobertura en Uganda: la señal cae fuera del último pueblo → **Zonas sin cobertura en Uganda** ｜literary tail
- L521 [T2 H2] Países vecinos Roaming → **Itinerancia en los países vecinos** ｜scrambled word order
- L593 [T2 H3] ¿Su dispositivo pasa el filtro de eSIM para Uganda? → **¿Su teléfono admite eSIM en Uganda?** ｜odd "filtro" metaphor

### ukraine-esim-carrier-guide.md（T1: 2，T2: 4）

- L27 [**T1** H2] Three redes detrás de cada eSIM: cómo funciona realmente el móvil en Ucrania → **Las tres redes detrás de su eSIM en Ucrania** ｜English "Three" artifact
- L213 [**T1** H2] Más allá de la frontera → **Su eSIM de Ucrania en el extranjero** ｜teaser hides roaming topic
- L82 [T2 H2] ¿Comprar directamente o usar su eSIM que instala con antelación? → **¿Comprar una SIM local o instalar su eSIM antes?** ｜clunky phrasing
- L177 [T2 H3] Respaldo eléctrico de las estaciones celulares en Ucrania, medido → **Respaldo eléctrico de las antenas en Ucrania** ｜stylistic "medido" tail
- L252 [T2 H3] Escalafón de tarifas de los operadores de Ucrania: cómo leerlo → **Tarifas de los operadores de Ucrania: cómo leerlas** ｜obscure word "escalafón"
- L269 [T2 H2] Configuración de datos (APN) para la eSIM de Kyivstar, la eSIM de Vodafone para Ucrania o lifecell → **Configuración del APN para Kyivstar, Vodafone y lifecell** ｜repetitive, overlong

### united-arab-emirates-esim-carrier-guide.md（T1: 2，T2: 6）

- L253 [**T1** H3] Lo que realmente te ofrece la eSIM gratuita de llegada → **Qué ofrece realmente la eSIM gratuita de llegada** ｜tú form, usted article
- L479 [**T1** H3] Pagar en los EAU: tarjetas, wallets, peajes y tu número de eSIM → **Pagar en los EAU: tarjetas, monederos y su eSIM** ｜tú form, English "wallets"
- L77 [T2 H3] Marcas de eSIM en los EAU: lo que significa realmente cada etiqueta en el estante → **Marcas de eSIM en los EAU: qué significa cada una** ｜shopping-metaphor tail
- L93 [T2 H3] Paquetes e&amp; Visitor Line: precios de la eSIM de los EAU paquete por paquete → **Precios de los paquetes e&amp; Visitor Line** ｜repetitive filler
- L163 [T2 H2] ¿du o e&amp; para su eSIM en los EAU? Los productos para visitantes, uno al lado del otro → **¿du o e&amp;? Productos para visitantes, comparados** ｜filler second phrase
- L195 [T2 H3] menús para visitantes de e&amp; frente a du: leyendo ambos a la vez → **Planes para visitantes de e&amp; y du, comparados** ｜menu metaphor, lowercase
- L529 [T2 H3] Ajustes APN en EAU: el único campo que vale la pena modificar en un perfil de du o e&amp; → **Ajustes del APN: el único campo que conviene modificar** ｜overlong
- L733 [T2 H2] Lea el menú y luego compre su eSIM de EAU → **Compare los planes y compre su eSIM de EAU** ｜cryptic menu metaphor

### united-kingdom-esim-carrier-guide.md（T1: 10，T2: 0）

- L69 [**T1** H3] UK vs EE: ¿qué operador del Reino Unido es más rápido? → **¿Qué operador del Reino Unido es más rápido?** ｜"UK" not an operator
- L86 [**T1** H3] Cobertura rural en Reino Unido: UK frente a EE → **Cobertura rural: Vodafone frente a EE** ｜"UK" not an operator
- L150 [**T1** H3] 5. Dos ajustes determinan si su eSIM funciona al llegar → **Dos ajustes que determinan si su eSIM funciona** ｜leaked list numbering
- L221 [**T1** H2] Cobertura de eSIM en el Reino Unido: UK frente a EE → **Cobertura de eSIM en el Reino Unido por región** ｜"UK" not an operator
- L244 [**T1** H2] Encuentra un operador del Reino Unido según tu viaje → **Encuentre su operador según su viaje** ｜tú form, usted article
- L290 [**T1** H3] UK vs EE: ¿cuál es mejor en el Reino Unido? → **Qué reunir antes de contactar con soporte** ｜artifact, mismatches content
- L319 [**T1** H3] ¿Se permite tethering desde una eSIM del Reino Unido? → **¿Se puede compartir la conexión de su eSIM?** ｜English jargon "tethering"
- L343 [**T1** H3] P: ¿Qué pasa con mi eSIM del Reino Unido al cruzar a Irlanda? → **¿Qué pasa con mi eSIM al cruzar a Irlanda?** ｜leaked "P:" prefix
- L353 [**T1** H2] Consejos sobre la eSIM del Reino Unido que no sobreviven al contacto con el país → **Mitos sobre la eSIM del Reino Unido** ｜literary metaphor, cryptic
- L355 [**T1** H3] UK frente a EE 5G: ¿cuál es mejor en el Reino Unido? → **¿Qué red 5G es mejor en el Reino Unido?** ｜"UK" not an operator

### united-states-esim-carrier-guide.md（T1: 13，T2: 4）

- L27 [**T1** H2] Cada su eSIM y las opciones de su operador → **Su eSIM y las opciones de cada operador** ｜broken grammar artifact
- L157 [**T1** H3] T-Mobile eSIM planes para visitantes → **Planes eSIM de T-Mobile para visitantes** ｜English word order
- L272 [**T1** H3] Three soluciones cuando su eSIM en los Estados Unidos no funciona → **Tres soluciones si su eSIM no funciona** ｜English "Three" artifact
- L302 [**T1** H2] Preguntas de viajeros reales sobre el operador de eSIM de United States → **Preguntas de viajeros sobre la eSIM en Estados Unidos** ｜English "United States" artifact
- L308 [**T1** H3] ¿Una eSIM de Verizon requiere una dirección de United States o SSN? → **¿Verizon exige dirección o número de la Seguridad Social?** ｜English "United States" artifact
- L312 [**T1** H3] ¿Puedo obtener una eSIM prepagada de AT&amp;T sin verificación de credit en United States? → **¿Una eSIM prepagada de AT&amp;T exige verificación de crédito?** ｜English "credit", "United States"
- L316 [**T1** H3] Cobertura rural en United States: T-Mobile frente a Verizon → **Cobertura rural en Estados Unidos: T-Mobile frente a Verizon** ｜English "United States" artifact
- L324 [**T1** H3] Teléfonos problemáticos para eSIM de viaje en United States → **Teléfonos problemáticos para eSIM de viaje** ｜English "United States" artifact
- L328 [**T1** H3] ¿Cómo desbloqueo mi teléfono bloqueado en United States? → **¿Cómo desbloqueo mi teléfono en Estados Unidos?** ｜English artifact, repetition
- L332 [**T1** H3] ¿Comprar a un operador de United States o usar una eSIM de viaje? → **¿Comprar a un operador local o usar una eSIM?** ｜English "United States" artifact
- L335 [**T1** H3] ¿Ofrecen los operadores de United States planes eSIM específicos para turistas? → **¿Ofrecen los operadores de Estados Unidos planes para turistas?** ｜English "United States" artifact
- L346 [**T1** H3] ¿La activación en United States no funciona? Pruebe esto → **¿La activación de su eSIM no funciona?** ｜English "United States" artifact
- L352 [**T1** H2] Fuentes de las cifras de eSIM en United States → **Fuentes de las cifras de eSIM en Estados Unidos** ｜English "United States" artifact
- L40 [T2 H3] Cricket, Visible, Metro y el nivel de los MVNO estadounidenses → **Cricket, Visible y Metro: operadores económicos** ｜jargon "MVNO"
- L68 [T2 H2] Lo que su eSIM le exige al dispositivo → **Requisitos del teléfono para su eSIM** ｜odd phrasing, vague
- L188 [T2 H3] Su plan de viaje, adaptado al mejor operador de Estados Unidos → **El mejor operador según su tipo de viaje** ｜vague, wordy
- L247 [T2 H2] Instalación hasta tener datos operativos: la ruta de un eSIM en Estados Unidos → **Instalación de la eSIM en Estados Unidos** ｜route metaphor, wordy

### uruguay-esim-carrier-guide.md（T1: 3，T2: 4）

- L223 [**T1** H3] Lo que el mapa uruguayo no le va a contar → **Lo que los mapas de cobertura no muestran** ｜teaser hides coverage topic
- L259 [**T1** H3] Del código a la conexión en Uruguay → **Ruta 1 — Instale su eSIM antes de volar** ｜cryptic, breaks Ruta numbering
- L381 [**T1** H3] Valores APN para las eSIM de Antel, Claro y Punta del Este → **Valores APN para las eSIM de Antel, Movistar y Claro** ｜city listed as operator
- L127 [T2 H3] Movistar eSIM: la alternativa urbano-costera en Uruguay → **Movistar: la alternativa en ciudades y costa** ｜coined compound "urbano-costera"
- L415 [T2 H3] Pre-vuelo de la eSIM en Uruguay: seis cosas para configurar en el Wi-Fi de casa → **Antes de volar: seis ajustes para su eSIM** ｜aviation metaphor, overlong
- L649 [T2 H3] ¿Es Punta del Este usable en enero? → **¿Funciona bien Punta del Este en enero?** ｜Spanglish "usable"
- L689 [T2 H3] Cómo se descomponen los planes de datos en Uruguay → **Qué plan conviene según la duración de su viaje** ｜odd wording, vague

### venezuela-esim-carrier-guide.md（T1: 1，T2: 8）

- L385 [**T1** H2] Dimensionar un plan de datos en Venezuela → **Fuentes de las cifras de esta guía** ｜jargon, mismatches sources content
- L33 [T2 H2] Venezuela es conectividad en modo difícil, y la planificación le gana a la suerte → **El estado de la conectividad en Venezuela** ｜gaming metaphor, literary
- L45 [T2 H3] ¿Qué operador de Venezuela tiene la mayor huella? → **¿Qué operador tiene la mayor cobertura en Venezuela?** ｜metaphor "huella"
- L110 [T2 H3] Dónde la huella más amplia de Movilnet marca la diferencia → **Dónde conviene la cobertura de Movilnet** ｜metaphor "huella", wordy
- L174 [T2 H3] Santa Elena, la Gran Sabana y Los Roques: el mapa delgado de Venezuela → **Santa Elena, la Gran Sabana y Los Roques: cobertura limitada** ｜metaphor "mapa delgado"
- L212 [T2 H2] Recargas de eSIM en Venezuela, tamaño del plan y lo que necesita un viaje → **Recargas y tamaño del plan en Venezuela** ｜overlong, crammed
- L274 [T2 H3] APN manual: cuándo lo necesita Venezuela → **APN manual: cuándo lo necesita en Venezuela** ｜garbled subject
- L343 [T2 H3] La matemática entre eSIM local y de viaje en Venezuela → **eSIM local o de viaje: cuál conviene en Venezuela** ｜odd phrasing "matemática"
- L371 [T2 H3] eSIM de Venezuela, desde la instalación hasta en funcionamiento → **eSIM de Venezuela: de la instalación al funcionamiento** ｜broken "hasta en funcionamiento"

### vietnam-esim-carrier-guide.md（T1: 10，T2: 4）

- L53 [**T1** H2] Qué operadores en Vietnamia alojarán su eSIM → **Qué operadores de Vietnam admiten su eSIM** ｜nonexistent word "Vietnamia"
- L259 [**T1** H3] La visita al counter de SIM Vietnamita, paso a paso → **Comprar la SIM en el mostrador del aeropuerto** ｜English "counter" artifact
- L313 [**T1** H3] Lo que le permite saltarse una eSIM de viaje → **Por qué una eSIM de viaje le ahorra el registro** ｜reversed, cryptic meaning
- L335 [**T1** H3] Vietnam: el lineup de operadores → **Los operadores de Vietnam de un vistazo** ｜English "lineup" artifact
- L357 [**T1** H2] Mejor operador de eSIM para Vietnam en tu viaje: Viettel vs Vinaphone → **Mejor operador de eSIM para Vietnam: Viettel vs Vinaphone** ｜tú form, usted article
- L389 [**T1** H2] ¿Funcionará su teléfono en una red Viietnamita? → **¿Funcionará su teléfono en una red vietnamita?** ｜typo "Viietnamita"
- L473 [**T1** H3] ¿Qué Vietnam operador debería elegir: Viettel o Vinaphone? → **¿Qué operador elegir: Viettel o Vinaphone?** ｜scrambled word order
- L711 [**T1** H2] Datos en Viietnam para dos semanas: recargas y códigos USSD → **Datos para dos semanas en Vietnam: recargas y códigos** ｜typo "Viietnam"
- L723 [**T1** H3] Cómo recargar una SIM local Viietnamita → **Cómo recargar una SIM local en Vietnam** ｜typo "Viietnamita"
- L737 [**T1** H3] ¿Son 20 GB excesivos para Viietnam? → **¿Son 20 GB demasiados para Vietnam?** ｜typo "Viietnam"
- L435 [T2 H2] Activar una eSIM de Vietnam sin complicaciones → **Cómo activar su eSIM de Vietnam** ｜filler "sin complicaciones"
- L797 [T2 H2] Eventos de red en Vietnam: Tet, tifones y saturación de la red → **Tet, tifones y saturación de la red en Vietnam** ｜jargon "eventos de red"
- L829 [T2 H2] Preguntas sobre la marcha sobre las eSIM de los operadores en Vietnam → **Preguntas frecuentes sobre las eSIM en Vietnam** ｜double "sobre", wordy
- L897 [T2 H3] Filtrado de IMEI y EID para eSIMs de Vietnam → **Comprobación de IMEI y EID para su eSIM** ｜odd "filtrado" jargon

## 五、附注：正文（非标题）污染线索

审查标题时顺带发现以下正文位置有中文/乱码/AI 残留（本次未处理，建议另开一轮清理）：

- latvia L146 / L162（正文中文/乱码混入）
- kuwait L202 / L220（正文残留）
- iraq L315（正文残留）
- israel L202（正文残留）
- kazakhstan L877（正文 "la ruta自驾" 中文字符）

---

**报告生成方式**：8 个只读审查 agent 分批（并发 ≤3）覆盖 99 篇 / 4361 个标题；原始发现存于 `D:\skills\uiuxpro\es-heading-review-raw.md`（含各批次 SUMMARY）。
**说明**：所有建议标题均为西班牙语（usted 人称、纯西语词汇、仅保留 eSIM/SIM/APN/IMEI/EID/5G 等通用缩写）。替换后建议跑一次快速 front matter 校验即可，不必为标题跑完整 Hugo 构建。