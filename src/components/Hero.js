import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import BackgroundSVG from "../assets/svg/bg-intro-mobile.svg"
import mockups from "../assets/image-mockups.png"
import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"
import { Section } from "../styled/section"
import CtaBtn from "./CtaBtn"
const StyledHeroSection = styled.section`
  padding-bottom: 8rem;
`
const MockupsContainer = styled.div`
  position: relative;
  height: 100%;
`
const Background = styled(BackgroundSVG)`
  width: 100%;
  margin: 0 auto;
`
const Mockups = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  max-height: 100%;
`

export default function Hero() {
  return (
    <StyledHeroSection>
      <MockupsContainer>
        <Background />
        <Mockups src={mockups} />
      </MockupsContainer>
      <Section
        style={{ background: "white", marginTop: "-4rem", padding: "0 2rem" }}
      >
        <BodyTitle size="4.5rem">
          Next generation
          <br />
          digital banking
        </BodyTitle>
        <BodyText size="1.6rem">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </BodyText>
        <CtaBtn />
      </Section>
    </StyledHeroSection>
  )
}
