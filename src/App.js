import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Container/Homepage";
import AboutMe from "./components/Container/AboutMe";
import Projects from "./components/Container/Projects";
import Contact from "./components/Container/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />
      <Element name="homepage"><HomePage /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="aboutme"><AboutMe /></Element>
      <Element name="contact"><Contact /></Element>
      
      
    </div>

    // <Router> {/* Router bileşenini ekledik */}
    //   <Navbar  />
    //   <Routes> {/* Routes bileşenini ekledik */}
    //     <Route path="/" element={<HomePage/>}/> {/* Homepage bileşenini burada düzgünce yönlendirdik */}
    //     <Route path="/aboutme" element={<AboutMe/>}/> {/* Homepage bileşenini burada düzgünce yönlendirdik */}
    //     <Route path="/projects" element={<Projects/>}/> {/* Homepage bileşenini burada düzgünce yönlendirdik */}
    //   </Routes>
    // </Router>
  );
}

export default App;
