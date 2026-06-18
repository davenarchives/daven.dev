"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileSidebar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && theme === "dark";

  return (
    <div className="sticky top-[calc(50svh-160px)] z-10 w-[320px] h-[320px] hidden lg:block">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full rounded-full overflow-hidden"
      >
         <Image 
            src={isDarkMode ? "/assets/theme/darkmode.png" : "/assets/theme/lightmode.png"} 
            alt="Daven Austhine Sumagang"
            fill
            className="object-cover"
            priority
          />
      </motion.div>
    </div>
  );
}
