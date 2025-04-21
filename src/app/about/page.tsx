import Section from '@/components/Section';

export default function AboutPage() {
    return (
        <>
            <Section title="About Me">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                            I'm a passionate frontend developer with 2 years of experience building modern web applications.
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
                                    { name: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind CSS, CSS, HTML' },
                                    { name: 'Backend', skills: 'Node.js, Express, JavaScript' },
                                    { name: 'Databases', skills: 'MongoDB, PostgreSQL, Firebase' },
                                    { name: 'Tools', skills: 'Github' },
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
                            role: 'Fullstack Developer ',
                            company: 'Goalbook',
                            period: 'March 2024 - Present',
                            description: [
                                'Sanity.io: Expert in using Sanity.io for content management, including schema creation, custom content models, and rich text editing with Portable Text.',
                                'Frontend Development: Developed dynamic, responsive web applications using HTML, CSS, and JavaScript. Built SPAs with React.js, ensuring high performance and user-friendly interfaces.',
                                'Next.js: Leveraged Next.js for server-side rendering (SSR) and static site generation (SSG) to enhance SEO and performance.',
                                'Backend Development: Implemented RESTful APIs and handled server-side logic using Node.js.',
                                'Database Management: Integrated MongoDB for efficient data storage and retrieval, ensuring quick access to content.  Familiar with PostgreSQL and Sequelize for basic data operations.',
                                'Tech Stack: NextJS, ReactJS, Tailwind CSS, NextJS API Routing, GitHub.'
                            ]
                        },
                        {
                            id: '2',
                            role: ' Internship & Certifications',
                            company: 'Newton School',
                            period: ' July 2022 - July 2023',
                            description: [
                                'Web Development with problem-solving',
                                'Participated in various contests organized by the platform.',
                                'Worked on various projects- Tic-tac-toe, Calculator, TextUtil, Quora clone, and Flipkart clone.',
                                'Technical Stack Learnt- HTML, CSS, ReactJS.'
                            ]
                        },
                        {
                            id: '3',
                            role: 'Data Entry Operator & Enumerator',
                            company: 'Central Bureau of Statistics',
                            period: ' Nov 2021 - Nov 2022',
                            description: [
                                'Collected demographic and socioeconomic data for the National Population Census through direct community interaction.',
                                'Accurately entered collected data into the CBS digital system to ensure efficient record-keeping.',
                                'Ensured data accuracy and integrity while managing large datasets.',
                            ]
                        },
                        {
                            id: '4',
                            role: 'Junior Web Developer',
                            company: 'JAIT Solution',
                            period: '2020 - 2021',
                            description: [
                                'Designed and developed websites with a focus on front-end using HTML, CSS, and JavaScript.',
                                'Collaborated with clients to create customized and visually appealing front-end designs.',
                                'Gained proficiency in version control using Git and GitHub, enabling efficient code management and collaboration.',
                                'Actively contributed to the learning process, acquiring new skills and knowledge related to web development I worked for the company as a web developer, where I developed a website for the clients.',

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