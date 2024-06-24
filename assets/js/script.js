'use strict';

//Animação de correr para direita
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Verifica se a URL atual inclui 'message.html'
if (window.location.pathname.includes('message.html')) {
  // Redireciona para index.html após 4 segundos
  setTimeout(function() {
      window.location.href = 'index.html';
  }, 4000);
}


// Adiciona eventListener em múltiplos elementos


const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');

    // Adiciona a classe 'visible' aos elementos após um pequeno delay
    setTimeout(function() {
      fadeElements.forEach(function(element) {
        element.classList.add('visible');
      });
    }, 200); // 100 milissegundos de atraso para garantir que o DOM está pronto
  });




// Desativar o clique direito
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});


// Desativar teclas específicas
document.addEventListener('keydown', function(event) {
  // Verificar se uma das teclas específicas está sendo pressionada
  if (
      event.key === 'F12' ||  // F12
      (event.ctrlKey && event.shiftKey && event.key === 'I') ||  // Ctrl+Shift+I
      (event.ctrlKey && event.shiftKey && event.key === 'J') ||  // Ctrl+Shift+J
      (event.ctrlKey && event.key === 'U')  // Ctrl+U
  ) {
      event.preventDefault();
  }
});


// Scroll Suave
document.addEventListener("DOMContentLoaded", function () {
  var options = {
      damping: 0.01, // Valor entre 0 e 1 para controlar a suavidade
  };

  var scrollbar = Scrollbar.init(document.querySelector("#content"), options);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          scrollbar.scrollIntoView(targetElement, {
              damping: 0.05,
              offsetTop: 0,
              callback: function() {
                  console.log('done!');
              }
          });
      });
  });
});


//Toggle do navbar mobile


const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const toggleNavbar = function () { navbar.classList.toggle("active"); }
navToggler.addEventListener("click", toggleNavbar);



//Ativar header quando scrollar para 50px


const header = document.querySelector("[data-header]");
const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}
window.addEventListener("scroll", activeHeader);



// Seleciona o slider


const slider = document.querySelector('.slider');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.style.transition = 'transform 0.1s ease'; // Aplica uma transição suave
  slider.scrollLeft = scrollLeft - walk;
});
