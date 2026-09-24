---
title: "Guide de dépannage approfondi eSIM 2026"
h1_title: "Le guide complet du dépannage eSIM en 2026 – 18 solutions concrètes"
description: "Corrigez les échecs d'activation eSIM, les erreurs de transfert, l'absence de service et les problèmes de scan QR sur iPhone et Android avec ce guide de dépannage 2026."
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["dépannage eSIM", "échec activation eSIM", "eSIM pas de service", "erreur transfert eSIM", "transfert inter-plateformes eSIM", "iOS 18 eSIM", "paramètres APN eSIM", "code de confirmation eSIM", "verrouillage opérateur eSIM", "eSIM bloqué sur activation"]
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


> **Note de l'éditeur :** Roami gère le service d'assistance derrière cette référence. Lorsqu'un voyageur rencontre une erreur spécifique à l'écran — « Activation failed », « No Service », « Cellular Plan Cannot Be Added », erreur de restauration 4013/4014 — c'est la page que notre propre équipe ouvre pour la décoder. Chaque entrée ci-dessous associe un message d'erreur exact à sa cause réelle et à une solution concrète, testée sur iOS 18 et Android 14/15 en septembre 2026.

> **Mauvaise page ?** Si votre question est « mon téléphone prend-il en charge l'eSIM » — modèle Chine/Hong Kong, verrouillage opérateur, EID manquant — c'est une question matérielle, pas une erreur. Rendez-vous sur notre [guide matériel eSIM et codes d'erreur](/faq/esim-activation-errors-troubleshooting-guide/). Cette page suppose que votre téléphone peut utiliser l'eSIM et que le problème est un message d'erreur spécifique.

## Flux de diagnostic rapide eSIM

Utilisez cette carte de décision pour accéder directement à la solution du message exact sur votre écran.

| Ce que vous voyez / rencontrez | Ce qui est probablement cassé | Urgence | Aller à la solution |
|---------------------------|----------------------|---------|-------------|
| **Le code QR ne scanne pas / dit invalide** | Code QR expiré ou endommagé | Faible | [Section 3](#esim-qr-code-invalid-or-expired) |
| **« Unable to Activate » ou « Activation failed »** | Délai d'attente réseau ou erreur serveur | Moyenne | [Section 1](#esim-activation-failed-or-unable-to-activate) |
| **« No Service » après installation** | Itinérance des données désactivée ou APN manquant | Élevée | [Section 2](#esim-no-service-after-installation) |
| **Barres de signal complètes mais pas d'internet** | APN mal configuré | Élevée | [Section 8](#esim-no-data-connection-after-activation) |
| **« Cellular Plan Cannot Be Added »** | Trop d'eSIM stockés ou restriction matérielle | Moyenne | [Section 5](#esim-cellular-plan-cannot-be-added) |
| **« eSIM already in use »** | Profil toujours lié à l'ancien appareil | Élevée | [Section 4](#esim-already-in-use-or-bound-to-another-device) |
| **Popup de code de confirmation** | Le profil nécessite un code PIN | Faible | [Section 6](#esim-confirmation-code-required) |
| **« SIM not supported »** | Téléphone verrouillé opérateur | Élevée | [Section 7](#esim-sim-not-supported-on-a-carrier-locked-device) |
| **Bloqué sur « Activating » pendant >10 minutes** | Téléchargement bloqué | Moyenne | [Section 9](#esim-stuck-on-activating) |
| **Dual SIM : une ligne n'a pas de signal** | Conflit de routage | Moyenne | [Section 10](#dual-esim-with-one-line-showing-no-service) |
| **eSIM transféré vers un nouveau téléphone, échoue** | Transfert inter-plateformes non pris en charge | Élevée | [Section 11](#esim-transfer-failed) |
| **Erreur de restauration iPhone 4013/4014** | Problème matériel/firmware, pas eSIM | Élevée | [Section 12](#iphone-esim-restore-error-4013-or-4014) |
| **« Profile expired »** | Code QR expiré | Faible | [Section 13](#esim-profile-expired) |
| **Itinérance ne fonctionne pas à l'étranger** | Bascule d'itinérance des données désactivée | Élevée | [Section 14](#esim-data-roaming-not-working) |
| **eSIM supprimé accidentellement** | Erreur utilisateur | Élevée | [Section 15](#esim-deleted-by-mistake) |
| **MDM bloque les modifications eSIM** | Politique d'appareil professionnel | Moyenne | [Section 16](#mdm-or-enterprise-restrictions-block-esim) |
| **eSIM a disparu après redémarrage** | Bug logiciel iOS/Android | Élevée | [Section 17](#esim-disappeared-after-restart) |
| **Wi-Fi Calling fonctionne mais pas les données eSIM** | Conflit de routage entre Wi-Fi et cellulaire | Moyenne | [Section 18](#wi-fi-calling-works-but-esim-data-does-not) |
| **SIM physique insérée, eSIM ne fonctionne pas** | Conflit de tiroir SIM | Élevée | [Section 19](#esim-vs-physical-sim-conflict) |
| **eSIM Apple Watch ne se connecte pas** | Problème d'appairage ou d'opérateur | Moyenne | [Section 20](#apple-watch-esim-not-working) |


## Tableau de référence rapide

| Symptôme | Cause la plus probable | Solution |
|---------|-------------------|-----|
| « Unable to Activate » / « Activation failed » | Wi-Fi instable ou erreur serveur opérateur | Réseau stable + réessayer, puis réinstaller (Section 1) |
| « No Service » après installation | Itinérance des données désactivée / APN manquant | Activer l'itinérance, vérifier l'APN (Section 2) |
| Code QR « Invalid » / « Expired » | Code QR expiré ou déjà utilisé | Demander un nouveau code QR (Section 3) |
| « eSIM already in use » | Profil non libéré de l'ancien appareil | Supprimer de l'ancien appareil ou libération par l'opérateur (Section 4) |
| « Cellular Plan Cannot Be Added » | Trop d'eSIM stockés | Supprimer les eSIM inutilisés (Section 5) |
| Code de confirmation requis | Le profil a un code obligatoire | Trouver le code à 4–8 chiffres dans l'e-mail de l'opérateur (Section 6) |
| « SIM not supported » | Appareil verrouillé opérateur | Débloquer l'appareil ou contacter l'opérateur (Section 7) |
| Pas de données après activation | APN non configuré | Saisir l'APN manuellement (Section 8) |
| Bloqué sur « Activating » | Téléchargement du profil bloqué | Basculer le mode Avion, réinstaller (Section 9) |
| Une ligne dual-SIM « No Service » | Conflit de routage appels/données | Vérifier le routage des lignes et les bascules (Section 10) |
| Échec du transfert eSIM | L'opérateur ne prend pas en charge le transfert | Utiliser le code QR de l'opérateur en secours (Section 11) |
| Erreur de restauration 4013 / 4014 | Matériel/firmware pendant la restauration | Câble différent, mettre à jour l'ordinateur (Section 12) |
| « Profile expired » | Code QR limité dans le temps | Demander un nouveau code QR (Section 13) |
| Itinérance des données ne fonctionne pas | Itinérance désactivée pour la ligne eSIM | Activer l'itinérance des données (Section 14) |
| eSIM supprimé par erreur | Profil supprimé localement | Contacter l'opérateur / acheter un nouveau forfait (Section 15) |
| MDM bloque les modifications eSIM | Restriction d'entreprise | Contacter votre administrateur IT (Section 16) |
| eSIM a disparu après redémarrage | Bug logiciel iOS/Android | Vérifier les paramètres, rajouter le profil (Section 17) |
| Wi-Fi Calling fonctionne mais pas les données | Conflit de routage | Désactiver temporairement Wi-Fi Calling (Section 18) |
| SIM physique insérée, eSIM cesse de fonctionner | Conflit tiroir/lecteur | Retirer la SIM physique, redémarrer (Section 19) |
| eSIM Apple Watch ne se connecte pas | Problème d'appairage ou d'opérateur | Ré-appairer la montre, contacter l'opérateur (Section 20) |


## Échec d'activation eSIM ou impossible d'activer

**Cause :** Presque toujours une connexion Wi-Fi instable ou une erreur temporaire du serveur de l'opérateur (SM-DP+), pas un problème avec votre téléphone. Le SM-DP+ (Subscription Manager - Data Preparation Plus) est le serveur sécurisé qui livre votre profil eSIM à votre appareil — s'il est injoignable, l'activation échoue.

**Solution :**
1. Passez à une connexion Wi-Fi ou de données cellulaires stable.
2. Activez et désactivez le mode Avion pour rafraîchir la bande de base.
3. Si l'erreur se répète, supprimez l'eSIM en attente sous `Réglages > Cellulaire`, redémarrez et scannez à nouveau le code QR.

**Spécifique iOS 18 :** Sur iOS 18, le message peut indiquer « Unable to Complete Activation » avec un bouton Réessayer. Appuyez d'abord sur Réessayer — le flux d'activation amélioré d'iOS 18 résout souvent le problème sans réinstallation complète.

---

## eSIM aucun service après installation

**Cause :** Le profil est installé mais le téléphone ne s'est pas enregistré sur un réseau local — généralement parce que l'itinérance des données est désactivée ou l'APN est manquant.

**Solution :**
1. Activez l'**itinérance des données** pour la ligne eSIM.
2. Sous `Réglages > Cellulaire > [votre eSIM] > Sélection du réseau`, désactivez « Automatique », sélectionnez manuellement un opérateur, attendez l'échec, puis revenez à « Automatique » pour forcer le ré-enregistrement.
3. S'il n'y a toujours pas de données, vérifiez l'APN (Section 8).

---

## Code QR eSIM invalide ou expiré

**Cause :** Les codes QR eSIM sont à usage unique et limités dans le temps. Le code a soit déjà été utilisé, soit expiré.

**Solution :** Contactez votre fournisseur eSIM et demandez-lui de réémettre un nouveau code QR, puis scannez-le immédiatement.

**Si vous scannez depuis l'écran de votre téléphone :** Enregistrez d'abord l'image du code QR dans Photos, puis dans Réglages > Cellulaire > Ajouter un eSIM, choisissez « Utiliser le code QR » et appuyez sur « Choisir une photo » pour sélectionner l'image enregistrée. Cela évite le problème « impossible de scanner son propre écran ».

---

## eSIM déjà utilisé ou lié à un autre appareil

**Cause :** Le profil n'a jamais été libéré de l'ancien appareil, donc l'opérateur l'associe encore à ce téléphone.

**Solution :**
1. Sur l'ancien appareil, supprimez l'eSIM sous `Réglages > Cellulaire`.
2. Attendez environ cinq minutes et réessayez sur le nouvel appareil.
3. Si l'ancien appareil est perdu ou cassé, contactez votre opérateur et demandez-lui de libérer de force le profil de son côté.

---

## Impossible d'ajouter le forfait cellulaire eSIM

**Cause :** Le téléphone a atteint sa limite de profils eSIM stockés (généralement 8–10, selon le modèle), ou l'appareil est un modèle de Chine continentale sans matériel eSIM.

**Solution :** Supprimez les eSIM inutilisés sous `Réglages > Cellulaire`, puis ajoutez le nouveau. Si votre appareil a été acheté en Chine continentale, il utilise deux emplacements SIM physiques et ne peut pas ajouter d'eSIM — pour savoir comment identifier un modèle Chine ou Hong Kong et confirmer que votre téléphone a le matériel, voir notre [guide de vérification matérielle et d'erreurs](/faq/esim-activation-errors-troubleshooting-guide/).

---

## Code de confirmation eSIM requis

**Cause :** Certains profils eSIM ont un code de confirmation obligatoire requis avant le téléchargement du profil. C'est un code PIN de 4 à 8 chiffres qui vérifie votre identité.

**Solution :** Recherchez un code à 4–8 chiffres dans l'e-mail que votre opérateur a envoyé avec le code QR. Si vous ne le trouvez pas, contactez l'opérateur.

**Endroits courants pour trouver le code de confirmation :**
- Ligne d'objet de l'e-mail d'activation
- Près du bas de l'e-mail, sous « Détails d'activation »
- Dans l'application de l'opérateur sous « Mes forfaits » > « Détails »

---

## SIM eSIM non pris en charge sur un appareil verrouillé opérateur

**Cause :** Le téléphone est verrouillé sur un autre opérateur et ne peut pas accepter un profil d'un fournisseur différent.

**Solution :** Vérifiez `Réglages > Général > Informations > Verrouillage opérateur`. S'il n'est pas indiqué « Aucune restriction SIM », contactez votre opérateur d'origine pour demander un déblocage. Pour un guide complet des verrouillages opérateur — comment vérifier le statut, les politiques de déblocage des opérateurs américains et comment obtenir le déblocage de l'appareil — voir notre [guide matériel et verrouillage opérateur](/faq/esim-activation-errors-troubleshooting-guide/).

---

## eSIM pas de connexion de données après activation

**Cause :** Le nom du point d'accès (APN) n'a pas été configuré automatiquement, donc le téléphone n'a pas de route vers le réseau de données.

**Solution :**
1. Allez dans `Réglages > Cellulaire > Réseau de données cellulaires`.
2. Saisissez la valeur APN du site web de votre fournisseur eSIM (par exemple, `globaldata` pour Airalo).
3. La plupart des eSIM de voyage configurent automatiquement l'APN, donc confirmez la valeur correcte auprès de votre fournisseur.

**Valeurs APN courantes par fournisseur (si la configuration automatique échoue) :**

| Fournisseur | APN | Nom d'utilisateur | Mot de passe |
|----------|-----|----------|----------|
| Roami | internet | (vide) | (vide) |
| Airalo | globaldata | (vide) | (vide) |
| Holafly | hola | (vide) | (vide) |
| Nomad | nbdata | (vide) | (vide) |
| Ubigi | ubigi | (vide) | (vide) |
| Google Fi | h2g2 | (vide) | (vide) |
| T-Mobile (US) | fast.t-mobile.com | (vide) | (vide) |
| AT&T (US) | nxgen | (vide) | (vide) |
| Verizon (US) | vzwinternet | (vide) | (vide) |
| EE (UK) | everywhere | (vide) | (vide) |
| O2 (UK) | mobile.o2.co.uk | web | web |
| Vodafone (UK) | internet | (vide) | (vide) |
| Three (UK) | three.co.uk | (vide) | (vide) |

---

## eSIM bloqué sur l'activation

**Cause :** Le téléchargement du profil s'est bloqué, souvent en raison d'un signal faible ou d'un serveur d'activation occupé.

**Solution :**
1. Assurez-vous d'être sur un réseau stable.
2. Activez et désactivez le mode Avion.
3. S'il reste bloqué plus de 10 minutes, supprimez l'eSIM et réinstallez-le à partir du code QR.

---

## Dual eSIM avec une ligne affichant « No Service »

**Cause :** Avec deux eSIM actifs, le routage des appels entrants et des données peut entrer en conflit, laissant une ligne sans service. C'est un **problème de signal dual eSIM** courant qui affecte les utilisateurs avec deux lignes actives.

**Solution :**
1. Sous `Réglages > Cellulaire`, confirmez quelle ligne est définie pour les **données cellulaires** et laquelle pour la **ligne vocale par défaut**.
2. Désactivez et réactivez chaque ligne.
3. Pour une solution plus approfondie, consultez notre guide **[Dual eSIM ne fonctionne pas ? 12 correctifs pour iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## Échec du transfert eSIM

**Cause :** Il n'existe pas de transfert eSIM inter-plateformes intégré, et votre opérateur peut ne pas prendre en charge le transfert via application.

**Solution :** Demandez à votre opérateur de réémettre l'eSIM sous forme de nouveau code QR et scannez-le sur le nouvel appareil. Après le transfert, WhatsApp, iMessage et les codes à deux facteurs SMS continuent de fonctionner car votre numéro n'a pas changé. Pour les instructions complètes étape par étape, voir notre **[guide de transfert eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## Erreur de restauration eSIM iPhone 4013 ou 4014

**Cause :** Ces erreurs indiquent un problème matériel ou de firmware lors d'une restauration logicielle, pas un problème eSIM. Elles sont souvent causées par un câble USB défectueux ou un logiciel informatique obsolète.

**Solution :** Essayez un autre câble et port USB, mettez à jour le système d'exploitation de votre ordinateur, puis retentez la restauration. Contactez l'assistance Apple si l'erreur persiste.

---

## Profil eSIM expiré

**Cause :** Le code QR ou le code d'activation eSIM était limité dans le temps et a expiré.

**Solution :** Contactez votre fournisseur eSIM et demandez un nouveau code QR, puis activez-le rapidement.

---

## Itinérance des données eSIM ne fonctionne pas

**Cause :** L'itinérance des données est désactivée pour la ligne eSIM de voyage, donc elle ne peut pas se connecter au réseau local.

**Solution :** Allez dans `Réglages > Cellulaire > [votre eSIM]` et activez l'**itinérance des données**. C'est requis pour que la plupart des eSIM de voyage fonctionnent à l'étranger.

---

## eSIM supprimé par erreur

**Cause :** La suppression d'un eSIM retire le profil du téléphone mais n'annule pas le forfait.

**Solution :**
- Pour les eSIM d'opérateur postpayé, contactez l'opérateur — il peut généralement réémettre le code QR.
- Pour les eSIM de voyage (Roami, Airalo et similaires), la suppression est généralement permanente, donc vous devrez acheter un nouveau forfait.
- Conservez toujours une sauvegarde de votre e-mail d'activation original et du code QR.

---

## MDM ou restrictions d'entreprise bloquent l'eSIM

**Cause :** Sur un appareil géré (professionnel), une politique de gestion des appareils mobiles telle que `AllowESIMModification` peut bloquer l'ajout ou la suppression d'eSIM.

**Solution :** Contactez votre administrateur IT pour activer les modifications eSIM, ou utilisez un appareil non géré.

---

## eSIM a disparu après redémarrage

**Symptôme :** Vous avez redémarré votre téléphone et l'eSIM n'est plus listé sous Réglages > Cellulaire. Il a disparu.

**Cause :** Un bug logiciel sur iOS ou Android peut parfois rendre les profils eSIM masqués ou illisibles après un redémarrage, surtout après une mise à jour du système d'exploitation. Le profil est toujours sur l'appareil, mais le système n'a pas réussi à le monter.

**Solution :**
1. **iPhone :** Allez dans Réglages > Général > Informations et faites défiler jusqu'à « SIM disponible » ou « SIM numérique ». Si l'eSIM apparaît là mais pas dans Cellulaire, redémarrez à nouveau le téléphone.
2. **iPhone :** Si le redémarrage ne fonctionne pas, allez dans Réglages > Cellulaire > Ajouter un eSIM. Parfois le téléphone détecte le profil existant et propose de le rajouter sans nouveau code QR.
3. **Android (Samsung) :** Allez dans Réglages > Connexions > Gestionnaire SIM. L'eSIM peut apparaître comme « Inactif ». Appuyez dessus et activez-le.
4. **Android (Pixel) :** Allez dans Réglages > Réseau et Internet > SIM. Si l'eSIM est manquant, appuyez sur « Ajouter un opérateur » — le téléphone peut détecter le profil existant.
5. Si rien de tout cela ne fonctionne, contactez votre opérateur et demandez un nouveau code QR. L'ancien profil peut être corrompu.

**Prévention :** Avant de redémarrer, assurez-vous que toutes les lignes eSIM sont désactivées, puis redémarrez, puis réactivez-les. Cela réduit le risque que le système perde la trace du profil.

---

## Wi-Fi Calling fonctionne mais pas les données eSIM

**Symptôme :** Vous avez Wi-Fi Calling actif sur votre ligne personnelle, mais votre eSIM de voyage n'a pas de connexion de données. Ou l'eSIM fonctionne en Wi-Fi mais pas en cellulaire.

**Cause :** Un conflit de routage entre Wi-Fi Calling et les données cellulaires. Lorsque Wi-Fi Calling est actif, le téléphone peut prioriser le réseau Wi-Fi pour toutes les communications, y compris les données, et échouer à router correctement les données cellulaires via l'eSIM.

**Solution :**
1. Désactivez temporairement Wi-Fi Calling sur votre ligne personnelle : Réglages > Cellulaire > [ligne personnelle] > Wi-Fi Calling > désactiver.
2. Activez et désactivez le mode Avion pour forcer le téléphone à se ré-enregistrer sur le réseau cellulaire.
3. Testez la connexion de données eSIM. Si elle fonctionne, vous pouvez réactiver Wi-Fi Calling — le routage devrait maintenant être correct.
4. Si le problème réapparaît, vérifiez que votre ligne personnelle a l'**itinérance des données désactivée** et l'eSIM de voyage a l'**itinérance des données activée**.

**Alternative :** Sur iPhone, allez dans Réglages > Cellulaire > Données cellulaires et assurez-vous que l'eSIM de voyage est sélectionné. Puis activez « Autoriser le basculement des données cellulaires » — cela permet au téléphone d'utiliser l'eSIM de voyage pour les données Wi-Fi Calling même si la ligne personnelle est la ligne vocale.

---

## Conflit eSIM vs SIM physique

**Symptôme :** Vous insérez une carte SIM physique dans votre téléphone, et votre eSIM précédemment fonctionnel affiche soudainement « No Service » ou disparaît complètement des Réglages.

**Cause :** C'est un comportement connu sur les appareils verrouillés opérateur. Lorsqu'un iPhone verrouillé détecte une SIM physique d'un autre opérateur, il peut désactiver l'emplacement eSIM pour empêcher une utilisation non autorisée. Sur certains appareils Android, l'insertion d'une SIM physique peut également amener le système à prioriser la SIM physique sur l'eSIM pour toutes les fonctions. Nouveau dans le mélange des deux formats ? La [comparaison eSIM vs SIM physique](/faq/what-is-esim/) explique comment ils coexistent.

**Solution :**
1. Retirez la carte SIM physique du tiroir.
2. Redémarrez votre téléphone.
3. L'eSIM devrait réapparaître dans Réglages > Cellulaire (iPhone) ou Réglages > Connexions > Gestionnaire SIM (Android).
4. Si l'eSIM réapparaît mais affiche toujours « No Service », activez l'itinérance des données pour la ligne eSIM.
5. Si vous avez besoin que la SIM physique et l'eSIM fonctionnent simultanément, contactez votre opérateur pour débloquer votre appareil.

> **Alternative :** Certains utilisateurs rapportent que désactiver puis réactiver la ligne eSIM (sans retirer la SIM physique) résout le conflit. Essayez ceci d'abord avant de retirer la SIM physique.

---

## eSIM Apple Watch ne fonctionne pas

**Symptôme :** Vous avez configuré le cellulaire sur votre Apple Watch, mais elle affiche « No Service » ou « Recherche » — ou le forfait eSIM n'apparaît pas du tout dans l'app Watch.

**Cause :** L'activation eSIM Apple Watch nécessite la prise en charge par l'opérateur du type de forfait spécifique de la montre, et la configuration nécessite que votre iPhone soit à proximité avec une connexion internet stable.

**Solution :** Vérifiez que votre opérateur prend en charge l'eSIM Apple Watch, puis dissociez et réassociez la montre, en gardant votre iPhone à proximité tout au long. Si elle ne s'active toujours pas, contactez votre opérateur avec l'**EID** et l'**IMEI** de la montre pour qu'il puisse la provisionner manuellement. Pour un guide complet — incluant quels modèles d'iPad et d'Apple Watch prennent en charge l'eSIM — voir notre [guide eSIM iPad et Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

---

## Référence des codes d'erreur eSIM

| Code d'erreur | Plateforme | Signification | Solution |
|------------|----------|---------|-----|
| **4013** | iPhone (restauration) | Défaillance matérielle/firmware pendant la restauration | Changer câble, port USB, mettre à jour macOS/iTunes |
| **4014** | iPhone (restauration) | Similaire à 4013 ; généralement un problème de communication USB | Idem ci-dessus |
| **-8** | Android (activation) | Délai d'attente réseau | Attendre et réessayer, ou changer de Wi‑Fi |
| **-100** | Android (scan QR) | Format de code QR non pris en charge | Utiliser la saisie manuelle |
| **0xE8000001** | iPhone (activation) | Serveur opérateur injoignable | Réessayer après 5 minutes ou utiliser la saisie manuelle |
| **« eSIM configuration not supported »** | Android (Samsung) | L'opérateur ne prend pas en charge l'eSIM sur ce modèle | Vérifier avec l'opérateur |
| **« Invalid SM‑DP+ address »** | Les deux | L'adresse de saisie manuelle est erronée | Revérifier l'adresse auprès de votre fournisseur |
| **« LPA error -1 »** | Android | Erreur générique LPA (Local Profile Assistant) | Redémarrer le téléphone, réessayer. Si persiste, utiliser une autre application eSIM. |
| **« EID mismatch »** | Les deux | Le profil est lié à un autre appareil | Contacter l'opérateur pour libérer le profil (Section 4) |
| **« No EID » lors de la composition de `*#06#`** | Les deux | L'appareil ne prend pas en charge l'eSIM | Votre téléphone manque du matériel eSIM — voir notre [guide de vérification matérielle](/faq/esim-activation-errors-troubleshooting-guide/) |
| **« eSIM management not available »** | Android (OnePlus) | Bug Oxygen OS | Mettre à jour vers la dernière version d'Oxygen OS |
| **« Profile cannot be deleted »** | iPhone | eSIM bloqué en état d'attente | Redémarrer l'iPhone, puis réessayer de supprimer. Si bloqué, contacter l'opérateur. |
| **-1** | Les deux | Échec générique d'activation | Redémarrer le téléphone, assurer la connectivité réseau, réessayer |
| **-2** | Android | Code d'activation invalide | Ressaisir le code ou en demander un nouveau à l'opérateur |


## Erreurs qui cassent votre eSIM

Ce sont les erreurs utilisateur les plus courantes qui transforment un eSIM fonctionnel en brique. Évitez-les à tout prix — la plupart remontent à la façon dont l'activation fonctionne réellement, ce que l'[explication de l'activation eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) couvre étape par étape.

| Erreur | Ce qui se passe | Comment éviter |
|---------|--------------|--------------|
| **Supprimer l'eSIM pour « corriger » un problème de connexion** | Le profil est définitivement supprimé — vous perdez toutes les données restantes et devez acheter un nouveau forfait | Ne touchez jamais « Supprimer l'eSIM » à moins que le forfait ne soit entièrement expiré. La suppression ne « rafraîchit » pas — elle détruit. |
| **Scanner le code QR avec l'app Appareil photo** | L'appareil photo reconnaît le code mais ne fait rien — aucun profil ne s'installe | Ouvrez toujours d'abord Réglages > Cellulaire > Ajouter un eSIM — n'utilisez jamais l'app Appareil photo autonome. |
| **Installer à l'aéroport avec un Wi-Fi faible** | Le téléchargement s'interrompt en pleine installation, corrompant le profil | Installez chez vous sur votre propre Wi-Fi stable avant de partir. |
| **Attendre d'atterrir pour installer** | Vous arrivez sans Wi-Fi et ne pouvez pas télécharger le profil | Installez le profil avant le départ (il reste inactif jusqu'à ce que vous activiez l'itinérance des données). |
| **Oublier d'activer l'itinérance des données pour l'eSIM** | Barres de signal complètes mais zéro internet | Après l'atterrissage, allez dans Réglages > Cellulaire > [votre eSIM] et activez l'itinérance des données. |
| **Réinitialiser les paramètres réseau en pensant que cela « rafraîchira » l'eSIM** | La réinitialisation réseau ne supprime pas les eSIM, mais elle retire les mots de passe Wi-Fi et les appairages Bluetooth — vous perdez tous les réseaux enregistrés | Ne réinitialisez les paramètres réseau qu'en dernier recours, et sachez que cela ne corrigera pas les problèmes d'activation eSIM. |
| **Désactiver la ligne eSIM au lieu de simplement désactiver l'itinérance des données** | L'eSIM est entièrement désactivé et ne s'enregistrera pas lorsque vous le réactiverez | Désactivez l'itinérance des données, pas toute la ligne. Gardez la ligne activée mais l'itinérance désactivée lorsqu'elle n'est pas utilisée. |


## Plusieurs problèmes eSIM à la fois

Parfois vous n'avez pas un seul problème — vous en avez deux ou trois à la fois. Voici comment diagnostiquer les symptômes combinés :

| Combinaison de symptômes | Ce qui se passe réellement | Ordre de correction |
|---------------------|---------------------------|-----------|
| **Le code QR scanne mais ensuite « Activation failed »** | Le code QR est valide, mais le serveur de téléchargement est injoignable | Corrigez d'abord le réseau (Section 1), puis re-scannez |
| **L'eSIM affiche des barres de signal mais pas de données ET « No Service » sur la ligne personnelle** | L'APN est manquant ET vous avez un conflit de routage dual-SIM | Corrigez d'abord l'APN (Section 8), puis le routage dual-SIM (Section 10) |
| **Le transfert a fonctionné mais le nouveau téléphone a « No Service »** | Le profil a été transféré mais ne s'est pas enregistré sur le nouveau réseau | Supprimez l'eSIM de l'ancien téléphone, puis redémarrez le nouveau téléphone (Section 4 + Section 2) |
| **Wi-Fi Calling fonctionne mais l'eSIM n'a pas de données ET la ligne personnelle a des frais d'itinérance** | Plusieurs conflits de routage plus l'itinérance des données laissée activée sur la ligne personnelle | Désactivez l'itinérance des données de la ligne personnelle, corrigez le conflit Wi-Fi Calling (Section 18), puis vérifiez l'APN |
| **L'eSIM a disparu après redémarrage ET « Cellular Plan Cannot Be Added »** | Le profil est corrompu ET le stockage est plein | Supprimez d'abord les eSIM inutilisés (Section 5), puis essayez de rajouter (Section 17) |

**Règle générale :** Corrigez d'abord les **problèmes de réseau** (Wi-Fi, itinérance des données, APN), puis les **problèmes de profil** (code QR, activation), puis les **problèmes spécifiques à l'appareil** (verrouillage opérateur, MDM). N'essayez pas de tout corriger en même temps — traitez les symptômes un par un.


## Où trouver Ajouter un eSIM sur chaque téléphone

La solution pour la plupart des erreurs est la même, mais le chemin du menu pour atteindre les contrôles eSIM varie selon la marque. Voici les chemins exacts plus les particularités d'erreur qui n'apparaissent que sur des appareils spécifiques. (Pour les méthodes d'installation complètes derrière ces menus, le [guide d'activation général](/faq/how-to-activate-an-esim/) contient chaque étape.)

### Chemin du menu eSIM iPhone
- **« Ajouter un eSIM » grisé** – votre iPhone peut être verrouillé opérateur. Vérifiez Réglages > Général > Informations > Verrouillage opérateur ; pour la solution complète du verrouillage opérateur, voir notre [guide verrouillage opérateur et matériel](/faq/esim-activation-errors-troubleshooting-guide/).
- **Échec du transfert rapide** – assurez-vous que les deux téléphones sont sur le même Apple ID, ont le Bluetooth activé et sont à moins de 10 cm l'un de l'autre.
- **Après mise à jour iOS, l'eSIM affiche « No Service »** – allez dans Réglages > Cellulaire > appuyez sur l'eSIM > désactivez et réactivez « Activer cette ligne ». Vérifiez également que l'itinérance des données est toujours activée.
- **eSIM a disparu après mise à jour iOS** – voir Section 17. C'est plus courant sur iOS que sur Android après les mises à jour majeures.
- **Spécifique iOS 18 :** Le flux « Ajouter un eSIM » a été repensé avec une option de saisie manuelle plus visible. Si vous êtes sur iOS 18 et le code QR ne scanne pas, le bouton de saisie manuelle est maintenant plus facile à trouver au bas de l'écran.

### Chemin du menu eSIM Samsung Galaxy
- **Le chemin du menu varie selon la version One UI :**
  - **One UI 5 (Android 13) :** Réglages > Connexions > Gestionnaire SIM > Ajouter un eSIM
  - **One UI 6/6.1 (Android 14) :** Réglages > Connexions > Gestionnaire SIM > Ajouter un eSIM (même chemin)
  - **One UI 7 (Android 15) :** Réglages > Connexions > Gestionnaire SIM > Ajouter un forfait mobile
- **Échec du scan du code QR** – essayez la saisie manuelle (appuyez sur « Saisir le code d'activation manuellement »). Samsung nécessite souvent l'adresse SM‑DP+ et le code d'activation séparément.
- **Conflit dual SIM** – si vous avez une SIM physique et un eSIM, vérifiez que l'eSIM est défini comme SIM de données dans le Gestionnaire SIM.

### Chemin du menu eSIM Google Pixel
- **« Télécharger une SIM à la place ? »** – cette option apparaît au bas de l'écran des paramètres SIM. Si vous ne la voyez pas, votre Pixel peut être verrouillé opérateur.
- **eSIM n'apparaît pas après le scan** – redémarrez le téléphone. Pixel a parfois besoin d'un redémarrage après le téléchargement du profil.
- **Les paramètres APN ne s'enregistrent pas** – sur Pixel, les paramètres APN sont sous Réseau et Internet > SIM > [votre eSIM] > Noms des points d'accès. S'ils ne s'enregistrent pas :
  1. Ajoutez un nouvel APN avec un **nom différent** (par exemple, « Airalo 2 » au lieu de « Airalo »).
  2. Enregistrez-le, puis sélectionnez-le manuellement.
  3. Activez et désactivez le mode Avion pour forcer le nouvel APN à prendre effet.
- **eSIM disparaît après redémarrage sur Pixel** – voir Section 17. Les utilisateurs de Pixel le signalent plus fréquemment que les utilisateurs de Samsung.

### Chemin du menu eSIM OnePlus
- **Chemin du menu :** Réglages > Wi-Fi et réseau > SIM et réseau > Ajouter un eSIM
- **Problème courant :** Les appareils OnePlus affichent parfois « eSIM non disponible » après une mise à jour Oxygen OS. Solution : Allez dans Réglages > Système > Mise à jour du système et installez le dernier correctif.
- **Paramètres APN :** Situés sous Réglages > Wi-Fi et réseau > SIM et réseau > [eSIM] > Noms des points d'accès.

### Chemin du menu eSIM Xiaomi
- **Chemin du menu :** Réglages > Cartes SIM et réseaux mobiles > Ajouter un eSIM
- **Paramètres APN :** Situés sous Réglages > Cartes SIM et réseaux mobiles > [eSIM] > Noms des points d'accès.

### Chemin du menu eSIM Oppo et Realme
- **Chemin du menu :** Réglages > Réseau mobile > Ajouter un eSIM

**Vous n'êtes pas sûr que votre modèle exact possède le matériel eSIM** (Xiaomi pour le marché chinois, Huawei, Samsung A-series désactivé par l'opérateur) ? C'est une question de compatibilité — voir notre [guide de prise en charge matérielle et modèles](/faq/esim-activation-errors-troubleshooting-guide/), qui couvre la prise en charge modèle par modèle.


## eSIM fonctionne chez vous mais pas à l'étranger

**Symptôme :** Vous avez installé l'eSIM chez vous, il affiche des barres de signal, mais lorsque vous atterrissez à destination, il n'y a pas de service. Les particularités spécifiques aux destinations — réseaux partenaires, verrouillages régionaux, listes de contrôle à l'arrivée — sont rassemblées dans notre [guide eSIM de voyage](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).

**Cause racine :** Le profil eSIM a été activé alors que vous étiez sur votre réseau domestique, et il ne s'est pas enregistré sur le réseau de destination.

**Solution :**
1. Désactivez la ligne eSIM (`Réglages > Cellulaire > désactiver`).
2. Attendez 10 secondes, puis réactivez-la.
3. Allez dans Sélection du réseau, désactivez « Automatique », sélectionnez manuellement un réseau partenaire de votre fournisseur (demandez la liste des partenaires à votre fournisseur).
4. Si cela échoue, désactivez et réactivez l'itinérance des données.
5. Redémarrez le téléphone.

Si cela ne fonctionne toujours pas, contactez votre fournisseur — votre forfait eSIM peut ne pas inclure le pays où vous êtes, ou il peut y avoir un problème d'accord d'itinérance.


## eSIM fonctionne sur un opérateur mais pas un autre

**Symptôme :** Vous avez un eSIM qui fonctionne bien, mais lorsque vous essayez d'ajouter un deuxième eSIM d'un autre opérateur, il échoue ou affiche « No Service ».

**Cause racine :** Certains modèles de téléphones (surtout les plus anciens) ont des limitations sur les profils d'opérateurs qui peuvent coexister. C'est plus courant sur les appareils Android avec un firmware modem plus ancien.

**Solution :**
1. Vérifiez que votre téléphone prend en charge le dual eSIM (iPhone 13 et plus récents, Pixel 7 et plus récents, Samsung S23 et plus récents).
2. Si vous avez une SIM physique insérée, essayez de la retirer — certains téléphones limitent le nombre de profils actifs lorsqu'une SIM physique est présente.
3. Mettez à jour le firmware de votre téléphone (les mises à jour des paramètres de l'opérateur corrigent souvent cela).
4. Contactez le deuxième opérateur et demandez si son profil eSIM prend en charge la coexistence dual-SIM.


## Quand contacter votre fournisseur eSIM vs. votre fabricant de téléphone

| Problème | Contact |
|---------|---------|
| Code QR expiré / invalide | Fournisseur eSIM |
| « Activation failed » de façon répétée | Fournisseur eSIM |
| Pas de données après configuration APN | Fournisseur eSIM |
| L'appareil affiche « No Service » après l'atterrissage | Fournisseur eSIM (vérifier l'accord d'itinérance) |
| eSIM n'apparaît pas dans les paramètres | Fabricant de téléphone (si bug logiciel) ou problème de verrouillage opérateur |
| Problèmes matériels (appareil photo, écran, batterie) | Fabricant de téléphone |
| Verrouillage / déverrouillage opérateur | Votre opérateur d'origine |
| Restriction MDM | Votre service IT |
| eSIM a disparu après redémarrage | Les deux — essayez les solutions de la Section 17, puis contactez le fournisseur |
| « eSIM already in use » | Fournisseur eSIM (pour libérer de force le profil) |
| eSIM Apple Watch ne se connecte pas | Opérateur (pour le provisionnement) ou assistance Apple (pour les problèmes d'appairage) |


## Foire aux questions

**Q1 : La suppression d'un eSIM annule-t-elle mon forfait ?**
Non. La suppression de l'eSIM ne fait que retirer le profil du téléphone. Vous devez contacter l'opérateur séparément pour annuler le forfait.

**Q2 : Puis-je récupérer un eSIM supprimé ?**
Pour les eSIM d'opérateur postpayé, oui — l'opérateur peut réémettre le profil. Pour les eSIM de voyage, la suppression est généralement permanente et nécessite un nouvel achat.

**Q3 : Pourquoi mon eSIM fonctionne-t-il en Wi-Fi mais pas en cellulaire ?**
C'est presque toujours un problème d'APN ou d'itinérance des données. Suivez la Section 8 et la Section 14.

**Q4 : Un eSIM vide-t-il ma batterie plus vite ?**
Non. Faire tourner deux lignes actives en même temps peut utiliser légèrement plus d'énergie, mais un seul eSIM ne vide pas la batterie.

**Q5 : Combien d'eSIM puis-je stocker sur mon téléphone ?**
Généralement 8–10 profils sur iPhone et la plupart des appareils Android. Vous pouvez en stocker beaucoup plus mais n'en avoir que deux actifs à la fois (dual‑SIM).

**Q6 : Pourquoi mon eSIM perd-il constamment le signal ?**
Cela peut être dû à la congestion du réseau, une couverture faible ou un bug logiciel. Essayez de basculer le mode Avion, de redémarrer ou de sélectionner manuellement un réseau.

**Q7 : Je vois « Activation Required » sur mon eSIM après un redémarrage – qu'est-ce que cela signifie ?**
Le téléphone a perdu la connexion au serveur d'activation de l'opérateur. Redémarrez le téléphone et assurez-vous d'avoir une connexion réseau. Si cela persiste, supprimez et réinstallez l'eSIM.

**Q8 : Et si mon opérateur dit qu'il ne prend pas en charge l'eSIM ?**
Vous pouvez toujours utiliser des fournisseurs eSIM de voyage comme Roami, Airalo ou Holafly — ils fonctionnent indépendamment de votre opérateur d'origine et ne nécessitent pas sa prise en charge.

**Q9 : Mon eSIM s'est transféré sur mon nouvel iPhone mais je ne peux pas passer d'appels – seules les données fonctionnent.**
Vérifiez que l'eSIM est défini comme ligne vocale par défaut. Assurez-vous également que votre opérateur prend en charge VoLTE pour cette ligne.

**Q10 : Le scan du code QR fonctionne mais le téléchargement prend une éternité – est-ce normal ?**
Non. Cela devrait prendre 1–2 minutes. Si cela prend plus longtemps, votre Wi‑Fi est trop lent. Changez de réseau ou utilisez la saisie manuelle.

**Q11 : Mon eSIM est actif mais je ne peux pas envoyer ou recevoir de SMS.**
Certains eSIM de voyage sont uniquement pour les données et ne prennent pas en charge les SMS. Si vous avez besoin de SMS, achetez un forfait qui inclut explicitement un numéro de téléphone.

**Q12 : J'ai accidentellement réinitialisé mes paramètres réseau – maintenant mon eSIM a disparu.**
La réinitialisation des paramètres réseau ne supprime pas les profils eSIM. Votre eSIM devrait toujours être là. Allez dans Réglages > Cellulaire et réactivez la ligne. S'il a disparu, vous l'avez peut-être supprimé accidentellement — voir alors la Section 15.

**Q13 : Quelle est la différence entre supprimer un eSIM et le désactiver ?**
Désactiver un eSIM conserve le profil sur le téléphone mais désactive la ligne. Vous pouvez le réactiver à tout moment. Supprimer un eSIM retire définitivement le profil — vous ne pouvez pas le récupérer sans un nouveau code QR. Ne supprimez que lorsque le forfait est entièrement expiré.

**Q14 : Un VPN peut-il interférer avec l'activation eSIM ?**
Oui — les VPN peuvent interférer avec la connexion au serveur d'activation. Désactivez votre VPN avant d'activer un eSIM.

**Q15 : Mon forfait eSIM indique « illimité » mais je n'ai plus de données après avoir utilisé 5GB.**
De nombreux forfaits « illimités » ont une politique d'utilisation équitable (FUP) qui limite les vitesses après un certain seuil de données. Vérifiez les conditions de votre fournisseur — vous devrez peut-être acheter un forfait de recharge pour plus de données haut débit.

👉 **Dépannage terminé ?** Choisissez un [forfait eSIM USA](/united-states-esim/) ou un [forfait eSIM Europe](/europe-esim/) pour vous reconnecter.

---

## Sources

- [GSMA — spécification eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Apple Support — Set up eSIM on iPhone](https://support.apple.com/en-us/HT212780)
- [Google Support — Set up an eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Google Support — Android eSIM](https://support.google.com/android/answer/11241215)