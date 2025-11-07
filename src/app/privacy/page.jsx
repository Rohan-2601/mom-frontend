"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-300 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-400 mb-10"
        >
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 leading-relaxed"
        >
          <p>
            At <span className="text-indigo-400 font-medium">MoM.AI</span>, your privacy matters to us. 
            We only collect the information necessary to provide our service — 
            and we’ll never sell, share, or misuse your data.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">1. Information We Collect</h2>
          <p>
            We collect only what you provide — such as your name and email address when you join our early access waitlist.
            For future features involving meeting summaries, your uploaded files or meeting data will always remain private 
            and will never be shared externally.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">2. How We Use Your Data</h2>
          <p>
            We use your information solely to communicate updates, provide access to MoM.AI, and improve our service experience. 
            No unnecessary tracking, no intrusive ads — just better meetings.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">3. Data Security</h2>
          <p>
            All stored data is encrypted and handled with industry-grade security measures.
            We partner only with trusted providers like MongoDB and Render for infrastructure.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">4. Cookies</h2>
          <p>
            We may use minimal cookies to enhance performance and remember user preferences.
            You can disable cookies anytime in your browser settings.
          </p>

          {/* <h2 className="text-2xl font-semibold text-white mt-8 mb-2">5. Contact Us</h2>
          <p>
            Have questions about your data? Drop us a message at{" "}
            <a href="mailto:team.momai@gmail.com" className="text-indigo-400 hover:underline">
              team.momai@gmail.com
            </a>
          </p> */}

          <p className="text-gray-500 mt-10 border-t border-gray-800 pt-6">
            © {new Date().getFullYear()} MoM.AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
