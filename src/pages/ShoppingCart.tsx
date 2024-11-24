import React from "react";
import { useCart } from "../context/CartContext";

const ShoppingCart: React.FC = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

      {state.items.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Cart Items */}
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-md"
              />

              {/* Product Info */}
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>

              {/* Quantity Display */}
              <div className="flex items-center">
                <span className="text-gray-700 font-semibold">
                  Quantity: {item.quantity}
                </span>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total Items:</span>
              <span>
                {state.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg mt-2">
              <span>Total Price:</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
