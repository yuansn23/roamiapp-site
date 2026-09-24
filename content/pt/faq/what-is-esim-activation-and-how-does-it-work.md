---
title: "O Que É Ativação de eSIM e Como Ela Funciona?"
h1_title: "O Que É Ativação de eSIM e Como Ela Funciona?"
description: "O que é ativação de eSIM? Um guia passo a passo cobrindo verificação de compatibilidade, leitura de QR e erros comuns no iPhone e no Android."
keywords: ["o que é ativação de eSIM", "como funciona a ativação de eSIM", "processo de ativação de eSIM", "como verificar compatibilidade de esim", "meu celular suporta esim", "verificação de compatibilidade eSIM", "significado de ativação de eSIM", "Android eSIM", "código QR de eSIM", "eSIM de viagem"]
date: 2026-09-15T00:00:00Z
lastmod: 2026-09-15T00:00:00Z
tags: ["eSIM", "iOS", "Android", "Troubleshooting", "Travel Setup", "Compatibility"]
toc: true
image: "/img/faq/esim-activation-how-it-works.webp"
image-1: "/img/faq/esim-activation-how-it-works-1.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Atualizado em"
  min_read: "min de leitura"
  toc: "Índice de Conteúdo"

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
    - question: "O que é ativação de eSIM e como ela funciona?"
      url: "faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Como ativar um eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Como ativar o eSIM no iPhone (todos os modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista mais recente de compatibilidade de eSIM"
      url: "/compatibility/"
---


> **Nota do Editor:** Ativação de eSIM significa baixar um perfil de operadora para o seu celular pela internet — via código QR, aplicativo da operadora ou entrada manual de SM-DP+ — em vez de inserir um SIM físico. Este guia segue a documentação oficial da Apple e do Android e os padrões da GSMA. Ao final, você saberá qual método de ativação seu celular usa e como concluí-lo.

A ativação de eSIM é o processo de baixar um perfil de operadora para o chip eSIM embutido do seu celular — do servidor SM-DP+ da operadora, geralmente escaneando um código QR, inserindo os detalhes manualmente ou instalando pelo aplicativo da operadora. Leva de dois a cinco minutos, precisa de uma conexão Wi-Fi, e esta página explica cada método, além dos erros que podem interrompê-lo.

## O Que Significa Ativação de eSIM?

**O que é?** Um download de SIM digital que coloca seu celular em uma rede móvel em menos de 2 minutos – sem precisar de cartão de plástico.

**Como funciona o processo?**
- Você escaneia um código QR (ou usa o aplicativo de uma operadora)
- Seu celular baixa um perfil digital do servidor seguro da operadora
- Seu celular se conecta à rede local instantaneamente

**Seu celular tem suporte?** Disque `*#06#` – se você vir um EID de 32 dígitos, sim. Se aparecerem apenas números de IMEI, não.

**O que você precisa?** Uma conexão Wi‑Fi estável + um plano de eSIM (código QR ou aplicativo)

**Quanto tempo leva tudo isso?** Leitura do QR: cerca de 1-2 minutos. Primeira conexão à rede: até 10-15 minutos.

> 💡 **Requisito fundamental:** Você PRECISA ter uma conexão de internet ativa (Wi‑Fi) para concluir a configuração. Não é possível fazer offline. Este é um requisito obrigatório – o perfil precisa ser baixado do servidor da operadora.

**Não sabe se seu celular é compatível?** Para a lista completa de dispositivos que funcionam com SIMs digitais, veja nossa **[lista completa de compatibilidade](/compatibility/)**.

**Quer testar o processo sem pagar?** Pegue um **[eSIM de teste gratuito da Roami](/free-esim/)** – leva 2 minutos e confirma que tudo funciona no seu celular.


## Qual Método de Ativação de eSIM Você Deve Usar?

Nem todas as ativações são iguais. Escolha seu cenário abaixo para encontrar a abordagem certa.

| Sua Situação | Melhor Método | O Que Você Vai Precisar |
| :--- | :--- | :--- |
| **Você comprou um plano de viagem online** (Roami, Airalo, Holafly, etc.) | Leitura de código QR | Código QR enviado por e-mail + conexão Wi‑Fi |
| **Sua operadora enviou um código QR** | Leitura de código QR | Código QR da operadora + conexão Wi‑Fi |
| **Sua operadora oferece um aplicativo** (T‑Mobile, Verizon, Orange, etc.) | Instalação pelo app da operadora | Aplicativo da operadora instalado + login na conta |
| **Sua câmera está quebrada ou você não consegue escanear** | Entrada manual | Endereço SM‑DP+ + código de ativação (do e-mail) + código de confirmação (se exigido) |
| **Você está migrando de um celular antigo** | Transferência de dispositivo próximo | Os dois celulares próximos + Bluetooth ligado + Wi‑Fi ligado |
| **Você usa um plano pós-pago de operadora** | Aplicativo da operadora ou visita à loja | Credenciais da conta + às vezes verificação de identidade na loja |


