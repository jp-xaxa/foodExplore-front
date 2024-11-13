import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { useOrders } from "../../hooks/orders"

import { PiCaretLeftBold } from "react-icons/pi"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { ControlBuy } from "../../components/ControlBuy"
import { Tags } from "../../components/Tags"

import { Container, Content, Infos } from "./styles"

export function PreviewProduct() {
  const { user } = useAuth()
  const { handleAddOrders } = useOrders()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [mediaFile, setMediaFile] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()
  const params = useParams()

  function handleBack() {
    navigate(-1)
  }

  function handleEdit(id) {
    navigate(`/to-edit-product/${id}`)
  }

  function handleToInclude() {
    handleAddOrders(product, quantity)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/product/${params.id}`, {
          withCredentials: true,
        })
        const { data } = response

        setProduct(data)
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível carregar os dados. ⭕")
          navigate("/")
        }
      }
    }

    fetchData()
  }, [])
  console.log(product)
  return (
    <Container>
      <Header />

      {product && (
        <Content>
          <ButtonText
            title="voltar"
            icon={PiCaretLeftBold}
            onClick={handleBack}
          />

          <div>
            <img
              src={`${api.defaults.baseURL}/files/${product.media}`}
              alt="Imagem do produto"
            />

            <Infos>
              <h1>{product.name}</h1>

              <p>{product.description}</p>

              <div className="tags">
                {product.ingredients.map((ingredient) => (
                  <Tags key={String(ingredient.id)} name={ingredient.name} />
                ))}
              </div>

              {user.role === "admin" ? (
                <div className="control">
                  <Button
                    title="Editar prato"
                    onClick={() => handleEdit(product.id)}
                  />
                </div>
              ) : (
                <div className="control">
                  <ControlBuy setQuantity={setQuantity} quantity={quantity} />

                  <Button title="incluir" onClick={handleToInclude} />
                </div>
              )}
            </Infos>
          </div>
        </Content>
      )}

      <Footer />
    </Container>
  )
}
