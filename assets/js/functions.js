/*================================================
*
* Template name : Nuur
* Version       : 1.0
* Author        : FlaTheme
* Author URL    : https://themeforest.net/user/flatheme
*
* Table of Contents : 
* 1.  Page Preloader
* 2.  Accordion
* 3.  Background Image
* 4.  Contact Form
* 5.  Counter
* 6.  Cursors
* 7.  Fullscreen Menu
* 8.  Header Menu
* 9.  Lightbox
* 10. Maps
* 11. Parallax
* 12. Portfolio Grid Filter
* 13. Portfolio Vertical
* 14. Progress Bar
* 15. ScrollCue
* 16. Scroll to Top
* 17. Skrollr
* 18. Swiper Sliders
*
===============================================*/
"use strict";


/*===============================================
  1. Page Preloader
===============================================*/
var body = document.body;

window.addEventListener("load", function() {
  document.body.classList.add("loaded");
});

var preloaderType = body.getAttribute("data-preloader");

if (preloaderType === "light") {
  var preloader = document.createElement("div");
  preloader.className = "preloader";
  preloader.innerHTML = "<div><span></span></div>";
  body.appendChild(preloader);
}
else if (preloaderType === "dark") {
  var preloader = document.createElement("div");
  preloader.className = "preloader preloader-dark";
  preloader.innerHTML = "<div><span></span></div>";
  body.appendChild(preloader);
}

