---
title: "Transfert eSIM entre Android et iPhone – Guide 2026"
h1_title: "Comment transférer votre eSIM entre Android et iPhone en 60 secondes (2026)"
description: "Transférer une eSIM entre iPhone et Android en 2026 : QR code, saisie SM-DP+, migration opérateur. Guide iOS 26/Android 16 avec liste des opérateurs compatibles et dépannage."
keywords: ["transfert eSIM multiplateforme", "eSIM Android vers iPhone", "eSIM iPhone vers Android", "transfert eSIM 2026", "Telekom eSIM transfert", "activation eSIM échouée", "eSIM pas de service", "erreur de transfert eSIM"]
toc: true
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

breadcrumbs:
  home:
    text: "Accueil"
    url: "/"
  parent:
    text: "Centre d'aide"
    url: "/faq/"
    
# À droite : Configuration des eSIM populaires (6 pays, 1.99 USD)
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

# À droite : Configuration eSIM gratuite (4 pays)
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

# À droite : Configuration des questions populaires (5 questions)
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


> Pendant des années, les transferts eSIM étaient enfermés dans le même écosystème – vous pouviez passer d'iPhone à iPhone, ou entre certains téléphones Android, mais traverser la frontière iOS‑Android nécessitait un voyage chez votre opérateur. **iOS 26 et Android 16 changent complètement cela.** Ce guide vous explique chaque méthode prise en charge, chaque exigence de l'opérateur et chaque étape de dépannage pour effectuer un **transfert eSIM multiplateforme** en toute transparence. Pour une aide générale à l'activation, consultez notre **[Guide complet iPhone 17 eSIM](/faq/2026-ultimate-guide-iphone-17-esim-activation-solutions/)**.


## 📌 Résumé rapide 

