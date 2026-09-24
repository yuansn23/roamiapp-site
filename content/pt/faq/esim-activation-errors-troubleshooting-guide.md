---
title: "eSIM Não Funciona? Corrija Erros de Compatibilidade em 2026"
h1_title: "Como Corrigir o eSIM que Não Funciona: Erros de Compatibilidade em 2026"
description: "Preso com erros de eSIM? Aprenda a corrigir falhas de ativação, problemas de transferência e boot loops no iPhone e Android. Diagnostique seu celular em 2 minutos."
image: "/img/faq/esim-activation-errors.webp"
image-1: "/img/faq/esim-activation-errors-1.jpg"
keywords: ["eSIM não funciona", "eSIM não suportado", "eSIM incompatível iPhone", "não consigo ativar o eSIM", "rede do eSIM indisponível", "eSIM não transfere para novo iPhone", "apaguei o eSIM sem querer", "perfil do eSIM expirado", "QR code do eSIM inválido", "como corrigir eSIM no iPhone", "erro de transferência de eSIM", "eSIM sem serviço"]
date: 2026-09-17T00:00:00Z
lastmod: 2026-09-17T00:00:00Z
tags: ["eSIM", "Troubleshooting", "Activation Errors", "iPhone", "Android"]
toc: true

# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

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


> **Nota do Editor:** Grande parte dos casos de "meu eSIM não funciona" acaba sendo um problema do celular, não do plano. Este guia responde à pergunta que você deve fazer antes de qualquer outra: *meu celular é sequer capaz de usar um eSIM?* Vamos guiá-lo pela verificação de hardware de 2 minutos, pelas exceções dos modelos da China/Hong Kong e pelos bloqueios de operadora — para que você não perca uma hora em etapas de ativação que nunca funcionarão no seu dispositivo.

> **Procurando a correção de um código de erro?** Se seu celular passou na verificação de hardware abaixo, mas você está diante de uma mensagem específica ("Activation failed", "No Service", "QR invalid", erro de restauração 4013/4014), esse é outro problema. Vá para o nosso [Guia de Troubleshooting Profundo de eSIM](/faq/esim-deep-troubleshooting-guide-2026/) para a referência erro por erro.

## Meu Celular é Sequer Capaz de Usar eSIM?

Antes de abrir os Ajustes, escanear um único código QR ou contatar o suporte, confirme que seu celular realmente tem o hardware de SIM embutido necessário. Esta única verificação elimina de imediato cerca de metade de todos os casos de "eSIM não funciona".

### A Verificação Universal do EID

Abra o discador do seu celular e digite:

> **`*#06#`**

- Se aparecer uma tela com um **EID de 32 dígitos** (eUICC Identifier), seu celular tem o chip embutido necessário para ativação de SIM digital. ✅
- Se a tela mostrar apenas números de **IMEI** e nenhum EID, o hardware não está lá. ❌

**O que fazer se nenhum EID aparecer:** Pare por aqui. Nenhuma atualização de software, hack ou método "forçado" pode adicionar o chip que falta — é uma ausência física de hardware. Use um SIM físico, ou veja a Correção #4 para celulares que *parecem* que deveriam suportar eSIM, mas não suportam.

### EID vs IMEI vs ICCID Explicados

| Identificador | O que é | O que ele te diz |
| :--- | :--- | :--- |
| **IMEI** | International Mobile Equipment Identity (15 dígitos) | Identifica o modelo do seu celular — todo celular tem um |
| **EID** | eUICC Identifier (32 dígitos) | Confirma que o chip de SIM embutido está presente — apenas celulares compatíveis com eSIM têm um |
| **ICCID** | Integrated Circuit Card Identifier (19–20 dígitos) | Identifica um perfil de eSIM específico depois de instalado |

> **Insight principal:** EID = hardware presente. Se você vê um EID, seu celular é fisicamente capaz de usar eSIM. Se não vê, nada do que instalar mudará isso.

### Onde Encontrar Cada Número

Todos os três números estão à vista quando você conhece o menu. Aqui está o caminho mais curto para cada um:

| Identificador | Jeito Mais Rápido | Local Alternativo |
| :--- | :--- | :--- |
| **IMEI (15 dígitos)** | Disque `*#06#` — é o primeiro número mostrado | iPhone: **Settings > General > About**. Android: **Settings > About phone** |
| **EID (32 dígitos)** | Disque `*#06#` e role — é o número longo que começa com **8904** | iPhone: **Settings > General > About > EID**. Samsung: **Settings > About phone > Status** |
| **ICCID (19–20 dígitos)** | Só aparece depois que um perfil é instalado | iPhone: **Settings > General > About**. Android: **Settings > About phone > SIM card status** |

> **Curiosidade útil:** todo EID começa com **"8904"** — esse prefixo o marca como um identificador eUICC. Se o número longo na tela começar com outra coisa, você está lendo o valor errado.

