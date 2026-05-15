import { useTheme } from '../ThemeContext';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'
      } border-t border-teal-200 dark:border-teal-800 mt-20 py-12`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-teal-500 font-ubuntu font-bold text-lg mb-4">Dev.</h3>
            <p className="font-ubuntu">
              A frontend developer crafting beautiful and functional web experiences.
            </p>
          </div>
          <div>
            <h4 className="font-ubuntu font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="font-ubuntu space-y-2">
              <li>
                <a href="/" className="hover:text-teal-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-teal-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/proof-of-work" className="hover:text-teal-500 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-teal-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-ubuntu font-bold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <SocialLinks />
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-300'} pt-8`}>
          <p className="font-ubuntu text-center text-sm">
            © {currentYear} All rights reserved. Built with React, TypeScript & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};
