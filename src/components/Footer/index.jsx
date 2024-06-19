import logo from "../../assets/logo-gray.svg"

import { Container, Logo } from "./styles"

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />
        <h1>food explorer</h1>
      </Logo>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
