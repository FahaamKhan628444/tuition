export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-6">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">
            Khan Sir Tuitions
          </h2>
          <p className="mt-4 text-gray-400">
            Helping students achieve top results with smart learning and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400">

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/qPY6MbXVA7KVyvcL6"
              target="_blank"
              className="block hover:text-white transition"
            >
              📍 Nabha, District Patiala, Punjab
            </a>

            {/* Phone */}
            <a
              href="tel:+919815478630"
              className="block hover:text-white transition"
            >
              📞 +91 98154 78630
            </a>

            {/* Email */}
            {/* <a
              href="mailto:info@edusmart.com"
              className="block hover:text-white transition"
            >
              ✉️ info@edusmart.com
            </a> */}

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Khan Sir Tuitions. All rights reserved.
      </div>

    </footer>
  );
}
