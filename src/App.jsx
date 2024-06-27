import Navbar from "./components/NavigationBar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"
import Justlikethat from './components/JustLikeThat/Justlikethat'
import Footer from './components/Footer/Footer';
import styles from './App.module.css' 

function App() {
  return (
    <div className={styles.body}>
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
