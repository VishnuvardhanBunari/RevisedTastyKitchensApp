import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        showMobileNavMenu,
        mobileNavMenu,
        hideMobileNavMenu,
      } = value
      const cartItemsCount = cartList.length
      const display = showMobileNavMenu ? 'showMobileNav' : 'nav-menu-mobile'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const getColor = current => {
        const {history} = props
        if (history.location.pathname === current) {
          console.log(history.location.pathname)
          return '#f7931e'
        }
        return '#334155'
      }

      const onClickMobileNavMenu = () => {
        mobileNavMenu()
        console.log(display)
      }
      const onClickMobileNavMenuHide = () => {
        hideMobileNavMenu()
        console.log(display)
      }

      const renderNavbarLogo = () => (
        <div className="navbar-logo-container">
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/sravangunaganti/image/upload/v1652874338/TastyKitchens/Vector_gvsrj4.png"
              alt="website logo"
            />
          </Link>
          <Link to="/" className="nav-link">
            <h1 className="logo-heading">Tasty Kitchens</h1>
          </Link>
        </div>
      )

      return (
        <nav className="nav-header">
          <div className="nav-content">
            <div className="navbar-mobile-container">
              {renderNavbarLogo()}
              <button type="button" className="hamburger-btn">
                <GiHamburgerMenu
                  size={25}
                  className="hamburger"
                  onClick={onClickMobileNavMenu}
                />
              </button>
            </div>
            <div className="navbar-large-container">
              {renderNavbarLogo()}
              <ul className="nav-menu-desktop">
                <Link to="/" className="nav-link">
                  <li className="nav-menu-item" style={{color: getColor('/')}}>
                    Home
                  </li>
                </Link>
                <Link to="/cart" className="nav-link">
                  <li
                    className="nav-menu-item"
                    style={{color: getColor('/cart')}}
                  >
                    Cart
                    {cartItemsCount > 0 && (
                      <span className="cart-count-badge">
                        {cartList.length}
                      </span>
                    )}
                  </li>
                </Link>
              </ul>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className={display}>
            <div className="modal-container">
              <div className="nav-link-container">
                <Link to="/" className="nav-link">
                  <p className="nav-menu-item" style={{color: getColor('/')}}>
                    Home
                  </p>
                </Link>
                <Link to="/cart" className="nav-link">
                  <p
                    className="nav-menu-item"
                    style={{color: getColor('/cart')}}
                  >
                    Cart
                    {cartItemsCount > 0 && (
                      <span className="cart-count-badge">
                        {cartList.length}
                      </span>
                    )}
                  </p>
                </Link>
                <button
                  type="button"
                  className="logout-desktop-btn"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </div>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle
                  size={18}
                  onClick={onClickMobileNavMenuHide}
                />
              </button>
            </div>
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
