import Section from '@/components/Section';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Section title="Welcome">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
              Hi, I'm <span className="text-emerald-500 dark:text-emerald-400">Anjali Jayswal</span>
            </h1>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              I build exceptional digital experiences with modern web technologies.
              Focused on creating accessible, performant, and visually appealing applications.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg inline-block"
              >
                View My Work
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-500 transition-all shadow-md hover:shadow-lg inline-block"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              AJ
            </div>
          </div>
        </div>
      </Section>

      <Section title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'GraphQL', 'Python', 'Django'].map((skill) => (
            <div
              key={skill}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Recent Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              id: '1',
              title: 'Portfolio Website',
              description: 'A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
              technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            },
            {
              id: '2',
              title: 'E-commerce Platform',
              description: 'Full-stack e-commerce platform with React and Node.js.',
              technologies: ['React', 'Node.js', 'MongoDB'],
            }
          ].map((project) => (
            <div 
              key={project.id} 
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link 
            href="/projects" 
            className="px-5 py-2 rounded-md text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-1"
          >
            View all projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </Section>
    </>
  );
}