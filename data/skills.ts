export interface Skill {
  name: string;
  level: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
}

export const skills: Skill[] = [
  // Frontend Skills
  { name: "HTML5", level: 5, category: "frontend", icon: "html" },
  { name: "CSS3", level: 5, category: "frontend", icon: "css" },
  { name: "JavaScript", level: 5, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 4, category: "frontend", icon: "typescript" },
  { name: "React", level: 5, category: "frontend", icon: "react" },
  { name: "Next.js", level: 4, category: "frontend", icon: "nextjs" },
  { name: "Tailwind CSS", level: 5, category: "frontend", icon: "tailwind" },
  { name: "Redux", level: 4, category: "frontend", icon: "redux" },
  { name: "Material UI", level: 4, category: "frontend", icon: "mui" },
  { name: "Bootstrap", level: 4, category: "frontend", icon: "bootstrap" },

  // Backend Skills
  { name: "Node.js", level: 4, category: "backend", icon: "nodejs" },
  { name: "Express.js", level: 4, category: "backend", icon: "express" },
  { name: "MongoDB", level: 3, category: "backend", icon: "mongodb" },
  { name: "Firebase", level: 3, category: "backend", icon: "firebase" },
  { name: "REST API", level: 4, category: "backend", icon: "api" },

  // Tools
  { name: "Git", level: 4, category: "tools", icon: "git" },
  { name: "GitHub", level: 4, category: "tools", icon: "github" },
  { name: "VS Code", level: 5, category: "tools", icon: "vscode" },
  { name: "Chrome Dev Tools", level: 4, category: "tools", icon: "chrome" },
  { name: "NPM", level: 4, category: "tools", icon: "npm" }
];
