"use client";
import React, { useEffect, useState } from "react";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setAnnouncement(true);
    } else {
      setAnnouncement(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <div
      className={`${!announcement} ? "w-full h-9 bg-gradient-to-r from-[#D066A3] to-[#647AB9] flex justify-center items-center font-onest text-[10px]" : "hidden"`}
    >
      <span className="md:bg-white md:rounded-full  md:text-[10px] md:font-bold md:text-sm md:font-onest md:text-black md:leading-7 md:px-3 md:mr-3 font-onest font-medium text-sm">
        3 MOIS D'ÉVALUATION GRATUITE
      </span>
      <p className="md:hidden font-medium">, </p>
      <p className="ml-[0.15rem] font-medium text-sm">Sans engagement</p>
    </div>
  );
};

export default Announcement;
