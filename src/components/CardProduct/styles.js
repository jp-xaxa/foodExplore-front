import styled from "styled-components"

export const Container = styled.div`
  width: 304px;
  //min-height: 468px;

  box-sizing: border-box;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  position: relative;

  > img {
    width: 11rem;
    height: 11rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.5rem;
    font-family: Poppins;
    font-weight: 700;
    line-height: 2.125rem;
    white-space: nowrap;

    justify-content: center;
    cursor: pointer;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 0.875rem;
    line-height: 1.375rem;
    word-wrap: break-word;
    text-align: center;
    text-overflow: ellipsis;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    font-size: 2rem;
    font-family: Roboto;
    font-weight: 400;
    line-height: 3.25rem;
    word-wrap: break-word;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const IconButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`
