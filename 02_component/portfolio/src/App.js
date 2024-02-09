import React, { useState } from 'react';
import Header from "./header";
import AboutMe from "./aboutMe";
import './App.css';
import Projects from './projects';
import SkillCategory from './SkillCategory';
import Skillset from './Skills';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
     <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <AboutMe/>
      <Skillset/>
      <Projects/>
    </div>
  );
}

export default App;