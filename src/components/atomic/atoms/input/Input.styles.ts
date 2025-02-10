import { InputBase, alpha, styled as MUIStyled } from "@mui/material";
import styled from "@emotion/styled";

export interface IInputStyleProps {
  error?: boolean;
}

export interface IErrorWrapperStyleProps {
  fromTop?: number;
}

export interface IWrapperStyleProps {
  hasPaddingBottom?: boolean;
}

export const Wrapper = styled.div<IWrapperStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  padding-bottom: ${({ hasPaddingBottom }) =>
    hasPaddingBottom ? "32px" : "0"};
`;

export const InputTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const BottomWrapper = styled.div<IErrorWrapperStyleProps>`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  position: absolute;
  top: ${({ fromTop }) => (fromTop ? `${fromTop}px` : "68px")};
  width: 100%;
`;

export const ErrorWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.error.dark};
  gap: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: flex-start;
`;

export const HintWrapper = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: flex-start;
`;

export const Hint = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const BootstrapInput = MUIStyled(InputBase)(({ theme }) => ({
  width: "100%",
  borderRadius: 8,
  position: "relative",
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[700]}`,
  padding: "8px 16px",

  "label + &": {
    marginTop: theme.spacing(3),
  },
  "&.Mui-error": {
    border: `1px solid ${theme.palette.error.dark}`,
  },
  "&.Mui-disabled": {
    color: theme.palette.grey[600],
  },
  "&.Mui-focused": {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
    borderColor: theme.palette.primary.main,
  },
  ".MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.background.default,
    fontSize: 16,
    width: "100%",
    color: theme.palette.text.secondary,
    padding: "0 !important",
    transition: theme.transitions.create(
      ["border-color", "background-color", "box-shadow"],
      {
        easing: "linear",
      }
    ),
    "&.Mui-disabled": {
      textFillColor: theme.palette.grey[600],
      color: theme.palette.text.secondary,
    },
  },
}));
