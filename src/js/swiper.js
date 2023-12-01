import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

export default swiper;
