import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  > h1 {
    font-size: 2.625rem;
    font-family: Roboto;
    word-wrap: break-word;
  }
`

export const Form = styled.form`
  max-width: 476px;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 4rem;
  margin: 1.25rem 0;

  > h1 {
    font-size: 2rem;
    font-family: Poppins;
    font-weight: 500;
    line-height: 2.8rem;
    word-wrap: break-word;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 0.875rem;
    font-family: Poppins;
    font-weight: 500;
    line-height: 1.5rem;
    word-wrap: break-word;
  }
`
