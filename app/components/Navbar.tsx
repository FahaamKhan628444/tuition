"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 px-6 py-4 flex justify-between items-center"
    >
      <h1 className="text-xl font-bold text-white">Khan Sir Tuitions</h1>

      <div className="hidden md:flex gap-8 text-white">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#courses">Courses</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-6 bg-black/80 backdrop-blur-lg text-white p-6 rounded-xl flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </motion.nav>
  );
}