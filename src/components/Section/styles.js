import styled from "styled-components"

function calculateTransform(translateX, widthCarousel) {
  if (translateX >= 0) return "translateX(0px)"
  if (translateX >= widthCarousel) return `translateX(${widthCarousel}px)`
  return `translateX(${translateX}px)`
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-family: Poppins;
    font-weight: 500;
    line-height: 2.75rem;
    margin-bottom: 1.5rem;
  }
`

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 1.75rem;

  transition: transform 0.5s ease-in-out;
  transform: ${({ $translateX, $widthCarousel }) =>
    calculateTransform($translateX, $widthCarousel)};
`

export const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 1.25rem;
  z-index: 3;
  border: none;
  background: transparent;
  transition: 0.3s;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:disabled {
    display: none;
  }
`

export const ArrowRight = styled.button`
  position: absolute;
  top: 50%;
  right: 1.25rem;
  z-index: 3;
  border: none;
  background: transparent;
  transition: 0.3s;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:disabled {
    display: none;
  }
`

export const ShadowLeft = styled.div`
  display: ${({ $toAppear }) => ($toAppear ? "none" : "block")};

  width: 15.625rem;
  height: calc(100% - 2.75rem - 1.5rem);

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
  transform: rotate(180deg);
`

export const ShadowRight = styled.div`
  display: ${({ $toAppear }) => ($toAppear ? "none" : "block")};

  width: 10rem;
  height: calc(100% - 2.75rem - 1.5rem);

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
`
