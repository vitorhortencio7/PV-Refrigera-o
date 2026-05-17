import { ThermometerCold, Storefront, Snowflake, Wrench, ShieldCheck, Lightning } from '@phosphor-icons/react';

// Contact Info
export const WA_NUMBER = '5585994159026';
export const WA_TEXT = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;
export const INSTA_LINK = 'https://www.instagram.com/pvrefrigeracaofc';
export const PHONE_LINK = 'tel:+5585994159026';

// Data Arrays
export const DYNAMIC_WORDS = [
  "Câmaras Frias",
  "Pistas Frias",
  "Balcões Congelados",
  "Banho Maria",
  "Troca de Compressores",
  "Tubulação e Gás"
];

export const SERVICES = [
  { icon: ThermometerCold, t: 'Câmaras Frias & Motores', d: 'Manutenção especializada no coração da sua câmara fria, garantindo o frio ideal em Fortaleza.' },
  { icon: Snowflake, t: 'Pistas Frias & Balcão', d: 'Troca de compressores, instalação e reparos em pistas frias e balcões congelados.' },
  { icon: Wrench, t: 'Solda, Vazamento e Gás', d: 'Soldagem precisa para achar vazamentos em tubulações, além de troca de gás e desobstrução de drenos.' },
  { icon: Lightning, t: 'Elétrica & Controladoras', d: 'Entendemos toda a parte elétrica, troca de controladoras e revisão de condensadoras.' },
  { icon: ShieldCheck, t: 'Preventiva & Gaxetas', d: 'Lavagem completa de equipamentos para evitar quebras, além de troca das borrachas (gaxetas).' },
  { icon: Storefront, t: 'Banho Maria & Inox', d: 'Adaptações sob medida em inox, como carrinhos para geladeiras, e conserto de banho maria.' },
];

export const PROJECTS = [
  { 
    beforeImg: 'https://i.ibb.co/FkWfhJ6w/referencia-1.jpg', 
    afterImg: 'https://i.ibb.co/ccZ1w9d9/referencia-2.jpg',
    title: 'Manutenção em Câmara Fria Industrial',
    description: 'Atuação direta na correção de temperatura e troca de compressores em centros de distribuição. Garantimos zero desperdício de carga em operações logísticas de grande escala.',
    tags: ['Industrial', 'Compressores', 'Garantia']
  },
  { 
    beforeImg: 'https://i.ibb.co/7JsStxBR/referencia-3.jpg', 
    afterImg: 'https://i.ibb.co/LDz5Gh3v/referencia-4.jpg',
    title: 'Instalação de Ilhas de Congelados',
    description: 'Redesign térmico para supermercados e padarias. Instalamos pistas de frios e balcões expositores com foco em eficiência energética e durabilidade extrema do equipamento.',
    tags: ['Supermercados', 'Varejo', 'Eficiência']
  },
  { 
    beforeImg: 'https://i.ibb.co/5X66bMgG/referencia-5.jpg', 
    afterImg: 'https://i.ibb.co/QjPq0TqR/referencia-6.jpg',
    title: 'Prevenção Técnica 24 Horas',
    description: 'Monitoramento em campo e reparos elétricos urgentes. Nossa equipe atua em toda a Região Metropolitana de Fortaleza para resolver paradas críticas a qualquer hora do dia.',
    tags: ['Urgência 24h', 'Elétrica', 'Campo']
  }
];

export const CLIENT_LOGOS = [
  "https://i.ibb.co/3mrKY70y/1.png",
  "https://i.ibb.co/m5M4spTW/2.png",
  "https://i.ibb.co/YFVhHF2Z/4.png",
  "https://i.ibb.co/pvfxGf4b/5.png",
  "https://i.ibb.co/xtZpWDFY/6.png",
  "https://i.ibb.co/wFq5mqGy/7.png",
  "https://i.ibb.co/DfSD9gNT/8.png",
  "https://i.ibb.co/7JXcwvdh/9.png",
  "https://i.ibb.co/5W8KhZSp/Parrilheiro.jpg"
];

export const TESTIMONIALS = [
  { 
    n: 'Juliana Boto', 
    text: 'Quem tem restaurante em Fortaleza sabe o desespero quando um freezer ou câmara fria para no fim de semana. O Paulo Victor resolveu super rápido, preço justo e salvou nosso estoque. Hoje cuida de toda a manutenção preventiva das nossas lojas.', 
    l: 'J',
    logo: CLIENT_LOGOS[0],
    role: 'Gerente de Suprimentos da MenuBrands'
  },
  {
    n: 'Zuellington Lemos',
    text: 'Contratamos o Paulo Victor para a manutenção urgente dos nossos balcões de pista fria e geladeiras industriais na Aldeota. Serviço limpo, rápido e feito sem atrapalhar a cozinha do restaurante. Indico de olhos fechados!',
    l: 'Z',
    logo: 'https://i.ibb.co/YFvRHmVT/4.png',
    role: 'Sócio-Diretor do Illa Mare'
  },
  { 
    n: 'Noélia Fontenelle', 
    text: 'Trabalhamos com o Paulo há mais de 4 anos na assistência técnica da nossa refrigeração profissional. Sempre pontual, transparente com as peças e emite nota fiscal. É o melhor técnico de geladeiras comerciais de Fortaleza.', 
    l: 'N',
    logo: 'https://i.ibb.co/Mx79sSt4/5.png',
    role: 'Fundadora da Noélia Doces e Salgados'
  }
];

export const HERO_IMAGES = [
  "https://i.ibb.co/XkvFwjsh/Imagem-1.jpg",
  "https://i.ibb.co/S4kTZs9k/Imagem-2.jpg",
  "https://i.ibb.co/FqhvSWGk/Imagem-3.jpg"
];
