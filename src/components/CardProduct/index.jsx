import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import { FiHeart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { PiPencilSimpleLight } from "react-icons/pi"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import { ControlBuy } from "../ControlBuy"

import { Container, IconButton } from "./styles"

export function CardProduct({ data }) {
  const { user } = useAuth()
  const media = `${api.defaults.baseURL}/files/${data.media}`

  const navigate = useNavigate()

  function handleEdit(id) {
    navigate(`/to-edit-product/${id}`)
  }

  function handlePreview(id) {
    navigate(`/preview-product/${id}`)
  }

  async function handleAddToFavorites(id) {
    try {
      await api.post(`/favorite/${id}`, { withCredentials: true })
      alert("Adicionado produto à lista de favoritos!")
    } catch (error) {
      alert(error.message || "Ocorreu um erro ao adicionar aos favoritos")
    }
  }

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."
    }
    return description
  }

  return (
    <Container>
      <IconButton>
        {user.role === "admin" ? (
          <ButtonText
            icon={PiPencilSimpleLight}
            onClick={() => handleEdit(data.id)}
          />
        ) : (
          <ButtonText
            icon={FiHeart}
            onClick={() => handleAddToFavorites(data.id)}
          />
        )}
      </IconButton>
      <img src={media} alt="Imagem do produto" />
      <a onClick={() => handlePreview(data.id)}>{data.name} &gt;</a>
      <p>{truncateDescription(data.description, 60)}</p>
      <h1>R$ {data.value}</h1>
      {user.role === "client" && (
        <div>
          <ControlBuy />

          <Button title="incluir" />
        </div>
      )}
    </Container>
  )
}
