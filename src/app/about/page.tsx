'use client';

import { FaCode, FaLaptopCode, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

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
          Skilled in React, Next.js, Node.js, and more — I focus on clean code, problem solving, and crafting impactful digital products.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" variants={staggerContainer}>
        <motion.h2 className="text-2xl font-bold mb-6 text-center" variants={fadeInUp}>
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
              <li>React.js / Next.js</li>
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
              <li>Node.js / Express.js</li>
              <li>MongoDB / PostgreSQL</li>
              <li>Prisma / Mongoose</li>
              <li>JWT Auth / Clerk</li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaTools className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub / VS Code</li>
              <li>Postman / Chrome DevTools</li>
              <li>MongoDB Compass</li>
              <li>Axios / React Router / Toast</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="mb-16" variants={staggerContainer}>
        <motion.h2 className="text-2xl font-bold mb-6 text-center" variants={fadeInUp}>
          Projects & Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Vehiql */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">AI Car Marketplace – Vehiql</h3>
            <p className="text-primary mb-2">Personal Full Stack Project • 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2 mb-2">
              <li>Built using React 19, Next.js 15, Tailwind CSS, Prisma, Supabase, and Clerk</li>
              <li>Integrated Gemini API and Arcjet for secure AI-powered recommendations</li>
              <li>30% faster mobile load time using optimized responsive UI</li>
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

          {/* Bookstore */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Bookstore – MERN Stack E-commerce</h3>
            <p className="text-primary mb-2">Full Stack MERN Project • 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2 mb-2">
              <li>Built complete bookstore app with user and admin panels</li>
              <li>Features: cart, checkout, authentication, product management</li>
              <li>Tech: React, Node.js, Express.js, MongoDB, Redux Toolkit, RTK Query</li>
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

          {/* Leaderboard App */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Leaderboard App</h3>
            <p className="text-primary mb-2">Frontend Project • 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2 mb-2">
              <li>Responsive leaderboard built with React, Vite, and Tailwind CSS</li>
              <li>Users can add participants, claim points, and see real-time ranks with pagination</li>
              <li>Tech: React, Vite, Tailwind, Axios, React Router, React Hot Toast</li>
            </ul>
            <a
              href="https://github.com/RaviKumarGupta07/leaderboard-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              View on GitHub ↗
            </a>
          </motion.div>

          {/* Portfolio Website */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-primary mb-2">Personal Project • 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2 mb-2">
              <li>My personal portfolio showcasing projects, skills, and contact info</li>
              <li>Built using modern stack and smooth animations with Framer Motion</li>
              <li>Tech: Next.js, Tailwind CSS, Framer Motion</li>
            </ul>
            <div className="flex gap-4">
              {/* <a
                href="https://devfolio-portfolio-website.vercel.app/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80 transition-colors"
              >
                Live Demo ↗
              </a> */}
              <a
                href="https://github.com/RaviKumarGupta07/devfolio-portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80 transition-colors"
              >
                View on GitHub ↗
              </a>
            </div>
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
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Technology in Information Technology
            </h3>
            <p className="text-primary mb-2">Bundelkhand Institute of Engineering & Technology (2022–2026)</p>
            <p className="text-secondary">
              CGPA: 8.42 / 10 • Top 5% of the batch • Focus: DSA, Algorithms, Web Development
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
