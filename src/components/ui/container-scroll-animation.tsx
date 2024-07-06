import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1.05] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const smoothRotate = useSpring(rotate, { stiffness: 300, damping: 25 });
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 25 });
  const smoothTranslateY = useSpring(translateY, {
    stiffness: 300,
    damping: 25,
  });

  // Debugging: Log values
  console.log("rotate:", rotate.get());
  console.log("scale:", scale.get());
  console.log("translateY:", translateY.get());

  return (
    <div className="flex items-center justify-center relative p-2">
      <div
        className="pb-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
        ref={containerRef}
      >
        <Header translateY={smoothTranslateY} titleComponent={titleComponent} />
        <Card
          rotate={smoothRotate}
          translateY={smoothTranslateY}
          scale={smoothScale}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translateY, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translateY,
  children,
}: {
  rotate: any; // Adjust MotionValue type as needed
  scale: any; // Adjust MotionValue type as needed
  translateY: any; // Adjust MotionValue type as needed
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl overflow-hidden -mt-12 mx-auto h-[20rem] md:h-[40rem] w-full border-[16px] border-[#64698E] p-2 md:p-6 bg-[#222222] rounded-[20px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
