import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/category'>Category</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/login'>Admin area</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
