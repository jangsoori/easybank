import React from "react"
import GlobalStyles from "../theme/global"
import styled from "@emotion/styled"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../theme/theme"
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <GlobalStyles />
        <Header />
        <section style={{ flexGrow: "1" }}>{children}</section>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  )
}
