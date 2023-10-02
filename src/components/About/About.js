import React from "react";
import profileImage from "../../assets/profile.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <img className="profile-image" src={profileImage} alt="Profile" />
      <div className="about-me-content">
            <h2>About Me</h2>
            <p>
                Hey there! I'm Joshua Hebert, a dedicated Full Stack Web Developer
                hailing from the Queen city, Charlotte North Carolina. My tech
                toolkit includes React.js, Express.js, Node.js, MySQL, GraphQL and MongoDB, allowing me
                to craft seamless digital experiences.
            </p>
            <p>
                From a young age, I've been fascinated by the art of coding and its
                transformative potential. This curiosity led me to dive into the world
                of Full Stack Web Development, where I discovered a passion for creating
                dynamic, user-centric applications. I thrive on challenges and am
                continually evolving to stay at the forefront of this ever-evolving tech
                landscape.
            </p>
            <div className="interests">
                <h3>Interests</h3>
                <ul>
                    <li>🏀 Avid sports enthusiast</li>
                    <li>🎮 Gaming aficionado</li>
                    <li>🍴 Exploring new culinary experiences</li>
                    <li>📸 Capturing moments through photography</li>
                </ul>
            </div>
            </div>
        </section>
    );
};

export default AboutMe;
