'use client';

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer
} from '@/utils/animations';

export default function About() {
  return (
    <motion.div
      className="container max-w-7xl mx-auto py-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Heading */}
      <motion.h1 className="text-4xl font-bold mb-8 text-center" variants={fadeInUp}>
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" variants={fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" variants={staggerContainer}>
        <motion.h2
          className="text-2xl font-bold mb-6 text-center"
          variants={fadeInUp}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Postman</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" variants={staggerContainer}>
        <motion.h2 className="text-2xl font-bold mb-6 text-center" variants={fadeInUp}>
          Projects & Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Vehiql Project */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">AI Car Marketplace – Vehiql</h3>
            <p className="text-primary mb-2">Personal Full Stack Project • 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2 mb-2">
              <li>Built a full-stack AI car marketplace using React 19, Next.js 15, Prisma, Supabase, and Clerk Auth</li>
              <li>Integrated Gemini API for AI recommendations and Arcjet for secure edge infrastructure</li>
              <li>Designed responsive UI with Tailwind CSS and Shadcn UI components</li>
            </ul>
            <a
              href="https://github.com/RaviKumarGupta07/vehiql"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              View on GitHub ↗
            </a>
          </motion.div>

          {/* Bookstore Project */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Bookstore Management System</h3>
            <p className="text-primary mb-2">Full Stack MERN Project • 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2 mb-2">
              <li>Developed a complete eCommerce-like bookstore with MERN stack</li>
              <li>Implemented admin dashboard, inventory control, authentication, and cart/checkout system</li>
              <li>Used Redux Toolkit, RTK Query, and Tailwind CSS for frontend state management and UI</li>
            </ul>
            <a
              href="https://github.com/RaviKumarGupta07/book-store-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              View on GitHub ↗
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section variants={staggerContainer}>
        <motion.h2 className="text-2xl font-bold mb-6 text-center" variants={fadeInUp}>
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Technology in Information Technology
            </h3>
            <p className="text-primary mb-2">BIET Jhansi • 2022 - 2026</p>
            <p className="text-secondary">
              Final Year Student. Focused on software engineering and web development.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
