export type DreamStatus = "planned" | "in-progress" | "completed";
export type SectionId =
  | "historia"
  | "cartas"
  | "sonhos"
  | "fe"
  | "paixoes"
  | "calendario"
  | "memorias"
  | "gratidao";

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}

export interface Dream {
  id: string;
  title: string;
  description: string;
  category: string;
  status: DreamStatus;
}

export interface SpecialEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  description?: string;
}
