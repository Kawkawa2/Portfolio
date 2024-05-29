import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Cursor from "./components/cursor.jsx";
import ContactMessage from './components/contactMessage.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Cursor/>
      <App />
      <ContactMessage/>
    </BrowserRouter>
  </React.StrictMode>
);
