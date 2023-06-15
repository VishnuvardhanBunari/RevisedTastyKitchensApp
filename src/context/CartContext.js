import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  showMobileNavMenu: false,
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  mobileNavMenu: () => {},
  hideMobileNavMenu: () => {},
})

export default CartContext
