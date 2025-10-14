export interface Skill {
  name: string;
  level: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
  perLine: number;
}

export const skills: Skill[] = [
  // Frontend Skills
  { name: "HTML5", level: 5, category: "frontend", icon: "html", perLine: 1 },
  { name: "CSS3", level: 5, category: "frontend", icon: "css", perLine: 1 },
  { name: "JavaScript", level: 5, category: "frontend", icon: "js", perLine: 1 },
  { name: "TypeScript", level: 4, category: "frontend", icon: "ts", perLine: 1 },
  { name: "React", level: 5, category: "frontend", icon: "react", perLine: 1 },
  { name: "Next.js", level: 4, category: "frontend", icon: "nextjs", perLine: 1 },
  { name: "Tailwind CSS", level: 5, category: "frontend", icon: "tailwind", perLine: 1 },
  { name: "Redux", level: 4, category: "frontend", icon: "redux", perLine: 1 },
  { name: "Material UI", level: 4, category: "frontend", icon: "materialui", perLine: 1 },
  { name: "Bootstrap", level: 4, category: "frontend", icon: "bootstrap", perLine: 1 },

  // Backend Skills
  { name: "Node.js", level: 4, category: "backend", icon: "nodejs", perLine: 1 },
  { name: "Express.js", level: 4, category: "backend", icon: "express", perLine: 1 },
  { name: "MongoDB", level: 3, category: "backend", icon: "mongodb", perLine: 1 },
  { name: "Firebase", level: 3, category: "backend", icon: "firebase", perLine: 1 },
  { name: "REST API", level: 4, category: "backend", icon: "postman", perLine: 1 },

  // Tools
  { name: "Git", level: 4, category: "tools", icon: "git", perLine: 1 },
  { name: "GitHub", level: 4, category: "tools", icon: "github", perLine: 1 },
  { name: "VS Code & Cursor", level: 5, category: "tools", icon: "vscode,cursor", perLine: 2 },
  { name: "Chrome Dev Tools", level: 4, category: "tools", icon: "googlechrome", perLine: 1 },
  { name: "NPM", level: 4, category: "tools", icon: "npm", perLine: 1 }
];
