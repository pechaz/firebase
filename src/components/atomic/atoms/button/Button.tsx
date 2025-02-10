import { ButtonProps } from "@mui/material";

import { CustomizedButton } from "./Button.styles";

const Button = (props: ButtonProps) => {
  return <CustomizedButton {...props} />;
};

export default Button;
