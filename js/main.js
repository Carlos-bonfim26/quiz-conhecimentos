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

// const acertei = quest.map((el)=>{
//     el.addEventListener("click", ()=>{
//         next.style.display = "flex";
//     })
//     const novoElemento = document.createElement('i');
//     el.appendChild(novoElemento);

//     if(el.classList.contains('acerto')){
//         novoElemento.classList.add('fa-regular')
//        novoElemento.classList.add('fa-circle-check')

//     } else if(el.classList.contains('erro')){
//         novoElemento.classList.add('fa-regular')
//         novoElemento.classList.add('fa-circle-xmark')
//     }
// })
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
   square[2].classList.remove("ativo");
   square[0].classList.add("ativo");
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
  
}let rodada=1
let acertos = 0;
function exibirPergunta(lista) {
  
    contagem.innerHTML = `${rodada} de ${qntdPerguntas()} perguntas`;
    const { pergunta, respostas, respostaCorreta } = lista[Math.floor(Math.random() * lista.length)];
    question.innerHTML = pergunta;
    const container = document.querySelector('.container-quest');
    container.innerHTML = '';
    respostas.slice(0, 4).forEach((el) => {
      let botao = document.createElement('button');
      botao.classList.add('quest');
      botao.innerHTML = el;
      container.appendChild(botao);
      botao.addEventListener('click', () => {
        if (el.trim().toLowerCase() === respostaCorreta.trim().toLowerCase()) {
          botao.classList.add('acerto');
          acertos++
        } else {
          botao.classList.add('erro');
        }
        document.querySelectorAll('.quest').forEach((btn) => {
          btn.style.pointerEvents = 'none';
        });
        next.style.display = 'flex';
        
      });
    });
  }
const startGame = start.addEventListener('click', ()=>{
 
    const temaEscolhido = tema();
    const numPerguntas = qntdPerguntas();
    
    quizTemaSpan.innerHTML = temaEscolhido
    if(temaEscolhido && numPerguntas > 0){
        erro.innerHTML = ''
        const totalPerguntas = qntdPerguntas();
    switch(temaEscolhido){
        
        case 'Programação':
            exibirPergunta(arrayProg)
              
              next.addEventListener('click', () => {
             rodada++
            
                next.style.display = 'none';
                if (rodada <= totalPerguntas) {
                  exibirPergunta(arrayProg);
                } else {
                 square[1].classList.remove('ativo');
                 square[2].classList.add('ativo')
                 mensagemJogador.innerHTML = `Você acertou ${acertos}/${totalPerguntas} questões`
                 rodada=1
                 acertos=0
                }
              });
             
       break;
        case 'História':
            exibirPergunta(arrayHist)
              
            next.addEventListener('click', () => {
           rodada++
          
              next.style.display = 'none';
              if (rodada <= totalPerguntas) {
                exibirPergunta(arrayHist);
              } else {
               square[1].classList.remove('ativo');
               square[2].classList.add('ativo')
               mensagemJogador.innerHTML = `Você acertou ${acertos}/${totalPerguntas} questões`
               rodada=1
               acertos=0
              }
            });
            
        break;
        case'Matemática': 
        exibirPergunta(arrayMath)
              
        next.addEventListener('click', () => {
       rodada++
      
          next.style.display = 'none';
          if (rodada <= totalPerguntas) {
            exibirPergunta(arrayMath);
          } else {
           square[1].classList.remove('ativo');
           square[2].classList.add('ativo')
           mensagemJogador.innerHTML = `Você acertou ${acertos}/${totalPerguntas} questões`
           rodada=1
           acertos=0
          }
        });
     
        break;
        case'Futebol': 
        exibirPergunta(arrayFut)
              
        next.addEventListener('click', () => {
       rodada++
      
          next.style.display = 'none';
          if (rodada <= totalPerguntas) {
            exibirPergunta(arrayFut);
          } else {
           square[1].classList.remove('ativo');
           square[2].classList.add('ativo')
           mensagemJogador.innerHTML = `Você acertou ${acertos}/${totalPerguntas} questões`
           rodada=1
           acertos=0
          }
        });
       
        break;
       }
    square[0].classList.remove('ativo');
    square[1].classList.add('ativo');
    } else{
        erro.innerHTML = "Selecione um tema ou a quantidade de perguntas"
    }
   
})
