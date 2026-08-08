'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Events', href: '#events-schedule' },
  { name: 'RSVP', href: '#rsvp' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-300">
      <nav
        className={`max-w-5xl mx-auto rounded-full transition-all duration-500 ${
          scrolled ? 'glass-nav py-2 px-6 shadow-md border border-[#B8860B]/20' : 'bg-transparent py-4 px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="font-pinyon text-2xl md:text-3xl text-gold-gradient font-normal tracking-wide flex items-center gap-2"
          >
            <span className="font-bold">Zoya & Ayaan</span>
            <Heart className="w-4 h-4 text-[#B8860B] fill-[#B8860B]/30 inline" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-heading tracking-widest uppercase transition-colors relative py-1 ${
                    isActive ? 'text-[#B8860B] font-semibold' : 'text-[#2E2E2E]/80 hover:text-[#B8860B]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8860B] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-[#2E2E2E] p-2 hover:text-[#B8860B] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 pt-3 border-t border-[#B8860B]/20 flex flex-col space-y-3 pb-2 text-center"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-lg tracking-wider text-[#2E2E2E] hover:text-[#B8860B] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
