import React from 'react';
import { Mail, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'darshanguna22@gmail.com',
      link: 'mailto:darshanguna22@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/darshan-v-g',
      link: 'https://github.com/darshan-v-g',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/darshan-v-g',
      link: 'https://linkedin.com/in/darshan-v-g',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always excited to collaborate on innovative projects and discuss new opportunities. 
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-3">
                <MessageCircle className="text-primary-500" size={28} />
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's build something amazing together!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mr-4 flex-shrink-0`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-white font-medium hover:text-primary-500 transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/darshan-v-g"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl hover:from-gray-600 hover:to-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/darshan-v-g"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:darshanguna22@gmail.com"
                className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;