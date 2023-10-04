import React from "react";
import carBidz from "../../assets/carBidzPortfolioPhoto.png";
import mixMuse from "../../assets/mixMusePortfolioPhoto.png";
import weatherApp from "../../assets/weatherAppPortfolioPhoto.png";
import socialMediaApi from "../../assets/socialMediaApiPortfolioPhoto.png";
import marvelFlicks from "../../assets/marvelFlicksPortfolioPhoto.png";
import pwaTextEditor from "../../assets/textEditorPortfolioPhoto.png";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>Joshua Hebert's Portfolio</h2>
            <div>
                {/* Titled images of applications with links */}
                <div>
                    <h3>MixMuse</h3>
                    <img className="app-card" src={mixMuse} alt="Profile" />
                    <div>
                        <a
                            href="https://mixmuse-b1c9f2067218.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deployed App
                        </a>
                        <a
                            href="https://github.com/c0nstantin1990/MixMuse"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
                <div>
                    <h3>Marvel Flicks</h3>
                    <img className="app-card" src={marvelFlicks} alt="Profile" />
                    <div>
                        <a
                            href="https://jheeebert.github.io/marvel-flicks/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deployed App
                        </a>
                        <a
                            href="https://github.com/JHeeebert/marvel-flicks"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
                <div>
                    <h3>CarBidz</h3>
                    <img className="app-card" src={carBidz} alt="Profile" />
                    <div>
                        <a
                            href="https://car-bidz-d6af66a79b60.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deployed App
                        </a>
                        <a
                            href="hhttps://github.com/c0nstantin1990/car-bidz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
                <div>
                <h3>Weather App</h3>
                    <img className="app-card" src={weatherApp} alt="Profile" />
                    <div>
                        <a
                            href="ahttps://github.com/JHeeebert/weather-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deployed App
                        </a>
                        <a
                            href="https://jheeebert.github.io/weather-app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
                <div>
                <h3>Social Media API</h3>
                    <img className="app-card" src={socialMediaApi} alt="Profile" />
                    <div>
                        <a
                            href="https://github.com/JHeeebert/social-media-api"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                    <div>
                <h3>PWA Text Editor</h3>
                    <img className="app-card" src={pwaTextEditor} alt="Profile" />
                    <div>
                    <a
                            href="https://jheeebert-pwa-text-editor-ddb6fb783130.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deployed App
                        </a>
                        <a
                            href="https://github.com/JHeeebert/pwa-text-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
