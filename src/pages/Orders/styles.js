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

  > div {
    margin-top: 1.5rem;

    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const List = styled.div`
  width: 100%;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.8rem;
    margin-bottom: 2rem;
  }
`

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.25rem;
  padding: 1rem 0;

  > img {
    width: 100px;
    height: 100px;
  }

  > div {
    > h1 {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      cursor: pointer;

      > span {
        font-family: Roboto;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.25rem;
      }
    }

    > button {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};

      border: none;
      background-color: transparent;
    }
  }
`

export const TotalValue = styled.div`
  width: 100%;
  padding: 1rem 0;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.25rem;
    line-height: 2rem;
  }
`

export const Buy = styled.div`
  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.8rem;
    margin-bottom: 2rem;
  }

  > div {
    > div {
      display: flex;
      align-items: center;
    }
  }
`

export const PaymentType = styled.button`
  min-height: calc(57px + 24px);
  padding: 0.75rem 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  flex: 1 0 0;

  background-color: ${({ theme, $active }) =>
    $active ? theme.COLORS.DARK_800 : "transparent"};

  &.right {
    border-radius: 0.5rem 0px 0px 0px;
    border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  &.left {
    border-radius: 0px 0.5rem 0px 0px;
    border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: red;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1rem;
    line-height: 1rem;
    text-transform: uppercase;
  }
`

export const PaymentInfos = styled.div`
  width: 100%;
  //max-width: 33.125rem;
  height: 22.75rem;
  padding: 2.875rem 8.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 0px 0.5rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

  > form {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`
