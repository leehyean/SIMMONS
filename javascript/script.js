
AOS.init();

var swiper = new Swiper(".section_1 .mySwiper", {
  direction: 'horizontal',	
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
    autoplay: true,
    autoplay: {
      delay: 4000,
  
    },
  observer: true,
  observerParents: true,
  
});


// section_1



var swiper = new Swiper(".section_3 .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 반응형

   breakpoints: { 
    

    800: { 
      spaceBetween: 20,
    },

    0: { 
      spaceBetween: 20,
    },

    },
});

// section_3



var swiper = new Swiper(".section_4 .mySwiper", {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerGroup: 1,
});

// section_4




    



