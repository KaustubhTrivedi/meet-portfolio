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
    <div className="bg-gradient-to-r grad from-black to-[#003854] min-h-screen text-white">
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </StrictMode>
);
