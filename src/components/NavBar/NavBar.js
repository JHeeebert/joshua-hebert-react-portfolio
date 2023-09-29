import React from 'react';
import { Link } from 'react-router-dom';
// Create NavBar component
function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">Logo</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    );
}
export default NavBar;