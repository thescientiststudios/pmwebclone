import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import { TweenMax, gsap, TimelineLite, Power4 } from "gsap"
import { CSSPlugin } from "gsap/CSSPlugin"
import { SiteContextProvider } from "../context/SiteContext"
import Theme from "../utils/theme"
import {
  imageHover,
  imageHoverOut,
  onMouseHover,
  onMouseHoverOut,
} from "../animations/default"
import { Footer, Menu, MainContent, Header } from "../components"
import Helmet from "react-helmet"

gsap.registerPlugin(CSSPlugin)

const Layout = ({ children }) => {
  const isBrowser = typeof window !== "undefined" && window

  useEffect(() => {
    let tl = new TimelineLite()

    TweenMax.to("html", 1, { css: { display: "block" }, delay: 0.5 })

    tl.from(".header, .main-content, .hero__title span", 1, {
      opacity: 0,
      ease: Power4.easeOut,
      delay: 0.5,
      stagger: {
        amount: 1,
      },
    })
      .from(".cursor", 0.5, { opacity: 0, ease: Power4.easeOut }, "+=.1")
      .from(".footer", 0.5, { opacity: 0, ease: Power4.easeOut }, "+=.2")

    if (isBrowser) {
      window.addEventListener("mousemove", cursor)
    }
  }, [])

  function cursor(e) {
    const hoverables = document.querySelectorAll(".hoverable")
    hoverables.forEach(hoverable => {
      hoverable.addEventListener("mouseenter", onMouseHover)
      hoverable.addEventListener("mouseleave", onMouseHoverOut)
    })

    const hoverableImages = document.querySelectorAll(".hoverable--image")
    hoverableImages.forEach(hoverableImage => {
      hoverableImage.addEventListener("mouseenter", imageHover)
      hoverableImage.addEventListener("mouseleave", imageHoverOut)
    })

    TweenMax.to(".cursor__ball--big", 0.4, {
      x: e.pageX - 25,
      y: e.pageY - 25,
    })

    TweenMax.to(".cursor__ball--small", 0.1, {
      x: e.pageX - 5,
      y: e.pageY - 7,
    })
  }

  return (
    <SiteContextProvider>
      <Theme>
        <Helmet>
          <link ref="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        </Helmet>
        <div className="app">
          <GlobalStyle />
          <div className="cursor">
            <div className="cursor__ball cursor__ball--big ">
              <svg height="60" width="60">
                <circle cx="30" cy="30" r="25" strokeWidth="2"></circle>
              </svg>
            </div>

            <div className="cursor__ball cursor__ball--small">
              <svg height="20" width="20">
                <circle cx="10" cy="10" r="5" strokeWidth="0"></circle>
              </svg>
            </div>
          </div>
          <Menu />
          <Header className="header" />
          <MainContent className="main-content" lang="it">
            {children}
          </MainContent>
          <Footer className="footer" />
        </div>
      </Theme>
    </SiteContextProvider>
  )
}

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
    line-height: 1.15;
    line-height: 1.4;
    color: #000;
    background-color: #fff;
    font-family: 'Inter', sans-serif;
    cursor: initial;
    display: none;

    @media (min-width: 1024px) {
      cursor: none;
    }


    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;

    @media (min-width: 320px) {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }

    @media (min-width: 1000px) {
      font-size: 22px;
    }
  }

  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }


  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
      background: transparent;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    background-color: ${({ theme }) => theme.colors.main};
  }

  h1 {
    line-height: normal;
    font-weight: normal;

    @media (min-width: 768px) {
      font-size: 3em;
    }
  }

  h2 {
    font-size: 1.8em;
    font-weight: normal;

    @media (min-width: 768px) {
      font-size: 1.89em;
    }

  }
  
  h3 {
    font-size: 1.4em;
    font-weight: normal;

    @media (min-width: 768px) {
      font-size: 1.3em;
    }

  }

  h4 {
    font-size: 1.125em;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.2em;
    }
  }

  p, li {
    font-size: 18px;
    font-weight: 300;
    
    @media (min-width: 768px) {
      font-size: 1em;
      line-height: 40px;
    }
  }

  .subtitle {
    font-size: inherit;

    @media (min-width: 768px) {
      font-size: 1.4em;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .wrapper {
    width: 90%;
    margin: ${props => props.theme.space.large} auto;

    @media (min-width: 1024px) {
      width: 85%;
    }
  }

  .arrow-icon {
    width: 33px;

    img {
      width: 100%;
    }
  }

  .cursor {
    pointer-events: none;
    
    &__ball {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99999999999999;
      backface-visibility: hidden;
      opacity: 0;

      @media (min-width: 768px) {
        opacity: 1;
      }

      &--big circle {
        stroke: #f7f8fa;
        fill: none;
      mix-blend-mode: difference;
      transition: transform 1s ease;
      }

      &--small circle {
        fill: #EC2026;
      }
    }
  }

  #iubenda-cs-banner {
        font-size: 14px !important; /* edited (default: 15px) */
        background: none !important;
        line-height: 1.4 !important;
        position: fixed !important;
        z-index: 99999998 !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        border: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        will-change: opacity, visibility;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        -webkit-transition: opacity 1.5s ease, visibility 1.5s ease !important;
        -o-transition: opacity 1.5s ease, visibility 1.5s ease !important;
        transition: opacity 1.5s ease, visibility 1.5s ease !important;
        /* default */
    }

    #iubenda-cs-banner * {
        font-size: 100% !important;
        width: auto !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        background: none !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
        -webkit-backface-visibility: hidden !important;
        backface-visibility: hidden !important;
        font-family: -apple-system, sans-serif !important;
        text-decoration: none !important;
        color: currentColor !important;
        background-attachment: scroll !important;
        background-color: transparent !important;
        background-image: none !important;
        background-position: 0 0 !important;
        background-repeat: repeat !important;
        border: 0 !important;
        border-color: #000 !important;
        border-color: currentColor !important;
        border-radius: 0 !important;
        border-style: none !important;
        border-width: medium !important;
        bottom: auto !important;
        clear: none !important;
        clip: auto !important;
        counter-increment: none !important;
        counter-reset: none !important;
        cursor: auto !important;
        direction: inherit !important;
        float: none !important;
        font-style: inherit !important;
        font-variant: normal !important;
        font-weight: inherit !important;
        height: auto !important;
        left: auto !important;
        letter-spacing: normal !important;
        line-height: inherit !important;
        list-style-type: inherit !important;
        list-style-position: outside !important;
        list-style-image: none !important;
        margin: 0 !important;
        max-height: none !important;
        max-width: none !important;
        min-height: 0 !important;
        min-width: 0 !important;
        opacity: 1;
        outline: 0 !important;
        overflow: visible !important;
        padding: 0 !important;
        position: static !important;
        quotes: """" !important;
        right: auto !important;
        table-layout: auto !important;
        text-align: left !important;
        text-indent: 0 !important;
        text-transform: none !important;
        top: auto !important;
        unicode-bidi: normal !important;
        vertical-align: baseline !important;
        visibility: inherit !important;
        white-space: normal !important;
        width: auto !important;
        word-spacing: normal !important;
        z-index: auto !important;
        background-origin: padding-box !important;
        background-origin: padding-box !important;
        background-clip: border-box !important;
        background-size: auto !important;
        -webkit-border-image: none !important;
        -o-border-image: none !important;
        border-image: none !important;
        border-radius: 0 !important;
        border-radius: 0 !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        -webkit-column-count: auto !important;
        column-count: auto !important;
        -webkit-column-gap: normal !important;
        column-gap: normal !important;
        -webkit-column-rule: medium none #000 !important;
        column-rule: medium none #000 !important;
        -webkit-column-span: none !important;
        column-span: none !important;
        -webkit-column-width: auto !important;
        column-width: auto !important;
        -webkit-font-feature-settings: normal !important;
        font-feature-settings: normal !important;
        overflow-x: visible !important;
        overflow-y: visible !important;
        -webkit-hyphens: manual !important;
        -ms-hyphens: manual !important;
        hyphens: manual !important;
        -webkit-perspective: none !important;
        perspective: none !important;
        -webkit-perspective-origin: 50% 50% !important;
        perspective-origin: 50% 50% !important;
        text-shadow: none !important;
        -webkit-transition: all 0s ease 0s !important;
        -o-transition: all 0s ease 0s !important;
        transition: all 0s ease 0s !important;
        -webkit-transform: none !important;
        -ms-transform: none !important;
        transform: none !important;
        -webkit-transform-origin: 50% 50% !important;
        -ms-transform-origin: 50% 50% !important;
        transform-origin: 50% 50% !important;
        -webkit-transform-style: flat !important;
        transform-style: flat !important;
        word-break: normal !important;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    #iubenda-cs-banner.iubenda-cs-overlay:before {
        content: "" !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background-color: rgba(0, 0, 0, 0.5) !important;
        z-index: 1 !important;
    }

    #iubenda-cs-banner.iubenda-cs-center {
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }

    #iubenda-cs-banner.iubenda-cs-top {
        -webkit-box-align: start !important;
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }

    #iubenda-cs-banner.iubenda-cs-bottom {
        -webkit-box-align: end !important;
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }

    #iubenda-cs-banner.iubenda-cs-left {
        -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }

    #iubenda-cs-banner.iubenda-cs-right {
        -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }

    #iubenda-cs-banner.iubenda-cs-visible {
        opacity: 1 !important;
        visibility: visible !important;
    }

    #iubenda-cs-banner.iubenda-cs-visible .iubenda-cs-container {
        pointer-events: auto !important;
    }

    #iubenda-cs-banner.iubenda-cs-slidein .iubenda-cs-container {
        -webkit-transition: -webkit-transform 0.4s ease !important;
        transition: -webkit-transform 0.4s ease !important;
        -o-transition: transform 0.4s ease !important;
        transition: transform 0.4s ease !important;
        transition: transform 0.4s ease, -webkit-transform 0.4s ease !important;
    }

    #iubenda-cs-banner.iubenda-cs-slidein.iubenda-cs-top .iubenda-cs-container {
        -webkit-transform: translateY(-48px) !important;
        -ms-transform: translateY(-48px) !important;
        transform: translateY(-48px) !important;
    }

    #iubenda-cs-banner.iubenda-cs-slidein.iubenda-cs-bottom .iubenda-cs-container {
        -webkit-transform: translateY(48px) !important;
        -ms-transform: translateY(48px) !important;
        transform: translateY(48px) !important;
    }

    #iubenda-cs-banner.iubenda-cs-slidein.iubenda-cs-visible .iubenda-cs-container {
        -webkit-transform: translateY(0) !important;
        -ms-transform: translateY(0) !important;
        transform: translateY(0) !important;
    }

    #iubenda-cs-banner .iubenda-cs-container {
        position: relative !important;
        z-index: 2 !important;
    }

    #iubenda-cs-banner .iubenda-cs-content {
        position: relative !important;
        z-index: 1 !important;
        overflow: hidden !important;
        -webkit-transition: -webkit-transform 1.5s ease !important;
        transition: -webkit-transform 1.5s ease !important;
        -o-transition: transform 1.5s ease !important;
        transition: transform 1.5s ease !important;
        transition: transform 1.5s ease, -webkit-transform 1.5s ease !important;
    }

    #iubenda-cs-banner .iubenda-cs-rationale {
        position: relative !important;
    }

    #iubenda-cs-banner .iubenda-cs-close-btn {
        position: absolute !important;
        top: -14px !important;
        right: 0 !important;
        min-width: 48px !important;
        height: 48px !important;
        font-size: 12px !important;
        line-height: 0 !important;
        font-weight: lighter !important;
        cursor: pointer !important;
        text-align: center !important;
    }

    #iubenda-cs-banner .iubenda-cs-close-btn:hover {
        opacity: 0.5 !important;
    }

    #iubenda-cs-banner .iubenda-banner-content {
        font-weight: 300 !important;
        margin: 6px 16px 6px 16px !important;
    }

    #iubenda-cs-banner .iubenda-banner-content-padded {
        padding-right: 32px !important;
    }

    #iubenda-cs-banner .iubenda-banner-content a {
        cursor: pointer !important;
        color: #fff !important;
        display: inline-block !important;
        margin-left: .2rem !important;

        border-bottom: 2px solid #fff !important;
    }

    #iubenda-cs-banner .iubenda-banner-content a:hover {
        opacity: 1 !important;
    }

    @media (max-width: 639px),
    (min-width: 640px) and (max-height: 480px) {
        #iubenda-cs-banner .iubenda-banner-content {
            max-height: 35vh !important;
            overflow-y: scroll !important;
            mask-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0)), color-stop(15%, black)) !important;
            mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 15%) !important;
            -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0)), color-stop(15%, black)) !important;
            -webkit-mask-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0%, black 15%) !important;
            /* padding-bottom: 32px !important; */
        }
    }

    #iubenda-cs-banner #iubenda-cs-title {
        font-weight: bold !important;
        margin-bottom: 16px !important;
    }

    #iubenda-cs-banner .iubenda-cs-opt-group {
        margin: 16px !important;
        z-index: 1 !important;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }

    #iubenda-cs-banner .iubenda-cs-opt-group>div {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }

    @media (min-width: 640px) {
        #iubenda-cs-banner .iubenda-cs-opt-group {
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            -webkit-box-pack: justify !important;
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }

        #iubenda-cs-banner .iubenda-cs-opt-group-custom {
            margin-right: auto !important;
            -ms-flex-item-align: start !important;
            align-self: start !important;
            -webkit-box-pack: start !important;
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }

        #iubenda-cs-banner .iubenda-cs-opt-group-consent {
            margin-left: auto !important;
            -ms-flex-item-align: end !important;
            align-self: end !important;
            -webkit-box-pack: end !important;
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }

    @media (max-width: 639px) {
        #iubenda-cs-banner .iubenda-cs-opt-group {
            margin: 12px !important;
            -webkit-box-orient: vertical !important;
            -webkit-box-direction: normal !important;
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }

        #iubenda-cs-banner .iubenda-cs-opt-group-custom {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
        }

        #iubenda-cs-banner .iubenda-cs-opt-group-consent {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
        }
    }

    #iubenda-cs-banner .iubenda-cs-opt-group button {
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        padding: 8px 32px !important;
        border-radius: 64px !important;
        cursor: pointer !important;
        font-weight: bold !important;
        font-size: 100% !important;
        margin-top: 4px !important;
        margin-bottom: 4px !important;
        text-align: center !important;
    }

    #iubenda-cs-banner .iubenda-cs-opt-group button:focus {
        opacity: 0.8 !important;
    }

    #iubenda-cs-banner .iubenda-cs-opt-group button:hover {
        opacity: 0.5 !important;
    }

    @media (min-width: 640px) {
        #iubenda-cs-banner .iubenda-cs-opt-group button:not(:last-of-type) {
            margin-right: 4px !important;
        }
    }

    @media (max-width: 639px) {
        #iubenda-cs-banner .iubenda-cs-opt-group button {
            padding: 8px 24px !important;
            width: 100% !important;
            display: block;
            text-align: center !important;
            margin: 6px 3px !important;
        }
    }

    #iubenda-cs-banner.iubenda-cs-default .iubenda-cs-container {
        width: 100% !important;
    }

    @media (min-width: 992px) {
        #iubenda-cs-banner.iubenda-cs-default .iubenda-cs-rationale {
            width: 992px !important;
            margin: 32px auto !important;
        }
    }

    @media (min-width: 992px) {
        #iubenda-cs-banner.iubenda-cs-default-floating .iubenda-cs-container {
            width: 992px !important;
        }
    }

    @media (min-width: 640px) {

        #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-container,
        #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-container,
        #iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-container {
            width: 420px !important;
        }
    }

    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group,
    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group,
    #iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }

    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group>div,
    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group>div,
    #iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group>div {
        width: 100% !important;
    }

    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group button,
    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group button,
    #iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group button {
        display: block !important;
        width: 100% !important;
        text-align: center !important;
    }

    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group-custom,
    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group-custom,
    #iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group-custom {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }

    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-top):not(.iubenda-cs-center) .iubenda-cs-opt-group-consent,
    #iubenda-cs-banner.iubenda-cs-default-floating:not(.iubenda-cs-bottom):not(.iubenda-cs-center) .iubenda-cs-opt-group-consent,
    #iubenda-cs-banner.iubenda-cs-default-floating.iubenda-cs-center:not(.iubenda-cs-top):not(.iubenda-cs-bottom) .iubenda-cs-opt-group-consent {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }

    #iubenda-cs-banner.iubenda-cs-default-floating .iubenda-cs-content {
        -webkit-box-shadow: 0 0 16px rgba(0, 0, 0, 0.02) !important;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.02) !important;
        border-radius: 4px !important;
        margin: 16px !important;
        padding: 6px !important;
    }

    #iubenda-cs-banner .iubenda-cs-content {
        background-color: #000000!important; /* edited (default: #000000) */ 
        color: #FFFFFF !important;

        @media (max-width: 420px) {
          width: 315px !important;
        }
    }

    #iubenda-cs-banner .iubenda-cs-opt-group {
        color: #000000 !important;
    }

    #iubenda-cs-banner .iubenda-cs-opt-group button {
        background-color: rgba(255, 255, 255, 0.1) !important;
        color: #FFFFFF !important;
    }

    #iubenda-cs-banner .iubenda-cs-opt-group button.iubenda-cs-btn-primary {
        background-color: #0073CE !important;
        color: #FFFFFF !important;
    }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
