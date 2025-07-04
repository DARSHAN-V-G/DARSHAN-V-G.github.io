import React from 'react';
import { Github, ExternalLink, Users, User } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Infinitum Registration',
      description: 'Google OAuth-based event registration system with full backend monitoring and deployment pipeline.',
      techStack: ['Supabase', 'Docker', 'Winston-Loki', 'Grafana'],
      role: 'solo',
      github: 'https://github.com/GitHub-Campus-Club-PSGCT/Infinitum_website',
      category: 'Full Stack'
    },
    {
      title: 'CSRC Testing Platform',
      description: 'Digitized verification workflow of college\'s external testing process, with multi-level approvals and role-based tracking.',
      techStack: ['MERN', 'PostgreSQL', 'Docker'],
      role: 'team',
      github:'https://github.com/DARSHAN-V-G/CSRC_Testing_verification',
      category: 'Web Development'
    },
    {
      title: 'Event Management System (EMS)',
      description: 'Built with a team of 8, manages inter-department event scores; deployed at NMC.',
      techStack: ['Node.js', 'PostgreSQL'],
      role: 'team',
      category: 'Backend'
    },
    {
      title: 'Codopoly',
      description: 'Auction + debugging platform for competitive programming events; real-time bidding and gameplay using WebSockets.',
      techStack: ['MERN', 'Socket.io'],
      role: 'team',
      github: 'https://github.com/DARSHAN-V-G/Codopoly-Kriya2025',
      category: 'Real-time'
    },
    {
      title: 'Kriya Bot',
      description: 'AI-based chatbot answering participant queries using vector search and large language models.',
      techStack: ['Python', 'RAG', 'Llama 3.1', 'Hugging Face'],
      role: 'team',
      github: 'https://github.com/Students-Union-PSGTech/Kriya_Bot',
      category: 'AI/ML'
    },
    {
      title: 'History Revealed',
      description: 'Immersive historical learning experience with interactive UI and AI-powered voice narration.',
      techStack: ['MERN', 'Three.js', 'ElevenLabs', 'Gemini API'],
      role: 'team',
      github:'https://github.com/DARSHAN-V-G/ideathon-team-OnO',
      category: 'Interactive'
    },
    {
      title: 'College Management System',
      description: 'Multi-module web system for class bookings, library management, and lost & found.',
      techStack: ['Flask', 'MongoDB'],
      role: 'team',
      github:'https://github.com/DARSHAN-V-G/GitGud_1426_NexTech',
      category: 'Web Development'
    }
  ];

  const getColorClass = (category: string) => {
    const colors = {
      'Full Stack': 'from-blue-500 to-cyan-500',
      'Web Development': 'from-green-500 to-emerald-500',
      'Backend': 'from-purple-500 to-violet-500',
      'Real-time': 'from-orange-500 to-red-500',
      'AI/ML': 'from-pink-500 to-rose-500',
      'Interactive': 'from-indigo-500 to-blue-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, machine learning, and system design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${getColorClass(project.category)}`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getColorClass(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    {project.role === 'solo' ? <User size={16} /> : <Users size={16} />}
                    <span className="text-sm capitalize">{project.role}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;