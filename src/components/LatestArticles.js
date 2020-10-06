import React from "react"
import styled from "@emotion/styled"
import { Section } from "../styled/section"
import { BodyText } from "../styled/bodyText"
import { BodyTitle } from "../styled/bodyTitle"
import plane from "../assets/image-plane.jpg"
import restaurant from "../assets/image-restaurant.jpg"
import confetti from "../assets/image-confetti.jpg"
import currency from "../assets/image-currency.jpg"

const Articles = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 2rem;
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
const Image = styled.img`
  width: 100%;
  object-fit: cover;

  height: 100%;
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

export default function LatestArticles() {
  return (
    <Section>
      <BodyTitle size="3.6rem">Latest Articles</BodyTitle>
      <Articles>
        <Article>
          <Image src={currency} />
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
          <Image src={restaurant} />
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
          <Image src={plane} />
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
          <Image src={confetti} />
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
    </Section>
  )
}
