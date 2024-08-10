import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { PreviewProduct } from "../pages/PreviewProduct"
import { NewProduct } from "../pages/NewProduct"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-product" element={<NewProduct />} />
      <Route path="/to-edit-product/:id" element={<NewProduct />} />
      <Route path="/preview-product/:id" element={<PreviewProduct />} />
    </Routes>
  )
}
