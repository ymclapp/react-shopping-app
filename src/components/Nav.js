import React, { useContext } from 'react';
import './Nav.css';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer, MDBIcon
} from 'mdb-react-ui-kit';

import CartContext from '../context/cart/CartContext';

const Nav = () => {
    const { cartItems, showHideCart } = useContext(CartContext);
    return (
        <nav>
            {/* <div className='nav__left'>Store</div>
            <div className='nav__middle'>
                <div className='input__wrapper'>
                    <input type='text' />
                    <i className='fas fa-search'></i>
                </div>
            </div> */}
            <MDBNavbar expand='lg' light bgColor='white'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>
                    <div className='collapse navbar-collapse' id='navbarExample01'>
                        <MDBNavbarNav right className='mb-2 mb-lg-0'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>About</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
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
