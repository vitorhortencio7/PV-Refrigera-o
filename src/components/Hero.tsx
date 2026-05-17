import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Snowflake, WhatsappLogo, ArrowDown, Star, MapPin, Clock, ShieldCheck } from '@phosphor-icons/react';
import { DYNAMIC_WORDS, WA_LINK, CLIENT_LOGOS } from '../constants';
import { WorkCarousel } from './WorkCarousel';

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="w-full bg-[#0D2A4A] overflow-hidden relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(26,111,196,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,111,196,0.12) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3d9be9] opacity-[0.07] transform rotate-[-8deg] scale-[2] origin-top-right pointer-events-none z-0"></div>
      
      <div className="absolute -top-24 -left-24 opacity-10 text-brand-primary pointer-events-none hidden lg:block z-0">
        <Snowflake weight="fill" className="w-[32rem] h-[32rem] animate-[spin_20s_linear_infinite]" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-16 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-7 flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand-primary-subtle font-bold tracking-widest text-p4 reveal">
              <div className="w-8 h-[2px] bg-brand-primary-subtle"></div>
              Atendimento 24 Horas
            </div>
            
            <h1 className="text-h1 text-white reveal delay-75">
              <span className="block mb-2">Especialistas em</span>
              <span className="block h-[2.5rem] md:h-[1.3em] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={wordIndex} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-brand-primary-hover block text-balance max-w-sm sm:max-w-md md:max-w-none"
                  >
                    {DYNAMIC_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-p1 text-white/90 max-w-lg leading-relaxed reveal delay-150">
              Mais de 8 anos salvando operações comerciais pela madrugada. Manutenção ágil e preventiva nas suas câmaras, balcões e pistas frias, cobrindo toda Região Metropolitana de Fortaleza.
            </p>
          </div>

          <div className="space-y-8 reveal delay-200">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-whatsapp text-white px-8 py-4.5 rounded-[1.25rem] font-bold text-p2 flex items-center justify-center gap-3 shadow-lg shadow-brand-whatsapp/20 hover:bg-brand-whatsapp-hover hover:-translate-y-1 active:scale-[0.98] transition-all">
                <WhatsappLogo weight="fill" className="text-[28px] animate-wiggle" />
                <span>Orçamento Grátis</span>
              </a>
              <a 
                href="#servicos" 
                onClick={(e) => scrollToSection(e, '#servicos')}
                className="text-white/50 hover:text-white/80 px-4 py-4 font-bold uppercase tracking-[0.15em] text-p4 transition-all flex justify-center items-center group cursor-pointer"
              >
                Nossos Serviços <ArrowDown weight="bold" className="ml-2 group-hover:translate-y-1 transition-transform opacity-30 group-hover:opacity-100" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 pt-2 opacity-90">
              <div className="flex -space-x-3 shrink-0">
                {CLIENT_LOGOS.slice(0, 3).map((logo, index) => (
                  <div key={index} className="w-[42px] h-[42px] rounded-full border-2 border-brand-primary bg-white flex items-center justify-center p-1 inline-block shadow-lg z-0 relative">
                    <img src={logo} alt="Cliente Logo" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-[42px] h-[42px] rounded-full border-2 border-brand-primary bg-brand-primary/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold z-10 shadow-lg relative">+5k</div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <div className="flex text-[#EF9F27] ml-0.5 mb-1">
                  <Star weight="fill" size={16} />
                  <Star weight="fill" size={16} />
                  <Star weight="fill" size={16} />
                  <Star weight="fill" size={16} />
                  <Star weight="fill" size={16} />
                </div>
                <span className="text-white/80 font-bold text-p4 leading-none">Clientes satisfeitos</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 sm:pt-6 reveal delay-300">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group transition-all hover:bg-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary-hover transition-all duration-300 group-hover:scale-110">
                <MapPin weight="fill" className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 leading-none mb-1.5">Abrangência</span>
                <span className="text-p3 sm:text-p2 font-bold text-white leading-none whitespace-nowrap">Fortaleza e Região</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group transition-all hover:bg-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary-hover transition-all duration-300 group-hover:scale-110">
                <Clock weight="fill" className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 leading-none mb-1.5">Disponibilidade</span>
                <span className="text-p3 sm:text-p2 font-bold text-white leading-none whitespace-nowrap">Plantão 24 Horas</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group transition-all hover:bg-white/10 sm:hidden lg:flex">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary-hover transition-all duration-300 group-hover:scale-110">
                <ShieldCheck weight="fill" className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 leading-none mb-1.5">Orçamento</span>
                <span className="text-p3 sm:text-p2 font-bold text-white leading-none whitespace-nowrap">Sem Custos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-center reveal [transition-delay:200ms] h-full">
          <WorkCarousel />
        </div>
      </div>
    </section>
  );
};
