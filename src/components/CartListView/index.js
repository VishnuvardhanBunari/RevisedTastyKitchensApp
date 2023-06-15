import {Component} from 'react'

import Payment from '../Payment'
import CartItem from '../CartItem'

import CartTotal from '../CartTotal'

import CartContext from '../../context/CartContext'

import './index.css'

class CartListView extends Component {
  state = {
    isOrderPlaced: false,
  }

  orderPlaced = () => {
    this.setState(prevState => ({isOrderPlaced: !prevState.isOrderPlaced}))
  }

  render() {
    const {isOrderPlaced} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList, removeAllCartItems} = value
          const onClickRemoveAllBtn = () => {
            removeAllCartItems()
          }
          return isOrderPlaced ? (
            <Payment />
          ) : (
            <div className="cart-content-container">
              <table className="cart-table">
                <caption>
                  <div className="cart-content">
                    <h1 className="cart-heading">My Cart</h1>
                    <button
                      type="button"
                      className="remove-all-btn"
                      onClick={onClickRemoveAllBtn}
                    >
                      Remove All
                    </button>
                  </div>
                </caption>
                <tr className="desktop-cart-header">
                  <th className="cart-header-items item-heading">Item</th>
                  <th className="cart-header-item">Quantity</th>
                  <th className="cart-header-item">price</th>
                  <th className="cart-header-item">remove</th>
                </tr>
                {cartList.map(eachItem => (
                  <CartItem
                    key={eachItem.id}
                    cartItem={eachItem}
                    value={value}
                  />
                ))}
              </table>
              <CartTotal orderPlaced={this.orderPlaced} />
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartListView
