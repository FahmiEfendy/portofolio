import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <>
      <NavBar />

      <main className="main">
        <Home />
        <Skills />
        <Qualification />
      </main>
    </>
  );
}

export default App;
