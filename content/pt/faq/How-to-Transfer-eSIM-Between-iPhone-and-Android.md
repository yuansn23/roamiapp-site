---
title: "Como transferir o eSIM entre iPhone e Android"
h1_title: "Como transferir um eSIM entre iPhone e Android"
description: "Mova seu eSIM entre iPhone e Android com o app da operadora ou um código QR reemitido. Passo a passo para ambos os sentidos, além de correções para erros comuns de transferência."
image: "/img/faq/esim-transfer-iphone-android.webp"
image-1: "/img/faq/esim-transfer-iphone-android-1.jpg"
keywords: ["transferência de eSIM entre plataformas", "erro de transferência de eSIM", "iOS 18 eSIM", "bloqueio de operadora eSIM", "código de confirmação eSIM", "eSIM sem serviço", "configurações APN eSIM", "solução de problemas eSIM", "falha na ativação do eSIM", "transferir eSIM entre iPhone e Android", "não consigo transferir eSIM para novo iPhone", "transferência de eSIM Orange"]
date: 2026-09-17T00:00:00Z
lastmod: 2026-09-17T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Solução de problemas", "Configuração de viagem"]
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
    text: "Central de ajuda"
    url: "/faq/"
    
# Sidebar: Popular eSIMs
sidebar_popular:
  title: "eSIMs populares"
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
  title: "Garanta um eSIM grátis"
  icon: "🎁"
  item_suffix: "eSIM grátis"
  item_subtitle: "eSIM grátis"
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
  title: "Perguntas populares"
  items:
    - question: "O que é a ativação de eSIM e como ela funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Como ativar um eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Como ativar o eSIM no iPhone (todos os modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista de compatibilidade eSIM mais recente"
      url: "/compatibility/"
---


> **Nota do editor:** Você só pode transferir um eSIM entre iPhone e Android quando sua operadora suporta transferência entre plataformas, e a maioria dos eSIMs de viagem não pode ser movida. Os métodos abaixo seguem a documentação oficial das operadoras e se concentram nas transferências que realmente funcionam hoje. Consulte primeiro a seção de operadoras suportadas para ver se o seu plano se qualifica.

A realidade, logo de início: um eSIM geralmente não pode ser movido diretamente entre iPhone e Android, porque as duas plataformas não compartilham um protocolo de transferência. As alternativas, porém, são simples — peça para sua operadora reemitir o perfil como um código QR, ou transfira pelo app da operadora quando suportado. Ambos os sentidos, além das exceções dos eSIMs de viagem, estão detalhados abaixo.

## O que é uma transferência de eSIM?

**Encontre seu cenário abaixo e vá direto ao método correto.**

