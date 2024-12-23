import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./page/App.tsx";
import About from "./page/About.tsx";
import Navbar from "./components/global/Navbar.tsx";
import Projects from "./page/Projects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-gradient-to-r from-black to-gray-700 h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