## Guia Completo de Ativação de eSIM

Aqui está o caminho passo a passo para quem está passando por esse processo pela primeira vez.

| Etapa | O Que Você Está Pensando | O Que Fazer | Tempo Estimado |
| :--- | :--- | :--- | :--- |
| **1. Entender** | "O que isso realmente é, e por que deveria me importar?" | Aprenda o básico – um SIM digital que você configura online sem cartão físico. | 5 minutos |
| **2. Verificar compatibilidade** | "Meu celular sequer suporta isso?" | Disque `*#06#` para verificar se há um número EID. Ou pegue um teste gratuito para experimentar. | 1 minuto |
| **3. Comprar um plano** | "Qual plano devo comprar, e onde?" | Escolha um plano de viagem (para viagens) ou um plano de operadora local (para estadias longas). | 5-10 minutos |
| **4. Ativar** | "Tenho o código QR – e agora?" | Vá em Settings > Cellular > Add eSIM, escaneie o código QR e aguarde. | 2 minutos |
| **5. Primeira conexão** | "Aparece ativado mas não tenho sinal – algo está errado?" | Aguarde até 10-15 minutos para o celular encontrar as torres locais. Ative o Data Roaming. | Até 15 minutos |
| **6. Solução de problemas** | "Ainda não funciona – o que faço?" | Verifique o Wi‑Fi, o Data Roaming, as configurações de APN ou o status de bloqueio da operadora. | 5-10 minutos |
| **7. Usar seu plano** | "Estou conectado – e agora, como gerencio dados e configurações?" | Defina sua nova linha como padrão para dados e mantenha seu SIM físico para chamadas (dual SIM). | N/A |

**Tempo total do início à conexão:** Geralmente 10-15 minutos. Reserve até 30 minutos se tiver problemas.


## O Que É um eSIM?

Um eSIM (Embedded Subscriber Identity Module) é um minúsculo chip programável soldado permanentemente na placa-mãe do seu celular durante a fabricação. Ele faz exatamente o mesmo trabalho que um cartão SIM de plástico tradicional – provar sua identidade a uma rede móvel – mas é 100% digital.

