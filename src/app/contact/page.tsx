'use client';

import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function Contact() {
  return (
    <motion.div
      className="container max-w-7xl mx-auto py-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={fadeInUp}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="flex items-center justify-center gap-12"
        variants={fadeInUp}
      >
        <motion.div className="space-y-8" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:ravikumarg05082004@gmail.com" className="text-secondary hover:text-primary">
                  ravikumarg05082004@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Jhansi</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
