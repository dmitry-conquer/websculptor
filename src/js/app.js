// import { hasErrors } from './modules/forms.js';
import { useSpoiler } from "./modules/spoilers.js";
import { useSliders } from "./modules/sliders.js";
import { useHeader } from "./modules/header.js";
import { useSidebar } from "./modules/sidebar.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import AOS from "aos";
// import fslightbox from 'fslightbox';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import MicroModal from 'micromodal';
import "particles.js";
import { useParallax } from "./modules/parallax.js";
import './modules/order-form.js';
import './modules/typed.js';
import { useTabs } from "./modules/tabs.js";

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
  useTabs();  

  


  particlesJS.load("particles-js", "./public/particles.json");



}

document.addEventListener("DOMContentLoaded", app);
