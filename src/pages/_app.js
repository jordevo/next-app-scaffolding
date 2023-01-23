import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import {SuiProvider} from '../contexts/sui.js'
export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "courier",
      }}
    >
      <SuiProvider>
        <Component {...pageProps} />
      </SuiProvider>
    </MantineProvider>
  );
}
