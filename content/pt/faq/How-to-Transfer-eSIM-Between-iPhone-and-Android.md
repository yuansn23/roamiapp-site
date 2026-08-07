---
title: "Transferir eSIM iPhone para Android em 60 Segundos"
h1_title: "Como Mudar para o iPhone 16 e Mover Seu eSIM em 60 Segundos Sem Ligar para a Operadora"
description: "Migrando Android para iPhone? Transfira eSIM em 60 segundos sem ligar para operadora. Corrija erros de transferência. Compatível iOS 26 e Android 16."
keywords: ["solução de problemas esim", "falha na ativação esim", "esim sem serviço", "erro de transferência esim", "Apple eSIM", "iOS 26 eSIM", "eSIM do iPad não funciona", "configurações APN esim", "código de confirmação esim", "perfil esim expirado", "esim vinculado a outro dispositivo", "problema de sinal dual esim", "esim DFU erro 53", "bloqueio de operadora esim", "transferência esim entre plataformas"]
date: 2026-08-06T10:00:00Z
lastmod: 2026-08-06T10:00:00Z
tags: ["eSIM", "iOS", "Android", "Solução de Problemas", "Configuração de Viagem"]
toc: true

# Configuração base hardcoded do site e SEO
site_name: "Roami"
author: "Roami"
publisher_logo: "/img/logo.png"

# Configuração de tradução/UI hardcoded (suporte multilíngue)
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
    
# Direita: Configuração de eSIMs populares (6 países, US$ 1,99)
sidebar_popular:
  title: "eSIMs Populares"
  item_suffix: "eSIM"
  items:
    - name: "eSIM USA"
      flag: "/img/flags/us.svg"
      price: "$1,99"
      url: "/united-states-esim/"
      badge: "5G"
    - name: "Alemanha"
      flag: "/img/flags/de.svg"
      price: "$1,99"
      url: "/germany-esim/"
      badge: "5G"
    - name: "Europa"
      flag: "/img/flags/eu.svg"
      price: "$1,99"
      url: "/europe-esim/"
      badge: "5G"
    - name: "Turquia"
      flag: "/img/flags/tr.svg"
      price: "$1,99"
      url: "/turkey-esim/"
      badge: "5G"
    - name: "Japão"
      flag: "/img/flags/jp.svg"
      price: "$1,99"
      url: "/japan-esim/"
      badge: "5G"
    - name: "China"
      flag: "/img/flags/cn.svg"
      price: "$1,99"
      url: "/china-esim/"
      badge: "5G"

# Direita: Configuração de eSIMs gratuitos (4 países)
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

# Direita: Configuração de perguntas populares (5 perguntas)
sidebar_questions:
  title: "Perguntas Populares"
  items:
    - question: "O que é ativação de eSIM e como funciona?"
      url: "/faq/what-is-esim-activation-and-how-does-it-work/"
    - question: "Como ativar um eSIM?"
      url: "/faq/how-to-activate-an-esim/"
    - question: "Como ativar eSIM no iPhone (Todos os Modelos)?"
      url: "/faq/how-to-activate-esim-on-iphone/"
    - question: "Lista de Compatibilidade de eSIM Mais Recente"
      url: "/compatibility/"
---


Por anos, **as transferências de eSIM** ficaram restritas ao mesmo ecossistema – você podia mover de iPhone para iPhone, ou entre alguns Androids, mas atravessar a divisão iOS‑Android exigia uma visita à sua operadora. **O iOS 26 e o Android 16 mudam isso completamente.** Este guia orienta você sobre cada método suportado, requisito da operadora e etapa de solução de problemas para concluir uma **transferência de eSIM entre plataformas** sem complicações.

Se você é novo na tecnologia eSIM, nosso [guia O que é eSIM?](/faq/What-Is-eSIM/) cobre o básico. Para cenários mais avançados de **solução de problemas de eSIM**, consulte nosso **[Guia de Solução de Problemas de eSIM (16 casos reais)](/faq/esim-deep-troubleshooting-guide-2026/)**. Para ajuda geral com ativação, consulte nosso **[Guia Completo para iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)**.


## Resumo Rápido: Transferência de eSIM entre iPhone e Android

| De | Para | SO Mínimo | Método |
|------|-----|------------|--------|
| iPhone (iOS 26) | Android (16+) | iOS 26.3 / Android 16 | Código QR + pareamento manual |
| Android (16+) | iPhone (iOS 26) | iOS 26 / Android 16 | Digitalização de QR (iPhone gera) |
| iPhone (iOS 18–25) | Qualquer | – | Não suportado diretamente – use código QR da operadora |
| Android (15 ou anterior) | Qualquer | – | Não suportado – atualize o SO ou contate a operadora |

