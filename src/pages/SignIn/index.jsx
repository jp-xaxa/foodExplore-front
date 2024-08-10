import { useState } from "react"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Logo, Form } from "./styles"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    event.preventDefault()

    if (!email || !password) {
      return showPopup("Preencha todos os campos! ✍️")
    }

    signIn({ email, password })
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h1>Faça Login</h1>

        <Input
          title="Email"
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
