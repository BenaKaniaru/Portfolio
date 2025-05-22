import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-300 z-40 fixed top-0 w-full">
      <div className=" text-black font-bold hidden md:inline-block">
        <span className="text-red-500 text-4xl">BK</span>
        <span className="text-2xl text-blue-950">aniaru.</span>
      </div>
      <div className="text-red-500 font-bold text-4xl inline-block md:hidden">
        BK<span className="text-blue-950">.</span>
      </div>

      <nav className="relative">
        {/*Navigation menu for larger screens*/}
        <ul className="md:flex space-x-4 text-blue-950 text-lg font-semibold hidden">
          <li className="hover:cursor-pointer hover:text-red-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-red-300">About Me</li>
          <li className="hover:cursor-pointer hover:text-red-300">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-red-300">
            <Link to="/Contact">Contacts</Link>
          </li>
        </ul>

        {/*Hurmberger menu for smaller screens*/}
        <div
          className="flex flex-col gap-1 hover:cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`transform transition duratio-300 ease-in-out bg-blue-950 w-6 h-1 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            } `}
          ></span>
          <span
            className={`bg-blue-950 w-6 h-1 transform transition duratio-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`bg-blue-950 w-6 h-1 transform transition duratio-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
        {/*mobile menu*/}

        <div>
          <ul
            className={
              isOpen
                ? " transform transition duratio-300 ease-in-out flex flex-col text-lg font-semibold absolute mt-4 bg-gray-300 z-40 text-blue-950 p-4 -left-18 top-8 md:hidden w-32 space-y-2"
                : "hidden"
            }
          >
            <li className="hover:cursor-pointer hover:text-red-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:cursor-pointer hover:text-red-300">
              About Me
            </li>
            <li className="hover:cursor-pointer hover:text-red-300">
              <Link to="/Projects">
                Projects
              </Link>
  
            </li>
            <li className="hover:cursor-pointer hover:text-red-300">
              <Link to="/Contact">Contacts </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
