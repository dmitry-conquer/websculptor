const spoilers = {
  spoiler() {
    document.addEventListener("click", function (e) {
      const spoilerTrigger = e.target.closest("[data-spoiler]");
      if (spoilerTrigger) {
        spoilers.openSpoiler(spoilerTrigger);
      }
    });
  },

  openSpoiler(spoilerTrigger) {
    spoilerTrigger.classList.toggle("active-spoiler");
    spoilerTrigger.setAttribute(
      "aria-expanded",
      spoilerTrigger.getAttribute("aria-expanded") === "true" ? "false" : "true",
    );

    const spoilerContent = spoilerTrigger.nextElementSibling;
    spoilerContent.classList.toggle("active-spoiler-content");
    spoilerContent.setAttribute(
      "aria-hidden",
      spoilerContent.getAttribute("aria-hidden") === "true" ? "false" : "true",
    );
    spoilerContent.style.maxHeight = spoilerContent.style.maxHeight ? null : `${spoilerContent.scrollHeight}px`;
  },
};

export const useSpoiler = spoilers.spoiler;
