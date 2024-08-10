import styled from "styled-components"

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  border: none;
  border-radius: 0.3125rem;
  padding: 0.75rem 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 0.875rem;
  font-family: "Poppins";
  font-weight: 500;
  line-height: 1.5rem;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-right: 0.5rem;
    font-size: 1.25rem;
  }

  transition: 0.4s;

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
  }

  &.inline-button {
    width: auto;
  }

  &.delete {
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_800};

    &:hover:enabled {
      background: ${({ theme }) => theme.COLORS.DARK_800};
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
