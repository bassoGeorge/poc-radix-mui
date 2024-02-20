import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssVarsProvider } from "../experiment/themeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}
