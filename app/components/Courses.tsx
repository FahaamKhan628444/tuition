"use client";

import { motion } from "framer-motion";

export default function Courses() {
  const courses = [
    {
      title: "Class 12",
      desc: "Complete preparation with concept clarity & board focus",
    },
    {
      title: "Class 11",
      desc: "Strong foundation building for higher studies",
    },
    {
      title: "Class 10",
      desc: "Maths, Science, English, S.ST (PSEB, CBSE & ICSE)",
    },
    {
      title: "Class 9",
      desc: "Maths, Science, English, S.ST (PSEB, CBSE & ICSE)",
    },
    {
      title: "Class 8",
      desc: "Maths, Science, English, S.ST (PSEB, CBSE & ICSE)  ",
    },
  ];

  return (
    <section id="courses" className="py-24 px-6 bg-dark text-white text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16">
        Courses Offer
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 
            hover:scale-105 hover:bg-primary/20 transition duration-300"
          >
            
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              {course.desc}
            </p>

            {/* CTA */}
            <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-medium group-hover:scale-105 transition">
              Enroll now
            </button>

          </motion.div>
        ))}

      </div>

    </section>
  );
}