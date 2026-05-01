import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCart([]);
    toast.success("Payment Successful!");
  };

  const handleDelete = (item) => {
    const filterCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(filterCart);
    toast.error("Item has been deleted");
  };

  return (
    <div className="w-[80%] m-auto space-y-4 p-10 border-2 border-gray-200 rounded-2xl mb-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-2xl font-semibold text-gray-400">
          Cart Is Empty
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full bg-gray-50 p-5 rounded-2xl"
            >
              <div className="flex items-center gap-5">
                <div>
                  <img src={item.icon} alt="" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(item)}
                  className="text-red-500 font-semibold cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="flex justify-between mt-10">
        <p className="text-gray-600">Total:</p>
        <p className="text-2xl font-semibold">${totalPrice}</p>
      </div>
      <button
        onClick={handlePayment}
        className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-6 text-white mt-4"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