**Operadoras suportadas** para **transferência de eSIM entre plataformas** (em abril de 2026):  
🇺🇸 AT&T, T‑Mobile, Verizon, FirstNet  
🇨🇦 Bell, Koodo, Lucky Mobile, Telus  
🇫🇷 Orange, SFR  
🇩🇪 Telekom  
🇯🇵 au, UQ  
🇲🇽 AT&T  
🇨🇭 Swisscom  
🇬🇧 EE  

*Se sua operadora não estiver listada, a transferência falhará. Use o método de código QR fornecido pela sua operadora. Para uma referência completa de dispositivos suportados, consulte nossa [lista de compatibilidade eSIM](/compatibility/).*


## Por que a Transferência de eSIM Entre Plataformas Muda Tudo

Antes do iOS 26, mover um eSIM de um Android para um iPhone significava:
- Ligar para a operadora (muitas vezes esperando na linha)
- Fornecer o EID e IMEI do novo dispositivo
- Esperar minutos ou horas por um novo código QR

Agora, com a **transferência nativa de eSIM entre plataformas**, o processo é totalmente self-service e leva menos de 60 segundos. Você não precisa mais entrar em contato com sua operadora – a transferência acontece diretamente entre os dispositivos.

### O que torna isso possível?

- **O iOS 26** introduziu o recurso `Transfer from Android` dentro das Configurações.
- **O Android 16** adicionou um menu recíproco `Pair with iPhone or iPad` em Serviços do Google.
- Ambas as versões do SO implementam a **especificação de transferência de eSIM para consumidores (SGP.22 v2.5+)** da GSMA, permitindo a migração segura de perfil peer‑to‑peer.

