import { Routes, Route } from "react-router-dom"

import { FavoriteListProvider } from "../hooks/favoriteList"

import { Home } from "../pages/Home"
import { PreviewProduct } from "../pages/PreviewProduct"

export function ClientsRoutes() {
  return (
    <FavoriteListProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview-product/:id" element={<PreviewProduct />} />
      </Routes>
    </FavoriteListProvider>
  )
}
