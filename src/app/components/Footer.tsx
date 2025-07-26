'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function Footer() {
  return (
    <motion.footer
      className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="container max-w-7xl mx-auto px-4 py-8"
        variants={fadeInUp}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={fadeInUp}
        >
          <motion.div className="mb-4 md:mb-0" variants={fadeInUp}>
            <Link href="/" className="text-xl font-bold text-primary">
              Devfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Devfolio. All rights reserved.
            </p>
          </motion.div>

          <motion.div className="flex space-x-6" variants={fadeInUp}>
            <motion.a
              href="https://github.com/RaviKumarGupta07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-secondary hover:text-primary"
            >
              <FaGithub className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://x.com/RaviKumarG8039"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-secondary hover:text-primary"
            >
              <FaTwitter className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ravi-kumar-gupta-236079253/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-secondary hover:text-primary"
            >
              <FaLinkedin className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
