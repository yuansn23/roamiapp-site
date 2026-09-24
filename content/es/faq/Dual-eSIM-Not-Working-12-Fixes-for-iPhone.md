---
title: "¿Doble eSIM que no funciona? 12 soluciones para iPhone"
h1_title: "Cómo corregir el doble eSIM que no funciona en iPhone: 12 soluciones"
description: "¿Doble eSIM que no funciona? Corrige 12 problemas de iPhone: enrutamiento de llamadas, configuración VoLTE, consumo de batería y comprobaciones de bloqueo de operadora para iPhone 16 e iOS 18."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["doble eSIM no funciona", "iPhone doble SIM sin servicio", "problema de señal doble eSIM", "bloqueo de operadora eSIM", "solución de problemas doble eSIM", "activación de doble eSIM fallida", "eSIM iOS 18", "ajustes APN eSIM", "código de confirmación eSIM", "doble eSIM sin servicio"]
date: 2026-09-16T00:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Actualizado el"
  min_read: "min de lectura"
  toc: "Tabla de contenidos"

breadcrumbs:
  home:
    text: "Inicio"
    url: "/"
  parent:
    text: "Centro de ayuda"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIM populares"
  item_suffix: "eSIM"
  items:
    - name: "EE. UU."
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Alemania"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turquía"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japón"
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
  title: "Reclama una eSIM gratis"
  icon: "🎁"
  item_suffix: "eSIM gratis"
  item_subtitle: "eSIM gratis"
  items:
    - name: "eSIM Reino Unido"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Alemania"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Tailandia"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "Preguntas populares"
  items:
    - question: "¿Qué es la activación de una eSIM y cómo funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "¿Cómo activar una eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "¿Cómo activar la eSIM en iPhone (todos los modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista de compatibilidad de eSIM más reciente"
      url: "/compatibility/"
---


> **Nota del editor:** Un doble eSIM que pierde una línea casi siempre se debe a un bloqueo de operadora, un APN mal configurado o un ajuste de doble SIM — no a un plan muerto. Cada solución a continuación sigue la documentación oficial de Apple y los estándares del GSMA y apunta a un síntoma específico. Recorre la tabla de diagnóstico para encontrar la solución exacta para tu error.
> 
> **Puntos clave:** VoLTE o los límites del plan son la razón más común de que una línea no pueda hacer ni recibir llamadas. Los problemas de enrutamiento de llamadas entrantes suelen corregirse desactivando y reactivando las Llamadas Wi-Fi. Los iPhone son de doble espera, no de doble activo – el "Sin servicio" en la otra línea durante una llamada es normal. Consulta el Bloqueo por operadora en Ajustes (`Sin restricciones de SIM`) si no puedes añadir una segunda eSIM. El consumo de batería del doble eSIM puede reducirse desactivando la 5G en la línea con señal más débil.

La mayoría de los problemas de doble eSIM en el iPhone se remontan a cinco causas: un bloqueo de operadora, un límite de plan o de VoLTE, los ajustes de itinerancia de datos o de línea predeterminada, un comportamiento normal de doble espera que solo parece una falla, o un fallo de iOS que se limpia con un restablecimiento de ajustes. Empareja tu síntoma en el índice de abajo y aplica la solución correspondiente — la mayoría toma menos de cinco minutos.


## Cómo Corregir el Doble eSIM Que No Funciona

**Tu teléfono tiene problemas de doble eSIM. ¿Cuál es?**

