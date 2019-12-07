import React, { useContext } from "react"
import OrderContext from "../OrderContext"
import OrderItem from "./OrderItem"
import OrderForm from "./OrderForm"

const OrderList = () => {
  const { orders } = useContext(OrderContext)
  return (
    <ul className="orderList">
      <OrderForm />
      <h1>Order List</h1>
      {orders.map(item => (
        <OrderItem {...item} key={item.id} />
      ))}
    </ul>
  )
}

export default OrderList
