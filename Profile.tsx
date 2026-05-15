import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';

export const Profile = () => {
  const { isDark } = useTheme();

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development team, architecting scalable React applications',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and TypeScript',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2018 - 2020',
      description: 'Built web interfaces with HTML, CSS, JavaScript and jQuery',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      year: '2018',
      details: 'Specialized in web development and user interface design',
    },
    {
      degree: 'Advanced React & TypeScript Course',
      school: 'Online Academy',
      year: '2021',
      details: 'Mastered modern React patterns and TypeScript best practices',
    },
    {
      degree: 'Web Design Certification',
      school: 'Design Institute',
      year: '2017',
      details: 'UI/UX principles and responsive design fundamentals',
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-ubuntu mb-6">
              My <span className="text-teal-500">Profile</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and expertise in frontend development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-ubuntu mb-16"
          >
            Experience
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className={`p-8 rounded-lg border-l-4 border-teal-500 ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold font-ubuntu text-teal-500">
                      {job.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-ubuntu">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-sm font-ubuntu text-gray-500 mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-ubuntu mb-16"
          >
            Education
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className={`p-8 rounded-lg border-l-4 border-teal-500 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                } shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold font-ubuntu text-teal-500">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-ubuntu">
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-sm font-ubuntu text-gray-500 mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
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
          <h2 className="text-3xl font-bold font-ubuntu mb-6">Interested in working together?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your next project and how I can help bring your vision to life.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block px-8 py-3 bg-teal-500 text-white font-ubuntu font-bold rounded-lg hover:bg-teal-600 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};
