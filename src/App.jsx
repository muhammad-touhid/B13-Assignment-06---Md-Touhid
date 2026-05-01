import "./App.css";
import CardSection from "./component/CardSection/CardSection";
import Counter from "./component/Counter/Counter";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Cart from "./component/Cart/Cart";
import GetStarted from "./component/GetStarted/GetStarted";

const getCards = async () => {
  const res = await fetch("/cards.json");
  return res.json();
};

const cardsPromise = getCards();

function App() {
  return (
    <>
      <div className="max-w-400 m-auto">
        <Navbar />
        <Hero />
        <Counter />
        <CardSection cardsPromise={cardsPromise} />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
