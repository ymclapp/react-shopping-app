import React from 'react';

import './ProductCard.css';

const ProductCard = ({product}) => {
  return <div className='productCard__wrapper'>
      <img className = 'productCard__img' src = {product.image}
      alt=''
      />
      <h4>{product.name}</h4>
      <div className='productCard__price'>
          <h5>${product.price}</h5>
          </div>
  </div>;
}

export default ProductCard;
