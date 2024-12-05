import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">MyApp</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            id="menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
