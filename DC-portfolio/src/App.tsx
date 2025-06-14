import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <Introduction />
      <About />
      <Courses />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
