"use client";

import { motion } from "framer-motion";

export default function MarqueeBar() {
  return (
    <div className="fixed top-16 w-full z-40 bg-primary text-white overflow-hidden">
      
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="whitespace-nowrap py-2 text-sm font-large"
      >
        🚀 Admission Open | 📚 Batch already started from 1st April, 2026 | 📞 Contact us at: +91- 9815478630 |
      </motion.div>

    </div>
  );
}
