---
title: "Activer une eSIM sur iPhone : guide 2026"
h1_title: "Comment activer une eSIM sur votre iPhone en 2026"
description: "Comment activer une eSIM sur iPhone en 2026 : 3 méthodes (QR code, application opérateur, transfert iOS). Guide pour tous modèles iPhone XS à iPhone 17. Dépannage et codes USSD."
keywords: ["activer eSIM sur iPhone", "iPhone eSIM réglages", "ajouter forfait eSIM iPhone", "eSIM iPhone XS à iPhone 17", "transférer eSIM vers iPhone", "code USSD eSIM iPhone", "iOS eSIM activation", "double SIM iPhone eSIM"]
toc: true
image: "/images/esim-activation-guide.jpg"
date: 2026-08-11T10:00:00Z
lastmod: 2026-08-11T10:00:00Z

# Configuration de base du site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Configuration UI / traduction (prise en charge multilingue)
ui_text:
  updated_on: "Mis à jour le"
  min_read: "min de lecture"
  toc: "Table des matières"

# Fil d'Ariane
breadcrumbs:
  home:
    text: "Accueil"
    url: "/"
  parent:
    text: "Centre d'aide"
    url: "/faq/"

# À droite : Configuration des eSIM populaires
sidebar_popular:
  title: "eSIM populaires"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
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

# À droite : Configuration eSIM gratuite
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

# À droite : Configuration des questions populaires
sidebar_questions:
  title: "Questions populaires"
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

**La réponse courte :** L'activation eSIM sur iPhone consiste à télécharger un profil opérateur numérique sur la puce eUICC intégrée de votre téléphone via le protocole standardisé **GSMA SGP.22**. En pratique, vous scannez un code QR, utilisez l'application de votre opérateur, ou transférez une eSIM depuis un ancien iPhone — le tout en moins de 2 minutes.

Pour une introduction complète à la technologie, lisez notre **[guide explicatif eSIM](/faq/What-Is-eSIM/)**. Pour le dépannage, consultez notre **[guide de dépannage approfondi](/faq/eSIM-Deep-Troubleshooting-Guide-2026/)**.

> **📖 Ce guide est spécifique à l'iPhone.** Pour un **[tutoriel universel couvrant aussi Android](/faq/How-To-Activate-an-eSIM/)** ou pour comprendre le **[fonctionnement technique de l'activation eSIM](/faq/what-is-esim-activation-and-how-does-it-work/)** (SM-DP+, eUICC), consultez nos autres guides.

---

## 📌 Résumé : activer une eSIM sur iPhone en 5 étapes

1. **Vérifiez la compatibilité** — `*#06#` : un EID doit apparaître. iPhone XS/XR ou plus récent requis.
2. **Vérifiez le déverrouillage** — « Aucune restriction SIM » dans Réglages > Général > Informations.
3. **Connectez-vous au Wi-Fi** — indispensable pour télécharger le profil depuis le serveur SM-DP+.
4. **Scannez le QR code** — Réglages > Données cellulaires > Ajouter eSIM.
5. **Configurez les données** — sélectionnez l'eSIM pour les données, activez l'itinérance si eSIM de voyage.

---

## Qu'est-ce qu'une carte eSIM ? Terminologie essentielle

Dans le langage courant, on parle volontiers de **carte eSIM** pour désigner cette technologie — un abus de langage pratique, car il n'existe en réalité aucune carte physique à manipuler. Contrairement à une **carte SIM physique** que l'on glisse dans un tiroir, la version intégrée se présente comme une puce microscopique (l'**eUICC**, pour *embedded Universal Integrated Circuit Card*) soudée à même la carte mère de l'iPhone. Apple a inauguré ce composant avec la gamme iPhone XS en 2018, et il équipe depuis l'intégralité des smartphones de la marque.

**C'est quoi une eSIM, concrètement ?** Posez-vous la question ainsi : il s'agit d'une puce programmable qui remplit rigoureusement le même rôle qu'une SIM classique — authentifier votre terminal auprès du réseau mobile et chiffrer l'ensemble de vos communications — mais sans support amovible. Plutôt que d'échanger un morceau de plastique à chaque changement d'opérateur, vous téléchargez un profil numérique directement dans la mémoire sécurisée de ce circuit. Un iPhone peut conserver jusqu'à huit profils simultanément, même si deux seulement peuvent être actifs en parallèle sur les générations récentes (iPhone 13 et ultérieurs).

**Comment fonctionne une eSIM sur le plan technique ?** Le mécanisme s'appuie sur trois piliers normalisés par la GSMA, l'organisme qui fédère les opérateurs mobiles à l'échelle mondiale. Premier pilier : la puce **eUICC**, abritée au sein du **Secure Enclave** d'Apple — une zone de stockage inviolable intégrée au processeur, qui garantit que vos profils opérateur ne peuvent être ni lus ni copiés par une application tierce. Deuxième pilier : la spécification **GSMA SGP.22**, qui définit précisément comment un profil est téléchargé, installé, activé puis supprimé à distance, de façon interopérable quel que soit le fabricant. Troisième pilier : le serveur **SM-DP+** (Subscription Manager Data Preparation), opéré par votre fournisseur, qui prépare le profil chiffré et le délivre à votre iPhone après validation du code d'activation qui lui est transmis.

Lorsque vous scannez un QR code, l'appareil décode l'adresse du serveur SM-DP+ et le jeton d'activation qu'il contient. Il initie alors une liaison TLS sécurisée vers ce serveur, lui communique l'**EID** (le numéro d'identification unique de la puce eUICC, vérifiable avec `*#06#`) ainsi que l'**IMEI** du téléphone. Le serveur contrôle que le profil n'a pas déjà été utilisé, l'associe définitivement à votre matériel, puis envoie le fichier de configuration sous forme d'un paquet chiffré. L'opération complète, du flash du QR code à l'accroche réseau, s'achève généralement en moins de deux minutes. C'est cette standardisation rigoureuse qui explique pourquoi une carte eSIM achetée en France s'active indifféremment sur un iPhone américain, un Google Pixel allemand ou un Samsung Galaxy coréen — l'interopérabilité est inhérente à la norme GSMA.

