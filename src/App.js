import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Projects from "./components/pages/Projects";
import ScrollToTop from "./components/Scrolltotop";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Herosection />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
