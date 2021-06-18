// hamberger-menu

const menu = document.querySelector(".hamberger-menu");
const menuBtn = document.querySelector(".hamberger");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("visible");
})


// register 

const cta = document.querySelector(".cta")
const form = document.querySelector(".form_container")
const close = document.querySelector(".close")

cta.addEventListener("click", e => {
    form.classList.add("show")
})

close.addEventListener("click", e => {
    form.classList.remove("show")
})


  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';
  // core version + navigation, pagination modules:
  import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
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


