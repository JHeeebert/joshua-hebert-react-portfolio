import React, { useState } from "react";
import Header from "../src/components/Header/Header.js";
import About from "../src/components/About/About.js";
import Portfolio from "../src/components/Portfolio/Portfolio.js";
import Contact from "../src/components/Contact/Contact.js";
import Resume from "../src/components/Resume/Resume.js";
import Footer from "../src/components/Footer/Footer.js";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("About Me");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Header
        selectedSection={selectedSection}
        handleSectionChange={handleSectionChange}
      />
      {selectedSection === "About Me" && <About />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Portfolio" && <Portfolio />}
      {selectedSection === "Resume" && <Resume />}
      <Footer />

    </div>
  );
};

export default App;
