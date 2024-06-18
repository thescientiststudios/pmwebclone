import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StyledPartners } from "./style"

const Partners = () => {
  return (
    <StaticQuery
      query={graphql`
        query PartnersCollectionQuery {
          datoCmsPartnersCollection {
            images {
              url
            }
          }
        }
      `}
      render={data => {
        const { images } = data.datoCmsPartnersCollection
        return (
          <StyledPartners className="wrapper">
            {images.map((partner, i) => {
              return (
                <div key={i} className="hoverable--image partner-wrapper">
                  <img src={partner.url} alt={partner.alt} />
                </div>
              )
            })}
          </StyledPartners>
        )
      }}
    />
  )
}

export default Partners
