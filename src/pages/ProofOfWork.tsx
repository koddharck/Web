import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProofOfWork = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      links: {
        github: 'https://github.com/koddharck',
        live: 'https://web-beta-three-97.vercel.app',
      },
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Real-time collaborative task management with Firebase backend and beautiful animations.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      image: '✅',
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'Interactive weather dashboard with real-time data, charts, and location-based forecasts.',
      tags: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
      image: '🌤️',
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
    {
      id: 4,
      title: 'Crypto Tracker',
      description:
        'Real-time cryptocurrency price tracker with portfolio management and price alerts.',
      tags: ['React', 'TypeScript', 'Redux', 'CoinGecko API'],
      image: '💰',
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for managing multiple social media accounts and tracking engagement.',
      tags: ['React', 'Next.js', 'PostgreSQL', 'Recharts'],
      image: '📊',
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
    {
      id: 6,
      title: 'Video Streaming Platform',
      description:
        'Video hosting and streaming platform with user authentication and custom video player.',
      tags: ['React', 'Express', 'FFmpeg', 'AWS S3'],
      image: '🎬',
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-ubuntu mb-6">
              Proof of <span className="text-teal-500">Work</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of projects I've built showcasing my skills in frontend development,
              design, and problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className={`rounded-lg overflow-hidden border-2 border-teal-200 dark:border-teal-800 shadow-md hover:shadow-2xl transition-all duration-300 ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                {/* Project Image/Icon */}
                <div
                  className={`h-48 flex items-center justify-center text-6xl ${
                    isDark ? 'bg-gray-800' : 'bg-teal-50'
                  }`}
                >
                  {project.image}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-ubuntu mb-2 text-teal-500">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-xs font-ubuntu font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub size={18} />
                      <span className="font-ubuntu text-sm">Code</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="font-ubuntu text-sm">Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-ubuntu text-center mb-16"
          >
            What Others Say
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'John Doe',
                role: 'CEO, Tech Company',
                text: 'Exceptional frontend developer. Delivered the project ahead of schedule with amazing attention to detail.',
              },
              {
                name: 'Jane Smith',
                role: 'Product Manager, Startup',
                text: 'Collaborated seamlessly with our team. Great communication and problem-solving skills.',
              },
              {
                name: 'Mike Johnson',
                role: 'Designer, Creative Agency',
                text: 'Brought my designs to life perfectly. Very professional and open to feedback.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold font-ubuntu text-teal-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-ubuntu">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold font-ubuntu mb-6">Have a project in mind?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's collaborate and create something amazing together.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block px-8 py-3 bg-teal-500 text-white font-ubuntu font-bold rounded-lg hover:bg-teal-600 transition-colors"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};
