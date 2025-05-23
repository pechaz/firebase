import { Palette } from "@emotion/react";

export default function componentStyleOverrides(palette: Palette) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
      ::-webkit-scrollbar-track
      {
	      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	      background-color: #F5F5F5;
      }

      ::-webkit-scrollbar
      {
        width: 6px;
        height: 6px;
        background-color: #F5F5F5;
      }

      ::-webkit-scrollbar-thumb
      {
        background-color: #000000;
      }
      `,
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.grey[900],
        },
      },
    },
  };
}
