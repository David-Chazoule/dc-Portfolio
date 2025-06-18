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
    <div className="app">
      <Header />
      <div id="home">
        {" "}
        <Introduction />
      </div>
      <div id="about">
        {" "}
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="courses">
        {" "}
        <Courses />
      </div>
      <div id="projects">
        {" "}
        <Projects />
      </div>
      <div id="contact">
        {" "}
        <Contact />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
