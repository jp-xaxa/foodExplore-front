import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: max-content auto max-content;
`

export const Content = styled.main`
  grid-area: content;
  width: 100%;

  padding: 0 7.625rem;
  margin: 1.5rem 0 3.125rem;

  > h1 {
    margin-top: 1.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.8rem;
  }
`

export const Form = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > div {
    width: 100%;
  }

  .first-information {
    width: 100%;

    display: grid;
    align-items: center;
    gap: 2rem;

    grid-template-columns: 1fr 2fr 1.5fr;
  }

  .second-information {
    width: 100%;
    display: grid;
    align-items: center;
    gap: 2rem;

    grid-template-columns: 3fr 1fr;
  }

  .teste {
    background: red;
    display: inline-block;

    > input[type="text"] {
      box-sizing: content-box;
      min-width: 0;
    }
  }
`

export const SelectImage = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    line-height: 1rem;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 0.5rem;

    background: ${({ theme, $test }) =>
      $test ? theme.COLORS.LIGHT_400 : theme.COLORS.DARK_800};

    padding: 0.75rem 2rem;
    border: 1px solid
      ${({ theme, $test }) =>
        $test ? theme.COLORS.LIGHT_100 : theme.COLORS.DARK_800};
    border-radius: 0.3125rem;

    color: ${({ theme, $test }) =>
      $test ? theme.COLORS.DARK_800 : theme.COLORS.LIGHT_100};
    font-size: 1rem;
    font-family: Roboto;

    cursor: pointer;

    position: relative;

    > svg {
      font-size: 1.5rem;
    }

    > p {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    > input {
      position: absolute;
      inset: 0;
      opacity: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  &:focus-within {
    > div {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`

export const Category = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;
  }

  > div {
    position: relative;
  }
`

export const Options = styled.div`
  width: 100%;
  margin-top: 0.625rem;
  background: ${({ theme }) => theme.COLORS.DARK_800};

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.3125rem;

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 2;

  > button {
    width: 100%;
    padding: 0.3125rem 0.75rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:last-child {
      border: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`

export const Ingredients = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;
  }

  > div {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-self: center;
    gap: 1rem;

    background: ${({ theme }) => theme.COLORS.DARK_800};

    padding: 0.25rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.3125rem;
  }
`
