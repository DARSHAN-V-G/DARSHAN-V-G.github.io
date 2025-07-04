import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      organization: 'Students Union (SU)',
      role: 'Technical Lead',
      period: '2024 - Present',
      location: 'PSG Tech',
      description: 'Leading technical initiatives including Kriya Bot development, infrastructure optimization, and implementing monitoring tools for student events.',
      achievements: [
        'Developed Kriya Bot using RAG and Llama 3.1',
        'Optimized infrastructure for large-scale events',
        'Implemented comprehensive monitoring solutions'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      organization: 'GitHub Campus Club',
      role: 'Core Team Member',
      period: '2024 - Present',
      location: 'PSG Tech',
      description: 'Contributing to open-source projects and organizing developer events. Built Codopoly and giTogether portal.',
      achievements: [
        'Built real-time auction platform with Socket.io',
        'Organized Git/GitHub workshops for 200+ students',
        'Mentored junior developers in open-source contributions'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      organization: 'CSEA (Computer Science Engineers Association)',
      role: 'Backend Developer',
      period: '2024 - Present',
      location: 'PSG Tech',
      description: 'Backend development for department events and systems. Built Infinitum registration system and EMS project.',
      achievements: [
        'Developed scalable backend for Infinitum event',
        'Built PostgreSQL APIs for Event Management System',
        'Implemented OAuth-based authentication systems'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Active involvement in technical communities and leadership roles in student organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white mr-4`}>
                        <Building size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.organization}
                        </h3>
                        <p className="text-primary-500 font-medium">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-primary-500 shadow-lg z-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} animate-pulse`}></div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;