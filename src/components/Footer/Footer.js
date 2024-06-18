import React, { useContext } from "react"
import { Link, StaticQuery } from "gatsby"
import { SiteStateContext } from "../../context/SiteContext"
import PostmodernLogo from "../../images/svg_icons/PMLogo.svg"
import { StyledFooter } from "./style"

const Footer = ({ className }) => {
  const { language } = useContext(SiteStateContext)
  const isBrowser = typeof window !== "undefined" && window

  const prefix =
    isBrowser && window.location.pathname.includes("/it") ? "it" : ""
  return (
    <StaticQuery
      query={graphql`
        query FooterPageQuery {
          datoCmsGlobalInfo {
            footerHeading
            footerSubtitle
            phoneNumber
            telephoneNumber
            email
            address
            projectPlanner
            partitaIva
            legalInfo {
              ... on DatoCmsLegalItemLink {
                id
                title
                link
              }
              ... on DatoCmsLegalItemText {
                id
                text
              }
            }
          }
        }
      `}
      render={data => {
        const {
          footerHeading,
          footerSubtitle,
          phoneNumber,
          telephoneNumber,
          email,
          address,
          projectPlanner,
          partitaIva,
          legalInfo,
        } = data.datoCmsGlobalInfo
        return (
          <StyledFooter className="footer">
            <header className="footer__header">
              <h1
                className="footer__title"
                dangerouslySetInnerHTML={{ __html: footerHeading }}
              />
              <p
                className="subtitle footer-subtitle"
                dangerouslySetInnerHTML={{ __html: footerSubtitle }}
              />
            </header>

            <div className="footer__blocks">
              <ul className="block">
                <h4 className="block-title">Chat</h4>
                <li className="hoverable block-text block-text--link">
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </li>
                {telephoneNumber && (
                  <li className="hoverable block-text block-text--link">
                    <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>
                  </li>
                )}
                <li className="hoverable block-text block-text--link">
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              </ul>
              <ul className="block">
                <h4 className="block-title">Meet</h4>
                <li className="hoverable block-text block-text--link block-text--address">
                  <a
                    href={`http://maps.google.com/?q=${address}`}
                    target="_blank"
                    rel="noopener"
                  >
                    {address}
                  </a>
                </li>
              </ul>
              <ul className="block">
                <h4 className="block-title">Make</h4>
                <li className="hoverable block-text block-text--launcher">
                  {isBrowser && window.location.pathname.includes("/it")
                    ? "Parlaci del tuo progetto"
                    : "Tell us about your project"}
                </li>
                <li className="hoverable block-text block-text--link block-text--page">
                  <a href={projectPlanner} target="_blank" rel="noopener">
                    {isBrowser && window.location.pathname.includes("/it")
                      ? "Vai alla project planner"
                      : "Launch project planner"}
                  </a>
                </li>
              </ul>
              <ul className="block block--trademark">
                <div className="block-title footer__logo">
                  <PostmodernLogo />
                </div>
                {legalInfo.map(item => {
                  return (
                    <li key={item.id} className="block-text--link block-text">
                      {item.title && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hoverable"
                        >
                          {item.title}
                        </a>
                      )}
                      {item.text && <span>{item.text}</span>}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="copyrights">
              <span>© 2020. All rights reserved.</span>
              <span>P.IVA: {partitaIva}</span>
            </div>
          </StyledFooter>
        )
      }}
    />
  )
}

export default Footer
