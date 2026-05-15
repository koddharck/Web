import { motion } from 'framer-motion';
import { Hero } from '../Hero';
import { AnimatedButton } from '../AnimatedButton';
import { SocialLinks } from '../SocialLinks';
import { useTheme } from '../../ThemeContext';

export const Home = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js & MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Task Manager App',
      description: 'Real-time collaborative task management application',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, animated portfolio showcasing web development skills',
      tags: ['React', 'Framer Motion', 'TypeScript'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Welcome"
        subtitle="I'm a Frontend Developer"
        description="Crafting beautiful, interactive web experiences with modern technologies. Specializing in React, TypeScript, and smooth animations."
      />

      {/* CTA Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold font-ubuntu text-gray-900 dark:text-white"
            >
              Let's Build Something Amazing
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              I create responsive, performant web applications that users love. Let's collaborate
              and bring your ideas to life.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <AnimatedButton
                onClick={() => (window.location.href = '/proof-of-work')}
              >
                View My Work
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                onClick={() => (window.location.href = '/contact')}
              >
                Get in Touch
              </AnimatedButton>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks className="justify-center" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-ubuntu text-center mb-16 text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-lg border-2 border-teal-200 hover:border-teal-500 transition-all duration-300 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <h3 className="text-xl font-bold font-ubuntu mb-3 text-teal-500">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-ubuntu"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <AnimatedButton onClick={() => (window.location.href = '/proof-of-work')}>
              See All Projects
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
