import { Html, Head, Main, NextScript } from "next/document";
import getInitColorSchemeScript from "@mui/system/cssVars/getInitColorSchemeScript";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {getInitColorSchemeScript(/** options here will be same as in <CssVarsProvider> */)}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
