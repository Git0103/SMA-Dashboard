import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./index.css"; 

const rootElement = document.getElementById("root");

// Ensure we only call createRoot() once
if (!rootElement.__reactRootContainer) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
