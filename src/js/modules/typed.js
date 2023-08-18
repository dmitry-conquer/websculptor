import Typed from "typed.js";

if (document.getElementById("hero-title")) {
   const typed = new Typed("#hero-title", {
     strings: ["привернути увагу віртуального світу!", "втілити ідеї в онлайні!", "забезпечити вражаючий веб-профіль!"],
     typeSpeed: 50,
     backSpeed: 20,
     startDelay: 0,
     loop: true,
   });
 }

 if (document.getElementById("about-title")) {
   const target = document.getElementById("about-title");
   const targetText = target.dataset.text;
   const typed = new Typed("#about-title", {
     strings: [targetText],   
     typeSpeed: 50,
     startDelay: 0,
     loop: false,
     showCursor: true,
     cursorChar: '_',
     shuffle: true
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