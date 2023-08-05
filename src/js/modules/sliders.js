import Swiper, { Pagination, Autoplay, Parallax } from "swiper";

export function useSliders() {
  if (document.querySelector(".half-slider")) {
    new Swiper(".half-slider", {
      modules: [Pagination, Autoplay, Parallax],
      wrapperClass: "half-wrapper",
      slideClass: "half-slide",
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1400,
      loop: true,
      parallax: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".pagination",
        clickable: true,
      },
    });
  }
}
