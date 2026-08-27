---
title: "Guide de dépannage eSIM 2026 : résoudre tous les problèmes"
h1_title: "Guide de dépannage eSIM 2026 : résoudre tous les problèmes courants"
description: "Dépannage eSIM 2026 : 16 scénarios réels résolus. Activation impossible, QR code invalide, pas de réseau, erreur EID, conflit double SIM, APN mal configuré. iPhone et Android."
keywords: ["dépannage esim", "esim ne fonctionne pas", "esim pas de réseau", "qr code esim invalide", "esim activation impossible", "problème esim iphone", "problème esim android", "esim erreur activation"]
toc: true
date: 2026-08-11T10:00:00Z
lastmod: 2026-08-11T10:00:00Z

# Configuration hardcodée du site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Traduction du texte d'interface (supporte le multilinguisme)
ui_text:
  updated_on: "Mis à jour le"
  min_read: "min de lecture"
  toc: "Table des matières"

breadcrumbs:
  home:
    text: "Accueil"
    url: "/"
  parent:
    text: "FAQ"
    url: "/faq/"

# Barre latérale droite : eSIM populaires (6 pays, 1,99 USD)
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

# Barre latérale droite : eSIM gratuites (4 pays)
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

# Barre latérale droite : questions populaires (5 questions)
sidebar_questions:
  title: "Questions populaires"
  items:
    - question: "Qu'est-ce que l'activation eSIM et comment fonctionne-t-elle ?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Comment activer une eSIM ?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Comment activer l'eSIM sur iPhone (tous les modèles) ?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Dernière liste de compatibilité eSIM"
      url: "/compatibility/"
---

L'eSIM simplifie la vie des voyageurs et des utilisateurs multi-lignes, mais comme toute technologie, elle peut parfois poser problème. Une activation qui échoue, un QR code qui ne scanne pas, des données mobiles absentes — ces désagréments surviennent souvent au pire moment, quand vous venez d'atterrir dans un pays étranger.

Ce guide de dépannage eSIM couvre **tous les problèmes courants** avec des solutions pas à pas, classés par catégorie et par gravité. Il est régulièrement mis à jour avec les retours d'utilisateurs réels et les évolutions logicielles (iOS 19, Android 16). Pour les problèmes de double SIM, consultez notre **[guide des 12 correctifs pour double eSIM](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## 📌 Résumé : diagnostic rapide

Avant de plonger dans les solutions détaillées, commencez par ce diagnostic en 3 étapes :

1. **Vérifiez la compatibilité** — `*#06#` pour voir l'EID. Pas d'EID = pas d'eSIM.
2. **Redémarrez le téléphone** — 40 % des problèmes eSIM se résolvent avec un simple redémarrage.
3. **Vérifiez l'itinérance des données** — elle doit être **activée** pour la ligne eSIM, même si vous n'êtes pas en « roaming » au sens classique.

Si ces trois vérifications ne résolvent rien, poursuivez avec les sections ci-dessous.

---

## Arbre de diagnostic : identifier la cause racine

Utilisez cet arbre de décision pour cibler votre problème :

```
Problème eSIM
├── L'eSIM ne s'installe PAS du tout
│   ├── Message « Impossible d'ajouter le forfait » → Section 1
│   ├── QR code non reconnu / flou → Section 2
│   ├── Erreur « Code d'activation invalide » → Section 2
│   └── L'option « Ajouter eSIM » est absente/grise → Section 3
│
├── L'eSIM est installée mais ne fonctionne PAS
│   ├── « Aucun service » / « Pas de réseau » → Section 4
│   ├── Données mobiles absentes (mais signal affiché) → Section 5
│   ├── Appels OK mais pas de données → Section 5 (APN)
│   └── Données OK mais pas d'appels → Section 6
│
├── Problèmes intermittents
│   ├── Coupures aléatoires → Section 7
│   ├── Lenteur / débit faible → Section 7
│   └── L'eSIM se désactive toute seule → Section 8
│
└── Problèmes avancés
    ├── eSIM supprimée après mise à jour iOS/Android → Section 9
    ├── Transfert eSIM vers nouveau téléphone impossible → Section 10
    └── Conflit double SIM → Section 11
```

---

## Section 1 : « Impossible d'ajouter le forfait cellulaire »

C'est le message d'erreur le plus fréquent lors de l'installation d'une eSIM. Il apparaît généralement pour l'une de ces raisons.

### Cause 1 : Trop de profils eSIM stockés

