import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
