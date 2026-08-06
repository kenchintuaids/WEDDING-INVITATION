'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string; // e.g., '2026-09-26T10:00:00'
}

export default function CountdownTimer({ targetDate = '2026-09-26T10:00:00' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 rounded-3xl border border-[#B8860B]/30 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#F3E5AB] to-[#B8860B]" />
        
        <h3 className="font-heading text-xl md:text-2xl text-[#6E7458] tracking-widest uppercase mb-6 font-semibold">
          Counting Down To The Blessed Day
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, idx) => (
            <div
              key={unit.label}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-[#B8860B]/20 shadow-inner flex flex-col items-center justify-center hover:border-[#B8860B]/60 transition-colors"
            >
              <span className="font-heading text-4xl md:text-5xl text-gold-gradient font-bold tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="font-body text-xs md:text-sm text-[#2E2E2E]/70 uppercase tracking-widest mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
