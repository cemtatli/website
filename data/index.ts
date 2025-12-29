export interface Experience {
  title: string;
  company: string;
  startYear: number;
  endYear: number | "Present";
  isCurrent?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
}

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "E12",
    startYear: 2024,
    endYear: "Present",
    isCurrent: true
  },
  {
    title: "Frontend Developer",
    company: "Epigra",
    startYear: 2023,
    endYear: 2024
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/cemtatli"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/cemtatli"
  },
  {
    name: "Medium",
    url: "https://medium.com/@cemtatli"
  }
];

export const profile = {
  name: "Cem Tatlı",
  title: "Frontend Developer",
  avatar: "https://github.com/cemtatli.png",
  description: "Crafting some cool stuff with code and design."
};
