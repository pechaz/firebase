import "@emotion/react";
import { ThemedProps } from "@mui/material";

interface CUSTOM_COLOR {
  1:string
  2:string
  3:string
  4:string
  5:string
  6:string
}

declare module "@emotion/react" {
  export interface Palette {
    mode: string;
    common: { 
      black: string;
      white: string;
    };
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
    };
    error: {
      light: string;
      main: string;
      dark: string;
    };
    warning: {
      light: string;
      main: string;
      dark: string;
    };
    info: {
      light: string;
      main: string;
      dark: string;
    };
    success: {
      light: string;
      200: string;
      main: string;
      dark: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    text: {
      primary: string;
      secondary: string;
      dark: string;
      hint: string;
    };
    background: {
      paper: string;
      default: string;
      primary: string;
    };
    green :CUSTOM_COLOR ,
    blue:CUSTOM_COLOR ,
    teal:CUSTOM_COLOR,
    orangeRed:CUSTOM_COLOR,
    purple:CUSTOM_COLOR,
    lightBlue:CUSTOM_COLOR,
    darkBlue:CUSTOM_COLOR,
    orange:CUSTOM_COLOR,
    crimson:CUSTOM_COLOR,
    persianBlue:CUSTOM_COLOR,
    magenta:CUSTOM_COLOR,
    ultramarine:CUSTOM_COLOR,
    olive:CUSTOM_COLOR,
  }

  export interface Typography {
    fontFamily: string;
    h6: {
      fontWeight: number;
      color: string;
      fontSize: string;
    };
    h5: {
      fontSize: string;
      color: string;
      fontWeight: number;
    };
    h4: {
      fontSize: string;
      color: string;
      fontWeight: number;
    };
    h3: {
      fontSize: string;
      color: string;
      fontWeight: number;
    };
    h2: {
      fontSize: string;
      color: string;
      fontWeight: number;
    };
    h1: {
      fontSize: string;
      color: string;
      fontWeight: number;
    };
    subtitle1: {
      fontSize: string;
      fontWeight: number;
      color: string;
    };
    subtitle2: {
      fontSize: string;
      fontWeight: number;
      color: string;
    };
    caption: {
      fontSize: string;
      color: string;
      fontWeight: number;
    };
    body1: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    body2: {
      letterSpacing: string;
      fontWeight: number;
      lineHeight: string;
      color: string;
    };
    button: {
      textTransform: string;
    };
  }

  export interface BreakPoints {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    keys: string[];
  }

  export interface Theme {
    palette: Palette;
    typography: Typography;
    components: object;
    breakpoints: BreakPoints;
  }
}

declare module "@emotion/react" {
  export interface Theme extends LibTheme, ThemedProps {}
}
