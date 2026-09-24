---
title: "Comment transférer un eSIM entre iPhone et Android"
h1_title: "Comment transférer un eSIM entre iPhone et Android"
description: "Déplacez votre eSIM entre iPhone et Android avec une application opérateur ou un QR code réémis. Étape par étape dans les deux sens, plus des correctifs pour les erreurs de transfert courantes."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM cross-platform transfer", "eSIM transfer error", "iOS 18 eSIM", "eSIM carrier lock", "eSIM confirmation code", "eSIM no service", "eSIM APN settings", "eSIM troubleshooting", "eSIM activation failed", "transfer eSIM between iPhone and Android", "can't transfer eSIM to new iPhone", "Orange eSIM transfer"]
date: 2026-09-11T00:00:00Z
lastmod: 2026-09-11T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
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
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Comment activer un eSIM ?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Comment activer l'eSIM sur iPhone (tous les modèles) ?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Dernière liste de compatibilité eSIM"
      url: "/compatibility/"
---


> **Note de l'éditeur :** Vous ne pouvez transférer un eSIM entre iPhone et Android que lorsque votre opérateur prend en charge le transfert inter-plateformes, et la plupart des eSIM de voyage ne peuvent pas être déplacés du tout. Les méthodes ci-dessous suivent la documentation officielle des opérateurs et se concentrent sur les transferts qui fonctionnent réellement aujourd'hui. Consultez d'abord la section des opérateurs pris en charge pour voir si votre forfait est éligible.

Voici la réalité d'emblée : un eSIM ne peut généralement pas être déplacé directement entre iPhone et Android, car les deux plateformes ne partagent pas de protocole de transfert. Les solutions de contournement sont simples, cependant — demandez à votre opérateur de réémettre le profil sous forme de QR code, ou transférez via l'application de l'opérateur lorsque cela est pris en charge. Les deux directions, plus les exceptions des eSIM de voyage, sont exposées ci-dessous.

## Qu'est-ce qu'un transfert d'eSIM ?

**Trouvez votre scénario ci-dessous et allez directement à la bonne méthode.**

