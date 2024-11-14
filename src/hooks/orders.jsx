import React, { createContext, useContext, useState, useEffect } from "react"

export const OrdersContext = createContext({})

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([])

  function handleAddOrders(item, quantity) {
    setOrders((prevOrders) => {
      const updatedOrders = (() => {
        const existingOrder = prevOrders.find((order) => order.id === item.id)

        if (existingOrder) {
          return prevOrders.map((order) =>
            order.id === item.id
              ? { ...order, quantity: order.quantity + quantity }
              : order
          )
        } else {
          return [...prevOrders, { ...item, quantity }]
        }
      })()

      localStorage.setItem(
        "@foodExplorer:orders",
        JSON.stringify(updatedOrders)
      )

      return updatedOrders
    })

    alert("Item adicionado ao pedido")
  }

  function handleRemoveOrders(itemId) {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== itemId))
  }

  function clear() {
    localStorage.removeItem("@foodexplorer:orders")

    setOrders([])
  }

  useEffect(() => {
    const storedOrders = localStorage.getItem("@foodExplorer:orders")
    // Verifica se há dados no localStorage e se não, define como um array vazio
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders))
    } else {
      setOrders([])
    }
  }, [])

  return (
    <OrdersContext.Provider
      value={{ orders, handleAddOrders, handleRemoveOrders, clear }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

function useOrders() {
  const context = useContext(OrdersContext)
  if (!context) {
    throw new Error("useOrders deve ser usado dentro de um OrdersProvider")
  }
  return context
}

export { OrdersProvider, useOrders }
