import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../assets/svg/logo.svg"
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  z-index: 100;
  background: ${({ theme }) => theme.colors.neutral.white};
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`

const StyledMobileNavBtn = styled.button`
  background: none;
  border: none;
  height: 3rem;
  width: 3rem;
  position: relative;
  padding: 0;
  display: flex;
  cursor:pointer;
  flex-direction: column;
  justify-content: space-around;
  outline:none;
  span {
    width: 100%;
    height: 1px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.primary.blue};
    transition:all .5s;
    transform-origin:1px;

${({ active }) =>
  active &&
  css`
    :nth-child(1) {
      
      transform:rotate(45deg)
    }
    :nth-child(2) {
      opacity:0;
    }
    :nth-child(3) {
      transform:rotate(-45deg)

    }
  }
`}
   
`
const StyledNav = styled.nav`
  display: none;
`
const StyledNavItem = styled(Link)``
const StyledCta = styled.div`
  display: none;
`

export default function Header() {
  const [menuActive, setMenuActive] = React.useState(false)
  return (
    <StyledHeader>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledMobileNavBtn
        active={menuActive}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </StyledMobileNavBtn>
      <StyledNav>
        <StyledNavItem to="/">Home</StyledNavItem>
        <StyledNavItem to="/about">About</StyledNavItem>
        <StyledNavItem to="/contact">Contact</StyledNavItem>
        <StyledNavItem to="/blog">Blog</StyledNavItem>
        <StyledNavItem to="/careers">Careers</StyledNavItem>
      </StyledNav>
    </StyledHeader>
  )
}
