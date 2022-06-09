import * as flsFunctions from "./modules/function.js";
import Swiper, { Navigation } from "swiper";
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
