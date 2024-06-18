import styled from "styled-components"

export const StyledTeam = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    /* width: 85%; */
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .team-member {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    /* parametize */
    margin-bottom: 3.5rem;

    @media (min-width: 768px) {
      /* width: 300px; */
      width: calc(100% / 3.2);
    }

    @media (min-width: 1024px) {
      /* width: 300px; */

      &:nth-of-type(2) {
        margin: 0 1rem;
      }
    }
  }

  .team-member__image {
    /* parametize */
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    overflow: hidden;

    @media (min-width: 420px) and (max-width: 768px) {
      height: 420px;
    }

    img {
      display: block;
      /* width: 100%; */
      margin: 0 -38.885%;
      width: 118.777%;

      @media (min-width: 1024px) {
        width: 100%;
      }
    }
  }

  .team-member__title {
    margin-top: 0.8rem;
    font-size: 1.3em;
    font-weight: 300;
    align-self: flex-start;

    @media (min-width: 768px) {
      font-size: 0.9em;
      margin-top: 0;
    }

    @media (min-width: 1024px) {
      margin-top: 0.8rem;
    }
  }

  .team-member__role {
    /* parametize */
    align-self: flex-start;
    font-size: 1.1em;
    font-weight: 300;
    color: #888;

    @media (min-width: 768px) {
      font-size: 0.9em;
    }
  }
`
