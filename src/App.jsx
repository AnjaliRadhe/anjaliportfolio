import React from "react";
import styles from "./App.module.css"; // Assuming you have defined styles in a CSS module file
import Navbar from "./components/NavigationBar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Justlikethat from "./components/JustLikeThat/Justlikethat";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.body} id="home">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Justlikethat />
      <Footer />
    </div>
  );
}

export default App;