| Votre scénario | Puis-je transférer ? | Meilleure méthode | Où aller |
| :--- | :--- | :--- | :--- |
| **iPhone → nouvel iPhone** | ✅ Oui (toujours) | Apple Quick Transfer | [Transfert intra-plateforme](#transférer-un-esim-vers-un-nouvel-iphone-ou-samsung) |
| **Samsung → nouveau Samsung** | ✅ Oui (généralement) | Samsung Smart Switch | [Transfert intra-plateforme](#transférer-un-esim-vers-un-nouvel-iphone-ou-samsung) |
| **Android → iPhone (opérateur prend en charge le transfert via app)** | ✅ Oui | Application opérateur | [Méthode A](#transfert-esim-dandroid-vers-iphone) |
| **Android → iPhone (opérateur ne prend pas en charge l'app)** | ✅ Oui | QR code en secours | [Méthode B](#transfert-esim-diphone-vers-android) |
| **iPhone → Android (opérateur prend en charge)** | ✅ Oui | Application opérateur ou QR code | [Méthode B](#transfert-esim-diphone-vers-android) |
| **eSIM de voyage (Roami, Airalo, Holafly)** | ❌ Non | Achetez un nouveau forfait sur le nouvel appareil | [Pourquoi les eSIM de voyage ne peuvent pas être transférés](#pourquoi-les-esim-de-voyage-ne-peuvent-pas-être-transférés) |
| **L'opérateur ne prend pas en charge le transfert** | ✅ Oui (secours) | Contactez l'opérateur pour un QR code | [Méthodes de secours](#méthodes-de-secours-quand-le-transfert-inter-plateformes-nest-pas-pris-en-charge) |

> **Règle clé :** Il n'existe **aucun bouton de transfert eSIM intégré d'iOS vers Android** comme c'est le cas pour iPhone vers iPhone. Le transfert inter-plateformes passe toujours **par votre opérateur** – soit via son application, soit en demandant un nouveau QR code. Les eSIM de voyage sont **à appareil unique uniquement** – achetez-en un nouveau sur votre nouveau téléphone.

**Impossible de transférer ?** La plupart des eSIM de voyage (Roami, Airalo, Holafly) sont **à appareil unique uniquement** – vous devrez acheter un nouveau forfait sur votre nouveau téléphone. Pour les eSIM d'opérateurs locaux, le QR code de secours fonctionne toujours.

> **Limitation clé :** Il n'existe **aucun transfert eSIM intégré d'iOS vers Android** – vous devez passer par votre opérateur. Ce guide vous fait parcourir chaque méthode prise en charge.

Nouveau dans la configuration eSIM ? Notre [guide comment activer un eSIM](/faq/how-to-activate-an-esim/) couvre l'installation depuis zéro. Si le transfert échoue à mi-chemin, le [Guide de dépannage approfondi eSIM](/faq/esim-deep-troubleshooting-guide-2026/) associe chaque message d'erreur à une correction.


## Quelle méthode de transfert eSIM devriez-vous utiliser ?

| Votre situation | Meilleure méthode | Temps | Opérateur nécessaire ? |
| :--- | :--- | :--- | :--- |
| **Passer d'iPhone ↔ iPhone** | Apple Quick Transfer (Réglages > Cellulaire > Ajouter un eSIM > Transfert) | 2 min | Non (Apple s'en charge) |
| **Passer d'Android ↔ Android (Samsung à Samsung, etc.)** | Transfert spécifique à la marque (Samsung : Gestionnaire SIM > Ajouter un eSIM > Transfert) | 2 min | Non (la marque s'en charge) |
| **Passer d'iPhone ↔ Android (iOS 18 / Android 16+)** | Transfert via l'application opérateur | 3-5 min | Oui |
| **Passer d'iPhone ↔ Android (OS plus ancien)** | QR code réémis par l'opérateur | 5-10 min | Oui |
| **eSIM de voyage (Roami, Airalo, Holafly)** | ❌ Impossible de transférer – achetez un nouveau forfait sur le nouvel appareil | N/A | Non – le fournisseur ne l'autorise pas |
| **Votre opérateur ne prend pas en charge le transfert** | QR code de secours (appelez l'opérateur) | 10-20 min | Oui |


## Guide complet du transfert eSIM

Voici la carte du parcours étape par étape pour toute personne qui déplace un eSIM vers un nouvel appareil.

| Étape | Ce que vous pensez | Que faire | Où le trouver |
| :--- | :--- | :--- | :--- |
| **1. Déterminez votre scénario** | « Quel type de changement est-ce que je fais ? » | Identifiez : même écosystème (iOS→iOS / Android→Android) ou inter-plateformes (iOS↔Android) ? | [Flux de décision rapide ci-dessus](#quelle-méthode-de-transfert-esim-devriez-vous-utiliser) |
| **2. Vérifiez les versions d'OS** | « Mes téléphones sont-ils suffisamment à jour ? » | L'iPhone doit être sous iOS 18+, l'Android doit être sous Android 16+ pour le transfert inter-plateformes natif. | Mettez d'abord à jour si ce n'est pas le cas. |
| **3. Vérifiez le verrouillage opérateur** | « Mon téléphone est-il verrouillé à un opérateur ? » | Réglages > Général > Informations > Verrouillage opérateur doit indiquer « Aucune restriction SIM ». | [Prérequis ci-dessous](#ce-quil-vous-faut-avant-de-commencer-un-transfert-esim) |
| **4. Vérifiez la prise en charge par l'opérateur** | « Mon opérateur autorise-t-il cela ? » | Ouvrez l'application de l'opérateur et cherchez l'option de transfert eSIM. Ou appelez et demandez. | [Section des opérateurs pris en charge ci-dessous](#opérateurs-qui-prennent-en-charge-le-transfert-inter-plateformes-desim) |
| **5. Exécutez le transfert** | « Il est temps de déplacer le numéro. » | Suivez les étapes spécifiques à votre scénario. | [Méthode A](#transfert-esim-dandroid-vers-iphone) ou [Méthode B](#transfert-esim-diphone-vers-android) |
| **6. Configuration post-transfert** | « Mon numéro est sur le nouveau téléphone – et maintenant ? » | Réactivez WhatsApp, iMessage, applications 2FA, et testez les SMS. | [Section après le transfert eSIM ci-dessous](#déplacer-whatsapp-imessage-et-2fa-après-un-transfert-esim) |
| **7. Dépannage en cas d'échec** | « Ça n'a pas fonctionné – et maintenant ? » | Vérifiez l'erreur, supprimez l'ancien profil, réessayez, ou utilisez le QR code de secours. | [Tableau de dépannage ci-dessous](#pourquoi-mon-transfert-esim-a-t-il-échoué) |


## Ce qu'il vous faut avant de commencer un transfert eSIM

**Pour les deux directions :**
- Les deux appareils doivent être **débloqués** (sans **verrouillage opérateur**). Pour vérifier sur iPhone : `Réglages > Général > Informations` → `Verrouillage opérateur` doit indiquer « Aucune restriction SIM ». **C'est la raison n°1 des échecs de transfert** – si votre téléphone est verrouillé, vous ne pouvez pas transférer l'eSIM vers le réseau d'un autre opérateur.
- Les deux appareils ont le **Bluetooth activé**.
- Les deux appareils sont connectés au **Wi‑Fi** (ou au moins l'un dispose d'une connexion de données cellulaires fonctionnelle).
- L'eSIM que vous voulez transférer est **actif** sur l'appareil source (pas déjà supprimé).
- Votre opérateur **prend en charge le transfert inter-plateformes** (voir liste ci-dessous). Sinon, passez à la section des méthodes de secours.

Nouveau dans les profils et les serveurs SM‑DP+ ? L'[explication de l'activation eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) couvre ce qui se passe réellement lorsqu'un profil se déplace entre appareils.
- Votre **profil eSIM** n'est pas **expiré** – certains profils ont des dates de validité limitées.

**Pour Android → iPhone :**
- L'iPhone doit être sous **iOS 18 ou version ultérieure**.
- L'Android doit être sous **Android 16 ou version ultérieure**.

**Pour iPhone → Android :**
- L'iPhone doit être sous **iOS 18 ou version ultérieure**.
- L'Android doit être sous **Android 16 ou version ultérieure**.

> 🚨 **Avertissement critique – ne supprimez pas avant le transfert :**
> **NE supprimez PAS l'eSIM de votre ancien appareil avant de commencer le transfert.** Si vous supprimez d'abord l'eSIM source, le profil disparaît de votre appareil et votre opérateur pourrait ne pas pouvoir le transférer vers le nouvel appareil. Vous devrez contacter votre opérateur pour un tout nouveau QR code – ce qui peut prendre 24 à 48 heures. Initiez toujours le transfert depuis le nouvel appareil en premier, ou gardez l'ancien eSIM actif jusqu'à ce que le nouveau soit confirmé fonctionnel.

> 🚨 Si votre appareil est sur un OS plus ancien, l'option de menu n'apparaîtra tout simplement pas. Mettez d'abord à jour. Si vous avez affaire à un **profil eSIM expiré**, contactez votre opérateur pour un nouveau QR code avant de commencer le transfert.

La page [Google Support – eSIM on Pixel](https://support.google.com/pixelphone/answer/7086887) fournit des détails supplémentaires pour les utilisateurs Android qui se préparent à transférer leur eSIM.


## Pourquoi les eSIM de voyage ne peuvent pas être transférés ?

C'est la question n°1 que nous recevons. Voici pourquoi :

| Raison | Explication |
| :--- | :--- |
| **Liaison à l'EID** | Chaque profil eSIM est cryptographiquement lié à l'**EID** (identifiant eUICC) de l'appareil sur lequel il a été activé. L'EID de votre téléphone est unique – comme un numéro de série pour votre matériel eSIM. (Vous pouvez voir votre EID en composant `*#06#` sur la plupart des téléphones.) |
| **QR codes à usage unique** | Les QR codes des eSIM de voyage sont conçus pour un **usage unique**. Une fois scanné, le QR code est invalidé sur le serveur de l'opérateur. C'est une fonctionnalité de sécurité pour prévenir la fraude. |
| **Pas de compte opérateur** | Les eSIM de voyage sont achetés comme des produits autonomes – vous n'avez pas de « compte opérateur » avec un service continu. Il n'y a personne à qui se connecter pour demander un transfert. |
| **Conçu pour la commodité** | Les eSIM de voyage échangent la transférabilité contre la commodité. Vous obtenez une activation instantanée sans vérification d'identité, mais le compromis est que le profil est verrouillé à un seul appareil. |

**L'essentiel :** Si vous utilisez un eSIM de voyage (Roami, Airalo, Holafly, Nomad, etc.), **ne perdez pas de temps à essayer de le transférer**. Cela ne fonctionnera pas. Achetez simplement un nouveau forfait sur votre nouvel appareil. Le coût d'un nouveau eSIM de voyage est généralement inférieur au temps que vous passeriez à essayer de transférer un profil intransférable.

**Et les eSIM d'opérateurs (postpayés/prépayés) ?**
Les eSIM d'opérateurs sont différents. Vous avez un compte chez l'opérateur, et il peut réémettre votre eSIM vers un nouvel appareil parce qu'il contrôle le profil sur ses serveurs. C'est pourquoi les eSIM d'opérateurs peuvent être transférés, et les eSIM de voyage non.


## Quelle méthode de transfert eSIM vous convient ?

| Fonctionnalité | Transfert via app opérateur | QR code opérateur | Transfert natif (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Fonctionne en inter-plateformes ?** | ✅ Oui | ✅ Oui | ❌ Non (même écosystème uniquement) |
| **Temps nécessaire** | 3-5 min | 5-10 min | 1-2 min |
| **Implication de l'opérateur** | Libre-service via l'application | Doit contacter l'opérateur | Aucune |
| **Fonctionne en voyage ?** | ✅ Oui (avec Wi-Fi) | ✅ Oui (avec Wi-Fi) | ✅ Oui |
| **Taux de réussite** | Élevé (si pris en charge) | Très élevé (fonctionne toujours) | Très élevé |
| **Idéal pour** | Transfert rapide, opérateurs pris en charge par app | Tout opérateur, secours quand l'app échoue | Mises à niveau d'appareils du même écosystème |
| **Coût** | Généralement gratuit | Peut coûter $0‑25 pour la réémission du QR code | Gratuit |


## Transfert eSIM d'Android vers iPhone

C'est le scénario le plus courant – passer d'un Samsung, Pixel ou autre Android à un nouvel iPhone. Le moyen le plus fiable de déplacer votre numéro est via l'application de votre opérateur.

### Étape par étape

**Avant de commencer :**
- Ayez l'application de votre opérateur installée sur le nouvel iPhone (ou soyez prêt à vous connecter sur le site de l'opérateur).
- Connaissez votre code PIN de compte ou vos identifiants de connexion.
- **NE supprimez PAS encore l'eSIM de votre Android.**

**Sur votre iPhone (cible) :**
1. Installez et ouvrez l'application de votre opérateur (par exemple, l'application T‑Mobile, Verizon ou AT&T).
2. Connectez-vous et cherchez une option telle que « Activer un eSIM », « Changer d'appareil » ou « Transférer vers un nouvel appareil ».
3. Suivez les invites pour saisir l'**EID** et l'**IMEI** de votre nouvel iPhone (affichés sous `Réglages` → `Général` → `Informations`).
4. L'opérateur pousse votre profil eSIM vers le nouvel iPhone, ou génère un QR code que vous pouvez scanner.
5. Sur l'iPhone, allez dans `Réglages` → `Cellulaire` → `Ajouter un eSIM` et scannez le QR code si un a été généré.
6. Attendez « Activation terminée ». Votre numéro est maintenant actif sur l'iPhone.
7. **Maintenant**, vous pouvez supprimer l'eSIM de votre Android (Réglages > Connexions > Gestionnaire SIM > appuyez sur l'eSIM > Supprimer).

**Astuce iOS 18 :** Si vous êtes sous iOS 18, le flux « Ajouter un eSIM » a été redessiné avec un scanner de QR plus visible et une meilleure gestion des erreurs. Vous verrez un indicateur de progression pendant le téléchargement du profil.

✅ **Terminé.** Votre numéro est maintenant actif sur l'iPhone. Si votre opérateur n'offre pas d'application, contactez-le pour réémettre votre eSIM sous forme de nouveau QR code (voir les méthodes de secours ci-dessous).

### Que faire si le transfert via l'application ne fonctionne pas ?

Utilisez le **QR code de secours de l'opérateur** :

- Contactez votre opérateur (chat, téléphone ou site web).
- Dites-leur que vous changez d'appareil et demandez-leur de **réémettre votre eSIM sous forme de nouveau QR code**.
- Scannez le nouveau QR code sur l'iPhone : `Réglages` → `Cellulaire` → `Ajouter un eSIM`.
- Terminez l'activation.

Si vous voyez une erreur **« unable to activate esim »** pendant ce processus, vérifiez votre connexion Wi‑Fi et réessayez.


## Transfert eSIM d'iPhone vers Android

Il n'y a aucune option intégrée « Transférer vers Android » sur iPhone. La méthode fiable est de faire réémettre votre eSIM par votre opérateur.

### Prérequis
- Votre nouveau téléphone Android est **débloqué**.
- Vous pouvez contacter votre opérateur (ou vous connecter à son application/site web).
- Votre Android est sous **Android 16 ou version ultérieure**.
- **NE supprimez PAS encore l'eSIM de votre iPhone.**

### Étapes

**Contactez votre opérateur (ou utilisez son application) :**
1. Dites-leur que vous déplacez votre eSIM d'un iPhone vers un téléphone Android.
2. Fournissez l'**EID** et l'**IMEI** du nouvel appareil Android (sous `Réglages` → `À propos du téléphone`).
3. Votre opérateur réémet votre eSIM sous forme de nouveau QR code (ou le pousse via son application).

**Sur votre Android (cible) :**
1. Allez dans `Réglages` → `Réseau et Internet` → `SIM` → `Ajouter un eSIM` (la formulation varie selon la marque).
2. Scannez le QR code fourni par l'opérateur.
3. Suivez les invites pour télécharger et activer le profil.
4. Attendez la fin de l'activation.
5. **Maintenant**, vous pouvez supprimer l'eSIM de votre iPhone (Réglages > Cellulaire > appuyez sur l'eSIM > Supprimer le forfait cellulaire).

✅ Terminé. Votre numéro vit maintenant sur le téléphone Android.

> ⚠️ **Important** : Une fois le transfert terminé, l'eSIM est **définitivement supprimé** de l'iPhone. Vous ne pouvez pas revenir en arrière sans votre opérateur. Assurez-vous d'avoir une autre ligne active ou du Wi‑Fi avant de transférer.


## Transférer un eSIM vers un nouvel iPhone ou Samsung

Bien que le transfert inter-plateformes soit le sujet de ce guide, de nombreux utilisateurs veulent simplement déplacer un eSIM au sein du même écosystème. Voici comment. (Vous passez à un iPhone 16 américain eSIM uniquement ? Le [guide d'activation iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) couvre les spécificités du transfert pendant la configuration.)

### Transférer un eSIM d'iPhone vers iPhone

Le **Quick Transfer** intégré d'Apple est la méthode la plus simple :

1. Pendant la configuration de votre nouvel iPhone, choisissez « Transférer l'eSIM depuis un iPhone à proximité » lorsqu'on vous le demande.
2. Gardez les deux téléphones proches avec Bluetooth et Wi‑Fi activés.
3. Confirmez le transfert sur votre ancien iPhone.
4. Attendez 1 à 2 minutes pour que le **téléchargement du profil eSIM** se termine sur le nouvel appareil.

**Si Quick Transfer ne fonctionne pas :** Allez dans Réglages > Cellulaire sur votre nouvel iPhone > Ajouter un eSIM > Transférer depuis un iPhone à proximité.

**Si cela échoue :** Utilisez la méthode du QR code de l'opérateur – contactez votre opérateur pour un nouveau QR code.

### Transférer un eSIM d'Android vers Android

Les méthodes de transfert Android varient selon la marque :

**Samsung :** Réglages > Connexions > Gestionnaire SIM > Ajouter un eSIM > Transférer l'eSIM depuis l'ancien appareil (suivez les invites à l'écran). Fonctionne sur Samsung Galaxy S21 et plus récents, séries Z Flip/Z Fold.

**Google Pixel :** Pendant la configuration, il peut vous être demandé de transférer votre eSIM. Sinon, utilisez l'application de l'opérateur ou demandez un nouveau QR code.

**Android général :** Si votre marque n'offre pas de transfert intégré, utilisez la méthode du QR code de secours de l'opérateur.

### Comparaison du transfert eSIM inter-plateformes vs intra-plateforme

| Fonctionnalité | Inter-plateformes | Intra-plateforme |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Quick Transfer fonctionne |
| **Android ↔ Android** | N/A | ✅ Méthodes spécifiques à la marque |
| **iOS ↔ Android** | ✅ Couvert dans ce guide | ❌ Non pris en charge directement |
| **Dépendance à l'opérateur** | Plus élevée | Plus faible (Apple/Google s'en chargent) |
| **Temps nécessaire** | 3-10 min | 1-2 min |
| **Taux de réussite** | Variable selon l'opérateur | Généralement élevé |

Pour savoir comment le comportement de l'eSIM diffère selon les générations d'iPhone (limites de stockage, règles de double SIM, variantes régionales), consultez notre [hub de compatibilité eSIM iPhone](/faq/iphone-11-esim-compatible/).


## Opérateurs qui prennent en charge le transfert inter-plateformes d'eSIM

Le transfert inter-plateformes d'eSIM est encore nouveau, et la prise en charge par les opérateurs est déployée progressivement. Il n'existe pas de liste publique complète de tous les opérateurs pris en charge, et la disponibilité change souvent, alors vérifiez le site web ou l'application de votre opérateur pour le statut actuel.

### Opérateurs pris en charge confirmés

| Opérateur | Région | Méthode de transfert | Limite de transfert | Coût |
|---------|--------|-----------------|----------------|------|
| **Orange** | France, Europe | Application Orange → « Mon espace eSIM » → « Transférer vers un nouvel appareil » | 3x par an | Gratuit |
| **SFR** | France | Application SFR & Moi → « Gérer ma SIM » → « Transférer l'eSIM » | 5x par an | Gratuit |
| **T-Mobile** | États-Unis | Application T-Mobile → « Gérer l'eSIM » → « Transférer vers un nouvel appareil » | Illimité | Gratuit |
| **Verizon** | États-Unis | Application My Verizon → « Activer ou changer d'appareil » | Illimité | Gratuit |
| **AT&T** | États-Unis | Application AT&T → « Activer l'eSIM » | Variable selon le forfait | Gratuit (postpayé) |
| **EE** | Royaume-Uni | Application EE → « Forfait » → « Transfert eSIM » | 3x par an | Gratuit |
| **Deutsche Telekom** | Allemagne | Application Telekom → « Transfert eSIM » | Illimité | Gratuit |
| **Swisscom** | Suisse | Application Swisscom → « Transfert eSIM » | 3x par an | Gratuit |
| **Bouygues** | France | Réémission du QR code (via le portail client) | 3x par an | Gratuit |
| **Free** | France | Réémission du QR code (via le portail client) | 2x par an | Gratuit |
| **Vodafone** | Royaume-Uni, Europe | Application Vodafone → « Transfert eSIM » | Variable selon le pays | Gratuit (postpayé) |
| **Google Fi** | États-Unis, mondial | Application Google Fi → « Activer sur cet appareil » | Illimité | Gratuit |

### Les eSIM de voyage ne sont pas transférables

| Fournisseur | Transférable ? | Que faire à la place |
|----------|---------------|-------------------|
| **Roami** | ❌ Non | Achetez un nouveau forfait sur votre nouvel appareil |
| **Airalo** | ❌ Non | Achetez un nouveau forfait sur votre nouvel appareil |
| **Holafly** | ❌ Non | Achetez un nouveau forfait sur votre nouvel appareil |
| **Nomad** | ❌ Non | Achetez un nouveau forfait sur votre nouvel appareil |

**Comment vérifier si votre opérateur le prend en charge ?** Essayez les étapes de la Méthode A ou B. Si votre opérateur n'offre pas de transfert via application ou de nouveau QR code, utilisez les méthodes de secours ci-dessous.


## Méthodes de secours quand le transfert inter-plateformes n'est pas pris en charge

Si votre opérateur n'est pas dans la liste, ou si vous voyez une **erreur de transfert eSIM**, utilisez l'une de ces alternatives :

### QR code émis par l'opérateur
1. Appelez ou discutez avec votre opérateur.
2. Dites-lui : « Je passe d'Android à iPhone (ou vice versa). Veuillez réémettre mon eSIM sous forme de nouveau QR code. »
3. Il vous enverra par e-mail un QR code ou un lien d'activation.
4. Sur le nouvel appareil, allez dans `Réglages` → `Cellulaire` → `Ajouter un eSIM` → `Utiliser un QR code` et scannez.
5. L'eSIM de l'ancien appareil cessera de fonctionner après l'activation du nouveau.

**Astuce :** Certains opérateurs facturent des frais minimes pour réémettre un eSIM ($0‑25). Demandez avant qu'ils ne le fassent.

### Saisie manuelle SM-DP+
Si votre opérateur vous donne un **code d'activation** et une **adresse SM‑DP+** (l'adresse du serveur qui livre le profil eSIM à votre téléphone), vous pouvez ajouter manuellement l'eSIM sur le nouvel appareil :
1. `Réglages` → `Cellulaire` → `Ajouter un eSIM` → `Saisir les détails manuellement`.
2. Collez l'adresse SM‑DP+ et le code d'activation.
3. Appuyez sur `Suivant`. Cela fonctionne sur iPhone et Android.

### Achetez un nouveau forfait
Si vous utilisez un eSIM de voyage (Roami, Airalo, Holafly), ne perdez pas de temps à essayer de le transférer – cela ne fonctionnera pas. Achetez simplement un nouveau forfait sur votre nouvel appareil — notre [comparaison des forfaits eSIM de voyage](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) classe les fournisseurs qui valent la peine d'être réinstallés.

> **Astuce de transition :** Le QR code de secours est la méthode la plus fiable pour tout opérateur, qu'il prenne en charge ou non le transfert via application. Cela peut nécessiter un appel téléphonique, mais cela fonctionne toujours.


## Transfert eSIM ou nouvelle activation ?

Parfois, acheter un nouveau eSIM est plus rapide que de transférer. Voici quand choisir quoi :

| Facteur | Transfert | Nouvelle activation | Lequel est meilleur ? |
|--------|----------|----------------|------------------|
| **Vous gardez le même numéro de téléphone** | ✅ Gardez le numéro | ❌ Obtenez un nouveau numéro | Le transfert gagne |
| **Vous avez une 2FA liée à votre numéro** | ✅ Gardez l'accès | ❌ Risque de perdre l'accès | Le transfert gagne |
| **Votre opérateur facture le transfert** | Peut coûter $0‑25 | $0 (vous achetez déjà du nouveau) | Dépend des frais |
| **eSIM de voyage** | ❌ Impossible | ✅ Facile | La nouvelle activation gagne |
| **Vous êtes pressé (moins de 5 minutes)** | ⚠️ Peut prendre 5-10 min | ✅ 2 min pour scanner le QR | La nouvelle activation gagne |
| **Vous voulez garder votre forfait/données existants** | ✅ Gardez les données non utilisées | ❌ Perdez les données non utilisées | Le transfert gagne |

**Recommandation :** Si vous gardez le même forfait opérateur et voulez garder votre numéro de téléphone, transférez. Si vous êtes sur un eSIM de voyage ou pressé, achetez simplement un nouveau forfait sur votre nouvel appareil.


## Pourquoi mon transfert eSIM a-t-il échoué ?

| Erreur / Symptôme | Cause la plus probable | Correction |
|----------------|-------------------|-----|
| « Transfert non disponible – opérateur non pris en charge » | Votre opérateur ne prend pas en charge le transfert inter-plateformes. | Utilisez les méthodes de secours ci-dessus. |
| Le QR code scanne mais dit ensuite « session expirée » | Vous avez pris trop de temps après la génération du QR code (il a expiré). | Répétez le processus et scannez immédiatement. |
| Android dit « Pairing failed » | Autorisations Bluetooth ou réseau local bloquées. | Sur iPhone : `Réglages > Confidentialité et sécurité > Réseau local` – assurez-vous que `Réglages` est activé. Sur Android : désactivez « Wi‑Fi security scan » (généralement sous les paramètres Wi‑Fi avancés). |
| Le transfert commence mais s'arrête à 50 % | Signal Wi‑Fi ou cellulaire faible. | Rapprochez les deux téléphones du routeur. Désactivez le VPN sur les deux appareils. |
| **« eSIM déjà lié à un autre appareil »** | Le profil n'a pas été correctement libéré de l'ancien appareil. | Sur l'ancien appareil, allez dans `Réglages > Cellulaire` et supprimez manuellement `Supprimer l'eSIM` (s'il est encore visible). Puis attendez 5 minutes et réessayez. Si cela échoue encore, contactez l'opérateur pour une libération de profil. |
| iPhone demande un **code de confirmation** après le scan | Le profil eSIM a un **code de confirmation eSIM** obligatoire (rare). | Cherchez le code dans l'e-mail de l'opérateur (souvent 4 à 8 chiffres). Si vous ne le trouvez pas, demandez à l'opérateur. |
| Le double-clic sur le bouton latéral ne fait rien (iPhone → Android) | Authentification biométrique non configurée ou désactivée. | Configurez Face ID / Touch ID, ou désactivez temporairement « Require Attention » pour Face ID. |
| **eSIM sans service** après le transfert | Paramètres APN non configurés. | Configurez l'APN manuellement (voir le tableau ci-dessous). |
| **Profil eSIM expiré** | Le profil a une date de validité limitée. | Contactez votre opérateur pour un nouveau QR code. |
| **« Pas d'option Ajouter un eSIM » sur iPhone** | L'iPhone est verrouillé opérateur ou sous un iOS plus ancien. | Vérifiez le verrouillage opérateur dans Réglages > Général > Informations. Mettez à jour vers iOS 18. |
| **« SIM non prise en charge » sur le nouvel appareil** | Le nouvel appareil est verrouillé à un autre opérateur. | Vérifiez le Verrouillage opérateur – doit indiquer « Aucune restriction SIM ». |
| **Limite de transfert dépassée** | Vous avez transféré cet eSIM trop de fois (certains opérateurs limitent à 3‑5 par an). | Contactez le support de l'opérateur pour réinitialiser la limite ou obtenir un nouvel eSIM. |
| **« Échec du transfert eSIM » sur Samsung** | Samsung Smart Switch peut ne pas prendre en charge le profil d'opérateur spécifique. | Utilisez plutôt le QR code de secours de l'opérateur. |

### Configuration manuelle de l'APN

Si après le **transfert eSIM** vous rencontrez **eSIM sans service**, configurez l'APN manuellement :

| Opérateur | APN | Nom d'utilisateur | Mot de passe |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (vide) | (vide) |
| **SFR** | sl2sfr | (vide) | (vide) |
| **Free** | free | (vide) | (vide) |
| **Bouygues** | ebouygtel.com | (vide) | (vide) |
| **T-Mobile (US)** | fast.t-mobile.com | (vide) | (vide) |
| **AT&T (US)** | nxgen | (vide) | (vide) |
| **Verizon (US)** | vzwinternet | (vide) | (vide) |
| **Telekom (DE)** | internet.telekom | (vide) | (vide) |

### Toujours bloqué ?
Rassemblez ces éléments avant d'appeler le support :
- IMEI et EID de l'appareil source
- IMEI et EID de l'appareil cible
- Le message d'erreur exact (faites une capture d'écran)
- Votre numéro de compte ou numéro de téléphone


## Que devient l'ancien eSIM après le transfert ?

**Il est immédiatement désactivé.**

L'ancien profil eSIM peut rester visible brièvement sur l'ancien appareil. Vous pouvez le supprimer manuellement :
`Réglages > Cellulaire > appuyez sur l'ancien eSIM > Supprimer l'eSIM`.

> 💰 **Facturation** : Votre opérateur continuera à vous facturer le forfait. Le transfert n'annule pas le forfait – il déplace juste la SIM. Pour annuler, vous devez contacter l'opérateur séparément.

Si vous vous inquiétez des erreurs **eSIM lié à un autre appareil**, supprimez toujours l'ancien profil de l'appareil source après la fin réussie du transfert.

### Chronologie transfert vs suppression

| Action | Ce qui se passe | Quand le faire |
| :--- | :--- | :--- |
| **Transfert initié** | L'opérateur envoie le profil au nouvel appareil | Avant de supprimer l'ancien eSIM |
| **Nouvel eSIM activé** | Le nouvel appareil se connecte au réseau | Après la fin de l'activation |
| **Ancien eSIM désactivé** | L'opérateur désactive l'ancien profil | Automatiquement – peut prendre 1‑5 minutes |
| **Supprimer l'ancien eSIM** | Retire le profil inactif de l'ancien appareil | Après avoir confirmé que le nouvel appareil fonctionne |


## Déplacer WhatsApp, iMessage et 2FA après un transfert eSIM

Après avoir transféré avec succès votre eSIM, vous devez configurer vos applications de messagerie et services d'authentification sur le nouvel appareil.

### WhatsApp

WhatsApp utilise votre numéro de téléphone pour identifier votre compte. Après le **transfert eSIM** :

1. Ouvrez WhatsApp sur votre nouvel appareil.
2. Entrez votre numéro de téléphone (celui que vous avez transféré).
3. Vous recevrez un code de vérification par SMS ou appel automatisé sur votre numéro.
4. Entrez le code – vos conversations réapparaîtront si vous avez sauvegardé précédemment.

**Astuce :** Sauvegardez vos conversations avant de commencer le transfert. Sur iPhone : WhatsApp > Réglages > Chats > Sauvegarde des chats. Sur Android : WhatsApp > Réglages > Chats > Sauvegarde.

**Problème WhatsApp courant :** Si vous ne recevez pas le code de vérification par SMS, essayez l'option « Appelez-moi » – WhatsApp appellera votre numéro et lira le code. Si cela échoue, attendez 5 minutes et réessayez (le réseau de l'opérateur peut encore se stabiliser).

### iMessage et FaceTime

1. Allez dans `Réglages` → `Messages` et activez `iMessage`.
2. Allez dans `Réglages` → `FaceTime` et activez `FaceTime`.
3. Attendez 1 à 2 minutes pour l'activation. Si cela indique « En attente d'activation », désactivez-le et réactivez-le.
4. Vérifiez que votre numéro est sélectionné : Réglages > Messages > Envoyer et recevoir → sélectionnez votre numéro eSIM.

### Authentification à deux facteurs et vérification par SMS

Puisque votre numéro de téléphone n'a pas changé, les codes 2FA par SMS fonctionneront normalement. Cependant, les authentificateurs basés sur des applications (Google Authenticator, Microsoft Authenticator, Authy) peuvent nécessiter une reconfiguration :

- **Authy :** Vos jetons sont chiffrés et sauvegardés dans le cloud – connectez-vous simplement sur le nouvel appareil.
- **Google Authenticator :** Vous devrez transférer vos comptes individuellement ou utiliser la fonctionnalité « Transférer les comptes ».
- **Microsoft Authenticator :** Utilisez la fonctionnalité de sauvegarde pour restaurer sur le nouvel appareil.
- **SMS 2FA :** Testez en demandant un code de vérification à votre banque ou fournisseur d'e-mail pour confirmer que la livraison SMS fonctionne.

### Applications bancaires et services financiers

La plupart des banques détecteront le changement d'appareil et exigeront une réauthentification. Ayez vos identifiants de connexion et tout dispositif de jeton physique à portée de main.

Pour plus d'aide sur la migration des applications après un **transfert eSIM**, consultez notre [guide de configuration eSIM](/faq/how-to-activate-an-esim/).


## Meilleures pratiques pour éviter les maux de tête du transfert eSIM

✅ **Avant de transférer :**
- Vérifiez la prise en charge par l'opérateur (essayez le menu – s'il est là, c'est pris en charge).
- Mettez à jour les deux téléphones vers le dernier OS (iOS 18 / Android 16).
- Chargez les deux téléphones au-dessus de 30 %.
- Désactivez temporairement le VPN et les bloqueurs de publicité.
- Vérifiez que votre **profil eSIM** n'est pas **expiré**.
- Sauvegardez WhatsApp et autres applications de messagerie.
- **NE supprimez PAS encore l'eSIM de l'ancien appareil.**

✅ **Pendant le transfert :**
- Gardez les téléphones à moins de 10 cm l'un de l'autre.
- Ne changez pas d'application et ne verrouillez pas l'écran.
- Ne désactivez pas le Bluetooth ou le Wi‑Fi.
- Attendez le message de confirmation – ne supposez pas que c'est fini.

✅ **Après le transfert :**
- Testez les appels et les données sur le nouvel appareil.
- Supprimez l'ancien eSIM de l'appareil source pour éviter la confusion.
- Gardez le Wi‑Fi de l'ancien appareil activé pendant au moins une heure – certains opérateurs ont besoin d'une poignée de main finale.
- Réactivez WhatsApp, iMessage et les applications 2FA.
- Testez les codes de vérification SMS de votre banque.
- Réglez un rappel pour annuler l'ancien forfait si vous changez complètement d'opérateur.


## Voyager et transférer un eSIM

Si vous voyagez à l'étranger et devez transférer votre eSIM, voici quelques points importants. Et si le transfert ne peut pas être sauvé en cours de voyage, la sortie la plus rapide est généralement d'acheter un forfait local — consultez le [guide des forfaits eSIM américains](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) ou le [guide d'achat eSIM britannique](/faq/how-to-buy-a-uk-esim/) selon votre destination :

### Transférer un eSIM en voyage
- Le transfert inter-plateformes fonctionne **dans le monde entier** tant que votre opérateur le prend en charge.
- Assurez-vous d'avoir une connexion Wi‑Fi stable (hôtel, café) avant de commencer.
- Si le transfert échoue, le QR code de secours de l'opérateur est votre meilleure option.
- Vérifiez les **paramètres APN de l'eSIM** après le transfert – certains opérateurs exigent une configuration manuelle.

### Opérateurs français et voyage
- **Orange** et **SFR** autorisent le transfert inter-plateformes où que vous soyez.
- **Free** et **Bouygues** exigent la réémission d'un QR code – faites-le avant de partir.
- Pour les **eSIM de voyage**, rappelez-vous qu'ils ne sont généralement **pas transférables** – achetez un nouveau forfait sur votre nouvel appareil.

### Comment contacter les opérateurs à l'étranger

| Opérateur | Méthode de contact du support | Remarques |
|---------|------------------------|-------|
| **Orange** | Chat de l'application Orange, support WhatsApp ou téléphone | 24/7 dans la plupart des régions |
| **SFR** | Chat de l'application SFR & Moi, téléphone | Horaires limités |
| **T-Mobile** | Chat de l'application T‑Mobile, iMessage, téléphone | Support 24/7 aux États-Unis |
| **Verizon** | Chat de l'application My Verizon, téléphone | Support 24/7 |
| **AT&T** | Chat de l'application AT&T, téléphone | Horaires limités à l'international |
| **EE** | Chat de l'application EE, téléphone | Support 24/7 au Royaume-Uni |

**Astuce :** Téléchargez l'application de votre opérateur et enregistrez les coordonnées du support avant de voyager. Certains opérateurs exigent une vérification par SMS pour se connecter – si vous êtes en plein transfert, cela pourrait ne pas fonctionner.

### Que faire si votre transfert échoue en cours de voyage

1. Connectez-vous au Wi‑Fi gratuit le plus proche (aéroports, hôtels, cafés).
2. Contactez le support de votre opérateur par e-mail ou application de messagerie.
3. Demandez-leur de réémettre votre eSIM sous forme de QR code.
4. Scannez le QR code sur votre nouvel appareil.

### Astuces pour les globe-trotters
- Gardez toujours une copie de sauvegarde de vos QR codes eSIM.
- Si vous changez de téléphone en cours de voyage, préférez le transfert natif au QR code lorsque c'est possible.
- Pour plusieurs destinations, envisagez un forfait eSIM mondial couvrant plusieurs pays.
- Enregistrez les coordonnées du support de votre opérateur avant de voyager.

Pour plus d'informations sur l'utilisation des eSIM en voyage, consultez notre [guide eSIM de voyage 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Questions fréquentes

**Q1 : Puis-je transférer un eSIM de données uniquement (comme un eSIM de voyage) ?**
Non. La plupart des eSIM de voyage (Roami, Airalo, Holafly, Nomad, etc.) ne prennent pas en charge le transfert inter-plateformes. Ils sont conçus pour être installés une seule fois par appareil. Vous devrez acheter un nouveau forfait sur votre nouveau téléphone. Voir « Pourquoi les eSIM de voyage ne peuvent pas être transférés ? » ci-dessus pour l'explication technique.

**Q2 : Le transfert fonctionne-t-il entre un iPhone 11 et un Samsung S24 ?**
Oui – tant que les deux répondent aux exigences d'OS. L'iPhone 11 prend en charge iOS 18 (il fonctionne jusqu'à iOS 18). Le Samsung S24 prend en charge Android 16. La génération de matériel n'a pas d'importance ; seule la version de l'OS compte.

**Q3 : L'application de mon opérateur n'offre pas de transfert eSIM. Pourquoi ?**
Tous les opérateurs ne prennent pas en charge le transfert eSIM via application. Si votre opérateur ne l'offre pas, utilisez le QR code de secours de l'opérateur : contactez votre opérateur et demandez-lui de réémettre votre eSIM sous forme de nouveau QR code. Certains opérateurs facturent des frais minimes pour cela ($0‑25).

**Q4 : Mes codes WhatsApp / iMessage / 2FA fonctionneront-ils encore après le transfert ?**
WhatsApp utilise votre numéro de téléphone – il détectera le changement de SIM et pourrait demander une re-vérification (généralement automatique). iMessage sur iPhone utilise le numéro eSIM et devrait se réactiver dans la minute. Pour la 2FA, les services qui envoient des SMS à votre numéro fonctionneront normalement – le numéro n'a pas changé. Voir la Section 10 pour les étapes de migration détaillées.

**Q5 : Puis-je transférer le même eSIM plusieurs fois dans les deux sens ?**
Oui, mais chaque transfert nécessite le même processus. Certains opérateurs limitent le nombre de fois qu'un eSIM peut être transféré chaque année (par exemple, 3 à 5 fois). Si vous atteignez la limite, contactez votre opérateur pour obtenir de l'aide.

**Q6 : Et les configurations double SIM eSIM + SIM physique ?**
Le transfert ne déplace que l'eSIM. La SIM physique reste dans l'appareil source. Si vous voulez déplacer les deux, vous devrez transférer l'eSIM (en utilisant ce guide) et déplacer physiquement la carte nano‑SIM vers le nouvel appareil. Pour optimiser les expériences double SIM après le transfert, consultez notre **[Double eSIM ne fonctionne pas ? 12 correctifs pour iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**Q7 : Que faire si j'obtiens une erreur « profil eSIM expiré » pendant le transfert ?**
Contactez votre opérateur pour obtenir un nouveau QR code – la réémission est généralement gratuite. Assurez-vous d'activer immédiatement le nouveau QR code (dans les 30 minutes) pour éviter qu'il n'expire à nouveau.

**Q8 : Pourquoi mon verrouillage opérateur m'empêche-t-il de transférer ?**
Si votre téléphone est sous **verrouillage opérateur**, vous ne pouvez transférer un eSIM que vers un appareil du même opérateur. Contactez votre opérateur pour déverrouiller l'appareil avant le transfert. Sur iPhone : Réglages > Général > Informations > Verrouillage opérateur doit indiquer « Aucune restriction SIM ».

**Q9 : Puis-je transférer un eSIM Orange vers un appareil non-Orange ?**
Oui, si votre appareil est débloqué et que votre forfait Orange le permet. Le **transfert eSIM Orange** est pris en charge via l'application Orange ou le transfert natif. Orange autorise jusqu'à 3 transferts par an.

**Q10 : Le transfert fonctionne-t-il avec un eSIM Free ?**
Non – Free ne prend pas en charge le transfert inter-plateformes. Utilisez la méthode du QR code de secours depuis le portail client Free. Free autorise jusqu'à 2 transferts par an.

**Q11 : Qu'est-ce qu'un code de confirmation eSIM et où le trouver ?**
Certains profils eSIM ont un **code de confirmation eSIM** obligatoire – généralement 4 à 8 chiffres. Cherchez-le dans l'e-mail de l'opérateur ou les instructions d'activation. S'il n'est pas trouvé, demandez à votre opérateur.

**Q12 : Que signifie « eSIM ne se transfère pas vers le nouveau téléphone » ?**
Cela signifie généralement que votre opérateur ne prend pas en charge le transfert, le QR code a expiré, l'ancien eSIM est toujours actif, ou le nouvel appareil est verrouillé opérateur. Supprimez d'abord l'ancien eSIM (s'il est encore visible), puis réessayez. Voir la Section 7 pour le tableau complet de dépannage.

**Q13 : Comment corriger « échec de l'activation eSIM » après le transfert ?**
Vérifiez votre connexion Wi‑Fi, redémarrez les deux appareils et réessayez. Si cela échoue encore, utilisez la méthode de saisie manuelle avec l'adresse SM‑DP+ de l'e-mail de votre opérateur.

**Q14 : Le transfert de mon eSIM annule-t-il mon forfait ?**
Non – le transfert de l'eSIM ne fait que déplacer le profil SIM vers un nouvel appareil. Votre forfait (et la facturation) continue comme avant. Pour annuler votre forfait, vous devez contacter l'opérateur séparément.

**Q15 : Puis-je transférer un eSIM si je l'ai déjà supprimé de l'ancien téléphone ?**
Oui, mais c'est plus compliqué. Si vous avez supprimé l'eSIM avant de commencer le transfert, contactez votre opérateur et demandez-lui de réémettre votre eSIM sous forme de nouveau QR code. Il peut le faire car votre profil existe toujours sur ses serveurs.

**Q16 : Combien coûte la réémission d'un QR code eSIM ?**
La plupart des opérateurs réémettent les eSIM gratuitement (surtout les forfaits postpayés). Certains opérateurs prépayés ou MVNO peuvent facturer des frais minimes ($5‑25). Demandez avant de demander la réémission.

**Q17 : Puis-je transférer un eSIM Vodafone vers un appareil non-Vodafone ?**
Oui, tant que votre appareil est débloqué et que votre forfait Vodafone autorise le transfert eSIM. Vodafone prend en charge le transfert via son application dans la plupart des pays. Vérifiez l'application Vodafone pour l'option « transfert eSIM ».

**Q18 : Que faire si j'atteins la limite de transfert de mon opérateur ?**
Certains opérateurs limitent les transferts à 3‑5 par an. Si vous atteignez la limite, contactez le support de l'opérateur – il peut souvent réinitialiser la limite ou émettre manuellement un nouveau QR code eSIM (en contournant le système de transfert).

**Q19 : Puis-je transférer deux eSIM en même temps (double eSIM) ?**
Oui, mais vous devez les transférer **un à la fois**. Chaque profil eSIM est indépendant et doit être transféré séparément en utilisant le même processus. Si vous avez deux eSIM actifs sur votre ancien appareil, transférez d'abord l'eSIM principal, puis le secondaire.

**Q20 : Quelle est la différence entre transfert eSIM et réémission eSIM ?**
Le transfert déplace votre profil existant vers un nouvel appareil (en gardant votre numéro et forfait). La réémission crée un tout nouveau profil eSIM pour le même numéro – l'ancien profil est définitivement désactivé. La réémission est la méthode de secours lorsque le transfert n'est pas pris en charge par votre opérateur.

---

## Conclusion finale

La capacité de transférer des eSIM entre iPhone et Android sans intervention de l'opérateur est un **changement de donne en 2026**. Cela supprime le dernier point de friction majeur pour changer d'écosystème. Tant que votre opérateur est dans la liste des pris en charge et que les deux téléphones sont à jour, vous pouvez déplacer votre numéro en moins d'une minute.

**Rappelez-vous** :
- Si votre opérateur n'est pas pris en charge, le QR code de secours fonctionne toujours – cela demande juste un appel téléphonique.
- Pour les eSIM de voyage, traitez-les comme à usage unique ; achetez-en de nouveaux sur chaque appareil.
- **Ne supprimez jamais l'ancien eSIM avant de commencer le transfert** – c'est l'erreur la plus courante.
- Vérifiez le verrouillage opérateur avant de commencer – « Aucune restriction SIM » est obligatoire.
- Certains opérateurs limitent les transferts par an – vérifiez avant de commencer.

Si vous rencontrez des messages persistants d'**erreur de transfert eSIM**, notre **[Guide de dépannage approfondi eSIM (16 cas réels)](/faq/esim-deep-troubleshooting-guide-2026/)** couvre des solutions avancées.

👉 **Vous transférez vers un forfait de voyage ?** Consultez [eSIM pour les États-Unis](/united-states-esim/) ou [eSIM pour l'Europe](/europe-esim/) une fois votre transfert terminé.

👉 **Vous n'êtes pas sûr que votre nouveau téléphone prenne en charge l'eSIM ?** Vérifiez notre **[liste complète de compatibilité](/compatibility/)** avant de commencer.

👉 **Vous testez un eSIM de voyage sur votre nouvel appareil ?** Procurez-vous un **[essai eSIM Roami gratuit](/free-esim/)** pour confirmer que tout fonctionne.

---

*Informations basées sur la documentation officielle d'Apple et Android, les normes GSMA et les orientations des opérateurs en date de septembre 2026. Les fonctionnalités et la prise en charge par les opérateurs sont susceptibles de changer.*
## Sources

- [GSMA — spécification eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Assistance Apple — Configurer l'eSIM sur iPhone](https://support.apple.com/en-us/HT212780)
- [Assistance Google — Configurer un eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Assistance Google — eSIM sur Android](https://support.google.com/android/answer/11241215)