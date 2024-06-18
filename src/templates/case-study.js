import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { TimelineLite, Power4 } from "gsap"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../layouts/default"
import { HeroBanner } from "../components"

/*** ========== MAIN COMPONENT ========== ***/
const CaseStudyLayout = ({ data }) => {
  useEffect(() => {
    let tl = new TimelineLite()

    tl.from(".case-study", 1.8, {
      y: 35,
      opacity: 0,
      ease: Power4.easeOut,
      delay: 1.2,
    })
  }, [])

  return (
    <Layout>
      <SEO
        title={data.caseStudy.seo.title}
        image={data.caseStudy.seo.image && data.caseStudy.seo.image.url}
        description={data.caseStudy.seo.description}
      />
      <HeroBanner
        title={data.caseStudy.excerpt}
        centeredBanner={true}
        subtitle={data.caseStudy.projectTitle}
        excerpt={true}
      />
      <StyledCaseStudy className="case-study">
        <div className="wrapper hoverable--image banner">
          <img src={data.caseStudy.coverImage.url} alt="banner image" />
        </div>
        {data.caseStudy.caseStudyBlocks.map((item, i) => {
          if (item.model.apiKey === "banner") {
            return (
              <div
                key={i}
                className={`hoverable--image wrapper banner ${
                  item.fullWidth ? "banner--fullWidth" : ""
                }`}
              >
                <img
                  src={item.bannerImage.url}
                  alt="banner image"
                  className="banner__image"
                />
              </div>
            )
          }

          if (item.model.apiKey === "textblock") {
            return (
              <div
                style={
                  item.backgroundColor
                    ? {
                        backgroundColor: `${item.backgroundColor.hex}`,
                        padding: "1rem 0",
                      }
                    : {}
                }
              >
                <div className="wrapper text-block">
                  <h3>{item.textblockTitle}</h3>
                  <p>{item.textblockText}</p>
                </div>
                {item.image ? (
                  <div className="wrapper text-block__image-wrapper">
                    <img src={item.image.url} alt="banner image" />
                  </div>
                ) : null}
              </div>
            )
          }

          if (item.model.apiKey === "grid_gallery") {
            return (
              <div
                style={
                  item.backgroundColor
                    ? {
                        backgroundColor: `${item.backgroundColor.hex}`,
                      }
                    : {}
                }
              >
                <div className="wrapper grid-gallery">
                  {item.gridGallery.map((image, i) => {
                    return (
                      <div className="hoverable--image image-wrapper">
                        <img src={image.url} alt={`${image} ${i}`} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }

          if (item.model.apiKey === "scrollable_gallery") {
            return (
              <div
                style={
                  item.backgroundColor
                    ? {
                        backgroundColor: `${item.backgroundColor.hex}`,
                      }
                    : {}
                }
              >
                <div className="wrapper scrollable-gallery">
                  {item.scrollableGallery.map((image, i) => {
                    return (
                      <div className="hoverable--image image-wrapper">
                        <img src={image.url} alt={`${image} ${i}`} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
        })}
      </StyledCaseStudy>
    </Layout>
  )
}

/*** ========== QUERY ========== ***/
export const caseStudyQuery = graphql`
  query CaseStudyQuery($locale: String!, $slug: String!) {
    caseStudy: datoCmsCaseStudiesCollection(
      locale: { eq: $locale }
      slug: { eq: $slug }
    ) {
      seo {
        title
        description
        twitterCard
        image {
          url
        }
      }
      locale
      slug
      projectTitle
      excerpt
      coverImage {
        url
      }
      caseStudyBlocks {
        ... on DatoCmsBanner {
          id
          bannerImage {
            url
          }
          fullWidth
          model {
            apiKey
          }
        }
        ... on DatoCmsGridGallery {
          id
          gridGallery {
            url
          }
          backgroundColor {
            hex
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsScrollableGallery {
          id
          scrollableGallery {
            url
          }
          backgroundColor {
            hex
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsTextblock {
          id
          textblockTitle
          textblockText
          backgroundColor {
            hex
          }
          image {
            url
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`

/*** ========== STYLE ========== ***/
const StyledCaseStudy = styled.div`
  .banner {
    position: relative;
    padding-bottom: 45%;

    &--fullWidth {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
  }

  .text-block {
    margin: calc(${props => props.theme.space.extra_large} * 1.4) auto;

    @media (min-width: 1024px) {
      display: flex;
      flex-flow: row nowrap;
      align-items: baseline;
      margin: calc(${props => props.theme.space.extra_large} * 1.8) auto;
    }

    h3 {
      margin-bottom: 1rem;
      font-weight: 500;
      color: #000;
      mix-blend-mode: difference;

      @media (min-width: 1024px) {
        flex: 1 0 35%;
      }
    }

    p {
      color: #000;
      font-weight: 300;
      line-height: 1.6;
    }

    &__image-wrapper {
      position: relative;
      padding-bottom: 45%;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }
    }
  }

  .grid-gallery {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    padding: 5rem 0;

    .image-wrapper {
      flex: 1 1 calc(100% / 3);
      position: relative;
      padding-bottom: 35%;

      &:not(:last-of-type) {
        margin-right: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }
    }
  }

  .scrollable-gallery {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    overflow-x: scroll;
    padding: 5rem 0;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    .image-wrapper {
      flex: 1 0 calc(100% / 2);

      position: relative;
      padding-bottom: 35%;

      @media (min-width: 1024px) {
        flex: 1 0 calc(100% / 3);
      }

      &:nth-of-type(odd) {
        padding-bottom: 25%;
      }

      &:not(:last-of-type) {
        margin-right: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }
    }
  }
`

export default CaseStudyLayout
