import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`
