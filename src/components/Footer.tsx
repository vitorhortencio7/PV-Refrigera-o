import React, { useState, useEffect } from 'react';
import { WhatsappLogo, InstagramLogo, Phone } from '@phosphor-icons/react';
import { WA_LINK, INSTA_LINK, PHONE_LINK } from '../constants';

export const Footer = () => (
  <footer className="w-full bg-[#1E2535] relative z-10 pt-16 pb-28 md:pb-16 px-6 lg:px-12">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
      <div className="sm:col-span-2 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-full border border-white/10 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
            <img src="https://i.ibb.co/kswhJNTT/New-Project.jpg" alt="Logo Paulo Victor Refrigeração Profissional em Fortaleza" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="text-h3 leading-none text-white whitespace-nowrap">Paulo Victor <br/><span className="text-p4 text-brand-accent">Refrigeração</span></span>
        </div>
        <p className="text-p3 text-brand-text-aux max-w-sm">
          Especialistas em instalação e manutenção de câmaras frias, pistas, balcões, parte elétrica completa, testes de compressores, além de lidar com a limpeza preventiva, troca de gaxetas (borrachas) para garantir uma qualidade 100% dos seus frios. Soluções completas com faturamento (NF e boleto). 
        </p>
        <div className="flex flex-col gap-2 pt-2 text-[#F5F7FA] font-bold text-p4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-brand-whatsapp rounded-full animate-pulse"></span> Fortaleza e Região (Especializados em demandas comerciais)
          </div>
          <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest mt-2 block">Cnpj: 44.716.874/0001-15</span>
          <span className="text-white/30 text-[9px] uppercase font-bold tracking-widest mt-1 block max-w-xs">Atendemos: Fortaleza, Caucaia, Maracanaú, Eusébio, Aquiraz, Maranguape, Pacatuba e Itaitinga.</span>
        </div>
      </div>
      <div>
        <h4 className="text-h3 mb-6 text-white">Siga-nos</h4>
        <div className="flex gap-4">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-text-aux hover:bg-brand-whatsapp hover:text-white transition-all shadow-sm group">
            <WhatsappLogo weight="bold" className="text-2xl group-hover:scale-110 transition-transform" />
          </a>
          <a href={INSTA_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-text-aux hover:bg-[#E1306C] hover:text-white transition-all group">
            <InstagramLogo weight="bold" className="text-2xl group-hover:scale-110 transition-transform" />
          </a>
          <a href={PHONE_LINK} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-text-aux hover:bg-brand-primary hover:text-white transition-all group">
            <Phone weight="bold" className="text-2xl group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-h3 mb-6 text-white">Serviços</h4>
        <ul className="space-y-3 text-brand-text-aux/80 text-p3">
          <li className="hover:text-white transition-colors cursor-default">Câmaras Frias & Motores</li>
          <li className="hover:text-white transition-colors cursor-default">Pistas Frias & Balcões</li>
          <li className="hover:text-white transition-colors cursor-default">Tubulação & Gás</li>
          <li className="hover:text-white transition-colors cursor-default">Reparos Elétricos</li>
          <li className="hover:text-white transition-colors cursor-default">Manutenções Preventivas e Limpeza</li>
        </ul>
      </div>
    </div>
    <div className="max-w-[1440px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="text-center md:text-left text-brand-text-aux text-p4 opacity-80">&copy; {new Date().getFullYear()} Paulo Victor Refrigeração Profissional. Todos os direitos reservados.</span>
      <span className="text-p4 text-brand-text-aux/40 text-center md:text-right">
        Desenvolvido por VH Design • Fortaleza - CE
      </span>
    </div>
  </footer>
);

export const FloatingMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show only when user scrolls past header
    const handleScroll = () => {
      // Hide near the bottom where the footer CTA is
      const ctaSection = document.getElementById('contato');
      const atBottomCTA = ctaSection ? (window.scrollY + window.innerHeight > ctaSection.offsetTop) : false;
      
      setIsVisible(window.scrollY > 200 && !atBottomCTA);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full z-40 md:hidden transition-transform duration-300 ease-out p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] ${isVisible ? 'translate-y-0' : 'translate-y-[150%]'}`}>
      <div className="max-w-md mx-auto">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-whatsapp text-white h-[60px] rounded-2xl flex items-center justify-center font-semibold gap-3 shadow-[0_-5px_30px_rgba(34,197,94,0.2)] active:scale-[0.98] transition-transform w-full text-[17px] hover:bg-[#159b4a]">
          <WhatsappLogo weight="fill" className="text-[28px] animate-wiggle" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
