import React from 'react';
import { Link } from 'react-router-dom';

const ProductsNav = () => {
    return (
        <ul>
            <li><Link to="/products/1">NIKE Liteforce Blue Sneakers</Link></li>
            <li><Link to="/products/2">U.S. POLO ASSN. Slippers</Link></li>
            <li><Link to="/products/3">ADIDAS Adispree Running Shoes</Link></li>
            <li><Link to="/products/4">Lee Cooper Mid Sneakers</Link></li>
        </ul>
    )
}

export default ProductsNav;
