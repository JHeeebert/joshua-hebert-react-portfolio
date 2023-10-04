import React, { useEffect, useState } from "react";
import "./Resume.css";
// IMPORTS FOR OUR SKILLS SVGS //
import { ReactComponent as HTMLIcon } from "../../assets/htmlIcon.svg";
import { ReactComponent as CSSIcon } from "../../assets/cssIcon.svg";
import { ReactComponent as NodeJSIcon } from "../../assets/nodeJsIcon.svg";
import { ReactComponent as ExpressJSIcon } from "../../assets/expressIcon.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/javaScriptIcon.svg";
import { ReactComponent as VsCodeIcon } from "../../assets/vscodeIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/mongoDbIcon.svg";
import { ReactComponent as ReactIcon } from "../../assets/reactIcon.svg";
import { ReactComponent as TailwindCssIcon } from "../../assets/tailwindCssIcon.svg";
import { ReactComponent as GitHubIcon } from "../../assets/gitHubIcon.svg";
import { ReactComponent as NpmIcon } from "../../assets/npmIcon.svg";
import { ReactComponent as GraphQLIcon } from "../../assets/graphqlIcon.svg";
import { ReactComponent as MySqlIcon } from "../../assets/mySqlIcon.svg";

// IMPORT FOR RESUME PDF //
import resume from "../../assets/JoshuaHebertResume2023.pdf";

const Resume = () => {
                  // FRONTEND SKILLS Entered Here //
// ----------------------------------------------------------------- //
  const frontendSkills = [
    {
      name: "HTML5",
      icon: <HTMLIcon style={{ width: "50px", height: "50px" }} />,
    },

    {
      name: "CSS3",
      icon: <CSSIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "JavaScript",
      icon: <JavaScriptIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "React.js",
      icon: <ReactIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindCssIcon style={{ width: "50px", height: "50px" }} />,
    },
  ];
                  // BACKEND SKILLS Entered Here //
// ----------------------------------------------------------------- //
  const backendSkills = [
    {
      name: "Node.js",
      icon: <NodeJSIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "Express.js",
      icon: <ExpressJSIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "JavaScript",
      icon: <JavaScriptIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "MongoDB",
      icon: <MongoDBIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "GraphQL",
      icon: <GraphQLIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "MySQL",
      icon: <MySqlIcon style={{ width: "50px", height: "50px" }} />,
    },
  ];
                  // MISCELLANEOUS SKILLS Entered Here //
// ----------------------------------------------------------------- //
  const MiscellaneousSkills = [
    {
      name: "vsCode",
      icon: <VsCodeIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "GitHub",
      icon: <GitHubIcon style={{ width: "50px", height: "50px" }} />,
    },
    {
      name: "NPM",
      icon: <NpmIcon style={{ width: "50px", height: "50px" }} />,
    },
  ];
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="buttons">
        <button onClick={() => scrollToSection("frontendSkills")}>
          Frontend Skills
        </button>
        <button onClick={() => scrollToSection("backendSkills")}>
          Backend Skills
        </button>
        <a
          href={resume}
          target="_blank"
          className="resume-link"
          rel="noreferrer"
        >
          Download Resume (PDF)
        </a>
      </div>
      <div id="frontendSkills" className="skill-card">
        <h3>Frontend Skills</h3>
        <ul>
          {frontendSkills.map((skill, index) => (
            <li key={index}>{skill.icon}</li>
          ))}
        </ul>
      </div>
      <div id="backendSkills" className="skill-card">
        <h3>Backend Skills</h3>
        <ul>
          {backendSkills.map((skill, index) => (
            <li key={index}>{skill.icon}</li>
          ))}
        </ul>
      </div>
      <div id="MiscellaneousSkills" className="skill-card">
        <h3>Miscellaneous Skills</h3>
        <ul>
          {MiscellaneousSkills.map((skill, index) => (
            <li key={index}>{skill.icon}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
