import React, { useState, useRef, useEffect } from "react"
import ArrowDown from "../../images/svg_icons/arrow-down.svg"
import ArrowUp from "../../images/svg_icons/arrow-up.svg"
import { StyledAccordion } from "./style"

const ServicesAccordion = props => {
  const [active, setActiveState] = useState(true)

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(!active)
  }

  return (
    <StyledAccordion
      className="accordion__section"
      isActive={active}
    >
      <div className="wrapper">
        <button className={`accordion`} onClick={toggleAccordion}>
          <h2 className="accordion__title">{props.title}</h2>
          <div className={`hoverable arrow-icon accordion__icon`}>
            <ArrowDown className="arrow-icon--down" />
            <ArrowUp className="arrow-icon--up" />
          </div>
        </button>
        <div className="accordion__content">
          <div ref={content}>
            <p className="accordion__text">{props.content}</p>
            <p className="accordion__categories">{props.categories}</p>
          </div>
        </div>
      </div>
    </StyledAccordion>
  )
}

export default ServicesAccordion
