// About Me Component
import React from "react";
// Import Images
import profileImage from "../../assets/profile.jpg";
// Import CSS
import "./About.css";

// Import SVG Icons
import SportsIcon from "../../assets/sportsIcon.svg";
import CrownIcon from "../../assets/crownIcon.svg";
import GamingIcon from "../../assets/gamingIcon.svg";
import FoodIcon from "../../assets/foodIcon.svg";
import PhotoIcon from "../../assets/photoIcon.svg";
import HTMLIcon from "../../assets/htmlIcon.svg";
import CSSIcon from "../../assets/cssIcon.svg";
import JSIcon from "../../assets/javaScriptIcon.svg";
import ReactIcon from "../../assets/reactIcon.svg";
import ExpressIcon from "../../assets/expressIcon.svg";
import NodeIcon from "../../assets/nodeJsIcon.svg";
import MySQLIcon from "../../assets/mySqlIcon.svg";
import GraphQLIcon from "../../assets/graphqlIcon.svg";
import MongoDBIcon from "../../assets/mongoDbIcon.svg";

// About Me Component
const AboutMe = () => {
    return (
        <section className="about-me">
            <img className="profile-image" src={profileImage} alt="Profile" />
            <div className="about-me-content">
                <h2>About Me</h2>
                <p>
                    Greetings! I’m Joshua Hebert, a passionate Full Stack Web Developer
                    based in the{" "}
                    <strong>
                        {" "}
                        <img
                            src={CrownIcon}
                            alt="Basketball"
                            style={{ width: "30px", height: "30px" }}
                        />{" "}
                        city Charlotte, North Carolina.
                    </strong>{" "}
                    My journey into the world of web development was sparked by an early
                    fascination with technology, which soon blossomed into a dedicated
                    pursuit. I’ve had the privilege of acquiring a diverse set of skills,
                    including proficiency in{" "}<br />
                    
                    <img className="about-me-icons"
                        src={HTMLIcon}
                        alt="HTML"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={CSSIcon}
                        alt="CSS"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={JSIcon}
                        alt="JavaScript"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={ReactIcon}
                        alt="React"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={ExpressIcon}
                        alt="Express"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={NodeIcon}
                        alt="Node.js"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={MySQLIcon}
                        alt="MySQL"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={GraphQLIcon}
                        alt="GraphQL"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <img className="about-me-icons"
                        src={MongoDBIcon}
                        alt="MongoDB"
                        style={{ width: "60px", height: "60px" }}
                    />{" "} <br />

                </p>
                <p>
                With these tools in my arsenal, I craft seamless digital experiences
                    that seamlessly marry form and function. I am a firm believer in the power of technology to
                    transform lives, and I am excited to leverage my skills to create a positive impact.
                    What truly ignites my enthusiasm for this field is the power it holds
                    to drive meaningful change. From the elegant architecture of a
                    well-designed website to the intricacies of back-end functionality,
                    every facet of development represents an opportunity to innovate and
                    create impactful solutions. In my constant quest for growth,{" "}
                    </p>
                    <p>
                    <strong>
                        I am not just a developer; I am an innovator, a problem solver, and
                        a lifelong learner.
                    </strong>{" "}
                    The dynamism of the tech industry fuels my drive to continually evolve
                    and adapt, ensuring that I stay ahead of the curve.
                </p>
                <p>
                <strong>
                        I am currently seeking a role as a Full Stack Web Developer.
                    </strong>{" "}
                    </p>
                <div className="interests">
                    <h3>Interests</h3>
                    <ul>
                        <li>
                            <img
                                src={SportsIcon}
                                alt="Basketball"
                                style={{ width: "60px", height: "60px" }}
                            />
                            <h4>Avid Sports Fan:</h4> Beyond the screen, I’m an avid sports
                            fan, both as a player and a fervent spectator. Sports teach us
                            about teamwork, strategy, and determination—values that resonate
                            in the tech world as well.
                        </li>
                        <li>
                            <img
                                src={GamingIcon}
                                alt="Gaming Controller"
                                style={{ width: "60px", height: "60px" }}
                            />
                            <h4>Gaming Aficionado:</h4> In the realm of gaming, I find not
                            only entertainment but also a fascinating intersection of
                            technology and storytelling. Exploring virtual worlds and tackling
                            in-game challenges nourishes my creative and strategic thinking.
                        </li>
                        <li>
                            <img
                                src={FoodIcon}
                                alt="Food"
                                style={{ width: "60px", height: "60px" }}
                            />
                            <h4>Culinary Explorer:</h4> The world of flavors beckons, and I am
                            always eager to explore it. Whether it’s trying new recipes or
                            discovering unique eateries, the culinary realm is an adventure in
                            itself.
                        </li>
                        <li>
                            <img
                                src={PhotoIcon}
                                alt="Camera"
                                style={{ width: "60px", height: "60px" }}
                            />
                            <h4>Photography Enthusiast:</h4> Capturing moments through the
                            lens is a passion that allows me to freeze memories in time. Each
                            photograph tells a story, and this art form enables me to express
                            my creativity and view the world from a different perspective.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