/*===============================================
  2. Accordion
===============================================*/
var accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(function (accordionTitle) {
  accordionTitle.addEventListener("click", function () {
    var accordionList = accordionTitle.parentElement;
    var accordionContent = accordionTitle.nextElementSibling;

    if (accordionList.classList.contains("active")) {
      accordionList.classList.remove("active");
      accordionContent.style.maxHeight = null;
    } else {
      var accordionItems = accordionTitle.closest(".accordion").querySelectorAll("li");
      accordionItems.forEach(function (item) {
        item.classList.remove("active");
      });
      accordionList.classList.add("active");
      accordionTitle.closest(".accordion").querySelectorAll(".accordion-content").forEach(function (content) {
        content.style.maxHeight = "0";
      });
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });

  //
  // Give max-height to Accordion's active content //
  //
  var accordion = accordionTitle.parentElement.closest(".accordion");
  if (accordion.querySelector("li.active")) {
    var accordionActiveContent = accordion.querySelector("li.active .accordion-content");
    var accordionHeight = accordionActiveContent.scrollHeight;
    accordionActiveContent.style.maxHeight = accordionHeight + "px";
  }
});


/*===============================================
  3. Background Image
===============================================*/
var bgImages = document.querySelectorAll(".bg-image");

if (bgImages) {
  bgImages.forEach(function(bgImage) {
    var bgData = bgImage.getAttribute("data-bg-src");
    bgImage.style.backgroundImage = 'url("' + bgData + '")';
  });
}


/*===============================================
  4. Contact Form
===============================================*/
$("#contactform").on("submit", function(e) {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if (name === "") {
    $("#name").addClass("error-color");
  }
  if (email === "") {
    $("#email").addClass("error-color");
  }
  if (subject === "") {
    $("#subject").addClass("error-color");
  }
  if (message === "") {
    $("#message").addClass("error-color");
  }

  else {
    $.ajax({
      url:"/assets/php/contact-form.php",
      data:$(this).serialize(),
      type:"POST",
      success:function(data){
        $("#success").addClass("show-result"); //=== Show Success Message==
        $("#contactform").each(function(){
          this.reset();
        });
      },
      error:function(data){
        $("#error").addClass("show-result"); //===Show Error Message====
      }
    });
    var forms = $("#contactform input, #contactform textarea");
    forms.removeClass("error-color");
  }

  e.preventDefault();
});


/*===============================================
  5. Counter
===============================================*/
$(".counter").appear(function() {

  $(this).each(function () {
    $(this).prop("Counter",0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: "swing",
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
  
},{accX: 0, accY: -10});


/*===============================================
  6. Cursors
===============================================*/
const cursor = document.querySelector(".cursors");
const cursorInner = cursor.querySelector(".cursor-inner");
const hoverTitle = document.querySelectorAll("div[data-hover-title]");
const hoverTitleDark = document.querySelectorAll("div[data-hover-title-dark]");
const hoverText = document.querySelectorAll("div[data-hover-text]");
const hoverTextDark = document.querySelectorAll("div[data-hover-text-dark]");

document.addEventListener("mousemove", function (event) {
  cursor.style.left = event.pageX + "px";
  cursor.style.top = event.pageY + "px";
});

// Hover Title
hoverTitle.forEach(hoverItem => {
  hoverItem.addEventListener("mouseover", function () {
    cursorInner.innerHTML = "<div class='mouse-caption'><h2>" + hoverItem.getAttribute('data-hover-title') + "</h2></div>";
    cursorInner.classList.add("visible");
  });
  hoverItem.addEventListener("mouseout", function () {
    cursorInner.innerHTML = "";
  });
});

// Hover Title Dark
hoverTitleDark.forEach(hoverItem => {
  hoverItem.addEventListener("mouseover", function () {
    cursorInner.innerHTML = "<div class='mouse-caption mouse-caption-dark'><h2>" + hoverItem.getAttribute('data-hover-title-dark') + "</h2></div>";
    cursorInner.classList.add("visible");
  });
  hoverItem.addEventListener("mouseout", function () {
    cursorInner.innerHTML = "";
  });
});

// Hover Text
hoverText.forEach(hoverItem => {
  hoverItem.addEventListener("mouseover", function () {
    cursorInner.innerHTML = "<div class='mouse-caption'><h5>" + hoverItem.getAttribute('data-hover-text') + "</h5></div>";
    cursorInner.classList.add("visible");
  });
  hoverItem.addEventListener("mouseout", function () {
    cursorInner.innerHTML = "";
  });
});

// Hover Text Dark
hoverTextDark.forEach(hoverItem => {
  hoverItem.addEventListener("mouseover", function () {
    cursorInner.innerHTML = "<div class='mouse-caption mouse-caption-dark'><h5>" + hoverItem.getAttribute('data-hover-text-dark') + "</h5></div>";
    cursorInner.classList.add("visible");
  });
  hoverItem.addEventListener("mouseout", function () {
    cursorInner.innerHTML = "";
  });
});

// Hover Image
const hoverImgs = document.querySelectorAll("[data-hover-img]");
hoverImgs.forEach(hoverImg => {
  hoverImg.addEventListener("mouseover", function () {
    cursorInner.innerHTML =  "<img src='" + hoverImg.getAttribute('data-hover-img') + "'>";
    cursorInner.classList.add("visible");
  });
  hoverImg.addEventListener("mouseout", function () {
    cursorInner.innerHTML = "";
  });
});


/*===============================================
  7. Fullscreen Menu
===============================================*/
var fm = document.querySelector(".fullscreen-menu");

if (fm) {
  var fmToggle = document.querySelector(".fm-toggle");
  var fmClose = document.querySelector(".fm-close");

  // Open //
  fmToggle.addEventListener("click", function() {
    if (fm.classList.contains("show")) {
      fm.classList.remove("show");
    } else {
      fm.classList.add("show");
    }
  });

  // Close //
  fmClose.addEventListener("click", function() {
    fm.classList.remove("show");
    fmToggle.classList.remove("fm-toggle-hide");
  });
}


/*===============================================
  8. Header Menu
===============================================*/
var header = document.querySelector(".header");
var headerSticky = document.querySelector(".header.sticky-autohide");
var headerMenu = document.querySelector(".header-menu");
var c, currentScrollTop = 0;

//
// Sticky - Auto Hide //
//
if (headerSticky) {
  window.addEventListener("scroll", function() {
    var a = window.pageYOffset;
    currentScrollTop = a;

    if (c < currentScrollTop && a > 210) {
      if (!headerSticky.classList.contains("header-menu-show")) {
        headerSticky.classList.add("hide");
      }
    } else if (c > currentScrollTop && !(a <= 210)) {
      headerSticky.classList.remove("hide");
    }

    c = currentScrollTop;
  });
}

//
// Add Placeholder when Sticky mode is activated //
//
if (document.querySelector(".header.sticky-autohide:not(.header-lg, .header-xl, .transparent-light, .transparent-dark)")) {
  var headerPlaceholder = document.createElement("div");
  headerPlaceholder.className = "header-placeholder";
  document.querySelector(".header.sticky-autohide").insertAdjacentElement("beforebegin", headerPlaceholder);
}
if (document.querySelector(".header-lg.sticky-autohide:not(.transparent-light, .transparent-dark)")) {
  var headerPlaceholderLG = document.createElement("div");
  headerPlaceholderLG.className = "header-placeholder-lg";
  document.querySelector(".header-lg.sticky-autohide").insertAdjacentElement("beforebegin", headerPlaceholderLG);
}
if (document.querySelector(".header-xl.sticky-autohide:not(.transparent-light, .transparent-dark)")) {
  var headerPlaceholderXL = document.createElement("div");
  headerPlaceholderXL.className = "header-placeholder-xl";
  document.querySelector(".header-xl.sticky-autohide").insertAdjacentElement("beforebegin", headerPlaceholderXL);
}

//
// Sticky //
//
if (document.querySelector(".header.sticky:not(.header-lg, .header-xl, .transparent-light, .transparent-dark)")) {
  var headerPlaceholder = document.createElement("div");
  headerPlaceholder.className = "header-placeholder";
  document.querySelector(".header.sticky").insertAdjacentElement("beforebegin", headerPlaceholder);
}
if (document.querySelector(".header-lg.sticky:not(.transparent-light, .transparent-dark)")) {
  var headerPlaceholderLG = document.createElement("div");
  headerPlaceholderLG.className = "header-placeholder-lg";
  document.querySelector(".header-lg.sticky").insertAdjacentElement("beforebegin", headerPlaceholderLG);
}
if (document.querySelector(".header-xl.sticky:not(.transparent-light, .transparent-dark)")) {
  var headerPlaceholderXL = document.createElement("div");
  headerPlaceholderXL.className = "header-placeholder-xl";
  document.querySelector(".header-xl.sticky").insertAdjacentElement("beforebegin", headerPlaceholderXL);
}

//
// Transparent //
//
if (document.querySelector(".header.transparent-light")) {
  window.addEventListener("scroll", function() {
    var headerFixed = document.querySelectorAll(".header.sticky-autohide, .header.sticky");
    if (window.pageYOffset > 10) {
      headerFixed.forEach(function(header) {
        header.classList.remove("transparent-light");
      });
    } else {
      headerFixed.forEach(function(header) {
        header.classList.add("transparent-light");
      });
    }
  });
}
if (document.querySelector(".header.transparent-dark")) {
  window.addEventListener("scroll", function() {
    var headerFixed = document.querySelectorAll(".header.sticky-autohide, .header.sticky");
    if (window.pageYOffset > 10) {
      headerFixed.forEach(function(header) {
        header.classList.remove("transparent-dark");
      });
    } else {
      headerFixed.forEach(function(header) {
        header.classList.add("transparent-dark");
      });
    }
  });
}

//
// Mobile Menu //
//
var mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", function() {
    if (header.classList.contains("header-menu-show")) {
      header.classList.remove("header-menu-show");
      mobileMenuToggle.classList.remove("toggle-close");
    } else {
      header.classList.add("header-menu-show");
      mobileMenuToggle.classList.add("toggle-close");
    }
  });
}
if (header) {
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".header-menu, .mobile-menu-toggle")) {
      if (header.classList.contains("header-menu-show")) {
        header.classList.remove("header-menu-show");
        mobileMenuToggle.classList.remove("toggle-close");
      }
    }
  });
}


