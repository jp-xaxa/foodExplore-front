import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"

import { PiCaretLeftBold } from "react-icons/pi"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { ControlBuy } from "../../components/ControlBuy"
import { Tags } from "../../components/Tags"

import { Container, Content, Infos } from "./styles"

export function PreviewProduct() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [mediaFile, setMediaFile] = useState(null)
  const [ingredients, setIngredients] = useState([])

  const navigate = useNavigate()
  const params = useParams()

  function handleBack() {
    navigate(-1)
  }

  function handleEdit(id) {
    navigate(`/to-edit-product/${id}`)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/product/${params.id}`, {
          withCredentials: true,
        })
        const { data } = response

        setName(data.name)
        setDescription(data.description)
        setValue(data.value)
        setMediaFile(`${api.defaults.baseURL}/files/${data.media}`)

        const onlyIngredients = data.ingredients.map(
          (ingredient) => ingredient.name
        )
        setIngredients(onlyIngredients)
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

  return (
    <Container>
      <Header />

      {params.id ? (
        <Content>
          <ButtonText
            title="voltar"
            icon={PiCaretLeftBold}
            onClick={handleBack}
          />

          <div>
            <img src={mediaFile} alt="Imagem do produto" />

            <Infos>
              <h1>{name}</h1>

              <p>{description}</p>

              <div className="tags">
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <Tags key={String(index)} name={ingredient} />
                  ))}
              </div>

              <div className="control">
                <Button
                  title="Editar prato"
                  onClick={() => handleEdit(params.id)}
                />
              </div>
            </Infos>
          </div>
        </Content>
      ) : (
        <Content>
          <ButtonText
            title="voltar"
            icon={PiCaretLeftBold}
            onClick={handleBack}
          />

          <div>
            <img src={test} alt="Imagem do produto" />

            <Infos>
              <h1>{name}</h1>

              <p>{description}</p>

              <div className="tags">
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <Tags key={String(index)} name={ingredient} />
                  ))}
              </div>

              <div className="control">
                <ControlBuy />
                <Button title={`incluir ∙ R$ ${value}`} />
              </div>
            </Infos>
          </div>
        </Content>
      )}

      <Footer />
    </Container>
  )
}
