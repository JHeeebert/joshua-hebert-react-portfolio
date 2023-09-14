import React from "react";
// Create Header component
function Header() {
    return (
        <header>
            <div className="header-container">
                <h1>Joshua Hebert</h1>
                <h2>Software Engineer</h2>
                <>Full Stack Web Developer</>
                <ul className="social-links">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jheeebert/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-linkedin" aria-hidden="true" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/jheeebert"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-github" aria-hidden="true" />
                            GitHub
                        </a>
                        <a
                            href="https://twitter.com/jheeebert"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-twitter" aria-hidden="true" />
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
// Export Header component
export default Header;
