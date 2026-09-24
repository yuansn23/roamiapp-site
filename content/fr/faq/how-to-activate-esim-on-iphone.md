---
title: "Comment activer un eSIM sur iPhone (2026)"
h1_title: "Comment activer un eSIM sur iPhone en 2026 – Guide complet étape par étape"
description: "Guide complet d'activation eSIM iOS 2026. Pas besoin d'appeler votre opérateur. Suivez des instructions simples pour le code QR, l'app Réglages ou l'app opérateur. Rapide et gratuit."
keywords: ["activation eSIM", "comment activer eSIM iPhone", "configuration eSIM iPhone", "ajouter eSIM sur iPhone", "code QR eSIM iPhone", "eSIM de voyage iPhone", "dépannage eSIM iPhone", "transférer eSIM vers nouvel iPhone", "échec activation eSIM iPhone", "eSIM pas de service iPhone", "eSIM bloqué sur activation"]
date: 2026-09-12T00:00:00Z
lastmod: 2026-09-12T00:00:00Z
tags: ["eSIM", "iOS", "Dépannage", "Configuration voyage"]
toc: true
image: "/img/faq/activate-esim-iphone.webp"
image-1: "/img/faq/activate-esim-iphone-1.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Mis à jour le"
  min_read: "min de lecture"
  toc: "Table des matières"

# Breadcrumbs
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
    - name: "eSIM UK"
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
    - question: "Qu'est-ce que l'activation eSIM et comment fonctionne-t-elle ?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Comment activer un eSIM ?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Comment activer l'eSIM sur iPhone (tous modèles) ?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Dernière liste de compatibilité eSIM"
      url: "/compatibility/"
---


> **Note de l'éditeur :** Activer un eSIM sur iPhone prend environ cinq minutes — scannez le code QR, parcourez les Réglages, et le profil se télécharge. Chaque étape ici a été testée sur du matériel réel sous iOS 17 et 18. Suivez les étapes pour votre version d'iOS et vous serez connecté avant le décollage.

**La réponse courte :** Sur un iPhone, vous activez un eSIM depuis l'app Réglages — aucun appel à votre opérateur, aucune carte physique. Cette page détaille le chemin spécifique à iOS en profondeur : les menus exacts, les différences entre iOS 17 et 18, le transfert d'un profil vers un nouvel iPhone, et le nettoyage iMessage/FaceTime que la plupart des guides sautent.

