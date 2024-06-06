import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import AboutMe from "./components/sections/AboutMe";
import ContactForm from "./components/sections/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section id="About">
        <AboutMe />
      </section>
      <section id="Projects">PROJECTS</section>
      <section id="Contacts">
        <ContactForm />
      </section>
    </>
  );
}

export default App;
