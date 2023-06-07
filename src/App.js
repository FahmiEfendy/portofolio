import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
