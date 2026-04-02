'use client'

import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link
    const mailtoLink = `mailto:Mani.gupta.rg@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`

    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'Mani.gupta.rg@gmail.com',
      href: 'mailto:Mani.gupta.rg@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 97 5651 2206',
      href: 'tel:+919756512206',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Noida, India',
      href: '#',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'mani-gupta-rg',
      href: 'https://linkedin.com/in/mani-gupta-rg',
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <Link
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card flex items-start gap-4 group hover:bg-opacity-100"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <div className="text-white">{info.icon}</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {info.label}
                  </h4>
                  <p className="text-gray-400 break-all">{info.value}</p>
                </div>
              </Link>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/manigupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="group-hover:text-white" size={24} />
                </Link>
                <Link
                  href="https://linkedin.com/in/mani-gupta-rg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="group-hover:text-white" size={24} />
                </Link>
                <Link
                  href="mailto:Mani.gupta.rg@gmail.com"
                  className="p-4 bg-gray-700 hover:bg-blue-600 rounded-lg transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="group-hover:text-white" size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
