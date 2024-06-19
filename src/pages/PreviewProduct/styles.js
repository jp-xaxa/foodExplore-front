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

  > div {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 3.5rem;

    margin-top: 2.625rem;

    > img {
      width: 22.5rem;
      height: 22.5rem;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;
  word-wrap: break-word;

  > h1 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3.5rem;
  }

  > p {
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.75rem;
  }

  .control {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2rem;

    margin-top: 1.5rem;
  }
`
