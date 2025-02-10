const arrayHist = [
    {
      pergunta: "Quem foi o primeiro presidente do Brasil?",
      respostas: [
        "Getúlio Vargas",
        "Juscelino Kubitschek",
        "Deodoro da Fonseca",
        "Washington Luís"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Em que ano foi proclamada a Independência do Brasil?",
      respostas: [
        "1822",
        "1889",
        "1500",
        "1888"
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "Qual foi a principal causa da Primeira Guerra Mundial?",
      respostas: [
        "O assassinato do arquiduque Francisco Ferdinando",
        "A ascensão do Império Romano",
        "A Revolução Industrial",
        "A Revolução Francesa"
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "Qual foi o nome da primeira colônia portuguesa no Brasil?",
      respostas: [
        "São Vicente",
        "Pernambuco",
        "Rio de Janeiro",
        "Bahia"
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "Quem foi o líder da Revolução Francesa?",
      respostas: [
        "Napoleão Bonaparte",
        "Maximilien Robespierre",
        "Louis XVI",
        "Marat"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "Em que ano aconteceu a Revolução Russa?",
      respostas: [
        "1914",
        "1917",
        "1920",
        "1905"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "Quem foi o responsável pela abolição da escravidão no Brasil?",
      respostas: [
        "Dom Pedro II",
        "Getúlio Vargas",
        "Princesa Isabel",
        "Joaquim Nabuco"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Em que ano foi assinado o Tratado de Versalhes, que encerrou a Primeira Guerra Mundial?",
      respostas: [
        "1918",
        "1919",
        "1923",
        "1930"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "Qual país foi o responsável pela invasão da Polônia que deu início à Segunda Guerra Mundial?",
      respostas: [
        "França",
        "Alemanha",
        "Itália",
        "União Soviética"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "Qual foi a principal causa da queda do Império Romano?",
      respostas: [
        "Invasões bárbaras",
        "A Revolução Industrial",
        "A ascensão do cristianismo",
        "Conflitos internos de liderança"
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "Quem descobriu a América?",
      respostas: [
        "Vasco da Gama",
        "Cristóvão Colombo",
        "Fernão de Magalhães",
        "Pedro Álvares Cabral"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "O que foi a Guerra Fria?",
      respostas: [
        "Um conflito militar entre a União Soviética e a China",
        "Uma série de disputas coloniais entre potências europeias",
        "Um período de tensão entre os Estados Unidos e a União Soviética",
        "Um movimento de independência de países africanos"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Qual foi o nome do primeiro satélite artificial enviado ao espaço?",
      respostas: [
        "Vostok 1",
        "Sputnik 1",
        "Apollo 11",
        "Soyuz 1"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "Quem foi o responsável por criar o regime nazista na Alemanha?",
      respostas: [
        "Otto von Bismarck",
        "Wilhelm II",
        "Adolf Hitler",
        "Joseph Stalin"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Qual foi a principal característica do Renascimento?",
      respostas: [
        "O desenvolvimento das artes, ciências e humanismo.",
        "A criação de impérios coloniais.",
        "A ascensão das monarquias absolutistas.",
        "A Revolução Industrial."
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "Em que ano ocorreu o ataque a Pearl Harbor?",
      respostas: [
        "1939",
        "1941",
        "1945",
        "1929"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "Quem foi o principal líder da independência da Índia?",
      respostas: [
        "Nehru",
        "Mahatma Gandhi",
        "Subhas Chandra Bose",
        "Jinnah"
      ],
      respostaCorreta: 1
    },
    {
      pergunta: "Em que período aconteceu o Império Romano?",
      respostas: [
        "300 a.C. a 500 d.C.",
        "500 a.C. a 500 d.C.",
        "27 a.C. a 476 d.C.",
        "100 a.C. a 200 d.C."
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Quem foi o responsável por proclamar a República no Brasil?",
      respostas: [
        "Getúlio Vargas",
        "Juscelino Kubitschek",
        "Deodoro da Fonseca",
        "Carlos Gomes"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Em que ano aconteceu a queda do Muro de Berlim?",
      respostas: [
        "1989",
        "1973",
        "1991",
        "1961"
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "O que foi o Apartheid na África do Sul?",
      respostas: [
        "Um sistema de segregação racial.",
        "Um regime socialista.",
        "Uma guerra civil entre tribos africanas.",
        "Uma luta pela independência."
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "Quem foi o responsável pela teoria da relatividade?",
      respostas: [
        "Isaac Newton",
        "Nikola Tesla",
        "Albert Einstein",
        "Galileu Galilei"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Qual foi a maior potência imperialista no século XIX?",
      respostas: [
        "França",
        "Alemanha",
        "Inglaterra",
        "Espanha"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "Qual foi o principal evento que marcou o início da Revolução Industrial?",
      respostas: [
        "A invenção da máquina a vapor.",
        "A assinatura da Magna Carta.",
        "A criação do sistema de castas.",
        "O surgimento das primeiras universidades."
      ],
      respostaCorreta: 0
    },
    {
      pergunta: "Quem foi o imperador romano durante a crucificação de Jesus Cristo?",
      respostas: [
        "Nero",
        "Augusto",
        "Tiberius",
        "César"
      ],
      respostaCorreta: 2
    },
    {
      pergunta: "O que foi a Idade das Trevas?",
      respostas: [
        "O período medieval, caracterizado por guerras e crises sociais.",
        "A era das grandes navegações.",
        "A transição entre a Antiguidade e a Idade Moderna.",
        "A Revolução Industrial."
      ],
      respostaCorreta: 0
    }
  ];
  