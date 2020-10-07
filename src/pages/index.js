import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import WhyUs from "../components/WhyUs"
import LatestArticles from "../components/LatestArticles"

const IndexPage = () => (
  <Layout>
    <Hero />
    <WhyUs />
    <LatestArticles />
  </Layout>
)

export default IndexPage
