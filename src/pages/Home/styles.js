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

  overflow: hidden;
  position: relative;
`

export const Cover = styled.div`
  width: 100%;

  margin-top: calc(10.25rem - 1.5rem);

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  padding: 5.625rem 6.25rem;

  position: relative;

  > img {
    width: 632px;
    height: 406px;

    position: absolute;

    left: -5%;
    top: -56%;
  }

  > div {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: end;

    > h1 {
      font-size: 2.5rem;
      font-family: Poppins;
      font-weight: 500;
      line-height: 3.5rem;
      word-wrap: break-word;

      margin-bottom: 0.5rem;
    }

    > p {
      color: #e1e1e6;
      font-size: 1rem;
      font-family: Roboto;
      font-weight: 400;
      line-height: 1rem;
      word-wrap: break-word;
    }
  }
`

export const Gallery = styled.div`
  width: 100%;

  margin-top: 3.875rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  transition: transform 0.3s ease;
`
