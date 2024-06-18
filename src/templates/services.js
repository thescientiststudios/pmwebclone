import React, { useEffect } from "react"
import { TimelineLite, Power4 } from "gsap"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { HeroBanner, ServicesAccordion } from "../components"
import { graphql } from "gatsby"

const Services = ({ data }) => {
  useEffect(() => {
    let tl = new TimelineLite()

    tl.from(".services-list-section", 1.8, {
      y: 35,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 1.2,
    })
  }, [])

  const {
    heroTitle,
    darkBanner,
    centeredBanner,
    servicesList,
    seo,
  } = data.datoCmsServicesPage
  return (
    <Layout>
      <SEO
        title={seo.title}
        image={seo.image && seo.image.url}
        description={seo.description}
      />
      <HeroBanner
        title={heroTitle}
        darkMode={darkBanner}
        centeredBanner={centeredBanner}
      />
      <div className="services-list-section">
        {servicesList.map(service => {
          return (
            <ServicesAccordion
              key={service.id}
              title={service.title}
              content={service.description}
              categories={service.categories}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const servicesPageQuery = graphql`
  query ServicesPageQuery($locale: String!) {
    datoCmsServicesPage(locale: { eq: $locale }) {
      heroTitle
      darkBanner
      centeredBanner
      servicesList {
        id
        title
        description
        categories
      }
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

export default Services
