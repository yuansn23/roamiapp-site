---
title: "Cómo activar una eSIM en iOS y Android"
h1_title: "Cómo activar una eSIM en iOS y Android (paso a paso)"
description: "Guía paso a paso para activar una eSIM en iPhone y Android: código QR, entrada manual o app de la operadora, además de soluciones para fallos de activación."
keywords: ["activación de eSIM", "cómo activar eSIM", "activar eSIM iPhone", "eSIM Android", "código QR eSIM", "entrada manual eSIM", "solución de problemas eSIM", "eSIM de viaje", "configurar eSIM iPhone", "añadir eSIM al iPhone"]
date: 2026-09-16T00:00:00Z
lastmod: 2026-09-16T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true
image: "/img/faq/how-to-activate-esim.webp"
image-1: "/img/faq/how-to-activate-esim-1.jpg"
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
    - name: "eSIM EE. UU."
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM Alemania"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Turquía"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Japón"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM China"
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


> **Nota del editor:** Activar una eSIM toma unos cinco minutos — escaneas un código QR o introduces una dirección SM-DP+ y dejas que el perfil se descargue. Los pasos de abajo son exactamente los que usa nuestro equipo de soporte, probados en iOS 17/18 y Android 13/14/15. Sigue el camino de tu teléfono y estarás en línea antes de despegar.

**La conclusión desde el principio:** Activar una eSIM significa descargar un perfil digital de operadora en tu teléfono. Sea cual sea tu marca, la receta es la misma: un teléfono desbloqueado, una conexión Wi-Fi estable y un código QR (o sus datos de entrada manual) de tu proveedor. Abre tus ajustes de datos móviles, toca "Añadir eSIM", escanea o escribe, y espera unos dos minutos.

Si es tu primera vez, nuestra guía [¿Qué es una eSIM?](/faq/what-is-esim/) explica la tecnología, y [¿Qué es la activación de una eSIM?](/faq/what-is-esim-activation-and-how-does-it-work/) explica qué ocurre en realidad entre bastidores cuando escaneas.

> **¿Tienes un iPhone?** Esta página cubre ambas plataformas, pero el recorrido de iOS va más a fondo. Para las diferencias entre versiones de iOS, la Transferencia rápida y el re-registro de iMessage/FaceTime, lee [Cómo activar la eSIM en iPhone](/faq/how-to-activate-esim-on-iphone/). ¿Usas un iPhone 16 y ves "No se pudo activar"? Consulta la [guía de eSIM del iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/).

## ¿Tu teléfono siquiera admite eSIM?

Una comprobación de 10 segundos: marca `*#06#` y busca un **EID** de 32 dígitos. Si está ahí, estás listo. Para la lista completa dispositivo por dispositivo — todas las marcas Android y los iPhone antiguos — consulta la [lista completa de compatibilidad de eSIM](/compatibility/).

## Lista de Verificación Previa para la Activación de la eSIM

La mayoría de los fallos de activación son prevenibles antes de escanear nada. Ejecuta estas seis comprobaciones primero.

| Comprobación | Se supera cuando |
|---|---|
| Teléfono desbloqueado | iPhone: Ajustes > General > Información > Bloqueo por operadora dice "Sin restricciones de SIM" |
| Wi-Fi estable | Conectado al Wi-Fi de casa u oficina, no al del aeropuerto u hotel |
| Código conocido | Puedes escribir tu código de pantalla de bloqueo a petición |
| QR al alcance | El correo está abierto en un portátil, tableta o página impresa |
| Pantalla brillante | El dispositivo que muestra el QR está al 100 % de brillo |
| EID presente | `*#06#` devuelve un EID |

Omitir cualquiera de estas y probablemente acabarás en la cola de solución de problemas. Las tres causas más comunes de fallo, en orden: un teléfono bloqueado por operadora, un Wi-Fi débil a mitad de descarga, y escanear con la app Cámara en lugar de hacerlo desde Ajustes.

### Acciones de preparación que valen la pena antes de escanear

