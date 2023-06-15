/* eslint-disable react/no-unknown-property */
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }
      const onClickRemoveCartItem = () => {
        removeCartItem(id)
      }

      return (
        <>
          <tr className="mobile-cart-item" testid="cartItem">
            <td className="mobile-table-item-1">
              <img className="cart-product-image" src={imageUrl} alt={name} />
            </td>
            <td className="mobile-table-item-2">
              <div className="mobile-table-cart-items">
                <h1 className="cart-product-title">{name}</h1>
                <div className="cart-quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    testid="decrement-quantity"
                    onClick={decreaseQuantity}
                  >
                    <BsDashSquare color="#52606D" size={12} />
                  </button>
                  <p className="cart-quantity" testid="item-quantity">
                    {quantity}
                  </p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    testid="increment-quantity"
                    onClick={increaseQuantity}
                  >
                    <BsPlusSquare color="#52606D" size={12} />
                  </button>
                </div>
                <div className="total-price-remove-container">
                  <p className="cart-total-price">
                    <span>
                      <FaRupeeSign color="#616E7C" size={12} />
                    </span>{' '}
                    {cost}
                    /-
                  </p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={onClickRemoveCartItem}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </td>
          </tr>

          <tr className="cart-item" testid="cartItem">
            <td className="t-item">
              <div className="cart-product-title-brand-container">
                <img className="cart-product-image" src={imageUrl} alt={name} />
                <h1 className="cart-product-title">{name}</h1>
              </div>
            </td>
            <td className="t-item">
              <div className="cart-quantity-container">
                <button
                  type="button"
                  className="quantity-controller-button"
                  testid="decrement-quantity"
                  onClick={decreaseQuantity}
                >
                  <BsDashSquare color="#52606D" size={12} />
                </button>
                <p className="cart-quantity" testid="item-quantity">
                  {quantity}
                </p>
                <button
                  type="button"
                  className="quantity-controller-button"
                  testid="increment-quantity"
                  onClick={increaseQuantity}
                >
                  <BsPlusSquare color="#52606D" size={12} />
                </button>
              </div>
            </td>
            <td className="t-item">
              <div className="total-price-remove-container">
                <p className="cart-total-price">
                  <span>
                    <FaRupeeSign color="#616E7C" size={12} />
                  </span>{' '}
                  {cost}
                  /-
                </p>
                <button
                  className="remove-button"
                  type="button"
                  onClick={onClickRemoveCartItem}
                >
                  Remove
                </button>
              </div>
            </td>
            <td className="t-item">
              <button
                className="delete-button"
                type="button"
                onClick={onClickRemoveCartItem}
                testid="remove"
              >
                <AiFillCloseCircle color="#616E7C" size={20} />
              </button>
            </td>
          </tr>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
