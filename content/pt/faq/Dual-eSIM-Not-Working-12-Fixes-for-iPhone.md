---
title: "Dual eSIM Não Funciona? 12 Correções para iPhone"
h1_title: "Como Corrigir Dual eSIM Não Funcionando no iPhone: 12 Soluções"
description: "Dual eSIM com problemas? 12 correções para iPhone: erros CDMA, cache T-ADS, bateria e bloqueio. Guia passo a passo para iPhone 16 e 17."
keywords: ["solução de problemas eSIM", "falha na ativação do eSIM", "eSIM sem serviço", "erro de transferência eSIM", "Apple eSIM", "iOS 19 eSIM", "eSIM iPad não funciona", "configurações APN eSIM", "código de confirmação eSIM", "perfil eSIM expirado", "eSIM vinculado a outro dispositivo", "problema de sinal dual eSIM", "erro DFU eSIM 53", "bloqueio de operadora eSIM", "transferência entre plataformas eSIM", "dual eSIM não funciona", "iPhone dual SIM sem serviço"]
date: 2026-08-06T10:00:00Z
lastmod: 2026-08-06T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Solução de problemas", "Configuração de viagem"]
toc: true

# Configurações base do site e SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Textos de UI/tradução
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
    
# Barra lateral: eSIMs populares
sidebar_popular:
  title: "eSIMs Populares"
  item_suffix: "eSIM"
  items:
    - name: "eSIM USA"
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

# Barra lateral: eSIMs gratuitos
sidebar_free:
  title: "Solicite eSIM Grátis"
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

# Barra lateral: Perguntas populares
sidebar_questions:
  title: "Perguntas Populares"
  items:
    - question: "O que é ativação de eSIM e como funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Como ativar um eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Como ativar eSIM no iPhone (todos os modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista de Compatibilidade de eSIM mais recente"
      url: "/compatibility/"
---

> **Principais conclusões**  
> - **Operadoras CDMA** (Verizon, US Cellular) podem impedir a funcionalidade de voz em dual eSIM – mude para um plano GSM.  
> - **Erros de cache T-ADS** causam falhas em chamadas recebidas – ative/desative Wi‑Fi Calling para corrigir.  
> - Os iPhones são **dual standby, não dual active** – “Sem Serviço” na outra linha durante chamadas é normal.  
> - Verifique o **Bloqueio de Operadora** em Configurações (`Sem restrições de SIM`) se não conseguir adicionar um segundo eSIM.  
> - O consumo de bateria com **dual eSIM** pode ser reduzido desativando o 5G na linha com sinal mais fraco.

