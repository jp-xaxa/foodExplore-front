import { Routes, Route } from "react-router-dom"

import { FavoriteListProvider } from "../hooks/favoriteList"

import { Home } from "../pages/Home"
import { PreviewProduct } from "../pages/PreviewProduct"
import { MyFavorite } from "../pages/MyFavorites"

export function ClientsRoutes() {
  return (
    <FavoriteListProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview-product/:id" element={<PreviewProduct />} />
        <Route path="/my-favorites" element={<MyFavorite />} />
      </Routes>
    </FavoriteListProvider>
  )
}
