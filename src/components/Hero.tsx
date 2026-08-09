'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start pt-60 md:pt-72 pb-16 px-4 overflow-hidden text-center"
    >
      {/* Background Watercolor Floral Illumination Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-[#FAF8F5] pointer-events-none z-0" />

      {/* Top Floral Banner Border (Positioned at the top without overlapping text) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-64 md:h-72 pointer-events-none z-10 opacity-100 overflow-hidden"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at top, #000 58%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse at top, #000 58%, transparent 100%)',
        }}
      >
        <Image
          src="/hero_floral_top_1785851827947.jpg"
          alt="Luxury Floral Border Top"
          fill
          className="object-cover object-top mix-blend-multiply"
          priority
        />
        {/* Soft fade out at bottom of floral banner */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#FAF8F5]/80 to-transparent" />
      </motion.div>

      {/* Hero Content Container (Padded top so text starts completely below the floral banner) */}
      <div className="relative z-20 max-w-3xl mx-auto space-y-6">
        {/* Islamic Invocation Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-1.5"
        >
          <p className="text-sm md:text-base font-body italic text-[#2E2E2E] font-medium">
            In the name of Allah the most beneficent and merciful.
          </p>
        </motion.div>

        {/* Host Parents Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1 py-1"
        >
          <h3 className="font-heading text-2xl md:text-4xl text-[#6E7458] font-bold tracking-wide">
            Mrs. & Mr.  Ovias Siraj
          </h3>
          <p className="font-body text-base md:text-lg text-[#2E2E2E]/90 max-w-xl mx-auto leading-relaxed font-medium">
            Solicit your esteemed presence with your family on the occasion of the
          </p>
        </motion.div>

        {/* Big Script 'Wedding' Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="py-1"
        >
          <h2 className="font-script text-6xl md:text-8xl text-[#2E2E2E] font-normal drop-shadow-sm">
            Wedding
          </h2>
          <p className="font-body text-xs md:text-sm text-[#6E7458] tracking-widest uppercase mt-1 font-semibold">
            of our daughter
          </p>
        </motion.div>

        {/* Bride Name & Family Lineage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="space-y-2 py-2"
        >
          <h1 className="font-pinyon text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-gradient font-normal drop-shadow-sm px-2 leading-tight">
            Zoya Ovias
          </h1>
          <div className="font-body text-xs md:text-sm text-[#2E2E2E]/90 space-y-0.5 leading-relaxed max-w-lg mx-auto font-medium">
            <p className="text-[#6E7458] font-semibold">
              Daughter of Mr. Ovias Siraj and Mrs. Yasmeen Ovias
            </p>
            <p>Paternal Grand D/O Late Siraj Haji</p>
            <p>Maternal Grand D/O Anwar Basha Mooktini</p>
          </div>
        </motion.div>

        {/* Gold & Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="py-1"
        >
          <span className="font-script text-6xl md:text-7xl text-[#8A6110] font-semibold drop-shadow-[0_3px_8px_rgba(184,134,11,0.45)] block leading-none">
            &
          </span>
        </motion.div>

        {/* Groom Name & Family Lineage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="space-y-2 py-2"
        >
          <h1 className="font-pinyon text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-gradient font-normal drop-shadow-sm px-2 leading-tight">
            Mohammed Ayaan
          </h1>
          <div className="font-body text-xs md:text-sm text-[#2E2E2E]/90 leading-relaxed max-w-lg mx-auto font-medium">
            <p className="text-[#6E7458] font-semibold">
              Son of Dr. Atiq Mohammed Yusuf Hakim and Mrs. Sabiha Atiq Hakim
            </p>
            <p>Paternal Grand S/O Late Mohammed Yusuf A. Hakim </p>
            <p>Maternal Grand S/O Mr. Zaheer A. Khan</p>
          </div>
        </motion.div>

        {/* Quranic Blessing Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-card max-w-xl mx-auto p-6 rounded-2xl border border-[#B8860B]/20 mt-6"
        >
          <p className="font-body italic text-sm md:text-base text-[#2E2E2E]/90 leading-relaxed">
            &ldquo;And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your hearts.&rdquo;
          </p>
          <span className="block mt-2 font-heading text-xs uppercase tracking-widest text-[#B8860B]">
            Surah Ar-Rum (30:21)
          </span>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="pt-4"
        >
          <a
            href="#events-schedule"
            className="mx-auto flex h-20 w-full max-w-[28rem] items-center justify-center rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] px-6 text-center font-heading text-sm md:text-base uppercase tracking-widest text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#FFF]/40"
          >
            Explore Ceremonies & Schedule
          </a>
        </motion.div>
      </div>


    </section>
  );
}


//comment