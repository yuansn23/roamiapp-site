---
title: "Dual eSIM non funziona? 12 soluzioni per iPhone"
h1_title: "Dual eSIM non funziona: 12 soluzioni per iPhone"
description: "Dual eSIM non funziona? Risolvi 12 problemi su iPhone: limiti CDMA, errori cache T-ADS, consumo batteria e verifica blocco operatore. Guida passo dopo passo per iPhone 17, 16."
keywords: ["risoluzione problemi eSIM", "attivazione eSIM fallita", "eSIM nessun servizio", "errore trasferimento eSIM", "Apple eSIM", "iOS 26 eSIM", "iPad eSIM non funziona", "impostazioni APN eSIM", "codice di conferma eSIM", "profilo eSIM scaduto", "eSIM legata a un altro dispositivo", "problema segnale dual eSIM", "eSIM DFU errore 53", "blocco operatore eSIM", "trasferimento eSIM multipiattaforma", "dual eSIM non funziona", "iPhone dual SIM nessun servizio"]
date: 2026-06-10T10:00:00Z
lastmod: 2026-06-10T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Risoluzione problemi", "Configurazione viaggio"]
toc: true

# Configurazione base sito & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Traduzione UI (supporto multilingua)
ui_text:
  updated_on: "Aggiornato il"
  min_read: "min di lettura"
  toc: "Indice"

breadcrumbs:
  home:
    text: "Home"
    url: "/"
  parent:
    text: "Centro assistenza"
    url: "/faq/"
    
# Sezione laterale: eSIM popolari (6 paesi, 1.99$)
sidebar_popular:
  title: "eSIM popolari"
  item_suffix: "eSIM"
  items:
    - name: "Stati Uniti"
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

# Sezione laterale: eSIM gratuita (4 paesi)
sidebar_free:
  title: "Richiedi eSIM gratuita"
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

# Sezione laterale: domande frequenti (5 domande)
sidebar_questions:
  title: "Domande popolari"
  items:
    - question: "Cos'è l'attivazione eSIM e come funziona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Come attivare un'eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Come attivare eSIM su iPhone (tutti i modelli)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Ultima lista compatibilità eSIM"
      url: "/compatibility/"
---

> **Punti chiave**  
> - **Gli operatori CDMA** (Verizon, US Cellular) potrebbero impedire la funzionalità vocale dual eSIM – passa a un piano GSM.  
> - **Errori della cache T-ADS** causano il mancato ricevimento delle chiamate – attiva/disattiva le chiamate Wi‑Fi per risolvere.  
> - Gli iPhone sono **dual standby, non dual active** – “Nessun servizio” sull'altra linea durante le chiamate è normale.  
> - Controlla il **Blocco operatore** in Impostazioni (`Nessuna restrizione SIM`) se non riesci ad aggiungere una seconda eSIM.  
> - Il consumo della batteria con **dual eSIM** può essere ridotto disabilitando il 5G sulla linea con segnale più debole.

<!-- NUOVO SNIPPET IN EVIDENZA: Domanda #1 - Come risolvere dual eSIM non funzionante su iPhone? -->
> **❓ Come risolvere il dual eSIM che non funziona su iPhone?**  
> Risolvi i problemi dual eSIM controllando lo stato del blocco operatore, attivando/disattivando le chiamate Wi-Fi per cancellare la cache T-ADS e passando da piani CDMA a piani solo GSM/5G. Se una linea mostra “Nessun servizio”, potrebbe trattarsi di un normale comportamento dual standby durante le chiamate.

Usare due numeri di telefono su un iPhone è estremamente comodo – ma comporta insidie nascoste. Dai conflitti CDMA vs GSM ai guasti nell'inoltro delle chiamate in arrivo (T‑ADS), questa guida copre tutto ciò che devi sapere per utilizzare **dual eSIM** o **eSIM + SIM fisica** senza problemi su iPhone 17, 16 e modelli precedenti con iOS 26. Per una panoramica completa della configurazione eSIM di base, consulta la nostra **[Guida completa eSIM per iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**. Questa guida alla risoluzione dei problemi dual eSIM segue le ultime [specifiche GSMA eSIM](https://www.gsma.com/esim/) ed è stata testata su iOS 26.