La tabla de arriba trata sobre *comprobaciones*. Esta lista trata sobre *acciones* — cosas que vale la pena hacer antes de tocar "Añadir eSIM" para nunca tener que improvisar a mitad de configuración.

1. **Guarda el código QR en Fotos.** Hazle una captura o descarga la imagen, así puedes usar "Elegir foto" en lugar de apuntar la cámara a otra pantalla. Si el código está en un correo, esto también significa que no tienes que reabrir tu bandeja de entrada en el momento.
2. **Haz una captura de la dirección SM-DP+ y del código de activación.** Estas dos cadenas son tu respaldo sin conexión. Con ellas guardadas, un código QR dañado no puede detenerte.
3. **Descarga la app del proveedor e inicia sesión.** Roami, Airalo y Holafly ofrecen instalación con un toque desde su app — pero solo si ya iniciaste sesión antes de salir del buen Wi-Fi.
4. **Carga el teléfono por encima del 50 %.** La descarga de un perfil es pequeña, pero un teléfono que se apaga a mitad de instalación puede dejar un perfil a medio escribir que luego tendrás que eliminar y volver a añadir.
5. **Conoce tu código de pantalla de bloqueo.** iOS y Android ambos lo piden para autorizar la instalación. Si llevas tiempo usando Face ID o una huella dactilar, escribe el código una vez primero para asegurarte de que lo recuerdas.
6. **Confirma que el teléfono está desbloqueado.** En iPhone: Ajustes > General > Información > Bloqueo por operadora. En Android: pregunta a tu operadora, o prueba la SIM de un amigo de otra red.
7. **Instala con el Wi-Fi de casa, no el del aeropuerto.** Puedes instalar semanas antes del viaje; el plan permanece inactivo hasta que tu teléfono se conecte a una red en el destino.
8. **Decide qué línea hace qué.** Si mantienes tu SIM de origen, planifica ahora: la eSIM de viaje gestiona los datos, la SIM de origen las llamadas y mensajes. Lo cubrimos abajo.

## Cómo Activar la eSIM en iPhone

Todos los iPhone desde el XS siguen un solo camino. Ve a **Ajustes > Datos móviles**, toca **Añadir eSIM** (o **Añadir plan de datos**), elige **Usar código QR**, y sostén el teléfono firme a unos 15 cm del código. Cuando aparezca "Configuración celular completada", has terminado — la descarga suele tomar de 30 a 60 segundos.

¿Sin cámara? Toca **Introducir datos manualmente** y pega la dirección SM-DP+ y el código de activación del correo de tu proveedor.

Para el flujo rediseñado de iOS 18, la Transferencia rápida entre iPhones, y el re-registro de iMessage/FaceTime tras cambiar de líneas, consulta [Cómo activar la eSIM en iPhone](/faq/how-to-activate-esim-on-iphone/).

## Cómo Activar la eSIM en Android

La etiqueta del menú cambia según la marca, pero el camino de la eSIM en todo Android es "abrir ajustes, buscar Añadir eSIM, escanear o escribir".

| Marca | Camino hasta "Añadir eSIM" |
|---|---|
| Samsung Galaxy (One UI 5–7) | Ajustes > Conexiones > Administrador de tarjetas SIM > Añadir eSIM |
| Google Pixel (Android 13–15) | Ajustes > Red e Internet > + junto a SIM > ¿Descargar una SIM en su lugar? |
| OnePlus (OxygenOS 13–14) | Ajustes > Wi-Fi y red > SIM y red > Añadir eSIM |
| Xiaomi (MIUI/HyperOS) | Ajustes > Tarjetas SIM y redes móviles > Añadir eSIM |
| Motorola | Ajustes > Red e Internet > Red móvil > Añadir operador |
| Otras marcas | Busca "eSIM" en Ajustes |

Si la opción no aparece, tu modelo probablemente carece de hardware eSIM — confírmalo con la [lista de compatibilidad de dispositivos](/compatibility/).

### Entrada manual en Android

