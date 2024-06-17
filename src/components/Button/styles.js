import styled from "styled-components"

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  border: none;
  border-radius: 0.3125rem;
  padding: 0.75rem 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 0.875rem;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.5rem;
  word-wrap: break-word;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`