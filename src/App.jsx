import "./App.css";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-400 m-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
