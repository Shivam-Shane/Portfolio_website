import React, { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Spinner from '../src/components/Spinner';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import Projects from '../src/components/Projects';
import Education from '../src/components/Education';
import Skills from '../src/components/Skills';
import Publications from '../src/components/Publications';
import Contact from '../src/components/Contact';
import useSectionFade from '../src/hooks/useSectionFade';
import dynamic from 'next/dynamic';
const Chatbot = dynamic(() => import('../src/components/Chatbot'), {
  ssr: false, // Disable SSR for this component
});

export default function App() {
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
