import Swiper, { Pagination, Autoplay, Parallax, Navigation, EffectCube } from "swiper";

export function useSliders() {
  if (document.querySelector(".half-slider")) {
    const halfSlider = new Swiper(".half-slider", {
      modules: [Pagination, Autoplay, Parallax],
      wrapperClass: "half-wrapper",
      slideClass: "half-slide",
      slidesPerView: 1,
      spaceBetween: 30,
      disableOnInteractio: false,
      speed: 1100,
      loop: true,
      parallax: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".pagination",
        clickable: true,
      },
    });
    halfSlider.update();
  }

  if (document.querySelector(".full-slider")) {
    new Swiper(".full-slider", {
      modules: [Autoplay, Navigation],
      wrapperClass: "full-wrapper",
      slideClass: "full-slide",
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1100,
      loop: true,
      autoplay: {
        delay: 3000,
      },

      navigation: {
        prevEl: "#comments-prev",
        nextEl: "#comments-next",
      },

      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
}
