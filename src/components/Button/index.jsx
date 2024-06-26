import { Container } from "./styles"

export function Button({ title, loading = false, icon: Icon, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <img src={Icon} alt="Icone" />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
