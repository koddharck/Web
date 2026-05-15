import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import { FaReact, FaNode, FaGitAlt, FaFigma } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
} from 'react-icons/si';

export const About = () => {
  const { isDark } = useTheme();

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Next.js', icon: SiNextdotjs },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: FaNode },
        { name: 'Firebase', icon: SiFirebase },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'Figma', icon: FaFigma },
      ],
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-ubuntu mb-6">
              About <span className="text-teal-500">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A passionate frontend developer with a love for beautiful design and clean code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`p-8 rounded-lg border-2 border-teal-200 dark:border-teal-800 ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <p className="text-lg leading-relaxed mb-6">
              I'm a frontend developer with 5+ years of experience building web applications.
              I specialize in creating responsive, performant, and beautiful user interfaces
              using modern technologies like React and TypeScript.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              My passion is turning complex problems into simple, beautiful, and intuitive
              designs. I enjoy collaborating with teams and learning new technologies to stay
              current with industry trends.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical articles, or exploring new design trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-ubuntu text-center mb-16"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold font-ubuntu mb-8 text-teal-500 text-center">
                  {skillGroup.category}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {skillGroup.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className={`p-4 rounded-lg border-2 border-teal-200 dark:border-teal-800 flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                          isDark ? 'hover:bg-gray-700' : 'hover:bg-white'
                        }`}
                      >
                        <Icon size={32} className="text-teal-500" />
                        <span className="text-lg font-ubuntu font-semibold">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '30+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="text-4xl font-bold text-teal-500 font-ubuntu mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-ubuntu">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
