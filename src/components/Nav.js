import React, { useContext } from 'react';
import './Nav.css';
import { MDBIcon } from 'mdb-react-ui-kit';

import CartContext from '../context/cart/CartContext';

const Nav = () => {
    const { cartItems, showHideCart } = useContext(CartContext) ;
    return (
        <nav>
            <div className='nav__left'>Store</div>
            <div className='nav__middle'>
                <div className='input__wrapper'>
                    <input type='text' />
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className='nav__right'>
                <div className='cart__icon'>
                    <MDBIcon fas icon="cart-plus" 
                    // className='fa fa-shopping-cart' 
                    aria-hidden='true' 
                    onClick={showHideCart}
                    />
                    {cartItems.length > 0 && (
                    <div className='item__count'>
                        <span>{cartItems.length}</span>
                        </div>
                        )}
                </div>
            </div>
        </nav>
    )
}
export default Nav;
