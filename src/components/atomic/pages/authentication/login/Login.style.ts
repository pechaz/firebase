"use client";

import Link from "next/link";
import styled from "@emotion/styled";

interface IMainWrapper {
  maxWidth?: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: auto;
`;

export const MainWrapper = styled.div<IMainWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-width: 600px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "600")}px;
  padding: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.14);
  gap: 16px;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: 500 !important;
  font-size: 32px !important;
`;

export const SubTitle = styled(Link)`
  font-weight: 400 !important;
  font-size: 14px !important;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
`;

export const CheckboxTitle = styled.span`
  font-weight: 500 !important;
  font-size: 14px !important;
  color: ${({ theme }) => theme.palette.text.primary};
`;