Como é regravável, você pode trocar de operadora ou adicionar planos de dados sem nunca precisar ejetar uma bandeja de SIM ou esperar um cartão físico chegar pelo correio. A tecnologia é regida pelo [padrão SGP.22 da GSMA](https://www.gsma.com/esim/), garantindo interoperabilidade global entre dispositivos e operadoras. A [página oficial de suporte da Apple para eSIM](https://support.apple.com/en-us/HT212780) fornece informações detalhadas sobre os modelos de iPhone compatíveis, e a [página oficial de suporte a eSIM do Android](https://support.google.com/android/answer/11241215) cobre dispositivos Android.

**Pense assim:** Um SIM físico é como uma chave de plástico que você carrega. Um eSIM é como uma chave digital que vive no seu celular – você pode receber uma chave nova eletronicamente sem nunca visitar um chaveiro.


## Como Funciona a Ativação de eSIM?

Quando você compra um SIM físico, os dados da rede já vêm gravados no chip. Com um eSIM, o chip do seu celular está inicialmente em branco. O processo de ativação é simplesmente preencher esse chip em branco com os dados da sua operadora.

Veja o que acontece nos bastidores:

- **O Servidor SM-DP+:** Sua operadora armazena seu perfil digital exclusivo em um servidor seguro chamado SM-DP+ (Subscription Manager Data Preparation). Pense nele como um armazém digital onde seu perfil fica guardado até você estar pronto para baixá-lo.

- **O Handshake:** Quando você escaneia o código QR, seu celular o lê, conecta-se à internet e entra em contato com esse servidor específico.

- **O Download:** Seu celular baixa o perfil com segurança e o instala no chip embutido. Uma vez instalado, ele pode se conectar às torres de celular locais exatamente como um SIM físico.

### O Que É um Código de Confirmação de eSIM?

Algumas operadoras exigem um **código de confirmação** (também chamado de código de ativação ou código de verificação) durante o processo de configuração. É um código de 4 a 8 dígitos que você digita depois de escanear o código QR ou durante a entrada manual.

**Onde encontrá-lo:** O código de confirmação geralmente está no mesmo e-mail do seu código QR. Procure uma seção rotulada "Confirmation Code", "Activation Code", "Verification Code" ou "SM-DP+ Code".

**Por que algumas operadoras o exigem:** Ele adiciona uma camada extra de segurança – mesmo que alguém roube seu código QR, não poderá ativar o perfil sem o código de confirmação.

**E se você não encontrá-lo:** Verifique sua pasta de spam. Se não estiver lá, entre em contato com o suporte do seu provedor com o número do pedido.

> 💡 **Dica profissional:** Como o perfil precisa ser baixado de um servidor, você absolutamente precisa ter uma conexão de internet ativa (Wi‑Fi) para concluir a configuração. Não é possível fazer offline. Se você estiver viajando e não tiver Wi‑Fi, use o Wi‑Fi gratuito do aeroporto ou um ponto de acesso móvel do celular de um amigo.

### Dá Para Ativar Sem Wi‑Fi?

**Não. Isso é impossível.**

O perfil precisa ser baixado do servidor SM‑DP+ da operadora pela internet. Sem conexão com a internet, seu celular não tem como alcançar o servidor e baixar o perfil.

**O que fazer se você não tiver Wi‑Fi:**
- Use o Wi‑Fi gratuito do aeroporto (a maioria dos aeroportos internacionais oferece)
- Use o ponto de acesso móvel de um amigo
- Use o Wi‑Fi de um café ou hotel
- Compre um SIM físico primeiro (como alternativa) e use sua conexão de dados para configurar o digital

**Importante:** Instale seu plano **antes de sair de casa**, no Wi‑Fi de casa. Esta é a dica mais importante para viajantes.

### Ativação de eSIM vs Download de eSIM

As pessoas costumam usar esses termos de forma intercambiável, mas são ligeiramente diferentes:

| Termo | O Que Realmente Significa |
|------|----------------------|
| **Download** | O ato técnico de transferir o perfil do servidor da operadora para o seu celular (leva 10‑60 segundos) |
| **Ativação** | O processo inteiro – verificar compatibilidade, comprar um plano, escanear o código QR, baixar o perfil e conectar-se à rede |

**Na prática:** Quando alguém diz "estou ativando meu eSIM", geralmente se refere ao processo todo. Quando uma operadora diz "o perfil foi baixado com sucesso", refere-se à transferência técnica concluída. Para a maioria dos usuários, a distinção não importa – basta seguir os passos e você estará conectado.


## Checklist de Ativação de eSIM

**Complete este checklist ANTES de tentar configurar seu plano digital:**

| Etapa | Verificação | Como Verificar |
| :--- | :--- | :--- |
| **1** | Seu celular tem suporte | Disque `*#06#` – procure o EID. Se não houver EID, pare – você precisa de um SIM físico. |
| **2** | Seu celular está desbloqueado pela operadora | Settings > General > About > Carrier Lock – deve dizer "No SIM restrictions". |
| **3** | Você tem uma conexão Wi‑Fi estável | Teste carregando um site. Wi‑Fi público pode bloquear servidores de operadoras – tente outra rede se a configuração falhar. |
| **4** | Você tem seu código QR OU código de ativação + endereço SM‑DP+ | Códigos QR expiram após 30‑90 dias – verifique a data de validade no seu e-mail. |
| **5** | Você tem seu código de confirmação (se exigido) | Verifique no seu e-mail um código de 4‑8 dígitos. Algumas operadoras exigem. |
| **6** | Seu iOS ou Android está atualizado | Vá em Settings > Software Update. Versões antigas do sistema podem ter bugs. |

> ⚠️ **Atenção:** Nunca exclua um perfil enquanto ele estiver "Ativando" ou se você estiver sem sinal. Excluir o perfil geralmente significa que você não poderá escanear o código QR novamente, e terá que contatar o suporte ao cliente para receber um substituto.


## SIM Físico vs SIM Digital

| Recurso | SIM Físico Tradicional | eSIM Digital |
| :--- | :--- | :--- |
| **Formato** | Chip de plástico removível | Chip digital embutido |
| **Tempo de Ativação** | Dias (esperando o correio) ou na loja | Instantâneo (pela internet) – 2 minutos |
| **Trocar de Operadora** | Exige trocar o cartão fisicamente | Feito nos Ajustes do celular |
| **Múltiplos Perfis** | Geralmente limitado a 1‑2 slots | Pode armazenar 5‑8 perfis (dependendo do celular) |
| **Segurança** | Pode ser perdido, roubado ou danificado | Não pode ser removido fisicamente se o celular for roubado |
| **Comprar antes de viajar** | ❌ É preciso esperar a entrega ou comprar no destino | ✅ Compre online a qualquer hora, em qualquer lugar |
| **Trocar de celular** | Fácil – basta mover o cartão | Perfis de viagem são de instalação única; perfis de operadora podem ser transferidos |
| **Ambos podem ficar ativos?** | N/A – apenas um SIM físico por slot | ✅ Sim – digital + físico podem ficar ativos simultaneamente (dual SIM) |

### O Que Acontece com Seu SIM Físico Quando Você Adiciona um Plano Digital?

**Absolutamente nada.** Seu SIM físico permanece totalmente ativo e independente.

Quando você configura um plano digital:
- Seu SIM físico continua funcionando normalmente para chamadas, mensagens e dados (se você o definir como linha de dados).
- O plano digital adiciona uma segunda linha ao seu celular.
- Você pode escolher qual linha usar para dados, chamadas e mensagens.
- Ambas as linhas podem ficar ativas ao mesmo tempo (dual SIM dual standby).

**Pense assim:** Seu SIM físico é seu número de telefone principal. O plano digital é uma linha adicional (como um segundo cartão SIM) que você pode ligar e desligar conforme a necessidade.

### Um Perfil Pode Ser Usado em Vários Dispositivos?

**Não. Isso é impossível.**

Cada perfil é vinculado criptograficamente ao **EID** (eUICC Identifier) do dispositivo em que foi ativado. O EID do seu celular é único – é como um número de série para o seu hardware de eSIM.

Se você tentar escanear o mesmo código QR em dois celulares, o segundo receberá um erro: "QR code already used" ou "Activation failed".

**O que você pode fazer em vez disso:**
- Compre um plano separado para cada dispositivo
- Use o Personal Hotspot do seu celular para compartilhar dados com seu tablet ou laptop
- Se você tem um plano de operadora (não de viagem), algumas operadoras permitem transferência entre dispositivos (veja nosso [guia de transferência de eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/))

**Exceção:** Algumas operadoras oferecem planos "multi‑dispositivo" em que você pode ter vários perfis na mesma conta – mas cada dispositivo ainda recebe seu próprio perfil exclusivo. O plano é compartilhado entre os dispositivos, mas os perfis são específicos de cada um.


## Como Ativar um eSIM

Dependendo da sua operadora e do seu dispositivo, há três formas principais de acionar a configuração. Para um passo a passo completo em todos os modelos de celular, veja nosso **[guia geral de ativação de eSIM](/faq/how-to-activate-an-esim/)**.

### Escaneando um Código QR
Esta é a abordagem padrão para a maioria dos **planos de viagem**.

1. Vá em **Settings > Cellular** (ou Mobile Data).
2. Toque em **Add eSIM** ou **Add Data Plan**.
3. Selecione **Use QR Code**.
4. Escaneie o código QR fornecido pela sua operadora e siga as instruções na tela.
5. Se solicitado, digite seu **código de confirmação** (4‑8 dígitos do seu e-mail).
6. Aguarde o download do perfil (leva 10‑60 segundos).
7. Nomeie seu plano (por exemplo, "Viagem ao Japão" ou "Dados EUA").

### Entrada Manual
Se sua câmera está quebrada ou você não consegue escanear o código QR (por exemplo, o código está no celular que você está tentando configurar), você pode inserir os detalhes manualmente.

1. Na tela de leitura do código QR, toque em **Enter Details Manually** na parte inferior.
2. Digite o **Endereço SM-DP+** e o **Código de Ativação** fornecidos no seu e-mail de confirmação.
3. Se sua operadora exigir um **código de confirmação**, insira-o quando solicitado.
4. Aguarde o download e a ativação do perfil.

### Instalação pelo App da Operadora
Muitas operadoras modernas permitem configurar diretamente pelo aplicativo delas com um único toque. O aplicativo se comunica automaticamente com as configurações do seu celular para instalar o perfil sem precisar de um código QR.

**Como funciona:**
1. Baixe o aplicativo da sua operadora (por exemplo, T‑Mobile, Verizon, Orange, EE).
2. Faça login na sua conta.
3. Procure por "Activate eSIM" ou "Get eSIM" no aplicativo.
4. Toque no botão – o aplicativo envia automaticamente o perfil para o seu celular.
5. Siga as instruções na tela para concluir a configuração.

> 💡 **Dica profissional:** A configuração pelo aplicativo costuma ser o método mais rápido (menos de 1 minuto) e não exige escanear um código QR. Também é menos propensa a erros como "QR code invalid".


## Como Verificar Se Seu Celular Tem Suporte a eSIM

Antes mesmo de tentar configurar um plano digital, você precisa confirmar que seu celular realmente tem o hardware necessário. A última coisa que você quer é comprar um plano de viagem e descobrir que seu celular não oferece suporte.

### A Verificação Universal do EID

Esta é a forma mais rápida e confiável de responder **"meu celular tem eSIM"** ou **"meu celular suporta eSIM"**.

1. Abra o **discador** do seu celular (o aplicativo que você usa para fazer chamadas).
2. Disque `*#06#` (como se fosse um número de telefone) e pressione chamar.
3. Uma tela aparecerá com os identificadores do seu dispositivo. Procure um número rotulado **EID** (Embedded Identity Document) – deve ser um código de 32 dígitos.
   - **Se você vir um EID:** Parabéns – seu celular tem o hardware. Você pode prosseguir com a configuração.
   - **Se você vir apenas números de IMEI (IMEI1, IMEI2) e nenhum EID:** Seu celular **não** suporta SIMs digitais. Você terá que usar um SIM físico.

Este método funciona em iPhones (todos os modelos com eSIM) e em quase todos os celulares Android, incluindo Samsung, Google Pixel, OnePlus, Motorola e Xiaomi.

> 💡 **Dica profissional:** Se você tem um iPhone e quer saber **como verificar o eSIM no iPhone**, é exatamente o mesmo código. Nos iPhones, você também pode encontrar o EID em **Settings > General > About** – role até a seção **Digital SIM** ou **Available SIM**.

### Verificação Pelos Ajustes

Se preferir não digitar códigos, ou se `*#06#` não funcionar no seu dispositivo (raro, mas acontece em alguns celulares bloqueados pela operadora), você pode encontrar o EID ou o menu de eSIM pelas configurações do celular.

**No iPhone (iOS):**
- Vá em **Settings > General > About**.
- Role até ver **Digital SIM** ou **Available SIM**.
- Você encontrará seu **EID** listado lá.
- Além disso, você pode ir em **Settings > Cellular** e procurar a opção **Add eSIM** ou **Add Cellular Plan**. Se estiver esmaecida ou ausente, seu iPhone pode ser um modelo da China continental (que não tem eSIM) ou estar bloqueado pela operadora.

**No Samsung (One UI):**
- Vá em **Settings > Connections > SIM Card Manager**.
- Se você vir uma opção como **Add eSIM** ou **Download eSIM**, seu celular tem suporte.
- Para encontrar o EID, vá em **Settings > About Phone > Status Information** – procure por **EID**.

**No Google Pixel e Android puro:**
- Vá em **Settings > Network & Internet > Mobile Network**.
- Procure por **Add Carrier** ou **Download a SIM instead?**.
- Para encontrar o EID: **Settings > About Phone > SIM Status** – o EID aparecerá se estiver presente.

**No OnePlus, Xiaomi, Motorola (Android):**
- O caminho varia um pouco, mas geralmente: **Settings > Network & Internet > Mobile Network > Advanced > Add eSIM**.
- Para verificar no Android, disque `*#06#` – é universal.

### Usando o IMEI para Verificar Compatibilidade

Se você não tem acesso ao celular (por exemplo, está comprando um aparelho usado online), pode usar o número IMEI do celular para verificar o suporte:

1. Encontre o número IMEI – disque `*#06#` no aparelho, ou procure em **Settings > About Phone**.
2. Acesse um **verificador online de compatibilidade de eSIM** (muitos provedores oferecem uma ferramenta gratuita de consulta por IMEI).
3. Insira o IMEI. A ferramenta dirá se aquele modelo específico de dispositivo suporta SIMs digitais.

> Importante: O IMEI sozinho não contém informações de eSIM, mas identifica o modelo exato do seu celular. As ferramentas cruzam o IMEI com bancos de dados dos fabricantes.

### Teste Gratuito

Nada substitui um teste real. Um **[eSIM de teste gratuito da Roami](/free-esim/)** leva 2 minutos para instalar e confirma que seu celular está pronto antes de você gastar qualquer dinheiro em um plano completo.

### Diferenças Entre Modelos Regionais

Mesmo que o modelo do seu celular "supostamente" suporte SIMs digitais, variantes regionais podem tê-los desativados:

| Região/Modelo | Suporte | Por quê? |
| :--- | :--- | :--- |
| **iPhone (China continental)** | ❌ Não | Hardware dual SIM físico – chip digital removido |
| **Samsung S20 FE (operadora dos EUA)** | ❌ Não | Desativado pela operadora para reduzir custos |
| **Google Pixel 4a (Japão)** | ❌ Não | Desativado pela operadora (Docomo/SoftBank) |
| **Samsung Galaxy série A (EUA)** | ⚠️ Varia | Alguns modelos têm, outros não |
| **Xiaomi (ROM da China)** | ❌ Não | Modelos domésticos da China não têm o hardware |
| **Huawei (doméstico da China)** | ❌ Não | Sem serviços Google, sem SIM digital |

**O que fazer:** Sempre verifique o EID usando `*#06#` – este é o teste definitivo. Não presuma que seu celular tem suporte só porque viu um post em fórum dizendo isso.

### E Se Seu Celular Não For Compatível?

Se você passou por todas essas etapas e não encontrou EID nem menu de eSIM, seu celular não pode usar SIMs digitais. Você tem três opções:

- **Use um SIM físico de viagem** – muitos provedores também enviam cartões SIM físicos.
- **Compre um SIM local no seu destino** – ainda funciona em qualquer celular.
- **Atualize para um celular mais novo** – considere um Google Pixel 6a, Samsung Galaxy S21 ou mais novo, ou um iPhone XR ou mais novo (excluindo modelos da China continental).


## Caminho de Ativação por Marca de Celular

| Marca | Caminho para "Add eSIM" | Observações |
|-------------|-----------------|-------|
| **iPhone** | Settings > Cellular > Add eSIM > Scan QR Code | Também funciona via Settings > General > About > Add eSIM |
| **Samsung** | Settings > Connections > SIM Card Manager > Add eSIM | Requer One UI 4.0+ |
| **Google Pixel** | Settings > Network & Internet > Mobile Network > Add Carrier | Caminho do Android puro |
| **OnePlus** | Settings > Wi‑Fi & Network > SIM & Network > Add eSIM | OxygenOS 13+ |
| **Motorola** | Settings > Network & Internet > Mobile Network > Advanced > Carrier > Add eSIM | Android 12+ |
| **Xiaomi (global)** | Settings > Mobile Network > SIM cards > Add eSIM | ROM da China não tem eSIM |
| **Huawei (global)** | Settings > Mobile Network > eSIM > Add eSIM profile | Apenas versões globais |


## Erros Comuns de Ativação de eSIM e Como Corrigi-los

| Erro / Sintoma | Causa Mais Provável | Solução |
|----------------|-------------------|-----|
| **"Cellular Plan Cannot Be Added"** | Celular bloqueado pela operadora, ou código QR já usado (uso único). | Verifique se o celular está desbloqueado: Settings > General > About > Carrier Lock deve dizer "No SIM restrictions". Se estiver desbloqueado, solicite um novo código QR. |
| **Travado em "Activating..."** | Conexão Wi‑Fi caiu, ou servidor da operadora ocupado. | NÃO exclua o perfil. Ative o Airplane Mode por 30 segundos e depois desative. Reinicie o celular se continuar travado. |
| **"Invalid QR Code"** | O código QR expirou ou está danificado. | Solicite um novo código QR ao seu provedor. Tente a entrada manual. |
| **Sem sinal após a conclusão** | Data Roaming não ativado, ou configurações de APN ausentes. | Ative o Data Roaming. Configure o APN manualmente (veja a tabela abaixo). |
| **Perfil aparece mas sem dados** | Linha de dados padrão definida como SIM físico. | Vá em Settings > Cellular > Cellular Data – selecione sua nova linha como linha de dados. |
| **"eSIM Not Supported" no iPhone** | iPhone é da China continental (dual SIM físico) ou mais antigo que XR/SE2. | Verifique o modelo em Settings > General > About. Modelos da China não têm eSIM. |
| **Leitura do código QR não funciona** | Permissões de câmera negadas, ou tela danificada. | Conceda permissões de câmera, ou use o método de entrada manual. |
| **"Activation failed – server unreachable"** | Wi‑Fi bloqueando a conexão (rede corporativa, VPN). | Desative a VPN. Troque para outra rede Wi‑Fi ou use um ponto de acesso móvel. |
| **"Confirmation code required"** | Sua operadora exige um código de verificação de 4‑8 dígitos. | Verifique o código no seu e-mail. Se não encontrar, contate o suporte. |
| **"QR code already used"** | O código QR foi escaneado em outro dispositivo. | Planos de viagem são de uso único – você precisa de um novo código QR do seu provedor. |
| **Demora mais de 15 minutos para conectar** | O celular está com dificuldade de encontrar a rede local. | Ative e desative o Airplane Mode. Selecione uma rede manualmente (Settings > Cellular > [linha] > Network Selection). |
| **"Profile download failed"** | Conexão Wi‑Fi instável. | Aproxime-se do roteador. Tente outra rede Wi‑Fi. Reinicie o processo. |
| **"Activation failed" após a leitura** | O código QR é de outra região ou operadora. | Confirme se o código QR corresponde ao plano que você comprou. Contate o provedor para receber o código correto. |

### Configuração Manual de APN

Se após a configuração você ficar **sem conexão de dados**, configure o APN manualmente:

| Provedor | APN | Usuário | Senha |
|----------|-----|----------|----------|
| **Roami** | internet | (em branco) | (em branco) |
| **Airalo** | globaldata | (em branco) | (em branco) |
| **Holafly** | hola | (em branco) | (em branco) |
| **Nomad** | nbdata | (em branco) | (em branco) |
| **Orange** | orange.fr | (em branco) | (em branco) |
| **SFR** | sl2sfr | (em branco) | (em branco) |
| **T‑Mobile (EUA)** | fast.t-mobile.com | (em branco) | (em branco) |
| **AT&T (EUA)** | nxgen | (em branco) | (em branco) |
| **Verizon (EUA)** | vzwinternet | (em branco) | (em branco) |
| **EE (Reino Unido)** | everywhere | (em branco) | (em branco) |
| **O2 (Reino Unido)** | mobile.o2.co.uk | web | web |
| **Vodafone (Reino Unido)** | internet | (em branco) | (em branco) |
| **Three (Reino Unido)** | three.co.uk | (em branco) | (em branco) |
| **Google Fi** | h2g2 | (em branco) | (em branco) |

**Como configurar o APN:**
- **iPhone:** Settings > Cellular > Cellular Data Network > preencha os campos de APN.
- **Android:** Settings > Connections > Mobile Networks > Access Point Names > crie um novo APN.

Para solução de problemas mais avançada, veja nosso **[Guia de Solução de Problemas Profundo de eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/)** e **[eSIM Dual Não Funciona? 12 Correções para iPhone](/faq/dual-esim-not-working-12-fixes-for-iphone/)** – muitas correções se aplicam a vários dispositivos.


## Erros Comuns de Ativação

Com base nos nossos dados de suporte, estes são os três principais erros que derrubam as pessoas:

### Tentar Ativar Sem Wi-Fi

Esta é a razão nº 1 de falhas de ativação — o perfil só pode ser baixado do servidor SM‑DP+ da operadora pela internet, como explicado em *Dá Para Ativar Sem Wi‑Fi?* acima.

**Como evitar:** Instale seu plano antes de sair de casa, no Wi‑Fi de casa. Se você já estiver viajando, encontre um Wi‑Fi gratuito de aeroporto ou hotel antes de tentar.

### Não Ativar o Data Roaming

Seu perfil foi baixado corretamente, mas você não tem sinal. O problema? O Data Roaming ainda está desligado.

**Como evitar:** Após a instalação, vá em Settings > Cellular > [sua nova linha] e ative o Data Roaming. Isso é necessário para planos de viagem funcionarem.

### Excluir o Perfil no Meio da Ativação

Você vê "Activating..." por alguns minutos, entra em pânico e exclui o perfil. Agora não consegue reescanear o código QR.

**Como evitar:** Tenha paciência. Aguarde até 15 minutos. Se ainda estiver travado, reinicie o celular – não exclua o perfil. Se você o excluir, precisará de um novo código QR do seu provedor.


## Perguntas Frequentes

**Posso usar meu SIM físico e um plano digital ao mesmo tempo?**
Sim! A maioria dos celulares modernos suporta a funcionalidade Dual SIM. Você pode manter seu SIM físico ativo para chamadas e mensagens da sua origem, usando seu plano digital apenas para dados locais. Ambas as linhas ficam ativas simultaneamente (dual standby).

**Configurar um plano digital consome mais bateria?**
Usar um plano digital em si não consome a bateria. No entanto, manter duas linhas ativas (Dual SIM) simultaneamente pode causar um leve consumo extra, já que seu celular procura constantemente dois sinais de rede diferentes. A diferença costuma ser de 2‑5% por dia.

**Quanto tempo leva todo o processo?**
O download e a configuração normalmente levam menos de 2 minutos. No entanto, conectar-se à rede local pela primeira vez às vezes pode levar até 10-15 minutos, dependendo da força do sinal. Se levar mais de 15 minutos, veja a tabela de solução de problemas acima.

**Como encontro meu EID se já tenho um plano instalado?**
No iPhone, vá em **Settings > General > About** e role até a seção **Digital SIM**. No Android, disque `*#06#` – o EID aparecerá junto com os números de IMEI.

**Posso verificar a compatibilidade pelo IMEI antes de comprar um celular usado?**
Sim. Muitas ferramentas online de **verificação de compatibilidade de eSIM** aceitam um número IMEI. Você também pode consultar as especificações oficiais do fabricante para aquele modelo. Isso é especialmente útil ao comprar um celular no eBay ou em marketplaces de usados.

**Posso transferir meu plano do celular antigo para um novo?**
Sim – mas o método depende da sua operadora e dos modelos de celular. Para instruções passo a passo cobrindo ambas as plataformas, veja **[Como Transferir eSIM Entre iPhone e Android](/faq/how-to-transfer-esim-between-iphone-and-android/)**.

**Qual a diferença entre um plano de viagem e um plano de operadora local?**
Um plano de viagem é somente dados, comprado online antes da viagem, e ativa instantaneamente via código QR. Não tem número de telefone. Um plano de operadora local inclui um número de telefone, exige verificação de identidade e é melhor para estadias longas. Veja nosso **[guia de eSIM do Reino Unido](/united-kingdom-esim/)** para uma comparação detalhada.

**E se eu ficar sem dados no meu plano de viagem?**
Você pode recarregar online pelo aplicativo ou site do seu provedor – os novos dados são adicionados automaticamente, sem precisar escanear um novo código QR. Alguns provedores oferecem recarga com um clique.

**Por que meu plano aparece "No Service" após a configuração?**
Na maioria das vezes, o Data Roaming não está ativado, ou seu celular ainda está usando o SIM da sua origem para dados. Verifique ambas as configurações. Certifique-se também de que seu celular está configurado para selecionar a rede automaticamente. Veja a tabela de solução de problemas acima para mais correções.

**Posso usar um plano do Reino Unido em outros países europeus?**
Somente se o seu plano incluir roaming na UE. Planos de viagem frequentemente incluem roaming na UE, enquanto a maioria dos planos locais de operadoras do Reino Unido (EE, Vodafone, Three) cobra cerca de £2–2,50/dia pelo uso na UE — os planos mensais da O2 são a principal exceção, incluindo roaming na UE até um limite de 25GB. Verifique os detalhes do seu plano antes de viajar.

**O que é um código de confirmação e por que preciso dele?**
Um código de confirmação é um código de 4‑8 dígitos exigido por algumas operadoras durante a configuração. Ele adiciona uma camada extra de segurança – mesmo que alguém roube seu código QR, não poderá ativar o perfil sem o código de confirmação. Encontre-o no e-mail do seu provedor.

**E se eu não tiver Wi‑Fi para ativar meu plano?**
Você precisa de Wi‑Fi – é impossível ativar sem conexão com a internet. Use o Wi‑Fi gratuito do aeroporto, um ponto de acesso móvel de um amigo, ou o Wi‑Fi de um café/hotel. Melhor prática: instale antes de sair de casa, no seu próprio Wi‑Fi.

**Posso usar o mesmo perfil no meu celular e no meu tablet?**
Não – cada perfil está vinculado ao EID de um único dispositivo. Você precisa de um plano separado para cada dispositivo. O perfil do seu celular não pode ser usado no seu tablet ou relógio.

**Qual a forma mais barata de testar se isso funciona no meu celular?**
Pegue um **[eSIM de teste gratuito da Roami](/free-esim/)** – leva 2 minutos, não custa nada e confirma que seu celular está pronto antes de você comprar um plano pago.

**Quantos perfis meu celular pode armazenar?**
A maioria dos celulares modernos pode armazenar 5‑8 perfis, mas apenas um ou dois podem estar ativos ao mesmo tempo (dependendo do modelo). O iPhone 13 e posteriores suportam dois ativos. iPhones mais antigos (XR/11/12/SE) suportam um ativo mais um SIM físico.

**Meu celular precisa estar desbloqueado para usar um plano de viagem?**
Sim – se seu celular estiver bloqueado pela operadora, ele rejeitará perfis de outras redes. Verifique Settings > General > About > Carrier Lock – deve dizer "No SIM restrictions". Contate sua operadora para solicitar o desbloqueio.

**O que significa "eSIM activation failed"?**
Significa que o perfil não pôde ser baixado ou instalado corretamente. Causas comuns: sem conexão Wi‑Fi, código QR expirado, problemas no servidor da operadora, ou celular não compatível. Consulte a tabela de solução de problemas acima para correções específicas.

**Posso ativar um plano para o celular de outra pessoa?**
Sim – você pode comprar um plano e encaminhar o código QR para ela. No entanto, ela precisa ter um celular compatível e uma conexão Wi‑Fi estável. O código QR só pode ser escaneado uma vez, então garanta que ela esteja pronta para instalá-lo.


## Conclusão

A tecnologia de SIM digital mudou completamente como nos conectamos às redes móveis – adeus cartões de plástico, clipes de papel e filas em lojas de operadoras. Ao entender o processo – baixar um perfil digital por um servidor seguro – você pode resolver facilmente qualquer contratempo. E antes mesmo de começar, saber **como verificar se meu celular é compatível com eSIM** usando `*#06#` ou suas configurações vai poupar seu tempo e frustração.

**As 3 coisas mais importantes para lembrar:**
1. **Verifique o EID primeiro** – disque `*#06#`. Se não houver EID, pare e compre um SIM físico.
2. **Instale antes de viajar** – você precisa de Wi‑Fi para ativar. O Wi‑Fi de aeroportos pode exigir verificação por SMS.
3. **Ative o Data Roaming** – isso é necessário para planos de viagem funcionarem.

Se você está planejando uma viagem internacional e quer experimentar conectividade instantânea, o **eSIM da Roami** oferece planos de dados perfeitos e de alta velocidade em mais de 190 países. Esqueça as taxas de roaming, baixe seu perfil em segundos e fique conectado no momento em que seu avião pousar.

👉 **Procurando um plano?** Veja [eSIM para os EUA](/united-states-esim/) ou [eSIM para a Europa](/europe-esim/) para colocar a ativação em prática.

👉 **Não sabe se seu celular tem suporte?** Consulte nossa **[lista completa de compatibilidade](/compatibility/)**.

👉 **Pronto para experimentar?** Resgate um [eSIM de teste grátis](/free-esim/) – leva 2 minutos e confirma que tudo funciona.

---

*Baseado na documentação oficial da Apple, nos padrões da GSMA e nas páginas de suporte do Android em setembro de 2026.*
## Fontes

- [GSMA — especificação eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Suporte Apple — Configurar eSIM no iPhone](https://support.apple.com/en-us/HT212780)
- [Suporte Google — Configurar um eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Suporte Google — Android eSIM](https://support.google.com/android/answer/11241215)
