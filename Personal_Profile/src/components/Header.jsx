import { useState } from "react";
import {Link, useLocation} from "react-router-dom"
export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  
  const isActiveLink = (path) => location.pathname === path;
  const linkClass = (path) => isActiveLink(path) ? "text-red-500 font-black" : "hover:font-black hover:cursor-pointer hover:text-red-500"
  
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white z-40 fixed border-b-2 border-black top-0 w-full">
      <div className=" text-black font-bold hidden md:inline-block">
        <span className="text-red-500 text-4xl">BK</span>
        <span className="text-2xl text-blue-950">aniaru.</span>
      </div>
      <div className="text-red-500 font-bold text-4xl inline-block md:hidden">
        BK<span className="text-blue-950">.</span>
      </div>

      <nav className="relative">
        {/*Navigation menu for larger screens*/}
        <ul className="md:flex space-x-4 text-black text-lg font-semibold hidden">
          <li className={linkClass("/")}>
            <Link to="/">Home</Link>
          </li>
          <li className={linkClass("/About")}>
            <Link>About Me</Link>
          </li>
          <li className={linkClass("/Projects")}>
            <Link to="/Projects">Projects</Link>
          </li>
          <li className={linkClass("/Contact")}>
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
                ? " transform transition duratio-300 ease-in-out flex flex-col text-lg font-semibold absolute mt-4 b bg-white z-40 text-blue-950 p-4 -left-18 top-8 md:hidden w-32 space-y-2 border-2 border-black border-t-0 border-r-0"
                : "hidden"
            }
          >
            <li className={linkClass("/")}>
              <Link to="/">Home</Link>
            </li>
            <li className="hover:font-black hover:cursor-pointer hover:text-red-500">
              About Me
            </li>
            <li className={linkClass("/Projects")}>
              <Link to="/Projects">Projects</Link>
            </li>
            <li className={linkClass("/Contact")}>
              <Link to="/Contact">Contacts </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
