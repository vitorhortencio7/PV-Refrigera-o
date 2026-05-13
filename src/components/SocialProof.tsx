import React from 'react';
import { Star, Quotes } from '@phosphor-icons/react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../constants';

const BUBBLE_COLORS = [
  'bg-sky-500', 
  'bg-brand-primary', 
  'bg-blue-400'
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="w-full bg-[#F8FAFC] relative z-10 py-12 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-h2 mb-4 text-brand-text reveal">
            O que os <span className="text-brand-primary">Clientes</span> dizem
          </h2>
          <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-p1 text-brand-text-secondary leading-relaxed opacity-70 reveal delay-75">
            A confiança de anos traduzida em resultados reais e parcerias duradouras em todo o Ceará.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((d, i) => (
            <div key={i} className="flex flex-col reveal" style={{ transitionDelay: `${i * 150}ms` }}>
              {/* Speech Bubble */}
              <div className={`relative ${BUBBLE_COLORS[i % BUBBLE_COLORS.length]} rounded-3xl p-8 sm:p-10 mb-10 shadow-xl min-h-[220px] flex items-center`}>
                {/* Quote Icon Top */}
                <div className="absolute -top-5 left-8 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg transform -rotate-12 border border-brand-border/10">
                  <Quotes weight="fill" className={`text-xl ${BUBBLE_COLORS[i % BUBBLE_COLORS.length].replace('bg-', 'text-')}`} />
                </div>

                <p className="text-white text-p1 font-medium leading-relaxed relative z-10">
                  {d.text}
                </p>

                {/* Quote Icon Bottom */}
                <div className="absolute -bottom-5 right-8 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg transform rotate-12 border border-brand-border/10">
                  <Quotes weight="fill" className={`text-xl ${BUBBLE_COLORS[i % BUBBLE_COLORS.length].replace('bg-', 'text-')}`} mirrored />
                </div>

                {/* Pointer Arrow */}
                <div className={`absolute -bottom-4 left-16 w-8 h-8 ${BUBBLE_COLORS[i % BUBBLE_COLORS.length]} rotate-45 rounded-sm shadow-xl`}></div>
              </div>

              {/* User Info Below */}
              <div className="flex items-center gap-5 px-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-primary font-bold heading-font text-2xl border-4 border-[#F1F5F9] shrink-0 overflow-hidden">
                  <span className="opacity-40">{d.l}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-h4 text-brand-text leading-tight">{d.n}</span>
                  <span className="text-p4 text-brand-primary/60 mt-1">{d.role || 'Cliente Verificado'}</span>
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
    <div className="w-full py-8 md:py-12 border-t border-brand-border bg-brand-bg-alt overflow-hidden relative z-10 flex">
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
