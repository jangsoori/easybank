import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import BackgroundSmall from "../assets/svg/bg-intro-mobile.svg"
import BackgroundBig from "../assets/svg/bg-intro-desktop.svg"
import mockups from "../assets/image-mockups.png"
import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"
import { Section } from "../styled/section"
import CtaBtn from "./CtaBtn"
import { breakpoints } from "../styled/breakpoints"
import useWindowSize from "../useWindowDimensions"
const StyledHeroSection = styled.section`
  padding-bottom: 8rem;
  @media only screen and (min-width: ${breakpoints.b}) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding-bottom: 0;
    position: relative;
  }
`
const Background = styled.div`
  position: relative;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.b}) {
    flex: 5;
    height: 80rem;
    overflow: hidden;
    grid-column: 2/3;
  }
`

const BackgroundMobile = styled(BackgroundSmall)`
  width: 100%;

  margin: 0 auto;
`

const BackgroundDesktop = styled(BackgroundBig)`
  position: absolute;
  top: -20rem;
  right: -40rem;
  transform: scale(1.5);
`
const Mockups = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  height: 40rem;
  @media only screen and (min-width: ${breakpoints.b}) {
    top: -20%;
    height: 120rem;
    left: auto;
    right: -65rem;
    overflow: hidden;
  }
`

export default function Hero() {
  const size = useWindowSize()
  console.log(breakpoints.b)
  console.log(size.width > 1200)
  return (
    <StyledHeroSection>
      <Background>
        {size.width >= 1200 ? <BackgroundDesktop /> : <BackgroundMobile />}
      </Background>
      <Mockups src={mockups} />

      <Section
        css={css`
          background: white;
          margin-top: -4rem;
          padding: 0 2rem;
          @media only screen and (min-width: ${breakpoints.b}) {
            margin-top: 0;
            flex: 3;
            align-content: center;
            text-align: left;
            justify-content: left;
            grid-column: 1/2;
            grid-row: 1/2;
            padding-right: 0;
            button {
              margin: 0;
            }
          }
        `}
      >
        <BodyTitle
          size="4.5rem"
          css={css`
            @media only screen and (min-width: ${breakpoints.b}) {
              font-size: 6rem;
            }
          `}
        >
          Next generation
          <br />
          digital banking
        </BodyTitle>
        <BodyText
          css={css`
            @media only screen and (min-width: ${breakpoints.b}) {
              font-size: 2.5rem;
            }
          `}
          size="1.6rem"
        >
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </BodyText>
        <CtaBtn />
      </Section>
    </StyledHeroSection>
  )
}
