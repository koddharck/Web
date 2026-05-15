import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const { isDark } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    if (onSubmit) {
      onSubmit(data);
    }

    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg font-ubuntu border-2 border-transparent transition-all duration-300 ${
    isDark
      ? 'bg-gray-800 text-white hover:border-teal-500 focus:border-teal-500 focus:outline-none'
      : 'bg-gray-100 text-gray-900 hover:border-teal-500 focus:border-teal-500 focus:outline-none'
  }`;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4 max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={inputClasses}
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={inputClasses}
        />
      </div>

      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className={inputClasses}
      />

      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        className={`${inputClasses} resize-none`}
      ></motion.textarea>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-teal-500 text-white font-ubuntu font-bold py-3 rounded-lg hover:bg-teal-600 transition-all duration-300"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};
