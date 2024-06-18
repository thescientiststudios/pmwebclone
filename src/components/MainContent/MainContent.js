import React, { useContext } from "react"
import { SiteStateContext } from "../../context/SiteContext"
import { StyledMain } from "./style"

const MainContent = ({ children, className }) => {
  const { isMenuOpen } = useContext(SiteStateContext)
  return (
    <StyledMain isMenuOpen={isMenuOpen} className={className}>
      {children}
    </StyledMain>
  )
}

export default MainContent
