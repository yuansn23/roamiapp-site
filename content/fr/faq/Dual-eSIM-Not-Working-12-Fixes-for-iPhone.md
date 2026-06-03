---
title: "Double eSIM sans service ? 12 solutions iPhone"
description: "Double eSIM iPhone en panne ? No Service, appels en messagerie. Solutions CDMA, T-ADS, batterie, verrouillage. iPhone 17/16/iOS 26"
keywords: ["dépannage eSIM", "activation eSIM échouée", "eSIM pas de service", "erreur de transfert eSIM", "Apple eSIM", "iOS 26 eSIM", "iPad eSIM ne fonctionne pas", "paramètres APN eSIM", "code de confirmation eSIM", "profil eSIM expiré", "eSIM liée à un autre appareil", "problème de signal double eSIM", "eSIM DFU erreur 53", "verrouillage opérateur eSIM", "transfert eSIM multiplateforme"]
date: 2026-06-01T10:00:00Z
lastmod: 2026-06-01T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Dépannage", "Configuration de voyage"]
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
    - name: "États-Unis"
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



> Utiliser deux numéros de téléphone sur un seul iPhone est incroyablement pratique – mais cela comporte des pièges cachés. Des conflits CDMA vs GSM aux échecs de routage des appels entrants (T‑ADS), ce guide couvre tout ce que vous devez savoir pour faire fonctionner **double eSIM** ou **eSIM + carte SIM physique** parfaitement sur iPhone 17, 16 et les modèles antérieurs avec iOS 26. Pour un guide complet de la configuration eSIM de base, consultez notre **[Guide complet iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**.

---

## 📌 Index de diagnostic rapide (spécifique à la double SIM)

| Symptôme | Cause la plus probable | Section de correction |
|---------|-------------------|--------------|
| La deuxième eSIM affiche « No Service » mais la première fonctionne | Incompatibilité du repli vocal CDMA | #2 |
| Un numéro peut appeler mais ne peut pas recevoir d'appels | Cache T‑ADS de l'opérateur obsolète | #3 |
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
| **1 eSIM + 1 carte nano‑SIM physique** | Tous les iPhones avec tiroir SIM (modèles non américains, et modèles américains avant iPhone 14) | 2 |
| **1 carte SIM physique uniquement** | iPhones plus anciens (pré-XS) | 1 |
| **2 cartes SIM physiques** | Modèles spécifiques à double tiroir SIM de Chine continentale, Hong Kong, Macao (par exemple, version chinoise de l'iPhone 17) | 2 |

> 📱 **iPhone 17 Air et série iPhone 17 américaine** : Pas de tiroir SIM physique – uniquement double eSIM. Si vous rencontrez des problèmes d'activation sur ces modèles, consultez notre **[Guide de dépannage approfondi eSIM (16 cas réels)](/faq/esim-deep-troubleshooting-guide-2026/)** pour des correctifs avancés.

---

## 2. Limitation critique : Les opérateurs CDMA bloquent la double eSIM

Si votre ligne principale est sur un **opérateur CDMA** (Verizon, ancien Sprint, ou certains opérateurs régionaux américains), l'ajout d'une deuxième eSIM peut échouer ou la deuxième ligne affichera « No Service ».

### Pourquoi cela se produit-il ?
Les réseaux CDMA utilisent une technologie de repli vocal différente (1xRTT). La bande de base de l'iPhone ne peut gérer qu'**un seul canal vocal CDMA** à la fois. Lorsque la première eSIM est CDMA, elle verrouille la bande de base en mode CDMA, ne laissant aucune ressource pour la voix de la deuxième ligne. La deuxième ligne peut encore recevoir des données LTE/5G, mais **ne peut pas émettre ni recevoir d'appels**.

### Quels opérateurs sont CDMA ?
- **États-Unis** : Verizon (anciens forfaits), US Cellular, certains MVNO
- **Japon** : au (KDDI) (CDMA progressivement abandonné, mais des forfaits hérités existent)
- **Autres** : La plupart du monde utilise GSM/UMTS/LTE (pas de problème)

### Correctifs
- ✅ **Remplacez votre ligne principale par un forfait GSM/uniquement 5G** – par exemple, « 5G Start » de Verizon ou T‑Mobile.
- ✅ **Utilisez la ligne CDMA uniquement pour les données** – désactivez la « Voix » pour cette ligne (pas possible dans iOS ; vous devriez désactiver VoLTE, ce qui peut ne pas fonctionner).
- ⚠️ **Solution de contournement** : Échangez quelle ligne est principale. Si vous devez conserver CDMA, placez-la comme deuxième eSIM – mais alors la première eSIM peut perdre la voix.
- ❌ **Pas de correctif complet** – vous devrez peut-être conserver une carte SIM physique pour la voix CDMA et utiliser l'eSIM uniquement pour les données.

---

## 3. Un numéro peut appeler mais ne peut pas recevoir – Erreur de cache T‑ADS

**Symptôme** : La ligne A fonctionne bien. La ligne B peut émettre des appels sortants, mais les appels entrants vers B vont directement à la messagerie vocale ou sonnent comme « indisponible ».

**Cause profonde** : Le cache **T‑ADS (Terminating Access Domain Selection)** de l'opérateur est obsolète. Lorsque la ligne B est récemment passée de la 5G à la LTE, ou a utilisé l'appel Wi‑Fi, le réseau essaie toujours de router les appels entrants vers l'ancien domaine.

### Correctif rapide (côté utilisateur)
1. Désactivez temporairement **l'appel Wi‑Fi** : `Réglages > Données cellulaires > Ligne B > Appels Wi‑Fi` → DÉSACTIVÉ.
2. Redémarrez l'iPhone.
3. Réactivez l'appel Wi‑Fi.

### Correctif côté opérateur (contactez le support)
Demandez à votre opérateur de « **vider le cache T‑ADS pour ce numéro** » ou « **réinitialiser l'enregistrement de sélection de domaine** ». Cela prend généralement effet dans les 30 minutes. Pour plus d'informations sur T‑ADS et d'autres problèmes liés aux appels, consultez le **[Correctif 14 dans notre guide de dépannage](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Empêcher la récurrence
- Évitez de basculer rapidement entre la 5G et la LTE (restez dans un mode pendant au moins quelques heures).
- Si vous voyagez fréquemment, désactivez **l'itinérance des données** pour la ligne qui n'a pas besoin de données.

---

## 4. Pendant un appel, l'autre ligne affiche « No Service » – Comportement normal

**Symptôme** : Vous êtes en appel sur la ligne A. Lorsque vous vérifiez, la ligne B affiche « No Service ».

**Explication** : Les iPhones sont **double veille, pas double actif**. Une seule ligne peut maintenir une connexion cellulaire à la fois. Pendant un appel, l'autre ligne est temporairement injoignable. Dès que l'appel se termine, les deux lignes se reconnectent.

### Ce que vous pouvez faire :
- **Activez l'appel Wi‑Fi sur les deux lignes** – alors la ligne inactive peut utiliser le Wi‑Fi pour recevoir des appels pendant que vous êtes sur l'autre ligne.
- **Activez « Autoriser le basculement des données cellulaires »** – sous `Réglages > Données cellulaires > Données cellulaires`. Cela permet à la ligne non‑données d'utiliser la connexion de la ligne de données pour l'appel Wi‑Fi.

> 📌 Remarque : Certains opérateurs ne prennent pas en charge l'appel Wi‑Fi simultanément sur les deux lignes. Vérifiez auprès de votre opérateur.

---

## 5. La double SIM ne fonctionne pas ? Vérifiez d'abord le verrouillage opérateur

Si vous ne pouvez pas ajouter une deuxième eSIM ou une carte SIM physique :
- Votre iPhone pourrait être **verrouillé par l'opérateur** sur le premier opérateur.
- Pour vérifier : `Réglages > Général > Informations` → faites défiler jusqu'à **Verrouillage opérateur**. Il doit indiquer « Aucune restriction SIM ».

### Que faire si verrouillé :
- Contactez votre opérateur pour demander un déverrouillage. Les opérateurs américains doivent déverrouiller après que l'appareil est payé.
- Si déverrouillé mais toujours pas de fonctionnement, vous devrez peut-être réinitialiser les réglages réseau : `Réglages > Général > Transférer ou réinitialiser l'iPhone > Réinitialiser > Réinitialiser les réglages réseau`. (Attention : cela efface les mots de passe Wi-Fi.)

Une fois déverrouillé, vous pouvez également transférer votre eSIM entre iPhone et Android – consultez notre **[guide de transfert eSIM multiplateforme 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** pour des instructions étape par étape.

---

## 6. Drain de batterie en double SIM : Comment le réduire

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

## 7. Carte SIM physique non reconnue (problèmes de tiroir)

**Symptôme** : Votre nano‑SIM fonctionne dans un autre téléphone mais pas dans votre iPhone.

**Causes courantes** :
- La carte SIM est **CDMA** et l'iPhone est en mode eSIM uniquement ? (rare)
- Tiroir SIM pas complètement inséré ou endommagé.
- La carte SIM est **trop ancienne** (pré-4G) ou pliée.

**Correctifs** :
1. Retirez le tiroir, nettoyez les contacts avec un chiffon doux.
2. Réinsérez fermement jusqu'au clic.
3. Redémarrez l'iPhone.
4. Si toujours non reconnue, essayez la SIM dans un autre téléphone – si elle fonctionne, le lecteur SIM de votre iPhone pourrait être défectueux.
5. Remplacez la carte SIM dans un magasin de l'opérateur (gratuit pour la plupart des forfaits postpayés).

Si vous prévoyez de passer entièrement à l'eSIM, consultez notre **[guide iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)** pour les méthodes d'activation.

---

## 8. Cas régionaux spéciaux : Chine, Hong Kong, Macao

Apple vend des modèles spécifiques à double carte SIM physique en **Chine continentale** :
- iPhone 17, 17 Pro, 17 Pro Max : **deux emplacements nano‑SIM physiques** (pas d'eSIM sauf Air).
- iPhone 17 Air : **eSIM uniquement** (mondial, y compris la Chine).

**Modèles de Hong Kong et Macao** :
- Supportent **eSIM + carte SIM physique** (comme les modèles internationaux) ou double carte SIM physique selon le modèle.
- Vérifiez toujours avant d'acheter si vous prévoyez d'utiliser des forfaits de voyage eSIM.

> ⚠️ **Important** : Si vous achetez un iPhone chinois continental à double carte SIM physique, vous **ne pouvez installer aucune eSIM** (y compris les eSIM de voyage internationales) – sauf l'iPhone 17 Air. Il s'agit d'une limitation matérielle, pas d'un blocage logiciel.

---

## 9. Double SIM pour le travail et le personnel : Meilleures pratiques

De nombreux utilisateurs conservent un **numéro de travail** (eSIM) et un **numéro personnel** (carte SIM physique ou deuxième eSIM). Voici comment configurer proprement :

### Étiquetez clairement les lignes
`Réglages > Données cellulaires` → appuyez sur une ligne → `Étiquette du forfait cellulaire` → choisissez « Professionnel » ou « Personnel », ou créez une étiquette personnalisée.

### Choisissez la voix et les données par défaut
- **Ligne vocale par défaut** : Ligne à utiliser lorsque vous composez depuis l'application Téléphone native (vous pouvez toujours choisir par appel).
- **Données cellulaires** : Ligne qui utilise les données mobiles. Activez **Autoriser le basculement des données cellulaires** pour que le téléphone puisse utiliser temporairement les données de l'autre ligne si la principale perd le signal.

### Séparez les contacts
- Attribuez des contacts à une ligne spécifique : Modifier le contact → `Ligne préférée` → sélectionnez professionnel ou personnel.

### Empêchez l'itinérance accidentelle
- Désactivez **l'itinérance des données** pour la ligne professionnelle si elle a des tarifs internationaux élevés.

---

## 10. Tableau de dépannage – Scénarios double SIM

| Problème | Étape immédiate | Correctif à long terme |
|---------|----------------|----------------|
| La deuxième eSIM ne reçoit jamais de signal | Redémarrez l'iPhone, puis désactivez/réactivez la ligne | Si opérateur CDMA, passez à un forfait GSM |
| Les appels vont directement à la messagerie vocale (pas de sonnerie) | Désactivez « Silence appels inconnus » et le renvoi d'appel | Contactez l'opérateur pour réinitialiser T-ADS |
| Impossible de recevoir des SMS sur la deuxième ligne | Envoyez un SMS test depuis cette ligne vers n'importe quel numéro | Assurez-vous que la ligne n'est pas données uniquement ; l'opérateur doit peut-être activer les SMS |
| Deux eSIM mais les deux affichent « No Service » | Mode Avion on/off > vérifiez le verrouillage opérateur | Réinitialisez les réglages réseau |
| Échange de lignes et maintenant FaceTime/iMessage ne s'activent pas | Allez dans `Réglages > Messages > Envoyer & Recevoir` – sélectionnez manuellement les numéros | Déconnectez-vous d'Apple ID et reconnectez-vous |

Pour d'autres problèmes comme « eSIM liée à un autre appareil » ou « erreur de restauration DFU 53 », consultez notre **[bibliothèque complète de dépannage 16 cas](/faq/esim-deep-troubleshooting-guide-2026/)** .

---

## 11. Foire aux questions

**Q1 : Puis-je utiliser deux eSIM du même opérateur ?**  
R : Oui, à condition que votre opérateur autorise plusieurs profils eSIM sur un seul compte. Par exemple, T‑Mobile US prend en charge jusqu'à deux eSIM sur le même iPhone. Pour une liste complète des modèles d'iPhone compatibles, consultez le **[tableau de compatibilité iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/#2-global-iphone-17-models--esim-compatibility-table)**.

**Q2 : Les deux lignes prendront-elles en charge la 5G simultanément ?**  
R : Oui, sur iPhone 13 et plus récents (y compris l'iPhone 17), les deux lignes peuvent être en 5G (double veille 5G). Cependant, une seule ligne peut utiliser les données 5G à la fois ; l'autre utilise la 5G pour le repli vocal (VoNR).

**Q3 : Ma deuxième ligne fonctionne mais la première a cessé de fonctionner après l'avoir ajoutée – que s'est-il passé ?**  
R : Vous avez peut-être accidentellement échangé les paramètres de ligne principale. Allez dans `Réglages > Données cellulaires > Ligne vocale par défaut` et remettez-la.

**Q4 : La double eSIM décharge-t-elle plus la batterie que eSIM + SIM physique ?**  
R : Généralement, la double eSIM consomme légèrement moins d'énergie car il n'y a pas de lecteur de carte physique. Mais la différence est négligeable (2‑3 %).

**Q5 : Je voyage – puis-je utiliser une eSIM locale pour les données et conserver mon eSIM domestique pour les appels ?**  
R : Oui, meilleure pratique :  
- Définissez l'eSIM locale comme ligne de **Données cellulaires**.  
- Conservez l'eSIM domestique comme **Ligne vocale par défaut**.  
- Désactivez **l'itinérance des données** sur l'eSIM domestique pour éviter des frais élevés.  
- Activez **Autoriser le basculement des données cellulaires** pour que votre ligne domestique puisse utiliser les données de l'eSIM locale pour l'appel Wi‑Fi et les MMS.

Si vous changez fréquemment d'appareil pendant vos voyages, le **[guide de transfert eSIM multiplateforme](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** vous aidera à transférer votre numéro en toute transparence.

**Q6 : Pourquoi la deuxième eSIM disparaît-elle parfois après une mise à jour iOS ?**  
R : Bogue rare. Allez dans `Réglages > Données cellulaires` → si la ligne manque mais apparaît toujours sous « SIM disponibles », appuyez dessus et réactivez-la. Sinon, contactez l'opérateur pour renvoyer le profil.

**Q7 : Puis-je utiliser une configuration double SIM avec une Apple Watch ?**  
R : Oui. L'Apple Watch peut refléter **une** des lignes de l'iPhone. Choisissez la ligne que vous souhaitez sur la montre lors de la configuration.

---

## 12. Conseils professionnels finaux

- **Étiquetez vos lignes** immédiatement après la configuration – cela évite des confusions infinies.
- **Définissez des sonneries différentes** pour chaque ligne : `Réglages > Sons et vibrations > Sonnerie` → faites défiler vers le bas, vous pouvez attribuer par ligne.
- **Utilisez l'automatisation des raccourcis** pour changer la ligne vocale par défaut en fonction de l'heure (par exemple, heures de travail = ligne professionnelle ; soirées = personnel).
- **Avant de vendre votre appareil** : Allez dans `Réglages > Données cellulaires`, supprimez **toutes** les eSIM et retirez la carte SIM physique. Ensuite, effacez tout le contenu et les réglages. Pour un guide détaillé sur la suppression des eSIM et l'annulation des forfaits, consultez le **[Correctif #9 dans notre guide de dépannage](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.

> 📎 **Guides connexes sur ce site :**
> - [Guide de dépannage approfondi eSIM (16 cas réels)](/faq/esim-deep-troubleshooting-guide-2026/)
> - [Guide complet iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)
> - [Transfert eSIM multiplateforme 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)

---

*Basé sur les documents de support Apple, le comportement d'iOS 26 et les tests d'opérateurs en avril 2026. L'expérience réelle peut varier selon l'opérateur, la région et le modèle d'appareil.*