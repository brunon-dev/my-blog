---
title: Configurações do MetaTrader
description: Aprenda as configurações básicas no MetaTrader 5 para começar a
  trabalhar com a plataforma.
date: 2018-11-21T04:38:38.000Z
image: assets/img/configuracao-metatrader.png
category: mt5
background: "#7D669E"
---
## Primeiras configurações

Depois da instalação da plataforma, é preciso fazer as configurações do MetaTrader para iniciar seu uso. Primeiramente é preciso entender como encontrar os ativos que quer acompanhar. Ao acessar a ferramenta pela primeira vez pode ser confuso olhar a lista de ativos na janela “Observação de Mercado”. Isto porque são exibidos muitas opções. Com o objetivo de facilitar essa visualização, você pode seguir o passo a passo abaixo:

1. Primeiramente, clicar com o botão direito do mouse sobre a janela e escolher a opção “Ocultar Tudo”.

![Ocultando todos os ativos](assets/img/01-ocultar-ativos.png "Ocultar ativos")

2. Assim, com a lista vazia, clique sobre o item “+ click to add…” e digite o ativo que vai querer acompanhar. Pode ser ativos da B3 (ex.: PETR3, VALE3), um contrato de mini índice (ex.: WINZ18), a série contínua do mini índice (WIN$), entre outras possibilidades. Vamos ver mais detalhes sobre os contratos de mini índice e a série contínua em um dos nossos próximos vídeos.

![Adicionando ativos específicos na lista](assets/img/02-click-to-add.png "Possibilidade de adicionar ativos na lista")

![Ativos selecionados para exibição](assets/img/03-ativos-selecionados.png "Lista de ativos selecionados")

3. Também é possível abrir o gráfico para um ou mais dos ativos selecionados clicando sobre ele com o botão direito do mouse e escolhendo a opção “Janela do Gráfico”.

![Abrindo gráfico para um ativo](assets/img/04-janela-do-grafico.png "Opção Janela do Gráfico")

4. Ao abrir várias janelas de gráfico é possível acessá-las através do menu principal, opção “Janela”, além de ter opções para organizar as mesmas (ex.: com a opção “Lado a lado”).

![Organizando as janelas no MetaTrader](assets/img/05-organizacao-janela.png "Opções para organização de janelas")

## Configurações dos gráficos

Outras alterações importantes estão relacionadas com gráficos. Uma das configurações mais importantes está relacionada com o tipo de gráfico.

1. Primeiramente, no menu principal do sistema selecionar a opção “Gráficos”.
2. Logo depois, escolher entre as opções “Gráfico de barras”, “Gráfico de velas (Candles)” e “Gráfico de linha”.

![Tipos de gráficos disponíveis](assets/img/06-menu-grafico.png "Opções de tipos de gráfico")

3. Uma segunda opção é clicar com o botão direito do mouse sobre o gráfico. As opções exibidas são as mesmas.

![Menu suspenso com opções de gráfico](assets/img/07-tipos-grafico.png "Opções de gráfico no menu do botão direito do mouse")

4. Também é possível usar as teclas de atalho: “Alt + 1” (barra), “Alt + 2” (velas) e “Alt + 3” (linha).

Outra opção interessante relacionada às configurações do MetaTrader está relacionada com as cores do gráfico. É possível fazer diversas customizações neste sentido, como mostramos no passo a passo abaixo:

1. Antes de mais nada, no menu principal selecionar a opção “Gráficos” -> “Propriedades” (ou botão direito sobre o gráfico e opção “Propriedades”).
2. Logo depois, selecionar a guia “Cores”.

![Cores disponíveis para o gráfico](assets/img/08-propriedades-cores.png "Opções de cores nas propriedades do gráfico")

3. Assim, é possível escolher um “Esquema” pré-estabelecido ou definir um novo.
4. Nesse sentido, como exemplo podemos escolher o “Esquema” “Black on White” e ainda alterar as cores do “Candle de Alta” e do “Candle de Baixa”.

## Salvando um template

Caso queira aproveitar as configurações do MetaTrader definidas até o momento para outros gráficos, é possível salvar como um template. Nesse sentido, o passo a passo abaixo mostra como fazer:

1. Primeiramente, clicar sobre o gráfico cujas propriedades serão definidas como template e escolher a opção “Gráficos” -> “Templates (modelos)” -> “Salvar Template…”. A opção “Templates (modelos)” -> “Salvar Template…” também fica disponível no clique com botão direito do mouse sobre o gráfico.

2. Logo depois, definir um nome para o modelo, que será salvo em diretório específico da ferramenta.

![Usando a opção de salvar um template](assets/img/09-salvar-template.png "Salvando um template")

3. Para definir um determinado template como padrão da ferramenta, basta nomear o mesmo como “default” no momento que for salvar.

## Indicadores

Além da customização de cores, também é possível incluir indicadores no gráfico. Podemos, por exemplo, incluir o indicador de média móvel (Moving Average).

1. Primeiramente, escolher no menu principal a opção “Inserir” -> “Indicadores” -> “Tendência” -> “Moving Average”.

![Indicador de média móvel no MetaTrader](assets/img/10-indicador-media-movel.png "Opção para incluir indicador de média móvel")

2. Assim, será exibida a janela para configuração do indicador, com algumas opções como o período da média móvel e o estilo (com linha contínua, definindo largura e cor, por exemplo).

![Configurando o indicador média móvel](assets/img/11-config-media-movel.png "Janela de configuração de média móvel")

3. Além disso, também é possível incluir um indicador pela janela “Navegador”. No nosso exemplo, basta expandir “Indicadores” -> “Tendência”, clicar sobre “Moving Average” e arrastar para o gráfico onde se quer usar.

![Janela Navegador, com os indicadores disponíveis](assets/img/12-navegador-indicadores.png "Indicadores na janela Navegador")

## Alterando o timeframe dos gráficos

É possível ainda alterar os tempos do gráfico. Por padrão os gráficos são exibidos com intervalos de 1 hora. Para customizar, baste seguir a orientação abaixo:

Antes de mais nada, no menu principal, opção “Gráficos” -> “Timeframes” e escolher uma das opções disponíveis.

![Escolha do timeframe do gráfico](assets/img/13-timeframe.png "Opções relacionadas ao timeframe do gráfico")

Da mesma forma, a opção “Timeframes” também fica disponível ao clicar com botão direito do mouse sobre o gráfico.

Por fim, no vídeo abaixo mostramos em detalhes as configurações feitas neste post. Além disso, não deixe de se inscrever no canal e ativar as notificações, para ser avisado quando forem publicados novos conteúdos.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l6LwUixHCwo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>