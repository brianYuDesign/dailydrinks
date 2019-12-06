import React, { useState } from "react"
import OrderContext from "../OrderContext"
import OrderList from "./OrderList"

const OrderContainer = () => {
  const defaultData = [
    { name: "Brian", drink: "黑糖拿鐵", price: 50, note: "半糖去冰" },
    { name: "Frank", drink: "珍珠紅茶", price: 40, note: "半糖少冰" },
    { name: "Jin", drink: "珍珠烏龍", price: 40, note: "全糖去冰" }
  ]

  const [orders, setOrders] = useState(defaultData)
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      <OrderList></OrderList>
    </OrderContext.Provider>
  )
}

export default OrderContainer
