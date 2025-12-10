window.addEventListener("DOMContentLoaded", () => {
  const dependenciesScript = document.createElement("script");
  dependenciesScript.src = "https://gitdeev.vercel.app/modules/dependencies.js";

  const storageScript = document.createElement("script");
  storageScript.src = "https://gitdeev.vercel.app/modules/storage.js";

  const routerScript = document.createElement("script");
  routerScript.src = "https://gitdeev.vercel.app/modules/router.js";

  const pageUpdatesScript = document.createElement("script");
  pageUpdatesScript.src = "https://gitdeev.vercel.app/modules/pageUpdates.js";

  const overlaysScript = document.createElement("script");
  overlaysScript.src = "https://gitdeev.vercel.app/modules/overlays.js";

  const coreScript = document.createElement("script");
  coreScript.src = "https://gitdeev.vercel.app/modules/core.js";

  const listenersScript = document.createElement("script");
  listenersScript.src = "https://gitdeev.vercel.app/modules/listeners.js";

  const scripts = [
    dependenciesScript,
    storageScript,
    routerScript,
    pageUpdatesScript,
    overlaysScript,
    coreScript,
    listenersScript,
  ];

  let loadedCount = 0;

  function checkAllLoaded() {
    loadedCount++;
    if (loadedCount === scripts.length) {
      setTimeout(() => {
        if (typeof SidebarManager !== "undefined" && SidebarManager.init) {
          SidebarManager.init();
        }

        if (typeof initializeApp === "function") {
          initializeApp();
        }
      }, 50);
    }
  }

  scripts.forEach((script) => {
    script.onload = checkAllLoaded;
    script.onerror = () => {
      console.error("Failed to load script:", script.src);
      checkAllLoaded();
    };
    document.head.appendChild(script);
  });
});
