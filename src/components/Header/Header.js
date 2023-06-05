import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>

            <div>
                <img src='111.png' style={{ width: "100%", height: "80px" }} />
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Courses</Link>
                <button className='btn btn-primary mx-3' type="">Log In </button>
                <button className='btn btn-danger' type="">Signup</button>

            </div>


        </nav>
    );
};

export default Header;