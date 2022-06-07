import React from "react";
import About from "./Components/About";
import Education from "./Components/Education";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import './styles.css'
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";

function App() {
  return (
    <>
      <main>
          <Navbar/>
          <About/>
          <Skills/>
          <Education/>
          <Projects/>
          <Contact/>
          <Footer/>
          <ScrollUp/>
      </main>
    </>
  );
}

export default App;
