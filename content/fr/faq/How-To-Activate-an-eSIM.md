---
title: "Comment activer une eSIM (Guide complet iOS et Android)"
h1_title: "Activer une eSIM : le guide complet pour iOS et Android"
description: "Comment activer une eSIM sur iPhone et Android en 2026 : scan QR code, configuration manuelle SM-DP+, dépannage des erreurs d'activation. Guide étape par étape, Wi-Fi requis."
keywords: ["comment activer une eSIM", "activer eSIM iPhone étape par étape", "activer eSIM Android tutoriel", "scan code QR eSIM", "installation eSIM voyage", "guide activation eSIM débutant", "erreur activation eSIM", "configuration eSIM manuelle"]
toc: true
image: "/images/esim-activation-guide.jpg"
date: 2026-08-11T10:00:00Z
lastmod: 2026-08-11T10:00:00Z

# Configuration de base du site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Traduction/enregistrement des textes UI (multilingue)
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
 
# À droite : eSIM populaires (6 pays)
sidebar_popular:
  title: "eSIM populaires"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "1,99 $"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Allemagne"
      flag: "/img/flags/de.svg"
      price: "1,99 $"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europe"
      flag: "/img/flags/eu.svg"
      price: "1,99 $"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turquie"
      flag: "/img/flags/tr.svg"
      price: "1,99 $"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japon"
      flag: "/img/flags/jp.svg"
      price: "1,99 $"
      url: "/japan-esim/"
      badge: "5G"
    - name: "Chine"
      flag: "/img/flags/cn.svg"
      price: "1,99 $"
      url: "/china-esim/"
      badge: "5G"

# À droite : eSIM gratuites (4 pays)
sidebar_free:
  title: "Obtenez une eSIM gratuite"
  icon: "🎁"
  item_suffix: "eSIM gratuite"
  item_subtitle: "eSIM gratuite"
  items:
    - name: "Royaume-Uni"
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

# À droite : questions populaires (5 questions)
sidebar_questions:
  title: "Questions fréquentes"
  items:
    - question: "Qu'est-ce que l'activation eSIM et comment ça fonctionne ?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Comment activer une eSIM ?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Comment activer l'eSIM sur iPhone (tous les modèles) ?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Dernière liste de compatibilité eSIM"
      url: "/compatibility/"
---

L'activation d'une **eSIM** — ou **carte eSIM** comme l'appellent de nombreux utilisateurs — est plus simple qu'il n'y paraît. Dans la plupart des cas, elle ne prend que 2 à 3 minutes. Ce guide vous accompagne pas à pas sur iPhone et Android, vous explique les erreurs les plus fréquentes et les points à vérifier avant de commencer. Que vous prépariez un voyage ou que vous souhaitiez simplement passer de votre SIM physique à une eSIM, vous trouverez ici toutes les instructions nécessaires.

