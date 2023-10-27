const trocaDeTema = document.getElementById('fundo')
const body = document.querySelector("body")
trocaDeTema.addEventListener("click", () => {
    trocaDeTema.classList.toggle("tema-js")
    const tema = document.querySelector("i.tema-js")
    if (tema) {
        const id = body.id
        const nome = images[id]
        let url =''
        url = nome
        body.style.backgroundImage = `url("${url}")`
    }else{
        const fundoPadrao = imagemPadrao
        body.style.backgroundImage = `url("${fundoPadrao}")`
    }
})

const images = {
    boquira: "../assests/images/fundo-pagina-municipios/boquira/Boquira.jpg",
    botupora: "../assests/images/fundo-pagina-municipios/botupora/botuporã.jpeg",
    caturama: "../assests/images/fundo-pagina-municipios/caturama/Caturama.jpg",
    ericoCardoso: "../assests/images/fundo-pagina-municipios/ericoCardoso/Érico-cardoso.png",
    ibipitanga: "../assests/images/fundo-pagina-municipios/ibipitanga/ibipitanga.jpg",
    macaubas: "../assests/images/fundo-pagina-municipios/macaubas/macaúbas.png",
    paramirim: "../assests/images/fundo-pagina-municipios/paramirim/paramirim.png",
    rioDoPires: "../assests/images/fundo-pagina-municipios/rioDoPires/rio-do-pires.jpg",
}

const imagemPadrao = "../assests/images/fundo.jpg"

