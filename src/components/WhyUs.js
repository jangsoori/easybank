import React from "react"
import styled from "@emotion/styled"
import { Section } from "../styled/section"
import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"
import ImgAPI from "../assets/svg/icon-api.svg"
import ImgBudgeting from "../assets/svg/icon-budgeting.svg"
import ImgOnboarding from "../assets/svg/icon-onboarding.svg"
import ImgOnline from "../assets/svg/icon-online.svg"

const Features = styled.section`
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 4rem;
`

const FeaturesItem = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2rem;
  justify-items: center;
`

const ItemImg = styled.img``

export default function WhyUs() {
  return (
    <Section secondary>
      <BodyTitle size="3.6rem">Why choose Easybank</BodyTitle>
      <BodyText size="1.5rem">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </BodyText>
      <Features>
        <FeaturesItem>
          <ItemImg src={ImgOnline} />
          <BodyTitle size="2.4rem">Online Banking</BodyTitle>
          <BodyText size="1.5rem">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </BodyText>
        </FeaturesItem>
        <FeaturesItem>
          <ItemImg src={ImgBudgeting} />
          <BodyTitle size="2.4rem">Simple Budgeting</BodyTitle>
          <BodyText size="1.5rem">
            See exactly where your money goes each month. Receive notifications
            when you're close to your hitting limits.
          </BodyText>
        </FeaturesItem>
        <FeaturesItem>
          <ItemImg src={ImgOnboarding} />
          <BodyTitle size="2.4rem">Fast Onboarding</BodyTitle>
          <BodyText size="1.5rem">
            We don't do branches. Open your account in minute online and start
            taking control of your finances right away.
          </BodyText>
        </FeaturesItem>
        <FeaturesItem>
          <ItemImg src={ImgAPI} />
          <BodyTitle size="2.4rem">Open API</BodyTitle>
          <BodyText size="1.5rem">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </BodyText>
        </FeaturesItem>
      </Features>
    </Section>
  )
}
