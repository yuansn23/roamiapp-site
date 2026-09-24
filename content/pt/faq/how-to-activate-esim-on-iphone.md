---
title: "Como Ativar eSIM no iPhone (2026)"
h1_title: "Como Ativar eSIM no iPhone em 2026 – Guia Completo Passo a Passo"
description: "Guia completo de ativação de eSIM no iOS para 2026. Sem precisar ligar para sua operadora. Siga instruções simples para código QR, app Ajustes ou app da operadora. Rápido e grátis."
keywords: ["ativação de eSIM", "como ativar eSIM iPhone", "configurar eSIM iPhone", "adicionar eSIM ao iPhone", "código QR de eSIM iPhone", "eSIM de viagem iPhone", "solução de problemas eSIM iPhone", "transferir eSIM para novo iPhone", "ativação de eSIM falhou iPhone", "eSIM sem serviço iPhone", "eSIM travado em ativando"]
date: 2026-09-15T00:00:00Z
lastmod: 2026-09-15T00:00:00Z
tags: ["eSIM", "iOS", "Troubleshooting", "Travel Setup"]
toc: true
image: "/img/faq/activate-esim-iphone.webp"
image-1: "/img/faq/activate-esim-iphone-1.jpg"
# Site & SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# UI text translations
ui_text:
  updated_on: "Atualizado em"
  min_read: "min de leitura"
  toc: "Índice de Conteúdo"

