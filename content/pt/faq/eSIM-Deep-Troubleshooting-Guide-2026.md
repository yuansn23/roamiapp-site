---
title: "Guia de Troubleshooting Profundo de eSIM 2026"
h1_title: "O Guia Completo de Troubleshooting de eSIM em 2026 – 18 Correções do Mundo Real"
description: "Corrija falhas de ativação de eSIM, erros de transferência, ausência de serviço e problemas de escaneamento de QR no iPhone e Android com este guia de troubleshooting de 2026."
image: "/img/faq/esim-troubleshooting-guide.webp"
image-1: "/img/faq/esim-troubleshooting-guide-1.jpg"
keywords: ["troubleshooting eSIM", "ativação de eSIM falhou", "eSIM sem serviço", "erro de transferência de eSIM", "transferência de eSIM entre plataformas", "eSIM iOS 18", "ajustes APN eSIM", "código de confirmação eSIM", "bloqueio de operadora eSIM", "eSIM travado em ativando"]
date: 2026-09-17T00:00:00Z
lastmod: 2026-09-17T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Atualizado em"
  min_read: "min de leitura"
  toc: "Índice"

breadcrumbs:
  home:
    text: "Início"
    url: "/"
  parent:
    text: "Central de Ajuda"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIMs Populares"
  item_suffix: "eSIM"
  items:
    - name: "eSIM EUA"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "eSIM Alemanha"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "eSIM Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "eSIM Turquia"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "eSIM Japão"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "eSIM China"
      flag: "/img/flags/cn.svg"
      price: "$1.99"
      url: "/china-esim/"
      badge: "5G"

# Sidebar: Free eSIM offers
sidebar_free:
  title: "Resgate um eSIM Grátis"
  icon: "🎁"
  item_suffix: "eSIM Grátis"
  item_subtitle: "eSIM Grátis"
  items:
    - name: "eSIM Reino Unido"
      flag: "/img/flags/gb.svg"
      url: "/free-esim/"
    - name: "Alemanha"
      flag: "/img/flags/de.svg"
      url: "/free-esim/"
    - name: "Tailândia"
      flag: "/img/flags/th.svg"
      url: "/free-esim/"
    - name: "Hong Kong"
      flag: "/img/flags/hk.svg"
      url: "/free-esim/"

# Sidebar: Popular questions
sidebar_questions:
  title: "Perguntas Populares"
  items:
    - question: "O que é a ativação de eSIM e como funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Como ativar um eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Como ativar o eSIM no iPhone (todos os modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista de compatibilidade de eSIM mais recente"
      url: "/compatibility/"
---


> **Nota do Editor:** A Roami opera o suporte por trás desta referência. Quando um viajante se depara com um erro específico na tela — "Activation failed", "No Service", "Cellular Plan Cannot Be Added", erro de restauração 4013/4014 — esta é a página que nossa própria equipe abre para decifrá-lo. Cada entrada abaixo mapeia uma mensagem de erro exata à sua causa real e a uma correção concreta, testada no iOS 18 e no Android 14/15 até setembro de 2026.

> **Página errada?** Se sua pergunta é "meu celular sequer suporta eSIM" — modelo da China/Hong Kong, bloqueio de operadora, EID ausente — essa é uma pergunta de hardware, não um erro. Vá para o nosso [guia de hardware e códigos de erro de eSIM](/faq/esim-activation-errors-troubleshooting-guide/). Esta página pressupõe que seu celular pode usar eSIM e que o problema é uma mensagem de erro específica.

## Fluxo de Diagnóstico Rápido de eSIM

Use este mapa de decisões para ir direto à correção da mensagem exata na sua tela.

