---
title: "Qu'est-ce que l'activation d'eSIM et comment ça marche ?"
h1_title: "Qu'est-ce que l'activation d'eSIM et comment ça marche ?"
description: "Qu'est-ce que l'activation d'eSIM ? Une explication étape par étape couvrant les vérifications de compatibilité, le scan QR et les erreurs courantes sur iPhone et Android."
keywords: ["what is eSIM activation", "how does eSIM activation work", "eSIM activation process", "how to check esim compatibility", "does my phone support esim", "eSIM compatibility check", "eSIM activation meaning", "Android eSIM", "eSIM QR code", "travel eSIM"]
date: 2026-09-11T00:00:00Z
lastmod: 2026-09-11T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup", "Compatibility"]
toc: true
image: "/img/faq/esim-activation-how-it-works.webp"
image-1: "/img/faq/esim-activation-how-it-works-1.jpg"
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
    - question: "Qu'est-ce que l'activation d'eSIM et comment ça marche ?"
      url: "faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Comment activer un eSIM ?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Comment activer l'eSIM sur iPhone (tous les modèles) ?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Dernière liste de compatibilité eSIM"
      url: "/compatibility/"
---


> **Note de l'éditeur :** L'activation d'eSIM signifie télécharger un profil d'opérateur sur votre téléphone via Internet — par QR code, application opérateur ou saisie manuelle SM-DP+ — au lieu d'insérer une SIM physique. Ce guide suit la documentation officielle d'Apple et d'Android ainsi que les normes GSMA. À la fin, vous saurez quelle méthode d'activation utilise votre téléphone et comment la mener à bien.

L'activation d'eSIM est le processus de téléchargement d'un profil d'opérateur sur la puce SIM intégrée de votre téléphone — depuis le serveur SM-DP+ de l'opérateur, généralement en scannant un QR code, en saisissant les détails manuellement ou en installant via l'application de l'opérateur. Cela prend deux à cinq minutes, nécessite une connexion Wi-Fi, et cette page explique chaque méthode ainsi que les erreurs qui peuvent l'interrompre.

## Que signifie l'activation d'eSIM ?

**Qu'est-ce que c'est ?** Un téléchargement de SIM numérique qui connecte votre téléphone à un réseau mobile en moins de 2 minutes – aucune carte plastique nécessaire.

**Comment fonctionne le processus ?**
- Vous scannez un QR code (ou utilisez une application opérateur)
- Votre téléphone télécharge un profil numérique depuis le serveur sécurisé de l'opérateur
- Votre téléphone se connecte instantanément au réseau local

**Votre téléphone le prend-il en charge ?** Composez `*#06#` – si vous voyez un EID à 32 chiffres, oui. Si seuls des numéros IMEI apparaissent, non.

**De quoi avez-vous besoin ?** Une connexion Wi‑Fi stable + un forfait eSIM (QR code ou application)

**Combien de temps cela prend-il au total ?** Scan QR : ~1-2 minutes. Première connexion réseau : jusqu'à 10-15 minutes.

> 💡 **Exigence clé :** Vous DEVEZ avoir une connexion Internet active (Wi‑Fi) pour terminer la configuration. Cela ne peut pas être fait hors ligne. C'est une exigence absolue – le profil doit être téléchargé depuis le serveur de l'opérateur.

**Vous n'êtes pas sûr que votre téléphone soit compatible ?** Pour la liste complète des appareils compatibles avec les SIM numériques, consultez notre **[liste complète de compatibilité](/compatibility/)**.

**Vous voulez tester le processus sans payer ?** Procurez-vous un **[eSIM Roami d'essai gratuit](/free-esim/)** – cela prend 2 minutes et confirme que tout fonctionne sur votre téléphone.


## Quelle méthode d'activation d'eSIM devriez-vous utiliser ?

Toutes les activations ne sont pas identiques. Choisissez votre scénario ci-dessous pour trouver la bonne approche.

| Votre situation | Meilleure méthode | Ce dont vous aurez besoin |
| :--- | :--- | :--- |
| **Vous avez acheté un forfait de voyage en ligne** (Roami, Airalo, Holafly, etc.) | Scan du QR code | QR code envoyé par e-mail + connexion Wi‑Fi |
| **Votre opérateur vous a envoyé un QR code** | Scan du QR code | QR code de l'opérateur + connexion Wi‑Fi |
| **Votre opérateur propose une application** (T‑Mobile, Verizon, Orange, etc.) | Push via l'application opérateur | Application opérateur installée + connexion au compte |
| **Votre caméra est cassée ou vous ne pouvez pas scanner** | Saisie manuelle | Adresse SM‑DP+ + code d'activation (de l'e-mail) + code de confirmation (si requis) |
| **Vous passez d'un ancien téléphone** | Transfert depuis un appareil à proximité | Les deux téléphones à proximité + Bluetooth ACTIVÉ + Wi‑Fi ACTIVÉ |
| **Vous utilisez un forfait opérateur postpayé** | Application opérateur ou visite en magasin | Identifiants de compte + parfois vérification d'identité en magasin |


## Guide complet de l'activation d'eSIM

Voici le parcours étape par étape pour toute personne qui traverse ce processus pour la première fois.