### O Teste do Botão Add eSIM

Se o `*#06#` mostra um EID, mas você ainda vê "eSIM não suportado", abra **Settings > Cellular** e procure por **"Add eSIM"** ou **"Add Cellular Plan"**. Se a opção está lá, mas falha ao escanear, você provavelmente está lidando com um **bloqueio de operadora** ou uma **restrição de região** — ambos cobertos abaixo.

### O Método de Busca nos Ajustes

Sem discador à mão (alguns tablets e dobráveis o escondem), ou o `*#06#` deu uma tela confusa? A barra de busca do próprio celular é a segunda verificação mais rápida.

- **iPhone:** Abra os **Ajustes (Settings)**, deslize para baixo do topo da lista para revelar a caixa de busca e digite **"eSIM"**. Um resultado de **"Add eSIM"** ou **"Add Cellular Plan"** significa que o recurso está ativo.
- **Samsung:** Abra os **Ajustes (Settings)**, toque no **ícone de lupa** no topo e digite **"eSIM"**. Se **"SIM Card Manager"** (ou "Add mobile plan") aparecer, sua variante tem o chip.
- **Pixel:** Abra **Settings > Network & internet > SIMs**. Se você vê **"Download a SIM instead?"**, está tudo bem. Uma tela que lista apenas seu SIM físico — sem opção de download — significa que não há chip eUICC.

> **Sem resultado de busca = sem hardware.** Se um celular vendido depois de aproximadamente 2018 não retorna nada para "eSIM" na busca dos Ajustes, você quase certamente tem uma variante de região ou econômica que veio sem o chip.

### A Consulta pelo Número de Modelo

Comprando usado, ou verificando um celular que você não consegue ligar? O número de modelo resolve em segundos.

- **iPhone:** **Settings > General > About > Model Number**, depois toque no número para alterná-lo para o **identificador com prefixo A** (ex.: **A2111**). As letras antes de **/A** no número de peça codificam a região de venda — o mapa completo de sufixos está na Seção 2.
- **Samsung:** **Settings > About phone > Model number** (ex.: **SM-S921U1**). O último caractere é a pista: **U** = operadora dos EUA, **U1** = desbloqueado nos EUA, **B** = Europa/global, **0** = China/Hong Kong (Snapdragon).
- **Pixel:** **Settings > About phone > Model**. As strings de modelo do Pixel variam por região e operadora — o Japão e algumas variantes de operadoras dos EUA restringem o eSIM, então confira o código específico ou disque `*#06#`.

> **Regra prática:** se o número de modelo termina com um sufixo de China/região (ou um sufixo de operadora dos EUA em um Samsung), verifique com o `*#06#` antes de presumir que o eSIM funciona. Número de modelo mais EID juntos dão uma resposta 100% confiável.

### Por Que um Celular Pode Mostrar EID e Ainda Recusar o eSIM

| Cenário | EID Presente? | eSIM Funciona? | Por quê? |
| :--- | :--- | :--- | :--- |
| iPhone XS/XR e mais recentes (global) | ✅ Sim | ✅ Sim | Suporte completo a perfis de SIM digital |
| iPhone XS/XR (modelo China) | ❌ Não | ❌ Não | Hardware removido para dual SIM físico |
| Samsung S20 FE (operadora dos EUA) | ✅ Sim | ❌ Não | Operadora desativou o recurso em software |
| Google Pixel 4a (Japão) | ✅ Sim | ❌ Não | Operadora bloqueou a funcionalidade |
| iPhone com bloqueio de operadora (AT&T/T-Mobile) | ✅ Sim | ❌ Não (para outras operadoras) | Bloqueio de rede impede perfis de outros provedores |
| iPhone desbloqueado (qualquer região) | ✅ Sim | ✅ Sim | Suporte completo |


## eSIM Não Suportado ou Incompatível no iPhone

Se você vê **"eSIM não suportado"**, **"este eSIM não é compatível com este iPhone"** ou simplesmente **"eSIM não compatível iPhone"**, a causa quase sempre é uma de cinco coisas — e todas se referem ao seu *dispositivo*, não ao plano.

### Seu Modelo de iPhone é Anterior ao Hardware de eSIM

Apenas os iPhones a partir do **XR, XS, XS Max (2018) e mais recentes** têm o chip embutido. O iPhone 8, 8 Plus e iPhone X não têm, então retornam **"eSIM não suportado"** não importa o que você tente. O chip eUICC simplesmente não está presente nessas placas — é uma limitação de hardware, não um problema de ajustes.

**Verificação rápida:** Disque `*#06#`. Um EID de 32 dígitos significa que está tudo bem; apenas IMEI significa que não.

