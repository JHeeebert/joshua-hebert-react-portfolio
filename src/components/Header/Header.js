import React from "react";
import "./Header.css";

// Import SVG Icons
import WavingIcon from "../../assets/wavingIcon.svg";

const Header = ({ selectedSection, handleSectionChange }) => {
    return (
        <header>
            <div className="header-container">
                <a href="/" className="header-link">
                    <p>
                        Hello
                        <img
                            src={WavingIcon}
                            alt="Waving Hand"
                            style={{ width: "60px", height: "60px" }}
                        />{" "}
                        I'm 
                    </p>
                    <h1>Joshua Hebert</h1>
                    <section class="animation">
                        <div class="first">
                            <div>Welcome to my Portfolio</div>
                        </div>
                        <div class="second">
                            <div>Take a look around</div>
                        </div>
                        <div class="third">
                            <div>I hope y'all enjoy</div>
                        </div>
                        <div class="fourth">
                            <div>Thank you for visiting</div>
                        </div>
                    </section>
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
