import styled from "styled-components"

export const StyledHero = styled.div`
  backface-visibility: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: ${props => (props.excerpt ? "95%" : "auto")};
  min-height: 50vh;
  margin: ${props => (props.excerpt ? "0 auto" : "unset")};
  padding-top: 3.5rem;

  background-color: ${props => (props.darkMode ? "#000" : "#fff")};
  color: ${props => (props.darkMode ? "#fff" : "#000")};

  font-size: ${props => (props.excerpt ? "34px" : "")};
  font-weight: 300;
  text-align: ${props => (props.centeredBanner ? "center" : "left")};

  @media (min-width: 1024px) {
    padding-top: 3rem;
    min-height: 75vh;
  }

  .header__title {
    font-weight: 400;
    color: #fff;
    mix-blend-mode: difference;

    span {
      font-size: 1.8em;
      display: block;

      @media (min-width: 1024px) {
        font-size: 3em;
      }
    }
  }

  .header__title--span {
    span {
      font-size: 1.333rem;
      display: flex;
      justify-content: center;

      @media (min-width: 768px) {
        display: inline;
        font-size: 1em;
      }
    }
  }

  .header__subtitle {
    margin-top: 1.5rem;
    font-size: 1.3rem;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 1em;
    }
  }

  .header__cta {
    width: auto;
    display: flex;
    justify-content: ${props => (props.centeredBanner ? "center" : "left")};
    align-items: center;
    margin-top: 2rem;

    font-size: 24px;

    .arrow-icon {
      margin-left: 1rem;
      margin-bottom: -8px;
    }
  }
`
