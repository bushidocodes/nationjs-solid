import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");
if (!root) {
  throw new Error('Root element "#root" not found');
}

createRoot(root).render(<App />);

serviceWorker.unregister();