L'iPhone et la plupart des Android ont une limite de profils eSIM stockés (généralement 8 à 10). Si vous avez accumulé des profils d'anciens voyages, vous avez peut-être atteint cette limite.

**Solution :**
1. Allez dans **Réglages > Données cellulaires** (iPhone) ou **Paramètres > Connexions > Gestionnaire de carte SIM** (Android).
2. Identifiez les anciens profils eSIM inutilisés.
3. Sélectionnez chaque profil obsolète et appuyez sur **Supprimer le forfait**.
4. Réessayez d'ajouter la nouvelle eSIM.

> ⚠️ **Attention :** Une fois supprimé, un profil eSIM ne peut pas être récupéré. Assurez-vous de ne pas supprimer un profil actif.

### Cause 2 : Connexion Wi-Fi instable

L'installation d'une eSIM nécessite une connexion Internet stable (Wi-Fi ou données cellulaires) pour télécharger le profil depuis le serveur SM-DP+ de l'opérateur. Un Wi-Fi instable ou un VPN activé peut bloquer la communication.

**Solution :**
1. Désactivez temporairement tout VPN ou proxy.
2. Connectez-vous à un réseau Wi-Fi stable (pas de Wi-Fi public d'aéroport ou d'hôtel — ils bloquent souvent les ports nécessaires).
3. Passez en 4G/5G sur votre SIM principale si le Wi-Fi est indisponible.
4. Réessayez l'installation.

### Cause 3 : QR code déjà utilisé ou expiré

Les codes QR eSIM sont généralement à usage unique et ont une date d'expiration (souvent 30 à 90 jours après l'achat). Un QR code déjà scanné ou expiré génère cette erreur.

**Solution :**
1. Contactez le support de votre fournisseur eSIM. La plupart (Airalo, Holafly, Nomad) répondent en moins de 30 minutes.
2. Demandez un **nouveau QR code** ou un **code d'activation manuelle** (adresse SM-DP+ et code à 32 caractères).
3. Utilisez l'option « Saisir les détails manuellement » dans le menu d'ajout eSIM.

---

## Section 2 : Problèmes de QR code

### Le QR code ne scanne pas

**Causes possibles :**
- Objectif de l'appareil photo sale ou rayé
- Mauvaise luminosité ambiante
- QR code affiché sur un écran avec une luminosité trop faible ou des reflets
- Fichier image compressé ou de mauvaise résolution
- QR code endommagé (impression papier de mauvaise qualité)

**Solutions :**

1. **Nettoyez l'objectif** avec un chiffon microfibre.
2. **Augmentez la luminosité** de l'écran affichant le QR code au maximum.
3. **Utilisez l'appareil photo natif** (pas une application tierce) — pointez simplement, sans appuyer sur le déclencheur. Sur iPhone, maintenez le QR code au centre du viseur pendant 2-3 secondes.
4. **Imprimez le QR code** si vous le visualisez sur un écran — les reflets d'écran sont la cause n°1 d'échec de scan.
5. **Utilisez la saisie manuelle** comme solution de secours. Dans le menu « Ajouter eSIM », choisissez « Saisir les détails manuellement » au lieu de scanner.

### « Code d'activation invalide » ou « Ce code n'est plus valide »

