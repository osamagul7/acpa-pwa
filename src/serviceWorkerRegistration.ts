export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    // Wait for the page to load before registering (optional)
    window.addEventListener("load", () => {
      const swUrl = "/sw.js";

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log("Service Worker registered:", registration);

          // Example: listen for updates
          if (registration.waiting) {
            console.log("SW waiting - update available");
          }

          registration.onupdatefound = () => {
            const installing = registration.installing;
            if (!installing) return;
            installing.onstatechange = () => {
              console.log("SW state:", installing.state);
            };
          };
        })
        .catch((error) => {
          console.error("SW registration failed:", error);
        });
    });
  } else {
    console.info("Service Worker is not supported in this browser.");
  }
}

export function unregisterServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const reg of registrations) {
        reg.unregister();
      }
    });
  }
}
