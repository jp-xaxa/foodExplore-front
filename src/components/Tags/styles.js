import styled from "styled-components"

export const Container = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.3125rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 0.875rem;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.5rem;
  word-wrap: break-word;
`
