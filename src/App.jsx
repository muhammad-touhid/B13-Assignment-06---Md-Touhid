import "./App.css";
import CardSection from "./component/CardSection/CardSection";
import Counter from "./component/Counter/Counter";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Cart from "./component/Cart/Cart";
import GetStarted from "./component/GetStarted/GetStarted";
import Pricing from "./component/Pricing/Pricing";
import Cta from "./component/CTA/Cta";
import { useState } from "react";

const getCards = async () => {
  const res = await fetch("/cards.json");
  return res.json();
};

const cardsPromise = getCards();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className="max-w-400 m-auto">
        <Navbar cart={cart} />
        <Hero />
        <Counter />
        <CardSection
          cart={cart}
          setCart={setCart}
          cardsPromise={cardsPromise}
        />
        <GetStarted />
        <Pricing />
        <Cta />
        <Footer />
      </div>
    </>
  );
}

export default App;
