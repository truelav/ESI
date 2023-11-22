// import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";
// import {AuthProvider} from "./app/context/AuthProvider";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`

import App from "./App";
import ErrorBoundary from "./app/api/providers/ErrorBoundary/ui/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <CookiesProvider>
            <ErrorBoundary>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </ErrorBoundary>
        </CookiesProvider>
    </Provider>
    // {/* </React.StrictMode> */}
);
