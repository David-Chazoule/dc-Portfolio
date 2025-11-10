import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ScrollObserver from "./components/hook/ScrollObserver";

function App() {
  const { sectionsRef, scrollToSection } = ScrollObserver();
  return (
    <div className="app">
      <Header />
      <section
        className="fullscreen"
        id="home"
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
      >
        {" "}
        <Introduction />
      </section>
      <section
        className="fullscreen"
        id="about"
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
      >
        {" "}
        <About />
      </section>
      <section
        className="fullscreen"
        id="skills"
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
      >
        <Skills />
      </section>
      <section
        id="projects"
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
      >
        {" "}
        <Projects />
      </section>
      <section
        id="contact"
        ref={(el) => {
          if (el) sectionsRef.current.push(el);
        }}
      >
        {" "}
        <Contact />
      </section>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
