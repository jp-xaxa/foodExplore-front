import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { LuChevronDown } from "react-icons/lu"

import { Container } from "./styles"

export function SelectCategory({ select = false, display, ...rest }) {
  return (
    <Container {...rest}>
      {display ? <p>{display}</p> : <p>Selecione a categoria</p>}
      {select ? <FiChevronUp /> : <LuChevronDown />}
    </Container>
  )
}
