import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/ScrollUp/ScrollUp";
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
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
