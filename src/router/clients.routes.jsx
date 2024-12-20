import { Routes, Route } from "react-router-dom"

import { FavoriteListProvider } from "../hooks/favoriteList"
import { OrdersProvider } from "../hooks/orders"

import { Home } from "../pages/Home"
import { PreviewProduct } from "../pages/PreviewProduct"
import { MyFavorite } from "../pages/MyFavorites"
import { Orders } from "../pages/Orders"
import { OrdersHistory } from "../pages/OrdersHistory"

export function ClientsRoutes() {
  return (
    <FavoriteListProvider>
      <OrdersProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview-product/:id" element={<PreviewProduct />} />
          <Route path="/my-favorites" element={<MyFavorite />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders-history" element={<OrdersHistory />} />
        </Routes>
      </OrdersProvider>
    </FavoriteListProvider>
  )
}
