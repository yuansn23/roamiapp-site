---
title: "Guía Profunda de Solución de Problemas eSIM 2026"
h1_title: "La Guía Completa de Solución de Problemas eSIM en 2026 – 18 Soluciones Reales"
description: "Corrige fallos de activación de eSIM, errores de transferencia, sin servicio y problemas de escaneo de QR en iPhone y Android con esta guía de solución de problemas 2026."
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["solución de problemas eSIM", "activación de eSIM fallida", "eSIM sin servicio", "error de transferencia eSIM", "transferencia multiplataforma eSIM", "eSIM iOS 18", "ajustes APN eSIM", "código de confirmación eSIM", "bloqueo de operador eSIM", "eSIM atascada en activando"]
date: 2026-09-16T00:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Solución de problemas", "Configuración de viajes"]
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

# Sidebar: Free eSIM offers
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

# Sidebar: Popular questions
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


> **Nota del editor:** Roami gestiona el escritorio de soporte detrás de esta referencia. Cuando un viajero se topa con un error específico en pantalla — "Activación fallida", "Sin Servicio", "No se puede añadir el plan de datos móviles", error de restauración 4013/4014 — esta es la página que nuestro propio equipo abre para descifrarlo. Cada entrada a continuación vincula un mensaje de error exacto con su causa real y una solución concreta, probadas en iOS 18 y Android 14/15 a septiembre de 2026.

> **¿Página equivocada?** Si tu pregunta es "¿mi teléfono siquiera admite eSIM?" — modelo de China/Hong Kong, bloqueo de operador, EID ausente — esa es una pregunta de hardware, no un error. Dirígete a nuestra [guía de hardware y códigos de error eSIM](/faq/esim-activation-errors-troubleshooting-guide/). Esta página asume que tu teléfono puede usar eSIM y que el problema es un mensaje de error específico.

## Flujo de Diagnóstico Rápido de eSIM

Usa este mapa de decisiones para ir directo a la solución del mensaje exacto que ves en tu pantalla.

