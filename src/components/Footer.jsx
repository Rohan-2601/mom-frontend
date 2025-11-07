"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 text-gray-400 overflow-hidden">
      {/* Subtle gradient glow on top */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
      />

      {/* Soft floating gradient background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-transparent blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl font-semibold text-white tracking-tight">
            MoM.<span className="text-indigo-400">AI</span>
          </h3>
          <p className="text-sm text-gray-500 mt-1">
          Transforming conversations into clarity and action.
          </p>
        </motion.div>
{/* 
       
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          <li>
            <a
              href="#how-it-works"
              className="hover:text-indigo-400 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="mailto:team.momai@gmail.com"
              className="hover:text-indigo-400 transition-all duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="hover:text-indigo-400 transition-all duration-300"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="hover:text-indigo-400 transition-all duration-300"
            >
              Terms
            </a>
          </li>
        </motion.ul> */}
        <motion.div
  aria-hidden="true"
  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-600/20 blur-[120px] rounded-full"
  animate={{ opacity: [0.2, 0.5, 0.2] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>


        {/* Credit */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 text-center md:text-right"
        >
          Built by{" "}
          <a
            href="https://github.com/Rohan-2601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 font-medium hover:underline transition-colors"
          >
            Rohan
          </a>{" "}
          with ☕ and a dream.
        </motion.p>
      </div>

      {/* Bottom line */}
      <div className="relative border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-medium">MoM.AI</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
