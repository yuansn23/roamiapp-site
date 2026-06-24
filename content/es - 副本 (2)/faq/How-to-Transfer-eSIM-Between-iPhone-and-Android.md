---
title: "Transferir eSIM entre iPhone y Android: guía paso a paso"
h1_title: "Cómo transferir tu eSIM al cambiar de iPhone a Android"
description: "Cambia de móvil sin perder tu eSIM. Roami te explica cómo transferir tu eSIM entre iPhone y Android paso a paso. Sin llamadas al operador, sin complicaciones."
date: 2026-06-22T10:00:00Z
lastmod: 2026-06-22T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Solución de problemas", "Configuración de viaje"]
toc: true

# Configuración fija del sitio y SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Traducción/Configuración fija de textos UI (soporte multilingüe)
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

# Barra lateral: eSIM populares (6 países, $1.99) - configuración original sin cambios
sidebar_popular:
  title: "eSIM populares"
  item_suffix: "eSIM"
  items:
    - name: "Estados Unidos"
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

# Barra lateral: eSIM gratis (4 países) - configuración original sin cambios
sidebar_free:
  title: "Consigue eSIM gratis"
  icon: "🎁"
  item_suffix: "eSIM gratis"
  item_subtitle: "eSIM gratis"
  items:
    - name: "Reino Unido"
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

# Barra lateral: preguntas frecuentes (5 preguntas) - configuración original sin cambios
sidebar_questions:
  title: "Preguntas populares"
  items:
    - question: "¿Qué es la activación eSIM y cómo funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "¿Cómo activar una eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "¿Cómo activar eSIM en iPhone (todos los modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista actualizada de compatibilidad eSIM"
      url: "/compatibility/"
---


