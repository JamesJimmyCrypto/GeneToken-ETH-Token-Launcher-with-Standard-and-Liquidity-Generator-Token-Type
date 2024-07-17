import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Web3ModalProvider } from "./components/wallet/Web3ModalProvider.jsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Web3ModalProvider>
      <Toaster />
        <App />
      </Web3ModalProvider>
  </React.StrictMode>
);
