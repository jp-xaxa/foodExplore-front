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
    margin-bottom: 2rem;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  border-radius: 0.625rem;

  > thead {
    border-radius: 0.625rem;
    > tr th {
      width: 9.375rem;
      padding: 1.25rem 1.5rem;

      text-align: start;
      outline: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.375rem;
      }

      &:first-child {
        border-top-left-radius: 0.625rem;
      }

      &:last-child {
        border-top-right-radius: 0.625rem;
      }

      &:nth-child(3) {
        display: flex;
        flex: 1;
        width: auto;
      }
    }
  }

  > tbody {
    > tr td {
      width: 9.375rem;
      padding: 1.25rem 1.5rem;

      text-align: start;
      outline: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 0.875rem;
        line-height: 1.375rem;

        > span {
          font-size: 0.875rem;
        }
      }

      &:nth-child(3) {
        display: flex;
        flex: 1;
        width: auto;
      }

      &.status {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.5rem;

        > div {
          width: 8px;
          height: 8px;
          border-radius: 50%;

          &.Pendente {
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};
          }

          &.Entregue {
            background-color: ${({ theme }) => theme.COLORS.TINTS_CARROT_100};
          }

          &.Preparando {
            background-color: ${({ theme }) => theme.COLORS.TINTS_MINT_100};
          }
        }
      }
    }
  }
`

export const NoData = styled.div`
  width: 100%;
  height: 100%;

  display: flex !important;
  flex-direction: center;
  justify-content: center;

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    > svg {
      font-size: 3.125rem;
    }
  }
`
