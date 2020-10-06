import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../assets/svg/logo.svg"
import { breakpoints } from "../styled/breakpoints"
import { lighten } from "polished"
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
  position: relative;
  height: 7rem;
  background: ${({ theme }) => theme.colors.neutral.white};
  ${({ mobileActive, theme }) =>
    mobileActive &&
    css`
      box-shadow: 0px 50px 300px 600px hsla(233, 26%, 24%, 0.7);
    `}
  @media only screen and (min-width:${breakpoints.b}) {
    padding: 0rem 16rem;
  }
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
   
   @media only screen and (min-width:${breakpoints.b}){
     display:none
   }
`
const StyledNav = styled.nav`
  display: none;
  font-size: 1.8rem;
  ${({ mobileActive }) =>
    mobileActive &&
    css`
      padding: 2rem 0;
      background: white;
      position: absolute;
      display: grid;
      grid-template-rows: repeat(5, max-content);
      text-align: center;
      left: 50%;
      top: 9rem;
      transform: translateX(-50%);
      border-radius: 5px;
      gap: 2.4rem;

      width: 32rem;
    `}
  @media only screen and (min-width:${breakpoints.b}) {
    display: grid;
    grid-template-columns: repeat(5, max-content);
    grid-template-rows: 1fr;
    flex: 1;
    gap: 0;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`
const StyledNavItem = styled(Link)`
  @media only screen and (min-width: ${breakpoints.b}) {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    color: ${({ theme }) => theme.colors.neutral.grayBlue};
    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      transition: width 0.2s;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.primary.green};
    }
    :hover {
      color: ${({ theme }) => theme.colors.primary.blue};
    }
    :hover ::after {
      width: 100%;
    }
  }
`
const StyledCta = styled.button`
  @media only screen and (max-width: ${breakpoints.b}) {
    display: none;
  }
  width: 15rem;
  margin: 0 auto;
  padding: 1.25rem 0;
  border-radius: 5rem;
  grid-column: 3/4;
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

export default function Header() {
  const [menuActive, setMenuActive] = React.useState(false)
  return (
    <StyledHeader mobileActive={menuActive}>
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
      <StyledNav mobileActive={menuActive}>
        <StyledNavItem to="/">Home</StyledNavItem>
        <StyledNavItem to="/about">About</StyledNavItem>
        <StyledNavItem to="/contact">Contact</StyledNavItem>
        <StyledNavItem to="/blog">Blog</StyledNavItem>
        <StyledNavItem to="/careers">Careers</StyledNavItem>
      </StyledNav>
      <StyledCta>Request Invite</StyledCta>
    </StyledHeader>
  )
}
