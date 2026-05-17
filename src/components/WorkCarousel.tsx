import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_IMAGES } from '../constants';

export const WorkCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[400px] sm:h-full sm:min-h-[450px] relative rounded-[2rem] overflow-hidden border border-brand-border shadow-2xl group bg-brand-bg">
      <AnimatePresence mode="wait">
        <motion.img 
          key={current}
          src={HERO_IMAGES[current]}
          alt={`Trabalho em campo ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
           <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
           <span className="text-sm font-bold tracking-widest uppercase text-white/90">Equipe em Ação</span>
        </div>
        <p className="text-white/80 font-medium text-sm md:text-base max-w-[280px]">Manutenção real e soluções eficientes direto do campo para a sua empresa.</p>
      </div>

      <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-brand-primary w-6' : 'bg-white/30 hover:bg-white/50'}`}
            aria-label={`Ir para a imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
