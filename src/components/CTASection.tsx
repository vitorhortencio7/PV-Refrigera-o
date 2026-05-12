import React from 'react';
import { WhatsappLogo, Clock, ShieldCheck, SealCheck, ThermometerCold, Phone } from '@phosphor-icons/react';
import { WA_LINK, PHONE_LINK } from '../constants';

export const CTASection = () => {
  return (
    <section id="contato" className="w-full relative z-10 bg-brand-primary overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-[#0D4A8A] to-[#0D2A4A]"></div>
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="reveal text-left space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-primary-hover font-bold text-p4">
              <span className="w-2 h-2 bg-brand-whatsapp rounded-full animate-pulse"></span>
              Foco em Fortaleza e Região
            </div>
            
            <h2 className="text-h2 text-white leading-tight">
              Sua refrigeração parou? <br />
              Nós resolvemos em <span className="text-brand-primary-hover underline underline-offset-8">recorde de tempo</span>.
            </h2>
            
            <p className="text-p1 text-white/80 max-w-xl leading-relaxed">
              Não perca sua mercadoria. O Paulo Victor oferece o atendimento mais técnico e rápido da região, focado na preservação do seu patrimônio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-4 group bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary-hover group-hover:scale-110 transition-transform">
                  <Clock weight="fill" className="text-xl sm:text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-p3">Chegada Ágil</span>
                  <span className="text-white/50 text-p4">Em toda região</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary-hover group-hover:scale-110 transition-transform">
                  <ShieldCheck weight="fill" className="text-xl sm:text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-p3">Garantia Total</span>
                  <span className="text-white/50 text-p4">Peças de qualidade</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-200">
            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden group border border-brand-border/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary-subtle rounded-bl-full opacity-50 -mr-10 -mt-10"></div>
              
              <div className="text-center space-y-6 sm:space-y-8 relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-whatsapp/10 rounded-2xl sm:rounded-3xl flex items-center justify-center text-brand-whatsapp mb-4 sm:mb-6">
                    <WhatsappLogo weight="fill" className="text-4xl sm:text-5xl animate-wiggle" />
                  </div>
                  <h3 className="text-h3 text-brand-text">Falar com Paulo Victor</h3>
                  <p className="text-brand-text-secondary font-medium mt-1 text-p2">Atendimento Especializado</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-whatsapp text-white py-4 sm:py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-whatsapp-hover hover:-translate-y-1 transition-all shadow-xl shadow-brand-whatsapp/20 active:scale-95">
                    Solicitar Orçamento Grátis
                  </a>
                  <a href={PHONE_LINK} className="w-full border-2 border-brand-border hover:border-brand-primary text-brand-text py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all hover:bg-brand-primary/5">
                    <Phone weight="fill" className="text-xl sm:text-2xl text-brand-primary" />
                    Ligar Agora
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2 text-p4 text-brand-text-aux">
                  <span className="flex items-center gap-1 whitespace-nowrap"><SealCheck weight="bold" className="text-brand-primary" /> 100% Seguro</span>
                  <div className="w-1 h-1 bg-brand-border rounded-full shrink-0"></div>
                  <span className="flex items-center gap-1 whitespace-nowrap"><ThermometerCold weight="bold" className="text-brand-primary" /> Especialista</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
