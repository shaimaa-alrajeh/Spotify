import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Img/logoo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full p-2 flex justify-between px-[80px] items-center bg-opacity-0 text-white text-xl z-50 shadow-lg">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center w-[40%] text-white font-small gap-4">
        <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 flex-1 text-center ease-out duration-300">
          <Link to="/Home">Home</Link>
        </li>
        <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 flex-1 text-center ease-out duration-300">
          <Link to="/General">Profile</Link>
        </li>
        <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 flex-1 text-center ease-out duration-300">
          <Link to="/TopLists">Top</Link>
        </li>
        <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 flex-1 text-center ease-out duration-300">
          <Link to="/artists">Artists</Link>
        </li>
        <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 flex-1 text-center ease-out duration-300">
          <Link to="/BoadCast">Podcast</Link>
        </li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#2d0f55] bg-opacity-75 text-white flex flex-col items-center gap-4 py-4">
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 text-center ease-out duration-300">
            <Link to="/Home" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 text-center ease-out duration-300">
            <Link to="/General" onClick={toggleMenu}>Profile</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 text-center ease-out duration-300">
            <Link to="/TopLists" onClick={toggleMenu}>Top</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 text-center ease-out duration-300">
            <Link to="/artists" onClick={toggleMenu}>Artists</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl px-3 py-1 text-center ease-out duration-300">
            <Link to="/BoadCast" onClick={toggleMenu}>Podcast</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Nav;
