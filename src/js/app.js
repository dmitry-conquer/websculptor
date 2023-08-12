// import { hasErrors } from './modules/forms.js';
import { useSpoiler } from "./modules/spoilers.js";
// import { initTabs } from './modules/tabs.js';
import { useSliders } from "./modules/sliders.js";
import { useHeader } from "./modules/header.js";
import { useSidebar } from "./modules/sidebar.js";
// import { initModals, openModalIf } from './modules/modals.js';
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import AOS from "aos";
// import fslightbox from 'fslightbox';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import MicroModal from 'micromodal';
import Typed from "typed.js";
import "particles.js";
import { useParallax } from "./modules/parallax.js";

// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  AOS.init({
    duration: 600,
    easing: "ease-is-sine",
    disable: "mobile",
  });
  useHeader();
  useDynamicAdapt("max");
  useSliders();
  useSpoiler();
  useSidebar();
  useParallax();

  if (document.getElementById("hero-title")) {
    const typed = new Typed("#hero-title", {
      strings: ["привернути увагу віртуального світу!", "втілити ідеї в онлайні!", "забезпечити вражаючий веб-профіль!"],
      typeSpeed: 50,
      backSpeed: 20,
      startDelay: 0,
      loop: true,
    });
  }

  if (document.getElementById("author-desc")) {
    const target = document.getElementById("author-desc");
    const targetText = target.dataset.text;
    console.log(targetText);
    const typed = new Typed("#author-desc", {
      strings: [targetText],
      typeSpeed: 45,
      startDelay: 500,
      loop: false,
      showCursor: true,
      cursorChar: '_',
      shuffle: true
    });
  }

  particlesJS.load("particles-js", "./public/particles.json");



}

document.addEventListener("DOMContentLoaded", app);
