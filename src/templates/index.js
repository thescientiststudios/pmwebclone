import React, { useEffect } from "react"

import Layout from "../layouts/default"
import { graphql } from "gatsby"
import { SiteStateContext } from "../context/SiteContext"
import { TimelineLite, Power4 } from "gsap"
import SEO from "../components/seo"
import { HeroBanner, Partners, CaseStudyPreview } from "../components"
import styled from "styled-components"

/*** ========== MAIN COMPONENT ========== ***/
const IndexPage = ({ data }) => {
  const {
    locale,
    heroTitle,
    darkBanner,
    centeredBanner,
    sectionTextBlock,
    seo,
  } = data.home

  useEffect(() => {
    let tl = new TimelineLite()

    tl.from(".home", 1.8, {
      y: 35,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 1.2,
    })
  }, [])

  return (
    <Layout>
      <SiteStateContext.Consumer>
        {context => (
          <>
            <SEO
              title={seo.title}
              image={seo.image.url}
              description={seo.description}
            />
            <HeroBanner
              title={heroTitle}
              darkMode={darkBanner}
              centeredBanner={centeredBanner}
              cta
            />
            <StyledHome className="home">
              <div className="wrapper">
                <CaseStudyPreview locale={locale} />
              </div>
              {sectionTextBlock.map((section, i) => (
                <StyledHomeBlock
                  key={i}
                  className="home__block"
                  darkMode={section.darkMode}
                >
                  <div className="wrapper">
                    <h2>{section.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: section.description }}
                      className="text"
                    />
                  </div>
                </StyledHomeBlock>
              ))}
            </StyledHome>
            <div className="wrapper partners">
              <Partners />
            </div>
          </>
        )}
      </SiteStateContext.Consumer>
    </Layout>
  )
}

/*** ========== QUERY ========== ***/
export const homePageQuery = graphql`
  query HomePageQuery($locale: String!) {
    home: datoCmsHomePage(locale: { eq: $locale }) {
      locale
      slug
      heroTitle
      darkBanner
      centeredBanner
      sectionTextBlock {
        id
        title
        description
        darkMode
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
const StyledHome = styled.section`
  .partners {
    padding: 0;
  }
`

const StyledHomeBlock = styled.section`
  background-color: ${props => (props.darkMode ? "#000" : "#fff")};
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  margin-top: calc(${props => props.theme.space.extra_large} * 1.5);
  padding: ${({ darkMode, theme }) =>
    darkMode && `${theme.space.extra_large} 0`};
  mix-blend-mode: difference;

  .wrapper {
    margin: 0 auto;
    padding: ${props => (props.darkMode ? "3rem" : "0")} 0.5rem;

    @media (min-width: 1024px) {
      display: flex;
      flex-flow: row nowrap;
      align-items: baseline;
      padding-left: 0;
      padding-right: 0;
    }

    h2 {
      flex: 1 0 35%;
      font-weight: 400;
      font-size: 25px;
      margin-bottom: 40px;

      @media (min-width: 1024px) {
        font-size: 50px;
        margin-right: 1.5rem;
        margin-bottom: 0;
      }
    }

    .text {
      font-size: 1.1em;
      font-weight: 300;
      line-height: 1.6;

      @media (min-width: 1024px) {
        font-size: 1.3em;
      }
    }

    li {
      font-size: 1em;
      font-weight: 300;
      position: relative;
      padding-left: 2rem;

      @media (min-width: 1024px) {
        font-size: 1em;
      }

      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      &:before {
        content: "";
        display: block;
        width: 20px;
        height: 2px;
        position: absolute;
        top: 12px;
        left: 0;
        background-color: ${props => (props.darkMode ? "#fff" : "#000")};

        @media (min-width: 1024px) {
          top: 18px;
        }
      }
    }

    p {
      &:first-of-type {
        margin-top: 2rem;
        font-size: 18px;
        line-height: 36px;
      }
    }
  }
`

export default IndexPage
