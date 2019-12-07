import React, { useContext } from "react"
import OrderContext from "../OrderContext"

const OrderItem = props => {
  const { name, drink, price, note } = props
  const { orders, setOrders, setOrder } = useContext(OrderContext)

  const removeOrder = () => {
    console.log(props)
    setOrders(orders.filter(item => item.id !== props.id))
  }

  return (
    <div>
      <div>{`${name}`}</div>
      <div>{`${drink}`}</div>
      <div>{`${price}`}</div>
      <div>{`${note}`}</div>
      <button
        onClick={e => {
          e.preventDefault()
          setOrder(props)
        }}
      >
        edit
      </button>
      <button
        onClick={e => {
          e.preventDefault()
          removeOrder()
        }}
      >
        delete
      </button>
    </div>
  )
}

export default OrderItem
