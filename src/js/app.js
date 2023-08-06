// import { hasErrors } from './modules/forms.js';
// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
// import { initTabs } from './modules/tabs.js';
import { useSliders } from "./modules/sliders.js";
import { initHeader } from "./modules/header.js";
// import { initModals, openModalIf } from './modules/modals.js';
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import AOS from 'aos';
// import fslightbox from 'fslightbox';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import MicroModal from 'micromodal';
import Typed from "typed.js";
import "particles.js";

// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  initHeader();
  useDynamicAdapt("max");
  useSliders();

  if (document.getElementById("hero-title")) {
    const typed = new Typed("#hero-title", {
      strings: [
        "привернути увагу віртуального світу!",
        "втілити ідеї в онлайні!",
        "забезпечити вражаючий веб-профіль!",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      startDelay: 0,
      loop: true,
    });
  }

  particlesJS.load("particles-js", "./public/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
}

document.addEventListener("DOMContentLoaded", app);
