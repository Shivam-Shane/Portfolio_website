import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import Chatbot from './components/Chatbot';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import useSectionFade from './hooks/useSectionFade';
import './App.css';

function App() {
   useSectionFade();
  const [isSpinnerVisible, setSpinnerVisible] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {isSpinnerVisible && <Spinner />}
      <div className="scroll-container">
        <div id="mainContent">
          <About setSpinnerVisible={setSpinnerVisible} />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Publications />
          <Contact />
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default App;