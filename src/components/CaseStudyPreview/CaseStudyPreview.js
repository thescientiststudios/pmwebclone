import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import ArrowRight from "../../images/svg_icons/arrow-right.svg"
import { StyledCaseStudyPreview } from "./style"

const CaseStudyPreview = ({ locale }) => {
  const isBrowser = typeof window !== "undefined" && window

  const prefix =
    isBrowser && window.location.pathname.includes("/it") ? "it" : ""

  return (
    <StaticQuery
      query={graphql`
        query CaseStudyPageQuery {
          caseStudy: allDatoCmsCaseStudiesCollection {
            edges {
              node {
                id
                slug
                locale
                projectTitle
                excerpt
                coverImage {
                  url
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.caseStudy
        return (
          <StyledCaseStudyPreview>
            {edges
              .filter(edge => {
                return edge.node.locale === locale
              })
              .map(({ node }) => {
                return (
                  <Link
                    to={`${prefix}/case-studies/${node.slug}`}
                    className="case-study__item"
                    key={node.id}
                  >
                    <div className="hoverable hoverable--image banner-wrapper">
                      <div className="case-study__image">
                        <img
                          src={node.coverImage.url}
                          alt={node.projectTitle}
                        />
                      </div>
                    </div>
                    <div className="case-study__content">
                      <h3 className="case-study__title">
                        {node.projectTitle}
                        <ArrowRight className="arrow-icon--mobile" />
                      </h3>
                      <div className="case-study__text-wrapper">
                        <p className="case-study__text">{node.excerpt}</p>

                        <div className="hoverable call-to-action">
                          <span>
                            {isBrowser &&
                            window.location.pathname.includes("/it")
                              ? "Visita il progetto"
                              : "View project"}
                          </span>
                          <div className="arrow-icon">
                            <ArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </StyledCaseStudyPreview>
        )
      }}
    />
  )
}

export default CaseStudyPreview
