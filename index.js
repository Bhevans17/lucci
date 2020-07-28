(function () {
  "use strict";
  /* Show Side Menu */
  let menuButton = document.getElementsByClassName("navbar__hamburger")[0];
  let crossButton = document.getElementsByClassName("fa-times")[0];
  let sideMenu = document.getElementsByClassName("sidemenu")[0];

  menuButton.onclick = () => {
    sideMenu.style.display = "block";
  };

  crossButton.onclick = () => {
    sideMenu.style.display = "none";
  };

  /* Navbar scroll animation */
  let navbar = document.getElementsByClassName("navbar")[0];
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.style.background = "black";
      navbar.style.color = "white";
    } else {
      navbar.style.background = "";
      navbar.style.color = "black";
    }
  }

  /* Slider */
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  let dot = document.getElementsByClassName("dot");
  let prev = document.getElementsByClassName("prev")[0];
  let next = document.getElementsByClassName("next")[0];

  dot[0].onclick = () => currentSlide(1);
  dot[1].onclick = () => currentSlide(2);
  dot[2].onclick = () => currentSlide(3);
  prev.onclick = () => plusSlides(-1);
  next.onclick = () => plusSlides(1);
})();
