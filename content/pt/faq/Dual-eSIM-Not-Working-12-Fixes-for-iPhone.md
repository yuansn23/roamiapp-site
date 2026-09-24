---
title: "eSIM Duplo Não Funciona? 12 Correções para iPhone"
h1_title: "Como Corrigir o eSIM Duplo que Não Funciona no iPhone: 12 Soluções"
description: "eSIM duplo não funciona? Corrija 12 problemas do iPhone: roteamento de chamadas, configuração de VoLTE, consumo de bateria e verificações de bloqueio de operadora para iPhone 16 e iOS 18."
image: "/img/faq/dual-esim-not-working.webp"
image-1: "/img/faq/dual-esim-not-working-1.jpg"
keywords: ["eSIM duplo não funciona", "iPhone dual SIM sem serviço", "problema de sinal eSIM duplo", "bloqueio de operadora eSIM", "troubleshooting eSIM duplo", "falha de ativação eSIM duplo", "eSIM iOS 18", "ajustes APN eSIM", "código de confirmação eSIM", "eSIM duplo sem serviço"]
date: 2026-09-15T00:00:00Z
lastmod: 2026-09-15T00:00:00Z
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
    - name: "EUA"
      flag: "/img/flags/us.svg"
      price: "$1.99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Alemanha"
      flag: "/img/flags/de.svg"
      price: "$1.99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa"
      flag: "/img/flags/eu.svg"
      price: "$1.99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turquia"
      flag: "/img/flags/tr.svg"
      price: "$1.99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japão"
      flag: "/img/flags/jp.svg"
      price: "$1.99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "China"
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


> **Nota do Editor:** Um eSIM duplo que derruba uma linha quase sempre é um bloqueio de operadora, um APN mal configurado ou um ajuste de dual SIM — não um plano morto. Cada correção abaixo segue a documentação oficial da Apple e os padrões da GSMA e atinge um sintoma específico. Percorra a tabela de diagnóstico para encontrar a correção exata do seu erro.
> 
> **Principais Conclusões:** Limites de VoLTE ou do plano são a causa mais comum de uma linha não conseguir fazer nem receber chamadas. Problemas de roteamento de chamadas recebidas geralmente são corrigidos desligando e ligando novamente o Wi‑Fi Calling. Os iPhones são dual standby, não dual active – "No Service" na outra linha durante chamadas é normal. Verifique o Carrier Lock em Settings (`No SIM restrictions`) se não conseguir adicionar um segundo eSIM. O consumo de bateria do eSIM duplo pode ser reduzido desativando o 5G na linha com sinal mais fraco.

A maioria dos problemas de eSIM duplo no iPhone se deve a cinco causas: um bloqueio de operadora, um limite de plano ou VoLTE, ajustes de Data Roaming ou de linha padrão, um comportamento normal de dual standby que apenas parece uma falha, ou uma falha do iOS que uma redefinição de ajustes resolve. Encontre seu sintoma no índice abaixo e aplique a correção correspondente — a maioria leva menos de cinco minutos.


## Como Corrigir o eSIM Duplo que Não Funciona

**Seu celular tem problemas de eSIM duplo. Qual deles?**