La norme technique qui régit l'eSIM est définie par le [standard GSMA SGP.22](https://www.gsma.com/esim/), garantissant une compatibilité mondiale entre appareils et opérateurs. Pour une aide détaillée sur l'iPhone, consultez la [documentation officielle d'Apple sur l'eSIM](https://support.apple.com/fr-fr/108072). Pour les appareils Android, la [page d'aide officielle d'Android](https://support.google.com/android/answer/11241215) propose également des instructions précises.

Une liste complète des appareils compatibles eSIM — iPhone, Samsung, Google Pixel, Xiaomi et bien d'autres — est disponible dans notre **[liste de compatibilité eSIM](/compatibility/)**.

> **📖 Ce guide est un tutoriel pratique pas à pas.** Pour comprendre le **fonctionnement technique** de l'activation (SM-DP+, eUICC, profil eSIM), lisez notre **[guide technique d'activation eSIM](/faq/what-is-esim-activation-and-how-does-it-work/)**. Pour un **[tutoriel dédié à l'iPhone](/faq/how-to-activate-esim-on-iphone/)** avec 3 méthodes spécifiques, consultez notre guide iPhone.

---

## 📌 L'essentiel en bref : activer une eSIM en 60 secondes

Pour activer une eSIM, vous avez besoin de trois éléments :
- Un **téléphone débloqué** (sans restriction opérateur)
- Une **connexion Wi-Fi stable**
- Un **code QR eSIM** ou des **identifiants d'activation** (adresse SM-DP+ et code) fournis par votre opérateur

Accédez aux paramètres cellulaires de votre téléphone, sélectionnez « Ajouter eSIM » ou « Ajouter un forfait de données », scannez le code QR et attendez 1 à 2 minutes que le profil numérique se télécharge et s'installe. Une fois l'installation terminée, votre eSIM est prête à l'emploi. La [documentation officielle d'Apple sur l'activation eSIM](https://support.apple.com/fr-fr/118738) confirme que ce processus est identique sur tous les iPhone à partir du XS et du XR.

**Bon à savoir** : le téléchargement d'un profil eSIM consomme moins de 100 Ko — même une connexion Wi-Fi d'hôtel modeste suffit pour l'installation.

---

## 1. Qu'est-ce qu'une eSIM ? Comprendre la technologie en 2 minutes

Avant de passer à l'activation, il est utile de comprendre ce qu'est une eSIM et comment elle fonctionne. Une eSIM — abréviation de *embedded SIM* — est une carte SIM numérique gravée directement dans la carte mère de votre téléphone lors de sa fabrication. Contrairement à une **carte SIM physique** que vous insérez et retirez, l'eSIM est un **profil numérique** qui se télécharge et s'installe à distance via une connexion Wi-Fi.

**Concrètement :** lorsque vous scannez un code QR, votre téléphone télécharge un profil sécurisé depuis le serveur SM-DP+ de votre opérateur. Ce profil, stocké dans la puce **eUICC** (circuit intégré universel intégré) de votre appareil, contient toutes les informations nécessaires pour vous connecter au réseau — comme une carte SIM traditionnelle, mais sans la carte en plastique.

**Pourquoi cette technologie change la donne :**
- Vous changez d'opérateur sans changer de carte SIM physique.
- Vous stockez jusqu'à 8 profils eSIM sur un même téléphone.
- Pour les voyages : achetez un **forfait eSIM** avant même de partir et soyez connecté dès l'atterrissage.
- Impossible de perdre ou d'endommager une carte SIM — le profil est lié à votre appareil.
- Sécurité renforcée : le profil est chiffré (AES-256) et ne peut pas être cloné comme une SIM physique.

La technologie eSIM est définie par le [standard GSMA](https://www.gsma.com/esim/) qui assure l'interopérabilité entre les appareils et les opérateurs du monde entier. C'est cette standardisation qui permet d'utiliser une eSIM achetée en ligne sur n'importe quel téléphone compatible.

---

## 2. eSIM ou SIM physique : lequel choisir ?

Si vous hésitez encore entre une eSIM et une carte SIM traditionnelle, voici un comparatif pour vous aider à faire le bon choix :

| Critère | SIM Physique | eSIM (carte SIM numérique) |
|---------|--------------|---------------------------|
| **Installation** | Besoin d'une carte, d'un outil d'éjection | Scan d'un QR code en 2 minutes |
| **Changement d'opérateur** | Doit retirer et remplacer la carte | Télécharge un nouveau profil numériquement |
| **Voyage** | Acheter une SIM locale sur place | Acheter en ligne avant le départ |
| **Multi-profil** | Une seule carte à la fois | Jusqu'à 8 profils stockés |
| **Perte/vol** | La carte peut être retirée, désactivant le suivi | Le profil reste dans le téléphone — appareil traçable |
| **Sécurité** | Vulnérable à l'échange de SIM frauduleux | Profil chiffré, lié à l'EID de l'appareil |
| **Compatibilité** | Tous les téléphones | Téléphones récents uniquement |
| **Activation** | Immédiate après insertion | 1-2 minutes via Wi-Fi |
| **Impact environnemental** | Plastique, emballage, transport | Zéro déchet physique |

Le principal avantage de l'eSIM pour les voyageurs est la **flexibilité**. Vous achetez votre forfait avant le départ, l'installez confortablement chez vous, et l'activez dès votre arrivée à destination — que vous voyagiez en Europe, en Asie ou en Amérique. L'inconvénient principal reste la compatibilité : tous les téléphones ne supportent pas encore cette technologie (voir section suivante).

---

## 3. Votre téléphone est-il compatible eSIM ?

Avant de commencer l'activation, vérifiez que votre téléphone peut utiliser une eSIM. La compatibilité dépend du matériel, pas du logiciel — un téléphone non compatible ne pourra jamais utiliser d'eSIM, même après une mise à jour.

### Comment vérifier en 30 secondes

**Méthode la plus fiable :** Ouvrez votre clavier téléphonique et composez `*#06#`. Si un numéro **EID** (Embedded Identity Document) de 32 caractères apparaît à l'écran, votre téléphone est compatible eSIM. Si seuls des numéros IMEI apparaissent, votre téléphone ne supporte pas l'eSIM.

**Vérification dans les réglages :**
- **iPhone :** `Réglages > Général > Informations` — cherchez la mention « EID » ou « SIM numérique ». Vérifiez également que le champ **« Verrouillage opérateur »** indique **« Aucune restriction SIM »**.
- **Samsung :** `Réglages > Connexions > Gestionnaire SIM` — cherchez l'option « Ajouter eSIM ».
- **Google Pixel :** `Réglages > Réseau et Internet > Cartes SIM` — appuyez sur le « + » pour voir si l'option eSIM est disponible.
- **Xiaomi :** `Réglages > Cartes SIM et réseaux mobiles` — cherchez « Ajouter une eSIM ».

### Téléphones compatibles eSIM (liste actualisée 2026)

**iPhone :** Tous les modèles à partir de l'iPhone XS, XR, 11, SE (2020), 12, 13, 14, 15, 16 et 17. **Attention :** les iPhone achetés en Chine continentale (versions double SIM physique) ne supportent pas l'eSIM. Les modèles américains à partir de l'iPhone 14 sont exclusivement eSIM.

**Samsung :** Galaxy S20 (versions internationales uniquement), S21, S22, S23, S24, S25, Z Flip (3 et plus), Z Fold (3 et plus), Note 20, A54, A55. Les versions américaines du S20 ne supportent pas l'eSIM.

**Google Pixel :** Pixel 3 et plus récents (Pixel 3, 4, 5, 6, 7, 8, 9, 10). Support complet à partir du Pixel 6.

**Xiaomi :** Redmi Note 13, Note 14, Xiaomi 13T, 14T, 14T Pro, 15 Ultra et modèles récents.

**Autres :** OnePlus 11, 12, 13 ; Nothing Phone 2, 3 ; Huawei P40, Mate 40 Pro ; Motorola Edge 50, Razr 50 ; Fairphone 5.

Une liste complète de tous les appareils compatibles est disponible dans notre **[liste de compatibilité eSIM mise à jour](/compatibility/)**.

---

## 4. Les 3 vérifications essentielles avant d'activer votre eSIM

Ne scannez pas votre code QR avant d'avoir vérifié ces trois exigences. C'est la cause n°1 des échecs d'activation — d'après les données de support des principaux fournisseurs eSIM, près de 40 % des problèmes signalés viennent d'un oubli sur l'un de ces points.

**1. Votre téléphone doit être débloqué par l'opérateur**
Si vous avez acheté votre téléphone via un contrat opérateur (Orange, SFR, Bouygues, Free), il pourrait être verrouillé sur leur réseau.
- *Vérification iPhone :* Allez dans **Réglages > Général > Informations**. Faites défiler jusqu'à **Verrouillage opérateur**. Il doit indiquer **« Aucune restriction SIM »**.
- *Vérification Android :* La vérification varie selon les fabricants. Sur Samsung, allez dans **Réglages > À propos du téléphone > Statut**. Sur Google Pixel, consultez **Réglages > Réseau et Internet > Cartes SIM**.
- *Comment débloquer :* Contactez votre opérateur d'origine. En France, le déblocage est **gratuit** après 3 mois d'ancienneté (loi Chatel). La procédure prend généralement 24 à 48 heures.

**2. Une connexion Wi-Fi stable est indispensable**
Une eSIM est un téléchargement numérique. Vous ne pouvez pas l'activer à l'aide de vos données cellulaires habituelles — le téléphone a besoin d'une connexion Internet pour communiquer avec le serveur sécurisé SM-DP+ de l'opérateur. Évitez les Wi-Fi publics non sécurisés : privilégiez votre réseau domestique ou le Wi-Fi de votre hôtel.

**3. N'utilisez pas l'application appareil photo standard**
Scannez toujours le code QR via le menu Réglages de votre téléphone. L'application appareil photo peut reconnaître le QR code, mais l'installation du profil eSIM ne s'effectue que via le menu des réglages. Scanner via l'appareil photo ne fera qu'afficher une notification, sans installer le profil.

**Vérification bonus** : assurez-vous que votre batterie est chargée à au moins 20 %. Une extinction pendant le téléchargement du profil peut corrompre l'installation et nécessiter un nouveau code QR.

---

## 5. Activer une eSIM sur iPhone — procédure complète (iOS 19+)

Apple a simplifié le processus eSIM dans les récentes mises à jour d'iOS. Pour une activation détaillée sur tous les modèles d'iPhone, consultez notre **[guide complet d'activation eSIM sur iPhone](/faq/how-to-activate-esim-on-iphone/)**.

### Méthode 1 : Scan du code QR (recommandée)

1. **Étape 1 :** Allez dans **Réglages > Données cellulaires** (ou **Mobile** selon votre région).
2. **Étape 2 :** Appuyez sur **Ajouter eSIM** (ou **Ajouter un forfait de données** sur les anciennes versions d'iOS).
3. **Étape 3 :** Appuyez sur **Utiliser un code QR** en bas de l'écran.
4. **Étape 4 :** Positionnez le code QR dans le cadre de l'appareil photo. Assurez-vous d'être dans un endroit bien éclairé.
5. **Étape 5 :** Une fois reconnu, appuyez sur **Continuer** et attendez le message « Configuration cellulaire terminée ».

### Méthode 2 : Saisie manuelle (alternative quand le scan échoue)

Si vous ne pouvez pas scanner le code (par exemple, le QR code est sur l'écran du téléphone que vous utilisez, ou l'image est floue) :
1. Appuyez sur **Entrer les détails manuellement** en bas de l'écran de scan.
2. Saisissez l'**adresse SM-DP+** fournie dans l'e-mail de votre opérateur (format : `smdp.example.com`).
3. Saisissez le **code d'activation** (généralement une chaîne alphanumérique de 8 à 32 caractères).
4. Appuyez sur **Suivant** et patientez pendant le téléchargement.

Cette méthode est particulièrement utile en voyage lorsque vous n'avez pas accès à un deuxième écran pour afficher le QR code.

### Méthode 3 : Transfert rapide d'un ancien iPhone

Si vous remplacez un iPhone par un autre et souhaitez transférer votre eSIM existante :
1. Pendant la configuration du nouvel iPhone, placez-le à proximité de l'ancien.
2. Une notification « Transférer votre eSIM » apparaît — suivez les instructions.
3. Pour certains opérateurs français (Orange, SFR, Bouygues), un code de confirmation peut être envoyé par SMS.

**Remarque importante** : iOS vous demandera de nommer votre nouvelle ligne eSIM. Choisissez un nom distinctif — « Voyage », « Pro », « France » — pour la retrouver facilement dans vos réglages, surtout si vous gérez plusieurs profils.

---

## 6. Activer une eSIM sur Android : Samsung Galaxy, Google Pixel et autres

Les menus Android varient légèrement selon le fabricant. Voici les chemins exacts pour les marques les plus populaires.

### Pour les appareils Samsung Galaxy :

1. **Étape 1 :** Allez dans **Réglages > Connexions**.
2. **Étape 2 :** Appuyez sur **Gestionnaire SIM**.
3. **Étape 3 :** Sélectionnez **Ajouter une eSIM**.
4. **Étape 4 :** Appuyez sur **Scanner le code QR du fournisseur de services**.
5. **Étape 5 :** Scannez le code et appuyez sur **Ajouter** lorsque vous y êtes invité.
6. **Étape 6 :** Patientez 1 à 2 minutes pendant l'activation. Un redémarrage peut être proposé — acceptez-le.

Sur certains modèles Samsung plus anciens (comme le S20 avec firmware américain), l'option eSIM peut être absente — consultez notre **[guide de compatibilité Samsung S20 eSIM](/faq/samsung-s20-esim-compatible/)** pour plus de détails.

### Pour les appareils Google Pixel :

1. **Étape 1 :** Allez dans **Réglages > Réseau et Internet**.
2. **Étape 2 :** Appuyez sur le **+ (icône plus)** à côté de **SIM**.
3. **Étape 3 :** Appuyez sur **Télécharger une SIM à la place ?** en bas de l'écran.
4. **Étape 4 :** Appuyez sur **Suivant** et scannez votre code QR.
5. **Étape 5 :** Nommez votre eSIM et définissez vos préférences (données, appels, SMS).

Les détails de compatibilité Pixel sont disponibles dans notre **[guide de compatibilité Google Pixel 6 eSIM](/faq/google-pixel-6-esim-compatible/)**.

### Pour les appareils Xiaomi / OnePlus / autres :

- **Xiaomi (MIUI/HyperOS) :** `Réglages > Cartes SIM et réseaux mobiles > Ajouter une eSIM`.
- **OnePlus (OxygenOS) :** `Réglages > Réseau mobile > eSIM > Ajouter une eSIM`.
- **Motorola :** `Réglages > Réseau et Internet > Cartes SIM > Ajouter une eSIM`.
- **Nothing Phone :** `Réglages > Réseau et Internet > SIM > Ajouter une eSIM`.

Si votre téléphone Android ne montre pas l'option eSIM, vérifiez que votre opérateur et votre région prennent en charge cette fonction — certains opérateurs désactivent l'eSIM sur les modèles subventionnés.

---

## 7. Alternative rapide : activer votre eSIM via l'application de l'opérateur

De nombreux fournisseurs d'eSIM de voyage et les grands opérateurs nationaux proposent une activation intégrée à l'application. Cela contourne complètement le code QR et simplifie énormément le processus.

1. Téléchargez l'application officielle de votre fournisseur (Roami, Airalo, Holafly, Nomad, Orange, SFR…).
2. Connectez-vous à votre compte et localisez votre forfait acheté.
3. Appuyez sur le bouton **Activer** ou **Installer l'eSIM**.
4. Votre téléphone vous demandera l'autorisation de permettre à l'application d'installer un forfait cellulaire. Appuyez sur **Autoriser** ou **Continuer**.
5. L'installation se fait automatiquement — aucun scan, aucune saisie manuelle.

**Remarque importante :** Cette méthode ne fonctionne qu'avec les opérateurs qui fournissent une application dédiée avec l'API d'installation eSIM. Pour la plupart des eSIM de voyage, c'est l'alternative la plus simple à la méthode du code QR. Vérifiez dans l'email de confirmation de votre achat si l'activation via application est proposée.

---

## 8. Activer une eSIM en France : Orange, SFR, Bouygues, Free

Si vous êtes en France et souhaitez activer une eSIM chez votre opérateur, voici les spécificités de chacun. Tous les grands opérateurs français proposent désormais l'eSIM, y compris pour leurs marques low-cost.

### Orange eSIM
Orange a été l'un des premiers opérateurs français à proposer l'eSIM. L'activation se fait via :
- **L'application Orange et Moi** : `Gérer mon forfait` > `eSIM` > `Commander une eSIM`.
- **L'espace client** : commandez votre eSIM en ligne, recevez votre QR code par email sous 1 heure.
- **En boutique** : l'activation est gratuite pour les clients Orange.
- **Coût** : 10 € de frais de mise à disposition (offerts pour certains forfaits premium).
- [Site officiel Orange eSIM](https://www.orange.fr/esim)

### SFR eSIM (et Red by SFR)
- **Application SFR & Moi** : `Gérer ma ligne` > `Passer en eSIM`.
- **Red by SFR** : disponible via l'application Red SFR, forfaits sans engagement.
- QR code envoyé par email après la commande.
- Généralement gratuit pour les nouveaux abonnés.
- [Site officiel SFR eSIM](https://www.sfr.fr/esim)

### Bouygues Telecom eSIM (et B&YOU)
- **Application Bouygues** : `Mon compte` > `Gérer ma ligne` > `eSIM`.
- **Forfaits prépayés B&YOU** : éligibles à l'eSIM — idéal pour une ligne sans engagement.
- QR code envoyé par email ou disponible dans l'application.
- [Site officiel Bouygues eSIM](https://www.bouyguestelecom.fr/esim)

### Free Mobile eSIM
- **Application Free** : `Gérer ma ligne` > `eSIM`.
- QR code disponible dans l'application ou l'espace client.
- **Gratuit** pour les clients Freebox et forfaits 5G. 10 € pour les autres forfaits.
- [Site officiel Free eSIM](https://mobile.free.fr/esim)

**Pour tous ces opérateurs** : la procédure d'activation reste identique une fois le QR code obtenu — scannez-le dans les réglages de votre téléphone. Vérifiez que votre forfait est **éligible à l'eSIM** avant de commander. La conversion d'une SIM physique en eSIM conserve votre numéro de téléphone.

---

## 9. eSIM de voyage ou eSIM locale : quel choix pour vos déplacements ?

Si vous voyagez, deux options principales s'offrent à vous. Le choix dépend principalement de la durée de votre séjour.

### Option 1 : eSIM de voyage (recommandée pour les courts séjours)
- **Achat** : en ligne, avant le départ, depuis chez vous.
- **Prix** : souvent moins cher que le roaming de votre opérateur français. Comptez 5 à 15 € pour 5 à 10 Go.
- **Installation** : à faire avant le départ ; activation à l'arrivée.
- **Données uniquement** : pas de numéro de téléphone (sauf certaines offres premium).
- **Idéal pour** : séjours de 1 à 30 jours, vacances, voyages d'affaires.
- **Exemples de fournisseurs** : Roami, Airalo, Holafly, Nomad.

### Option 2 : eSIM locale (recommandée pour les longs séjours)
- **Achat** : sur place, en boutique opérateur ou en ligne.
- **Prix** : généralement plus avantageux pour les séjours de plus d'un mois.
- **Installation** : QR code fourni par l'opérateur local.
- **Numéro local inclus** : utile pour les appels, SMS et services locaux.
- **Idéal pour** : séjours de plus de 30 jours, expatriation, études à l'étranger.
- **Exemples** : EE ou O2 au Royaume-Uni, T-Mobile aux États-Unis, NTT Docomo au Japon.

### Astuce budget : trouver une eSIM pas chère

Pour dénicher une **eSIM pas chère**, comparez le prix au gigaoctet plutôt que le prix total du forfait. Un forfait à 5 € pour 1 Go revient à 5 €/Go, tandis qu'un forfait à 15 € pour 10 Go revient à 1,50 €/Go — trois fois moins cher. Utilisez les comparateurs en ligne et profitez des offres de bienvenue ou des **eSIM gratuites** d'essai (quelques centaines de Mo offerts) pour tester le service avant d'acheter un forfait plus conséquent.

---

## 10. Transférer une eSIM entre appareils : ce qu'il faut savoir

Le transfert d'une eSIM d'un appareil à un autre est une question fréquente, surtout lorsqu'on change de téléphone. Voici l'essentiel à savoir.

### Transfert iPhone vers iPhone (le plus simple)
Avec iOS 19+, le transfert d'eSIM est quasi automatique :
1. Placez votre nouvel iPhone à côté de l'ancien pendant la configuration initiale.
2. Une fenêtre « Transférer votre eSIM » apparaît — suivez les instructions à l'écran.
3. Pour les opérateurs français (Orange, SFR, Bouygues, Free), la plupart des forfaits se transfèrent sans contact avec le service client.
4. Si le transfert échoue, votre opérateur vous enverra un nouveau QR code par email.

### Transfert Android vers Android
- **Samsung** : utilisez **Smart Switch** — il peut transférer les profils eSIM entre deux Galaxy compatibles.
- **Google Pixel** : la sauvegarde Google One inclut les profils eSIM depuis Android 15.

### Transfert iPhone vers Android (ou inversement)
C'est le scénario le plus complexe. Consultez notre **[guide complet de transfert eSIM multiplateforme](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** pour une procédure détaillée. En résumé :
- Vous devez généralement contacter votre opérateur pour désactiver l'eSIM sur l'ancien appareil.
- L'opérateur génère un nouveau QR code pour le nouvel appareil.
- Certains opérateurs permettent le transfert via leur application mobile.

**Important** : ne supprimez jamais votre eSIM de l'ancien téléphone avant d'avoir confirmé qu'elle fonctionne sur le nouveau. Si vous supprimez le profil avant, vous risquez de perdre définitivement l'accès à votre ligne.

---

## 11. Cas concrets d'activation eSIM

Rien de tel que des exemples réels pour comprendre le processus d'activation. Voici trois situations typiques.

### Scénario A : Marie active une eSIM de voyage pour le Japon

Marie part 10 jours au Japon. Elle a acheté un forfait eSIM voyage de 5 Go sur le site d'un fournisseur. Voici comment elle procède :
1. **J-1, à la maison** : Marie reçoit son QR code par email. Elle va dans Réglages > Données cellulaires > Ajouter eSIM, scanne le QR code, nomme la ligne « Japon » et attend 2 minutes que le profil s'installe. Elle désactive temporairement cette ligne dans les réglages.
2. **Jour J, à l'aéroport de Tokyo** : après l'atterrissage, Marie active l'itinérance des données pour sa ligne « Japon », vérifie que le réseau (NTT Docomo) apparaît, et envoie un message WhatsApp à sa famille.

Coût total : 8 € pour 5 Go. Avec le roaming Orange, elle aurait payé 15 € par jour, soit 150 €.

### Scénario B : Thomas passe de SIM physique à eSIM chez Free

Thomas a un forfait Free avec une SIM physique. Il veut passer à l'eSIM sur son iPhone 16 :
1. Il ouvre l'application Free Mobile, va dans « Gérer ma ligne » > « eSIM » et commande la conversion.
2. Il reçoit un QR code par email dans l'heure qui suit.
3. Il scanne le code, nomme la ligne « Free » et vérifie que les appels et les données fonctionnent.
4. Il retire son ancienne carte SIM physique du tiroir — elle est automatiquement désactivée.

Coût : gratuit (abonné Freebox). Temps total : 15 minutes.

### Scénario C : La famille Dubois prépare ses eSIM avant les vacances

La famille Dubois (4 personnes) part en Grèce pour 2 semaines. Le père achète 4 forfaits eSIM Europe de 10 Go chacun :
1. La veille du départ, chaque membre de la famille installe son eSIM sur son téléphone via le QR code reçu par email.
2. Les téléphones sont configurés pour utiliser la SIM physique en France et l'eSIM à l'étranger.
3. À l'arrivée à Athènes, chacun active sa ligne eSIM et le mode itinérance des données.
4. Pendant tout le séjour, la famille reste connectée en 4G/5G pour 15 € par personne.

Coût total pour 4 personnes : 60 €. Avec le roaming des opérateurs français, la facture aurait dépassé 400 €.

---

## 12. Comment confirmer que votre eSIM est activée avec succès

Une fois que vous avez effectué les étapes ci-dessus, voici comment vérifier que votre nouvelle eSIM est prête à être utilisée :

- **Vérifiez la barre d'état :** Regardez le coin supérieur droit de votre écran. Si vous avez à la fois votre SIM physique et votre eSIM activées, vous devriez voir deux séries distinctes de barres de signal cellulaire.
- **Vérifiez le menu Réglages :** Allez dans vos paramètres Cellulaires/Réseau. Vous devriez voir les deux lignes listées, et le statut de votre eSIM devrait indiquer **« Activé »** ou **« Actif »**.
- **Le test ultime :** Désactivez votre Wi-Fi, basculez votre donnée cellulaire principale vers la nouvelle ligne eSIM et essayez de charger une page Web ou d'ouvrir une application. Si la connexion est fluide, votre activation est réussie à 100 %.
- **Vérification avancée :** testez la vitesse de connexion avec un outil comme Speedtest.net. Une connexion 4G devrait offrir 10-50 Mbps en téléchargement ; la 5G peut dépasser 200 Mbps selon le réseau.

**Important :** Si vous êtes à l'étranger, l'**itinérance des données** doit être activée pour l'eSIM — sinon, même une activation réussie affichera « Aucun service ».

---

## 13. Basculer entre plusieurs eSIM — le guide pratique

Si vous êtes un voyageur fréquent ou gérez plusieurs lignes, vous pouvez stocker plusieurs eSIM sur votre téléphone et basculer entre elles sans effort.

- **Sur iPhone :** Allez dans **Réglages > Données cellulaires > Données cellulaires**, et appuyez simplement sur le forfait que vous souhaitez utiliser pour l'accès Internet. *(Raccourci : Balayez vers le bas pour ouvrir le Centre de contrôle, appuyez longuement sur l'icône des données cellulaires et basculez rapidement votre ligne de données active.)*
- **Sur Samsung :** Allez dans **Réglages > Connexions > Gestionnaire SIM**. Sélectionnez la carte à utiliser pour les données mobiles.
- **Sur Google Pixel :** Allez dans **Réglages > Réseau et Internet > Cartes SIM**. Appuyez sur le forfait à utiliser et activez « Données mobiles ».

**Astuce de voyageur** : Installez votre eSIM de voyage avant le départ. Une fois à destination, il vous suffit d'activer la ligne et l'itinérance des données dans les réglages — vous êtes connecté en moins d'une minute. Pour des destinations spécifiques, consultez nos guides dédiés : **[eSIM Japon](/japan-esim/)** ou **[eSIM USA](/united-states-esim/)**.

---

## 14. Dépannage des échecs d'activation courants

| Erreur / Symptôme | Cause possible | Solution |
|-------------------|----------------|----------|
| **« Le forfait cellulaire ne peut pas être ajouté »** | Téléphone verrouillé par un opérateur, ou code QR déjà scanné/expiré | Vérifiez le **Verrouillage opérateur** dans les Informations ; si débloqué, demandez un nouveau code QR à votre opérateur |
| **« Code QR invalide » ou le code ne scanne pas** | Code QR expiré, endommagé, ou l'appareil photo ne peut pas faire le point | Scannez dans un endroit bien éclairé ; augmentez la luminosité de l'écran ; passez en mode **« Entrer les détails manuellement »** et saisissez l'adresse SM‑DP+ et le code d'activation |
| **eSIM installée mais affiche « Aucun service »** | Profil téléchargé mais pas enregistré sur le réseau local, ou itinérance désactivée | Activez la ligne eSIM ; activez le **mode Avion** pendant 30 secondes puis désactivez-le ; sélectionnez manuellement le réseau local dans « Sélection du réseau » |
| **Activée avec succès, mais pas de connexion Internet** | Itinérance des données désactivée ou paramètres APN manquants/incorrects | Activez l'**itinérance des données** dans les paramètres eSIM ; configurez manuellement les **paramètres APN** (voir ci-dessous) |
| **eSIM disparue après une mise à jour iOS/Android** | La mise à jour a réinitialisé la configuration eSIM | Redémarrez le téléphone ; si le problème persiste, réactivez l'eSIM via le code QR de votre opérateur ou contactez le support |
| **Dual-SIM : un numéro ne reçoit pas d'appels** | Cache T-ADS obsolète ou conflit entre les lignes | Désactivez brièvement les appels Wi-Fi, redémarrez l'iPhone, réactivez. Plus de détails dans notre **[guide Dual-eSIM avec 12 solutions](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)** |
| **« Impossible de configurer le forfait cellulaire » après plusieurs tentatives** | Limite de tentatives atteinte côté opérateur | Attendez 15 minutes et réessayez. Si le problème persiste, demandez un nouveau code QR à votre opérateur |
| **Profil téléchargé mais l'opérateur n'apparaît pas dans la liste** | Profil incomplet ou corrompu | Supprimez le profil (Réglages > Données cellulaires > sélectionnez le profil > Supprimer) et réinstallez avec un nouveau QR code |

### Configurer manuellement les paramètres APN

Si après l'activation, aucun réseau de données n'est disponible, les paramètres APN doivent souvent être ajustés manuellement :

1. **iPhone :** `Réglages > Données cellulaires > Réseau de données cellulaires` → remplissez les champs APN.
2. **Android :** `Réglages > Connexions > Réseaux mobiles > Noms des points d'accès (APN)` → créez un nouvel APN.

**Valeurs APN typiques pour les eSIM de voyage :**
- Airalo : APN = `airalo` (nom d'utilisateur/mot de passe : vide)
- Holafly : APN = `holafly` (nom d'utilisateur/mot de passe : vide)
- Nomad : APN = `global` (nom d'utilisateur/mot de passe : vide)
- Roami : APN = `internet` (nom d'utilisateur/mot de passe : vide, sauf indication contraire)

**Valeurs APN pour les opérateurs français :**
- **Orange / Sosh :** APN = `orange.fr` (nom d'utilisateur : `orange`, mot de passe : `orange`)
- **SFR / Red :** APN = `sl2sfr` (nom d'utilisateur/mot de passe : vide)
- **Bouygues / B&YOU :** APN = `mmsbouygtel.com` ou `ebouygtel.com` (nom d'utilisateur/mot de passe : vide)
- **Free :** APN = `free` (nom d'utilisateur/mot de passe : vide)

Pour des problèmes plus complexes — par exemple, si l'eSIM a disparu après une mise à jour iOS ou si le code de confirmation n'arrive pas — consultez notre **[guide de dépannage eSIM avec 16 cas pratiques](/faq/eSIM-Deep-Troubleshooting-Guide-2026/)**.

**⚠️ AVERTISSEMENT :** Ne touchez jamais à **« Supprimer l'eSIM »** ou **« Supprimer le forfait de données »** pour résoudre un problème de connexion. La suppression de l'eSIM détruit définitivement le profil numérique, et vous devrez en acheter un nouveau. Essayez d'abord le mode Avion, la sélection manuelle du réseau et les paramètres APN.

---

## 15. Questions fréquentes sur l'activation eSIM

**Q1 : Y a-t-il des frais pour activer une eSIM ?**
L'installation d'un profil eSIM est gratuite. Vous ne payez que pour le forfait de données ou le forfait cellulaire que vous avez acheté. Certains opérateurs français facturent des « frais de mise à disposition » de l'eSIM (environ 10 € chez Orange et Bouygues, gratuit chez SFR et Free), mais l'acte de scanner et d'installer le profil ne coûte rien.

**Q2 : Puis-je activer mon eSIM avant de voyager ?**
Oui, et c'est fortement recommandé. Installez l'eSIM à la maison pendant que vous avez une connexion Wi-Fi fiable. Le forfait de données restera inactif jusqu'à ce que votre téléphone se connecte au réseau partenaire dans votre pays de destination. L'installation préalable vous fait gagner du temps et évite le stress à l'arrivée.

**Q3 : Comment basculer entre ma SIM physique et mon eSIM ?**
Allez dans vos paramètres cellulaires. Vous verrez les deux lignes listées. Vous pouvez désactiver votre SIM physique, ou définir votre SIM physique comme ligne par défaut pour la Voix/SMS et l'eSIM comme ligne par défaut pour les Données cellulaires. Sur iPhone, le Centre de contrôle permet de basculer rapidement entre les lignes.

**Q4 : Puis-je utiliser une eSIM sur plusieurs appareils ?**
Non — un profil eSIM est lié à un seul EID, donc à un seul appareil. Le transfert est possible (voir section 10) mais nécessite de désactiver le profil sur l'ancien appareil. Si vous avez besoin du même numéro sur plusieurs appareils, demandez une option « Multi-SIM » à votre opérateur.

**Q5 : Pourquoi mon eSIM affiche « Aucun service » après activation ?**
La cause la plus fréquente est que **l'itinérance des données** n'est pas activée. Allez dans les paramètres de votre eSIM et activez le bouton « Itinérance des données ». Si vous êtes à l'étranger, c'est obligatoire pour que l'eSIM de voyage fonctionne. Si le problème persiste, essayez de sélectionner manuellement le réseau dans les paramètres.

**Q6 : Que faire si j'ai perdu mon code QR ?**
Contactez le support de votre fournisseur eSIM. La plupart des opérateurs peuvent regénérer un nouveau code QR ou réafficher les données d'activation dans votre espace client. Conservez toujours l'email de confirmation d'achat — il contient généralement les informations nécessaires pour une réinstallation.

**Q7 : Quelle eSIM choisir pour voyager ?**
Le choix dépend de votre destination et de la durée de votre séjour. Pour des séjours courts (1-15 jours), privilégiez un **forfait eSIM de voyage** — installation à domicile, activation à l'arrivée. Pour des séjours longs (+30 jours), une eSIM locale peut être plus économique. Comparez le prix au gigaoctet et vérifiez le réseau partenaire utilisé dans le pays visité.

**Q8 : Combien coûte une eSIM de voyage ?**
Les prix varient de 2 à 50 € selon le forfait et la destination. Une eSIM de voyage pour 5 Go / 7 jours coûte en moyenne 5 à 10 €. Pour des volumes plus importants (20-50 Go) ou des forfaits multi-pays, les prix peuvent monter à 20-50 €. Les eSIM régionales (Europe, Asie) sont généralement plus économiques que les eSIM par pays si vous visitez plusieurs destinations.

**Q9 : Est-ce que je peux conserver mon numéro de téléphone en passant à l'eSIM ?**
Oui, absolument. La conversion d'une SIM physique en eSIM conserve votre numéro de téléphone. La procédure se fait depuis l'application ou l'espace client de votre opérateur. La plupart des opérateurs français (Orange, SFR, Bouygues, Free) permettent cette conversion en moins d'une heure.

**Q10 : Puis-je utiliser une eSIM prépayée sans engagement ?**
Oui, c'est l'un des grands avantages de cette technologie. De nombreux opérateurs proposent des **forfaits eSIM prépayés** sans engagement, rechargeables mois par mois — par exemple Sosh, Red by SFR, B&YOU en France, ou les eSIM de voyage à l'étranger. Vous payez uniquement ce dont vous avez besoin, sans justificatif de domicile ni RIB.

**Q11 : Mon eSIM fonctionnera-t-elle si je change la carte mère de mon téléphone ?**
Non. L'eSIM est liée à la puce eUICC soudée sur la carte mère. Si la carte mère est remplacée (réparation majeure), l'EID change et votre profil eSIM doit être réémis par votre opérateur. Contactez-le pour obtenir un nouveau QR code.

**Q12 : L'activation eSIM est-elle différente entre la 4G et la 5G ?**
Non, le processus d'activation est identique. Une fois activée, votre eSIM utilisera automatiquement le meilleur réseau disponible — 4G LTE ou 5G — en fonction de la couverture et de votre forfait. Vérifiez que votre forfait eSIM inclut bien la 5G si vous souhaitez en bénéficier, car certains forfaits économiques sont limités à la 4G.

---

## 16. Conclusion : l'activation eSIM — plus simple que vous ne le pensez

L'activation d'une eSIM est un processus rapide et simple — dans la plupart des cas, elle prend moins de 3 minutes. La clé du succès réside dans la préparation : un téléphone débloqué, une connexion Wi-Fi stable et le bon code QR. Une fois ces trois éléments réunis, la procédure est quasi identique sur iPhone et Android.

**Ce qu'il faut retenir :**
- L'activation fonctionne de manière quasi identique sur iPhone (iOS) et Android (Samsung, Pixel, Xiaomi).
- Vérifiez la compatibilité de votre téléphone avec `*#06#` avant toute chose.
- Scannez toujours le code QR via le menu Réglages, pas via l'application appareil photo.
- En cas de problème : activez l'itinérance des données, vérifiez les paramètres APN ou utilisez la saisie manuelle de l'adresse SM-DP+.
- Pour les voyageurs : installez votre eSIM avant le départ — cela vous fait gagner du temps et évite le stress à l'arrivée.
- Ne supprimez jamais un profil eSIM pour résoudre un problème de connexion — essayez d'abord le mode Avion et la sélection manuelle du réseau.

L'avenir de la connectivité mobile est numérique. Avec ce guide, vous êtes parfaitement équipé pour activer votre eSIM sans problème et rester connecté partout dans le monde. Pour approfondir, consultez nos autres ressources : **[qu'est-ce que l'eSIM](/faq/What-Is-eSIM/)** pour comprendre la technologie, ou **[notre sélection de forfaits eSIM](/free-esim/)** pour trouver l'offre adaptée à vos besoins.

---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr",
  "mainEntity": [
    {"@type": "Question", "name": "Y a-t-il des frais pour activer une eSIM ?", "acceptedAnswer": {"@type": "Answer", "text": "L'installation du profil eSIM est gratuite — vous ne payez que le forfait acheté. Certains opérateurs français facturent des frais de mise à disposition (environ 10 € chez Orange et Bouygues, gratuit chez SFR et Free), mais scanner et installer le profil ne coûte rien."}},
    {"@type": "Question", "name": "Puis-je activer mon eSIM avant de voyager ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, c'est fortement recommandé. Installez l'eSIM à la maison avec une connexion Wi-Fi fiable. Le forfait restera inactif jusqu'à ce que votre téléphone se connecte au réseau partenaire dans le pays de destination. Vous gagnerez du temps et éviterez le stress à l'arrivée."}},
    {"@type": "Question", "name": "Comment basculer entre ma SIM physique et mon eSIM ?", "acceptedAnswer": {"@type": "Answer", "text": "Dans vos paramètres cellulaires, les deux lignes sont listées. Désactivez votre SIM physique ou définissez-la pour Voix/SMS et l'eSIM pour les Données. Sur iPhone, le Centre de contrôle permet de basculer rapidement entre les lignes de données actives."}},
    {"@type": "Question", "name": "Puis-je utiliser une eSIM sur plusieurs appareils ?", "acceptedAnswer": {"@type": "Answer", "text": "Non, un profil eSIM est lié à un seul EID, donc à un seul appareil. Le transfert est possible mais nécessite de désactiver le profil sur l'ancien appareil. Pour le même numéro sur plusieurs appareils, demandez l'option Multi-SIM à votre opérateur."}},
    {"@type": "Question", "name": "Pourquoi mon eSIM affiche « Aucun service » après activation ?", "acceptedAnswer": {"@type": "Answer", "text": "La cause la plus fréquente est l'itinérance des données non activée. Activez-la dans les paramètres de votre eSIM. À l'étranger, c'est obligatoire pour que l'eSIM de voyage fonctionne. Si le problème persiste, essayez de sélectionner manuellement le réseau local dans les paramètres."}},
    {"@type": "Question", "name": "Que faire si j'ai perdu mon code QR ?", "acceptedAnswer": {"@type": "Answer", "text": "Contactez le support de votre fournisseur eSIM. La plupart peuvent regénérer un QR code ou réafficher les données d'activation dans votre espace client. Conservez toujours l'email de confirmation d'achat qui contient les informations nécessaires pour une réinstallation."}},
    {"@type": "Question", "name": "Quelle eSIM choisir pour voyager ?", "acceptedAnswer": {"@type": "Answer", "text": "Pour les courts séjours (1-15 jours), privilégiez un forfait eSIM de voyage installé avant le départ. Pour les longs séjours (+30 jours), une eSIM locale peut être plus économique. Comparez le prix au gigaoctet et vérifiez le réseau partenaire utilisé dans le pays visité."}},
    {"@type": "Question", "name": "Combien coûte une eSIM de voyage ?", "acceptedAnswer": {"@type": "Answer", "text": "Une eSIM de voyage pour 5 Go / 7 jours coûte en moyenne 5 à 10 €. Pour des volumes plus importants (20-50 Go) ou des forfaits multi-pays, comptez 20 à 50 €. Les eSIM régionales (Europe, Asie) sont généralement plus économiques que les eSIM par pays."}},
    {"@type": "Question", "name": "Est-ce que je peux conserver mon numéro de téléphone en passant à l'eSIM ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, la conversion d'une SIM physique en eSIM conserve votre numéro de téléphone. La procédure se fait depuis l'application ou l'espace client de votre opérateur. Orange, SFR, Bouygues et Free permettent cette conversion en moins d'une heure."}},
    {"@type": "Question", "name": "Puis-je utiliser une eSIM prépayée sans engagement ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, de nombreux opérateurs proposent des forfaits eSIM prépayés sans engagement, rechargeables mois par mois — comme Sosh, Red by SFR et B&YOU en France. Vous payez uniquement ce dont vous avez besoin, sans justificatif de domicile ni RIB."}}
  ]
}
</script>

*Basé sur la documentation officielle d'Apple (iOS 19), Google Support (Android 15+), les standards GSMA SGP.22 et les informations des opérateurs français (Orange, SFR, Bouygues, Free). Dernière révision : août 2026.*
