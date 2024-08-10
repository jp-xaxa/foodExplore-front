import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.DARK_800};
  padding: 0.875rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.3125rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  cursor: pointer;

  > svg {
    font-size: 1rem;
  }

  > p {
    display: flex;
    align-items: center;

    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
