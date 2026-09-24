---
title: "Cómo Transferir una eSIM Entre iPhone y Android"
h1_title: "Cómo Transferir una eSIM Entre iPhone y Android"
description: "Mueve tu eSIM entre iPhone y Android con la aplicación de la operadora o un código QR reemitido. Pasos detallados en ambas direcciones, además de soluciones para errores comunes de transferencia."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["transferencia de eSIM entre plataformas", "error de transferencia eSIM", "iOS 18 eSIM", "bloqueo de operadora eSIM", "código de confirmación eSIM", "eSIM sin servicio", "ajustes APN eSIM", "solución de problemas eSIM", "fallo de activación eSIM", "transferir eSIM entre iPhone y Android", "no puedo transferir eSIM a un iPhone nuevo", "transferencia eSIM Orange"]
date: 2026-09-17T00:00:00Z
lastmod: 2026-09-17T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Solución de problemas", "Configuración de viaje"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Actualizado el"
  min_read: "min de lectura"
  toc: "Índice de contenidos"

breadcrumbs:
  home:
    text: "Inicio"
    url: "/"
  parent:
    text: "Centro de Ayuda"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIMs Populares"
  item_suffix: "eSIM"
  items:
    - name: "eSIM de EE. UU."
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM de Alemania"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM de Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM de Turquía"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM de Japón"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM de China"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Reclama una eSIM Gratis"
  icon: "🎁"
  item_suffix: "eSIM Gratis"
  item_subtitle: "eSIM Gratis"
  items:
    - name: "eSIM de Reino Unido"
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
  title: "Preguntas Frecuentes"
  items:
    - question: "¿Qué es la activación de eSIM y cómo funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "¿Cómo activar una eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "¿Cómo activar eSIM en iPhone (todos los modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista de compatibilidad de eSIM más reciente"
      url: "/compatibility/"
---


> **Nota del editor:** Solo puedes transferir una eSIM entre iPhone y Android cuando tu operadora admite la transferencia entre plataformas, y la mayoría de las eSIMs de viaje no se pueden mover en absoluto. Los métodos siguientes siguen la documentación oficial de las operadoras y se centran en transferencias que funcionan realmente hoy en día. Consulta primero la sección de operadoras compatibles para ver si tu plan califica.

La realidad, de entrada: una eSIM generalmente no se puede mover directamente entre iPhone y Android, porque las dos plataformas no comparten un protocolo de transferencia. Las alternativas son sencillas, sin embargo — pide a tu operadora que reemplace el perfil por un código QR, o transfiere a través de la aplicación de la operadora donde esté disponible. Ambas direcciones, más las excepciones de las eSIMs de viaje, se detallan a continuación.

## ¿Qué es una transferencia de eSIM?

**Encuentra tu escenario a continuación y ve directamente al método adecuado.**

