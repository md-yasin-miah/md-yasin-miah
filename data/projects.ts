export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "agritech-b2b",
    title: "B2B MultiVendor AgriTech Software",
    description: "A comprehensive B2B platform for agricultural vendors with multi-vendor support, inventory management, and order processing capabilities.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://agritech-demo.com",
    githubUrl: "https://github.com/md-yasin-miah/agritech-platform",
    image: "/images/agritech-project.jpg",
    featured: true
  },
  {
    id: "hrms-portal",
    title: "HRMS Portal Portfolio",
    description: "Human Resource Management System with employee management, payroll, attendance tracking, and reporting features.",
    techStack: ["React", "Next.js", "TypeScript", "Material UI", "Express.js", "MongoDB"],
    liveUrl: "https://hrms-demo.com",
    githubUrl: "https://github.com/md-yasin-miah/hrms-portal",
    image: "/images/hrms-project.jpg",
    featured: true
  },
  {
    id: "company-portfolio",
    title: "Company Portfolio",
    description: "Modern, responsive company portfolio website with CMS integration, blog functionality, and contact management.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    liveUrl: "https://company-portfolio.com",
    githubUrl: "https://github.com/md-yasin-miah/company-portfolio",
    image: "/images/company-portfolio.jpg",
    featured: false
  }
];