Usar dois números de telefone em um iPhone é extremamente conveniente – mas traz armadilhas ocultas. De conflitos CDMA vs GSM a falhas no roteamento de chamadas recebidas (T‑ADS), este guia cobre tudo o que você precisa saber para executar **dual eSIM** ou **eSIM + SIM físico** perfeitamente no iPhone 17, 16 e modelos anteriores com iOS 19. Para um tutorial completo de configuração básica de eSIM, consulte nosso **[Guia Completo do iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**. Este guia de solução de problemas de dual eSIM segue as mais recentes [especificações GSMA eSIM](https://www.gsma.com/esim/) e foi testado no iOS 19. A documentação oficial da Apple [Sobre eSIM no iPhone](https://support.apple.com/en-us/HT209044) fornece informações adicionais sobre compatibilidade.

---

## 📌 Índice de Diagnóstico Rápido (Específico para Dual eSIM)

| Sintoma | Causa Mais Provável | Seção de Correção |
|---------|---------------------|-------------------|
| O segundo eSIM mostra “Sem Serviço” mas o primeiro funciona | Incompatibilidade de fallback de voz CDMA | #2 |
| Um número pode fazer chamadas mas não receber | Cache T-ADS da operadora desatualizado | #3 |
| Durante uma chamada, a outra linha diz “Sem Serviço” | O iPhone usa uma rede de dados por vez | #4 |
| Não é possível adicionar segundo eSIM – erro “bloqueio de operadora” | Dispositivo bloqueado para a primeira operadora | #5 |
| Dual eSIM funciona mas a bateria descarrega mais rápido | Ambas as linhas procurando ativamente | #6 |
| eSIM + SIM físico: SIM físico não reconhecido | Problema na bandeja SIM ou cartão incompatível | #7 |

---

## 1. Quais são suas opções de dual eSIM no iPhone?

A partir do iPhone XS, XR e todos os modelos mais novos (incluindo iPhone 17), a Apple suporta dual eSIM (dois eSIMs ativos simultaneamente) no iPhone 13 e posteriores. Modelos não americanos também suportam um eSIM mais um nano-SIM físico. Modelos chineses com dois SIMs físicos não têm suporte a eSIM, exceto o iPhone 17 Air.

Sua configuração de **dual eSIM** depende do modelo do iPhone e da região:

| Configuração | Modelos Suportados | Linhas Máximas Ativas |
|--------------|--------------------|-----------------------|
| **Dual eSIM** | iPhone 13 e mais novos (incluindo todos os iPhone 17) | 2 |
| **1 eSIM + 1 nano‑SIM físico** | Todos os iPhones com bandeja SIM (modelos não americanos e modelos americanos anteriores ao iPhone 14) | 2 |
| **Apenas 1 SIM físico** | iPhones mais antigos (pré-XS) | 1 |
| **2 SIMs físicos** | Modelos específicos com bandeja dual‑SIM para China continental, Hong Kong, Macau (ex.: versão China do iPhone 17) | 2 |

Para uma lista completa de iPhones compatíveis, [verifique a compatibilidade de dual eSIM do seu iPhone](/compatibility/).

> 📱 **iPhone 17 Air e série iPhone 17 dos USA**: Sem bandeja SIM física – apenas dual eSIM. Se você encontrar problemas de ativação nesses modelos, consulte nosso **[Guia de Solução de Problemas Avançada de eSIM (16 casos reais)](/faq/esim-deep-troubleshooting-guide-2026/)** para correções avançadas.

---

## 2. Limitação Crítica: Operadoras CDMA Quebram o Dual eSIM

Se sua linha principal usa uma operadora CDMA como Verizon ou US Cellular, o baseband do iPhone só pode lidar com um canal de voz CDMA por vez. Adicionar um segundo eSIM fará com que essa segunda linha mostre “Sem Serviço” para chamadas de voz, embora os dados possam funcionar. A única correção completa é mudar para um plano GSM/5G‑only.

### Por que isso acontece?
As redes CDMA usam uma tecnologia de fallback de voz diferente (1xRTT). O baseband do iPhone só pode lidar com **um canal de voz CDMA** por vez. Quando o primeiro eSIM é CDMA, ele trava o baseband no modo CDMA, deixando sem recursos para a voz da segunda linha. A segunda linha pode obter dados LTE/5G, mas **não pode fazer ou receber chamadas**.

**Em termos simples:** Pense no modem celular do seu iPhone como uma estrada. Uma linha CDMA é um caminhão grande que bloqueia toda a estrada. A voz de nenhuma outra linha pode passar até que o caminhão saia.

### Quais operadoras são CDMA?
- **eSIM USA**: Verizon (planos antigos), US Cellular, algumas MVNOs.
- **Japão**: au (KDDI) (CDMA descontinuado, mas planos legados existem)
- **Outras**: A maior parte do mundo usa GSM/UMTS/LTE (sem problema)

### Correções para dual eSIM com CDMA
- ✅ **Troque sua linha principal para um plano GSM/5G‑only** – ex., [planos 5G-only da Verizon](https://www.verizon.com/plans/unlimited-plan) ou T‑Mobile.
- ✅ **Use a linha CDMA apenas para dados** – desative “Voz” para essa linha (não é possível no iOS; você precisaria desativar VoLTE, o que pode não funcionar).
- ⚠️ **Solução alternativa**: Troque qual linha é a principal. Se você precisar manter CDMA, coloque-a como o segundo eSIM – mas então o primeiro eSIM pode perder voz.
- ❌ **Nenhuma correção completa** – você pode precisar manter um SIM físico para voz CDMA e usar eSIM apenas para dados.

Para uma comparação mais aprofundada das redes de operadoras dos USA, consulte nosso **[comparação de redes de operadoras dos USA](/carriers/united-states-esim-carrier-guide/)**.

---

## 3. Um Número Pode Ligar Mas Não Receber – Erro de Cache T‑ADS

**Sintoma**: A linha A funciona bem. A linha B pode fazer chamadas, mas as chamadas recebidas para B vão direto para o correio de voz ou tocam como “indisponível”.

**Causa raiz**: O cache **T‑ADS (Terminating Access Domain Selection)** da operadora está desatualizado. Quando a linha B mudou recentemente de 5G para LTE, ou usou Wi‑Fi Calling, a rede ainda tenta rotear as chamadas recebidas para o domínio antigo.

**Analogia:** Imagine que a operadora tem uma lista de endereços antiga que ainda lista seu telefone na sua casa anterior. Quando alguém liga, eles vão para o lugar errado. Ativar/desativar Wi‑Fi Calling atualiza a lista de endereços.

### Correção rápida (lado do usuário)
1. Desative **Wi‑Fi Calling** temporariamente: `Configurações > Celular > Linha B > Wi‑Fi Calling` → DESLIGADO.
2. Reinicie o iPhone.
3. Ative Wi‑Fi Calling novamente.

### Correção pela operadora (ligue para o suporte)
Peça à sua operadora para “**limpar o cache T‑ADS para este número**” ou “**redefinir o registro de seleção de domínio**”. Isso geralmente entra em vigor em até 30 minutos. Para mais problemas relacionados a T‑ADS e chamadas, veja **[Correção 14 em nosso guia de solução de problemas](/faq/esim-deep-troubleshooting-guide-2026/#14-dual-sim-one-number-can-call-out-but-cannot-receive-incoming-calls)**.

### Prevenir recorrência
- Evite alternar rapidamente entre 5G/LTE (mantenha um modo por pelo menos algumas horas).
- Se você viaja com frequência, mantenha **Roaming de Dados** DESLIGADO para a linha que não precisa de dados.

---

## 4. Durante uma Chamada, a Outra Linha Diz “Sem Serviço” – Comportamento Normal

**Sintoma**: Você está em uma chamada usando a Linha A. Quando verifica, a Linha B mostra “Sem Serviço”.

**Explicação**: Os iPhones são **dual standby, não dual active**. Apenas uma linha pode manter uma conexão celular por vez. Durante uma chamada, a outra linha fica temporariamente inalcançável. Assim que a chamada termina, ambas as linhas se reconectam. Isso **não é uma falha de dual eSIM** – é por design.

### O que você pode fazer:
- **Ative Wi‑Fi Calling em ambas as linhas** – então a linha ociosa pode usar Wi‑Fi para receber chamadas enquanto você está na outra linha. A [documentação de dual standby da Apple](https://support.apple.com/guide/iphone/iph22f1a8af1/ios) explica isso em mais detalhes.
- **Ative “Permitir Alternância de Dados Celulares”** – em `Configurações > Celular > Dados Celulares`. Isso permite que a linha sem dados use a conexão da linha de dados para Wi‑Fi Calling.

> 📌 Nota: Algumas operadoras não suportam Wi‑Fi Calling simultaneamente em ambas as linhas. Verifique com sua operadora.

---

## 5. Dual eSIM Não Funciona? Verifique o Bloqueio de Operadora Primeiro

Se você não puder adicionar um segundo eSIM ou SIM físico:
- Seu iPhone pode estar **bloqueado por operadora** para a primeira operadora.
- Para verificar: `Configurações > Geral > Sobre` → role até **Bloqueio de Operadora**. Deve dizer “Sem restrições de SIM”.

### O que fazer se estiver bloqueado:
- Entre em contato com sua operadora para solicitar o desbloqueio. As operadoras dos USA devem desbloquear após o dispositivo ser pago.
- Se desbloqueado mas ainda não funcionar, você pode precisar redefinir as configurações de rede: `Configurações > Geral > Transferir ou Redefinir iPhone > Redefinir > Redefinir Configurações de Rede`. (Aviso: isso apaga senhas de Wi‑Fi.)

Uma vez desbloqueado, você também pode mover seu eSIM entre iPhone e Android – veja nosso **[guia de Transferência de eSIM entre Plataformas 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** para instruções passo a passo.

---

## 6. Drenagem de Bateria com Dual eSIM: Como Reduzir

Executar **dual eSIM** ou mesmo eSIM + SIM físico aumenta o consumo de bateria em 5 a 15%. Veja como minimizar a drenagem mantendo ambas as linhas ativas:

| Estratégia | Efeito |
|------------|--------|
| Defina a linha com sinal mais fraco para **usar apenas LTE** (não 5G) | Economia moderada |
| Desative **Roaming de Dados** na linha não usada para dados | Economiza escaneamento |
| Desative **5G Standalone** (se sua operadora permitir) | Ajuda bastante |
| Use **Modo de Dados Reduzidos** para aplicativos em segundo plano na linha secundária | Economia pequena |
| Em áreas de sinal muito baixo, desative temporariamente a linha secundária | Economia significativa |

Para desativar uma linha: `Configurações > Celular` → toque na linha → desative **Ativar Esta Linha**. Se você viaja internacionalmente com frequência, [experimente o teste gratuito de eSIM da Roami](/free-esim/) como uma alternativa eficiente em termos de bateria.

---

## 7. SIM Físico Não Reconhecido (Problemas com a Bandeja)

**Sintoma**: Seu nano-SIM funciona em outro telefone, mas não no seu iPhone.

**Causas comuns**:
- O cartão SIM é **CDMA** e o iPhone está em modo apenas eSIM? (raro)
- Bandeja SIM não inserida completamente ou danificada.
- O cartão SIM é **muito antigo** (pré-4G) ou está dobrado.

**Correções**:
1. Remova a bandeja, limpe os contatos com um pano macio.
2. Reinsira firmemente até ouvir o clique.
3. Reinicie o iPhone.
4. Se ainda não for reconhecido, teste o SIM em outro telefone – se funcionar, o leitor de SIM do seu iPhone pode estar com defeito.
5. Substitua o cartão SIM na loja da operadora (gratuito para a maioria dos planos pós-pagos).

Se você planeja mudar completamente para eSIM, consulte nosso **[guia do iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)** para métodos de ativação.

---

## 8. Casos Regionais Especiais: China, Hong Kong, Macau

Os iPhones da China continental (exceto iPhone 17 Air) têm dois slots nano-SIM físicos e **nenhum suporte a eSIM**. Os modelos de Hong Kong e Macau normalmente suportam eSIM + SIM físico. Se você comprar um iPhone chinês com dois SIMs físicos, não poderá instalar nenhum eSIM, incluindo eSIMs de viagem internacionais – isso é uma limitação de hardware.

A Apple vende modelos específicos com dois SIMs físicos na **China continental**:
- iPhone 17, 17 Pro, 17 Pro Max: **dois slots nano‑SIM físicos** (sem eSIM, exceto Air).
- iPhone 17 Air: **apenas eSIM** (global, incluindo China).

**Modelos de Hong Kong e Macau**:
- Suportam **eSIM + SIM físico** (como modelos internacionais) ou dois SIMs físicos dependendo do modelo.
- Sempre verifique antes de comprar se você planeja usar planos de eSIM de viagem.

> ⚠️ **Importante**: Se você comprar um iPhone chinês com dois SIMs físicos, **não poderá instalar nenhum eSIM** (incluindo eSIMs de viagem internacionais) – exceto o iPhone 17 Air. Isso é uma limitação de hardware, não um bloqueio de software.

---

## 9. Dual eSIM para Trabalho e Pessoal: Melhores Práticas

Muitos usuários mantêm um **número de trabalho** (eSIM) e um **número pessoal** (segundo eSIM ou SIM físico). Veja como configurar sua configuração de **dual eSIM** de forma limpa:

### Rotule as linhas claramente
`Configurações > Celular` → toque em uma linha → `Rótulo do Plano Celular` → escolha “Negócios” ou “Pessoal”, ou crie um rótulo personalizado.

### Escolha voz e dados padrão
- **Linha de Voz Padrão**: Qual linha usar ao discar do aplicativo Telefone nativo (você ainda pode escolher por chamada).
- **Dados Celulares**: Qual linha usa dados móveis. Ative **Permitir Alternância de Dados Celulares** para que o telefone possa usar temporariamente os dados da outra linha se a principal perder sinal.

### Separe contatos
- Atribua contatos a uma linha específica: Editar contato → `Linha Preferencial` → selecione negócios ou pessoal.

### Evite roaming acidental
- Desative **Roaming de Dados** para a linha de trabalho se ela tiver tarifas internacionais caras.

---

## 10. Tabela de Solução de Problemas – Cenários de Dual eSIM

| Problema | Passo Imediato | Correção de Longo Prazo |
|----------|----------------|-------------------------|
| O segundo eSIM nunca pega sinal | Reinicie o iPhone e ative/desative a linha | Se for operadora CDMA, mude para plano GSM |
| Chamadas vão direto para correio de voz (não tocam) | Desative “Silenciar Chamadas Desconhecidas” e encaminhamento de chamadas | Contate a operadora para redefinir T‑ADS |
| Não é possível receber SMS na segunda linha | Envie um SMS de teste dessa linha para qualquer número | Certifique-se de que a linha não é apenas dados; a operadora pode precisar ativar SMS |
| Dois eSIMs mas ambos mostram “Sem Serviço” | Ative/desative Modo Avião > verifique bloqueio de operadora | Redefina configurações de rede |
| Trocou as linhas e agora FaceTime/iMessage não ativam | Vá em `Configurações > Mensagens > Enviar e Receber` – selecione manualmente os números | Saia do Apple ID e entre novamente |

Para problemas adicionais como “eSIM vinculado a outro dispositivo” ou “erro de restauração DFU 53”, consulte nossa **[biblioteca completa de 16 casos de solução de problemas](/faq/esim-deep-troubleshooting-guide-2026/)**.

---

## 11. Perguntas Frequentes

**P1: Posso usar dois eSIMs da mesma operadora?**  
Sim, desde que sua operadora permita múltiplos perfis eSIM em uma conta. Por exemplo, a T‑Mobile US suporta até dois eSIMs no mesmo iPhone. Para uma lista completa de modelos de iPhone compatíveis, verifique a **[tabela de compatibilidade do iPhone 17](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/#2-global-iphone-17-models--esim-compatibility-table)**.

**P2: Ambas as linhas suportarão 5G simultaneamente?**  
Sim, no iPhone 13 e mais novos (incluindo iPhone 17), ambas as linhas podem estar em 5G (dual 5G standby). No entanto, apenas uma linha pode usar dados 5G por vez; a outra usa 5G para fallback de voz (VoNR).

**P3: Minha segunda linha funciona, mas a primeira parou de funcionar após adicioná-la – o que aconteceu?**  
Você pode ter trocado acidentalmente as configurações da linha principal. Vá em `Configurações > Celular > Linha de Voz Padrão` e configure novamente.

**P4: O dual eSIM consome mais bateria do que eSIM + SIM físico?**  
Geralmente, o dual eSIM consome um pouco menos de energia porque não há leitor de cartão físico. Mas a diferença é insignificante (cerca de 2‑3%).

**P5: Estou viajando – posso usar um eSIM local para dados e manter meu eSIM doméstico para chamadas?**  
Sim, melhor prática:  
- Defina o eSIM local como linha de **Dados Celulares**.  
- Mantenha o eSIM doméstico como **Linha de Voz Padrão**.  
- Desative **Roaming de Dados** no eSIM doméstico para evitar cobranças altas.  
- Ative **Permitir Alternância de Dados Celulares** para que sua linha doméstica possa usar os dados do eSIM local para Wi‑Fi Calling e MMS.

Se você alterna frequentemente entre dispositivos durante viagens, o **[guia de transferência entre plataformas eSIM](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)** ajudará você a mover seu número perfeitamente.

**P6: Por que o segundo eSIM às vezes desaparece após uma atualização do iOS?**  
Erro raro. Vá em `Configurações > Celular` → se a linha estiver faltando mas ainda aparecer em “SIMs Disponíveis”, toque nela e reative. Se não, contate a operadora para reenviar o perfil.

**P7: Posso usar uma configuração dual‑SIM com um Apple Watch?**  
Sim. O Apple Watch pode espelhar **uma** das linhas do iPhone. Escolha qual linha você deseja no relógio durante a configuração.

**P8: Onde posso encontrar a documentação oficial da Apple para dual eSIM?**  
A Apple fornece dois recursos principais: [Sobre eSIM no iPhone](https://support.apple.com/en-us/HT209044) e [Usar Dual SIM com eSIM](https://support.apple.com/en-us/HT209086). Eles cobrem compatibilidade básica e configuração.

**P9: Como recupero um eSIM excluído?**  
Se você excluiu um perfil eSIM, a recuperação depende da sua operadora. Para eSIMs de viagem (Roami, Airalo, etc.), a exclusão é geralmente permanente – você precisará comprar um novo plano. Para eSIMs de operadoras pós-pagas (como Verizon, T‑Mobile, AT&T), entre em contato com sua operadora – elas geralmente podem reemitir um novo código QR. Sempre mantenha uma cópia do seu e-mail de ativação original e do código QR.

**P10: Como configurar as definições de APN se meu eSIM não tiver dados?**  
Se seu eSIM mostrar barras de sinal, mas não tiver conexão de dados, as definições de APN podem precisar de ajuste:
1. Vá em **Configurações > Celular > Rede de Dados Celulares**.
2. Preencha os campos APN – verifique o site do seu provedor eSIM para valores corretos.
3. Valores comuns de APN: `roami` (Roami), `airalo` (Airalo), `global` (Nomad).
4. Salve e reinicie o iPhone.

---

## 12. Dicas Finais para Usuários de Dual eSIM

- **Rotule suas linhas** imediatamente após a configuração – economiza uma confusão infinita.
- **Defina toques diferentes** para cada linha: `Configurações > Sons e Tatos > Toque` → role para baixo, você pode atribuir por linha.
- **Use automação de Atalhos** para alterar a linha de voz padrão com base no horário (ex.: horário comercial = linha de negócios; noite = pessoal).
- **Antes de vender seu dispositivo**: Vá em `Configurações > Celular`, exclua **todos** os eSIMs e remova o SIM físico. Em seguida, apague todo o conteúdo e configurações. Para um tutorial detalhado sobre exclusão de eSIMs e cancelamento de planos, consulte **[Correção #9 em nosso guia de solução de problemas](/faq/esim-deep-troubleshooting-guide-2026/#9-after-deleting-esim-carrier-still-charges--cannot-reactivate)**.

---
*Baseado em documentação oficial da Apple, padrões GSMA e testes de operadoras. Atualizado: Junho de 2026.*