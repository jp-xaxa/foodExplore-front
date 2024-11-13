import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.5rem;
  font-family: Poppins;
  font-weight: 700;
  line-height: 2rem;
  white-space: nowrap;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.link {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
  }
`
