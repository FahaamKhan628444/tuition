"use client";

import CountUp from "react-countup";

export default function Results() {
  return (
    <section className="py-24 px-6 bg-dark text-white text-center">
      
      <h2 className="text-4xl font-bold mb-16">
        Our Results Speak
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20">
          <h3 className="text-5xl font-bold text-accent">
            <CountUp end={95} duration={2} />%
          </h3>
          <p className="mt-3 text-gray-300">Students scored above 80%</p>
        </div>

        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20">
          <h3 className="text-5xl font-bold text-accent">
            <CountUp end={80} duration={2} />%
          </h3>
          <p className="mt-3 text-gray-300">Students scored above 90%</p>
        </div>

        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20">
          <h3 className="text-5xl font-bold text-accent">
            <CountUp end={5000} duration={2} />+
          </h3>
          <p className="mt-3 text-gray-300">Happy Students</p>
        </div>

      </div>
    </section>
  );
}