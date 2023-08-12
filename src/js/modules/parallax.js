export function useParallax() {
   const parallaxElements = document.querySelectorAll("[data-parallax-speed]");

   parallaxElements.forEach(element => {
     element.addEventListener("mousemove", e => {
       const speed = element.getAttribute("data-parallax-speed");
       const coordX = (e.offsetX - element.offsetWidth / 2) * speed / 100;
       const coordY = (e.offsetY - element.offsetHeight / 2) * speed / 100;
       element.style.transform = `rotateY(${coordX}deg) rotateX(${-coordY}deg)`;
     });
   });
}
