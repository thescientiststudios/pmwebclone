import styled from "styled-components"

export const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  overflow-y: scroll;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "h h h h"
    "h h h h"
    "b b b b"
    "c c c c";
  position: relative;
  bottom: 0;
  padding: ${props => props.theme.space.large};
  padding-bottom: 1rem;

  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text_white};
  align-items: center;
  justify-items: center;
  align-self: center;
  justify-self: center;

  @media (min-width: 1024px) {
    position: fixed;
    bottom: 0;
    min-height: 100vh;
    /* z-index: -2; */
  }

  .footer__header {
    grid-area: h;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 5rem;
    margin-bottom: calc(${props => props.theme.space.extra_large} * 2);

    text-align: center;
  }

  .footer__title {
    font-weight: 400;
  }

  .footer-subtitle {
    margin-top: ${props => props.theme.space.small};
    font-weight: 300;
  }

  .footer__blocks {
    grid-area: b;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;

    @media (min-width: 768px) {
      flex-flow: row wrap;
    }

    @media (min-width: 1280px) {
      /* width: 95%; */
      flex-flow: row nowrap;
    }

    .block {
      margin-bottom: ${props => props.theme.space.large};
      line-height: 30px;

      @media (min-width: 1024px) {
        width: calc(100% / 3);
      }

      &:not(:last-of-type) {
        margin-right: ${props => props.theme.space.large};
      }

      &--trademark {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: ${props => props.theme.space.medium};

        @media (min-width: 768px) {
          flex: 1 0 100%;
        }

        @media (min-width: 1280px) {
          width: auto;
          flex-basis: auto;
          margin-top: 0;
          justify-items: flex-start;
          align-items: flex-end;
        }
      }
    }

    .block-title {
      font-weight: 600;
      margin-bottom: ${props => props.theme.space.small};
    }

    .block-text {
      display: block;
      position: relative;
      font-weight: 300;
      line-height: 1.1;
      color: #fff;

      &:not(:last-of-type) {
        margin-bottom: 0.7rem;
      }

      &--link {
        a {
          position: relative;

          &:after {
            content: "";
            width: 0;
            height: 2px;
            display: block;
            position: absolute;
            right: 0;
            margin-top: 5px;
            background: #000;
            transition: 0.4s ease;
          }
        }

        &:hover {
          a:after {
            width: 100%;
            left: 0;
            background: #fff;
          }
        }
      }

      &--page {
        font-weight: 400;
      }

      &--address {
        line-height: 1.78;
        margin-top: -0.2rem;
      }

      &--launcher {
        opacity: 0.7;
      }
    }
  }

  .copyrights {
    grid-area: c;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    color: #888;
    font-size: 16px;
    font-weight: 100;

    padding-bottom: ${({ theme }) => theme.space.small};

    @media (min-width: 768px) {
      flex-flow: row nowrap;
    }

    @media (min-width: 1024px) {
      padding-bottom: 0;
    }

    span:first-of-type {
      display: inline-block;
      margin-bottom: 0.5rem;

      @media (min-width: 1024px) {
        margin-bottom: none;
      }
    }

    &__privacy {
      order: 1;

      @media (min-width: 768px) {
        order: 2;
      }
    }
  }
`
