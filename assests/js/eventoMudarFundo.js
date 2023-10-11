const ancorasDosMunicipios = document.querySelectorAll('.nome-linkMunicipio a')
ancorasDosMunicipios.forEach(ancora => {
    ancora.addEventListener("mouseenter", function () {
        const id = ancora.id
        const nome = images[id]
        let url =''
        url = nome
        const selecionandoBody = document.querySelector("body")
        selecionandoBody.style.backgroundImage = `url("${url}")`
        fundoMunicipio.url = url
})
})
const images = {
    boquira: "../assests/images/fundo-municipios/Boquira.jpg",
    botupora: "../assests/images/fundo-municipios/botuporã.jpeg",
    caturama: "../assests/images/fundo-municipios/Caturama.jpg",
    ericoCardoso: "../assests/images/fundo-municipios/Érico-cardoso.png",
    ibipitanga: "../assests/images/fundo-municipios/ibipitanga.jpg",
    macaubas: "../assests/images/fundo-municipios/macaúbas.png",
    paramirim: "../assests/images/fundo-municipios/paramirim.png",
    rioDoPires: "../assests/images/fundo-municipios/rio-do-pires.jpg",
}

const fundoMunicipio = {
    url: null
}

module.exports = fundoMunicipio