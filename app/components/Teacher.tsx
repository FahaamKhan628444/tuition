"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Teacher() {
  return (
    <section id="about" className="py-24 px-6 bg-dark text-white text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6">
        Learn from the Best Teacher
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        Our teaching approach focuses on concept clarity, smart strategies,
        and consistent practice to help students achieve top results.
      </p>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10"
      >
        {/* Teacher Name */}
        <h3 className="text-3xl font-bold text-primary">
          Mr. Wazad Khan (Khan Sir)
        </h3>

        <p className="mt-2 text-gray-300">
          M.A Mathematics, B.Ed | 25+ Years Experience
        </p>

        {/* Description */}
        <p className="mt-6 text-gray-300 leading-relaxed">
          With over a decade of experience, I have guided thousands of students
          to score above 90% in board exams. My teaching focuses on strong fundamentals, problem-solving
          skills, and exam-oriented preparation.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          
          <div>
            <h4 className="text-4xl font-bold text-accent">
              <CountUp end={25} />+
            </h4>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-accent">
              <CountUp end={5000} />+
            </h4>
            <p className="text-gray-400">Students Taught</p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-accent">
              <CountUp end={95} />%
            </h4>
            <p className="text-gray-400">Success Rate</p>
          </div>

        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-primary px-8 py-3 rounded-full text-white font-semibold"
        >
          Enroll now
        </motion.button>
      </motion.div>

    </section>
  );
}