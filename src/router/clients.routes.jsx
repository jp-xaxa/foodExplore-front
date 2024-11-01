import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { PreviewProduct } from "../pages/PreviewProduct"

export function ClientsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview-product/:id" element={<PreviewProduct />} />
    </Routes>
  )
}
