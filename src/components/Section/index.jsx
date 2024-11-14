import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { FiAlertCircle } from "react-icons/fi"
import { Button } from "../Button"
import { CardProduct } from "../CardProduct"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { Container, ShadowLeft, ShadowRight, NoData } from "./styles"

export function Section({ title, data }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  function handleNewDish() {
    navigate("/new-product")
  }

  return (
    <Container>
      <h1>{title}</h1>

      {data.length > 0 ? (
        <Swiper
          grabCursor={true}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.20": {
              slidesPerView: data.length === 4 ? 3 : 4,
              spaceBetween: 160,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.length > 3 && <ShadowLeft />}

          {data.map((item, index) => (
            <SwiperSlide key={String(index)}>
              <CardProduct data={item} />
            </SwiperSlide>
          ))}

          {data.length > 3 && <ShadowRight />}
        </Swiper>
      ) : (
        <NoData>
          <FiAlertCircle />

          {user.role === "admin" ? (
            <p>Você não adicionou nenhum produto nessa categoria ainda!</p>
          ) : (
            <p>Nenhum produto disponível ainda nessa categoria!</p>
          )}

          <Button
            title="Novo produto"
            className="inline-button"
            onClick={handleNewDish}
          />
        </NoData>
      )}
    </Container>
  )
}
