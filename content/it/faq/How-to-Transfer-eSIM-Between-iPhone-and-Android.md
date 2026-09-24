---
title: "Come Trasferire la eSIM tra iPhone e Android"
h1_title: "Come Trasferire una eSIM tra iPhone e Android"
description: "Sposta la tua eSIM tra iPhone e Android con un'app dell'operatore o un codice QR riemesso. Passaggi dettagliati in entrambe le direzioni, più soluzioni per gli errori di trasferimento comuni."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["eSIM cross-platform transfer", "eSIM transfer error", "iOS 18 eSIM", "eSIM carrier lock", "eSIM confirmation code", "eSIM no service", "eSIM APN settings", "eSIM troubleshooting", "eSIM activation failed", "transfer eSIM between iPhone and Android", "can't transfer eSIM to new iPhone", "Orange eSIM transfer"]
date: 2026-09-13T00:00:00Z
lastmod: 2026-09-13T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Aggiornato il"
  min_read: "min di lettura"
  toc: "Indice dei Contenuti"

breadcrumbs:
  home:
    text: "Home"
    url: "/"
  parent:
    text: "Centro Assistenza"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIM Popolari"
  item_suffix: "eSIM"
  items:
    - name: "eSIM USA"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM Germania"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Turchia"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Giappone"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM Cina"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Richiedi eSIM Gratuita"
  icon: "🎁"
  item_suffix: "eSIM Gratis"
  item_subtitle: "eSIM Gratis"
  items:
    - name: "eSIM Regno Unito"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Germania"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Thailandia"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "Domande Frequenti"
  items:
    - question: "Che cos'è l'attivazione eSIM e come funziona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Come si attiva una eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Come attivare la eSIM su iPhone (Tutti i Modelli)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Ultimo Elenco di Compatibilità eSIM"
      url: "/compatibility/"
---


> **Nota della Redazione:** Puoi trasferire una eSIM tra iPhone e Android solo quando il tuo operatore supporta il trasferimento cross-platform, e la maggior parte delle eSIM di viaggio non può essere spostata affatto. I metodi qui sotto seguono la documentazione ufficiale degli operatori e si concentrano sui trasferimenti che funzionano realmente oggi. Controlla prima la sezione degli operatori supportati per vedere se il tuo piano si qualifica.

Ecco la realtà fin da subito: una eSIM generalmente non può essere spostata direttamente tra iPhone e Android, perché le due piattaforme non condividono un protocollo di trasferimento. Le soluzioni alternative sono semplici, però — fai riemettere il profilo dal tuo operatore come codice QR, o trasferisci tramite l'app dell'operatore dove supportato. Entrambe le direzioni, più le eccezioni delle eSIM di viaggio, sono illustrate qui sotto.

## Che Cos'è un Trasferimento eSIM?

**Trova il tuo scenario qui sotto e salta direttamente al metodo giusto.**

