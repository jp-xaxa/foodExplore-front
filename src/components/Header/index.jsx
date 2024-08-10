import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import logo from "../../assets/logo.svg"
import iconReceipt from "../../assets/icons/Receipt.svg"
import { FiSearch } from "react-icons/fi"
import { LuLogOut } from "react-icons/lu"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"

import { Container, Logo, Search } from "./styles"

export function Header() {
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleNewDish() {
    navigate("/new-product")
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />

        <div>
          <h1>food explorer</h1>

          {user.role === "admin" && <p>admin</p>}
        </div>
      </Logo>

      <Search>
        <FiSearch />
        <input placeholder="Buscar por pratos ou ingredientes" />
      </Search>

      {user.role === "admin" ? (
        <Button
          title="Novo prato"
          className="inline-button"
          onClick={handleNewDish}
        />
      ) : (
        <Button
          title="Pedidos (0)"
          icon={iconReceipt}
          className="inline-button"
        />
      )}

      <ButtonText icon={LuLogOut} onClick={handleSignOut} />
    </Container>
  )
}
