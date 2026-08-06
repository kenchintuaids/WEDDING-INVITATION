'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, MapPin, Navigation, Sparkles } from 'lucide-react';

const scheduleEvents = [
  {
    id: 'nikah',
    title: 'Sacred Nikah',
    subtitle: 'Solemnization of marriage under divine blessings',
    date: 'Sat - Sept 26, 2026',
    time: '04:00 PM Onwards',
    venue: 'iLeaf Grand Banguet Vashi',
    mapLink: 'https://maps.app.goo.gl/nzsce669Cjb2aL1RA',
    caricature: '/Nikah.jpg',
    themeBg: 'from-[#1A2218] via-[#2A3428] to-[#121811]', // Royal dark starry night
    textColor: 'text-[#FAF8F5]',
    isDark: true,
    accentColor: 'text-gold-gradient',
    borderColor: 'border-[#B8860B]/40',
  },
  {
    id: 'valima',
    title: 'Grand Valima',
    subtitle: 'Celebratory wedding reception & royal feast',
    date: 'Sun - Sept 27, 2026',
    time: '05:00 PM - 11:00 PM',
    venue: 'CIDCO Vashi Audi',
    mapLink: 'https://maps.app.goo.gl/rRCcQZ1sY9KySJWi9',
    caricature: '/Valima.jpg',
    themeBg: 'from-[#F2F5F0] via-white to-[#E8EFE5]',
    accentColor: 'text-[#6E7458]',
    borderColor: 'border-[#6E7458]/30',
  },
];

export default function CaricatureEventsSchedule() {
  return (
    <section id="events-schedule" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-heading text-xs tracking-widest text-[#B8860B] uppercase">
          Ceremonies & Functions
        </span>
        <h2 className="font-script text-5xl md:text-6xl text-[#6E7458]">
          Wedding Schedule
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto" />
      </div>

      {/* Stacked Caricature Cards */}
      <div className="space-y-12">
        {scheduleEvents.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`relative rounded-3xl overflow-hidden shadow-2xl border ${event.borderColor} bg-gradient-to-br ${event.themeBg} ${
              event.isDark ? 'text-[#FAF8F5]' : 'text-[#2E2E2E]'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              {/* Caricature Art Illustration Column */}
              <div className="md:col-span-5 relative h-72 md:h-[420px] w-full overflow-hidden">
                <Image
                  src={event.caricature}
                  alt={event.title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Event Details Content Column */}
              <div className="md:col-span-7 p-6 md:p-10 space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-heading uppercase tracking-widest bg-white/20 backdrop-blur-md border border-white/30">
                    <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                    {event.date}
                  </span>
                  <h3 className={`font-script text-4xl md:text-5xl font-normal ${event.accentColor}`}>
                    {event.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm opacity-80 italic">
                    {event.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-2 font-body text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-heading text-xs uppercase tracking-widest shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
