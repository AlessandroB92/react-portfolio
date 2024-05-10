import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar/MyNavbar";

function App() {
  return (
    <>
      <section>
        <MyNavbar />
      </section>
      <section id="About">ABOUT ME</section>
      <section id="Projects">PROJECTS</section>
      <section id="Contacts">CONTACTS</section>
    </>
  );
}

export default App;
