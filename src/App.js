
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/Container/Homepage';
import AboutMe from './components/Container/AboutMe';
import Projects from './components/Container/Projects';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <Router> {/* Router bileşenini ekledik */}
      <Navbar  />
      <Routes> {/* Routes bileşenini ekledik */}
        <Route path="/" element={<HomePage/>}/> {/* Homepage bileşenini burada düzgünce yönlendirdik */}
        <Route path="/aboutme" element={<AboutMe/>}/> {/* Homepage bileşenini burada düzgünce yönlendirdik */}
        <Route path="/projects" element={<Projects/>}/> {/* Homepage bileşenini burada düzgünce yönlendirdik */}
      </Routes>
    </Router>
  );
}

export default App;