Cuando el QR no se escanea, busca "Introducir código de activación manualmente" o "¿Necesitas ayuda?" en la pantalla de Añadir eSIM, luego escribe la dirección SM-DP+ y el código de activación. Esto funciona en todos los teléfonos Android con eSIM y es el respaldo más fiable.

### Rutas del menú Android, marca por marca

La tabla de arriba te lleva hasta ahí; este es el detalle que hay debajo. Cada marca nombra la misma función de forma ligeramente distinta, y la ruta cambia un poco entre versiones de software.

| Marca y software | Ruta exacta | Nota |
|---|---|---|
| Samsung (One UI 7) | Ajustes > Conexiones > Administrador de tarjetas SIM > **Añadir eSIM** | One UI 6.0 renombró "gestor de tarjetas SIM" a "Administrador de tarjetas SIM"; los One UI 5.x antiguos aún dicen "gestor de tarjetas SIM". |
| Samsung (One UI 5) | Ajustes > Conexiones > **Gestor de tarjetas SIM** > Añadir plan móvil | La etiqueta cambia a "Añadir plan móvil" en lugar de "Añadir eSIM". |
| Google Pixel (Android 15) | Ajustes > Red e Internet > **SIM** > Añadir SIM > ¿Descargar una SIM en su lugar? > Siguiente | Pixel es la marca más consistente — el camino apenas cambió desde Android 12. |
| Google Pixel (Android 12) | Ajustes > Red e Internet > Red móvil > **Añadir eSIM** | Los Pixel antiguos usaban la etiqueta más simple "Añadir eSIM" antes de que llegara la pantalla de SIM. |
| Xiaomi / Redmi / POCO (HyperOS) | Ajustes > **Tarjetas SIM y redes móviles** > eSIM > Añadir eSIM | La eSIM solo está en modelos globales específicos (Xiaomi 13/13T, 14/14T, 15); la mayoría de los Redmi/POCO omiten el hardware eSIM. |
| OnePlus (OxygenOS 14) | Ajustes > Red móvil > **SIM y red** > Añadir eSIM | OxygenOS 13 la escondía en "Wi-Fi y red"; la 14 la ordenó en "Red móvil". |
| Motorola | Ajustes > Red e Internet > Red móvil > **Añadir operador** | Solo modelos seleccionados (razr y algunos Edge) llevan eSIM; muchos Moto G no. |
| Honor / Oppo / Vivo / Realme | Busca "eSIM" en Ajustes | El soporte es irregular y depende del modelo — consulta la [lista de compatibilidad de eSIM](/compatibility/) antes de asumir que está ahí. |

Si no ves ninguna de estas, busca "eSIM" en la barra de búsqueda de Ajustes. Si no aparece nada, el teléfono casi con certeza carece de hardware eSIM — el detalle completo por modelo está en la [guía de marcas Android con eSIM](/faq/android-esim-other-brands-deep-guide/) y la [lista completa de dispositivos](/compatibility/).

## Dónde Encontrar la Dirección SM-DP+ y el Código de Activación

La entrada manual necesita dos cadenas que viven en tu correo de confirmación o en la app del proveedor.

| Proveedor | Dónde buscar |
|---|---|
| Roami | Correo de confirmación — "Datos de instalación manual" / "Dirección SM-DP+" |
| Airalo | App: plan > Detalles > Instalación manual |
| Holafly | Correo de confirmación — "Instalación manual" |
| Nomad | App: detalles de la eSIM > Instalación manual |
| Google Fi | Entrada manual no admitida — usa la app de Fi |
| US Mobile | App: Cuenta > eSIM > Código de activación manual |
| T-Mobile (EE. UU.) | Correo de confirmación o app de T-Mobile |

Haz una captura de estos antes de volar — sin Wi-Fi al aterrizar, no podrás consultarlos.

## Cómo Entrega Tu eSIM Cada Proveedor Importante

"Activar" significa cosas ligeramente distintas según quién te vendió el plan. Esto es lo que puedes esperar de los cinco proveedores de eSIM de viaje más comunes, para que sepas exactamente qué habrá en tu bandeja de entrada y cómo lo instalarás.

