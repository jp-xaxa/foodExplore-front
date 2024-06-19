import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 1.5rem 7.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
  }

  > img {
    width: 1.875rem;
    height: 1.875rem;
  }
`

export const Search = styled.div`
  flex-grow: 1;
  max-width: 100%;

  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;

  padding: 0.75rem 6.25rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  border-radius: 0.3125rem;

  > svg {
    font-size: 1.25rem;
  }

  > input {
    flex: 4;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;
    border: none;

    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1rem;
      font-family: Roboto;
      font-weight: 400;
      line-height: 1rem;
      word-wrap: break-word;
    }
  }
`
