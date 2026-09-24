---
title: "eSIM ne fonctionne pas ? Corriger les erreurs de compatibilité en 2026"
h1_title: "Comment corriger eSIM ne fonctionne pas : erreurs de compatibilité en 2026"
description: "Bloqué avec des erreurs eSIM ? Apprenez à corriger les échecs d'activation, les problèmes de transfert et les boucles de redémarrage sur iPhone et Android. Diagnostiquez votre téléphone en 2 minutes."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["esim not working", "esim not supported", "esim not compatible iphone", "unable to activate esim", "esim network not available", "esim not transferring to new iphone", "accidentally deleted esim", "esim profile expired", "esim qr code invalid", "how to fix esim on iphone", "esim transfer error", "esim no service"]
date: 2026-09-12T00:00:00Z
lastmod: 2026-09-12T00:00:00Z
tags: ["eSIM", "Troubleshooting", "Activation Errors", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

ui_text:
  updated_on: "Mis à jour le"
  min_read: "min de lecture"
  toc: "Table des matières"

breadcrumbs:
  home:
    text: "Accueil"
    url: "/"
  parent:
    text: "Centre d'aide"
    url: "/faq/"

# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIM populaires"
  item_suffix: "eSIM"
  items:
    - name: "eSIM États-Unis"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM Allemagne"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Europe"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Turquie"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Japon"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM Chine"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

sidebar_free:
  title: "Obtenez un eSIM gratuit"
  icon: "🎁"
  item_suffix: "eSIM gratuit"
  item_subtitle: "eSIM gratuit"
  items:
    - name: "eSIM Royaume-Uni"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Allemagne"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thaïlande"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

sidebar_questions:
  title: "Questions populaires"
  items:
    - question: "Qu'est-ce que l'activation d'eSIM et comment ça marche ?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Comment activer un eSIM ?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Comment activer l'eSIM sur iPhone (tous les modèles) ?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Dernière liste de compatibilité eSIM"
      url: "/compatibility/"
---


> **Note de l'éditeur :** Une grande partie des problèmes « mon eSIM ne fonctionne pas » s'avèrent être un problème de téléphone, pas un problème de forfait. Ce guide répond à la question que vous devriez poser avant toute autre chose : *mon téléphone est-il seulement capable d'utiliser un eSIM ?* Nous vous guiderons à travers la vérification matérielle de 2 minutes, les exceptions des modèles Chine/Hong Kong et les verrouillages opérateur — afin que vous ne perdiez pas une heure sur des étapes d'activation qui ne pourront jamais fonctionner sur votre appareil.

> **Vous cherchez une correction de code d'erreur ?** Si votre téléphone passe la vérification matérielle ci-dessous mais que vous fixez un message spécifique (« Échec de l'activation », « No Service », « QR invalide », erreur de restauration 4013/4014), c'est un problème différent. Consultez notre [Guide de dépannage approfondi eSIM](/faq/esim-deep-troubleshooting-guide-2026/) pour la référence erreur par erreur.

## Mon téléphone est-il seulement capable de gérer l'eSIM ?

Avant d'ouvrir les Réglages, de scanner un seul QR code ou de contacter le support, confirmez que votre téléphone possède réellement le matériel SIM intégré requis. Cette seule vérification élimine instantanément environ la moitié de tous les cas « eSIM ne fonctionne pas ».

### La vérification EID universelle

Ouvrez le composeur de votre téléphone et tapez :

> **`*#06#`**

- Si un écran apparaît avec un **EID à 32 chiffres** (identifiant eUICC), votre téléphone possède la puce intégrée nécessaire pour l'activation d'une SIM numérique. ✅
- Si l'écran n'affiche que des numéros **IMEI** et pas d'EID, le matériel n'est pas là. ❌

**Que faire si aucun EID n'apparaît :** Arrêtez-vous ici. Aucune mise à jour logicielle, aucun hack ni méthode de « forçage » ne peut ajouter la puce manquante — c'est une absence matérielle physique. Utilisez plutôt une SIM physique, ou consultez la Correction #4 pour les téléphones qui *semblent* devoir prendre en charge l'eSIM mais ne le font pas.

### EID vs IMEI vs ICCID expliqués

| Identifiant | Ce que c'est | Ce que ça vous dit |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 chiffres) | Identifie le modèle de votre téléphone — chaque téléphone en a un |
| **EID** | Identifiant eUICC (32 chiffres) | Confirme que la puce SIM intégrée est présente — seuls les téléphones compatibles eSIM en ont une |
| **ICCID** | Integrated Circuit Card Identifier (19–20 chiffres) | Identifie un profil eSIM spécifique après son installation |

> **Point clé :** EID = matériel présent. Si vous voyez un EID, votre téléphone est physiquement capable de gérer l'eSIM. Si vous n'en voyez pas, rien de ce que vous installez ne changera cela.

### Où trouver chaque numéro

Les trois numéros sont bien en évidence une fois que vous connaissez le menu. Voici le chemin le plus court vers chacun :

