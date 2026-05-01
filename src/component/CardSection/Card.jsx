import React, { useState } from "react";
import { RiCheckFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const Card = ({ card, cart, setCart }) => {
  const [isAddToCart, setIsAddToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddToCart(true);

    const isFound = cart.find((item) => item.id === card.id);

    if (isFound) {
      toast.error("Item is already in cart");
      return;
    }

    setCart([...cart, card]);
    toast.success("Item is Added to Cart");
  };
  return (
    <div className="border-2 border-gray-200 rounded-2xl p-6 relative space-y-6">
      <button
        className={`btn btn-soft ${card.tag === "popular" ? "btn-primary" : card.tag === "best seller" ? "btn-warning" : "btn-accent"} rounded-full absolute top-3 right-3 capitalize`}
      >
        {card.tag}
      </button>
      <img
        className="border border-gray-200 rounded-full p-3 mt-6"
        src={card.icon}
        alt={card.name}
      />
      <h3 className="text-2xl font-bold text-black-cus">{card.name}</h3>
      <p className="text-gray-500">{card.description}</p>
      <div>
        <span className="text-2xl text-black-cus font-bold">${card.price}</span>
        <span>/{card.period}</span>
      </div>
      <ul>
        {card.features.map((feature, index) => (
          <li
            className="font-medium flex gap-2 items-center text-gray-500"
            key={index}
          >
            <RiCheckFill className="text-[#30B868]" /> {feature}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6"
        onClick={handleAddToCart}
      >
        {isAddToCart ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;
