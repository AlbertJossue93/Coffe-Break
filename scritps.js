const modal = document.querySelector(".modal") /*Procurando a classe modal no html*/
const mascara = document.querySelector(".mascara-modal")
function mostrarModal(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal(){
    modal.style.left = '-50%'
    mascara.style.visibility = 'hidden'
}