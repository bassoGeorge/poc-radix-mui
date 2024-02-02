import {
  unstable_createGetCssVar as systemCreateGetCssVar,
  unstable_prepareCssVars as prepareCssVars,
  createTheme,
  Theme as MuiTheme,
} from "@mui/system";

declare module "@mui/system" {
  interface Theme {
    vars: Omit<
      MuiTheme,
      "typography" | "mixins" | "breakpoints" | "direction" | "transitions"
    >;
  }
}

const lightColorScheme = {
  palette: {
    mode: "light",
    primary: {
      default: "#3990FF",
      dark: "#02367D",
    },
    text: {
      default: "#111111",
    },
    // ... other colors
  },
};

function genContextual(obj: any) {
  return {
    palette: {
      info: {
        primary: obj.palette.primary.default,
      },
    },
  };
}

const darkColorScheme = {
  palette: {
    mode: "dark",
    primary: {
      default: "#265D97",
      dark: "#132F4C",
      main: "#5090D3",
    },
    text: {
      default: "#ffffff",
    },
    // ... other colors
  },
};

// Don't know what the use of this is yet
const createGetCssVar = (cssVarPrefix = "my-app") =>
  systemCreateGetCssVar(cssVarPrefix);

function extendTheme({ cssVarPrefix = "my-app", baseTheme = {} } = {}) {
  const theme: any = {
    ...baseTheme,
    colorSchemes: {
      light: lightColorScheme,
    },
  };

  const { vars: themeVars, generateCssVars } = prepareCssVars(
    { colorSchemes: theme.colorSchemes },
    {
      prefix: cssVarPrefix,
    }
  );

  const { vars: contextualVars, generateCssVars: conGen } = prepareCssVars(
    { colorSchemes: { light: genContextual(themeVars) } },
    { prefix: cssVarPrefix }
  );

  theme.vars = {
    palette: {
      ...themeVars.palette,
      ...contextualVars.palette,
    },
  };

  theme.generateCssVars = (colorScheme: any) => {
    const base = generateCssVars(colorScheme);
    const extended = conGen(colorScheme);

    const newLocal = {
      css: {
        ...base.css,
        ...extended.css,
      },
      vars: { // We basically need to do a deep merge
        palette: {
          ...base.vars.palette,
          ...extended.vars.palette,
        },
      },
    };
    return newLocal;
  };

  theme.palette = null;
  return theme;
}

const baseTheme = createTheme({
  // any stuff apart from colors,
  spacing: [0, 2, 5, 10, 20],
});

const myCustomDefaultTheme = extendTheme({ baseTheme });

export default myCustomDefaultTheme;
