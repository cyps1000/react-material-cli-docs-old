import { CSSProperties } from "@material-ui/styles";

/**
 * Extends the Typography
 */
declare module "@material-ui/core/styles/createTypography" {
  interface Typography {
    fontFamily: string;
  }
}

/**
 * Extends the ZIndex
 */
declare module "@material-ui/core/styles/zIndex" {
  interface ZIndex {
    header: number;
    body: number;
  }
}

/**
 * Extends the Palettes
 */
declare module "@material-ui/core/styles/createPalette" {
  interface TypeText {}

  interface TypeBackground {
    form: string;
    banner: string;
  }

  interface CommonColors {}

  interface PaletteColor {
    lighter?: string;
    darker?: string;
    background?: string;
    accent?: string;
    navbar?: string;
  }

  interface Palette {
    button: PaletteColor;
    interactive: {
      main: string;
      hover: string;
    };
    border: {
      main: string;
      input: string;
      inputHover: string;
      darker?: string;
      dark?: string;
    };
  }
}
