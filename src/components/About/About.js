import React from "react";
import profileImage from "../../assets/profile.jpg";

const AboutMe = () => {
    return (
        <section className="about-me">
            <img className="profile-image" src={profileImage} alt="Profile" />
            <div className="about-me-content">
                <h2>About Me</h2>
                <p>
                    Greetings! I’m Joshua Hebert, a passionate Full Stack Web Developer
                    based in the <strong>👑Queen👑 city Charlotte, North Carolina.</strong> My journey
                    into the world of web development was sparked by an early fascination
                    with technology, which soon blossomed into a dedicated pursuit. I’ve
                    had the privilege of acquiring a diverse set of skills, including
                    proficiency in <strong>React.js, Express.js, Node.js, MySQL, GraphQL, and
                    MongoDB.</strong> With these tools in my arsenal, I craft seamless digital
                    experiences that seamlessly marry form and function.
                </p>
                <p>
                    What truly ignites my enthusiasm for this field is the power it holds
                    to drive meaningful change. From the elegant architecture of a
                    well-designed website to the intricacies of back-end functionality,
                    every facet of development represents an opportunity to innovate and
                    create impactful solutions. In my constant quest for growth, <strong>I am not
                    just a developer; I am an innovator, a problem solver, and a lifelong
                    learner.</strong> The dynamism of the tech industry fuels my drive to
                    continually evolve and adapt, ensuring that I stay ahead of the curve.
                </p>
                <div className="interests">
                    <h3>Interests</h3>
                    <ul>
                        <li>
                            <h4>🏀 Avid Sports Enthusiast:</h4> Beyond the screen, I’m an avid sports
                            enthusiast, both as a player and a fervent spectator. Sports teach
                            us about teamwork, strategy, and determination—values that
                            resonate in the tech world as well.
                        </li>
                        <li>
                        <h4>🎮 Gaming Aficionado:</h4> In the realm of gaming, I find not only
                            entertainment but also a fascinating intersection of technology
                            and storytelling. Exploring virtual worlds and tackling in-game
                            challenges nourishes my creative and strategic thinking.
                        </li>
                        <li>
                        <h4>🍴 Culinary Explorer:</h4> The world of flavors beckons, and I am
                            always eager to explore it. Whether it’s trying new recipes or
                            discovering unique eateries, the culinary realm is an adventure in
                            itself.
                        </li>
                        <li>
                        <h4> 📸 Photography Enthusiast:</h4> Capturing moments through the lens is a
                            passion that allows me to freeze memories in time. Each photograph
                            tells a story, and this art form enables me to express my
                            creativity and view the world from a different perspective.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