---

## 📌 Indice diagnostico rapido (specifico per dual eSIM)

| Sintomo | Causa più probabile | Sezione soluzione |
|---------|-------------------|--------------|
| La seconda eSIM mostra “Nessun servizio” ma la prima funziona | Incompatibilità del fallback voce CDMA | #2 |
| Un numero può chiamare ma non riceve chiamate | Cache T‑ADS dell'operatore obsoleta | #3 |
| Durante una chiamata, l'altra linea dice “Nessun servizio” | iPhone utilizza una sola rete dati alla volta | #4 |
| Impossibile aggiungere la seconda eSIM – errore “blocco operatore” | Dispositivo bloccato sul primo operatore | #5 |
| Il dual eSIM funziona ma consuma più batteria | Entrambe le linee cercano attivamente | #6 |
| eSIM + SIM fisica: SIM fisica non riconosciuta | Problema con vassoio SIM o scheda incompatibile | #7 |

<!-- NUOVO SNIPPET IN EVIDENZA: Domanda #3 - Problemi comuni dual eSIM e soluzioni (elenco) -->
> **❓ Problemi comuni dual eSIM e soluzioni**  
> 1. Incompatibilità voce CDMA – Passa a un piano solo GSM/5G  
> 2. Errore cache T-ADS – Attiva/disattiva chiamate Wi-Fi  
> 3. “Nessun servizio” durante le chiamate – Comportamento normale dual standby  
> 4. Blocco operatore – Richiedi sblocco all'operatore  
> 5. Consumo batteria – Disabilita la linea secondaria in aree con segnale debole  
> 6. SIM fisica non riconosciuta – Pulisci il vassoio, riavvia iPhone

---

## 1. Quali sono le opzioni dual eSIM su iPhone?

**Risposta diretta:** A partire da iPhone XS, XR e tutti i modelli successivi (incluso iPhone 17), Apple supporta il dual eSIM (due eSIM attive simultaneamente) su iPhone 13 e successivi. I modelli non USA supportano anche una eSIM più una nano‑SIM fisica. I modelli a doppia SIM fisica della Cina continentale non hanno supporto eSIM tranne che per iPhone 17 Air.

La tua configurazione **dual eSIM** dipende dal modello di iPhone e dalla regione. Apple offre le seguenti opzioni:

| Configurazione | Modelli supportati | Linee attive massime |
|---------------|------------------|------------------|
| **Dual eSIM** | iPhone 13 e successivi (inclusi tutti i modelli iPhone 17) | 2 |
| **1 eSIM + 1 nano‑SIM fisica** | Tutti gli iPhone con vassoio SIM (modelli non USA, e modelli USA prima di iPhone 14) | 2 |
| **1 sola SIM fisica** | iPhone più vecchi (pre‑XS) | 1 |
| **2 SIM fisiche** | Modelli specifici a doppio vassoio SIM per Cina continentale, Hong Kong, Macao (es. versione cinese di iPhone 17) | 2 |

Per un elenco completo degli iPhone compatibili, [verifica la compatibilità dual eSIM del tuo iPhone](/compatibility/).

