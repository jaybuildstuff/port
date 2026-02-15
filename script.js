document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".category-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const open = document.querySelector(".category-content.expanded");

      if (open && open !== content) {
        open.classList.remove("expanded");
      }

      content.classList.toggle("expanded");
    });
  });
});
