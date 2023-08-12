import React from "react";
import { motion } from "framer-motion";
import { Bowlby_One } from "next/font/google";
import Image from "next/image";
import img from "../assets/dogBG.png";
const font = Bowlby_One({ subsets: ["latin"], weight: ["400"] });

const Home = () => {
  return (
    <div className="relative">
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={img}
        alt="background.jpg"
      />
      <motion.div
        animate={{ opacity: 1, y: "20vh" }} // Adjusted y value for better responsiveness
        initial={{ opacity: 0 }}
        className={`${font.className} absolute inset-x-0 bottom-[35rem] text-[15rem] text-center`} // Adjusted bottom and font size
      >
        FURTASTIC
      </motion.div>
    </div>
  );
};

export default Home;
