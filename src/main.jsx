import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ArtistPage from "./pages/ArtistPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
    </Routes>
  </BrowserRouter>
);
