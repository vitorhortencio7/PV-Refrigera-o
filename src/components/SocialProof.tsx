import React from 'react';
import { Star } from '@phosphor-icons/react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../constants';

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="w-full bg-brand-card relative z-10 py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-h2 mb-4 text-brand-text reveal">O que os <span className="text-brand-primary">clientes</span> dizem</h2>
          <p className="text-p1 text-brand-text-secondary reveal delay-75">Experiência comprovada por quem confia no nosso trabalho.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((d, i) => (
            <div key={i} className="bg-brand-card border border-brand-border/50 rounded-2xl p-6 sm:p-8 reveal shadow-sm flex flex-col hover:shadow-md transition-shadow" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex text-[#EF9F27] mb-5 gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} weight="fill" className="text-base sm:text-lg" />)}
              </div>
              <p className="text-p3 text-brand-text-secondary italic mb-8 leading-relaxed flex-1">"{d.text}"</p>
              <div className="flex items-center gap-4 border-t border-brand-border/30 pt-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary-subtle flex items-center justify-center text-brand-primary-text font-bold heading-font text-lg sm:text-xl border border-brand-primary-subtle/30 shrink-0">
                  {d.l}
                </div>
                <div className="flex flex-col">
                  <span className="text-p3 font-bold text-brand-text leading-tight">{d.n}</span>
                  <span className="text-p4 text-brand-text-aux mt-0.5">Cliente Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ClientLogos = () => {
  return (
    <div className="w-full py-16 md:py-24 border-t border-brand-border bg-brand-bg-alt overflow-hidden relative z-10 flex">
      <div className="flex w-max animate-marquee whitespace-nowrap gap-28 px-12 items-center cursor-default">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
          <div key={i} className="flex items-center justify-center min-w-[180px] md:min-w-[240px]">
            <img 
              src={logo} 
              alt={`Cliente ${i}`} 
              className="h-14 md:h-20 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 object-contain drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
