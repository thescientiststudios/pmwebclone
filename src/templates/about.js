import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { TimelineLite, Power4 } from "gsap"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../layouts/default"
import { HeroBanner, Partners, Team } from "../components"

/*** ========== MAIN COMPONENT ========== ***/
const AboutPage = ({ data }) => {
  const {
    heroTitle,
    darkBanner,
    centeredBanner,
    banner,
    aboutTitle,
    aboutList,
    workWithUsTitle,
    workWithUsDescription,
    team,
    seo,
  } = data.about

  useEffect(() => {
    let tl = new TimelineLite()

    tl.from(".about", 1.8, {
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
        darkMode={darkBanner}
        centeredBanner={centeredBanner}
      />
      <StyledAbout className="about">
        {banner && (
          <div className="wrapper banner">
            <img src={banner.url} alt={banner.alt} />
          </div>
        )}
        <div className="wrapper about">
          <h2 className="about__title">{aboutTitle}</h2>
          <div className="about__blocks">
            {aboutList.map(item => {
              return (
                <article key={item.id}>
                  <h3 className="block-title">{item.title}</h3>
                  <p className="block-description">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
        <div className="work-with-us">
          <div className="wrapper">
            <h2 className="work-with-us__title">{workWithUsTitle}</h2>
            <p className="about__blocks">{workWithUsDescription}</p>
          </div>
        </div>
        <div className="wrapper">
          <Team data={team} />
          <Partners />
        </div>
      </StyledAbout>
    </Layout>
  )
}

/*** ========== QUERY ========== ***/
export const aboutPageQuery = graphql`
  query AboutPageQuery($locale: String!) {
    about: datoCmsAboutPage(locale: { eq: $locale }) {
      id
      locale
      slug
      heroTitle
      darkBanner
      centeredBanner
      banner {
        alt
        url
      }
      aboutTitle
      aboutList {
        id
        title
        description
      }
      workWithUsTitle
      workWithUsDescription
      team {
        fullName
        role
        image {
          url
        }
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

/*** ========== STYLE ========== ***/
const StyledAbout = styled.section`
  .banner {
    position: relative;
    margin-bottom: 2rem;
    padding-bottom: 45%;
    background-color: #eee;

    @media (min-width: 1024px) {
      margin-bottom: 108px;
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
  }

  .about {
    display: flex;
    flex-flow: column nowrap;

    @media (min-width: 1024px) {
      flex-flow: row nowrap;
      align-items: flex-start;
    }

    &__title {
      /* parametize */
      margin-bottom: 1.8rem;
      font-weight: 400;
      font-size: 1.8em;

      @media (min-width: 1024px) {
        flex: 1 0 35%;
        align-self: flex-start;
      }
    }
  }

  .about__blocks {
    font-weight: 300;

    @media (min-width: 1024px) {
      /* parametize */
      margin-top: 0.5rem;
    }
  }

  .block-title {
    /* parametize */
    margin-bottom: 1rem;
    font-weight: 400;
  }

  .block-description {
    margin-bottom: 2.5rem;
    line-height: 1.8;
    font-weight: 300;

    @media (min-width: 1024px) {
      line-height: 40px;
    }
  }

  .work-with-us {
    /* parametize */
    padding: 2rem 0;
    background-color: #fafafa;

    .wrapper {
      @media (min-width: 1024px) {
        display: flex;
        flex-flow: row nowrap;
      }
    }

    &__title {
      /* parametize */
      margin-bottom: 1rem;
      font-weight: 400;

      @media (min-width: 1024px) {
        flex: 1 0 35%;
        align-self: flex-start;
        margin-bottom: 0;
      }
    }
  }
`

export default AboutPage
