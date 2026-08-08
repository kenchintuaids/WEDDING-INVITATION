'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, MapPin, Navigation, Sparkles } from 'lucide-react';

const scheduleEvents = [
  {
    id: 'nikah',
    title: 'Nikah',
    subtitle: 'Solemnization of marriage under divine blessings',
    date: 'Saturday - September 26, 2026',
    time: 'After Maghrib Prayer at 6:45 PM',
    venue: 'iLeaf Grand Banquet, Vashi',
    mapLink: 'https://maps.app.goo.gl/nzsce669Cjb2aL1RA',
    caricature: '/Nikah.jpg',
    themeBg: 'from-[#1A2218] via-[#2A3428] to-[#121811]', // Royal dark starry night
    textColor: 'text-[#FAF8F5]',
    accentColor: 'text-gold-gradient',
    borderColor: 'border-[#B8860B]/40',
    badgeClass: 'bg-white/20 text-[#FAF8F5] backdrop-blur-md border-white/30',
    iconColor: 'text-[#B8860B]',
    buttonClass: 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white shadow-md hover:shadow-xl',
  },
  {
    id: 'valima',
    title: 'Valima',
    subtitle: 'Celebratory wedding reception & royal feast',
    date: 'Sunday - September 27, 2026',
    time: '7:00 PM Onwards',
    venue: 'CIDCO Auditorium And Convention Centre 1st Floor, Vashi',
    mapLink: 'https://maps.app.goo.gl/rRCcQZ1sY9KySJWi9',
    caricature: '/Valima.jpg',
    themeBg: 'from-[#FFF3BF] via-[#D4AF37] to-[#9B6A10]',
    textColor: 'text-[#3E2B0B]',
    accentColor: 'text-[#4B3208]',
    borderColor: 'border-[#D4AF37]/70',
    badgeClass: 'bg-[#FFF8DC]/60 text-[#4B3208] backdrop-blur-md border-[#8C5E08]/25',
    iconColor: 'text-[#5A3F19]',
    buttonClass: 'bg-gradient-to-r from-[#4B3208] to-[#7A4E08] text-[#FFF7D7] shadow-lg hover:shadow-xl hover:from-[#3A2606] hover:to-[#6C4306]',
  },
];

export default function CaricatureEventsSchedule() {
  return (
    <section id="events-schedule" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="block mb-4 font-heading text-sm md:text-base tracking-widest text-[#B8860B] uppercase">
          Ceremonies & Functions
        </span>
        <h2 className="font-script text-5xl md:text-6xl leading-[1.15] text-[#6E7458]">
          Wedding Schedule
        </h2>
        <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto" />
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
              event.textColor
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Caricature Art Illustration Column */}
              <div className="md:col-span-5 relative min-h-[420px] md:min-h-[520px] w-full overflow-hidden">
                <Image
                  src={event.caricature}
                  alt={event.title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Event Details Content Column */}
              <div className="md:col-span-7 p-6 md:p-10 space-y-8">
                <div>
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-base md:text-lg font-heading uppercase tracking-widest border ${event.badgeClass}`}>
                      <Sparkles className={`w-4 h-4 ${event.iconColor}`} />
                      {event.date}
                    </span>
                  </div>
                  <h3 className={`mb-3 pt-1 pb-2 font-script text-5xl md:text-6xl leading-[1.25] font-normal ${event.accentColor}`}>
                    {event.title}
                  </h3>
                  <p className="font-body text-sm md:text-base leading-relaxed opacity-80 italic">
                    {event.subtitle}
                  </p>
                </div>

                <div className="space-y-4 pt-1 font-body text-base md:text-lg">
                  <div className="flex items-center gap-3.5">
                    <Clock className={`w-5 h-5 ${event.iconColor} shrink-0`} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <MapPin className={`w-5 h-5 ${event.iconColor} shrink-0 mt-0.5`} />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full font-heading text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all ${event.buttonClass}`}
                  >
                    <Navigation className="w-5 h-5" />
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
