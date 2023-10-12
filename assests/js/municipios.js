/*-----------------------*\
    header dos municipios
/*-----------------------*/

const header = document.getElementById("header")
const htmlDoHeader = 
`
    <header class="layout-cabecalho">
    <h2>3°INFORMÁTICA</h2>
    <nav class="nav">
    <i class="bi bi-brightness-high" id="fundoSimples"></i>
    <i class="bi bi-brightness-high-fill" id="fundoDoMunicipio"></i>
    <i class='bx bx-menu' id="menu"></i>
    <div class="nav-links">
        <a href="#1">QUEM SOMOS?<i class="bi bi-caret-down"></i></a>
        <a href="#2">FALE CONOSCO<i class="bi bi-caret-down"></i></a>
        <a href="#3">DISCIPLINAS<i class="bi bi-caret-down"></i></a>
    </div>
    </nav>
    </header>

`
/*-----------------------*\
    botao trocar tema
/*-----------------------*/



header.innerHTML = htmlDoHeader

/*-----------------------*\
    footer dos municipios
/*-----------------------*/

const footer = document.getElementById("footer")
const htmlDoFooter = 
`
    <footer class="layout-rodape">
        <p>&copy; CETEP - da Bacia do Paramirim</p>
    </footer>
`
footer.innerHTML = htmlDoFooter