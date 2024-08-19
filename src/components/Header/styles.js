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
  align-items: start;
  justify-content: center;
  gap: 0.625rem;

  > img {
    width: 1.875rem;
    height: 1.875rem;
  }

  > div {
    > h1 {
      font-size: 1.5rem;
      font-family: "Roboto", serif;
      white-space: nowrap;
    }

    > p {
      color: #82f3ff;
      font-size: 0.75rem;
      font-family: "Roboto", serif;
      text-align: end;
    }
  }
`

export const Search = styled.div`
  flex-grow: 1;
  max-width: 100%;

  position: relative;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    justify-content: center;

    padding: 0.75rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    border-radius: 0.3125rem;

    border-radius: ${({ $active }) =>
      $active ? "0.3125rem 0.3125rem 0 0" : "0.3125rem"};

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
  }

  .options {
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    position: absolute;
    z-index: 3;

    display: flex;
    flex-direction: column;
    text-align: start;

    border-radius: 0 0 0.3125rem 0.3125rem;
    border-top: ${({ theme, $active }) =>
      $active ? `1px solid ${theme.COLORS.LIGHT_600}` : "none"};
  }
`

export const Option = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  border: none;

  > div {
    display: flex;
    gap: 0.3125rem;
    align-items: end;
    padding: 0.3125rem;

    .title {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  .category {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-transform: lowercase;
  }

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
    border-radius: 0.3125rem;
  }
`