| Proveedor | Método de instalación | Qué llega en el correo | Tiempo típico de entrega |
|---|---|---|---|
| Roami | App con un toque **o** código QR / entrada manual | Código QR más un bloque de "instalación manual" (dirección SM-DP+ + código de activación) | Al instante — normalmente en menos de 2 minutos |
| Airalo | App con un toque **o** QR desde la app | Recibo del pedido + instrucciones de instalación; el QR en sí vive en la app en Mis eSIM > Detalles | Instantáneo (el QR se genera en la pantalla del plan) |
| Holafly | App con un toque **o** QR en el correo | Código QR más los detalles de tu plan de datos ilimitados | Instantáneo; muchos planes se activan solos en cuanto te conectas a una red asociada |
| Nomad | App con un toque **o** QR / entrada manual | Código QR + código de activación | Instantáneo, con algunos planes que solo inician su reloj de validez en el primer uso |
| Saily | Instalación solo por app (app de Saily) | Recibo + un enlace para abrir la app de Saily | Instantáneo — el perfil se envía a través de la app, no por QR |

El patrón: los cinco entregan el QR o el perfil casi de inmediato, y la instalación más rápida siempre es la app del propio proveedor. En lo que difieren es en *dónde* vive el QR (correo vs app) y *cuándo* arranca el reloj del plan (en la instalación vs en la primera conexión). Si estás indeciso, el correo de Roami incluye tanto el QR como las cadenas de entrada manual, que es la configuración más amable para un principiante.

## Activar Mediante la App de una Operadora

Proveedores como Roami, Airalo y Holafly te permiten saltarte por completo el QR. Descarga la app, abre tu plan comprado, toca **Instalar** o **Activar**, y permite que el teléfono añada el plan de datos móviles. Es idéntico en iPhone y Android, y es la ruta más limpia para principiantes porque la app no puede escanear su propia pantalla.

## ¿Qué Método de Activación de eSIM Deberías Usar?

Tienes tres formas de entrar, y no son intercambiables en todas las situaciones. Elige según el contexto.

| Método | Ideal cuando | Ojo con |
|---|---|---|
| App de la operadora (un toque) | Eres principiante y quieres cero complicaciones | Necesita la app instalada y con sesión iniciada antes de salir del buen Wi-Fi |
| Código QR | El código está en otro dispositivo o en una página impresa | No puede escanear un código en la pantalla del mismo teléfono; la poca luz perjudica |
| Entrada manual | El QR está dañado, o está en el teléfono que estás activando | La cadena SM-DP+ es larga y distingue mayúsculas y minúsculas — pega, no teclees |

Nuestro consejo: usa la ruta de la app con un toque del proveedor para tu primera eSIM, y guarda una captura de *ambos*, el QR y las cadenas de entrada manual, como respaldo. La app es lo más rápido, pero las cadenas manuales son lo único que no puede fallarte si todo lo demás sale mal.

## Cómo Confirmar Que la Activación Tuvo Éxito

No confíes solo en el mensaje de "Configuración celular completada". Verifica tres cosas:

1. **Barra de estado** — ves barras de señal (y un segundo juego si ambas líneas están activas).
2. **Ajustes** — la línea eSIM indica "Activada" o "Activa", no "Sin servicio".
3. **Prueba real** — desactiva el Wi-Fi, establece la eSIM como tu línea de datos y carga una página web.

Dale hasta dos minutos para registrarse en la red local. Si sigue diciendo "Buscando", consulta el puntero de solución de problemas de abajo.

## ¿Cuánto Tarda Realmente la Activación?

Versión corta: la *descarga* toma menos de dos minutos, pero la *primera conexión* puede tardar hasta 15 minutos después de aterrizar. Son dos cosas distintas, y la gente las confunde.

