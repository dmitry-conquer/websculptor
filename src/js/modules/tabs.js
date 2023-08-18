export const useTabs = () => {
  document.addEventListener("click", e => {
    const target = e.target.closest("[data-tab-caption]");
    if (!target) return;
    const captionId = target.dataset.tabCaption;
    const tabParent = target.closest("[data-tab]");
    const contentItem = tabParent.querySelector(`[data-tab-content='${captionId}']`);
    if (!contentItem) return;
    const captions = tabParent.querySelectorAll("[data-tab-caption]");
    captions.forEach(caption => caption.classList.remove("active-tab-caption"));
  
    const contents = tabParent.querySelectorAll("[data-tab-content]");
    contents.forEach(content => content.classList.remove("active-tab-content"));
  
    target.classList.add("active-tab-caption");
    contentItem.classList.add("active-tab-content");
  });
}




