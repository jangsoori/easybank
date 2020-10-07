import React from "react"
import styled from "@emotion/styled"
import BackgroundSmall from "../assets/svg/bg-intro-mobile.svg"
import BackgroundBig from "../assets/svg/bg-intro-desktop.svg"
import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"
import { Section } from "../styled/section"
import CtaBtn from "./CtaBtn"
import { breakpoints } from "../styled/breakpoints"
import useWindowSize from "../useWindowDimensions"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const StyledHeroSection = styled.section`
  padding-bottom: 8rem;
  @media only screen and (min-width: ${breakpoints.b}) {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 0;
    position: relative;
    height: 70rem;
  }
`
const Background = styled.div`
  position: relative;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.b}) {
    position: absolute;
    right: 0;
    top: 0;
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
  transform: scale(1);
`
const Mockups = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  height: 38rem;

  @media only screen and (min-width: ${breakpoints.b}) {
    top: -20%;

    height: 100rem;
    left: auto;
    right: -55rem;
    overflow: hidden;
  }
`

const SectionWrapper = styled(Section)`
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
            width:30%;
            button {
              margin: 0;
            }
`

const SectionTitle = styled(BodyTitle)`
  @media only screen and (min-width: ${breakpoints.b}) {
    font-size: 6rem;
  }
`
const SectionText = styled(BodyText)`
  @media only screen and (min-width: ${breakpoints.b}) {
    font-size: 2.5rem;
  }
`

export default function Hero() {
  const size = useWindowSize()
  const query = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/image-mockups.png" }) {
        id
        mobile: childImageSharp {
          fixed(height: 380) {
            ...GatsbyImageSharpFixed
          }
        }
        desktop: childImageSharp {
          fixed(height: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledHeroSection>
      <Background>
        {size.width >= 1400 ? <BackgroundDesktop /> : <BackgroundMobile />}
      </Background>
      <Mockups>
        {size.width >= 1400 ? (
          <Img fixed={query.file.desktop.fixed} />
        ) : (
          <Img fixed={query.file.mobile.fixed} />
        )}
      </Mockups>
      <SectionWrapper>
        <SectionTitle size="4.5rem">
          Next generation
          <br />
          digital banking
        </SectionTitle>
        <SectionText size="1.6rem">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </SectionText>
        <CtaBtn />
      </SectionWrapper>
    </StyledHeroSection>
  )
}
