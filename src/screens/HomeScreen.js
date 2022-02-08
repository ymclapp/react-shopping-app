import React from 'react';
import './HomeScreen.css';

import products from '../data';
import ProductCard from '../components/ProductCard';



export default function HomeScreen() {
    return (
        <>
            <div className='products__wrapper'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

