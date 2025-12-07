import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Authenticator,
  // defaultDarkModeOverride,
  Flex,
  ThemeProvider,
  Theme
} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import Layout from "./pages/Layout";
import BookResource from "./pages/BookResource";
Amplify.configure(outputs);


function App() {
  const theme = {
    name: 'default-theme',
    // overrides: [defaultDarkModeOverride],
  } as Theme;

  return (
    <Authenticator.Provider>
      <ThemeProvider theme={theme}>
        <Flex
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          direction="column"
          alignItems="stretch"
          alignContent="space-between"
          justifyContent="space-between"
          gap="0rem"
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route path="/recursos/:resource_id" element={<BookResource />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Flex>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

export default App;
