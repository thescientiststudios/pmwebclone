import styled from "styled-components"

export const StyledMain = styled.main`
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding-bottom: 3rem;
  overflow: hidden;

  background-color: #fff;

  transform: ${props => props.isMenuOpen && "translateY(60vh)"};
  transition: transform 0.8s cubic-bezier(0.72, -0.01, 0.25, 1);

  @media (min-width: 1024px) {
    z-index: 2;
    margin-bottom: 100vh;
  }
`
