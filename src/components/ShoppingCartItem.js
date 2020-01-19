// imoporting useContext hook
import React, { useContext } from "react"

// importing ContextObject
import { CartContext } from "../contexts/CartContext"

const Item = props => {
  const { removeItem } = useContext(CartContext)
  console.log(props, "item props")
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button
          onClick={() => {
            removeItem(props.id)
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  )
}

export default Item
