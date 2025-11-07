"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-300 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Terms of Service
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
            Welcome to <span className="text-indigo-400 font-medium">MoM.AI</span>. 
            By accessing or using our service, you agree to these terms.
            Please read them carefully before using the platform.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">1. Service Overview</h2>
          <p>
            MoM.AI turns meetings into structured notes using AI. 
            You can upload recordings for transcription or summaries.
            In future updates, MoM.AI may attend live meetings to generate automated summaries.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">2. Your Responsibilities</h2>
          <p>
            You agree to use the platform responsibly, not upload harmful or copyrighted materials,
            and comply with all applicable data and privacy laws.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">3. Intellectual Property</h2>
          <p>
            All content, branding, and software related to MoM.AI are the property of the creators.
            You retain full ownership of your uploaded files and meeting content.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">4. Limitation of Liability</h2>
          <p>
            MoM.AI is provided “as-is.” While we aim for 99.9% accuracy and uptime, 
            we cannot guarantee perfection. We’re not liable for losses arising from 
            errors, downtime, or misuse of the platform.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">5. Termination</h2>
          <p>
            We reserve the right to suspend accounts that violate our terms or abuse the platform.
            You can stop using MoM.AI at any time.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-2">6. Changes to These Terms</h2>
          <p>
            We may update these terms as MoM.AI evolves. When we do, we’ll update the date above 
            and notify registered users via email.
          </p>

          {/* <h2 className="text-2xl font-semibold text-white mt-8 mb-2">7. Contact</h2>
          <p>
            For questions, reach out at{" "}
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
