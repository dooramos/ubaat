/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  
  pagination: {
    el: '.swiper-pagination'
  },
  
  autoplay: {
    delay: 5000,
  },/**/
  //mousewheel: true,
  //keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
});

const swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const  swiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section.section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
   
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {      
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')     
    }
  }
}


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function getItemByRegion(regiao, index) {
  
  
  let _html ='<h3>' + regiao.regiao + '</h3>';
  let _container= "";
  switch(regiao.regiao){
    case 'Região Centro-Oeste':
      _container ="centrooeste";
      break;
      case 'Região Nordeste':
        _container ="nordeste";
      break;
      case 'Região Norte':
        _container ="norte";
      break;
      case 'Região Sul':
        _container ="sul";
      break;
      case 'Região Sudeste':
        _container ="sudeste";
      break;
  }
  let destination =document.getElementById(_container);
  regiao.estados.forEach(function(estado, index) {
    
    _html+='<h4 class="city '+_container+'">' + estado.nome + '</h4>';
    _html+='<ul>';
    estado.lista.forEach(function(curso,index){
      _html+='<li><span class="campo">Nome: </span><span class="valor">'+curso.nome+'</span><li>';
      _html+='<li><span class="campo">Instituição: </span><span class="valor">'+curso.instituicao+'</span><li>';
      _html+='<li><span class="campo">Endereço: </span><span class="valor">'+curso.endereco+'</span><li>';
      _html+='<li><span class="campo">Contato: </span><span class="valor">'+curso.telefone+'</span><li>';
      _html+='<li><span class="campo">Site: </span><span class="valor">'+curso.site+'</span><li>';
      _html+='<li><span class="campo">Email: </span><span class="valor">'+curso.email+'</span><li>';
      _html+='<li><span class="campo">Coordenação: </span><span class="valor">'+curso.coordenacao+'</span><li>';
      _html+='<li><span class="breakline"></span><li>';
      
    })
    _html+='</ul>';
    
    destination.innerHTML=_html;
  });
}

 

function getData(){
  //const url = 'https://www.ubaat.com.br/assets/cursosubaat.json';
  fetch('./assets/cursosubaat.json')
  .then((resp) => resp.json())
  .then(function(data) {
    var regioes = data.cursos;
    regioes.forEach(getItemByRegion);
        })
  .catch(function(error) {
    console.log(error);
      });
    //swiper.init();
}

function modalFy(modalToShow,openButton,closeButton){
var modal = document.getElementById(modalToShow);
var openB = document.getElementById(openButton);
var closeB = document.getElementById(closeButton);
  openB.onclick = function() {  modal.style.display = "block";   return false;}
  if(closeB!=null){ closeB.onclick = function() {  modal.style.display = "none";   return false;}}
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };  
}

function modalVi(modalToShow,openButton,closeButton){
  var modalVi = document.getElementById(modalToShow);
  var openVi = document.getElementById(openButton);
  var closeVi = document.getElementById(closeButton);
  
    openVi.onclick = function() {  modalVi.style.display = "block";  return false;}
    if(closeVi!=null){ closeVi.onclick = function() {  modalVi.style.display = "none"; return false;}}
    window.onclick = function(event) {
      if (event.target == modalVi) {
        modalVi.style.display = "none";
        
      }
    };  
  }
  function modalHome(modalToShow,closeButton){
    var modal = document.getElementById(modalToShow);
    var closeB = document.getElementById(closeButton);
    
      if(closeB!=null){ closeB.onclick = function() {  modal.style.display = "none";   return false;}}
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };  
      modal.style.display = "block";  

    }
  
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
  fixmeTop()
})
 
fixmeTop = function(){  
  var fix=document.getElementsByClassName('.fixme')[0]
  if(fix!=null){
  var fixmeTop = fix.offsetTop;
  var currentScroll = window.offsetTop;
  if (currentScroll >= fixmeTop) {
      fix.css({
          position: 'fixed',
          top: '0',
          left: '0'
      });
  } else {
      fix.css({
          position: 'static'
      });
  }
  }
}




modalVi('videoModal','home','videoModalClose');
modalHome('homeModal','homeModalClose');
getData();
modalFy('diretoriaModal','diretoriaModalOpen','diretoriaModalClose');
