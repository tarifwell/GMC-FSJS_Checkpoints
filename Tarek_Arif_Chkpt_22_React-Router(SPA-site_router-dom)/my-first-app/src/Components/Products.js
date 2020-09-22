import React from 'react';
import Navbar from './Navbar';
import '../Styles.css';
import ProductsNav from './ProductsSet/ProductsNav';

const Products = () => {
    return (
        <div>
            <Navbar />
            <div className="productsStyle">
                <div className="boxListProducts">
                    <h3>Products</h3>
                    <ProductsNav />
                </div>
            </div>
        </div>
    )
}

export default Products;
