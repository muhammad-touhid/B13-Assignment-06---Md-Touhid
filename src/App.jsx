import "./App.css";
import Counter from "./component/Counter/Counter";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-400 m-auto">
        <Navbar />
        <Hero />
        <Counter />
        <Footer />
      </div>
    </>
  );
}

export default App;
