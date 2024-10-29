import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0.625rem 1rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isNew }) =>
    $isNew
      ? `1px dashed ${theme.COLORS.LIGHT_500}`
      : `1px solid ${theme.COLORS.LIGHT_600}`};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > input {
    width: fit-content;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1rem;
    line-height: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1rem;
      font-weight: 400;
      line-height: 1rem;
      font-family: "Roboto", sans-serif;
    }
  }

  > button {
    border: none;
    background: none;
    font-size: 1rem;
    display: flex;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`

export default Container
