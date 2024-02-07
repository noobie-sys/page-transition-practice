"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <div
      
    >
      
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0  }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </div>
  );
}
