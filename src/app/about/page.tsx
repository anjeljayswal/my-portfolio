import Section from '@/components/Section';

export default function AboutPage() {
  return (
    <>
      <Section title="About Me">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm a passionate frontend developer with 5 years of experience building modern web applications.
              My expertise lies in React, TypeScript, and Next.js, with a strong focus on creating
              accessible and performant user interfaces.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I believe in clean, maintainable code and enjoy solving complex problems with simple solutions.
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                My Values
              </h3>
              <ul className="space-y-3">
                {[
                  'Continuous learning and improvement',
                  'User-centric design',
                  'Code quality and maintainability',
                  'Collaboration and knowledge sharing',
                  'Performance and accessibility'
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 dark:text-emerald-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 sticky top-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind CSS' },
                  { name: 'Backend', skills: 'Node.js, Express, Python, Django' },
                  { name: 'Databases', skills: 'MongoDB, PostgreSQL, Firebase' },
                  { name: 'Tools', skills: 'Git, Docker, Figma, Jest' },
                ].map((skill, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-emerald-500 dark:text-emerald-400">
                      {skill.name}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {skill.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          {[
            {
              id: '1',
              role: 'Senior Frontend Developer',
              company: 'TechCorp',
              period: '2020 - Present',
              description: [
                'Led the development of a customer-facing dashboard using React and TypeScript',
                'Improved application performance by 40% through code optimization',
                'Mentored junior developers and conducted code reviews'
              ]
            },
            {
              id: '2',
              role: 'Frontend Developer',
              company: 'WebSolutions',
              period: '2018 - 2020',
              description: [
                'Developed responsive web applications using React and Redux',
                'Collaborated with designers to implement UI components',
                'Participated in agile development processes'
              ]
            }
          ].map((exp) => (
            <div key={exp.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
                <span className="text-emerald-500 dark:text-emerald-400">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="text-emerald-500 dark:text-emerald-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}