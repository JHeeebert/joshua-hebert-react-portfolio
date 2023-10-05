import React from "react";
import './Header.css'


const Header = ({ selectedSection, handleSectionChange }) => {
    return (
        <header>
            <div>
            <a href="/" className="header-link">    
            <h1>Joshua Hebert</h1>
            </a>
                <nav>
                    <button
                        onClick={() => handleSectionChange("About Me")}
                        className={selectedSection === "About Me" ? "active" : ""}
                    >
                        About Me
                    </button>
                    <button
                        onClick={() => handleSectionChange("Portfolio")}
                        className={selectedSection === "Portfolio" ? "active" : ""}
                    >
                        Portfolio
                    </button>
                    <button
                        onClick={() => handleSectionChange("Contact")}
                        className={selectedSection === "Contact" ? "active" : ""}
                    >
                        Contact
                    </button>
                    <button
                        onClick={() => handleSectionChange("Resume")}
                        className={selectedSection === "Resume" ? "active" : ""}
                    >
                        Resume
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
