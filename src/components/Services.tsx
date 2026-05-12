import React, { useRef, useState, useEffect } from 'react';
import { Wrench, WhatsappLogo, ShieldCheck, CaretRight } from '@phosphor-icons/react';
import { motion, useScroll, useSpring } from 'motion/react';
import { SERVICES, WA_LINK } from '../constants';

export const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle progress bar for mobile carousel
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section id="servicos" className="w-full bg-brand-bg relative z-10 py-16 md:py-32 border-t border-brand-border overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-20 flex flex-col items-center relative z-10">
          <div className="w-12 h-12 bg-brand-primary-subtle rounded-2xl flex items-center justify-center text-brand-primary mb-4 reveal">
            <Wrench weight="fill" className="text-2xl" />
          </div>
          <h2 className="text-h2 text-brand-text reveal delay-75">Serviços <span className="text-brand-primary">Técnicos</span></h2>
          <p className="text-p1 text-brand-text-secondary mt-4 max-w-xl mx-auto leading-relaxed reveal delay-150">Soluções completas e especializadas para a refrigeração do seu negócio.</p>
        </div>

        {/* Desktop: Grid | Mobile: Horizontal Scroll */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto sm:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-8 sm:pb-0"
          >
            {SERVICES.map((s, idx) => (
              <div 
                key={idx} 
                className="min-w-[85vw] sm:min-w-0 snap-center bg-brand-card border border-brand-border/50 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col items-start transition-all hover:shadow-md hover:border-brand-primary/20 group/card" 
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-primary-subtle rounded-2xl flex items-center justify-center text-brand-primary mb-6 shrink-0 group-hover/card:scale-110 transition-transform">
                  <s.icon weight="bold" className="text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-h3 mb-3 text-brand-text flex items-center justify-between w-full">
                  {s.t}
                  <CaretRight weight="bold" className="text-brand-primary opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all sm:hidden lg:block shrink-0" />
                </h3>
                <p className="text-p3 text-brand-text-secondary leading-relaxed flex-1">{s.d}</p>
                <div className="mt-6 pt-6 border-t border-brand-border/30 w-full flex items-center justify-between text-p4 text-brand-primary">
                  <span>Qualidade Garantida</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Progress Bar Indicator */}
          <div className="sm:hidden flex items-center gap-4 mt-2 px-2">
            <div className="flex-1 h-[2px] bg-brand-border/30 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-brand-primary"
                 style={{ width: `${Math.max(15, scrollProgress)}%` }} // Minimum width for visibility
                 transition={{ type: 'spring', bounce: 0, duration: 0.1 }}
               />
            </div>
            <span className="text-p4 text-brand-text-aux whitespace-nowrap">
               Arraste para ver mais
            </span>
          </div>
        </div>

        {/* Centralized CTA Banner */}
        <div className="mt-16 md:mt-24 flex flex-col items-center reveal delay-300">
          <div className="w-full max-w-4xl bg-brand-primary-subtle border border-brand-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 opacity-5 text-brand-primary pointer-events-none -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck weight="fill" className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-h3 text-brand-text mb-4">Garanta a segurança da sua carga</h3>
              <p className="text-p1 text-brand-text-secondary mb-10 max-w-2xl mx-auto">
                Não deixe que falhas inesperadas prejudiquem seu estoque. Conte com quem entende de refrigeração para manter tudo em perfeito estado.
              </p>
              <a 
                href={WA_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-brand-whatsapp text-white px-8 md:px-12 py-5 rounded-2xl font-bold text-[17px] md:text-lg items-center justify-center gap-3 hover:bg-brand-whatsapp-hover hover:-translate-y-1 transition-all shadow-xl shadow-brand-whatsapp/20 active:scale-95"
              >
                <WhatsappLogo weight="fill" className="text-3xl animate-wiggle" />
                Quero proteger meu patrimônio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
