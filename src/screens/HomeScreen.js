import React from 'react';
import './HomeScreen.css';

import products from '../data';



const HomeScreen = () => {
    return (
        <div>
{products.map((product) => (
    product.name
))}
        </div>
    )
}

export default HomeScreen;
