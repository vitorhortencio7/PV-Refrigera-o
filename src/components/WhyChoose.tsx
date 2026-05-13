import React from 'react';
import { Lightning, SealCheck, ShieldCheck } from '@phosphor-icons/react';

export const WhyChoose = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-12 md:pb-20 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-10 sm:pt-14 border-t border-brand-border/30 reveal">
        <div className="flex flex-col items-center text-center group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-primary-subtle flex items-center justify-center text-brand-primary mb-4 transition-transform group-hover:scale-110">
            <Lightning weight="fill" className="text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-h4 text-brand-text mb-2 sm:mb-3">Rapidez</h3>
          <p className="text-p3 text-brand-text-secondary max-w-[240px]">Atendimento emergencial ágil para a sua operação não parar.</p>
        </div>
        <div className="flex flex-col items-center text-center group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-primary-subtle flex items-center justify-center text-brand-primary mb-4 transition-transform group-hover:scale-110">
            <SealCheck weight="fill" className="text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-h4 text-brand-text mb-2 sm:mb-3">Experiência</h3>
          <p className="text-p3 text-brand-text-secondary max-w-[280px]">Mais de 8 anos resolvendo desafios de refrigeração comercial por toda Fortaleza.</p>
        </div>
        <div className="flex flex-col items-center text-center group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-primary-subtle flex items-center justify-center text-brand-primary mb-4 transition-transform group-hover:scale-110">
            <ShieldCheck weight="fill" className="text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-h4 text-brand-text mb-2 sm:mb-3">Transparência</h3>
          <p className="text-p3 text-brand-text-secondary max-w-[280px]">CNPJ regularizado, atuamos com emissão de Nota Fiscal (NF) e facilitamos com Boleto.</p>
        </div>
      </div>
    </section>
  );
};
