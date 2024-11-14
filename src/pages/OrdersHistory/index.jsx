import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { PiCaretLeftBold } from "react-icons/pi"
import { FiAlertCircle } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

import { Container, Content, Table, NoData } from "./styles"

export function OrdersHistory() {
  const [list, setList] = useState([])

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await api.get(`/orders`, { withCredentials: true })
        setList(response.data)
      } catch (error) {
        console.error(error)
        alert(error.message || "Ocorreu um erro ao carregar os favoritos")
      }
    }

    fetchList()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText
          title="voltar"
          icon={PiCaretLeftBold}
          onClick={handleBack}
        />

        <h1>Histórico de pedidos</h1>

        {list.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Status</th>

                <th>Código</th>

                <th>Detalhamento</th>

                <th>Data e Hora</th>
              </tr>
            </thead>

            <tbody>
              {list.orders.map((item) => (
                <tr key={String(item.id)}>
                  <td className={item.status}>
                    <div className="red"></div>
                    <p>{item.status}</p>
                  </td>
                  <td>
                    <p>{item.id}</p>
                  </td>
                  <td>
                    <p>
                      {item.products.map((product, index) => (
                        <span key={String(product.product_id)}>
                          {product.quantity} x {product.name}
                          {index < item.products.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </td>
                  <td>
                    <p>{item.data} às item.hora</p>
                  </td>
                </tr>
              ))}

              <tr>
                <td className="status">
                  <div className="red"></div>
                  <p>Pendente</p>
                </td>
                <td>
                  <p>00000004</p>
                </td>
                <td>
                  <p>
                    <span>1 x Salada Radish,</span>

                    <span>1 x Torradas de Parma,</span>

                    <span>1 x Chá de Canela, </span>

                    <span>1 x Suco de Maracujá</span>
                  </p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

              <tr>
                <td className="status">
                  <div className="yellow"></div>
                  <p>Preparando</p>
                </td>
                <td>
                  <p>00000003</p>
                </td>
                <td>
                  <p>
                    <span>1 x Salada Radish,</span>

                    <span>1 x Torradas de Parma,</span>

                    <span>1 x Chá de Canela, </span>

                    <span>1 x Suco de Maracujá</span>
                  </p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

              <tr>
                <td className="status">
                  <div className="green"></div>
                  <p>Entregue</p>
                </td>
                <td>
                  <p>00000002</p>
                </td>
                <td>
                  <p>
                    <span>1 x Salada Radish,</span>

                    <span>1 x Torradas de Parma,</span>

                    <span>1 x Chá de Canela, </span>

                    <span>1 x Suco de Maracujá</span>
                  </p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

              <tr>
                <td className="status">
                  <div className="green"></div>
                  <p>Entregue</p>
                </td>
                <td>
                  <p>00000001</p>
                </td>
                <td>
                  <p>
                    <span>1 x Salada Radish,</span>

                    <span>1 x Torradas de Parma,</span>

                    <span>1 x Chá de Canela, </span>

                    <span>1 x Suco de Maracujá</span>
                  </p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <NoData>
            <div>
              <FiAlertCircle />

              <p>Você ainda não fez nenhum pedido!</p>

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
