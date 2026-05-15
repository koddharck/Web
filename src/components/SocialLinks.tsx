import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
}

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/koddharck', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/koddharck', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/Divad_Ay', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:okunoladavida@gmail.com', label: 'Email' },
];

export const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="p-2 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-500 hover:text-white dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-500 transition-all duration-300"
        >
          <social.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};
