import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { sendContactMessage } from '../services/email'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const initialForm = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendContactMessage(form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section relative">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="eyebrow mb-3 text-center"
      >
        Let&apos;s connect
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-center font-display text-3xl font-bold sm:text-4xl"
      >
        Get In <span className="gradient-text">Touch</span>
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1.5}
        className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-400 sm:text-base"
      >
        Have a project in mind, a question, or just want to say hi? My inbox is always open.
      </motion.p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="glass hover-glow flex flex-col justify-between rounded-2xl p-8"
        >
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Reach out directly via email, or connect on GitHub &amp; LinkedIn.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="glass flex h-10 w-10 items-center justify-center rounded-xl text-primary">
                <FiMail />
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a href="mailto:hello@navesh.in" className="text-sm font-medium text-slate-200">
                  hello@navesh.in
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="glass flex h-10 w-10 items-center justify-center rounded-xl text-secondary">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm font-medium text-slate-200">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/naveshs2002"
              target="_blank"
              rel="noreferrer"
              className="hover-glow glass flex h-11 w-11 items-center justify-center rounded-full text-lg"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/naveshs2002"
              target="_blank"
              rel="noreferrer"
              className="hover-glow glass flex h-11 w-11 items-center justify-center rounded-full text-lg"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          onSubmit={handleSubmit}
          className="glass hover-glow flex flex-col gap-5 rounded-2xl p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or just say hello..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hover-glow glass-strong inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : (
              <>
                Send Message <FiSend />
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm text-accent">
              <FiCheckCircle /> Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <FiAlertCircle /> Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
