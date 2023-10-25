import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`

import App from "./App";
import "./index.css";

const theme = extendBaseTheme({})


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <ChakraBaseProvider theme={theme}>
          <App />
        </ChakraBaseProvider>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
