import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section id="About">ABOUT ME</section>
      <section id="Projects">PROJECTS</section>
      <section id="Contacts">CONTACTS</section>
    </>
  );
}

export default App;
