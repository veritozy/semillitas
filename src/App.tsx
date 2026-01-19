import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NeuroEducacionPage from "./pages/NeuroEducacionPage";
import PactoEducativoGlobalPage from "./pages/PactoEducativoPage";
import PsicoeducacionPage from "./pages/PsicoeducacionPage";
import PlataformaPage from "./pages/PlataformaPage";
import Layout from "./pages/Layout";
import BookResourcePage from "./pages/BookResourcePage";
import AudiosPage from "./pages/AudiosPage";
import EstablishmentsPage from "./pages/EstablishmentsPage";
import NivelesPage from "./pages/NivelesPage";
import AsignaturasPage from "./pages/AsignaturasPage";
import BooksPage from "./pages/BooksPage";
import AllBooksPage from "./pages/AllBooksPage";
import NoPage from "./pages/NoPage";
import "./App.css";
import NewPasswordPage from "./pages/NewPasswordPage";

export default function App() {
  // Rutas de la aplicación
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/neuroeducacion" element={<NeuroEducacionPage />} />
            <Route path="/pacto-educativo" element={<PactoEducativoGlobalPage />} />
            <Route path="/plataforma" element={<PlataformaPage />} />
            <Route path="/psicoeducacion" element={<PsicoeducacionPage />} />
            <Route path="/recursos/:resourceId" element={<BookResourcePage />} />
            <Route path="/audios/:bookId" element={<AudiosPage />} />
            <Route path="/establecimientos" element={<EstablishmentsPage />} />
            <Route path="/establecimientos/:establishmentId" element={<NivelesPage />} />
            <Route path="/libros/:establishmentId" element={<AllBooksPage />} />
            <Route path="/niveles/:levelId" element={<AsignaturasPage />} />
            <Route path="/asignaturas/:subjectId" element={<BooksPage />} />
            <Route path="/new-password" element={<NewPasswordPage />} />
            <Route path="*" element={<NoPage />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}
