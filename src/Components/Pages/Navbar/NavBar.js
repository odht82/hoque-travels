import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src="" alt="" />
                </div>
                <div className="nav">
                    <ul className="nav-links">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Special Deals</li>
                        <li className="nav-link">Community</li>
                        <li className="nav-link">About Us</li>
                    </ul>
                    <ul className="unlogged-btn">
                        <li className="sign-in">Sign In</li>
                        <li className="register">Register</li>
                    </ul>
                    <ul className="logged-btn">
                        <li className="sign-out">Sign Out</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;