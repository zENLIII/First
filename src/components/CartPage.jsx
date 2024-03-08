import React from "react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <AnimatePresence>
        {cart.length > 0 ? (
          cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-between items-center mb-2 bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 mr-2 rounded"
              />
              <span className="flex-1">{item.name}</span>
              <span className="font-bold px-3">${item.price}</span>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </motion.div>
          ))
        ) : (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        )}
      </AnimatePresence>
      {cart.length > 0 && (
        <>
          <div className="mt-4 font-bold">Total: ${totalAmount}</div>
          <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
