---
title: "Guida Approfondita alla Risoluzione Problemi eSIM 2026"
h1_title: "La Guida Completa alla Risoluzione Problemi eSIM nel 2026 – 18 Soluzioni dal Mondo Reale"
description: "Risolvi i guasti di attivazione eSIM, gli errori di trasferimento, il nessun servizio e i problemi di scansione QR su iPhone e Android con questa guida alla risoluzione dei problemi 2026."
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["eSIM troubleshooting", "eSIM activation failed", "eSIM no service", "eSIM transfer error", "eSIM cross-platform transfer", "iOS 18 eSIM", "eSIM APN settings", "eSIM confirmation code", "eSIM carrier lock", "eSIM stuck on activating"]
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


> **Nota della Redazione:** Roami gestisce il banco di assistenza alla base di questo riferimento. Quando un viaggiatore incontra un errore specifico sullo schermo — "Attivazione fallita", "Nessun Servizio", "Impossibile Aggiungere Piano Cellulare", errore di ripristino 4013/4014 — questa è la pagina che il nostro stesso team apre per decodificarlo. Ogni voce qui sotto associa un messaggio di errore esatto alla sua vera causa e a una soluzione concreta, testate su iOS 18 e Android 14/15 a settembre 2026.

> **Pagina sbagliata?** Se la tua domanda è "il mio telefono supporta affatto la eSIM" — modello Cina/Hong Kong, blocco operatore, EID mancante — quella è una domanda hardware, non un errore. Vai invece alla nostra [guida hardware e codici di errore eSIM](/faq/esim-activation-errors-troubleshooting-guide/). Questa pagina presuppone che il tuo telefono possa usare la eSIM e che il problema sia un messaggio di errore specifico.

## Flusso Diagnostico Rapido eSIM

Usa questa mappa decisionale per saltare direttamente alla soluzione per il messaggio esatto sul tuo schermo.

