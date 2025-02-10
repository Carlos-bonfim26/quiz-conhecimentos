const quest = [...document.querySelectorAll(".quest")]
const square = [...document.querySelectorAll('.square')]
const next = document.getElementById("next");
const tryAgain = document.getElementById("try-again")
const btn_qntd = [...document.querySelectorAll('.btn-question')]
const btn_tema = [...document.querySelectorAll('.btn-tema')]
const erro = document.getElementById("error")

const acertei = quest.map((el)=>{
    el.addEventListener("click", ()=>{
        next.style.display = "flex";
    })
    const novoElemento = document.createElement('i');
    el.appendChild(novoElemento);

    if(el.classList.contains('acerto')){
        novoElemento.classList.add('fa-regular')
       novoElemento.classList.add('fa-circle-check')
    } else if(el.classList.contains('erro')){
        novoElemento.classList.add('fa-regular')
        novoElemento.classList.add('fa-circle-xmark')
    }
})
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

   switch(temaEscolhido){
    case 'Programação':

    break;
    case 'História':

    break;
    case'Matemática': 

    break;
    case'Futebol': 

    break;
    default:
        erro.innerHTML = "Por favor selecione um tema"
   }
}