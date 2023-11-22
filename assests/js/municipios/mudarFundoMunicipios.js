const trocaDeTema = document.getElementById('fundo')
const body = document.querySelector("body")
trocaDeTema.addEventListener("click", () => {
    trocaDeTema.classList.toggle("tema-js")
    const tema = document.querySelector("i.tema-js")
    if (tema) {
        const id = body.id
        const nome = images[id]
        let url =''
        nome.forEach(fundo => {
            if (fundo == nome[0]) {
                url = fundo
                body.style.backgroundImage = `url("${url}")`
            }
            
        });
        
    }else{
        const fundoPadrao = imagemPadrao
        body.style.backgroundImage = `url("${fundoPadrao}")`
    }
})

const images = {
    boquira: ["../assests/images/fundo-pagina-municipios/boquira/Boquira-1.jpg"],
    botupora: [ "../assests/images/fundo-pagina-municipios/botupora/Botupora.jpeg"],
    caturama: ["../assests/images/fundo-pagina-municipios/caturama/Caturama.jpg"],
    ericoCardoso: ["../assests/images/fundo-pagina-municipios/ericoCardoso/EricoCardoso-2.jpg"],
    ibipitanga: ["../assests/images/fundo-pagina-municipios/ibipitanga/ibipitanga-1.jpg"],
    macaubas: ["../assests/images/fundo-pagina-municipios/macaubas/Macaubas-1.jpg"],
    paramirim: ["../assests/images/fundo-pagina-municipios/paramirim/Paramirim-1.jpg"],
    rioDoPires: ["../assests/images/fundo-pagina-municipios/rioDoPires/RioDoPires-3.jpg"],
}

const imagemPadrao = "../assests/images/Fundo.jpg"

