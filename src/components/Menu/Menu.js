import React, { useContext, useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import {
  SiteStateContext,
  SiteDispatchContext,
} from "../../context/SiteContext"
import LanguageIcon from "../../images/svg_icons/language.svg"
import { StyledMenu } from "./style"

const Menu = () => {
  const { language } = useContext(SiteStateContext)
  const dispatch = useContext(SiteDispatchContext)

  function switchLanguage(language) {
    dispatch({ type: "SWITCH_LANGUAGE", payload: language })
    // if (language === "en") {
    //   window.location.href = "/"
    // } else {
    //   window.location.href = "/it"
    // }
  }

  return (
    <StaticQuery
      query={graphql`
        query MenuQuery {
          datoCmsGlobalInfo {
            phoneNumber
            telephoneNumber
            email
            address
            projectPlanner
            socialLinks {
              title
              link
            }
          }
        }
      `}
      render={data => {
        const {
          phoneNumber,
          telephoneNumber,
          email,
          projectPlanner,
          socialLinks,
        } = data.datoCmsGlobalInfo

        const isBrowser = typeof window !== "undefined" && window
        const prefix =
          isBrowser && window.location.pathname.includes("/it") ? "it" : ""

        return (
          <SiteStateContext.Consumer>
            {context => (
              <StyledMenu isMenuOpen={context.isMenuOpen}>
                <div className="wrapper wrapper--menu">
                  <div className="nav-columns">
                    <div className="nav-column">
                      <ul className="nav-links">
                        <li>
                          <Link
                            to={`${prefix}/case-studies`}
                            className="hoverable"
                          >
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link to={`${prefix}/services`} className="hoverable">
                            {isBrowser &&
                            window.location.pathname.includes("/it")
                              ? "Servizi"
                              : "Services"}
                          </Link>
                        </li>
                        <li>
                          <Link to={`${prefix}/about`} className="hoverable">
                            {isBrowser &&
                            window.location.pathname.includes("/it")
                              ? "Chi siamo"
                              : "About us"}
                          </Link>
                        </li>
                        <li>
                          <a
                            href={projectPlanner}
                            target="_blank"
                            re="noopener"
                            className="hoverable"
                          >
                            {isBrowser &&
                            window.location.pathname.includes("/it")
                              ? "Contattaci"
                              : "Contact us"}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-column">
                      <div className="nav-infos">
                        <ul className="nav-info">
                          <li className="nav-info-label">Email</li>
                          <li>
                            <a href={`mailto:${email}`} className="hoverable">
                              {email}
                            </a>
                          </li>
                        </ul>
                        <ul className="nav-info">
                          <li className="nav-info-label">Socials</li>
                          {socialLinks.map((social, i) => {
                            return (
                              <li key={i}>
                                <a
                                  href={social.link}
                                  target="_blank"
                                  rel="noopener"
                                  className="hoverable"
                                >
                                  {social.title}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                        <ul className="nav-info">
                          <li className="nav-info-label">Phone</li>
                          <li>
                            <a
                              href={`tel:${phoneNumber}`}
                              className="block-text"
                              className="hoverable"
                            >
                              {phoneNumber}
                            </a>
                          </li>
                          <li>
                            {telephoneNumber && (
                              <a
                                href={`tel:${telephoneNumber}`}
                                className="block-text"
                                className="hoverable"
                              >
                                {telephoneNumber}
                              </a>
                            )}
                          </li>
                        </ul>
                        <ul className="nav-info">
                          <li className="nav-info-label nav-info-label--language">
                            <span>Language</span>
                            <LanguageIcon className="language-icon" />
                          </li>
                          <li className="nav-languages">
                            <span
                              className={` ${isBrowser &&
                                !window.location.pathname.includes("/it") &&
                                "nav-language--active"}`}
                              onClick={() => switchLanguage("en")}
                            >
                              <Link
                                to={
                                  isBrowser &&
                                  window.location.pathname.includes("/it")
                                    ? window.location.pathname.replace(
                                        "/it",
                                        ""
                                      )
                                    : isBrowser
                                    ? window.location.pathname
                                    : "/"
                                }
                                className="hoverable"
                              >
                                English
                              </Link>
                            </span>
                            <span
                              className={` ${isBrowser &&
                                window.location.pathname.includes("/it") &&
                                "nav-language--active"}`}
                              onClick={() => switchLanguage("it")}
                            >
                              <Link
                                to={`${
                                  isBrowser &&
                                  window.location.pathname.includes("/it")
                                    ? window.location.pathname
                                    : isBrowser
                                    ? "/it" + window.location.pathname
                                    : "/it"
                                }`}
                                className="hoverable"
                              >
                                Italian
                              </Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </StyledMenu>
            )}
          </SiteStateContext.Consumer>
        )
      }}
    />
  )
}

export default Menu