//
// Dropdown Menu //
//
if (document.querySelector(".nav-dropdown")) {
  var navDropdowns = document.querySelectorAll(".nav-dropdown");
  var navSubdropdowns = document.querySelectorAll(".nav-subdropdown");
  var navMegaDropdowns = document.querySelectorAll(".mega-nav-dropdown");

  navDropdowns.forEach(function(navDropdown) {
    var parentNavItem = navDropdown.parentNode;
    parentNavItem.insertAdjacentHTML("beforeend", '<div class="nav-dropdown-toggle"><i class="fa-solid fa-angle-down"></i></div>');
  });

  navSubdropdowns.forEach(function(navSubdropdown) {
    var parentNavDropdownItem = navSubdropdown.parentNode;
    parentNavDropdownItem.classList.add("dropdown-icon-space");
    parentNavDropdownItem.insertAdjacentHTML("beforeend", '<div class="nav-subdropdown-toggle"><i class="fa-solid fa-angle-right"></i></div>');
  });

  navMegaDropdowns.forEach(function(navMegaDropdown) {
    var parentNavItem = navMegaDropdown.parentNode;
    parentNavItem.insertAdjacentHTML("beforeend", '<div class="nav-megadropdown-toggle"><i class="fa-solid fa-angle-down"></i></div>');
  });

  var navDropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");
  navDropdownToggles.forEach(function(navDropdownToggle) {
    var parentNavItem = navDropdownToggle.parentNode;
    var navDropdown = parentNavItem.querySelector(".nav-dropdown");

    navDropdownToggle.addEventListener("click", function(e) {
      if (navDropdownToggle.classList.contains("active")) {
        navDropdownToggle.classList.remove("active");
        navDropdown.classList.remove("show");
      } else {
        navDropdownToggle.classList.add("active");
        navDropdown.classList.add("show");
      }
      e.preventDefault();
    });
  });

  var navSubdropdownToggles = document.querySelectorAll(".nav-subdropdown-toggle");
  navSubdropdownToggles.forEach(function(navSubdropdownToggle) {
    var parentNavDropdownItem = navSubdropdownToggle.parentNode;
    var navSubdropdown = parentNavDropdownItem.querySelector(".nav-subdropdown");

    navSubdropdownToggle.addEventListener("click", function(e) {
      if (navSubdropdownToggle.classList.contains("active")) {
        navSubdropdownToggle.classList.remove("active");
        navSubdropdown.classList.remove("show");
      } else {
        navSubdropdownToggle.classList.add("active");
        navSubdropdown.classList.add("show");
      }
      e.preventDefault();
    });
  });

  var navMegaDropdownToggles = document.querySelectorAll(".nav-megadropdown-toggle");
  navMegaDropdownToggles.forEach(function(navMegaDropdownToggle) {
    var parentNavItem = navMegaDropdownToggle.parentNode;
    var navMegaDropdown = parentNavItem.querySelector(".mega-nav-dropdown");

    navMegaDropdownToggle.addEventListener("click", function(e) {
      if (navMegaDropdownToggle.classList.contains("active")) {
        navMegaDropdownToggle.classList.remove("active");
        navMegaDropdown.classList.remove("show");
      } else {
        navMegaDropdownToggle.classList.add("active");
        navMegaDropdown.classList.add("show");
      }
      e.preventDefault();
    });
  });
}


