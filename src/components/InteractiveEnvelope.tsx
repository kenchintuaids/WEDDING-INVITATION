'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface EnvelopeProps {
  onOpen: () => void;
  brideName?: string;
  groomName?: string;
}

export default function InteractiveEnvelope({
  onOpen,
  brideName = 'Zoya',
  groomName = 'Ayaan',
}: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTap = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] px-4 overflow-hidden select-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/90 to-[#F4EDE5] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_12%,rgba(212,175,55,0.12),transparent_24%),radial-gradient(circle_at_20%_30%,rgba(110,116,88,0.08),transparent_18%),radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.08),transparent_20%)]" />

        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute top-0 left-0 right-0 h-40 md:h-56 pointer-events-none opacity-80"
        >
          <Image
            src="/hero_floral_top_1785851827947.jpg"
            alt="Floral border"
            fill
            className="object-cover object-top mix-blend-multiply"
            priority
          />
          <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-4xl px-2 pt-20 md:pt-24">
          <motion.div
            onClick={handleTap}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            animate={isOpen ? { y: -10, opacity: 0.15 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="relative cursor-pointer group overflow-hidden rounded-[2.5rem] border border-[#E7D7CA] bg-white/55 shadow-[0_20px_60px_rgba(140,120,104,0.14)] backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-[#FBF4EE]/60 to-[#F3E7DB]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_15%_20%,rgba(214,175,55,0.12),transparent_18%),radial-gradient(circle_at_85%_85%,rgba(110,116,88,0.08),transparent_18%)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.3)_0_2px,transparent_2px_16px)] opacity-40" />

            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-center text-center space-y-8">
              <div className="space-y-3 max-w-2xl">
                <p className="font-heading text-xs md:text-sm uppercase tracking-[0.35em] text-[#6E7458]">
                  Bismillah
                </p>
                <p className="font-body italic text-sm md:text-base text-[#2E2E2E]/75">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </p>
              </div>

              <div className="space-y-3 max-w-3xl">
                <p className="font-heading text-[0.65rem] md:text-xs uppercase tracking-[0.35em] text-[#B8860B]">
                  Requesting your presence
                </p>
                <h2 className="inline-flex items-center justify-center rounded-full border border-[#D8C08A]/55 bg-white/70 px-6 py-3 font-heading text-3xl md:text-5xl uppercase tracking-[0.18em] text-[#8C6A18] shadow-[0_12px_30px_rgba(184,134,11,0.14)] backdrop-blur-sm">
                  You&apos;re Invited
                </h2>
                <p className="font-body text-sm md:text-base text-[#2E2E2E]/80 max-w-xl mx-auto leading-relaxed">
                  Join us as we celebrate the wedding of <span className="font-pinyon text-[1.15em] leading-none">{brideName}</span> and <span className="font-pinyon text-[1.15em] leading-none">{groomName}</span> with family, blessings, and joy.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <div className="rounded-full border border-[#B8860B]/20 bg-white/70 px-4 py-2 text-[0.65rem] md:text-xs uppercase tracking-[0.28em] text-[#6E7458]">
                  Nikah
                </div>
                <div className="rounded-full border border-[#B8860B]/20 bg-white/70 px-4 py-2 text-[0.65rem] md:text-xs uppercase tracking-[0.28em] text-[#6E7458]">
                  Valima
                </div>
              </div>

              <motion.div
                animate={isOpen ? { scale: 0.86, opacity: 0.55 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="relative mt-2 w-20 h-20 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] shadow-[0_12px_24px_rgba(116,86,45,0.24)] border border-white/70 flex items-center justify-center"
              >
                <div className="absolute inset-1 rounded-full border border-[#A27D45]/40" />
                <div className="w-14 h-14 rounded-full border border-[#8F6A34]/45 flex items-center justify-center bg-[#F7E9C4]/70">
                  <span className="font-heading font-bold text-xs uppercase text-[#5A3F19] tracking-[0.3em]">
                    Open
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tap Prompt Text */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-8 text-center space-y-1 relative z-10"
        >
          <p className="font-heading text-xs uppercase tracking-widest text-[#6E7458]/80">
            Tap the seal to open your invitation
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
