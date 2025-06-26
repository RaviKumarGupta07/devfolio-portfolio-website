'use client'

import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

      <div className="flex items-center justify-center gap-12 ">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:ravikumarg05082004@gmail.com" className="text-secondary hover:text-primary">
                  ravikumarg05082004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Jhansi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
