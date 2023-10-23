const head = document.querySelector("head")
const htmlHead = 
`
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="shortcut icon" href="../../assests/images/favicon.ico" type="image/x-icon">  
`
head.innerHTML += htmlHead
/*-----------------------*\
    header dos municipios
/*-----------------------*/
const header = document.getElementById("header")
const htmlDoHeader = 
`
    <a href="../../index.html">
        <h2>3°INFORMÁTICA</h2>
    </a>
    <nav class="nav">
    <i class='bx bx-menu' id="menu"></i>
    <div class="nav-links">
      <a href="./quemSomos.html">QUEM SOMOS?<i class="bi bi-caret-down"></i></a>
      <a href="./faleConosco.html">FALE CONOSCO<i class="bi bi-caret-down"></i></a>
      <a href="./disciplinas.html">DISCIPLINAS<i class="bi bi-caret-down"></i></a>
    </div>
  </nav>

`
header.innerHTML = htmlDoHeader

/*-----------------------*\
    footer dos municipios
/*-----------------------*/

const footer = document.getElementById("footer")
const htmlDoFooter = 
`
    <p>&copy; CETEP - da Bacia do Paramirim</p>
`
footer.innerHTML = htmlDoFooter