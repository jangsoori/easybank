import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import background from "../assets/svg/bg-intro-mobile.svg"
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
  height: 30%;
`
const Background = styled.img`
  margin-top: -3rem;
  width: 100%;
`
const Mockups = styled.img`
  position: absolute;
  left: 0;
  top: -32%;
  width: 100%;
`

export default function Hero() {
  return (
    <StyledHeroSection>
      <MockupsContainer>
        <Background src={background} alt="" />
        <Mockups src={mockups} alt="" />
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
