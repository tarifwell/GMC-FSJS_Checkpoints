import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'


const Login = () => {
    return (
        <div>
            <Navbar />
            <p>You must log in to view the page at /admin</p>
            <button><Link to="/admin">Log in</Link></button>
        </div>
    )
}

export default Login;
