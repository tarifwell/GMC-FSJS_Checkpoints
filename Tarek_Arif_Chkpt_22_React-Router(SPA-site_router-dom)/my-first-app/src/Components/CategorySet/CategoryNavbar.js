import React from 'react';
import {Link} from 'react-router-dom';

const CategoryNavbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/category/shoes'>Shoes</Link></li>
                <li><Link to='/category/boots'>Boots</Link></li>
                <li><Link to='/category/footwear'>Footwear</Link></li>
            </ul>
        </div>
    )
}

export default CategoryNavbar;
