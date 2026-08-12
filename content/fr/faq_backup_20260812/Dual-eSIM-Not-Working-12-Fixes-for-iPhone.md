---
title: "Double eSIM sans service ? 12 solutions iPhone"
h1_title: "Double eSIM sans service : 12 solutions pour iPhone"
description: "Double eSIM iPhone en panne ? No Service, appels en messagerie. Avec Roami, solutions CDMA, T-ADS, verrouillage. Compatible iPhone 17/16/iOS 26 et opérateurs françai"
keywords: ["double eSIM ne fonctionne pas", "problème double SIM iPhone", "eSIM pas de service", "deuxième eSIM pas reconnue", "activer deux eSIM iPhone", "commutateur eSIM", "eSIM prioritaire", "iMessage double SIM", "paramètres APN double SIM", "eSIM Orange", "eSIM SFR", "eSIM Bouygues", "eSIM Free", "réinitialiser réseau eSIM", "double eSIM Apple Watch", "changer eSIM iPhone", "eSIM pas activée", "transfert eSIM multiplateforme"]
date: 2026-06-22T10:00:00Z
lastmod: 2026-06-22T10:00:00Z
tags: ["eSIM", "iOS", "Dépannage", "Double SIM", "Configuration voyage"]
toc: true

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


Utiliser deux numéros de téléphone sur un seul iPhone est incroyablement pratique – mais cela comporte des pièges cachés. Des conflits CDMA vs GSM aux échecs de routage des appels entrants (T-ADS), ce guide couvre tout ce que vous devez savoir pour faire fonctionner **double eSIM** ou **eSIM + carte SIM physique** parfaitement sur iPhone 17, 16 et les modèles antérieurs avec iOS 19. Pour un guide complet de la configuration eSIM de base, consultez notre **[Guide complet iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**.

La technologie eSIM est régie par le [standard GSMA SGP.22](https://www.gsma.com/esim/), qui garantit la compatibilité entre appareils et opérateurs. La [documentation officielle d'Apple sur la double SIM](https://support.apple.com/fr-fr/109317) fournit des informations supplémentaires sur les configurations prises en charge.

---

## 📌 Index de diagnostic rapide (spécifique à la double SIM)

| Symptôme | Cause la plus probable | Section |
|---------|-------------------|--------------|
| La deuxième eSIM affiche « No Service » mais la première fonctionne | Incompatibilité du repli vocal CDMA | #2 |
| Un numéro peut appeler mais ne peut pas recevoir d'appels | Cache T-ADS de l'opérateur obsolète | #3 |
| Pendant un appel, l'autre ligne affiche « No Service » | L'iPhone utilise un seul réseau de données à la fois | #4 |
| Impossible d'ajouter une deuxième eSIM – erreur « Verrouillage opérateur » | Appareil verrouillé sur le premier opérateur | #5 |
| La double SIM fonctionne mais la batterie se décharge plus vite | Les deux lignes recherchent activement | #6 |
| eSIM + carte SIM physique : la carte SIM physique n'est pas reconnue | Problème de tiroir SIM ou carte incompatible | #7 |

---

## 1. Quelles sont vos options double SIM sur iPhone ?

À partir de l'iPhone XS, XR et tous les modèles ultérieurs (y compris l'iPhone 17), Apple prend en charge :

| Configuration | Modèles pris en charge | Lignes actives max |
|---------------|------------------|------------------|
| **Double eSIM** | iPhone 13 et plus récents (y compris tous les modèles iPhone 17) | 2 |
| **1 eSIM + 1 carte nano-SIM physique** | Tous les iPhones avec tiroir SIM (modèles internationaux, et modèles américains avant iPhone 14) | 2 |
| **1 carte SIM physique uniquement** | iPhones plus anciens (pré-XS) | 1 |
| **2 cartes SIM physiques** | Modèles spécifiques de Chine continentale, Hong Kong, Macao (par exemple, version chinoise de l'iPhone 17) | 2 |

> 📱 **iPhone 17 Air et série iPhone 17 américaine** : Pas de tiroir SIM physique – uniquement double eSIM. Si vous rencontrez des problèmes d'activation sur ces modèles, consultez notre **[Guide de dépannage approfondi eSIM (16 cas réels)](/faq/esim-deep-troubleshooting-guide-2026/)**.

Pour les utilisateurs français, tous les opérateurs nationaux – **Orange**, **SFR**, **Bouygues Telecom** et **Free Mobile** – prennent en charge la double eSIM sur les iPhone compatibles. Les pages officielles de chaque opérateur ([Orange eSIM](https://www.orange.fr/esim), [SFR eSIM](https://www.sfr.fr/esim), [Bouygues eSIM](https://www.bouyguestelecom.fr/esim), [Free eSIM](https://mobile.free.fr/esim)) détaillent les forfaits éligibles.

---

## 2. Comment configurer deux eSIM sur iPhone ? – Guide étape par étape

Avant de résoudre les problèmes, voici comment configurer correctement deux eSIM sur votre iPhone. Une **mauvaise configuration initiale** est souvent la cause des problèmes que vous rencontrez.

### Étape 1 : Ajouter la première eSIM

1. Allez dans **Réglages > Données cellulaires > Ajouter un forfait de données**.
2. Scannez le code QR fourni par votre opérateur, ou saisissez les détails manuellement.
3. Étiquetez la ligne (par exemple « Personnel », « France »).

### Étape 2 : Ajouter la deuxième eSIM

1. Retournez dans **Réglages > Données cellulaires > Ajouter un forfait de données**.
2. Scannez le deuxième code QR.
3. Étiquetez la deuxième ligne (par exemple « Professionnel », « Voyage », « Royaume-Uni »).

### Étape 3 : Configurer les lignes par défaut

1. **Ligne vocale par défaut** : Sélectionnez la ligne principale pour les appels sortants.
2. **Données cellulaires** : Choisissez la ligne qui utilisera les données mobiles.
3. **Activer le basculement des données** : Laissez cette option activée pour que l'iPhone puisse utiliser temporairement les données de l'autre ligne en cas de perte de signal.

### Étape 4 : Définir les préférences par contact

Pour un contact spécifique, vous pouvez définir quelle ligne utiliser par défaut :
1. Ouvrez le contact.
2. Appuyez sur **Modifier**.
3. Faites défiler jusqu'à **Ligne préférée** et choisissez la ligne souhaitée.

---

## 3. Limitation critique : Les opérateurs CDMA bloquent la double eSIM

Si votre ligne principale est sur un **opérateur CDMA** (Verizon, ancien Sprint, ou certains opérateurs régionaux américains), l'ajout d'une deuxième eSIM peut échouer ou la deuxième ligne affichera « No Service ».

### Pourquoi cela se produit-il ?
Les réseaux CDMA utilisent une technologie de repli vocal différente (1xRTT). La bande de base de l'iPhone ne peut gérer qu'**un seul canal vocal CDMA** à la fois. Lorsque la première eSIM est CDMA, elle verrouille la bande de base en mode CDMA, ne laissant aucune ressource pour la voix de la deuxième ligne. La deuxième ligne peut encore recevoir des données LTE/5G, mais **ne peut pas émettre ni recevoir d'appels**.

### Quels opérateurs sont CDMA ?
- **USA eSIM** : Verizon (anciens forfaits), US Cellular, certains MVNO
- **Japon** : au (KDDI) (CDMA progressivement abandonné, mais des forfaits hérités existent)
- **France et Europe** : Aucun – tous les opérateurs français (Orange, SFR, Bouygues, Free) utilisent GSM/UMTS/LTE, donc pas de problème !

### Correctifs
- ✅ **Remplacez votre ligne principale par un forfait GSM/uniquement 5G** – par exemple, « 5G Start » de Verizon ou T-Mobile.
- ✅ **Utilisez la ligne CDMA uniquement pour les données** – désactivez la « Voix » pour cette ligne (désactivez VoLTE, mais cela peut ne pas fonctionner).
- ⚠️ **Solution de contournement** : Échangez quelle ligne est principale. Si vous devez conserver CDMA, placez-la comme deuxième eSIM – mais alors la première eSIM peut perdre la voix.

---

## 4. Un numéro peut appeler mais ne peut pas recevoir – Erreur de cache T-ADS

**Symptôme** : La ligne A fonctionne bien. La ligne B peut émettre des appels sortants, mais les appels entrants vers B vont directement à la messagerie vocale ou sonnent comme « indisponible ».

**Cause profonde** : Le cache **T-ADS (Terminating Access Domain Selection)** de l'opérateur est obsolète. Lorsque la ligne B est récemment passée de la 5G à la LTE, ou a utilisé l'appel Wi-Fi, le réseau essaie toujours de router les appels entrants vers l'ancien domaine.

### Correctif rapide (côté utilisateur)
1. Désactivez temporairement **l'appel Wi-Fi** : `Réglages > Données cellulaires > Ligne B > Appels Wi-Fi` → DÉSACTIVÉ.
2. Redémarrez l'iPhone.
3. Réactivez l'appel Wi-Fi.

### Correctif côté opérateur (contactez le support)
Demandez à votre opérateur de « **vider le cache T-ADS pour ce numéro** » ou « **réinitialiser l'enregistrement de sélection de domaine** ». Cela prend généralement effet dans les 30 minutes. Pour plus d'informations sur T-ADS, consultez le **[Correctif 14 dans notre guide de dépannage](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

---

## 5. Pendant un appel, l'autre ligne affiche « No Service » – Comportement normal

**Symptôme** : Vous êtes en appel sur la ligne A. Lorsque vous vérifiez, la ligne B affiche « No Service ».

**Explication** : Les iPhones sont **double veille, pas double actif**. Une seule ligne peut maintenir une connexion cellulaire à la fois. Pendant un appel, l'autre ligne est temporairement injoignable. Dès que l'appel se termine, les deux lignes se reconnectent.

### Ce que vous pouvez faire :
- **Activez l'appel Wi-Fi sur les deux lignes** – alors la ligne inactive peut utiliser le Wi-Fi pour recevoir des appels pendant que vous êtes sur l'autre ligne.
- **Activez « Autoriser le basculement des données cellulaires »** – sous `Réglages > Données cellulaires > Données cellulaires`. Cela permet à la ligne non-données d'utiliser la connexion de la ligne de données pour l'appel Wi-Fi.

---

## 6. La double SIM ne fonctionne pas ? Vérifiez d'abord le verrouillage opérateur

Si vous ne pouvez pas ajouter une deuxième eSIM ou une carte SIM physique :
- Votre iPhone pourrait être **verrouillé par l'opérateur** sur le premier opérateur.
- Pour vérifier : `Réglages > Général > Informations` → faites défiler jusqu'à **Verrouillage opérateur**. Il doit indiquer « Aucune restriction SIM ».

### Que faire si verrouillé :
- Contactez votre opérateur pour demander un déverrouillage. En France, les opérateurs (Orange, SFR, Bouygues, Free) doivent déverrouiller gratuitement après une période légale (généralement 3 mois pour les forfaits, 6 mois pour les prépayés).
- Si déverrouillé mais toujours pas de fonctionnement, réinitialisez les réglages réseau : `Réglages > Général > Transférer ou réinitialiser l'iPhone > Réinitialiser > Réinitialiser les réglages réseau`. (Attention : cela efface les mots de passe Wi-Fi.)

Une fois déverrouillé, vous pouvez également transférer votre eSIM entre iPhone et Android – consultez notre **[guide de transfert eSIM multiplateforme 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)**.

---

## 7. Drain de batterie en double SIM : Comment le réduire

L'utilisation de deux lignes augmente la consommation de batterie de 5 à 15 %. Voici comment minimiser :

| Stratégie | Effet |
|----------|--------|
| Réglez la ligne avec un signal plus faible pour **utiliser uniquement LTE** (pas de 5G) | Économie modérée |
| Désactivez **l'itinérance des données** sur la ligne non utilisée pour les données | Économise la recherche |
| Désactivez la **5G autonome** (si votre opérateur le permet) | Aide beaucoup |
| Utilisez le **Mode faible consommation** pour les applications en arrière-plan sur la ligne secondaire | Économie mineure |
| Dans les zones de très faible signal, désactivez temporairement la ligne secondaire | Économie significative |

Pour désactiver une ligne : `Réglages > Données cellulaires` → appuyez sur la ligne → désactivez **Activer cette ligne**.

---

## 8. Carte SIM physique non reconnue (problèmes de tiroir)

**Symptôme** : Votre nano-SIM fonctionne dans un autre téléphone mais pas dans votre iPhone.

**Causes courantes** :
- Tiroir SIM pas complètement inséré ou endommagé.
- La carte SIM est **trop ancienne** (pré-4G) ou pliée.
- Contaminants sur les contacts.

**Correctifs** :
1. Retirez le tiroir, nettoyez les contacts avec un chiffon doux.
2. Réinsérez fermement jusqu'au clic.
3. Redémarrez l'iPhone.
4. Si toujours non reconnue, remplacez la carte SIM en boutique (gratuit pour la plupart des forfaits).

---

## 9. Opérateurs français et double eSIM : Orange, SFR, Bouygues, Free

Tous les grands opérateurs français proposent désormais l'eSIM avec support de la double SIM sur iPhone :

| Opérateur | eSIM disponible | Double eSIM supportée | Activation |
|-----------|-----------------|----------------------|------------|
| **Orange** | ✅ Oui | ✅ Oui (iPhone 13+) | Application Orange, espace client |
| **SFR** | ✅ Oui | ✅ Oui (iPhone 13+) | Application SFR, espace client |
| **Bouygues Telecom** | ✅ Oui | ✅ Oui (iPhone 13+) | Application Bouygues, espace client |
| **Free Mobile** | ✅ Oui | ✅ Oui (iPhone 13+) | Application Free, espace client |

**Pour activer une deuxième eSIM chez votre opérateur français :**
1. Connectez-vous à votre espace client ou application.
2. Commandez une **deuxième eSIM** (certains opérateurs la proposent gratuitement).
3. Recevez le code QR par email ou directement dans l'application.
4. Suivez les étapes de la section 2 pour l'ajouter à votre iPhone.

**Attention** : Certains forfaits prépayés ou anciens forfaits peuvent ne pas être éligibles à l'eSIM. Vérifiez auprès de votre opérateur.

---

## 10. iMessage, FaceTime et double eSIM – Configuration et dépannage

Avec deux numéros sur votre iPhone, iMessage et FaceTime peuvent utiliser les deux lignes. Voici comment les configurer :

### Associer les deux numéros à iMessage/FaceTime
1. Allez dans **Réglages > Messages > Envoi & Réception**.
2. Sous « Vous pouvez recevoir des messages iMessage sur », vous devriez voir les deux numéros de téléphone.
3. Cochez les deux numéros que vous souhaitez associer.
4. Pour l'option **Démarrer les nouvelles conversations depuis**, choisissez le numéro par défaut pour les nouveaux messages.

### Problèmes courants avec iMessage et double SIM

| Problème | Solution |
|----------|----------|
| Un numéro ne s'active pas sur iMessage | Allez dans `Réglages > Messages > Envoyer & Recevoir`, décochez puis recochez le numéro. Redémarrez l'iPhone. |
| iMessage utilise le mauvais numéro | Vérifiez le paramètre **Démarrer les nouvelles conversations depuis** dans `Réglages > Messages > Envoi & Réception`. |
| FaceTime ne sonne pas sur le bon numéro | Allez dans `Réglages > FaceTime`, vérifiez les numéros dans **Vous pouvez être joint sur FaceTime**. |

---

## 11. Tableau de dépannage – Scénarios double SIM

| Problème | Étape immédiate | Correctif à long terme |
|---------|----------------|----------------|
| La deuxième eSIM ne reçoit jamais de signal | Redémarrez l'iPhone, puis désactivez/réactivez la ligne | Si opérateur CDMA, passez à un forfait GSM |
| Les appels vont directement à la messagerie vocale | Désactivez « Silence appels inconnus » et le renvoi d'appel | Contactez l'opérateur pour réinitialiser T-ADS |
| Impossible de recevoir des SMS sur la deuxième ligne | Envoyez un SMS test depuis cette ligne | Assurez-vous que la ligne n'est pas « données uniquement » |
| Deux eSIM mais les deux affichent « No Service » | Mode Avion on/off, vérifiez le verrouillage opérateur | Réinitialisez les réglages réseau |
| Échange de lignes et FaceTime/iMessage ne s'activent pas | Allez dans `Réglages > Messages > Envoyer & Recevoir` | Déconnectez-vous d'Apple ID et reconnectez-vous |
| **eSIM pas activée** après installation | Vérifiez la connexion Wi-Fi et le code QR | Contactez l'opérateur pour un nouveau code QR |
| **Réinitialiser réseau eSIM** après un problème | `Réglages > Général > Transférer ou réinitialiser` | Réinstallez le profil eSIM avec le code QR |

### Configurer manuellement les paramètres APN pour la double eSIM

Si après l'activation, aucun réseau de données n'est disponible sur l'une des lignes, les paramètres APN doivent souvent être ajustés :

1. **iPhone :** `Réglages > Données cellulaires > [Ligne concernée] > Réseau de données cellulaires` → remplissez les champs APN.
2. **Valeurs APN pour les opérateurs français :**
   - **Orange :** APN = `orange` (nom d'utilisateur/mot de passe : vide)
   - **SFR :** APN = `sl2sfr` (nom d'utilisateur/mot de passe : vide)
   - **Bouygues :** APN = `ebouygtel.com` (nom d'utilisateur/mot de passe : vide)
   - **Free :** APN = `free` (nom d'utilisateur/mot de passe : vide)

Pour d'autres problèmes comme « eSIM liée à un autre appareil » ou « erreur de restauration DFU 53 », consultez notre **[bibliothèque complète de dépannage 16 cas](/faq/esim-deep-troubleshooting-guide-2026/)**.

---

## 12. Foire aux questions

**Q1 : Puis-je utiliser deux eSIM du même opérateur français ?**
Oui, à condition que votre opérateur autorise plusieurs profils eSIM sur un seul compte. Orange, SFR, Bouygues et Free permettent généralement deux eSIM sur le même iPhone. Vérifiez les conditions dans votre espace client.

**Q2 : Les deux lignes prendront-elles en charge la 5G simultanément ?**
Oui, sur iPhone 13 et plus récents (y compris l'iPhone 17), les deux lignes peuvent être en 5G (double veille 5G). Cependant, une seule ligne peut utiliser les données 5G à la fois ; l'autre utilise la 5G pour le repli vocal.

**Q3 : Ma deuxième ligne fonctionne mais la première a cessé de fonctionner après l'avoir ajoutée – que s'est-il passé ?**
Vous avez peut-être accidentellement échangé les paramètres de ligne principale. Allez dans `Réglages > Données cellulaires > Ligne vocale par défaut` et remettez-la.

**Q4 : La double eSIM décharge-t-elle plus la batterie que eSIM + SIM physique ?**
Généralement, la double eSIM consomme légèrement moins d'énergie car il n'y a pas de lecteur de carte physique. Mais la différence est négligeable (2-3 %).

**Q5 : Je voyage – puis-je utiliser une eSIM locale pour les données et conserver mon eSIM française pour les appels ?**
Oui, meilleure pratique :
- Définissez l'eSIM locale comme ligne de **Données cellulaires**.
- Conservez l'eSIM française comme **Ligne vocale par défaut**.
- Désactivez **l'itinérance des données** sur l'eSIM française pour éviter des frais élevés.
- Activez **Autoriser le basculement des données cellulaires** pour que votre ligne française puisse utiliser les données de l'eSIM locale pour l'appel Wi-Fi et les MMS.

**Q6 : Pourquoi la deuxième eSIM disparaît-elle parfois après une mise à jour iOS ?**
Bogue rare. Allez dans `Réglages > Données cellulaires` – si la ligne manque mais apparaît toujours sous « SIM disponibles », appuyez dessus et réactivez-la. Sinon, contactez l'opérateur pour renvoyer le profil.

**Q7 : Puis-je utiliser une configuration double SIM avec une Apple Watch ?**
Oui. L'Apple Watch peut refléter **une** des lignes de l'iPhone. Choisissez la ligne que vous souhaitez sur la montre lors de la configuration.

**Q8 : Que faire si l'activation de la double eSIM chez Orange, SFR, Bouygues ou Free échoue ?**
1. Vérifiez que votre forfait est éligible à l'eSIM sur le site de votre opérateur ([Orange](https://www.orange.fr/esim), [SFR](https://www.sfr.fr/esim), [Bouygues](https://www.bouyguestelecom.fr/esim), [Free](https://mobile.free.fr/esim)).
2. Assurez-vous que votre iPhone est débloqué (`Réglages > Général > Informations`).
3. Contactez le support de votre opérateur – ils peuvent générer un nouveau code QR ou réinitialiser votre profil eSIM.

---

## 13. Conseils professionnels finaux

- **Étiquetez vos lignes** immédiatement après la configuration – cela évite des confusions infinies.
- **Définissez des sonneries différentes** pour chaque ligne : `Réglages > Sons et vibrations > Sonnerie` → faites défiler vers le bas, vous pouvez attribuer par ligne.
- **Utilisez l'automatisation des raccourcis** pour changer la ligne vocale par défaut en fonction de l'heure (par exemple, heures de travail = ligne professionnelle ; soirées = personnel).
- **Avant de vendre votre appareil** : Allez dans `Réglages > Données cellulaires`, supprimez **toutes** les eSIM et retirez la carte SIM physique. Pour un guide détaillé sur la suppression des eSIM et l'annulation des forfaits, consultez le **[Correctif #9 dans notre guide de dépannage](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.

---

*Basé sur les documents de support Apple, le comportement d'iOS 19 et les tests d'opérateurs en juin 2026. L'expérience réelle peut varier selon l'opérateur, la région et le modèle d'appareil.*