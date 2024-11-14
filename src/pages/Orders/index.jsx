import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useOrders } from "../../hooks/orders"

import { PiCaretLeftBold } from "react-icons/pi"
import { FiAlertCircle } from "react-icons/fi"
import pix from "../../assets/icons/Pix.svg"
import cartao from "../../assets/icons/CreditCard.svg"
import qrcode from "../../assets/icons/QRcode.svg"
import iconReceipt from "../../assets/icons/Receipt.svg"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import {
  Container,
  Content,
  List,
  Product,
  TotalValue,
  Buy,
  PaymentType,
  PaymentInfos,
  NoData,
} from "./styles"

export function Orders() {
  const { orders, handleRemoveOrders } = useOrders()
  const [totalValue, setTotalValue] = useState(0)
  const [paymentType, setPaymentType] = useState("pix")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    let sum = 0

    if (orders && orders.length > 0) {
      for (const order of orders) {
        sum = sum + order.value * order.quantity
      }
    }

    setTotalValue(sum)
  }, [orders])

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText
          title="voltar"
          icon={PiCaretLeftBold}
          onClick={handleBack}
        />

        {totalValue > 0 ? (
          <div>
            <List>
              <h1>Meus pedidos</h1>

              {orders.map((item) => (
                <Product key={String(item.id)}>
                  <img
                    src={`${api.defaults.baseURL}/files/${item.media}`}
                    alt="Mídia do produto"
                  />

                  <div>
                    <h1>
                      {item.quantity} x {item.name}{" "}
                      <span>R$ ${item.value}</span>
                    </h1>

                    <button onClick={() => handleRemoveOrders(item.id)}>
                      Excluir
                    </button>
                  </div>
                </Product>
              ))}

              <TotalValue>
                <p>Total: R$ {totalValue}</p>
              </TotalValue>
            </List>

            <Buy>
              <h1>Pagamento</h1>

              <div>
                <div>
                  <PaymentType
                    className="right"
                    onClick={() => setPaymentType("pix")}
                    $active={paymentType === "pix"}
                  >
                    <img src={pix} alt="Svg do icone do pix" />

                    <p>Pix</p>
                  </PaymentType>

                  <PaymentType
                    className="left"
                    onClick={() => setPaymentType("cartão de crédito")}
                    $active={paymentType === "cartão de crédito"}
                  >
                    <img src={cartao} alt="Svg de cartão de crédito" />

                    <p>Crédito</p>
                  </PaymentType>
                </div>

                {paymentType === "pix" ? (
                  <PaymentInfos>
                    <img src={qrcode} alt="Icone de um QRcode" />
                    <p>Tipo de pagamento indisponível!</p>
                  </PaymentInfos>
                ) : (
                  <PaymentInfos>
                    <form>
                      <div>
                        <Input
                          title="Número do cartão"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div>
                        <Input title="Validade" placeholder="04/25" />

                        <Input title="CVC" placeholder="000" />
                      </div>

                      <Button icon={iconReceipt} title="Finalizar pagamento" />
                    </form>
                  </PaymentInfos>
                )}
              </div>
            </Buy>
          </div>
        ) : (
          <NoData>
            <div>
              <FiAlertCircle />

              <p>Você não adicionou nenhum produto a sua lista!</p>

              <Button
                title="Voltar"
                className="inline-button"
                onClick={handleBack}
              />
            </div>
          </NoData>
        )}
      </Content>

      <Footer />
    </Container>
  )
}