A [GSMA](https://www.gsma.com/esim/) define esses padrões técnicos que tornam possível a **transferência de eSIM entre plataformas**. [De acordo com anúncios oficiais da Telekom](https://www.telekom.com/en/media/media-information/archive/esim-transfer-1097076), o **eSIM da Telekom** foi o primeiro na Europa a suportar este recurso – os clientes da Telekom agora podem transferir seu eSIM entre iOS e Android sem nenhum aplicativo adicional. A página [Apple Support – eSIM no iPhone](https://support.apple.com/pt-br/118670) também confirma os requisitos de compatibilidade para dispositivos iOS.

> 🔒 Nota de segurança: A transferência é criptografada de ponta a ponta e exige que ambos os dispositivos estejam próximos com Bluetooth ativado. O eSIM antigo é automaticamente desativado no momento em que o novo dispositivo o ativa. Se você precisar corrigir qualquer peculiaridade do dual‑SIM após a **transferência de eSIM**, nosso **[Dual eSIM Não Funciona? 12 Correções para iPhone](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)** é um recurso útil.


## O Que Você Precisa Antes de Iniciar uma Transferência de eSIM

**Para ambas as direções:**
- Ambos os dispositivos devem estar **desbloqueados** (sem **bloqueio de operadora**). Para verificar no iPhone: `Configurações > Geral > Sobre` → `Bloqueio de Operadora` deve dizer "Sem restrições de SIM".
- Ambos os dispositivos têm **Bluetooth ligado**.
- Ambos os dispositivos estão conectados ao **Wi‑Fi** (ou pelo menos um tem uma conexão de dados celular funcionando).
- O eSIM que você deseja transferir está **ativo** no dispositivo de origem (não foi deletado ainda).
- Sua operadora **suporta transferência entre plataformas** (veja a lista acima). Se não, pule para os métodos alternativos.
- Seu **perfil eSIM** não está **expirado** – alguns perfis têm datas de validade limitadas.

**Para Android → iPhone:**
- O iPhone deve estar no **iOS 26 ou posterior**.
- O Android deve estar no **Android 16 ou posterior**.

**Para iPhone → Android:**
- O iPhone deve estar no **iOS 26.3 ou posterior** (o recurso de transferência direta para Android chegou no 26.3).
- O Android deve estar no **Android 16 ou posterior**.

> 🚨 Se seu dispositivo estiver em um SO mais antigo, a opção de menu simplesmente não aparecerá. Atualize primeiro. Se você estiver lidando com um **perfil eSIM expirado**, entre em contato com sua operadora para obter um novo código QR antes de iniciar a transferência.

A página [Google Support – eSIM no Pixel](https://support.google.com/pixel/answer/9912709) fornece detalhes adicionais para usuários Android que estão se preparando para transferir seu eSIM.


## O Que é Transferência de eSIM? Como Funciona a Tecnologia do Servidor SM‑DP+

Entender a tecnologia por trás da transferência de eSIM ajuda você a solucionar problemas quando as coisas dão errado.

### O Papel do Servidor SM‑DP+

Quando você transfere um eSIM, o processo não acontece diretamente entre os dois telefones. Aqui está o que realmente acontece:

1. **O dispositivo de origem** gera uma solicitação de transferência criptografada.
2. **O servidor SM‑DP+ da operadora** (Preparação de Dados do Gerenciador de Assinatura) recebe esta solicitação.
3. **O servidor verifica** se o perfil é elegível para transferência (perfil ativo, operadora suporta transferência, etc.).
4. **O servidor gera** um novo token de segurança e o transmite ao dispositivo de destino.
5. **O dispositivo de destino** baixa o perfil e o ativa.
6. **O servidor desativa** o perfil no dispositivo de origem.

Este processo é totalmente automatizado e não requer intervenção humana da operadora – desde que a operadora tenha ativado este recurso.

### Por que o Erro "Sessão Expirada" Acontece

O código QR gerado durante a transferência contém um token de segurança sensível ao tempo. Se você não completar a digitalização dentro de **3 minutos**, o token expira por razões de segurança. Isso evita transferências não autorizadas se alguém interceptar o código QR. Se você vir este erro, simplesmente reinicie o processo e digitalize imediatamente.

### Por que Bluetooth e Wi‑Fi São Necessários

- **Bluetooth** permite a descoberta do dispositivo e o pareamento seguro entre os dois telefones.
- **Wi‑Fi** permite que o dispositivo de destino baixe o perfil de eSIM do servidor SM‑DP+ da operadora.

Ambos são essenciais – a transferência não funcionará sem nenhum deles.

A [GSMA](https://www.gsma.com/esim/) define esses padrões técnicos que garantem que a **ativação de eSIM** e o **download do perfil eSIM** funcionem com segurança entre dispositivos e operadoras em todo o mundo.


## Método A: Transferência de eSIM do Android para o iPhone (iOS 26+)

Este é o cenário mais comum – mudar de um Samsung, Pixel ou outro Android para um novo iPhone. Para uma **transferência de eSIM do Android para o iPhone** bem-sucedida, siga estes passos:

### Passo a passo

**No seu Android (dispositivo de origem):**
1. Desbloqueie o telefone e ative o Bluetooth.
2. Mantenha-o próximo ao iPhone (dentro de 10 cm).

**No seu iPhone (destino):**
1. Vá em `Configurações` → `Celular` → `Adicionar eSIM`.
2. Toque em `Transferir do Android`. Um código QR aparecerá na tela do iPhone.
   - *Se você não vir esta opção, atualize para o iOS 26.*
3. No seu telefone Android, abra o aplicativo **câmera**.
4. Digitalize o código QR mostrado no iPhone.
5. Uma notificação aparecerá: "Transferência de eSIM detectada". Toque nela.
6. Selecione o número de telefone (perfil eSIM) que deseja transferir.
7. Toque em `Transferir`. O Android mostrará "Preparando transferência…"
8. No iPhone, um pop-up de confirmação aparece – toque em `Continuar`.
9. Aguarde 10–30 segundos. O iPhone dirá "Ativação concluída".
10. O Android mostrará "eSIM removido" – isso é normal.

✅ **Pronto.** Seu número agora está ativo no iPhone. O eSIM do Android é automaticamente desativado e não pode ser usado novamente. Esta é a maneira mais limpa de realizar uma **transferência de eSIM do Android para o iPhone**.

### E se a digitalização pela câmera não funcionar?

Use a alternativa de **pareamento manual**:

- No iPhone, após tocar em `Transferir do Android`, escolha `Outras opções` abaixo do código QR.
- O iPhone mostra um **ID de sessão** e um **código de pareamento de 6 dígitos**.
- No Android: `Configurações` → `Serviços do Google` → `Todos os serviços` → `Pair with iPhone or iPad` → `Transferir eSIM`.
- Insira o ID de sessão e o código de pareamento manualmente.
- Prossiga com a transferência.

Se você vir um erro **"não foi possível ativar esim"** durante este processo, verifique sua conexão Wi‑Fi e tente novamente. Para mais ajuda, consulte nosso [guia de solução de problemas de eSIM](/faq/eSIM-Deep-Troubleshooting-Guide-2026/).


## Método B: Transferência de eSIM do iPhone para o Android (iOS 26.3+)

A Apple adicionou esta capacidade no **iOS 26.3** (lançado no início de 2026). O processo é semelhante, mas iniciado a partir do iPhone. Este é o método para **transferência de eSIM do iPhone para o Android**.

### Pré‑requisitos
- iPhone no **iOS 26.3 ou posterior**
- Android no **Android 16 ou posterior**
- Ambos os dispositivos na mesma Wi‑Fi ou com Bluetooth ligado

### Passos

**No seu iPhone (origem):**
1. Vá em `Configurações` → `Celular`.
2. Toque no eSIM que deseja transferir.
3. Role para baixo e toque em `Transferir para Android` (ou `Transferir eSIM` em uma nova seção "Transferir para Android" – a redação exata varia por operadora).
   - *Se você não vir isso, ou sua operadora não suporta ou você precisa do iOS 26.3.*
4. Um código QR aparece. Mantenha esta tela ligada.

**No seu Android (destino):**
1. Vá em `Configurações` → `Serviços do Google` → `Todos os serviços` → `Pair with iPhone or iPad`.
2. Toque em `Transferir eSIM`.
3. Digitalize o código QR exibido no iPhone.
4. Selecione o número (se houver vários eSIMs no iPhone).
5. Toque em `Transferir`.
6. No iPhone, clique duas vezes no botão lateral para confirmar a transferência (autenticação biométrica necessária).
7. Aguarde a ativação no Android. O iPhone mostrará "eSIM removido" após a conclusão.

✅ Pronto. Seu número agora está no telefone Android. Isso conclui a **transferência de eSIM do iPhone para o Android**.

> ⚠️ **Importante**: Uma vez que a transferência é concluída, o eSIM é **removido permanentemente** do iPhone. Você não pode reverter sem sua operadora. Certifique‑se de ter outra linha ativa ou Wi‑Fi antes de transferir.

Para instruções detalhadas entre plataformas, consulte nosso guia **[Transferência de eSIM Entre Plataformas 2026](/faq/How-to-Transfer-eSIM-Between-iPhone-and-Android/)**.


## Transferir eSIM para Novo iPhone ou Samsung – Transferências Intra‑Plataforma

Embora a transferência entre plataformas seja o foco deste guia, muitos usuários simplesmente querem mover um eSIM dentro do mesmo ecossistema. Aqui está como:

### iOS → iOS (iPhone para iPhone)

A **Transferência Rápida** integrada da Apple é o método mais fácil:

1. Durante a configuração do seu novo iPhone, escolha "Transferir eSIM do iPhone próximo" quando solicitado.
2. Mantenha ambos os telefones próximos com Bluetooth e Wi‑Fi ativados.
3. Confirme a transferência no seu iPhone antigo.
4. Aguarde 1‑2 minutos para que o **download do perfil eSIM** seja concluído no novo dispositivo.

**Se a Transferência Rápida não funcionar:** Vá em Configurações > Celular no seu novo iPhone > Adicionar eSIM > Transferir do iPhone próximo. Este método lida com a **transferência de eSIM para novo iPhone** sem problemas.

### Android → Android (Samsung, Pixel, etc.)

Os métodos de transferência no Android variam por marca:

**Samsung:** Configurações > Conexões > Gerenciador de SIM > Adicionar eSIM > Transferir eSIM do dispositivo antigo (siga as instruções na tela). Isso funciona para **transferir eSIM Samsung para Samsung**.

**Google Pixel:** Durante a configuração, você pode ser solicitado a transferir seu eSIM. Alternativamente, use o aplicativo da operadora ou solicite um novo código QR.

**Android geral:** Se sua marca não oferecer transferência integrada, use o método alternativo de código QR da operadora.

### Diferenças entre Transferência Entre Plataformas e Intra‑Plataforma

| Recurso | Entre Plataformas | Intra‑Plataforma |
|---------|----------------|----------------|
| **iOS ↔ iOS** | N/A | ✅ Transferência Rápida funciona |
| **Android ↔ Android** | N/A | ✅ Métodos específicos por marca |
| **iOS ↔ Android** | ✅ Coberto neste guia | ❌ Não suportado diretamente |
| **Dependência da operadora** | Maior | Menor (Apple/Google lidam com isso) |
| **Taxa de sucesso** | 80‑95% (depende da operadora) | 95‑99% |

Para uma análise mais aprofundada do comportamento específico do eSIM por dispositivo, consulte nosso **[Guia Completo para iPhone 17 eSIM](/faq/2026-Ultimate-Guide-iPhone-17-eSIM-Activation-Solutions/)** (também aplicável a muitos modelos mais antigos).


## Operadoras Suportadas para Transferência de eSIM Entre Plataformas (Detalhado)

| País | Operadoras Confirmadas | Notas |
|---------|--------------------|-------|
| USA | AT&T, FirstNet, T‑Mobile, Verizon | Todas suportadas a partir de 2026 |
| Canadá | Bell, Koodo, Lucky Mobile, Telus | |
| França | **Orange, SFR** | Free e Bouygues não suportados |
| Alemanha | Deutsche Telekom (Telekom) | Primeira operadora europeia a oferecer isso |
| Japão | au, UQ (UQ Mobile) | |
| México | AT&T | |
| Suíça | Swisscom | |
| Reino Unido | EE | |

**Não suportado (em abril de 2026):**
- Vodafone (qualquer país) – eles usam um sistema de transferência proprietário
- Three (Reino Unido e outros mercados)
- Google Fi (exige reemissão de código QR)
- A maioria dos eSIMs pré‑pagos / MVNO (ex., Airalo, Holafly, Nomad) – são apenas dados e não podem ser transferidos

Para uma **transferência de eSIM Orange**, o recurso está disponível desde o iOS 26. Para uma **transferência de eSIM SFR**, também é suportado. A **transferência de eSIM Telekom** foi uma das primeiras na Europa.

👉 **Como verificar se sua operadora suporta no iPhone?**  
Tente os passos no Método A ou B. Se a opção "Transferir do Android" ou "Transferir para Android" estiver faltando, sua operadora não suporta. Você precisará usar os métodos alternativos abaixo.


## Métodos Alternativos Quando a Transferência de eSIM Entre Plataformas Não É Suportada

Se sua operadora não estiver na lista, ou você vir um **erro de transferência eSIM**, use uma destas alternativas:

### Opção 1: Código QR emitido pela operadora (funciona sempre)
1. Ligue ou converse com sua operadora.
2. Diga: "Estou mudando de Android para iPhone (ou vice‑versa). Por favor, reemita meu eSIM como um novo código QR."
3. Eles enviarão um código QR ou um link de ativação por e‑mail.
4. No novo dispositivo, vá em `Configurações` → `Celular` → `Adicionar eSIM` → `Usar código QR` e digitalize.
5. O eSIM do dispositivo antigo parará de funcionar após a ativação do novo.

**Dica**: Algumas operadoras cobram uma pequena taxa (ex., $2–$5) para reemitir um eSIM.

### Opção 2: Transferência pelo aplicativo da operadora
- **Orange França**: App Orange → "Meu espaço eSIM" → "Transferir para novo dispositivo".
- **SFR França**: App SFR & Moi → "Gerenciar meu SIM" → "Transferir eSIM".
- **T‑Mobile (USA)**: App T‑Mobile → "Gerenciar eSIM" → "Transferir para novo dispositivo".
- **Verizon**: App "My Verizon" → "Ativar ou trocar dispositivo" → siga as instruções.
- **EE Reino Unido**: App EE → "Plano" → "transferência eSIM".

### Opção 3: Entrada manual SM‑DP+ (avançado)
Se sua operadora fornecer um **código de ativação** e **endereço SM‑DP+**, você pode adicionar manualmente o eSIM no novo dispositivo:
1. `Configurações` → `Celular` → `Adicionar eSIM` → `Inserir Detalhes Manualmente`.
2. Cole o endereço SM‑DP+ e o código de ativação.
3. Toque em `Próximo`. Isso funciona tanto no iPhone quanto no Android.


## Solução de Problemas: Por que Minha Transferência de eSIM Falhou?

Com base em casos reais de usuários e na documentação interna da Apple, aqui estão as razões de falha mais comuns e correções para **solução de problemas de eSIM**:

| Erro / Sintoma | Causa Mais Provável | Correção |
|----------------|-------------------|-----|
| "Transferência não disponível – operadora não suportada" | Sua operadora não suporta transferência entre plataformas. | Use os métodos alternativos acima. |
| O código QR digitaliza, mas diz "sessão expirada" | Você demorou muito (>3 minutos) após gerar o QR. | Repita o processo e digitalize imediatamente. |
| Android diz "Falha no pareamento" | Bluetooth ou permissões de rede local bloqueadas. | No iPhone: `Configurações > Privacidade e Segurança > Rede Local` – certifique‑se de que `Configurações` esteja ATIVADO. No Android: desative "verificação de segurança Wi‑Fi" (geralmente em configurações avançadas de Wi‑Fi). |
| A transferência começa, mas para em 50% | Wi‑Fi ou sinal celular fraco. | Aproxime ambos os telefones do roteador. Desative a VPN em ambos os dispositivos. |
| **"eSIM já vinculado a outro dispositivo"** | O perfil não foi devidamente liberado do dispositivo antigo. | No dispositivo antigo, vá em `Configurações > Celular` e delete manualmente o `eSIM` (se ainda estiver visível). Aguarde 5 minutos e tente novamente. Se ainda falhar, contate a operadora para liberar o perfil. Para mais casos como este, consulte nosso **[Guia de Solução de Problemas de eSIM (16 casos reais)](/faq/esim-deep-troubleshooting-guide-2026/)**. |
| O iPhone pede **código de confirmação** após a digitalização | O perfil eSIM tem um **código de confirmação eSIM** obrigatório (raro). | Procure o código no e‑mail da operadora (geralmente 4–8 dígitos). Se não for encontrado, pergunte à operadora. |
| Clicar duas vezes no botão lateral não faz nada (iPhone → Android) | Autenticação biométrica não configurada ou desativada. | Configure o Face ID / Touch ID, ou desative temporariamente "Exigir Atenção" para o Face ID. |
| **eSIM sem serviço** após a transferência | Configurações de APN não configuradas. | Configure o APN manualmente (veja a tabela abaixo). |
| **Perfil eSIM expirado** | O perfil tem uma data de validade limitada. | Entre em contato com sua operadora para obter um novo código QR. |
| **eSIM DFU erro 53** | Problema de hardware/baseband (raro). | Contate o Suporte Apple – isso geralmente indica um problema no componente de hardware. |

### Configuração Manual de APN

Se após a **transferência de eSIM** você tiver **eSIM sem serviço**, configure o APN manualmente:

| Operadora | APN | Usuário | Senha |
|---------|-----|----------|----------|
| **Orange** | orange.fr | (em branco) | (em branco) |
| **SFR** | sl2sfr | (em branco) | (em branco) |
| **Free** | free | (em branco) | (em branco) |
| **Bouygues** | ebouygtel.com | (em branco) | (em branco) |
| **T‑Mobile (USA)** | fast.t-mobile.com | (em branco) | (em branco) |
| **AT&T (USA)** | nxgen | (em branco) | (em branco) |
| **Verizon (USA)** | vzwinternet | (em branco) | (em branco) |
| **Telekom (DE)** | internet.telekom | (em branco) | (em branco) |

### Ainda preso?
Colete estas informações antes de ligar para o suporte:
- IMEI e EID do dispositivo de origem
- IMEI e EID do dispositivo de destino
- A mensagem de erro exata (tire uma captura de tela)


## O Que Acontece com o eSIM Antigo Após a Transferência?

**Ele é imediatamente desativado.**  

O dispositivo antigo mostrará "Sem Serviço" para essa linha. O **perfil eSIM** permanece visível no dispositivo antigo por 24–48 horas (como uma entrada "fantasma"). Você pode deletá‑lo manualmente:  
`Configurações > Celular > toque no eSIM antigo > Delete eSIM`.

> 💰 **Cobrança**: Sua operadora continuará cobrando pelo plano. Transferir não cancela o plano – apenas move o SIM. Para cancelar, você deve contatar a operadora separadamente.

Se você está preocupado com erros de **eSIM vinculado a outro dispositivo**, sempre delete o perfil antigo do dispositivo de origem após a conclusão bem‑sucedida da transferência.


## Após a Transferência de eSIM – Migração de WhatsApp, iMessage e 2FA

Após transferir com sucesso seu eSIM, você precisa configurar seus aplicativos de mensagens e serviços de autenticação no novo dispositivo.

### WhatsApp (iPhone e Android)

O WhatsApp usa seu número de telefone para identificar sua conta. Após a **transferência de eSIM**:

1. Abra o WhatsApp no seu novo dispositivo.
2. Insira seu número de telefone (aquele que você transferiu).
3. Você receberá um código de verificação via SMS ou chamada automatizada para o seu número.
4. Insira o código – suas conversas reaparecerão se você fez backup anteriormente.

**Dica:** Faça backup das suas conversas antes de iniciar a transferência. No iPhone: WhatsApp > Configurações > Conversas > Backup de Conversas. No Android: WhatsApp > Configurações > Conversas > Backup.

### iMessage e FaceTime (apenas iPhone)

1. Vá em `Configurações` → `Mensagens` e ative o `iMessage`.
2. Vá em `Configurações` → `FaceTime` e ative o `FaceTime`.
3. Aguarde 1‑2 minutos para a ativação. Se disser "Aguardando ativação", desative e ative novamente.
4. Verifique se seu número está selecionado: Configurações > Mensagens > Enviar e Receber → selecione seu número de eSIM.

### Autenticação de Dois Fatores (2FA) e Verificação por SMS

Como seu número de telefone não mudou, os códigos 2FA baseados em SMS funcionarão normalmente. No entanto, autenticadores baseados em aplicativos (Google Authenticator, Microsoft Authenticator, Authy) podem exigir reconfiguração:

- **Authy:** Seus tokens são criptografados e salvos em nuvem – basta fazer login no novo dispositivo.
- **Google Authenticator:** Você precisará transferir suas contas individualmente ou usar o recurso "Transferir contas".
- **Microsoft Authenticator:** Use o recurso de backup para restaurar no novo dispositivo.

### Aplicativos Bancários e Serviços Financeiros

A maioria dos bancos detectará a mudança de dispositivo e exigirá reautenticação. Tenha suas credenciais de login e quaisquer dispositivos de token físico prontos.

Para mais ajuda com a migração de aplicativos após a **transferência de eSIM**, consulte nosso [guia de configuração de eSIM](/faq/how-to-activate-an-esim/).


## Melhores Práticas para Evitar Dores de Cabeça com a Transferência

✅ **Antes de transferir:**
- Verifique o suporte da operadora (tente o menu – se estiver lá, é suportado).
- Atualize ambos os telefones para o SO mais recente (iOS 26 / Android 16).
- Carregue ambos os telefones acima de 30%.
- Desative VPN e bloqueadores de anúncios temporariamente.
- Verifique se seu **perfil eSIM** não está **expirado**.
- Faça backup do WhatsApp e outros aplicativos de mensagens.

✅ **Durante a transferência:**
- Mantenha os telefones a menos de 10 cm (4 polegadas) um do outro.
- Não alterne aplicativos ou bloqueie a tela.
- Não desligue o Bluetooth ou Wi‑Fi.

✅ **Após a transferência:**
- Teste chamadas e dados no novo dispositivo.
- Delete o eSIM antigo do dispositivo de origem para evitar confusão.
- Mantenha o Wi‑Fi do dispositivo antigo ligado por pelo menos uma hora – algumas operadoras precisam de um handshake final.
- Reative WhatsApp, iMessage e aplicativos 2FA.
- Teste códigos de verificação SMS do seu banco.


## Viajando e Transferindo eSIM – O Que Você Precisa Saber

Se você estiver viajando para o exterior e precisar transferir seu eSIM, aqui estão alguns pontos importantes:

### Transferindo um eSIM Durante a Viagem
- A transferência entre plataformas funciona **em todo o mundo** desde que sua operadora a suporte.
- Certifique‑se de ter uma conexão Wi‑Fi estável (hotel, café) antes de começar.
- Se a transferência falhar, o método alternativo de código QR da operadora é sua melhor opção.
- Verifique as **configurações de APN do eSIM** após a transferência – algumas operadoras exigem configuração manual.

### Operadoras Francesas e Viagem
- **Orange** e **SFR** permitem transferência entre plataformas onde quer que você esteja.
- **Free** e **Bouygues** exigem a reemissão de um código QR – faça isso antes de sair.
- Para **eSIMs de viagem**, lembre‑se de que eles geralmente **não são transferíveis** – compre um novo plano no seu novo dispositivo.

### O Que Fazer Se Sua Transferência Falhar Durante a Viagem

1. Conecte‑se ao Wi‑Fi gratuito mais próximo (aeroportos, hotéis, cafés).
2. Entre em contato com o suporte da sua operadora por e‑mail ou aplicativo de mensagens.
3. Peça para reemitirem seu eSIM como um código QR.
4. Digitalize o código QR no seu novo dispositivo.

### Dicas para Viajantes Frequentes
- Sempre mantenha uma cópia de backup dos seus códigos QR de eSIM.
- Se você trocar de telefone no meio da viagem, prefira a transferência nativa ao código QR quando possível.
- Para múltiplos destinos, considere um [plano de eSIM global](/plans/) que cubra vários países.
- Salve as informações de contato do suporte da sua operadora antes de viajar.

Para mais informações sobre o uso de eSIMs durante viagens, consulte nosso [guia eSIM para Viagem 2026](/faq/Travel-eSIM-2026-How-to-Avoid-Roaming-Fees-Stay-Connected-Abroad/).


## Perguntas Frequentes

**P1: Posso transferir um eSIM apenas para dados (como um eSIM de viagem)?**  
Não. A maioria dos eSIMs de viagem (Airalo, Holafly, Nomad, etc.) não suporta transferência entre plataformas. Eles são projetados para serem instalados uma vez por dispositivo. Você precisará comprar um novo plano no seu novo telefone.

**P2: A transferência funciona entre um iPhone 11 e um Samsung S24?**  
Sim – desde que ambos atendam aos requisitos de SO. O iPhone 11 suporta iOS 26 (ele roda até iOS 26). O Samsung S24 suporta Android 16. A geração do hardware não importa; apenas a versão do SO importa.

**P3: Tentei os passos, mas meu Android não tem "Pair with iPhone or iPad". Por quê?**  
Esse menu faz parte dos Serviços do Google e só aparece no Android 16+ com os Serviços do Google Play atualizados. Vá em `Configurações > Sobre o telefone > Versão do Android`. Se for 15 ou anterior, atualize seu telefone ou use o método alternativo (código QR da operadora).

**P4: Meu WhatsApp / iMessage / códigos 2FA ainda funcionarão após a transferência?**  
O WhatsApp usa seu número de telefone – ele detectará a mudança de SIM e pode pedir para re‑verificar (geralmente automático). O iMessage no iPhone usa o número do eSIM e deve reativar dentro de um minuto. Para 2FA, serviços que enviam SMS para seu número funcionarão normalmente – o número não mudou. Veja a Seção 10 para passos detalhados de migração.

**P5: Posso transferir o mesmo eSIM de volta várias vezes?**  
Sim, mas cada transferência exige o mesmo processo. Algumas operadoras limitam as transferências a 3–5 vezes por ano para evitar abusos. Se você atingir o limite, elas pedirão que você vá a uma loja ou ligue para o suporte.

**P6: E sobre configurações de dual‑SIM com eSIM + SIM físico?**  
A transferência move apenas o eSIM. O SIM físico permanece no dispositivo de origem. Se você quiser mover ambos, precisará transferir o eSIM (usando este guia) e mover fisicamente o cartão nano‑SIM para o novo dispositivo. Para otimizar experiências de dual‑SIM após a transferência, consulte nosso **[Dual eSIM Não Funciona? 12 Correções para iPhone](/faq/Dual-eSIM-Not-Working-12-Fixes-for-iPhone/)**.

**P7: E se eu receber um erro "perfil eSIM expirado" durante a transferência?**  
Entre em contato com sua operadora para obter um novo código QR – a reemissão geralmente é gratuita.

**P8: Por que o bloqueio da minha operadora me impede de transferir?**  
Se seu telefone estiver sob **bloqueio de operadora**, você só pode transferir um eSIM para um dispositivo da mesma operadora. Entre em contato com sua operadora (Orange, SFR, Free, Bouygues) para desbloquear o dispositivo antes da transferência.

**P9: Posso transferir um eSIM Orange para um dispositivo não‑Orange?**  
Sim, se seu dispositivo estiver desbloqueado e seu plano Orange permitir. A **transferência de eSIM Orange** é suportada via aplicativo Orange ou transferência nativa.

**P10: A transferência funciona com um eSIM Free?**  
Não – a Free não suporta transferência entre plataformas. Use o método alternativo de código QR do portal do cliente Free.

**P11: O que é um código de confirmação de eSIM e onde o encontro?**  
Alguns perfis de eSIM têm um **código de confirmação eSIM** obrigatório – normalmente 4‑8 dígitos. Procure‑o no e‑mail da operadora ou nas instruções de ativação. Se não for encontrado, pergunte à sua operadora.

**P12: O que significa "eSIM não transferindo para novo telefone"?**  
Isso geralmente significa que sua operadora não suporta transferência, o código QR expirou ou o eSIM antigo ainda está ativo. Delete o eSIM antigo primeiro, depois tente novamente. Veja a Seção 7 para a tabela completa de solução de problemas.

**P13: Como corrigir "falha na ativação eSIM" após a transferência?**  
Verifique sua conexão Wi‑Fi, reinicie ambos os dispositivos e tente novamente. Se ainda falhar, use o método de entrada manual com o endereço SM‑DP+ do e‑mail da sua operadora. Para mais ajuda, consulte nosso [Guia de Solução de Problemas de eSIM](/faq/eSIM-Deep-Troubleshooting-Guide-2026/).


## Conclusão Final

A capacidade de transferir eSIMs entre iPhone e Android sem intervenção da operadora é uma **mudança de jogo em 2026**. Remove o último grande ponto de fricção para mudar de ecossistema. Contanto que sua operadora esteja na lista suportada (Orange ou SFR na França) e ambos os telefones estejam atualizados, você pode mover seu número em menos de um minuto.

**Lembre‑se**: Se sua operadora não for suportada, o método alternativo de código QR ainda funciona – só exige uma chamada telefônica. E para eSIMs de viagem, trate‑os como de uso único; compre um novo em cada dispositivo. Se você encontrar mensagens persistentes de **erro de transferência eSIM**, nosso **[Guia de Solução de Problemas de eSIM (16 casos reais)](/faq/esim-deep-troubleshooting-guide-2026/)** cobre soluções avançadas.

---

*Informações baseadas na documentação oficial do Apple iOS 26 e Android 16, padrões GSMA e testes de operadoras em junho de 2026. Recursos e suporte da operadora estão sujeitos a alterações.*