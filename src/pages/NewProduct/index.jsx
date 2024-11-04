import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"

import { PiCaretLeftBold, PiUploadSimpleBold } from "react-icons/pi"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { SelectCategory } from "../../components/SelectCategory"
import { NoteItem } from "../../components/NoteItem"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"

import {
  Container,
  Content,
  Form,
  SelectImage,
  Category,
  Options,
  Ingredients,
} from "./styles"

const categoryData = [
  { name: "Refeição" },
  { name: "Sobremesa" },
  { name: "Bebida" },
]

export function NewProduct() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [mediaFile, setMediaFile] = useState(null)

  const [category, setCategory] = useState("")
  const [select, setSelect] = useState(false)

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState("")

  const [controller, setController] = useState(false)

  const navigate = useNavigate()
  const params = useParams()

  function handleBack() {
    navigate(-1)
  }

  function handleChangeMedia(event) {
    const file = event.target.files[0]
    setMediaFile(file)
  }

  function handleSelect() {
    if (select === true) {
      setSelect(false)
    } else {
      setSelect(true)
    }
  }

  function handleSelectCategory(value) {
    setCategory(value)

    if (select === true) {
      setSelect(false)
    } else {
      setSelect(true)
    }
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredients])
    setNewIngredients("")
  }

  async function handleSaveProduct() {
    if (newIngredients) {
      return alert(
        "Você deixei um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou caso seja um engano, retire o dado."
      )
    }

    const conversionValue = parseFloat(value)

    try {
      const response = await api.post(
        "/product",
        { name, description, category, value: conversionValue, ingredients },
        {
          withCredentials: true,
        }
      )

      const id = response.data.product_id

      if (mediaFile && id) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("media", mediaFile)

        await api.patch(`/product/media/${id}`, fileUploadForm, {
          withCredentials: true,
        })
      }

      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  async function handleUpdateProduct() {
    if (newIngredients) {
      return alert(
        "Você deixei um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou caso seja um engano, retire o dado."
      )
    }

    const conversionValue = parseFloat(value)

    try {
      await api.put(
        `/product/${params.id}`,
        { name, description, category, value: conversionValue, ingredients },
        {
          withCredentials: true,
        }
      )

      if (mediaFile instanceof File) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("media", mediaFile)

        await api.patch(`/product/media/${params.id}`, fileUploadForm, {
          withCredentials: true,
        })
      }

      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  async function handleRemoveProduct() {
    try {
      const userConfirmation = confirm("Deseja excluir a nota mesmo?")

      if (userConfirmation) {
        await api.delete(`/product/${params.id}`, {
          withCredentials: true,
        })
        navigate("/")
      }
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível deletar essa nota.")
      }
    }
  }

  useEffect(() => {
    if (
      name &&
      description &&
      value &&
      category &&
      mediaFile &&
      ingredients.length > 0
    ) {
      setController(true)
    } else {
      setController(false)
    }
  }, [name, description, value, category, mediaFile, ingredients])

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
        setCategory(data.category)
        setMediaFile(data.media)

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

          <h1>Editar prato</h1>

          <Form>
            <div className="first-information">
              <SelectImage $test={mediaFile}>
                <span>Imagem do prato</span>

                <div>
                  <PiUploadSimpleBold />

                  {mediaFile ? (
                    <p>Trocar de imagem</p>
                  ) : (
                    <p>Selecionar imagem</p>
                  )}

                  <input id="media" type="file" onChange={handleChangeMedia} />
                </div>
              </SelectImage>

              <Input
                title="Nome"
                value={name}
                placeholder="Ex: Salada Ceasar"
                onChange={(e) => setName(e.target.value)}
              />

              <Category>
                <label>Categoria</label>

                <div>
                  <SelectCategory
                    onClick={handleSelect}
                    select={select}
                    display={category}
                  />

                  {select && (
                    <Options>
                      {categoryData &&
                        categoryData.map((item, index) => (
                          <button
                            key={String(index)}
                            onClick={() => handleSelectCategory(item.name)}
                          >
                            {item.name}
                          </button>
                        ))}
                    </Options>
                  )}
                </div>
              </Category>
            </div>

            <div className="second-information">
              <Ingredients>
                <label>Ingredientes</label>

                <div>
                  {ingredients.map((ingredient, index) => (
                    <NoteItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredients(ingredient)}
                    />
                  ))}

                  <NoteItem
                    $isNew
                    placeholder="Adicionar"
                    value={newIngredients}
                    onChange={(e) => setNewIngredients(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </div>
              </Ingredients>

              <Input
                title="Preço"
                type="number"
                value={value}
                placeholder="R$ 00,00"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div>
              <TextArea
                title="Descrição"
                value={description}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div
              style={{ display: "flex", justifyContent: "end", gap: "2rem" }}
            >
              <Button
                title="Excluir"
                className="inline-button delete"
                disabled={!controller}
                onClick={handleRemoveProduct}
              />

              <Button
                title="Salvar Alterações"
                className="inline-button"
                disabled={!controller}
                onClick={handleUpdateProduct}
              />
            </div>
          </Form>
        </Content>
      ) : (
        <Content>
          <ButtonText
            title="voltar"
            icon={PiCaretLeftBold}
            onClick={handleBack}
          />

          <h1>Adicionar prato</h1>

          <Form>
            <div className="first-information">
              <SelectImage $test={mediaFile}>
                <span>Imagem do prato</span>

                <div>
                  <PiUploadSimpleBold />

                  {mediaFile ? (
                    <p>Trocar de imagem</p>
                  ) : (
                    <p>Selecionar imagem</p>
                  )}

                  <input id="media" type="file" onChange={handleChangeMedia} />
                </div>
              </SelectImage>

              <Input
                title="Nome"
                placeholder="Ex: Salada Ceasar"
                onChange={(e) => setName(e.target.value)}
              />

              <Category>
                <label>Categoria</label>

                <div>
                  <SelectCategory
                    onClick={handleSelect}
                    select={select}
                    display={category}
                  />

                  {select && (
                    <Options>
                      {categoryData &&
                        categoryData.map((item, index) => (
                          <button
                            key={String(index)}
                            onClick={() => handleSelectCategory(item.name)}
                          >
                            {item.name}
                          </button>
                        ))}
                    </Options>
                  )}
                </div>
              </Category>
            </div>

            <div className="second-information">
              <Ingredients>
                <label>Ingredientes</label>

                <div>
                  {ingredients.map((ingredient, index) => (
                    <NoteItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredients(ingredient)}
                    />
                  ))}

                  <NoteItem
                    $isNew
                    placeholder="Adicionar"
                    value={newIngredients}
                    onChange={(e) => setNewIngredients(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </div>
              </Ingredients>

              <Input
                title="Preço"
                type="number"
                placeholder="R$ 00,00"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div>
              <TextArea
                title="Descrição"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                title="Salvar Prato"
                className="inline-button"
                disabled={!controller}
                onClick={handleSaveProduct}
              />
            </div>
          </Form>
        </Content>
      )}

      <Footer />
    </Container>
  )
}
