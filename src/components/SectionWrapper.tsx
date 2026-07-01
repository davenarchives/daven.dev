"use client";

import { motion } from "framer-motion";

export function SectionWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ amount: 0.2, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
