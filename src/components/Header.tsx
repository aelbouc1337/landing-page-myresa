"use client";
import React, { useEffect, useState } from "react";
import { HiLightningBolt } from "react-icons/hi";
import Image from "next/image";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScale(currentScrollY > scrollY ? Math.max(scale - 0.02, 0.8) : 1); // Adjust scale reduction rate and minimum scale value
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const translateYFirst = scrollY / 2; // Adjust this value for desired speed
  const translateYSecond = -scrollY / 2; // Adjust this value for desired speed
  const opacity = Math.max(1 - scrollY / 400, 0.2); // Adjust opacity based on scroll position

  return (
    <section className="w-full md:px-80 py-10 items-center justify-center relative flex flex-col md:gap-6 gap-4 bg-gradient-to-r from-[#F0E9FD] via-white to-[#FEEBF2]">
      <div
        style={{
          opacity,
          transform: `scale(${scale}) translateY(${translateYFirst}px)`,
        }}
        className="transition-transform duration-300 ease-in-out w-full h-full relative flex items-center justify-center flex-col md:gap-6 gap-4"
      >
        <h1 className="hidden md:mt-24 md:text-[#000C60] md:mb-5 md:font-onest md:text-3xl md:leading-8 md:font-bold md:block">
          My resa
        </h1>
        <h2 className="mt-8 md:mt-0 font-onest font-extrabold md:text-6xl text-6xl leading-tight text-center text-[#000c60]">
          Premier logiciel de gestion complet spécialement conçu pour
        </h2>
        <Image
          className="md:absolute md:top-48 md:left-28 md:animate-spinOpacity md:block hidden"
          alt="decorative shape"
          src="/assets/shape.svg"
          width={20}
          height={20}
        />
        <Image
          className="md:absolute md:bottom-0 md:right-40 md:animate-spinOpacity md:block hidden"
          alt="decorative shape"
          src="/assets/shape.svg"
          width={20}
          height={20}
        />

        <Image
          className="md:absolute md:bottom-28 md:right-48 md:animate-spinOpacity md:block hidden"
          alt="decorative shape"
          src="/assets/shape.svg"
          width={20}
          height={20}
        />
        <h3 className="font-extrabold font-onest text-center text-7xl md:leading-relaxed text-[#764f94]">
          Instituts de beauté
        </h3>
        <div className="flex flex-col">
          <h4 className="text-[#64698e] text-center text-2xl font-onest">
            Prenez une longueur d'avance avec
          </h4>
          <span className="text-[#64698e] text-center text-2xl font-onest font-bold">
            MyResa Store Manager 🚀
          </span>
        </div>
        <button className="bg-[#5F479d] flex items-center gap-1 hover:shadow-md text-white rounded-full font-onest md:text-xl px-6 py-3 hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110">
          <HiLightningBolt /> Souscrire maintenant
        </button>
        <span className="font-onest text-[#64698e]">Gratuitement</span>
      </div>
    </section>
  );
};

export default Header;
