import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  background-color: "#fff";

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }

  .header-logo {
    position: fixed;
    top: 7vw;
    left: 5vw;
    width: 8.556vw;
    height: 4.889vw;
    z-index: 5;
    mix-blend-mode: difference;

    @media (min-width: 1024px) {
      top: 4vw;
      left: 7.5vw;
    }
  }

  .menu-toggle {
    width: 24px;
    height: 12px;
    position: fixed;
    top: 7vw;
    right: 5vw;
    background: transparent;
    mix-blend-mode: difference;
    z-index: 5;
    cursor: pointer;

    @media (min-width: 1024px) {
      top: 4vw;
      right: 7.5vw;
    }

    &--burger {
      position: absolute;
      top: 50%;
      left: 50%;
      transition: transform 0.4s cubic-bezier(0.72, -0.01, 0.25, 1);
      transition-delay: .6s;
      transform: translate(-50%, -50%)
        scaleX(${props => (props.isMenuOpen ? 0 : 1)});
      transform-origin: 50%;
    }

    &--arrow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;

      @media (min-width: 1024px) {
        width: 60px;
        height: 60px;
      }

      #arrow {
        /* transform: scaleX(${props => (props.isMenuOpen ? 1 : 0)});*/
        transition: opacity 0.4s cubic-bezier(0.72, -0.01, 0.25, 1);
        transition-delay: .6s;
        opacity: ${props => (props.isMenuOpen ? 1 : 0)}
      }

      #Ellipse_1 {
        stroke-dasharray: 200;
        stroke-dashoffset: ${props => (props.isMenuOpen ? 0 : 200)};

        transition: stroke-dashoffset 0.4s ease-in;
        transition-delay: 0.8s;
      }
    }
  }
`
