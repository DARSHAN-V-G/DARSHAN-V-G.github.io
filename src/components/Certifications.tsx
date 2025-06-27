import React from 'react';
import { Award, Trophy, Users, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Full Stack Development',
      issuer: 'InternEzy',
      type: 'certification',
      date: '2024',
      description: 'Comprehensive full-stack development program covering modern web technologies'
    },
    {
      title: 'UI/UX Design',
      issuer: 'InternEzy',
      type: 'certification',
      date: '2024',
      description: 'Design principles, user research, and prototyping for web and mobile applications'
    },
    {
      title: 'Generative AI Workshop',
      issuer: 'EY (Ernst & Young)',
      type: 'workshop',
      date: '2024',
      description: 'Advanced generative AI concepts and practical applications in business'
    }
  ];

  const achievements = [
    {
      title: 'NexTech 2024',
      position: '1st Place',
      type: 'hackathon',
      date: '2024',
      description: 'Winner of premier tech hackathon with innovative solution'
    },
    {
      title: 'HackSphere 2025',
      position: '1st Place',
      type: 'hackathon',
      date: '2025',
      description: 'Champion of inter-college hackathon competition'
    },
    {
      title: 'Sociotech',
      position: 'Participant',
      type: 'competition',
      date: '2024',
      description: 'Participated in social technology innovation challenge'
    },
    {
      title: 'ImagineerX',
      position: 'Participant',
      type: 'competition',
      date: '2024',
      description: 'Engineering innovation and design competition'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
      case 'workshop':
        return Award;
      case 'hackathon':
        return Trophy;
      default:
        return Users;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'from-blue-500 to-cyan-500';
      case 'workshop':
        return 'from-purple-500 to-violet-500';
      case 'hackathon':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-green-500 to-emerald-500';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for technical excellence and continuous learning in software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-primary-500" size={28} />
              Certifications & Workshops
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const IconComponent = getIcon(cert.type);
                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getColor(cert.type)} text-white flex-shrink-0`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {cert.title}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getColor(cert.type)}`}>
                            {cert.type}
                          </span>
                        </div>
                        <p className="text-primary-500 font-medium mb-2">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <Calendar size={14} />
                          <span>{cert.date}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Trophy className="text-accent-500" size={28} />
              Hackathons & Competitions
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = getIcon(achievement.type);
                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getColor(achievement.type)} text-white flex-shrink-0`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getColor(achievement.type)}`}>
                            {achievement.position}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <Calendar size={14} />
                          <span>{achievement.date}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl text-white animate-bounce-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm">Certifications</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm">Hackathon Wins</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl text-white animate-bounce-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold mb-2">4</div>
            <div className="text-sm">Competitions</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white animate-bounce-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm">Workshop</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;