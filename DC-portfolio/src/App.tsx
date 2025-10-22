import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="fullscreen" id="home">
        {" "}
        <Introduction />
      </section>
      <section className="fullscreen" id="about">
        {" "}
        <About />
      </section>
      <section className="fullscreen" id="skills">
        <Skills />
      </section>
      <section id="projects">
        {" "}
        <Projects />
      </section>
      <section id="contact">
        {" "}
        <Contact />
      </section>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