| Tu escenario | ¿Puedes transferir? | Mejor método | Dónde ir |
| :--- | :--- | :--- | :--- |
| **iPhone → iPhone nuevo** | ✅ Sí (siempre) | Quick Transfer de Apple | [Transferencia intra-plataforma](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → Samsung nuevo** | ✅ Sí (normalmente) | Samsung Smart Switch | [Transferencia intra-plataforma](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (la operadora admite transferencia por aplicación)** | ✅ Sí | Aplicación de la operadora | [Método A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (la operadora no admite aplicación)** | ✅ Sí | Código QR como alternativa | [Método B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (operadora compatible)** | ✅ Sí | Aplicación de la operadora o código QR | [Método B](#esim-transfer-from-iphone-to-android) |
| **eSIM de viaje (Roami, Airalo, Holafly)** | ❌ No | Compra un plan nuevo en el dispositivo nuevo | [Por qué las eSIMs de viaje no se pueden transferir](#why-cant-travel-esims-be-transferred) |
| **La operadora no admite la transferencia** | ✅ Sí (alternativa) | Contacta a la operadora para un código QR | [Métodos alternativos](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Regla clave:** No existe **ningún botón integrado de transferencia de eSIM de iOS a Android** como el que hay de iPhone a iPhone. La transferencia entre plataformas siempre pasa **por tu operadora** — ya sea a través de su aplicación o solicitando un nuevo código QR. Las eSIMs de viaje son **de un solo dispositivo** — compra una nueva en tu teléfono nuevo.

**¿No puedes transferir?** La mayoría de las eSIMs de viaje (Roami, Airalo, Holafly) son **de un solo dispositivo** — tendrás que comprar un plan nuevo en tu teléfono nuevo. Para las eSIMs de operadoras locales, la alternativa del código QR siempre funciona.

> **Limitación clave:** No existe **ninguna transferencia integrada de eSIM de iOS a Android** — debes pasar por tu operadora. Esta guía te explica cada método admitido paso a paso.

¿Comienzas de cero con la configuración de eSIM? Nuestra [guía de cómo activar una eSIM](/faq/how-to-activate-an-esim/) cubre la instalación desde cero. Si la transferencia falla a mitad de camino, la [Guía avanzada de solución de problemas de eSIM](/faq/esim-deep-troubleshooting-guide-2026/) relaciona cada mensaje de error con su solución.


## ¿Qué método de transferencia de eSIM deberías usar?

| Tu situación | Mejor método | Tiempo | ¿Se necesita la operadora? |
| :--- | :--- | :--- | :--- |
| **Cambiar de iPhone ↔ iPhone** | Quick Transfer de Apple (Ajustes > Datos móviles > Agregar eSIM > Transferir) | 2 min | No (Apple lo gestiona) |
| **Cambiar de Android ↔ Android (Samsung a Samsung, etc.)** | Transferencia específica de la marca (Samsung: Administrador SIM > Agregar eSIM > Transferir) | 2 min | No (la marca lo gestiona) |
| **Cambiar de iPhone ↔ Android (iOS 18 / Android 16+)** | Transferencia por aplicación de la operadora | 3-5 min | Sí |
| **Cambiar de iPhone ↔ Android (sistemas más antiguos)** | Código QR reemitido por la operadora | 5-10 min | Sí |
| **eSIM de viaje (Roami, Airalo, Holafly)** | ❌ No se puede transferir – compra un plan nuevo en el dispositivo nuevo | N/D | No – el proveedor no lo permite |
| **Tu operadora no admite la transferencia** | Código QR como alternativa (llama a la operadora) | 10-20 min | Sí |


## Guía completa de transferencia de eSIM

Aquí tienes el mapa del proceso paso a paso para quien quiera mover una eSIM a un dispositivo nuevo.

| Paso | En qué estás pensando | Qué hacer | Dónde encontrarlo |
| :--- | :--- | :--- | :--- |
| **1. Determina tu escenario** | "¿Qué tipo de cambio estoy haciendo?" | Identifica: mismo ecosistema (iOS→iOS / Android→Android) o entre plataformas (iOS↔Android)? | [Flujo de decisión rápido de arriba](#which-esim-transfer-method-should-you-use) |
| **2. Revisa las versiones del sistema** | "¿Mis teléfonos están lo bastante actualizados?" | El iPhone debe tener iOS 18+ y el Android Android 16+ para la transferencia nativa entre plataformas. | Actualiza primero si no. |
| **3. Revisa el bloqueo de operadora** | "¿Mi teléfono está bloqueado a una operadora?" | Ajustes > General > Información > Bloqueo de operadora debe decir "Sin restricciones de SIM". | [Requisitos previos abajo](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Revisa el soporte de la operadora** | "¿Mi operadora lo permite?" | Abre la aplicación de la operadora y busca la opción de transferencia de eSIM. O llama y pregunta. | [Sección de operadoras compatibles abajo](#carriers-that-support-cross-platform-esim-transfer) |
| **5. Ejecuta la transferencia** | "Es hora de mover el número." | Sigue los pasos específicos para tu escenario. | [Método A](#esim-transfer-from-android-to-iphone) o [Método B](#esim-transfer-from-iphone-to-android) |
| **6. Configuración posterior** | "Mi número ya está en el teléfono nuevo – ¿y ahora qué?" | Reactiva WhatsApp, iMessage, aplicaciones 2FA y prueba los SMS. | [Sección tras la transferencia de eSIM abajo](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. Soluciona problemas si falló** | "No funcionó – ¿qué hago?" | Revisa el error, elimina el perfil antiguo, reintenta o usa el código QR como alternativa. | [Tabla de solución de problemas abajo](#why-did-my-esim-transfer-fail) |


## Qué necesitas antes de iniciar una transferencia de eSIM

**Para ambas direcciones:**
- Ambos dispositivos deben estar **liberados** (sin **bloqueo de operadora**). Para comprobarlo en iPhone: `Ajustes > General > Información` → `Bloqueo de operadora` debe decir "Sin restricciones de SIM". **Esta es la razón número 1 por la que fallan las transferencias** – si tu teléfono está bloqueado, no puedes transferir la eSIM a la red de otra operadora.
- Ambos dispositivos tienen **Bluetooth activado**.
- Ambos dispositivos están conectados a **Wi‑Fi** (o al menos uno tiene una conexión de datos móviles funcional).
- La eSIM que quieres transferir está **activa** en el dispositivo de origen (no eliminada previamente).
- Tu operadora **admite la transferencia entre plataformas** (ver la lista a continuación). Si no, salta a la sección de métodos alternativos.

¿Nuevo en perfiles y servidores SM‑DP+? El [explicador de activación de eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) cubre lo que sucede realmente cuando un perfil se mueve entre dispositivos.
- Tu **perfil de eSIM** no está **caducado** – algunos perfiles tienen fechas de validez limitadas.

**Para Android → iPhone:**
- El iPhone debe tener **iOS 18 o posterior**.
- El Android debe tener **Android 16 o posterior**.

**Para iPhone → Android:**
- El iPhone debe tener **iOS 18 o posterior**.
- El Android debe tener **Android 16 o posterior**.

> 🚨 **Advertencia crítica – No elimines antes de transferir:**
> **NO elimines la eSIM de tu dispositivo antiguo antes de iniciar la transferencia.** Si eliminas primero la eSIM de origen, el perfil desaparece de tu dispositivo y tu operadora puede no poder transferirlo al dispositivo nuevo. Tendrás que contactar a tu operadora para un código QR completamente nuevo – lo que puede tardar 24‑48 horas. Inicia siempre la transferencia desde el dispositivo nuevo primero, o mantén la eSIM antigua activa hasta que la nueva esté confirmada como funcional.

> 🚨 Si tu dispositivo tiene un sistema operativo más antiguo, la opción del menú simplemente no aparecerá. Actualiza primero. Si te enfrentas a un **perfil de eSIM caducado**, contacta a tu operadora para obtener un nuevo código QR antes de iniciar la transferencia.

La página de [Soporte de Google – eSIM en Pixel](https://support.google.com/pixelphone/answer/7086887) ofrece detalles adicionales para usuarios de Android que preparan la transferencia de su eSIM.


## ¿Por qué las eSIMs de viaje no se pueden transferir?

Es la pregunta número 1 que recibimos. Esto es el porqué:

| Razón | Explicación |
| :--- | :--- |
| **Vinculación al EID** | Cada perfil de eSIM está cifradamente vinculado al **EID** (identificador eUICC) del dispositivo en el que se activó. El EID de tu teléfono es único – como un número de serie para tu hardware de eSIM. (Puedes ver tu EID marcando `*#06#` en la mayoría de los teléfonos.) |
| **Códigos QR de un solo uso** | Los códigos QR de las eSIMs de viaje están diseñados para **un solo uso**. Una vez escaneado, el código QR se invalida en el servidor de la operadora. Es una función de seguridad para prevenir el fraude. |
| **Sin cuenta de operadora** | Las eSIMs de viaje se compran como productos independientes – no tienes una "cuenta de operadora" con servicio continuo. No hay nadie a quien contactar para solicitar una transferencia. |
| **Diseñadas por conveniencia** | Las eSIMs de viaje cambian la transferibilidad por comodidad. Obtienes activación instantánea sin verificación de identidad, pero el precio es que el perfil queda bloqueado a un dispositivo. |

**En resumen:** si estás usando una eSIM de viaje (Roami, Airalo, Holafly, Nomad, etc.), **no pierdas el tiempo intentando transferirla**. No funcionará. Simplemente compra un plan nuevo en tu dispositivo nuevo. El costo de una eSIM de viaje nueva suele ser menor que el tiempo que invertirías intentando transferir un perfil no transferible.

**¿Y las eSIMs de operadoras (pospago/prepago)?**
Las eSIMs de operadoras son diferentes. Tienes una cuenta con la operadora y pueden reemitir tu eSIM a un dispositivo nuevo porque controlan el perfil en sus servidores. Por eso las eSIMs de operadoras se pueden transferir y las de viaje no.


## ¿Qué método de transferencia de eSIM es adecuado para ti?

| Característica | Transferencia por aplicación de la operadora | Código QR de la operadora | Transferencia nativa (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **¿Funciona entre plataformas?** | ✅ Sí | ✅ Sí | ❌ No (solo mismo ecosistema) |
| **Tiempo requerido** | 3-5 min | 5-10 min | 1-2 min |
| **Participación de la operadora** | Autoservicio vía aplicación | Hay que contactar a la operadora | Ninguna |
| **¿Funciona durante un viaje?** | ✅ Sí (con Wi-Fi) | ✅ Sí (con Wi-Fi) | ✅ Sí |
| **Tasa de éxito** | Alta (si está admitido) | Muy alta (siempre funciona) | Muy alta |
| **Mejor para** | Transferencia rápida, operadoras con aplicación | Cualquier operadora, alternativa cuando la aplicación falla | Actualizaciones de dispositivo en el mismo ecosistema |
| **Costo** | Normalmente gratis | Puede costar $0‑25 por reemitir el código QR | Gratis |


## Transferencia de eSIM de Android a iPhone

Este es el escenario más común – cambiar de un Samsung, Pixel u otro Android a un iPhone nuevo. La forma más fiable de mover tu número es a través de la aplicación de tu operadora.

### Paso a paso

**Antes de empezar:**
- Ten la aplicación de tu operadora instalada en el iPhone nuevo (o prepárate para iniciar sesión en el sitio web de la operadora).
- Conoce el PIN de tu cuenta o tus credenciales de inicio de sesión.
- **NO elimines aún la eSIM de tu Android.**

**En tu iPhone (destino):**
1. Instala y abre la aplicación de tu operadora (por ejemplo, la aplicación de T‑Mobile, Verizon o AT&T).
2. Inicia sesión y busca una opción como "Activar eSIM", "Cambiar dispositivo" o "Transferir a nuevo dispositivo".
3. Sigue las indicaciones para introducir el **EID** y el **IMEI** de tu iPhone nuevo (visibles en `Ajustes` → `General` → `Información`).
4. La operadora envía tu perfil de eSIM al iPhone nuevo, o genera un código QR para escanear.
5. En el iPhone, ve a `Ajustes` → `Datos móviles` → `Agregar eSIM` y escanea el código QR si se generó uno.
6. Espera a "Activación completada". Tu número ya está activo en el iPhone.
7. **Ahora** puedes eliminar la eSIM de tu Android (Ajustes > Conexiones > Administrador SIM > toca la eSIM > Eliminar).

**Consejo de iOS 18:** si estás en iOS 18, el flujo de "Agregar eSIM" se rediseñó con un escáner de QR más prominente y mejor manejo de errores. Verás un indicador de progreso durante la descarga del perfil.

✅ **Listo.** Tu número ya está activo en el iPhone. Si tu operadora no ofrece una aplicación, contáctala para que reemplace tu eSIM por un nuevo código QR (ver los métodos alternativos abajo).

### ¿Qué pasa si la transferencia por aplicación no funciona?

Usa la **alternativa del código QR de la operadora**:

- Contacta a tu operadora (chat, teléfono o sitio web).
- Diles que estás cambiando de dispositivo y pídeles que **reemplace tu eSIM por un nuevo código QR**.
- Escanea el nuevo código QR en el iPhone: `Ajustes` → `Datos móviles` → `Agregar eSIM`.
- Completa la activación.

Si ves un error de **"no se puede activar la eSIM"** durante este proceso, revisa tu conexión Wi‑Fi e inténtalo de nuevo.


## Transferencia de eSIM de iPhone a Android

No existe una opción integrada de "Transferir a Android" en el iPhone. El método fiable es que tu operadora reemplace tu eSIM.

### Requisitos previos
- Tu teléfono Android nuevo está **liberado**.
- Puedes contactar a tu operadora (o iniciar sesión en su aplicación/sitio web).
- Tu Android tiene **Android 16 o posterior**.
- **NO elimines aún la eSIM de tu iPhone.**

### Pasos

**Contacta a tu operadora (o usa su aplicación):**
1. Diles que estás moviendo tu eSIM de un iPhone a un teléfono Android.
2. Proporciona el **EID** y el **IMEI** del nuevo dispositivo Android (en `Ajustes` → `Acerca del teléfono`).
3. Tu operadora reemplaza tu eSIM por un nuevo código QR (o la envía a través de su aplicación).

**En tu Android (destino):**
1. Ve a `Ajustes` → `Red e Internet` → `SIM` → `Agregar eSIM` (la redacción varía según la marca).
2. Escanea el código QR que proporcionó la operadora.
3. Sigue las indicaciones para descargar y activar el perfil.
4. Espera a que la activación se complete.
5. **Ahora** puedes eliminar la eSIM de tu iPhone (Ajustes > Datos móviles > toca la eSIM > Eliminar plan de datos móviles).

✅ Listo. Tu número ya vive en el teléfono Android.

> ⚠️ **Importante**: una vez completada la transferencia, la eSIM se **elimina permanentemente** del iPhone. No puedes revertirlo sin tu operadora. Asegúrate de tener otra línea activa o Wi‑Fi antes de transferir.


## Transferir una eSIM a un iPhone o Samsung nuevo

Aunque la transferencia entre plataformas es el enfoque de esta guía, muchos usuarios simplemente quieren mover una eSIM dentro del mismo ecosistema. Así se hace. (¿Migras a un iPhone 16 de EE. UU. solo eSIM? La [guía de activación del iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) cubre los detalles de la transferencia durante la configuración.)

### Transferir una eSIM de iPhone a iPhone

El **Quick Transfer** integrado de Apple es el método más sencillo:

1. Durante la configuración de tu iPhone nuevo, elige "Transferir eSIM de un iPhone cercano" cuando se te pida.
2. Mantén ambos teléfonos cerca con Bluetooth y Wi‑Fi activados.
3. Confirma la transferencia en tu iPhone antiguo.
4. Espera 1‑2 minutos a que la **descarga del perfil de eSIM** se complete en el dispositivo nuevo.

**Si el Quick Transfer no funciona:** ve a Ajustes > Datos móviles en tu iPhone nuevo > Agregar eSIM > Transferir de un iPhone cercano.

**Si eso falla:** usa el método del código QR de la operadora – contacta a tu operadora para un nuevo código QR.

### Transferir una eSIM de Android a Android

Los métodos de transferencia de Android varían según la marca:

**Samsung:** Ajustes > Conexiones > Administrador SIM > Agregar eSIM > Transferir eSIM del dispositivo antiguo (sigue las indicaciones en pantalla). Funciona en Samsung Galaxy S21 y posteriores, series Z Flip/Z Fold.

**Google Pixel:** durante la configuración, es posible que se te pida transferir tu eSIM. Alternativamente, usa la aplicación de la operadora o solicita un nuevo código QR.

**Android en general:** si tu marca no ofrece transferencia integrada, usa el método alternativo del código QR de la operadora.

### Comparación de transferencia de eSIM entre plataformas e intra-plataforma

| Característica | Entre plataformas | Intra-plataforma |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/D | ✅ Quick Transfer funciona |
| **Android ↔ Android** | N/D | ✅ Métodos específicos de marca |
| **iOS ↔ Android** | ✅ Cubierto en esta guía | ❌ No admitido directamente |
| **Dependencia de la operadora** | Mayor | Menor (Apple/Google lo gestionan) |
| **Tiempo requerido** | 3-10 min | 1-2 min |
| **Tasa de éxito** | Varía según la operadora | Generalmente alta |

Para saber cómo difiere el comportamiento de la eSIM entre generaciones de iPhone (límites de almacenamiento, reglas de doble SIM, variantes regionales), consulta nuestro [centro de compatibilidad eSIM de iPhone](/faq/iphone-11-esim-compatible/).


## Operadoras que admiten la transferencia de eSIM entre plataformas

La transferencia de eSIM entre plataformas es aún nueva y el soporte de las operadoras se está desplegando gradualmente. No existe una lista pública completa de todas las operadoras compatibles, y la disponibilidad cambia con frecuencia, así que revisa el sitio web o la aplicación de tu operadora para conocer el estado actual.

### Operadoras confirmadas como compatibles

| Operadora | Región | Método de transferencia | Límite de transferencias | Costo |
|---------|--------|-----------------|----------------|------|
| **Orange** | Francia, Europa | Aplicación Orange → "Mi espacio eSIM" → "Transferir a nuevo dispositivo" | 3 veces al año | Gratis |
| **SFR** | Francia | Aplicación SFR & Moi → "Gestionar mi SIM" → "Transferir eSIM" | 5 veces al año | Gratis |
| **T-Mobile** | EE. UU. | Aplicación T-Mobile → "Gestionar eSIM" → "Transferir a nuevo dispositivo" | Ilimitado | Gratis |
| **Verizon** | EE. UU. | Aplicación My Verizon → "Activar o cambiar dispositivo" | Ilimitado | Gratis |
| **AT&T** | EE. UU. | Aplicación AT&T → "Activar eSIM" | Varía según el plan | Gratis (pospago) |
| **EE** | Reino Unido | Aplicación EE → "Plan" → "Transferencia eSIM" | 3 veces al año | Gratis |
| **Deutsche Telekom** | Alemania | Aplicación Telekom → "Transferencia eSIM" | Ilimitado | Gratis |
| **Swisscom** | Suiza | Aplicación Swisscom → "Transferencia eSIM" | 3 veces al año | Gratis |
| **Bouygues** | Francia | Reemisión de código QR (vía portal de cliente) | 3 veces al año | Gratis |
| **Free** | Francia | Reemisión de código QR (vía portal de cliente) | 2 veces al año | Gratis |
| **Vodafone** | Reino Unido, Europa | Aplicación Vodafone → "Transferencia eSIM" | Varía según el país | Gratis (pospago) |
| **Google Fi** | EE. UU., Global | Aplicación Google Fi → "Activar en este dispositivo" | Ilimitado | Gratis |

### Las eSIMs de viaje no son transferibles

| Proveedor | ¿Transferible? | Qué hacer en su lugar |
|----------|---------------|-------------------|
| **Roami** | ❌ No | Compra un plan nuevo en tu dispositivo nuevo |
| **Airalo** | ❌ No | Compra un plan nuevo en tu dispositivo nuevo |
| **Holafly** | ❌ No | Compra un plan nuevo en tu dispositivo nuevo |
| **Nomad** | ❌ No | Compra un plan nuevo en tu dispositivo nuevo |

**¿Cómo comprobar si tu operadora lo admite?** Prueba los pasos del Método A o B. Si tu operadora no ofrece transferencia por aplicación ni un nuevo código QR, usa los métodos alternativos de abajo.


## Métodos alternativos cuando la transferencia de eSIM entre plataformas no está admitida

Si tu operadora no está en la lista, o ves un **error de transferencia de eSIM**, usa una de estas alternativas:

### Código QR emitido por la operadora
1. Llama a tu operadora o chatea con ella.
2. Diles: "Estoy cambiando de Android a iPhone (o viceversa). Por favor, reemplace mi eSIM por un nuevo código QR."
3. Te enviarán un código QR o un enlace de activación por correo electrónico.
4. En el dispositivo nuevo, ve a `Ajustes` → `Datos móviles` → `Agregar eSIM` → `Usar código QR` y escanea.
5. La eSIM del dispositivo antiguo dejará de funcionar cuando la nueva se active.

**Consejo:** algunas operadoras cobran una pequeña tarifa por reemitir una eSIM ($0‑25). Pregunta antes de que lo hagan.

### Entrada manual de SM-DP+
Si tu operadora te proporciona un **código de activación** y una **dirección SM‑DP+** (la dirección del servidor que entrega el perfil de eSIM a tu teléfono), puedes agregar la eSIM manualmente en el dispositivo nuevo:
1. `Ajustes` → `Datos móviles` → `Agregar eSIM` → `Introducir detalles manualmente`.
2. Pega la dirección SM‑DP+ y el código de activación.
3. Toca `Siguiente`. Esto funciona tanto en iPhone como en Android.

### Compra un plan nuevo
Si estás usando una eSIM de viaje (Roami, Airalo, Holafly), no pierdas el tiempo intentando transferir – no funcionará. Simplemente compra un plan nuevo en tu dispositivo nuevo — nuestra [comparación de planes de eSIM de viaje](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) clasifica a los proveedores que vale la pena reinstalar.

> **Consejo de transición:** la alternativa del código QR es el método más fiable para cualquier operadora, independientemente de si admiten la transferencia por aplicación. Puede requerir una llamada telefónica, pero siempre funciona.


## ¿Transferencia de eSIM o nueva activación?

A veces comprar una eSIM nueva es más rápido que transferir. Esto es cuándo elegir cada opción:

| Factor | Transferir | Nueva activación | ¿Cuál es mejor? |
|--------|----------|----------------|------------------|
| **Mantienes el mismo número de teléfono** | ✅ Conservas el número | ❌ Obtienes uno nuevo | Gana transferir |
| **Tienes 2FA vinculada a tu número** | ✅ Mantienes el acceso | ❌ Riesgo de perder el acceso | Gana transferir |
| **Tu operadora cobra por transferir** | Puede costar $0‑25 | $0 (ya estás comprando nuevo) | Depende de la tarifa |
| **eSIM de viaje** | ❌ Imposible | ✅ Fácil | Gana la nueva activación |
| **Tienes prisa (menos de 5 minutos)** | ⚠️ Puede tardar 5‑10 min | ✅ Escanear QR en 2 min | Gana la nueva activación |
| **Quieres conservar tu plan/datos actuales** | ✅ Conservas los datos no usados | ❌ Pierdes los datos no usados | Gana transferir |

**Recomendación:** si mantienes el mismo plan de operadora y quieres conservar tu número de teléfono, transfiere. Si tienes una eSIM de viaje o tienes prisa, simplemente compra un plan nuevo en tu dispositivo nuevo.


## ¿Por qué falló mi transferencia de eSIM?

| Error / Síntoma | Causa más probable | Solución |
|----------------|-------------------|-----|
| "Transferencia no disponible – operadora no admitida" | Tu operadora no admite la transferencia entre plataformas. | Usa los métodos alternativos de arriba. |
| El código QR se escanea pero luego dice "sesión caducada" | Tardaste demasiado después de generar el código QR (caducó). | Repite el proceso y escanea inmediatamente. |
| Android dice "Emparejamiento fallido" | Permisos de Bluetooth o red local bloqueados. | En iPhone: `Ajustes > Privacidad y seguridad > Red local` – asegúrate de que `Ajustes` esté ACTIVADO. En Android: desactiva "Análisis de seguridad Wi‑Fi" (normalmente en los ajustes avanzados de Wi‑Fi). |
| La transferencia comienza pero se detiene al 50% | Wi-Fi o señal móvil débiles. | Acerca ambos teléfonos al router. Desactiva la VPN en ambos dispositivos. |
| **"eSIM ya vinculada a otro dispositivo"** | El perfil no se liberó correctamente del dispositivo antiguo. | En el dispositivo antiguo, ve a `Ajustes > Datos móviles` y elimina manualmente la eSIM (`Eliminar eSIM`, si aún es visible). Luego espera 5 minutos e inténtalo de nuevo. Si sigue fallando, contacta a la operadora para liberar el perfil. |
| El iPhone pide un **código de confirmación** después de escanear | El perfil de eSIM tiene un **código de confirmación eSIM** obligatorio (poco frecuente). | Busca el código en el correo de la operadora (suele ser de 4–8 dígitos). Si no aparece, pregunta a la operadora. |
| El doble clic en el botón lateral no hace nada (iPhone → Android) | La autenticación biométrica no está configurada o está desactivada. | Configura Face ID / Touch ID, o desactiva temporalmente "Requerir atención" de Face ID. |
| **eSIM sin servicio** después de la transferencia | Ajustes APN no configurados. | Configura el APN manualmente (ver la tabla abajo). |
| **Perfil de eSIM caducado** | El perfil tiene una fecha de validez limitada. | Contacta a tu operadora para un nuevo código QR. |
| **"No aparece la opción Agregar eSIM" en el iPhone** | El iPhone está bloqueado a una operadora o tiene un iOS antiguo. | Revisa el bloqueo de operadora en Ajustes > General > Información. Actualiza a iOS 18. |
| **"SIM no admitida" en el dispositivo nuevo** | El dispositivo nuevo está bloqueado a otra operadora. | Revisa el bloqueo de operadora – debe decir "Sin restricciones de SIM". |
| **Límite de transferencias excedido** | Has transferido esta eSIM demasiadas veces (algunas operadoras limitan a 3‑5 al año). | Contacta al soporte de la operadora para restablecer el límite u obtener una eSIM nueva. |
| **"Transferencia de eSIM fallida" en Samsung** | Samsung Smart Switch puede no admitir el perfil específico de la operadora. | Usa la alternativa del código QR de la operadora. |

### Configuración manual del APN

Si después de la **transferencia de eSIM** experimentas **eSIM sin servicio**, configura el APN manualmente:

| Operadora | APN | Usuario | Contraseña |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (en blanco) | (en blanco) |
| **SFR** | sl2sfr | (en blanco) | (en blanco) |
| **Free** | free | (en blanco) | (en blanco) |
| **Bouygues** | ebouygtel.com | (en blanco) | (en blanco) |
| **T-Mobile (EE. UU.)** | fast.t-mobile.com | (en blanco) | (en blanco) |
| **AT&T (EE. UU.)** | nxgen | (en blanco) | (en blanco) |
| **Verizon (EE. UU.)** | vzwinternet | (en blanco) | (en blanco) |
| **Telekom (DE)** | internet.telekom | (en blanco) | (en blanco) |

### ¿Sigues atascado?
Reúne esta información antes de llamar al soporte:
- IMEI y EID del dispositivo de origen
- IMEI y EID del dispositivo de destino
- El mensaje de error exacto (haz una captura de pantalla)
- Tu número de cuenta o número de teléfono


## ¿Qué pasa con la eSIM antigua después de la transferencia?

**Se desactiva inmediatamente.**

El perfil de eSIM antiguo puede permanecer visible brevemente en el dispositivo antiguo. Puedes eliminarlo manualmente:
`Ajustes > Datos móviles > toca la eSIM antigua > Eliminar eSIM`.

> 💰 **Facturación**: tu operadora seguirá cobrándote el plan. La transferencia no cancela el plan – solo mueve la SIM. Para cancelar, debes contactar a la operadora por separado.

Si te preocupan los errores de **eSIM vinculada a otro dispositivo**, elimina siempre el perfil antiguo del dispositivo de origen después de que la transferencia se complete con éxito.

### Cronología de transferencia vs. eliminación

| Acción | Qué sucede | Cuándo hacerlo |
| :--- | :--- | :--- |
| **Transferencia iniciada** | La operadora envía el perfil al dispositivo nuevo | Antes de eliminar la eSIM antigua |
| **Nueva eSIM activada** | El dispositivo nuevo se conecta a la red | Cuando la activación se complete |
| **eSIM antigua desactivada** | La operadora desactiva el perfil antiguo | Automáticamente – puede tardar 1‑5 minutos |
| **Eliminar la eSIM antigua** | Elimina el perfil inactivo del dispositivo antiguo | Después de confirmar que el dispositivo nuevo funciona |


## Mover WhatsApp, iMessage y 2FA después de una transferencia de eSIM

Después de transferir tu eSIM con éxito, necesitas configurar tus aplicaciones de mensajería y servicios de autenticación en el dispositivo nuevo.

### WhatsApp

WhatsApp usa tu número de teléfono para identificar tu cuenta. Después de la **transferencia de eSIM**:

1. Abre WhatsApp en tu dispositivo nuevo.
2. Introduce tu número de teléfono (el que transferiste).
3. Recibirás un código de verificación por SMS o llamada automatizada a tu número.
4. Introduce el código – tus chats reaparecerán si hiciste una copia de seguridad previamente.

**Consejo:** haz una copia de seguridad de tus chats antes de iniciar la transferencia. En iPhone: WhatsApp > Ajustes > Chats > Copia de seguridad de chats. En Android: WhatsApp > Ajustes > Chats > Copia de seguridad.

**Problema común de WhatsApp:** si no recibes el código de verificación por SMS, prueba la opción "Llámenme" – WhatsApp llamará a tu número y leerá el código. Si eso falla, espera 5 minutos e inténtalo de nuevo (la red de la operadora puede estar aún estabilizándose).

### iMessage y FaceTime

1. Ve a `Ajustes` → `Mensajes` y activa `iMessage`.
2. Ve a `Ajustes` → `FaceTime` y activa `FaceTime`.
3. Espera 1‑2 minutos para la activación. Si dice "Esperando activación", desactívalo y actívalo de nuevo.
4. Comprueba que tu número esté seleccionado: Ajustes > Mensajes > Enviar y recibir → selecciona tu número de eSIM.

### Autenticación de dos factores y verificación por SMS

Como tu número de teléfono no ha cambiado, los códigos 2FA basados en SMS funcionarán con normalidad. Sin embargo, los autenticadores basados en aplicaciones (Google Authenticator, Microsoft Authenticator, Authy) pueden requerir una nueva configuración:

- **Authy:** tus tokens están cifrados y respaldados en la nube – solo tienes que iniciar sesión en el dispositivo nuevo.
- **Google Authenticator:** tendrás que transferir tus cuentas individualmente o usar la función "Transferir cuentas".
- **Microsoft Authenticator:** usa la función de copia de seguridad para restaurar en el dispositivo nuevo.
- **2FA por SMS:** pruébalo solicitando un código de verificación a tu banco o proveedor de correo para confirmar que la entrega de SMS funciona.

### Aplicaciones bancarias y servicios financieros

La mayoría de los bancos detectarán el cambio de dispositivo y requerirán una nueva autenticación. Ten listas tus credenciales de inicio de sesión y cualquier dispositivo de token físico.

Para más ayuda con la migración de aplicaciones después de una **transferencia de eSIM**, consulta nuestra [guía de configuración de eSIM](/faq/how-to-activate-an-esim/).


## Mejores prácticas para evitar dolores de cabeza con la transferencia de eSIM

✅ **Antes de transferir:**
- Comprueba el soporte de la operadora (prueba el menú – si la opción está ahí, está admitida).
- Actualiza ambos teléfonos al sistema operativo más reciente (iOS 18 / Android 16).
- Carga ambos teléfonos por encima del 30%.
- Desactiva temporalmente la VPN y los bloqueadores de anuncios.
- Verifica que tu **perfil de eSIM** no esté **caducado**.
- Haz copia de seguridad de WhatsApp y otras aplicaciones de mensajería.
- **NO elimines aún la eSIM del dispositivo antiguo.**

✅ **Durante la transferencia:**
- Mantén los teléfonos a menos de 10 cm (4 pulgadas) entre sí.
- No cambies de aplicación ni bloquees la pantalla.
- No apagues el Bluetooth ni el Wi‑Fi.
- Espera el mensaje de confirmación – no des por hecho que está terminado.

✅ **Después de la transferencia:**
- Prueba llamadas y datos en el dispositivo nuevo.
- Elimina la eSIM antigua del dispositivo de origen para evitar confusiones.
- Mantén el Wi‑Fi del dispositivo antiguo activado al menos una hora – algunas operadoras necesitan un último intercambio de confirmación.
- Reactiva WhatsApp, iMessage y las aplicaciones 2FA.
- Prueba los códigos de verificación por SMS de tu banco.
- Configura un recordatorio para cancelar el plan antiguo si estás cambiando de operadora por completo.


## Viajar y transferir una eSIM

Si estás viajando al extranjero y necesitas transferir tu eSIM, aquí tienes algunos puntos importantes. Y si la transferencia no tiene salvación a mitad del viaje, la salida más rápida suele ser comprar un plan local — consulta la [guía de planes de eSIM de EE. UU.](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) o la [guía de compra de eSIM de Reino Unido](/faq/how-to-buy-a-uk-esim/) según tu destino:

### Transferir una eSIM durante un viaje
- La transferencia entre plataformas funciona **en todo el mundo** siempre que tu operadora lo admita.
- Asegúrate de tener una conexión Wi‑Fi estable (hotel, cafetería) antes de empezar.
- Si la transferencia falla, la alternativa del código QR de la operadora es tu mejor opción.
- Revisa los **ajustes APN de la eSIM** después de la transferencia – algunas operadoras requieren configuración manual.

### Operadoras francesas y viajes
- **Orange** y **SFR** permiten la transferencia entre plataformas estés donde estés.
- **Free** y **Bouygues** requieren reemitir un código QR – hazlo antes de salir.
- Para las **eSIMs de viaje**, recuerda que generalmente **no son transferibles** – compra un plan nuevo en tu dispositivo nuevo.

### Cómo contactar a las operadoras desde el extranjero

| Operadora | Método de contacto con soporte | Notas |
|---------|------------------------|-------|
| **Orange** | Chat de la aplicación Orange, soporte por WhatsApp o teléfono | 24/7 en la mayoría de las regiones |
| **SFR** | Chat de la aplicación SFR & Moi, teléfono | Horario limitado |
| **T-Mobile** | Chat de la aplicación T‑Mobile, iMessage, teléfono | Soporte 24/7 en EE. UU. |
| **Verizon** | Chat de la aplicación My Verizon, teléfono | Soporte 24/7 |
| **AT&T** | Chat de la aplicación AT&T, teléfono | Horario limitado internacionalmente |
| **EE** | Chat de la aplicación EE, teléfono | Soporte 24/7 en el Reino Unido |

**Consejo:** descarga la aplicación de tu operadora y guarda la información de contacto del soporte antes de viajar. Algunas operadoras requieren verificación por SMS para iniciar sesión – si estás en mitad de la transferencia, esto puede no funcionar.

### Qué hacer si tu transferencia falla a mitad del viaje

1. Conéctate al Wi‑Fi gratuito más cercano (aeropuertos, hoteles, cafeterías).
2. Contacta al soporte de tu operadora por correo electrónico o aplicación de mensajería.
3. Pídeles que reemplace tu eSIM por un código QR.
4. Escanea el código QR en tu dispositivo nuevo.

### Consejos para glob trotters
- Guarda siempre una copia de seguridad de tus códigos QR de eSIM.
- Si cambias de teléfono a mitad del viaje, prefiere la transferencia nativa antes que el código QR cuando sea posible.
- Para múltiples destinos, considera un plan de eSIM global que cubra varios países.
- Guarda la información de contacto del soporte de tu operadora antes de viajar.

Para más información sobre el uso de eSIMs durante los viajes, consulta nuestra [guía de eSIM de viaje 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Preguntas frecuentes

**P1: ¿Puedo transferir una eSIM solo de datos (como una eSIM de viaje)?**
No. La mayoría de las eSIMs de viaje (Roami, Airalo, Holafly, Nomad, etc.) no admiten la transferencia entre plataformas. Están diseñadas para instalarse una vez por dispositivo. Tendrás que comprar un plan nuevo en tu teléfono nuevo. Consulta "¿Por qué las eSIMs de viaje no se pueden transferir?" arriba para la explicación técnica.

**P2: ¿Funciona la transferencia entre un iPhone 11 y un Samsung S24?**
Sí – siempre que ambos cumplan los requisitos de sistema operativo. El iPhone 11 admite iOS 18 (funciona hasta iOS 18). El Samsung S24 admite Android 16. La generación del hardware no importa; solo importa la versión del sistema operativo.

**P3: La aplicación de mi operadora no ofrece transferencia de eSIM. ¿Qué pasa?**
No todas las operadoras admiten la transferencia de eSIM por aplicación. Si tu operadora no la ofrece, usa la alternativa del código QR: contacta a tu operadora y pídeles que reemplace tu eSIM por un nuevo código QR. Algunas operadoras cobran una pequeña tarifa por esto ($0‑25).

**P4: ¿Seguirán funcionando mis códigos de WhatsApp / iMessage / 2FA después de la transferencia?**
WhatsApp usa tu número de teléfono – detectará el cambio de SIM y puede pedirte reverificar (normalmente automático). iMessage en iPhone usa el número de la eSIM y debería reactivarse en un minuto. Para la 2FA, los servicios que envían SMS a tu número funcionarán con normalidad – el número no ha cambiado. Consulta la sección 10 para los pasos detallados de migración.

**P5: ¿Puedo transferir la misma eSIM de un lado a otro varias veces?**
Sí, pero cada transferencia requiere el mismo proceso. Algunas operadoras limitan cuántas veces se puede transferir una eSIM al año (p. ej., 3‑5 veces). Si alcanzas el límite, contacta a tu operadora para ayuda.

**P6: ¿Qué pasa con las configuraciones de doble SIM eSIM + SIM física?**
La transferencia solo mueve la eSIM. La SIM física se queda en el dispositivo de origen. Si quieres mover ambas, tendrás que transferir la eSIM (con esta guía) y mover físicamente la tarjeta nano‑SIM al dispositivo nuevo. Para optimizar la experiencia de doble SIM después de la transferencia, consulta **[¿La doble eSIM no funciona? 12 soluciones para iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**P7: ¿Qué hago si recibo un error de "perfil de eSIM caducado" durante la transferencia?**
Contacta a tu operadora para obtener un nuevo código QR – la reemisión suele ser gratuita. Asegúrate de activar el nuevo código QR de inmediato (dentro de los 30 minutos) para evitar que caduque de nuevo.

**P8: ¿Por qué el bloqueo de mi operadora me impide transferir?**
Si tu teléfono tiene un **bloqueo de operadora**, solo puedes transferir una eSIM a un dispositivo de la misma operadora. Contacta a tu operadora para liberar el dispositivo antes de la transferencia. En iPhone: Ajustes > General > Información > Bloqueo de operadora debe decir "Sin restricciones de SIM".

**P9: ¿Puedo transferir una eSIM de Orange a un dispositivo que no es de Orange?**
Sí, si tu dispositivo está liberado y tu plan de Orange lo permite. La **transferencia de eSIM de Orange** está admitida a través de la aplicación Orange o la transferencia nativa. Orange permite hasta 3 transferencias al año.

**P10: ¿Funciona la transferencia con una eSIM de Free?**
No – Free no admite la transferencia entre plataformas. Usa el método alternativo del código QR desde el portal de cliente de Free. Free permite hasta 2 transferencias al año.

**P11: ¿Qué es un código de confirmación de eSIM y dónde lo encuentro?**
Algunos perfiles de eSIM tienen un **código de confirmación eSIM** obligatorio – típicamente de 4‑8 dígitos. Búscalo en el correo electrónico o las instrucciones de activación de la operadora. Si no aparece, pregunta a tu operadora.

**P12: ¿Qué significa "la eSIM no se transfiere al teléfono nuevo"?**
Normalmente significa que tu operadora no admite la transferencia, el código QR caducó, la eSIM antigua sigue activa o el dispositivo nuevo está bloqueado a una operadora. Elimina primero la eSIM antigua (si aún es visible) e inténtalo de nuevo. Consulta la sección 7 para la tabla completa de solución de problemas.

**P13: ¿Cómo soluciono el error "fallo de activación de eSIM" después de la transferencia?**
Revisa tu conexión Wi‑Fi, reinicia ambos dispositivos e inténtalo de nuevo. Si sigue fallando, usa el método de entrada manual con la dirección SM‑DP+ del correo de tu operadora.

**P14: ¿Transferir mi eSIM cancela mi plan?**
No – transferir la eSIM solo mueve el perfil de SIM a un dispositivo nuevo. Tu plan (y la facturación) continúa como antes. Para cancelar tu plan, debes contactar a tu operadora por separado.

**P15: ¿Puedo transferir una eSIM si ya la eliminé del teléfono antiguo?**
Sí, pero es más complicado. Si eliminaste la eSIM antes de iniciar la transferencia, contacta a tu operadora y pídeles que reemplace tu eSIM por un nuevo código QR. Pueden hacerlo porque tu perfil todavía existe en sus servidores.

**P16: ¿Cuánto cuesta reemitir un código QR de eSIM?**
La mayoría de las operadoras reemiten eSIMs gratis (especialmente los planes pospago). Algunas operadoras prepago o MVNO pueden cobrar una pequeña tarifa ($5‑25). Pregunta antes de solicitar la reemisión.

**P17: ¿Puedo transferir una eSIM de Vodafone a un dispositivo que no es de Vodafone?**
Sí, siempre que tu dispositivo esté liberado y tu plan de Vodafone permita la transferencia de eSIM. Vodafone admite la transferencia a través de su aplicación en la mayoría de los países. Busca la opción "Transferencia eSIM" en la aplicación Vodafone.

**P18: ¿Qué pasa si alcanzo el límite de transferencias de mi operadora?**
Algunas operadoras limitan las transferencias a 3‑5 al año. Si alcanzas el límite, contacta al soporte de la operadora – a menudo pueden restablecer el límite o emitir manualmente un nuevo código QR de eSIM (saltándose el sistema de transferencia).

**P19: ¿Puedo transferir dos eSIMs al mismo tiempo (doble eSIM)?**
Sí, pero debes transferirlas **de una en una**. Cada perfil de eSIM es independiente y debe transferirse por separado usando el mismo proceso. Si tienes dos eSIMs activas en tu dispositivo antiguo, transfiere primero la eSIM principal y luego la secundaria.

**P20: ¿Cuál es la diferencia entre transferencia de eSIM y reemisión de eSIM?**
La transferencia mueve tu perfil existente a un dispositivo nuevo (conservando tu número y plan). La reemisión crea un perfil de eSIM completamente nuevo para el mismo número – el perfil antiguo se desactiva permanentemente. La reemisión es el método alternativo cuando tu operadora no admite la transferencia.

---

## Conclusión final

La capacidad de transferir eSIMs entre iPhone y Android sin intervención de la operadora es un **cambio radical en 2026**. Elimina el último gran punto de fricción para cambiar de ecosistema. Mientras tu operadora esté en la lista de compatibles y ambos teléfonos estén actualizados, puedes mover tu número en menos de un minuto.

**Recuerda**:
- Si tu operadora no está admitida, la alternativa del código QR sigue funcionando – solo requiere una llamada telefónica.
- Para las eSIMs de viaje, trátalas como de un solo uso; compra una nueva en cada dispositivo.
- **Nunca elimines la eSIM antigua antes de iniciar la transferencia** – este es el error más común.
- Comprueba el bloqueo de operadora antes de empezar – se requiere "Sin restricciones de SIM".
- Algunas operadoras limitan las transferencias por año – compruébalo antes de empezar.

Si encuentras mensajes persistentes de **error de transferencia de eSIM**, nuestra **[Guía avanzada de solución de problemas de eSIM (16 casos reales)](/faq/esim-deep-troubleshooting-guide-2026/)** cubre soluciones avanzadas.

👉 **¿Migrando a un plan de viaje?** Consulta [eSIM para EE. UU.](/united-states-esim/) o [eSIM para Europa](/europe-esim/) cuando tu transferencia se complete.

👉 **¿No sabes si tu teléfono nuevo admite eSIM?** Consulta nuestra **[lista completa de compatibilidad](/compatibility/)** antes de empezar.

👉 **¿Pruebas una eSIM de viaje en tu dispositivo nuevo?** Consigue una **[prueba gratuita de eSIM de Roami](/free-esim/)** para confirmar que todo funciona.

---

*Información basada en la documentación oficial de Apple y Android, los estándares de GSMA y la orientación de las operadoras a septiembre de 2026. Las funciones y el soporte de las operadoras están sujetos a cambios.*
## Fuentes

- [GSMA — especificación eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Soporte de Apple — Configurar eSIM en iPhone](https://support.apple.com/en-us/HT212780)
- [Soporte de Google — Configurar una eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Soporte de Google — eSIM Android](https://support.google.com/android/answer/11241215)
