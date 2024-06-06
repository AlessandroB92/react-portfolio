import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import AboutMe from "./components/sections/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section id="About"><AboutMe/></section>
      <section id="Projects">PROJECTS</section>
      <section id="Contacts">CONTACTS</section>
    </>
  );
}

export default App;
