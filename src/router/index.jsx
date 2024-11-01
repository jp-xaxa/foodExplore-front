import { BrowserRouter } from "react-router-dom"
import { useEffect } from "react"
import { api } from "../services/api"

import { useAuth } from "../hooks/auth"
import { USER_ROLE } from "../utils/roles"

import { AuthRoutes } from "./auth.routes"
import { AdminRoutes } from "./admin.routes"
import { ClientsRoutes } from "./clients.routes"

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get("/users/validated", { withCredentials: true }).catch((error) => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CLIENT:
        return <ClientsRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  )
}
