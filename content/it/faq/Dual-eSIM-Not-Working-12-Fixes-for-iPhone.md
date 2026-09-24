---
title: "La doppia eSIM non funziona? 12 soluzioni per iPhone"
h1_title: "Come risolvere la doppia eSIM che non funziona su iPhone: 12 soluzioni"
description: "La doppia eSIM non funziona? Risolvi 12 problemi iPhone: instradamento chiamate, configurazione VoLTE, consumo batteria e controlli del blocco operatore per iPhone 16 e iOS 18."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["doppia esim non funziona", "iPhone dual sim nessun servizio", "problema segnale doppia esim", "blocco operatore esim", "troubleshooting doppia esim", "attivazione doppia esim fallita", "iOS 18 esim", "impostazioni APN esim", "codice di conferma esim", "doppia esim nessun servizio"]
date: 2026-09-14T00:00:00Z
lastmod: 2026-09-14T00:00:00Z
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
  toc: "Indice dei contenuti"

breadcrumbs:
  home:
    text: "Home"
    url: "/"
  parent:
    text: "Centro Assistenza"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIM più popolari"
  item_suffix: "eSIM"
  items:
    - name: "USA eSIM"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Germania"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turchia"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Giappone"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "Cina"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Riscatta una eSIM gratuita"
  icon: "🎁"
  item_suffix: "eSIM gratuita"
  item_subtitle: "eSIM gratuita"
  items:
    - name: "Regno Unito"
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
  title: "Domande frequenti"
  items:
    - question: "Che cos'è l'attivazione eSIM e come funziona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Come si attiva una eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Come attivare l'eSIM su iPhone (tutti i modelli)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Elenco compatibilità eSIM più recente"
      url: "/compatibility/"
---


> **Nota della redazione:** una doppia eSIM che perde una linea è quasi sempre un blocco operatore, un APN configurato male o un'impostazione dual SIM — non un piano morto. Ogni soluzione qui sotto segue la documentazione ufficiale Apple e gli standard GSMA e punta a un sintomo specifico. Percorri la tabella diagnostica per trovare la soluzione esatta al tuo errore.
> 
> **Punti chiave:** i limiti di VoLTE o del piano sono la ragione più comune per cui una linea non può fare o ricevere chiamate. I problemi di instradamento delle chiamate in arrivo spesso si risolvono disattivando e riattivando le Chiamate Wi‑Fi. Gli iPhone sono dual standby, non dual active – "Nessun servizio" sull'altra linea durante le chiamate è normale. Controlla il Blocco operatore in Impostazioni (`Nessuna restrizione SIM`) se non riesci ad aggiungere una seconda eSIM. Il consumo batteria della doppia eSIM si riduce disattivando il 5G sulla linea con segnale più debole.

La maggior parte dei problemi di doppia eSIM sull'iPhone risale a cinque cause: un blocco operatore, un limite del piano o di VoLTE, impostazioni di Roaming dati o linea predefinita, il normale comportamento dual standby che sembra solo un guasto, o un glitch iOS che un ripristino delle impostazioni risolve. Abbina il tuo sintomo nell'indice sotto e applica la soluzione corrispondente — la maggior parte richiede meno di cinque minuti.


## Come risolvere la doppia eSIM che non funziona

**Il tuo telefono ha problemi di doppia eSIM. Quale?**