| O que você vê / vivencia | O que provavelmente está quebrado | Urgência | Ir para a correção |
|---------------------------|----------------------|---------|-------------|
| **O código QR não escaneia / diz inválido** | Código QR expirado ou danificado | Baixa | [Seção 3](#esim-qr-code-invalid-or-expired) |
| **"Unable to Activate" ou "Activation failed"** | Timeout de rede ou erro do servidor | Média | [Seção 1](#esim-activation-failed-or-unable-to-activate) |
| **"No Service" após a instalação** | Data Roaming desligado ou APN ausente | Alta | [Seção 2](#esim-no-service-after-installation) |
| **Barras de sinal cheias, mas sem internet** | APN mal configurado | Alta | [Seção 8](#esim-no-data-connection-after-activation) |
| **"Cellular Plan Cannot Be Added"** | ESIMs armazenados demais ou restrição de hardware | Média | [Seção 5](#esim-cellular-plan-cannot-be-added) |
| **"eSIM já em uso"** | Perfil ainda vinculado ao dispositivo antigo | Alta | [Seção 4](#esim-already-in-use-or-bound-to-another-device) |
| **Aviso de código de confirmação** | Perfil exige um PIN | Baixa | [Seção 6](#esim-confirmation-code-required) |
| **"SIM não suportado"** | Celular bloqueado pela operadora | Alta | [Seção 7](#esim-sim-not-supported-on-a-carrier-locked-device) |
| **Travado em "Activating" por >10 minutos** | Download travado | Média | [Seção 9](#esim-stuck-on-activating) |
| **Dual SIM: uma linha sem sinal** | Conflito de roteamento | Média | [Seção 10](#dual-esim-with-one-line-showing-no-service) |
| **eSIM transferido para novo celular, falha** | Transferência entre plataformas não suportada | Alta | [Seção 11](#esim-transfer-failed) |
| **Erro de restauração do iPhone 4013/4014** | Problema de hardware/firmware, não de eSIM | Alta | [Seção 12](#iphone-esim-restore-error-4013-or-4014) |
| **"Perfil expirado"** | Código QR venceu | Baixa | [Seção 13](#esim-profile-expired) |
| **Roaming não funciona no exterior** | Interruptor de Data Roaming desligado | Alta | [Seção 14](#esim-data-roaming-not-working) |
| **Apagou o eSIM por acidente** | Erro do usuário | Alta | [Seção 15](#esim-deleted-by-mistake) |
| **MDM bloqueia alterações de eSIM** | Política do dispositivo corporativo | Média | [Seção 16](#mdm-or-enterprise-restrictions-block-esim) |
| **eSIM desapareceu após reiniciar** | Falha de software do iOS/Android | Alta | [Seção 17](#esim-disappeared-after-restart) |
| **Wi-Fi Calling funciona, mas os dados do eSIM não** | Conflito de roteamento entre Wi-Fi e celular | Média | [Seção 18](#wi-fi-calling-works-but-esim-data-does-not) |
| **SIM físico inserido, eSIM não funciona** | Conflito de bandeja de SIM | Alta | [Seção 19](#esim-vs-physical-sim-conflict) |
| **eSIM do Apple Watch não conecta** | Problema de pareamento ou operadora do relógio | Média | [Seção 20](#apple-watch-esim-not-working) |


## Tabela de Referência Rápida

| Sintoma | Causa mais provável | Correção |
|---------|-------------------|-----|
| "Unable to Activate" / "Activation failed" | Wi-Fi instável ou erro no servidor da operadora | Rede estável + tentar de novo, depois reinstalar (Seção 1) |
| "No Service" após a instalação | Data roaming desligado / APN ausente | Ativar roaming, verificar o APN (Seção 2) |
| Código QR "Inválido" / "Expirado" | Código QR expirado ou já usado | Solicite um novo código QR (Seção 3) |
| "eSIM já em uso" | Perfil não liberado do dispositivo antigo | Apague do dispositivo antigo ou liberação da operadora (Seção 4) |
| "Cellular Plan Cannot Be Added" | ESIMs armazenados demais | Remova eSIMs não utilizados (Seção 5) |
| Código de confirmação exigido | Perfil tem um código obrigatório | Encontre o código de 4–8 dígitos no e-mail da operadora (Seção 6) |
| "SIM não suportado" | Dispositivo bloqueado pela operadora | Desbloqueie o dispositivo ou contate a operadora (Seção 7) |
| Sem dados após a ativação | APN não configurado | Insira o APN manualmente (Seção 8) |
| Travado em "Activating" | Download do perfil travado | Ligue e desligue o Modo Avião, reinstale (Seção 9) |
| Uma linha dual-SIM "No Service" | Conflito de roteamento de chamadas/dados | Verifique o roteamento e os interruptores das linhas (Seção 10) |
| Transferência de eSIM falhou | Operadora não suporta a transferência | Use o código QR da operadora como alternativa (Seção 11) |
| Erro de restauração 4013 / 4014 | Hardware/firmware durante a restauração | Troque o cabo, atualize o computador (Seção 12) |
| "Perfil expirado" | Código QR com prazo limitado | Solicite um novo código QR (Seção 13) |
| Data roaming não funciona | Roaming desligado na linha do eSIM | Ative o Data Roaming (Seção 14) |
| Apagou um eSIM por engano | Perfil removido localmente | Contate a operadora / compre um novo plano (Seção 15) |
| MDM bloqueia alterações de eSIM | Restrição corporativa | Contate seu administrador de TI (Seção 16) |
| eSIM desapareceu após reiniciar | Falha de software do iOS/Android | Verifique os ajustes, readicione o perfil (Seção 17) |
| Wi-Fi Calling funciona, mas os dados não | Conflito de roteamento | Desative o Wi-Fi Calling temporariamente (Seção 18) |
| SIM físico inserido, eSIM para de funcionar | Conflito de bandeja/leitor | Remova o SIM físico, reinicie (Seção 19) |
| eSIM do Apple Watch não conecta | Problema de pareamento ou operadora | Pareie novamente o relógio, contate a operadora (Seção 20) |


## eSIM: Ativação Falhou ou Unable to Activate

**Causa:** Quase sempre uma conexão Wi-Fi instável ou um erro temporário do servidor da operadora (SM-DP+), não um problema do seu celular. O SM-DP+ (Subscription Manager - Data Preparation Plus) é o servidor seguro que entrega seu perfil de eSIM ao seu dispositivo — se ele estiver inacessível, a ativação falha.

**Correção:**
1. Vá para um Wi-Fi estável ou uma conexão de dados móveis.
2. Ligue e desligue o Modo Avião para atualizar o baseband.
3. Se o erro se repetir, apague o eSIM pendente em `Settings > Cellular`, reinicie e escaneie o código QR novamente.

**Específico do iOS 18:** No iOS 18, a mensagem pode ser "Unable to Complete Activation" com um botão Retry. Toque em Retry primeiro — o fluxo de ativação aprimorado do iOS 18 geralmente resolve o problema sem uma reinstalação completa.

---

## eSIM: "No Service" Após a Instalação

**Causa:** O perfil foi instalado, mas o celular não se registrou em uma rede local — geralmente porque o Data Roaming está desligado ou o APN está ausente.

**Correção:**
1. Ligue o **Data Roaming** na linha do eSIM.
2. Em `Settings > Cellular > [seu eSIM] > Network Selection`, desligue "Automatic", selecione manualmente uma operadora, espere falhar e volte para "Automatic" para forçar um novo registro.
3. Se ainda não houver dados, verifique o APN (Seção 8).

---

## eSIM: Código QR Inválido ou Expirado

**Causa:** Os códigos QR de eSIM são de uso único e têm prazo limitado. O código foi usado ou expirou.

**Correção:** Contate seu provedor de eSIM e peça a reemissão de um novo código QR, depois escaneie-o imediatamente.

**Se você está escaneando pela tela do celular:** Salve primeiro a imagem do código QR nas Fotos e, em Settings > Cellular > Add eSIM, escolha "Use QR Code" e toque em "Choose Photo" para selecionar a imagem salva. Isso evita o problema de "não conseguir escanear a própria tela".

---

## eSIM Já Em Uso ou Vinculado a Outro Dispositivo

**Causa:** O perfil nunca foi liberado do dispositivo antigo, então a operadora ainda o associa àquele celular.

**Correção:**
1. No dispositivo antigo, apague o eSIM em `Settings > Cellular`.
2. Espere cerca de cinco minutos e tente de novo no dispositivo novo.
3. Se o dispositivo antigo foi perdido ou quebrou, contate sua operadora e peça que liberem o perfil à força do lado deles.

---

## eSIM: Cellular Plan Cannot Be Added

**Causa:** O celular atingiu seu limite de perfis de eSIM armazenados (tipicamente 8–10, dependendo do modelo), ou o dispositivo é um modelo da China continental sem hardware de eSIM.

**Correção:** Remova os eSIMs não utilizados em `Settings > Cellular` e depois adicione o novo. Se seu dispositivo foi comprado na China continental, ele usa dois slots de SIM físico e não pode adicionar um eSIM — para saber como identificar um modelo da China ou de Hong Kong e confirmar que seu celular tem o hardware, veja nosso [guia de verificação de hardware e erros](/faq/esim-activation-errors-troubleshooting-guide/).

---

## eSIM: Código de Confirmação Exigido

**Causa:** Alguns perfis de eSIM têm um código de confirmação obrigatório exigido antes do download do perfil. É um PIN de 4-8 dígitos que verifica sua identidade.

**Correção:** Procure um código de 4–8 dígitos no e-mail que sua operadora enviou junto com o código QR. Se não encontrá-lo, contate a operadora.

**Lugares comuns para encontrar o código de confirmação:**
- Na linha de assunto do e-mail de ativação
- Perto do rodapé do e-mail, em "Activation Details"
- No app da operadora, em "My Plans" > "Details"

---

## eSIM: SIM Não Suportado em um Dispositivo com Bloqueio de Operadora

**Causa:** O celular está bloqueado em outra operadora e não pode aceitar um perfil de um provedor diferente.

**Correção:** Verifique `Settings > General > About > Carrier Lock`. Se não disser "No SIM restrictions", contate sua operadora de origem para solicitar o desbloqueio. Para um passo a passo completo de bloqueios de operadora — como verificar o status, políticas de desbloqueio das operadoras dos EUA e como conseguir o desbloqueio — veja nosso [guia de hardware e bloqueio de operadora](/faq/esim-activation-errors-troubleshooting-guide/).

---

## eSIM: Sem Conexão de Dados Após a Ativação

**Causa:** O Access Point Name (APN) não foi configurado automaticamente, então o celular não tem rota para a rede de dados.

**Correção:**
1. Vá em `Settings > Cellular > Cellular Data Network`.
2. Insira o valor de APN do site do seu provedor de eSIM (por exemplo, `globaldata` para a Airalo).
3. A maioria dos eSIMs de viagem configura o APN automaticamente, então confirme o valor correto com seu provedor.

**Valores de APN comuns por provedor (se a configuração automática falhar):**

| Provedor | APN | Usuário | Senha |
|----------|-----|----------|----------|
| Roami | internet | (em branco) | (em branco) |
| Airalo | globaldata | (em branco) | (em branco) |
| Holafly | hola | (em branco) | (em branco) |
| Nomad | nbdata | (em branco) | (em branco) |
| Ubigi | ubigi | (em branco) | (em branco) |
| Google Fi | h2g2 | (em branco) | (em branco) |
| T-Mobile (EUA) | fast.t-mobile.com | (em branco) | (em branco) |
| AT&T (EUA) | nxgen | (em branco) | (em branco) |
| Verizon (EUA) | vzwinternet | (em branco) | (em branco) |
| EE (Reino Unido) | everywhere | (em branco) | (em branco) |
| O2 (Reino Unido) | mobile.o2.co.uk | web | web |
| Vodafone (Reino Unido) | internet | (em branco) | (em branco) |
| Three (Reino Unido) | three.co.uk | (em branco) | (em branco) |

---

## eSIM Travado em "Activating"

**Causa:** O download do perfil travou, geralmente por sinal fraco ou um servidor de ativação sobrecarregado.

**Correção:**
1. Certifique-se de estar em uma rede estável.
2. Ligue e desligue o Modo Avião.
3. Se ficar travado por mais de 10 minutos, apague o eSIM e reinstale-o a partir do código QR.

---

## eSIM Duplo com Uma Linha Mostrando "No Service"

**Causa:** Com dois eSIMs ativos, o roteamento de chamadas recebidas e de dados pode entrar em conflito, deixando uma linha sem serviço. Este é um **problema de sinal de eSIM duplo** comum que afeta usuários com duas linhas ativas.

**Correção:**
1. Em `Settings > Cellular`, confirme qual linha está definida para **Cellular Data** e qual para **Default Voice Line**.
2. Desative e reative cada linha.
3. Para uma correção mais profunda, veja nosso guia **[eSIM duplo não funciona? 12 correções para iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

---

## eSIM: Transferência Falhou

**Causa:** Não há transferência de eSIM entre plataformas nativa, e sua operadora pode não suportar a transferência pelo app.

**Correção:** Peça à sua operadora para reemitir o eSIM como um novo código QR e escaneie-o no dispositivo novo. Após a transferência, o WhatsApp, o iMessage e os códigos de dois fatores por SMS continuam funcionando porque seu número não mudou. Para instruções passo a passo completas, veja nosso **[guia de transferência de eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

---

## iPhone: Erro de Restauração de eSIM 4013 ou 4014

**Causa:** Esses erros indicam um problema de hardware ou firmware durante uma restauração de software, não um problema de eSIM. Geralmente são causados por um cabo USB com defeito ou um software de computador desatualizado.

**Correção:** Tente outro cabo e porta USB, atualize o sistema operacional do seu computador e tente a restauração novamente. Contate o Suporte Apple se o erro persistir.

---

## eSIM: Perfil Expirado

**Causa:** O código QR ou o código de ativação do eSIM tinha prazo limitado e expirou.

**Correção:** Contate seu provedor de eSIM e peça um novo código QR, depois ative-o prontamente.

---

## eSIM: Data Roaming Não Funciona

**Causa:** O Data Roaming está desligado na linha do eSIM de viagem, então ela não consegue se conectar à rede local.

**Correção:** Vá em `Settings > Cellular > [seu eSIM]` e ligue o **Data Roaming**. Isso é necessário para a maioria dos eSIMs de viagem funcionarem no exterior.

---

## eSIM Apagado por Engano

**Causa:** Apagar um eSIM remove o perfil do celular, mas não cancela o plano.

**Correção:**
- Para eSIMs pós-pagos de operadoras, contate a operadora — eles geralmente podem reemitir o código QR.
- Para eSIMs de viagem (Roami, Airalo e similares), a exclusão geralmente é permanente, então você precisará comprar um novo plano.
- Sempre mantenha um backup do e-mail de ativação original e do código QR.

---

## Restrições de MDM ou Corporativas Bloqueiam o eSIM

**Causa:** Em um dispositivo gerenciado (corporativo), uma política de Mobile Device Management como a `AllowESIMModification` pode bloquear a adição ou remoção de eSIMs.

**Correção:** Contate seu administrador de TI para habilitar as alterações de eSIM, ou use um dispositivo não gerenciado.

---

## eSIM Desapareceu Após Reiniciar

**Sintoma:** Você reiniciou o celular e o eSIM não aparece mais em Settings > Cellular. Ele sumiu.

**Causa:** Uma falha de software no iOS ou Android pode às vezes fazer os perfis de eSIM ficarem ocultos ou ilegíveis após uma reinicialização, especialmente depois de uma atualização do sistema. O perfil ainda está no dispositivo, mas o sistema falhou em montá-lo.

**Correção:**
1. **iPhone:** Vá em Settings > General > About e role até "Available SIM" ou "Digital SIM". Se o eSIM aparecer lá, mas não em Cellular, reinicie o celular novamente.
2. **iPhone:** Se reiniciar não funcionar, vá em Settings > Cellular > Add eSIM. Às vezes o celular detectará o perfil existente e oferecerá readicioná-lo sem um novo código QR.
3. **Android (Samsung):** Vá em Settings > Connections > SIM Manager. O eSIM pode aparecer como "Inactive". Toque nele e ative.
4. **Android (Pixel):** Vá em Settings > Network & Internet > SIMs. Se o eSIM estiver ausente, toque em "Add Carrier" — o celular pode detectar o perfil existente.
5. Se nada disso funcionar, contate sua operadora e solicite um novo código QR. O perfil antigo pode estar corrompido.

**Prevenção:** Antes de reiniciar, certifique-se de que todas as linhas de eSIM estão DESLIGADAS, depois reinicie e ligue-as novamente. Isso reduz a chance de o sistema perder o rastro do perfil.

---

## Wi-Fi Calling Funciona, Mas os Dados do eSIM Não

**Sintoma:** Você tem o Wi-Fi Calling ativo na sua linha de casa, mas seu eSIM de viagem não tem conexão de dados. Ou, o eSIM funciona no Wi-Fi, mas não nos dados móveis.

**Causa:** Um conflito de roteamento entre o Wi-Fi Calling e os dados móveis. Quando o Wi-Fi Calling está ativo, o celular pode priorizar a rede Wi-Fi para todas as comunicações, incluindo dados, e falhar em rotear corretamente os dados móveis pelo eSIM.

**Correção:**
1. Desative temporariamente o Wi-Fi Calling na sua linha de casa: Settings > Cellular > [linha de casa] > Wi-Fi Calling > desligue.
2. Ligue e desligue o Modo Avião para forçar o celular a se registrar novamente na rede móvel.
3. Teste a conexão de dados do eSIM. Se funcionar, você pode religar o Wi-Fi Calling — o roteamento agora deve estar correto.
4. Se o problema se repetir, verifique se sua linha de casa tem o **Data Roaming DESLIGADO** e o eSIM de viagem tem o **Data Roaming LIGADO**.

**Alternativa:** No iPhone, vá em Settings > Cellular > Cellular Data e certifique-se de que o eSIM de viagem está selecionado. Depois, ative o "Allow Cellular Data Switching" — isso permite que o celular use o eSIM de viagem para os dados do Wi-Fi Calling mesmo que a linha de casa seja a linha de voz.

---

## eSIM vs SIM Físico: Conflito

**Sintoma:** Você insere um cartão SIM físico no celular, e seu eSIM que funcionava de repente mostra "No Service" ou desaparece por completo dos Ajustes.

**Causa:** Este é um comportamento conhecido em dispositivos com bloqueio de operadora. Quando um iPhone bloqueado detecta um SIM físico de outra operadora, ele pode desativar o slot do eSIM para evitar uso não autorizado. Em alguns dispositivos Android, inserir um SIM físico também pode fazer o sistema priorizar o SIM físico sobre o eSIM em todas as funções. Novo em misturar os dois formatos? A [comparação de eSIM vs SIM físico](/faq/what-is-esim/) explica como eles coexistem.

**Correção:**
1. Remova o cartão SIM físico da bandeja.
2. Reinicie o celular.
3. O eSIM deve reaparecer em Settings > Cellular (iPhone) ou Settings > Connections > SIM Manager (Android).
4. Se o eSIM reaparecer, mas ainda mostrar "No Service", ligue o Data Roaming na linha do eSIM.
5. Se você precisa que o SIM físico e o eSIM funcionem simultaneamente, contate sua operadora para desbloquear o dispositivo.

> **Alternativa:** Alguns usuários relatam que desativar e reativar a linha do eSIM (sem remover o SIM físico) resolve o conflito. Tente isso primeiro antes de remover o SIM físico.

---

## eSIM do Apple Watch Não Funciona

**Sintoma:** Você configurou os dados móveis no Apple Watch, mas ele mostra "No Service" ou "Searching" — ou o plano de eSIM não aparece de jeito nenhum no app Watch.

**Causa:** A ativação do eSIM do Apple Watch exige suporte da operadora ao tipo específico de plano do relógio, e a configuração exige que seu iPhone esteja por perto com uma conexão estável de internet.

**Correção:** Verifique que sua operadora suporta o eSIM do Apple Watch, depois despareie e pareie novamente o relógio, mantendo o iPhone por perto o tempo todo. Se ainda não ativar, contate sua operadora com o **EID** e o **IMEI** do relógio para que provisionem manualmente. Para um passo a passo completo — incluindo quais modelos de iPad e Apple Watch suportam eSIM — veja nosso [guia de eSIM para iPad e Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

---

## Referência de Códigos de Erro do eSIM

| Código de Erro | Plataforma | Significado | Correção |
|------------|----------|---------|-----|
| **4013** | iPhone (restauração) | Falha de hardware/firmware durante a restauração | Troque o cabo, a porta USB, atualize macOS/iTunes |
| **4014** | iPhone (restauração) | Semelhante ao 4013; geralmente um problema de comunicação USB | O mesmo acima |
| **-8** | Android (ativação) | Timeout de rede | Espere e tente de novo, ou troque o Wi‑Fi |
| **-100** | Android (escaneamento de QR) | Formato de código QR não suportado | Use a entrada manual |
| **0xE8000001** | iPhone (ativação) | Servidor da operadora inacessível | Tente de novo após 5 minutos ou use a entrada manual |
| **"eSIM configuration not supported"** | Android (Samsung) | A operadora não suporta eSIM naquele modelo | Verifique com a operadora |
| **"Invalid SM‑DP+ address"** | Ambos | Endereço de entrada manual está errado | Confira o endereço com seu provedor |
| **"LPA error -1"** | Android | Erro genérico do LPA (Local Profile Assistant) | Reinicie o celular, tente de novo. Se persistir, use outro app de eSIM. |
| **"EID mismatch"** | Ambos | O perfil está vinculado a um dispositivo diferente | Contate a operadora para liberar o perfil (Seção 4) |
| **"No EID" ao discar `*#06#`** | Ambos | Dispositivo não suporta eSIM | Seu celular não tem hardware de eSIM — veja nosso [guia de verificação de hardware](/faq/esim-activation-errors-troubleshooting-guide/) |
| **"eSIM management not available"** | Android (OnePlus) | Bug do Oxygen OS | Atualize para a versão mais recente do Oxygen OS |
| **"Profile cannot be deleted"** | iPhone | eSIM travado em estado pendente | Reinicie o iPhone e tente apagar novamente. Se travar, contate a operadora. |
| **-1** | Ambos | Falha de ativação genérica | Reinicie o celular, verifique a conectividade, tente de novo |
| **-2** | Android | Código de ativação inválido | Reinsira o código ou solicite um novo à operadora |


## Erros Que Quebram Seu eSIM

Estes são os erros de usuário mais comuns que transformam um eSIM funcional em um tijolo. Evite-os a todo custo — a maioria decorre de como a ativação realmente funciona, o que o [explicador de ativação de eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) cobre passo a passo.

| Erro | O Que Acontece | Como Evitar |
|---------|--------------|--------------|
| **Apagar o eSIM para "consertar" um problema de conexão** | O perfil é removido permanentemente — você perde todos os dados restantes e precisa comprar um novo plano | Nunca toque em "Delete eSIM" a menos que o plano esteja totalmente expirado. Apagar não "atualiza" — destrói. |
| **Escanear o código QR com o app Câmera** | A câmera reconhece o código, mas não faz nada — nenhum perfil é instalado | Sempre abra primeiro Settings > Cellular > Add eSIM — nunca use o app Câmera sozinho. |
| **Instalar no aeroporto com Wi-Fi fraco** | O download se interrompe no meio da instalação, corrompendo o perfil | Instale em casa, no seu Wi-Fi estável, antes de sair. |
| **Esperar pousar para instalar** | Você chega sem Wi-Fi e não consegue baixar o perfil | Instale o perfil antes de partir (ele fica inativo até você ligar o Data Roaming). |
| **Esquecer de ligar o Data Roaming no eSIM** | Barras de sinal cheias, mas zero internet | Depois de pousar, vá em Settings > Cellular > [seu eSIM] e ligue o Data Roaming. |
| **Redefinir os ajustes de rede achando que vai "atualizar" o eSIM** | A redefinição de rede não apaga eSIMs, mas remove senhas de Wi-Fi e pareamentos Bluetooth — você perde todas as redes salvas | Só redefina os ajustes de rede como último recurso, sabendo que não corrigirá problemas de ativação de eSIM. |
| **Desligar a linha do eSIM em vez de apenas desativar o Data Roaming** | O eSIM é desativado por completo e não se registra quando você reativa | Desligue o Data Roaming, não a linha inteira. Mantenha a linha LIGADA, mas o roaming DESLIGADO quando não estiver em uso. |


## Vários Problemas de eSIM ao Mesmo Tempo

Às vezes você não tem só um problema — tem dois ou três de uma vez. Veja como diagnosticar sintomas combinados:

| Combinação de Sintomas | O Que Realmente Está Acontecendo | Ordem de Correção |
|---------------------|---------------------------|-----------|
| **O código QR escaneia, mas depois "Activation failed"** | O código QR é válido, mas o servidor de download está inacessível | Corrija a rede primeiro (Seção 1), depois reescaneie |
| **eSIM mostra barras de sinal, mas sem dados E "No Service" na linha de casa** | O APN está ausente E você tem um conflito de roteamento dual-SIM | Corrija o APN primeiro (Seção 8), depois o roteamento dual-SIM (Seção 10) |
| **Transferência funcionou, mas o celular novo tem "No Service"** | O perfil foi transferido, mas não se registrou na nova rede | Apague o eSIM do celular antigo, depois reinicie o novo (Seção 4 + Seção 2) |
| **Wi-Fi Calling funciona, mas o eSIM não tem dados E a linha de casa tem cobranças de roaming** | Múltiplos conflitos de roteamento mais Data Roaming deixado LIGADO na linha de casa | Desligue o Data Roaming da linha de casa, corrija o conflito do Wi-Fi Calling (Seção 18), depois verifique o APN |
| **eSIM desapareceu após reiniciar E "Cellular Plan Cannot Be Added"** | O perfil está corrompido E o armazenamento está cheio | Remova os eSIMs não utilizados primeiro (Seção 5), depois tente readicionar (Seção 17) |

**Regra geral:** Corrija **os problemas de rede primeiro** (Wi-Fi, Data Roaming, APN), depois **os problemas de perfil** (código QR, ativação), depois **os problemas específicos do dispositivo** (bloqueio de operadora, MDM). Não tente corrigir tudo de uma vez — percorra os sintomas um de cada vez.


## Onde Encontrar o Add eSIM em Cada Celular

A correção para a maioria dos erros é a mesma, mas o caminho no menu para chegar aos controles do eSIM varia por marca. Aqui estão os caminhos exatos, mais as peculiaridades de erro que só aparecem em dispositivos específicos. (Para os métodos de instalação completos por trás desses menus, o [guia geral de ativação](/faq/how-to-activate-an-esim/) tem todos os passos.)

### Caminho do Menu de eSIM do iPhone
- **"Add eSIM" cinza** – seu iPhone pode estar com bloqueio de operadora. Verifique Settings > General > About > Carrier Lock; para a correção completa de bloqueio de operadora, veja nosso [guia de bloqueio de operadora e hardware](/faq/esim-activation-errors-troubleshooting-guide/).
- **Quick Transfer falha** – certifique-se de que ambos os celulares estão no mesmo Apple ID, com Bluetooth ligado e a menos de 10 cm um do outro.
- **Após atualização do iOS, o eSIM mostra "No Service"** – vá em Settings > Cellular > toque no eSIM > desligue e ligue novamente o "Turn On This Line". Verifique também que o Data Roaming continua LIGADO.
- **eSIM desapareceu após atualização do iOS** – veja a Seção 17. Isso é mais comum no iOS que no Android após grandes atualizações.
- **Específico do iOS 18:** O fluxo "Add eSIM" foi redesenhado com uma opção de entrada manual mais proeminente. Se você está no iOS 18 e o código QR não escaneia, o botão de entrada manual agora é mais fácil de encontrar na parte de baixo da tela.

### Caminho do Menu de eSIM do Samsung Galaxy
- **O caminho do menu varia pela versão do One UI:**
  - **One UI 5 (Android 13):** Settings > Connections > SIM Manager > Add eSIM
  - **One UI 6/6.1 (Android 14):** Settings > Connections > SIM Manager > Add eSIM (mesmo caminho)
  - **One UI 7 (Android 15):** Settings > Connections > SIM Manager > Add Mobile Plan
- **Escaneamento do código QR falha** – tente a entrada manual (toque em "Enter activation code manually"). A Samsung geralmente exige o endereço SM‑DP+ e o código de ativação separadamente.
- **Conflito de dual SIM** – se você tem um SIM físico e um eSIM, verifique que o eSIM está definido como SIM de dados no SIM Manager.

### Caminho do Menu de eSIM do Google Pixel
- **"Download a SIM instead?"** – esta opção aparece na parte de baixo da tela de ajustes de SIM. Se não a vê, seu Pixel pode estar com bloqueio de operadora.
- **eSIM não aparece após o escaneamento** – reinicie o celular. O Pixel às vezes precisa de uma reinicialização após o download do perfil.
- **Ajustes de APN não salvam** – no Pixel, os ajustes de APN ficam em Network & Internet > SIMs > [seu eSIM] > Access Point Names. Se não salvarem:
  1. Adicione um novo APN com um **nome diferente** (ex.: "Airalo 2" em vez de "Airalo").
  2. Salve-o e depois selecione-o manualmente.
  3. Ligue e desligue o Modo Avião para forçar o novo APN a entrar em vigor.
- **eSIM desaparece após reiniciar no Pixel** – veja a Seção 17. Usuários de Pixel relatam isso com mais frequência que usuários de Samsung.

### Caminho do Menu de eSIM do OnePlus
- **Caminho do menu:** Settings > Wi-Fi & Network > SIM & Network > Add eSIM
- **Problema comum:** dispositivos OnePlus às vezes mostram "eSIM not available" após uma atualização do Oxygen OS. Correção: vá em Settings > System > System Update e instale o patch mais recente.
- **Ajustes de APN:** Localizados em Settings > Wi-Fi & Network > SIM & Network > [eSIM] > Access Point Names.

### Caminho do Menu de eSIM da Xiaomi
- **Caminho do menu:** Settings > SIM Cards & Mobile Networks > Add eSIM
- **Ajustes de APN:** Localizados em Settings > SIM Cards & Mobile Networks > [eSIM] > Access Point Names.

### Caminho do Menu de eSIM da Oppo e Realme
- **Caminho do menu:** Settings > Mobile Network > Add eSIM

**Não tem certeza se seu modelo exato tem hardware de eSIM** (Xiaomi do mercado chinês, Huawei, série A da Samsung desativada pela operadora)? Essa é uma pergunta de compatibilidade — veja nosso [guia de hardware e suporte por modelo](/faq/esim-activation-errors-troubleshooting-guide/), que cobre o suporte modelo por modelo.


## eSIM Funciona em Casa, Mas Não no Exterior

**Sintoma:** Você instalou o eSIM em casa, ele mostra barras de sinal, mas quando pousa no seu destino, não há serviço. Peculiaridades específicas de destino — redes parceiras, bloqueios regionais, checklists de chegada — estão reunidas no nosso [guia de eSIM de viagem](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).

**Causa raiz:** O perfil do eSIM foi ativado enquanto você estava na sua rede de origem, e ele não se registrou na rede de destino.

**Correção:**
1. Desligue a linha do eSIM (`Settings > Cellular > desligar`).
2. Espere 10 segundos e ligue-a novamente.
3. Vá em Network Selection, desligue "Automatic", selecione manualmente uma rede com a qual seu provedor tem parceria (peça ao seu provedor a lista de parceiros).
4. Se falhar, desligue e ligue novamente o Data Roaming.
5. Reinicie o celular.

Se isso ainda não funcionar, contate seu provedor — seu plano de eSIM pode não incluir de fato o país em que você está, ou pode haver um problema de acordo de roaming.


## eSIM Funciona em Uma Operadora, Mas Não em Outra

**Sintoma:** Você tem um eSIM que funciona bem, mas ao tentar adicionar um segundo eSIM de uma operadora diferente, ele falha ou mostra "No Service".

**Causa raiz:** Alguns modelos de celular (especialmente os mais antigos) têm limitações sobre quais perfis de operadora podem coexistir. Isso é mais comum em dispositivos Android com firmware de modem mais antigo.

**Correção:**
1. Verifique que seu celular suporta eSIM duplo (iPhone 13 e mais recentes, Pixel 7 e mais recentes, Samsung S23 e mais recentes).
2. Se você tem um SIM físico inserido, tente removê-lo — alguns celulares limitam o número de perfis ativos quando um SIM físico está presente.
3. Atualize o firmware do seu celular (atualizações de ajustes da operadora geralmente corrigem isso).
4. Contate a segunda operadora e pergunte se o perfil de eSIM dela suporta coexistência dual-SIM.


## Quando Contatar Seu Provedor de eSIM vs. o Fabricante do Seu Celular

| Problema | Contatar |
|---------|---------|
| Código QR expirado / inválido | Provedor de eSIM |
| "Activation failed" repetidamente | Provedor de eSIM |
| Sem dados após configurar o APN | Provedor de eSIM |
| Dispositivo mostra "No Service" após pousar | Provedor de eSIM (verifique o acordo de roaming) |
| eSIM não aparece nos ajustes | Fabricante do celular (se for um bug de software) ou problema de bloqueio de operadora |
| Problemas de hardware (câmera, tela, bateria) | Fabricante do celular |
| Bloqueio / desbloqueio de operadora | Sua operadora de origem |
| Restrição de MDM | Seu departamento de TI |
| eSIM desapareceu após reiniciar | Ambos — tente as correções da Seção 17, depois contate o provedor |
| "eSIM já em uso" | Provedor de eSIM (para liberar o perfil à força) |
| eSIM do Apple Watch não conecta | Operadora (para provisionamento) ou Suporte Apple (para problemas de pareamento) |


## Perguntas Frequentes

**P1: Apagar um eSIM cancela meu plano?**
Não. Apagar o eSIM apenas remove o perfil do celular. Você precisa contatar a operadora separadamente para cancelar o plano.

**P2: Posso recuperar um eSIM apagado?**
Para eSIMs pós-pagos de operadoras, sim — a operadora pode reemitir o perfil. Para eSIMs de viagem, a exclusão geralmente é permanente e exige uma nova compra.

**P3: Por que meu eSIM funciona no Wi-Fi, mas não nos dados móveis?**
Isso quase sempre é um problema de APN ou de Data Roaming. Siga as Seções 8 e 14.

**P4: Um eSIM descarrega minha bateria mais rápido?**
Não. Rodar duas linhas ativas de uma vez pode usar um pouco mais de energia, mas um único eSIM não descarrega a bateria.

**P5: Quantos eSIMs posso armazenar no meu celular?**
Tipicamente 8–10 perfis no iPhone e na maioria dos dispositivos Android. Você pode armazenar muito mais, mas só tem dois ativos por vez (dual‑SIM).

**P6: Por que meu eSIM continua perdendo o sinal?**
Pode ser congestão de rede, cobertura fraca ou uma falha de software. Tente ligar e desligar o Modo Avião, reiniciar ou selecionar uma rede manualmente.

**P7: Vejo "Activation Required" no meu eSIM após uma reinicialização – o que significa?**
O celular perdeu a conexão com o servidor de ativação da operadora. Reinicie o celular e verifique se você tem conexão de rede. Se persistir, apague e reinstale o eSIM.

**P8: E se minha operadora disser que não suporta eSIM?**
Você ainda pode usar provedores de eSIM de viagem como Roami, Airalo ou Holafly — eles funcionam de forma independente da sua operadora de origem e não exigem suporte dela.

**P9: Meu eSIM foi transferido para meu novo iPhone, mas não consigo fazer chamadas – apenas os dados funcionam.**
Verifique que o eSIM está definido como Default Voice Line. Certifique-se também de que sua operadora suporta VoLTE para essa linha.

**P10: O escaneamento do código QR funciona, mas o download demora uma eternidade – é normal?**
Não. Deve levar de 1 a 2 minutos. Se demorar mais, seu Wi‑Fi está lento demais. Troque de rede ou use a entrada manual.

**P11: Meu eSIM está ativo, mas não consigo enviar nem receber SMS.**
Alguns eSIMs de viagem são apenas de dados e não suportam SMS. Se você precisa de SMS, compre um plano que inclua explicitamente um número de telefone.

**P12: Redefini meus ajustes de rede sem querer – agora meu eSIM sumiu.**
A redefinição dos ajustes de rede não apaga perfis de eSIM. Seu eSIM ainda deve estar lá. Vá em Settings > Cellular e reative a linha. Se sumiu, você pode tê-lo apagado sem querer — nesse caso, veja a Seção 15.

**P13: Qual a diferença entre apagar um eSIM e desligá-lo?**
Desligar um eSIM mantém o perfil no celular, mas desativa a linha. Você pode religá-lo a qualquer momento. Apagar um eSIM remove o perfil permanentemente — você não pode recuperá-lo sem um novo código QR. Apague apenas quando o plano estiver totalmente expirado.

**P14: Uma VPN pode interferir na ativação do eSIM?**
Sim — as VPNs podem interferir na conexão com o servidor de ativação. Desligue sua VPN antes de ativar um eSIM.

**P15: Meu plano de eSIM diz "ilimitado", mas fico sem dados depois de usar 5GB.**
Muitos planos "ilimitados" têm uma Política de Uso Justo (FUP) que limita a velocidade após um certo limite de dados. Verifique os termos do seu provedor — talvez você precise comprar um plano de recarga para mais dados em alta velocidade.

👉 **Troubleshooting concluído?** Escolha um [plano de eSIM para os EUA](/united-states-esim/) ou [plano de eSIM para a Europa](/europe-esim/) para voltar ao ar.

---

## Fontes

- [GSMA — especificação eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Suporte Apple — Configurar eSIM no iPhone](https://support.apple.com/en-us/HT212780)
- [Suporte Google — Configurar um eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Suporte Google — eSIM no Android](https://support.google.com/android/answer/11241215)
