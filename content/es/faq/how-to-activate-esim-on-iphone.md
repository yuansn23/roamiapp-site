---
title: "Cómo activar eSIM en iPhone (2026)"
h1_title: "Cómo activar eSIM en iPhone en 2026 – Guía completa paso a paso"
description: "Guía completa de activación de eSIM en iOS 2026. Sin necesidad de llamar a tu operadora. Sigue instrucciones sencillas con código QR, app de Ajustes o app de la operadora. Rápido y gratis."
keywords: ["activación eSIM", "cómo activar eSIM iPhone", "configurar eSIM iPhone", "añadir eSIM a iPhone", "código QR eSIM iPhone", "eSIM de viaje iPhone", "solución de problemas eSIM iPhone", "transferir eSIM a nuevo iPhone", "activación eSIM fallida iPhone", "eSIM sin servicio iPhone", "eSIM atascada en activando"]
date: 2026-09-16T00:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "iOS", "Troubleshooting", "Travel Setup"]
toc: true
image: "/img/faq/activate-esim-iphone.webp"
image-1: "/img/faq/activate-esim-iphone-1.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Actualizado el"
  min_read: "min de lectura"
  toc: "Índice de contenidos"

# Breadcrumbs
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
  title: "Reclama una eSIM gratis"
  icon: "🎁"
  item_suffix: "eSIM gratis"
  item_subtitle: "eSIM gratis"
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
  title: "Preguntas frecuentes"
  items:
    - question: "¿Qué es la activación de eSIM y cómo funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "¿Cómo activar una eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "¿Cómo activar eSIM en iPhone (todos los modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Última lista de compatibilidad eSIM"
      url: "/compatibility/"
---


> **Nota del editor:** Activar una eSIM en iPhone toma unos cinco minutos — escaneas el código QR, tocas unas opciones en Ajustes y el perfil se descarga. Cada paso de esta guía se probó en hardware real con iOS 17 y 18. Sigue los pasos para tu versión de iOS y estarás conectado antes de despegar.

**La respuesta corta:** En un iPhone, activas una eSIM desde la app de Ajustes — sin llamar a tu operadora, sin tarjeta física. Esta página recorre en profundidad la ruta específica de iOS: los menús exactos, las diferencias entre iOS 17 y 18, cómo mover un perfil a un iPhone nuevo y la limpieza de iMessage/FaceTime que la mayoría de las guías omiten.

Para el concepto de fondo, consulta [¿Qué es la activación de eSIM?](/faq/what-is-esim-activation-and-how-does-it-work/). ¿Usas Android? Usa la [guía general de activación](/faq/how-to-activate-an-esim/).

¿Usas un iPhone 16? Hay una [guía dedicada de eSIM para iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/).

## ¿Tu iPhone está listo para eSIM?

Una comprobación rápida: marca `*#06#` — si aparece un **EID** de 32 dígitos, tu iPhone tiene eSIM. Para la lista completa de modelos de iPhone (del XS a la línea 16/17, SE de 2.ª/3.ª generación) y cuántos perfiles admite cada uno, consulta el [centro de compatibilidad eSIM de iPhone](/faq/iphone-11-esim-compatible/).

## Antes de empezar a activar la eSIM

1. **Liberado** — Ajustes > General > Información > Bloqueo de operadora debe indicar "Sin restricciones de SIM". Un iPhone bloqueado no puede instalar la eSIM de un segundo proveedor.
2. **Wi-Fi** — el perfil se descarga del servidor seguro de tu operadora, así que necesitas conexión (los datos móviles no sirven para la descarga inicial).
3. **Código de desbloqueo** — iOS te pide el código de la pantalla de bloqueo para autorizar la instalación.
4. **El código QR** — tenlo abierto en otro dispositivo, o guarda la imagen en Fotos y usa "Elegir foto" más adelante.

## Tu línea principal frente a una eSIM de viaje

Antes de abrir Ajustes, define qué estás haciendo realmente — el flujo varía un poco, y saber en cuál de los dos casos estás evita la mayoría de las confusiones.

