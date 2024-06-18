import PropTypes, { useEffect, useState, useRef } from "prop-types"
import React, { useContext } from "react"
import { Link } from "gatsby"
import { TimelineLite, Power4 } from "gsap"
import {
  SiteDispatchContext,
  SiteStateContext,
} from "../../context/SiteContext"
import Hamburger from "../../images/svg_icons/hamburger.svg"
import PostmodernLogo from "../../images/svg_icons/PMLogo.svg"
import ArrowUpMenu from "../../images/svg_icons/arrow-up_menu.svg"
import { StyledHeader } from "./style"

const Header = ({ className }) => {
  const dispatch = useContext(SiteDispatchContext)
  const { isMenuOpen } = useContext(SiteStateContext)

  const isBrowser = typeof window !== "undefined" && window
  const prefix =
    isBrowser && window.location.pathname.includes("/it") ? "it" : "/"

  return (
    <SiteStateContext.Consumer>
      {context => (
        <StyledHeader isMenuOpen={isMenuOpen} className={className}>
          <Link to={`${prefix}`} className="hoverable header-logo">
            <PostmodernLogo />
          </Link>

          <div
            role="button"
            className="link menu-toggle"
            onClick={() => {
              dispatch({ type: "TOGGLE_MENU" })
            }}
          >
            <Hamburger className="hoverable menu-toggle--burger" />
            <ArrowUpMenu className="hoverable menu-toggle--arrow" />
          </div>
        </StyledHeader>
      )}
    </SiteStateContext.Consumer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
