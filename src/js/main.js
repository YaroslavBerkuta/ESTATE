import * as flsFunctions from "./modules/function.js";
import Swiper, { Navigation, FreeMode, Scrollbar } from "swiper";
import "swiper/css/bundle";
flsFunctions.isWebp();

const swiperPost = new Swiper(".post__slider", {
  slidesPerView: 1,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const lastPost = new Swiper(".last__post", {
  slidesPerView: 3,
  spaceBetween: 30,
});
const aboutSlide = new Swiper(".about__slider", {
  slidesPerView: "auto",
  modules: [FreeMode, Scrollbar],
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  loop: true,
  scrollbar: {
    el: ".about__slider-scrollbar",
    draggable: true,
  },
});
