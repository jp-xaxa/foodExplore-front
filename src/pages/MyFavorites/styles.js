import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: max-content auto max-content;
`

export const Content = styled.main`
  grid-area: content;
  width: 100%;

  padding: 0 7.625rem;
  margin: 1.5rem 0 3.125rem;

  > h1 {
    margin-top: 1.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.8rem;
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3rem;
    column-gap: 2rem;
  }
`

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  > img {
    width: 100px;
    height: 100px;
  }

  > div {
    > h1 {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > button {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};

      border: none;
      background-color: transparent;
    }
  }
`
