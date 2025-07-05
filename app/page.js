"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    if (!text.trim()) return;
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main className="bg-[#254f1a] min-h-screen text-white font-sans pt-[30px] md:pt-[90px]">

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] px-4 sm:px-6 md:px-[8vw] py-12 md:py-16 gap-8 md:gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-yellow-300 font-bold text-3xl sm:text-4xl md:text-6xl leading-snug">
            Everything you<br /> are. In one,<br /> simple link in bio.
          </h1>

          <p className="text-yellow-100 text-sm sm:text-base md:text-lg max-w-xl">
            Join 50M+ people using Bittree for their link in bio. One link to help you share everything you create, curate, and sell from your Instagram, TikTok, Twitter, YouTube, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-4 py-2 w-full sm:max-w-[250px] text-white font-bold bg-green-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 shadow-inner"
              type="text"
              placeholder="Enter your handle"
            />
            <button
              onClick={createTree}
              className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2 font-semibold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Claim your Bittree
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <Image
            src="/home.png"
            alt="homepage"
            width={500}
            height={500}
            className="w-full max-w-[400px] bg-[#101f10] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 mix-blend-lighten object-cover"
          />
        </motion.div>
      </section>

      {/* Why Section */}
      <section className="bg-gradient-to-tr from-[#a21caf] to-[#e11d48] min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl"
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Why Choose Bittree?
          </h2>
          <p className="text-pink-100 text-sm sm:text-base md:text-lg leading-relaxed">
            Bittree empowers creators, influencers, and entrepreneurs to centralize their presence into one sleek, customizable page. Showcase your content, promote your products, track engagement, and grow your digital identity — all from one smart link.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
