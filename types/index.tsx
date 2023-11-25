export type Section = {
  title: string;
  emoji: string;
  year: string;
  content: string;
};

export type Project = {
  title: string;
  desc: string;
  isOpenSource: string;
  tech: string[];
  github: string;
  link: string;
};

export type Link = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export type Bookmark = {
  title: string;
  description: string;
  creationDate: string;
  url: string;
  cover: any;
  tags: string[];
  note: string;
};
