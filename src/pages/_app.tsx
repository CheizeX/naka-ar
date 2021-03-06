import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme, mainTheme } from '../themes/main.theme';
// import "../styles/globals.css";
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { GlobalStyles } from '../styles/global/GlobalStyles';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
          <GlobalStyles />
          <Component
            {...pageProps}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
