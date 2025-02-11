const arrayProg = [
  {
    pergunta: "O que é uma variável?",
    respostas: [
      "Uma operação matemática.",
      "Uma forma de armazenar dados na memória.",
      "Uma função que retorna um valor.",
      "Uma estrutura de dados que armazena múltiplos valores."
    ],
    respostaCorreta: "Uma forma de armazenar dados na memória."
  },
  {
    pergunta: "Qual é o comando para imprimir no console em Python?",
    respostas: [
      "echo()",
      "printf()",
      "print()",
      "console.log()"
    ],
    respostaCorreta: "print()"
  },
  {
    pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
    respostas: [
      "Array",
      "Object",
      "String",
      "Function"
    ],
    respostaCorreta: "String"
  },
  {
    pergunta: "O que é um array em programação?",
    respostas: [
      "Uma operação matemática de adição.",
      "Uma variável que contém um número.",
      "Uma estrutura de dados que armazena múltiplos valores em uma única variável.",
      "Uma função que retorna um valor."
    ],
    respostaCorreta: "Uma estrutura de dados que armazena múltiplos valores em uma única variável."
  },
  {
    pergunta: "O que é um loop?",
    respostas: [
      "Uma operação matemática.",
      "Uma estrutura de decisão.",
      "Uma estrutura de repetição.",
      "Uma forma de armazenar dados."
    ],
    respostaCorreta: "Uma estrutura de repetição."
  },
  {
    pergunta: "Em Python, como você define uma função?",
    respostas: [
      "def nome():",
      "function nome() { }",
      "function nome()",
      "def nome { }"
    ],
    respostaCorreta: "def nome():"
  },
  {
    pergunta: "O que significa POO?",
    respostas: [
      "Procedural Oriented Operations",
      "Programação Online Objetiva",
      "Padrão de Objetos em Orientação",
      "Programação Orientada a Objetos"
    ],
    respostaCorreta: "Programação Orientada a Objetos"
  },
  {
    pergunta: "Qual é a função de um 'callback' em JavaScript?",
    respostas: [
      "Armazenar dados na memória.",
      "Criar um loop infinito.",
      "Gerenciar erros.",
      "Passar uma função como argumento para outra função."
    ],
    respostaCorreta: "Passar uma função como argumento para outra função."
  },
  {
    pergunta: "Qual é a principal característica da linguagem C?",
    respostas: [
      "Não usa funções.",
      "Acesso direto à memória e uso de ponteiros.",
      "É uma linguagem orientada a objetos.",
      "Não possui variáveis."
    ],
    respostaCorreta: "Acesso direto à memória e uso de ponteiros."
  },
  {
    pergunta: "O que é o operador '==' em JavaScript?",
    respostas: [
      "Compara apenas tipos.",
      "Faz uma soma entre os valores.",
      "Compara valores, ignorando tipos.",
      "Compara valores e tipos."
    ],
    respostaCorreta: "Compara valores, ignorando tipos."
  },
  {
    pergunta: "O que é herança em programação orientada a objetos?",
    respostas: [
      "A criação de novos objetos.",
      "A execução de código recursivo.",
      "A capacidade de um objeto herdar propriedades e métodos de outro.",
      "A definição de uma variável global."
    ],
    respostaCorreta: "A capacidade de um objeto herdar propriedades e métodos de outro."
  },
  {
    pergunta: "Como declarar uma variável em C#?",
    respostas: [
      "var nome = 'Carlos';",
      "let nome = 'Carlos';",
      "string nome = 'Carlos';",
      "int nome = 'Carlos';"
    ],
    respostaCorreta: "string nome = 'Carlos';"
  },
  {
    pergunta: "O que é uma função recursiva?",
    respostas: [
      "Uma função que chama a si mesma.",
      "Uma função que retorna um valor.",
      "Uma função que define um loop.",
      "Uma função que executa operações matemáticas."
    ],
    respostaCorreta: "Uma função que chama a si mesma."
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      "'null' representa um objeto e 'undefined' uma função.",
      "'null' é o valor de uma variável não definida, 'undefined' é quando não existe nenhuma variável.",
      "Ambos representam ausência de valor, mas 'undefined' é atribuído automaticamente, enquanto 'null' é atribuído explicitamente.",
      "'null' é um valor numérico e 'undefined' um tipo de dado."
    ],
    respostaCorreta: "Ambos representam ausência de valor, mas 'undefined' é atribuído automaticamente, enquanto 'null' é atribuído explicitamente."
  },
  {
    pergunta: "O que é o 'DOM' em programação web?",
    respostas: [
      "Domain Object Model",
      "Dynamic Object Method",
      "Document Object Model",
      "Data Online Management"
    ],
    respostaCorreta: "Document Object Model"
  },
  {
    pergunta: "Qual é o tipo de dado utilizado para representar números em Python?",
    respostas: [
      "Float",
      "Int",
      "String",
      "Number"
    ],
    respostaCorreta: "Int"
  },
  {
    pergunta: "O que é um 'set' em Python?",
    respostas: [
      "Uma lista ordenada.",
      "Uma coleção de valores únicos.",
      "Uma estrutura de dados chave-valor.",
      "Uma coleção de valores repetidos."
    ],
    respostaCorreta: "Uma coleção de valores únicos."
  },
  {
    pergunta: "Qual é o comando para importar uma biblioteca em Python?",
    respostas: [
      "require biblioteca",
      "import biblioteca",
      "using biblioteca",
      "include biblioteca"
    ],
    respostaCorreta: "import biblioteca"
  },
  {
    pergunta: "O que é o método 'slice' em JavaScript?",
    respostas: [
      "Corta uma parte de um array e retorna uma nova array.",
      "Converte todos os elementos de um array para string.",
      "Ordena os elementos de um array.",
      "Adiciona um item ao final de um array."
    ],
    respostaCorreta: "Corta uma parte de um array e retorna uma nova array."
  },
  {
    pergunta: "O que é o método 'map' em JavaScript?",
    respostas: [
      "Adiciona elementos a um array.",
      "Filtra elementos de um array.",
      "Cria uma nova array com base em outra array.",
      "Remove elementos de um array."
    ],
    respostaCorreta: "Cria uma nova array com base em outra array."
  },
  {
    pergunta: "O que faz o operador '&&' em JavaScript?",
    respostas: [
      "Faz a divisão de dois números.",
      "Verifica se ambas as condições são verdadeiras.",
      "Verifica se pelo menos uma condição é verdadeira.",
      "Retorna o valor de uma das condições."
    ],
    respostaCorreta: "Verifica se ambas as condições são verdadeiras."
  },
  {
    pergunta: "O que significa a sigla SQL?",
    respostas: [
      "Sequential Query Logic",
      "Simple Query Language",
      "Structured Quality Language",
      "Structured Query Language"
    ],
    respostaCorreta: "Structured Query Language"
  },
  {
    pergunta: "Qual é a principal característica de uma linguagem fortemente tipada?",
    respostas: [
      "Ela permite que variáveis mudem de tipo durante a execução.",
      "Ela não possui tipos de dados.",
      "Ela não permite a criação de funções.",
      "Ela exige que as variáveis tenham um tipo definido."
    ],
    respostaCorreta: "Ela exige que as variáveis tenham um tipo definido."
  },
  {
    pergunta: "Qual desses não é um tipo de erro em JavaScript?",
    respostas: [
      "TypeError",
      "SyntaxError",
      "RuntimeError",
      "ReferenceError"
    ],
    respostaCorreta: "RuntimeError"
  },
  {
    pergunta: "O que é o padrão MVC?",
    respostas: [
      "Main-View-Controller",
      "Method-View-Controller",
      "Model-Variable-Constant",
      "Model-View-Controller"
    ],
    respostaCorreta: "Model-View-Controller"
  },
  {
    pergunta: "Como você pode tratar erros em JavaScript?",
    respostas: [
      "Usando throw...catch",
      "Usando validate...error",
      "Usando try...catch",
      "Usando error...try"
    ],
    respostaCorreta: "Usando try...catch"
  },
  {
    pergunta: "Qual é a diferença entre um 'for' e um 'foreach' em JavaScript?",
    respostas: [
      "O 'for' é para objetos e o 'foreach' é para arrays.",
      "Não existe diferença, ambos são idênticos.",
      "O 'for' é utilizado para loops com contagem numérica, enquanto o 'foreach' percorre os elementos de um array.",
      "O 'foreach' é mais rápido que o 'for'."
    ],
    respostaCorreta: "O 'for' é utilizado para loops com contagem numérica, enquanto o 'foreach' percorre os elementos de um array."
  },
  {
    pergunta: "Qual é a função do método 'reduce' em JavaScript?",
    respostas: [
      "Reduz um array a um único valor, aplicando uma função a cada elemento.",
      "Cria uma nova array com elementos reduzidos.",
      "Filtra elementos de um array.",
      "Converte um array em um objeto."
    ],
    respostaCorreta: "Reduz um array a um único valor, aplicando uma função a cada elemento."
  },
  {
    pergunta: "O que é 'Git'?",
    respostas: [
      "Uma ferramenta de controle de versão.",
      "Uma linguagem de programação.",
      "Uma biblioteca de JavaScript.",
      "Um tipo de banco de dados."
    ],
    respostaCorreta: "Uma ferramenta de controle de versão."
  },
  {
    pergunta: "O que é uma API?",
    respostas: [
      "Application Protocol Interface",
      "Acessos de Procedimentos Internos",
      "Aplicação de Protocólos Internos",
      "Interface de Programação de Aplicações"
    ],
    respostaCorreta: "Interface de Programação de Aplicações"
  },
  {
    pergunta: "Como você pode verificar o tipo de uma variável em JavaScript?",
    respostas: [
      "Usando typeOf",
      "Usando typeof",
      "Usando isType",
      "Usando instanceOf"
    ],
    respostaCorreta: "Usando typeof"
  },
  {
    pergunta: "O que é um 'hash' em criptografia?",
    respostas: [
      "Uma técnica de codificação de dados.",
      "Uma chave criptográfica pública.",
      "Uma função que mapeia dados de tamanho variável para um valor fixo.",
      "Uma forma de criptografar mensagens secretas."
    ],
    respostaCorreta: "Uma função que mapeia dados de tamanho variável para um valor fixo."
  },
  {
    pergunta: "Qual a principal diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "'==' verifica igualdade, '===' verifica identidade.",
      "'==' compara valores e tipos, enquanto '===' compara apenas valores.",
      "'==' compara apenas tipos, enquanto '===' compara valores e tipos.",
      "Não existe diferença."
    ],
    respostaCorreta: "'==' compara apenas tipos, enquanto '===' compara valores e tipos."
  },
  {
    pergunta: "Qual é o método para definir a data e hora atual em JavaScript?",
    respostas: [
      "new Time()",
      "Date.now()",
      "Time.now()",
      "new Date()"
    ],
    respostaCorreta: "new Date()"
  }
];
