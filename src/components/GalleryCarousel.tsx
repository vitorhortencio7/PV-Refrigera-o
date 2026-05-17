import React, { useState } from 'react';
import { CaretLeft, CaretRight, Check } from '@phosphor-icons/react';
import { PROJECTS } from '../constants';
import { useSwipe } from '../hooks/useSwipe';
import { motion, AnimatePresence } from 'motion/react';

export const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  const total = PROJECTS.length;
  const next = () => setCurrent(c => (c + 1) % total);
  const prev = () => setCurrent(c => (c - 1 + total) % total);
  
  const swipeHandlers = useSwipe(next, prev);

  const activeProject = PROJECTS[current];

  return (
    <section id="trabalhos" className="w-full py-12 md:py-24 bg-brand-bg-alt border-y border-brand-border relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-h2 text-brand-text reveal">
              Equipe <span className="text-brand-primary">em campo</span>
            </h2>
            <p className="text-p1 text-brand-text-secondary reveal delay-75 leading-relaxed">
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

        <div className="relative" {...swipeHandlers}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border border-brand-border/30 min-h-[600px] lg:min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Visual Side (Tilted Images) */}
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-20 relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center bg-[#F8FAFC]">
                  {/* Tags positioned top left of the visual area */}
                  <div className="absolute top-8 left-8 z-30 flex flex-wrap gap-2">
                    {activeProject.tags.map(tag => (
                      <span key={tag} className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square flex items-center justify-center">
                    {/* Before Image (Bottom Layer) */}
                    <motion.div 
                      initial={{ rotate: -12, x: -40, y: -20, opacity: 0 }}
                      animate={{ rotate: -12, x: -60, y: -20, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="absolute w-[75%] sm:w-[80%] aspect-[4/5] bg-brand-bg rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10 lg:-translate-x-12"
                    >
                      <img 
                        src={activeProject.beforeImg} 
                        alt="Antes" 
                        className="w-full h-full object-cover grayscale-[0.3]" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-bold text-[10px] uppercase tracking-[0.2em]">
                        Antes
                      </div>
                    </motion.div>

                    {/* After Image (Top Layer) */}
                    <motion.div 
                      initial={{ rotate: 6, x: 40, y: 20, opacity: 0 }}
                      animate={{ rotate: 6, x: 60, y: 20, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="absolute w-[75%] sm:w-[80%] aspect-[4/5] bg-brand-bg rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20 lg:translate-x-12"
                    >
                      <img 
                        src={activeProject.afterImg} 
                        alt="Depois" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 right-4 bg-brand-primary px-4 py-1.5 rounded-full text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                        Depois
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-white border-l border-brand-border/10">
                  <div className="space-y-6 sm:space-y-8">
                     <div className="flex items-center gap-3">
                       <div className="h-[1px] w-8 bg-brand-primary/30"></div>
                       <span className="text-p4 text-brand-primary">Caso Real #0{current+1}</span>
                     </div>
                     
                     <h3 className="text-h3 text-brand-text leading-[1.1]">
                       {activeProject.title}
                     </h3>
                     
                     <p className="text-p2 text-brand-text-secondary font-medium leading-relaxed opacity-80">
                       {activeProject.description}
                     </p>
                     
                     <div className="pt-8 space-y-4 border-t border-brand-border/30">
                       <div className="flex items-center gap-4 group/item">
                         <div className="w-8 h-8 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 transition-colors group-hover/item:bg-brand-primary group-hover/item:text-white">
                           <Check weight="bold" className="text-sm" />
                         </div>
                         <span className="text-p3 sm:text-p2 font-bold text-brand-text-secondary">Atendimento em toda Fortaleza</span>
                       </div>
                       <div className="flex items-center gap-4 group/item">
                         <div className="w-8 h-8 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 transition-colors group-hover/item:bg-brand-primary group-hover/item:text-white">
                           <Check weight="bold" className="text-sm" />
                         </div>
                         <span className="text-p3 sm:text-p2 font-bold text-brand-text-secondary">Equipe técnica especializada</span>
                       </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 gap-3">
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