**Escenario A: activar tu línea principal (cambiar de operadora o de teléfono).** Es una relación con la operadora. Tu operadora te entrega un código QR, envía la eSIM a través de su app (Verizon, T-Mobile, AT&T, Visible y Mint lo hacen), o usa "Activación de eSIM por operadora", donde el perfil aparece automáticamente al iniciar sesión con tu cuenta de operadora. Querrás comprobar que iMessage y FaceTime se vuelven a registrar con el nuevo número después.

**Escenario B: añadir una eSIM de viaje (mantener tu número de origen).** Es una segunda línea separada para datos en el extranjero. Dejas tu SIM física o tu eSIM de origen intacta, instalas la eSIM de viaje junto a ella y luego apuntas los Datos móviles a la línea de viaje. La eSIM de viaje suele ser solo de datos, así que las llamadas y los mensajes se quedan en tu número de origen.

Todo lo que sigue aplica a ambos casos, pero las secciones de "convertir", "Transferencia rápida" y "volver a registrar iMessage" son territorio del Escenario A, mientras que la configuración de doble línea es del Escenario B.

## Cómo instalar una eSIM en iPhone

### Escanear un código QR

1. Ajustes > Datos móviles (o Datos celulares).
2. Toca **Añadir eSIM** (iOS antiguos: **Añadir plan de datos móviles**).
3. Toca **Usar código QR**.
4. Sostén el teléfono a unos 15 cm del código, con la pantalla que lo muestra a brillo máximo.
5. Cuando aparezca el plan, toca **Continuar** e introduce tu código de desbloqueo si te lo pide.

Si no se escanea tras un par de intentos, elige **Introducir datos manualmente** en la parte inferior de la pantalla de la cámara.

### Introducción manual

Ve a Ajustes > Datos móviles > Añadir eSIM > Usar código QR > **Introducir datos manualmente**, y luego teclea la dirección SM-DP+ y el código de activación del correo de tu proveedor. Es la alternativa fiable cuando el código está dañado o se muestra en el mismo teléfono que estás activando.

### App de la operadora

Proveedores como Roami, Airalo y Holafly se instalan con un toque desde su app — abre tu plan y toca **Instalar** o **Activar**, y luego acepta el mensaje. La ruta más rápida, sin usar la cámara.

## Convertir tu SIM física en eSIM en iPhone

Si tu operadora lo admite, iOS puede convertir tu SIM física en una eSIM directamente en el teléfono — sin ir a una tienda, sin tarjeta nueva, sin código QR. Es la forma más limpia de liberar la ranura de SIM física (por ejemplo, para una SIM local en el extranjero) o de pasar a todo digital antes de vender tu teléfono.

1. Ajustes > Datos móviles.
2. Toca la línea que está actualmente en tu SIM física.
3. Toca **Convertir en eSIM** (con algunas operadoras dice **Convertir SIM física en eSIM**).
4. Toca **Convertir plan de datos móviles**, y luego **Convertir en eSIM**.
5. Espera la conversión — normalmente menos de un minuto — y retira la tarjeta SIM física cuando iOS te lo indique.

Algunos detalles que conviene saber. **El soporte de la operadora varía** — las tres grandes (AT&T, Verizon, T-Mobile) lo admiten, pero muchos MVNO y operadoras de prepago no muestran la opción. **Tu iPhone debe estar en la red de esa operadora** para convertir (verifica la línea durante la conversión). **No puedes convertir una SIM extranjera o de viaje** — esta función solo convierte la SIM de la operadora con la que tu teléfono está registrado actualmente. Y una vez convertida, la tarjeta física queda inservible — tírala, no la entregues a otra persona.

¿No ves "Convertir en eSIM"? Tu operadora no la ha habilitado. Aún puedes pasar a lo digital a la antigua usanza: pídeles un código QR de eSIM y sigue la instalación estándar de arriba.

## Cambios de eSIM entre iOS 17 e iOS 18

| Función | iOS 17 | iOS 18 |
|---|---|---|
| Ruta para añadir eSIM | Ajustes > Datos móviles > Añadir eSIM | Misma ruta |
| Etiqueta del botón | "Añadir plan de datos móviles" en algunos dispositivos | "Añadir eSIM" en todas partes |
| Introducción manual | Parte inferior de la pantalla de escaneo | Más visible, rediseñada |
| Transferencia rápida | Disponible desde iOS 16 | Más fiable, mejor indicador de progreso |
| Actualizaciones de operadora | Algunas requieren reiniciar | Actualizaciones en segundo plano |

