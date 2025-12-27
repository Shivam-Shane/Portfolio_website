import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../src/components/loader/Loader";

// Dynamically import components with SSR disabled
const Navbar = dynamic(() => import("../src/components/navbar/Navbar"), {
  ssr: false,
  loading: () => (
    <header className="header">
      <nav className="nav container">
        <div className="nav_logo">Shivam</div>
      </nav>
    </header>
  ),
});
const Home = dynamic(() => import("../src/components/home/Home"), { ssr: false });
const About = dynamic(() => import("../src/components/about/About"), { ssr: false });
const Skills = dynamic(() => import("../src/components/skills/Skills"), { ssr: false });
const Experience = dynamic(() => import("../src/components/experience/Experience"), { ssr: false });
const Projects = dynamic(() => import("../src/components/projects/Projects"), { ssr: false });
const Contact = dynamic(() => import("../src/components/contact/Contact"), { ssr: false });
const Footer = dynamic(() => import("../src/components/footer/Footer"), { ssr: false });
const ScrollUp = dynamic(() => import("../src/components/scrollUp/ScrollUp"), { ssr: false });
const Chatbot = dynamic(() => import("../src/components/chatbot/Chatbot"), { ssr: false });
const Publication=dynamic(()=>import("../src/components/publications/Publications"), { ssr: false })

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publication/>
          <Contact />
          <Footer />
          <ScrollUp />
          <Chatbot />
        </main>
      </Suspense>
    </div>
  );
}

export default App;