Pour résumer, retenez trois notions clés : la **carte eSIM** est en réalité une puce soudée (l'eUICC) ; son activation passe par un échange sécurisé entre votre téléphone et le serveur SM-DP+ de l'opérateur ; et le standard GSMA SGP.22 garantit que tout cela fonctionne de manière uniforme à travers le monde.

---

## 1. Prérequis complets avant activation

Avant toute manipulation, vérifiez ces trois points essentiels.

### Compatibilité de l'iPhone

Apple a introduit l'eSIM avec l'iPhone XS, XS Max et XR en 2018. Tous les modèles suivants sont compatibles :

| Génération | Modèles | Support eSIM | Double SIM | Particularités |
|-----------|---------|:---:|:---:|---------------|
| **2018** | XS, XS Max, XR | ✅ | nano-SIM + eSIM | Premiers iPhone eSIM |
| **2019** | 11, 11 Pro, 11 Pro Max | ✅ | nano-SIM + eSIM | Jusqu'à 8 profils stockés |
| **2020** | 12, 12 Pro, 12 mini, 12 Pro Max | ✅ | nano-SIM + eSIM | Ajout 5G |
| **2021** | 13, 13 Pro, 13 mini, 13 Pro Max | ✅ | **Double eSIM active** | Première double eSIM |
| **2022** | 14, 14 Plus, 14 Pro, 14 Pro Max | ✅ | Double eSIM active | Modèles USA : eSIM uniquement |
| **2023** | 15, 15 Plus, 15 Pro, 15 Pro Max | ✅ | Double eSIM active | Modèles USA : eSIM uniquement |
| **2024** | 16, 16 Plus, 16 Pro, 16 Pro Max | ✅ | Double eSIM active | Transfert eSIM simplifié |
| **2025** | 17, 17 Pro, 17 Pro Max | ✅ | Double eSIM active | iOS 19, assistant voyage |
| **Budget** | SE 2e gen. (2020), SE 3e gen. (2022) | ✅ | nano-SIM + eSIM | Pas de double eSIM |

**Cas particuliers :**
- Les iPhone achetés en **Chine continentale** ne supportent PAS l'eSIM (deux nano-SIM physiques).
- Les iPhone achetés à **Hong Kong** et **Macao** supportent l'eSIM (sauf certains modèles 2018-2019).
- Les iPhone 14/15/16/17 achetés aux **États-Unis** sont **uniquement eSIM** — pas d'emplacement SIM physique.

### Vérification du verrouillage opérateur

Un iPhone verrouillé rejette les eSIM d'autres opérateurs. Vérifiez :
1. **Réglages** → **Général** → **Informations**.
2. Faites défiler jusqu'à **Verrouillage opérateur**.
3. **« Aucune restriction SIM »** = déverrouillé ✅.
4. Si un nom d'opérateur est affiché = verrouillé ❌.

En France, le déverrouillage est gratuit après 3 mois d'ancienneté. Contactez votre opérateur (Orange, SFR, Bouygues, Free) pour la procédure — délai de 24 à 48h.

### Connexion Internet stable

L'installation d'un profil eSIM nécessite de télécharger des données depuis le serveur SM-DP+ de votre opérateur. Point important : un VPN actif peut bloquer cette communication — désactivez-le temporairement.

---

## 2. Trois méthodes d'activation eSIM sur iPhone

### Méthode A : Scanner un QR code (la plus courante)

La méthode standard pour les eSIM de voyage et la plupart des opérateurs.

1. Allez dans **Réglages** → **Données cellulaires**.
2. Appuyez sur **Ajouter eSIM**.
3. Sélectionnez **Utiliser un code QR**.
4. Maintenez l'appareil photo à 15-20 cm du QR code. Ne zoomez pas, ne déclenchez pas — l'iPhone détecte automatiquement le code.
5. Appuyez sur **Continuer** quand « Un forfait cellulaire est prêt à être ajouté » apparaît.
6. Nommez votre ligne : « Voyage USA », « Europe », « Pro », « Perso ».

**Si le QR code ne scanne pas :**
- Augmentez la luminosité de l'écran qui affiche le code au maximum.
- Nettoyez l'objectif de l'appareil photo.
- Évitez les reflets : imprimez le QR code si nécessaire.
- Utilisez la saisie manuelle (Méthode B) comme solution de secours.

### Méthode B : Saisie manuelle (solution de secours)

Si le QR code est illisible ou que vous n'avez qu'un code texte :

1. Sur l'écran de scan, appuyez sur **Saisir les détails manuellement** (en bas).
2. Saisissez l'**adresse SM-DP+** (ex : `cust-001.sm-dp-plus.airalo.com`).
3. Saisissez le **code d'activation** (généralement 32 caractères alphanumériques).
4. Laissez le **code de confirmation** vide sauf si votre opérateur l'exige.
5. Appuyez sur **Suivant**.

### Méthode C : Application de l'opérateur (la plus rapide)

De nombreux fournisseurs proposent une installation en un clic via leur application iOS :
1. Téléchargez l'application (Orange et Moi, SFR & Moi, Airalo, Holafly, etc.).
2. Connectez-vous, localisez votre forfait acheté.
3. Appuyez sur **Installer eSIM** ou **Activer**.
4. L'application gère toute la configuration automatiquement.

---

## Activer une eSIM sur iPhone sans Wi-Fi : solutions de contournement

Vous êtes à l'aéroport, dans un train ou en plein voyage, sans réseau Wi-Fi à portée — et vous devez activer votre nouveau forfait. Pas de panique : plusieurs méthodes permettent de télécharger un profil sans connexion sans fil traditionnelle.

### Utiliser les données mobiles de votre autre ligne

Si votre iPhone dispose déjà d'une ligne active (SIM physique ou autre profil), vous pouvez l'utiliser comme passerelle pour télécharger le nouveau profil. Au moment de l'activation, l'iPhone vous propose automatiquement d'utiliser les données cellulaires de la ligne existante si aucun Wi-Fi n'est détecté. Acceptez cette option, et le téléchargement s'effectuera via la connexion 4G LTE ou 5G NR de votre première ligne. Un détail important : cette manipulation consomme quelques mégaoctets sur votre forfait principal, mais le volume reste négligeable — un profil pèse généralement moins de 500 Ko. Si vous êtes à l'étranger, assurez-vous que l'itinérance est active sur votre ligne principale, sans quoi le téléchargement échouera.

### Activation directe via l'application de votre fournisseur

De nombreux opérateurs proposent désormais une installation sans QR code, directement depuis leur application iOS. Le principe : une fois connecté à l'application (qui peut fonctionner avec une connexion cellulaire minimale), vous appuyez sur « Installer » ou « Activer », et l'application transmet les paramètres à iOS via une API dédiée. Cette approche contourne entièrement l'étape du scan et ne nécessite qu'une poignée de kilooctets de données pour déclencher l'installation. C'est la méthode recommandée quand vous voyagez et que le Wi-Fi est indisponible : téléchargez l'application du fournisseur avant le départ, connectez-vous, et l'activation se fera en quelques secondes à destination.

### Transfert rapide par Bluetooth (Quick Transfer)

Si vous remplacez un ancien iPhone par un nouveau modèle, la fonction de transfert rapide exploite le Bluetooth pour migrer un profil sans Wi-Fi ni QR code. Placez les deux appareils côte à côte, et sur le nouveau téléphone, accédez à Réglages > Données cellulaires > Ajouter une eSIM > Transférer depuis un iPhone à proximité. La procédure utilise une liaison Bluetooth sécurisée pour le transfert des paramètres, avec des échanges chiffrés de bout en bout. Les deux iPhone doivent être sous iOS 18 ou version ultérieure, déverrouillés, et connectés au même identifiant Apple. Notez que cette méthode ne convient qu'au transfert d'un profil existant — pas à l'installation d'un tout nouveau forfait.

### Que faire si vous êtes bloqué à l'étranger sans Wi-Fi et sans autre ligne ?

Cette situation est plus délicate, mais pas sans issue. Première option : cherchez un point d'accès Wi-Fi gratuit — la plupart des aéroports internationaux, des gares et des chaînes de café en proposent. Connectez-vous juste le temps d'installer le profil (moins de deux minutes), puis basculez immédiatement sur les données de votre nouvelle carte eSIM. Deuxième option : si vous avez acheté votre forfait via une application, et que cette application est déjà installée, ouvrez-la en utilisant la connexion cellulaire de votre SIM principale (même en itinérance) — le déclenchement de l'installation consomme si peu de données que le coût en roaming est minime. Troisième option : certains hôtels et espaces de coworking proposent un Wi-Fi gratuit à leurs clients ; profitez-en pour activer le profil avant de reprendre la route.

Dans tous les cas, retenez ce principe : ne désactivez jamais votre unique ligne active avant d'avoir vérifié que la nouvelle fonctionne. Une fois le profil téléchargé et le signal acquis, vous pourrez basculer en toute sécurité.

---

## 3. Opérateurs français : guide d'activation par opérateur

| Opérateur | eSIM disponible | Application | Délai | Forfaits compatibles |
|-----------|:---:|------------|-------|---------------------|
| **Orange** | ✅ | Orange et Moi | Immédiat | Open, Sosh, prépayés |
| **SFR** | ✅ | SFR & Moi | 1-4h | Red, Power, prépayés |
| **Bouygues** | ✅ | Bouygues Telecom | Immédiat | Postpayés (vérifier prépayés) |
| **Free** | ✅ | Espace client (web) | Immédiat | Tous les forfaits |

**Orange :** Application → « Mon espace » → « Gérer ma ligne » → « Passer à l'eSIM ». QR code envoyé par email. APN : `orange.fr`.

**SFR :** Application → « Mon forfait » → « Gérer ma SIM » → « eSIM ». Délai possible de 1 à 4 heures — redémarrez l'iPhone après ce délai. APN : `sl2sfr`.

**Bouygues :** Application → « Mon compte » → « Gérer ma SIM » → « eSIM ». Forfaits prépayés non garantis. APN : `ebouygtel.com`.

**Free :** Espace client web → « Gérer ma ligne » → « Changer de carte SIM » → « eSIM ». Gratuit. QR code unique — conservez-le. APN : `free`.

### Quel opérateur français choisir pour l'eSIM sur iPhone ?

Le choix dépend de votre usage. Voici une analyse comparative :

| Critère | Orange | SFR | Bouygues | Free |
|---------|--------|-----|----------|------|
| **Couverture 4G/5G** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Délai d'activation eSIM** | Immédiat | 1-4h | Immédiat | Immédiat |
| **Prix mensuel (forfait 20 Go+)** | 15-25 € | 12-20 € | 10-18 € | 10-16 € |
| **Roaming UE inclus** | Oui | Oui | Oui | Oui (25 Go/mois) |
| **Support eSIM double actif** | ✅ | ✅ | ✅ | ✅ |
| **Application mobile** | Orange et Moi | SFR & Moi | Bouygues Telecom | Freebox Compagnon |

**Notre recommandation :** Pour l'eSIM, Orange offre l'expérience la plus fluide (activation immédiate, application intuitive). Free est le plus économique (eSIM gratuite, forfaits compétitifs), idéal si vous voulez un **forfait eSIM pas cher**. SFR et Bouygues offrent des options intermédiaires solides.

### eSIM prépayée : une alternative sans engagement

Si vous ne voulez pas de forfait mensuel, les **eSIM prépayées** sont une excellente option. Plusieurs opérateurs et MVNO français proposent désormais des forfaits prépayés en eSIM :

- **Orange prépayé** : Rechargeable, sans engagement, activation eSIM disponible
- **Sosh** (MVNO Orange) : Forfaits sans engagement à partir de 5,99 €/mois
- **Red by SFR** : Forfaits sans engagement, eSIM gratuite
- **B&YOU** (MVNO Bouygues) : Forfaits prépayés éligibles à l'eSIM
- **Free** : Forfaits sans engagement, eSIM gratuite pour tous les abonnés

Les **cartes eSIM prépayées** sont parfaites pour les voyageurs qui visitent la France et souhaitent une connexion locale temporaire sans engagement.

---

## 3b. Fournisseurs eSIM de voyage : le guide pour iPhone

---

## 3b. Fournisseurs eSIM de voyage : le guide pour iPhone

Si vous voyagez hors d'Europe, les fournisseurs eSIM de voyage sont la solution la plus économique. Voici un comparatif objectif des principaux acteurs en 2026.

### Comparatif des fournisseurs eSIM de voyage pour iPhone

| Fournisseur | Prix d'entrée | Données | Marché cible | App iOS | Particularité |
|------------|--------------|---------|-------------|--------|---------------|
| **Airalo** | 4,50 $ (1 Go/7j) | 1-20 Go | Mondial | ✅ Oui | Plus grand catalogue de pays |
| **Holafly** | 6 $ (illimité/1j) | Illimité | Mondial | ✅ Oui | Données illimitées (FUP) |
| **Nomad** | 9 $ (5 Go/15j) | 5-50 Go | Mondial | ✅ Oui | APAC forte présence |
| **Ubigi** | 4 $ (500 Mo/1j) | 500 Mo-50 Go | Mondial | ✅ Oui | 5G incluse, automobile |
| **Maya Mobile** | 4,49 $ (3 Go/30j) | 3-50 Go | Mondial | ✅ Oui | Bonne couverture Europe |
| **Roami** | 1,99 $ (1 Go/7j) | 1-50 Go | Mondial | ✅ Oui | Multi-réseau, commutation |

### Comment choisir le meilleur eSIM pour votre iPhone ?

Le **meilleur eSIM** dépend de trois critères : destination, durée et volume de données. Voici une grille de décision :

1. **Destination unique (ex : Japon) :** privilégiez un fournisseur spécialiste du pays avec des partenariats opérateurs locaux (NTT Docomo, SoftBank). Tous les fournisseurs ci-dessus couvrent le Japon, mais les prix varient de 4 à 15 $ pour 5 Go.
2. **Multi-pays (ex : Europe) :** choisissez un **forfait eSIM régional** qui couvre 30+ pays sous un seul achat. Les eSIM régionales sont plus économiques que l'achat d'un forfait par pays.
3. **Usage intensif (streaming, télétravail) :** privilégiez un forfait avec un quota clairement défini plutôt qu'un « illimité » soumis à une politique d'utilisation raisonnable (FUP) qui réduit le débit après 30-50 Go.
4. **Budget serré :** les **forfaits eSIM pas chers** démarrent à 1,99 $ pour 1 Go / 7 jours. Pour un week-end, c'est souvent suffisant. Comparez le prix au Go : un forfait à 5 $ pour 1 Go coûte 5 $/Go, tandis qu'un forfait à 15 $ pour 10 Go coûte 1,50 $/Go — bien plus économique.

### eSIM gratuit : mythe ou réalité ?

Plusieurs fournisseurs proposent des **eSIM gratuites** d'essai (100-500 Mo) pour tester leur service. C'est une excellente façon de vérifier la compatibilité de votre iPhone et la qualité du réseau avant d'acheter un forfait payant. Consultez notre page **[eSIM gratuite](/free-esim/)** pour les offres disponibles. Notez qu'il n'existe pas d'eSIM complètement gratuite avec data illimité — les offres « gratuites » sont des essais limités ou des promotions de bienvenue.

---

## 4. Configuration post-activation pour voyager

### Réglages double SIM

C'est l'étape cruciale pour éviter les frais de roaming sur votre ligne française.

1. **Réglages** → **Données cellulaires**.
2. **Données cellulaires :** sélectionnez votre eSIM de voyage.
3. **Ligne par défaut :** sélectionnez votre SIM physique française (pour les appels/SMS).
4. **Désactivez « Autoriser le basculement des données »** — empêche l'iPhone de basculer furtivement sur la SIM française.
5. Sélectionnez votre SIM physique → **Itinérance des données : DÉSACTIVÉE**.
6. Sélectionnez votre eSIM → **Itinérance des données : ACTIVÉE** (indispensable pour les eSIM de voyage).

### Astuce avancée : appels Wi-Fi via l'eSIM

Sur iPhone, vous pouvez recevoir les appels sur votre numéro français via les données de l'eSIM (Wi-Fi Calling over Cellular Data) :
1. **Réglages** → **Données cellulaires** → [SIM française].
2. Activez **Appels Wi-Fi**.
3. Tant que l'eSIM a des données, votre ligne française peut recevoir des appels sans frais de roaming.

### Configuration pour l'Europe

Si vous voyagez en Europe avec un forfait français incluant le roaming UE (Orange, SFR, Free, Bouygues), vous n'avez pas besoin d'eSIM supplémentaire — les données sont incluses. L'eSIM devient pertinente pour les destinations hors UE (Royaume-Uni post-Brexit, États-Unis, Asie).

---

## 5. Cas concrets d'activation eSIM sur iPhone

### Scénario 1 : Activation eSIM de voyage pour le Japon

Claire part 2 semaines au Japon. Elle achète un forfait eSIM 10 Go / 30 jours.

1. **Avant le départ (Paris, Wi-Fi) :** achat en ligne → QR code → scan → installation. Elle désactive temporairement l'eSIM.
2. **À l'arrivée (Tokyo, Narita) :** activation de l'eSIM + itinérance des données → connexion en 60 secondes.
3. **Résultat :** économie de 40 € par rapport au roaming Orange.

### Scénario 2 : Passage de SIM physique à eSIM avec Free

Thomas veut libérer l'emplacement SIM de son iPhone 13 pour une eSIM de voyage.

1. Espace client Free → « Changer de carte SIM » → « eSIM ».
2. QR code reçu par email → scan → sa ligne Free est maintenant sur eSIM.
3. L'emplacement SIM physique est libre pour une nano-SIM étrangère ou reste libre.

### Scénario 3 : Double SIM pro/perso

Sophie a un iPhone 15 et deux lignes : une eSIM Orange (pro) et une eSIM Free (perso). Avec l'iPhone 15, elle active les deux eSIM simultanément — plus besoin de SIM physique. Elle définit la ligne pro pour les appels et la ligne perso pour les données.

---

## 6. Transfert rapide eSIM entre iPhone

Avec iOS 18+, le transfert d'eSIM d'un ancien iPhone vers un nouveau est automatisé :

1. Placez les deux iPhone à proximité (moins de 10 cm).
2. Sur le nouvel iPhone : **Réglages** → **Données cellulaires** → **Ajouter eSIM**.
3. Sélectionnez **Transférer depuis un iPhone à proximité**.
4. Confirmez sur l'ancien iPhone.

Cette fonctionnalité utilise le Bluetooth et le Wi-Fi pour transférer le profil de manière sécurisée. Pour les transferts iPhone ↔ Android, consultez notre **[guide de transfert multiplateforme](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)**.

---

## 7. Dépannage des problèmes d'activation

| Erreur | Cause probable | Solution |
|--------|---------------|----------|
| **« Le forfait ne peut pas être ajouté »** | Téléphone verrouillé, QR déjà utilisé, mémoire eUICC pleine | Vérifiez le verrouillage, supprimez les profils inutilisés, demandez un nouveau QR |
| **Blocage sur « Activation… »** | Wi-Fi instable, VPN activé | Désactivez le VPN, changez de Wi-Fi, redémarrez l'iPhone |
| **« Aucun service »** | Itinérance désactivée | Activez l'itinérance + mode avion 30 secondes |
| **Données absentes (signal OK)** | APN manquant | Configurez manuellement l'APN (voir ci-dessous) |
| **QR code non reconnu** | Code expiré, reflets d'écran | Saisie manuelle, imprimez le QR code |
| **Double SIM : données sur la mauvaise ligne** | Basculement auto activé | Désactivez « Autoriser le basculement » |

### APN des opérateurs français

| Opérateur | APN | Utilisateur | Mot de passe |
|-----------|-----|-------------|--------------|
| Orange | `orange.fr` | (vide) | (vide) |
| SFR | `sl2sfr` | (vide) | (vide) |
| Free | `free` | (vide) | (vide) |
| Bouygues | `ebouygtel.com` | (vide) | (vide) |

**Chemin :** Réglages → Données cellulaires → [eSIM] → Réseau de données cellulaires.

---

## Dépannage avancé : codes d'erreur et solutions

Au-delà des pannes classiques abordées dans la section précédente, certains messages d'erreur spécifiques peuvent bloquer l'installation d'un profil sur votre iPhone. Voici les plus fréquents, leur signification et la marche à suivre pour les résoudre.

### « Échec de l'activation »

Ce message générique apparaît lorsque l'iPhone ne parvient pas à finaliser la connexion au réseau après avoir téléchargé le profil. Plusieurs causes sont possibles. Vérifiez d'abord que l'itinérance des données est bien activée pour la ligne concernée — c'est la raison numéro un de cet échec, particulièrement avec les forfaits de voyage. Si le paramètre est correct, passez en mode avion pendant trente secondes, puis désactivez-le pour forcer une nouvelle recherche de réseau. En dernier recours, supprimez le profil partiellement installé via Réglages > Données cellulaires, redémarrez l'iPhone, et recommencez l'installation depuis le début.

### « Code QR invalide »

Votre iPhone reconnaît le QR code mais refuse son contenu. Cela signifie généralement que le code a déjà été utilisé — les QR codes d'activation sont presque toujours à usage unique. Contactez votre fournisseur pour obtenir un nouveau code. Autre possibilité : le code contient une adresse SM-DP+ obsolète ou un jeton d'activation expiré. Vérifiez également que vous n'essayez pas d'installer un profil destiné à un autre modèle d'appareil (certains opérateurs segmentent leurs profils par gamme).

### « Profil eSIM expiré »

Les profils ont une durée de validité limitée après leur émission. Si vous avez acheté un forfait il y a plusieurs semaines et que vous tentez seulement maintenant de l'activer, le profil peut avoir expiré. La solution est simple : demandez un nouveau QR code ou une régénération du profil à votre fournisseur. Pour éviter ce désagrément, activez votre forfait dans les 24 à 48 heures suivant l'achat, même si vous ne comptez pas l'utiliser immédiatement — vous pourrez le désactiver temporairement et le réactiver à destination.

### « Impossible de se connecter au serveur »

Ce message indique que l'iPhone ne parvient pas à joindre le serveur SM-DP+ de l'opérateur. Les causes sont multiples : un VPN actif qui bloque la requête (désactivez-le), un pare-feu sur le réseau Wi-Fi (essayez un autre point d'accès), ou un serveur opérateur momentanément indisponible. Dans ce dernier cas, patientez quinze minutes et réessayez. Si le problème persiste au-delà d'une heure, le souci vient probablement de l'infrastructure de votre fournisseur — contactez son support technique.

### « Données cellulaires indisponibles » après activation réussie

Le profil est installé, le signal apparaît, mais aucune donnée ne passe. Le fautif est presque toujours l'APN (nom du point d'accès). Vérifiez-le manuellement dans Réglages > Données cellulaires > [votre ligne] > Réseau de données cellulaires. Les APN des opérateurs français figurent dans la section dépannage ci-dessus. Pour une carte eSIM de voyage, l'APN correct est normalement indiqué dans l'email de confirmation — consultez-le avant de contacter le support.

### Quand contacter votre opérateur plutôt que de multiplier les tentatives ?

Contactez le service client si : le QR code vous est refusé alors que vous êtes certain de ne pas l'avoir utilisé ; l'erreur « Profil expiré » persiste après régénération ; le message « Impossible de se connecter au serveur » dure plus de deux heures ; ou si votre iPhone affiche un code d'erreur numérique (les plus courants sont 3.1, 8.2 et 12 — notez-le pour le transmettre au support). En revanche, pour les erreurs « Échec de l'activation » et « Données cellulaires indisponibles », une ou deux tentatives supplémentaires avec les vérifications ci-dessus suffisent généralement.

Enfin, si votre iPhone utilise la **VoLTE** (Voice over LTE) ou le **Wi-Fi calling** et que ces services ne fonctionnent pas après l'activation, vérifiez que l'option est bien activée dans Réglages > Données cellulaires > [votre ligne] > Appels Wi-Fi. Certains profils nécessitent une activation manuelle de la VoLTE, notamment sur les réseaux **4G LTE** et **5G NR** étrangers — le basculement n'est pas toujours automatique.

---

## 8. FAQ — Activation eSIM sur iPhone

**Q1 : Combien d'eSIM puis-je avoir sur mon iPhone ?**
Vous pouvez stocker 8 profils eSIM ou plus. Sur iPhone 13 et plus récents, **deux eSIM peuvent être actives simultanément** (double eSIM active). Sur iPhone XS à 12, une seule eSIM est active, l'autre ligne doit être une SIM physique.

**Q2 : Puis-je utiliser ma SIM physique et mon eSIM en même temps ?**
Oui. Tous les iPhone (sauf modèles USA eSIM-only) supportent la double SIM : une nano-SIM + une eSIM actives simultanément. Pour les problèmes de double SIM, voir notre guide **[12 correctifs double eSIM](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)**.

**Q3 : L'eSIM consomme-t-elle plus de batterie ?**
Non, la consommation est identique à une SIM physique (différence < 1 %). En revanche, deux lignes actives en zone de signal faible peuvent augmenter la consommation de 5-15 %.

**Q4 : Puis-je supprimer mon eSIM après le voyage ?**
Oui. Allez dans Réglages > Données cellulaires, sélectionnez l'eSIM, puis **Supprimer le forfait**. Ne supprimez JAMAIS une eSIM active pendant un voyage — les QR codes sont généralement à usage unique.

**Q5 : Mon iPhone est sous iOS 17, puis-je activer une eSIM ?**
Oui. L'eSIM est supportée depuis iOS 12.1. Toutes les versions ultérieures (iOS 13 à 19) la supportent pleinement.

**Q6 : L'iPhone 14/15 acheté en France supporte-t-il l'eSIM ?**
Oui. Les modèles français conservent l'emplacement SIM physique ET supportent l'eSIM (contrairement aux modèles américains qui sont eSIM uniquement).

**Q7 : Puis-je transférer mon eSIM d'un ancien iPhone vers un nouveau ?**
Oui. iOS 18+ propose le transfert rapide d'eSIM entre deux iPhone via Bluetooth. Placez-les à proximité et suivez les instructions. Pour le transfert vers Android, contactez votre opérateur.

**Q8 : Que faire si l'activation échoue après plusieurs tentatives ?**
Supprimez le profil partiellement installé (Réglages > Données cellulaires > Supprimer). Demandez un nouveau QR code à votre opérateur. Réessayez sur un Wi-Fi différent, sans VPN.

**Q9 : Puis-je utiliser une eSIM de voyage pour les appels ?**
La plupart des eSIM de voyage sont data-only (données uniquement). Utilisez WhatsApp, FaceTime, Signal ou Skype pour vos appels via les données mobiles.

**Q10 : Comment savoir si mon iPhone est déverrouillé ?**
Réglages > Général > Informations > Verrouillage opérateur. « Aucune restriction SIM » signifie que l'iPhone est déverrouillé. Contactez votre opérateur pour le déverrouillage si nécessaire — gratuit après 3 mois en France.

**Q11 : Quelle est la différence entre une eSIM de voyage et une eSIM d'opérateur classique ?**
Une eSIM de voyage (Airalo, Holafly, Nomad, Roami) est généralement **data-only** — pas de numéro de téléphone, pas d'appels traditionnels. Elle est conçue pour les données mobiles à l'étranger. Une eSIM d'opérateur (Orange, SFR, Free, Bouygues) inclut un numéro de téléphone et les appels/SMS. Pour les communications avec une eSIM de voyage, utilisez WhatsApp, FaceTime, Signal ou Skype via les données mobiles.

**Q12 : Puis-je avoir ma ligne Free en eSIM ET une eSIM de voyage en même temps ?**
Sur iPhone XS/XR/11/12/SE : non, car une seule eSIM peut être active. Vous devez choisir entre l'eSIM Free et l'eSIM de voyage, et garder l'autre ligne en SIM physique. Sur iPhone 13 et plus récents : oui, deux eSIM peuvent être actives simultanément (double eSIM active).

**Q13 : L'activation eSIM sur iPhone fonctionne-t-elle sans Wi-Fi ?**
Non. Le téléchargement du profil depuis le serveur SM-DP+ nécessite une connexion Internet. Si vous n'avez pas de Wi-Fi, vous pouvez utiliser les données mobiles de votre autre ligne. Mais ne désactivez JAMAIS votre seule connexion Internet avant d'avoir installé l'eSIM — vous seriez bloqué.

**Q14 : Combien coûte une eSIM en France ?**
Le prix dépend de l'opérateur. Free propose l'eSIM **gratuitement** pour tous les abonnés. Orange et SFR facturent généralement 10 € pour le passage à l'eSIM (souvent offert pour les nouveaux abonnés). Bouygues propose l'eSIM gratuitement pour les forfaits Sensation et Pure. Les MVNO (Sosh, Red, B&YOU) l'incluent généralement sans frais supplémentaires.

**Q15 : Comment ça fonctionne, une eSIM, techniquement ?**
L'eSIM utilise une puce **eUICC** (embedded Universal Integrated Circuit Card) soudée sur la carte mère de l'iPhone. Quand vous scannez un QR code, l'iPhone contacte le serveur **SM-DP+** (Subscription Manager Data Preparation) de l'opérateur via Internet. Ce serveur authentifie votre demande, vérifie le code d'activation, et télécharge un **profil opérateur** chiffré dans la mémoire sécurisée de l'eUICC. Le tout est régi par le standard **GSMA SGP.22**, qui garantit l'interopérabilité mondiale entre tous les opérateurs et fabricants.

---

## 9. Ce qu'il faut retenir

L'activation d'une eSIM sur iPhone est une procédure simple qui prend moins de 2 minutes. La clé du succès réside dans la préparation : vérifiez la compatibilité avant d'acheter, installez le profil en Wi-Fi avant le départ, et configurez correctement les paramètres double SIM pour éviter les frais de roaming.

**Checklist récapitulative :**
1. ✅ Vérifiez la compatibilité : `*#06#` → EID présent.
2. ✅ Vérifiez le déverrouillage : « Aucune restriction SIM ».
3. ✅ Connectez-vous au Wi-Fi avant l'installation.
4. ✅ Scannez le QR code — ou utilisez la saisie manuelle.
5. ✅ Activez l'itinérance sur l'eSIM, désactivez-la sur la SIM française.
6. ✅ Désactivez « Autoriser le basculement des données ».

Pour approfondir : **[Qu'est-ce qu'une eSIM ?](/faq/What-Is-eSIM/)**, **[activer une eSIM (tous appareils)](/faq/how-to-activate-an-esim/)**, ou **[guide de dépannage](/faq/eSIM-Deep-Troubleshooting-Guide-2026/)** en cas de problème.

---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr",
  "mainEntity": [
    {"@type": "Question", "name": "Combien d'eSIM puis-je avoir sur mon iPhone ?", "acceptedAnswer": {"@type": "Answer", "text": "Vous pouvez stocker 8 profils eSIM ou plus. Sur iPhone 13 et plus récents, deux eSIM peuvent être actives simultanément (double eSIM active). Sur iPhone XS à 12, une seule eSIM est active, l'autre ligne doit être une SIM physique."}},
    {"@type": "Question", "name": "Puis-je utiliser ma SIM physique et mon eSIM en même temps ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. Tous les iPhone (sauf modèles USA eSIM-only) supportent la double SIM : une nano-SIM et une eSIM actives simultanément. Pour les problèmes de double SIM, consultez notre guide 12 correctifs double eSIM."}},
    {"@type": "Question", "name": "L'eSIM consomme-t-elle plus de batterie ?", "acceptedAnswer": {"@type": "Answer", "text": "Non, la consommation est identique à une SIM physique (différence inférieure à 1 %). En revanche, deux lignes actives en zone de signal faible peuvent augmenter la consommation de 5 à 15 %."}},
    {"@type": "Question", "name": "Puis-je supprimer mon eSIM après le voyage ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. Allez dans Réglages > Données cellulaires, sélectionnez l'eSIM, puis Supprimer le forfait. Ne supprimez jamais une eSIM active pendant un voyage — les QR codes sont généralement à usage unique."}},
    {"@type": "Question", "name": "Mon iPhone est sous iOS 17, puis-je activer une eSIM ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. L'eSIM est supportée depuis iOS 12.1. Toutes les versions ultérieures (iOS 13 à 19) la supportent pleinement sans aucune restriction."}},
    {"@type": "Question", "name": "L'iPhone 14/15 acheté en France supporte-t-il l'eSIM ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. Les modèles français conservent l'emplacement SIM physique ET supportent l'eSIM, contrairement aux modèles américains qui sont eSIM uniquement."}},
    {"@type": "Question", "name": "Puis-je transférer mon eSIM d'un ancien iPhone vers un nouveau ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. iOS 18+ propose le transfert rapide d'eSIM entre deux iPhone via Bluetooth. Placez-les à proximité et suivez les instructions. Pour le transfert vers Android, contactez votre opérateur."}},
    {"@type": "Question", "name": "Que faire si l'activation échoue après plusieurs tentatives ?", "acceptedAnswer": {"@type": "Answer", "text": "Supprimez le profil partiellement installé (Réglages > Données cellulaires > Supprimer). Demandez un nouveau QR code à votre opérateur. Réessayez sur un Wi-Fi différent, sans VPN."}},
    {"@type": "Question", "name": "Puis-je utiliser une eSIM de voyage pour les appels ?", "acceptedAnswer": {"@type": "Answer", "text": "La plupart des eSIM de voyage sont data-only (données uniquement). Utilisez WhatsApp, FaceTime, Signal ou Skype pour vos appels via les données mobiles."}},
    {"@type": "Question", "name": "Comment savoir si mon iPhone est déverrouillé ?", "acceptedAnswer": {"@type": "Answer", "text": "Réglages > Général > Informations > Verrouillage opérateur. « Aucune restriction SIM » signifie que l'iPhone est déverrouillé. Contactez votre opérateur pour le déverrouillage — gratuit après 3 mois en France."}}
  ]
}
</script>

*Basé sur la documentation officielle d'Apple iOS 19, les spécifications GSMA SGP.22 et les informations des opérateurs français. Dernière révision : août 2026.*
