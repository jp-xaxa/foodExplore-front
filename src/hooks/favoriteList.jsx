import React, { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const FavoriteListContext = createContext({})

function FavoriteListProvider({ children }) {
  const [favoriteList, setFavoriteList] = useState([])

  async function handleAddProductToFavoriteList(id) {
    try {
      await api.post(`/favorite/${id}`, {}, { withCredentials: true })
      alert("Adicionado produto à lista de favoritos!")
      fetchList()
    } catch (error) {
      console.error(error) // Para debug
      alert(error.message || "Ocorreu um erro ao adicionar aos favoritos")
    }
  }

  async function handleRemoveProductToFavoriteList(id) {
    try {
      await api.delete(`/favorite/${id}`, { withCredentials: true })
      alert("Retirado produto da lista de favoritos!")
      fetchList()
    } catch (error) {
      console.error(error)
      alert(error.message || "Ocorreu um erro ao remover dos favoritos")
    }
  }

  async function fetchList() {
    try {
      const response = await api.get(`/favorite/`, { withCredentials: true })
      setFavoriteList(response.data)
    } catch (error) {
      console.error(error) 
      alert(error.message || "Ocorreu um erro ao carregar os favoritos")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <FavoriteListContext.Provider
      value={{
        favoriteList,
        handleAddProductToFavoriteList,
        handleRemoveProductToFavoriteList,
      }}
    >
      {children}
    </FavoriteListContext.Provider>
  )
}

function useFavoriteList() {
  const context = useContext(FavoriteListContext)
  if (!context) {
    throw new Error(
      "useFavoriteList deve ser usado dentro de um FavoriteListProvider"
    )
  }
  return context
}

export { FavoriteListProvider, useFavoriteList }
