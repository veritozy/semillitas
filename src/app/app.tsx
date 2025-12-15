import Navbar from "../components/nav";
import Footer from "../components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Nosotros from "../pages/nosotros";
import Neuroeducacion from "../pages/neuroeducacion";
import PactoEducativoGlobal from "../pages/pacto-educativo"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/neuroeducacion" element={<Neuroeducacion />} />
        <Route path="/pacto-educativo" element={<PactoEducativoGlobal />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
