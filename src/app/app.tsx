import { useState, useEffect } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Nosotros from "../pages/nosotros";
import Neuroeducacion from "../pages/neuroeducacion";
import PactoEducativoGlobal from "../pages/pactoEducativo";
import Plataforma from "../pages/plataforma";
import Series from "../components/series";
import Login from "../components/login";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsLoginOpen(true);
    window.addEventListener("open-login", handleOpen);
    return () => window.removeEventListener("open-login", handleOpen);
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/neuroeducacion" element={<Neuroeducacion />} />
        <Route path="/pacto-educativo" element={<PactoEducativoGlobal />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/series" element={<Series />} />
      </Routes>

      <Footer />

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
