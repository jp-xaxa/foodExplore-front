import { useEffect, useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"

import { Container } from "./styles"
import { ButtonText } from "../ButtonText"

export function ControlBuy({ setQuantity, quantity }) {
  const [display, setDisplay] = useState("")

  useEffect(() => {
    if (quantity < 10) {
      setDisplay("0" + quantity)
    } else {
      setDisplay(quantity)
    }
  }, [quantity])

  return (
    <Container>
      <ButtonText
        icon={FiMinus}
        disabled={quantity === 1}
        onClick={() => setQuantity(quantity - 1)}
      />
      <p>{display}</p>
      <ButtonText icon={FiPlus} onClick={() => setQuantity(quantity + 1)} />
    </Container>
  )
}
