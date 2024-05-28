import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Hero />
        <About />
        <Skill />
      </div>
    </>
  );
}

export default App;
