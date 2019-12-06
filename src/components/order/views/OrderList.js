import React, { useContext } from "react"
import OrderContext from "../OrderContext"
import OrderItem from "./OrderItem"
import OrderForm from "./OrderForm"

const OrderList = () => {
  const { orders } = useContext(OrderContext)
  console.log(orders)
  return (
    <div>
      <OrderForm />
      OrderList
      {orders.map((item, index) => (
        <OrderItem {...item} key={index} />
      ))}
    </div>
  )
}

export default OrderList