| Identifiant | Chemin le plus rapide | Emplacement de secours |
| :--- | :--- | :--- |
| **IMEI (15 chiffres)** | Composez `*#06#` — c'est le premier numéro affiché | iPhone : **Réglages > Général > Informations**. Android : **Réglages > À propos du téléphone** |
| **EID (32 chiffres)** | Composez `*#06#` et faites défiler — c'est le long qui commence par **8904** | iPhone : **Réglages > Général > Informations > EID**. Samsung : **Réglages > À propos du téléphone > État** |
| **ICCID (19–20 chiffres)** | N'apparaît qu'après l'installation d'un profil | iPhone : **Réglages > Général > Informations**. Android : **Réglages > À propos du téléphone > État de la carte SIM** |

> **Fait utile :** chaque EID commence par **« 8904 »** — ce préfixe le marque comme identifiant eUICC. Si le long numéro à l'écran commence par autre chose, vous lisez la mauvaise valeur.

### Le test du bouton Ajouter un eSIM

Si `*#06#` affiche un EID mais que vous voyez toujours « eSIM non pris en charge », ouvrez **Réglages > Cellulaire** et cherchez **« Ajouter un eSIM »** ou **« Ajouter un forfait cellulaire »**. Si l'option est là mais échoue lors du scan, vous avez très probablement affaire à un **verrouillage opérateur** ou à une **restriction régionale** — les deux sont couverts ci-dessous.

### La méthode de recherche dans les Réglages

