
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
 
const swpArteterapia = new Swiper(".swpArteterapia", {
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
  breakpoints: 
  {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
}
});
const  swpArteterapiaTipos = new Swiper(".swpArteterapiaTipos", {
  navigation: {
    nextEl: ".swiper-button-next-art2",
    prevEl: ".swiper-button-prev-art2",
  } 
});
const  swpAssociacoes = new Swiper(".swpAssociacoes", {
  
  pagination: {
    el: '.swiper-pagination'
  },
  
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    480: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    640: {
      slidesPerView: 3,
      setWrapperSize: true
    },
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
});

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});



scrollReveal.reveal(
 `#warning a,
  #home a,
  #about .hightitle,
  #cursos .tablinks, 
  #arteterapia h2,  
  #arteterapia2 .swipper,
  #legis h2,
  #legis .swiper,
  #legis .legis-1,
  #legis .legis-2,
  #legis .legis-3,
  #legis .legis-4,
  #associacoes .swipper,
  #contact p, 
  #contact form  
  `,
  { interval: 300 }
);

const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function activateMenuAtCurrentSection() {
  const sections = document.querySelectorAll('main section.section[id]');  
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
   
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) 
    {
      if(document.querySelector('nav ul li a[href*=' + sectionId + ']')!=undefined        
      && document.querySelector('nav ul li a[href*=' + sectionId + ']')!=null)
      {
        document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
      }
    } 
    else
     {             
        if(document.querySelector('nav ul li a[href*=' + sectionId + ']')!=undefined        
        && document.querySelector('nav ul li a[href*=' + sectionId + ']')!=null)
        {
          document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')     
        }
    }
  }
}
function closeTab(){  
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById('closeTab').style.display = "none";
}
function openTab(evt, tabName) {
  
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById('closeTab').style.display = "block";
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

function getCursos(){
  
  fetch('./assets/cursosubaat.json')
  .then((resp) => resp.json())
  .then(function(data) {
    var regioes = data.cursos;
    regioes.forEach(getItemByRegion);
        })
  .catch(function(error) {
    console.log(error);
      });
}

function modalDiretoria(modalToShow,openButton,closeButton){
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

function modalVideo(modalToShow,openButton,closeButton){
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

function modalAviso(modalToShow,closeButton){
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

function contato(){
  const nome=document.getElementById('nome');
  const assunto=document.getElementById('assunto');
  const mensagem=document.getElementById('mensagem');
  const email=document.getElementById('email');

if(nome.value!==''&&nome.value!==undefined&&nome.value!==null
  && mensagem.value!==''&&mensagem.value!==undefined&&mensagem.value!==null
  && email.value!==''&&email.value!==undefined&&email.value!==null
  && assunto.value!==''&&assunto.value!==undefined&&assunto.value!==null
  )
  {   
   
    //fetch("https://localhost:44327/api/v1/Contato", {
      fetch("https://api.ubaat.com.br/api/v1/Contato", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: `{
        "contatoDe": "${email.value}",
        "contatoPara": "${assunto.value}",
        "nome": "${nome.value}",
        "mensagem": "${mensagem.value}"  
      }`,
    }).then((resp) => resp.json())
    .then(function(data) {
  
      if(data.status === 201||data.status ===200) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Mensagem Enviada',
          icon: 'success',
          confirmButtonText: 'Fechar'
        });
      }
      else
      {
        Swal.fire({
          title: 'Atenção!',
          text: 'Ocorreu um erro no envio da mensagem :(',
          icon: 'error',
          confirmButtonText: 'Fechar'
        });
      }
      resetFormContato();
    

    });
    return false;
  } else
  {
    Swal.fire({
      title: 'Atenção!',
      text: 'Todos os campos são obrigatórios!',
      icon: 'warning',
      confirmButtonText: 'Fechar'
    });
  }
}
  function resetFormContato(){  
document.forms[0].reset();
  }


window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection() 
}); 

swpArteterapia.init();
swpArteterapiaTipos.init();
swpAssociacoes.init();

modalVideo('videoModal','home','videoModalClose');
modalAviso('homeModal','homeModalClose');
modalDiretoria('diretoriaModal','diretoriaModalOpen','diretoriaModalClose');
getCursos();

