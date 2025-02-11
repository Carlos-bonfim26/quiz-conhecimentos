const arrayMath = [
  {
    pergunta: "Qual é a fórmula para calcular a área de um círculo?",
    respostas: [
      "A = πr²",
      "A = 2πr",
      "A = πd",
      "A = r²"
    ],
    respostaCorreta: "A = πr²"
  },
  {
    pergunta: "O que é um número primo?",
    respostas: [
      "Um número que só pode ser dividido por 1 e ele mesmo.",
      "Um número divisível por todos os números.",
      "Um número que é a soma de dois números.",
      "Um número que tem dois divisores."
    ],
    respostaCorreta: "Um número que só pode ser dividido por 1 e ele mesmo."
  },
  {
    pergunta: "Qual é o valor de π (pi)?",
    respostas: [
      "3.14159",
      "3.14",
      "3",
      "2.718"
    ],
    respostaCorreta: "3.14159"
  },
  {
    pergunta: "Qual é o resultado de 8 ÷ 2(2 + 2)?",
    respostas: [
      "16",
      "1",
      "8",
      "4"
    ],
    respostaCorreta: "16"
  },
  {
    pergunta: "O que é a derivada de uma função?",
    respostas: [
      "O valor de uma função em um ponto.",
      "A inclinação da reta tangente à curva da função.",
      "A área sob a curva.",
      "O ponto de interseção com o eixo X."
    ],
    respostaCorreta: "A inclinação da reta tangente à curva da função."
  },
  {
    pergunta: "Qual é a fórmula para o cálculo da área de um triângulo?",
    respostas: [
      "A = b × h",
      "A = 2b + h",
      "A = 1/2 × b × h",
      "A = b × h × 2"
    ],
    respostaCorreta: "A = 1/2 × b × h"
  },
  {
    pergunta: "Quantos graus tem um triângulo equilátero?",
    respostas: [
      "90º",
      "180º",
      "120º",
      "60º"
    ],
    respostaCorreta: "60º"
  },
  {
    pergunta: "Qual é o teorema de Pitágoras?",
    respostas: [
      "A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.",
      "A soma dos quadrados dos catetos é igual à soma das hipotenusas.",
      "O quadrado da hipotenusa é igual à soma das projeções.",
      "A hipotenusa é sempre maior que os catetos."
    ],
    respostaCorreta: "A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa."
  },
  {
    pergunta: "Qual é a fórmula da área de um retângulo?",
    respostas: [
      "A = l × a",
      "A = 2l + a",
      "A = l² + a²",
      "A = l × a × 2"
    ],
    respostaCorreta: "A = l × a"
  },
  {
    pergunta: "O que significa o símbolo √ em matemática?",
    respostas: [
      "A raiz quadrada.",
      "A soma de dois números.",
      "A multiplicação de dois números.",
      "O cálculo da média."
    ],
    respostaCorreta: "A raiz quadrada."
  },
  {
    pergunta: "Quantos graus há em um círculo completo?",
    respostas: [
      "360º",
      "180º",
      "90º",
      "45º"
    ],
    respostaCorreta: "360º"
  },
  {
    pergunta: "Qual é a fórmula para o cálculo da área de um trapézio?",
    respostas: [
      "A = b1 × b2",
      "A = (b1 + b2) × h / 2",
      "A = (b1 + b2) × h",
      "A = (b1 × b2) / 2"
    ],
    respostaCorreta: "A = (b1 + b2) × h / 2"
  },
  {
    pergunta: "Como se chama o ponto onde duas retas se encontram?",
    respostas: [
      "Perpendicular",
      "Ângulo",
      "Ponto de interseção",
      "Bissetriz"
    ],
    respostaCorreta: "Ponto de interseção"
  },
  {
    pergunta: "O que é um número irracional?",
    respostas: [
      "Um número que pode ser expresso como fração.",
      "Um número que não pode ser expresso como fração.",
      "Um número com uma parte decimal finita.",
      "Um número que é divisível por dois."
    ],
    respostaCorreta: "Um número que não pode ser expresso como fração."
  },
  {
    pergunta: "O que é uma equação quadrática?",
    respostas: [
      "Uma equação que tem como variável o quadrado de um número.",
      "Uma equação de primeiro grau.",
      "Uma equação com uma solução.",
      "Uma equação de segundo grau."
    ],
    respostaCorreta: "Uma equação de segundo grau."
  },
  {
    pergunta: "Qual é o valor de 5! (fatorial de 5)?",
    respostas: [
      "120",
      "60",
      "24",
      "10"
    ],
    respostaCorreta: "120"
  },
  {
    pergunta: "O que é uma progressão aritmética (PA)?",
    respostas: [
      "Uma sequência em que a diferença entre dois termos consecutivos é constante.",
      "Uma sequência em que cada termo é o produto do anterior por um número fixo.",
      "Uma sequência em que a razão entre os termos é constante.",
      "Uma sequência que não tem padrão."
    ],
    respostaCorreta: "Uma sequência em que a diferença entre dois termos consecutivos é constante."
  },
  {
    pergunta: "Qual é a fórmula do volume de um cilindro?",
    respostas: [
      "V = πr²h",
      "V = 2πr²h",
      "V = πr³h",
      "V = πr²h / 2"
    ],
    respostaCorreta: "V = πr²h"
  },
  {
    pergunta: "O que é uma função linear?",
    respostas: [
      "Uma função que tem um gráfico em linha reta.",
      "Uma função que tem um gráfico em forma de parábola.",
      "Uma função que representa um crescimento exponencial.",
      "Uma função que não tem variação."
    ],
    respostaCorreta: "Uma função que tem um gráfico em linha reta."
  },
  {
    pergunta: "Qual é a fórmula para calcular o perímetro de um quadrado?",
    respostas: [
      "P = 2l + 2a",
      "P = 4l",
      "P = l × a",
      "P = 2l × a"
    ],
    respostaCorreta: "P = 4l"
  },
  {
    pergunta: "Qual é o valor de 3³ (3 elevado à terceira potência)?",
    respostas: [
      "27",
      "9",
      "6",
      "81"
    ],
    respostaCorreta: "27"
  },
  {
    pergunta: "Qual é a fórmula para a soma dos ângulos internos de um polígono?",
    respostas: [
      "S = 180n",
      "S = 180(n - 2)",
      "S = 360n",
      "S = n²"
    ],
    respostaCorreta: "S = 180(n - 2)"
  },
  {
    pergunta: "O que é a tangente de um ângulo?",
    respostas: [
      "A razão entre o cateto oposto e o cateto adjacente.",
      "A razão entre os catetos.",
      "A soma dos catetos.",
      "A razão entre a hipotenusa e os catetos."
    ],
    respostaCorreta: "A razão entre o cateto oposto e o cateto adjacente."
  }
];
