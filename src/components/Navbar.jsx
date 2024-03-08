import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Adjust the import path as necessary

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cart } = useCart(); // Access the cart state from the CartContext

  // Calculate the number of items in the cart
  const itemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  // Timer reference for delaying the dropdown close
  const closeTimerRef = useRef(null);

  // Open the dropdown menu
  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  // Close the dropdown menu with a delay
  const closeDropdown = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // Set the delay time here (100 milliseconds in this example)
  };

  // Clear the close timer on mouse enter
  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex items-center justify-end space-x-4">
          <li>
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>

          {/* Categories Dropdown */}
          <li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            onMouseMove={clearCloseTimer}
          >
            <button className="hover:text-gray-300">Categories</button>
            {isDropdownOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link
                  to="/category1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Development
                </Link>
                <Link
                  to="/category2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  AI/ML
                </Link>
                <Link
                  to="/category3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Others
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/learnings" className="hover:text-gray-300">
              My Learnings
            </Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="hover:text-gray-300 relative">
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/signin" className="hover:text-gray-300">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
