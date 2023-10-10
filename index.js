const menuButton = document.querySelector("nav i")
const divLinks = document.querySelector("div.nav-links")
const titulo = document.querySelector("div.layout-titulo")
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("botao-js")
    divLinks.classList.toggle("nav-menu")
    let verificarClasse = divLinks.classList.contains("nav-menu")
    console.log(verificarClasse);
    if (verificarClasse === true) {
        titulo.addEventListener("click", () => {
            divLinks.classList.remove("nav-menu")
        })
        
    }
})

