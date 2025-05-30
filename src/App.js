import "./App.css";
import "atropos/css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Container/Homepage";
import AboutMe from "./components/Container/AboutMe";
import Projects from "./components/Container/Projects";
import Contact from "./components/Container/Contact";
import { Element } from "react-scroll";
import LegendaryCursor from "legendary-cursor";
window.addEventListener("load", () => {
  LegendaryCursor.init({
    lineSize: 0.05 ,
    opacityDecrement: 0.55,
    speedExpFactor: 0.9,
    lineExpFactor: 0.6,
    sparklesCount: 10,
    maxOpacity: 0.99,
  });
});
function App() {
  return (
    <div>
      <Navbar />
      <Element name="homepage">
        <HomePage />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="aboutme">
        <AboutMe />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
