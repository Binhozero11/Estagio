const head = document.querySelector("head")
const htmlHead = 
`
    <link rel="shortcut icon" href="../assests/images/favicon.ico
    " type="image/x-icon">
`
head.innerHTML += htmlHead

/*-----------------------*\
    header dos municipios
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
    botao trocar tema
/*-----------------------*/





/*-----------------------*\
    footer dos municipios
/*-----------------------*/

const footer = document.getElementById("footer")
const htmlDoFooter = 
`
    <p>&copy; CETEP - da Bacia do Paramirim</p>
`
footer.innerHTML = htmlDoFooter