import React, { useEffect, useRef, useState } from "react"
import { TimelineLite, Power4 } from "gsap"

import { StyledHero } from "./style"

const HeroBanner = ({ title, subtitle, darkMode, centeredBanner, excerpt }) => {
  const [heroTitle, formatTitle] = useState(title)

  useEffect(() => {
    let tl = new TimelineLite()

    if (!excerpt) {
      const newTitle = title
        .substring(4, title.length - 5)
        .split("<br />")
        .map((e, i) => `<span>${e}</span>`)
        .join("")

      formatTitle(newTitle)
    }

    tl.from(".header__title span, .header__subtitle", 1.8, {
      y: 15,
      opacity: 0,
      delay: 1.2,
      ease: Power4.easeOut,
      stagger: {
        amount: 0.4,
      },
    })
  }, heroTitle)

  return (
    <StyledHero
      darkMode={darkMode}
      centeredBanner={centeredBanner}
      excerpt={excerpt}
    >
      <div className="wrapper">
        <div
          dangerouslySetInnerHTML={{ __html: heroTitle }}
          className="header__title"
        />
        {subtitle && <p className="header__subtitle">- {subtitle}</p>}
      </div>
    </StyledHero>
  )
}

export default HeroBanner
