import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.25rem;
    font-family: Roboto;
    font-weight: 700;
    line-height: 2rem;
    word-wrap: break-word;
  }
`
