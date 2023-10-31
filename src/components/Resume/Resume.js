import React, { useEffect } from "react";
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
import { ReactComponent as BootStrapIcon } from "../../assets/bootstrapIcon.svg";
import { ReactComponent as ReduxIcon } from "../../assets/reduxIcon.svg";
import { ReactComponent as HerokuIcon } from "../../assets/herokuIcon.svg";

import DataBaseIcon from "../../assets/databaseIcon.svg";
import ReactBtnIcon from "../../assets/reactBtnIcon.svg";
import MiscIcon from "../../assets/miscIcon.svg";
import PDFIcon from "../../assets/pdfIcon.svg";

// IMPORT FOR ANIMATE.CSS //
import "animate.css";

// IMPORT FOR SWEET ALERT //
import MySwal from "sweetalert2";

// IMPORT FOR RESUME PDF //
import resume from "../../assets/Joshua-Hebert-Web-Dev-Resume.pdf";

const handleDownloadResume = () => {
  MySwal.fire({
    title: "Download Resume",
    text: "Are you sure you want to download my resume?",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Download",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(resume);
      MySwal.fire({
        title: "Thank you!",
        text: "Your download will start shortly.",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          MySwal.showLoading();
        },
      });
      // Display contact information after the timer
      setTimeout(() => {
        MySwal.fire({
          title: "If you have any ⍰ QUESTIONS ⍰ or WORK please contact me!",
          html: `
            Email: jheeebertwd.com<br>
            Phone: +1 407 242 5569<br>
          `,
          icon: "info",
        });
      }, 3000); // Display after 3 seconds (matching the timer)
    }
  });
};

const Resume = () => {
  // FRONTEND SKILLS Entered Here //
  // ----------------------------------------------------------------- //
  const frontendSkills = [
    {
      name: "HTML5",
      icon: (
        <a href="https://html.com/" target="_blank" rel="noopener noreferrer">
          <HTMLIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "HTML5 Icon",
      message: "HTML5 is a markup language built for the web.",
    },

    {
      name: "CSS3",
      icon: (
        <a
          href="https://css-tricks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CSSIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "CSS3 Icon",
      message:
        "CSS3 is a powerful styling language that allows for easy styling of web pages.",
    },
    {
      name: "JavaScript",
      icon: (
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <JavaScriptIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "JavaScript Icon",
      message:
        "JavaScript is a powerful scripting language that allows easy scripting of web pages.",
    },
    {
      name: "React.js",
      icon: (
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <ReactIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "React.js Icon",
      message:
        "React.js is a JavaScript library that allows developers to build user interfaces.",
    },
    {
      name: "Tailwind CSS",
      icon: (
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TailwindCssIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "Tailwind CSS Icon",
      message:
        "Tailwind CSS is a CSS framework that allows developers to build web pages quickly and easily.",
    },
    {
      name: "Bootstrap",
      icon: (
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BootStrapIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "Bootstrap Icon",
      message:
        "Bootstrap allows developers to build web pages quickly and easily.",
    },
    {
      name: "Redux",
      icon: (
        <a
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReduxIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "Redux Icon",
      message:
        "Redux is a JavaScript library that allows developers to manage the state of their application.",
    },
  ];
  // BACKEND SKILLS Entered Here //
  // ----------------------------------------------------------------- //
  const backendSkills = [
    {
      name: "Node.js",
      icon: (
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NodeJSIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "Node.js Icon",
      message:
        "Node.js is a JavaScript runtime environment that allows developers to build web servers.",
    },
    {
      name: "Express.js",
      icon: (
        <a
          href="http://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExpressJSIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "Express.js Icon",
      message: "Express.js allows developers to build web servers.",
    },
    {
      name: "MongoDB",
      icon: (
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MongoDBIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "MongoDB Icon",
      message:
        "MongoDB is a NoSQL database that allows developers to store data.",
    },
    {
      name: "GraphQL",
      icon: (
        <a
          href="https://graphql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GraphQLIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "GraphQL Icon",
      message:
        "GraphQL is a query language for APIs that allows developers to build APIs.",
    },
    {
      name: "MySQL",
      icon: (
        <a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MySqlIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "MySQL Icon",
      message:
        "MySQL is a relational database that allows developers to store data.",
    },
  ];
  // MISCELLANEOUS SKILLS Entered Here //
  // ----------------------------------------------------------------- //
  const MiscellaneousSkills = [
    {
      name: "vsCode",
      icon: (
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VsCodeIcon
            style={{ width: "50px", height: "50px" }}
            className="animate__animated animate__fadeIn"
          />
        </a>
      ),
      iconAlt: "vsCode Icon",
      message:
        "vsCode is a code editor that allows developers to code and provides a variety of useful features.",
    },
    {
      name: "GitHub",
      icon: (
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "GitHub Icon",
      message:
        "GitHub is a code repository that allows developers to share code with others and contribute to open source projects.",
    },
    {
      name: "NPM",
      icon: (
        <a
          href="https://www.npmjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NpmIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "NPM Icon",
      message:
        "NPM is a package manager that allows developers to share code with others and contribute to open source projects.",
    },
    {
      name: "Heroku",
      icon: (
        <a
          href="https://www.heroku.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HerokuIcon style={{ width: "50px", height: "50px" }} />
        </a>
      ),
      iconAlt: "Heroku Icon",
      message:
        "Heroku is a cloud platform that allows developers to deploy their web applications.",
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
      <h2> Resume & Skills </h2>
      <div className="buttons">
        <button onClick={() => scrollToSection("frontendSkills")}>FRONT-END
          <img
            src={ReactBtnIcon}
            alt="REACT JS"
            style={{ width: "50px", height: "50px" }}
          />

        </button>
        <button onClick={() => scrollToSection("backendSkills")}>BACK-END
          <img
            src={DataBaseIcon}
            alt="database"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
        <button onClick={() => scrollToSection("MiscellaneousSkills")}>MISC.
          <img
            src={MiscIcon}
            alt="miscellaneous"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
        <button onClick={handleDownloadResume}>
          Resume
          <img
            src={PDFIcon}
            alt="PDF"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
      <div id="frontendSkills" className="skill-card">
        <img
          src={ReactBtnIcon}
          alt="REACT JS"
          style={{ width: "75px", height: "75px" }}
        />
        <ul>
          {frontendSkills.map((skill, index) => (
            <li key={index} className="tooltip-container">
              {skill.icon}
              <span className="tooltiptext">{skill.message}</span>
            </li>
          ))}
        </ul>
      </div>
      <div id="backendSkills" className="skill-card">
        <img
          src={DataBaseIcon}
          alt="database"
          style={{ width: "75px", height: "65px" }}
        />
        <ul>
          {backendSkills.map((skill, index) => (
            <li key={index} className="tooltip-container">
              {skill.icon}
              <span className="tooltiptext">{skill.message}</span>
            </li>
          ))}
        </ul>
      </div>
      <div id="MiscellaneousSkills" className="skill-card">
        <img
          src={MiscIcon}
          alt="database"
          style={{ width: "75px", height: "65px" }}
        />
        <ul>
          {MiscellaneousSkills.map((skill, index) => (
            <li key={index} className="tooltip-container">
              {skill.icon}
              <span className="tooltiptext">{skill.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
