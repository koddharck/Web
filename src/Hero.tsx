import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const Hero = ({ title, subtitle, description }: HeroProps) => {
  const { isDark } = useTheme();

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } overflow-hidden`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-ubuntu mb-6"
        >
          {title}
          <span className="text-teal-500"> .</span>
        </motion.h1>

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-4xl font-ubuntu text-teal-500 mb-6"
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-ubuntu text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-40 h-40 bg-teal-200 dark:bg-teal-900 rounded-full opacity-20 blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 8, delay: 2, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 dark:bg-teal-900 rounded-full opacity-20 blur-3xl"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
