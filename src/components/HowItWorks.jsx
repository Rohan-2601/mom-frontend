"use client";

import { motion } from "framer-motion";
import { Calendar, Mic, FileText, Zap, Bot } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Calendar className="w-8 h-8 text-indigo-400" />,
      title: "1. Connect Your Calendar",
      desc: "MoM.AI syncs with your Google or Outlook calendar to detect upcoming meetings. You control which ones the AI should attend.",
    },
    {
      icon: <Mic className="w-8 h-8 text-indigo-400" />,
      title: "2. AI Joins and Listens in Real Time",
      desc: "Your MoM.AI agent quietly joins the meeting, listens to every speaker, understands context, and detects decisions as they happen.",
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: "3. Receive Instant Minutes & Action Items",
      desc: "Right after the meeting, MoM.AI delivers a structured summary — including key points, assigned tasks, and next steps — straight to your workspace or Slack.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-gray-900 border-t border-gray-800 py-28 sm:py-36 relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-gray-900"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
        >
          How It Works
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto"
        >
          MoM.AI doesn’t just summarize — it <span className="text-indigo-400 font-semibold">joins</span>, 
          <span className="text-indigo-400 font-semibold">listens</span>, and <span className="text-indigo-400 font-semibold">thinks</span>.  
          Here’s how your next meeting will work — without lifting a finger.
        </motion.p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/50 border border-gray-700 hover:border-indigo-500/60 rounded-2xl p-8 text-left shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300 group"
            >
              <div className="mb-5">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Future Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-28 max-w-3xl mx-auto bg-gray-800/40 border border-indigo-500/20 rounded-2xl p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent blur-3xl opacity-30" />
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <Zap className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Beyond Meetings: MoM.AI as Your Workflow Brain
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Soon, MoM.AI will sync with your tools like Notion, Linear, and HubSpot —  
              turning action items into tracked tasks and meeting notes into searchable knowledge.  
              It’s not just your meeting assistant — it’s your team’s collective memory.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
