import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NeuroEducacionPage from "./pages/NeuroEducacionPage";
import PactoEducativoGlobalPage from "./pages/PactoEducativoPage";
import PsicoeducacionPage from "./pages/PsicoeducacionPage";
import PlataformaPage from "./pages/PlataformaPage";
import SeriesPage from "./pages/SeriesPage";
import NotiPage from "./pages/NotiPage";
import Layout from "./pages/Layout";
import BookResourcePage from "./pages/BookResourcePage";
import AudiosPage from "./pages/AudiosPage";
import EstablishmentsPage from "./pages/EstablishmentsPage";
import NivelesPage from "./pages/NivelesPage";
import AsignaturasPage from "./pages/AsignaturasPage";
import BooksPage from "./pages/BooksPage";
import AllBooksPage from "./pages/AllBooksPage";
import BookPage from "./pages/BookPage";
import NoPage from "./pages/NoPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NoLoginPage from "./pages/NoLoginPage";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import VideosPage from "./pages/VideosPage";
import BookVideoFromPage from "./pages/BookVideoFromPage";
import BookFormPage from "./pages/BookFormPage";
import SubjectFormPage from "./pages/SubjectFormPage";
import LevelFormPage from "./pages/LevelFormPage";
import EstablishmentFormPage from "./pages/EstablishmentFormPage";
import AudioFormPage from "./pages/AudioFormPage";
import ContactoForm from "./components/organisms/ContactoForm";



export default function App() {
  return (
    <Authenticator.Provider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/neuroeducacion" element={<NeuroEducacionPage />} />
              <Route path="/pacto-educativo" element={<PactoEducativoGlobalPage />} />
              <Route path="/plataforma" element={<PlataformaPage />} />
              <Route path="/psicoeducacion" element={<PsicoeducacionPage />} />
              <Route path="/series" element={<SeriesPage />} />
              <Route path="/noticias" element={<NotiPage />} />
              <Route path="/contacto" element={<ContactoForm />} />
              <Route path="/recursos/:bookId" element={<BookResourcePage />} />
              <Route path="/audios/:bookId" element={<AudiosPage />} />
              <Route path="/videos/:bookId" element={<VideosPage />} />
              <Route path="/establecimientos" element={<EstablishmentsPage />} />
              <Route path="/establecimientos/:establishmentId" element={<NivelesPage />} />
              <Route path="/libros/:establishmentId" element={<AllBooksPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/:levelId" element={<AsignaturasPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/:levelId/asignaturas/:subjectId" element={<BooksPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/:levelId/asignaturas/:subjectId/libros/:bookId" element={<BookPage />} />
              <Route path="/establecimientos/:establishmentId/libros/:bookId" element={<BookPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/:levelId/asignaturas/:subjectId/libros/crear" element={<BookFormPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/:levelId/asignaturas/:subjectId/libros/editar/:bookId" element={<BookFormPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/:levelId/asignaturas/crear" element={<SubjectFormPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/:levelId/asignaturas/editar/:subjectId" element={<SubjectFormPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/crear" element={<LevelFormPage />} />
              <Route path="/establecimientos/:establishmentId/niveles/editar/:levelId" element={<LevelFormPage />} />
              <Route path="establecimientos/crear" element={<EstablishmentFormPage />} />
              <Route path="establecimientos/editar/:establishmentId" element={<EstablishmentFormPage />} />
              <Route path="/videos/crear/:bookId" element={<BookVideoFromPage />} />
              <Route path="/videos/editar/:bookId/:videoId" element={<BookVideoFromPage />} />
              <Route path="/audios/:bookId/crear" element={<AudioFormPage />} />
              <Route path="/audios/:bookId/editar/:audioId" element={<AudioFormPage />} />
              <Route path="/new-password" element={<NewPasswordPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/no-login" element={<NoLoginPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Authenticator.Provider>
  );
}