| Seu cenário | É possível transferir? | Melhor método | Onde ir |
| :--- | :--- | :--- | :--- |
| **iPhone → novo iPhone** | ✅ Sim (sempre) | Transferência rápida da Apple | [Transferência na mesma plataforma](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Samsung → novo Samsung** | ✅ Sim (geralmente) | Samsung Smart Switch | [Transferência na mesma plataforma](#transfer-esim-to-a-new-iphone-or-samsung) |
| **Android → iPhone (operadora suporta transferência por app)** | ✅ Sim | App da operadora | [Método A](#esim-transfer-from-android-to-iphone) |
| **Android → iPhone (operadora não suporta app)** | ✅ Sim | Alternativa com código QR | [Método B](#esim-transfer-from-iphone-to-android) |
| **iPhone → Android (operadora suporta)** | ✅ Sim | App da operadora ou código QR | [Método B](#esim-transfer-from-iphone-to-android) |
| **eSIM de viagem (Roami, Airalo, Holafly)** | ❌ Não | Compre um plano novo no novo dispositivo | [Por que eSIMs de viagem não podem ser transferidos](#why-cant-travel-esims-be-transferred) |
| **Operadora não suporta transferência** | ✅ Sim (alternativa) | Contate a operadora para um código QR | [Métodos alternativos](#fallback-methods-when-crossplatform-esim-transfer-isnt-supported) |

> **Regra principal:** Não existe **botão integrado de transferência de eSIM do iOS para o Android** como existe para iPhone para iPhone. A transferência entre plataformas sempre passa **pela sua operadora** – seja pelo app dela ou solicitando um novo código QR. Os eSIMs de viagem são **de dispositivo único** – compre um novo no seu celular novo.

**Não consegue transferir?** A maioria dos eSIMs de viagem (Roami, Airalo, Holafly) é **de dispositivo único** – você precisará comprar um plano novo no seu celular novo. Para eSIMs de operadoras locais, a alternativa do código QR sempre funciona.

> **Limitação principal:** Não há **transferência integrada de eSIM do iOS para o Android** – você precisa passar pela sua operadora. Este guia apresenta todos os métodos suportados.

Novato na configuração de eSIM? Nosso [guia de como ativar um eSIM](/faq/how-to-activate-an-esim/) cobre a instalação do zero. Se a transferência falhar no meio do caminho, o [Guia avançado de solução de problemas de eSIM](/faq/esim-deep-troubleshooting-guide-2026/) relaciona cada mensagem de erro a uma correção.


## Qual método de transferência de eSIM você deve usar?

| Sua situação | Melhor método | Tempo | Operadora necessária? |
| :--- | :--- | :--- | :--- |
| **Trocar de iPhone ↔ iPhone** | Transferência rápida da Apple (Configurações > Celular > Adicionar eSIM > Transferir) | 2 min | Não (a Apple cuida disso) |
| **Trocar de Android ↔ Android (Samsung para Samsung, etc.)** | Transferência específica da marca (Samsung: Gerenciador SIM > Adicionar eSIM > Transferir) | 2 min | Não (a marca cuida disso) |
| **Trocar de iPhone ↔ Android (iOS 18 / Android 16+)** | Transferência pelo app da operadora | 3-5 min | Sim |
| **Trocar de iPhone ↔ Android (sistema mais antigo)** | Código QR reemitido pela operadora | 5-10 min | Sim |
| **eSIM de viagem (Roami, Airalo, Holafly)** | ❌ Não é possível transferir – compre um plano novo no novo dispositivo | N/A | Não – o provedor não permite |
| **Sua operadora não suporta transferência** | Alternativa com código QR (ligue para a operadora) | 10-20 min | Sim |


## Guia completo de transferência de eSIM

Aqui está o mapa de etapas para quem está movendo um eSIM para um novo dispositivo.

| Etapa | O que você está pensando | O que fazer | Onde encontrar |
| :--- | :--- | :--- | :--- |
| **1. Determine seu cenário** | "Que tipo de troca estou fazendo?" | Identifique: mesmo ecossistema (iOS→iOS / Android→Android) ou entre plataformas (iOS↔Android)? | [Fluxo de decisão rápido acima](#which-esim-transfer-method-should-you-use) |
| **2. Verifique as versões do sistema** | "Meus celulares estão atualizados o suficiente?" | O iPhone precisa estar no iOS 18+, e o Android no Android 16+ para a transferência nativa entre plataformas. | Atualize primeiro, se necessário. |
| **3. Verifique o bloqueio da operadora** | "Meu celular está bloqueado para uma operadora?" | Em Configurações > Geral > Sobre > Bloqueio da operadora deve aparecer "Sem restrições de SIM". | [Pré-requisitos abaixo](#what-you-need-before-you-start-an-esim-transfer) |
| **4. Verifique o suporte da operadora** | "Minha operadora permite isso?" | Abra o app da operadora e procure a opção de transferência de eSIM. Ou ligue e pergunte. | [Seção de operadoras suportadas abaixo](#carriers-that-support-cross-platform-esim-transfer) |
| **5. Execute a transferência** | "Hora de mover o número." | Siga as etapas específicas do seu cenário. | [Método A](#esim-transfer-from-android-to-iphone) ou [Método B](#esim-transfer-from-iphone-to-android) |
| **6. Configuração pós-transferência** | "Meu número está no celular novo – e agora?" | Reative o WhatsApp, iMessage, apps de 2FA e teste o SMS. | [Seção Após a transferência de eSIM abaixo](#moving-whatsapp-imessage-and-2fa-after-an-esim-transfer) |
| **7. Solucione problemas se falhar** | "Não funcionou – e agora?" | Verifique o erro, exclua o perfil antigo, tente novamente ou use a alternativa do código QR. | [Tabela de solução de problemas abaixo](#why-did-my-esim-transfer-fail) |


## O que você precisa antes de iniciar uma transferência de eSIM

**Para ambos os sentidos:**
- Ambos os dispositivos devem estar **desbloqueados** (sem **bloqueio de operadora**). Para verificar no iPhone: `Configurações > Geral > Sobre` → `Bloqueio da operadora` deve mostrar "Sem restrições de SIM". **Esta é a razão nº 1 das falhas de transferência** – se o seu celular estiver bloqueado, você não pode transferir o eSIM para a rede de outra operadora.
- Ambos os dispositivos devem ter o **Bluetooth ativado**.
- Ambos os dispositivos devem estar conectados ao **Wi‑Fi** (ou pelo menos um com uma conexão de dados móveis funcionando).
- O eSIM que você quer transferir está **ativo** no dispositivo de origem (não excluído ainda).
- Sua operadora **suporta transferência entre plataformas** (veja a lista abaixo). Se não, pule para a seção de métodos alternativos.

Novato em perfis e servidores SM‑DP+? O [explicador de ativação de eSIM](/faq/what-is-esim-activation-and-how-does-it-work/) cobre o que realmente acontece quando um perfil se move entre dispositivos.
- Seu **perfil de eSIM** não está **expirado** – alguns perfis têm datas de validade limitadas.

**Para Android → iPhone:**
- O iPhone precisa estar no **iOS 18 ou posterior**.
- O Android precisa estar no **Android 16 ou posterior**.

**Para iPhone → Android:**
- O iPhone precisa estar no **iOS 18 ou posterior**.
- O Android precisa estar no **Android 16 ou posterior**.

> 🚨 **Aviso importante – Não exclua antes de transferir:**
> **NÃO exclua o eSIM do seu dispositivo antigo antes de iniciar a transferência.** Se você excluir o eSIM de origem primeiro, o perfil desaparece do seu dispositivo e sua operadora pode não conseguir transferi-lo para o novo dispositivo. Você terá que contatar sua operadora para obter um código QR completamente novo – o que pode levar de 24 a 48 horas. Sempre inicie a transferência pelo novo dispositivo primeiro, ou mantenha o eSIM antigo ativo até que o novo esteja confirmado como funcionando.

> 🚨 Se o seu dispositivo estiver em um sistema operacional mais antigo, a opção de menu simplesmente não aparecerá. Atualize primeiro. Se você está lidando com um **perfil de eSIM expirado**, contate sua operadora para obter um novo código QR antes de iniciar a transferência.

A página [Suporte Google – eSIM no Pixel](https://support.google.com/pixelphone/answer/7086887) oferece detalhes adicionais para usuários de Android que estão se preparando para transferir o eSIM.


## Por que eSIMs de viagem não podem ser transferidos?

Esta é a pergunta nº 1 que recebemos. Aqui está o porquê:

| Motivo | Explicação |
| :--- | :--- |
| **Vinculação ao EID** | Cada perfil de eSIM é vinculado criptograficamente ao **EID** (eUICC Identifier) do dispositivo em que foi ativado. O EID do seu celular é único – como um número de série do seu hardware de eSIM. (Você pode ver seu EID discando `*#06#` na maioria dos celulares.) |
| **Códigos QR de uso único** | Os códigos QR de eSIMs de viagem são projetados para **uso único**. Uma vez escaneado, o código QR é invalidado no servidor da operadora. Este é um recurso de segurança para prevenir fraudes. |
| **Sem conta de operadora** | Os eSIMs de viagem são comprados como produtos independentes – você não tem uma "conta de operadora" com serviço contínuo. Não há ninguém com quem fazer login para solicitar uma transferência. |
| **Projetados para conveniência** | Os eSIMs de viagem trocam a possibilidade de transferência pela conveniência. Você obtém ativação instantânea sem verificação de identidade, mas a contrapartida é que o perfil fica travado em um dispositivo. |

**Resumindo:** Se você está usando um eSIM de viagem (Roami, Airalo, Holafly, Nomad, etc.), **não perca tempo tentando transferi-lo**. Não vai funcionar. Simplesmente compre um plano novo no seu novo dispositivo. O custo de um novo eSIM de viagem geralmente é menor do que o tempo que você gastaria tentando transferir um perfil intransferível.

**E os eSIMs de operadora (pós-pago/pré-pago)?**
Os eSIMs de operadora são diferentes. Você tem uma conta com a operadora, e ela pode reemitir seu eSIM para um novo dispositivo porque controla o perfil em seus servidores. É por isso que os eSIMs de operadora podem ser transferidos, e os de viagem não.


## Qual método de transferência de eSIM é o certo para você?

| Recurso | Transferência pelo app da operadora | Código QR da operadora | Transferência nativa (iOS→iOS / Android→Android) |
|---------|---------------------|----------------|---------------------------------------------|
| **Funciona entre plataformas?** | ✅ Sim | ✅ Sim | ❌ Não (apenas no mesmo ecossistema) |
| **Tempo necessário** | 3-5 min | 5-10 min | 1-2 min |
| **Envolvimento da operadora** | Autoatendimento pelo app | Precisa contatar a operadora | Nenhum |
| **Funciona durante viagem?** | ✅ Sim (com Wi-Fi) | ✅ Sim (com Wi-Fi) | ✅ Sim |
| **Taxa de sucesso** | Alta (se suportado) | Muito alta (sempre funciona) | Muito alta |
| **Melhor para** | Transferência rápida, operadoras com suporte no app | Qualquer operadora, alternativa quando o app falha | Atualizações de dispositivo no mesmo ecossistema |
| **Custo** | Geralmente grátis | Pode custar $0‑25 pela reemissão do código QR | Grátis |


## Transferência de eSIM do Android para o iPhone

Este é o cenário mais comum – trocar de um Samsung, Pixel ou outro Android para um novo iPhone. A forma mais confiável de mover seu número é pelo app da sua operadora.

### Passo a passo

**Antes de começar:**
- Tenha o app da sua operadora instalado no novo iPhone (ou esteja pronto para fazer login no site da operadora).
- Saiba seu PIN da conta ou suas credenciais de login.
- **NÃO exclua o eSIM do seu Android ainda.**

**No seu iPhone (destino):**
1. Instale e abra o app da sua operadora (por exemplo, o app da T‑Mobile, Verizon ou AT&T).
2. Faça login e procure uma opção como "Ativar eSIM", "Trocar dispositivo" ou "Transferir para novo dispositivo".
3. Siga as instruções para inserir o **EID** e o **IMEI** do seu novo iPhone (exibidos em `Configurações` → `Geral` → `Sobre`).
4. A operadora envia seu perfil de eSIM para o novo iPhone, ou gera um código QR para você escanear.
5. No iPhone, vá em `Configurações` → `Celular` → `Adicionar eSIM` e escaneie o código QR, se um foi gerado.
6. Aguarde "Ativação concluída". Seu número agora está ativo no iPhone.
7. **Agora** você pode excluir o eSIM do seu Android (Configurações > Conexões > Gerenciador SIM > toque no eSIM > Remover).

**Dica do iOS 18:** Se você está no iOS 18, o fluxo de "Adicionar eSIM" foi redesenhado com um leitor de QR mais destacado e melhor tratamento de erros. Você verá um indicador de progresso durante o download do perfil.

✅ **Pronto.** Seu número agora está ativo no iPhone. Se sua operadora não oferece um app, contate-a para reemitir seu eSIM como um novo código QR (veja os métodos alternativos abaixo).

### E se a transferência pelo app não funcionar?

Use a **alternativa do código QR da operadora**:

- Contate sua operadora (chat, telefone ou site).
- Diga que está trocando de dispositivo e peça para **reemitir seu eSIM como um novo código QR**.
- Escaneie o novo código QR no iPhone: `Configurações` → `Celular` → `Adicionar eSIM`.
- Conclua a ativação.

Se você vir um erro de **"não foi possível ativar o eSIM"** durante esse processo, verifique sua conexão Wi‑Fi e tente novamente.


## Transferência de eSIM do iPhone para o Android

Não há opção integrada de "Transferir para Android" no iPhone. O método confiável é pedir para sua operadora reemitir seu eSIM.

### Pré-requisitos
- Seu novo celular Android está **desbloqueado**.
- Você pode contatar sua operadora (ou fazer login no app/site dela).
- Seu Android está no **Android 16 ou posterior**.
- **NÃO exclua o eSIM do seu iPhone ainda.**

### Etapas

**Contate sua operadora (ou use o app dela):**
1. Diga que está movendo seu eSIM de um iPhone para um celular Android.
2. Forneça o **EID** e o **IMEI** do novo dispositivo Android (em `Configurações` → `Sobre o telefone`).
3. Sua operadora reemite seu eSIM como um novo código QR (ou o envia pelo app dela).

**No seu Android (destino):**
1. Vá em `Configurações` → `Rede e internet` → `SIMs` → `Adicionar eSIM` (a nomenclatura varia por marca).
2. Escaneie o código QR que a operadora forneceu.
3. Siga as instruções para baixar e ativar o perfil.
4. Aguarde a ativação ser concluída.
5. **Agora** você pode excluir o eSIM do seu iPhone (Configurações > Celular > toque no eSIM > Remover plano celular).

✅ Pronto. Seu número agora está no celular Android.

> ⚠️ **Importante**: Depois que a transferência for concluída, o eSIM é **removido permanentemente** do iPhone. Você não pode reverter sem a sua operadora. Certifique-se de ter outra linha ativa ou Wi‑Fi antes de transferir.


## Transferir o eSIM para um novo iPhone ou Samsung

Embora a transferência entre plataformas seja o foco deste guia, muitos usuários simplesmente querem mover um eSIM dentro do mesmo ecossistema. Veja como. (Mudando para um iPhone 16 dos EUA apenas eSIM? O [guia de ativação do iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/) cobre as especificidades da transferência durante a configuração.)

### Transferir o eSIM de iPhone para iPhone

A **Transferência rápida** integrada da Apple é o método mais fácil:

1. Durante a configuração do seu novo iPhone, escolha "Transferir eSIM de iPhone próximo" quando solicitado.
2. Mantenha os dois celulares próximos, com Bluetooth e Wi‑Fi ativados.
3. Confirme a transferência no seu iPhone antigo.
4. Aguarde de 1 a 2 minutos para o **download do perfil de eSIM** ser concluído no novo dispositivo.

**Se a Transferência rápida não funcionar:** Vá em Configurações > Celular no seu novo iPhone > Adicionar eSIM > Transferir de iPhone próximo.

**Se isso falhar:** Use o método do código QR da operadora – contate sua operadora para obter um novo código QR.

### Transferir o eSIM de Android para Android

Os métodos de transferência do Android variam por marca:

**Samsung:** Configurações > Conexões > Gerenciador SIM > Adicionar eSIM > Transferir eSIM de dispositivo antigo (siga as instruções na tela). Funciona no Samsung Galaxy S21 e mais novos, séries Z Flip/Z Fold.

**Google Pixel:** Durante a configuração, você pode ser solicitado a transferir seu eSIM. Como alternativa, use o app da operadora ou solicite um novo código QR.

**Android em geral:** Se sua marca não oferece transferência integrada, use o método alternativo do código QR da operadora.

### Comparação entre transferência de eSIM entre plataformas e na mesma plataforma

| Recurso | Entre plataformas | Na mesma plataforma |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Transferência rápida funciona |
| **Android ↔ Android** | N/A | ✅ Métodos específicos da marca |
| **iOS ↔ Android** | ✅ Coberto neste guia | ❌ Não suportado diretamente |
| **Dependência da operadora** | Maior | Menor (Apple/Google cuidam disso) |
| **Tempo necessário** | 3-10 min | 1-2 min |
| **Taxa de sucesso** | Varia por operadora | Geralmente alta |

Para saber como o comportamento do eSIM difere entre as gerações do iPhone (limites de armazenamento, regras de dual SIM, variantes regionais), veja nosso [hub de compatibilidade de eSIM do iPhone](/faq/iphone-11-esim-compatible/).


## Operadoras que suportam transferência de eSIM entre plataformas

A transferência de eSIM entre plataformas ainda é recente, e o suporte das operadoras está sendo implementado gradualmente. Não existe uma lista pública completa de todas as operadoras suportadas, e a disponibilidade muda com frequência, então consulte o site ou o app da sua operadora para o status atual.

### Operadoras confirmadas como suportadas

| Operadora | Região | Método de transferência | Limite de transferência | Custo |
|---------|--------|-----------------|----------------|------|
| **Orange** | França, Europa | App Orange → "Meu espaço eSIM" → "Transferir para novo dispositivo" | 3x por ano | Grátis |
| **SFR** | França | App SFR & Moi → "Gerenciar meu SIM" → "Transferir eSIM" | 5x por ano | Grátis |
| **T-Mobile** | EUA | App T-Mobile → "Gerenciar eSIM" → "Transferir para novo dispositivo" | Ilimitado | Grátis |
| **Verizon** | EUA | App My Verizon → "Ativar ou trocar dispositivo" | Ilimitado | Grátis |
| **AT&T** | EUA | App AT&T → "Ativar eSIM" | Varia por plano | Grátis (pós-pago) |
| **EE** | Reino Unido | App EE → "Plano" → "Transferência de eSIM" | 3x por ano | Grátis |
| **Deutsche Telekom** | Alemanha | App Telekom → "Transferência de eSIM" | Ilimitado | Grátis |
| **Swisscom** | Suíça | App Swisscom → "Transferência de eSIM" | 3x por ano | Grátis |
| **Bouygues** | França | Reemissão de código QR (via portal do cliente) | 3x por ano | Grátis |
| **Free** | França | Reemissão de código QR (via portal do cliente) | 2x por ano | Grátis |
| **Vodafone** | Reino Unido, Europa | App Vodafone → "Transferência de eSIM" | Varia por país | Grátis (pós-pago) |
| **Google Fi** | EUA, Global | App Google Fi → "Ativar neste dispositivo" | Ilimitado | Grátis |

### eSIMs de viagem não são transferíveis

| Provedor | Transferível? | O que fazer em vez disso |
|----------|---------------|-------------------|
| **Roami** | ❌ Não | Compre um plano novo no seu novo dispositivo |
| **Airalo** | ❌ Não | Compre um plano novo no seu novo dispositivo |
| **Holafly** | ❌ Não | Compre um plano novo no seu novo dispositivo |
| **Nomad** | ❌ Não | Compre um plano novo no seu novo dispositivo |

**Como verificar se sua operadora suporta?** Tente as etapas do Método A ou B. Se sua operadora não oferece transferência pelo app ou um novo código QR, use os métodos alternativos abaixo.


## Métodos alternativos quando a transferência de eSIM entre plataformas não é suportada

Se sua operadora não está na lista, ou você vê um **erro de transferência de eSIM**, use uma destas alternativas:

### Código QR emitido pela operadora
1. Ligue ou converse por chat com sua operadora.
2. Diga: "Estou trocando de Android para iPhone (ou vice-versa). Por favor, reemitam meu eSIM como um novo código QR."
3. Eles enviarão por e-mail um código QR ou um link de ativação.
4. No novo dispositivo, vá em `Configurações` → `Celular` → `Adicionar eSIM` → `Usar código QR` e escaneie.
5. O eSIM do dispositivo antigo deixará de funcionar depois que o novo for ativado.

**Dica:** Algumas operadoras cobram uma pequena taxa pela reemissão do eSIM ($0‑25). Pergunte antes de solicitarem.

### Entrada manual de SM-DP+
Se sua operadora fornecer um **código de ativação** e um **endereço SM‑DP+** (o endereço do servidor que entrega o perfil de eSIM ao seu celular), você pode adicionar o eSIM manualmente no novo dispositivo:
1. `Configurações` → `Celular` → `Adicionar eSIM` → `Inserir detalhes manualmente`.
2. Cole o endereço SM‑DP+ e o código de ativação.
3. Toque em `Avançar`. Isso funciona tanto no iPhone quanto no Android.

### Compre um plano novo
Se você está usando um eSIM de viagem (Roami, Airalo, Holafly), não perca tempo tentando transferir – não vai funcionar. Simplesmente compre um plano novo no seu novo dispositivo — nossa [comparação de planos de eSIM de viagem](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/) classifica os provedores que valem a pena reinstalar.

> **Dica de transição:** A alternativa do código QR é o método mais confiável para qualquer operadora, independentemente de ela suportar transferência pelo app. Pode ser necessário fazer uma ligação, mas sempre funciona.


## Transferência de eSIM ou nova ativação?

Às vezes comprar um novo eSIM é mais rápido do que transferir. Veja quando escolher cada um:

| Fator | Transferir | Nova ativação | Qual é melhor? |
|--------|----------|----------------|------------------|
| **Você está mantendo o mesmo número de telefone** | ✅ Mantém o número | ❌ Ganha novo número | Transferência vence |
| **Você tem 2FA vinculado ao seu número** | ✅ Mantém o acesso | ❌ Risco de perder o acesso | Transferência vence |
| **Sua operadora cobra pela transferência** | Pode custar $0‑25 | $0 (você já está comprando novo) | Depende da taxa |
| **eSIM de viagem** | ❌ Impossível | ✅ Fácil | Nova ativação vence |
| **Você está com pressa (menos de 5 minutos)** | ⚠️ Pode levar 5‑10 min | ✅ 2 min para escanear o QR | Nova ativação vence |
| **Você quer manter seu plano/dados existentes** | ✅ Mantém os dados não usados | ❌ Perde os dados não usados | Transferência vence |

**Recomendação:** Se você está mantendo o mesmo plano da operadora e quer manter seu número de telefone, transfira. Se você está com um eSIM de viagem ou com pressa, simplesmente compre um plano novo no seu novo dispositivo.


## Por que minha transferência de eSIM falhou?

| Erro / Sintoma | Causa mais provável | Correção |
|----------------|-------------------|-----|
| "Transferência não disponível – operadora não suportada" | Sua operadora não suporta transferência entre plataformas. | Use os métodos alternativos acima. |
| O código QR escaneia, mas depois diz "sessão expirada" | Você demorou demais depois de gerar o código QR (ele expirou). | Repita o processo e escaneie imediatamente. |
| O Android diz "Pareamento falhou" | Permissões de Bluetooth ou rede local bloqueadas. | No iPhone: `Configurações > Privacidade e Segurança > Rede local` – certifique-se de que `Configurações` está ativado. No Android: desative a "Verificação de segurança Wi‑Fi" (geralmente nas configurações avançadas de Wi‑Fi). |
| A transferência começa, mas para em 50% | Wi‑Fi ou sinal celular fraco. | Aproxime os dois celulares do roteador. Desative a VPN em ambos os dispositivos. |
| **"eSIM já vinculado a outro dispositivo"** | O perfil não foi liberado corretamente do dispositivo antigo. | No dispositivo antigo, vá em `Configurações > Celular` e `Excluir eSIM` manualmente (se ainda estiver visível). Depois espere 5 minutos e tente novamente. Se ainda falhar, contate a operadora para liberar o perfil. |
| O iPhone pede um **código de confirmação** após o escaneamento | O perfil de eSIM tem um **código de confirmação de eSIM** obrigatório (raro). | Procure o código no e-mail da operadora (geralmente 4–8 dígitos). Se não encontrar, pergunte à operadora. |
| Clicar duas vezes no botão lateral não faz nada (iPhone → Android) | Autenticação biométrica não configurada ou desativada. | Configure Face ID / Touch ID, ou desative temporariamente "Exigir atenção" do Face ID. |
| **eSIM sem serviço** após a transferência | Configurações de APN não configuradas. | Configure o APN manualmente (veja a tabela abaixo). |
| **Perfil de eSIM expirado** | O perfil tem uma data de validade limitada. | Contate sua operadora para obter um novo código QR. |
| **"Sem opção Adicionar eSIM" no iPhone** | O iPhone está bloqueado por operadora ou com iOS antigo. | Verifique o bloqueio da operadora em Configurações > Geral > Sobre. Atualize para o iOS 18. |
| **"SIM não suportado" no novo dispositivo** | O novo dispositivo está bloqueado para outra operadora. | Verifique o Bloqueio da operadora – deve mostrar "Sem restrições de SIM". |
| **Limite de transferência excedido** | Você transferiu este eSIM muitas vezes (algumas operadoras limitam a 3‑5 por ano). | Contate o suporte da operadora para redefinir o limite ou obter um novo eSIM. |
| **"Falha na transferência do eSIM" no Samsung** | O Samsung Smart Switch pode não suportar o perfil da operadora específica. | Use a alternativa do código QR da operadora. |

### Configuração manual de APN

Se, após a **transferência do eSIM**, você ficar **sem serviço no eSIM**, configure o APN manualmente:

| Operadora | APN | Usuário | Senha |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (vazio) | (vazio) |
| **SFR** | sl2sfr | (vazio) | (vazio) |
| **Free** | free | (vazio) | (vazio) |
| **Bouygues** | ebouygtel.com | (vazio) | (vazio) |
| **T-Mobile (EUA)** | fast.t-mobile.com | (vazio) | (vazio) |
| **AT&T (EUA)** | nxgen | (vazio) | (vazio) |
| **Verizon (EUA)** | vzwinternet | (vazio) | (vazio) |
| **Telekom (DE)** | internet.telekom | (vazio) | (vazio) |

### Ainda travado?
Reúna estas informações antes de ligar para o suporte:
- IMEI e EID do dispositivo de origem
- IMEI e EID do dispositivo de destino
- A mensagem de erro exata (tire um print)
- Seu número de conta ou número de telefone


## O que acontece com o eSIM antigo após a transferência?

**Ele é desativado imediatamente.**

O perfil de eSIM antigo pode permanecer visível no dispositivo antigo por um curto período. Você pode excluí-lo manualmente:
`Configurações > Celular > toque no eSIM antigo > Excluir eSIM`.

> 💰 **Cobrança**: Sua operadora continuará cobrando pelo plano. Transferir não cancela o plano – ele apenas move o SIM. Para cancelar, você deve contatar a operadora separadamente.

Se você está preocupado com erros de **eSIM vinculado a outro dispositivo**, sempre exclua o perfil antigo do dispositivo de origem depois que a transferência for concluída com sucesso.

### Cronograma de transferência vs exclusão

| Ação | O que acontece | Quando fazer |
| :--- | :--- | :--- |
| **Transferência iniciada** | A operadora envia o perfil para o novo dispositivo | Antes de excluir o eSIM antigo |
| **Novo eSIM ativado** | O novo dispositivo se conecta à rede | Depois que a ativação for concluída |
| **eSIM antigo desativado** | A operadora desativa o perfil antigo | Automaticamente – pode levar de 1 a 5 minutos |
| **Excluir eSIM antigo** | Remove o perfil inativo do dispositivo antigo | Depois de confirmar que o novo dispositivo funciona |


## Movendo WhatsApp, iMessage e 2FA após uma transferência de eSIM

Depois de transferir seu eSIM com sucesso, você precisa configurar seus apps de mensagens e serviços de autenticação no novo dispositivo.

### WhatsApp

O WhatsApp usa seu número de telefone para identificar sua conta. Após a **transferência do eSIM**:

1. Abra o WhatsApp no seu novo dispositivo.
2. Digite seu número de telefone (aquele que você transferiu).
3. Você receberá um código de verificação por SMS ou ligação automatizada para o seu número.
4. Digite o código – suas conversas reaparecerão se você fez backup anteriormente.

**Dica:** Faça backup das suas conversas antes de iniciar a transferência. No iPhone: WhatsApp > Configurações > Conversas > Backup de conversas. No Android: WhatsApp > Configurações > Conversas > Backup.

**Problema comum do WhatsApp:** Se você não receber o código de verificação por SMS, tente a opção "Ligar para mim" – o WhatsApp ligará para o seu número e lerá o código. Se isso falhar, espere 5 minutos e tente novamente (a rede da operadora ainda pode estar se estabilizando).

### iMessage e FaceTime

1. Vá em `Configurações` → `Mensagens` e ative o `iMessage`.
2. Vá em `Configurações` → `FaceTime` e ative o `FaceTime`.
3. Aguarde de 1 a 2 minutos para a ativação. Se aparecer "Aguardando ativação", desative e ative novamente.
4. Verifique se o seu número está selecionado: Configurações > Mensagens > Enviar e receber → selecione seu número de eSIM.

### Autenticação de dois fatores e verificação por SMS

Como seu número de telefone não mudou, os códigos de 2FA por SMS funcionarão normalmente. No entanto, os autenticadores baseados em app (Google Authenticator, Microsoft Authenticator, Authy) podem exigir nova configuração:

- **Authy:** Seus tokens são criptografados e salvos na nuvem – basta fazer login no novo dispositivo.
- **Google Authenticator:** Você precisará transferir suas contas individualmente ou usar o recurso "Transferir contas".
- **Microsoft Authenticator:** Use o recurso de backup para restaurar no novo dispositivo.
- **2FA por SMS:** Teste solicitando um código de verificação do seu banco ou provedor de e-mail para confirmar que a entrega de SMS funciona.

### Apps de banco e serviços financeiros

A maioria dos bancos detectará a troca de dispositivo e exigirá nova autenticação. Tenha suas credenciais de login e quaisquer tokens físicos à mão.

Para mais ajuda com a migração de apps após a **transferência de eSIM**, veja nosso [guia de configuração de eSIM](/faq/how-to-activate-an-esim/).


## Melhores práticas para evitar dores de cabeça com a transferência de eSIM

✅ **Antes de transferir:**
- Verifique o suporte da operadora (procure no menu – se estiver lá, é suportado).
- Atualize os dois celulares para o sistema operacional mais recente (iOS 18 / Android 16).
- Carregue os dois celulares acima de 30%.
- Desative temporariamente a VPN e bloqueadores de anúncios.
- Verifique se o seu **perfil de eSIM** não está **expirado**.
- Faça backup do WhatsApp e de outros apps de mensagens.
- **NÃO exclua o eSIM do dispositivo antigo ainda.**

✅ **Durante a transferência:**
- Mantenha os celulares a menos de 10 cm um do outro.
- Não troque de app nem bloqueie a tela.
- Não desative o Bluetooth nem o Wi‑Fi.
- Espere a mensagem de confirmação – não presuma que está concluído.

✅ **Após a transferência:**
- Teste chamadas e dados no novo dispositivo.
- Exclua o eSIM antigo do dispositivo de origem para evitar confusão.
- Mantenha o Wi‑Fi do dispositivo antigo ligado por pelo menos uma hora – algumas operadoras precisam de um aperto de mão final.
- Reative o WhatsApp, iMessage e apps de 2FA.
- Teste códigos de verificação por SMS do seu banco.
- Defina um lembrete para cancelar o plano antigo se você estiver trocando de operadora completamente.


## Viagem e transferência de eSIM

Se você está viajando para o exterior e precisa transferir seu eSIM, aqui estão alguns pontos importantes. E se a transferência não puder ser salva no meio da viagem, a saída mais rápida geralmente é comprar um plano local — veja o [guia de planos de eSIM dos EUA](/faq/the-ultimate-guide-to-us-esim-in-2026-how-to-choose-the-best-plan/) ou o [guia de compra de eSIM do Reino Unido](/faq/how-to-buy-a-uk-esim/) dependendo do seu destino:

### Transferindo um eSIM durante a viagem
- A transferência entre plataformas funciona **no mundo todo**, desde que sua operadora suporte.
- Certifique-se de ter uma conexão Wi‑Fi estável (hotel, café) antes de começar.
- Se a transferência falhar, a alternativa do código QR da operadora é sua melhor opção.
- Verifique as **configurações de APN do eSIM** após a transferência – algumas operadoras exigem configuração manual.

### Operadoras francesas e viagem
- **Orange** e **SFR** permitem transferência entre plataformas de onde você estiver.
- **Free** e **Bouygues** exigem a reemissão de um código QR – faça isso antes de sair.
- Para **eSIMs de viagem**, lembre-se de que eles geralmente **não são transferíveis** – compre um plano novo no seu novo dispositivo.

### Como contatar operadoras estando no exterior

| Operadora | Método de contato do suporte | Observações |
|---------|------------------------|-------|
| **Orange** | Chat do app Orange, suporte por WhatsApp ou telefone | 24/7 na maioria das regiões |
| **SFR** | Chat do app SFR & Moi, telefone | Horário limitado |
| **T-Mobile** | Chat do app T‑Mobile, iMessage, telefone | Suporte 24/7 nos EUA |
| **Verizon** | Chat do app My Verizon, telefone | Suporte 24/7 |
| **AT&T** | Chat do app AT&T, telefone | Horário limitado internacionalmente |
| **EE** | Chat do app EE, telefone | Suporte 24/7 no Reino Unido |

**Dica:** Baixe o app da sua operadora e salve as informações de contato do suporte antes de viajar. Algumas operadoras exigem verificação por SMS para fazer login – se você estiver no meio de uma transferência, isso pode não funcionar.

### O que fazer se sua transferência falhar no meio da viagem

1. Conecte-se ao Wi‑Fi gratuito mais próximo (aeroportos, hotéis, cafés).
2. Contate o suporte da sua operadora por e-mail ou app de mensagens.
3. Peça para reemitirem seu eSIM como um código QR.
4. Escaneie o código QR no seu novo dispositivo.

### Dicas para quem viaja o mundo
- Sempre mantenha uma cópia de backup dos seus códigos QR de eSIM.
- Se você trocar de celular no meio da viagem, prefira a transferência nativa ao código QR quando possível.
- Para vários destinos, considere um plano global de eSIM que cubra vários países.
- Salve as informações de contato do suporte da sua operadora antes de viajar.

Para mais sobre o uso de eSIMs durante viagens, veja nosso [guia de eSIM de viagem 2026](/faq/travel-esim-2026-how-to-avoid-roaming-fees-stay-connected-abroad/).


## Perguntas frequentes

**P1: Posso transferir um eSIM somente dados (como um eSIM de viagem)?**
Não. A maioria dos eSIMs de viagem (Roami, Airalo, Holafly, Nomad, etc.) não suporta transferência entre plataformas. Eles são projetados para serem instalados uma vez por dispositivo. Você precisará comprar um plano novo no seu celular novo. Veja "Por que eSIMs de viagem não podem ser transferidos?" acima para a explicação técnica.

**P2: A transferência funciona entre um iPhone 11 e um Samsung S24?**
Sim – desde que ambos atendam aos requisitos de sistema. O iPhone 11 suporta iOS 18 (ele roda até o iOS 18). O Samsung S24 suporta Android 16. A geração do hardware não importa; apenas a versão do sistema importa.

**P3: O app da minha operadora não oferece transferência de eSIM. Por quê?**
Nem toda operadora suporta transferência de eSIM pelo app. Se a sua não oferece, use a alternativa do código QR da operadora: contate sua operadora e peça para reemitirem seu eSIM como um novo código QR. Algumas operadoras cobram uma pequena taxa por isso ($0‑25).

**P4: Meus códigos de WhatsApp / iMessage / 2FA continuarão funcionando após a transferência?**
O WhatsApp usa seu número de telefone – ele detectará a troca de SIM e pode pedir nova verificação (geralmente automática). O iMessage no iPhone usa o número do eSIM e deve reativar em até um minuto. Para o 2FA, os serviços que enviam SMS para o seu número funcionarão normalmente – o número não mudou. Veja a Seção 10 para as etapas detalhadas de migração.

**P5: Posso transferir o mesmo eSIM de um lado para o outro várias vezes?**
Sim, mas cada transferência requer o mesmo processo. Algumas operadoras limitam quantas vezes um eSIM pode ser transferido por ano (por exemplo, 3‑5 vezes). Se atingir o limite, contate sua operadora para obter ajuda.

**P6: E as configurações de dual SIM com eSIM + SIM físico?**
A transferência move apenas o eSIM. O SIM físico permanece no dispositivo de origem. Se você quiser mover ambos, precisará transferir o eSIM (usando este guia) e mover fisicamente o cartão nano‑SIM para o novo dispositivo. Para otimizar a experiência de dual SIM após a transferência, confira nosso **[Dual eSIM não funciona? 12 correções para iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)**.

**P7: E se eu receber um erro de "perfil de eSIM expirado" durante a transferência?**
Contate sua operadora para obter um novo código QR – a reemissão geralmente é gratuita. Certifique-se de ativar o novo código QR imediatamente (dentro de 30 minutos) para evitar que expire de novo.

**P8: Por que o bloqueio da minha operadora me impede de transferir?**
Se o seu celular está sob **bloqueio de operadora**, você só pode transferir um eSIM para um dispositivo da mesma operadora. Contate sua operadora para desbloquear o dispositivo antes da transferência. No iPhone: Configurações > Geral > Sobre > Bloqueio da operadora deve mostrar "Sem restrições de SIM".

**P9: Posso transferir um eSIM da Orange para um dispositivo que não é da Orange?**
Sim, se o seu dispositivo estiver desbloqueado e o seu plano da Orange permitir. A **transferência de eSIM da Orange** é suportada pelo app da Orange ou por transferência nativa. A Orange permite até 3 transferências por ano.

**P10: A transferência funciona com um eSIM da Free?**
Não – a Free não suporta transferência entre plataformas. Use o método alternativo do código QR pelo portal do cliente da Free. A Free permite até 2 transferências por ano.

**P11: O que é um código de confirmação de eSIM e onde encontro?**
Alguns perfis de eSIM têm um **código de confirmação de eSIM** obrigatório – geralmente de 4 a 8 dígitos. Procure-o no e-mail da operadora ou nas instruções de ativação. Se não encontrar, pergunte à sua operadora.

**P12: O que significa "eSIM não transfere para o celular novo"?**
Isso geralmente significa que sua operadora não suporta a transferência, o código QR expirou, o eSIM antigo ainda está ativo, ou o novo dispositivo está bloqueado por operadora. Exclua o eSIM antigo primeiro (se ainda estiver visível) e tente novamente. Veja a Seção 7 para a tabela completa de solução de problemas.

**P13: Como corrigir "falha na ativação do eSIM" após a transferência?**
Verifique sua conexão Wi‑Fi, reinicie os dois dispositivos e tente novamente. Se ainda falhar, use o método de entrada manual com o endereço SM‑DP+ do e-mail da sua operadora.

**P14: Transferir meu eSIM cancela meu plano?**
Não – transferir o eSIM apenas move o perfil de SIM para um novo dispositivo. Seu plano (e cobrança) continua como antes. Para cancelar seu plano, você deve contatar sua operadora separadamente.

**P15: Posso transferir um eSIM se já o excluí do celular antigo?**
Sim, mas é mais complicado. Se você excluiu o eSIM antes de iniciar a transferência, contate sua operadora e peça para reemitirem seu eSIM como um novo código QR. Eles podem fazer isso porque seu perfil ainda existe nos servidores deles.

**P16: Quanto custa reemitir um código QR de eSIM?**
A maioria das operadoras reemite eSIMs gratuitamente (especialmente planos pós-pagos). Algumas operadoras pré-pagas ou MVNOs podem cobrar uma pequena taxa ($5‑25). Pergunte antes de solicitar a reemissão.

**P17: Posso transferir um eSIM da Vodafone para um dispositivo que não é da Vodafone?**
Sim, desde que seu dispositivo esteja desbloqueado e seu plano da Vodafone permita a transferência de eSIM. A Vodafone suporta a transferência pelo app dela na maioria dos países. Procure a opção "transferência de eSIM" no app da Vodafone.

**P18: E se eu atingir o limite de transferência da minha operadora?**
Algumas operadoras limitam as transferências a 3‑5 por ano. Se você atingir o limite, contate o suporte da operadora – eles frequentemente podem redefinir o limite ou emitir manualmente um novo código QR de eSIM (contornando o sistema de transferência).

**P19: Posso transferir dois eSIMs ao mesmo tempo (dual eSIM)?**
Sim, mas você deve transferi-los **um de cada vez**. Cada perfil de eSIM é independente e deve ser transferido separadamente usando o mesmo processo. Se você tem dois eSIMs ativos no seu dispositivo antigo, transfira o eSIM principal primeiro, depois o secundário.

**P20: Qual é a diferença entre transferência de eSIM e reemissão de eSIM?**
A transferência move seu perfil existente para um novo dispositivo (mantendo seu número e plano). A reemissão cria um perfil de eSIM completamente novo para o mesmo número – o perfil antigo é desativado permanentemente. A reemissão é o método alternativo quando a transferência não é suportada pela sua operadora.

---

## Conclusão final

A capacidade de transferir eSIMs entre iPhone e Android sem a intervenção da operadora é uma **revolução de 2026**. Ela elimina o último grande ponto de atrito para quem troca de ecossistema. Contanto que sua operadora esteja na lista de suportadas e ambos os celulares estejam atualizados, você pode mover seu número em menos de um minuto.

**Lembre-se**:
- Se sua operadora não for suportada, a alternativa do código QR ainda funciona – só precisa de uma ligação.
- Para eSIMs de viagem, trate-os como de uso único; compre novos em cada dispositivo.
- **Nunca exclua o eSIM antigo antes de iniciar a transferência** – este é o erro mais comum.
- Verifique o bloqueio da operadora antes de começar – é necessário "Sem restrições de SIM".
- Algumas operadoras limitam as transferências por ano – verifique antes de começar.

Se você encontrar mensagens persistentes de **erro de transferência de eSIM**, nosso **[Guia avançado de solução de problemas de eSIM (16 casos reais)](/faq/esim-deep-troubleshooting-guide-2026/)** cobre soluções avançadas.

👉 **Transferindo para um plano de viagem?** Veja [eSIM para os EUA](/united-states-esim/) ou [eSIM para a Europa](/europe-esim/) quando sua transferência for concluída.

👉 **Não sabe se seu celular novo é compatível com eSIM?** Confira nossa **[lista completa de compatibilidade](/compatibility/)** antes de começar.

👉 **Testando um eSIM de viagem no seu novo dispositivo?** Pegue um **[eSIM de teste grátis da Roami](/free-esim/)** para confirmar que tudo funciona.

---

*Informações baseadas na documentação oficial da Apple e do Android, nos padrões GSMA e nas orientações das operadoras até setembro de 2026. Recursos e suporte de operadoras estão sujeitos a mudanças.*
## Fontes

- [GSMA — especificação eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Suporte Apple — Configurar eSIM no iPhone](https://support.apple.com/en-us/HT212780)
- [Suporte Google — Configurar um eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Suporte Google — eSIM Android](https://support.google.com/android/answer/11241215)
