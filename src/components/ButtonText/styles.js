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
  word-wrap: break-word;

  cursor: pointer;
`
