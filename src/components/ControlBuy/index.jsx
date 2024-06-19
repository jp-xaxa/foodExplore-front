import { FiPlus, FiMinus } from "react-icons/fi"

import { Container } from "./styles"
import { ButtonText } from "../ButtonText"

export function ControlBuy() {
  return (
    <Container>
      <ButtonText icon={FiMinus} />
      <p>01</p>
      <ButtonText icon={FiPlus} />
    </Container>
  )
}
