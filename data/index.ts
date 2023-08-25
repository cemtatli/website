import { Project, Section } from "@/types";

export const sections: Section[] = [
  {
    title: "Career",
    emoji: "🎯",
    year: "",
    content:
      "As a Jr. Frontend Developer, my career goal is to level up, stay tech-savvy, and rock complex projects. I want to create user-friendly and jaw-dropping interfaces by keeping up with the latest web trends. I'm all about adapting to shiny new tech and staying in the loop."
  },
  {
    title: "Joined the mentee system - Sıfırdanbire",
    emoji: "📍",
    year: "2023",
    content:
      "I am happy to have joined and been selected for a program created by experienced individuals in the frontend field. It is an organization that provides guidance services by giving personalized programs and roadmaps."
  },
  {
    title: "My journey of self-development",
    emoji: "👨🏻‍💻",
    year: "2023",
    content:
      "I can say that 80% of my development process was on youtube. Since I am a person who learns by watching, I can say that I developed most of the time by watching the live broadcasts of Prototürk, Beta Yazılım Günlüğü, Adem İlter, Teknasyon and Frontendship. I also attended Patika.dev courses."
  },
  {
    title: "Introduction to software",
    emoji: "🖥️",
    year: "2023",
    content:
      "Since about January, I have been focusing on interface development and creating mobile-first projects. I try to develop projects that prioritize responsive design using technologies such as React, Next.js, TypeScript, and Tailwind CSS. I can say that I love to use new technologies all the time."
  },
  {
    title: "Graduated from university",
    emoji: "🧑🏻‍🎓",
    year: "2022",
    content:
      "I graduated from the Management Information Systems department. During my university years, I worked on projects in various programming languages such as Python, PHP (Joomla), Flutter, and Kotlin."
  },
  {
    title: "Introduction to the Crypto World",
    emoji: "🪙",
    year: "2020",
    content:
      "I introduced myself to the world of cryptocurrencies. Initially, I was just tracking coins, but later on, I found myself actively trading and generating income. As I delved deeper into this world, I also discovered the realm of blockchain technology and completed my university thesis by developing a project based on blockchain."
  },
  {
    title: "Hello World",
    emoji: "🍼",
    year: "1999",
    content: "On the 24th of June."
  }
];

