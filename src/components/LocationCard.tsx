'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function LocationCard() {
  const [copied, setCopied] = useState(false);
  const mapUrl = 'https://maps.app.goo.gl/nzsce669Cjb2aL1RA';
  const venueAddress = 'Nikah Venue (Click Get Directions for precise Google Maps navigation)';

  const handleCopy = () => {
    navigator.clipboard.writeText(mapUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="location" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-24">
      <div className="text-center space-y-3 mb-12">
        <span className="font-heading text-xs tracking-widest text-[#B8860B] uppercase">
          Venue & Directions
        </span>
        <h2 className="font-heading text-3xl md:text-5xl text-[#2E2E2E] font-semibold">
          Location Details
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-10 rounded-3xl border border-[#B8860B]/30 shadow-2xl space-y-8"
      >
        {/* Venue Information Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#B8860B]/20">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading text-2xl md:text-3xl text-[#2E2E2E] font-semibold">
              Sacred Nikah Venue
            </h3>
            <p className="font-body text-sm text-[#6E7458]">
              Tap below for direct turn-by-turn navigation
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#B8860B]/30 text-xs font-heading uppercase text-[#B8860B] hover:bg-[#FAF8F5] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied Link' : 'Copy Map Link'}
            </button>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-heading uppercase shadow-md hover:scale-105 transition-transform"
            >
              <Navigation className="w-4 h-4" />
              Open Maps
            </a>
          </div>
        </div>

        {/* Embedded Google Maps Preview Frame */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-[#B8860B]/20 shadow-inner">
          <iframe
            title="Nikah Venue Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.164393796856!2d77.20902131508246!3d28.61393918242491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d07%3A0x6d115e58849b2940!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1628173648123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>

        {/* Contact Assistance */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs font-body text-[#2E2E2E]/70">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#B8860B]" />
            <span>Valet Parking & Concierge Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#B8860B]" />
            <span>Event Assistance: Contact Host Family</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
