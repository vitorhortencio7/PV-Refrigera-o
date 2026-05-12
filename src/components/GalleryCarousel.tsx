import React, { useState } from 'react';
import { CaretLeft, CaretRight, Check } from '@phosphor-icons/react';
import { PROJECTS } from '../constants';
import { useSwipe } from '../hooks/useSwipe';

export const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  const total = PROJECTS.length;
  const next = () => setCurrent(c => (c + 1) % total);
  const prev = () => setCurrent(c => (c - 1 + total) % total);
  
  const swipeHandlers = useSwipe(next, prev);

  return (
    <section id="trabalhos" className="w-full py-16 md:py-32 bg-brand-bg-alt border-y border-brand-border relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold heading-font uppercase mb-4 text-brand-text reveal">
              Equipe <span className="text-brand-primary">em campo</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium text-brand-text-secondary reveal delay-75 leading-relaxed">
              Confira como o Paulo Victor e sua equipe atuam diretamente nos maiores desafios de refrigeração comercial de Fortaleza.
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-brand-border bg-brand-card flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm active:scale-95 group">
              <CaretLeft weight="bold" className="text-xl group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button onClick={next} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-brand-border bg-brand-card flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm active:scale-95 group">
              <CaretRight weight="bold" className="text-xl group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative group" {...swipeHandlers}>
          <div className="relative overflow-hidden rounded-3xl bg-brand-card shadow-2xl border border-brand-border/30">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {PROJECTS.map((p, i) => (
                <div key={i} className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-12">
                  {/* Image Side */}
                  <div className="lg:col-span-7 relative h-[280px] sm:h-[400px] lg:h-[600px] overflow-hidden bg-brand-bg-alt">
                    <img 
                      src={`${p.url}&auto=format&fit=crop`} 
                      alt={p.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex flex-wrap gap-2">
                       {p.tags.map(tag => (
                         <span key={tag} className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="lg:col-span-5 p-6 sm:p-10 lg:p-16 flex flex-col justify-center bg-brand-card text-left">
                    <div className="space-y-5 sm:space-y-6">
                       <span className="text-brand-primary font-bold text-xs tracking-[0.2em] uppercase">Caso Real #0{i+1}</span>
                       <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold heading-font uppercase text-brand-text leading-tight">
                         {p.title}
                       </h3>
                       <p className="text-base sm:text-lg text-brand-text-secondary font-medium leading-relaxed">
                         {p.description}
                       </p>
                       <div className="pt-6 flex flex-col gap-4 border-t border-brand-border/50">
                         <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                             <Check weight="bold" className="text-sm" />
                           </div>
                           <span className="text-sm sm:text-base font-bold text-brand-text-secondary">Atendimento em toda Fortaleza</span>
                         </div>
                         <div className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                             <Check weight="bold" className="text-sm" />
                           </div>
                           <span className="text-sm sm:text-base font-bold text-brand-text-secondary">Equipe técnica especializada</span>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-3">
            {PROJECTS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)} 
                className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'w-12 bg-brand-primary' : 'w-3 bg-brand-border hover:bg-brand-primary/30'}`} 
                aria-label={`Ir para projeto ${i+1}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
