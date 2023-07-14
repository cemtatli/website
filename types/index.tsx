export type Section = {
  title: string;
  emoji: string;
  year: string;
  content: string;
};

export interface Link {
  title: string;
  icon: React.ReactNode;
  href: string;
}