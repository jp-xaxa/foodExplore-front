import { PiCaretLeftBold } from "react-icons/pi"

import test from "../../assets/products/Mask group-1.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { ControlBuy } from "../../components/ControlBuy"
import { Tags } from "../../components/Tags"

import { Container, Content, Infos } from "./styles"

export function PreviewProduct() {
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText title="voltar" icon={PiCaretLeftBold} />

        <div>
          <img src={test} alt="Imagem do produto" />

          <Infos>
            <h1>Salada Ravanello</h1>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <div className="tags">
              <Tags name="alface" />
              <Tags name="cebola" />
              <Tags name="pão naan" />
              <Tags name="pepino" />
              <Tags name="rabanete" />
              <Tags name="tomate" />
            </div>

            <div className="control">
              <ControlBuy />
              <Button title="incluir ∙ R$ 25,00" />
            </div>
          </Infos>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