| De | Vers | OS minimum | Méthode |
|------|-----|------------|--------|
| iPhone (iOS 26) | Android (16+) | iOS 26.3 / Android 16 | Code QR + appairage manuel |
| Android (16+) | iPhone (iOS 26) | iOS 26 / Android 16 | Scan de code QR (généré par l'iPhone) |
| iPhone (iOS 18–25) | N'importe quel | – | Non directement pris en charge – utilisez le code QR de l'opérateur |
| Android (15 ou plus ancien) | N'importe quel | – | Non pris en charge – mettez à jour l'OS ou contactez l'opérateur |

**Opérateurs pris en charge** (en avril 2026) :  
🇺🇸 AT&T, T‑Mobile, Verizon, FirstNet  
🇨🇦 Bell, Koodo, Lucky Mobile, Telus  
🇫🇷 Orange, SFR  
🇩🇪 Telekom  
🇯🇵 au, UQ  
🇲🇽 AT&T  
🇨🇭 Swisscom  
🇬🇧 EE  

*Si votre opérateur n'est pas répertorié, le transfert échouera. Utilisez plutôt la méthode du code QR fournie par votre opérateur. Pour consulter la [liste complète de compatibilité eSIM](/compatibility/), rendez-vous sur notre page dédiée.*


## 1. Pourquoi cela change tout

Avant iOS 26, déplacer une eSIM d'un téléphone Android vers un iPhone signifiait :
- Appeler votre opérateur (souvent en attente)
- Fournir l'EID et l'IMEI du nouvel appareil
- Attendre des minutes ou des heures pour un nouveau code QR

Maintenant, avec le **transfert eSIM natif multiplateforme**, le processus est entièrement en libre-service et prend moins de 60 secondes.

### Qu'est-ce qui le rend possible ?
- **iOS 26** a introduit la fonction `Transférer depuis Android` dans les Réglages.
- **Android 16** a ajouté un menu réciproque `Appairer avec iPhone ou iPad` sous Services Google.
- Les deux versions d'OS implémentent la **spécification de transfert eSIM consommateur SGP.22 v2.5+** du GSMA, permettant une migration sécurisée de profil peer‑to‑peer.

La [GSMA](https://www.gsma.com/esim/) définit les standards techniques qui permettent cette interopérabilité mondiale entre les opérateurs et les appareils.

> 🔒 Note de sécurité : Le transfert est chiffré de bout en bout et nécessite que les deux appareils soient à proximité avec Bluetooth activé. L'ancienne eSIM est automatiquement désactivée au moment où le nouvel appareil l'active. Si vous devez ensuite corriger des particularités de **double SIM** après le transfert, notre article **[Double eSIM ne fonctionne pas ? 12 solutions pour iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** est une ressource utile.


## 2. Ce dont vous avez besoin avant de commencer

**Pour les deux directions :**
- Les deux appareils doivent être **déverrouillés** (pas de **verrouillage opérateur**). Pour vérifier sur iPhone : `Réglages > Général > Informations` → `Verrouillage opérateur` doit indiquer « Aucune restriction SIM ».
- Les deux appareils ont **le Bluetooth activé**.
- Les deux appareils sont connectés au **Wi-Fi** (ou au moins l'un a une connexion de données cellulaires fonctionnelle).
- L'eSIM que vous souhaitez transférer est **active** sur l'appareil source (pas déjà supprimée).
- Votre opérateur **prend en charge le transfert multiplateforme** (voir liste ci-dessus). Sinon, passez à la section 6 – méthodes de repli.
- Votre **profil eSIM** n'est pas **expiré** – certains profils ont une date de validité limitée.

**Pour Android → iPhone :**
- L'iPhone doit être sur **iOS 26 ou ultérieur**.
- Android doit être sur **Android 16 ou ultérieur** (vérifiez sous `Réglages > À propos du téléphone > Informations logicielles`).

**Pour iPhone → Android :**
- L'iPhone doit être sur **iOS 26.3 ou ultérieur** (la fonction de transfert dirigée vers Android est arrivée dans iOS 26.3).
- Android doit être sur **Android 16 ou ultérieur**.

> 🚨 Si votre appareil est sur un OS plus ancien, l'option de menu n'apparaîtra tout simplement pas. Mettez à jour d'abord.


## 3. Technologie sous-jacente – comment fonctionne le transfert eSIM multiplateforme

Pour comprendre pourquoi le transfert multiplateforme est possible, il est utile de connaître les bases techniques.

### Le rôle du serveur SM‑DP+

Lorsque vous transférez une eSIM, le processus ne se fait pas directement entre les deux téléphones. Voici ce qui se passe :

1. **Le téléphone source** génère une demande de transfert chiffrée.
2. **Le serveur SM‑DP+** (Subscription Manager Data Preparation) de votre opérateur reçoit cette demande.
3. **Le serveur vérifie** que le profil est éligible au transfert (profil actif, opérateur compatible, etc.).
4. **Le serveur génère** un nouveau jeton de sécurité et le transmet au téléphone cible.
5. **Le téléphone cible** télécharge le profil et l'active.
6. **Le serveur désactive** le profil sur le téléphone source.

Ce processus est entièrement automatisé et ne nécessite aucune intervention humaine de la part de l'opérateur – à condition que l'opérateur ait activé cette fonctionnalité.

### Pourquoi les opérateurs français sont-ils concernés ?

En France, les opérateurs ont des approches différentes du transfert eSIM multiplateforme :

| Opérateur | Transfert multiplateforme | Méthode |
|-----------|--------------------------|---------|
| **Orange** | ✅ Pris en charge | Application Orange ou transfert natif iOS/Android |
| **SFR** | ✅ Pris en charge | Application SFR & Moi ou transfert natif |
| **Free** | ⚠️ Non pris en charge | Nécessite un nouveau code QR depuis l'espace client |
| **Bouygues** | ⚠️ Non pris en charge | Nécessite un nouveau code QR depuis l'application |

Pour effectuer un **transfert eSIM Orange**, suivez la méthode A ou B ci-dessous. Pour **Free** et **Bouygues**, utilisez la méthode de repli (section 6).


## 4. Méthode A : Transférer l'eSIM d'Android vers iPhone (iOS 26)

C'est le scénario le plus courant – passer d'un Samsung, Pixel ou autre Android à un nouvel iPhone 17. Pour un **transfert eSIM Android vers iPhone**, suivez ces étapes :

### Étape par étape

**Sur votre Android (appareil source) :**
1. Déverrouillez le téléphone et activez le Bluetooth.
2. Gardez-le à côté de l'iPhone (à moins de 10 cm).

**Sur votre iPhone (cible) :**
1. Allez dans `Réglages` → `Données cellulaires` → `Ajouter une eSIM`.
2. Appuyez sur `Transférer depuis Android`. Un code QR apparaîtra sur l'écran de l'iPhone.
   - *Si vous ne voyez pas cette option, mettez à jour vers iOS 26.*
3. Sur votre téléphone Android, ouvrez l'application **appareil photo**.
4. Scannez le code QR affiché sur l'iPhone.
5. Une notification apparaîtra : « Transfert eSIM détecté ». Appuyez dessus.
6. Sélectionnez le numéro de téléphone (profil eSIM) que vous souhaitez transférer.
7. Appuyez sur `Transférer`. L'Android affichera « Préparation du transfert… »
8. Sur l'iPhone, une fenêtre contextuelle de confirmation apparaît – appuyez sur `Continuer`.
9. Attendez 10 à 30 secondes. L'iPhone indiquera « Activation terminée ».
10. L'Android affichera « eSIM supprimée » – c'est normal.

✅ **Terminé.** Votre numéro est maintenant actif sur l'iPhone. L'eSIM de l'Android est automatiquement désactivée et ne peut plus être utilisée.

### Et si le scan de l'appareil photo ne fonctionne pas ?
Utilisez la **solution de repli d'appairage manuel** :

- Sur l'iPhone, après avoir appuyé sur `Transférer depuis Android`, choisissez `Autres options` sous le code QR.
- L'iPhone affiche un **ID de session** et un **code d'appairage à 6 chiffres**.
- Sur l'Android : `Réglages` → `Services Google` → `Tous les services` → `Appairer avec iPhone ou iPad` → `Transférer eSIM`.
- Saisissez manuellement l'ID de session et le code d'appairage.
- Procédez au transfert.

Pour les utilisateurs de **Samsung**, vérifiez que OneUI est à jour (version 6.1 ou ultérieure) pour que l'option `Appairer avec iPhone ou iPad` apparaisse dans les Services Google.


## 5. Méthode B : Transférer l'eSIM d'iPhone vers Android (iOS 26.3+)

Apple a ajouté cette capacité dans **iOS 26.3** (sorti au début 2026). Le processus est similaire mais initié depuis l'iPhone. Pour un **transfert eSIM iPhone vers Android**, suivez ces étapes :

### Prérequis
- iPhone sur **iOS 26.3 ou ultérieur**
- Android sur **Android 16 ou ultérieur**
- Les deux appareils sur le même Wi‑Fi ou Bluetooth activé

### Étapes

**Sur votre iPhone (source) :**
1. Allez dans `Réglages` → `Données cellulaires`.
2. Appuyez sur l'eSIM que vous souhaitez transférer.
3. Faites défiler vers le bas et appuyez sur `Transférer vers Android` (ou `Transférer eSIM` sous une nouvelle section « Transférer vers Android » – le libellé exact varie selon l'opérateur).
   - *Si vous ne voyez pas cela, soit votre opérateur ne le prend pas en charge, soit vous avez besoin d'iOS 26.3.*
4. Un code QR apparaît. Laissez cet écran allumé.

**Sur votre Android (cible) :**
1. Allez dans `Réglages` → `Services Google` → `Tous les services` → `Appairer avec iPhone ou iPad`.
2. Appuyez sur `Transférer eSIM`.
3. Scannez le code QR affiché sur l'iPhone.
4. Sélectionnez le numéro (si plusieurs eSIM sont présentes sur l'iPhone).
5. Appuyez sur `Transférer`.
6. Sur l'iPhone, double-cliquez sur le bouton latéral pour confirmer le transfert (authentification biométrique requise).
7. Attendez l'activation sur l'Android. L'iPhone affichera « eSIM supprimée » après l'achèvement.

✅ Terminé. Votre numéro réside maintenant sur le téléphone Android.

> ⚠️ **Important** : Une fois le transfert terminé, l'eSIM est **définitivement supprimée** de l'iPhone. Vous ne pouvez pas revenir en arrière sans votre opérateur. Assurez-vous d'avoir une autre ligne active ou le Wi‑Fi avant de transférer.


## 6. Opérateurs pris en charge – détails par pays

| Pays | Opérateurs confirmés | Remarques |
|------|----------------------|-----------|
| États-Unis | AT&T, FirstNet, T‑Mobile, Verizon | Tous pris en charge en 2026 |
| Canada | Bell, Koodo, Lucky Mobile, Telus | |
| France | **Orange, SFR** | Free et Bouygues : non pris en charge |
| Allemagne | Deutsche Telekom (Telekom) | Premier opérateur européen à proposer la fonction |
| Japon | au, UQ (UQ Mobile) | |
| Mexique | AT&T | |
| Suisse | Swisscom | |
| Royaume-Uni | EE | |

**Non pris en charge (en avril 2026) :**
- Vodafone (tous pays) – ils utilisent un système de transfert propriétaire
- Three (Royaume-Uni et autres marchés)
- Google Fi (nécessite la réémission d'un code QR)
- La plupart des eSIM prépayées / MVNO (ex : Airalo, Holafly, Nomad) – celles-ci sont données uniquement et ne peuvent pas être transférées

👉 **Comment vérifier si votre opérateur le prend en charge sur iPhone ?**  
Essayez les étapes des sections 4 ou 5. Si l'option « Transférer depuis Android » ou « Transférer vers Android » est absente, votre opérateur ne le prend pas en charge.

Pour une **Orange eSIM transfert**, la fonction est disponible depuis iOS 26. Pour une **SFR eSIM transfert**, elle est également prise en charge. La **Telekom eSIM transfert** a été l'une des premières en Europe.


## 7. Méthodes de repli (quand le transfert multiplateforme n'est pas pris en charge)

Si votre opérateur n'est pas sur la liste, ou si vous voyez une **erreur de transfert eSIM**, utilisez l'une de ces alternatives :

### Option 1 : Code QR émis par l'opérateur (fonctionne toujours)
1. Appelez ou discutez avec votre opérateur.
2. Dites-lui : « Je passe d'Android à iPhone (ou vice versa). Veuillez réémettre mon eSIM sous forme de nouveau code QR. »
3. Ils vous enverront par e-mail un code QR ou un lien d'activation.
4. Sur le nouvel appareil, allez dans `Réglages` → `Données cellulaires` → `Ajouter une eSIM` → `Utiliser un code QR` et scannez.
5. L'ancien appareil cessera de fonctionner après l'activation du nouveau.

**Conseil** : Certains opérateurs facturent des frais minimes (par exemple 2 à 5 USD) pour la réémission d'une eSIM.

### Option 2 : Transfert via l'application de l'opérateur
- **Orange France** : Application Orange → « Mon espace eSIM » → « Transférer vers un nouvel appareil ».
- **SFR France** : Application SFR & Moi → « Gérer ma SIM » → « Transférer l'eSIM ».
- **T‑Mobile (US)** : Application T‑Mobile → « Gérer eSIM » → « Transférer vers un nouvel appareil ».
- **Verizon** : Application « My Verizon » → « Activer ou changer d'appareil ».
- **EE UK** : Application EE → « Forfait » → « Transfert eSIM ».

### Option 3 : Saisie manuelle SM‑DP+ (avancé)
Si votre opérateur vous donne un **code d'activation** et une **adresse SM‑DP+**, vous pouvez ajouter manuellement l'eSIM sur le nouvel appareil :
1. `Réglages` → `Données cellulaires` → `Ajouter une eSIM` → `Saisir les détails manuellement`.
2. Collez l'adresse SM‑DP+ et le code d'activation.
3. Appuyez sur `Suivant`. Cela fonctionne à la fois sur iPhone et Android.


## 8. Dépannage : Pourquoi mon transfert a-t-il échoué ?

D'après des cas d'utilisateurs réels et la documentation interne d'Apple, voici les raisons d'échec les plus courantes et leurs correctifs pour un **dépannage eSIM** efficace :

| Erreur / Symptôme | Cause la plus probable | Correction |
|-------------------|----------------------|------------|
| « Transfert non disponible – opérateur non pris en charge » | Votre opérateur ne prend pas en charge le transfert multiplateforme. | Utilisez les méthodes de repli (section 7). |
| Le code QR scanne mais puis indique « session expirée » | Vous avez pris trop de temps (>3 minutes) après avoir généré le QR. | Répétez le processus et scannez immédiatement. |
| Android indique « Appairage échoué » | Autorisations Bluetooth ou réseau local bloquées. | Sur iPhone : `Réglages > Confidentialité et sécurité > Réseau local` – assurez-vous que `Réglages` est activé. |
| Le transfert commence mais s'arrête à 50 % | Signal Wi-Fi ou cellulaire faible. | Rapprochez les deux téléphones du routeur. Désactivez le VPN. |
| **« eSIM liée à un autre appareil »** | Le profil n'a pas été correctement libéré de l'ancien appareil. | Supprimez manuellement l'eSIM sur l'ancien appareil. Si cela échoue, contactez l'opérateur. Consultez notre **[Guide de dépannage approfondi eSIM (16 cas réels)](/faq/esim-deep-troubleshooting-guide-2026/)**. |
| L'iPhone demande un **code de confirmation eSIM** | Le profil a un code de confirmation obligatoire (rare). | Cherchez le code dans l'e-mail de l'opérateur (souvent 4 à 8 chiffres). |
| **Profil eSIM expiré** | Le profil a une date de validité limitée. | Contactez votre opérateur pour un nouveau code QR. |
| **eSIM pas de service** après transfert | APN non configuré. | Configurez manuellement les APN (voir tableau ci-dessous). |

### Configuration APN manuelle

Si après le transfert vous rencontrez une **eSIM pas de service**, configurez manuellement les APN :

| Opérateur | APN | Nom d'utilisateur | Mot de passe |
|-----------|-----|-------------------|--------------|
| **Orange** | orange.fr | (vide) | (vide) |
| **SFR** | sl2sfr | (vide) | (vide) |
| **Free** | free | (vide) | (vide) |
| **Bouygues** | ebouygtel.com | (vide) | (vide) |
| **T-Mobile (US)** | fast.t-mobile.com | (vide) | (vide) |
| **AT&T (US)** | nxgen | (vide) | (vide) |
| **Verizon (US)** | vzwinternet | (vide) | (vide) |
| **Telekom (DE)** | internet.telekom | (vide) | (vide) |

### Toujours bloqué ?
Rassemblez ces informations avant d'appeler le support :
- IMEI et EID de l'appareil source
- IMEI et EID de l'appareil cible
- Le message d'erreur exact (capture d'écran)


## 9. Qu'arrive-t-il à l'ancienne eSIM après le transfert ?

**Elle est immédiatement désactivée.**  

L'ancien appareil affichera « No Service » pour cette ligne. Le profil eSIM reste visible sur l'ancien appareil pendant 24 à 48 heures (en tant qu'entrée « fantôme »). Vous pouvez le supprimer manuellement :  
`Réglages > Données cellulaires > appuyez sur l'ancienne eSIM > Supprimer l'eSIM`.

> 💰 **Facturation** : Votre opérateur continuera de vous facturer le forfait. Le transfert n'annule pas le forfait – il déplace simplement la SIM. Pour annuler, vous devez contacter l'opérateur séparément.


## 10. Meilleures pratiques pour éviter les maux de tête du transfert

✅ **Avant de transférer :**
- Vérifiez la prise en charge par l'opérateur (essayez le menu – s'il est là, c'est pris en charge).
- Mettez à jour les deux téléphones vers la dernière version de l'OS (iOS 26 / Android 16).
- Chargez les deux téléphones au-dessus de 30 %.
- Désactivez temporairement VPN et bloqueurs de publicité.
- Vérifiez que votre **profil eSIM** n'est pas **expiré**.

✅ **Pendant le transfert :**
- Gardez les téléphones à moins de 10 cm l'un de l'autre.
- Ne changez pas d'application et ne verrouillez pas l'écran.
- Ne désactivez pas le Bluetooth ou le Wi-Fi.

✅ **Après le transfert :**
- Testez les appels et les données sur le nouvel appareil.
- Supprimez l'ancienne eSIM de l'appareil source.
- Gardez le Wi-Fi de l'ancien appareil allumé pendant au moins une heure.


## 11. Transfert eSIM et voyages – ce qu'il faut savoir

Si vous voyagez à l'étranger et souhaitez transférer votre eSIM, voici quelques points importants :

### Transférer une eSIM en voyage
- Le transfert multiplateforme fonctionne **dans le monde entier** tant que votre opérateur le prend en charge.
- Assurez-vous d'avoir une connexion Wi-Fi stable (hôtel, café) avant de commencer.
- Si le transfert échoue, la méthode de repli du code QR est votre meilleure option.

### Opérateurs français et voyages
- **Orange** et **SFR** permettent le transfert multiplateforme où que vous soyez.
- **Free** et **Bouygues** nécessitent une réémission de code QR – faites-le avant de partir.
- Pour les **eSIM voyage**, rappelez-vous qu'elles ne sont généralement **pas transférables** – achetez un nouveau forfait sur votre nouvel appareil.

### Conseils pour les globetrotters
- Conservez toujours une copie de sauvegarde de vos codes QR eSIM.
- Si vous changez de téléphone en cours de voyage, privilégiez le transfert natif plutôt que le code QR.

Pour plus d'informations sur l'utilisation des eSIM en voyage, consultez notre **[guide complet eSIM voyage](/faq/what-is-esim/)**.


## 12. FAQ – Transfert eSIM multiplateforme

**Q1 : Puis-je transférer une eSIM données uniquement (comme une eSIM de voyage) ?**  
R : Non. La plupart des eSIM de voyage (Airalo, Holafly, forfaits données Roami, etc.) ne prennent pas en charge le transfert multiplateforme. Elles sont conçues pour être installées une fois par appareil.

**Q2 : Le transfert fonctionne-t-il entre un iPhone 11 et un Samsung S24 ?**  
R : Oui – tant que les deux répondent aux exigences de l'OS. L'iPhone 11 prend en charge iOS 26 (il fonctionne jusqu'à iOS 26). Le Samsung S24 prend en charge Android 16. Seule la version de l'OS compte.

**Q3 : J'ai essayé les étapes mais mon Android n'a pas « Appairer avec iPhone ou iPad ». Pourquoi ?**  
R : Ce menu fait partie des Services Google et n'apparaît que sur Android 16+ avec Google Play Services à jour. Si c'est 15 ou plus ancien, mettez à jour votre téléphone.

**Q4 : Mon WhatsApp / iMessage / codes 2FA fonctionneront-ils toujours après le transfert ?**  
R : WhatsApp utilise votre numéro de téléphone – il détectera le changement de SIM et pourra demander une revérification. iMessage se réactive en une minute. Le numéro n'a pas changé, donc les SMS 2FA fonctionneront normalement.

**Q5 : Puis-je transférer la même eSIM plusieurs fois ?**  
R : Oui, mais chaque transfert nécessite le même processus. Certains opérateurs limitent les transferts à 3–5 fois par an.

**Q6 : Le transfert eSIM est-il sécurisé ?**
Oui. Le protocole de transfert utilise le Bluetooth pour l'appairage initial et le Wi-Fi Direct pour le transfert des données. La connexion est chiffrée de bout en bout. Le profil eSIM est protégé par la puce **eUICC** et le standard **GSMA SGP.22**. Le processus exige une confirmation physique sur l'ancien appareil — personne ne peut transférer votre eSIM à distance sans votre consentement.

**Q7 : Comment transférer une eSIM Orange, SFR, Free ou Bouygues vers un nouvel iPhone ?**
Pour Orange et SFR : utilisez le transfert natif (iOS > Ajouter eSIM > Transférer depuis un iPhone à proximité). Pour Free et Bouygues : le transfert natif n'est généralement pas supporté — connectez-vous à votre espace client, demandez un nouveau QR code eSIM, puis scannez-le sur le nouvel iPhone. Contactez le service client si l'option n'est pas disponible en ligne.

**Q8 : Comment transférer une eSIM de voyage (Airalo, Holafly, Nomad, Roami) ?**
Les eSIM de voyage ne sont généralement PAS transférables. Elles sont conçues pour un usage unique sur un seul appareil. Solutions :
- Avant de changer de téléphone, achetez le forfait eSIM sur le nouvel appareil.
- Si vous avez déjà changé de téléphone, contactez le support du fournisseur — certains (Roami) peuvent réémettre le forfait sur le nouvel EID.
- Pour les voyageurs fréquents, privilégiez les fournisseurs qui proposent la gestion multi-appareils.

**Q6 : Qu'en est-il des configurations double SIM eSIM + carte SIM physique ?**  
R : Le transfert ne déplace que l'eSIM. La carte SIM physique reste dans l'appareil source. Consultez notre article **[Double eSIM ne fonctionne pas ? 12 solutions pour iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** pour optimiser la double SIM.

**Q7 : Que faire en cas de **profil eSIM expiré** lors du transfert ?**  
R : Contactez votre opérateur pour obtenir un nouveau code QR – la réémission est généralement gratuite.

**Q8 : Pourquoi mon **verrouillage opérateur** m'empêche-t-il de transférer ?**  
R : Si votre téléphone est verrouillé, vous ne pouvez transférer une eSIM que vers un appareil du même opérateur. Contactez votre opérateur (Orange, SFR, Free, Bouygues) pour déverrouiller l'appareil avant le transfert.

**Q9 : Puis-je transférer une eSIM Orange vers un téléphone non Orange ?**  
R : Oui, si votre téléphone est déverrouillé et que votre forfait Orange le permet. L'**Orange eSIM transfert** est pris en charge via l'application Orange ou le transfert natif.

**Q10 : Le transfert fonctionne-t-il avec une eSIM Free ?**  
R : Non – Free ne prend pas en charge le transfert multiplateforme. Utilisez la méthode de repli du code QR depuis l'espace client Free.


## 13. Dernier point à retenir

La possibilité de transférer des eSIM entre iPhone et Android sans intervention de l'opérateur est une **innovation majeure de 2026**. Elle supprime le dernier point de friction majeur pour changer d'écosystème. Tant que votre opérateur figure sur la liste prise en charge (Orange ou SFR en France) et que les deux téléphones sont à jour, vous pouvez déplacer votre numéro en moins d'une minute.

**Rappelez-vous** : Si votre opérateur n'est pas pris en charge, la solution de repli du code QR fonctionne toujours. Et pour les eSIM de voyage, traitez-les comme à usage unique.

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr",
  "mainEntity": [
    {"@type": "Question", "name": "Puis-je transférer une eSIM données uniquement (comme une eSIM de voyage) ?", "acceptedAnswer": {"@type": "Answer", "text": "Non. La plupart des eSIM de voyage (Airalo, Holafly, Roami, etc.) ne prennent pas en charge le transfert multiplateforme. Elles sont conçues pour être installées une fois par appareil."}},
    {"@type": "Question", "name": "Le transfert fonctionne-t-il entre un iPhone 11 et un Samsung S24 ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, tant que les deux répondent aux exigences de l'OS. L'iPhone 11 prend en charge iOS 26 et le Samsung S24 prend en charge Android 16. Seule la version de l'OS compte."}},
    {"@type": "Question", "name": "Mon Android n'a pas l'option « Appairer avec iPhone ou iPad ». Pourquoi ?", "acceptedAnswer": {"@type": "Answer", "text": "Ce menu fait partie des Services Google et n'apparaît que sur Android 16+ avec Google Play Services à jour. Si votre version est antérieure, mettez à jour votre téléphone."}},
    {"@type": "Question", "name": "Mon WhatsApp / iMessage / codes 2FA fonctionneront-ils après le transfert ?", "acceptedAnswer": {"@type": "Answer", "text": "WhatsApp utilise votre numéro de téléphone — il détectera le changement et pourra demander une revérification. iMessage se réactive en une minute. Le numéro n'a pas changé, donc les SMS 2FA fonctionneront normalement."}},
    {"@type": "Question", "name": "Puis-je transférer la même eSIM plusieurs fois ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, mais chaque transfert nécessite le même processus. Certains opérateurs limitent les transferts à 3-5 fois par an."}},
    {"@type": "Question", "name": "Le transfert eSIM est-il sécurisé ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. Le protocole utilise le Bluetooth pour l'appairage et le Wi-Fi Direct pour le transfert des données. La connexion est chiffrée de bout en bout via le standard GSMA SGP.22. Une confirmation physique sur l'ancien appareil est exigée."}},
    {"@type": "Question", "name": "Comment transférer une eSIM Orange, SFR, Free ou Bouygues vers un nouvel iPhone ?", "acceptedAnswer": {"@type": "Answer", "text": "Pour Orange et SFR, utilisez le transfert natif (iOS > Ajouter eSIM > Transférer depuis un iPhone à proximité). Pour Free et Bouygues, le transfert natif n'est pas supporté — demandez un nouveau QR code depuis votre espace client."}},
    {"@type": "Question", "name": "Comment transférer une eSIM de voyage (Airalo, Holafly, Nomad, Roami) ?", "acceptedAnswer": {"@type": "Answer", "text": "Les eSIM de voyage ne sont généralement pas transférables, conçues pour un usage unique. Avant de changer de téléphone, achetez le forfait sur le nouvel appareil. Certains fournisseurs peuvent réémettre le forfait sur le nouvel EID."}},
    {"@type": "Question", "name": "Qu'en est-il des configurations double SIM eSIM + carte SIM physique ?", "acceptedAnswer": {"@type": "Answer", "text": "Le transfert ne déplace que l'eSIM. La carte SIM physique reste dans l'appareil source et doit être déplacée manuellement si nécessaire."}},
    {"@type": "Question", "name": "Puis-je transférer une eSIM Orange vers un téléphone non Orange ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, si votre téléphone est déverrouillé et que votre forfait Orange le permet. Le transfert eSIM Orange est pris en charge via l'application Orange ou le transfert natif iOS/Android."}}
  ]
}
</script>

*Informations basées sur la documentation officielle d'Apple iOS 26 et d'Android 16, tests d'opérateurs en avril 2026. Les fonctionnalités et la prise en charge par les opérateurs sont sujettes à changement.*