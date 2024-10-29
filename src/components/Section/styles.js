import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-family: Poppins;
    font-weight: 500;
    line-height: 2.75rem;
    margin-bottom: 1.5rem;
  }

  .swiper {
    position: relative;
    z-index: 1; /* Mantém o Swiper acima das sombras */

    .swiper-button-next,
    .swiper-button-prev {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5 !important; /* Mantém os botões acima de tudo */
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .swiper-button-next {
      right: 1.25rem;
    }

    .swiper-button-prev {
      left: 1.25rem;
    }
  }

  .carousel {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    cursor: grab;
    overflow: hidden;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`

export const ShadowLeft = styled.div`
  display: ${({ $toAppear }) => ($toAppear ? "none" : "block")};

  width: 5.625rem;
  height: 105%;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
  transform: rotate(180deg);
`

export const ShadowRight = styled.div`
  display: ${({ $toAppear }) => ($toAppear ? "none" : "block")};

  width: 5.625rem;
  height: 105%;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
`

export const NoData = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  > svg {
    font-size: 3.125rem;
  }
`
