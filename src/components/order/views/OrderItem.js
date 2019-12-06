import React from "react"

const OrderItem = ({ name, drink, price, note }) => {
  return (
    <div>
      <div>{`${name}`}</div>
      <div>{`${drink}`}</div>
      <div>{`${price}`}</div>
      <div>{`${note}`}</div>
    </div>
  )
}

export default OrderItem