Pour le concept derrière tout cela, voir [Qu'est-ce que l'activation eSIM ?](/faq/what-is-esim-activation-and-how-does-it-work/). Sur Android à la place ? Utilisez le [guide d'activation général](/faq/how-to-activate-an-esim/).

Vous utilisez un iPhone 16 ? Il existe un [guide eSIM iPhone 16 dédié](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/).

## Votre iPhone est-il prêt pour l'eSIM ?

Une vérification rapide : composez `*#06#` — si un **EID** à 32 chiffres apparaît, votre iPhone a l'eSIM. Pour la liste complète des modèles iPhone (du XS à la gamme 16/17, SE 2e/3e génération) et le nombre de profils que chacun contient, voir le [hub de compatibilité eSIM iPhone](/faq/iphone-11-esim-compatible/).

## Avant de commencer l'activation de l'eSIM

1. **Débloqué** — Réglages > Général > Informations > Verrouillage opérateur doit indiquer « Aucune restriction SIM ». Un iPhone verrouillé ne peut pas installer l'eSIM d'un autre fournisseur.
2. **Wi-Fi** — le profil se télécharge depuis le serveur sécurisé de votre opérateur, donc vous avez besoin d'une connexion (les données cellulaires ne suffiront pas pour le téléchargement initial).
3. **Code d'accès** — iOS demande votre code d'écran de verrouillage pour autoriser l'installation.
4. **Le code QR** — ayez-le ouvert sur un autre appareil, ou enregistrez l'image dans Photos et utilisez « Choisir une photo » plus tard.

## Votre ligne principale vs un eSIM de voyage

Avant d'ouvrir les Réglages, nommez ce que vous faites réellement — le flux diffère légèrement, et savoir lequel vous utilisez évite la plupart des confusions.

**Scénario A : activer votre ligne principale (remplacement d'un opérateur ou nouveau téléphone).** C'est une relation avec l'opérateur. Votre opérateur vous remet soit un code QR, soit pousse l'eSIM via son application (Verizon, T-Mobile, AT&T, Visible, Mint le font tous), soit utilise « Activation eSIM opérateur » où le profil apparaît automatiquement une fois connecté à votre compte opérateur. Vous voudrez vérifier que iMessage et FaceTime se ré-enregistrent sur le nouveau numéro par la suite.

**Scénario B : ajouter un eSIM de voyage (en conservant votre numéro personnel).** C'est une seconde ligne distincte pour les données à l'étranger. Vous gardez votre SIM physique ou eSIM personnel intact, installez l'eSIM de voyage à côté, puis pointez les données cellulaires vers la ligne de voyage. L'eSIM de voyage est généralement uniquement pour les données, donc les appels et SMS restent sur votre numéro personnel.

Tout ce qui suit s'applique aux deux, mais les sections « convertir », « Transfert rapide » et « ré-enregistrer iMessage » sont du territoire du Scénario A, tandis que la configuration à deux lignes est du Scénario B.

## Comment installer un eSIM sur iPhone

### Scanner un code QR

1. Réglages > Cellulaire (ou Données mobiles).
2. Appuyez sur **Ajouter un eSIM** (iOS plus ancien : **Ajouter un forfait cellulaire**).
3. Appuyez sur **Utiliser le code QR**.
4. Tenez le téléphone à environ 15 cm du code, avec l'écran affichant le code à pleine luminosité.
5. Lorsque le forfait apparaît, appuyez sur **Continuer** et saisissez votre code d'accès si demandé.

S'il ne scanne pas après quelques essais, choisissez **Saisir les détails manuellement** au bas de l'écran de l'appareil photo.

### Saisie manuelle

Allez dans Réglages > Cellulaire > Ajouter un eSIM > Utiliser le code QR > **Saisir les détails manuellement**, puis tapez l'adresse SM-DP+ et le code d'activation de l'e-mail de votre fournisseur. C'est la solution de repli fiable lorsque le code est endommagé ou se trouve sur le même téléphone que vous activez.

### Application de l'opérateur

Des fournisseurs comme Roami, Airalo et Holafly s'installent en un seul appui depuis leur application — ouvrez votre forfait et appuyez sur **Installer** ou **Activer**, puis autorisez l'invite. Le chemin le plus rapide, sans appareil photo.

## Convertir votre SIM physique en eSIM sur iPhone

Si votre opérateur le prend en charge, iOS peut transformer votre SIM physique en eSIM directement sur le téléphone — pas de visite en magasin, pas de nouvelle carte SIM, pas de code QR. C'est la façon la plus propre de libérer l'emplacement SIM physique (par exemple, pour une SIM locale à l'étranger) ou de passer entièrement au numérique avant de vendre votre téléphone.

1. Réglages > Cellulaire.
2. Appuyez sur la ligne actuellement sur votre SIM physique.
3. Appuyez sur **Convertir en eSIM** (chez certains opérateurs, il est indiqué **Convertir la SIM physique en eSIM**).
4. Appuyez sur **Convertir le forfait cellulaire**, puis **Convertir en eSIM**.
5. Attendez la conversion — généralement moins d'une minute — puis retirez la carte SIM physique lorsque iOS le demande.

Quelques pièges à connaître. **La prise en charge par les opérateurs varie** — les trois grands (AT&T, Verizon, T-Mobile) le prennent en charge, mais de nombreux MVNO et opérateurs prépayés n'affichent pas l'option. **Votre iPhone doit être sur le réseau de cet opérateur** pour convertir (il vérifie la ligne pendant la conversion). **Vous ne pouvez pas convertir une SIM étrangère ou de voyage** — cette fonction ne convertit que la SIM de l'opérateur avec lequel votre téléphone est actuellement connecté. Et une fois convertie, la carte physique est morte — jetez-la, ne la donnez pas à quelqu'un d'autre.

Vous ne voyez pas « Convertir en eSIM » ? Votre opérateur ne l'a pas activé. Vous pouvez toujours passer au numérique à l'ancienne : demandez-lui un code QR eSIM et suivez l'installation standard ci-dessus.

## Changements eSIM iOS 17 vs iOS 18

| Fonctionnalité | iOS 17 | iOS 18 |
|---|---|---|
| Chemin Ajouter un eSIM | Réglages > Cellulaire > Ajouter un eSIM | Même chemin |
| Libellé du bouton | « Ajouter un forfait cellulaire » sur certains appareils | « Ajouter un eSIM » partout |
| Saisie manuelle | Bas de l'écran de scan | Plus visible, repensée |
| Transfert rapide | Disponible depuis iOS 16 | Plus fiable, meilleur indicateur de progression |
| Mises à jour opérateur | Certaines nécessitent un redémarrage | Mises à jour en arrière-plan |

Si vous voyez « Ajouter un forfait cellulaire », c'est la même fonction que « Ajouter un eSIM ».

## Historique des versions iOS pour l'eSIM

Les libellés ont dérivé plus que les gens ne le réalisent. Voici l'arc complet, pour qu'un tutoriel de trois ans sur votre téléphone de deux ans ait encore du sens.

| Version iOS | Libellé du menu | Ce qui a changé pour l'eSIM |
|---|---|---|
| iOS 15 | « Ajouter un forfait cellulaire » | eSIM disponible sur XS/XR et plus récents ; dual SIM est un eSIM + une physique sur la plupart des modèles |
| iOS 16 | « Ajouter un forfait cellulaire » | **Transfert rapide** (déplacer un eSIM depuis un iPhone à proximité) arrive ; conversion en eSIM pour certains opérateurs |
| iOS 17 | « Ajouter un eSIM » / « Ajouter un forfait cellulaire » (mixte) | La conversion en eSIM s'étend à plus d'opérateurs ; dual eSIM *actif* sur iPhone 13 et plus récents |
| iOS 18 | « Ajouter un eSIM » partout | Écran d'ajout repensé, mises à jour opérateur en arrière-plan, vue dual-eSIM plus claire |

La version courte : tout à partir d'iOS 16 peut faire le Transfert rapide, iOS 17 a standardisé le dual eSIM, et iOS 18 est principalement une passe de polissage sur le libellé et la fiabilité.

## Ré-enregistrer iMessage et FaceTime après l'installation de l'eSIM

La plupart des guides s'arrêtent à « Configuration cellulaire terminée », mais il y a une bizarrerie iOS qui vaut la peine d'être traitée : si vous avez changé votre ligne vocale par défaut, iMessage et FaceTime peuvent encore être liés à l'ancienne ligne — ou afficher « En attente d'activation ».

1. Réglages > Messages > Envoi et réception, et confirmez que votre numéro est sélectionné.
2. Réglages > FaceTime, et confirmez que le bon numéro ou Apple ID est actif.
3. Si l'un ou l'autre affiche « En attente d'activation », désactivez et réactivez iMessage en étant connecté au Wi-Fi.

Cela compte dans les configurations à deux lignes où l'eSIM de voyage est uniquement pour les données et vous voulez garder la messagerie sur votre numéro personnel.

## Comment transférer un eSIM vers un nouvel iPhone

Lors de la configuration d'un nouvel iPhone près de l'ancien, choisissez **« Transférer l'eSIM depuis l'iPhone à proximité »** et gardez les deux appareils proches avec Bluetooth et Wi-Fi activés. Le profil se déplace sans fil en une minute ou deux.

Si l'invite n'apparaît pas, allez dans Réglages > Cellulaire > Ajouter un eSIM > **Transférer depuis l'iPhone à proximité** sur le nouveau téléphone. Si le profil arrive mais affiche « No Service », supprimez-le d'abord de l'ancien iPhone — certains opérateurs exigent que l'ancien profil soit libéré.

Pour déplacer un eSIM vers Android, les réémissions par l'opérateur, ou un téléphone que vous avez déjà vendu ou réinitialisé, voir le [guide de transfert eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/).

## Cas limites du Transfert rapide

Le Transfert rapide est brillant quand les deux iPhones sont dans la pièce. Quand ils ne le sont pas, voici ce qui se passe.

- **Vous avez vendu, perdu ou réinitialisé l'ancien iPhone.** Le Transfert rapide est hors de question — il nécessite l'appareil source allumé et déverrouillé. À la place, contactez votre opérateur et demandez-lui de réémettre l'eSIM (généralement gratuit, prend quelques minutes), puis installez le nouveau code QR sur le nouveau téléphone. Les étapes détaillées de réémission sont dans le [guide de transfert](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **« Transférer depuis l'iPhone à proximité » est manquant.** Il n'apparaît que sur les appareils exécutant iOS 16 ou ultérieur. Sur un iPhone plus ancien, ou si la source est hors de portée, revenez à une réémission du code QR par l'opérateur.
- **Le transfert se bloque à mi-chemin.** Mettez les deux téléphones sur le même Wi-Fi, gardez-les à quelques centimètres, et désactivez le mode Économie d'énergie sur les deux. Le Bluetooth doit rester activé — le Transfert rapide s'appaire via Bluetooth avant de passer au Wi-Fi.
- **Vous venez d'Android.** Le Transfert rapide est iPhone-vers-iPhone uniquement. Les transferts Android-vers-iPhone passent par votre opérateur, pas par l'app Réglages.
- **L'eSIM a été déplacé mais pas une SIM physique.** Le Transfert rapide ne déplace que les profils *eSIM* — une carte SIM physique doit encore être échangée physiquement (sauf si vous la convertissez en eSIM d'abord, ci-dessus).

## Ajouter un eSIM de voyage tout en conservant votre numéro personnel

C'est la configuration réelle la plus courante : votre ligne personnelle reste exactement là où elle est, et un eSIM de voyage l'accompagne pour les données. Faites-le dans cet ordre.

1. **Gardez votre ligne personnelle intacte.** Qu'il s'agisse d'une SIM physique ou d'un eSIM, laissez-la en place. Ne la supprimez pas, ne la convertissez pas.
2. **Installez l'eSIM de voyage** via QR, saisie manuelle, ou l'application du fournisseur (Roami, Airalo, Holafly).
3. **Nommez les lignes.** Réglages > Cellulaire, appuyez sur chaque ligne, et utilisez « Libellé du forfait cellulaire » pour les renommer — « Domicile » et « Roami Travel » — afin de pouvoir les distinguer plus tard.
4. **Définissez les données cellulaires sur l'eSIM de voyage.** Réglages > Cellulaire > Données cellulaires, et sélectionnez la ligne de voyage.
5. **Définissez la ligne vocale par défaut sur votre numéro personnel.** Cela garde les appels, iMessage et FaceTime sur votre numéro habituel.
6. **Activez l'itinérance des données sur l'eSIM de voyage, désactivez-la sur le domicile.** La ligne de voyage a besoin de l'itinérance pour atteindre les réseaux partenaires ; la ligne personnelle n'en a pas besoin, et la laisser désactivée évite les frais quotidiens accidentels.
7. **Laissez « Autoriser le basculement des données cellulaires » désactivé.** Avec cette option activée, une brève baisse de signal pourrait basculer les données vers votre ligne personnelle et déclencher des frais d'itinérance.

Vous avez maintenant un canal de données depuis votre eSIM de voyage et un numéro que tout le monde peut encore joindre — pas d'échange de SIM, pas de second téléphone.

## Configurez vos deux lignes pour le voyage

- **Ligne vocale par défaut :** gardez votre SIM personnelle pour que les appels et iMessages restent sur votre numéro habituel.
- **Données cellulaires :** pointez ceci vers l'eSIM de voyage.
- **Autoriser le basculement des données cellulaires :** laissez-le **DÉSACTIVÉ**. Avec cette option activée, une brève baisse de signal pourrait basculer les données vers votre ligne personnelle et déclencher des frais d'itinérance quotidiens.
- **Itinérance des données :** DÉSACTIVÉE sur la SIM personnelle, ACTIVÉE pour l'eSIM de voyage (les eSIM de voyage en ont besoin pour atteindre les réseaux partenaires).

Si les barres de signal s'affichent mais que les pages ne se chargent pas, c'est généralement un problème d'APN — la table APN complète se trouve dans le [guide de dépannage approfondi](/faq/esim-deep-troubleshooting-guide-2026/).

## « Ajouter un eSIM » grisé, ou « Ajouter un forfait cellulaire » manquant

Si l'option est grisée ou simplement absente, quelque chose en amont la bloque. Voici les causes, les plus courantes en premier.

| Cause | Comment le savoir | Solution |
|---|---|---|
| iPhone verrouillé opérateur | Réglages > Général > Informations > Verrouillage opérateur ne dit pas « Aucune restriction SIM » | Débloquez via votre opérateur, ou utilisez l'eSIM de l'opérateur verrouillé lui-même |
| L'opérateur ne propose pas l'eSIM | Votre opérateur ne délivre que des SIM physiques | Changez d'opérateur, ou utilisez un eSIM de voyage pour les données |
| Emplacements eSIM déjà pleins | iPhone 13+ contient deux eSIM actifs ; XS–12 en contient un | Désactivez ou supprimez une ligne existante pour libérer un emplacement |
| Profil MDM / entreprise | Un téléphone professionnel avec un profil de gestion installé | La restriction `AllowESIMModification` bloque les modifications — contactez l'IT |
| Modèle Chine / Hong Kong | Le numéro de modèle se termine par le suffixe spécifique à la Chine, pas de matériel eSIM | L'eSIM n'est pas disponible sur les iPhone de Chine continentale |
| Bug logiciel | Une récente mise à jour iOS a laissé le menu obsolète | Redémarrez, puis vérifiez à nouveau |

La cause principale est un verrouillage opérateur — il représente la majorité des tickets « pourquoi ne puis-je pas ajouter un eSIM ». La seconde est d'essayer d'ajouter une troisième ligne sur un téléphone qui n'autorise que deux actives.

## Et l'Apple Watch et l'iPad ?

Une Apple Watch reflète l'une des lignes de votre iPhone — elle ne peut pas utiliser un eSIM de voyage seule — et les iPad cellulaires utilisent leur propre chemin Réglages > Données cellulaires. Les détails complets sont dans le [guide eSIM iPad & Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

## Gérer plusieurs eSIM sur votre iPhone

Une fois que vous avez installé deux ou trois profils, un peu de rangement les empêche de devenir un tas confus.

- **Nommez chaque ligne.** Réglages > Cellulaire > une ligne > Libellé du forfait cellulaire. « Domicile », « Roami Travel » et « Spain eSIM » sont meilleurs que les valeurs par défaut (« Principale », « Secondaire », « Travel »).
- **Activez ou désactivez les lignes.** Réglages > Cellulaire > une ligne > Activer cette ligne. Désactivé signifie qu'elle arrête d'essayer de s'enregistrer — pratique pour un eSIM de voyage dormant que vous prévoyez de réutiliser au prochain voyage.
- **Basculez la ligne de données instantanément.** Réglages > Cellulaire > Données cellulaires vous permet de déplacer les données entre les lignes sans redémarrage.
- **Surveillez la limite de lignes actives.** iPhone 13 et plus récents autorisent deux lignes actives à la fois ; un troisième profil peut être *stocké* mais pas actif tant que vous n'en désactivez pas un.
- **Supprimez quand c'est fini.** Après un voyage, retirez l'eSIM de voyage expiré (Réglages > Cellulaire > la ligne > Supprimer l'eSIM) pour qu'il cesse d'encombrer la liste — mais seulement une fois le forfait expiré, car les codes QR sont à usage unique.

## eSIM, sauvegardes iCloud et effacement de votre iPhone

Une chose que la plupart des gens apprennent à leurs dépens : **les eSIM ne font pas partie de votre sauvegarde iCloud.** Une restauration à partir d'une sauvegarde récupère vos apps, réglages et photos — mais pas vos profils cellulaires. Les profils vivent sur la puce eUICC du téléphone, et seulement trois choses les déplacent : le Transfert rapide, une réémission par l'opérateur, ou un re-téléchargement depuis votre fournisseur.

Conséquences pratiques :

- **« Effacer tout le contenu et les réglages » supprime vos eSIM.** Avant d'effacer (pour vendre, échanger ou résoudre un problème), sachez que vous devrez re-télécharger chaque eSIM par la suite — et les eSIM de voyage avec codes QR à usage unique peuvent nécessiter un tout nouveau forfait.
- **Une restauration iCloud normale n'efface ni ne restaure les eSIM.** Restaurer sur le *même* téléphone laisse vos eSIM intacts ; restaurer sur un *nouveau* téléphone nécessite toujours le Transfert rapide ou une réémission par l'opérateur pour les lignes.
- **La sauvegarde ne sauvera pas un eSIM perdu.** Si vous effacez ou cassez le téléphone, le profil est perdu jusqu'à ce que l'opérateur le réémette. Enregistrez les chaînes de saisie manuelle de votre fournisseur (adresse SM-DP+ + code d'activation) quelque part séparément du téléphone.

## Erreurs eSIM iPhone courantes

Les échecs les plus fréquents — « Cellular Plan Cannot Be Added », « Activating » bloqué, « No Service » après installation — sont couverts erreur par erreur, avec les valeurs APN, dans le [Guide de dépannage approfondi eSIM](/faq/esim-deep-troubleshooting-guide-2026/). La cause principale est un téléphone verrouillé opérateur ; la seconde est l'itinérance des données laissée désactivée sur l'eSIM de voyage.

## Foire aux questions

**Combien d'eSIM puis-je stocker sur mon iPhone ?**
Huit profils ou plus, bien que seulement deux puissent être actifs à la fois (iPhone 13 et plus récents). Les modèles plus anciens (XS–12) gardent un eSIM actif plus une SIM physique.

**Puis-je supprimer mon eSIM après le voyage ?**
Oui — Réglages > Cellulaire > l'eSIM > Supprimer l'eSIM une fois le forfait expiré. Ne supprimez jamais en cours de voyage : les codes QR sont à usage unique, donc vous auriez besoin d'un nouveau forfait.

**Un eSIM vide-t-il la batterie de mon iPhone ?**
Pas de manière significative. Deux lignes actives dans une zone de signal faible peuvent ajouter un pour cent ou deux par jour, mais un eSIM seul consomme à peu près autant qu'une SIM physique.

**Ai-je besoin de l'itinérance des données pour un eSIM de voyage sur iPhone ?**
Oui — c'est requis pour que l'eSIM s'enregistre sur les réseaux partenaires, et cela n'ajoute pas de frais d'itinérance. L'oublier est la cause n°1 de « No Service ».

**Puis-je utiliser une SIM physique et un eSIM ensemble sur iPhone ?**
Oui — le dual SIM fonctionne dès la sortie de la boîte. (Les iPhone 14 américains et plus récents sont eSIM uniquement, donc vous associeriez deux eSIM à la place.) Voir le [hub de compatibilité iPhone](/faq/iphone-11-esim-compatible/) pour comprendre comment fonctionne le dual SIM.

**Quelle est la différence entre un eSIM et une SIM physique ?**
La version courte : un eSIM est un profil numérique que vous ne pouvez pas retirer, et il change d'opérateur instantanément. La comparaison complète est dans [Qu'est-ce qu'un eSIM ?](/faq/what-is-esim/).

**Puis-je convertir ma SIM physique en eSIM sur mon iPhone ?**
Si votre opérateur le prend en charge, oui — Réglages > Cellulaire > votre ligne > Convertir en eSIM. Les trois grands opérateurs américains le prennent en charge ; de nombreux MVNO non. Votre téléphone doit être sur le réseau de cet opérateur pour convertir.

**Pourquoi « Ajouter un eSIM » est-il grisé sur mon iPhone ?**
Généralement un verrouillage opérateur, un emplacement eSIM plein, ou un profil MDM d'entreprise bloquant les modifications. Vérifiez d'abord Réglages > Général > Informations > Verrouillage opérateur — s'il n'indique pas « Aucune restriction SIM », c'est votre réponse.

**Qu'arrive-t-il à mon eSIM si j'efface mon iPhone ?**
« Effacer tout le contenu et les réglages » supprime les profils eSIM. Vous devrez les re-télécharger depuis votre opérateur par la suite. Les eSIM de voyage avec codes QR à usage unique peuvent nécessiter un nouveau forfait, donc n'effacez que lorsque vous êtes prêt à tout reconfigurer.

**Le Transfert rapide fonctionne-t-il si je n'ai plus mon ancien iPhone ?**
Non — il nécessite les deux téléphones présents et allumés. Si votre ancien iPhone est vendu, perdu ou réinitialisé, demandez à votre opérateur de réémettre l'eSIM à la place. Voir le [guide de transfert](/faq/how-to-transfer-esim-between-iphone-and-android/).

**Puis-je mettre en pause mon eSIM de voyage sur iPhone entre les voyages ?**
Vous ne pouvez pas mettre en pause le compte à rebours de validité du forfait, mais vous pouvez désactiver la ligne (Réglages > Cellulaire > la ligne > Activer cette ligne) pour qu'elle cesse de s'enregistrer et cesse d'utiliser la batterie. Elle reste stockée et prête à être réactivée au prochain voyage — tant que la fenêtre de validité du forfait n'est pas terminée.

---

## Prêt pour votre prochaine aventure ?

👉 **Essayez-le gratuitement d'abord** — prenez un [eSIM gratuit](/free-esim/) et parcourez ce guide de bout en bout.

Puis choisissez votre destination :

- [eSIM pour les USA](/united-states-esim/)
- [eSIM pour le Japon](/japan-esim/)
- [eSIM pour l'Europe](/europe-esim/)
- [eSIM pour le Royaume-Uni](/united-kingdom-esim/)

*Basé sur la documentation officielle d'Apple, les normes GSMA et les tests d'opérateurs. Mis à jour : septembre 2026.*

## Sources

- [GSMA — spécification eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Apple Support — About eSIM on iPhone](https://support.apple.com/en-us/HT209044)
- [Apple Support — Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086)