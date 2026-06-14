import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCpu,
  FiCloud,
  FiTerminal,
  FiLayers,
  FiBriefcase,
  FiAward,
  FiGithub,
  FiClock,
} from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const interests = [
  { label: 'Artificial Intelligence', icon: FiCpu },
  { label: 'Machine Learning', icon: FiLayers },
  { label: 'Cloud Computing', icon: FiCloud },
  { label: 'DevOps & Automation', icon: FiTerminal },
]

const stats = [
  { label: 'Projects Completed', value: 12, suffix: '+', icon: FiBriefcase },
  { label: 'Certifications', value: 6, suffix: '+', icon: FiAward },
  { label: 'GitHub Repositories', value: 20, suffix: '+', icon: FiGithub },
  { label: 'Years of Learning', value: 5, suffix: '+', icon: FiClock },
]

const Counter = ({ value, suffix }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const stepTime = 16
    const steps = duration / stepTime
    const increment = value / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-white sm:text-4xl">
      {count}
      {suffix}
    </span>
  )
}

const About = () => {
  return (
    <section id="about" className="section relative">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="eyebrow mb-3 text-center"
      >
        Get to know me
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-center font-display text-3xl font-bold sm:text-4xl"
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Who am I + role + education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="glass hover-glow rounded-2xl p-8"
        >
          <h3 className="font-display text-xl font-semibold text-white">Who Am I</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            I'm a software professional from Chennai, Tamil Nadu, with hands-on experience
            across enterprise applications, SQL Server, support &amp; automation, Python
            development, AI/ML projects, and full stack web development with React.
          </p>

          <div className="mt-6 flex items-start gap-3">
            <div className="glass flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-primary">
              <FiBriefcase />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Current Role</p>
              <p className="text-sm text-slate-400">
                Software Professional at <span className="text-slate-200">TCS</span> —
                working on enterprise applications, database management and process
                automation.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <div className="glass flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-secondary">
              <FiAward />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Education</p>
              <p className="text-sm text-slate-400">
                MCA — Anna University (2022–2024) &amp; B.Sc Computer Science — VET
                Institute of Arts and Science (2018–2021).
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <div className="glass flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-accent">
              <FiCpu />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Career Goal</p>
              <p className="text-sm text-slate-400">
                To grow as a full-stack &amp; AI-focused engineer — building intelligent,
                scalable applications while continuously learning cloud and DevOps
                practices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interests + stats */}
        <div className="flex flex-col gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="glass hover-glow rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-semibold text-white">
              Areas of Interest
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {interests.map(({ label, icon: Icon }, idx) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04 }}
                  className="glass flex flex-col items-start gap-3 rounded-xl p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 text-primary">
                    <Icon />
                  </div>
                  <p className="text-sm font-medium text-slate-200">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="glass hover-glow grid grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-4"
          >
            {stats.map(({ label, value, suffix, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-primary">
                  <Icon />
                </div>
                <Counter value={value} suffix={suffix} />
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
