// Service worker registration helpers. register() is not called by default.
// Call register() in index.tsx to enable offline support and faster repeat loads.

interface ServiceWorkerConfig {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
}

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(
    window.location.hostname
  );

export function register(config?: ServiceWorkerConfig) {
  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      const swUrl = "/service-worker.js";

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        await navigator.serviceWorker.ready;
        console.log("This web app is being served cache-first by a service worker.");
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

async function registerValidSW(swUrl: string, config?: ServiceWorkerConfig) {
  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker === null) return;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            console.log(
              "New content is available and will be used when all tabs are closed."
            );
            config?.onUpdate?.(registration);
          } else {
            console.log("Content is cached for offline use.");
            config?.onSuccess?.(registration);
          }
        }
      };
    };
  } catch (error) {
    console.error("Error during service worker registration:", error);
  }
}

async function checkValidServiceWorker(swUrl: string, config?: ServiceWorkerConfig) {
  try {
    const response = await fetch(swUrl);
    const contentType = response.headers.get("content-type");
    if (
      response.status === 404 ||
      (contentType !== null && !contentType.includes("javascript"))
    ) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await registration.unregister();
        window.location.reload();
      } catch (error) {
        console.error("Error unregistering service worker:", error);
      }
    } else {
      registerValidSW(swUrl, config);
    }
  } catch {
    console.log("No internet connection found. App is running in offline mode.");
  }
}

export async function unregister() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      registration.unregister();
    } catch (error) {
      console.error("Error unregistering service worker:", error);
    }
  }
}
