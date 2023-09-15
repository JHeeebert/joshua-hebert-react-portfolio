// Import React components
import React from 'react';

// Import main components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
// Import Views components
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Home from '../src/components/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
// Create portfolioContainer component
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};
// Export portfolioContainer component
export default App;
