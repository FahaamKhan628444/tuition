"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-dark">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Score Higher with
          <span className="block text-accent"> Best Learning</span>
        </h1>

        <p className="mt-6 text-gray-200">
          Join our tuition classes and achieve top results in boards exams.
        </p>

        <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold"
>
  Contact Us
</motion.button>

      </div>
    </section>
  );
}