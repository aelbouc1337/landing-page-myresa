"use client";
import Image from "next/image";
import React, { useState } from "react";
//import { motion } from "framer-motion";

const ServiceQuality = () => {
  const [selectedTab, setSelectedTab] = useState(21);

  // // Animation variants
  // const flashAnimation = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 0 },
  // };

  // // Define the transition separately
  // const transition = { duration: 1.2 };

  return (
    <section className="w-full bg-[#F2F0F5] flex flex-col gap-9 justify-center py-20 items-center font-onest">
      <h3 className="font-bold mt-16 text-4xl leading-10 text-[#000c60] text-center">
        Adapter votre offre & Améliorer la Qualité de vos services
      </h3>
      <h4 className="text-xl md:w-[40%] text-center leading-8 text-[#64698e]">
        Un système avancé d'analyse de données et de collecte d'avis clients
      </h4>
      <div className="md:w-[70%] bg-transparent items-center flex flex-col-reverse md:flex-row">
        <div className="md:w-[70%] h-52 md:h-[450px] w-full flex-grow relative border-[#64698E] border-8 rounded-xl md:rounded-3xl overflow-hidden shadow-lg shadow-[#64698E]">
          <Image
            objectFit="cover"
            layout="fill"
            alt="booknetic"
            src={`/assets/${selectedTab}.png`}
            className="object-center object-cover"
          />
        </div>
        {/* <motion.div
          className="md:w-[70%] h-52 md:h-[450px] w-full flex-grow relative border-[#64698E] border-8 rounded-xl md:rounded-3xl overflow-hidden shadow-lg shadow-[#64698E]"
          key={selectedTab}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={flashAnimation}
          transition={transition}
        >
          <Image
            objectFit="cover"
            layout="fill"
            alt="booknetic"
            src={`/assets/${selectedTab}.png`}
            className="object-center object-cover"
          />
        </motion.div> */}
        <div className="md:w-[70%] h-52 md:h-[450px] w-full flex-grow relative border-[#64698E] border-8 rounded-xl md:rounded-3xl overflow-hidden shadow-lg shadow-[#64698E]">
          <Image
            objectFit="cover"
            layout="fill"
            alt="booknetic"
            src={`/assets/${selectedTab}.png`}
            className="object-center object-cover"
          />
        </div>
        <hr className="md:hidden w-[70%] my-5 border" />
        <div className="md:w-[30%] w-[90%] flex justify-center bg-transparent">
          <ul className="md:px-8 bg-transparent h-full md:list-disc md:list-inside md:flex md:flex-col grid grid-cols-2 gap-5 md:gap-0 justify-between">
            <li
              onMouseEnter={() => setSelectedTab(21)}
              className={`md:text-lg md:text-left text-center items-center md:leading-7 cursor-pointer font-bold px-2 py-4 md:px-5 md:py-6 text-[#64698e] ${
                selectedTab == 21
                  ? "bg-[#EDE9F5] border-[#64698e] border-b-2"
                  : ""
              }`}
            >
              Réservations
            </li>
            <li
              onMouseEnter={() => setSelectedTab(22)}
              className={`md:text-lg md:text-left text-center items-center md:leading-7 cursor-pointer font-bold px-2 py-4 md:px-5 md:py-6 text-[#64698e] ${
                selectedTab == 22
                  ? "bg-[#EDE9F5] border-[#64698e] border-b-2"
                  : ""
              }`}
            >
              Staff
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceQuality;
