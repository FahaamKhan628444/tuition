export default function Features() {
  const features = [
    {
      title: "Special Attention",
      desc: "1:25 student ratio for better focus",
      icon: "🎯",
    },
    {
      title: "Small Batches",
      desc: "Personal attention for each student",
      icon: "👥",
    },
    {
      title: "Weekly Tests",
      desc: "Track your performance regularly",
      icon: "📝",
    },
    {
      title: "PYQ Practice",
      desc: "Previous year questions for exam mastery",
      icon: "📚",
    },
    {
      title: "NCERT Focus",
      desc: "Strong base with NCERT-based learning",
      icon: "📖",
    },
    {
      title: "Board Exam Prep",
      desc: "Complete preparation for top scores",
      icon: "🏆",
    },
  ];

  return (
    <section className="py-24 px-6 bg-dark text-white text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16">
        Why Choose Us
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 
            hover:scale-105 hover:bg-primary/20 transition duration-300 cursor-pointer"
          >
            
            {/* Icon */}
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300">
              {feature.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}