| Seu Sintoma | Ir para a Correção |
|--------------|-------------|
| **Segundo eSIM mostra "No Service"** mas o primeiro funciona | [Correção #2](#why-one-dual-esim-line-shows-no-service) |
| **Consegue ligar, mas NÃO recebe chamadas** | [Correção #3](#a-dual-esim-line-that-cannot-receive-calls) |
| **Durante uma chamada, a outra linha diz "No Service"** | [Correção #4](#one-line-showing-no-service-during-a-call-is-normal) – isso é normal! |
| **Não consegue adicionar o segundo eSIM – erro de "bloqueio de operadora"** | [Correção #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **Bateria descarrega mais rápido com duas linhas** | [Correção #6](#how-to-reduce-dual-esim-battery-drain) |
| **SIM físico não reconhecido** | [Correção #7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| **iPhone da China – nenhuma opção de eSIM** | [Correção #8](#dual-esim-in-china-hong-kong-and-macau) – limitação de hardware |
| **Dados funcionam, mas sem internet (problema de APN)** | [Correção #11](#how-to-configure-apn-settings-if-your-esim-has-no-data) – configuração de APN |
| **eSIM apagado por acidente** | [FAQ #9](#frequently-asked-questions) – depende do provedor |
| **Não sei – outra coisa** | [Tabela completa de troubleshooting](#dual-esim-troubleshooting-table) |

> 💡 **Insight Principal:** Se você está usando **duas linhas em um iPhone**, os iPhones são **dual standby, não dual active** – quando você está em uma chamada, a outra linha dirá temporariamente "No Service". Isso é um **comportamento normal** (veja a Correção #4). Não perca tempo tentando "consertar" isso.

Se seus problemas de dual SIM decorrem de uma instalação mal feita, comece pelo [guia geral de ativação de eSIM](/faq/how-to-activate-an-esim/) e depois siga as correções abaixo — e para qualquer mensagem de erro que esta página não menciona, o [Guia de Troubleshooting Profundo de eSIM](/faq/esim-deep-troubleshooting-guide-2026/) cobre todos os casos em detalhe.


## Guia Completo de Troubleshooting de eSIM Duplo

Aqui está o caminho que a maioria dos usuários de iPhone percorre quando o eSIM duplo não funciona. Use-o para acompanhar onde você está.

| Etapa | O que está acontecendo | O que fazer | Onde encontrar |
| :--- | :--- | :--- | :--- |
| **1. Identifique o sintoma** | "Meu segundo eSIM não tem sinal." / "Não recebo chamadas." / "A bateria está descarregando rápido." | Encontre seu sintoma na tabela de Diagnóstico Rápido acima. | [Diagnóstico Rápido de 10 Segundos](#dual-esim-quick-diagnostic-index) |
| **2. Verifique se é comportamento normal** | "Durante uma chamada, minha outra linha mostra No Service." | Isso é **normal** em iPhones dual standby. Vá para a Correção #4. | [Correção #4](#one-line-showing-no-service-during-a-call-is-normal) |
| **3. Elimine o bloqueio de operadora** | "Não consigo adicionar um segundo eSIM de jeito nenhum." | Verifique o Carrier Lock em Settings. Deve dizer "No SIM restrictions". | [Correção #5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| **4. Aplique a correção** | Siga a correção específica para o seu sintoma. | Uma das 12 correções abaixo resolverá seu problema. | [Correções #1‑#12](#what-are-your-dual-esim-options-on-iphone) |
| **5. Ainda não funciona?** | "Nenhuma correção funcionou." | Use as opções de contingência na tabela de troubleshooting. | [Tabela de troubleshooting](#dual-esim-troubleshooting-table) |


## Índice de Diagnóstico Rápido de eSIM Duplo

| Sintoma | Causa Mais Provável | Seção da Correção |
|---------|-------------------|--------------|
| Segundo eSIM mostra "No Service" mas o primeiro funciona | Problema de VoLTE ou de ordem das linhas | [#2](#why-one-dual-esim-line-shows-no-service) |
| Um número liga, mas não recebe chamadas | Incompatibilidade no roteamento de chamadas recebidas | [#3](#a-dual-esim-line-that-cannot-receive-calls) |
| Durante uma chamada, a outra linha diz "No Service" | O iPhone usa uma rede de dados por vez (normal) | [#4](#one-line-showing-no-service-during-a-call-is-normal) |
| Não consegue adicionar o segundo eSIM – erro de "bloqueio de operadora" | Dispositivo bloqueado na primeira operadora | [#5](#dual-esim-not-working-on-a-carrier-locked-phone) |
| eSIM duplo funciona, mas descarrega a bateria mais rápido | Ambas as linhas procurando rede ativamente | [#6](#how-to-reduce-dual-esim-battery-drain) |
| eSIM + SIM físico: o SIM físico não é reconhecido | Problema na bandeja de SIM ou cartão incompatível | [#7](#esim-and-physical-sim-conflicts-and-tray-issues) |
| Dados mostram barras de sinal, mas sem internet | Ajustes de APN ausentes ou incorretos | [#11](#how-to-configure-apn-settings-if-your-esim-has-no-data) |


## Quais São Suas Opções de eSIM Duplo no iPhone?

A partir do iPhone XS, XR e todos os modelos mais recentes (incluindo o iPhone 16), a Apple suporta eSIM duplo (dois eSIMs ativos simultaneamente) no iPhone 13 e posteriores. Modelos não americanos também suportam um eSIM mais um nano‑SIM físico. Os modelos de China continental com dual‑SIM físico não têm suporte a eSIM, exceto o iPhone 16.

Sua configuração de **eSIM duplo** depende do modelo e da região do seu iPhone:

| Configuração | Modelos Suportados | Máx. de Linhas Ativas |
|---------------|------------------|------------------|
| **eSIM duplo** | iPhone 13 e mais recentes (incluindo todos os modelos do iPhone 16) | 2 |
| **1 eSIM + 1 nano‑SIM físico** | Todos os iPhones com bandeja de SIM (modelos não americanos, e modelos dos EUA anteriores ao iPhone 14) | 2 |
| **1 SIM físico apenas** | iPhones mais antigos (pré‑XS) | 1 |
| **2 SIMs físicos** | Modelos específicos de dual‑SIM físico da China continental, Hong Kong e Macau (ex.: iPhone 16 versão China) | 2 |

Para uma lista completa de iPhones compatíveis, [verifique a compatibilidade de eSIM duplo do seu iPhone](/compatibility/).


## Por Que Uma Linha de eSIM Duplo Mostra "No Service"

Se uma das suas linhas de eSIM duplo consegue usar dados, mas não consegue fazer nem receber chamadas — **ou mostra "No Service" por completo** — as causas mais comuns em 2026 são:

- **VoLTE / VoNR não está ativado** para essa linha. Algumas operadoras desativam voz-sobre-dados em roaming em planos de eSIM, o que deixa a linha apenas com dados. (Jeito simples de verificar: se você consegue usar dados, mas não consegue ligar, provavelmente é isso.)
- **Ordem das linhas**. O iOS roteia a voz para sua *linha de voz padrão*; uma linha secundária definida como apenas dados não pode fazer nem receber chamadas.
- **O plano não inclui voz**. Alguns eSIMs de viagem são apenas de dados por natureza e não têm serviço de voz. Se for o caso, você verá barras de sinal, mas tentar ligar falhará.

> **Nota:** As redes 3G/CDMA antigas foram desativadas nos EUA e no Japão. A Verizon e a US Cellular encerraram o CDMA entre 2022 e 2024, e a au/KDDI encerrou o 3G em 2022. Em 2026, uma linha "sem serviço de voz" é quase sempre um problema de VoLTE, de plano ou de ordem das linhas — não de CDMA.

### Correções
- **Defina a linha afetada como sua linha de voz padrão**: `Settings > Cellular > Default Voice Line`.
- **Ative o VoLTE**: `Settings > Cellular > [linha] > Voice & Data`, depois selecione LTE ou 5G (VoLTE/VoNR).
- **Confirme que o plano inclui voz**. Se for um eSIM de viagem apenas de dados, mantenha sua linha local como linha de voz e use o eSIM apenas para dados.
- **Contate sua operadora** para verificar se a voz-sobre-LTE/5G está habilitada para o seu número em roaming.

Para uma comparação mais profunda das redes das operadoras dos EUA, veja nossa **comparação de redes de operadoras dos EUA** no [guia de planos de eSIM dos EUA](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/).


## Uma Linha de eSIM Duplo que Não Recebe Chamadas

**Sintoma**: A Linha A funciona bem. A Linha B consegue fazer chamadas, mas as chamadas recebidas na B vão direto para a caixa postal ou tocam como "indisponível".

**Causa raiz**: Uma incompatibilidade de roteamento de chamadas na rede. Quando a Linha B alternou recentemente entre 5G e LTE, ou usou Wi-Fi Calling, a rede da operadora ainda pode tentar rotear as chamadas recebidas pelo caminho errado.

**Analogia:** Imagine que a operadora tem uma agenda antiga que ainda lista seu celular no seu endereço anterior. Quando alguém liga, vão parar no lugar errado. Desligar e ligar o Wi‑Fi Calling atualiza a agenda.

### Correção Rápida no Celular
1. Desligue temporariamente o **Wi‑Fi Calling**: `Settings > Cellular > Linha B > Wi‑Fi Calling` → DESLIGADO.
2. Reinicie o iPhone.
3. Ligue o Wi‑Fi Calling novamente.

### Correção pela Operadora Ligando para o Suporte
Peça à sua operadora para **redefinir o roteamento de chamadas** ou **atualizar a linha** deste número. Isso geralmente entra em vigor pouco depois de a operadora reprovisionar a linha. Para mais problemas de roteamento de chamadas e outros relacionados, veja **[a Correção 3 acima](#a-dual-esim-line-that-cannot-receive-calls)**.

### Prevenir a recorrência
- Evite alternar rapidamente entre 5G/LTE (mantenha um modo por pelo menos algumas horas).
- Se você viaja com frequência, mantenha o **Data Roaming** DESLIGADO na linha que não precisa de dados.


## Uma Linha Mostrando "No Service" Durante uma Chamada é Normal

**Sintoma**: Você está em uma chamada usando a Linha A. Quando verifica, a Linha B mostra "No Service".

**Explicação**: Os iPhones são **dual standby, não dual active** (também conhecido como DSDS – Dual SIM Dual Standby). Apenas uma linha pode manter uma conexão de rede móvel por vez. Durante uma chamada, a outra linha fica temporariamente inacessível. Assim que a chamada termina, ambas as linhas se reconectam. Isso **não é uma falha do eSIM duplo** – é por design.

### O Que Você Pode Fazer
- **Ative o Wi‑Fi Calling em ambas as linhas** – assim, a linha ociosa pode usar o Wi‑Fi para receber chamadas enquanto você está na outra linha. A [documentação de dual standby da Apple](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) explica isso em mais detalhes.
- **Ative "Allow Cellular Data Switching"** – em `Settings > Cellular > Cellular Data`. Isso permite que a linha sem dados use a conexão da linha de dados para o Wi‑Fi Calling.

> 📌 Nota: Algumas operadoras não suportam Wi‑Fi Calling simultaneamente nas duas linhas. Verifique com sua operadora.


## eSIM Duplo Não Funciona em um Celular com Bloqueio de Operadora

Se você não consegue adicionar um segundo eSIM ou SIM físico:
- Seu iPhone pode estar **bloqueado pela operadora** na primeira operadora.
- Para verificar: `Settings > General > About` → role até **Carrier Lock**. Deve dizer "No SIM restrictions".

### O Que Fazer se Seu Celular Está Bloqueado
- Contate sua operadora para solicitar o desbloqueio. Operadoras dos EUA devem desbloquear após o aparelho estar quitado.
- Se desbloqueado e ainda sem funcionar, pode ser necessário redefinir os ajustes de rede: `Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings`. (Aviso: isso esquece as senhas de Wi‑Fi.)

Uma vez desbloqueado, você também pode mover seu eSIM entre iPhone e Android – veja nosso **[guia de Transferência de eSIM entre Plataformas 2026](/faq/how-to-transfer-esim-between-iphone-and-android/)** para instruções passo a passo.


## Como Reduzir o Consumo de Bateria do eSIM Duplo

Usar **eSIM duplo** ou até eSIM + SIM físico pode aumentar o consumo de bateria porque ambas as linhas ficam conectadas ativamente à rede. Veja como minimizar o consumo mantendo as duas linhas ativas:

| Estratégia | Efeito |
|----------|--------|
| Definir a linha com sinal mais fraco para **usar apenas LTE** (não 5G) | Economia moderada |
| Desligar o **Data Roaming** na linha que não é usada para dados | Evita varreduras |
| Desativar o **5G Standalone** (se sua operadora permitir) | Ajuda muito |
| Usar o **Modo de Baixo Consumo de Dados** para apps em segundo plano na linha secundária | Economia pequena |
| Em áreas de sinal muito fraco, desativar temporariamente a linha secundária | Economia significativa |

Para desativar uma linha: `Settings > Cellular` → toque na linha → desative **Turn On This Line**. Se você viaja internacionalmente com frequência, [experimente o eSIM grátis da Roami](/free-esim/) como uma alternativa eficiente em bateria.


## Conflitos entre eSIM e SIM Físico e Problemas de Bandeja

**Sintoma**: Seu nano‑SIM funciona em outro celular, mas não no seu iPhone. Ou, seu eSIM funciona bem, mas o SIM físico não é reconhecido quando ambos estão instalados.

**Causas comuns**:
- O iPhone está **bloqueado pela operadora** em uma rede diferente.
- Bandeja de SIM não totalmente inserida ou danificada.
- Cartão SIM **muito antigo** (pré‑4G) ou amassado.
- **Conflito de SIM físico**: Em alguns iPhones, inserir um SIM físico pode desativar temporariamente o slot do eSIM se o dispositivo estiver bloqueado pela operadora.

**Correções**:
1. Remova a bandeja, limpe os contatos com um pano macio.
2. Reinsira com firmeza até ouvir um clique.
3. Reinicie o iPhone.
4. Se ainda não for reconhecido, teste o SIM em outro celular – se funcionar, o leitor de SIM do seu iPhone pode estar com defeito.
5. Substitua o cartão SIM em uma loja da operadora (grátis na maioria dos planos pós-pagos).

> **Se seu eSIM desaparecer após inserir um SIM físico:** Alguns iPhones com bloqueio de operadora desativam o slot do eSIM quando um SIM físico de outra operadora é inserido. Remova o SIM físico, reinicie, e seu eSIM deve reaparecer. Depois, contate sua operadora para desbloquear o dispositivo.

Se você planeja migrar totalmente para o eSIM, consulte nosso **[guia de eSIM do iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/)** para os métodos de ativação.


## eSIM Duplo na China, Hong Kong e Macau

Os iPhones da China continental (exceto o iPhone 16) têm dois slots de nano‑SIM físico e **nenhum suporte a eSIM**. Os modelos de Hong Kong e Macau geralmente suportam eSIM + SIM físico. Se você comprar um iPhone de China continental com dual‑SIM físico, não poderá instalar nenhum eSIM, incluindo eSIMs de viagem internacionais – isso é uma limitação de hardware.

A Apple vende modelos específicos de dual‑SIM físico na **China continental**:
- iPhone 16, 17 Pro, 17 Pro Max: **dois slots de nano‑SIM físico** (sem eSIM, exceto o Air).
- iPhone 16: **somente eSIM** (global, incluindo a China).

Modelos de **Hong Kong e Macau**:
- Suportam **eSIM + SIM físico** (como os modelos internacionais) ou dual SIM físico, dependendo do modelo.
- Sempre verifique antes de comprar se você pretende usar planos de eSIM de viagem.

> ⚠️ **Importante**: Se você comprar um iPhone de China continental com dual‑SIM físico, **não poderá instalar nenhum eSIM** (incluindo eSIMs de viagem internacionais) – exceto o iPhone 16. Isso é uma limitação de hardware, não um bloqueio de software.


## eSIM Duplo para Linhas de Trabalho e Pessoais

Muitos usuários mantêm um **número de trabalho** (eSIM) e um **número pessoal** (segundo eSIM ou SIM físico). Veja como configurar seu **eSIM duplo** de forma organizada:

### Nomeie as linhas com clareza
`Settings > Cellular` → toque em uma linha → `Cellular Plan Label` → escolha "Business" ou "Personal", ou crie um rótulo personalizado.

### Escolha a voz e os dados padrão
- **Default Voice Line**: Qual linha usar quando você ligar pelo app Telefone nativo (você ainda pode escolher por chamada).
- **Cellular Data**: Qual linha usa dados móveis. Ative o **Allow Cellular Data Switching** para que o celular possa usar temporariamente os dados da outra linha se a principal perder o sinal.

### Separe os contatos
- Atribua contatos a uma linha específica: Editar contato → `Preferred Line` → selecione comercial ou pessoal.

### Evite roaming acidental
- Desligue o **Data Roaming** na linha de trabalho se ela tiver tarifas internacionais caras.


## Tabela de Troubleshooting de eSIM Duplo

| Problema | Etapa Imediata | Correção de Longo Prazo | Se Ainda Não Funcionar |
|---------|----------------|----------------------|------------------------|
| Segundo eSIM nunca pega sinal | Reinicie o iPhone e depois desative/ative a linha | Confirme que o plano está ativo e a linha habilitada | Contate a operadora para reprovisionar o eSIM |
| Chamadas vão direto para a caixa postal (sem tocar) | Desative "Silence Unknown Callers" e o encaminhamento de chamadas | Contate a operadora para redefinir o roteamento de chamadas | Redefinir os ajustes de rede |
| Não recebe SMS na segunda linha | Envie um SMS de teste dessa linha para qualquer número | Certifique-se de que a linha não é apenas de dados; a operadora pode precisar habilitar o SMS | Use o app da operadora para ressincronizar a linha |
| Dois eSIMs, mas ambos mostram "No Service" | Modo avião liga/desliga > verifique o bloqueio de operadora | Restaurar os ajustes de rede | Verifique se a operadora tem uma falha na sua área |
| Trocou de linha e agora FaceTime/iMessage não ativa | Vá em `Settings > Messages > Send & Receive` – selecione os números manualmente | Saia do Apple ID e entre novamente | Contate o Suporte Apple |
| Mostra sinal de dados, mas sem internet | Verifique os ajustes de APN (veja a Correção #11) | Configure o APN manualmente | Contate o provedor de eSIM para obter o APN correto |
| eSIM apagado por acidente | Verifique se o provedor permite baixar novamente | Contate a operadora para um novo código QR | eSIMs de viagem: compre um novo plano |
| SIM físico inserido, eSIM desaparece | Celular bloqueado pela operadora desativa o eSIM com SIM estrangeiro | Remova o SIM físico, reinicie, o eSIM reaparece | Contate a operadora para desbloquear o dispositivo |


## Como Configurar os Ajustes de APN se Seu eSIM Não Tem Dados

**Sintoma**: Seu eSIM mostra barras de sinal cheias (ou "No Service"), mas você não tem conexão com a internet – sites não carregam, apps dizem "sem conexão".

**Causa raiz**: O perfil do eSIM foi instalado corretamente, mas os ajustes do Access Point Name (APN) estão ausentes ou incorretos. Alguns provedores de eSIM configuram o APN automaticamente; outros exigem entrada manual.

### Como configurar o APN no iPhone

1. Vá em **Settings > Cellular**.
2. Toque na linha do eSIM que não tem dados.
3. Toque em **Cellular Data Network** (se não ver essa opção, o APN é configurado automaticamente pela sua operadora – pule esta correção).
4. Na seção **Cellular Data**, preencha o campo **APN**.
5. Deixe **Username** e **Password** em branco, a menos que seu provedor especifique o contrário.
6. Volte, ligue e desligue o Modo Avião, e teste os dados.

### Valores de APN comuns para eSIMs de viagem

| Provedor | APN | Usuário | Senha |
|----------|-----|----------|----------|
| **Roami** | internet | (em branco) | (em branco) |
| **Airalo** | globaldata | (em branco) | (em branco) |
| **Holafly** | hola | (em branco) | (em branco) |
| **Nomad** | nbdata | (em branco) | (em branco) |
| **T‑Mobile (EUA)** | fast.t-mobile.com | (em branco) | (em branco) |
| **AT&T (EUA)** | nxgen | (em branco) | (em branco) |
| **Verizon (EUA)** | vzwinternet | (em branco) | (em branco) |
| **EE (Reino Unido)** | everywhere | (em branco) | (em branco) |
| **O2 (Reino Unido)** | mobile.o2.co.uk | web | web |
| **Vodafone (Reino Unido)** | internet | (em branco) | (em branco) |
| **Three (Reino Unido)** | three.co.uk | (em branco) | (em branco) |
| **Orange (França)** | orange.fr | (em branco) | (em branco) |

> **Se o campo APN estiver cinza:** Sua operadora bloqueou os ajustes de APN. Isso é comum em eSIMs pós-pagos de operadoras (Verizon, T‑Mobile, AT&T). Contate sua operadora para obter ajuda – você não pode alterá-lo manualmente.

> **Se o APN está correto mas ainda sem dados:** Reinicie o iPhone, ligue e desligue o Modo Avião, ou verifique se o Data Roaming está ativado (Settings > Cellular > [linha] > Data Roaming LIGADO).


## Dicas Finais de Profissional para Usuários de eSIM Duplo

- **Nomeie suas linhas** imediatamente após a configuração – isso evita uma confusão infinita.
- **Defina toques diferentes** para cada linha: `Settings > Sounds & Haptics > Ringtone` → role para baixo, você pode atribuir por linha.
- **Use automações do app Atalhos** para alterar a linha de voz padrão conforme o horário (ex.: horário comercial = linha comercial; noites = pessoal).
- **Antes de vender seu dispositivo**: Vá em `Settings > Cellular`, apague **todos** os eSIMs e remova o SIM físico. Depois, apague todo o conteúdo e os ajustes. Para um passo a passo detalhado de como apagar eSIMs e cancelar planos, consulte **[a Correção #15 no nosso guia de troubleshooting](/faq/esim-deep-troubleshooting-guide-2026/#esim-deleted-by-mistake)**.


## Perguntas Frequentes

**P1: Posso usar dois eSIMs da mesma operadora?**  
Sim, desde que sua operadora permita vários perfis de eSIM em uma conta. Por exemplo, a T‑Mobile dos EUA suporta até dois eSIMs no mesmo iPhone.

**P2: Ambas as linhas suportarão 5G simultaneamente?**  
Sim, no iPhone 13 e mais recentes (incluindo o iPhone 16), ambas as linhas podem estar em 5G (dual 5G standby). Porém, apenas uma linha pode usar dados 5G por vez; a outra usa o 5G para fallback de voz (VoNR).

**P3: Minha segunda linha funciona, mas a primeira parou de funcionar depois de adicioná-la – o que aconteceu?**  
Você pode ter trocado acidentalmente os ajustes da linha principal. Vá em `Settings > Cellular > Default Voice Line` e defina-a de volta.

**P4: O eSIM duplo consome mais bateria que eSIM + SIM físico?**  
Em geral, o eSIM duplo consome ligeiramente menos energia porque não há leitor de cartão físico. Mas a diferença é desprezível (dentro de 2‑3%).

**P5: Estou viajando – posso usar um eSIM local para dados e manter meu eSIM local (de casa) para chamadas?**  
Sim, melhor prática:  
- Defina o eSIM local como linha de **Cellular Data**.  
- Mantenha o eSIM de casa como **Default Voice Line**.  
- Desligue o **Data Roaming** no eSIM de casa para evitar cobranças enormes.  
- Ative o **Allow Cellular Data Switching** para que sua linha de casa possa usar os dados do eSIM local para Wi‑Fi Calling e MMS.

Se você troca de dispositivo com frequência durante viagens, o **[guia de transferência de eSIM entre plataformas](/faq/how-to-transfer-esim-between-iphone-and-android/)** ajudará você a mover seu número sem interrupções.

**P6: Por que o segundo eSIM às vezes desaparece depois de uma atualização do iOS?**  
Bug raro. Vá em `Settings > Cellular` → se a linha sumiu, mas ainda aparece em "Available SIMs", toque nela e reative. Se não, contate a operadora para reenviar o perfil.

**P7: Posso usar uma configuração de dual‑SIM com um Apple Watch?**  
Sim. O Apple Watch pode espelhar **uma** das linhas do iPhone. Escolha qual linha deseja no relógio durante a configuração. Note que o relógio não pode usar as duas linhas simultaneamente – ele espelha apenas a linha selecionada.

**P8: Onde encontro a documentação oficial da Apple sobre eSIM duplo?**  
A Apple oferece dois recursos principais: [About eSIM on iPhone](https://support.apple.com/en-us/HT209044) e [Use Dual SIM with an eSIM](https://support.apple.com/en-us/HT209086). Eles cobrem a compatibilidade básica e a configuração.

**P9: Como recupero um eSIM apagado?**  
Se você apagou um perfil de eSIM, a recuperação depende da sua operadora. Para eSIMs de viagem (Roami, Airalo, etc.), a exclusão geralmente é permanente – você precisará comprar um novo plano. Para eSIMs pós-pagos de operadoras (como Verizon, T‑Mobile, AT&T), contate sua operadora – eles geralmente podem reemitir um novo código QR. Sempre mantenha um backup do e-mail de ativação original e do código QR.

**P10: Por que meu eSIM tem barras de sinal, mas nenhuma conexão de dados?**  
Isso quase sempre é um problema de APN. Veja a Correção #11 acima para a configuração passo a passo.

**P11: O que significa "código de confirmação de eSIM" e onde o encontro?**  
Alguns perfis de eSIM exigem um código de confirmação (4‑8 dígitos) durante a ativação. Procure-o no e-mail da sua operadora ou nas instruções de ativação. Se não encontrá-lo, contate sua operadora.

**P12: Posso ter dois eSIMs ativos mais um SIM físico no iPhone?**  
Não. O iPhone suporta no máximo **duas linhas ativas** a qualquer momento – ou dois eSIMs OU um eSIM + um SIM físico. Você não pode ter três linhas ativas simultaneamente.

**P13: Meu eSIM duplo 5G não funciona em uma linha – o que devo verificar?**  
Primeiro, certifique-se de que o 5G está ativado para ambas as linhas: Settings > Cellular > [linha] > Voice & Data > selecione 5G Auto ou 5G On. Se uma linha ainda mostra apenas LTE, verifique com sua operadora – algumas restringem o 5G apenas à linha principal de dados.

**P14: Inseri um SIM físico e meu eSIM desapareceu – como recupero?**  
Este é um comportamento conhecido em iPhones com bloqueio de operadora. Remova o SIM físico, reinicie o iPhone, e o eSIM deve reaparecer em Settings > Cellular. Depois, contate sua operadora para desbloquear seu dispositivo para que ambos possam funcionar simultaneamente.

👉 **Configurando eSIM duplo para viajar?** Veja [planos de eSIM para os EUA](/united-states-esim/) ou [eSIM para o Japão](/japan-esim/) — ambos suportam eSIM duplo em iPhones modernos.

---

*Baseado na documentação oficial da Apple, nos padrões da GSMA e em testes com operadoras até setembro de 2026.*
## Fontes

- [GSMA — especificação eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Suporte Apple — Configurar eSIM no iPhone](https://support.apple.com/en-us/HT212780)
- [Suporte Apple — Sobre o eSIM no iPhone](https://support.apple.com/en-us/HT209044)
