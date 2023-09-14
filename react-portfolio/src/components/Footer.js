import React from 'react';
// Create Footer component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="https://i.ibb.co/z4z4z4z/logo.png" alt="logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-container">
                    <div className="footer-copyright-text">
                        <p>
                            Copyright &copy; 2021 
                            <br />
                            All rights reserved
                            <br />
                            <a href="https://github.com/JHeeebert">GitHub</a>
                            <a href="https://www.linkedin.com/in/jheeebert/">LinkedIn</a>
                        </p>
                </div>            
                </div>
                </div>
        </footer>
    );
};
// Export Footer component
export default Footer;