export function useHeader() {
  const header = document.getElementById("main-header");
  if (header) {
    const openHeaderMenuButton = document.getElementById("open-menu");
    const headerMenu = document.getElementById("header-menu");
    const headerLinks = document.querySelectorAll(".header-menu-item, .header-btn");
    const burgerAppearenceWidth = 1024;

    if (window.innerWidth < burgerAppearenceWidth) {
      headerMenu.querySelectorAll("a, button").forEach(link => {
        link.setAttribute("tabIndex", -1);
      });
    }

    openHeaderMenuButton.addEventListener("click", () => {
      toggleMenu();
    });

    // close menu on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (headerMenu.classList.contains("active")) {
          toggleMenu();
        }
      }
    });

    const headerOffset = 60;
    function scrollHeader() {
      let scrolled = window.scrollY;
      if (scrolled > headerOffset && !header.classList.contains("scroll")) {
        header.classList.add("scroll");
      } else if (scrolled < headerOffset && header.classList.contains("scroll")) {
        header.classList.remove("scroll");
      }
    }
    scrollHeader();
    document.addEventListener("scroll", () => {
      scrollHeader();
    });

    // close / open menu
    function toggleMenu() {
      document.body.classList.toggle("lock");
      openHeaderMenuButton.classList.toggle("active-header-icon");
      headerMenu.classList.toggle("active");
      headerLinks.forEach((item, i) => {
        item.style.setProperty("--i", `${i + 1}`);
        item.classList.toggle("active-link");
      });
      tabLoopControl();
    }

    // header keybord controll
    function tabLoopControl() {
      const focusableElements = headerMenu.querySelectorAll("a, button");
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      firstFocusableElement.focus();

      if (headerMenu.classList.contains("active")) {
        headerMenu.addEventListener("keydown", handleTabKey);
        focusableElements.forEach(link => {
          link.removeAttribute("tabIndex");
        });
      } else {
        headerMenu.removeEventListener("keydown", handleTabKey);
        focusableElements.forEach(link => {
          link.setAttribute("tabIndex", "-1");
        });
        openHeaderMenuButton.focus();
      }

      function handleTabKey(e) {
        const isTabPressed = e.key === "Tab" || e.keyCode === 9;
        if (!isTabPressed) return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    }
  }
}