| Il Tuo Scenario | Puoi Trasferire? | Miglior Metodo | Dove Andare |
| :--- | :--- | :--- | :--- |
| **iPhone → nuovo iPhone** | ✅ Sì (sempre) | Quick Transfer Apple | [Trasferimento Intra-Piattaforma](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → nuovo Samsung** | ✅ Sì (di solito) | Samsung Smart Switch | [Trasferimento Intra-Piattaforma](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (l'operatore supporta il trasferimento via app)** | ✅ Sì | App Operatore | [Metodo A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (l'operatore non supporta l'app)** | ✅ Sì | Ripiego Codice QR | [Metodo B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (operatore supportato)** | ✅ Sì | App Operatore o Codice QR | [Metodo B](#esim-transfer-from-iphone-to-android) |
| **eSIM di viaggio (Roami, Airalo, Holafly)** | ❌ No | Acquista un nuovo piano sul nuovo dispositivo | [Perché le eSIM di viaggio non si possono trasferire](#why-cant-travel-esims-be-transferred) |
| **L'operatore non supporta il trasferimento** | ✅ Sì (ripiego) | Contatta l'operatore per il codice QR | [Metodi di Ripiego](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Regola chiave:** Non esiste un **pulsante di trasferimento eSIM integrato da iOS ad Android** come esiste per da iPhone a iPhone. Il trasferimento cross-platform passa sempre **attraverso il tuo operatore** – sia tramite la loro app sia richiedendo un nuovo codice QR. Le eSIM di viaggio sono **solo per un singolo dispositivo** – acquistane una nuova sul tuo nuovo telefono.

**Non riesci a trasferire?** La maggior parte delle eSIM di viaggio (Roami, Airalo, Holafly) sono **solo per un singolo dispositivo** – dovrai acquistare un nuovo piano sul tuo nuovo telefono. Per le eSIM di operatori locali, il ripiego con il codice QR funziona sempre.

> **Limitazione chiave:** Non esiste un **trasferimento eSIM integrato da iOS ad Android** – devi passare dal tuo operatore. Questa guida ti accompagna attraverso ogni metodo supportato.

Principiante nella configurazione eSIM? La nostra [guida su come attivare una eSIM](/faq/how-to-activate-an-esim/) copre l'installazione da zero. Se il trasferimento fallisce a metà, la [Guida Approfondita alla Risoluzione Problemi eSIM](/faq/esim-deep-troubleshooting-guide-2026/) associa ogni messaggio di errore a una soluzione.


## Quale Metodo di Trasferimento eSIM Dovresti Usare?

| La Tua Situazione | Miglior Metodo | Tempo | Serve l'Operatore? |
| :--- | :--- | :--- | :--- |
| **Passaggio iPhone ↔ iPhone** | Quick Transfer Apple (Impostazioni > Cellulare > Aggiungi eSIM > Trasferisci) | 2 min | No (Apple lo gestisce) |
| **Passaggio Android ↔ Android (Samsung a Samsung, ecc.)** | Trasferimento specifico del marchio (Samsung: Gestore SIM > Aggiungi eSIM > Trasferisci) | 2 min | No (il marchio lo gestisce) |
| **Passaggio iPhone ↔ Android (iOS 18 / Android 16+)** | Trasferimento tramite app operatore | 3-5 min | Sì |
| **Passaggio iPhone ↔ Android (OS più vecchi)** | Codice QR riemesso dall'operatore | 5-10 min | Sì |
| **eSIM di viaggio (Roami, Airalo, Holafly)** | ❌ Impossibile trasferire – acquista un nuovo piano sul nuovo dispositivo | N/D | No – il provider non lo consente |
| **Il tuo operatore non supporta il trasferimento** | Ripiego codice QR (chiama l'operatore) | 10-20 min | Sì |


## Guida Completa al Trasferimento eSIM

Ecco la mappa del percorso passo dopo passo per chiunque sposti una eSIM su un nuovo dispositivo.

| Passaggio | Cosa Stai Pensando | Cosa Fare | Dove Trovarlo |
| :--- | :--- | :--- | :--- |
| **1. Determina il tuo scenario** | "Che tipo di passaggio sto facendo?" | Identifica: stesso ecosistema (iOS→iOS / Android→Android) o cross-platform (iOS↔Android)? | [Flusso Decisionale Rapido sopra](#quale-metodo-di-trasferimento-esim-dovresti-usare) |
| **2. Controlla le versioni OS** | "I miei telefoni sono abbastanza aggiornati?" | L'iPhone deve avere iOS 18+, l'Android deve avere Android 16+ per il trasferimento cross-platform nativo. | Aggiorna prima se non così. |
| **3. Controlla il blocco operatore** | "Il mio telefono è bloccato a un operatore?" | Impostazioni > Generali > Info > Blocco Operatore deve dire "Nessuna restrizione SIM". | [Prerequisiti sotto](#cosa-ti-serve-prima-di-iniziare-un-trasferimento-esim) |
| **4. Controlla il supporto dell'operatore** | "Il mio operatore lo consente?" | Apri l'app dell'operatore e cerca l'opzione di trasferimento eSIM. Oppure chiama e chiedi. | [Sezione operatori supportati sotto](#operatori-che-supportano-il-trasferimento-esim-cross-platform) |
| **5. Esegui il trasferimento** | "È ora di spostare il numero." | Segui i passaggi specifici per il tuo scenario. | [Metodo A](#esim-transfer-from-android-to-iphone) o [Metodo B](#esim-transfer-from-iphone-to-android) |
| **6. Configurazione post-trasferimento** | "Il mio numero è sul nuovo telefono – e adesso?" | Riattiva WhatsApp, iMessage, app 2FA, e testa gli SMS. | [Sezione Dopo il Trasferimento eSIM sotto](#spostare-whatsapp-imessage-e-2fa-dopo-un-trasferimento-esim) |
| **7. Risolvi se fallito** | "Non ha funzionato – e ora?" | Controlla l'errore, elimina il vecchio profilo, riprova, o usa il ripiego del codice QR. | [Tabella di risoluzione problemi sotto](#perché-il-mio-trasferimento-esim-è-fallito) |


## Cosa Ti Serve Prima di Iniziare un Trasferimento eSIM

**Per entrambe le direzioni:**
- Entrambi i dispositivi devono essere **sbloccati** (nessun **blocco operatore**). Per verificare su iPhone: `Impostazioni > Generali > Info` → `Blocco Operatore` deve dire "Nessuna restrizione SIM". **Questa è la ragione #1 per cui i trasferimenti falliscono** – se il tuo telefono è bloccato, non puoi trasferire la eSIM alla rete di un operatore diverso.
- Entrambi i dispositivi hanno il **Bluetooth attivato**.
- Entrambi i dispositivi sono connessi al **Wi‑Fi** (o almeno uno ha una connessione dati cellulare funzionante).
- La eSIM che vuoi trasferire è **attiva** sul dispositivo di origine (non già eliminata).
- Il tuo operatore **supporta il trasferimento cross‑platform** (vedi elenco sotto). Se no, salta alla sezione dei metodi di ripiego.

Principiante con i profili e i server SM‑DP+? La [spiegazione dell'attivazione eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) copre cosa succede realmente quando un profilo si sposta tra dispositivi.
- Il tuo **profilo eSIM** non è **scaduto** – alcuni profili hanno date di validità limitate.

**Per Android → iPhone:**
- L'iPhone deve avere **iOS 18 o successivo**.
- L'Android deve avere **Android 16 o successivo**.

**Per iPhone → Android:**
- L'iPhone deve avere **iOS 18 o successivo**.
- L'Android deve avere **Android 16 o successivo**.

> 🚨 **Avviso Critico – Non Eliminare Prima del Trasferimento:**
> **NON eliminare la eSIM dal tuo vecchio dispositivo prima di iniziare il trasferimento.** Se elimini prima la eSIM di origine, il profilo è perduto dal tuo dispositivo e il tuo operatore potrebbe non riuscire a trasferirlo sul nuovo dispositivo. Dovrai contattare il tuo operatore per un codice QR completamente nuovo – che può richiedere 24‑48 ore. Avvia sempre il trasferimento dal nuovo dispositivo per primo, o tieni la vecchia eSIM attiva finché la nuova non è confermata funzionante.

> 🚨 Se il tuo dispositivo ha un OS più vecchio, l'opzione di menu semplicemente non apparirà. Aggiorna prima. Se hai a che fare con un **profilo eSIM scaduto**, contatta il tuo operatore per un nuovo codice QR prima di iniziare il trasferimento.

La pagina [Supporto Google – eSIM su Pixel](https://support.google.com/pixelphone/answer/7086887) fornisce ulteriori dettagli per gli utenti Android che si preparano a trasferire la propria eSIM.


## Perché le eSIM di Viaggio Non Possono Essere Trasferite?

È la domanda #1 che riceviamo. Ecco perché:

| Motivo | Spiegazione |
| :--- | :--- |
| **Vincolo EID** | Ogni profilo eSIM è legato crittograficamente all'**EID** (eUICC Identifier) del dispositivo su cui è stato attivato. L'EID del tuo telefono è univoco – come un numero di serie per il tuo hardware eSIM. (Puoi vedere il tuo EID componendo `*#06#` sulla maggior parte dei telefoni.) |
| **Codici QR Monouso** | I codici QR delle eSIM di viaggio sono progettati per un **uso singolo**. Una volta scansionato, il codice QR viene invalidato sul server dell'operatore. È una funzione di sicurezza per prevenire frodi. |
| **Nessun Account Operatore** | Le eSIM di viaggio sono acquistate come prodotti autonomi – non hai un "account operatore" con servizio continuativo. Non c'è nessuno a cui accedere per richiedere un trasferimento. |
| **Progettate per la Comodità** | Le eSIM di viaggio scambiano la trasferibilità con la comodità. Otieni l'attivazione istantanea senza verifica dell'identità, ma il compromesso è che il profilo è vincolato a un dispositivo. |

**La conclusione:** Se stai usando una eSIM di viaggio (Roami, Airalo, Holafly, Nomad, ecc.), **non perdere tempo a provare a trasferirla**. Non funzionerà. Acquista semplicemente un nuovo piano sul tuo nuovo dispositivo. Il costo di una nuova eSIM di viaggio è di solito inferiore al tempo che spenderesti cercando di trasferire un profilo non trasferibile.

**E le eSIM degli operatori (postpagate/prepagate)?**
Le eSIM degli operatori sono diverse. Hai un account con l'operatore, e possono riemettere la tua eSIM su un nuovo dispositivo perché controllano il profilo sui loro server. Ecco perché le eSIM degli operatori possono essere trasferite, e quelle di viaggio no.


## Quale Metodo di Trasferimento eSIM È Giusto per Te?

| Caratteristica | Trasferimento via App Operatore | Codice QR Operatore | Trasferimento Nativo (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Funziona cross-platform?** | ✅ Sì | ✅ Sì | ❌ No (solo stesso ecosistema) |
| **Tempo richiesto** | 3-5 min | 5-10 min | 1-2 min |
| **Coinvolgimento dell'operatore** | Self-service tramite app | Serve contattare l'operatore | Nessuno |
| **Funziona in viaggio?** | ✅ Sì (con Wi-Fi) | ✅ Sì (con Wi-Fi) | ✅ Sì |
| **Tasso di successo** | Alto (se supportato) | Molto Alto (funziona sempre) | Molto Alto |
| **Ideale per** | Trasferimento rapido, operatori con supporto app | Qualsiasi operatore, ripiego quando l'app fallisce | Aggiornamenti di dispositivo nello stesso ecosistema |
| **Costo** | Di solito gratuito | Può costare $0‑25 per la riemissione del QR | Gratuito |


## Trasferimento eSIM da Android a iPhone

Questo è lo scenario più comune – passare da un Samsung, Pixel o altro Android a un nuovo iPhone. Il modo più affidabile per spostare il tuo numero è tramite l'app del tuo operatore.

### Passo dopo Passo

**Prima di iniziare:**
- Avere l'app del tuo operatore installata sul nuovo iPhone (o essere pronto ad accedere sul sito web dell'operatore).
- Conoscere il PIN del tuo account o le credenziali di accesso.
- **NON eliminare ancora la eSIM dal tuo Android.**

**Sul tuo iPhone (destinazione):**
1. Installa e apri l'app del tuo operatore (per esempio, l'app T‑Mobile, Verizon o AT&T).
2. Accedi e cerca un'opzione come "Attiva eSIM", "Cambia dispositivo" o "Trasferisci su nuovo dispositivo".
3. Segui le istruzioni per inserire l'**EID** e l'**IMEI** del tuo nuovo iPhone (mostrati sotto `Impostazioni` → `Generali` → `Info`).
4. L'operatore invia il tuo profilo eSIM al nuovo iPhone, o genera un codice QR da scansionare.
5. Sull'iPhone, vai su `Impostazioni` → `Cellulare` → `Aggiungi eSIM` e scansiona il codice QR se ne è stato generato uno.
6. Attendi "Attivazione completata". Il tuo numero è ora attivo sull'iPhone.
7. **Ora** puoi eliminare la eSIM dal tuo Android (Impostazioni > Connessioni > Gestore SIM > tocca la eSIM > Rimuovi).

**Consiglio iOS 18:** Se sei su iOS 18, il flusso "Aggiungi eSIM" è stato ridisegnato con uno scanner QR più evidente e una migliore gestione degli errori. Vedrai un indicatore di avanzamento durante il download del profilo.

✅ **Fatto.** Il tuo numero è ora attivo sull'iPhone. Se il tuo operatore non offre un'app, contattali per riemettere la tua eSIM come nuovo codice QR (vedi i metodi di ripiego sotto).

### E se il trasferimento tramite app non funziona?

Usa il **ripiego del codice QR dell'operatore**:

- Contatta il tuo operatore (chat, telefono o sito web).
- Dì loro che stai cambiando dispositivo e chiedi di **riemettere la tua eSIM come nuovo codice QR**.
- Scansiona il nuovo codice QR sull'iPhone: `Impostazioni` → `Cellulare` → `Aggiungi eSIM`.
- Completa l'attivazione.

Se vedi un errore **"impossibile attivare l'esim"** durante questo processo, controlla la tua connessione Wi‑Fi e riprova.


## Trasferimento eSIM da iPhone a Android

Non esiste un'opzione integrata "Trasferisci su Android" sull'iPhone. Il metodo affidabile è farsi riemettere la eSIM dal proprio operatore.

### Prerequisiti
- Il tuo nuovo telefono Android è **sbloccato**.
- Puoi contattare il tuo operatore (o accedere alla loro app/sito web).
- Il tuo Android ha **Android 16 o successivo**.
- **NON eliminare ancora la eSIM dal tuo iPhone.**

### Passaggi

**Contatta il tuo operatore (o usa la loro app):**
1. Dì loro che stai spostando la tua eSIM da un iPhone a un telefono Android.
2. Fornisci l'**EID** e l'**IMEI** del nuovo dispositivo Android (sotto `Impostazioni` → `Info sul telefono`).
3. Il tuo operatore riemette la tua eSIM come nuovo codice QR (o la invia tramite la loro app).

**Sul tuo Android (destinazione):**
1. Vai su `Impostazioni` → `Rete e internet` → `SIM` → `Aggiungi eSIM` (la dicitura varia in base al marchio).
2. Scansiona il codice QR fornito dall'operatore.
3. Segui le istruzioni per scaricare e attivare il profilo.
4. Attendi il completamento dell'attivazione.
5. **Ora** puoi eliminare la eSIM dal tuo iPhone (Impostazioni > Cellulare > tocca la eSIM > Rimuovi Piano Cellulare).

✅ Fatto. Il tuo numero ora vive sul telefono Android.

> ⚠️ **Importante**: Una volta completato il trasferimento, la eSIM è **rimossa permanentemente** dall'iPhone. Non puoi tornare indietro senza il tuo operatore. Assicurati di avere un'altra linea attiva o il Wi‑Fi prima di trasferire.


## Trasferire la eSIM su un Nuovo iPhone o Samsung

Sebbene il trasferimento cross‑platform sia il focus di questa guida, molti utenti vogliono semplicemente spostare una eSIM nello stesso ecosistema. Ecco come. (Passaggio a un iPhone 16 USA solo eSIM? La [guida all'attivazione iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) copre le specifiche del trasferimento durante la configurazione.)

### Trasferire la eSIM da iPhone a iPhone

Il **Quick Transfer** integrato di Apple è il metodo più semplice:

1. Durante la configurazione del tuo nuovo iPhone, scegli "Trasferisci eSIM da iPhone nelle vicinanze" quando richiesto.
2. Tieni entrambi i telefoni vicini con Bluetooth e Wi‑Fi attivati.
3. Conferma il trasferimento sul tuo vecchio iPhone.
4. Attendi 1‑2 minuti per il completamento del **download del profilo eSIM** sul nuovo dispositivo.

**Se il Quick Transfer non funziona:** Vai su Impostazioni > Cellulare sul tuo nuovo iPhone > Aggiungi eSIM > Trasferisci da iPhone nelle vicinanze.

**Se anche questo fallisce:** Usa il metodo del codice QR dell'operatore – contatta il tuo operatore per un nuovo codice QR.

### Trasferire la eSIM da Android a Android

I metodi di trasferimento Android variano in base al marchio:

**Samsung:** Impostazioni > Connessioni > Gestore SIM > Aggiungi eSIM > Trasferisci eSIM da vecchio dispositivo (segui le istruzioni sullo schermo). Funziona su Samsung Galaxy S21 e successivi, serie Z Flip/Z Fold.

**Google Pixel:** Durante la configurazione, potrebbe essere richiesto di trasferire la tua eSIM. In alternativa, usa l'app dell'operatore o richiedi un nuovo codice QR.

**Android generico:** Se il tuo marchio non offre il trasferimento integrato, usa il metodo di ripiego del codice QR dell'operatore.

### Confronto Trasferimento eSIM Cross-Platform vs. Intra-Platform

| Caratteristica | Cross‑Platform | Intra‑Platform |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/D | ✅ Quick Transfer funziona |
| **Android ↔ Android** | N/D | ✅ Metodi specifici del marchio |
| **iOS ↔ Android** | ✅ Coperto in questa guida | ❌ Non supportato direttamente |
| **Dipendenza dall'operatore** | Maggiore | Minore (Apple/Google lo gestiscono) |
| **Tempo richiesto** | 3-10 min | 1-2 min |
| **Tasso di successo** | Varia in base all'operatore | Generalmente alto |

Per come il comportamento eSIM differisce tra le generazioni iPhone (limiti di archiviazione, regole dual-SIM, varianti regionali), vedi il nostro [hub di compatibilità eSIM iPhone](/faq/iphone-11-esim-compatible/).


## Operatori Che Supportano il Trasferimento eSIM Cross-Platform

Il trasferimento eSIM cross-platform è ancora nuovo, e il supporto degli operatori si sta diffondendo gradualmente. Non esiste un elenco pubblico completo di ogni operatore supportato, e la disponibilità cambia spesso, quindi controlla il sito web o l'app del tuo operatore per lo stato attuale.

### Operatori Supportati Confermati

| Operatore | Regione | Metodo di Trasferimento | Limite di Trasferimento | Costo |
|---------|--------|-----------------|----------------|------|
| **Orange** | Francia, Europa | App Orange → "My eSIM space" → "Transfer to new device" | 3x all'anno | Gratuito |
| **SFR** | Francia | App SFR & Moi → "Manage my SIM" → "Transfer eSIM" | 5x all'anno | Gratuito |
| **T-Mobile** | USA | App T-Mobile → "Manage eSIM" → "Transfer to new device" | Illimitato | Gratuito |
| **Verizon** | USA | App My Verizon → "Activate or switch device" | Illimitato | Gratuito |
| **AT&T** | USA | App AT&T → "Activate eSIM" | Varia per piano | Gratuito (postpagato) |
| **EE** | Regno Unito | App EE → "Plan" → "eSIM transfer" | 3x all'anno | Gratuito |
| **Deutsche Telekom** | Germania | App Telekom → "eSIM transfer" | Illimitato | Gratuito |
| **Swisscom** | Svizzera | App Swisscom → "eSIM transfer" | 3x all'anno | Gratuito |
| **Bouygues** | Francia | Riemissione QR (tramite portale clienti) | 3x all'anno | Gratuito |
| **Free** | Francia | Riemissione QR (tramite portale clienti) | 2x all'anno | Gratuito |
| **Vodafone** | Regno Unito, Europa | App Vodafone → "eSIM transfer" | Varia per paese | Gratuito (postpagato) |
| **Google Fi** | USA, Globale | App Google Fi → "Activate on this device" | Illimitato | Gratuito |

### Le eSIM di Viaggio Non Sono Trasferibili

| Provider | Trasferibile? | Cosa Fare Invece |
|----------|---------------|-------------------|
| **Roami** | ❌ No | Acquista un nuovo piano sul tuo nuovo dispositivo |
| **Airalo** | ❌ No | Acquista un nuovo piano sul tuo nuovo dispositivo |
| **Holafly** | ❌ No | Acquista un nuovo piano sul tuo nuovo dispositivo |
| **Nomad** | ❌ No | Acquista un nuovo piano sul tuo nuovo dispositivo |

**Come verificare se il tuo operatore lo supporta?** Prova i passaggi del Metodo A o B. Se il tuo operatore non offre il trasferimento tramite app o un nuovo codice QR, usa i metodi di ripiego sotto.


## Metodi di Ripiego Quando il Trasferimento eSIM Cross‑Platform Non È Supportato

Se il tuo operatore non è nell'elenco, o vedi un **errore di trasferimento eSIM**, usa una di queste alternative:

### Codice QR Riemesso dall'Operatore
1. Chiama o chatta con il tuo operatore.
2. Dì loro: "Sto passando da Android a iPhone (o viceversa). Per favore riemetete la mia eSIM come nuovo codice QR."
3. Ti invieranno per email un codice QR o un link di attivazione.
4. Sul nuovo dispositivo, vai su `Impostazioni` → `Cellulare` → `Aggiungi eSIM` → `Usa codice QR` e scansiona.
5. La eSIM del vecchio dispositivo smetterà di funzionare dopo l'attivazione della nuova.

**Consiglio:** Alcuni operatori applicano una piccola commissione per la riemissione di una eSIM ($0‑25). Chiedi prima che lo facciano.

### Inserimento Manuale SM-DP+
Se il tuo operatore ti fornisce un **codice di attivazione** e un **indirizzo SM‑DP+** (l'indirizzo del server che consegna il profilo eSIM al tuo telefono), puoi aggiungere manualmente la eSIM sul nuovo dispositivo:
1. `Impostazioni` → `Cellulare` → `Aggiungi eSIM` → `Inserisci Dettagli Manualmente`.
2. Incolla l'indirizzo SM‑DP+ e il codice di attivazione.
3. Tocca `Avanti`. Questo funziona sia su iPhone che su Android.

### Acquistare un Nuovo Piano
Se stai usando una eSIM di viaggio (Roami, Airalo, Holafly), non perdere tempo a provare a trasferire – non funzionerà. Acquista semplicemente un nuovo piano sul tuo nuovo dispositivo — il nostro [confronto dei piani eSIM di viaggio](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) classifica i provider che vale la pena reinstallare.

> **Consiglio di transizione:** Il ripiego del codice QR è il metodo più affidabile per qualsiasi operatore, indipendentemente dal fatto che supportino il trasferimento tramite app. Può richiedere una telefonata, ma funziona sempre.


## Trasferimento eSIM o Nuova Attivazione?

A volte acquistare una nuova eSIM è più veloce del trasferimento. Ecco quando scegliere l'uno o l'altro:

| Fattore | Trasferimento | Nuova Attivazione | Quale È Meglio? |
|--------|----------|----------------|------------------|
| **Stai mantenendo lo stesso numero di telefono** | ✅ Mantieni il numero | ❌ Ottieni un nuovo numero | Vince il trasferimento |
| **Hai 2FA legata al tuo numero** | ✅ Mantieni l'accesso | ❌ Rischio di perdere l'accesso | Vince il trasferimento |
| **Il tuo operatore fa pagare il trasferimento** | Può costare $0‑25 | $0 (stai comunque acquistando nuovo) | Dipende dalla commissione |
| **eSIM di viaggio** | ❌ Impossibile | ✅ Facile | Vince la nuova attivazione |
| **Hai fretta (meno di 5 minuti)** | ⚠️ Può richiedere 5‑10 min | ✅ Scansione QR in 2 min | Vince la nuova attivazione |
| **Vuoi mantenere il piano/dati esistenti** | ✅ Mantieni i dati inutilizzati | ❌ Perdi i dati inutilizzati | Vince il trasferimento |

**Raccomandazione:** Se stai mantenendo lo stesso piano dell'operatore e vuoi mantenere il tuo numero di telefono, trasferisci. Se sei su una eSIM di viaggio o hai fretta, acquista semplicemente un nuovo piano sul tuo nuovo dispositivo.


## Perché il Mio Trasferimento eSIM È Fallito?

| Errore / Sintomo | Causa Più Probabile | Soluzione |
|----------------|-------------------|-----|
| "Trasferimento non disponibile – operatore non supportato" | Il tuo operatore non supporta il trasferimento cross‑platform. | Usa i metodi di ripiego sopra. |
| Il codice QR si scansiona ma poi dice "sessione scaduta" | Hai impiegato troppo tempo dopo aver generato il codice QR (è scaduto). | Ripeti il processo e scansiona immediatamente. |
| Android dice "Abbinamento fallito" | Autorizzazioni Bluetooth o rete locale bloccate. | Su iPhone: `Impostazioni > Privacy e Sicurezza > Rete Locale` – assicurati che `Impostazioni` sia ON. Su Android: disattiva "Scansione sicurezza Wi‑Fi" (di solito nelle impostazioni avanzate Wi‑Fi). |
| Il trasferimento parte ma si ferma al 50% | Segnale Wi‑Fi o cellulare debole. | Avvicina entrambi i telefoni al router. Disattiva la VPN su entrambi i dispositivi. |
| **"eSIM già vincolata a un altro dispositivo"** | Il profilo non è stato rilasciato correttamente dal vecchio dispositivo. | Sul vecchio dispositivo, vai su `Impostazioni > Cellulare` ed elimina manualmente la `Elimina eSIM` (se ancora visibile). Poi attendi 5 minuti e riprova. Se fallisce ancora, contatta l'operatore per il rilascio del profilo. |
| L'iPhone chiede un **codice di conferma** dopo la scansione | Il profilo eSIM ha un **codice di conferma eSIM** obbligatorio (raro). | Cerca il codice nell'email dell'operatore (spesso 4–8 cifre). Se non lo trovi, chiedi all'operatore. |
| Il doppio clic sul pulsante laterale non fa nulla (iPhone → Android) | Autenticazione biometrica non configurata o disattivata. | Configura Face ID / Touch ID, o disattiva temporaneamente "Richiedi Attenzione" per Face ID. |
| **eSIM nessun servizio** dopo il trasferimento | Impostazioni APN non configurate. | Configura l'APN manualmente (vedi tabella sotto). |
| **Profilo eSIM scaduto** | Il profilo ha una data di validità limitata. | Contatta il tuo operatore per un nuovo codice QR. |
| **"Nessuna opzione Aggiungi eSIM" su iPhone** | iPhone bloccato dall'operatore o con iOS più vecchio. | Controlla il blocco operatore in Impostazioni > Generali > Info. Aggiorna a iOS 18. |
| **"SIM non supportata" sul nuovo dispositivo** | Il nuovo dispositivo è bloccato a un operatore diverso. | Controlla il Blocco Operatore – deve dire "Nessuna restrizione SIM". |
| **Limite di trasferimento superato** | Hai trasferito questa eSIM troppe volte (alcuni operatori limitano a 3‑5 all'anno). | Contatta l'assistenza dell'operatore per reimpostare il limite o ottenere una nuova eSIM. |
| **"Trasferimento eSIM fallito" su Samsung** | Samsung Smart Switch potrebbe non supportare il profilo specifico dell'operatore. | Usa invece il ripiego del codice QR dell'operatore. |

### Configurazione Manuale APN

Se dopo il **trasferimento eSIM** riscontri **eSIM nessun servizio**, configura l'APN manualmente:

| Operatore | APN | Nome utente | Password |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (vuoto) | (vuoto) |
| **SFR** | sl2sfr | (vuoto) | (vuoto) |
| **Free** | free | (vuoto) | (vuoto) |
| **Bouygues** | ebouygtel.com | (vuoto) | (vuoto) |
| **T-Mobile (USA)** | fast.t-mobile.com | (vuoto) | (vuoto) |
| **AT&T (USA)** | nxgen | (vuoto) | (vuoto) |
| **Verizon (USA)** | vzwinternet | (vuoto) | (vuoto) |
| **Telekom (DE)** | internet.telekom | (vuoto) | (vuoto) |

### Ancora bloccato?
Raccogli queste informazioni prima di chiamare l'assistenza:
- IMEI e EID del dispositivo di origine
- IMEI e EID del dispositivo di destinazione
- Il messaggio di errore esatto (fai uno screenshot)
- Il tuo numero di account o numero di telefono


## Cosa Succede alla Vecchia eSIM Dopo il Trasferimento?

**Viene disattivata immediatamente.**

Il vecchio profilo eSIM può rimanere visibile brevemente sul vecchio dispositivo. Puoi eliminarlo manualmente:
`Impostazioni > Cellulare > tocca la vecchia eSIM > Elimina eSIM`.

> 💰 **Fatturazione**: Il tuo operatore continuerà ad addebitarti il piano. Il trasferimento non annulla il piano – sposta solo la SIM. Per annullare, devi contattare l'operatore separatamente.

Se sei preoccupato per gli errori di **eSIM vincolata a un altro dispositivo**, elimina sempre il vecchio profilo dal dispositivo di origine dopo che il trasferimento si è completato con successo.

### Cronologia Trasferimento vs. Eliminazione

| Azione | Cosa Succede | Quando Farla |
| :--- | :--- | :--- |
| **Trasferimento avviato** | L'operatore invia il profilo al nuovo dispositivo | Prima di eliminare la vecchia eSIM |
| **Nuova eSIM attivata** | Il nuovo dispositivo si connette alla rete | Dopo il completamento dell'attivazione |
| **Vecchia eSIM disattivata** | L'operatore disattiva il vecchio profilo | Automaticamente – può richiedere 1‑5 minuti |
| **Elimina la vecchia eSIM** | Rimuove il profilo inattivo dal vecchio dispositivo | Dopo aver confermato che il nuovo dispositivo funziona |


## Spostare WhatsApp, iMessage e 2FA Dopo un Trasferimento eSIM

Dopo aver trasferito con successo la tua eSIM, devi configurare le tue app di messaggistica e i servizi di autenticazione sul nuovo dispositivo.

### WhatsApp

WhatsApp usa il tuo numero di telefono per identificare il tuo account. Dopo il **trasferimento eSIM**:

1. Apri WhatsApp sul tuo nuovo dispositivo.
2. Inserisci il tuo numero di telefono (quello che hai trasferito).
3. Riceverai un codice di verifica via SMS o chiamata automatizzata al tuo numero.
4. Inserisci il codice – le tue chat ricompariranno se hai fatto un backup in precedenza.

**Consiglio:** Fai il backup delle chat prima di iniziare il trasferimento. Su iPhone: WhatsApp > Impostazioni > Chat > Backup Chat. Su Android: WhatsApp > Impostazioni > Chat > Backup.

**Problema comune WhatsApp:** Se non ricevi il codice di verifica via SMS, prova l'opzione "Chiamami" – WhatsApp chiamerà il tuo numero e leggerà il codice. Se anche questo fallisce, attendi 5 minuti e riprova (la rete dell'operatore potrebbe ancora stabilizzarsi).

### iMessage e FaceTime

1. Vai su `Impostazioni` → `Messaggi` e attiva `iMessage`.
2. Vai su `Impostazioni` → `FaceTime` e attiva `FaceTime`.
3. Attendi 1‑2 minuti per l'attivazione. Se dice "In attesa di attivazione", spegnilo e riaccendilo.
4. Verifica che il tuo numero sia selezionato: Impostazioni > Messaggi > Invia e Ricevi → seleziona il tuo numero eSIM.

### Autenticazione a Due Fattori e Verifica SMS

Poiché il tuo numero di telefono non è cambiato, i codici 2FA basati su SMS funzioneranno normalmente. Tuttavia, gli autenticatori basati su app (Google Authenticator, Microsoft Authenticator, Authy) potrebbero richiedere una nuova configurazione:

- **Authy:** I tuoi token sono crittografati e salvati nel cloud – basta accedere sul nuovo dispositivo.
- **Google Authenticator:** Dovrai trasferire i tuoi account individualmente o usare la funzione "Trasferisci account".
- **Microsoft Authenticator:** Usa la funzione di backup per ripristinare sul nuovo dispositivo.
- **2FA SMS:** Verifica richiedendo un codice di verifica dalla tua banca o dal provider email per confermare che la consegna SMS funzioni.

### App Bancarie e Servizi Finanziari

La maggior parte delle banche rileverà il cambio di dispositivo e richiederà una nuova autenticazione. Tieni pronte le tue credenziali di accesso e qualsiasi dispositivo token fisico.

Per ulteriore aiuto con la migrazione delle app dopo il **trasferimento eSIM**, vedi la nostra [guida alla configurazione eSIM](/faq/how-to-activate-an-esim/).


## Migliori Pratiche per Evitare Grattacapi con il Trasferimento eSIM

✅ **Prima di trasferire:**
- Controlla il supporto dell'operatore (prova il menu – se c'è, è supportato).
- Aggiorna entrambi i telefoni all'ultimo OS (iOS 18 / Android 16).
- Carica entrambi i telefoni oltre il 30%.
- Disattiva temporaneamente VPN e ad‑blocker.
- Verifica che il tuo **profilo eSIM** non sia **scaduto**.
- Fai il backup di WhatsApp e delle altre app di messaggistica.
- **NON eliminare ancora la eSIM dal vecchio dispositivo.**

✅ **Durante il trasferimento:**
- Tieni i telefoni entro 10 cm (4 pollici) l'uno dall'altro.
- Non cambiare app o bloccare lo schermo.
- Non spegnere il Bluetooth o il Wi‑Fi.
- Attendi il messaggio di conferma – non dare per scontato che sia fatto.

✅ **Dopo il trasferimento:**
- Testa chiamate e dati sul nuovo dispositivo.
- Elimina la vecchia eSIM dal dispositivo di origine per evitare confusione.
- Tieni il Wi‑Fi del vecchio dispositivo acceso per almeno un'ora – alcuni operatori necessitano di un handshake finale.
- Riattiva WhatsApp, iMessage e le app 2FA.
- Testa i codici di verifica SMS della tua banca.
- Imposta un promemoria per annullare il vecchio piano se stai cambiando completamente operatore.


## Viaggiare e Trasferire la eSIM

Se stai viaggiando all'estero e devi trasferire la tua eSIM, ecco alcuni punti importanti. E se il trasferimento non può essere salvato durante il viaggio, l'uscita più veloce di solito è acquistare un piano locale — vedi la [guida ai piani eSIM USA](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) o la [guida all'acquisto eSIM Regno Unito](/faq/how-to-buy-a-uk-esim/) a seconda della destinazione:

### Trasferire una eSIM Durante il Viaggio
- Il trasferimento cross‑platform funziona **in tutto il mondo** purché il tuo operatore lo supporti.
- Assicurati di avere una connessione Wi‑Fi stabile (hotel, caffè) prima di iniziare.
- Se il trasferimento fallisce, il ripiego del codice QR dell'operatore è la tua migliore opzione.
- Controlla le **impostazioni APN eSIM** dopo il trasferimento – alcuni operatori richiedono la configurazione manuale.

### Operatori Francesi e Viaggi
- **Orange** e **SFR** consentono il trasferimento cross-platform ovunque tu sia.
- **Free** e **Bouygues** richiedono la riemissione di un codice QR – fallo prima di partire.
- Per le **eSIM di viaggio**, ricorda che generalmente **non sono trasferibili** – acquista un nuovo piano sul tuo nuovo dispositivo.

### Come Contattare gli Operatori dall'Estero

| Operatore | Metodo di Contatto Assistenza | Note |
|---------|------------------------|-------|
| **Orange** | Chat app Orange, supporto WhatsApp, o telefono | 24/7 nella maggior parte delle regioni |
| **SFR** | Chat app SFR & Moi, telefono | Orari limitati |
| **T-Mobile** | Chat app T‑Mobile, iMessage, telefono | Supporto 24/7 negli USA |
| **Verizon** | Chat app My Verizon, telefono | Supporto 24/7 |
| **AT&T** | Chat app AT&T, telefono | Orari limitati a livello internazionale |
| **EE** | Chat app EE, telefono | Supporto 24/7 nel Regno Unito |

**Consiglio:** Scarica l'app del tuo operatore e salva le informazioni di contatto dell'assistenza prima di viaggiare. Alcuni operatori richiedono la verifica via SMS per accedere – se sei a metà trasferimento, questo potrebbe non funzionare.

### Cosa Fare Se il Tuo Trasferimento Fallisce Durante il Viaggio

1. Connettiti al Wi‑Fi gratuito più vicino (aeroporti, hotel, caffè).
2. Contatta l'assistenza del tuo operatore via email o app di messaggistica.
3. Chiedi di riemettere la tua eSIM come codice QR.
4. Scansiona il codice QR sul tuo nuovo dispositivo.

### Consigli per i Globetrotter
- Tieni sempre una copia di backup dei tuoi codici QR eSIM.
- Se cambi telefono a metà viaggio, preferisci il trasferimento nativo al codice QR quando possibile.
- Per più destinazioni, considera un piano eSIM globale che copra più paesi.
- Salva le informazioni di contatto dell'assistenza del tuo operatore prima di viaggiare.

Per saperne di più sull'uso delle eSIM in viaggio, vedi la nostra [guida eSIM di Viaggio 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Domande Frequenti

**D1: Posso trasferire una eSIM solo dati (come una eSIM di viaggio)?**
No. La maggior parte delle eSIM di viaggio (Roami, Airalo, Holafly, Nomad, ecc.) non supporta il trasferimento cross‑platform. Sono progettate per essere installate una volta per dispositivo. Dovrai acquistare un nuovo piano sul tuo nuovo telefono. Vedi "Perché le eSIM di Viaggio Non Possono Essere Trasferite?" sopra per la spiegazione tecnica.

**D2: Il trasferimento funziona tra un iPhone 11 e un Samsung S24?**
Sì – purché entrambi soddisfino i requisiti del OS. L'iPhone 11 supporta iOS 18 (gira fino a iOS 18). Il Samsung S24 supporta Android 16. La generazione hardware non conta; conta solo la versione del OS.

**D3: L'app del mio operatore non offre un trasferimento eSIM. Com'è possibile?**
Non ogni operatore supporta il trasferimento eSIM tramite app. Se il tuo operatore non lo offre, usa il ripiego del codice QR dell'operatore: contatta il tuo operatore e chiedi di riemettere la tua eSIM come nuovo codice QR. Alcuni operatori applicano una piccola commissione per questo ($0‑25).

**D4: I miei codici WhatsApp / iMessage / 2FA funzioneranno ancora dopo il trasferimento?**
WhatsApp usa il tuo numero di telefono – rileverà il cambio SIM e potrebbe chiedere una nuova verifica (di solito automatica). iMessage su iPhone usa il numero eSIM e dovrebbe riattivarsi entro un minuto. Per la 2FA, i servizi che inviano SMS al tuo numero funzioneranno normalmente – il numero non è cambiato. Vedi la Sezione 10 per i passaggi di migrazione dettagliati.

**D5: Posso trasferire la stessa eSIM avanti e indietro più volte?**
Sì, ma ogni trasferimento richiede lo stesso processo. Alcuni operatori limitano quante volte una eSIM può essere trasferita ogni anno (es. 3‑5 volte). Se raggiungi il limite, contatta il tuo operatore per aiuto.

**D6: E le configurazioni dual‑SIM eSIM + SIM fisica?**
Il trasferimento sposta solo la eSIM. La SIM fisica resta nel dispositivo di origine. Se vuoi spostare entrambe, dovrai trasferire la eSIM (usando questa guida) e spostare fisicamente la scheda nano‑SIM sul nuovo dispositivo. Per ottimizzare l'esperienza dual‑SIM dopo il trasferimento, consulta la nostra **[La Doppia eSIM Non Funziona? 12 Soluzioni per iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**D7: E se ricevo un errore "profilo eSIM scaduto" durante il trasferimento?**
Contatta il tuo operatore per ottenere un nuovo codice QR – la riemissione di solito è gratuita. Assicurati di attivare il nuovo codice QR immediatamente (entro 30 minuti) per evitare che scada di nuovo.

**D8: Perché il blocco del mio operatore mi impedisce di trasferire?**
Se il tuo telefono è sotto **blocco operatore**, puoi trasferire una eSIM solo a un dispositivo dello stesso operatore. Contatta il tuo operatore per sbloccare il dispositivo prima del trasferimento. Su iPhone: Impostazioni > Generali > Info > Blocco Operatore deve dire "Nessuna restrizione SIM".

**D9: Posso trasferire una eSIM Orange a un dispositivo non Orange?**
Sì, se il tuo dispositivo è sbloccato e il tuo piano Orange lo consente. Il **trasferimento eSIM Orange** è supportato tramite l'app Orange o il trasferimento nativo. Orange consente fino a 3 trasferimenti all'anno.

**D10: Il trasferimento funziona con una eSIM Free?**
No – Free non supporta il trasferimento cross‑platform. Usa il metodo di ripiego del codice QR dal portale clienti di Free. Free consente fino a 2 trasferimenti all'anno.

**D11: Che cos'è un codice di conferma eSIM e dove lo trovo?**
Alcuni profili eSIM hanno un **codice di conferma eSIM** obbligatorio – tipicamente 4‑8 cifre. Cercalo nell'email dell'operatore o nelle istruzioni di attivazione. Se non lo trovi, chiedi al tuo operatore.

**D12: Cosa significa "eSIM non si trasferisce al nuovo telefono"?**
Di solito significa che il tuo operatore non supporta il trasferimento, il codice QR è scaduto, la vecchia eSIM è ancora attiva, o il nuovo dispositivo è bloccato dall'operatore. Elimina prima la vecchia eSIM (se ancora visibile), poi riprova. Vedi la Sezione 7 per la tabella completa di risoluzione dei problemi.

**D13: Come risolvo "attivazione eSIM fallita" dopo il trasferimento?**
Controlla la tua connessione Wi‑Fi, riavvia entrambi i dispositivi, e riprova. Se fallisce ancora, usa il metodo di inserimento manuale con l'indirizzo SM‑DP+ dall'email del tuo operatore.

**D14: Il trasferimento della mia eSIM annulla il mio piano?**
No – trasferire la eSIM sposta semplicemente il profilo SIM su un nuovo dispositivo. Il tuo piano (e la fatturazione) continua come prima. Per annullare il piano, devi contattare il tuo operatore separatamente.

**D15: Posso trasferire una eSIM se l'ho già eliminata dal vecchio telefono?**
Sì, ma è più complicato. Se hai eliminato la eSIM prima di iniziare il trasferimento, contatta il tuo operatore e chiedi di riemettere la tua eSIM come nuovo codice QR. Possono farlo perché il tuo profilo esiste ancora sui loro server.

**D16: Quanto costa riemettere un codice QR eSIM?**
La maggior parte degli operatori riemette le eSIM gratuitamente (specialmente i piani postpagati). Alcuni operatori prepagati o MVNO possono applicare una piccola commissione ($5‑25). Chiedi prima di richiedere la riemissione.

**D17: Posso trasferire una eSIM Vodafone a un dispositivo non Vodafone?**
Sì, purché il tuo dispositivo sia sbloccato e il tuo piano Vodafone consenta il trasferimento eSIM. Vodafone supporta il trasferimento tramite la loro app nella maggior parte dei paesi. Controlla l'app Vodafone per l'opzione "eSIM transfer".

**D18: E se raggiungo il limite di trasferimento del mio operatore?**
Alcuni operatori limitano i trasferimenti a 3‑5 all'anno. Se raggiungi il limite, contatta l'assistenza dell'operatore – spesso possono reimpostare il limite o emettere manualmente un nuovo codice QR eSIM (aggirando il sistema di trasferimento).

**D19: Posso trasferire due eSIM contemporaneamente (doppia eSIM)?**
Sì, ma devi trasferirle **una alla volta**. Ogni profilo eSIM è indipendente e deve essere trasferito separatamente usando lo stesso processo. Se hai due eSIM attive sul vecchio dispositivo, trasferisci prima la eSIM principale, poi quella secondaria.

**D20: Qual è la differenza tra trasferimento eSIM e riemissione eSIM?**
Il trasferimento sposta il tuo profilo esistente su un nuovo dispositivo (mantenendo il tuo numero e piano). La riemissione crea un profilo eSIM completamente nuovo per lo stesso numero – il vecchio profilo è disattivato permanentemente. La riemissione è il metodo di ripiego quando il trasferimento non è supportato dal tuo operatore.

---

## Conclusione Finale

La capacità di trasferire le eSIM tra iPhone e Android senza l'intervento dell'operatore è una **rivoluzione del 2026**. Rimuove l'ultimo grande punto di attrito per il cambio di ecosistema. Purché il tuo operatore sia nell'elenco dei supportati e entrambi i telefoni siano aggiornati, puoi spostare il tuo numero in meno di un minuto.

**Ricorda**:
- Se il tuo operatore non è supportato, il ripiego del codice QR funziona comunque – richiede solo una telefonata.
- Per le eSIM di viaggio, trattale come monouso; acquistane di nuove su ogni dispositivo.
- **Non eliminare mai la vecchia eSIM prima di iniziare il trasferimento** – questo è l'errore più comune.
- Controlla il blocco operatore prima di iniziare – è richiesto "Nessuna restrizione SIM".
- Alcuni operatori limitano i trasferimenti all'anno – verifica prima di iniziare.

Se incontri messaggi di **errore di trasferimento eSIM** persistenti, la nostra **[Guida Approfondita alla Risoluzione Problemi eSIM (16 casi reali)](/faq/esim-deep-troubleshooting-guide-2026/)** copre le soluzioni avanzate.

👉 **Passando a un piano di viaggio?** Vedi la [eSIM per gli USA](/united-states-esim/) o la [eSIM per l'Europa](/europe-esim/) una volta completato il trasferimento.

👉 **Non sei sicuro che il tuo nuovo telefono supporti la eSIM?** Controlla il nostro **[elenco completo di compatibilità](/compatibility/)** prima di iniziare.

👉 **Stai testando una eSIM di viaggio sul tuo nuovo dispositivo?** Scarica una **[eSIM di prova gratuita Roami](/free-esim/)** per confermare che tutto funzioni.

---

*Informazioni basate sulla documentazione ufficiale Apple e Android, sugli standard GSMA e sulle indicazioni degli operatori a settembre 2026. Funzionalità e supporto degli operatori sono soggetti a modifiche.*
## Fonti

- [GSMA — specifica eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Supporto Apple — Configurare eSIM su iPhone](https://support.apple.com/en-us/HT212780)
- [Supporto Google — Configurare una eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Supporto Google — eSIM Android](https://support.google.com/android/answer/11241215)