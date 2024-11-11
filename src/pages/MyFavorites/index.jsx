import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useFavoriteList } from "../../hooks/favoriteList"

import { PiCaretLeftBold } from "react-icons/pi"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"

import { Container, Content, Product } from "./styles"
import { useEffect, useState } from "react"

export function MyFavorite() {
  const { favoriteList, handleRemoveProductToFavoriteList } = useFavoriteList()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {}, [])

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText
          title="voltar"
          icon={PiCaretLeftBold}
          onClick={handleBack}
        />

        <h1>Meus favoritos</h1>

        <div>
          {favoriteList.map((product) => (
            <Product key={String(product.di)}>
              <img
                src={`${api.defaults.baseURL}/files/${product.media}`}
                alt="Mídia do produto"
              />

              <div>
                <h1>{product.name}</h1>

                <button
                  onClick={() => handleRemoveProductToFavoriteList(product.id)}
                >
                  Remover dos Favoritos
                </button>
              </div>
            </Product>
          ))}
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
