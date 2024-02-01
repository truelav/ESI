// import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";
import { ErrorBoundary } from "react-error-boundary"
// import {AuthProvider} from "./app/context/AuthProvider";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import { ErrorFallbackComponent } from "./shared/ui/Error/ErrorFallbackComponent";
import App from "./App";
// import ErrorBoundary from "./app/api/providers/ErrorBoundary/ui/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <CookiesProvider>
            <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </ErrorBoundary>
        </CookiesProvider>
    </Provider>
    // {/* </React.StrictMode> */}
);
