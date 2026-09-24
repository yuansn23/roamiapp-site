---
title: "¿Tu eSIM No Funciona? Corrige Errores de Compatibilidad en 2026"
h1_title: "Cómo Corregir eSIM Que No Funciona: Errores de Compatibilidad en 2026"
description: "¿Atascado con errores de eSIM? Aprende a corregir fallos de activación, problemas de transferencia y bucles de arranque en iPhone y Android. Diagnostica tu teléfono en 2 minutos."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["esim no funciona", "esim no admitida", "esim no compatible iphone", "no se puede activar esim", "red esim no disponible", "esim no se transfiere a iphone nuevo", "esim eliminada por accidente", "perfil esim expirado", "código qr esim inválido", "cómo arreglar esim en iphone", "error de transferencia esim", "esim sin servicio"]
date: 2026-09-16T00:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "Solución de problemas", "Errores de activación", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

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
  title: "eSIM Populares"
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

sidebar_free:
  title: "Reclama una eSIM Gratis"
  icon: "🎁"
  item_suffix: "eSIM gratis"
  item_subtitle: "eSIM gratis"
  items:
    - name: "eSIM del Reino Unido"
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

sidebar_questions:
  title: "Preguntas Frecuentes"
  items:
    - question: "¿Qué es la activación de una eSIM y cómo funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "¿Cómo activar una eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "¿Cómo activar la eSIM en iPhone (todos los modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Última lista de compatibilidad eSIM"
      url: "/compatibility/"
---


> **Nota del editor:** Una gran parte de los problemas de "mi eSIM no funciona" resultan ser un problema del teléfono, no del plan. Esta guía responde a la pregunta que deberías hacerte antes que nada: *¿mi teléfono siquiera es capaz de usar una eSIM?* Te guiaremos por la verificación de hardware de 2 minutos, las excepciones de modelos de China/Hong Kong y los bloqueos de operador — para que no pierdas una hora en pasos de activación que nunca pueden funcionar en tu dispositivo.

> **¿Buscas la solución a un código de error?** Si tu teléfono pasa la verificación de hardware de abajo pero te encuentras frente a un mensaje específico ("Activación fallida", "Sin Servicio", "QR inválido", error de restauración 4013/4014), ese es un problema diferente. Salta a nuestra [Guía Profunda de Solución de Problemas eSIM](/faq/esim-deep-troubleshooting-guide-2026/) para la referencia error por error.

## ¿Mi Teléfono Siquiera Es Capable de eSIM?

Antes de abrir Ajustes, escanear un solo código QR o contactar al soporte, confirma que tu teléfono realmente tiene el hardware de SIM integrada requerido. Esta única verificación descarta instantáneamente aproximadamente la mitad de todos los casos de "la eSIM no funciona".

### La Verificación Universal del EID

Abre el teclado de tu teléfono y marca:

> **`*#06#`**

- Si aparece una pantalla con un **EID de 32 dígitos** (eUICC Identifier), tu teléfono tiene el chip integrado necesario para la activación de SIM digital. ✅
- Si la pantalla solo muestra números **IMEI** y ningún EID, el hardware no está. ❌

**Qué hacer si no aparece ningún EID:** Detente aquí. Ninguna actualización de software, hack ni método de "fuerza" puede añadir el chip faltante — es una ausencia física de hardware. Usa una SIM física en su lugar, o consulta la Solución #4 para teléfonos que *parecen* que deberían admitir eSIM pero no lo hacen.

### EID vs IMEI vs ICCID Explicados

| Identificador | Qué Es | Qué Te Dice |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 dígitos) | Identifica el modelo de tu teléfono — todos los teléfonos tienen uno |
| **EID** | eUICC Identifier (32 dígitos) | Confirma que el chip de SIM integrada está presente — solo los teléfonos con capacidad eSIM tienen uno |
| **ICCID** | Integrated Circuit Card Identifier (19–20 dígitos) | Identifica un perfil eSIM específico después de instalarlo |

> **Idea clave:** EID = hardware presente. Si ves un EID, tu teléfono es físicamente capaz de usar eSIM. Si no lo ves, nada de lo que instales cambiará eso.

### Dónde Encontrar Cada Número

Los tres números están a simple vista una vez que conoces el menú. Esta es la ruta más corta a cada uno:

| Identificador | Forma más rápida | Ubicación alternativa |
| :--- | :--- | :--- |
| **IMEI (15 dígitos)** | Marca `*#06#` — es el primer número que aparece | iPhone: **Ajustes > General > Información**. Android: **Ajustes > Acerca del teléfono** |
| **EID (32 dígitos)** | Marca `*#06#` y desplázate — es el largo que empieza con **8904** | iPhone: **Ajustes > General > Información > EID**. Samsung: **Ajustes > Acerca del teléfono > Estado** |
| **ICCID (19–20 dígitos)** | Solo aparece después de instalar un perfil | iPhone: **Ajustes > General > Información**. Android: **Ajustes > Acerca del teléfono > Estado de la tarjeta SIM** |

