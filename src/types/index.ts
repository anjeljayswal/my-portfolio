export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    demoUrl?: string;
    codeUrl?: string;
    imageUrl?: string;
  }
  
  export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
  }