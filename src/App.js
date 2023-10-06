import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel"; // Import Carousel component

const App = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  const [selectedSection, setSelectedSection] = useState("About Me");
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };
  return (
    <div>
      <Carousel /> {/* Display the Carousel */}
      <Header
        selectedSection={selectedSection}
        handleSectionChange={handleSectionChange}
      />
      
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