import React, { useEffect, useState } from 'react';
import { WhatsappLogo, X, List } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { WA_LINK } from '../constants';

const NAV_LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of the fixed navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 border-b ${scrolled ? 'bg-brand-card/95 backdrop-blur-md shadow-[0_1px_0_#CDD4E0] border-brand-border h-20' : 'bg-transparent border-transparent h-24'}`}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between h-full">
          <div className="flex items-center gap-3 relative z-[70]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary rounded-full border border-brand-border/20 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              <img src="https://i.ibb.co/kswhJNTT/New-Project.jpg" alt="Paulo Victor Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`text-[1.25rem] font-bold tracking-tight uppercase heading-font leading-none mb-1 transition-colors ${ (scrolled || menuOpen) ? 'text-brand-text' : 'text-white'}`}>Paulo Victor</span>
              <span className={`text-p4 transition-colors ${ (scrolled || menuOpen) ? 'text-brand-primary' : 'text-brand-primary-hover'}`}>Refrigeração Profissional</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 text-p3 transition-colors ${scrolled ? 'text-brand-text-secondary' : 'text-white/70'}`}>
            {NAV_LINKS.filter(l => l.label !== 'Contato').map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-brand-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block relative z-50">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-6 py-2.5 rounded-full font-bold text-p3 flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-brand-whatsapp/20">
              <WhatsappLogo weight="fill" className="text-lg" />
              Orçamento Grátis
            </a>
          </div>

          {/* Mobile Hamburger toggle */}
          <button 
            className={`md:hidden p-2 -mr-2 relative z-[70] transition-colors ${ (scrolled || menuOpen) ? 'text-brand-text' : 'text-white'}`} 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X weight="bold" className="text-3xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <List weight="bold" className="text-3xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-brand-card z-50 flex flex-col pt-32 px-8 pb-10 md:hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <nav className="flex flex-col gap-6 text-h3 flex-1 overflow-y-auto no-scrollbar relative z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-brand-text hover:text-brand-primary w-full pb-4 border-b border-brand-border/50 flex items-center justify-between group"
                >
                  {link.label}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors"
                  >
                    <List weight="bold" className="text-xs rotate-[-90deg]" />
                  </motion.div>
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto relative z-10"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-whatsapp text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-whatsapp/20 active:scale-95 transition-all">
                <WhatsappLogo weight="fill" className="text-[28px]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

