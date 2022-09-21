import './Content.css';
import AboutMe from "./AboutMe/AboutMe.jsx";
import Contact from "./Contact/Contact.jsx";
import Home from "./Home/Home.jsx";
import Projects from "./Projects/Projects.jsx";
import Technology from "./Technology/Technology.jsx";

const Content = () => {
  return (
    <div id="Content">
        <Home />
        <Technology />
        <Projects />
        <AboutMe />
        <Contact />
    </div>
  )
}

export default Content;
