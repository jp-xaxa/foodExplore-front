import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useFavoriteList } from "../../hooks/favoriteList"

import { FiHeart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { PiPencilSimpleLight } from "react-icons/pi"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import { ControlBuy } from "../ControlBuy"

import { Container, IconButton } from "./styles"
import { useEffect, useState } from "react"

export function CardProduct({ data }) {
  const { user } = useAuth()
  const {
    favoriteList,
    handleAddProductToFavoriteList,
    handleRemoveProductToFavoriteList,
  } = useFavoriteList()
  const media = `${api.defaults.baseURL}/files/${data.media}`
  const [checkFavoriteList, setCheckFavoriteList] = useState(false)

  const navigate = useNavigate()

  function handleEdit(id) {
    navigate(`/to-edit-product/${id}`)
  }

  function handlePreview(id) {
    navigate(`/preview-product/${id}`)
  }

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."
    }
    return description
  }

  useEffect(() => {
    const isFavorite = favoriteList.some((product) => product.id === data.id)
    setCheckFavoriteList(isFavorite)
  }, [favoriteList, data.id])

  return (
    <Container>
      <IconButton>
        {user.role === "admin" ? (
          <ButtonText
            icon={PiPencilSimpleLight}
            onClick={() => handleEdit(data.id)}
          />
        ) : checkFavoriteList === true ? (
          <ButtonText
            icon={FaHeart}
            onClick={() => handleRemoveProductToFavoriteList(data.id)}
          />
        ) : (
          <ButtonText
            icon={FiHeart}
            onClick={() => handleAddProductToFavoriteList(data.id)}
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
