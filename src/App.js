import React from 'react';
import './app.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Portfolio from './components/Portfolio/Portfolio';
import SkillsTools from './components/SkillsTools/SkillsTools';
import Contact from './components/Contact/Contact';
import LearningAchievements from './components/learning_achievements/LearningAchievements';

function App() {
    return (
        <div className="App">
            <Nav />
            <Home />
            <About />
            <Work />
            <Portfolio />
            <LearningAchievements />
            <SkillsTools />
            <Contact />
            {/* Other components will be added here */}
        </div>
    );
}

export default App;