| Tu síntoma | Ir a la solución |
|--------------|-------------|
| **La segunda eSIM muestra "Sin servicio"** pero la primera funciona | [Solución #2](#why-one-dual-esim-line-shows-no-service) |
| **Puede llamar pero NO puede recibir llamadas** | [Solución #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Durante una llamada, la otra línea dice "Sin servicio"** | [Solución #4](#one-line-showing-no-service-during-a-call-is-normal) – ¡esto es normal! |
| **No puede añadir la segunda eSIM – error de "bloqueo de operadora"** | [Solución #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **La batería se agota más rápido con dos líneas** | [Solución #6](#how-to-reduce-dual-esim-battery-drain) |
| **La SIM física no se reconoce** | [Solución #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **iPhone de China – sin opción de eSIM alguna** | [Solución #8](#dual-esim-in-china-hong-kong-and-macau) – limitación de hardware |
| **Los datos funcionan pero sin internet (problema de APN)** | [Solución #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – configuración APN |
| **eSIM eliminada por accidente** | [FAQ #9](#frequently-asked-questions) – depende del proveedor |
| **No estoy seguro – otra cosa** | [Tabla completa de solución de problemas](#dual-esim-troubleshooting-table) |

> 💡 **Idea clave:** Si usas **dos líneas en un iPhone**, los iPhone son de **doble espera, no de doble activo** – cuando estás en una llamada, la otra línea dirá temporalmente "Sin servicio". Esto es **comportamiento normal** (ver Solución #4). No pierdas el tiempo intentando "arreglarlo".

Si tus problemas de doble SIM se remontan a una instalación mal hecha, empieza con la [guía general de activación de eSIM](/faq/how-to-activate-an-esim/), y luego recorre las soluciones de abajo — y para cualquier mensaje de error que esta página no mencione, la [Guía avanzada de solución de problemas de eSIM](/faq/esim-deep-troubleshooting-guide-2026/) cubre cada caso a fondo.


## Guía Completa de Solución de Problemas de Doble eSIM

Este es el camino que la mayoría de los usuarios de iPhone siguen cuando el doble eSIM no funciona. Úsalo para registrar dónde estás.

| Paso | Qué está pasando | Qué hacer | Dónde encontrarlo |
| :--- | :--- | :--- | :--- |
| **1. Identifica el síntoma** | "Mi segunda eSIM no tiene señal." / "No puedo recibir llamadas." / "La batería se agota rápido." | Empareja tu síntoma con la tabla de Diagnóstico Rápido de arriba. | [Diagnóstico Rápido de 10 Segundos](#dual-esim-quick-diagnostic-index) |
| **2. Comprueba si es comportamiento normal** | "Durante una llamada, mi otra línea muestra Sin servicio." | Esto es **normal** en iPhones de doble espera. Salta a la Solución #4. | [Solución #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Descarta el bloqueo de operadora** | "No puedo añadir una segunda eSIM en absoluto." | Consulta el Bloqueo por operadora en Ajustes. Debe decir "Sin restricciones de SIM". | [Solución #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Aplica la solución** | Sigue la solución específica para tu síntoma. | Una de las 12 soluciones de abajo resolverá tu problema. | [Soluciones #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. ¿Sigue sin funcionar?** | "Ninguna solución funcionó." | Usa las opciones de respaldo de la tabla de solución de problemas. | [Tabla de solución de problemas](#dual-esim-troubleshooting-table) |


## Índice Rápido de Diagnóstico de Doble eSIM

| Síntoma | Causa más probable | Sección de solución |
|---------|-------------------|--------------|
| La segunda eSIM muestra "Sin servicio" pero la primera funciona | Problema de VoLTE u orden de líneas | [#2](#why-one-dual-esim-line-shows-no-service) |
| Un número puede llamar pero no puede recibir llamadas | Desajuste de enrutamiento de llamadas entrantes | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Durante una llamada, la otra línea dice "Sin servicio" | El iPhone usa una red de datos a la vez (normal) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| No se puede añadir la segunda eSIM – error de "bloqueo de operadora" | Dispositivo bloqueado a la primera operadora | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| El doble eSIM funciona pero agota la batería más rápido | Ambas líneas buscando activamente | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + SIM física: la SIM física no se reconoce | Problema de bandeja SIM o tarjeta incompatible | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| Los datos muestran barras de señal pero sin internet | Ajustes APN ausentes o incorrectos | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## ¿Cuáles Son Tus Opciones de Doble eSIM en iPhone?

Desde el iPhone XS, XR y todos los modelos más nuevos (incluido el iPhone 16), Apple admite doble eSIM (dos eSIM activas simultáneamente) en el iPhone 13 y posteriores. Los modelos fuera de EE. UU. también admiten una eSIM más una nano-SIM física. Los modelos de China continental de doble SIM física no tienen soporte de eSIM, excepto el iPhone 16.

Tu configuración de **doble eSIM** depende del modelo de iPhone y la región:

| Configuración | Modelos compatibles | Máx. de líneas activas |
|---------------|------------------|------------------|
| **Doble eSIM** | iPhone 13 y más nuevos (incluidos todos los modelos de iPhone 16) | 2 |
| **1 eSIM + 1 nano-SIM física** | Todos los iPhone con bandeja de SIM (modelos fuera de EE. UU., y modelos de EE. UU. anteriores al iPhone 14) | 2 |
| **Solo 1 SIM física** | iPhones más antiguos (anteriores al XS) | 1 |
| **2 SIM físicas** | Modelos específicos de doble bandeja SIM de China continental, Hong Kong y Macao (p. ej., iPhone 16 versión China) | 2 |

Para una lista completa de iPhones compatibles, [consulta la compatibilidad de doble eSIM de tu iPhone](/compatibility/).


## Por Qué Una Línea de Doble eSIM Muestra Sin Servicio

Si una de tus líneas de doble eSIM puede usar datos pero no puede hacer ni recibir llamadas — **o muestra "Sin servicio" por completo** — las causas más comunes en 2026 son:

- **VoLTE / VoNR no está activado** para esa línea. Algunas operadoras desactivan el roaming de voz sobre datos en los planes eSIM, lo que deja la línea solo con datos. (Manera simple de comprobarlo: si puedes usar datos pero no puedes llamar, este es probablemente el problema.)
- **El orden de las líneas**. iOS enruta la voz a tu *línea de voz predeterminada*; una línea secundaria configurada solo para datos no puede hacer ni recibir llamadas.
- **El plan no incluye llamadas**. Algunas eSIM de viaje son de solo datos por diseño y no tienen servicio de voz. Si es el caso, verás barras de señal pero intentar llamar fallará.

> **Nota:** Las redes heredadas 3G/CDMA fueron retiradas en EE. UU. y Japón. Verizon y US Cellular apagaron CDMA entre 2022 y 2024, y au/KDDI terminó su 3G en 2022. En 2026, una línea "sin servicio de voz" es casi siempre un problema de VoLTE, de plan o de orden de líneas — no de CDMA.

### Soluciones
- **Establece la línea afectada como tu línea de voz predeterminada**: `Ajustes > Datos móviles > Línea de voz predeterminada`.
- **Activa VoLTE**: `Ajustes > Datos móviles > [línea] > Voz y datos`, luego selecciona LTE o 5G (VoLTE/VoNR).
- **Confirma que el plan incluye llamadas**. Si es una eSIM de viaje de solo datos, mantén tu línea de origen como línea de voz y usa la eSIM solo para datos.
- **Contacta a tu operadora** para verificar que la voz sobre LTE/5G esté activada para tu número en itinerancia.

Para una comparación más profunda de las redes de operadoras de EE. UU., consulta nuestra **comparación de redes de operadoras de EE. UU.** en la [guía de planes eSIM de EE. UU.](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/).


## Una Línea de Doble eSIM Que No Puede Recibir Llamadas

**Síntoma**: La línea A funciona bien. La línea B puede hacer llamadas salientes, pero las llamadas entrantes a B van directo al buzón de voz o suenan como "no disponible".

**Causa raíz**: Un desajuste de enrutamiento de llamadas de la red. Cuando la línea B cambió recientemente entre 5G y LTE, o usó Llamadas Wi-Fi, la red de la operadora aún puede intentar enrutar las llamadas entrantes por el camino equivocado.

**Analogía:** Imagina que la operadora tiene una agenda antigua que todavía ubica tu teléfono en tu casa anterior. Cuando alguien llama, va al lugar equivocado. Alternar las Llamadas Wi-Fi actualiza la agenda.

### Solución rápida en tu teléfono
1. Desactiva temporalmente las **Llamadas Wi-Fi**: `Ajustes > Datos móviles > Línea B > Llamadas Wi-Fi` → DESACTIVADO.
2. Reinicia el iPhone.
3. Vuelve a activar las Llamadas Wi-Fi.

### Solución con la operadora llamando al soporte
Pide a tu operadora que **restablezca el enrutamiento de llamadas** o **actualice la línea** para este número. Esto suele hacerse efectivo poco después de que la operadora reprovisione la línea. Para más problemas de enrutamiento de llamadas y otros asuntos relacionados con llamadas, consulta la **[Solución 3 de arriba](#a-dual-esim-line-that-cannot-receive-calls)**.

### Prevenir que se repita
- Evita cambiar rápidamente entre 5G/LTE (mantén un modo durante al menos unas horas).
- Si viajas con frecuencia, mantén la **Itinerancia de datos** DESACTIVADA para la línea que no necesita datos.


## Que Una Línea Muestre Sin Servicio Durante Una Llamada Es Normal

**Síntoma**: Estás en una llamada usando la línea A. Al revisar, la línea B muestra "Sin servicio".

**Explicación**: Los iPhone son de **doble espera, no de doble activo** (también conocido como DSDS – Dual SIM Dual Standby). Solo una línea puede mantener una conexión celular a la vez. Durante una llamada, la otra línea queda temporalmente inalcanzable. En cuanto la llamada termina, ambas líneas se reconectan. Esto **no es una falla del doble eSIM** – es por diseño.

### Lo Que Puedes Hacer
- **Activa las Llamadas Wi-Fi en ambas líneas** – así la línea inactiva puede usar Wi-Fi para recibir llamadas mientras estás en la otra. La [documentación de doble espera de Apple](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) lo explica con más detalle.
- **Activa "Permitir cambio de datos móviles"** – en `Ajustes > Datos móviles > Datos móviles`. Esto permite a la línea sin datos usar la conexión de la línea de datos para las Llamadas Wi-Fi.

> 📌 Nota: Algunas operadoras no admiten Llamadas Wi-Fi simultáneamente en ambas líneas. Consulta con tu operadora.


## Doble eSIM Que No Funciona en un Teléfono Bloqueado Por Operadora

Si no puedes añadir una segunda eSIM o SIM física:
- Tu iPhone podría estar **bloqueado por operadora** a la primera operadora.
- Para comprobarlo: `Ajustes > General > Información` → desplázate hasta **Bloqueo por operadora**. Debe decir "Sin restricciones de SIM".

### Qué Hacer Si Tu Teléfono Está Bloqueado
- Contacta a tu operadora para solicitar el desbloqueo. Las operadoras de EE. UU. deben desbloquear tras pagar el dispositivo.
- Si está desbloqueado pero sigue sin funcionar, puede que necesites restablecer los ajustes de red: `Ajustes > General > Transferir o restablecer iPhone > Restablecer > Restablecer ajustes de red`. (Advertencia: esto olvida las contraseñas Wi-Fi.)

Una vez desbloqueado, también puedes mover tu eSIM entre iPhone y Android – consulta nuestra **[guía de Transferencia de eSIM Entre Plataformas 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** para instrucciones paso a paso.


## Cómo Reducir el Consumo de Batería del Doble eSIM

Ejecutar **doble eSIM** o incluso eSIM + SIM física puede aumentar el consumo de batería porque ambas líneas permanecen conectadas activamente a la red. Así se minimiza el consumo manteniendo ambas líneas activas:

| Estrategia | Efecto |
|----------|--------|
| Establece la línea con señal más débil para **usar solo LTE** (no 5G) | Ahorro moderado |
| Desactiva la **Itinerancia de datos** en la línea que no se usa para datos | Ahorra escaneo |
| Desactiva la **5G independiente** (si tu operadora lo permite) | Ayuda mucho |
| Usa el **Modo de bajo consumo de datos** para apps en segundo plano en la línea secundaria | Ahorro menor |
| En zonas de señal muy baja, desactiva temporalmente la línea secundaria | Ahorro significativo |

Para desactivar una línea: `Ajustes > Datos móviles` → toca la línea → desactiva **Activar esta línea**. Si viajas internacionalmente con frecuencia, [prueba la eSIM gratis de Roami](/free-esim/) como alternativa eficiente en batería.


## Conflictos Entre eSIM y SIM Física y Problemas de Bandeja

**Síntoma**: Tu nano-SIM funciona en otro teléfono pero no en tu iPhone. O tu eSIM funciona bien pero la SIM física no se reconoce cuando ambas están instaladas.

**Causas comunes**:
- El iPhone está **bloqueado por operadora** a otra red.
- La bandeja SIM no está completamente insertada o está dañada.
- La tarjeta SIM es **demasiado antigua** (anterior a 4G) o está doblada.
- **Conflicto de SIM física**: En algunos iPhone, insertar una SIM física puede desactivar temporalmente la ranura eSIM si el dispositivo está bloqueado por operadora.

**Soluciones**:
1. Retira la bandeja, limpia los contactos con un paño suave.
2. Reinsértala con firmeza hasta el clic.
3. Reinicia el iPhone.
4. Si sigue sin reconocerse, prueba la SIM en otro teléfono – si funciona, el lector de SIM de tu iPhone podría estar defectuoso.
5. Reemplaza la tarjeta SIM en la tienda de la operadora (gratis para la mayoría de planes pospago).

> **Si tu eSIM desaparece tras insertar una SIM física:** Algunos iPhone bloqueados por operadora desactivan la ranura eSIM cuando se inserta una SIM física de otra operadora. Retira la SIM física, reinicia, y tu eSIM debería reaparecer. Luego contacta a tu operadora para desbloquear el dispositivo.

Si planeas pasarte completamente a la eSIM, consulta nuestra **[guía de eSIM del iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** para métodos de activación.


## Doble eSIM en China, Hong Kong y Macao

Los iPhone de China continental (excepto el iPhone 16) tienen dos ranuras de nano-SIM física y **ningún soporte de eSIM en absoluto**. Los modelos de Hong Kong y Macao normalmente admiten eSIM + SIM física. Si compras un iPhone de doble SIM física de China continental, no podrás instalar ninguna eSIM, incluidas las eSIM de viaje internacionales – esto es una limitación de hardware.

Apple vende modelos específicos de doble SIM física en **China continental**:
- iPhone 16, 17 Pro, 17 Pro Max: **dos ranuras de nano-SIM física** (sin eSIM excepto Air).
- iPhone 16: **solo eSIM** (global, incluida China).

Modelos de **Hong Kong y Macao**:
- Admiten **eSIM + SIM física** (como los modelos internacionales) o doble SIM física según el modelo.
- Verifica siempre antes de comprar si planeas usar planes eSIM de viaje.

> ⚠️ **Importante**: Si compras un iPhone de doble SIM física de China continental, **no podrás instalar ninguna eSIM** (incluidas las eSIM de viaje internacionales) – excepto el iPhone 16. Esto es una limitación de hardware, no un bloqueo de software.


## Doble eSIM para Líneas de Trabajo y Personales

Muchos usuarios mantienen un **número de trabajo** (eSIM) y un **número personal** (segunda eSIM o SIM física). Así se configura tu configuración de **doble eSIM** de forma limpia:

### Etiqueta las líneas con claridad
`Ajustes > Datos móviles` → toca una línea → `Etiqueta del plan de datos móviles` → elige "Negocios" o "Personal", o crea una etiqueta personalizada.

### Elige voz y datos predeterminados
- **Línea de voz predeterminada**: Qué línea usar al marcar desde la app Teléfono nativa (aún puedes elegir por llamada).
- **Datos móviles**: Qué línea usa los datos móviles. Activa **Permitir cambio de datos móviles** para que el teléfono pueda usar temporalmente los datos de la otra línea si la principal pierde señal.

### Separa los contactos
- Asigna contactos a una línea específica: Editar contacto → `Línea preferida` → selecciona negocios o personal.

### Evita la itinerancia accidental
- Desactiva la **Itinerancia de datos** para la línea de trabajo si tiene tarifas internacionales caras.


## Tabla de Solución de Problemas de Doble eSIM

| Problema | Paso inmediato | Solución a largo plazo | Si sigue sin funcionar |
|---------|----------------|----------------|----------------------|
| La segunda eSIM nunca recibe señal | Reinicia el iPhone, luego alterna la línea apagado/encendido | Confirma que el plan está activo y la línea habilitada | Contacta a la operadora para reprovisionar la eSIM |
| Las llamadas van directo al buzón (sin sonar) | Desactiva "Silenciar llamadas desconocidas" y el desvío de llamadas | Contacta a la operadora para restablecer el enrutamiento de llamadas | Restablece los ajustes de red |
| No se reciben SMS en la segunda línea | Envía un SMS de prueba desde esa línea a cualquier número | Asegúrate de que la línea no sea solo de datos; la operadora puede necesitar habilitar los SMS | Usa la app de la operadora para resincronizar la línea |
| Dos eSIM pero ambas muestran "Sin servicio" | Modo avión encendido/apagado > comprueba el bloqueo de operadora | Restaura los ajustes de red | Comprueba si la operadora tiene una interrupción en tu zona |
| Cambiaste de líneas y ahora FaceTime/iMessage no se activan | Ve a `Ajustes > Mensajes > Enviar y recibir` – selecciona los números manualmente | Cierra sesión del ID de Apple y vuelve a entrar | Contacta al Soporte de Apple |
| Los datos muestran señal pero sin internet | Revisa los ajustes APN (ver Solución #11) | Configura el APN manualmente | Contacta al proveedor de eSIM para el APN correcto |
| eSIM eliminada accidentalmente | Comprueba si el proveedor permite volver a descargarla | Contacta a la operadora para un nuevo código QR | eSIM de viaje: compra un plan nuevo |
| Se insertó una SIM física y la eSIM desaparece | El teléfono bloqueado por operadora desactiva la eSIM con una SIM extranjera | Retira la SIM física, reinicia, la eSIM reaparece | Contacta a la operadora para desbloquear el dispositivo |


## Cómo Configurar los Ajustes APN Si Tu eSIM No Tiene Datos

**Síntoma**: Tu eSIM muestra todas las barras de señal (o "Sin servicio") pero no tienes conexión a internet – las páginas no cargan, las apps dicen "sin conexión".

**Causa raíz**: El perfil eSIM se instaló correctamente, pero los ajustes del Nombre del Punto de Acceso (APN) faltan o son incorrectos. Algunos proveedores de eSIM configuran el APN automáticamente; otros requieren entrada manual.

### Cómo configurar el APN en iPhone

1. Ve a **Ajustes > Datos móviles**.
2. Toca la línea eSIM que no tiene datos.
3. Toca **Red de datos móviles** (si no ves esta opción, el APN está configurado automáticamente por tu operadora – omite esta solución).
4. En la sección **Datos móviles**, rellena el campo **APN**.
5. Deja **Nombre de usuario** y **Contraseña** en blanco a menos que tu proveedor indique lo contrario.
6. Vuelve atrás, alterna el Modo avión encendido/apagado, y prueba los datos.

### Valores APN comunes para eSIM de viaje

| Proveedor | APN | Usuario | Contraseña |
|----------|-----|----------|----------|
| **Roami** | internet | (en blanco) | (en blanco) |
| **Airalo** | globaldata | (en blanco) | (en blanco) |
| **Holafly** | hola | (en blanco) | (en blanco) |
| **Nomad** | nbdata | (en blanco) | (en blanco) |
| **T‑Mobile (EE. UU.)** | fast.t-mobile.com | (en blanco) | (en blanco) |
| **AT&T (EE. UU.)** | nxgen | (en blanco) | (en blanco) |
| **Verizon (EE. UU.)** | vzwinternet | (en blanco) | (en blanco) |
| **EE (Reino Unido)** | everywhere | (en blanco) | (en blanco) |
| **O2 (Reino Unido)** | mobile.o2.co.uk | web | web |
| **Vodafone (Reino Unido)** | internet | (en blanco) | (en blanco) |
| **Three (Reino Unido)** | three.co.uk | (en blanco) | (en blanco) |
| **Orange (Francia)** | orange.fr | (en blanco) | (en blanco) |

> **Si el campo APN está en gris:** Tu operadora ha bloqueado los ajustes APN. Esto es común con las eSIM pospago de operadoras (Verizon, T‑Mobile, AT&T). Contacta a tu operadora para recibir ayuda – no puedes cambiarlo manualmente.

> **Si el APN es correcto pero sigue sin haber datos:** Reinicia tu iPhone, alterna el Modo avión, o comprueba que la Itinerancia de datos esté activada (Ajustes > Datos móviles > [línea] > Itinerancia de datos ACTIVADA).


## Consejos Finales de Pro para Usuarios de Doble eSIM

- **Etiqueta tus líneas** inmediatamente después de configurarlas – ahorra una confusión infinita.
- **Configura tonos distintos** para cada línea: `Ajustes > Sonidos y respuesta táctil > Tono` → desplázate hacia abajo, puedes asignar por línea.
- **Usa automatizaciones de Atajos** para cambiar la línea de voz predeterminada según la hora (p. ej., horario laboral = línea de negocios; noches = personal).
- **Antes de vender tu dispositivo**: Ve a `Ajustes > Datos móviles`, elimina **todas** las eSIM, y retira la SIM física. Luego borra todo el contenido y los ajustes. Para una guía detallada de cómo eliminar eSIM y cancelar planes, consulta la **[Solución #15 de nuestra guía de solución de problemas](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)**.


## Preguntas Frecuentes

**P1: ¿Puedo usar dos eSIM de la misma operadora?**  
Sí, siempre que tu operadora permita múltiples perfiles eSIM en una cuenta. Por ejemplo, T‑Mobile de EE. UU. admite hasta dos eSIM en el mismo iPhone.

**P2: ¿Ambas líneas admitirán 5G simultáneamente?**  
Sí, en el iPhone 13 y más nuevos (incluido el iPhone 16), ambas líneas pueden estar en 5G (doble espera 5G). Sin embargo, solo una línea puede usar datos 5G a la vez; la otra usa la 5G como respaldo de voz (VoNR).

**P3: Mi segunda línea funciona pero la primera dejó de funcionar tras añadirla – ¿qué pasó?**  
Puede que hayas intercambiado accidentalmente los ajustes de la línea principal. Ve a `Ajustes > Datos móviles > Línea de voz predeterminada` y restablécelo.

**P4: ¿El doble eSIM agota más la batería que eSIM + SIM física?**  
En general, el doble eSIM consume ligeramente menos energía porque no hay lector de tarjeta física. Pero la diferencia es insignificante (dentro de un 2‑3 %).

**P5: Estoy de viaje – ¿puedo usar una eSIM local para datos y mantener mi eSIM de origen para llamadas?**  
Sí, la mejor práctica:  
- Establece la eSIM local como línea de **Datos móviles**.  
- Mantén la eSIM de origen como **Línea de voz predeterminada**.  
- Desactiva la **Itinerancia de datos** en la eSIM de origen para evitar cargos enormes.  
- Activa **Permitir cambio de datos móviles** para que tu línea de origen pueda usar los datos de la eSIM local para Llamadas Wi-Fi y MMS.

Si cambias de dispositivo con frecuencia mientras viajas, la **[guía de transferencia de eSIM entre plataformas](/faq/how-to-transfer-esim-between-iphone-and-android/)** te ayudará a mover tu número sin problemas.

**P6: ¿Por qué la segunda eSIM a veces desaparece tras una actualización de iOS?**
Un fallo poco frecuente. Ve a `Ajustes > Datos móviles` → si la línea falta pero sigue apareciendo en "SIM disponibles", tócala y reactiva. Si no, contacta a la operadora para que reenvíe el perfil.

**P7: ¿Puedo usar una configuración de doble SIM con un Apple Watch?**  
Sí. El Apple Watch puede reflejar **una** de las líneas del iPhone. Elige qué línea quieres en el reloj durante la configuración. Ten en cuenta que el reloj no puede usar ambas líneas simultáneamente – solo refleja la línea seleccionada.

**P8: ¿Dónde encuentro la documentación oficial de Apple sobre el doble eSIM?**  
Apple ofrece dos recursos clave: [Acerca de la eSIM en iPhone](https://support.apple.com/en-us/HT209044) y [Usar Dual SIM con una eSIM](https://support.apple.com/en-us/HT209086). Ambos cubren la compatibilidad y configuración básicas.

**P9: ¿Cómo recupero una eSIM eliminada?**  
Si eliminaste un perfil eSIM, la recuperación depende de tu operadora. Para las eSIM de viaje (Roami, Airalo, etc.), la eliminación suele ser permanente – necesitarás comprar un plan nuevo. Para las eSIM pospago de operadoras (como Verizon, T‑Mobile, AT&T), contacta a tu operadora – a menudo pueden reemitir un nuevo código QR. Guarda siempre una copia de seguridad de tu correo de activación original y el código QR.

**P10: ¿Por qué mi eSIM tiene barras de señal pero sin conexión de datos?**  
Esto casi siempre es un problema de APN. Consulta la Solución #11 de arriba para la configuración paso a paso.

**P11: ¿Qué significa el "código de confirmación de eSIM" y dónde lo encuentro?**  
Algunos perfiles eSIM requieren un código de confirmación (4‑8 dígitos) durante la activación. Búscalo en el correo o las instrucciones de activación de tu operadora. Si no aparece, contacta a tu operadora.

**P12: ¿Puedo tener dos eSIM activas más una SIM física en el iPhone?**  
No. El iPhone admite un máximo de **dos líneas activas** en cualquier momento – ya sean dos eSIM O una eSIM + una SIM física. No puedes tener tres líneas activas simultáneamente.

**P13: Mi 5G de doble eSIM no funciona en una línea – ¿qué debo revisar?**  
Primero, asegúrate de que la 5G está activada para ambas líneas: Ajustes > Datos móviles > [línea] > Voz y datos > selecciona 5G automático o 5G activado. Si una línea sigue mostrando solo LTE, consulta con tu operadora – algunas restringen la 5G solo a la línea de datos principal.

**P14: Inserté una SIM física y mi eSIM desapareció – ¿cómo la recupero?**  
Este es un comportamiento conocido en los iPhone bloqueados por operadora. Retira la SIM física, reinicia tu iPhone, y la eSIM debería reaparecer en Ajustes > Datos móviles. Luego contacta a tu operadora para desbloquear tu dispositivo de modo que ambas puedan funcionar simultáneamente.

👉 **¿Configurando doble eSIM para viajar?** Explora los [planes eSIM para EE. UU.](/united-states-esim/) o la [eSIM para Japón](/japan-esim/) — ambos admiten doble eSIM en los iPhones modernos.

---

*Basado en la documentación oficial de Apple, los estándares del GSMA y pruebas de operadoras a septiembre de 2026.*
## Fuentes

- [GSMA — Especificación eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Soporte de Apple — Configurar eSIM en iPhone](https://support.apple.com/en-us/HT212780)
- [Soporte de Apple — Acerca de la eSIM en iPhone](https://support.apple.com/en-us/HT209044)
