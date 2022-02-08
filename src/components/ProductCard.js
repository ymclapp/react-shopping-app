import React, { useContext } from 'react';
import './ProductCard.css';
//import formatCurrency from 'format-currency';
import CurrencyFormat from 'react-currency-format';


import CartContext from '../context/cart/CartContext';




const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  let opts = { prefix: '$' };  //using format-currency had an assert error - loaded CurrencyFormat and changed to prefix vs symbol. 

  return (
    <div className='productCard__wrapper'>
      <div>
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
        <div className='ProductCard__price'>
          <h5>{CurrencyFormat(`${product.price}`, opts)}</h5>
        </div>
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
