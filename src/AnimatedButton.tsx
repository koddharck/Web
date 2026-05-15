import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-teal-500 text-white hover:bg-teal-600',
  secondary: 'bg-teal-100 text-teal-900 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-100',
  outline: 'border-2 border-teal-500 text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950',
};

const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-8 py-3 text-lg',
};

export const AnimatedButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
}: AnimatedButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-lg font-ubuntu font-semibold transition-all duration-300 ${
        variants[variant]
      } ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
