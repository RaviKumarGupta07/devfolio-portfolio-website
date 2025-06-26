'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        About Me
      </h1>

      {/* Bio Section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              {/* <li>Docker</li> */}
              <li>Postman</li>
              {/* <li>AWS</li>
              <li>CI/CD</li> */}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects & Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Vehiql Project */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
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
          </div>

          {/* Bookstore Project */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
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
          </div>

        </div>
      </section>


      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Technology in Information Technology</h3>
            <p className="text-primary mb-2">BIET Jhansi • 2022 - 2026</p>
            <p className="text-secondary">
              Final Year Student. Focused on software engineering and web development.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
