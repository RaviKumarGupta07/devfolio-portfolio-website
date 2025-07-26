'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function HeroSection() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* 👤 Profile Image */}
          <motion.div
            className="flex justify-center items-center mb-4"
            initial={scaleIn.initial}
            animate={scaleIn.animate}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ ...scaleIn.transition, delay: 0.2 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 object-cover ring-2 ring-primary transition-transform duration-300"
            />
          </motion.div>

          {/* 🧑‍💻 Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            Hi, I&apos;m{' '}
            <motion.span
              className="text-primary"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.8 }}
            >
              RAVI KUMAR GUPTA
            </motion.span>
          </motion.h1>

          {/* 💬 Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.p>

          {/* 🌐 Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/RaviKumarGupta07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ravi-kumar-gupta-236079253/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/RaviKumarG8039"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>

          {/* 📌 Buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