| Étape | Ce que vous pensez | Que faire | Estimation du temps |
| :--- | :--- | :--- | :--- |
| **1. Compréhension** | « Qu'est-ce que c'est au juste, et pourquoi devrais-je m'en soucier ? » | Apprenez les bases – une SIM numérique que vous configurez en ligne sans carte physique. | 5 minutes |
| **2. Vérification de la compatibilité** | « Mon téléphone le prend-il seulement en charge ? » | Composez `*#06#` pour vérifier un numéro EID. Ou procurez-vous un essai gratuit pour tester. | 1 minute |
| **3. Achat d'un forfait** | « Quel forfait devrais-je prendre, et où l'acheter ? » | Choisissez un forfait de voyage (pour les voyages) ou un forfait opérateur local (pour les longs séjours). | 5-10 minutes |
| **4. Activation** | « J'ai le QR code – et maintenant ? » | Allez dans Réglages > Cellulaire > Ajouter un eSIM, scannez le QR code et attendez. | 2 minutes |
| **5. Première connexion** | « Il est marqué activé mais je n'ai pas de signal – y a-t-il un problème ? » | Attendez jusqu'à 10-15 minutes que le téléphone trouve les tours locales. Activez l'itinérance des données. | Jusqu'à 15 minutes |
| **6. Dépannage** | « Ça ne fonctionne toujours pas – que faire ? » | Vérifiez le Wi‑Fi, l'itinérance des données, les paramètres APN ou le statut de verrouillage opérateur. | 5-10 minutes |
| **7. Utilisation de votre forfait** | « Je suis connecté – comment gérer les données et les paramètres ? » | Définissez votre nouvelle ligne par défaut pour les données, gardez votre SIM physique pour les appels (double SIM). | N/A |

**Temps total du début à la connexion :** Généralement 10-15 minutes. Prévoyez jusqu'à 30 minutes si vous rencontrez des problèmes.


## Qu'est-ce qu'un eSIM ?

Un eSIM (Embedded Subscriber Identity Module) est une puce minuscule et programmable soudée en permanence à la carte mère de votre téléphone lors de la fabrication. Elle fait exactement le même travail qu'une carte SIM plastique traditionnelle – prouver votre identité à un réseau mobile – mais elle est 100 % numérique.

