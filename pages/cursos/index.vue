<template lang="html">
  <section class="text-gray-500 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/2" v-for="post in posts" :key="post.id">
          <div class="h-full flex flex-col rounded-lg overflow-hidden bg-gray-800 shadow-lg">
            <img class="h-64 w-full object-cover object-center" :src="post.better_featured_image.source_url" alt="blog">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-white mb-3 uppercase" v-html="post.title.rendered">Título</h1>
              <p class="h-32 leading-relaxed mb-3" v-html="post.excerpt.rendered">Resumo</p>
              <div class="flex items-center flex-wrap">
                <nuxt-link :to="'/blog/' + post.slug" class="text-yellow-600 inline-flex items-center md:mb-2 lg:mb-0">Ler post completo
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </nuxt-link>
                <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: // 20200617230725
// http://api.protiro.com.br/wp-json/wp/v2/posts?job-type=cursos

[
  {
    "id": 733,
    "date": "2019-05-29T15:29:31",
    "date_gmt": "2019-05-29T18:29:31",
    "guid": {
      "rendered": "http://api-protiro-com-br.umbler.net/?p=733"
    },
    "modified": "2019-05-29T15:29:33",
    "modified_gmt": "2019-05-29T18:29:33",
    "slug": "o-que-e-everyday-carry-edc",
    "type": "post",
    "link": "https://api.protiro.com.br/o-que-e-everyday-carry-edc/",
    "title": {
      "rendered": "O QUE É “ EVERYDAY CARRY” ? (EDC)"
    },
    "content": {
      "rendered": "<p><!-- wp:paragraph --></p>\n<p>“<em>Everyday Carry</em>” (EDC) é um termo em inglês que, traduzido literalmente, seria algo como “levar todo dia”. É o conjunto de itens que você carrega consigo no dia-a-dia, seja no bolso ou na mochila, com o objetivo de ajudar a cumprir tarefas, sejam elas mundanas ou excepcionais. Recibos amassados, papel de bala, chiclete mascado e outros descartáveis que podem estar no seu bolso &#8211; espero que não por muito tempo &#8211; não contam (a não ser que você seja o MacGyver).</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Para<br />\ncitar outro exemplo da cultura pop, o EDC perfeito seria como o cinto de<br />\nutilidades do Batman, que sempre contém aquela ferramenta essencial para a<br />\ntarefa necessária. Como, no mundo real, nem todos têm a capacidade de antever<br />\nas próprias necessidades ou vasto acesso a recursos do Homem Morcego, observe<br />\nos princípios abaixo para auxiliá-lo a montar seu próprio EDC:</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\">1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Utilidade</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\">2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Organização</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\">3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Confiabilidade</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:image {\"id\":734,\"align\":\"center\"} --></p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter\"><img src=\"http://api-protiro-com-br.umbler.net/wp-content/uploads/2019/05/batman-belt.jpeg\" alt=\"\" class=\"wp-image-734\" /></p>\n<figcaption>Cinto do Batman: Pronto para Qualquer Situação<br /></figcaption>\n</figure>\n</div>\n<p><!-- /wp:image --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\"><strong>UTILIDADE</strong></p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph {\"align\":\"left\"} --></p>\n<p style=\"text-align:left\">O primeiro Princípio é o da Utilidade,<br />\nque se observa por dois critérios: necessidade e personalização. A filosofia do<br />\nEDC é ser útil, logo, cada item deve ser pensado de forma a prover uma<br />\nnecessidade do usuário que, por sua vez, atende a questões de ordem pessoal. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>De<br />\nfato, há necessidades comuns a todas as pessoas, ou itens que são tão<br />\npolivalentes que estão presentes na maioria dos EDC’s, a exemplo dos celulares<br />\ne lâminas, óculos, chaveiros e garrafinhas de água. Por outro lado, há<br />\nnecessidades bastante peculiares, que justificam a presença de um estetoscópio<br />\nno EDC de um médico ou de uma calculadora científica no bolso de um engenheiro.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>O<br />\nEDC também pode ser personalizado de acordo com seus objetivos para cada dia. A<br />\nconfiguração de seu EDC pode ser adaptada para o trabalho, para a academia ou<br />\npara um final de semana no campo.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Não<br />\npodemos perder de vista que, para que um item seja útil, é imprescindível que<br />\nseja associado à habilidade pertinente para usá-lo. Não será útil ter um item<br />\nse você não souber como usá-lo, logo, de nada adianta carregar um canivete se<br />\nnuma situação real você não tem coragem ou habilidade para usá-lo e pode acabar<br />\nperdendo-o para um bandido, piorando a sua situação ao invés de ajuda-lo.<br />\nExceção nesse caso para itens de atendimento pré-hospitalar, pois você pode<br />\nestar inconsciente e alguém preparado irá utilizar o seu kit em você.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Há<br />\num fator muito importante que não pode ser esquecido, no entanto. Existem itens<br />\nque você deve carregar para, talvez, nunca utilizar, mas deve ter sempre<br />\nconsigo porque, quando for necessário, pode ser a diferença entre sua vida ou<br />\nmorte. Quando você entra no seu carro e afivela o cinto de segurança, não tem a<br />\nintenção de colidir contra o poste na esquina, mas o faz porque é uma atitude<br />\nque pode salvar sua vida. Assim também é a decisão de carregar certos itens,<br />\ncomo uma arma de fogo (observada, sempre, a legislação pertinente). Não se<br />\nengane, esses itens ainda seguem o Princípio da Utilidade, pois serão muito<br />\núteis, ou mesmo essenciais, em momentos excepcionais, seguindo a máxima segundo<br />\na qual “um homem prevenido vale por dois”.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Ao<br />\nidentificar suas necessidades é importante compreender quais são reais e quais<br />\nsão ilusões ditadas pelo consumismo e marketing que afeta a todos. Assim, após listar<br />\nsuas necessidades, faça uma autocrítica e descarte todos os itens que não serão<br />\nde fato úteis, aqueles que você ainda não sabe usar, bem como aqueles que podem<br />\nte gerar problemas em situações específicas, como um canivete em uma porta de<br />\nbanco ou avião.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:image {\"id\":737,\"align\":\"center\"} --></p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter\"><img src=\"http://api-protiro-com-br.umbler.net/wp-content/uploads/2019/05/EDC-ATIRADOR.jpeg\" alt=\"\" class=\"wp-image-737\" srcset=\"https://api.protiro.com.br/wp-content/uploads/2019/05/EDC-ATIRADOR.jpeg 1024w, https://api.protiro.com.br/wp-content/uploads/2019/05/EDC-ATIRADOR-416x312.jpeg 416w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></p>\n<figcaption>EDC Básico do Atirador: &#8220;Se você porta uma arma, você deve portar um torniquete.&#8221; Doc. Maniglia.</figcaption>\n</figure>\n</div>\n<p><!-- /wp:image --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\"><strong>ORGANIZAÇÃO</strong></p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Organização<br />\nsignifica colocar cada coisa no seu devido lugar. Os itens do EDC geralmente<br />\nsão carregados junto ao corpo, nos bolsos, cinto ou mochila. Para alocar<br />\ncorretamente cada um destes itens você deve observar os critérios de<br />\nacessibilidade e conforto.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Para<br />\nser útil, especialmente em caso de emergência, o EDC precisa estar em pronto<br />\nuso. Isso significa que você precisa saber exatamente onde o item está. Isso é<br />\nainda mais importante quando se trata de algo voltado para a defesa pessoal:<br />\nnão adianta largar um spray de pimenta dentro da bolsa se, quando o agressor<br />\natacar, você não tem ideia de onde o item está ou se tem um zíper como<br />\nobstáculo.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Use<br />\ncomo exemplo os cintos policiais ou coletes dos militares, coloque itens mais<br />\nletais (armas de fogo, facas, canivetes) do seu lado dominante (direito para os<br />\ndestros) e, a partir daí, distribua seu kit pelo corpo, mas deixando cada coisa<br />\nsempre no mesmo lugar, visando criar uma “memória muscular”. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Sejamos<br />\nsinceros, portar um grande EDC não é confortável. Por isso é importante<br />\nconsiderar o volume e peso dos seus itens, bem como e onde eles serão<br />\ntransportados. Conforto é um princípio essencial, porque, se se sentir<br />\ndesconfortável, eventualmente você deixará de levar algum item consigo, e, como<br />\ndisse o engenheiro Edward Murphy, é neste momento que ele te fará mais falta.<br />\nPara descartar os itens desnecessários, utilize o primeiro princípio<br />\n(utilidade). </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Se,<br />\napós passar por aqueles critérios, seu EDC ainda parecer desconfortável, apele<br />\npara calças cargo (com vários bolsos), cintos do tipo &#8220;<em>gun belt</em>” ou mesmo mochilas. De fato,<br />\nsua roupa é um item importante do seu EDC e deve ser considerada com cuidado em<br />\ntodos os seus aspectos, seja na capacidade de carregar itens, seja na<br />\nresistência do material, ou ainda na possibilidade de te garantir vantagens no<br />\nmeio social ou físico que você for interagir, como ajudar a passar desapercebido<br />\nou proteger itens de valor de uma ameaça oculta.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:image {\"id\":736,\"align\":\"center\"} --></p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter\"><img src=\"http://api-protiro-com-br.umbler.net/wp-content/uploads/2019/05/KIT-APH.jpeg\" alt=\"\" class=\"wp-image-736\" srcset=\"https://api.protiro.com.br/wp-content/uploads/2019/05/KIT-APH.jpeg 1024w, https://api.protiro.com.br/wp-content/uploads/2019/05/KIT-APH-416x312.jpeg 416w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></p>\n<figcaption>Kit APH (Atendimento Pré-Hospitalar) Básico<br /></figcaption>\n</figure>\n</div>\n<p><!-- /wp:image --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\"><strong>CONFIABILIDADE</strong></p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>“<br />\n<em>Buy once, cry once</em>¹”. Você carrega um<br />\nitem consigo por algum tempo e, quando chega o momento de ser necessário, ele<br />\nquebra e te deixa na mão. No filme “127 Horas”, que narra uma história real,<br />\nfica claro o desapontamento do aventureiro Aaron Ralston quando precisou<br />\nutilizar um canivete chinês que ele havia ganhado de presente de Natal da<br />\nprópria mãe. Para evitar situações como esta é fundamental que o EDC seja<br />\nconfiável, de boa qualidade. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Sem<br />\ndúvidas, além de se adequar às necessidades pessoais, o EDC também deve se<br />\ncurvar às possibilidades de cada um. Dentro dessas possibilidades, evite a<br />\n“economia na base da porcaria”, que, bem sabemos, não é uma economia real, no<br />\nlongo prazo. Reconheça o valor de um produto de qualidade, que não<br />\nnecessariamente significa que ele será caro, mas “não existe almoço de graça”,<br />\nnão é mesmo?</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\"><strong>EDC e DEFESA PESSOAL </strong></p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Já<br />\nfoi dito que existem vários propósitos em um EDC, que visa atender as<br />\nnecessidades de cada pessoa. Dada a situação de segurança pública no Brasil, a<br />\ndefesa pessoal é uma necessidade essencial comum a todos os cidadãos. Sendo<br />\nassim, visando orientar a seleção de um EDC que contribua com sua estratégia de<br />\nsegurança pessoal, classificamos abaixo os itens em algumas categorias, sem<br />\nexcluir outras conforme a realidade de cada um:</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nDe fogo: pistola, revólver. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nCortante/Perfurante: faca, canivete.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nContusão: Spikey, lanterna, bastão retrátil, caneta “tática”.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nDistração: spray de pimenta, Taser.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nIluminação: lanterna, luz química.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nBlow Out: torniquete, “ combat gauze”, luvas nitrílicas.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nAmarração: paracord, zip ties. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nComunicação: celular, rádio.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nNavegação: celular, bússola, GPS. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nSobrevivência: apito de emergência, paracord, iniciador de fogo.</p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>&#8211;<br />\nPadrão: chaves, cartão de crédito, documento, óculos escuros. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:image {\"id\":735,\"align\":\"center\"} --></p>\n<div class=\"wp-block-image\">\n<figure class=\"aligncenter\"><img src=\"http://api-protiro-com-br.umbler.net/wp-content/uploads/2019/05/EDC-Defesa-Pessoal.jpeg\" alt=\"\" class=\"wp-image-735\" srcset=\"https://api.protiro.com.br/wp-content/uploads/2019/05/EDC-Defesa-Pessoal.jpeg 1024w, https://api.protiro.com.br/wp-content/uploads/2019/05/EDC-Defesa-Pessoal-416x312.jpeg 416w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /></p>\n<figcaption>EDC para Defesa Pessoal<br /></figcaption>\n</figure>\n</div>\n<p><!-- /wp:image --></p>\n<p><!-- wp:paragraph {\"fontSize\":\"medium\"} --></p>\n<p class=\"has-medium-font-size\"><strong>CONCLUSÃO</strong></p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Ao<br />\nescolher seu EDC é importante ficar atento à legislação local referente ao<br />\nporte de determinados itens. Infelizmente, vivemos no Brasil sob a égide do<br />\nEstatuto do Desarmamento, o que inviabiliza o porte de armas de fogo para os<br />\ncidadãos de bem. Alguns Estados e cidades brasileiras possuem restrições quanto<br />\nao tipo e tamanho das facas. E existem lugares, tais como bancos e aeroportos,<br />\nonde alguns itens são proibidos. </p>\n<p><!-- /wp:paragraph --></p>\n<p><!-- wp:paragraph --></p>\n<p>Escolha<br />\ncada item com ênfase em sua utilidade e confiabilidade. Tenha sempre em mente que<br />\nos itens são apenas ferramentas para cumprir a missão com êxito, mas o fato de<br />\nter uma guitarra não te transforma no Jimi Hendrix. Assim, é essencial ter a<br />\nhabilidade necessária para utilizar cada equipamento. Conheça seu equipamento,<br />\ntreine com ele, <strong>seja seu próprio<br />\nsegurança!</strong></p>\n<p><!-- /wp:paragraph --></p>\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "<p>“Everyday Carry” (EDC) é um termo em inglês que, traduzido literalmente, seria algo como “levar todo dia”. É o conjunto de itens que você carrega consigo no dia-a-dia, seja no bolso ou na mochila, com o objetivo de ajudar a cumprir tarefas, sejam elas mundanas ou excepcionais. Recibos amassados, papel&hellip;</p>\n",
      "protected": false
    },
    "author": 2,
    "featured_media": 743,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [

    ],
    "categories": [
      2
    ],
    "tags": [

    ],
    "better_featured_image": {
      "id": 743,
      "alt_text": "",
      "caption": "",
      "description": "",
      "media_type": "image",
      "media_details": {
        "width": 1162,
        "height": 628,
        "file": "2019/05/Fernando-EDC-preen.png",
        "sizes": {
          "woocommerce_thumbnail": {
            "file": "Fernando-EDC-preen-324x324.png",
            "width": 324,
            "height": 324,
            "mime-type": "image/png",
            "uncropped": false,
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2019/05/Fernando-EDC-preen-324x324.png"
          },
          "woocommerce_gallery_thumbnail": {
            "file": "Fernando-EDC-preen-100x100.png",
            "width": 100,
            "height": 100,
            "mime-type": "image/png",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2019/05/Fernando-EDC-preen-100x100.png"
          },
          "woocommerce_single": {
            "file": "Fernando-EDC-preen-416x225.png",
            "width": 416,
            "height": 225,
            "mime-type": "image/png",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2019/05/Fernando-EDC-preen.png"
          }
        },
        "image_meta": {
          "aperture": "0",
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": "0",
          "copyright": "",
          "focal_length": "0",
          "iso": "0",
          "shutter_speed": "0",
          "title": "",
          "orientation": "0",
          "keywords": [

          ]
        }
      },
      "post": 733,
      "source_url": "https://api.protiro.com.br/wp-content/uploads/2019/05/Fernando-EDC-preen.png"
    },
    "_links": {
      "self": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/posts/733"
        }
      ],
      "collection": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/posts"
        }
      ],
      "about": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/types/post"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/users/2"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/comments?post=733"
        }
      ],
      "version-history": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/posts/733/revisions"
        }
      ],
      "wp:featuredmedia": [
        {
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/media/743"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/media?parent=733"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "category",
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/categories?post=733"
        },
        {
          "taxonomy": "post_tag",
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/tags?post=733"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  },
  {
    "id": 453,
    "date": "2018-09-01T12:00:54",
    "date_gmt": "2018-09-01T15:00:54",
    "guid": {
      "rendered": "http://api-protiro-com-br.umbler.net/?p=453"
    },
    "modified": "2018-10-01T14:57:34",
    "modified_gmt": "2018-10-01T17:57:34",
    "slug": "como-ser-seu-proprio-seguranca",
    "type": "post",
    "link": "https://api.protiro.com.br/como-ser-seu-proprio-seguranca/",
    "title": {
      "rendered": "Como Ser Seu Próprio Segurança?"
    },
    "content": {
      "rendered": "<p style=\"text-align: justify;\">Elabore um plano, agora. Como diria o General Patton¹, “um bom plano executado agora é melhor que um plano excelente executado semana que vem”. Nós não somos capazes de nos preparar para todas as incertezas da vida, mas devemos aumentar o nosso nível de preparação e consciência da situação em que vivemos.</p>\n<p style=\"text-align: justify;\">A violência, infelizmente, pode ocorrer a qualquer um, em qualquer lugar, a qualquer hora. E esse é o primeiro passo para ser o seu próprio segurança: <strong>reconheça que você pode ser vítima da violência.</strong></p>\n<p style=\"text-align: justify;\">Se tivesse certeza da data e hora que seria vítima de violência, o que você faria antes? Certamente treinaria como um atleta que almeja uma medalha olímpica, mas, neste caso, está em jogo algo muito mais valioso: a sua vida.</p>\n<p style=\"text-align: justify;\">Evitar o perigo é sem dúvida a melhor estratégia. Devemos ter em mente que o crime é um processo e, então, conhecer suas etapas. A primeira delas é a seleção da vítima, logo, <strong>não facilite a vida do bandido!</strong></p>\n<p style=\"text-align: justify;\">Conhecimento é poder: leia livros, veja vídeos reais de crimes, estude a realidade da sua microrregião, aprenda a partir de erros e acertos dos outros. Desenvolva, a partir daí, um comportamento de segurança: adote medidas de segurança que tornem você uma presa difícil e retire do criminoso a vantagem do elemento surpresa. Incorpore, de forma gradual e constante, tais comportamentos ao seu cotidiano, transformando segurança num hábito. A ação é melhor que a reação, <strong>sempre ataque primeiro!</strong></p>\n<p style=\"text-align: justify;\"><em>Se vis pacem, parabellum</em>². Em qualquer lugar do Mundo, o Estado é incapaz de nos prover segurança 24 horas por dia, como disse o Tenente Coronel Dave Grossman³, a sociedade é composta por “ovelhas, lobos e cães pastores” – os lobos estão à espreita aguardando um momento para atacar as ovelhas, é nosso dever como cidadãos (cães pastores) nos proteger. A capacidade de nos defender é libertária, portanto, <strong>esteja preparado!</strong></p>\n<p><img class=\"wp-image-505 aligncenter\" src=\"http://api-protiro-com-br.umbler.net/wp-content/uploads/2018/08/04281edc-9195-4a0d-a71d-1cf8e0043ff2-1-300x168.jpg\" alt=\"\" width=\"364\" height=\"204\" srcset=\"https://api.protiro.com.br/wp-content/uploads/2018/08/04281edc-9195-4a0d-a71d-1cf8e0043ff2-1-300x168.jpg 300w, https://api.protiro.com.br/wp-content/uploads/2018/08/04281edc-9195-4a0d-a71d-1cf8e0043ff2-1-416x233.jpg 416w, https://api.protiro.com.br/wp-content/uploads/2018/08/04281edc-9195-4a0d-a71d-1cf8e0043ff2-1-768x430.jpg 768w, https://api.protiro.com.br/wp-content/uploads/2018/08/04281edc-9195-4a0d-a71d-1cf8e0043ff2-1-1024x573.jpg 1024w, https://api.protiro.com.br/wp-content/uploads/2018/08/04281edc-9195-4a0d-a71d-1cf8e0043ff2-1.jpg 1080w\" sizes=\"(max-width: 364px) 100vw, 364px\" /></p>\n<p style=\"text-align: justify;\">A preparação para ser o seu próprio segurança se completa com o desenvolvimento de habilidades específicas, que não tem nenhum valor a menos que possam ser utilizadas no momento da necessidade. São elas:</p>\n<p style=\"text-align: justify;\">&#8211; Defesa Pessoal/Combate corpo-a-corpo;</p>\n<p style=\"text-align: justify;\">&#8211; Tiro com armas de fogo;</p>\n<p style=\"text-align: justify;\">&#8211; Direção Tática/Evasiva;</p>\n<p style=\"text-align: justify;\">&#8211; Primeiros Socorros/Atendimento Pré Hospitalar;</p>\n<p style=\"text-align: justify;\">&#8211; Sobrevivência/SERE;</p>\n<p style=\"text-align: justify;\">&#8211; Navegação;</p>\n<p style=\"text-align: justify;\">&#8211; Comunicação/Rádio;</p>\n<p style=\"text-align: justify;\">Lembre-se sempre: nós não planejamos falhar, nós falhamos em não planejar. Elabore um plano, ganhe conhecimento, adquira habilidades, pois é melhor tê-las e não precisar do que precisar e não as ter. Assuma responsabilidade pela sua vida, liberte-se, <strong>seja seu próprio segurança!</strong></p>\n<p>&nbsp;</p>\n<p>¹George S. Patton, General americano da 2ª Guerra Mundial;</p>\n<p>²Do latim: se queres paz, prepara-te para a guerra;</p>\n<p>³Militar e escritor americano;</p>\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "<p>Elabore um plano, agora. Como diria o General Patton¹, “um bom plano executado agora é melhor que um plano excelente executado semana que vem”. Nós não somos capazes de nos preparar para todas as incertezas da vida, mas devemos aumentar o nosso nível de preparação e consciência da situação em&hellip;</p>\n",
      "protected": false
    },
    "author": 2,
    "featured_media": 602,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [

    ],
    "categories": [
      2
    ],
    "tags": [

    ],
    "better_featured_image": {
      "id": 602,
      "alt_text": "",
      "caption": "I've got to get away from here!",
      "description": "",
      "media_type": "image",
      "media_details": {
        "width": 2000,
        "height": 1000,
        "file": "2018/08/lone-women-at-night.jpg",
        "sizes": {
          "woocommerce_thumbnail": {
            "file": "lone-women-at-night-324x324.jpg",
            "width": 324,
            "height": 324,
            "mime-type": "image/jpeg",
            "uncropped": false,
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-324x324.jpg"
          },
          "woocommerce_gallery_thumbnail": {
            "file": "lone-women-at-night-100x100.jpg",
            "width": 100,
            "height": 100,
            "mime-type": "image/jpeg",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-100x100.jpg"
          },
          "woocommerce_single": {
            "file": "lone-women-at-night-416x208.jpg",
            "width": 416,
            "height": 208,
            "mime-type": "image/jpeg",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-768x384.jpg"
          },
          "thumbnail": {
            "file": "lone-women-at-night-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-150x150.jpg"
          },
          "medium": {
            "file": "lone-women-at-night-300x150.jpg",
            "width": 300,
            "height": 150,
            "mime-type": "image/jpeg",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-300x150.jpg"
          },
          "medium_large": {
            "file": "lone-women-at-night-768x384.jpg",
            "width": 768,
            "height": 384,
            "mime-type": "image/jpeg",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-768x384.jpg"
          },
          "large": {
            "file": "lone-women-at-night-1024x512.jpg",
            "width": 1024,
            "height": 512,
            "mime-type": "image/jpeg",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-1024x512.jpg"
          },
          "pro-tiro-thumb": {
            "file": "lone-women-at-night-360x180.jpg",
            "width": 360,
            "height": 180,
            "mime-type": "image/jpeg",
            "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night-360x180.jpg"
          }
        },
        "image_meta": {
          "aperture": "0",
          "credit": "Getty Images/iStockphoto",
          "camera": "",
          "caption": "I've got to get away from here!",
          "created_timestamp": "0",
          "copyright": "",
          "focal_length": "0",
          "iso": "0",
          "shutter_speed": "0",
          "title": "487729439",
          "orientation": "0",
          "keywords": [

          ]
        }
      },
      "post": 453,
      "source_url": "https://api.protiro.com.br/wp-content/uploads/2018/08/lone-women-at-night.jpg"
    },
    "_links": {
      "self": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/posts/453"
        }
      ],
      "collection": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/posts"
        }
      ],
      "about": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/types/post"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/users/2"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/comments?post=453"
        }
      ],
      "version-history": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/posts/453/revisions"
        }
      ],
      "wp:featuredmedia": [
        {
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/media/602"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://api.protiro.com.br/wp-json/wp/v2/media?parent=453"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "category",
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/categories?post=453"
        },
        {
          "taxonomy": "post_tag",
          "embeddable": true,
          "href": "https://api.protiro.com.br/wp-json/wp/v2/tags?post=453"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  }
]
    }
  }
}
</script>

<style lang="css" scoped>
  p{
    @apply mb-4;
  }
</style>
