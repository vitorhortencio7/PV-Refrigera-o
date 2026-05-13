import React from 'react';
import { Check, MapPin } from '@phosphor-icons/react';

export const ServiceQuality = () => {
  return (
    <section className="w-full bg-brand-bg-alt relative z-10 py-12 md:py-24 border-t border-brand-border overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-6 sm:space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary-subtle text-brand-primary-text font-bold text-p4 reveal">
             Atendimento Local
          </div>
          <h2 className="text-h2 text-brand-text reveal delay-100 leading-tight">
            Qualidade técnica que a sua empresa <span className="text-brand-primary">merece</span>
          </h2>
          <p className="text-p1 text-brand-text-secondary reveal delay-200 lg:max-w-xl text-balance">
            Acreditamos que um serviço bem feito fortalece o seu negócio. Nossa equipe de técnicos especialistas atende rapidamente em toda Fortaleza e Região Metropolitana.
          </p>
          <ul className="space-y-4 pt-2 reveal delay-300">
            <li className="flex items-center gap-4 font-bold text-brand-text-secondary text-p3 sm:text-p2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0"><Check weight="bold" className="text-sm sm:text-base" /></div>
              Agilidade para comércio e indústria
            </li>
            <li className="flex items-center gap-4 font-bold text-brand-text-secondary text-p3 sm:text-p2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0"><Check weight="bold" className="text-sm sm:text-base" /></div>
              Transparência e peças originais
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full relative reveal delay-200 z-10">
          <div className="absolute -inset-4 bg-brand-primary/5 rounded-[12px] blur-2xl"></div>
          <div className="relative bg-white border border-brand-border p-6 sm:p-10 rounded-2xl shadow-xl">
             <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
               <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-primary-subtle rounded-xl flex items-center justify-center text-brand-primary shrink-0 transition-transform group-hover:scale-110">
                 <MapPin weight="fill" className="text-2xl sm:text-3xl" />
               </div>
               <div>
                 <h4 className="text-h3 mb-1 text-brand-text">Chegamos Rápido</h4>
                 <p className="text-p3 text-brand-text-secondary">Equipes distribuídas estrategicamente em Fortaleza.</p>
               </div>
             </div>
             
             <div className="w-full h-[1px] bg-brand-border/30 mb-8"></div>
             
             <div className="grid grid-cols-2 gap-3 sm:gap-4">
               <div className="bg-brand-bg/50 rounded-xl p-4 border border-brand-border/40 text-center hover:border-brand-primary/30 transition-colors">
                  <div className="text-h3 text-brand-primary mb-1">100%</div>
                  <div className="text-p4 text-brand-text-aux">Compromisso</div>
               </div>
               <div className="bg-brand-bg/50 rounded-xl p-4 border border-brand-border/40 text-center hover:border-brand-primary/30 transition-colors">
                  <div className="text-h3 text-brand-primary mb-1">24h</div>
                  <div className="text-p4 text-brand-text-aux">Suporte</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
