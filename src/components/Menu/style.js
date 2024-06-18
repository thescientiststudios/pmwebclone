import styled from "styled-components"

export const StyledMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #e3f6f5;
  overflow: scroll;
  z-index: 5;

  /* parametize */
  max-height: ${props => (props.isMenuOpen ? "100%" : 0)};
  transition: max-height 0.8s cubic-bezier(0.72, -0.01, 0.25, 1);
  @media (min-width: 1024px) {
    max-height: ${props => (props.isMenuOpen ? "60vh" : 0)};
  }

  .wrapper {
    &--menu {
      margin-top: 7rem;
    }
  }

  a {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: black;
      transition: 0.4s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
        background: black;
      }
    }
  }

  .nav-columns {
    display: flex;
    flex-flow: column nowrap;

    @media (min-width: 1024px) {
      flex-flow: row nowrap;
    }

    .nav-column {
      width: 55%;

      &:last-of-type {
        width: 100%;
        margin-top: 1rem;

        @media (min-width: 1024px) {
          width: 60%;
          margin-top: 0;
          margin-left: 2.5rem;
        }
      }

      .nav-label {
        margin-bottom: 2rem;
        font-size: 0.5em;
      }

      .nav-infos {
        display: flex;
        flex-wrap: wrap;

        .nav-info {
          padding: 0;
          width: 50%;
          /* margin-right: 1rem; */

          padding-top: 2rem;

          &:nth-child(2),
          &:nth-child(4) {
            padding-left: 3.5rem;

            @media (min-width: 1024px) {
              padding-left: 0;
            }
          }

          /* &:nth-child(3),
          &:nth-child(4) {
            padding-top: 3rem;
          } */

          @media (min-width: 1024px) {
            width: 50%;
            padding-top: 0;
          }

          .nav-info-label {
            font-weight: 600;

            &--language {
              display: flex;
              align-items: center;
            }
          }

          li {
            font-weight: 300;
            font-size: 1em;
            line-height: 1.2;
            margin-bottom: 1rem;
            width: auto;

            @media (min-width: 1024px) {
              font-size: 0.6em;
            }

            a {
              text-decoration: none;
              color: #000;
            }
          }
        }
      }

      .language-icon {
        width: 20px;
        height: 20px;
        margin-left: 0.5rem;
      }

      .nav-links {
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          margin-bottom: 1rem;

          a {
            font-weight: 400;
            font-size: 1.3em;
            text-decoration: none;
            color: #000;
          }
        }
      }
    }
  }

  .nav-languages {
    display: flex;
    flex-flow: column nowrap;

    span {
      display: inline-block;
      font-size: inherit;

      &:not(:last-of-type) {
        margin-bottom: 0.8rem;
      }

      label {
        cursor: pointer;
      }

      input[type="radio"] {
        opacity: 0;
      }
    }
  }

  .nav-language--active {
    font-weight: 600;
  }
`
