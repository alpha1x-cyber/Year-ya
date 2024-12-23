import { Facebook, Instagram, WhatsApp } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: WhatsApp,
    href: 'https://wa.me/9647830528876',
    color: 'hover:text-green-400'
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/yassindeveloper?mibextid=ZbWKwL',
    color: 'hover:text-blue-500'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/yassindeveloper?igsh=ZzFjNXlnMTVxcG5p',
    color: 'hover:text-pink-500'
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4 mt-2">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white transition-colors duration-200 ${link.color}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};