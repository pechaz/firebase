import { Box, Divider, Typography } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { useTheme } from "@emotion/react";

import { IHilightBoxProps } from "./HilightBox.interface";
import { TitleBox } from "../../atoms";
import { Header, MainWrapper } from "./HilightBox.style";

const HilightBox = ({
  title,
  titleBoxFirst,
  titleBoxSecond,
  titleBoxThird,
}: IHilightBoxProps) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius={2}
      overflow="hidden"
    >
      <Header>
        <Typography
          fontSize="16px"
          fontWeight={400}
          color={theme.palette.common.white}
        >
          {title}
        </Typography>
        <OpenInNewRoundedIcon
          color="inherit"
          sx={{ color: theme.palette.common.white }}
        />
      </Header>
      <MainWrapper>
        <TitleBox {...titleBoxFirst} />
        <Divider
          orientation="vertical"
          sx={{
            backgroundColor: theme.palette.common.white,
            minHeight: 44,
            marginX: 4,
          }}
        />
        <TitleBox {...titleBoxSecond} />
        <TitleBox {...titleBoxThird} />
      </MainWrapper>
    </Box>
  );
};

export default HilightBox;
