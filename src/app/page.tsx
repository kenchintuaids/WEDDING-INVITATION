'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import GoldParticles from '@/components/GoldParticles';
import AudioPlayer from '@/components/AudioPlayer';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import CaricatureEventsSchedule from '@/components/CaricatureEventsSchedule';
import GuestbookRSVP from '@/components/GuestbookRSVP';
import InteractiveEnvelope from '@/components/InteractiveEnvelope';
import Image from 'next/image';

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const openInvitation = () => {
    scrollToTop();
    setEnvelopeOpened(true);
    requestAnimationFrame(scrollToTop);
  };

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#FAF8F5] text-[#2E2E2E] selection:bg-[#B8860B]/20">
        {/* Step 1: Interactive Wax Seal Envelope Cover Screen */}
        {!envelopeOpened && (
          <InteractiveEnvelope
            onOpen={openInvitation}
            brideName="Zoya Ovias"
            groomName="Mohammed Ayaan"
          />
        )}

        {/* Step 2: Main Website Experience (Unlocked after envelope open) */}
        {/* Floating Canvas Particles */}
        <GoldParticles />

        {/* Floating Audio Player */}
        <AudioPlayer />

        {/* Floating Navigation Bar */}
        <Navigation />

        {/* Hero Section */}
        <Hero />

        {/* Save The Date Gold Pill Header & Countdown Timer */}
        <div className="px-4 text-center pt-8">
          <div className="mx-auto flex h-20 w-full max-w-[28rem] flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] px-6 text-white shadow-xl">
            <span className="font-heading text-sm uppercase tracking-widest block opacity-90">
              Save The Date
            </span>
            <span className="font-script text-2xl md:text-3xl">
              26th September 2026
            </span>
          </div>
        </div>

        <CountdownTimer targetDate="2026-09-26T10:00:00" />

        {/* Divider SVG Motif */}
        <div className="flex justify-center my-6 opacity-75">
          <Image src="/floral_divider.svg" alt="Floral Arch" width={400} height={120} />
        </div>

        {/* Personalized Caricature Events Schedule */}
        <CaricatureEventsSchedule />

        {/* RSVP Form */}
        <GuestbookRSVP />

        {/* Luxury Footer with Hashtag */}
        <footer className="py-12 px-4 text-center border-t border-[#B8860B]/20 bg-[#8C987A] text-[#FAF8F5] relative z-20">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="font-heading text-xs uppercase tracking-widest text-[#E8D8CE]">
              With Love
            </span>
            <h3 className="font-pinyon text-5xl font-normal text-[#FAF8F5]">Zoya & Ayaan</h3>
            <p className="font-heading text-xs tracking-widest uppercase text-[#F3E5AB]">
              26th September 2026 &bull; #A-Z
            </p>
            <div className="w-12 h-0.5 bg-[#F3E5AB]/40 mx-auto" />
            <p className="font-body text-xs opacity-75">
              We look forward to celebrating our special day with you!
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
