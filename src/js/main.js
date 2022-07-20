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
  breakpoints: {
    1080: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1,
    },
    390: {
      slidesPerView: 1,
    },
  },
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

if (window.innerWidth < 870) {
  const headerMenu = document.querySelector(".header__menu");
  const mobilMenu = document.querySelector(".mobil__menu .container");
  const headerContact = document.querySelector(".header__contact");
  const headerWishlist = document.querySelector(".header__user a:first-child");
  const headerSocial = document.querySelector(".header__social");
  headerMenu.remove();
  headerWishlist.remove();
  headerContact.remove();
  headerSocial.remove();
  mobilMenu.append(headerMenu, headerWishlist, headerContact, headerSocial);
  const mainSlider = new Swiper(".home__flex", {
    spaceBetween: 20,
    loop: true,
  });
}

const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  document.querySelector(".mobil__menu").classList.toggle("active");
});

document.querySelectorAll(".custom__select").forEach((select) => {
  select.addEventListener("click", () => {
    select.querySelector(".variation").classList.toggle("active");
  });
});
