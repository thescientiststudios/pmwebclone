import styled from "styled-components"

export const StyledCaseStudyPreview = styled.section`
  .case-study__item {
    display: block;
    cursor: none;

    &:not(:last-of-type) {
      margin-bottom: calc(${props => props.theme.space.extra_large} * 1.2);

      @media (min-width: 1024px) {
        margin-bottom: calc(${props => props.theme.space.extra_large} * 2);
      }
    }
  }

  .banner-wrapper {
    overflow: hidden;
  }

  .case-study__image {
    width: 100%;
    position: relative;
    padding-bottom: 50%;
    background-color: #eee;

    &:hover > img {
      transform: scale(1.02);
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      /* parametize */
      transition: transform 750ms ease-in-out;
    }
  }

  .case-study__content {
    margin-top: ${props => props.theme.space.small};

    @media (min-width: 1024px) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  .case-study__title  {
    flex: 1 0 35%;
    font-weight: 400;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    .arrow-icon--mobile {
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  .case-study__text-wrapper {
    @media (min-width: 1024px) {
      flex: 1 0 50%;
    }
  }

  .case-study__text {
    font-weight: 300;
    margin-top: 0.8rem;
    letter-spacing: 1px;
  }

  .call-to-action {
    display: none;
    font-weight: 500;

    @media (min-width: 1024px) {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-top: ${props => props.theme.space.large};

      &:hover {
        .arrow-icon {
          background-color: #000;
          transition: background-color
            ${({ theme }) => theme.animations.duration.quick}
            ${({ theme }) => theme.animations.timing};
          svg {
            color: #fff;
          }
        }
      }
    }

    .arrow-icon {
      width: 1.8rem;
      height: 1.8rem;
      margin-bottom: -10px;
      margin-left: ${props => props.theme.space.medium};
      border: 2px solid #000;
      border-radius: 50%;
      position: relative;

      @media (min-width: 1024px) {
        margin-bottom: 0;
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.8 cubic-bezier(0.72, -0.01, 0.25, 1);
      }
    }
  }
`