Ce message indique que le serveur SM-DP+ (le serveur de l'opérateur qui délivre les profils eSIM) a rejeté votre code.

**Solutions :**
1. Vérifiez que la date d'expiration du forfait eSIM n'est pas dépassée. La plupart des fournisseurs indiquent la date limite d'activation dans l'email de confirmation.
2. Vérifiez que vous n'avez pas déjà activé ce profil sur un autre appareil. Les eSIM sont généralement liées à un seul téléphone.
3. Si vous avez acheté l'eSIM il y a plus de 30 jours, le code a probablement expiré. Contactez le support pour un renouvellement.

---

## Section 3 : L'option « Ajouter eSIM » est absente ou grisée

Ce problème est généralement lié à l'appareil lui-même.

### Cause 1 : Appareil non compatible eSIM

Tous les téléphones ne supportent pas l'eSIM. Même certains modèles récents peuvent avoir des restrictions régionales (les iPhone chinois, par exemple, ont deux SIM physiques).

**Diagnostic :**
1. Composez `*#06#`. Si un numéro **EID** de 32 chiffres apparaît, votre téléphone supporte l'eSIM.
2. Si seuls les IMEI apparaissent, votre appareil n'a pas de module eSIM.

Consultez notre **[liste complète des appareils compatibles eSIM](/compatibility/)** pour vérifier votre modèle.

### Cause 2 : Téléphone verrouillé par un opérateur

Un iPhone ou Android acheté avec un contrat subventionné peut être verrouillé, limitant les eSIM à celles du même opérateur.

**Diagnostic (iPhone) :**
Allez dans **Réglages > Général > Informations > Verrouillage opérateur**.
- **« Aucune restriction SIM »** = déverrouillé ✅
- **Nom de l'opérateur affiché** = verrouillé ❌

**Solution :** Contactez votre opérateur pour demander le déverrouillage. En France, le déverrouillage est gratuit après 3 mois d'ancienneté.

### Cause 3 : Restriction de gestion d'appareil (MDM)

Si votre téléphone est fourni par votre entreprise, un profil MDM (Mobile Device Management) peut bloquer l'ajout d'eSIM.

**Solution :** Contactez le service informatique de votre entreprise. Cette restriction ne peut pas être contournée sans leur intervention.

---

## Section 4 : « Aucun service » ou « Pas de réseau » après installation

L'eSIM est installée mais aucun réseau n'apparaît. C'est le problème le plus fréquent à l'arrivée en voyage.

### Étape 1 : Activez l'itinérance des données

C'est la cause n°1. Même si vous êtes dans le pays de destination de l'eSIM, l'itinérance doit être activée car l'eSIM utilise un réseau partenaire, pas votre réseau domestique.

1. Allez dans **Réglages > Données cellulaires** (iPhone) ou **Paramètres > Connexions > Cartes SIM** (Android).
2. Sélectionnez votre eSIM.
3. Activez **Itinérance des données**.

### Étape 2 : Vérifiez la sélection du réseau

Le mode automatique peut parfois verrouiller un réseau distant avec un signal faible.

1. Allez dans **Réglages > Données cellulaires > [votre eSIM] > Sélection du réseau**.
2. Désactivez **Automatique**.
3. Attendez 30 secondes que la liste des réseaux disponibles s'affiche.
4. Sélectionnez manuellement un réseau partenaire (par exemple T-Mobile ou AT&T pour une eSIM USA).

### Étape 3 : Activez/désactivez le mode avion

1. Activez le **Mode avion** pendant 30 secondes.
2. Désactivez-le.
3. Cela force le téléphone à rechercher tous les réseaux disponibles.

### Étape 4 : Vérifiez la couverture réelle

Tous les forfaits eSIM ne couvrent pas toutes les zones. Un forfait « USA » peut ne pas inclure Porto Rico ou les Îles Vierges. Un forfait « Europe » peut exclure la Suisse ou les Balkans.

**Solution :** Consultez la liste des pays couverts sur le site de votre fournisseur eSIM. Si votre destination n'est pas couverte, contactez le support pour un remboursement ou un changement de forfait.

---

## Section 5 : Données mobiles absentes (mais signal affiché)

Vous voyez des barres de signal, parfois même la 4G ou 5G, mais rien ne se charge. C'est presque toujours un problème d'APN.

### Configuration de l'APN

L'APN (Access Point Name) est la passerelle entre votre téléphone et le réseau de données. Sans APN correct, vos données mobiles ne peuvent pas atteindre Internet.

**iPhone :**
1. Allez dans **Réglages > Données cellulaires > [votre eSIM] > Réseau de données cellulaires**.
2. Dans le champ **APN**, saisissez l'APN fourni par votre opérateur eSIM.
3. Laissez les champs « Nom d'utilisateur » et « Mot de passe » vides, sauf indication contraire.
4. Redémarrez l'iPhone.

**Android (Samsung) :**
1. **Paramètres > Connexions > Réseaux mobiles > Noms des points d'accès**.
2. Sélectionnez votre eSIM.
3. Appuyez sur **+** ou **Ajouter**.
4. Saisissez le nom et l'APN.
5. Enregistrez et sélectionnez ce nouvel APN.

**APN courants des fournisseurs eSIM :**

| Fournisseur | APN | Nom d'utilisateur | Mot de passe | Type d'authentification |
|------------|-----|-------------------|--------------|------------------------|
| Airalo | `airalo` | (vide) | (vide) | Aucune |
| Holafly | `holafly` | (vide) | (vide) | Aucune |
| Nomad | `global` | (vide) | (vide) | Aucune |
| Roami | `internet` | (vide) | (vide) | Aucune |
| Ubigi | `ubigi` | (vide) | (vide) | Aucune |
| Bouygues | `mmsbouygtel.com` | (vide) | (vide) | Aucune |
| Orange | `orange.fr` | `orange` | `orange` | PAP |
| SFR | `sl2sfr` | (vide) | (vide) | Aucune |
| Free | `free` | (vide) | (vide) | Aucune |

### Autres causes de données absentes

- **Forfait épuisé :** Vérifiez votre consommation dans l'application ou le tableau de bord de votre fournisseur.
- **Limitation de débit :** Certains forfaits réduisent le débit à 128 kbps après épuisement du quota haut débit. À cette vitesse, les pages mettent 30 à 60 secondes à charger.
- **DNS bloqué :** Essayez de changer les DNS dans les réglages réseau avancés (utilisez `8.8.8.8` de Google ou `1.1.1.1` de Cloudflare).

---

## Section 6 : Appels et SMS impossibles via l'eSIM

Toutes les eSIM ne supportent pas les appels et les SMS. La plupart des eSIM de voyage sont **data-only** (données uniquement).

### Vérifiez le type de votre forfait

- **Data-only :** Internet uniquement. Pas de numéro de téléphone, pas d'appels, pas de SMS. Utilisez WhatsApp, FaceTime, Signal ou Telegram pour communiquer.
- **Voice + Data :** Inclut un numéro de téléphone. Vérifiez que la ligne est sélectionnée comme ligne par défaut pour la voix dans les réglages.

### Si votre forfait supporte les appels mais qu'ils ne fonctionnent pas

1. Allez dans **Réglages > Données cellulaires > Forfait par défaut**.
2. Assurez-vous que votre eSIM est sélectionnée pour les appels vocaux.
3. Vérifiez que l'option **Appels Wi-Fi** est activée si disponible.
4. Redémarrez.

---

## Section 7 : Lenteur et déconnexions intermittentes

### Problème de débit

**Causes fréquentes :**
- Forfait en throttling (débit réduit après épuisement du quota)
- Réseau surchargé (aéroport, centre-ville dense, événement)
- Mauvaise couverture réseau à votre emplacement

**Solutions :**
1. **Vérifiez votre quota** dans l'application du fournisseur.
2. **Changez de réseau manuellement** — même fournisseur eSIM, autre réseau partenaire.
3. **Désactivez la 5G** si disponible — en zone de couverture 5G limite, la 4G LTE est souvent plus stable. Allez dans Réglages > Données cellulaires > [eSIM] > Voix et données > 4G.
4. **Testez votre débit** sur [speedtest.net](https://speedtest.net) — moins de 2 Mbps = probablement du throttling.

### Coupures aléatoires

**Causes possibles :**
- Basculement automatique entre réseaux partenaires
- Conflit avec la SIM physique
- iOS/Android désactive l'eSIM inactive pour économiser la batterie

**Solutions :**
1. **Désactivez la sélection automatique du réseau** et verrouillez sur un réseau stable (Section 4, Étape 2).
2. **Désactivez temporairement la SIM physique** pour isoler le problème (Réglages > Données cellulaires > [SIM physique] > Désactiver cette ligne).
3. **Vérifiez l'économiseur de batterie** — certains modes d'économie d'énergie limitent les données en arrière-plan.

---

## Section 8 : L'eSIM se désactive toute seule

C'est un problème frustrant qui a plusieurs causes possibles.

### Cause 1 : Conflit double SIM

Si vos deux lignes sont configurées pour utiliser la même fonction (ex. les deux pour les données), iOS/Android peut basculer de façon inattendue.

**Solution :**
1. Définissez des rôles clairs : une ligne pour les données, l'autre pour la voix/SMS.
2. Dans Réglages > Données cellulaires, assurez-vous qu'une seule ligne est sélectionnée pour les données.

### Cause 2 : « Permettre le basculement des données »

Sur iPhone, l'option « Permettre le basculement des données cellulaires » peut automatiquement passer à l'autre ligne si la connexion est mauvaise.

**Solution :** Désactivez cette option si vous souhaitez utiliser exclusivement votre eSIM.

### Cause 3 : Bug logiciel

Des bugs d'iOS ou d'Android peuvent désactiver aléatoirement une eSIM.

**Solution :**
1. Mettez à jour votre système d'exploitation vers la dernière version.
2. Réinitialisez les réglages réseau : **Réglages > Général > Transférer ou réinitialiser > Réinitialiser > Réinitialiser les réglages réseau**. Cela ne supprime pas vos eSIM mais efface les mots de passe Wi-Fi.

---

## Section 9 : Profil eSIM supprimé après mise à jour

Les mises à jour majeures d'iOS (ex. iOS 18 → iOS 19) ou d'Android peuvent dans de rares cas supprimer les profils eSIM. C'est un bug connu, documenté par Apple et Google.

**Prévention :**
1. Avant toute mise à jour majeure, **sauvegardez vos QR codes eSIM** (capture d'écran, impression, ou conservation de l'email).
2. Notez les **identifiants d'activation manuelle** (adresse SM-DP+ et code).

**Si le profil a déjà été supprimé :**
1. Contactez votre fournisseur eSIM pour obtenir un nouveau QR code. La plupart le font gratuitement.
2. Pour une eSIM d'opérateur traditionnel (Orange, SFR, etc.), rendez-vous en boutique avec une pièce d'identité.

---

## Section 10 : Transfert eSIM vers un nouveau téléphone

Le transfert d'une eSIM d'un ancien téléphone vers un nouveau peut être problématique.

**iPhone → iPhone (iOS 19) :**
1. Placez les deux iPhone à proximité pendant la configuration du nouveau.
2. L'option « Transférer votre eSIM » apparaît automatiquement.
3. Si elle n'apparaît pas, le transfert n'est pas supporté par votre opérateur — contactez-le.

**Android → Android :**
La procédure varie selon le fabricant. Samsung, Google Pixel et Xiaomi supportent le transfert eSIM via leurs assistants de configuration respectifs.

**Si le transfert échoue :**
- Supprimez l'eSIM de l'ancien téléphone.
- Contactez l'opérateur pour un nouveau QR code.
- Scannez-le sur le nouveau téléphone.

Pour un guide complet, consultez notre **[guide de transfert eSIM entre iPhone et Android](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## Section 11 : Résoudre les conflits double SIM

Utiliser une eSIM + une SIM physique simultanément peut créer des conflits.

### Problème : Les appels arrivent sur la mauvaise ligne

**Solution iPhone :**
1. **Réglages > Données cellulaires > Forfait par défaut**.
2. Sélectionnez la ligne souhaitée pour les appels vocaux.
3. Dans Contacts, vous pouvez aussi définir une ligne préférée par contact.

### Problème : Les données basculent automatiquement

**Solution :** Désactivez « Permettre le basculement des données cellulaires » dans les réglages Données cellulaires.

### Problème : iMessage/FaceTime se désactive

iMessage et FaceTime sont liés à votre numéro de téléphone principal. Si vous changez de ligne par défaut, ils peuvent se désactiver temporairement. Allez dans Réglages > Messages pour les réactiver (ils utiliseront votre identifiant Apple en attendant).

---

## Codes d'erreur eSIM et leur signification

| Code d'erreur | Signification | Solution |
|:---|:---|:---|
| **8.1** | Profil déjà installé sur un autre appareil | Supprimez l'ancien profil ou contactez l'opérateur |
| **8.2** | Mémoire eUICC pleine | Supprimez des profils inutilisés |
| **8.3** | Code d'activation expiré | Demandez un nouveau code à l'opérateur |
| **8.4** | Erreur de communication SM-DP+ | Vérifiez votre connexion Internet, désactivez le VPN |
| **8.5** | Profil corrompu | Redemandez le QR code — le profil est irrécupérable |
| **8.6** | Conflit de profil | Supprimez toute ancienne version du même profil |
| **8.7** | Politique de l'opérateur — non autorisé | Vérifiez le déverrouillage du téléphone |
| **"Forfait non compatible"** | L'opérateur ne supporte pas votre modèle | Vérifiez la liste de compatibilité de l'opérateur |

Ces codes d'erreur sont standardisés par la spécification **GSMA SGP.22** qui régit le provisionnement à distance des eSIM. Tous les opérateurs et fabricants doivent s'y conformer.

---

## Problèmes spécifiques aux opérateurs

### Opérateurs français

| Opérateur | Problème connu | Solution |
|-----------|---------------|----------|
| **Orange** | eSIM parfois non reconnue après restauration iCloud | Réinstaller via l'app Orange et Moi |
| **SFR** | Délai d'activation jusqu'à 4h pour nouvelle eSIM | Attendre ; redémarrer après 4h |
| **Bouygues** | eSIM prépayée non compatible iPhone 11 et antérieurs | Vérifier la compatibilité avant achat |
| **Free** | QR code unique — si perdu, obligation de passer en boutique | Conserver précieusement le QR code |

### Fournisseurs eSIM de voyage

| Fournisseur | Problème connu | Solution |
|------------|---------------|----------|
| **Airalo** | Lenteur en heures de pointe aux USA (T-Mobile) | Basculer manuellement sur AT&T si disponible |
| **Holafly** | APN non fourni automatiquement sur Android | Configurer l'APN `holafly` manuellement |
| **Nomad** | Activation impossible si Wi-Fi instable | Utiliser les données cellulaires de la SIM principale |
| **Ubigi** | Profil parfois supprimé après mise à jour Android | Réinstaller depuis l'app Ubigi |

---

## 16 scénarios réels de dépannage

Ces scénarios sont basés sur des retours d'utilisateurs réels compilés depuis les forums, les réseaux sociaux et les tickets de support.

### 1. Atterrissage à New York, eSIM installée mais « Aucun service »

**Situation :** Vous avez installé votre eSIM USA à Paris avant le départ. À l'atterrissage à JFK, l'eSIM affiche « Aucun service » alors qu'elle était bien configurée.

**Diagnostic probable :** L'itinérance des données n'est pas activée sur l'eSIM.

**Solution :** Activez l'itinérance des données pour la ligne eSIM, puis passez en mode avion 30 secondes.

### 2. QR code scanné mais installation bloquée à 90 %

**Situation :** Le scan du QR code fonctionne, l'installation commence, mais reste bloquée indéfiniment sur « Activation en cours... ».

**Diagnostic probable :** Connexion au serveur SM-DP+ interrompue (Wi-Fi instable, VPN, pare-feu).

**Solution :** Désactivez le VPN. Si vous utilisez un Wi-Fi public, passez en 4G sur votre ligne principale. Réessayez.

### 3. eSIM fonctionnait parfaitement, soudainement plus de données

**Situation :** L'eSIM a fonctionné 5 jours sans problème, puis soudainement plus aucune donnée ne passe, bien que le signal soit affiché.

**Diagnostic probable :** Forfait épuisé ou limitation de débit.

**Solution :** Vérifiez votre consommation. Si le forfait est épuisé, achetez un rechargement.

### 4. L'eSIM fonctionne mais certains sites sont inaccessibles

**Situation :** Google et WhatsApp fonctionnent, mais certains sites ou services ne se chargent pas.

**Diagnostic probable :** Problème de DNS ou de routage.

**Solution :** Changez les DNS. Sur iPhone : Réglages > Wi-Fi > (i) > Configurer DNS > Manuel. Ajoutez `1.1.1.1` et `8.8.8.8`.

### 5. Double SIM : la SIM physique consomme les données

**Situation :** Vous avez configuré l'eSIM pour les données, mais votre facture affiche des frais de roaming sur la SIM physique.

**Diagnostic probable :** L'option « Permettre le basculement des données » est activée.

**Solution :** Désactivez cette option ET désactivez l'itinérance des données sur votre SIM physique.

### 6. eSIM installée, « E » ou « 3G » seulement

**Situation :** La connexion est établie mais uniquement en Edge ou 3G, pas en 4G/5G.

**Diagnostic probable :** Le réseau partenaire ne supporte pas la 4G à votre emplacement OU votre forfait est bridé.

**Solution :** Changez manuellement de réseau partenaire (Section 4, Étape 2) ou activez la 4G/5G dans Réglages > Données cellulaires > [eSIM] > Voix et données.

### 7. eSIM USA fonctionne à New York, pas à San Francisco

**Situation :** Tout fonctionnait à NYC. Après un vol vers SFO, plus rien.

**Diagnostic probable :** Changement de réseau nécessaire. Votre eSIM était verrouillée sur un réseau de la côte Est.

**Solution :** Activez le mode avion 30 secondes, ou forcez une recherche manuelle de réseau.

### 8. Appels Wi-Fi impossibles avec l'eSIM

**Situation :** Vous voulez recevoir des appels sur votre numéro français via les données de l'eSIM (Wi-Fi Calling).

**Diagnostic probable :** Le Wi-Fi Calling nécessite une configuration spécifique et n'est pas supporté par tous les opérateurs.

**Solution :** Vérifiez que le Wi-Fi Calling est activé et que votre opérateur français le supporte à l'étranger. Sur iPhone : Réglages > Téléphone > Appels Wi-Fi.

### 9. eSIM fonctionne sur iPhone mais pas de partage de connexion

**Situation :** Les données fonctionnent, mais l'option « Partage de connexion » est absente ou grisée.

**Diagnostic probable :** L'APN n'a pas la configuration pour le hotspot, ou le forfait eSIM ne supporte pas le partage de connexion.

**Solution :** Vérifiez les conditions du forfait. Si le partage est inclus, configurez l'APN pour le hotspot : Réglages > Données cellulaires > [eSIM] > Réseau de données > renseignez « Partage de connexion ».

### 10. Message « Carte SIM non provisionnée »

**Situation :** Après installation, le téléphone affiche « Carte SIM non provisionnée » ou l'équivalent.

**Diagnostic probable :** Le profil eSIM n'a pas été complètement téléchargé ou activé côté opérateur.

**Solution :** Redémarrez. Si le problème persiste après 30 minutes, supprimez le profil et réinstallez-le avec un nouveau QR code.

### 11. eSIM bloquée après réinitialisation d'usine

**Situation :** Vous avez réinitialisé votre téléphone et l'eSIM a disparu.

**Diagnostic probable :** Sur iPhone, la réinitialisation vous demande si vous souhaitez conserver les eSIM. Si vous répondez « Supprimer », elles sont effacées définitivement.

**Solution :** Contactez tous vos opérateurs eSIM pour obtenir de nouveaux QR codes.

### 12. Deux eSIM de voyage — une seule fonctionne

**Situation :** Vous avez installé une eSIM Europe et une eSIM Maroc, mais une seule est active.

**Diagnostic probable :** Selon votre modèle de téléphone, seul un nombre limité d'eSIM peut être actif simultanément.

**Solution :** Activez/désactivez manuellement la ligne souhaitée. Sur iPhone : Réglages > Données cellulaires > activez/désactivez chaque ligne.

### 13. eSIM reçue par email ne contient pas de QR code

**Situation :** L'email de confirmation ne contient qu'un long code, pas de QR code à scanner.

**Diagnostic probable :** L'image du QR code est bloquée par votre client email (fréquent avec Gmail et Outlook en mode « sécurité renforcée »).

**Solution :** Affichez l'email en mode « Afficher les images » ou utilisez l'option « Saisir manuellement » avec le code fourni.

### 14. Connexion 5G affichée mais débit 4G

**Situation :** L'icône 5G est affichée mais le débit est identique à la 4G.

**Diagnostic probable :** Vous êtes connecté en 5G NSA (Non-Standalone), qui utilise un cœur de réseau 4G.

**Solution :** C'est normal. La 5G NSA est très répandue et offre des performances similaires à une bonne 4G+. Testez votre débit — si supérieur à 20 Mbps, tout va bien.

### 15. Profil eSIM « verrouillé » après changement de code PIN

**Situation :** Vous avez changé le code PIN de l'eSIM et maintenant elle est bloquée.

**Diagnostic probable :** Trois tentatives de PIN erronées bloquent la carte SIM (physique ou eSIM).

**Solution :** Vous avez besoin du code PUK (Personal Unblocking Key). Contactez votre opérateur eSIM pour l'obtenir.

### 16. Impossible de supprimer un profil eSIM

**Situation :** Vous voulez supprimer une ancienne eSIM mais l'option « Supprimer le forfait » est grisée.

**Diagnostic probable :** Restriction de profil MDM ou bug temporaire.

**Solution :** Redémarrez et réessayez. Si l'option reste grisée, allez dans Réglages > Général > Profils et gestion de l'appareil pour vérifier la présence d'un profil de gestion.

---

## Tableau de diagnostic rapide par symptôme

| Symptôme | Cause la plus probable | Action immédiate |
|----------|----------------------|------------------|
| « Impossible d'ajouter eSIM » | Mémoire eUICC pleine | Supprimer anciens profils |
| QR code ne scanne pas | Problème d'affichage/écran | Saisie manuelle ou impression |
| « Aucun service » | Itinérance désactivée | Activer itinérance + mode avion |
| Barres OK, pas de données | APN manquant/incorrect | Configurer APN |
| Débit très lent | Quota épuisé ou throttling | Vérifier consommation |
| eSIM disparue | Mise à jour iOS/Android | Contacter opérateur, nouveau QR |
| Appels impossibles | Forfait data-only | Utiliser WhatsApp/FaceTime |
| Coupures fréquentes | Sélection réseau auto | Sélection manuelle du réseau |

---

## FAQ — Dépannage eSIM

**Q1 : Puis-je réinstaller la même eSIM plusieurs fois ?**
La plupart des QR codes eSIM sont à usage unique. Une fois installé, le profil est lié à votre téléphone. Si vous devez le réinstaller (changement de téléphone, réinitialisation), vous aurez besoin d'un nouveau QR code de votre opérateur.

**Q2 : Est-ce que le support Apple/Google peut m'aider avec une eSIM de voyage ?**
Apple et Google peuvent diagnostiquer les problèmes matériels et logiciels de votre téléphone, mais pas les problèmes liés au profil eSIM lui-même (code expiré, réseau partenaire, etc.). Pour ces problèmes, contactez directement votre fournisseur eSIM.

**Q3 : Comment tester mon eSIM avant de voyager ?**
Si votre eSIM couvre votre pays de résidence, vous pouvez l'activer brièvement chez vous, vérifier la connexion, puis la désactiver. Attention : certains forfaits démarrent leur période de validité dès l'activation. Lisez les conditions.

**Q4 : L'eSIM se désactive-t-elle automatiquement à la fin du forfait ?**
Non. Le profil eSIM reste installé même après expiration du forfait. Il affichera « Aucun service » mais restera dans vos réglages. Vous devez le supprimer manuellement.

**Q5 : Pourquoi mon eSIM affiche-t-elle un réseau différent de celui attendu ?**
Les eSIM de voyage utilisent des accords de roaming avec plusieurs opérateurs partenaires. Votre téléphone sélectionne automatiquement le réseau avec le meilleur signal. Si vous préférez un réseau spécifique, utilisez la sélection manuelle (Section 4, Étape 2).

**Q6 : La batterie se décharge plus vite avec une eSIM — est-ce normal ?**
L'eSIM elle-même ne consomme pas plus de batterie qu'une SIM physique (différence < 1 %). En revanche, une double SIM active ou un signal faible peuvent augmenter la consommation de 5 à 15 %. Désactivez la ligne inutilisée pour économiser la batterie.

---

Besoin d'aide pour un problème spécifique non couvert ici ? Consultez nos autres guides : **[12 correctifs double eSIM](/faq/dual-esim-not-working-12-fixes-for-iphone/)** pour les problèmes de double ligne, et le **[guide d'activation eSIM](/faq/how-to-activate-an-esim/)** pour une procédure pas à pas.

---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr",
  "mainEntity": [
    {"@type": "Question", "name": "Puis-je réinstaller la même eSIM plusieurs fois ?", "acceptedAnswer": {"@type": "Answer", "text": "La plupart des QR codes eSIM sont à usage unique. Une fois installé, le profil est lié à votre téléphone. Si vous devez le réinstaller (changement de téléphone, réinitialisation), vous aurez besoin d'un nouveau QR code de votre opérateur."}},
    {"@type": "Question", "name": "Est-ce que le support Apple ou Google peut m'aider avec une eSIM de voyage ?", "acceptedAnswer": {"@type": "Answer", "text": "Apple et Google peuvent diagnostiquer les problèmes matériels et logiciels de votre téléphone, mais pas les problèmes liés au profil eSIM lui-même (code expiré, réseau partenaire, etc.). Pour ces problèmes, contactez directement votre fournisseur eSIM."}},
    {"@type": "Question", "name": "Comment tester mon eSIM avant de voyager ?", "acceptedAnswer": {"@type": "Answer", "text": "Si votre eSIM couvre votre pays de résidence, vous pouvez l'activer brièvement chez vous, vérifier la connexion, puis la désactiver. Attention : certains forfaits démarrent leur période de validité dès l'activation. Lisez les conditions."}},
    {"@type": "Question", "name": "L'eSIM se désactive-t-elle automatiquement à la fin du forfait ?", "acceptedAnswer": {"@type": "Answer", "text": "Non. Le profil eSIM reste installé même après expiration du forfait. Il affichera « Aucun service » mais restera dans vos réglages. Vous devez le supprimer manuellement."}},
    {"@type": "Question", "name": "Pourquoi mon eSIM affiche-t-elle un réseau différent de celui attendu ?", "acceptedAnswer": {"@type": "Answer", "text": "Les eSIM de voyage utilisent des accords de roaming avec plusieurs opérateurs partenaires. Votre téléphone sélectionne automatiquement le réseau avec le meilleur signal. Si vous préférez un réseau spécifique, utilisez la sélection manuelle dans les réglages."}},
    {"@type": "Question", "name": "La batterie se décharge plus vite avec une eSIM, est-ce normal ?", "acceptedAnswer": {"@type": "Answer", "text": "L'eSIM elle-même ne consomme pas plus de batterie qu'une SIM physique (différence inférieure à 1 %). En revanche, une double SIM active ou un signal faible peuvent augmenter la consommation de 5 à 15 %. Désactivez la ligne inutilisée pour économiser la batterie."}}
  ]
}
</script>
*Basé sur la documentation technique officielle de la [GSMA SGP.22](https://www.gsma.com/esim/sgp-22-specification/), les pages d'assistance d'[Apple](https://support.apple.com/fr-fr/108072) et les retours d'utilisateurs compilés. Dernière révision : août 2026.*
