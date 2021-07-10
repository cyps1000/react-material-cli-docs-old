/**
 * Imports common theme settings
 */
import { breakpoints, font, zIndex } from "./common";

/**
 * Defines the palette of colors
 */
export const palette = {
  common: {
    black: "#000",
    white: "#fff"
  },
  primary: {
    navbar: "#fff",
    light: "#e3e3e3",
    main: "#fff",
    dark: "#fff",
    accent: "#13C1CC",
    contrastText: "#fff"
  },
  hover: {
    main: "#13C1CC"
  },
  secondary: {
    lighter: "#3c4850",
    light: "#000",
    main: "#764abc",
    dark: "#222223",
    contrastText: "#fff"
  },
  sidebar: {
    main: "#f3f3f3",
    text: "#282828",
    // text: "#4e4e4e",
    active: "#b7b7b7"
  },
  button: {
    light: "#616163",
    main: "#181b23",
    dark: "#222223",
    contrastText: "#fff"
  },
  error: {
    light: "#e57373",
    main: "#e85b5b",
    dark: "#d32f2f",
    contrastText: "#fff"
  },
  warning: {
    light: "#ffb74d",
    main: "#f3a025",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#fff"
  },
  success: {
    light: "#81c784",
    main: "#61ab4f",
    dark: "#339c07",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  border: {
    main: "#eaeaea"
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A300: "#35363d",
    A400: "#303030",
    A700: "#616161"
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)"
  },
  background: {
    default: "#fff",
    paper: "#fff"
  }
};

/**
 * Creates the Theme
 */
let theme = {
  palette,
  font,
  zIndex,
  breakpoints
};

export { theme as lightTheme };
