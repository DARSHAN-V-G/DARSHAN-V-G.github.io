import React from 'react';
import { Code, Database, Server, Wrench, Brain, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'C', 'C++', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Development',
      icon: Server,
      skills: ['MERN', 'Supabase', 'Next.js'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'SQL', 'MongoDB'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'DevOps/Tools',
      icon: Wrench,
      skills: ['Docker', 'Git', 'CI/CD', 'Grafana', 'Winston', 'Postman'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Core CS Concepts',
      icon: Brain,
      skills: ['OS (scheduling, threads, memory)', 'DBMS (SQL, joins, indexing)'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Others',
      icon: Palette,
      skills: ['Figma', 'REST APIs', 'OAuth', 'JWT', 'Socket.io'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of software development and computer science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 animate-pulse`}></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">
                        {skill}
                      </span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 ml-3">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${Math.min(85 + Math.random() * 15, 100)}%`,
                            animationDelay: `${index * 0.2 + skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Level Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gray-100 dark:bg-gray-900 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;