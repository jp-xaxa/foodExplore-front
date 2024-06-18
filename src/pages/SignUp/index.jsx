import { Link } from "react-router-dom"

import logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Logo, Form } from "./styles"

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h1>Crie sua conta</h1>

        <Input title="Seu nome" placeholder="Exemplo: Maria da Silva" />

        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />

        <Input title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Criar conta" />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