/*===============================================
  9. Lightbox
===============================================*/
const lightbox = GLightbox();


/*===============================================
  10. Google Maps
===============================================*/
var mapCanvas = $(".gmap");

if (mapCanvas.length) {
  var m,divId,initLatitude, initLongitude, map;

  for (var i = 0; i < mapCanvas.length; i++) {
    m = mapCanvas[i];

    initLatitude = m.dataset["latitude"];
    initLongitude = m.dataset["longitude"];
    divId = "#"+ m["id"];

    map = new GMaps({
      el: divId,
      lat: initLatitude,
      lng: initLongitude,
      zoom: 16,
      scrollwheel: false,
      styles: [
          /* style your map at https://snazzymaps.com/editor and paste JSON here */
      ]
    });

    map.addMarker({
      lat : initLatitude,
      lng : initLongitude
    });
  }
}


/*===============================================
  11. Parallax
===============================================*/
if (window.matchMedia("(min-width: 1200px)").matches) {
  var parallaxBg = $(".parallax");

  if (parallaxBg.length) {
    parallaxBg.each(function() {
      $(this).parallaxie({
        speed: 0.2
      });
    });
  }
}


/*===============================================
  12. Portfolio Grid Filter
===============================================*/
var pGrid = $(".portfolio-grid");

if (pGrid.length) {
  var mixer = mixitup('.portfolio-grid', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 250
    }
  });
}


