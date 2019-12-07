import React, { useContext } from "react"
import OrderContext from "../OrderContext"
import { Button } from "../../../components"

const OrderItem = props => {
  const { name, drink, price, notes } = props
  const { orders, setOrders, setOrder, defaultOrder } = useContext(OrderContext)

  const removeOrder = () => {
    setOrders(orders.filter(item => item.id !== props.id))
    setOrder(defaultOrder)
  }

  const editOrder = () => {
    setOrder(props)
  }

  return (
    <li className="orderItem">
      <div>
        <div>{`${name}    ${drink}    ${price} `} </div>
        <div className="text-sm">{notes}</div>
      </div>
      <div>
        <Button
          name={"edit"}
          title={"EDIT"}
          onButtonClick={editOrder}
          className={"btn btn-warning"}
        />
        <Button
          name={"delete"}
          title={"DELETE"}
          onButtonClick={removeOrder}
          className={"btn btn-danger"}
        />
      </div>
    </li>
  )
}

export default OrderItem
