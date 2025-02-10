const quest = [...document.querySelectorAll(".quest")]
const square = [...document.querySelectorAll('.square')]
const next = document.getElementById("next");
const tryAgain = document.getElementById("try-again")
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

const recomecar = tryAgain.addEventListener("click", ()=>{
   square[2].classList.remove("ativo");
   square[0].classList.add("ativo");
})