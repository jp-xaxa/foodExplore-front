import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import logo from "../../assets/logo.svg"
import iconReceipt from "../../assets/icons/Receipt.svg"
import { FiSearch } from "react-icons/fi"
import { LuLogOut } from "react-icons/lu"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"

import { Container, Logo, Search, Option } from "./styles"
import { GiConsoleController } from "react-icons/gi"

export function Header() {
  const { user, signOut } = useAuth()

  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview-product/${id}`)
  }

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleNewDish() {
    navigate("/new-product")
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/product/search?search=${search}`, {
        withCredentials: true,
      })
      setData(response.data)
    }

    fetchProduct()
  }, [search])

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />

        <div>
          <h1>food explorer</h1>

          {user.role === "admin" && <p>admin</p>}
        </div>
      </Logo>

      <Search $active={search && data.length > 0}>
        <div>
          <FiSearch />
          <input
            placeholder="Buscar por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {search && data.length > 0 && (
          <div className="options">
            {data &&
              data.map((product) => (
                <Option
                  key={String(product.id)}
                  onClick={() => handlePreview(product.id)}
                >
                  <div>
                    <h1 className="title">{product.name}</h1>

                    <span>(</span>
                    {product.ingredients &&
                      Array.isArray(product.ingredients) &&
                      product.ingredients.map((ingredient) => (
                        <span key={String(ingredient.id)}>
                          {ingredient.name}
                        </span>
                      ))}
                    <span>)</span>
                  </div>

                  <p className="category">{product.category}</p>
                </Option>
              ))}
          </div>
        )}
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