| Etapa | Qué ocurre | Tiempo típico |
|---|---|---|
| Entrega del QR / perfil | El sistema del proveedor genera tu eSIM y la envía por correo | Segundos a ~15 minutos con carga alta |
| Descarga del perfil | Tu teléfono obtiene el perfil del servidor SM-DP+ | 30–60 segundos, hasta 2 minutos |
| Primer registro en red | Al llegar, tu teléfono escanea redes locales y negocia con una operadora asociada | 2–15 minutos, normalmente menos de 5 |
| Fluyen los datos | Cargas una página con Itinerancia de datos ACTIVADA | Inmediato una vez registrado |

¿Por qué algunas operadoras son más lentas en el registro que otras? Tres razones. **Las operadoras pequeñas aprovisionan por lotes** — tu perfil está técnicamente "pendiente" hasta que su sistema lo procesa en el backend. **La red asociada está congestionada** — aterrizar en un aeropuerto ocupado a las 6 p.m. significa que tu teléfono es uno de miles registrándose a la vez. Y **algunos planes solo inician su reloj en la primera conexión**, así que el saludo de red se retrasa deliberadamente hasta la primera sesión de datos. Nada de esto es una falla — es solo la diferencia entre "instalado" y "en vivo".

## Errores Comunes Que Rompen la Activación de la eSIM

| Error | Por qué lo rompe | Solución |
|---|---|---|
| Escanear con la app Cámara | Reconoce el código, no instala nada | Ve primero por Ajustes > Añadir eSIM |
| Activar con Wi-Fi débil | La descarga se corta y corrompe el perfil | Instala en casa antes del aeropuerto |
| Eliminar la eSIM para "refrescarla" | Destruye permanentemente el perfil y los datos restantes | Nunca elimines salvo que el plan haya expirado |
| Esperar hasta aterrizar para instalar | No hay Wi-Fi para descargar el perfil | Instala antes de salir; permanece inactivo hasta que llegues |
| Dejar la Itinerancia de datos apagada | Todas las barras, cero internet | Activa la Itinerancia de datos para la eSIM de viaje tras aterrizar |
| Olvidar tu código | La instalación se atasca a mitad de camino | Confirma tu código antes de empezar |
| Escanear un código en tu propia pantalla | La cámara no puede apuntarse a sí misma | Guárdalo en Fotos y usa "Elegir foto", o usa la entrada manual |

## Qué Hacer Cuando la Activación de la eSIM Se Atasca

Si estás atascado en "Activando…" o "Buscando", recorre esta escalera de arriba abajo — resuelve la gran mayoría de activaciones atascadas sin tocar al soporte.

1. **Reinicia el teléfono.** Suena demasiado simple, pero un arranque limpio reactiva el saludo de red y limpia un perfil atascado la mitad de las veces.
2. **Alterna el Modo avión durante 30 segundos y desactívalo.** Esto obliga al teléfono a reescanear las redes locales desde cero.
3. **Vuelve a escanear el QR.** Elimina el perfil *pendiente* (aún no activo) y añádelo de nuevo en una red más fuerte. Nunca elimines un plan activo que ya funciona.
4. **Reescribe la dirección SM-DP+ exactamente.** La entrada manual distingue mayúsculas de minúsculas y es sensible a los espacios — un solo carácter erróneo manda el teléfono a un servidor muerto. Pega, no teclees.
5. **Activa la Itinerancia de datos para la eSIM de viaje.** "Sin servicio" con todas las barras de señal es casi siempre esto.
6. **Pásate a un Wi-Fi estable.** Si la descarga siguió interrumpiéndose, puede que tengas un perfil a medio escribir que solo se reinstala limpiamente con una buena conexión.

Si el error es un código específico — "Código QR no válido", "No se puede añadir el plan de datos móviles", un problema de APN — eso es territorio de error por error, y las soluciones (con valores de APN) viven en la [Guía avanzada de solución de problemas de eSIM](/faq/esim-deep-troubleshooting-guide-2026/).

## Activar en una Tableta Android o Punto de Acceso Portátil

