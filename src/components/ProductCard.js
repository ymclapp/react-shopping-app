import React from 'react';
//import formatCurrency from 'format-currency';

import './ProductCard.css';

const ProductCard = ({product}) => {
    //let opts = { format: '%s%v', symbol: '$' };  //using format-currency had an assert error
  return <div className='productCard__wrapper'>
      <img className = 'productCard__img' src = {product.image}
      alt=''
      />
      <h4>{product.name}</h4>
      <div className='productCard__price'>
          <h5>${product.price}</h5>
          </div>
          <button className = 'ProductCard__button'>Add to Cart</button>
  </div>;
}

export default ProductCard;
