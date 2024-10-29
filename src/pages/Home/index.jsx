import { useState, useEffect } from "react"
import { api } from "../../services/api"

import coverImg from "../../assets/capa.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"

import { Container, Content, Cover, Gallery } from "./styles"

export function Home() {
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/product`, {
        withCredentials: true,
      })

      setMeals(response.data.meals)
      setDesserts(response.data.desserts)
      setDrinks(response.data.drinks)
    }

    fetchProducts()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Cover>
          <img src={coverImg} alt="Imagen de ingredientes caindo" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Cover>

        <Gallery>
          <Section title="Refeições" data={meals} />

          <Section title="Sobremesas" data={desserts} />

          <Section title="Bebidas" data={drinks} />
        </Gallery>
      </Content>

      <Footer />
    </Container>
  )
}
