import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const { state } = useCart();

  // Calculate total items in cart
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        My Store
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link to="/cart" className="relative hover:text-gray-300">
          <span className="px-2 py-1">Cart</span>
          {totalItems > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
