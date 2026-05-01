import React, { use, useState } from "react";
import Card from "./Card";
import Cart from "../Cart/Cart";

const CardSection = ({ cardsPromise }) => {
  const cards = use(cardsPromise);

  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  return (
    <div className="max-w-300 m-auto">
      <div className="cards-heading text-center pt-30 w-[60%] m-auto space-y-6">
        <h1 className="text-5xl text-black-cus font-bold">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="tabs tabs-box justify-center rounded-full w-83 m-auto p-1 mt-4 mb-10 bg-transparent border-2 border-gray-200">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-semibold"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-semibold"
          aria-label={`Cart(${cart.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "products" && (
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} card={card} cart={cart} setCart={setCart} />
          ))}
        </div>
      )}

      {activeTab === "cart" && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
};

export default CardSection;
