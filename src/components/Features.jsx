"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Users,
  Search,
  Languages,
  Workflow,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
    title: "AI That Joins Your Meetings",
    description:
      "MoM.AI automatically attends your Zoom, Google Meet, or Teams calls — listens, understands, and takes notes while you focus on the real conversation.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-400" />,
    title: "Smart Workspaces for Teams",
    description:
      "Create shared spaces for projects or departments. Invite teammates, assign roles, and collaborate securely — all in one clean interface.",
  },
  {
    icon: <Workflow className="w-8 h-8 text-indigo-400" />,
    title: "Integrations That Just Work",
    description:
      "Connect MoM.AI with Notion, Linear, HubSpot, or Salesforce. Automatically sync action items, summaries, and follow-ups into your daily tools.",
  },
  {
    icon: <Search className="w-8 h-8 text-indigo-400" />,
    title: "Find Anything, Instantly",
    description:
      "Search through every word across your meetings with advanced filters — by date, duration, participants, or keywords — all lightning fast.",
  },
  {
    icon: <Languages className="w-8 h-8 text-indigo-400" />,
    title: "100+ Language Support",
    description:
      "Powered by Google Cloud Translation API, MoM.AI lets you view transcripts and summaries in over 100 languages — effortlessly global.",
  },
  {
    icon: <FileText className="w-8 h-8 text-indigo-400" />,
    title: "AI Summaries That Feel Human",
    description:
      "Every meeting recap sounds like it was written by your smartest teammate — not a robot. Structured, readable, and instantly actionable.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gray-900 text-white py-24 sm:py-32 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Meet the Future of Meetings
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          MoM.AI isn’t just a summarizer — it’s an intelligent teammate.  
          From joining live calls to syncing insights across your tools,  
          it helps your team stay aligned, focused, and truly productive.
        </motion.p>

        {/* Features grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-left hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/0 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-700 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
