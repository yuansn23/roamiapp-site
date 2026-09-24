---
title: "Double eSIM ne fonctionne pas ? 12 correctifs iPhone"
h1_title: "Comment corriger le double eSIM qui ne fonctionne pas sur iPhone : 12 solutions"
description: "Double eSIM ne fonctionne pas ? Corrigez 12 problèmes iPhone : routage des appels, configuration VoLTE, décharge de la batterie et vérifications de verrouillage opérateur pour iPhone 16 et iOS 18."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["double eSIM ne fonctionne pas", "iPhone double SIM pas de service", "problème de signal double eSIM", "verrouillage opérateur eSIM", "dépannage double eSIM", "échec d'activation double eSIM", "iOS 18 eSIM", "paramètres APN eSIM", "code de confirmation eSIM", "double eSIM pas de service"]
date: 2026-09-12T00:00:00Z
lastmod: 2026-09-12T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Dépannage", "Configuration voyage"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
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
    - name: "eSIM USA"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Allemagne"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turquie"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japon"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "Chine"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
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

# Sidebar: Popular questions
sidebar_questions:
  title: "Questions populaires"
  items:
    - question: "Qu'est-ce que l'activation eSIM et comment ça marche ?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Comment activer un eSIM ?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Comment activer un eSIM sur iPhone (tous modèles) ?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Dernière liste de compatibilité eSIM"
      url: "/compatibility/"
---


> **Note de l'éditeur :** Un double eSIM qui perd une ligne est presque toujours dû à un verrouillage opérateur, un APN mal configuré ou un paramètre double SIM — pas à un forfait mort. Chaque correctif ci-dessous suit la documentation officielle Apple et les normes GSMA et cible un symptôme spécifique. Parcourez le tableau de diagnostic pour trouver le correctif exact de votre erreur.
> 
> **Points clés :** VoLTE ou les limites de forfait sont la raison la plus courante pour laquelle une ligne ne peut pas passer ou recevoir d'appels. Les problèmes de routage des appels entrants sont souvent résolus en désactivant puis réactivant Wi‑Fi Calling. Les iPhone sont en double veille, pas en double actif – « Pas de service » sur l'autre ligne pendant les appels est normal. Vérifiez le verrouillage opérateur dans Réglages (`Aucune restriction SIM`) si vous ne pouvez pas ajouter un second eSIM. La décharge de la batterie en double eSIM peut être réduite en désactivant la 5G sur la ligne au signal le plus faible.

La plupart des problèmes de double eSIM sur l'iPhone remontent à cinq causes : un verrouillage opérateur, une limite de forfait ou VoLTE, des paramètres d'itinérance des données ou de ligne par défaut, un comportement normal de double veille qui ressemble à une panne, ou un bug iOS qu'une réinitialisation des réglages efface. Faites correspondre votre symptôme dans l'index ci-dessous et appliquez le correctif correspondant — la plupart prennent moins de cinq minutes.


## Comment corriger le double eSIM qui ne fonctionne pas

**Votre téléphone a des problèmes de double eSIM. Lequel est-ce ?**

