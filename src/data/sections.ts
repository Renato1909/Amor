import type { SectionId } from "./models";

export interface SiteSection {
  id: SectionId;
  title: string;
  description: string;
  path: string;
}

export const siteSections: SiteSection[] = [
  { id: "historia", title: "Nossa história", description: "Linha do tempo e acontecimentos importantes.", path: "/historia/" },
  { id: "cartas", title: "Cartinhas", description: "Cartas, promessas e declarações.", path: "/cartas/" },
  { id: "sonhos", title: "Nosso futuro", description: "Sonhos, planos e objetivos.", path: "/sonhos/" },
  { id: "fe", title: "Nossa fé", description: "Orações, celebrações e serviço na Igreja.", path: "/fe/" },
  { id: "paixoes", title: "Nossas paixões", description: "São Paulo, futebol e música.", path: "/paixoes/" },
  { id: "calendario", title: "Calendário", description: "Datas especiais e acontecimentos.", path: "/calendario/" },
  { id: "memorias", title: "Nossas memórias", description: "Fotografias e momentos para revisitar.", path: "/memorias/" },
  { id: "gratidao", title: "Diário de gratidão", description: "Registros e motivos para agradecer.", path: "/gratidao/" },
];
