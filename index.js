español = document.getElementById("español");
italiano = document.getElementById("italiano");
ingles = document.getElementById("ingles");
español_celular = document.getElementById("español_celular");
italiano_celular = document.getElementById("italiano_celular");
ingles_celular = document.getElementById("ingles_celular");
navespañol = document.getElementById("contenedorul")
navitaliano = document.getElementById("contenedoruldeitaliano")
navingles = document.getElementById("contenedoruldeingles")
sobremienespañol = document.getElementById("sobremienespañol")
sobremienitaliano = document.getElementById("sobremienitaliano")
sobremieningles = document.getElementById("sobremieningles")
card1_español = document.querySelector("#card-español")
card1_italiano = document.querySelector("#card-italiano")
card1_ingles= document.querySelector("#card-ingles") 
card2_español = document.querySelector("#card2-español")
card2_italiano = document.querySelector("#card2-italiano")
card2_ingles= document.querySelector("#card2-ingles")
card3_español = document.querySelector("#card3-español")
card3_italiano = document.querySelector("#card3-italiano")
card3_ingles= document.querySelector("#card3-ingles")
h2_español = document.querySelector("#h2_español")
h2_italiano = document.querySelector("#h2_italiano")
h2_ingles = document.querySelector("#h2_ingles")
h3_español = document.querySelector("#h3_español")
h3_italiano = document.querySelector("#h3_italiano")
h3_ingles = document.querySelector("#h3_ingles")


español.addEventListener('click' , navenespañol)
italiano.addEventListener('click' , navenitaliano)
ingles.addEventListener('click' , naveningles)
español_celular.addEventListener('click' , navenespañol)
italiano_celular.addEventListener('click' , navenitaliano)
ingles_celular.addEventListener('click' , naveningles)



  function navenespañol()  {
    navespañol.style.display  = "flex"
    navitaliano.style.display = "none"
    navingles.style.display = "none"
    sobremienespañol.style.display = "block"
    sobremienitaliano.style.display = "none"
    sobremieningles.style.display = "none"
    card1_español.style.display  = "block"
    card1_italiano.style.display = "none"
    card1_ingles.style.display = "none"
    card2_español.style.display  = "block"
    card2_italiano.style.display = "none"
    card2_ingles.style.display = "none"
    card3_español.style.display  = "block"
    card3_italiano.style.display = "none"
    card3_ingles.style.display = "none"
    h2_español.style.display ="flex"
    h2_italiano.style.display ="none"
    h2_ingles.style.display ="none"
    h3_español.style.display ="flex"
    h3_italiano.style.display ="none"
    h3_ingles.style.display ="none"
    }
    function navenitaliano()  {
      navespañol.style.display  = "none"
      navitaliano.style.display = "flex"
      navingles.style.display = "none"
      sobremienespañol.style.display = "none"
      sobremienitaliano.style.display = "block"
      sobremieningles.style.display = "none"
      card1_español.style.display  = "none"
      card1_italiano.style.display = "block"
      card1_ingles.style.display = "none"
      card2_español.style.display  = "none"
      card2_italiano.style.display = "block"
      card2_ingles.style.display = "none"
      card3_español.style.display  = "none"
      card3_italiano.style.display = "block"
      card3_ingles.style.display = "none"
      h2_español.style.display ="none"
      h2_italiano.style.display ="flex"
      h2_ingles.style.display ="none"
      h3_español.style.display ="none"
      h3_italiano.style.display ="flex"
      h3_ingles.style.display ="none"
      }
      function naveningles()  {
        navespañol.style.display  = "none"
        navitaliano.style.display = "none"
        navingles.style.display = "flex"
        sobremienespañol.style.display = "none"
        sobremienitaliano.style.display = "none"
        sobremieningles.style.display = "block"
        card1_español.style.display  = "none"
        card1_italiano.style.display = "none"
        card1_ingles.style.display = "block"
        card2_español.style.display  = "none"
        card2_italiano.style.display = "none"
        card2_ingles.style.display = "block"
        card3_español.style.display  = "none"
        card3_italiano.style.display = "none"
        card3_ingles.style.display = "block"
        h2_español.style.display ="none"
        h2_italiano.style.display ="none"
        h2_ingles.style.display ="flex"
        h3_español.style.display ="none"
        h3_italiano.style.display ="none"
        h3_ingles.style.display ="flex"
        }

















































































var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;
showSlides();
showSlides2();
showSlides3();
showSlides4();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 4000);
}

function showSlides3() {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }

  slideIndex3++;
  if (slideIndex3 > slides3.length) {
    slideIndex3 = 1;
  }
  slides3[slideIndex3 - 1].style.display = "block";
  setTimeout(showSlides3, 4000);
}
function showSlides4() {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }

  slideIndex4++;
  if (slideIndex4 > slides4.length) {
    slideIndex4 = 1;
  }
  slides4[slideIndex4 - 1].style.display = "block";
  setTimeout(showSlides4, 2000);
}