La eSIM no es solo para teléfonos. Las **tabletas Android con datos celulares** — como la Samsung Galaxy Tab serie S o una Lenovo celular — usan exactamente el mismo camino que sus hermanas de teléfono: Ajustes > Conexiones (o Red e Internet) > Administrador de tarjetas SIM > Añadir eSIM. Si tu tableta tiene un EID con `*#06#`, puede recibir una eSIM.

Los **puntos de acceso portátiles (MiFi)** son más variados. La mayoría de los hotspots de viaje aún toman una tarjeta SIM física, pero unas pocas unidades premium — como la serie Netgear Nighthawk M6 y algunos modelos de ZTE y GlocalMe — admiten eSIM. Si compartes conexión con toda la familia, un hotspot con eSIM puede ser una solución ordenada, aunque normalmente tendrás más flexibilidad (y planes más baratos) poniendo la eSIM en un teléfono y compartiendo su hotspot en su lugar.

El **iPad** celular de Apple y el **Apple Watch** siguen sus propias reglas — el Watch refleja una línea de teléfono en lugar de tomar una eSIM de viaje directamente. Eso está cubierto en la [guía de eSIM para iPad y Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

## Mitos Comunes Sobre la Activación de la eSIM

Algunas cosas que la gente cree sobre la activación y que simplemente no son ciertas:

- **"Necesito llamar a mi operadora para activar."** No — instalar un perfil no requiere llamada. Solo contactas a una operadora para *reemitir* un perfil tras eliminarlo o cambiar de teléfono.
- **"Tengo que estar en mi destino para activar."** Instalas en casa; el plan solo se activa cuando tu teléfono se conecta a una red en el destino.
- **"Eliminar la eSIM restablece mi plan."** Eliminar destruye el perfil de forma permanente — y los códigos QR son de un solo uso, así que necesitarías un plan totalmente nuevo.
- **"Puedo compartir una eSIM entre dos teléfonos."** No — un perfil vive en un dispositivo a la vez. A menudo puedes *moverlo* entre teléfonos, pero no puedes ejecutar el mismo perfil en dos a la vez.
- **"Las eSIM son más lentas que una SIM física."** La credencial es idéntica; no hay diferencia de velocidad. Tus velocidades de datos vienen de la red y del plan, no del formato de SIM.

## Todo Lo Demás Vive En Su Propia Página

Para mantener esta guía enfocada, estos temas relacionados tienen recorridos dedicados:

- **Solución de problemas de errores específicos** ("Código QR no válido", atascado en "Activando", "Sin servicio", ajustes APN) → [Guía avanzada de solución de problemas de eSIM](/faq/esim-deep-troubleshooting-guide-2026/)
- **Transferir una eSIM a un teléfono nuevo** (iOS a iOS, Android a Android, entre plataformas) → [Transferir eSIM entre iPhone y Android](/faq/how-to-transfer-esim-between-iphone-and-android/)
- **Usar dos líneas a la vez** (doble SIM / DSDS) → [centro de compatibilidad de eSIM para iPhone](/faq/iphone-11-esim-compatible/)
- **eSIM para iPad y Apple Watch** → [guía de eSIM para iPad y Apple Watch](/faq/ipad-apple-watch-esim-support-guide/)
- **Qué operadoras y dispositivos admiten eSIM** → [lista completa de compatibilidad](/compatibility/)

## Preguntas Frecuentes

**¿Hay alguna tarifa por activar una eSIM?**
No. Las operadoras no cobran por escanear e instalar un perfil — solo pagas por el plan de datos en sí. Cualquiera que cobre una "tarifa de activación" está fuera de la práctica normal.

**¿Puedo activar mi eSIM antes de viajar?**
Sí, y deberías. Instala en casa con un Wi-Fi fiable; el plan permanece inactivo hasta que tu teléfono se conecte a una red en tu destino. Solo recuerda activar la Itinerancia de datos tras aterrizar.

**¿Cuánto tarda la activación de una eSIM?**
La descarga del perfil toma menos de dos minutos. La primera conexión a la red local puede tardar de 10 a 15 minutos según la señal. Más allá de eso, reinicia el teléfono.

**¿Necesito Wi-Fi para activar una eSIM?**
Para la descarga inicial del perfil, sí — el perfil viene del servidor seguro SM-DP+ de tu proveedor, y una señal celular débil no lo descargará de forma fiable. Instala con el Wi-Fi de casa antes de salir, y el plan permanece inactivo hasta que aterrices.

**¿Cuántas eSIM puedo mantener en mi teléfono, y puedo cambiar entre ellas?**
La mayoría de los teléfonos modernos almacenan ocho o más perfiles eSIM, aunque solo uno o dos pueden estar *activos* a la vez. Puedes cambiar qué perfil está activo desde la misma pantalla de Ajustes que usaste para añadirlos — útil para un viaje multi-país.

**¿Cuál es la diferencia entre el código QR y la entrada manual?**
El escaneo de QR es la ruta estándar — más rápida y difícil de teclear mal. La entrada manual (dirección SM-DP+ + código de activación) es el respaldo que funciona cuando la cámara o el código fallan.

**¿Puedo hacer llamadas y enviar mensajes con una eSIM de solo datos?**
Una eSIM de viaje de solo datos lleva internet pero no número de teléfono, así que no hará llamadas tradicionales ni SMS. Sigues siendo alcanzable en tu número de origen (mediante Llamadas Wi-Fi) mientras la eSIM de viaje gestiona los datos — así lo hacen la mayoría de los viajeros.

**Mi eSIM está atascada en "Activando" — ¿cuánto debo esperar?**
Hasta 10–15 minutos al llegar, especialmente en un aeropuerto concurrido. Si sigue atascada después, reinicia el teléfono, alterna el Modo avión durante 30 segundos, o elimina el perfil pendiente y vuelve a escanear con un Wi-Fi más fuerte.

**¿Necesito la Itinerancia de datos activada para una eSIM de viaje?**
Sí — las eSIM de viaje llegan a la red a través de operadoras asociadas, así que la Itinerancia de datos debe estar ACTIVADA para esa línea. Esto no genera cargos de itinerancia; es simplemente cómo funciona la conexión.

**¿Qué significa la dirección SM-DP+?**
SM-DP+ (Subscription Manager – Data Preparation Plus) es el servidor seguro que entrega tu perfil eSIM. En la entrada manual, le dice a tu teléfono de dónde descargar el perfil.

**¿Puedo usar mi eSIM de viaje con Llamadas Wi-Fi?**
Sí — las Llamadas Wi-Fi pertenecen a tu línea *de origen*, no a la eSIM de viaje. Mantén las Llamadas Wi-Fi activadas para tu número de origen y funcionará sobre los datos de la eSIM de viaje (o cualquier Wi-Fi), así que sigues siendo alcanzable sin cargos de roaming.

**¿Y si no tengo señal alguna tras la activación?**
No tener barras en absoluto suele significar que estás fuera de la cobertura de la red asociada, o que el teléfono aún no se ha registrado. Alterna el Modo avión durante 30 segundos, confirma que la Itinerancia de datos está ACTIVADA para la eSIM de viaje, y sal al exterior si estás en interiores. Un "Sin servicio" persistente es un problema de APN o de aprovisionamiento — consulta la [guía avanzada de solución de problemas](/faq/esim-deep-troubleshooting-guide-2026/).

👉 **¿Listo para probarlo tú mismo?** Consigue una [eSIM gratis](/free-esim/) y recorre estos pasos sin riesgo.

Luego explora nuestros destinos más populares:

- [eSIM para EE. UU.](/united-states-esim/)
- [eSIM para Japón](/japan-esim/)
- [eSIM para Europa](/europe-esim/)

---

*Basado en documentación de Apple, Google y del GSMA. Actualizado: septiembre de 2026.*

## Fuentes

- [GSMA — Especificación eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Soporte de Apple — Configurar eSIM en iPhone](https://support.apple.com/en-us/HT212780)
- [Soporte de Google — Configurar una eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Soporte de Google — eSIM en Android](https://support.google.com/android/answer/11241215)
