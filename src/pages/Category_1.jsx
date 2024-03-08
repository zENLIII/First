import React from "react";
import { useCart } from "../context/CartContext";
import { devProducts as products } from "./products"; // Import Dev products

const Dev = () => {
  const { cart, dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: productId } });
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto mb-2"
            />
            <h3 className="text-xl">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            {isInCart(product.id) ? (
              <button
                className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dev;
