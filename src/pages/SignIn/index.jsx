import { Link } from "react-router-dom"

import logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Logo, Form } from "./styles"

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h1>Faça Login</h1>

        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />

        <Input title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Entrar" />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
