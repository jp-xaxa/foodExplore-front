import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export function PreviewProduct() {
  return (
    <Container>
      <Header />
      
      <h1 style={{ color: "white" }}>Visualizar prato</h1>

      <Footer />
    </Container>
  )
}
