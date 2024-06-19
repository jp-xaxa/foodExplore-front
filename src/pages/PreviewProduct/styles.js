import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 1000vh;

  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: max-content auto max-content;
`
