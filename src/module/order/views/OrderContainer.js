import React, { useState } from "react"
import uuid from "uuid"
import OrderContext from "../OrderContext"
import OrderList from "./OrderList"
import "../Order.css"
const OrderContainer = () => {
  const defaultData = [
    {
      id: uuid.v4(),
      name: "Brian",
      drink: "黑糖拿鐵",
      price: 50,
      notes: "半糖去冰"
    },
    {
      id: uuid.v4(),
      name: "Frank",
      drink: "珍珠紅茶",
      price: 40,
      notes: "半糖少冰"
    },
    {
      id: uuid.v4(),
      name: "Jina",
      drink: "珍珠烏龍",
      price: 40,
      notes: "全糖去冰"
    }
  ]

  const defaultOrder = { name: "", drink: "", price: 0, notes: "" }

  const [orders, setOrders] = useState(defaultData)
  const [order, setOrder] = useState(defaultOrder)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        isEdit,
        setIsEdit,
        defaultOrder,
        order,
        setOrder
      }}
    >
      <OrderList></OrderList>
    </OrderContext.Provider>
  )
}

export default OrderContainer