Si ves "Añadir plan de datos móviles", es la misma función que "Añadir eSIM".

## Historial de versiones de iOS para eSIM

Las etiquetas han cambiado más de lo que la gente cree. Aquí está el arco completo, para que un tutorial de hace tres años en tu teléfono de hace dos siga teniendo sentido.

| Versión de iOS | Etiqueta del menú | Qué cambió para eSIM |
|---|---|---|
| iOS 15 | "Añadir plan de datos móviles" | eSIM disponible en XS/XR y posteriores; la SIM dual es una eSIM + una física en la mayoría de los modelos |
| iOS 16 | "Añadir plan de datos móviles" | Llega la **Transferencia rápida** (mover una eSIM desde un iPhone cercano); conversión a eSIM para operadoras seleccionadas |
| iOS 17 | "Añadir eSIM" / "Añadir plan de datos móviles" (mixto) | La conversión a eSIM se amplía a más operadoras; eSIM dual *activa* en iPhone 13 y posteriores |
| iOS 18 | "Añadir eSIM" en todas partes | Pantalla de añadir rediseñada, actualizaciones de operadora en segundo plano, vista de eSIM dual más clara |

En resumen: todo desde iOS 16 en adelante puede hacer Transferencia rápida, iOS 17 estandarizó la eSIM dual, e iOS 18 es sobre todo un repaso de pulido en etiquetas y fiabilidad.

## Volver a registrar iMessage y FaceTime tras instalar la eSIM

La mayoría de las guías se detienen en "Configuración de datos móviles completada", pero hay una peculiaridad de iOS que conviene manejar: si cambiaste tu línea de voz predeterminada, iMessage y FaceTime pueden seguir vinculados a la línea antigua — o mostrar "Esperando activación".

1. Ajustes > Mensajes > Enviar y recibir, y confirma que tu número está seleccionado.
2. Ajustes > FaceTime, y confirma que el número correcto o el Apple ID están activos.
3. Si cualquiera muestra "Esperando activación", desactiva y activa iMessage estando conectado a Wi-Fi.

Esto importa en configuraciones de doble línea donde la eSIM de viaje es solo de datos y quieres mantener la mensajería en tu número de origen.

## Cómo transferir una eSIM a un iPhone nuevo

Al configurar un iPhone nuevo cerca del antiguo, elige **"Transferir eSIM desde un iPhone cercano"** y mantén ambos dispositivos cerca con Bluetooth y Wi-Fi activados. El perfil se transfiere de forma inalámbrica en uno o dos minutos.

Si no aparece el mensaje, ve a Ajustes > Datos móviles > Añadir eSIM > **Transferir desde un iPhone cercano** en el teléfono nuevo. Si el perfil se instala pero muestra "Sin servicio", elimínalo primero del iPhone antiguo — algunas operadoras exigen que el perfil antiguo se libere.

Para mover una eSIM a Android, reemisiones de la operadora o un teléfono que ya vendiste o restableciste, consulta la [guía de transferencia de eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/).

## Casos límite de la Transferencia rápida

La Transferencia rápida es estupenda cuando ambos iPhones están en la misma habitación. Cuando no lo están, esto es lo que ocurre.

