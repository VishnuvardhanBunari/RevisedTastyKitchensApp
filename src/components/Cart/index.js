import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

import CartContext from '../../context/CartContext'
import CartListView from '../CartListView'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0

          const EmptyCartView = () => (
            <div className="empty-cart-container">
              <img
                src="https://res.cloudinary.com/sravangunaganti/image/upload/v1653301939/TastyKitchens/OBJECTS_rqxtrj.png"
                alt="empty cart"
                className="empty-cart-image"
              />
              <h1 className="no-order-heading">No Order Yet!</h1>
              <p className="no-order-text">
                Your cart is empty. Add something from the menu.
              </p>
              <Link to="/">
                <button type="button" className="order-btn">
                  Order Now
                </button>
              </Link>
            </div>
          )

          return (
            <>
              <Header />
              <div className="cart-container">
                {isCartEmpty ? <EmptyCartView /> : <CartListView />}
              </div>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
