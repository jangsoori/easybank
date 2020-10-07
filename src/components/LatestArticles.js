import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import { Section } from "../styled/section"
import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"

import { breakpoints } from "../styled/breakpoints"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Articles = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 4rem;
  @media only screen and (min-width: ${breakpoints.b}) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
`
const Article = styled.div`
  max-width: 340px;
  border-radius: 0.8rem;
  display: grid;
  height: 40rem;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  background: white;
`

const Details = styled.section`
  padding: 3rem;
  display: grid;
  grid-auto-rows: max-content;
  gap: 1rem;
  justify-content: left;
  text-align: left;
`
const Author = styled(BodyText)``
const Title = styled(BodyTitle)``
const Text = styled(BodyText)``

const HeaderTitle = styled(BodyTitle)`
  @media only screen and (min-width: ${breakpoints.b}) {
    text-align: left;
    font-size: 5rem;
    margin-bottom: 3rem;
  }
`
const Wrapper = styled(Section)`
  @media only screen and (min-width: ${breakpoints.b}) {
    justify-content: left;
  }
`
const Image = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  div {
    width: 340px !important;
  }
`
export default function LatestArticles() {
  const query = useStaticQuery(graphql`
    query {
      restaurant: file(relativePath: { eq: "image-restaurant.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      plane: file(relativePath: { eq: "image-plane.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      confetti: file(relativePath: { eq: "image-confetti.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      currency: file(relativePath: { eq: "image-currency.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <HeaderTitle size="3.6rem">Latest Articles</HeaderTitle>
      <Articles>
        <Article>
          <Image>
            <Img fixed={query.currency.childImageSharp.fixed} />
          </Image>
          <Details>
            <Author size="1rem">By Claire Robinson</Author>
            <Title size="1.6rem">
              Receive money with any currency with no fees
            </Title>
            <Text size="1.3rem">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
            </Text>
          </Details>
        </Article>
        <Article>
          <Image>
            <Img fixed={query.restaurant.childImageSharp.fixed} />
          </Image>
          <Details>
            <Author size="1rem">By Wilson Hutton</Author>
            <Title size="1.6rem">
              Treat yourself without worrying about money
            </Title>
            <Text size="1.3rem">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
            </Text>
          </Details>
        </Article>
        <Article>
          <Image>
            <Img fixed={query.plane.childImageSharp.fixed} />
          </Image>
          <Details>
            <Author size="1rem">By Wilson Hutton</Author>
            <Title size="1.6rem">Take your Easybank card wherever you go</Title>
            <Text size="1.3rem">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
            </Text>
          </Details>
        </Article>
        <Article>
          <Image>
            <Img fixed={query.confetti.childImageSharp.fixed} />
          </Image>
          <Details>
            <Author size="1rem">By Claire Robinson</Author>
            <Title size="1.6rem">
              Our invite-only Beta accounts are now live!
            </Title>
            <Text size="1.3rem">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
            </Text>
          </Details>
        </Article>
      </Articles>
    </Wrapper>
  )
}
