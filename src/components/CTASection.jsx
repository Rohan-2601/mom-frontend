"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/waitlist`, {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
        setShowConfetti(true);
        if (audioRef.current) audioRef.current.play();
        setTimeout(() => setShowConfetti(false), 4000);
      } else {
        console.error("Submission failed:", data.error);
      }
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✨ Confetti animation (unchanged)
  useEffect(() => {
    if (!showConfetti) return;
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = 9999;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const colors = ["#6366F1", "#8B5CF6", "#F472B6", "#34D399", "#FBBF24"];
    const confettiCount = 120;
    const confetti = Array.from({ length: confettiCount }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight - window.innerHeight,
      w: Math.random() * 8 + 2,
      h: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 2 + 1,
      drift: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.8 + 0.2,
      gravity: Math.random() * 0.1 + 0.05,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach((p) => {
        p.y += p.speed;
        p.x += p.drift;
        p.rotation += 2;
        p.speed += p.gravity / 2;
        if (p.y > window.innerHeight) {
          p.y = -10;
          p.x = Math.random() * window.innerWidth;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      requestAnimationFrame(animate);
    };

    animate();
    const cleanup = () => document.body.removeChild(canvas);
    return cleanup;
  }, [showConfetti]);

  return (
    <section
      id="early-access"
      className="relative bg-gray-900 border-t border-gray-800 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl opacity-40"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Get Early Access to the Future of Meetings
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          Be among the first to experience{" "}
          <span className="text-indigo-400 font-semibold">MoM.AI</span> — the AI agent that attends your meetings,
          listens, understands, and delivers precise minutes, summaries, and action items automatically.
        </motion.p>

        {/* Form / success message */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-full bg-gray-800 text-gray-200 px-5 py-3 w-72 outline-none border border-gray-700 focus:border-indigo-500 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="rounded-full bg-gray-800 text-gray-200 px-5 py-3 w-72 outline-none border border-gray-700 focus:border-indigo-500 transition-all duration-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-block rounded-full bg-indigo-500 px-8 py-3 text-white text-base font-semibold shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:bg-indigo-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Joining..." : "Join the Waitlist"}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-6 bg-gray-800/40 border border-indigo-500/20 rounded-xl p-6 max-w-md mx-auto backdrop-blur-sm overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative z-10">
              <p className="text-white font-semibold text-lg mb-2">
                🎉 You’re officially in!
              </p>
              <p className="text-gray-400 text-sm">
                You’ll get early access to MoM.AI before public launch.  
                Expect one email from us — no spam, no noise, just pure AI magic.
              </p>
            </div>
          </motion.div>
        )}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mt-8"
        >
          The next era of meetings is autonomous — and you’re getting front-row access.
        </motion.p>
      </div>
    </section>
  );
}
