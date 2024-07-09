"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const scaleDimensions = isMobile ? [0.8, 1.05] : [1.05, 1];

    gsap.fromTo(
      cardRef.current,
      {
        rotationX: 30,
        scale: scaleDimensions[0],
        y: 100,
      },
      {
        rotationX: 0,
        scale: scaleDimensions[1],
        y: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
  }, [isMobile]);

  return (
    <div className="flex items-center justify-center relative p-2">
      <div
        className="pb-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
        ref={containerRef}
      >
        <Header titleComponent={titleComponent} />
        <Card ref={cardRef}>{children}</Card>
      </div>
    </div>
  );
};

const Header = ({ titleComponent }: { titleComponent: any }) => {
  return <div className="max-w-5xl mx-auto text-center">{titleComponent}</div>;
};

const Card = React.forwardRef(
  (props: { children: React.ReactNode }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="max-w-6xl overflow-hidden -mt-12 mx-auto h-56 md:h-[40rem] w-[90%] border-8 md:border-[16px] border-[#64698E] p-2 md:p-6 bg-[#222222] rounded-[20px] shadow-2xl"
      >
        <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
          {props.children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default ContainerScroll;
