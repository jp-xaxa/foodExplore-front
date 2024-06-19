import logo from "../../assets/logo.svg"
import iconReceipt from "../../assets/icons/Receipt.svg"
import { FiSearch } from "react-icons/fi"
import { LuLogOut } from "react-icons/lu"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"

import { Container, Logo, Search } from "./styles"

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />
        <h1>food explorer</h1>
      </Logo>

      <Search>
        <FiSearch />
        <input placeholder="Buscar por pratos ou ingredientes" />
      </Search>

      <Button
        title="Pedidos (0)"
        icon={iconReceipt}
        className="header-button"
      />

      <ButtonText icon={LuLogOut} />
    </Container>
  )
}
