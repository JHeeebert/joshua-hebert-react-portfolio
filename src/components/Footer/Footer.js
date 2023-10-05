import React from 'react';
import logo from '../../assets/logo.jpg';
import './Footer.css';
// Create Footer component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="./">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-container">
                    <div className="footer-copyright-text">
                        <div className="footer-active">
                            <p>
                                <h5 className='copyright'>Copyright &copy; 2023 </h5>
                                <br />
                                <h6 className='copyright'>Joshua Hebert</h6>
                                <br />
                                <a href="https://github.com/JHeeebert">GitHub</a>
                                <a href="https://www.linkedin.com/in/jheeebert/">LinkedIn</a>
                                <a href="https://medium.com/@jhebertcocktails">Medium</a>
                                <a href="https://twitter.com/jheeebert">Twitter</a>
                                <a href="https://stackoverflow.com/users/21611316/jheeebert">Stack Overflow</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
// Export Footer component
export default Footer;