import React from "react"
import styled from "@emotion/styled"
import { Section } from "../styled/section"
import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"
import ImgAPI from "../assets/svg/icon-api.svg"
import ImgBudgeting from "../assets/svg/icon-budgeting.svg"
import ImgOnboarding from "../assets/svg/icon-onboarding.svg"
import ImgOnline from "../assets/svg/icon-online.svg"
import { breakpoints } from "../styled/breakpoints"

const Features = styled.section`
  display: grid;
  grid-auto-rows: max-content;
  gap: 4rem;
  @media only screen and (min-width: ${breakpoints.b}) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`

const FeaturesItem = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 2rem;

  justify-items: center;
  @media only screen and (min-width: ${breakpoints.b}) {
    justify-items: left;
    text-align: left;
  }
`
const Wrapper = styled(Section)`
  @media only screen and (min-width: ${breakpoints.b}) {
    justify-content: left;
  }
`

const HeaderTitle = styled(BodyTitle)`
  @media only screen and (min-width: ${breakpoints.b}) {
    text-align: left;
    font-size: 5rem;
  }
`

const HeaderText = styled(BodyText)`
  @media only screen and (min-width: ${breakpoints.b}) {
    text-align: left;
    font-size: 2rem;
    width: 70%;
    margin-bottom: 5rem;
  }
`

export default function WhyUs() {
  return (
    <Wrapper secondary>
      <HeaderTitle size="3.6rem">Why choose Easybank</HeaderTitle>
      <HeaderText size="1.5rem">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </HeaderText>
      <Features>
        <FeaturesItem>
          <ImgOnline />
          <BodyTitle size="2.4rem">Online Banking</BodyTitle>
          <BodyText size="1.5rem">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </BodyText>
        </FeaturesItem>
        <FeaturesItem>
          <ImgBudgeting />
          <BodyTitle size="2.4rem">Simple Budgeting</BodyTitle>
          <BodyText size="1.5rem">
            See exactly where your money goes each month. Receive notifications
            when you're close to your hitting limits.
          </BodyText>
        </FeaturesItem>
        <FeaturesItem>
          <ImgOnboarding />
          <BodyTitle size="2.4rem">Fast Onboarding</BodyTitle>
          <BodyText size="1.5rem">
            We don't do branches. Open your account in minute online and start
            taking control of your finances right away.
          </BodyText>
        </FeaturesItem>
        <FeaturesItem>
          <ImgAPI />
          <BodyTitle size="2.4rem">Open API</BodyTitle>
          <BodyText size="1.5rem">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </BodyText>
        </FeaturesItem>
      </Features>
    </Wrapper>
  )
}
