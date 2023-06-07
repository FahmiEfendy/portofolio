import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <NavBar />

      <main className="main">
        <Home />
        <Skills />
      </main>
    </>
  );
}

export default App;
