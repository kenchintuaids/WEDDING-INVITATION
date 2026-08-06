'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation as NavIcon, Shirt } from 'lucide-react';

interface EventSectionProps {
  id: string;
  title: string;
  arabicTitle?: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapLink: string;
  dressCode: string;
  themeStyle: 'nikah' | 'valima';
}

export default function EventCard({
  id,
  title,
  arabicTitle,
  date,
  time,
  venue,
  address,
  mapLink,
  dressCode,
  themeStyle,
}: EventSectionProps) {
  // Calendar iCal generation helper
  const handleAddToCalendar = () => {
    const titleText = `Zoya and Ayaan Wedding - ${title}`;
    const details = `Join us for the ${title} ceremony of Zoya and Ayaan at ${venue}.`;
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      titleText
    )}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(address)}`;
    window.open(googleCalUrl, '_blank');
  };

  const getStyleClasses = () => {
    switch (themeStyle) {
      case 'nikah':
        return {
          badge: 'bg-[#FAF8F5] text-[#B8860B] border-[#B8860B]/40',
          gradientBorder: 'from-[#B8860B] via-[#E6CA65] to-[#996515]',
          cardBg: 'bg-gradient-to-br from-white/90 via-[#FAF8F5]/95 to-white/90',
        };
      case 'valima':
        return {
          badge: 'bg-[#F2F5F0] text-[#6E7458] border-[#6E7458]/30',
          gradientBorder: 'from-[#6E7458] via-[#8F9676] to-[#4D523C]',
          cardBg: 'bg-white/85',
        };
      default:
        return {
          badge: 'bg-white text-[#B8860B] border-[#B8860B]/30',
          gradientBorder: 'from-[#B8860B] to-[#D4AF37]',
          cardBg: 'bg-white/85',
        };
    }
  };

  const styles = getStyleClasses();

  return (
    <section id={id} className="py-16 px-4 max-w-4xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden border border-[#B8860B]/25 shadow-xl ${styles.cardBg}`}
      >
        {/* Top Accent Gradient Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${styles.gradientBorder}`} />

        <div className="text-center space-y-6">
          {/* Header Tag */}
          <span className={`inline-block px-4 py-1 rounded-full text-xs font-heading uppercase tracking-widest border ${styles.badge}`}>
            {title} Ceremony
          </span>

          {arabicTitle && (
            <p className="font-heading text-2xl text-[#6E7458] tracking-widest">
              {arabicTitle}
            </p>
          )}

          {/* Event Title */}
          <h2 className="font-script text-5xl md:text-7xl text-gold-gradient font-normal">
            {title}
          </h2>

          <div className="w-16 h-0.5 bg-[#B8860B]/40 mx-auto" />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left max-w-2xl mx-auto">
            {/* Date & Time */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-[#B8860B]/15">
              <div className="p-3 rounded-full bg-[#FAF8F5] text-[#B8860B] border border-[#B8860B]/20">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm uppercase tracking-wider text-[#6E7458]">
                  Date & Time
                </h4>
                <p className="font-body text-base text-[#2E2E2E] font-medium mt-0.5">
                  {date}
                </p>
                <p className="font-body text-sm text-[#2E2E2E]/70 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 inline text-[#B8860B]" />
                  {time}
                </p>
              </div>
            </div>

            {/* Venue & Location */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-[#B8860B]/15">
              <div className="p-3 rounded-full bg-[#FAF8F5] text-[#B8860B] border border-[#B8860B]/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm uppercase tracking-wider text-[#6E7458]">
                  Venue
                </h4>
                <p className="font-body text-base text-[#2E2E2E] font-medium mt-0.5">
                  {venue}
                </p>
                <p className="font-body text-xs text-[#2E2E2E]/70 mt-0.5 line-clamp-2">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* Dress Code Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAF8F5] border border-[#B8860B]/20 text-xs md:text-sm font-body text-[#6E7458]">
            <Shirt className="w-4 h-4 text-[#B8860B]" />
            <span>Dress Code: <strong className="text-[#2E2E2E]">{dressCode}</strong></span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-heading text-xs uppercase tracking-widest shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <NavIcon className="w-4 h-4" />
              Google Maps Location
            </a>

            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white text-[#B8860B] border border-[#B8860B]/40 font-heading text-xs uppercase tracking-widest shadow-sm hover:bg-[#FAF8F5] hover:scale-105 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Add To Calendar
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
