import styled from "@emotion/styled"

export const BodyText = styled.p`
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.neutral.grayBlue};
  line-height: 1.6;
`
