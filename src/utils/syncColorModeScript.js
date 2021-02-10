(function syncColorMode() {
  if (localStorage.colorMode === "system" || !("colorMode" in localStorage)) {
    if (
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("theme-ui-color-mode", "dark");
    } else {
      localStorage.setItem("theme-ui-color-mode", "light");
    }
  } else if (
    localStorage.colorMode === "dark" ||
    localStorage.colorMode === "light"
  ) {
    localStorage.setItem("theme-ui-color-mode", localStorage.colorMode);
  }
})();