/*===============================================
  13. Portfolio Vertical
===============================================*/
var vPortfolioNav = document.querySelector(".vp-nav");
var vPortfolioLinks = document.querySelectorAll(".vp-link");

if (vPortfolioLinks) {
  vPortfolioLinks.forEach(function(vPortfolioLink) {
    vPortfolioLink.addEventListener("mouseenter", function() {
      var thisParent = this.parentElement;
      var vPortfolioChildrens = vPortfolioNav.querySelectorAll("li");

      vPortfolioChildrens.forEach(function(child) {
        child.classList.remove("active");
      });

      thisParent.classList.add("active");
    });
  });
}


/*===============================================
  14. Progress Bar
===============================================*/
$(".animated-progress div").each(function () {
  $(this).appear(function () {
    $(this).css("width", $(this).attr("data-progress") + "%");
    $(this).addClass("progress-show");
  },{accX: 0, accY: -10})
});


/*===============================================
  15. ScrollCue
===============================================*/
scrollCue.init();


/*===============================================
  16. Scroll to Top
===============================================*/
var scrollTopBtn = document.querySelector(".scrolltotop");

if (scrollTopBtn) {
  // Show, Hide //
  window.addEventListener("scroll", function() {
    if (window.scrollY > 700) { // 700px from top
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
  // Scroll to top on click //
  scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
    });
  });
}


/*===============================================
  17. Skrollr
===============================================*/
if (window.matchMedia("(min-width: 768px)").matches) {
  var s = skrollr.init({
    forceHeight: false,
  });
}


/*===============================================
  18. Sliders
===============================================*/
//
// Blog Slider - 2 Items //
//
var swiper = new Swiper(".blog-slider-2", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".blog-slider-2-next",
    prevEl: ".blog-slider-2-prev",
  },
  pagination: {
    el: ".blog-slider-2-pagination",
    clickable: true,
  },
});


//
// Blog Slider - 2 Items small //
//
var swiper = new Swiper(".blog-slider-2sm", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".blog-slider-2sm-next",
    prevEl: ".blog-slider-2sm-prev",
  },
});


//
// Blog Slider - 3 Items //
//
var swiper = new Swiper(".blog-slider-3", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".blog-slider-3-next",
    prevEl: ".blog-slider-3-prev",
  },
  pagination: {
    el: ".blog-slider-3-pagination",
    clickable: true,
  },
});


//
// Blog Slider - Featured 3 Items //
//
var swiper = new Swiper(".blog-slider-featured-3", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".blog-slider-featured-3-next",
    prevEl: ".blog-slider-featured-3-prev",
  },
  pagination: {
    el: ".blog-slider-featured-3-pagination",
    clickable: true,
  },
});


//
// Clients Slider - 5 Items //
//
var swiper = new Swiper(".clients-slider-5", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    998: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


//
// Clients Slider - 6 Items //
//
var swiper = new Swiper(".clients-slider-6", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    998: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


//
// Portfolio Horizontal Slider //
//
var swiper = new Swiper(".portfolio-horizontal-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
  },
  navigation: {
    nextEl: ".horizontal-portfolio-next",
    prevEl: ".horizontal-portfolio-prev",
  },
  pagination: {
    el: ".horizontal-portfolio-pagination",
    clickable: true,
  },
});


//
// Testimonial Slider - 1 Item //
//
var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".testimonial-slider-next",
    prevEl: ".testimonial-slider-prev",
  },
});


//
// Testimonial Slider - 2 Items //
//
var swiper = new Swiper(".testimonial-slider-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".testimonial-slider-2-next",
    prevEl: ".testimonial-slider-2-prev",
  },
});


//
// Sliding boxes //
//
var swiper = new Swiper(".sliding-boxes", {
  slidesPerView: "auto",
  spaceBetween: 40,
  speed: 14000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    clickable: false,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
});


//
// Sliding Text //
//
var swiper = new Swiper(".sliding-text", {
  slidesPerView: "auto",
  spaceBetween: 70,
  speed: 20000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    clickable: false,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
});


//
// Sliding Text - Reverse //
//
var swiper = new Swiper(".sliding-text-reverse", {
  slidesPerView: "auto",
  spaceBetween: 70,
  speed: 20000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    clickable: false,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});
