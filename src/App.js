import "./App.css";
import 'atropos/css'
import Navbar from "./components/Navbar";
import HomePage from "./components/Container/Homepage";
import AboutMe from "./components/Container/AboutMe";
import Projects from "./components/Container/Projects";
import Contact from "./components/Container/Contact";
import { Element } from "react-scroll";
import LegendaryCursor from "legendary-cursor";
window.addEventListener("load", () => {

  LegendaryCursor.init({
      lineSize:         0.05,
      opacityDecrement: 0.25,
      speedExpFactor:   0.8,
      lineExpFactor:    0.3,
      sparklesCount:    65,
      maxOpacity:       0.99,  // should be a number between [0 ... 1]
      // texture1:         "http://path_to_texture",      // texture displayed on mouse hover
      // texture2:         "http://path_to_texture",      // texture displayed on mouse click
      // texture3:         "http://path_to_texture",      // texture displayed on sparkles
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
