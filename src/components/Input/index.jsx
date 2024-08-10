import { useEffect, useState } from "react"

import { TbEye, TbEyeClosed } from "react-icons/tb"

import { Container } from "./styles"

export function Input({ title, ...rest }) {
  const [controlViewPassword, setControlViewPassword] = useState(false)
  const [controlTypeInput, setControlTypeInput] = useState(rest.type)

  function handleControlPassword() {
    setControlViewPassword(!controlViewPassword)
  }

  useEffect(() => {
    function fetchType() {
      if (controlViewPassword && rest.type === "password") {
        setControlTypeInput("text")
      } else {
        setControlTypeInput(rest.type)
      }
    }

    fetchType()
  }, [controlViewPassword])

  return (
    <Container>
      <label>{title}</label>

      <div>
        <input {...rest} type={controlTypeInput} />

        {rest.type === "password" &&
          (controlViewPassword ? (
            <TbEyeClosed
              className="controlPassword"
              onClick={handleControlPassword}
            />
          ) : (
            <TbEye
              className="controlPassword"
              onClick={handleControlPassword}
            />
          ))}
      </div>
    </Container>
  )
}
