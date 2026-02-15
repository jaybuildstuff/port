// ===============================
// CATEGORY ACCORDION (Single Open)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".category-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {

      const content = toggle.nextElementSibling;
      const currentlyOpen = document.querySelector(".category-content.expanded");

      // Close any other open section
      if (currentlyOpen && currentlyOpen !== content) {
        currentlyOpen.classList.remove("expanded");
      }

      // Toggle current section
      content.classList.toggle("expanded");
    });
  });
});
