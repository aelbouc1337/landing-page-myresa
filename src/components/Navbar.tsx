"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const variants = {
    open: { y: 0 },
    closed: { y: "-200%" },
  };

  return (
    <nav
      className={`fixed w-full md:h-24  z-10 font-onest items-center justify-between md:justify-center px-3 flex gap-8 transition-all duration-600 ${
        navbar ? "bg-white h-16 shadow-md top-0" : "bg-transparent top-10 h-20"
      }`}
    >
      <div className="relative flex md:hidden">
        {showMenu ? (
          <div className="flex items-center justify-center">
            <IoCloseOutline
              onClick={() => setShowMenu(false)}
              className="transition-all cursor-pointer duration-1000 opacity-100"
              color="#75789B"
              size={32}
            />
            <Image
              className="md:hidden"
              src="/assets/logo-myresa.png"
              alt="myresa Logo"
              width={130}
              height={60}
            />
          </div>
        ) : (
          <div className="flex gap-2">
            {" "}
            <HiBars3
              onClick={() => setShowMenu(true)}
              className="transition-all cursor-pointer duration-1000 opacity-100"
              color="#75789B"
              size={32}
            />
            <Image
              className="md:hidden"
              src="/assets/logo-myresa.png"
              alt="myresa Logo"
              width={130}
              height={60}
            />
          </div>
        )}

        <motion.div
          initial="closed"
          animate={showMenu ? "open" : "closed"}
          variants={variants}
          className="bg-white w-full min-w-96 absolute top-8 left-0 rounded-xl"
        >
          <ul className="w-full h-full p-6 flex flex-col items-center justify-around gap-8 text-base text-[#050d61]">
            <li className="w-full flex justify-center cursor-pointer">
              Acceuil
            </li>
            <li className="w-full flex justify-center cursor-pointer">
              Présentation
            </li>
            <li className="w-full flex justify-center cursor-pointer">
              Fonctionalités
            </li>
            <li className="w-full flex justify-center cursor-pointer">
              Abonnements
            </li>
            <li className="w-full flex justify-center cursor-pointer">
              Contact
            </li>
          </ul>
        </motion.div>
      </div>

      <Image
        className="md:block hidden"
        src="/assets/logo-myresa.png"
        alt="myresa Logo"
        width={150}
        height={100}
      />

      <ul className="hidden md:flex md:items-center md:font-onest md:gap-14 md:text-[#050d61] md:font-medium md:text-base md:leading-4">
        <li className="cursor-pointer">Acceuil</li>
        <li className="cursor-pointer">Présentation</li>
        <li className="cursor-pointer">Fonctionalités</li>
        <li className="cursor-pointer">Abonnements</li>
        <li>
          <ul className="flex gap-4 items-center">
            <li className="text-[#2e3574] cursor-pointer hover:text-[#050d61]">
              Contact
            </li>
            <li className="text-[#2e3574] cursor-pointer hover:text-[#050d61] transform duration-500 hover:scale-110">
              Se Connecter
            </li>
            <li className="block text-[#2e3574] cursor-pointer font-semibold text-lg bg-white shadow-md rounded-full px-5 py-[2px] hover:bg-[#2e3574] transform hover:text-white duration-500 hover:scale-110">
              Souscrire
            </li>
          </ul>
        </li>
      </ul>

      <div className="md:hidden flex items-center gap-4">
        <FaUser color="#64698E" size={18} />
        <button className="block text-[#000C60] cursor-pointer font-medium bg-white text-base shadow-md rounded-full px-3 py-[2px] font-onest hover:bg-[#2e3574] transform hover:text-white duration-500 hover:scale-110">
          Souscrire
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
