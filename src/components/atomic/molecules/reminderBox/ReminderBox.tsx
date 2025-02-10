import { Card } from "@mui/material";
import { useTheme } from "@emotion/react";

import { IReminderBoxProps } from "./ReminderBox.interface";
import { TitleBox } from "../../atoms";

const ReminderBox = ({ count, title }: IReminderBoxProps) => {
  const theme = useTheme();

  return (
    <Card
      elevation={1}
      sx={{ backgroundColor: theme.palette.grey[100], padding: 1 }}
    >
      <TitleBox
        color={theme.palette.common.black}
        title={title}
        count={count}
      />
    </Card>
  );
};

export default ReminderBox;
