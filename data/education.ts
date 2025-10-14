export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  location: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "sonargaon-university",
    institution: "Sonargaon University",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    duration: "2021 - 2025",
    gpa: "3.8/4.0",
    location: "Dhaka, Bangladesh",
    description: "Currently pursuing B.Sc. in Computer Science and Engineering with focus on software development and web technologies."
  },
  {
    id: "queens-school",
    institution: "Queen's School & College",
    degree: "Higher Secondary Certificate",
    field: "Science",
    duration: "2019 - 2021",
    gpa: "5.0/5.0",
    location: "Dhaka, Bangladesh",
    description: "Completed HSC in Science stream with excellent academic performance."
  }
];

export const certifications = [
  {
    id: "wordpress-course",
    title: "WordPress Developer Course",
    provider: "Udemy",
    year: "2021",
    description: "Complete WordPress development course covering themes, plugins, and customization."
  },
  {
    id: "fullstack-course",
    title: "Full-Stack Web Development",
    provider: "Programming Hero",
    year: "2021",
    description: "Comprehensive full-stack development course covering frontend and backend technologies."
  }
];
