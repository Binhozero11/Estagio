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
    boquira: "../assests/images/fundo-municipios/boquira/Boquira.jpg",
    botupora: "../assests/images/fundo-municipios/botupora/botuporã.jpeg",
    caturama: "../assests/images/fundo-municipios/caturama/Caturama.jpg",
    ericoCardoso: "../assests/images/fundo-municipios/ericoCardoso/Érico-cardoso.png",
    ibipitanga: "../assests/images/fundo-municipios/ibipitanga/ibipitanga.jpg",
    macaubas: "../assests/images/fundo-municipios/macaubas/macaúbas.png",
    paramirim: "../assests/images/fundo-municipios/paramirim/paramirim.png",
    rioDoPires: "../assests/images/fundo-municipios/rioDoPires/rio-do-pires.jpg",
}

const imagemPadrao = "../assests/images/Fundo_título2.jpg"