| Il tuo sintomo | Vai alla soluzione |
|--------------|-------------|
| **La seconda eSIM indica "Nessun servizio"** ma la prima funziona | [Soluzione #2](#why-one-dual-esim-line-shows-no-service) |
| **Puoi chiamare ma NON puoi ricevere chiamate** | [Soluzione #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Durante una chiamata, l'altra linea indica "Nessun servizio"** | [Soluzione #4](#one-line-showing-no-service-during-a-call-is-normal) – è normale! |
| **Non riesci ad aggiungere la seconda eSIM – errore "blocco operatore"** | [Soluzione #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **La batteria si scarica più velocemente con due linee** | [Soluzione #6](#how-to-reduce-dual-esim-battery-drain) |
| **SIM fisica non riconosciuta** | [Soluzione #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **iPhone dalla Cina – nessuna opzione eSIM** | [Soluzione #8](#dual-esim-in-china-hong-kong-and-macau) – limite hardware |
| **I dati funzionano ma niente internet (problema APN)** | [Soluzione #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – configurazione APN |
| **eSIM eliminata per sbaglio** | [FAQ #9](#frequently-asked-questions) – dipende dal fornitore |
| **Non sei sicuro – qualcos'altro** | [Tabella completa di troubleshooting](#dual-esim-troubleshooting-table) |

> 💡 **Concetto chiave:** se stai usando **due linee su un solo iPhone**, gli iPhone sono **dual standby, non dual active** – quando sei in chiamata, l'altra linea dirà temporaneamente "Nessun servizio". È un **comportamento normale** (vedi Soluzione #4). Non perdere tempo a "sistemarlo".

Se i tuoi problemi dual SIM risalgono a un'installazione malriuscita, parti dalla [guida generale all'attivazione eSIM](/faq/how-to-activate-an-esim/), poi percorri le soluzioni qui sotto — e per qualsiasi messaggio di errore che questa pagina non nomina, la [Guida approfondita al troubleshooting eSIM](/faq/esim-deep-troubleshooting-guide-2026/) copre ogni caso in profondità.


## Guida completa al troubleshooting della doppia eSIM

Ecco il percorso che la maggior parte degli utenti iPhone segue quando la doppia eSIM non funziona. Usalo per tracciare dove ti trovi.

| Passaggio | Cosa succede | Cosa fare | Dove trovarlo |
| :--- | :--- | :--- | :--- |
| **1. Identifica il sintomo** | "La mia seconda eSIM non ha segnale." / "Non posso ricevere chiamate." / "La batteria si scarica in fretta." | Abbina il tuo sintomo alla tabella di Diagnosi Rapida sopra. | [Diagnosi Rapida in 10 secondi](#dual-esim-quick-diagnostic-index) |
| **2. Verifica se è comportamento normale** | "Durante una chiamata, la mia altra linea mostra Nessun servizio." | È **normale** per gli iPhone dual standby. Salta alla Soluzione #4. | [Soluzione #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Escludi il blocco operatore** | "Non riesco ad aggiungere una seconda eSIM." | Controlla il Blocco operatore in Impostazioni. Deve indicare "Nessuna restrizione SIM". | [Soluzione #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Applica la soluzione** | Segui la soluzione specifica per il tuo sintomo. | Una delle 12 soluzioni qui sotto risolverà il tuo problema. | [Soluzioni #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. Ancora non funziona?** | "Nessuna delle soluzioni ha funzionato." | Usa le opzioni di riserva nella tabella di troubleshooting. | [Tabella di troubleshooting](#dual-esim-troubleshooting-table) |


## Indice diagnostico rapido della doppia eSIM

| Sintomo | Causa più probabile | Sezione della soluzione |
|---------|-------------------|--------------|
| La seconda eSIM indica "Nessun servizio" ma la prima funziona | Problema di VoLTE o ordine delle linee | [#2](#why-one-dual-esim-line-shows-no-service) |
| Un numero può chiamare ma non può ricevere chiamate | Instradamento chiamate in arrivo non corrispondente | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Durante una chiamata, l'altra linea indica "Nessun servizio" | L'iPhone usa una rete dati alla volta (normale) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| Non riesci ad aggiungere la seconda eSIM – errore "blocco operatore" | Dispositivo bloccato sul primo operatore | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| La doppia eSIM funziona ma scarica la batteria più in fretta | Entrambe le linee cercano attivamente | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + SIM fisica: la SIM fisica non viene riconosciuta | Problema allo slot SIM o scheda incompatibile | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| I dati mostrano le tacche di segnale ma niente internet | Impostazioni APN mancanti o errate | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## Quali sono le tue opzioni di doppia eSIM su iPhone?

Da iPhone XS, XR e tutti i modelli successivi (incluso iPhone 16), Apple supporta la doppia eSIM (due eSIM attive contemporaneamente) su iPhone 13 e successivi. I modelli non-USA supportano anche una eSIM più una nano-SIM fisica. I modelli della Cina continentale a doppia SIM fisica non hanno alcun supporto eSIM, tranne l'iPhone 16.

La tua configurazione di **doppia eSIM** dipende dal modello e dalla regione del tuo iPhone:

| Configurazione | Modelli supportati | Linee attive max |
|---------------|------------------|------------------|
| **Doppia eSIM** | iPhone 13 e successivi (inclusi tutti i modelli iPhone 16) | 2 |
| **1 eSIM + 1 nano-SIM fisica** | Tutti gli iPhone con slot SIM (modelli non-USA, e modelli USA prima dell'iPhone 14) | 2 |
| **Solo 1 SIM fisica** | iPhone più vecchi (pre-XS) | 1 |
| **2 SIM fisiche** | Modelli specifici della Cina continentale, Hong Kong, Macao con doppio slot SIM (es. versione cinese dell'iPhone 16) | 2 |

Per un elenco completo di iPhone compatibili, [verifica la compatibilità dual eSIM del tuo iPhone](/compatibility/).


## Perché una linea della doppia eSIM mostra "Nessun servizio"

Se una delle tue linee dual eSIM può usare i dati ma non può fare o ricevere chiamate — **o mostra "Nessun servizio" del tutto** — le cause più comuni nel 2026 sono:

- **VoLTE / VoNR non è abilitato** per quella linea. Alcuni operatori disattivano la voce-su-dati in roaming sui piani eSIM, lasciando la linea solo dati. (Modo semplice per verificare: se puoi usare i dati ma non puoi chiamare, è probabilmente questo.)
- **Ordine delle linee**. iOS instrada la voce alla tua *linea vocale predefinita*; una linea secondaria impostata solo dati non può fare o ricevere chiamate.
- **Il piano non include la voce**. Alcune eSIM di viaggio sono solo dati per progetto e non hanno alcun servizio vocale. In questo caso, vedrai le tacche di segnale ma il tentativo di chiamata fallirà.

> **Nota:** le reti legacy 3G/CDMA sono state ritirate negli USA e in Giappone. Verizon e US Cellular hanno spento il CDMA nel 2022-2024, e au/KDDI ha terminato il 3G nel 2022. Nel 2026, una linea con "nessun servizio per la voce" è quasi sempre un problema di VoLTE, piano o ordine delle linee - non CDMA.

### Soluzioni
- **Imposta la linea interessata come linea vocale predefinita**: `Impostazioni > Cellulari > Linea vocale predefinita`.
- **Attiva il VoLTE**: `Impostazioni > Cellulari > [linea] > Voce e dati`, poi seleziona LTE o 5G (VoLTE/VoNR).
- **Conferma che il piano includa la voce**. Se è una eSIM di viaggio solo dati, mantieni la linea di casa come linea vocale e usa la eSIM solo per i dati.
- **Contatta il tuo operatore** per verificare che la voce-su-LTE/5G sia abilitata per il tuo numero in roaming.

Per un confronto più approfondito delle reti degli operatori USA, consulta il nostro **confronto reti operatori USA** nella [guida piani eSIM USA](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/).


## Una linea della doppia eSIM che non può ricevere chiamate

**Sintomo**: la linea A funziona bene. La linea B può fare chiamate in uscita, ma le chiamate in arrivo verso B vanno dritte alla segreteria o suonano come "non disponibile".

**Causa radicale**: una non corrispondenza nell'instradamento delle chiamate della rete. Quando la linea B ha recentemente cambiato tra 5G e LTE, o ha usato le Chiamate Wi-Fi, la rete dell'operatore può ancora tentare di instradare le chiamate in arrivo per il percorso sbagliato.

**Analogia:** immagina che l'operatore abbia una vecchia rubrica che indica ancora il tuo telefono alla tua casa precedente. Quando qualcuno chiama, va nel posto sbagliato. Alternare le Chiamate Wi‑Fi aggiorna la rubrica.

### Soluzione rapida sul telefono
1. Disattiva temporaneamente le **Chiamate Wi‑Fi**: `Impostazioni > Cellulari > Linea B > Chiamate Wi‑Fi` → OFF.
2. Riavvia l'iPhone.
3. Riattiva le Chiamate Wi‑Fi.

### Soluzione dell'operatore chiamando l'assistenza
Chiedi al tuo operatore di **resettare l'instradamento delle chiamate** o **rinfrescare la linea** per questo numero. Di solito ha effetto poco dopo che l'operatore ha riprovisionato la linea. Per altri problemi di instradamento e relativi alle chiamate, vedi la **[Soluzione 3 sopra](#a-dual-esim-line-that-cannot-receive-calls)**.

### Prevenire la ricorrenza
- Evita di alternare rapidamente tra 5G/LTE (mantieni una modalità per almeno qualche ora).
- Se viaggi spesso, mantieni il **Roaming dati** DISATTIVO per la linea che non ha bisogno di dati.


## Una linea che mostra "Nessun servizio" durante una chiamata è normale

**Sintomo**: sei in chiamata usando la linea A. Quando controlli, la linea B mostra "Nessun servizio".

**Spiegazione**: gli iPhone sono **dual standby, non dual active** (noto anche come DSDS – Dual SIM Dual Standby). Solo una linea può mantenere una connessione cellulare alla volta. Durante una chiamata, l'altra linea è temporaneamente irraggiungibile. Appena la chiamata finisce, entrambe le linee si riconnettono. **Non è un guasto della doppia eSIM** – è per progetto.

### Cosa puoi fare
- **Attiva le Chiamate Wi‑Fi su entrambe le linee** – così la linea inattiva può usare il Wi-Fi per ricevere chiamate mentre sei sull'altra linea. La [documentazione sul dual standby](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) di Apple lo spiega più in dettaglio.
- **Attiva "Consenti cambio dati cellulari"** – sotto `Impostazioni > Cellulari > Dati cellulari`. Questo permette alla linea non-dati di usare la connessione della linea dati per le Chiamate Wi-Fi.

> 📌 Nota: alcuni operatori non supportano le Chiamate Wi‑Fi simultaneamente su entrambe le linee. Verifica con il tuo operatore.


## La doppia eSIM non funziona su un telefono bloccato dall'operatore

Se non riesci ad aggiungere una seconda eSIM o SIM fisica:
- Il tuo iPhone potrebbe essere **bloccato dall'operatore** al primo operatore.
- Per verificare: `Impostazioni > Generali > Info` → scorri fino a **Blocco operatore**. Deve indicare "Nessuna restrizione SIM".

### Cosa fare se il telefono è bloccato
- Contatta il tuo operatore per richiedere lo sblocco. Gli operatori USA devono sbloccare dopo che il dispositivo è stato saldato.
- Se sbloccato ma ancora non funziona, potresti dover ripristinare le impostazioni di rete: `Impostazioni > Generali > Trasferisci o inizializza iPhone > Ripristina > Ripristina impostazioni di rete`. (Attenzione: questo dimentica le password Wi-Fi.)

Una volta sbloccato, puoi anche spostare la tua eSIM tra iPhone e Android – vedi la nostra **[guida al trasferimento eSIM tra piattaforme 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** per le istruzioni passo per passo.


## Come ridurre il consumo batteria della doppia eSIM

Gestire la **doppia eSIM** o persino eSIM + SIM fisica può aumentare il consumo della batteria perché entrambe le linee restano attivamente connesse alla rete. Ecco come minimizzare il consumo mantenendo entrambe le linee attive:

| Strategia | Effetto |
|----------|--------|
| Imposta la linea con segnale più debole su **solo LTE** (non 5G) | Risparmio moderato |
| Disattiva il **Roaming dati** sulla linea non usata per i dati | Risparmia scansioni |
| Disattiva il **5G Standalone** (se il tuo operatore lo consente) | Aiuta molto |
| Usa la **Modalità dati ridotti** per le app in background sulla linea secondaria | Risparmio minore |
| In zone di segnale molto debole, disabilita temporaneamente la linea secondaria | Risparmio significativo |

Per disabilitare una linea: `Impostazioni > Cellulari` → tocca la linea → disattiva **Attiva questa linea**. Se viaggi spesso all'estero, [prova la eSIM di prova gratuita di Roami](/free-esim/) come alternativa a basso consumo.


## Conflitti eSIM e SIM fisica e problemi dello slot

**Sintomo**: la tua nano‑SIM funziona in un altro telefono ma non nel tuo iPhone. Oppure, la tua eSIM funziona bene ma la SIM fisica non viene riconosciuta quando entrambe sono installate.

**Cause comuni**:
- L'iPhone è **bloccato dall'operatore** su una rete diversa.
- Slot SIM non inserito completamente o danneggiato.
- La scheda SIM è **troppo vecchia** (pre-4G) o piegata.
- **Conflitto con la SIM fisica**: su alcuni iPhone, inserire una SIM fisica può disabilitare temporaneamente lo slot eSIM se il dispositivo è bloccato dall'operatore.

**Soluzioni**:
1. Rimuovi lo slot, pulisci i contatti con un panno morbido.
2. Reinserisci con decisione fino allo scatto.
3. Riavvia l'iPhone.
4. Se ancora non viene riconosciuta, prova la SIM in un altro telefono – se funziona, il lettore SIM del tuo iPhone potrebbe essere difettoso.
5. Sostituisci la scheda SIM in un negozio dell'operatore (gratuito per la maggior parte dei piani postpagati).

> **Se la tua eSIM sparisce dopo l'inserimento di una SIM fisica:** alcuni iPhone bloccati dall'operatore disattivano lo slot eSIM quando viene inserita una SIM fisica di un operatore diverso. Rimuovi la SIM fisica, riavvia, e la tua eSIM dovrebbe ricomparire. Poi contatta il tuo operatore per sbloccare il dispositivo.

Se prevedi di passare completamente alla eSIM, consulta la nostra **[guida eSIM iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** per i metodi di attivazione.


## Doppia eSIM in Cina, Hong Kong e Macao

Gli iPhone della Cina continentale (tranne l'iPhone 16) hanno due slot nano‑SIM fisici e **nessun supporto eSIM del tutto**. I modelli di Hong Kong e Macao di solito supportano eSIM + SIM fisica. Se compri un iPhone della Cina continentale a doppia SIM fisica, non puoi installare alcuna eSIM, incluse le eSIM di viaggio internazionali – è un limite hardware.

Apple vende modelli specifici a doppia SIM fisica nella **Cina continentale**:
- iPhone 16, 17 Pro, 17 Pro Max: **due slot nano‑SIM fisici** (nessuna eSIM tranne Air).
- iPhone 16: **solo eSIM** (globale, inclusa la Cina).

I modelli di **Hong Kong e Macao**:
- Supportano **eSIM + SIM fisica** (come i modelli internazionali) o doppia SIM fisica a seconda del modello.
- Verifica sempre prima di comprare se prevedi di usare piani eSIM di viaggio.

> ⚠️ **Importante**: se compri un iPhone della Cina continentale a doppia SIM fisica, **non puoi installare alcuna eSIM** (incluse le eSIM di viaggio internazionali) – tranne l'iPhone 16. È un limite hardware, non un blocco software.


## Doppia eSIM per linea di lavoro e personale

Molti utenti mantengono un **numero di lavoro** (eSIM) e un **numero personale** (seconda eSIM o SIM fisica). Ecco come configurare la tua configurazione di **doppia eSIM** in modo pulito:

### Etichetta le linee con chiarezza
`Impostazioni > Cellulari` → tocca una linea → `Etichetta piano cellulare` → scegli "Lavoro" o "Personale", o crea un'etichetta personalizzata.

### Scegli voce e dati predefiniti
- **Linea vocale predefinita**: quale linea usare quando componi dall'app Telefono nativa (puoi comunque scegliere per singola chiamata).
- **Dati cellulari**: quale linea usa i dati mobili. Attiva **Consenti cambio dati cellulari** così il telefono può usare temporaneamente i dati dell'altra linea se la principale perde il segnale.

### Separare i contatti
- Assegna i contatti a una linea specifica: Modifica contatto → `Linea preferita` → seleziona lavoro o personale.

### Prevenire il roaming accidentale
- Disattiva il **Roaming dati** per la linea di lavoro se ha tariffe internazionali costose.


## Tabella di troubleshooting della doppia eSIM

| Problema | Passaggio immediato | Soluzione a lungo termine | Se ancora non funziona |
|---------|----------------|----------------|----------------------|
| La seconda eSIM non prende mai il segnale | Riavvia l'iPhone, poi alterna off/on la linea | Conferma che il piano sia attivo e la linea abilitata | Contatta l'operatore per riprovisionare la eSIM |
| Le chiamate vanno dritte alla segreteria (senza squillare) | Disattiva "Silenzia chiamanti sconosciuti" e l'inoltro di chiamata | Contatta l'operatore per resettare l'instradamento chiamate | Ripristina le impostazioni di rete |
| Non ricevi SMS sulla seconda linea | Invia un SMS di prova da quella linea a qualsiasi numero | Assicurati che la linea non sia solo dati; l'operatore potrebbe dover abilitare gli SMS | Usa l'app dell'operatore per risincronizzare la linea |
| Due eSIM ma entrambe mostrano "Nessun servizio" | Modalità aereo on/off > controlla il blocco operatore | Ripristina le impostazioni di rete | Verifica se l'operatore ha un'interruzione nella tua zona |
| Cambiate le linee e ora FaceTime/iMessage non si attivano | Vai su `Impostazioni > Messaggi > Invia e ricevi` – seleziona manualmente i numeri | Esci dall'ID Apple e rientra | Contatta l'assistenza Apple |
| I dati mostrano il segnale ma niente internet | Controlla le impostazioni APN (vedi Soluzione #11) | Configura l'APN manualmente | Contatta il fornitore eSIM per l'APN corretto |
| eSIM eliminata accidentalmente | Verifica se il fornitore consente il ri-scaricamento | Contatta l'operatore per un nuovo codice QR | eSIM di viaggio: compra un nuovo piano |
| SIM fisica inserita, la eSIM scompare | Il telefono bloccato dall'operatore disattiva la eSIM con una SIM estera | Rimuovi la SIM fisica, riavvia, la eSIM ricompare | Contatta l'operatore per sbloccare il dispositivo |


## Come configurare le impostazioni APN se la tua eSIM non ha dati

**Sintomo**: la tua eSIM mostra le tacche di segnale piene (o "Nessun servizio") ma non hai connessione a internet – i siti web non caricano, le app dicono "nessuna connessione".

**Causa radicale**: il profilo eSIM è stato installato correttamente, ma le impostazioni del Nome Punto di Accesso (APN) sono mancanti o errate. Alcuni fornitori eSIM configurano l'APN automaticamente; altri richiedono l'inserimento manuale.

### Come configurare l'APN su iPhone

1. Vai su **Impostazioni > Cellulari**.
2. Tocca la linea eSIM che non ha dati.
3. Tocca **Rete dati cellulari** (se non vedi questa opzione, l'APN è configurato automaticamente dal tuo operatore – salta questa soluzione).
4. Nella sezione **Dati cellulari**, compila il campo **APN**.
5. Lascia **Nome utente** e **Password** vuoti se il tuo fornitore non indica diversamente.
6. Torna indietro, alterna la Modalità aereo on/off, e testa i dati.

### Valori APN comuni per le eSIM di viaggio

| Fornitore | APN | Nome utente | Password |
|----------|-----|----------|----------|
| **Roami** | internet | (vuoto) | (vuoto) |
| **Airalo** | globaldata | (vuoto) | (vuoto) |
| **Holafly** | hola | (vuoto) | (vuoto) |
| **Nomad** | nbdata | (vuoto) | (vuoto) |
| **T‑Mobile (USA)** | fast.t-mobile.com | (vuoto) | (vuoto) |
| **AT&T (USA)** | nxgen | (vuoto) | (vuoto) |
| **Verizon (USA)** | vzwinternet | (vuoto) | (vuoto) |
| **EE (Regno Unito)** | everywhere | (vuoto) | (vuoto) |
| **O2 (Regno Unito)** | mobile.o2.co.uk | web | web |
| **Vodafone (Regno Unito)** | internet | (vuoto) | (vuoto) |
| **Three (Regno Unito)** | three.co.uk | (vuoto) | (vuoto) |
| **Orange (Francia)** | orange.fr | (vuoto) | (vuoto) |

> **Se il campo APN è in grigio:** il tuo operatore ha bloccato le impostazioni APN. È comune con le eSIM postpagate degli operatori (Verizon, T‑Mobile, AT&T). Contatta il tuo operatore per assistenza – non puoi cambiarlo manualmente.

> **Se l'APN è corretto ma ancora niente dati:** riavvia l'iPhone, alterna la Modalità aereo, o verifica che il Roaming dati sia abilitato (Impostazioni > Cellulari > [linea] > Roaming dati ATTIVO).


## Consigli finali da professionisti per gli utenti di doppia eSIM

- **Etichetta le tue linee** subito dopo la configurazione – evita confusioni infinite.
- **Imposta suonerie diverse** per ciascuna linea: `Impostazioni > Suoni e feedback aptico > Suoneria` → scorri in basso, puoi assegnarla per linea.
- **Usa l'automazione di Comandi rapidi** per cambiare la linea vocale predefinita in base all'orario (es. orario di lavoro = linea lavoro; sera = personale).
- **Prima di vendere il dispositivo**: vai su `Impostazioni > Cellulari`, elimina **tutte** le eSIM, e rimuovi la SIM fisica. Poi inizializza contenuto e impostazioni. Per una procedura dettagliata di eliminazione delle eSIM e annullamento dei piani, consulta la **[Soluzione #15 nella nostra guida al troubleshooting](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)**.


## Domande frequenti

**D1: Posso usare due eSIM dello stesso operatore?**  
Sì, finché il tuo operatore consente più profili eSIM su un account. Per esempio, T‑Mobile USA supporta fino a due eSIM sullo stesso iPhone.

**D2: Entrambe le linee supporteranno il 5G simultaneamente?**  
Sì, su iPhone 13 e successivi (incluso iPhone 16), entrambe le linee possono stare sul 5G (doppio standby 5G). Però, solo una linea può usare i dati 5G alla volta; l'altra usa il 5G come fallback vocale (VoNR).

**D3: La mia seconda linea funziona ma la prima ha smesso di funzionare dopo averla aggiunta – che è successo?**  
Potresti aver scambiato per sbaglio le impostazioni della linea principale. Vai su `Impostazioni > Cellulari > Linea vocale predefinita` e reimpostala.

**D4: La doppia eSIM consuma più batteria di eSIM + SIM fisica?**  
In generale, la doppia eSIM consuma leggermente meno perché non c'è un lettore di schede fisico. Ma la differenza è trascurabile (entro il 2‑3%).

**D5: Sono in viaggio – posso usare una eSIM locale per i dati e mantenere la mia eSIM di casa per le chiamate?**  
Sì, la migliore prassi:  
- Imposta la eSIM locale come linea **Dati cellulari**.  
- Mantieni la eSIM di casa come **Linea vocale predefinita**.  
- Disattiva il **Roaming dati** sulla eSIM di casa per evitare addebiti enormi.  
- Attiva **Consenti cambio dati cellulari** così la tua linea di casa può usare i dati della eSIM locale per Chiamate Wi‑Fi e MMS.

Se alterni spesso dispositivi durante i viaggi, la **[guida al trasferimento eSIM tra piattaforme](/faq/how-to-transfer-esim-between-iphone-and-android/)** ti aiuterà a spostare il tuo numero senza soluzione di continuità.

**D6: Perché la seconda eSIM a volte sparisce dopo un aggiornamento iOS?**
Bug raro. Vai su `Impostazioni > Cellulari` → se la linea manca ma compare ancora sotto "SIM disponibili", toccala e riattivala. Se no, contatta l'operatore per rinviare il profilo.

**D7: Posso usare una configurazione dual SIM con un Apple Watch?**  
Sì. L'Apple Watch può replicare **una** delle linee dell'iPhone. Scegli quale linea vuoi sull'orologio durante la configurazione. Nota che l'orologio non può usare entrambe le linee simultaneamente – replica solo la linea selezionata.

**D8: Dove trovo la documentazione ufficiale Apple sulla doppia eSIM?**  
Apple fornisce due risorse chiave: [Info sulla eSIM su iPhone](https://support.apple.com/en-us/HT209044) e [Usare il Dual SIM con una eSIM](https://support.apple.com/en-us/HT209086). Coprono compatibilità e configurazione di base.

**D9: Come recupero una eSIM eliminata?**  
Se hai eliminato un profilo eSIM, il recupero dipende dal tuo operatore. Per le eSIM di viaggio (Roami, Airalo, ecc.), l'eliminazione è di solito definitiva – dovrai comprare un nuovo piano. Per le eSIM postpagate degli operatori (come Verizon, T‑Mobile, AT&T), contatta il tuo operatore – spesso possono riemettere un nuovo codice QR. Conserva sempre una copia dell'email di attivazione originale e del codice QR.

**D10: Perché la mia eSIM ha le tacche di segnale ma nessuna connessione dati?**  
Quasi sempre è un problema APN. Vedi la Soluzione #11 sopra per la configurazione passo per passo.

**D11: Cosa significa "codice di conferma eSIM" e dove lo trovo?**  
Alcuni profili eSIM richiedono un codice di conferma (4‑8 cifre) durante l'attivazione. Cercalo nell'email del tuo operatore o nelle istruzioni di attivazione. Se non lo trovi, contatta il tuo operatore.

**D12: Posso avere due eSIM attive più una SIM fisica su iPhone?**  
No. L'iPhone supporta un massimo di **due linee attive** in qualsiasi momento – o due eSIM oppure una eSIM + una SIM fisica. Non puoi avere tre linee attive contemporaneamente.

**D13: La mia doppia eSIM 5G non funziona su una linea – cosa devo controllare?**  
Prima, assicurati che il 5G sia abilitato per entrambe le linee: Impostazioni > Cellulari > [linea] > Voce e dati > seleziona 5G Auto o 5G Attivo. Se una linea mostra ancora solo LTE, verifica con il tuo operatore – alcuni operatori limitano il 5G alla sola linea dati principale.

**D14: Ho inserito una SIM fisica e la mia eSIM è sparita – come la recupero?**  
È un comportamento noto sugli iPhone bloccati dall'operatore. Rimuovi la SIM fisica, riavvia l'iPhone, e la eSIM dovrebbe ricomparire in Impostazioni > Cellulari. Poi contatta il tuo operatore per sbloccare il dispositivo così entrambe possono funzionare contemporaneamente.

👉 **Configuri la doppia eSIM per viaggiare?** Sfoglia i [piani eSIM per gli USA](/united-states-esim/) o la [eSIM per il Giappone](/japan-esim/) — entrambi supportano la doppia eSIM sugli iPhone moderni.

---

*Basato sulla documentazione ufficiale Apple, sugli standard GSMA e su test con gli operatori a settembre 2026.*
## Fonti

- [GSMA — specifica eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Assistenza Apple — Configurare la eSIM su iPhone](https://support.apple.com/en-us/HT212780)
- [Assistenza Apple — Info sulla eSIM su iPhone](https://support.apple.com/en-us/HT209044)
