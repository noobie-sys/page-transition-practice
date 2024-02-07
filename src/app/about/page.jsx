'use client'
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    
      <motion.div
      initial={{opacity : 0}}
      animate={{opacity:1}}
      transition={{delay : 1.2 , duration : 1}}
        className="flex min-h-screen flex-col items-center justify-between p-24 text-[8rem] font-[cursive]">
        <h1>Hello About </h1>
      </motion.div>
    
  );
};

export default About;
