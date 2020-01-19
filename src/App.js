import React, { useState } from "react"
// importing Context Objects
import { ProductContext } from "./contexts/ProductContext"
import { CartContext } from "./contexts/CartContext"

import { Route } from "react-router-dom"
import data from "./data"

// Components
import Navigation from "./components/Navigation"
import Products from "./components/Products"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  const addItem = item => {
    // add the given item to the cart
    setCart(cart => [...cart, item])
  }

  const removeItem = remove => {
    // remove the given item from the cart
    setCart(cart => cart.filter(item => item.id !== remove))
  }

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation value={{ cart }} />

          {/* Routes */}
          <Route
            exact
            path="/"
            component={Products}
            // render={() => <Products products={products} addItem={addItem} />}
            // ^^no longer needed when passing props through ContextObject
          />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  )
}

export default App
