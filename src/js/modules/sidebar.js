export function useSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    const openSidebarButton = document.getElementById("open-sidebar");
    openSidebarButton.addEventListener("click", () => {
      toggleSidebar();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (sidebar.classList.contains("max-md:left-0")) {
          toggleSidebar();
        }
      }
    });

    document.addEventListener("click", e => {
      if (!sidebar.classList.contains("max-lg:-translate-x-full") && !e.target.closest("#sidebar") && !e.target.closest("#open-sidebar")) {
        toggleSidebar();
        e.preventDefault();
      }
    });

    function toggleSidebar() {
      document.body.classList.toggle("lock");
      sidebar.classList.toggle("max-lg:-translate-x-full");
    }
  }
}