- **Vendiste, perdiste o restableciste el iPhone antiguo.** La Transferencia rápida queda descartada — necesita el dispositivo de origen encendido y desbloqueado. En su lugar, contacta con tu operadora y pídeles que reemitan la eSIM (normalmente gratis, tarda minutos), e instala el QR nuevo en el teléfono nuevo. Los pasos detallados de reemisión están en la [guía de transferencia](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **"Transferir desde un iPhone cercano" no aparece.** Solo aparece en dispositivos con iOS 16 o posterior. En un iPhone más antiguo, o si el dispositivo de origen no está a mano, recurre a la reemisión del QR por parte de la operadora.
- **La transferencia se queda atascada a mitad de camino.** Pon ambos teléfonos en el mismo Wi-Fi, mantenlos a pocos centímetros y desactiva el Modo de bajo consumo en ambos. El Bluetooth debe permanecer activado — la Transferencia rápida se empareja por Bluetooth antes de entregar por Wi-Fi.
- **Vienes desde Android.** La Transferencia rápida es solo de iPhone a iPhone. Las transferencias de Android a iPhone pasan por tu operadora, no por la app de Ajustes.
- **Se movió la eSIM pero no una SIM física.** La Transferencia rápida solo mueve perfiles *eSIM* — una tarjeta SIM física aún debe cambiarse físicamente (a menos que primero la conviertas en eSIM, como se vio arriba).

## Añadir una eSIM de viaje manteniendo tu número de origen

Es la configuración más habitual en el mundo real: tu línea de origen se queda exactamente donde está, y una eSIM de viaje va a bordo para los datos. Hazlo en este orden.

1. **Deja tu línea de origen intacta.** Ya sea una SIM física o una eSIM, déjala en su sitio. No la elimines, no la conviertas.
2. **Instala la eSIM de viaje** por QR, introducción manual o la app del proveedor (Roami, Airalo, Holafly).
3. **Etiqueta las líneas.** Ajustes > Datos móviles, toca cada línea y usa "Etiqueta del plan de datos móviles" para renombrarlas — "Origen" y "Roami Viaje" — para distinguirlas más adelante.
4. **Ajusta los Datos móviles a la eSIM de viaje.** Ajustes > Datos móviles > Datos móviles, y selecciona la línea de viaje.
5. **Ajusta la Línea de voz predeterminada a tu número de origen.** Así las llamadas, iMessage y FaceTime se quedan en tu número habitual.
6. **Activa la Itinerancia de datos para la eSIM de viaje, y desactívala para el origen.** La línea de viaje necesita itinerancia para llegar a las redes asociadas; la de origen no, y mantenerla desactivada evita cargos diarios accidentales.
7. **Deja "Permitir cambio de datos móviles" DESACTIVADO.** Si está activado, una breve caída de señal podría cambiar los datos a tu línea de origen y generar un cargo de itinerancia.

Ahora tienes un conducto de datos desde tu eSIM de viaje y un número al que todos pueden seguir llamando — sin cambiar SIM, sin segundo teléfono.

## Configura tus dos líneas para viajar

- **Línea de voz predeterminada:** mantén tu SIM de origen para que las llamadas y los iMessages se queden en tu número habitual.
- **Datos móviles:** apúntalos a la eSIM de viaje.
- **Permitir cambio de datos móviles:** déjalo **DESACTIVADO**. Si está activado, una breve caída de señal podría cambiar los datos a tu línea de origen y generar un cargo diario de itinerancia.
- **Itinerancia de datos:** DESACTIVADA en la SIM de origen, ACTIVADA para la eSIM de viaje (las eSIM de viaje la necesitan para llegar a las redes asociadas).

Si las barras de señal se muestran pero las páginas no cargan, suele ser un problema de APN — la tabla completa de APN está en la [guía de solución profunda de problemas](/faq/esim-deep-troubleshooting-guide-2026/).

## "Añadir eSIM" en gris, o "Añadir plan de datos móviles" no aparece

Si la opción está en gris o simplemente no está, algo anterior la está bloqueando. Aquí están las causas, de la más común a la menos.

| Causa | Cómo detectarlo | Solución |
|---|---|---|
| iPhone bloqueado por operadora | Ajustes > General > Información > Bloqueo de operadora no indica "Sin restricciones de SIM" | Desbloquea con tu operadora, o usa la eSIM de la propia operadora del bloqueo |
| La operadora no ofrece eSIM | Tu operadora solo emite SIM físicas | Cámbiate de operadora, o usa una eSIM de viaje para datos |
| Ranuras eSIM ya llenas | El iPhone 13+ admite dos eSIM activas; del XS al 12, una | Desactiva o elimina una línea existente para liberar una ranura |
| Perfil MDM / corporativo | Un teléfono de trabajo con un perfil de gestión instalado | La restricción `AllowESIMModification` bloquea los cambios — contacta con TI |
| Modelo de China / Hong Kong | El número de modelo termina en el sufijo específico de China, sin hardware eSIM | La eSIM no está disponible en los iPhone de China continental |
| Fallo de software | Una actualización reciente de iOS dejó el menú desactualizado | Reinicia y vuelve a comprobar |

La causa más importante es el bloqueo de operadora — representa la mayoría de los tickets de "¿por qué no puedo añadir una eSIM?". La segunda es intentar añadir una tercera línea en un teléfono que solo admite dos activas.

## ¿Qué hay del Apple Watch y del iPad?

Un Apple Watch refleja una de las líneas de tu iPhone — no puede usar una eSIM de viaje por sí mismo — y los iPad con conexión celular usan su propia ruta en Ajustes > Datos móviles. Todos los detalles están en la [guía de eSIM para iPad y Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

## Gestionar varias eSIM en tu iPhone

Cuando tengas dos o tres perfiles instalados, un poco de orden evita que se conviertan en un montón confuso.

- **Etiqueta cada línea.** Ajustes > Datos móviles > una línea > Etiqueta del plan de datos móviles. "Origen", "Roami Viaje" y "eSIM de España" superan a los nombres predeterminados ("Principal", "Secundaria", "Viaje").
- **Activa o desactiva las líneas.** Ajustes > Datos móviles > una línea > Activar esta línea. Desactivada significa que deja de intentar registrarse — útil para una eSIM de viaje en reposo que piensas reutilizar en el próximo viaje.
- **Cambia la línea de datos al instante.** Ajustes > Datos móviles > Datos móviles te permite mover los datos entre líneas sin reiniciar.
- **Vigila el límite de líneas activas.** El iPhone 13 y posteriores permiten dos líneas activas a la vez; un tercer perfil puede estar *almacenado* pero no activo hasta que desactives uno.
- **Elimina cuando termines.** Tras un viaje, quita la eSIM de viaje caducada (Ajustes > Datos móviles > la línea > Eliminar eSIM) para que deje de saturar la lista — pero solo cuando el plan haya caducado, ya que los códigos QR son de un solo uso.

## eSIM, copias de seguridad de iCloud y borrado de tu iPhone

Una cosa que la mayoría aprende por las malas: **las eSIM no forman parte de tu copia de seguridad de iCloud.** Una restauración desde copia de seguridad recupera tus apps, ajustes y fotos — pero no tus perfiles móviles. Los perfiles viven en el chip eUICC del teléfono, y solo tres cosas los mueven: la Transferencia rápida, una reemisión de la operadora o volver a descargarlos de tu proveedor.

Consecuencias prácticas:

- **"Borrar todo el contenido y los ajustes" elimina tus eSIM.** Antes de borrar (para vender, entregar a cambio o arreglar un problema), ten en cuenta que tendrás que volver a descargar cada eSIM después — y las eSIM de viaje con códigos QR de un solo uso pueden requerir un plan completamente nuevo.
- **Una restauración normal de iCloud no borra ni restaura las eSIM.** Restaurar en el *mismo* teléfono deja tus eSIM intactas; restaurar en un teléfono *nuevo* aún requiere Transferencia rápida o una reemisión de la operadora para las líneas.
- **La copia de seguridad no rescata una eSIM perdida.** Si borras o rompes el teléfono, el perfil se pierde hasta que la operadora lo reemita. Guarda las cadenas de introducción manual de tu proveedor (dirección SM-DP+ + código de activación) en un lugar separado del teléfono.

## Errores comunes de eSIM en iPhone

Los fallos más frecuentes — "No se puede añadir el plan de datos móviles", atascado en "Activando", "Sin servicio" tras la instalación — se cubren error por error, con valores de APN, en la [guía de solución profunda de problemas de eSIM](/faq/esim-deep-troubleshooting-guide-2026/). La causa más importante es un teléfono bloqueado por operadora; la segunda es dejar la itinerancia de datos desactivada en la eSIM de viaje.

## Preguntas frecuentes

**¿Cuántas eSIM puedo almacenar en mi iPhone?**
Ocho o más perfiles, aunque solo dos pueden estar activas a la vez (iPhone 13 y posteriores). Los modelos antiguos (XS–12) mantienen una eSIM activa más una SIM física.

**¿Puedo eliminar mi eSIM después del viaje?**
Sí — Ajustes > Datos móviles > la eSIM > Eliminar eSIM una vez que el plan haya caducado. Nunca la elimines a mitad del viaje: los códigos QR son de un solo uso, así que necesitarías un plan nuevo.

**¿Una eSIM agota la batería de mi iPhone?**
No de forma significativa. Dos líneas activas en una zona de señal débil pueden añadir un uno o dos por ciento al día, pero una eSIM por sí sola consume prácticamente lo mismo que una SIM física.

**¿Necesito la itinerancia de datos activada para una eSIM de viaje en iPhone?**
Sí — es necesaria para que la eSIM se registre en las redes asociadas, y no añade cargos de itinerancia. Olvidar esto es la causa n.º 1 del "Sin servicio".

**¿Puedo usar una SIM física y una eSIM juntas en iPhone?**
Sí — la SIM dual funciona desde el primer momento. (Los iPhone 14 de EE. UU. y posteriores son solo eSIM, así que ahí emparejarías dos eSIM.) Consulta el [centro de compatibilidad de iPhone](/faq/iphone-11-esim-compatible/) para saber cómo funciona la SIM dual.

**¿Cuál es la diferencia entre eSIM y una SIM física?**
En resumen: una eSIM es un perfil digital que no puedes retirar, y cambia de operadora al instante. La comparación completa está en [¿Qué es una eSIM?](/faq/what-is-esim/).

**¿Puedo convertir mi SIM física en eSIM en mi iPhone?**
Si tu operadora lo admite, sí — Ajustes > Datos móviles > tu línea > Convertir en eSIM. Las tres grandes operadoras de EE. UU. lo admiten; muchos MVNO no. Tu teléfono debe estar en la red de esa operadora para convertir.

**¿Por qué "Añadir eSIM" aparece en gris en mi iPhone?**
Normalmente es un bloqueo de operadora, una ranura eSIM llena o un perfil MDM corporativo que bloquea los cambios. Comprueba primero Ajustes > General > Información > Bloqueo de operadora — si no indica "Sin restricciones de SIM", esa es tu respuesta.

**¿Qué pasa con mi eSIM si borro mi iPhone?**
"Borrar todo el contenido y los ajustes" elimina los perfiles eSIM. Tendrás que volver a descargarlos de tu operadora después. Las eSIM de viaje con códigos QR de un solo uso pueden necesitar un plan nuevo, así que borra solo cuando estés listo para configurarlo todo de nuevo.

**¿Funciona la Transferencia rápida si ya no tengo mi iPhone antiguo?**
No — necesita ambos teléfonos presentes y encendidos. Si tu iPhone antiguo se vendió, se perdió o se restableció, pide a tu operadora que reemita la eSIM. Consulta la [guía de transferencia](/faq/how-to-transfer-esim-between-iphone-and-android/).

**¿Puedo pausar mi eSIM de viaje en iPhone entre viajes?**
No puedes pausar el reloj de validez del plan, pero puedes desactivar la línea (Ajustes > Datos móviles > la línea > Activar esta línea) para que deje de registrarse y deje de gastar batería. Sigue almacenada y lista para reactivarse en el próximo viaje — siempre que la ventana de validez del plan no haya terminado.

---

## ¿Listo para tu próxima aventura?

👉 **Pruébalo gratis primero** — consigue una [eSIM gratis](/free-esim/) y ejecuta este recorrido de principio a fin.

Luego elige tu destino:

- [eSIM para EE. UU.](/united-states-esim/)
- [eSIM para Japón](/japan-esim/)
- [eSIM para Europa](/europe-esim/)
- [eSIM para Reino Unido](/united-kingdom-esim/)

*Basado en la documentación oficial de Apple, los estándares de la GSMA y pruebas con operadoras. Actualizado: septiembre de 2026.*

## Fuentes

- [GSMA — especificación eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Soporte de Apple — Configurar eSIM en iPhone](https://support.apple.com/en-us/HT212780)
- [Soporte de Apple — Acerca de eSIM en iPhone](https://support.apple.com/en-us/HT209044)
- [Soporte de Apple — Usar SIM dual con una eSIM](https://support.apple.com/en-us/HT209086)