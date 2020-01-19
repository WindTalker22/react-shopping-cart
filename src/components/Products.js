// importing useContext hook
import React, { useContext } from "react"

// importing ContextObject
import { ProductContext } from "../contexts/ProductContext.js"

// Components
import Product from "./Product"

const Products = () => {
  const { products, addItem } = useContext(ProductContext)
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  )
}

export default Products
