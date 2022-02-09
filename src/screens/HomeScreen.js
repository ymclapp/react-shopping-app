import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeScreen.css';

import products from '../data';
import ProductCard from '../components/ProductCard';



export default function HomeScreen() {
    return (
        <>
            <div className='products__wrapper' key={products._id}>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

