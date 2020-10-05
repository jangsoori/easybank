import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
const StyledHeader = styled.header`
  color: ${({ theme }) => theme.colors.primary.green};
`
export default function Header() {
  return <StyledHeader>Header</StyledHeader>
}
