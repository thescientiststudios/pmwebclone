import React, { useEffect } from "react"
import { TimelineLite, Power4 } from "gsap"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { HeroBanner, CaseStudyPreview } from "../components"
import { graphql } from "gatsby"

const Portfolio = ({ data }) => {
  const { locale, heroTitle, darkMode, centeredBanner, seo } = data.caseStudies

  useEffect(() => {
    let tl = new TimelineLite()

    tl.from(".case-studies", 1.8, {
      y: 35,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 1.2,
    })
  }, [])
  return (
    <Layout>
      <SEO
        title={seo.title}
        image={seo.image.url}
        description={seo.description}
      />
      <HeroBanner
        title={heroTitle}
        darkMode={darkMode}
        centeredBanner={centeredBanner}
      />

      <section className="case-studies wrapper">
        <CaseStudyPreview locale={locale} />
      </section>
    </Layout>
  )
}

export const portfolioPageQuery = graphql`
  query PortfolioPageQuery($locale: String!) {
    caseStudies: datoCmsCaseStudyPage(locale: { eq: $locale }) {
      locale
      heroTitle
      darkMode
      centeredBanner
      seo {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
  }
`

export default Portfolio
