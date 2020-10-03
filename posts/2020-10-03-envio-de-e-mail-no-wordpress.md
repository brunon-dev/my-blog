---
title: Envio de e-mail no WordPress
description: Entenda e configure um plugin para envio de e-mails no WordPress
date: 2017-10-13T05:14:00.000Z
image: assets/img/post_mail.png
category: wp
background: "#459EDE"
---
## Enviando e-mail de forma simples

Um dos pontos importantes em muitos sites é configurar o envio de e-mails. Quando definimos um formulário de contato, por exemplo, é importante definir uma configuração que permita que esse contato seja enviado para um e-mail que tenhamos acesso com frequência. Para configurar o envio de e-mail no WordPress é bem simples, porque podemos utilizar um dos vários plugins de SMTP disponibilizados pela comunidade. Neste post vamos mostrar como utilizar o WP Mail SMTP by WPForms.

## Envio de e-mail no WordPress

Para envio de e-mail no WordPress é preciso configurar um servidor SMTP. A plataforma já depende de um servidor HTTP (ex.: Apache), do PHP e do MySQL para rodar corretamente, mas isso não é suficiente para enviar e-mails.

![Dependências do WordPress e de envio de e-mail](assets/img/smtp.png "Servidor SMTP para envio de e-mail")

Explicamos isso melhor, teoria e prática, no nosso curso no Udemy WordPress Prático – Aprenda criando 4 sites reais.

## Partindo para a prática

O primeiro passo é escolher a opção “Plugins” na área administrativa, seguida de “Adicionar novo”. No diretório de plugins do WordPress é possível fazer busca por palavra chave e para facilitar busque por “WP Mail SMTP”

![Busca de plugin por palavra-chave](assets/img/busca-plugin.png "Buscando plugin para envio de e-mail")

Entre os diversos plugins retornados pela busca, utilizar o plugin “WP Mail SMTP by WPForms”. Olhando os critérios de avaliação de plugins ele tem muitas instalações (700.000+), 4.5 estrelas e a última atualização foi a menos de 1 ano. Por isso ele é uma boa opção para envio de e-mail no WordPress.

![Características do plugin de e-mail recomendado](assets/img/plugin.png "Plugin \\"WP Mail SMTP by WPForms\\"")

Depois de instalado e ativado, é possível acessar as configurações de e-mail através da opção de menu “Configurações” -> “Mail”.

![Opção "Email" entre as opções do WP](assets/img/configuracoes-mail-111x300.png "Novo item no menu do WordPress")

Neste exemplo vamos configurar o envio de e-mail no WordPress com o SMTP do Gmail, já que é uma excelente ferramenta e gratuita. A primeira configuração é a “From Email”, em que você vai usar o e-mail do Gmail que você acessa com frequência.

![Definindo as primeiras configurações](assets/img/email-options.png "Configurações iniciais do plugin")

O passo seguinte é configurar o campo “SMTP Host” com o valor “smtp.gmail.com” e o campo “SMTP Port” com o valor “465”. Essas informações são usadas para identificar o Gmail como servidor de SMTP, responsável pelo envio. Outras configurações importantes:

* Em “Encryption” configurar a opção “Use SSL encryption”.
* Campo “Authentication” com valor “Yes: Use SMTP authentication”.
* “Username” com o mesmo e-mail definido em “From Email”.
* “Password” com a senha de acesso do Gmail.

![Define configurações de host, porta e autenticação do SMTP](assets/img/smtp-options.png "Cofigurações de SMTP")

No vídeo abaixo é exibido o passo-a-passo da instalação e da configuração do plugin. Com ele é possível fazer envio de e-mail no WordPress.

<iframe width="560" height="315" src="https://www.youtube.com/embed/B_07CYfKjss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>