export const projects: Project[] = [
  {
    title: "Houze",
    openSource: "true",
    desc: "The Best hotels are on Houze. Compare hotel prices, book hotels without prepayment. Read the latest customer reviews. See the latest pictures of hotels",
    tech: ["Next.js", "TypeScript", "Zustand", "NextAuth", "Prisma", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/cemtatli/houze",
    link: ""
  },
  {
    title: "Jhub",
    openSource: "true",
    desc: "JobHub a platform for finding job according to your experience",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/cemtatli/jhub",
    link: "https://jhub-page.vercel.app/"
  },
  {
    title: "Lugat",
    openSource: "true",
    desc: "The open-source dictionary project that includes the terms frontend developers need to know, along with their Turkish meanings and code examples.",
    tech: ["React", "Tailwind CSS", "Context API", "React-Highlighter"],
    github: "https://github.com/cemtatli/lugat",
    link: "https://lugat.website"
  },
  {
    title: "Coinim",
    openSource: "false",
    desc: "It offers real-time and historical market data for 100+ cryptocurrencies, allowing users to register, track their favorite coins, and manage their portfolio.",
    tech: ["React", "REST API", "Axios", "Tailwind CSS", "Firebase", "i18n", "Context API"],
    github: "https://github.com/cemtatli/Coinim",
    link: "https://coinim.vercel.app/"
  },
  {
    title: "izmirim",
    openSource: "true",
    desc: "A city guide containing all the up-to-date information about Izmir",
    tech: [
      "React",
      "TypeScript",
      "TanStack Query",
      "React-Router",
      "Framer Motion",
      "i18n",
      "REST API"
    ],
    github: "https://github.com/cemtatli/izmirim",
    link: "https://izmirim.vercel.app/"
  },
  {
    title: "Meridian",
    openSource: "true",
    desc: "A Twitter-like social media application with a user-friendly interface, where people can share their ideas, thoughts, and interests.",
    tech: ["React", "Formik & Yup", "Firebase", "Tailwind CSS", "i18n"],
    github: "https://github.com/cemtatli/Meridian",
    link: "https://meridian-social.vercel.app/"
  },
  {
    title: "Portfolio",
    openSource: "true",
    desc: "Cumulative work experience, projects, blog posts, and bookmarks that I have shared constitute my personal website.",
    tech: ["Next.js", "TypeScript", "shadcn/ui", "REST API", "Tailwind CSS"],
    github: "https://github.com/cemtatli/cemtatli.dev",
    link: "https://cemtatli.dev"
  },
  {
    title: "Shopla",
    openSource: "false",
    desc: "Developed an e-commerce website using Trendyol Baklava design, REST API, Tailwind, React, and Redux Toolkit.",
    tech: ["React", "Redux Toolkit", "Trendyol Baklava Design"],
    github: "https://github.com/cemtatli/shopla",
    link: "https://shopla.vercel.app/"
  },
  {
    title: "Caps Generator",
    openSource: "true",
    desc: "This project allows you to generate captions like any popular meme recently",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/cemtatli/herhangibir",
    link: "https://herhangibir.vercel.app/"
  },
  {
    title: "Secim Sayacı",
    openSource: "true",
    desc: "It is a countdown application prepared for the Presidential and Local Elections of Turkey.",
    tech: ["React", "TypeScript", "Headless UI", "Context API", "REST API"],
    github: "https://github.com/cemtatli/secimsayaci",
    link: "https://secimsayaci.vercel.app/"
  },
  {
    title: "Rick & Morty",
    openSource: "false",
    desc: "The project 'TailwindCSS, React async methods' is a project created to learn about making fetch requests.",
    tech: ["React", "Tailwind CSS", "REST API"],
    github: "https://github.com/cemtatli/react-tailwind-fetch-crash-course",
    link: "https://react-tailwind-fetch-crash-course.vercel.app/"
  },
  {
    title: "Quiz App",
    openSource: "false",
    desc: "A random number of 5 questions are displayed out of 20 questions based on varying levels of difficulty. In questions with 4 options, the user can use the hint option. The result is shown at the end of the quiz.",
    tech: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/cemtatli/quizle",
    link: "https://sifirdanbire-quizapp.vercel.app/"
  },
  {
    title: "Frontendvideos",
    openSource: "true",
    desc: "Provides Junior Frontend developers with useful and instructive YouTube videos that can help them break into the industry.",
    tech: ["React", "Headless UI", "Tailwind CSS"],
    github: "https://github.com/cemtatli/frontendvideos",
    link: "https://frontendvideos.vercel.app/"
  },
  {
    title: "Pomodoro",
    openSource: "true",
    desc: "The Pomodoro method is an effective productivity technique. By working for 25 minutes and taking a 5-minute break, you can enhance your efficiency.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/cemtatli/Pomodoro",
    link: "https://reactjs-pomodoro.vercel.app/"
  },
  {
    title: "Todo App",
    openSource: "false",
    desc: "Todo app built for test-case",
    tech: ["HTML", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/cemtatli/Todo",
    link: "https://yapilacaklar-listesi.vercel.app/"
  },
  {
    title: "Blog",
    openSource: "false",
    desc: "Nextwind is a website built using Next.js and Tailwind CSS. It retrieves blog content from DummyJSON.",
    tech: ["Next.js", "Tailwind CSS", "REST API"],
    github: "https://github.com/cemtatli/Nextwind",
    link: "https://nextwind-blog.vercel.app/"
  },
  {
    title: "Getir",
    openSource: "false",
    desc: "I used only HTML, TailwindCSS and JavaScript technologies in this clone project.",
    tech: ["HTML5", "JavaScript", "CSS"],
    github: "https://github.com/cemtatli/getir",
    link: "https://getir-app.vercel.app/"
  },
  {
    title: "Youtube Music",
    openSource: "false",
    desc: "I used only HTML, TailwindCSS and JavaScript technologies in this clone project.",
    tech: ["HTML5", "JavaScript", "CSS"],
    github: "https://github.com/cemtatli/YoutubeMusic",
    link: "https://youtubemusic-clone.netlify.app/"
  }
];
