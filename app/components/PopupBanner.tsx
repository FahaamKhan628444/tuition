"use client";

import { useEffect, useState } from "react";

export default function PopupBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // show on load
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

      {/* Popup Box */}
      <div className="relative bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Banner Image */}
       <img
  src="/banner.jpg"
  alt="Admission Open"
  className="w-full h-auto cursor-pointer"
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
/>

      </div>

    </div>
  );
}