import React from "react"
import styled from "@emotion/styled"
import { lighten } from "polished"

const StyledCtaBtn = styled.button`
  width: 15rem;
  margin: 0 auto;
  padding: 1.25rem 0;
  border-radius: 5rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary.green} 0%,
    ${({ theme }) => theme.colors.primary.cyan} 100%
  );
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      90deg,
      ${({ theme }) => lighten(0.1, theme.colors.primary.green)} 0%,
      ${({ theme }) => lighten(0.1, theme.colors.primary.cyan)} 100%
    );
  }
`
export default function CtaBtn() {
  return <StyledCtaBtn>Request Invite</StyledCtaBtn>
}
