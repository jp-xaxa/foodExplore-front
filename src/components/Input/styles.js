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
    font-family: Roboto;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;
  }

  > input {
    background: transparent;

    padding: 0.875rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.3125rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
