import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider, ColorModeScript, extendTheme, theme } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "components/ErrorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { BrowserRouter, useLocation } from "react-router-dom";
import { RariProvider } from "context/RariContext";
import * as Fathom from "fathom-client";


// import PWAPrompt from "react-ios-pwa-prompt";


import "../index.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {

const isProd = process.env.NODE_ENV === "production";

  const extendedTheme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    fonts: {
      ...theme.fonts,
      body: `Inter, ${theme.fonts.body}`,
      heading: `Manrope, Inter, ${theme.fonts.heading}`,
    },
    colors: {
      mktgray: {
        200: "#262C35",
        400: "#21262E",
        700: "#1D2229",
      },
    },
  });
  
  // function ScrollToTop() {
  //   const { pathname } = useLocation();
  
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //     if (isProd) {
  //       Fathom.trackPageview();
  //     }
  //   }, [pathname]);
  
  //   return null;
  // }
  const queryClient = new QueryClient();
  return (
    <>
      {/* <PWAPrompt
        timesToShow={2}
        permanentlyHideOnDismiss={false}
        copyTitle="Add Market to your homescreen!"
        copyBody="The Market Portal works best when added to your homescreen. Without doing this, you may have a degraded experience."
        copyClosePrompt="Close"
      /> */}
      <ChakraProvider theme={extendedTheme}>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {/* <BrowserRouter> */}
              {/* <ScrollToTop /> */}
              <RariProvider>
                <ColorModeScript
                  initialColorMode={extendedTheme.config.initialColorMode}
                />
                <Component {...pageProps} />
              </RariProvider>
            {/* </BrowserRouter> */}
          </QueryClientProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </>
  );
}


// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
