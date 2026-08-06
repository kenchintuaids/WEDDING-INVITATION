'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: '/Nikah.jpg',
    title: 'Nikah Ceremony',
    category: 'Nikah',
    span: 'col-span-1',
  },
  {
    src: '/Valima.jpg',
    title: 'Valima Ceremony',
    category: 'Valima',
    span: 'col-span-1',
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-24">
      <div className="text-center space-y-3 mb-12">
        <span className="font-heading text-xs tracking-widest text-[#B8860B] uppercase">
          Moments of Joy
        </span>
        <h2 className="font-heading text-3xl md:text-5xl text-[#2E2E2E] font-semibold">
          Photo Gallery
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto" />
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={img.title + idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            onClick={() => setSelectedImg(img.src)}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#B8860B]/20 shadow-md bg-[#FFFDF8] ${img.span} h-72 md:h-96`}
          >
            <div className="absolute inset-0 p-3 md:p-4">
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <span className="text-xs uppercase font-heading tracking-widest text-[#D4AF37]">
                  {img.category}
                </span>
                <h4 className="font-heading text-xl font-semibold">{img.title}</h4>
              </div>
              <div className="ml-auto p-2 rounded-full bg-white/20 backdrop-blur-md">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              aria-label="Close Lightbox"
              className="absolute top-6 right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-[80vh] rounded-2xl overflow-hidden border border-[#B8860B]/40 shadow-2xl bg-[#FAF8F5]"
            >
              <Image src={selectedImg} alt="Gallery Lightbox" fill className="object-contain p-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
