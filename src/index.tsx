import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { handleIncomingRedirect } from "@inrupt/solid-client-authn-browser";

handleIncomingRedirect({ restorePreviousSession: true }).then(() => {
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
});
