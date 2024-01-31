import {
  unstable_createGetCssVar as systemCreateGetCssVar,
  unstable_prepareCssVars as prepareCssVars,
  createTheme
} from '@mui/system';

declare module '@mui/system' {
  interface Theme {
    vars: {
      palette: Record<string, any>
    }
  }
}

const lightColorScheme = {
  palette: {
    mode: 'light',
    primary: {
      default: '#3990FF',
      dark: '#02367D',
    },
    text: {
      default: '#111111',
    },
    // ... other colors
  },
};

const darkColorScheme = {
  palette: {
    mode: 'dark',
    primary: {
      default: '#265D97',
      dark: '#132F4C',
      main: '#5090D3',
    },
    text: {
      default: '#ffffff',
    },
    // ... other colors
  },
};

// Don't know what the use of this is yet
const createGetCssVar = (cssVarPrefix = 'my-app') =>
  systemCreateGetCssVar(cssVarPrefix);

function extendTheme({ cssVarPrefix = 'my-app', baseTheme = {} } = {}) {
  const theme: any = {
    ...baseTheme,
    colorSchemes: {
      light: lightColorScheme,
      dark: darkColorScheme,
    },
  };

  const { vars: themeVars, generateCssVars } = prepareCssVars(
    { colorSchemes: theme.colorSchemes },
    {
      prefix: cssVarPrefix,
    },
  );
  theme.vars = themeVars;
  theme.generateCssVars = generateCssVars;
  theme.palette = {
    ...theme.colorSchemes.light.palette,
    colorScheme: 'light',
  };

  return theme;
}

const baseTheme = createTheme({
  // any stuff apart from colors,
  spacing: [0, 2, 5, 10, 20]
});

const myCustomDefaultTheme = extendTheme({ baseTheme });

export default myCustomDefaultTheme;
