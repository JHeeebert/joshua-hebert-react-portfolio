import React from "react";
import carBidz from "../../assets/carBidzPortfolioPhoto.png";
import mixMuse from "../../assets/mixMusePortfolioPhoto.png";
import weatherApp from "../../assets/weatherAppPortfolioPhoto.png";
import socialMediaApi from "../../assets/socialMediaApiPortfolioPhoto.png";
import marvelFlicks from "../../assets/marvelFlicksPortfolioPhoto.png";
import pwaTextEditor from "../../assets/textEditorPortfolioPhoto.png";

// Imports for SVG icons
import MarvelIcon from "../../assets/marvelIcon.svg";
import MixMuseIcon from "../../assets/mixMuseIcon.svg";
import CarBidzIcon from "../../assets/carBidzIcon.svg";
import WeatherAppIcon from "../../assets/weatherAppIcon.svg";
import SocialMediaApiIcon from "../../assets/socialMediaApiIcon.svg";
import PwaTextEditorIcon from "../../assets/PwaTextEditorIcon.svg";
import githubIcon2 from "../../assets/gitHubIcon2.svg";

import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>Joshua Hebert's Portfolio</h2>
            <div>
                {/* Titled images of applications with links */}
                <div>
                    <img
                        src={MixMuseIcon}
                        alt="Twitter"
                        style={{ width: "75px", height: "75px" }}
                    />
                    <a
                        href="https://mixmuse-b1c9f2067218.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="app-card"
                            src={mixMuse}
                            alt="Profile"
                            loading="lazy"
                        />
                    </a>
                    <div>
                        <a
                            href="https://github.com/c0nstantin1990/MixMuse"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubIcon2}
                                alt="GitHub"
                                style={{ width: "75px", height: "75px" }}
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src={MarvelIcon}
                        alt="Twitter"
                        style={{ width: "75px", height: "75px" }}
                    />
                    <a
                        href="https://jheeebert.github.io/marvel-flicks/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="app-card"
                            src={marvelFlicks}
                            alt="Profile"
                            loading="lazy"
                        />
                    </a>
                    <div>
                        <a
                            href="https://github.com/JHeeebert/marvel-flicks"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubIcon2}
                                alt="GitHub"
                                style={{ width: "75px", height: "75px" }}
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src={CarBidzIcon}
                        alt="Twitter"
                        style={{ width: "75px", height: "75px" }}
                    />
                    <a
                        href="https://car-bidz-d6af66a79b60.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="app-card"
                            src={carBidz}
                            alt="Profile"
                            loading="lazy"
                        />
                    </a>
                    <div>
                        <a
                            href="hhttps://github.com/c0nstantin1990/car-bidz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubIcon2}
                                alt="GitHub"
                                style={{ width: "75px", height: "75px" }}
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src={WeatherAppIcon}
                        alt="Twitter"
                        style={{ width: "75px", height: "75px" }}
                    />
                    <a
                        href="https://jheeebert.github.io/weather-app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="app-card"
                            src={weatherApp}
                            alt="Profile"
                            loading="lazy"
                        />
                    </a>
                    <div>
                        <a
                            href="https://github.com/JHeeebert/weather-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubIcon2}
                                alt="GitHub"
                                style={{ width: "75px", height: "75px" }}
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src={SocialMediaApiIcon}
                        alt="Twitter"
                        style={{ width: "75px", height: "75px" }}
                    />
                    <img
                        className="app-card"
                        src={socialMediaApi}
                        alt="Profile"
                        loading="lazy"
                    />
                    <div>
                        <a
                            href="https://github.com/JHeeebert/social-media-api"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubIcon2}
                                alt="GitHub"
                                style={{ width: "75px", height: "75px" }}
                            />{" "}
                        </a>
                    </div>
                    <div>
                        <img
                            src={PwaTextEditorIcon}
                            alt="Twitter"
                            style={{ width: "75px", height: "75px" }}
                        />
                        <a
                            href="https://jheeebert-pwa-text-editor-ddb6fb783130.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="app-card"
                                src={pwaTextEditor}
                                alt="Profile"
                                loading="lazy"
                            />
                        </a>
                        <div>
                            <a
                                href="https://github.com/JHeeebert/pwa-text-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={githubIcon2}
                                    alt="GitHub"
                                    style={{ width: "75px", height: "75px" }}
                                />{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