Pas de composeur à portée de main (certaines tablettes et pliables l'enterrent), ou `*#06#` vous a donné un écran confus ? La barre de recherche de votre téléphone est la deuxième vérification la plus rapide.

- **iPhone :** Ouvrez **Réglages**, balayez vers le bas depuis le haut de la liste pour révéler la zone de recherche, et tapez **« eSIM »**. Un résultat **« Ajouter un eSIM »** ou **« Ajouter un forfait cellulaire »** signifie que la fonctionnalité est active.
- **Samsung :** Ouvrez **Réglages**, appuyez sur l'**icône en forme de loupe** en haut, et tapez **« eSIM »**. Si **« Gestionnaire de carte SIM »** (ou « Ajouter un forfait mobile ») apparaît, votre variante a la puce.
- **Pixel :** Ouvrez **Réglages > Réseau et Internet > SIM**. Si vous voyez **« Télécharger une SIM à la place ? »**, tout va bien. Un écran qui ne liste que votre SIM physique — sans option de téléchargement — signifie pas de puce eUICC.

> **Pas de résultat de recherche = pas de matériel.** Si un téléphone vendu après environ 2018 ne renvoie rien pour « eSIM » dans la recherche des Réglages, vous avez presque certainement une variante régionale ou économique livrée sans la puce.

### La recherche par numéro de modèle

Vous achetez d'occasion ou vérifiez un téléphone que vous ne pouvez pas allumer ? Le numéro de modèle règle la question en quelques secondes.

- **iPhone :** **Réglages > Général > Informations > Numéro de modèle**, puis appuyez sur le numéro pour le faire basculer vers l'**identifiant préfixé par A** (par exemple, **A2111**). Les lettres avant **/A** dans le numéro de pièce codent la région de vente — la carte complète des suffixes se trouve dans la Section 2.
- **Samsung :** **Réglages > À propos du téléphone > Numéro de modèle** (par exemple, **SM-S921U1**). Le dernier caractère est l'indice : **U** = opérateur américain, **U1** = États-Unis débloqué, **B** = Europe/mondial, **0** = Chine/Hong Kong (Snapdragon).
- **Pixel :** **Réglages > À propos du téléphone > Modèle**. Les chaînes de modèle Pixel diffèrent selon la région et l'opérateur — le Japon et certaines variantes d'opérateurs américains restreignent l'eSIM, donc vérifiez le code spécifique ou composez `*#06#`.

> **Règle générale :** si le numéro de modèle se termine par un suffixe Chine/région (ou un suffixe d'opérateur américain sur un Samsung), vérifiez avec `*#06#` avant de supposer que l'eSIM fonctionne. Le numéro de modèle plus l'EID ensemble vous donnent une réponse à 100 %.

### Pourquoi un téléphone peut afficher un EID mais quand même refuser l'eSIM

| Scénario | EID présent ? | eSIM fonctionne ? | Pourquoi ? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR et plus récents (mondiaux) | ✅ Oui | ✅ Oui | Prise en charge complète des profils SIM numériques |
| iPhone XS/XR (modèle chinois) | ❌ Non | ❌ Non | Matériel retiré pour double SIM physique |
| Samsung S20 FE (opérateur américain) | ✅ Oui | ❌ Non | L'opérateur a désactivé la fonctionnalité dans le logiciel |
| Google Pixel 4a (Japon) | ✅ Oui | ❌ Non | L'opérateur a bloqué la fonctionnalité |
| iPhone verrouillé opérateur (AT&T/T-Mobile) | ✅ Oui | ❌ Non (pour d'autres opérateurs) | Le verrouillage réseau bloque les profils d'autres fournisseurs |
| iPhone débloqué (toute région) | ✅ Oui | ✅ Oui | Prise en charge complète |


## eSIM non pris en charge ou non compatible sur iPhone

Si vous voyez **« eSIM non pris en charge »**, **« cet eSIM n'est pas compatible avec cet iPhone »**, ou simplement **« eSIM non compatible iPhone »**, la cause est presque toujours l'une des cinq choses suivantes — et chacune concerne votre *appareil*, pas le forfait.

### Votre modèle d'iPhone est antérieur au matériel eSIM

Seuls les iPhones à partir de l'**XR, XS, XS Max (2018) et plus récents** ont la puce intégrée. L'iPhone 8, 8 Plus et iPhone X ne l'ont pas, donc ils renvoient **« eSIM non pris en charge »** quoi que vous essayiez. La puce eUICC n'est tout simplement pas présente sur ces cartes — c'est une limitation matérielle, pas un problème de réglages.

**Vérification rapide :** Composez `*#06#`. Un EID à 32 chiffres signifie que tout va bien ; seulement l'IMEI signifie que non.

**Que faire :** Utilisez une SIM physique, ou passez à un iPhone XR ou plus récent. La liste officielle se trouve sur [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/118670).

### Votre iPhone est un modèle de Chine continentale

Les iPhones vendus en Chine continentale sont livrés avec **deux emplacements SIM physiques et sans matériel eSIM**. La réglementation chinoise pousse les smartphones domestiques vers la double SIM physique, donc Apple a retiré la puce intégrée sur ces unités. Même si l'option « Ajouter un forfait cellulaire » apparaît, elle ne se terminera pas — c'est la raison la plus courante de « eSIM non compatible avec cet iPhone » parmi les acheteurs qui ont acquis leur appareil en Chine ou via certains revendeurs.

**Comment identifier :** **Réglages > Général > Informations > Numéro de modèle**. S'il se termine par **« CH/A »**, c'est un modèle de Chine continentale. (Table complète des suffixes dans la Section 2 ci-dessous.)

**Que faire :** Il n'y a aucun moyen d'activer l'eSIM sur un appareil CH/A. Utilisez une SIM de voyage physique, ou vendez le téléphone et achetez une version mondiale.

### Votre iPhone est verrouillé opérateur

Certains opérateurs — surtout américains — verrouillent les iPhones sur leur propre réseau. Essayer d'activer un profil d'un fournisseur différent (comme un eSIM de voyage) renvoie alors « eSIM non pris en charge » ou un message « l'opérateur ne prend pas en charge ». Notez que certains opérateurs ne verrouillent que l'emplacement SIM physique tout en laissant l'emplacement eSIM ouvert, mais beaucoup verrouillent les deux.

**Comment vérifier :** **Réglages > Général > Informations > Verrouillage opérateur**. Il devrait afficher **« Aucune restriction SIM »**. S'il indique « SIM verrouillée », vous avez besoin d'un déverrouillage. Voir la Section 3 pour le guide complet du verrouillage opérateur.

### Votre version d'iOS est obsolète

La prise en charge de la SIM numérique s'est beaucoup améliorée dans iOS 16 et versions ultérieures. Sur iOS 12 ou 13, certains profils d'opérateurs modernes ne s'installeront tout simplement pas.

**Comment vérifier :** **Réglages > Général > Mise à jour logicielle**.

**Que faire :** Mettez à jour vers le dernier iOS, supprimez tout profil à moitié installé, puis re-scannez le QR code.

### Cet iPhone ne prend pas en charge l'eSIM sur un iPhone 14

Un iPhone 14 (version américaine) devrait toujours prendre en charge l'eSIM — le modèle américain n'a aucun tiroir SIM physique du tout. S'il renvoie cette erreur malgré tout, vous avez affaire à une rare **défaillance matérielle eUICC**. Contactez Apple Support pour un diagnostic matériel plutôt que de courir après les réglages.

Pour la liste complète modèle par modèle des iPhone, consultez notre [guide de compatibilité eSIM iPhone](/faq/iphone-11-esim-compatible/).

Les propriétaires de Samsung devraient consulter le [guide eSIM Samsung Galaxy](/faq/samsung-s20-esim-compatible/), et les propriétaires de Pixel le [guide eSIM Google Pixel](/faq/google-pixel-6-esim-compatible/).


### eSIM non pris en charge : matériel, logiciel ou opérateur

Chaque cas de « eSIM non pris en charge » — sur n'importe quel téléphone, n'importe quel opérateur — tombe dans l'un des trois seaux. Nommer le seau vous dit instantanément si le problème est réparable.

| Seau | À quoi ça ressemble | Réparable ? | Votre action |
| :--- | :--- | :--- | :--- |
| **Matériel** | Pas d'EID sur `*#06#` ; iPhone pré-2018 ; modèle chinois (CH/A) ; Android économique sans eUICC | ❌ Non | SIM physique, ou mise à niveau du téléphone |
| **Logiciel** | EID présent, mais la fonctionnalité est masquée ou le système est ancien (Samsung S20 FE désactivé par l'opérateur, iOS obsolète) | ✅ Généralement | Mettez à jour le système, ou supprimez la restriction de l'opérateur |
| **Opérateur** | EID présent, menu visible, mais l'activation du forfait d'un autre fournisseur échoue | ✅ Oui | Débloquez l'appareil (Section 3), puis re-scannez |

**Le test de routage en 30 secondes :** composez `*#06#`.
- **Pas d'EID** → matériel. Arrêtez-vous ici — rien de ce que vous installez ne changera cela.
- **EID présent, mais le flux « Ajouter un eSIM » échoue** → logiciel ou opérateur. Les deux sont réparables, alors continuez à lire.

Ce seul résultat vous oriente vers la bonne correction pour environ 9 cas sur 10 de rapports « non pris en charge » que nous voyons chez Roami.


## Le guide des modèles Chine, Hong Kong et Macao

L'endroit où votre téléphone a été vendu détermine le matériel qu'il possède. C'est le moyen le plus rapide d'exclure ou de confirmer une situation régionale sans eSIM.

### Référence rapide des modèles chinois

| Fin du numéro de modèle | Région | Prise en charge eSIM |
| :--- | :--- | :--- |
| **CH/A** | Chine continentale | ❌ Non (double SIM physique) |
| **HK/A** | Hong Kong | ⚠️ Variable (certains modèles prennent en charge SIM physique + numérique) |
| **LL/A** | États-Unis | ✅ Oui |
| **ZA/A** | Canada | ✅ Oui |
| **J/A** | Japon | ✅ Oui (sauf certains modèles d'opérateurs) |
| **B/A** | Royaume-Uni/Europe | ✅ Oui |
| **X/A** | Australie/Nouvelle-Zélande | ✅ Oui |

### Statut eSIM des iPhone en Chine continentale

- **Tous les iPhones vendus en Chine continentale** (sauf la série iPhone 16) ont une double SIM physique et pas d'eSIM.
- **Les téléphones Android chinois** — Xiaomi, Oppo, Vivo, Huawei — vendus sur le marché intérieur manquent également généralement de la puce eSIM.
- **Si vous apportez un téléphone international en Chine :** il fonctionnera avec les eSIM de voyage internationaux, mais les opérateurs chinois locaux n'offrent pas d'eSIM aux touristes, donc vous aurez toujours besoin d'un forfait de voyage d'un fournisseur comme Roami.

### Statut eSIM des iPhone à Hong Kong

- **Modèles d'iPhone :** les iPhones de Hong Kong prennent généralement en charge **eSIM + SIM physique** (un de chaque) ou la double SIM physique selon le modèle exact. Vérifiez le suffixe de votre modèle.
- **Opérateurs :** certains opérateurs de Hong Kong (CMHK, 1010, SmarTone) offrent l'eSIM aux clients postpayés, mais l'eSIM prépayé est rare.
- **Voyageurs :** un eSIM de voyage international est plus simple et plus fiable que d'essayer d'obtenir un eSIM local de Hong Kong.

### Statut eSIM des iPhone à Macao

- **Similaire à Hong Kong :** la plupart des iPhones de Macao sont importés de Hong Kong et prennent en charge l'eSIM + SIM physique.
- **CTM** (l'opérateur principal de Macao) offre l'eSIM aux clients postpayés mais pas aux touristes.

### Pourquoi les modèles chinois abandonnent l'eSIM

Ce n'est pas un mouvement de réduction des coûts d'Apple ou des marques Android — c'est la réglementation. La Chine continentale exige que les téléphones vendus sur son territoire soient certifiés pour la double SIM physique, et un profil eSIM réinscriptible ne correspond pas à ce cadre domestique. Le résultat pratique :

- **Apple** livre les iPhones de Chine continentale avec **deux emplacements nano-SIM physiques** et sans puce eUICC.
- **Xiaomi, Oppo, Vivo, Honor et Huawei** retirent l'eSIM de leurs versions chinoises domestiques même lorsque la version mondiale du même téléphone l'a.
- **Un téléphone chinois emmené à l'étranger ne peut toujours pas récupérer l'eSIM** — c'est une absence matérielle, pas un blocage logiciel. L'inverse est également vrai : un téléphone international entrant en Chine fonctionne avec les eSIM de voyage, mais les trois grands opérateurs chinois (China Mobile, China Unicom, China Telecom) ne vendent pas d'eSIM aux touristes.

**La solution :** si vous avez acheté le téléphone en Chine continentale, prévoyez une SIM de voyage physique — ou achetez un téléphone de modèle mondial. Il n'y a pas de déverrouillage, de jailbreak ou d'application qui ajoute la puce manquante.

### Identifier votre modèle par le numéro A

Le suffixe du numéro de pièce (CH/A, LL/A, etc.) est le filtre rapide, mais le **numéro A** est l'identifiant précis. Prenez l'iPhone 11 comme modèle que chaque génération suit :

| Modèle iPhone 11 | Région | eSIM ? |
| :--- | :--- | :--- |
| **A2111** | États-Unis | ✅ Oui |
| **A2221** | Chine continentale | ❌ Non (double SIM physique) |
| **A2223** | Hong Kong / Macao | ✅ Oui (eSIM + physique) |

**Comment l'utiliser :** trouvez votre numéro A (**Réglages > Général > Informations > Numéro de modèle**, puis appuyez sur le numéro pour révéler le code préfixé par A), et faites-le correspondre à la liste des modèles d'Apple. Si un vendeur a annoncé un « iPhone mondial débloqué eSIM » mais que le numéro A est un code chinois, l'annonce était erronée — partez ou prévoyez une SIM physique.


## Verrouillage opérateur et comment le supprimer

Un verrouillage opérateur est la deuxième raison la plus courante pour laquelle un téléphone parfaitement capable refuse un eSIM. C'est une restriction logicielle que votre opérateur place sur l'appareil, pas une limite matérielle.

### Ce que fait un verrouillage opérateur

Quand un téléphone est « verrouillé SIM », il n'accepte que les SIM et profils eSIM de l'opérateur qui l'a vendu. Essayer d'ajouter un eSIM de voyage d'un autre fournisseur déclenche « eSIM non pris en charge » ou « SIM non prise en charge ». La puce intégrée est présente et fonctionne — l'opérateur bloque juste l'accès.

### Comment vérifier votre statut de verrouillage

1. Sur iPhone : **Réglages > Général > Informations > Verrouillage opérateur**. Il devrait dire **« Aucune restriction SIM »**.
2. Sur Android (Samsung) : **Réglages > À propos du téléphone > État** et cherchez le champ de verrouillage SIM.
3. Sur Android (Pixel) : **Réglages > À propos du téléphone > État SIM**.

### Politiques de déverrouillage des opérateurs américains

| Opérateur | Condition de déverrouillage |
| :--- | :--- |
| **AT&T** | Appareil entièrement payé et actif pendant 60 jours avant déverrouillage |
| **T-Mobile** | Appareil payé et actif pendant 40 jours ; demande via l'application T-Mobile |
| **Verizon** | La plupart des téléphones se déverrouillent automatiquement 60 jours après l'achat |

### Comment déverrouiller votre appareil

1. **Demandez le déverrouillage à votre opérateur** — c'est généralement gratuit une fois le téléphone payé, et la plupart des opérateurs américains vous permettent de le demander depuis l'application ou un formulaire web.
2. **Attendez la confirmation** — l'opérateur pousse le déverrouillage ; vous devrez peut-être redémarrer le téléphone.
3. **Vérifiez** — re-vérifiez le champ Verrouillage opérateur jusqu'à ce qu'il affiche « Aucune restriction SIM ».
4. **Puis activez** — une fois débloqué, re-scannez votre QR code eSIM de voyage.

> **Remarque :** un verrouillage opérateur est une restriction au niveau du téléphone, pas du forfait. Déverrouiller votre appareil n'annule pas votre contrat — cela libère simplement l'appareil pour utiliser les SIM et eSIM d'autres fournisseurs.

### Autres opérateurs américains et politiques de déverrouillage MVNO

Les trois grands ne sont pas les seuls que les gens rencontrent. Les téléphones prépayés et MVNO sont souvent verrouillés plus longtemps, et cela peut être la raison sournoise pour laquelle un eSIM de voyage « super affaire » ne s'installe pas.

| Opérateur | Condition de déverrouillage |
| :--- | :--- |
| **Cricket Wireless** | 6 mois de service payé (sauf si acheté au prix de détail complet) |
| **Metro by T-Mobile** | 180 jours de service payé |
| **Boost Mobile** | 12 mois de service payé |
| **Spectrum Mobile** | 60 jours |
| **Xfinity Mobile** | 60 jours de service actif |
| **US Cellular** | 120 jours |
| **Visible (Verizon prepaid)** | 60 jours de service payé |

### Ce dont vous avez besoin pour demander un déverrouillage

Les déverrouillages sont gratuits une fois éligible, mais la demande nécessite quelques éléments prêts :

1. **Votre IMEI** — composez `*#06#` et prenez le numéro à 15 chiffres (pas l'EID).
2. **Votre numéro de compte et PIN/mot de passe du compte** — trouvez-les dans l'application de votre opérateur ou sur une facture récente.
3. **Le téléphone entièrement payé** — les opérateurs ne déverrouilleront pas un appareil avec un solde d'échelonnement ouvert.
4. **Éligibilité remplie** — chaque opérateur a une fenêtre minimale de jours actifs (voir les tableaux ci-dessus).

**Où demander :** AT&T et T-Mobile ont des portails de déverrouillage en ligne et des formulaires dans l'application ; Verizon déverrouille automatiquement la plupart des téléphones après 60 jours sans demande nécessaire. Pour les MVNO (Cricket, Metro, Boost), utilisez leur application ou appelez le support directement.

**À propos des services tiers de « déverrouillage instantané » :** c'est un pari. Beaucoup utilisent des outils d'opérateurs divulgués qui font re-verrouiller le téléphone, et certains sont de véritables arnaques. Si votre opérateur dit que vous n'êtes pas encore éligible, attendez — ne payez pas un inconnu 20 $ pour le faire « pour » vous.


### Les trois différents verrouillages

Les gens disent « mon téléphone est verrouillé » et veulent dire trois choses complètement différentes. Chacune nécessite une correction différente, donc cela vaut la peine de les séparer.

| Type de verrouillage | Ce que c'est | Où vous le voyez | Correction |
| :--- | :--- | :--- | :--- |
| **Verrouillage du téléphone (verrouillage d'activation)** | Anti-vol : Verrouillage d'activation iCloud (iPhone) ou Google FRP (Android), lié au compte du propriétaire précédent | « Verrouillage d'activation » / « Cet iPhone était lié à un identifiant Apple » lors de la configuration, ou une invite de compte Google sur Android | Seul le propriétaire d'origine peut le supprimer — n'achetez jamais un téléphone qui l'affiche encore |
| **Verrouillage régional** | Une différence matérielle selon l'endroit où le téléphone a été vendu (les modèles chinois manquent de la puce eUICC) | Pas d'EID sur `*#06#` ; le numéro de modèle se termine par CH/A | Impossible à supprimer — utilisez une SIM physique ou un autre téléphone |
| **Verrouillage opérateur** | Une restriction logicielle de votre opérateur limitant le téléphone à leur réseau | **Réglages > Général > Informations > Verrouillage opérateur** affiche « SIM verrouillée » | Demandez un déverrouillage à l'opérateur (Section 3) |

**La désambiguïsation rapide :**
- Voir une **invite d'identifiant Apple ou de compte Google** = verrouillage du téléphone/activation (un problème de propriétaire).
- **Pas d'EID du tout** = verrouillage régional (un problème matériel).
- **EID présent + « SIM verrouillée »** = verrouillage opérateur (réparable, gratuit une fois éligible).

La plupart des plaintes « eSIM ne fonctionne pas » qui survivent à la vérification de 2 minutes sont du type verrouillage opérateur — et celui-là est presque toujours résoluble.


## Mon téléphone ne prend pas en charge l'eSIM mais il devrait

Certains appareils sont annoncés avec l'eSIM, mais des variantes régionales ou d'opérateurs spécifiques abandonnent silencieusement la fonctionnalité. Voici les coupables habituels :

- **Samsung Galaxy S20 FE** – les versions verrouillées par les opérateurs américains ont la fonctionnalité désactivée dans le logiciel pour réduire les coûts, même si le modèle mondial la prend en charge.
- **Google Pixel 4a (versions japonaises)** – Docomo et SoftBank désactivent l'eSIM sur leurs unités en raison d'accords avec les opérateurs locaux.
- **Xiaomi Redmi Note series** – aucune n'a la puce eUICC, malgré les rumeurs en ligne. Xiaomi réserve l'eSIM à ses fleurons.
- **iPhone 8 / 8 Plus / X** – matériel pré-eUICC ; Apple n'a ajouté la puce qu'à partir de la génération XS/XR.
- **Samsung Galaxy A series** – seuls certains modèles (A54, A53) ont la puce ; la plupart des séries A ne l'ont pas.

### Téléphones qui semblent compatibles eSIM mais ne le sont pas

| Modèle de téléphone | Prise en charge eSIM | Pourquoi ? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Non | Matériel pré-eUICC |
| **iPhone XS/XR (Chine)** | ❌ Non | Matériel double SIM physique |
| **Samsung Galaxy S20 FE (opérateur américain)** | ❌ Non | Désactivé par l'opérateur |
| **Samsung Galaxy A13 / A23** | ❌ Non | Modèle d'entrée de gamme, pas d'eUICC |
| **Google Pixel 4a (Japon)** | ❌ Non | Désactivé par l'opérateur (Docomo/SoftBank) |
| **Google Pixel 3 (certains modèles)** | ⚠️ Variable | Vérifiez la région ; certains l'ont, d'autres non |
| **Xiaomi Redmi Note series** | ❌ Non | Pas de matériel eUICC |
| **Xiaomi 12/13 (Chine)** | ❌ Non | Les versions chinoises domestiques manquent du matériel |
| **OnePlus Nord (version chinoise)** | ❌ Non | La région Chine manque du matériel |
| **Huawei (tous les modèles chinois domestiques)** | ❌ Non | Pas de services Google, pas de matériel eSIM |
| **Motorola G series (la plupart)** | ❌ Non | Les modèles économiques manquent d'eUICC |

**Que faire :** Avant d'acheter n'importe quel téléphone, composez `*#06#` dessus (si vous l'avez en main) pour confirmer l'EID, ou passez l'IMEI dans un vérificateur de compatibilité eSIM en ligne. La **[liste complète des téléphones compatibles eSIM (2026)](/compatibility/)** est votre meilleure ressource pour vérifier n'importe quel modèle.


## Compatibilité eSIM Android par marque

Si vous êtes sur Android, la plus grande variable n'est pas le système — c'est si *votre variante spécifique* a été livrée avec la puce. Voici le tableau modèle par modèle.

### Compatibilité eSIM Samsung Galaxy

| Modèle | Prise en charge eSIM | Remarques |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Oui | Toutes les variantes mondiales |
| **Galaxy S20 FE** | ❌ Non (opérateur américain) / ✅ Oui (mondial) | Vérifiez le numéro de modèle |
| **Galaxy A54 / A53** | ✅ Oui | Sélection de la série A uniquement |
| **Galaxy A13 / A23 / A33** | ❌ Non | Modèles économiques |
| **Galaxy Z Fold / Flip** | ✅ Oui | Tous les modèles |
| **Galaxy Note 20** | ✅ Oui | Tous les modèles |

**Comment vérifier sur Samsung :** Composez `*#06#` et cherchez un EID, ou ouvrez **Réglages > Connexions > Gestionnaire de carte SIM** et cherchez « Ajouter un eSIM » / « Ajouter un forfait mobile ». Si aucun n'est présent, votre variante manque de la fonctionnalité. Pour plus d'informations, consultez notre [guide de compatibilité eSIM Samsung](/faq/samsung-s20-esim-compatible/) et [Samsung Support](https://www.samsung.com/us/support/).

### Compatibilité eSIM Google Pixel

| Modèle | Prise en charge eSIM | Remarques |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Oui | Premier Pixel avec la fonctionnalité |
| **Pixel 3a / 3a XL** | ✅ Oui | – |
| **Pixel 4 / 4 XL** | ✅ Oui | – |
| **Pixel 4a** | ⚠️ Variable | Versions d'opérateurs japonais = NON |
| **Pixel 5 / 5a** | ✅ Oui | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Oui | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Oui | – |
| **Pixel 8 / 8 Pro** | ✅ Oui | – |

**Comment vérifier sur Pixel :** Composez `*#06#` pour l'EID, ou ouvrez **Réglages > Réseau et Internet > SIM** et cherchez « Télécharger une SIM à la place ? ». S'il est absent, la variante est verrouillée ou manque de la puce. Pour plus d'informations, consultez notre [guide de compatibilité eSIM Pixel](/faq/google-pixel-6-esim-compatible/) et la page [Google Support — eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887).

### Compatibilité eSIM OnePlus

OnePlus n'a ajouté l'eSIM qu'à partir de l'**OnePlus 12**. L'OnePlus 11, 10, 9 et la série Nord manquent du matériel.

| Modèle | Prise en charge eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Oui |
| **OnePlus 11** | ❌ Non |
| **OnePlus 10** | ❌ Non |
| **OnePlus 9** | ❌ Non |
| **Série OnePlus Nord** | ❌ Non (sauf certaines variantes UE) |

### Xiaomi, Huawei, Motorola et autres marques eSIM

- **Xiaomi** – les modèles phares (versions mondiales Xiaomi 12/13) peuvent prendre en charge l'eSIM, mais les unités chinoises domestiques non. La ligne Redmi Note n'a pas du tout d'eUICC.
- **Huawei** – la prise en charge est limitée à quelques modèles (P40, Mate 40 et plus récents) ; de nombreux téléphones post-2020 manquent d'eSIM en raison des sanctions américaines. Vérifiez **Réglages > Réseau mobile > eSIM** — si l'option est absente, elle n'est pas prise en charge.
- **Motorola** – la plupart des modèles économiques de la série G manquent de la puce ; le Moto G Power et la ligne Edge varient selon la région.

Le test universel pour chacun d'eux est le même : composez `*#06#` et cherchez l'EID.


## Vérification de la capacité eSIM : Android vs iPhone

Même vérification de 2 minutes, deux menus différents. Transmettez ce tableau à un ami sur l'autre plateforme.

| Vérification | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Composez `*#06#` | Composez `*#06#` | Composez `*#06#` |
| **Menu Ajouter un eSIM** | **Réglages > Cellulaire > Ajouter un eSIM** | **Réglages > Connexions > Gestionnaire de carte SIM > Ajouter un eSIM** | **Réglages > Réseau et Internet > SIM > Télécharger une SIM à la place ?** |
| **Numéro de modèle** | **Réglages > Général > Informations > Numéro de modèle** | **Réglages > À propos du téléphone > Numéro de modèle** | **Réglages > À propos du téléphone > Modèle** |
| **Statut de verrouillage** | **Réglages > Général > Informations > Verrouillage opérateur** | **Réglages > À propos du téléphone > État** | **Réglages > À propos du téléphone > État SIM** |

**La seule différence qui compte :** sur iPhone, la prise en charge de l'eSIM est tout ou rien selon la génération et la région — facile à prévoir. Sur Android, c'est par variante, donc deux téléphones Galaxy ou Pixel « identiques » peuvent se comporter différemment. En cas de doute sur Android, faites confiance à l'EID de `*#06#` plutôt qu'à la fiche technique.


## Votre téléphone prend en charge l'eSIM mais l'activation échoue

Si votre téléphone a passé la vérification matérielle ci-dessus et que vous voyez encore un message d'erreur spécifique, le problème n'est plus la compatibilité — c'est un problème d'activation ou de réseau. Ceux-ci ont leur propre référence dédiée :

- **« Échec de l'activation », « No Service », « QR invalide », « Cellular Plan Cannot Be Added », erreur de restauration 4013/4014, et toute autre erreur à l'écran** → consultez le [Guide de dépannage approfondi eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/), qui associe chaque message à une correction.
- **Paramètres APN et table APN complète des fournisseurs** → la référence APN canonique se trouve également dans le [Guide de dépannage approfondi eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Activation étape par étape (QR / manuelle / application opérateur)** → voir [Comment activer un eSIM](/faq/how-to-activate-an-esim/).
- **Déplacer un profil vers un nouveau téléphone** → voir [Comment transférer un eSIM entre iPhone et Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Configuration iPad et Apple Watch** → voir le [guide eSIM iPad et Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Questions fréquentes

**Pourquoi mon iPhone XR dit-il « eSIM non pris en charge » alors qu'il devrait fonctionner ?**
Si votre numéro de modèle se termine par CH/A, c'est une unité de Chine continentale sans puce eSIM. Sinon, vérifiez le statut de verrouillage opérateur — un XR verrouillé rejettera les profils d'autres fournisseurs.

**Puis-je forcer l'eSIM sur un iPhone 7 ?**
Non. L'iPhone 7 (et 6s, 8 et X) sont antérieurs à la puce eUICC. Aucun hack logiciel ne peut ajouter du matériel qui n'est pas là.

**Quelle est la différence entre EID et IMEI ?**
L'IMEI (15 chiffres) identifie le modèle de votre téléphone — chaque téléphone en a un. L'EID (32 chiffres) identifie la puce SIM intégrée — seuls les téléphones compatibles eSIM en ont un. Si `*#06#` n'affiche pas d'EID, votre téléphone ne peut pas utiliser l'eSIM.

**Que signifie « EID not found » lorsque je compose `*#06#` ?**
Cela signifie que votre téléphone manque de la puce matérielle eUICC requise pour les profils SIM numériques. C'est une limitation matérielle, pas quelque chose qu'une mise à jour logicielle peut corriger.

**Mon téléphone ne prend pas en charge l'eSIM — puis-je quand même utiliser un eSIM de voyage ?**
Non. Vous avez besoin de la puce intégrée, donc une SIM physique est votre seule option. De nombreux fournisseurs (y compris Roami) vendent également des cartes SIM physiques.

**Comment savoir si mon Samsung Galaxy a l'eSIM ?**
Composez `*#06#` — si un EID apparaît, il est pris en charge. Vous pouvez aussi vérifier Réglages > Connexions > Gestionnaire de carte SIM pour une option « Ajouter un eSIM ». Certaines variantes d'opérateurs américains et de la série A la masquent.

**L'OnePlus 11 prend-il en charge l'eSIM ?**
Non. OnePlus a ajouté l'eSIM à partir de l'OnePlus 12. Les 11, 10, 9 et la série Nord manquent du matériel.

**Comment vérifier si mon iPhone est verrouillé opérateur ?**
Réglages > Général > Informations > Verrouillage opérateur. « Aucune restriction SIM » signifie qu'il est débloqué. Tout autre chose signifie qu'il est verrouillé sur cet opérateur.

**Quels modèles d'iPad prennent en charge l'eSIM ?**
iPad Pro (3e génération et plus récents), iPad Air (3e génération et plus récents), iPad (10e génération et plus récents) et iPad mini (6e génération et plus récents) — modèles cellulaires uniquement. Les iPad Wi-Fi uniquement n'ont pas de matériel eSIM.

**Où puis-je trouver une liste de téléphones compatibles eSIM ?**
La [liste complète des téléphones compatibles eSIM (2026)](/compatibility/) couvre iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi et plus.

**Quelle est la différence entre un verrouillage de téléphone et un verrouillage opérateur ?**
Un verrouillage de téléphone (activation) est anti-vol — iCloud sur iPhone, Google FRP sur Android — et seul le propriétaire d'origine peut le supprimer. Un verrouillage opérateur est une restriction réseau que votre opérateur lève gratuitement une fois le téléphone payé et éligible.

**Pourquoi les téléphones chinois n'ont-ils pas d'eSIM ?**
La Chine continentale exige que les téléphones domestiques soient certifiés pour la double SIM physique, donc Apple et les marques Android livrent les unités chinoises avec deux emplacements nano-SIM et sans puce eUICC. C'est du matériel — il ne peut pas être activé plus tard.

**Puis-je ajouter un eSIM à un téléphone qui n'a pas d'EID ?**
Non. La puce eUICC est soudée à la carte mère. Il n'y a pas d'adaptateur, d'application, de jailbreak ou de mise à jour logicielle qui ajoute du matériel qui n'a jamais été installé.

**Une réinitialisation d'usine corrige-t-elle « eSIM non pris en charge » ?**
Non. Une réinitialisation ne change pas le matériel et ne supprime pas un verrouillage opérateur. Elle peut, cependant, effacer un profil corrompu à moitié installé, donc cela vaut la peine d'essayer pour les bugs logiciels — après sauvegarde.

**À quoi sert l'EID lorsqu'un fournisseur le demande ?**
L'EID permet à votre fournisseur de lier un profil eSIM spécifique à la puce de votre téléphone avant que vous ne scanniez. C'est ainsi qu'ils savent que le forfait est destiné à votre appareil exact — pensez-y comme à l'« adresse » de l'eSIM.

**Comment savoir si mon téléphone est débloqué sans insérer de SIM ?**
iPhone : Réglages > Général > Informations > Verrouillage opérateur — « Aucune restriction SIM » signifie débloqué. Android : Réglages > À propos du téléphone > État (ou état SIM) et cherchez la formulation « SIM verrouillée » ou « SIM non verrouillée ».

👉 **Vous avez confirmé que votre téléphone est capable ?** Procurez-vous un [eSIM pour les États-Unis](/united-states-esim/) ou un [eSIM pour le Japon](/japan-esim/) pour vous connecter.


## Testez votre compatibilité avec un eSIM gratuit

Le moyen le plus rapide de confirmer que votre téléphone peut réellement utiliser l'eSIM est d'installer un **eSIM d'essai gratuit**. Cela ne coûte rien, prend 2 minutes, et s'il s'installe et se connecte, votre matériel est prêt.

👉 [**Obtenez votre eSIM Roami gratuit maintenant**](/free-esim/)

---

*Si votre appareil spécifique ou votre erreur n'est pas couvert ici, contactez-nous et nous vous aiderons à confirmer si votre téléphone est compatible eSIM.*
## Sources

- [GSMA — spécification eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Assistance Apple — Configurer l'eSIM sur iPhone](https://support.apple.com/en-us/HT212780)
- [Assistance Google — Configurer un eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Assistance Google — eSIM sur Android](https://support.google.com/android/answer/11241215)