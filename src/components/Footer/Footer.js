import React from 'react';
// Create Footer component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="../../src/assets/images/logo.png" alt="Joshua Hebert Logo" />
                                    </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-container">
                    <div className="footer-copyright-text">
                        <p>
                            Copyright &copy; 2023 
                            <br />
                            Joshua Hebert
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
        </footer>
    );
};
// Export Footer component
export default Footer;