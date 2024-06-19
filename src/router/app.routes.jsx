import { Routes, Route } from "react-router-dom"

import { PreviewProduct } from "../pages/PreviewProduct"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/preview-product" element={<PreviewProduct />} />
    </Routes>
  )
}
