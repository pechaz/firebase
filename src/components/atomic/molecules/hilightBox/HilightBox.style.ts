"use client";

import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.palette.secondary.main},
    ${({ theme }) => theme.palette.primary.main}
  );
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;
  padding: 8px;
  width: 100%;
  background-image: linear-gradient(
    160deg,
    ${({ theme }) => theme.palette.secondary.main},
    ${({ theme }) => theme.palette.primary.main}
  );
`;