> **Dato útil:** todo EID empieza con **"8904"** — ese prefijo lo marca como un identificador eUICC. Si el número largo en pantalla empieza con otra cosa, estás leyendo el valor equivocado.

### La Prueba del Botón Añadir eSIM

Si `*#06#` muestra un EID pero aún ves "eSIM no admitida", abre **Ajustes > Datos móviles** y busca **"Añadir eSIM"** o **"Añadir plan de datos móviles"**. Si la opción está ahí pero falla al escanear, lo más probable es que estés tratando con un **bloqueo de operador** o una **restricción de región** — ambos cubiertos abajo.

### El Método de Búsqueda en Ajustes

¿Sin teclado a mano (algunas tabletas y plegables lo esconden), o `*#06#` te dio una pantalla confusa? La barra de búsqueda del propio teléfono es la segunda verificación más rápida.

- **iPhone:** Abre **Ajustes**, desliza hacia abajo desde la parte superior de la lista para mostrar el cuadro de búsqueda y escribe **"eSIM"**. Un resultado de **"Añadir eSIM"** o **"Añadir plan de datos móviles"** significa que la función está activa.
- **Samsung:** Abre **Ajustes**, pulsa el **icono de la lupa** en la parte superior y escribe **"eSIM"**. Si aparece **"Gestor de tarjeta SIM"** (o "Añadir plan móvil"), tu variante tiene el chip.
- **Pixel:** Abre **Ajustes > Red e Internet > SIM**. Si ves **"¿Descargar una SIM en su lugar?"**, estás bien. Una pantalla que solo lista tu SIM física — sin opción de descarga — significa que no hay chip eUICC.

> **Sin resultado de búsqueda = sin hardware.** Si un teléfono vendido después de aproximadamente 2018 no devuelve nada para "eSIM" en la búsqueda de Ajustes, casi seguro tienes en la mano una variante de región o económica que vino sin el chip.

### La Búsqueda por Número de Modelo

¿Comprando de segunda mano, o revisando un teléfono que no puedes encender? El número de modelo lo resuelve en segundos.

- **iPhone:** **Ajustes > General > Información > Número de modelo**, luego pulsa el número para cambiarlo al **identificador con prefijo A** (p. ej., **A2111**). Las letras antes de **/A** en el número de pieza codifican la región de venta — el mapa completo de sufijos está en la Sección 2.
- **Samsung:** **Ajustes > Acerca del teléfono > Número de modelo** (p. ej., **SM-S921U1**). El último carácter es la pista: **U** = operador de EE. UU., **U1** = liberado de EE. UU., **B** = Europa/global, **0** = China/Hong Kong (Snapdragon).
- **Pixel:** **Ajustes > Acerca del teléfono > Modelo**. Las cadenas de modelo del Pixel difieren por región y operador — Japón y algunas variantes de operadores de EE. UU. restringen la eSIM, así que verifica el código específico o marca `*#06#`.

> **Regla práctica:** si el número de modelo termina en un sufijo de China/región (o un sufijo de operador de EE. UU. en un Samsung), verifica con `*#06#` antes de asumir que la eSIM funciona. El número de modelo más el EID juntos te dan una respuesta al 100 %.

### Por Qué un Teléfono Puede Mostrar EID pero Aún Rechazar la eSIM

| Escenario | ¿EID Presente? | ¿Funciona la eSIM? | ¿Por qué? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR y posteriores (global) | ✅ Sí | ✅ Sí | Soporte completo para perfiles SIM digitales |
| iPhone XS/XR (modelo de China) | ❌ No | ❌ No | Hardware retirado por la doble SIM física |
| Samsung S20 FE (operador de EE. UU.) | ✅ Sí | ❌ No | El operador deshabilitó la función por software |
| Google Pixel 4a (Japón) | ✅ Sí | ❌ No | El operador bloqueó la funcionalidad |
| iPhone bloqueado por operador (AT&T/T-Mobile) | ✅ Sí | ❌ No (para otros operadores) | El bloqueo de red impide los perfiles de otros proveedores |
| iPhone liberado (cualquier región) | ✅ Sí | ✅ Sí | Soporte completo |


## eSIM No Admitida o No Compatible en iPhone

Si ves **"eSIM no admitida"**, **"esta eSIM no es compatible con este iPhone"** o simplemente **"eSIM no compatible iPhone"**, la causa es casi siempre una de cinco cosas — y todas tienen que ver con tu *dispositivo*, no con el plan.

### Tu Modelo de iPhone Es Anterior al Hardware eSIM

Solo los iPhones desde el **XR, XS, XS Max (2018) y posteriores** tienen el chip integrado. El iPhone 8, 8 Plus y iPhone X no, así que devuelven **"eSIM no admitida"** sin importar lo que intentes. El chip eUICC simplemente no está presente en esas placas — es una limitación de hardware, no un problema de ajustes.

