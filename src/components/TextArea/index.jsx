import { Container } from "./styles"

export function TextArea({ title, ...rest }) {
  return (
    <Container>
      <label>{title}</label>

      <div>
        <textarea {...rest} />
      </div>
    </Container>
  )
}
