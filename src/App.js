import "./App.css";
import About from "./components/About";
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
      </div>
    </>
  );
}

export default App;
