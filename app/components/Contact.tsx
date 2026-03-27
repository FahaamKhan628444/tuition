"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6 bg-dark text-white text-center">

      <h2 className="text-4xl font-bold mb-6">
        Contact Us
      </h2>

      <p className="text-gray-400 mb-12">
        Fill the form and we’ll get back to you soon
      </p>

      <form
        action="https://formspree.io/f/xzdkzlyn"
        method="POST"
        onSubmit={() => setStatus("Submitting...")}
        className="max-w-3xl mx-auto grid gap-6"
      >

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          className="p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
        />

        {/* Class */}
        <input
          type="text"
          name="class"
          placeholder="Class (e.g. 9th, 10th, 11th, 12th Arts)"
          required
          className="p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Subjects you want to studied."
          rows={4}
          className="p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-primary py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Submit
        </button>

      </form>

      {/* Status */}
      {status && <p className="mt-6 text-green-400">{status}</p>}

    </section>
  );
}