// Theme toggle & fade-in for Yididya Merete Portfolio
// Modular, robust, accessible, and production-ready

(function () {
  // Use a single mediaQuery instance
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // Inline SVGs
  const SUN = `<circle cx="12" cy="12" r="5" stroke="currentColor" fill="none"/><g stroke="currentColor"><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/><line x1="5.8" y1="5.8" x2="7.6" y2="7.6"/><line x1="16.4" y1="16.4" x2="18.2" y2="18.2"/><line x1="5.8" y1="18.2" x2="7.6" y2="16.4"/><line x1="16.4" y1="7.6" x2="18.2" y2="5.8"/></g>`;
  const MOON = `<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" fill="none"/>`;

  const html = document.documentElement;
  const storage = window.localStorage;

  // All DOM selection is after DOMContentLoaded

  // Set icon (safe if not present)
  function setIcon(isDark) {
    const themeIcon = document.getElementById("themeIcon");
    if (!themeIcon) return;
    themeIcon.innerHTML = isDark ? MOON : SUN;
  }

  // Core toggle
  function setTheme(mode, persist) {
    setIcon(mode === "dark");
    if (mode === "dark") {
      html.classList.add("dark");
      if (persist) storage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      if (persist) storage.setItem("theme", "light");
    }
  }

  function initializeTheme() {
    let savedTheme = storage.getItem("theme");
    if (!savedTheme) {
      setTheme(mediaQuery.matches ? "dark" : "light", false);
    } else {
      setTheme(savedTheme, false);
    }
  }

  function observeSystemTheme() {
    mediaQuery.addEventListener('change', e => {
      if (!storage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light", false);
      }
    });
  }

  function bindToggle() {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;
    themeToggle.addEventListener("click", () => {
      const isDark = html.classList.contains("dark");
      setTheme(isDark ? "light" : "dark", true);
    });
    themeToggle.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        themeToggle.click();
        e.preventDefault();
      }
    });
  }

  function animateFadeIn() {
    document.querySelectorAll('.section-fade')
      .forEach((el,i)=>setTimeout(()=>el.classList.add('visible'), 80+i*90));
    // For maximum polish, replace setTimeouts with IntersectionObserver as you scale.
  }

  // DOM ready
  document.addEventListener("DOMContentLoaded", function () {
    initializeTheme();
    observeSystemTheme();
    bindToggle();
    animateFadeIn();
  });
})();
