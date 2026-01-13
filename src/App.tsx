// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   Authenticator,
//   // defaultDarkModeOverride,
//   Flex,
//   ThemeProvider,
//   Theme
// } from "@aws-amplify/ui-react";
// import '@aws-amplify/ui-react/styles.css';
// import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json";
// import Layout from "./pages/Layout";
// import EstablishmentsPage from "./pages/EstablishmentsPage";
// // import BooksPage from "./pages/BooksPage";
// import BookResourcePage from "./pages/BookResourcePage";
// import NoPage from "./pages/NoPage";
// import "./App.css";
// import AudiosPage from "./pages/AudiosPage";
// Amplify.configure(outputs);


// function App() {
//   const theme = {
//     name: 'default-theme',
//     // overrides: [defaultDarkModeOverride],
//   } as Theme;

//   return (
//     <Authenticator.Provider>
//       <ThemeProvider theme={theme}>
//         <Flex
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           direction="column"
//           alignItems="stretch"
//           alignContent="space-between"
//           justifyContent="space-between"
//           gap="0rem"
//         >
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Layout />} >
//                 <Route path="/establecimientos" element={<EstablishmentsPage />} />
//                 <Route path="/recursos/:resourceId" element={<BookResourcePage />} />
//                 <Route path="/audios/:bookId" element={<AudiosPage />} />
//                 <Route path="*" element={<NoPage />} />
//               </Route>
//             </Routes>
//           </BrowserRouter>
//         </Flex>
//       </ThemeProvider>
//     </Authenticator.Provider>
//   );
// }

// export default App;

import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NeuroEducacionPage from "./pages/NeuroEducacionPage";
import PactoEducativoGlobalPage from "./pages/PactoEducativoPage";
import PlataformaPage from "./pages/PlataformaPage";
import Layout from "./pages/Layout";
import BookResourcePage from "./pages/BookResourcePage";
import AudiosPage from "./pages/AudiosPage";
import "./App.css";

export default function App() {

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
            <Route path="/recursos/:resourceId" element={<BookResourcePage />} />
            <Route path="/audios/:bookId" element={<AudiosPage />} />
            {/* <Route path="/establecimientos" element={<EstablishmentsPage />} />
          <Route path="/recursos/:resourceId" element={<BookResourcePage />} />
          <Route path="/audios/:bookId" element={<AudiosPage />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}
