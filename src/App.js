import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Portofolio from "./components/portofolio/Portofolio";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <>
      <NavBar />

      <main className="main">
        <Home />
        <Skills />
        <Qualification />
        <Portofolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
