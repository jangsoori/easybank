import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { breakpoints } from "./breakpoints"

export const Section = styled.section`
  display: grid;
  row-gap: 2.5rem;
  grid-auto-rows: max-content;
  padding: 8rem 2rem;
  justify-content: center;
  text-align: center;

  background: ${({ secondary, theme }) =>
    secondary && theme.colors.neutral.lightGrayBlue};

  ${({ blue, theme }) =>
    blue &&
    css`
      background: ${theme.colors.primary.blue}};
    `}

  @media only screen and (min-width: ${breakpoints.b}) {
    padding: 8rem 16rem;
  }
`
