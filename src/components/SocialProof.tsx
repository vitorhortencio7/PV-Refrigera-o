import React from 'react';
import { Quotes } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../constants';

const BUBBLE_COLORS = [
  'bg-brand-primary', 
  'bg-blue-600', 
  'bg-sky-600'
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="w-full bg-[#F8FAFC] relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 mb-4 text-brand-text font-bold"
          >
            O que os <span className="text-brand-primary">Parceiros</span> dizem
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mb-8 origin-center"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-p1 text-brand-text-secondary leading-relaxed opacity-70"
          >
            A confiança de anos traduzida em resultados reais e parcerias duradouras em toda Fortaleza.
          </motion.p>
        </div>

        {/* Testimonials Container: Column on mobile for stacking, Grid on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-20 md:gap-10 pb-20 md:pb-0">
          {TESTIMONIALS.map((d, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="sticky md:relative top-28 md:top-0 h-full"
              style={{ zIndex: i + 1 }}
            >
              <div className={`relative flex flex-col h-full ${BUBBLE_COLORS[i % BUBBLE_COLORS.length]} rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10 group transition-all duration-300`}>
                
                {/* Quote Icon Top */}
                <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform -rotate-12 border border-brand-border/10">
                  <Quotes weight="fill" className={`text-lg md:text-xl ${BUBBLE_COLORS[i % BUBBLE_COLORS.length].replace('bg-', 'text-')}`} />
                </div>

                <div className="flex flex-col h-full gap-6">
                  <p className="text-white text-[16px] font-medium leading-relaxed italic opacity-95 flex-1">
                    "{d.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center p-2 shrink-0">
                      <img 
                        src={d.logo} 
                        alt={`Depoimento de ${d.n} - ${d.role}`} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[24px] text-white font-bold tracking-tight leading-tight heading-font uppercase">{d.n}</span>
                      <span className="text-[12px] text-white/70 font-medium uppercase tracking-widest leading-none mt-1">{d.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              alt="Logo de empresa parceira de refrigeração comercial" 
              className="h-14 md:h-20 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 object-contain drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
