import React from 'react';
import './HomeScreen.css';

import products from '../data';
import ProductCard from '../components/ProductCard';



const HomeScreen = () => {
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default HomeScreen;
