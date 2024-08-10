import { useEffect, useState, useRef } from "react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { CardProduct } from "../CardProduct"
import {
  Container,
  CarouselWrapper,
  ArrowLeft,
  ArrowRight,
  ShadowLeft,
  ShadowRight,
} from "./styles"

export function Section({ title, data }) {
  const carousel = useRef()
  const [handleWidth, setHandleWidth] = useState(0)
  const [widthCarousel, setWidthCarousel] = useState(0)
  const [widthCard, setWidthCard] = useState(0)

  const [navLeft, setNavLeft] = useState(false)
  const [navRight, setNavRight] = useState(false)

  function goToPreviousProduct() {
    setNavLeft(true)
  }

  function goToNextProduct() {
    setNavRight(true)
  }

  //console.log(handleWidth, widthCarousel, widthCard)

  //useEffect para quando clicar para ir para esquerda
  useEffect(() => {
    if (handleWidth >= -widthCard / 2) {
      setHandleWidth(0)
    } else if (handleWidth <= -widthCarousel) {
      setHandleWidth(handleWidth + widthCard / 2)
    } else {
      setHandleWidth(handleWidth + widthCard)
    }

    setNavLeft(false)
  }, [navLeft])

  //useEffect para quando clicar para ir para direita
  useEffect(() => {
    if (handleWidth <= -widthCard / 2) {
      setHandleWidth(handleWidth - widthCard / 2)
    } else if (handleWidth <= -widthCarousel) {
      setHandleWidth(-widthCarousel)
    } else {
      setHandleWidth(handleWidth - widthCard)
    }
    setNavRight(false)
  }, [navRight])

  //useEffect para pegar as informações dos elementos
  useEffect(() => {
    if (carousel.current && carousel.current.firstElementChild) {
      setWidthCarousel(
        carousel.current?.scrollWidth - carousel.current?.offsetWidth
      )

      setWidthCard(carousel.current.firstElementChild.offsetWidth)
    }
  }, [])

  return (
    <Container>
      <h1>{title}</h1>

      <ArrowLeft onClick={goToPreviousProduct} disabled={handleWidth >= 0}>
        <PiCaretLeftBold />
      </ArrowLeft>

      <ShadowLeft $toAppear={handleWidth >= 0} />

      <CarouselWrapper
        $translateX={handleWidth}
        ref={carousel}
        $widthCarousel={widthCarousel}
      >
        {data.map((item) => (
          <CardProduct key={String(item.id)} data={item} />
        ))}
      </CarouselWrapper>

      <ShadowRight $toAppear={handleWidth <= -widthCarousel} />

      <ArrowRight
        onClick={goToNextProduct}
        disabled={handleWidth <= -widthCarousel}
      >
        <PiCaretRightBold />
      </ArrowRight>
    </Container>
  )
}
