import { Theme, createTheme } from "@mui/material";
import { Theme as EmotionTheme } from "@emotion/react";

import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";
import themeTypography from "./typography";

export const theme = (): Theme & EmotionTheme => {
  const theme = createTheme();
  const palette = themePalette(theme);
  return {
    ...theme,
    palette: palette,
    typography: themeTypography(theme.typography, palette),
    components: componentStyleOverrides(palette),
  };
};
