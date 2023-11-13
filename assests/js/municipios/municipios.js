/*-----------------------------*\
    head padrão dos municípios
/*-----------------------------*/

const head = document.querySelector("head")
const htmlHead = 
`
    <link rel="shortcut icon" href="../assests/images/favicon.ico
    " type="image/x-icon">
`
head.innerHTML += htmlHead

/*-----------------------*\
    header dos municípios
/*-----------------------*/

const header = document.getElementById("header")
const htmlDoHeader = 
`
    <a href="../index.html">
        <h2>3°INFORMÁTICA</h2>
    </a>
    <nav class="nav">
        <i class="bi bi-brightness-high" id="fundo"></i>
    </nav>

`
header.innerHTML = htmlDoHeader

/*-----------------------*\
    nav bootstrap
/*-----------------------*/

const navMunicipios = document.getElementById("nav-js")
const htmlNav = 
`
<div class="nav nav-pills mb-3" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-aspectosGeográficos-tab" data-bs-toggle="tab"
        data-bs-target="#nav-aspectosGeográficos" type="button" role="tab"
        aria-controls="nav-aspectosGeográficos" aria-selected="true">Aspectos Geográficos
    </button>
    <button class="nav-link" id="nav-historia-tab" data-bs-toggle="tab" data-bs-target="#nav-historia"
        type="button" role="tab" aria-controls="nav-historia" aria-selected="false">Historia
    </button>
    <button class="nav-link" id="nav-biologia-tab" data-bs-toggle="tab" data-bs-target="#nav-biologia"
        type="button" role="tab" aria-controls="nav-biologia" aria-selected="false">Biologia
    </button>
    <button class="nav-link" id="nav-contatos-tab" data-bs-toggle="tab" data-bs-target="#nav-contatos"
        type="button" role="tab" aria-controls="nav-contatos" aria-selected="false">Contatos
    </button>
</div>
`

navMunicipios.innerHTML = htmlNav

/*-----------------------*\
    footer dos municipios
/*-----------------------*/

const footer = document.getElementById("footer")
const htmlDoFooter = 
`
    <p>&copy; CETEP - da Bacia do Paramirim</p>
`
footer.innerHTML = htmlDoFooter