**O que fazer:** Use um SIM físico, ou atualize para um iPhone XR ou mais recente. A lista oficial está em [Suporte Apple — Configurar eSIM no iPhone](https://support.apple.com/en-us/118670).

### Seu iPhone é um Modelo da China Continental

Os iPhones vendidos na China continental vêm com **dois slots de SIM físico e nenhum hardware de eSIM**. As regulamentações chinesas empurram os smartphones domésticos para o dual SIM físico, então a Apple removeu o chip embutido nessas unidades. Mesmo que a opção "Add Cellular Plan" apareça, ela não se completará — essa é a razão mais comum de "eSIM não compatível com este iPhone" entre compradores que adquiriram o aparelho na China ou por meio de certos revendedores.

**Como identificar:** **Settings > General > About > Model Number**. Se terminar em **"CH/A"**, é um modelo da China continental. (Tabela completa de sufixos na Seção 2 abaixo.)

**O que fazer:** Não há como ativar o eSIM em um dispositivo CH/A. Use um SIM de viagem físico, ou venda o celular e compre uma versão global.

### Seu iPhone Tem Bloqueio de Operadora

Algumas operadoras — especialmente as dos EUA — bloqueiam os iPhones em sua própria rede. Tentar ativar um perfil de um provedor diferente (como um eSIM de viagem) retorna então "eSIM não suportado" ou uma mensagem de "operadora não suporta". Note que algumas operadoras bloqueiam apenas o slot de SIM físico, deixando o slot do eSIM aberto, mas muitas bloqueiam ambos.

**Como verificar:** **Settings > General > About > Carrier Lock**. Deve dizer **"No SIM restrictions"**. Se disser "SIM locked", você precisa de um desbloqueio. Veja a Seção 3 para o passo a passo completo do bloqueio de operadora.

### Sua Versão do iOS Está Desatualizada

O suporte a SIM digital melhorou muito no iOS 16 e posteriores. No iOS 12 ou 13, alguns perfis de operadoras modernas simplesmente não instalam.

**Como verificar:** **Settings > General > Software Update**.

**O que fazer:** Atualize para o iOS mais recente, apague qualquer perfil meio instalado e reescaneie o código QR.

### Este iPhone Não Suporta eSIM em um iPhone 14

Um iPhone 14 (versão dos EUA) deve sempre suportar eSIM — o modelo dos EUA não tem bandeja de SIM física alguma. Se ele retornar esse erro mesmo assim, você está diante de uma rara **falha de hardware do eUICC**. Contate o Suporte Apple para um diagnóstico de hardware em vez de perseguir ajustes.

Para a lista completa de iPhone modelo por modelo, veja nosso [guia de compatibilidade de eSIM do iPhone](/faq/iphone-11-esim-compatible/).

Donos de Samsung devem consultar o [guia de eSIM do Samsung Galaxy](/faq/samsung-s20-esim-compatible/), e donos de Pixel o [guia de eSIM do Google Pixel](/faq/google-pixel-6-esim-compatible/).


### eSIM Não Suportado: Hardware, Software ou Operadora

Todo caso de "eSIM não suportado" — em qualquer celular, qualquer operadora — se enquadra em um de três grupos. Nomear o grupo te diz instantaneamente se o problema é corrigível.

| Grupo | Como se parece | Corrigível? | Sua Ação |
| :--- | :--- | :--- | :--- |
| **Hardware** | Sem EID no `*#06#`; iPhone anterior a 2018; modelo China (CH/A); Android econômico sem eUICC | ❌ Não | SIM físico, ou troque o celular |
| **Software** | EID presente, mas o recurso está oculto ou o sistema é antigo (Samsung S20 FE desativado pela operadora, iOS desatualizado) | ✅ Geralmente | Atualize o sistema, ou remova a restrição da operadora |
| **Operadora** | EID presente, menu visível, mas a ativação do plano de outro provedor falha | ✅ Sim | Desbloqueie o dispositivo (Seção 3) e reescaneie |

**O teste de direcionamento de 30 segundos:** disque `*#06#`.
- **Sem EID** → hardware. Pare por aqui — nada do que instalar mudará isso.
- **EID presente, mas o fluxo "Add eSIM" falha** → software ou operadora. Ambos são corrigíveis, então continue lendo.

Esse único resultado te direciona à correção correta em cerca de 9 de cada 10 relatos de "não suportado" que vemos na Roami.


## O Guia dos Modelos da China, Hong Kong e Macau

Onde seu celular foi vendido determina qual hardware ele tem. Essa é a forma mais rápida de confirmar ou eliminar uma situação regional de sem-eSIM.

### Referência Rápida dos Modelos da China

| Final do Número de Modelo | Região | Suporte a eSIM |
| :--- | :--- | :--- |
| **CH/A** | China continental | ❌ Não (dual SIM físico) |
| **HK/A** | Hong Kong | ⚠️ Varia (alguns modelos suportam SIM físico + digital) |
| **LL/A** | EUA | ✅ Sim |
| **ZA/A** | Canadá | ✅ Sim |
| **J/A** | Japão | ✅ Sim (exceto alguns modelos de operadoras) |
| **B/A** | Reino Unido/Europa | ✅ Sim |
| **X/A** | Austrália/Nova Zelândia | ✅ Sim |

### Status do eSIM nos iPhones da China Continental

- **Todos os iPhones vendidos na China continental** (exceto a série iPhone 16) têm dual SIM físico e nenhum eSIM.
- **Celulares Android chineses** — Xiaomi, Oppo, Vivo, Huawei — vendidos internamente também geralmente não têm o chip de eSIM.
- **Se você levar um celular internacional para a China:** ele funcionará com eSIMs de viagem internacionais, mas as operadoras chinesas locais não oferecem eSIM para turistas, então você ainda precisará de um plano de viagem de um provedor como a Roami.

### Status do eSIM nos iPhones de Hong Kong

- **Modelos de iPhone:** os iPhones de Hong Kong geralmente suportam **eSIM + SIM físico** (um de cada) ou dual SIM físico, dependendo do modelo exato. Verifique o sufixo do seu modelo.
- **Operadoras:** algumas operadoras de Hong Kong (CMHK, 1010, SmarTone) oferecem eSIM para clientes pós-pagos, mas o eSIM pré-pago é raro.
- **Viajantes:** um eSIM de viagem internacional é mais simples e confiável do que tentar obter um eSIM local de Hong Kong.

### Status do eSIM nos iPhones de Macau

- **Semelhante a Hong Kong:** a maioria dos iPhones de Macau é importada de Hong Kong e suporta eSIM + SIM físico.
- **CTM** (a principal operadora de Macau) oferece eSIM para clientes pós-pagos, mas não para turistas.

### Por Que os Modelos Chineses Abandonam o eSIM

Não é uma medida de corte de custos da Apple ou das marcas Android — é regulamentação. A China continental exige que os celulares vendidos lá sejam certificados para dual SIM físico, e um perfil de eSIM regravável não se encaixa nesse marco doméstico. O resultado prático:

- **A Apple** envia os iPhones da China continental com **dois slots de nano-SIM físico** e nenhum chip eUICC.
- **Xiaomi, Oppo, Vivo, Honor e Huawei** removem o eSIM de suas versões domésticas para a China, mesmo quando a versão global do mesmo celular o tem.
- **Um celular da China levado ao exterior ainda não consegue ter o eSIM de volta** — é uma ausência de hardware, não um bloqueio de software. O inverso também vale: um celular internacional entrando na China funciona com eSIMs de viagem, mas as três grandes operadoras chinesas (China Mobile, China Unicom, China Telecom) não vendem eSIM para turistas.

**A correção:** se você comprou o celular na China continental, conte com um SIM de viagem físico — ou compre um celular de modelo global. Não há desbloqueio, jailbreak ou app que adicione o chip que falta.

### Identificando Seu Modelo pelo Número A

O sufixo do número de peça (CH/A, LL/A e assim por diante) é o filtro rápido, mas o **número A** é a identificação precisa. Tome o iPhone 11 como o padrão que toda geração segue:

| Modelo iPhone 11 | Região | eSIM? |
| :--- | :--- | :--- |
| **A2111** | Estados Unidos | ✅ Sim |
| **A2221** | China continental | ❌ Não (dual SIM físico) |
| **A2223** | Hong Kong / Macau | ✅ Sim (eSIM + físico) |

**Como usar:** encontre seu número A (**Settings > General > About > Model Number**, depois toque no número para revelar o código com prefixo A) e compare-o com a lista de modelos da Apple. Se um vendedor anunciou um "iPhone eSIM global desbloqueado", mas o número A é um código da China, o anúncio estava errado — desista ou conte com um SIM físico.


## Bloqueio de Operadora e Como Removê-lo

O bloqueio de operadora é a segunda razão mais comum de um celular perfeitamente capaz recusar um eSIM. É uma restrição de software que sua operadora coloca no dispositivo, não um limite de hardware.

### O Que um Bloqueio de Operadora Faz

Quando um celular está "SIM locked", ele só aceita SIMs e perfis de eSIM da operadora que o vendeu. Tentar adicionar um eSIM de viagem de outro provedor aciona "eSIM não suportado" ou "SIM não suportado". O chip embutido está presente e funcionando — a operadora está apenas bloqueando o acesso a ele.

### Como Verificar o Status do Seu Bloqueio

1. No iPhone: **Settings > General > About > Carrier Lock**. Deve dizer **"No SIM restrictions"**.
2. No Android (Samsung): **Settings > About phone > Status** e procure pelo campo de bloqueio de SIM.
3. No Android (Pixel): **Settings > About phone > SIM status**.

### Políticas de Desbloqueio das Operadoras dos EUA

| Operadora | Requisito de Desbloqueio |
| :--- | :--- |
| **AT&T** | Aparelho totalmente quitado e ativo por 60 dias antes do desbloqueio |
| **T-Mobile** | Aparelho quitado e ativo por 40 dias; solicite pelo app da T-Mobile |
| **Verizon** | A maioria dos celulares se desbloqueia automaticamente 60 dias após a compra |

### Como Desbloquear Seu Dispositivo

1. **Solicite o desbloqueio à sua operadora** — geralmente é grátis assim que o celular está quitado, e a maioria das operadoras dos EUA permite solicitar pelo app ou por um formulário na web.
2. **Aguarde a confirmação** — a operadora envia o desbloqueio; você pode precisar reiniciar o celular.
3. **Verifique** — confira novamente o campo Carrier Lock até que diga "No SIM restrictions".
4. **Depois, ative** — uma vez desbloqueado, reescaneie o código QR do seu eSIM de viagem.

> **Nota:** um bloqueio de operadora é uma restrição no nível do celular, não do plano. Desbloquear seu dispositivo não cancela seu contrato — apenas libera o aparelho para usar SIMs e eSIMs de outros provedores.

### Mais Operadoras dos EUA e Políticas de Desbloqueio de MVNOs

As três grandes não são as únicas com que as pessoas se deparam. Celulares pré-pagos e de MVNOs geralmente ficam bloqueados por mais tempo, e esse pode ser o motivo escondido de um eSIM de viagem "com ótimo preço" não instalar.

| Operadora | Requisito de Desbloqueio |
| :--- | :--- |
| **Cricket Wireless** | 6 meses de serviço pago (a menos que comprado a preço cheio) |
| **Metro by T-Mobile** | 180 dias de serviço pago |
| **Boost Mobile** | 12 meses de serviço pago |
| **Spectrum Mobile** | 60 dias |
| **Xfinity Mobile** | 60 dias de serviço ativo |
| **US Cellular** | 120 dias |
| **Visible (pré-pago da Verizon)** | 60 dias de serviço pago |

### O Que Você Precisa para Solicitar um Desbloqueio

Os desbloqueios são grátis assim que você está elegível, mas a solicitação exige algumas coisas prontas:

1. **Seu IMEI** — disque `*#06#` e anote o número de 15 dígitos (não o EID).
2. **Seu número de conta e PIN/senha da conta** — encontre-os no app da sua operadora ou em uma conta recente.
3. **O celular totalmente quitado** — operadoras não desbloqueiam um dispositivo com saldo de parcelamento em aberto.
4. **Elegibilidade cumprida** — cada operadora tem um prazo mínimo de dias ativos (veja as tabelas acima).

**Onde solicitar:** AT&T e T-Mobile têm portais de desbloqueio online e formulários no app; a Verizon desbloqueia automaticamente a maioria dos celulares após 60 dias, sem necessidade de solicitação. Para MVNOs (Cricket, Metro, Boost), use o app delas ou ligue diretamente para o suporte.

**Sobre serviços de "desbloqueio instantâneo" de terceiros:** são uma aposta. Muitos usam ferramentas vazadas de operadoras que fazem o celular ser bloqueado novamente, e alguns são golpes puros. Se sua operadora disser que você ainda não está elegível, espere — não pague US$ 20 a um estranho para fazer isso "por" você.


### Os Três Bloqueios Diferentes

As pessoas dizem "meu celular está bloqueado" e querem dizer três coisas completamente diferentes. Cada uma precisa de uma correção diferente, então vale separá-las.

| Tipo de Bloqueio | O que é | Onde você o vê | Correção |
| :--- | :--- | :--- | :--- |
| **Bloqueio de celular (bloqueio de ativação)** | Antifurto: iCloud Activation Lock (iPhone) ou Google FRP (Android), vinculado à conta do proprietário anterior | "Activation Lock" / "Este iPhone está vinculado a um Apple ID" na configuração, ou um aviso de conta Google no Android | Apenas o proprietário original pode removê-lo — nunca compre um celular que ainda o mostra |
| **Bloqueio de região** | Uma diferença de hardware de onde o celular foi vendido (modelos da China não têm o chip eUICC) | Sem EID no `*#06#`; número de modelo termina em CH/A | Não pode ser removido — use um SIM físico ou outro celular |
| **Bloqueio de operadora** | Uma restrição de software da sua operadora que limita o celular à rede dela | **Settings > General > About > Carrier Lock** mostra "SIM locked" | Solicite o desbloqueio à operadora (Seção 3) |

**A desambiguação rápida:**
- Vendo um **aviso de Apple ID ou conta Google** = bloqueio de celular/ativação (um problema de proprietário).
- **Nenhum EID de jeito nenhum** = bloqueio de região (um problema de hardware).
- **EID presente + "SIM locked"** = bloqueio de operadora (corrigível, grátis assim que elegível).

A maioria das queixas de "eSIM não funciona" que sobrevivem à verificação de 2 minutos são do tipo bloqueio de operadora — e essa quase sempre é resolvível.


## Meu Celular Não Suporta eSIM, Mas Deveria

Alguns dispositivos são anunciados com eSIM, porém variantes regionais ou de operadoras específicas silenciosamente removem o recurso. Estes são os culpados de sempre:

- **Samsung Galaxy S20 FE** – as versões bloqueadas de operadoras dos EUA têm o recurso desativado em software para reduzir custos, embora o modelo global o suporte.
- **Google Pixel 4a (versões do Japão)** – Docomo e SoftBank desativam o eSIM em suas unidades devido a acordos locais com operadoras.
- **Série Xiaomi Redmi Note** – nenhum tem o chip eUICC, apesar dos rumores online. A Xiaomi reserva o eSIM para seus topos de linha.
- **iPhone 8 / 8 Plus / X** – hardware pré-eUICC; a Apple só adicionou o chip a partir da geração XS/XR.
- **Série Samsung Galaxy A** – apenas modelos selecionados (A54, A53) têm o chip; a maioria da série A não tem.

### Celulares que Parecem Compatíveis com eSIM, Mas Não São

| Modelo de Celular | Suporte a eSIM | Por quê? |
| :--- | :--- | :--- |
| **iPhone 8 / 8 Plus / X** | ❌ Não | Hardware pré-eUICC |
| **iPhone XS/XR (China)** | ❌ Não | Hardware de dual SIM físico |
| **Samsung Galaxy S20 FE (operadora dos EUA)** | ❌ Não | Desativado pela operadora |
| **Samsung Galaxy A13 / A23** | ❌ Não | Modelo de entrada, sem eUICC |
| **Google Pixel 4a (Japão)** | ❌ Não | Desativado pela operadora (Docomo/SoftBank) |
| **Google Pixel 3 (alguns modelos)** | ⚠️ Varia | Verifique a região; alguns têm, outros não |
| **Série Xiaomi Redmi Note** | ❌ Não | Sem hardware eUICC |
| **Xiaomi 12/13 (China)** | ❌ Não | Versões domésticas da China não têm o hardware |
| **OnePlus Nord (versão China)** | ❌ Não | Região China não tem o hardware |
| **Huawei (todos os domésticos da China)** | ❌ Não | Sem serviços Google, sem hardware de eSIM |
| **Série Motorola G (a maioria)** | ❌ Não | Modelos econômicos sem eUICC |

**O que fazer:** Antes de comprar qualquer celular, disque `*#06#` nele (se tiver em mãos) para confirmar o EID, ou verifique o IMEI em um verificador online de compatibilidade de eSIM. A **[lista completa de celulares compatíveis com eSIM (2026)](/compatibility/)** é seu melhor recurso para verificar qualquer modelo.


## Compatibilidade de eSIM no Android por Marca

Se você está no Android, a maior variável não é o sistema — é se *sua variante específica* veio com o chip. Aqui está o quadro modelo por modelo.

### Compatibilidade de eSIM do Samsung Galaxy

| Modelo | Suporte a eSIM | Observações |
| :--- | :--- | :--- |
| **Galaxy S20 / S21 / S22 / S23 / S24** | ✅ Sim | Todas as variantes globais |
| **Galaxy S20 FE** | ❌ Não (operadora dos EUA) / ✅ Sim (global) | Verifique o número de modelo |
| **Galaxy A54 / A53** | ✅ Sim | Apenas A-series selecionados |
| **Galaxy A13 / A23 / A33** | ❌ Não | Modelos econômicos |
| **Galaxy Z Fold / Flip** | ✅ Sim | Todos os modelos |
| **Galaxy Note 20** | ✅ Sim | Todos os modelos |

**Como verificar no Samsung:** Disque `*#06#` e procure por um EID, ou abra **Settings > Connections > SIM Card Manager** e procure por "Add eSIM" / "Add mobile plan". Se nenhum estiver presente, sua variante não tem o recurso. Para mais, veja nosso [guia de compatibilidade de eSIM da Samsung](/faq/samsung-s20-esim-compatible/) e o [Suporte Samsung](https://www.samsung.com/us/support/).

### Compatibilidade de eSIM do Google Pixel

| Modelo | Suporte a eSIM | Observações |
| :--- | :--- | :--- |
| **Pixel 3 / 3 XL** | ✅ Sim | Primeiro Pixel com o recurso |
| **Pixel 3a / 3a XL** | ✅ Sim | – |
| **Pixel 4 / 4 XL** | ✅ Sim | – |
| **Pixel 4a** | ⚠️ Varia | Versões de operadoras do Japão = NÃO |
| **Pixel 5 / 5a** | ✅ Sim | – |
| **Pixel 6 / 6 Pro / 6a** | ✅ Sim | – |
| **Pixel 7 / 7 Pro / 7a** | ✅ Sim | – |
| **Pixel 8 / 8 Pro** | ✅ Sim | – |

**Como verificar no Pixel:** Disque `*#06#` para o EID, ou abra **Settings > Network & Internet > SIMs** e procure por "Download a SIM instead?". Se estiver ausente, a variante está bloqueada ou não tem o chip. Para mais, veja nosso [guia de compatibilidade de eSIM do Pixel](/faq/google-pixel-6-esim-compatible/) e a página [Suporte Google — eSIM no Pixel](https://support.google.com/pixelphone/answer/7086887).

### Compatibilidade de eSIM do OnePlus

A OnePlus só adicionou eSIM a partir do **OnePlus 12**. O OnePlus 11, 10, 9 e a série Nord não têm o hardware.

| Modelo | Suporte a eSIM |
| :--- | :--- |
| **OnePlus 12** | ✅ Sim |
| **OnePlus 11** | ❌ Não |
| **OnePlus 10** | ❌ Não |
| **OnePlus 9** | ❌ Não |
| **Série OnePlus Nord** | ❌ Não (exceto algumas variantes da UE) |

### Xiaomi, Huawei, Motorola e Outras Marcas de eSIM

- **Xiaomi** – modelos topo de linha (Xiaomi 12/13 versões globais) podem suportar eSIM, mas as unidades domésticas da China não. A linha Redmi Note não tem eUICC algum.
- **Huawei** – o suporte é limitado a poucos modelos (P40, Mate 40 e mais recentes); muitos celulares pós-2020 não têm eSIM devido às sanções dos EUA. Verifique **Settings > Mobile Network > eSIM** — se a opção estiver ausente, não é suportado.
- **Motorola** – a maioria dos modelos econômicos da série G não tem o chip; a linha Moto G Power e Edge varia por região.

O teste universal para todos esses é o mesmo: disque `*#06#` e procure pelo EID.


## Verificação de Capacidade de eSIM: Android vs iPhone

A mesma verificação de 2 minutos, dois menus diferentes. Passe esta tabela para um amigo na outra plataforma.

| Verificação | iPhone | Android (Samsung) | Android (Pixel) |
| :--- | :--- | :--- | :--- |
| **EID** | Disque `*#06#` | Disque `*#06#` | Disque `*#06#` |
| **Menu Add eSIM** | **Settings > Cellular > Add eSIM** | **Settings > Connections > SIM Card Manager > Add eSIM** | **Settings > Network & internet > SIMs > Download a SIM instead?** |
| **Número de modelo** | **Settings > General > About > Model Number** | **Settings > About phone > Model number** | **Settings > About phone > Model** |
| **Status do bloqueio** | **Settings > General > About > Carrier Lock** | **Settings > About phone > Status** | **Settings > About phone > SIM status** |

**A única diferença que importa:** no iPhone, o suporte a eSIM é tudo-ou-nada por geração e região — fácil de prever. No Android, é por variante, então dois celulares Galaxy ou Pixel "iguais" podem se comportar de forma diferente. Na dúvida no Android, confie no EID do `*#06#` mais que na ficha técnica.


## Seu Celular Suporta eSIM, Mas a Ativação Falha

Se seu celular passou na verificação de hardware acima e você ainda vê uma mensagem de erro específica, o problema não é mais de compatibilidade — é de ativação ou de rede. Esses têm sua própria referência dedicada:

- **"Activation failed", "No Service", "QR invalid", "Cellular Plan Cannot Be Added", erro de restauração 4013/4014 e todo outro erro na tela** → veja o [Guia de Troubleshooting Profundo de eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/), que mapeia cada mensagem a uma correção.
- **Ajustes de APN e a tabela completa de APNs por provedor** → a referência canônica de APN também está no [Guia de Troubleshooting Profundo de eSIM 2026](/faq/esim-deep-troubleshooting-guide-2026/).
- **Ativação passo a passo (QR / manual / app da operadora)** → veja [Como Ativar um eSIM](/faq/how-to-activate-an-esim/).
- **Mover um perfil para um novo celular** → veja [Como Transferir eSIM entre iPhone e Android](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **Configuração de iPad e Apple Watch** → veja o [guia de eSIM para iPad e Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).


## Perguntas Frequentes

**Por que meu iPhone XR diz "eSIM não suportado" mesmo que deveria funcionar?**
Se seu número de modelo termina em CH/A, é uma unidade da China continental sem chip de eSIM. Caso contrário, verifique o status do bloqueio de operadora — um XR bloqueado rejeitará perfis de outros provedores.

**Posso forçar o eSIM em um iPhone 7?**
Não. O iPhone 7 (e 6s, 8 e X) é anterior ao chip eUICC por completo. Nenhum hack de software pode adicionar hardware que não existe.

**Qual a diferença entre EID e IMEI?**
O IMEI (15 dígitos) identifica o modelo do seu celular — todo celular tem um. O EID (32 dígitos) identifica o chip de SIM embutido — apenas celulares compatíveis com eSIM têm um. Se o `*#06#` não mostra EID, seu celular não pode usar eSIM.

**O que significa "EID não encontrado" quando disco `*#06#`?**
Significa que seu celular não tem o chip de hardware eUICC necessário para perfis de SIM digital. É uma limitação de hardware, não algo que uma atualização de software possa corrigir.

**Meu celular não suporta eSIM — ainda posso usar um eSIM de viagem?**
Não. Você precisa do chip embutido, então um SIM físico é sua única opção. Muitos provedores (incluindo a Roami) também vendem cartões SIM físicos.

**Como sei se meu Samsung Galaxy tem eSIM?**
Disque `*#06#` — se um EID aparecer, é suportado. Você também pode verificar em Settings > Connections > SIM Card Manager se há uma opção "Add eSIM". Algumas variantes de operadoras dos EUA e da série A o escondem.

**O OnePlus 11 suporta eSIM?**
Não. A OnePlus adicionou eSIM a partir do OnePlus 12. O 11, 10, 9 e a série Nord não têm o hardware.

**Como verifico se meu iPhone tem bloqueio de operadora?**
Settings > General > About > Carrier Lock. "No SIM restrictions" significa desbloqueado. Qualquer outra coisa significa bloqueado naquela operadora.

**Quais modelos de iPad suportam eSIM?**
iPad Pro (3ª geração e mais recentes), iPad Air (3ª geração e mais recentes), iPad (10ª geração e mais recentes) e iPad mini (6ª geração e mais recentes) — apenas modelos celulares. iPads somente Wi-Fi não têm hardware de eSIM.

**Onde encontro uma lista de celulares compatíveis com eSIM?**
A [lista completa de celulares compatíveis com eSIM (2026)](/compatibility/) cobre iPhone, Samsung, Pixel, OnePlus, Motorola, Xiaomi e mais.

**Qual a diferença entre bloqueio de celular e bloqueio de operadora?**
O bloqueio de celular (ativação) é antifurto — iCloud no iPhone, Google FRP no Android — e apenas o proprietário original pode removê-lo. O bloqueio de operadora é uma restrição de rede que sua operadora remove gratuitamente assim que o celular está quitado e elegível.

**Por que os celulares chineses não têm eSIM?**
A China continental exige que os celulares domésticos sejam certificados para dual SIM físico, então a Apple e as marcas Android enviam as unidades da China com dois slots de nano-SIM e nenhum chip eUICC. É hardware — não pode ser ativado depois.

**Posso adicionar eSIM a um celular que não tem EID?**
Não. O chip eUICC é soldado na placa-mãe. Não há adaptador, app, jailbreak ou atualização de software que adicione hardware que nunca foi instalado.

**Uma restauração de fábrica corrige "eSIM não suportado"?**
Não. A restauração não muda o hardware nem remove um bloqueio de operadora. Ela pode, porém, limpar um perfil corrompido meio instalado, então vale tentar para falhas de software — depois de fazer backup.

**Para que serve o EID quando um provedor o pede?**
O EID permite que seu provedor vincule um perfil de eSIM específico ao chip do seu celular antes de você escanear. É assim que eles sabem que o plano se destina ao seu exato dispositivo — pense nele como o "endereço" do eSIM.

**Como sei se meu celular está desbloqueado sem inserir um SIM?**
iPhone: Settings > General > About > Carrier Lock — "No SIM restrictions" significa desbloqueado. Android: Settings > About phone > Status (ou SIM status) e procure pela redação "SIM locked" ou "SIM not locked".

👉 **Confirmou que seu celular é capaz?** Pegue um [eSIM para os EUA](/united-states-esim/) ou [eSIM para o Japão](/japan-esim/) para se conectar.


## Teste Sua Compatibilidade com um eSIM Grátis

A forma mais rápida de confirmar que seu celular realmente pode usar eSIM é instalar um **eSIM de teste grátis**. Não custa nada, leva 2 minutos, e se instalar e conectar, seu hardware está pronto.

👉 [**Resgate seu eSIM grátis da Roami agora**](/free-esim/)

---

*Se seu dispositivo ou erro específico não está coberto aqui, contate-nos e ajudaremos você a confirmar se seu celular é compatível com eSIM.*
## Fontes

- [GSMA — especificação eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Suporte Apple — Configurar eSIM no iPhone](https://support.apple.com/en-us/HT212780)
- [Suporte Google — Configurar um eSIM](https://support.google.com/pixelphone/answer/14853135)
- [Suporte Google — eSIM no Android](https://support.google.com/android/answer/11241215)
