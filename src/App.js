import React, { useState } from "react";

import Header from "./components/Header/Header";

import About from "./components/About/About";

import Portfolio from "./components/Portfolio/Portfolio";

import Contact from "./components/Contact/Contact";

import Resume from "./components/Resume/Resume";

import Footer from "./components/Footer/Footer";

import Carousel from "./components/Carousel/Carousel"; // Import Carousel component

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
      <Carousel /> {/* Display the Carousel */}
      {/* Rest of the components */}
      {selectedSection === "About Me" && <About />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Portfolio" && <Portfolio />}
      {selectedSection === "Resume" && <Resume />}
      <Footer />
    </div>
  );
};

export default App;
