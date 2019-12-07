import React, { useContext } from "react"
import OrderContext from "../OrderContext"
import uuid from "uuid"

const OrderForm = () => {
  const { orders, setOrders, order, setOrder, defaultOrder } = useContext(
    OrderContext
  )

  const submitOrder = () => {
    // validate
    order.id
      ? setOrders(orders.map(item => (item.id === order.id ? order : item)))
      : setOrders([...orders, { id: uuid.v4(), ...order }])
    setOrder(defaultOrder)
  }

  return (
    <div>
      OrderForm
      <form>
        <input
          type="text"
          value={order.name}
          onChange={e => setOrder({ ...order, name: e.target.value })}
          required
        />
        <input
          type="text"
          value={order.drink}
          onChange={e => setOrder({ ...order, drink: e.target.value })}
          required
        />
        <input
          type="number"
          value={order.price}
          onChange={e => setOrder({ ...order, price: e.target.value })}
          required
        />
        <input
          type="text"
          value={order.note}
          onChange={e => setOrder({ ...order, note: e.target.value })}
        />
        <button
          onClick={e => {
            e.preventDefault()
            submitOrder()
          }}
        >
          {order.id ? `編輯訂單` : `新增訂單`}
        </button>
      </form>
    </div>
  )
}

export default OrderForm
