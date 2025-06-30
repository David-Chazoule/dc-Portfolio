import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <section className="app">
      <Header />
      <section id="home">
        {" "}
        <Introduction />
      </section>
      <section id="about">
        {" "}
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="courses">
        {" "}
        <Courses />
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
    </section>
  );
}

export default App;
