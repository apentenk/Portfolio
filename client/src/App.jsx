import { useState, useEffect } from "react";

import Header from "./components/Header";
import About from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './App.css'

function App() {
 
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
  //<Content page={page}/>
  //
}

export default App
