"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

const ScrolledCard = () => {
  return (
    <div className="p-0 bg-gradient-to-r relative from-[#F0E9FD] via-white to-[#FEEBF2]">
      <ContainerScroll
        titleComponent={<h1 className="hidden">Scroll to Animate</h1>}
      >
        <div className="absolute bg-gradient-to-t from-white via-white to-transparent z-30 w-full h-[30%] left-0 bottom-0"></div>
        <Image
          layout="fill"
          objectFit="content"
          alt="booknetic"
          src="/assets/booknetic.png"
        />
      </ContainerScroll>
      <h3 className=" md:mt-24 font-bold text-2xl font-onest text-[#64698e] leading-7 text-center">
        Application Windows & Mac
      </h3>
    </div>
  );
};

export default ScrolledCard;