| Lo que ves / experimentas | Lo que probablemente está roto | Urgencia | Ir a la solución |
|---------------------------|----------------------|---------|-------------|
| **El código QR no escanea / dice inválido** | Código QR expirado o dañado | Baja | [Sección 3](#esim-qr-code-invalid-or-expired) |
| **"No se puede activar" o "Activación fallida"** | Tiempo de espera de red agotado o error del servidor | Media | [Sección 1](#esim-activation-failed-or-unable-to-activate) |
| **"Sin Servicio" tras la instalación** | Itinerancia de datos desactivada o APN faltante | Alta | [Sección 2](#esim-no-service-after-installation) |
| **Barras de señal completas pero sin internet** | APN mal configurado | Alta | [Sección 8](#esim-no-data-connection-after-activation) |
| **"No se puede añadir el plan de datos móviles"** | Demasiadas eSIM almacenadas o restricción de hardware | Media | [Sección 5](#esim-cellular-plan-cannot-be-added) |
| **"eSIM ya en uso"** | Perfil todavía vinculado al dispositivo antiguo | Alta | [Sección 4](#esim-already-in-use-or-bound-to-another-device) |
| **Ventana emergente de código de confirmación** | El perfil requiere un PIN | Baja | [Sección 6](#esim-confirmation-code-required) |
| **"SIM no compatible"** | El teléfono está bloqueado por el operador | Alta | [Sección 7](#esim-sim-not-supported-on-a-carrier-locked-device) |
| **Atascado en "Activando" por más de 10 minutos** | Descarga detenida | Media | [Sección 9](#esim-stuck-on-activating) |
| **Doble SIM: una línea sin señal** | Conflicto de enrutamiento | Media | [Sección 10](#dual-esim-with-one-line-showing-no-service) |
| **eSIM transferida a un teléfono nuevo, falla** | Transferencia multiplataforma no admitida | Alta | [Sección 11](#esim-transfer-failed) |
| **Error de restauración 4013/4014 en iPhone** | Problema de hardware/firmware, no de eSIM | Alta | [Sección 12](#iphone-esim-restore-error-4013-or-4014) |
| **"Perfil expirado"** | El código QR agotó su tiempo | Baja | [Sección 13](#esim-profile-expired) |
| **Itinerancia no funciona en el extranjero** | Interruptor de itinerancia de datos desactivado | Alta | [Sección 14](#esim-data-roaming-not-working) |
| **eSIM eliminada por accidente** | Error del usuario | Alta | [Sección 15](#esim-deleted-by-mistake) |
| **MDM bloquea los cambios de eSIM** | Política del dispositivo de trabajo | Media | [Sección 16](#mdm-or-enterprise-restrictions-block-esim) |
| **La eSIM desapareció tras reiniciar** | Fallo de software de iOS/Android | Alta | [Sección 17](#esim-disappeared-after-restart) |
| **Wi-Fi Calling funciona pero los datos de la eSIM no** | Conflicto de enrutamiento entre Wi-Fi y datos móviles | Media | [Sección 18](#wi-fi-calling-works-but-esim-data-does-not) |
| **SIM física insertada, la eSIM no funciona** | Conflicto con la bandeja SIM | Alta | [Sección 19](#esim-vs-physical-sim-conflict) |
| **La eSIM del Apple Watch no conecta** | Problema de emparejamiento del reloj o del operador | Media | [Sección 20](#apple-watch-esim-not-working) |


## Tabla de Referencia Rápida

| Síntoma | Causa más probable | Solución |
|---------|-------------------|-----|
| "No se puede activar" / "Activación fallida" | Wi-Fi inestable o error del servidor del operador | Red estable + reintentar, luego reinstalar (Sección 1) |
| "Sin Servicio" tras la instalación | Itinerancia desactivada / APN faltante | Activar itinerancia, revisar APN (Sección 2) |
| Código QR "Inválido" / "Expirado" | Código QR expirado o ya usado | Solicitar un código QR nuevo (Sección 3) |
| "eSIM ya en uso" | Perfil no liberado del dispositivo antiguo | Eliminar del dispositivo antiguo o liberación del operador (Sección 4) |
| "No se puede añadir el plan de datos móviles" | Demasiadas eSIM almacenadas | Eliminar eSIM sin usar (Sección 5) |
| Se requiere código de confirmación | El perfil tiene un código obligatorio | Buscar el código de 4–8 dígitos en el correo del operador (Sección 6) |
| "SIM no compatible" | Dispositivo bloqueado por el operador | Liberar el dispositivo o contactar al operador (Sección 7) |
| Sin datos tras la activación | APN no configurado | Introducir el APN manualmente (Sección 8) |
| Atascado en "Activando" | Descarga del perfil detenida | Alternar Modo Avión, reinstalar (Sección 9) |
| Una línea dual SIM "Sin Servicio" | Conflicto de enrutamiento de llamadas/datos | Revisar el enrutamiento de líneas e interruptores (Sección 10) |
| Transferencia de eSIM fallida | El operador no admite la transferencia | Usar el código QR del operador como alternativa (Sección 11) |
| Error de restauración 4013 / 4014 | Hardware/firmware durante la restauración | Cambiar de cable, actualizar el equipo (Sección 12) |
| "Perfil expirado" | Código QR con tiempo limitado | Solicitar un código QR nuevo (Sección 13) |
| La itinerancia de datos no funciona | Itinerancia desactivada para la línea eSIM | Activar la Itinerancia de datos (Sección 14) |
| eSIM eliminada por error | Perfil eliminado localmente | Contactar al operador / comprar un plan nuevo (Sección 15) |
| MDM bloquea los cambios de eSIM | Restricción empresarial | Contactar a tu administrador de TI (Sección 16) |
| La eSIM desapareció tras reiniciar | Fallo de software de iOS/Android | Revisar ajustes, volver a añadir el perfil (Sección 17) |
| Wi-Fi Calling funciona pero los datos no | Conflicto de enrutamiento | Desactivar Wi-Fi Calling temporalmente (Sección 18) |
| SIM física insertada, la eSIM deja de funcionar | Conflicto de bandeja/lector | Retirar la SIM física, reiniciar (Sección 19) |
| La eSIM del Apple Watch no conecta | Problema de emparejamiento o del operador | Volver a emparejar el reloj, contactar al operador (Sección 20) |


## Activación de eSIM Fallida o No se Puede Activar

**Causa:** Casi siempre es una conexión Wi-Fi inestable o un error temporal del servidor del operador (SM-DP+), no un problema de tu teléfono. El SM-DP+ (Subscription Manager - Data Preparation Plus) es el servidor seguro que entrega tu perfil eSIM a tu dispositivo — si no es accesible, la activación falla.

**Solución:**
1. Muévete a una conexión Wi-Fi estable o de datos móviles.
2. Activa y desactiva el Modo Avión para actualizar la banda base.
3. Si el error se repite, elimina la eSIM pendiente en `Ajustes > Datos móviles`, reinicia y escanea el código QR de nuevo.

**Específico de iOS 18:** En iOS 18 el mensaje puede decir "No se pudo completar la activación" con un botón de Reintentar. Pulsa Reintentar primero — el flujo de activación mejorado de iOS 18 a menudo resuelve el problema sin una reinstalación completa.

---

## eSIM Sin Servicio Tras la Instalación

**Causa:** El perfil se instaló pero el teléfono no se ha registrado en una red local — normalmente porque la Itinerancia de datos está desactivada o falta el APN.

**Solución:**
1. Activa la **Itinerancia de datos** para la línea eSIM.
2. En `Ajustes > Datos móviles > [tu eSIM] > Selección de red`, desactiva "Automático", selecciona manualmente un operador, espera a que falle, y luego vuelve a "Automático" para forzar el re-registro.
3. Si aún no hay datos, revisa el APN (Sección 8).

---

## Código QR de eSIM Inválido o Expirado

**Causa:** Los códigos QR de eSIM son de un solo uso y con tiempo limitado. El código ya se usó o ha expirado.

**Solución:** Contacta a tu proveedor de eSIM y pídele que emita un código QR nuevo, luego escanéalo de inmediato.

**Si estás escaneando desde la pantalla de tu teléfono:** Guarda primero la imagen del código QR en Fotos, luego en Ajustes > Datos móviles > Añadir eSIM, elige "Usar código QR" y pulsa "Elegir foto" para seleccionar la imagen guardada. Esto evita el problema de "no poder escanear tu propia pantalla".

---

## eSIM Ya en Uso o Vinculada a Otro Dispositivo

**Causa:** El perfil nunca fue liberado del dispositivo antiguo, así que el operador todavía lo asocia con ese teléfono.

**Solución:**
1. En el dispositivo antiguo, elimina la eSIM en `Ajustes > Datos móviles`.
2. Espera unos cinco minutos e inténtalo de nuevo en el dispositivo nuevo.
3. Si el dispositivo antiguo se perdió o se rompió, contacta a tu operador y pídele que libere forzosamente el perfil desde su lado.

---

## No se Puede Añadir el Plan de Datos Móviles de la eSIM

**Causa:** El teléfono alcanzó su límite de perfiles eSIM almacenados (típicamente 8–10, según el modelo), o el dispositivo es un modelo de China continental sin hardware eSIM.

**Solución:** Elimina las eSIM sin usar en `Ajustes > Datos móviles` y luego añade la nueva. Si tu dispositivo fue comprado en China continental, usa dos ranuras de SIM física y no puede añadir una eSIM — para saber cómo identificar un modelo de China o Hong Kong y confirmar que tu teléfono tiene el hardware, consulta nuestra [guía de verificación de hardware y errores](/faq/esim-activation-errors-troubleshooting-guide/).

---

## Se Requiere Código de Confirmación de eSIM

**Causa:** Algunos perfiles eSIM tienen un código de confirmación obligatorio que se requiere antes de descargar el perfil. Es un PIN de 4-8 dígitos que verifica tu identidad.

**Solución:** Busca un código de 4–8 dígitos en el correo que tu operador envió junto con el código QR. Si no puedes encontrarlo, contacta al operador.

**Lugares habituales donde encontrar el código de confirmación:**
- En la línea de asunto del correo de activación
- Cerca del final del correo, bajo "Detalles de activación"
- En la app del operador, en "Mis planes" > "Detalles"

---

## SIM de eSIM No Compatible en un Dispositivo Bloqueado por el Operador

**Causa:** El teléfono está bloqueado a otro operador y no puede aceptar un perfil de un proveedor diferente.

**Solución:** Revisa `Ajustes > General > Información > Bloqueo de operador`. Si no dice "Sin restricciones de SIM", contacta a tu operador de origen para solicitar la liberación. Para un recorrido completo sobre bloqueos de operador — cómo verificar el estado, las políticas de liberación de los operadores de EE. UU. y cómo conseguir que liberen el dispositivo — consulta nuestra [guía de hardware y bloqueo de operador](/faq/esim-activation-errors-troubleshooting-guide/).

---

## eSIM Sin Conexión de Datos Tras la Activación

**Causa:** El Nombre del Punto de Acceso (APN) no se configuró automáticamente, así que el teléfono no tiene ruta a la red de datos.

**Solución:**
1. Ve a `Ajustes > Datos móviles > Red de datos móviles`.
2. Introduce el valor APN del sitio web de tu proveedor de eSIM (por ejemplo, `globaldata` para Airalo).
3. La mayoría de las eSIM de viaje configuran el APN automáticamente, así que confirma el valor correcto con tu proveedor.

**Valores APN habituales por proveedor (si la configuración automática falla):**

| Proveedor | APN | Usuario | Contraseña |
|----------|-----|----------|----------|
| Roami | internet | (vacío) | (vacío) |
| Airalo | globaldata | (vacío) | (vacío) |
| Holafly | hola | (vacío) | (vacío) |
| Nomad | nbdata | (vacío) | (vacío) |
| Ubigi | ubigi | (vacío) | (vacío) |
| Google Fi | h2g2 | (vacío) | (vacío) |
| T-Mobile (EE. UU.) | fast.t-mobile.com | (vacío) | (vacío) |
| AT&T (EE. UU.) | nxgen | (vacío) | (vacío) |
| Verizon (EE. UU.) | vzwinternet | (vacío) | (vacío) |
| EE (Reino Unido) | everywhere | (vacío) | (vacío) |
| O2 (Reino Unido) | mobile.o2.co.uk | web | web |
| Vodafone (Reino Unido) | internet | (vacío) | (vacío) |
| Three (Reino Unido) | three.co.uk | (vacío) | (vacío) |

---

## eSIM Atascada en Activando

**Causa:** La descarga del perfil se detuvo, a menudo por una señal débil o un servidor de activación ocupado.

**Solución:**
1. Asegúrate de estar en una red estable.
2. Activa y desactiva el Modo Avión.
3. Si sigue atascada por más de 10 minutos, elimina la eSIM y reinstálala desde el código QR.

---

## eSIM Dual con Una Línea Mostrando Sin Servicio

**Causa:** Con dos eSIM activas, el enrutamiento de llamadas entrantes y de datos puede entrar en conflicto, dejando una línea sin servicio. Este es un **problema de señal de eSIM dual** habitual que afecta a los usuarios con dos líneas activas.

**Solución:**
1. En `Ajustes > Datos móviles`, confirma qué línea está configurada para **Datos móviles** y cuál para **Línea de voz predeterminada**.
2. Desactiva y vuelve a activar cada línea.
3. Para una solución más profunda, consulta nuestra guía **[¿La eSIM dual no funciona? 12 soluciones para iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## Transferencia de eSIM Fallida

**Causa:** No existe una transferencia multiplataforma de eSIM integrada, y tu operador puede no admitir la transferencia por app.

**Solución:** Pide a tu operador que reemplace la eSIM con un código QR nuevo y escanéalo en el dispositivo nuevo. Después de la transferencia, WhatsApp, iMessage y los códigos de verificación por SMS siguen funcionando porque tu número no ha cambiado. Para instrucciones completas paso a paso, consulta nuestra **[guía de transferencia de eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## Error de Restauración 4013 o 4014 con eSIM en iPhone

**Causa:** Estos errores indican un problema de hardware o firmware durante una restauración de software, no un problema de eSIM. A menudo son causados por un cable USB defectuoso o un software de computadora desactualizado.

**Solución:** Prueba con otro cable y puerto USB, actualiza el sistema operativo de tu computadora y vuelve a intentar la restauración. Contacta al Soporte de Apple si el error persiste.

---

## Perfil eSIM Expirado

**Causa:** El código QR o el código de activación de la eSIM tenía tiempo limitado y ha expirado.

**Solución:** Contacta a tu proveedor de eSIM y pide un código QR nuevo, luego actívalo con prontitud.

---

## La Itinerancia de Datos de la eSIM No Funciona

**Causa:** La Itinerancia de datos está desactivada para la línea de la eSIM de viaje, así que no puede conectarse a la red local.

**Solución:** Ve a `Ajustes > Datos móviles > [tu eSIM]` y activa la **Itinerancia de datos**. Esto es necesario para que la mayoría de las eSIM de viaje funcionen en el extranjero.

---

## eSIM Eliminada por Error

**Causa:** Eliminar una eSIM quita el perfil del teléfono pero no cancela el plan.

**Solución:**
- Para las eSIM de operadores pospago, contacta al operador — normalmente pueden emitir el código QR de nuevo.
- Para las eSIM de viaje (Roami, Airalo y similares), la eliminación suele ser permanente, así que necesitarás comprar un plan nuevo.
- Guarda siempre una copia de tu correo de activación original y del código QR.

---

## MDM o Restricciones Empresariales Bloquean la eSIM

**Causa:** En un dispositivo administrado (de trabajo), una política de Gestión de Dispositivos Móviles como `AllowESIMModification` puede bloquear la adición o eliminación de eSIM.

**Solución:** Contacta a tu administrador de TI para habilitar los cambios de eSIM, o usa un dispositivo no administrado.

---

## La eSIM Desapareció Tras Reiniciar

**Síntoma:** Reiniciaste tu teléfono y la eSIM ya no aparece en Ajustes > Datos móviles. Desapareció.

**Causa:** Un fallo de software en iOS o Android puede a veces hacer que los perfiles eSIM queden ocultos o ilegibles después de un reinicio, especialmente tras una actualización del sistema. El perfil sigue en el dispositivo, pero el sistema no logró montarlo.

**Solución:**
1. **iPhone:** Ve a Ajustes > General > Información y desplázate hasta "SIM disponible" o "SIM digital". Si la eSIM aparece ahí pero no en Datos móviles, reinicia el teléfono de nuevo.
2. **iPhone:** Si reiniciar no funciona, ve a Ajustes > Datos móviles > Añadir eSIM. A veces el teléfono detectará el perfil existente y ofrecerá volver a añadirlo sin un código QR nuevo.
3. **Android (Samsung):** Ve a Ajustes > Conexiones > Gestor de SIM. La eSIM puede aparecer como "Inactiva". Tócala y actívala.
4. **Android (Pixel):** Ve a Ajustes > Red e Internet > SIM. Si falta la eSIM, pulsa "Añadir operador" — el teléfono puede detectar el perfil existente.
5. Si nada de esto funciona, contacta a tu operador y solicita un código QR nuevo. El perfil antiguo puede estar dañado.

**Prevención:** Antes de reiniciar, asegúrate de que todas las líneas eSIM estén desactivadas, luego reinicia, y después actívalas de nuevo. Esto reduce la probabilidad de que el sistema pierda el rastro del perfil.

---

## Wi-Fi Calling Funciona pero los Datos de la eSIM No

**Síntoma:** Tienes Wi-Fi Calling activo en tu línea de casa, pero tu eSIM de viaje no tiene conexión de datos. O bien, la eSIM funciona en Wi-Fi pero no en datos móviles.

**Causa:** Un conflicto de enrutamiento entre Wi-Fi Calling y los datos móviles. Cuando Wi-Fi Calling está activo, el teléfono puede priorizar la red Wi-Fi para todas las comunicaciones, incluidos los datos, y no logra enrutar correctamente los datos móviles a través de la eSIM.

**Solución:**
1. Desactiva temporalmente Wi-Fi Calling en tu línea de casa: Ajustes > Datos móviles > [línea de casa] > Wi-Fi Calling > desactivar.
2. Activa y desactiva el Modo Avión para forzar al teléfono a re-registrarse en la red móvil.
3. Prueba la conexión de datos de la eSIM. Si funciona, puedes volver a activar Wi-Fi Calling — el enrutamiento ahora debería ser correcto.
4. Si el problema se repite, comprueba que tu línea de casa tenga la **Itinerancia de datos desactivada** y que la eSIM de viaje la tenga **activada**.

**Alternativa:** En iPhone, ve a Ajustes > Datos móviles > Datos móviles y asegúrate de que la eSIM de viaje esté seleccionada. Luego habilita "Permitir cambio de datos móviles" — esto permite al teléfono usar la eSIM de viaje para los datos de Wi-Fi Calling incluso si la línea de casa es la línea de voz.

---

## Conflicto entre eSIM y SIM Física

**Síntoma:** Insertas una tarjeta SIM física en tu teléfono, y tu eSIM que funcionaba de repente muestra "Sin Servicio" o desaparece por completo de Ajustes.

**Causa:** Este es un comportamiento conocido en dispositivos bloqueados por el operador. Cuando un iPhone bloqueado detecta una SIM física de un operador diferente, puede deshabilitar la ranura eSIM para evitar un uso no autorizado. En algunos dispositivos Android, insertar una SIM física también puede hacer que el sistema priorice la SIM física sobre la eSIM para todas las funciones. ¿Nuevo en mezclar ambos formatos? La [comparación de eSIM vs SIM física](/faq/what-is-esim/) explica cómo coexisten.

**Solución:**
1. Retira la tarjeta SIM física de la bandeja.
2. Reinicia tu teléfono.
3. La eSIM debería reaparecer en Ajustes > Datos móviles (iPhone) o Ajustes > Conexiones > Gestor de SIM (Android).
4. Si la eSIM reaparece pero sigue mostrando "Sin Servicio", activa la Itinerancia de datos para la línea eSIM.
5. Si necesitas que la SIM física y la eSIM funcionen simultáneamente, contacta a tu operador para liberar tu dispositivo.

> **Alternativa:** Algunos usuarios informan que alternar la línea eSIM apagada y encendida (sin retirar la SIM física) resuelve el conflicto. Prueba esto primero antes de retirar la SIM física.

---

## La eSIM del Apple Watch No Funciona

**Síntoma:** Configuraste los datos móviles en tu Apple Watch, pero muestra "Sin Servicio" o "Buscando" — o el plan eSIM no aparece en absoluto en la app Watch.

**Causa:** La activación de la eSIM del Apple Watch requiere que el operador admita el tipo de plan específico del reloj, y la configuración requiere que tu iPhone esté cerca con una conexión a internet estable.

**Solución:** Comprueba que tu operador admita la eSIM del Apple Watch, luego desempareja y vuelve a emparejar el reloj, manteniendo tu iPhone cerca durante todo el proceso. Si aún no se activa, contacta a tu operador con el **EID** y el **IMEI** del reloj para que puedan aprovisionarlo manualmente. Para un recorrido completo — incluidos qué modelos de iPad y Apple Watch admiten eSIM — consulta nuestra [guía de eSIM de iPad y Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

---

## Referencia de Códigos de Error de eSIM

| Código de Error | Plataforma | Significado | Solución |
|------------|----------|---------|-----|
| **4013** | iPhone (restauración) | Fallo de hardware/firmware durante la restauración | Cambiar cable, puerto USB, actualizar macOS/iTunes |
| **4014** | iPhone (restauración) | Similar al 4013; suele ser un problema de comunicación USB | Igual que arriba |
| **-8** | Android (activación) | Tiempo de espera de red agotado | Esperar y reintentar, o cambiar de Wi-Fi |
| **-100** | Android (escaneo QR) | Formato de código QR no admitido | Usar entrada manual |
| **0xE8000001** | iPhone (activación) | Servidor del operador inaccesible | Reintentar tras 5 minutos o usar entrada manual |
| **"Configuración eSIM no admitida"** | Android (Samsung) | El operador no admite eSIM en ese modelo | Consultar con el operador |
| **"Dirección SM-DP+ inválida"** | Ambos | La dirección de entrada manual es incorrecta | Verificar la dirección de tu proveedor |
| **"Error LPA -1"** | Android | Error genérico del LPA (Local Profile Assistant) | Reiniciar el teléfono, reintentar. Si persiste, usar otra app de eSIM. |
| **"EID no coincide"** | Ambos | El perfil está vinculado a otro dispositivo | Contactar al operador para liberar el perfil (Sección 4) |
| **"Sin EID" al marcar `*#06#`** | Ambos | El dispositivo no admite eSIM | Tu teléfono carece de hardware eSIM — consulta nuestra [guía de verificación de hardware](/faq/esim-activation-errors-troubleshooting-guide/) |
| **"Gestión de eSIM no disponible"** | Android (OnePlus) | Error de Oxygen OS | Actualizar a la última versión de Oxygen OS |
| **"No se puede eliminar el perfil"** | iPhone | eSIM atascada en estado pendiente | Reiniciar el iPhone y volver a intentar eliminarla. Si sigue atascada, contactar al operador. |
| **-1** | Ambos | Fallo genérico de activación | Reiniciar el teléfono, asegurar conectividad de red, reintentar |
| **-2** | Android | Código de activación inválido | Volver a introducir el código o solicitar uno nuevo al operador |


## Errores Que Rompen Tu eSIM

Estos son los errores de usuario más comunes que convierten una eSIM funcional en un ladrillo. Evítalos a toda costa — la mayoría se remonta a cómo funciona realmente la activación, lo cual cubre paso a paso el [explicador de activación de eSIM](/faq/what-is-esim-activation-and-how-does-it-work/).

| Error | Qué Pasa | Cómo Evitarlo |
|---------|--------------|--------------|
| **Eliminar la eSIM para "arreglar" un problema de conexión** | El perfil se elimina permanentemente — pierdes todos los datos restantes y debes comprar un plan nuevo | Nunca pulses "Eliminar eSIM" a menos que el plan haya expirado por completo. Eliminar no "refresca" — destruye. |
| **Escanear el código QR con la app Cámara** | La cámara reconoce el código pero no hace nada — no se instala ningún perfil | Abre siempre primero Ajustes > Datos móviles > Añadir eSIM — nunca uses la app Cámara independiente. |
| **Instalar en el aeropuerto con Wi-Fi débil** | La descarga se corta a mitad de la instalación, corrompiendo el perfil | Instala en casa con tu propio Wi-Fi estable antes de salir. |
| **Esperar hasta aterrizar para instalar** | Llegas sin Wi-Fi y no puedes descargar el perfil | Instala el perfil antes de partir (permanece inactivo hasta que actives la Itinerancia de datos). |
| **Olvidar activar la Itinerancia de datos para la eSIM** | Barras de señal completas pero cero internet | Tras aterrizar, ve a Ajustes > Datos móviles > [tu eSIM] y activa la Itinerancia de datos. |
| **Restablecer los ajustes de red pensando que "refrescará" la eSIM** | El restablecimiento de red no elimina las eSIM, pero borra las contraseñas Wi-Fi y los emparejamientos Bluetooth — pierdes todas las redes guardadas | Restablece los ajustes de red solo como último recurso, y sabe que no arreglará problemas de activación de eSIM. |
| **Apagar la línea eSIM en lugar de solo desactivar la Itinerancia de datos** | La eSIM se deshabilita por completo y no se registrará cuando la reactives | Desactiva la Itinerancia de datos, no la línea entera. Mantén la línea activada pero la itinerancia desactivada cuando no esté en uso. |


## Varios Problemas de eSIM a la Vez

A veces no tienes solo un problema — tienes dos o tres a la vez. Así se diagnostican los síntomas combinados:

| Combinación de Síntomas | Lo Que Está Pasando Realmente | Orden de Solución |
|---------------------|---------------------------|-----------|
| **El código QR escanea pero luego "Activación fallida"** | El código QR es válido, pero el servidor de descarga es inaccesible | Arregla primero la red (Sección 1), luego vuelve a escanear |
| **La eSIM muestra barras de señal pero sin datos Y "Sin Servicio" en la línea de casa** | Falta el APN Y tienes un conflicto de enrutamiento dual SIM | Arregla primero el APN (Sección 8), luego el enrutamiento dual SIM (Sección 10) |
| **La transferencia funcionó pero el teléfono nuevo tiene "Sin Servicio"** | El perfil se transfirió pero no se registró en la red nueva | Elimina la eSIM del teléfono antiguo, luego reinicia el teléfono nuevo (Sección 4 + Sección 2) |
| **Wi-Fi Calling funciona pero la eSIM no tiene datos Y la línea de casa tiene cargos de itinerancia** | Múltiples conflictos de enrutamiento más Itinerancia de datos dejada activada en la línea de casa | Desactiva la Itinerancia de datos de la línea de casa, arregla el conflicto de Wi-Fi Calling (Sección 18), luego revisa el APN |
| **La eSIM desapareció tras reiniciar Y "No se puede añadir el plan de datos móviles"** | El perfil está dañado Y el almacenamiento está lleno | Elimina primero las eSIM sin usar (Sección 5), luego intenta añadirla de nuevo (Sección 17) |

**Regla general:** Arregla primero **los problemas de red** (Wi-Fi, Itinerancia de datos, APN), luego **los problemas de perfil** (código QR, activación), y luego **los problemas específicos del dispositivo** (bloqueo de operador, MDM). No intentes arreglar todo a la vez — trabaja los síntomas uno a uno.


## Dónde Encontrar Añadir eSIM en Cada Teléfono

La solución para la mayoría de los errores es la misma, pero la ruta del menú para llegar a los controles de la eSIM varía según la marca. Aquí están las rutas exactas más las peculiaridades de error que solo aparecen en dispositivos específicos. (Para los métodos de instalación completos detrás de estos menús, la [guía general de activación](/faq/how-to-activate-an-esim/) tiene cada paso.)

### Ruta del Menú eSIM en iPhone
- **"Añadir eSIM" en gris** – tu iPhone puede estar bloqueado por el operador. Revisa Ajustes > General > Información > Bloqueo de operador; para la solución completa del bloqueo de operador, consulta nuestra [guía de bloqueo de operador y hardware](/faq/esim-activation-errors-troubleshooting-guide/).
- **La Transferencia rápida falla** – asegúrate de que ambos teléfonos estén con la misma cuenta Apple, con Bluetooth activado y a menos de 10 cm de distancia.
- **Tras una actualización de iOS, la eSIM muestra "Sin Servicio"** – ve a Ajustes > Datos móviles > pulsa la eSIM > desactiva y vuelve a activar "Activar esta línea". También comprueba que la Itinerancia de datos siga activada.
- **La eSIM desapareció tras una actualización de iOS** – consulta la Sección 17. Esto es más común en iOS que en Android tras actualizaciones importantes.
- **Específico de iOS 18:** El flujo de "Añadir eSIM" fue rediseñado con una opción de entrada manual más prominente. Si estás en iOS 18 y el código QR no escanea, el botón de entrada manual ahora es más fácil de encontrar en la parte inferior de la pantalla.

### Ruta del Menú eSIM en Samsung Galaxy
- **La ruta del menú varía según la versión de One UI:**
  - **One UI 5 (Android 13):** Ajustes > Conexiones > Gestor de SIM > Añadir eSIM
  - **One UI 6/6.1 (Android 14):** Ajustes > Conexiones > Gestor de SIM > Añadir eSIM (misma ruta)
  - **One UI 7 (Android 15):** Ajustes > Conexiones > Gestor de SIM > Añadir plan móvil
- **El escaneo del código QR falla** – prueba la entrada manual (pulsa "Introducir código de activación manualmente"). Samsung a menudo requiere la dirección SM-DP+ y el código de activación por separado.
- **Conflicto de doble SIM** – si tienes una SIM física y una eSIM, comprueba que la eSIM esté configurada como la SIM de datos en el Gestor de SIM.

### Ruta del Menú eSIM en Google Pixel
- **"¿Descargar una SIM en su lugar?"** – esta opción aparece en la parte inferior de la pantalla de ajustes de SIM. Si no la ves, tu Pixel puede estar bloqueado por el operador.
- **La eSIM no aparece tras el escaneo** – reinicia el teléfono. El Pixel a veces necesita un reinicio después de la descarga del perfil.
- **Los ajustes APN no se guardan** – en el Pixel, los ajustes APN están en Red e Internet > SIM > [tu eSIM] > Nombres de puntos de acceso. Si no se guardan:
  1. Añade un APN nuevo con un **nombre diferente** (p. ej., "Airalo 2" en lugar de "Airalo").
  2. Guárdalo y luego selecciónalo manualmente.
  3. Activa y desactiva el Modo Avión para forzar que el nuevo APN surta efecto.
- **La eSIM desaparece tras reiniciar en el Pixel** – consulta la Sección 17. Los usuarios de Pixel reportan esto con más frecuencia que los de Samsung.

### Ruta del Menú eSIM en OnePlus
- **Ruta del menú:** Ajustes > Wi-Fi y red > SIM y red > Añadir eSIM
- **Problema habitual:** los dispositivos OnePlus a veces muestran "eSIM no disponible" tras una actualización de Oxygen OS. Solución: ve a Ajustes > Sistema > Actualización del sistema e instala el último parche.
- **Ajustes APN:** Ubicados en Ajustes > Wi-Fi y red > SIM y red > [eSIM] > Nombres de puntos de acceso.

### Ruta del Menú eSIM en Xiaomi
- **Ruta del menú:** Ajustes > Tarjetas SIM y redes móviles > Añadir eSIM
- **Ajustes APN:** Ubicados en Ajustes > Tarjetas SIM y redes móviles > [eSIM] > Nombres de puntos de acceso.

### Ruta del Menú eSIM en Oppo y Realme
- **Ruta del menú:** Ajustes > Red móvil > Añadir eSIM

**¿No estás seguro de si tu modelo exacto tiene hardware eSIM en absoluto** (Xiaomi del mercado chino, Huawei, serie A de Samsung deshabilitada por el operador)? Esa es una pregunta de compatibilidad — consulta nuestra [guía de hardware y soporte por modelo](/faq/esim-activation-errors-troubleshooting-guide/), que cubre el soporte modelo por modelo.


## La eSIM Funciona en Casa pero No en el Extranjero

**Síntoma:** Instalaste la eSIM en casa, muestra barras de señal, pero cuando aterrizas en tu destino, no hay servicio. Las peculiaridades específicas de cada destino — redes asociadas, bloqueos regionales, listas de verificación de llegada — se recogen en nuestra [guía de eSIM de viaje](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).

**Causa raíz:** El perfil eSIM se activó mientras estabas en tu red de origen y no se ha registrado en la red de destino.

**Solución:**
1. Desactiva la línea eSIM (`Ajustes > Datos móviles > desactivar`).
2. Espera 10 segundos y vuelve a activarla.
3. Ve a Selección de red, desactiva "Automático", selecciona manualmente una red con la que tu proveedor tenga acuerdo (pide a tu proveedor la lista de redes asociadas).
4. Si falla, desactiva y vuelve a activar la Itinerancia de datos.
5. Reinicia el teléfono.

Si esto sigue sin funcionar, contacta a tu proveedor — puede que tu plan eSIM en realidad no incluya el país en el que estás, o que haya un problema con el acuerdo de itinerancia.


## La eSIM Funciona con un Operador pero No con Otro

**Síntoma:** Tienes una eSIM que funciona bien, pero cuando intentas añadir una segunda eSIM de otro operador, falla o muestra "Sin Servicio".

**Causa raíz:** Algunos modelos de teléfonos (especialmente los antiguos) tienen limitaciones sobre qué perfiles de operadores pueden coexistir. Esto es más común en dispositivos Android con firmware de módem antiguo.

**Solución:**
1. Comprueba que tu teléfono admita eSIM dual (iPhone 13 y posteriores, Pixel 7 y posteriores, Samsung S23 y posteriores).
2. Si tienes una SIM física insertada, prueba a retirarla — algunos teléfonos limitan el número de perfiles activos cuando hay una SIM física presente.
3. Actualiza el firmware de tu teléfono (las actualizaciones de ajustes del operador a menudo arreglan esto).
4. Contacta al segundo operador y pregunta si su perfil eSIM admite la coexistencia dual SIM.


## Cuándo Contactar a Tu Proveedor de eSIM vs. Al Fabricante de Tu Teléfono

| Problema | Contactar a |
|---------|---------|
| Código QR expirado / inválido | Proveedor de eSIM |
| "Activación fallida" repetidamente | Proveedor de eSIM |
| Sin datos tras configurar el APN | Proveedor de eSIM |
| El dispositivo muestra "Sin Servicio" tras aterrizar | Proveedor de eSIM (revisar acuerdo de itinerancia) |
| La eSIM no aparece en los ajustes | Fabricante del teléfono (si es un error de software) o problema de bloqueo de operador |
| Problemas de hardware (cámara, pantalla, batería) | Fabricante del teléfono |
| Bloqueo / liberación de operador | Tu operador de origen |
| Restricción MDM | Tu departamento de TI |
| La eSIM desapareció tras reiniciar | Ambos — prueba las soluciones de la Sección 17, luego contacta al proveedor |
| "eSIM ya en uso" | Proveedor de eSIM (para forzar la liberación del perfil) |
| La eSIM del Apple Watch no conecta | Operador (para el aprovisionamiento) o Soporte de Apple (para problemas de emparejamiento) |


## Preguntas Frecuentes

**P1: ¿Eliminar una eSIM cancela mi plan?**
No. Eliminar la eSIM solo quita el perfil del teléfono. Debes contactar al operador por separado para cancelar el plan.

**P2: ¿Puedo recuperar una eSIM eliminada?**
Para las eSIM de operadores pospago, sí — el operador puede reemplazar el perfil. Para las eSIM de viaje, la eliminación suele ser permanente y requiere una compra nueva.

**P3: ¿Por qué mi eSIM funciona en Wi-Fi pero no en datos móviles?**
Esto casi siempre es un problema de APN o de Itinerancia de datos. Sigue la Sección 8 y la Sección 14.

**P4: ¿Una eSIM agota mi batería más rápido?**
No. Tener dos líneas activas a la vez puede consumir ligeramente más energía, pero una sola eSIM no agota la batería.

**P5: ¿Cuántas eSIM puedo almacenar en mi teléfono?**
Típicamente 8–10 perfiles en iPhone y la mayoría de los dispositivos Android. Puedes almacenar muchos más pero solo tener dos activos a la vez (doble SIM).

**P6: ¿Por qué mi eSIM pierde señal constantemente?**
Puede deberse a congestión de red, cobertura débil o un fallo de software. Prueba a alternar el Modo Avión, reiniciar o seleccionar manualmente una red.

**P7: Veo "Se requiere activación" en mi eSIM tras un reinicio – ¿qué significa?**
El teléfono perdió la conexión con el servidor de activación del operador. Reinicia el teléfono y asegúrate de tener conexión de red. Si persiste, elimina y reinstala la eSIM.

**P8: ¿Qué pasa si mi operador dice que no admite eSIM?**
Aún puedes usar proveedores de eSIM de viaje como Roami, Airalo u Holafly — funcionan de forma independiente de tu operador de origen y no requieren soporte del operador.

**P9: Mi eSIM se transfirió a mi iPhone nuevo pero no puedo hacer llamadas – solo los datos funcionan.**
Comprueba que la eSIM esté configurada como Línea de voz predeterminada. También asegúrate de que tu operador admita VoLTE para esa línea.

**P10: El escaneo del código QR funciona pero la descarga tarda una eternidad – ¿es normal?**
No. Debería tomar 1–2 minutos. Si tarda más, tu Wi-Fi es demasiado lento. Cambia de red o usa la entrada manual.

**P11: Mi eSIM está activa pero no puedo enviar ni recibir SMS.**
Algunas eSIM de viaje son solo de datos y no admiten SMS. Si necesitas SMS, compra un plan que incluya explícitamente un número de teléfono.

**P12: Restablecí accidentalmente mis ajustes de red – ahora mi eSIM desapareció.**
El restablecimiento de ajustes de red no elimina los perfiles eSIM. Tu eSIM debería seguir ahí. Ve a Ajustes > Datos móviles y reactiva la línea. Si desapareció, puede que la hayas eliminado por accidente — en ese caso consulta la Sección 15.

**P13: ¿Cuál es la diferencia entre eliminar una eSIM y apagarla?**
Apagar una eSIM mantiene el perfil en el teléfono pero deshabilita la línea. Puedes volver a activarla en cualquier momento. Eliminar una eSIM quita el perfil permanentemente — no puedes recuperarla sin un código QR nuevo. Elimina solo cuando el plan haya expirado por completo.

**P14: ¿Una VPN puede interferir con la activación de la eSIM?**
Sí — las VPN pueden interferir con la conexión al servidor de activación. Desactiva tu VPN antes de activar una eSIM.

**P15: Mi plan eSIM dice "ilimitado" pero no tengo datos tras usar 5GB.**
Muchos planes "ilimitados" tienen una Política de Uso Justo (FUP) que reduce la velocidad después de cierto umbral de datos. Revisa los términos de tu proveedor — puede que necesites comprar un plan de recarga para más datos de alta velocidad.

👉 **¿Ya solucionaste el problema?** Elige un [plan eSIM de EE. UU.](/united-states-esim/) o un [plan eSIM de Europa](/europe-esim/) para volver a estar en línea.

---

## Fuentes

- [GSMA — especificación eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Soporte — Configurar eSIM en iPhone](https://support.apple.com/en-us/HT212780)
- [Google Soporte — Configurar una eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Soporte — eSIM de Android](https://support.google.com/android/answer/11241215)
