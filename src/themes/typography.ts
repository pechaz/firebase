import { Palette, Typography as EmotionTypography } from "@emotion/react";
import { Typography } from "@mui/material/styles/createTypography";

export default function themeTypography(
  typography: Typography,
  palette: Palette
): Typography & EmotionTypography {
  return {
    ...typography,
    fontFamily: ["Roboto"].join(","),
    h6: {
      fontWeight: 500,
      color: palette.grey[900],
      fontSize: "0.75rem",
      fontFamily: "Roboto",
    },
    h5: {
      fontSize: "0.875rem",
      color: palette.grey[900],
      fontWeight: 500,
      fontFamily: "Roboto",
    },
    h4: {
      fontSize: "1rem",
      color: palette.grey[900],
      fontWeight: 600,
      fontFamily: "Roboto",
    },
    h3: {
      fontSize: "1.25rem",
      color: palette.grey[900],
      fontWeight: 600,
      fontFamily: "Roboto",
    },
    h2: {
      fontSize: "1.5rem",
      color: palette.grey[900],
      fontWeight: 700,
      fontFamily: "Roboto",
    },
    h1: {
      fontSize: "2.125rem",
      color: palette.grey[900],
      fontWeight: 700,
      fontFamily: "Roboto",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: palette.grey[900],
      fontFamily: "Roboto",
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: palette.grey[500],
      fontFamily: "Roboto",
    },
    caption: {
      fontSize: "0.75rem",
      color: palette.grey[500],
      fontWeight: 400,
      fontFamily: "Roboto",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
      fontFamily: "Roboto",
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: 400,
      lineHeight: "1.5em",
      color: palette.grey[700],
      fontFamily: "Roboto",
    },
    button: {
      textTransform: "capitalize",
      fontFamily: "Roboto",
    },    
  };
}
