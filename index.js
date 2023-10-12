/*-----------------------*\
    botao menu
/*-----------------------*/

const menuButton = document.querySelector("nav i#menu")
const divLinks = document.querySelector("div.nav-links")
const pagina = document.querySelector("main")
const nav = document.querySelector("nav.nav")
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("botao-js")
    divLinks.classList.toggle("nav-menu")
    nav.classList.toggle("nav-js")
    let verificarClasse = divLinks.classList.contains("nav-menu")
    if (verificarClasse === true) {
        pagina.addEventListener("click", () => {
            menuButton.classList.remove("botao-js")
            divLinks.classList.remove("nav-menu")
            nav.classList.remove("nav-js")
        })
    }
})

function tamanhoDaTelaMenorQue720() {
    return window.innerWidth >= 720
}
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        let tamanhoDaTela = tamanhoDaTelaMenorQue720();
        if (tamanhoDaTela === true) {
            menuButton.classList.remove("botao-js")
            divLinks.classList.remove("nav-menu")
            nav.classList.remove("nav-js")
        }
    })
})

