import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { handleIncomingRedirect } from "@inrupt/solid-client-authn-browser";

handleIncomingRedirect({ restorePreviousSession: true }).then(() => {
  ReactDOM.render(
    <AuthProvider>
      <App />
    </AuthProvider>,
    document.getElementById("root")
  );
});
