import { Tooltip, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import InfoIcon from "@mui/icons-material/Info";

import {
  BootstrapInput,
  BottomWrapper,
  ErrorWrapper,
  Hint,
  HintWrapper,
  InputTitle,
  Wrapper,
} from "./Input.styles";
import { IInputProps } from "./Input.interface";

const Input = (props: IInputProps) => {
  const theme = useTheme();
  const { hasPaddingBottom = true, errorMessage, ...rest } = props;
  return (
    <Wrapper
      onClick={(e) => props?.onClick?.(e)}
      style={props.sx ? (props.sx as React.CSSProperties) : {}}
      hasPaddingBottom={hasPaddingBottom}
    >
      <InputTitle>
        {props.title}
        {props.required && (
          <Typography sx={{ float: "right" }} color={theme.palette.error.main}>
            *
          </Typography>
        )}
        {props.labelHint && (
          <Tooltip title={props.labelHint} enterTouchDelay={0}>
            <InfoIcon
              color="inherit"
              fontSize="small"
              sx={{ color: theme.palette.grey[900] }}
            />
          </Tooltip>
        )}
      </InputTitle>
      <BootstrapInput {...rest} />
      <BottomWrapper fromTop={props.errorSectionFromTop}>
        {props.error && (
          <ErrorWrapper>
            <span>
              {typeof errorMessage === "function"
                ? errorMessage()
                : errorMessage ?? `${props.title} required`}
            </span>
          </ErrorWrapper>
        )}
        <HintWrapper>
          {typeof props.hint === "string" ? (
            <Hint>{props.hint}</Hint>
          ) : (
            props.hint
          )}
        </HintWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};
export default Input;
