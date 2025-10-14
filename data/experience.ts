export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "fasholdotcom",
    company: "FasholDotcom Ltd",
    position: "Frontend Developer",
    duration: "2022 - Present",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Developed responsive web applications using React and Next.js",
      "Implemented modern UI/UX designs with Tailwind CSS and Material UI",
      "Optimized application performance resulting in 40% faster load times",
      "Collaborated with backend team to integrate RESTful APIs",
      "Mentored junior developers and conducted code reviews"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux"]
  },
  {
    id: "techforing",
    company: "TechForing Ltd",
    position: "Frontend Developer",
    duration: "2021 - 2022",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Built scalable frontend applications for cybersecurity clients",
      "Implemented responsive designs for mobile and desktop platforms",
      "Integrated third-party APIs and payment gateways",
      "Participated in agile development processes and sprint planning",
      "Contributed to open-source projects and company documentation"
    ],
    techStack: ["React", "JavaScript", "CSS3", "Bootstrap", "Node.js", "Express.js"]
  }
];
