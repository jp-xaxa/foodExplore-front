import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label,
  input {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;
  }

  > div {
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 0.875rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.3125rem;

    > input {
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1rem;
      font-weight: 400;
      line-height: 1rem;
      word-wrap: break-word;

      background: transparent;
      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    > input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      cursor: pointer;
      font-size: 1rem;
    }
  }
`
