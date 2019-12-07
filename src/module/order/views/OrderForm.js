import React, { useContext } from "react"
import OrderContext from "../OrderContext"
import uuid from "uuid"
import { Input, Button, Textarea } from "../../../components"

const OrderForm = () => {
  const { orders, setOrders, order, setOrder, defaultOrder } = useContext(
    OrderContext
  )

  const submitOrder = () => {
    order.id
      ? setOrders(orders.map(item => (item.id === order.id ? order : item)))
      : setOrders([...orders, { id: uuid.v4(), ...order }])
    setOrder(defaultOrder)
  }

  const onFieldChange = (key, value) => {
    setOrder({
      ...order,
      [key]: value
    })
  }

  const checkRequired = () => !order.name || !order.drink || !order.price

  return (
    <div>
      <h1>Create Order</h1>
      <form className="orderForm">
        <Input
          placeholder="Pleas Write Name..."
          type="text"
          value={order.name}
          fieldName="name"
          onFieldChange={onFieldChange}
          required
        />
        <Input
          placeholder="Pleas Write Drink..."
          type="text"
          value={order.drink}
          fieldName="drink"
          onFieldChange={onFieldChange}
          required
        />
        <Input
          placeholder="Pleas Write Price..."
          type="number"
          value={order.price}
          fieldName="price"
          onFieldChange={onFieldChange}
          required
        />
        <Textarea
          placeholder="Pleas Write Notes..."
          value={order.notes}
          fieldName="notes"
          onFieldChange={onFieldChange}
        />
        <Button
          isDisabled={checkRequired()}
          name={"submit"}
          title={order.id ? `EDIT` : `ADD`}
          onButtonClick={submitOrder}
          className={"btn btn-primary"}
        />
      </form>
    </div>
  )
}

export default OrderForm
