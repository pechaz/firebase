import { InputProps } from "@mui/material";
import { ReactNode } from "react";

export type IInputProps = InputProps & {
  errorMessage?: (() => string | undefined) | string;
  hint?: string | ReactNode;
  labelHint?: string;
  errorSectionFromTop?: number;
  hasPaddingBottom?: boolean;
};
