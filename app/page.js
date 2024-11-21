'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Description from "./components/description";
export default function Home({children}) {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname()
  const toggleVisibility = () => {
      setIsVisible(true);
     // Adjust the delay (in milliseconds) before the text fades back in
  };

  return (
    <>
       
      <AnimatePresence>
        <div key={pathname}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition :{delay:1, duration: 0.4, ease:'easeInOut' } }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"  
          />
          <Description/>
          {children}
      </div>
      </AnimatePresence>
    </>
  );
}
