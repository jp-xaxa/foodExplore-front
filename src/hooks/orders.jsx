import React, { createContext, useContext, useState, useEffect } from "react"

export const OrdersContext = createContext({})

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState({})

  function handleAddOrders(item) {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === item.id)

      if (existingOrder) {
        // Se o item já existe, aumenta a quantidade
        return prevOrders.map((order) =>
          order.id === item.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      } else {
        // Se o item não existe, adiciona o novo item com quantidade 1
        return [...prevOrders, { ...item, quantity: 1 }]
      }
    })
  }

  function handleRemoveOrders(itemId) {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === itemId)

      if (existingOrder && existingOrder.quantity > 1) {
        // Se o item existe e a quantidade é maior que 1, diminui a quantidade
        return prevOrders.map((order) =>
          order.id === itemId
            ? { ...order, quantity: order.quantity - 1 }
            : order
        )
      } else {
        // Se a quantidade é 1 ou o item não existe, remove o item da lista
        return prevOrders.filter((order) => order.id !== itemId)
      }
    })
  }

  return (
    <OrdersContext.Provider
      value={{ orders, handleAddOrders, handleRemoveOrders }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

function useOrders() {
  const context = useContext(OrdersContext)
  if (!context) {
    throw new Error(
      "useOrders deve ser usado dentro de um FavoriteListProvider"
    )
  }
  return context
}

export { OrdersProvider, useOrders }