> Durante años, las transferencias de eSIM estuvieron bloqueadas dentro del mismo ecosistema: podías mover de iPhone a iPhone, o entre algunos Android, pero cruzar la barrera iOS‑Android requería una visita a tu operador. **iOS 26 y Android 16 cambian eso por completo.** Esta guía te explica cada método compatible, los requisitos del operador y todos los pasos para solucionar problemas y **transferir tu eSIM** sin contratiempos. Si buscas ayuda general de activación, consulta nuestra **[Guía completa de eSIM para iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**.

---

## 📌 Resumen rápido

| Origen | Destino | SO mínimo | Método |
|--------|---------|-----------|--------|
| iPhone (iOS 26) | Android (16+) | iOS 26.3 / Android 16 | Código QR + emparejamiento manual |
| Android (16+) | iPhone (iOS 26) | iOS 26 / Android 16 | Escanear código QR (generado por iPhone) |
| iPhone (iOS 18–25) | Cualquiera | – | No compatible directamente – usa el código QR de tu operador |
| Android (15 o anterior) | Cualquiera | – | No compatible – actualiza el SO o contacta a tu operador |

Para saber si tu dispositivo es compatible, consulta nuestra [guía de compatibilidad eSIM](/compatibility/), que cubre todas las marcas como **Samsung Galaxy**, **Google Pixel**, **Motorola**, **OnePlus**, **Xiaomi** y **iPhone**.

**Operadores compatibles** (a abril de 2026):  
🇺🇸 AT&T, T‑Mobile, Verizon, FirstNet  
🇨🇦 Bell, Koodo, Lucky Mobile, Telus  
🇫🇷 Orange, SFR  
🇩🇪 Telekom  
🇯🇵 au, UQ  
🇲🇽 AT&T  
🇨🇭 Swisscom  
🇬🇧 EE  

*Si tu operador no está en la lista, la transferencia fallará. Usa el método del código QR que te proporcione tu operador.*

---

## 1. Por qué esto lo cambia todo

Antes de iOS 26, mover una eSIM de un Android a un iPhone significaba:
- Llamar a tu operador (a menudo esperando en la línea)
- Proporcionar el EID y el IMEI del nuevo dispositivo
- Esperar minutos u horas para recibir un nuevo código QR

Ahora, con la **transferencia nativa de eSIM entre plataformas**, el proceso es completamente autónomo y dura menos de 60 segundos.

### ¿Qué lo hace posible?
- **iOS 26** introdujo la función `Transferir desde Android` en Ajustes.
- **Android 16** añadió un menú recíproco `Emparejar con iPhone o iPad` dentro de Servicios de Google.
- Ambas versiones del SO implementan la **especificación de transferencia de eSIM para consumidores (SGP.22 v2.5+)** de la [GSMA](https://www.gsma.com/esim/), que permite la migración segura de perfiles entre pares.

La especificación SGP.22 define el aprovisionamiento remoto de perfiles eSIM, garantizando que la transferencia entre dispositivos de diferentes fabricantes sea segura y estandarizada. Tanto Apple como Google han adoptado este estándar para permitir la interoperabilidad entre ecosistemas.

> 🔒 Nota de seguridad: la transferencia está cifrada de extremo a extremo y requiere que ambos dispositivos estén cerca con Bluetooth activado. La eSIM antigua se desactiva automáticamente en el momento en que el nuevo dispositivo la activa.

---

## 2. Lo que necesitas antes de empezar

**Para ambas direcciones:**
- Ambos dispositivos deben estar **liberados** (sin bloqueo de operador). Para comprobarlo en iPhone: `Ajustes > General > Acerca de` → `Bloqueo de operador` debe decir "Sin restricciones de SIM".
- Ambos dispositivos tienen **Bluetooth activado**.
- Ambos dispositivos están conectados a **Wi‑Fi** (o al menos uno tiene datos móviles funcionando).
- La eSIM que quieres transferir está **activa** en el dispositivo de origen (no eliminada).
- Tu operador **admite la transferencia entre plataformas** (ver lista arriba). Si no, salta a la Sección 6 – métodos alternativos.

**Para Android → iPhone:**
- El iPhone debe tener **iOS 26 o posterior**.
- El Android debe tener **Android 16 o posterior** (compruébalo en `Ajustes > Acerca del teléfono > Información del software`).

**Para iPhone → Android:**
- El iPhone debe tener **iOS 26.3 o posterior** (la función de transferencia dirigida a Android llegó en 26.3).
- El Android debe tener **Android 16 o posterior**.

> 🚨 Si tu dispositivo tiene una versión anterior del SO, la opción de menú simplemente no aparecerá. Actualiza primero.

---

## 3. Método A: Transferir eSIM de Android a iPhone (iOS 26)

Este es el caso más común: cambiar de un **Samsung Galaxy**, **Google Pixel** u otro Android a un nuevo iPhone 17. Si estás buscando **cómo transferir eSIM** de Android a iPhone, este método es el más directo.

### Paso a paso

**En tu Android (dispositivo origen):**
1. Desbloquea el teléfono y activa Bluetooth.
2. Manténlo junto al iPhone (a menos de 10 cm).

**En tu iPhone (destino):**
1. Ve a `Ajustes` → `Datos móviles` → `Añadir eSIM`.
2. Pulsa `Transferir desde Android`. Aparecerá un código QR en la pantalla del iPhone.
   - *Si no ves esta opción, actualiza a iOS 26.*
3. En tu Android, abre la aplicación **cámara**.
4. Escanea el código QR que se muestra en el iPhone.
5. Aparecerá una notificación: "Transferencia eSIM detectada". Toca en ella.
6. Selecciona el número de teléfono (perfil eSIM) que quieres transferir.
7. Pulsa `Transferir`. El Android mostrará "Preparando transferencia…".
8. En el iPhone aparecerá una ventana emergente de confirmación: pulsa `Continuar`.
9. Espera entre 10 y 30 segundos. El iPhone dirá "Activación completa".
10. El Android mostrará "eSIM eliminada"; es normal.

✅ **Listo.** Tu número ya está activo en el iPhone. La eSIM del Android se desactiva automáticamente y no se puede volver a usar.

### ¿Qué pasa si el escaneo con la cámara no funciona?
Usa el método alternativo **manual**:

- En el iPhone, después de pulsar `Transferir desde Android`, elige `Otras opciones` debajo del código QR.
- El iPhone mostrará un **ID de sesión** y un **código de emparejamiento de 6 dígitos**.
- En el Android: `Ajustes` → `Servicios de Google` → `Todos los servicios` → `Emparejar con iPhone o iPad` → `Transferir eSIM`.
- Introduce el ID de sesión y el código de emparejamiento manualmente.
- Continúa con la transferencia.

---

## 4. Método B: Transferir eSIM de iPhone a Android (iOS 26.3+)

Apple añadió esta capacidad en **iOS 26.3** (lanzado a principios de 2026). El proceso es similar, pero se inicia desde el iPhone. Si necesitas **transferir eSIM de iPhone a Android**, este es el método que debes usar.

### Requisitos previos
- iPhone con **iOS 26.3 o posterior**
- Android con **Android 16 o posterior**
- Ambos dispositivos en la misma Wi‑Fi o con Bluetooth activado

### Pasos

**En tu iPhone (origen):**
1. Ve a `Ajustes` → `Datos móviles`.
2. Pulsa la eSIM que quieres transferir.
3. Desplázate hacia abajo y pulsa `Transferir a Android` (o `Transferir eSIM` dentro de una nueva sección "Transferir a Android" – el texto exacto varía según el operador).
   - *Si no ves esto, o tu operador no lo admite o necesitas iOS 26.3.*
4. Aparece un código QR. Mantén esta pantalla visible.

**En tu Android (destino):**
1. Ve a `Ajustes` → `Servicios de Google` → `Todos los servicios` → `Emparejar con iPhone o iPad`.
2. Pulsa `Transferir eSIM`.
3. Escanea el código QR que se muestra en el iPhone.
4. Selecciona el número (si hay varias eSIM en el iPhone).
5. Pulsa `Transferir`.
6. En el iPhone, haz doble clic en el botón lateral para confirmar la transferencia (se requiere autenticación biométrica).
7. Espera la activación en Android. El iPhone mostrará "eSIM eliminada" al finalizar.

✅ Listo. Tu número ahora reside en el Android.

> ⚠️ **Importante**: una vez completada la transferencia, la eSIM se **elimina permanentemente** del iPhone. No podrás revertirla sin la ayuda de tu operador. Asegúrate de tener otra línea activa o Wi‑Fi antes de transferir.

---

## 5. Operadores compatibles (tabla detallada – abril 2026)

| País | Operadores confirmados |
|------|------------------------|
| EE.UU. | AT&T, FirstNet, T‑Mobile, Verizon |
| Canadá | Bell, Koodo, Lucky Mobile, Telus |
| Francia | Orange, SFR |
| Alemania | Deutsche Telekom (Telekom) |
| Japón | au, UQ (UQ Mobile) |
| México | AT&T |
| Suiza | Swisscom |
| Reino Unido | EE |

**No compatibles (a abril de 2026):**
- Vodafone (cualquier país) – usan un sistema de transferencia propietario
- Three (Reino Unido y otros mercados)
- Google Fi (requiere reemitir código QR)
- La mayoría de eSIM prepago / MVNO (ej. Airalo, Holafly, Nomad) – son solo datos y no se pueden transferir; deberás comprar un nuevo plan en el nuevo dispositivo

👉 **¿Cómo saber si tu operador lo admite en iPhone?**  
Prueba los pasos de la Sección 3 o 4. Si la opción "Transferir desde Android" o "Transferir a Android" no aparece, tu operador no lo admite.

---

## 6. Métodos alternativos (cuando la transferencia entre plataformas no es compatible)

Si tu operador no está en la lista, o ves un error, usa una de estas alternativas. Esto es especialmente común con **eSIM prepago** o **eSIM de viaje** como Airalo, Holafly o Nomad, que no admiten transferencia.

### Opción 1: Código QR emitido por el operador (siempre funciona)
1. Llama o chatea con tu operador.
2. Diles: "Estoy cambiando de Android a iPhone (o viceversa). Por favor, reemitan mi eSIM como un nuevo código QR".
3. Te enviarán por correo un código QR o un enlace de activación.
4. En el nuevo dispositivo, ve a `Ajustes` → `Datos móviles` → `Añadir eSIM` → `Usar código QR` y escanéalo.
5. La eSIM del dispositivo antiguo dejará de funcionar cuando la nueva se active.

**Consejo**: Algunos operadores cobran una pequeña tarifa (ej. $2–$5) por reemitir una eSIM.

### Opción 2: Transferencia desde la app del operador
- **T‑Mobile (EE.UU.)**: Usa la app de T‑Mobile → "Gestionar eSIM" → "Transferir a nuevo dispositivo". Funciona entre plataformas incluso sin iOS 26.
- **Verizon**: App "My Verizon" → "Activar o cambiar dispositivo" → sigue las indicaciones. Funciona para Android ↔ iPhone.
- **EE UK**: App EE → "Plan" → "Transferencia eSIM" – admite entre SO, pero solo para planes de pospago.

### Opción 3: Entrada manual de SM‑DP+ (avanzado)
Si tu operador te da un **código de activación** y una **dirección SM‑DP+**, puedes añadir la eSIM manualmente en el nuevo dispositivo:
1. `Ajustes` → `Datos móviles` → `Añadir eSIM` → `Introducir detalles manualmente`.
2. Pega la dirección SM‑DP+ y el código de activación. Deja el código de confirmación en blanco a menos que se te proporcione.
3. Pulsa `Siguiente`. Esto funciona tanto en iPhone como en Android (en Android, ve a `Ajustes` → `Red e Internet` → `SIMs` → `Añadir eSIM` → `Introducir manualmente`).

---

## 7. Solución de problemas: ¿Por qué falló mi transferencia?

Basado en casos reales de usuarios y en la documentación interna de Apple, estas son las causas más comunes y sus soluciones:

| Error / Síntoma | Causa más probable | Solución |
|----------------|-------------------|----------|
| "Transferencia no disponible – operador no compatible" | Tu operador no admite la transferencia entre plataformas. | Usa los métodos alternativos (Sección 6). |
| El código QR se escanea pero dice "sesión caducada" | Tardaste demasiado (>3 minutos) después de generar el QR. | Repite el proceso y escanea inmediatamente. |
| Android dice "Emparejamiento fallido" | Permisos de Bluetooth o red local bloqueados. | En iPhone: `Ajustes > Privacidad y seguridad > Red local` – asegúrate de que `Ajustes` esté activado. En Android: desactiva el "escaneo de seguridad Wi‑Fi". |
| La transferencia comienza pero se detiene al 50% | Señal Wi‑Fi o de datos débil. | Acerca ambos teléfonos al router. Desactiva la VPN en ambos dispositivos. |
| "eSIM ya vinculada a otro dispositivo" | El perfil no se liberó correctamente del dispositivo antiguo. | En el dispositivo antiguo, ve a `Ajustes > Datos móviles` y elimina manualmente la eSIM (si aún se ve). Espera 5 minutos y vuelve a intentarlo. |
| El iPhone pide código de confirmación después de escanear | El perfil eSIM tiene un código de confirmación obligatorio (raro). | Busca el código en el correo del operador (suele ser de 4 a 8 dígitos). |
| El doble clic en el botón lateral no hace nada (iPhone → Android) | Autenticación biométrica no configurada o desactivada. | Configura Face ID / Touch ID, o desactiva temporalmente "Requerir atención" para Face ID. |

### ¿Sigues atascado?
Reúne estos datos antes de llamar al soporte:
- IMEI y EID del dispositivo origen
- IMEI y EID del dispositivo destino
- El mensaje de error exacto (captura de pantalla)

Para problemas más complejos, consulta nuestra **[Guía de solución profunda de eSIM (16 casos reales)](/faq/esim-deep-troubleshooting-guide-2026/)**.

---

## 8. ¿Qué ocurre con la eSIM antigua después de la transferencia?

**Se desactiva inmediatamente.**

El dispositivo antiguo mostrará "Sin servicio" para esa línea. El perfil eSIM permanece visible en el dispositivo antiguo durante 24–48 horas (como una entrada "fantasma"). Puedes eliminarlo manualmente:  
`Ajustes > Datos móviles > pulsa la eSIM antigua > Eliminar eSIM`.

> 💰 **Facturación**: tu operador seguirá cobrándote el plan. Transferir no cancela el plan, solo mueve la SIM. Para cancelarlo, debes contactar al operador por separado.

---

## 9. Buenas prácticas para evitar dolores de cabeza con la transferencia

✅ **Antes de transferir:**
- Verifica la compatibilidad del operador (prueba el menú – si aparece, es compatible).
- Actualiza ambos teléfonos al último SO (iOS 26 / Android 16).
- Carga ambos teléfonos por encima del 30%.
- Desactiva VPN y bloqueadores de anuncios temporalmente.

✅ **Durante la transferencia:**
- Mantén los teléfonos a menos de 10 cm (4 pulgadas) el uno del otro.
- No cambies de aplicación ni bloquees la pantalla.
- No apagues Bluetooth ni Wi‑Fi.

✅ **Después de la transferencia:**
- Prueba llamadas y datos en el nuevo dispositivo.
- Elimina la eSIM antigua del dispositivo origen para evitar confusiones.
- Mantén el Wi‑Fi del dispositivo antiguo encendido al menos una hora – algunos operadores necesitan un último apretón de manos.

---

## 10. Preguntas frecuentes – Transferencia eSIM entre plataformas

**P1: ¿Puedo transferir una eSIM solo de datos (como una eSIM de viaje)?**  
R: No. La mayoría de eSIM de viaje (Airalo, Holafly, planes de datos de Roami, etc.) no admiten transferencia entre plataformas. Están diseñadas para instalarse una vez por dispositivo. Deberás comprar un nuevo plan en tu nuevo teléfono.

**P2: ¿La transferencia funciona entre un iPhone 11 y un Samsung S24?**  
R: Sí, siempre que ambos cumplan los requisitos de SO. El iPhone 11 es compatible con iOS 26 (soporta hasta iOS 26). El Samsung S24 soporta Android 16. La generación del hardware no importa; solo importa la versión del SO. Para un análisis más profundo del comportamiento de eSIM por dispositivo, consulta nuestra **[Guía completa de eSIM para iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)** (también aplicable a muchos modelos anteriores).

**P3: Seguí los pasos pero mi Android no tiene "Emparejar con iPhone o iPad". ¿Qué ocurre?**  
R: Ese menú forma parte de los Servicios de Google y solo aparece en Android 16+ con Google Play Services actualizado. Ve a `Ajustes > Acerca del teléfono > Versión de Android`. Si es 15 o anterior, actualiza tu teléfono o usa el método alternativo (código QR del operador).

**P4: ¿WhatsApp / iMessage / códigos 2FA seguirán funcionando después de la transferencia?**  
R: WhatsApp usa tu número de teléfono: detectará el cambio de SIM y puede pedirte que verifiques de nuevo (suele ser automático). iMessage en el iPhone usa el número de la eSIM y debería reactivarse en un minuto. Para 2FA, los servicios que envían SMS a tu número funcionarán con normalidad: el número no ha cambiado.

**P5: ¿Puedo transferir la misma eSIM de ida y vuelta varias veces?**  
R: Sí, pero cada transferencia requiere el mismo proceso. Algunos operadores limitan las transferencias a 3–5 veces al año para evitar abusos. Si alcanzas el límite, te pedirán que vayas a una tienda o llames al soporte.

**P6: ¿Qué pasa con la configuración de eSIM + SIM física (doble SIM)?**  
R: La transferencia solo mueve la eSIM. La SIM física permanece en el dispositivo origen. Si quieres mover ambas, deberás transferir la eSIM (usando esta guía) y mover físicamente la tarjeta nano‑SIM al nuevo dispositivo. Para optimizar la experiencia dual‑SIM después de la transferencia, consulta nuestro artículo **[¿Dual eSIM no funciona? 12 soluciones para iPhone](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)**.

**P7: ¿Puedo transferir una eSIM de un iPhone a un Samsung Galaxy si tengo un operador no compatible?**  
R: Sí, pero no mediante la transferencia nativa. Tendrás que usar el método alternativo: solicitar un nuevo código QR a tu operador (Opción 1 en la Sección 6). Esto funciona con cualquier operador, aunque requiere una llamada telefónica.

**P8: ¿Qué pasa si mi operador no admite transferencia pero quiero cambiar de dispositivo?**  
R: Si tu operador no está en la lista de compatibles, puedes seguir usando tu eSIM en el dispositivo actual. Para cambiarte a un nuevo dispositivo, contacta a tu operador y solicita un nuevo código QR. La mayoría de los operadores ofrecen este servicio, aunque puede tener un coste adicional.

---

## 11. Conclusión final

La capacidad de **transferir eSIM entre iPhone y Android** sin intervención del operador es un **cambio de juego en 2026**. Elimina el último gran punto de fricción para cambiar de ecosistema. Siempre que tu operador esté en la lista de compatibles y ambos teléfonos estén actualizados, podrás mover tu número en menos de un minuto.

**Recuerda**: si tu operador no es compatible, el método alternativo del código QR sigue funcionando: solo requiere una llamada telefónica. Y para las eSIM de viaje, trátalas como de un solo uso; compra una nueva en cada dispositivo.

Si necesitas más información sobre **cómo activar eSIM** en tu nuevo dispositivo, consulta nuestra [guía de activación de eSIM](/faq/how-to-activate-an-esim/).