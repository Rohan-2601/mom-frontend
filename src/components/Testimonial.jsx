// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// export default function Testimonial() {
//   const testimonials = [
//     {
//       quote:
//         "Soon, teams around the world will stop writing meeting notes — and start letting MoM.AI do it for them.",
//       name: "— The Future",
//       designation: "Coming from early adopters",
//       src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop",
//     },
//     {
//       quote:
//         "In a few months, someone will upload a 60-minute call and get a perfect summary in seconds. We’re building for that person.",
//       name: "— MoM.AI Team",
//       designation: "We’re not guessing. We’re preparing.",
//       src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
//     },
//     {
//       quote:
//         "This space is empty for now — but soon, it’ll be filled with real voices who never take manual notes again.",
//       name: "— Placeholder for You",
//       designation: "Join our waitlist, be the first one here.",
//       src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop",
//     },
//     {
//       quote:
//         "We believe the next generation of teams won’t *remember* what it felt like to take notes manually. That’s the mission.",
//       name: "— The Builders of MoM.AI",
//       designation: "Still coding, still caffeinated.",
//       src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1000&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <section className="bg-gray-900 border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-4">
//           What Teams Say About <span className="text-indigo-400">MoM.AI</span>
//         </h2>
//         <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
//           Real feedback from early adopters using MoM.AI to automate meeting summaries,
//           transcriptions, and task tracking.
//         </p>
//         <AnimatedTestimonials testimonials={testimonials} autoplay />
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { MessageCircle, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "If this works as promised, I’ll delete my Notion meeting notes forever.",
      name: "Early Access Signup",
    },
    {
      quote: "Finally, an AI that actually listens — not just records.",
      name: "Future Beta Tester",
    },
    {
      quote: "Meetings might stop being nightmares. I’m cautiously optimistic.",
      name: "Probably Someone Tired",
    },
    {
      quote: "The idea of an AI attending my meetings so I don’t have to… beautiful chaos.",
      name: "Developer, Dreaming Big",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-gray-900 border-t border-gray-800 py-28 sm:py-36 overflow-hidden"
    >
      {/* Background gradients for mood */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-transparent to-gray-900 blur-3xl opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[70rem] h-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-600/10 via-purple-700/10 to-transparent blur-[120px] opacity-40"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-center mb-3">
            <MessageCircle className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What People Are Saying
          </h2>
          <p className="text-gray-400 mt-3 text-base sm:text-lg">
            Real quotes? Not yet. Real excitement? Absolutely.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/60 border border-gray-700 hover:border-indigo-500/70 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] rounded-2xl p-8 text-left transition-all duration-300 group overflow-hidden"
            >
              {/* Glow accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating quote mark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-500/20" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-gray-200 text-lg leading-relaxed mb-4 italic">
                  “{t.quote}”
                </p>
                <p className="text-sm text-indigo-300 font-medium tracking-wide">— {t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
