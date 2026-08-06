'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const timelineEvents = [
  {
    time: '04:00 PM',
    date: '26 September 2026',
    title: 'Sacred Nikah',
    description: 'The solemnization of vows under the divine blessings of Allah (SWT) followed by traditional feast.',
    color: 'border-[#B8860B]',
  },
  {
    time: '05:00 PM - 11:00 PM',
    date: '27 September 2026',
    title: 'Grand Valima',
    description: 'A celebratory reception dinner hosting family and friends with royal hospitality.',
    color: 'border-[#6E7458]',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-24">
      <div className="text-center space-y-3 mb-16">
        <span className="font-heading text-xs tracking-widest text-[#B8860B] uppercase">
          Wedding Schedule
        </span>
        <h2 className="font-heading text-3xl md:text-5xl text-[#2E2E2E] font-semibold">
          Ceremony Timeline
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto" />
      </div>

      <div className="relative border-l-2 border-[#B8860B]/30 ml-4 md:ml-32 space-y-12">
        {timelineEvents.map((event, idx) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Node Ring */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#FAF8F5] border-2 border-[#B8860B] flex items-center justify-center shadow-md group-hover:scale-125 group-hover:bg-[#B8860B] transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B] group-hover:text-white transition-colors" />
            </div>

            {/* Date Tag Left (Desktop view) */}
            <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
              <span className="font-heading text-xs uppercase tracking-widest text-[#6E7458] font-bold block">
                {event.date}
              </span>
              <span className="font-body text-xs text-[#2E2E2E]/60">
                {event.time}
              </span>
            </div>

            {/* Event Card Content */}
            <div className={`glass-card p-6 rounded-2xl border-l-4 ${event.color} shadow-lg hover:shadow-xl transition-shadow`}>
              <div className="md:hidden mb-2">
                <span className="font-heading text-xs text-[#B8860B] uppercase tracking-widest font-bold">
                  {event.date} &bull; {event.time}
                </span>
              </div>
              <h3 className="font-heading text-2xl text-[#2E2E2E] font-semibold flex items-center gap-2">
                {event.title}
                <Heart className="w-4 h-4 text-[#B8860B]/50 fill-[#B8860B]/20" />
              </h3>
              <p className="font-body text-sm text-[#2E2E2E]/80 mt-2 leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
