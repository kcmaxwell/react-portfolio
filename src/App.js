import "./styles.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import OpenSource from "./components/OpenSource";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App dark-mode">
      <Navbar />
      <div className="main">
        <Home />
        <Projects />
        <OpenSource />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