| Cosa vedi / provi | Cosa è probabilmente rotto | Urgenza | Vai alla soluzione |
|---------------------------|----------------------|---------|-------------|
| **Il codice QR non si scansiona / dice non valido** | Codice QR scaduto o danneggiato | Bassa | [Sezione 3](#esim-qr-code-invalid-or-expired) |
| **"Impossibile Attivare" o "Attivazione fallita"** | Timeout di rete o errore del server | Media | [Sezione 1](#esim-activation-failed-or-unable-to-activate) |
| **"Nessun Servizio" dopo l'installazione** | Roaming Dati spento o APN mancante | Alta | [Sezione 2](#esim-no-service-after-installation) |
| **Tacche piene ma nessun internet** | APN configurato male | Alta | [Sezione 8](#esim-no-data-connection-after-activation) |
| **"Impossibile Aggiungere Piano Cellulare"** | Trope eSIM memorizzate o restrizione hardware | Media | [Sezione 5](#esim-cellular-plan-cannot-be-added) |
| **"eSIM già in uso"** | Profilo ancora vincolato al vecchio dispositivo | Alta | [Sezione 4](#esim-already-in-use-or-bound-to-another-device) |
| **Popup del codice di conferma** | Il profilo richiede un PIN | Bassa | [Sezione 6](#esim-confirmation-code-required) |
| **"SIM non supportata"** | Il telefono è bloccato dall'operatore | Alta | [Sezione 7](#esim-sim-not-supported-on-a-carrier-locked-device) |
| **Bloccato su "Attivazione" per >10 minuti** | Download bloccato | Media | [Sezione 9](#esim-stuck-on-activating) |
| **Doppia SIM: una linea senza segnale** | Conflitto di instradamento | Media | [Sezione 10](#dual-esim-with-one-line-showing-no-service) |
| **eSIM trasferita al nuovo telefono, fallisce** | Trasferimento cross-platform non supportato | Alta | [Sezione 11](#esim-transfer-failed) |
| **Errore di ripristino iPhone 4013/4014** | Problema hardware/firmware, non eSIM | Alta | [Sezione 12](#iphone-esim-restore-error-4013-or-4014) |
| **"Profilo scaduto"** | Codice QR scaduto | Bassa | [Sezione 13](#esim-profile-expired) |
| **Roaming non funziona all'estero** | Interruttore Roaming Dati spento | Alta | [Sezione 14](#esim-data-roaming-not-working) |
| **eSIM eliminata per errore** | Errore dell'utente | Alta | [Sezione 15](#esim-deleted-by-mistake) |
| **MDM blocca le modifiche eSIM** | Politica del dispositivo di lavoro | Media | [Sezione 16](#mdm-or-enterprise-restrictions-block-esim) |
| **eSIM scomparsa dopo il riavvio** | Glitch software iOS/Android | Alta | [Sezione 17](#esim-disappeared-after-restart) |
| **Chiamate Wi-Fi funzionano ma i dati eSIM no** | Conflitto di instradamento tra Wi-Fi e cellulare | Media | [Sezione 18](#wi-fi-calling-works-but-esim-data-does-not) |
| **SIM fisica inserita, eSIM non funziona** | Conflitto slot SIM | Alta | [Sezione 19](#esim-vs-physical-sim-conflict) |
| **eSIM Apple Watch non si connette** | Problema di abbinamento o operatore | Media | [Sezione 20](#apple-watch-esim-not-working) |


## Tabella di Riferimento Rapido

| Sintomo | Causa più probabile | Soluzione |
|---------|-------------------|-----|
| "Impossibile Attivare" / "Attivazione fallita" | Wi-Fi instabile o errore del server dell'operatore | Rete stabile + riprova, poi reinstalla (Sezione 1) |
| "Nessun Servizio" dopo l'installazione | Roaming dati spento / APN mancante | Abilita il roaming, controlla l'APN (Sezione 2) |
| Codice QR "Non valido" / "Scaduto" | Codice QR scaduto o già usato | Richiedi un nuovo codice QR (Sezione 3) |
| "eSIM già in uso" | Profilo non rilasciato dal vecchio dispositivo | Elimina dal vecchio dispositivo o rilascio dell'operatore (Sezione 4) |
| "Impossibile Aggiungere Piano Cellulare" | Troppe eSIM memorizzate | Rimuovi le eSIM inutilizzate (Sezione 5) |
| Codice di conferma richiesto | Il profilo ha un codice obbligatorio | Trova il codice di 4–8 cifre nell'email dell'operatore (Sezione 6) |
| "SIM non supportata" | Il dispositivo è bloccato dall'operatore | Sblocca il dispositivo o contatta l'operatore (Sezione 7) |
| Nessun dato dopo l'attivazione | APN non configurato | Inserisci l'APN manualmente (Sezione 8) |
| Bloccato su "Attivazione" | Download del profilo bloccato | Attiva/disattiva Modalità Aereo, reinstalla (Sezione 9) |
| Una linea dual-SIM "Nessun Servizio" | Conflitto di instradamento chiamate/dati | Controlla l'instradamento delle linee e gli interruttori (Sezione 10) |
| Trasferimento eSIM fallito | L'operatore non supporta il trasferimento | Usa il ripiego del codice QR dell'operatore (Sezione 11) |
| Errore di ripristino 4013 / 4014 | Hardware/firmware durante il ripristino | Cavo diverso, aggiorna il computer (Sezione 12) |
| "Profilo scaduto" | Codice QR a tempo limitato | Richiedi un nuovo codice QR (Sezione 13) |
| Roaming dati non funziona | Roaming spento per la linea eSIM | Abilita il Roaming Dati (Sezione 14) |
| eSIM eliminata per errore | Profilo rimosso localmente | Contatta l'operatore / acquista un nuovo piano (Sezione 15) |
| MDM blocca le modifiche eSIM | Restrizione aziendale | Contatta il tuo amministratore IT (Sezione 16) |
| eSIM scomparsa dopo il riavvio | Glitch software iOS/Android | Controlla le impostazioni, riaggiungi il profilo (Sezione 17) |
| Chiamate Wi-Fi funzionano ma i dati no | Conflitto di instradamento | Disattiva temporaneamente le Chiamate Wi-Fi (Sezione 18) |
| SIM fisica inserita, eSIM smette di funzionare | Conflitto slot/lettore | Rimuovi la SIM fisica, riavvia (Sezione 19) |
| eSIM Apple Watch non si connette | Problema di abbinamento o operatore | Riabbina l'orologio, contatta l'operatore (Sezione 20) |


## eSIM Attivazione Fallita o Impossibile Attivare

**Causa:** Quasi sempre una connessione Wi-Fi instabile o un errore temporaneo del server dell'operatore (SM-DP+), non un problema del tuo telefono. L'SM-DP+ (Subscription Manager - Data Preparation Plus) è il server sicuro che consegna il tuo profilo eSIM al tuo dispositivo — se è irraggiungibile, l'attivazione fallisce.

**Soluzione:**
1. Passa a una connessione Wi-Fi o dati cellulari stabile.
2. Attiva e disattiva la Modalità Aereo per aggiornare il baseband.
3. Se l'errore si ripete, elimina la eSIM in attesa sotto `Impostazioni > Cellulare`, riavvia, e scansiona di nuovo il codice QR.

**Specífico iOS 18:** Su iOS 18 il messaggio può essere "Impossibile Completare l'Attivazione" con un pulsante Riprova. Tocca prima Riprova — il flusso di attivazione migliorato di iOS 18 spesso risolve il problema senza una reinstallazione completa.

---

## eSIM Nessun Servizio Dopo l'Installazione

**Causa:** Il profilo è installato ma il telefono non si è registrato su una rete locale — di solito perché il Roaming Dati è spento o l'APN manca.

**Soluzione:**
1. Attiva il **Roaming Dati** per la linea eSIM.
2. Sotto `Impostazioni > Cellulare > [la tua eSIM] > Selezione Rete`, disattiva "Automatico", seleziona manualmente un operatore, attendi che fallisca, poi torna su "Automatico" per forzare la ri-registrazione.
3. Se non ci sono ancora dati, controlla l'APN (Sezione 8).

---

## eSIM Codice QR Non Valido o Scaduto

**Causa:** I codici QR eSIM sono monouso e a tempo limitato. Il codice era o già usato o scaduto.

**Soluzione:** Contatta il tuo provider eSIM e chiedi di riemettere un nuovo codice QR, poi scansionalo immediatamente.

**Se stai scansionando dallo schermo del telefono:** Salva prima l'immagine del codice QR in Foto, poi in Impostazioni > Cellulare > Aggiungi eSIM, scegli "Usa Codice QR" e tocca "Scegli Foto" per selezionare l'immagine salvata. Questo evita il problema "non riesco a scansionare il mio stesso schermo".

---

## eSIM Già in Uso o Vincolata a un Altro Dispositivo

**Causa:** Il profilo non è mai stato rilasciato dal vecchio dispositivo, quindi l'operatore lo associa ancora a quel telefono.

**Soluzione:**
1. Sul vecchio dispositivo, elimina la eSIM sotto `Impostazioni > Cellulare`.
2. Attendi circa cinque minuti e riprova sul nuovo dispositivo.
3. Se il vecchio dispositivo è perso o rotto, contatta il tuo operatore e chiedi di forzare il rilascio del profilo dal loro lato.

---

## eSIM Impossibile Aggiungere Piano Cellulare

**Causa:** Il telefono ha raggiunto il limite di profili eSIM memorizzati (tipicamente 8–10, a seconda del modello), oppure il dispositivo è un modello della Cina continentale senza hardware eSIM.

**Soluzione:** Rimuovi le eSIM inutilizzate sotto `Impostazioni > Cellulare`, poi aggiungi la nuova. Se il tuo dispositivo è stato acquistato nella Cina continentale, usa due slot SIM fisici e non può aggiungere una eSIM — per come identificare un modello Cina o Hong Kong e confermare che il tuo telefono ha l'hardware, vedi la nostra [guida controllo hardware ed errori](/faq/esim-activation-errors-troubleshooting-guide/).

---

## eSIM Codice di Conferma Richiesto

**Causa:** Alcuni profili eSIM hanno un codice di conferma obbligatorio richiesto prima del download del profilo. È un PIN di 4-8 cifre che verifica la tua identità.

**Soluzione:** Cerca un codice di 4–8 cifre nell'email che il tuo operatore ha inviato con il codice QR. Se non riesci a trovarlo, contatta l'operatore.

**Luoghi comuni dove trovare il codice di conferma:**
- Nell'oggetto dell'email di attivazione
- Verso il fondo dell'email, sotto "Dettagli Attivazione"
- Nell'app dell'operatore sotto "I Miei Piani" > "Dettagli"

---

## eSIM SIM Non Supportata su Dispositivo Bloccato dall'Operatore

**Causa:** Il telefono è bloccato a un altro operatore e non può accettare un profilo da un provider diverso.

**Soluzione:** Controlla `Impostazioni > Generali > Info > Blocco Operatore`. Se non dice "Nessuna restrizione SIM", contatta il tuo operatore di casa per richiedere uno sblocco. Per una panoramica completa dei blocchi operatore — come controllare lo stato, le politiche di sblocco degli operatori USA, e come sbloccare il dispositivo — vedi la nostra [guida hardware e blocco operatore](/faq/esim-activation-errors-troubleshooting-guide/).

---

## eSIM Nessuna Connessione Dati Dopo l'Attivazione

**Causa:** Il Nome Punto di Accesso (APN) non è stato configurato automaticamente, quindi il telefono non ha una rotta verso la rete dati.

**Soluzione:**
1. Vai su `Impostazioni > Cellulare > Rete Dati Cellulare`.
2. Inserisci il valore APN dal sito web del tuo provider eSIM (per esempio, `globaldata` per Airalo).
3. La maggior parte delle eSIM di viaggio configura l'APN automaticamente, quindi conferma il valore corretto con il tuo provider.

**Valori APN comuni per provider (se la configurazione automatica fallisce):**

| Provider | APN | Nome utente | Password |
|----------|-----|----------|----------|
| Roami | internet | (vuoto) | (vuoto) |
| Airalo | globaldata | (vuoto) | (vuoto) |
| Holafly | hola | (vuoto) | (vuoto) |
| Nomad | nbdata | (vuoto) | (vuoto) |
| Ubigi | ubigi | (vuoto) | (vuoto) |
| Google Fi | h2g2 | (vuoto) | (vuoto) |
| T-Mobile (USA) | fast.t-mobile.com | (vuoto) | (vuoto) |
| AT&T (USA) | nxgen | (vuoto) | (vuoto) |
| Verizon (USA) | vzwinternet | (vuoto) | (vuoto) |
| EE (Regno Unito) | everywhere | (vuoto) | (vuoto) |
| O2 (Regno Unito) | mobile.o2.co.uk | web | web |
| Vodafone (Regno Unito) | internet | (vuoto) | (vuoto) |
| Three (Regno Unito) | three.co.uk | (vuoto) | (vuoto) |

---

## eSIM Bloccata su Attivazione

**Causa:** Il download del profilo si è bloccato, spesso a causa di un segnale debole o di un server di attivazione occupato.

**Soluzione:**
1. Assicurati di essere su una rete stabile.
2. Attiva e disattiva la Modalità Aereo.
3. Se resta bloccata per più di 10 minuti, elimina la eSIM e reinstallala dal codice QR.

---

## Doppia eSIM con una Linea che Mostra Nessun Servizio

**Causa:** Con due eSIM attive, l'instradamento delle chiamate in entrata e dei dati può entrare in conflitto, lasciando una linea senza servizio. Questo è un comune **problema di segnale doppia eSIM** che colpisce gli utenti con due linee attive.

**Soluzione:**
1. Sotto `Impostazioni > Cellulare`, conferma quale linea è impostata per i **Dati Cellulari** e quale per la **Linea Vocale Predefinita**.
2. Spegni e riaccendi ciascuna linea.
3. Per una soluzione più profonda, vedi la nostra guida **[La doppia eSIM non funziona? 12 soluzioni per iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## Trasferimento eSIM Fallito

**Causa:** Non esiste un trasferimento eSIM cross-platform integrato, e il tuo operatore potrebbe non supportare il trasferimento tramite app.

**Soluzione:** Chiedi al tuo operatore di riemettere la eSIM come nuovo codice QR e scansionala sul nuovo dispositivo. Dopo il trasferimento, WhatsApp, iMessage e i codici 2FA via SMS continuano a funzionare perché il tuo numero non è cambiato. Per le istruzioni complete passo dopo passo, vedi la nostra **[guida al trasferimento eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## Errore di Ripristino iPhone eSIM 4013 o 4014

**Causa:** Questi errori indicano un problema hardware o firmware durante un ripristino software, non un problema eSIM. Sono spesso causati da un cavo USB difettoso o da un software del computer obsoleto.

**Soluzione:** Prova un cavo diverso e una porta USB diversa, aggiorna il sistema operativo del tuo computer, poi tenta di nuovo il ripristino. Contatta il Supporto Apple se l'errore persiste.

---

## Profilo eSIM Scaduto

**Causa:** Il codice QR o il codice di attivazione eSIM era a tempo limitato ed è scaduto.

**Soluzione:** Contatta il tuo provider eSIM e chiedi un nuovo codice QR, poi attivalo tempestivamente.

---

## Roaming Dati eSIM Non Funziona

**Causa:** Il Roaming Dati è spento per la linea della eSIM di viaggio, quindi non può connettersi alla rete locale.

**Soluzione:** Vai su `Impostazioni > Cellulare > [la tua eSIM]` e attiva il **Roaming Dati**. Questo è richiesto affinché la maggior parte delle eSIM di viaggio funzioni all'estero.

---

## eSIM Eliminata per Errore

**Causa:** Eliminare una eSIM rimuove il profilo dal telefono ma non annulla il piano.

**Soluzione:**
- Per le eSIM postpagate di operatori, contatta l'operatore — di solito possono riemettere il codice QR.
- Per le eSIM di viaggio (Roami, Airalo e simili), l'eliminazione è di solito permanente, quindi dovrai acquistare un nuovo piano.
- Conserva sempre un backup della tua email di attivazione originale e del codice QR.

---

## MDM o Restrizioni Aziendali Bloccano la eSIM

**Causa:** Su un dispositivo gestito (aziendale), una politica di Mobile Device Management come `AllowESIMModification` può bloccare l'aggiunta o la rimozione di eSIM.

**Soluzione:** Contatta il tuo amministratore IT per abilitare le modifiche eSIM, o usa un dispositivo non gestito.

---

## eSIM Scomparsa Dopo il Riavvio

**Sintomo:** Hai riavviato il telefono e la eSIM non è più elencata sotto Impostazioni > Cellulare. È sparita.

**Causa:** Un glitch software su iOS o Android può a volte causare la scomparsa o l'illeggibilità dei profili eSIM dopo un riavvio, specialmente dopo un aggiornamento del OS. Il profilo è ancora sul dispositivo, ma il sistema non è riuscito a montarlo.

**Soluzione:**
1. **iPhone:** Vai su Impostazioni > Generali > Info e scorri verso il basso fino a "SIM Disponibile" o "SIM Digitale". Se la eSIM appare lì ma non in Cellulare, riavvia di nuovo il telefono.
2. **iPhone:** Se il riavvio non funziona, vai su Impostazioni > Cellulare > Aggiungi eSIM. A volte il telefono rileverà il profilo esistente e offrirà di riaggiungerlo senza un nuovo codice QR.
3. **Android (Samsung):** Vai su Impostazioni > Connessioni > Gestore SIM. La eSIM può apparire come "Inattiva". Toccala e attivala.
4. **Android (Pixel):** Vai su Impostazioni > Rete e Internet > SIM. Se la eSIM manca, tocca "Aggiungi Operatore" — il telefono può rilevare il profilo esistente.
5. Se nessuna di queste funziona, contatta il tuo operatore e richiedi un nuovo codice QR. Il vecchio profilo potrebbe essere corrotto.

**Prevenzione:** Prima di riavviare, assicurati che tutte le linee eSIM siano impostate su OFF, poi riavvia, poi riattivale. Questo riduce la possibilità che il sistema perda traccia del profilo.

---

## Chiamate Wi-Fi Funzionano Ma i Dati eSIM No

**Sintomo:** Hai le Chiamate Wi-Fi attive sulla linea di casa, ma la tua eSIM di viaggio non ha connessione dati. Oppure, la eSIM funziona sul Wi-Fi ma non sul cellulare.

**Causa:** Un conflitto di instradamento tra Chiamate Wi-Fi e dati cellulari. Quando le Chiamate Wi-Fi sono attive, il telefono può dare priorità alla rete Wi-Fi per tutte le comunicazioni, inclusi i dati, e non riesce a instradare correttamente i dati cellulari attraverso la eSIM.

**Soluzione:**
1. Spegni temporaneamente le Chiamate Wi-Fi sulla linea di casa: Impostazioni > Cellulare > [linea di casa] > Chiamate Wi-Fi > OFF.
2. Attiva e disattiva la Modalità Aereo per forzare il telefono a registrarsi di nuovo sulla rete cellulare.
3. Testa la connessione dati della eSIM. Se funziona, puoi riaccendere le Chiamate Wi-Fi — l'instradamento ora dovrebbe essere corretto.
4. Se il problema si ripresenta, verifica che la linea di casa abbia il **Roaming Dati OFF** e che la eSIM di viaggio abbia il **Roaming Dati ON**.

**Alternativa:** Su iPhone, vai su Impostazioni > Cellulare > Dati Cellulari e assicurati che la eSIM di viaggio sia selezionata. Poi abilita "Consenti Commutazione Dati Cellulari" — questo permette al telefono di usare la eSIM di viaggio per i dati delle Chiamate Wi-Fi anche se la linea di casa è la linea voce.

---

## Conflitto eSIM vs SIM Fisica

**Sintomo:** Inserisci una scheda SIM fisica nel telefono, e la tua eSIM che funzionava prima mostra improvvisamente "Nessun Servizio" o scompare completamente dalle Impostazioni.

**Causa:** Questo è un comportamento noto sui dispositivi bloccati dall'operatore. Quando un iPhone bloccato rileva una SIM fisica di un operatore diverso, può disattivare lo slot eSIM per prevenire l'uso non autorizzato. Su alcuni dispositivi Android, inserire una SIM fisica può anche causare il prioritizzazione della SIM fisica rispetto alla eSIM per tutte le funzioni. Principiante nel mescolare i due formati? Il [confronto eSIM vs SIM fisica](/faq/what-is-esim/) spiega come coesistono.

**Soluzione:**
1. Rimuovi la scheda SIM fisica dal vassoio.
2. Riavvia il telefono.
3. La eSIM dovrebbe ricomparire in Impostazioni > Cellulare (iPhone) o Impostazioni > Connessioni > Gestore SIM (Android).
4. Se la eSIM ricompare ma mostra ancora "Nessun Servizio", attiva il Roaming Dati per la linea eSIM.
5. Se ti serve che SIM fisica ed eSIM funzionino simultaneamente, contatta il tuo operatore per sbloccare il dispositivo.

> **Alternativa:** Alcuni utenti segnalano che spegnere e riaccendere la linea eSIM (senza rimuovere la SIM fisica) risolve il conflitto. Prova prima questo prima di rimuovere la SIM fisica.

---

## eSIM Apple Watch Non Funziona

**Sintomo:** Hai configurato il cellulare sul tuo Apple Watch, ma mostra "Nessun Servizio" o "Ricerca" — oppure il piano eSIM non appare affatto nell'app Watch.

**Causa:** L'attivazione della eSIM Apple Watch richiede il supporto dell'operatore per il tipo di piano specifico dell'orologio, e la configurazione richiede che il tuo iPhone sia nelle vicinanze con una connessione internet stabile.

**Soluzione:** Verifica che il tuo operatore supporti la eSIM Apple Watch, poi dissocia e riabbina l'orologio, tenendo il tuo iPhone nelle vicinanze per tutto il tempo. Se non si attiva comunque, contatta il tuo operatore con l'**EID** e l'**IMEI** dell'orologio affinché possano provisionarlo manualmente. Per una panoramica completa — inclusi quali modelli iPad e Apple Watch supportano la eSIM — vedi la nostra [guida eSIM iPad e Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

---

## Riferimento Codici di Errore eSIM

| Codice di Errore | Piattaforma | Significato | Soluzione |
|------------|----------|---------|-----|
| **4013** | iPhone (ripristino) | Guasto hardware/firmware durante il ripristino | Cambia cavo, porta USB, aggiorna macOS/iTunes |
| **4014** | iPhone (ripristino) | Simile al 4013; di solito un problema di comunicazione USB | Come sopra |
| **-8** | Android (attivazione) | Timeout di rete | Attendi e riprova, o cambia Wi‑Fi |
| **-100** | Android (scansione QR) | Formato codice QR non supportato | Usa l'inserimento manuale |
| **0xE8000001** | iPhone (attivazione) | Server dell'operatore irraggiungibile | Riprova dopo 5 minuti o usa l'inserimento manuale |
| **"Configurazione eSIM non supportata"** | Android (Samsung) | L'operatore non supporta la eSIM su quel modello | Verifica con l'operatore |
| **"Indirizzo SM‑DP+ non valido"** | Entrambi | L'indirizzo di inserimento manuale è sbagliato | Ricontrolla l'indirizzo dal tuo provider |
| **"Errore LPA -1"** | Android | Errore generico LPA (Local Profile Assistant) | Riavvia il telefono, riprova. Se persiste, usa un'app eSIM diversa. |
| **"Mancata corrispondenza EID"** | Entrambi | Il profilo è legato a un dispositivo diverso | Contatta l'operatore per rilasciare il profilo (Sezione 4) |
| **"Nessun EID" componendo `*#06#`** | Entrambi | Il dispositivo non supporta la eSIM | Il tuo telefono non ha hardware eSIM — vedi la nostra [guida controllo hardware](/faq/esim-activation-errors-troubleshooting-guide/) |
| **"Gestione eSIM non disponibile"** | Android (OnePlus) | Bug Oxygen OS | Aggiorna all'ultima versione di Oxygen OS |
| **"Impossibile eliminare il profilo"** | iPhone | eSIM bloccata in stato di attesa | Riavvia l'iPhone, poi prova a eliminarla di nuovo. Se resta bloccata, contatta l'operatore. |
| **-1** | Entrambi | Guasto di attivazione generico | Riavvia il telefono, assicurati la connettività di rete, riprova |
| **-2** | Android | Codice di attivazione non valido | Reinserisci il codice o richiedine uno nuovo dall'operatore |


## Errori Che Rompono la Tua eSIM

Questi sono gli errori utente più comuni che trasformano una eSIM funzionante in un ferro. Evitali a tutti i costi — la maggior parte risale a come funziona realmente l'attivazione, che la [spiegazione dell'attivazione eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) copre passo dopo passo.

| Errore | Cosa Succede | Come Evitarlo |
|---------|--------------|--------------|
| **Eliminare la eSIM per "risolvere" un problema di connessione** | Il profilo è rimosso permanentemente — perdi tutti i dati residui e devi acquistare un nuovo piano | Toccare mai "Elimina eSIM" a meno che il piano non sia completamente scaduto. Eliminare non "aggiorna" — distrugge. |
| **Scansionare il codice QR con l'app Fotocamera** | La fotocamera riconosce il codice ma non fa nulla — nessun profilo si installa | Apri sempre prima Impostazioni > Cellulare > Aggiungi eSIM — non usare mai l'app Fotocamera autonoma. |
| **Installare in aeroporto con Wi-Fi debole** | Il download si interrompe a metà installazione, corrompendo il profilo | Installa a casa sul tuo Wi-Fi stabile prima di partire. |
| **Aspettare l'atterraggio per installare** | Arrivi senza Wi-Fi e non puoi scaricare il profilo | Installa il profilo prima della partenza (resta inattivo finché non attivi il Roaming Dati). |
| **Dimenticare di attivare il Roaming Dati per la eSIM** | Tacche piene ma zero internet | Dopo l'atterraggio, vai su Impostazioni > Cellulare > [la tua eSIM] e attiva il Roaming Dati. |
| **Ripristinare le impostazioni di rete pensando che "aggiorni" la eSIM** | Il ripristino di rete non elimina le eSIM, ma rimuove le password Wi-Fi e gli abbinamenti Bluetooth — perdi tutte le reti salvate | Ripristina le impostazioni di rete solo come ultima risorsa, e sappi che non risolverà i problemi di attivazione eSIM. |
| **Spegnere la linea eSIM invece di disattivare solo il Roaming Dati** | La eSIM è disattivata completamente e non si registrerà quando la riattivi | Spegni il Roaming Dati, non l'intera linea. Tieni la linea ON ma il roaming OFF quando non in uso. |


## Più Problemi eSIM Contemporaneamente

A volte non hai solo un problema — ne hai due o tre contemporaneamente. Ecco come diagnosticare i sintomi combinati:

| Combinazione di Sintomi | Cosa Sta Succedendo Davvero | Ordine delle Soluzioni |
|---------------------|---------------------------|-----------|
| **Il codice QR si scansiona ma poi "Attivazione fallita"** | Il codice QR è valido, ma il server di download è irraggiungibile | Risolvi prima la rete (Sezione 1), poi riscansiona |
| **La eSIM mostra le tacche ma nessun dato E "Nessun Servizio" sulla linea di casa** | Manca l'APN E hai un conflitto di instradamento dual-SIM | Risolvi prima l'APN (Sezione 8), poi risolvi l'instradamento dual-SIM (Sezione 10) |
| **Il trasferimento ha funzionato ma il nuovo telefono ha "Nessun Servizio"** | Profilo trasferito ma non registrato sulla nuova rete | Elimina la eSIM dal vecchio telefono, poi riavvia il nuovo telefono (Sezione 4 + Sezione 2) |
| **Le Chiamate Wi-Fi funzionano ma la eSIM non ha dati E la linea di casa ha costi di roaming** | Più conflitti di instradamento più Roaming Dati lasciato ON sulla linea di casa | Spegni il Roaming Dati della linea di casa, risolvi il conflitto Chiamate Wi-Fi (Sezione 18), poi controlla l'APN |
| **La eSIM è scomparsa dopo il riavvio E "Impossibile Aggiungere Piano Cellulare"** | Profilo corrotto E archiviazione piena | Rimuovi prima le eSIM inutilizzate (Sezione 5), poi prova a riaggiungerla (Sezione 17) |

**Regola generale:** Risolvi prima i **problemi di rete** (Wi-Fi, Roaming Dati, APN), poi i **problemi di profilo** (codice QR, attivazione), poi i **problemi specifici del dispositivo** (blocco operatore, MDM). Non provare a risolvere tutto in una volta — affronta i sintomi uno alla volta.


## Dove Trovare Aggiungi eSIM su Ogni Telefono

La soluzione per la maggior parte degli errori è la stessa, ma il percorso del menu per raggiungere i controlli eSIM varia per marchio. Ecco i percorsi esatti più le particolarità di errore che appaiono solo su dispositivi specifici. (Per i metodi di installazione completi dietro questi menu, la [guida generale all'attivazione](/faq/how-to-activate-an-esim/) ha ogni passaggio.)

### Percorso Menu eSIM iPhone
- **"Aggiungi eSIM" in grigio** – il tuo iPhone potrebbe essere bloccato dall'operatore. Controlla Impostazioni > Generali > Info > Blocco Operatore; per la soluzione completa al blocco operatore, vedi la nostra [guida blocco operatore e hardware](/faq/esim-activation-errors-troubleshooting-guide/).
- **Quick Transfer fallisce** – assicurati che entrambi i telefoni siano sullo stesso Apple ID, abbiano il Bluetooth attivo, e siano entro 10cm l'uno dall'altro.
- **Dopo l'aggiornamento iOS, la eSIM mostra "Nessun Servizio"** – vai su Impostazioni > Cellulare > tocca la eSIM > spegni e riaccendi "Attiva Questa Linea". Controlla anche che il Roaming Dati sia ancora ON.
- **eSIM scomparsa dopo l'aggiornamento iOS** – vedi la Sezione 17. Questo è più comune su iOS che su Android dopo i grandi aggiornamenti.
- **Specífico iOS 18:** Il flusso "Aggiungi eSIM" è stato ridisegnato con un'opzione di inserimento manuale più evidente. Se sei su iOS 18 e il codice QR non si scansiona, il pulsante di inserimento manuale ora è più facile da trovare in fondo allo schermo.

### Percorso Menu eSIM Samsung Galaxy
- **Il percorso del menu varia in base alla versione One UI:**
  - **One UI 5 (Android 13):** Impostazioni > Connessioni > Gestore SIM > Aggiungi eSIM
  - **One UI 6/6.1 (Android 14):** Impostazioni > Connessioni > Gestore SIM > Aggiungi eSIM (stesso percorso)
  - **One UI 7 (Android 15):** Impostazioni > Connessioni > Gestore SIM > Aggiungi Piano Mobile
- **Scansione codice QR fallisce** – prova l'inserimento manuale (tocca "Inserisci codice di attivazione manualmente"). Samsung spesso richiede l'indirizzo SM‑DP+ e il codice di attivazione separatamente.
- **Conflitto doppia SIM** – se hai una SIM fisica e una eSIM, verifica che la eSIM sia impostata come SIM dati nel Gestore SIM.

### Percorso Menu eSIM Google Pixel
- **"Scaricare una SIM?"** – questa opzione appare in fondo alla schermata delle impostazioni SIM. Se non la vedi, il tuo Pixel potrebbe essere bloccato dall'operatore.
- **eSIM che non appare dopo la scansione** – riavvia il telefono. Il Pixel a volte necessita di un riavvio dopo il download del profilo.
- **Impostazioni APN che non si salvano** – su Pixel, le impostazioni APN sono sotto Rete e Internet > SIM > [la tua eSIM] > Nomi Punti di Accesso. Se non si salvano:
  1. Aggiungi un nuovo APN con un **nome diverso** (es. "Airalo 2" invece di "Airalo").
  2. Salvalo, poi selezionalo manualmente.
  3. Attiva e disattiva la Modalità Aereo per forzare il nuovo APN a prendere effetto.
- **eSIM scomparsa dopo il riavvio su Pixel** – vedi la Sezione 17. Gli utenti Pixel lo segnalano più frequentemente degli utenti Samsung.

### Percorso Menu eSIM OnePlus
- **Percorso menu:** Impostazioni > Wi-Fi e Rete > SIM e Rete > Aggiungi eSIM
- **Problema comune:** I dispositivi OnePlus a volte mostrano "eSIM non disponibile" dopo un aggiornamento Oxygen OS. Soluzione: Vai su Impostazioni > Sistema > Aggiornamento di Sistema e installa l'ultima patch.
- **Impostazioni APN:** Situate sotto Impostazioni > Wi-Fi e Rete > SIM e Rete > [eSIM] > Nomi Punti di Accesso.

### Percorso Menu eSIM Xiaomi
- **Percorso menu:** Impostazioni > Schede SIM e Reti Mobili > Aggiungi eSIM
- **Impostazioni APN:** Situate sotto Impostazioni > Schede SIM e Reti Mobili > [eSIM] > Nomi Punti di Accesso.

### Percorso Menu eSIM Oppo e Realme
- **Percorso menu:** Impostazioni > Rete Mobile > Aggiungi eSIM

**Non sei sicuro se il tuo modello esatto abbia affatto l'hardware eSIM** (Xiaomi mercato cinese, Huawei, serie Samsung A disattivata dall'operatore)? Questa è una domanda di compatibilità — vedi la nostra [guida hardware e supporto modelli](/faq/esim-activation-errors-troubleshooting-guide/), che copre il supporto modello per modello.


## eSIM Funziona a Casa Ma Non All'Estero

**Sintomo:** Hai installato la eSIM a casa, mostra le tacche del segnale, ma quando atterri a destinazione, non c'è servizio. Le particolarità specifiche della destinazione — reti partner, blocchi regionali, checklist di arrivo — sono raccolte nella nostra [guida eSIM di viaggio](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).

**Causa principale:** Il profilo eSIM è stato attivato mentre eri sulla tua rete di casa, e non si è registrato sulla rete di destinazione.

**Soluzione:**
1. Spegni la linea eSIM (`Impostazioni > Cellulare > spegni`).
2. Attendi 10 secondi, poi riaccendila.
3. Vai su Selezione Rete, disattiva "Automatico", seleziona manualmente una rete con cui il tuo provider ha una partnership (chiedi al tuo provider l'elenco dei partner).
4. Se fallisce, spegni e riaccendi il Roaming Dati.
5. Riavvia il telefono.

Se questo ancora non funziona, contatta il tuo provider — il tuo piano eSIM potrebbe non includere realmente il paese in cui ti trovi, o potrebbe esserci un problema di accordo di roaming.


## eSIM Funziona su un Operatore Ma Non su un Altro

**Sintomo:** Hai una eSIM che funziona bene, ma quando provi ad aggiungere una seconda eSIM da un operatore diverso, fallisce o mostra "Nessun Servizio."

**Causa principale:** Alcuni modelli di telefono (specialmente quelli più vecchi) hanno limitazioni su quali profili operatore possono coesistere. Questo è più comune sui dispositivi Android con firmware modem più vecchi.

**Soluzione:**
1. Verifica che il tuo telefono supporti la doppia eSIM (iPhone 13 e successivi, Pixel 7 e successivi, Samsung S23 e successivi).
2. Se hai una SIM fisica inserita, prova a rimuoverla — alcuni telefoni limitano il numero di profili attivi quando è presente una SIM fisica.
3. Aggiorna il firmware del telefono (gli aggiornamenti delle impostazioni dell'operatore spesso risolvono questo).
4. Contatta il secondo operatore e chiedi se il loro profilo eSIM supporta la coesistenza dual-SIM.


## Quando Contattare il Tuo Provider eSIM vs. Il Produttore del Telefono

| Problema | Contatto |
|---------|---------|
| Codice QR scaduto / non valido | Provider eSIM |
| "Attivazione fallita" ripetutamente | Provider eSIM |
| Nessun dato dopo la configurazione APN | Provider eSIM |
| Il dispositivo mostra "Nessun Servizio" dopo l'atterraggio | Provider eSIM (controlla l'accordo di roaming) |
| La eSIM non compare nelle impostazioni | Produttore del telefono (se bug software) o problema di blocco operatore |
| Problemi hardware (fotocamera, schermo, batteria) | Produttore del telefono |
| Blocco operatore / sblocco | Il tuo operatore di casa |
| Restrizione MDM | Il tuo dipartimento IT |
| eSIM scomparsa dopo il riavvio | Entrambi — prova le soluzioni nella Sezione 17, poi contatta il provider |
| "eSIM già in uso" | Provider eSIM (per forzare il rilascio del profilo) |
| eSIM Apple Watch non si connette | Operatore (per il provisioning) o Supporto Apple (per problemi di abbinamento) |


## Domande Frequenti

**D1: Eliminare una eSIM annulla il mio piano?**
No. Eliminare la eSIM rimuove solo il profilo dal telefono. Devi contattare l'operatore separatamente per annullare il piano.

**D2: Posso recuperare una eSIM eliminata?**
Per le eSIM postpagate di operatori, sì — l'operatore può riemettere il profilo. Per le eSIM di viaggio, l'eliminazione è di solito permanente e richiede un nuovo acquisto.

**D3: Perché la mia eSIM funziona sul Wi-Fi ma non sul cellulare?**
Questo è quasi sempre un problema di APN o di Roaming Dati. Segui la Sezione 8 e la Sezione 14.

**D4: Una eSIM scarica più velocemente la mia batteria?**
No. Far girare due linee attive contemporaneamente può usare leggermente più energia, ma una singola eSIM non scarica la batteria.

**D5: Quante eSIM posso memorizzare sul telefono?**
Tipicamente 8–10 profili su iPhone e sulla maggior parte dei dispositivi Android. Puoi memorizzarne molte di più ma averne solo due attive alla volta (dual‑SIM).

**D6: Perché la mia eSIM continua a perdere segnale?**
Può essere dovuto a congestione della rete, copertura debole o un glitch software. Prova ad attivare/disattivare la Modalità Aereo, riavviare, o selezionare manualmente una rete.

**D7: Vedo "Attivazione Richiesta" sulla mia eSIM dopo un riavvio – cosa significa?**
Il telefono ha perso la connessione al server di attivazione dell'operatore. Riavvia il telefono e assicurati di avere una connessione di rete. Se persiste, elimina e reinstalla la eSIM.

**D8: E se il mio operatore dice che non supporta la eSIM?**
Puoi comunque usare provider di eSIM di viaggio come Roami, Airalo o Holafly — funzionano indipendentemente dal tuo operatore di casa e non richiedono il supporto dell'operatore.

**D9: La mia eSIM è stata trasferita al mio nuovo iPhone ma non posso fare chiamate – funziona solo il dato.**
Verifica che la eSIM sia impostata come Linea Vocale Predefinita. Inoltre, assicurati che il tuo operatore supporti il VoLTE per quella linea.

**D10: La scansione del codice QR funziona ma il download impiega un'eternità – è normale?**
No. Dovrebbe richiedere 1–2 minuti. Se impiega di più, il tuo Wi‑Fi è troppo lento. Cambia rete o usa l'inserimento manuale.

**D11: La mia eSIM è attiva ma non posso inviare o ricevere SMS.**
Alcune eSIM di viaggio sono solo dati e non supportano gli SMS. Se ti servono gli SMS, acquista un piano che includa esplicitamente un numero di telefono.

**D12: Ho ripristinato accidentalmente le impostazioni di rete – ora la mia eSIM è sparita.**
Il ripristino delle impostazioni di rete non elimina i profili eSIM. La tua eSIM dovrebbe essere ancora lì. Vai su Impostazioni > Cellulare e riattiva la linea. Se è sparita, potresti averla eliminata accidentalmente — allora vedi la Sezione 15.

**D13: Qual è la differenza tra eliminare una eSIM e spegnerla?**
Spegnere una eSIM mantiene il profilo sul telefono ma disattiva la linea. Puoi riaccenderla in qualsiasi momento. Eliminare una eSIM rimuove permanentemente il profilo — non puoi recuperarlo senza un nuovo codice QR. Elimina solo quando il piano è completamente scaduto.

**D14: Una VPN può interferire con l'attivazione eSIM?**
Sì — le VPN possono interferire con la connessione al server di attivazione. Spegni la tua VPN prima di attivare una eSIM.

**D15: Il mio piano eSIM dice "illimitato" ma non ho dati dopo aver usato 5GB.**
Molti piani "illimitati" hanno una Fair Usage Policy (FUP) che limita le velocità dopo una certa soglia di dati. Controlla i termini del tuo provider — potresti dover acquistare un piano di ricarica per più dati ad alta velocità.

👉 **Risoluzione dei problemi completata?** Scegli un [piano eSIM USA](/united-states-esim/) o un [piano eSIM Europa](/europe-esim/) per tornare online.

---

## Fonti

- [GSMA — specifica eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Supporto Apple — Configurare eSIM su iPhone](https://support.apple.com/en-us/HT212780)
- [Supporto Google — Configurare una eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Supporto Google — eSIM Android](https://support.google.com/android/answer/11241215)