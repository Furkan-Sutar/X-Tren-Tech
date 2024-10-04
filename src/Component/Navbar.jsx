import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navAnimation = useRef(null);
  const menuRef = useRef(null);
  const timeline = gsap.timeline();
  useGSAP(() => {
    timeline.from(navAnimation.current, {
      y: -40,
      duration: 1,
      delay: 1,
      opacity: 0,
      stagger: 0.15,
    });
  }, [navAnimation.current]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power4.in",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      ref={navAnimation}
      className="w-full h-16 z-50 fixed top-0 bg-gray-900 bg-opacity-90 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="sm:hidden">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 z-10 rounded-full object-cover"
              />
            </Link>
          </div>

          {/* Brand Name */}
          <div className="hidden sm:block">
            <Link to="/" className="text-gray-100 text-2xl font-extrabold">
              X-TREN-STUDIO
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="text-lg px-4 py-2 text-white hover:text-gray-900 hover:bg-white rounded-lg transition-all duration-300 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-lg px-4 py-2 text-white hover:text-gray-900 hover:bg-white rounded-lg transition-all duration-300 font-semibold"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-lg px-4 py-2 text-white hover:text-gray-900 hover:bg-white rounded-lg transition-all duration-300 font-semibold"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-all focus:outline-none"
            >
              {isOpen ? <RxCross2 size={30} /> : <IoIosMenu size={35} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          ref={menuRef}
          className={`fixed inset-0  h-64 bg-gray-500 bg-opacity-95 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} className="text-white">
              <RxCross2 size={35} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <Link
              to="/"
              className="text-3xl text-gray-300 hover:text-white font-bold transition-all duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-3xl text-gray-300 hover:text-white font-bold transition-all duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-3xl text-gray-300 hover:text-white font-bold transition-all duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
