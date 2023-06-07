import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <>
      <NavBar />

      <main className="main">
        <Home />
        <Skills />
        <Qualification />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
