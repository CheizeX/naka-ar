import type { AppProps } from "next/app";
// import { NextUIProvider, useTheme } from "@nextui-org/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, mainTheme } from "../themes/main.theme";
import "../styles/globals.css";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
