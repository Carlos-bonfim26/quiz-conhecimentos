const quest = [...document.querySelectorAll(".quest")]
const square = [...document.querySelectorAll('.square')]
const next = document.getElementById("next");
const tryAgain = document.getElementById("try-again")
const btn_qntd = [...document.querySelectorAll('.btn-question')]
const btn_tema = [...document.querySelectorAll('.btn-tema')]
const erro = document.getElementById("error")
const start = document.getElementById('start');
const question = document.querySelector('.pergunta')
const contagem = document.querySelector('.contagem-quest p')
const quizTemaSpan = document.getElementById('quizTema')
const mensagemJogador = document.querySelector('#mensagemJogador')
const resCorrect = document.getElementById('resCorrect')
const tempo = document.querySelector(".tempo")
const squareTempo = document.querySelector('.square-tempo')

function tirarSelection(){
  const remover=  btn_qntd.map((el)=>{
     el.classList.remove('select')
    })
    return remover
}
const toggleSelectBtn = btn_qntd.map((el)=>{
    
    el.addEventListener("click", ()=>{
    tirarSelection()
        el.classList.toggle('select')
        
    })
})
function qntdPerguntas(){
  const retorno = btn_qntd.filter(el => el.classList.contains('select')).map(el => el.value);
  
  return Number(retorno);
}
const recomecar = tryAgain.addEventListener("click", ()=>{
   location.reload()
  //  location.reload()
})

function tirarTema(){
    const remover=  btn_tema.map((el)=>{
       el.classList.remove('select')
      })
      return remover
  }
const escolhaTema = btn_tema.map((el)=>{
 
    el.addEventListener("click", ()=>{
        tirarTema()
        el.classList.toggle('select')
       console.log(tema())
    })
   

   
})

function tema(){
    const verifcarTema = btn_tema.filter(ele => ele.classList.contains('select')).map(ele => ele.textContent);

     const temaEscolhido = String(verifcarTema)
return temaEscolhido
  
}let rodada = 0;
let acertos = 0;
let totalPerguntas = 0;
let quizAtual = []; 

function iniciarQuiz(listaOriginal) {
  quizAtual = [...listaOriginal]; 
  rodada = 1;
  totalPerguntas = qntdPerguntas(); 
  exibirPergunta(quizAtual);
}

function exibirPergunta(lista) {
  resCorrect.innerHTML = '';
  contagem.innerHTML = `${rodada} de ${totalPerguntas} perguntas`;
  if (lista.length === 0) {
    alert("Não há mais perguntas disponíveis!");
    return;
  }
  const index = Math.floor(Math.random() * lista.length);
  const { pergunta, respostas, respostaCorreta } = lista[index];
  lista.splice(index, 1);
  question.innerHTML = pergunta;
  const container = document.querySelector('.container-quest');
  container.innerHTML = '';
  respostas.slice(0, 4).forEach((el) => {
    let botao = document.createElement('button');
    botao.classList.add('quest');
    botao.innerHTML = el;
    container.appendChild(botao);
    const novoElemento = document.createElement('i');
    botao.appendChild(novoElemento);
    botao.addEventListener('click', () => {
      if (el.trim().toLowerCase() === respostaCorreta.trim().toLowerCase()) {
        botao.classList.add('acerto');
        novoElemento.classList.add('fa-regular', 'fa-circle-check');
        acertos++;
      } else {
        botao.classList.add('erro');
        novoElemento.classList.add('fa-regular', 'fa-circle-xmark');
        resCorrect.innerHTML = `A resposta correta é: ${respostaCorreta}`;
      }
      document.querySelectorAll('.quest').forEach((btn) => {
        btn.style.pointerEvents = 'none';
      });
      next.style.display = 'flex';
    });
  });
}

next.addEventListener('click', () => {
  rodada++;
  next.style.display = 'none';

  if (rodada <= totalPerguntas) {
    exibirPergunta(quizAtual);
  } else {
    square[1].classList.remove('ativo');
    square[2].classList.add('ativo');
    mensagemJogador.innerHTML = `Você acertou ${acertos}/${totalPerguntas} questões`;
    rodada = 0;
    acertos = 0;
  }
  tempoResposta()
});

start.addEventListener('click', () => {
  const temaEscolhido = tema();
  const numPerguntas = qntdPerguntas();
  tempoResposta();
  quizTemaSpan.innerHTML = temaEscolhido;
  if (temaEscolhido && numPerguntas > 0) {
    erro.innerHTML = '';
    switch (temaEscolhido) {
      case 'Programação':
        iniciarQuiz(arrayProg);
        break;
      case 'História':
        iniciarQuiz(arrayHist);
        break;
      case 'Matemática':
        iniciarQuiz(arrayMath);
        break;
      case 'Futebol':
        iniciarQuiz(arrayFut);
        break;
    }
    square[0].classList.remove('ativo');
    square[1].classList.add('ativo');
  } else {
    erro.innerHTML = "Selecione um tema ou a quantidade de perguntas";
  }
});

const temp = 15000; 
let timerInterval = null;

function tempoResposta() {
 
  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }
  
  let timeLeft = temp / 1000; 
  tempo.innerHTML = timeLeft + "s";
  squareTempo.style.backgroundColor = "black";

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 5 && timeLeft > 0) {
      squareTempo.style.backgroundColor = "red";
      tempo.innerHTML = timeLeft + "s";
    } else if (timeLeft > 0) {
      tempo.innerHTML = timeLeft + "s";
      squareTempo.style.backgroundColor = "black";
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      document.querySelectorAll('.quest').forEach((btn) => {
        btn.style.pointerEvents = 'none';
      });
      next.style.display = "flex";
      tempo.innerHTML = "0s";
    }
  }, 1000);
}