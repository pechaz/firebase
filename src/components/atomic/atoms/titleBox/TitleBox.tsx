import { Box, Typography } from "@mui/material";

import { ITitleBoxProps } from "./TitleBox.interface";

const TitleBox = ({ color, count, title }: ITitleBoxProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
      alignContent="center"
    >
      <Typography fontSize="18px" fontWeight={800} color={color}>
        {count}
      </Typography>
      <Typography fontSize="14px" fontWeight={600} color={color}>
        {title}
      </Typography>
    </Box>
  );
};

export default TitleBox;
