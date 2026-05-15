import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Profile', href: '/profile' },
    { name: 'Work', href: '/proof-of-work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } border-b border-teal-200 dark:border-teal-800 shadow-md`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-teal-500 font-ubuntu"
        >
          Dev.
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: '#14B8A6' }}
              className="font-ubuntu hover:text-teal-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          } border-t border-teal-200 dark:border-teal-800`}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-ubuntu text-teal-500 hover:text-teal-600 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
