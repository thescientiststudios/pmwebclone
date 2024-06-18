import styled from "styled-components"

export const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    padding-bottom: 2rem;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #888;
  }

  .wrapper {
    @media (max-width: 1024px) {
      margin-bottom: 1rem;
    }
  }

  /* Style the buttons that are used to open and close the accordion panel */
  .accordion {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  /* Style the accordion content title */
  .accordion__title {
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 400;
    text-align: left;

    @media (min-width: 1024px) {
      font-size: 4em;
    }
  }

  .arrow-icon {
    width: 24px;
    height: 24px;
    position: relative;

    border: 2px solid #000;
    border-radius: 100%;
    padding: 15px;

    @media (min-width: 1024px) {
      padding: 20px;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &--down {
      opacity: ${({ isActive }) => (isActive ? 0 : 1)};

      transition: all ${({ theme }) => theme.animations.duration.normal}
        ${({ theme }) => theme.animations.timing};
      transition-delay: 0.2s;

      g {
        transform: scaleY(${({ isActive }) => (isActive ? 0 : 1)});
      }
    }

    &--up {
      opacity: ${({ isActive }) => (isActive ? 1 : 0)};
      transition: all ${({ theme }) => theme.animations.duration.normal}
        ${({ theme }) => theme.animations.timing};
      transition-delay: 0.2s;

      g {
        stroke: #000000;
        transform: scaleY(${({ isActive }) => (isActive ? 1 : 0)});
      }
    }
  }

  .accordion__icon {
    margin-left: auto;
    opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
    transition: all 2s cubic-bezier(0.72, -0.01, 0.25, 1);
  }

  /* Style to rotate icon when state is active */
  .rotate {
    opacity: 1;

    .accordion-arrow-down {
      transform: scaleX(0);
    }

    .accordion-arrow-up {
      opacity: 1;
    }
  }

  /* Style the accordion content panel. Note: hidden by default */
  .accordion__content {
    margin-top: 1rem;
    max-height: ${({ isActive }) => (!isActive && "0px")};
    min-height: ${({ isActive }) => (isActive ? "300px" : "0px")};
    background: transparent;
    background-color: #fff;
    overflow: auto;
    transition: max-height 0.6s ${({ theme }) => theme.animations.timing};
    pointer-events: none;
    font-weight: 300;
    

    @media (min-width: 1024px) {
      margin-top: -2.3rem;
    }

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  }

  /* Style the accordion content text */
  .accordion__text {
    font-size: 1.1em;
    font-weight: 300;

    @media (min-width: 1024px) {
      width: 70%;
      /* margin-top: -1rem; */
      margin-right: 2.5rem;
      margin-left: auto;

      font-size: 24px;
    }
  }

  .accordion__categories {
    margin-top: 1.5rem;
    font-size: 1.1em;
    font-weight: 300;

    @media (min-width: 1024px) {
      width: 70%;
      margin-right: 2.5rem;
      margin-left: auto;

      font-size: 1.2em;
    }
  }
`
