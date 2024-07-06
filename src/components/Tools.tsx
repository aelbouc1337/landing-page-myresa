"use client";
import React, { useState } from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { MdOutlineFlag } from "react-icons/md";

const Tools = () => {
  const [hovered, setHovered] = useState(0);
  return (
    <section className="bg-gradient-to-r from-[#F0E9FD] via-white  to-[#FEEBF2] flex w-full flex-col gap-6 justify-center py-20 items-center font-onest">
      <span className="bg-[#FFEBEB] text-[#000c60] text-sm font-bold rounded-full block px-6 py-3">
        Découvrez MyResa
      </span>
      <h3 className="font-bold md:w-[60%] text-[56px] leading-none text-[#000c60] text-center">
        Les outils les plus innovants sont désormais à portée de clic
      </h3>
      <div className="bg-white bg-opacity-50 rounded-2xl w-full max-w-[1200px] font-onest">
        <div className="h-full w-full grid md:grid-cols-2">
          {/* Card */}
          <div className="py-20 px-10 w-full flex md:border-r-2 border-b-2 flex-col md:px-20 md:py-20 justify-center items-center">
            <div
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(0)}
              className="w-full h-full flex items-center justify-center flex-col gap-5 hover:scale-100 hover:-translate-y-3 transition-all duration-300"
            >
              <div className="w-24 h-24 animate-gradientChange rounded-full flex items-center justify-center text-white">
                <HiOutlineLightningBolt size={40} />
              </div>
              <h4 className="font-bold text-2xl leading-7 text-center text-[#000c60]">
                Gérer efficacement votre établissement
              </h4>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Gestion du staff, des ressources, des compétences, des
                réservations, des emplois du temps individuels, des jours fériés
                …
              </p>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Prise en charge des abonnements, des packs, des cartes cadeaux,
                des codes promo, des points fidélité, de caisse, de stock, de
                facturation …
              </p>
              {hovered == 1 && (
                <div className="mt-5 animate-slideIn">
                  <button className="flex items-center gap-3 font-medium text-base leading-7 text-[#000c60] hover:scale-110 transition-all duration-300">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card */}
          <div className="py-20 px-10 w-full flex border-r-2 border-b-2 md:border-b-0 flex-col md:px-20 md:py-20 justify-center items-center">
            <div className="w-full h-full flex items-center justify-center flex-col gap-5 hover:scale-100 hover:-translate-y-3 transition-all duration-300">
              <div className="w-24 h-24 animate-gradientChange rounded-full flex items-center justify-center text-white">
                <HiOutlineLightningBolt size={40} />
              </div>
              <h4 className="font-bold text-2xl leading-7 text-center text-[#000c60]">
                Gérer efficacement votre établissement
              </h4>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Gestion du staff, des ressources, des compétences, des
                réservations, des emplois du temps individuels, des jours fériés
                …
              </p>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Prise en charge des abonnements, des packs, des cartes cadeaux,
                des codes promo, des points fidélité, de caisse, de stock, de
                facturation …
              </p>
            </div>
          </div>
          {/* Card */}
          <div className="py-20 px-10 w-full flex border-r-2 border-b-2 md:border-b-0 flex-col md:px-20 md:py-20 justify-center items-center">
            <div className="w-full h-full flex items-center justify-center flex-col gap-5 hover:scale-100 hover:-translate-y-3 transition-all duration-300">
              <div className="w-24 h-24 animate-gradientChange rounded-full flex items-center justify-center text-white">
                <HiOutlineLightningBolt size={40} />
              </div>
              <h4 className="font-bold text-2xl leading-7 text-center text-[#000c60]">
                Gérer efficacement votre établissement
              </h4>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Gestion du staff, des ressources, des compétences, des
                réservations, des emplois du temps individuels, des jours fériés
                …
              </p>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Prise en charge des abonnements, des packs, des cartes cadeaux,
                des codes promo, des points fidélité, de caisse, de stock, de
                facturation …
              </p>
            </div>
          </div>
          {/* Card */}
          <div className="py-20 px-10 w-full flex border-r-2 border-b-2 md:border-b-0 flex-col md:px-20 md:py-20 justify-center items-center">
            <div className="w-full h-full flex items-center justify-center flex-col gap-5 hover:scale-100 hover:-translate-y-3 transition-all duration-300">
              <div className="w-24 h-24 animate-gradientChange rounded-full flex items-center justify-center text-white">
                <HiOutlineLightningBolt size={40} />
              </div>
              <h4 className="font-bold text-2xl leading-7 text-center text-[#000c60]">
                Gérer efficacement votre établissement
              </h4>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Gestion du staff, des ressources, des compétences, des
                réservations, des emplois du temps individuels, des jours fériés
                …
              </p>
              <p className="text-[#424a8f] text-center text-xl leading-7">
                Prise en charge des abonnements, des packs, des cartes cadeaux,
                des codes promo, des points fidélité, de caisse, de stock, de
                facturation …
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
