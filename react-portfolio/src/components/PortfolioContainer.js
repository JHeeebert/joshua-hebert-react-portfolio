// Import React components
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Import main components
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
// Import Views components
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Projects from './views/Projects';
import Resume from './views/Resume';
// Create portfolioContainer component
const PortfolioContainer = () => {
    return (
        <Router>
            <div className="portfolioContainer">
                <Header />
                <NavBar />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};
// Export portfolioContainer component
export default PortfolioContainer;