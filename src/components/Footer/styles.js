import styled from "styled-components"

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 1.5rem 7.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 0.875rem;
    font-family: Roboto;
    line-height: 1.375rem;
    word-wrap: break-word;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  > h1 {
    font-size: 1.5rem;
    font-family: Roboto;
    word-wrap: break-word;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  > img {
    width: 1.875rem;
    height: 1.875rem;
  }
`