# Breadcrumbs
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
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Como ativar um eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Como ativar o eSIM no iPhone (todos os modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista mais recente de compatibilidade de eSIM"
      url: "/compatibility/"
---


> **Nota do Editor:** Ativar um eSIM no iPhone leva cerca de cinco minutos — escaneie o código QR, toque pelos Ajustes e o perfil baixa. Cada passo aqui foi testado em hardware real rodando iOS 17 e 18. Siga os passos da sua versão do iOS e você estará conectado antes de decolar.

**A Resposta Curta:** No iPhone, você ativa um eSIM pelo app Ajustes — sem ligar para sua operadora, sem cartão físico. Esta página percorre o caminho específico do iOS em profundidade: os menus exatos, as diferenças entre o iOS 17 e o 18, mover um perfil para um iPhone novo e a limpeza de iMessage/FaceTime que a maioria dos guias pula.

Para o conceito por trás, veja [O que é ativação de eSIM?](/faq/what-is-esim-activation-and-how-does-it-work/). No Android? Use o [guia geral de ativação](/faq/how-to-activate-an-esim/).

Usa um iPhone 16? Há um [guia dedicado de eSIM para o iPhone 16](/faq/2026-ultimate-guide-iphone-16-esim-activation-solutions/).

## Seu iPhone está pronto para eSIM?

Uma verificação rápida: disque `*#06#` — se aparecer um **EID** de 32 dígitos, seu iPhone tem eSIM. Para a lista completa de modelos de iPhone (XS até a linha 16/17, SE 2ª/3ª geração) e quantos perfis cada um guarda, veja a [central de compatibilidade de eSIM do iPhone](/faq/iphone-11-esim-compatible/).

## Antes de Começar a Ativar o eSIM

1. **Desbloqueado** — Settings > General > About > Carrier Lock deve dizer "No SIM restrictions". Um iPhone bloqueado não consegue instalar o eSIM de um segundo provedor.
2. **Wi-Fi** — o perfil baixa do servidor seguro da sua operadora, então você precisa de uma conexão (dados móveis não servem para o download inicial).
3. **Código de bloqueio** — o iOS pede seu código da tela de bloqueio para autorizar a instalação.
4. **O código QR** — deixe-o aberto em outro dispositivo, ou salve a imagem nas Fotos e use "Choose Photo" depois.

## Sua Linha Principal vs um eSIM de Viagem

Antes de abrir os Ajustes, nomeie o que você está realmente fazendo — o fluxo difere um pouco, e saber em qual caso você está evita a maior parte da confusão.

**Cenário A: ativando sua linha principal (trocando de operadora ou de celular novo).** Este é um relacionamento com a operadora. Sua operadora entrega um código QR, envia o eSIM pelo app deles (Verizon, T-Mobile, AT&T, Visible e Mint fazem isso), ou usa "eSIM Carrier Activation", em que o perfil aparece automaticamente quando você faz login com sua conta da operadora. Você vai querer verificar que o iMessage e o FaceTime se recadastram no novo número depois.

**Cenário B: adicionando um eSIM de viagem (mantendo seu número de origem).** Esta é uma segunda linha separada para dados no exterior. Você mantém seu SIM físico ou eSIM de origem intocado, instala o eSIM de viagem ao lado dele e aponta os Cellular Data para a linha de viagem. O eSIM de viagem costuma ser somente dados, então chamadas e mensagens ficam no seu número de origem.

Tudo abaixo se aplica aos dois, mas as seções de "conversão," "Quick Transfer" e "recadastrar iMessage" são território do Cenário A, enquanto a configuração de duas linhas é do Cenário B.

## Como Instalar um eSIM no iPhone

### Escanear um Código QR

1. Settings > Cellular (ou Mobile Data).
2. Toque em **Add eSIM** (iOS antigo: **Add Cellular Plan**).
3. Toque em **Use QR Code**.
4. Segure o celular a cerca de 15 cm do código, com a tela que o exibe com brilho máximo.
5. Quando o plano aparecer, toque em **Continue** e digite seu código de bloqueio se solicitado.

Se não escanear depois de algumas tentativas, escolha **Enter Details Manually** na parte inferior da tela da câmera.

### Entrada Manual

Vá em Settings > Cellular > Add eSIM > Use QR Code > **Enter Details Manually** e digite o endereço SM-DP+ e o código de ativação do e-mail do seu provedor. Este é o plano B confiável quando o código está danificado ou está no mesmo celular que você está ativando.

### App da Operadora

Provedores como Roami, Airalo e Holafly instalam com um toque pelo app deles — abra seu plano e toque em **Install** ou **Activate**, depois permita a solicitação. O caminho mais rápido, sem câmera envolvida.

## Converter seu SIM físico em eSIM no iPhone

Se sua operadora suporta, o iOS pode transformar seu SIM físico em eSIM no próprio celular — sem visita à loja, sem cartão SIM novo, sem código QR. Esta é a forma mais limpa de liberar o slot do SIM físico (digamos, para um SIM local no exterior) ou de ir para o 100% digital antes de vender seu celular.

1. Settings > Cellular.
2. Toque na linha que está atualmente no seu SIM físico.
3. Toque em **Convert to eSIM** (em algumas operadoras aparece como **Convert Physical SIM to eSIM**).
4. Toque em **Convert Cellular Plan**, depois em **Convert to eSIM**.
5. Aguarde a conversão — geralmente menos de um minuto — e remova o cartão SIM físico quando o iOS solicitar.

Alguns detalhes que vale conhecer. **O suporte varia por operadora** — as três grandes (AT&T, Verizon, T-Mobile) suportam, mas muitas MVNOs e operadoras pré-pagas não mostram a opção. **Seu iPhone precisa estar na rede dessa operadora** para converter (o sistema verifica a linha durante a conversão). **Você não pode converter um SIM estrangeiro ou de viagem** — esse recurso só converte o SIM da operadora em que seu celular está atualmente conectado. E, uma vez convertido, o cartão físico está morto — jogue fora, não entregue a outra pessoa.

Não vê "Convert to eSIM"? Sua operadora não ativou o recurso. Você ainda pode ir para o digital da forma antiga: peça a eles um código QR de eSIM e siga a instalação padrão acima.

## Mudanças de eSIM no iOS 17 vs iOS 18

| Recurso | iOS 17 | iOS 18 |
|---|---|---|
| Caminho para adicionar eSIM | Settings > Cellular > Add eSIM | Mesmo caminho |
| Rótulo do botão | "Add Cellular Plan" em alguns dispositivos | "Add eSIM" em toda parte |
| Entrada manual | Parte inferior da tela de leitura | Mais proeminente, redesenhada |
| Quick Transfer | Disponível desde o iOS 16 | Mais confiável, indicador de progresso melhor |
| Atualizações de operadora | Algumas exigem reinício | Atualizações em segundo plano |

Se você vê "Add Cellular Plan," é a mesma função que "Add eSIM."

## Histórico de Versões do iOS para eSIM

Os rótulos mudaram mais do que as pessoas imaginam. Aqui está o arco completo, para que um tutorial de três anos no seu celular de dois anos ainda faça sentido.

| Versão do iOS | Rótulo do menu | O que mudou para o eSIM |
|---|---|---|
| iOS 15 | "Add Cellular Plan" | eSIM disponível no XS/XR e posteriores; dual SIM é um eSIM + um físico na maioria dos modelos |
| iOS 16 | "Add Cellular Plan" | Chega o **Quick Transfer** (mover um eSIM de um iPhone próximo); conversão para eSIM em operadoras selecionadas |
| iOS 17 | "Add eSIM" / "Add Cellular Plan" (misto) | Conversão para eSIM se expande para mais operadoras; eSIM *ativo* dual no iPhone 13 e posteriores |
| iOS 18 | "Add eSIM" em toda parte | Tela de adição redesenhada, atualizações de operadora em segundo plano, visual de dual eSIM mais claro |

Em resumo: tudo do iOS 16 em diante pode fazer Quick Transfer, o iOS 17 padronizou o dual eSIM, e o iOS 18 é em grande parte um polimento de rótulos e confiabilidade.

## Recadastrar iMessage e FaceTime Após Instalar o eSIM

A maioria dos guias para em "Cellular Setup Complete," mas há uma peculiaridade do iOS que vale tratar: se você trocou sua linha padrão de voz, o iMessage e o FaceTime podem ainda estar vinculados à linha antiga — ou mostrar "Waiting for activation."

1. Settings > Messages > Send & Receive, e confirme que seu número está selecionado.
2. Settings > FaceTime, e confirme que o número certo ou o Apple ID está ativo.
3. Se qualquer um mostrar "Waiting for activation," desligue e ligue o iMessage enquanto conectado ao Wi-Fi.

Isso importa em configurações de duas linhas em que o eSIM de viagem é somente dados e você quer manter as mensagens no seu número de origem.

## Como Transferir um eSIM para um iPhone Novo

Ao configurar um iPhone novo perto do antigo, escolha **"Transfer eSIM from nearby iPhone"** e mantenha os dois dispositivos próximos, com Bluetooth e Wi-Fi ligados. O perfil migra sem fio em um ou dois minutos.

Se a solicitação não aparecer, vá em Settings > Cellular > Add eSIM > **Transfer from Nearby iPhone** no celular novo. Se o perfil chegar mas mostrar "No Service," exclua-o primeiro do iPhone antigo — algumas operadoras exigem que o perfil antigo seja liberado.

Para mover um eSIM para Android, reemissões de operadora, ou um celular que você já vendeu ou resetou, veja o [guia de transferência de eSIM](/faq/how-to-transfer-esim-between-iphone-and-android/).

## Casos especiais do Quick Transfer

O Quick Transfer é brilhante quando os dois iPhones estão na mesma sala. Quando não estão, veja o que acontece.

- **Você vendeu, perdeu ou resetou o iPhone antigo.** O Quick Transfer está fora de questão — ele precisa do dispositivo de origem ligado e desbloqueado. Em vez disso, contate sua operadora e peça a reemissão do eSIM (geralmente grátis, leva minutos), depois instale o QR novo no celular novo. Os passos detalhados de reemissão estão no [guia de transferência](/faq/how-to-transfer-esim-between-iphone-and-android/).
- **"Transfer from Nearby iPhone" não aparece.** Ele só aparece em dispositivos com iOS 16 ou posterior. Num iPhone mais antigo, ou se a origem está fora de alcance, recorra à reemissão de QR pela operadora.
- **A transferência trava no meio.** Coloque os dois celulares no mesmo Wi-Fi, mantenha-os a poucos centímetros e desative o Low Power Mode nos dois. O Bluetooth precisa permanecer ligado — o Quick Transfer pareia por Bluetooth antes de transferir pelo Wi-Fi.
- **Você está migrando do Android.** O Quick Transfer é apenas de iPhone para iPhone. Transferências de Android para iPhone passam pela sua operadora, não pelo app Ajustes.
- **O eSIM migrou mas um SIM físico não.** O Quick Transfer só move perfis de *eSIM* — um cartão SIM físico ainda precisa ser trocado fisicamente (a menos que você o converta em eSIM primeiro, como acima).

## Adicionar um eSIM de Viagem Mantendo Seu Número de Origem

Esta é a configuração mais comum do mundo real: sua linha de origem fica exatamente onde está, e um eSIM de viagem acompanha para os dados. Faça nesta ordem.

1. **Mantenha sua linha de origem intocada.** Seja SIM físico ou eSIM, deixe-a no lugar. Não exclua, não converta.
2. **Instale o eSIM de viagem** via QR, entrada manual ou o app do provedor (Roami, Airalo, Holafly).
3. **Nomeie as linhas.** Settings > Cellular, toque em cada linha e use "Cellular Plan Label" para renomeá-las — "Casa" e "Roami Viagem" — para diferenciá-las depois.
4. **Defina os Cellular Data para o eSIM de viagem.** Settings > Cellular > Cellular Data, e selecione a linha de viagem.
5. **Defina a Default Voice Line como seu número de origem.** Isso mantém chamadas, iMessage e FaceTime no seu número normal.
6. **Ligue o Data Roaming para o eSIM de viagem, DESLIGUE para a origem.** A linha de viagem precisa de roaming para alcançar as redes parceiras; a de origem não, e mantê-la desligada evita taxas diárias acidentais.
7. **Deixe "Allow Cellular Data Switching" DESLIGADO.** Com ele ligado, uma queda breve de sinal pode virar os dados para sua linha de origem e disparar uma cobrança de roaming.

Agora você tem um duto de dados do seu eSIM de viagem e um número que todos conseguem alcançar — sem troca de SIM, sem segundo celular.

## Configure suas duas linhas para viagem

- **Default Voice Line:** mantenha seu SIM de origem para que chamadas e iMessages fiquem no seu número normal.
- **Cellular Data:** aponte para o eSIM de viagem.
- **Allow Cellular Data Switching:** deixe **DESLIGADO**. Com ele ligado, uma queda breve de sinal pode virar os dados para sua linha de origem e disparar uma cobrança diária de roaming.
- **Data Roaming:** DESLIGADO no SIM de origem, LIGADO para o eSIM de viagem (os eSIMs de viagem precisam dele para alcançar as redes parceiras).

Se as barras de sinal aparecem mas as páginas não carregam, geralmente é um problema de APN — a tabela completa de APN está no [guia de solução de problemas profundo](/faq/esim-deep-troubleshooting-guide-2026/).

## "Add eSIM" esmaecido, ou "Add Cellular Plan" ausente

Se a opção está esmaecida ou simplesmente não existe, algo a montante a está bloqueando. Aqui estão as causas, as mais comuns primeiro.

| Causa | Como identificar | Solução |
|---|---|---|
| iPhone bloqueado pela operadora | Settings > General > About > Carrier Lock não diz "No SIM restrictions" | Desbloqueie via sua operadora, ou use o próprio eSIM da operadora que bloqueou |
| A operadora não oferece eSIM | Sua operadora só emite SIMs físicos | Troque de operadora, ou use um eSIM de viagem para dados |
| Slots de eSIM já cheios | iPhone 13+ guarda dois eSIMs ativos; XS–12 guardam um | Desligue ou remova uma linha existente para liberar um slot |
| Perfil MDM / corporativo | Um celular de trabalho com perfil de gerenciamento instalado | A restrição `AllowESIMModification` bloqueia mudanças — contate o TI |
| Modelo da China / Hong Kong | Número do modelo termina com o sufixo específico da China, sem hardware de eSIM | eSIM não está disponível em iPhones da China continental |
| Falha de software | Uma atualização recente do iOS deixou o menu desatualizado | Reinicie e verifique novamente |

A maior causa única é bloqueio de operadora — responde pela maioria dos chamados "por que não consigo adicionar um eSIM". A segunda é tentar adicionar uma terceira linha num celular que só permite duas ativas.

## E o Apple Watch e o iPad?

Um Apple Watch espelha uma das linhas do seu iPhone — não pode usar um eSIM de viagem por conta própria — e os iPad com celular usam seu próprio caminho Settings > Cellular Data. Detalhes completos estão no [guia de eSIM para iPad e Apple Watch](/faq/ipad-apple-watch-esim-support-guide/).

## Gerenciando múltiplos eSIMs no seu iPhone

Quando você tem dois ou três perfis instalados, uma pequena organização evita que virem uma pilha confusa.

- **Nomeie cada linha.** Settings > Cellular > uma linha > Cellular Plan Label. "Casa," "Roami Viagem" e "eSIM Espanha" superam os padrões ("Primary," "Secondary," "Travel").
- **Ligue ou desligue linhas.** Settings > Cellular > uma linha > Turn On This Line. Desligada significa que ela para de tentar registrar — prático para um eSIM de viagem dormente que você planeja reutilizar na próxima viagem.
- **Troque a linha de dados instantaneamente.** Settings > Cellular > Cellular Data permite mover os dados entre linhas sem reiniciar.
- **Fique de olho no limite de linhas ativas.** iPhone 13 e posteriores permitem duas linhas ativas ao mesmo tempo; um terceiro perfil pode ficar *armazenado*, mas não ativo, até você desligar um.
- **Exclua quando terminar.** Depois de uma viagem, remova o eSIM de viagem expirado (Settings > Cellular > a linha > Delete eSIM) para ele parar de poluir a lista — mas só quando o plano tiver expirado, já que códigos QR são de uso único.

## eSIM, backups do iCloud e apagar seu iPhone

Uma coisa que a maioria das pessoas aprende do jeito mais difícil: **os eSIMs não fazem parte do seu backup do iCloud.** Uma restauração de backup traz de volta seus apps, configurações e fotos — mas não seus perfis de celular. Os perfis vivem no chip eUICC do celular, e só três coisas os movem: Quick Transfer, reemissão pela operadora, ou baixar novamente do seu provedor.

Consequências práticas:

- **"Erase All Content and Settings" remove seus eSIMs.** Antes de apagar (para vender, dar em troca ou resolver um problema), saiba que você precisará baixar cada eSIM novamente depois — e eSIMs de viagem com códigos QR de uso único podem exigir um plano totalmente novo.
- **Uma restauração normal do iCloud não apaga nem restaura eSIMs.** Restaurar no *mesmo* celular deixa seus eSIMs intocados; restaurar num celular *novo* ainda exige Quick Transfer ou reemissão pela operadora para as linhas.
- **O backup não resgata um eSIM perdido.** Se você apagar ou quebrar o celular, o perfil se perde até a operadora reemitir. Salve as sequências de entrada manual do seu provedor (endereço SM-DP+ + código de ativação) em algum lugar separado do celular.

## Erros Comuns de eSIM no iPhone

As falhas mais frequentes — "Cellular Plan Cannot Be Added," travado em "Activating," "No Service" após a instalação — estão cobertas erro por erro, com valores de APN, no [Guia de Solução de Problemas Profundo de eSIM](/faq/esim-deep-troubleshooting-guide-2026/). A maior causa única é celular bloqueado pela operadora; a segunda é o Data Roaming desligado no eSIM de viagem.

## Perguntas Frequentes

**Quantos eSIMs posso armazenar no meu iPhone?**
Oito ou mais perfis, embora apenas dois possam estar ativos ao mesmo tempo (iPhone 13 e mais novos). Modelos antigos (XS–12) mantêm um eSIM ativo mais um SIM físico.

**Posso excluir meu eSIM depois da viagem?**
Sim — Settings > Cellular > o eSIM > Delete eSIM quando o plano expirar. Nunca exclua no meio da viagem: códigos QR são de uso único, então você precisaria de um plano novo.

**Um eSIM consome a bateria do meu iPhone?**
Não de forma significativa. Duas linhas ativas numa área de sinal fraco podem adicionar um ou dois por cento por dia, mas um eSIM sozinho consome praticamente o mesmo que um SIM físico.

**Preciso do Data Roaming ligado para um eSIM de viagem no iPhone?**
Sim — é necessário para o eSIM registrar nas redes parceiras, e não adiciona cobranças de roaming. Esquecer isso é a causa nº 1 de "No Service".

**Posso usar um SIM físico e eSIM juntos no iPhone?**
Sim — o dual SIM funciona de fábrica. (Os iPhones 14 dos EUA e mais novos são somente eSIM, então você emparelharia dois eSIMs em vez disso.) Veja a [central de compatibilidade do iPhone](/faq/iphone-11-esim-compatible/) para como o dual SIM funciona.

**Qual a diferença entre eSIM e SIM físico?**
Em resumo: um eSIM é um perfil digital que você não pode remover, e troca de operadora instantaneamente. A comparação completa está em [O que é eSIM?](/faq/what-is-esim/).

**Posso converter meu SIM físico em eSIM no meu iPhone?**
Se sua operadora suporta, sim — Settings > Cellular > sua linha > Convert to eSIM. As três grandes operadoras dos EUA suportam; muitas MVNOs não. Seu celular precisa estar na rede dessa operadora para converter.

**Por que "Add eSIM" está esmaecido no meu iPhone?**
Geralmente um bloqueio de operadora, um slot de eSIM cheio, ou um perfil corporativo MDM bloqueando mudanças. Verifique primeiro Settings > General > About > Carrier Lock — se não disser "No SIM restrictions," essa é a resposta.

**O que acontece com meu eSIM se eu apagar meu iPhone?**
"Erase All Content and Settings" remove os perfis de eSIM. Você precisará baixá-los novamente da sua operadora depois. eSIMs de viagem com códigos QR de uso único podem precisar de um plano novo, então apague apenas quando estiver pronto para configurar tudo de novo.

**O Quick Transfer funciona se eu não tenho mais meu iPhone antigo?**
Não — ele precisa dos dois celulares presentes e ligados. Se seu iPhone antigo foi vendido, perdido ou resetado, peça à sua operadora para reemitir o eSIM em vez disso. Veja o [guia de transferência](/faq/how-to-transfer-esim-between-iphone-and-android/).

**Posso pausar meu eSIM de viagem no iPhone entre viagens?**
Você não pode pausar o relógio de validade do plano, mas pode desligar a linha (Settings > Cellular > a linha > Turn On This Line) para ela parar de registrar e de consumir bateria. Ela permanece armazenada e pronta para reativar na próxima viagem — contanto que a janela de validade do plano não tenha terminado.

---

## Pronto para sua próxima aventura?

👉 **Experimente grátis primeiro** — pegue um [eSIM grátis](/free-esim/) e percorra este passo a passo de ponta a ponta.

Depois escolha seu destino:

- [eSIM para os EUA](/united-states-esim/)
- [eSIM para o Japão](/japan-esim/)
- [eSIM para a Europa](/europe-esim/)
- [eSIM para o Reino Unido](/united-kingdom-esim/)

*Baseado na documentação oficial da Apple, nos padrões da GSMA e em testes com operadoras. Atualizado: setembro de 2026.*

## Fontes

- [GSMA — especificação eSIM (SGP.22)](https://www.gsma.com/esim/)
- [Suporte Apple — Configurar eSIM no iPhone](https://support.apple.com/en-us/HT212780)
- [Suporte Apple — Sobre eSIM no iPhone](https://support.apple.com/en-us/HT209044)
- [Suporte Apple — Usar Dual SIM com um eSIM](https://support.apple.com/en-us/HT209086)
