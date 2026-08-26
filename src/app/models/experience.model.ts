export type ExperienceType = 'work' | 'education';

export interface ExperienceItem {
  type: ExperienceType;
  title: string;
  period: string;
  place: string;
  description: string;
}

export interface StatItem {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}
