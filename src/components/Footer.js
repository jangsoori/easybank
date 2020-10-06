import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"
import { Section } from "../styled/section"
import CtaBtn from "./CtaBtn"
import Logo from "../assets/svg/logo.svg"
import Facebook from "../assets/svg/icon-facebook.svg"
import Instagram from "../assets/svg/icon-instagram.svg"
import Pinterest from "../assets/svg/icon-pinterest.svg"
import Twitter from "../assets/svg/icon-twitter.svg"
import Youtube from "../assets/svg/icon-youtube.svg"
import { Link } from "gatsby"

const StyledLogo = styled(Logo)`
  > g {
    > path {
      :first-child {
        fill: white;
      }
    }
  }
`

const Socials = styled.section`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  gap: 1.8rem;
  justify-content: center;
  justify-items: center;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-rows: max-content;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral.vLightGray};
  gap: 2rem;
`

const Copy = styled(BodyText)`
  font-size: 1.4rem;
`
const StyledLink = styled(Link)``
export default function Footer() {
  return (
    <Section blue style={{ gap: "4rem" }}>
      <StyledLogo
        css={css`
          justify-self: center;
        `}
      />
      <Socials>
        <Facebook />
        <Youtube />
        <Twitter />
        <Pinterest />
        <Instagram />
      </Socials>
      <Nav>
        <StyledLink to="/">About us</StyledLink>
        <StyledLink to="/">Contact</StyledLink>
        <StyledLink to="/">Blog</StyledLink>
        <StyledLink to="/">Careers</StyledLink>
        <StyledLink to="/">Support</StyledLink>
        <StyledLink to="/">Privacy policy</StyledLink>
      </Nav>
      <CtaBtn />
      <Copy>&copy; Easybank. All Rights Reserved</Copy>
    </Section>
  )
}
