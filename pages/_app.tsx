import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from '../theme';
import '@fontsource/barlow';
import '@fontsource/barlow-condensed';
import '@fontsource/bellefair';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
