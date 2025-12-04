import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Authenticator,
  // defaultDarkModeOverride,
  Flex,
  ThemeProvider,
  Theme
} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import Layout from "./pages/Layout";
import { Hub } from 'aws-amplify/utils';

Hub.listen('auth', ({ payload }) => {
  switch (payload.event) {
    case 'signedIn':
      console.log('user have been signedIn successfully.');
      break;
  }
});

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
              <Route path="/*" element={<Layout />} />
            </Routes>
          </BrowserRouter>
        </Flex>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

export default App;