> 📱 **iPhone 17 Air e serie iPhone 17 USA**: Nessun vassoio SIM fisico – solo dual eSIM. Se incontri problemi di attivazione su questi modelli, consulta la nostra **[Guida approfondita alla risoluzione dei problemi eSIM (16 casi reali)](/faq/esim-deep-troubleshooting-guide-2026/)** per soluzioni avanzate. La documentazione ufficiale Apple su [Informazioni su eSIM su iPhone](https://support.apple.com/it-it/HT209044) fornisce anche i passaggi di configurazione di base.

---

## 2. Limitazione critica: gli operatori CDMA rompono il dual eSIM

**Risposta diretta:** Se la tua linea principale utilizza un operatore CDMA come Verizon o US Cellular, il baseband dell'iPhone può gestire un solo canale voce CDMA alla volta. Aggiungendo una seconda eSIM, quella seconda linea mostrerà “Nessun servizio” per le chiamate vocali, anche se i dati potrebbero funzionare. L'unica soluzione completa è passare a un piano solo GSM/5G.

<!-- NUOVO SNIPPET IN EVIDENZA: Domanda #2 - Perché la mia seconda eSIM mostra Nessun servizio? -->
> **❓ Perché la mia seconda eSIM mostra Nessun servizio?**  
> Se la tua linea principale utilizza la tecnologia voce CDMA (Verizon, US Cellular), la tua seconda eSIM potrebbe mostrare “Nessun servizio”. Le reti CDMA utilizzano un canale vocale, impedendo alla seconda linea di effettuare chiamate pur consentendo l'uso dei dati.

Se la tua linea principale è su un **operatore CDMA** (Verizon, vecchi piani Sprint o alcuni operatori regionali USA), l'aggiunta di una seconda eSIM potrebbe fallire o la seconda linea mostrerà “Nessun servizio”. Questa è una nota limitazione del **dual eSIM**.

### Perché succede?
Le reti CDMA utilizzano una diversa tecnologia di fallback vocale (1xRTT). Il baseband dell'iPhone può gestire solo **un canale voce CDMA** alla volta. Quando la prima eSIM è CDMA, blocca il baseband in modalità CDMA, non lasciando risorse per la voce della seconda linea. La seconda linea potrebbe comunque ottenere dati LTE/5G, ma **non può effettuare o ricevere chiamate**.

**In parole semplici:** Immagina il modem cellulare del tuo iPhone come una strada a una corsia. Una linea CDMA è un grosso camion che blocca l'intera strada. Nessun'altra voce di linea può passare finché il camion non se ne va.

### Quali operatori sono CDMA?
- **Stati Uniti**: Verizon (piani più vecchi), US Cellular, alcuni MVNO. Per dettagli approfonditi sugli [operatori eSIM USA](/united-states-esim/), consulta la nostra guida.
- **Giappone**: au (KDDI) (CDMA eliminato, ma esistono piani legacy)
- **Altri**: La maggior parte del mondo utilizza GSM/UMTS/LTE (nessun problema)

### Soluzioni per dual eSIM con CDMA
- ✅ **Passa la tua linea principale a un piano solo GSM/5G** – es. [piani solo 5G di Verizon](https://www.verizon.com/plans/unlimited-plan) o T‑Mobile.
- ✅ **Usa la linea CDMA solo per i dati** – disattiva “Voce” per quella linea (non possibile in iOS; dovresti disabilitare VoLTE, che potrebbe non funzionare).
- ⚠️ **Soluzione alternativa**: Scambia quale linea è principale. Se devi mantenere CDMA, posizionala come seconda eSIM – ma allora la prima eSIM potrebbe perdere la voce.
- ❌ **Nessuna soluzione completa** – potresti dover mantenere una SIM fisica per la voce CDMA e usare l'eSIM solo per i dati.

Per un confronto più approfondito delle reti degli operatori USA, consulta il nostro **[confronto delle reti degli operatori USA](/carriers/united-states-esim-carrier-guide/)**.

---

## 3. Un numero può chiamare ma non ricevere – Errore cache T‑ADS

**Risposta diretta:** Questo accade quando la cache T‑ADS (Terminating Access Domain Selection) del tuo operatore diventa obsoleta, cercando di instradare le chiamate in arrivo verso una modalità di rete (come il 5G) che il tuo telefono non sta più utilizzando. La soluzione rapida: disattiva le chiamate Wi‑Fi per quella linea, riavvia l'iPhone, quindi riattiva le chiamate Wi‑Fi. Se fallisce, chiedi al tuo operatore di “cancellare la cache T‑ADS” per il tuo numero.

**Sintomo**: La linea A funziona bene. La linea B può effettuare chiamate in uscita, ma le chiamate in arrivo per B vanno direttamente alla segreteria o suonano come “non disponibile”.

**Causa principale**: La cache **T‑ADS (Terminating Access Domain Selection)** dell'operatore è obsoleta. Quando la linea B è passata di recente da 5G a LTE, o ha utilizzato le chiamate Wi‑Fi, la rete cerca ancora di instradare le chiamate in arrivo al vecchio dominio.

**Analogia:** Immagina che l'operatore abbia una vecchia rubrica che elenca ancora il tuo telefono nella tua casa precedente. Quando qualcuno chiama, va nel posto sbagliato. Attivare/disattivare le chiamate Wi‑Fi aggiorna la rubrica.

### Soluzione rapida (lato utente)
1. Disattiva temporaneamente le **chiamate Wi‑Fi**: `Impostazioni > Cellulare > Linea B > Chiamate Wi‑Fi` → OFF.
2. Riavvia l'iPhone.
3. Riattiva le chiamate Wi‑Fi.

### Soluzione lato operatore (chiama l'assistenza)
Chiedi al tuo operatore di “**cancellare la cache T‑ADS per questo numero**” o “**reimpostare il record di selezione del dominio**”. Di solito ha effetto entro 30 minuti. Per ulteriori problemi legati a T‑ADS e altre problematiche relative alle chiamate, consulta **[Soluzione 14 nella nostra guida di risoluzione dei problemi](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Prevenire la ricorrenza
- Evita di passare rapidamente da 5G a LTE (mantieni una modalità per almeno alcune ore).
- Se viaggi frequentemente, tieni il **Roaming dati** DISATTIVATO per la linea che non necessita di dati.

---

## 4. Durante una chiamata, l'altra linea dice “Nessun servizio” – Comportamento normale

**Risposta diretta:** Gli iPhone sono dual standby, non dual active. Solo una linea può mantenere una connessione cellulare alla volta. Mentre sei in chiamata usando la Linea A, la Linea B è temporaneamente irraggiungibile e mostra “Nessun servizio”. Quando la chiamata termina, entrambe le linee si riconnettono automaticamente. Abilita le chiamate Wi‑Fi su entrambe le linee per consentire alla linea inattiva di ricevere chiamate tramite Wi‑Fi durante una chiamata attiva.

**Sintomo**: Sei in chiamata usando la Linea A. Quando controlli, la Linea B mostra “Nessun servizio”.

**Spiegazione**: Gli iPhone sono **dual standby, non dual active**. Solo una linea può mantenere una connessione cellulare alla volta. Durante una chiamata, l'altra linea è temporaneamente irraggiungibile. Non appena la chiamata termina, entrambe le linee si riconnettono. Questo **non è un guasto del dual eSIM** – è previsto.

### Cosa puoi fare:
- **Abilita le chiamate Wi‑Fi su entrambe le linee** – quindi la linea inattiva potrebbe utilizzare il Wi‑Fi per ricevere chiamate mentre sei sull'altra linea. La [documentazione dual standby di Apple](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) spiega questo in modo più dettagliato.
- **Abilita “Consenti commutazione dati cellulare”** – in `Impostazioni > Cellulare > Dati cellulare`. Ciò consente alla linea senza dati di utilizzare la connessione della linea dati per le chiamate Wi‑Fi.

> 📌 Nota: Alcuni operatori non supportano le chiamate Wi‑Fi contemporaneamente su entrambe le linee. Verifica con il tuo operatore.

---

## 5. Dual eSIM non funziona? Controlla prima il blocco operatore

**Risposta diretta:** Se non riesci ad aggiungere una seconda eSIM o SIM fisica, vai su `Impostazioni > Generali > Info` e scorri fino a **Blocco operatore**. Deve dire “Nessuna restrizione SIM”. Se mostra “SIM bloccata” o un nome di operatore, il tuo iPhone è bloccato su quell'operatore. Contattalo per richiedere lo sblocco – gli operatori USA devono sbloccare i dispositivi completamente pagati.

Se non riesci ad aggiungere una seconda eSIM o SIM fisica:
- Il tuo iPhone potrebbe essere **bloccato dall'operatore** sul primo operatore.
- Per verificare: `Impostazioni > Generali > Info` → scorri fino a **Blocco operatore**. Deve dire “Nessuna restrizione SIM”.

### Cosa fare se è bloccato:
- Contatta il tuo operatore per richiedere lo sblocco. Gli operatori USA devono sbloccare dopo che il dispositivo è stato pagato.
- Se sbloccato ma ancora non funziona, potresti dover reimpostare le impostazioni di rete: `Impostazioni > Generali > Trasferisci o ripristina iPhone > Ripristina > Ripristina impostazioni di rete`. (Attenzione: dimentica le password Wi‑Fi.)

Una volta sbloccato, puoi anche spostare la tua eSIM tra iPhone e Android – consulta la nostra **[Guida al trasferimento eSIM multipiattaforma 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** per istruzioni passo dopo passo.

---

## 6. Consumo batteria dual eSIM: come ridurlo

**Risposta diretta:** Utilizzare due linee attive aumenta il consumo della batteria del 5-15%. Riduci il consumo impostando la linea con segnale più debole solo su LTE (non 5G), disattivando il Roaming dati sulla linea non utilizzata per i dati e disabilitando il 5G Standalone se supportato. In aree con segnale molto debole, disabilita temporaneamente la linea secondaria.

Utilizzare **dual eSIM** o anche eSIM + SIM fisica aumenta il consumo della batteria del 5-15%. Ecco come ridurre al minimo il consumo mantenendo entrambe le linee attive:

| Strategia | Effetto |
|----------|--------|
| Imposta la linea con segnale più debole per **usare solo LTE** (non 5G) | Risparmio moderato |
| Disattiva il **Roaming dati** sulla linea non utilizzata per i dati | Riduce la ricerca |
| Disabilita il **5G Standalone** (se il tuo operatore lo consente) | Aiuta molto |
| Usa la **Modalità dati ridotta** per le app in background sulla linea secondaria | Risparmio minore |
| In aree con segnale molto debole, disabilita temporaneamente la linea secondaria | Risparmio significativo |

Per disabilitare una linea: `Impostazioni > Cellulare` → tocca la linea → disattiva **Attiva questa linea**. Se viaggi spesso all'estero, [prova la eSIM gratuita di Roami](/free-esim/) come alternativa efficiente dal punto di vista energetico.

---

## 7. SIM fisica non riconosciuta (problemi con vassoio)

**Risposta diretta:** Se la tua nano‑SIM funziona in un altro telefono ma non nel tuo iPhone, rimuovi il vassoio della SIM, pulisci i contatti dorati con un panno morbido, reinseriscilo saldamente fino a quando scatta, quindi riavvia l'iPhone. Se ancora non viene riconosciuta, prova una nuova scheda SIM dal tuo operatore – la maggior parte dei piani postpagati offre sostituzioni gratuite.

**Sintomo**: La tua nano‑SIM funziona in un altro telefono ma non nel tuo iPhone.

**Cause comuni**:
- La scheda SIM è **CDMA** e l'iPhone è impostato in modalità solo eSIM? (raro)
- Vassoio SIM non inserito completamente o danneggiato.
- La scheda SIM è **troppo vecchia** (pre‑4G) o piegata.

**Soluzioni**:
1. Rimuovi il vassoio, pulisci i contatti con un panno morbido.
2. Reinseriscilo saldamente fino allo scatto.
3. Riavvia l'iPhone.
4. Se ancora non riconosciuta, prova la SIM in un altro telefono – se funziona, il lettore SIM del tuo iPhone potrebbe essere difettoso.
5. Sostituisci la scheda SIM presso il negozio dell'operatore (gratuito per la maggior parte dei piani postpagati).

Se prevedi di passare completamente all'eSIM, consulta la nostra **[guida eSIM per iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)** per i metodi di attivazione.

---

## 8. Casi regionali speciali: Cina, Hong Kong, Macao

**Risposta diretta:** Gli iPhone della Cina continentale (tranne iPhone 17 Air) hanno due slot nano‑SIM fisici e **nessun supporto eSIM**. I modelli di Hong Kong e Macao supportano tipicamente eSIM + SIM fisica. Se acquisti un iPhone a doppia SIM fisica della Cina continentale, non puoi installare alcuna eSIM, incluse le eSIM da viaggio internazionali – questa è una limitazione hardware.

Apple vende modelli specifici a doppia SIM fisica nella **Cina continentale**:
- iPhone 17, 17 Pro, 17 Pro Max: **due slot nano‑SIM fisici** (nessuna eSIM tranne Air).
- iPhone 17 Air: **solo eSIM** (globale, inclusa Cina).

Modelli di **Hong Kong e Macao**:
- Supportano **eSIM + SIM fisica** (come i modelli internazionali) o doppia SIM fisica a seconda del modello.
- Verifica sempre prima dell'acquisto se prevedi di utilizzare piani eSIM da viaggio.

> ⚠️ **Importante**: Se acquisti un iPhone a doppia SIM fisica della Cina continentale, **non puoi installare alcuna eSIM** (incluse le eSIM da viaggio internazionali) – tranne l'iPhone 17 Air. Questa è una limitazione hardware, non un blocco software.

---

## 9. Dual eSIM per lavoro e personale: migliori pratiche

Molti utenti mantengono un **numero di lavoro** (eSIM) e un **numero personale** (seconda eSIM o SIM fisica). Ecco come configurare la tua configurazione **dual eSIM** in modo pulito:

### Etichetta le linee chiaramente
`Impostazioni > Cellulare` → tocca una linea → `Etichetta piano cellulare` → scegli “Lavoro” o “Personale” o crea un'etichetta personalizzata.

### Scegli voce e dati predefiniti
- **Linea voce predefinita**: Quale linea utilizzare quando componi dall'app Telefono nativa (puoi comunque scegliere per chiamata).
- **Dati cellulare**: Quale linea utilizza i dati mobili. Attiva **Consenti commutazione dati cellulare** in modo che il telefono possa utilizzare temporaneamente i dati dell'altra linea se la linea principale perde il segnale.

### Separa i contatti
- Assegna i contatti a una linea specifica: Modifica contatto → `Linea preferita` → seleziona lavoro o personale.

### Previeni il roaming accidentale
- Disattiva il **Roaming dati** per la linea di lavoro se ha tariffe internazionali elevate.

---

## 10. Tabella di risoluzione dei problemi – Scenari dual eSIM

| Problema | Passo immediato | Soluzione a lungo termine |
|---------|----------------|----------------|
| La seconda eSIM non riceve mai segnale | Riavvia l'iPhone, quindi disattiva/riattiva la linea | Se operatore CDMA, passa a un piano GSM |
| Le chiamate vanno direttamente alla segreteria (nessuna suoneria) | Disattiva “Silenzia chiamate sconosciute” e l'inoltro di chiamate | Contatta l'operatore per reimpostare T‑ADS |
| Non riesco a ricevere SMS sulla seconda linea | Invia un SMS di prova da quella linea a qualsiasi numero | Assicurati che la linea non sia solo dati; l'operatore potrebbe dover abilitare gli SMS |
| Due eSIM ma entrambe mostrano “Nessun servizio” | Attiva/disattiva modalità aereo > controlla blocco operatore | Ripristina le impostazioni di rete |
| Ho scambiato le linee e ora FaceTime/iMessage non si attivano | Vai su `Impostazioni > Messaggi > Invia e Ricevi` – seleziona manualmente i numeri | Esci da Apple ID e rientra |

Per problemi aggiuntivi come “eSIM legata a un altro dispositivo” o “errore DFU restore 53”, consulta la nostra **[libreria completa di 16 casi di risoluzione dei problemi](/faq/esim-deep-troubleshooting-guide-2026/)**.

---

## 11. Domande frequenti

**D1: Posso usare due eSIM dello stesso operatore?**  
R: Sì, a patto che il tuo operatore consenta più profili eSIM su un unico account. Ad esempio, T‑Mobile USA supporta fino a due eSIM sullo stesso iPhone. Per un elenco completo dei modelli iPhone compatibili, consulta la **[tabella di compatibilità di iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/#2-global-iphone-17-models--esim-compatibility-table)**.

**D2: Entrambe le linee supporteranno il 5G simultaneamente?**  
R: Sì, su iPhone 13 e successivi (incluso iPhone 17), entrambe le linee possono essere in 5G (dual 5G standby). Tuttavia, solo una linea può utilizzare i dati 5G alla volta; l'altra utilizza il 5G per il fallback vocale (VoNR).

**D3: La mia seconda linea funziona ma la prima ha smesso di funzionare dopo aver aggiunto la seconda – cosa è successo?**  
R: Potresti aver accidentalmente scambiato le impostazioni della linea principale. Vai su `Impostazioni > Cellulare > Linea voce predefinita` e reimpostala.

**D4: Il dual eSIM consuma più batteria rispetto a eSIM + SIM fisica?**  
R: Generalmente, il dual eSIM consuma leggermente meno energia perché non c'è un lettore di schede fisico. Ma la differenza è trascurabile (entro 2-3%).

**D5: Sto viaggiando – posso usare un'eSIM locale per i dati e mantenere la mia eSIM di casa per le chiamate?**  
R: Sì, buona pratica:  
- Imposta l'eSIM locale come linea **Dati cellulare**.  
- Mantieni l'eSIM di casa come **Linea voce predefinita**.  
- Disattiva il **Roaming dati** sull'eSIM di casa per evitare costi elevati.  
- Attiva **Consenti commutazione dati cellulare** in modo che la tua linea di casa possa utilizzare i dati dell'eSIM locale per le chiamate Wi‑Fi e gli MMS.

Se cambi frequentemente dispositivo durante i viaggi, la **[guida al trasferimento eSIM multipiattaforma](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** ti aiuterà a spostare il tuo numero senza problemi.

**D6: Perché la seconda eSIM a volte scompare dopo un aggiornamento iOS?**  
R: Raro bug. Vai su `Impostazioni > Cellulare` → se la linea manca ma è ancora elencata in “SIM disponibili”, toccala e riattivala. In caso contrario, contatta l'operatore per reinviare il profilo.

**D7: Posso utilizzare una configurazione dual‑SIM con un Apple Watch?**  
R: Sì. Apple Watch può rispecchiare **una** delle linee dell'iPhone. Scegli quale linea vuoi sull'orologio durante la configurazione.

**D8: Dove posso trovare la documentazione ufficiale Apple per il dual eSIM?**  
R: Apple fornisce due risorse chiave: [Informazioni su eSIM su iPhone](https://support.apple.com/it-it/HT209044) e [Usare Dual SIM con un'eSIM](https://support.apple.com/it-it/HT209086). Coprono la compatibilità di base e la configurazione.

---

## 12. Suggerimenti finali per gli utenti dual eSIM

- **Etichetta le tue linee** immediatamente dopo la configurazione – evita un'enorme confusione.
- **Imposta suonerie diverse** per ogni linea: `Impostazioni > Suoni e feedback tattili > Suoneria` → scorri verso il basso, puoi assegnare per linea.
- **Usa l'automazione Scorciatoie** per cambiare la linea voce predefinita in base all'ora (es. ore lavorative = linea lavoro; sera = personale).
- **Prima di vendere il tuo dispositivo**: Vai su `Impostazioni > Cellulare`, elimina **tutte** le eSIM e rimuovi la SIM fisica. Quindi cancella tutto il contenuto e le impostazioni. Per una procedura dettagliata sull'eliminazione delle eSIM e la cancellazione dei piani, consulta **[Soluzione #9 nella nostra guida di risoluzione dei problemi](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.

> 📎 **Guide correlate su questo sito:**
> - [Guida approfondita alla risoluzione dei problemi eSIM (16 casi reali)](/faq/esim-deep-troubleshooting-guide-2026/)
> - [Guida completa eSIM per iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)
> - [Trasferimento eSIM multipiattaforma 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)

---