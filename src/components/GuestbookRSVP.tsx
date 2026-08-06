'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Phone, Send, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RSVPSubmission {
  name: string;
  number: string;
}

export default function GuestbookRSVP() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;

    setIsSending(true);
    setErrorMessage('');

    const submission: RSVPSubmission = {
      name: name.trim(),
      number: number.trim(),
    };

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit RSVP right now.');
      }

      setName('');
      setNumber('');
      setSubmitted(true);

      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.62 },
        colors: ['#B8860B', '#D4AF37', '#6E7458'],
      });

      window.setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to submit RSVP right now.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-24">
      <div className="text-center space-y-3 mb-12">
        <span className="font-heading text-xs tracking-widest text-[#B8860B] uppercase">
          RSVP
        </span>
        <h2 className="font-heading text-3xl md:text-5xl text-[#2E2E2E] font-semibold">
          Confirm Your Attendance
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-6 md:p-8 rounded-3xl border border-[#B8860B]/30 shadow-xl max-w-3xl mx-auto"
      >
        <div className="flex items-start gap-3 mb-6 rounded-2xl bg-[#FAF8F5] border border-[#B8860B]/15 p-4">
          <Mail className="w-5 h-5 text-[#B8860B] mt-0.5 shrink-0" />
          <p className="font-body text-sm text-[#2E2E2E]/80">
            RSVP submissions will be emailed to the family inboxes automatically after you send the form.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#B8860B] mx-auto animate-bounce" />
            <h4 className="font-heading text-2xl text-[#2E2E2E]">RSVP received</h4>
            <p className="font-body text-sm text-[#6E7458]">
              Your details have been sent to the family notification inboxes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-[#6E7458] mb-1">
                  Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#B8860B] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/80 border border-[#B8860B]/20 text-sm focus:outline-none focus:border-[#B8860B] font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-[#6E7458] mb-1">
                  Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#B8860B] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/80 border border-[#B8860B]/20 text-sm focus:outline-none focus:border-[#B8860B] font-body"
                  />
                </div>
              </div>
            </div>

            {errorMessage && (
              <p className="text-sm text-[#9B2C2C] font-body">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-white font-heading text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {isSending ? 'Sending RSVP...' : 'Submit RSVP'}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
