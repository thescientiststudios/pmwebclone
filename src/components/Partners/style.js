import styled from "styled-components"

export const StyledPartners = styled.section`
  margin: 8rem 0;

  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &.wrapper {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 0.5rem;

    overflow: auto;
    white-space: nowrap;

    @media (min-width: 1024px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .partner-wrapper {
    width: 145px;
    display: inline-block;
    vertical-align: middle;

    &:not(:last-of-type) {
      margin-right: 2rem;
    }

    img {
      width: 100%;
    }
  }
`
