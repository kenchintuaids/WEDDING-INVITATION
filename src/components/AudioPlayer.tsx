'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Elegant royalty-free ambient acoustic oriental wedding melody sample
    audioRef.current = new Audio(
      'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-ambient-oriental-wedding-113825.mp3'
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full glass-card border border-[#B8860B]/40 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B8860B]/20 to-[#D4AF37]/20 animate-pulse-gold pointer-events-none" />
        {isPlaying ? (
          <div className="flex items-center gap-1">
            <span className="w-1 h-4 bg-[#B8860B] rounded-full animate-bounce delay-75" />
            <span className="w-1 h-6 bg-[#B8860B] rounded-full animate-bounce delay-150" />
            <span className="w-1 h-3 bg-[#B8860B] rounded-full animate-bounce" />
          </div>
        ) : (
          <Music className="w-6 h-6 text-[#B8860B] group-hover:rotate-12 transition-transform" />
        )}
        
        {/* Tooltip */}
        <span className="absolute -top-10 right-0 hidden group-hover:block bg-[#2E2E2E] text-[#FAF8F5] text-xs py-1 px-3 rounded-full whitespace-nowrap shadow-md font-body">
          {isPlaying ? 'Pause Nasheed' : 'Play Nasheed'}
        </span>
      </button>
    </div>
  );
}