**Verificación rápida:** Marca `*#06#`. Un EID de 32 dígitos significa que estás bien; solo IMEI significa que no.

**Qué hacer:** Usa una SIM física, o actualiza a un iPhone XR o posterior. La lista oficial está en [Apple Soporte — Configurar eSIM en iPhone](https://support.apple.com/en-us/118670).

### Tu iPhone Es un Modelo de China Continental

Los iPhones vendidos en China continental vienen con **dos ranuras de SIM física y sin hardware eSIM**. Las regulaciones chinas empujan a los teléfonos inteligentes domésticos hacia la doble SIM física, así que Apple retiró el chip integrado en estas unidades. Incluso si aparece la opción "Añadir plan de datos móviles", no se completará — esta es la razón más común de "eSIM no compatible con este iPhone" entre los compradores que adquirieron su dispositivo en China o a través de ciertos revendedores.

**Cómo identificarlo:** **Ajustes > General > Información > Número de modelo**. Si termina en **"CH/A"**, es un modelo de China continental. (Tabla completa de sufijos en la Sección 2 abajo.)

**Qué hacer:** No hay forma de habilitar la eSIM en un dispositivo CH/A. Usa una SIM de viaje física, o vende el teléfono y compra una versión global.

### Tu iPhone Está Bloqueado por el Operador

Algunos operadores — especialmente los de EE. UU. — bloquean los iPhones a su propia red. Intentar activar un perfil de un proveedor diferente (como una eSIM de viaje) devuelve entonces "eSIM no admitida" o un mensaje de "el operador no admite". Ten en cuenta que algunos operadores bloquean solo la ranura de SIM física dejando abierta la ranura eSIM, pero muchos bloquean ambas.

**Cómo verificarlo:** **Ajustes > General > Información > Bloqueo de operador**. Debería decir **"Sin restricciones de SIM"**. Si dice "SIM bloqueada", necesitas una liberación. Consulta la Sección 3 para el recorrido completo del bloqueo de operador.

### Tu Versión de iOS Está Desactualizada

El soporte de SIM digital mejoró mucho en iOS 16 y posteriores. En iOS 12 o 13, algunos perfiles de operadores modernos simplemente no se instalan.

**Cómo verificarlo:** **Ajustes > General > Actualización de software**.

**Qué hacer:** Actualiza a la última versión de iOS, elimina cualquier perfil a medio instalar y vuelve a escanear el código QR.

### Este iPhone No Admite eSIM en un iPhone 14

Un iPhone 14 (versión de EE. UU.) siempre debería admitir eSIM — el modelo de EE. UU. no tiene bandeja de SIM física en absoluto. Si devuelve este error de todos modos, estás ante un raro **fallo de hardware eUICC**. Contacta al Soporte de Apple para un diagnóstico de hardware en lugar de perseguir ajustes.

Para la lista completa de iPhone modelo por modelo, consulta nuestra [guía de compatibilidad eSIM de iPhone](/faq/iphone-11-esim-compatible/).

Los dueños de Samsung deben consultar la [guía eSIM de Samsung Galaxy](/faq/samsung-s20-esim-compatible/), y los dueños de Pixel la [guía eSIM de Google Pixel](/faq/google-pixel-6-esim-compatible/).


### eSIM No Admitida: Hardware, Software u Operador

Cada caso de "eSIM no admitida" — en cualquier teléfono, cualquier operador — cae en uno de tres grupos. Nombrar el grupo te dice instantáneamente si el problema es reparable.

| Grupo | Cómo Se Ve | ¿Reparable? | Tu Movimiento |
| :--- | :--- | :--- | :--- |
| **Hardware** | Sin EID en `*#06#`; iPhone anterior a 2018; modelo de China (CH/A); Android económico sin eUICC | ❌ No | SIM física, o actualizar el teléfono |
| **Software** | EID presente, pero la función está oculta o el SO es antiguo (Samsung S20 FE deshabilitado por el operador, iOS desactualizado) | ✅ Normalmente | Actualizar el SO, o eliminar la restricción del operador |
| **Operador** | EID presente, menú visible, pero la activación del plan de otro proveedor falla | ✅ Sí | Liberar el dispositivo (Sección 3), luego volver a escanear |

**La prueba de enrutamiento de 30 segundos:** marca `*#06#`.
- **Sin EID** → hardware. Detente aquí — nada de lo que instales cambiará eso.
- **EID presente, pero el flujo de "Añadir eSIM" falla** → software u operador. Ambos son reparables, así que sigue leyendo.

Ese único resultado te dirige a la solución correcta en aproximadamente 9 de cada 10 reportes de "no admitida" que vemos en Roami.


## La Guía de Modelos de China, Hong Kong y Macao

Dónde se vendió tu teléfono determina qué hardware tiene. Esta es la forma más rápida de confirmar o descartar una situación regional de no-eSIM.

### Referencia Rápida de Modelos de China

| Final del Número de Modelo | Región | Soporte eSIM |
| :--- | :--- | :--- |
| **CH/A** | China continental | ❌ No (doble SIM física) |
| **HK/A** | Hong Kong | ⚠️ Varía (algunos modelos admiten SIM física + digital) |
| **LL/A** | EE. UU. | ✅ Sí |
| **ZA/A** | Canadá | ✅ Sí |
| **J/A** | Japón | ✅ Sí (excepto algunos modelos de operador) |
| **B/A** | Reino Unido/Europa | ✅ Sí |
| **X/A** | Australia/Nueva Zelanda | ✅ Sí |

### Estado de la eSIM en iPhones de China Continental

- **Todos los iPhones vendidos en China continental** (excepto la serie iPhone 16) tienen doble SIM física y sin eSIM.
- **Los teléfonos Android chinos** — Xiaomi, Oppo, Vivo, Huawei — vendidos a nivel nacional también suelen carecer del chip eSIM.
- **Si llevas un teléfono internacional a China:** funcionará con eSIM de viaje internacionales, pero los operadores chinos locales no ofrecen eSIM a los turistas, así que aún necesitarás un plan de viaje de un proveedor como Roami.

### Estado de la eSIM en iPhones de Hong Kong

- **Modelos de iPhone:** los iPhones de Hong Kong suelen admitir **eSIM + SIM física** (uno de cada) o doble SIM física según el modelo exacto. Revisa el sufijo de tu modelo.
- **Operadores:** algunos operadores de Hong Kong (CMHK, 1010, SmarTone) ofrecen eSIM a clientes pospago, pero la eSIM prepago es rara.
- **Viajeros:** una eSIM de viaje internacional es más simple y fiable que intentar conseguir una eSIM local de Hong Kong.

### Estado de la eSIM en iPhones de Macao

- **Similar a Hong Kong:** la mayoría de los iPhones de Macao se importan de Hong Kong y admiten eSIM + SIM física.
- **CTM** (el operador principal de Macao) ofrece eSIM a clientes pospago pero no a turistas.

### Por Qué los Modelos Chinos Eliminan la eSIM

No es una medida de reducción de costos de Apple o de las marcas Android — es regulación. China continental exige que los teléfonos vendidos allí estén certificados para doble SIM física, y un perfil eSIM reescribible no encaja en ese marco doméstico. El resultado práctico:

- **Apple** envía los iPhones de China continental con **dos ranuras de nano-SIM física** y sin chip eUICC.
- **Xiaomi, Oppo, Vivo, Honor y Huawei** eliminan la eSIM de sus compilaciones domésticas de China incluso cuando la versión global del mismo teléfono la tiene.
- **Un teléfono de China llevado al extranjero sigue sin poder recuperar la eSIM** — es una ausencia de hardware, no un bloqueo de software. Lo inverso también es cierto: un teléfono internacional que entra a China funciona con eSIM de viaje, pero los tres grandes operadores chinos (China Mobile, China Unicom, China Telecom) no venden eSIM a los turistas.

**La solución:** si compraste el teléfono en China continental, planea usar una SIM de viaje física — o compra un teléfono de modelo global. No existe ninguna liberación, jailbreak ni app que añada el chip faltante.

### Identificar Tu Modelo por el Número A

El sufijo del número de pieza (CH/A, LL/A, etc.) es el filtro rápido, pero el **número A** es el identificador preciso. Tomemos el iPhone 11 como el patrón que sigue cada generación:

| Modelo iPhone 11 | Región | ¿eSIM? |
| :--- | :--- | :--- |
| **A2111** | Estados Unidos | ✅ Sí |
| **A2221** | China continental | ❌ No (doble SIM física) |
| **A2223** | Hong Kong / Macao | ✅ Sí (eSIM + física) |

**Cómo usarlo:** encuentra tu número A (**Ajustes > General > Información > Número de modelo**, luego pulsa el número para revelar el código con prefijo A) y compáralo con la lista de modelos de Apple. Si un vendedor publicitó un "iPhone global liberado con eSIM" pero el número A es un código de China, el anuncio estaba equivocado — aléjate o planea usar una SIM física.


## Bloqueo de Operador y Cómo Eliminarlo

El bloqueo de operador es la segunda causa más común de que un teléfono perfectamente capaz rechace una eSIM. Es una restricción de software que tu operador coloca en el dispositivo, no un límite de hardware.

### Qué Hace un Bloqueo de Operador

Cuando un teléfono está "bloqueado por SIM", solo aceptará SIM y perfiles eSIM del operador que lo vendió. Intentar añadir una eSIM de viaje de otro proveedor dispara "eSIM no admitida" o "SIM no compatible". El chip integrado está presente y funcionando — el operador simplemente está bloqueando el acceso a él.

### Cómo Verificar tu Estado de Bloqueo

1. En iPhone: **Ajustes > General > Información > Bloqueo de operador**. Debería decir **"Sin restricciones de SIM"**.
2. En Android (Samsung): **Ajustes > Acerca del teléfono > Estado** y busca el campo de bloqueo de SIM.
3. En Android (Pixel): **Ajustes > Acerca del teléfono > Estado de la SIM**.

### Políticas de Liberación de los Operadores de EE. UU.

| Operador | Requisito de Liberación |
| :--- | :--- |
| **AT&T** | Dispositivo completamente pagado y activo durante 60 días antes de liberar |
| **T-Mobile** | Dispositivo pagado y activo durante 40 días; solicitud a través de la app de T-Mobile |
| **Verizon** | La mayoría de los teléfonos se liberan automáticamente 60 días después de la compra |

### Cómo Liberar Tu Dispositivo

1. **Solicita la liberación a tu operador** — normalmente es gratis una vez que el teléfono está pagado, y la mayoría de los operadores de EE. UU. permiten solicitarlo desde la app o un formulario web.
2. **Espera la confirmación** — el operador envía la liberación; puede que necesites reiniciar el teléfono.
3. **Verifica** — vuelve a revisar el campo Bloqueo de operador hasta que diga "Sin restricciones de SIM".
4. **Luego activa** — una vez liberado, vuelve a escanear el código QR de tu eSIM de viaje.

> **Nota:** un bloqueo de operador es una restricción a nivel de teléfono, no a nivel de plan. Liberar tu dispositivo no cancela tu contrato — solo libera el dispositivo para usar SIM y eSIM de otros proveedores.

### Más Operadores de EE. UU. y Políticas de Liberación de MVNO

Los tres grandes no son los únicos con los que la gente se encuentra. Los teléfonos prepago y de MVNO suelen estar bloqueados por más tiempo, y esa puede ser la razón oculta de que una eSIM de viaje de "gran oferta" no se instale.

| Operador | Requisito de Liberación |
| :--- | :--- |
| **Cricket Wireless** | 6 meses de servicio pagado (a menos que se compre a precio completo) |
| **Metro by T-Mobile** | 180 días de servicio pagado |
| **Boost Mobile** | 12 meses de servicio pagado |
| **Spectrum Mobile** | 60 días |
| **Xfinity Mobile** | 60 días de servicio activo |
| **US Cellular** | 120 días |
| **Visible (prepago de Verizon)** | 60 días de servicio pagado |

### Qué Necesitas para Solicitar una Liberación

Las liberaciones son gratis una vez que cumples los requisitos, pero la solicitud necesita algunas cosas listas:

1. **Tu IMEI** — marca `*#06#` y toma el número de 15 dígitos (no el EID).
2. **Tu número de cuenta y PIN/contraseña de cuenta** — encuéntralos en la app de tu operador o en una factura reciente.
3. **El teléfono completamente pagado** — los operadores no liberan un dispositivo con un saldo de pago a plazos pendiente.
4. **Requisitos cumplidos** — cada operador tiene una ventana mínima de días activos (consulta las tablas de arriba).

**Dónde solicitar:** AT&T y T-Mobile tienen portales de liberación en línea y formularios en la app; Verizon libera automáticamente la mayoría de los teléfonos después de 60 días sin necesidad de solicitud. Para los MVNO (Cricket, Metro, Boost), usa su app o llama al soporte directamente.

**Sobre los servicios de terceros de "liberación instantánea":** son una apuesta. Muchos usan herramientas de operadores filtradas que hacen que el teléfono se vuelva a bloquear, y algunos son estafas directas. Si tu operador dice que aún no eres elegible, espera — no le pagues $20 a un desconocido para que lo haga "por" ti.


### Los Tres Tipos de Bloqueo Diferentes

La gente dice "mi teléfono está bloqueado" y significa tres cosas completamente diferentes. Cada una necesita una solución diferente, así que vale la pena separarlas.

| Tipo de Bloqueo | Qué Es | Dónde Lo Ves | Solución |
| :--- | :--- | :--- | :--- |
| **Bloqueo de teléfono (bloqueo de activación)** | Antirrobo: Bloqueo de Activación de iCloud (iPhone) o FRP de Google (Android), vinculado a la cuenta del propietario anterior | "Bloqueo de activación" / "Este iPhone está vinculado a un Apple ID" durante la configuración, o una solicitud de cuenta de Google en Android | Solo el propietario original puede eliminarlo — nunca compres un teléfono que aún lo muestre |
| **Bloqueo de región** | Una diferencia de hardware según dónde se vendió el teléfono (los modelos de China carecen del chip eUICC) | Sin EID en `*#06#`; número de modelo que termina en CH/A | No se puede eliminar — usa una SIM física u otro teléfono |
| **Bloqueo de operador** | Una restricción de software de tu operador que limita el teléfono a su red | **Ajustes > General > Información > Bloqueo de operador** muestra "SIM bloqueada" | Solicitar una liberación al operador (Sección 3) |

**La desambiguación rápida:**
- Ver una **solicitud de Apple ID o cuenta de Google** = bloqueo de teléfono/activación (un problema de propietario).
- **Ningún EID en absoluto** = bloqueo de región (un problema de hardware).
- **EID presente + "SIM bloqueada"** = bloqueo de operador (reparable, gratis una vez elegible).

La mayoría de las quejas de "la eSIM no funciona" que sobreviven a la verificación de 2 minutos son del tipo bloqueo de operador — y esa casi siempre tiene solución.


## Mi Teléfono No Admite eSIM pero Debería

Algunos dispositivos se publicitan con eSIM, pero variantes regionales o de operadores específicos eliminan silenciosamente la función. Estos son los culpables habituales:

- **Samsung Galaxy S20 FE** – las versiones bloqueadas por operadores de EE. UU. tienen la función deshabilitada por software para reducir costos, aunque el modelo global la admite.
- **Google Pixel 4a (versiones de Japón)** – Docomo y SoftBank deshabilitan la eSIM en sus unidades debido a acuerdos locales con operadores.
- **Serie Xiaomi Redmi Note** – ninguna tiene el chip eUICC, a pesar de los rumores en línea. Xiaomi reserva la eSIM para sus insignias.
- **iPhone 8 / 8 Plus / X** – hardware anterior al eUICC; Apple solo añadió el chip a partir de la generación XS/XR.
- **Serie Samsung Galaxy A** – solo modelos seleccionados (A54, A53) tienen el chip; la mayoría de la serie A no.

### Teléfonos Que Parecen Compatibles con eSIM pero No Lo Son

| Modelo de Teléfono | Soporte eSIM | ¿Por qué? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ No | Hardware anterior al eUICC |
| **iPhone XS/XR (China)** | ❌ No | Hardware de doble SIM física |
| **Samsung Galaxy S20 FE (operador de EE. UU.)** | ❌ No | Deshabilitado por el operador |
| **Samsung Galaxy A13 / A23** | ❌ No | Modelo de entrada, sin eUICC |
| **Google Pixel 4a (Japón)** | ❌ No | Deshabilitado por el operador (Docomo/SoftBank) |
| **Google Pixel 3 (algunos modelos)** | ⚠️ Varía | Revisar región; algunos lo tienen, otros no |
| **Serie Xiaomi Redmi Note** | ❌ No | Sin hardware eUICC |
| **Xiaomi 12/13 (China)** | ❌ No | Las versiones domésticas de China carecen del hardware |
| **OnePlus Nord (versión de China)** | ❌ No | La región de China carece del hardware |
| **Huawei (todos los domésticos de China)** | ❌ No | Sin servicios de Google, sin hardware eSIM |
| **Serie Motorola G (la mayoría)** | ❌ No | Los modelos económicos carecen de eUICC |

**Qué hacer:** Antes de comprar cualquier teléfono, márcale `*#06#` (si lo tienes en la mano) para confirmar el EID, o pasa el IMEI por un verificador de compatibilidad eSIM en línea. La **[lista completa de teléfonos compatibles con eSIM (2026)](/compatibility/)** es tu mejor recurso para verificar cualquier modelo.


## Compatibilidad eSIM en Android por Marca

Si estás en Android, la mayor variable no es el sistema operativo — es si *tu variante específica* vino con el chip. Aquí está el panorama modelo por modelo.

### Compatibilidad eSIM de Samsung Galaxy

| Modelo | Soporte eSIM | Notas |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Sí | Todas las variantes globales |
| **Galaxy S20 FE** | ❌ No (operador de EE. UU.) / ✅ Sí (global) | Revisar número de modelo |
| **Galaxy A54 / A53** | ✅ Sí | Solo serie A seleccionada |
| **Galaxy A13 / A23 / A33** | ❌ No | Modelos económicos |
| **Galaxy Z Fold / Flip** | ✅ Sí | Todos los modelos |
| **Galaxy Note 20** | ✅ Sí | Todos los modelos |

**Cómo verificar en Samsung:** Marca `*#06#` y busca un EID, o abre **Ajustes > Conexiones > Gestor de tarjeta SIM** y busca "Añadir eSIM" / "Añadir plan móvil". Si no está presente ninguno, tu variante carece de la función. Para más información, consulta nuestra [guía de compatibilidad eSIM de Samsung](/faq/samsung-s20-esim-compatible/) y [Soporte de Samsung](https://www.samsung.com/us/support/).

### Compatibilidad eSIM de Google Pixel

| Modelo | Soporte eSIM | Notas |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Sí | Primer Pixel con la función |
| **Pixel 3a / 3a XL** | ✅ Sí | – |
| **Pixel 4 / 4 XL** | ✅ Sí | – |
| **Pixel 4a** | ⚠️ Varía | Versiones de operadores de Japón = NO |
| **Pixel 5 / 5a** | ✅ Sí | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Sí | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Sí | – |
| **Pixel 8 / 8 Pro** | ✅ Sí | – |

**Cómo verificar en Pixel:** Marca `*#06#` para el EID, o abre **Ajustes > Red e Internet > SIM** y busca "¿Descargar una SIM en su lugar?". Si falta, la variante está bloqueada o carece del chip. Para más información, consulta nuestra [guía de compatibilidad eSIM de Pixel](/faq/google-pixel-6-esim-compatible/) y la página de [Google Soporte — eSIM en Pixel](https://support.google.com/pixelphone/answer/7086887).

### Compatibilidad eSIM de OnePlus

OnePlus solo añadió eSIM a partir del **OnePlus 12**. El OnePlus 11, 10, 9 y la serie Nord carecen del hardware.

| Modelo | Soporte eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Sí |
| **OnePlus 11** | ❌ No |
| **OnePlus 10** | ❌ No |
| **OnePlus 9** | ❌ No |
| **Serie OnePlus Nord** | ❌ No (excepto algunas variantes de la UE) |

### Xiaomi, Huawei, Motorola y Otras Marcas con eSIM

- **Xiaomi** – los modelos insignia (versiones globales del Xiaomi 12/13) pueden admitir eSIM, pero las unidades domésticas de China no. La línea Redmi Note no tiene eUICC en absoluto.
- **Huawei** – el soporte se limita a unos pocos modelos (P40, Mate 40 y posteriores); muchos teléfonos posteriores a 2020 carecen de eSIM debido a las sanciones de EE. UU. Revisa **Ajustes > Red móvil > eSIM** — si falta la opción, no es compatible.
- **Motorola** – la mayoría de los modelos económicos de la serie G carecen del chip; la línea Moto G Power y Edge varía según la región.

La prueba universal para cada uno de ellos es la misma: marca `*#06#` y busca el EID.


## Verificación de Capacidad eSIM: Android vs iPhone

La misma verificación de 2 minutos, dos menús diferentes. Entrégale esta tabla a un amigo de la otra plataforma.

| Verificación | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Marca `*#06#` | Marca `*#06#` | Marca `*#06#` |
| **Menú Añadir eSIM** | **Ajustes > Datos móviles > Añadir eSIM** | **Ajustes > Conexiones > Gestor de tarjeta SIM > Añadir eSIM** | **Ajustes > Red e Internet > SIM > ¿Descargar una SIM en su lugar?** |
| **Número de modelo** | **Ajustes > General > Información > Número de modelo** | **Ajustes > Acerca del teléfono > Número de modelo** | **Ajustes > Acerca del teléfono > Modelo** |
| **Estado de bloqueo** | **Ajustes > General > Información > Bloqueo de operador** | **Ajustes > Acerca del teléfono > Estado** | **Ajustes > Acerca del teléfono > Estado de la SIM** |

**La única diferencia que importa:** en iPhone, el soporte de eSIM es todo o nada por generación y región — fácil de predecir. En Android, es por variante, así que dos teléfonos Galaxy o Pixel "iguales" pueden comportarse de forma diferente. Ante la duda en Android, confía en el EID de `*#06#` por encima de la ficha técnica.


## Tu Teléfono Admite eSIM pero la Activación Falla

Si tu teléfono pasó la verificación de hardware de arriba y aún ves un mensaje de error específico, el problema ya no es de compatibilidad — es un problema de activación o de red. Esos tienen su propia referencia dedicada:

- **"Activación fallida", "Sin Servicio", "QR inválido", "No se puede añadir el plan de datos móviles", error de restauración 4013/4014 y cualquier otro error en pantalla** → consulta la [Guía Profunda de Solución de Problemas eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/), que vincula cada mensaje con una solución.
- **Ajustes APN y la tabla completa de APN por proveedor** → la referencia canónica de APN también está en la [Guía Profunda de Solución de Problemas eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Activación paso a paso (QR / manual / app del operador)** → consulta [Cómo activar una eSIM](/faq/how-to-activate-an-esim/).
- **Mover un perfil a un teléfono nuevo** → consulta [Cómo transferir una eSIM entre iPhone y Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Configuración de iPad y Apple Watch** → consulta la [guía de eSIM de iPad y Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Preguntas Frecuentes

**¿Por qué mi iPhone XR dice "eSIM no admitida" aunque debería funcionar?**
Si tu número de modelo termina en CH/A, es una unidad de China continental sin chip eSIM. De lo contrario, revisa el estado del bloqueo de operador — un XR bloqueado rechazará los perfiles de otros proveedores.

**¿Puedo forzar la eSIM en un iPhone 7?**
No. El iPhone 7 (y el 6s, 8 y X) son anteriores por completo al chip eUICC. Ningún hack de software puede añadir hardware que no está.

**¿Cuál es la diferencia entre EID y IMEI?**
El IMEI (15 dígitos) identifica el modelo de tu teléfono — todos los teléfonos tienen uno. El EID (32 dígitos) identifica el chip de SIM integrada — solo los teléfonos con capacidad eSIM tienen uno. Si `*#06#` no muestra un EID, tu teléfono no puede usar eSIM.

**¿Qué significa "EID no encontrado" cuando marco `*#06#`?**
Significa que tu teléfono carece del chip de hardware eUICC requerido para los perfiles SIM digitales. Es una limitación de hardware, no algo que una actualización de software pueda arreglar.

**Mi teléfono no admite eSIM — ¿puedo usar de todos modos una eSIM de viaje?**
No. Necesitas el chip integrado, así que una SIM física es tu única opción. Muchos proveedores (incluido Roami) también venden tarjetas SIM físicas.

**¿Cómo sé si mi Samsung Galaxy tiene eSIM?**
Marca `*#06#` — si aparece un EID, es compatible. También puedes revisar Ajustes > Conexiones > Gestor de tarjeta SIM para una opción de "Añadir eSIM". Algunas variantes de operadores de EE. UU. y de la serie A la esconden.

**¿El OnePlus 11 admite eSIM?**
No. OnePlus añadió la eSIM a partir del OnePlus 12. El 11, 10, 9 y la serie Nord carecen del hardware.

**¿Cómo verifico si mi iPhone está bloqueado por el operador?**
Ajustes > General > Información > Bloqueo de operador. "Sin restricciones de SIM" significa que está liberado. Cualquier otra cosa significa que está bloqueado a ese operador.

**¿Qué modelos de iPad admiten eSIM?**
iPad Pro (3.ª generación y posteriores), iPad Air (3.ª generación y posteriores), iPad (10.ª generación y posteriores) y iPad mini (6.ª generación y posteriores) — solo modelos con datos móviles. Los iPads solo Wi-Fi no tienen hardware eSIM.

**¿Dónde puedo encontrar una lista de teléfonos compatibles con eSIM?**
La [lista completa de teléfonos compatibles con eSIM (2026)](/compatibility/) cubre iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi y más.

**¿Cuál es la diferencia entre un bloqueo de teléfono y un bloqueo de operador?**
Un bloqueo de teléfono (de activación) es antirrobo — iCloud en iPhone, Google FRP en Android — y solo el propietario original puede eliminarlo. Un bloqueo de operador es una restricción de red que tu operador levanta gratis una vez que el teléfono está pagado y es elegible.

**¿Por qué los teléfonos chinos no tienen eSIM?**
China continental exige que los teléfonos domésticos estén certificados para doble SIM física, así que Apple y las marcas Android envían las unidades de China con dos ranuras de nano-SIM y sin chip eUICC. Es hardware — no se puede habilitar después.

**¿Puedo añadir eSIM a un teléfono que no tiene EID?**
No. El chip eUICC está soldado a la placa base. No hay adaptador, app, jailbreak ni actualización de software que añada hardware que nunca se instaló.

**¿Un restablecimiento de fábrica arregla "eSIM no admitida"?**
No. Un restablecimiento no cambia el hardware ni elimina un bloqueo de operador. Sin embargo, puede borrar un perfil dañado a medio instalar, así que vale la pena intentarlo para fallos de software — después de hacer una copia de seguridad.

**¿Para qué sirve el EID cuando un proveedor lo pide?**
El EID permite a tu proveedor vincular un perfil eSIM específico al chip de tu teléfono antes de que escanees. Así saben que el plan está destinado a tu dispositivo exacto — piénsalo como la "dirección" de la eSIM.

**¿Cómo sé si mi teléfono está liberado sin insertar una SIM?**
iPhone: Ajustes > General > Información > Bloqueo de operador — "Sin restricciones de SIM" significa liberado. Android: Ajustes > Acerca del teléfono > Estado (o Estado de la SIM) y busca el texto "SIM bloqueada" o "SIM no bloqueada".

👉 **¿Confirmaste que tu teléfono es capaz?** Consigue una [eSIM para EE. UU.](/united-states-esim/) o una [eSIM para Japón](/japan-esim/) para conectarte.


## Prueba Tu Compatibilidad con una eSIM Gratis

La forma más rápida de confirmar que tu teléfono realmente puede usar eSIM es instalar una **eSIM de prueba gratuita**. No cuesta nada, toma 2 minutos, y si se instala y conecta, tu hardware está listo.

👉 [**Consigue tu eSIM gratis de Roami ahora**](/free-esim/)

---

*Si tu dispositivo o error específico no está cubierto aquí, contáctanos y te ayudaremos a confirmar si tu teléfono es compatible con eSIM.*
## Fuentes

- [GSMA — especificación eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Soporte — Configurar eSIM en iPhone](https://support.apple.com/en-us/HT212780)
- [Google Soporte — Configurar una eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Soporte — eSIM de Android](https://support.google.com/android/answer/11241215)