Parce qu'elle est réinscriptible, vous pouvez changer d'opérateur ou ajouter des forfaits de données sans jamais avoir à éjecter un tiroir SIM ni attendre qu'une carte physique arrive par la poste. La technologie est régie par la [norme GSMA SGP.22](https://www.gsma.com/esim/), garantissant l'interopérabilité mondiale entre appareils et opérateurs. La [page de support officielle d'Apple pour l'eSIM](https://support.apple.com/en-us/HT212780) fournit des informations détaillées sur les modèles d'iPhone compatibles, et la [page de support officielle d'Android pour l'eSIM](https://support.google.com/android/answer/11241215) couvre les appareils Android.

**Pensez-y ainsi :** Une SIM physique est comme une clé en plastique que vous transportez. Un eSIM est comme une clé numérique qui vit dans votre téléphone – vous pouvez recevoir une nouvelle clé électroniquement sans jamais visiter un serrurier.


## Comment fonctionne l'activation d'eSIM ?

Quand vous achetez une SIM physique, les données réseau sont déjà gravées sur la puce. Avec un eSIM, la puce dans votre téléphone est initialement vide. Le processus d'activation consiste simplement à remplir cette puce vide avec les données de votre opérateur.

Voici ce qui se passe en coulisses :

- **Le serveur SM-DP+ :** Votre opérateur stocke votre profil numérique unique sur un serveur sécurisé appelé le SM-DP+ (Subscription Manager Data Preparation). Considérez-le comme un entrepôt numérique où votre profil réside jusqu'à ce que vous soyez prêt à le télécharger.

- **La poignée de main :** Quand vous scannez le QR code, votre téléphone le lit, se connecte à Internet et contacte ce serveur spécifique.

- **Le téléchargement :** Votre téléphone télécharge en toute sécurité le profil et l'installe sur la puce intégrée. Une fois installé, il peut se connecter aux tours cellulaires locales comme une SIM physique.

### Qu'est-ce qu'un code de confirmation eSIM ?

Certains opérateurs exigent un **code de confirmation** (aussi appelé code d'activation ou code de vérification) pendant le processus de configuration. C'est un code de 4 à 8 chiffres que vous saisissez après avoir scanné le QR code ou lors de la saisie manuelle.

**Où le trouver :** Le code de confirmation se trouve généralement dans le même e-mail que votre QR code. Cherchez une section intitulée « Confirmation Code », « Activation Code », « Verification Code » ou « SM-DP+ Code ».

**Pourquoi certains opérateurs l'exigent :** Cela ajoute une couche de sécurité supplémentaire – même si quelqu'un vole votre QR code, il ne peut pas activer le profil sans le code de confirmation.

**Que faire si vous ne le trouvez pas :** Vérifiez votre dossier spam. S'il n'y est pas, contactez le support de votre fournisseur avec votre numéro de commande.

> 💡 **Astuce pro :** Parce que le profil doit être téléchargé depuis un serveur, vous devez absolument avoir une connexion Internet active (Wi‑Fi) pour terminer la configuration. Cela ne peut pas être fait hors ligne. Si vous voyagez et n'avez pas de Wi‑Fi, utilisez le Wi‑Fi gratuit de l'aéroport ou un partage de connexion mobile depuis le téléphone d'un ami.

### Peut-on activer sans Wi‑Fi ?

**Non. C'est impossible.**

Le profil doit être téléchargé depuis le serveur SM‑DP+ de l'opérateur via Internet. Sans connexion Internet, votre téléphone n'a aucun moyen d'atteindre le serveur et de télécharger le profil.

**Que faire si vous n'avez pas de Wi‑Fi :**
- Utilisez le Wi‑Fi gratuit de l'aéroport (la plupart des aéroports internationaux le proposent)
- Utilisez le partage de connexion mobile d'un ami
- Utilisez le Wi‑Fi d'un café ou d'un hôtel
- Achetez d'abord une SIM physique (comme solution de secours) et utilisez sa connexion de données pour configurer la version numérique

**Important :** Installez votre forfait **avant de quitter votre domicile** sur votre Wi‑Fi domestique. C'est le conseil le plus important pour les voyageurs.

### Activation eSIM vs téléchargement eSIM

Les gens utilisent souvent ces termes de manière interchangeable, mais ils sont légèrement différents :

| Terme | Ce qu'il signifie réellement |
|------|----------------------|
| **Téléchargement** | L'acte technique de transférer le profil du serveur de l'opérateur vers votre téléphone (prend 10‑60 secondes) |
| **Activation** | Le processus complet – vérification de la compatibilité, achat d'un forfait, scan du QR code, téléchargement du profil et connexion au réseau |

**En pratique :** Quand quelqu'un dit « j'active mon eSIM », il entend généralement tout le processus. Quand un opérateur dit « le profil a été téléchargé avec succès », il entend que le transfert technique est terminé. Pour la plupart des utilisateurs, la distinction n'a pas d'importance – suivez simplement les étapes et vous serez connecté.


## Liste de vérification de l'activation d'eSIM

**Complétez cette liste AVANT de tenter de configurer votre forfait numérique :**

| Étape | Vérification | Comment vérifier |
| :--- | :--- | :--- |
| **1** | Votre téléphone le prend en charge | Composez `*#06#` – cherchez l'EID. Si pas d'EID, arrêtez – vous avez besoin d'une SIM physique. |
| **2** | Votre téléphone est débloqué opérateur | Réglages > Général > Informations > Verrouillage opérateur – doit indiquer « Aucune restriction SIM ». |
| **3** | Vous avez une connexion Wi‑Fi stable | Testez en chargeant un site web. Le Wi‑Fi public peut bloquer les serveurs des opérateurs – essayez un autre réseau si la configuration échoue. |
| **4** | Vous avez votre QR code OU code d'activation + adresse SM‑DP+ | Les QR codes expirent après 30‑90 jours – vérifiez votre e-mail pour la date d'expiration. |
| **5** | Vous avez votre code de confirmation (si requis) | Vérifiez votre e-mail pour un code de 4‑8 chiffres. Certains opérateurs l'exigent. |
| **6** | Votre iOS ou Android est à jour | Allez dans Réglages > Mise à jour logicielle. Les versions plus anciennes du système peuvent avoir des bugs. |

> ⚠️ **Avertissement :** Ne supprimez jamais un profil pendant qu'il est « en cours d'activation » ou si vous n'avez pas de signal. Supprimer le profil signifie généralement que vous ne pouvez pas rescanner le QR code, et vous devrez contacter le support client pour un remplacement.


## SIM physique vs SIM numérique

| Fonctionnalité | SIM physique traditionnelle | eSIM numérique |
| :--- | :--- | :--- |
| **Format** | Puce plastique amovible | Puce numérique intégrée |
| **Temps d'activation** | Jours (attente du courrier) ou en magasin | Instantané (via Internet) – 2 minutes |
| **Changement d'opérateur** | Nécessite de changer physiquement les cartes | Se fait via les Réglages du téléphone |
| **Profils multiples** | Généralement limité à 1‑2 emplacements | Peut stocker 5‑8 profils (selon le téléphone) |
| **Sécurité** | Peut être perdue, volée ou endommagée | Ne peut pas être physiquement retirée si le téléphone est volé |
| **Achat avant le voyage** | ❌ Doit attendre la livraison ou acheter à destination | ✅ Achetez en ligne à tout moment, n'importe où |
| **Passage d'un téléphone à un autre** | Facile – déplacez simplement la carte | Les profils de voyage s'installent une seule fois ; les profils opérateur peuvent être transférés |
| **Les deux peuvent-ils être actifs ?** | N/A – une seule SIM physique par emplacement | ✅ Oui – le numérique + le physique peuvent être actifs simultanément (double SIM) |

### Que devient votre SIM physique quand vous ajoutez un forfait numérique ?

**Absolument rien.** Votre SIM physique reste pleinement active et indépendante.

Quand vous configurez un forfait numérique :
- Votre SIM physique continue de fonctionner normalement pour les appels, les SMS et les données (si vous la définissez comme ligne de données).
- Le forfait numérique ajoute une seconde ligne à votre téléphone.
- Vous pouvez choisir quelle ligne utiliser pour les données, les appels et les SMS.
- Les deux lignes peuvent être actives en même temps (double SIM double veille).

**Pensez-y ainsi :** Votre SIM physique est votre numéro de téléphone principal. Le forfait numérique est une ligne supplémentaire (comme une seconde carte SIM) que vous pouvez activer et désactiver selon vos besoins.

### Un profil peut-il être utilisé sur plusieurs appareils ?

**Non. C'est impossible.**

Chaque profil est cryptographiquement lié à l'**EID** (identifiant eUICC) de l'appareil sur lequel il a été activé. L'EID de votre téléphone est unique – c'est comme un numéro de série pour votre matériel eSIM.

Si vous essayez de scanner le même QR code sur deux téléphones, le second téléphone recevra une erreur : « QR code déjà utilisé » ou « Échec de l'activation ».

**Ce que vous pouvez faire à la place :**
- Achetez un forfait séparé pour chaque appareil
- Utilisez le partage de connexion personnel de votre téléphone pour partager les données avec votre tablette ou ordinateur portable
- Si vous avez un forfait opérateur (pas de voyage), certains opérateurs autorisent le transfert entre appareils (voir notre [guide de transfert eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/))

**Exception :** Certains opérateurs proposent des forfaits « multi-appareils » où vous pouvez avoir plusieurs profils sur le même compte – mais chaque appareil reçoit toujours son propre profil unique. Le forfait est partagé entre les appareils, mais les profils sont spécifiques à chaque appareil.


## Comment activer un eSIM

Selon votre opérateur et votre appareil, il y a trois façons principales de déclencher la configuration. Pour un guide complet sur tous les modèles de téléphones, consultez notre **[guide général d'activation d'eSIM](/faq/how-to-activate-an-esim/)**.

### Scanner un QR code
C'est l'approche standard pour la plupart des **forfaits de voyage**.

1. Allez dans **Réglages > Cellulaire** (ou Données mobiles).
2. Appuyez sur **Ajouter un eSIM** ou **Ajouter un forfait de données**.
3. Sélectionnez **Utiliser un QR code**.
4. Scannez le QR code fourni par votre opérateur et suivez les invites à l'écran.
5. Si demandé, saisissez votre **code de confirmation** (4‑8 chiffres de votre e-mail).
6. Attendez que le profil se télécharge (prend 10‑60 secondes).
7. Étiquetez votre forfait (par exemple, « Voyage Japon » ou « Données US »).

### Saisie manuelle
Si votre caméra est cassée ou si vous ne pouvez pas scanner le QR code (par exemple, le code est sur le téléphone que vous essayez de configurer), vous pouvez saisir les détails manuellement.

1. Sur l'écran de scan du QR code, appuyez sur **Saisir les détails manuellement** en bas.
2. Saisissez l'**adresse SM-DP+** et le **code d'activation** fournis dans votre e-mail de confirmation.
3. Si votre opérateur exige un **code de confirmation**, saisissez-le lorsque demandé.
4. Attendez que le profil se télécharge et s'active.

### Push via l'application opérateur
De nombreux opérateurs modernes vous permettent de configurer directement via leur application en appuyant sur un seul bouton. L'application communique automatiquement avec les réglages de votre téléphone pour installer le profil sans avoir besoin d'un QR code.

**Comment ça marche :**
1. Téléchargez l'application de votre opérateur (par exemple, T‑Mobile, Verizon, Orange, EE).
2. Connectez-vous à votre compte.
3. Cherchez « Activer eSIM » ou « Obtenir eSIM » dans l'application.
4. Appuyez sur le bouton – l'application envoie automatiquement le profil à votre téléphone.
5. Suivez les invites à l'écran pour terminer la configuration.

> 💡 **Astuce pro :** La configuration via l'application est généralement la méthode la plus rapide (moins d'1 minute) et ne nécessite pas de scanner un QR code. Elle est aussi moins sujette aux erreurs comme « QR code invalide ».


## Comment vérifier si votre téléphone prend en charge l'eSIM

Avant même d'essayer de configurer un forfait numérique, vous devez confirmer que votre téléphone possède réellement le matériel requis. La dernière chose que vous voulez est d'acheter un forfait de voyage pour découvrir que votre téléphone ne le prend pas en charge.

### La vérification EID universelle

C'est le moyen le plus rapide et le plus fiable de répondre à **« mon téléphone a-t-il l'eSIM »** ou **« mon téléphone prend-il en charge l'eSIM »**.

1. Ouvrez le **composeur** de votre téléphone (l'application que vous utilisez pour passer des appels).
2. Composez `*#06#` (comme un numéro de téléphone) et appuyez sur appeler.
3. Un écran apparaîtra avec les identifiants de votre appareil. Cherchez un numéro étiqueté **EID** (Embedded Identity Document) – il devrait s'agir d'un code à 32 chiffres.
   - **Si vous voyez un EID :** Félicitations – votre téléphone a le matériel. Vous pouvez procéder à la configuration.
   - **Si vous ne voyez que des numéros IMEI (IMEI1, IMEI2) et pas d'EID :** Votre téléphone **ne prend pas** en charge les SIM numériques. Vous devez utiliser une SIM physique.

Cette méthode fonctionne sur les iPhone (tous les modèles avec eSIM) et presque tous les téléphones Android, y compris Samsung, Google Pixel, OnePlus, Motorola et Xiaomi.

> 💡 **Astuce pro :** Si vous avez un iPhone et voulez savoir **comment vérifier l'eSIM sur iPhone**, c'est exactement le même code. Sur les iPhone, vous pouvez aussi trouver l'EID dans **Réglages > Général > Informations** – faites défiler jusqu'à la section **SIM numérique** ou **SIM disponible**.

### Vérification via les Réglages

Si vous préférez ne pas composer de codes, ou si `*#06#` ne fonctionne pas sur votre appareil (rare, mais cela arrive sur certains téléphones verrouillés opérateur), vous pouvez trouver l'EID ou le menu eSIM via les réglages de votre téléphone.

**Sur iPhone (iOS) :**
- Allez dans **Réglages > Général > Informations**.
- Faites défiler jusqu'à voir **SIM numérique** ou **SIM disponible**.
- Vous y trouverez votre **EID** listé.
- De plus, vous pouvez aller dans **Réglages > Cellulaire** et chercher l'option **Ajouter un eSIM** ou **Ajouter un forfait cellulaire**. Si elle est grisée ou absente, votre iPhone peut être un modèle de Chine continentale (qui n'a pas d'eSIM) ou verrouillé opérateur.

**Sur Samsung (One UI) :**
- Allez dans **Réglages > Connexions > Gestionnaire de carte SIM**.
- Si vous voyez une option comme **Ajouter un eSIM** ou **Télécharger un eSIM**, votre téléphone le prend en charge.
- Pour trouver l'EID, allez dans **Réglages > À propos du téléphone > Informations d'état** – cherchez **EID**.

**Sur Google Pixel et Stock Android :**
- Allez dans **Réglages > Réseau et Internet > Réseau mobile**.
- Cherchez **Ajouter un opérateur** ou **Télécharger une SIM à la place ?**.
- Pour trouver l'EID : **Réglages > À propos du téléphone > État SIM** – l'EID apparaîtra s'il est présent.

**Sur OnePlus, Xiaomi, Motorola (Android) :**
- Le chemin varie légèrement, mais généralement : **Réglages > Réseau et Internet > Réseau mobile > Avancé > Ajouter un eSIM**.
- Pour vérifier sur Android, composez `*#06#` – c'est universel.

### Utiliser l'IMEI pour vérifier la compatibilité

Si vous n'avez pas accès à votre téléphone (par exemple, vous achetez un appareil d'occasion en ligne), vous pouvez utiliser le numéro IMEI du téléphone pour vérifier la prise en charge :

1. Trouvez le numéro IMEI – composez `*#06#` sur l'appareil, ou regardez sous **Réglages > À propos du téléphone**.
2. Allez sur un **vérificateur de compatibilité eSIM** en ligne (de nombreux fournisseurs proposent un outil de recherche IMEI gratuit).
3. Saisissez l'IMEI. L'outil vous dira si ce modèle d'appareil spécifique prend en charge les SIM numériques.

> Important : L'IMEI seul ne contient pas d'informations eSIM, mais il identifie votre modèle exact de téléphone. Les outils croisent l'IMEI avec les bases de données des fabricants.

### Essai gratuit

Rien ne vaut un vrai test. Un **[eSIM Roami d'essai gratuit](/free-esim/)** prend 2 minutes à installer et confirme que votre téléphone est prêt avant que vous ne dépensiez de l'argent pour un forfait complet.

### Différences des modèles régionaux

Même si votre modèle de téléphone est « censé » prendre en charge les SIM numériques, les variantes régionales peuvent les avoir désactivées :

| Région/Modèle | Prise en charge | Pourquoi ? |
| :--- | :--- | :--- |
| **iPhone (Chine continentale)** | ❌ Non | Matériel double SIM physique – puce numérique retirée |
| **Samsung S20 FE (opérateur US)** | ❌ Non | Désactivée par l'opérateur pour réduire les coûts |
| **Google Pixel 4a (Japon)** | ❌ Non | Désactivée par l'opérateur (Docomo/SoftBank) |
| **Samsung Galaxy série A (US)** | ⚠️ Variable | Certains modèles l'ont, d'autres non |
| **Xiaomi (ROM Chine)** | ❌ Non | Les modèles chinois domestiques manquent du matériel |
| **Huawei (Chine domestique)** | ❌ Non | Pas de services Google, pas de SIM numérique |

**Que faire :** Vérifiez toujours la présence de l'EID avec `*#06#` – c'est le test définitif. Ne supposez pas que votre téléphone le prend en charge simplement parce que vous avez vu un post de forum qui le dit.

### Que faire si votre téléphone n'est pas compatible ?

Si vous avez suivi toutes ces étapes et n'avez trouvé ni EID ni menu eSIM, votre téléphone ne peut pas utiliser les SIM numériques. Vous avez trois options :

- **Utilisez une SIM de voyage physique** – de nombreux fournisseurs expédient également des cartes SIM physiques.
- **Achetez une SIM locale à votre destination** – fonctionne encore sur n'importe quel téléphone.
- **Passez à un téléphone plus récent** – envisagez un Google Pixel 6a, Samsung Galaxy S21 ou plus récent, ou un iPhone XR ou plus récent (à l'exclusion des modèles de Chine continentale).


## Chemin d'activation par marque de téléphone

| Marque de téléphone | Chemin vers « Ajouter un eSIM » | Remarques |
|-------------|-----------------|-------|
| **iPhone** | Réglages > Cellulaire > Ajouter un eSIM > Scanner le QR code | Fonctionne aussi via Réglages > Général > Informations > Ajouter un eSIM |
| **Samsung** | Réglages > Connexions > Gestionnaire de carte SIM > Ajouter un eSIM | One UI 4.0+ requis |
| **Google Pixel** | Réglages > Réseau et Internet > Réseau mobile > Ajouter un opérateur | Chemin Stock Android |
| **OnePlus** | Réglages > Wi‑Fi et réseau > SIM et réseau > Ajouter un eSIM | OxygenOS 13+ |
| **Motorola** | Réglages > Réseau et Internet > Réseau mobile > Avancé > Opérateur > Ajouter un eSIM | Android 12+ |
| **Xiaomi (mondial)** | Réglages > Réseau mobile > Cartes SIM > Ajouter un eSIM | La ROM chinoise n'a pas d'eSIM |
| **Huawei (mondial)** | Réglages > Réseau mobile > eSIM > Ajouter un profil eSIM | Versions mondiales uniquement |


## Erreurs courantes d'activation d'eSIM et comment les corriger

| Erreur / Symptôme | Cause la plus probable | Correction |
|----------------|-------------------|-----|
| **« Cellular Plan Cannot Be Added »** | Le téléphone est verrouillé opérateur, ou le QR code a déjà été utilisé (usage unique). | Vérifiez que le téléphone est débloqué : Réglages > Général > Informations > Verrouillage opérateur doit indiquer « Aucune restriction SIM ». S'il est débloqué, demandez un nouveau QR code. |
| **Bloqué sur « Activation… »** | La connexion Wi‑Fi a chuté, ou le serveur de l'opérateur est occupé. | Ne supprimez PAS le profil. Activez le mode Avion pendant 30 secondes, puis désactivez-le. Redémarrez le téléphone si toujours bloqué. |
| **« QR Code invalide »** | Le QR code est expiré ou endommagé. | Demandez un nouveau QR code à votre fournisseur. Essayez la saisie manuelle à la place. |
| **Pas de signal après la fin** | L'itinérance des données n'est pas activée, ou les paramètres APN sont manquants. | Activez l'itinérance des données. Configurez l'APN manuellement (voir tableau ci-dessous). |
| **Le profil apparaît mais pas de données** | La ligne de données par défaut est définie sur la SIM physique. | Allez dans Réglages > Cellulaire > Données cellulaires – sélectionnez votre nouvelle ligne comme ligne de données. |
| **« eSIM Not Supported » sur iPhone** | L'iPhone est de Chine continentale (double SIM physique) ou plus ancien que XR/SE2. | Vérifiez le modèle dans Réglages > Général > Informations. Les modèles chinois n'ont pas d'eSIM. |
| **Le scan du QR code ne fonctionne pas** | Autorisations caméra refusées, ou écran endommagé. | Accordez les autorisations caméra, ou utilisez la méthode de saisie manuelle. |
| **« Échec de l'activation – serveur inaccessible »** | Le Wi‑Fi bloque la connexion (réseau d'entreprise, VPN). | Désactivez le VPN. Passez à un autre réseau Wi‑Fi ou utilisez un partage de connexion mobile. |
| **« Code de confirmation requis »** | Votre opérateur exige un code de vérification de 4‑8 chiffres. | Vérifiez votre e-mail pour le code. S'il n'est pas trouvé, contactez le support. |
| **« QR code déjà utilisé »** | Le QR code a été scanné sur un autre appareil. | Les forfaits de voyage sont à usage unique – vous avez besoin d'un nouveau QR code de votre fournisseur. |
| **Prend plus de 15 minutes pour se connecter** | Le téléphone a du mal à trouver le réseau local. | Activez/désactivez le mode Avion. Sélectionnez manuellement un réseau (Réglages > Cellulaire > [ligne] > Sélection du réseau). |
| **« Échec du téléchargement du profil »** | Connexion Wi‑Fi intermittente. | Rapprochez-vous du routeur. Essayez un autre réseau Wi‑Fi. Redémarrez le processus. |
| **« Échec de l'activation » après le scan** | Le QR code est destiné à une autre région ou opérateur. | Confirmez que le QR code correspond au forfait que vous avez acheté. Contactez le fournisseur pour le bon code. |

### Configuration manuelle de l'APN

Si après la configuration vous rencontrez **aucune connexion de données**, configurez l'APN manuellement :

| Fournisseur | APN | Nom d'utilisateur | Mot de passe |
|----------|-----|----------|----------|
| **Roami** | internet | (vide) | (vide) |
| **Airalo** | globaldata | (vide) | (vide) |
| **Holafly** | hola | (vide) | (vide) |
| **Nomad** | nbdata | (vide) | (vide) |
| **Orange** | orange.fr | (vide) | (vide) |
| **SFR** | sl2sfr | (vide) | (vide) |
| **T‑Mobile (US)** | fast.t-mobile.com | (vide) | (vide) |
| **AT&T (US)** | nxgen | (vide) | (vide) |
| **Verizon (US)** | vzwinternet | (vide) | (vide) |
| **EE (UK)** | everywhere | (vide) | (vide) |
| **O2 (UK)** | mobile.o2.co.uk | web | web |
| **Vodafone (UK)** | internet | (vide) | (vide) |
| **Three (UK)** | three.co.uk | (vide) | (vide) |
| **Google Fi** | h2g2 | (vide) | (vide) |

**Comment configurer l'APN :**
- **iPhone :** Réglages > Cellulaire > Réseau de données cellulaires > remplissez les champs APN.
- **Android :** Réglages > Connexions > Réseaux mobiles > Noms des points d'accès > créez un nouvel APN.

Pour un dépannage plus avancé, consultez notre **[Guide de dépannage approfondi eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/)** et **[Double eSIM ne fonctionne pas ? 12 correctifs pour iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** – de nombreux correctifs s'appliquent à tous les appareils.


## Erreurs d'activation courantes

D'après nos données de support, voici les trois principales erreurs qui piègent les gens :

### Essayer d'activer sans Wi-Fi

C'est la raison n°1 des échecs d'activation — un profil ne peut être téléchargé que depuis le serveur SM‑DP+ de l'opérateur via Internet, comme expliqué dans *Peut-on activer sans Wi‑Fi ?* ci-dessus.

**Comment l'éviter :** Installez votre forfait avant de quitter votre domicile sur votre Wi‑Fi domestique. Si vous êtes déjà en voyage, trouvez un Wi‑Fi gratuit d'aéroport ou d'hôtel avant de tenter.

### Ne pas activer l'itinérance des données

Votre profil est téléchargé correctement, mais vous n'avez pas de signal. Le problème ? L'itinérance des données est toujours désactivée.

**Comment l'éviter :** Après l'installation, allez dans Réglages > Cellulaire > [votre nouvelle ligne] et activez l'itinérance des données. Cela est nécessaire pour que les forfaits de voyage fonctionnent.

### Supprimer le profil en pleine activation

Vous voyez « Activation… » pendant quelques minutes, vous paniquez et vous supprimez le profil. Maintenant vous ne pouvez plus rescanner le QR code.

**Comment l'éviter :** Soyez patient. Attendez jusqu'à 15 minutes. Si c'est toujours bloqué, redémarrez votre téléphone – ne supprimez pas le profil. Si vous le supprimez, vous aurez besoin d'un nouveau QR code de votre fournisseur.


## Questions fréquentes

**Puis-je utiliser ma SIM physique et un forfait numérique en même temps ?**
Oui ! La plupart des smartphones modernes prennent en charge la fonctionnalité double SIM. Vous pouvez garder votre SIM physique active pour les appels et les SMS depuis votre domicile, tout en utilisant votre forfait numérique uniquement pour les données locales. Les deux lignes sont actives simultanément (double veille).

**La configuration d'un forfait numérique vide-t-elle ma batterie plus vite ?**
Utiliser un forfait numérique en soi ne vide pas la batterie. Cependant, faire fonctionner deux lignes actives (double SIM) simultanément peut causer une légère décharge de la batterie car votre téléphone cherche constamment deux signaux réseau différents. La différence est généralement de 2‑5 % par jour.

**Combien de temps prend tout le processus ?**
Le téléchargement et la configuration prennent normalement moins de 2 minutes. Cependant, la connexion au réseau local pour la première fois peut parfois prendre jusqu'à 10-15 minutes selon la force du signal. Si cela prend plus de 15 minutes, consultez le tableau de dépannage ci-dessus.

**Comment trouver mon EID si j'ai déjà un forfait installé ?**
Sur iPhone, allez dans **Réglages > Général > Informations** et faites défiler jusqu'à la section **SIM numérique**. Sur Android, composez `*#06#` – l'EID apparaîtra à côté des numéros IMEI.

**Puis-je vérifier la compatibilité en utilisant l'IMEI avant d'acheter un téléphone d'occasion ?**
Oui. De nombreux outils en ligne de **vérification de compatibilité eSIM** acceptent un numéro IMEI. Vous pouvez aussi vérifier les spécifications officielles du fabricant pour ce modèle. C'est particulièrement utile lors de l'achat d'un téléphone sur eBay ou un marché de seconde main.

**Puis-je transférer mon forfait de mon ancien téléphone vers un nouveau ?**
Oui – mais la méthode dépend de votre opérateur et des modèles de téléphones. Pour des instructions étape par étape couvrant les deux plateformes, consultez **[Comment transférer un eSIM entre iPhone et Android](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

**Quelle est la différence entre un forfait de voyage et un forfait opérateur local ?**
Un forfait de voyage est données uniquement, acheté en ligne avant votre voyage et s'active instantanément via QR code. Il n'a pas de numéro de téléphone. Un forfait opérateur local inclut un numéro de téléphone, nécessite une vérification d'identité et convient mieux aux longs séjours. Consultez notre **[guide eSIM Royaume-Uni](/united-kingdom-esim/)** pour une comparaison détaillée.

**Que faire si j'épuise mes données sur mon forfait de voyage ?**
Vous pouvez recharger en ligne via l'application ou le site web de votre fournisseur – les nouvelles données sont ajoutées automatiquement sans scanner un nouveau QR code. Certains fournisseurs proposent une recharge en un clic.

**Pourquoi mon forfait affiche-t-il « Aucun service » après la configuration ?**
Le plus souvent, l'itinérance des données n'est pas activée, ou votre téléphone utilise encore votre SIM domestique pour les données. Vérifiez les deux paramètres. Assurez-vous également que votre téléphone est configuré pour sélectionner automatiquement le réseau. Consultez le tableau de dépannage ci-dessus pour plus de correctifs.

**Puis-je utiliser un forfait britannique dans d'autres pays européens ?**
Uniquement si votre forfait inclut l'itinérance UE. Les forfaits de voyage incluent souvent l'itinérance UE, tandis que la plupart des forfaits des opérateurs britanniques locaux (EE, Vodafone, Three) facturent environ 2–2,50 £/jour pour l'usage dans l'UE — les forfaits mensuels d'O2 sont la principale exception, incluant l'itinérance UE jusqu'à un plafond de 25 Go. Vérifiez les détails de votre forfait avant de voyager.

**Qu'est-ce qu'un code de confirmation et pourquoi en ai-je besoin ?**
Un code de confirmation est un code de 4‑8 chiffres exigé par certains opérateurs lors de la configuration. Il ajoute une couche de sécurité supplémentaire – même si quelqu'un vole votre QR code, il ne peut pas activer le profil sans le code de confirmation. Trouvez-le dans l'e-mail de votre fournisseur.

**Que faire si je n'ai pas de Wi‑Fi pour activer mon forfait ?**
Vous devez avoir du Wi‑Fi – il est impossible d'activer sans connexion Internet. Utilisez le Wi‑Fi gratuit de l'aéroport, le partage de connexion mobile d'un ami, ou le Wi‑Fi d'un café/hôtel. Meilleure pratique : installez avant de quitter votre domicile sur votre propre Wi‑Fi.

**Puis-je utiliser le même profil sur mon téléphone et ma tablette ?**
Non – chaque profil est lié à l'EID d'un seul appareil. Vous avez besoin d'un forfait séparé pour chaque appareil. Le profil de votre téléphone ne peut pas être utilisé sur votre tablette ou votre montre.

**Quel est le moyen le moins cher de tester si cela fonctionne sur mon téléphone ?**
Obtenez un **[essai eSIM gratuit de Roami](/free-esim/)** – cela prend 2 minutes, ne coûte rien et confirme que votre téléphone est prêt avant que vous n'achetiez un forfait payant.

**Combien de profils mon téléphone peut-il stocker ?**
La plupart des téléphones modernes peuvent stocker 5‑8 profils, mais un ou deux seulement peuvent être actifs à la fois (selon le modèle). iPhone 13 et plus récents prennent en charge deux actifs. Les iPhone plus anciens (XR/11/12/SE) prennent en charge un actif plus une SIM physique.

**Mon téléphone doit-il être débloqué pour utiliser un forfait de voyage ?**
Oui – si votre téléphone est verrouillé opérateur, il rejettera les profils d'autres réseaux. Vérifiez Réglages > Général > Informations > Verrouillage opérateur – il doit indiquer « Aucune restriction SIM ». Contactez votre opérateur pour demander un déverrouillage.

**Que signifie « échec de l'activation eSIM » ?**
Cela signifie que le profil n'a pas pu être téléchargé ou installé correctement. Causes courantes : pas de connexion Wi‑Fi, QR code expiré, problèmes de serveur de l'opérateur, ou téléphone non compatible. Consultez le tableau de dépannage ci-dessus pour des correctifs spécifiques.

**Puis-je activer un forfait pour le téléphone de quelqu'un d'autre ?**
Oui – vous pouvez acheter un forfait et transférer le QR code à cette personne. Cependant, elle doit avoir un téléphone compatible et une connexion Wi‑Fi stable. Le QR code ne peut être scanné qu'une seule fois, alors assurez-vous qu'elle est prête à l'installer.


## Conclusion

La technologie SIM numérique a complètement changé notre façon de nous connecter aux réseaux mobiles – plus de cartes plastiques, de trombones ou de files d'attente dans les boutiques d'opérateurs. En comprenant le processus – télécharger un profil numérique via un serveur sécurisé – vous pouvez facilement résoudre tout accroc mineur. Et avant même de commencer, savoir **comment vérifier si mon téléphone est compatible eSIM** en utilisant `*#06#` ou vos réglages vous fera gagner du temps et évitera la frustration.

**Les 3 choses les plus importantes à retenir :**
1. **Vérifiez l'EID en premier** – composez `*#06#`. Si pas d'EID, arrêtez et achetez une SIM physique.
2. **Installez avant de voyager** – vous avez besoin du Wi‑Fi pour activer. Le Wi‑Fi de l'aéroport peut nécessiter une vérification par SMS.
3. **Activez l'itinérance des données** – cela est nécessaire pour que les forfaits de voyage fonctionnent.

Si vous planifiez un voyage international et voulez expérimenter une connectivité instantanée, **Roami eSIM** propose des forfaits de données transparents et à haut débit dans plus de 190 pays. Évitez les frais d'itinérance, téléchargez votre profil en quelques secondes et restez connecté dès l'atterrissage de votre avion.

👉 **Vous cherchez un forfait ?** Consultez [eSIM pour les États-Unis](/united-states-esim/) ou [eSIM pour l'Europe](/europe-esim/) pour mettre l'activation en pratique.

👉 **Vous n'êtes pas sûr que votre téléphone le prenne en charge ?** Consultez notre **[liste complète de compatibilité](/compatibility/)**.

👉 **Prêt à l'essayer ?** Réclamez un [essai eSIM gratuit](/free-esim/) – cela prend 2 minutes et confirme que tout fonctionne.

---

*Basé sur la documentation officielle d'Apple, les normes GSMA et les pages de support Android en date de septembre 2026.*
## Sources

- [GSMA — spécification eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Assistance Apple — Configurer l'eSIM sur iPhone](https://support.apple.com/en-us/HT212780)
- [Assistance Google — Configurer un eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Assistance Google — eSIM sur Android](https://support.google.com/android/answer/11241215)