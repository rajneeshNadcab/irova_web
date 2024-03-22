import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Privacy from "./page/Privacy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./page/Term";
import Affliate from "./page/Affliate";
import Earn from "./page/Earn";
import Advertise from "./page/Advertise";
import Investor from "./page/Investor";
import FAQ from "./page/FAQ";
// import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/affliate" element={<Affliate />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
