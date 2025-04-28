import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS with dark/light theme support.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://my-portfolio-five-snowy-38.vercel.app/',
    codeUrl: '#',
  },
  {
    id: '2',
    title: 'Invoice Management Application',
    description: 'Full-stack invoice management app with secure authentication, invoice CRUD operations, and data visualization.',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://invoice-app-two-lyart.vercel.app/',
    codeUrl: 'https://github.com/anjeljayswal/invoice-app',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with product listings, cart functionality.',
    technologies: ['React', 'JavaScript', 'CSS'],
    demoUrl: 'https://ecommerce-web-hazel.vercel.app/',
    codeUrl: 'https://github.com/anjeljayswal/EcommerceWeb',
  },
  {
    id: '4',
    title: 'To-do Task Management App',
    description: 'A to-do task list is a simple tool that helps you organize and track tasks or activities that need to be completed.',
    technologies: ['Next.js', 'Tailwind CSS'],
    demoUrl: 'https://taskcalulator.vercel.app/',
    codeUrl: 'https://github.com/anjeljayswal/FinaceCalculator',
  },
    {
    id: '5',
    title: 'Resume Builder',
    description: 'A resume builder is a tool that helps users create professional resumes quickly and easily.',
    technologies: ['React', 'Tailwind CSS'],
    demoUrl: 'https://resume-builder-iota-eosin.vercel.app/',
    codeUrl: 'https://github.com/anjeljayswal/ResumeBuilder',
  },
  // {
  //   id: '5',
  //   title: 'Weather Dashboard',
  //   description: 'Weather application with 5-day forecasts, location search, and interactive maps.',
  //   technologies: ['React', 'OpenWeather API', 'Mapbox'],
  //   demoUrl: '#',
  //   codeUrl: '#',
  // },
];

export default function ProjectsPage() {
  return (
    <Section title="My Projects">
      <div className="mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Here are some of my recent projects. Each one presented unique challenges
          and opportunities to grow as a developer.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            titleClassName="text-indigo-600 dark:text-indigo-400"
            descriptionClassName="text-gray-700 dark:text-gray-300"
            technologyClassName="px-3 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
            buttonClassName="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          />
        ))} */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}