| Votre symptôme | Aller au correctif |
|--------------|-------------|
| **Le second eSIM affiche « Pas de service »** mais le premier fonctionne | [Correctif #2](#why-one-dual-esim-line-shows-no-service) |
| **Peut appeler mais NE PEUT PAS recevoir d'appels** | [Correctif #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Pendant un appel, l'autre ligne affiche « Pas de service »** | [Correctif #4](#one-line-showing-no-service-during-a-call-is-normal) – c'est normal ! |
| **Impossible d'ajouter un second eSIM – erreur « Verrouillage opérateur »** | [Correctif #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **La batterie se décharge plus vite avec deux lignes** | [Correctif #6](#how-to-reduce-dual-esim-battery-drain) |
| **SIM physique non reconnue** | [Correctif #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **iPhone de Chine – aucune option eSIM** | [Correctif #8](#dual-esim-in-china-hong-kong-and-macau) – limitation matérielle |
| **Les données fonctionnent mais pas Internet (problème APN)** | [Correctif #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – configuration APN |
| **eSIM supprimé par accident** | [FAQ #9](#frequently-asked-questions) – dépend du fournisseur |
| **Pas sûr – autre chose** | [Tableau de dépannage complet](#dual-esim-troubleshooting-table) |

> 💡 **Information clé :** Si vous utilisez **deux lignes sur un iPhone**, les iPhone sont **en double veille, pas en double actif** – lorsque vous êtes en appel, l'autre ligne affichera temporairement « Pas de service ». C'est un **comportement normal** (voir Correctif #4). Ne perdez pas de temps à essayer de « corriger » cela.

Si vos problèmes de double SIM remontent à une installation ratée, commencez par le [guide général d'activation eSIM](/faq/how-to-activate-an-esim/), puis parcourez les correctifs ci-dessous — et pour tout message d'erreur que cette page ne nomme pas, le [Guide de dépannage approfondi eSIM](/faq/esim-deep-troubleshooting-guide-2026/) couvre chaque cas en profondeur.


## Guide complet de dépannage du double eSIM

Voici le chemin que la plupart des utilisateurs iPhone suivent lorsque le double eSIM ne fonctionne pas. Utilisez-le pour suivre où vous en êtes.

| Étape | Ce qui se passe | Que faire | Où le trouver |
| :--- | :--- | :--- | :--- |
| **1. Identifiez le symptôme** | « Mon second eSIM n'a pas de signal. » / « Je ne peux pas recevoir d'appels. » / « La batterie se décharge vite. » | Faites correspondre votre symptôme au tableau de diagnostic rapide ci-dessus. | [Diagnostic rapide en 10 secondes](#dual-esim-quick-diagnostic-index) |
| **2. Vérifiez si c'est un comportement normal** | « Pendant un appel, mon autre ligne affiche Pas de service. » | C'est **normal** pour les iPhone en double veille. Passez au Correctif #4. | [Correctif #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Écartez le verrouillage opérateur** | « Je ne peux pas du tout ajouter un second eSIM. » | Vérifiez le verrouillage opérateur dans Réglages. Doit indiquer « Aucune restriction SIM ». | [Correctif #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Appliquez le correctif** | Suivez le correctif spécifique à votre symptôme. | L'un des 12 correctifs ci-dessous résoudra votre problème. | [Correctifs #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. Toujours pas résolu ?** | « Aucun correctif n'a fonctionné. » | Utilisez les options de repli dans le tableau de dépannage. | [Tableau de dépannage](#dual-esim-troubleshooting-table) |


## Index de diagnostic rapide du double eSIM

| Symptôme | Cause la plus probable | Section de correctif |
|---------|-------------------|--------------|
| Le second eSIM affiche « Pas de service » mais le premier fonctionne | Problème VoLTE ou d'ordre des lignes | [#2](#why-one-dual-esim-line-shows-no-service) |
| Un numéro peut appeler mais ne peut pas recevoir d'appels | Incompatibilité de routage des appels entrants | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Pendant un appel, l'autre ligne affiche « Pas de service » | iPhone utilise un seul réseau de données à la fois (normal) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| Impossible d'ajouter un second eSIM – erreur « Verrouillage opérateur » | Appareil verrouillé sur le premier opérateur | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| Le double eSIM fonctionne mais décharge plus vite la batterie | Les deux lignes cherchent activement | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + SIM physique : la SIM physique n'est pas reconnue | Problème de tiroir SIM ou carte incompatible | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| Les données affichent des barres de signal mais pas Internet | Paramètres APN manquants ou incorrects | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## Quelles sont vos options de double eSIM sur iPhone ?

À partir de l'iPhone XS, XR et tous les modèles plus récents (y compris iPhone 16), Apple prend en charge le double eSIM (deux eSIM actifs simultanément) sur iPhone 13 et versions ultérieures. Les modèles non américains prennent également en charge un eSIM plus une nano‑SIM physique. Les modèles double SIM physique de Chine continentale n'ont aucune prise en charge eSIM, sauf l'iPhone 16.

Votre configuration **double eSIM** dépend de votre modèle d'iPhone et de votre région :

| Configuration | Modèles pris en charge | Max de lignes actives |
|---------------|------------------|------------------|
| **Double eSIM** | iPhone 13 et versions ultérieures (y compris tous les modèles iPhone 16) | 2 |
| **1 eSIM + 1 nano‑SIM physique** | Tous les iPhone avec tiroir SIM (modèles non américains, et modèles américains avant iPhone 14) | 2 |
| **1 SIM physique uniquement** | iPhone plus anciens (avant XS) | 1 |
| **2 SIM physiques** | Modèles spécifiques double tiroir SIM de Chine continentale, Hong Kong, Macao (ex. iPhone 16 version chinoise) | 2 |

Pour une liste complète des iPhone compatibles, [vérifiez la compatibilité double eSIM de votre iPhone](/compatibility/).


## Pourquoi une ligne double eSIM affiche « Pas de service »

Si l'une de vos lignes double eSIM peut utiliser les données mais ne peut pas passer ou recevoir d'appels — **ou affiche « Pas de service » entièrement** — les causes les plus courantes en 2026 sont :

- **VoLTE / VoNR n'est pas activé** pour cette ligne. Certains opérateurs désactivent la voix sur données en itinérance sur les forfaits eSIM, ce qui laisse la ligne en données uniquement. (Moyen simple de vérifier : si vous pouvez utiliser les données mais pas appeler, c'est probablement le problème.)
- **Ordre des lignes**. iOS route la voix vers votre *ligne vocale par défaut* ; une ligne secondaire définie en données uniquement ne peut pas passer ou recevoir d'appels.
- **Le forfait n'inclut pas la voix**. Certains eSIM de voyage sont en données uniquement par conception et n'ont aucun service vocal. Dans ce cas, vous verrez des barres de signal mais toute tentative d'appel échouera.

> **Remarque :** Les anciens réseaux 3G/CDMA ont été retirés aux États-Unis et au Japon. Verizon et US Cellular ont fermé CDMA en 2022-2024, et au/KDDI a mis fin à la 3G en 2022. En 2026, une ligne « sans service vocal » est presque toujours un problème de VoLTE, de forfait ou d'ordre des lignes - pas de CDMA.

### Correctifs
- **Définissez la ligne affectée comme ligne vocale par défaut** : `Réglages > Cellulaire > Ligne vocale par défaut`.
- **Activez VoLTE** : `Réglages > Cellulaire > [ligne] > Voix et données`, puis sélectionnez LTE ou 5G (VoLTE/VoNR).
- **Confirmez que le forfait inclut la voix**. S'il s'agit d'un eSIM de voyage en données uniquement, gardez votre ligne d'origine comme ligne vocale et utilisez l'eSIM pour les données uniquement.
- **Contactez votre opérateur** pour vérifier que la voix sur LTE/5G est activée pour votre numéro en itinérance.

Pour une comparaison plus approfondie des réseaux américains, consultez notre **comparaison des réseaux d'opérateurs américains** dans le [guide des forfaits eSIM USA](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/).


## Une ligne double eSIM qui ne peut pas recevoir d'appels

**Symptôme** : La ligne A fonctionne bien. La ligne B peut passer des appels sortants, mais les appels entrants vers B vont directement à la messagerie vocale ou sonnent comme « indisponible ».

**Cause racine** : Une incompatibilité de routage des appels réseau. Lorsque la ligne B est récemment passée de la 5G à la LTE, ou a utilisé Wi-Fi Calling, le réseau de l'opérateur peut encore essayer de router les appels entrants par le mauvais chemin.

**Analogie :** Imaginez que l'opérateur ait un vieux carnet d'adresses qui liste encore votre téléphone à votre ancienne maison. Quand quelqu'un appelle, il va au mauvais endroit. Le basculement de Wi‑Fi Calling met à jour le carnet d'adresses.

### Correctif rapide sur votre téléphone
1. Désactivez temporairement **Wi‑Fi Calling** : `Réglages > Cellulaire > Ligne B > Wi‑Fi Calling` → OFF.
2. Redémarrez l'iPhone.
3. Réactivez Wi‑Fi Calling.

### Correctif opérateur en appelant le support
Demandez à votre opérateur de **réinitialiser le routage des appels** ou de **rafraîchir la ligne** pour ce numéro. Cela prend généralement effet peu après que l'opérateur reprovisionne la ligne. Pour plus de problèmes de routage et d'autres problèmes liés aux appels, voir **[Correctif 3 ci-dessus](#a-dual-esim-line-that-cannot-receive-calls)**.

### Prévenir la récurrence
- Évitez de basculer rapidement entre 5G/LTE (gardez un mode pendant au moins quelques heures).
- Si vous voyagez fréquemment, gardez **Itinérance des données** OFF pour la ligne qui n'a pas besoin de données.


## Une ligne affichant « Pas de service » pendant un appel est normal

**Symptôme** : Vous êtes en appel sur la ligne A. Quand vous vérifiez, la ligne B affiche « Pas de service ».

**Explication** : Les iPhone sont **en double veille, pas en double actif** (aussi appelé DSDS – Dual SIM Dual Standby). Une seule ligne peut maintenir une connexion cellulaire à la fois. Pendant un appel, l'autre ligne est temporairement injoignable. Dès que l'appel se termine, les deux lignes se reconnectent. Ce **n'est pas une défaillance du double eSIM** – c'est par conception.

### Ce que vous pouvez faire
- **Activez Wi‑Fi Calling sur les deux lignes** – la ligne inactive peut alors utiliser le Wi‑Fi pour recevoir des appels pendant que vous êtes sur l'autre ligne. La [documentation Apple sur la double veille](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) explique cela plus en détail.
- **Activez « Autoriser le basculement des données cellulaires »** – sous `Réglages > Cellulaire > Données cellulaires`. Cela permet à la ligne non-données d'utiliser la connexion de la ligne de données pour Wi‑Fi Calling.

> 📌 Remarque : Certains opérateurs ne prennent pas en charge Wi‑Fi Calling simultanément sur les deux lignes. Vérifiez avec votre opérateur.


## Double eSIM ne fonctionne pas sur un téléphone verrouillé opérateur

Si vous ne pouvez pas ajouter un second eSIM ou une SIM physique :
- Votre iPhone est peut-être **verrouillé opérateur** sur le premier opérateur.
- Pour vérifier : `Réglages > Général > Informations` → faites défiler jusqu'à **Verrouillage opérateur**. Il doit indiquer « Aucune restriction SIM ».

### Que faire si votre téléphone est verrouillé
- Contactez votre opérateur pour demander un déverrouillage. Les opérateurs américains doivent déverrouiller après le paiement de l'appareil.
- Si déverrouillé mais ne fonctionne toujours pas, vous devrez peut-être réinitialiser les réglages réseau : `Réglages > Général > Transférer ou réinitialiser l'iPhone > Réinitialiser > Réinitialiser les réglages réseau`. (Attention : cela oublie les mots de passe Wi‑Fi.)

Une fois déverrouillé, vous pouvez également déplacer votre eSIM entre iPhone et Android – voir notre **[guide de transfert eSIM multiplateforme 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** pour des instructions étape par étape.


## Comment réduire la décharge de la batterie en double eSIM

Utiliser **deux eSIM** ou même eSIM + SIM physique peut augmenter la consommation de la batterie car les deux lignes restent activement connectées au réseau. Voici comment minimiser la décharge tout en gardant les deux lignes actives :

| Stratégie | Effet |
|----------|--------|
| Réglez la ligne au signal le plus faible sur **LTE uniquement** (pas 5G) | Économie modérée |
| Désactivez **Itinérance des données** sur la ligne non utilisée pour les données | Évite le balayage |
| Désactivez **5G Standalone** (si votre opérateur le permet) | Aide beaucoup |
| Utilisez le **mode Données cellulaires réduites** pour les applis en arrière-plan sur la ligne secondaire | Économie mineure |
| Dans les zones à très faible signal, désactivez temporairement la ligne secondaire | Économie significative |

Pour désactiver une ligne : `Réglages > Cellulaire` → touchez la ligne → désactivez **Activer cette ligne**. Si vous voyagez fréquemment à l'étranger, [essayez l'essai eSIM gratuit de Roami](/free-esim/) comme alternative économe en batterie.


## Conflits entre eSIM et SIM physique et problèmes de tiroir

**Symptôme** : Votre nano‑SIM fonctionne dans un autre téléphone mais pas dans votre iPhone. Ou, votre eSIM fonctionne bien mais la SIM physique n'est pas reconnue lorsque les deux sont installées.

**Causes courantes** :
- L'iPhone est **verrouillé opérateur** sur un autre réseau.
- Tiroir SIM pas complètement inséré ou endommagé.
- Carte SIM **trop ancienne** (pré-4G) ou pliée.
- **Conflit de SIM physique** : Sur certains iPhone, l'insertion d'une SIM physique peut temporairement désactiver l'emplacement eSIM si l'appareil est verrouillé opérateur.

**Correctifs** :
1. Retirez le tiroir, nettoyez les contacts avec un chiffon doux.
2. Réinsérez fermement jusqu'au clic.
3. Redémarrez l'iPhone.
4. Si toujours non reconnue, essayez la SIM dans un autre téléphone – si elle fonctionne, le lecteur SIM de votre iPhone peut être défectueux.
5. Remplacez la carte SIM en boutique opérateur (gratuit pour la plupart des forfaits postpayés).

> **Si votre eSIM disparaît après l'insertion d'une SIM physique :** Certains iPhone verrouillés opérateur désactivent l'emplacement eSIM lorsqu'une SIM physique d'un autre opérateur est insérée. Retirez la SIM physique, redémarrez, et votre eSIM devrait réapparaître. Contactez ensuite votre opérateur pour déverrouiller l'appareil.

Si vous prévoyez de passer entièrement à l'eSIM, référez-vous à notre **[guide eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** pour les méthodes d'activation.


## Double eSIM en Chine, Hong Kong et Macao

Les iPhone de Chine continentale (sauf iPhone 16) ont deux emplacements nano‑SIM physiques et **aucune prise en charge eSIM**. Les modèles de Hong Kong et Macao prennent généralement en charge eSIM + SIM physique. Si vous achetez un iPhone double SIM physique de Chine continentale, vous ne pouvez installer aucun eSIM, y compris les eSIM de voyage internationaux – c'est une limitation matérielle.

Apple vend des modèles spécifiques double SIM physique en **Chine continentale** :
- iPhone 16, 17 Pro, 17 Pro Max : **deux emplacements nano‑SIM physiques** (pas d'eSIM sauf Air).
- iPhone 16 : **eSIM uniquement** (mondial, y compris Chine).

Modèles **Hong Kong et Macao** :
- Prennent en charge **eSIM + SIM physique** (comme les modèles internationaux) ou double SIM physique selon le modèle.
- Vérifiez toujours avant d'acheter si vous prévoyez d'utiliser des forfaits eSIM de voyage.

> ⚠️ **Important** : Si vous achetez un iPhone double SIM physique de Chine continentale, vous **ne pouvez installer aucun eSIM** (y compris les eSIM de voyage internationaux) – sauf l'iPhone 16. C'est une limitation matérielle, pas un blocage logiciel.


## Double eSIM pour lignes professionnelle et personnelle

De nombreux utilisateurs gardent un **numéro professionnel** (eSIM) et un **numéro personnel** (second eSIM ou SIM physique). Voici comment configurer proprement votre **double eSIM** :

### Étiquetez clairement les lignes
`Réglages > Cellulaire` → touchez une ligne → `Étiquette du forfait cellulaire` → choisissez « Professionnel » ou « Personnel », ou créez une étiquette personnalisée.

### Choisissez la voix et les données par défaut
- **Ligne vocale par défaut** : Quelle ligne utiliser lorsque vous composez depuis l'appli Téléphone native (vous pouvez toujours choisir par appel).
- **Données cellulaires** : Quelle ligne utilise les données mobiles. Activez **Autoriser le basculement des données cellulaires** pour que le téléphone puisse temporairement utiliser les données de l'autre ligne si la principale perd le signal.

### Séparez les contacts
- Attribuez des contacts à une ligne spécifique : Modifier le contact → `Ligne préférée` → sélectionnez professionnel ou personnel.

### Évitez l'itinérance accidentelle
- Désactivez **Itinérance des données** pour la ligne professionnelle si elle a des tarifs internationaux coûteux.


## Tableau de dépannage du double eSIM

| Problème | Étape immédiate | Correctif à long terme | Si toujours pas résolu |
|---------|----------------|----------------|----------------------|
| Le second eSIM ne capte jamais de signal | Redémarrez l'iPhone, puis activez/désactivez la ligne | Confirmez que le forfait est actif et la ligne activée | Contactez l'opérateur pour reprovisionner l'eSIM |
| Les appels vont directement à la messagerie (pas de sonnerie) | Désactivez « Silence des appels inconnus » et le renvoi d'appel | Contactez l'opérateur pour réinitialiser le routage des appels | Réinitialisez les réglages réseau |
| Impossible de recevoir des SMS sur la seconde ligne | Envoyez un SMS test depuis cette ligne vers n'importe quel numéro | Assurez-vous que la ligne n'est pas données uniquement ; l'opérateur peut devoir activer les SMS | Utilisez l'appli opérateur pour resynchroniser la ligne |
| Deux eSIM mais les deux affichent « Pas de service » | Mode avion on/off > vérifiez le verrouillage opérateur | Restaurez les réglages réseau | Vérifiez si l'opérateur a une panne dans votre région |
| Lignes permutées et maintenant FaceTime/iMessage ne s'activent pas | Allez dans `Réglages > Messages > Envoi et réception` – sélectionnez manuellement les numéros | Déconnectez-vous d'Apple ID et reconnectez-vous | Contactez le support Apple |
| Les données affichent un signal mais pas Internet | Vérifiez les paramètres APN (voir Correctif #11) | Configurez l'APN manuellement | Contactez le fournisseur eSIM pour l'APN correct |
| eSIM supprimé accidentellement | Vérifiez si le fournisseur autorise le re-téléchargement | Contactez l'opérateur pour un nouveau QR code | eSIM de voyage : achetez un nouveau forfait |
| SIM physique insérée, eSIM disparaît | Téléphone verrouillé opérateur désactive l'eSIM avec une SIM étrangère | Retirez la SIM physique, redémarrez, l'eSIM réapparaît | Contactez l'opérateur pour déverrouiller l'appareil |


## Comment configurer les paramètres APN si votre eSIM n'a pas de données

**Symptôme** : Votre eSIM affiche toutes les barres de signal (ou « Pas de service ») mais vous n'avez pas de connexion Internet – les sites ne se chargent pas, les applis disent « pas de connexion ».

**Cause racine** : Le profil eSIM a été installé correctement, mais les paramètres du nom de point d'accès (APN) sont manquants ou incorrects. Certains fournisseurs eSIM configurent automatiquement l'APN ; d'autres nécessitent une saisie manuelle.

### Comment configurer l'APN sur iPhone

1. Allez dans **Réglages > Cellulaire**.
2. Touchez la ligne eSIM qui n'a pas de données.
3. Touchez **Réseau de données cellulaires** (si vous ne voyez pas cette option, l'APN est configuré automatiquement par votre opérateur – passez ce correctif).
4. Sous la section **Données cellulaires**, remplissez le champ **APN**.
5. Laissez **Nom d'utilisateur** et **Mot de passe** vides sauf indication contraire de votre fournisseur.
6. Revenez, basculez le mode avion on/off, et testez les données.

### Valeurs APN courantes pour les eSIM de voyage

| Fournisseur | APN | Nom d'utilisateur | Mot de passe |
|----------|-----|----------|----------|
| **Roami** | internet | (vide) | (vide) |
| **Airalo** | globaldata | (vide) | (vide) |
| **Holafly** | hola | (vide) | (vide) |
| **Nomad** | nbdata | (vide) | (vide) |
| **T‑Mobile (US)** | fast.t-mobile.com | (vide) | (vide) |
| **AT&T (US)** | nxgen | (vide) | (vide) |
| **Verizon (US)** | vzwinternet | (vide) | (vide) |
| **EE (UK)** | everywhere | (vide) | (vide) |
| **O2 (UK)** | mobile.o2.co.uk | web | web |
| **Vodafone (UK)** | internet | (vide) | (vide) |
| **Three (UK)** | three.co.uk | (vide) | (vide) |
| **Orange (France)** | orange.fr | (vide) | (vide) |

> **Si le champ APN est grisé :** Votre opérateur a verrouillé les paramètres APN. C'est courant avec les eSIM postpayés d'opérateurs (Verizon, T‑Mobile, AT&T). Contactez votre opérateur pour obtenir de l'aide – vous ne pouvez pas le modifier manuellement.

> **Si l'APN est correct mais toujours pas de données :** Redémarrez votre iPhone, basculez le mode avion, ou vérifiez si l'itinérance des données est activée (Réglages > Cellulaire > [ligne] > Itinérance des données ON).


## Conseils pro finaux pour les utilisateurs de double eSIM

- **Étiquetez vos lignes** immédiatement après la configuration – cela évite une confusion sans fin.
- **Définissez des sonneries différentes** pour chaque ligne : `Réglages > Sons et vibrations > Sonnerie` → faites défiler, vous pouvez attribuer par ligne.
- **Utilisez l'automatisation Raccourcis** pour changer la ligne vocale par défaut selon l'heure (ex. heures de travail = ligne pro ; soirées = personnelle).
- **Avant de vendre votre appareil** : Allez dans `Réglages > Cellulaire`, supprimez **tous** les eSIM, et retirez la SIM physique. Ensuite effacez tout le contenu et les réglages. Pour un guide détaillé de la suppression des eSIM et de l'annulation des forfaits, référez-vous au **[Correctif #15 dans notre guide de dépannage](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)**.


## Foire aux questions

**Q1 : Puis-je utiliser deux eSIM du même opérateur ?**  
Oui, tant que votre opérateur autorise plusieurs profils eSIM sur un seul compte. Par exemple, T‑Mobile US prend en charge jusqu'à deux eSIM sur le même iPhone.

**Q2 : Les deux lignes prendront-elles en charge la 5G simultanément ?**  
Oui, sur iPhone 13 et versions ultérieures (y compris iPhone 16), les deux lignes peuvent être en 5G (double veille 5G). Cependant, une seule ligne peut utiliser les données 5G à la fois ; l'autre utilise la 5G pour la voix de secours (VoNR).

**Q3 : Ma seconde ligne fonctionne mais la première a cessé de fonctionner après l'avoir ajoutée – que s'est-il passé ?**  
Vous avez peut-être accidentellement inversé les réglages de la ligne principale. Allez dans `Réglages > Cellulaire > Ligne vocale par défaut` et remettez-la.

**Q4 : Le double eSIM décharge-t-il plus la batterie que eSIM + SIM physique ?**  
Généralement, le double eSIM consomme légèrement moins d'énergie car il n'y a pas de lecteur de carte physique. Mais la différence est négligeable (dans les 2‑3%).

**Q5 : Je voyage – puis-je utiliser un eSIM local pour les données et garder mon eSIM d'origine pour les appels ?**  
Oui, meilleure pratique :  
- Définissez l'eSIM local comme ligne **Données cellulaires**.  
- Gardez l'eSIM d'origine comme **Ligne vocale par défaut**.  
- Désactivez **Itinérance des données** sur l'eSIM d'origine pour éviter des frais massifs.  
- Activez **Autoriser le basculement des données cellulaires** pour que votre ligne d'origine puisse utiliser les données de l'eSIM local pour Wi‑Fi Calling et MMS.

Si vous changez fréquemment d'appareil en voyage, le **[guide de transfert eSIM multiplateforme](/faq/how-to-transfer-esim-between-iphone-and-android/)** vous aidera à déplacer votre numéro en toute transparence.

**Q6 : Pourquoi le second eSIM disparaît-il parfois après une mise à jour iOS ?**  
Bug rare. Allez dans `Réglages > Cellulaire` → si la ligne est manquante mais apparaît toujours sous « SIM disponibles », touchez-la et réactivez-la. Sinon, contactez l'opérateur pour repousser le profil.

**Q7 : Puis-je utiliser une configuration double SIM avec une Apple Watch ?**  
Oui. L'Apple Watch peut refléter **une** des lignes de l'iPhone. Choisissez quelle ligne vous voulez sur la montre lors de la configuration. Notez que la montre ne peut pas utiliser les deux lignes simultanément – elle ne reflète que la ligne sélectionnée.

**Q8 : Où puis-je trouver la documentation officielle Apple pour le double eSIM ?**  
Apple fournit deux ressources clés : [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) et [Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086). Elles couvrent la compatibilité de base et la configuration.

**Q9 : Comment récupérer un eSIM supprimé ?**  
Si vous avez supprimé un profil eSIM, la récupération dépend de votre opérateur. Pour les eSIM de voyage (Roami, Airalo, etc.), la suppression est généralement permanente – vous devrez acheter un nouveau forfait. Pour les eSIM postpayés d'opérateurs (comme Verizon, T‑Mobile, AT&T), contactez votre opérateur – ils peuvent souvent réémettre un nouveau QR code. Gardez toujours une sauvegarde de votre e-mail d'activation original et du QR code.

**Q10 : Pourquoi mon eSIM a des barres de signal mais pas de connexion de données ?**  
C'est presque toujours un problème d'APN. Voir Correctif #11 ci-dessus pour la configuration étape par étape.

**Q11 : Que signifie « code de confirmation eSIM » et où le trouver ?**  
Certains profils eSIM nécessitent un code de confirmation (4‑8 chiffres) lors de l'activation. Cherchez-le dans l'e-mail de votre opérateur ou les instructions d'activation. S'il n'est pas trouvé, contactez votre opérateur.

**Q12 : Puis-je avoir deux eSIM actifs plus une SIM physique sur iPhone ?**  
Non. L'iPhone prend en charge un maximum de **deux lignes actives** à la fois – soit deux eSIM, soit un eSIM + une SIM physique. Vous ne pouvez pas avoir trois lignes actives simultanément.

**Q13 : Mon double eSIM 5G ne fonctionne pas sur une ligne – que dois-je vérifier ?**  
D'abord, assurez-vous que la 5G est activée pour les deux lignes : Réglages > Cellulaire > [ligne] > Voix et données > sélectionnez 5G Auto ou 5G Activé. Si une ligne affiche toujours LTE uniquement, vérifiez avec votre opérateur – certains opérateurs limitent la 5G à la ligne de données principale uniquement.

**Q14 : J'ai inséré une SIM physique et mon eSIM a disparu – comment le récupérer ?**  
C'est un comportement connu sur les iPhone verrouillés opérateur. Retirez la SIM physique, redémarrez votre iPhone, et l'eSIM devrait réapparaître dans Réglages > Cellulaire. Contactez ensuite votre opérateur pour déverrouiller votre appareil afin que les deux puissent fonctionner simultanément.

👉 **Vous configurez un double eSIM pour voyager ?** Parcourez les [forfaits eSIM pour les USA](/united-states-esim/) ou [eSIM pour le Japon](/japan-esim/) — les deux prennent en charge le double eSIM sur les iPhone modernes.

---

*Basé sur la documentation officielle Apple, les normes GSMA et les tests d'opérateurs en septembre 2026.*
## Sources

- [GSMA — spécification eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Apple Support — About eSIM on iPhone](https://support.apple.com/en-us/HT209044)